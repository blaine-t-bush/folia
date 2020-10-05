@extends('layouts.app')

@section('title', 'Resources')

@section('content')
<link rel="stylesheet" href="{{ asset('css/whitehack_character_generator.css') }}">

<h2>Whitehack</h2>
<p><em>Whitehack</em> is a fantasy roleplaying game in the OSR style by Christian Mehrstam.</p>
<ul>
    <li><a href="/resources/whitehack-character-generator">Character Generator</a></li>
    <li><a href="/resources/whitehack-miracle-generator">Miracle Generator</a></li>
</ul>

<h2>Other</h2>
<ul>
    <li><a href="/resources/tables">Random Tables</a></li>
</ul>

@endsection

@section('footer')
    @parent
@endsection