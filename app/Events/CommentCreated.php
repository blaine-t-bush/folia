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

class CommentCreated implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    /**
     * The comment instance.
     * 
     * @var \App\Models\Comment
     */
    public $comment;

    /**
     * The associated user instance.
     * 
     * @var \App\Models\User
     */
    public $user;

    /**
     * The associated post instance.
     * 
     * @var \App\Models\Post
     */
    public $post;


    /**
     * Create a new event instance.
     *
     * @param \App\Models\Comment $comment
     * @param \App\Models\User $user
     * @param \App\Models\Post $post
     * @return void
     */
    public function __construct(Comment $comment, User $user, Post $post)
    {
        $this->comment = $comment;
        $this->user = $user;
        $this->post = $post; // FIXME add broadcastWith() to only pass relevant (and non-private) data.
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new Channel('comments-' . $this->post->id);
    }
}
