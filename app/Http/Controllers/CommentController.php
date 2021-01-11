<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Comment;
use App\Models\Post;
use App\Models\User;

class CommentController extends Controller
{
    public function create(Request $request) {
        // Validate the inputs.
        $validated = $request->validate([
            'user_id' => ['required', 'exists:users,id'],
            'post_id' => ['required', 'exists:posts,id'],
            'body' => ['required', 'min:1', 'max:255'],
        ]);

        // Create a new post.
        $comment = new Comment;
        $comment->user_id = $request->user_id;
        $comment->post_id = $request->post_id;
        $comment->body = $request->body;
        $comment->save();

        // Send back to feed. New post will appear when index() is run.
        return back();
    }
    
    public function destroy(Request $request) {
        // Validate the inputs.
        $validated = $request->validate([
            'user_id' => ['required', 'exists:users,id'],
            'comment_id' => ['required', 'exists:comments,id'],
        ]);
        
        // Check that comment actually belongs to user.
        $comment = Comment::find($request->comment_id);
        
        if ($comment->user_id == $request->user_id) {
            $comment->delete();
        }
        
        return back();
    }
}
