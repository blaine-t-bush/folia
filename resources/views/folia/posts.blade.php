@extends('folia.layouts.app')

@push('style')
<style>
    .posts {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .post {
        background-color: rgb(107, 107, 107);
        border: 1px solid lightgreen;
        color: lightgreen;
        margin-bottom: 1.5rem;
        padding: 0.5rem;
    }

    .post-header {
        display: grid;
        grid-template-columns: min-content auto auto;
        max-height: 1.6em;
        line-height: 1.6em;
    }

    .post-header-displayname {
        font-weight: 600;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .post-header-username {
        font-style: italic;
        font-weight: 300;
        padding-left: 0.5em;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .post-header-username::before {
        content: "#";
    }

    .post-header-delete {
        justify-self: end;
        line-height: 1.6em;
        max-height: 1.6em;
        padding-left: 0.5em;
    }

    .delete-button {
        border: 2px solid darkred;
        color: darkred;
    }

    .delete-button:focus, .delete-button:hover {
        background-color: darkred;
        border: 2px solid palevioletred;
        color: palevioletred;
    }

    .post-timestamp {
        font-weight: 300;
        margin-bottom: 0.5rem;
    }

    .post-body {
        margin: 0;
        padding: 0;
    }
    
    .create {
        align-items: center;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .create-text {
        flex: 1;
        min-height: 4.5em;
        line-height: 1.5em;
        padding: 0 0.5em;
    }

    .create-button {
        margin-bottom: 2rem;
        margin-top: 0.5rem;
    }

    .comments {
        border-top: 1px solid lightgreen;
        font-size: 0.9rem;
        list-style: none;
        margin: 1rem 0 0 0rem;
        padding: 0 0 0 1.5rem;
    }

    .comment {
        padding-left: 0.5rem;
        margin-top: 1rem;
    }

    .comment-header {
        align-items: center;
        display: flex;
        flex-direction: row;
        max-height: 1.6em;
        line-height: 1.6em;
    }

    .comment-header-displayname {
        font-weight: 600;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .comment-header-username {
        font-style: italic;
        font-weight: 300;
        padding-left: 0.5em;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .comment-header-username::before {
        content: "#";
    }

    .reply {
        display: flex;
        margin: 1rem 0 0 0;
    }

    .reply-text {
        flex: 1;
        line-height: 1.5em;
        height: 1.5em;
        padding: 0 0.5em;
    }

    .reply-button {
        background-color: rgb(54, 54, 54);
        margin-left: 0.5em;
    }
</style>
@endpush('style')

@section('main')
    <form class="create" id="create" method="post" action="/folia/posts">
        @csrf

        <textarea
            class="create-text"
            name="body"
            id="body"
            placeholder="Go ahead, share that important thought!"></textarea>
    </form>

    <input class="create-button heavy-button" type="submit" value=">>>" form="create">

    <ol class="posts">
        @foreach($posts as $post)
        <li class="post">
            <div class="post-header">
                <div class="post-header-displayname">{{ $post->user->display_name }}</div>
                <div class="post-header-username">{{ $post->user_id }}</div>

                @if($post->user_id == session('folia_user_id'))
                <form class="post-header-delete" method="post" action="/folia/posts/{{ $post->id }}">
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
                    </div>
                    
                    <div class="comment-body">{{ $comment->body }}</div>
                </li>
                @endforeach
            </ol>

            <form class="reply" id="reply-{{ $post->id }}" method="post" action="/folia/posts/{{ $post->id }}/reply">
                @csrf
        
                <input
                    class="reply-text"
                    type="text"
                    name="body"
                    id="body"
                    placeholder="Reply">

                <input class="reply-button heavy-button" type="submit" value=">>>" form="reply-{{ $post->id }}">
            </form>
        </li>
        @endforeach
    </ol>
@endsection