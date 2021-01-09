<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FoliaComment extends Model
{
    use HasFactory;

    /**
     * Get the user that owns the comment.
     */
    public function user() {
        return $this->belongsTo(FoliaUser::class, 'user_id');
    }

    /**
     * Get the post that owns the comment.
     */
    public function post() {
        return $this->belongsTo(FoliaPost::class, 'post_id');
    }
}
