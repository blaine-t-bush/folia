@extends('layouts.app')

@section('title', 'OSRS Slayer Task Assignment Calculator')

@section('content')

@push('styles')
<link rel="stylesheet" href="{{ asset('css/osrs-slayer-tasks.css') }}">
@endpush

@push('scripts_head')
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.1/Chart.min.js"></script>
<script src="https://unpkg.com/vue-chartjs/dist/vue-chartjs.min.js"></script>
@endpush

<h1 class="page-title">OSRS Slayer Task Assignment Calculator</h1>

<div id="app">
    <transition name="slide-fade" v-on:after-enter="lowerError">
        <div class="error-message" :style="errorStyle" v-if="showErrorMessage">@{{ errorMessage }}</div>
    </transition>

    <h2>Stats</h2>
    <div class="stats">
        <div class="stat">
            <img src="{{ asset('images/osrs/skill_combat.png') }}" alt="Combat">
            <input v-model.number="combatLevel" type="number" min="3" max="126">
        </div>

        <div class="stat">
            <img src="{{ asset('images/osrs/skill_slayer.png') }}" alt="Slayer">
            <input v-model.number="slayerLevel" type="number" min="1" max="99">
        </div>

        <div class="stat">
            <img src="{{ asset('images/osrs/skill_agility.png') }}" alt="Agility">
            <input v-model.numer="agilityLevel" type="number" min="1" max="99">
        </div>

        <div class="stat">
            <img src="{{ asset('images/osrs/skill_defence.png') }}" alt="Defence">
            <input v-model.numer="defenceLevel" type="number" min="1" max="99">
        </div>

        <div class="stat">
            <img src="{{ asset('images/osrs/skill_firemaking.png') }}" alt="Firemaking">
            <input v-model.numer="firemakingLevel" type="number" min="1" max="99">
        </div>

        <div class="stat">
            <img src="{{ asset('images/osrs/skill_magic.png') }}" alt="Magic">
            <input v-model.numer="magicLevel" type="number" min="1" max="99">
        </div>

        <div class="stat">
            <img src="{{ asset('images/osrs/skill_strength.png') }}" alt="Strength">
            <input v-model.numer="strengthLevel" type="number" min="1" max="99">
        </div>
    </div>

    <h2>Unlocks</h2>
    <h3>Slayer</h3>
    <div class="unlocks">
        <div class="unlock-container" v-for="reward in rewards">
            <label class="unlock" v-bind:class="{ selected: unlockedRewards.includes(reward.unlockId) }">
                <input type="checkbox" :id="reward.unlockId" :value="reward.unlockId" v-model="unlockedRewards">
                <div class="unlock-image">
                    <img :src="reward.unlockIcon" alt="">
                </div>
                <span class="unselectable">@{{ reward.unlock }}</span>
            </label>
        </div>
    </div>

    <h3>Quests</h3>
    <div class="quests">
        <div class="quest" v-for="quest in quests" v-bind:class="{ selected: unlockedQuests.includes(quest.questId) }">
            <label class="quest-label">
                <input type="checkbox" :id="quest.questId" :value="quest.questId" v-model="unlockedQuests">
                <div class="quest-name unselectable">@{{ quest.quest }}</div>
            </label>
        </div>
    </div>

    <h3>Other</h3>
    <div class="other">
        <label class="other-label" v-bind:class="{ selected: ancientCavernUnlocked }">
            <input type="checkbox" :id="ancientCavernUnlocked" value="true" v-model="ancientCavernUnlocked">
            <div class="other-name unselectable">Ancient Cavern unlocked</div>
        </label>
    </div>

    <h2>Blocked Tasks</h2>
    <form class="blocklist">
        <div class="blocklist-item">
            <span>1.</span>
            <select id="block-1" name="block-1" v-model="blockedTask1">
                <option :value="null">None</option>
                <option v-for="monster in slayerMonsters" :value="monster.monsterId">@{{ monster.monster }}</option>
            </select>
            <button class="block" v-if="blockedTask1 !== null" v-on:click="unblock(blockedTask1)">
                Unblock
            </button>
        </div>

        <div class="blocklist-item">
            <span>2.</span>
            <select id="block-2" name="block-2" v-model="blockedTask2">
                <option :value="null">None</option>
                <option v-for="monster in slayerMonsters" :value="monster.monsterId">@{{ monster.monster }}</option>
            </select>
            <button class="block" v-if="blockedTask2 !== null" v-on:click="unblock(blockedTask2)">
                Unblock
            </button>
        </div>

        <div class="blocklist-item">
            <span>3.</span>
            <select id="block-3" name="block-3" v-model="blockedTask3">
                <option :value="null">None</option>
                <option v-for="monster in slayerMonsters" :value="monster.monsterId">@{{ monster.monster }}</option>
            </select>
            <button class="block" v-if="blockedTask3 !== null" v-on:click="unblock(blockedTask3)">
                Unblock
            </button>
        </div>

        <div class="blocklist-item">
            <span>4.</span>
            <select id="block-4" name="block-4" v-model="blockedTask4">
                <option :value="null">None</option>
                <option v-for="monster in slayerMonsters" :value="monster.monsterId">@{{ monster.monster }}</option>
            </select>
            <button class="block" v-if="blockedTask4 !== null" v-on:click="unblock(blockedTask4)">
                Unblock
            </button>
        </div>

        <div class="blocklist-item">
            <span>5.</span>
            <select id="block-5" name="block-5" v-model="blockedTask5">
                <option :value="null">None</option>
                <option v-for="monster in slayerMonsters" :value="monster.monsterId">@{{ monster.monster }}</option>
            </select>
            <button class="block" v-if="blockedTask5 !== null" v-on:click="unblock(blockedTask5)">
                Unblock
            </button>
        </div>

        <div class="blocklist-item">
            <span>6.</span>
            <select id="block-6" name="block-6" v-model="blockedTask6">
                <option :value="null">None</option>
                <option v-for="monster in slayerMonsters" :value="monster.monsterId">@{{ monster.monster }}</option>
            </select>
            <button class="block" v-if="blockedTask5 !== null" v-on:click="unblock(blockedTask5)">
                Unblock
            </button>
        </div>
    </form>

    <h2>Slayer Master</h2>
    <div class="masters">
        <div class="master-container" v-for="master in slayerMasters" :key="master.masterId">
            <label class="master" v-bind:class="{ selected: selectedMaster == master.masterId }">
                <input type="radio" :id="master.masterId" :value="master.masterId" v-on:click="updateMaster(master.masterId, $event)">
                <div class="master-image">
                    <img :src="master.chatheadIcon" alt="" srcset="">
                </div>
                <span class="unselectable">@{{ master.master }}</span>
            </label>
        </div>
    </div>

    <h2 style="text-transform: capitalize">@{{ selectedMaster }} Tasks</h2>
    <div style="display: flex; flex-direction: column;">
        <button v-if="hideBlockedTasks" v-on:click="toggleBlockedTasks" class="display">Display blocked tasks</button>
        <button v-else v-on:click="toggleBlockedTasks" class="display selected">Display blocked tasks</button>
        <button v-if="hideUnavailableTasks" v-on:click="toggleUnavailableTasks" class="display">Display unavailable tasks</button>
        <button v-else v-on:click="toggleUnavailableTasks" class="display selected">Display unavailable tasks</button>
    </div>

    <table>
        <tr>
            <td></td>
            <td>Monster</td>
            <td>Probability</td>
        </tr>
        <tr v-for="task in slayerTasks" v-bind:class="{ blocked: task.blocked, blockedHidden: task.blocked && hideBlockedTasks, unavailable: task.unavailable, unavailableHidden: task.unavailable && hideUnavailableTasks }">
            <td>
                <button class="block" v-if="task.blocked" v-on:click="unblock(task.monsterId)">
                    Unblock
                </button>
                <button class="block" v-else-if="!task.unavailable" v-on:click="block(task.monsterId, $event)">
                    Block
                </button>
            </td>
            <td>@{{ task.monster }}</td>
            <td class="probability"><span>@{{ ( 100*task.weight / totalWeight).toFixed(1) + '%' }}</span></td>
        </tr>
    </table>
</div>

<a href="/resources">« All Resources</a>
@endsection

@push('scripts_body')
<script type="text/javascript" src="{{ asset('js/osrs-slayer-tasks/app.js') }}"></script>
@endpush