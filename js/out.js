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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/app.jsx":
/*!********************!*\
  !*** ./js/app.jsx ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.SentenceOne = exports.App = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/react.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _sentences = __webpack_require__(/*! ./sentences.js */ \"./js/sentences.js\");\n\nvar _sentences2 = _interopRequireDefault(_sentences);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n__webpack_require__(/*! ../scss/main.scss */ \"./scss/main.scss\");\n\n//importing sentences database from js file\n\n//definition of the class component, responsible for displaying sentences letter after letter\nvar SentenceOne = function (_React$Component) {\n    _inherits(SentenceOne, _React$Component);\n\n    function SentenceOne(props) {\n        _classCallCheck(this, SentenceOne);\n\n        var _this = _possibleConstructorReturn(this, (SentenceOne.__proto__ || Object.getPrototypeOf(SentenceOne)).call(this, props));\n\n        _this.handleClick = function (e) {\n            _this.setState({\n                cycle: !_this.state.cycle\n\n            });\n        };\n\n        _this.startSentence = function () {\n            if (_this.state.counterTwo == _this.state.sentenceTwo.length - 1) {\n                var counter = _this.state.counter + 1;\n                if (_this.state.cycle && counter == _sentences2.default.length - 1) {\n                    counter = 1;\n                }\n                if (_this.state.counter < _sentences2.default.length - 1) {\n                    var sentenceTwo = _sentences2.default[_this.state.counter + 1];\n\n                    var counterTwo = 0;\n                    _this.setState({\n                        counter: counter,\n                        counterTwo: counterTwo,\n                        sentenceTwo: sentenceTwo\n                    });\n                }\n            } else {\n                var _counterTwo = _this.state.counterTwo + 1;\n                _this.setState({\n                    counterTwo: _counterTwo\n                });\n            }\n        };\n\n        _this.state = {\n            //states realted to displaying first sentences\n            sentenceOne: _sentences2.default[0],\n            counterOne: 0,\n            freezeOne: false,\n            //states related to displaying second sentences\n            counterTwo: 0,\n            sentenceTwo: _sentences2.default[1],\n            //cycle counter\n            counter: 1,\n            //state to change the way of displaying sentenceTwo (once or cycle)\n            cycle: false\n        };\n        return _this;\n    }\n    //method for displaying first sentences\n\n\n    _createClass(SentenceOne, [{\n        key: 'componentDidMount',\n        value: function componentDidMount() {\n            var _this2 = this;\n\n            //setting interval for displaying letter by letter\n            this.intervalOne = setInterval(function () {\n                var freezeOne = false;\n                if (_this2.state.counterOne == _this2.state.sentenceOne.length) {\n                    freezeOne = true;\n                }\n                _this2.setState({\n                    counterOne: _this2.state.counterOne + 1,\n                    freezeOne: freezeOne\n                });\n            }, 50);\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            //checking if sentence one is completed\n            if (this.state.freezeOne) {\n                //clearing interval of the first sentences\n                clearInterval(this.intervalOne);\n                //setting interval for second sentence displaying letter by letter\n                if (this.intervalTwo == null) {\n                    this.intervalTwo = setInterval(this.startSentence, 50);\n                }\n            }\n            //clearing interval for second sentences\n            if (this.state.counter == _sentences2.default.length - 1 && this.state.counterTwo == this.state.sentenceTwo.length - 1) {\n                clearInterval(this.intervalTwo);\n            }\n            //adding sentences to DOM\n            return _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement(\n                    'div',\n                    null,\n                    _react2.default.createElement(\n                        'h1',\n                        { className: 'first-sentence' },\n                        this.state.sentenceOne.substr(0, this.state.counterOne)\n                    ),\n                    _react2.default.createElement(\n                        'h2',\n                        null,\n                        this.state.sentenceTwo.substr(0, this.state.counterTwo)\n                    )\n                ),\n                _react2.default.createElement(\n                    'button',\n                    { onClick: this.handleClick },\n                    'CLICK ME!'\n                )\n            );\n        }\n    }]);\n\n    return SentenceOne;\n}(_react2.default.Component);\n\n// definition of the class component responsible for generating SentenceOne component\n\n\nvar App = function (_React$Component2) {\n    _inherits(App, _React$Component2);\n\n    function App() {\n        _classCallCheck(this, App);\n\n        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));\n    }\n\n    _createClass(App, [{\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(SentenceOne, null);\n        }\n    }]);\n\n    return App;\n}(_react2.default.Component);\n\nexports.App = App;\nexports.SentenceOne = SentenceOne;\n\n\ndocument.addEventListener('DOMContentLoaded', function () {\n    _reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('app'));\n});\n\n//# sourceURL=webpack:///./js/app.jsx?");

/***/ }),

/***/ "./js/sentences.js":
/*!*************************!*\
  !*** ./js/sentences.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = [\n    \"Szczęscie jest decyzją, nie punktem na mapie\",\n    \"Początek jest najważniejszą częścią pracy.\",\n    \"Z Bogiem życie ma sens i cel!\",\n    \"Ludzie Boga nie znajdują, bo go nie szukają z własnej woli.\",\n    \"Przez trudy i kryzysy życia, nie można przejść zwycięsko bez Jezusa!\"\n]\n\n//# sourceURL=webpack:///./js/sentences.js?");

/***/ }),

/***/ "./node_modules/react-dom/index.js":
/*!*****************************************!*\
  !*** ./node_modules/react-dom/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/home/kodkoshka/Pulpit/CodersLab/sentences/node_modules/react-dom/index.js'\");\n\n//# sourceURL=webpack:///./node_modules/react-dom/index.js?");

/***/ }),

/***/ "./node_modules/react/react.js":
/*!*************************************!*\
  !*** ./node_modules/react/react.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/home/kodkoshka/Pulpit/CodersLab/sentences/node_modules/react/react.js'\");\n\n//# sourceURL=webpack:///./node_modules/react/react.js?");

/***/ }),

/***/ "./scss/main.scss":
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (6:0)\\nYou may need an appropriate loader to handle this file type.\\n| /*}*/\\n| \\n> .first-sentence {\\n|     color: aqua;\\n| }\");\n\n//# sourceURL=webpack:///./scss/main.scss?");

/***/ })

/******/ });