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
    protected $signature = 'posts:clear {count} {--R|remainder}'; // FIXME add option description

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
        $count = (int) $this->argument('count');

        // If remainder option is not declared, then we delete $count posts.
        // If remainder option is declared, then we delete posts until we're left with $count.
        if ($this->option('remainder')) { 
            $count = max(Post::all()->count() - $count, 0);
        }

        $this->info('[' . Carbon::now() . ' | posts:clear' . ($count ? ' ' . $count  : '') . ']');
        
        if ($count < 0) {
            $this->error('Argument must be a non-negative integer.');
            return;
        }

        $this->info('Getting oldest ' . $count . ' post(s)...');
        $posts = Post::orderBy('created_at')->limit($count)->get();

        $found_count = $posts->count();
        if ($found_count === 0) {
            $this->error('No posts found.');
            $this->newLine();
            return;
        }

        $this->info('Found ' . $found_count . ' post(s). Deleting...');

        $posts = $this->withProgressBar($posts, function ($post) {
            $post->delete();
        });
        $this->newLine();
        $this->newLine();

        return $count;
    }
}