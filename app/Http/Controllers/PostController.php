<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Post;
use App\Models\User;

class PostController extends Controller
{
    public function index(Request $request) {
        // Get all posts.
        $posts = Post::all()->sortByDesc('created_at'); // FIXME add pagination

        // Return view and pass in posts.
        return view('posts', [
            'posts' => $posts,
        ]);
    }

    public function create(Request $request) {
        // Validate the inputs.
        $validated = $request->validate([
            'body' => ['required', 'min:1', 'max:255'],
        ]);

        // Create a new post.
        $post = new Post;
        $post->user_id = $request->session()->get('user_id');
        $post->body = $request->body;
        $post->save();

        // Send back to feed. New post will appear when index() is run.
        return redirect('/');
    }

    public function destroy(Request $request) {
        // Check that post actually belongs to user.
        $post = Post::find($request->id);

        if ($post->user_id == $request->session()->get('user_id')) {
            // First delete all children, if any.
            $comments = $post->comments;
            foreach ($comments as $comment) {
                $comment->delete();
            }

            // Then delete post.
            $post->delete();
        }

        return redirect('/');
    }
}
