@extends('layouts.app')

@section('title', 'Whitehack Character Generator')

@push('styles')
<link rel="stylesheet" href="{{ asset('css/whitehack-character-generator.css') }}">
@endpush

@section('content')

<h1 class="page-title"><em>Whitehack</em> Character Generator</h1>

<div id="character-generator">
    <button class="character-generate" v-on:click="generateCharacter">
        <i class="fas fa-dice" aria-disabled="true"></i> Roll ‘em again
    </button>

    {{-- <div>
        <button class="character-level-down" v-bind:class="levelDownObject" v-on:click="decreaseLevel">-</button>
        <span>Level</span>
        <button class="character-level-up" v-bind:class="levelUpObject" v-on:click="increaseLevel">+</button>
    </div> --}}

    <div class="character parchment-border">

        <div class="character-name handwritten">
            @{{ name }}
        </div>
        
        <div class="character-name-form typed">
            NAME
        </div>

        <div class="character-summary-container">
            <div class="character-summary-container-sub characterclass">
                <div class="character-summary handwritten">
                    @{{ characterClass }}
                </div>

                <div class="character-summary-form typed">
                    CLASS
                </div>
            </div>

            <div class="character-summary-container-sub characterspecies">
                <div class="character-summary handwritten">
                    <span v-if="groups.species">@{{ groups.species }}</span>
                    <span v-else>Human</span>
                </div>

                <div class="character-summary-form typed">
                    SPECIES
                </div>
            </div>

            <div class="character-summary-container-sub charactervocation">
                <div class="character-summary handwritten">
                    @{{ groups.vocation }}
                </div>

                <div class="character-summary-form typed">
                    VOCATION
                </div>
            </div>

            <div class="character-summary-container-sub characterxp">
                <div class="character-summary handwritten">
                    @{{ xp }}
                </div>

                <div class="character-summary-form typed">
                    XP
                </div>
            </div>

            <div class="character-summary-container-sub characterlevel">
                <div class="character-summary handwritten">
                    @{{ level }}
                </div>

                <div class="character-summary-form typed">
                    LVL
                </div>
            </div>

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
            <div class="character-attributes-value value-1 handwritten">@{{ attributes.strength.score }}</div>
            <div class="character-attributes-groups groups-1 handwritten">
                <span v-for="(group, key, index) in attributes.strength.groups">@{{ group }}<span v-if="key != Object.keys(attributes.strength.groups).length - 1">, </span></span>
            </div>

            <div class="character-attributes-label label-2 typed">DEX</div>
            <div class="character-attributes-value value-2 handwritten">@{{ attributes.dexterity.score }}</div>
            <div class="character-attributes-groups groups-2 handwritten">
                <span v-for="(group, key, index) in attributes.dexterity.groups">@{{ group }}<span v-if="key != Object.keys(attributes.dexterity.groups).length - 1">, </span></span>
            </div>

            <div class="character-attributes-label label-3 typed">CON</div>
            <div class="character-attributes-value value-3 handwritten">@{{ attributes.constitution.score }}</div>
            <div class="character-attributes-groups groups-3 handwritten">
                <span v-for="(group, key, index) in attributes.constitution.groups">@{{ group }}<span v-if="key != Object.keys(attributes.constitution.groups).length - 1">, </span></span>
            </div>

            <div class="character-attributes-label label-4 typed">INT</div>
            <div class="character-attributes-value value-4 handwritten">@{{ attributes.intelligence.score }}</div>
            <div class="character-attributes-groups groups-4 handwritten">
                <span v-for="(group, key, index) in attributes.intelligence.groups">@{{ group }}<span v-if="key != Object.keys(attributes.intelligence.groups).length - 1">, </span></span>
            </div>

            <div class="character-attributes-label label-5 typed">WIS</div>
            <div class="character-attributes-value value-5 handwritten">@{{ attributes.wisdom.score }}</div>
            <div class="character-attributes-groups groups-5 handwritten">
                <span v-for="(group, key, index) in attributes.wisdom.groups">@{{ group }}<span v-if="key != Object.keys(attributes.wisdom.groups).length - 1">, </span></span>
            </div>

            <div class="character-attributes-label label-6 typed">CHA</div>
            <div class="character-attributes-value value-6 handwritten">@{{ attributes.charisma.score }}</div>
            <div class="character-attributes-groups groups-6 handwritten">
                <span v-for="(group, key, index) in attributes.charisma.groups">@{{ group }}<span v-if="key != Object.keys(attributes.charisma.groups).length - 1">, </span></span>
            </div>
        </div>

        <div class="subcontainer">
            <div class="character-slots">
                <div class="character-slots-header" style="display: flex;">
                    <span class="typed" style="">SLOTS</span>
                    <span class="handwritten" style="position: relative; bottom: 0.5rem; left: 0.7rem;">(@{{ characterClass }} @{{ slots.type }})</span>
                </div>
                <ul class="character-slots-list handwritten">
                    <li v-for="(attunement, key, index) in slots.attunements">@{{ attunement }}<sup v-if="key < slots.count">*</sup></li>
                    <li v-for="ability in slots.abilities">@{{ ability }}</li>
                    <li v-for="(miracle, key, index) in slots.miracles">@{{ miracle }}<sup v-if="key < slots.count">*</sup></li>
                </ul>
            </div>

            <div class="character-languages">
                <div class="character-languages-header typed">
                    LANGUAGES
                </div>
                <ul class="character-languages-list handwritten">
                    <li v-for="language in languages">@{{ language }}</li>
                </ul>
            </div>

            <div class="character-quirks">
                <div class="character-quirks-header typed">
                    APPEARANCE, PERSONALITY, & BACKGROUND
                </div>
                <ul class="character-quirks-list handwritten">
                    <li v-for="descriptor in descriptors">@{{ descriptor }}</li>
                </ul>
            </div>

            <div class="character-inventory">
                <div class="character-inventory-header typed">
                    INVENTORY
                </div>
                <ul class="character-inventory-list handwritten">
                    <li>£@{{ currency.large}}, @{{ currency.medium}}s, @{{ currency.small }}d</li>
                    <li v-for="item in inventory">@{{ item }}</li>
                </ul>
            </div>
        </div>
    </div>
</div>

<a href="/resources">« All Resources</a>
@endsection

@push('scripts_body')
<script type="text/javascript" src="{{ asset('js/whitehack-character-generator.js') }}"></script>
@endpush