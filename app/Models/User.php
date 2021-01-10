<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    use HasFactory;

    public $incrementing = false;

    /**
     * Get the posts belonging to the user.
     */
    public function posts() {
        return $this->hasMany(Post::class, 'post_id');
    }

    /**
     * Get the comments belonging to the user.
     */
    public function comments() {
        return $this->hasMany(Comment::class, 'comment_id');
    }
}
