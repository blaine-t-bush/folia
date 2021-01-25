<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

use App\Models\User;
use App\Models\Post;
use Carbon\Carbon;
use Faker\Factory;

class GeneratePosts extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'posts:generate {count}'; // FIXME add option description

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generate new posts';

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
        $faker = Factory::create();

        $this->info('[' . Carbon::now() . ' | posts:generate ' . $count . ']');
        $this->info('Generating ' . $count . ' post(s)...');

        $bar = $this->output->createProgressBar($count);
        $bar->start();

        for ($i = 0; $i < $count; $i++) {
            // Randomly select an existing (default) user.
            $user = User::where('is_custom', false)->inRandomOrder()->first();

            // Create a new post model with this user.
            $post = new Post;
            $post->user_id = $user->id;
            $post->body = $faker->sentence();
            $post->save();
            
            $bar->advance();
        }

        $bar->finish();
        $this->newLine();
        $this->newLine();
    }
}
