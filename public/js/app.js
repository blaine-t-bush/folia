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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

Vue.component('d-table', {
  props: ['rows'],
  template: '<table><tr v-for="row in rows"><td>{{ row.roll }}</td><td>{{ row.result }}</td></tr></table>'
});
new Vue({
  el: '#d6-table-encounters-lizardmen',
  data: {
    rows: [{
      roll: 1,
      result: 'Raiding party, on the prowl: 3d6 warriors and 1 captain.'
    }, {
      roll: 2,
      result: 'Raiding party, returning with captives: 2d6 warriors, 1d6 injured warriors, 1d6 captives, and 1 captain.'
    }, {
      roll: 3,
      result: 'Scouting party, patrolling borders: 2d6 scouts.'
    }, {
      roll: 4,
      result: 'Hunting party, searching for game: 2d6 hunters and 1d6+2 lizard-lions.'
    }, {
      roll: 5,
      result: 'Apprentice shaman, searching for rare herbs, roots, and mushrooms.'
    }, {
      roll: 6,
      result: 'Wandering exile, covered in scars and missing a tail and an arm.'
    }]
  }
});
new Vue({
  el: '#d6-table-encounters-froglings',
  data: {
    rows: [{
      roll: 1,
      result: 'Raiding party, on the prowl: 3d6 warriors and 1 captain.'
    }, {
      roll: 2,
      result: 'Warriors, performing a croaking ritual: 2d6 warriors, 1 captain, and 1 shaman.'
    }, {
      roll: 3,
      result: 'Refugees, fleeing encroaching enemies: 1d6 warriors, 2d6 women, 2d6 children.'
    }, {
      roll: 4,
      result: 'Caretakers transporting eggs: 2d6 caretakers.'
    }, {
      roll: 5,
      result: 'Toad-herders, looking for pasture: 1d6 herders and 3d6 giant toads.'
    }, {
      roll: 6,
      result: 'Hunting party: 2d6 hunters.'
    }]
  }
});

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/sass/whitehack_character_generator.scss":
/*!***********************************************************!*\
  !*** ./resources/sass/whitehack_character_generator.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*****************************************************************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ./resources/sass/whitehack_character_generator.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\Blaine\dev\blog\resources\js\app.js */"./resources/js/app.js");
__webpack_require__(/*! C:\Users\Blaine\dev\blog\resources\sass\app.scss */"./resources/sass/app.scss");
module.exports = __webpack_require__(/*! C:\Users\Blaine\dev\blog\resources\sass\whitehack_character_generator.scss */"./resources/sass/whitehack_character_generator.scss");


/***/ })

/******/ });