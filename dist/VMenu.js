(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "http://localhost:8080/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VMenu", function() { return VMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VMenuUI", function() { return VMenuUI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VMenuItem", function() { return VMenuItem; });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Helpers_BaseComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _Helpers_General__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _VMenuLayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ACTOpenVMenuSet", function() { return _VMenuLayer__WEBPACK_IMPORTED_MODULE_3__["ACTOpenVMenuSet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VMenuState", function() { return _VMenuLayer__WEBPACK_IMPORTED_MODULE_3__["VMenuState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VMenuReducer", function() { return _VMenuLayer__WEBPACK_IMPORTED_MODULE_3__["VMenuReducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VMenuLayer", function() { return _VMenuLayer__WEBPACK_IMPORTED_MODULE_3__["VMenuLayer"]; });

/* harmony import */ var _VMenuStub__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VMenuStub", function() { return _VMenuStub__WEBPACK_IMPORTED_MODULE_4__["VMenuStub"]; });

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
  }
  return t;
}; //import Radium from "radium";
//import * as React from "react";








var React = __webpack_require__(4);


var styles = {
  root: {
    position: "absolute",
    //position: "fixed",
    zIndex: 20,
    backgroundColor: "rgb(35,35,35)",
    border: "1px outset #555",
    fontStyle: "initial",
    whiteSpace: "nowrap"
  }
};
var VMenu = function VMenu() {
  _classCallCheck(this, VMenu);
};
VMenu.lastID = -1;
VMenu.menuChildren = {};
/*export interface VMenuUIProps extends React.HTMLProps<HTMLDivElement> {
    pos: Vector2i, style?, menuID: number;
}*/

