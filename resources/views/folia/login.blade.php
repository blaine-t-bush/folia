@extends('folia.layouts.app')

@push('style')
<style>
    .login {
        column-gap: 10px;
        row-gap: 5px;
        display: grid;
        grid-template-columns: max-content auto;
        grid-template-rows: 1fr 1fr;
    }

    @media (max-width: 540px) {
        .login {
            grid-template-columns: 1fr;
        }
    }
    .login-button {
        margin-top: 2rem;
        position: relative;
        left: 50%;
        transform: translate(-50%);
    }
</style>
@endpush('style')

@section('main')
    @error('username')
    <div>{{ $message }}</div>
    @enderror

    @error('username')
    <div>{{ $message }}</div>
    @enderror

    <form class="login" id="login" method="POST" action="/folia/login" enctype="multipart/form-data">
        @csrf

        <label for="username">Username</label>
        <input
            type="text"
            name="username"
            id="username"
            placeholder="username"
            value="{{ old('username') }}">

        <label for="password">Password</label>
        <input
            type="text"
            name="password"
            id="password"
            placeholder="password">
    </form>

    <input class="login-button heavy-button" type="submit" value=">>> Login" form="login">

    <div>
        Don't have an account? <a href="{{ route('folia.register') }}">Register now!</a>
    </div>
@endsection