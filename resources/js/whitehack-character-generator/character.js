import {
    affiliations,
    attunementsItems,
    attunementsOther,
    abilities,
    miracles,
    vocations,
    armors,
    weapons,
    items,
    namesPrefixes,
    namesPrimary,
    namesSuffixes,
    appearances,
    appearancesHair,
    appearancesBuild,
    quirks,
 } from "./data";

// Create prototype function on arrays to allow for inline random selection of one element.
Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
}

// Create prototype function on arrays to shuffle the order of their elements and return it as a new array.
// This implements the Fisher-Yates shuffle algorithm.
Array.prototype.shuffle = function() {
    let newArray = this;
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }

    return newArray;
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

export class Character {
    constructor() {
        this.generate();
    }

    generate() {
        // Attribute scores.
        this.attributes = {
            strength: {
                name: "Strength",
                abbreviation: "STR",
                score: 0,
                groups: [],
            },
            dexterity: {
                name: "Dexterity",
                abbreviation: "DEX",
                score: 0,
                groups: [],
            },
            constitution: {
                name: "Constitution",
                abbreviation: "CON",
                score: 0,
                groups: [],
            },
            intelligence: {
                name: "Intelligence",
                abbreviation: "INT",
                score: 0,
                groups: [],
            },
            wisdom: {
                name: "Wisdom",
                abbreviation: "WIS",
                score: 0,
                groups: [],
            },
            charisma: {
                name: "Charisma",
                abbreviation: "CHA",
                score: 0,
                groups: [],
            },
        };

        // Vital statistics.
        this.level = 1;
        this.xp = 0;
        this.characterClass = null;

        this.hitPoints = 0;
        this.hitDice = {
            base: 0,
            bonus: 0,
        };

        this.attackValue = 0;
        this.savingThrow = 0;
        this.armorClass = 0;

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

        this.inventory = [];

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

        this.updateName();

        this.updateQuirks();
        this.updateInventory();
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
        this.attributes.strength.score = d(6, 3);
        this.attributes.dexterity.score = d(6, 3);
        this.attributes.constitution.score = d(6, 3);
        this.attributes.intelligence.score = d(6, 3);
        this.attributes.wisdom.score = d(6, 3);
        this.attributes.charisma.score = d(6, 3);
    }

    generateClass() {
        var classes = [
            "Deft",
            "Strong",
            "Wise",
            // "Brave",
            // "Fortunate",
        ];

        this.characterClass = classes.random();
    }

    updateHitDice() {
        // Calculate base HD based on class and level.
        if (this.characterClass == "Deft") {
            this.hitDice.base = Math.floor(this.level / 2) + 1;
        } else if (this.characterClass == "Strong") {
            this.hitDice.base = this.level;
        } else if (this.characterClass == "Wise") {
            this.hitDice.base = Math.floor((this.level + 1) / 1.5);
        } else if (this.characterClass == "Brave") {
            this.hitDice.base = this.level;
        } else if (this.characterClass == "Fortunate") {
            this.hitDice.base = Math.floor(this.level / 2) + 1;
        }

        // Calculate any bonus to HP based on class and level.
        if (this.characterClass == "Deft") {
            this.hitDice.bonus = (this.level > 1 ? this.level % 2 : 0);
        } else if (this.characterClass == "Strong") {
            this.hitDice.bonus = (this.level == 1 ? 2 : 0);
        } else if (this.characterClass == "Wise") {
            if (this.level == 1 || this.level == 3 || this.level == 6 || this.level == 9) {
                this.hitDice.bonus = 1;
            } else {
                this.hitDice.bonus = 0;
            }
        } else if (this.characterClass == "Brave") {
            this.hitDice.bonus = 0;
        } else if (this.characterClass == "Fortunate") {
            this.hitDice.bonus = (this.level > 1 ? this.level % 2 : 0);
        }
    }

    updateHitPoints() {
        let newHitPoints = d(6, this.hitDice.base) + this.hitDice.bonus;
        if (this.characterClass == "Strong" && this.attributes.constitution.score >= 16) {
            newHitPoints += 2;
        } else if (this.characterClass == "Strong" && this.attributes.constitution.score >= 13) {
            newHitPoints += 1;
        }

        if (newHitPoints > this.hitPoints) {
            this.hitPoints = newHitPoints;
        }
    }

