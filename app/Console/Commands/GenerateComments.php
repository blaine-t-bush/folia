<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

use App\Models\User;
use App\Models\Post;
use App\Models\Comment;
use Carbon\Carbon;
use Faker\Factory;

class GenerateComments extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'comments:generate {count} {limit?}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generate new comments, optionally restricted only to recent posts';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $count = (int) $this->argument('count');
        $limit = (int) $this->argument('limit');
        $faker = Factory::create();

        $this->info('[' . Carbon::now() . ' | comments:generate ' . $count . ($limit ? ' ' . $limit  : '') . ']');
        $this->info('Generating ' . $count . ' comment(s)...');
        if ($this->argument('limit')) {
            $this->info('Restricting comment(s) to ' . $limit . ' most recent post(s)...');
        }

        $bar = $this->output->createProgressBar($count);
        $bar->start();

        for ($i = 0; $i < $count; $i++) {
            // Randomly select an existing (default) user.
            $user = User::where('is_custom', false)->inRandomOrder()->first();

            // Randomly select an existing post, optionally only from the $limit most recent posts.
            if ($limit == 0) { // No limit, just select any post at random.
                $post = Post::inRandomOrder()->first();
            } else { // Limit to only recent posts.
                $post = Post::orderByDesc('created_at')->limit($limit)->get()->random();
            }

            // Create a new comment model with this user and post.
            $comment = new Comment;
            $comment->user_id = $user->id;
            $comment->post_id = $post->id;
            $comment->body = $faker->paragraph();
            $comment->save();
            
            $bar->advance();
        }

        $bar->finish();
        $this->newLine();
        $this->newLine();
    }
}
