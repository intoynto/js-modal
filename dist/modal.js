/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Modal.ts":
/*!**********************!*\
  !*** ./src/Modal.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var ops_1 = __webpack_require__(/*! ./ops */ "./src/ops.ts");

function reorderActiveElement() {
  var elsa = document.body.querySelectorAll('.' + ops_1.modalOverlayClassName);

  if (elsa.length > 0) {
    for (var i = 0; i < elsa.length - 1; i++) {
      elsa[i].classList.remove('active');
    }

    elsa[elsa.length - 1].classList.add('active');
  }
}

var Modal = /*#__PURE__*/function () {
  function Modal(props) {
    _classCallCheck(this, Modal);

    this.divOverlay_ = null;
    this.divModal_ = null;
    this.zIndex = 0;
    this.uid = '';
    this.createElements();
  }

  _createClass(Modal, [{
    key: "createElements",
    value: function createElements() {
      if (this.divModal_ || this.divOverlay_) return;
      (0, ops_1.zIndexNext)();
      this.zIndex = (0, ops_1.zIndexGet)();
      (0, ops_1.zIndexNext)();
      this.divOverlay_ = document.createElement('div');
      this.divOverlay_.className = ops_1.modalOverlayClassName;
      this.divOverlay_.style.zIndex = this.zIndex.toString();
      this.divModal_ = document.createElement('div');
      this.divModal_.className = ops_1.modalWindowClassName;
      this.divModal_.style.zIndex = (this.zIndex + 1).toString();
      document.body.appendChild(this.divOverlay_);
      document.body.appendChild(this.divModal_);
    }
  }, {
    key: "openRegiter",
    value: function openRegiter() {
      if (this.divOverlay_) this.divOverlay_.classList.add('open');

      if (this.divModal_) {
        this.divModal_.classList.add('open');
      }
    }
  }, {
    key: "openUnRegister",
    value: function openUnRegister() {
      if (this.divModal_) this.divModal_.classList.remove('open');
      if (this.divOverlay_) this.divOverlay_.classList.remove('open');
    }
  }, {
    key: "getDivOverlay",
    value: function getDivOverlay() {
      return this.divOverlay_;
    }
  }, {
    key: "getDivContent",
    value: function getDivContent() {
      return this.divModal_;
    }
  }, {
    key: "open",
    value: function open() {
      this.openRegiter();
      (0, ops_1.openBodyCheckRegister)();
      reorderActiveElement();
    }
  }, {
    key: "close",
    value: function close() {
      this.openUnRegister();
      (0, ops_1.openBodyCheckRegister)();
      reorderActiveElement();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var _a, _b;

      this.openUnRegister();
      (0, ops_1.openBodyCheckRegister)();

      if (this.divModal_) {
        (_a = this.divModal_.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(this.divModal_);
      }

      if (this.divOverlay_) {
        (_b = this.divOverlay_.parentNode) === null || _b === void 0 ? void 0 : _b.removeChild(this.divOverlay_);
      }

      reorderActiveElement();
    }
  }]);

  return Modal;
}();

exports["default"] = Modal;

/***/ }),

/***/ "./src/alert.ts":
/*!**********************!*\
  !*** ./src/alert.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.AlertExclam = exports.AlertError = exports.AlertWarn = exports.Alert = void 0;

var Modal_1 = __importDefault(__webpack_require__(/*! ./Modal */ "./src/Modal.ts"));

function toStr(val) {
  return val === null || val === undefined ? "" : val.toString();
}

function getArrayStringArgums(argums) {
  var list = [];

  if (argums && _typeof(argums) === "object") {
    for (var p in argums) {
      if (argums.hasOwnProperty(p)) {
        var val = argums[p];
        if (typeof val === "string") list.push(val);
      }
    }
  }

  return list;
}

