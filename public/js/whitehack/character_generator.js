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
        'Oakeshott',
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
function getAffiliation() {
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
        'Order of the Candle',
        'Order of the Lantern',
        'Order of the Hearth',
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
        'Barrett\'s Privateers',
        'Northwest Passage Explorers',
        'Finch\'s Giants',
        'Bramble Bastards',
        'Witches of the Westmorland',
        'The Night Guard',
        'Scarborough Sorcerers',
        'Herbal Guild',
        'Barrow Delvers\' Society',
        'The Lock Keepers',
        'Marduk\'s Last Watch',
        'Woodbridge Dogs',
        'House of the Holy',
        'Blackdogs',
        'Sword of St. Tristan',
        'House of Red',
        'Harbingers of the Dark Star',
        'Children of the Moon Mountains',
        'Dire Wolves',
        'Shield-Maidens of Veborg',
        'Canso Witch-Hunters',
        'Sun Warriors',
        'Valkyries of Sigyn',
        'The Wild Boars',
        'Nightblades',
        'Masters of the Universe',
        'Wheel of Fire',
        'Royal Metallurgists',
        'The Alloy Supreme',
        'Zenith\'s Hammer',
    ];

    return affiliations.random();
}
function generateVocation() {
    // Choose a vocation at random.
    let vocations = [
        // Warriors
        'Barbarian',
        'Bounty Hunter',
        'Crusader',
        'Gladiator',
        'Knight',
        'Outrider',
        'Pit Fighter',
        'Pugilist',
        'Templar',
        'Vigilante',
        'Warrior',

        // Warrior-Mages
        'Battlemage',
        'Paladin',
        'Spellsword',
        'Warpriest',

        // Mages
        'Cleric',
        'Conjurer',
        'Demonologist',
        'Diviner',
        'Druid',
        'Elementalist',
        'Exorcist',
        'Healer',
        'Illusionist',
        'Mage',
        'Medium',
        'Mystic',
        'Necromancer',
        'Oracle',
        'Priest',
        'Psion',
        'Psychic',
        'Shaman',
        'Soothsayer',
        'Sorcerer',
        'Summoner',
        'Thaumaturgist',
        'Warlock',
        'Warmage',
        'Wizard',

        // Mage-Rogues

        // Rogues
        'Acrobat',
        'Agent',
        'Archer',
        'Assassin',
        'Bard',
        'Duelist',
        'Fencer',
        'Hunter',
        'Marksman',
        'Monk',
        'Ninja',
        'Ranger',
        'Rogue',
        'Scout',
        'Spy',
        'Thief',

        // Scholars
        'Alchemist',
        'Apothecary',
        'Astronomer',
        'Doctor',
        'Engineer',
        'Medic',
        'Numerologist',
        'Philosopher',
        'Surgeon',

        // Mundane
        'Aristocrat',
        'Merchant',
        'Orator',
        'Pilgrim',
        'Pirate',
        'Sailor',

        // Other
        'Inquisitor',
    ];

    // Get unique values only, just in case something is duplicated.
    let uniques = [...new Set(vocations)];

    return uniques.random();
}
function generateAttunement() {
    // FIXME get weapon/item lists from inventory.js
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
        'Dice set',
        'Lockpicks',
        '10-foot pole',
        'Elven rope',
        'Dinghy',
        'Cart',
        'Wagon',
        'Walking staff',
        'Wizard staff',
        'Spellbook',
        'Crystal ball',
        'Alchemist\'s lab',
        'Disguise kit',
    ];

    let animals = [
        'mastiff',
        'hound',
        'sheepdog',
        'housecat',
        'bobcat',
        'kynx',
        'fox',
        'wolf',
        'raccoon',
        'rat',
        'mouse',
        'badger',
        'ferret',
        'weasel',
        'mule',
        'donkey',
        'horse',
    ];

    // 30% for a weapon, 30% for a different item, 20% for an animal, 20% for a person.
    let randomChance = Math.random();
    if (randomChance < 0.3) {
        return weapons.random();
    } else if (randomChance < 0.6) {
        return items.random();
    } else if (randomChance < 0.8) {
        return generateName(false, false) + ' the ' + animals.random().toLowerCase();
    } else {
        return generateName() + ', ' + generateVocation().toLowerCase();
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
        'Frost',
        'Rain',
        'Hail',
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
        'Icefloe',
        'Frost',
        'Rain',
        'Hail',
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
        'Mind',
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
        'Spike',
        'Pulse',
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
/* 
 * Determine inventory.

 * There are a few items that everyone gets:
 *  - Waterskin
 *  - Rations
 *  - Torches
 *  - Coins
 * 
 * Then there are a few items that everyone gets some version of:
 *  - Armor
 *  - Melee weapon
 *  - Ranged weapon
 *  - Container
 * 
 * Then the remaining slots are populated by random gear, e.g.:
 *  - Rope
 *  - Lockpicks
 *  - Lantern
 * 
 * This does reduce variation between characters a bit, but also ensures
 * that each one is playable "out of the box." Players shouldn't need to buy
 * further equipment unless they want to.
 */

/**
 * Create a complete inventory for new character.
 * 
 * @param  {String} characterClass - Deft, Strong, or Wise. Character class determines which items are allowed.
 * @param  {Number} strengthScore -- Attribute score, 3-18. This determines the number of available slots.
 * @param  {Array}  attunedItems --- Attuned items, if Deft. These items will be added to inventory.
 * @return {Array} ----------------- Array of objects. Each element in array represents one item in inventory. Each item contains the name, number of slots it takes up, and the name of the container it's in, if any.
 */
function createInventory(characterClass, strengthScore, constitutionScore, attunedItems = [], isHireling = false) {
    // Instantiate an empty inventory.
    let carried = [];
    let inventory = [];
    let maximumSlots = Math.max(strengthScore, constitutionScore);

    // FIXME if deft and attuned to weapon/item, add to inventory

    // Add the items that everyone gets in some variation.
    // First, armor.
    let armor = getArmor(carried, inventory, maximumSlots, characterClass);
    let armorClass = 0;
    if (armor != null && typeof(armor) !== 'undefined') {
        carried.push({ name: armor.name, slots: armor.slots });
        armorClass = armor.armorClass;
    }

    // Strong characters might get a shield as well.
    if (Math.random() > 0.5 && characterClass == 'Strong' && remainingSlots(inventory, maximumSlots) >= 1) {
        carried.push({ name: shield, slots: 1 });
        armorClass += 1;
    }

    // Next, a melee weapon.
    let meleeWeapon = getMeleeWeapon(carried, inventory, maximumSlots, characterClass);
    if (meleeWeapon != null && typeof(meleeWeapon) !== 'undefined') {
        carried.push({ name: meleeWeapon.name, slots: meleeWeapon.slots });
    }

    // Next, a ranged weapon.
    let rangedWeapon = getRangedWeapon(carried, inventory, maximumSlots, characterClass);
    if (rangedWeapon != null && typeof(rangedWeapon) !== 'undefined') {
        carried.push({ name: rangedWeapon.name, slots: rangedWeapon.slots });
    }

    // Determine containers.
    // Armor, weapons, and shields are assumed to be either worn or carried in their own unique containers (e.g. a sword has a sheath, a shield is strapped to the back).
    // Thus, the number of slots that need a designated container (like a backpack) is equal to the total inventory slots minus the ones used for armor, weapons, and shields.
    // So let's use that number to determine what container(s) this character needs.
    let availableSlots = remainingSlots(carried, inventory, maximumSlots);
    let containers = getContainers(availableSlots);

    // Add the items that everyone gets.
    if (remainingSlots(carried, inventory, maximumSlots) >= 1) {
        inventory.push({ name: 'Torches (6)', slots: 1 });
    }

    if (remainingSlots(carried, inventory, maximumSlots) >= 1) {
        inventory.push({ name: 'Waterskin', slots: 1 });
    }

    if (remainingSlots(carried, inventory, maximumSlots) >= 1) {
        inventory.push({ name: 'Rations (1 week)', slots: 1 });
    }

    // Add some random items.
    if (isHireling) {
        inventory = inventory.concat(getItems(carried, inventory, maximumSlots, 2));
    } else {
        inventory = inventory.concat(getItems(carried, inventory, maximumSlots));
    }

    // Populate chosen containers with inventory items.
    containers = populateContainers(containers, inventory);

    // Everyone gets a pouch with 6d10 coins.
    if (!isHireling) {
        containers.unshift({ name: 'Pouch', maximumSlots: 0, items: [{ name: d(10, 6) + ' coins', slots: 0 }] });
    }

    // Add carried items as their own "container".
    containers.unshift({
        name: 'Worn or Carried',
        maximumSlots: 0,
        items: carried,
    });

    return {
        containers: containers,
        armorClass: armorClass,
    };
}

function currentSlots(carried, inventory) {
    let currentSlots = 0;
    for (let i = 0; i < carried.length; i++) {
        currentSlots += carried[i].slots;
    }

    for (let i = 0; i < inventory.length; i++) {
        currentSlots += inventory[i].slots;
    }

    return currentSlots;
}

function remainingSlots(carried, inventory, maximumSlots) {
    return maximumSlots - currentSlots(carried, inventory);
}

function getArmor(carried, inventory, maximumSlots, characterClass) {
    // Define all armors.
    let armors = [{
            name: 'Cloth armor',
            armorClass: 1,
            slots: 1,
            allowedClasses: ['Deft', 'Strong', 'Wise'],
        },
        {
            name: 'Leather armor',
            armorClass: 2,
            slots: 1,
            allowedClasses: ['Deft', 'Strong', 'Wise'],
        },
        {
            name: 'Studded leather armor',
            armorClass: 3,
            slots: 1,
            allowedClasses: ['Deft', 'Strong'],
        },
        {
            name: 'Chainmail',
            armorClass: 4,
            slots: 2,
            allowedClasses: ['Strong'],
        },
        {
            name: 'Splint mail',
            armorClass: 5,
            slots: 2,
            allowedClasses: ['Strong'],
        },
        {
            name: 'Full plate',
            armorClass: 6,
            slots: 3,
            allowedClasses: ['Strong'],
        },
    ];

    // Determine which armors are allowed by character class and would fit within remaining slots.
    var validArmors = [];

    for (let i = 0; i < armors.length; i++) {
        let armor = armors[i];
        if (armor.allowedClasses.includes(characterClass) && remainingSlots(carried, inventory, maximumSlots) >= armor.slots) {
            validArmors.push(armor);
        }
    }

    // Choose one valid armor at random.
    return validArmors.random();
}

function getMeleeWeapon(carried, inventory, maximumSlots, characterClass) {
    // Define all melee weapons.
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
            name: 'Dagger',
            damage: '1d6-2',
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
            name: 'Shortsword',
            damage: '1d6',
            slots: 1,
            classes: ['Deft', 'Strong', 'Wise'],
        },
        {
            name: 'Spear',
            damage: '1d6',
            slots: 1,
            classes: ['Deft', 'Strong', 'Wise'],
        },
    ];

    // Determine which weapons are allowed by character class and would fit within remaining slots.
    var validWeapons = [];

    for (let i = 0; i < weapons.length; i++) {
        let weapon = weapons[i];
        if (weapon.classes.includes(characterClass) && remainingSlots(carried, inventory, maximumSlots) >= weapon.slots) {
            validWeapons.push(weapon);
        }
    }

    // Choose one valid weapon at random.
    return validWeapons.random();
}

