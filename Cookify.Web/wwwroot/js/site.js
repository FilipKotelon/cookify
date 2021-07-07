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
exports.push([module.i, "*, *::before, *::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box; }\n\nhtml.no-scroll {\n  overflow: hidden; }\n\n#wpadminbar {\n  display: none; }\n\nbody {\n  overflow-x: hidden;\n  position: relative;\n  background-color: #FEFBED;\n  padding-bottom: 110px; }\n  body.grey-body {\n    background-color: #E7EDF3; }\n  @media (hover: none) {\n    body {\n      cursor: pointer; } }\n\ninput {\n  border: none;\n  font: inherit; }\n  input:focus {\n    outline: none; }\n\nbutton {\n  font: inherit;\n  cursor: pointer;\n  border: none;\n  background-color: transparent; }\n  button:focus {\n    outline: none; }\n\ninput[type=\"checkbox\"] {\n  cursor: pointer; }\n\nlabel {\n  cursor: pointer; }\n\nsection {\n  margin-bottom: 60px; }\n\nhtml {\n  font-size: 62.5%; }\n\nbody {\n  font-size: 1.6rem;\n  font-family: 'Open Sans', sans-serif; }\n\n::selection {\n  color: #FFF;\n  background: #EB9605; }\n\nh1, h2, h3, h4, h5, h6 {\n  font-family: 'Montserrat', sans-serif; }\n\n.open-sans {\n  font-family: 'Open Sans', sans-serif; }\n\n.montserrat {\n  font-family: 'Montserrat', sans-serif; }\n\na {\n  text-decoration: none;\n  color: #1F2127; }\n\n.text-danger {\n  color: #772E25; }\n\n.h1 {\n  font-weight: bold;\n  font-size: 48px;\n  line-height: 59px;\n  margin-bottom: 60px;\n  text-align: center; }\n\n.h2 {\n  font-weight: 700;\n  font-style: normal;\n  font-size: 32px;\n  color: #EB9605;\n  margin-bottom: 45px; }\n  .h2 span {\n    position: relative; }\n    .h2 span::after {\n      content: \"\";\n      display: block;\n      position: absolute;\n      top: calc(100% + 3px);\n      left: 0;\n      width: 100%;\n      height: 3px;\n      background-color: #EB9605;\n      transition: all .3s; }\n\n.h3 {\n  font-weight: bold;\n  font-size: 24px;\n  line-height: 33px; }\n\n.mobile-h2 {\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 22px; }\n\n.text-orange {\n  color: #EB9605; }\n\n.admin-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #110011;\n  height: 36px;\n  padding: 0 14px;\n  color: #FFF;\n  font-size: 14px;\n  border: none;\n  transition: all .3s;\n  cursor: pointer; }\n  .admin-btn:hover {\n    background-color: #197278; }\n  .admin-btn-group {\n    display: flex;\n    align-items: center; }\n    .admin-btn-group > :not(:last-child) {\n      margin-right: 24px; }\n\n.ck-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #EB9605;\n  background-color: #FFF;\n  border-radius: 30px;\n  height: 42px;\n  padding: 10px 25px;\n  font-size: 16px;\n  font-weight: 600;\n  color: #EB9605;\n  transition: all .3s; }\n  .ck-btn:hover {\n    background-color: #EB9605;\n    color: #FFF; }\n\n.bordered-input {\n  background: #FFF;\n  border: 1px solid #3D4852;\n  border-radius: 5px;\n  width: 100%;\n  height: 60px;\n  padding: 0 12px; }\n\n.white-panel {\n  background: #FFF;\n  padding: 15px 23px; }\n\n.admin-form {\n  display: flex;\n  flex-direction: column;\n  background-color: #FFF;\n  padding: 24px 32px;\n  border-radius: 5px;\n  max-width: 800px;\n  width: 100%; }\n  .admin-form__group {\n    display: flex;\n    flex-direction: column; }\n    .admin-form__group:not(:last-child) {\n      margin-bottom: 24px; }\n    .admin-form__group label {\n      margin-bottom: 8px; }\n    .admin-form__group input {\n      width: 100%;\n      height: 40px;\n      padding: 0 15px;\n      border: 1px solid #B8C2CC;\n      background-color: #FFF; }\n    .admin-form__group select {\n      height: 40px;\n      padding: 0 15px;\n      border: 1px solid #B8C2CC; }\n\n.admin-panels {\n  display: flex;\n  flex-wrap: wrap; }\n  .admin-panels > * {\n    flex-grow: 0;\n    flex-shrink: 0;\n    flex-basis: calc(100% / 6 - 5 / 6 * 32px);\n    margin-bottom: 32px; }\n    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n      .admin-panels > * {\n        flex-basis: calc(100% / 6 - 2.2 * 32px); } }\n    .admin-panels > *:not(:nth-child(6n)) {\n      margin-right: 32px; }\n  .admin-panels__item {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: calc(100vh - 240px);\n    background: #FFF;\n    font-family: 'Montserrat';\n    font-weight: bold;\n    font-size: 28px;\n    position: relative;\n    border-radius: 5px;\n    overflow: hidden; }\n    .admin-panels__item__bg {\n      position: absolute;\n      left: 0;\n      top: 0;\n      opacity: 0;\n      z-index: 0;\n      filter: brightness(0.6);\n      transition: all .3s;\n      width: 100%;\n      height: 100%;\n      object-fit: cover; }\n    .admin-panels__item span {\n      position: relative;\n      z-index: 1;\n      color: #1F2127;\n      transition: all .3s; }\n    .admin-panels__item:hover span {\n      color: #FFF; }\n    .admin-panels__item:hover .admin-panels__item__bg {\n      opacity: 1; }\n\n.category-panels {\n  display: flex;\n  flex-wrap: wrap; }\n  .category-panels > * {\n    flex-grow: 0;\n    flex-shrink: 0;\n    flex-basis: calc(100% / 6 - 5 / 6 * 6px);\n    margin-bottom: 6px; }\n    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n      .category-panels > * {\n        flex-basis: calc(100% / 6 - 2.2 * 6px); } }\n    .category-panels > *:not(:nth-child(6n)) {\n      margin-right: 6px; }\n  .category-panels__item {\n    height: 215px;\n    font-size: 18px;\n    position: relative;\n    border-radius: 5px;\n    overflow: hidden; }\n    .category-panels__item__bg {\n      position: absolute;\n      left: 0;\n      top: 0;\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n      z-index: 0; }\n    .category-panels__item__content {\n      width: 100%;\n      height: 100%;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      background: rgba(0, 0, 0, 0.4);\n      position: relative;\n      z-index: 1;\n      font-weight: bold;\n      transition: all .3s; }\n      .category-panels__item__content span {\n        color: #FFF; }\n    .category-panels__item:hover .category-panels__item__content {\n      background: rgba(0, 0, 0, 0.2); }\n\n.ck-dropdown-menu {\n  position: absolute;\n  left: -22px;\n  top: calc(100% + 16px);\n  display: flex;\n  flex-direction: column;\n  background-color: #FFF;\n  border-radius: 0 0 5px 5px;\n  padding: 14px 22px;\n  opacity: 0;\n  visibility: hidden;\n  transition: all .3s;\n  z-index: 100;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.02); }\n  .ck-dropdown-menu-con {\n    position: relative; }\n    .ck-dropdown-menu-con:hover .ck-dropdown-menu {\n      opacity: 1;\n      visibility: visible; }\n  .ck-dropdown-menu > :not(:last-child) {\n    margin-bottom: 8px; }\n  .ck-dropdown-menu.to-right {\n    right: 0;\n    left: initial; }\n  .ck-dropdown-menu__link {\n    white-space: nowrap;\n    transition: all .3s; }\n    .ck-dropdown-menu__link:hover {\n      color: #EB9605; }\n\n.favorite-heart {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #FFF;\n  cursor: pointer; }\n  .favorite-heart .heart-empty, .favorite-heart .heart-filled {\n    width: 70%;\n    transition: all .3s;\n    position: absolute; }\n  .favorite-heart .heart-filled {\n    opacity: 0; }\n  .favorite-heart .heart-empty {\n    opacity: 1; }\n  .favorite-heart.filled .heart-filled {\n    opacity: 1; }\n  .favorite-heart.filled .heart-empty {\n    opacity: 0; }\n\n.filters-sidebar {\n  display: flex;\n  flex-direction: column;\n  background-color: #FFF;\n  padding: 15px;\n  border-radius: 5px; }\n  .filters-sidebar > :not(:last-child) {\n    margin-bottom: 12px; }\n  .filters-sidebar h3 {\n    margin-bottom: 12px; }\n  .filters-sidebar__field--search, .filters-sidebar__field--categories, .filters-sidebar__field--ingredients {\n    padding: 12px 9px;\n    border: 1px solid;\n    border-radius: 5px;\n    font-weight: 600;\n    font-size: 14px;\n    line-height: 17px; }\n  .filters-sidebar__field--categories, .filters-sidebar__field--ingredients {\n    display: flex;\n    flex-direction: column;\n    cursor: pointer; }\n  .filters-sidebar__field--search {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    color: #3D4852; }\n    .filters-sidebar__field--search input {\n      width: calc(100% - 26px); }\n    .filters-sidebar__field--search button {\n      width: 20px; }\n  .filters-sidebar__field--categories {\n    color: #772E25; }\n  .filters-sidebar__field--ingredients {\n    color: #296EB4; }\n\n.ck-form {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  max-width: 640px;\n  padding: 20px 30px 32px;\n  margin: 0 auto; }\n  .ck-form__title, .ck-form__info {\n    margin-bottom: 36px; }\n  .ck-form__info {\n    font-weight: bold;\n    font-size: 18px;\n    line-height: 22px; }\n  .ck-form__field {\n    width: 100%;\n    margin-bottom: 16px; }\n  .ck-form .ck-btn {\n    margin-top: 36px; }\n  .ck-form__checkbox input {\n    margin-right: 8px; }\n  .ck-form__additional {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    text-align: center;\n    margin-top: 20px; }\n    .ck-form__additional > * {\n      font-weight: bold; }\n      .ck-form__additional > *:not(:last-child) {\n        margin-bottom: 12px; }\n\n.home-header {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  margin-bottom: 120px; }\n\n.popup {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  padding: 32px;\n  z-index: 1000;\n  background: rgba(235, 150, 5, 0.95);\n  opacity: 0;\n  pointer-events: none;\n  transition: all .3s; }\n  .popup.open {\n    opacity: 1;\n    pointer-events: all; }\n  .popup__closer {\n    position: absolute;\n    top: 32px;\n    right: 32px;\n    width: 84px;\n    height: 84px;\n    cursor: pointer; }\n  .popup__content__title {\n    text-align: center;\n    color: #FFF;\n    margin-bottom: 48px; }\n  .popup__content .search-bar {\n    margin-bottom: 60px; }\n  .popup__content__scrollable {\n    padding-right: 26px;\n    overflow: auto; }\n    .popup__content__scrollable::-webkit-scrollbar-track {\n      background-color: rgba(255, 255, 255, 0.3); }\n    .popup__content__scrollable::-webkit-scrollbar {\n      width: 6px;\n      background-color: rgba(255, 255, 255, 0.3); }\n    .popup__content__scrollable::-webkit-scrollbar-thumb {\n      background-color: #FFF; }\n  .popup.search-popup {\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n    .popup.search-popup .popup__content {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      flex-direction: column; }\n      .popup.search-popup .popup__content .title-card {\n        width: 320px;\n        height: 170px; }\n  .popup.category-popup, .popup.ingredient-popup {\n    overflow: hidden; }\n    .popup.category-popup .popup__content, .popup.ingredient-popup .popup__content {\n      height: 100%;\n      padding-top: 150px; }\n      .popup.category-popup .popup__content__scrollable, .popup.ingredient-popup .popup__content__scrollable {\n        height: calc(100% - 120px); }\n\n.product-grid {\n  display: flex;\n  flex-wrap: wrap; }\n  .product-grid > * {\n    flex-grow: 0;\n    flex-shrink: 0;\n    flex-basis: calc(100% / 4 - 3 / 4 * 14px);\n    margin-bottom: 14px; }\n    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n      .product-grid > * {\n        flex-basis: calc(100% / 4 - 1.3 * 14px); } }\n    .product-grid > *:not(:nth-child(4n)) {\n      margin-right: 14px; }\n  .product-grid__item {\n    display: flex;\n    flex-direction: column;\n    position: relative;\n    border-radius: 5px;\n    overflow: hidden;\n    background-color: #FFF; }\n    .product-grid__item .favorite-heart {\n      position: absolute;\n      top: 15px;\n      right: 15px;\n      transition: all .3s; }\n      .product-grid__item .favorite-heart:hover {\n        transform: scale(1.12); }\n    .product-grid__item__desc {\n      height: 80px; }\n      .product-grid__item__desc__title {\n        margin-left: 13px;\n        margin-top: 10px;\n        font-size: 18px;\n        font-weight: bold; }\n      .product-grid__item__desc__info {\n        display: flex;\n        align-items: flex-start;\n        margin-left: 13px; }\n        .product-grid__item__desc__info > :not(:last-child) {\n          margin-right: 10px; }\n        .product-grid__item__desc__info__item {\n          display: flex;\n          align-items: center;\n          margin-top: 10px;\n          font-size: 10px; }\n          .product-grid__item__desc__info__item img {\n            width: 16px;\n            height: 16px;\n            margin-right: 4px; }\n    .product-grid__item__img-con {\n      width: 100%;\n      height: 280px; }\n    .product-grid__item__img {\n      width: 100%;\n      height: 100%;\n      object-fit: cover; }\n\n.search-bar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 26px;\n  height: 60px;\n  background-color: #FFF;\n  border-radius: 30px;\n  width: 540px;\n  max-width: 100%; }\n  .search-bar input {\n    width: calc(100% - 44px);\n    font-weight: bold;\n    font-size: 18px;\n    line-height: 22px; }\n    .search-bar input::placeholder {\n      color: #606F7B; }\n  .search-bar img {\n    width: 32px; }\n\n.table {\n  width: 100%;\n  border-spacing: 0; }\n  .table th {\n    background-color: #FFF;\n    text-align: left; }\n  .table th, .table td {\n    padding: 8px 12px; }\n  .table tr:nth-child(even) {\n    background-color: #f8fafc; }\n  .table tr:nth-child(odd) {\n    background-color: #eef2f6; }\n\n.title-card {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 24px;\n  text-align: center;\n  cursor: pointer;\n  position: relative; }\n  .title-card::after {\n    content: \"\";\n    display: block;\n    position: absolute;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    z-index: -1;\n    background-color: #FFF;\n    border-radius: 5px;\n    transition: all .3s; }\n  .title-card:hover::after {\n    transform: scale(0.95); }\n  .title-card-group {\n    display: flex; }\n    .title-card-group > :not(:last-child) {\n      margin-right: 14px; }\n\n.user-panels {\n  display: flex;\n  flex-wrap: wrap; }\n  .user-panels > * {\n    flex-grow: 0;\n    flex-shrink: 0;\n    flex-basis: calc(100% / 4 - 3 / 4 * 14px);\n    margin-bottom: 14px; }\n    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n      .user-panels > * {\n        flex-basis: calc(100% / 4 - 1.3 * 14px); } }\n    .user-panels > *:not(:nth-child(4n)) {\n      margin-right: 14px; }\n  .user-panels__item {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 255px;\n    font-family: 'Open Sans';\n    font-weight: bold;\n    font-size: 24px;\n    position: relative;\n    border-radius: 5px;\n    overflow: hidden;\n    text-align: center; }\n    .user-panels__item span {\n      position: absolute;\n      color: #FFF; }\n    .user-panels__item img {\n      width: 100%;\n      object-fit: cover;\n      transition: all .3s; }\n    .user-panels__item:hover img {\n      opacity: .9; }\n\n.admin-header {\n  display: flex;\n  margin-bottom: 30px; }\n  .admin-header__title {\n    margin-right: 20px; }\n\n.ck-container {\n  padding: 0 15px; }\n\n.ck-nav {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: #FFF;\n  z-index: 100;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.02); }\n  .ck-nav-height {\n    height: 60px;\n    margin-bottom: 60px; }\n  .ck-nav__logo {\n    display: flex;\n    align-items: center; }\n  .ck-nav__links {\n    display: flex; }\n    .ck-nav__links > :not(:last-child) {\n      margin-right: 32px; }\n    .ck-nav__links__item {\n      display: flex;\n      align-items: center;\n      cursor: pointer; }\n      .ck-nav__links__item img {\n        margin-right: 6px;\n        filter: brightness(0.6) grayscale(1);\n        transition: all .3s; }\n      .ck-nav__links__item > span, .ck-nav__links__item > a {\n        transition: all .3s;\n        font-weight: bold; }\n      .ck-nav__links__item.active img, .ck-nav__links__item:hover img {\n        filter: brightness(1); }\n      .ck-nav__links__item.active > span, .ck-nav__links__item.active > a, .ck-nav__links__item:hover > span, .ck-nav__links__item:hover > a {\n        color: #EB9605; }\n\n.footer {\n  position: absolute;\n  left: 0px;\n  bottom: 0px;\n  width: 100%;\n  height: 50px;\n  text-align: center;\n  padding: 16px;\n  font-family: Montserrat;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  line-height: 22px;\n  background-color: #FFF; }\n\n.recipes-page {\n  display: flex;\n  flex-direction: column; }\n  .recipes-page__main {\n    display: flex;\n    justify-content: space-between; }\n  .recipes-page__sidebar {\n    width: 255px; }\n  .recipes-page__grid {\n    width: calc(100% - 285px); }\n", ""]);
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
        this.setupFavorites();
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
        this.setupFilling();
    }
    setupFilling() {
        this.el.addEventListener('click', () => {
            if (!this.filled) {
                this.addToFavorites();
                this.fillHeart();
            }
            else {
                this.removeFromFavorites();
                this.emptyHeart();
            }
        });
    }
    fillHeart() {
        this.el.classList.add('filled');
        this.filled = true;
    }
    emptyHeart() {
        this.el.classList.remove('filled');
        this.filled = false;
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
        document.querySelector('html').classList.add('no-scroll');
    }
    close() {
        this.popup.classList.remove('open');
        document.querySelector('html').classList.remove('no-scroll');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2Nzcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc2Nzcy9tYWluLnNjc3M/NGU1MyIsIndlYnBhY2s6Ly8vLi90cy9hcHAvYXBwLmNsYXNzLnRzIiwid2VicGFjazovLy8uL3RzL2NvbXBvbmVudHMvZmF2b3JpdGUtaGVhcnQvZmF2b3JpdGUtaGVhcnQuY2xhc3MudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvY29tcG9uZW50cy9wb3B1cC1jb250cm9sbGVyL3BvcHVwLWNvbnRyb2xsZXIuY2xhc3MudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvY29tcG9uZW50cy9wb3B1cC9wb3B1cC5jbGFzcy50cyIsIndlYnBhY2s6Ly8vLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FB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LENBQUM7UUFDbEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pDLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDL0QsQ0FBQztDQUNGO0FBN0NELHNCQTZDQzs7Ozs7Ozs7Ozs7Ozs7O0FDbkRELHdGQUFzQztBQUN0QyxpRUFBMkI7QUFFM0IsSUFBSSxlQUFHLEVBQUUsQ0FBQyIsImZpbGUiOiJzaXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi90cy9pbmRleC50c1wiKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIqLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuXFxuaHRtbC5uby1zY3JvbGwge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxcblxcbiN3cGFkbWluYmFyIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG5ib2R5IHtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRUZCRUQ7XFxuICBwYWRkaW5nLWJvdHRvbTogMTEwcHg7IH1cXG4gIGJvZHkuZ3JleS1ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U3RURGMzsgfVxcbiAgQG1lZGlhIChob3Zlcjogbm9uZSkge1xcbiAgICBib2R5IHtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7IH0gfVxcblxcbmlucHV0IHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQ6IGluaGVyaXQ7IH1cXG4gIGlucHV0OmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTsgfVxcblxcbmJ1dHRvbiB7XFxuICBmb250OiBpbmhlcml0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cXG4gIGJ1dHRvbjpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7IH1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG4gIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbmxhYmVsIHtcXG4gIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbnNlY3Rpb24ge1xcbiAgbWFyZ2luLWJvdHRvbTogNjBweDsgfVxcblxcbmh0bWwge1xcbiAgZm9udC1zaXplOiA2Mi41JTsgfVxcblxcbmJvZHkge1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7IH1cXG5cXG46OnNlbGVjdGlvbiB7XFxuICBjb2xvcjogI0ZGRjtcXG4gIGJhY2tncm91bmQ6ICNFQjk2MDU7IH1cXG5cXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7IH1cXG5cXG4ub3Blbi1zYW5zIHtcXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjsgfVxcblxcbi5tb250c2VycmF0IHtcXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7IH1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiAjMUYyMTI3OyB9XFxuXFxuLnRleHQtZGFuZ2VyIHtcXG4gIGNvbG9yOiAjNzcyRTI1OyB9XFxuXFxuLmgxIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiA0OHB4O1xcbiAgbGluZS1oZWlnaHQ6IDU5cHg7XFxuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLmgyIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXNpemU6IDMycHg7XFxuICBjb2xvcjogI0VCOTYwNTtcXG4gIG1hcmdpbi1ib3R0b206IDQ1cHg7IH1cXG4gIC5oMiBzcGFuIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuICAgIC5oMiBzcGFuOjphZnRlciB7XFxuICAgICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogY2FsYygxMDAlICsgM3B4KTtcXG4gICAgICBsZWZ0OiAwO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGhlaWdodDogM3B4O1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFQjk2MDU7XFxuICAgICAgdHJhbnNpdGlvbjogYWxsIC4zczsgfVxcblxcbi5oMyB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGxpbmUtaGVpZ2h0OiAzM3B4OyB9XFxuXFxuLm1vYmlsZS1oMiB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGxpbmUtaGVpZ2h0OiAyMnB4OyB9XFxuXFxuLnRleHQtb3JhbmdlIHtcXG4gIGNvbG9yOiAjRUI5NjA1OyB9XFxuXFxuLmFkbWluLWJ0biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExMDAxMTtcXG4gIGhlaWdodDogMzZweDtcXG4gIHBhZGRpbmc6IDAgMTRweDtcXG4gIGNvbG9yOiAjRkZGO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgdHJhbnNpdGlvbjogYWxsIC4zcztcXG4gIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgLmFkbWluLWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTcyNzg7IH1cXG4gIC5hZG1pbi1idG4tZ3JvdXAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuICAgIC5hZG1pbi1idG4tZ3JvdXAgPiA6bm90KDpsYXN0LWNoaWxkKSB7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiAyNHB4OyB9XFxuXFxuLmNrLWJ0biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI0VCOTYwNTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgaGVpZ2h0OiA0MnB4O1xcbiAgcGFkZGluZzogMTBweCAyNXB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGNvbG9yOiAjRUI5NjA1O1xcbiAgdHJhbnNpdGlvbjogYWxsIC4zczsgfVxcbiAgLmNrLWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFQjk2MDU7XFxuICAgIGNvbG9yOiAjRkZGOyB9XFxuXFxuLmJvcmRlcmVkLWlucHV0IHtcXG4gIGJhY2tncm91bmQ6ICNGRkY7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjM0Q0ODUyO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICBwYWRkaW5nOiAwIDEycHg7IH1cXG5cXG4ud2hpdGUtcGFuZWwge1xcbiAgYmFja2dyb3VuZDogI0ZGRjtcXG4gIHBhZGRpbmc6IDE1cHggMjNweDsgfVxcblxcbi5hZG1pbi1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcXG4gIHBhZGRpbmc6IDI0cHggMzJweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG1heC13aWR0aDogODAwcHg7XFxuICB3aWR0aDogMTAwJTsgfVxcbiAgLmFkbWluLWZvcm1fX2dyb3VwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcbiAgICAuYWRtaW4tZm9ybV9fZ3JvdXA6bm90KDpsYXN0LWNoaWxkKSB7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDsgfVxcbiAgICAuYWRtaW4tZm9ybV9fZ3JvdXAgbGFiZWwge1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDsgfVxcbiAgICAuYWRtaW4tZm9ybV9fZ3JvdXAgaW5wdXQge1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGhlaWdodDogNDBweDtcXG4gICAgICBwYWRkaW5nOiAwIDE1cHg7XFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI0I4QzJDQztcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGOyB9XFxuICAgIC5hZG1pbi1mb3JtX19ncm91cCBzZWxlY3Qge1xcbiAgICAgIGhlaWdodDogNDBweDtcXG4gICAgICBwYWRkaW5nOiAwIDE1cHg7XFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI0I4QzJDQzsgfVxcblxcbi5hZG1pbi1wYW5lbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDsgfVxcbiAgLmFkbWluLXBhbmVscyA+ICoge1xcbiAgICBmbGV4LWdyb3c6IDA7XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgICBmbGV4LWJhc2lzOiBjYWxjKDEwMCUgLyA2IC0gNSAvIDYgKiAzMnB4KTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMzJweDsgfVxcbiAgICBAbWVkaWEgYWxsIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpLCAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSkge1xcbiAgICAgIC5hZG1pbi1wYW5lbHMgPiAqIHtcXG4gICAgICAgIGZsZXgtYmFzaXM6IGNhbGMoMTAwJSAvIDYgLSAyLjIgKiAzMnB4KTsgfSB9XFxuICAgIC5hZG1pbi1wYW5lbHMgPiAqOm5vdCg6bnRoLWNoaWxkKDZuKSkge1xcbiAgICAgIG1hcmdpbi1yaWdodDogMzJweDsgfVxcbiAgLmFkbWluLXBhbmVsc19faXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyNDBweCk7XFxuICAgIGJhY2tncm91bmQ6ICNGRkY7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuOyB9XFxuICAgIC5hZG1pbi1wYW5lbHNfX2l0ZW1fX2JnIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgbGVmdDogMDtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgb3BhY2l0eTogMDtcXG4gICAgICB6LWluZGV4OiAwO1xcbiAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjYpO1xcbiAgICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyOyB9XFxuICAgIC5hZG1pbi1wYW5lbHNfX2l0ZW0gc3BhbiB7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIHotaW5kZXg6IDE7XFxuICAgICAgY29sb3I6ICMxRjIxMjc7XFxuICAgICAgdHJhbnNpdGlvbjogYWxsIC4zczsgfVxcbiAgICAuYWRtaW4tcGFuZWxzX19pdGVtOmhvdmVyIHNwYW4ge1xcbiAgICAgIGNvbG9yOiAjRkZGOyB9XFxuICAgIC5hZG1pbi1wYW5lbHNfX2l0ZW06aG92ZXIgLmFkbWluLXBhbmVsc19faXRlbV9fYmcge1xcbiAgICAgIG9wYWNpdHk6IDE7IH1cXG5cXG4uY2F0ZWdvcnktcGFuZWxzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7IH1cXG4gIC5jYXRlZ29yeS1wYW5lbHMgPiAqIHtcXG4gICAgZmxleC1ncm93OiAwO1xcbiAgICBmbGV4LXNocmluazogMDtcXG4gICAgZmxleC1iYXNpczogY2FsYygxMDAlIC8gNiAtIDUgLyA2ICogNnB4KTtcXG4gICAgbWFyZ2luLWJvdHRvbTogNnB4OyB9XFxuICAgIEBtZWRpYSBhbGwgYW5kICgtbXMtaGlnaC1jb250cmFzdDogbm9uZSksICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSB7XFxuICAgICAgLmNhdGVnb3J5LXBhbmVscyA+ICoge1xcbiAgICAgICAgZmxleC1iYXNpczogY2FsYygxMDAlIC8gNiAtIDIuMiAqIDZweCk7IH0gfVxcbiAgICAuY2F0ZWdvcnktcGFuZWxzID4gKjpub3QoOm50aC1jaGlsZCg2bikpIHtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDZweDsgfVxcbiAgLmNhdGVnb3J5LXBhbmVsc19faXRlbSB7XFxuICAgIGhlaWdodDogMjE1cHg7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47IH1cXG4gICAgLmNhdGVnb3J5LXBhbmVsc19faXRlbV9fYmcge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBsZWZ0OiAwO1xcbiAgICAgIHRvcDogMDtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgICAgei1pbmRleDogMDsgfVxcbiAgICAuY2F0ZWdvcnktcGFuZWxzX19pdGVtX19jb250ZW50IHtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgei1pbmRleDogMTtcXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzOyB9XFxuICAgICAgLmNhdGVnb3J5LXBhbmVsc19faXRlbV9fY29udGVudCBzcGFuIHtcXG4gICAgICAgIGNvbG9yOiAjRkZGOyB9XFxuICAgIC5jYXRlZ29yeS1wYW5lbHNfX2l0ZW06aG92ZXIgLmNhdGVnb3J5LXBhbmVsc19faXRlbV9fY29udGVudCB7XFxuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpOyB9XFxuXFxuLmNrLWRyb3Bkb3duLW1lbnUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogLTIycHg7XFxuICB0b3A6IGNhbGMoMTAwJSArIDE2cHgpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xcbiAgYm9yZGVyLXJhZGl1czogMCAwIDVweCA1cHg7XFxuICBwYWRkaW5nOiAxNHB4IDIycHg7XFxuICBvcGFjaXR5OiAwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgdHJhbnNpdGlvbjogYWxsIC4zcztcXG4gIHotaW5kZXg6IDEwMDtcXG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4wMik7IH1cXG4gIC5jay1kcm9wZG93bi1tZW51LWNvbiB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcbiAgICAuY2stZHJvcGRvd24tbWVudS1jb246aG92ZXIgLmNrLWRyb3Bkb3duLW1lbnUge1xcbiAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTsgfVxcbiAgLmNrLWRyb3Bkb3duLW1lbnUgPiA6bm90KDpsYXN0LWNoaWxkKSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDhweDsgfVxcbiAgLmNrLWRyb3Bkb3duLW1lbnUudG8tcmlnaHQge1xcbiAgICByaWdodDogMDtcXG4gICAgbGVmdDogaW5pdGlhbDsgfVxcbiAgLmNrLWRyb3Bkb3duLW1lbnVfX2xpbmsge1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzOyB9XFxuICAgIC5jay1kcm9wZG93bi1tZW51X19saW5rOmhvdmVyIHtcXG4gICAgICBjb2xvcjogI0VCOTYwNTsgfVxcblxcbi5mYXZvcml0ZS1oZWFydCB7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xcbiAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAuZmF2b3JpdGUtaGVhcnQgLmhlYXJ0LWVtcHR5LCAuZmF2b3JpdGUtaGVhcnQgLmhlYXJ0LWZpbGxlZCB7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgfVxcbiAgLmZhdm9yaXRlLWhlYXJ0IC5oZWFydC1maWxsZWQge1xcbiAgICBvcGFjaXR5OiAwOyB9XFxuICAuZmF2b3JpdGUtaGVhcnQgLmhlYXJ0LWVtcHR5IHtcXG4gICAgb3BhY2l0eTogMTsgfVxcbiAgLmZhdm9yaXRlLWhlYXJ0LmZpbGxlZCAuaGVhcnQtZmlsbGVkIHtcXG4gICAgb3BhY2l0eTogMTsgfVxcbiAgLmZhdm9yaXRlLWhlYXJ0LmZpbGxlZCAuaGVhcnQtZW1wdHkge1xcbiAgICBvcGFjaXR5OiAwOyB9XFxuXFxuLmZpbHRlcnMtc2lkZWJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4OyB9XFxuICAuZmlsdGVycy1zaWRlYmFyID4gOm5vdCg6bGFzdC1jaGlsZCkge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4OyB9XFxuICAuZmlsdGVycy1zaWRlYmFyIGgzIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDsgfVxcbiAgLmZpbHRlcnMtc2lkZWJhcl9fZmllbGQtLXNlYXJjaCwgLmZpbHRlcnMtc2lkZWJhcl9fZmllbGQtLWNhdGVnb3JpZXMsIC5maWx0ZXJzLXNpZGViYXJfX2ZpZWxkLS1pbmdyZWRpZW50cyB7XFxuICAgIHBhZGRpbmc6IDEycHggOXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxN3B4OyB9XFxuICAuZmlsdGVycy1zaWRlYmFyX19maWVsZC0tY2F0ZWdvcmllcywgLmZpbHRlcnMtc2lkZWJhcl9fZmllbGQtLWluZ3JlZGllbnRzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAuZmlsdGVycy1zaWRlYmFyX19maWVsZC0tc2VhcmNoIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBjb2xvcjogIzNENDg1MjsgfVxcbiAgICAuZmlsdGVycy1zaWRlYmFyX19maWVsZC0tc2VhcmNoIGlucHV0IHtcXG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gMjZweCk7IH1cXG4gICAgLmZpbHRlcnMtc2lkZWJhcl9fZmllbGQtLXNlYXJjaCBidXR0b24ge1xcbiAgICAgIHdpZHRoOiAyMHB4OyB9XFxuICAuZmlsdGVycy1zaWRlYmFyX19maWVsZC0tY2F0ZWdvcmllcyB7XFxuICAgIGNvbG9yOiAjNzcyRTI1OyB9XFxuICAuZmlsdGVycy1zaWRlYmFyX19maWVsZC0taW5ncmVkaWVudHMge1xcbiAgICBjb2xvcjogIzI5NkVCNDsgfVxcblxcbi5jay1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1heC13aWR0aDogNjQwcHg7XFxuICBwYWRkaW5nOiAyMHB4IDMwcHggMzJweDtcXG4gIG1hcmdpbjogMCBhdXRvOyB9XFxuICAuY2stZm9ybV9fdGl0bGUsIC5jay1mb3JtX19pbmZvIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMzZweDsgfVxcbiAgLmNrLWZvcm1fX2luZm8ge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBsaW5lLWhlaWdodDogMjJweDsgfVxcbiAgLmNrLWZvcm1fX2ZpZWxkIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7IH1cXG4gIC5jay1mb3JtIC5jay1idG4ge1xcbiAgICBtYXJnaW4tdG9wOiAzNnB4OyB9XFxuICAuY2stZm9ybV9fY2hlY2tib3ggaW5wdXQge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDsgfVxcbiAgLmNrLWZvcm1fX2FkZGl0aW9uYWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7IH1cXG4gICAgLmNrLWZvcm1fX2FkZGl0aW9uYWwgPiAqIHtcXG4gICAgICBmb250LXdlaWdodDogYm9sZDsgfVxcbiAgICAgIC5jay1mb3JtX19hZGRpdGlvbmFsID4gKjpub3QoOmxhc3QtY2hpbGQpIHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7IH1cXG5cXG4uaG9tZS1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW4tYm90dG9tOiAxMjBweDsgfVxcblxcbi5wb3B1cCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nOiAzMnB4O1xcbiAgei1pbmRleDogMTAwMDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjM1LCAxNTAsIDUsIDAuOTUpO1xcbiAgb3BhY2l0eTogMDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgdHJhbnNpdGlvbjogYWxsIC4zczsgfVxcbiAgLnBvcHVwLm9wZW4ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBwb2ludGVyLWV2ZW50czogYWxsOyB9XFxuICAucG9wdXBfX2Nsb3NlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAzMnB4O1xcbiAgICByaWdodDogMzJweDtcXG4gICAgd2lkdGg6IDg0cHg7XFxuICAgIGhlaWdodDogODRweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAucG9wdXBfX2NvbnRlbnRfX3RpdGxlIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogI0ZGRjtcXG4gICAgbWFyZ2luLWJvdHRvbTogNDhweDsgfVxcbiAgLnBvcHVwX19jb250ZW50IC5zZWFyY2gtYmFyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDsgfVxcbiAgLnBvcHVwX19jb250ZW50X19zY3JvbGxhYmxlIHtcXG4gICAgcGFkZGluZy1yaWdodDogMjZweDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87IH1cXG4gICAgLnBvcHVwX19jb250ZW50X19zY3JvbGxhYmxlOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpOyB9XFxuICAgIC5wb3B1cF9fY29udGVudF9fc2Nyb2xsYWJsZTo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICAgIHdpZHRoOiA2cHg7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpOyB9XFxuICAgIC5wb3B1cF9fY29udGVudF9fc2Nyb2xsYWJsZTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7IH1cXG4gIC5wb3B1cC5zZWFyY2gtcG9wdXAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxcbiAgICAucG9wdXAuc2VhcmNoLXBvcHVwIC5wb3B1cF9fY29udGVudCB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cXG4gICAgICAucG9wdXAuc2VhcmNoLXBvcHVwIC5wb3B1cF9fY29udGVudCAudGl0bGUtY2FyZCB7XFxuICAgICAgICB3aWR0aDogMzIwcHg7XFxuICAgICAgICBoZWlnaHQ6IDE3MHB4OyB9XFxuICAucG9wdXAuY2F0ZWdvcnktcG9wdXAsIC5wb3B1cC5pbmdyZWRpZW50LXBvcHVwIHtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxcbiAgICAucG9wdXAuY2F0ZWdvcnktcG9wdXAgLnBvcHVwX19jb250ZW50LCAucG9wdXAuaW5ncmVkaWVudC1wb3B1cCAucG9wdXBfX2NvbnRlbnQge1xcbiAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICBwYWRkaW5nLXRvcDogMTUwcHg7IH1cXG4gICAgICAucG9wdXAuY2F0ZWdvcnktcG9wdXAgLnBvcHVwX19jb250ZW50X19zY3JvbGxhYmxlLCAucG9wdXAuaW5ncmVkaWVudC1wb3B1cCAucG9wdXBfX2NvbnRlbnRfX3Njcm9sbGFibGUge1xcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMjBweCk7IH1cXG5cXG4ucHJvZHVjdC1ncmlkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7IH1cXG4gIC5wcm9kdWN0LWdyaWQgPiAqIHtcXG4gICAgZmxleC1ncm93OiAwO1xcbiAgICBmbGV4LXNocmluazogMDtcXG4gICAgZmxleC1iYXNpczogY2FsYygxMDAlIC8gNCAtIDMgLyA0ICogMTRweCk7XFxuICAgIG1hcmdpbi1ib3R0b206IDE0cHg7IH1cXG4gICAgQG1lZGlhIGFsbCBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBub25lKSwgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpIHtcXG4gICAgICAucHJvZHVjdC1ncmlkID4gKiB7XFxuICAgICAgICBmbGV4LWJhc2lzOiBjYWxjKDEwMCUgLyA0IC0gMS4zICogMTRweCk7IH0gfVxcbiAgICAucHJvZHVjdC1ncmlkID4gKjpub3QoOm50aC1jaGlsZCg0bikpIHtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDE0cHg7IH1cXG4gIC5wcm9kdWN0LWdyaWRfX2l0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjsgfVxcbiAgICAucHJvZHVjdC1ncmlkX19pdGVtIC5mYXZvcml0ZS1oZWFydCB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogMTVweDtcXG4gICAgICByaWdodDogMTVweDtcXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzOyB9XFxuICAgICAgLnByb2R1Y3QtZ3JpZF9faXRlbSAuZmF2b3JpdGUtaGVhcnQ6aG92ZXIge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEyKTsgfVxcbiAgICAucHJvZHVjdC1ncmlkX19pdGVtX19kZXNjIHtcXG4gICAgICBoZWlnaHQ6IDgwcHg7IH1cXG4gICAgICAucHJvZHVjdC1ncmlkX19pdGVtX19kZXNjX190aXRsZSB7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMTNweDtcXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgICAgICBmb250LXNpemU6IDE4cHg7XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDsgfVxcbiAgICAgIC5wcm9kdWN0LWdyaWRfX2l0ZW1fX2Rlc2NfX2luZm8ge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEzcHg7IH1cXG4gICAgICAgIC5wcm9kdWN0LWdyaWRfX2l0ZW1fX2Rlc2NfX2luZm8gPiA6bm90KDpsYXN0LWNoaWxkKSB7XFxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDsgfVxcbiAgICAgICAgLnByb2R1Y3QtZ3JpZF9faXRlbV9fZGVzY19faW5mb19faXRlbSB7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDsgfVxcbiAgICAgICAgICAucHJvZHVjdC1ncmlkX19pdGVtX19kZXNjX19pbmZvX19pdGVtIGltZyB7XFxuICAgICAgICAgICAgd2lkdGg6IDE2cHg7XFxuICAgICAgICAgICAgaGVpZ2h0OiAxNnB4O1xcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNHB4OyB9XFxuICAgIC5wcm9kdWN0LWdyaWRfX2l0ZW1fX2ltZy1jb24ge1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGhlaWdodDogMjgwcHg7IH1cXG4gICAgLnByb2R1Y3QtZ3JpZF9faXRlbV9faW1nIHtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgb2JqZWN0LWZpdDogY292ZXI7IH1cXG5cXG4uc2VhcmNoLWJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDAgMjZweDtcXG4gIGhlaWdodDogNjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgd2lkdGg6IDU0MHB4O1xcbiAgbWF4LXdpZHRoOiAxMDAlOyB9XFxuICAuc2VhcmNoLWJhciBpbnB1dCB7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0NHB4KTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7IH1cXG4gICAgLnNlYXJjaC1iYXIgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gICAgICBjb2xvcjogIzYwNkY3QjsgfVxcbiAgLnNlYXJjaC1iYXIgaW1nIHtcXG4gICAgd2lkdGg6IDMycHg7IH1cXG5cXG4udGFibGUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItc3BhY2luZzogMDsgfVxcbiAgLnRhYmxlIHRoIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDsgfVxcbiAgLnRhYmxlIHRoLCAudGFibGUgdGQge1xcbiAgICBwYWRkaW5nOiA4cHggMTJweDsgfVxcbiAgLnRhYmxlIHRyOm50aC1jaGlsZChldmVuKSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGZhZmM7IH1cXG4gIC50YWJsZSB0cjpudGgtY2hpbGQob2RkKSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWYyZjY7IH1cXG5cXG4udGl0bGUtY2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMjRweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcbiAgLnRpdGxlLWNhcmQ6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgei1pbmRleDogLTE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zczsgfVxcbiAgLnRpdGxlLWNhcmQ6aG92ZXI6OmFmdGVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTsgfVxcbiAgLnRpdGxlLWNhcmQtZ3JvdXAge1xcbiAgICBkaXNwbGF5OiBmbGV4OyB9XFxuICAgIC50aXRsZS1jYXJkLWdyb3VwID4gOm5vdCg6bGFzdC1jaGlsZCkge1xcbiAgICAgIG1hcmdpbi1yaWdodDogMTRweDsgfVxcblxcbi51c2VyLXBhbmVscyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwOyB9XFxuICAudXNlci1wYW5lbHMgPiAqIHtcXG4gICAgZmxleC1ncm93OiAwO1xcbiAgICBmbGV4LXNocmluazogMDtcXG4gICAgZmxleC1iYXNpczogY2FsYygxMDAlIC8gNCAtIDMgLyA0ICogMTRweCk7XFxuICAgIG1hcmdpbi1ib3R0b206IDE0cHg7IH1cXG4gICAgQG1lZGlhIGFsbCBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBub25lKSwgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpIHtcXG4gICAgICAudXNlci1wYW5lbHMgPiAqIHtcXG4gICAgICAgIGZsZXgtYmFzaXM6IGNhbGMoMTAwJSAvIDQgLSAxLjMgKiAxNHB4KTsgfSB9XFxuICAgIC51c2VyLXBhbmVscyA+ICo6bm90KDpudGgtY2hpbGQoNG4pKSB7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiAxNHB4OyB9XFxuICAudXNlci1wYW5lbHNfX2l0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAyNTVweDtcXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuICAgIC51c2VyLXBhbmVsc19faXRlbSBzcGFuIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgY29sb3I6ICNGRkY7IH1cXG4gICAgLnVzZXItcGFuZWxzX19pdGVtIGltZyB7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgICAgdHJhbnNpdGlvbjogYWxsIC4zczsgfVxcbiAgICAudXNlci1wYW5lbHNfX2l0ZW06aG92ZXIgaW1nIHtcXG4gICAgICBvcGFjaXR5OiAuOTsgfVxcblxcbi5hZG1pbi1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7IH1cXG4gIC5hZG1pbi1oZWFkZXJfX3RpdGxlIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4OyB9XFxuXFxuLmNrLWNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAwIDE1cHg7IH1cXG5cXG4uY2stbmF2IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYmFja2dyb3VuZDogI0ZGRjtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4wMik7IH1cXG4gIC5jay1uYXYtaGVpZ2h0IHtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4OyB9XFxuICAuY2stbmF2X19sb2dvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcbiAgLmNrLW5hdl9fbGlua3Mge1xcbiAgICBkaXNwbGF5OiBmbGV4OyB9XFxuICAgIC5jay1uYXZfX2xpbmtzID4gOm5vdCg6bGFzdC1jaGlsZCkge1xcbiAgICAgIG1hcmdpbi1yaWdodDogMzJweDsgfVxcbiAgICAuY2stbmF2X19saW5rc19faXRlbSB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgICAgIC5jay1uYXZfX2xpbmtzX19pdGVtIGltZyB7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDZweDtcXG4gICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjYpIGdyYXlzY2FsZSgxKTtcXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuM3M7IH1cXG4gICAgICAuY2stbmF2X19saW5rc19faXRlbSA+IHNwYW4sIC5jay1uYXZfX2xpbmtzX19pdGVtID4gYSB7XFxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG4gICAgICAuY2stbmF2X19saW5rc19faXRlbS5hY3RpdmUgaW1nLCAuY2stbmF2X19saW5rc19faXRlbTpob3ZlciBpbWcge1xcbiAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDEpOyB9XFxuICAgICAgLmNrLW5hdl9fbGlua3NfX2l0ZW0uYWN0aXZlID4gc3BhbiwgLmNrLW5hdl9fbGlua3NfX2l0ZW0uYWN0aXZlID4gYSwgLmNrLW5hdl9fbGlua3NfX2l0ZW06aG92ZXIgPiBzcGFuLCAuY2stbmF2X19saW5rc19faXRlbTpob3ZlciA+IGEge1xcbiAgICAgICAgY29sb3I6ICNFQjk2MDU7IH1cXG5cXG4uZm9vdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDBweDtcXG4gIGJvdHRvbTogMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxNnB4O1xcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbGluZS1oZWlnaHQ6IDIycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGOyB9XFxuXFxuLnJlY2lwZXMtcGFnZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcbiAgLnJlY2lwZXMtcGFnZV9fbWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgfVxcbiAgLnJlY2lwZXMtcGFnZV9fc2lkZWJhciB7XFxuICAgIHdpZHRoOiAyNTVweDsgfVxcbiAgLnJlY2lwZXMtcGFnZV9fZ3JpZCB7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyODVweCk7IH1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiaW1wb3J0IHsgUG9wdXBDb250cm9sbGVyIH0gZnJvbSAnLi8uLi9jb21wb25lbnRzL3BvcHVwLWNvbnRyb2xsZXIvcG9wdXAtY29udHJvbGxlci5jbGFzcyc7XHJcbmltcG9ydCB7IFBvcHVwIH0gZnJvbSAnLi8uLi9jb21wb25lbnRzL3BvcHVwL3BvcHVwLmNsYXNzJztcclxuaW1wb3J0IHsgRmF2b3JpdGVIZWFydCB9IGZyb20gJy4vLi4vY29tcG9uZW50cy9mYXZvcml0ZS1oZWFydC9mYXZvcml0ZS1oZWFydC5jbGFzcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXBwe1xyXG4gIGNvbnN0cnVjdG9yKCl7XHJcbiAgICB0aGlzLmluaXQoKTtcclxuICB9IFxyXG5cclxuICBpbml0KCl7XHJcbiAgICB0aGlzLnNldHVwUG9wdXBzKCk7XHJcbiAgICB0aGlzLnNldHVwRmF2b3JpdGVzKCk7XHJcbiAgfVxyXG5cclxuICBzZXR1cEZhdm9yaXRlcygpIHtcclxuICAgIGNvbnN0IGhlYXJ0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mYXZvcml0ZS1oZWFydCcpO1xyXG4gICAgaGVhcnRzLmZvckVhY2goaGVhcnQgPT4gbmV3IEZhdm9yaXRlSGVhcnQoaGVhcnQgYXMgSFRNTEVsZW1lbnQsIGZhbHNlKSk7XHJcbiAgfVxyXG5cclxuICBzZXR1cFBvcHVwcygpe1xyXG4gICAgY29uc3QgcG9wdXBBcnIgPSBbXTtcclxuXHJcbiAgICAvL0NoZWNrIGlmIHBvcHVwIGV4aXN0c1xyXG4gICAgY29uc3Qgc2VhcmNoUG9wdXBFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtcG9wdXAnKTtcclxuICAgIGlmKHNlYXJjaFBvcHVwRWwpe1xyXG4gICAgICBjb25zdCBzZWFyY2hQb3B1cCA9IG5ldyBQb3B1cCh7XHJcbiAgICAgICAgcG9wdXBFbGVtZW50SWQ6ICdzZWFyY2gtcG9wdXAnLFxyXG4gICAgICAgIG9wZW5lcnNRdWVyeVNlbGVjdG9yOiAnLm9wZW4tc2VhcmNoLXBvcHVwJyxcclxuICAgICAgICBjbG9zZXJzUXVlcnlTZWxlY3RvcjogJy5jbG9zZS1zZWFyY2gtcG9wdXAnXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICBwb3B1cEFyci5wdXNoKHNlYXJjaFBvcHVwKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjYXRlZ29yeVBvcHVwRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2F0ZWdvcnktcG9wdXAnKTtcclxuICAgIGlmKGNhdGVnb3J5UG9wdXBFbCl7XHJcbiAgICAgIGNvbnN0IGNhdGVnb3J5UG9wdXAgPSBuZXcgUG9wdXAoe1xyXG4gICAgICAgIHBvcHVwRWxlbWVudElkOiAnY2F0ZWdvcnktcG9wdXAnLFxyXG4gICAgICAgIG9wZW5lcnNRdWVyeVNlbGVjdG9yOiAnLm9wZW4tY2F0ZWdvcnktcG9wdXAnLFxyXG4gICAgICAgIGNsb3NlcnNRdWVyeVNlbGVjdG9yOiAnLmNsb3NlLWNhdGVnb3J5LXBvcHVwJ1xyXG4gICAgICB9KVxyXG5cclxuICAgICAgcG9wdXBBcnIucHVzaChjYXRlZ29yeVBvcHVwKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbmdyZWRpZW50UG9wdXBFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXRlZ29yeS1wb3B1cCcpO1xyXG4gICAgaWYoaW5ncmVkaWVudFBvcHVwRWwpe1xyXG4gICAgICBjb25zdCBpbmdyZWRpZW50UG9wdXAgPSBuZXcgUG9wdXAoe1xyXG4gICAgICAgIHBvcHVwRWxlbWVudElkOiAnaW5ncmVkaWVudC1wb3B1cCcsXHJcbiAgICAgICAgb3BlbmVyc1F1ZXJ5U2VsZWN0b3I6ICcub3Blbi1pbmdyZWRpZW50LXBvcHVwJyxcclxuICAgICAgICBjbG9zZXJzUXVlcnlTZWxlY3RvcjogJy5jbG9zZS1pbmdyZWRpZW50LXBvcHVwJ1xyXG4gICAgICB9KVxyXG5cclxuICAgICAgcG9wdXBBcnIucHVzaChpbmdyZWRpZW50UG9wdXApO1xyXG4gICAgfVxyXG5cclxuICAgIG5ldyBQb3B1cENvbnRyb2xsZXIocG9wdXBBcnIpO1xyXG4gIH1cclxufSIsImV4cG9ydCBjbGFzcyBGYXZvcml0ZUhlYXJ0e1xyXG4gIGVsOiBIVE1MRWxlbWVudDtcclxuICBmaWxsZWQ6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKGVsOiBIVE1MRWxlbWVudCwgY2hlY2tlZCA9IGZhbHNlKSB7XHJcbiAgICAgIHRoaXMuZWwgPSBlbDtcclxuICAgICAgdGhpcy5maWxsZWQgPSBjaGVja2VkO1xyXG4gICAgICB0aGlzLmluaXQoKTtcclxuICB9XHJcblxyXG4gIGluaXQoKXtcclxuICAgIHRoaXMuc2V0dXBGaWxsaW5nKCk7XHJcbiAgfVxyXG5cclxuICBzZXR1cEZpbGxpbmcoKXtcclxuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGlmKCF0aGlzLmZpbGxlZCl7XHJcbiAgICAgICAgdGhpcy5hZGRUb0Zhdm9yaXRlcygpO1xyXG4gICAgICAgIHRoaXMuZmlsbEhlYXJ0KCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVGcm9tRmF2b3JpdGVzKCk7XHJcbiAgICAgICAgdGhpcy5lbXB0eUhlYXJ0KCk7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBmaWxsSGVhcnQoKXtcclxuICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnZmlsbGVkJyk7XHJcbiAgICB0aGlzLmZpbGxlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBlbXB0eUhlYXJ0KCl7XHJcbiAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ2ZpbGxlZCcpO1xyXG4gICAgdGhpcy5maWxsZWQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGFkZFRvRmF2b3JpdGVzKCl7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIHJlbW92ZUZyb21GYXZvcml0ZXMoKXtcclxuXHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgUG9wdXAgfSBmcm9tICcuLi9wb3B1cC9wb3B1cC5jbGFzcyc7XHJcblxyXG4vKipcclxuICogV2F0Y2hlcyBwb3B1cHMgYW5kLCB3aGVuIGEgcG9wdXAgb3BlbnMsIGl0IGNsb3NlcyB0aGUgb3RoZXIgdW5uZWNjZXNzYXJ5IHBvcHVwcyBzbyB0aGV5IGRvbid0IHN0YWNrXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUG9wdXBDb250cm9sbGVye1xyXG4gIHBvcHVwczogUG9wdXBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IocG9wdXBzOiBQb3B1cFtdKXtcclxuICAgIHRoaXMucG9wdXBzID0gcG9wdXBzO1xyXG5cclxuICAgIHRoaXMuaW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpe1xyXG4gICAgdGhpcy53YXRjaFBvcHVwcygpO1xyXG4gIH1cclxuXHJcbiAgd2F0Y2hQb3B1cHMoKXtcclxuICAgIHRoaXMucG9wdXBzLmZvckVhY2gocG9wdXAgPT4ge1xyXG4gICAgICBwb3B1cC5iZWZvcmVPcGVuID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuY2xvc2VPdGhlclBvcHVwcyhwb3B1cCk7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjbG9zZU90aGVyUG9wdXBzKGN1cnJlbnRQb3B1cDogUG9wdXApe1xyXG4gICAgdGhpcy5wb3B1cHMuZm9yRWFjaChwb3B1cCA9PiB7XHJcbiAgICAgIGlmKHBvcHVwICE9PSBjdXJyZW50UG9wdXApe1xyXG4gICAgICAgIHBvcHVwLmNsb3NlKCk7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG59IiwiZXhwb3J0IGludGVyZmFjZSBJUG9wdXBEYXRhe1xyXG4gIHBvcHVwRWxlbWVudElkOiBzdHJpbmcsXHJcbiAgb3BlbmVyc1F1ZXJ5U2VsZWN0b3I6IHN0cmluZyxcclxuICBjbG9zZXJzUXVlcnlTZWxlY3Rvcjogc3RyaW5nLFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUG9wdXB7XHJcbiAgcG9wdXA6IEhUTUxFbGVtZW50O1xyXG4gIG9wZW5lcnM6IEhUTUxFbGVtZW50W107XHJcbiAgY2xvc2VyczogSFRNTEVsZW1lbnRbXTtcclxuICBiZWZvcmVPcGVuOiBGdW5jdGlvbjtcclxuXHJcbiAgY29uc3RydWN0b3IoZGF0YTogSVBvcHVwRGF0YSl7XHJcbiAgICB0aGlzLnBvcHVwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGF0YS5wb3B1cEVsZW1lbnRJZCk7XHJcbiAgICB0aGlzLm9wZW5lcnMgPSBbLi4uIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZGF0YS5vcGVuZXJzUXVlcnlTZWxlY3RvcikgYXMgTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4gXTtcclxuICAgIHRoaXMuY2xvc2VycyA9IFsuLi4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChkYXRhLmNsb3NlcnNRdWVyeVNlbGVjdG9yKSBhcyBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PiBdO1xyXG5cclxuICAgIHRoaXMuaW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpe1xyXG4gICAgdGhpcy5zZXR1cE9wZW5lcnMoKTtcclxuICAgIHRoaXMuc2V0dXBDbG9zZXJzKCk7XHJcbiAgfVxyXG5cclxuICBzZXR1cE9wZW5lcnMoKXtcclxuICAgIHRoaXMub3BlbmVycy5mb3JFYWNoKG9wZW5lciA9PiB7IFxyXG4gICAgICBvcGVuZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5vcGVuKCk7XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgc2V0dXBDbG9zZXJzKCl7XHJcbiAgICB0aGlzLmNsb3NlcnMuZm9yRWFjaChjbG9zZXIgPT4geyBcclxuICAgICAgY2xvc2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBvcGVuKCl7XHJcbiAgICB0aGlzLmJlZm9yZU9wZW4oKTtcclxuICAgIHRoaXMucG9wdXAuY2xhc3NMaXN0LmFkZCgnb3BlbicpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaHRtbCcpLmNsYXNzTGlzdC5hZGQoJ25vLXNjcm9sbCcpO1xyXG4gIH1cclxuXHJcbiAgY2xvc2UoKXtcclxuICAgIHRoaXMucG9wdXAuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaHRtbCcpLmNsYXNzTGlzdC5yZW1vdmUoJ25vLXNjcm9sbCcpO1xyXG4gIH1cclxufSIsImltcG9ydCB7IEFwcCB9IGZyb20gJy4vYXBwL2FwcC5jbGFzcyc7XHJcbmltcG9ydCAnLi4vc2Nzcy9tYWluLnNjc3MnO1xyXG5cclxubmV3IEFwcCgpOyJdLCJzb3VyY2VSb290IjoiIn0=