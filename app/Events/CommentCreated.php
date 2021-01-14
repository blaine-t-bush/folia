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

class CommentCreated implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets;

    /**
     * The comment instance.
     * 
     * @var \App\Models\Comment
     */
    public $comment;

    /**
     * Create a new event instance.
     *
     * @param \App\Models\Comment $comment
     * @param \App\Models\User $user
     * @param \App\Models\Post $post
     * @return void
     */
    public function __construct(Comment $comment)
    {
        $this->comment = $comment;
    }

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
