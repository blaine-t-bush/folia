@extends('layouts.app')

@section('title', 'Whitehack Character Generator')

@section('content')

@push('styles')
<link rel="stylesheet" href="{{ asset('css/whitehack_character_generator.css') }}">
@endpush

<h1>Whitehack Character Generator</h1>

<div id="character-generator" class="character">
    <button class="character-generate" v-on:click="generateCharacter"><i class="fas fa-dice" aria-disabled="true"></i> Generate Character</button>

    {{-- <div>
        <button class="character-level-down" v-bind:class="levelDownObject" v-on:click="decreaseLevel">-</button>
        <span>Level</span>
        <button class="character-level-up" v-bind:class="levelUpObject" v-on:click="increaseLevel">+</button>
    </div> --}}

    <h3 class="character-name sheet-handwritten" style="margin-bottom:0; padding-bottom:0.2em;">
        @{{ name }}
    </h3>
    <div style="margin-bottom:0.2rem; width:100%; height:1px; background: linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2)), url(/images/noise.svg);"></div>
    <div class="sheet-typed" style="font-size:0.8rem;">NAME</div>

    <h4 class="character-summary sheet-handwritten" style="margin-top:0.5rem; margin-bottom:0.2em; padding-bottom:0.2em; border-bottom:1px solid black;">
        Level @{{ level }} @{{ characterClass }} @{{ vocation }}
    </h4>
    <div class="sheet-typed" style="font-size:0.8rem;">CLASS & LEVEL</div>

    <table class="vitals" style="margin-top:0.5rem;">
        <tr class="sheet-typed">
            <td>HP</td>
            <td>AV</td>
            <td>ST</td>
            <td>AC</td>
        </tr>
        
        <tr class="sheet-handwritten">
            <td>@{{ hitPoints }}</td>
            <td>@{{ attackValue }}</td>
            <td>@{{ savingThrow }}</td>
            <td>@{{ armorClass }}</td>
        </tr>
    </table>

    <table class="attributes">
        <colgroup>
            <col class="attributes-col-1">
            <col class="attributes-col-2">
            <col>
        </colgroup>
        <tr class="sheet-typed">
            <td>Attribute</td>
            <td>Score</td>
            <td>Groups</td>
        </tr>
        <tr v-for="attribute in attributes">
            <td class="sheet-typed">@{{ attribute.abbreviation }}</td>
            <td class="sheet-handwritten" style="text-align: right;">@{{ attribute.score }}</td>
            <td class="sheet-handwritten">
                <span v-for="(group, key, index) in attribute.groups">@{{ group }}<span v-if="key != Object.keys(attribute.groups).length - 1">, </span></span>
            </td>
        </tr>
    </table>

    <h4 class="sheet-typed">Slots <span class="sheet-handwritten">(@{{ slots.type }})</span></h4>
    <ul class="sheet-handwritten">
        <li v-for="(attunement, key, index) in slots.attunements">@{{ attunement }}<span v-if="key < slots.count">†</span></li>
        <li v-for="ability in slots.abilities">@{{ ability }}</li>
        <li v-for="(miracle, key, index) in slots.miracles">@{{ miracle }}<span v-if="key < slots.count">†</span></li>
    </ul>

    <h4 class="sheet-typed">Equipment</h4>
    <ul class="sheet-handwritten">
        <li v-for="container in inventory">
            @{{ container.name }}
            <ul>
                <li v-for="item in container.items">@{{ item.name }}</li>
            </ul>
        </li>
    </ul>
</div>

<!-- Add button to switch to dyslexic-friendly font. -->

{{--
<p><strong>Inventory Slots.</strong> Characters have a number of inventory slots equal to their strength score or their constitution score, whichever is higher. Items, except containers and very small things such as coins, dice, or chalk, generally take up one slot. The exceptions are two-handed weapons,
which take up two slots, chainmail and splint mail, which take up two slots, and full plate, which takes up three slots. Items that typically come in multiples take up one slot collectively, within reason (e.g. a week of rations, a quiver of 30 arrows, a bundle of 6 torches).
For each slot occupied beyond their maximum, characters have their speed reduced by 5'.</p>

<p><strong>Item Selection.</strong> Armor is selected randomly from the types available to that class. One melee weapon and one ranged weapon are also randomly selected. Each character has food, water, torches, 6d10 coins, and some type of container.
Additional items are selected randomly.</p>
--}}

<a href="/resources">« All Resources</a>
@endsection

@push('scripts_body')
<script type="text/javascript" src="{{ asset('js/whitehack/character_generator.js') }}"></script>
@endpush