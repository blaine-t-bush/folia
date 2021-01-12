<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use Illuminate\Support\Facades\Hash;

use App\Models\User;
use App\Models\Post;
use App\Models\Comment;
use App\Http\Controllers\UserController;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run() {
        // Create a static user for testing and the landing-page joke.

        // If you're looking through the repo and scoffing, know that these credentials
        // are for a joke, and that this "admin" user doesn't actually have any
        // administrator or special privileges on my server or website.
        UserController::create('admin', 'Security Mastah', 'password123');
        
        // Instantiate Faker, which we'll use to generate some test data.
        $faker = Faker::create();

        // Generate some random number of users.
        $total_user_count = random_int(5, 10);
        $user_ids = [];
        for ($i = 0; $i < $total_user_count; $i++) {
            $user = new User;
            $user->id = $faker->userName;
            $user->display_name = $faker->name;
            $user->hashed_password = Hash::make($faker->password);
            $user->save();

            $user_ids[] = $user->id;
        }

        // Generate some random number of posts. For each one, randomly select a creator.
        $total_post_count = random_int(30, 50);
        $post_ids = [];
        for ($i = 0; $i < $total_post_count; $i++) {
            $post = new Post;
            $post->user_id = $user_ids[array_rand($user_ids)];
            $post->body = $faker->paragraph;
            $post->save();
            
            $post_ids[] = $post->id;
        }

        // Generate some random number of comments. For each one, randomly select a creator and parent post.
        $total_comment_count = random_int(100, 200);
        for ($i = 0; $i < $total_comment_count; $i++) {
            $comment = new Comment;
            $comment->user_id = $user_ids[array_rand($user_ids)];
            $comment->post_id = $post_ids[array_rand($post_ids)];
            $comment->body = $faker->paragraph;
            $comment->save();
        }
    }
}
