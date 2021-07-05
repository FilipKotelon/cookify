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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./ts/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./scss/main.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./scss/main.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "*, *::before, *::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box; }\n\nhtml.no-scroll {\n  overflow: hidden; }\n\n#wpadminbar {\n  display: none; }\n\nbody {\n  overflow-x: hidden;\n  position: relative;\n  background-color: #FEFBED; }\n  body.grey-body {\n    background-color: #E7EDF3; }\n  @media (hover: none) {\n    body {\n      cursor: pointer; } }\n\ninput {\n  border: none;\n  font: inherit; }\n  input:focus {\n    outline: none; }\n\nbutton {\n  font: inherit;\n  cursor: pointer;\n  border: none;\n  background-color: transparent; }\n  button:focus {\n    outline: none; }\n\nhtml {\n  font-size: 62.5%; }\n\nbody {\n  font-size: 1.6rem;\n  font-family: 'Open Sans', sans-serif; }\n\nh1, h2, h3, h4, h5, h6 {\n  font-family: 'Montserrat', sans-serif; }\n\n.open-sans {\n  font-family: 'Open Sans', sans-serif; }\n\n.montserrat {\n  font-family: 'Montserrat', sans-serif; }\n\na {\n  text-decoration: none;\n  color: #1F2127; }\n\n.text-danger {\n  color: #772E25; }\n\n.h1 {\n  font-weight: bold;\n  font-size: 48px;\n  line-height: 59px;\n  margin-bottom: 60px;\n  text-align: center; }\n\n.h2 {\n  /*@include after-under($top: 10px );*/\n  font-weight: 700;\n  font-style: normal;\n  font-size: 32px;\n  color: #EB9605;\n  position: relative;\n  left: 15px; }\n\n.h3 {\n  font-weight: bold;\n  font-size: 24px;\n  line-height: 33px; }\n\n.mobile-h2 {\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 22px; }\n\n.admin-form {\n  display: flex;\n  flex-direction: column;\n  background-color: #FFF;\n  padding: 24px 32px;\n  border-radius: 5px;\n  max-width: 800px;\n  width: 100%; }\n  .admin-form__group {\n    display: flex;\n    flex-direction: column; }\n    .admin-form__group:not(:last-child) {\n      margin-bottom: 24px; }\n    .admin-form__group label {\n      margin-bottom: 8px; }\n    .admin-form__group input {\n      width: 100%;\n      height: 40px;\n      padding: 0 15px;\n      border: 1px solid #B8C2CC;\n      background-color: #FFF; }\n    .admin-form__group select {\n      height: 40px;\n      padding: 0 15px;\n      border: 1px solid #B8C2CC; }\n\n.admin-panels {\n  display: flex;\n  flex-wrap: wrap; }\n  .admin-panels > * {\n    flex-grow: 0;\n    flex-shrink: 0;\n    flex-basis: calc(100% / 6 - 5 / 6 * 32px);\n    margin-bottom: 32px; }\n    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n      .admin-panels > * {\n        flex-basis: calc(100% / 6 - 2.2 * 32px); } }\n    .admin-panels > *:not(:nth-child(6n)) {\n      margin-right: 32px; }\n  .admin-panels__item {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: calc(100vh - 240px);\n    background: #FFF;\n    font-family: 'Montserrat';\n    font-weight: bold;\n    font-size: 28px;\n    position: relative;\n    border-radius: 5px;\n    overflow: hidden; }\n    .admin-panels__item__bg {\n      position: absolute;\n      left: 0;\n      top: 0;\n      opacity: 0;\n      z-index: 0;\n      filter: brightness(0.6);\n      transition: all .3s;\n      width: 100%;\n      height: 100%;\n      object-fit: cover; }\n    .admin-panels__item span {\n      position: relative;\n      z-index: 1;\n      color: #1F2127;\n      transition: all .3s; }\n    .admin-panels__item:hover span {\n      color: #FFF; }\n    .admin-panels__item:hover .admin-panels__item__bg {\n      opacity: 1; }\n\n.admin-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #110011;\n  height: 36px;\n  padding: 0 14px;\n  color: #FFF;\n  font-size: 14px;\n  border: none;\n  transition: all .3s;\n  cursor: pointer; }\n  .admin-btn:hover {\n    background-color: #197278; }\n  .admin-btn-group {\n    display: flex;\n    align-items: center; }\n    .admin-btn-group > :not(:last-child) {\n      margin-right: 24px; }\n\n.ck-dropdown-menu {\n  position: absolute;\n  left: -22px;\n  top: calc(100% + 16px);\n  display: flex;\n  flex-direction: column;\n  background-color: #FFF;\n  border-radius: 0 0 5px 5px;\n  padding: 14px 22px;\n  opacity: 0;\n  visibility: hidden;\n  transition: all .3s;\n  z-index: 100;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.02); }\n  .ck-dropdown-menu-con {\n    position: relative; }\n    .ck-dropdown-menu-con:hover .ck-dropdown-menu {\n      opacity: 1;\n      visibility: visible; }\n  .ck-dropdown-menu > :not(:last-child) {\n    margin-bottom: 8px; }\n  .ck-dropdown-menu.to-right {\n    right: 0;\n    left: initial; }\n  .ck-dropdown-menu__link {\n    white-space: nowrap;\n    transition: all .3s; }\n    .ck-dropdown-menu__link:hover {\n      color: #EB9605; }\n\n.favorite-heart {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  background-color: #FFF;\n  top: 15px;\n  right: 15px; }\n  .favorite-heart .heart-filled {\n    opacity: 0;\n    transition: all .3s;\n    position: absolute; }\n  .favorite-heart .heart-empty {\n    opacity: 1;\n    transition: all .3s;\n    position: absolute; }\n  .favorite-heart.filled .heart-filled {\n    opacity: 1; }\n  .favorite-heart.filled .heart-empty {\n    opacity: 0; }\n\n.filters-sidebar {\n  display: flex;\n  flex-direction: column;\n  background-color: #FFF;\n  padding: 15px;\n  border-radius: 5px; }\n  .filters-sidebar > :not(:last-child) {\n    margin-bottom: 12px; }\n  .filters-sidebar h3 {\n    margin-bottom: 12px; }\n  .filters-sidebar__field--search, .filters-sidebar__field--categories, .filters-sidebar__field--ingredients {\n    padding: 12px 9px;\n    border: 1px solid;\n    border-radius: 5px;\n    font-weight: 600;\n    font-size: 14px;\n    line-height: 17px; }\n  .filters-sidebar__field--categories, .filters-sidebar__field--ingredients {\n    display: flex;\n    flex-direction: column;\n    cursor: pointer; }\n  .filters-sidebar__field--search {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    color: #3D4852; }\n    .filters-sidebar__field--search input {\n      width: calc(100% - 26px); }\n    .filters-sidebar__field--search button {\n      width: 20px; }\n  .filters-sidebar__field--categories {\n    color: #772E25; }\n  .filters-sidebar__field--ingredients {\n    color: #296EB4; }\n\n.popup {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  padding: 32px;\n  z-index: 1000;\n  background: rgba(235, 150, 5, 0.95);\n  opacity: 0;\n  pointer-events: none;\n  transition: all .3s; }\n  .popup.open {\n    opacity: 1;\n    pointer-events: all; }\n  .popup__closer {\n    position: absolute;\n    top: 32px;\n    right: 32px;\n    width: 84px;\n    height: 84px;\n    cursor: pointer; }\n  .popup__content__title {\n    text-align: center;\n    color: #FFF;\n    margin-bottom: 48px; }\n  .popup__content .search-bar {\n    margin-bottom: 60px; }\n  .popup.search-popup {\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n    .popup.search-popup .popup__content {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      flex-direction: column; }\n      .popup.search-popup .popup__content .title-card {\n        width: 320px;\n        height: 170px; }\n\n.search-bar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 26px;\n  height: 60px;\n  background-color: #FFF;\n  border-radius: 30px;\n  width: 540px;\n  max-width: 100%; }\n  .search-bar input {\n    width: calc(100% - 44px);\n    font-weight: bold;\n    font-size: 18px;\n    line-height: 22px; }\n    .search-bar input::placeholder {\n      color: #606F7B; }\n  .search-bar img {\n    width: 32px; }\n\n.table {\n  width: 100%;\n  border-spacing: 0; }\n  .table th {\n    background-color: #FFF;\n    text-align: left; }\n  .table th, .table td {\n    padding: 8px 12px; }\n  .table tr:nth-child(even) {\n    background-color: #f8fafc; }\n  .table tr:nth-child(odd) {\n    background-color: #eef2f6; }\n\n.title-card {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 24px;\n  text-align: center;\n  cursor: pointer;\n  position: relative; }\n  .title-card::after {\n    content: \"\";\n    display: block;\n    position: absolute;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    z-index: -1;\n    background-color: #FFF;\n    border-radius: 5px;\n    transition: all .3s; }\n  .title-card:hover::after {\n    transform: scale(0.95); }\n  .title-card-group {\n    display: flex; }\n    .title-card-group > :not(:last-child) {\n      margin-right: 14px; }\n\n.user-panels {\n  display: flex;\n  flex-wrap: wrap; }\n  .user-panels > * {\n    flex-grow: 0;\n    flex-shrink: 0;\n    flex-basis: calc(100% / 4 - 3 / 4 * 14px);\n    margin-bottom: 14px; }\n    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n      .user-panels > * {\n        flex-basis: calc(100% / 4 - 1.3 * 14px); } }\n    .user-panels > *:not(:nth-child(4n)) {\n      margin-right: 14px; }\n  .user-panels__item {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 255px;\n    font-family: 'Open Sans';\n    font-weight: bold;\n    font-size: 24px;\n    position: relative;\n    border-radius: 5px;\n    overflow: hidden;\n    text-align: center; }\n    .user-panels__item span {\n      position: absolute;\n      color: #FFF; }\n    .user-panels__item:hover img {\n      transform: scale(0.95); }\n\n.home-header {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column; }\n\n.category-panels {\n  display: flex;\n  flex-wrap: wrap; }\n  .category-panels > * {\n    flex-grow: 0;\n    flex-shrink: 0;\n    flex-basis: calc(100% / 6 - 5 / 6 * 6px);\n    margin-bottom: 6px; }\n    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n      .category-panels > * {\n        flex-basis: calc(100% / 6 - 2.2 * 6px); } }\n    .category-panels > *:not(:nth-child(6n)) {\n      margin-right: 6px; }\n  .category-panels__item {\n    height: 215px;\n    font-size: 18px;\n    position: relative;\n    border-radius: 5px;\n    overflow: hidden; }\n    .category-panels__item__bg {\n      position: absolute;\n      left: 0;\n      top: 0;\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n      z-index: 0; }\n    .category-panels__item__content {\n      width: 100%;\n      height: 100%;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      background: rgba(0, 0, 0, 0.4);\n      position: relative;\n      z-index: 1;\n      font-weight: bold;\n      transition: all .3s; }\n      .category-panels__item__content span {\n        color: #FFF; }\n    .category-panels__item:hover .category-panels__item__content {\n      background: rgba(0, 0, 0, 0.2); }\n\n.product-grid {\n  display: flex;\n  flex-wrap: wrap; }\n  .product-grid > * {\n    flex-grow: 0;\n    flex-shrink: 0;\n    flex-basis: calc(100% / 4 - 3 / 4 * 14px);\n    margin-bottom: 14px; }\n    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n      .product-grid > * {\n        flex-basis: calc(100% / 4 - 1.3 * 14px); } }\n    .product-grid > *:not(:nth-child(4n)) {\n      margin-right: 14px; }\n  .product-grid__item {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 280px;\n    position: relative;\n    border-radius: 5px;\n    overflow: hidden;\n    /*        &:hover {\r\n            & img {\r\n                transform: scale(.95);\r\n            }\r\n        }*/ }\n\n.admin-header {\n  display: flex;\n  margin-bottom: 30px; }\n  .admin-header__title {\n    margin-right: 20px; }\n\n.ck-container {\n  padding: 0 15px; }\n\n.ck-nav {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: #FFF;\n  z-index: 100;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.02); }\n  .ck-nav-height {\n    height: 60px;\n    margin-bottom: 60px; }\n  .ck-nav__logo {\n    display: flex;\n    align-items: center; }\n  .ck-nav__links {\n    display: flex; }\n    .ck-nav__links > :not(:last-child) {\n      margin-right: 32px; }\n    .ck-nav__links__item {\n      display: flex;\n      align-items: center;\n      cursor: pointer; }\n      .ck-nav__links__item img {\n        margin-right: 6px;\n        filter: brightness(0.6) grayscale(1);\n        transition: all .3s; }\n      .ck-nav__links__item > span, .ck-nav__links__item > a {\n        transition: all .3s;\n        font-weight: bold; }\n      .ck-nav__links__item.active img, .ck-nav__links__item:hover img {\n        filter: brightness(1); }\n      .ck-nav__links__item.active > span, .ck-nav__links__item.active > a, .ck-nav__links__item:hover > span, .ck-nav__links__item:hover > a {\n        color: #EB9605; }\n\n.recipes-page {\n  display: flex;\n  flex-direction: column; }\n  .recipes-page__main {\n    display: flex;\n    justify-content: space-between; }\n  .recipes-page__sidebar {\n    width: 255px; }\n  .recipes-page__grid {\n    width: calc(100% - 285px); }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./scss/main.scss":
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./scss/main.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./ts/app/app.class.ts":
/*!*****************************!*\
  !*** ./ts/app/app.class.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const popup_controller_class_1 = __webpack_require__(/*! ./../components/popup-controller/popup-controller.class */ "./ts/components/popup-controller/popup-controller.class.ts");
