<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;

use App\Models\User;

use App\Http\Resources\UserResource;

class UserController extends Controller
{
    /*
     *
     * Non-static functions
     * 
     */
    public function session(Request $request) {
        return [
            'authenticated_user_id' => $request->session()->get('user_id'),
            'authenticated_token' => $request->session()->get('authenticated_token'),
        ];
    }

    public function register(Request $request) {
        // Validate the inputs.
        $validated = $request->validate([
            'user_id' => ['required', 'unique:users,id', 'max:255'],
            'display_name' => ['required', 'max:255'],
            'password' => ['required', 'min:4', 'max:32'],
        ]);

        // Create the user.
        $user = static::create($request->user_id, $request->display_name, $request->password);

        // Attempt to authenticate user and save a remember token.
        static::authenticateAndStore($request, $request->user_id, $request->password);

        return redirect('/');
    }

    public function login(Request $request) {
        // Validate the inputs.
        $validated = $request->validate([
            'user_id' => ['required'],
            'password' => ['required'],
        ]);

        // Attempt to authenticate user and save a remember token.
        if (static::authenticateAndStore($request, $request->user_id, $request->password)) {
            return redirect('/');
        } else {
            return redirect('/login')->withErrors(['credentials' => 'Username or password did not match any of our records.']);
        }
    }

    public function logout(Request $request) {
        // Clear their user_id and token from session.
        $request->session()->put('user_logged_in', false);
        $request->session()->forget(['user_id', 'authenticated_token']);

        return redirect('/');
    }

    public function profile(Request $request, string $id = null) {
        if (!is_null($id)) { // FIXME is there an Eloquent way to check this?
            $user = User::find($id);
        } else {
            $user = User::find($request->session()->get('user_id'));
        }

        return view('profile', [
            'user' => $user,
        ]);
    }

    public function fetch(Request $request, string $id = null) {
        if (!is_null($id)) { // FIXME is there an Eloquent way to check this?
            $user = User::find($id);
        } else {
            $user = User::find($request->session()->get('user_id'));
        }

        return new UserResource($user);
    }

    public function update(Request $request) {
        // Get user model based on ID in session.
        $user = User::find($request->session()->get('user_id'));

        // Update avatar URL based on request.
        if ($request->has('avatar_url')) {
            $user->avatar_url = $request->avatar_url;
        }

        // Upload avatar and update avatar URL based on request.
        if ($request->has('avatar_file')) {
            // Downsize the image, if necessary. Don't want anything bigger than 160x160, but also want to keep the aspect ratio.
            // FIXME consider resizing locally in JS before uploading, to save transfer time.
            $image = Image::make($request->file('avatar_file'));

            $image->resize(160, 160, function($constraint) { // Set the size limits to 160px to a dimension.
                $constraint->aspectRatio(); // Maintain the original aspect ratio.
                $constraint->upsize(); // Prevent the image from upsizing. This function will only make images smaller.
            });

            // Read exif data for orientation, if any, and rotate the image as appropriate.
            // This prevents the orientation from changing between when it's uploaded and when
            // it's displayed.
            $image->orientate();

            $storage_path = storage_path('app/avatars/');
            $public_path = 'avatars/';
            $filename = time() . $request->avatar_file->getClientOriginalName();
            $image->save($storage_path . $filename);
            $user->avatar_url = $public_path . $filename;
        }

        $user->save();

        return new UserResource($user);
    }

    /*
     *
     * Static functions
     * 
     */

    static function create(string $id, string $display_name, string $password) {
        $user = new User;
        $user->id = $id;
        $user->display_name = $display_name;
        $user->hashed_password = Hash::make($password);
        $user->save();

        return $user; // TODO add check and error handling
    }

    static function delete(string $id) {
        $user = User::findOrFail($id);
        $user->delete();

        return $user; // TODO add check and error handling
    }

    static function rename(string $id, string $display_name) {
        $user = User::findOrFail($id);
        $user->display_name = $display_name;
        $user->save();

        return $user; // TODO add check and error handling.
    }

    static function authenticate(string $id, string $password) {
        // Check if user exists.
        try {
            $user = User::findOrFail($id);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return false;
        }

        // If it does, check if password matches.
        if (Hash::check($password, $user->hashed_password)) {
            return true;
        } else {
            return false;
        }
    }

    static function authenticateAndStore(Request $request, string $id, string $password) {
        if (static::authenticate($id, $password)) {
            // Generate a token. For something that's not just a sandbox,
            // I'd do a lot more work to ensure unique and secure tokens across users.
            $token = Hash::make($id . Str::random(16));

            // Store the token and user_id in user session.
            $request->session()->regenerate();
            $request->session()->put('authenticated_token', $token);
            $request->session()->put('user_id', $id);
            $request->session()->put('user_logged_in', true);

            // Store the token in user table. Now we can compare these tokens in the future.
            $user = User::find($id);
            $user->authenticated_token = $token;
            $user->save();
            
            return true;
        } else {
            $request->session()->put('user_logged_in', false);
            
            return false;
        }
    }
}
