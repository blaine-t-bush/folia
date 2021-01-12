<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Folia</title>

    {{-- Styles --}}
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700;1,900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    @stack('style')

    {{-- Scripts --}}
    <script src="https://kit.fontawesome.com/acd4b236b1.js" crossorigin="anonymous"></script>
    <script src="{{ asset('js/app.js') }}"></script>
    @stack('script')
</head>
<body>
    <header>
        <h1 class="title"><a href="{{ route('home') }}">Folia</a></h1>
        <div class="rule">======================================================================================================================================================================================================================</div>
        <h2 class="tagline">The Social Media Platform for&nbsp;<del>Robots</del>&nbsp;Humans</h2>
        @if(session('user_logged_in') == true)
        <nav>
            <a href="{{ route('home') }}">Home</a>
            <a href="{{ route('profile') }}">Profile</a>
            <a href="{{ route('logout') }}">Logout</a>
        </nav>
        @endif
    </header>
    <main>
        @yield('main')
    </main>
</body>
</html>