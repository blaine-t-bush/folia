@extends('layouts.app')

@section('title', 'Resources')

@section('content')
<link rel="stylesheet" href="{{ asset('css/whitehack_character_generator.css') }}">

<h1>Resources</h1>

<h2>Whitehack Character Generator</h2>

<div id="app" class="character">
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
        <tr v-for="attribute in attributes">
            <td>@{{ attribute.name }}</td>
            <td style="text-align: right;">@{{ attribute.value }}</td>
            <td>
                <span v-for="(group, key, index) in attribute.groups"><span v-if="key == 0">(</span>@{{ group }}<span v-if="key != Object.keys(attribute.groups).length - 1">, </span><span v-else>)</span></span>
            </td>
        </tr>
    </table>

    <h4>Equipment</h4>
    <ul>
        <li>
            @{{ goldPieces }} gp (starting wealth @{{ startingGoldPieces }} gp)
        </li>
        <li>
            @{{ armor }}
        </li>
        <li v-for="weapon in weapons">
            @{{ weapon.name }} (@{{ weapon.damage }})
        </li>
    </ul>

    <h4>Slots</h4>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script type="text/javascript" src="{{ asset('js/whitehack_character_generator.js') }}"></script>
@endsection