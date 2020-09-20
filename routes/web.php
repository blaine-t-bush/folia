<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::redirect('/', '/home');

Route::get('/home', function() {
    // Create test collection.
    $collection = collect([
        'Raiding party, on the prowl. 3d6 warriors and 1 captain.',
        'Raiding party, returning home. 2d6 warriors, 1d6 wounded, 1 captain, and 1d6 captives.',
        'Scouting party, patrolling borders. 1d6+1 scouts.',
        'Hunting party, searching for game. 1d6 hunters and 1d6 lizard-lions.',
        'Shaman searching for rare ingredients: herbs, roots, and mushrooms.',
        'Exile, tail cut off, wandering in shame.',
    ]);

    return view('home', [
        'collection' => $collection,
    ]);
});

Route::get('/posts', function() {
    // Return all posts.
});

Route::get('/posts/{post}', function() {
    // Return the specified post.
});