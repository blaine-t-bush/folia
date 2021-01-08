@extends('layouts.app')

@section('title', 'OSRS Glass Blowing Calculator')

@push('styles')
<style>
    .error {
        background-color: lightcoral;
        border: 1px solid darkred;
        color: darkred;
        display: none;
        position: absolute;
    }

    .error.visible {
        display: block;
    }

    .slide-fade-enter-active {
        transition: all 0.3s ease;
    }

    .slide-fade-leave-active {
        transition: all 1.3s ease-in;
    }

    .slide-fade-enter,
    .slide-fade-leave-to {
        transform: translateX(10px);
        opacity: 0;
    }
</style>
@endpush

@section('content')

<div id="app">
    <transition name="slide-fade" @after-enter="lowerError">
        <div class="error" v-if="error.display" v-bind:class="{ visible: error.display }" v-bind:style="error.style">
            @{{ error.message }}
        </div>
    </transition>
    
    <div class="inputs">
        Current Level: @{{ currentLevel }}
        Target Level: @{{ targetLevel }}
        Current Experience: @{{ currentExperience }}
        Target Experience: @{{ targetExperience }}
        <div class="inputs-levels">
            <input type="number" id="currentLevel" v-bind:value="currentLevel" v-on:input="changeCurrentLevel($event)">
            <input type="number" id="targetLevel" v-bind:value="targetLevel" v-on:input="changeTargetLevel($event)">
        </div>
        
        <div class="inputs-experiences">
            <input type="number" id="currentExperience" v-bind:value="currentExperience" v-on:input="changeCurrentExperience($event)">
            <input type="number" id="targetExperience" v-bind:value="targetExperience" v-on:input="changeTargetExperience($event)">
        </div>
    </div>

    <div class="outputs">
        <span>@{{ experienceRequired }}</span>
    </div>
</div>

@endsection

@push('scripts_body')
<script type="text/javascript" src="{{ asset('js/osrs-molten-glass.js') }}"></script>
@endpush