var VMenuUI =
/*#__PURE__*/
function (_BaseComponent) {
  _inherits(VMenuUI, _BaseComponent);

  function VMenuUI() {
    _classCallCheck(this, VMenuUI);

    return _possibleConstructorReturn(this, _getPrototypeOf(VMenuUI).apply(this, arguments));
  }

  _createClass(VMenuUI, [{
    key: "render",
    value: function render() {
      var _a = this.props,
          pos = _a.pos,
          className = _a.className,
          style = _a.style,
          menuID = _a.menuID,
          children = _a.children,
          rest = __rest(_a, ["pos", "className", "style", "menuID", "children"]);

      if (children == null) return React.createElement("div", {
        className: "VMenu",
        style: Object(_Helpers_General__WEBPACK_IMPORTED_MODULE_2__["E"])({
          display: "none"
        }, style)
      });
      return React.createElement("div", Object.assign({}, rest, {
        className: classnames__WEBPACK_IMPORTED_MODULE_0___default()("VMenu", className),
        style: Object(_Helpers_General__WEBPACK_IMPORTED_MODULE_2__["E"])(styles.root, {
          left: pos.x,
          top: pos.y
        }, style)
      }), children);
    }
  }]);

  return VMenuUI;
}(_Helpers_BaseComponent__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]);
Object(_Helpers_General__WEBPACK_IMPORTED_MODULE_2__["AddGlobalStyle"])("\n/*.VMenuItem.disabled {\n\topacity: .5;\n\t/#*pointer-events: none;*#/\n\tcursor: default;\n}*/\n.VMenuItem:not(.disabled):hover {\n\tbackground-color: rgb(25,25,25) !important;\n}\n");
var VMenuItem =
/*#__PURE__*/
function (_BaseComponent2) {
  _inherits(VMenuItem, _BaseComponent2);

  function VMenuItem() {
    var _this;

    _classCallCheck(this, VMenuItem);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(VMenuItem).apply(this, arguments));

    _this.OnMouseDown = function (e) {
      var onClick = _this.props.onClick;
      e.stopPropagation();

      if (_this.props.enabled) {
        if (onClick) onClick(e);
      } else {
        e.nativeEvent.ignore = true;
      }
    };

    return _this;
  }

  _createClass(VMenuItem, [{
    key: "render",
    value: function render() {
      var _a = this.props,
          text = _a.text,
          enabled = _a.enabled,
          className = _a.className,
          style = _a.style,
          onClick = _a.onClick,
          rest = __rest(_a, ["text", "enabled", "className", "style", "onClick"]);

      return React.createElement("div", Object.assign({}, rest, {
        className: classnames__WEBPACK_IMPORTED_MODULE_0___default()("VMenuItem", className, !enabled && "disabled"),
        style: Object(_Helpers_General__WEBPACK_IMPORTED_MODULE_2__["E"])(VMenuItem.styles.root, !enabled && VMenuItem.styles.disabled, style),
        onMouseDown: this.OnMouseDown
      }), this.props.text);
    }
  }]);

  return VMenuItem;
}(_Helpers_BaseComponent__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]);
VMenuItem.styles = {
  root: {
    zIndex: 21,
    padding: "2 5",
    backgroundColor: "rgb(35,35,35)",
    cursor: "pointer"
  },
  disabled: {
    opacity: .5,
    cursor: "default"
  }
};
VMenuItem.defaultProps = {
  enabled: true
};

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vector2i", function() { return Vector2i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetParents", function() { return GetParents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetSelfAndParents", function() { return GetSelfAndParents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetOffset", function() { return GetOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetContentOffset", function() { return GetContentOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetScroll", function() { return GetScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddGlobalElement", function() { return AddGlobalElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddGlobalStyle", function() { return AddGlobalStyle; });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Vector2i =
/*#__PURE__*/
function () {
  function Vector2i(x, y) {
    _classCallCheck(this, Vector2i);

    this.x = x;
    this.y = y;
  }

  _createClass(Vector2i, [{
    key: "Minus",
    value: function Minus() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var _ref = args[0] instanceof Vector2i ? [args[0].x, args[0].y] : args,
          _ref2 = _slicedToArray(_ref, 2),
          x = _ref2[0],
          y = _ref2[1];

      return new Vector2i(this.x - x, this.y - y);
    }
  }, {
    key: "Plus",
    value: function Plus() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      var _ref3 = args[0] instanceof Vector2i ? [args[0].x, args[0].y] : args,
          _ref4 = _slicedToArray(_ref3, 2),
          x = _ref4[0],
          y = _ref4[1];

      return new Vector2i(this.x + x, this.y + y);
    }
  }]);

  return Vector2i;
}();
function GetParents(dom) {
  var topDown = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var result = [];
  var currentDom = dom;

  while (currentDom.parentElement) {
    result.push(currentDom.parentElement);
    currentDom = currentDom.parentElement;
  }

  return result;
}
function GetSelfAndParents(dom) {
  var topDown = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var result = GetParents(dom, topDown);
  if (topDown) return result.concat([dom]);
  return [dom].concat(result);
}
function GetOffset(dom) {
  return new Vector2i(dom.offsetLeft, dom.offsetTop);
}
function GetContentOffset(dom) {
  var includePadding = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var result = new Vector2i(0, 0);
  if (dom.style.position == "absolute") result = result.Plus(parseInt(dom.style.marginLeft) | 0, parseInt(dom.style.marginTop) | 0);
  result = result.Minus(parseInt(dom.style.borderLeftWidth) | 0, parseInt(dom.style.borderTopWidth) | 0);
  if (includePadding) result = result.Plus(parseInt(dom.style.paddingLeft) | 0, parseInt(dom.style.paddingTop) | 0); //result = result.Plus(parseInt(dom.scrollLeft)|0, parseInt(dom.scrollTop)|0);

  return result;
}
function GetScroll(dom) {
  return new Vector2i(dom.scrollLeft, dom.scrollTop);
}
function E() {
  for (var _len3 = arguments.length, extenders = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    extenders[_key3] = arguments[_key3];
  }

  return Object.assign.apply(Object, [{}].concat(extenders));
}

