<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Posts</title>
</head>
<body>
    <a href="/posts/create">New Post</a>
    <h1>Posts</h1>
    @foreach ($posts as $post)
    <h2>{{ $post->title }}</h2>
    <p>by {{ $post->author }}</p>
    <p>{{ $post->body }}</p>
    <form method="POST" action="/posts/{{ $post->id }}">
        @csrf
        @method('DELETE')
        <input type="submit" value="Delete">
    </form>
    @endforeach
</body>
</html>