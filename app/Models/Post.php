<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Events\PostCreated;
use App\Events\PostDeleted;

class Post extends Model
{
    use HasFactory;

    /**
     * Get the user that owns the post.
     */
    public function user() {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the comments belonging to the post.
     */
    public function comments() {
        return $this->hasMany(Comment::class);
    }

    /**
     * Get the reactions belonging to the post.
     */
    public function reactions() {
        return $this->hasMany(Reaction::class);
    }

    /**
     * The event map for the model.
     *
     * @var array
     */
    protected $dispatchesEvents = [
        'created' => PostCreated::class,
        'deleted' => PostDeleted::class,
    ];
}
