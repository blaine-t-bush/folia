<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

use App\Http\Controllers\PostController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\UserController;

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

Route::get('/portfolio', function() {
    return view('portfolio');
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

Route::get('/resources/osrs-slayer-tasks', function() {
    return view('resources.osrs-slayer-tasks');
});

Route::get('/resources/osrs-molten-glass', function() {
    return view('resources.osrs-molten-glass');
});

Route::get('/resources/whitehack-character-generator', function() {
    return view('resources.whitehack-character-generator');
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


/*
 *
 * Folia
 * 
 */
Route::middleware(['folia.check_token'])->group(function() {
    Route::get('/folia', function() {
        return redirect('/posts');
    })->name('folia');

    Route::get('/posts', [
        PostController::class, 'index'
    ]);

    Route::post('/posts', [
        PostController::class, 'create'
    ]);

    Route::delete('/posts/{id}', [
        PostController::class, 'destroy'
    ]);

    Route::post('/posts/{id}/reply', [
        CommentController::class, 'create'
    ]);

    Route::delete('/comments/{id}', [
        CommentController::class, 'destroy'
    ]);
    
    Route::get('/login', function() {
        return view('folia.login');
    })->name('folia.login')->withoutMiddleware(['folia.check_token']);
    
    Route::post('/login', [
        UserController::class, 'login'
    ])->withoutMiddleware(['folia.check_token']);
    
    Route::get('/logout', [
        UserController::class, 'logout'
    ]);
    
    Route::post('/logout', [
        UserController::class, 'logout'
    ])->name('folia.logout');
    
    Route::get('/register', function() {
        return view('folia.register');
    })->name('folia.register')->withoutMiddleware(['folia.check_token']);
    
    Route::post('/register', [
        UserController::class, 'register'
    ])->withoutMiddleware(['folia.check_token']);

    Route::get('/profile', [
        UserController::class, 'profile'
    ])->name('folia.profile');
});