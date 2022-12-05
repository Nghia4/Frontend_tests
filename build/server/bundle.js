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

/***/ "./components/CalculateLine/Calculateline.js":
/*!***************************************************!*\
  !*** ./components/CalculateLine/Calculateline.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nvar CalculateLine = function CalculateLine(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: props.className\n  }, props.item);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CalculateLine);\n\n//# sourceURL=webpack://tryagain/./components/CalculateLine/Calculateline.js?");

/***/ }),

/***/ "./components/Row/Row.js":
/*!*******************************!*\
  !*** ./components/Row/Row.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nvar Row = function Row(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: props.className\n  }, props.children);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Row);\n\n//# sourceURL=webpack://tryagain/./components/Row/Row.js?");

/***/ }),

/***/ "./context/rootStoreContext.js":
/*!*************************************!*\
  !*** ./context/rootStoreContext.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"rootStoreContext\": () => (/* binding */ rootStoreContext),\n/* harmony export */   \"useStores\": () => (/* binding */ useStores)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _stores_rootstore_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stores/rootstore.js */ \"./stores/rootstore.js\");\n\n\nvar rootStoreContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(_stores_rootstore_js__WEBPACK_IMPORTED_MODULE_1__.rootStore);\nvar useStores = function useStores() {\n  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(rootStoreContext);\n};\n\n//# sourceURL=webpack://tryagain/./context/rootStoreContext.js?");

/***/ }),

