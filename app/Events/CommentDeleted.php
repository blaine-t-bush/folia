<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

use App\Models\Comment;
use App\Models\Post;
use App\Models\User;

class CommentDeleted implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $comment_id; // FIXME determine why this is janky and I can't use the whole comment model here.
    public $post_id;


    /**
     * Create a new event instance.
     *
     * @param int $comment_id
     * @param int $post_id
     * @return void
     */
    public function __construct(int $comment_id, int $post_id)
    {
        $this->comment_id = $comment_id;
        $this->post_id = $post_id;
    }

    /**
     * Define the specific data to broadcast. Don't need to send everything.
     *
     * @return array
     */
    public function broadcastWith()
    {
        return [
            'comment' => [
                'id' => $this->comment_id,
            ],
            'post' => [
                'id' => $this->post_id,
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
        return new Channel('comments-' . $this->post_id);
    }
}
