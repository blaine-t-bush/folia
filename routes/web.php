<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

use App\Http\Controllers\CommentController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ReactionController;
use App\Http\Controllers\UserController;

/*
 *
 * Folia
 * 
 */
Route::middleware(['check_token'])->group(function() {
    Route::get('/', function() {
        return redirect('/posts');
    })->name('home');

    Route::get('/posts', [
        PostController::class, 'index'
    ])->name('posts');

    Route::post('/posts', [
        PostController::class, 'create'
    ]);

    Route::delete('/posts/{id}', [
        PostController::class, 'destroy'
    ]);

    Route::post('/posts/{id}/reply', [
        CommentController::class, 'create'
    ]);

    Route::post('/posts/{id}/react/{type}', [
        ReactionController::class, 'react'
    ]);

    Route::delete('/comments/{id}', [
        CommentController::class, 'destroy'
    ]);
    
    Route::get('/login', function() {
        return view('login');
    })->name('login')->withoutMiddleware(['check_token']);
    
    Route::post('/login', [
        UserController::class, 'login'
    ])->withoutMiddleware(['check_token']);
    
    Route::get('/logout', [
        UserController::class, 'logout'
    ]);
    
    Route::post('/logout', [
        UserController::class, 'logout'
    ])->name('logout');
    
    Route::get('/register', function() {
        return view('register');
    })->name('register')->withoutMiddleware(['check_token']);
    
    Route::post('/register', [
        UserController::class, 'register'
    ])->withoutMiddleware(['check_token']);

    Route::get('/profile', [
        UserController::class, 'profile'
    ])->name('profile');
});