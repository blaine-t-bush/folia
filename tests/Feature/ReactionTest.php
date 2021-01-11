<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

use App\Models\Reaction;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ReactionController;
use App\Http\Controllers\UserController;

class ReactionTest extends TestCase
{
    use WithFaker;

    /** @test */
    public function can_react() {
        $reaction_types = ['smile', 'frown', 'heart', 'laugh'];

        foreach ($reaction_types as $reaction_type) {
            // Create two users.
            $userA = UserController::create($this->faker->userName, $this->faker->name, $this->faker->password);
            $userB = UserController::create($this->faker->userName, $this->faker->name, $this->faker->password);

            // Create two posts, one for each user.
            $postA = PostController::create($userA->id, $this->faker->paragraph);
            $postB = PostController::create($userB->id, $this->faker->paragraph);

            $reaction_parameters_postA = [
                'user_id' => $userA->id,
                'post_id' => $postA->id,
                'type' => $reaction_type,
            ];

            $reaction_parameters_postB = [
                'user_id' => $userA->id,
                'post_id' => $postB->id,
                'type' => $reaction_type,
            ];

            // Have user A react to both posts. Should have one entry per reaction.
            $reaction = ReactionController::create($userA->id, $postA->id, $reaction_type);
            $this->assertDatabaseHas('reactions', $reaction_parameters_postA);
            $this->assertTrue(
                Reaction::where('user_id', $userA->id)
                        ->where('post_id', $postA->id)
                        ->where('type', $reaction_type)
                        ->get()
                        ->count() == 1
            );

            $reaction = ReactionController::create($userA->id, $postB->id, $reaction_type);
            $this->assertDatabaseHas('reactions', $reaction_parameters_postB);
            $this->assertTrue(
                Reaction::where('user_id', $userA->id)
                        ->where('post_id', $postA->id)
                        ->where('type', $reaction_type)
                        ->get()
                        ->count() == 1
            );
        }
    }

    /** @test */
    public function can_unreact() {
        $reaction_types = ['smile', 'frown', 'heart', 'laugh'];

        foreach ($reaction_types as $reaction_type) {
            // Create two users.
            $userA = UserController::create($this->faker->userName, $this->faker->name, $this->faker->password);
            $userB = UserController::create($this->faker->userName, $this->faker->name, $this->faker->password);

            // Create two posts, one for each user.
            $postA = PostController::create($userA->id, $this->faker->paragraph);
            $postB = PostController::create($userB->id, $this->faker->paragraph);

            $reaction_parameters_postA = [
                'user_id' => $userA->id,
                'post_id' => $postA->id,
                'type' => $reaction_type,
            ];

            $reaction_parameters_postB = [
                'user_id' => $userA->id,
                'post_id' => $postB->id,
                'type' => $reaction_type,
            ];

            // Have user A react to both posts.
            $reaction = ReactionController::create($userA->id, $postA->id, $reaction_type);
            $reaction = ReactionController::create($userA->id, $postB->id, $reaction_type);

            // Have user A un-react to both posts. Respective models should now be deleted.
            $reaction = ReactionController::destroy($userA->id, $postA->id, $reaction_type);
            $this->assertDeleted($reaction);

            $reaction = ReactionController::destroy($userA->id, $postB->id, $reaction_type);
            $this->assertDeleted($reaction);
        }
    }

    /** @test */
    public function cannot_react_again() {
        $reaction_types = ['smile', 'frown', 'heart', 'laugh'];

        foreach ($reaction_types as $reaction_type) {
            // Create two users.
            $userA = UserController::create($this->faker->userName, $this->faker->name, $this->faker->password);
            $userB = UserController::create($this->faker->userName, $this->faker->name, $this->faker->password);

            // Create two posts, one for each user.
            $postA = PostController::create($userA->id, $this->faker->paragraph);
            $postB = PostController::create($userB->id, $this->faker->paragraph);

            $reaction_parameters_postA = [
                'user_id' => $userA->id,
                'post_id' => $postA->id,
                'type' => $reaction_type,
            ];

            $reaction_parameters_postB = [
                'user_id' => $userA->id,
                'post_id' => $postB->id,
                'type' => $reaction_type,
            ];

            // Have user A react to both posts.
            $reaction = ReactionController::create($userA->id, $postA->id, $reaction_type);
            $reaction = ReactionController::create($userA->id, $postB->id, $reaction_type);

            // Have user A attempt to react to both posts again. Should still have one entry per reaction.
            $reaction = ReactionController::create($userA->id, $postA->id, $reaction_type);
            $this->assertDatabaseHas('reactions', $reaction_parameters_postA);
            $this->assertTrue(
                Reaction::where('user_id', $userA->id)
                        ->where('post_id', $postA->id)
                        ->where('type', $reaction_type)
                        ->get()
                        ->count() == 1
            );

            $reaction = ReactionController::create($userA->id, $postB->id, $reaction_type);
            $this->assertDatabaseHas('reactions', $reaction_parameters_postB);
            $this->assertTrue(
                Reaction::where('user_id', $userA->id)
                        ->where('post_id', $postB->id)
                        ->where('type', $reaction_type)
                        ->get()
                        ->count() == 1
            );
        }
    }

    /** @test */
    public function cannot_unreact_again() {
        $reaction_types = ['smile', 'frown', 'heart', 'laugh'];

        foreach ($reaction_types as $reaction_type) {
            // Create two users.
            $userA = UserController::create($this->faker->userName, $this->faker->name, $this->faker->password);
            $userB = UserController::create($this->faker->userName, $this->faker->name, $this->faker->password);

            // Create two posts, one for each user.
            $postA = PostController::create($userA->id, $this->faker->paragraph);
            $postB = PostController::create($userB->id, $this->faker->paragraph);

            $reaction_parameters_postA = [
                'user_id' => $userA->id,
                'post_id' => $postA->id,
                'type' => $reaction_type,
            ];

            $reaction_parameters_postB = [
                'user_id' => $userA->id,
                'post_id' => $postB->id,
                'type' => $reaction_type,
            ];

            // Have user A react to both posts. Should have one entry per reaction.
            $reaction = ReactionController::create($userA->id, $postA->id, $reaction_type);
            $reaction = ReactionController::create($userA->id, $postB->id, $reaction_type);

            // Have user A un-react to both posts.
            $reaction = ReactionController::destroy($userA->id, $postA->id, $reaction_type);
            $reaction = ReactionController::destroy($userA->id, $postB->id, $reaction_type);

            // Have user A attempt to un-react to both posts again. Should not have any entries.
            $reaction = ReactionController::destroy($userA->id, $postA->id, $reaction_type);
            $this->assertDatabaseMissing('reactions', $reaction_parameters_postA);

            $reaction = ReactionController::destroy($userA->id, $postB->id, $reaction_type);
            $this->assertDatabaseMissing('reactions', $reaction_parameters_postB);
        }
    }
}
