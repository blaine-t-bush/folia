@extends('folia.layouts.app')

@push('style')
<link rel="stylesheet" href="{{ asset('css/folia/register.css') }}">
@endpush('style')

@section('main')
    <form class="register" id="register" method="POST" action="/folia/register" enctype="multipart/form-data">
        @csrf

        <label class="register-label-username" for="id">Username</label>
        <input
            class="register-input-username @error('id') input-error @enderror"
            type="text"
            name="id"
            id="id"
            placeholder="username"
            value="{{ old('id') }}">
        @error('id')
        <div class="error">{{ $message }}</div>
        @enderror

        <label class="register-label-displayname" for="display_name">Display Name</label>
        <input
            class="register-input-displayname @error('display_name') input-error @enderror"
            type="text"
            name="display_name"
            id="display_name"
            placeholder="display name"
            value="{{ old('display_name') }}">
        @error('display_name')
        <div class="error">{{ $message }}</div>
        @enderror

        <label class="register-label-password" for="password">Password</label>
        <div class="password-container">
            <input
                class="register-input-password @error('password') input-error @enderror"
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

        <label class="register-label-robot" for="robot">
            <div>Are you a <del>robot</del> human?</div>
            
            <input type="checkbox" name="robot" id="robot">
        </label>

        <input class="register-button heavy-button" type="submit" value=">>> Register">

        <div class="login-prompt">
            Already registered? <a href="{{ route('folia.login') }}">Log in!</a>
        </div>
    </form>

@endsection