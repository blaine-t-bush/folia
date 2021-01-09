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
        margin-bottom: 1rem;
        padding: 0.5rem;
    }

    .post-header {
        align-items: center;
        display: flex;
        flex-direction: row;
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
        padding-left: 0.5em;
        max-height: 1.6em;
        line-height: 1.6em;
    }

    .post-header-delete-button {
        color: darkred;
        font-weight: bold;
        font-family: 'Courier New', Courier, monospace;
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
</style>
@endpush('style')

@section('main')
    <form class="create" id="create" method="post" action="/folia">
        @csrf
        <input type="hidden" name="username" id="username" value="{{ session('folia_username') }}">
        <textarea class="create-text" name="body" id="body" placeholder="Go ahead, share that important thought!"></textarea>
    </form>

    <input class="create-button heavy-button" type="submit" value=">>> Post" form="create">

    <ol class="posts">
        @foreach($posts as $post)
        <li class="post">
            <div class="post-header">
                <div class="post-header-displayname">{{ $post->user->display_name }}</div>
                <div class="post-header-username">{{ $post->username }}</div>

                @if($post->username == session('folia_username'))
                <form class="post-header-delete" method="post" action="/folia/{{ $post->id }}">
                    @csrf
                    @method('delete')
                    <input class="post-header-delete-button" type="submit" value="Delete">
                </form>
                @endif
            </div>

            <div class="post-timestamp">{{ $post->created_at }}</div>

            <p class="post-body">{{ $post->body }}</p>
        </li>
        @endforeach
    </ol>
@endsection