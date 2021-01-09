@extends('folia.layouts.app')

@push('style')
<style>
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
    }

    .register-prompt {
        text-align: center;
        margin-top: 1em;
    }
</style>
@endpush('style')

@section('main')
    <form class="login" id="login" method="POST" action="/folia/login" enctype="multipart/form-data">
        @csrf

        <label class="login-label-username" for="user_id">Username</label>
        <input
            class="login-input-username"
            type="text"
            name="user_id"
            id="user_id"
            placeholder="username"
            value="{{ old('user_id') }}">
        @error('user_id')
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
@endsection