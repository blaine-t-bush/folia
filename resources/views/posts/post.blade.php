@extends('layouts.app')

@section('title', $post->title)

@push('styles')
<link rel="stylesheet" href="{{ asset('css/posts.css') }}">
<link rel="stylesheet" href="{{ asset('css/post.css') }}">
@endpush

@section('content')
<article>
    <h1 class="page-title">{!! parsedown($post->title) !!}</h1>

    <time datetime="">{{ date_format($post->created_at, 'F j, Y') }}</time>
            
    @if (Auth::check() && Auth::user()->can_edit_posts)
    <br>
    <a href="/posts/{{ $post->id }}/edit"><button class="edit-post">Edit</button></a>
    @endif

    @if (Auth::check() && Auth::user()->can_delete_posts)
    <br>
    <form method="POST" action="/posts/{{ $post->id }}">
        @csrf
        @method('DELETE')
        <input class="delete-post" type="submit" value="Delete">
    </form>
    @endif

    {!! parsedown($post->body) !!}
</article>

<a href="/posts">« All Posts</a>
@endsection