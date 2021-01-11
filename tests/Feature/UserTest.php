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
        $id = $this->faker->userName;
        $display_name = $this->faker->name;
        $password = $this->faker->password;

        $user = UserController::create($id, $display_name, $password);

        // Check user exists.
        $this->assertDatabaseHas('users', ['id' => $id]);

        // Check password and display name match.
        $user = User::find($id);
        $this->assertTrue(Hash::check($password, $user->hashed_password));
        $this->assertTrue($user->display_name == $display_name);

    }

    /** @test */
    public function can_delete_user() {
        // Attempt to create a new user.
        $id = $this->faker->userName;
        $display_name = $this->faker->name;
        $password = $this->faker->password;

        $user = UserController::create($id, $display_name, $password);

        // Now delete it.
        $user = UserController::delete($id);

        // And check that it worked.
        $this->assertDeleted($user);
    }

    /** @test */
    public function can_rename_user() {
        // Attempt to create a new user.
        $id = $this->faker->userName;
        $display_name = $this->faker->name;
        $password = $this->faker->password;

        $user = UserController::create($id, $display_name, $password);

        // Now rename it.
        $new_display_name = $this->faker->name;
        $user = UserController::rename($id, $new_display_name);

        // And check that it worked.
        $this->assertTrue($user->display_name == $new_display_name);
    }

    /** @test */
    public function can_authenticate_user() {
        // Attempt to create a new user.
        $id = $this->faker->userName;
        $display_name = $this->faker->name;
        $password = $this->faker->password;

        $user = UserController::create($id, $display_name, $password);

        // Now attempt to authenticate with...
        // ... empty id and password
        $this->assertFalse(UserController::authenticate('', ''));
        // ... correct id, empty password
        $this->assertFalse(UserController::authenticate($id, ''));
        // ... empty id, correct password
        $this->assertFalse(UserController::authenticate('', $password));
        // ... correct id and password
        $this->assertTrue(UserController::authenticate($id, $password));
    }
}
