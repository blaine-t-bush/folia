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