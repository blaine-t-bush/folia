@extends('layouts.app')

@section('title', 'Random Tables')

@section('content')

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

<a href="/resources">« All Resources</a>
@endsection

@push('scripts_body')
<script type="text/javascript" src="{{ asset('js/tables/tables.js') }}"></script>
@endpush