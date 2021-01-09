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
            'username' => ['required', 'unique:folia_users', 'max:255'],
            'display_name' => ['required', 'max:255'],
            'password' => ['required', 'min:4', 'max:32'],
        ]);

        // Create the user.
        $user = static::create($request->username, $request->display_name, $request->password);

        // Send them to the feed.
        // FIXME automatically log user in after registration.
        return redirect('/folia');
    }

    public function login(Request $request) {
        // Validate the inputs.
        $validated = $request->validate([
            'username' => ['required'],
            'password' => ['required'],
        ]);

        // Attempt to authenticate user.
        if (static::authenticate($request->username, $request->password)) {
            // Generate a token. For something that's not just a sandbox,
            // I'd do a lot more work to ensure unique tokens across users.
            $token = Hash::make($request->username . Str::random(16));

            // Store the token and username in user session.
            $request->session()->regenerate();
            $request->session()->put('folia_authenticated_token', $token);
            $request->session()->put('folia_username', $request->username);

            // Store the token in user table. Now we can compare these tokens in the future.
            $user = FoliaUser::find($request->username);
            $user->authenticated_token = $token;
            $user->save();
        }

        return redirect('/folia');
    }

    public function logout(Request $request) {
        // Clear their username and token from session.
        $request->session()->forget(['folia_username', 'folia_authenticated_token']);

        return redirect('/folia');
    }

    public function profile(Request $request) {
        // Get user information.
        $user = FoliaUser::find($request->session()->get('folia_username'));

        return view('folia.profile', [
            'user' => $user,
        ]);
    }

    /*
     *
     * Static functions
     * 
     */

    static function create(string $username, string $display_name, string $password) {
        $user = new FoliaUser;
        $user->username = $username;
        $user->display_name = $display_name;
        $user->hashed_password = Hash::make($password);
        $user->save();

        return $user; // TODO add check and error handling
    }

    static function delete(string $username) {
        $user = FoliaUser::findOrFail($username);
        $user->delete();

        return $user; // TODO add check and error handling
    }

    static function rename(string $username, string $display_name) {
        $user = FoliaUser::findOrFail($username);
        $user->display_name = $display_name;
        $user->save();

        return $user; // TODO add check and error handling.
    }

    static function authenticate(string $username, string $password) {
        // Check if user exists.
        try {
            $user = FoliaUser::findOrFail($username);
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
}
