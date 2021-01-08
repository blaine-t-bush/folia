@extends('layouts.app')

@section('title', 'About')

@push('styles')
    <link rel="stylesheet" href="{{ asset('css/about.css') }}">
@endpush

@section('content')

<h2 class="page-title">The Author</h2>

<p>
    Hello. My name is Blaine, and Parvifolium is my workbench, sandbox, and notebook.
    I'm a full-stack web developer, data analyst, and roleplaying game enthusiast.
</p>

<ul style="list-style: none; display: flex; flex-direction: row; justify-content: space-evenly; margin: auto; padding: 0; width: 100px;">
    <li><a href="https://www.linkedin.com/in/blainetbush/"><i class="fab fa-linkedin-in"></i></a></li>
    <li><a href="https://github.com/blaine-t-bush"><i class="fab fa-github"></i></a></li>
    <li><a href="mailto:blaine.bush@gmail.com"><i class="far fa-envelope"></i></a></li>
</ul>

<h2 class="page-title">The Name</h2>

<p>
    Parvifolium is the name of a number of plant species, including the
    <a href="https://en.wikipedia.org/wiki/Vaccinium_parvifolium">red huckleberry</a> (<em>Vaccinium parvifolium</em>)
    which is common in the Pacific Northwest.
    The name is derived from Latin <em>parvus</em>, meaning small, and <em>folium</em>, meaning leaf.
</p>

<img class="inline-image" src="{{ asset('images/huckleberry_BW_1.png') }}" alt="">

<p>
    <em>Folium</em> can also refer to the leaf of a book.
    In that sense, a small leaf is a bite-sized amount of reading.
    That will have to do, as to my knowledge there is no Latin word for blog.
</p>

<h2 class="page-title">The Code</h2>

<p>
    This site is built with Laravel.
    Some components, like the <a href="/resources/whitehack-character-generator">Whitehack character generator</a>, use Vue.js.
    Rollable tables, like you see in my <a href="/posts/overland-encounters-in-barrowmaze">overland Barrowmaze encounters</a> post, use a little bit of vanilla JavaScript.
</p>

<p>
    The Fell Types are digitally reproduced by <a href="https://iginomarini.com/">Igino Marini</a>.
</p>

@endsection