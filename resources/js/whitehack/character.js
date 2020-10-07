// TODO consider giving up on the "generate wealth and then buy based on budget" approach. just generate items randomly.
// TODO parse the Great Net Equipment List

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

        // Equipment and wealth.
        this.armor = null;
        this.weapons = [];
        this.inventorySlots = 0;
        this.inventory = [];
        this.hasShield = false;
        this.wealth = {
            starting: 0,
            current: 0,
        };

        // TODO add equipment.
        this.generateAttributes();
        this.inventorySlots = Math.min(this.attributes.strength.score, 10);
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

        // Get one set of armor.
        this.buyArmor();

        // Get 1 or 2 weapons.
        let weaponCount = Math.floor(Math.random() * 1 + 1);
        for (let i = 0; i < weaponCount; i++) {
            this.buyWeapon();
        }

        // Strong characters are allowed to use shields. Chance that they have one.
        if (Math.random() < 0.5 && this.characterClass == 'Strong') {
            this.buyShield();
        }

        // Get some items.
        let itemCount = this.remainingSlots();
        for (let i = 0; i < itemCount; i++) {
            this.buyItem();
        }

        // Most importantly, a name!
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
        this.attributes.strength.score = d(6, 3);
        this.attributes.dexterity.score = d(6, 3);
        this.attributes.constitution.score = d(6, 3);
        this.attributes.intelligence.score = d(6, 3);
        this.attributes.wisdom.score = d(6, 3);
        this.attributes.charisma.score = d(6, 3);
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
            this.hitDice.base = Math.floor(this.level / 2) + 1;
        } else if (this.characterClass == 'Strong') {
            this.hitDice.base = this.level;
        } else if (this.characterClass == 'Wise') {
            this.hitDice.base = Math.floor((this.level + 1) / 1.5);
        } else if (this.characterClass == 'Brave') {
            this.hitDice.base = this.level;
        } else if (this.characterClass == 'Fortunate') {
            this.hitDice.base = Math.floor(this.level / 2) + 1;
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
            this.attackValue = Math.floor(this.level / 2) + 10;
        } else if (this.characterClass == 'Strong') {
            this.attackValue = Math.floor((this.level - 1) / 1.5) + 11;
        } else if (this.characterClass == 'Wise') {
            this.attackValue = Math.floor((this.level + 1) / 3) + 10;
        } else if (this.characterClass == 'Brave') {
            this.attackValue = Math.floor((this.level + 1) / 3) + 10;
        } else if (this.characterClass == 'Fortunate') {
            this.attackValue = Math.floor((this.level - 1) / 3) + 10;
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
            this.slots.count = Math.floor((this.level + 2) / 3);
        } else if (this.characterClass == 'Strong') {
            this.slots.count = Math.floor((this.level + 2) / 3);
        } else if (this.characterClass == 'Wise') {
            this.slots.count = Math.floor((this.level + 1) / 2);
        } else if (this.characterClass == 'Brave') {
            this.slots.count = Math.floor((this.level + 2) / 3);
        } else if (this.characterClass == 'Fortunate') {
            this.slots.count = Math.floor((this.level + 2) / 3);
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
            let remainingAttunements = 2 * this.slots.count;
            while (remainingAttunements > 0) {
                // Randomly select an attunement.
                let randomAttunement = generateAttunement();

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
            let remainingMiracles = 2 * this.slots.count + this.slots.bonusInactiveCount; // Wise may get extra slots for high wisdom scores.
            while (remainingMiracles > 0) {
                // Randomly select an miracle.
                let randomMiracle = generateMiracle();

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

    getAbility() {
        let abilities = [
            '1. Protect ally from harm',
            '2. Push enemy after successful attack',
            '3. Cling to large foe',
            '4. Work up battle frenzy',
            '5. Give tactical instruction to ally',
            '6. Encourage allies or strike fear in enemies',
            '7. Double attack with melee and ranged weapons',
            '8. Parry',
        ];

        return abilities.random();
    }

    updateGroupCount() {
        // Calculate number of groups based on class and level.
        if (this.characterClass == 'Deft') {
            this.groups.count = Math.floor((this.level + 3) / 2);
        } else if (this.characterClass == 'Strong') {
            this.groups.count = Math.floor((this.level + 5) / 3);
        } else if (this.characterClass == 'Wise') {
            this.groups.count = Math.floor((this.level + 5) / 3);
        } else if (this.characterClass == 'Brave') {
            this.groups.count = Math.floor((this.level + 3) / 4);
        } else if (this.characterClass == 'Fortunate') {
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
        // Choose a vocation at random.
        let vocations = [
            'Barbarian',
            'Crusader',
            'Knight',
            'Warrior',
            'Spellsword',
            'Witchhunter',
            'Valkyrie',
            'Shieldmaiden',
            'Pit Fighter',
            'Vigilante',
            'Outrider',
            'Paladin',
            'Inquisitor',
            'Oracle',
            'Entropomancer',
            'Geomancer',
            'Templar',
            'Exorcist',
            'Warpriest',
            'Hexblade',
            'Battlemage',
            'Healer',
            'Mage',
            'Warlock',
            'Demonologist',
            'Sorcerer',
            'Priest',
            'Cleric',
            'Druid',
            'Summoner',
            'Elementalist',
            'Soothsayer',
            'Shaman',
            'Pyromancer',
            'Cryomancer',
            'Necromancer',
            'Illusionist',
            'Wizard',
            'Alchemist',
            'Apothecary',
            'Conjurer',
            'Mystic',
            'Spellthief',
            'Warmage',
            'Invoker',
            'Psion',
            'Thaumaturgist',
            'Bard',
            'Acrobat',
            'Agent',
            'Spy',
            'Assassin',
            'Rogue',
            'Scout',
            'Thief',
            'Ranger',
            'Hunter',
            'Marksman',
            'Duelist',
            'Fencer',
            'Archer',
            'Monk',
            'Nightblade',
            'Pilgrim',
            'Sailor',
            'Pirate',
            'Bounty Hunter',
            'Ninja',
            'Pugilist',
            'Merchant',
            'Footpad',
            'Orator',
            'Skald',
            'Beastmaster',
            'Alienist',
            'Bloodmage',
            'Fateweaver',
            'Mindbender',
            'Wayfarer',
            'Aristocrat',
            'Medic',
            'Doctor',
            'Surgeon',
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
            'Wicker Men',
            'Circle of Cernunnos',
            'Church of Crom',
            'Church of Mitra',
            'Temple of Brighid',
            'Cult of Set',
            'Cult of Nergal',
            'Merry Men',
            'Cult of the Black Amphora',
            'Order of the Sphinx',
            'Order of the Rose',
            'Order of the Basilisk',
            'Skylords',
            'Blackhands',
            'Thieves\' Guild',
            'Bloody Cabal',
            'Shadow Cult',
            'Guild of Sorcerers',
            'Society of Scrutinous Scholars',
            'Royal Gardeners\' Society',
            'The Sulfur Company',
            'Merchants\' Guild',
            'Royal Arcane Institute',
            'Institute of the Arcane',
            'Aldred\'s Two Hundred',
            'Highpeak Clan',
        ];

        return affiliations.random();
    }

    updateName() {
        this.name = generateName();
    }

    buyArmor() {
        let armors = {
            cloth: {
                name: 'Cloth armor',
                armorClass: 1,
                slots: 1,
                allowedClasses: ['Deft', 'Strong', 'Wise'],
            },
            leather: {
                name: 'Leather armor',
                armorClass: 2,
                slots: 1,
                allowedClasses: ['Deft', 'Strong', 'Wise'],
            },
            studdedLeather: {
                name: 'Studded leather armor',
                armorClass: 3,
                slots: 1,
                allowedClasses: ['Deft', 'Strong'],
            },
            chainmail: {
                name: 'Chainmail',
                armorClass: 4,
                slots: 2,
                allowedClasses: ['Strong'],
            },
            splintMail: {
                name: 'Splint mail',
                armorClass: 5,
                slots: 2,
                allowedClasses: ['Strong'],
            },
            fullPlate: {
                name: 'Full plate',
                armorClass: 6,
                slots: 3,
                allowedClasses: ['Strong'],
            },
        };

        // Determine which armors are allowed by character class.
        var validArmors = [];

        for (let key in armors) {
            let armor = armors[key];
            if (armor.allowedClasses.includes(this.characterClass) && this.remainingSlots() >= armor.slots) {
                validArmors.push(armor);
            }
        }

        // Choose one in-budget armor at random.
        let armor = validArmors.random();

        this.armorClass = armor.armorClass;
        this.inventory.push({ name: armor.name, slots: armor.slots });
    }

    buyWeapon() {
        // Define all possible weapons.
        let weapons = [{
                name: 'Axe',
                damage: '1d6+1',
                slots: 1,
                classes: ['Deft', 'Strong', 'Wise'],
            },
            {
                name: 'Sword',
                damage: '1d6+1',
                slots: 1,
                classes: ['Deft', 'Strong', 'Wise'],
            },
            {
                name: 'Club',
                damage: '1d6-2',
                slots: 1,
                classes: ['Deft', 'Strong', 'Wise'],
            },
            {
                name: 'Crossbow',
                damage: '1d6+1',
                slots: 2,
                classes: ['Deft', 'Strong', 'Wise'],
            },
            {
                name: 'Dagger',
                damage: '1d6-2',
                slots: 1,
                classes: ['Deft', 'Strong', 'Wise'],
            },
            {
                name: 'Darts (10)',
                damage: '1',
                slots: 1,
                classes: ['Deft', 'Strong', 'Wise'],
            },
            {
                name: 'Flail',
                damage: '1d6',
                slots: 1,
                classes: ['Deft', 'Strong', 'Wise'],
            },
            {
                name: 'Greatsword',
                damage: '1d6+2',
                slots: 2,
                classes: ['Deft', 'Strong'],
            },
            {
                name: 'Battle axe',
                damage: '1d6+2',
                slots: 2,
                classes: ['Deft', 'Strong'],
            },
            {
                name: 'Halberd',
                damage: '1d6+1',
                slots: 2,
                classes: ['Deft', 'Strong'],
            },
            {
                name: 'Polearm',
                damage: '1d6+1',
                slots: 2,
                classes: ['Deft', 'Strong'],
            },
            {
                name: 'Javelins (5)',
                damage: '1d6',
                slots: 1,
                classes: ['Deft', 'Strong', 'Wise'],
            },
            {
                name: 'Longbow',
                damage: '1d6',
                slots: 2,
                classes: ['Deft', 'Strong'],
            },
            {
                name: 'Mace',
                damage: '1d6',
                slots: 1,
                classes: ['Deft', 'Strong', 'Wise'],
            },
            {
                name: 'Warhammer',
                damage: '1d6',
                slots: 1,
                classes: ['Deft', 'Strong', 'Wise'],
            },
            {
                name: 'Morningstar',
                damage: '1d6',
                slots: 1,
                classes: ['Deft', 'Strong', 'Wise'],
            },
            {
                name: 'Musket',
                damage: '1d6+2',
                slots: 2,
                classes: ['Deft', 'Strong', 'Wise'],
            },
            {
                name: 'Pistol',
                damage: '1d6+1',
                slots: 1,
                classes: ['Deft', 'Strong', 'Wise'],
            },
            {
                name: 'Quarterstaff',
                damage: '1d6-1',
                slots: 2,
                classes: ['Deft', 'Strong', 'Wise'],
            },
            {
                name: 'Scimitar',
                damage: '1d6',
                slots: 1,
                classes: ['Deft', 'Strong', 'Wise'],
            },
            {
                name: 'Shortbow',
                damage: '1d6-1',
                slots: 2,
                classes: ['Deft', 'Strong'],
            },
            {
                name: 'Shortsword',
                damage: '1d6',
                slots: 1,
                classes: ['Deft', 'Strong', 'Wise'],
            },
            {
                name: 'Sling',
                damage: '1d6-2',
                slots: 1,
                classes: ['Deft', 'Strong', 'Wise'],
            },
            {
                name: 'Spear',
                damage: '1d6',
                slots: 1,
                classes: ['Deft', 'Strong', 'Wise'],
            },
            {
                name: 'Throwing Knives (2)',
                damage: '1d6-2',
                slots: 1,
                classes: ['Deft', 'Strong', 'Wise'],
            },
            {
                name: 'Throwing Axes (2)',
                damage: '1d6-2',
                slots: 1,
                classes: ['Deft', 'Strong', 'Wise'],
            },
        ];

        // Determine which weapons are allowed by class.
        var validWeapons = [];

        for (let i = 0; i < weapons.length; i++) {
            let weapon = weapons[i];
            if (weapon.classes.includes(this.characterClass) && !this.inventory.some(a => a.name === weapon.name) && this.remainingSlots() >= weapon.slots) {
                validWeapons.push(weapon);
            }
        }

        // Choose one weapon at random.
        if (this.inventorySlots > this.inventory.length && validWeapons.length > 0) {
            let weapon = validWeapons.random();
            this.inventory.push({ name: weapon.name, slots: weapon.slots });
        }
    }

    buyShield() {
        if (this.inventorySlots > this.inventory.length) {
            this.armorClass += 1;
            this.hasShield = true;
            this.inventory.push({ name: 'Shield', slots: 1 });
        }
    }

    buyItem() {
        // Define possible items.
        let items = [
            { name: 'Waterskin', slots: 1 },
            { name: 'Rations (1 week)', slots: 1 },
            { name: 'Bedroll', slots: 1 },
            { name: 'Tent', slots: 1 },
            { name: 'Bandages (5)', slots: 1 },
            { name: 'Flint and steel', slots: 1 },
            { name: 'Grappling hook', slots: 1 },
            { name: 'Shovel', slots: 1 },
            { name: 'Hammer', slots: 1 },
            { name: 'Crowbar', slots: 1 },
            { name: 'Stakes, wooden (12)', slots: 1 },
            { name: 'Spikes, iron (12)', slots: 1 },
            { name: 'Pitons, iron (12)', slots: 1 },
            { name: 'Acid, flask', slots: 1 },
            { name: 'Oil, flask', slots: 1 },
            { name: 'Holy water, vial', slots: 1 },
            { name: 'Holy symbol', slots: 1 },
            { name: 'Snare', slots: 1 },
            { name: 'Beartrap', slots: 1 },
            { name: 'Scroll', slots: 1 },
            { name: 'Map', slots: 1 },
            { name: 'Book', slots: 1 },
            { name: 'Lantern', slots: 1 },
            { name: 'Torches (5)', slots: 1 },
            { name: 'Compass', slots: 1 },
            { name: 'Lockpicks', slots: 1 },
            { name: 'Mirror', slots: 1 },
            { name: 'Ten-foot pole', slots: 1 },
            { name: 'Chalk', slots: 1 },
            { name: 'Twine (50 feet)', slots: 1 },
            { name: 'Rope, silk (50 feet)', slots: 1 },
            { name: 'Rope, hemp (50 feet)', slots: 1 },
        ];

        // Choose an item at random that isn't already in inventory.
        let itemFound = false;
        while (!itemFound) {
            let item = items.random();
            if (!this.inventory.some(a => a.name === item.name)) {
                this.inventory.push(item);
                itemFound = true;
            }
        }
    }

    currentSlots() {
        let currentSlots = 0;
        for (let i = 0; i < this.inventory.length; i++) {
            let item = this.inventory[i];
            currentSlots += item.slots;
        }

        return currentSlots;
    }

    remainingSlots() {
        return Math.max(this.inventorySlots - this.currentSlots(), 0);
    }
}