/***/ "./pages/Calculator/Calculator.js":
/*!****************************************!*\
  !*** ./pages/Calculator/Calculator.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Button_Button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Button/Button.js */ \"./components/Button/Button.js\");\n/* harmony import */ var _components_Row_Row_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Row/Row.js */ \"./components/Row/Row.js\");\n/* harmony import */ var _utils_utility_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/utility.js */ \"./utils/utility.js\");\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx-react */ \"mobx-react\");\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _context_rootStoreContext_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../context/rootStoreContext.js */ \"./context/rootStoreContext.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : \"undefined\" != typeof Symbol && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i[\"return\"] && (_r = _i[\"return\"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\nfunction Calculator() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('0'),\n    _useState2 = _slicedToArray(_useState, 2),\n    screenNumber = _useState2[0],\n    setScreenNumber = _useState2[1];\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),\n    _useState4 = _slicedToArray(_useState3, 2),\n    operator = _useState4[0],\n    setOperator = _useState4[1];\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),\n    _useState6 = _slicedToArray(_useState5, 2),\n    percent = _useState6[0],\n    setPercent = _useState6[1];\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(-1),\n    _useState8 = _slicedToArray(_useState7, 2),\n    replaceNumberIndex = _useState8[0],\n    setReplaceNumberIndex = _useState8[1];\n  var _useStores = (0,_context_rootStoreContext_js__WEBPACK_IMPORTED_MODULE_5__.useStores)(),\n    calculateStore = _useStores.calculateStore;\n  var expression = calculateStore.expression;\n\n  // screenNumber become normal when click outside\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    document.addEventListener('mousedown', function (event) {\n      if (!event.target.classList.contains('number-button')) {\n        setReplaceNumberIndex(-1);\n      }\n    });\n    return function () {\n      document.removeEventListener('mousedown', function (event) {\n        if (!event.target.classList.contains('number-button')) {\n          setReplaceNumberIndex(-1);\n        }\n      });\n    };\n  }, []);\n  function inputNumber(event) {\n    var number = event.target.innerText;\n    if (expression === '') {\n      if (number === '0') {\n        return;\n      }\n      setScreenNumber(number);\n      if (operator === '-' && number !== '0') {\n        calculateStore.setExpression('-' + number);\n      } else {\n        calculateStore.setExpression(number);\n      }\n    }\n    if (expression !== '') {\n      if (operator !== '') {\n        setScreenNumber(number);\n      } else {\n        setScreenNumber(screenNumber + number);\n      }\n      calculateStore.setExpression(expression + operator + number);\n      setOperator('');\n    }\n    if (replaceNumberIndex !== -1) {\n      var newInput = (0,_utils_utility_js__WEBPACK_IMPORTED_MODULE_3__.replaceNumber)(screenNumber, replaceNumberIndex, number); // change number on screen by using substr\n      //get new expression when changing number after click operator\n      var newExpression = (0,_utils_utility_js__WEBPACK_IMPORTED_MODULE_3__.replaceNumber)(expression, expression.length - screenNumber.length + replaceNumberIndex, number);\n      console.log(screenNumber, replaceNumberIndex, number);\n      console.log(expression, expression.length, screenNumber.length, replaceNumberIndex, number, newExpression);\n      setScreenNumber(newInput);\n      calculateStore.setExpression(newExpression);\n      setReplaceNumberIndex(-1);\n      return;\n    }\n  }\n  function resetToZero(event) {\n    event.target.innerText = 'AC';\n    setScreenNumber('0');\n    calculateStore.setExpression('');\n    setOperator('');\n  }\n  function operationCalculator(event) {\n    setOperator(event.target.innerText);\n  }\n  function calculateExpression() {\n    var formatExpression = expression.replace(/^0+/, '').replace(/x/g, '*');\n    setOperator('');\n    if (formatExpression === '') {\n      setScreenNumber('0');\n      return;\n    }\n    var result = eval(formatExpression).toString();\n    setScreenNumber(result);\n    calculateStore.setExpression(result === '0' ? '' : result);\n    (0,_utils_utility_js__WEBPACK_IMPORTED_MODULE_3__.storeExpressionToHistory)(formatExpression + '=' + result);\n  }\n  function handleScreenClick(index) {\n    setOperator('');\n    setReplaceNumberIndex(index);\n  }\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"calculator-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"calculator-table\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"calculator-screen\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"icon\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"icon-red\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"icon-yellow\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"icon-green\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"calculator-screen-display\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"screen-display-number\"\n  }, screenNumber.split('').map(function (number, index) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n      className: \"display-number\",\n      value: number,\n      key: index,\n      readOnly: true,\n      onClick: function onClick() {\n        return handleScreenClick(index);\n      }\n    });\n  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"calculator-button\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Row_Row_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    className: 'calculator-button-row'\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Button_Button_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    className: 'special-button',\n    number: 'AC',\n    onClick: resetToZero\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Button_Button_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    className: 'special-button',\n    number: '+/-'\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Button_Button_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    className: 'special-button',\n    number: '%',\n    active: percent === '%'\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Button_Button_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    className: 'operation-button',\n    number: '/',\n    active: operator === '/',\n    onClick: operationCalculator\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Row_Row_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    className: 'calculator-button-row'\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Button_Button_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    className: 'number-button',\n    number: '7',\n    onClick: inputNumber\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Button_Button_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    className: 'number-button',\n    number: '8',\n    onClick: inputNumber\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Button_Button_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    className: 'number-button',\n    number: '9',\n    onClick: inputNumber\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Button_Button_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    className: 'operation-button',\n    number: 'x',\n    active: operator === 'x',\n    onClick: operationCalculator\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Row_Row_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    className: 'calculator-button-row'\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Button_Button_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    className: 'number-button',\n    number: '4',\n    onClick: inputNumber\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Button_Button_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    className: 'number-button',\n    number: '5',\n    onClick: inputNumber\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Button_Button_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    className: 'number-button',\n    number: '6',\n    onClick: inputNumber\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Button_Button_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    className: 'operation-button',\n    number: '-',\n    active: operator === '-',\n    onClick: operationCalculator\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Row_Row_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    className: 'calculator-button-row'\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Button_Button_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    className: 'number-button',\n    number: '1',\n    onClick: inputNumber\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Button_Button_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    className: 'number-button',\n    number: '2',\n    onClick: inputNumber\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Button_Button_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    className: 'number-button',\n    number: '3',\n    onClick: inputNumber\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Button_Button_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    className: 'operation-button',\n    number: '+',\n    active: operator === '+',\n    onClick: operationCalculator\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Row_Row_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    className: 'calculator-button-row'\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Button_Button_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    className: 'number-button zero',\n    number: '0',\n    onClick: inputNumber\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Button_Button_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    className: 'special-button comma',\n    number: ','\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Button_Button_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    className: 'equal-button',\n    number: '=',\n    onClick: calculateExpression\n  })))));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,mobx_react__WEBPACK_IMPORTED_MODULE_4__.observer)(Calculator));\n\n//# sourceURL=webpack://tryagain/./pages/Calculator/Calculator.js?");

/***/ }),

