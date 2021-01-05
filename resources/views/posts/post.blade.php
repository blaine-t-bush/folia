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

    {!! parsedown($post->summary) !!}
    
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

    @if ($post->resource_url)
        <!-- TODO move styling to css
        -->
        <iframe src="{{ $post->resource_url }}" frameborder="0" style="width:100%; height:100vh; max-height:720px; border:2px solid darkred; margin-top:1rem; box-sizing:border-box;"></iframe>
    @endif

    {!! parsedown($post->body) !!}
</article>

<a href="/posts">« All Posts</a>
@endsection