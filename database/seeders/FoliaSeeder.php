<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use App\Models\FoliaUser;
use App\Models\FoliaPost;
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
        $usernames = [];
        for ($i = 0; $i < $total_user_count; $i++) {
            $username = $faker->userName;
            $usernames[] = $username;
            FoliaUserController::create($username, $faker->name, $faker->password);
        }

        // Generate some random number of posts. For each one, randomly select a creator.
        $total_post_count = random_int(30, 50);
        for ($i = 0; $i < $total_post_count; $i++) {
            $post = new FoliaPost;
            $post->username = $usernames[array_rand($usernames)];
            $post->body = $faker->paragraph;
            $post->save();
        }
    }
}
