@extends('layouts.app')

@push('style')
<link rel="stylesheet" href="{{ asset('css/posts.css') }}">
@endpush('style')

@section('main')
    <form class="create" id="create" method="post" action="/posts">
        @csrf

        <textarea
            class="create-text"
            name="body"
            id="body"
            placeholder="Post your human thoughts. All of them! Any information you share will not* be used against you** in any current or future robot uprisings***"></textarea>
    </form>

    <input class="create-button heavy-button" type="submit" value=">>>" form="create">

    <ol class="posts">
        @foreach($posts as $post)
        <li class="post">
            <div class="post-header">
                <div class="post-header-displayname">{{ $post->user->display_name }}</div>
                <div class="post-header-username">{{ $post->user_id }}</div>

                @if($post->user_id == session('user_id'))
                <form class="post-header-delete" method="post" action="/posts/{{ $post->id }}">
                    @csrf
                    @method('delete')
                    <input class="delete-button heavy-button" type="submit" value="X">
                </form>
                @endif
            </div>

            <div class="post-timestamp">{{ $post->created_at }}</div>

            <p class="post-body">{{ $post->body }}</p>

            <div class="post-reactions">
                <form method="post" action="/posts/{{ $post->id }}/react/smile">
                    @csrf
                    <input class="smile-checkbox" type="checkbox" name="react" id="smile" @if($post->reactions->where('user_id', session('user_id'))->where('type', 'smile')->count()) checked @endif>
                    <input class="smile-submit" type="submit" value=":)">
                </form>
                
                <form method="post" action="/posts/{{ $post->id }}/react/frown">
                    @csrf
                    <input class="frown-checkbox" type="checkbox" name="react" id="frown" @if($post->reactions->where('user_id', session('user_id'))->where('type', 'frown')->count()) checked @endif>
                    <input class="frown-submit" type="submit" value=":(">
                </form>
                
                <form method="post" action="/posts/{{ $post->id }}/react/heart">
                    @csrf
                    <input class="heart-checkbox" type="checkbox" name="react" id="heart" @if($post->reactions->where('user_id', session('user_id'))->where('type', 'heart')->count()) checked @endif>
                    <input class="heart-submit" type="submit" value="<3">
                </form>
                
                <form method="post" action="/posts/{{ $post->id }}/react/laugh">
                    @csrf
                    <input class="laugh-checkbox" type="checkbox" name="react" id="laugh" @if($post->reactions->where('user_id', session('user_id'))->where('type', 'laugh')->count()) checked @endif>
                    <input class="laugh-submit" type="submit" value="xD">
                </form>

                <div class="count count-smile">
                    {{ $post->reactions->where('type', 'smile')->count() }}
                </div>

                <div class="count count-frown">
                    {{ $post->reactions->where('type', 'frown')->count() }}
                </div>

                <div class="count count-heart">
                    {{ $post->reactions->where('type', 'heart')->count() }}
                </div>

                <div class="count count-laugh">
                    {{ $post->reactions->where('type', 'laugh')->count() }}
                </div>
            </div>

            <ol class="comments">
                @foreach($post->comments as $comment)
                <li class="comment">
                    <div class="comment-header">
                        <div class="comment-header-displayname">{{ $comment->user->display_name }}</div>
                        <div class="comment-header-username">{{ $comment->user->id }}</div>

                        @if($comment->user_id == session('user_id'))
                        <form class="comment-header-delete" method="post" action="/comments/{{ $comment->id }}">
                            @csrf
                            @method('delete')
                            <input class="delete-button heavy-button" type="submit" value="X">
                        </form>
                        @endif
                    </div>
                    
                    <div class="comment-body">{{ $comment->body }}</div>
                </li>
                @endforeach
            </ol>

            <form class="reply" id="reply-{{ $post->id }}" method="post" action="/posts/{{ $post->id }}/reply">
                @csrf
        
                <input
                    class="reply-text"
                    type="text"
                    name="body"
                    id="body"
                    placeholder="Reply...">

                <input class="reply-button heavy-button" type="submit" value=">>>" form="reply-{{ $post->id }}">
            </form>
        </li>
        @endforeach
    </ol>
@endsection