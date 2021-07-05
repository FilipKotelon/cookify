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
exports.push([module.i, "*, *::before, *::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box; }\n\nhtml.no-scroll {\n  overflow: hidden; }\n\n#wpadminbar {\n  display: none; }\n\nbody {\n  overflow-x: hidden;\n  position: relative;\n  background-color: #FEFBED; }\n  body.grey-body {\n    background-color: #E7EDF3; }\n  @media (hover: none) {\n    body {\n      cursor: pointer; } }\n\ninput {\n  border: none;\n  font: inherit; }\n  input:focus {\n    outline: none; }\n\nbutton {\n  font: inherit;\n  cursor: pointer;\n  border: none;\n  background-color: transparent; }\n  button:focus {\n    outline: none; }\n\nhtml {\n  font-size: 62.5%; }\n\nbody {\n  font-size: 1.6rem;\n  font-family: 'Open Sans', sans-serif; }\n\nh1, h2, h3, h4, h5, h6 {\n  font-family: 'Montserrat', sans-serif; }\n\n.open-sans {\n  font-family: 'Open Sans', sans-serif; }\n\n.montserrat {\n  font-family: 'Montserrat', sans-serif; }\n\na {\n  text-decoration: none;\n  color: #1F2127; }\n\n.text-danger {\n  color: #772E25; }\n\n.h1 {\n  font-weight: bold;\n  font-size: 48px;\n  line-height: 59px;\n  margin-bottom: 60px;\n  text-align: center; }\n\n.h2 {\n  /*@include after-under($top: 10px );*/\n  font-weight: 700;\n  font-style: normal;\n  font-size: 32px;\n  color: #EB9605;\n  position: relative; }\n\n.h3 {\n  font-weight: bold;\n  font-size: 24px;\n  line-height: 33px; }\n\n.mobile-h2 {\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 22px; }\n\n.admin-form {\n  display: flex;\n  flex-direction: column;\n  background-color: #FFF;\n  padding: 24px 32px;\n  border-radius: 5px;\n  max-width: 800px;\n  width: 100%; }\n  .admin-form__group {\n    display: flex;\n    flex-direction: column; }\n    .admin-form__group:not(:last-child) {\n      margin-bottom: 24px; }\n    .admin-form__group label {\n      margin-bottom: 8px; }\n    .admin-form__group input {\n      width: 100%;\n      height: 40px;\n      padding: 0 15px;\n      border: 1px solid #B8C2CC;\n      background-color: #FFF; }\n    .admin-form__group select {\n      height: 40px;\n      padding: 0 15px;\n      border: 1px solid #B8C2CC; }\n\n.admin-panels {\n  display: flex;\n  flex-wrap: wrap; }\n  .admin-panels > * {\n    flex-grow: 0;\n    flex-shrink: 0;\n    flex-basis: calc(100% / 6 - 5 / 6 * 32px);\n    margin-bottom: 32px; }\n    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n      .admin-panels > * {\n        flex-basis: calc(100% / 6 - 2.2 * 32px); } }\n    .admin-panels > *:not(:nth-child(6n)) {\n      margin-right: 32px; }\n  .admin-panels__item {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: calc(100vh - 240px);\n    background: #FFF;\n    font-family: 'Montserrat';\n    font-weight: bold;\n    font-size: 28px;\n    position: relative;\n    border-radius: 5px;\n    overflow: hidden; }\n    .admin-panels__item__bg {\n      position: absolute;\n      left: 0;\n      top: 0;\n      opacity: 0;\n      z-index: 0;\n      filter: brightness(0.6);\n      transition: all .3s;\n      width: 100%;\n      height: 100%;\n      object-fit: cover; }\n    .admin-panels__item span {\n      position: relative;\n      z-index: 1;\n      color: #1F2127;\n      transition: all .3s; }\n    .admin-panels__item:hover span {\n      color: #FFF; }\n    .admin-panels__item:hover .admin-panels__item__bg {\n      opacity: 1; }\n\n.admin-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #110011;\n  height: 36px;\n  padding: 0 14px;\n  color: #FFF;\n  font-size: 14px;\n  border: none;\n  transition: all .3s;\n  cursor: pointer; }\n  .admin-btn:hover {\n    background-color: #197278; }\n  .admin-btn-group {\n    display: flex;\n    align-items: center; }\n    .admin-btn-group > :not(:last-child) {\n      margin-right: 24px; }\n\n.ck-dropdown-menu {\n  position: absolute;\n  left: -22px;\n  top: calc(100% + 16px);\n  display: flex;\n  flex-direction: column;\n  background-color: #FFF;\n  border-radius: 0 0 5px 5px;\n  padding: 14px 22px;\n  opacity: 0;\n  visibility: hidden;\n  transition: all .3s;\n  z-index: 100;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.02); }\n  .ck-dropdown-menu-con {\n    position: relative; }\n    .ck-dropdown-menu-con:hover .ck-dropdown-menu {\n      opacity: 1;\n      visibility: visible; }\n  .ck-dropdown-menu > :not(:last-child) {\n    margin-bottom: 8px; }\n  .ck-dropdown-menu.to-right {\n    right: 0;\n    left: initial; }\n  .ck-dropdown-menu__link {\n    white-space: nowrap;\n    transition: all .3s; }\n    .ck-dropdown-menu__link:hover {\n      color: #EB9605; }\n\n.filters-sidebar {\n  display: flex;\n  flex-direction: column;\n  background-color: #FFF;\n  padding: 15px;\n  border-radius: 5px; }\n  .filters-sidebar > :not(:last-child) {\n    margin-bottom: 12px; }\n  .filters-sidebar h3 {\n    margin-bottom: 12px; }\n  .filters-sidebar__field--search, .filters-sidebar__field--categories, .filters-sidebar__field--ingredients {\n    padding: 12px 9px;\n    border: 1px solid;\n    border-radius: 5px;\n    font-weight: 600;\n    font-size: 14px;\n    line-height: 17px; }\n  .filters-sidebar__field--categories, .filters-sidebar__field--ingredients {\n    display: flex;\n    flex-direction: column;\n    cursor: pointer; }\n  .filters-sidebar__field--search {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    color: #3D4852; }\n    .filters-sidebar__field--search input {\n      width: calc(100% - 26px); }\n    .filters-sidebar__field--search button {\n      width: 20px; }\n  .filters-sidebar__field--categories {\n    color: #772E25; }\n  .filters-sidebar__field--ingredients {\n    color: #296EB4; }\n\n.popup {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  padding: 32px;\n  z-index: 1000;\n  background: rgba(235, 150, 5, 0.95);\n  opacity: 0;\n  pointer-events: none;\n  transition: all .3s; }\n  .popup.open {\n    opacity: 1;\n    pointer-events: all; }\n  .popup__closer {\n    position: absolute;\n    top: 32px;\n    right: 32px;\n    width: 84px;\n    height: 84px;\n    cursor: pointer; }\n  .popup__content__title {\n    text-align: center;\n    color: #FFF;\n    margin-bottom: 48px; }\n  .popup__content .search-bar {\n    margin-bottom: 60px; }\n  .popup.search-popup {\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n    .popup.search-popup .popup__content {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      flex-direction: column; }\n      .popup.search-popup .popup__content .title-card {\n        width: 320px;\n        height: 170px; }\n\n.search-bar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 26px;\n  height: 60px;\n  background-color: #FFF;\n  border-radius: 30px;\n  width: 540px;\n  max-width: 100%; }\n  .search-bar input {\n    width: calc(100% - 44px);\n    font-weight: bold;\n    font-size: 18px;\n    line-height: 22px; }\n    .search-bar input::placeholder {\n      color: #606F7B; }\n  .search-bar img {\n    width: 32px; }\n\n.table {\n  width: 100%;\n  border-spacing: 0; }\n  .table th {\n    background-color: #FFF;\n    text-align: left; }\n  .table th, .table td {\n    padding: 8px 12px; }\n  .table tr:nth-child(even) {\n    background-color: #f8fafc; }\n  .table tr:nth-child(odd) {\n    background-color: #eef2f6; }\n\n.title-card {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 24px;\n  text-align: center;\n  cursor: pointer;\n  position: relative; }\n  .title-card::after {\n    content: \"\";\n    display: block;\n    position: absolute;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    z-index: -1;\n    background-color: #FFF;\n    border-radius: 5px;\n    transition: all .3s; }\n  .title-card:hover::after {\n    transform: scale(0.95); }\n  .title-card-group {\n    display: flex; }\n    .title-card-group > :not(:last-child) {\n      margin-right: 14px; }\n\n.user-panels {\n  display: flex;\n  flex-wrap: wrap; }\n  .user-panels > * {\n    flex-grow: 0;\n    flex-shrink: 0;\n    flex-basis: calc(100% / 4 - 3 / 4 * 14px);\n    margin-bottom: 14px; }\n    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n      .user-panels > * {\n        flex-basis: calc(100% / 4 - 1.3 * 14px); } }\n    .user-panels > *:not(:nth-child(4n)) {\n      margin-right: 14px; }\n  .user-panels__item {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 255px;\n    font-family: 'Open Sans';\n    font-weight: bold;\n    font-size: 24px;\n    position: relative;\n    border-radius: 5px;\n    overflow: hidden;\n    text-align: center; }\n    .user-panels__item span {\n      position: absolute;\n      color: #FFF; }\n    .user-panels__item:hover img {\n      transform: scale(0.95); }\n\n.home-header {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column; }\n\n.category-panels {\n  display: flex;\n  flex-wrap: wrap; }\n  .category-panels > * {\n    flex-grow: 0;\n    flex-shrink: 0;\n    flex-basis: calc(100% / 6 - 5 / 6 * 6px);\n    margin-bottom: 6px; }\n    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n      .category-panels > * {\n        flex-basis: calc(100% / 6 - 2.2 * 6px); } }\n    .category-panels > *:not(:nth-child(6n)) {\n      margin-right: 6px; }\n  .category-panels__item {\n    height: 215px;\n    font-size: 18px;\n    position: relative;\n    border-radius: 5px;\n    overflow: hidden; }\n    .category-panels__item__bg {\n      position: absolute;\n      left: 0;\n      top: 0;\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n      z-index: 0; }\n    .category-panels__item__content {\n      width: 100%;\n      height: 100%;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      background: rgba(0, 0, 0, 0.4);\n      position: relative;\n      z-index: 1;\n      font-weight: bold;\n      transition: all .3s; }\n      .category-panels__item__content span {\n        color: #FFF; }\n    .category-panels__item:hover .category-panels__item__content {\n      background: rgba(0, 0, 0, 0.2); }\n\n.product-grid {\n  display: flex;\n  flex-wrap: wrap; }\n  .product-grid > * {\n    flex-grow: 0;\n    flex-shrink: 0;\n    flex-basis: calc(100% / 4 - 3 / 4 * 14px);\n    margin-bottom: 14px; }\n    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n      .product-grid > * {\n        flex-basis: calc(100% / 4 - 1.3 * 14px); } }\n    .product-grid > *:not(:nth-child(4n)) {\n      margin-right: 14px; }\n  .product-grid__item {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 280px;\n    position: relative;\n    border-radius: 5px;\n    overflow: hidden; }\n    .product-grid__item:hover img {\n      transform: scale(0.95); }\n\n.admin-header {\n  display: flex;\n  margin-bottom: 30px; }\n  .admin-header__title {\n    margin-right: 20px; }\n\n.ck-container {\n  padding: 0 15px; }\n\n.ck-nav {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: #FFF;\n  z-index: 100;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.02); }\n  .ck-nav-height {\n    height: 60px;\n    margin-bottom: 60px; }\n  .ck-nav__logo {\n    display: flex;\n    align-items: center; }\n  .ck-nav__links {\n    display: flex; }\n    .ck-nav__links > :not(:last-child) {\n      margin-right: 32px; }\n    .ck-nav__links__item {\n      display: flex;\n      align-items: center;\n      cursor: pointer; }\n      .ck-nav__links__item img {\n        margin-right: 6px;\n        filter: brightness(0.6) grayscale(1);\n        transition: all .3s; }\n      .ck-nav__links__item > span, .ck-nav__links__item > a {\n        transition: all .3s;\n        font-weight: bold; }\n      .ck-nav__links__item.active img, .ck-nav__links__item:hover img {\n        filter: brightness(1); }\n      .ck-nav__links__item.active > span, .ck-nav__links__item.active > a, .ck-nav__links__item:hover > span, .ck-nav__links__item:hover > a {\n        color: #EB9605; }\n\n.recipes-page {\n  display: flex;\n  flex-direction: column; }\n  .recipes-page__main {\n    display: flex;\n    justify-content: space-between; }\n  .recipes-page__sidebar {\n    width: 255px; }\n  .recipes-page__grid {\n    width: calc(100% - 285px); }\n", ""]);
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
class App {
    constructor() {
        this.init();
    }
    init() {
        this.setupPopups();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2Nzcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc2Nzcy9tYWluLnNjc3M/NGU1MyIsIndlYnBhY2s6Ly8vLi90cy9hcHAvYXBwLmNsYXNzLnRzIiwid2VicGFjazovLy8uL3RzL2NvbXBvbmVudHMvcG9wdXAtY29udHJvbGxlci9wb3B1cC1jb250cm9sbGVyLmNsYXNzLnRzIiwid2VicGFjazovLy8uL3RzL2NvbXBvbmVudHMvcG9wdXAvcG9wdXAuY2xhc3MudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztR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QztJQUNKLENBQUM7SUFFRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDNUIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7Z0JBQ3BDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNmLENBQUMsQ0FBQztRQUNKLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCxJQUFJO1FBQ0YsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN0QyxDQUFDO0NBQ0Y7QUEzQ0Qsc0JBMkNDOzs7Ozs7Ozs7Ozs7Ozs7QUNqREQsd0ZBQXNDO0FBQ3RDLGlFQUEyQjtBQUUzQixJQUFJLGVBQUcsRUFBRSxDQUFDIiwiZmlsZSI6InNpdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3RzL2luZGV4LnRzXCIpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG5cXG5odG1sLm5vLXNjcm9sbCB7XFxuICBvdmVyZmxvdzogaGlkZGVuOyB9XFxuXFxuI3dwYWRtaW5iYXIge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbmJvZHkge1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZFRkJFRDsgfVxcbiAgYm9keS5ncmV5LWJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTdFREYzOyB9XFxuICBAbWVkaWEgKGhvdmVyOiBub25lKSB7XFxuICAgIGJvZHkge1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjsgfSB9XFxuXFxuaW5wdXQge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udDogaW5oZXJpdDsgfVxcbiAgaW5wdXQ6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lOyB9XFxuXFxuYnV0dG9uIHtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxcbiAgYnV0dG9uOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTsgfVxcblxcbmh0bWwge1xcbiAgZm9udC1zaXplOiA2Mi41JTsgfVxcblxcbmJvZHkge1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7IH1cXG5cXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7IH1cXG5cXG4ub3Blbi1zYW5zIHtcXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjsgfVxcblxcbi5tb250c2VycmF0IHtcXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7IH1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiAjMUYyMTI3OyB9XFxuXFxuLnRleHQtZGFuZ2VyIHtcXG4gIGNvbG9yOiAjNzcyRTI1OyB9XFxuXFxuLmgxIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiA0OHB4O1xcbiAgbGluZS1oZWlnaHQ6IDU5cHg7XFxuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLmgyIHtcXG4gIC8qQGluY2x1ZGUgYWZ0ZXItdW5kZXIoJHRvcDogMTBweCApOyovXFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC1zaXplOiAzMnB4O1xcbiAgY29sb3I6ICNFQjk2MDU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG5cXG4uaDMge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBsaW5lLWhlaWdodDogMzNweDsgfVxcblxcbi5tb2JpbGUtaDIge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBsaW5lLWhlaWdodDogMjJweDsgfVxcblxcbi5hZG1pbi1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcXG4gIHBhZGRpbmc6IDI0cHggMzJweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG1heC13aWR0aDogODAwcHg7XFxuICB3aWR0aDogMTAwJTsgfVxcbiAgLmFkbWluLWZvcm1fX2dyb3VwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcbiAgICAuYWRtaW4tZm9ybV9fZ3JvdXA6bm90KDpsYXN0LWNoaWxkKSB7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDsgfVxcbiAgICAuYWRtaW4tZm9ybV9fZ3JvdXAgbGFiZWwge1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDsgfVxcbiAgICAuYWRtaW4tZm9ybV9fZ3JvdXAgaW5wdXQge1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGhlaWdodDogNDBweDtcXG4gICAgICBwYWRkaW5nOiAwIDE1cHg7XFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI0I4QzJDQztcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGOyB9XFxuICAgIC5hZG1pbi1mb3JtX19ncm91cCBzZWxlY3Qge1xcbiAgICAgIGhlaWdodDogNDBweDtcXG4gICAgICBwYWRkaW5nOiAwIDE1cHg7XFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI0I4QzJDQzsgfVxcblxcbi5hZG1pbi1wYW5lbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDsgfVxcbiAgLmFkbWluLXBhbmVscyA+ICoge1xcbiAgICBmbGV4LWdyb3c6IDA7XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgICBmbGV4LWJhc2lzOiBjYWxjKDEwMCUgLyA2IC0gNSAvIDYgKiAzMnB4KTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMzJweDsgfVxcbiAgICBAbWVkaWEgYWxsIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpLCAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSkge1xcbiAgICAgIC5hZG1pbi1wYW5lbHMgPiAqIHtcXG4gICAgICAgIGZsZXgtYmFzaXM6IGNhbGMoMTAwJSAvIDYgLSAyLjIgKiAzMnB4KTsgfSB9XFxuICAgIC5hZG1pbi1wYW5lbHMgPiAqOm5vdCg6bnRoLWNoaWxkKDZuKSkge1xcbiAgICAgIG1hcmdpbi1yaWdodDogMzJweDsgfVxcbiAgLmFkbWluLXBhbmVsc19faXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyNDBweCk7XFxuICAgIGJhY2tncm91bmQ6ICNGRkY7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuOyB9XFxuICAgIC5hZG1pbi1wYW5lbHNfX2l0ZW1fX2JnIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgbGVmdDogMDtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgb3BhY2l0eTogMDtcXG4gICAgICB6LWluZGV4OiAwO1xcbiAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjYpO1xcbiAgICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyOyB9XFxuICAgIC5hZG1pbi1wYW5lbHNfX2l0ZW0gc3BhbiB7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIHotaW5kZXg6IDE7XFxuICAgICAgY29sb3I6ICMxRjIxMjc7XFxuICAgICAgdHJhbnNpdGlvbjogYWxsIC4zczsgfVxcbiAgICAuYWRtaW4tcGFuZWxzX19pdGVtOmhvdmVyIHNwYW4ge1xcbiAgICAgIGNvbG9yOiAjRkZGOyB9XFxuICAgIC5hZG1pbi1wYW5lbHNfX2l0ZW06aG92ZXIgLmFkbWluLXBhbmVsc19faXRlbV9fYmcge1xcbiAgICAgIG9wYWNpdHk6IDE7IH1cXG5cXG4uYWRtaW4tYnRuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTEwMDExO1xcbiAgaGVpZ2h0OiAzNnB4O1xcbiAgcGFkZGluZzogMCAxNHB4O1xcbiAgY29sb3I6ICNGRkY7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xcbiAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAuYWRtaW4tYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzI3ODsgfVxcbiAgLmFkbWluLWJ0bi1ncm91cCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG4gICAgLmFkbWluLWJ0bi1ncm91cCA+IDpub3QoOmxhc3QtY2hpbGQpIHtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDI0cHg7IH1cXG5cXG4uY2stZHJvcGRvd24tbWVudSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAtMjJweDtcXG4gIHRvcDogY2FsYygxMDAlICsgMTZweCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XFxuICBib3JkZXItcmFkaXVzOiAwIDAgNXB4IDVweDtcXG4gIHBhZGRpbmc6IDE0cHggMjJweDtcXG4gIG9wYWNpdHk6IDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xcbiAgei1pbmRleDogMTAwO1xcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjAyKTsgfVxcbiAgLmNrLWRyb3Bkb3duLW1lbnUtY29uIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuICAgIC5jay1kcm9wZG93bi1tZW51LWNvbjpob3ZlciAuY2stZHJvcGRvd24tbWVudSB7XFxuICAgICAgb3BhY2l0eTogMTtcXG4gICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlOyB9XFxuICAuY2stZHJvcGRvd24tbWVudSA+IDpub3QoOmxhc3QtY2hpbGQpIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4OyB9XFxuICAuY2stZHJvcGRvd24tbWVudS50by1yaWdodCB7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBsZWZ0OiBpbml0aWFsOyB9XFxuICAuY2stZHJvcGRvd24tbWVudV9fbGluayB7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIHRyYW5zaXRpb246IGFsbCAuM3M7IH1cXG4gICAgLmNrLWRyb3Bkb3duLW1lbnVfX2xpbms6aG92ZXIge1xcbiAgICAgIGNvbG9yOiAjRUI5NjA1OyB9XFxuXFxuLmZpbHRlcnMtc2lkZWJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4OyB9XFxuICAuZmlsdGVycy1zaWRlYmFyID4gOm5vdCg6bGFzdC1jaGlsZCkge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4OyB9XFxuICAuZmlsdGVycy1zaWRlYmFyIGgzIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDsgfVxcbiAgLmZpbHRlcnMtc2lkZWJhcl9fZmllbGQtLXNlYXJjaCwgLmZpbHRlcnMtc2lkZWJhcl9fZmllbGQtLWNhdGVnb3JpZXMsIC5maWx0ZXJzLXNpZGViYXJfX2ZpZWxkLS1pbmdyZWRpZW50cyB7XFxuICAgIHBhZGRpbmc6IDEycHggOXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxN3B4OyB9XFxuICAuZmlsdGVycy1zaWRlYmFyX19maWVsZC0tY2F0ZWdvcmllcywgLmZpbHRlcnMtc2lkZWJhcl9fZmllbGQtLWluZ3JlZGllbnRzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAuZmlsdGVycy1zaWRlYmFyX19maWVsZC0tc2VhcmNoIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBjb2xvcjogIzNENDg1MjsgfVxcbiAgICAuZmlsdGVycy1zaWRlYmFyX19maWVsZC0tc2VhcmNoIGlucHV0IHtcXG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gMjZweCk7IH1cXG4gICAgLmZpbHRlcnMtc2lkZWJhcl9fZmllbGQtLXNlYXJjaCBidXR0b24ge1xcbiAgICAgIHdpZHRoOiAyMHB4OyB9XFxuICAuZmlsdGVycy1zaWRlYmFyX19maWVsZC0tY2F0ZWdvcmllcyB7XFxuICAgIGNvbG9yOiAjNzcyRTI1OyB9XFxuICAuZmlsdGVycy1zaWRlYmFyX19maWVsZC0taW5ncmVkaWVudHMge1xcbiAgICBjb2xvcjogIzI5NkVCNDsgfVxcblxcbi5wb3B1cCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nOiAzMnB4O1xcbiAgei1pbmRleDogMTAwMDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjM1LCAxNTAsIDUsIDAuOTUpO1xcbiAgb3BhY2l0eTogMDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgdHJhbnNpdGlvbjogYWxsIC4zczsgfVxcbiAgLnBvcHVwLm9wZW4ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBwb2ludGVyLWV2ZW50czogYWxsOyB9XFxuICAucG9wdXBfX2Nsb3NlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAzMnB4O1xcbiAgICByaWdodDogMzJweDtcXG4gICAgd2lkdGg6IDg0cHg7XFxuICAgIGhlaWdodDogODRweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAucG9wdXBfX2NvbnRlbnRfX3RpdGxlIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogI0ZGRjtcXG4gICAgbWFyZ2luLWJvdHRvbTogNDhweDsgfVxcbiAgLnBvcHVwX19jb250ZW50IC5zZWFyY2gtYmFyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDsgfVxcbiAgLnBvcHVwLnNlYXJjaC1wb3B1cCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XFxuICAgIC5wb3B1cC5zZWFyY2gtcG9wdXAgLnBvcHVwX19jb250ZW50IHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcbiAgICAgIC5wb3B1cC5zZWFyY2gtcG9wdXAgLnBvcHVwX19jb250ZW50IC50aXRsZS1jYXJkIHtcXG4gICAgICAgIHdpZHRoOiAzMjBweDtcXG4gICAgICAgIGhlaWdodDogMTcwcHg7IH1cXG5cXG4uc2VhcmNoLWJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDAgMjZweDtcXG4gIGhlaWdodDogNjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgd2lkdGg6IDU0MHB4O1xcbiAgbWF4LXdpZHRoOiAxMDAlOyB9XFxuICAuc2VhcmNoLWJhciBpbnB1dCB7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0NHB4KTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7IH1cXG4gICAgLnNlYXJjaC1iYXIgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gICAgICBjb2xvcjogIzYwNkY3QjsgfVxcbiAgLnNlYXJjaC1iYXIgaW1nIHtcXG4gICAgd2lkdGg6IDMycHg7IH1cXG5cXG4udGFibGUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItc3BhY2luZzogMDsgfVxcbiAgLnRhYmxlIHRoIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDsgfVxcbiAgLnRhYmxlIHRoLCAudGFibGUgdGQge1xcbiAgICBwYWRkaW5nOiA4cHggMTJweDsgfVxcbiAgLnRhYmxlIHRyOm50aC1jaGlsZChldmVuKSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGZhZmM7IH1cXG4gIC50YWJsZSB0cjpudGgtY2hpbGQob2RkKSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWYyZjY7IH1cXG5cXG4udGl0bGUtY2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMjRweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcbiAgLnRpdGxlLWNhcmQ6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgei1pbmRleDogLTE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zczsgfVxcbiAgLnRpdGxlLWNhcmQ6aG92ZXI6OmFmdGVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTsgfVxcbiAgLnRpdGxlLWNhcmQtZ3JvdXAge1xcbiAgICBkaXNwbGF5OiBmbGV4OyB9XFxuICAgIC50aXRsZS1jYXJkLWdyb3VwID4gOm5vdCg6bGFzdC1jaGlsZCkge1xcbiAgICAgIG1hcmdpbi1yaWdodDogMTRweDsgfVxcblxcbi51c2VyLXBhbmVscyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwOyB9XFxuICAudXNlci1wYW5lbHMgPiAqIHtcXG4gICAgZmxleC1ncm93OiAwO1xcbiAgICBmbGV4LXNocmluazogMDtcXG4gICAgZmxleC1iYXNpczogY2FsYygxMDAlIC8gNCAtIDMgLyA0ICogMTRweCk7XFxuICAgIG1hcmdpbi1ib3R0b206IDE0cHg7IH1cXG4gICAgQG1lZGlhIGFsbCBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBub25lKSwgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpIHtcXG4gICAgICAudXNlci1wYW5lbHMgPiAqIHtcXG4gICAgICAgIGZsZXgtYmFzaXM6IGNhbGMoMTAwJSAvIDQgLSAxLjMgKiAxNHB4KTsgfSB9XFxuICAgIC51c2VyLXBhbmVscyA+ICo6bm90KDpudGgtY2hpbGQoNG4pKSB7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiAxNHB4OyB9XFxuICAudXNlci1wYW5lbHNfX2l0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAyNTVweDtcXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuICAgIC51c2VyLXBhbmVsc19faXRlbSBzcGFuIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgY29sb3I6ICNGRkY7IH1cXG4gICAgLnVzZXItcGFuZWxzX19pdGVtOmhvdmVyIGltZyB7XFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTsgfVxcblxcbi5ob21lLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcblxcbi5jYXRlZ29yeS1wYW5lbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDsgfVxcbiAgLmNhdGVnb3J5LXBhbmVscyA+ICoge1xcbiAgICBmbGV4LWdyb3c6IDA7XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgICBmbGV4LWJhc2lzOiBjYWxjKDEwMCUgLyA2IC0gNSAvIDYgKiA2cHgpO1xcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7IH1cXG4gICAgQG1lZGlhIGFsbCBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBub25lKSwgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpIHtcXG4gICAgICAuY2F0ZWdvcnktcGFuZWxzID4gKiB7XFxuICAgICAgICBmbGV4LWJhc2lzOiBjYWxjKDEwMCUgLyA2IC0gMi4yICogNnB4KTsgfSB9XFxuICAgIC5jYXRlZ29yeS1wYW5lbHMgPiAqOm5vdCg6bnRoLWNoaWxkKDZuKSkge1xcbiAgICAgIG1hcmdpbi1yaWdodDogNnB4OyB9XFxuICAuY2F0ZWdvcnktcGFuZWxzX19pdGVtIHtcXG4gICAgaGVpZ2h0OiAyMTVweDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxcbiAgICAuY2F0ZWdvcnktcGFuZWxzX19pdGVtX19iZyB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGxlZnQ6IDA7XFxuICAgICAgdG9wOiAwO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgICB6LWluZGV4OiAwOyB9XFxuICAgIC5jYXRlZ29yeS1wYW5lbHNfX2l0ZW1fX2NvbnRlbnQge1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICB6LWluZGV4OiAxO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgIHRyYW5zaXRpb246IGFsbCAuM3M7IH1cXG4gICAgICAuY2F0ZWdvcnktcGFuZWxzX19pdGVtX19jb250ZW50IHNwYW4ge1xcbiAgICAgICAgY29sb3I6ICNGRkY7IH1cXG4gICAgLmNhdGVnb3J5LXBhbmVsc19faXRlbTpob3ZlciAuY2F0ZWdvcnktcGFuZWxzX19pdGVtX19jb250ZW50IHtcXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMik7IH1cXG5cXG4ucHJvZHVjdC1ncmlkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7IH1cXG4gIC5wcm9kdWN0LWdyaWQgPiAqIHtcXG4gICAgZmxleC1ncm93OiAwO1xcbiAgICBmbGV4LXNocmluazogMDtcXG4gICAgZmxleC1iYXNpczogY2FsYygxMDAlIC8gNCAtIDMgLyA0ICogMTRweCk7XFxuICAgIG1hcmdpbi1ib3R0b206IDE0cHg7IH1cXG4gICAgQG1lZGlhIGFsbCBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBub25lKSwgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpIHtcXG4gICAgICAucHJvZHVjdC1ncmlkID4gKiB7XFxuICAgICAgICBmbGV4LWJhc2lzOiBjYWxjKDEwMCUgLyA0IC0gMS4zICogMTRweCk7IH0gfVxcbiAgICAucHJvZHVjdC1ncmlkID4gKjpub3QoOm50aC1jaGlsZCg0bikpIHtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDE0cHg7IH1cXG4gIC5wcm9kdWN0LWdyaWRfX2l0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAyODBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47IH1cXG4gICAgLnByb2R1Y3QtZ3JpZF9faXRlbTpob3ZlciBpbWcge1xcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7IH1cXG5cXG4uYWRtaW4taGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4OyB9XFxuICAuYWRtaW4taGVhZGVyX190aXRsZSB7XFxuICAgIG1hcmdpbi1yaWdodDogMjBweDsgfVxcblxcbi5jay1jb250YWluZXIge1xcbiAgcGFkZGluZzogMCAxNXB4OyB9XFxuXFxuLmNrLW5hdiB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGJhY2tncm91bmQ6ICNGRkY7XFxuICB6LWluZGV4OiAxMDA7XFxuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMDIpOyB9XFxuICAuY2stbmF2LWhlaWdodCB7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDsgfVxcbiAgLmNrLW5hdl9fbG9nbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG4gIC5jay1uYXZfX2xpbmtzIHtcXG4gICAgZGlzcGxheTogZmxleDsgfVxcbiAgICAuY2stbmF2X19saW5rcyA+IDpub3QoOmxhc3QtY2hpbGQpIHtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDMycHg7IH1cXG4gICAgLmNrLW5hdl9fbGlua3NfX2l0ZW0ge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gICAgICAuY2stbmF2X19saW5rc19faXRlbSBpbWcge1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA2cHg7XFxuICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC42KSBncmF5c2NhbGUoMSk7XFxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzOyB9XFxuICAgICAgLmNrLW5hdl9fbGlua3NfX2l0ZW0gPiBzcGFuLCAuY2stbmF2X19saW5rc19faXRlbSA+IGEge1xcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcztcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuICAgICAgLmNrLW5hdl9fbGlua3NfX2l0ZW0uYWN0aXZlIGltZywgLmNrLW5hdl9fbGlua3NfX2l0ZW06aG92ZXIgaW1nIHtcXG4gICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxKTsgfVxcbiAgICAgIC5jay1uYXZfX2xpbmtzX19pdGVtLmFjdGl2ZSA+IHNwYW4sIC5jay1uYXZfX2xpbmtzX19pdGVtLmFjdGl2ZSA+IGEsIC5jay1uYXZfX2xpbmtzX19pdGVtOmhvdmVyID4gc3BhbiwgLmNrLW5hdl9fbGlua3NfX2l0ZW06aG92ZXIgPiBhIHtcXG4gICAgICAgIGNvbG9yOiAjRUI5NjA1OyB9XFxuXFxuLnJlY2lwZXMtcGFnZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcbiAgLnJlY2lwZXMtcGFnZV9fbWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgfVxcbiAgLnJlY2lwZXMtcGFnZV9fc2lkZWJhciB7XFxuICAgIHdpZHRoOiAyNTVweDsgfVxcbiAgLnJlY2lwZXMtcGFnZV9fZ3JpZCB7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyODVweCk7IH1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiaW1wb3J0IHsgUG9wdXBDb250cm9sbGVyIH0gZnJvbSAnLi8uLi9jb21wb25lbnRzL3BvcHVwLWNvbnRyb2xsZXIvcG9wdXAtY29udHJvbGxlci5jbGFzcyc7XHJcbmltcG9ydCB7IFBvcHVwIH0gZnJvbSAnLi8uLi9jb21wb25lbnRzL3BvcHVwL3BvcHVwLmNsYXNzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBcHB7XHJcbiAgY29uc3RydWN0b3IoKXtcclxuICAgIHRoaXMuaW5pdCgpO1xyXG4gIH0gXHJcblxyXG4gIGluaXQoKXtcclxuICAgIHRoaXMuc2V0dXBQb3B1cHMoKTtcclxuICB9XHJcblxyXG4gIHNldHVwUG9wdXBzKCl7XHJcbiAgICBjb25zdCBwb3B1cEFyciA9IFtdO1xyXG5cclxuICAgIC8vQ2hlY2sgaWYgcG9wdXAgZXhpc3RzXHJcbiAgICBjb25zdCBzZWFyY2hQb3B1cEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1wb3B1cCcpO1xyXG4gICAgaWYoc2VhcmNoUG9wdXBFbCl7XHJcbiAgICAgIGNvbnN0IHNlYXJjaFBvcHVwID0gbmV3IFBvcHVwKHtcclxuICAgICAgICBwb3B1cEVsZW1lbnRJZDogJ3NlYXJjaC1wb3B1cCcsXHJcbiAgICAgICAgb3BlbmVyc1F1ZXJ5U2VsZWN0b3I6ICcub3Blbi1zZWFyY2gtcG9wdXAnLFxyXG4gICAgICAgIGNsb3NlcnNRdWVyeVNlbGVjdG9yOiAnLmNsb3NlLXNlYXJjaC1wb3B1cCdcclxuICAgICAgfSlcclxuXHJcbiAgICAgIHBvcHVwQXJyLnB1c2goc2VhcmNoUG9wdXApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNhdGVnb3J5UG9wdXBFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXRlZ29yeS1wb3B1cCcpO1xyXG4gICAgaWYoY2F0ZWdvcnlQb3B1cEVsKXtcclxuICAgICAgY29uc3QgY2F0ZWdvcnlQb3B1cCA9IG5ldyBQb3B1cCh7XHJcbiAgICAgICAgcG9wdXBFbGVtZW50SWQ6ICdjYXRlZ29yeS1wb3B1cCcsXHJcbiAgICAgICAgb3BlbmVyc1F1ZXJ5U2VsZWN0b3I6ICcub3Blbi1jYXRlZ29yeS1wb3B1cCcsXHJcbiAgICAgICAgY2xvc2Vyc1F1ZXJ5U2VsZWN0b3I6ICcuY2xvc2UtY2F0ZWdvcnktcG9wdXAnXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICBwb3B1cEFyci5wdXNoKGNhdGVnb3J5UG9wdXApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGluZ3JlZGllbnRQb3B1cEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhdGVnb3J5LXBvcHVwJyk7XHJcbiAgICBpZihpbmdyZWRpZW50UG9wdXBFbCl7XHJcbiAgICAgIGNvbnN0IGluZ3JlZGllbnRQb3B1cCA9IG5ldyBQb3B1cCh7XHJcbiAgICAgICAgcG9wdXBFbGVtZW50SWQ6ICdpbmdyZWRpZW50LXBvcHVwJyxcclxuICAgICAgICBvcGVuZXJzUXVlcnlTZWxlY3RvcjogJy5vcGVuLWluZ3JlZGllbnQtcG9wdXAnLFxyXG4gICAgICAgIGNsb3NlcnNRdWVyeVNlbGVjdG9yOiAnLmNsb3NlLWluZ3JlZGllbnQtcG9wdXAnXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICBwb3B1cEFyci5wdXNoKGluZ3JlZGllbnRQb3B1cCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmV3IFBvcHVwQ29udHJvbGxlcihwb3B1cEFycik7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgUG9wdXAgfSBmcm9tICcuLi9wb3B1cC9wb3B1cC5jbGFzcyc7XHJcblxyXG4vKipcclxuICogV2F0Y2hlcyBwb3B1cHMgYW5kLCB3aGVuIGEgcG9wdXAgb3BlbnMsIGl0IGNsb3NlcyB0aGUgb3RoZXIgdW5uZWNjZXNzYXJ5IHBvcHVwcyBzbyB0aGV5IGRvbid0IHN0YWNrXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUG9wdXBDb250cm9sbGVye1xyXG4gIHBvcHVwczogUG9wdXBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IocG9wdXBzOiBQb3B1cFtdKXtcclxuICAgIHRoaXMucG9wdXBzID0gcG9wdXBzO1xyXG5cclxuICAgIHRoaXMuaW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpe1xyXG4gICAgdGhpcy53YXRjaFBvcHVwcygpO1xyXG4gIH1cclxuXHJcbiAgd2F0Y2hQb3B1cHMoKXtcclxuICAgIHRoaXMucG9wdXBzLmZvckVhY2gocG9wdXAgPT4ge1xyXG4gICAgICBwb3B1cC5iZWZvcmVPcGVuID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuY2xvc2VPdGhlclBvcHVwcyhwb3B1cCk7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjbG9zZU90aGVyUG9wdXBzKGN1cnJlbnRQb3B1cDogUG9wdXApe1xyXG4gICAgdGhpcy5wb3B1cHMuZm9yRWFjaChwb3B1cCA9PiB7XHJcbiAgICAgIGlmKHBvcHVwICE9PSBjdXJyZW50UG9wdXApe1xyXG4gICAgICAgIHBvcHVwLmNsb3NlKCk7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG59IiwiZXhwb3J0IGludGVyZmFjZSBJUG9wdXBEYXRhe1xyXG4gIHBvcHVwRWxlbWVudElkOiBzdHJpbmcsXHJcbiAgb3BlbmVyc1F1ZXJ5U2VsZWN0b3I6IHN0cmluZyxcclxuICBjbG9zZXJzUXVlcnlTZWxlY3Rvcjogc3RyaW5nLFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUG9wdXB7XHJcbiAgcG9wdXA6IEhUTUxFbGVtZW50O1xyXG4gIG9wZW5lcnM6IEhUTUxFbGVtZW50W107XHJcbiAgY2xvc2VyczogSFRNTEVsZW1lbnRbXTtcclxuICBiZWZvcmVPcGVuOiBGdW5jdGlvbjtcclxuXHJcbiAgY29uc3RydWN0b3IoZGF0YTogSVBvcHVwRGF0YSl7XHJcbiAgICB0aGlzLnBvcHVwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGF0YS5wb3B1cEVsZW1lbnRJZCk7XHJcbiAgICB0aGlzLm9wZW5lcnMgPSBbLi4uIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZGF0YS5vcGVuZXJzUXVlcnlTZWxlY3RvcikgYXMgTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4gXTtcclxuICAgIHRoaXMuY2xvc2VycyA9IFsuLi4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChkYXRhLmNsb3NlcnNRdWVyeVNlbGVjdG9yKSBhcyBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PiBdO1xyXG5cclxuICAgIHRoaXMuaW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpe1xyXG4gICAgdGhpcy5zZXR1cE9wZW5lcnMoKTtcclxuICAgIHRoaXMuc2V0dXBDbG9zZXJzKCk7XHJcbiAgfVxyXG5cclxuICBzZXR1cE9wZW5lcnMoKXtcclxuICAgIHRoaXMub3BlbmVycy5mb3JFYWNoKG9wZW5lciA9PiB7IFxyXG4gICAgICBvcGVuZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5vcGVuKCk7XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgc2V0dXBDbG9zZXJzKCl7XHJcbiAgICB0aGlzLmNsb3NlcnMuZm9yRWFjaChjbG9zZXIgPT4geyBcclxuICAgICAgY2xvc2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBvcGVuKCl7XHJcbiAgICB0aGlzLmJlZm9yZU9wZW4oKTtcclxuICAgIHRoaXMucG9wdXAuY2xhc3NMaXN0LmFkZCgnb3BlbicpO1xyXG4gIH1cclxuXHJcbiAgY2xvc2UoKXtcclxuICAgIHRoaXMucG9wdXAuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xyXG4gIH1cclxufSIsImltcG9ydCB7IEFwcCB9IGZyb20gJy4vYXBwL2FwcC5jbGFzcyc7XHJcbmltcG9ydCAnLi4vc2Nzcy9tYWluLnNjc3MnO1xyXG5cclxubmV3IEFwcCgpOyJdLCJzb3VyY2VSb290IjoiIn0=