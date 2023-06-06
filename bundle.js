/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Roboto-Regular.ttf */ "./src/Roboto-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'Roboto';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n:root {\n    font-size: 18px;\n    font-family: 'Roboto', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\nhtml, body {\n    height: 100%;\n}\n\n.container {\n    position: relative;\n    height: 100%;\n    display: grid;\n    grid-template: 76px 1fr / 250px 1fr;\n}\n\nheader {\n    grid-column: 1 / 3;\n\n    padding: 20px;\n    background-color: #00afef;\n    color: #ffffff;\n}\n\n.sidebar {\n    padding: 20px;\n    background-color: #009fdf;\n    color: #ffffff;\n    box-shadow: inset 0 2px 5px gray;\n}\n\nul {\n    list-style: none;\n}\n\n.project-list {\n    max-height: 290px;\n    overflow-y: auto;\n}\n\n.project {\n    cursor: pointer;\n\n    margin: 6px 2px;\n    padding: 5px;\n    height: 30px;\n    width: 200px;\n    background-color: #008fcf;\n    font-weight: 600;\n    border-radius: 5px;\n    transition: all 100ms ease-in-out;\n\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.project:hover {\n    box-shadow: 0 0 5px #ffffff;\n}\n\n.selected {\n    background-color: #007fbf;\n}\n\n.project-delete, .todo-delete {\n    cursor: pointer;\n    height: 25px;\n    width: 25px;\n    background-color: inherit;\n    color: #ffffff;\n    font-size: 1rem;\n    font-weight: bold;\n    border: none;\n    border-radius: 5px;\n}\n\n.project-delete:hover {\n    background-color: #10a4da;\n} \n\n.todo-delete:hover {\n    background-color: #008fcf;\n}\n\n.new-project, .add-todo {\n    cursor: pointer;\n    margin: 15px 2px;\n    height: 36px;\n    width: 145px;\n    background-color: #008fcf;\n    color: #ffffff;\n    font-size: 1rem;\n    border: none;\n    border-radius: 10px;\n    transition: all 100ms ease-in-out;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.new-project:hover {\n    box-shadow: 0 0 5px #ffffff;\n}\n\n.new-project:active, .add-todo:active {\n    background-color: #005f9f;\n}\n\n.current-project {\n    padding: 20px;\n    background-color: #ddf1fa;\n    box-shadow: inset 2px 2px 5px gray;\n}\n\n.project-info {\n    padding: 5px;\n\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.add-todo:hover {\n    box-shadow: 0 0 5px #aaaaaa;\n}\n\nhr {\n    margin-bottom: 30px;\n}\n\n.todo {\n    cursor: pointer;\n    margin: 5px;\n    padding: 5px 10px;\n    width: fit-content;\n    background-color: #cde1fa;\n    border-radius: 5px;\n    transition: all 100ms ease-in-out;\n\n    display: grid;\n    grid-template-columns: 25px 600px 100px 150px 25px;\n    align-items: center;\n    gap: 15px;\n}\n\n.todo:hover {\n    background-color: #bdd6f5;\n}\n\n.check {\n    height: 25px;\n    width: 25px;\n    border: none;\n    border-radius: 5px;\n    transition: all 100ms ease-in-out;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.unchecked {\n    background-color: #ffffff;\n}\n\n.unchecked:hover {\n    background-color: #eeeeee;\n}\n\n.checked {\n    background-color: #00afef;\n    color: #ffffff;\n    font-size: 1rem;\n    font-weight: bold;\n}\n\n.checked:hover {\n    background-color: #10bfff;\n}\n\n.priority-container {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n}\n\n.priority {\n    height: 25px;\n    width: 25px;\n    border-radius: 5px;\n}\n\n.priority-container .low {\n    background-color: limegreen;\n}\n\n.priority-container .medium {\n    background-color: yellow;\n}\n\n.priority-container .high {\n    background-color: red;\n}\n\n.date {\n    height: 25px;\n    border: none;\n    background-color: #accbf0;\n    text-align: center;\n    font-size: 1rem;\n    border-radius: 5px;\n    outline: none;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n\n.description {\n    grid-column: 1 / 3;\n    max-width: 625px;\n    word-break: break-all;\n}\n\n.notes {\n    grid-column: 3 / 6;\n    max-width: 275px;\n    word-break: break-all;\n}\n\n.hide {\n    display: none;\n}\n\n.modal-container {\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    background-color: rgba(0, 0, 0, .7);\n    \n    display: none;\n    justify-content: center;\n    align-items: center;\n}\n\n.modal {\n    padding: 20px;\n    background-color: #007fbf;\n    color: #ffffff;\n    border-radius: 15px;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.form-project {\n    display: none;\n}\n\n.field {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n\nlabel {\n    font-weight: bold;\n}\n\n.field input[type=\"text\"] {\n    padding: 0 5px;\n    height: 1.5rem;\n    font-size: 1rem;\n    border: none;\n    border-radius: 5px;\n}\n\n.form-project input {\n    width: 300px;\n}\n\n.form-buttons {\n    margin-top: 20px;\n    transition: all 100ms ease-in-out;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.form-buttons button{\n    cursor: pointer;\n    height: 1.5rem;\n    width: 144px;\n    font-size: 1rem;\n    border: none;\n    border-radius: 5px;\n}\n\n.confirm {\n    background-color: lightgreen;\n}\n\n.confirm:hover {\n    background-color: rgb(112, 211, 112);\n}\n\n.cancel {\n    background-color: rgb(233, 95, 95);\n}\n\n.cancel:hover {\n    background-color: rgb(204, 72, 72);\n}\n\n.form-todo {\n    display: none;\n}\n\n.form-todo input[type=\"text\"] {\n    width: 500px;\n}\n\ntextarea {\n    padding: 5px;\n    font-size: 1rem;\n    border-radius: 5px;\n    resize: none\n}\n\n.field-group {\n    display: flex;\n    justify-content: space-between;\n}\n\n.field-group .field {\n    width: 45%;\n}\n\n#todo-date, select {\n    height: 1.5rem;\n    font-size: 1rem;\n    border: none;\n    border-radius: 5px;\n}\n\n.error {\n    display: none;\n    font-weight: bold;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: 'Roboto';\n    src: url('./Roboto-Regular.ttf');\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n:root {\n    font-size: 18px;\n    font-family: 'Roboto', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\nhtml, body {\n    height: 100%;\n}\n\n.container {\n    position: relative;\n    height: 100%;\n    display: grid;\n    grid-template: 76px 1fr / 250px 1fr;\n}\n\nheader {\n    grid-column: 1 / 3;\n\n    padding: 20px;\n    background-color: #00afef;\n    color: #ffffff;\n}\n\n.sidebar {\n    padding: 20px;\n    background-color: #009fdf;\n    color: #ffffff;\n    box-shadow: inset 0 2px 5px gray;\n}\n\nul {\n    list-style: none;\n}\n\n.project-list {\n    max-height: 290px;\n    overflow-y: auto;\n}\n\n.project {\n    cursor: pointer;\n\n    margin: 6px 2px;\n    padding: 5px;\n    height: 30px;\n    width: 200px;\n    background-color: #008fcf;\n    font-weight: 600;\n    border-radius: 5px;\n    transition: all 100ms ease-in-out;\n\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.project:hover {\n    box-shadow: 0 0 5px #ffffff;\n}\n\n.selected {\n    background-color: #007fbf;\n}\n\n.project-delete, .todo-delete {\n    cursor: pointer;\n    height: 25px;\n    width: 25px;\n    background-color: inherit;\n    color: #ffffff;\n    font-size: 1rem;\n    font-weight: bold;\n    border: none;\n    border-radius: 5px;\n}\n\n.project-delete:hover {\n    background-color: #10a4da;\n} \n\n.todo-delete:hover {\n    background-color: #008fcf;\n}\n\n.new-project, .add-todo {\n    cursor: pointer;\n    margin: 15px 2px;\n    height: 36px;\n    width: 145px;\n    background-color: #008fcf;\n    color: #ffffff;\n    font-size: 1rem;\n    border: none;\n    border-radius: 10px;\n    transition: all 100ms ease-in-out;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.new-project:hover {\n    box-shadow: 0 0 5px #ffffff;\n}\n\n.new-project:active, .add-todo:active {\n    background-color: #005f9f;\n}\n\n.current-project {\n    padding: 20px;\n    background-color: #ddf1fa;\n    box-shadow: inset 2px 2px 5px gray;\n}\n\n.project-info {\n    padding: 5px;\n\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.add-todo:hover {\n    box-shadow: 0 0 5px #aaaaaa;\n}\n\nhr {\n    margin-bottom: 30px;\n}\n\n.todo {\n    cursor: pointer;\n    margin: 5px;\n    padding: 5px 10px;\n    width: fit-content;\n    background-color: #cde1fa;\n    border-radius: 5px;\n    transition: all 100ms ease-in-out;\n\n    display: grid;\n    grid-template-columns: 25px 600px 100px 150px 25px;\n    align-items: center;\n    gap: 15px;\n}\n\n.todo:hover {\n    background-color: #bdd6f5;\n}\n\n.check {\n    height: 25px;\n    width: 25px;\n    border: none;\n    border-radius: 5px;\n    transition: all 100ms ease-in-out;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.unchecked {\n    background-color: #ffffff;\n}\n\n.unchecked:hover {\n    background-color: #eeeeee;\n}\n\n.checked {\n    background-color: #00afef;\n    color: #ffffff;\n    font-size: 1rem;\n    font-weight: bold;\n}\n\n.checked:hover {\n    background-color: #10bfff;\n}\n\n.priority-container {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n}\n\n.priority {\n    height: 25px;\n    width: 25px;\n    border-radius: 5px;\n}\n\n.priority-container .low {\n    background-color: limegreen;\n}\n\n.priority-container .medium {\n    background-color: yellow;\n}\n\n.priority-container .high {\n    background-color: red;\n}\n\n.date {\n    height: 25px;\n    border: none;\n    background-color: #accbf0;\n    text-align: center;\n    font-size: 1rem;\n    border-radius: 5px;\n    outline: none;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n\n.description {\n    grid-column: 1 / 3;\n    max-width: 625px;\n    word-break: break-all;\n}\n\n.notes {\n    grid-column: 3 / 6;\n    max-width: 275px;\n    word-break: break-all;\n}\n\n.hide {\n    display: none;\n}\n\n.modal-container {\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    background-color: rgba(0, 0, 0, .7);\n    \n    display: none;\n    justify-content: center;\n    align-items: center;\n}\n\n.modal {\n    padding: 20px;\n    background-color: #007fbf;\n    color: #ffffff;\n    border-radius: 15px;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.form-project {\n    display: none;\n}\n\n.field {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n\nlabel {\n    font-weight: bold;\n}\n\n.field input[type=\"text\"] {\n    padding: 0 5px;\n    height: 1.5rem;\n    font-size: 1rem;\n    border: none;\n    border-radius: 5px;\n}\n\n.form-project input {\n    width: 300px;\n}\n\n.form-buttons {\n    margin-top: 20px;\n    transition: all 100ms ease-in-out;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.form-buttons button{\n    cursor: pointer;\n    height: 1.5rem;\n    width: 144px;\n    font-size: 1rem;\n    border: none;\n    border-radius: 5px;\n}\n\n.confirm {\n    background-color: lightgreen;\n}\n\n.confirm:hover {\n    background-color: rgb(112, 211, 112);\n}\n\n.cancel {\n    background-color: rgb(233, 95, 95);\n}\n\n.cancel:hover {\n    background-color: rgb(204, 72, 72);\n}\n\n.form-todo {\n    display: none;\n}\n\n.form-todo input[type=\"text\"] {\n    width: 500px;\n}\n\ntextarea {\n    padding: 5px;\n    font-size: 1rem;\n    border-radius: 5px;\n    resize: none\n}\n\n.field-group {\n    display: flex;\n    justify-content: space-between;\n}\n\n.field-group .field {\n    width: 45%;\n}\n\n#todo-date, select {\n    height: 1.5rem;\n    font-size: 1rem;\n    border: none;\n    border-radius: 5px;\n}\n\n.error {\n    display: none;\n    font-weight: bold;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Todo = (() => {
  const _projects = {
    default: [
      {
        name: 'default',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde eius totam architecto ex quas vitae animi nam, omnis eum vero cum libero earum laudantium exercitationem temporibus consectetur nobis. Laudantium, totam.',
        dueDate: '2023-06-04',
        priority: 'low',
        notes: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam alias tempora modi!',
      },
    ],
  };

  function createProject(name) {
    _projects[name] = [];
  }

  function getProjectNames() {
    return Object.keys(_projects);
  }

  function deleteProject(project) {
    delete _projects[project];
  }

  function _createTodo(name, description, dueDate, priority, notes) {
    return {
      name,
      description,
      dueDate,
      priority,
      notes,
      check: false,
    };
  }

  function addTodo(project, name, description, dueDate, priority, notes) {
    const todo = _createTodo(name, description, dueDate, priority, notes);
    _projects[project].push(todo);
  }

  function getTodos(project) {
    return _projects[project];
  }

  function checkTodo(project, index) {
    const todo = _projects[project][index];
    todo.check = !todo.check;
  }

  function deleteTodo(project, index) {
    _projects[project].splice(index, 1);
  }

  return {
    createProject,
    getProjectNames,
    deleteProject,
    addTodo,
    getTodos,
    checkTodo,
    deleteTodo,
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);


