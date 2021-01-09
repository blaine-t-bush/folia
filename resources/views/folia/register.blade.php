@extends('folia.layouts.app')

@section('main')
    <p>This is the register page</p>

    <form id="register" method="POST" action="/folia/register" enctype="multipart/form-data">
        @csrf

        <div>
            <label for="username">Username</label>
            <input
                class="@error('username') input-error @enderror"
                type="text"
                name="username"
                id="username"
                value="{{ old('username') }}">
            @error('username')
            <div>{{ $message }}</div>
            @enderror
        </div>

        <div>
            <label for="display_name">Display Name</label>
            <input
                class="@error('display_name') input-error @enderror"
                type="text"
                name="display_name"
                value="{{ old('display_name') }}">
            @error('display_name')
            <div>{{ $message }}</div>
            @enderror
        </div>

        <div>
            <label for="password">Password</label>
            <input
                class="@error('password') input-error @enderror"
                type="text"
                name="password"
                id="password">
            @error('password')
            <div>{{ $message }}</div>
            @enderror
        </div>
    </form>

    <input type="submit" value="Register" form="register">
@endsection