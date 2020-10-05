@extends('layouts.app')

@section('title', 'Whitehack Character Generator')

@section('content')

@push('scripts_head')
<link rel="stylesheet" href="{{ asset('css/whitehack_character_generator.css') }}">
@endpush

<h1>Whitehack Character Generator</h1>

<div id="character-generator" class="character">
    <div>
        <button class="character-generate" v-on:click="generateCharacter"><i class="fas fa-dice"></i> Generate Character</button>

        {{-- <div>
            <button class="character-level-down" v-bind:class="levelDownObject" v-on:click="decreaseLevel">-</button>
            <span>Level</span>
            <button class="character-level-up" v-bind:class="levelUpObject" v-on:click="increaseLevel">+</button>
        </div> --}}
    </div>

    <h3 class="character-name">
        @{{ name }}
    </h3>

    <h4 class="character-summary">
        Level @{{ level }} @{{ characterClass }} @{{ vocation }}
    </h4>

    <table class="vitals">
        <tr>
            <td>Hit Points</td>
            <td>Attack Value</td>
            <td>Saving Throw</td>
            <td>Armor Class</td>
        </tr>
        
        <tr>
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
        <tr v-for="attribute in attributes">
            <td>@{{ attribute.name }}</td>
            <td style="text-align: right;">@{{ attribute.score }}</td>
            <td>
                <span v-for="(group, key, index) in attribute.groups"><span v-if="key == 0">(</span>@{{ group }}<span v-if="key != Object.keys(attribute.groups).length - 1">, </span><span v-else>)</span></span>
            </td>
        </tr>
    </table>

    <h4>@{{ slots.type }}</h4>
    <ul>
        <li v-for="(attunement, key, index) in slots.attunements">@{{ attunement }}<span v-if="key < slots.count">†</span></li>
        <li v-for="ability in slots.abilities">@{{ ability }}</li>
        <li v-for="(miracle, key, index) in slots.miracles">@{{ miracle }}<span v-if="key < slots.count">†</span></li>
    </ul>
    <p v-if="slots.type == 'Miracles' || slots.type =='Attunements'">†: active slot</p>

    <h4>Equipment & Items</h4>
    Either @{{ wealth.starting }} coins, or the following:
    <ul>
        <li>@{{ wealth.current }} coins</li>
        <li>@{{ armor.name }} (AC @{{ armor.armorClass }})</li>
        <li v-if="hasShield">Shield (AC +1)</li>
        <li v-for="weapon in weapons">@{{ weapon.name }}</li>
    </ul>
</div>
@endsection

@push('scripts_footer')
<script type="text/javascript" src="{{ asset('js/whitehack/character_generator.js') }}"></script>
@endpush