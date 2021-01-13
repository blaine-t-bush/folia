<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Post;
use App\Models\User;

use App\Events\PostCreated;
use App\Events\PostDeleted;

class PostController extends Controller
{
    public function index(Request $request) {
        // Get all posts.
        $posts = Post::with('user')
                     ->with('comments')
                     ->with('comments.user')
                     ->with('reactions')
                     ->get()
                     ->sortByDesc('created_at');

        return json_encode($posts);
    }

    public function create(Request $request) {
        // Create a new post.
        $post = new Post;
        $post->user_id = $request->session()->get('user_id');
        $post->body = $request->body;
        $post->save();

        // Dispatch the event.
        PostCreated::dispatch($post);

        // Hydrate post model with user info.
        $post->reactions;
        $post->comments;
        $post->user;

        return json_encode($post); // FIXME create consistent resource for post.
    }

    public function destroy(Request $request) {
        $post = Post::findOrFail($request->id);

        // Determine if post belongs to user who made request.
        if ($post->user_id !== $request->session()->get('user_id')) {
            return; // FIXME add error message here.
        }
        
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

        // Dispatch the event.
        PostDeleted::dispatch($post->id);

        return; // FIXME add success message here.
    }
}
