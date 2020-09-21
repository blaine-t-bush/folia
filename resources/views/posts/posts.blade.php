@extends('layouts.app')

@section('title', 'Posts')

@section('content')
<a href="/posts/create">New Post</a>

<h1>Posts</h1>

<ol class="posts">
@foreach ($posts as $post)
<li>
<h2><a href="/posts/{{ $post->id }}">{{ $post->title }}</a></h2>

<p>by {{ $post->author }}</p>

{!! parsedown($post->body) !!}

<form method="POST" action="/posts/{{ $post->id }}">
    @csrf
    @method('DELETE')
    <input type="submit" value="Delete">
</form>
</li>
@endforeach
</ol>
@endsection