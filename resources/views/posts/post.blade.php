@extends('layouts.app')

@section('title', $post->title)

@section('content')
<h1>{{ $post->title }}</h1>

<p>by {{ $post->author }}</p>

{!! parsedown($post->body) !!}
@endsection