@extends('layouts.app')

@push('style')
<style>
    @import url('https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap');
</style>
<link rel="stylesheet" href="{{ asset('css/login.css') }}">
@endpush

@section('main')
    <form class="login" id="login" method="POST" action="/login" enctype="multipart/form-data">
        @csrf

        <label class="login-label-username" for="user_id">Username</label>
        <input
            class="login-input-username @error('user_id') input-error @enderror"
            type="text"
            name="user_id"
            id="user_id"
            placeholder="username"
            value="{{ old('user_id') }}">
        @error('user_id')
        <div class="error">{{ $message }}</div>
        @enderror

        <label class="login-label-password" for="password">Password</label>
        <div class="password-container">
            <input
                class="login-input-password @error('password') input-error @enderror"
                type="password"
                name="password"
                id="password"
                placeholder="password">
            <button class="password-container-button" onclick="togglePasswordVisibility(event, 'password', 'password-visibility-toggle')">
                <i id="password-visibility-toggle" class="fa fa-eye password-container-button-icon" aria-hidden="true"></i>
            </button>
        </div>
        @error('password')
        <div class="error">{{ $message }}</div>
        @enderror

        @error('credentials')
        <div class="error error-credentials">{{ $message }}</div>
        @enderror

        <input class="login-button heavy-button" type="submit" value=">>> Login">

        <div class="register-prompt">
            No account? <a href="{{ route('register') }}">Make one!</a>
        </div>
    </form>

    <div class="sticky-note">
        <img class="sticky-note-image" src="{{ asset('images/sticky_note.png') }}" alt="An yellow sticky note, with 'admin' and 'password123' hand-written on it.">
        <ul class="sticky-note-text">
            <li class="sticky-note-item">admin</li>
            <li class="sticky-note-item">password123</li>
        </ul>
    </div>
@endsection