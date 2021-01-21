@extends('layouts.app')

@push('style')
<link rel="stylesheet" href="{{ asset('css/register.css') }}">
@endpush

@section('main')
    <form class="register" id="register" method="POST" action="/register" enctype="multipart/form-data">
        @csrf

        <label class="register-label-username" for="user_id">Username</label>
        <input
            class="register-input-username @error('user_id') input-error @enderror"
            type="text"
            name="user_id"
            id="user_id"
            placeholder="username"
            value="{{ old('user_id') }}"
            tabindex="1">
        @error('user_id')
        <div class="error">{{ $message }}</div>
        @enderror

        <label class="register-label-displayname" for="display_name">Display Name</label>
        <input
            class="register-input-displayname @error('display_name') input-error @enderror"
            type="text"
            name="display_name"
            id="display_name"
            placeholder="display name"
            value="{{ old('display_name') }}"
            tabindex="2">
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
                placeholder="password"
                tabindex="3">
            <button class="password-container-button" onclick="togglePasswordVisibility(event, 'password', 'password-visibility-toggle')" tabindex="4">
                <i id="password-visibility-toggle" class="fa fa-eye password-container-button-icon" aria-hidden="true"></i>
            </button>
        </div>
        @error('password')
        <div class="error">{{ $message }}</div>
        @enderror

        <label class="checkbox-container register-label-robot" for="robot" tabindex="5">
            <div>Are you a <del>robot</del> human?</div>

            <input type="checkbox" name="robot" id="robot">
            <span class="checkbox"></span>
        </label>

        <input class="register-button heavy-button" type="submit" value=">>> Register" tabindex="6">

        <div class="login-prompt">
            Already registered? <a href="{{ route('login') }}">Log in!</a>
        </div>
    </form>

@endsection

@push('script_body')
<script>
// Submit form when enter key is pressed.
document.getElementById('user_id').onkeydown = event => {
    if (event.keyCode == 13) { // 13 = enter button
        event.preventDefault();
        document.getElementById('register').submit();
    }
};

document.getElementById('password').onkeydown = event => {
    if (event.keyCode == 13) { // 13 = enter button
        event.preventDefault();
        document.getElementById('register').submit();
    }
};
</script>
@endpush