<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Events\CommentCreated;
use App\Events\CommentDeleted;

class Comment extends Model
{
    use HasFactory;

    /**
     * Get the user that owns the comment.
     */
    public function user() {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the post that owns the comment.
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
        'created' => CommentCreated::class,
        'deleted' => CommentDeleted::class,
    ];
}
