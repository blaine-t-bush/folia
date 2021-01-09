<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\FoliaUser;

class FoliaPost extends Model
{
    use HasFactory;

    /**
     * Get the user that owns the post.
     */
    public function user() {
        return $this->belongsTo(FoliaUser::class, 'username');
    }
}
