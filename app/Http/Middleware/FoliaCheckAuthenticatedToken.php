<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

use App\Models\FoliaUser;

class FoliaCheckAuthenticatedToken
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
        if ($request->session()->has('folia_authenticated_token') && $request->session()->has('folia_username')) {
            // If they do, and it matches our token, we can let them continue.
            $user = FoliaUser::find($request->session()->get('folia_username'));
            if ($request->session()->get('folia_authenticated_token') == $user->authenticated_token) {
                return $next($request);
            }
        }
        
        // If not, send them to the login form.
        return redirect('/folia/login');
    }
}