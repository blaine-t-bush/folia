@extends('layouts.app')

@section('title', 'New Post')

@section('content')
<form id="create" method="POST" action="/posts">
    @csrf
    <label for="title">Post Title</label><br>
    <input name="title" type="text"><br>
    <label for="author">Author</label><br>
    <input name="author" type="text"><br>
    <input type="submit" value="Submit">
</form>
<textarea name="body" cols="100" rows="30" form="create"></textarea>
@endsection