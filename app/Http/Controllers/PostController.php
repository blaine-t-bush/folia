<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Post;

use App\Events\PostCreated;
use App\Events\PostDeleted;

use App\Http\Resources\PostResource;

class PostController extends Controller
{
    public function index(Request $request, string $user_id = null) {
        if (!is_null($user_id)) {
            return PostResource::collection(Post::where('user_id', $user_id)->get());
        } else {
            return PostResource::collection(Post::all());
        }
    }

    public function create(Request $request) {
        // Create a new post.
        $post = new Post;
        $post->user_id = $request->session()->get('user_id');
        $post->body = $request->body;
        $post->save();

        // Dispatch the event.
        PostCreated::dispatch($post);

        return new PostResource($post);
    }

    public function destroy(Request $request) {
        $post = Post::findOrFail($request->id);

        // Determine if post belongs to user who made request.
        if ($post->user_id !== $request->session()->get('user_id')) {
            return; // FIXME add error message here.
        }
        
        // Delete post.
        $post->delete();

        // Dispatch the event.
        PostDeleted::dispatch($post);

        return new PostResource($post);
    }
}
