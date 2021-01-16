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
    public function can_create_post()
    {
        // Create user.
        $id = $this->faker->userName;
        $display_name = $this->faker->name;
        $password = $this->faker->password;
        $user = UserController::create($id, $display_name, $password);
        $user->refresh();

        // Log user in.
        $response = $this->withSession([])->post('/login', [
            'user_id' => $user->id,
            'password' => $password,
        ]);

        // Verify no posts already exist.
        $this->assertDatabaseCount('posts', 0);

        // Create post.
        $body = $this->faker->paragraph;
        $response = $this->post('/api/posts', [
            'user_id' => $user->id,
            'body' => $body,
        ]);

        // Check response. Should return a PostResource.
        $response
            ->assertStatus(201)
            ->assertJson([
                'user_id' => $user->id,
                'user' => [
                    'display_name' => $user->display_name,
                ],
                'body' => $body,
            ]);

        // Check database for matching post.
        $this->assertDatabaseCount('posts', 1);
        $this->assertDatabaseHas('posts', [
            'user_id' => $user->id,
            'body' => $body,
        ]);
    }
    
    /** @test */
    public function can_delete_post()
    {
        // Create user.
        $id = $this->faker->userName;
        $display_name = $this->faker->name;
        $password = $this->faker->password;
        $user = UserController::create($id, $display_name, $password);
        $user->refresh();

        // Log user in.
        $response = $this->withSession([])->post('/login', [
            'user_id' => $user->id,
            'password' => $password,
        ]);

        // Create post.
        $body = $this->faker->paragraph;
        $response = $this->post('/api/posts', [
            'user_id' => $user->id,
            'body' => $body,
        ]);

        $post_id = $response['id'];

        // Delete post.
        $response = $this->delete('/api/posts', [
            'id' => $post_id,
        ]);

        // Check response. Should return a PostResource.
        $response
            ->assertStatus(200)
            ->assertJson([
                'id' => $post_id,
                'user_id' => $user->id,
                'user' => [
                    'display_name' => $user->display_name,
                ],
                'body' => $body,
            ]);

        // Check that matching post has been deleted from database.
        $this->assertDatabaseCount('posts', 0);
        $this->assertDatabaseMissing('posts', [
            'id' => $post_id,
            'user_id' => $user->id,
            'body' => $body,
        ]);
    }

    /** @test */
    public function can_delete_post_with_comment_from_same_user()
    {
        // Create user.
        $id = $this->faker->userName;
        $display_name = $this->faker->name;
        $password = $this->faker->password;
        $user = UserController::create($id, $display_name, $password);
        $user->refresh();

        // Log user in.
        $response = $this->withSession([])->post('/login', [
            'user_id' => $user->id,
            'password' => $password,
        ]);

        // Create post.
        $body = $this->faker->paragraph;
        $response = $this->post('/api/posts', [
            'user_id' => $user->id,
            'body' => $body,
        ]);

        $post_id = $response['id'];

        // Add comment to post.
        $response = $this->post('/api/comments', [
            'user_id' => $user->id,
            'body' => $this->faker->paragraph,
        ]);

        // Delete post.
        $response = $this->delete('/api/posts', [
            'id' => $post_id,
        ]);

        // Check response. Should return a PostResource.
        $response
            ->assertStatus(200)
            ->assertJson([
                'id' => $post_id,
                'user_id' => $user->id,
                'user' => [
                    'display_name' => $user->display_name,
                ],
                'body' => $body,
            ]);

        // Check that matching post has been deleted from database.
        $this->assertDatabaseCount('posts', 0);
        $this->assertDatabaseMissing('posts', [
            'id' => $post_id,
            'user_id' => $user->id,
            'body' => $body,
        ]);
    }

    /** @test */
    public function can_delete_post_with_comment_from_other_users()
    {

    }

    /** @test */
    public function can_delete_post_with_reactions_from_same_user()
    {
        // Create user.
        $id = $this->faker->userName;
        $display_name = $this->faker->name;
        $password = $this->faker->password;
        $user = UserController::create($id, $display_name, $password);
        $user->refresh();

        // Log user in.
        $response = $this->withSession([])->post('/login', [
            'user_id' => $user->id,
            'password' => $password,
        ]);

        // Create post.
        $body = $this->faker->paragraph;
        $response = $this->post('/api/posts', [
            'user_id' => $user->id,
            'body' => $body,
        ]);

        $post_id = $response['id'];

        // Add reactions to post.
        $response = $this->post('/api/reactions', [
            'user_id' => $user->id,
            'post_id' => $post_id,
            'type' => 'smile',
        ]);
        
        $response = $this->post('/api/reactions', [
            'user_id' => $user->id,
            'post_id' => $post_id,
            'type' => 'frown',
        ]);
        
        $response = $this->post('/api/reactions', [
            'user_id' => $user->id,
            'post_id' => $post_id,
            'type' => 'heart',
        ]);
        
        $response = $this->post('/api/reactions', [
            'user_id' => $user->id,
            'post_id' => $post_id,
            'type' => 'laugh',
        ]);

        // Delete post.
        $response = $this->delete('/api/posts', [
            'id' => $post_id,
        ]);

        // Check response. Should return a PostResource.
        $response
            ->assertStatus(200)
            ->assertJson([
                'id' => $post_id,
                'user_id' => $user->id,
                'user' => [
                    'display_name' => $user->display_name,
                ],
                'body' => $body,
            ]);

        // Check that matching post has been deleted from database.
        $this->assertDatabaseCount('posts', 0);
        $this->assertDatabaseMissing('posts', [
            'id' => $post_id,
            'user_id' => $user->id,
            'body' => $body,
        ]);
    }

    /** @test */
    public function can_delete_post_with_reactions_from_other_users()
    {

    }
}
