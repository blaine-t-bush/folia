<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FoliaPostController extends Controller
{
    public function index(Request $request) {
        // Get posts.
        // Return view and pass in posts.
        return view('folia.feed');
    }
}
