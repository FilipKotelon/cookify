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
exports.push([module.i, "*, *::before, *::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box; }\n\nhtml.no-scroll {\n  overflow: hidden; }\n\n#wpadminbar {\n  display: none; }\n\nbody {\n  overflow-x: hidden;\n  position: relative;\n  background-color: #FEFBED; }\n  body.grey-body {\n    background-color: #E7EDF3; }\n  @media (hover: none) {\n    body {\n      cursor: pointer; } }\n\ninput {\n  border: none; }\n  input:focus {\n    outline: none; }\n\nbutton {\n  cursor: pointer;\n  border: none;\n  background-color: transparent; }\n  button:focus {\n    outline: none; }\n\nhtml {\n  font-size: 62.5%; }\n\nbody {\n  font-size: 1.6rem;\n  font-family: 'Open Sans', sans-serif; }\n\nh1, h2, h3, h4, h5, h6 {\n  font-family: 'Montserrat', sans-serif; }\n\n.open-sans {\n  font-family: 'Open Sans', sans-serif; }\n\n.montserrat {\n  font-family: 'Montserrat', sans-serif; }\n\na {\n  text-decoration: none;\n  color: #1F2127; }\n\n.text-danger {\n  color: #772E25; }\n\n.h1 {\n  font-weight: bold;\n  font-size: 48px;\n  line-height: 59px; }\n\n.h2 {\n  /*@include after-under($top: 10px );*/\n  font-weight: 700;\n  font-style: normal;\n  font-size: 32px;\n  color: #EB9605;\n  position: relative; }\n\n.mobile-h2 {\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 22px; }\n\n.admin-form {\n  display: flex;\n  flex-direction: column;\n  background-color: #FFF;\n  padding: 24px 32px;\n  border-radius: 5px;\n  max-width: 800px;\n  width: 100%; }\n  .admin-form__group {\n    display: flex;\n    flex-direction: column; }\n    .admin-form__group:not(:last-child) {\n      margin-bottom: 24px; }\n    .admin-form__group label {\n      margin-bottom: 8px; }\n    .admin-form__group input {\n      width: 100%;\n      height: 40px;\n      padding: 0 15px;\n      border: 1px solid #B8C2CC;\n      background-color: #FFF; }\n    .admin-form__group select {\n      height: 40px;\n      padding: 0 15px;\n      border: 1px solid #B8C2CC; }\n\n.admin-panels {\n  display: flex;\n  flex-wrap: wrap; }\n  .admin-panels > * {\n    flex-grow: 0;\n    flex-shrink: 0;\n    flex-basis: calc(100% / 6 - 5 / 6 * 32px);\n    margin-bottom: 32px; }\n    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n      .admin-panels > * {\n        flex-basis: calc(100% / 6 - 2.2 * 32px); } }\n    .admin-panels > *:not(:nth-child(6n)) {\n      margin-right: 32px; }\n  .admin-panels__item {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: calc(100vh - 240px);\n    background: #FFF;\n    font-family: 'Montserrat';\n    font-weight: bold;\n    font-size: 28px;\n    position: relative;\n    border-radius: 5px;\n    overflow: hidden; }\n    .admin-panels__item__bg {\n      position: absolute;\n      left: 0;\n      top: 0;\n      opacity: 0;\n      z-index: 0;\n      filter: brightness(0.6);\n      transition: all .3s;\n      width: 100%;\n      height: 100%;\n      object-fit: cover; }\n    .admin-panels__item span {\n      position: relative;\n      z-index: 1;\n      color: #1F2127;\n      transition: all .3s; }\n    .admin-panels__item:hover span {\n      color: #FFF; }\n    .admin-panels__item:hover .admin-panels__item__bg {\n      opacity: 1; }\n\n.admin-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #110011;\n  height: 36px;\n  padding: 0 14px;\n  color: #FFF;\n  font-size: 14px;\n  border: none;\n  transition: all .3s;\n  cursor: pointer; }\n  .admin-btn:hover {\n    background-color: #197278; }\n  .admin-btn-group {\n    display: flex;\n    align-items: center; }\n    .admin-btn-group > :not(:last-child) {\n      margin-right: 24px; }\n\n.ck-dropdown-menu {\n  position: absolute;\n  left: -22px;\n  top: calc(100% + 16px);\n  display: flex;\n  flex-direction: column;\n  background-color: #FFF;\n  border-radius: 0 0 5px 5px;\n  padding: 14px 22px;\n  opacity: 0;\n  visibility: hidden;\n  transition: all .3s;\n  z-index: 100;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.02); }\n  .ck-dropdown-menu-con {\n    position: relative; }\n    .ck-dropdown-menu-con:hover .ck-dropdown-menu {\n      opacity: 1;\n      visibility: visible; }\n  .ck-dropdown-menu > :not(:last-child) {\n    margin-bottom: 8px; }\n  .ck-dropdown-menu.to-right {\n    right: 0;\n    left: initial; }\n  .ck-dropdown-menu__link {\n    white-space: nowrap;\n    transition: all .3s; }\n    .ck-dropdown-menu__link:hover {\n      color: #EB9605; }\n\n.popup {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  padding: 32px;\n  z-index: 1000;\n  background: rgba(235, 150, 5, 0.95);\n  opacity: 0;\n  pointer-events: none;\n  transition: all .3s; }\n  .popup.open {\n    opacity: 1;\n    pointer-events: all; }\n  .popup__closer {\n    position: absolute;\n    top: 32px;\n    right: 32px;\n    width: 84px;\n    height: 84px;\n    cursor: pointer; }\n  .popup__content__title {\n    text-align: center;\n    color: #FFF;\n    margin-bottom: 48px; }\n  .popup__content .search-bar {\n    margin-bottom: 60px; }\n  .popup.search-popup {\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n    .popup.search-popup .popup__content {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      flex-direction: column; }\n      .popup.search-popup .popup__content .title-card {\n        width: 320px;\n        height: 170px; }\n\n.search-bar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 26px;\n  height: 60px;\n  background-color: #FFF;\n  border-radius: 30px;\n  width: 540px;\n  max-width: 100%; }\n  .search-bar input {\n    width: calc(100% - 44px);\n    font-weight: bold;\n    font-size: 18px;\n    line-height: 22px; }\n    .search-bar input::placeholder {\n      color: #606F7B; }\n  .search-bar img {\n    width: 32px; }\n\n.table {\n  width: 100%;\n  border-spacing: 0; }\n  .table th {\n    background-color: #FFF;\n    text-align: left; }\n  .table th, .table td {\n    padding: 8px 12px; }\n  .table tr:nth-child(even) {\n    background-color: #f8fafc; }\n  .table tr:nth-child(odd) {\n    background-color: #eef2f6; }\n\n.title-card {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 24px;\n  text-align: center;\n  cursor: pointer;\n  position: relative; }\n  .title-card::after {\n    content: \"\";\n    display: block;\n    position: absolute;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    z-index: -1;\n    background-color: #FFF;\n    border-radius: 5px;\n    transition: all .3s; }\n  .title-card:hover::after {\n    transform: scale(0.95); }\n  .title-card-group {\n    display: flex; }\n    .title-card-group > :not(:last-child) {\n      margin-right: 14px; }\n\n.user-panels {\n  display: flex;\n  flex-wrap: wrap; }\n  .user-panels > * {\n    flex-grow: 0;\n    flex-shrink: 0;\n    flex-basis: calc(100% / 4 - 3 / 4 * 14px);\n    margin-bottom: 14px; }\n    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n      .user-panels > * {\n        flex-basis: calc(100% / 4 - 1.3 * 14px); } }\n    .user-panels > *:not(:nth-child(4n)) {\n      margin-right: 14px; }\n  .user-panels__item {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 255px;\n    font-family: 'Open Sans';\n    font-weight: bold;\n    font-size: 24px;\n    position: relative;\n    border-radius: 5px;\n    overflow: hidden;\n    text-align: center; }\n    .user-panels__item span {\n      position: absolute;\n      color: #FFF; }\n    .user-panels__item:hover img {\n      transform: scale(0.95); }\n\n.home-header {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column; }\n\n.category-panels {\n  display: flex;\n  flex-wrap: wrap; }\n  .category-panels > * {\n    flex-grow: 0;\n    flex-shrink: 0;\n    flex-basis: calc(100% / 6 - 5 / 6 * 6px);\n    margin-bottom: 6px; }\n    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n      .category-panels > * {\n        flex-basis: calc(100% / 6 - 2.2 * 6px); } }\n    .category-panels > *:not(:nth-child(6n)) {\n      margin-right: 6px; }\n  .category-panels__item {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 279px;\n    font-family: 'Montserrat';\n    font-weight: normal;\n    font-size: 18px;\n    position: relative; }\n    .category-panels__item span {\n      position: absolute;\n      color: #FFF; }\n    .category-panels__item:hover img {\n      transform: scale(0.95); }\n\n.product-grid {\n  display: flex;\n  flex-wrap: wrap; }\n  .product-grid > * {\n    flex-grow: 0;\n    flex-shrink: 0;\n    flex-basis: calc(100% / 4 - 3 / 4 * 14px);\n    margin-bottom: 14px; }\n    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n      .product-grid > * {\n        flex-basis: calc(100% / 4 - 1.3 * 14px); } }\n    .product-grid > *:not(:nth-child(4n)) {\n      margin-right: 14px; }\n  .product-grid__item {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 280px;\n    position: relative;\n    border-radius: 5px;\n    overflow: hidden; }\n    .product-grid__item:hover img {\n      transform: scale(0.95); }\n\n.admin-header {\n  display: flex;\n  margin-bottom: 30px; }\n  .admin-header__title {\n    margin-right: 20px; }\n\n.ck-container {\n  padding: 0 15px; }\n\n.ck-nav {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: #FFF;\n  z-index: 100;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.02); }\n  .ck-nav-height {\n    height: 60px;\n    margin-bottom: 60px; }\n  .ck-nav__logo {\n    display: flex;\n    align-items: center; }\n  .ck-nav__links {\n    display: flex; }\n    .ck-nav__links > :not(:last-child) {\n      margin-right: 32px; }\n    .ck-nav__links__item {\n      display: flex;\n      align-items: center;\n      cursor: pointer; }\n      .ck-nav__links__item img {\n        margin-right: 6px;\n        filter: brightness(0.6) grayscale(1);\n        transition: all .3s; }\n      .ck-nav__links__item > span, .ck-nav__links__item > a {\n        transition: all .3s;\n        font-weight: bold; }\n      .ck-nav__links__item.active img, .ck-nav__links__item:hover img {\n        filter: brightness(1); }\n      .ck-nav__links__item.active > span, .ck-nav__links__item.active > a, .ck-nav__links__item:hover > span, .ck-nav__links__item:hover > a {\n        color: #EB9605; }\n", ""]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2Nzcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc2Nzcy9tYWluLnNjc3M/NGU1MyIsIndlYnBhY2s6Ly8vLi90cy9hcHAvYXBwLmNsYXNzLnRzIiwid2VicGFjazovLy8uL3RzL2NvbXBvbmVudHMvcG9wdXAtY29udHJvbGxlci9wb3B1cC1jb250cm9sbGVyLmNsYXNzLnRzIiwid2VicGFjazovLy8uL3RzL2NvbXBvbmVudHMvcG9wdXAvcG9wdXAuY2xhc3MudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztR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QUFJLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQTRCLENBQUUsQ0FBQztRQUV0RyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDZCxDQUFDO0lBRUQsSUFBSTtRQUNGLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUM1QixNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtnQkFDcEMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2QsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUM1QixNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtnQkFDcEMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2YsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELElBQUk7UUFDRixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Q0FDRjtBQTNDRCxzQkEyQ0M7Ozs7Ozs7Ozs7Ozs7OztBQ2pERCx3RkFBc0M7QUFDdEMsaUVBQTJCO0FBRTNCLElBQUksZUFBRyxFQUFFLENBQUMiLCJmaWxlIjoic2l0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vdHMvaW5kZXgudHNcIik7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcblxcbmh0bWwubm8tc2Nyb2xsIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47IH1cXG5cXG4jd3BhZG1pbmJhciB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuYm9keSB7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkVGQkVEOyB9XFxuICBib2R5LmdyZXktYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFN0VERjM7IH1cXG4gIEBtZWRpYSAoaG92ZXI6IG5vbmUpIHtcXG4gICAgYm9keSB7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyOyB9IH1cXG5cXG5pbnB1dCB7XFxuICBib3JkZXI6IG5vbmU7IH1cXG4gIGlucHV0OmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTsgfVxcblxcbmJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxcbiAgYnV0dG9uOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTsgfVxcblxcbmh0bWwge1xcbiAgZm9udC1zaXplOiA2Mi41JTsgfVxcblxcbmJvZHkge1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7IH1cXG5cXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7IH1cXG5cXG4ub3Blbi1zYW5zIHtcXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjsgfVxcblxcbi5tb250c2VycmF0IHtcXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7IH1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiAjMUYyMTI3OyB9XFxuXFxuLnRleHQtZGFuZ2VyIHtcXG4gIGNvbG9yOiAjNzcyRTI1OyB9XFxuXFxuLmgxIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiA0OHB4O1xcbiAgbGluZS1oZWlnaHQ6IDU5cHg7IH1cXG5cXG4uaDIge1xcbiAgLypAaW5jbHVkZSBhZnRlci11bmRlcigkdG9wOiAxMHB4ICk7Ki9cXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXNpemU6IDMycHg7XFxuICBjb2xvcjogI0VCOTYwNTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcblxcbi5tb2JpbGUtaDIge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBsaW5lLWhlaWdodDogMjJweDsgfVxcblxcbi5hZG1pbi1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcXG4gIHBhZGRpbmc6IDI0cHggMzJweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG1heC13aWR0aDogODAwcHg7XFxuICB3aWR0aDogMTAwJTsgfVxcbiAgLmFkbWluLWZvcm1fX2dyb3VwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcbiAgICAuYWRtaW4tZm9ybV9fZ3JvdXA6bm90KDpsYXN0LWNoaWxkKSB7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDsgfVxcbiAgICAuYWRtaW4tZm9ybV9fZ3JvdXAgbGFiZWwge1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDsgfVxcbiAgICAuYWRtaW4tZm9ybV9fZ3JvdXAgaW5wdXQge1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGhlaWdodDogNDBweDtcXG4gICAgICBwYWRkaW5nOiAwIDE1cHg7XFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI0I4QzJDQztcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGOyB9XFxuICAgIC5hZG1pbi1mb3JtX19ncm91cCBzZWxlY3Qge1xcbiAgICAgIGhlaWdodDogNDBweDtcXG4gICAgICBwYWRkaW5nOiAwIDE1cHg7XFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI0I4QzJDQzsgfVxcblxcbi5hZG1pbi1wYW5lbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDsgfVxcbiAgLmFkbWluLXBhbmVscyA+ICoge1xcbiAgICBmbGV4LWdyb3c6IDA7XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgICBmbGV4LWJhc2lzOiBjYWxjKDEwMCUgLyA2IC0gNSAvIDYgKiAzMnB4KTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMzJweDsgfVxcbiAgICBAbWVkaWEgYWxsIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpLCAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSkge1xcbiAgICAgIC5hZG1pbi1wYW5lbHMgPiAqIHtcXG4gICAgICAgIGZsZXgtYmFzaXM6IGNhbGMoMTAwJSAvIDYgLSAyLjIgKiAzMnB4KTsgfSB9XFxuICAgIC5hZG1pbi1wYW5lbHMgPiAqOm5vdCg6bnRoLWNoaWxkKDZuKSkge1xcbiAgICAgIG1hcmdpbi1yaWdodDogMzJweDsgfVxcbiAgLmFkbWluLXBhbmVsc19faXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyNDBweCk7XFxuICAgIGJhY2tncm91bmQ6ICNGRkY7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuOyB9XFxuICAgIC5hZG1pbi1wYW5lbHNfX2l0ZW1fX2JnIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgbGVmdDogMDtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgb3BhY2l0eTogMDtcXG4gICAgICB6LWluZGV4OiAwO1xcbiAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjYpO1xcbiAgICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyOyB9XFxuICAgIC5hZG1pbi1wYW5lbHNfX2l0ZW0gc3BhbiB7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIHotaW5kZXg6IDE7XFxuICAgICAgY29sb3I6ICMxRjIxMjc7XFxuICAgICAgdHJhbnNpdGlvbjogYWxsIC4zczsgfVxcbiAgICAuYWRtaW4tcGFuZWxzX19pdGVtOmhvdmVyIHNwYW4ge1xcbiAgICAgIGNvbG9yOiAjRkZGOyB9XFxuICAgIC5hZG1pbi1wYW5lbHNfX2l0ZW06aG92ZXIgLmFkbWluLXBhbmVsc19faXRlbV9fYmcge1xcbiAgICAgIG9wYWNpdHk6IDE7IH1cXG5cXG4uYWRtaW4tYnRuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTEwMDExO1xcbiAgaGVpZ2h0OiAzNnB4O1xcbiAgcGFkZGluZzogMCAxNHB4O1xcbiAgY29sb3I6ICNGRkY7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xcbiAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAuYWRtaW4tYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzI3ODsgfVxcbiAgLmFkbWluLWJ0bi1ncm91cCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG4gICAgLmFkbWluLWJ0bi1ncm91cCA+IDpub3QoOmxhc3QtY2hpbGQpIHtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDI0cHg7IH1cXG5cXG4uY2stZHJvcGRvd24tbWVudSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAtMjJweDtcXG4gIHRvcDogY2FsYygxMDAlICsgMTZweCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XFxuICBib3JkZXItcmFkaXVzOiAwIDAgNXB4IDVweDtcXG4gIHBhZGRpbmc6IDE0cHggMjJweDtcXG4gIG9wYWNpdHk6IDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xcbiAgei1pbmRleDogMTAwO1xcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjAyKTsgfVxcbiAgLmNrLWRyb3Bkb3duLW1lbnUtY29uIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuICAgIC5jay1kcm9wZG93bi1tZW51LWNvbjpob3ZlciAuY2stZHJvcGRvd24tbWVudSB7XFxuICAgICAgb3BhY2l0eTogMTtcXG4gICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlOyB9XFxuICAuY2stZHJvcGRvd24tbWVudSA+IDpub3QoOmxhc3QtY2hpbGQpIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4OyB9XFxuICAuY2stZHJvcGRvd24tbWVudS50by1yaWdodCB7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBsZWZ0OiBpbml0aWFsOyB9XFxuICAuY2stZHJvcGRvd24tbWVudV9fbGluayB7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIHRyYW5zaXRpb246IGFsbCAuM3M7IH1cXG4gICAgLmNrLWRyb3Bkb3duLW1lbnVfX2xpbms6aG92ZXIge1xcbiAgICAgIGNvbG9yOiAjRUI5NjA1OyB9XFxuXFxuLnBvcHVwIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDMycHg7XFxuICB6LWluZGV4OiAxMDAwO1xcbiAgYmFja2dyb3VuZDogcmdiYSgyMzUsIDE1MCwgNSwgMC45NSk7XFxuICBvcGFjaXR5OiAwO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB0cmFuc2l0aW9uOiBhbGwgLjNzOyB9XFxuICAucG9wdXAub3BlbiB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7IH1cXG4gIC5wb3B1cF9fY2xvc2VyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDMycHg7XFxuICAgIHJpZ2h0OiAzMnB4O1xcbiAgICB3aWR0aDogODRweDtcXG4gICAgaGVpZ2h0OiA4NHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gIC5wb3B1cF9fY29udGVudF9fdGl0bGUge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjRkZGO1xcbiAgICBtYXJnaW4tYm90dG9tOiA0OHB4OyB9XFxuICAucG9wdXBfX2NvbnRlbnQgLnNlYXJjaC1iYXIge1xcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4OyB9XFxuICAucG9wdXAuc2VhcmNoLXBvcHVwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cXG4gICAgLnBvcHVwLnNlYXJjaC1wb3B1cCAucG9wdXBfX2NvbnRlbnQge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XFxuICAgICAgLnBvcHVwLnNlYXJjaC1wb3B1cCAucG9wdXBfX2NvbnRlbnQgLnRpdGxlLWNhcmQge1xcbiAgICAgICAgd2lkdGg6IDMyMHB4O1xcbiAgICAgICAgaGVpZ2h0OiAxNzBweDsgfVxcblxcbi5zZWFyY2gtYmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMCAyNnB4O1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICB3aWR0aDogNTQwcHg7XFxuICBtYXgtd2lkdGg6IDEwMCU7IH1cXG4gIC5zZWFyY2gtYmFyIGlucHV0IHtcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQ0cHgpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBsaW5lLWhlaWdodDogMjJweDsgfVxcbiAgICAuc2VhcmNoLWJhciBpbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgICAgIGNvbG9yOiAjNjA2RjdCOyB9XFxuICAuc2VhcmNoLWJhciBpbWcge1xcbiAgICB3aWR0aDogMzJweDsgfVxcblxcbi50YWJsZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwOyB9XFxuICAudGFibGUgdGgge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0OyB9XFxuICAudGFibGUgdGgsIC50YWJsZSB0ZCB7XFxuICAgIHBhZGRpbmc6IDhweCAxMnB4OyB9XFxuICAudGFibGUgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZmFmYzsgfVxcbiAgLnRhYmxlIHRyOm50aC1jaGlsZChvZGQpIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZjJmNjsgfVxcblxcbi50aXRsZS1jYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAyNHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuICAudGl0bGUtY2FyZDo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB6LWluZGV4OiAtMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzOyB9XFxuICAudGl0bGUtY2FyZDpob3Zlcjo6YWZ0ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpOyB9XFxuICAudGl0bGUtY2FyZC1ncm91cCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7IH1cXG4gICAgLnRpdGxlLWNhcmQtZ3JvdXAgPiA6bm90KDpsYXN0LWNoaWxkKSB7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiAxNHB4OyB9XFxuXFxuLnVzZXItcGFuZWxzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7IH1cXG4gIC51c2VyLXBhbmVscyA+ICoge1xcbiAgICBmbGV4LWdyb3c6IDA7XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgICBmbGV4LWJhc2lzOiBjYWxjKDEwMCUgLyA0IC0gMyAvIDQgKiAxNHB4KTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTRweDsgfVxcbiAgICBAbWVkaWEgYWxsIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpLCAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSkge1xcbiAgICAgIC51c2VyLXBhbmVscyA+ICoge1xcbiAgICAgICAgZmxleC1iYXNpczogY2FsYygxMDAlIC8gNCAtIDEuMyAqIDE0cHgpOyB9IH1cXG4gICAgLnVzZXItcGFuZWxzID4gKjpub3QoOm50aC1jaGlsZCg0bikpIHtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDE0cHg7IH1cXG4gIC51c2VyLXBhbmVsc19faXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDI1NXB4O1xcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG4gICAgLnVzZXItcGFuZWxzX19pdGVtIHNwYW4ge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBjb2xvcjogI0ZGRjsgfVxcbiAgICAudXNlci1wYW5lbHNfX2l0ZW06aG92ZXIgaW1nIHtcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpOyB9XFxuXFxuLmhvbWUtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XFxuXFxuLmNhdGVnb3J5LXBhbmVscyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwOyB9XFxuICAuY2F0ZWdvcnktcGFuZWxzID4gKiB7XFxuICAgIGZsZXgtZ3JvdzogMDtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxuICAgIGZsZXgtYmFzaXM6IGNhbGMoMTAwJSAvIDYgLSA1IC8gNiAqIDZweCk7XFxuICAgIG1hcmdpbi1ib3R0b206IDZweDsgfVxcbiAgICBAbWVkaWEgYWxsIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpLCAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSkge1xcbiAgICAgIC5jYXRlZ29yeS1wYW5lbHMgPiAqIHtcXG4gICAgICAgIGZsZXgtYmFzaXM6IGNhbGMoMTAwJSAvIDYgLSAyLjIgKiA2cHgpOyB9IH1cXG4gICAgLmNhdGVnb3J5LXBhbmVscyA+ICo6bm90KDpudGgtY2hpbGQoNm4pKSB7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiA2cHg7IH1cXG4gIC5jYXRlZ29yeS1wYW5lbHNfX2l0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAyNzlweDtcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG4gICAgLmNhdGVnb3J5LXBhbmVsc19faXRlbSBzcGFuIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgY29sb3I6ICNGRkY7IH1cXG4gICAgLmNhdGVnb3J5LXBhbmVsc19faXRlbTpob3ZlciBpbWcge1xcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7IH1cXG5cXG4ucHJvZHVjdC1ncmlkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7IH1cXG4gIC5wcm9kdWN0LWdyaWQgPiAqIHtcXG4gICAgZmxleC1ncm93OiAwO1xcbiAgICBmbGV4LXNocmluazogMDtcXG4gICAgZmxleC1iYXNpczogY2FsYygxMDAlIC8gNCAtIDMgLyA0ICogMTRweCk7XFxuICAgIG1hcmdpbi1ib3R0b206IDE0cHg7IH1cXG4gICAgQG1lZGlhIGFsbCBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBub25lKSwgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpIHtcXG4gICAgICAucHJvZHVjdC1ncmlkID4gKiB7XFxuICAgICAgICBmbGV4LWJhc2lzOiBjYWxjKDEwMCUgLyA0IC0gMS4zICogMTRweCk7IH0gfVxcbiAgICAucHJvZHVjdC1ncmlkID4gKjpub3QoOm50aC1jaGlsZCg0bikpIHtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDE0cHg7IH1cXG4gIC5wcm9kdWN0LWdyaWRfX2l0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAyODBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47IH1cXG4gICAgLnByb2R1Y3QtZ3JpZF9faXRlbTpob3ZlciBpbWcge1xcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7IH1cXG5cXG4uYWRtaW4taGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4OyB9XFxuICAuYWRtaW4taGVhZGVyX190aXRsZSB7XFxuICAgIG1hcmdpbi1yaWdodDogMjBweDsgfVxcblxcbi5jay1jb250YWluZXIge1xcbiAgcGFkZGluZzogMCAxNXB4OyB9XFxuXFxuLmNrLW5hdiB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGJhY2tncm91bmQ6ICNGRkY7XFxuICB6LWluZGV4OiAxMDA7XFxuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMDIpOyB9XFxuICAuY2stbmF2LWhlaWdodCB7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDsgfVxcbiAgLmNrLW5hdl9fbG9nbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG4gIC5jay1uYXZfX2xpbmtzIHtcXG4gICAgZGlzcGxheTogZmxleDsgfVxcbiAgICAuY2stbmF2X19saW5rcyA+IDpub3QoOmxhc3QtY2hpbGQpIHtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDMycHg7IH1cXG4gICAgLmNrLW5hdl9fbGlua3NfX2l0ZW0ge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gICAgICAuY2stbmF2X19saW5rc19faXRlbSBpbWcge1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA2cHg7XFxuICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC42KSBncmF5c2NhbGUoMSk7XFxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzOyB9XFxuICAgICAgLmNrLW5hdl9fbGlua3NfX2l0ZW0gPiBzcGFuLCAuY2stbmF2X19saW5rc19faXRlbSA+IGEge1xcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcztcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuICAgICAgLmNrLW5hdl9fbGlua3NfX2l0ZW0uYWN0aXZlIGltZywgLmNrLW5hdl9fbGlua3NfX2l0ZW06aG92ZXIgaW1nIHtcXG4gICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxKTsgfVxcbiAgICAgIC5jay1uYXZfX2xpbmtzX19pdGVtLmFjdGl2ZSA+IHNwYW4sIC5jay1uYXZfX2xpbmtzX19pdGVtLmFjdGl2ZSA+IGEsIC5jay1uYXZfX2xpbmtzX19pdGVtOmhvdmVyID4gc3BhbiwgLmNrLW5hdl9fbGlua3NfX2l0ZW06aG92ZXIgPiBhIHtcXG4gICAgICAgIGNvbG9yOiAjRUI5NjA1OyB9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsImltcG9ydCB7IFBvcHVwQ29udHJvbGxlciB9IGZyb20gJy4vLi4vY29tcG9uZW50cy9wb3B1cC1jb250cm9sbGVyL3BvcHVwLWNvbnRyb2xsZXIuY2xhc3MnO1xyXG5pbXBvcnQgeyBQb3B1cCB9IGZyb20gJy4vLi4vY29tcG9uZW50cy9wb3B1cC9wb3B1cC5jbGFzcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXBwe1xyXG4gIGNvbnN0cnVjdG9yKCl7XHJcbiAgICB0aGlzLmluaXQoKTtcclxuICB9IFxyXG5cclxuICBpbml0KCl7XHJcbiAgICB0aGlzLnNldHVwUG9wdXBzKCk7XHJcbiAgfVxyXG5cclxuICBzZXR1cFBvcHVwcygpe1xyXG4gICAgY29uc3QgcG9wdXBBcnIgPSBbXTtcclxuXHJcbiAgICAvL0NoZWNrIGlmIHBvcHVwIGV4aXN0c1xyXG4gICAgY29uc3Qgc2VhcmNoUG9wdXBFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtcG9wdXAnKTtcclxuICAgIGlmKHNlYXJjaFBvcHVwRWwpe1xyXG4gICAgICBjb25zdCBzZWFyY2hQb3B1cCA9IG5ldyBQb3B1cCh7XHJcbiAgICAgICAgcG9wdXBFbGVtZW50SWQ6ICdzZWFyY2gtcG9wdXAnLFxyXG4gICAgICAgIG9wZW5lcnNRdWVyeVNlbGVjdG9yOiAnLm9wZW4tc2VhcmNoLXBvcHVwJyxcclxuICAgICAgICBjbG9zZXJzUXVlcnlTZWxlY3RvcjogJy5jbG9zZS1zZWFyY2gtcG9wdXAnXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICBwb3B1cEFyci5wdXNoKHNlYXJjaFBvcHVwKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjYXRlZ29yeVBvcHVwRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2F0ZWdvcnktcG9wdXAnKTtcclxuICAgIGlmKGNhdGVnb3J5UG9wdXBFbCl7XHJcbiAgICAgIGNvbnN0IGNhdGVnb3J5UG9wdXAgPSBuZXcgUG9wdXAoe1xyXG4gICAgICAgIHBvcHVwRWxlbWVudElkOiAnY2F0ZWdvcnktcG9wdXAnLFxyXG4gICAgICAgIG9wZW5lcnNRdWVyeVNlbGVjdG9yOiAnLm9wZW4tY2F0ZWdvcnktcG9wdXAnLFxyXG4gICAgICAgIGNsb3NlcnNRdWVyeVNlbGVjdG9yOiAnLmNsb3NlLWNhdGVnb3J5LXBvcHVwJ1xyXG4gICAgICB9KVxyXG5cclxuICAgICAgcG9wdXBBcnIucHVzaChjYXRlZ29yeVBvcHVwKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbmdyZWRpZW50UG9wdXBFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXRlZ29yeS1wb3B1cCcpO1xyXG4gICAgaWYoaW5ncmVkaWVudFBvcHVwRWwpe1xyXG4gICAgICBjb25zdCBpbmdyZWRpZW50UG9wdXAgPSBuZXcgUG9wdXAoe1xyXG4gICAgICAgIHBvcHVwRWxlbWVudElkOiAnaW5ncmVkaWVudC1wb3B1cCcsXHJcbiAgICAgICAgb3BlbmVyc1F1ZXJ5U2VsZWN0b3I6ICcub3Blbi1pbmdyZWRpZW50LXBvcHVwJyxcclxuICAgICAgICBjbG9zZXJzUXVlcnlTZWxlY3RvcjogJy5jbG9zZS1pbmdyZWRpZW50LXBvcHVwJ1xyXG4gICAgICB9KVxyXG5cclxuICAgICAgcG9wdXBBcnIucHVzaChpbmdyZWRpZW50UG9wdXApO1xyXG4gICAgfVxyXG5cclxuICAgIG5ldyBQb3B1cENvbnRyb2xsZXIocG9wdXBBcnIpO1xyXG4gIH1cclxufSIsImltcG9ydCB7IFBvcHVwIH0gZnJvbSAnLi4vcG9wdXAvcG9wdXAuY2xhc3MnO1xyXG5cclxuLyoqXHJcbiAqIFdhdGNoZXMgcG9wdXBzIGFuZCwgd2hlbiBhIHBvcHVwIG9wZW5zLCBpdCBjbG9zZXMgdGhlIG90aGVyIHVubmVjY2Vzc2FyeSBwb3B1cHMgc28gdGhleSBkb24ndCBzdGFja1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFBvcHVwQ29udHJvbGxlcntcclxuICBwb3B1cHM6IFBvcHVwW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKHBvcHVwczogUG9wdXBbXSl7XHJcbiAgICB0aGlzLnBvcHVwcyA9IHBvcHVwcztcclxuXHJcbiAgICB0aGlzLmluaXQoKTtcclxuICB9XHJcblxyXG4gIGluaXQoKXtcclxuICAgIHRoaXMud2F0Y2hQb3B1cHMoKTtcclxuICB9XHJcblxyXG4gIHdhdGNoUG9wdXBzKCl7XHJcbiAgICB0aGlzLnBvcHVwcy5mb3JFYWNoKHBvcHVwID0+IHtcclxuICAgICAgcG9wdXAuYmVmb3JlT3BlbiA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLmNsb3NlT3RoZXJQb3B1cHMocG9wdXApO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY2xvc2VPdGhlclBvcHVwcyhjdXJyZW50UG9wdXA6IFBvcHVwKXtcclxuICAgIHRoaXMucG9wdXBzLmZvckVhY2gocG9wdXAgPT4ge1xyXG4gICAgICBpZihwb3B1cCAhPT0gY3VycmVudFBvcHVwKXtcclxuICAgICAgICBwb3B1cC5jbG9zZSgpO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxufSIsImV4cG9ydCBpbnRlcmZhY2UgSVBvcHVwRGF0YXtcclxuICBwb3B1cEVsZW1lbnRJZDogc3RyaW5nLFxyXG4gIG9wZW5lcnNRdWVyeVNlbGVjdG9yOiBzdHJpbmcsXHJcbiAgY2xvc2Vyc1F1ZXJ5U2VsZWN0b3I6IHN0cmluZyxcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBvcHVwe1xyXG4gIHBvcHVwOiBIVE1MRWxlbWVudDtcclxuICBvcGVuZXJzOiBIVE1MRWxlbWVudFtdO1xyXG4gIGNsb3NlcnM6IEhUTUxFbGVtZW50W107XHJcbiAgYmVmb3JlT3BlbjogRnVuY3Rpb247XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRhdGE6IElQb3B1cERhdGEpe1xyXG4gICAgdGhpcy5wb3B1cCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRhdGEucG9wdXBFbGVtZW50SWQpO1xyXG4gICAgdGhpcy5vcGVuZXJzID0gWy4uLiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGRhdGEub3BlbmVyc1F1ZXJ5U2VsZWN0b3IpIGFzIE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+IF07XHJcbiAgICB0aGlzLmNsb3NlcnMgPSBbLi4uIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZGF0YS5jbG9zZXJzUXVlcnlTZWxlY3RvcikgYXMgTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4gXTtcclxuXHJcbiAgICB0aGlzLmluaXQoKTtcclxuICB9XHJcblxyXG4gIGluaXQoKXtcclxuICAgIHRoaXMuc2V0dXBPcGVuZXJzKCk7XHJcbiAgICB0aGlzLnNldHVwQ2xvc2VycygpO1xyXG4gIH1cclxuXHJcbiAgc2V0dXBPcGVuZXJzKCl7XHJcbiAgICB0aGlzLm9wZW5lcnMuZm9yRWFjaChvcGVuZXIgPT4geyBcclxuICAgICAgb3BlbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMub3BlbigpO1xyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHNldHVwQ2xvc2Vycygpe1xyXG4gICAgdGhpcy5jbG9zZXJzLmZvckVhY2goY2xvc2VyID0+IHsgXHJcbiAgICAgIGNsb3Nlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgb3Blbigpe1xyXG4gICAgdGhpcy5iZWZvcmVPcGVuKCk7XHJcbiAgICB0aGlzLnBvcHVwLmNsYXNzTGlzdC5hZGQoJ29wZW4nKTtcclxuICB9XHJcblxyXG4gIGNsb3NlKCl7XHJcbiAgICB0aGlzLnBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBBcHAgfSBmcm9tICcuL2FwcC9hcHAuY2xhc3MnO1xyXG5pbXBvcnQgJy4uL3Njc3MvbWFpbi5zY3NzJztcclxuXHJcbm5ldyBBcHAoKTsiXSwic291cmNlUm9vdCI6IiJ9