<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FoliaUser extends Model
{
    use HasFactory;

    protected $primaryKey = 'username';
    public $incrementing = false;
}
