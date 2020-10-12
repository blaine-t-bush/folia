<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;

class PostController extends Controller
{
    public function index() {
        $posts = Post::orderBy('created_at', 'desc')->paginate(10);

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
        $post->summary = $request->input()['summary'];
        $post->body = $request->input()['body'];
        $post->save();

        return redirect('posts');
    }

    public function show(string $slug) {
        $post = Post::where('slug', $slug)->firstOrFail();

        return view('posts.post', [
            'post' => $post,
        ]);
    }

    public function edit(string $slug) {
        $post = Post::where('slug', $slug)->firstOrFail();

        return view('posts.edit', [
            'post' => $post,
        ]);
    }

    public function update(Request $request) {
        $post = Post::where('slug', $request->slug)->first();
        $post->title = $request->input()['title'];
        $post->summary = $request->input()['summary'];
        $post->body = $request->input()['body'];
        $post->save();

        return view('posts.post', [
            'post' => $post,
        ]);
    }

    public function destroy(string $slug) {
        $post = Post::where('slug', $slug)->firstOrFail();
        $post->delete();

        return redirect('posts');
    }
}
