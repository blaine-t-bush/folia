// Create prototype function on arrays to allow for inline random selection of one element.
Array.prototype.random = function() {
    return this[Math.floor((Math.random() * this.length))];
}

// TODO add function to determine number of groups
// TODO add slots
// TODO add starting gold
// TODO add equipment

class Character {
    constructor() {
        this.regenerate();
    }

    regenerate() {
        this.level = 1;
        this.updateName();
        this.updateClass();
        this.updateVocation();
        this.updateStats();
        this.updateHitPoints();
        this.updateAttackValue();
        this.updateSavingThrow();
        this.updateSlots();
        this.updateGroups();
    }

    updateName() {
        this.name = generateName();
    }

    updateClass() {
        this.characterClass = generateClass();
    }

    updateVocation() {
        this.vocation = generateVocation();
    }

    updateStats() {
        this.attributes = {};
        this.attributes.strength     = generateStat();
        this.attributes.dexterity    = generateStat();
        this.attributes.constitution = generateStat();
        this.attributes.intelligence = generateStat();
        this.attributes.wisdom       = generateStat();
        this.attributes.charisma     = generateStat();
        this.bonusGroups = 0;
        if (this.attributes.strength <= 5) {
            this.bonusGroups += 1;
        }
        if (this.attributes.dexterity <= 5) {
            this.bonusGroups += 1;
        }
        if (this.attributes.constitution <= 5) {
            this.bonusGroups += 1;
        }
        if (this.attributes.intelligence <= 5) {
            this.bonusGroups += 1;
        }
        if (this.attributes.wisdom <= 5) {
            this.bonusGroups += 1;
        }
        if (this.attributes.charisma <= 5) {
            this.bonusGroups += 1;
        }
    }

    updateHitPoints() {
        this.hitPoints = generateHitPoints(this.characterClass, this.level);
    }

    updateAttackValue() {
        if (this.characterClass == 'Deft') {
            switch(this.level) {
                case 1:
                    this.attackValue = 10;
                    break;
                case 2:
                    this.attackValue = 11;
                    break;
                case 3:
                    this.attackValue = 11;
                    break;
                case 4:
                    this.attackValue = 12;
                    break;
                case 5:
                    this.attackValue = 12;
                    break;
                case 6:
                    this.attackValue = 13;
                    break;
                case 7:
                    this.attackValue = 13;
                    break;
                case 8:
                    this.attackValue = 14;
                    break;
                case 9:
                    this.attackValue = 14;
                    break;
                case 10:
                    this.attackValue = 15;
                    break;
            }
        } else if (this.characterClass == 'Strong') {
            switch(this.level) {
                case 1:
                    this.attackValue = 11;
                    break;
                case 2:
                    this.attackValue = 11;
                    break;
                case 3:
                    this.attackValue = 12;
                    break;
                case 4:
                    this.attackValue = 13;
                    break;
                case 5:
                    this.attackValue = 13;
                    break;
                case 6:
                    this.attackValue = 14;
                    break;
                case 7:
                    this.attackValue = 15;
                    break;
                case 8:
                    this.attackValue = 15;
                    break;
                case 9:
                    this.attackValue = 16;
                    break;
                case 10:
                    this.attackValue = 17;
                    break;
            }
        } else if (this.characterClass == 'Wise') {
            switch(this.level) {
                case 1:
                    this.attackValue = 10;
                    break;
                case 2:
                    this.attackValue = 11;
                    break;
                case 3:
                    this.attackValue = 11;
                    break;
                case 4:
                    this.attackValue = 11;
                    break;
                case 5:
                    this.attackValue = 12;
                    break;
                case 6:
                    this.attackValue = 12;
                    break;
                case 7:
                    this.attackValue = 12;
                    break;
                case 8:
                    this.attackValue = 13;
                    break;
                case 9:
                    this.attackValue = 13;
                    break;
                case 10:
                    this.attackValue = 13;
                    break;
            }
        }
    }

