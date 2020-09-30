<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
   

        <title>{{ config('app.name') }} | @yield('title')</title>

        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IM+Fell+English:ital@0;1&display=swap">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nanum+Gothic+Coding&display=swap">
        <link rel="stylesheet" href="{{ asset('css/normalize.css') }}">
        <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    </head>
    <body>
        <nav class="menu">
            <ul>
                <a href="/home"><li @if (Request::is('home*')) class="highlighted first" @endif class="first">Home</li></a>
                <a href="/posts"><li @if (Request::is('posts*')) class="highlighted" @endif>Posts</li></a>
                <a href="/resources"><li @if (Request::is('resources*')) class="highlighted" @endif>Resources</li></a>
                <a href="/about"><li @if (Request::is('about*')) class="highlighted" @endif>About</li></a>
            </ul>
        </nav>

        <main>
            @yield('content')
        </main>

        <footer>
            <p>Handmade with <a href="https://laravel.com/">Laravel</a> and <a href="https://vuejs.org/">Vue.js</a>. The Fell Types are digitally reproduced by <a href="https://iginomarini.com/">Igino Marini</a>.</p>
        </footer>
    </body>
</html>