const popup_class_1 = __webpack_require__(/*! ./../components/popup/popup.class */ "./ts/components/popup/popup.class.ts");
const favorite_heart_class_1 = __webpack_require__(/*! ./../components/favorite-heart/favorite-heart.class */ "./ts/components/favorite-heart/favorite-heart.class.ts");
class App {
    constructor() {
        this.init();
    }
    init() {
        this.setupPopups();
    }
    setupFavorites() {
        const hearts = document.querySelectorAll('.favorite-heart');
        hearts.forEach(heart => new favorite_heart_class_1.FavoriteHeart(heart, false));
    }
    setupPopups() {
        const popupArr = [];
        const searchPopupEl = document.getElementById('search-popup');
        if (searchPopupEl) {
            const searchPopup = new popup_class_1.Popup({
                popupElementId: 'search-popup',
                openersQuerySelector: '.open-search-popup',
                closersQuerySelector: '.close-search-popup'
            });
            popupArr.push(searchPopup);
        }
        const categoryPopupEl = document.getElementById('category-popup');
        if (categoryPopupEl) {
            const categoryPopup = new popup_class_1.Popup({
                popupElementId: 'category-popup',
                openersQuerySelector: '.open-category-popup',
                closersQuerySelector: '.close-category-popup'
            });
            popupArr.push(categoryPopup);
        }
        const ingredientPopupEl = document.getElementById('category-popup');
        if (ingredientPopupEl) {
            const ingredientPopup = new popup_class_1.Popup({
                popupElementId: 'ingredient-popup',
                openersQuerySelector: '.open-ingredient-popup',
                closersQuerySelector: '.close-ingredient-popup'
            });
            popupArr.push(ingredientPopup);
        }
        new popup_controller_class_1.PopupController(popupArr);
    }
}
exports.App = App;


