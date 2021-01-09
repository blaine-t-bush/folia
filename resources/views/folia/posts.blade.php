@extends('folia.layouts.app')

@section('main')
    <form id="logout" method="POST" action="/folia/logout">
        @csrf
        <input type="submit" value="Logout">
    </form>
    
    <p>This is the feed</p>

    <ol>
        @foreach($posts as $post)
        <li>
            <div>{{ $post->username }}</div>
            <div>{{ $post->body }}</div>
        </li>
        @endforeach
    </ol>
@endsection