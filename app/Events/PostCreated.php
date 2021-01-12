<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

use App\Models\Post;

class PostCreated
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    /**
     * The post instance.
     * 
     * @var \App\Models\Post
     */
    public $post;

    /**
     * Create a new event instance.
     *
     * @param \App\Models\Post $post
     * @return void
     */
    public function __construct(Post $post)
    {
        $this->post = $post;
    }

    // /**
    //  * Get the channels the event should broadcast on.
    //  *
    //  * @return \Illuminate\Broadcasting\Channel|array
    //  */
    // public function broadcastOn()
    // {
    //     return new PrivateChannel('channel-name');
    // }
}