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

class PostCreated implements ShouldBroadcast
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

    /**
     * Define the specific data to broadcast. Don't need to send everything.
     *
     * @return array
     */
    public function broadcastWith()
    {
        return [
            'post' => [
                'id' => $this->post->id,
                'body' => $this->post->body,
                'user' => [
                    'id' => $this->post->user->id,
                    'display_name' => $this->post->user->display_name,
                ],
                'created_at' => $this->post->created_at,
            ],
        ];
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new Channel('posts');
    }
}