/***/ }),

/***/ "./ts/components/favorite-heart/favorite-heart.class.ts":
/*!**************************************************************!*\
  !*** ./ts/components/favorite-heart/favorite-heart.class.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class FavoriteHeart {
    constructor(el, checked = false) {
        this.el = el;
        this.filled = checked;
        this.init();
    }
    init() {
        this.setupOnFill();
        this.setupOnEmpty();
    }
    setupOnFill() {
        this.el.addEventListener('click', () => {
            this.addToFavorites();
            this.fillHeart();
        });
    }
    setupOnEmpty() {
        this.el.addEventListener('click', () => {
            this.removeFromFavorites();
            this.emptyHeart();
        });
    }
    fillHeart() {
        this.el.classList.add('filled');
        this.el.style.opacity = '1';
    }
    emptyHeart() {
        this.el.classList.remove('filled');
    }
    addToFavorites() {
    }
    removeFromFavorites() {
    }
}
exports.FavoriteHeart = FavoriteHeart;


/***/ }),

/***/ "./ts/components/popup-controller/popup-controller.class.ts":
/*!******************************************************************!*\
  !*** ./ts/components/popup-controller/popup-controller.class.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class PopupController {
    constructor(popups) {
        this.popups = popups;
        this.init();
    }
    init() {
        this.watchPopups();
    }
    watchPopups() {
        this.popups.forEach(popup => {
            popup.beforeOpen = () => {
                this.closeOtherPopups(popup);
            };
        });
    }
    closeOtherPopups(currentPopup) {
        this.popups.forEach(popup => {
            if (popup !== currentPopup) {
                popup.close();
            }
        });
    }
}
exports.PopupController = PopupController;


/***/ }),

/***/ "./ts/components/popup/popup.class.ts":
/*!********************************************!*\
  !*** ./ts/components/popup/popup.class.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Popup {
    constructor(data) {
        this.popup = document.getElementById(data.popupElementId);
        this.openers = [...document.querySelectorAll(data.openersQuerySelector)];
        this.closers = [...document.querySelectorAll(data.closersQuerySelector)];
        this.init();
    }
    init() {
        this.setupOpeners();
        this.setupClosers();
    }
    setupOpeners() {
        this.openers.forEach(opener => {
            opener.addEventListener('click', () => {
                this.open();
            });
        });
    }
    setupClosers() {
        this.closers.forEach(closer => {
            closer.addEventListener('click', () => {
                this.close();
            });
        });
    }
    open() {
        this.beforeOpen();
        this.popup.classList.add('open');
    }
    close() {
        this.popup.classList.remove('open');
    }
}
exports.Popup = Popup;


/***/ }),

/***/ "./ts/index.ts":
/*!*********************!*\
  !*** ./ts/index.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const app_class_1 = __webpack_require__(/*! ./app/app.class */ "./ts/app/app.class.ts");
