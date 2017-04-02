(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("react-dom")) : factory(root["react"], root["react-dom"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_113__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "http://localhost:8080/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.VMenuItem = exports.VMenuUI = exports.VMenuLayer = exports.VMenuReducer = exports.VMenuState = exports.ACTOpenVMenuSet = exports.VMenuStub = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _radium = __webpack_require__(2);

	var _radium2 = _interopRequireDefault(_radium);

	var _react = __webpack_require__(5);

	var React = _interopRequireWildcard(_react);

	var _General = __webpack_require__(68);

	var _BaseComponent3 = __webpack_require__(69);

	var _reactAutobind = __webpack_require__(70);

	var _reactAutobind2 = _interopRequireDefault(_reactAutobind);

	var _VMenuLayer = __webpack_require__(72);

	var _VMenuLayer2 = _interopRequireDefault(_VMenuLayer);

	var _VMenuStub = __webpack_require__(112);

	var _VMenuStub2 = _interopRequireDefault(_VMenuStub);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
	        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    }return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __rest = undefined && undefined.__rest || function (s, e) {
	    var t = {};
	    for (var p in s) {
	        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
	    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
	        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
	    }return t;
	};
	exports.VMenuStub = _VMenuStub2.default;
	exports.ACTOpenVMenuSet = _VMenuLayer.ACTOpenVMenuSet;
	exports.VMenuState = _VMenuLayer.VMenuState;
	exports.VMenuReducer = _VMenuLayer.VMenuReducer;
	exports.VMenuLayer = _VMenuLayer2.default;

	var styles = {
	    root: {
	        position: "absolute",
	        //position: "fixed",
	        zIndex: 20, backgroundColor: "rgb(35,35,35)", border: "1px outset #555",
	        fontStyle: "initial", whiteSpace: "nowrap"
	    }
	};

	var VMenu = function VMenu() {
	    _classCallCheck(this, VMenu);
	};

	exports.default = VMenu;

	VMenu.lastID = -1;
	VMenu.menuChildren = {};
	/*export interface VMenuUIProps extends React.HTMLProps<HTMLDivElement> {
	    pos: Vector2i, style?, menuID: number;
	}*/

	var VMenuUI = exports.VMenuUI = function (_BaseComponent) {
	    _inherits(VMenuUI, _BaseComponent);

	    function VMenuUI(props) {
	        _classCallCheck(this, VMenuUI);

	        var _this = _possibleConstructorReturn(this, (VMenuUI.__proto__ || Object.getPrototypeOf(VMenuUI)).call(this, props));

	        (0, _reactAutobind2.default)(_this);
	        return _this;
	    }

	    _createClass(VMenuUI, [{
	        key: "render",
	        value: function render() {
	            var forReal = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	            var _a = this.props,
	                pos = _a.pos,
	                style = _a.style,
	                menuID = _a.menuID,
	                children = _a.children,
	                rest = __rest(_a, ["pos", "style", "menuID", "children"]);
	            if (children == null) return React.createElement("div", { className: "VMenu", style: (0, _General.E)({ display: "none" }, style) });
	            return React.createElement("div", Object.assign({}, rest, { className: "VMenu", style: (0, _General.E)(styles.root, { left: pos.x, top: pos.y }, style) }), children);
	        }
	    }]);

	    return VMenuUI;
	}(_BaseComponent3.BaseComponent);
	/*export interface VMenuItemProps extends React.HTMLProps<HTMLDivElement> {
	    text: string, style?;
	}*/


	var VMenuItem = VMenuItem_1 = function (_BaseComponent2) {
	    _inherits(VMenuItem, _BaseComponent2);

	    //export class VMenuItem extends BaseComponent<VMenuItemProps, {}> {
	    function VMenuItem(props) {
	        _classCallCheck(this, VMenuItem);

	        var _this2 = _possibleConstructorReturn(this, (VMenuItem.__proto__ || Object.getPrototypeOf(VMenuItem)).call(this, props));

	        (0, _reactAutobind2.default)(_this2);
	        return _this2;
	    }

	    _createClass(VMenuItem, [{
	        key: "render",
	        value: function render() {
	            var _a = this.props,
	                text = _a.text,
	                style = _a.style,
	                rest = __rest(_a, ["text", "style"]);
	            return React.createElement("div", Object.assign({}, rest, { style: (0, _General.E)(VMenuItem_1.styles.root, style), onMouseDown: this.OnMouseDown }), this.props.text);
	        }
	    }, {
	        key: "OnMouseDown",
	        value: function OnMouseDown(e) {
	            var onClick = this.props.onClick;

	            e.stopPropagation();
	            onClick(e);
	        }
	    }]);

	    return VMenuItem;
	}(_BaseComponent3.BaseComponent);
	VMenuItem.styles = {
	    root: {
	        zIndex: 21, padding: "2 5", backgroundColor: "rgb(35,35,35)", cursor: "pointer",
	        ":hover": { backgroundColor: "rgb(25,25,25)" }
	    }
	};
	exports.VMenuItem = VMenuItem = VMenuItem_1 = __decorate([_radium2.default], VMenuItem);
	exports.VMenuItem = VMenuItem;

	var VMenuItem_1;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _enhancer = __webpack_require__(4);

	var _enhancer2 = _interopRequireDefault(_enhancer);

	var _plugins = __webpack_require__(53);

	var _plugins2 = _interopRequireDefault(_plugins);

	var _style = __webpack_require__(64);

	var _style2 = _interopRequireDefault(_style);

	var _styleRoot = __webpack_require__(65);

	var _styleRoot2 = _interopRequireDefault(_styleRoot);

	var _getState = __webpack_require__(49);

	var _getState2 = _interopRequireDefault(_getState);

	var _keyframes = __webpack_require__(67);

	var _keyframes2 = _interopRequireDefault(_keyframes);

	var _resolveStyles = __webpack_require__(7);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function Radium(ComposedComponent) {
	  return (0, _enhancer2.default)(ComposedComponent);
	}

	Radium.Plugins = _plugins2.default;
	Radium.Style = _style2.default;
	Radium.StyleRoot = _styleRoot2.default;
	Radium.getState = _getState2.default;
	Radium.keyframes = _keyframes2.default;

	if (process.env.NODE_ENV !== 'production') {
	  Radium.TestMode = {
	    clearState: _resolveStyles.__clearStateForTests,
	    disable: _resolveStyles.__setTestMode.bind(null, false),
	    enable: _resolveStyles.__setTestMode.bind(null, true)
	  };
	}

	exports.default = Radium;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 3 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = enhanceWithRadium;

	var _react = __webpack_require__(5);

	var _styleKeeper = __webpack_require__(6);

	var _styleKeeper2 = _interopRequireDefault(_styleKeeper);

	var _resolveStyles = __webpack_require__(7);

	var _resolveStyles2 = _interopRequireDefault(_resolveStyles);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var KEYS_TO_IGNORE_WHEN_COPYING_PROPERTIES = ['arguments', 'callee', 'caller', 'length', 'name', 'prototype', 'type'];

	function copyProperties(source, target) {
	  Object.getOwnPropertyNames(source).forEach(function (key) {
	    if (KEYS_TO_IGNORE_WHEN_COPYING_PROPERTIES.indexOf(key) < 0 && !target.hasOwnProperty(key)) {
	      var descriptor = Object.getOwnPropertyDescriptor(source, key);
	      Object.defineProperty(target, key, descriptor);
	    }
	  });
	}

	function isStateless(component) {
	  return !component.render && !(component.prototype && component.prototype.render);
	}

	function enhanceWithRadium(configOrComposedComponent) {
	  var _class, _temp;

	  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  if (typeof configOrComposedComponent !== 'function') {
	    var newConfig = _extends({}, config, configOrComposedComponent);
	    return function (configOrComponent) {
	      return enhanceWithRadium(configOrComponent, newConfig);
	    };
	  }

	  var component = configOrComposedComponent;
	  var ComposedComponent = component;

	  // Handle stateless components
	  if (isStateless(ComposedComponent)) {
	    ComposedComponent = function (_Component) {
	      _inherits(ComposedComponent, _Component);

	      function ComposedComponent() {
	        _classCallCheck(this, ComposedComponent);

	        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	      }

	      ComposedComponent.prototype.render = function render() {
	        return component(this.props, this.context);
	      };

	      return ComposedComponent;
	    }(_react.Component);
	    ComposedComponent.displayName = component.displayName || component.name;
	  }

	  var RadiumEnhancer = (_temp = _class = function (_ComposedComponent) {
	    _inherits(RadiumEnhancer, _ComposedComponent);

	    function RadiumEnhancer() {
	      _classCallCheck(this, RadiumEnhancer);

	      var _this2 = _possibleConstructorReturn(this, _ComposedComponent.apply(this, arguments));

	      _this2.state = _this2.state || {};
	      _this2.state._radiumStyleState = {};
	      _this2._radiumIsMounted = true;
	      return _this2;
	    }

	    RadiumEnhancer.prototype.componentWillUnmount = function componentWillUnmount() {
	      if (_ComposedComponent.prototype.componentWillUnmount) {
	        _ComposedComponent.prototype.componentWillUnmount.call(this);
	      }

	      this._radiumIsMounted = false;

	      if (this._radiumMouseUpListener) {
	        this._radiumMouseUpListener.remove();
	      }

	      if (this._radiumMediaQueryListenersByQuery) {
	        Object.keys(this._radiumMediaQueryListenersByQuery).forEach(function (query) {
	          this._radiumMediaQueryListenersByQuery[query].remove();
	        }, this);
	      }
	    };

	    RadiumEnhancer.prototype.getChildContext = function getChildContext() {
	      var superChildContext = _ComposedComponent.prototype.getChildContext ? _ComposedComponent.prototype.getChildContext.call(this) : {};

	      if (!this.props.radiumConfig) {
	        return superChildContext;
	      }

	      var newContext = _extends({}, superChildContext);

	      if (this.props.radiumConfig) {
	        newContext._radiumConfig = this.props.radiumConfig;
	      }

	      return newContext;
	    };

	    RadiumEnhancer.prototype.render = function render() {
	      var renderedElement = _ComposedComponent.prototype.render.call(this);
	      var currentConfig = this.props.radiumConfig || this.context._radiumConfig || config;

	      if (config && currentConfig !== config) {
	        currentConfig = _extends({}, config, currentConfig);
	      }

	      return (0, _resolveStyles2.default)(this, renderedElement, currentConfig);
	    };

	    return RadiumEnhancer;
	  }(ComposedComponent), _class._isRadiumEnhanced = true, _temp);

	  // Class inheritance uses Object.create and because of __proto__ issues
	  // with IE <10 any static properties of the superclass aren't inherited and
	  // so need to be manually populated.
	  // See http://babeljs.io/docs/advanced/caveats/#classes-10-and-below-

	  copyProperties(component, RadiumEnhancer);

	  if (process.env.NODE_ENV !== 'production') {
	    // This also fixes React Hot Loader by exposing the original components top
	    // level prototype methods on the Radium enhanced prototype as discussed in
	    // https://github.com/FormidableLabs/radium/issues/219.
	    copyProperties(ComposedComponent.prototype, RadiumEnhancer.prototype);
	  }

	  if (RadiumEnhancer.propTypes && RadiumEnhancer.propTypes.style) {
	    RadiumEnhancer.propTypes = _extends({}, RadiumEnhancer.propTypes, {
	      style: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.object])
	    });
	  }

	  RadiumEnhancer.displayName = component.displayName || component.name || 'Component';

	  RadiumEnhancer.contextTypes = _extends({}, RadiumEnhancer.contextTypes, {
	    _radiumConfig: _react.PropTypes.object,
	    _radiumStyleKeeper: _react.PropTypes.instanceOf(_styleKeeper2.default)
	  });

	  RadiumEnhancer.childContextTypes = _extends({}, RadiumEnhancer.childContextTypes, {
	    _radiumConfig: _react.PropTypes.object,
	    _radiumStyleKeeper: _react.PropTypes.instanceOf(_styleKeeper2.default)
	  });

	  return RadiumEnhancer;
	}
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var StyleKeeper = function () {
	  function StyleKeeper(userAgent) {
	    _classCallCheck(this, StyleKeeper);

	    this._userAgent = userAgent;
	    this._listeners = [];
	    this._cssSet = {};
	  }

	  StyleKeeper.prototype.subscribe = function subscribe(listener) {
	    var _this = this;

	    if (this._listeners.indexOf(listener) === -1) {
	      this._listeners.push(listener);
	    }

	    return {
	      // Must be fat arrow to capture `this`
	      remove: function remove() {
	        var listenerIndex = _this._listeners.indexOf(listener);
	        if (listenerIndex > -1) {
	          _this._listeners.splice(listenerIndex, 1);
	        }
	      }
	    };
	  };

	  StyleKeeper.prototype.addCSS = function addCSS(css) {
	    var _this2 = this;

	    if (!this._cssSet[css]) {
	      this._cssSet[css] = true;
	      this._emitChange();
	    }

	    return {
	      // Must be fat arrow to capture `this`
	      remove: function remove() {
	        delete _this2._cssSet[css];
	        _this2._emitChange();
	      }
	    };
	  };

	  StyleKeeper.prototype.getCSS = function getCSS() {
	    return Object.keys(this._cssSet).join('\n');
	  };

	  StyleKeeper.prototype._emitChange = function _emitChange() {
	    this._listeners.forEach(function (listener) {
	      return listener();
	    });
	  };

	  return StyleKeeper;
	}();

	exports.default = StyleKeeper;
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _appendImportantToEachValue = __webpack_require__(8);

	var _appendImportantToEachValue2 = _interopRequireDefault(_appendImportantToEachValue);

	var _cssRuleSetToString = __webpack_require__(11);

	var _cssRuleSetToString2 = _interopRequireDefault(_cssRuleSetToString);

	var _getState = __webpack_require__(49);

	var _getState2 = _interopRequireDefault(_getState);

	var _getStateKey = __webpack_require__(50);

	var _getStateKey2 = _interopRequireDefault(_getStateKey);

	var _hash = __webpack_require__(51);

	var _hash2 = _interopRequireDefault(_hash);

	var _mergeStyles = __webpack_require__(52);

	var _plugins = __webpack_require__(53);

	var _plugins2 = _interopRequireDefault(_plugins);

	var _exenv = __webpack_require__(63);

	var _exenv2 = _interopRequireDefault(_exenv);

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var DEFAULT_CONFIG = {
	  plugins: [_plugins2.default.mergeStyleArray, _plugins2.default.checkProps, _plugins2.default.resolveMediaQueries, _plugins2.default.resolveInteractionStyles, _plugins2.default.keyframes, _plugins2.default.visited, _plugins2.default.removeNestedStyles, _plugins2.default.prefix, _plugins2.default.checkProps]
	};

	// Gross
	var globalState = {};

	// Declare early for recursive helpers.
	var resolveStyles = null;

	var _shouldResolveStyles = function _shouldResolveStyles(component) {
	  return component.type && !component.type._isRadiumEnhanced;
	};

	var _resolveChildren = function _resolveChildren(_ref) {
	  var children = _ref.children,
	      component = _ref.component,
	      config = _ref.config,
	      existingKeyMap = _ref.existingKeyMap;

	  if (!children) {
	    return children;
	  }

	  var childrenType = typeof children === 'undefined' ? 'undefined' : _typeof(children);

	  if (childrenType === 'string' || childrenType === 'number') {
	    // Don't do anything with a single primitive child
	    return children;
	  }

	  if (childrenType === 'function') {
	    // Wrap the function, resolving styles on the result
	    return function () {
	      var result = children.apply(this, arguments);
	      if (_react2.default.isValidElement(result)) {
	        return resolveStyles(component, result, config, existingKeyMap, true);
	      }
	      return result;
	    };
	  }

	  if (_react2.default.Children.count(children) === 1 && children.type) {
	    // If a React Element is an only child, don't wrap it in an array for
	    // React.Children.map() for React.Children.only() compatibility.
	    var onlyChild = _react2.default.Children.only(children);
	    return resolveStyles(component, onlyChild, config, existingKeyMap, true);
	  }

	  return _react2.default.Children.map(children, function (child) {
	    if (_react2.default.isValidElement(child)) {
	      return resolveStyles(component, child, config, existingKeyMap, true);
	    }

	    return child;
	  });
	};

	// Recurse over props, just like children
	var _resolveProps = function _resolveProps(_ref2) {
	  var component = _ref2.component,
	      config = _ref2.config,
	      existingKeyMap = _ref2.existingKeyMap,
	      props = _ref2.props;

	  var newProps = props;

	  Object.keys(props).forEach(function (prop) {
	    // We already recurse over children above
	    if (prop === 'children') {
	      return;
	    }

	    var propValue = props[prop];
	    if (_react2.default.isValidElement(propValue)) {
	      newProps = _extends({}, newProps);
	      newProps[prop] = resolveStyles(component, propValue, config, existingKeyMap, true);
	    }
	  });

	  return newProps;
	};

	var _buildGetKey = function _buildGetKey(_ref3) {
	  var componentName = _ref3.componentName,
	      existingKeyMap = _ref3.existingKeyMap,
	      renderedElement = _ref3.renderedElement;

	  // We need a unique key to correlate state changes due to user interaction
	  // with the rendered element, so we know to apply the proper interactive
	  // styles.
	  var originalKey = typeof renderedElement.ref === 'string' ? renderedElement.ref : renderedElement.key;
	  var key = (0, _getStateKey2.default)(originalKey);

	  var alreadyGotKey = false;
	  var getKey = function getKey() {
	    if (alreadyGotKey) {
	      return key;
	    }

	    alreadyGotKey = true;

	    if (existingKeyMap[key]) {
	      var elementName = void 0;
	      if (typeof renderedElement.type === 'string') {
	        elementName = renderedElement.type;
	      } else if (renderedElement.type.constructor) {
	        elementName = renderedElement.type.constructor.displayName || renderedElement.type.constructor.name;
	      }

	      throw new Error('Radium requires each element with interactive styles to have a unique ' + 'key, set using either the ref or key prop. ' + (originalKey ? 'Key "' + originalKey + '" is a duplicate.' : 'Multiple elements have no key specified.') + ' ' + 'Component: "' + componentName + '". ' + (elementName ? 'Element: "' + elementName + '".' : ''));
	    }

	    existingKeyMap[key] = true;

	    return key;
	  };

	  return getKey;
	};

	var _setStyleState = function _setStyleState(component, key, stateKey, value) {
	  if (!component._radiumIsMounted) {
	    return;
	  }

	  var existing = component._lastRadiumState || component.state && component.state._radiumStyleState || {};

	  var state = { _radiumStyleState: _extends({}, existing) };
	  state._radiumStyleState[key] = _extends({}, state._radiumStyleState[key]);
	  state._radiumStyleState[key][stateKey] = value;

	  component._lastRadiumState = state._radiumStyleState;
	  component.setState(state);
	};

	var _runPlugins = function _runPlugins(_ref4) {
	  var component = _ref4.component,
	      config = _ref4.config,
	      existingKeyMap = _ref4.existingKeyMap,
	      props = _ref4.props,
	      renderedElement = _ref4.renderedElement;

	  // Don't run plugins if renderedElement is not a simple ReactDOMElement or has
	  // no style.
	  if (!_react2.default.isValidElement(renderedElement) || typeof renderedElement.type !== 'string' || !props.style) {
	    return props;
	  }

	  var newProps = props;

	  var plugins = config.plugins || DEFAULT_CONFIG.plugins;

	  var componentName = component.constructor.displayName || component.constructor.name;
	  var getKey = _buildGetKey({
	    renderedElement: renderedElement,
	    existingKeyMap: existingKeyMap,
	    componentName: componentName
	  });
	  var getComponentField = function getComponentField(key) {
	    return component[key];
	  };
	  var getGlobalState = function getGlobalState(key) {
	    return globalState[key];
	  };
	  var componentGetState = function componentGetState(stateKey, elementKey) {
	    return (0, _getState2.default)(component.state, elementKey || getKey(), stateKey);
	  };
	  var setState = function setState(stateKey, value, elementKey) {
	    return _setStyleState(component, elementKey || getKey(), stateKey, value);
	  };

	  var addCSS = function addCSS(css) {
	    var styleKeeper = component._radiumStyleKeeper || component.context._radiumStyleKeeper;
	    if (!styleKeeper) {
	      if (__isTestModeEnabled) {
	        return {
	          remove: function remove() {}
	        };
	      }

	      throw new Error('To use plugins requiring `addCSS` (e.g. keyframes, media queries), ' + 'please wrap your application in the StyleRoot component. Component ' + 'name: `' + componentName + '`.');
	    }

	    return styleKeeper.addCSS(css);
	  };

	  var newStyle = props.style;

	  plugins.forEach(function (plugin) {
	    var result = plugin({
	      ExecutionEnvironment: _exenv2.default,
	      addCSS: addCSS,
	      appendImportantToEachValue: _appendImportantToEachValue2.default,
	      componentName: componentName,
	      config: config,
	      cssRuleSetToString: _cssRuleSetToString2.default,
	      getComponentField: getComponentField,
	      getGlobalState: getGlobalState,
	      getState: componentGetState,
	      hash: _hash2.default,
	      mergeStyles: _mergeStyles.mergeStyles,
	      props: newProps,
	      setState: setState,
	      isNestedStyle: _mergeStyles.isNestedStyle,
	      style: newStyle
	    }) || {};

	    newStyle = result.style || newStyle;

	    newProps = result.props && Object.keys(result.props).length ? _extends({}, newProps, result.props) : newProps;

	    var newComponentFields = result.componentFields || {};
	    Object.keys(newComponentFields).forEach(function (fieldName) {
	      component[fieldName] = newComponentFields[fieldName];
	    });

	    var newGlobalState = result.globalState || {};
	    Object.keys(newGlobalState).forEach(function (key) {
	      globalState[key] = newGlobalState[key];
	    });
	  });

	  if (newStyle !== props.style) {
	    newProps = _extends({}, newProps, { style: newStyle });
	  }

	  return newProps;
	};

	// Wrapper around React.cloneElement. To avoid processing the same element
	// twice, whenever we clone an element add a special prop to make sure we don't
	// process this element again.
	var _cloneElement = function _cloneElement(renderedElement, newProps, newChildren) {
	  // Only add flag if this is a normal DOM element
	  if (typeof renderedElement.type === 'string') {
	    newProps = _extends({}, newProps, { 'data-radium': true });
	  }

	  return _react2.default.cloneElement(renderedElement, newProps, newChildren);
	};

	//
	// The nucleus of Radium. resolveStyles is called on the rendered elements
	// before they are returned in render. It iterates over the elements and
	// children, rewriting props to add event handlers required to capture user
	// interactions (e.g. mouse over). It also replaces the style prop because it
	// adds in the various interaction styles (e.g. :hover).
	//
	resolveStyles = function resolveStyles(component, // ReactComponent, flow+eslint complaining
	renderedElement) {
	  var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAULT_CONFIG;
	  var existingKeyMap = arguments[3];
	  var shouldCheckBeforeResolve = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

	  // ReactElement
	  existingKeyMap = existingKeyMap || {};
	  if (!renderedElement ||
	  // Bail if we've already processed this element. This ensures that only the
	  // owner of an element processes that element, since the owner's render
	  // function will be called first (which will always be the case, since you
	  // can't know what else to render until you render the parent component).
	  renderedElement.props && renderedElement.props['data-radium'] ||
	  // Bail if this element is a radium enhanced element, because if it is,
	  // then it will take care of resolving its own styles.
	  shouldCheckBeforeResolve && !_shouldResolveStyles(renderedElement)) {
	    return renderedElement;
	  }

	  var newChildren = _resolveChildren({
	    children: renderedElement.props.children,
	    component: component,
	    config: config,
	    existingKeyMap: existingKeyMap
	  });

	  var newProps = _resolveProps({
	    component: component,
	    config: config,
	    existingKeyMap: existingKeyMap,
	    props: renderedElement.props
	  });

	  newProps = _runPlugins({
	    component: component,
	    config: config,
	    existingKeyMap: existingKeyMap,
	    props: newProps,
	    renderedElement: renderedElement
	  });

	  // If nothing changed, don't bother cloning the element. Might be a bit
	  // wasteful, as we add the sentinal to stop double-processing when we clone.
	  // Assume benign double-processing is better than unneeded cloning.
	  if (newChildren === renderedElement.props.children && newProps === renderedElement.props) {
	    return renderedElement;
	  }

	  return _cloneElement(renderedElement, newProps !== renderedElement.props ? newProps : {}, newChildren);
	};

	// Only for use by tests
	var __isTestModeEnabled = false;
	if (process.env.NODE_ENV !== 'production') {
	  resolveStyles.__clearStateForTests = function () {
	    globalState = {};
	  };
	  resolveStyles.__setTestMode = function (isEnabled) {
	    __isTestModeEnabled = isEnabled;
	  };
	}

	exports.default = resolveStyles;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = appendImportantToEachValue;

	var _appendPxIfNeeded = __webpack_require__(9);

	var _appendPxIfNeeded2 = _interopRequireDefault(_appendPxIfNeeded);

	var _mapObject = __webpack_require__(10);

	var _mapObject2 = _interopRequireDefault(_mapObject);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function appendImportantToEachValue(style) {
	  return (0, _mapObject2.default)(style, function (result, key) {
	    return (0, _appendPxIfNeeded2.default)(key, style[key]) + ' !important';
	  });
	}
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = appendPxIfNeeded;


	// Copied from https://github.com/facebook/react/blob/
	// 102cd291899f9942a76c40a0e78920a6fe544dc1/
	// src/renderers/dom/shared/CSSProperty.js
	var isUnitlessNumber = {
	  animationIterationCount: true,
	  boxFlex: true,
	  boxFlexGroup: true,
	  boxOrdinalGroup: true,
	  columnCount: true,
	  flex: true,
	  flexGrow: true,
	  flexPositive: true,
	  flexShrink: true,
	  flexNegative: true,
	  flexOrder: true,
	  gridRow: true,
	  gridColumn: true,
	  fontWeight: true,
	  lineClamp: true,
	  lineHeight: true,
	  opacity: true,
	  order: true,
	  orphans: true,
	  tabSize: true,
	  widows: true,
	  zIndex: true,
	  zoom: true,

	  // SVG-related properties
	  fillOpacity: true,
	  stopOpacity: true,
	  strokeDashoffset: true,
	  strokeOpacity: true,
	  strokeWidth: true
	};

	function appendPxIfNeeded(propertyName, value) {
	  var needsPxSuffix = !isUnitlessNumber[propertyName] && typeof value === 'number' && value !== 0;
	  return needsPxSuffix ? value + 'px' : value;
	}
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = mapObject;
	function mapObject(object, mapper) {
	  return Object.keys(object).reduce(function (result, key) {
	    result[key] = mapper(object[key], key);
	    return result;
	  }, {});
	}
	module.exports = exports["default"];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = cssRuleSetToString;

	var _appendPxIfNeeded = __webpack_require__(9);

	var _appendPxIfNeeded2 = _interopRequireDefault(_appendPxIfNeeded);

	var _camelCasePropsToDashCase = __webpack_require__(12);

	var _camelCasePropsToDashCase2 = _interopRequireDefault(_camelCasePropsToDashCase);

	var _mapObject = __webpack_require__(10);

	var _mapObject2 = _interopRequireDefault(_mapObject);

	var _prefixer = __webpack_require__(13);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function createMarkupForStyles(style) {
	  return Object.keys(style).map(function (property) {
	    return property + ': ' + style[property] + ';';
	  }).join('\n');
	}

	function cssRuleSetToString(selector, rules, userAgent) {
	  if (!rules) {
	    return '';
	  }

	  var rulesWithPx = (0, _mapObject2.default)(rules, function (value, key) {
	    return (0, _appendPxIfNeeded2.default)(key, value);
	  });
	  var prefixedRules = (0, _prefixer.getPrefixedStyle)(rulesWithPx, userAgent);
	  var cssPrefixedRules = (0, _camelCasePropsToDashCase2.default)(prefixedRules);
	  var serializedRules = createMarkupForStyles(cssPrefixedRules);

	  return selector + '{' + serializedRules + '}';
	}
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var _camelCaseRegex = /([a-z])?([A-Z])/g;

	var _camelCaseReplacer = function _camelCaseReplacer(match, p1, p2) {
	  return (p1 || '') + '-' + p2.toLowerCase();
	};

	var _camelCaseToDashCase = function _camelCaseToDashCase(s) {
	  return s.replace(_camelCaseRegex, _camelCaseReplacer);
	};

	var camelCasePropsToDashCase = function camelCasePropsToDashCase(prefixedStyle) {
	  // Since prefix is expected to work on inline style objects, we must
	  // translate the keys to dash case for rendering to CSS.
	  return Object.keys(prefixedStyle).reduce(function (result, key) {
	    var dashCaseKey = _camelCaseToDashCase(key);

	    // Fix IE vendor prefix
	    if (/^ms-/.test(dashCaseKey)) {
	      dashCaseKey = '-' + dashCaseKey;
	    }

	    result[dashCaseKey] = prefixedStyle[key];
	    return result;
	  }, {});
	};

	exports.default = camelCasePropsToDashCase;
	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
	                                                                                                                                                                                                                                                                               * Based on https://github.com/jsstyles/css-vendor, but without having to
	                                                                                                                                                                                                                                                                               * convert between different cases all the time.
	                                                                                                                                                                                                                                                                               *
	                                                                                                                                                                                                                                                                               * 
	                                                                                                                                                                                                                                                                               */

	exports.getPrefixedKeyframes = getPrefixedKeyframes;
	exports.getPrefixedStyle = getPrefixedStyle;

	var _inlineStylePrefixer = __webpack_require__(14);

	var _inlineStylePrefixer2 = _interopRequireDefault(_inlineStylePrefixer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function transformValues(style) {
	  return Object.keys(style).reduce(function (newStyle, key) {
	    var value = style[key];
	    if (Array.isArray(value)) {
	      value = value.join(';' + key + ':');
	    } else if (value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && typeof value.toString === 'function') {
	      value = value.toString();
	    }

	    newStyle[key] = value;
	    return newStyle;
	  }, {});
	}

	var _hasWarnedAboutUserAgent = false;
	var _lastUserAgent = void 0;
	var _cachedPrefixer = void 0;

	function getPrefixer(userAgent) {
	  var actualUserAgent = userAgent || global && global.navigator && global.navigator.userAgent;

	  if (process.env.NODE_ENV !== 'production') {
	    if (!actualUserAgent && !_hasWarnedAboutUserAgent) {
	      /* eslint-disable no-console */
	      console.warn('Radium: userAgent should be supplied for server-side rendering. See ' + 'https://github.com/FormidableLabs/radium/tree/master/docs/api#radium ' + 'for more information.');
	      /* eslint-enable no-console */
	      _hasWarnedAboutUserAgent = true;
	    }
	  }

	  if (!_cachedPrefixer || actualUserAgent !== _lastUserAgent) {
	    if (actualUserAgent === 'all') {
	      _cachedPrefixer = {
	        prefix: _inlineStylePrefixer2.default.prefixAll,
	        prefixedKeyframes: 'keyframes'
	      };
	    } else {
	      _cachedPrefixer = new _inlineStylePrefixer2.default({ userAgent: actualUserAgent });
	    }
	    _lastUserAgent = actualUserAgent;
	  }
	  return _cachedPrefixer;
	}

	function getPrefixedKeyframes(userAgent) {
	  return getPrefixer(userAgent).prefixedKeyframes;
	}

	// Returns a new style object with vendor prefixes added to property names
	// and values.
	function getPrefixedStyle(style, userAgent) {
	  var styleWithFallbacks = transformValues(style);
	  var prefixer = getPrefixer(userAgent);
	  var prefixedStyle = prefixer.prefix(styleWithFallbacks);
	  return prefixedStyle;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(3)))

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	// special flexbox specifications


	var _prefixAll2 = __webpack_require__(15);

	var _prefixAll3 = _interopRequireDefault(_prefixAll2);

	var _getBrowserInformation = __webpack_require__(32);

	var _getBrowserInformation2 = _interopRequireDefault(_getBrowserInformation);

	var _getPrefixedKeyframes = __webpack_require__(35);

	var _getPrefixedKeyframes2 = _interopRequireDefault(_getPrefixedKeyframes);

	var _capitalizeString = __webpack_require__(17);

	var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

	var _sortPrefixedStyle = __webpack_require__(18);

	var _sortPrefixedStyle2 = _interopRequireDefault(_sortPrefixedStyle);

	var _prefixProps = __webpack_require__(36);

	var _prefixProps2 = _interopRequireDefault(_prefixProps);

	var _position = __webpack_require__(37);

	var _position2 = _interopRequireDefault(_position);

	var _calc = __webpack_require__(39);

	var _calc2 = _interopRequireDefault(_calc);

	var _zoomCursor = __webpack_require__(40);

	var _zoomCursor2 = _interopRequireDefault(_zoomCursor);

	var _grabCursor = __webpack_require__(41);

	var _grabCursor2 = _interopRequireDefault(_grabCursor);

	var _flex = __webpack_require__(42);

	var _flex2 = _interopRequireDefault(_flex);

	var _sizing = __webpack_require__(43);

	var _sizing2 = _interopRequireDefault(_sizing);

	var _gradient = __webpack_require__(44);

	var _gradient2 = _interopRequireDefault(_gradient);

	var _transition = __webpack_require__(45);

	var _transition2 = _interopRequireDefault(_transition);

	var _flexboxIE = __webpack_require__(47);

	var _flexboxIE2 = _interopRequireDefault(_flexboxIE);

	var _flexboxOld = __webpack_require__(48);

	var _flexboxOld2 = _interopRequireDefault(_flexboxOld);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var plugins = [_position2.default, _calc2.default, _zoomCursor2.default, _grabCursor2.default, _sizing2.default, _gradient2.default, _transition2.default, _flexboxIE2.default, _flexboxOld2.default,
	// this must be run AFTER the flexbox specs
	_flex2.default];

	var Prefixer = function () {
	  /**
	   * Instantiante a new prefixer
	   * @param {string} userAgent - userAgent to gather prefix information according to caniuse.com
	   * @param {string} keepUnprefixed - keeps unprefixed properties and values
	   */

	  function Prefixer() {
	    var _this = this;

	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    _classCallCheck(this, Prefixer);

	    var defaultUserAgent = typeof navigator !== 'undefined' ? navigator.userAgent : undefined;

	    this._userAgent = options.userAgent || defaultUserAgent;
	    this._keepUnprefixed = options.keepUnprefixed || false;

	    this._browserInfo = (0, _getBrowserInformation2.default)(this._userAgent);

	    // Checks if the userAgent was resolved correctly
	    if (this._browserInfo && this._browserInfo.prefix) {
	      // set additional prefix information
	      this.cssPrefix = this._browserInfo.prefix.css;
	      this.jsPrefix = this._browserInfo.prefix.inline;
	      this.prefixedKeyframes = (0, _getPrefixedKeyframes2.default)(this._browserInfo);
	    } else {
	      this._usePrefixAllFallback = true;
	      return false;
	    }

	    var data = this._browserInfo.browser && _prefixProps2.default[this._browserInfo.browser];
	    if (data) {
	      this._requiresPrefix = Object.keys(data).filter(function (key) {
	        return data[key] >= _this._browserInfo.version;
	      }).reduce(function (result, name) {
	        result[name] = true;
	        return result;
	      }, {});
	      this._hasPropsRequiringPrefix = Object.keys(this._requiresPrefix).length > 0;
	    } else {
	      this._usePrefixAllFallback = true;
	    }
	  }

	  /**
	   * Returns a prefixed version of the style object
	   * @param {Object} styles - Style object that gets prefixed properties added
	   * @returns {Object} - Style object with prefixed properties and values
	   */


	  _createClass(Prefixer, [{
	    key: 'prefix',
	    value: function prefix(styles) {
	      var _this2 = this;

	      // use prefixAll as fallback if userAgent can not be resolved
	      if (this._usePrefixAllFallback) {
	        return (0, _prefixAll3.default)(styles);
	      }

	      // only add prefixes if needed
	      if (!this._hasPropsRequiringPrefix) {
	        return styles;
	      }

	      Object.keys(styles).forEach(function (property) {
	        var value = styles[property];
	        if (value instanceof Object && !Array.isArray(value)) {
	          // recurse through nested style objects
	          styles[property] = _this2.prefix(value);
	        } else {
	          // add prefixes if needed
	          if (_this2._requiresPrefix[property]) {
	            styles[_this2.jsPrefix + (0, _capitalizeString2.default)(property)] = value;
	            if (!_this2._keepUnprefixed) {
	              delete styles[property];
	            }
	          }
	        }
	      });

	      Object.keys(styles).forEach(function (property) {
	        [].concat(styles[property]).forEach(function (value) {
	          // resolve plugins
	          plugins.forEach(function (plugin) {
	            // generates a new plugin interface with current data
	            assignStyles(styles, plugin({
	              property: property,
	              value: value,
	              styles: styles,
	              browserInfo: _this2._browserInfo,
	              prefix: {
	                js: _this2.jsPrefix,
	                css: _this2.cssPrefix,
	                keyframes: _this2.prefixedKeyframes
	              },
	              keepUnprefixed: _this2._keepUnprefixed,
	              requiresPrefix: _this2._requiresPrefix
	            }), value, _this2._keepUnprefixed);
	          });
	        });
	      });

	      return (0, _sortPrefixedStyle2.default)(styles);
	    }

	    /**
	     * Returns a prefixed version of the style object using all vendor prefixes
	     * @param {Object} styles - Style object that gets prefixed properties added
	     * @returns {Object} - Style object with prefixed properties and values
	     */

	  }], [{
	    key: 'prefixAll',
	    value: function prefixAll(styles) {
	      return (0, _prefixAll3.default)(styles);
	    }
	  }]);

	  return Prefixer;
	}();

	exports.default = Prefixer;


	function assignStyles(base) {
	  var extend = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	  var value = arguments[2];
	  var keepUnprefixed = arguments[3];

	  Object.keys(extend).forEach(function (property) {
	    var baseValue = base[property];
	    if (Array.isArray(baseValue)) {
	      [].concat(extend[property]).forEach(function (val) {
	        if (base[property].indexOf(val) === -1) {
	          base[property].splice(baseValue.indexOf(value), keepUnprefixed ? 0 : 1, val);
	        }
	      });
	    } else {
	      base[property] = extend[property];
	    }
	  });
	}
	module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = prefixAll;

	var _prefixProps = __webpack_require__(16);

	var _prefixProps2 = _interopRequireDefault(_prefixProps);

	var _capitalizeString = __webpack_require__(17);

	var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

	var _sortPrefixedStyle = __webpack_require__(18);

	var _sortPrefixedStyle2 = _interopRequireDefault(_sortPrefixedStyle);

	var _position = __webpack_require__(20);

	var _position2 = _interopRequireDefault(_position);

	var _calc = __webpack_require__(21);

	var _calc2 = _interopRequireDefault(_calc);

	var _cursor = __webpack_require__(24);

	var _cursor2 = _interopRequireDefault(_cursor);

	var _flex = __webpack_require__(25);

	var _flex2 = _interopRequireDefault(_flex);

	var _sizing = __webpack_require__(26);

	var _sizing2 = _interopRequireDefault(_sizing);

	var _gradient = __webpack_require__(27);

	var _gradient2 = _interopRequireDefault(_gradient);

	var _transition = __webpack_require__(28);

	var _transition2 = _interopRequireDefault(_transition);

	var _flexboxIE = __webpack_require__(30);

	var _flexboxIE2 = _interopRequireDefault(_flexboxIE);

	var _flexboxOld = __webpack_require__(31);

	var _flexboxOld2 = _interopRequireDefault(_flexboxOld);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// special flexbox specifications


	var plugins = [_position2.default, _calc2.default, _cursor2.default, _sizing2.default, _gradient2.default, _transition2.default, _flexboxIE2.default, _flexboxOld2.default, _flex2.default];

	/**
	 * Returns a prefixed version of the style object using all vendor prefixes
	 * @param {Object} styles - Style object that gets prefixed properties added
	 * @returns {Object} - Style object with prefixed properties and values
	 */
	function prefixAll(styles) {
	  Object.keys(styles).forEach(function (property) {
	    var value = styles[property];
	    if (value instanceof Object && !Array.isArray(value)) {
	      // recurse through nested style objects
	      styles[property] = prefixAll(value);
	    } else {
	      Object.keys(_prefixProps2.default).forEach(function (prefix) {
	        var properties = _prefixProps2.default[prefix];
	        // add prefixes if needed
	        if (properties[property]) {
	          styles[prefix + (0, _capitalizeString2.default)(property)] = value;
	        }
	      });
	    }
	  });

	  Object.keys(styles).forEach(function (property) {
	    [].concat(styles[property]).forEach(function (value, index) {
	      // resolve every special plugins
	      plugins.forEach(function (plugin) {
	        return assignStyles(styles, plugin(property, value));
	      });
	    });
	  });

	  return (0, _sortPrefixedStyle2.default)(styles);
	}

	function assignStyles(base) {
	  var extend = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	  Object.keys(extend).forEach(function (property) {
	    var baseValue = base[property];
	    if (Array.isArray(baseValue)) {
	      [].concat(extend[property]).forEach(function (value) {
	        var valueIndex = baseValue.indexOf(value);
	        if (valueIndex > -1) {
	          base[property].splice(valueIndex, 1);
	        }
	        base[property].push(value);
	      });
	    } else {
	      base[property] = extend[property];
	    }
	  });
	}
	module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = { "Webkit": { "transform": true, "transformOrigin": true, "transformOriginX": true, "transformOriginY": true, "backfaceVisibility": true, "perspective": true, "perspectiveOrigin": true, "transformStyle": true, "transformOriginZ": true, "animation": true, "animationDelay": true, "animationDirection": true, "animationFillMode": true, "animationDuration": true, "animationIterationCount": true, "animationName": true, "animationPlayState": true, "animationTimingFunction": true, "appearance": true, "userSelect": true, "fontKerning": true, "textEmphasisPosition": true, "textEmphasis": true, "textEmphasisStyle": true, "textEmphasisColor": true, "boxDecorationBreak": true, "clipPath": true, "maskImage": true, "maskMode": true, "maskRepeat": true, "maskPosition": true, "maskClip": true, "maskOrigin": true, "maskSize": true, "maskComposite": true, "mask": true, "maskBorderSource": true, "maskBorderMode": true, "maskBorderSlice": true, "maskBorderWidth": true, "maskBorderOutset": true, "maskBorderRepeat": true, "maskBorder": true, "maskType": true, "textDecorationStyle": true, "textDecorationSkip": true, "textDecorationLine": true, "textDecorationColor": true, "filter": true, "fontFeatureSettings": true, "breakAfter": true, "breakBefore": true, "breakInside": true, "columnCount": true, "columnFill": true, "columnGap": true, "columnRule": true, "columnRuleColor": true, "columnRuleStyle": true, "columnRuleWidth": true, "columns": true, "columnSpan": true, "columnWidth": true, "flex": true, "flexBasis": true, "flexDirection": true, "flexGrow": true, "flexFlow": true, "flexShrink": true, "flexWrap": true, "alignContent": true, "alignItems": true, "alignSelf": true, "justifyContent": true, "order": true, "transition": true, "transitionDelay": true, "transitionDuration": true, "transitionProperty": true, "transitionTimingFunction": true, "backdropFilter": true, "scrollSnapType": true, "scrollSnapPointsX": true, "scrollSnapPointsY": true, "scrollSnapDestination": true, "scrollSnapCoordinate": true, "shapeImageThreshold": true, "shapeImageMargin": true, "shapeImageOutside": true, "hyphens": true, "flowInto": true, "flowFrom": true, "regionFragment": true, "textSizeAdjust": true }, "Moz": { "appearance": true, "userSelect": true, "boxSizing": true, "textAlignLast": true, "textDecorationStyle": true, "textDecorationSkip": true, "textDecorationLine": true, "textDecorationColor": true, "tabSize": true, "hyphens": true, "fontFeatureSettings": true, "breakAfter": true, "breakBefore": true, "breakInside": true, "columnCount": true, "columnFill": true, "columnGap": true, "columnRule": true, "columnRuleColor": true, "columnRuleStyle": true, "columnRuleWidth": true, "columns": true, "columnSpan": true, "columnWidth": true }, "ms": { "flex": true, "flexBasis": false, "flexDirection": true, "flexGrow": false, "flexFlow": true, "flexShrink": false, "flexWrap": true, "alignContent": false, "alignItems": false, "alignSelf": false, "justifyContent": false, "order": false, "transform": true, "transformOrigin": true, "transformOriginX": true, "transformOriginY": true, "userSelect": true, "wrapFlow": true, "wrapThrough": true, "wrapMargin": true, "scrollSnapType": true, "scrollSnapPointsX": true, "scrollSnapPointsY": true, "scrollSnapDestination": true, "scrollSnapCoordinate": true, "touchAction": true, "hyphens": true, "flowInto": true, "flowFrom": true, "breakBefore": true, "breakAfter": true, "breakInside": true, "regionFragment": true, "gridTemplateColumns": true, "gridTemplateRows": true, "gridTemplateAreas": true, "gridTemplate": true, "gridAutoColumns": true, "gridAutoRows": true, "gridAutoFlow": true, "grid": true, "gridRowStart": true, "gridColumnStart": true, "gridRowEnd": true, "gridRow": true, "gridColumn": true, "gridColumnEnd": true, "gridColumnGap": true, "gridRowGap": true, "gridArea": true, "gridGap": true, "textSizeAdjust": true } };
	module.exports = exports["default"];

