@extends('folia.layouts.app')

@push('style')
<style>
    @import url('https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap');

    .login {
        display: flex;
        flex-direction: column;
        margin: auto;
        max-width: 300px;
        width: 100%;
    }

    .login-label-password {
        margin-top: 1em;
    }

    .login-input-username, .login-input-password {
        height: 1.5em;
        line-height: 1.5em;
        margin-top: 0.5em;
    }

    .login-button {
        margin-top: 1em;
    }

    .error {
        color: red;
        margin: 0.2em;
        text-align: center;
    }

    .register-prompt {
        text-align: center;
        margin-top: 1em;
    }

    .sticky-note {
        color: rgba(0, 0, 0, 0.7);
        font-family: 'Gloria Hallelujah', cursive;
        font-size: 2rem;
        height: 300px;
        width: 300px;
        position: relative;
        transform: rotate(7deg);
        margin: auto;
    }

    .sticky-note-text {
        position: absolute;
        left: 0;
        top: 0;
        width: 260px;
        display: grid;

        margin: 0;
        padding: 50px 20px 20px 20px;
        list-style: none;
    }

    .sticky-note-item {
        align-self: center;
        justify-content: center;
        text-align: center;
    }
</style>
@endpush('style')

@section('main')
    <form class="login" id="login" method="POST" action="/folia/login" enctype="multipart/form-data">
        @csrf

        <label class="login-label-username" for="id">Username</label>
        <input
            class="login-input-username"
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
            class="login-input-password"
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