@extends('layouts.app')

@section('title', 'Resources')

@push('styles')
    <link rel="stylesheet" href="{{ asset('css/resources.css') }}">
@endpush

@section('content')

<h2>Whitehack</h2>
<p><em>Whitehack</em> is a fantasy roleplaying game in the OSR style by Christian Mehrstam.</p>
<ul class="resources">
    <li><a href="/resources/whitehack-character-generator">Character Generator</a></li>
    <li><a href="/resources/whitehack-miracle-generator">Miracle Generator</a></li>
</ul>

<h2>Other</h2>
<ul class="resources">
    <li><a href="/resources/tables">Random Tables</a></li>
</ul>

@endsection

@section('footer')
    @parent
@endsection