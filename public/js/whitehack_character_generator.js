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
}; // TODO add function to determine number of groups
// TODO add slots
// TODO add starting gold
// TODO add equipment


var Character = /*#__PURE__*/function () {
  function Character() {
    _classCallCheck(this, Character);

    this.regenerate();
  }

  _createClass(Character, [{
    key: "regenerate",
    value: function regenerate() {
      this.level = 1;
      this.updateName();
      this.updateClass();
      this.updateVocation();
      this.updateStats();
      this.updateHitPoints();
      this.updateAttackValue();
      this.updateSavingThrow();
      this.updateSlots();
      this.updateGroups();
    }
  }, {
    key: "updateName",
    value: function updateName() {
      this.name = generateName();
    }
  }, {
    key: "updateClass",
    value: function updateClass() {
      this.characterClass = generateClass();
    }
  }, {
    key: "updateVocation",
    value: function updateVocation() {
      this.vocation = generateVocation();
    }
  }, {
    key: "updateStats",
    value: function updateStats() {
      this.attributes = {};
      this.attributes.strength = generateStat();
      this.attributes.dexterity = generateStat();
      this.attributes.constitution = generateStat();
      this.attributes.intelligence = generateStat();
      this.attributes.wisdom = generateStat();
      this.attributes.charisma = generateStat();
      this.bonusGroups = 0;

      if (this.attributes.strength <= 5) {
        this.bonusGroups += 1;
      }

      if (this.attributes.dexterity <= 5) {
        this.bonusGroups += 1;
      }

      if (this.attributes.constitution <= 5) {
        this.bonusGroups += 1;
      }

      if (this.attributes.intelligence <= 5) {
        this.bonusGroups += 1;
      }

      if (this.attributes.wisdom <= 5) {
        this.bonusGroups += 1;
      }

      if (this.attributes.charisma <= 5) {
        this.bonusGroups += 1;
      }
    }
  }, {
    key: "updateHitPoints",
    value: function updateHitPoints() {
      this.hitPoints = generateHitPoints(this.characterClass, this.level);
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
    key: "updateSlots",
    value: function updateSlots() {
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
      }
    }
  }, {
    key: "updateGroups",
    value: function updateGroups() {
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
    key: "increaseLevel",
    value: function increaseLevel() {
      if (this.level == 10) {
        this.level = 10;
      } else {
        this.level = this.level + 1;
      }

      this.updateHitPoints();
      this.updateAttackValue();
      this.updateSavingThrow();
      this.updateSlots();
      this.updateGroups();
    }
  }, {
    key: "decreaseLevel",
    value: function decreaseLevel() {
      if (this.level == 1) {
        this.level = 1;
      } else {
        this.level = this.level - 1;
      }

      this.updateHitPoints();
      this.updateAttackValue();
      this.updateSavingThrow();
      this.updateSlots();
      this.updateGroups();
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
}

function generateStat() {
  return d(6, 3);
}

function generateName() {
  var names = ['A', 'B', 'C'];
  return names.random();
}

function generateClass() {
  var classes = ['Deft', 'Strong', 'Wise'];
  return classes.random();
}

function generateVocation() {
  var vocations = ['A', 'B', 'C'];
  return vocations.random();
}

function generateHitPoints(characterClass, level) {
  if (characterClass == 'Deft') {
    switch (level) {
      case 1:
        return d(6, 1);

      case 2:
        return d(6, 2);

      case 3:
        return d(6, 2) + 1;

      case 4:
        return d(6, 3);

      case 5:
        return d(6, 3) + 1;

      case 6:
        return d(6, 4);

      case 7:
        return d(6, 4) + 1;

      case 8:
        return d(6, 5);

      case 9:
        return d(6, 5) + 1;

      case 10:
        return d(6, 6);
    }
  } else if (characterClass = 'Strong') {
    switch (level) {
      case 1:
        return d(6, 1) + 2;

      case 2:
        return d(6, 2);

      case 3:
        return d(6, 3);

      case 4:
        return d(6, 4);

      case 5:
        return d(6, 5);

      case 6:
        return d(6, 6);

      case 7:
        return d(6, 7);

      case 8:
        return d(6, 8);

      case 9:
        return d(6, 9);

      case 10:
        return d(6, 10);
    }
  } else if (characterClass = 'Wise') {
    switch (level) {
      case 1:
        return d(6, 1) + 1;

      case 2:
        return d(6, 2);

      case 3:
        return d(6, 2) + 1;

      case 4:
        return d(6, 3);

      case 5:
        return d(6, 4);

      case 6:
        return d(6, 4) + 1;

      case 7:
        return d(6, 5);

      case 8:
        return d(6, 6);

      case 9:
        return d(6, 6) + 1;

      case 10:
        return d(6, 7);
    }
  }
} // Instantiate a new character on pageload.


var character = new Character(); // Tie the character object to a Vue instance.

var app = new Vue({
  el: '#app',
  data: character,
  methods: {
    // Define a method to create a new character.
    generateCharacter: function generateCharacter() {
      character.regenerate();
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

module.exports = __webpack_require__(/*! C:\Users\blaine.bush\dev\blog\resources\js\whitehack_character_generator.js */"./resources/js/whitehack_character_generator.js");


/***/ })

/******/ });