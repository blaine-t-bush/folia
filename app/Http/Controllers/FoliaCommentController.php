<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\FoliaComment;
use App\Models\FoliaPost;
use App\Models\FoliaUser;

class FoliaCommentController extends Controller
{
    public function create(int $id, Request $request) {
        // Validate the inputs.
        $validated = $request->validate([
            'body' => ['required', 'min:1', 'max:255'],
        ]);

        // Create a new post.
        $comment = new FoliaComment;
        $comment->user_id = $request->session()->get('folia_user_id');
        $comment->post_id = $id;
        $comment->body = $request->body;
        $comment->save();

        // Send back to feed. New post will appear when index() is run.
        return redirect('/folia');
    }
}