__webpack_require__(/*! ../scss/main.scss */ "./scss/main.scss");
new app_class_1.App();


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2Nzcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc2Nzcy9tYWluLnNjc3M/NGU1MyIsIndlYnBhY2s6Ly8vLi90cy9hcHAvYXBwLmNsYXNzLnRzIiwid2VicGFjazovLy8uL3RzL2NvbXBvbmVudHMvZmF2b3JpdGUtaGVhcnQvZmF2b3JpdGUtaGVhcnQuY2xhc3MudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvY29tcG9uZW50cy9wb3B1cC1jb250cm9sbGVyL3BvcHVwLWNvbnRyb2xsZXIuY2xhc3MudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvY29tcG9uZW50cy9wb3B1cC9wb3B1cC5jbGFzcy50cyIsIndlYnBhY2s6Ly8vLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FB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cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi90cy9pbmRleC50c1wiKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIqLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuXFxuaHRtbC5uby1zY3JvbGwge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxcblxcbiN3cGFkbWluYmFyIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG5ib2R5IHtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRUZCRUQ7IH1cXG4gIGJvZHkuZ3JleS1ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U3RURGMzsgfVxcbiAgQG1lZGlhIChob3Zlcjogbm9uZSkge1xcbiAgICBib2R5IHtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7IH0gfVxcblxcbmlucHV0IHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQ6IGluaGVyaXQ7IH1cXG4gIGlucHV0OmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTsgfVxcblxcbmJ1dHRvbiB7XFxuICBmb250OiBpbmhlcml0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cXG4gIGJ1dHRvbjpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7IH1cXG5cXG5odG1sIHtcXG4gIGZvbnQtc2l6ZTogNjIuNSU7IH1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmOyB9XFxuXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XFxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmOyB9XFxuXFxuLm9wZW4tc2FucyB7XFxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7IH1cXG5cXG4ubW9udHNlcnJhdCB7XFxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmOyB9XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogIzFGMjEyNzsgfVxcblxcbi50ZXh0LWRhbmdlciB7XFxuICBjb2xvcjogIzc3MkUyNTsgfVxcblxcbi5oMSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogNDhweDtcXG4gIGxpbmUtaGVpZ2h0OiA1OXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblxcbi5oMiB7XFxuICAvKkBpbmNsdWRlIGFmdGVyLXVuZGVyKCR0b3A6IDEwcHggKTsqL1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMzJweDtcXG4gIGNvbG9yOiAjRUI5NjA1O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGVmdDogMTVweDsgfVxcblxcbi5oMyB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGxpbmUtaGVpZ2h0OiAzM3B4OyB9XFxuXFxuLm1vYmlsZS1oMiB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGxpbmUtaGVpZ2h0OiAyMnB4OyB9XFxuXFxuLmFkbWluLWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xcbiAgcGFkZGluZzogMjRweCAzMnB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgbWF4LXdpZHRoOiA4MDBweDtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuICAuYWRtaW4tZm9ybV9fZ3JvdXAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XFxuICAgIC5hZG1pbi1mb3JtX19ncm91cDpub3QoOmxhc3QtY2hpbGQpIHtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAyNHB4OyB9XFxuICAgIC5hZG1pbi1mb3JtX19ncm91cCBsYWJlbCB7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4OyB9XFxuICAgIC5hZG1pbi1mb3JtX19ncm91cCBpbnB1dCB7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgaGVpZ2h0OiA0MHB4O1xcbiAgICAgIHBhZGRpbmc6IDAgMTVweDtcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjQjhDMkNDO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7IH1cXG4gICAgLmFkbWluLWZvcm1fX2dyb3VwIHNlbGVjdCB7XFxuICAgICAgaGVpZ2h0OiA0MHB4O1xcbiAgICAgIHBhZGRpbmc6IDAgMTVweDtcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjQjhDMkNDOyB9XFxuXFxuLmFkbWluLXBhbmVscyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwOyB9XFxuICAuYWRtaW4tcGFuZWxzID4gKiB7XFxuICAgIGZsZXgtZ3JvdzogMDtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxuICAgIGZsZXgtYmFzaXM6IGNhbGMoMTAwJSAvIDYgLSA1IC8gNiAqIDMycHgpO1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMnB4OyB9XFxuICAgIEBtZWRpYSBhbGwgYW5kICgtbXMtaGlnaC1jb250cmFzdDogbm9uZSksICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSB7XFxuICAgICAgLmFkbWluLXBhbmVscyA+ICoge1xcbiAgICAgICAgZmxleC1iYXNpczogY2FsYygxMDAlIC8gNiAtIDIuMiAqIDMycHgpOyB9IH1cXG4gICAgLmFkbWluLXBhbmVscyA+ICo6bm90KDpudGgtY2hpbGQoNm4pKSB7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiAzMnB4OyB9XFxuICAuYWRtaW4tcGFuZWxzX19pdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDI0MHB4KTtcXG4gICAgYmFja2dyb3VuZDogI0ZGRjtcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47IH1cXG4gICAgLmFkbWluLXBhbmVsc19faXRlbV9fYmcge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBsZWZ0OiAwO1xcbiAgICAgIHRvcDogMDtcXG4gICAgICBvcGFjaXR5OiAwO1xcbiAgICAgIHotaW5kZXg6IDA7XFxuICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuNik7XFxuICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcztcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgb2JqZWN0LWZpdDogY292ZXI7IH1cXG4gICAgLmFkbWluLXBhbmVsc19faXRlbSBzcGFuIHtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgei1pbmRleDogMTtcXG4gICAgICBjb2xvcjogIzFGMjEyNztcXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzOyB9XFxuICAgIC5hZG1pbi1wYW5lbHNfX2l0ZW06aG92ZXIgc3BhbiB7XFxuICAgICAgY29sb3I6ICNGRkY7IH1cXG4gICAgLmFkbWluLXBhbmVsc19faXRlbTpob3ZlciAuYWRtaW4tcGFuZWxzX19pdGVtX19iZyB7XFxuICAgICAgb3BhY2l0eTogMTsgfVxcblxcbi5hZG1pbi1idG4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTAwMTE7XFxuICBoZWlnaHQ6IDM2cHg7XFxuICBwYWRkaW5nOiAwIDE0cHg7XFxuICBjb2xvcjogI0ZGRjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHRyYW5zaXRpb246IGFsbCAuM3M7XFxuICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gIC5hZG1pbi1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3Mjc4OyB9XFxuICAuYWRtaW4tYnRuLWdyb3VwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcbiAgICAuYWRtaW4tYnRuLWdyb3VwID4gOm5vdCg6bGFzdC1jaGlsZCkge1xcbiAgICAgIG1hcmdpbi1yaWdodDogMjRweDsgfVxcblxcbi5jay1kcm9wZG93bi1tZW51IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IC0yMnB4O1xcbiAgdG9wOiBjYWxjKDEwMCUgKyAxNnB4KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCA1cHggNXB4O1xcbiAgcGFkZGluZzogMTRweCAyMnB4O1xcbiAgb3BhY2l0eTogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHRyYW5zaXRpb246IGFsbCAuM3M7XFxuICB6LWluZGV4OiAxMDA7XFxuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMDIpOyB9XFxuICAuY2stZHJvcGRvd24tbWVudS1jb24ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG4gICAgLmNrLWRyb3Bkb3duLW1lbnUtY29uOmhvdmVyIC5jay1kcm9wZG93bi1tZW51IHtcXG4gICAgICBvcGFjaXR5OiAxO1xcbiAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7IH1cXG4gIC5jay1kcm9wZG93bi1tZW51ID4gOm5vdCg6bGFzdC1jaGlsZCkge1xcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7IH1cXG4gIC5jay1kcm9wZG93bi1tZW51LnRvLXJpZ2h0IHtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGxlZnQ6IGluaXRpYWw7IH1cXG4gIC5jay1kcm9wZG93bi1tZW51X19saW5rIHtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zczsgfVxcbiAgICAuY2stZHJvcGRvd24tbWVudV9fbGluazpob3ZlciB7XFxuICAgICAgY29sb3I6ICNFQjk2MDU7IH1cXG5cXG4uZmF2b3JpdGUtaGVhcnQge1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcXG4gIHRvcDogMTVweDtcXG4gIHJpZ2h0OiAxNXB4OyB9XFxuICAuZmF2b3JpdGUtaGVhcnQgLmhlYXJ0LWZpbGxlZCB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgfVxcbiAgLmZhdm9yaXRlLWhlYXJ0IC5oZWFydC1lbXB0eSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgfVxcbiAgLmZhdm9yaXRlLWhlYXJ0LmZpbGxlZCAuaGVhcnQtZmlsbGVkIHtcXG4gICAgb3BhY2l0eTogMTsgfVxcbiAgLmZhdm9yaXRlLWhlYXJ0LmZpbGxlZCAuaGVhcnQtZW1wdHkge1xcbiAgICBvcGFjaXR5OiAwOyB9XFxuXFxuLmZpbHRlcnMtc2lkZWJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4OyB9XFxuICAuZmlsdGVycy1zaWRlYmFyID4gOm5vdCg6bGFzdC1jaGlsZCkge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4OyB9XFxuICAuZmlsdGVycy1zaWRlYmFyIGgzIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDsgfVxcbiAgLmZpbHRlcnMtc2lkZWJhcl9fZmllbGQtLXNlYXJjaCwgLmZpbHRlcnMtc2lkZWJhcl9fZmllbGQtLWNhdGVnb3JpZXMsIC5maWx0ZXJzLXNpZGViYXJfX2ZpZWxkLS1pbmdyZWRpZW50cyB7XFxuICAgIHBhZGRpbmc6IDEycHggOXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxN3B4OyB9XFxuICAuZmlsdGVycy1zaWRlYmFyX19maWVsZC0tY2F0ZWdvcmllcywgLmZpbHRlcnMtc2lkZWJhcl9fZmllbGQtLWluZ3JlZGllbnRzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAuZmlsdGVycy1zaWRlYmFyX19maWVsZC0tc2VhcmNoIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBjb2xvcjogIzNENDg1MjsgfVxcbiAgICAuZmlsdGVycy1zaWRlYmFyX19maWVsZC0tc2VhcmNoIGlucHV0IHtcXG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gMjZweCk7IH1cXG4gICAgLmZpbHRlcnMtc2lkZWJhcl9fZmllbGQtLXNlYXJjaCBidXR0b24ge1xcbiAgICAgIHdpZHRoOiAyMHB4OyB9XFxuICAuZmlsdGVycy1zaWRlYmFyX19maWVsZC0tY2F0ZWdvcmllcyB7XFxuICAgIGNvbG9yOiAjNzcyRTI1OyB9XFxuICAuZmlsdGVycy1zaWRlYmFyX19maWVsZC0taW5ncmVkaWVudHMge1xcbiAgICBjb2xvcjogIzI5NkVCNDsgfVxcblxcbi5wb3B1cCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nOiAzMnB4O1xcbiAgei1pbmRleDogMTAwMDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjM1LCAxNTAsIDUsIDAuOTUpO1xcbiAgb3BhY2l0eTogMDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgdHJhbnNpdGlvbjogYWxsIC4zczsgfVxcbiAgLnBvcHVwLm9wZW4ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBwb2ludGVyLWV2ZW50czogYWxsOyB9XFxuICAucG9wdXBfX2Nsb3NlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAzMnB4O1xcbiAgICByaWdodDogMzJweDtcXG4gICAgd2lkdGg6IDg0cHg7XFxuICAgIGhlaWdodDogODRweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAucG9wdXBfX2NvbnRlbnRfX3RpdGxlIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogI0ZGRjtcXG4gICAgbWFyZ2luLWJvdHRvbTogNDhweDsgfVxcbiAgLnBvcHVwX19jb250ZW50IC5zZWFyY2gtYmFyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDsgfVxcbiAgLnBvcHVwLnNlYXJjaC1wb3B1cCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XFxuICAgIC5wb3B1cC5zZWFyY2gtcG9wdXAgLnBvcHVwX19jb250ZW50IHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcbiAgICAgIC5wb3B1cC5zZWFyY2gtcG9wdXAgLnBvcHVwX19jb250ZW50IC50aXRsZS1jYXJkIHtcXG4gICAgICAgIHdpZHRoOiAzMjBweDtcXG4gICAgICAgIGhlaWdodDogMTcwcHg7IH1cXG5cXG4uc2VhcmNoLWJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDAgMjZweDtcXG4gIGhlaWdodDogNjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgd2lkdGg6IDU0MHB4O1xcbiAgbWF4LXdpZHRoOiAxMDAlOyB9XFxuICAuc2VhcmNoLWJhciBpbnB1dCB7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0NHB4KTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7IH1cXG4gICAgLnNlYXJjaC1iYXIgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gICAgICBjb2xvcjogIzYwNkY3QjsgfVxcbiAgLnNlYXJjaC1iYXIgaW1nIHtcXG4gICAgd2lkdGg6IDMycHg7IH1cXG5cXG4udGFibGUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItc3BhY2luZzogMDsgfVxcbiAgLnRhYmxlIHRoIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDsgfVxcbiAgLnRhYmxlIHRoLCAudGFibGUgdGQge1xcbiAgICBwYWRkaW5nOiA4cHggMTJweDsgfVxcbiAgLnRhYmxlIHRyOm50aC1jaGlsZChldmVuKSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGZhZmM7IH1cXG4gIC50YWJsZSB0cjpudGgtY2hpbGQob2RkKSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWYyZjY7IH1cXG5cXG4udGl0bGUtY2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMjRweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcbiAgLnRpdGxlLWNhcmQ6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgei1pbmRleDogLTE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zczsgfVxcbiAgLnRpdGxlLWNhcmQ6aG92ZXI6OmFmdGVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTsgfVxcbiAgLnRpdGxlLWNhcmQtZ3JvdXAge1xcbiAgICBkaXNwbGF5OiBmbGV4OyB9XFxuICAgIC50aXRsZS1jYXJkLWdyb3VwID4gOm5vdCg6bGFzdC1jaGlsZCkge1xcbiAgICAgIG1hcmdpbi1yaWdodDogMTRweDsgfVxcblxcbi51c2VyLXBhbmVscyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwOyB9XFxuICAudXNlci1wYW5lbHMgPiAqIHtcXG4gICAgZmxleC1ncm93OiAwO1xcbiAgICBmbGV4LXNocmluazogMDtcXG4gICAgZmxleC1iYXNpczogY2FsYygxMDAlIC8gNCAtIDMgLyA0ICogMTRweCk7XFxuICAgIG1hcmdpbi1ib3R0b206IDE0cHg7IH1cXG4gICAgQG1lZGlhIGFsbCBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBub25lKSwgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpIHtcXG4gICAgICAudXNlci1wYW5lbHMgPiAqIHtcXG4gICAgICAgIGZsZXgtYmFzaXM6IGNhbGMoMTAwJSAvIDQgLSAxLjMgKiAxNHB4KTsgfSB9XFxuICAgIC51c2VyLXBhbmVscyA+ICo6bm90KDpudGgtY2hpbGQoNG4pKSB7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiAxNHB4OyB9XFxuICAudXNlci1wYW5lbHNfX2l0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAyNTVweDtcXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuICAgIC51c2VyLXBhbmVsc19faXRlbSBzcGFuIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgY29sb3I6ICNGRkY7IH1cXG4gICAgLnVzZXItcGFuZWxzX19pdGVtOmhvdmVyIGltZyB7XFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTsgfVxcblxcbi5ob21lLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcblxcbi5jYXRlZ29yeS1wYW5lbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDsgfVxcbiAgLmNhdGVnb3J5LXBhbmVscyA+ICoge1xcbiAgICBmbGV4LWdyb3c6IDA7XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgICBmbGV4LWJhc2lzOiBjYWxjKDEwMCUgLyA2IC0gNSAvIDYgKiA2cHgpO1xcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7IH1cXG4gICAgQG1lZGlhIGFsbCBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBub25lKSwgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpIHtcXG4gICAgICAuY2F0ZWdvcnktcGFuZWxzID4gKiB7XFxuICAgICAgICBmbGV4LWJhc2lzOiBjYWxjKDEwMCUgLyA2IC0gMi4yICogNnB4KTsgfSB9XFxuICAgIC5jYXRlZ29yeS1wYW5lbHMgPiAqOm5vdCg6bnRoLWNoaWxkKDZuKSkge1xcbiAgICAgIG1hcmdpbi1yaWdodDogNnB4OyB9XFxuICAuY2F0ZWdvcnktcGFuZWxzX19pdGVtIHtcXG4gICAgaGVpZ2h0OiAyMTVweDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxcbiAgICAuY2F0ZWdvcnktcGFuZWxzX19pdGVtX19iZyB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGxlZnQ6IDA7XFxuICAgICAgdG9wOiAwO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgICB6LWluZGV4OiAwOyB9XFxuICAgIC5jYXRlZ29yeS1wYW5lbHNfX2l0ZW1fX2NvbnRlbnQge1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICB6LWluZGV4OiAxO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgIHRyYW5zaXRpb246IGFsbCAuM3M7IH1cXG4gICAgICAuY2F0ZWdvcnktcGFuZWxzX19pdGVtX19jb250ZW50IHNwYW4ge1xcbiAgICAgICAgY29sb3I6ICNGRkY7IH1cXG4gICAgLmNhdGVnb3J5LXBhbmVsc19faXRlbTpob3ZlciAuY2F0ZWdvcnktcGFuZWxzX19pdGVtX19jb250ZW50IHtcXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMik7IH1cXG5cXG4ucHJvZHVjdC1ncmlkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7IH1cXG4gIC5wcm9kdWN0LWdyaWQgPiAqIHtcXG4gICAgZmxleC1ncm93OiAwO1xcbiAgICBmbGV4LXNocmluazogMDtcXG4gICAgZmxleC1iYXNpczogY2FsYygxMDAlIC8gNCAtIDMgLyA0ICogMTRweCk7XFxuICAgIG1hcmdpbi1ib3R0b206IDE0cHg7IH1cXG4gICAgQG1lZGlhIGFsbCBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBub25lKSwgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpIHtcXG4gICAgICAucHJvZHVjdC1ncmlkID4gKiB7XFxuICAgICAgICBmbGV4LWJhc2lzOiBjYWxjKDEwMCUgLyA0IC0gMS4zICogMTRweCk7IH0gfVxcbiAgICAucHJvZHVjdC1ncmlkID4gKjpub3QoOm50aC1jaGlsZCg0bikpIHtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDE0cHg7IH1cXG4gIC5wcm9kdWN0LWdyaWRfX2l0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAyODBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIC8qICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICAmIGltZyB7XFxyXFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoLjk1KTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9Ki8gfVxcblxcbi5hZG1pbi1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7IH1cXG4gIC5hZG1pbi1oZWFkZXJfX3RpdGxlIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4OyB9XFxuXFxuLmNrLWNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAwIDE1cHg7IH1cXG5cXG4uY2stbmF2IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYmFja2dyb3VuZDogI0ZGRjtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4wMik7IH1cXG4gIC5jay1uYXYtaGVpZ2h0IHtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4OyB9XFxuICAuY2stbmF2X19sb2dvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcbiAgLmNrLW5hdl9fbGlua3Mge1xcbiAgICBkaXNwbGF5OiBmbGV4OyB9XFxuICAgIC5jay1uYXZfX2xpbmtzID4gOm5vdCg6bGFzdC1jaGlsZCkge1xcbiAgICAgIG1hcmdpbi1yaWdodDogMzJweDsgfVxcbiAgICAuY2stbmF2X19saW5rc19faXRlbSB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgICAgIC5jay1uYXZfX2xpbmtzX19pdGVtIGltZyB7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDZweDtcXG4gICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjYpIGdyYXlzY2FsZSgxKTtcXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuM3M7IH1cXG4gICAgICAuY2stbmF2X19saW5rc19faXRlbSA+IHNwYW4sIC5jay1uYXZfX2xpbmtzX19pdGVtID4gYSB7XFxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG4gICAgICAuY2stbmF2X19saW5rc19faXRlbS5hY3RpdmUgaW1nLCAuY2stbmF2X19saW5rc19faXRlbTpob3ZlciBpbWcge1xcbiAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDEpOyB9XFxuICAgICAgLmNrLW5hdl9fbGlua3NfX2l0ZW0uYWN0aXZlID4gc3BhbiwgLmNrLW5hdl9fbGlua3NfX2l0ZW0uYWN0aXZlID4gYSwgLmNrLW5hdl9fbGlua3NfX2l0ZW06aG92ZXIgPiBzcGFuLCAuY2stbmF2X19saW5rc19faXRlbTpob3ZlciA+IGEge1xcbiAgICAgICAgY29sb3I6ICNFQjk2MDU7IH1cXG5cXG4ucmVjaXBlcy1wYWdlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XFxuICAucmVjaXBlcy1wYWdlX19tYWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB9XFxuICAucmVjaXBlcy1wYWdlX19zaWRlYmFyIHtcXG4gICAgd2lkdGg6IDI1NXB4OyB9XFxuICAucmVjaXBlcy1wYWdlX19ncmlkIHtcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDI4NXB4KTsgfVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJpbXBvcnQgeyBQb3B1cENvbnRyb2xsZXIgfSBmcm9tICcuLy4uL2NvbXBvbmVudHMvcG9wdXAtY29udHJvbGxlci9wb3B1cC1jb250cm9sbGVyLmNsYXNzJztcclxuaW1wb3J0IHsgUG9wdXAgfSBmcm9tICcuLy4uL2NvbXBvbmVudHMvcG9wdXAvcG9wdXAuY2xhc3MnO1xyXG5pbXBvcnQgeyBGYXZvcml0ZUhlYXJ0IH0gZnJvbSAnLi8uLi9jb21wb25lbnRzL2Zhdm9yaXRlLWhlYXJ0L2Zhdm9yaXRlLWhlYXJ0LmNsYXNzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBcHB7XHJcbiAgY29uc3RydWN0b3IoKXtcclxuICAgIHRoaXMuaW5pdCgpO1xyXG4gIH0gXHJcblxyXG4gIGluaXQoKXtcclxuICAgIHRoaXMuc2V0dXBQb3B1cHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXR1cEZhdm9yaXRlcygpIHtcclxuICAgICAgICBjb25zdCBoZWFydHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmF2b3JpdGUtaGVhcnQnKTtcclxuICAgICAgICBoZWFydHMuZm9yRWFjaChoZWFydCA9PiBuZXcgRmF2b3JpdGVIZWFydChoZWFydCBhcyBIVE1MRWxlbWVudCwgZmFsc2UpKTtcclxuICAgIH1cclxuXHJcbiAgc2V0dXBQb3B1cHMoKXtcclxuICAgIGNvbnN0IHBvcHVwQXJyID0gW107XHJcblxyXG4gICAgLy9DaGVjayBpZiBwb3B1cCBleGlzdHNcclxuICAgIGNvbnN0IHNlYXJjaFBvcHVwRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLXBvcHVwJyk7XHJcbiAgICBpZihzZWFyY2hQb3B1cEVsKXtcclxuICAgICAgY29uc3Qgc2VhcmNoUG9wdXAgPSBuZXcgUG9wdXAoe1xyXG4gICAgICAgIHBvcHVwRWxlbWVudElkOiAnc2VhcmNoLXBvcHVwJyxcclxuICAgICAgICBvcGVuZXJzUXVlcnlTZWxlY3RvcjogJy5vcGVuLXNlYXJjaC1wb3B1cCcsXHJcbiAgICAgICAgY2xvc2Vyc1F1ZXJ5U2VsZWN0b3I6ICcuY2xvc2Utc2VhcmNoLXBvcHVwJ1xyXG4gICAgICB9KVxyXG5cclxuICAgICAgcG9wdXBBcnIucHVzaChzZWFyY2hQb3B1cCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2F0ZWdvcnlQb3B1cEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhdGVnb3J5LXBvcHVwJyk7XHJcbiAgICBpZihjYXRlZ29yeVBvcHVwRWwpe1xyXG4gICAgICBjb25zdCBjYXRlZ29yeVBvcHVwID0gbmV3IFBvcHVwKHtcclxuICAgICAgICBwb3B1cEVsZW1lbnRJZDogJ2NhdGVnb3J5LXBvcHVwJyxcclxuICAgICAgICBvcGVuZXJzUXVlcnlTZWxlY3RvcjogJy5vcGVuLWNhdGVnb3J5LXBvcHVwJyxcclxuICAgICAgICBjbG9zZXJzUXVlcnlTZWxlY3RvcjogJy5jbG9zZS1jYXRlZ29yeS1wb3B1cCdcclxuICAgICAgfSlcclxuXHJcbiAgICAgIHBvcHVwQXJyLnB1c2goY2F0ZWdvcnlQb3B1cCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW5ncmVkaWVudFBvcHVwRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2F0ZWdvcnktcG9wdXAnKTtcclxuICAgIGlmKGluZ3JlZGllbnRQb3B1cEVsKXtcclxuICAgICAgY29uc3QgaW5ncmVkaWVudFBvcHVwID0gbmV3IFBvcHVwKHtcclxuICAgICAgICBwb3B1cEVsZW1lbnRJZDogJ2luZ3JlZGllbnQtcG9wdXAnLFxyXG4gICAgICAgIG9wZW5lcnNRdWVyeVNlbGVjdG9yOiAnLm9wZW4taW5ncmVkaWVudC1wb3B1cCcsXHJcbiAgICAgICAgY2xvc2Vyc1F1ZXJ5U2VsZWN0b3I6ICcuY2xvc2UtaW5ncmVkaWVudC1wb3B1cCdcclxuICAgICAgfSlcclxuXHJcbiAgICAgIHBvcHVwQXJyLnB1c2goaW5ncmVkaWVudFBvcHVwKTtcclxuICAgIH1cclxuXHJcbiAgICBuZXcgUG9wdXBDb250cm9sbGVyKHBvcHVwQXJyKTtcclxuICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgRmF2b3JpdGVIZWFydHtcclxuICBlbDogSFRNTEVsZW1lbnQ7XHJcbiAgZmlsbGVkOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3RvcihlbDogSFRNTEVsZW1lbnQsIGNoZWNrZWQgPSBmYWxzZSkge1xyXG4gICAgICB0aGlzLmVsID0gZWw7XHJcbiAgICAgIHRoaXMuZmlsbGVkID0gY2hlY2tlZDtcclxuICAgICAgdGhpcy5pbml0KCk7XHJcbiAgfVxyXG5cclxuICBpbml0KCl7XHJcbiAgICB0aGlzLnNldHVwT25GaWxsKCk7XHJcbiAgICB0aGlzLnNldHVwT25FbXB0eSgpO1xyXG4gIH1cclxuXHJcbiAgc2V0dXBPbkZpbGwoKXtcclxuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuYWRkVG9GYXZvcml0ZXMoKTtcclxuICAgICAgdGhpcy5maWxsSGVhcnQoKTtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBzZXR1cE9uRW1wdHkoKXtcclxuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMucmVtb3ZlRnJvbUZhdm9yaXRlcygpO1xyXG4gICAgICB0aGlzLmVtcHR5SGVhcnQoKTtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBmaWxsSGVhcnQoKXtcclxuICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdmaWxsZWQnKTtcclxuICAgICAgdGhpcy5lbC5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG4gIH1cclxuXHJcbiAgZW1wdHlIZWFydCgpe1xyXG4gICAgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKCdmaWxsZWQnKTtcclxuICB9XHJcblxyXG4gIGFkZFRvRmF2b3JpdGVzKCl7XHJcblxyXG4gIH1cclxuXHJcbiAgcmVtb3ZlRnJvbUZhdm9yaXRlcygpe1xyXG5cclxuICB9XHJcbn0iLCJpbXBvcnQgeyBQb3B1cCB9IGZyb20gJy4uL3BvcHVwL3BvcHVwLmNsYXNzJztcclxuXHJcbi8qKlxyXG4gKiBXYXRjaGVzIHBvcHVwcyBhbmQsIHdoZW4gYSBwb3B1cCBvcGVucywgaXQgY2xvc2VzIHRoZSBvdGhlciB1bm5lY2Nlc3NhcnkgcG9wdXBzIHNvIHRoZXkgZG9uJ3Qgc3RhY2tcclxuICovXHJcbmV4cG9ydCBjbGFzcyBQb3B1cENvbnRyb2xsZXJ7XHJcbiAgcG9wdXBzOiBQb3B1cFtdO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwb3B1cHM6IFBvcHVwW10pe1xyXG4gICAgdGhpcy5wb3B1cHMgPSBwb3B1cHM7XHJcblxyXG4gICAgdGhpcy5pbml0KCk7XHJcbiAgfVxyXG5cclxuICBpbml0KCl7XHJcbiAgICB0aGlzLndhdGNoUG9wdXBzKCk7XHJcbiAgfVxyXG5cclxuICB3YXRjaFBvcHVwcygpe1xyXG4gICAgdGhpcy5wb3B1cHMuZm9yRWFjaChwb3B1cCA9PiB7XHJcbiAgICAgIHBvcHVwLmJlZm9yZU9wZW4gPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jbG9zZU90aGVyUG9wdXBzKHBvcHVwKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNsb3NlT3RoZXJQb3B1cHMoY3VycmVudFBvcHVwOiBQb3B1cCl7XHJcbiAgICB0aGlzLnBvcHVwcy5mb3JFYWNoKHBvcHVwID0+IHtcclxuICAgICAgaWYocG9wdXAgIT09IGN1cnJlbnRQb3B1cCl7XHJcbiAgICAgICAgcG9wdXAuY2xvc2UoKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbn0iLCJleHBvcnQgaW50ZXJmYWNlIElQb3B1cERhdGF7XHJcbiAgcG9wdXBFbGVtZW50SWQ6IHN0cmluZyxcclxuICBvcGVuZXJzUXVlcnlTZWxlY3Rvcjogc3RyaW5nLFxyXG4gIGNsb3NlcnNRdWVyeVNlbGVjdG9yOiBzdHJpbmcsXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQb3B1cHtcclxuICBwb3B1cDogSFRNTEVsZW1lbnQ7XHJcbiAgb3BlbmVyczogSFRNTEVsZW1lbnRbXTtcclxuICBjbG9zZXJzOiBIVE1MRWxlbWVudFtdO1xyXG4gIGJlZm9yZU9wZW46IEZ1bmN0aW9uO1xyXG5cclxuICBjb25zdHJ1Y3RvcihkYXRhOiBJUG9wdXBEYXRhKXtcclxuICAgIHRoaXMucG9wdXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkYXRhLnBvcHVwRWxlbWVudElkKTtcclxuICAgIHRoaXMub3BlbmVycyA9IFsuLi4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChkYXRhLm9wZW5lcnNRdWVyeVNlbGVjdG9yKSBhcyBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PiBdO1xyXG4gICAgdGhpcy5jbG9zZXJzID0gWy4uLiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGRhdGEuY2xvc2Vyc1F1ZXJ5U2VsZWN0b3IpIGFzIE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+IF07XHJcblxyXG4gICAgdGhpcy5pbml0KCk7XHJcbiAgfVxyXG5cclxuICBpbml0KCl7XHJcbiAgICB0aGlzLnNldHVwT3BlbmVycygpO1xyXG4gICAgdGhpcy5zZXR1cENsb3NlcnMoKTtcclxuICB9XHJcblxyXG4gIHNldHVwT3BlbmVycygpe1xyXG4gICAgdGhpcy5vcGVuZXJzLmZvckVhY2gob3BlbmVyID0+IHsgXHJcbiAgICAgIG9wZW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICB0aGlzLm9wZW4oKTtcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBzZXR1cENsb3NlcnMoKXtcclxuICAgIHRoaXMuY2xvc2Vycy5mb3JFYWNoKGNsb3NlciA9PiB7IFxyXG4gICAgICBjbG9zZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIG9wZW4oKXtcclxuICAgIHRoaXMuYmVmb3JlT3BlbigpO1xyXG4gICAgdGhpcy5wb3B1cC5jbGFzc0xpc3QuYWRkKCdvcGVuJyk7XHJcbiAgfVxyXG5cclxuICBjbG9zZSgpe1xyXG4gICAgdGhpcy5wb3B1cC5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgQXBwIH0gZnJvbSAnLi9hcHAvYXBwLmNsYXNzJztcclxuaW1wb3J0ICcuLi9zY3NzL21haW4uc2Nzcyc7XHJcblxyXG5uZXcgQXBwKCk7Il0sInNvdXJjZVJvb3QiOiIifQ==