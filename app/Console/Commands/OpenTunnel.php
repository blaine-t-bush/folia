<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class OpenTunnel extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'ssh:tunnel';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Open an SSH tunnel to interact with remote database';

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
        exec('ssh -i ' . env('SSH_KEY') . ' -N -L ' . env('SSH_LOCAL_PORT') . ':' . env('DB_HOST') . ':' . env('DB_PORT') . ' ' . env('SSH_USER') . '@' . env('SSH_HOST'));
    }
}
