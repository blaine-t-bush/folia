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
        let weapons = [
            'Axe',
            'Sword',
            'Club',
            'Crossbow',
            'Dagger',
            'Dart',
            'Flail',
            'Greatsword',
            'Battle axe',
            'Halberd',
            'Polearm',
            'Javelin',
            'Longbow',
            'Mace',
            'Warhammer',
            'Morningstar',
            'Musket',
            'Pistol',
            'Quarterstaff',
            'Scimitar',
            'Shortbow',
            'Shortsword',
            'Sling',
            'Spear',
            'Throwing knife',
            'Throwing axe',
        ];

        let items = [
            'Grappling hook',
            'Dice',
            'Lockpicks',
            '10-foot pole',
            'Rope',
            'Boat',
            'Cart',
            'Walking staff',
            'Wizard staff',
        ];

        let animals = [
            'Dog',
            'Cat',
            'Rat',
            'Wolf',
            'Badger',
        ];

        let people = [
            'Swordmaster',
            'Bowmaster',
            'Ringleader',
        ];

        let randomChance = Math.random();
        if (randomChance < 0.4) {
            return weapons.random();
        } else if (randomChance < 0.8) {
            return items.random();
        } else if (randomChance < 0.9) {
            return animals.random();
        } else {
            return people.random();
        }
    }

    getAbility() {
        let abilities = [
            'Strong Ability 1: protect ally',
            'Strong Ability 2: push enemy',
            'Strong Ability 3: climb enemy',
            'Strong Ability 4: battle frenzy',
            'Strong Ability 5: instruct ally',
            'Strong Ability 6: encourage ally or intimidate enemy',
            'Strong Ability 7: double attack',
            'Strong Ability 8: parry',
        ];

        return abilities.random();
    }

    getMiracle() {
        let possessives = [
            'Sophronia\'s',
            'Barbetta\'s',
            'Brangwine\'s',
            'Adelard\'s',
            'Aglovale\'s',
            'Galleron\'s',
            'Everard\'s',
            'Alisander\'s',
            'Hildebrand\'s',
            'Berenger\'s',
        ];

        let prefixes = [
            'Wrath of',
            'Blessing of',
            'Suffering of',
            'Gift of',
            'Seal of',
            'Tower of',
            'Hymn of',
            'Word of',
            'Song of',
        ];

        let primaries = [
            'Fire',
            'Demonfire',
            'Greenfire',
            'Shadowfire',
            'Lava',
            'Magma',
            'Ash',
            'Cinder',
            'Ember',
            'Torrent',
            'Iceflow',
            'Rime',
            'Frost',
            'Hellfrost',
            'Zephyr',
            'Air',
            'Smoke',
            'Wind',
            'Justice',
            'Righteousness',
            'Light',
            'Darkness',
            'Void',
            'Shadow',
            'Evil',
            'Healing',
            'Swiftness',
        ];

        let suffixes = [
            'Wrath',
            'Blessing',
            'Gift',
            'Seal',
            'Tower',
            'Torment',
            'Hymn',
            'Ward',
        ];

        let specials = [
            'Pyroclastic Flow',
            'Animate Dead',
            'Open Mind',
            'Bend Mind',
            'Crumble',
            'Marduk, Demon of Fire',
            'Magnetism',
        ];

        // Every miracle is either explicitly listed in the array 'specials', or composed of elements from the following arrays:
        // possessives, prefixes, primaries, and suffixes. If it is of the latter type, the following rules are followed:
        // it always has a primary; it has either a prefix, a suffix, or neither, but not both; if and only if it does not have a prefix or suffix, it has a possessive.
        let specialChance = specials.length/(primaries.length + specials.length);
        if (Math.random() < specialChance) {
            return specials.random();
        } else {
            let possessive = possessives.random();
            let prefix     = prefixes.random();
            let primary    = primaries.random();
            let suffix     = suffixes.random();

            let randomChance = Math.random();
            if (randomChance < 0.2) {
                return possessive + ' ' + primary;
            } else if (randomChance < 0.6) {
                return prefix + ' ' + primary;
            } else {
                return primary + ' ' + suffix;
            }
        }
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
        let prefixes = [
            'Clubfoot',
            'Crazy',
            'Do-Nothing',
            'One-eyed',
            'Blind',
            'Brave',
            'Accursed',
            'Bald',
            'Cruel',
            'Gentle',
            'Good',
            'Grim',
            'Holy',
            'Hairy',
            'Lame',
            'Mad',
            'Old',
            'Pale',
            'Quiet',
            'Small',
            'Strong',
            'Swift',
            'Tall',
            'Terrible',
            'Wicked',
            'Wise',
        ];

        let names = [
            'Blaine',
            'Matthew',
            'Morgan',
            'Francisco',
            'James',
            'Richard',
            'Dinadan',
            'Alan',
            'Aldred',
            'Eluard',
            'Arnold',
            'Henry',
            'Basil',
            'Jocelyn',
            'Cyr',
            'Balin',
            'George',
            'Eliot',
            'Frederick',
            'Alexander',
            'Percival',
            'Anselm',
            'Albert',
            'Urian',
            'Tristram',
            'Berenger',
            'Martin',
            'Merek',
            'Herman',
            'Hildebrand',
            'Edwin',
            'Gilbert',
            'Bliant',
            'Bennet',
            'Bryce',
            'Castor',
            'Giles',
            'Gunter',
            'Bernard',
            'Arthur',
            'Nigel',
            'Lucan',
            'Lionel',
            'Bartholomew',
            'Bardolph',
            'Barnabas',
            'Bertram',
            'Wolfstan',
            'Hardwin',
            'Hamond',
            'Faramond',
            'Herbert',
            'Alisander',
            'Ulric',
            'Galleron',
            'Solomon',
            'Sampson',
            'Tobias',
            'Charles',
            'Diggory',
            'Drogo',
            'Hugh',
            'Baudwin',
            'Everard',
            'Nicholas',
            'Leofwin',
            'Amis',
            'Ranulf',
            'Fulke',
            'Theobald',
            'Rowan',
            'Geoffrey',
            'Gervase',
            'Gerard',
            'Godwyn',
            'Philip',
            'Warin',
            'Warner',
            'Thomas',
            'Brom',
            'Hamon',
            'Thurstan',
            'Robert',
            'Roland',
            'Rolf',
            'Walter',
            'Laurence',
            'Reginald',
            'Aglovale',
            'Sayer',
            'Timm',
            'Piers',
            'Cerdic',
            'Randel',
            'Denis',
            'Elias',
            'Gabriel',
            'Hector',
            'Humphrey',
            'Gamel',
            'Gregory',
            'Jasper',
            'Jeremy',
            'Isaac',
            'Ingram',
            'Isembard',
            'Manfred',
            'Ives',
            'William',
            'Lucius',
            'Wymond',
            'Lambert',
            'Blaise',
            'Griffith',
            'Mabon',
            'Hubert',
            'Gerald',
            'Eustace',
            'Emory',
            'Adam',
            'Adelard',
            'Alphonse',
            'Turstin',
            'Guy',
            'Peter',
            'Osric',
            'Ogier',
            'Gareth',
            'Maynard',
            'Miles',
            'Elaine',
            'Sarah',
            'Sela',
            'Sigga',
            'Susanna',
            'Althea',
            'Alma',
            'Artemisia',
            'Anne',
            'Anais',
            'Acelina',
            'Aelina',
            'Aldith',
            'Audry',
            'Augusta',
            'Brangwine',
            'Bridget',
            'Genevieve',
            'Guinevere',
            'Catelin',
            'Caterina',
            'Dionisia',
            'Mary',
            'Molly',
            'Margaret',
            'Margery',
            'Martha',
            'Elizabeth',
            'Elysande',
            'Cristina',
            'Giselle',
            'Regina',
            'Ricolda',
            'Roana',
            'Barbetta',
            'Bertha',
            'Clarice',
            'Amelina',
            'Cecily',
            'Edith',
            'Elle',
            'Juliana',
            'Ivette',
            'Adelina',
            'Agnes',
            'Alis',
            'Alyson',
            'Dameta',
            'Paulina',
            'Petronilla',
            'Edeva',
            'Eglenti',
            'Evelune',
            'Emeline',
            'Emma',
            'Joan',
            'Johanna',
            'Lavina',
            'Lena',
            'Lovota',
            'Lillian',
            'Maud',
            'Milicent',
            'Magdalen',
            'Isabella',
            'Caesaria',
            'Douglas',
            'Delia',
            'Sapphira',
            'Sophronia',
            'Tephania',
            'Theda',
            'Thora',
            'Odelina',
            'Oliva',
            'Orella',
            'Venetia',
            'Ysmeine',
            'Gracia',
            'Gratia',
            'Swanhild',
            'Sybil',
            'Mathilde',
            'Ida',
            'Ingerith',
            'Isemay',
            'Celestria',
            'Constance',
            'Eleanor',
            'Amicia',
            'Avina',
            'Athelina',
            'Eva',
            'Gundred',
            'Felicia',
            'Floria',
            'Isolda',
            'Linota',
            'Cassandra',
            'Lucia',
            'Helewisa',
            'Justina',
            'Joyce',
            'Joya',
            'Nesta',
            'Sabina',
            'Gisela',
            'Rosa',
            'Rosamund',
            'Evaine',
            'Viviane',
            'Laudine',
            'Letia',
            'Leticia',
            'Legarda',
            'Lia',
            'Lunete',
            'Florence',
            'Gwendolen',
            'Nicola',
            'Blanche',
            'Beatrice',
            'Marie',
            'Marion',
            'Mirielda',
        ];

        let suffixes = [
            'the Hard',
            'the Soft',
            'of the North',
            'of the East',
            'of the South',
            'of the West',
            'the Black',
            'the White',
            'the Red',
            'the Yellow',
            'of the Wood',
            'of the Mountain',
            'of the Valley',
            'of the River',
            'of the Lake',
            'the Elder',
            'the Younger',
            'the Brave',
            'the Great',
            'the Magnificent',
            'the Able',
            'the Accursed',
            'the Bald',
            'the Bear',
            'the Cruel',
            'the Damned',
            'the Exile',
            'the Gentle',
            'the Good',
            'the Grim',
            'the Hammer',
            'the Holy',
            'the Hairy',
            'the Impaler',
            'the Kind',
            'the Lame',
            'the Lion',
            'the Wolf',
            'the Mad',
            'the Old',
            'the Pale',
            'the Quiet',
            'the Rose',
            'the Seer',
            'the Small',
            'the Spider',
            'the Strong',
            'the Swift',
            'the Tall',
            'the Terrible',
            'the Wicked',
            'the Wise',
            'of the Sun',
            'of the Moon',
            'Fairhair',
            'Bloodaxe',
            'Crookback',
            'Flatnose',
            'Forkbeard',
            'Greyfell',
            'Greymantle',
            'Longshanks',
            'Ironside',
            'Moneybags',
            'Oathbreaker',
            'One-eye',
            'Ploughpenny',
            'Roundhead',
            'Thunderbolt',
        ];

        let name = '';

        // Random chance for a prefix.
        if (Math.random() < 0.3) {
            name += prefixes.random() + ' ';
        }

        // Everyone has at least a regular old first name.
        name += names.random();

        // Random chance for a suffix.
        if (Math.random() < 0.3) {
            name += ' ' + suffixes.random();
        }

        this.name = name;
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