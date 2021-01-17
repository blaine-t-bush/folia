<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Reaction;

use App\Events\ReactionCreated;
use App\Events\ReactionDeleted;

use App\Http\Resources\ReactionResource;

class ReactionController extends Controller
{
    public function index(Request $request) {
        return ReactionResource::collection(Reaction::all());
    }

    public function create(Request $request) {
        // Check if this reaction already exists.
        try {
            $reaction = Reaction::where('user_id', $request->session()->get('user_id'))
                                ->where('post_id', $request->id)
                                ->where('type', $request->type)
                                ->firstOrFail(); // If it doesn't, this should throw a ModelNotFound exception.
            
            return new ReactionResource($reaction);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            $reaction = new Reaction;
            $reaction->user_id = $request->session()->get('user_id');
            $reaction->post_id = $request->id;
            $reaction->type = $request->type;

            $reaction->save();

            // Dispatch the event.
            ReactionCreated::dispatch($reaction);

            return new ReactionResource($reaction);
        }
    }

    public function destroy(Request $request) {
        // Make sure this reaction exists.
        try {
            $reaction = Reaction::where('user_id', $request->session()->get('user_id'))
                                ->where('post_id', $request->id)
                                ->where('type', $request->type)
                                ->firstOrFail(); // If it doesn't, this should throw a ModelNotFound exception.

            $reaction->delete();

            // Dispatch the event.
            ReactionDeleted::dispatch($reaction);

            return new ReactionResource($reaction);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            // FIXME communicate error.
        }
    }
}