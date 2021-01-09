@extends('folia.layouts.app')

@push('style')
<style>
    .profile {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
    }

    .profile-value {
        color: lightgreen;
        font-weight: bold;
    }
</style>
@endpush('style')

@section('main')
    <div class="profile">
        <div class="profile-key">
            Display Name
        </div>

        <div class="profile-value">
            {{ $user->display_name }}
        </div>
        
        <div class="profile-key">
            Username
        </div>

        <div class="profile-value">
            {{ $user->id }}
        </div>
    </div>
@endsection