function getArrayFuncArgums(argums) {
  var list = [];

  if (argums && _typeof(argums) === "object") {
    for (var p in argums) {
      if (argums.hasOwnProperty(p)) {
        var val = argums[p];
        if (typeof val === "function") list.push(val);
      }
    }
  }

  return list;
}

function alertFromObject(params) {
  params = params || {};
  var title = toStr(params.title);
  var message = toStr(params.message);

  if (!params.buttons) {
    params.buttons = [];
  }

  if (params.buttons.length < 1) {
    params.buttons.push({
      label: 'OK'
    });
  }

  var cModal = document.createElement('div');
  var cWrap = document.createElement('div');
  var cTitle = document.createElement('div');
  var cMessage = document.createElement('div');
  var cActions = document.createElement('div');
  cModal.className = 'modalAlert';
  cWrap.className = 'wrap';
  cTitle.className = 'windowTitle';
  cMessage.className = 'windowContent';
  cActions.className = 'windowAction';
  cTitle.innerHTML = title;
  cMessage.innerHTML = message;
  var modObj = new Modal_1["default"]({});

  var hButton = function hButton(label, clsN, index) {
    var but = document.createElement('button');
    but.innerHTML = label;
    but.className = toStr(clsN);
    but.addEventListener("click", function () {
      modObj.destroy();
      var func = params.buttons && Array.isArray(params.buttons) && params.buttons[index] && params.buttons[index].callback;
      if (func && typeof func === "function") func();
    });
    cActions.appendChild(but);
  };

  for (var i = 0; i < params.buttons.length; i++) {
    hButton(params.buttons[i].label, params.buttons[i].className, i);
  }

  cModal.appendChild(cWrap);
  cWrap.appendChild(cTitle);
  cWrap.appendChild(cMessage);
  cWrap.appendChild(cActions);
  var div = modObj.getDivContent();

  if (div) {
    div.appendChild(cModal);
  }

  return modObj;
}

function alertExplodeCalle() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var listStr = getArrayStringArgums(args);
  if (listStr.length < 1) return;
  var listFunc = getArrayFuncArgums(args);
  var title = listStr[0] || "";
  var message = listStr[1] || "";
  var buttonYes = toStr(listStr[2]);
  var buttonNo = toStr(listStr[3]);
  var funcYes = listFunc[0];
  var funcNo = listFunc[1];
  var buts = [];

  var pushLabel = function pushLabel(str, cb, classN) {
    if (toStr(str).length < 1) return;
    buts.push({
      label: str,
      callback: cb,
      className: classN
    });
  };

  if (buttonYes.length > 0 && buttonNo.length > 0) {
    pushLabel(buttonYes, listFunc[0], 'btn btn-primary');
    pushLabel(buttonNo, listFunc[1], 'btn btn-danger');
  } else {
    var strb = buttonYes.length > 0 ? buttonYes : buttonNo;
    var func = funcYes && typeof funcYes === "function" ? funcYes : funcNo;
    pushLabel(strb, func, 'btn btn-primary');
  }

  return {
    title: title,
    message: message,
    buttons: buts
  };
}

function alertFromCalle() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  var props = alertExplodeCalle.apply(null, args);

  if (props) {
    return alertFromObject(props);
  }
}

function focusChild(modObj) {
  if (!modObj) return;
  var div = modObj.getDivContent();
  if (!div) return;
  var el = div.getElementsByTagName('button');

  if (el) {
    el = el.length > 0 ? el[0] : el;
    if (el) el.focus();
  }
}

function goAlert() {
  for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    args[_key3] = arguments[_key3];
  }

  if (args.length < 1) return;
  var satu = args[0];
  var modObj;
  if (_typeof(satu) === "object") modObj = alertFromObject(satu);else modObj = alertFromCalle.apply(null, args);
  return modObj;
}

function Alert() {
  var modObj;

  for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    args[_key4] = arguments[_key4];
  }

  modObj = goAlert.apply(null, args);

  if (modObj) {
    setTimeout(function () {
      modObj.open();
      focusChild(modObj);
    }, 10);
  }
}

