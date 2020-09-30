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

// Create prototype function on arrays to allow for inline random selection of one element.
Array.prototype.random = function () {
  return this[Math.floor(Math.random() * this.length)];
}; // TODO create a class to represent a character
// TODO update HP function to account for class & stats
// TODO add function to determine number of groups
// TODO add slots
// TODO add starting gold
// TODO add equipment


function d(size) {
  var faces = Array.from(new Array(size), function (x, i) {
    return i + 1;
  });
  return faces.random();
}

function generateStat() {
  return d(6) + d(6) + d(6);
}

function generateClass() {
  var classes = ['Deft', 'Strong', 'Wise'];
  return classes.random();
}

function generateName() {
  var names = ['Gobbo Dar', 'Silva', 'Ulsak', 'Elbet', 'Thunder Foot', 'Regin', 'Snuffit', 'Oddo', 'Horst', 'Ugga', 'Uno Saar', 'Haxander', 'Stravka', 'Saffron', 'Edelhart', 'Galvina', 'Beryl Chard', 'Rapokes', 'Thorne', 'Elwydd', 'Clivia', 'Laveri', 'Raffle', 'Adelina', 'Hrain of the Ice', 'Apok', 'Gonk', 'Leander', 'Lebert Creth', 'Mercutio', 'Rathid', 'Adursi', 'Furio', 'Reekwin', 'Charah', 'Cletus', 'Elbaran', 'Alehir', 'Beppo', 'Luena', 'Morne', 'Restar', 'Blind Renly', 'Alibede'];
  return names.random();
}

function generateVocation() {
  var vocations = ['Thief', 'Monk', 'Spy', 'Marksman', 'Ranger', 'Assassin', 'Warrior', 'Guard', 'Brigand', 'Knight', 'Bounty Hunter', 'Hunter', 'Barbarian', 'Wizard', 'Priest', 'Alchemist', 'Exorcist', 'Demonologist', 'Druid', 'Runecarver', 'Bard', 'Mad Scientist'];
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
    }, {
      name: 'Dexterity',
      value: generateStat()
    }, {
      name: 'Constitution',
      value: generateStat()
    }, {
      name: 'Intelligence',
      value: generateStat()
    }, {
      name: 'Wisdom',
      value: generateStat()
    }, {
      name: 'Charisma',
      value: generateStat()
    }],
    hitPoints: generateHitPoints()
  },
  methods: {
    generateCharacter: function generateCharacter() {
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