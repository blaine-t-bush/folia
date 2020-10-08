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