<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Create New Post</title>
</head>
<body>
    <form method="POST" action="/posts">
        @csrf
        <label for="title">Post Title</label><br>
        <input name="title" type="text"><br>
        <label for="author">Author</label><br>
        <input name="author" type="text"><br>
        <label for="body" type="text">Body</label><br>
        <input name="body" type="text"><br>
        <input type="submit" value="Submit">
    </form>
</body>
</html>