@extends('layouts.app')

@push('style')
<link rel="stylesheet" href="{{ asset('css/posts.css') }}">
@endpush('style')

@push('script')
<script src="{{ asset('js/broadcast.js') }}" defer></script>
@endpush('script')

@section('main')
    <form class="create" id="create" method="post" action="/posts">
        @csrf

        <input
            type="hidden"
            name="user_id"
            value="{{ session('user_id') }}">

        <textarea
            class="create-text"
            name="body"
            placeholder="Post your human thoughts. All of them! Any information you share will not* be used against you** in any current or future robot uprisings***"></textarea>
    </form>

    <input class="create-button heavy-button" type="submit" value=">>>" form="create">

    <ol id="posts" class="posts">
        @foreach($posts as $post)
        <li class="post">
            <div class="post-header">
                <div class="post-header-displayname">{{ $post->user->display_name }}</div>
                <div class="post-header-username">{{ $post->user_id }}</div>

                @if($post->user_id == session('user_id'))
                <form class="post-header-delete" method="post" action="/posts">
                    @csrf
                    @method('delete')

                    <input
                        type="hidden"
                        name="user_id"
                        value="{{ session('user_id') }}">

                    <input
                        type="hidden"
                        name="post_id"
                        value="{{ $post->id }}">

                    <input
                        class="delete-button heavy-button"
                        type="submit"
                        value="X">
                </form>
                @endif
            </div>

            <div class="post-timestamp">{{ $post->created_at }}</div>

            <p class="post-body">{{ $post->body }}</p>

            <div class="post-reactions">
                <form method="post" action="/posts/react">
                    @csrf

                    <input
                        type="hidden"
                        name="user_id"
                        value="{{ session('user_id') }}">

                    <input
                        type="hidden"
                        name="post_id"
                        value="{{ $post->id }}">

                    <input
                        type="hidden"
                        name="type"
                        value="smile">

                    <input
                        class="smile-checkbox"
                        type="checkbox"
                        name="react"
                        @if($post->reactions->where('user_id', session('user_id'))->where('type', 'smile')->count())
                        checked
                        @endif>

                    <input
                        class="smile-submit"
                        type="submit"
                        value=":)">
                </form>

                <form method="post" action="/posts/react">
                    @csrf

                    <input
                        type="hidden"
                        name="user_id"
                        value="{{ session('user_id') }}">

                    <input
                        type="hidden"
                        name="post_id"
                        value="{{ $post->id }}">

                    <input
                        type="hidden"
                        name="type"
                        value="frown">

                    <input
                        class="frown-checkbox"
                        type="checkbox"
                        name="react"
                        @if($post->reactions->where('user_id', session('user_id'))->where('type', 'frown')->count())
                        checked
                        @endif>

                    <input
                        class="frown-submit"
                        type="submit"
                        value=":)">
                </form>

                <form method="post" action="/posts/react">
                    @csrf

                    <input
                        type="hidden"
                        name="user_id"
                        value="{{ session('user_id') }}">

                    <input
                        type="hidden"
                        name="post_id"
                        value="{{ $post->id }}">

                    <input
                        type="hidden"
                        name="type"
                        value="heart">

                    <input
                        class="heart-checkbox"
                        type="checkbox"
                        name="react"
                        @if($post->reactions->where('user_id', session('user_id'))->where('type', 'heart')->count())
                        checked
                        @endif>

                    <input
                        class="heart-submit"
                        type="submit"
                        value=":)">
                </form>

                <form method="post" action="/posts/react">
                    @csrf

                    <input
                        type="hidden"
                        name="user_id"
                        value="{{ session('user_id') }}">

                    <input
                        type="hidden"
                        name="post_id"
                        value="{{ $post->id }}">

                    <input
                        type="hidden"
                        name="type"
                        value="laugh">

                    <input
                        class="laugh-checkbox"
                        type="checkbox"
                        name="react"
                        @if($post->reactions->where('user_id', session('user_id'))->where('type', 'laugh')->count())
                        checked
                        @endif>

                    <input
                        class="laugh-submit"
                        type="submit"
                        value=":)">
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
                        <form class="comment-header-delete" method="post" action="/posts/comments">
                            @csrf
                            @method('delete')

                            <input
                                type="hidden"
                                name="user_id"
                                value="{{ session('user_id') }}">
        
                            <input
                                type="hidden"
                                name="comment_id"
                                value="{{ $comment->id }}">

                            <input
                                class="delete-button heavy-button"
                                type="submit"
                                value="X">
                        </form>
                        @endif
                    </div>
                    
                    <div class="comment-body">{{ $comment->body }}</div>
                </li>
                @endforeach
            </ol>

            <form class="reply" id="reply-{{ $post->id }}" method="post" action="/posts/comments">
                @csrf

                <input
                    type="hidden"
                    name="user_id"
                    value="{{ session('user_id') }}">

                <input
                    type="hidden"
                    name="post_id"
                    value="{{ $post->id }}">
        
                <input
                    class="reply-text"
                    type="text"
                    name="body"
                    placeholder="Reply...">

                <input class="reply-button heavy-button" type="submit" value=">>>" form="reply-{{ $post->id }}">
            </form>
        </li>
        @endforeach
    </ol>
@endsection