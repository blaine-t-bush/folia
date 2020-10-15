class Hireling {
    constructor() {
        this.generate();
    }

    generate() {
        // Determine basics.
        this.name = generateName();

        let types = [
            'Mercenary',
            'Porter',
        ];
        this.type = types.random();

        // Determine vitals. They don't need full stats.
        this.hitDice = 1;
        if (this.type == 'Mercenary') {
            this.hitPoints = d(6, 1) + 2;
        } else {
            this.hitPoints = d(6, 1);
        }
        this.attackValue = 11;
        this.savingThrow = 6;

        // Determine equipment.
        // Use the existing character inventory generation. Since that depends on class and attribute scores,
        // make some assumptions. For example, men-at-arms count as Strong so they have access to all weapons and armor.
        // On the other hand, torchbearers and such count as Wise so they have access to very few weapons and armor.
        if (this.type == 'Mercenary') {
            var inventoryInfo = createInventory('Strong', 13, 13, [], true);
        } else {
            var inventoryInfo = createInventory('Wise', 10, 10, [], true);
        }
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
    }
}