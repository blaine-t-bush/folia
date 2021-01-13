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
use App\Models\Post;

class ReactionDeleted implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $reaction_id; // FIXME determine why this is janky and I can't use the whole reaction model here.
    public $post_id;


    /**
     * Create a new event instance.
     *
     * @param int $reaction_id
     * @param int $post_id
     * @return void
     */
    public function __construct(int $reaction_id, int $post_id)
    {
        $this->reaction_id = $reaction_id;
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
            'reaction' => [
                'id' => $this->reaction_id,
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
        return new Channel('reactions-' . $this->post_id);
    }
}
