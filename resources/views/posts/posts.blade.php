@extends('layouts.app')

@section('title', 'Posts')

@section('content')
<h1>Posts</h1>

@if (Auth::check() && Auth::user()->can_create_posts)
<a href="/posts/create"><button class="create-new-post">Create New Post</button></a>
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

            @if (Auth::check() && Auth::user()->can_delete_posts)
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