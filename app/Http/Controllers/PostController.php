<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Post;
use App\Models\User;
use App\Events\PostCreated;

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
            'user_id' => ['required', 'exists:users,id'],
            'body' => ['required', 'min:1', 'max:255'],
        ]);

        // Create a new post.
        $post = new Post;
        $post->user_id = $request->user_id;
        $post->body = $request->body;
        $post->save();

        // Dispatch the event.
        PostCreated::dispatch($post);

        return back();
    }

    public function destroy(Request $request) {
        // Check that post actually belongs to user.
        $post = Post::find($request->post_id);

        if ($post->user_id == $request->user_id) {
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

        return back();
    }
}
