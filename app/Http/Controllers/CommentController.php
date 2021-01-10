<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Comment;
use App\Models\Post;
use App\Models\User;

class CommentController extends Controller
{
    public function create(int $id, Request $request) {
        // Validate the inputs.
        $validated = $request->validate([
            'body' => ['required', 'min:1', 'max:255'],
        ]);

        // Create a new post.
        $comment = new Comment;
        $comment->user_id = $request->session()->get('user_id');
        $comment->post_id = $id;
        $comment->body = $request->body;
        $comment->save();

        // Send back to feed. New post will appear when index() is run.
        return redirect('/');
    }

    public function destroy(Request $request) {
        // Check that comment actually belongs to user.
        $comment = Comment::find($request->id);

        if ($comment->user_id == $request->session()->get('user_id')) {
            $comment->delete();
        }

        return redirect('/');
    }
}
