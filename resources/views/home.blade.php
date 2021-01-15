@extends('layouts.app')

@section('main')
    <div id="home"></div>
@endsection

@push('script_body')
<script src="{{ mix('/js/home.js') }}"></script>
@endpush