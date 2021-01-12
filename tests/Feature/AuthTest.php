<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

use App\Http\Controllers\UserController;

class AuthTest extends TestCase
{
    use RefreshDatabase;
    use WithFaker;

    /** @test */
    public function can_direct_to_registration() {
        // Send get request to /register. Should see register form.
        $response = $this->get('/register');
        $response->assertStatus(200);
        $response->assertSee('<form class="register"', false);
    }

    /** @test */
    public function can_register_user() {
        // Send post request to /register with complete and unique credentials. Should create a user.
        $response = $this->post('/register', [
            'user_id' => $this->faker->userName,
            'display_name' => $this->faker->name,
            'password' => $this->faker->password,
        ]);

        // Should redirect back to home page after registration.
        $response->assertLocation('/');
    }

    /** @test */
    public function cannot_register_incomplete() {
        // Send post request to /register with incomplete credentials.
        $response = $this->post('/register', [
            'user_id' => null,
            'display_name' => null,
            'password' => null,
        ]);

        // Should throw validation errors.
        $response->assertSessionHasErrors(['user_id', 'display_name', 'password']);
    }

    /** @test */
    public function cannot_register_duplicate() {
        // Create a new user.
        $user = UserController::create($this->faker->userName, $this->faker->name, $this->faker->password);

        // Send post request to /register with non-unique user_id. Should return to /register with errors.
        $response = $this->post('/register', [
            'user_id' => $user->id,
            'display_name' => $this->faker->name,
            'password' => $this->faker->password,
        ]);

        // Should throw validation error for user_id.
        $response->assertSessionHasErrors(['user_id']);
    }

    /** @test */
    public function can_direct_to_login() {
        // Send get request to /login. Should see login form.
        $response = $this->get('/login');
        $response->assertStatus(200);
        $response->assertSee('<form class="login"', false);
    }

    /** @test */
    public function can_login_user() {
        // Create a new user.
        $password = $this->faker->password;
        $user = UserController::create($this->faker->userName, $this->faker->name, $password);

        // Make a login request, starting from an empty session (i.e. ensure no prior logins).
        $response = $this->withSession([])->post('/login', [
            'user_id' => $user->id,
            'password' => $password,
        ]);

        // Response should have the following session variables: user_logged_in, user_id, authenticated_token.
        $user->refresh();
        $response->assertSessionHas('user_id', $user->id);
        $response->assertSessionHas('user_logged_in', true);
        $response->assertSessionHas('authenticated_token', $user->authenticated_token);
    }

    /** @test */
    public function cannot_login_incomplete() {
        // Create a new user.
        $password = $this->faker->password;
        $user = UserController::create($this->faker->userName, $this->faker->name, $password);

        // Send post request to /login with incomplete credentials.
        $response = $this->withSession([])->post('/login', [
            'user_id' => null,
            'password' => null,
        ]);

        // Should be missing relevant authentication session vars, and throw validation errors.
        $response->assertSessionMissing('user_id');
        $response->assertSessionMissing('user_logged_in');
        $response->assertSessionMissing('authenticated_token');
        $response->assertSessionHasErrors(['user_id', 'password']);
    }

    /** @test */
    public function cannot_login_invalid() {
        // Create a new user.
        $password = $this->faker->password;
        $user = UserController::create($this->faker->userName, $this->faker->name, $password);

        // Send post request to /login with wrong credentials.
        $response = $this->withSession([])->post('/login', [
            'user_id' => $user->id,
            'password' => $password . '1',
        ]);

        // Should be missing relevant authentication session vars.
        $response->assertSessionMissing('user_id');
        $response->assertSessionHas('user_logged_in', false);
        $response->assertSessionMissing('authenticated_token');

        // Send post request to /login with wrong credentials.
        $response = $this->withSession([])->post('/login', [
            'user_id' => $user->id . '1',
            'password' => $password,
        ]);

        // Should be missing relevant authentication session vars.
        $response->assertSessionMissing('user_id');
        $response->assertSessionHas('user_logged_in', false);
        $response->assertSessionMissing('authenticated_token');
    }
}