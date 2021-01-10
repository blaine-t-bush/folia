<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Folia</title>

    {{-- Styles --}}
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,900&family=VT323&display=swap');
    </style>
    <link rel="stylesheet" href="{{ asset('css/folia/app.css') }}">
    @stack('style')

    {{-- Scripts --}}
    <script src="https://kit.fontawesome.com/acd4b236b1.js" crossorigin="anonymous"></script>
    <script>
        function togglePasswordVisibility(event, inputId, iconId) {
            // Prevent event from running so form doesn't get submitted.
            event.preventDefault();

            // Change password to hidden if visible and vice versa,
            // and change icon to match.
            let input = document.getElementById(inputId);
            let icon = document.getElementById(iconId);
            if (input.type === "password") {
                input.type = "text";
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            } else if (input.type === "text") {
                input.type = "password";
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            }

            return;
        }
    </script>
    @stack('script')
</head>
<body>
    <header>
        <h1 class="title"><a href="{{ route('folia') }}">Folia</a></h1>
        <div class="rule">======================================================================================================================================================================================================================</div>
        <h2 class="tagline">The Social Media Platform for&nbsp;<del>Robots</del>&nbsp;Humans</h2>
        @if(session('folia_user_logged_in') == true)
        <nav>
            <a href="{{ route('folia') }}">Home</a>
            <a href="{{ route('folia.profile') }}">Profile</a>
            <a href="{{ route('folia.logout') }}">Logout</a>
        </nav>
        @endif
    </header>
    <main>
        @yield('main')
    </main>
</body>
</html>