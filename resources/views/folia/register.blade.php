@extends('folia.layouts.app')

@push('style')
<style>
    .register {
        column-gap: 10px;
        row-gap: 5px;
        display: grid;
        grid-template-columns: max-content auto;
        grid-template-rows: 1fr 1fr 1fr;
    }

    @media (max-width: 540px) {
        .register {
            grid-template-columns: 1fr;
        }
    }

    .register-button {
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

    @error('display_name')
    <div>{{ $message }}</div>
    @enderror

    @error('password')
    <div>{{ $message }}</div>
    @enderror

    <form class="register" id="register" method="POST" action="/folia/register" enctype="multipart/form-data">
        @csrf

        <label for="username">Username</label>
        <input
            class="@error('username') input-error @enderror"
            type="text"
            name="username"
            id="username"
            placeholder="username"
            value="{{ old('username') }}">

        <label for="display_name">Display Name</label>
        <input
            class="@error('display_name') input-error @enderror"
            type="text"
            name="display_name"
            id="display_name"
            placeholder="display name"
            value="{{ old('display_name') }}">

        <label for="password">Password</label>
        <input
            class="@error('password') input-error @enderror"
            type="text"
            name="password"
            id="password"
            placeholder="password">
    </form>

    <input class="register-button heavy-button" type="submit" value=">>> Register" form="register">
@endsection