<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

use App\Models\User;

class ClearUsers extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'users:clear';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Delete all non-default users and associate posts, comments, and reactions';

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
        $this->info('Getting all non-default users...');
        $users = User::where('is_default', false)->get();

        $count = $users->count();
        if ($count === 0) {
            $this->error('No users found.');
            return;
        }

        $this->info('Found ' . $count . ' user(s). Deleting...');

        $users = $this->withProgressBar($users, function ($user) {
            $user->delete();
        });
        $this->newLine();

        return 0;
    }
}
