@extends('layouts.app')

@section('title', 'Login')

@push('styles')
<link rel="stylesheet" href="{{ asset('css/auth.css') }}">
@endpush

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

@if ($errors->any())
    @foreach ($errors->all() as $error)
        <div style="color:red; padding:0.5em; text-align:center;">{{ $error }}</div>
    @endforeach
@endif

@endsection

@section('footer')
    @parent
@endsection