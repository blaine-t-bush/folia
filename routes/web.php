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
        return redirect('/home');
    });

    Route::get('/home', function() {
        return view('home');
    })->name('home');

    Route::get('/profile/{id?}', [
        UserController::class, 'profile'
    ])->name('profile');
});

/*
 *
 * API
 * 
 */
// FIXME move APIs to separate routes file?
Route::middleware(['check_token'])->group(function() {
    Route::get('/api/session', [
        UserController::class, 'session'
    ]);

    Route::get('/api/posts/{id?}', [
        PostController::class, 'index'
    ]);

    Route::post('/api/posts', [
        PostController::class, 'create'
    ]);

    Route::delete('/api/posts', [
        PostController::class, 'destroy'
    ]);

    Route::get('/api/comments/{id?}', [
        CommentController::class, 'index'
    ]);

    Route::post('/api/comments', [
        CommentController::class, 'create'
    ]);

    Route::delete('/api/comments', [
        CommentController::class, 'destroy'
    ]);

    Route::get('/api/reactions', [
        ReactionController::class, 'index'
    ]);

    Route::post('/api/reactions', [
        ReactionController::class, 'create'
    ]);

    Route::delete('/api/reactions', [
        ReactionController::class, 'destroy'
    ]);

    Route::get('/api/user/{id?}', [
        UserController::class, 'fetch_info'
    ]);

    Route::post('/api/avatar', [
        UserController::class, 'update_avatar'
    ]);
});