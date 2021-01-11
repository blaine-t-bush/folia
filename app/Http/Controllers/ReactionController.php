<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Reaction;

class ReactionController extends Controller
{
    public function react(int $id, string $type, Request $request) {
        // Determine if input was checked or unchecked.
        // If checked, add the reaction.
        // If unchecked, remove the reaction.
        if ($request->has('react')) {
            // NB: the name of the checkbox is "react". If the checkbox is checked when it's clicked,
            // we want the reaction to be destroyed. If the checkbox was not checked when it was clicked,
            // then we want the reaction to be created. The "react" parameter, from the name of the checkbox,
            // is only passed if the checkbox was in a checked state before clicking.
            // That's why this seems backwards!
            $reaction = static::destroy($request->session()->get('user_id'), $id, $request->type);
        } else {
            $reaction = static::create($request->session()->get('user_id'), $id, $request->type);
        }

        return redirect('/');
    }

    static function create(string $user_id, int $post_id, string $type) {
        // Check if this reaction already exists.
        try {
            $reaction = Reaction::where('user_id', $user_id)
                                ->where('post_id', $post_id)
                                ->where('type', $type)
                                ->firstOrFail(); // If it doesn't, this should throw a ModelNotFound exception.
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            $reaction = new Reaction;
            $reaction->user_id = $user_id;
            $reaction->post_id = $post_id;
            $reaction->type = $type;

            $reaction->save();
        }

        return $reaction;
    }

    static function destroy(string $user_id, int $post_id, string $type) {
        // Check if this reaction exists.
        try {
            $reaction = Reaction::where('user_id', $user_id)
                                ->where('post_id', $post_id)
                                ->where('type', $type)
                                ->firstOrFail(); // If it doesn't, this should throw a ModelNotFound exception.

            $reaction->delete();

            return $reaction;
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return null;
        }
    }
}