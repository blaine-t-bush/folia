<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use App\Models\FoliaUser;
use App\Models\FoliaPost;
use App\Models\FoliaComment;
use App\Http\Controllers\FoliaUserController;

use Faker\Factory as Faker;

class FoliaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Create a static user for testing.
        FoliaUserController::create('admin', 'The Boss', 'p@ssw0rd');
        
        // Instantiate Faker, which we'll use to generate some test data.
        $faker = Faker::create();

        // Generate some random number of users.
        $total_user_count = random_int(5, 10);
        $user_ids = [];
        for ($i = 0; $i < $total_user_count; $i++) {
            $user_id = $faker->userName;
            $user_ids[] = $user_id;
            FoliaUserController::create($user_id, $faker->name, $faker->password);
        }

        // Generate some random number of posts. For each one, randomly select a creator.
        $total_post_count = random_int(30, 50);
        $post_ids = [];
        for ($i = 0; $i < $total_post_count; $i++) {
            $post = new FoliaPost;
            $post->user_id = $user_ids[array_rand($user_ids)];
            $post->body = $faker->paragraph;
            $post->save();
            $post_ids[] = $post->id;
        }

        // Generate some random number of comments. For each one, randomly select a creator and parent post.
        $total_comment_count = random_int(100, 200);
        for ($i = 0; $i < $total_comment_count; $i++) {
            $comment = new FoliaComment;
            $comment->user_id = $user_ids[array_rand($user_ids)];
            $comment->post_id = $post_ids[array_rand($post_ids)];
            $comment->body = $faker->paragraph;
            $comment->save();
        }
    }
}
