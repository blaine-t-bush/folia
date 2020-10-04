@extends('layouts.app')

@section('title', 'Login')

@section('content')

<h1>Login</h1>

<form id="login" method="POST" action="/login" class="login">
    @csrf
    <label for="email">Email</label>
    <input type="email" name="email" id="email">
    <label for="password">Password</label>
    <input type="password" name="password" id="password">
    <input class="login-submit" type="submit" value="Submit">
</form>

<!--
TODO pipe in login errors, if any
-->

@endsection

@section('footer')
    @parent
@endsection