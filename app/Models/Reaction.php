<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Events\ReactionCreated;
use App\Events\ReactionDeleted;

class Reaction extends Model
{
    use HasFactory;

    /**
     * Get the user that owns the reaction.
     */
    public function user() {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the post that owns the reaction.
     */
    public function post() {
        return $this->belongsTo(Post::class);
    }

    /**
     * The event map for the model.
     *
     * @var array
     */
    protected $dispatchesEvents = [
        'created' => ReactionCreated::class,
        'deleted' => ReactionDeleted::class,
    ];
}
