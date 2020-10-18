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