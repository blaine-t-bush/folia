@extends('layouts.app')

@section('title', 'Register')

@push('styles')
<link rel="stylesheet" href="{{ asset('css/auth.css') }}">
@endpush

@section('content')

<h1>Register</h1>

<form id="register" method="POST" action="/register" class="register">
    @csrf
    <label for="name">Name</label>
    <input type="name" name="name" id="name">
    <label for="email">Email</label>
    <input type="email" name="email" id="email">
    <label for="password">Password</label>
    <input type="password" name="password" id="password">
    <label for="password_confirmation">Confirm Password</label>
    <input type="password" name="password_confirmation" id="password_confirmation">
    <input class="register-submit" type="submit" value="Submit">
</form>

<!--
TODO pipe in registration errors, if any
-->

@endsection

@section('footer')
    @parent
@endsection