    updateAttackValue() {
        // Calculate attack value based on class and level.
        if (this.characterClass == "Deft") {
            this.attackValue = Math.floor(this.level / 2) + 10;
        } else if (this.characterClass == "Strong") {
            this.attackValue = Math.floor((this.level - 1) / 1.5) + 11;
        } else if (this.characterClass == "Wise") {
            this.attackValue = Math.floor((this.level + 1) / 3) + 10;
        } else if (this.characterClass == "Brave") {
            this.attackValue = Math.floor((this.level + 1) / 3) + 10;
        } else if (this.characterClass == "Fortunate") {
            this.attackValue = Math.floor((this.level - 1) / 3) + 10;
        }

        // Calculate any bonus to AV based on high strength (Strong only).
        if (this.characterClass == "Strong" && this.attributes.strength.score >= 13) {
            this.attackValue += 1;
        }
    }

    updateSavingThrow() {
        // Calculate saving throw based on class and level.
        if (this.characterClass == "Deft") {
            this.savingThrow = this.level + 6;
        } else if (this.characterClass == "Strong") {
            this.savingThrow = this.level + 4;
        } else if (this.characterClass == "Wise") {
            this.savingThrow = this.level + 5;
        } else if (this.characterClass == "Brave") {
            this.savingThrow = this.level + 8;
        } else if (this.characterClass == "Fortunate") {
            this.savingThrow = this.level + 5;
        }
    }

    updateSlotCount() {
        // Calculate number of slots based on class and level.
        if (this.characterClass == "Deft") {
            this.slots.count = Math.floor((this.level + 2) / 3);
        } else if (this.characterClass == "Strong") {
            this.slots.count = Math.floor((this.level + 2) / 3);
        } else if (this.characterClass == "Wise") {
            this.slots.count = Math.floor((this.level + 1) / 2);
        } else if (this.characterClass == "Brave") {
            this.slots.count = Math.floor((this.level + 2) / 3);
        } else if (this.characterClass == "Fortunate") {
            this.slots.count = Math.floor((this.level + 2) / 3);
        }

        // Calculate any bonus slots for high wisdom (Wise only).
        if (this.characterClass == "Wise" && this.attributes.wisdom.score >= 16) {
            this.slots.bonusInactiveCount = 2;
        } else if (this.characterClass == "Wise" && this.attributes.wisdom.score >= 13) {
            this.slots.bonusInactiveCount = 1;
        } else {
            this.slots.bonusInactiveCount = 0;
        }
    }

    updateSlots() {
        if (this.characterClass == "Deft") {
            this.slots.type = "Attunements";
            let remainingAttunements = 2 * this.slots.count;
            while (remainingAttunements > 0) {
                // Randomly select either an item or something else.
                if (d(2, 1) == 1) {
                    let randomAttunement = attunementsItems.random();

                    if (this.slots.attunements.includes(randomAttunement)) {
                        // Ensure same attunement isn"t selected more than once.
                        continue;
                    } else {
                        // If the attunement is new, add it to the list.
                        this.slots.attunements.push(randomAttunement);
                        remainingAttunements--;

                        // Since it's an item, add it to the inventory.
                        this.inventory.push(randomAttunement);
                    }
                } else {
                    let randomAttunement = attunementsOther.random();

                    if (this.slots.attunements.includes(randomAttunement)) {
                        // Ensure same attunement isn"t selected more than once.
                        continue;
                    } else {
                        // If the attunement is new, add it to the list.
                        this.slots.attunements.push(randomAttunement);
                        remainingAttunements--;
                    }

                }
            }
        } else if (this.characterClass == "Strong") {
            this.slots.type = "Abilities";
            let remainingAbilities = this.slots.count;
            while (remainingAbilities > 0) {
                // Randomly select an ability.
                let randomAbility = abilities.random();

                if (this.slots.abilities.includes(randomAbility)) {
                    // Ensure same ability isn"t selected more than once.
                    continue;
                } else {
                    // If the ability is new, add it to the list.
                    this.slots.abilities.push(randomAbility);
                    remainingAbilities--;
                }
            }
        } else if (this.characterClass == "Wise") {
            this.slots.type = "Miracles";
            let remainingMiracles = 2 * this.slots.count + this.slots.bonusInactiveCount; // Wise may get extra slots for high wisdom scores.
            while (remainingMiracles > 0) {
                // Randomly select an miracle.
                let randomMiracle = miracles.random();

                if (this.slots.miracles.includes(randomMiracle)) {
                    // Ensure same miracle isn"t selected more than once.
                    continue;
                } else {
                    // If the miracle is new, add it to the list.
                    this.slots.miracles.push(randomMiracle);
                    remainingMiracles--;
                }
            }
        }
    }

