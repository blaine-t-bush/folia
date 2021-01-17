<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

use App\Models\User;

class CheckAuthenticatedToken
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */    
    public function handle(Request $request, Closure $next) {
        // Check if user already has a valid authenticated_token.
        if ($request->session()->has('authenticated_token') && $request->session()->has('user_id')) {
            // If they do, and it matches our token, we can let them continue.
            $user = User::find($request->session()->get('user_id'));
            if ($user !== null and ($request->session()->get('authenticated_token') == $user->authenticated_token)) {
                return $next($request);
            }
        }
        
        // If not, send them to the login form.
        return redirect('/login');
    }
}