<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;

use App\Models\FoliaUser;

class FoliaUserController extends Controller
{
    /*
     *
     * Non-static functions
     * 
     */

    public function register(Request $request) {
        // Validate the inputs.
        $validated = $request->validate([
            'id' => ['required', 'unique:folia_users', 'max:255'],
            'display_name' => ['required', 'max:255'],
            'password' => ['required', 'min:4', 'max:32'],
        ]);

        // Create the user.
        $user = static::create($request->id, $request->display_name, $request->password);

        // Attempt to authenticate user and save a remember token.
        $login = static::authenticateAndStore($request, $request->id, $request->password);

        return redirect('/folia');
    }

    public function login(Request $request) {
        // Validate the inputs.
        $validated = $request->validate([
            'id' => ['required'],
            'password' => ['required'],
        ]);

        // Attempt to authenticate user and save a remember token.
        $login = static::authenticateAndStore($request, $request->id, $request->password);

        return redirect('/folia');
    }

    public function logout(Request $request) {
        // Clear their user_id and token from session.
        $request->session()->forget(['folia_user_id', 'folia_authenticated_token']);

        return redirect('/folia');
    }

    public function profile(Request $request) {
        // Get user information.
        $user = FoliaUser::find($request->session()->get('folia_user_id'));

        return view('folia.profile', [
            'user' => $user,
        ]);
    }

    /*
     *
     * Static functions
     * 
     */

    static function create(string $id, string $display_name, string $password) {
        $user = new FoliaUser;
        $user->id = $id;
        $user->display_name = $display_name;
        $user->hashed_password = Hash::make($password);
        $user->save();

        return $user; // TODO add check and error handling
    }

    static function delete(string $id) {
        $user = FoliaUser::findOrFail($id);
        $user->delete();

        return $user; // TODO add check and error handling
    }

    static function rename(string $id, string $display_name) {
        $user = FoliaUser::findOrFail($id);
        $user->display_name = $display_name;
        $user->save();

        return $user; // TODO add check and error handling.
    }

    static function authenticate(string $id, string $password) {
        // Check if user exists.
        try {
            $user = FoliaUser::findOrFail($id);
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
            // I'd do a lot more work to ensure unique tokens across users.
            $token = Hash::make($id . Str::random(16));

            // Store the token and user_id in user session.
            $request->session()->regenerate();
            $request->session()->put('folia_authenticated_token', $token);
            $request->session()->put('folia_user_id', $id);

            // Store the token in user table. Now we can compare these tokens in the future.
            $user = FoliaUser::find($id);
            $user->authenticated_token = $token;
            $user->save();
            
            return true;
        } else {
            return false;
        }
    }
}
