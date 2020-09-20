<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;

class PostController extends Controller
{
    public function index() {
        $posts = Post::all()->sortByDesc('created_at'); 

        return view('posts.posts', [
            'posts' => $posts,
        ]);
    }

    public function create(Request $request) {
        $post = new Post;
        $post->title = $request->input()['title'];
        $post->author = $request->input()['author'];
        $post->body = $request->input()['body'];
        $post->save();

        return redirect('posts');
    }
}
