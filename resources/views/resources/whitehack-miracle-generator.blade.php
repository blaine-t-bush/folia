@extends('layouts.app')

@section('title', 'Whitehack Character Generator')

@section('content')

@push('scripts_head')
<link rel="stylesheet" href="{{ asset('css/whitehack_character_generator.css') }}">
@endpush

<h1>Whitehack Miracle Generator</h1>

<div id="miracle-generator" class="character">
    <button class="miracle-generate" v-on:click="generateMiracle"><i class="fas fa-dice"></i> Generate Miracles</button>
    <ul>
        <li v-for="miracle in miracles">@{{ miracle }}</li>
    </ul>
</div>
@endsection


@push('scripts_body')
<script type="text/javascript" src="{{ asset('js/whitehack/miracle_generator.js') }}"></script>
@endpush