@extends('layouts.app')

@section('title', 'New Post')

@push('styles')
<link rel="stylesheet" href="{{ asset('css/posts.css') }}">
@endpush

@section('content')
<h1>Create New Post</h1>
<form class="create-new-post" id="create" method="POST" action="/posts">
    @csrf
    <label for="title">Title</label>
    <input class="input-text" name="title" type="text">
    <label for="title">Summary</label>
    <textarea class="create-post-summary input-text" name="summary" rows="7" form="create"></textarea>
    <label for="title">Post</label>
    <textarea class="create-post-body input-text" name="body" rows="21" form="create"></textarea>
    <input class="submit-post" type="submit" value="Create">
</form>
@endsection