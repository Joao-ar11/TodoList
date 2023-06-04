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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'Roboto';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n:root {\n    font-size: 18px;\n    font-family: 'Roboto', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\nhtml, body {\n    height: 100%;\n}\n\n.container {\n    position: relative;\n    height: 100%;\n    display: grid;\n    grid-template: 76px 1fr / 250px 1fr;\n}\n\nheader {\n    grid-column: 1 / 3;\n\n    padding: 20px;\n    background-color: #00afef;\n    color: #ffffff;\n}\n\n.sidebar {\n    padding: 20px;\n    background-color: #009fdf;\n    color: #ffffff;\n    box-shadow: inset 0 2px 5px gray;\n}\n\nul {\n    list-style: none;\n}\n\n.project-list {\n    max-height: 290px;\n    overflow-y: auto;\n}\n\n.project {\n    cursor: pointer;\n\n    margin: 6px 2px;\n    padding: 5px;\n    height: 30px;\n    width: 200px;\n    background-color: #008fcf;\n    font-weight: 600;\n    border-radius: 5px;\n    transition: all 100ms ease-in-out;\n\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.project:hover {\n    box-shadow: 0 0 5px #ffffff;\n}\n\n.selected {\n    background-color: #007fbf;\n}\n\n.project-delete, .todo-delete {\n    cursor: pointer;\n    height: 25px;\n    width: 25px;\n    background-color: inherit;\n    color: #ffffff;\n    font-size: 1rem;\n    font-weight: bold;\n    border: none;\n    border-radius: 5px;\n}\n\n.project-delete:hover {\n    background-color: #10a4da;\n} \n\n.todo-delete:hover {\n    background-color: #008fcf;\n}\n\n.new-project, .add-todo {\n    cursor: pointer;\n    margin: 15px 2px;\n    height: 36px;\n    width: 145px;\n    background-color: #008fcf;\n    color: #ffffff;\n    font-size: 1rem;\n    border: none;\n    border-radius: 10px;\n    transition: all 100ms ease-in-out;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.new-project:hover {\n    box-shadow: 0 0 5px #ffffff;\n}\n\n.new-project:active, .add-todo:active {\n    background-color: #005f9f;\n}\n\n.current-project {\n    padding: 20px;\n    background-color: #ddf1fa;\n    box-shadow: inset 2px 2px 5px gray;\n}\n\n.project-info {\n    padding: 5px;\n\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.add-todo:hover {\n    box-shadow: 0 0 5px #aaaaaa;\n}\n\nhr {\n    margin-bottom: 30px;\n}\n\n.todo {\n    cursor: pointer;\n    margin: 5px;\n    padding: 5px 10px;\n    width: fit-content;\n    background-color: #cde1fa;\n    border-radius: 5px;\n    transition: all 100ms ease-in-out;\n\n    display: grid;\n    grid-template-columns: 25px 600px 100px 130px 25px;\n    align-items: center;\n    gap: 15px;\n}\n\n.todo:hover {\n    background-color: #bdd6f5;\n}\n\n.check {\n    height: 25px;\n    width: 25px;\n    border: none;\n    border-radius: 5px;\n    transition: all 100ms ease-in-out;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.unchecked {\n    background-color: #ffffff;\n}\n\n.unchecked:hover {\n    background-color: #eeeeee;\n}\n\n.checked {\n    background-color: #00afef;\n    color: #ffffff;\n    font-size: 1rem;\n    font-weight: bold;\n}\n\n.checked:hover {\n    background-color: #10bfff;\n}\n\n.priority-container {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n}\n\n.priority {\n    height: 25px;\n    width: 25px;\n    border-radius: 5px;\n}\n\n.priority-container .low {\n    background-color: limegreen;\n}\n\n.priority-container .medium {\n    background-color: yellow;\n}\n\n.priority-container .high {\n    background-color: red;\n}\n\n.date {\n    height: 25px;\n    border: none;\n    background-color: #accbf0;\n    border-radius: 5px;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n\n.description {\n    grid-column: 1 / 3;\n}\n\n.notes {\n    grid-column: 3 / 6;\n}\n\n\n.modal-container {\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    background-color: rgba(0, 0, 0, .7);\n    \n    display: none;\n    justify-content: center;\n    align-items: center;\n}\n\n.modal {\n    padding: 20px;\n    background-color: #007fbf;\n    color: #ffffff;\n    border-radius: 15px;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.form-project {\n    display: none;\n}\n\n.field {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n\nlabel {\n    font-weight: bold;\n}\n\n.field input[type=\"text\"] {\n    padding: 0 5px;\n    height: 1.5rem;\n    font-size: 1rem;\n    border: none;\n    border-radius: 5px;\n}\n\n.form-project input {\n    width: 300px;\n}\n\n.form-buttons {\n    margin-top: 20px;\n    transition: all 100ms ease-in-out;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.form-buttons button{\n    cursor: pointer;\n    height: 1.5rem;\n    width: 144px;\n    font-size: 1rem;\n    border: none;\n    border-radius: 5px;\n}\n\n.confirm {\n    background-color: lightgreen;\n}\n\n.confirm:hover {\n    background-color: rgb(112, 211, 112);\n}\n\n.cancel {\n    background-color: rgb(233, 95, 95);\n}\n\n.cancel:hover {\n    background-color: rgb(204, 72, 72);\n}\n\n.form-todo {\n    display: none;\n}\n\n.form-todo input[type=\"text\"] {\n    width: 500px;\n}\n\ntextarea {\n    padding: 5px;\n    font-size: 1rem;\n    border-radius: 5px;\n    resize: none\n}\n\n.field-group {\n    display: flex;\n    justify-content: space-between;\n}\n\n.field-group .field {\n    width: 45%;\n}\n\n#todo-date, select {\n    height: 1.5rem;\n    font-size: 1rem;\n    border: none;\n    border-radius: 5px;\n}\n\n.error {\n    display: none;\n    font-weight: bold;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: 'Roboto';\n    src: url('./Roboto-Regular.ttf');\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n:root {\n    font-size: 18px;\n    font-family: 'Roboto', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\nhtml, body {\n    height: 100%;\n}\n\n.container {\n    position: relative;\n    height: 100%;\n    display: grid;\n    grid-template: 76px 1fr / 250px 1fr;\n}\n\nheader {\n    grid-column: 1 / 3;\n\n    padding: 20px;\n    background-color: #00afef;\n    color: #ffffff;\n}\n\n.sidebar {\n    padding: 20px;\n    background-color: #009fdf;\n    color: #ffffff;\n    box-shadow: inset 0 2px 5px gray;\n}\n\nul {\n    list-style: none;\n}\n\n.project-list {\n    max-height: 290px;\n    overflow-y: auto;\n}\n\n.project {\n    cursor: pointer;\n\n    margin: 6px 2px;\n    padding: 5px;\n    height: 30px;\n    width: 200px;\n    background-color: #008fcf;\n    font-weight: 600;\n    border-radius: 5px;\n    transition: all 100ms ease-in-out;\n\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.project:hover {\n    box-shadow: 0 0 5px #ffffff;\n}\n\n.selected {\n    background-color: #007fbf;\n}\n\n.project-delete, .todo-delete {\n    cursor: pointer;\n    height: 25px;\n    width: 25px;\n    background-color: inherit;\n    color: #ffffff;\n    font-size: 1rem;\n    font-weight: bold;\n    border: none;\n    border-radius: 5px;\n}\n\n.project-delete:hover {\n    background-color: #10a4da;\n} \n\n.todo-delete:hover {\n    background-color: #008fcf;\n}\n\n.new-project, .add-todo {\n    cursor: pointer;\n    margin: 15px 2px;\n    height: 36px;\n    width: 145px;\n    background-color: #008fcf;\n    color: #ffffff;\n    font-size: 1rem;\n    border: none;\n    border-radius: 10px;\n    transition: all 100ms ease-in-out;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.new-project:hover {\n    box-shadow: 0 0 5px #ffffff;\n}\n\n.new-project:active, .add-todo:active {\n    background-color: #005f9f;\n}\n\n.current-project {\n    padding: 20px;\n    background-color: #ddf1fa;\n    box-shadow: inset 2px 2px 5px gray;\n}\n\n.project-info {\n    padding: 5px;\n\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.add-todo:hover {\n    box-shadow: 0 0 5px #aaaaaa;\n}\n\nhr {\n    margin-bottom: 30px;\n}\n\n.todo {\n    cursor: pointer;\n    margin: 5px;\n    padding: 5px 10px;\n    width: fit-content;\n    background-color: #cde1fa;\n    border-radius: 5px;\n    transition: all 100ms ease-in-out;\n\n    display: grid;\n    grid-template-columns: 25px 600px 100px 130px 25px;\n    align-items: center;\n    gap: 15px;\n}\n\n.todo:hover {\n    background-color: #bdd6f5;\n}\n\n.check {\n    height: 25px;\n    width: 25px;\n    border: none;\n    border-radius: 5px;\n    transition: all 100ms ease-in-out;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.unchecked {\n    background-color: #ffffff;\n}\n\n.unchecked:hover {\n    background-color: #eeeeee;\n}\n\n.checked {\n    background-color: #00afef;\n    color: #ffffff;\n    font-size: 1rem;\n    font-weight: bold;\n}\n\n.checked:hover {\n    background-color: #10bfff;\n}\n\n.priority-container {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n}\n\n.priority {\n    height: 25px;\n    width: 25px;\n    border-radius: 5px;\n}\n\n.priority-container .low {\n    background-color: limegreen;\n}\n\n.priority-container .medium {\n    background-color: yellow;\n}\n\n.priority-container .high {\n    background-color: red;\n}\n\n.date {\n    height: 25px;\n    border: none;\n    background-color: #accbf0;\n    border-radius: 5px;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n\n.description {\n    grid-column: 1 / 3;\n}\n\n.notes {\n    grid-column: 3 / 6;\n}\n\n\n.modal-container {\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    background-color: rgba(0, 0, 0, .7);\n    \n    display: none;\n    justify-content: center;\n    align-items: center;\n}\n\n.modal {\n    padding: 20px;\n    background-color: #007fbf;\n    color: #ffffff;\n    border-radius: 15px;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.form-project {\n    display: none;\n}\n\n.field {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n\nlabel {\n    font-weight: bold;\n}\n\n.field input[type=\"text\"] {\n    padding: 0 5px;\n    height: 1.5rem;\n    font-size: 1rem;\n    border: none;\n    border-radius: 5px;\n}\n\n.form-project input {\n    width: 300px;\n}\n\n.form-buttons {\n    margin-top: 20px;\n    transition: all 100ms ease-in-out;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.form-buttons button{\n    cursor: pointer;\n    height: 1.5rem;\n    width: 144px;\n    font-size: 1rem;\n    border: none;\n    border-radius: 5px;\n}\n\n.confirm {\n    background-color: lightgreen;\n}\n\n.confirm:hover {\n    background-color: rgb(112, 211, 112);\n}\n\n.cancel {\n    background-color: rgb(233, 95, 95);\n}\n\n.cancel:hover {\n    background-color: rgb(204, 72, 72);\n}\n\n.form-todo {\n    display: none;\n}\n\n.form-todo input[type=\"text\"] {\n    width: 500px;\n}\n\ntextarea {\n    padding: 5px;\n    font-size: 1rem;\n    border-radius: 5px;\n    resize: none\n}\n\n.field-group {\n    display: flex;\n    justify-content: space-between;\n}\n\n.field-group .field {\n    width: 45%;\n}\n\n#todo-date, select {\n    height: 1.5rem;\n    font-size: 1rem;\n    border: none;\n    border-radius: 5px;\n}\n\n.error {\n    display: none;\n    font-weight: bold;\n}"],"sourceRoot":""}]);
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
    default: [],
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
  function _createProjectLi(name) {
    const li = document.createElement('li');
    li.classList.add('project');
    li.addEventListener('click', () => {
      document.querySelectorAll('.project').forEach((e) => { e.classList.remove('selected'); });
      li.classList.add('selected');
    });

    const p = document.createElement('p');
    p.textContent = name;
    li.appendChild(p);

    const button = document.createElement('button');
    button.classList.add('project-delete');
    button.textContent = 'X';
    button.addEventListener('click', (ev) => {
      _todo__WEBPACK_IMPORTED_MODULE_1__["default"].deleteProject(p.textContent);
      Dom.reloadProjectList();
      ev.stopPropagation();
    });
    li.appendChild(button);

    return li;
  }

  function reloadProjectList(first = false) {
    const projectList = document.querySelector('.project-list');
    projectList.textContent = '';
    const projectNames = _todo__WEBPACK_IMPORTED_MODULE_1__["default"].getProjectNames();
    for (let i = 0; i < projectNames.length; i++) {
      const li = _createProjectLi(projectNames[i]);
      if (first && i === 0) li.classList.add('selected');
      else if (!first && i === projectNames.length - 1) li.classList.add('selected');
      projectList.appendChild(li);
    }
  }

  function closeModal() {
    document.querySelector('.modal-container').style.display = 'none';
    document.querySelectorAll('.modal').forEach((n) => { n.style.display = 'none'; });
  }

  return { reloadProjectList, closeModal };
})();

