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
function createInventory(characterClass, strengthScore, constitutionScore, attunedItems = []) {
    // Instantiate an empty inventory.
    let carried = [];
    let inventory = [];
    let maximumSlots = Math.max(strengthScore, constitutionScore);

    // TODO add attuned items for Deft.

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
    inventory = inventory.concat(getItems(carried, inventory, maximumSlots));

    // Populate chosen containers with inventory items.
    containers = populateContainers(containers, inventory);

    // Everyone gets a pouch with 6d10 coins.
    containers.unshift({ name: 'Pouch', maximumSlots: 0, items: [{ name: d(10, 6) + ' coins', slots: 0 }] });

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

function getItems(carried, inventory, maximumSlots) {
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
    let availableSlots = Math.min(remainingSlots(carried, inventory, maximumSlots), Math.floor(Math.random() * 3 + 2));
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