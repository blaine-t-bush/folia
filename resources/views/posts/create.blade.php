@extends('layouts.app')

@section('title', 'New Post')

@section('content')
<h1>Create New Post</h1>
<form id="create" method="POST" action="/posts">
    @csrf
    <label for="title">Title</label><br>
    <input name="title" type="text"><br>
    <label for="title">Summary</label><br>
    <input name="summary" type="text"><br>
    <input type="submit" value="Submit">
</form>
<textarea name="body" cols="100" rows="30" form="create"></textarea>
@endsection