exports.Alert = Alert;

function AlertWarn() {
  var modObj;

  for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    args[_key5] = arguments[_key5];
  }

  modObj = goAlert.apply(null, args);

  if (modObj) {
    modObj.getDivContent().classList.add('warning');
    setTimeout(function () {
      modObj.open();
      focusChild(modObj);
    }, 10);
  }
}

exports.AlertWarn = AlertWarn;

function AlertError() {
  var modObj;

  for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    args[_key6] = arguments[_key6];
  }

  modObj = goAlert.apply(null, args);

  if (modObj) {
    modObj.getDivContent().classList.add('error');
    setTimeout(function () {
      modObj.open();
      focusChild(modObj);
    }, 10);
  }
}

exports.AlertError = AlertError;

function AlertExclam() {
  var modObj;

  for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
    args[_key7] = arguments[_key7];
  }

  if (args.length < 1) return;
  var props = args[0];

  if (_typeof(props) !== 'object') {
    props = alertExplodeCalle.apply(null, args);
  }

  if (_typeof(props) !== 'object') return;

  if (!props.message) {
    props.message = '';
  }

  var str = '<div style="display:flex; gap:2rem;">';
  str += "<div style=\"display:flex; align-items:start; justify-items:center\"><svg stroke=\"#B91C1C\" fill=\"#B91C1C\" stroke-width=\"0\" viewBox=\"0 0 16 16\" width=\"1em\" height=\"1em\" style=\"width:48px; height:auto; margin:0 auto;\">";
  str += "<path fill-rule=\"evenodd\" clip-rule=\"evendodd\" d=\"M7.938 2.016a.146.146 0 00-.054.057L1.027 13.74a.176.176 0 00-.002.183c.016.03.037.05.054.06.015.01.034.017.066.017h13.713a.12.12 0 00.066-.017.163.163 0 00.055-.06.176.176 0 00-.003-.183L8.12 2.073a.146.146 0 00-.054-.057A.13.13 0 008.002 2a.13.13 0 00-.064.016zm1.044-.45a1.13 1.13 0 00-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z\"></path>";
  str += "<path d=\"M7.002 12a1 1 0 112 0 1 1 0 01-2 0zM7.1 5.995a.905.905 0 111.8 0l-.35 3.507a.552.552 0 01-1.1 0L7.1 5.995z\"></path>";
  str += "</svg></div>";
  str += '<div>' + props.message + "</div>";
  str += "</div>";
  props.message = str;
  modObj = alertFromObject(props);

  if (modObj) {
    setTimeout(function () {
      modObj.open();
      focusChild(modObj);
    }, 10);
  }
}

exports.AlertExclam = AlertExclam;

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.LoadingOverlay = exports.AlertError = exports.Alert = exports.modal = void 0;

var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));

var react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ "react-dom"));

var Modal_1 = __importDefault(__webpack_require__(/*! ./Modal */ "./src/Modal.ts"));

var alert_1 = __webpack_require__(/*! ./alert */ "./src/alert.ts");

Object.defineProperty(exports, "Alert", ({
  enumerable: true,
  get: function get() {
    return alert_1.Alert;
  }
}));
Object.defineProperty(exports, "AlertError", ({
  enumerable: true,
  get: function get() {
    return alert_1.AlertError;
  }
}));

var loadingOverlay_1 = __webpack_require__(/*! ./loadingOverlay */ "./src/loadingOverlay.ts");

Object.defineProperty(exports, "LoadingOverlay", ({
  enumerable: true,
  get: function get() {
    return loadingOverlay_1.LoadingOverlay;
  }
}));

function focusFirstChild(div) {
  var io = false;
  if (!io) return;
  var qInput = 'input:not([type="hidden"]):not([style*="display:none"])';
  var qButton = 'button:not([type="hidden"]):not([style*="display:none"])';
  var elsa = div.querySelector(qInput);

  if (elsa) {
    elsa.focus();
    return;
  }

  elsa = div.querySelector(qButton);

  if (elsa) {
    elsa.focus();
  }
}

