@extends('folia.layouts.app')

@push('style')
<style>
    .register {
        display: flex;
        flex-direction: column;
        margin: auto;
        max-width: 300px;
        width: 100%;
    }

    .register-label-displayname, .register-label-password, .register-label-robot {
        margin-top: 1em;
    }

    .register-label-robot {
        align-items: center;
        display: flex;
        justify-content: space-between;
    }

    .register-input-username, .register-input-displayname, .register-input-password {
        height: 1.5em;
        line-height: 1.5em;
        margin-top: 0.5em;
    }

    .register-button {
        margin-top: 1em;
    }

    .error {
        color: red;
        margin: 0.2em;
    }

    .login-prompt {
        text-align: center;
        margin-top: 1em;
    }
</style>
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
        <div>{{ $message }}</div>
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
        <div>{{ $message }}</div>
        @enderror

        <label class="register-label-password" for="password">Password</label>
        <input
            class="register-input-password @error('password') input-error @enderror"
            type="text"
            name="password"
            id="password"
            placeholder="password">
        @error('password')
        <div>{{ $message }}</div>
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