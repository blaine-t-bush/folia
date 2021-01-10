<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

use App\Models\User;
use App\Http\Controllers\UserController;

class UserTest extends TestCase
{
    use WithFaker;

    /** @test */
    public function can_create_user() {
        // Attempt to create a new user.
        $user_id = $this->faker->userName;
        $display_name = $this->faker->name;
        $password = $this->faker->password;

        $user = UserController::create($user_id, $display_name, $password);

        // Check user exists.
        $this->assertDatabaseHas('folia_users', ['user_id' => $user_id]);

        // Check password and display name match.
        $user = User::find($user_id);
        $this->assertTrue(Hash::check($password, $user->hashed_password));
        $this->assertTrue($user->display_name == $display_name);

    }

    /** @test */
    public function can_delete_user() {
        // Attempt to create a new user.
        $user_id = $this->faker->userName;
        $display_name = $this->faker->name;
        $password = $this->faker->password;

        $user = UserController::create($user_id, $display_name, $password);

        // Now delete it.
        $user = UserController::delete($user_id);

        // And check that it worked.
        $this->assertDeleted($user);
    }

    /** @test */
    public function can_rename_user() {
        // Attempt to create a new user.
        $user_id = $this->faker->userName;
        $display_name = $this->faker->name;
        $password = $this->faker->password;

        $user = UserController::create($user_id, $display_name, $password);

        // Now rename it.
        $new_display_name = $this->faker->name;
        $user = UserController::rename($user_id, $new_display_name);

        // And check that it worked.
        $this->assertTrue($user->display_name == $new_display_name);
    }

    /** @test */
    public function can_authenticate_user() {
        // Attempt to create a new user.
        $user_id = $this->faker->userName;
        $display_name = $this->faker->name;
        $password = $this->faker->password;

        $user = UserController::create($user_id, $display_name, $password);

        // Now attempt to authenticate with...
        // ... empty user_id and password
        $this->assertFalse(UserController::authenticate('', ''));
        // ... correct user_id, empty password
        $this->assertFalse(UserController::authenticate($user_id, ''));
        // ... empty user_id, correct password
        $this->assertFalse(UserController::authenticate('', $password));
        // ... correct user_id and password
        $this->assertTrue(UserController::authenticate($user_id, $password));
    }
}
