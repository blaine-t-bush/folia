<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
   

        <title>{{ config('app.name') }} | @yield('title')</title>

        {{-- Favicon --}}
        <link rel="shortcut icon" href="{{ asset('images/huckleberry_logo.ico') }}" type="image/x-icon">

        {{-- Fonts --}}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IM+Fell+English:ital@0;1&display=swap">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nanum+Gothic+Coding&display=swap">

        {{-- Styles --}}
        <link rel="stylesheet" href="{{ asset('css/normalize.css') }}">
        <link rel="stylesheet" href="{{ asset('css/app.css') }}">

        {{-- Pre-Render Scripts --}}
        <script src="https://kit.fontawesome.com/acd4b236b1.js" crossorigin="anonymous"></script>
        @stack('scripts_head')

    </head>
    <body>
        <header>
            <div class="wrapper" aria-hidden="true">
                <div class="sub-wrapper">
                    <img src="{{ asset('images/huckleberry_logo.png') }}" alt="">
                    <h1>{{ config('app.name')}}</h1>
                </div>
                <nav>
                    <ul>
                        <li @if (Request::is('home*')) class="highlighted" @endif><a href="/home">Home</a></li>
                        <li @if (Request::is('posts*')) class="highlighted" @endif><a href="/posts">Posts</a></li>
                        <li @if (Request::is('resources*')) class="highlighted" @endif><a href="/resources">Resources</a></li>
                        <li @if (Request::is('about*')) class="highlighted" @endif><a href="/about">About</a></li>
                    </ul>
                </nav>
            </div>
        </header>

        <main>
            @yield('content')
        </main>

        <footer>
            @stack('footer')
            <p>Handmade with <a href="https://laravel.com/">Laravel</a> and <a href="https://vuejs.org/">Vue.js</a>. The Fell Types are digitally reproduced by <a href="https://iginomarini.com/">Igino Marini</a>.</p>

            @if (Auth::check())
            <a href="/logout"><button>Logout</button></a>
            @endif
        </footer>
        
        {{-- Post-Render Scripts --}}
        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
        @stack('scripts_body')
    </body>
</html>