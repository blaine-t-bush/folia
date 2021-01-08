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
</ul>

<h2 class="page-title">Old School RuneScape</h1>

<p>
    Your first experience with strangers on the internet is still alive and kicking, except now it has an awesome <a href="https://oldschool.runescape.wiki/">wiki</a>.
</p>

<ul class="resources">
    <li><a href="/resources/osrs-slayer-tasks">Slayer Task Assignment Calculator</a></li>
    <li><a href="/resources/osrs-molten-glass">Glass Blowing Calculator</a></li>
</ul>

@endsection

@section('footer')
    @parent
@endsection