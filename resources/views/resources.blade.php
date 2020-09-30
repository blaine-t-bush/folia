@extends('layouts.app')

@section('title', 'Resources')

@section('content')
<h1>Resources</h1>

<h2>Whitehack Character Generator</h2>

<div id="app">
    <button v-on:click="generateCharacter">Generate Character</button>

    <br>
    @{{ characterName }}, level 1 @{{ characterClass }} @{{ characterVocation }}

    <br>
    <strong>HP</strong> @{{ hitPoints }}

    <ul>
        <li v-for="stat in characterStats">
            <strong>@{{ stat.name }}</strong> <span>@{{ stat.value }}</span>
        </li>
    </ul>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script type="text/javascript" src="{{ asset('js/whitehack_character_generator.js') }}"></script>
@endsection