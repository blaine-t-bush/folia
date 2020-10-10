@extends('layouts.app')

@section('title', 'Test')

@push('styles')
    <link rel="stylesheet" href="{{ asset('css/test.css') }}">
@endpush

@section('content')

<h1 class="page-title">Test Page</h1>

<p>
    If you've managed to find this page, congratulations! This is where I do a bit of live testing of views and CSS.
</p>

<p>
    I want to test stat block styling. This should look like the Whitehack character generator, where the labels are in a
    nice typewriter-style font and the values are in cursive.
</p>

<div class="monster">
    <div class="monster-name">
        <div class="monster-name-value handwritten">Lizardman Warrior</div>
        <div class="monster-name-label typed">NAME</div>
    </div>

    <div class="monster-statblock">
        <div class="monster-statblock-label label-1 typed">HD</div>
        <div class="monster-statblock-label label-2 typed">AV</div>
        <div class="monster-statblock-label label-3 typed">ST</div>
        <div class="monster-statblock-label label-4 typed">AC</div>
        <div class="monster-statblock-label label-5 typed">MV</div>
        <div class="monster-statblock-value value-1 handwritten">2</div>
        <div class="monster-statblock-value value-2 handwritten">12</div>
        <div class="monster-statblock-value value-3 handwritten">7</div>
        <div class="monster-statblock-value value-4 handwritten">2</div>
        <div class="monster-statblock-value value-5 handwritten">30</div>
    </div>

    <div class="monster-special">
        <div class="monster-special-label typed">SPECIAL(S)</div>
        <div class="monster-special-value handwritten">
            <ul>
                <li>Ability 1</li>
                <li>Ability 2</li>
            </ul>
        </div>
    </div>

    <div class="monster-special">
        <div class="monster-special-label typed">EQUIPMENT</div>
        <div class="monster-special-value handwritten">
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
            </ul>
        </div>
    </div>
</div>

<p>
    And here's another paragraph, demonstrating that I can display a monster statblock in the middle of a post.
</p>

@endsection

@section('footer')
    @parent
@endsection