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
    <li class="post">
        <a href="/posts/{{ $post->slug }}" class="post-link">
            <img src="{{ $post->image_url }}" alt="">

            <h2>{!! parsedown($post->title) !!}</h2>

            <time datetime="">{{ date_format($post->created_at, 'F j, Y') }}</time>

            <summary>{!! parsedown($post->summary) !!}</summary>

            <p class="read-more">Read More »</p>
        </a>
            
        @if (Auth::check())
            <div class="post-admin">
                @if (Auth::user()->can_edit_posts)
                    <a href="/posts/{{ $post->slug }}/edit">
                        <button class="post-admin-edit">Edit</button>
                    </a>
                @endif
    
                @if (Auth::user()->can_delete_posts)
                    <form method="POST" action="/posts/{{ $post->slug }}">
                        @csrf
                        @method('DELETE')
                        <input class="post-admin-delete" type="submit" value="Delete">
                    </form>
                @endif
            </div>
        @endif
    </li>
    @endforeach
</ol>

{{ $posts->links('posts.pagination') }}
@endsection