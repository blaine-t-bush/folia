@extends('layouts.app')

@section('title', 'OSRS Slayer Task Assignment Calculator')

@section('content')

@push('styles')
<link rel="stylesheet" href="{{ asset('css/osrs-slayer-tasks.css') }}">
@endpush

<div id="app">
    <h1 class="page-title">OSRS Slayer Task Assignment Calculator</h1>
    
    <transition name="slide-fade" @after-enter="lowerError">
        <div v-if="error.display" class="error-message" :style="error.style">
            @{{ error.message }}
        </div>
    </transition>

    <div class="columns">
        <div class="column">
            <p>
                Enter your stats below, select the slayer rewards you've unlocked, quests you've completed, and tasks you've blocked. Finally, select your slayer master, and your
                assignment probabilities will be displayed.
            </p>

            <p>
                Use this tool to get a feel for what your tasks will look like at a given slayer master as a function of your block list. Tasks you dislike that have a high probability
                are worth blocking. Tasks you dislike that have a low probability are probably worth just skipping instead of blocking outright.
            </p>

            <div class="section-header" style="justify-content: flex-start;">
                <img class="master-chathead-header" :src="selectedMasterChatheadIcon" />
                <h2 style="text-transform: capitalize">@{{ selectedMaster }} Tasks</h2>
            </div>

            <!-- SECTION: CHART -->
            <canvas id="chart"></canvas>

            <!-- SECTION: TASK LIST -->
            <!-- <div>
                <label class="checkbox-container">
                    <input type="checkbox" v-model="hideBlockedTasks" />
                    <span class="checkbox"></span>
                    <span>Hide blocked tasks</span>
                </label>
                <label class="checkbox-container">
                    <input type="checkbox" v-model="hideUnavailableTasks" />
                    <span class="checkbox"></span>
                    <span>Hide unavailable tasks</span>
                </label>
            </div> -->

            <table>
                <tr>
                    <td />
                    <td>Monster</td>
                    <td>Probability</td>
                </tr>
                <tr
                    v-for="task in slayerTasks"
                    :key="task.monsterId"
                    :class="{
                        blocked: task.blocked,
                        unavailable: task.unavailable,
                        hidden: (task.blocked && hideBlockedTasks) || (task.unavailable && hideUnavailableTasks),
                    }"
                >
                    <td>
                        <button v-if="task.blocked" @click="unblock(task.monsterId, $event)">Unblock</button>
                        <button v-else-if="!task.unavailable" @click="block(task.monsterId, $event)">Block</button>
                    </td>
                    <td>@{{ task.monster }}</td>
                    <td>
                        <span v-if="!task.blocked && !task.unavailable">@{{ ((100 * task.weight) / totalWeight).toFixed(1) + "%" }}</span>
                    </td>
                </tr>
            </table>
        </div>

        <div class="column column-small">
            <!-- SECTION: SLAYER MASTER -->
            <div class="section-header" @click="sections.masters.hidden = !sections.masters.hidden">
                <h2>Master</h2>
                <button v-if="!sections.masters.hidden" class="hide">Hide</button>
                <button v-if="sections.masters.hidden" class="hide">Unhide</button>
            </div>
            <div v-if="!sections.masters.hidden" class="section-masters">
                <div v-for="master in slayerMasters" :key="master.masterId">
                    <label class="radio-container" :class="{ selected: selectedMaster == master.masterId }">
                        <input :id="master.masterId" type="radio" :value="master.masterId" :checked="master.masterId === selectedMaster" @click="updateMaster(master.masterId, $event)" />
                        <span class="radio"></span>
                        <img class="master-chathead-small" :src="master.chatheadIcon" />
                        <span>@{{ master.master }}</span>
                    </label>
                </div>
            </div>

            <!-- SECTION: BLOCKS -->
            <div class="section-header" @click="sections.blocks.hidden = !sections.blocks.hidden">
                <h2 class="unselectable">Blocks</h2>
                <button v-if="!sections.blocks.hidden" class="hide">Hide</button>
                <button v-if="sections.blocks.hidden" class="hide">Unhide</button>
            </div>
            <div v-if="!sections.blocks.hidden" class="section-blocks">
                <span>1.</span>
                <select id="block-1" v-model="blockedTask1" name="block-1">
                    <option :value="null">None</option>
                    <option v-for="monster in slayerMonsters" :key="monster.monsterId" :value="monster.monsterId">
                        @{{ monster.monster }}
                    </option>
                </select>
                <button :class="{ hidden: blockedTask1 === null }" @click="unblock(blockedTask1, $event)">Unblock</button>

                <span>2.</span>
                <select id="block-2" v-model="blockedTask2" name="block-2">
                    <option :value="null">None</option>
                    <option v-for="monster in slayerMonsters" :key="monster.monsterId" :value="monster.monsterId">
                        @{{ monster.monster }}
                    </option>
                </select>
                <button :class="{ hidden: blockedTask2 === null }" @click="unblock(blockedTask2, $event)">Unblock</button>

                <span>3.</span>
                <select id="block-3" v-model="blockedTask3" name="block-3">
                    <option :value="null">None</option>
                    <option v-for="monster in slayerMonsters" :key="monster.monsterId" :value="monster.monsterId">
                        @{{ monster.monster }}
                    </option>
                </select>
                <button :class="{ hidden: blockedTask3 === null }" @click="unblock(blockedTask3, $event)">Unblock</button>

                <span>4.</span>
                <select id="block-4" v-model="blockedTask4" name="block-4">
                    <option :value="null">None</option>
                    <option v-for="monster in slayerMonsters" :key="monster.monsterId" :value="monster.monsterId">
                        @{{ monster.monster }}
                    </option>
                </select>
                <button :class="{ hidden: blockedTask4 === null }" @click="unblock(blockedTask4, $event)">Unblock</button>

                <span>5.</span>
                <select id="block-5" v-model="blockedTask5" name="block-5">
                    <option :value="null">None</option>
                    <option v-for="monster in slayerMonsters" :key="monster.monsterId" :value="monster.monsterId">
                        @{{ monster.monster }}
                    </option>
                </select>
                <button :class="{ hidden: blockedTask5 === null }" @click="unblock(blockedTask5, $event)">Unblock</button>

                <span>6.</span>
                <select id="block-6" v-model="blockedTask6" name="block-6">
                    <option :value="null">None</option>
                    <option v-for="monster in slayerMonsters" :key="monster.monsterId" :value="monster.monsterId">
                        @{{ monster.monster }}
                    </option>
                </select>
                <button :class="{ hidden: blockedTask6 === null }" @click="unblock(blockedTask6, $event)">Unblock</button>
            </div>

            <!-- SECTION: STATS -->
            <div class="section-header" @click="sections.stats.hidden = !sections.stats.hidden">
                <h2 class="unselectable">Stats</h2>
                <button v-if="!sections.stats.hidden" class="hide">Hide</button>
                <button v-if="sections.stats.hidden" class="hide">Unhide</button>
            </div>

            <div v-if="!sections.stats.hidden" class="section-stats">
                <!-- <div class="stat-lookup">
                    <h3>Lookup Stats</h3>
                    <label>
                        <input v-model="accountName" type="text" placeholder="Account Name" />
                        <button @click="getStats(accountName)">Go</button>
                    </label>
                </div> -->

                <div class="stat-container">
                    <!-- <h3>Enter Stats</h3> -->
                    <div class="stat">
                        <img src="{{ asset('images/osrs/skill_combat.png') }}" alt="Combat" />
                        <input v-model.number="stats.combat" type="number" />
                    </div>

                    <div class="stat">
                        <img src="{{ asset('images/osrs/skill_slayer.png') }}" alt="Slayer" />
                        <input v-model.number="stats.slayer" type="number" />
                    </div>

                    <div class="stat">
                        <img src="{{ asset('images/osrs/skill_agility.png') }}" alt="Agility" />
                        <input v-model.number="stats.agility" type="number" />
                    </div>

                    <div class="stat">
                        <img src="{{ asset('images/osrs/skill_defence.png') }}" alt="Defence" />
                        <input v-model.number="stats.defence" type="number" />
                    </div>

                    <div class="stat">
                        <img src="{{ asset('images/osrs/skill_firemaking.png') }}" alt="Firemaking" />
                        <input v-model.number="stats.firemaking" type="number" />
                    </div>

                    <div class="stat">
                        <img src="{{ asset('images/osrs/skill_magic.png') }}" alt="Magic" />
                        <input v-model.number="stats.magic" type="number" />
                    </div>

                    <div class="stat">
                        <img src="{{ asset('images/osrs/skill_strength.png') }}" alt="Strength" />
                        <input v-model.number="stats.strength" type="number" />
                    </div>
                </div>
            </div>

            <!-- SECTION: SLAYER REWARD UNLOCKS -->
            <div class="section-header" @click="sections.unlocks.hidden = !sections.unlocks.hidden">
                <h2 class="unselectable">Unlocks</h2>
                <button v-if="!sections.unlocks.hidden" class="hide">Hide</button>
                <button v-if="sections.unlocks.hidden" class="hide">Unhide</button>
            </div>
            <div v-if="!sections.unlocks.hidden" class="section-unlocks">
                <div v-for="reward in rewards" :key="reward.unlockId" :class="{ selected: unlockedRewards.includes(reward.unlockId) }">
                    <label class="checkbox-container">
                        <input :id="reward.unlockId" v-model="unlockedRewards" type="checkbox" :value="reward.unlockId" />
                        <span class="checkbox"></span>
                        <span>@{{ reward.unlock }}</span>
                    </label>
                </div>
            </div>

            <!-- SECTION: QUEST UNLOCKS -->
            <div class="section-header" @click="sections.quests.hidden = !sections.quests.hidden">
                <h2 class="unselectable">Quests</h2>
                <button v-if="!sections.quests.hidden" class="hide">Hide</button>
                <button v-if="sections.quests.hidden" class="hide">Unhide</button>
            </div>
            <div v-if="!sections.quests.hidden" class="section-quests">
                <div v-for="quest in quests" :key="quest.questId" :class="{ selected: unlockedQuests.includes(quest.questId) }">
                    <label class="checkbox-container">
                        <input :id="quest.questId" v-model="unlockedQuests" type="checkbox" :value="quest.questId" />
                        <span class="checkbox"></span>
                        <span>@{{ quest.quest }}</span>
                    </label>
                </div>
            </div>

            <!-- SECTION: OTHER UNLOCKS -->
            <div class="section-header" @click="sections.other.hidden = !sections.other.hidden">
                <h2 class="unselectable">Other</h2>
                <button v-if="!sections.other.hidden" class="hide">Hide</button>
                <button v-if="sections.other.hidden" class="hide">Unhide</button>
            </div>
            <div v-if="!sections.other.hidden" class="section-other">
                <label class="checkbox-container" :class="{ selected: unlockedMisc.ancientCavern }">
                    <input :id="unlockedMisc.ancientCavern" v-model="unlockedMisc.ancientCavern" type="checkbox" value="true" />
                    <span class="checkbox"></span>
                    <span>Ancient Cavern unlocked</span>
                </label>
            </div>
        </div>
    </div>
</div>

<a href="/resources">« All Resources</a>
@endsection

@push('scripts_body')
<script type="text/javascript" src="{{ asset('js/osrs-slayer-tasks/app.js') }}"></script>
@endpush