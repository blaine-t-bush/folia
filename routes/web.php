<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\PostController;

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
    return view('home');
});

Route::get('/resources', function() {
    return view('resources');
});

Route::get('/about', function() {
    return view('about');
});

// The 7 RESTful Methods *bow*

// Display all posts.
Route::get('/posts', [PostController::class, 'index']);

// Display form for creating new post.
Route::get('/posts/create', [PostController::class, 'create']);

// Store data for newly-created post.
Route::post('/posts', [PostController::class, 'store']);

// Display a single post.
Route::get('/posts/{post}', [PostController::class, 'show']);

// Display form for editing a post.
Route::get('/posts/{post}/edit', [PostController::class, 'edit']);

// Store data for newly-edited post.
Route::put('/posts/{post}', [PostController::class, 'update']);

// Delete a single post.
Route::delete('/posts/{post}', [PostController::class, 'destroy']);