<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

use App\Models\Post;
use App\Models\Reaction;
use App\Http\Controllers\ReactionController;
use App\Http\Controllers\UserController;

class ReactionTest extends TestCase
{
    use RefreshDatabase;
    use WithFaker;

    private function create_users_and_posts()
    {
        // Create users.
        $idA = $this->faker->userName;
        $display_nameA = $this->faker->name;
        $passwordA = $this->faker->password;
        $userA = UserController::create($idA, $display_nameA, $passwordA);
        $userA->refresh();

        $idB = $this->faker->userName;
        $display_nameB = $this->faker->name;
        $passwordB = $this->faker->password;
        $userB = UserController::create($idB, $display_nameB, $passwordB);
        $userB->refresh();

        // Create two posts, one for each user.
        $response = $this->withSession([])->post('/login', [
            'user_id' => $userA->id,
            'password' => $passwordA,
        ]);

        $response = $this->post('/api/posts', [
            'user_id' => $userA->id,
            'body' => $this->faker->paragraph,
        ]);

        $postA = Post::find($response['id']);

        $response = $this->withSession([])->post('/login', [
            'user_id' => $userB->id,
            'password' => $passwordB,
        ]);

        $response = $this->post('/api/posts', [
            'user_id' => $userB->id,
            'body' => $this->faker->paragraph,
        ]);

        $postB = Post::find($response['id']);

        return [
            $userA,
            $passwordA,
            $userB,
            $passwordB,
            $postA,
            $postB,
        ];
    }

    /** @test */
    public function can_react()
    {
        $reaction_types = ['smile', 'frown', 'heart', 'laugh'];

        foreach ($reaction_types as $reaction_type)
        {
            list($userA, $passwordA, $userB, $passwordB, $postA, $postB) = $this->create_users_and_posts();

            // Have user A react to first post. Should have one entry per reaction.
            $response = $this->withSession([])->post('/login', [
                'user_id' => $userA->id,
                'password' => $passwordA,
            ]);
            
            $response = $this->post('/api/reactions', [
                'id' => $postA->id,
                'type' => $reaction_type,
            ]);

            // Check response. Should return a ReactionResource.
            $response
                ->assertStatus(201)
                ->assertJson([
                    'user_id' => $userA->id,
                    'post_id' => $postA->id,
                    'type' => $reaction_type,
                ]);

            // Check database for matching entry.
            $this->assertDatabaseHas('reactions', [
                'user_id' => $userA->id,
                'post_id' => $postA->id,
                'type' => $reaction_type,
            ]);

            // Have user A react to second post. Should have one entry per reaction.
            $response = $this->post('/api/reactions', [
                'id' => $postB->id,
                'type' => $reaction_type,
            ]);

            // Check response. Should return a ReactionResource.
            $response
                ->assertStatus(201)
                ->assertJson([
                    'user_id' => $userA->id,
                    'post_id' => $postB->id,
                    'type' => $reaction_type,
                ]);

            // Check database for matching entry.
            $this->assertDatabaseHas('reactions', [
                'user_id' => $userA->id,
                'post_id' => $postB->id,
                'type' => $reaction_type,
            ]);
        }
    }

    /** @test */
    public function can_unreact()
    {
        $reaction_types = ['smile', 'frown', 'heart', 'laugh'];

        foreach ($reaction_types as $reaction_type)
        {
            list($userA, $passwordA, $userB, $passwordB, $postA, $postB) = $this->create_users_and_posts();

            // Have user A react to first post.
            $response = $this->withSession([])->post('/login', [
                'user_id' => $userA->id,
                'password' => $passwordA,
            ]);
            
            $response = $this->post('/api/reactions', [
                'id' => $postA->id,
                'type' => $reaction_type,
            ]);

            $reaction_id = $response['id'];

            // Have user A un-react to first post. Respective entry should now be deleted.
            $response = $this->delete('/api/reactions', [
                'id' => $postA->id,
                'type' => $reaction_type,
            ]);

            $response
                ->assertStatus(200)
                ->assertJson([
                    'id' => $reaction_id,
                    'user_id' => $userA->id,
                    'post_id' => $postA->id,
                    'type' => $reaction_type,
                ]);
            
            $this->assertDatabaseMissing('reactions', [
                'id' => $reaction_id,
            ]);

            // Have user A react to second post.
            $response = $this->post('/api/reactions', [
                'id' => $postB->id,
                'type' => $reaction_type,
            ]);

            $reaction_id = $response['id'];

            // Have user A un-react to second post. Respective entry should now be deleted.
            $response = $this->delete('/api/reactions', [
                'id' => $postB->id,
                'type' => $reaction_type,
            ]);

            $response
                ->assertStatus(200)
                ->assertJson([
                    'id' => $reaction_id,
                    'user_id' => $userA->id,
                    'post_id' => $postB->id,
                    'type' => $reaction_type,
                ]);
        }
    }

    /** @test */
    public function cannot_react_again()
    {
        $reaction_types = ['smile', 'frown', 'heart', 'laugh'];

        foreach ($reaction_types as $reaction_type)
        {
            list($userA, $passwordA, $userB, $passwordB, $postA, $postB) = $this->create_users_and_posts();

            // Have user A react to first post.
            $response = $this->withSession([])->post('/login', [
                'user_id' => $userA->id,
                'password' => $passwordA,
            ]);
            
            $response = $this->post('/api/reactions', [
                'id' => $postA->id,
                'type' => $reaction_type,
            ]);

            // Attempt to react to first post again.
            $response = $this->post('/api/reactions', [
                'id' => $postA->id,
                'type' => $reaction_type,
            ]);

            // Check response. Should return a ReactionResource.
            $response
            ->assertStatus(200)
            ->assertJson([
                'user_id' => $userA->id,
                'post_id' => $postA->id,
                'type' => $reaction_type,
            ]);

            // Check database for matching entry.
            $this->assertDatabaseHas('reactions', [
                'user_id' => $userA->id,
                'post_id' => $postA->id,
                'type' => $reaction_type,
            ]);

            // Ensure database does not have more than one of this entry.
            $this->assertTrue(
                Reaction::where('user_id', $userA->id)
                        ->where('post_id', $postA->id)
                        ->where('type', $reaction_type)
                        ->get()
                        ->count() == 1
            );

            // Have user A react to second post.
            $response = $this->post('/api/reactions', [
                'id' => $postB->id,
                'type' => $reaction_type,
            ]);

            // Attempt to react to second post again.
            $response = $this->post('/api/reactions', [
                'id' => $postB->id,
                'type' => $reaction_type,
            ]);

            // Check response. Should return a ReactionResource.
            $response
            ->assertStatus(200)
            ->assertJson([
                'user_id' => $userA->id,
                'post_id' => $postB->id,
                'type' => $reaction_type,
            ]);

            // Check database for matching entry.
            $this->assertDatabaseHas('reactions', [
                'user_id' => $userA->id,
                'post_id' => $postB->id,
                'type' => $reaction_type,
            ]);

            // Ensure database does not have more than one of this entry.
            $this->assertTrue(
                Reaction::where('user_id', $userA->id)
                        ->where('post_id', $postB->id)
                        ->where('type', $reaction_type)
                        ->get()
                        ->count() == 1
            );
        }
    }
}
