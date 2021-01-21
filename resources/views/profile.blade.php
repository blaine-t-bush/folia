@extends('layouts.app')

@section('main')
    <div id="profile"></div>
@endsection

@push('script_body')
<script src="{{ mix('/js/profile.js') }}"></script>
@endpush