    updateSavingThrow() {
        if (this.characterClass == 'Deft') {
            switch(this.level) {
                case 1:
                    this.savingThrow = 7;
                    break;
                case 2:
                    this.savingThrow = 8;
                    break;
                case 3:
                    this.savingThrow = 9;
                    break;
                case 4:
                    this.savingThrow = 10;
                    break;
                case 5:
                    this.savingThrow = 11;
                    break;
                case 6:
                    this.savingThrow = 12;
                    break;
                case 7:
                    this.savingThrow = 13;
                    break;
                case 8:
                    this.savingThrow = 14;
                    break;
                case 9:
                    this.savingThrow = 15;
                    break;
                case 10:
                    this.savingThrow = 16;
                    break;
            }
        } else if (this.characterClass == 'Strong') {
            switch(this.level) {
                case 1:
                    this.savingThrow = 5;
                    break;
                case 2:
                    this.savingThrow = 6;
                    break;
                case 3:
                    this.savingThrow = 7;
                    break;
                case 4:
                    this.savingThrow = 8;
                    break;
                case 5:
                    this.savingThrow = 9;
                    break;
                case 6:
                    this.savingThrow = 10;
                    break;
                case 7:
                    this.savingThrow = 11;
                    break;
                case 8:
                    this.savingThrow = 12;
                    break;
                case 9:
                    this.savingThrow = 13;
                    break;
                case 10:
                    this.savingThrow = 14;
                    break;
            }
        } else if (this.characterClass == 'Wise') {
            switch(this.level) {
                case 1:
                    this.savingThrow = 6;
                    break;
                case 2:
                    this.savingThrow = 7;
                    break;
                case 3:
                    this.savingThrow = 8;
                    break;
                case 4:
                    this.savingThrow = 9;
                    break;
                case 5:
                    this.savingThrow = 10;
                    break;
                case 6:
                    this.savingThrow = 11;
                    break;
                case 7:
                    this.savingThrow = 12;
                    break;
                case 8:
                    this.savingThrow = 13;
                    break;
                case 9:
                    this.savingThrow = 14;
                    break;
                case 10:
                    this.savingThrow = 15;
                    break;
            }
        }
    }

    updateSlots() {
        if (this.characterClass == 'Deft') {
            switch(this.level) {
                case 1:
                    this.slots = 1;
                    break;
                case 2:
                    this.slots = 1;
                    break;
                case 3:
                    this.slots = 1;
                    break;
                case 4:
                    this.slots = 2;
                    break;
                case 5:
                    this.slots = 2;
                    break;
                case 6:
                    this.slots = 2;
                    break;
                case 7:
                    this.slots = 3;
                    break;
                case 8:
                    this.slots = 3;
                    break;
                case 9:
                    this.slots = 3;
                    break;
                case 10:
                    this.slots = 4;
                    break;
            }
        } else if (this.characterClass == 'Strong') {
            switch(this.level) {
                case 1:
                    this.slots = 1;
                    break;
                case 2:
                    this.slots = 1;
                    break;
                case 3:
                    this.slots = 1;
                    break;
                case 4:
                    this.slots = 2;
                    break;
                case 5:
                    this.slots = 2;
                    break;
                case 6:
                    this.slots = 2;
                    break;
                case 7:
                    this.slots = 3;
                    break;
                case 8:
                    this.slots = 3;
                    break;
                case 9:
                    this.slots = 3;
                    break;
                case 10:
                    this.slots = 4;
                    break;
            }
        } else if (this.characterClass == 'Wise') {
            switch(this.level) {
                case 1:
                    this.slots = 1;
                    break;
                case 2:
                    this.slots = 1;
                    break;
                case 3:
                    this.slots = 2;
                    break;
                case 4:
                    this.slots = 2;
                    break;
                case 5:
                    this.slots = 3;
                    break;
                case 6:
                    this.slots = 3;
                    break;
                case 7:
                    this.slots = 4;
                    break;
                case 8:
                    this.slots = 4;
                    break;
                case 9:
                    this.slots = 5;
                    break;
                case 10:
                    this.slots = 5;
                    break;
            }
        }
    }
    
