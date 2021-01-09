<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\FoliaPost;
use App\Models\FoliaUser;

class FoliaPostController extends Controller
{
    public function index(Request $request) {
        // Get all posts.
        $posts = FoliaPost::all(); // FIXME add pagination

        // Return view and pass in posts.
        return view('folia.posts', [
            'posts' => $posts,
        ]);
    }
}