Dom.reloadProjectList(true);

document.querySelector('.new-project').addEventListener('click', () => {
  document.querySelector('.modal-container').style.display = 'flex';
  document.querySelector('.form-project').style.display = 'flex';
});

document.querySelector('.add-todo').addEventListener('click', () => {
  document.querySelector('.modal-container').style.display = 'flex';
  document.querySelector('.form-todo').style.display = 'flex';
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
    Dom.closeModal();
  }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMscUhBQXVDO0FBQ25GLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBLHNEQUFzRCw0QkFBNEIsMkRBQTJELEdBQUcsT0FBTyxnQkFBZ0IsaUJBQWlCLDZCQUE2QixHQUFHLFdBQVcsc0JBQXNCLG9LQUFvSyxHQUFHLGdCQUFnQixtQkFBbUIsR0FBRyxnQkFBZ0IseUJBQXlCLG1CQUFtQixvQkFBb0IsMENBQTBDLEdBQUcsWUFBWSx5QkFBeUIsc0JBQXNCLGdDQUFnQyxxQkFBcUIsR0FBRyxjQUFjLG9CQUFvQixnQ0FBZ0MscUJBQXFCLHVDQUF1QyxHQUFHLFFBQVEsdUJBQXVCLEdBQUcsbUJBQW1CLHdCQUF3Qix1QkFBdUIsR0FBRyxjQUFjLHNCQUFzQix3QkFBd0IsbUJBQW1CLG1CQUFtQixtQkFBbUIsZ0NBQWdDLHVCQUF1Qix5QkFBeUIsd0NBQXdDLHNCQUFzQixxQ0FBcUMsMEJBQTBCLEdBQUcsb0JBQW9CLGtDQUFrQyxHQUFHLGVBQWUsZ0NBQWdDLEdBQUcsbUNBQW1DLHNCQUFzQixtQkFBbUIsa0JBQWtCLGdDQUFnQyxxQkFBcUIsc0JBQXNCLHdCQUF3QixtQkFBbUIseUJBQXlCLEdBQUcsMkJBQTJCLGdDQUFnQyxJQUFJLHdCQUF3QixnQ0FBZ0MsR0FBRyw2QkFBNkIsc0JBQXNCLHVCQUF1QixtQkFBbUIsbUJBQW1CLGdDQUFnQyxxQkFBcUIsc0JBQXNCLG1CQUFtQiwwQkFBMEIsd0NBQXdDLHNCQUFzQiw4QkFBOEIsMEJBQTBCLEdBQUcsd0JBQXdCLGtDQUFrQyxHQUFHLDJDQUEyQyxnQ0FBZ0MsR0FBRyxzQkFBc0Isb0JBQW9CLGdDQUFnQyx5Q0FBeUMsR0FBRyxtQkFBbUIsbUJBQW1CLHNCQUFzQixxQ0FBcUMsMEJBQTBCLEdBQUcscUJBQXFCLGtDQUFrQyxHQUFHLFFBQVEsMEJBQTBCLEdBQUcsV0FBVyxzQkFBc0Isa0JBQWtCLHdCQUF3Qix5QkFBeUIsZ0NBQWdDLHlCQUF5Qix3Q0FBd0Msc0JBQXNCLHlEQUF5RCwwQkFBMEIsZ0JBQWdCLEdBQUcsaUJBQWlCLGdDQUFnQyxHQUFHLFlBQVksbUJBQW1CLGtCQUFrQixtQkFBbUIseUJBQXlCLHdDQUF3QyxzQkFBc0IsOEJBQThCLDBCQUEwQixHQUFHLGdCQUFnQixnQ0FBZ0MsR0FBRyxzQkFBc0IsZ0NBQWdDLEdBQUcsY0FBYyxnQ0FBZ0MscUJBQXFCLHNCQUFzQix3QkFBd0IsR0FBRyxvQkFBb0IsZ0NBQWdDLEdBQUcseUJBQXlCLG9CQUFvQiwwQkFBMEIsZUFBZSxHQUFHLGVBQWUsbUJBQW1CLGtCQUFrQix5QkFBeUIsR0FBRyw4QkFBOEIsa0NBQWtDLEdBQUcsaUNBQWlDLCtCQUErQixHQUFHLCtCQUErQiw0QkFBNEIsR0FBRyxXQUFXLG1CQUFtQixtQkFBbUIsZ0NBQWdDLHlCQUF5QixzQkFBc0IsOEJBQThCLDBCQUEwQixHQUFHLG9CQUFvQix5QkFBeUIsR0FBRyxZQUFZLHlCQUF5QixHQUFHLHdCQUF3Qix5QkFBeUIsbUJBQW1CLGtCQUFrQiwwQ0FBMEMsMEJBQTBCLDhCQUE4QiwwQkFBMEIsR0FBRyxZQUFZLG9CQUFvQixnQ0FBZ0MscUJBQXFCLDBCQUEwQixvQkFBb0IsNkJBQTZCLGdCQUFnQixHQUFHLG1CQUFtQixvQkFBb0IsR0FBRyxZQUFZLG9CQUFvQiw2QkFBNkIsZUFBZSxHQUFHLFdBQVcsd0JBQXdCLEdBQUcsaUNBQWlDLHFCQUFxQixxQkFBcUIsc0JBQXNCLG1CQUFtQix5QkFBeUIsR0FBRyx5QkFBeUIsbUJBQW1CLEdBQUcsbUJBQW1CLHVCQUF1Qix3Q0FBd0Msb0JBQW9CLHFDQUFxQywwQkFBMEIsR0FBRyx5QkFBeUIsc0JBQXNCLHFCQUFxQixtQkFBbUIsc0JBQXNCLG1CQUFtQix5QkFBeUIsR0FBRyxjQUFjLG1DQUFtQyxHQUFHLG9CQUFvQiwyQ0FBMkMsR0FBRyxhQUFhLHlDQUF5QyxHQUFHLG1CQUFtQix5Q0FBeUMsR0FBRyxnQkFBZ0Isb0JBQW9CLEdBQUcscUNBQXFDLG1CQUFtQixHQUFHLGNBQWMsbUJBQW1CLHNCQUFzQix5QkFBeUIscUJBQXFCLGtCQUFrQixvQkFBb0IscUNBQXFDLEdBQUcseUJBQXlCLGlCQUFpQixHQUFHLHdCQUF3QixxQkFBcUIsc0JBQXNCLG1CQUFtQix5QkFBeUIsR0FBRyxZQUFZLG9CQUFvQix3QkFBd0IsR0FBRyxPQUFPLGdGQUFnRixZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLGFBQWEsV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGNBQWMsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxjQUFjLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsY0FBYyxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGNBQWMsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksY0FBYyxXQUFXLFlBQVksYUFBYSxRQUFRLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxRQUFRLEtBQUssWUFBWSxXQUFXLFVBQVUsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksc0NBQXNDLDRCQUE0Qix1Q0FBdUMsR0FBRyxPQUFPLGdCQUFnQixpQkFBaUIsNkJBQTZCLEdBQUcsV0FBVyxzQkFBc0Isb0tBQW9LLEdBQUcsZ0JBQWdCLG1CQUFtQixHQUFHLGdCQUFnQix5QkFBeUIsbUJBQW1CLG9CQUFvQiwwQ0FBMEMsR0FBRyxZQUFZLHlCQUF5QixzQkFBc0IsZ0NBQWdDLHFCQUFxQixHQUFHLGNBQWMsb0JBQW9CLGdDQUFnQyxxQkFBcUIsdUNBQXVDLEdBQUcsUUFBUSx1QkFBdUIsR0FBRyxtQkFBbUIsd0JBQXdCLHVCQUF1QixHQUFHLGNBQWMsc0JBQXNCLHdCQUF3QixtQkFBbUIsbUJBQW1CLG1CQUFtQixnQ0FBZ0MsdUJBQXVCLHlCQUF5Qix3Q0FBd0Msc0JBQXNCLHFDQUFxQywwQkFBMEIsR0FBRyxvQkFBb0Isa0NBQWtDLEdBQUcsZUFBZSxnQ0FBZ0MsR0FBRyxtQ0FBbUMsc0JBQXNCLG1CQUFtQixrQkFBa0IsZ0NBQWdDLHFCQUFxQixzQkFBc0Isd0JBQXdCLG1CQUFtQix5QkFBeUIsR0FBRywyQkFBMkIsZ0NBQWdDLElBQUksd0JBQXdCLGdDQUFnQyxHQUFHLDZCQUE2QixzQkFBc0IsdUJBQXVCLG1CQUFtQixtQkFBbUIsZ0NBQWdDLHFCQUFxQixzQkFBc0IsbUJBQW1CLDBCQUEwQix3Q0FBd0Msc0JBQXNCLDhCQUE4QiwwQkFBMEIsR0FBRyx3QkFBd0Isa0NBQWtDLEdBQUcsMkNBQTJDLGdDQUFnQyxHQUFHLHNCQUFzQixvQkFBb0IsZ0NBQWdDLHlDQUF5QyxHQUFHLG1CQUFtQixtQkFBbUIsc0JBQXNCLHFDQUFxQywwQkFBMEIsR0FBRyxxQkFBcUIsa0NBQWtDLEdBQUcsUUFBUSwwQkFBMEIsR0FBRyxXQUFXLHNCQUFzQixrQkFBa0Isd0JBQXdCLHlCQUF5QixnQ0FBZ0MseUJBQXlCLHdDQUF3QyxzQkFBc0IseURBQXlELDBCQUEwQixnQkFBZ0IsR0FBRyxpQkFBaUIsZ0NBQWdDLEdBQUcsWUFBWSxtQkFBbUIsa0JBQWtCLG1CQUFtQix5QkFBeUIsd0NBQXdDLHNCQUFzQiw4QkFBOEIsMEJBQTBCLEdBQUcsZ0JBQWdCLGdDQUFnQyxHQUFHLHNCQUFzQixnQ0FBZ0MsR0FBRyxjQUFjLGdDQUFnQyxxQkFBcUIsc0JBQXNCLHdCQUF3QixHQUFHLG9CQUFvQixnQ0FBZ0MsR0FBRyx5QkFBeUIsb0JBQW9CLDBCQUEwQixlQUFlLEdBQUcsZUFBZSxtQkFBbUIsa0JBQWtCLHlCQUF5QixHQUFHLDhCQUE4QixrQ0FBa0MsR0FBRyxpQ0FBaUMsK0JBQStCLEdBQUcsK0JBQStCLDRCQUE0QixHQUFHLFdBQVcsbUJBQW1CLG1CQUFtQixnQ0FBZ0MseUJBQXlCLHNCQUFzQiw4QkFBOEIsMEJBQTBCLEdBQUcsb0JBQW9CLHlCQUF5QixHQUFHLFlBQVkseUJBQXlCLEdBQUcsd0JBQXdCLHlCQUF5QixtQkFBbUIsa0JBQWtCLDBDQUEwQywwQkFBMEIsOEJBQThCLDBCQUEwQixHQUFHLFlBQVksb0JBQW9CLGdDQUFnQyxxQkFBcUIsMEJBQTBCLG9CQUFvQiw2QkFBNkIsZ0JBQWdCLEdBQUcsbUJBQW1CLG9CQUFvQixHQUFHLFlBQVksb0JBQW9CLDZCQUE2QixlQUFlLEdBQUcsV0FBVyx3QkFBd0IsR0FBRyxpQ0FBaUMscUJBQXFCLHFCQUFxQixzQkFBc0IsbUJBQW1CLHlCQUF5QixHQUFHLHlCQUF5QixtQkFBbUIsR0FBRyxtQkFBbUIsdUJBQXVCLHdDQUF3QyxvQkFBb0IscUNBQXFDLDBCQUEwQixHQUFHLHlCQUF5QixzQkFBc0IscUJBQXFCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHlCQUF5QixHQUFHLGNBQWMsbUNBQW1DLEdBQUcsb0JBQW9CLDJDQUEyQyxHQUFHLGFBQWEseUNBQXlDLEdBQUcsbUJBQW1CLHlDQUF5QyxHQUFHLGdCQUFnQixvQkFBb0IsR0FBRyxxQ0FBcUMsbUJBQW1CLEdBQUcsY0FBYyxtQkFBbUIsc0JBQXNCLHlCQUF5QixxQkFBcUIsa0JBQWtCLG9CQUFvQixxQ0FBcUMsR0FBRyx5QkFBeUIsaUJBQWlCLEdBQUcsd0JBQXdCLHFCQUFxQixzQkFBc0IsbUJBQW1CLHlCQUF5QixHQUFHLFlBQVksb0JBQW9CLHdCQUF3QixHQUFHLG1CQUFtQjtBQUNsa2M7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNWMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDekJhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELGlFQUFlLElBQUksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6RHBCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDSzs7QUFFMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCxpQ0FBaUM7QUFDOUY7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sMkRBQWtCO0FBQ3hCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsNkRBQW9CO0FBQzdDLG9CQUFvQix5QkFBeUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5REFBeUQsMkJBQTJCO0FBQ3BGOztBQUVBLFdBQVc7QUFDWCxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sNkRBQW9CO0FBQzFCO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSSwyREFBa0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vUm9ib3RvLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiA3NnB4IDFmciAvIDI1MHB4IDFmcjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcblxcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhZmVmO1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5ZmRmO1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAycHggNXB4IGdyYXk7XFxufVxcblxcbnVsIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLnByb2plY3QtbGlzdCB7XFxuICAgIG1heC1oZWlnaHQ6IDI5MHB4O1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgbWFyZ2luOiA2cHggMnB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4ZmNmO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHRyYW5zaXRpb246IGFsbCAxMDBtcyBlYXNlLWluLW91dDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdDpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggI2ZmZmZmZjtcXG59XFxuXFxuLnNlbGVjdGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2ZiZjtcXG59XFxuXFxuLnByb2plY3QtZGVsZXRlLCAudG9kby1kZWxldGUge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnByb2plY3QtZGVsZXRlOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEwYTRkYTtcXG59IFxcblxcbi50b2RvLWRlbGV0ZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDhmY2Y7XFxufVxcblxcbi5uZXctcHJvamVjdCwgLmFkZC10b2RvIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBtYXJnaW46IDE1cHggMnB4O1xcbiAgICBoZWlnaHQ6IDM2cHg7XFxuICAgIHdpZHRoOiAxNDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOGZjZjtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMTAwbXMgZWFzZS1pbi1vdXQ7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubmV3LXByb2plY3Q6aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4ICNmZmZmZmY7XFxufVxcblxcbi5uZXctcHJvamVjdDphY3RpdmUsIC5hZGQtdG9kbzphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1ZjlmO1xcbn1cXG5cXG4uY3VycmVudC1wcm9qZWN0IHtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZjFmYTtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMnB4IDJweCA1cHggZ3JheTtcXG59XFxuXFxuLnByb2plY3QtaW5mbyB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYWRkLXRvZG86aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4ICNhYWFhYWE7XFxufVxcblxcbmhyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG59XFxuXFxuLnRvZG8ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG1hcmdpbjogNXB4O1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2RlMWZhO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHRyYW5zaXRpb246IGFsbCAxMDBtcyBlYXNlLWluLW91dDtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNXB4IDYwMHB4IDEwMHB4IDEzMHB4IDI1cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTVweDtcXG59XFxuXFxuLnRvZG86aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmRkNmY1O1xcbn1cXG5cXG4uY2hlY2sge1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDEwMG1zIGVhc2UtaW4tb3V0O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnVuY2hlY2tlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbi51bmNoZWNrZWQ6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xcbn1cXG5cXG4uY2hlY2tlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGFmZWY7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uY2hlY2tlZDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMGJmZmY7XFxufVxcblxcbi5wcmlvcml0eS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLnByaW9yaXR5IHtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4ucHJpb3JpdHktY29udGFpbmVyIC5sb3cge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaW1lZ3JlZW47XFxufVxcblxcbi5wcmlvcml0eS1jb250YWluZXIgLm1lZGl1bSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXG59XFxuXFxuLnByaW9yaXR5LWNvbnRhaW5lciAuaGlnaCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLmRhdGUge1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FjY2JmMDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuXFxuLmRlc2NyaXB0aW9uIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbn1cXG5cXG4ubm90ZXMge1xcbiAgICBncmlkLWNvbHVtbjogMyAvIDY7XFxufVxcblxcblxcbi5tb2RhbC1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjcpO1xcbiAgICBcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tb2RhbCB7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdmYmY7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5mb3JtLXByb2plY3Qge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZmllbGQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxubGFiZWwge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmZpZWxkIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICAgIHBhZGRpbmc6IDAgNXB4O1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmZvcm0tcHJvamVjdCBpbnB1dCB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG59XFxuXFxuLmZvcm0tYnV0dG9ucyB7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIHRyYW5zaXRpb246IGFsbCAxMDBtcyBlYXNlLWluLW91dDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZm9ybS1idXR0b25zIGJ1dHRvbntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgd2lkdGg6IDE0NHB4O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uY29uZmlybSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XFxufVxcblxcbi5jb25maXJtOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExMiwgMjExLCAxMTIpO1xcbn1cXG5cXG4uY2FuY2VsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMywgOTUsIDk1KTtcXG59XFxuXFxuLmNhbmNlbDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDQsIDcyLCA3Mik7XFxufVxcblxcbi5mb3JtLXRvZG8ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZm9ybS10b2RvIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICAgIHdpZHRoOiA1MDBweDtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICByZXNpemU6IG5vbmVcXG59XFxuXFxuLmZpZWxkLWdyb3VwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uZmllbGQtZ3JvdXAgLmZpZWxkIHtcXG4gICAgd2lkdGg6IDQ1JTtcXG59XFxuXFxuI3RvZG8tZGF0ZSwgc2VsZWN0IHtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5lcnJvciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLDRDQUFnQztBQUNwQzs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLDZKQUE2SjtBQUNqSzs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxrQkFBa0I7O0lBRWxCLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsY0FBYztJQUNkLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlOztJQUVmLGVBQWU7SUFDZixZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQ0FBaUM7O0lBRWpDLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pC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SUFDWixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgICBzcmM6IHVybCgnLi9Sb2JvdG8tUmVndWxhci50dGYnKTtcXG59XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxufVxcblxcbmh0bWwsIGJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogNzZweCAxZnIgLyAyNTBweCAxZnI7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG5cXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYWZlZjtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOWZkZjtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMnB4IDVweCBncmF5O1xcbn1cXG5cXG51bCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5wcm9qZWN0LWxpc3Qge1xcbiAgICBtYXgtaGVpZ2h0OiAyOTBweDtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgIG1hcmdpbjogNnB4IDJweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOGZjZjtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMTAwbXMgZWFzZS1pbi1vdXQ7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3Q6aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4ICNmZmZmZmY7XFxufVxcblxcbi5zZWxlY3RlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdmYmY7XFxufVxcblxcbi5wcm9qZWN0LWRlbGV0ZSwgLnRvZG8tZGVsZXRlIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5wcm9qZWN0LWRlbGV0ZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMGE0ZGE7XFxufSBcXG5cXG4udG9kby1kZWxldGU6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4ZmNmO1xcbn1cXG5cXG4ubmV3LXByb2plY3QsIC5hZGQtdG9kbyB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgbWFyZ2luOiAxNXB4IDJweDtcXG4gICAgaGVpZ2h0OiAzNnB4O1xcbiAgICB3aWR0aDogMTQ1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDhmY2Y7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDEwMG1zIGVhc2UtaW4tb3V0O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm5ldy1wcm9qZWN0OmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCAjZmZmZmZmO1xcbn1cXG5cXG4ubmV3LXByb2plY3Q6YWN0aXZlLCAuYWRkLXRvZG86YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNWY5ZjtcXG59XFxuXFxuLmN1cnJlbnQtcHJvamVjdCB7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGYxZmE7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDJweCAycHggNXB4IGdyYXk7XFxufVxcblxcbi5wcm9qZWN0LWluZm8ge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmFkZC10b2RvOmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCAjYWFhYWFhO1xcbn1cXG5cXG5ociB7XFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcblxcbi50b2RvIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBtYXJnaW46IDVweDtcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NkZTFmYTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMTAwbXMgZWFzZS1pbi1vdXQ7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjVweCA2MDBweCAxMDBweCAxMzBweCAyNXB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcbi50b2RvOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JkZDZmNTtcXG59XFxuXFxuLmNoZWNrIHtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHRyYW5zaXRpb246IGFsbCAxMDBtcyBlYXNlLWluLW91dDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi51bmNoZWNrZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG4udW5jaGVja2VkOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcXG59XFxuXFxuLmNoZWNrZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhZmVmO1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmNoZWNrZWQ6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTBiZmZmO1xcbn1cXG5cXG4ucHJpb3JpdHktY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi5wcmlvcml0eSB7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnByaW9yaXR5LWNvbnRhaW5lciAubG93IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGltZWdyZWVuO1xcbn1cXG5cXG4ucHJpb3JpdHktY29udGFpbmVyIC5tZWRpdW0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxufVxcblxcbi5wcmlvcml0eS1jb250YWluZXIgLmhpZ2gge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5kYXRlIHtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhY2NiZjA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcblxcbi5kZXNjcmlwdGlvbiB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG59XFxuXFxuLm5vdGVzIHtcXG4gICAgZ3JpZC1jb2x1bW46IDMgLyA2O1xcbn1cXG5cXG5cXG4ubW9kYWwtY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC43KTtcXG4gICAgXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3ZmJmO1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uZm9ybS1wcm9qZWN0IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmZpZWxkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbmxhYmVsIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5maWVsZCBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgICBwYWRkaW5nOiAwIDVweDtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5mb3JtLXByb2plY3QgaW5wdXQge1xcbiAgICB3aWR0aDogMzAwcHg7XFxufVxcblxcbi5mb3JtLWJ1dHRvbnMge1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMTAwbXMgZWFzZS1pbi1vdXQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZvcm0tYnV0dG9ucyBidXR0b257XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIHdpZHRoOiAxNDRweDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmNvbmZpcm0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xcbn1cXG5cXG4uY29uZmlybTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTIsIDIxMSwgMTEyKTtcXG59XFxuXFxuLmNhbmNlbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzMsIDk1LCA5NSk7XFxufVxcblxcbi5jYW5jZWw6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA0LCA3MiwgNzIpO1xcbn1cXG5cXG4uZm9ybS10b2RvIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmZvcm0tdG9kbyBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgICB3aWR0aDogNTAwcHg7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcmVzaXplOiBub25lXFxufVxcblxcbi5maWVsZC1ncm91cCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmZpZWxkLWdyb3VwIC5maWVsZCB7XFxuICAgIHdpZHRoOiA0NSU7XFxufVxcblxcbiN0b2RvLWRhdGUsIHNlbGVjdCB7XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uZXJyb3Ige1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBUb2RvID0gKCgpID0+IHtcbiAgY29uc3QgX3Byb2plY3RzID0ge1xuICAgIGRlZmF1bHQ6IFtdLFxuICB9O1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QobmFtZSkge1xuICAgIF9wcm9qZWN0c1tuYW1lXSA9IFtdO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UHJvamVjdE5hbWVzKCkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhfcHJvamVjdHMpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVsZXRlUHJvamVjdChwcm9qZWN0KSB7XG4gICAgZGVsZXRlIF9wcm9qZWN0c1twcm9qZWN0XTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9jcmVhdGVUb2RvKG5hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZSxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgZHVlRGF0ZSxcbiAgICAgIHByaW9yaXR5LFxuICAgICAgbm90ZXMsXG4gICAgICBjaGVjazogZmFsc2UsXG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFRvZG8ocHJvamVjdCwgbmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3Rlcykge1xuICAgIGNvbnN0IHRvZG8gPSBfY3JlYXRlVG9kbyhuYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzKTtcbiAgICBfcHJvamVjdHNbcHJvamVjdF0ucHVzaCh0b2RvKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFRvZG9zKHByb2plY3QpIHtcbiAgICByZXR1cm4gX3Byb2plY3RzW3Byb2plY3RdO1xuICB9XG5cbiAgZnVuY3Rpb24gY2hlY2tUb2RvKHByb2plY3QsIGluZGV4KSB7XG4gICAgY29uc3QgdG9kbyA9IF9wcm9qZWN0c1twcm9qZWN0XVtpbmRleF07XG4gICAgdG9kby5jaGVjayA9ICF0b2RvLmNoZWNrO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVsZXRlVG9kbyhwcm9qZWN0LCBpbmRleCkge1xuICAgIF9wcm9qZWN0c1twcm9qZWN0XS5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjcmVhdGVQcm9qZWN0LFxuICAgIGdldFByb2plY3ROYW1lcyxcbiAgICBkZWxldGVQcm9qZWN0LFxuICAgIGFkZFRvZG8sXG4gICAgZ2V0VG9kb3MsXG4gICAgY2hlY2tUb2RvLFxuICAgIGRlbGV0ZVRvZG8sXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBUb2RvO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBUb2RvIGZyb20gJy4vdG9kbyc7XG5cbmNvbnN0IERvbSA9ICgoKSA9PiB7XG4gIGZ1bmN0aW9uIF9jcmVhdGVQcm9qZWN0TGkobmFtZSkge1xuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsaS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XG4gICAgbGkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdCcpLmZvckVhY2goKGUpID0+IHsgZS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpOyB9KTtcbiAgICAgIGxpLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHAudGV4dENvbnRlbnQgPSBuYW1lO1xuICAgIGxpLmFwcGVuZENoaWxkKHApO1xuXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZGVsZXRlJyk7XG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ1gnO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldikgPT4ge1xuICAgICAgVG9kby5kZWxldGVQcm9qZWN0KHAudGV4dENvbnRlbnQpO1xuICAgICAgRG9tLnJlbG9hZFByb2plY3RMaXN0KCk7XG4gICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9KTtcbiAgICBsaS5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gICAgcmV0dXJuIGxpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVsb2FkUHJvamVjdExpc3QoZmlyc3QgPSBmYWxzZSkge1xuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtbGlzdCcpO1xuICAgIHByb2plY3RMaXN0LnRleHRDb250ZW50ID0gJyc7XG4gICAgY29uc3QgcHJvamVjdE5hbWVzID0gVG9kby5nZXRQcm9qZWN0TmFtZXMoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3ROYW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgbGkgPSBfY3JlYXRlUHJvamVjdExpKHByb2plY3ROYW1lc1tpXSk7XG4gICAgICBpZiAoZmlyc3QgJiYgaSA9PT0gMCkgbGkuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgIGVsc2UgaWYgKCFmaXJzdCAmJiBpID09PSBwcm9qZWN0TmFtZXMubGVuZ3RoIC0gMSkgbGkuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKGxpKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjbG9zZU1vZGFsKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1jb250YWluZXInKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbCcpLmZvckVhY2goKG4pID0+IHsgbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyB9KTtcbiAgfVxuXG4gIHJldHVybiB7IHJlbG9hZFByb2plY3RMaXN0LCBjbG9zZU1vZGFsIH07XG59KSgpO1xuXG5Eb20ucmVsb2FkUHJvamVjdExpc3QodHJ1ZSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctcHJvamVjdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY29udGFpbmVyJykuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tcHJvamVjdCcpLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10b2RvJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1jb250YWluZXInKS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS10b2RvJykuc3R5bGUuZGlzcGxheSA9ICdmbGV4Jztcbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FuY2VsJykuZm9yRWFjaCgoZSkgPT4gZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIERvbS5jbG9zZU1vZGFsKSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLXByb2plY3QnKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LW5hbWUnKTtcbiAgY29uc3QgbmV3TmFtZSA9IG5hbWVJbnB1dC52YWx1ZTtcbiAgaWYgKFRvZG8uZ2V0UHJvamVjdE5hbWVzKCkuaW5jbHVkZXMobmV3TmFtZSkpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1wcm9qZWN0IC5lcnJvcicpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICB9IGVsc2Uge1xuICAgIG5hbWVJbnB1dC52YWx1ZSA9ICcnO1xuICAgIFRvZG8uY3JlYXRlUHJvamVjdChuZXdOYW1lKTtcbiAgICBEb20ucmVsb2FkUHJvamVjdExpc3QoKTtcbiAgICBEb20uY2xvc2VNb2RhbCgpO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==