/***/ "./pages/History/History.js":
/*!**********************************!*\
  !*** ./pages/History/History.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ShowHistory_ShowHistory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShowHistory/ShowHistory */ \"./pages/History/ShowHistory/ShowHistory.js\");\n\n\nfunction History() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ShowHistory_ShowHistory__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (History);\n\n//# sourceURL=webpack://tryagain/./pages/History/History.js?");

/***/ }),

/***/ "./pages/History/ShowHistory/ShowHistory.js":
/*!**************************************************!*\
  !*** ./pages/History/ShowHistory/ShowHistory.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_rootStoreContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../context/rootStoreContext.js */ \"./context/rootStoreContext.js\");\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react */ \"mobx-react\");\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_CalculateLine_Calculateline_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/CalculateLine/Calculateline.js */ \"./components/CalculateLine/Calculateline.js\");\n\n\n\n\n\nfunction ShowHistory() {\n  var _useStores = (0,_context_rootStoreContext_js__WEBPACK_IMPORTED_MODULE_1__.useStores)(),\n    historyStore = _useStores.historyStore;\n  var history = historyStore.history;\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    historyStore.getHistoryItem();\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"history-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"history-title\"\n  }, \"Calculator List\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"history-list\"\n  }, history.map(function (item, index) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"history-list-row\",\n      key: index\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_CalculateLine_Calculateline_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      className: 'list',\n      item: item\n    }));\n  })));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,mobx_react__WEBPACK_IMPORTED_MODULE_2__.observer)(ShowHistory));\n\n//# sourceURL=webpack://tryagain/./pages/History/ShowHistory/ShowHistory.js?");

/***/ }),

/***/ "./routers/index.js":
/*!**************************!*\
  !*** ./routers/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _routerPath_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routerPath.js */ \"./routers/routerPath.js\");\n/* harmony import */ var _client_components_App_style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../client/components/App/style.scss */ \"./client/components/App/style.scss\");\n/* harmony import */ var _pages_Calculator_Calculator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/Calculator/Calculator.js */ \"./pages/Calculator/Calculator.js\");\n/* harmony import */ var _pages_History_History_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/History/History.js */ \"./pages/History/History.js\");\n\n\n\n\n\n\nfunction Router() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Route, {\n    path: _routerPath_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].home.value,\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n      className: \"myapp\"\n    }, \"Hello World\")\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Route, {\n    path: _routerPath_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].calculator.value,\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_pages_Calculator_Calculator_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Route, {\n    path: _routerPath_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].history.value,\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_pages_History_History_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null)\n  }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Router);\n\n//# sourceURL=webpack://tryagain/./routers/index.js?");

/***/ }),

/***/ "./routers/routerPath.js":
/*!*******************************!*\
  !*** ./routers/routerPath.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar routerPath = {\n  home: {\n    value: '/'\n  },\n  calculator: {\n    value: '/calculator'\n  },\n  history: {\n    value: '/history'\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routerPath);\n\n//# sourceURL=webpack://tryagain/./routers/routerPath.js?");

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom/server */ \"react-router-dom/server\");\n/* harmony import */ var react_router_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom_server__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _client_components_App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../client/components/App */ \"./client/components/App/index.js\");\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_2___default()();\nvar port = 3000;\napp.get('*', function (req, res) {\n  var jsx = react_dom_server__WEBPACK_IMPORTED_MODULE_1___default().renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom_server__WEBPACK_IMPORTED_MODULE_3__.StaticRouter, {\n    location: req.url\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_client_components_App__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null)));\n  var clientBundleScript = \"<script src=\\\"http://localhost:8080/scripts/bundle.js\\\"></script>\";\n  var clientBundleStyle = \"<link rel=\\\"stylesheet\\\" href=\\\"http://localhost:8080/styles/bundle.css\\\">\";\n  res.send(\"\\n        <!DOCTYPE html>\\n        <html lang=\\\"en\\\">\\n            <head>\\n                <meta charset=\\\"UTF-8\\\">\\n                <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n                <title>My SSR App</title>\\n                \".concat(clientBundleStyle, \" \\n            </head>\\n            <body>\\n                <div id='ssr-app'>\").concat(jsx, \"</div> \\n                \").concat(clientBundleScript, \" \\n            </body>\\n        </html>\\n    \"));\n});\napp.listen(port, function () {\n  console.log(\"App listening on http://localhost:\".concat(port));\n});\n\n//# sourceURL=webpack://tryagain/./server/index.js?");