function IndexOfAny() {
  var lowestIndex = -1;

  for (var _len4 = arguments.length, strings = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    strings[_key4] = arguments[_key4];
  }

  for (var _i2 = 0; _i2 < strings.length; _i2++) {
    var str = strings[_i2];
    var indexOfChar = this.indexOf(str);
    if (indexOfChar != -1 && (indexOfChar < lowestIndex || lowestIndex == -1)) lowestIndex = indexOfChar;
  }

  return lowestIndex;
}

var loaded = false;
function AddGlobalElement(html) {
  /*$(()=> {
      $(html).appendTo("#hidden_early");
  });*/
  var proceed = function proceed() {
    loaded = true;
    var nodeType = html.trim().substring(1, IndexOfAny.call(html.trim(), " ", ">"));
    var element = document.createElement(nodeType);
    if (document.querySelector("#hidden_early")) document.querySelector("#hidden_early").appendChild(element);else document.body.appendChild(element);
    element.outerHTML = html;
  };

  if (loaded) proceed();else window.addEventListener("load", proceed);
}
;
function AddGlobalStyle(str) {
  AddGlobalElement("\n<style>\n".concat(str, "\n</style>\n\t"));
}
;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseComponent", function() { return BaseComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BaseComponent_1;


var BaseComponent = BaseComponent_1 =
/*#__PURE__*/
function (_Component) {
  _inherits(BaseComponent, _Component);

  function BaseComponent(props) {
    var _this;

    _classCallCheck(this, BaseComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BaseComponent).call(this, props));
    _this.mounted = false; //autoBind(this);

    _this.state = _this.state || {}; // if using PreRender, wrap render func

    if (_this.PreRender != BaseComponent_1.prototype.render) {
      var oldRender = _this.render;

      _this.render = function () {
        this.PreRender();
        return oldRender.apply(this, arguments);
      };
    }

    return _this;
  }

  _createClass(BaseComponent, [{
    key: "ComponentWillMount",
    value: function ComponentWillMount() {}
  }, {
    key: "ComponentWillMountOrReceiveProps",
    value: function ComponentWillMountOrReceiveProps(props, forMount) {}
  }, {
    key: "UNSAFE_componentWillMount",
    value: function UNSAFE_componentWillMount() {
      this.ComponentWillMount();
      this.ComponentWillMountOrReceiveProps(this.props, true);
    }
  }, {
    key: "ComponentDidMount",
    value: function ComponentDidMount() {}
  }, {
    key: "ComponentDidMountOrUpdate",
    value: function ComponentDidMountOrUpdate(forMount) {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.ComponentDidMount.apply(this, arguments);
      this.ComponentDidMountOrUpdate(true);
      this.mounted = true;

      if (this.PostRender != BaseComponent_1.prototype.PostRender) {
        /*setTimeout(()=>window.requestAnimationFrame(()=> {
            if (!this.mounted) return;
            this.PostRender(true);
        }));*/
        this.PostRender(true);
      }
    }
  }, {
    key: "ComponentWillUnmount",
    value: function ComponentWillUnmount() {}
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.ComponentWillUnmount();
      this.mounted = false;
    }
  }, {
    key: "ComponentWillReceiveProps",
    value: function ComponentWillReceiveProps(newProps) {}
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(newProps) {
      this.ComponentWillReceiveProps(newProps);
      this.ComponentWillMountOrReceiveProps(newProps, false);
    }
  }, {
    key: "ComponentDidUpdate",
    value: function ComponentDidUpdate() {}
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.ComponentDidUpdate.apply(this, arguments);
      this.ComponentDidMountOrUpdate(false);

      if (this.PostRender != BaseComponent_1.prototype.PostRender) {
        /*setTimeout(()=>window.requestAnimationFrame(()=> {
            if (!this.mounted) return;
            this.PostRender(false);
        }));*/
        this.PostRender(false);
      }
    }
  }, {
    key: "PreRender",
    value: function PreRender() {}
  }, {
    key: "PostRender",
    value: function PostRender(initialMount) {}
  }]);

  return BaseComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

