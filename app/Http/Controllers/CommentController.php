<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Comment;

use App\Http\Resources\CommentResource;

class CommentController extends Controller
{
    public function index(Request $request, string $user_id = null) {
        if (!is_null($user_id)) {
            return CommentResource::collection(Comment::where('user_id', $user_id)->get());
        } else {
            return CommentResource::collection(Comment::all());
        }
    }
    public function create(Request $request) {
        // Create a new post.
        $comment = new Comment;
        $comment->user_id = $request->session()->get('user_id');
        $comment->post_id = $request->id;
        $comment->body = $request->body;
        $comment->save();

        return new CommentResource($comment);
    }
    
    public function destroy(Request $request) {     
        $comment = Comment::findOrFail($request->id);
        
        if ($comment->user_id == $request->session()->get('user_id')) {
            $comment->delete();

            return new CommentResource($comment);
        }
    }
}
