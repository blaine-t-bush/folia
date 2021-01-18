<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

use App\Models\Reaction;
use App\Http\Resources\ReactionResource;

class ReactionCreated implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets;

    /**
     * The reaction instance.
     * 
     * @var \App\Models\Reaction
     */
    public $reaction;

    /**
     * Create a new event instance.
     *
     * @param \App\Models\Reaction $reaction
     * @return void
     */
    public function __construct(Reaction $reaction)
    {
        $this->reaction = $reaction;
    }

    /**
     * Define the specific data to broadcast. Don't need to send everything.
     *
     * @return array
     */
    public function broadcastWith()
    {
        return [new ReactionResource($this->reaction)];
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return [
            new Channel('reactions-' . $this->reaction->post_id).
            new Channel('users-' . $this->reaction->user_id),
        ];
    }
}
