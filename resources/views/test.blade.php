@extends('layouts.app')

@section('title', 'Test')

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

    <div class="monster-optional">
        <div class="monster-optional-special">
            <div class="monster-optional-special-label typed">SPECIAL(S)</div>
            <div class="monster-optional-special-value handwritten">
                <ul>
                    <li>Ability 1</li>
                    <li>Ability 2</li>
                </ul>
            </div>
        </div>
    
        <div class="monster-optional-special">
            <div class="monster-optional-special-label typed">EQUIPMENT</div>
            <div class="monster-optional-special-value handwritten">
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                </ul>
            </div>
        </div>

    </div>
</div>

<p>
    And here's another paragraph, demonstrating that I can display a monster statblock in the middle of a post.
</p>

<table>
    <thead>
        <tr>
            <th>1D6</th>
            <th>RESULT</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Raiding party, looking for caravans. 2d6 warriors and 1 captain.</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Raiding party, returning from a mostly-successful caravan attack. 2d6 warriors (half of whom are injured), 1d6 captives, and 1 captain.</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Scouting party, patrolling the borders of lizardfolk land. 1d6+2 hunters.</td>
        </tr>
        <tr>
            <td>4</td>
            <td>Hunting party, searching for dire game. 1d6 hunters and 1d6 lizard-lions. 1d6 to determine activity (1-2: tracking; 3-4: taking down game; 5-6: butchering a kill).</td>
        </tr>
        <tr>
            <td>5</td>
            <td>Young warrior on a rite of passage. He will challenge the strongest-looking character to a duel to first blood. The loser takes a trophy (e.g. weapon, ear, tail) from the other.</td>
        </tr>
        <tr>
            <td>6</td>
            <td>Shaman, tracking a leyline toward a place of power.</td>
        </tr>
    </tbody>
</table>

<p>
    And here's another paragraph before I test these little character sheets.
</p>

<x-character
    name="Droog the Hammer"
    level="1"
    character-class="Deft"
    vocation="Ranger"
    hit-points="6"
    attack-value="10"
    saving-throw="7"
    armor-class="3"
    movement="30"
    strength-score="7"
    dexterity-score="10"
    constitution-score="10"
    intelligence-score="8"
    wisdom-score="10"
    charisma-score="12"
    strength-groups=""
    dexterity-groups=""
    constitution-groups="(Orc)"
    intelligence-groups=""
    wisdom-groups=""
    charisma-groups="(Orc)"
    slot-type="Attunements"
    :slots="['Musket','Horse']"
    :inventory="['Musket, spear, scimitar', 'Breastplate & helmet', 'Leather coat', 'Duchess the Horse']"
    :notes="['Gruff bounty hunter', 'Loves his horse more than anything']"
    />

@endsection

@section('footer')
    @parent
@endsection