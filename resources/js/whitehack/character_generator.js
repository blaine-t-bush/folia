// TODO hireling generator
// TODO move groups off of attributes to separate object {group: 'name', attribute: 'strength'}
// TODO fix leveling
// TODO add toggle for HP houserule (HP increases by at least 1 each level)
// TODO add button to re-roll HP
// TODO break names up into primary, optional secondary, and optional epithets

// Instantiate a new character on pageload.
var character = new Character;

// Tie the character object to a Vue instance.
var app = new Vue({
    el: '#character-generator',
    data: character,
    computed: {
        levelDownObject: function() {
            return {
                'disabled': this.level == 1
            }
        },
        levelUpObject: function() {
            return {
                'disabled': this.level == 10
            }
        }
    },
    methods: {
        generateCharacter: function() {
            character.generate();
        },
        increaseLevel: function() {
            character.increaseLevel();
        },
        decreaseLevel: function() {
            character.decreaseLevel();
        }
    }
})