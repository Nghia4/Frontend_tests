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

/***/ "./client/components/App/index.js":
/*!****************************************!*\
  !*** ./client/components/App/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react */ \"mobx-react\");\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _stores_rootstore_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../stores/rootstore.js */ \"./stores/rootstore.js\");\n/* harmony import */ var _routers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../routers */ \"./routers/index.js\");\n\n\n\n\n\nfunction App() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(mobx_react__WEBPACK_IMPORTED_MODULE_2__.Provider, _stores_rootstore_js__WEBPACK_IMPORTED_MODULE_3__.rootStore, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_routers__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null));\n}\n\n//# sourceURL=webpack://tryagain/./client/components/App/index.js?");

/***/ }),

/***/ "./components/Button/Button.js":
/*!*************************************!*\
  !*** ./components/Button/Button.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nvar Button = function Button(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    onClick: props.onClick,\n    className: props.className,\n    \"data-active\": props.active\n  }, props.number);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);\n\n//# sourceURL=webpack://tryagain/./components/Button/Button.js?");

/***/ }),

/***/ "./components/Row/Row.js":
/*!*******************************!*\
  !*** ./components/Row/Row.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nvar Row = function Row(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: props.className\n  }, props.children);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Row);\n\n//# sourceURL=webpack://tryagain/./components/Row/Row.js?");

/***/ }),

/***/ "./pages/Calculator/Calculator.js":
/*!****************************************!*\
  !*** ./pages/Calculator/Calculator.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Button_Button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Button/Button.js */ \"./components/Button/Button.js\");\n/* harmony import */ var _components_Row_Row_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Row/Row.js */ \"./components/Row/Row.js\");\n\n\n\nfunction Calculator() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"calculator-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"calculator-table\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"calculator-screen\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"icon\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"icon-red\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"icon-yellow\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"icon-green\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"calculator-screen-display\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"screen-display-number\"\n  }, \"0\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"calculator-button\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Row_Row_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    className: 'calculator-button-row'\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Button_Button_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    className: 'special-button',\n    number: 'AC'\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Button_Button_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    className: 'special-button',\n    number: '+/-'\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Button_Button_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    className: 'special-button',\n    number: '%'\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Button_Button_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    className: 'operation-button',\n    number: '/'\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Row_Row_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    className: 'calculator-button-row'\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Button_Button_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    className: 'number-button',\n    number: '7'\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Button_Button_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    className: 'number-button',\n    number: '8'\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Button_Button_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    className: 'number-button',\n    number: '9'\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Button_Button_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    className: 'operation-button',\n    number: 'x'\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Row_Row_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    className: 'calculator-button-row'\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Button_Button_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    className: 'number-button',\n    number: '4'\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Button_Button_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    className: 'number-button',\n    number: '5'\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Button_Button_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    className: 'number-button',\n    number: '6'\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Button_Button_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    className: 'operation-button',\n    number: '-'\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Row_Row_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    className: 'calculator-button-row'\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Button_Button_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    className: 'number-button',\n    number: '1'\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Button_Button_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    className: 'number-button',\n    number: '2'\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Button_Button_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    className: 'number-button',\n    number: '3'\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Button_Button_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    className: 'operation-button',\n    number: '+'\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Row_Row_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    className: 'calculator-button-row'\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Button_Button_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    className: 'number-button zero',\n    number: '0'\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Button_Button_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    className: 'special-button comma',\n    number: '.'\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Button_Button_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    className: 'equal-button',\n    number: '='\n  })))));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Calculator);\n\n//# sourceURL=webpack://tryagain/./pages/Calculator/Calculator.js?");

/***/ }),

/***/ "./routers/index.js":
/*!**************************!*\
  !*** ./routers/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _routerPath_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routerPath.js */ \"./routers/routerPath.js\");\n/* harmony import */ var _client_components_App_style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../client/components/App/style.scss */ \"./client/components/App/style.scss\");\n/* harmony import */ var _pages_Calculator_Calculator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/Calculator/Calculator.js */ \"./pages/Calculator/Calculator.js\");\n\n\n\n\n\nfunction Router() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Route, {\n    path: _routerPath_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].home.value,\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n      className: \"myapp\"\n    }, \"Hello World\")\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Route, {\n    path: _routerPath_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].calculator.value,\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_pages_Calculator_Calculator_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null)\n  }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Router);\n\n//# sourceURL=webpack://tryagain/./routers/index.js?");

/***/ }),

/***/ "./routers/routerPath.js":
/*!*******************************!*\
  !*** ./routers/routerPath.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar routerPath = {\n  home: {\n    value: '/'\n  },\n  calculator: {\n    value: '/calculator'\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routerPath);\n\n//# sourceURL=webpack://tryagain/./routers/routerPath.js?");

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom/server */ \"react-router-dom/server\");\n/* harmony import */ var react_router_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom_server__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _client_components_App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../client/components/App */ \"./client/components/App/index.js\");\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_2___default()();\nvar port = 3000;\napp.get('*', function (req, res) {\n  var jsx = react_dom_server__WEBPACK_IMPORTED_MODULE_1___default().renderToString(\n  /*#__PURE__*/\n  // [A]\n  react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom_server__WEBPACK_IMPORTED_MODULE_3__.StaticRouter, {\n    location: req.url\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_client_components_App__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null)));\n  var clientBundleScript = \"<script src=\\\"http://localhost:8080/scripts/bundle.js\\\"></script>\"; // [B]\n  var clientBundleStyle = \"<link rel=\\\"stylesheet\\\" href=\\\"http://localhost:8080/styles/bundle.css\\\">\"; // [B]\n\n  res.send(\"\\n        <!DOCTYPE html>\\n        <html lang=\\\"en\\\">\\n            <head>\\n                <meta charset=\\\"UTF-8\\\">\\n                <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n                <title>My SSR App</title>\\n                \".concat(clientBundleStyle, \" <!-- [B] -->\\n            </head>\\n            <body>\\n                <div id='ssr-app'>\").concat(jsx, \"</div> <!-- [A] -->\\n                \").concat(clientBundleScript, \" <!-- [B] -->\\n            </body>\\n        </html>\\n    \"));\n});\napp.listen(port, function () {\n  console.log(\"App listening on http://localhost:\".concat(port));\n});\n\n//# sourceURL=webpack://tryagain/./server/index.js?");

/***/ }),

/***/ "./stores/rootstore.js":
/*!*****************************!*\
  !*** ./stores/rootstore.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RootStore\": () => (/* binding */ RootStore),\n/* harmony export */   \"rootStore\": () => (/* binding */ rootStore)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nvar RootStore = /*#__PURE__*/_createClass(function RootStore() {\n  _classCallCheck(this, RootStore);\n});\nvar rootStore = new RootStore();\n\n//# sourceURL=webpack://tryagain/./stores/rootstore.js?");

/***/ }),

/***/ "./client/components/App/style.scss":
/*!******************************************!*\
  !*** ./client/components/App/style.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://tryagain/./client/components/App/style.scss?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "mobx-react":
/*!*****************************!*\
  !*** external "mobx-react" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("mobx-react");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-router-dom");

/***/ }),

/***/ "react-router-dom/server":
/*!******************************************!*\
  !*** external "react-router-dom/server" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("react-router-dom/server");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./server/index.js");
/******/ 	
/******/ })()
;