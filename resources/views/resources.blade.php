@extends('layouts.app')

@section('title', 'Resources')

@section('content')
<h1>Resources</h1>

<h2>Whitehack Character Generator</h2>

<div id="app" class="character">
    <div>
        <button class="character-generate" v-on:click="generateCharacter">Generate Character</button>

        <div>
            <button class="character-level-down" v-on:click="decreaseLevel">-</button>
            <span>Level</span>
            <button class="character-level-up" v-on:click="increaseLevel">+</button>
        </div>
    </div>
    <div class="character-summary">
        @{{ name }}, level @{{ level }} @{{ characterClass }} @{{ vocation }}
    </div>

    <div class="character-hp">
        <strong>HP</strong> @{{ hitPoints }}
    </div>

    <div class="character-av">
        <strong>AV</strong> @{{ attackValue }}
    </div>

    <div class="character-st">
        <strong>ST</strong> @{{ savingThrow }}
    </div>

    <div class="character-slots">
        <strong>Slots</strong> @{{ slots }}
    </div>

    <div class="character-slots">
        <strong>Groups</strong> @{{ groups }}
    </div>

    <div class="character-slots">
        <strong>Bonus Groups</strong> @{{ bonusGroups }}
    </div>

    <div class="character-attributes">
        <ul>
            <li><strong>Strength</strong> <span>@{{ attributes.strength }}</span></li>
            <li><strong>Dexterity</strong> <span>@{{ attributes.dexterity }}</span></li>
            <li><strong>Constitution</strong> <span>@{{ attributes.constitution }}</span></li>
            <li><strong>Intelligence</strong> <span>@{{ attributes.intelligence }}</span></li>
            <li><strong>Wisdom</strong> <span>@{{ attributes.wisdom }}</span></li>
            <li><strong>Charisma</strong> <span>@{{ attributes.charisma }}</span></li>
        </ul>
    </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script type="text/javascript" src="{{ asset('js/whitehack_character_generator.js') }}"></script>
@endsection