/***/ }),

/***/ "./src/Roboto-Regular.ttf":
/*!********************************!*\
  !*** ./src/Roboto-Regular.ttf ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fc2b5060f7accec5cf74.ttf";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ "./src/todo.js");



const Dom = (() => {
  const _projectSelectArray = _todo__WEBPACK_IMPORTED_MODULE_1__["default"].getProjectNames().map((e, i) => i === 0);

  function _createProjectLi(name, index) {
    const li = document.createElement('li');
    li.classList.add('project');
    li.addEventListener('click', () => {
      document.querySelectorAll('.project').forEach((e) => { e.classList.remove('selected'); });
      li.classList.add('selected');
      _projectSelectArray.forEach((e, i, a) => { a[i] = i === index; });
      Dom.reloadTodoList(name);
    });

    const p = document.createElement('p');
    p.textContent = name;
    li.appendChild(p);

    const button = document.createElement('button');
    button.classList.add('project-delete');
    button.textContent = 'X';
    button.addEventListener('click', (ev) => {
      ev.stopPropagation();
      if (li.classList.contains('selected') && _projectSelectArray.length > 1) {
        if (index === 0) {
          _projectSelectArray[index + 1] = true;
        } else {
          _projectSelectArray[index - 1] = true;
        }
      }
      _projectSelectArray.splice(index, 1);
      _todo__WEBPACK_IMPORTED_MODULE_1__["default"].deleteProject(name);
      Dom.reloadProjectList();
      if (_projectSelectArray.length > 0) {
        Dom.reloadTodoList(document.querySelector('.selected p').textContent);
      } else {
        Dom.reloadTodoList('');
      }
    });
    li.appendChild(button);

    return li;
  }

  function _createTodoLi(todo, project, index) {
    const li = document.createElement('li');
    li.classList.add('todo');

    const checkButton = document.createElement('button');
    checkButton.classList.add('check');
    checkButton.classList.add(todo.check ? 'checked' : 'unchecked');
    if (todo.check) checkButton.textContent = '\uD83D';
    checkButton.addEventListener('click', (e) => {
      e.stopPropagation();
      _todo__WEBPACK_IMPORTED_MODULE_1__["default"].checkTodo(project, index);
      checkButton.classList.toggle('checked');
      checkButton.classList.toggle('unchecked');
      checkButton.textContent = checkButton.textContent === '' ? '\u2713' : '';
    });
    li.appendChild(checkButton);

    const todoName = document.createElement('p');
    todoName.classList.add('todo-name');
    todoName.textContent = todo.name;
    li.appendChild(todoName);

    const priorityContainer = document.createElement('div');
    priorityContainer.classList.add('priority-container');
    const p = document.createElement('p');
    p.textContent = 'Priority: ';
    priorityContainer.appendChild(p);
    const priority = document.createElement('div');
    priority.classList.add('priority');
    priority.classList.add(todo.priority);
    priorityContainer.appendChild(priority);
    li.appendChild(priorityContainer);

    const dueDate = document.createElement('input');
    dueDate.classList.add('date');
    dueDate.type = 'date';
    dueDate.readOnly = true;
    dueDate.value = todo.dueDate;
    li.appendChild(dueDate);

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('todo-delete');
    deleteButton.textContent = 'X';
    deleteButton.addEventListener('click', (e) => {
      e.stopPropagation();
      _todo__WEBPACK_IMPORTED_MODULE_1__["default"].deleteTodo(project, index);
      Dom.reloadTodoList(project);
    });
    li.appendChild(deleteButton);

    const description = document.createElement('div');
    description.classList.add('description');
    description.classList.add('hide');
    const descriptionTitle = document.createElement('p');
    descriptionTitle.textContent = 'Description:';
    description.appendChild(descriptionTitle);
    const descriptionText = document.createElement('p');
    descriptionText.textContent = todo.description;
    description.appendChild(descriptionText);
    li.appendChild(description);

    const notes = document.createElement('div');
    notes.classList.add('notes');
    notes.classList.add('hide');
    const notesTitle = document.createElement('p');
    notesTitle.textContent = 'Notes:';
    notes.appendChild(notesTitle);
    const notesText = document.createElement('p');
    notesText.textContent = todo.notes;
    notes.appendChild(notesText);
    li.appendChild(notes);

    li.addEventListener('click', () => {
      description.classList.toggle('hide');
      notes.classList.toggle('hide');
    });

    return li;
  }

  function reloadProjectList() {
    const projectList = document.querySelector('.project-list');
    projectList.textContent = '';
    const projectNames = _todo__WEBPACK_IMPORTED_MODULE_1__["default"].getProjectNames();
    if (projectNames.length > _projectSelectArray.length) {
      _projectSelectArray.push(true);
      _projectSelectArray.forEach((e, i, a) => { a[i] = i === projectNames.length - 1; });
    }
    for (let i = 0; i < projectNames.length; i++) {
      const li = _createProjectLi(projectNames[i], i);
      if (_projectSelectArray[i]) {
        li.classList.add('selected');
      }
      projectList.appendChild(li);
    }
  }

  function closeModal() {
    document.querySelector('.modal-container').style.display = 'none';
    document.querySelectorAll('.modal').forEach((n) => { n.style.display = 'none'; });
  }

  function reloadTodoList(project) {
    document.querySelector('.current-project-name').textContent = project;
    const todoListElement = document.querySelector('.todo-list');
    todoListElement.textContent = '';
    const todoList = _todo__WEBPACK_IMPORTED_MODULE_1__["default"].getProjectNames().includes(project) ? _todo__WEBPACK_IMPORTED_MODULE_1__["default"].getTodos(project) : [];
    for (let i = 0; i < todoList.length; i++) {
      const li = _createTodoLi(todoList[i], project, i);
      todoListElement.appendChild(li);
    }
  }

  return { reloadProjectList, reloadTodoList, closeModal };
})();

Dom.reloadProjectList();
Dom.reloadTodoList(document.querySelector('.selected p').textContent);

document.querySelector('.new-project').addEventListener('click', () => {
  document.querySelector('.modal-container').style.display = 'flex';
  document.querySelector('.form-project').style.display = 'flex';
  document.querySelector('#project-name').focus();
});

document.querySelector('.add-todo').addEventListener('click', () => {
  document.querySelector('.modal-container').style.display = 'flex';
  document.querySelector('.form-todo').style.display = 'flex';
  document.querySelector('#todo-name').focus();
});

document.querySelectorAll('.cancel').forEach((e) => e.addEventListener('click', Dom.closeModal));

document.querySelector('.form-project').addEventListener('submit', (e) => {
  e.preventDefault();
  const nameInput = document.querySelector('#project-name');
  const newName = nameInput.value;
  if (_todo__WEBPACK_IMPORTED_MODULE_1__["default"].getProjectNames().includes(newName)) {
    document.querySelector('.form-project .error').style.display = 'block';
  } else {
    nameInput.value = '';
    _todo__WEBPACK_IMPORTED_MODULE_1__["default"].createProject(newName);
    Dom.reloadProjectList();
    Dom.reloadTodoList(newName);
    Dom.closeModal();
  }
});

document.querySelector('.form-todo').addEventListener('submit', (e) => {
  e.preventDefault();
  const project = document.querySelector('.current-project-name').textContent;
  const nameInput = document.querySelector('#todo-name');
  const name = nameInput.value;
  const descriptionInput = document.querySelector('#todo-description');
  const description = descriptionInput.value;
  const dateInput = document.querySelector('#todo-date');
  const date = dateInput.value;
  const priority = document.querySelector('#todo-priority').value;
  const notesInput = document.querySelector('#todo-notes');
  const notes = notesInput.value;
  _todo__WEBPACK_IMPORTED_MODULE_1__["default"].addTodo(project, name, description, date, priority, notes);
  nameInput.value = '';
  descriptionInput.value = '';
  dateInput.value = '';
  notesInput.value = '';
  Dom.reloadTodoList(project);
  Dom.closeModal();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxxREFBWTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL1JvYm90by1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxufVxcblxcbmh0bWwsIGJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogNzZweCAxZnIgLyAyNTBweCAxZnI7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG5cXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYWZlZjtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOWZkZjtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMnB4IDVweCBncmF5O1xcbn1cXG5cXG51bCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5wcm9qZWN0LWxpc3Qge1xcbiAgICBtYXgtaGVpZ2h0OiAyOTBweDtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgIG1hcmdpbjogNnB4IDJweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOGZjZjtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMTAwbXMgZWFzZS1pbi1vdXQ7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3Q6aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4ICNmZmZmZmY7XFxufVxcblxcbi5zZWxlY3RlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdmYmY7XFxufVxcblxcbi5wcm9qZWN0LWRlbGV0ZSwgLnRvZG8tZGVsZXRlIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5wcm9qZWN0LWRlbGV0ZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMGE0ZGE7XFxufSBcXG5cXG4udG9kby1kZWxldGU6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4ZmNmO1xcbn1cXG5cXG4ubmV3LXByb2plY3QsIC5hZGQtdG9kbyB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgbWFyZ2luOiAxNXB4IDJweDtcXG4gICAgaGVpZ2h0OiAzNnB4O1xcbiAgICB3aWR0aDogMTQ1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDhmY2Y7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDEwMG1zIGVhc2UtaW4tb3V0O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm5ldy1wcm9qZWN0OmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCAjZmZmZmZmO1xcbn1cXG5cXG4ubmV3LXByb2plY3Q6YWN0aXZlLCAuYWRkLXRvZG86YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNWY5ZjtcXG59XFxuXFxuLmN1cnJlbnQtcHJvamVjdCB7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGYxZmE7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDJweCAycHggNXB4IGdyYXk7XFxufVxcblxcbi5wcm9qZWN0LWluZm8ge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmFkZC10b2RvOmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCAjYWFhYWFhO1xcbn1cXG5cXG5ociB7XFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcblxcbi50b2RvIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBtYXJnaW46IDVweDtcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NkZTFmYTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMTAwbXMgZWFzZS1pbi1vdXQ7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjVweCA2MDBweCAxMDBweCAxNTBweCAyNXB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcbi50b2RvOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JkZDZmNTtcXG59XFxuXFxuLmNoZWNrIHtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHRyYW5zaXRpb246IGFsbCAxMDBtcyBlYXNlLWluLW91dDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi51bmNoZWNrZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG4udW5jaGVja2VkOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcXG59XFxuXFxuLmNoZWNrZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhZmVmO1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmNoZWNrZWQ6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTBiZmZmO1xcbn1cXG5cXG4ucHJpb3JpdHktY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi5wcmlvcml0eSB7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnByaW9yaXR5LWNvbnRhaW5lciAubG93IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGltZWdyZWVuO1xcbn1cXG5cXG4ucHJpb3JpdHktY29udGFpbmVyIC5tZWRpdW0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxufVxcblxcbi5wcmlvcml0eS1jb250YWluZXIgLmhpZ2gge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5kYXRlIHtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhY2NiZjA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5cXG4uZGVzY3JpcHRpb24ge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgIG1heC13aWR0aDogNjI1cHg7XFxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG59XFxuXFxuLm5vdGVzIHtcXG4gICAgZ3JpZC1jb2x1bW46IDMgLyA2O1xcbiAgICBtYXgtd2lkdGg6IDI3NXB4O1xcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxufVxcblxcbi5oaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm1vZGFsLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuNyk7XFxuICAgIFxcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1vZGFsIHtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2ZiZjtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmZvcm0tcHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5maWVsZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG5sYWJlbCB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uZmllbGQgaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG4gICAgcGFkZGluZzogMCA1cHg7XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uZm9ybS1wcm9qZWN0IGlucHV0IHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbn1cXG5cXG4uZm9ybS1idXR0b25zIHtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDEwMG1zIGVhc2UtaW4tb3V0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mb3JtLWJ1dHRvbnMgYnV0dG9ue1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICB3aWR0aDogMTQ0cHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5jb25maXJtIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcXG59XFxuXFxuLmNvbmZpcm06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTEyLCAyMTEsIDExMik7XFxufVxcblxcbi5jYW5jZWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMzLCA5NSwgOTUpO1xcbn1cXG5cXG4uY2FuY2VsOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNCwgNzIsIDcyKTtcXG59XFxuXFxuLmZvcm0tdG9kbyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5mb3JtLXRvZG8gaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHJlc2l6ZTogbm9uZVxcbn1cXG5cXG4uZmllbGQtZ3JvdXAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5maWVsZC1ncm91cCAuZmllbGQge1xcbiAgICB3aWR0aDogNDUlO1xcbn1cXG5cXG4jdG9kby1kYXRlLCBzZWxlY3Qge1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmVycm9yIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsNENBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsNkpBQTZKO0FBQ2pLOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLGtCQUFrQjs7SUFFbEIsYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7O0lBRWYsZUFBZTtJQUNmLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGlDQUFpQzs7SUFFakMsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsY0FBYztJQUNkLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsY0FBYztJQUNkLGVBQWU7SUFDZixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGlDQUFpQzs7SUFFakMsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLFlBQVk7O0lBRVosYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixpQ0FBaUM7O0lBRWpDLGFBQWE7SUFDYixrREFBa0Q7SUFDbEQsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQ0FBaUM7O0lBRWpDLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGFBQWE7O0lBRWIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7OztBQUdBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxtQ0FBbUM7O0lBRW5DLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGNBQWM7SUFDZCxlQUFlO0lBQ2YsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUNBQWlDO0lBQ2pDLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxZQUFZO0lBQ1osZUFBZTtJQUNmLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgICBzcmM6IHVybCgnLi9Sb2JvdG8tUmVndWxhci50dGYnKTtcXG59XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxufVxcblxcbmh0bWwsIGJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogNzZweCAxZnIgLyAyNTBweCAxZnI7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG5cXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYWZlZjtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOWZkZjtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMnB4IDVweCBncmF5O1xcbn1cXG5cXG51bCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5wcm9qZWN0LWxpc3Qge1xcbiAgICBtYXgtaGVpZ2h0OiAyOTBweDtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgIG1hcmdpbjogNnB4IDJweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOGZjZjtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMTAwbXMgZWFzZS1pbi1vdXQ7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3Q6aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4ICNmZmZmZmY7XFxufVxcblxcbi5zZWxlY3RlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdmYmY7XFxufVxcblxcbi5wcm9qZWN0LWRlbGV0ZSwgLnRvZG8tZGVsZXRlIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5wcm9qZWN0LWRlbGV0ZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMGE0ZGE7XFxufSBcXG5cXG4udG9kby1kZWxldGU6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4ZmNmO1xcbn1cXG5cXG4ubmV3LXByb2plY3QsIC5hZGQtdG9kbyB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgbWFyZ2luOiAxNXB4IDJweDtcXG4gICAgaGVpZ2h0OiAzNnB4O1xcbiAgICB3aWR0aDogMTQ1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDhmY2Y7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDEwMG1zIGVhc2UtaW4tb3V0O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm5ldy1wcm9qZWN0OmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCAjZmZmZmZmO1xcbn1cXG5cXG4ubmV3LXByb2plY3Q6YWN0aXZlLCAuYWRkLXRvZG86YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNWY5ZjtcXG59XFxuXFxuLmN1cnJlbnQtcHJvamVjdCB7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGYxZmE7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDJweCAycHggNXB4IGdyYXk7XFxufVxcblxcbi5wcm9qZWN0LWluZm8ge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmFkZC10b2RvOmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCAjYWFhYWFhO1xcbn1cXG5cXG5ociB7XFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcblxcbi50b2RvIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBtYXJnaW46IDVweDtcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NkZTFmYTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMTAwbXMgZWFzZS1pbi1vdXQ7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjVweCA2MDBweCAxMDBweCAxNTBweCAyNXB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcbi50b2RvOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JkZDZmNTtcXG59XFxuXFxuLmNoZWNrIHtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHRyYW5zaXRpb246IGFsbCAxMDBtcyBlYXNlLWluLW91dDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi51bmNoZWNrZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG4udW5jaGVja2VkOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcXG59XFxuXFxuLmNoZWNrZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhZmVmO1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmNoZWNrZWQ6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTBiZmZmO1xcbn1cXG5cXG4ucHJpb3JpdHktY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi5wcmlvcml0eSB7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnByaW9yaXR5LWNvbnRhaW5lciAubG93IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGltZWdyZWVuO1xcbn1cXG5cXG4ucHJpb3JpdHktY29udGFpbmVyIC5tZWRpdW0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxufVxcblxcbi5wcmlvcml0eS1jb250YWluZXIgLmhpZ2gge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5kYXRlIHtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhY2NiZjA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5cXG4uZGVzY3JpcHRpb24ge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgIG1heC13aWR0aDogNjI1cHg7XFxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG59XFxuXFxuLm5vdGVzIHtcXG4gICAgZ3JpZC1jb2x1bW46IDMgLyA2O1xcbiAgICBtYXgtd2lkdGg6IDI3NXB4O1xcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxufVxcblxcbi5oaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm1vZGFsLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuNyk7XFxuICAgIFxcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1vZGFsIHtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2ZiZjtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmZvcm0tcHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5maWVsZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG5sYWJlbCB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uZmllbGQgaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG4gICAgcGFkZGluZzogMCA1cHg7XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uZm9ybS1wcm9qZWN0IGlucHV0IHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbn1cXG5cXG4uZm9ybS1idXR0b25zIHtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDEwMG1zIGVhc2UtaW4tb3V0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mb3JtLWJ1dHRvbnMgYnV0dG9ue1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICB3aWR0aDogMTQ0cHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5jb25maXJtIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcXG59XFxuXFxuLmNvbmZpcm06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTEyLCAyMTEsIDExMik7XFxufVxcblxcbi5jYW5jZWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMzLCA5NSwgOTUpO1xcbn1cXG5cXG4uY2FuY2VsOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNCwgNzIsIDcyKTtcXG59XFxuXFxuLmZvcm0tdG9kbyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5mb3JtLXRvZG8gaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHJlc2l6ZTogbm9uZVxcbn1cXG5cXG4uZmllbGQtZ3JvdXAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5maWVsZC1ncm91cCAuZmllbGQge1xcbiAgICB3aWR0aDogNDUlO1xcbn1cXG5cXG4jdG9kby1kYXRlLCBzZWxlY3Qge1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmVycm9yIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgVG9kbyA9ICgoKSA9PiB7XG4gIGNvbnN0IF9wcm9qZWN0cyA9IHtcbiAgICBkZWZhdWx0OiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdkZWZhdWx0JyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciwgYWRpcGlzaWNpbmcgZWxpdC4gVW5kZSBlaXVzIHRvdGFtIGFyY2hpdGVjdG8gZXggcXVhcyB2aXRhZSBhbmltaSBuYW0sIG9tbmlzIGV1bSB2ZXJvIGN1bSBsaWJlcm8gZWFydW0gbGF1ZGFudGl1bSBleGVyY2l0YXRpb25lbSB0ZW1wb3JpYnVzIGNvbnNlY3RldHVyIG5vYmlzLiBMYXVkYW50aXVtLCB0b3RhbS4nLFxuICAgICAgICBkdWVEYXRlOiAnMjAyMy0wNi0wNCcsXG4gICAgICAgIHByaW9yaXR5OiAnbG93JyxcbiAgICAgICAgbm90ZXM6ICdMb3JlbSBpcHN1bSwgZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gTnVtcXVhbSBhbGlhcyB0ZW1wb3JhIG1vZGkhJyxcbiAgICAgIH0sXG4gICAgXSxcbiAgfTtcblxuICBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KG5hbWUpIHtcbiAgICBfcHJvamVjdHNbbmFtZV0gPSBbXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFByb2plY3ROYW1lcygpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoX3Byb2plY3RzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlbGV0ZVByb2plY3QocHJvamVjdCkge1xuICAgIGRlbGV0ZSBfcHJvamVjdHNbcHJvamVjdF07XG4gIH1cblxuICBmdW5jdGlvbiBfY3JlYXRlVG9kbyhuYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWUsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIGR1ZURhdGUsXG4gICAgICBwcmlvcml0eSxcbiAgICAgIG5vdGVzLFxuICAgICAgY2hlY2s6IGZhbHNlLFxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBhZGRUb2RvKHByb2plY3QsIG5hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMpIHtcbiAgICBjb25zdCB0b2RvID0gX2NyZWF0ZVRvZG8obmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3Rlcyk7XG4gICAgX3Byb2plY3RzW3Byb2plY3RdLnB1c2godG9kbyk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRUb2Rvcyhwcm9qZWN0KSB7XG4gICAgcmV0dXJuIF9wcm9qZWN0c1twcm9qZWN0XTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNoZWNrVG9kbyhwcm9qZWN0LCBpbmRleCkge1xuICAgIGNvbnN0IHRvZG8gPSBfcHJvamVjdHNbcHJvamVjdF1baW5kZXhdO1xuICAgIHRvZG8uY2hlY2sgPSAhdG9kby5jaGVjaztcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlbGV0ZVRvZG8ocHJvamVjdCwgaW5kZXgpIHtcbiAgICBfcHJvamVjdHNbcHJvamVjdF0uc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY3JlYXRlUHJvamVjdCxcbiAgICBnZXRQcm9qZWN0TmFtZXMsXG4gICAgZGVsZXRlUHJvamVjdCxcbiAgICBhZGRUb2RvLFxuICAgIGdldFRvZG9zLFxuICAgIGNoZWNrVG9kbyxcbiAgICBkZWxldGVUb2RvLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgVG9kbztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgVG9kbyBmcm9tICcuL3RvZG8nO1xuXG5jb25zdCBEb20gPSAoKCkgPT4ge1xuICBjb25zdCBfcHJvamVjdFNlbGVjdEFycmF5ID0gVG9kby5nZXRQcm9qZWN0TmFtZXMoKS5tYXAoKGUsIGkpID0+IGkgPT09IDApO1xuXG4gIGZ1bmN0aW9uIF9jcmVhdGVQcm9qZWN0TGkobmFtZSwgaW5kZXgpIHtcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGkuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpO1xuICAgIGxpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QnKS5mb3JFYWNoKChlKSA9PiB7IGUuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTsgfSk7XG4gICAgICBsaS5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgX3Byb2plY3RTZWxlY3RBcnJheS5mb3JFYWNoKChlLCBpLCBhKSA9PiB7IGFbaV0gPSBpID09PSBpbmRleDsgfSk7XG4gICAgICBEb20ucmVsb2FkVG9kb0xpc3QobmFtZSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHAudGV4dENvbnRlbnQgPSBuYW1lO1xuICAgIGxpLmFwcGVuZENoaWxkKHApO1xuXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZGVsZXRlJyk7XG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ1gnO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldikgPT4ge1xuICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBpZiAobGkuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3RlZCcpICYmIF9wcm9qZWN0U2VsZWN0QXJyYXkubGVuZ3RoID4gMSkge1xuICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICBfcHJvamVjdFNlbGVjdEFycmF5W2luZGV4ICsgMV0gPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF9wcm9qZWN0U2VsZWN0QXJyYXlbaW5kZXggLSAxXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIF9wcm9qZWN0U2VsZWN0QXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIFRvZG8uZGVsZXRlUHJvamVjdChuYW1lKTtcbiAgICAgIERvbS5yZWxvYWRQcm9qZWN0TGlzdCgpO1xuICAgICAgaWYgKF9wcm9qZWN0U2VsZWN0QXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgICBEb20ucmVsb2FkVG9kb0xpc3QoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdGVkIHAnKS50ZXh0Q29udGVudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBEb20ucmVsb2FkVG9kb0xpc3QoJycpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGxpLmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgICByZXR1cm4gbGk7XG4gIH1cblxuICBmdW5jdGlvbiBfY3JlYXRlVG9kb0xpKHRvZG8sIHByb2plY3QsIGluZGV4KSB7XG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxpLmNsYXNzTGlzdC5hZGQoJ3RvZG8nKTtcblxuICAgIGNvbnN0IGNoZWNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY2hlY2tCdXR0b24uY2xhc3NMaXN0LmFkZCgnY2hlY2snKTtcbiAgICBjaGVja0J1dHRvbi5jbGFzc0xpc3QuYWRkKHRvZG8uY2hlY2sgPyAnY2hlY2tlZCcgOiAndW5jaGVja2VkJyk7XG4gICAgaWYgKHRvZG8uY2hlY2spIGNoZWNrQnV0dG9uLnRleHRDb250ZW50ID0gJ1xcdUQ4M0QnO1xuICAgIGNoZWNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBUb2RvLmNoZWNrVG9kbyhwcm9qZWN0LCBpbmRleCk7XG4gICAgICBjaGVja0J1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdjaGVja2VkJyk7XG4gICAgICBjaGVja0J1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCd1bmNoZWNrZWQnKTtcbiAgICAgIGNoZWNrQnV0dG9uLnRleHRDb250ZW50ID0gY2hlY2tCdXR0b24udGV4dENvbnRlbnQgPT09ICcnID8gJ1xcdTI3MTMnIDogJyc7XG4gICAgfSk7XG4gICAgbGkuYXBwZW5kQ2hpbGQoY2hlY2tCdXR0b24pO1xuXG4gICAgY29uc3QgdG9kb05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdG9kb05hbWUuY2xhc3NMaXN0LmFkZCgndG9kby1uYW1lJyk7XG4gICAgdG9kb05hbWUudGV4dENvbnRlbnQgPSB0b2RvLm5hbWU7XG4gICAgbGkuYXBwZW5kQ2hpbGQodG9kb05hbWUpO1xuXG4gICAgY29uc3QgcHJpb3JpdHlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcmlvcml0eUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1jb250YWluZXInKTtcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHAudGV4dENvbnRlbnQgPSAnUHJpb3JpdHk6ICc7XG4gICAgcHJpb3JpdHlDb250YWluZXIuYXBwZW5kQ2hpbGQocCk7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eScpO1xuICAgIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQodG9kby5wcmlvcml0eSk7XG4gICAgcHJpb3JpdHlDb250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuICAgIGxpLmFwcGVuZENoaWxkKHByaW9yaXR5Q29udGFpbmVyKTtcblxuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGR1ZURhdGUuY2xhc3NMaXN0LmFkZCgnZGF0ZScpO1xuICAgIGR1ZURhdGUudHlwZSA9ICdkYXRlJztcbiAgICBkdWVEYXRlLnJlYWRPbmx5ID0gdHJ1ZTtcbiAgICBkdWVEYXRlLnZhbHVlID0gdG9kby5kdWVEYXRlO1xuICAgIGxpLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuXG4gICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3RvZG8tZGVsZXRlJyk7XG4gICAgZGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gJ1gnO1xuICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgVG9kby5kZWxldGVUb2RvKHByb2plY3QsIGluZGV4KTtcbiAgICAgIERvbS5yZWxvYWRUb2RvTGlzdChwcm9qZWN0KTtcbiAgICB9KTtcbiAgICBsaS5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbicpO1xuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGRlc2NyaXB0aW9uVGl0bGUudGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb246JztcbiAgICBkZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvblRpdGxlKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZGVzY3JpcHRpb25UZXh0LnRleHRDb250ZW50ID0gdG9kby5kZXNjcmlwdGlvbjtcbiAgICBkZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvblRleHQpO1xuICAgIGxpLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICAgIGNvbnN0IG5vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbm90ZXMuY2xhc3NMaXN0LmFkZCgnbm90ZXMnKTtcbiAgICBub3Rlcy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgY29uc3Qgbm90ZXNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBub3Rlc1RpdGxlLnRleHRDb250ZW50ID0gJ05vdGVzOic7XG4gICAgbm90ZXMuYXBwZW5kQ2hpbGQobm90ZXNUaXRsZSk7XG4gICAgY29uc3Qgbm90ZXNUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIG5vdGVzVGV4dC50ZXh0Q29udGVudCA9IHRvZG8ubm90ZXM7XG4gICAgbm90ZXMuYXBwZW5kQ2hpbGQobm90ZXNUZXh0KTtcbiAgICBsaS5hcHBlbmRDaGlsZChub3Rlcyk7XG5cbiAgICBsaS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcbiAgICAgIG5vdGVzLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBsaTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbG9hZFByb2plY3RMaXN0KCkge1xuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtbGlzdCcpO1xuICAgIHByb2plY3RMaXN0LnRleHRDb250ZW50ID0gJyc7XG4gICAgY29uc3QgcHJvamVjdE5hbWVzID0gVG9kby5nZXRQcm9qZWN0TmFtZXMoKTtcbiAgICBpZiAocHJvamVjdE5hbWVzLmxlbmd0aCA+IF9wcm9qZWN0U2VsZWN0QXJyYXkubGVuZ3RoKSB7XG4gICAgICBfcHJvamVjdFNlbGVjdEFycmF5LnB1c2godHJ1ZSk7XG4gICAgICBfcHJvamVjdFNlbGVjdEFycmF5LmZvckVhY2goKGUsIGksIGEpID0+IHsgYVtpXSA9IGkgPT09IHByb2plY3ROYW1lcy5sZW5ndGggLSAxOyB9KTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGxpID0gX2NyZWF0ZVByb2plY3RMaShwcm9qZWN0TmFtZXNbaV0sIGkpO1xuICAgICAgaWYgKF9wcm9qZWN0U2VsZWN0QXJyYXlbaV0pIHtcbiAgICAgICAgbGkuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgIH1cbiAgICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKGxpKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjbG9zZU1vZGFsKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1jb250YWluZXInKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbCcpLmZvckVhY2goKG4pID0+IHsgbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbG9hZFRvZG9MaXN0KHByb2plY3QpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC1wcm9qZWN0LW5hbWUnKS50ZXh0Q29udGVudCA9IHByb2plY3Q7XG4gICAgY29uc3QgdG9kb0xpc3RFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tbGlzdCcpO1xuICAgIHRvZG9MaXN0RWxlbWVudC50ZXh0Q29udGVudCA9ICcnO1xuICAgIGNvbnN0IHRvZG9MaXN0ID0gVG9kby5nZXRQcm9qZWN0TmFtZXMoKS5pbmNsdWRlcyhwcm9qZWN0KSA/IFRvZG8uZ2V0VG9kb3MocHJvamVjdCkgOiBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9MaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBsaSA9IF9jcmVhdGVUb2RvTGkodG9kb0xpc3RbaV0sIHByb2plY3QsIGkpO1xuICAgICAgdG9kb0xpc3RFbGVtZW50LmFwcGVuZENoaWxkKGxpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4geyByZWxvYWRQcm9qZWN0TGlzdCwgcmVsb2FkVG9kb0xpc3QsIGNsb3NlTW9kYWwgfTtcbn0pKCk7XG5cbkRvbS5yZWxvYWRQcm9qZWN0TGlzdCgpO1xuRG9tLnJlbG9hZFRvZG9MaXN0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RlZCBwJykudGV4dENvbnRlbnQpO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXByb2plY3QnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWNvbnRhaW5lcicpLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLXByb2plY3QnKS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1uYW1lJykuZm9jdXMoKTtcbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRvZG8nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWNvbnRhaW5lcicpLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLXRvZG8nKS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1uYW1lJykuZm9jdXMoKTtcbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FuY2VsJykuZm9yRWFjaCgoZSkgPT4gZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIERvbS5jbG9zZU1vZGFsKSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLXByb2plY3QnKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LW5hbWUnKTtcbiAgY29uc3QgbmV3TmFtZSA9IG5hbWVJbnB1dC52YWx1ZTtcbiAgaWYgKFRvZG8uZ2V0UHJvamVjdE5hbWVzKCkuaW5jbHVkZXMobmV3TmFtZSkpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1wcm9qZWN0IC5lcnJvcicpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICB9IGVsc2Uge1xuICAgIG5hbWVJbnB1dC52YWx1ZSA9ICcnO1xuICAgIFRvZG8uY3JlYXRlUHJvamVjdChuZXdOYW1lKTtcbiAgICBEb20ucmVsb2FkUHJvamVjdExpc3QoKTtcbiAgICBEb20ucmVsb2FkVG9kb0xpc3QobmV3TmFtZSk7XG4gICAgRG9tLmNsb3NlTW9kYWwoKTtcbiAgfVxufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLXRvZG8nKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC1wcm9qZWN0LW5hbWUnKS50ZXh0Q29udGVudDtcbiAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tbmFtZScpO1xuICBjb25zdCBuYW1lID0gbmFtZUlucHV0LnZhbHVlO1xuICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tZGVzY3JpcHRpb24nKTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbklucHV0LnZhbHVlO1xuICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1kYXRlJyk7XG4gIGNvbnN0IGRhdGUgPSBkYXRlSW5wdXQudmFsdWU7XG4gIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tcHJpb3JpdHknKS52YWx1ZTtcbiAgY29uc3Qgbm90ZXNJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLW5vdGVzJyk7XG4gIGNvbnN0IG5vdGVzID0gbm90ZXNJbnB1dC52YWx1ZTtcbiAgVG9kby5hZGRUb2RvKHByb2plY3QsIG5hbWUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSwgbm90ZXMpO1xuICBuYW1lSW5wdXQudmFsdWUgPSAnJztcbiAgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9ICcnO1xuICBkYXRlSW5wdXQudmFsdWUgPSAnJztcbiAgbm90ZXNJbnB1dC52YWx1ZSA9ICcnO1xuICBEb20ucmVsb2FkVG9kb0xpc3QocHJvamVjdCk7XG4gIERvbS5jbG9zZU1vZGFsKCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==