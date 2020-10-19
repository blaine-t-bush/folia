<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

use App\Http\Controllers\PostController;

/*
 *
 * Test pages
 * 
 */
Route::get('/test', function() {
    return view('test');
});



/*
 * 
 * Main pages
 * 
 */
Route::redirect('/', '/home');

Route::get('/home', function() {
    return view('home');
});

Route::get('/about', function() {
    return view('about');
});



/*
 * 
 * Authentication
 * 
 */
// Login and registration are taken care of by Fortify. Just need to add a route for logout.
Route::get('/logout', function() {
    Auth::logout();
    return back();
});


/*
 *
 * Resources
 * 
 */
Route::get('/resources', function() {
    return view('resources');
});

Route::get('/resources/whitehack-character-generator/min', function() {
    return view('resources.whitehack-character-generator-min');
});

Route::get('/resources/whitehack-character-generator', function() {
    return view('resources.whitehack-character-generator');
});

Route::get('/resources/whitehack-hireling-generator', function() {
    return view('resources.whitehack-hireling-generator');
});

Route::get('/resources/whitehack-houserules', function() {
    return view('resources.whitehack-houserules');
});



/*
 * 
 * Posts
 * 
 */
// Display all posts.
Route::get('/posts', [
    PostController::class, 'index'
]);

// Display form for creating new post.
Route::get('/posts/create', [
    PostController::class, 'create'
])->middleware('auth.create_posts');

// Store data for newly-created post.
Route::post('/posts', [
    PostController::class, 'store'
])->middleware('auth.create_posts');

// Display a single post.
// Overwrites for special posts go here.
Route::get('/posts/{slug}', [
    PostController::class, 'show'
]);

// Display form for editing a post.
Route::get('/posts/{slug}/edit', [
    PostController::class, 'edit'
])->middleware('auth.edit_posts');

// Store data for newly-edited post.
Route::put('/posts/{slug}', [
    PostController::class, 'update'
])->middleware('auth.edit_posts');

// Delete a single post.
Route::delete('/posts/{slug}', [
    PostController::class, 'destroy'
])->middleware('auth.delete_posts');