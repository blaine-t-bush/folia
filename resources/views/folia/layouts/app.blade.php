<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Folia</title>

    <style>
        @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,900&family=VT323&display=swap');
    </style>
    <link rel="stylesheet" href="{{ asset('css/folia/app.css') }}">
    @stack('style')
</head>
<body>
    <header>
        <h1 class="title"><a href="{{ route('folia') }}">Folia</a></h1>
        <div class="rule">======================================================================================================================================================================================================================</div>
        <h2 class="tagline">The Social Media Platform for&nbsp;<del>Robots</del>&nbsp;Humans</h2>
        @if(session('folia_user_id'))
        <nav>
            <a href="{{ route('folia.logout') }}">Logout</a>
            <a href="{{ route('folia.profile') }}">Profile</a>
        </nav>
        @endif
    </header>
    <main>
        @yield('main')
    </main>
</body>
</html>