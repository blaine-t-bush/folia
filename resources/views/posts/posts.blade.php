@extends('layouts.app')

@section('title', 'Posts')

@section('content')
<h1>Posts</h1>

@if (session('is_admin'))
<button class="create-new-post" href="/posts/create">Create New Post</button>
@endif

<ol class="posts">
    @foreach ($posts as $post)
    <a href="/posts/{{ $post->id }}">
        <li class="post">
            <h2>
                {{ $post->title }}
            </h2>

            <time datetime="">{{ date_format($post->created_at, 'F j, Y') }}</time>

            <summary>{{ $post->summary }}</summary>

            @if (session('is_admin'))
            <form method="POST" action="/posts/{{ $post->id }}">
                @csrf
                @method('DELETE')
                <input class="delete-post" type="submit" value="Delete">
            </form>
            @endif
        </li>
    </a>
    @endforeach
</ol>

{{ $posts->links('posts.pagination') }}
@endsection