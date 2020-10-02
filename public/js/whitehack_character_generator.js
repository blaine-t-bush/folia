/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/whitehack_character_generator.js":
/*!*******************************************************!*\
  !*** ./resources/js/whitehack_character_generator.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Create prototype function on arrays to allow for inline random selection of one element.
Array.prototype.random = function () {
  return this[Math.floor(Math.random() * this.length)];
}; // TODO move some functions to helper function file
// TODO move groups off of attributes to separate object {group: 'name', attribute: 'strength'}
// TODO fix leveling
// TODO add toggle for HP houserule (HP increases by at least 1 each level)
// TODO add button to re-roll HP
// TODO add class-specific slots
// TODO add starting gold
// TODO add more equipment (rope, torches, etc)
// TODO add unique equipment (trinkets)
// TODO make sure no group gets added more than once
// TODO break names up into primary, optional secondary, and optional epithets


var Character = /*#__PURE__*/function () {
  function Character() {
    _classCallCheck(this, Character);

    this.generate();
  }

  _createClass(Character, [{
    key: "generate",
    value: function generate() {
      this.level = 1;
      this.hitPoints = 0;
      this.startingGoldPieces = 0;
      this.goldPieces = 0;
      this.weight = 0;
      this.armorClass = 0;
      this.weapons = [];
      this.languageCount = 0;
      this.initiativeBonus = 0;
      this.hirelingCount = 0;
      this.attributes = {
        strength: {
          name: 'Strength',
          value: 0,
          groups: []
        },
        dexterity: {
          name: 'Dexterity',
          value: 0,
          groups: []
        },
        constitution: {
          name: 'Constitution',
          value: 0,
          groups: []
        },
        intelligence: {
          name: 'Intelligence',
          value: 0,
          groups: []
        },
        wisdom: {
          name: 'Wisdom',
          value: 0,
          groups: []
        },
        charisma: {
          name: 'Charisma',
          value: 0,
          groups: []
        }
      };
      this.updateName();
      this.updateClass();
      this.updateVocation();
      this.updateStats();
      this.updateHitPoints();
      this.updateAttackValue();
      this.updateSavingThrow();
      this.updateSlotCount();
      this.updateGroupCount();
      this.updateAffiliations();
      this.generateStartingGoldPieces();
      this.buyArmor();
      this.buyWeapon();
      this.buyWeapon();
    }
  }, {
    key: "generateStartingGoldPieces",
    value: function generateStartingGoldPieces() {
      var goldPieces = 10 * d(6, 3);
      this.goldPieces = goldPieces;
      this.startingGoldPieces = goldPieces;
    }
  }, {
    key: "updateStats",
    value: function updateStats() {
      // Roll 3d6 for each attribute.
      this.attributes.strength.value = d(6, 3);
      this.attributes.dexterity.value = d(6, 3);
      this.attributes.constitution.value = d(6, 3);
      this.attributes.intelligence.value = d(6, 3);
      this.attributes.wisdom.value = d(6, 3);
      this.attributes.charisma.value = d(6, 3); // Calculate bonus groups for low attributes.

      this.bonusGroups = 0;

      for (var attribute in this.attributes) {
        if (this.attributes[attribute].value <= 5) {
          this.bonusGroups += 1;
        }
      }
    }
  }, {
    key: "updateAttackValue",
    value: function updateAttackValue() {
      if (this.characterClass == 'Deft') {
        switch (this.level) {
          case 1:
            this.attackValue = 10;
            break;

          case 2:
            this.attackValue = 11;
            break;

          case 3:
            this.attackValue = 11;
            break;

          case 4:
            this.attackValue = 12;
            break;

          case 5:
            this.attackValue = 12;
            break;

          case 6:
            this.attackValue = 13;
            break;

          case 7:
            this.attackValue = 13;
            break;

          case 8:
            this.attackValue = 14;
            break;

          case 9:
            this.attackValue = 14;
            break;

          case 10:
            this.attackValue = 15;
            break;
        }
      } else if (this.characterClass == 'Strong') {
        switch (this.level) {
          case 1:
            this.attackValue = 11;
            break;

          case 2:
            this.attackValue = 11;
            break;

          case 3:
            this.attackValue = 12;
            break;

          case 4:
            this.attackValue = 13;
            break;

          case 5:
            this.attackValue = 13;
            break;

          case 6:
            this.attackValue = 14;
            break;

          case 7:
            this.attackValue = 15;
            break;

          case 8:
            this.attackValue = 15;
            break;

          case 9:
            this.attackValue = 16;
            break;

          case 10:
            this.attackValue = 17;
            break;
        }
      } else if (this.characterClass == 'Wise') {
        switch (this.level) {
          case 1:
            this.attackValue = 10;
            break;

          case 2:
            this.attackValue = 11;
            break;

          case 3:
            this.attackValue = 11;
            break;

          case 4:
            this.attackValue = 11;
            break;

          case 5:
            this.attackValue = 12;
            break;

          case 6:
            this.attackValue = 12;
            break;

          case 7:
            this.attackValue = 12;
            break;

          case 8:
            this.attackValue = 13;
            break;

          case 9:
            this.attackValue = 13;
            break;

          case 10:
            this.attackValue = 13;
            break;
        }
      }
    }
  }, {
    key: "updateSavingThrow",
    value: function updateSavingThrow() {
      if (this.characterClass == 'Deft') {
        switch (this.level) {
          case 1:
            this.savingThrow = 7;
            break;

          case 2:
            this.savingThrow = 8;
            break;

          case 3:
            this.savingThrow = 9;
            break;

          case 4:
            this.savingThrow = 10;
            break;

          case 5:
            this.savingThrow = 11;
            break;

          case 6:
            this.savingThrow = 12;
            break;

          case 7:
            this.savingThrow = 13;
            break;

          case 8:
            this.savingThrow = 14;
            break;

          case 9:
            this.savingThrow = 15;
            break;

          case 10:
            this.savingThrow = 16;
            break;
        }
      } else if (this.characterClass == 'Strong') {
        switch (this.level) {
          case 1:
            this.savingThrow = 5;
            break;

          case 2:
            this.savingThrow = 6;
            break;

          case 3:
            this.savingThrow = 7;
            break;

          case 4:
            this.savingThrow = 8;
            break;

          case 5:
            this.savingThrow = 9;
            break;

          case 6:
            this.savingThrow = 10;
            break;

          case 7:
            this.savingThrow = 11;
            break;

          case 8:
            this.savingThrow = 12;
            break;

          case 9:
            this.savingThrow = 13;
            break;

          case 10:
            this.savingThrow = 14;
            break;
        }
      } else if (this.characterClass == 'Wise') {
        switch (this.level) {
          case 1:
            this.savingThrow = 6;
            break;

          case 2:
            this.savingThrow = 7;
            break;

          case 3:
            this.savingThrow = 8;
            break;

          case 4:
            this.savingThrow = 9;
            break;

          case 5:
            this.savingThrow = 10;
            break;

          case 6:
            this.savingThrow = 11;
            break;

          case 7:
            this.savingThrow = 12;
            break;

          case 8:
            this.savingThrow = 13;
            break;

          case 9:
            this.savingThrow = 14;
            break;

          case 10:
            this.savingThrow = 15;
            break;
        }
      }
    }
  }, {
    key: "updateSlotCount",
    value: function updateSlotCount() {
      if (this.characterClass == 'Deft') {
        switch (this.level) {
          case 1:
            this.slots = 1;
            break;

          case 2:
            this.slots = 1;
            break;

          case 3:
            this.slots = 1;
            break;

          case 4:
            this.slots = 2;
            break;

          case 5:
            this.slots = 2;
            break;

          case 6:
            this.slots = 2;
            break;

          case 7:
            this.slots = 3;
            break;

          case 8:
            this.slots = 3;
            break;

          case 9:
            this.slots = 3;
            break;

          case 10:
            this.slots = 4;
            break;
        }
      } else if (this.characterClass == 'Strong') {
        switch (this.level) {
          case 1:
            this.slots = 1;
            break;

          case 2:
            this.slots = 1;
            break;

          case 3:
            this.slots = 1;
            break;

          case 4:
            this.slots = 2;
            break;

          case 5:
            this.slots = 2;
            break;

          case 6:
            this.slots = 2;
            break;

          case 7:
            this.slots = 3;
            break;

          case 8:
            this.slots = 3;
            break;

          case 9:
            this.slots = 3;
            break;

          case 10:
            this.slots = 4;
            break;
        }
      } else if (this.characterClass == 'Wise') {
        switch (this.level) {
          case 1:
            this.slots = 1;
            break;

          case 2:
            this.slots = 1;
            break;

          case 3:
            this.slots = 2;
            break;

          case 4:
            this.slots = 2;
            break;

          case 5:
            this.slots = 3;
            break;

          case 6:
            this.slots = 3;
            break;

          case 7:
            this.slots = 4;
            break;

          case 8:
            this.slots = 4;
            break;

          case 9:
            this.slots = 5;
            break;

          case 10:
            this.slots = 5;
            break;
        }

        if (this.attributes.wisdom.value >= 16) {
          this.slots += 2;
        } else if (this.attributes.wisdom.value >= 13) {
          this.slots += 1;
        }
      }
    }
  }, {
    key: "updateGroupCount",
    value: function updateGroupCount() {
      if (this.characterClass == 'Deft') {
        switch (this.level) {
          case 1:
            this.groups = 2;
            break;

          case 2:
            this.groups = 2;
            break;

          case 3:
            this.groups = 3;
            break;

          case 4:
            this.groups = 3;
            break;

          case 5:
            this.groups = 4;
            break;

          case 6:
            this.groups = 4;
            break;

          case 7:
            this.groups = 5;
            break;

          case 8:
            this.groups = 5;
            break;

          case 9:
            this.groups = 6;
            break;

          case 10:
            this.groups = 6;
            break;
        }
      } else if (this.characterClass == 'Strong') {
        switch (this.level) {
          case 1:
            this.groups = 2;
            break;

          case 2:
            this.groups = 2;
            break;

          case 3:
            this.groups = 2;
            break;

          case 4:
            this.groups = 3;
            break;

          case 5:
            this.groups = 3;
            break;

          case 6:
            this.groups = 3;
            break;

          case 7:
            this.groups = 4;
            break;

          case 8:
            this.groups = 4;
            break;

          case 9:
            this.groups = 4;
            break;

          case 10:
            this.groups = 5;
            break;
        }
      } else if (this.characterClass == 'Wise') {
        switch (this.level) {
          case 1:
            this.groups = 2;
            break;

          case 2:
            this.groups = 2;
            break;

          case 3:
            this.groups = 2;
            break;

          case 4:
            this.groups = 3;
            break;

          case 5:
            this.groups = 3;
            break;

          case 6:
            this.groups = 3;
            break;

          case 7:
            this.groups = 4;
            break;

          case 8:
            this.groups = 4;
            break;

          case 9:
            this.groups = 4;
            break;

          case 10:
            this.groups = 5;
            break;
        }
      }
    }
  }, {
    key: "updateName",
    value: function updateName() {
      var names = ['Gobbo Dar', 'Silva', 'Ulsak', 'Elbet', 'Thunder Foot', 'Regin', 'Snuffit', 'Oddo', 'Horst', 'Ugga', 'Uno Saar', 'Haxander', 'Stravka', 'Saffron', 'Edelhart', 'Galvina', 'Beryl Chard', 'Rapokes', 'Thorne', 'Elwydd', 'Clivia', 'Laveri', 'Raffle', 'Adelina', 'Hrain of the Ice', 'Apok', 'Gonk', 'Leander', 'Lebert Creth', 'Mercutio', 'Rathid', 'Adursi', 'Furio', 'Reekwin', 'Charah', 'Cletus', 'Elbaran', 'Alehir', 'Beppo', 'Luena', 'Morne', 'Restar', 'Blind Renly', 'Alibede', 'Arznak', 'Lugan', 'Aima', 'Cogius', 'Tunka Jinn', 'Ruberg', 'Nan the Black', 'Aleigh', 'Eyemash', 'Madon', 'Graline', 'Satis', 'Mahuda', 'Skira-Na-Nog', 'Grimare', 'Makim', 'Malavac', 'Segon', 'Amoryn', 'Ana', 'Corsan', 'Malla', 'Shadh', 'Curmia', 'Shamona', 'Shrike', 'Walks-With-Mountains', 'Arannas', 'Spero', 'Dearni', 'Harah', 'Argone', 'Medori', 'Hirra', 'Spire', 'Hobail', 'Strahe', 'Holdus', 'Horge of Ode', 'Milyn Bel Fara', 'Ealla', 'Mogus', 'Huran', 'Moire', 'Teonor', 'Bavelyn', 'Edrax', 'Edred of the Woods', 'Morcan', 'Imnel', 'Moredi', 'Thiana', 'Belus', 'Zork', 'Tiarlyn', 'Mohab', 'Solar Quex', 'Myrvyn', 'Torix', 'Nardil', 'Bladeg', 'Blain', 'Nimroin', 'Junit', 'Niniks', 'Kalynna', 'Odham', 'Unfela', 'Kathall', 'Ogius', 'Faleah', 'Fitz', 'Donne', 'Caliban', 'Finrim', 'Obura', 'Yrin', 'Jar', 'Drak', 'Ben-Sarah', 'No Nose Jennie', 'Magg', 'Taria', 'Ishtur', 'Mardahal', 'Droog of Three Willows', 'Solu', 'Xotav', 'Flavio', 'Agrippa', 'Rufus'];
      this.name = names.random();
    }
  }, {
    key: "updateClass",
    value: function updateClass() {
      var classes = ['Deft', 'Strong', 'Wise'];
      this.characterClass = classes.random();
    }
  }, {
    key: "updateSlots",
    value: function updateSlots() {
      // Use class to determine what type of slots to get.
      if (this.characterClass == 'Deft') {
        this.slotType = 'Attunements';
        this.generateSlots('Deft');
      } else if (this.characterClass == 'Strong') {
        this.slotType = 'Abilities';
        this.generateSlots('Strong');
      } else if (this.characterClass == 'Wise') {
        this.slotType = 'Miracles';
        this.generateSlots('Wise');
      }
    }
  }, {
    key: "updateVocation",
    value: function updateVocation() {
      // Choose a vocation at random.
      var vocations = ['Barbarian', 'Crusader', 'Knight', 'Warrior', 'Spellsword', 'Witchhunter', 'Valkyrie', 'Shieldmaiden', 'Pit Fighter', 'Vigilante', 'Outrider', 'Paladin', 'Inquisitor', 'Oracle', 'Entropomancer', 'Geomancer', 'Templar', 'Exorcist', 'Warpriest', 'Hexblade', 'Battlemage', 'Healer', 'Mage', 'Warlock', 'Demonologist', 'Sorcerer', 'Priest', 'Cleric', 'Druid', 'Summoner', 'Elementalist', 'Soothsayer', 'Shaman', 'Pyromancer', 'Cryomancer', 'Necromancer', 'Illusionist', 'Wizard', 'Alchemist', 'Apothecary', 'Conjurer', 'Mystic', 'Spellthief', 'Warmage', 'Invoker', 'Psion', 'Thaumaturgist', 'Bard', 'Acrobat', 'Agent', 'Spy', 'Assassin', 'Rogue', 'Scout', 'Thief', 'Ranger', 'Hunter', 'Marksman', 'Duelist', 'Fencer', 'Archer', 'Monk', 'Nightblade', 'Pilgrim', 'Sailor', 'Pirate', 'Bounty Hunter', 'Ninja', 'Pugilist', 'Merchant', 'Footpad', 'Orator', 'Skald', 'Beastmaster', 'Alienist', 'Bloodmage', 'Fateweaver', 'Mindbender', 'Wayfarer', 'Aristocrat'];
      this.vocation = vocations.random(); // Choose an attribute to tie the vocation to (unless Deft).

      if (this.characterClass == 'Deft') {
        this.vocationAttribute = null;
      } else {
        switch (d(6, 1)) {
          case 1:
            this.attributes.strength.groups.push(this.vocation);
            break;

          case 2:
            this.attributes.dexterity.groups.push(this.vocation);
            break;

          case 3:
            this.attributes.constitution.groups.push(this.vocation);
            break;

          case 4:
            this.attributes.intelligence.groups.push(this.vocation);
            break;

          case 5:
            this.attributes.wisdom.groups.push(this.vocation);
            break;

          case 6:
            this.attributes.charisma.groups.push(this.vocation);
            break;
        }
      }
    }
  }, {
    key: "updateAffiliations",
    value: function updateAffiliations() {
      // First, get the total number of groups, subtract 1 (for vocation), add
      // any bonus groups for low stats, and randomly assign
      // one at a time until that number has been met.
      // However, make sure that no one attribute has more than 2 groups on it.
      var remainingAffiliationGroups = this.groups + this.bonusGroups - 1;

      while (remainingAffiliationGroups > 0) {
        switch (d(6, 1)) {
          case 1:
            if (this.attributes.strength.groups.length >= 2) {
              break;
            } else {
              this.attributes.strength.groups.push(this.generateAffiliation());
              remainingAffiliationGroups--;
              break;
            }

          case 2:
            if (this.attributes.dexterity.groups.length >= 2) {
              break;
            } else {
              this.attributes.dexterity.groups.push(this.generateAffiliation());
              remainingAffiliationGroups--;
              break;
            }

          case 3:
            if (this.attributes.constitution.groups.length >= 2) {
              break;
            } else {
              this.attributes.constitution.groups.push(this.generateAffiliation());
              remainingAffiliationGroups--;
              break;
            }

          case 4:
            if (this.attributes.intelligence.groups.length >= 2) {
              break;
            } else {
              this.attributes.intelligence.groups.push(this.generateAffiliation());
              remainingAffiliationGroups--;
              break;
            }

          case 5:
            if (this.attributes.wisdom.groups.length >= 2) {
              break;
            } else {
              this.attributes.wisdom.groups.push(this.generateAffiliation());
              remainingAffiliationGroups--;
              break;
            }

          case 6:
            if (this.attributes.charisma.groups.length >= 2) {
              break;
            } else {
              this.attributes.charisma.groups.push(this.generateAffiliation());
              remainingAffiliationGroups--;
              break;
            }

        }
      }
    }
  }, {
    key: "generateAffiliation",
    value: function generateAffiliation() {
      affiliations = ['Good', 'Evil', 'Law', 'Chaos', 'Circle of Herne', 'Circle of Green Man', 'Church of Crom', 'Church of Arcantryl', 'Church of St. Ygg', 'Cult of Impurax', 'Cult of Set', 'Cult of Orcus', 'Cult of Nergal', 'Merry Men', 'Cult of the Black Amphora', 'Order of the Sphinx'];
      return affiliations.random();
    }
  }, {
    key: "updateHitPoints",
    value: function updateHitPoints() {
      if (this.characterClass == 'Deft') {
        switch (this.level) {
          case 1:
            newHitPoints = d(6, 1);
            break;

          case 2:
            newHitPoints = d(6, 2);
            break;

          case 3:
            newHitPoints = d(6, 2) + 1;
            break;

          case 4:
            newHitPoints = d(6, 3);
            break;

          case 5:
            newHitPoints = d(6, 3) + 1;
            break;

          case 6:
            newHitPoints = d(6, 4);
            break;

          case 7:
            newHitPoints = d(6, 4) + 1;
            break;

          case 8:
            newHitPoints = d(6, 5);
            break;

          case 9:
            newHitPoints = d(6, 5) + 1;
            break;

          case 10:
            newHitPoints = d(6, 6);
            break;
        }
      } else if (this.characterClass == 'Strong') {
        switch (this.level) {
          case 1:
            newHitPoints = d(6, 1) + 2;
            break;

          case 2:
            newHitPoints = d(6, 2);
            break;

          case 3:
            newHitPoints = d(6, 3);
            break;

          case 4:
            newHitPoints = d(6, 4);
            break;

          case 5:
            newHitPoints = d(6, 5);
            break;

          case 6:
            newHitPoints = d(6, 6);
            break;

          case 7:
            newHitPoints = d(6, 7);
            break;

          case 8:
            newHitPoints = d(6, 8);
            break;

          case 9:
            newHitPoints = d(6, 9);
            break;

          case 10:
            newHitPoints = d(6, 10);
            break;
        }

        if (this.attributes.constitution.value >= 16) {
          this.slots += 2;
        } else if (this.attributes.constitution.value >= 13) {
          this.slots += 1;
        }
      } else if (this.characterClass == 'Wise') {
        switch (this.level) {
          case 1:
            newHitPoints = d(6, 1) + 1;
            break;

          case 2:
            newHitPoints = d(6, 2);
            break;

          case 3:
            newHitPoints = d(6, 2) + 1;
            break;

          case 4:
            newHitPoints = d(6, 3);
            break;

          case 5:
            newHitPoints = d(6, 4);
            break;

          case 6:
            newHitPoints = d(6, 4) + 1;
            break;

          case 7:
            newHitPoints = d(6, 5);
            break;

          case 8:
            newHitPoints = d(6, 6);
            break;

          case 9:
            newHitPoints = d(6, 6) + 1;
            break;

          case 10:
            newHitPoints = d(6, 7);
            break;
        }
      }

      if (newHitPoints > this.hitPoints) {
        this.hitPoints = newHitPoints;
      }
    }
  }, {
    key: "increaseLevel",
    value: function increaseLevel() {
      if (this.level < 10) {
        this.level = this.level + 1;
        this.updateHitPoints();
        this.updateAttackValue();
        this.updateSavingThrow();
        this.updateSlots();
        this.updateGroups();
      }
    }
  }, {
    key: "decreaseLevel",
    value: function decreaseLevel() {
      if (this.level > 1) {
        this.level = this.level - 1;
        this.updateHitPoints();
        this.updateAttackValue();
        this.updateSavingThrow();
        this.updateSlots();
        this.updateGroups();
      }
    }
  }, {
    key: "buyArmor",
    value: function buyArmor() {
      var armors = {
        cloth: {
          name: 'Cloth armor',
          armorClass: 1,
          weight: 10,
          cost: 10,
          allowedClasses: ['Deft', 'Strong', 'Wise']
        },
        leather: {
          name: 'Leather armor',
          armorClass: 2,
          weight: 15,
          cost: 15,
          allowedClasses: ['Deft', 'Strong', 'Wise']
        },
        studdedLeather: {
          name: 'Studded leather armor',
          armorClass: 3,
          weight: 20,
          cost: 20,
          allowedClasses: ['Deft', 'Strong']
        },
        chainmail: {
          name: 'Chainmail',
          armorClass: 4,
          weight: 40,
          cost: 30,
          allowedClasses: ['Strong']
        },
        splintMail: {
          name: 'Splint mail',
          armorClass: 5,
          weight: 50,
          cost: 40,
          allowedClasses: ['Strong']
        },
        fullPlate: {
          name: 'Full plate',
          armorClass: 6,
          weight: 60,
          cost: 50,
          allowedClasses: ['Strong']
        }
      }; // TODO add shields to buyArmor().

      if (this.characterClass == 'Deft') {
        // Cloth, leather, or studded leather. No shield.
        // Determine which ones are within price range.
        if (this.goldPieces >= 20) {
          // All are within budget.
          var validArmors = [armors.cloth, armors.leather, armors.studdedLeather];
        } else if (this.goldPieces >= 15) {
          // Leather and cloth are within budget.
          var validArmors = [armors.cloth, armors.leather];
        } else if (this.goldPieces >= 10) {
          // Cloth is within budget.
          var validArmors = [armors.cloth];
        }
      } else if (this.characterClass == 'Strong') {
        // Cloth, leather, studded leather, chainmail, splint mail, full plate. Shield allowed.
        // Determine which ones are within price range.
        if (this.goldPieces >= 60) {
          // All are within budget.
          var validArmors = [armors.cloth, armors.leather, armors.studdedLeather, armors.chainmail, armors.splintMail, armors.fullPlate];
        } else if (this.goldPieces >= 50) {
          // All are within budget.
          var validArmors = [armors.cloth, armors.leather, armors.studdedLeather, armors.chainmail, armors.splintMail];
        } else if (this.goldPieces >= 40) {
          // All are within budget.
          var validArmors = [armors.cloth, armors.leather, armors.studdedLeather, armors.chainmail];
        } else if (this.goldPieces >= 20) {
          // All are within budget.
          var validArmors = [armors.cloth, armors.leather, armors.studdedLeather];
        } else if (this.goldPieces >= 15) {
          // Leather and cloth are within budget.
          var validArmors = [armors.cloth, armors.leather];
        } else if (this.goldPieces >= 10) {
          // Cloth is within budget.
          var validArmors = [armors.cloth];
        }
      } else if (this.characterClass == 'Wise') {
        // Cloth, leather. No shield.
        // Determine which ones are within price range.
        if (this.goldPieces >= 15) {
          // Leather and cloth are within budget.
          var validArmors = [armors.cloth, armors.leather];
        } else if (this.goldPieces >= 10) {
          // Cloth is within budget.
          var validArmors = [armors.cloth];
        }
      } // Determine which weapons are within budget and allowed by character class.


      var validArmor = [];

      for (var key in armors) {
        var _armor = armors[key];

        if (this.goldPieces >= _armor.cost && _armor.allowedClasses.includes(this.characterClass)) {
          validArmors.push(_armor);
        }
      } // Choose one in-budget armor at random.


      var armor = validArmors.random();
      this.armor = armor.name;
      this.armorClass = armor.armorClass;
      this.goldPieces -= armor.cost;
      this.weight += armor.weight;
    }
  }, {
    key: "buyWeapon",
    value: function buyWeapon() {
      // Define all possible weapons.
      var weapons = {
        axe: {
          name: 'Axe',
          damage: '1d6+1',
          weight: 6,
          cost: 10
        },
        sword: {
          name: 'Sword',
          damage: '1d6+1',
          weight: 6,
          cost: 10
        },
        club: {
          name: 'Club',
          damage: '1d6-2',
          weight: 3,
          cost: 0
        },
        crossbow: {
          name: 'Crossbow',
          damage: '1d6+1',
          weight: 8,
          cost: 30
        },
        dagger: {
          name: 'Dagger',
          damage: '1d6-2',
          weight: 1,
          cost: 3
        },
        darts: {
          name: 'Darts (10)',
          damage: '1',
          weight: 3,
          cost: 10
        },
        flail: {
          name: 'Flail',
          damage: '1d6',
          weight: 9,
          cost: 8
        },
        greatsword: {
          name: 'Greatsword',
          damage: '1d6+2',
          weight: 15,
          cost: 15
        },
        battleAxe: {
          name: 'Battle axe',
          damage: '1d6+2',
          weight: 15,
          cost: 15
        },
        halberd: {
          name: 'Halberd',
          damage: '1d6+1',
          weight: 20,
          cost: 10
        },
        polearm: {
          name: 'Polearm',
          damage: '1d6+1',
          weight: 20,
          cost: 10
        },
        javelin: {
          name: 'Javelins (5)',
          damage: '1d6',
          weight: 10,
          cost: 10
        },
        longbow: {
          name: 'Longbow',
          damage: '1d6',
          weight: 5,
          cost: 40
        },
        mace: {
          name: 'Mace',
          damage: '1d6',
          weight: 10,
          cost: 5
        },
        warhammer: {
          name: 'Warhammer',
          damage: '1d6',
          weight: 10,
          cost: 5
        },
        morningstar: {
          name: 'Morningstar',
          damage: '1d6',
          weight: 20,
          cost: 8
        },
        musket: {
          name: 'Musket',
          damage: '1d6+2',
          weight: 10,
          cost: 150
        },
        pistol: {
          name: 'Pistol',
          damage: '1d6+1',
          weight: 3,
          cost: 100
        },
        quarterstaff: {
          name: 'Quarterstaff',
          damage: '1d6-1',
          weight: 4,
          cost: 1
        },
        scimitar: {
          name: 'Scimitar',
          damage: '1d6',
          weight: 5,
          cost: 8
        },
        shortbow: {
          name: 'Shortbow',
          damage: '1d6-1',
          weight: 4,
          cost: 25
        },
        shortsword: {
          name: 'Shortsword',
          damage: '1d6',
          weight: 3,
          cost: 8
        },
        sling: {
          name: 'Sling',
          damage: '1d6-2',
          weight: 0.5,
          cost: 2
        },
        spear: {
          name: 'Spear',
          damage: '1d6',
          weight: 8,
          cost: 2
        },
        throwingKnife: {
          name: 'Throwing Knives (2)',
          damage: '1d6-2',
          weight: 2,
          cost: 4
        },
        throwingAxe: {
          name: 'Throwing Axes (2)',
          damage: '1d6-2',
          weight: 2,
          cost: 4
        }
      }; // Determine which weapons are within budget.

      var validWeapons = [];

      for (var key in weapons) {
        var _weapon = weapons[key];

        if (this.goldPieces >= _weapon.cost) {
          validWeapons.push(_weapon);
        }
      } // Choose one in-budget weapon at random.


      var weapon = validWeapons.random();
      this.weapons.push(weapon);
      this.goldPieces -= weapon.cost;
      this.weight += weapon.weight;
    }
  }]);

  return Character;
}();

function d(size, count) {
  var faces = Array.from(new Array(size), function (x, i) {
    return i + 1;
  });
  var sum = 0;

  for (var i = 0; i < count; i++) {
    sum = sum + faces.random();
  }

  return sum;
} // Instantiate a new character on pageload.


var character = new Character(); // Tie the character object to a Vue instance.

var app = new Vue({
  el: '#app',
  data: character,
  computed: {
    levelDownObject: function levelDownObject() {
      return {
        'disabled': this.level == 1
      };
    },
    levelUpObject: function levelUpObject() {
      return {
        'disabled': this.level == 10
      };
    }
  },
  methods: {
    // Define a method to create a new character.
    generateCharacter: function generateCharacter() {
      character.generate();
    },
    increaseLevel: function increaseLevel() {
      character.increaseLevel();
    },
    decreaseLevel: function decreaseLevel() {
      character.decreaseLevel();
    }
  }
});

/***/ }),

/***/ 1:
/*!*************************************************************!*\
  !*** multi ./resources/js/whitehack_character_generator.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Blaine\dev\blog\resources\js\whitehack_character_generator.js */"./resources/js/whitehack_character_generator.js");


/***/ })

/******/ });