<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Reaction;

class ReactionController extends Controller
{
    public function react(int $id, Request $request) {
        // Validate the inputs.
        $validate = $request->validate([
            'type' => ['required', Rule::in(['smile', 'frown', 'heart', 'laugh'])],
        ]);

        $reaction = static::create($request->session()->get('user_id'), $id, $request->type);

        return redirect('/');
    }

    public function unreact(int $id, Request $request) {
        // Validate the inputs.
        $validate = $request->validate([
            'type' => ['required', Rule::in(['smile', 'frown', 'heart', 'laugh'])],
        ]);

        $reaction = static::destroy($request->session()->get('user_id'), $id, $request->type);

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