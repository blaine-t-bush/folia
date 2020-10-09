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