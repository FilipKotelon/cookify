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
exports.push([module.i, "*, *::before, *::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box; }\n\nhtml.no-scroll {\n  overflow: hidden; }\n\n#wpadminbar {\n  display: none; }\n\nbody {\n  overflow-x: hidden;\n  position: relative;\n  background-color: #FEFBED; }\n  body.grey-body {\n    background-color: #E7EDF3; }\n  @media (hover: none) {\n    body {\n      cursor: pointer; } }\n\ninput {\n  border: none;\n  font: inherit; }\n  input:focus {\n    outline: none; }\n\nbutton {\n  font: inherit;\n  cursor: pointer;\n  border: none;\n  background-color: transparent; }\n  button:focus {\n    outline: none; }\n\nhtml {\n  font-size: 62.5%; }\n\nbody {\n  font-size: 1.6rem;\n  font-family: 'Open Sans', sans-serif; }\n\nh1, h2, h3, h4, h5, h6 {\n  font-family: 'Montserrat', sans-serif; }\n\n.open-sans {\n  font-family: 'Open Sans', sans-serif; }\n\n.montserrat {\n  font-family: 'Montserrat', sans-serif; }\n\na {\n  text-decoration: none;\n  color: #1F2127; }\n\n.text-danger {\n  color: #772E25; }\n\n.h1 {\n  font-weight: bold;\n  font-size: 48px;\n  line-height: 59px;\n  margin-bottom: 60px;\n  text-align: center; }\n\n.h2 {\n  /*@include after-under($top: 10px );*/\n  font-weight: 700;\n  font-style: normal;\n  font-size: 32px;\n  color: #EB9605;\n  position: relative;\n  left: 15px; }\n\n.h3 {\n  font-weight: bold;\n  font-size: 24px;\n  line-height: 33px; }\n\n.mobile-h2 {\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 22px; }\n\n.text-orange {\n  color: #EB9605; }\n\n.admin-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #110011;\n  height: 36px;\n  padding: 0 14px;\n  color: #FFF;\n  font-size: 14px;\n  border: none;\n  transition: all .3s;\n  cursor: pointer; }\n  .admin-btn:hover {\n    background-color: #197278; }\n  .admin-btn-group {\n    display: flex;\n    align-items: center; }\n    .admin-btn-group > :not(:last-child) {\n      margin-right: 24px; }\n\n.ck-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #EB9605;\n  background-color: #FFF;\n  border-radius: 30px;\n  height: 42px;\n  padding: 10px 25px;\n  font-size: 16px;\n  font-weight: 600;\n  color: #EB9605;\n  transition: all .3s; }\n  .ck-btn:hover {\n    background-color: #EB9605;\n    color: #FFF; }\n\n.bordered-input {\n  background: #FFF;\n  border: 1px solid #3D4852;\n  border-radius: 5px;\n  width: 100%;\n  height: 60px;\n  padding: 0 12px; }\n\n.white-panel {\n  background: #FFF;\n  padding: 15px 23px; }\n\n.admin-form {\n  display: flex;\n  flex-direction: column;\n  background-color: #FFF;\n  padding: 24px 32px;\n  border-radius: 5px;\n  max-width: 800px;\n  width: 100%; }\n  .admin-form__group {\n    display: flex;\n    flex-direction: column; }\n    .admin-form__group:not(:last-child) {\n      margin-bottom: 24px; }\n    .admin-form__group label {\n      margin-bottom: 8px; }\n    .admin-form__group input {\n      width: 100%;\n      height: 40px;\n      padding: 0 15px;\n      border: 1px solid #B8C2CC;\n      background-color: #FFF; }\n    .admin-form__group select {\n      height: 40px;\n      padding: 0 15px;\n      border: 1px solid #B8C2CC; }\n\n.admin-panels {\n  display: flex;\n  flex-wrap: wrap; }\n  .admin-panels > * {\n    flex-grow: 0;\n    flex-shrink: 0;\n    flex-basis: calc(100% / 6 - 5 / 6 * 32px);\n    margin-bottom: 32px; }\n    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n      .admin-panels > * {\n        flex-basis: calc(100% / 6 - 2.2 * 32px); } }\n    .admin-panels > *:not(:nth-child(6n)) {\n      margin-right: 32px; }\n  .admin-panels__item {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: calc(100vh - 240px);\n    background: #FFF;\n    font-family: 'Montserrat';\n    font-weight: bold;\n    font-size: 28px;\n    position: relative;\n    border-radius: 5px;\n    overflow: hidden; }\n    .admin-panels__item__bg {\n      position: absolute;\n      left: 0;\n      top: 0;\n      opacity: 0;\n      z-index: 0;\n      filter: brightness(0.6);\n      transition: all .3s;\n      width: 100%;\n      height: 100%;\n      object-fit: cover; }\n    .admin-panels__item span {\n      position: relative;\n      z-index: 1;\n      color: #1F2127;\n      transition: all .3s; }\n    .admin-panels__item:hover span {\n      color: #FFF; }\n    .admin-panels__item:hover .admin-panels__item__bg {\n      opacity: 1; }\n\n.category-panels {\n  display: flex;\n  flex-wrap: wrap; }\n  .category-panels > * {\n    flex-grow: 0;\n    flex-shrink: 0;\n    flex-basis: calc(100% / 6 - 5 / 6 * 6px);\n    margin-bottom: 6px; }\n    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n      .category-panels > * {\n        flex-basis: calc(100% / 6 - 2.2 * 6px); } }\n    .category-panels > *:not(:nth-child(6n)) {\n      margin-right: 6px; }\n  .category-panels__item {\n    height: 215px;\n    font-size: 18px;\n    position: relative;\n    border-radius: 5px;\n    overflow: hidden; }\n    .category-panels__item__bg {\n      position: absolute;\n      left: 0;\n      top: 0;\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n      z-index: 0; }\n    .category-panels__item__content {\n      width: 100%;\n      height: 100%;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      background: rgba(0, 0, 0, 0.4);\n      position: relative;\n      z-index: 1;\n      font-weight: bold;\n      transition: all .3s; }\n      .category-panels__item__content span {\n        color: #FFF; }\n    .category-panels__item:hover .category-panels__item__content {\n      background: rgba(0, 0, 0, 0.2); }\n\n.ck-dropdown-menu {\n  position: absolute;\n  left: -22px;\n  top: calc(100% + 16px);\n  display: flex;\n  flex-direction: column;\n  background-color: #FFF;\n  border-radius: 0 0 5px 5px;\n  padding: 14px 22px;\n  opacity: 0;\n  visibility: hidden;\n  transition: all .3s;\n  z-index: 100;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.02); }\n  .ck-dropdown-menu-con {\n    position: relative; }\n    .ck-dropdown-menu-con:hover .ck-dropdown-menu {\n      opacity: 1;\n      visibility: visible; }\n  .ck-dropdown-menu > :not(:last-child) {\n    margin-bottom: 8px; }\n  .ck-dropdown-menu.to-right {\n    right: 0;\n    left: initial; }\n  .ck-dropdown-menu__link {\n    white-space: nowrap;\n    transition: all .3s; }\n    .ck-dropdown-menu__link:hover {\n      color: #EB9605; }\n\n.favorite-heart {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  background-color: #FFF;\n  top: 15px;\n  right: 15px; }\n  .favorite-heart .heart-filled {\n    opacity: 0;\n    transition: all .3s;\n    position: absolute; }\n  .favorite-heart .heart-empty {\n    opacity: 1;\n    transition: all .3s;\n    position: absolute; }\n  .favorite-heart.filled .heart-filled {\n    opacity: 1; }\n  .favorite-heart.filled .heart-empty {\n    opacity: 0; }\n\n.filters-sidebar {\n  display: flex;\n  flex-direction: column;\n  background-color: #FFF;\n  padding: 15px;\n  border-radius: 5px; }\n  .filters-sidebar > :not(:last-child) {\n    margin-bottom: 12px; }\n  .filters-sidebar h3 {\n    margin-bottom: 12px; }\n  .filters-sidebar__field--search, .filters-sidebar__field--categories, .filters-sidebar__field--ingredients {\n    padding: 12px 9px;\n    border: 1px solid;\n    border-radius: 5px;\n    font-weight: 600;\n    font-size: 14px;\n    line-height: 17px; }\n  .filters-sidebar__field--categories, .filters-sidebar__field--ingredients {\n    display: flex;\n    flex-direction: column;\n    cursor: pointer; }\n  .filters-sidebar__field--search {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    color: #3D4852; }\n    .filters-sidebar__field--search input {\n      width: calc(100% - 26px); }\n    .filters-sidebar__field--search button {\n      width: 20px; }\n  .filters-sidebar__field--categories {\n    color: #772E25; }\n  .filters-sidebar__field--ingredients {\n    color: #296EB4; }\n\n.ck-form {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  max-width: 640px;\n  padding: 20px 30px 32px;\n  margin: 0 auto; }\n  .ck-form__title, .ck-form__info {\n    margin-bottom: 36px; }\n  .ck-form__info {\n    font-weight: bold;\n    font-size: 18px;\n    line-height: 22px; }\n  .ck-form .bordered-input {\n    margin-bottom: 16px; }\n  .ck-form .ck-btn {\n    margin-top: 20px; }\n\n.home-header {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column; }\n\n.popup {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  padding: 32px;\n  z-index: 1000;\n  background: rgba(235, 150, 5, 0.95);\n  opacity: 0;\n  pointer-events: none;\n  transition: all .3s; }\n  .popup.open {\n    opacity: 1;\n    pointer-events: all; }\n  .popup__closer {\n    position: absolute;\n    top: 32px;\n    right: 32px;\n    width: 84px;\n    height: 84px;\n    cursor: pointer; }\n  .popup__content__title {\n    text-align: center;\n    color: #FFF;\n    margin-bottom: 48px; }\n  .popup__content .search-bar {\n    margin-bottom: 60px; }\n  .popup.search-popup {\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n    .popup.search-popup .popup__content {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      flex-direction: column; }\n      .popup.search-popup .popup__content .title-card {\n        width: 320px;\n        height: 170px; }\n\n.product-grid {\n  display: flex;\n  flex-wrap: wrap; }\n  .product-grid > * {\n    flex-grow: 0;\n    flex-shrink: 0;\n    flex-basis: calc(100% / 4 - 3 / 4 * 14px);\n    margin-bottom: 14px; }\n    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n      .product-grid > * {\n        flex-basis: calc(100% / 4 - 1.3 * 14px); } }\n    .product-grid > *:not(:nth-child(4n)) {\n      margin-right: 14px; }\n  .product-grid__item {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    position: relative;\n    border-radius: 5px;\n    overflow: hidden; }\n    .product-grid__item__desc {\n      height: 80px;\n      text-align: left;\n      margin-left: 13px; }\n    .product-grid__item__title {\n      font-size: 18px;\n      font-weight: bold;\n      margin-left: 13px; }\n    .product-grid__item__info {\n      margin-bottom: 40px;\n      font-size: 10px; }\n\n.search-bar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 26px;\n  height: 60px;\n  background-color: #FFF;\n  border-radius: 30px;\n  width: 540px;\n  max-width: 100%; }\n  .search-bar input {\n    width: calc(100% - 44px);\n    font-weight: bold;\n    font-size: 18px;\n    line-height: 22px; }\n    .search-bar input::placeholder {\n      color: #606F7B; }\n  .search-bar img {\n    width: 32px; }\n\n.table {\n  width: 100%;\n  border-spacing: 0; }\n  .table th {\n    background-color: #FFF;\n    text-align: left; }\n  .table th, .table td {\n    padding: 8px 12px; }\n  .table tr:nth-child(even) {\n    background-color: #f8fafc; }\n  .table tr:nth-child(odd) {\n    background-color: #eef2f6; }\n\n.title-card {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 24px;\n  text-align: center;\n  cursor: pointer;\n  position: relative; }\n  .title-card::after {\n    content: \"\";\n    display: block;\n    position: absolute;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    z-index: -1;\n    background-color: #FFF;\n    border-radius: 5px;\n    transition: all .3s; }\n  .title-card:hover::after {\n    transform: scale(0.95); }\n  .title-card-group {\n    display: flex; }\n    .title-card-group > :not(:last-child) {\n      margin-right: 14px; }\n\n.user-panels {\n  display: flex;\n  flex-wrap: wrap; }\n  .user-panels > * {\n    flex-grow: 0;\n    flex-shrink: 0;\n    flex-basis: calc(100% / 4 - 3 / 4 * 14px);\n    margin-bottom: 14px; }\n    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n      .user-panels > * {\n        flex-basis: calc(100% / 4 - 1.3 * 14px); } }\n    .user-panels > *:not(:nth-child(4n)) {\n      margin-right: 14px; }\n  .user-panels__item {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 255px;\n    font-family: 'Open Sans';\n    font-weight: bold;\n    font-size: 24px;\n    position: relative;\n    border-radius: 5px;\n    overflow: hidden;\n    text-align: center; }\n    .user-panels__item span {\n      position: absolute;\n      color: #FFF; }\n    .user-panels__item:hover img {\n      transform: scale(0.95); }\n\n.admin-header {\n  display: flex;\n  margin-bottom: 30px; }\n  .admin-header__title {\n    margin-right: 20px; }\n\n.ck-container {\n  padding: 0 15px; }\n\n.ck-nav {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: #FFF;\n  z-index: 100;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.02); }\n  .ck-nav-height {\n    height: 60px;\n    margin-bottom: 60px; }\n  .ck-nav__logo {\n    display: flex;\n    align-items: center; }\n  .ck-nav__links {\n    display: flex; }\n    .ck-nav__links > :not(:last-child) {\n      margin-right: 32px; }\n    .ck-nav__links__item {\n      display: flex;\n      align-items: center;\n      cursor: pointer; }\n      .ck-nav__links__item img {\n        margin-right: 6px;\n        filter: brightness(0.6) grayscale(1);\n        transition: all .3s; }\n      .ck-nav__links__item > span, .ck-nav__links__item > a {\n        transition: all .3s;\n        font-weight: bold; }\n      .ck-nav__links__item.active img, .ck-nav__links__item:hover img {\n        filter: brightness(1); }\n      .ck-nav__links__item.active > span, .ck-nav__links__item.active > a, .ck-nav__links__item:hover > span, .ck-nav__links__item:hover > a {\n        color: #EB9605; }\n\n.recipes-page {\n  display: flex;\n  flex-direction: column; }\n  .recipes-page__main {\n    display: flex;\n    justify-content: space-between; }\n  .recipes-page__sidebar {\n    width: 255px; }\n  .recipes-page__grid {\n    width: calc(100% - 285px); }\n", ""]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2Nzcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc2Nzcy9tYWluLnNjc3M/NGU1MyIsIndlYnBhY2s6Ly8vLi90cy9hcHAvYXBwLmNsYXNzLnRzIiwid2VicGFjazovLy8uL3RzL2NvbXBvbmVudHMvZmF2b3JpdGUtaGVhcnQvZmF2b3JpdGUtaGVhcnQuY2xhc3MudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvY29tcG9uZW50cy9wb3B1cC1jb250cm9sbGVyL3BvcHVwLWNvbnRyb2xsZXIuY2xhc3MudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvY29tcG9uZW50cy9wb3B1cC9wb3B1cC5jbGFzcy50cyIsIndlYnBhY2s6Ly8vLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FB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O1lBQzVCLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO2dCQUNwQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDZixDQUFDLENBQUM7UUFDSixDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQsSUFBSTtRQUNGLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELEtBQUs7UUFDSCxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEMsQ0FBQztDQUNGO0FBM0NELHNCQTJDQzs7Ozs7Ozs7Ozs7Ozs7O0FDakRELHdGQUFzQztBQUN0QyxpRUFBMkI7QUFFM0IsSUFBSSxlQUFHLEVBQUUsQ0FBQyIsImZpbGUiOiJzaXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi90cy9pbmRleC50c1wiKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIqLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuXFxuaHRtbC5uby1zY3JvbGwge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxcblxcbiN3cGFkbWluYmFyIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG5ib2R5IHtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRUZCRUQ7IH1cXG4gIGJvZHkuZ3JleS1ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U3RURGMzsgfVxcbiAgQG1lZGlhIChob3Zlcjogbm9uZSkge1xcbiAgICBib2R5IHtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7IH0gfVxcblxcbmlucHV0IHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQ6IGluaGVyaXQ7IH1cXG4gIGlucHV0OmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTsgfVxcblxcbmJ1dHRvbiB7XFxuICBmb250OiBpbmhlcml0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cXG4gIGJ1dHRvbjpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7IH1cXG5cXG5odG1sIHtcXG4gIGZvbnQtc2l6ZTogNjIuNSU7IH1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmOyB9XFxuXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XFxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmOyB9XFxuXFxuLm9wZW4tc2FucyB7XFxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7IH1cXG5cXG4ubW9udHNlcnJhdCB7XFxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmOyB9XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogIzFGMjEyNzsgfVxcblxcbi50ZXh0LWRhbmdlciB7XFxuICBjb2xvcjogIzc3MkUyNTsgfVxcblxcbi5oMSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogNDhweDtcXG4gIGxpbmUtaGVpZ2h0OiA1OXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblxcbi5oMiB7XFxuICAvKkBpbmNsdWRlIGFmdGVyLXVuZGVyKCR0b3A6IDEwcHggKTsqL1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMzJweDtcXG4gIGNvbG9yOiAjRUI5NjA1O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGVmdDogMTVweDsgfVxcblxcbi5oMyB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGxpbmUtaGVpZ2h0OiAzM3B4OyB9XFxuXFxuLm1vYmlsZS1oMiB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGxpbmUtaGVpZ2h0OiAyMnB4OyB9XFxuXFxuLnRleHQtb3JhbmdlIHtcXG4gIGNvbG9yOiAjRUI5NjA1OyB9XFxuXFxuLmFkbWluLWJ0biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExMDAxMTtcXG4gIGhlaWdodDogMzZweDtcXG4gIHBhZGRpbmc6IDAgMTRweDtcXG4gIGNvbG9yOiAjRkZGO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgdHJhbnNpdGlvbjogYWxsIC4zcztcXG4gIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgLmFkbWluLWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTcyNzg7IH1cXG4gIC5hZG1pbi1idG4tZ3JvdXAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuICAgIC5hZG1pbi1idG4tZ3JvdXAgPiA6bm90KDpsYXN0LWNoaWxkKSB7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiAyNHB4OyB9XFxuXFxuLmNrLWJ0biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI0VCOTYwNTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgaGVpZ2h0OiA0MnB4O1xcbiAgcGFkZGluZzogMTBweCAyNXB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGNvbG9yOiAjRUI5NjA1O1xcbiAgdHJhbnNpdGlvbjogYWxsIC4zczsgfVxcbiAgLmNrLWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFQjk2MDU7XFxuICAgIGNvbG9yOiAjRkZGOyB9XFxuXFxuLmJvcmRlcmVkLWlucHV0IHtcXG4gIGJhY2tncm91bmQ6ICNGRkY7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjM0Q0ODUyO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICBwYWRkaW5nOiAwIDEycHg7IH1cXG5cXG4ud2hpdGUtcGFuZWwge1xcbiAgYmFja2dyb3VuZDogI0ZGRjtcXG4gIHBhZGRpbmc6IDE1cHggMjNweDsgfVxcblxcbi5hZG1pbi1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcXG4gIHBhZGRpbmc6IDI0cHggMzJweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG1heC13aWR0aDogODAwcHg7XFxuICB3aWR0aDogMTAwJTsgfVxcbiAgLmFkbWluLWZvcm1fX2dyb3VwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcbiAgICAuYWRtaW4tZm9ybV9fZ3JvdXA6bm90KDpsYXN0LWNoaWxkKSB7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDsgfVxcbiAgICAuYWRtaW4tZm9ybV9fZ3JvdXAgbGFiZWwge1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDsgfVxcbiAgICAuYWRtaW4tZm9ybV9fZ3JvdXAgaW5wdXQge1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGhlaWdodDogNDBweDtcXG4gICAgICBwYWRkaW5nOiAwIDE1cHg7XFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI0I4QzJDQztcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGOyB9XFxuICAgIC5hZG1pbi1mb3JtX19ncm91cCBzZWxlY3Qge1xcbiAgICAgIGhlaWdodDogNDBweDtcXG4gICAgICBwYWRkaW5nOiAwIDE1cHg7XFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI0I4QzJDQzsgfVxcblxcbi5hZG1pbi1wYW5lbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDsgfVxcbiAgLmFkbWluLXBhbmVscyA+ICoge1xcbiAgICBmbGV4LWdyb3c6IDA7XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgICBmbGV4LWJhc2lzOiBjYWxjKDEwMCUgLyA2IC0gNSAvIDYgKiAzMnB4KTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMzJweDsgfVxcbiAgICBAbWVkaWEgYWxsIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpLCAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSkge1xcbiAgICAgIC5hZG1pbi1wYW5lbHMgPiAqIHtcXG4gICAgICAgIGZsZXgtYmFzaXM6IGNhbGMoMTAwJSAvIDYgLSAyLjIgKiAzMnB4KTsgfSB9XFxuICAgIC5hZG1pbi1wYW5lbHMgPiAqOm5vdCg6bnRoLWNoaWxkKDZuKSkge1xcbiAgICAgIG1hcmdpbi1yaWdodDogMzJweDsgfVxcbiAgLmFkbWluLXBhbmVsc19faXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyNDBweCk7XFxuICAgIGJhY2tncm91bmQ6ICNGRkY7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuOyB9XFxuICAgIC5hZG1pbi1wYW5lbHNfX2l0ZW1fX2JnIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgbGVmdDogMDtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgb3BhY2l0eTogMDtcXG4gICAgICB6LWluZGV4OiAwO1xcbiAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjYpO1xcbiAgICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyOyB9XFxuICAgIC5hZG1pbi1wYW5lbHNfX2l0ZW0gc3BhbiB7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIHotaW5kZXg6IDE7XFxuICAgICAgY29sb3I6ICMxRjIxMjc7XFxuICAgICAgdHJhbnNpdGlvbjogYWxsIC4zczsgfVxcbiAgICAuYWRtaW4tcGFuZWxzX19pdGVtOmhvdmVyIHNwYW4ge1xcbiAgICAgIGNvbG9yOiAjRkZGOyB9XFxuICAgIC5hZG1pbi1wYW5lbHNfX2l0ZW06aG92ZXIgLmFkbWluLXBhbmVsc19faXRlbV9fYmcge1xcbiAgICAgIG9wYWNpdHk6IDE7IH1cXG5cXG4uY2F0ZWdvcnktcGFuZWxzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7IH1cXG4gIC5jYXRlZ29yeS1wYW5lbHMgPiAqIHtcXG4gICAgZmxleC1ncm93OiAwO1xcbiAgICBmbGV4LXNocmluazogMDtcXG4gICAgZmxleC1iYXNpczogY2FsYygxMDAlIC8gNiAtIDUgLyA2ICogNnB4KTtcXG4gICAgbWFyZ2luLWJvdHRvbTogNnB4OyB9XFxuICAgIEBtZWRpYSBhbGwgYW5kICgtbXMtaGlnaC1jb250cmFzdDogbm9uZSksICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSB7XFxuICAgICAgLmNhdGVnb3J5LXBhbmVscyA+ICoge1xcbiAgICAgICAgZmxleC1iYXNpczogY2FsYygxMDAlIC8gNiAtIDIuMiAqIDZweCk7IH0gfVxcbiAgICAuY2F0ZWdvcnktcGFuZWxzID4gKjpub3QoOm50aC1jaGlsZCg2bikpIHtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDZweDsgfVxcbiAgLmNhdGVnb3J5LXBhbmVsc19faXRlbSB7XFxuICAgIGhlaWdodDogMjE1cHg7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47IH1cXG4gICAgLmNhdGVnb3J5LXBhbmVsc19faXRlbV9fYmcge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBsZWZ0OiAwO1xcbiAgICAgIHRvcDogMDtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgICAgei1pbmRleDogMDsgfVxcbiAgICAuY2F0ZWdvcnktcGFuZWxzX19pdGVtX19jb250ZW50IHtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgei1pbmRleDogMTtcXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzOyB9XFxuICAgICAgLmNhdGVnb3J5LXBhbmVsc19faXRlbV9fY29udGVudCBzcGFuIHtcXG4gICAgICAgIGNvbG9yOiAjRkZGOyB9XFxuICAgIC5jYXRlZ29yeS1wYW5lbHNfX2l0ZW06aG92ZXIgLmNhdGVnb3J5LXBhbmVsc19faXRlbV9fY29udGVudCB7XFxuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpOyB9XFxuXFxuLmNrLWRyb3Bkb3duLW1lbnUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogLTIycHg7XFxuICB0b3A6IGNhbGMoMTAwJSArIDE2cHgpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xcbiAgYm9yZGVyLXJhZGl1czogMCAwIDVweCA1cHg7XFxuICBwYWRkaW5nOiAxNHB4IDIycHg7XFxuICBvcGFjaXR5OiAwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgdHJhbnNpdGlvbjogYWxsIC4zcztcXG4gIHotaW5kZXg6IDEwMDtcXG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4wMik7IH1cXG4gIC5jay1kcm9wZG93bi1tZW51LWNvbiB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcbiAgICAuY2stZHJvcGRvd24tbWVudS1jb246aG92ZXIgLmNrLWRyb3Bkb3duLW1lbnUge1xcbiAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTsgfVxcbiAgLmNrLWRyb3Bkb3duLW1lbnUgPiA6bm90KDpsYXN0LWNoaWxkKSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDhweDsgfVxcbiAgLmNrLWRyb3Bkb3duLW1lbnUudG8tcmlnaHQge1xcbiAgICByaWdodDogMDtcXG4gICAgbGVmdDogaW5pdGlhbDsgfVxcbiAgLmNrLWRyb3Bkb3duLW1lbnVfX2xpbmsge1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzOyB9XFxuICAgIC5jay1kcm9wZG93bi1tZW51X19saW5rOmhvdmVyIHtcXG4gICAgICBjb2xvcjogI0VCOTYwNTsgfVxcblxcbi5mYXZvcml0ZS1oZWFydCB7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xcbiAgdG9wOiAxNXB4O1xcbiAgcmlnaHQ6IDE1cHg7IH1cXG4gIC5mYXZvcml0ZS1oZWFydCAuaGVhcnQtZmlsbGVkIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcztcXG4gICAgcG9zaXRpb246IGFic29sdXRlOyB9XFxuICAuZmF2b3JpdGUtaGVhcnQgLmhlYXJ0LWVtcHR5IHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcztcXG4gICAgcG9zaXRpb246IGFic29sdXRlOyB9XFxuICAuZmF2b3JpdGUtaGVhcnQuZmlsbGVkIC5oZWFydC1maWxsZWQge1xcbiAgICBvcGFjaXR5OiAxOyB9XFxuICAuZmF2b3JpdGUtaGVhcnQuZmlsbGVkIC5oZWFydC1lbXB0eSB7XFxuICAgIG9wYWNpdHk6IDA7IH1cXG5cXG4uZmlsdGVycy1zaWRlYmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7IH1cXG4gIC5maWx0ZXJzLXNpZGViYXIgPiA6bm90KDpsYXN0LWNoaWxkKSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7IH1cXG4gIC5maWx0ZXJzLXNpZGViYXIgaDMge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4OyB9XFxuICAuZmlsdGVycy1zaWRlYmFyX19maWVsZC0tc2VhcmNoLCAuZmlsdGVycy1zaWRlYmFyX19maWVsZC0tY2F0ZWdvcmllcywgLmZpbHRlcnMtc2lkZWJhcl9fZmllbGQtLWluZ3JlZGllbnRzIHtcXG4gICAgcGFkZGluZzogMTJweCA5cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgbGluZS1oZWlnaHQ6IDE3cHg7IH1cXG4gIC5maWx0ZXJzLXNpZGViYXJfX2ZpZWxkLS1jYXRlZ29yaWVzLCAuZmlsdGVycy1zaWRlYmFyX19maWVsZC0taW5ncmVkaWVudHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gIC5maWx0ZXJzLXNpZGViYXJfX2ZpZWxkLS1zZWFyY2gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGNvbG9yOiAjM0Q0ODUyOyB9XFxuICAgIC5maWx0ZXJzLXNpZGViYXJfX2ZpZWxkLS1zZWFyY2ggaW5wdXQge1xcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyNnB4KTsgfVxcbiAgICAuZmlsdGVycy1zaWRlYmFyX19maWVsZC0tc2VhcmNoIGJ1dHRvbiB7XFxuICAgICAgd2lkdGg6IDIwcHg7IH1cXG4gIC5maWx0ZXJzLXNpZGViYXJfX2ZpZWxkLS1jYXRlZ29yaWVzIHtcXG4gICAgY29sb3I6ICM3NzJFMjU7IH1cXG4gIC5maWx0ZXJzLXNpZGViYXJfX2ZpZWxkLS1pbmdyZWRpZW50cyB7XFxuICAgIGNvbG9yOiAjMjk2RUI0OyB9XFxuXFxuLmNrLWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWF4LXdpZHRoOiA2NDBweDtcXG4gIHBhZGRpbmc6IDIwcHggMzBweCAzMnB4O1xcbiAgbWFyZ2luOiAwIGF1dG87IH1cXG4gIC5jay1mb3JtX190aXRsZSwgLmNrLWZvcm1fX2luZm8ge1xcbiAgICBtYXJnaW4tYm90dG9tOiAzNnB4OyB9XFxuICAuY2stZm9ybV9faW5mbyB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4OyB9XFxuICAuY2stZm9ybSAuYm9yZGVyZWQtaW5wdXQge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4OyB9XFxuICAuY2stZm9ybSAuY2stYnRuIHtcXG4gICAgbWFyZ2luLXRvcDogMjBweDsgfVxcblxcbi5ob21lLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcblxcbi5wb3B1cCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nOiAzMnB4O1xcbiAgei1pbmRleDogMTAwMDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjM1LCAxNTAsIDUsIDAuOTUpO1xcbiAgb3BhY2l0eTogMDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgdHJhbnNpdGlvbjogYWxsIC4zczsgfVxcbiAgLnBvcHVwLm9wZW4ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBwb2ludGVyLWV2ZW50czogYWxsOyB9XFxuICAucG9wdXBfX2Nsb3NlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAzMnB4O1xcbiAgICByaWdodDogMzJweDtcXG4gICAgd2lkdGg6IDg0cHg7XFxuICAgIGhlaWdodDogODRweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAucG9wdXBfX2NvbnRlbnRfX3RpdGxlIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogI0ZGRjtcXG4gICAgbWFyZ2luLWJvdHRvbTogNDhweDsgfVxcbiAgLnBvcHVwX19jb250ZW50IC5zZWFyY2gtYmFyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDsgfVxcbiAgLnBvcHVwLnNlYXJjaC1wb3B1cCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XFxuICAgIC5wb3B1cC5zZWFyY2gtcG9wdXAgLnBvcHVwX19jb250ZW50IHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcbiAgICAgIC5wb3B1cC5zZWFyY2gtcG9wdXAgLnBvcHVwX19jb250ZW50IC50aXRsZS1jYXJkIHtcXG4gICAgICAgIHdpZHRoOiAzMjBweDtcXG4gICAgICAgIGhlaWdodDogMTcwcHg7IH1cXG5cXG4ucHJvZHVjdC1ncmlkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7IH1cXG4gIC5wcm9kdWN0LWdyaWQgPiAqIHtcXG4gICAgZmxleC1ncm93OiAwO1xcbiAgICBmbGV4LXNocmluazogMDtcXG4gICAgZmxleC1iYXNpczogY2FsYygxMDAlIC8gNCAtIDMgLyA0ICogMTRweCk7XFxuICAgIG1hcmdpbi1ib3R0b206IDE0cHg7IH1cXG4gICAgQG1lZGlhIGFsbCBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBub25lKSwgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpIHtcXG4gICAgICAucHJvZHVjdC1ncmlkID4gKiB7XFxuICAgICAgICBmbGV4LWJhc2lzOiBjYWxjKDEwMCUgLyA0IC0gMS4zICogMTRweCk7IH0gfVxcbiAgICAucHJvZHVjdC1ncmlkID4gKjpub3QoOm50aC1jaGlsZCg0bikpIHtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDE0cHg7IH1cXG4gIC5wcm9kdWN0LWdyaWRfX2l0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47IH1cXG4gICAgLnByb2R1Y3QtZ3JpZF9faXRlbV9fZGVzYyB7XFxuICAgICAgaGVpZ2h0OiA4MHB4O1xcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDEzcHg7IH1cXG4gICAgLnByb2R1Y3QtZ3JpZF9faXRlbV9fdGl0bGUge1xcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICBtYXJnaW4tbGVmdDogMTNweDsgfVxcbiAgICAucHJvZHVjdC1ncmlkX19pdGVtX19pbmZvIHtcXG4gICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcbiAgICAgIGZvbnQtc2l6ZTogMTBweDsgfVxcblxcbi5zZWFyY2gtYmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMCAyNnB4O1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICB3aWR0aDogNTQwcHg7XFxuICBtYXgtd2lkdGg6IDEwMCU7IH1cXG4gIC5zZWFyY2gtYmFyIGlucHV0IHtcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQ0cHgpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBsaW5lLWhlaWdodDogMjJweDsgfVxcbiAgICAuc2VhcmNoLWJhciBpbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgICAgIGNvbG9yOiAjNjA2RjdCOyB9XFxuICAuc2VhcmNoLWJhciBpbWcge1xcbiAgICB3aWR0aDogMzJweDsgfVxcblxcbi50YWJsZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwOyB9XFxuICAudGFibGUgdGgge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0OyB9XFxuICAudGFibGUgdGgsIC50YWJsZSB0ZCB7XFxuICAgIHBhZGRpbmc6IDhweCAxMnB4OyB9XFxuICAudGFibGUgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZmFmYzsgfVxcbiAgLnRhYmxlIHRyOm50aC1jaGlsZChvZGQpIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZjJmNjsgfVxcblxcbi50aXRsZS1jYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAyNHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuICAudGl0bGUtY2FyZDo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB6LWluZGV4OiAtMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzOyB9XFxuICAudGl0bGUtY2FyZDpob3Zlcjo6YWZ0ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpOyB9XFxuICAudGl0bGUtY2FyZC1ncm91cCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7IH1cXG4gICAgLnRpdGxlLWNhcmQtZ3JvdXAgPiA6bm90KDpsYXN0LWNoaWxkKSB7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiAxNHB4OyB9XFxuXFxuLnVzZXItcGFuZWxzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7IH1cXG4gIC51c2VyLXBhbmVscyA+ICoge1xcbiAgICBmbGV4LWdyb3c6IDA7XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgICBmbGV4LWJhc2lzOiBjYWxjKDEwMCUgLyA0IC0gMyAvIDQgKiAxNHB4KTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTRweDsgfVxcbiAgICBAbWVkaWEgYWxsIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpLCAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSkge1xcbiAgICAgIC51c2VyLXBhbmVscyA+ICoge1xcbiAgICAgICAgZmxleC1iYXNpczogY2FsYygxMDAlIC8gNCAtIDEuMyAqIDE0cHgpOyB9IH1cXG4gICAgLnVzZXItcGFuZWxzID4gKjpub3QoOm50aC1jaGlsZCg0bikpIHtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDE0cHg7IH1cXG4gIC51c2VyLXBhbmVsc19faXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDI1NXB4O1xcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG4gICAgLnVzZXItcGFuZWxzX19pdGVtIHNwYW4ge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBjb2xvcjogI0ZGRjsgfVxcbiAgICAudXNlci1wYW5lbHNfX2l0ZW06aG92ZXIgaW1nIHtcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpOyB9XFxuXFxuLmFkbWluLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDsgfVxcbiAgLmFkbWluLWhlYWRlcl9fdGl0bGUge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7IH1cXG5cXG4uY2stY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDAgMTVweDsgfVxcblxcbi5jay1uYXYge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBiYWNrZ3JvdW5kOiAjRkZGO1xcbiAgei1pbmRleDogMTAwO1xcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjAyKTsgfVxcbiAgLmNrLW5hdi1oZWlnaHQge1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7IH1cXG4gIC5jay1uYXZfX2xvZ28ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuICAuY2stbmF2X19saW5rcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7IH1cXG4gICAgLmNrLW5hdl9fbGlua3MgPiA6bm90KDpsYXN0LWNoaWxkKSB7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiAzMnB4OyB9XFxuICAgIC5jay1uYXZfX2xpbmtzX19pdGVtIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAgICAgLmNrLW5hdl9fbGlua3NfX2l0ZW0gaW1nIHtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogNnB4O1xcbiAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuNikgZ3JheXNjYWxlKDEpO1xcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4zczsgfVxcbiAgICAgIC5jay1uYXZfX2xpbmtzX19pdGVtID4gc3BhbiwgLmNrLW5hdl9fbGlua3NfX2l0ZW0gPiBhIHtcXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDsgfVxcbiAgICAgIC5jay1uYXZfX2xpbmtzX19pdGVtLmFjdGl2ZSBpbWcsIC5jay1uYXZfX2xpbmtzX19pdGVtOmhvdmVyIGltZyB7XFxuICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMSk7IH1cXG4gICAgICAuY2stbmF2X19saW5rc19faXRlbS5hY3RpdmUgPiBzcGFuLCAuY2stbmF2X19saW5rc19faXRlbS5hY3RpdmUgPiBhLCAuY2stbmF2X19saW5rc19faXRlbTpob3ZlciA+IHNwYW4sIC5jay1uYXZfX2xpbmtzX19pdGVtOmhvdmVyID4gYSB7XFxuICAgICAgICBjb2xvcjogI0VCOTYwNTsgfVxcblxcbi5yZWNpcGVzLXBhZ2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cXG4gIC5yZWNpcGVzLXBhZ2VfX21haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IH1cXG4gIC5yZWNpcGVzLXBhZ2VfX3NpZGViYXIge1xcbiAgICB3aWR0aDogMjU1cHg7IH1cXG4gIC5yZWNpcGVzLXBhZ2VfX2dyaWQge1xcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjg1cHgpOyB9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsImltcG9ydCB7IFBvcHVwQ29udHJvbGxlciB9IGZyb20gJy4vLi4vY29tcG9uZW50cy9wb3B1cC1jb250cm9sbGVyL3BvcHVwLWNvbnRyb2xsZXIuY2xhc3MnO1xyXG5pbXBvcnQgeyBQb3B1cCB9IGZyb20gJy4vLi4vY29tcG9uZW50cy9wb3B1cC9wb3B1cC5jbGFzcyc7XHJcbmltcG9ydCB7IEZhdm9yaXRlSGVhcnQgfSBmcm9tICcuLy4uL2NvbXBvbmVudHMvZmF2b3JpdGUtaGVhcnQvZmF2b3JpdGUtaGVhcnQuY2xhc3MnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFwcHtcclxuICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgdGhpcy5pbml0KCk7XHJcbiAgfSBcclxuXHJcbiAgaW5pdCgpe1xyXG4gICAgdGhpcy5zZXR1cFBvcHVwcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldHVwRmF2b3JpdGVzKCkge1xyXG4gICAgICAgIGNvbnN0IGhlYXJ0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mYXZvcml0ZS1oZWFydCcpO1xyXG4gICAgICAgIGhlYXJ0cy5mb3JFYWNoKGhlYXJ0ID0+IG5ldyBGYXZvcml0ZUhlYXJ0KGhlYXJ0IGFzIEhUTUxFbGVtZW50LCBmYWxzZSkpO1xyXG4gICAgfVxyXG5cclxuICBzZXR1cFBvcHVwcygpe1xyXG4gICAgY29uc3QgcG9wdXBBcnIgPSBbXTtcclxuXHJcbiAgICAvL0NoZWNrIGlmIHBvcHVwIGV4aXN0c1xyXG4gICAgY29uc3Qgc2VhcmNoUG9wdXBFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtcG9wdXAnKTtcclxuICAgIGlmKHNlYXJjaFBvcHVwRWwpe1xyXG4gICAgICBjb25zdCBzZWFyY2hQb3B1cCA9IG5ldyBQb3B1cCh7XHJcbiAgICAgICAgcG9wdXBFbGVtZW50SWQ6ICdzZWFyY2gtcG9wdXAnLFxyXG4gICAgICAgIG9wZW5lcnNRdWVyeVNlbGVjdG9yOiAnLm9wZW4tc2VhcmNoLXBvcHVwJyxcclxuICAgICAgICBjbG9zZXJzUXVlcnlTZWxlY3RvcjogJy5jbG9zZS1zZWFyY2gtcG9wdXAnXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICBwb3B1cEFyci5wdXNoKHNlYXJjaFBvcHVwKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjYXRlZ29yeVBvcHVwRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2F0ZWdvcnktcG9wdXAnKTtcclxuICAgIGlmKGNhdGVnb3J5UG9wdXBFbCl7XHJcbiAgICAgIGNvbnN0IGNhdGVnb3J5UG9wdXAgPSBuZXcgUG9wdXAoe1xyXG4gICAgICAgIHBvcHVwRWxlbWVudElkOiAnY2F0ZWdvcnktcG9wdXAnLFxyXG4gICAgICAgIG9wZW5lcnNRdWVyeVNlbGVjdG9yOiAnLm9wZW4tY2F0ZWdvcnktcG9wdXAnLFxyXG4gICAgICAgIGNsb3NlcnNRdWVyeVNlbGVjdG9yOiAnLmNsb3NlLWNhdGVnb3J5LXBvcHVwJ1xyXG4gICAgICB9KVxyXG5cclxuICAgICAgcG9wdXBBcnIucHVzaChjYXRlZ29yeVBvcHVwKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbmdyZWRpZW50UG9wdXBFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXRlZ29yeS1wb3B1cCcpO1xyXG4gICAgaWYoaW5ncmVkaWVudFBvcHVwRWwpe1xyXG4gICAgICBjb25zdCBpbmdyZWRpZW50UG9wdXAgPSBuZXcgUG9wdXAoe1xyXG4gICAgICAgIHBvcHVwRWxlbWVudElkOiAnaW5ncmVkaWVudC1wb3B1cCcsXHJcbiAgICAgICAgb3BlbmVyc1F1ZXJ5U2VsZWN0b3I6ICcub3Blbi1pbmdyZWRpZW50LXBvcHVwJyxcclxuICAgICAgICBjbG9zZXJzUXVlcnlTZWxlY3RvcjogJy5jbG9zZS1pbmdyZWRpZW50LXBvcHVwJ1xyXG4gICAgICB9KVxyXG5cclxuICAgICAgcG9wdXBBcnIucHVzaChpbmdyZWRpZW50UG9wdXApO1xyXG4gICAgfVxyXG5cclxuICAgIG5ldyBQb3B1cENvbnRyb2xsZXIocG9wdXBBcnIpO1xyXG4gIH1cclxufSIsImV4cG9ydCBjbGFzcyBGYXZvcml0ZUhlYXJ0e1xyXG4gIGVsOiBIVE1MRWxlbWVudDtcclxuICBmaWxsZWQ6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKGVsOiBIVE1MRWxlbWVudCwgY2hlY2tlZCA9IGZhbHNlKSB7XHJcbiAgICAgIHRoaXMuZWwgPSBlbDtcclxuICAgICAgdGhpcy5maWxsZWQgPSBjaGVja2VkO1xyXG4gICAgICB0aGlzLmluaXQoKTtcclxuICB9XHJcblxyXG4gIGluaXQoKXtcclxuICAgIHRoaXMuc2V0dXBPbkZpbGwoKTtcclxuICAgIHRoaXMuc2V0dXBPbkVtcHR5KCk7XHJcbiAgfVxyXG5cclxuICBzZXR1cE9uRmlsbCgpe1xyXG4gICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgdGhpcy5hZGRUb0Zhdm9yaXRlcygpO1xyXG4gICAgICB0aGlzLmZpbGxIZWFydCgpO1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHNldHVwT25FbXB0eSgpe1xyXG4gICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgdGhpcy5yZW1vdmVGcm9tRmF2b3JpdGVzKCk7XHJcbiAgICAgIHRoaXMuZW1wdHlIZWFydCgpO1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGZpbGxIZWFydCgpe1xyXG4gICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ2ZpbGxlZCcpO1xyXG4gICAgICB0aGlzLmVsLnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcbiAgfVxyXG5cclxuICBlbXB0eUhlYXJ0KCl7XHJcbiAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ2ZpbGxlZCcpO1xyXG4gIH1cclxuXHJcbiAgYWRkVG9GYXZvcml0ZXMoKXtcclxuXHJcbiAgfVxyXG5cclxuICByZW1vdmVGcm9tRmF2b3JpdGVzKCl7XHJcblxyXG4gIH1cclxufSIsImltcG9ydCB7IFBvcHVwIH0gZnJvbSAnLi4vcG9wdXAvcG9wdXAuY2xhc3MnO1xyXG5cclxuLyoqXHJcbiAqIFdhdGNoZXMgcG9wdXBzIGFuZCwgd2hlbiBhIHBvcHVwIG9wZW5zLCBpdCBjbG9zZXMgdGhlIG90aGVyIHVubmVjY2Vzc2FyeSBwb3B1cHMgc28gdGhleSBkb24ndCBzdGFja1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFBvcHVwQ29udHJvbGxlcntcclxuICBwb3B1cHM6IFBvcHVwW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKHBvcHVwczogUG9wdXBbXSl7XHJcbiAgICB0aGlzLnBvcHVwcyA9IHBvcHVwcztcclxuXHJcbiAgICB0aGlzLmluaXQoKTtcclxuICB9XHJcblxyXG4gIGluaXQoKXtcclxuICAgIHRoaXMud2F0Y2hQb3B1cHMoKTtcclxuICB9XHJcblxyXG4gIHdhdGNoUG9wdXBzKCl7XHJcbiAgICB0aGlzLnBvcHVwcy5mb3JFYWNoKHBvcHVwID0+IHtcclxuICAgICAgcG9wdXAuYmVmb3JlT3BlbiA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLmNsb3NlT3RoZXJQb3B1cHMocG9wdXApO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY2xvc2VPdGhlclBvcHVwcyhjdXJyZW50UG9wdXA6IFBvcHVwKXtcclxuICAgIHRoaXMucG9wdXBzLmZvckVhY2gocG9wdXAgPT4ge1xyXG4gICAgICBpZihwb3B1cCAhPT0gY3VycmVudFBvcHVwKXtcclxuICAgICAgICBwb3B1cC5jbG9zZSgpO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxufSIsImV4cG9ydCBpbnRlcmZhY2UgSVBvcHVwRGF0YXtcclxuICBwb3B1cEVsZW1lbnRJZDogc3RyaW5nLFxyXG4gIG9wZW5lcnNRdWVyeVNlbGVjdG9yOiBzdHJpbmcsXHJcbiAgY2xvc2Vyc1F1ZXJ5U2VsZWN0b3I6IHN0cmluZyxcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBvcHVwe1xyXG4gIHBvcHVwOiBIVE1MRWxlbWVudDtcclxuICBvcGVuZXJzOiBIVE1MRWxlbWVudFtdO1xyXG4gIGNsb3NlcnM6IEhUTUxFbGVtZW50W107XHJcbiAgYmVmb3JlT3BlbjogRnVuY3Rpb247XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRhdGE6IElQb3B1cERhdGEpe1xyXG4gICAgdGhpcy5wb3B1cCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRhdGEucG9wdXBFbGVtZW50SWQpO1xyXG4gICAgdGhpcy5vcGVuZXJzID0gWy4uLiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGRhdGEub3BlbmVyc1F1ZXJ5U2VsZWN0b3IpIGFzIE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+IF07XHJcbiAgICB0aGlzLmNsb3NlcnMgPSBbLi4uIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZGF0YS5jbG9zZXJzUXVlcnlTZWxlY3RvcikgYXMgTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4gXTtcclxuXHJcbiAgICB0aGlzLmluaXQoKTtcclxuICB9XHJcblxyXG4gIGluaXQoKXtcclxuICAgIHRoaXMuc2V0dXBPcGVuZXJzKCk7XHJcbiAgICB0aGlzLnNldHVwQ2xvc2VycygpO1xyXG4gIH1cclxuXHJcbiAgc2V0dXBPcGVuZXJzKCl7XHJcbiAgICB0aGlzLm9wZW5lcnMuZm9yRWFjaChvcGVuZXIgPT4geyBcclxuICAgICAgb3BlbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMub3BlbigpO1xyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHNldHVwQ2xvc2Vycygpe1xyXG4gICAgdGhpcy5jbG9zZXJzLmZvckVhY2goY2xvc2VyID0+IHsgXHJcbiAgICAgIGNsb3Nlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgb3Blbigpe1xyXG4gICAgdGhpcy5iZWZvcmVPcGVuKCk7XHJcbiAgICB0aGlzLnBvcHVwLmNsYXNzTGlzdC5hZGQoJ29wZW4nKTtcclxuICB9XHJcblxyXG4gIGNsb3NlKCl7XHJcbiAgICB0aGlzLnBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBBcHAgfSBmcm9tICcuL2FwcC9hcHAuY2xhc3MnO1xyXG5pbXBvcnQgJy4uL3Njc3MvbWFpbi5zY3NzJztcclxuXHJcbm5ldyBBcHAoKTsiXSwic291cmNlUm9vdCI6IiJ9