@extends('layouts.app')

@section('main')
    <div id="app"></div>
@endsection

@push('script_body')
<script src="{{ asset('js/posts.js') }}"></script>
@endpush