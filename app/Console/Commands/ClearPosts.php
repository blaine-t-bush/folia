<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

use App\Models\Post;
use Carbon\Carbon;

class ClearPosts extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'posts:clear {hours?}'; // FIXME add option description

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Delete posts and child comments/reactions';

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
        // Determine time cutoff based on input. If no input is given for the hours argument,
        // then all posts will be deleted.
        $hours = $this->argument('hours');
        if ($hours === null) {
            $this->info('Getting all posts...');
            $posts = Post::all();
        } else {
            $this->info('Getting posts older than ' . $hours . ' hour(s)...');
            $posts = Post::where('created_at', '<', Carbon::now()->subHours($hours))->get();
        }

        $count = $posts->count();
        if ($count === 0) {
            $this->error('No posts found.');
            return;
        }

        $this->info('Found ' . $count . ' post(s). Deleting...');

        $posts = $this->withProgressBar($posts, function ($post) {
            $post->delete();
        });
        $this->newLine();

        return $hours;
    }
}