/***/ }),

/***/ "./stores/calculatestore.js":
/*!**********************************!*\
  !*** ./stores/calculatestore.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CalculateStore\": () => (/* binding */ CalculateStore)\n/* harmony export */ });\n/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ \"mobx\");\n/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\nvar CalculateStore = /*#__PURE__*/function () {\n  function CalculateStore(rootStore) {\n    _classCallCheck(this, CalculateStore);\n    _defineProperty(this, \"expression\", []);\n    (0,mobx__WEBPACK_IMPORTED_MODULE_0__.makeObservable)(this, {\n      expression: mobx__WEBPACK_IMPORTED_MODULE_0__.observable,\n      setExpression: mobx__WEBPACK_IMPORTED_MODULE_0__.action\n    });\n    this.rootStore = rootStore;\n  }\n  _createClass(CalculateStore, [{\n    key: \"setExpression\",\n    value: function setExpression(expression) {\n      this.expression = expression;\n    }\n  }]);\n  return CalculateStore;\n}();\n\n//# sourceURL=webpack://tryagain/./stores/calculatestore.js?");

/***/ }),

/***/ "./stores/historystore.js":
/*!********************************!*\
  !*** ./stores/historystore.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HistoryStore\": () => (/* binding */ HistoryStore)\n/* harmony export */ });\n/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ \"mobx\");\n/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\nvar HistoryStore = /*#__PURE__*/function () {\n  function HistoryStore(rootStore) {\n    _classCallCheck(this, HistoryStore);\n    _defineProperty(this, \"history\", []);\n    (0,mobx__WEBPACK_IMPORTED_MODULE_0__.makeObservable)(this, {\n      history: mobx__WEBPACK_IMPORTED_MODULE_0__.observable,\n      getHistoryItem: mobx__WEBPACK_IMPORTED_MODULE_0__.action\n    });\n    this.rootStore = rootStore;\n  }\n  _createClass(HistoryStore, [{\n    key: \"getHistoryItem\",\n    value: function getHistoryItem() {\n      var history = localStorage.getItem('history');\n      if (history) {\n        this.history = JSON.parse(history);\n      }\n      console.log(this.history);\n    }\n  }]);\n  return HistoryStore;\n}();\n\n//# sourceURL=webpack://tryagain/./stores/historystore.js?");

/***/ }),

/***/ "./stores/rootstore.js":
/*!*****************************!*\
  !*** ./stores/rootstore.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RootStore\": () => (/* binding */ RootStore),\n/* harmony export */   \"rootStore\": () => (/* binding */ rootStore)\n/* harmony export */ });\n/* harmony import */ var _calculatestore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculatestore.js */ \"./stores/calculatestore.js\");\n/* harmony import */ var _historystore_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./historystore.js */ \"./stores/historystore.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\nvar RootStore = /*#__PURE__*/_createClass(function RootStore() {\n  _classCallCheck(this, RootStore);\n  this.historyStore = new _historystore_js__WEBPACK_IMPORTED_MODULE_1__.HistoryStore(this);\n  this.calculateStore = new _calculatestore_js__WEBPACK_IMPORTED_MODULE_0__.CalculateStore(this);\n});\nvar rootStore = new RootStore();\n\n//# sourceURL=webpack://tryagain/./stores/rootstore.js?");

/***/ }),

/***/ "./utils/utility.js":
/*!**************************!*\
  !*** ./utils/utility.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"replaceNumber\": () => (/* binding */ replaceNumber),\n/* harmony export */   \"storeExpressionToHistory\": () => (/* binding */ storeExpressionToHistory)\n/* harmony export */ });\nfunction replaceNumber(str, index, _char) {\n  if (index > str.length - 1) return str;\n  return str.substr(0, index) + _char + str.substr(index + 1);\n}\nfunction storeExpressionToHistory(result) {\n  var history = localStorage.getItem('history');\n  if (history) {\n    history = JSON.parse(history);\n  } else {\n    history = [];\n  }\n  history.push(result);\n  localStorage.setItem('history', JSON.stringify(history));\n}\n\n\n//# sourceURL=webpack://tryagain/./utils/utility.js?");

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

/***/ "mobx":
/*!***********************!*\
  !*** external "mobx" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("mobx");

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