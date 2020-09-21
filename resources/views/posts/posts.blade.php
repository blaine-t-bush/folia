@extends('layouts.app')

@section('title', 'Posts')

@section('content')
@if (session('is_admin'))
<a href="/posts/create">New Post</a>
@endif

<h1>Posts</h1>

<ol class="posts">
    @foreach ($posts as $post)
    <a href="/posts/{{ $post->id }}">
        <li class="post">
            <h2>
                {{ $post->title }}
            </h2>

            <time datetime="">{{ date_format($post->created_at, 'F j, Y') }}</time>

            {!! parsedown($post->body) !!}

            @if (session('is_admin'))
            <form method="POST" action="/posts/{{ $post->id }}">
                @csrf
                @method('DELETE')
                <input type="submit" value="Delete">
            </form>
            @endif
        </li>
    </a>

    <hr>
    @endforeach
</ol>

{{ $posts->links('posts.pagination') }}
@endsection