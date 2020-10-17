@extends('layouts.app')

@section('title', 'Whitehack Houserules')

@section('content')

<h2>XP</h2>
<p>
    When creating a new character, your starting XP value is half that of the character with the greatest XP on that day.
</p>

<h2>HP</h2>
<p>
    When leveling up, re-roll HP as normal. If you roll less than or equal to your current HP, you instead gain 1 HP.
</p>

<h2>Hirelings</h2>
<p>
    Each character can have at most 1 hireling.
    You can recruit one extra hireling if your charisma is at least 13, or two extra hirelings if your charisma is at least 16.
    Your hireling must belong to one of your affiliation groups or be closely related to your vocation.
    The following types of hirelings are available:
</p>
<ul>
    <li>Porters & torchbearers: HD 1, AV 10. Will only participate in combat if they are defending themselves or if it presents minimal immediate risk (e.g. will happily use a sling from far in the back line). One-tenth share of XP and loot.</li>
    <li>Specialists: HD 1, AV 10. Will only participate in combat if they are defending themselves or if it presents minimal immediate risk (e.g. will happily use a sling from far in the back line). Contributes some special skill, such as tracking or linguistics. One-fifth share of XP and loot.</li>
    <li>Mercenaries: HD 1+2, AV 11. Participates in combat. One-half share of XP and loot.</li>
</ul>

<h2>Deft</h2>
<p>
    At higher levels when gaining additional attunements, a deft character may instead choose one of their existing attunements, granting them an additional daily use of that attunement.
</p>

<a href="/resources">« All Resources</a>
@endsection

@push('scripts_body')
<script type="text/javascript" src="{{ asset('js/whitehack/hireling_generator.js') }}"></script>
@endpush