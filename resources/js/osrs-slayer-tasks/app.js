let quests = [
    { quest: 'Bone Voyage', questId: 'boneVoyage' },
    { quest: 'Cabin Fever', questId: 'cabinFever' },
    { quest: 'Contact!', questId: 'contact' },
    { quest: 'Death Plateau', questId: 'deathPlateau' },
    { quest: 'Death to the Dorgeshuun', questId: 'deathToTheDorgeshuun' },
    { quest: 'Desert Treasure', questId: 'desertTreasure' },
    { quest: 'Dragon Slayer I', questId: 'dragonSlayerI' },
    { quest: 'Dragon Slayer II', questId: 'dragonSlayerIi' },
    { quest: 'Elemental Workshop I', questId: 'elementalWorkshopI' },
    { quest: 'Ernest the Chicken', questId: 'ernestTheChicken' },
    { quest: 'Haunted Mine', questId: 'hauntedMine' },
    { quest: 'Horror from the Deep', questId: 'horrorFromTheDeep' },
    { quest: 'Legends\' Quest', questId: 'legendsQuest' },
    { quest: 'Lost City', questId: 'lostCity' },
    { quest: 'Lunar Diplomacy', questId: 'lunarDiplomacy' },
    { quest: 'Mourning\'s End Part II', questId: 'mourningsEndPartIi' },
    { quest: 'Olaf\'s Quest', questId: 'olafsQuest' },
    { quest: 'A Porcine of Interest', questId: 'aPorcineOfInterest' },
    { quest: 'Priest in Peril', questId: 'priestInPeril' },
    { quest: 'Regicide', questId: 'regicide' },
    { quest: 'Royal Trouble', questId: 'royalTrouble' },
    { quest: 'Rum Deal', questId: 'rumDeal' },
    { quest: 'Skippy and the Mogres', questId: 'skippyAndTheMogres' },
];

let rewards = [
    { unlock: 'Watch the birdie', unlockId: 'watchTheBirdie', unlockIcon: 'https://www.parvifolium.net/images/osrs/unlock_aviansie.png' },
    { unlock: 'I hope you mith me', unlockId: 'iHopeYouMithMe', unlockIcon: 'https://www.parvifolium.net/images/osrs/unlock_mithrilDragon.png' },
    { unlock: 'Seeing red', unlockId: 'seeingRed', unlockIcon: 'https://www.parvifolium.net/images/osrs/unlock_redDragon.png' },
    { unlock: 'Basilocked', unlockId: 'basilocked', unlockIcon: 'https://www.parvifolium.net/images/osrs/unlock_basilisk.png' },
    { unlock: 'Actual Vampyre Slayer', unlockId: 'actualVampyreSlayer', unlockIcon: 'https://www.parvifolium.net/images/osrs/unlock_vampyre.png' },
    { unlock: 'Like a boss', unlockId: 'likeABoss', unlockIcon: 'https://www.parvifolium.net/images/osrs/unlock_boss.png' },
];

let slayerMasters = [
    { master: 'Turael', masterId: 'turael', slayerReq: 1, combatReq: 3, questReq: null, questReqId: null, chatheadIcon: 'https://www.parvifolium.net/images/osrs/turael_chathead.png' },
    { master: 'Spria', masterId: 'spria', slayerReq: 1, combatReq: 5, questReq: 'A Porcine of Interest', questReqId: 'aPorcineOfInterest', chatheadIcon: 'https://www.parvifolium.net/images/osrs/spria_chathead.png' },
    { master: 'Krystilia', masterId: 'krystilia', slayerReq: 1, combatReq: 3, questReq: null, questReqId: null, chatheadIcon: 'https://www.parvifolium.net/images/osrs/krystilia_chathead.png' },
    { master: 'Mazchna', masterId: 'mazchna', slayerReq: 1, combatReq: 20, questReq: 'Priest in Peril', questReqId: 'priestInPeril', chatheadIcon: 'https://www.parvifolium.net/images/osrs/mazchna_chathead.png' },
    { master: 'Vannaka', masterId: 'vannaka', slayerReq: 1, combatReq: 40, questReq: null, questReqId: null, chatheadIcon: 'https://www.parvifolium.net/images/osrs/vannaka_chathead.png' },
    { master: 'Chaeldar', masterId: 'chaeldar', slayerReq: 1, combatReq: 70, questReq: 'Lost City', questReqId: 'lostCity', chatheadIcon: 'https://www.parvifolium.net/images/osrs/chaeldar_chathead.png' },
    { master: 'Konar', masterId: 'konar', slayerReq: 1, combatReq: 75, questReq: null, questReqId: null, chatheadIcon: 'https://www.parvifolium.net/images/osrs/konar_chathead.png' },
    { master: 'Nieve', masterId: 'nieve', slayerReq: 1, combatReq: 85, questReq: null, questReqId: null, chatheadIcon: 'https://www.parvifolium.net/images/osrs/nieve_chathead.png' },
    { master: 'Duradel', masterId: 'duradel', slayerReq: 50, combatReq: 100, questReq: 'Shilo Village', questReqId: 'shiloVillage', chatheadIcon: 'https://www.parvifolium.net/images/osrs/duradel_chathead.png' },
];