function modal(props) {
  if (!props.component) return;
  var m = new Modal_1["default"]({});
  var div = m.getDivContent();
  if (!div) return;
  div.classList.add('modalOverlayForm');

  var onClose = function onClose(e) {
    if (e) e.preventDefault();
    var po = props.props || {};

    if (po && po.onClose && typeof po.onClose === "function") {
      try {
        po.onClose();
      } catch (error) {}
    }

    react_dom_1["default"].unmountComponentAtNode(div);
    m.destroy();
  };

  var Comp = props.component;
  react_dom_1["default"].render(react_1["default"].createElement(Comp, Object.assign({}, props.props, {
    onClose: onClose
  })), div, function () {
    m.open();
    focusFirstChild(div);
  });
}

exports.modal = modal;

/***/ }),

/***/ "./src/loadingOverlay.ts":
/*!*******************************!*\
  !*** ./src/loadingOverlay.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.LoadingOverlay = exports.overlayLoadingClass = void 0;

var ops_1 = __webpack_require__(/*! ./ops */ "./src/ops.ts");

var localIdOverlay = 0;
exports.overlayLoadingClass = "loadingContainer";

function toStr(val) {
  return val === null || val === undefined ? "" : val.toString();
}

function svgIng(element) {
  var wh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;
  var fillColor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '#007BFF';
  var widthHeight = wh || 50;
  var viewBox = "0 0 " + widthHeight + " " + widthHeight;
  var fill = fillColor || '#007BFF';
  var svg = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"" + widthHeight + "\" height=\"" + widthHeight + "\" viewBox=\"" + viewBox + "\">\n                <path fill=\"" + fill + "\" d=\"M25,5A20.14,20.14,0,0,1,45,22.88a2.51,2.51,0,0,0,2.49,2.26h0A2.52,2.52,0,0,0,50,22.33a25.14,25.14,0,0,0-50,0,2.52,2.52,0,0,0,2.5,2.81h0A2.51,2.51,0,0,0,5,22.88,20.14,20.14,0,0,1,25,5Z\">\n                    <animateTransform attributeName=\"transform\" type=\"rotate\" from=\"0 25 25\" to=\"360 25 25\" dur=\"0.5s\" repeatCount=\"indefinite\" />\n                </path>\n               svg>";
  element.innerHTML = svg;
}

function elementsCreate() {
  localIdOverlay++;
  var id = localIdOverlay;
  this.div_ = document.createElement('div');
  this.div_.id = exports.overlayLoadingClass + id;
  this.div_.className = exports.overlayLoadingClass;
  this.wrapper_ = document.createElement("div");
  this.wrapper_.className = 'wrapper';
  this.image_ = document.createElement('div');
  this.image_.className = 'image';
  svgIng(this.image_);
  this.wrapper_.appendChild(this.image_);
  this.div_.appendChild(this.wrapper_);
  document.body.appendChild(this.div_);
}

var defaultOps = {
  clickClose: true,
  text: 'Loading,..'
};

