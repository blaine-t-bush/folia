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
        this.items = [];
        this.hasShield = false;
        this.wealth = {
            starting: 0,
            current: 0,
        };

        // TODO add equipment.
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
        // Get one set of armor.
        this.buyArmor();
        // Get between 1 and 3 weapons.
        let weaponCount = Math.floor(Math.random() * 2 + 1);
        for (let i = 0; i < weaponCount; i++) {
            this.buyWeapon();
        }
        // Chance to get a shield, if Strong.
        if (Math.random() < 0.5 && this.characterClass == 'Strong') {
            this.buyShield();
        }
        // Get between 1 and 5 pieces of miscellaneous equipment.
        let itemCount = Math.floor(Math.random() * 4 + 1);
        for (let i = 0; i < itemCount; i++) {
            this.buyItem();
        }
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
            'The Skylords',
            'The Blackhands',
            'Thieves\' Guild',
            'The Bloody Cabal',
            'Guild of Sorcerers',
            'Scrutinous Scholars\' Society',
            'Gardeners\' Society',
            'The Sulfur Company',
            'Merchants\' Guild',
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

        // Determine which weapons are within budget and allowed by character class.
        var validArmors = [];

        for (let key in armors) {
            let armor = armors[key];
            if (this.wealth.current >= armor.cost && armor.allowedClasses.includes(this.characterClass)) {
                validArmors.push(armor);
            }
        }

        // Choose one in-budget armor at random.
        let armor = validArmors.random();

        this.armor = armor;
        this.armorClass = armor.armorClass;
        this.wealth.current -= armor.cost;
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
                classes: ['Deft', 'Strong', 'Wise'],
            },
            sword: {
                name: 'Sword',
                damage: '1d6+1',
                weight: 6,
                cost: 10,
                classes: ['Deft', 'Strong', 'Wise'],
            },
            club: {
                name: 'Club',
                damage: '1d6-2',
                weight: 3,
                cost: 0,
                classes: ['Deft', 'Strong', 'Wise'],
            },
            crossbow: {
                name: 'Crossbow',
                damage: '1d6+1',
                weight: 8,
                cost: 30,
                classes: ['Deft', 'Strong', 'Wise'],
            },
            dagger: {
                name: 'Dagger',
                damage: '1d6-2',
                weight: 1,
                cost: 3,
                classes: ['Deft', 'Strong', 'Wise'],
            },
            darts: {
                name: 'Darts (10)',
                damage: '1',
                weight: 3,
                cost: 10,
                classes: ['Deft', 'Strong', 'Wise'],
            },
            flail: {
                name: 'Flail',
                damage: '1d6',
                weight: 9,
                cost: 8,
                classes: ['Deft', 'Strong', 'Wise'],
            },
            greatsword: {
                name: 'Greatsword',
                damage: '1d6+2',
                weight: 15,
                cost: 15,
                classes: ['Deft', 'Strong', 'Wise'],
            },
            battleAxe: {
                name: 'Battle axe',
                damage: '1d6+2',
                weight: 15,
                cost: 15,
                classes: ['Deft', 'Strong', 'Wise'],
            },
            halberd: {
                name: 'Halberd',
                damage: '1d6+1',
                weight: 20,
                cost: 10,
                classes: ['Deft', 'Strong', 'Wise'],
            },
            polearm: {
                name: 'Polearm',
                damage: '1d6+1',
                weight: 20,
                cost: 10,
                classes: ['Deft', 'Strong', 'Wise'],
            },
            javelin: {
                name: 'Javelins (5)',
                damage: '1d6',
                weight: 10,
                cost: 10,
                classes: ['Deft', 'Strong', 'Wise'],
            },
            longbow: {
                name: 'Longbow',
                damage: '1d6',
                weight: 5,
                cost: 40,
                classes: ['Deft', 'Strong', 'Wise'],
            },
            mace: {
                name: 'Mace',
                damage: '1d6',
                weight: 10,
                cost: 5,
                classes: ['Deft', 'Strong', 'Wise'],
            },
            warhammer: {
                name: 'Warhammer',
                damage: '1d6',
                weight: 10,
                cost: 5,
                classes: ['Deft', 'Strong', 'Wise'],
            },
            morningstar: {
                name: 'Morningstar',
                damage: '1d6',
                weight: 20,
                cost: 8,
                classes: ['Deft', 'Strong', 'Wise'],
            },
            musket: {
                name: 'Musket',
                damage: '1d6+2',
                weight: 10,
                cost: 150,
                classes: ['Deft', 'Strong', 'Wise'],
            },
            pistol: {
                name: 'Pistol',
                damage: '1d6+1',
                weight: 3,
                cost: 100,
                classes: ['Deft', 'Strong', 'Wise'],
            },
            quarterstaff: {
                name: 'Quarterstaff',
                damage: '1d6-1',
                weight: 4,
                cost: 1,
                classes: ['Deft', 'Strong', 'Wise'],
            },
            scimitar: {
                name: 'Scimitar',
                damage: '1d6',
                weight: 5,
                cost: 8,
                classes: ['Deft', 'Strong', 'Wise'],
            },
            shortbow: {
                name: 'Shortbow',
                damage: '1d6-1',
                weight: 4,
                cost: 25,
                classes: ['Deft', 'Strong', 'Wise'],
            },
            shortsword: {
                name: 'Shortsword',
                damage: '1d6',
                weight: 3,
                cost: 8,
                classes: ['Deft', 'Strong', 'Wise'],
            },
            sling: {
                name: 'Sling',
                damage: '1d6-2',
                weight: 0.5,
                cost: 2,
                classes: ['Deft', 'Strong', 'Wise'],
            },
            spear: {
                name: 'Spear',
                damage: '1d6',
                weight: 8,
                cost: 2,
                classes: ['Deft', 'Strong', 'Wise'],
            },
            throwingKnife: {
                name: 'Throwing Knives (2)',
                damage: '1d6-2',
                weight: 2,
                cost: 4,
                classes: ['Deft', 'Strong', 'Wise'],
            },
            throwingAxe: {
                name: 'Throwing Axes (2)',
                damage: '1d6-2',
                weight: 2,
                cost: 4,
                classes: ['Deft', 'Strong', 'Wise'],
            },
        };

        // Determine which weapons are within budget and allowed by class.
        var validWeapons = [];

        for (let key in weapons) {
            let weapon = weapons[key];
            if (this.wealth.current >= weapon.cost && weapon.classes.includes(this.characterClass)) {
                validWeapons.push(weapon);
            }
        }

        // Choose one in-budget weapon at random.
        if (validWeapons.length > 0) {
            let weapon = validWeapons.random();

            this.weapons.push(weapon);
            this.wealth.current -= weapon.cost;
            this.weight += weapon.weight;
        }
    }

    buyShield() {
        if (this.wealth.current >= 5) {
            this.wealth.current -= 5;
            this.armorClass += 1;
            this.hasShield = true;
        }
    }

    buyItem() {
        // Define possible items.
        let items = {
            backpack: {
                name: 'Backpack',
                cost: 5,
            },
            bandages: {
                name: 'Bandages (5)',
                cost: 2,
            },
            boat: {
                name: 'Boat',
                cost: 60,
            },
            bottleWine: {
                name: 'Bottle (wine), glass',
                cost: 1,
            },
            cart: {
                name: 'Cart',
                cost: 50,
            },
            case: {
                name: 'Case (map or scroll)',
                cost: 3,
            },
            checkers: {
                name: 'Checkers (game)',
                cost: 5,
            },
            compass: {
                name: 'Compass',
                cost: 50,
            },
            crowbar: {
                name: 'Crowbar',
                cost: 5,
            },
            dice: {
                name: 'Dice',
                cost: 2,
            },
            flintAndSteel: {
                name: 'Flint & steel',
                cost: 5,
            },
            grapplingHook: {
                name: 'Grappling hook',
                cost: 5,
            },
            hammerAndStakes: {
                name: 'Hammer and wooden stakes',
                cost: 3,
            },
            helmet: {
                name: 'Helmet',
                cost: 10,
            },
            holySymbolWooden: {
                name: 'Holy symbol, wooden',
                cost: 2,
            },
            holySymbolSilver: {
                name: 'Holy symbol, silver',
                cost: 25,
            },
            holyWater: {
                name: 'Holy water, small vial',
                cost: 15,
            },
            // TODO finish equipment list.
        };

        // Determine which items are in-budget.
        let validItems = [];
        for (let key in items) {
            let item = items[key];
            if (this.wealth.current >= item.cost) {
                validItems.push(item);
            }
        }

        // Choose one in-budget item at random.
        if (validItems.length > 0) {
            let item = validItems.random();

            this.items.push(item);
            this.wealth.current -= item.cost;
            this.weight += item.weight;
        }
    }
}