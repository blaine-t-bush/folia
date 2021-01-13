<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;

use App\Models\User;

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

    public function profile(Request $request) {
        // Get user information.
        $user = User::find($request->session()->get('user_id'));

        return view('profile', [
            'user' => $user,
        ]);
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
