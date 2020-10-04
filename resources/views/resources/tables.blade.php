@extends('layouts.app')

@section('title', 'Random Tables')

@section('content')
<link rel="stylesheet" href="{{ asset('css/whitehack_character_generator.css') }}">

<h1>Random Tables</h1>

<h2>Encounters</h2>

<h3>Lizardmen</h3>
<div id="d6-table-encounters-lizardmen">
    <d-table :rows="rows"></d-table>
</div>

<h3>Froglings</h3>
<div id="d6-table-encounters-froglings">
    <d-table :rows="rows"></d-table>
</div>

@endsection

@section('footer')
    @parent
    <script type="text/javascript" src="{{ asset('js/whitehack/app.js') }}"></script>
@endsection