<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

use App\Models\Post;
use App\Http\Controllers\UserController;

class PostTest extends TestCase
{
    use RefreshDatabase;
    use WithFaker;
    
    /** @test */
    public function can_create_post() {
        // Create a new user.
        $password = $this->faker->password;
        $user = UserController::create($this->faker->userName, $this->faker->name, $password);

        // Make a login request, starting from an empty session (i.e. ensure no prior logins).
        $response = $this->withSession([])->post('/login', [
            'user_id' => $user->id,
            'password' => $password,
        ]);

        // Verify no posts exists.
        $this->assertDatabaseCount('posts', 0);

        // Attempt to create a post.
        $body = $this->faker->paragraph;
        $response = $this->post('/posts', [
            'user_id' => $user->id,
            'body' => $body,
        ]);

        // Verify that post now exists.
        $this->assertDatabaseHas('posts', [
            'user_id' => $user->id,
            'body' => $body,
        ]);
        $this->assertDatabaseCount('posts', 1);
    }
    
    /** @test */
    public function can_delete_post() {
        // Create a new user.
        $password = $this->faker->password;
        $user = UserController::create($this->faker->userName, $this->faker->name, $password);

        // Make a login request, starting from an empty session (i.e. ensure no prior logins).
        $response = $this->withSession([])->post('/login', [
            'user_id' => $user->id,
            'password' => $password,
        ]);

        // Create a post.
        $body = $this->faker->paragraph;
        $response = $this->post('/posts', [
            'user_id' => $user->id,
            'body' => $body,
        ]);

        $post = Post::where('user_id', $user->id)->where('body', $body)->first();

        // Delete the post.
        $response = $this->delete('/posts', [
            'post_id' => $post->id,
            'user_id' => $user->id,
        ]);

        $this->assertDatabaseCount('posts', 0);
    }

    /** @test */
    public function can_delete_post_with_comments() {
        // Create a post.

        // Add comments.

        // Attempt to delete post.
    }

    /** @test */
    public function can_delete_post_with_reactions() {
        // Create a post.

        // Add reactions.

        // Attempt to delete post.
    }
}