/***/ },
/* 17 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// helper to capitalize strings

	exports.default = function (str) {
	  return str.charAt(0).toUpperCase() + str.slice(1);
	};

	module.exports = exports["default"];

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = sortPrefixedStyle;

	var _isPrefixedProperty = __webpack_require__(19);

	var _isPrefixedProperty2 = _interopRequireDefault(_isPrefixedProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function sortPrefixedStyle(style) {
	  return Object.keys(style).sort(function (left, right) {
	    if ((0, _isPrefixedProperty2.default)(left) && !(0, _isPrefixedProperty2.default)(right)) {
	      return -1;
	    } else if (!(0, _isPrefixedProperty2.default)(left) && (0, _isPrefixedProperty2.default)(right)) {
	      return 1;
	    }
	    return 0;
	  }).reduce(function (sortedStyle, prop) {
	    sortedStyle[prop] = style[prop];
	    return sortedStyle;
	  }, {});
	}
	module.exports = exports['default'];

/***/ },
/* 19 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (property) {
	  return property.match(/^(Webkit|Moz|O|ms)/) !== null;
	};

	module.exports = exports["default"];

/***/ },
/* 20 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = position;
	function position(property, value) {
	  if (property === 'position' && value === 'sticky') {
	    return { position: ['-webkit-sticky', 'sticky'] };
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = calc;

	var _joinPrefixedValue = __webpack_require__(22);

	var _joinPrefixedValue2 = _interopRequireDefault(_joinPrefixedValue);

	var _isPrefixedValue = __webpack_require__(23);

	var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function calc(property, value) {
	  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('calc(') > -1) {
	    return (0, _joinPrefixedValue2.default)(property, value, function (prefix, value) {
	      return value.replace(/calc\(/g, prefix + 'calc(');
	    });
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	// returns a style object with a single concated prefixed value string

	exports.default = function (property, value) {
	  var replacer = arguments.length <= 2 || arguments[2] === undefined ? function (prefix, value) {
	    return prefix + value;
	  } : arguments[2];
	  return _defineProperty({}, property, ['-webkit-', '-moz-', ''].map(function (prefix) {
	    return replacer(prefix, value);
	  }));
	};

	module.exports = exports['default'];

/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (value) {
	  if (Array.isArray(value)) value = value.join(',');

	  return value.match(/-webkit-|-moz-|-ms-/) !== null;
	};

	module.exports = exports['default'];

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = cursor;

	var _joinPrefixedValue = __webpack_require__(22);

	var _joinPrefixedValue2 = _interopRequireDefault(_joinPrefixedValue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var values = {
	  'zoom-in': true,
	  'zoom-out': true,
	  grab: true,
	  grabbing: true
	};

	function cursor(property, value) {
	  if (property === 'cursor' && values[value]) {
	    return (0, _joinPrefixedValue2.default)(property, value);
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 25 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = flex;
	var values = { flex: true, 'inline-flex': true };

	function flex(property, value) {
	  if (property === 'display' && values[value]) {
	    return {
	      display: ['-webkit-box', '-moz-box', '-ms-' + value + 'box', '-webkit-' + value, value]
	    };
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = sizing;

	var _joinPrefixedValue = __webpack_require__(22);

	var _joinPrefixedValue2 = _interopRequireDefault(_joinPrefixedValue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var properties = {
	  maxHeight: true,
	  maxWidth: true,
	  width: true,
	  height: true,
	  columnWidth: true,
	  minWidth: true,
	  minHeight: true
	};
	var values = {
	  'min-content': true,
	  'max-content': true,
	  'fill-available': true,
	  'fit-content': true,
	  'contain-floats': true
	};

	function sizing(property, value) {
	  if (properties[property] && values[value]) {
	    return (0, _joinPrefixedValue2.default)(property, value);
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = gradient;

	var _joinPrefixedValue = __webpack_require__(22);

	var _joinPrefixedValue2 = _interopRequireDefault(_joinPrefixedValue);

	var _isPrefixedValue = __webpack_require__(23);

	var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/;

	function gradient(property, value) {
	  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.match(values) !== null) {
	    return (0, _joinPrefixedValue2.default)(property, value);
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = transition;

	var _hyphenateStyleName = __webpack_require__(29);

	var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);

	var _capitalizeString = __webpack_require__(17);

	var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

	var _isPrefixedValue = __webpack_require__(23);

	var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

	var _prefixProps = __webpack_require__(16);

	var _prefixProps2 = _interopRequireDefault(_prefixProps);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var properties = {
	  transition: true,
	  transitionProperty: true,
	  WebkitTransition: true,
	  WebkitTransitionProperty: true
	};

	function transition(property, value) {
	  // also check for already prefixed transitions
	  if (typeof value === 'string' && properties[property]) {
	    var _ref2;

	    var outputValue = prefixValue(value);
	    var webkitOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (value) {
	      return value.match(/-moz-|-ms-/) === null;
	    }).join(',');

	    // if the property is already prefixed
	    if (property.indexOf('Webkit') > -1) {
	      return _defineProperty({}, property, webkitOutput);
	    }

	    return _ref2 = {}, _defineProperty(_ref2, 'Webkit' + (0, _capitalizeString2.default)(property), webkitOutput), _defineProperty(_ref2, property, outputValue), _ref2;
	  }
	}

	function prefixValue(value) {
	  if ((0, _isPrefixedValue2.default)(value)) {
	    return value;
	  }

	  // only split multi values, not cubic beziers
	  var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);

	  // iterate each single value and check for transitioned properties
	  // that need to be prefixed as well
	  multipleValues.forEach(function (val, index) {
	    multipleValues[index] = Object.keys(_prefixProps2.default).reduce(function (out, prefix) {
	      var dashCasePrefix = '-' + prefix.toLowerCase() + '-';

	      Object.keys(_prefixProps2.default[prefix]).forEach(function (prop) {
	        var dashCaseProperty = (0, _hyphenateStyleName2.default)(prop);

	        if (val.indexOf(dashCaseProperty) > -1 && dashCaseProperty !== 'order') {
	          // join all prefixes and create a new value
	          out = val.replace(dashCaseProperty, dashCasePrefix + dashCaseProperty) + ',' + out;
	        }
	      });
	      return out;
	    }, val);
	  });

	  return multipleValues.join(',');
	}
	module.exports = exports['default'];

/***/ },
/* 29 */
/***/ function(module, exports) {

	'use strict';

	var uppercasePattern = /[A-Z]/g;
	var msPattern = /^ms-/;
	var cache = {};

	function hyphenateStyleName(string) {
	    return string in cache
	    ? cache[string]
	    : cache[string] = string
	      .replace(uppercasePattern, '-$&')
	      .toLowerCase()
	      .replace(msPattern, '-ms-');
	}

	module.exports = hyphenateStyleName;


/***/ },
/* 30 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = flexboxIE;

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var alternativeValues = {
	  'space-around': 'distribute',
	  'space-between': 'justify',
	  'flex-start': 'start',
	  'flex-end': 'end'
	};
	var alternativeProps = {
	  alignContent: 'msFlexLinePack',
	  alignSelf: 'msFlexItemAlign',
	  alignItems: 'msFlexAlign',
	  justifyContent: 'msFlexPack',
	  order: 'msFlexOrder',
	  flexGrow: 'msFlexPositive',
	  flexShrink: 'msFlexNegative',
	  flexBasis: 'msPreferredSize'
	};

	function flexboxIE(property, value) {
	  if (alternativeProps[property]) {
	    return _defineProperty({}, alternativeProps[property], alternativeValues[value] || value);
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 31 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = flexboxOld;

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var alternativeValues = {
	  'space-around': 'justify',
	  'space-between': 'justify',
	  'flex-start': 'start',
	  'flex-end': 'end',
	  'wrap-reverse': 'multiple',
	  wrap: 'multiple'
	};

	var alternativeProps = {
	  alignItems: 'WebkitBoxAlign',
	  justifyContent: 'WebkitBoxPack',
	  flexWrap: 'WebkitBoxLines'
	};

	function flexboxOld(property, value) {
	  if (property === 'flexDirection' && typeof value === 'string') {
	    return {
	      WebkitBoxOrient: value.indexOf('column') > -1 ? 'vertical' : 'horizontal',
	      WebkitBoxDirection: value.indexOf('reverse') > -1 ? 'reverse' : 'normal'
	    };
	  }
	  if (alternativeProps[property]) {
	    return _defineProperty({}, alternativeProps[property], alternativeValues[value] || value);
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _bowser = __webpack_require__(33);

	var _bowser2 = _interopRequireDefault(_bowser);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var vendorPrefixes = {
	  Webkit: ['chrome', 'safari', 'ios', 'android', 'phantom', 'opera', 'webos', 'blackberry', 'bada', 'tizen', 'chromium', 'vivaldi'],
	  Moz: ['firefox', 'seamonkey', 'sailfish'],
	  ms: ['msie', 'msedge']
	};
	var browsers = {
	  chrome: [['chrome'], ['chromium']],
	  safari: [['safari']],
	  firefox: [['firefox']],
	  edge: [['msedge']],
	  opera: [['opera'], ['vivaldi']],
	  ios_saf: [['ios', 'mobile'], ['ios', 'tablet']],
	  ie: [['msie']],
	  op_mini: [['opera', 'mobile'], ['opera', 'tablet']],
	  and_uc: [['android', 'mobile'], ['android', 'tablet']],
	  android: [['android', 'mobile'], ['android', 'tablet']]
	};

	var browserByInfo = function browserByInfo(info) {
	  if (info.firefox) {
	    return 'firefox';
	  }
	  var name = '';

	  Object.keys(browsers).forEach(function (browser) {
	    browsers[browser].forEach(function (condition) {
	      var match = 0;
	      condition.forEach(function (single) {
	        if (info[single]) {
	          match += 1;
	        }
	      });
	      if (condition.length === match) {
	        name = browser;
	      }
	    });
	  });

	  return name;
	};

	/**
	 * Uses bowser to get default browser information such as version and name
	 * Evaluates bowser info and adds vendorPrefix information
	 * @param {string} userAgent - userAgent that gets evaluated
	 */

	exports.default = function (userAgent) {
	  if (!userAgent) {
	    return false;
	  }
	  var info = _bowser2.default._detect(userAgent);

	  Object.keys(vendorPrefixes).forEach(function (prefix) {
	    vendorPrefixes[prefix].forEach(function (browser) {
	      if (info[browser]) {
	        info.prefix = {
	          inline: prefix,
	          css: '-' + prefix.toLowerCase() + '-'
	        };
	      }
	    });
	  });

	  info.browser = browserByInfo(info);

	  // For cordova IOS 8 the version is missing, set truncated osversion to prevent NaN
	  info.version = info.version ? parseFloat(info.version) : parseInt(parseFloat(info.osversion), 10);
	  info.osversion = parseFloat(info.osversion);

	  // iOS forces all browsers to use Safari under the hood
	  // as the Safari version seems to match the iOS version
	  // we just explicitely use the osversion instead
	  // https://github.com/rofrischmann/inline-style-prefixer/issues/72
	  if (info.browser === 'ios_saf' && info.version > info.osversion) {
	    info.version = info.osversion;
	    info.safari = true;
	  }

	  // seperate native android chrome
	  // https://github.com/rofrischmann/inline-style-prefixer/issues/45
	  if (info.browser === 'android' && info.chrome && info.version > 37) {
	    info.browser = 'and_chr';
	  }

	  // For android < 4.4 we want to check the osversion
	  // not the chrome version, see issue #26
	  // https://github.com/rofrischmann/inline-style-prefixer/issues/26
	  if (info.browser === 'android' && info.osversion < 5) {
	    info.version = info.osversion;
	  }

	  return info;
	};

	module.exports = exports['default'];

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Bowser - a browser detector
	 * https://github.com/ded/bowser
	 * MIT License | (c) Dustin Diaz 2015
	 */

	!function (root, name, definition) {
	  if (typeof module != 'undefined' && module.exports) module.exports = definition()
	  else if (true) __webpack_require__(34)(name, definition)
	  else root[name] = definition()
	}(this, 'bowser', function () {
	  /**
	    * See useragents.js for examples of navigator.userAgent
	    */

	  var t = true

	  function detect(ua) {

	    function getFirstMatch(regex) {
	      var match = ua.match(regex);
	      return (match && match.length > 1 && match[1]) || '';
	    }

	    function getSecondMatch(regex) {
	      var match = ua.match(regex);
	      return (match && match.length > 1 && match[2]) || '';
	    }

	    var iosdevice = getFirstMatch(/(ipod|iphone|ipad)/i).toLowerCase()
	      , likeAndroid = /like android/i.test(ua)
	      , android = !likeAndroid && /android/i.test(ua)
	      , nexusMobile = /nexus\s*[0-6]\s*/i.test(ua)
	      , nexusTablet = !nexusMobile && /nexus\s*[0-9]+/i.test(ua)
	      , chromeos = /CrOS/.test(ua)
	      , silk = /silk/i.test(ua)
	      , sailfish = /sailfish/i.test(ua)
	      , tizen = /tizen/i.test(ua)
	      , webos = /(web|hpw)os/i.test(ua)
	      , windowsphone = /windows phone/i.test(ua)
	      , samsungBrowser = /SamsungBrowser/i.test(ua)
	      , windows = !windowsphone && /windows/i.test(ua)
	      , mac = !iosdevice && !silk && /macintosh/i.test(ua)
	      , linux = !android && !sailfish && !tizen && !webos && /linux/i.test(ua)
	      , edgeVersion = getFirstMatch(/edge\/(\d+(\.\d+)?)/i)
	      , versionIdentifier = getFirstMatch(/version\/(\d+(\.\d+)?)/i)
	      , tablet = /tablet/i.test(ua)
	      , mobile = !tablet && /[^-]mobi/i.test(ua)
	      , xbox = /xbox/i.test(ua)
	      , result

	    if (/opera/i.test(ua)) {
	      //  an old Opera
	      result = {
	        name: 'Opera'
	      , opera: t
	      , version: versionIdentifier || getFirstMatch(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
	      }
	    } else if (/opr|opios/i.test(ua)) {
	      // a new Opera
	      result = {
	        name: 'Opera'
	        , opera: t
	        , version: getFirstMatch(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || versionIdentifier
	      }
	    }
	    else if (/SamsungBrowser/i.test(ua)) {
	      result = {
	        name: 'Samsung Internet for Android'
	        , samsungBrowser: t
	        , version: versionIdentifier || getFirstMatch(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/coast/i.test(ua)) {
	      result = {
	        name: 'Opera Coast'
	        , coast: t
	        , version: versionIdentifier || getFirstMatch(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/yabrowser/i.test(ua)) {
	      result = {
	        name: 'Yandex Browser'
	      , yandexbrowser: t
	      , version: versionIdentifier || getFirstMatch(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/ucbrowser/i.test(ua)) {
	      result = {
	          name: 'UC Browser'
	        , ucbrowser: t
	        , version: getFirstMatch(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
	      }
	    }
	    else if (/mxios/i.test(ua)) {
	      result = {
	        name: 'Maxthon'
	        , maxthon: t
	        , version: getFirstMatch(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
	      }
	    }
	    else if (/epiphany/i.test(ua)) {
	      result = {
	        name: 'Epiphany'
	        , epiphany: t
	        , version: getFirstMatch(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
	      }
	    }
	    else if (/puffin/i.test(ua)) {
	      result = {
	        name: 'Puffin'
	        , puffin: t
	        , version: getFirstMatch(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
	      }
	    }
	    else if (/sleipnir/i.test(ua)) {
	      result = {
	        name: 'Sleipnir'
	        , sleipnir: t
	        , version: getFirstMatch(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
	      }
	    }
	    else if (/k-meleon/i.test(ua)) {
	      result = {
	        name: 'K-Meleon'
	        , kMeleon: t
	        , version: getFirstMatch(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
	      }
	    }
	    else if (windowsphone) {
	      result = {
	        name: 'Windows Phone'
	      , windowsphone: t
	      }
	      if (edgeVersion) {
	        result.msedge = t
	        result.version = edgeVersion
	      }
	      else {
	        result.msie = t
	        result.version = getFirstMatch(/iemobile\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/msie|trident/i.test(ua)) {
	      result = {
	        name: 'Internet Explorer'
	      , msie: t
	      , version: getFirstMatch(/(?:msie |rv:)(\d+(\.\d+)?)/i)
	      }
	    } else if (chromeos) {
	      result = {
	        name: 'Chrome'
	      , chromeos: t
	      , chromeBook: t
	      , chrome: t
	      , version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
	      }
	    } else if (/chrome.+? edge/i.test(ua)) {
	      result = {
	        name: 'Microsoft Edge'
	      , msedge: t
	      , version: edgeVersion
	      }
	    }
	    else if (/vivaldi/i.test(ua)) {
	      result = {
	        name: 'Vivaldi'
	        , vivaldi: t
	        , version: getFirstMatch(/vivaldi\/(\d+(\.\d+)?)/i) || versionIdentifier
	      }
	    }
	    else if (sailfish) {
	      result = {
	        name: 'Sailfish'
	      , sailfish: t
	      , version: getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/seamonkey\//i.test(ua)) {
	      result = {
	        name: 'SeaMonkey'
	      , seamonkey: t
	      , version: getFirstMatch(/seamonkey\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/firefox|iceweasel|fxios/i.test(ua)) {
	      result = {
	        name: 'Firefox'
	      , firefox: t
	      , version: getFirstMatch(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
	      }
	      if (/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(ua)) {
	        result.firefoxos = t
	      }
	    }
	    else if (silk) {
	      result =  {
	        name: 'Amazon Silk'
	      , silk: t
	      , version : getFirstMatch(/silk\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/phantom/i.test(ua)) {
	      result = {
	        name: 'PhantomJS'
	      , phantom: t
	      , version: getFirstMatch(/phantomjs\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/slimerjs/i.test(ua)) {
	      result = {
	        name: 'SlimerJS'
	        , slimer: t
	        , version: getFirstMatch(/slimerjs\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/blackberry|\bbb\d+/i.test(ua) || /rim\stablet/i.test(ua)) {
	      result = {
	        name: 'BlackBerry'
	      , blackberry: t
	      , version: versionIdentifier || getFirstMatch(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (webos) {
	      result = {
	        name: 'WebOS'
	      , webos: t
	      , version: versionIdentifier || getFirstMatch(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
	      };
	      /touchpad\//i.test(ua) && (result.touchpad = t)
	    }
	    else if (/bada/i.test(ua)) {
	      result = {
	        name: 'Bada'
	      , bada: t
	      , version: getFirstMatch(/dolfin\/(\d+(\.\d+)?)/i)
	      };
	    }
	    else if (tizen) {
	      result = {
	        name: 'Tizen'
	      , tizen: t
	      , version: getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || versionIdentifier
	      };
	    }
	    else if (/qupzilla/i.test(ua)) {
	      result = {
	        name: 'QupZilla'
	        , qupzilla: t
	        , version: getFirstMatch(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || versionIdentifier
	      }
	    }
	    else if (/chromium/i.test(ua)) {
	      result = {
	        name: 'Chromium'
	        , chromium: t
	        , version: getFirstMatch(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || versionIdentifier
	      }
	    }
	    else if (/chrome|crios|crmo/i.test(ua)) {
	      result = {
	        name: 'Chrome'
	        , chrome: t
	        , version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (android) {
	      result = {
	        name: 'Android'
	        , version: versionIdentifier
	      }
	    }
	    else if (/safari|applewebkit/i.test(ua)) {
	      result = {
	        name: 'Safari'
	      , safari: t
	      }
	      if (versionIdentifier) {
	        result.version = versionIdentifier
	      }
	    }
	    else if (iosdevice) {
	      result = {
	        name : iosdevice == 'iphone' ? 'iPhone' : iosdevice == 'ipad' ? 'iPad' : 'iPod'
	      }
	      // WTF: version is not part of user agent in web apps
	      if (versionIdentifier) {
	        result.version = versionIdentifier
	      }
	    }
	    else if(/googlebot/i.test(ua)) {
	      result = {
	        name: 'Googlebot'
	      , googlebot: t
	      , version: getFirstMatch(/googlebot\/(\d+(\.\d+))/i) || versionIdentifier
	      }
	    }
	    else {
	      result = {
	        name: getFirstMatch(/^(.*)\/(.*) /),
	        version: getSecondMatch(/^(.*)\/(.*) /)
	     };
	   }

	    // set webkit or gecko flag for browsers based on these engines
	    if (!result.msedge && /(apple)?webkit/i.test(ua)) {
	      if (/(apple)?webkit\/537\.36/i.test(ua)) {
	        result.name = result.name || "Blink"
	        result.blink = t
	      } else {
	        result.name = result.name || "Webkit"
	        result.webkit = t
	      }
	      if (!result.version && versionIdentifier) {
	        result.version = versionIdentifier
	      }
	    } else if (!result.opera && /gecko\//i.test(ua)) {
	      result.name = result.name || "Gecko"
	      result.gecko = t
	      result.version = result.version || getFirstMatch(/gecko\/(\d+(\.\d+)?)/i)
	    }

	    // set OS flags for platforms that have multiple browsers
	    if (!result.windowsphone && !result.msedge && (android || result.silk)) {
	      result.android = t
	    } else if (!result.windowsphone && !result.msedge && iosdevice) {
	      result[iosdevice] = t
	      result.ios = t
	    } else if (mac) {
	      result.mac = t
	    } else if (xbox) {
	      result.xbox = t
	    } else if (windows) {
	      result.windows = t
	    } else if (linux) {
	      result.linux = t
	    }

	    // OS version extraction
	    var osVersion = '';
	    if (result.windowsphone) {
	      osVersion = getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i);
	    } else if (iosdevice) {
	      osVersion = getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i);
	      osVersion = osVersion.replace(/[_\s]/g, '.');
	    } else if (android) {
	      osVersion = getFirstMatch(/android[ \/-](\d+(\.\d+)*)/i);
	    } else if (result.webos) {
	      osVersion = getFirstMatch(/(?:web|hpw)os\/(\d+(\.\d+)*)/i);
	    } else if (result.blackberry) {
	      osVersion = getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i);
	    } else if (result.bada) {
	      osVersion = getFirstMatch(/bada\/(\d+(\.\d+)*)/i);
	    } else if (result.tizen) {
	      osVersion = getFirstMatch(/tizen[\/\s](\d+(\.\d+)*)/i);
	    }
	    if (osVersion) {
	      result.osversion = osVersion;
	    }

	    // device type extraction
	    var osMajorVersion = osVersion.split('.')[0];
	    if (
	         tablet
	      || nexusTablet
	      || iosdevice == 'ipad'
	      || (android && (osMajorVersion == 3 || (osMajorVersion >= 4 && !mobile)))
	      || result.silk
	    ) {
	      result.tablet = t
	    } else if (
	         mobile
	      || iosdevice == 'iphone'
	      || iosdevice == 'ipod'
	      || android
	      || nexusMobile
	      || result.blackberry
	      || result.webos
	      || result.bada
	    ) {
	      result.mobile = t
	    }

	    // Graded Browser Support
	    // http://developer.yahoo.com/yui/articles/gbs
	    if (result.msedge ||
	        (result.msie && result.version >= 10) ||
	        (result.yandexbrowser && result.version >= 15) ||
			    (result.vivaldi && result.version >= 1.0) ||
	        (result.chrome && result.version >= 20) ||
	        (result.samsungBrowser && result.version >= 4) ||
	        (result.firefox && result.version >= 20.0) ||
	        (result.safari && result.version >= 6) ||
	        (result.opera && result.version >= 10.0) ||
	        (result.ios && result.osversion && result.osversion.split(".")[0] >= 6) ||
	        (result.blackberry && result.version >= 10.1)
	        || (result.chromium && result.version >= 20)
	        ) {
	      result.a = t;
	    }
	    else if ((result.msie && result.version < 10) ||
	        (result.chrome && result.version < 20) ||
	        (result.firefox && result.version < 20.0) ||
	        (result.safari && result.version < 6) ||
	        (result.opera && result.version < 10.0) ||
	        (result.ios && result.osversion && result.osversion.split(".")[0] < 6)
	        || (result.chromium && result.version < 20)
	        ) {
	      result.c = t
	    } else result.x = t

	    return result
	  }

	  var bowser = detect(typeof navigator !== 'undefined' ? navigator.userAgent || '' : '')

	  bowser.test = function (browserList) {
	    for (var i = 0; i < browserList.length; ++i) {
	      var browserItem = browserList[i];
	      if (typeof browserItem=== 'string') {
	        if (browserItem in bowser) {
	          return true;
	        }
	      }
	    }
	    return false;
	  }

	  /**
	   * Get version precisions count
	   *
	   * @example
	   *   getVersionPrecision("1.10.3") // 3
	   *
	   * @param  {string} version
	   * @return {number}
	   */
	  function getVersionPrecision(version) {
	    return version.split(".").length;
	  }

	  /**
	   * Array::map polyfill
	   *
	   * @param  {Array} arr
	   * @param  {Function} iterator
	   * @return {Array}
	   */
	  function map(arr, iterator) {
	    var result = [], i;
	    if (Array.prototype.map) {
	      return Array.prototype.map.call(arr, iterator);
	    }
	    for (i = 0; i < arr.length; i++) {
	      result.push(iterator(arr[i]));
	    }
	    return result;
	  }

	  /**
	   * Calculate browser version weight
	   *
	   * @example
	   *   compareVersions(['1.10.2.1',  '1.8.2.1.90'])    // 1
	   *   compareVersions(['1.010.2.1', '1.09.2.1.90']);  // 1
	   *   compareVersions(['1.10.2.1',  '1.10.2.1']);     // 0
	   *   compareVersions(['1.10.2.1',  '1.0800.2']);     // -1
	   *
	   * @param  {Array<String>} versions versions to compare
	   * @return {Number} comparison result
	   */
	  function compareVersions(versions) {
	    // 1) get common precision for both versions, for example for "10.0" and "9" it should be 2
	    var precision = Math.max(getVersionPrecision(versions[0]), getVersionPrecision(versions[1]));
	    var chunks = map(versions, function (version) {
	      var delta = precision - getVersionPrecision(version);

	      // 2) "9" -> "9.0" (for precision = 2)
	      version = version + new Array(delta + 1).join(".0");

	      // 3) "9.0" -> ["000000000"", "000000009"]
	      return map(version.split("."), function (chunk) {
	        return new Array(20 - chunk.length).join("0") + chunk;
	      }).reverse();
	    });

	    // iterate in reverse order by reversed chunks array
	    while (--precision >= 0) {
	      // 4) compare: "000000009" > "000000010" = false (but "9" > "10" = true)
	      if (chunks[0][precision] > chunks[1][precision]) {
	        return 1;
	      }
	      else if (chunks[0][precision] === chunks[1][precision]) {
	        if (precision === 0) {
	          // all version chunks are same
	          return 0;
	        }
	      }
	      else {
	        return -1;
	      }
	    }
	  }

	  /**
	   * Check if browser is unsupported
	   *
	   * @example
	   *   bowser.isUnsupportedBrowser({
	   *     msie: "10",
	   *     firefox: "23",
	   *     chrome: "29",
	   *     safari: "5.1",
	   *     opera: "16",
	   *     phantom: "534"
	   *   });
	   *
	   * @param  {Object}  minVersions map of minimal version to browser
	   * @param  {Boolean} [strictMode = false] flag to return false if browser wasn't found in map
	   * @param  {String}  [ua] user agent string
	   * @return {Boolean}
	   */
	  function isUnsupportedBrowser(minVersions, strictMode, ua) {
	    var _bowser = bowser;

	    // make strictMode param optional with ua param usage
	    if (typeof strictMode === 'string') {
	      ua = strictMode;
	      strictMode = void(0);
	    }

	    if (strictMode === void(0)) {
	      strictMode = false;
	    }
	    if (ua) {
	      _bowser = detect(ua);
	    }

	    var version = "" + _bowser.version;
	    for (var browser in minVersions) {
	      if (minVersions.hasOwnProperty(browser)) {
	        if (_bowser[browser]) {
	          if (typeof minVersions[browser] !== 'string') {
	            throw new Error('Browser version in the minVersion map should be a string: ' + browser + ': ' + String(minVersions));
	          }

	          // browser version and min supported version.
	          return compareVersions([version, minVersions[browser]]) < 0;
	        }
	      }
	    }

	    return strictMode; // not found
	  }

	  /**
	   * Check if browser is supported
	   *
	   * @param  {Object} minVersions map of minimal version to browser
	   * @param  {Boolean} [strictMode = false] flag to return false if browser wasn't found in map
	   * @param  {String}  [ua] user agent string
	   * @return {Boolean}
	   */
	  function check(minVersions, strictMode, ua) {
	    return !isUnsupportedBrowser(minVersions, strictMode, ua);
	  }

	  bowser.isUnsupportedBrowser = isUnsupportedBrowser;
	  bowser.compareVersions = compareVersions;
	  bowser.check = check;

	  /*
	   * Set our detect method to the main bowser object so we can
	   * reuse it to test other user agents.
	   * This is needed to implement future tests.
	   */
	  bowser._detect = detect;

	  return bowser
	});


/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ },
/* 35 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (_ref) {
	  var browser = _ref.browser;
	  var version = _ref.version;
	  var prefix = _ref.prefix;

	  var prefixedKeyframes = 'keyframes';

	  if (browser === 'chrome' && version < 43 || (browser === 'safari' || browser === 'ios_saf') && version < 9 || browser === 'opera' && version < 30 || browser === 'android' && version <= 4.4 || browser === 'and_uc') {
	    prefixedKeyframes = prefix.css + prefixedKeyframes;
	  }
	  return prefixedKeyframes;
	};

	module.exports = exports['default'];

/***/ },
/* 36 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = { "chrome": { "transform": 35, "transformOrigin": 35, "transformOriginX": 35, "transformOriginY": 35, "backfaceVisibility": 35, "perspective": 35, "perspectiveOrigin": 35, "transformStyle": 35, "transformOriginZ": 35, "animation": 42, "animationDelay": 42, "animationDirection": 42, "animationFillMode": 42, "animationDuration": 42, "animationIterationCount": 42, "animationName": 42, "animationPlayState": 42, "animationTimingFunction": 42, "appearance": 55, "userSelect": 55, "fontKerning": 32, "textEmphasisPosition": 55, "textEmphasis": 55, "textEmphasisStyle": 55, "textEmphasisColor": 55, "boxDecorationBreak": 55, "clipPath": 55, "maskImage": 55, "maskMode": 55, "maskRepeat": 55, "maskPosition": 55, "maskClip": 55, "maskOrigin": 55, "maskSize": 55, "maskComposite": 55, "mask": 55, "maskBorderSource": 55, "maskBorderMode": 55, "maskBorderSlice": 55, "maskBorderWidth": 55, "maskBorderOutset": 55, "maskBorderRepeat": 55, "maskBorder": 55, "maskType": 55, "textDecorationStyle": 55, "textDecorationSkip": 55, "textDecorationLine": 55, "textDecorationColor": 55, "filter": 52, "fontFeatureSettings": 47, "breakAfter": 49, "breakBefore": 49, "breakInside": 49, "columnCount": 49, "columnFill": 49, "columnGap": 49, "columnRule": 49, "columnRuleColor": 49, "columnRuleStyle": 49, "columnRuleWidth": 49, "columns": 49, "columnSpan": 49, "columnWidth": 49 }, "safari": { "flex": 8, "flexBasis": 8, "flexDirection": 8, "flexGrow": 8, "flexFlow": 8, "flexShrink": 8, "flexWrap": 8, "alignContent": 8, "alignItems": 8, "alignSelf": 8, "justifyContent": 8, "order": 8, "transition": 6, "transitionDelay": 6, "transitionDuration": 6, "transitionProperty": 6, "transitionTimingFunction": 6, "transform": 8, "transformOrigin": 8, "transformOriginX": 8, "transformOriginY": 8, "backfaceVisibility": 8, "perspective": 8, "perspectiveOrigin": 8, "transformStyle": 8, "transformOriginZ": 8, "animation": 8, "animationDelay": 8, "animationDirection": 8, "animationFillMode": 8, "animationDuration": 8, "animationIterationCount": 8, "animationName": 8, "animationPlayState": 8, "animationTimingFunction": 8, "appearance": 10, "userSelect": 10, "backdropFilter": 10, "fontKerning": 9, "scrollSnapType": 10, "scrollSnapPointsX": 10, "scrollSnapPointsY": 10, "scrollSnapDestination": 10, "scrollSnapCoordinate": 10, "textEmphasisPosition": 7, "textEmphasis": 7, "textEmphasisStyle": 7, "textEmphasisColor": 7, "boxDecorationBreak": 10, "clipPath": 10, "maskImage": 10, "maskMode": 10, "maskRepeat": 10, "maskPosition": 10, "maskClip": 10, "maskOrigin": 10, "maskSize": 10, "maskComposite": 10, "mask": 10, "maskBorderSource": 10, "maskBorderMode": 10, "maskBorderSlice": 10, "maskBorderWidth": 10, "maskBorderOutset": 10, "maskBorderRepeat": 10, "maskBorder": 10, "maskType": 10, "textDecorationStyle": 10, "textDecorationSkip": 10, "textDecorationLine": 10, "textDecorationColor": 10, "shapeImageThreshold": 10, "shapeImageMargin": 10, "shapeImageOutside": 10, "filter": 9, "hyphens": 10, "flowInto": 10, "flowFrom": 10, "breakBefore": 8, "breakAfter": 8, "breakInside": 8, "regionFragment": 10, "columnCount": 8, "columnFill": 8, "columnGap": 8, "columnRule": 8, "columnRuleColor": 8, "columnRuleStyle": 8, "columnRuleWidth": 8, "columns": 8, "columnSpan": 8, "columnWidth": 8 }, "firefox": { "appearance": 51, "userSelect": 51, "boxSizing": 28, "textAlignLast": 48, "textDecorationStyle": 35, "textDecorationSkip": 35, "textDecorationLine": 35, "textDecorationColor": 35, "tabSize": 51, "hyphens": 42, "fontFeatureSettings": 33, "breakAfter": 51, "breakBefore": 51, "breakInside": 51, "columnCount": 51, "columnFill": 51, "columnGap": 51, "columnRule": 51, "columnRuleColor": 51, "columnRuleStyle": 51, "columnRuleWidth": 51, "columns": 51, "columnSpan": 51, "columnWidth": 51 }, "opera": { "flex": 16, "flexBasis": 16, "flexDirection": 16, "flexGrow": 16, "flexFlow": 16, "flexShrink": 16, "flexWrap": 16, "alignContent": 16, "alignItems": 16, "alignSelf": 16, "justifyContent": 16, "order": 16, "transform": 22, "transformOrigin": 22, "transformOriginX": 22, "transformOriginY": 22, "backfaceVisibility": 22, "perspective": 22, "perspectiveOrigin": 22, "transformStyle": 22, "transformOriginZ": 22, "animation": 29, "animationDelay": 29, "animationDirection": 29, "animationFillMode": 29, "animationDuration": 29, "animationIterationCount": 29, "animationName": 29, "animationPlayState": 29, "animationTimingFunction": 29, "appearance": 41, "userSelect": 41, "fontKerning": 19, "textEmphasisPosition": 41, "textEmphasis": 41, "textEmphasisStyle": 41, "textEmphasisColor": 41, "boxDecorationBreak": 41, "clipPath": 41, "maskImage": 41, "maskMode": 41, "maskRepeat": 41, "maskPosition": 41, "maskClip": 41, "maskOrigin": 41, "maskSize": 41, "maskComposite": 41, "mask": 41, "maskBorderSource": 41, "maskBorderMode": 41, "maskBorderSlice": 41, "maskBorderWidth": 41, "maskBorderOutset": 41, "maskBorderRepeat": 41, "maskBorder": 41, "maskType": 41, "textDecorationStyle": 41, "textDecorationSkip": 41, "textDecorationLine": 41, "textDecorationColor": 41, "filter": 39, "fontFeatureSettings": 34, "breakAfter": 36, "breakBefore": 36, "breakInside": 36, "columnCount": 36, "columnFill": 36, "columnGap": 36, "columnRule": 36, "columnRuleColor": 36, "columnRuleStyle": 36, "columnRuleWidth": 36, "columns": 36, "columnSpan": 36, "columnWidth": 36 }, "ie": { "flex": 10, "flexDirection": 10, "flexFlow": 10, "flexWrap": 10, "transform": 9, "transformOrigin": 9, "transformOriginX": 9, "transformOriginY": 9, "userSelect": 11, "wrapFlow": 11, "wrapThrough": 11, "wrapMargin": 11, "scrollSnapType": 11, "scrollSnapPointsX": 11, "scrollSnapPointsY": 11, "scrollSnapDestination": 11, "scrollSnapCoordinate": 11, "touchAction": 10, "hyphens": 11, "flowInto": 11, "flowFrom": 11, "breakBefore": 11, "breakAfter": 11, "breakInside": 11, "regionFragment": 11, "gridTemplateColumns": 11, "gridTemplateRows": 11, "gridTemplateAreas": 11, "gridTemplate": 11, "gridAutoColumns": 11, "gridAutoRows": 11, "gridAutoFlow": 11, "grid": 11, "gridRowStart": 11, "gridColumnStart": 11, "gridRowEnd": 11, "gridRow": 11, "gridColumn": 11, "gridColumnEnd": 11, "gridColumnGap": 11, "gridRowGap": 11, "gridArea": 11, "gridGap": 11, "textSizeAdjust": 11 }, "edge": { "userSelect": 14, "wrapFlow": 14, "wrapThrough": 14, "wrapMargin": 14, "scrollSnapType": 14, "scrollSnapPointsX": 14, "scrollSnapPointsY": 14, "scrollSnapDestination": 14, "scrollSnapCoordinate": 14, "hyphens": 14, "flowInto": 14, "flowFrom": 14, "breakBefore": 14, "breakAfter": 14, "breakInside": 14, "regionFragment": 14, "gridTemplateColumns": 14, "gridTemplateRows": 14, "gridTemplateAreas": 14, "gridTemplate": 14, "gridAutoColumns": 14, "gridAutoRows": 14, "gridAutoFlow": 14, "grid": 14, "gridRowStart": 14, "gridColumnStart": 14, "gridRowEnd": 14, "gridRow": 14, "gridColumn": 14, "gridColumnEnd": 14, "gridColumnGap": 14, "gridRowGap": 14, "gridArea": 14, "gridGap": 14 }, "ios_saf": { "flex": 8.1, "flexBasis": 8.1, "flexDirection": 8.1, "flexGrow": 8.1, "flexFlow": 8.1, "flexShrink": 8.1, "flexWrap": 8.1, "alignContent": 8.1, "alignItems": 8.1, "alignSelf": 8.1, "justifyContent": 8.1, "order": 8.1, "transition": 6, "transitionDelay": 6, "transitionDuration": 6, "transitionProperty": 6, "transitionTimingFunction": 6, "transform": 8.1, "transformOrigin": 8.1, "transformOriginX": 8.1, "transformOriginY": 8.1, "backfaceVisibility": 8.1, "perspective": 8.1, "perspectiveOrigin": 8.1, "transformStyle": 8.1, "transformOriginZ": 8.1, "animation": 8.1, "animationDelay": 8.1, "animationDirection": 8.1, "animationFillMode": 8.1, "animationDuration": 8.1, "animationIterationCount": 8.1, "animationName": 8.1, "animationPlayState": 8.1, "animationTimingFunction": 8.1, "appearance": 9.3, "userSelect": 9.3, "backdropFilter": 9.3, "fontKerning": 9.3, "scrollSnapType": 9.3, "scrollSnapPointsX": 9.3, "scrollSnapPointsY": 9.3, "scrollSnapDestination": 9.3, "scrollSnapCoordinate": 9.3, "boxDecorationBreak": 9.3, "clipPath": 9.3, "maskImage": 9.3, "maskMode": 9.3, "maskRepeat": 9.3, "maskPosition": 9.3, "maskClip": 9.3, "maskOrigin": 9.3, "maskSize": 9.3, "maskComposite": 9.3, "mask": 9.3, "maskBorderSource": 9.3, "maskBorderMode": 9.3, "maskBorderSlice": 9.3, "maskBorderWidth": 9.3, "maskBorderOutset": 9.3, "maskBorderRepeat": 9.3, "maskBorder": 9.3, "maskType": 9.3, "textSizeAdjust": 9.3, "textDecorationStyle": 9.3, "textDecorationSkip": 9.3, "textDecorationLine": 9.3, "textDecorationColor": 9.3, "shapeImageThreshold": 9.3, "shapeImageMargin": 9.3, "shapeImageOutside": 9.3, "filter": 9, "hyphens": 9.3, "flowInto": 9.3, "flowFrom": 9.3, "breakBefore": 8.1, "breakAfter": 8.1, "breakInside": 8.1, "regionFragment": 9.3, "columnCount": 8.1, "columnFill": 8.1, "columnGap": 8.1, "columnRule": 8.1, "columnRuleColor": 8.1, "columnRuleStyle": 8.1, "columnRuleWidth": 8.1, "columns": 8.1, "columnSpan": 8.1, "columnWidth": 8.1 }, "android": { "flex": 4.2, "flexBasis": 4.2, "flexDirection": 4.2, "flexGrow": 4.2, "flexFlow": 4.2, "flexShrink": 4.2, "flexWrap": 4.2, "alignContent": 4.2, "alignItems": 4.2, "alignSelf": 4.2, "justifyContent": 4.2, "order": 4.2, "transition": 4.2, "transitionDelay": 4.2, "transitionDuration": 4.2, "transitionProperty": 4.2, "transitionTimingFunction": 4.2, "transform": 4.4, "transformOrigin": 4.4, "transformOriginX": 4.4, "transformOriginY": 4.4, "backfaceVisibility": 4.4, "perspective": 4.4, "perspectiveOrigin": 4.4, "transformStyle": 4.4, "transformOriginZ": 4.4, "animation": 4.4, "animationDelay": 4.4, "animationDirection": 4.4, "animationFillMode": 4.4, "animationDuration": 4.4, "animationIterationCount": 4.4, "animationName": 4.4, "animationPlayState": 4.4, "animationTimingFunction": 4.4, "appearance": 51, "userSelect": 51, "fontKerning": 4.4, "textEmphasisPosition": 51, "textEmphasis": 51, "textEmphasisStyle": 51, "textEmphasisColor": 51, "boxDecorationBreak": 51, "clipPath": 51, "maskImage": 51, "maskMode": 51, "maskRepeat": 51, "maskPosition": 51, "maskClip": 51, "maskOrigin": 51, "maskSize": 51, "maskComposite": 51, "mask": 51, "maskBorderSource": 51, "maskBorderMode": 51, "maskBorderSlice": 51, "maskBorderWidth": 51, "maskBorderOutset": 51, "maskBorderRepeat": 51, "maskBorder": 51, "maskType": 51, "filter": 51, "fontFeatureSettings": 4.4, "breakAfter": 51, "breakBefore": 51, "breakInside": 51, "columnCount": 51, "columnFill": 51, "columnGap": 51, "columnRule": 51, "columnRuleColor": 51, "columnRuleStyle": 51, "columnRuleWidth": 51, "columns": 51, "columnSpan": 51, "columnWidth": 51 }, "and_chr": { "appearance": 51, "userSelect": 51, "textEmphasisPosition": 51, "textEmphasis": 51, "textEmphasisStyle": 51, "textEmphasisColor": 51, "boxDecorationBreak": 51, "clipPath": 51, "maskImage": 51, "maskMode": 51, "maskRepeat": 51, "maskPosition": 51, "maskClip": 51, "maskOrigin": 51, "maskSize": 51, "maskComposite": 51, "mask": 51, "maskBorderSource": 51, "maskBorderMode": 51, "maskBorderSlice": 51, "maskBorderWidth": 51, "maskBorderOutset": 51, "maskBorderRepeat": 51, "maskBorder": 51, "maskType": 51, "textDecorationStyle": 51, "textDecorationSkip": 51, "textDecorationLine": 51, "textDecorationColor": 51, "filter": 51 }, "and_uc": { "flex": 9.9, "flexBasis": 9.9, "flexDirection": 9.9, "flexGrow": 9.9, "flexFlow": 9.9, "flexShrink": 9.9, "flexWrap": 9.9, "alignContent": 9.9, "alignItems": 9.9, "alignSelf": 9.9, "justifyContent": 9.9, "order": 9.9, "transition": 9.9, "transitionDelay": 9.9, "transitionDuration": 9.9, "transitionProperty": 9.9, "transitionTimingFunction": 9.9, "transform": 9.9, "transformOrigin": 9.9, "transformOriginX": 9.9, "transformOriginY": 9.9, "backfaceVisibility": 9.9, "perspective": 9.9, "perspectiveOrigin": 9.9, "transformStyle": 9.9, "transformOriginZ": 9.9, "animation": 9.9, "animationDelay": 9.9, "animationDirection": 9.9, "animationFillMode": 9.9, "animationDuration": 9.9, "animationIterationCount": 9.9, "animationName": 9.9, "animationPlayState": 9.9, "animationTimingFunction": 9.9, "appearance": 9.9, "userSelect": 9.9, "fontKerning": 9.9, "textEmphasisPosition": 9.9, "textEmphasis": 9.9, "textEmphasisStyle": 9.9, "textEmphasisColor": 9.9, "maskImage": 9.9, "maskMode": 9.9, "maskRepeat": 9.9, "maskPosition": 9.9, "maskClip": 9.9, "maskOrigin": 9.9, "maskSize": 9.9, "maskComposite": 9.9, "mask": 9.9, "maskBorderSource": 9.9, "maskBorderMode": 9.9, "maskBorderSlice": 9.9, "maskBorderWidth": 9.9, "maskBorderOutset": 9.9, "maskBorderRepeat": 9.9, "maskBorder": 9.9, "maskType": 9.9, "textSizeAdjust": 9.9, "filter": 9.9, "hyphens": 9.9, "flowInto": 9.9, "flowFrom": 9.9, "breakBefore": 9.9, "breakAfter": 9.9, "breakInside": 9.9, "regionFragment": 9.9, "fontFeatureSettings": 9.9, "columnCount": 9.9, "columnFill": 9.9, "columnGap": 9.9, "columnRule": 9.9, "columnRuleColor": 9.9, "columnRuleStyle": 9.9, "columnRuleWidth": 9.9, "columns": 9.9, "columnSpan": 9.9, "columnWidth": 9.9 }, "op_mini": {} };
	module.exports = exports["default"];

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = position;

	var _getPrefixedValue = __webpack_require__(38);

	var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function position(_ref) {
	  var property = _ref.property;
	  var value = _ref.value;
	  var browser = _ref.browserInfo.browser;
	  var css = _ref.prefix.css;
	  var keepUnprefixed = _ref.keepUnprefixed;

	  if (property === 'position' && value === 'sticky' && (browser === 'safari' || browser === 'ios_saf')) {
	    return _defineProperty({}, property, (0, _getPrefixedValue2.default)(css + value, value, keepUnprefixed));
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 38 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (prefixedValue, value, keepUnprefixed) {
	  return keepUnprefixed ? [prefixedValue, value] : prefixedValue;
	};

	module.exports = exports["default"];

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = calc;

	var _getPrefixedValue = __webpack_require__(38);

	var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function calc(_ref) {
	  var property = _ref.property;
	  var value = _ref.value;
	  var _ref$browserInfo = _ref.browserInfo;
	  var browser = _ref$browserInfo.browser;
	  var version = _ref$browserInfo.version;
	  var css = _ref.prefix.css;
	  var keepUnprefixed = _ref.keepUnprefixed;

	  if (typeof value === 'string' && value.indexOf('calc(') > -1 && (browser === 'firefox' && version < 15 || browser === 'chrome' && version < 25 || browser === 'safari' && version < 6.1 || browser === 'ios_saf' && version < 7)) {
	    return _defineProperty({}, property, (0, _getPrefixedValue2.default)(value.replace(/calc\(/g, css + 'calc('), value, keepUnprefixed));
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = zoomCursor;

	var _getPrefixedValue = __webpack_require__(38);

	var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var values = { 'zoom-in': true, 'zoom-out': true };

	function zoomCursor(_ref) {
	  var property = _ref.property;
	  var value = _ref.value;
	  var _ref$browserInfo = _ref.browserInfo;
	  var browser = _ref$browserInfo.browser;
	  var version = _ref$browserInfo.version;
	  var css = _ref.prefix.css;
	  var keepUnprefixed = _ref.keepUnprefixed;

	  if (property === 'cursor' && values[value] && (browser === 'firefox' && version < 24 || browser === 'chrome' && version < 37 || browser === 'safari' && version < 9 || browser === 'opera' && version < 24)) {
	    return {
	      cursor: (0, _getPrefixedValue2.default)(css + value, value, keepUnprefixed)
	    };
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = grabCursor;

	var _getPrefixedValue = __webpack_require__(38);

	var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var values = { grab: true, grabbing: true };

	function grabCursor(_ref) {
	  var property = _ref.property;
	  var value = _ref.value;
	  var browser = _ref.browserInfo.browser;
	  var css = _ref.prefix.css;
	  var keepUnprefixed = _ref.keepUnprefixed;

	  // adds prefixes for firefox, chrome, safari, and opera regardless of version until a reliable brwoser support info can be found (see: https://github.com/rofrischmann/inline-style-prefixer/issues/79)
	  if (property === 'cursor' && values[value] && (browser === 'firefox' || browser === 'chrome' || browser === 'safari' || browser === 'opera')) {
	    return {
	      cursor: (0, _getPrefixedValue2.default)(css + value, value, keepUnprefixed)
	    };
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = flex;

	var _getPrefixedValue = __webpack_require__(38);

	var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var values = { flex: true, 'inline-flex': true };

	function flex(_ref) {
	  var property = _ref.property;
	  var value = _ref.value;
	  var _ref$browserInfo = _ref.browserInfo;
	  var browser = _ref$browserInfo.browser;
	  var version = _ref$browserInfo.version;
	  var css = _ref.prefix.css;
	  var keepUnprefixed = _ref.keepUnprefixed;

	  if (property === 'display' && values[value] && (browser === 'chrome' && version < 29 && version > 20 || (browser === 'safari' || browser === 'ios_saf') && version < 9 && version > 6 || browser === 'opera' && (version == 15 || version == 16))) {
	    return {
	      display: (0, _getPrefixedValue2.default)(css + value, value, keepUnprefixed)
	    };
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = sizing;

	var _getPrefixedValue = __webpack_require__(38);

	var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var properties = {
	  maxHeight: true,
	  maxWidth: true,
	  width: true,
	  height: true,
	  columnWidth: true,
	  minWidth: true,
	  minHeight: true
	};
	var values = {
	  'min-content': true,
	  'max-content': true,
	  'fill-available': true,
	  'fit-content': true,
	  'contain-floats': true
	};

	function sizing(_ref) {
	  var property = _ref.property;
	  var value = _ref.value;
	  var css = _ref.prefix.css;
	  var keepUnprefixed = _ref.keepUnprefixed;

	  // This might change in the future
	  // Keep an eye on it
	  if (properties[property] && values[value]) {
	    return _defineProperty({}, property, (0, _getPrefixedValue2.default)(css + value, value, keepUnprefixed));
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = gradient;

	var _getPrefixedValue = __webpack_require__(38);

	var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/;

	function gradient(_ref) {
	  var property = _ref.property;
	  var value = _ref.value;
	  var _ref$browserInfo = _ref.browserInfo;
	  var browser = _ref$browserInfo.browser;
	  var version = _ref$browserInfo.version;
	  var css = _ref.prefix.css;
	  var keepUnprefixed = _ref.keepUnprefixed;

	  if (typeof value === 'string' && value.match(values) !== null && (browser === 'firefox' && version < 16 || browser === 'chrome' && version < 26 || (browser === 'safari' || browser === 'ios_saf') && version < 7 || (browser === 'opera' || browser === 'op_mini') && version < 12.1 || browser === 'android' && version < 4.4 || browser === 'and_uc')) {
	    return _defineProperty({}, property, (0, _getPrefixedValue2.default)(css + value, value, keepUnprefixed));
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.default = transition;

	var _hyphenateStyleName = __webpack_require__(29);

	var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);

	var _unprefixProperty = __webpack_require__(46);

	var _unprefixProperty2 = _interopRequireDefault(_unprefixProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var properties = { transition: true, transitionProperty: true };

	function transition(_ref) {
	  var property = _ref.property;
	  var value = _ref.value;
	  var css = _ref.prefix.css;
	  var requiresPrefix = _ref.requiresPrefix;
	  var keepUnprefixed = _ref.keepUnprefixed;

	  // also check for already prefixed transitions
	  var unprefixedProperty = (0, _unprefixProperty2.default)(property);

	  if (typeof value === 'string' && properties[unprefixedProperty]) {
	    var _ret = function () {
	      // TODO: memoize this array
	      var requiresPrefixDashCased = Object.keys(requiresPrefix).map(function (prop) {
	        return (0, _hyphenateStyleName2.default)(prop);
	      });

	      // only split multi values, not cubic beziers
	      var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);

	      requiresPrefixDashCased.forEach(function (prop) {
	        multipleValues.forEach(function (val, index) {
	          if (val.indexOf(prop) > -1 && prop !== 'order') {
	            multipleValues[index] = val.replace(prop, css + prop) + (keepUnprefixed ? ',' + val : '');
	          }
	        });
	      });

	      return {
	        v: _defineProperty({}, property, multipleValues.join(','))
	      };
	    }();

	    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 46 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (property) {
	  var unprefixed = property.replace(/^(ms|Webkit|Moz|O)/, '');
	  return unprefixed.charAt(0).toLowerCase() + unprefixed.slice(1);
	};

	module.exports = exports['default'];

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = flexboxIE;

	var _getPrefixedValue = __webpack_require__(38);

	var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var alternativeValues = {
	  'space-around': 'distribute',
	  'space-between': 'justify',
	  'flex-start': 'start',
	  'flex-end': 'end',
	  flex: 'flexbox',
	  'inline-flex': 'inline-flexbox'
	};
	var alternativeProps = {
	  alignContent: 'msFlexLinePack',
	  alignSelf: 'msFlexItemAlign',
	  alignItems: 'msFlexAlign',
	  justifyContent: 'msFlexPack',
	  order: 'msFlexOrder',
	  flexGrow: 'msFlexPositive',
	  flexShrink: 'msFlexNegative',
	  flexBasis: 'msPreferredSize'
	};

	function flexboxIE(_ref) {
	  var property = _ref.property;
	  var value = _ref.value;
	  var styles = _ref.styles;
	  var _ref$browserInfo = _ref.browserInfo;
	  var browser = _ref$browserInfo.browser;
	  var version = _ref$browserInfo.version;
	  var css = _ref.prefix.css;
	  var keepUnprefixed = _ref.keepUnprefixed;

	  if ((alternativeProps[property] || property === 'display' && typeof value === 'string' && value.indexOf('flex') > -1) && (browser === 'ie_mob' || browser === 'ie') && version == 10) {
	    if (!keepUnprefixed && !Array.isArray(styles[property])) {
	      delete styles[property];
	    }
	    if (property === 'display' && alternativeValues[value]) {
	      return {
	        display: (0, _getPrefixedValue2.default)(css + alternativeValues[value], value, keepUnprefixed)
	      };
	    }
	    if (alternativeProps[property]) {
	      return _defineProperty({}, alternativeProps[property], alternativeValues[value] || value);
	    }
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = flexboxOld;

	var _getPrefixedValue = __webpack_require__(38);

	var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var alternativeValues = {
	  'space-around': 'justify',
	  'space-between': 'justify',
	  'flex-start': 'start',
	  'flex-end': 'end',
	  'wrap-reverse': 'multiple',
	  wrap: 'multiple',
	  flex: 'box',
	  'inline-flex': 'inline-box'
	};

	var alternativeProps = {
	  alignItems: 'WebkitBoxAlign',
	  justifyContent: 'WebkitBoxPack',
	  flexWrap: 'WebkitBoxLines'
	};

	var otherProps = ['alignContent', 'alignSelf', 'order', 'flexGrow', 'flexShrink', 'flexBasis', 'flexDirection'];
	var properties = Object.keys(alternativeProps).concat(otherProps);

	function flexboxOld(_ref) {
	  var property = _ref.property;
	  var value = _ref.value;
	  var styles = _ref.styles;
	  var _ref$browserInfo = _ref.browserInfo;
	  var browser = _ref$browserInfo.browser;
	  var version = _ref$browserInfo.version;
	  var css = _ref.prefix.css;
	  var keepUnprefixed = _ref.keepUnprefixed;

	  if ((properties.indexOf(property) > -1 || property === 'display' && typeof value === 'string' && value.indexOf('flex') > -1) && (browser === 'firefox' && version < 22 || browser === 'chrome' && version < 21 || (browser === 'safari' || browser === 'ios_saf') && version <= 6.1 || browser === 'android' && version < 4.4 || browser === 'and_uc')) {
	    if (!keepUnprefixed && !Array.isArray(styles[property])) {
	      delete styles[property];
	    }
	    if (property === 'flexDirection' && typeof value === 'string') {
	      return {
	        WebkitBoxOrient: value.indexOf('column') > -1 ? 'vertical' : 'horizontal',
	        WebkitBoxDirection: value.indexOf('reverse') > -1 ? 'reverse' : 'normal'
	      };
	    }
	    if (property === 'display' && alternativeValues[value]) {
	      return {
	        display: (0, _getPrefixedValue2.default)(css + alternativeValues[value], value, keepUnprefixed)
	      };
	    }
	    if (alternativeProps[property]) {
	      return _defineProperty({}, alternativeProps[property], alternativeValues[value] || value);
	    }
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getStateKey = __webpack_require__(50);

	var _getStateKey2 = _interopRequireDefault(_getStateKey);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var getState = function getState(state, elementKey, value) {
	  var key = (0, _getStateKey2.default)(elementKey);

	  return !!state && !!state._radiumStyleState && !!state._radiumStyleState[key] && state._radiumStyleState[key][value];
	};

	exports.default = getState;
	module.exports = exports['default'];

/***/ },
/* 50 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var getStateKey = function getStateKey(elementKey) {
	  return elementKey === null || elementKey === undefined ? 'main' : elementKey.toString();
	};

	exports.default = getStateKey;
	module.exports = exports['default'];

/***/ },
/* 51 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = hash;


	// a simple djb2 hash based on hash-string:
	// https://github.com/MatthewBarker/hash-string/blob/master/source/hash-string.js
	// returns a hex-encoded hash
	function hash(text) {
	  if (!text) {
	    return '';
	  }

	  var hashValue = 5381;
	  var index = text.length - 1;

	  while (index) {
	    hashValue = hashValue * 33 ^ text.charCodeAt(index);
	    index -= 1;
	  }

	  return (hashValue >>> 0).toString(16);
	}
	module.exports = exports['default'];

/***/ },
/* 52 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.isNestedStyle = isNestedStyle;
	exports.mergeStyles = mergeStyles;
	function isNestedStyle(value) {
	  // Don't merge objects overriding toString, since they should be converted
	  // to string values.
	  return value && value.constructor === Object && value.toString === Object.prototype.toString;
	}

	// Merge style objects. Deep merge plain object values.
	function mergeStyles(styles) {
	  var result = {};

	  styles.forEach(function (style) {
	    if (!style || (typeof style === 'undefined' ? 'undefined' : _typeof(style)) !== 'object') {
	      return;
	    }

	    if (Array.isArray(style)) {
	      style = mergeStyles(style);
	    }

	    Object.keys(style).forEach(function (key) {
	      // Simple case, nothing nested
	      if (!isNestedStyle(style[key]) || !isNestedStyle(result[key])) {
	        result[key] = style[key];
	        return;
	      }

	      // If nested media, don't merge the nested styles, append a space to the
	      // end (benign when converted to CSS). This way we don't end up merging
	      // media queries that appear later in the chain with those that appear
	      // earlier.
	      if (key.indexOf('@media') === 0) {
	        var newKey = key;
	        // eslint-disable-next-line no-constant-condition
	        while (true) {
	          newKey += ' ';
	          if (!result[newKey]) {
	            result[newKey] = style[key];
	            return;
	          }
	        }
	      }

	      // Merge all other nested styles recursively
	      result[key] = mergeStyles([result[key], style[key]]);
	    });
	  });

	  return result;
	}

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _checkPropsPlugin = __webpack_require__(54);

	var _checkPropsPlugin2 = _interopRequireDefault(_checkPropsPlugin);

	var _keyframesPlugin = __webpack_require__(55);

	var _keyframesPlugin2 = _interopRequireDefault(_keyframesPlugin);

	var _mergeStyleArrayPlugin = __webpack_require__(56);

	var _mergeStyleArrayPlugin2 = _interopRequireDefault(_mergeStyleArrayPlugin);

	var _prefixPlugin = __webpack_require__(57);

	var _prefixPlugin2 = _interopRequireDefault(_prefixPlugin);

	var _removeNestedStylesPlugin = __webpack_require__(58);

	var _removeNestedStylesPlugin2 = _interopRequireDefault(_removeNestedStylesPlugin);

	var _resolveInteractionStylesPlugin = __webpack_require__(59);

	var _resolveInteractionStylesPlugin2 = _interopRequireDefault(_resolveInteractionStylesPlugin);

	var _resolveMediaQueriesPlugin = __webpack_require__(61);

	var _resolveMediaQueriesPlugin2 = _interopRequireDefault(_resolveMediaQueriesPlugin);

	var _visitedPlugin = __webpack_require__(62);

	var _visitedPlugin2 = _interopRequireDefault(_visitedPlugin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  checkProps: _checkPropsPlugin2.default,
	  keyframes: _keyframesPlugin2.default,
	  mergeStyleArray: _mergeStyleArrayPlugin2.default,
	  prefix: _prefixPlugin2.default,
	  removeNestedStyles: _removeNestedStylesPlugin2.default,
	  resolveInteractionStyles: _resolveInteractionStylesPlugin2.default,
	  resolveMediaQueries: _resolveMediaQueriesPlugin2.default,
	  visited: _visitedPlugin2.default
	};
	/* eslint-disable block-scoped-const */

	module.exports = exports['default'];

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _checkProps = function checkProps() {};

	if (process.env.NODE_ENV !== 'production') {
	  // Warn if you use longhand and shorthand properties in the same style
	  // object.
	  // https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties

	  var shorthandPropertyExpansions = {
	    background: ['backgroundAttachment', 'backgroundBlendMode', 'backgroundClip', 'backgroundColor', 'backgroundImage', 'backgroundOrigin', 'backgroundPosition', 'backgroundPositionX', 'backgroundPositionY', 'backgroundRepeat', 'backgroundRepeatX', 'backgroundRepeatY', 'backgroundSize'],
	    border: ['borderBottom', 'borderBottomColor', 'borderBottomStyle', 'borderBottomWidth', 'borderColor', 'borderLeft', 'borderLeftColor', 'borderLeftStyle', 'borderLeftWidth', 'borderRight', 'borderRightColor', 'borderRightStyle', 'borderRightWidth', 'borderStyle', 'borderTop', 'borderTopColor', 'borderTopStyle', 'borderTopWidth', 'borderWidth'],
	    borderImage: ['borderImageOutset', 'borderImageRepeat', 'borderImageSlice', 'borderImageSource', 'borderImageWidth'],
	    borderRadius: ['borderBottomLeftRadius', 'borderBottomRightRadius', 'borderTopLeftRadius', 'borderTopRightRadius'],
	    font: ['fontFamily', 'fontKerning', 'fontSize', 'fontStretch', 'fontStyle', 'fontVariant', 'fontVariantLigatures', 'fontWeight', 'lineHeight'],
	    listStyle: ['listStyleImage', 'listStylePosition', 'listStyleType'],
	    margin: ['marginBottom', 'marginLeft', 'marginRight', 'marginTop'],
	    padding: ['paddingBottom', 'paddingLeft', 'paddingRight', 'paddingTop'],
	    transition: ['transitionDelay', 'transitionDuration', 'transitionProperty', 'transitionTimingFunction']
	  };

	  _checkProps = function checkProps(config) {
	    var componentName = config.componentName,
	        style = config.style;

	    if ((typeof style === 'undefined' ? 'undefined' : _typeof(style)) !== 'object' || !style) {
	      return;
	    }

	    var styleKeys = Object.keys(style);
	    styleKeys.forEach(function (styleKey) {
	      if (Array.isArray(shorthandPropertyExpansions[styleKey]) && shorthandPropertyExpansions[styleKey].some(function (sp) {
	        return styleKeys.indexOf(sp) !== -1;
	      })) {
	        if (process.env.NODE_ENV !== 'production') {
	          /* eslint-disable no-console */
	          console.warn('Radium: property "' + styleKey + '" in style object', style, ': do not mix longhand and ' + 'shorthand properties in the same style object. Check the render ' + 'method of ' + componentName + '.', 'See https://github.com/FormidableLabs/radium/issues/95 for more ' + 'information.');
	          /* eslint-enable no-console */
	        }
	      }
	    });

	    styleKeys.forEach(function (k) {
	      return _checkProps(_extends({}, config, { style: style[k] }));
	    });
	    return;
	  };
	}

	exports.default = _checkProps;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 55 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = keyframesPlugin;
	function keyframesPlugin(_ref) {
	  var addCSS = _ref.addCSS,
	      config = _ref.config,
	      style = _ref.style;

	  var newStyle = Object.keys(style).reduce(function (newStyleInProgress, key) {
	    var value = style[key];
	    if (key === 'animationName' && value && value.__radiumKeyframes) {
	      var keyframesValue = value;

	      var _keyframesValue$__pro = keyframesValue.__process(config.userAgent),
	          animationName = _keyframesValue$__pro.animationName,
	          css = _keyframesValue$__pro.css;

	      addCSS(css);
	      value = animationName;
	    }

	    newStyleInProgress[key] = value;
	    return newStyleInProgress;
	  }, {});
	  return { style: newStyle };
	}
	module.exports = exports['default'];

/***/ },
/* 56 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});


	// Convenient syntax for multiple styles: `style={[style1, style2, etc]}`
	// Ignores non-objects, so you can do `this.state.isCool && styles.cool`.
	var mergeStyleArrayPlugin = function mergeStyleArrayPlugin(_ref) {
	  var style = _ref.style,
	      mergeStyles = _ref.mergeStyles;

	  // eslint-disable-line no-shadow
	  var newStyle = Array.isArray(style) ? mergeStyles(style) : style;
	  return { style: newStyle };
	};

	exports.default = mergeStyleArrayPlugin;
	module.exports = exports['default'];

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = prefixPlugin;

	var _prefixer = __webpack_require__(13);

	function prefixPlugin(_ref) {
	  var config = _ref.config,
	      style = _ref.style;

	  var newStyle = (0, _prefixer.getPrefixedStyle)(style, config.userAgent);
	  return { style: newStyle };
	}
	module.exports = exports['default'];

/***/ },
/* 58 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = removeNestedStyles;
	function removeNestedStyles(_ref) {
	  var isNestedStyle = _ref.isNestedStyle,
	      style = _ref.style;

	  // eslint-disable-line no-shadow
	  var newStyle = Object.keys(style).reduce(function (newStyleInProgress, key) {
	    var value = style[key];
	    if (!isNestedStyle(value)) {
	      newStyleInProgress[key] = value;
	    }
	    return newStyleInProgress;
	  }, {});

	  return {
	    style: newStyle
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _mouseUpListener = __webpack_require__(60);

	var _mouseUpListener2 = _interopRequireDefault(_mouseUpListener);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _isInteractiveStyleField = function _isInteractiveStyleField(styleFieldName) {
	  return styleFieldName === ':hover' || styleFieldName === ':active' || styleFieldName === ':focus';
	};

	var resolveInteractionStyles = function resolveInteractionStyles(config) {
	  var ExecutionEnvironment = config.ExecutionEnvironment,
	      getComponentField = config.getComponentField,
	      getState = config.getState,
	      mergeStyles = config.mergeStyles,
	      props = config.props,
	      setState = config.setState,
	      style = config.style;


	  var newComponentFields = {};
	  var newProps = {};

	  // Only add handlers if necessary
	  if (style[':hover']) {
	    // Always call the existing handler if one is already defined.
	    // This code, and the very similar ones below, could be abstracted a bit
	    // more, but it hurts readability IMO.
	    var existingOnMouseEnter = props.onMouseEnter;
	    newProps.onMouseEnter = function (e) {
	      existingOnMouseEnter && existingOnMouseEnter(e);
	      setState(':hover', true);
	    };

	    var existingOnMouseLeave = props.onMouseLeave;
	    newProps.onMouseLeave = function (e) {
	      existingOnMouseLeave && existingOnMouseLeave(e);
	      setState(':hover', false);
	    };
	  }

	  if (style[':active']) {
	    var existingOnMouseDown = props.onMouseDown;
	    newProps.onMouseDown = function (e) {
	      existingOnMouseDown && existingOnMouseDown(e);
	      newComponentFields._lastMouseDown = Date.now();
	      setState(':active', 'viamousedown');
	    };

	    var existingOnKeyDown = props.onKeyDown;
	    newProps.onKeyDown = function (e) {
	      existingOnKeyDown && existingOnKeyDown(e);
	      if (e.key === ' ' || e.key === 'Enter') {
	        setState(':active', 'viakeydown');
	      }
	    };

	    var existingOnKeyUp = props.onKeyUp;
	    newProps.onKeyUp = function (e) {
	      existingOnKeyUp && existingOnKeyUp(e);
	      if (e.key === ' ' || e.key === 'Enter') {
	        setState(':active', false);
	      }
	    };
	  }

	  if (style[':focus']) {
	    var existingOnFocus = props.onFocus;
	    newProps.onFocus = function (e) {
	      existingOnFocus && existingOnFocus(e);
	      setState(':focus', true);
	    };

	    var existingOnBlur = props.onBlur;
	    newProps.onBlur = function (e) {
	      existingOnBlur && existingOnBlur(e);
	      setState(':focus', false);
	    };
	  }

	  if (style[':active'] && !getComponentField('_radiumMouseUpListener') && ExecutionEnvironment.canUseEventListeners) {
	    newComponentFields._radiumMouseUpListener = _mouseUpListener2.default.subscribe(function () {
	      Object.keys(getComponentField('state')._radiumStyleState).forEach(function (key) {
	        if (getState(':active', key) === 'viamousedown') {
	          setState(':active', false, key);
	        }
	      });
	    });
	  }

	  // Merge the styles in the order they were defined
	  var interactionStyles = props.disabled ? [style[':disabled']] : Object.keys(style).filter(function (name) {
	    return _isInteractiveStyleField(name) && getState(name);
	  }).map(function (name) {
	    return style[name];
	  });

	  var newStyle = mergeStyles([style].concat(interactionStyles));

	  // Remove interactive styles
	  newStyle = Object.keys(newStyle).reduce(function (styleWithoutInteractions, name) {
	    if (!_isInteractiveStyleField(name) && name !== ':disabled') {
	      styleWithoutInteractions[name] = newStyle[name];
	    }
	    return styleWithoutInteractions;
	  }, {});

	  return {
	    componentFields: newComponentFields,
	    props: newProps,
	    style: newStyle
	  };
	};

	exports.default = resolveInteractionStyles;
	module.exports = exports['default'];

/***/ },
/* 60 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var _callbacks = [];
	var _mouseUpListenerIsActive = false;

	function _handleMouseUp() {
	  _callbacks.forEach(function (callback) {
	    callback();
	  });
	}

	var subscribe = function subscribe(callback) {
	  if (_callbacks.indexOf(callback) === -1) {
	    _callbacks.push(callback);
	  }

	  if (!_mouseUpListenerIsActive) {
	    window.addEventListener('mouseup', _handleMouseUp);
	    _mouseUpListenerIsActive = true;
	  }

	  return {
	    remove: function remove() {
	      var index = _callbacks.indexOf(callback);
	      _callbacks.splice(index, 1);

	      if (_callbacks.length === 0 && _mouseUpListenerIsActive) {
	        window.removeEventListener('mouseup', _handleMouseUp);
	        _mouseUpListenerIsActive = false;
	      }
	    }
	  };
	};

	exports.default = {
	  subscribe: subscribe,
	  __triggerForTests: _handleMouseUp
	};
	module.exports = exports['default'];

/***/ },
/* 61 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = resolveMediaQueries;
	var _windowMatchMedia = void 0;
	function _getWindowMatchMedia(ExecutionEnvironment) {
	  if (_windowMatchMedia === undefined) {
	    _windowMatchMedia = !!ExecutionEnvironment.canUseDOM && !!window && !!window.matchMedia && function (mediaQueryString) {
	      return window.matchMedia(mediaQueryString);
	    } || null;
	  }
	  return _windowMatchMedia;
	}

	function _filterObject(obj, predicate) {
	  return Object.keys(obj).filter(function (key) {
	    return predicate(obj[key], key);
	  }).reduce(function (result, key) {
	    result[key] = obj[key];
	    return result;
	  }, {});
	}

	function _removeMediaQueries(style) {
	  return Object.keys(style).reduce(function (styleWithoutMedia, key) {
	    if (key.indexOf('@media') !== 0) {
	      styleWithoutMedia[key] = style[key];
	    }
	    return styleWithoutMedia;
	  }, {});
	}

	function _topLevelRulesToCSS(_ref) {
	  var addCSS = _ref.addCSS,
	      appendImportantToEachValue = _ref.appendImportantToEachValue,
	      cssRuleSetToString = _ref.cssRuleSetToString,
	      hash = _ref.hash,
	      isNestedStyle = _ref.isNestedStyle,
	      style = _ref.style,
	      userAgent = _ref.userAgent;

	  var className = '';
	  Object.keys(style).filter(function (name) {
	    return name.indexOf('@media') === 0;
	  }).map(function (query) {
	    var topLevelRules = appendImportantToEachValue(_filterObject(style[query], function (value) {
	      return !isNestedStyle(value);
	    }));

	    if (!Object.keys(topLevelRules).length) {
	      return;
	    }

	    var ruleCSS = cssRuleSetToString('', topLevelRules, userAgent);

	    // CSS classes cannot start with a number
	    var mediaQueryClassName = 'rmq-' + hash(query + ruleCSS);
	    var css = query + '{ .' + mediaQueryClassName + ruleCSS + '}';

	    addCSS(css);

	    className += (className ? ' ' : '') + mediaQueryClassName;
	  });
	  return className;
	}

	function _subscribeToMediaQuery(_ref2) {
	  var listener = _ref2.listener,
	      listenersByQuery = _ref2.listenersByQuery,
	      matchMedia = _ref2.matchMedia,
	      mediaQueryListsByQuery = _ref2.mediaQueryListsByQuery,
	      query = _ref2.query;

	  query = query.replace('@media ', '');

	  var mql = mediaQueryListsByQuery[query];
	  if (!mql && matchMedia) {
	    mediaQueryListsByQuery[query] = mql = matchMedia(query);
	  }

	  if (!listenersByQuery || !listenersByQuery[query]) {
	    mql.addListener(listener);

	    listenersByQuery[query] = {
	      remove: function remove() {
	        mql.removeListener(listener);
	      }
	    };
	  }
	  return mql;
	}

	function resolveMediaQueries(_ref3) {
	  var ExecutionEnvironment = _ref3.ExecutionEnvironment,
	      addCSS = _ref3.addCSS,
	      appendImportantToEachValue = _ref3.appendImportantToEachValue,
	      config = _ref3.config,
	      cssRuleSetToString = _ref3.cssRuleSetToString,
	      getComponentField = _ref3.getComponentField,
	      getGlobalState = _ref3.getGlobalState,
	      hash = _ref3.hash,
	      isNestedStyle = _ref3.isNestedStyle,
	      mergeStyles = _ref3.mergeStyles,
	      props = _ref3.props,
	      setState = _ref3.setState,
	      style = _ref3.style;

	  // eslint-disable-line no-shadow
	  var newStyle = _removeMediaQueries(style);
	  var mediaQueryClassNames = _topLevelRulesToCSS({
	    addCSS: addCSS,
	    appendImportantToEachValue: appendImportantToEachValue,
	    cssRuleSetToString: cssRuleSetToString,
	    hash: hash,
	    isNestedStyle: isNestedStyle,
	    style: style,
	    userAgent: config.userAgent
	  });

	  var newProps = mediaQueryClassNames ? {
	    className: mediaQueryClassNames + (props.className ? ' ' + props.className : '')
	  } : null;

	  var matchMedia = config.matchMedia || _getWindowMatchMedia(ExecutionEnvironment);

	  if (!matchMedia) {
	    return {
	      props: newProps,
	      style: newStyle
	    };
	  }

	  var listenersByQuery = _extends({}, getComponentField('_radiumMediaQueryListenersByQuery'));
	  var mediaQueryListsByQuery = getGlobalState('mediaQueryListsByQuery') || {};

	  Object.keys(style).filter(function (name) {
	    return name.indexOf('@media') === 0;
	  }).map(function (query) {
	    var nestedRules = _filterObject(style[query], isNestedStyle);

	    if (!Object.keys(nestedRules).length) {
	      return;
	    }

	    var mql = _subscribeToMediaQuery({
	      listener: function listener() {
	        return setState(query, mql.matches, '_all');
	      },
	      listenersByQuery: listenersByQuery,
	      matchMedia: matchMedia,
	      mediaQueryListsByQuery: mediaQueryListsByQuery,
	      query: query
	    });

	    // Apply media query states
	    if (mql.matches) {
	      newStyle = mergeStyles([newStyle, nestedRules]);
	    }
	  });

	  return {
	    componentFields: {
	      _radiumMediaQueryListenersByQuery: listenersByQuery
	    },
	    globalState: { mediaQueryListsByQuery: mediaQueryListsByQuery },
	    props: newProps,
	    style: newStyle
	  };
	}
	module.exports = exports['default'];

/***/ },
/* 62 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = visited;
	function visited(_ref) {
	  var addCSS = _ref.addCSS,
	      appendImportantToEachValue = _ref.appendImportantToEachValue,
	      config = _ref.config,
	      cssRuleSetToString = _ref.cssRuleSetToString,
	      hash = _ref.hash,
	      props = _ref.props,
	      style = _ref.style;

	  // eslint-disable-line no-shadow
	  var className = props.className;

	  var newStyle = Object.keys(style).reduce(function (newStyleInProgress, key) {
	    var value = style[key];
	    if (key === ':visited') {
	      value = appendImportantToEachValue(value);
	      var ruleCSS = cssRuleSetToString('', value, config.userAgent);
	      var visitedClassName = 'rad-' + hash(ruleCSS);
	      var css = '.' + visitedClassName + ':visited' + ruleCSS;

	      addCSS(css);
	      className = (className ? className + ' ' : '') + visitedClassName;
	    } else {
	      newStyleInProgress[key] = value;
	    }

	    return newStyleInProgress;
	  }, {});

	  return {
	    props: className === props.className ? null : { className: className },
	    style: newStyle
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Based on code that is Copyright 2013-2015, Facebook, Inc.
	  All rights reserved.
	*/
	/* global define */

	(function () {
		'use strict';

		var canUseDOM = !!(
			typeof window !== 'undefined' &&
			window.document &&
			window.document.createElement
		);

		var ExecutionEnvironment = {

			canUseDOM: canUseDOM,

			canUseWorkers: typeof Worker !== 'undefined',

			canUseEventListeners:
				canUseDOM && !!(window.addEventListener || window.attachEvent),

			canUseViewport: canUseDOM && !!window.screen

		};

		if (true) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return ExecutionEnvironment;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof module !== 'undefined' && module.exports) {
			module.exports = ExecutionEnvironment;
		} else {
			window.ExecutionEnvironment = ExecutionEnvironment;
		}

	}());


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _class, _temp;

	var _cssRuleSetToString = __webpack_require__(11);

	var _cssRuleSetToString2 = _interopRequireDefault(_cssRuleSetToString);

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Style = (_temp = _class = function (_PureComponent) {
	  _inherits(Style, _PureComponent);

	  function Style() {
	    _classCallCheck(this, Style);

	    return _possibleConstructorReturn(this, _PureComponent.apply(this, arguments));
	  }

	  Style.prototype._buildStyles = function _buildStyles(styles) {
	    var _this2 = this;

	    var userAgent = this.props.radiumConfig && this.props.radiumConfig.userAgent || this.context && this.context._radiumConfig && this.context._radiumConfig.userAgent;

	    var scopeSelector = this.props.scopeSelector;

	    var rootRules = Object.keys(styles).reduce(function (accumulator, selector) {
	      if (_typeof(styles[selector]) !== 'object') {
	        accumulator[selector] = styles[selector];
	      }

	      return accumulator;
	    }, {});
	    var rootStyles = Object.keys(rootRules).length ? (0, _cssRuleSetToString2.default)(scopeSelector || '', rootRules, userAgent) : '';

	    return rootStyles + Object.keys(styles).reduce(function (accumulator, selector) {
	      var rules = styles[selector];

	      if (selector === 'mediaQueries') {
	        accumulator += _this2._buildMediaQueryString(rules);
	      } else if (_typeof(styles[selector]) === 'object') {
	        var completeSelector = scopeSelector ? selector.split(',').map(function (part) {
	          return scopeSelector + ' ' + part.trim();
	        }).join(',') : selector;

	        accumulator += (0, _cssRuleSetToString2.default)(completeSelector, rules, userAgent);
	      }

	      return accumulator;
	    }, '');
	  };

	  Style.prototype._buildMediaQueryString = function _buildMediaQueryString(stylesByMediaQuery) {
	    var _this3 = this;

	    var mediaQueryString = '';

	    Object.keys(stylesByMediaQuery).forEach(function (query) {
	      mediaQueryString += '@media ' + query + '{' + _this3._buildStyles(stylesByMediaQuery[query]) + '}';
	    });

	    return mediaQueryString;
	  };

	  Style.prototype.render = function render() {
	    if (!this.props.rules) {
	      return null;
	    }

	    var styles = this._buildStyles(this.props.rules);

	    return _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: styles } });
	  };

	  return Style;
	}(_react.PureComponent), _class.propTypes = {
	  radiumConfig: _react.PropTypes.object,
	  rules: _react.PropTypes.object,
	  scopeSelector: _react.PropTypes.string
	}, _class.contextTypes = {
	  _radiumConfig: _react.PropTypes.object
	}, _class.defaultProps = {
	  scopeSelector: ''
	}, _temp);
	exports.default = Style;
	module.exports = exports['default'];

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _enhancer = __webpack_require__(4);

	var _enhancer2 = _interopRequireDefault(_enhancer);

	var _styleKeeper = __webpack_require__(6);

	var _styleKeeper2 = _interopRequireDefault(_styleKeeper);

	var _styleSheet = __webpack_require__(66);

	var _styleSheet2 = _interopRequireDefault(_styleSheet);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _getStyleKeeper(instance) {
	  if (!instance._radiumStyleKeeper) {
	    var userAgent = instance.props.radiumConfig && instance.props.radiumConfig.userAgent || instance.context._radiumConfig && instance.context._radiumConfig.userAgent;
	    instance._radiumStyleKeeper = new _styleKeeper2.default(userAgent);
	  }

	  return instance._radiumStyleKeeper;
	}

	var StyleRoot = function (_PureComponent) {
	  _inherits(StyleRoot, _PureComponent);

	  function StyleRoot() {
	    _classCallCheck(this, StyleRoot);

	    var _this = _possibleConstructorReturn(this, _PureComponent.apply(this, arguments));

	    _getStyleKeeper(_this);
	    return _this;
	  }

	  StyleRoot.prototype.getChildContext = function getChildContext() {
	    return { _radiumStyleKeeper: _getStyleKeeper(this) };
	  };

	  StyleRoot.prototype.render = function render() {
	    /* eslint-disable no-unused-vars */
	    // Pass down all props except config to the rendered div.
	    var _props = this.props,
	        radiumConfig = _props.radiumConfig,
	        otherProps = _objectWithoutProperties(_props, ['radiumConfig']);
	    /* eslint-enable no-unused-vars */

	    return _react2.default.createElement(
	      'div',
	      otherProps,
	      this.props.children,
	      _react2.default.createElement(_styleSheet2.default, null)
	    );
	  };

	  return StyleRoot;
	}(_react.PureComponent);

	StyleRoot.contextTypes = {
	  _radiumConfig: _react.PropTypes.object,
	  _radiumStyleKeeper: _react.PropTypes.instanceOf(_styleKeeper2.default)
	};

	StyleRoot.childContextTypes = {
	  _radiumStyleKeeper: _react.PropTypes.instanceOf(_styleKeeper2.default)
	};

	StyleRoot = (0, _enhancer2.default)(StyleRoot);

	exports.default = StyleRoot;
	module.exports = exports['default'];

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _class, _temp;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _styleKeeper = __webpack_require__(6);

	var _styleKeeper2 = _interopRequireDefault(_styleKeeper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var StyleSheet = (_temp = _class = function (_PureComponent) {
	  _inherits(StyleSheet, _PureComponent);

	  function StyleSheet() {
	    _classCallCheck(this, StyleSheet);

	    var _this = _possibleConstructorReturn(this, _PureComponent.apply(this, arguments));

	    _this._onChange = function () {
	      setTimeout(function () {
	        _this._isMounted && _this.setState(_this._getCSSState());
	      }, 0);
	    };

	    _this.state = _this._getCSSState();
	    return _this;
	  }

	  StyleSheet.prototype.componentDidMount = function componentDidMount() {
	    this._isMounted = true;
	    this._subscription = this.context._radiumStyleKeeper.subscribe(this._onChange);
	    this._onChange();
	  };

	  StyleSheet.prototype.componentWillUnmount = function componentWillUnmount() {
	    this._isMounted = false;
	    if (this._subscription) {
	      this._subscription.remove();
	    }
	  };

	  StyleSheet.prototype._getCSSState = function _getCSSState() {
	    return { css: this.context._radiumStyleKeeper.getCSS() };
	  };

	  StyleSheet.prototype.render = function render() {
	    return _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: this.state.css } });
	  };

	  return StyleSheet;
	}(_react.PureComponent), _class.contextTypes = {
	  _radiumStyleKeeper: _react2.default.PropTypes.instanceOf(_styleKeeper2.default)
	}, _temp);
	exports.default = StyleSheet;
	module.exports = exports['default'];

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = keyframes;

	var _cssRuleSetToString = __webpack_require__(11);

	var _cssRuleSetToString2 = _interopRequireDefault(_cssRuleSetToString);

	var _hash = __webpack_require__(51);

	var _hash2 = _interopRequireDefault(_hash);

	var _prefixer = __webpack_require__(13);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function keyframes(keyframeRules, name) {
	  return {
	    __radiumKeyframes: true,
	    __process: function __process(userAgent) {
	      var keyframesPrefixed = (0, _prefixer.getPrefixedKeyframes)(userAgent);
	      var rules = Object.keys(keyframeRules).map(function (percentage) {
	        return (0, _cssRuleSetToString2.default)(percentage, keyframeRules[percentage], userAgent);
	      }).join('\n');
	      var animationName = (name ? name + '-' : '') + 'radium-animation-' + (0, _hash2.default)(rules);
	      var css = '@' + keyframesPrefixed + ' ' + animationName + ' {\n' + rules + '\n}\n';
	      return { css: css, animationName: animationName };
	    }
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 68 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.GetParents = GetParents;
	exports.GetSelfAndParents = GetSelfAndParents;
	exports.GetOffset = GetOffset;
	exports.GetContentOffset = GetContentOffset;
	exports.GetScroll = GetScroll;
	exports.E = E;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Vector2i = exports.Vector2i = function () {
	    function Vector2i(x, y) {
	        _classCallCheck(this, Vector2i);

	        this.x = x;
	        this.y = y;
	    }

	    _createClass(Vector2i, [{
	        key: "Minus",
	        value: function Minus() {
	            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
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
	            for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
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
	    if (includePadding) result = result.Plus(parseInt(dom.style.paddingLeft) | 0, parseInt(dom.style.paddingTop) | 0);
	    //result = result.Plus(parseInt(dom.scrollLeft)|0, parseInt(dom.scrollTop)|0);
	    return result;
	}
	function GetScroll(dom) {
	    return new Vector2i(dom.scrollLeft, dom.scrollTop);
	}
	function E() {
	    for (var _len3 = arguments.length, extenders = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	        extenders[_key3] = arguments[_key3];
	    }

	    return Object.assign.apply(Object, [{}].concat(extenders));
	}

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.BaseComponent = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(5);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BaseComponent = exports.BaseComponent = function (_Component) {
	    _inherits(BaseComponent, _Component);

	    function BaseComponent(props) {
	        _classCallCheck(this, BaseComponent);

	        var _this = _possibleConstructorReturn(this, (BaseComponent.__proto__ || Object.getPrototypeOf(BaseComponent)).call(this, props));

	        _this.mounted = false;
	        //autoBind(this);
	        _this.state = _this.state || {};
	        // if using PreRender, wrap render func
	        if (_this.PreRender != BaseComponent.prototype.render) {
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
	        key: "componentWillMount",
	        value: function componentWillMount() {
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
	            if (this.PostRender != BaseComponent.prototype.PostRender) {
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
	        key: "componentWillReceiveProps",
	        value: function componentWillReceiveProps(newProps) {
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
	            if (this.PostRender != BaseComponent.prototype.PostRender) {
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
	}(_react.Component);

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(71);


/***/ },
/* 71 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = autoBind;
	var wontBind = ['constructor', 'render', 'componentWillMount', 'componentDidMount', 'componentWillReceiveProps', 'shouldComponentUpdate', 'componentWillUpdate', 'componentDidUpdate', 'componentWillUnmount'];

	var toBind = [];

	function autoBind(context) {
	  if (context === undefined) {
	    console.error('Autobind error: No context provided.');
	    return;
	  }

	  var objPrototype = Object.getPrototypeOf(context);

	  if (arguments.length > 1) {
	    // If a list of methods to bind is provided, use it.
	    toBind = Array.prototype.slice.call(arguments, 1);
	  } else {
	    // If no list of methods to bind is provided, bind all available methods in class.
	    toBind = Object.getOwnPropertyNames(objPrototype);
	  }

	  toBind.forEach(function (method) {
	    var descriptor = Object.getOwnPropertyDescriptor(objPrototype, method);

	    if (descriptor === undefined) {
	      console.warn('Autobind: "' + method + '" method not found in class.');
	      return;
	    }

	    // Return if it's special case function or if not a function at all
	    if (wontBind.indexOf(method) !== -1 || typeof descriptor.value !== 'function') {
	      return;
	    }

	    Object.defineProperty(objPrototype, method, boundMethod(objPrototype, method, descriptor));
	  });
	}

	/**
	* From autobind-decorator (https://github.com/andreypopp/autobind-decorator/tree/master)
	* Return a descriptor removing the value and returning a getter
	* The getter will return a .bind version of the function
	* and memoize the result against a symbol on the instance
	*/
	function boundMethod(objPrototype, method, descriptor) {
	  var fn = descriptor.value;

	  return {
	    configurable: true,
	    get: function get() {
	      if (this === objPrototype || this.hasOwnProperty(method)) {
	        return fn;
	      }

	      var boundFn = fn.bind(this);
	      Object.defineProperty(this, method, {
	        value: boundFn,
	        configurable: true,
	        writable: true
	      });
	      return boundFn;
	    }
	  };
	}
	module.exports = exports['default'];


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.VMenuState = exports.ACTOpenVMenuSet = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.VMenuReducer = VMenuReducer;

	var _react = __webpack_require__(5);

	var React = _interopRequireWildcard(_react);

	var _Action2 = __webpack_require__(73);

	var _Action3 = _interopRequireDefault(_Action2);

	var _reactRedux = __webpack_require__(74);

	var _VMenu = __webpack_require__(1);

	var _VMenu2 = _interopRequireDefault(_VMenu);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
	        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    }return c > 3 && r && Object.defineProperty(target, key, r), r;
	};

	var ACTOpenVMenuSet = exports.ACTOpenVMenuSet = function (_Action) {
	    _inherits(ACTOpenVMenuSet, _Action);

	    function ACTOpenVMenuSet() {
	        _classCallCheck(this, ACTOpenVMenuSet);

	        return _possibleConstructorReturn(this, (ACTOpenVMenuSet.__proto__ || Object.getPrototypeOf(ACTOpenVMenuSet)).apply(this, arguments));
	    }

	    return ACTOpenVMenuSet;
	}(_Action3.default);
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


	var VMenuState = exports.VMenuState = function VMenuState() {
	    _classCallCheck(this, VMenuState);
	};

	function VMenuReducer() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new VMenuState();
	    var action = arguments[1];

	    if (action.Is(ACTOpenVMenuSet)) return Object.assign({}, state, { openMenuProps: action.payload });
	    return state;
	}
	var styles = {
	    overlay: { position: "fixed", left: 0, right: 0, top: 0, bottom: 0, backgroundColor: "rgba(0,0,0,.5)", zIndex: 1 },
	    container: {
	        position: "absolute", overflow: "auto",
	        //top: "40px", left: "40px", right: "40px", bottom: "40px",
	        left: "50%", right: "initial", top: "50%", bottom: "initial", transform: "translate(-50%, -50%)",
	        background: "rgba(0,0,0,.75)", border: "1px solid #555", WebkitOverflowScrolling: "touch", borderRadius: "4px", outline: "none", padding: "20px"
	    }
	};
	var VMenuLayer = function (_Component) {
	    _inherits(VMenuLayer, _Component);

	    function VMenuLayer() {
	        _classCallCheck(this, VMenuLayer);

	        return _possibleConstructorReturn(this, (VMenuLayer.__proto__ || Object.getPrototypeOf(VMenuLayer)).apply(this, arguments));
	    }

	    _createClass(VMenuLayer, [{
	        key: "render",
	        value: function render() {
	            var openMenuProps = this.props.openMenuProps;

	            if (openMenuProps == null) return React.createElement("div", null);
	            //let {overlayStyle, onOK, onCancel} = openMenuProps;
	            var children = _VMenu2.default.menuChildren[openMenuProps.menuID];
	            return React.createElement("div", null, React.createElement(_VMenu.VMenuUI, Object.assign({}, openMenuProps, { children: children })));
	        }
	    }]);

	    return VMenuLayer;
	}(_react.Component);
	VMenuLayer = __decorate([(0, _reactRedux.connect)(function (state) {
	    return {
	        openMenuProps: state.vMenu.openMenuProps
	    };
	})], VMenuLayer);
	exports.default = VMenuLayer;

/***/ },
/* 73 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Action = function () {
	    function Action(payload) {
	        _classCallCheck(this, Action);

	        this.type = this.constructor.name;
	        this.payload = payload;
	        //this.Extend(payload);
	        Object.setPrototypeOf(this, Object.getPrototypeOf({}));
	    }

	    _createClass(Action, [{
	        key: "Is",
	        value: function Is(actionType) {
	            if (actionType == null) return false; // this can occur during start-up "assert reducer sanity" phase
	            return this.type == actionType.name;
	            //return this instanceof actionType; // alternative
	        }
	    }]);

	    return Action;
	}();
	//Object.prototype._AddFunction("Is", Action.prototype.Is);


	exports.default = Action;
	Object.defineProperty(Object.prototype, "Is", { configurable: true, value: Action.prototype.Is });

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.connect = exports.connectAdvanced = exports.Provider = undefined;

	var _Provider = __webpack_require__(75);

	var _Provider2 = _interopRequireDefault(_Provider);

	var _connectAdvanced = __webpack_require__(78);

	var _connectAdvanced2 = _interopRequireDefault(_connectAdvanced);

	var _connect = __webpack_require__(82);

	var _connect2 = _interopRequireDefault(_connect);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Provider = _Provider2.default;
	exports.connectAdvanced = _connectAdvanced2.default;
	exports.connect = _connect2.default;

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports.default = undefined;

	var _react = __webpack_require__(5);

	var _PropTypes = __webpack_require__(76);

	var _warning = __webpack_require__(77);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var didWarnAboutReceivingStore = false;
	function warnAboutReceivingStore() {
	  if (didWarnAboutReceivingStore) {
	    return;
	  }
	  didWarnAboutReceivingStore = true;

	  (0, _warning2.default)('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
	}

	var Provider = function (_Component) {
	  _inherits(Provider, _Component);

	  Provider.prototype.getChildContext = function getChildContext() {
	    return { store: this.store, storeSubscription: null };
	  };

	  function Provider(props, context) {
	    _classCallCheck(this, Provider);

	    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

	    _this.store = props.store;
	    return _this;
	  }

	  Provider.prototype.render = function render() {
	    return _react.Children.only(this.props.children);
	  };

	  return Provider;
	}(_react.Component);

	exports.default = Provider;


	if (process.env.NODE_ENV !== 'production') {
	  Provider.prototype.componentWillReceiveProps = function (nextProps) {
	    var store = this.store;
	    var nextStore = nextProps.store;


	    if (store !== nextStore) {
	      warnAboutReceivingStore();
	    }
	  };
	}

	Provider.propTypes = {
	  store: _PropTypes.storeShape.isRequired,
	  children: _react.PropTypes.element.isRequired
	};
	Provider.childContextTypes = {
	  store: _PropTypes.storeShape.isRequired,
	  storeSubscription: _PropTypes.subscriptionShape
	};
	Provider.displayName = 'Provider';
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.storeShape = exports.subscriptionShape = undefined;

	var _react = __webpack_require__(5);

	var subscriptionShape = exports.subscriptionShape = _react.PropTypes.shape({
	  trySubscribe: _react.PropTypes.func.isRequired,
	  tryUnsubscribe: _react.PropTypes.func.isRequired,
	  notifyNestedSubs: _react.PropTypes.func.isRequired,
	  isSubscribed: _react.PropTypes.func.isRequired
	});

	var storeShape = exports.storeShape = _react.PropTypes.shape({
	  subscribe: _react.PropTypes.func.isRequired,
	  dispatch: _react.PropTypes.func.isRequired,
	  getState: _react.PropTypes.func.isRequired
	});

/***/ },
/* 77 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.default = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that if you enable
	    // "break on all exceptions" in your console,
	    // it would pause the execution at this line.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = connectAdvanced;

	var _hoistNonReactStatics = __webpack_require__(79);

	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

	var _invariant = __webpack_require__(80);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _react = __webpack_require__(5);

	var _Subscription = __webpack_require__(81);

	var _Subscription2 = _interopRequireDefault(_Subscription);

	var _PropTypes = __webpack_require__(76);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var hotReloadingVersion = 0;
	var dummyState = {};
	function noop() {}
	function makeSelectorStateful(sourceSelector, store) {
	  // wrap the selector in an object that tracks its results between runs.
	  var selector = {
	    run: function runComponentSelector(props) {
	      try {
	        var nextProps = sourceSelector(store.getState(), props);
	        if (nextProps !== selector.props || selector.error) {
	          selector.shouldComponentUpdate = true;
	          selector.props = nextProps;
	          selector.error = null;
	        }
	      } catch (error) {
	        selector.shouldComponentUpdate = true;
	        selector.error = error;
	      }
	    }
	  };

	  return selector;
	}

	function connectAdvanced(
	/*
	  selectorFactory is a func that is responsible for returning the selector function used to
	  compute new props from state, props, and dispatch. For example:
	     export default connectAdvanced((dispatch, options) => (state, props) => ({
	      thing: state.things[props.thingId],
	      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
	    }))(YourComponent)
	   Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
	  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
	  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
	   Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
	  props. Do not use connectAdvanced directly without memoizing results between calls to your
	  selector, otherwise the Connect component will re-render on every state or props change.
	*/
	selectorFactory) {
	  var _contextTypes, _childContextTypes;

	  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	      _ref$getDisplayName = _ref.getDisplayName,
	      getDisplayName = _ref$getDisplayName === undefined ? function (name) {
	    return 'ConnectAdvanced(' + name + ')';
	  } : _ref$getDisplayName,
	      _ref$methodName = _ref.methodName,
	      methodName = _ref$methodName === undefined ? 'connectAdvanced' : _ref$methodName,
	      _ref$renderCountProp = _ref.renderCountProp,
	      renderCountProp = _ref$renderCountProp === undefined ? undefined : _ref$renderCountProp,
	      _ref$shouldHandleStat = _ref.shouldHandleStateChanges,
	      shouldHandleStateChanges = _ref$shouldHandleStat === undefined ? true : _ref$shouldHandleStat,
	      _ref$storeKey = _ref.storeKey,
	      storeKey = _ref$storeKey === undefined ? 'store' : _ref$storeKey,
	      _ref$withRef = _ref.withRef,
	      withRef = _ref$withRef === undefined ? false : _ref$withRef,
	      connectOptions = _objectWithoutProperties(_ref, ['getDisplayName', 'methodName', 'renderCountProp', 'shouldHandleStateChanges', 'storeKey', 'withRef']);

	  var subscriptionKey = storeKey + 'Subscription';
	  var version = hotReloadingVersion++;

	  var contextTypes = (_contextTypes = {}, _contextTypes[storeKey] = _PropTypes.storeShape, _contextTypes[subscriptionKey] = _PropTypes.subscriptionShape, _contextTypes);
	  var childContextTypes = (_childContextTypes = {}, _childContextTypes[subscriptionKey] = _PropTypes.subscriptionShape, _childContextTypes);

	  return function wrapWithConnect(WrappedComponent) {
	    (0, _invariant2.default)(typeof WrappedComponent == 'function', 'You must pass a component to the function returned by ' + ('connect. Instead received ' + JSON.stringify(WrappedComponent)));

	    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

	    var displayName = getDisplayName(wrappedComponentName);

	    var selectorFactoryOptions = _extends({}, connectOptions, {
	      getDisplayName: getDisplayName,
	      methodName: methodName,
	      renderCountProp: renderCountProp,
	      shouldHandleStateChanges: shouldHandleStateChanges,
	      storeKey: storeKey,
	      withRef: withRef,
	      displayName: displayName,
	      wrappedComponentName: wrappedComponentName,
	      WrappedComponent: WrappedComponent
	    });

	    var Connect = function (_Component) {
	      _inherits(Connect, _Component);

	      function Connect(props, context) {
	        _classCallCheck(this, Connect);

	        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

	        _this.version = version;
	        _this.state = {};
	        _this.renderCount = 0;
	        _this.store = props[storeKey] || context[storeKey];
	        _this.propsMode = Boolean(props[storeKey]);
	        _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);

	        (0, _invariant2.default)(_this.store, 'Could not find "' + storeKey + '" in either the context or props of ' + ('"' + displayName + '". Either wrap the root component in a <Provider>, ') + ('or explicitly pass "' + storeKey + '" as a prop to "' + displayName + '".'));

	        _this.initSelector();
	        _this.initSubscription();
	        return _this;
	      }

	      Connect.prototype.getChildContext = function getChildContext() {
	        var _ref2;

	        // If this component received store from props, its subscription should be transparent
	        // to any descendants receiving store+subscription from context; it passes along
	        // subscription passed to it. Otherwise, it shadows the parent subscription, which allows
	        // Connect to control ordering of notifications to flow top-down.
	        var subscription = this.propsMode ? null : this.subscription;
	        return _ref2 = {}, _ref2[subscriptionKey] = subscription || this.context[subscriptionKey], _ref2;
	      };

	      Connect.prototype.componentDidMount = function componentDidMount() {
	        if (!shouldHandleStateChanges) return;

	        // componentWillMount fires during server side rendering, but componentDidMount and
	        // componentWillUnmount do not. Because of this, trySubscribe happens during ...didMount.
	        // Otherwise, unsubscription would never take place during SSR, causing a memory leak.
	        // To handle the case where a child component may have triggered a state change by
	        // dispatching an action in its componentWillMount, we have to re-run the select and maybe
	        // re-render.
	        this.subscription.trySubscribe();
	        this.selector.run(this.props);
	        if (this.selector.shouldComponentUpdate) this.forceUpdate();
	      };

	      Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        this.selector.run(nextProps);
	      };

	      Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
	        return this.selector.shouldComponentUpdate;
	      };

	      Connect.prototype.componentWillUnmount = function componentWillUnmount() {
	        if (this.subscription) this.subscription.tryUnsubscribe();
	        this.subscription = null;
	        this.notifyNestedSubs = noop;
	        this.store = null;
	        this.selector.run = noop;
	        this.selector.shouldComponentUpdate = false;
	      };

	      Connect.prototype.getWrappedInstance = function getWrappedInstance() {
	        (0, _invariant2.default)(withRef, 'To access the wrapped instance, you need to specify ' + ('{ withRef: true } in the options argument of the ' + methodName + '() call.'));
	        return this.wrappedInstance;
	      };

	      Connect.prototype.setWrappedInstance = function setWrappedInstance(ref) {
	        this.wrappedInstance = ref;
	      };

	      Connect.prototype.initSelector = function initSelector() {
	        var sourceSelector = selectorFactory(this.store.dispatch, selectorFactoryOptions);
	        this.selector = makeSelectorStateful(sourceSelector, this.store);
	        this.selector.run(this.props);
	      };

	      Connect.prototype.initSubscription = function initSubscription() {
	        if (!shouldHandleStateChanges) return;

	        // parentSub's source should match where store came from: props vs. context. A component
	        // connected to the store via props shouldn't use subscription from context, or vice versa.
	        var parentSub = (this.propsMode ? this.props : this.context)[subscriptionKey];
	        this.subscription = new _Subscription2.default(this.store, parentSub, this.onStateChange.bind(this));

	        // `notifyNestedSubs` is duplicated to handle the case where the component is  unmounted in
	        // the middle of the notification loop, where `this.subscription` will then be null. An
	        // extra null check every change can be avoided by copying the method onto `this` and then
	        // replacing it with a no-op on unmount. This can probably be avoided if Subscription's
	        // listeners logic is changed to not call listeners that have been unsubscribed in the
	        // middle of the notification loop.
	        this.notifyNestedSubs = this.subscription.notifyNestedSubs.bind(this.subscription);
	      };

	      Connect.prototype.onStateChange = function onStateChange() {
	        this.selector.run(this.props);

	        if (!this.selector.shouldComponentUpdate) {
	          this.notifyNestedSubs();
	        } else {
	          this.componentDidUpdate = this.notifyNestedSubsOnComponentDidUpdate;
	          this.setState(dummyState);
	        }
	      };

	      Connect.prototype.notifyNestedSubsOnComponentDidUpdate = function notifyNestedSubsOnComponentDidUpdate() {
	        // `componentDidUpdate` is conditionally implemented when `onStateChange` determines it
	        // needs to notify nested subs. Once called, it unimplements itself until further state
	        // changes occur. Doing it this way vs having a permanent `componentDidMount` that does
	        // a boolean check every time avoids an extra method call most of the time, resulting
	        // in some perf boost.
	        this.componentDidUpdate = undefined;
	        this.notifyNestedSubs();
	      };

	      Connect.prototype.isSubscribed = function isSubscribed() {
	        return Boolean(this.subscription) && this.subscription.isSubscribed();
	      };

	      Connect.prototype.addExtraProps = function addExtraProps(props) {
	        if (!withRef && !renderCountProp && !(this.propsMode && this.subscription)) return props;
	        // make a shallow copy so that fields added don't leak to the original selector.
	        // this is especially important for 'ref' since that's a reference back to the component
	        // instance. a singleton memoized selector would then be holding a reference to the
	        // instance, preventing the instance from being garbage collected, and that would be bad
	        var withExtras = _extends({}, props);
	        if (withRef) withExtras.ref = this.setWrappedInstance;
	        if (renderCountProp) withExtras[renderCountProp] = this.renderCount++;
	        if (this.propsMode && this.subscription) withExtras[subscriptionKey] = this.subscription;
	        return withExtras;
	      };

	      Connect.prototype.render = function render() {
	        var selector = this.selector;
	        selector.shouldComponentUpdate = false;

	        if (selector.error) {
	          throw selector.error;
	        } else {
	          return (0, _react.createElement)(WrappedComponent, this.addExtraProps(selector.props));
	        }
	      };

	      return Connect;
	    }(_react.Component);

	    Connect.WrappedComponent = WrappedComponent;
	    Connect.displayName = displayName;
	    Connect.childContextTypes = childContextTypes;
	    Connect.contextTypes = contextTypes;
	    Connect.propTypes = contextTypes;

	    if (process.env.NODE_ENV !== 'production') {
	      Connect.prototype.componentWillUpdate = function componentWillUpdate() {
	        // We are hot reloading!
	        if (this.version !== version) {
	          this.version = version;
	          this.initSelector();

	          if (this.subscription) this.subscription.tryUnsubscribe();
	          this.initSubscription();
	          if (shouldHandleStateChanges) this.subscription.trySubscribe();
	        }
	      };
	    }

	    return (0, _hoistNonReactStatics2.default)(Connect, WrappedComponent);
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 79 */
/***/ function(module, exports) {

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	'use strict';

	var REACT_STATICS = {
	    childContextTypes: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    mixins: true,
	    propTypes: true,
	    type: true
	};

	var KNOWN_STATICS = {
	    name: true,
	    length: true,
	    prototype: true,
	    caller: true,
	    arguments: true,
	    arity: true
	};

	var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';

	module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
	    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
	        var keys = Object.getOwnPropertyNames(sourceComponent);

	        /* istanbul ignore else */
	        if (isGetOwnPropertySymbolsAvailable) {
	            keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
	        }

	        for (var i = 0; i < keys.length; ++i) {
	            if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
	                try {
	                    targetComponent[keys[i]] = sourceComponent[keys[i]];
	                } catch (error) {

	                }
	            }
	        }
	    }

	    return targetComponent;
	};


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 81 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// encapsulates the subscription logic for connecting a component to the redux store, as
	// well as nesting subscriptions of descendant components, so that we can ensure the
	// ancestor components re-render before descendants

	var CLEARED = null;
	var nullListeners = {
	  notify: function notify() {}
	};

	function createListenerCollection() {
	  // the current/next pattern is copied from redux's createStore code.
	  // TODO: refactor+expose that code to be reusable here?
	  var current = [];
	  var next = [];

	  return {
	    clear: function clear() {
	      next = CLEARED;
	      current = CLEARED;
	    },
	    notify: function notify() {
	      var listeners = current = next;
	      for (var i = 0; i < listeners.length; i++) {
	        listeners[i]();
	      }
	    },
	    subscribe: function subscribe(listener) {
	      var isSubscribed = true;
	      if (next === current) next = current.slice();
	      next.push(listener);

	      return function unsubscribe() {
	        if (!isSubscribed || current === CLEARED) return;
	        isSubscribed = false;

	        if (next === current) next = current.slice();
	        next.splice(next.indexOf(listener), 1);
	      };
	    }
	  };
	}

	var Subscription = function () {
	  function Subscription(store, parentSub, onStateChange) {
	    _classCallCheck(this, Subscription);

	    this.store = store;
	    this.parentSub = parentSub;
	    this.onStateChange = onStateChange;
	    this.unsubscribe = null;
	    this.listeners = nullListeners;
	  }

	  Subscription.prototype.addNestedSub = function addNestedSub(listener) {
	    this.trySubscribe();
	    return this.listeners.subscribe(listener);
	  };

	  Subscription.prototype.notifyNestedSubs = function notifyNestedSubs() {
	    this.listeners.notify();
	  };

	  Subscription.prototype.isSubscribed = function isSubscribed() {
	    return Boolean(this.unsubscribe);
	  };

	  Subscription.prototype.trySubscribe = function trySubscribe() {
	    if (!this.unsubscribe) {
	      this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.onStateChange) : this.store.subscribe(this.onStateChange);

	      this.listeners = createListenerCollection();
	    }
	  };

	  Subscription.prototype.tryUnsubscribe = function tryUnsubscribe() {
	    if (this.unsubscribe) {
	      this.unsubscribe();
	      this.unsubscribe = null;
	      this.listeners.clear();
	      this.listeners = nullListeners;
	    }
	  };

	  return Subscription;
	}();

	exports.default = Subscription;

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.createConnect = createConnect;

	var _connectAdvanced = __webpack_require__(78);

	var _connectAdvanced2 = _interopRequireDefault(_connectAdvanced);

	var _shallowEqual = __webpack_require__(83);

	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

	var _mapDispatchToProps = __webpack_require__(84);

	var _mapDispatchToProps2 = _interopRequireDefault(_mapDispatchToProps);

	var _mapStateToProps = __webpack_require__(108);

	var _mapStateToProps2 = _interopRequireDefault(_mapStateToProps);

	var _mergeProps = __webpack_require__(109);

	var _mergeProps2 = _interopRequireDefault(_mergeProps);

	var _selectorFactory = __webpack_require__(110);

	var _selectorFactory2 = _interopRequireDefault(_selectorFactory);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	/*
	  connect is a facade over connectAdvanced. It turns its args into a compatible
	  selectorFactory, which has the signature:

	    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
	  
	  connect passes its args to connectAdvanced as options, which will in turn pass them to
	  selectorFactory each time a Connect component instance is instantiated or hot reloaded.

	  selectorFactory returns a final props selector from its mapStateToProps,
	  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
	  mergePropsFactories, and pure args.

	  The resulting final props selector is called by the Connect component instance whenever
	  it receives new props or store state.
	 */

	function match(arg, factories, name) {
	  for (var i = factories.length - 1; i >= 0; i--) {
	    var result = factories[i](arg);
	    if (result) return result;
	  }

	  return function (dispatch, options) {
	    throw new Error('Invalid value of type ' + typeof arg + ' for ' + name + ' argument when connecting component ' + options.wrappedComponentName + '.');
	  };
	}

	function strictEqual(a, b) {
	  return a === b;
	}

	// createConnect with default args builds the 'official' connect behavior. Calling it with
	// different options opens up some testing and extensibility scenarios
	function createConnect() {
	  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	      _ref$connectHOC = _ref.connectHOC,
	      connectHOC = _ref$connectHOC === undefined ? _connectAdvanced2.default : _ref$connectHOC,
	      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
	      mapStateToPropsFactories = _ref$mapStateToPropsF === undefined ? _mapStateToProps2.default : _ref$mapStateToPropsF,
	      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
	      mapDispatchToPropsFactories = _ref$mapDispatchToPro === undefined ? _mapDispatchToProps2.default : _ref$mapDispatchToPro,
	      _ref$mergePropsFactor = _ref.mergePropsFactories,
	      mergePropsFactories = _ref$mergePropsFactor === undefined ? _mergeProps2.default : _ref$mergePropsFactor,
	      _ref$selectorFactory = _ref.selectorFactory,
	      selectorFactory = _ref$selectorFactory === undefined ? _selectorFactory2.default : _ref$selectorFactory;

	  return function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
	    var _ref2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
	        _ref2$pure = _ref2.pure,
	        pure = _ref2$pure === undefined ? true : _ref2$pure,
	        _ref2$areStatesEqual = _ref2.areStatesEqual,
	        areStatesEqual = _ref2$areStatesEqual === undefined ? strictEqual : _ref2$areStatesEqual,
	        _ref2$areOwnPropsEqua = _ref2.areOwnPropsEqual,
	        areOwnPropsEqual = _ref2$areOwnPropsEqua === undefined ? _shallowEqual2.default : _ref2$areOwnPropsEqua,
	        _ref2$areStatePropsEq = _ref2.areStatePropsEqual,
	        areStatePropsEqual = _ref2$areStatePropsEq === undefined ? _shallowEqual2.default : _ref2$areStatePropsEq,
	        _ref2$areMergedPropsE = _ref2.areMergedPropsEqual,
	        areMergedPropsEqual = _ref2$areMergedPropsE === undefined ? _shallowEqual2.default : _ref2$areMergedPropsE,
	        extraOptions = _objectWithoutProperties(_ref2, ['pure', 'areStatesEqual', 'areOwnPropsEqual', 'areStatePropsEqual', 'areMergedPropsEqual']);

	    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
	    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
	    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');

	    return connectHOC(selectorFactory, _extends({
	      // used in error messages
	      methodName: 'connect',

	      // used to compute Connect's displayName from the wrapped component's displayName.
	      getDisplayName: function getDisplayName(name) {
	        return 'Connect(' + name + ')';
	      },

	      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
	      shouldHandleStateChanges: Boolean(mapStateToProps),

	      // passed through to selectorFactory
	      initMapStateToProps: initMapStateToProps,
	      initMapDispatchToProps: initMapDispatchToProps,
	      initMergeProps: initMergeProps,
	      pure: pure,
	      areStatesEqual: areStatesEqual,
	      areOwnPropsEqual: areOwnPropsEqual,
	      areStatePropsEqual: areStatePropsEqual,
	      areMergedPropsEqual: areMergedPropsEqual

	    }, extraOptions));
	  };
	}

	exports.default = createConnect();

/***/ },
/* 83 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.default = shallowEqual;
	var hasOwn = Object.prototype.hasOwnProperty;

	function is(x, y) {
	  if (x === y) {
	    return x !== 0 || y !== 0 || 1 / x === 1 / y;
	  } else {
	    return x !== x && y !== y;
	  }
	}

	function shallowEqual(objA, objB) {
	  if (is(objA, objB)) return true;

	  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	    return false;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) return false;

	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwn.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
	      return false;
	    }
	  }

	  return true;
	}

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.whenMapDispatchToPropsIsFunction = whenMapDispatchToPropsIsFunction;
	exports.whenMapDispatchToPropsIsMissing = whenMapDispatchToPropsIsMissing;
	exports.whenMapDispatchToPropsIsObject = whenMapDispatchToPropsIsObject;

	var _redux = __webpack_require__(85);

	var _wrapMapToProps = __webpack_require__(106);

	function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
	  return typeof mapDispatchToProps === 'function' ? (0, _wrapMapToProps.wrapMapToPropsFunc)(mapDispatchToProps, 'mapDispatchToProps') : undefined;
	}

	function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
	  return !mapDispatchToProps ? (0, _wrapMapToProps.wrapMapToPropsConstant)(function (dispatch) {
	    return { dispatch: dispatch };
	  }) : undefined;
	}

	function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
	  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? (0, _wrapMapToProps.wrapMapToPropsConstant)(function (dispatch) {
	    return (0, _redux.bindActionCreators)(mapDispatchToProps, dispatch);
	  }) : undefined;
	}

	exports.default = [whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject];

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;

	var _createStore = __webpack_require__(86);

	var _createStore2 = _interopRequireDefault(_createStore);

	var _combineReducers = __webpack_require__(101);

	var _combineReducers2 = _interopRequireDefault(_combineReducers);

	var _bindActionCreators = __webpack_require__(103);

	var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);

	var _applyMiddleware = __webpack_require__(104);

	var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);

	var _compose = __webpack_require__(105);

	var _compose2 = _interopRequireDefault(_compose);

	var _warning = __webpack_require__(102);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/*
	* This is a dummy function to check if the function name has been altered by minification.
	* If the function has been minified and NODE_ENV !== 'production', warn the user.
	*/
	function isCrushed() {}

	if (process.env.NODE_ENV !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
	  (0, _warning2['default'])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
	}

	exports.createStore = _createStore2['default'];
	exports.combineReducers = _combineReducers2['default'];
	exports.bindActionCreators = _bindActionCreators2['default'];
	exports.applyMiddleware = _applyMiddleware2['default'];
	exports.compose = _compose2['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.ActionTypes = undefined;
	exports['default'] = createStore;

	var _isPlainObject = __webpack_require__(87);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _symbolObservable = __webpack_require__(97);

	var _symbolObservable2 = _interopRequireDefault(_symbolObservable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var ActionTypes = exports.ActionTypes = {
	  INIT: '@@redux/INIT'
	};

	/**
	 * Creates a Redux store that holds the state tree.
	 * The only way to change the data in the store is to call `dispatch()` on it.
	 *
	 * There should only be a single store in your app. To specify how different
	 * parts of the state tree respond to actions, you may combine several reducers
	 * into a single reducer function by using `combineReducers`.
	 *
	 * @param {Function} reducer A function that returns the next state tree, given
	 * the current state tree and the action to handle.
	 *
	 * @param {any} [preloadedState] The initial state. You may optionally specify it
	 * to hydrate the state from the server in universal apps, or to restore a
	 * previously serialized user session.
	 * If you use `combineReducers` to produce the root reducer function, this must be
	 * an object with the same shape as `combineReducers` keys.
	 *
	 * @param {Function} enhancer The store enhancer. You may optionally specify it
	 * to enhance the store with third-party capabilities such as middleware,
	 * time travel, persistence, etc. The only store enhancer that ships with Redux
	 * is `applyMiddleware()`.
	 *
	 * @returns {Store} A Redux store that lets you read the state, dispatch actions
	 * and subscribe to changes.
	 */
	function createStore(reducer, preloadedState, enhancer) {
	  var _ref2;

	  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
	    enhancer = preloadedState;
	    preloadedState = undefined;
	  }

	  if (typeof enhancer !== 'undefined') {
	    if (typeof enhancer !== 'function') {
	      throw new Error('Expected the enhancer to be a function.');
	    }

	    return enhancer(createStore)(reducer, preloadedState);
	  }

	  if (typeof reducer !== 'function') {
	    throw new Error('Expected the reducer to be a function.');
	  }

	  var currentReducer = reducer;
	  var currentState = preloadedState;
	  var currentListeners = [];
	  var nextListeners = currentListeners;
	  var isDispatching = false;

	  function ensureCanMutateNextListeners() {
	    if (nextListeners === currentListeners) {
	      nextListeners = currentListeners.slice();
	    }
	  }

	  /**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */
	  function getState() {
	    return currentState;
	  }

	  /**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * You may call `dispatch()` from a change listener, with the following
	   * caveats:
	   *
	   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
	   * If you subscribe or unsubscribe while the listeners are being invoked, this
	   * will not have any effect on the `dispatch()` that is currently in progress.
	   * However, the next `dispatch()` call, whether nested or not, will use a more
	   * recent snapshot of the subscription list.
	   *
	   * 2. The listener should not expect to see all state changes, as the state
	   * might have been updated multiple times during a nested `dispatch()` before
	   * the listener is called. It is, however, guaranteed that all subscribers
	   * registered before the `dispatch()` started will be called with the latest
	   * state by the time it exits.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */
	  function subscribe(listener) {
	    if (typeof listener !== 'function') {
	      throw new Error('Expected listener to be a function.');
	    }

	    var isSubscribed = true;

	    ensureCanMutateNextListeners();
	    nextListeners.push(listener);

	    return function unsubscribe() {
	      if (!isSubscribed) {
	        return;
	      }

	      isSubscribed = false;

	      ensureCanMutateNextListeners();
	      var index = nextListeners.indexOf(listener);
	      nextListeners.splice(index, 1);
	    };
	  }

	  /**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */
	  function dispatch(action) {
	    if (!(0, _isPlainObject2['default'])(action)) {
	      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
	    }

	    if (typeof action.type === 'undefined') {
	      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
	    }

	    if (isDispatching) {
	      throw new Error('Reducers may not dispatch actions.');
	    }

	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }

	    var listeners = currentListeners = nextListeners;
	    for (var i = 0; i < listeners.length; i++) {
	      listeners[i]();
	    }

	    return action;
	  }

	  /**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */
	  function replaceReducer(nextReducer) {
	    if (typeof nextReducer !== 'function') {
	      throw new Error('Expected the nextReducer to be a function.');
	    }

	    currentReducer = nextReducer;
	    dispatch({ type: ActionTypes.INIT });
	  }

	  /**
	   * Interoperability point for observable/reactive libraries.
	   * @returns {observable} A minimal observable of state changes.
	   * For more information, see the observable proposal:
	   * https://github.com/zenparsing/es-observable
	   */
	  function observable() {
	    var _ref;

	    var outerSubscribe = subscribe;
	    return _ref = {
	      /**
	       * The minimal observable subscription method.
	       * @param {Object} observer Any object that can be used as an observer.
	       * The observer object should have a `next` method.
	       * @returns {subscription} An object with an `unsubscribe` method that can
	       * be used to unsubscribe the observable from the store, and prevent further
	       * emission of values from the observable.
	       */
	      subscribe: function subscribe(observer) {
	        if (typeof observer !== 'object') {
	          throw new TypeError('Expected the observer to be an object.');
	        }

	        function observeState() {
	          if (observer.next) {
	            observer.next(getState());
	          }
	        }

	        observeState();
	        var unsubscribe = outerSubscribe(observeState);
	        return { unsubscribe: unsubscribe };
	      }
	    }, _ref[_symbolObservable2['default']] = function () {
	      return this;
	    }, _ref;
	  }

	  // When a store is created, an "INIT" action is dispatched so that every
	  // reducer returns their initial state. This effectively populates
	  // the initial state tree.
	  dispatch({ type: ActionTypes.INIT });

	  return _ref2 = {
	    dispatch: dispatch,
	    subscribe: subscribe,
	    getState: getState,
	    replaceReducer: replaceReducer
	  }, _ref2[_symbolObservable2['default']] = observable, _ref2;
	}

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(88),
	    getPrototype = __webpack_require__(94),
	    isObjectLike = __webpack_require__(96);

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
	    funcToString.call(Ctor) == objectCtorString;
	}

	module.exports = isPlainObject;


/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(89),
	    getRawTag = __webpack_require__(92),
	    objectToString = __webpack_require__(93);

	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag && symToStringTag in Object(value))
	    ? getRawTag(value)
	    : objectToString(value);
	}

	module.exports = baseGetTag;


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(90);

	/** Built-in value references. */
	var Symbol = root.Symbol;

	module.exports = Symbol;


/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(91);

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	module.exports = root;


/***/ },
/* 91 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	module.exports = freeGlobal;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(89);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];

	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}

	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}

	module.exports = getRawTag;


/***/ },
/* 93 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}

	module.exports = objectToString;


/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(95);

	/** Built-in value references. */
	var getPrototype = overArg(Object.getPrototypeOf, Object);

	module.exports = getPrototype;


/***/ },
/* 95 */
/***/ function(module, exports) {

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	module.exports = overArg;


/***/ },
/* 96 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(98);


/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, module) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ponyfill = __webpack_require__(100);

	var _ponyfill2 = _interopRequireDefault(_ponyfill);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var root; /* global window */


	if (typeof self !== 'undefined') {
	  root = self;
	} else if (typeof window !== 'undefined') {
	  root = window;
	} else if (typeof global !== 'undefined') {
	  root = global;
	} else if (true) {
	  root = module;
	} else {
	  root = Function('return this')();
	}

	var result = (0, _ponyfill2['default'])(root);
	exports['default'] = result;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(99)(module)))

/***/ },
/* 99 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 100 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports['default'] = symbolObservablePonyfill;
	function symbolObservablePonyfill(root) {
		var result;
		var _Symbol = root.Symbol;

		if (typeof _Symbol === 'function') {
			if (_Symbol.observable) {
				result = _Symbol.observable;
			} else {
				result = _Symbol('observable');
				_Symbol.observable = result;
			}
		} else {
			result = '@@observable';
		}

		return result;
	};

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports['default'] = combineReducers;

	var _createStore = __webpack_require__(86);

	var _isPlainObject = __webpack_require__(87);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _warning = __webpack_require__(102);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function getUndefinedStateErrorMessage(key, action) {
	  var actionType = action && action.type;
	  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

	  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state.';
	}

	function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
	  var reducerKeys = Object.keys(reducers);
	  var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

	  if (reducerKeys.length === 0) {
	    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
	  }

	  if (!(0, _isPlainObject2['default'])(inputState)) {
	    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
	  }

	  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
	    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
	  });

	  unexpectedKeys.forEach(function (key) {
	    unexpectedKeyCache[key] = true;
	  });

	  if (unexpectedKeys.length > 0) {
	    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
	  }
	}

	function assertReducerSanity(reducers) {
	  Object.keys(reducers).forEach(function (key) {
	    var reducer = reducers[key];
	    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });

	    if (typeof initialState === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined.');
	    }

	    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
	    if (typeof reducer(undefined, { type: type }) === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined.');
	    }
	  });
	}

	/**
	 * Turns an object whose values are different reducer functions, into a single
	 * reducer function. It will call every child reducer, and gather their results
	 * into a single state object, whose keys correspond to the keys of the passed
	 * reducer functions.
	 *
	 * @param {Object} reducers An object whose values correspond to different
	 * reducer functions that need to be combined into one. One handy way to obtain
	 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
	 * undefined for any action. Instead, they should return their initial state
	 * if the state passed to them was undefined, and the current state for any
	 * unrecognized action.
	 *
	 * @returns {Function} A reducer function that invokes every reducer inside the
	 * passed object, and builds a state object with the same shape.
	 */
	function combineReducers(reducers) {
	  var reducerKeys = Object.keys(reducers);
	  var finalReducers = {};
	  for (var i = 0; i < reducerKeys.length; i++) {
	    var key = reducerKeys[i];

	    if (process.env.NODE_ENV !== 'production') {
	      if (typeof reducers[key] === 'undefined') {
	        (0, _warning2['default'])('No reducer provided for key "' + key + '"');
	      }
	    }

	    if (typeof reducers[key] === 'function') {
	      finalReducers[key] = reducers[key];
	    }
	  }
	  var finalReducerKeys = Object.keys(finalReducers);

	  if (process.env.NODE_ENV !== 'production') {
	    var unexpectedKeyCache = {};
	  }

	  var sanityError;
	  try {
	    assertReducerSanity(finalReducers);
	  } catch (e) {
	    sanityError = e;
	  }

	  return function combination() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var action = arguments[1];

	    if (sanityError) {
	      throw sanityError;
	    }

	    if (process.env.NODE_ENV !== 'production') {
	      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
	      if (warningMessage) {
	        (0, _warning2['default'])(warningMessage);
	      }
	    }

	    var hasChanged = false;
	    var nextState = {};
	    for (var i = 0; i < finalReducerKeys.length; i++) {
	      var key = finalReducerKeys[i];
	      var reducer = finalReducers[key];
	      var previousStateForKey = state[key];
	      var nextStateForKey = reducer(previousStateForKey, action);
	      if (typeof nextStateForKey === 'undefined') {
	        var errorMessage = getUndefinedStateErrorMessage(key, action);
	        throw new Error(errorMessage);
	      }
	      nextState[key] = nextStateForKey;
	      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
	    }
	    return hasChanged ? nextState : state;
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 102 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that if you enable
	    // "break on all exceptions" in your console,
	    // it would pause the execution at this line.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ },
/* 103 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = bindActionCreators;
	function bindActionCreator(actionCreator, dispatch) {
	  return function () {
	    return dispatch(actionCreator.apply(undefined, arguments));
	  };
	}

	/**
	 * Turns an object whose values are action creators, into an object with the
	 * same keys, but with every function wrapped into a `dispatch` call so they
	 * may be invoked directly. This is just a convenience method, as you can call
	 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
	 *
	 * For convenience, you can also pass a single function as the first argument,
	 * and get a function in return.
	 *
	 * @param {Function|Object} actionCreators An object whose values are action
	 * creator functions. One handy way to obtain it is to use ES6 `import * as`
	 * syntax. You may also pass a single function.
	 *
	 * @param {Function} dispatch The `dispatch` function available on your Redux
	 * store.
	 *
	 * @returns {Function|Object} The object mimicking the original object, but with
	 * every action creator wrapped into the `dispatch` call. If you passed a
	 * function as `actionCreators`, the return value will also be a single
	 * function.
	 */
	function bindActionCreators(actionCreators, dispatch) {
	  if (typeof actionCreators === 'function') {
	    return bindActionCreator(actionCreators, dispatch);
	  }

	  if (typeof actionCreators !== 'object' || actionCreators === null) {
	    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
	  }

	  var keys = Object.keys(actionCreators);
	  var boundActionCreators = {};
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    var actionCreator = actionCreators[key];
	    if (typeof actionCreator === 'function') {
	      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
	    }
	  }
	  return boundActionCreators;
	}

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports['default'] = applyMiddleware;

	var _compose = __webpack_require__(105);

	var _compose2 = _interopRequireDefault(_compose);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * Creates a store enhancer that applies middleware to the dispatch method
	 * of the Redux store. This is handy for a variety of tasks, such as expressing
	 * asynchronous actions in a concise manner, or logging every action payload.
	 *
	 * See `redux-thunk` package as an example of the Redux middleware.
	 *
	 * Because middleware is potentially asynchronous, this should be the first
	 * store enhancer in the composition chain.
	 *
	 * Note that each middleware will be given the `dispatch` and `getState` functions
	 * as named arguments.
	 *
	 * @param {...Function} middlewares The middleware chain to be applied.
	 * @returns {Function} A store enhancer applying the middleware.
	 */
	function applyMiddleware() {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }

	  return function (createStore) {
	    return function (reducer, preloadedState, enhancer) {
	      var store = createStore(reducer, preloadedState, enhancer);
	      var _dispatch = store.dispatch;
	      var chain = [];

	      var middlewareAPI = {
	        getState: store.getState,
	        dispatch: function dispatch(action) {
	          return _dispatch(action);
	        }
	      };
	      chain = middlewares.map(function (middleware) {
	        return middleware(middlewareAPI);
	      });
	      _dispatch = _compose2['default'].apply(undefined, chain)(store.dispatch);

	      return _extends({}, store, {
	        dispatch: _dispatch
	      });
	    };
	  };
	}

/***/ },
/* 105 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = compose;
	/**
	 * Composes single-argument functions from right to left. The rightmost
	 * function can take multiple arguments as it provides the signature for
	 * the resulting composite function.
	 *
	 * @param {...Function} funcs The functions to compose.
	 * @returns {Function} A function obtained by composing the argument functions
	 * from right to left. For example, compose(f, g, h) is identical to doing
	 * (...args) => f(g(h(...args))).
	 */

	function compose() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }

	  if (funcs.length === 0) {
	    return function (arg) {
	      return arg;
	    };
	  }

	  if (funcs.length === 1) {
	    return funcs[0];
	  }

	  var last = funcs[funcs.length - 1];
	  var rest = funcs.slice(0, -1);
	  return function () {
	    return rest.reduceRight(function (composed, f) {
	      return f(composed);
	    }, last.apply(undefined, arguments));
	  };
	}

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports.wrapMapToPropsConstant = wrapMapToPropsConstant;
	exports.getDependsOnOwnProps = getDependsOnOwnProps;
	exports.wrapMapToPropsFunc = wrapMapToPropsFunc;

	var _verifyPlainObject = __webpack_require__(107);

	var _verifyPlainObject2 = _interopRequireDefault(_verifyPlainObject);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function wrapMapToPropsConstant(getConstant) {
	  return function initConstantSelector(dispatch, options) {
	    var constant = getConstant(dispatch, options);

	    function constantSelector() {
	      return constant;
	    }
	    constantSelector.dependsOnOwnProps = false;
	    return constantSelector;
	  };
	}

	// dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
	// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
	// whether mapToProps needs to be invoked when props have changed.
	// 
	// A length of one signals that mapToProps does not depend on props from the parent component.
	// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
	// therefore not reporting its length accurately..
	function getDependsOnOwnProps(mapToProps) {
	  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
	}

	// Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
	// this function wraps mapToProps in a proxy function which does several things:
	// 
	//  * Detects whether the mapToProps function being called depends on props, which
	//    is used by selectorFactory to decide if it should reinvoke on props changes.
	//    
	//  * On first call, handles mapToProps if returns another function, and treats that
	//    new function as the true mapToProps for subsequent calls.
	//    
	//  * On first call, verifies the first result is a plain object, in order to warn
	//    the developer that their mapToProps function is not returning a valid result.
	//    
	function wrapMapToPropsFunc(mapToProps, methodName) {
	  return function initProxySelector(dispatch, _ref) {
	    var displayName = _ref.displayName;

	    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
	      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
	    };

	    // allow detectFactoryAndVerify to get ownProps
	    proxy.dependsOnOwnProps = true;

	    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
	      proxy.mapToProps = mapToProps;
	      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
	      var props = proxy(stateOrDispatch, ownProps);

	      if (typeof props === 'function') {
	        proxy.mapToProps = props;
	        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
	        props = proxy(stateOrDispatch, ownProps);
	      }

	      if (process.env.NODE_ENV !== 'production') (0, _verifyPlainObject2.default)(props, displayName, methodName);

	      return props;
	    };

	    return proxy;
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = verifyPlainObject;

	var _isPlainObject = __webpack_require__(87);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _warning = __webpack_require__(77);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function verifyPlainObject(value, displayName, methodName) {
	  if (!(0, _isPlainObject2.default)(value)) {
	    (0, _warning2.default)(methodName + '() in ' + displayName + ' must return a plain object. Instead received ' + value + '.');
	  }
	}

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.whenMapStateToPropsIsFunction = whenMapStateToPropsIsFunction;
	exports.whenMapStateToPropsIsMissing = whenMapStateToPropsIsMissing;

	var _wrapMapToProps = __webpack_require__(106);

	function whenMapStateToPropsIsFunction(mapStateToProps) {
	  return typeof mapStateToProps === 'function' ? (0, _wrapMapToProps.wrapMapToPropsFunc)(mapStateToProps, 'mapStateToProps') : undefined;
	}

	function whenMapStateToPropsIsMissing(mapStateToProps) {
	  return !mapStateToProps ? (0, _wrapMapToProps.wrapMapToPropsConstant)(function () {
	    return {};
	  }) : undefined;
	}

	exports.default = [whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing];

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.defaultMergeProps = defaultMergeProps;
	exports.wrapMergePropsFunc = wrapMergePropsFunc;
	exports.whenMergePropsIsFunction = whenMergePropsIsFunction;
	exports.whenMergePropsIsOmitted = whenMergePropsIsOmitted;

	var _verifyPlainObject = __webpack_require__(107);

	var _verifyPlainObject2 = _interopRequireDefault(_verifyPlainObject);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function defaultMergeProps(stateProps, dispatchProps, ownProps) {
	  return _extends({}, ownProps, stateProps, dispatchProps);
	}

	function wrapMergePropsFunc(mergeProps) {
	  return function initMergePropsProxy(dispatch, _ref) {
	    var displayName = _ref.displayName,
	        pure = _ref.pure,
	        areMergedPropsEqual = _ref.areMergedPropsEqual;

	    var hasRunOnce = false;
	    var mergedProps = void 0;

	    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
	      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

	      if (hasRunOnce) {
	        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
	      } else {
	        hasRunOnce = true;
	        mergedProps = nextMergedProps;

	        if (process.env.NODE_ENV !== 'production') (0, _verifyPlainObject2.default)(mergedProps, displayName, 'mergeProps');
	      }

	      return mergedProps;
	    };
	  };
	}

	function whenMergePropsIsFunction(mergeProps) {
	  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
	}

	function whenMergePropsIsOmitted(mergeProps) {
	  return !mergeProps ? function () {
	    return defaultMergeProps;
	  } : undefined;
	}

	exports.default = [whenMergePropsIsFunction, whenMergePropsIsOmitted];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports.impureFinalPropsSelectorFactory = impureFinalPropsSelectorFactory;
	exports.pureFinalPropsSelectorFactory = pureFinalPropsSelectorFactory;
	exports.default = finalPropsSelectorFactory;

	var _verifySubselectors = __webpack_require__(111);

	var _verifySubselectors2 = _interopRequireDefault(_verifySubselectors);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
	  return function impureFinalPropsSelector(state, ownProps) {
	    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
	  };
	}

	function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
	  var areStatesEqual = _ref.areStatesEqual,
	      areOwnPropsEqual = _ref.areOwnPropsEqual,
	      areStatePropsEqual = _ref.areStatePropsEqual;

	  var hasRunAtLeastOnce = false;
	  var state = void 0;
	  var ownProps = void 0;
	  var stateProps = void 0;
	  var dispatchProps = void 0;
	  var mergedProps = void 0;

	  function handleFirstCall(firstState, firstOwnProps) {
	    state = firstState;
	    ownProps = firstOwnProps;
	    stateProps = mapStateToProps(state, ownProps);
	    dispatchProps = mapDispatchToProps(dispatch, ownProps);
	    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
	    hasRunAtLeastOnce = true;
	    return mergedProps;
	  }

	  function handleNewPropsAndNewState() {
	    stateProps = mapStateToProps(state, ownProps);

	    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);

	    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
	    return mergedProps;
	  }

	  function handleNewProps() {
	    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);

	    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);

	    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
	    return mergedProps;
	  }

	  function handleNewState() {
	    var nextStateProps = mapStateToProps(state, ownProps);
	    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
	    stateProps = nextStateProps;

	    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);

	    return mergedProps;
	  }

	  function handleSubsequentCalls(nextState, nextOwnProps) {
	    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
	    var stateChanged = !areStatesEqual(nextState, state);
	    state = nextState;
	    ownProps = nextOwnProps;

	    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
	    if (propsChanged) return handleNewProps();
	    if (stateChanged) return handleNewState();
	    return mergedProps;
	  }

	  return function pureFinalPropsSelector(nextState, nextOwnProps) {
	    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
	  };
	}

	// TODO: Add more comments

	// If pure is true, the selector returned by selectorFactory will memoize its results,
	// allowing connectAdvanced's shouldComponentUpdate to return false if final
	// props have not changed. If false, the selector will always return a new
	// object and shouldComponentUpdate will always return true.

	function finalPropsSelectorFactory(dispatch, _ref2) {
	  var initMapStateToProps = _ref2.initMapStateToProps,
	      initMapDispatchToProps = _ref2.initMapDispatchToProps,
	      initMergeProps = _ref2.initMergeProps,
	      options = _objectWithoutProperties(_ref2, ['initMapStateToProps', 'initMapDispatchToProps', 'initMergeProps']);

	  var mapStateToProps = initMapStateToProps(dispatch, options);
	  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
	  var mergeProps = initMergeProps(dispatch, options);

	  if (process.env.NODE_ENV !== 'production') {
	    (0, _verifySubselectors2.default)(mapStateToProps, mapDispatchToProps, mergeProps, options.displayName);
	  }

	  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;

	  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = verifySubselectors;

	var _warning = __webpack_require__(77);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function verify(selector, methodName, displayName) {
	  if (!selector) {
	    throw new Error('Unexpected value for ' + methodName + ' in ' + displayName + '.');
	  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
	    if (!selector.hasOwnProperty('dependsOnOwnProps')) {
	      (0, _warning2.default)('The selector for ' + methodName + ' of ' + displayName + ' did not specify a value for dependsOnOwnProps.');
	    }
	  }
	}

	function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
	  verify(mapStateToProps, 'mapStateToProps', displayName);
	  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
	  verify(mergeProps, 'mergeProps', displayName);
	}

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(5);

	var React = _interopRequireWildcard(_react);

	var _BaseComponent2 = __webpack_require__(69);

	var _VMenu = __webpack_require__(1);

	var _VMenu2 = _interopRequireDefault(_VMenu);

	var _reactAutobind = __webpack_require__(70);

	var _reactAutobind2 = _interopRequireDefault(_reactAutobind);

	var _reactDom = __webpack_require__(113);

	var ReactDOM = _interopRequireWildcard(_reactDom);

	var _General = __webpack_require__(68);

	var _VMenuLayer = __webpack_require__(72);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var VMenuStub = function (_BaseComponent) {
	    _inherits(VMenuStub, _BaseComponent);

	    function VMenuStub(props) {
	        _classCallCheck(this, VMenuStub);

	        var _this = _possibleConstructorReturn(this, (VMenuStub.__proto__ || Object.getPrototypeOf(VMenuStub)).call(this, props));

	        (0, _reactAutobind2.default)(_this);
	        _this.menuID = ++_VMenu2.default.lastID;
	        return _this;
	    }

	    _createClass(VMenuStub, [{
	        key: "ComponentDidMount",
	        value: function ComponentDidMount() {
	            var forFunc = this.props.for;

	            this.forDom = forFunc ? ReactDOM.findDOMNode(forFunc()) : ReactDOM.findDOMNode(this).parentElement;
	            this.forDom.addEventListener("contextmenu", this.OnContextMenu);
	            // early handler, so parent's hover isn't considered to be lost from mouse-down
	            //this.forDom.addEventListener("mousedown", this.OnMouseDown);
	            document.addEventListener("mousedown", this.OnGlobalMouseDown);
	            //this.PostRender();
	        }
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

	    }, {
	        key: "OnContextMenu",
	        value: function OnContextMenu(e) {
	            var pagePos = new _General.Vector2i(e.pageX, e.pageY);
	            var _props = this.props,
	                onBody = _props.onBody,
	                uiProps = _props.uiProps,
	                children = _props.children;

	            var posHoistElement = (0, _General.GetSelfAndParents)(this.forDom).find(function (a) {
	                return a.style.position != "static";
	            });
	            //var posFromPosHoistElement = pos.Minus(posHoistElement.position_Vector2i()).Plus(posHoistElement.contentOffset());
	            var posInPosHoistElement = pagePos.Minus((0, _General.GetOffset)(posHoistElement)).Minus((0, _General.GetContentOffset)(posHoistElement, true)).Plus((0, _General.GetScroll)(posHoistElement));
	            /*if (this.props.posOffset)
	                posFromPosHoistElement = posFromPosHoistElement.Plus(this.props.posOffset);*/
	            //this.setState({open: true, pos: posFromPosHoistElement});
	            //let uiProps = {...this.props, pos: pagePos} as VMenuUIProps;
	            var uiProps_final = Object.assign({}, uiProps, { pos: pagePos, menuID: this.menuID });
	            _VMenu2.default.menuChildren[this.menuID] = children; // store ui/children on static, since breaks in store
	            if (onBody) {
	                //store.dispatch(new ACTOpenVMenuSet(uiProps_final));
	                setTimeout(function () {
	                    return store.dispatch(new _VMenuLayer.ACTOpenVMenuSet(uiProps_final));
	                }); // wait a tiny bit, so OnGlobalMouseDown runs first
	            } else this.setState({ localOpenUIProps: uiProps_final });
	            return false;
	        }
	    }, {
	        key: "OnGlobalMouseDown",
	        value: function OnGlobalMouseDown(e) {
	            var onBody = this.props.onBody;

	            if (onBody) {
	                if (store.getState().vMenu.openMenuProps) store.dispatch(new _VMenuLayer.ACTOpenVMenuSet(null));
	            } else {
	                if (this.state.localOpenUIProps) this.setState({ localOpenUIProps: null });
	            }
	        }
	    }, {
	        key: "ComponentWillUnmount",
	        value: function ComponentWillUnmount() {
	            this.forDom.removeEventListener("contextmenu", this.OnContextMenu);
	            //this.forDom.removeEventListener("mousedown", this.OnMouseDown);
	            document.removeEventListener("mousedown", this.OnGlobalMouseDown);
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var localOpenUIProps = this.state.localOpenUIProps;

	            if (localOpenUIProps == null) return React.createElement("div", null);
	            return React.createElement(_VMenu.VMenuUI, Object.assign({}, localOpenUIProps));
	        }
	    }]);

	    return VMenuStub;
	}(_BaseComponent2.BaseComponent);

	exports.default = VMenuStub;

	VMenuStub.defaultProps = { onBody: true };

/***/ },
/* 113 */
/***/ function(module, exports) {

	module.exports = require("react-dom");

/***/ }
/******/ ])
});
;