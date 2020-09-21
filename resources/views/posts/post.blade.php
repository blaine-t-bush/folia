@extends('layouts.app')

@section('title', $post->title)

@section('content')
<h1>{{ $post->title }}</h1>

<time datetime="">{{ date_format($post->created_at, 'F j, Y') }}</time>

{!! parsedown($post->body) !!}
@endsection