__decorate([Sealed], BaseComponent.prototype, "UNSAFE_componentWillMount", null);

__decorate([Sealed], BaseComponent.prototype, "componentDidMount", null);

__decorate([Sealed], BaseComponent.prototype, "componentWillUnmount", null);

__decorate([Sealed], BaseComponent.prototype, "UNSAFE_componentWillReceiveProps", null);

__decorate([Sealed], BaseComponent.prototype, "componentDidUpdate", null);

BaseComponent = BaseComponent_1 = __decorate([HasSealedProps], BaseComponent);


function HasSealedProps(target) {
  var oldConstructor = target.constructor;

  target.constructor = function () {
    for (var key in target["prototype"]) {
      var method = target["prototype"][key];

      if (method.sealed) {
        console.assert(this[key] == method, "Cannot override sealed method \"".concat(key, "\"."));
      }
    }

    return oldConstructor.apply(this, arguments);
  };
}

function Sealed(target, key) {
  target[key].sealed = true;
}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTOpenVMenuSet", function() { return ACTOpenVMenuSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VMenuState", function() { return VMenuState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VMenuReducer", function() { return VMenuReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VMenuLayer", function() { return VMenuLayer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Helpers_Action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _VMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var React = __webpack_require__(4);

var ACTOpenVMenuSet =
/*#__PURE__*/
function (_Action) {
  _inherits(ACTOpenVMenuSet, _Action);

  function ACTOpenVMenuSet() {
    _classCallCheck(this, ACTOpenVMenuSet);

    return _possibleConstructorReturn(this, _getPrototypeOf(ACTOpenVMenuSet).apply(this, arguments));
  }

  return ACTOpenVMenuSet;
}(_Helpers_Action__WEBPACK_IMPORTED_MODULE_1__["Action"]);
/*export class VMenuController {
    constructor(options: VMenuOptions, menuID: number) {
        this.options = options;
        this.menuID = menuID;
    }
    options: VMenuOptions;
    menuID: number;

    UpdateUI() {
        store.dispatch(new ACTVMenuUpdate({menuID: this.menuID}));
    }
    Close() {
        store.dispatch(new ACTOpenVMenuSet(null));
    }
}

let lastMenuID = -1;
let menuUIs = {} as {[key: number]: ()=>JSX.Element};
export function ShowMenu_Base(o: VMenuOptions) {
    o.menuID = ++lastMenuID;

    // store ui in extra storage, kuz it gets ruined when put in Redux store
    menuUIs[o.menuID] = o.ui;
    delete o.ui;

    store.dispatch(new ACTOpenVMenuSet(o));

    return new VMenuController(o, o.menuID);
}
export function ShowMenu(o: VMenuOptions) {
//export function ShowMenu(options: {[P in keyof VMenuOptions]?: VMenuOptions[P];}) { // do it this way, so the options are shown
    o = Object.assign(new VMenuOptions(), o);

    var controller = ShowMenu_Base(o);
    return controller;
}*/

var VMenuState = function VMenuState() {
  _classCallCheck(this, VMenuState);
};
function VMenuReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new VMenuState();
  var action = arguments.length > 1 ? arguments[1] : undefined;
  if (action.Is(ACTOpenVMenuSet)) return Object.assign({}, state, {
    openMenuProps: action.payload
  });
  return state;
}
var styles = {
  overlay: {
    position: "fixed",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,.5)",
    zIndex: 1
  },
  container: {
    position: "absolute",
    overflow: "auto",
    //top: "40px", left: "40px", right: "40px", bottom: "40px",
    left: "50%",
    right: "initial",
    top: "50%",
    bottom: "initial",
    transform: "translate(-50%, -50%)",
    background: "rgba(0,0,0,.75)",
    border: "1px solid #555",
    WebkitOverflowScrolling: "touch",
    borderRadius: "4px",
    outline: "none",
    padding: "20px"
  }
};

