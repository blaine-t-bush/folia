<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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
}
