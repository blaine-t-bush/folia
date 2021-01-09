<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Folia</title>

    <style>
        @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,900&family=VT323&display=swap');
        
        body {
            background-color: rgb(54, 54, 54);
            color: rgb(163, 163, 163);
            font-family: 'Source Code Pro', Courier, monospace;
            margin: auto;
            max-width: 720px;
            width: 95%;
        }

        main {
            position: relative;
        }

        img {
            max-width: 100%;
        }

        input, textarea {            
            /* Reset the default style */
            background: none;
            color: inherit;
            border: none;
            padding: 0;
            font: inherit;
            cursor: pointer;
            outline: inherit;
        }

        textarea {
            background-color: rgb(163, 163, 163);
            color:rgb(54, 54, 54) !important;
        }

        input[type="text"] {
            background-color: rgb(163, 163, 163);
            color:rgb(54, 54, 54) !important;
            padding: 0 0.2em;
        }

        input[type="textarea"] {
            background-color: rgb(163, 163, 163);
            color:rgb(54, 54, 54) !important;
        }

        header {
            display: grid;
            grid-template-columns: 50% 50%;
            margin-bottom: 2rem;
            margin-top: 0.5rem;
        }

        h1.title {
            align-self: center;
            grid-column: 1 / span 1;
            grid-row: 1 / span 1;
            margin: 0;
        }

        h1.title a {
            color: inherit;
        }

        h2.tagline {
            align-self: center;
            grid-column: 1 / span 2;
            grid-row: 3 / span 1;
            font-size: 1.2rem;
            font-weight: normal;
            margin: 0;
        }

        .rule {
            align-self: center;
            grid-column: 1 / span 2;
            grid-row: 2 / span 1;
            overflow: hidden;
            width: 100%;
        }

        nav {
            align-items: center;
            display: flex;
            justify-content: flex-end;
            grid-column: 2 / span 1;
            grid-row: 1 / span 1;
        }

        a {
            color: lightgreen;
            text-decoration: none;
        }

        a:hover {
            text-decoration: underline;
        }

        a:link, a:active {
            color: lightgreen;
        }

        a:visited {
            color: green;
        }

        nav a {
            padding: 1em;
        }

        nav a {
            color: lightgreen !important;
        }

        .heavy-button {
            border: 2px solid green;
            color: green;
            font-weight: bold;
            height: 1.6em;
            line-height: 1em;
            padding: 0 0.3em;
        }

        .heavy-button:focus, .heavy-button:hover {
            background-color: darkgreen;
            border: 2px solid lightgreen;
            color: lightgreen;
        }
    </style>
    @stack('style')
</head>
<body>
    <header>
        <h1 class="title"><a href="{{ route('folia') }}">Folia</a></h1>
        <div class="rule">======================================================================================================================================================================================================================</div>
        <h2 class="tagline">The Completely Real Social Media Platform</h2>
        <nav>
            <a href="{{ route('folia.logout') }}">Logout</a>
            <a href="{{ route('folia.profile') }}">Profile</a>
        </nav>
    </header>
    <main>
        @yield('main')
    </main>
</body>
</html>