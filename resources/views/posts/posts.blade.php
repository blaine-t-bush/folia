@extends('layouts.app')

@section('title', 'Posts')

@push('styles')
<link rel="stylesheet" href="{{ asset('css/posts.css') }}">
@endpush

@section('content')

@if (Auth::check() && Auth::user()->can_create_posts)
<a href="/posts/create"><button class="create-new-post">Create New Post</button></a>
@endif

<ol class="posts">
    @foreach ($posts as $post)
    <a href="/posts/{{ $post->id }}">
        <li class="post">
            <img src="{{ asset('images/huckleberry_BW_1.png') }}" alt="">

            <h2>{{ $post->title }}</h2>

            <time datetime="">{{ date_format($post->created_at, 'F j, Y') }}</time>

            <summary>{{ $post->summary }}</summary>

            @if (Auth::check() && Auth::user()->can_delete_posts)
            <form method="POST" action="/posts/{{ $post->id }}">
                @csrf
                @method('DELETE')
                <input class="delete-post" type="submit" value="Delete">
            </form>
            @endif

            @if (Auth::check() && Auth::user()->can_edit_posts)
            <a href="/posts/{{ $post->id }}/edit"><button class="edit-post">Edit</button></a>
            @endif
        </li>
    </a>
    @endforeach
</ol>

{{ $posts->links('posts.pagination') }}
@endsection