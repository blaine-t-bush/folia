<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

use App\Http\Controllers\PostController;

/*
 * 
 * Main pages
 * 
 */
Route::redirect('/', '/home');

Route::get('/home', function() {
    return view('home');
});

Route::get('/test', function() {
    return view('test');
});

Route::get('/resources', function() {
    return view('resources');
});

Route::get('/resources/whitehack-character-generator', function() {
    return view('resources.whitehack-character-generator');
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
Route::get('/posts/{id}', [
    PostController::class, 'show'
]);

// Display form for editing a post.
Route::get('/posts/{id}/edit', [
    PostController::class, 'edit'
])->middleware('auth.edit_posts');

// Store data for newly-edited post.
Route::put('/posts/{id}', [
    PostController::class, 'update'
])->middleware('auth.edit_posts');

// Delete a single post.
Route::delete('/posts/{id}', [
    PostController::class, 'destroy'
])->middleware('auth.delete_posts');