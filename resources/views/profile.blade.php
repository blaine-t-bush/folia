@extends('layouts.app')

@push('style')
<link rel="stylesheet" href="{{ asset('css/profile.css') }}">
@endpush

@section('main')
    <div class="profile">
        <h1 class="profile-name">
            {{ $user->display_name }} <span class="profile-name-id">{{ $user->id }}</span>
        </h1>
    </div>

    <div id="profile"></div>
@endsection

@push('script_body')
<script src="{{ mix('/js/profile.js') }}"></script>
@endpush