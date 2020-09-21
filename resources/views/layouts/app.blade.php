<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
   

        <title>@yield('title')</title>

        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IM+Fell+English:ital@0;1&display=swap">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nanum+Gothic+Coding&display=swap">
        <link rel="stylesheet" href="{{ asset('css/normalize.css') }}">
        <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    </head>
    <body>
        <nav>
            <ul>
                <li>Home</li>
                <li>Posts</li>
                <li>Resources</li>
                <li>About</li>
            </ul>
        </nav>

        <main>
            @yield('content')
        </main>

        <footer>
            <p>Made with <a href="https://laravel.com/">Laravel</a>. The Fell Types are digitally reproduced by <a href="https://iginomarini.com/">Igino Marini</a>.</p>
        </footer>
    </body>
</html>