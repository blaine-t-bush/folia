export const products = [
    {
        name: "Beer glass",
        nameAbbrev: "beerGlass",
        experience: 17.5,
        levelAvailable: 1,
    },
    {
        name: "Empty candle lantern",
        nameAbbrev: "emptyCandleLantern",
        experience: 19,
        levelAvailable: 4,
    },
    {
        name: "Empty oil lamp",
        nameAbbrev: "emptyOilLamp",
        experience: 25,
        levelAvailable: 12,
    },
    {
        name: "Vial",
        nameAbbrev: "vial",
        experience: 35,
        levelAvailable: 33,
    },
    {
        name: "Empty fishbowl",
        nameAbbrev: "emptyFishbowl",
        experience: 42.5,
        levelAvailable: 42,
    },
    {
        name: "Unpowered orb",
        nameAbbrev: "unpoweredOrb",
        experience: 52.5,
        levelAvailable: 46,
    },
    {
        name: "Lantern lens",
        nameAbbrev: "lanternLens",
        experience: 52.5,
        levelAvailable: 49,
    },
    {
        name: "Empty light orb",
        nameAbbrev: "emptyLightOrb",
        experience: 52.5,
        levelAvailable: 87,
    },
];

export function optimalProductByLevel(level) {
    // Filter products down to ones which are available.
    let availableProducts = products.filter(product => product.levelAvailable <= level);

    // Choose product with greatest experience value.
    let optimalProduct = availableProducts.reduce(function(previous, current) {
        if (current.experience > previous.experience) {
            return current;
        } else {
            return previous;
        }
    })

    return optimalProduct;
}

export function experienceRequiredTotal(level) {
    let total = 0;
    for (let l = 1; l < level; l++) {
        total += Math.floor(l + 300*Math.pow(2, l/7));
    }
    return Math.floor(0.25 * total);
}

export function levelByExperience(experience) {
    // Default level is 1.
    let level = 1;

    // For each level AFTER 1, compare the experience required to the current experience.
    // If the current experience is >= required experience, then we've surpassed the threshold, i.e. levelled up.
    for (let l = 2; l < 127; l++) {
        if (experience >= experienceRequiredTotal(l)) {
            level = l;
        } else {
            break;
        }
    }

    return level;
}