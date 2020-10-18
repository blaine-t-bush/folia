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
    
    <img src="{{ asset($post->image_url) }}" alt="">
    
    @if (Auth::check())
        <div class="post-admin">
            @if (Auth::user()->can_edit_posts)
                <a href="/posts/{{ $post->slug }}/edit"><button class="post-admin-edit">Edit</button></a>
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

    {!! parsedown($post->body) !!}
</article>

<a href="/posts">« All Posts</a>
@endsection