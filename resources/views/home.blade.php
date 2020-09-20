<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IM+Fell+English:ital@0;1&display=swap">
        <link rel="stylesheet" href="css/normalize.css">
        <link rel="stylesheet" href="css/app.css">
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
            <h1>Blog Title</h1>

            <h2>Lizardmen</h2>
            <x-table :collection="$collection" />
    
            <h2>Lizardmen</h2>
            <x-table :collection="$collection" />
    
            <h2>Lizardmen</h2>
            <x-table :collection="$collection" />
    
            <h2>Lizardmen</h2>
            <x-table :collection="$collection" />

            <footer>
                Made with Laravel. Font credit. Normalize.css.
            </footer>
        </main>
    </body>
</html>
