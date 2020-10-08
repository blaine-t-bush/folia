function generateVocation() {
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

    return vocations.random();
}