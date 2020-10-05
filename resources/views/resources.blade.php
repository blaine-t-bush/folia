@extends('layouts.app')

@section('title', 'Resources')

@section('content')
<link rel="stylesheet" href="{{ asset('css/whitehack_character_generator.css') }}">

<h1>Resources</h1>

<ul>
    <li><a href="/resources/whitehack-character-generator">Whitehack Character Generator</a></li>
    <li><a href="/resources/tables">Random Tables</a></li>
</ul>

@endsection

@section('footer')
    @parent
@endsection