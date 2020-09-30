// Create prototype function on arrays to allow for inline random selection of one element.
Array.prototype.random = function() {
    return this[Math.floor((Math.random() * this.length))];
}

// TODO create a class to represent a character
// TODO update HP function to account for class & stats
// TODO add function to determine number of groups
// TODO add slots
// TODO add starting gold
// TODO add equipment

function d(size) {
    var faces = Array.from(new Array(size), (x, i) => i + 1);
    return faces.random();
}

function generateStat() {
    return d(6) + d(6) + d(6);
}

function generateClass() {
    var classes = [
        'Deft',
        'Strong',
        'Wise'
    ];

    return classes.random();
}

function generateName() {
    var names = [
        'Gobbo Dar',
        'Silva',
        'Ulsak',
        'Elbet',
        'Thunder Foot',
        'Regin',
        'Snuffit',
        'Oddo',
        'Horst',
        'Ugga',
        'Uno Saar',
        'Haxander',
        'Stravka',
        'Saffron',
        'Edelhart',
        'Galvina',
        'Beryl Chard',
        'Rapokes',
        'Thorne',
        'Elwydd',
        'Clivia',
        'Laveri',
        'Raffle',
        'Adelina',
        'Hrain of the Ice',
        'Apok',
        'Gonk',
        'Leander',
        'Lebert Creth',
        'Mercutio',
        'Rathid',
        'Adursi',
        'Furio',
        'Reekwin',
        'Charah',
        'Cletus',
        'Elbaran',
        'Alehir',
        'Beppo',
        'Luena',
        'Morne',
        'Restar',
        'Blind Renly',
        'Alibede'
    ];

    return names.random();
}

function generateVocation() {
    var vocations = [
        'Thief',
        'Monk',
        'Spy',
        'Marksman',
        'Ranger',
        'Assassin',
        'Warrior',
        'Guard',
        'Brigand',
        'Knight',
        'Bounty Hunter',
        'Hunter',
        'Barbarian',
        'Wizard',
        'Priest',
        'Alchemist',
        'Exorcist',
        'Demonologist',
        'Druid',
        'Runecarver',
        'Bard',
        'Mad Scientist'
    ];

    return vocations.random();
}

function generateHitPoints() {
    return d(6);
}

var app = new Vue({
    el: '#app',
    data: {
        characterName: generateName(),
        characterClass: generateClass(),
        characterVocation: generateVocation(),
        characterStats: [{
                name: 'Strength',
                value: generateStat()
            },
            {
                name: 'Dexterity',
                value: generateStat()
            },
            {
                name: 'Constitution',
                value: generateStat()
            },
            {
                name: 'Intelligence',
                value: generateStat()
            },
            {
                name: 'Wisdom',
                value: generateStat()
            },
            {
                name: 'Charisma',
                value: generateStat()
            }
        ],
        hitPoints: generateHitPoints()
    },
    methods: {
        generateCharacter: function() {
            this.characterName = generateName();
            this.characterClass = generateClass();
            this.characterVocation = generateVocation();
            this.characterStats[0].value = generateStat();
            this.characterStats[1].value = generateStat();
            this.characterStats[2].value = generateStat();
            this.characterStats[3].value = generateStat();
            this.characterStats[4].value = generateStat();
            this.characterStats[5].value = generateStat();
            this.hitPoints = generateHitPoints();
        }
    }
})