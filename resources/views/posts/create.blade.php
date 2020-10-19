@extends('layouts.app')

@section('title', 'New Post')

@push('styles')
<link rel="stylesheet" href="{{ asset('css/posts.css') }}">
@endpush

@push('scripts_head')
<style>
    .error-message {
        color: red;
        padding-left: 0.5em;
        padding-top: 0.5em;
    }
</style>

<script>
function loadFile(event) {
    let image = document.getElementById('image-preview');
    image.src = URL.createObjectURL(event.target.files[0]);
    image.style.visibility = "visible";
}
</script>
@endpush

@section('content')
<h1 class="page-title">Create New Post</h1>
<form class="create-new-post" id="create" method="POST" action="/posts" enctype="multipart/form-data">
    @csrf

    <div style="display:flex;">
        <label for="title">Title</label>
        @error('title')
            <span class="error-message">{{ $message }}</span>
        @enderror
    </div>
    <input class="input-text @error('title') input-error @enderror" name="title" type="text" value="{{ old('title') }}">
    
    <div style="display:flex; justify-content:space-between;">
        <div style="display:flex; flex-direction:column;">
            <label for="image">Image</label>
            <input type="file" name="image" id="image" onchange="loadFile(event)" style="margin-top:0.5em;">
            @error('image')
                <span class="error-message" style="padding-left:0;">{{ $message }}</span>
            @enderror
        </div>
        <img id="image-preview" height="128" style="border:2px solid darkred; visibility:hidden; margin-top:0.5em; min-width:128px;">
    </div>

    <div style="display:flex;">
        <label for="resource_url">Resource URL</label>
        @error('resource_url')
            <span class="error-message">{{ $message }}</span>
        @enderror
    </div>
    <input class="input-text @error('resource_url') input-error @enderror" name="resource_url" type="text" value="{{ old('resource_url') }}">

    <div style="display:flex;">
        <label for="summary">Summary</label>
        @error('summary')
            <span class="error-message">{{ $message }}</span>
        @enderror
    </div>
    <textarea class="create-post-summary input-text @error('summary') input-error @enderror" name="summary" rows="7" form="create">{{ old('summary') }}</textarea>

    <div style="display:flex;">
        <label for="body">Post</label>
        @error('body')
            <span class="error-message">{{ $message }}</span>
        @enderror
    </div>
    <textarea class="create-post-body input-text @error('body') input-error @enderror" name="body" rows="21" form="create">{{ old('body') }}</textarea>

    <input class="submit-post" type="submit" value="Create">
</form>
@endsection