var LoadingOverlay = /*#__PURE__*/function () {
  function LoadingOverlay(props) {
    _classCallCheck(this, LoadingOverlay);

    this._ops = Object.assign(Object.assign({}, defaultOps), props);
    this.applyText = this.applyText.bind(this);
    this.divClicked = this.divClicked.bind(this);
    (0, ops_1.zIndexNext)();
    this.zIndex = (0, ops_1.zIndexGet)();
  }

  _createClass(LoadingOverlay, [{
    key: "divClicked",
    value: function divClicked(e) {
      if (e) {
        e.preventDefault();
      }

      if (typeof this._ops.onClick === "function") {
        try {
          this._ops.onClick(e);
        } catch (error) {}
      }

      var clickClose = true;

      if (this._ops.clickClose !== undefined) {
        clickClose = this._ops.clickClose;
      }

      if (clickClose) {
        this.close();
        this.destroy();
      }
    }
  }, {
    key: "applyText",
    value: function applyText() {
      var _a, _b;

      if (!this.div_) return;
      var text = toStr(this._ops.text);

      if (text.length > 0) {
        if (!this.text_) {
          this.text_ = document.createElement('div');
          (_a = this.wrapper_) === null || _a === void 0 ? void 0 : _a.appendChild(this.text_);
        }

        this.text_.className = 'text';
        this.text_.innerHTML = text;
      } else {
        if (this.text_) {
          (_b = this.text_.parentNode) === null || _b === void 0 ? void 0 : _b.removeChild(this.text_);
          this.text_ = undefined;
        }
      }
    }
  }, {
    key: "open",
    value: function open() {
      if (!this.div_) {
        elementsCreate.call(this);

        if (this.div_) {
          this.div_.addEventListener("click", this.divClicked);
        }
      }

      if (this.div_) {
        this.applyText();
        this.div_.classList.add('open');
        this.div_.style.zIndex = this.zIndex.toString();
      }
    }
  }, {
    key: "close",
    value: function close() {
      if (!this.div_) return;
      this.div_.classList.remove('open');
      this.div_.style.zIndex = "";
    }
  }, {
    key: "setText",
    value: function setText(text) {
      this._ops.text = text;
      this.applyText();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var _a, _b, _c, _d;

      if (this.text_) {
        (_a = this.text_.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(this.text_);
        this.text_ = undefined;
      }

      if (this.image_) {
        (_b = this.image_.parentNode) === null || _b === void 0 ? void 0 : _b.removeChild(this.image_);
        this.image_ = undefined;
      }

      if (this.wrapper_) {
        (_c = this.wrapper_.parentNode) === null || _c === void 0 ? void 0 : _c.removeChild(this.wrapper_);
        this.wrapper_ = undefined;
      }

      if (this.div_) {
        "                                                                                                               ";
        (_d = this.div_.parentNode) === null || _d === void 0 ? void 0 : _d.removeChild(this.div_);
        this.div_ = undefined;
      }
    }
  }]);

  return LoadingOverlay;
}();

exports.LoadingOverlay = LoadingOverlay;

/***/ }),

/***/ "./src/ops.ts":
/*!********************!*\
  !*** ./src/ops.ts ***!
  \********************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.openBodyCheckRegister = exports.hasClass = exports.modalBodyClassName = exports.modalWindowClassName = exports.modalOverlayClassName = exports.zIndexGet = exports.zIndexPrev = exports.zIndexNext = void 0;
var localStartZIndex = 9999;
var localZIndex = 9999;
var localDivCount = 0;
var localOpen = 0;

function divCountNext() {
  localDivCount++;
}

function divCountPrev() {
  localDivCount--;
}

function zIndexNext() {
  localZIndex++;
}

exports.zIndexNext = zIndexNext;

function zIndexPrev() {
  localZIndex--;
}

exports.zIndexPrev = zIndexPrev;

function zIndexGet() {
  return localZIndex;
}

exports.zIndexGet = zIndexGet;
exports.modalOverlayClassName = "modalOverlay";
exports.modalWindowClassName = "modalContainer";
exports.modalBodyClassName = "modalEnabled";

function hasClass(element, className) {
  return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
}

exports.hasClass = hasClass;

function openBodyCheckRegister() {
  var elsa = document.querySelectorAll(".".concat(exports.modalOverlayClassName, ".open"));

  if (elsa.length > 0) {
    document.body.classList.add(exports.modalBodyClassName);
    return;
  }

  document.body.classList.remove(exports.modalBodyClassName);
}

exports.openBodyCheckRegister = openBodyCheckRegister;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = react;

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

module.exports = react-dom;

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.tsx");
/******/ 	
/******/ })()
;
//# sourceMappingURL=modal.js.map