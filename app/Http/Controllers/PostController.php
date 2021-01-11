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

    public function make(Request $request) {
        // Validate the inputs.
        $validated = $request->validate([
            'body' => ['required', 'min:1', 'max:255'],
        ]);

        // Create a new post.
        static::create($request->session()->get('user_id'), $request->body);

        return redirect('/');
    }

    public function destroy(Request $request) {
        // Check that post actually belongs to user.
        $post = Post::find($request->id);

        if ($post->user_id == $request->session()->get('user_id')) {
            // First delete all child comments, if any.
            $comments = $post->comments;
            foreach ($comments as $comment) {
                $comment->delete();
            }

            // Then delete all child reactions, if any.
            $reactions = $post->reactions;
            foreach ($reactions as $reaction) {
                $reaction->delete();
            }

            // Then delete post.
            $post->delete();
        }

        return redirect('/');
    }

    static function create(string $user_id, string $body) {
        $post = new Post;
        $post->user_id = $user_id;
        $post->body = $body;
        $post->save();

        return $post;
    }
}
