@extends('folia.layouts.app')

@push('style')
<style>
    @import url('https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap');
</style>
<link rel="stylesheet" href="{{ asset('css/folia/login.css') }}">
@endpush('style')

{{-- TODO fix login so it returns error on failure --}}

@section('main')
    <form class="login" id="login" method="POST" action="/folia/login" enctype="multipart/form-data">
        @csrf

        <label class="login-label-username" for="id">Username</label>
        <input
            class="login-input-username @error('id') input-error @enderror"
            type="text"
            name="id"
            id="id"
            placeholder="username"
            value="{{ old('id') }}">
        @error('id')
        <div class="error">{{ $message }}</div>
        @enderror

        <label class="login-label-password" for="password">Password</label>
        <input
            class="login-input-password @error('password') input-error @enderror"
            type="text"
            name="password"
            id="password"
            placeholder="password">
        @error('password')
        <div class="error">{{ $message }}</div>
        @enderror

        <input class="login-button heavy-button" type="submit" value=">>> Login">

        <div class="register-prompt">
            No account? <a href="{{ route('folia.register') }}">Make one!</a>
        </div>
    </form>

    <div class="sticky-note">
        <img class="sticky-note-image" src="{{ asset('images/folia/sticky_note.png') }}" alt="An yellow sticky note, with 'admin' and 'password123' hand-written on it.">
        <ul class="sticky-note-text">
            <li class="sticky-note-item">admin</li>
            <li class="sticky-note-item">password123</li>
        </ul>
    </div>
@endsection