@extends('layouts.app')

@section('title', 'New Post')

@push('styles')
<link rel="stylesheet" href="{{ asset('css/posts.css') }}">
@endpush

@section('content')
<h1>Edit Post</h1>
<form class="create-new-post" id="edit" method="POST" action="/posts/{{ $post->id }}">
    @csrf
    @method('PUT')
    <input type="hidden" id="id" value="{{ $post->id }}">
    <label for="title">Title</label>
    <input class="input-text" name="title" type="text" value="{{ $post->title }}">
    <label for="title">Summary</label>
    <textarea class="create-post-summary input-text" name="summary" rows="7" form="edit">{{ $post->summary }}</textarea>
    <label for="title">Post</label>
    <textarea class="create-post-body input-text" name="body" rows="21" form="edit">{{ $post->body }}</textarea>
    <input class="submit-post" type="submit" value="Update">
</form>
@endsection