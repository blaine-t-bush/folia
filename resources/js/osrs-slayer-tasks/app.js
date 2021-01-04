import { slayerMasters, slayerMasterTasks, slayerMonsters, rewards, quests } from "./data.js";
import Vue from 'vue';
import Chart from 'chart.js';

var app = new Vue({
    el: '#app',
    data: {
        sections: {
            stats: {
                hidden: false,
            },
            unlocks: {
                hidden: false,
            },
            quests: {
                hidden: false,
            },
            other: {
                hidden: false,
            },
            blocks: {
                hidden: false,
            },
            masters: {
                hidden: false,
            },
        },
        error: {
            display: false,
            message: "",
            style: "",
        },
        accountName: "",
        stats: {
            agility: 73,
            combat: 100,
            defence: 72,
            firemaking: 99,
            magic: 85,
            slayer: 74,
            strength: 86,
        },
        unlockedMisc: {
            ancientCavern: true,
        },
        selectedMaster: "duradel",
        slayerMasters: slayerMasters,
        slayerMasterTasks: slayerMasterTasks,
        slayerMonsters: slayerMonsters,
        rewards: rewards,
        unlockedRewards: [
            "basilocked",
            "watchTheBirdie",
        ],
        quests: quests,
        unlockedQuests: [
            "boneVoyage",
            "cabinFever",
            "contact",
            "deathPlateau",
            "deathToTheDorgeshuun",
            "desertTreasure",
            "dragonSlayerI",
            "elementalWorkshopI",
            "ernestTheChicken",
            "hauntedMine",
            "horrorFromTheDeep",
            "legendsQuest",
            "lostCity",
            "lunarDiplomacy",
            "mourningsEndPartIi",
            "olafsQuest",
            "aPorcineOfInterest",
            "priestInPeril",
            "regicide",
            "royalTrouble",
            "rumDeal",
            "skippyAndTheMogres",
        ],
        blockedTask1: "ironDragon",
        blockedTask2: "spiritualCreature",
        blockedTask3: "blackDemon",
        blockedTask4: null,
        blockedTask5: null,
        blockedTask6: null,
        hideBlockedTasks: true,
        hideUnavailableTasks: true,
    },
    computed: {
        strengthOrAgilityLevel: function () {
            return Math.max(this.stats.agility, this.stats.strength);
        },
        blockedTasks: function () {
            let blockedTasks = [];

            if (this.blockedTask1 !== null) {
                blockedTasks.push(this.blockedTask1);
            }

            if (this.blockedTask2 !== null) {
                blockedTasks.push(this.blockedTask2);
            }

            if (this.blockedTask3 !== null) {
                blockedTasks.push(this.blockedTask3);
            }

            if (this.blockedTask4 !== null) {
                blockedTasks.push(this.blockedTask4);
            }

            if (this.blockedTask5 !== null) {
                blockedTasks.push(this.blockedTask5);
            }

            if (this.blockedTask6 !== null) {
                blockedTasks.push(this.blockedTask6);
            }

            return blockedTasks;
        },
        slayerTasks: function () {
            // First, get list of all tasks for current master.
            let tasks = this.slayerMasterTasks.filter((obj) => obj.masterId == this.selectedMaster);

            // Loop through each task, and mark as blocked if necessary.
            // Blocked tasks are displayed but not included in calculations.
            for (let i = 0; i < tasks.length; i++) {
                if (this.blockedTasks.includes(tasks[i].monsterId)) {
                    tasks[i].blocked = true;
                } else {
                    tasks[i].blocked = false;
                }
            }

            // Loop through each task, and mark as unavailable if necessary.
            // Unavailable tasks are are displayed but not included in calculations.
            // First, start with each task as available.
            for (let i = 0; i < tasks.length; i++) {
                tasks[i].unavailable = false;
            }

            // Check slayer level.
            for (let i = 0; i < tasks.length; i++) {
                if (this.stats.slayer < tasks[i].slayerReq) {
                    tasks[i].unavailable = true;
                }
            }

            // Check combat level.
            for (let i = 0; i < tasks.length; i++) {
                if (this.stats.combat < tasks[i].combatReq) {
                    tasks[i].unavailable = true;
                }
            }

            // Check other levels (e.g. Strength/Agility for Wilderness bloodvelds).
            //  Agility
            //  Defence
            //  Firemaking
            //  Magic
            //  Strength OR Agility (for GWD)
            for (let i = 0; i < tasks.length; i++) {
                if (tasks[i].agilityReq !== null && this.stats.agility < tasks[i].agilityReq) {
                    tasks[i].unavailable = true;
                }

                if (tasks[i].defenceReq !== null && this.stats.defence < tasks[i].defenceReq) {
                    tasks[i].unavailable = true;
                }

                if (tasks[i].firemakingReq !== null && this.stats.firemaking < tasks[i].firemakingReq) {
                    tasks[i].unavailable = true;
                }

                if (tasks[i].magicReq !== null && this.stats.magic < tasks[i].magicReq) {
                    tasks[i].unavailable = true;
                }

                if (tasks[i].strengthOrAgilityReq !== null && this.strengthOrAgilityLevel < tasks[i].strengthOrAgilityReq) {
                    tasks[i].unavailable = true;
                }
            }

            // Check quests (e.g. Priest in Peril for banshees).
            for (let i = 0; i < tasks.length; i++) {
                if (tasks[i].questReqId !== null) {
                    let questReqIds = tasks[i].questReqId.split(",");
                    for (let j = 0; j < questReqIds.length; j++) {
                        if (!this.unlockedQuests.includes(questReqIds[j])) {
                            tasks[i].unavailable = true;
                            break;
                        }
                    }
                }
            }

            // Check slayer reward point unlocks (e.g. "Seeing red" for red dragons).
            for (let i = 0; i < tasks.length; i++) {
                if (tasks[i].unlockReqId !== null && !this.unlockedRewards.includes(tasks[i].unlockReqId)) {
                    tasks[i].unavailable = true;
                }
            }

            // Check other miscellaneous requirements.
            for (let i = 0; i < tasks.length; i++) {
                if (tasks[i].ancientCavernReq && !this.unlockedMisc.ancientCavern) {
                    tasks[i].unavailable = true;
                }
            }

            return tasks;
        },
        selectedMasterChatheadIcon: function () {
            return this.slayerMasters.filter(master => master.masterId === this.selectedMaster)[0].chatheadIcon;
        },
        totalWeight: function () {
            var validTasks = this.slayerTasks.filter((task) => !task.blocked && !task.unavailable);
            return validTasks.reduce((accumulator, item) => accumulator + item.weight, 0);
        },
        chartData: function () {
            // Determine labels: all tasks in slayerTasks.
            // Determine data: probability of each task.
            let labels = [];
            let probabilities = [];
            for (let i = 0; i < this.slayerTasks.length; i++) {
                let slayerTask = this.slayerTasks[i];
                if (!slayerTask.blocked && !slayerTask.unavailable) {
                    labels.push(slayerTask.monster);
                    probabilities.push(slayerTask.weight/this.totalWeight);
                }
            }

            return {
                type: 'bar',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Probability of Assignment',
                        data: probabilities,
                    }]
                },
                options: {
                    responsive: true,
                    lineTension: 1,
                    scales: {
                        yAxes: [{
                            ticks: {
                                callback: function(value, index, values) {
                                    return (value*100).toFixed(1) + '%';
                                },
                                beginAtZero: true,
                                padding: 25,
                            }
                        }]
                    }
                }
            }
        }
    },
    watch: {
        // Make blocked tasks exclusive from one another.
        blockedTask1: function (newBlockedTask1, oldBlockedTask1) {
            if (
                this.blockedTask1 !== null &&
                (this.blockedTask1 == this.blockedTask2 ||
                    this.blockedTask1 == this.blockedTask3 ||
                    this.blockedTask1 == this.blockedTask4 ||
                    this.blockedTask1 == this.blockedTask5 ||
                    this.blockedTask1 == this.blockedTask6)
            ) {
                this.raiseError("Can't block the same task twice", document.getElementById("block-1").offsetLeft, document.getElementById("block-1").offsetTop);
                this.blockedTask1 = oldBlockedTask1;
            }
        },
        blockedTask2: function (newBlockedTask2, oldBlockedTask2) {
            if (
                this.blockedTask2 !== null &&
                (this.blockedTask2 == this.blockedTask1 ||
                    this.blockedTask2 == this.blockedTask3 ||
                    this.blockedTask2 == this.blockedTask4 ||
                    this.blockedTask2 == this.blockedTask5 ||
                    this.blockedTask2 == this.blockedTask6)
            ) {
                this.raiseError("Can't block the same task twice", document.getElementById("block-2").offsetLeft, document.getElementById("block-2").offsetTop);
                this.blockedTask2 = oldBlockedTask2;
            }
        },
        blockedTask3: function (newBlockedTask3, oldBlockedTask3) {
            if (
                this.blockedTask3 !== null &&
                (this.blockedTask3 == this.blockedTask1 ||
                    this.blockedTask3 == this.blockedTask2 ||
                    this.blockedTask3 == this.blockedTask4 ||
                    this.blockedTask3 == this.blockedTask5 ||
                    this.blockedTask3 == this.blockedTask6)
            ) {
                this.raiseError("Can't block the same task twice", document.getElementById("block-3").offsetLeft, document.getElementById("block-3").offsetTop);
                this.blockedTask3 = oldBlockedTask3;
            }
        },
        blockedTask4: function (newBlockedTask4, oldBlockedTask4) {
            if (
                this.blockedTask4 !== null &&
                (this.blockedTask4 == this.blockedTask1 ||
                    this.blockedTask4 == this.blockedTask2 ||
                    this.blockedTask4 == this.blockedTask3 ||
                    this.blockedTask4 == this.blockedTask5 ||
                    this.blockedTask4 == this.blockedTask6)
            ) {
                this.raiseError("Can't block the same task twice", document.getElementById("block-4").offsetLeft, document.getElementById("block-4").offsetTop);
                this.blockedTask4 = oldBlockedTask4;
            }
        },
        blockedTask5: function (newBlockedTask5, oldBlockedTask5) {
            if (
                this.blockedTask5 !== null &&
                (this.blockedTask5 == this.blockedTask1 ||
                    this.blockedTask5 == this.blockedTask2 ||
                    this.blockedTask5 == this.blockedTask3 ||
                    this.blockedTask5 == this.blockedTask4 ||
                    this.blockedTask5 == this.blockedTask6)
            ) {
                this.raiseError("Can't block the same task twice", document.getElementById("block-5").offsetLeft, document.getElementById("block-5").offsetTop);
                this.blockedTask5 = oldBlockedTask5;
            }
        },
        blockedTask6: function (newBlockedTask6, oldBlockedTask6) {
            if (
                this.blockedTask5 !== null &&
                (this.blockedTask6 == this.blockedTask1 ||
                    this.blockedTask6 == this.blockedTask2 ||
                    this.blockedTask6 == this.blockedTask3 ||
                    this.blockedTask6 == this.blockedTask4 ||
                    this.blockedTask6 == this.blockedTask5)
            ) {
                this.raiseError("Can't block the same task twice", document.getElementById("block-6").offsetLeft, document.getElementById("block-6").offsetTop);
                this.blockedTask6 = oldBlockedTask6;
            }
        },
        slayerTasks: function() {
            this.updateChart();
        }
    },
    methods: {
        getStats: function (accountName) {
            const hiscores = new Hiscores({ timeout: 6000 }); // provide config if needed

            hiscores
                .getStats('zezima')
                .then(res => console.log(res))
                .catch(err => console.error(err));
            return;
        },
        createChart: function() {                
            const ctx = document.getElementById('chart');
            this.chart = new Chart(ctx, this.chartData);
            return;
        },
        updateChart: function() {
            this.chart.destroy();
            this.createChart();
            return;
        },
        block: function (monsterId, event) {
            // Find first empty block slot, if any, and update to the passed monster ID.
            if (this.blockedTask1 === null) {
                this.blockedTask1 = monsterId;
                return true;
            } else if (this.blockedTask2 === null) {
                this.blockedTask2 = monsterId;
                return true;
            } else if (this.blockedTask3 === null) {
                this.blockedTask3 = monsterId;
                return true;
            } else if (this.blockedTask4 === null) {
                this.blockedTask4 = monsterId;
                return true;
            } else if (this.blockedTask5 === null) {
                this.blockedTask5 = monsterId;
                return true;
            } else if (this.blockedTask6 === null) {
                this.blockedTask6 = monsterId;
                return true;
            } else {
                // No block slots available.
                this.raiseError("No more block slots available", event.pageX, event.pageY);
                return false;
            }
        },
        unblock: function (monsterId, event) {
            // Find first matching block slot and update value to null.
            if (this.blockedTask1 === monsterId) {
                this.blockedTask1 = null;
                return true;
            } else if (this.blockedTask2 === monsterId) {
                this.blockedTask2 = null;
                return true;
            } else if (this.blockedTask3 === monsterId) {
                this.blockedTask3 = null;
                return true;
            } else if (this.blockedTask4 === monsterId) {
                this.blockedTask4 = null;
                return true;
            } else if (this.blockedTask5 === monsterId) {
                this.blockedTask5 = null;
                return true;
            } else if (this.blockedTask6 === monsterId) {
                this.blockedTask6 = null;
                return true;
            } else {
                // Couldn't find a match.
                this.raiseError("Couldn't find a matching task", event.pageX, event.pageY);
                return false;
            }
        },
        updateMaster: function (masterId, event) {
            let slayerMaster = this.slayerMasters.filter((master) => master.masterId == masterId)[0];
            if (slayerMaster.combatReq > this.stats.combat) {
                this.raiseError("You need a combat level of at least " + slayerMaster.combatReq + " to use " + slayerMaster.master, event.pageX, event.pageY);
                return;
            } else if (slayerMaster.slayerReq > this.stats.slayer) {
                this.raiseError("You need a slayer level of at least " + slayerMaster.slayerReq + " to use " + slayerMaster.master, event.pageX, event.pageY);
                return;
            } else if (this.selectedMaster === masterId) {
                // Do nothing.
                return;
            } else {
                // Uncheck previous master.
                document.getElementById(this.selectedMaster).checked = false;

                // Change master.
                this.selectedMaster = masterId;

                return;
            }
        },
        raiseError: function (errorMessage, positionX, positionY) {
            this.error.display = true;
            this.error.message = errorMessage;
            this.error.style = "left: " + positionX + "px; top: " + positionY + "px;";
        },
        lowerError: function () {
            this.error.display = false;
            this.error.message = "";
            this.error.style = "";
        },
        toggleBlockedTasks: function () {
            console.log("?");
            this.hideBlockedTasks = !this.hideBlockedTasks;
            return;
        },
        toggleUnavailableTasks: function () {
            this.hideUnavailableTasks = !this.hideUnavailableTasks;
            return;
        },
    }
});

app.createChart();