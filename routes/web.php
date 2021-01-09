<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

use App\Http\Controllers\PostController;
use App\Http\Controllers\FoliaCommentController;
use App\Http\Controllers\FoliaPostController;
use App\Http\Controllers\FoliaUserController;

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
        return redirect('/folia/posts');
    })->name('folia');

    Route::get('/folia/posts', [
        FoliaPostController::class, 'index'
    ]);

    Route::post('/folia/posts', [
        FoliaPostController::class, 'create'
    ]);

    Route::delete('/folia/posts/{id}', [
        FoliaPostController::class, 'destroy'
    ]);

    Route::post('/folia/posts/{id}/reply', [
        FoliaCommentController::class, 'create'
    ]);

    Route::delete('/folia/comments/{id}', [
        FoliaCommentController::class, 'destroy'
    ]);
    
    Route::get('/folia/login', function() {
        return view('folia.login');
    })->name('folia.login')->withoutMiddleware(['folia.check_token']);
    
    Route::post('/folia/login', [
        FoliaUserController::class, 'login'
    ])->withoutMiddleware(['folia.check_token']);
    
    Route::get('/folia/logout', [
        FoliaUserController::class, 'logout'
    ]);
    
    Route::post('/folia/logout', [
        FoliaUserController::class, 'logout'
    ])->name('folia.logout');
    
    Route::get('/folia/register', function() {
        return view('folia.register');
    })->name('folia.register')->withoutMiddleware(['folia.check_token']);
    
    Route::post('/folia/register', [
        FoliaUserController::class, 'register'
    ])->withoutMiddleware(['folia.check_token']);

    Route::get('/folia/profile', [
        FoliaUserController::class, 'profile'
    ])->name('folia.profile');
});