    updateGroupCount() {
        // Calculate number of groups based on class and level.
        if (this.characterClass == "Deft") {
            this.groups.count = Math.floor((this.level + 3) / 2);
        } else if (this.characterClass == "Strong") {
            this.groups.count = Math.floor((this.level + 5) / 3);
        } else if (this.characterClass == "Wise") {
            this.groups.count = Math.floor((this.level + 5) / 3);
        } else if (this.characterClass == "Brave") {
            this.groups.count = Math.floor((this.level + 3) / 4);
        } else if (this.characterClass == "Fortunate") {
            this.groups.count = Math.floor((this.level + 3) / 2);
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

    updateVocation() {
        this.vocation = vocations.random();

        // Unless character is Deft, the vocation is tied to a specific attribute.
        if (this.characterClass != "Deft") {
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
            let randomAffiliation = affiliations.random();
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

    updateName(allowPrefix = true, allowSuffix = true) {
        let name = "";

        // A name can have a prefix or a suffix, but not both.
        let randomNum = Math.random();
        if (allowPrefix && randomNum < 0.3) {
            var usePrefix = true;
        } else if (allowSuffix && randomNum > 0.7) {
            var useSuffix = true;
        }

        // Random chance for a prefix.
        if (usePrefix) {
            name += namesPrefixes.random() + ' ';
        }

        // Everyone has at least a regular old first name.
        name += namesPrimary.random();

        // Random chance for a suffix.
        if (useSuffix) {
            name += ' ' + namesSuffixes.random();
        }

        this.name = name;
    }

    getAppearances(maxNum = 3) {
        // Generate 1 to maxNum random appearance traits.
        let temp = [];
        let count = d(maxNum, 1);
        for (let i = 0; i < count; i++) {
            let appearance;
            if (i == 0) {
                appearance = appearancesHair.random();
                while (temp.includes(appearance)) {
                    appearance = appearancesHair.random()
                }
            } else if (i == 1) {
                appearance = appearancesBuild.random();
                while (temp.includes(appearance)) {
                    appearance = appearancesBuild.random()
                }
            } else {
                appearance = appearances.random();
                while (temp.includes(appearance)) {
                    appearance = appearances.random()
                }
            }

            temp.push(appearance);
        }

        return temp;
    }

    getPersonalities(maxNum = 3) {
        // Generate 1 to maxNum random personality traits.
        let temp = [];
        let count = d(maxNum, 1);
        for (let i = 0; i < count; i++) {
            let personality = personalities.random();
            while (temp.includes(personality)) {
                personality = personalities.random()
            }

            temp.push(personality);
        }

        return temp;
    }

    getBackgrounds(maxNum = 3) {
        // Generate 1 to maxNum random bits of background.
        let temp = [];
        let count = d(3, 1);
        for (let i = 0; i < count; i++) {
            let background = backgrounds.random();
            while (temp.includes(background)) {
                background = backgrounds.random()
            }

            temp.push(background);
        }

        return temp;
    }

    getQuirks(maxNum = 3) {
        // Generate 1 to maxNum random quirks.
        let temp = [];
        let count = d(3, 1);
        for (let i = 0; i < count; i++) {
            let quirk = quirks.random();
            while (temp.includes(quirk)) {
                quirk = quirks.random();
            }

            temp.push(quirk);
        }

        return temp;
    }

    updateQuirks() {
        let temp = [];
        temp = temp.concat(this.getAppearances(3));
        temp = temp.concat(this.getQuirks(3));

        this.quirks = [...new Set(temp)].shuffle(); // Convert to a set (to filter out duplicate values) then back to an array.
    }

    updateInventory() {
        // Everyone gets some basic adventuring gear.
        this.inventory = this.inventory.concat([
            "Backpack",
            "Rations (3)",
            "Torch",
            "Flint & steel",
            "Rope",
            "Waterskin",
        ]);

        // Add some armor that they're capable of wearing.
        let validArmors = armors.filter(armor => armor.allowedClasses.includes(this.characterClass));

        let armor = validArmors.random();
        this.inventory.push(armor.name);
        this.armorClass = armor.armorClass;

        // Add a weapon they can use.
        let validWeapons = weapons.filter(weapon => weapon.allowedClasses.includes(this.characterClass));

        let weapon = validWeapons.random();
        this.inventory.push(weapon.name);

        this.inventory = [...new Set(this.inventory)].shuffle(); // Convert to a set (to filter out duplicate values) then back to an array.
    }
}