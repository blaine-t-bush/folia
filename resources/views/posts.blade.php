@extends('layouts.app')

@section('main')
    <div id="app"></div>
@endsection

@push('script_body')
<script src="{{ mix('/js/posts.js') }}"></script>
@endpush