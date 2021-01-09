@extends('folia.layouts.app')

@section('main')
    <p>This is the login page</p>

    <form id="login" method="POST" action="/folia/login" enctype="multipart/form-data">
        @csrf

        <div>
            <label for="username">Username</label>
            <input
                type="text"
                name="username"
                id="username"
                value="{{ old('username') }}">
        </div>
        @error('username')
        <div>{{ $message }}</div>
        @enderror

        <div>
            <label for="password">Password</label>
            <input
                type="text"
                name="password"
                id="password">
        </div>
        @error('username')
        <div>{{ $message }}</div>
        @enderror
    </form>

    <div></div>

    <input type="submit" value="Login" form="login">

    <div>
        Don't have an account? <a href="{{ route('folia.register') }}">Register now!</a>
    </div>
@endsection