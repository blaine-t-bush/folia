import {
    abilities,
    affiliations,
    attunements,
    armors,
    classes,
    descriptors,
    items,
    languages,
    miracles,
    namesPrefixes,
    namesPrimary,
    namesSuffixes,
    species,
    vocations,
    weapons,
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
        this.speciesChance = 0.1; // Probability, out of 1, to assign a non-standard (i.e. non-human) species.
        this.shieldChance = 0.7; // Probability, out of 1, to give a shield to a Strong character.
        this.generate();
    }

    generate() {
        this.level = 1;
        this.xp = 0;
        this.inventory = [];
        this.languages = ["Common"];

        this.generateAttributes();
        this.generateClass();

        this.calculateHitDice();
        this.calculateHitPoints();
        this.calculateAttackValue();
        this.calculateSavingThrow();

        this.generateSlots();
        this.generateGroups();
        this.generateName();
        this.generateDescriptors();
        this.generateLanguages();

        this.generateInventory();
        this.generateCurrency();
    }

    increaseLevel() {
        if (this.level < 10) {
            this.level = this.level + 1;
            // TODO populate level-up function.
        }
    }

    decreaseLevel() {
        if (this.level > 1) {
            this.level = this.level - 1;
            // TODO populate level-down function.
        }
    }

    generateAttributes() {
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

        // Roll 3d6 for each attribute to determine its score.
        this.attributes.strength.score = d(6, 3);
        this.attributes.dexterity.score = d(6, 3);
        this.attributes.constitution.score = d(6, 3);
        this.attributes.intelligence.score = d(6, 3);
        this.attributes.wisdom.score = d(6, 3);
        this.attributes.charisma.score = d(6, 3);
    }

    generateClass() {
        this.characterClass = classes.random();
    }

    calculateHitDice() {
        this.hitDice = {
            base: 0,
            bonus: 0,
        };

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

    calculateHitPoints() {
        // Use hit dice to roll hit points.
        let hitPoints = d(6, this.hitDice.base) + this.hitDice.bonus;
        if (this.characterClass == "Strong" && this.attributes.constitution.score >= 16) {
            hitPoints += 2;
        } else if (this.characterClass == "Strong" && this.attributes.constitution.score >= 13) {
            hitPoints += 1;
        }

        this.hitPoints = hitPoints; // TODO ensure HP increases by minimum 1 on level-up.
    }

    calculateAttackValue() {
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

    calculateSavingThrow() {
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

    generateSlots() {
        this.slots = {
            type: null,
            count: 0,
            bonusInactiveCount: 0,
            attunements: [],
            abilities: [],
            miracles: [],
        };
        
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

        // Populate slots with random attunements, abilities, or miracles, depending on class.
        if (this.characterClass == "Deft") {
            this.slots.type = "Attunements";
            let remainingAttunements = 2 * this.slots.count;
            let excludedCategories = [];
            let attunementItemCategories = ["magic", "religious", "book", "weapon", "exoticWeapon", "mundane"];

            for (let i = 0; i < remainingAttunements; i++) {
                // Get a random attunement.
                let attunement = attunements.random();

                // If an attunement of that type (e.g. weapon or animal) has already been selected, select a new one.
                // This is to give the character a bit of diversity.
                while (excludedCategories.includes(attunement.type)) {
                    attunement = attunements.random()
                }

                // Add the trait and its associated category to our respective arrays.
                this.slots.attunements.push(attunement.value);
                excludedCategories.push(attunement.type);

                // If an item was added, make a note of it so we can include it in the inventory.
                if (attunementItemCategories.includes(attunement.type) && !this.inventory) {
                    // If the inventory hasn't been instantiated yet, create it and insert the item.
                    this.inventory = [attunement.value];
                } else if (attunementItemCategories.includes(attunement.type)) {
                    // If the inventory has been instantiated, just append the item.
                    this.inventory.push(attunement.value);
                }
            }
        } else if (this.characterClass == "Strong") {
            this.slots.type = "Abilities";

            for (let i = 0; i < this.slots.count; i++) {
                // Randomly select an ability.
                let ability = abilities.random();

                while (this.slots.abilities.includes(ability)) {
                    // This ability has already been chosen. Randomly select again.
                    ability = abilities.random()
                }

                this.slots.abilities.push(ability);
            }
        } else if (this.characterClass == "Wise") {
            this.slots.type = "Miracles";

            for (let i = 0; i < 2 * this.slots.count + this.slots.bonusInactiveCount; i++) { // Wise may get extra slots for high wisdom scores.
                // Randomly select an ability.
                let miracle = miracles.random();

                while (this.slots.miracles.includes(miracle)) {
                    // This ability has already been chosen. Randomly select again.
                    miracle = miracles.random()
                }

                this.slots.miracles.push(miracle);
            }
        }
    }

    generateGroups() {
        this.groups = {
            count: 0,
            bonusCount: 0,
            vocation: null,
            species: null,
            affiliations: [],
        };

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

        
        // Randomly determine whether to assign a species.
        if (Math.random() <= this.speciesChance) {
            this.generateSpecies();
        }

        // Assign a vocation.
        this.generateVocation();

        // Assign affiliation groups.
        this.generateAffiliations();
    }

    generateSpecies() {
        // Select a species at random.
        let specie = species.random()
        this.groups.species = specie.name;

        // Unlike other groups, species is assigned to two attributes, rather than one.
        for (let i = 0; i < 2; i++) {
            let randomAttributeNum = d(6, 1);
            if (randomAttributeNum == 1) {
                this.attributes.strength.groups.push(this.groups.species);
            } else if (randomAttributeNum == 2) {
                this.attributes.dexterity.groups.push(this.groups.species);
            } else if (randomAttributeNum == 3) {
                this.attributes.constitution.groups.push(this.groups.species);
            } else if (randomAttributeNum == 4) {
                this.attributes.intelligence.groups.push(this.groups.species);
            } else if (randomAttributeNum == 5) {
                this.attributes.wisdom.groups.push(this.groups.species);
            } else if (randomAttributeNum == 6) {
                this.attributes.charisma.groups.push(this.groups.species);
            }
        }

        // Each species has its own language, which the character automatically knows.
        this.languages.push(specie.language);
    }

    generateVocation() {
        // Select a vocation at random.
        this.groups.vocation = vocations.random();

        // Unless character is Deft, the vocation is tied to a specific attribute.
        if (this.characterClass != "Deft") {
            let randomAttributeNum = d(6, 1);
            if (randomAttributeNum == 1) {
                this.attributes.strength.groups.push(this.groups.vocation);
            } else if (randomAttributeNum == 2) {
                this.attributes.dexterity.groups.push(this.groups.vocation);
            } else if (randomAttributeNum == 3) {
                this.attributes.constitution.groups.push(this.groups.vocation);
            } else if (randomAttributeNum == 4) {
                this.attributes.intelligence.groups.push(this.groups.vocation);
            } else if (randomAttributeNum == 5) {
                this.attributes.wisdom.groups.push(this.groups.vocation);
            } else if (randomAttributeNum == 6) {
                this.attributes.charisma.groups.push(this.groups.vocation);
            }
        }
    }

    generateAffiliations() {
        // First, get the total number of groups, add any bonus groups for low attribute scores, and subtract 1
        // for the vocation that every character has to select.
        // Then randomly assign one at a time until that number has been met.
        // However, make sure that no one attribute has more than 2 groups on it.
        let vocationCount = this.groups.vocation ? 1 : 0;
        let speciesCount = this.groups.species ? 1 : 0;
        let remainingAffiliationGroups = this.groups.count + this.groups.bonusCount - vocationCount - speciesCount;

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

    generateName(allowPrefix = true, allowSuffix = true) {
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

    generateDescriptors(min = 3, max = 5) {
        // Get 3 to 5 random descriptors.
        let count = Math.floor(min + ((max - min + 1) * Math.random()));
        let traits = [];
        let excludedCategories = [];

        for (let i = 0; i < count; i++) {
            // Get a random descriptor trait.
            let descriptor = descriptors.random();

            // If a trait of that type (e.g. complexion or family) has already been selected, select a new one.
            while (excludedCategories.includes(descriptor.type)) {
                descriptor = descriptors.random()
            }

            // Add the trait and its associated category to our respective arrays.
            traits.push(descriptor.value);
            excludedCategories.push(descriptor.type);
        }

        this.descriptors = [...new Set(traits)].shuffle(); // Convert to a set (to filter out any duplicate values) then back to an array.
    }

    generateLanguages() {
        // Common is already granted to everyone (in the generate() function).
        // Racial language is already granted to non-humans (in the generateSpecies() function).
        // These languages are just for high intelligence: 1 for 13+, or 2 for 16+.
        if (this.attributes.intelligence.score >= 16) {
            var count = 2;
        } else if (this.attributes.intelligence.score >= 13) {
            var count = 1;
        } else {
            var count = 0;
        }

        for (let i = 0; i < count; i++) {
            // Randomly choose a language.
            let language = languages.random();

            while (this.languages.includes(language)) {
                // This language is already in the character's lexicon. Choose a new one.
                language = languages.random();
            }

            this.languages.push(language);
        }
    }

    generateInventory() {
        // Inventory may have already been created, if a Deft character was given an item.
        // If it hasn't been created, then do so now.
        if (!this.inventory) {
            this.inventory = [];
        }

        // Everyone gets some basic adventuring gear.
        this.inventory = this.inventory.concat([
            "Backpack",
            "Rations (3)",
            "Torch",
            "Rope",
            "Waterskin",
        ]);

        // Add 1 to 3 other items.
        let itemCount = Math.floor(Math.random()*2 + 1);
        for (let i = 0; i < itemCount; i++) {
            this.inventory.push(items.random().name);
        }


        // Add some armor that they're capable of wearing.
        let validArmors = armors.filter(armor => armor.allowedClasses.includes(this.characterClass));

        let armor = validArmors.random();
        this.inventory.push(armor.name);
        this.armorClass = armor.armorClass;

        // If Strong, potentially add a shield.
        if (this.characterClass === "Strong" && Math.random() <= this.shieldChance) {
            this.inventory.push("Shield");
            this.armorClass += 1;
        }

        // Add a weapon they can use.
        let validWeapons = weapons.filter(weapon => weapon.allowedClasses.includes(this.characterClass));

        let weapon = validWeapons.random();
        this.inventory.push(weapon.name);

        this.inventory = [...new Set(this.inventory)].shuffle(); // Convert to a set (to filter out duplicate values) then back to an array, and randomize the order for display.
    }

    generateCurrency() {
        this.currency = {
            large: Math.floor(Math.random()*5),
            medium: Math.floor(Math.random()*10),
            small: Math.floor(Math.random()*100),
        }
    }
}