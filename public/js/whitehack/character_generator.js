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
function generateName(allowPrefix = true, allowSuffix = true) {
    let prefixes = [
        'Clubfoot',
        'Crazy',
        'Do-Nothing',
        'One-Eyed',
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
        'One-Eye',
        'Ploughpenny',
        'Roundhead',
        'Thunderbolt',
    ];

    let name = '';

    // Random chance for a prefix.
    if (allowPrefix && Math.random() < 0.3) {
        name += prefixes.random() + ' ';
    }

    // Everyone has at least a regular old first name.
    name += names.random();

    // Random chance for a suffix.
    if (allowSuffix && Math.random() < 0.3) {
        name += ' ' + suffixes.random();
    }

    return name.trim();
}
function generateAttunement() {
    let weapons = [
        'Axe',
        'Sword',
        'Club',
        'Crossbow',
        'Dagger',
        'Dart',
        'Flail',
        'Greatsword',
        'Battle Axe',
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
        'Throwing Knife',
        'Throwing Axe',
    ];

    let items = [
        'Grappling Hook',
        'Dice Set',
        'Lockpicks',
        'Ten-Foot Pole',
        'Elven Rope',
        'Dinghy',
        'Cart',
        'Wagon',
        'Walking Staff',
        'Wizard Staff',
        'Spellbook',
        'Crystal Ball',
        'Alchemist\'s Lab',
        'Disguise Kit',
    ];

    let animals = [
        'Mastiff',
        'Hound',
        'Sheepdog',
        'Housecat',
        'Bobcat',
        'Lynx',
        'Fox',
        'Wolf',
        'Raccoon',
        'Rat',
        'Mouse',
        'Badger',
        'Ferret',
        'Weasel',
        'Mule',
        'Donkey',
        'Horse',
    ];

    let people = [
        'Swordmaster',
        'Spearmaster',
        'Bowmaster',
        'Ringleader',
        'Hedgemage',
        'Petty Wizard',
        'Sensei',
        'Expert Thief',
        'Acrobat Extraordinaire',
    ];

    // 30% for a weapon, 30% for a different item, 20% for an animal, 20% for a person.
    let randomChance = Math.random();
    if (randomChance < 0.3) {
        return weapons.random();
    } else if (randomChance < 0.6) {
        return items.random();
    } else if (randomChance < 0.8) {
        return generateName(false, false) + ' the ' + animals.random();
    } else {
        return generateName() + ', ' + people.random();
    }
}
function generateMiracle() {
    let signaturePossessives = [
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
        'Wheel of',
        'Ray of',
        'Invocation of',
        'Invoke',
        'Summon',
        'Animate',
        'Evoke',
        'Conjure',
        'Ward of',
        'Blade of',
        'Wall of',
        'Piercing',
    ];

    let primariesA = [
        'Fire',
        'Demonfire',
        'Greenfire',
        'Shadowfire',
        'Lava',
        'Magma',
        'Ashes',
        'Cinders',
        'Embers',
        'Ice',
        'Icefloes',
        'Rime',
        'Frost',
        'Hellfrost',
        'the North Wind',
        'the East Wind',
        'the South Wind',
        'the West Wind',
        'Smoke',
        'Justice',
        'Righteousness',
        'Light',
        'Darkness',
        'Void',
        'Shadow',
        'Healing',
        'Swiftness',
        'Haste',
    ];

    let primariesB = [
        'Fire',
        'Demonfire',
        'Greenfire',
        'Shadowfire',
        'Lava',
        'Magma',
        'Ash',
        'Cinder',
        'Ember',
        'Torrential',
        'Iceflow',
        'Rime',
        'Frost',
        'Hellfrost',
        'North Wind',
        'East Wind',
        'South Wind',
        'West Wind',
        'Smoke',
        'Justice',
        'Righteousness',
        'Light',
        'Darkness',
        'Void',
        'Shadow',
        'Evil',
        'Healing',
        'Haste',
    ];

    let suffixesForm = [
        'Wrath',
        'Blessing',
        'Gift',
        'Seal',
        'Tower',
        'Torment',
        'Hymn',
        'Ward',
        'Wheel',
        'Wall',
        'Shield',
        'Blade',
    ];

    let suffixesPossessive = [
        'of Abishi',
        'of Ishkibal',
        'of Akurduan',
        'of Urzigumash',
        'of Kashtiliash',
        'of Agum',
        'of Agum-kabit',
        'of Agum-balatu',
        'of Agum-shapik',
        'of Abirattash',
        'of Shagarakti',
        'of Marduk',
        'of Marduk-kabit',
        'of Marduk-balatu',
        'of Marduk-shapik',
        'of Eulmash',
        'of Nabonassar',
        'of Neriglissar',
        'of Akkadan',
        'of Birasha',
        'of Cernunnos',
        'of Crom',
        'of Mitra',
        'of Brighid',
        'of Set',
        'of Nergal',
    ];

    let specials = [
        'Pyroclastic Flow',
        'Animate Dead',
        'Open Mind',
        'Bend Mind',
        'Crumble',
        'Magnetism',
    ];

    // Choose either a prefix or a suffix or neither.
    let randomChance = Math.random();
    if (randomChance < 0.3) {
        var usePrefix = true;
        var useSuffix = false;
    } else if (randomChance < 0.6) {
        var usePrefix = false;
        var useSuffix = true;
    } else {
        var usePrefix = false;
        var useSuffix = false;
    }

    // Any miracle can have a signature possessive, but only miracles without a prefix can have a suffix possessive.
    if (!usePrefix) {
        let randomChance = Math.random();
        if (randomChance < 0.3) {
            var useSignaturePossessive = true;
            var useSuffixPossessive = false;
        } else if (randomChance < 0.6) {
            var useSignaturePossessive = false;
            var useSuffixPossessive = true;
        } else {
            var useSignaturePossessive = false;
            var useSuffixPossessive = false;
        }
    } else {
        let randomChance = Math.random();
        if (randomChance < 0.3) {
            var useSignaturePossessive = true;
            var useSuffixPossessive = false;
        } else {
            var useSignaturePossessive = false;
            var useSuffixPossessive = false;
        }
    }

    // Now compose it.
    let name = '';

    if (useSignaturePossessive) {
        name += signaturePossessives.random() + ' ';
    }

    if (usePrefix) {
        name += prefixes.random() + ' ';
        name += primariesA.random() + ' ';
    } else {
        name += primariesB.random() + ' ';
    }

    if (useSuffix) {
        name += suffixesForm.random() + ' ';
    }

    if (useSuffixPossessive) {
        name += suffixesPossessive.random() + ' ';
    }

    // Trim any trailing whitespace.
    return name.trim();
}
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
        this.buyArmor();
        this.buyWeapon();
        if (Math.random() < 0.5 && this.characterClass == 'Strong') {
            this.buyShield();
        }
        if (Math.random() < 0.5) {
            this.buyWeapon();
        }
        if (Math.random() < 0.5) {
            this.buyWeapon();
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
        let weapon = validWeapons.random();

        this.weapons.push(weapon);
        this.wealth.current -= weapon.cost;
        this.weight += weapon.weight;
    }

    buyShield() {
        if (this.wealth.current >= 5) {
            this.wealth.current -= 5;
            this.armorClass += 1;
            this.hasShield = true;
        }
    }
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