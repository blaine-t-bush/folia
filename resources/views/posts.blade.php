@extends('folia.layouts.app')

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

                @if($post->user_id == session('folia_user_id'))
                <form class="post-header-delete" method="post" action="/posts/{{ $post->id }}">
                    @csrf
                    @method('delete')
                    <input class="delete-button heavy-button" type="submit" value="X">
                </form>
                @endif
            </div>

            <div class="post-timestamp">{{ $post->created_at }}</div>

            <p class="post-body">{{ $post->body }}</p>

            <ol class="comments">
                @foreach($post->comments as $comment)
                <li class="comment">
                    <div class="comment-header">
                        <div class="comment-header-displayname">{{ $comment->user->display_name }}</div>
                        <div class="comment-header-username">{{ $comment->user->id }}</div>

                        @if($comment->user_id == session('folia_user_id'))
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