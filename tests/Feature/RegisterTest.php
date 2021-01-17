<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

use App\Http\Controllers\UserController;

class RegisterTest extends TestCase
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
}
