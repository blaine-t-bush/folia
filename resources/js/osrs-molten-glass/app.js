import { experienceRequiredTotal, levelByExperience } from './data';
import Vue from 'vue';

var app = new Vue({
    el: "#app",
    data: {
        message: "nothing",
        error: {
            display: false,
            message: "",
            style: "",
        },
        currentLevel: 1,
        targetLevel: 2,
        currentExperience: 0,
        targetExperience: experienceRequiredTotal(2),
    },
    computed: {
        experienceRequired: function() {
            return this.targetExperience - this.currentExperience;
        },
    },
    methods: {
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
        changeCurrentLevel: function(event) {
            let newCurrentLevel = Number(event.target.value);

            if (newCurrentLevel < 1) {
                // Don't change value. Make sure input matches value.
                this.raiseError("Level cannot be less than 1", event.pageX, event.pageY);
                document.getElementById("currentLevel").value = this.currentLevel;
            } else if (newCurrentLevel > this.targetLevel) {
                // Don't change value. Make sure input matches value.
                this.raiseError("Current level cannot exceed target", event.pageX, event.pageY);
                document.getElementById("currentLevel").value = this.currentLevel;
            } else {
                // Update current level, and current experience to match.
                this.currentLevel = newCurrentLevel;
                this.currentExperience = experienceRequiredTotal(newCurrentLevel);
            }
        },
        changeTargetLevel: function(event) {
            let newTargetLevel = Number(event.target.value);

            if (newTargetLevel < 1) {
                // Don't change value. Make sure input matches value.
                this.raiseError("Level cannot be less than 1", event.pageX, event.pageY);
                document.getElementById("targetLevel").value = this.targetLevel;
            } else if (newTargetLevel < this.currentLevel) {
                // Don't change value. Make sure input matches value.
                this.raiseError("Current level cannot exceed target", event.pageX, event.pageY);
                document.getElementById("targetLevel").value = this.targetLevel;
            } else {
                // Update target level, and target experience to match.
                this.targetLevel = newTargetLevel;
                this.targetExperience = experienceRequiredTotal(newTargetLevel);
            }
        },
        changeCurrentExperience: function(event) {
            let newCurrentExperience = Number(event.target.value);

            if (newCurrentExperience < 0) {
                // Don't change value. Make sure input matches value.
                this.raiseError("Experience cannot be less than 0", event.pageX, event.pageY);
                document.getElementById("currentExperience").value = this.currentExperience;
            } else if (newCurrentExperience > 200000000) {
                // Don't change value. Make sure input matches value.
                this.raiseError("Experience cannot exceed 200M", event.pageX, event.pageY);
                document.getElementById("currentExperience").value = this.currentExperience;
            } else if (newCurrentExperience > this.targetExperience) {
                // Don't change value. Make sure input matches value.
                this.raiseError("Current experience cannot exceed target", event.pageX, event.pageY);
                document.getElementById("currentExperience").value = this.currentExperience;
            } else {
                // Update current experience, and current level to match.
                this.currentExperience = newCurrentExperience;
                this.currentLevel = levelByExperience(newCurrentExperience);
            }
        },
        changeTargetExperience: function(event) {
            let newTargetExperience = Number(event.target.value);

            if (newTargetExperience < 0) {
                // Don't change value. Make sure input matches value.
                this.raiseError("Experience cannot be less than 0", event.pageX, event.pageY);
                document.getElementById("targetExperience").value = this.targetExperience;
            } else if (newTargetExperience > 200000000) {
                // Don't change value. Make sure input matches value.
                this.raiseError("Experience cannot exceed 200M", event.pageX, event.pageY);
                document.getElementById("targetExperience").value = this.targetExperience;
            } else if (newTargetExperience < this.currentExperience) {
                // Don't change value. Make sure input matches value.
                this.raiseError("Current experience cannot exceed target", event.pageX, event.pageY);
                document.getElementById("targetExperience").value = this.targetExperience;
            } else {
                // Update target experience, and target level to match.
                this.targetExperience = newTargetExperience;
                this.targetLevel = levelByExperience(newTargetExperience);
            }
        },
    },
});