    updateGroups() {
        if (this.characterClass == 'Deft') {
            switch(this.level) {
                case 1:
                    this.groups = 2;
                    break;
                case 2:
                    this.groups = 2;
                    break;
                case 3:
                    this.groups = 3;
                    break;
                case 4:
                    this.groups = 3;
                    break;
                case 5:
                    this.groups = 4;
                    break;
                case 6:
                    this.groups = 4;
                    break;
                case 7:
                    this.groups = 5;
                    break;
                case 8:
                    this.groups = 5;
                    break;
                case 9:
                    this.groups = 6;
                    break;
                case 10:
                    this.groups = 6;
                    break;
            }
        } else if (this.characterClass == 'Strong') {
            switch(this.level) {
                case 1:
                    this.groups = 2;
                    break;
                case 2:
                    this.groups = 2;
                    break;
                case 3:
                    this.groups = 2;
                    break;
                case 4:
                    this.groups = 3;
                    break;
                case 5:
                    this.groups = 3;
                    break;
                case 6:
                    this.groups = 3;
                    break;
                case 7:
                    this.groups = 4;
                    break;
                case 8:
                    this.groups = 4;
                    break;
                case 9:
                    this.groups = 4;
                    break;
                case 10:
                    this.groups = 5;
                    break;
            }
        } else if (this.characterClass == 'Wise') {
            switch(this.level) {
                case 1:
                    this.groups = 2;
                    break;
                case 2:
                    this.groups = 2;
                    break;
                case 3:
                    this.groups = 2;
                    break;
                case 4:
                    this.groups = 3;
                    break;
                case 5:
                    this.groups = 3;
                    break;
                case 6:
                    this.groups = 3;
                    break;
                case 7:
                    this.groups = 4;
                    break;
                case 8:
                    this.groups = 4;
                    break;
                case 9:
                    this.groups = 4;
                    break;
                case 10:
                    this.groups = 5;
                    break;
            }
        }
    }

    increaseLevel() {
        if (this.level == 10) {
            this.level = 10;
        } else {
            this.level = this.level + 1;
        }

        this.updateHitPoints();
        this.updateAttackValue();
        this.updateSavingThrow();
        this.updateSlots();
        this.updateGroups();
    }

    decreaseLevel() {
        if (this.level == 1) {
            this.level = 1;
        } else {
            this.level = this.level - 1;
        }

        this.updateHitPoints();
        this.updateAttackValue();
        this.updateSavingThrow();
        this.updateSlots();
        this.updateGroups();
    }
}

function d(size, count) {
    let faces = Array.from(new Array(size), (x, i) => i + 1);
    let sum = 0;
    for (let i = 0; i < count; i++) {
        sum = sum + faces.random();
    }

    return sum;
}

function generateStat() {
    return d(6, 3);
}

function generateName() {
    var names = [
        'A',
        'B',
        'C'
    ];

    return names.random();
}

function generateClass() {
    var classes = [
        'Deft',
        'Strong',
        'Wise',
    ];

    return classes.random();
}

function generateVocation() {
    var vocations = [
        'A',
        'B',
        'C',
    ];

    return vocations.random();
}

function generateHitPoints(characterClass, level) {
    if (characterClass == 'Deft') {
        switch(level) {
            case 1:
                return d(6, 1);
            case 2:
                return d(6, 2);
            case 3:
                return d(6, 2) + 1;
            case 4:
                return d(6, 3);
            case 5:
                return d(6, 3) + 1;
            case 6:
                return d(6, 4);
            case 7:
                return d(6, 4) + 1;
            case 8:
                return d(6, 5);
            case 9:
                return d(6, 5) + 1;
            case 10:
                return d(6, 6);
        }
    } else if (characterClass = 'Strong') {
        switch(level) {
            case 1:
                return d(6, 1) + 2;
            case 2:
                return d(6, 2);
            case 3:
                return d(6, 3);
            case 4:
                return d(6, 4);
            case 5:
                return d(6, 5);
            case 6:
                return d(6, 6);
            case 7:
                return d(6, 7);
            case 8:
                return d(6, 8);
            case 9:
                return d(6, 9);
            case 10:
                return d(6, 10);
        }
    } else if (characterClass = 'Wise') {
        switch(level) {
            case 1:
                return d(6, 1) + 1;
            case 2:
                return d(6, 2);
            case 3:
                return d(6, 2) + 1;
            case 4:
                return d(6, 3);
            case 5:
                return d(6, 4);
            case 6:
                return d(6, 4) + 1;
            case 7:
                return d(6, 5);
            case 8:
                return d(6, 6);
            case 9:
                return d(6, 6) + 1;
            case 10:
                return d(6, 7);
        }
    }
}

// Instantiate a new character on pageload.
var character = new Character;

// Tie the character object to a Vue instance.
var app = new Vue({
    el: '#app',
    data: character,
    methods: {
        // Define a method to create a new character.
        generateCharacter: function() {
            character.regenerate();
        },
        increaseLevel: function() {
            character.increaseLevel();
        },
        decreaseLevel: function() {
            character.decreaseLevel();
        }
    }
})