let slayerMasterTasks = [
    { master: 'Turael', masterId: 'turael', monster: 'Banshees', monsterId: 'banshee', combatReq: 20, slayerReq: 15, questReq: 'Priest in Peril', questReqId: 'priestInPeril', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8, blocked: false, unavailable: false },
    { master: 'Turael', masterId: 'turael', monster: 'Bats', monsterId: 'bat', combatReq: 5, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Turael', masterId: 'turael', monster: 'Birds', monsterId: 'bird', combatReq: null, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6, blocked: false, unavailable: false },
    { master: 'Turael', masterId: 'turael', monster: 'Bears', monsterId: 'bear', combatReq: 13, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Turael', masterId: 'turael', monster: 'Cave bugs', monsterId: 'caveBug', combatReq: null, slayerReq: 7, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8, blocked: false, unavailable: false },
    { master: 'Turael', masterId: 'turael', monster: 'Cave crawlers', monsterId: 'caveCrawler', combatReq: 10, slayerReq: 10, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8, blocked: false, unavailable: false },
    { master: 'Turael', masterId: 'turael', monster: 'Cave slime', monsterId: 'caveSlime', combatReq: 15, slayerReq: 17, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8, blocked: false, unavailable: false },
    { master: 'Turael', masterId: 'turael', monster: 'Cows', monsterId: 'cow', combatReq: 5, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8, blocked: false, unavailable: false },
    { master: 'Turael', masterId: 'turael', monster: 'Crawling Hands', monsterId: 'crawlingHand', combatReq: null, slayerReq: 5, questReq: 'Priest in Peril', questReqId: 'priestInPeril', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8, blocked: false, unavailable: false },
    { master: 'Turael', masterId: 'turael', monster: 'Dogs', monsterId: 'dog', combatReq: 15, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Turael', masterId: 'turael', monster: 'Dwarves', monsterId: 'dwarve', combatReq: 6, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Turael', masterId: 'turael', monster: 'Ghosts', monsterId: 'ghost', combatReq: 13, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Turael', masterId: 'turael', monster: 'Goblins', monsterId: 'goblin', combatReq: null, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Turael', masterId: 'turael', monster: 'Icefiends', monsterId: 'icefiend', combatReq: 20, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8, blocked: false, unavailable: false },
    { master: 'Turael', masterId: 'turael', monster: 'Kalphites', monsterId: 'kalphite', combatReq: 15, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6, blocked: false, unavailable: false },
    { master: 'Turael', masterId: 'turael', monster: 'Lizards', monsterId: 'lizard', combatReq: null, slayerReq: 22, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8, blocked: false, unavailable: false },
    { master: 'Turael', masterId: 'turael', monster: 'Minotaurs', monsterId: 'minotaur', combatReq: 7, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Turael', masterId: 'turael', monster: 'Monkeys', monsterId: 'monkey', combatReq: null, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6, blocked: false, unavailable: false },
    { master: 'Turael', masterId: 'turael', monster: 'Rats', monsterId: 'rat', combatReq: null, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Turael', masterId: 'turael', monster: 'Scorpions', monsterId: 'scorpion', combatReq: 7, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Turael', masterId: 'turael', monster: 'Skeletons', monsterId: 'skeleton', combatReq: 15, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Turael', masterId: 'turael', monster: 'Sourhogs', monsterId: 'sourhoug', combatReq: null, slayerReq: null, questReq: 'A Porcine of Interest', questReqId: 'aPorcineOfInterest', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8, blocked: false, unavailable: false },
    { master: 'Turael', masterId: 'turael', monster: 'Spiders', monsterId: 'spider', combatReq: null, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6, blocked: false, unavailable: false },
    { master: 'Turael', masterId: 'turael', monster: 'Wolves', monsterId: 'wolf', combatReq: 20, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Turael', masterId: 'turael', monster: 'Zombies', monsterId: 'zombie', combatReq: 10, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Spria', masterId: 'spria', monster: 'Banshees', monsterId: 'banshee', combatReq: 20, slayerReq: 15, questReq: 'Priest in Peril', questReqId: 'priestInPeril', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8, blocked: false, unavailable: false },
    { master: 'Spria', masterId: 'spria', monster: 'Bats', monsterId: 'bat', combatReq: 5, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Spria', masterId: 'spria', monster: 'Birds', monsterId: 'bird', combatReq: null, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6, blocked: false, unavailable: false },
    { master: 'Spria', masterId: 'spria', monster: 'Bears', monsterId: 'bear', combatReq: 13, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Spria', masterId: 'spria', monster: 'Cave bugs', monsterId: 'caveBug', combatReq: null, slayerReq: 7, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8, blocked: false, unavailable: false },
    { master: 'Spria', masterId: 'spria', monster: 'Cave crawlers', monsterId: 'caveCrawler', combatReq: 10, slayerReq: 10, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8, blocked: false, unavailable: false },
    { master: 'Spria', masterId: 'spria', monster: 'Cave slime', monsterId: 'caveSlime', combatReq: 15, slayerReq: 17, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8, blocked: false, unavailable: false },
    { master: 'Spria', masterId: 'spria', monster: 'Cows', monsterId: 'cow', combatReq: 5, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8, blocked: false, unavailable: false },
    { master: 'Spria', masterId: 'spria', monster: 'Crawling Hands', monsterId: 'crawlingHand', combatReq: null, slayerReq: 5, questReq: 'Priest in Peril', questReqId: 'priestInPeril', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8, blocked: false, unavailable: false },
    { master: 'Spria', masterId: 'spria', monster: 'Dogs', monsterId: 'dog', combatReq: 15, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Spria', masterId: 'spria', monster: 'Dwarves', monsterId: 'dwarve', combatReq: 6, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Spria', masterId: 'spria', monster: 'Ghosts', monsterId: 'ghost', combatReq: 13, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Spria', masterId: 'spria', monster: 'Goblins', monsterId: 'goblin', combatReq: null, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Spria', masterId: 'spria', monster: 'Icefiends', monsterId: 'icefiend', combatReq: 20, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8, blocked: false, unavailable: false },
    { master: 'Spria', masterId: 'spria', monster: 'Kalphites', monsterId: 'kalphite', combatReq: 15, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6, blocked: false, unavailable: false },
    { master: 'Spria', masterId: 'spria', monster: 'Lizards', monsterId: 'lizard', combatReq: null, slayerReq: 22, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8, blocked: false, unavailable: false },
    { master: 'Spria', masterId: 'spria', monster: 'Minotaurs', monsterId: 'minotaur', combatReq: 7, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Spria', masterId: 'spria', monster: 'Monkeys', monsterId: 'monkey', combatReq: null, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6, blocked: false, unavailable: false },
    { master: 'Spria', masterId: 'spria', monster: 'Rats', monsterId: 'rat', combatReq: null, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Spria', masterId: 'spria', monster: 'Scorpions', monsterId: 'scorpion', combatReq: 7, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Spria', masterId: 'spria', monster: 'Skeletons', monsterId: 'skeleton', combatReq: 15, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Spria', masterId: 'spria', monster: 'Sourhogs', monsterId: 'sourhoug', combatReq: null, slayerReq: null, questReq: 'A Porcine of Interest', questReqId: 'aPorcineOfInterest', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8, blocked: false, unavailable: false },
    { master: 'Spria', masterId: 'spria', monster: 'Spiders', monsterId: 'spider', combatReq: null, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6, blocked: false, unavailable: false },
    { master: 'Spria', masterId: 'spria', monster: 'Wolves', monsterId: 'wolf', combatReq: 20, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Spria', masterId: 'spria', monster: 'Zombies', monsterId: 'zombie', combatReq: 10, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Krystilia', masterId: 'krystilia', monster: 'Ankou', monsterId: 'ankou', combatReq: null, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6, blocked: false, unavailable: false },
    { master: 'Krystilia', masterId: 'krystilia', monster: 'Aviansie', monsterId: 'aviansie', combatReq: null, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: 60, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Krystilia', masterId: 'krystilia', monster: 'Bandits', monsterId: 'bandit', combatReq: null, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 4, blocked: false, unavailable: false },
    { master: 'Krystilia', masterId: 'krystilia', monster: 'Bears', monsterId: 'bear', combatReq: null, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6, blocked: false, unavailable: false },
    { master: 'Krystilia', masterId: 'krystilia', monster: 'Black Demons', monsterId: 'blackDemon', combatReq: null, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Krystilia', masterId: 'krystilia', monster: 'Black Dragons', monsterId: 'blackDragon', combatReq: null, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 4, blocked: false, unavailable: false },
    { master: 'Krystilia', masterId: 'krystilia', monster: 'Black Knight', monsterId: 'blackKnight', combatReq: null, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 3, blocked: false, unavailable: false },
    { master: 'Krystilia', masterId: 'krystilia', monster: 'Bloodveld', monsterId: 'bloodveld', combatReq: null, slayerReq: 50, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: 60, ancientCavernReq: false, weight: 4, blocked: false, unavailable: false },
    { master: 'Krystilia', masterId: 'krystilia', monster: 'Chaos Druids', monsterId: 'chaosDruid', combatReq: null, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 5, blocked: false, unavailable: false },
    { master: 'Krystilia', masterId: 'krystilia', monster: 'Dark Warriors', monsterId: 'darkWarrior', combatReq: null, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 4, blocked: false, unavailable: false },
    { master: 'Krystilia', masterId: 'krystilia', monster: 'Earth warrior', monsterId: 'earthWarrior', combatReq: null, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6, blocked: false, unavailable: false },
    { master: 'Krystilia', masterId: 'krystilia', monster: 'Ent', monsterId: 'ent', combatReq: null, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 5, blocked: false, unavailable: false },
    { master: 'Krystilia', masterId: 'krystilia', monster: 'Fire giant', monsterId: 'fireGiant', combatReq: null, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Krystilia', masterId: 'krystilia', monster: 'Greater demon', monsterId: 'greaterDemon', combatReq: null, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8, blocked: false, unavailable: false },
    { master: 'Krystilia', masterId: 'krystilia', monster: 'Green dragon', monsterId: 'greenDragon', combatReq: null, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 4, blocked: false, unavailable: false },
    { master: 'Krystilia', masterId: 'krystilia', monster: 'Hellhound', monsterId: 'hellhound', combatReq: null, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Krystilia', masterId: 'krystilia', monster: 'Hill Giant', monsterId: 'hillGiant', combatReq: null, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 3, blocked: false, unavailable: false },
    { master: 'Krystilia', masterId: 'krystilia', monster: 'Ice giant', monsterId: 'iceGiant', combatReq: null, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6, blocked: false, unavailable: false },
    { master: 'Krystilia', masterId: 'krystilia', monster: 'Ice warrior', monsterId: 'iceWarrior', combatReq: null, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Krystilia', masterId: 'krystilia', monster: 'Lava dragon', monsterId: 'lavaDragon', combatReq: null, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 3, blocked: false, unavailable: false },
    { master: 'Krystilia', masterId: 'krystilia', monster: 'Lesser demon', monsterId: 'lesserDemon', combatReq: null, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6, blocked: false, unavailable: false },
    { master: 'Krystilia', masterId: 'krystilia', monster: 'Magic axe', monsterId: 'magicAxe', combatReq: null, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Krystilia', masterId: 'krystilia', monster: 'Mammoth', monsterId: 'mammoth', combatReq: null, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6, blocked: false, unavailable: false },
    { master: 'Krystilia', masterId: 'krystilia', monster: 'Moss giant', monsterId: 'mossGiant', combatReq: null, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 4, blocked: false, unavailable: false },
    { master: 'Krystilia', masterId: 'krystilia', monster: 'Pirate', monsterId: 'pirate', combatReq: null, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 3, blocked: false, unavailable: false },
    { master: 'Krystilia', masterId: 'krystilia', monster: 'Revenant', monsterId: 'revenant', combatReq: null, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 5, blocked: false, unavailable: false },
    { master: 'Krystilia', masterId: 'krystilia', monster: 'Rogue', monsterId: 'rogue', combatReq: null, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 5, blocked: false, unavailable: false },
    { master: 'Krystilia', masterId: 'krystilia', monster: 'Scorpion', monsterId: 'scorpion', combatReq: null, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6, blocked: false, unavailable: false },
    { master: 'Krystilia', masterId: 'krystilia', monster: 'Skeleton', monsterId: 'skeleton', combatReq: null, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 5, blocked: false, unavailable: false },
    { master: 'Krystilia', masterId: 'krystilia', monster: 'Spider', monsterId: 'spider', combatReq: null, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6, blocked: false, unavailable: false },
    { master: 'Krystilia', masterId: 'krystilia', monster: 'Spiritual creatures', monsterId: 'spiritualCreature', combatReq: null, slayerReq: 68, questReq: 'Death Plateau', questReqId: 'deathPlateau', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: 60, ancientCavernReq: false, weight: 6, blocked: false, unavailable: false },
    { master: 'Krystilia', masterId: 'krystilia', monster: 'Zombie', monsterId: 'zombie', combatReq: null, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 3, blocked: false, unavailable: false },
    { master: 'Krystilia', masterId: 'krystilia', monster: 'Wilderness Bosses', monsterId: 'wildernessBoss', combatReq: null, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8, blocked: false, unavailable: false },
    { master: 'Mazchna', masterId: 'mazchna', monster: 'Banshee', monsterId: 'banshee', combatReq: 20, slayerReq: 15, questReq: 'Priest in Peril', questReqId: 'priestInPeril', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8, blocked: false, unavailable: false },
    { master: 'Mazchna', masterId: 'mazchna', monster: 'Bat', monsterId: 'bat', combatReq: 5, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Mazchna', masterId: 'mazchna', monster: 'Bears', monsterId: 'bear', combatReq: 13, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6, blocked: false, unavailable: false },
    { master: 'Mazchna', masterId: 'mazchna', monster: 'Catablepon', monsterId: 'catablepon', combatReq: 35, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8, blocked: false, unavailable: false },
    { master: 'Mazchna', masterId: 'mazchna', monster: 'Cave bugs', monsterId: 'caveBug', combatReq: null, slayerReq: 7, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8, blocked: false, unavailable: false },
    { master: 'Mazchna', masterId: 'mazchna', monster: 'Cave crawlers', monsterId: 'caveCrawler', combatReq: 10, slayerReq: 10, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8, blocked: false, unavailable: false },
    { master: 'Mazchna', masterId: 'mazchna', monster: 'Cave slime', monsterId: 'caveSlime', combatReq: 15, slayerReq: 17, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8, blocked: false, unavailable: false },
    { master: 'Mazchna', masterId: 'mazchna', monster: 'Cockatrice', monsterId: 'cockatrice', combatReq: 25, slayerReq: 25, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: 20, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8, blocked: false, unavailable: false },
    { master: 'Mazchna', masterId: 'mazchna', monster: 'Crawling Hands', monsterId: 'crawlingHand', combatReq: null, slayerReq: 5, questReq: 'Priest in Peril', questReqId: 'priestInPeril', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8, blocked: false, unavailable: false },
    { master: 'Mazchna', masterId: 'mazchna', monster: 'Lizards', monsterId: 'lizard', combatReq: null, slayerReq: 22, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8, blocked: false, unavailable: false },
    { master: 'Mazchna', masterId: 'mazchna', monster: 'Dogs', monsterId: 'dog', combatReq: 15, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Mazchna', masterId: 'mazchna', monster: 'Earth warrior', monsterId: 'earthWarrior', combatReq: 35, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6, blocked: false, unavailable: false },
    { master: 'Mazchna', masterId: 'mazchna', monster: 'Flesh Crawler', monsterId: 'fleshCrawler', combatReq: 15, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Mazchna', masterId: 'mazchna', monster: 'Ghosts', monsterId: 'ghost', combatReq: 13, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Mazchna', masterId: 'mazchna', monster: 'Ghouls', monsterId: 'ghoul', combatReq: 25, slayerReq: null, questReq: 'Priest in Peril', questReqId: 'priestInPeril', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Mazchna', masterId: 'mazchna', monster: 'Hill Giants', monsterId: 'hillGiant', combatReq: 25, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Mazchna', masterId: 'mazchna', monster: 'Hobgoblins', monsterId: 'hobgoblin', combatReq: 20, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Mazchna', masterId: 'mazchna', monster: 'Ice warriors', monsterId: 'iceWarrior', combatReq: 45, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Mazchna', masterId: 'mazchna', monster: 'Kalphites', monsterId: 'kalphite', combatReq: 15, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6, blocked: false, unavailable: false },
    { master: 'Mazchna', masterId: 'mazchna', monster: 'Killerwatt', monsterId: 'killerwatt', combatReq: 50, slayerReq: 37, questReq: 'Ernest the Chicken', questReqId: 'ernestTheChicken', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6, blocked: false, unavailable: false },
    { master: 'Mazchna', masterId: 'mazchna', monster: 'Mogres', monsterId: 'mogre', combatReq: 30, slayerReq: 32, questReq: 'Skippy and the Mogres', questReqId: 'skippyAndTheMogres', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8, blocked: false, unavailable: false },
    { master: 'Mazchna', masterId: 'mazchna', monster: 'Pyrefiend', monsterId: 'pyrefiend', combatReq: 25, slayerReq: 30, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8, blocked: false, unavailable: false },
    { master: 'Mazchna', masterId: 'mazchna', monster: 'Rockslug', monsterId: 'rockslug', combatReq: 20, slayerReq: 20, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8, blocked: false, unavailable: false },
    { master: 'Mazchna', masterId: 'mazchna', monster: 'Scorpion', monsterId: 'scorpion', combatReq: 7, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Mazchna', masterId: 'mazchna', monster: 'Shades', monsterId: 'shade', combatReq: 30, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8, blocked: false, unavailable: false },
    { master: 'Mazchna', masterId: 'mazchna', monster: 'Skeletons', monsterId: 'skeleton', combatReq: 15, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Mazchna', masterId: 'mazchna', monster: 'Vampyres', monsterId: 'vampyre', combatReq: 35, slayerReq: null, questReq: 'Priest in Peril', questReqId: 'priestInPeril', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6, blocked: false, unavailable: false },
    { master: 'Mazchna', masterId: 'mazchna', monster: 'Wall beasts', monsterId: 'wallBeast', combatReq: 30, slayerReq: 35, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: 5, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Mazchna', masterId: 'mazchna', monster: 'Wolves', monsterId: 'wolf', combatReq: 20, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Mazchna', masterId: 'mazchna', monster: 'Zombies', monsterId: 'zombie', combatReq: 10, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Vannaka', masterId: 'vannaka', monster: 'Aberrant spectres', monsterId: 'aberrantSpectre', combatReq: 65, slayerReq: 60, questReq: 'Priest in Peril', questReqId: 'priestInPeril', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8, blocked: false, unavailable: false },
    { master: 'Vannaka', masterId: 'vannaka', monster: 'Abyssal demons', monsterId: 'abyssalDemon', combatReq: 85, slayerReq: 85, questReq: 'Priest in Peril', questReqId: 'priestInPeril', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 5, blocked: false, unavailable: false },
    { master: 'Vannaka', masterId: 'vannaka', monster: 'Ankou', monsterId: 'ankou', combatReq: 40, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Vannaka', masterId: 'vannaka', monster: 'Banshees', monsterId: 'banshee', combatReq: 20, slayerReq: 15, questReq: 'Priest in Peril', questReqId: 'priestInPeril', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6, blocked: false, unavailable: false },
    { master: 'Vannaka', masterId: 'vannaka', monster: 'Basilisks', monsterId: 'basilisk', combatReq: 40, slayerReq: 40, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: 20, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8, blocked: false, unavailable: false },
    { master: 'Vannaka', masterId: 'vannaka', monster: 'Bloodveld', monsterId: 'bloodveld', combatReq: 50, slayerReq: 50, questReq: 'Priest in Peril', questReqId: 'priestInPeril', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8, blocked: false, unavailable: false },
    { master: 'Vannaka', masterId: 'vannaka', monster: 'Blue dragons', monsterId: 'blueDragon', combatReq: 65, slayerReq: null, questReq: 'Dragon Slayer', questReqId: 'dragonSlayerI', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Vannaka', masterId: 'vannaka', monster: 'Brine rat', monsterId: 'brineRat', combatReq: 45, slayerReq: 47, questReq: 'Olaf\'s Quest', questReqId: 'olafsQuest', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Vannaka', masterId: 'vannaka', monster: 'Bronze dragons', monsterId: 'bronzeDragon', combatReq: 75, slayerReq: null, questReq: 'Dragon Slayer', questReqId: 'dragonSlayerI', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Vannaka', masterId: 'vannaka', monster: 'Cave bugs', monsterId: 'caveBug', combatReq: null, slayerReq: 7, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Vannaka', masterId: 'vannaka', monster: 'Cave crawlers', monsterId: 'caveCrawler', combatReq: 10, slayerReq: 10, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Vannaka', masterId: 'vannaka', monster: 'Cave slime', monsterId: 'caveSlime', combatReq: 15, slayerReq: 17, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Vannaka', masterId: 'vannaka', monster: 'Cockatrice', monsterId: 'cockatrice', combatReq: 25, slayerReq: 25, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: 20, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8, blocked: false, unavailable: false },
    { master: 'Vannaka', masterId: 'vannaka', monster: 'Crawling Hands', monsterId: 'crawlingHand', combatReq: null, slayerReq: 5, questReq: 'Priest in Peril', questReqId: 'priestInPeril', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6, blocked: false, unavailable: false },
    { master: 'Vannaka', masterId: 'vannaka', monster: 'Crocodile', monsterId: 'crocodile', combatReq: 50, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6, blocked: false, unavailable: false },
    { master: 'Vannaka', masterId: 'vannaka', monster: 'Dagannoth', monsterId: 'dagannoth', combatReq: 75, slayerReq: null, questReq: 'Horror from the Deep', questReqId: 'horrorFromTheDeep', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Vannaka', masterId: 'vannaka', monster: 'Dust devils', monsterId: 'dustDevil', combatReq: 70, slayerReq: 65, questReq: 'Desert Treasure', questReqId: 'desertTreasure', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8, blocked: false, unavailable: false },
    { master: 'Vannaka', masterId: 'vannaka', monster: 'Earth warriors', monsterId: 'earthWarrior', combatReq: 35, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: 15, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6, blocked: false, unavailable: false },
    { master: 'Vannaka', masterId: 'vannaka', monster: 'Elves', monsterId: 'elf', combatReq: 70, slayerReq: null, questReq: 'Regicide', questReqId: 'regicide', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Vannaka', masterId: 'vannaka', monster: 'Fever spiders', monsterId: 'feverSpider', combatReq: 40, slayerReq: 42, questReq: 'Rum Deal', questReqId: 'rumDeal', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Vannaka', masterId: 'vannaka', monster: 'Fire giants', monsterId: 'fireGiant', combatReq: 65, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Vannaka', masterId: 'vannaka', monster: 'Gargoyles', monsterId: 'gargoyle', combatReq: 80, slayerReq: 75, questReq: 'Priest in Peril', questReqId: 'priestInPeril', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 5, blocked: false, unavailable: false },
    { master: 'Vannaka', masterId: 'vannaka', monster: 'Ghouls', monsterId: 'ghoul', combatReq: 25, slayerReq: null, questReq: 'Priest in Peril', questReqId: 'priestInPeril', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Vannaka', masterId: 'vannaka', monster: 'Green dragons', monsterId: 'greenDragon', combatReq: 52, slayerReq: null, questReq: 'Dragon Slayer', questReqId: 'dragonSlayerI', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6, blocked: false, unavailable: false },
    { master: 'Vannaka', masterId: 'vannaka', monster: 'Harpie Bug Swarm', monsterId: 'harpieBugSwarm', combatReq: 45, slayerReq: 33, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: 33, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8, blocked: false, unavailable: false },
    { master: 'Vannaka', masterId: 'vannaka', monster: 'Hellhounds', monsterId: 'hellhound', combatReq: 75, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Vannaka', masterId: 'vannaka', monster: 'Hill Giant', monsterId: 'hillGiant', combatReq: 25, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Vannaka', masterId: 'vannaka', monster: 'Hobgoblins', monsterId: 'hobgoblin', combatReq: 20, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Vannaka', masterId: 'vannaka', monster: 'Ice giants', monsterId: 'iceGiant', combatReq: 50, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Vannaka', masterId: 'vannaka', monster: 'Ice warriors', monsterId: 'iceWarrior', combatReq: 45, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Vannaka', masterId: 'vannaka', monster: 'Infernal Mages', monsterId: 'infernalMage', combatReq: 40, slayerReq: 45, questReq: 'Priest in Peril', questReqId: 'priestInPeril', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8, blocked: false, unavailable: false },
    { master: 'Vannaka', masterId: 'vannaka', monster: 'Jellies', monsterId: 'jelly', combatReq: 57, slayerReq: 52, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8, blocked: false, unavailable: false },
    { master: 'Vannaka', masterId: 'vannaka', monster: 'Jungle horrors', monsterId: 'jungleHorror', combatReq: 65, slayerReq: null, questReq: 'Cabin Fever', questReqId: 'cabinDever', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8, blocked: false, unavailable: false },
    { master: 'Vannaka', masterId: 'vannaka', monster: 'Kalphites', monsterId: 'kalphite', combatReq: 15, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Vannaka', masterId: 'vannaka', monster: 'Killerwatts', monsterId: 'killerwatt', combatReq: 50, slayerReq: 37, questReq: 'Ernest the Chicken', questReqId: 'ernestTheChicken', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6, blocked: false, unavailable: false },
    { master: 'Vannaka', masterId: 'vannaka', monster: 'Kurask', monsterId: 'kurask', combatReq: 65, slayerReq: 70, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Vannaka', masterId: 'vannaka', monster: 'Lizards', monsterId: 'lizard', combatReq: null, slayerReq: 22, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Vannaka', masterId: 'vannaka', monster: 'Lesser demons', monsterId: 'lesserDemon', combatReq: 60, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Vannaka', masterId: 'vannaka', monster: 'Mogres', monsterId: 'mogre', combatReq: 30, slayerReq: 32, questReq: 'Skippy and the Mogres', questReqId: 'skippyAndTheMogres', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Vannaka', masterId: 'vannaka', monster: 'Molanisk', monsterId: 'molanisk', combatReq: 50, slayerReq: 39, questReq: 'Death to the Dorgeshuun', questReqId: 'deathToTheDorgeshuun', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Vannaka', masterId: 'vannaka', monster: 'Moss giant', monsterId: 'mossGiant', combatReq: 40, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Vannaka', masterId: 'vannaka', monster: 'Nechryael', monsterId: 'nechryael', combatReq: 85, slayerReq: 80, questReq: 'Priest in Peril', questReqId: 'priestInPeril', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 5, blocked: false, unavailable: false },
    { master: 'Vannaka', masterId: 'vannaka', monster: 'Ogres', monsterId: 'ogre', combatReq: 40, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Vannaka', masterId: 'vannaka', monster: 'Otherworldly beings', monsterId: 'otherworldlyBeing', combatReq: 40, slayerReq: null, questReq: 'Lost City', questReqId: 'lostCity', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8, blocked: false, unavailable: false },
    { master: 'Vannaka', masterId: 'vannaka', monster: 'Pyrefiends', monsterId: 'pyrefiend', combatReq: 25, slayerReq: 30, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8, blocked: false, unavailable: false },
    { master: 'Vannaka', masterId: 'vannaka', monster: 'Rockslugs', monsterId: 'rockslug', combatReq: 20, slayerReq: 20, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Vannaka', masterId: 'vannaka', monster: 'Shades', monsterId: 'shade', combatReq: 30, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8, blocked: false, unavailable: false },
    { master: 'Vannaka', masterId: 'vannaka', monster: 'Sea snakes', monsterId: 'seaSnake', combatReq: 50, slayerReq: 40, questReq: 'Royal Trouble', questReqId: 'royalTrouble', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6, blocked: false, unavailable: false },
    { master: 'Vannaka', masterId: 'vannaka', monster: 'Shadow warriors', monsterId: 'shadowWarrior', combatReq: 60, slayerReq: null, questReq: 'Legends\' Quest', questReqId: 'legendsQuest', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8, blocked: false, unavailable: false },
    { master: 'Vannaka', masterId: 'vannaka', monster: 'Spiritual creatures', monsterId: 'spiritualCreature', combatReq: 60, slayerReq: 63, questReq: 'Death Plateau', questReqId: 'deathPlateau', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: 60, ancientCavernReq: false, weight: 8, blocked: false, unavailable: false },
    { master: 'Vannaka', masterId: 'vannaka', monster: 'Terror dogs', monsterId: 'terrorDog', combatReq: 60, slayerReq: 40, questReq: 'Haunted Mine', questReqId: 'hauntedMine', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6, blocked: false, unavailable: false },
    { master: 'Vannaka', masterId: 'vannaka', monster: 'Trolls', monsterId: 'troll', combatReq: 60, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Vannaka', masterId: 'vannaka', monster: 'Turoth', monsterId: 'turoth', combatReq: 60, slayerReq: 55, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8, blocked: false, unavailable: false },
    { master: 'Vannaka', masterId: 'vannaka', monster: 'Vampyre', monsterId: 'vampyre', combatReq: 35, slayerReq: null, questReq: 'Priest in Peril', questReqId: 'priestInPeril', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Vannaka', masterId: 'vannaka', monster: 'Wall beast', monsterId: 'wallBeast', combatReq: 30, slayerReq: 35, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: 5, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6, blocked: false, unavailable: false },
    { master: 'Vannaka', masterId: 'vannaka', monster: 'Werewolf', monsterId: 'werewolf', combatReq: 60, slayerReq: null, questReq: 'Priest in Peril', questReqId: 'priestInPeril', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Chaeldar', masterId: 'chaeldar', monster: 'Aberrant spectres', monsterId: 'aberrantSpectre', combatReq: 65, slayerReq: 60, questReq: 'Priest in Peril', questReqId: 'priestInPeril', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8, blocked: false, unavailable: false },
    { master: 'Chaeldar', masterId: 'chaeldar', monster: 'Abyssal demons', monsterId: 'abyssalDemon', combatReq: 85, slayerReq: 85, questReq: 'Priest in Peril', questReqId: 'priestInPeril', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 12, blocked: false, unavailable: false },
    { master: 'Chaeldar', masterId: 'chaeldar', monster: 'Aviansies', monsterId: 'aviansie', combatReq: null, slayerReq: null, questReq: null, questReqId: null, unlockReq: 'Watch the birdie', unlockReqId: 'watchTheBirdie', agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 9, blocked: false, unavailable: false },
    { master: 'Chaeldar', masterId: 'chaeldar', monster: 'Banshees', monsterId: 'banshee', combatReq: 20, slayerReq: 15, questReq: 'Priest in Peril', questReqId: 'priestInPeril', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 5, blocked: false, unavailable: false },
    { master: 'Chaeldar', masterId: 'chaeldar', monster: 'Basilisks', monsterId: 'basilisk', combatReq: 40, slayerReq: 40, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: 20, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Chaeldar', masterId: 'chaeldar', monster: 'Black demons', monsterId: 'blackDemon', combatReq: 80, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 10, blocked: false, unavailable: false },
    { master: 'Chaeldar', masterId: 'chaeldar', monster: 'Bloodveld', monsterId: 'bloodveld', combatReq: 50, slayerReq: 50, questReq: 'Priest in Peril', questReqId: 'priestInPeril', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8, blocked: false, unavailable: false },
    { master: 'Chaeldar', masterId: 'chaeldar', monster: 'Blue dragons', monsterId: 'blueDragon', combatReq: 65, slayerReq: null, questReq: 'Dragon Slayer', questReqId: 'dragonSlayerI', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8, blocked: false, unavailable: false },
    { master: 'Chaeldar', masterId: 'chaeldar', monster: 'Brine rat', monsterId: 'brineRat', combatReq: 45, slayerReq: 47, questReq: 'Olaf\'s Quest', questReqId: 'olafsQuest', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Chaeldar', masterId: 'chaeldar', monster: 'Bronze dragon', monsterId: 'bronzeDragon', combatReq: 75, slayerReq: 10, questReq: 'Dragon Slayer', questReqId: 'dragonSlayerI', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 11, blocked: false, unavailable: false },
    { master: 'Chaeldar', masterId: 'chaeldar', monster: 'Cave crawler', monsterId: 'caveCrawler', combatReq: 10, slayerReq: 10, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 5, blocked: false, unavailable: false },
    { master: 'Chaeldar', masterId: 'chaeldar', monster: 'Cave horror', monsterId: 'caveHorror', combatReq: 85, slayerReq: 58, questReq: 'Cabin Fever', questReqId: 'cabinFever', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 10, blocked: false, unavailable: false },
    { master: 'Chaeldar', masterId: 'chaeldar', monster: 'Cave kraken', monsterId: 'caveKraken', combatReq: 80, slayerReq: 87, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: 50, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 12, blocked: false, unavailable: false },
    { master: 'Chaeldar', masterId: 'chaeldar', monster: 'Cave slimes', monsterId: 'caveSlime', combatReq: 15, slayerReq: 17, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6, blocked: false, unavailable: false },
    { master: 'Chaeldar', masterId: 'chaeldar', monster: 'Cockatrice', monsterId: 'cockatrice', combatReq: 25, slayerReq: 25, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: 20, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6, blocked: false, unavailable: false },
    { master: 'Chaeldar', masterId: 'chaeldar', monster: 'Dagannoth', monsterId: 'dagannoth', combatReq: 75, slayerReq: null, questReq: 'Horror from the Deep', questReqId: 'horrorFromTheDeep', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 11, blocked: false, unavailable: false },
    { master: 'Chaeldar', masterId: 'chaeldar', monster: 'Dust devils', monsterId: 'dustDevil', combatReq: 70, slayerReq: 65, questReq: 'Desert Treasure', questReqId: 'desertTreasure', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 9, blocked: false, unavailable: false },
    { master: 'Chaeldar', masterId: 'chaeldar', monster: 'Elves', monsterId: 'elf', combatReq: 70, slayerReq: null, questReq: 'Regicide', questReqId: 'regicide', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8, blocked: false, unavailable: false },
    { master: 'Chaeldar', masterId: 'chaeldar', monster: 'Fever spider', monsterId: 'feverSpider', combatReq: 40, slayerReq: 42, questReq: 'Rum Deal', questReqId: 'rumDeal', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Chaeldar', masterId: 'chaeldar', monster: 'Fire giant', monsterId: 'fireGiant', combatReq: 65, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 12, blocked: false, unavailable: false },
    { master: 'Chaeldar', masterId: 'chaeldar', monster: 'Fossil Island Wyverns', monsterId: 'fossilIslandWyvern', combatReq: 60, slayerReq: 66, questReq: 'Bone Voyage,Elemental Workshop I', questReqId: 'boneVoyage,elementalWorkshopI', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Chaeldar', masterId: 'chaeldar', monster: 'Gargoyles', monsterId: 'gargoyle', combatReq: 80, slayerReq: 75, questReq: 'Priest in Peril', questReqId: 'priestInPeril', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 11, blocked: false, unavailable: false },
    { master: 'Chaeldar', masterId: 'chaeldar', monster: 'Greater demons', monsterId: 'greaterDemon', combatReq: 70, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 9, blocked: false, unavailable: false },
    { master: 'Chaeldar', masterId: 'chaeldar', monster: 'Harpie Bug Swarms', monsterId: 'harpieBugSwarm', combatReq: 45, slayerReq: 33, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: 33, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6, blocked: false, unavailable: false },
    { master: 'Chaeldar', masterId: 'chaeldar', monster: 'Hellhound', monsterId: 'hellhound', combatReq: 75, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 9, blocked: false, unavailable: false },
    { master: 'Chaeldar', masterId: 'chaeldar', monster: 'Infernal Mages', monsterId: 'infernalMage', combatReq: 40, slayerReq: 45, questReq: 'Priest in Peril', questReqId: 'priestInPeril', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Chaeldar', masterId: 'chaeldar', monster: 'Iron dragon', monsterId: 'ironDragon', combatReq: 80, slayerReq: null, questReq: 'Dragon Slayer', questReqId: 'dragonSlayerI', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 12, blocked: false, unavailable: false },
    { master: 'Chaeldar', masterId: 'chaeldar', monster: 'Jellies', monsterId: 'jelly', combatReq: 57, slayerReq: 52, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 10, blocked: false, unavailable: false },
    { master: 'Chaeldar', masterId: 'chaeldar', monster: 'Jungle horrors', monsterId: 'jungleHorror', combatReq: 65, slayerReq: null, questReq: 'Cabin Fever', questReqId: 'cabinFever', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 10, blocked: false, unavailable: false },
    { master: 'Chaeldar', masterId: 'chaeldar', monster: 'Kalphite', monsterId: 'kalphite', combatReq: 15, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 11, blocked: false, unavailable: false },
    { master: 'Chaeldar', masterId: 'chaeldar', monster: 'Kurask', monsterId: 'kurask', combatReq: 65, slayerReq: 70, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 12, blocked: false, unavailable: false },
    { master: 'Chaeldar', masterId: 'chaeldar', monster: 'Lesser demons', monsterId: 'lesserDemon', combatReq: 60, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 9, blocked: false, unavailable: false },
    { master: 'Chaeldar', masterId: 'chaeldar', monster: 'Lizardmen', monsterId: 'lizardmen', combatReq: null, slayerReq: null, questReq: null, questReqId: null, unlockReq: 'Reptile got ripped', unlockReqId: 'reptileGotRipped', agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8, blocked: false, unavailable: false },
    { master: 'Chaeldar', masterId: 'chaeldar', monster: 'Lizards', monsterId: 'lizard', combatReq: 22, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 5, blocked: false, unavailable: false },
    { master: 'Chaeldar', masterId: 'chaeldar', monster: 'Mogre', monsterId: 'mogre', combatReq: 30, slayerReq: 32, questReq: 'Skippy and the Mogres', questReqId: 'skippyAndTheMogres', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6, blocked: false, unavailable: false },
    { master: 'Chaeldar', masterId: 'chaeldar', monster: 'Molanisk', monsterId: 'molanisk', combatReq: 50, slayerReq: 39, questReq: 'Death to the Dorgeshuun', questReqId: 'deathToTheDorgeshuun', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6, blocked: false, unavailable: false },
    { master: 'Chaeldar', masterId: 'chaeldar', monster: 'Mutated zygomites', monsterId: 'mutatedZygomite', combatReq: 60, slayerReq: 57, questReq: 'Lost City', questReqId: 'lostCity', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Chaeldar', masterId: 'chaeldar', monster: 'Nechryael', monsterId: 'nechryael', combatReq: 85, slayerReq: 80, questReq: 'Priest in Peril', questReqId: 'priestInPeril', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 12, blocked: false, unavailable: false },
    { master: 'Chaeldar', masterId: 'chaeldar', monster: 'Pyrefiends', monsterId: 'pyrefiend', combatReq: 25, slayerReq: 30, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6, blocked: false, unavailable: false },
    { master: 'Chaeldar', masterId: 'chaeldar', monster: 'Rockslugs', monsterId: 'rockslug', combatReq: 20, slayerReq: 20, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 5, blocked: false, unavailable: false },
    { master: 'Chaeldar', masterId: 'chaeldar', monster: 'Shadow warriors', monsterId: 'shadowWarrior', combatReq: 60, slayerReq: null, questReq: 'Legend\'s Quest', questReqId: 'legendsQuest', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8, blocked: false, unavailable: false },
    { master: 'Chaeldar', masterId: 'chaeldar', monster: 'Skeletal Wyverns', monsterId: 'skeletalWyvern', combatReq: 70, slayerReq: 72, questReq: 'Elemental Workshop I', questReqId: 'elementalWorkshopI', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Chaeldar', masterId: 'chaeldar', monster: 'Spiritual creatures', monsterId: 'spiritualCreature', combatReq: 60, slayerReq: 63, questReq: 'Death Plateau', questReqId: 'deathPlateau', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: 60, ancientCavernReq: false, weight: 12, blocked: false, unavailable: false },
    { master: 'Chaeldar', masterId: 'chaeldar', monster: 'Steel dragon', monsterId: 'steelDragon', combatReq: 85, slayerReq: null, questReq: 'Dragon Slayer', questReqId: 'dragonSlayerI', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 9, blocked: false, unavailable: false },
    { master: 'Chaeldar', masterId: 'chaeldar', monster: 'Trolls', monsterId: 'troll', combatReq: 60, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 11, blocked: false, unavailable: false },
    { master: 'Chaeldar', masterId: 'chaeldar', monster: 'Turoth', monsterId: 'turoth', combatReq: 60, slayerReq: 55, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 10, blocked: false, unavailable: false },
    { master: 'Chaeldar', masterId: 'chaeldar', monster: 'TzHaar', monsterId: 'tzhaar', combatReq: null, slayerReq: null, questReq: null, questReqId: null, unlockReq: 'Hot stuff', unlockReqId: 'hotStuff', agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8, blocked: false, unavailable: false },
    { master: 'Chaeldar', masterId: 'chaeldar', monster: 'Vampyre', monsterId: 'vampyre', combatReq: null, slayerReq: null, questReq: null, questReqId: null, unlockReq: 'Actual Vampyre Slayer', unlockReqId: 'actualVampyreSlayer', agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6, blocked: false, unavailable: false },
    { master: 'Chaeldar', masterId: 'chaeldar', monster: 'Wall beast', monsterId: 'wallBeast', combatReq: 30, slayerReq: 35, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: 5, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6, blocked: false, unavailable: false },
    { master: 'Chaeldar', masterId: 'chaeldar', monster: 'Wyrm', monsterId: 'wyrm', combatReq: null, slayerReq: 62, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6, blocked: false, unavailable: false },
    { master: 'Konar', masterId: 'konar', monster: 'Aberrant spectres', monsterId: 'aberrantSpectre', combatReq: 65, slayerReq: 60, questReq: 'Priest in Peril', questReqId: 'priestInPeril', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6, blocked: false, unavailable: false },
    { master: 'Konar', masterId: 'konar', monster: 'Abyssal demons', monsterId: 'abyssalDemon', combatReq: 85, slayerReq: 85, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 9, blocked: false, unavailable: false },
    { master: 'Konar', masterId: 'konar', monster: 'Adamant dragons', monsterId: 'adamantDragon', combatReq: null, slayerReq: null, questReq: 'Dragon Slayer II', questReqId: 'dragonSlayerIi', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 5, blocked: false, unavailable: false },
    { master: 'Konar', masterId: 'konar', monster: 'Ankou', monsterId: 'ankou', combatReq: 40, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 5, blocked: false, unavailable: false },
    { master: 'Konar', masterId: 'konar', monster: 'Aviansie', monsterId: 'aviansie', combatReq: null, slayerReq: null, questReq: null, questReqId: null, unlockReq: 'Watch the birdie', unlockReqId: 'watchTheBirdie', agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6, blocked: false, unavailable: false },
    { master: 'Konar', masterId: 'konar', monster: 'Basilisk', monsterId: 'basilisk', combatReq: null, slayerReq: 40, questReq: null, questReqId: null, unlockReq: 'Basilocked', unlockReqId: 'basilocked', agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 5, blocked: false, unavailable: false },
    { master: 'Konar', masterId: 'konar', monster: 'Black demons', monsterId: 'blackDemon', combatReq: 80, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 9, blocked: false, unavailable: false },
    { master: 'Konar', masterId: 'konar', monster: 'Black dragons', monsterId: 'blackDragon', combatReq: 80, slayerReq: null, questReq: 'Dragon Slayer', questReqId: 'dragonSlayerI', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6, blocked: false, unavailable: false },
    { master: 'Konar', masterId: 'konar', monster: 'Bloodvelds', monsterId: 'bloodveld', combatReq: 50, slayerReq: 50, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 9, blocked: false, unavailable: false },
    { master: 'Konar', masterId: 'konar', monster: 'Blue dragons', monsterId: 'blueDragon', combatReq: 65, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 4, blocked: false, unavailable: false },
    { master: 'Konar', masterId: 'konar', monster: 'Boss', monsterId: 'boss', combatReq: null, slayerReq: null, questReq: null, questReqId: null, unlockReq: 'Like a boss', unlockReqId: 'likeABoss', agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8, blocked: false, unavailable: false },
    { master: 'Konar', masterId: 'konar', monster: 'Brine rats', monsterId: 'brineRat', combatReq: 45, slayerReq: 47, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 2, blocked: false, unavailable: false },
    { master: 'Konar', masterId: 'konar', monster: 'Bronze dragons', monsterId: 'bronzeDragon', combatReq: 75, slayerReq: null, questReq: 'Dragon Slayer', questReqId: 'dragonSlayerI', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 5, blocked: false, unavailable: false },
    { master: 'Konar', masterId: 'konar', monster: 'Cave kraken', monsterId: 'caveKraken', combatReq: 80, slayerReq: 87, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: 50, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 9, blocked: false, unavailable: false },
    { master: 'Konar', masterId: 'konar', monster: 'Dagannoth', monsterId: 'dagannoth', combatReq: 75, slayerReq: null, questReq: 'Horror from the Deep', questReqId: 'horrorFromTheDeep', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8, blocked: false, unavailable: false },
    { master: 'Konar', masterId: 'konar', monster: 'Dark beasts', monsterId: 'darkBeast', combatReq: 90, slayerReq: 90, questReq: 'Mourning\'s End Part II', questReqId: 'mourningsEndPartIi', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 5, blocked: false, unavailable: false },
    { master: 'Konar', masterId: 'konar', monster: 'Drakes', monsterId: 'drake', combatReq: null, slayerReq: 84, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 10, blocked: false, unavailable: false },
    { master: 'Konar', masterId: 'konar', monster: 'Dust devils', monsterId: 'dustDevil', combatReq: 70, slayerReq: 65, questReq: 'Desert Treasure', questReqId: 'desertTreasure', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6, blocked: false, unavailable: false },
    { master: 'Konar', masterId: 'konar', monster: 'Fire giants', monsterId: 'fireGiant', combatReq: 65, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 9, blocked: false, unavailable: false },
    { master: 'Konar', masterId: 'konar', monster: 'Fossil Island Wyverns', monsterId: 'fossilIslandWyvern', combatReq: 60, slayerReq: 66, questReq: 'Bone Voyage,Elemental Workshop I', questReqId: 'boneVoyage,elementalWorkshopI', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 5, blocked: false, unavailable: false },
    { master: 'Konar', masterId: 'konar', monster: 'Gargoyles', monsterId: 'gargoyle', combatReq: 80, slayerReq: 75, questReq: 'Priest in Peril', questReqId: 'priestInPeril', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6, blocked: false, unavailable: false },
    { master: 'Konar', masterId: 'konar', monster: 'Greater demons', monsterId: 'greaterDemon', combatReq: 75, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Konar', masterId: 'konar', monster: 'Hellhounds', monsterId: 'hellhound', combatReq: 75, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8, blocked: false, unavailable: false },
    { master: 'Konar', masterId: 'konar', monster: 'Hydras', monsterId: 'hydra', combatReq: null, slayerReq: 95, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 10, blocked: false, unavailable: false },
    { master: 'Konar', masterId: 'konar', monster: 'Iron dragons', monsterId: 'ironDragon', combatReq: 80, slayerReq: null, questReq: 'Dragon Slayer', questReqId: 'dragonSlayerI', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 5, blocked: false, unavailable: false },
    { master: 'Konar', masterId: 'konar', monster: 'Jellies', monsterId: 'jelly', combatReq: 57, slayerReq: 52, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6, blocked: false, unavailable: false },
    { master: 'Konar', masterId: 'konar', monster: 'Kalphites', monsterId: 'kalphite', combatReq: 15, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 9, blocked: false, unavailable: false },
    { master: 'Konar', masterId: 'konar', monster: 'Kurasks', monsterId: 'kurask', combatReq: 65, slayerReq: 70, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 3, blocked: false, unavailable: false },
    { master: 'Konar', masterId: 'konar', monster: 'Lizardmen', monsterId: 'lizardman', combatReq: null, slayerReq: null, questReq: null, questReqId: null, unlockReq: 'Reptile got ripped', unlockReqId: 'reptileGotRipped', agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8, blocked: false, unavailable: false },
    { master: 'Konar', masterId: 'konar', monster: 'Mithril dragons', monsterId: 'mithrilDragon', combatReq: null, slayerReq: null, questReq: null, questReqId: null, unlockReq: 'I hope you mith me', unlockReqId: 'iHopeYouMithMe', agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: true, weight: 5, blocked: false, unavailable: false },
    { master: 'Konar', masterId: 'konar', monster: 'Mutated Zygomites', monsterId: 'mutatedZygomite', combatReq: 60, slayerReq: 57, questReq: 'Lost City', questReqId: 'lostCity', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 2, blocked: false, unavailable: false },
    { master: 'Konar', masterId: 'konar', monster: 'Nechryael', monsterId: 'nechryael', combatReq: 85, slayerReq: 80, questReq: 'Priest in Peril', questReqId: 'priestInPeril', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Konar', masterId: 'konar', monster: 'Red dragons', monsterId: 'redDragon', combatReq: 68, slayerReq: null, questReq: 'Dragon Slayer', questReqId: 'dragonSlayerI', unlockReq: 'Seeing red', unlockReqId: 'seeingRed', agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 5, blocked: false, unavailable: false },
    { master: 'Konar', masterId: 'konar', monster: 'Rune dragons', monsterId: 'runeDragon', combatReq: null, slayerReq: null, questReq: 'Dragon Slayer II', questReqId: 'dragonSlayerIi', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 5, blocked: false, unavailable: false },
    { master: 'Konar', masterId: 'konar', monster: 'Skeletal Wyverns', monsterId: 'skeletalWyvern', combatReq: 70, slayerReq: 72, questReq: 'Elemental Workshop I', questReqId: 'elementalWorkshopI', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 5, blocked: false, unavailable: false },
    { master: 'Konar', masterId: 'konar', monster: 'Smoke devils', monsterId: 'smokeDevil', combatReq: 85, slayerReq: 93, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Konar', masterId: 'konar', monster: 'Steel dragon', monsterId: 'steelDragon', combatReq: 85, slayerReq: null, questReq: 'Dragon Slayer', questReqId: 'dragonSlayerI', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 5, blocked: false, unavailable: false },
    { master: 'Konar', masterId: 'konar', monster: 'Trolls', monsterId: 'troll', combatReq: 60, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6, blocked: false, unavailable: false },
    { master: 'Konar', masterId: 'konar', monster: 'Turoth', monsterId: 'turoth', combatReq: 60, slayerReq: 55, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 3, blocked: false, unavailable: false },
    { master: 'Konar', masterId: 'konar', monster: 'Vampyre', monsterId: 'vampyre', combatReq: null, slayerReq: null, questReq: null, questReqId: null, unlockReq: 'Actual Vampyre Slayer', unlockReqId: 'actualVampyreSlayer', agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 4, blocked: false, unavailable: false },
    { master: 'Konar', masterId: 'konar', monster: 'Waterfiends', monsterId: 'waterfiend', combatReq: 75, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: true, weight: 2, blocked: false, unavailable: false },
    { master: 'Konar', masterId: 'konar', monster: 'Wyrms', monsterId: 'wyrm', combatReq: null, slayerReq: 62, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 10, blocked: false, unavailable: false },
    { master: 'Nieve', masterId: 'nieve', monster: 'Aberrant spectre', monsterId: 'aberrantSpectre', combatReq: 65, slayerReq: 60, questReq: 'Priest in Peril', questReqId: 'priestInPeril', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6, blocked: false, unavailable: false },
    { master: 'Nieve', masterId: 'nieve', monster: 'Abyssal demon', monsterId: 'abyssalDemon', combatReq: 85, slayerReq: 85, questReq: 'Priest in Peril', questReqId: 'priestInPeril', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 9, blocked: false, unavailable: false },
    { master: 'Nieve', masterId: 'nieve', monster: 'Adamant dragon', monsterId: 'adamantDragon', combatReq: null, slayerReq: null, questReq: 'Dragon Slayer II', questReqId: 'dragonSlayerIi', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 2, blocked: false, unavailable: false },
    { master: 'Nieve', masterId: 'nieve', monster: 'Ankou', monsterId: 'ankou', combatReq: 40, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 5, blocked: false, unavailable: false },
    { master: 'Nieve', masterId: 'nieve', monster: 'Aviansie', monsterId: 'aviansie', combatReq: null, slayerReq: null, questReq: null, questReqId: null, unlockReq: 'Watch the birdie', unlockReqId: 'watchTheBirdie', agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6, blocked: false, unavailable: false },
    { master: 'Nieve', masterId: 'nieve', monster: 'Basilisk', monsterId: 'basilisk', combatReq: null, slayerReq: 40, questReq: null, questReqId: null, unlockReq: 'Basilocked', unlockReqId: 'basilocked', agilityReq: null, defenceReq: 20, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6, blocked: false, unavailable: false },
    { master: 'Nieve', masterId: 'nieve', monster: 'Black demons', monsterId: 'blackDemon', combatReq: 80, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 9, blocked: false, unavailable: false },
    { master: 'Nieve', masterId: 'nieve', monster: 'Black dragons', monsterId: 'blackDragon', combatReq: 80, slayerReq: null, questReq: 'Dragon Slayer', questReqId: 'dragonSlayerI', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6, blocked: false, unavailable: false },
    { master: 'Nieve', masterId: 'nieve', monster: 'Bloodvelds', monsterId: 'bloodveld', combatReq: 50, slayerReq: 50, questReq: 'Priest in Peril', questReqId: 'priestInPeril', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 9, blocked: false, unavailable: false },
    { master: 'Nieve', masterId: 'nieve', monster: 'Blue dragons', monsterId: 'blueDragon', combatReq: 65, slayerReq: null, questReq: 'Dragon Slayer', questReqId: 'dragonSlayerI', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 4, blocked: false, unavailable: false },
    { master: 'Nieve', masterId: 'nieve', monster: 'Boss', monsterId: 'boss', combatReq: null, slayerReq: null, questReq: null, questReqId: null, unlockReq: 'Like a boss', unlockReqId: 'likeABoss', agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8, blocked: false, unavailable: false },
    { master: 'Nieve', masterId: 'nieve', monster: 'Brine rat', monsterId: 'brineRat', combatReq: 45, slayerReq: 47, questReq: 'Olaf\'s Quest', questReqId: 'olafsQuest', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 3, blocked: false, unavailable: false },
    { master: 'Nieve', masterId: 'nieve', monster: 'Cave horror', monsterId: 'caveHorror', combatReq: 85, slayerReq: 58, questReq: 'Cabin Fever', questReqId: 'cabinFever', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 5, blocked: false, unavailable: false },
    { master: 'Nieve', masterId: 'nieve', monster: 'Cave kraken', monsterId: 'caveKraken', combatReq: 80, slayerReq: 87, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: 50, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6, blocked: false, unavailable: false },
    { master: 'Nieve', masterId: 'nieve', monster: 'Dagannoth', monsterId: 'dagannoth', combatReq: 75, slayerReq: null, questReq: 'Horror from the Deep', questReqId: 'horrorFromTheDeep', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8, blocked: false, unavailable: false },
    { master: 'Nieve', masterId: 'nieve', monster: 'Dark beasts', monsterId: 'darkBeast', combatReq: 90, slayerReq: 90, questReq: 'Mourning\'s End Part II', questReqId: 'mourningsEndPartIi', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 5, blocked: false, unavailable: false },
    { master: 'Nieve', masterId: 'nieve', monster: 'Drakes', monsterId: 'drake', combatReq: null, slayerReq: 84, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Nieve', masterId: 'nieve', monster: 'Dust devils', monsterId: 'dustDevil', combatReq: 70, slayerReq: 65, questReq: 'Desert Treasure', questReqId: 'desertTreasure', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6, blocked: false, unavailable: false },
    { master: 'Nieve', masterId: 'nieve', monster: 'Elves', monsterId: 'elf', combatReq: 70, slayerReq: null, questReq: 'Regicide', questReqId: 'regicide', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 4, blocked: false, unavailable: false },
    { master: 'Nieve', masterId: 'nieve', monster: 'Fire giants', monsterId: 'fireGiant', combatReq: 65, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 9, blocked: false, unavailable: false },
    { master: 'Nieve', masterId: 'nieve', monster: 'Fossil Island Wyverns', monsterId: 'fossilIslandWyvern', combatReq: 60, slayerReq: 66, questReq: 'Bone Voyage,Elemental Workshop I', questReqId: 'boneVoyage,elementalWorkshopI', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 5, blocked: false, unavailable: false },
    { master: 'Nieve', masterId: 'nieve', monster: 'Gargoyles', monsterId: 'gargoyle', combatReq: 80, slayerReq: 75, questReq: 'Priest in Peril', questReqId: 'priestInPeril', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6, blocked: false, unavailable: false },
    { master: 'Nieve', masterId: 'nieve', monster: 'Greater demons', monsterId: 'greaterDemon', combatReq: 75, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Nieve', masterId: 'nieve', monster: 'Hellhounds', monsterId: 'hellhound', combatReq: 75, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8, blocked: false, unavailable: false },
    { master: 'Nieve', masterId: 'nieve', monster: 'Iron dragons', monsterId: 'ironDragon', combatReq: 80, slayerReq: null, questReq: 'Dragon Slayer', questReqId: 'dragonSlayerI', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 5, blocked: false, unavailable: false },
    { master: 'Nieve', masterId: 'nieve', monster: 'Kalphites', monsterId: 'kalphite', combatReq: 15, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 9, blocked: false, unavailable: false },
    { master: 'Nieve', masterId: 'nieve', monster: 'Kurask', monsterId: 'kurask', combatReq: 65, slayerReq: 70, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 3, blocked: false, unavailable: false },
    { master: 'Nieve', masterId: 'nieve', monster: 'Lizardmen', monsterId: 'lizardman', combatReq: null, slayerReq: null, questReq: null, questReqId: null, unlockReq: 'Reptile got ripped', unlockReqId: 'reptileGotRipped', agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8, blocked: false, unavailable: false },
    { master: 'Nieve', masterId: 'nieve', monster: 'Minions of Scabaras', monsterId: 'minionOfScabaras', combatReq: 85, slayerReq: null, questReq: 'Contact!', questReqId: 'contact', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 4, blocked: false, unavailable: false },
    { master: 'Nieve', masterId: 'nieve', monster: 'Mithril dragons', monsterId: 'mithrilDragon', combatReq: null, slayerReq: null, questReq: null, questReqId: null, unlockReq: 'I hope you mith me', unlockReqId: 'iHopeYouMithMe', agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: true, weight: 5, blocked: false, unavailable: false },
    { master: 'Nieve', masterId: 'nieve', monster: 'Mutated Zygomites', monsterId: 'mutatedZygomite', combatReq: 60, slayerReq: 57, questReq: 'Lost City', questReqId: 'lostCity', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 2, blocked: false, unavailable: false },
    { master: 'Nieve', masterId: 'nieve', monster: 'Nechryael', monsterId: 'nechryael', combatReq: 85, slayerReq: 80, questReq: 'Priest in Peril', questReqId: 'priestInPeril', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Nieve', masterId: 'nieve', monster: 'Red dragons', monsterId: 'redDragon', combatReq: 68, slayerReq: null, questReq: 'Dragon Slayer', questReqId: 'dragonSlayerI', unlockReq: 'Seeing red', unlockReqId: 'seeingRed', agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 5, blocked: false, unavailable: false },
    { master: 'Nieve', masterId: 'nieve', monster: 'Rune dragon', monsterId: 'runeDragon', combatReq: null, slayerReq: null, questReq: 'Dragon Slayer II', questReqId: 'dragonSlayerIi', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 2, blocked: false, unavailable: false },
    { master: 'Nieve', masterId: 'nieve', monster: 'Skeletal Wyverns', monsterId: 'skeletalWyvern', combatReq: 70, slayerReq: 72, questReq: 'Elemental Workshop I', questReqId: 'elementalWorkshopI', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 5, blocked: false, unavailable: false },
    { master: 'Nieve', masterId: 'nieve', monster: 'Smoke devil', monsterId: 'smokeDevil', combatReq: 85, slayerReq: 93, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Nieve', masterId: 'nieve', monster: 'Spiritual creatures', monsterId: 'spiritualCreature', combatReq: 60, slayerReq: 63, questReq: 'Death Plateau', questReqId: 'deathPlateau', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: 60, ancientCavernReq: false, weight: 6, blocked: false, unavailable: false },
    { master: 'Nieve', masterId: 'nieve', monster: 'Steel dragons', monsterId: 'steelDragon', combatReq: 85, slayerReq: null, questReq: 'Dragon Slayer', questReqId: 'dragonSlayerI', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 5, blocked: false, unavailable: false },
    { master: 'Nieve', masterId: 'nieve', monster: 'Suqah', monsterId: 'suqah', combatReq: 85, slayerReq: null, questReq: 'Lunar Diplomacy', questReqId: 'lunarDiplomacy', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8, blocked: false, unavailable: false },
    { master: 'Nieve', masterId: 'nieve', monster: 'Trolls', monsterId: 'troll', combatReq: 60, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6, blocked: false, unavailable: false },
    { master: 'Nieve', masterId: 'nieve', monster: 'Turoth', monsterId: 'turoth', combatReq: 60, slayerReq: 55, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 3, blocked: false, unavailable: false },
    { master: 'Nieve', masterId: 'nieve', monster: 'TzHaar', monsterId: 'tzHaar', combatReq: null, slayerReq: null, questReq: null, questReqId: null, unlockReq: 'Hot stuff', unlockReqId: 'hotStuff', agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 10, blocked: false, unavailable: false },
    { master: 'Nieve', masterId: 'nieve', monster: 'Vampyre', monsterId: 'vampyre', combatReq: null, slayerReq: null, questReq: null, questReqId: null, unlockReq: 'Actual Vampyre Slayer', unlockReqId: 'actualVampyreSlayer', agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6, blocked: false, unavailable: false },
    { master: 'Nieve', masterId: 'nieve', monster: 'Wyrms', monsterId: 'wyrm', combatReq: null, slayerReq: 62, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Duradel', masterId: 'duradel', monster: 'Aberrant spectre', monsterId: 'aberrantSpectre', combatReq: null, slayerReq: 60, questReq: 'Priest in Peril', questReqId: 'priestInPeril', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Duradel', masterId: 'duradel', monster: 'Abyssal demon', monsterId: 'abyssalDemon', combatReq: null, slayerReq: 85, questReq: 'Priest in Peril', questReqId: 'priestInPeril', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 12, blocked: false, unavailable: false },
    { master: 'Duradel', masterId: 'duradel', monster: 'Adamant dragon', monsterId: 'adamantDragon', combatReq: null, slayerReq: null, questReq: 'Dragon Slayer II', questReqId: 'dragonSlayerIi', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 2, blocked: false, unavailable: false },
    { master: 'Duradel', masterId: 'duradel', monster: 'Ankou', monsterId: 'ankou', combatReq: null, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 5, blocked: false, unavailable: false },
    { master: 'Duradel', masterId: 'duradel', monster: 'Aviansie', monsterId: 'aviansie', combatReq: null, slayerReq: null, questReq: null, questReqId: null, unlockReq: 'Watch the birdie', unlockReqId: 'watchTheBirdie', agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8, blocked: false, unavailable: false },
    { master: 'Duradel', masterId: 'duradel', monster: 'Basilisk', monsterId: 'basilisk', combatReq: null, slayerReq: 40, questReq: null, questReqId: null, unlockReq: 'Basilocked', unlockReqId: 'basilocked', agilityReq: null, defenceReq: 20, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Duradel', masterId: 'duradel', monster: 'Black demons', monsterId: 'blackDemon', combatReq: null, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8, blocked: false, unavailable: false },
    { master: 'Duradel', masterId: 'duradel', monster: 'Black dragons', monsterId: 'blackDragon', combatReq: null, slayerReq: null, questReq: 'Dragon Slayer', questReqId: 'dragonSlayerI', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 9, blocked: false, unavailable: false },
    { master: 'Duradel', masterId: 'duradel', monster: 'Bloodvelds', monsterId: 'bloodveld', combatReq: null, slayerReq: 50, questReq: 'Priest in Peril', questReqId: 'priestInPeril', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8, blocked: false, unavailable: false },
    { master: 'Duradel', masterId: 'duradel', monster: 'Blue dragons', monsterId: 'blueDragon', combatReq: null, slayerReq: null, questReq: 'Dragon Slayer', questReqId: 'dragonSlayerI', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 4, blocked: false, unavailable: false },
    { master: 'Duradel', masterId: 'duradel', monster: 'Boss', monsterId: 'boss', combatReq: null, slayerReq: null, questReq: null, questReqId: null, unlockReq: 'Like a boss', unlockReqId: 'likeABoss', agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 12, blocked: false, unavailable: false },
    { master: 'Duradel', masterId: 'duradel', monster: 'Cave horror', monsterId: 'caveHorror', combatReq: null, slayerReq: 58, questReq: 'Cabin Fever', questReqId: 'cabinFever', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 4, blocked: false, unavailable: false },
    { master: 'Duradel', masterId: 'duradel', monster: 'Cave kraken', monsterId: 'caveKraken', combatReq: null, slayerReq: 87, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: 50, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 9, blocked: false, unavailable: false },
    { master: 'Duradel', masterId: 'duradel', monster: 'Dagannoth', monsterId: 'dagannoth', combatReq: null, slayerReq: null, questReq: 'Horror from the Deep', questReqId: 'horrorFromTheDeep', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 9, blocked: false, unavailable: false },
    { master: 'Duradel', masterId: 'duradel', monster: 'Dark beasts', monsterId: 'darkBeast', combatReq: null, slayerReq: 90, questReq: 'Mourning\'s End Part II', questReqId: 'mourningsEndPartIi', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 11, blocked: false, unavailable: false },
    { master: 'Duradel', masterId: 'duradel', monster: 'Drakes', monsterId: 'drake', combatReq: null, slayerReq: 84, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8, blocked: false, unavailable: false },
    { master: 'Duradel', masterId: 'duradel', monster: 'Dust devils', monsterId: 'dustDevil', combatReq: null, slayerReq: 65, questReq: 'Desert Treasure', questReqId: 'desertTreasure', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 5, blocked: false, unavailable: false },
    { master: 'Duradel', masterId: 'duradel', monster: 'Elves', monsterId: 'elf', combatReq: null, slayerReq: null, questReq: 'Regicide', questReqId: 'regicide', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 4, blocked: false, unavailable: false },
    { master: 'Duradel', masterId: 'duradel', monster: 'Fire giants', monsterId: 'fireGiant', combatReq: null, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Duradel', masterId: 'duradel', monster: 'Fossil Island Wyverns', monsterId: 'fossilIslandWyvern', combatReq: null, slayerReq: 66, questReq: 'Bone Voyage,Elemental Workshop I', questReqId: 'boneVoyage,elementalWorkshopI', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 5, blocked: false, unavailable: false },
    { master: 'Duradel', masterId: 'duradel', monster: 'Gargoyles', monsterId: 'gargoyle', combatReq: null, slayerReq: 75, questReq: 'Priest in Peril', questReqId: 'priestInPeril', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8, blocked: false, unavailable: false },
    { master: 'Duradel', masterId: 'duradel', monster: 'Greater demons', monsterId: 'greaterDemon', combatReq: null, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 9, blocked: false, unavailable: false },
    { master: 'Duradel', masterId: 'duradel', monster: 'Hellhounds', monsterId: 'hellhound', combatReq: null, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 10, blocked: false, unavailable: false },
    { master: 'Duradel', masterId: 'duradel', monster: 'Iron dragons', monsterId: 'ironDragon', combatReq: null, slayerReq: null, questReq: 'Dragon Slayer', questReqId: 'dragonSlayerI', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 5, blocked: false, unavailable: false },
    { master: 'Duradel', masterId: 'duradel', monster: 'Kalphites', monsterId: 'kalphite', combatReq: null, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 9, blocked: false, unavailable: false },
    { master: 'Duradel', masterId: 'duradel', monster: 'Kurask', monsterId: 'kurask', combatReq: null, slayerReq: 70, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 4, blocked: false, unavailable: false },
    { master: 'Duradel', masterId: 'duradel', monster: 'Lizardmen', monsterId: 'lizardman', combatReq: null, slayerReq: null, questReq: null, questReqId: null, unlockReq: 'Reptile got ripped', unlockReqId: 'reptileGotRipped', agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 10, blocked: false, unavailable: false },
    { master: 'Duradel', masterId: 'duradel', monster: 'Mithril dragons', monsterId: 'mithrilDragon', combatReq: null, slayerReq: null, questReq: null, questReqId: null, unlockReq: 'I hope you mith me', unlockReqId: 'iHopeYouMithMe', agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: true, weight: 9, blocked: false, unavailable: false },
    { master: 'Duradel', masterId: 'duradel', monster: 'Mutated Zygomites', monsterId: 'mutatedZygomite', combatReq: null, slayerReq: 57, questReq: 'Lost City', questReqId: 'lostCity', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 2, blocked: false, unavailable: false },
    { master: 'Duradel', masterId: 'duradel', monster: 'Nechryael', monsterId: 'nechryael', combatReq: null, slayerReq: 80, questReq: 'Priest in Peril', questReqId: 'priestInPeril', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 9, blocked: false, unavailable: false },
    { master: 'Duradel', masterId: 'duradel', monster: 'Red dragons', monsterId: 'redDragon', combatReq: null, slayerReq: null, questReq: 'Dragon Slayer', questReqId: 'dragonSlayerI', unlockReq: 'Seeing red', unlockReqId: 'seeingRed', agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8, blocked: false, unavailable: false },
    { master: 'Duradel', masterId: 'duradel', monster: 'Rune dragon', monsterId: 'runeDragon', combatReq: null, slayerReq: null, questReq: 'Dragon Slayer II', questReqId: 'dragonSlayerIi', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 2, blocked: false, unavailable: false },
    { master: 'Duradel', masterId: 'duradel', monster: 'Skeletal Wyverns', monsterId: 'skeletalWyvern', combatReq: null, slayerReq: 72, questReq: 'Elemental Workshop I', questReqId: 'elementalWorkshopI', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Duradel', masterId: 'duradel', monster: 'Smoke devil', monsterId: 'smokeDevil', combatReq: null, slayerReq: 93, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 9, blocked: false, unavailable: false },
    { master: 'Duradel', masterId: 'duradel', monster: 'Spiritual creatures', monsterId: 'spiritualCreature', combatReq: null, slayerReq: 63, questReq: 'Death Plateau', questReqId: 'deathPlateau', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: 60, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Duradel', masterId: 'duradel', monster: 'Steel dragons', monsterId: 'steelDragon', combatReq: null, slayerReq: null, questReq: 'Dragon Slayer', questReqId: 'dragonSlayerI', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7, blocked: false, unavailable: false },
    { master: 'Duradel', masterId: 'duradel', monster: 'Suqah', monsterId: 'suqah', combatReq: null, slayerReq: null, questReq: 'Lunar Diplomacy', questReqId: 'lunarDiplomacy', unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8, blocked: false, unavailable: false },
    { master: 'Duradel', masterId: 'duradel', monster: 'Trolls', monsterId: 'troll', combatReq: null, slayerReq: null, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6, blocked: false, unavailable: false },
    { master: 'Duradel', masterId: 'duradel', monster: 'TzHaar', monsterId: 'tzHaar', combatReq: null, slayerReq: null, questReq: null, questReqId: null, unlockReq: 'Hot stuff', unlockReqId: 'hotStuff', agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 10, blocked: false, unavailable: false },
    { master: 'Duradel', masterId: 'duradel', monster: 'Vampyre', monsterId: 'vampyre', combatReq: null, slayerReq: null, questReq: null, questReqId: null, unlockReq: 'Actual Vampyre Slayer', unlockReqId: 'actualVampyreSlayer', agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8, blocked: false, unavailable: false },
    { master: 'Duradel', masterId: 'duradel', monster: 'Waterfiend', monsterId: 'waterfiend', combatReq: null, slayerReq: 62, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: true, weight: 2, blocked: false, unavailable: false },
    { master: 'Duradel', masterId: 'duradel', monster: 'Wyrms', monsterId: 'wyrm', combatReq: null, slayerReq: 62, questReq: null, questReqId: null, unlockReq: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8, blocked: false, unavailable: false },
];

let slayerMonsters = [
    { monster: 'Aberrant spectres', monsterId: 'aberrantSpectre' },
    { monster: 'Abyssal demons', monsterId: 'abyssalDemon' },
    { monster: 'Adamant dragons', monsterId: 'adamantDragon' },
    { monster: 'Ankou', monsterId: 'ankou' },
    { monster: 'Aviansie', monsterId: 'aviansie' },
    { monster: 'Bandits', monsterId: 'bandit' },
    { monster: 'Banshees', monsterId: 'banshee' },
    { monster: 'Basilisks', monsterId: 'basilisk' },
    { monster: 'Bats', monsterId: 'bat' },
    { monster: 'Bears', monsterId: 'bear' },
    { monster: 'Birds', monsterId: 'bird' },
    { monster: 'Black demons', monsterId: 'blackDemon' },
    { monster: 'Black dragons', monsterId: 'blackDragon' },
    { monster: 'Black knights', monsterId: 'blackKnight' },
    { monster: 'Bloodvelds', monsterId: 'bloodveld' },
    { monster: 'Blue dragons', monsterId: 'blueDragon' },
    { monster: 'Boss', monsterId: 'boss' },
    { monster: 'Brine rats', monsterId: 'brineRat' },
    { monster: 'Bronze dragons', monsterId: 'bronzeDragon' },
    { monster: 'Catablepon', monsterId: 'catablepon' },
    { monster: 'Cave bugs', monsterId: 'caveBug' },
    { monster: 'Cave crawlers', monsterId: 'caveCrawler' },
    { monster: 'Cave horrors', monsterId: 'caveHorror' },
    { monster: 'Cave krakens', monsterId: 'caveKraken' },
    { monster: 'Cave slimes', monsterId: 'caveSlime' },
    { monster: 'Chaos druids', monsterId: 'chaosDruid' },
    { monster: 'Cockatrices', monsterId: 'cockatrice' },
    { monster: 'Cows', monsterId: 'cow' },
    { monster: 'Crawling hands', monsterId: 'crawlingHand' },
    { monster: 'Crocodiles', monsterId: 'crocodile' },
    { monster: 'Dagannoths', monsterId: 'dagannoth' },
    { monster: 'Dark beasts', monsterId: 'darkBeast' },
    { monster: 'Dark warriors', monsterId: 'darkWarrior' },
    { monster: 'Dogs', monsterId: 'dog' },
    { monster: 'Drakes', monsterId: 'drake' },
    { monster: 'Dust devils', monsterId: 'dustDevil' },
    { monster: 'Dwarves', monsterId: 'dwarve' },
    { monster: 'Earth warriors', monsterId: 'earthWarrior' },
    { monster: 'Elves', monsterId: 'elf' },
    { monster: 'Ents', monsterId: 'ent' },
    { monster: 'Fever spiders', monsterId: 'feverSpider' },
    { monster: 'Fire giants', monsterId: 'fireGiant' },
    { monster: 'Flesh crawler', monsterId: 'fleshCrawler' },
    { monster: 'Fossil Island wyverns', monsterId: 'fossilIslandWyvern' },
    { monster: 'Gargoyles', monsterId: 'gargoyle' },
    { monster: 'Ghosts', monsterId: 'ghost' },
    { monster: 'Ghouls', monsterId: 'ghoul' },
    { monster: 'Goblins', monsterId: 'goblin' },
    { monster: 'Greater demons', monsterId: 'greaterDemon' },
    { monster: 'Green dragons', monsterId: 'greenDragon' },
    { monster: 'Harpie bug swarms', monsterId: 'harpieBugSwarm' },
    { monster: 'Hellhounds', monsterId: 'hellhound' },
    { monster: 'Hill giants', monsterId: 'hillGiant' },
    { monster: 'Hobgoblins', monsterId: 'hobgoblin' },
    { monster: 'Hydras', monsterId: 'hydra' },
    { monster: 'Ice giants', monsterId: 'iceGiant' },
    { monster: 'Ice warriors', monsterId: 'iceWarrior' },
    { monster: 'Icefiends', monsterId: 'icefiend' },
    { monster: 'Infernal mages', monsterId: 'infernalMage' },
    { monster: 'Iron dragons', monsterId: 'ironDragon' },
    { monster: 'Jellies', monsterId: 'jelly' },
    { monster: 'Jungle horrors', monsterId: 'jungleHorror' },
    { monster: 'Kalphites', monsterId: 'kalphite' },
    { monster: 'Killerwatts', monsterId: 'killerwatt' },
    { monster: 'Kurasks', monsterId: 'kurask' },
    { monster: 'Lava dragons', monsterId: 'lavaDragon' },
    { monster: 'Lesser demons', monsterId: 'lesserDemon' },
    { monster: 'Lizardmen', monsterId: 'lizardman' },
    { monster: 'Lizards', monsterId: 'lizard' },
    { monster: 'Magic axes', monsterId: 'magicAxe' },
    { monster: 'Mammoths', monsterId: 'mammoth' },
    { monster: 'Minions of Scabaras', monsterId: 'minionOfScabaras' },
    { monster: 'Minotaurs', monsterId: 'minotaur' },
    { monster: 'Mithril dragons', monsterId: 'mithrilDragon' },
    { monster: 'Mogres', monsterId: 'mogre' },
    { monster: 'Molanisks', monsterId: 'molanisk' },
    { monster: 'Monkeys', monsterId: 'monkey' },
    { monster: 'Moss giants', monsterId: 'mossGiant' },
    { monster: 'Mutated zygomites', monsterId: 'mutatedZygomite' },
    { monster: 'Nechryaels', monsterId: 'nechryael' },
    { monster: 'Ogres', monsterId: 'ogre' },
    { monster: 'Otherworldly beings', monsterId: 'otherworldlyBeing' },
    { monster: 'Pirates', monsterId: 'pirate' },
    { monster: 'Pyrefiends', monsterId: 'pyrefiend' },
    { monster: 'Rats', monsterId: 'rat' },
    { monster: 'Red dragons', monsterId: 'redDragon' },
    { monster: 'Revenants', monsterId: 'revenant' },
    { monster: 'Rockslugs', monsterId: 'rockslug' },
    { monster: 'Rogues', monsterId: 'rogue' },
    { monster: 'Rune dragons', monsterId: 'runeDragon' },
    { monster: 'Scorpions', monsterId: 'scorpion' },
    { monster: 'Sea snakes', monsterId: 'seaSnake' },
    { monster: 'Shades', monsterId: 'shade' },
    { monster: 'Shadow warriors', monsterId: 'shadowWarrior' },
    { monster: 'Skeletal wyverns', monsterId: 'skeletalWyvern' },
    { monster: 'Skeletons', monsterId: 'skeleton' },
    { monster: 'Smoke devils', monsterId: 'smokeDevil' },
    { monster: 'Sourhogs', monsterId: 'sourhoug' },
    { monster: 'Spiders', monsterId: 'spider' },
    { monster: 'Spiritual creatures', monsterId: 'spiritualCreature' },
    { monster: 'Steel dragons', monsterId: 'steelDragon' },
    { monster: 'Suqahs', monsterId: 'suqah' },
    { monster: 'Terror dogs', monsterId: 'terrorDog' },
    { monster: 'Trolls', monsterId: 'troll' },
    { monster: 'Turoths', monsterId: 'turoth' },
    { monster: 'TzHaar', monsterId: 'tzHaar' },
    { monster: 'Vampyres', monsterId: 'vampyre' },
    { monster: 'Wall beasts', monsterId: 'wallBeast' },
    { monster: 'Waterfiends', monsterId: 'waterfiend' },
    { monster: 'Werewolves', monsterId: 'werewolf' },
    { monster: 'Wilderness Bosses', monsterId: 'wildernessBoss' },
    { monster: 'Wolves', monsterId: 'wolf' },
    { monster: 'Wyrms', monsterId: 'wyrm' },
    { monster: 'Zombies', monsterId: 'zombie' },
];

var app = new Vue({
    el: '#app',
    data: {
        showErrorMessage: false,
        errorMessage: '',
        errorStyle: '',
        combatLevel: 100,
        slayerLevel: 74,
        agilityLevel: 73,
        defenceLevel: 72,
        firemakingLevel: 99,
        magicLevel: 85,
        strengthLevel: 86,
        ancientCavernUnlocked: true,
        selectedMaster: 'duradel',
        slayerMasters: slayerMasters,
        slayerMasterTasks: slayerMasterTasks,
        slayerMonsters: slayerMonsters,
        rewards: rewards,
        unlockedRewards: [],
        quests: quests,
        unlockedQuests: [
            'boneVoyage',
            'cabinFever',
            'contact',
            'deathPlateau',
            'deathToTheDorgeshuun',
            'desertTreasure',
            'dragonSlayerI',
            'elementalWorkshopI',
            'ernestTheChicken',
            'hauntedMine',
            'horrorFromTheDeep',
            'legendsQuest',
            'lostCity',
            'lunarDiplomacy',
            'mourningsEndPartIi',
            'olafsQuest',
            'aPorcineOfInterest',
            'priestInPeril',
            'regicide',
            'royalTrouble',
            'rumDeal',
            'skippyAndTheMogres'
        ],
        blockedTask1: 'ironDragon',
        blockedTask2: 'spiritualCreature',
        blockedTask3: 'blackDemon',
        blockedTask4: null,
        blockedTask5: null,
        blockedTask6: null,
        hideBlockedTasks: true,
        hideUnavailableTasks: true
    },
    watch: {
        // Make blocked tasks exclusive from one another.
        blockedTask1: function(newBlockedTask1, oldBlockedTask1) {
            if (this.blockedTask1 !== null && (this.blockedTask1 == this.blockedTask2 || this.blockedTask1 == this.blockedTask3 || this.blockedTask1 == this.blockedTask4 || this.blockedTask1 == this.blockedTask5 || this.blockedTask1 == this.blockedTask6)) {
                this.raiseError('Can\'t block the same task twice', document.getElementById('block-1').offsetLeft, document.getElementById('block-1').offsetTop);
                this.blockedTask1 = oldBlockedTask1;
            }
        },
        blockedTask2: function(newBlockedTask2, oldBlockedTask2) {
            if (this.blockedTask2 !== null && (this.blockedTask2 == this.blockedTask1 || this.blockedTask2 == this.blockedTask3 || this.blockedTask2 == this.blockedTask4 || this.blockedTask2 == this.blockedTask5 || this.blockedTask2 == this.blockedTask6)) {
                this.raiseError('Can\'t block the same task twice', document.getElementById('block-2').offsetLeft, document.getElementById('block-2').offsetTop);
                this.blockedTask2 = oldBlockedTask2;
            }
        },
        blockedTask3: function(newBlockedTask3, oldBlockedTask3) {
            if (this.blockedTask3 !== null && (this.blockedTask3 == this.blockedTask1 || this.blockedTask3 == this.blockedTask2 || this.blockedTask3 == this.blockedTask4 || this.blockedTask3 == this.blockedTask5 || this.blockedTask3 == this.blockedTask6)) {
                this.raiseError('Can\'t block the same task twice', document.getElementById('block-3').offsetLeft, document.getElementById('block-3').offsetTop);
                this.blockedTask3 = oldBlockedTask3;
            }
        },
        blockedTask4: function(newBlockedTask4, oldBlockedTask4) {
            if (this.blockedTask4 !== null && (this.blockedTask4 == this.blockedTask1 || this.blockedTask4 == this.blockedTask2 || this.blockedTask4 == this.blockedTask3 || this.blockedTask4 == this.blockedTask5 || this.blockedTask4 == this.blockedTask6)) {
                this.raiseError('Can\'t block the same task twice', document.getElementById('block-4').offsetLeft, document.getElementById('block-4').offsetTop);
                this.blockedTask4 = oldBlockedTask4;
            }
        },
        blockedTask5: function(newBlockedTask5, oldBlockedTask5) {
            if (this.blockedTask5 !== null && (this.blockedTask5 == this.blockedTask1 || this.blockedTask5 == this.blockedTask2 || this.blockedTask5 == this.blockedTask3 || this.blockedTask5 == this.blockedTask4 || this.blockedTask5 == this.blockedTask6)) {
                this.raiseError('Can\'t block the same task twice', document.getElementById('block-5').offsetLeft, document.getElementById('block-5').offsetTop);
                this.blockedTask5 = oldBlockedTask5;
            }
        },
        blockedTask6: function(newBlockedTask6, oldBlockedTask6) {
            if (this.blockedTask5 !== null && (this.blockedTask6 == this.blockedTask1 || this.blockedTask6 == this.blockedTask2 || this.blockedTask6 == this.blockedTask3 || this.blockedTask6 == this.blockedTask4 || this.blockedTask6 == this.blockedTask5)) {
                this.raiseError('Can\'t block the same task twice', document.getElementById('block-6').offsetLeft, document.getElementById('block-6').offsetTop);
                this.blockedTask6 = oldBlockedTask6;
            }
        },
    },
    computed: {
        strengthOrAgilityLevel: function() {
            return Math.max(this.agilityLevel, this.strengthLevel);
        },
        blockedTasks: function() {
            let blockedTasks = [];

            if (this.blockedTask1 !== null) {
                blockedTasks.push(this.blockedTask1);
            }

            if (this.blockedTask2 !== null) {
                blockedTasks.push(this.blockedTask2);
            }

            if (this.blockedTask3 !== null) {
                blockedTasks.push(this.blockedTask3);
            }

            if (this.blockedTask4 !== null) {
                blockedTasks.push(this.blockedTask4);
            }

            if (this.blockedTask5 !== null) {
                blockedTasks.push(this.blockedTask5);
            }

            if (this.blockedTask6 !== null) {
                blockedTasks.push(this.blockedTask6);
            }

            return blockedTasks;
        },
        slayerTasks: function() {
            // First, get list of all tasks for current master.
            let tasks = this.slayerMasterTasks.filter(obj => obj.masterId == this.selectedMaster);

            // Loop through each task, and mark as blocked if necessary.
            // Blocked tasks are displayed but not included in calculations.
            for (let i = 0; i < tasks.length; i++) {
                if (this.blockedTasks.includes(tasks[i].monsterId)) {
                    tasks[i].blocked = true;
                } else {
                    tasks[i].blocked = false;
                }
            }

            // Loop through each task, and mark as unavailable if necessary.
            // Unavailable tasks are are displayed but not included in calculations.
            // First, start with each task as available.
            for (let i = 0; i < tasks.length; i++) {
                tasks[i].unavailable = false;
            }


            // Check slayer level.
            for (let i = 0; i < tasks.length; i++) {
                if (this.slayerLevel < tasks[i].slayerReq) {
                    tasks[i].unavailable = true;
                }
            }

            // Check combat level.
            for (let i = 0; i < tasks.length; i++) {
                if (this.combatLevel < tasks[i].combatReq) {
                    tasks[i].unavailable = true;
                }
            }

            // Check other levels (e.g. Strength/Agility for Wilderness bloodvelds).
            //  Agility
            //  Defence
            //  Firemaking
            //  Magic
            //  Strength OR Agility (for GWD)
            for (let i = 0; i < tasks.length; i++) {
                if (tasks[i].agilityReq !== null && this.agilityLevel < tasks[i].agilityReq) {
                    tasks[i].unavailable = true;
                }

                if (tasks[i].defenceReq !== null && this.defenceLevel < tasks[i].defenceReq) {
                    tasks[i].unavailable = true;
                }

                if (tasks[i].firemakingReq !== null && this.firemakingLevel < tasks[i].firemakingReq) {
                    tasks[i].unavailable = true;
                }

                if (tasks[i].magicReq !== null && this.magicLevel < tasks[i].magicReq) {
                    tasks[i].unavailable = true;
                }

                if (tasks[i].strengthOrAgilityReq !== null && this.strengthOrAgilityLevel < tasks[i].strengthOrAgilityReq) {
                    tasks[i].unavailable = true;
                }
            }

            // Check quests (e.g. Priest in Peril for banshees).
            for (let i = 0; i < tasks.length; i++) {
                if (tasks[i].questReqId !== null) {
                    let questReqIds = tasks[i].questReqId.split(",");
                    for (j = 0; j < questReqIds.length; j++) {
                        if (!this.unlockedQuests.includes(questReqIds[j])) {
                            tasks[i].unavailable = true;
                            break;
                        }
                    }
                }
            }

            // Check slayer reward point unlocks (e.g. "Seeing red" for red dragons).
            for (let i = 0; i < tasks.length; i++) {
                if (tasks[i].unlockReqId !== null && !this.unlockedRewards.includes(tasks[i].unlockReqId)) {
                    tasks[i].unavailable = true;
                }
            }

            // Check other miscellaneous requirements.
            for (let i = 0; i < tasks.length; i++) {
                if (tasks[i].ancientCavernReq && !this.ancientCavernUnlocked) {
                    tasks[i].unavailable = true;
                }
            }

            return tasks;
        },
        totalWeight: function() {
            var validTasks = this.slayerTasks.filter(task => !task.blocked && !task.unavailable);
            return validTasks.reduce((accumulator, item) => accumulator + item.weight, 0);
        }
    },
    methods: {
        block: function(monsterId, event) {
            // Find first empty block slot, if any, and update to the passed monster ID.
            if (this.blockedTask1 === null) {
                this.blockedTask1 = monsterId;
                return true;
            } else if (this.blockedTask2 === null) {
                this.blockedTask2 = monsterId;
                return true;
            } else if (this.blockedTask3 === null) {
                this.blockedTask3 = monsterId;
                return true;
            } else if (this.blockedTask4 === null) {
                this.blockedTask4 = monsterId;
                return true;
            } else if (this.blockedTask5 === null) {
                this.blockedTask5 = monsterId;
                return true;
            } else if (this.blockedTask6 === null) {
                this.blockedTask6 = monsterId;
                return true;
            } else {
                // No block slots available.
                this.raiseError('No more block slots available', event.pageX, event.pageY);
                return false;
            }
        },
        unblock: function(monsterId) {
            // Find first matching block slot and update value to null.
            if (this.blockedTask1 === monsterId) {
                this.blockedTask1 = null;
                return true;
            } else if (this.blockedTask2 === monsterId) {
                this.blockedTask2 = null;
                return true;
            } else if (this.blockedTask3 === monsterId) {
                this.blockedTask3 = null;
                return true;
            } else if (this.blockedTask4 === monsterId) {
                this.blockedTask4 = null;
                return true;
            } else if (this.blockedTask5 === monsterId) {
                this.blockedTask5 = null;
                return true;
            } else if (this.blockedTask6 === monsterId) {
                this.blockedTask6 = null;
                return true;
            } else {
                // Couldn't find a match.
                this.raiseError('Couldn\'t find a matching task', event.pageX, event.pageY);
                return false;
            }
        },
        updateMaster: function(masterId, event) {
            let slayerMaster = this.slayerMasters.filter(master => master.masterId == masterId)[0];
            if (slayerMaster.combatReq > this.combatLevel) {
                this.raiseError('You need a combat level of at least ' + slayerMaster.combatReq + ' to use ' + slayerMaster.master, event.pageX, event.pageY);
            } else {
                this.selectedMaster = masterId;
            }
        },
        raiseError: function(errorMessage, positionX, positionY) {
            this.showErrorMessage = true;
            this.errorMessage = errorMessage;
            this.errorStyle = "left: " + positionX + "px; top: " + positionY + "px;";
        },
        lowerError: function() {
            this.showErrorMessage = false;
        },
        toggleBlockedTasks: function() {
            this.hideBlockedTasks = !this.hideBlockedTasks;
            return;
        },
        toggleUnavailableTasks: function() {
            this.hideUnavailableTasks = !this.hideUnavailableTasks;
            return;
        }
    }
})