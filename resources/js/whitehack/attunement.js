// TODO if attunement is item, add it to inventory

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

    // 30% for a weapon, 30% for a different item, 20% for an animal, 20% for a person.
    let randomChance = Math.random();
    if (randomChance < 0.3) {
        return weapons.random();
    } else if (randomChance < 0.6) {
        return items.random();
    } else if (randomChance < 0.8) {
        return generateName(false, false) + ' the ' + animals.random();
    } else {
        return generateName() + ', ' + generateVocation();
    }
}