function getRangedWeapon(carried, inventory, maximumSlots, characterClass) {
    // Define all ranged weapons.
    let weapons = [{
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
            name: 'Shortbow',
            damage: '1d6-1',
            slots: 2,
            classes: ['Deft', 'Strong'],
        },
        {
            name: 'Sling',
            damage: '1d6-2',
            slots: 1,
            classes: ['Deft', 'Strong', 'Wise'],
        },
        {
            name: 'Throwing Knives (5)',
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

    // Determine which weapons are allowed by character class and would fit within remaining slots.
    var validWeapons = [];

    for (let i = 0; i < weapons.length; i++) {
        let weapon = weapons[i];
        if (weapon.classes.includes(characterClass) && remainingSlots(carried, inventory, maximumSlots) >= weapon.slots) {
            validWeapons.push(weapon);
        }
    }

    // Choose one valid weapon at random.
    return validWeapons.random();
}

function getItems(carried, inventory, maximumSlots, maxItems = 20) {
    // Define possible items.
    let possibleItems = [
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
        { name: 'Compass', slots: 1 },
        { name: 'Lockpicks', slots: 1 },
        { name: 'Mirror', slots: 1 },
        { name: 'Ten-foot pole', slots: 1 },
        { name: 'Chalk', slots: 1 },
        { name: 'Twine (50 feet)', slots: 1 },
        { name: 'Rope, silk (50 feet)', slots: 1 },
        { name: 'Rope, hemp (50 feet)', slots: 1 },
    ];

    let items = [];

    // Choose items randomly (that haven't already been selected) until a random threshold has been met.
    // The number of slots to fill is either a random number from 2 to 5, or the number of remaining empty slots, whichever is lower.
    let availableSlots = Math.min(remainingSlots(carried, inventory, maximumSlots), Math.floor(Math.random() * 3 + 2), maxItems);
    while (availableSlots > 0) {
        let item = possibleItems.random();
        if (!items.some(a => a.name === item.name)) {
            items.push(item);
            availableSlots--;
        }
    }

    return items;
}

function getContainers(availableSlots) {
    let availableContainers = [{
            name: 'Backpack',
            maximumSlots: 7,
            items: [],
        },
        {
            name: 'Sack',
            maximumSlots: 5,
            items: [],
        },
        {
            name: 'Bag',
            maximumSlots: 3,
            items: [],
        }
    ];

    // Add containers to list until the number of slots they provide is greater than or equal to the number of slots the character has available.
    let containers = [];
    while (availableSlots > 0) {
        // Select a random container and add it to the list.
        let container = JSON.parse(JSON.stringify(availableContainers.random()));
        containers.push(container);

        // Determine how many slots are still unaccounted for.
        availableSlots -= container.maximumSlots;
    }

    return containers;
}

function populateContainers(containers, inventory) {
    // Randomize the order of containers and inventory before assigning.
    containers = containers.shuffle();
    inventory = inventory.shuffle();

    // Loop through containers, assigning items to them until full.
    for (let i = 0; i < containers.length; i++) {
        let container = containers[i];

        // Determine how many available slots container has left.
        let usedSlots = 0;
        for (k = 0; k < container.items.length; k++) {
            let item = container.items[k];
            usedSlots += item.slots;
        }

        container.remainingSlots = container.maximumSlots - usedSlots;

        // Loop through items and put them in container if possible.
        for (let j = 0; j < inventory.length; j++) {
            let item = inventory[j];
            // Check if item will fit within container. If it does, add it to container and remove it from inventory.
            if (item.slots <= container.remainingSlots) {
                container.items.push(item);
                container.remainingSlots -= item.slots;
            }
        }

        // Remove items from inventory if they've been put in a container.
        for (let l = 0; l < container.items.length; l++) {
            let item = container.items[l];
            let itemIndex = inventory.indexOf(item);
            if (itemIndex > -1) {
                inventory.splice(itemIndex, 1);
            }
        }
    }

    return containers;
}

createInventory('Strong', 10);
function generateQuirk() {
    let quirks = [
        'Used to be a farmer',
        'Family eaten by trolls',
        'Wants to learn how to use magic',
        'Terribly afraid of undead',
        'Always sharpening or polishing weapons',
        'Constantly looks over their shoulder',
        'Extremely forgetful',
        'Scion to an ancient empire',
        'Always singing sea shanties',
        'Hates the dark',
        'Collects small shiny objects',
        'Composes poems',
        'Composes ballads',
        'Has a map of an ancient lost civilization',
        'Has a scroll in a lost tongue',
        'Teeth stained from chewing tobacco',
    ];

    return quirks.random();
}
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
                abbreviation: 'STR',
                score: 0,
                groups: [],
            },
            dexterity: {
                name: 'Dexterity',
                abbreviation: 'DEX',
                score: 0,
                groups: [],
            },
            constitution: {
                name: 'Constitution',
                abbreviation: 'CON',
                score: 0,
                groups: [],
            },
            intelligence: {
                name: 'Intelligence',
                abbreviation: 'INT',
                score: 0,
                groups: [],
            },
            wisdom: {
                name: 'Wisdom',
                abbreviation: 'WIS',
                score: 0,
                groups: [],
            },
            charisma: {
                name: 'Charisma',
                abbreviation: 'CHA',
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

        // Get one set of armor.
        let inventoryInfo = createInventory(this.characterClass, this.attributes.strength.score, this.attributes.constitution.score);
        this.inventory = inventoryInfo.containers;
        this.armorClass = inventoryInfo.armorClass;

        // Give them some unique features.
        let remainingQuirkCount = d(3, 1);
        let i = 0;
        this.quirks = [];
        while (i < remainingQuirkCount) {
            let quirk = generateQuirk();
            if (!this.quirks.includes(quirk)) {
                this.quirks.push(quirk);
                i++;
            }
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
        } else if (this.characterClass == 'Wise' && this.attributes.wisdom.score >= 13) {
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
        this.vocation = generateVocation();

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
            let randomAffiliation = getAffiliation();
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

    updateName() {
        this.name = generateName();
    }
}
// TODO add leveling

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