var VMenuLayer =
/*#__PURE__*/
function (_Component) {
  _inherits(VMenuLayer, _Component);

  function VMenuLayer() {
    _classCallCheck(this, VMenuLayer);

    return _possibleConstructorReturn(this, _getPrototypeOf(VMenuLayer).apply(this, arguments));
  }

  _createClass(VMenuLayer, [{
    key: "render",
    value: function render() {
      var openMenuProps = this.props.openMenuProps;
      if (openMenuProps == null) return React.createElement("div", null); //let {overlayStyle, onOK, onCancel} = openMenuProps;

      var children = _VMenu__WEBPACK_IMPORTED_MODULE_3__["VMenu"].menuChildren[openMenuProps.menuID];
      return React.createElement("div", null, React.createElement(_VMenu__WEBPACK_IMPORTED_MODULE_3__["VMenuUI"], Object.assign({}, openMenuProps, {
        children: children
      })));
    }
  }]);

  return VMenuLayer;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

VMenuLayer = __decorate([Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(function (state) {
  return {
    openMenuProps: state.vMenu.openMenuProps
  };
})], VMenuLayer);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Action", function() { return Action; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Action =
/*#__PURE__*/
function () {
  function Action(payload) {
    _classCallCheck(this, Action);

    this.type = this.constructor.name;
    this.payload = payload; //this.Extend(payload);

    Object.setPrototypeOf(this, Object.getPrototypeOf({}));
  }

  _createClass(Action, [{
    key: "Is",
    value: function Is(actionType) {
      if (actionType == null) return false; // this can occur during start-up "assert reducer sanity" phase

      return this.type == actionType.name; //return this instanceof actionType; // alternative
    }
  }]);

  return Action;
}(); //Object.prototype._AddFunction("Is", Action.prototype.Is);

Object.defineProperty(Object.prototype, "Is", {
  configurable: true,
  value: Action.prototype.Is
});

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VMenuStub", function() { return VMenuStub; });
/* harmony import */ var _Helpers_BaseComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _VMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Helpers_General__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _VMenuLayer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var React = __webpack_require__(4);

var setImmediate = window["setImmediate"] || window.setTimeout;
var VMenuStub =
/*#__PURE__*/
function (_BaseComponent) {
  _inherits(VMenuStub, _BaseComponent);

  function VMenuStub(props) {
    var _this;

    _classCallCheck(this, VMenuStub);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(VMenuStub).call(this, props));
    /*OnContextMenu(e) {
        //if (e.button != 2) return;
        //this.Open(new Vector2i(e.pageX, e.pageY));
        //e.preventDefault();
        //e.stopPropagation();
        debugger;
        return false;
    }
    OnMouseDown(e) {
        if (e.button != 2) return;*/

    _this.OnContextMenu = function (e) {
      var pagePos = new _Helpers_General__WEBPACK_IMPORTED_MODULE_3__["Vector2i"](e.pageX, e.pageY);
      var _this$props = _this.props,
          onBody = _this$props.onBody,
          uiProps = _this$props.uiProps,
          preOpen = _this$props.preOpen,
          children = _this$props.children; //e.persist();

      if (e.handledByVMenu) return; // already handled by deeper menu-stub
      // if user's preOpen returns "false" for "do not continue", return true (pass event on without action)

      if (preOpen && preOpen(e) == false) return; //true;

      var posHoistElement = Object(_Helpers_General__WEBPACK_IMPORTED_MODULE_3__["GetSelfAndParents"])(_this.forDom).find(function (a) {
        return a.style.position != "static";
      }); //var posFromPosHoistElement = pos.Minus(posHoistElement.position_Vector2i()).Plus(posHoistElement.contentOffset());

      var posInPosHoistElement = pagePos.Minus(Object(_Helpers_General__WEBPACK_IMPORTED_MODULE_3__["GetOffset"])(posHoistElement)).Minus(Object(_Helpers_General__WEBPACK_IMPORTED_MODULE_3__["GetContentOffset"])(posHoistElement, true)).Plus(Object(_Helpers_General__WEBPACK_IMPORTED_MODULE_3__["GetScroll"])(posHoistElement));
      /*if (this.props.posOffset)
          posFromPosHoistElement = posFromPosHoistElement.Plus(this.props.posOffset);*/
      //this.setState({open: true, pos: posFromPosHoistElement});
      //let uiProps = {...this.props, pos: pagePos} as VMenuUIProps;

      var uiProps_final = Object.assign({}, uiProps, {
        pos: pagePos,
        menuID: _this.menuID
      });
      _VMenu__WEBPACK_IMPORTED_MODULE_1__["VMenu"].menuChildren[_this.menuID] = children; // store ui/children on static, since breaks in store

      if (onBody) {
        //store.dispatch(new ACTOpenVMenuSet(uiProps_final));
        setTimeout(function () {
          return store.dispatch(new _VMenuLayer__WEBPACK_IMPORTED_MODULE_4__["ACTOpenVMenuSet"](uiProps_final));
        }); // wait a tiny bit, so OnGlobalMouseDown runs first
      } else {
        _this.setState({
          localOpenUIProps: uiProps_final
        });
      } //e.preventDefault();


      e.handledByVMenu = true;
      return; //false;
    };

    _this.OnGlobalMouseDown = function (e) {
      if (e.ignore) return;
      var onBody = _this.props.onBody;

      if (onBody) {
        if (store.getState().vMenu.openMenuProps) {
          store.dispatch(new _VMenuLayer__WEBPACK_IMPORTED_MODULE_4__["ACTOpenVMenuSet"](null));
        }
      } else {
        if (_this.state.localOpenUIProps) {
          _this.setState({
            localOpenUIProps: null
          });
        }
      }
    };

    _this.menuID = ++_VMenu__WEBPACK_IMPORTED_MODULE_1__["VMenu"].lastID;
    return _this;
  }

  _createClass(VMenuStub, [{
    key: "ComponentDidMount",
    value: function ComponentDidMount() {
      var _this2 = this;

      var forFunc = this.props.for;
      this.forDom = forFunc ? react_dom__WEBPACK_IMPORTED_MODULE_2__["findDOMNode"](forFunc()) : react_dom__WEBPACK_IMPORTED_MODULE_2__["findDOMNode"](this).parentElement; //this.forDom.addEventListener("contextmenu", e=>this.OnContextMenu(e));

      this.forDom.addEventListener("contextmenu", function (e) {
        return setImmediate(function () {
          return _this2.OnContextMenu(e);
        });
      }); // wait a tiny bit, so user's onContextMenu can set "e.ignore = true;"
      // early handler, so parent's hover isn't considered to be lost from mouse-down
      //this.forDom.addEventListener("mousedown", this.OnMouseDown);

      document.addEventListener("mousedown", this.OnGlobalMouseDown); //this.PostRender();
    }
  }, {
    key: "ComponentWillUnmount",
    value: function ComponentWillUnmount() {
      this.forDom.removeEventListener("contextmenu", this.OnContextMenu); //this.forDom.removeEventListener("mousedown", this.OnMouseDown);

      document.removeEventListener("mousedown", this.OnGlobalMouseDown);
    }
  }, {
    key: "render",
    value: function render() {
      var localOpenUIProps = this.state.localOpenUIProps; // if opening locally (usually not the case)

      if (localOpenUIProps != null) {
        return React.createElement(_VMenu__WEBPACK_IMPORTED_MODULE_1__["VMenuUI"], Object.assign({}, localOpenUIProps));
      }

      return React.createElement("div", null);
    }
  }]);

  return VMenuStub;
}(_Helpers_BaseComponent__WEBPACK_IMPORTED_MODULE_0__["BaseComponent"]);
VMenuStub.defaultProps = {
  onBody: true
};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ })
/******/ ]);
});