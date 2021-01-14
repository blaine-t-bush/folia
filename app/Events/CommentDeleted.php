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
use App\Http\Resources\CommentResource;

class CommentDeleted implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets;

    public $comment;


    /**
     * Create a new event instance.
     *
     * @param App\Models\Comment $comment
     * @return void
     */
    public function __construct(Comment $comment)
    {
        $this->comment = $comment;
    }

    /**
     * Define the specific data to broadcast. Don't need to send everything.
     *
     * @return array
     */
    public function broadcastWith()
    {
        return [new CommentResource($this->comment)];
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new Channel('comments-' . $this->comment->post_id);
    }
}
