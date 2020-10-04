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
</div>

<h2>Tables</h2>

<h3>Lizardmen</h3>
<div id="d6-table-encounters-lizardmen">
    <d-table :rows="rows"></d-table>
</div>

<h3>Froglings</h3>
<div id="d6-table-encounters-froglings">
    <d-table :rows="rows"></d-table>
</div>

@endsection

@section('footer')
    @parent
    <script type="text/javascript" src="{{ asset('js/whitehack/app.js') }}"></script>
@endsection