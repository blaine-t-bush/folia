<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\User;

class Post extends Model
{
    use HasFactory;

    /**
     * Get the user that owns the post.
     */
    public function user() {
        return $this->belongsTo(User::class, 'user_id');
    }

    /**
     * Get the comments belonging to the post.
     */
    public function comments() {
        return $this->hasMany(Comment::class, 'post_id');
    }
}
