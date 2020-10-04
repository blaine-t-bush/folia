class Character {
    constructor() {
        this.generate();
    }

    generate() {
        // Attribute scores.
        this.attributes = {
            strength: {
                name: 'Strength',
                score: 0,
                groups: [],
            },
            dexterity: {
                name: 'Dexterity',
                score: 0,
                groups: [],
            },
            constitution: {
                name: 'Constitution',
                score: 0,
                groups: [],
            },
            intelligence: {
                name: 'Intelligence',
                score: 0,
                groups: [],
            },
            wisdom: {
                name: 'Wisdom',
                score: 0,
                groups: [],
            },
            charisma: {
                name: 'Charisma',
                score: 0,
                groups: [],
            },
        };

        // Vital statistics.
        this.level = 1;
        this.characterClass = null;
        
        this.hitPoints = 0;
        this.hitDice = {
            base: 0,
            bonus: 0,
        };

        this.attackValue = 0;
        this.savingThrow = 0;
        this.armorClass  = 0;
        // this.moveSpeed = 30; // TODO update species to include move speed.

        // Class slots.
        this.slots = {
            type: null,
            count: 0,
            bonusInactiveCount: 0,
            attunements: [],
            abilities: [],
            miracles: [],
        };

        // Groups: vocation, species, and affiliations.
        this.groups = {
            count: 0,
            bonusCount: 0,
            vocation: null,
            species: null,
            affiliations: [],
        };

        // Equipment and wealth.
        this.equipment = [];
        this.wealth = {
            starting: 0,
            current: 0,
        };
        
        // TODO determine slots.
        // TODO add optional species group.
        // TODO add equipment.
        // TODO add languages.
        this.generateAttributes();
        this.generateClass();
        this.updateHitDice();
        this.updateHitPoints();
        this.updateAttackValue();
        this.updateSavingThrow();
        this.updateSlotCount();
        this.updateSlots();
        this.updateGroupCount();
        this.updateVocation();
        this.updateAffiliations();
        this.generateWealth();
        this.updateName();
    }

    increaseLevel() {
        if (this.level < 10) {
            this.level = this.level + 1;
            this.updateHitPoints();
            this.updateAttackValue();
            this.updateSavingThrow();
            this.updateSlots();
            this.updateGroups();
        }
    }

    decreaseLevel() {
        if (this.level > 1) {
            this.level = this.level - 1;
            this.updateHitPoints();
            this.updateAttackValue();
            this.updateSavingThrow();
            this.updateSlots();
            this.updateGroups();
        }
    }

    generateWealth() {
        this.wealth.starting = this.wealth.current = 10 * d(6, 3);
    }

    generateAttributes() {
        // Roll 3d6 for each attribute to determine its score.
        this.attributes.strength.score     = d(6, 3);
        this.attributes.dexterity.score    = d(6, 3);
        this.attributes.constitution.score = d(6, 3);
        this.attributes.intelligence.score = d(6, 3);
        this.attributes.wisdom.score       = d(6, 3);
        this.attributes.charisma.score     = d(6, 3);
    }

    generateClass() {
        var classes = [
            'Deft',
            'Strong',
            'Wise',
            // 'Brave',
            // 'Fortunate',
        ];

        this.characterClass = classes.random();
    }

    updateHitDice() {
        // Calculate base HD based on class and level.
        if (this.characterClass == 'Deft') {
            this.hitDice.base = Math.floor(this.level/2) + 1;
        } else if (this.characterClass == 'Strong') {
            this.hitDice.base  = this.level;
        } else if (this.characterClass == 'Wise') {
            this.hitDice.base = Math.floor((this.level + 1)/1.5);
        } else if (this.characterClass == 'Brave') {
            this.hitDice.base = this.level;
        } else if (this.characterClass == 'Fortunate') {
            this.hitDice.base = Math.floor(this.level/2) + 1;
        }

        // Calculate any bonus to HP based on class and level.
        if (this.characterClass == 'Deft') {
            this.hitDice.bonus = (this.level > 1 ? this.level % 2 : 0);
        } else if (this.characterClass == 'Strong') {
            this.hitDice.bonus = (this.level == 1 ? 2 : 0);
        } else if (this.characterClass == 'Wise') {
            if (this.level == 1 || this.level == 3 || this.level == 6 || this.level == 9) {
                this.hitDice.bonus = 1;
            } else {
                this.hitDice.bonus = 0;
            }
        } else if (this.characterClass == 'Brave') {
            this.hitDice.bonus = 0;
        } else if (this.characterClass == 'Fortunate') {
            this.hitDice.bonus = (this.level > 1 ? this.level % 2 : 0);
        }
    }

    updateHitPoints() {
        let newHitPoints = d(6, this.hitDice.base) + this.hitDice.bonus;
        if (this.characterClass == 'Strong' && this.attributes.constitution.score >= 16) {
            newHitPoints += 2;
        } else if (this.characterClass == 'Strong' && this.attributes.constitution.score >= 13) {
            newHitPoints += 1;
        }

        if (newHitPoints > this.hitPoints) {
            this.hitPoints = newHitPoints;
        }
    }

    updateAttackValue() {
        // Calculate attack value based on class and level.
        if (this.characterClass == 'Deft') {
            this.attackValue = Math.floor(this.level/2) + 10;
        } else if (this.characterClass == 'Strong') {
            this.attackValue = Math.floor((this.level - 1)/1.5) + 11;
        } else if (this.characterClass == 'Wise') {
            this.attackValue = Math.floor((this.level + 1)/3) + 10;
        } else if (this.characterClass == 'Brave') {
            this.attackValue = Math.floor((this.level + 1)/3) + 10;
        } else if (this.characterClass == 'Fortunate') {
            this.attackValue = Math.floor((this.level - 1)/3) + 10;
        }

        // Calculate any bonus to AV based on high strength (Strong only).
        if (this.characterClass == 'Strong' && this.attributes.strength.score >= 13) {
            this.attackValue += 1;
        }
    }

    updateSavingThrow() {
        // Calculate saving throw based on class and level.
        if (this.characterClass == 'Deft') {
            this.savingThrow = this.level + 6;
        } else if (this.characterClass == 'Strong') {
            this.savingThrow = this.level + 4;
        } else if (this.characterClass == 'Wise') {
            this.savingThrow = this.level + 5;
        } else if (this.characterClass == 'Brave') {
            this.savingThrow = this.level + 8;
        } else if (this.characterClass == 'Fortunate') {
            this.savingThrow = this.level + 5;
        }
    }

    updateSlotCount() {
        // Calculate number of slots based on class and level.
        if (this.characterClass == 'Deft') {
            this.slots.count = Math.floor((this.level + 2)/3);
        } else if (this.characterClass == 'Strong') {
            this.slots.count = Math.floor((this.level + 2)/3);
        } else if (this.characterClass == 'Wise') {
            this.slots.count = Math.floor((this.level + 1)/2);
        } else if (this.characterClass == 'Brave') {
            this.slots.count = Math.floor((this.level + 2)/3);
        } else if (this.characterClass == 'Fortunate') {
            this.slots.count = Math.floor((this.level + 2)/3);
        }

        // Calculate any bonus slots for high wisdom (Wise only).
        if (this.characterClass == 'Wise' && this.attributes.wisdom.score >= 16) {
            this.slots.bonusInactiveCount = 2;
        } else if (this.characterClass == 'Wise' && this.attributes.wisdom.score >= 16) {
            this.slots.bonusInactiveCount = 1;
        } else {
            this.slots.bonusInactiveCount = 0;
        }
    }

    updateSlots() {
        if (this.characterClass == 'Deft') {
            this.slots.type = 'Attunements';
            let remainingAttunements = 2*this.slots.count;
            while (remainingAttunements > 0) {
                // Randomly select an attunement.
                let randomAttunement = this.getAttunement();

                if (this.slots.attunements.includes(randomAttunement)) { 
                    // Ensure same attunement isn't selected more than once.
                    continue;
                } else {
                    // If the attunement is new, add it to the list.
                    this.slots.attunements.push(randomAttunement);
                    remainingAttunements--;
                }
            }
        } else if (this.characterClass == 'Strong') {
            this.slots.type = 'Abilities';
            let remainingAbilities = this.slots.count;
            while (remainingAbilities > 0) {
                // Randomly select an ability.
                let randomAbility = this.getAbility();

                if (this.slots.abilities.includes(randomAbility)) { 
                    // Ensure same ability isn't selected more than once.
                    continue;
                } else {
                    // If the ability is new, add it to the list.
                    this.slots.abilities.push(randomAbility);
                    remainingAbilities--;
                }
            }
        } else if (this.characterClass == 'Wise') {
            this.slots.type = 'Miracles';
            let remainingMiracles = 2*this.slots.count + this.slots.bonusInactiveCount; // Wise may get extra slots for high wisdom scores.
            while (remainingMiracles > 0) {
                // Randomly select an miracle.
                let randomMiracle = this.getMiracle();

                if (this.slots.miracles.includes(randomMiracle)) { 
                    // Ensure same miracle isn't selected more than once.
                    continue;
                } else {
                    // If the miracle is new, add it to the list.
                    this.slots.miracles.push(randomMiracle);
                    remainingMiracles--;
                }
            }
        }
    }

    getAttunement() {
        let attunements = [
            'Attunement 1',
            'Attunement 2',
            'Attunement 3',
            'Attunement 4',
            'Attunement 5',
            'Attunement 6',
        ];

        return attunements.random();
    }

    getAbility() {
        let abilities = [
            'Ability 1',
            'Ability 2',
            'Ability 3',
        ];

        return abilities.random();
    }

    getMiracle() {
        let attunements = [
            'Miracle 1',
            'Miracle 2',
            'Miracle 3',
            'Miracle 4',
            'Miracle 5',
            'Miracle 6',
            'Miracle 7',
        ];

        return attunements.random();
    }

    updateGroupCount() {
        // Calculate number of groups based on class and level.
        if (this.characterClass == 'Deft') {
            this.groups.count = Math.floor((this.level + 3)/2);
        } else if (this.characterClass == 'Strong') {
            this.groups.count = Math.floor((this.level + 5)/3);
        } else if (this.characterClass == 'Wise') {
            this.groups.count = Math.floor((this.level + 5)/3);
        } else if (this.characterClass == 'Brave') {
            this.groups.count = Math.floor((this.level + 3)/4);
        } else if (this.characterClass == 'Fortunate') {
            this.groups.count = Math.floor((this.level + 3)/2);
        }

        // Calculate number of bonus groups, if any, for low attribute scores.
        // For each attribute of score 5 or lower, character gains a bonus group.
        this.groups.bonusCount = 0;
        for (var attribute in this.attributes) {
            if (this.attributes[attribute].score <= 5) {
                this.groups.bonusCount += 1;
            }
        }
    }

    updateName() {
        let names = [
            'Name 1',
            'Name 2',
            'Name 3',
        ];

        this.name = names.random();
    }

    updateVocation() {
        // Choose a vocation at random.
        let vocations = [
            'Vocation 1',
            'Vocation 2',
            'Vocation 3',
        ];

        this.vocation = vocations.random();

        // Unless character is Deft, the vocation is tied to a specific attribute.
        if (this.characterClass != 'Deft') {
            let randomAttributeNum = d(6, 1);
            if (randomAttributeNum == 1) {
                this.attributes.strength.groups.push(this.vocation);
            } else if (randomAttributeNum == 2) {
                this.attributes.dexterity.groups.push(this.vocation);
            } else if (randomAttributeNum == 3) {
                this.attributes.constitution.groups.push(this.vocation);
            } else if (randomAttributeNum == 4) {
                this.attributes.intelligence.groups.push(this.vocation);
            } else if (randomAttributeNum == 5) {
                this.attributes.wisdom.groups.push(this.vocation);
            } else if (randomAttributeNum == 6) {
                this.attributes.charisma.groups.push(this.vocation);
            }
        }
    }

    updateAffiliations() {
        // First, get the total number of groups, add any bonus groups for low attribute scores, and subtract 1
        // for the vocation that every character has to select.
        // Then randomly assign one at a time until that number has been met.
        // However, make sure that no one attribute has more than 2 groups on it.
        let remainingAffiliationGroups = this.groups.count + this.groups.bonusCount - 1;

        while (remainingAffiliationGroups > 0) {
            let randomAttributeNum = d(6, 1);
            let randomAffiliation = this.getAffiliation();
            if (this.groups.affiliations.includes(randomAffiliation)) {
                continue;
            }

            if (randomAttributeNum == 1 && this.attributes.strength.groups.length < 2) {
                this.attributes.strength.groups.push(randomAffiliation);
            } else if (randomAttributeNum == 2 && this.attributes.dexterity.groups.length < 2) {
                this.attributes.dexterity.groups.push(randomAffiliation);
            } else if (randomAttributeNum == 3 && this.attributes.constitution.groups.length < 2) {
                this.attributes.constitution.groups.push(randomAffiliation);
            } else if (randomAttributeNum == 4 && this.attributes.intelligence.groups.length < 2) {
                this.attributes.intelligence.groups.push(randomAffiliation);
            } else if (randomAttributeNum == 5 && this.attributes.wisdom.groups.length < 2) {
                this.attributes.wisdom.groups.push(randomAffiliation);
            } else if (randomAttributeNum == 6 && this.attributes.charisma.groups.length < 2) {
                this.attributes.charisma.groups.push(randomAffiliation);
            } else {
                continue;
            }

            this.groups.affiliations.push(randomAffiliation);
            remainingAffiliationGroups--;
        }
    }

    getAffiliation() {
        let affiliations = [
            'Affiliation 1',
            'Affiliation 2',
            'Affiliation 3',
            'Affiliation 4',
            'Affiliation 5',
            'Affiliation 6',
            'Affiliation 7',
        ];

        return affiliations.random();
    }

    buyArmor() {
        let armors = {
            cloth: {
                name: 'Cloth armor',
                armorClass: 1,
                weight: 10,
                cost: 10,
                allowedClasses: ['Deft', 'Strong', 'Wise'],
            },
            leather: {
                name: 'Leather armor',
                armorClass: 2,
                weight: 15,
                cost: 15,
                allowedClasses: ['Deft', 'Strong', 'Wise'],
            },
            studdedLeather: {
                name: 'Studded leather armor',
                armorClass: 3,
                weight: 20,
                cost: 20,
                allowedClasses: ['Deft', 'Strong'],
            },
            chainmail: {
                name: 'Chainmail',
                armorClass: 4,
                weight: 40,
                cost: 30,
                allowedClasses: ['Strong'],
            },
            splintMail: {
                name: 'Splint mail',
                armorClass: 5,
                weight: 50,
                cost: 40,
                allowedClasses: ['Strong'],
            },
            fullPlate: {
                name: 'Full plate',
                armorClass: 6,
                weight: 60,
                cost: 50,
                allowedClasses: ['Strong'],
            },
        };

        // TODO add shields to buyArmor().

        if (this.characterClass == 'Deft') {
            // Cloth, leather, or studded leather. No shield.
            // Determine which ones are within price range.
            if (this.goldPieces >= 20) {
                // All are within budget.
                var validArmors = [
                    armors.cloth,
                    armors.leather,
                    armors.studdedLeather,
                ];
            } else if (this.goldPieces >= 15) {
                // Leather and cloth are within budget.
                var validArmors = [
                    armors.cloth,
                    armors.leather,
                ];
            } else if (this.goldPieces >= 10) {
                // Cloth is within budget.
                var validArmors = [
                    armors.cloth,
                ];
            }
        } else if (this.characterClass == 'Strong') {
            // Cloth, leather, studded leather, chainmail, splint mail, full plate. Shield allowed.
            // Determine which ones are within price range.
            if (this.goldPieces >= 60) {
                // All are within budget.
                var validArmors = [
                    armors.cloth,
                    armors.leather,
                    armors.studdedLeather,
                    armors.chainmail,
                    armors.splintMail,
                    armors.fullPlate,
                ];
            } else if (this.goldPieces >= 50) {
                // All are within budget.
                var validArmors = [
                    armors.cloth,
                    armors.leather,
                    armors.studdedLeather,
                    armors.chainmail,
                    armors.splintMail,
                ];
            } else if (this.goldPieces >= 40) {
                // All are within budget.
                var validArmors = [
                    armors.cloth,
                    armors.leather,
                    armors.studdedLeather,
                    armors.chainmail,
                ];
            } else if (this.goldPieces >= 20) {
                // All are within budget.
                var validArmors = [
                    armors.cloth,
                    armors.leather,
                    armors.studdedLeather,
                ];
            } else if (this.goldPieces >= 15) {
                // Leather and cloth are within budget.
                var validArmors = [
                    armors.cloth,
                    armors.leather,
                ];
            } else if (this.goldPieces >= 10) {
                // Cloth is within budget.
                var validArmors = [
                    armors.cloth,
                ];
            }
        } else if (this.characterClass == 'Wise') {
            // Cloth, leather. No shield.
            // Determine which ones are within price range.
            if (this.goldPieces >= 15) {
                // Leather and cloth are within budget.
                var validArmors = [
                    armors.cloth,
                    armors.leather,
                ];
            } else if (this.goldPieces >= 10) {
                // Cloth is within budget.
                var validArmors = [
                    armors.cloth,
                ];
            }
        }

        // Determine which weapons are within budget and allowed by character class.
        var validArmor = [];

        for (let key in armors) {
            let armor = armors[key];
            if (this.goldPieces >= armor.cost && armor.allowedClasses.includes(this.characterClass)) {
                validArmors.push(armor);
            }
        }

        // Choose one in-budget armor at random.
        let armor = validArmors.random();

        this.armor = armor.name;
        this.armorClass = armor.armorClass;
        this.goldPieces -= armor.cost;
        this.weight += armor.weight;
    }

    buyWeapon() {
        // Define all possible weapons.
        let weapons = {
            axe: {
                name: 'Axe',
                damage: '1d6+1',
                weight: 6,
                cost: 10,
            },
            sword: {
                name: 'Sword',
                damage: '1d6+1',
                weight: 6,
                cost: 10,
            },
            club: {
                name: 'Club',
                damage: '1d6-2',
                weight: 3,
                cost: 0,
            },
            crossbow: {
                name: 'Crossbow',
                damage: '1d6+1',
                weight: 8,
                cost: 30,
            },
            dagger: {
                name: 'Dagger',
                damage: '1d6-2',
                weight: 1,
                cost: 3,
            },
            darts: {
                name: 'Darts (10)',
                damage: '1',
                weight: 3,
                cost: 10,
            },
            flail: {
                name: 'Flail',
                damage: '1d6',
                weight: 9,
                cost: 8,
            },
            greatsword: {
                name: 'Greatsword',
                damage: '1d6+2',
                weight: 15,
                cost: 15,
            },
            battleAxe: {
                name: 'Battle axe',
                damage: '1d6+2',
                weight: 15,
                cost: 15,
            },
            halberd: {
                name: 'Halberd',
                damage: '1d6+1',
                weight: 20,
                cost: 10,
            },
            polearm: {
                name: 'Polearm',
                damage: '1d6+1',
                weight: 20,
                cost: 10,
            },
            javelin: {
                name: 'Javelins (5)',
                damage: '1d6',
                weight: 10,
                cost: 10,
            },
            longbow: {
                name: 'Longbow',
                damage: '1d6',
                weight: 5,
                cost: 40,
            },
            mace: {
                name: 'Mace',
                damage: '1d6',
                weight: 10,
                cost: 5,
            },
            warhammer: {
                name: 'Warhammer',
                damage: '1d6',
                weight: 10,
                cost: 5,
            },
            morningstar: {
                name: 'Morningstar',
                damage: '1d6',
                weight: 20,
                cost: 8,
            },
            musket: {
                name: 'Musket',
                damage: '1d6+2',
                weight: 10,
                cost: 150,
            },
            pistol: {
                name: 'Pistol',
                damage: '1d6+1',
                weight: 3,
                cost: 100,
            },
            quarterstaff: {
                name: 'Quarterstaff',
                damage: '1d6-1',
                weight: 4,
                cost: 1,
            },
            scimitar: {
                name: 'Scimitar',
                damage: '1d6',
                weight: 5,
                cost: 8,
            },
            shortbow: {
                name: 'Shortbow',
                damage: '1d6-1',
                weight: 4,
                cost: 25,
            },
            shortsword: {
                name: 'Shortsword',
                damage: '1d6',
                weight: 3,
                cost: 8,
            },
            sling: {
                name: 'Sling',
                damage: '1d6-2',
                weight: 0.5,
                cost: 2,
            },
            spear: {
                name: 'Spear',
                damage: '1d6',
                weight: 8,
                cost: 2,
            },
            throwingKnife: {
                name: 'Throwing Knives (2)',
                damage: '1d6-2',
                weight: 2,
                cost: 4,
            },
            throwingAxe: {
                name: 'Throwing Axes (2)',
                damage: '1d6-2',
                weight: 2,
                cost: 4,
            },
        };

        // Determine which weapons are within budget.
        var validWeapons = [];

        for (let key in weapons) {
            let weapon = weapons[key];
            if (this.goldPieces >= weapon.cost) {
                validWeapons.push(weapon);
            }
        }

        // Choose one in-budget weapon at random.
        let weapon = validWeapons.random();

        this.weapons.push(weapon);
        this.goldPieces -= weapon.cost;
        this.weight += weapon.weight;
    }
}
// Create prototype function on arrays to allow for inline random selection of one element.
Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
}

// Helper function for dice-rolling.
function d(size, count) {
    let faces = Array.from(new Array(size), (x, i) => i + 1);
    let sum = 0;
    for (let i = 0; i < count; i++) {
        sum = sum + faces.random();
    }

    return sum;
}

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
    el: '#app',
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