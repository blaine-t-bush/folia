@extends('layouts.app')

@section('title', 'Resources')

@push('styles')
    <link rel="stylesheet" href="{{ asset('css/resources.css') }}">
@endpush

@section('content')

<h2 class="page-title">Whitehack</h1>

<p>
    <a href="https://whitehackrpg.wordpress.com/">Whitehack</a> is an excellent game in the OSR style by Christian Mehrstam.
    The game is structured in a way that encourages collaboration between everyone at the table,
    both in world-building and in game mechanics.
</p>

<ul class="resources">
    <li><a href="/resources/whitehack-character-generator">Character Generator</a></li>
    <li><a href="/resources/whitehack-hireling-generator">Hireling Generator</a></li>
    <li><a href="/resources/whitehack-houserules">Houserules</a></li>
</ul>

<h2 class="page-title">Encounters</h2>

@endsection

@section('footer')
    @parent
@endsection