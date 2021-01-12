@extends('layouts.app')

@push('style')
<link rel="stylesheet" href="{{ asset('css/profile.css') }}">
@endpush

@section('main')
    <div class="profile">
        <div class="profile-key">
            Display Name
        </div>

        <div class="profile-value">
            {{ $user->display_name }}
        </div>
        
        <div class="profile-key">
            Username
        </div>

        <div class="profile-value">
            {{ $user->id }}
        </div>
    </div>
@endsection