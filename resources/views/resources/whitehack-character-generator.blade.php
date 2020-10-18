@extends('layouts.app')

@section('title', 'Whitehack Character Generator')

@section('content')

<h1 class="page-title">Whitehack Character Generator</h1>

<div id="character-generator" class="character">
    <button class="character-generate" v-on:click="generateCharacter"><i class="fas fa-dice" aria-disabled="true"></i> Generate Character</button>

    {{-- <div>
        <button class="character-level-down" v-bind:class="levelDownObject" v-on:click="decreaseLevel">-</button>
        <span>Level</span>
        <button class="character-level-up" v-bind:class="levelUpObject" v-on:click="increaseLevel">+</button>
    </div> --}}

    <div class="character-name handwritten">
        @{{ name }}
    </div>
    
    <div class="character-name-form typed">
        NAME
    </div>

    <div class="character-summary handwritten">
        Level @{{ level }} @{{ characterClass }} @{{ vocation }}
    </div>

    <div class="character-summary-form typed">
        LEVEL / CLASS / VOCATION
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

    <div class="character-attributes">
        <div class="character-attributes-label label-1 typed">STR</div>
        <div class="character-attributes-label label-2 typed">DEX</div>
        <div class="character-attributes-label label-3 typed">CON</div>
        <div class="character-attributes-label label-4 typed">INT</div>
        <div class="character-attributes-label label-5 typed">WIS</div>
        <div class="character-attributes-label label-6 typed">CHA</div>
        <div class="character-attributes-value value-1 handwritten">@{{ attributes.strength.score }}</div>
        <div class="character-attributes-value value-2 handwritten">@{{ attributes.dexterity.score }}</div>
        <div class="character-attributes-value value-3 handwritten">@{{ attributes.constitution.score }}</div>
        <div class="character-attributes-value value-4 handwritten">@{{ attributes.intelligence.score }}</div>
        <div class="character-attributes-value value-5 handwritten">@{{ attributes.wisdom.score }}</div>
        <div class="character-attributes-value value-6 handwritten">@{{ attributes.charisma.score }}</div>
        <div class="character-attributes-groups groups-1 handwritten"><span v-for="(group, key, index) in attributes.strength.groups">@{{ group }}<span v-if="key != Object.keys(attributes.strength.groups).length - 1">, </span></span></div>
        <div class="character-attributes-groups groups-2 handwritten"><span v-for="(group, key, index) in attributes.dexterity.groups">@{{ group }}<span v-if="key != Object.keys(attributes.dexterity.groups).length - 1">, </span></span></div>
        <div class="character-attributes-groups groups-3 handwritten"><span v-for="(group, key, index) in attributes.constitution.groups">@{{ group }}<span v-if="key != Object.keys(attributes.constitution.groups).length - 1">, </span></span></div>
        <div class="character-attributes-groups groups-4 handwritten"><span v-for="(group, key, index) in attributes.intelligence.groups">@{{ group }}<span v-if="key != Object.keys(attributes.intelligence.groups).length - 1">, </span></span></div>
        <div class="character-attributes-groups groups-5 handwritten"><span v-for="(group, key, index) in attributes.wisdom.groups">@{{ group }}<span v-if="key != Object.keys(attributes.wisdom.groups).length - 1">, </span></span></div>
        <div class="character-attributes-groups groups-6 handwritten"><span v-for="(group, key, index) in attributes.charisma.groups">@{{ group }}<span v-if="key != Object.keys(attributes.charisma.groups).length - 1">, </span></span></div>
    </div>

    <div class="character-slots">
        <div class="character-slots-header typed">
            SLOTS <span class="handwritten">- @{{ slots.type }}</span>
        </div>
        <ul class="character-slots-list handwritten">
            <li v-for="(attunement, key, index) in slots.attunements">@{{ attunement }}<sup v-if="key < slots.count">*</sup></li>
            <li v-for="ability in slots.abilities">@{{ ability }}</li>
            <li v-for="(miracle, key, index) in slots.miracles">@{{ miracle }}<sup v-if="key < slots.count">*</sup></li>
        </ul>
    </div>

    <div class="character-inventory">
        <div class="character-inventory-header typed">
            APPEARANCE / PERSONALITY / BACKGROUND
        </div>
        <ul class="character-inventory-list handwritten">
            <li v-for="quirk in quirks">
                @{{ quirk }}
            </li>
        </ul>
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
</div>

<!-- TODO Add button to switch to dyslexic-friendly font. -->

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