<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Comment;

use App\Events\CommentCreated;
use App\Events\CommentDeleted;

use App\Http\Resources\CommentResource;

class CommentController extends Controller
{
    public function index(Request $request) {
        return CommentResource::collection(Comment::all());
    }
    public function create(Request $request) {
        // Create a new post.
        $comment = new Comment;
        $comment->user_id = $request->session()->get('user_id');
        $comment->post_id = $request->id;
        $comment->body = $request->body;
        $comment->save();

        // Dispatch the event.
        CommentCreated::dispatch($comment);

        return new CommentResource($comment);
    }
    
    public function destroy(Request $request) {     
        $comment = Comment::findOrFail($request->id);
        
        if ($comment->user_id == $request->session()->get('user_id')) {
            $comment->delete();

            // Dispatch the event.
            CommentDeleted::dispatch($comment);

            return new CommentResource($comment);
        }
    }
}
