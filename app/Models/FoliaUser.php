<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FoliaUser extends Model
{
    use HasFactory;

    protected $primaryKey = 'username';
    public $incrementing = false;

    /**
     * Get the posts belonging to the user.
     */
    public function posts() {
        return $this->hasMany(FoliaPost::class, 'username');
    }
}
