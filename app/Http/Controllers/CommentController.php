<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Comment;
use App\Models\Post;
use App\Models\User;

use App\Events\CommentCreated;
use App\Events\CommentDeleted;

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

        // Hydrate comment model with user info.
        $comment->user;
        $comment->post;

        return json_encode($comment);
    }
    
    public function destroy(Request $request) {     
        $comment = Comment::findOrFail($request->id);
        
        if ($comment->user_id == $request->session()->get('user_id')) {
            $comment->delete();

            // Dispatch the event.
            CommentDeleted::dispatch($comment->id, $comment->post_id);
        }
    }
}
