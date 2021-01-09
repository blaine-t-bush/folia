@extends('folia.layouts.app')

@section('main')
    <form id="logout" method="POST" action="/folia/logout">
        @csrf
        <input type="submit" value="Logout">
    </form>

    <form id="create" method="post" action="/folia">
        @csrf
        <input type="hidden" name="username" id="username" value="{{ session('folia_username') }}">
        <input type="text" name="body" id="body" placeholder="Go ahead, share that important thought!">
        <input type="submit" value="Post">
    </form>
    
    <p>This is the feed</p>

    <ol>
        @foreach($posts as $post)
        <li>
            @if($post->username == session('folia_username'))
            <form method="post" action="/folia/{{ $post->id }}">
                @csrf
                @method('delete')
                <input type="submit" value="Delete">
            </form>
            @endif

            <div>{{ $post->username }}</div>
            <div>{{ $post->body }}</div>
        </li>
        @endforeach
    </ol>
@endsection