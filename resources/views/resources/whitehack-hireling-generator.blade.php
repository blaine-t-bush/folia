@extends('layouts.app')

@section('title', 'Whitehack Hireling Generator')

@section('content')

<h1 class="page-title">Whitehack Hireling Generator</h1>

<div id="hireling-generator" class="character">
    <button class="character-generate" v-on:click="generateHireling"><i class="fas fa-dice" aria-disabled="true"></i> Generate Hireling</button>

    <div class="character-name handwritten">
        @{{ name }}
    </div>
    
    <div class="character-name-form typed">
        NAME
    </div>

    <div class="character-summary handwritten">
        @{{ type }} (@{{ subtype}})
    </div>

    <div class="character-summary-form typed">
        TYPE / SUBTYPE
    </div>

    <div class="character-vitals">
        <div class="character-vitals-label label-1 typed">HP</div>
        <div class="character-vitals-label label-2 typed">AV</div>
        <div class="character-vitals-label label-3 typed">ST</div>
        <div class="character-vitals-label label-4 typed">AC</div>
        <div class="character-vitals-label label-5 typed">MV</div>
        <div class="character-vitals-value value-1 handwritten">@{{ hitPoints }}</div>
        <div class="character-vitals-value value-2 handwritten">@{{ attackValue }}</div>
        <div class="character-vitals-value value-3 handwritten">@{{ savingThrow }}</div>
        <div class="character-vitals-value value-4 handwritten">@{{ armorClass }}</div>
        <div class="character-vitals-value value-5 handwritten">30</div>
    </div>

    <div class="character-inventory">
        <div class="character-inventory-header typed">
            INVENTORY
        </div>
        <ul class="character-inventory-list handwritten">
            <li v-for="container in inventory">
                @{{ container.name }}
                <ul>
                    <li v-for="item in container.items">@{{ item.name }}</li>
                </ul>
            </li>
        </ul>
    </div>

    <div class="character-quirks">
        <div class="character-quirks-header typed">
            QUIRKS
        </div>
        <ul class="character-quirks-list handwritten">
            <li v-for="quirk in quirks">
                @{{ quirk }}
            </li>
        </ul>
    </div>
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
<script type="text/javascript" src="{{ asset('js/whitehack/hireling_generator.js') }}"></script>
@endpush