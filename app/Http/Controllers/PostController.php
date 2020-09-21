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

    public function create() {
        return view('posts.create');
    }

    public function store(Request $request) {
        $post = new Post;
        $post->title = $request->input()['title'];
        $post->author = $request->input()['author'];
        $post->body = $request->input()['body'];
        $post->save();

        return redirect('posts');
    }

    public function show(int $id) {
        $post = Post::where('id', $id)->firstOrFail();

        return view('posts.post', [
            'post' => $post,
        ]);
    }

    public function destroy(int $id) {
        $post = Post::where('id', $id)->firstOrFail();
        $post->delete();

        return redirect('posts');
    }
}
