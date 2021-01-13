<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Comment;
use App\Models\Post;
use App\Models\User;
use App\Events\CommentCreated;

class CommentController extends Controller
{
    public function create(Request $request) {
        // Create a new post.
        $comment = new Comment;
        $comment->user_id = $request->session()->get('user_id');
        $comment->post_id = $request->id;
        $comment->body = $request->body;
        $comment->save();

        // Dispatch the event.
        CommentCreated::dispatch($comment, $comment->user, $comment->post);
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
