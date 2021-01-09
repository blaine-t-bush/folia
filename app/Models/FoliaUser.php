<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FoliaUser extends Model
{
    use HasFactory;

    public $incrementing = false;

    /**
     * Get the posts belonging to the user.
     */
    public function posts() {
        return $this->hasMany(FoliaPost::class, 'post_id');
    }

    /**
     * Get the comments belonging to the user.
     */
    public function comments() {
        return $this->hasMany(FoliaComment::class, 'comment_id');
    }
}
