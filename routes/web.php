<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

use App\Http\Controllers\CommentController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ReactionController;
use App\Http\Controllers\UserController;

/*
 *
 * Authentication
 * 
 */
Route::get('/login', function() {
    return view('login');
})->name('login');

Route::post('/login', [
    UserController::class, 'login'
]);

Route::get('/logout', [
    UserController::class, 'logout'
])->name('logout');

Route::post('/logout', [
    UserController::class, 'logout'
]);

Route::get('/register', function() {
    return view('register');
})->name('register');

Route::post('/register', [
    UserController::class, 'register'
]);

/*
 *
 * App
 * 
 */
Route::middleware(['check_token'])->group(function() {
    Route::get('/', function() {
        return redirect('/posts');
    })->name('home');

    Route::get('/posts', function() {
        return view('posts');
    })->name('posts');

    Route::post('/posts', [
        PostController::class, 'create'
    ]);

    Route::delete('/posts', [
        PostController::class, 'destroy'
    ]);

    Route::post('/posts/comments', [
        CommentController::class, 'create'
    ]);

    Route::delete('/posts/comments', [
        CommentController::class, 'destroy'
    ]);

    Route::post('/posts/react', [
        ReactionController::class, 'react'
    ]);

    Route::get('/profile', [
        UserController::class, 'profile'
    ])->name('profile');
});

/*
 *
 * API
 * 
 */
// FIXME update APIs to not pass sensitive information
Route::middleware(['check_token'])->group(function() {
    Route::get('/api/session', [
        UserController::class, 'session'
    ]);

    Route::get('/api/posts', [
        PostController::class, 'index'
    ]);

    Route::post('/api/posts', [
        PostController::class, 'create'
    ]);

    Route::delete('/api/posts', [
        PostController::class, 'destroy'
    ]);

    Route::get('/api/comments', [
        CommentController::class, 'index'
    ]);

    Route::post('/api/comments', [
        CommentController::class, 'create'
    ]);

    Route::post('/api/reactions', [
        ReactionController::class, 'create'
    ]);
});