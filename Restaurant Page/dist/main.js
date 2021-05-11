/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction contactPage() {\n\tconst element = document.createElement(\"div\");\n\telement.setAttribute(\"id\", \"img-container\");\n\n\telement.innerHTML = `\n    <img class=\"img-fluid mt-5\" src=\"../images/contact.jpg\" alt=\"Contact\">\n    \n    <p class=\"text mt-5\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro facere ea deleniti perspiciatis odio consectetur!</p>\n  `;\n\n\treturn element;\n}\n\nconst loadContact = () => {\n\tconst main = document.getElementById(\"main\");\n\tconst imgContainer = document.getElementById(\"img-container\");\n\tconst homeBtn = document.getElementById(\"home-btn\");\n\tconst menuBtn = document.getElementById(\"menu-btn\");\n\tconst contactBtn = document.getElementById(\"contact-btn\");\n\n\thomeBtn.classList.remove(\"active\");\n\tmenuBtn.classList.remove(\"active\");\n\tcontactBtn.classList.add(\"active\");\n\tmain.removeChild(imgContainer);\n\tmain.appendChild(contactPage());\n\n\tconsole.log(\"contact btn works\");\n\treturn \"contact btn works\";\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);\n\n\n//# sourceURL=webpack:///./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction homePage() {\n\tconst element = document.createElement(\"div\");\n\telement.setAttribute(\"id\", \"img-container\");\n\n\telement.innerHTML = `\n  <img class=\"img-fluid mt-5\" src=\"../images/restaurant.jpg\" alt=\"Restaurant\">\n  \n  <p class=\"text mt-5\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro facere ea deleniti perspiciatis odio consectetur!</p>\n`;\n\n\treturn element;\n}\n\nconst loadHome = () => {\n\tconst main = document.getElementById(\"main\");\n\tconst imgContainer = document.getElementById(\"img-container\");\n\tconst homeBtn = document.getElementById(\"home-btn\");\n\tconst menuBtn = document.getElementById(\"menu-btn\");\n\tconst contactBtn = document.getElementById(\"contact-btn\");\n\n\tcontactBtn.classList.remove(\"active\");\n\tmenuBtn.classList.remove(\"active\");\n\thomeBtn.classList.add(\"active\");\n\tmain.removeChild(imgContainer);\n\tmain.appendChild(homePage());\n\n\tconsole.log(\"home btn works\");\n\treturn \"home btn works\";\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n\n//# sourceURL=webpack:///./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _initial_page_load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initial-page-load.js */ \"./src/initial-page-load.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n\n\n\n\n\n\n\nconst content = document.getElementById(\"content\");\ncontent.appendChild((0,_initial_page_load_js__WEBPACK_IMPORTED_MODULE_0__.default)());\n\nconst homeBtn = document.getElementById(\"home-btn\");\nconst menuBtn = document.getElementById(\"menu-btn\");\nconst contactBtn = document.getElementById(\"contact-btn\");\nhomeBtn.addEventListener(\"click\", _home_js__WEBPACK_IMPORTED_MODULE_3__.default);\nmenuBtn.addEventListener(\"click\", _menu_js__WEBPACK_IMPORTED_MODULE_1__.default);\ncontactBtn.addEventListener(\"click\", _contact_js__WEBPACK_IMPORTED_MODULE_2__.default);\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/initial-page-load.js":
/*!**********************************!*\
  !*** ./src/initial-page-load.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initialPageLoad\": () => (/* binding */ initialPageLoad),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction initialPageLoad() {\n\tconst element = document.createElement(\"div\");\n\tconst title = document.createElement(\"h1\");\n\t// element.setAttribute(\"class\", \"nav\");\n\telement.setAttribute(\"id\", \"current-section\");\n\n  // title.innerHTML = `<h1 class=\"title\">My Restaurant</h1>`;\n\n\telement.innerHTML = `\n  <header>\n    <h1 class=\"title\">My Restaurant</h1>\n\n    <ul class=\"nav nav-tabs justify-content-end\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link active\" id=\"home-btn\" aria-current=\"page\" href=\"#\">Home</a>\n      </li>\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link\" id=\"menu-btn\" data-bs-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-expanded=\"false\">Menu</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" id=\"contact-btn\" href=\"#\">Contact Us</a>\n      </li>\n    </ul>\n  </header>\n    \n  <main id=\"main\">\n    <div id=\"img-container\">\n      <img class=\"img-fluid mt-5\" src=\"../images/restaurant.jpg\" alt=\"Restaurant\">\n      \n      <p class=\"text mt-5\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro facere ea deleniti perspiciatis odio consectetur!</p>\n    </div>\n  </main>\n  `;\n\n\treturn element;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialPageLoad);\n\n//# sourceURL=webpack:///./src/initial-page-load.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction menuPage() {\n\tconst element = document.createElement(\"div\");\n\telement.setAttribute(\"id\", \"img-container\");\n\n\telement.innerHTML = `\n    <img class=\"img-fluid mt-5\" src=\"../images/menu.jpg\" alt=\"Menu\">\n    \n    <p class=\"text mt-5\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro facere ea deleniti perspiciatis odio consectetur!</p>\n  `;\n\n\treturn element;\n}\n\nconst loadMenu = () => {\n\tconst main = document.getElementById(\"main\");\n\tconst imgContainer = document.getElementById(\"img-container\");\n\tconst homeBtn = document.getElementById(\"home-btn\");\n\tconst menuBtn = document.getElementById(\"menu-btn\");\n\tconst contactBtn = document.getElementById(\"contact-btn\");\n\n\thomeBtn.classList.remove(\"active\");\n\tcontactBtn.classList.remove(\"active\");\n\tmenuBtn.classList.add(\"active\");\n\tmain.removeChild(imgContainer);\n\tmain.appendChild(menuPage());\n\n\tconsole.log(\"menu btn works\");\n\treturn \"menu btn works\";\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n\n//# sourceURL=webpack:///./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;