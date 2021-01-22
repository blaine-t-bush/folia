<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        //
    ];

    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        $schedule->command('users:clear')
                 ->timezone('America/Los_Angeles')
                 ->weeklyOn(1, '1:00') // Run every Monday at 1:00 AM.
                 ->appendOutputTo('storage/logs/schedule.log'); // FIXME add email on failure
        
        
        $schedule->command('posts:clear -R 30') // Clear posts so there are no more than 30
                 ->timezone('America/Los_Angeles')
                 ->hourly()
                 ->appendOutputTo('storage/logs/schedule.log'); // FIXME add email on failure
    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}
