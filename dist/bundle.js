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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'Roboto';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n:root {\n    font-size: 18px;\n    font-family: 'Roboto', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\nhtml, body {\n    height: 100%;\n}\n\n.container {\n    position: relative;\n    height: 100%;\n    display: grid;\n    grid-template: 76px 1fr / 250px 1fr;\n}\n\nheader {\n    grid-column: 1 / 3;\n\n    padding: 20px;\n    background-color: #00afef;\n    color: #ffffff;\n}\n\n.sidebar {\n    padding: 20px;\n    background-color: #009fdf;\n    color: #ffffff;\n    box-shadow: inset 0 2px 5px gray;\n}\n\nul {\n    list-style: none;\n}\n\n.project-list {\n    max-height: 290px;\n    overflow-y: auto;\n}\n\n.project {\n    cursor: pointer;\n\n    margin: 6px 2px;\n    padding: 5px;\n    height: 30px;\n    width: 200px;\n    background-color: #008fcf;\n    font-weight: 600;\n    border-radius: 5px;\n    transition: all 100ms ease-in-out;\n\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.project:hover {\n    box-shadow: 0 0 5px #ffffff;\n}\n\n.selected {\n    background-color: #007fbf;\n}\n\n.project-delete, .todo-delete {\n    cursor: pointer;\n    height: 25px;\n    width: 25px;\n    background-color: inherit;\n    color: #ffffff;\n    font-size: 1rem;\n    font-weight: bold;\n    border: none;\n    border-radius: 5px;\n}\n\n.project-delete:hover {\n    background-color: #10a4da;\n} \n\n.todo-delete:hover {\n    background-color: #008fcf;\n}\n\n.new-project, .add-todo {\n    cursor: pointer;\n    margin: 15px 2px;\n    height: 36px;\n    width: 145px;\n    background-color: #008fcf;\n    color: #ffffff;\n    font-size: 1rem;\n    border: none;\n    border-radius: 10px;\n    transition: all 100ms ease-in-out;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.new-project:hover {\n    box-shadow: 0 0 5px #ffffff;\n}\n\n.new-project:active, .add-todo:active {\n    background-color: #005f9f;\n}\n\n.current-project {\n    padding: 20px;\n    background-color: #ddf1fa;\n    box-shadow: inset 2px 2px 5px gray;\n}\n\n.project-info {\n    padding: 5px;\n\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.add-todo:hover {\n    box-shadow: 0 0 5px #aaaaaa;\n}\n\nhr {\n    margin-bottom: 30px;\n}\n\n.todo {\n    cursor: pointer;\n    margin: 5px;\n    padding: 5px 10px;\n    width: fit-content;\n    background-color: #cde1fa;\n    border-radius: 5px;\n    transition: all 100ms ease-in-out;\n\n    display: grid;\n    grid-template-columns: 25px 600px 100px 150px 25px;\n    align-items: center;\n    gap: 15px;\n}\n\n.todo:hover {\n    background-color: #bdd6f5;\n}\n\n.check {\n    height: 25px;\n    width: 25px;\n    border: none;\n    border-radius: 5px;\n    transition: all 100ms ease-in-out;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.unchecked {\n    background-color: #ffffff;\n}\n\n.unchecked:hover {\n    background-color: #eeeeee;\n}\n\n.checked {\n    background-color: #00afef;\n    color: #ffffff;\n    font-size: 1rem;\n    font-weight: bold;\n}\n\n.checked:hover {\n    background-color: #10bfff;\n}\n\n.priority-container {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n}\n\n.priority {\n    height: 25px;\n    width: 25px;\n    border-radius: 5px;\n}\n\n.priority-container .low {\n    background-color: limegreen;\n}\n\n.priority-container .medium {\n    background-color: yellow;\n}\n\n.priority-container .high {\n    background-color: red;\n}\n\n.date {\n    height: 25px;\n    border: none;\n    background-color: #accbf0;\n    text-align: center;\n    font-size: 1rem;\n    border-radius: 5px;\n    outline: none;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n\n.description {\n    grid-column: 1 / 3;\n}\n\n.notes {\n    grid-column: 3 / 6;\n}\n\n.hide {\n    display: none;\n}\n\n.modal-container {\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    background-color: rgba(0, 0, 0, .7);\n    \n    display: none;\n    justify-content: center;\n    align-items: center;\n}\n\n.modal {\n    padding: 20px;\n    background-color: #007fbf;\n    color: #ffffff;\n    border-radius: 15px;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.form-project {\n    display: none;\n}\n\n.field {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n\nlabel {\n    font-weight: bold;\n}\n\n.field input[type=\"text\"] {\n    padding: 0 5px;\n    height: 1.5rem;\n    font-size: 1rem;\n    border: none;\n    border-radius: 5px;\n}\n\n.form-project input {\n    width: 300px;\n}\n\n.form-buttons {\n    margin-top: 20px;\n    transition: all 100ms ease-in-out;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.form-buttons button{\n    cursor: pointer;\n    height: 1.5rem;\n    width: 144px;\n    font-size: 1rem;\n    border: none;\n    border-radius: 5px;\n}\n\n.confirm {\n    background-color: lightgreen;\n}\n\n.confirm:hover {\n    background-color: rgb(112, 211, 112);\n}\n\n.cancel {\n    background-color: rgb(233, 95, 95);\n}\n\n.cancel:hover {\n    background-color: rgb(204, 72, 72);\n}\n\n.form-todo {\n    display: none;\n}\n\n.form-todo input[type=\"text\"] {\n    width: 500px;\n}\n\ntextarea {\n    padding: 5px;\n    font-size: 1rem;\n    border-radius: 5px;\n    resize: none\n}\n\n.field-group {\n    display: flex;\n    justify-content: space-between;\n}\n\n.field-group .field {\n    width: 45%;\n}\n\n#todo-date, select {\n    height: 1.5rem;\n    font-size: 1rem;\n    border: none;\n    border-radius: 5px;\n}\n\n.error {\n    display: none;\n    font-weight: bold;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;IACrB,4CAAgC;AACpC;;AAEA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,eAAe;IACf,6JAA6J;AACjK;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,mCAAmC;AACvC;;AAEA;IACI,kBAAkB;;IAElB,aAAa;IACb,yBAAyB;IACzB,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,yBAAyB;IACzB,cAAc;IACd,gCAAgC;AACpC;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,eAAe;;IAEf,eAAe;IACf,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,yBAAyB;IACzB,gBAAgB;IAChB,kBAAkB;IAClB,iCAAiC;;IAEjC,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,WAAW;IACX,yBAAyB;IACzB,cAAc;IACd,eAAe;IACf,iBAAiB;IACjB,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,YAAY;IACZ,YAAY;IACZ,yBAAyB;IACzB,cAAc;IACd,eAAe;IACf,YAAY;IACZ,mBAAmB;IACnB,iCAAiC;;IAEjC,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,yBAAyB;IACzB,kCAAkC;AACtC;;AAEA;IACI,YAAY;;IAEZ,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,WAAW;IACX,iBAAiB;IACjB,kBAAkB;IAClB,yBAAyB;IACzB,kBAAkB;IAClB,iCAAiC;;IAEjC,aAAa;IACb,kDAAkD;IAClD,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,iCAAiC;;IAEjC,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;IACzB,cAAc;IACd,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,QAAQ;AACZ;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,yBAAyB;IACzB,kBAAkB;IAClB,eAAe;IACf,kBAAkB;IAClB,aAAa;;IAEb,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;;AAGA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,WAAW;IACX,mCAAmC;;IAEnC,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,yBAAyB;IACzB,cAAc;IACd,mBAAmB;IACnB,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;AACZ;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,cAAc;IACd,cAAc;IACd,eAAe;IACf,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,iCAAiC;IACjC,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,cAAc;IACd,YAAY;IACZ,eAAe;IACf,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,kBAAkB;IAClB;AACJ;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,cAAc;IACd,eAAe;IACf,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,iBAAiB;AACrB","sourcesContent":["@font-face {\n    font-family: 'Roboto';\n    src: url('./Roboto-Regular.ttf');\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n:root {\n    font-size: 18px;\n    font-family: 'Roboto', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\nhtml, body {\n    height: 100%;\n}\n\n.container {\n    position: relative;\n    height: 100%;\n    display: grid;\n    grid-template: 76px 1fr / 250px 1fr;\n}\n\nheader {\n    grid-column: 1 / 3;\n\n    padding: 20px;\n    background-color: #00afef;\n    color: #ffffff;\n}\n\n.sidebar {\n    padding: 20px;\n    background-color: #009fdf;\n    color: #ffffff;\n    box-shadow: inset 0 2px 5px gray;\n}\n\nul {\n    list-style: none;\n}\n\n.project-list {\n    max-height: 290px;\n    overflow-y: auto;\n}\n\n.project {\n    cursor: pointer;\n\n    margin: 6px 2px;\n    padding: 5px;\n    height: 30px;\n    width: 200px;\n    background-color: #008fcf;\n    font-weight: 600;\n    border-radius: 5px;\n    transition: all 100ms ease-in-out;\n\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.project:hover {\n    box-shadow: 0 0 5px #ffffff;\n}\n\n.selected {\n    background-color: #007fbf;\n}\n\n.project-delete, .todo-delete {\n    cursor: pointer;\n    height: 25px;\n    width: 25px;\n    background-color: inherit;\n    color: #ffffff;\n    font-size: 1rem;\n    font-weight: bold;\n    border: none;\n    border-radius: 5px;\n}\n\n.project-delete:hover {\n    background-color: #10a4da;\n} \n\n.todo-delete:hover {\n    background-color: #008fcf;\n}\n\n.new-project, .add-todo {\n    cursor: pointer;\n    margin: 15px 2px;\n    height: 36px;\n    width: 145px;\n    background-color: #008fcf;\n    color: #ffffff;\n    font-size: 1rem;\n    border: none;\n    border-radius: 10px;\n    transition: all 100ms ease-in-out;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.new-project:hover {\n    box-shadow: 0 0 5px #ffffff;\n}\n\n.new-project:active, .add-todo:active {\n    background-color: #005f9f;\n}\n\n.current-project {\n    padding: 20px;\n    background-color: #ddf1fa;\n    box-shadow: inset 2px 2px 5px gray;\n}\n\n.project-info {\n    padding: 5px;\n\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.add-todo:hover {\n    box-shadow: 0 0 5px #aaaaaa;\n}\n\nhr {\n    margin-bottom: 30px;\n}\n\n.todo {\n    cursor: pointer;\n    margin: 5px;\n    padding: 5px 10px;\n    width: fit-content;\n    background-color: #cde1fa;\n    border-radius: 5px;\n    transition: all 100ms ease-in-out;\n\n    display: grid;\n    grid-template-columns: 25px 600px 100px 150px 25px;\n    align-items: center;\n    gap: 15px;\n}\n\n.todo:hover {\n    background-color: #bdd6f5;\n}\n\n.check {\n    height: 25px;\n    width: 25px;\n    border: none;\n    border-radius: 5px;\n    transition: all 100ms ease-in-out;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.unchecked {\n    background-color: #ffffff;\n}\n\n.unchecked:hover {\n    background-color: #eeeeee;\n}\n\n.checked {\n    background-color: #00afef;\n    color: #ffffff;\n    font-size: 1rem;\n    font-weight: bold;\n}\n\n.checked:hover {\n    background-color: #10bfff;\n}\n\n.priority-container {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n}\n\n.priority {\n    height: 25px;\n    width: 25px;\n    border-radius: 5px;\n}\n\n.priority-container .low {\n    background-color: limegreen;\n}\n\n.priority-container .medium {\n    background-color: yellow;\n}\n\n.priority-container .high {\n    background-color: red;\n}\n\n.date {\n    height: 25px;\n    border: none;\n    background-color: #accbf0;\n    text-align: center;\n    font-size: 1rem;\n    border-radius: 5px;\n    outline: none;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n\n.description {\n    grid-column: 1 / 3;\n}\n\n.notes {\n    grid-column: 3 / 6;\n}\n\n.hide {\n    display: none;\n}\n\n.modal-container {\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    background-color: rgba(0, 0, 0, .7);\n    \n    display: none;\n    justify-content: center;\n    align-items: center;\n}\n\n.modal {\n    padding: 20px;\n    background-color: #007fbf;\n    color: #ffffff;\n    border-radius: 15px;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.form-project {\n    display: none;\n}\n\n.field {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n\nlabel {\n    font-weight: bold;\n}\n\n.field input[type=\"text\"] {\n    padding: 0 5px;\n    height: 1.5rem;\n    font-size: 1rem;\n    border: none;\n    border-radius: 5px;\n}\n\n.form-project input {\n    width: 300px;\n}\n\n.form-buttons {\n    margin-top: 20px;\n    transition: all 100ms ease-in-out;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.form-buttons button{\n    cursor: pointer;\n    height: 1.5rem;\n    width: 144px;\n    font-size: 1rem;\n    border: none;\n    border-radius: 5px;\n}\n\n.confirm {\n    background-color: lightgreen;\n}\n\n.confirm:hover {\n    background-color: rgb(112, 211, 112);\n}\n\n.cancel {\n    background-color: rgb(233, 95, 95);\n}\n\n.cancel:hover {\n    background-color: rgb(204, 72, 72);\n}\n\n.form-todo {\n    display: none;\n}\n\n.form-todo input[type=\"text\"] {\n    width: 500px;\n}\n\ntextarea {\n    padding: 5px;\n    font-size: 1rem;\n    border-radius: 5px;\n    resize: none\n}\n\n.field-group {\n    display: flex;\n    justify-content: space-between;\n}\n\n.field-group .field {\n    width: 45%;\n}\n\n#todo-date, select {\n    height: 1.5rem;\n    font-size: 1rem;\n    border: none;\n    border-radius: 5px;\n}\n\n.error {\n    display: none;\n    font-weight: bold;\n}"],"sourceRoot":""}]);
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
      Dom.reloadTodoList(document.querySelector('.selected p').textContent);
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
      Dom.reloadTodoList();
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
    document.querySelector('.current-project-name').textContent = project !== undefined ? project : '';
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sdURBQWM7QUFDcEI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSx3REFBZTtBQUNyQjtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDZEQUFvQjtBQUM3QztBQUNBO0FBQ0EsaURBQWlELHVDQUF1QztBQUN4RjtBQUNBLG9CQUFvQix5QkFBeUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlEQUF5RCwyQkFBMkI7QUFDcEY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkRBQW9CLHVCQUF1QixzREFBYTtBQUM3RSxvQkFBb0IscUJBQXFCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWCxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sNkRBQW9CO0FBQzFCO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSSwyREFBa0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9Sb2JvdG8tUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcblxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5odG1sLCBib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IDc2cHggMWZyIC8gMjUwcHggMWZyO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGFmZWY7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDlmZGY7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDJweCA1cHggZ3JheTtcXG59XFxuXFxudWwge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4ucHJvamVjdC1saXN0IHtcXG4gICAgbWF4LWhlaWdodDogMjkwcHg7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgICBtYXJnaW46IDZweCAycHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDhmY2Y7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDEwMG1zIGVhc2UtaW4tb3V0O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0OmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCAjZmZmZmZmO1xcbn1cXG5cXG4uc2VsZWN0ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3ZmJmO1xcbn1cXG5cXG4ucHJvamVjdC1kZWxldGUsIC50b2RvLWRlbGV0ZSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4ucHJvamVjdC1kZWxldGU6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTBhNGRhO1xcbn0gXFxuXFxuLnRvZG8tZGVsZXRlOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOGZjZjtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LCAuYWRkLXRvZG8ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG1hcmdpbjogMTVweCAycHg7XFxuICAgIGhlaWdodDogMzZweDtcXG4gICAgd2lkdGg6IDE0NXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4ZmNmO1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHRyYW5zaXRpb246IGFsbCAxMDBtcyBlYXNlLWluLW91dDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5uZXctcHJvamVjdDpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggI2ZmZmZmZjtcXG59XFxuXFxuLm5ldy1wcm9qZWN0OmFjdGl2ZSwgLmFkZC10b2RvOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDVmOWY7XFxufVxcblxcbi5jdXJyZW50LXByb2plY3Qge1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRmMWZhO1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAycHggMnB4IDVweCBncmF5O1xcbn1cXG5cXG4ucHJvamVjdC1pbmZvIHtcXG4gICAgcGFkZGluZzogNXB4O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5hZGQtdG9kbzpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggI2FhYWFhYTtcXG59XFxuXFxuaHIge1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbn1cXG5cXG4udG9kbyB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgbWFyZ2luOiA1cHg7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjZGUxZmE7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDEwMG1zIGVhc2UtaW4tb3V0O1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1cHggNjAwcHggMTAwcHggMTUwcHggMjVweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4udG9kbzpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiZGQ2ZjU7XFxufVxcblxcbi5jaGVjayB7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMTAwbXMgZWFzZS1pbi1vdXQ7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udW5jaGVja2VkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuLnVuY2hlY2tlZDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XFxufVxcblxcbi5jaGVja2VkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYWZlZjtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jaGVja2VkOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEwYmZmZjtcXG59XFxuXFxuLnByaW9yaXR5LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4ucHJpb3JpdHkge1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5wcmlvcml0eS1jb250YWluZXIgLmxvdyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpbWVncmVlbjtcXG59XFxuXFxuLnByaW9yaXR5LWNvbnRhaW5lciAubWVkaXVtIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcbn1cXG5cXG4ucHJpb3JpdHktY29udGFpbmVyIC5oaWdoIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uZGF0ZSB7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWNjYmYwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuXFxuLmRlc2NyaXB0aW9uIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbn1cXG5cXG4ubm90ZXMge1xcbiAgICBncmlkLWNvbHVtbjogMyAvIDY7XFxufVxcblxcbi5oaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm1vZGFsLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuNyk7XFxuICAgIFxcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1vZGFsIHtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2ZiZjtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmZvcm0tcHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5maWVsZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG5sYWJlbCB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uZmllbGQgaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG4gICAgcGFkZGluZzogMCA1cHg7XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uZm9ybS1wcm9qZWN0IGlucHV0IHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbn1cXG5cXG4uZm9ybS1idXR0b25zIHtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDEwMG1zIGVhc2UtaW4tb3V0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mb3JtLWJ1dHRvbnMgYnV0dG9ue1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICB3aWR0aDogMTQ0cHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5jb25maXJtIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcXG59XFxuXFxuLmNvbmZpcm06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTEyLCAyMTEsIDExMik7XFxufVxcblxcbi5jYW5jZWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMzLCA5NSwgOTUpO1xcbn1cXG5cXG4uY2FuY2VsOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNCwgNzIsIDcyKTtcXG59XFxuXFxuLmZvcm0tdG9kbyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5mb3JtLXRvZG8gaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHJlc2l6ZTogbm9uZVxcbn1cXG5cXG4uZmllbGQtZ3JvdXAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5maWVsZC1ncm91cCAuZmllbGQge1xcbiAgICB3aWR0aDogNDUlO1xcbn1cXG5cXG4jdG9kby1kYXRlLCBzZWxlY3Qge1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmVycm9yIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsNENBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsNkpBQTZKO0FBQ2pLOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLGtCQUFrQjs7SUFFbEIsYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7O0lBRWYsZUFBZTtJQUNmLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGlDQUFpQzs7SUFFakMsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsY0FBYztJQUNkLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsY0FBYztJQUNkLGVBQWU7SUFDZixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGlDQUFpQzs7SUFFakMsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLFlBQVk7O0lBRVosYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixpQ0FBaUM7O0lBRWpDLGFBQWE7SUFDYixrREFBa0Q7SUFDbEQsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQ0FBaUM7O0lBRWpDLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGFBQWE7O0lBRWIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7OztBQUdBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLG1DQUFtQzs7SUFFbkMsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsY0FBYztJQUNkLGVBQWU7SUFDZixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQ0FBaUM7SUFDakMsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLFlBQVk7SUFDWixlQUFlO0lBQ2YsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7SUFDbEI7QUFDSjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICAgIHNyYzogdXJsKCcuL1JvYm90by1SZWd1bGFyLnR0ZicpO1xcbn1cXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiA3NnB4IDFmciAvIDI1MHB4IDFmcjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcblxcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhZmVmO1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5ZmRmO1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAycHggNXB4IGdyYXk7XFxufVxcblxcbnVsIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLnByb2plY3QtbGlzdCB7XFxuICAgIG1heC1oZWlnaHQ6IDI5MHB4O1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgbWFyZ2luOiA2cHggMnB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4ZmNmO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHRyYW5zaXRpb246IGFsbCAxMDBtcyBlYXNlLWluLW91dDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdDpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggI2ZmZmZmZjtcXG59XFxuXFxuLnNlbGVjdGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2ZiZjtcXG59XFxuXFxuLnByb2plY3QtZGVsZXRlLCAudG9kby1kZWxldGUge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnByb2plY3QtZGVsZXRlOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEwYTRkYTtcXG59IFxcblxcbi50b2RvLWRlbGV0ZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDhmY2Y7XFxufVxcblxcbi5uZXctcHJvamVjdCwgLmFkZC10b2RvIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBtYXJnaW46IDE1cHggMnB4O1xcbiAgICBoZWlnaHQ6IDM2cHg7XFxuICAgIHdpZHRoOiAxNDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOGZjZjtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMTAwbXMgZWFzZS1pbi1vdXQ7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubmV3LXByb2plY3Q6aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4ICNmZmZmZmY7XFxufVxcblxcbi5uZXctcHJvamVjdDphY3RpdmUsIC5hZGQtdG9kbzphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1ZjlmO1xcbn1cXG5cXG4uY3VycmVudC1wcm9qZWN0IHtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZjFmYTtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMnB4IDJweCA1cHggZ3JheTtcXG59XFxuXFxuLnByb2plY3QtaW5mbyB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYWRkLXRvZG86aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4ICNhYWFhYWE7XFxufVxcblxcbmhyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG59XFxuXFxuLnRvZG8ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG1hcmdpbjogNXB4O1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2RlMWZhO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHRyYW5zaXRpb246IGFsbCAxMDBtcyBlYXNlLWluLW91dDtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNXB4IDYwMHB4IDEwMHB4IDE1MHB4IDI1cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTVweDtcXG59XFxuXFxuLnRvZG86aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmRkNmY1O1xcbn1cXG5cXG4uY2hlY2sge1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDEwMG1zIGVhc2UtaW4tb3V0O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnVuY2hlY2tlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbi51bmNoZWNrZWQ6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xcbn1cXG5cXG4uY2hlY2tlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGFmZWY7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uY2hlY2tlZDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMGJmZmY7XFxufVxcblxcbi5wcmlvcml0eS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLnByaW9yaXR5IHtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4ucHJpb3JpdHktY29udGFpbmVyIC5sb3cge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaW1lZ3JlZW47XFxufVxcblxcbi5wcmlvcml0eS1jb250YWluZXIgLm1lZGl1bSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXG59XFxuXFxuLnByaW9yaXR5LWNvbnRhaW5lciAuaGlnaCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLmRhdGUge1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FjY2JmMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcblxcbi5kZXNjcmlwdGlvbiB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG59XFxuXFxuLm5vdGVzIHtcXG4gICAgZ3JpZC1jb2x1bW46IDMgLyA2O1xcbn1cXG5cXG4uaGlkZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5tb2RhbC1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjcpO1xcbiAgICBcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tb2RhbCB7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdmYmY7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5mb3JtLXByb2plY3Qge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZmllbGQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxubGFiZWwge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmZpZWxkIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICAgIHBhZGRpbmc6IDAgNXB4O1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmZvcm0tcHJvamVjdCBpbnB1dCB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG59XFxuXFxuLmZvcm0tYnV0dG9ucyB7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIHRyYW5zaXRpb246IGFsbCAxMDBtcyBlYXNlLWluLW91dDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZm9ybS1idXR0b25zIGJ1dHRvbntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgd2lkdGg6IDE0NHB4O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uY29uZmlybSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XFxufVxcblxcbi5jb25maXJtOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExMiwgMjExLCAxMTIpO1xcbn1cXG5cXG4uY2FuY2VsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMywgOTUsIDk1KTtcXG59XFxuXFxuLmNhbmNlbDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDQsIDcyLCA3Mik7XFxufVxcblxcbi5mb3JtLXRvZG8ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZm9ybS10b2RvIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICAgIHdpZHRoOiA1MDBweDtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICByZXNpemU6IG5vbmVcXG59XFxuXFxuLmZpZWxkLWdyb3VwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uZmllbGQtZ3JvdXAgLmZpZWxkIHtcXG4gICAgd2lkdGg6IDQ1JTtcXG59XFxuXFxuI3RvZG8tZGF0ZSwgc2VsZWN0IHtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5lcnJvciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IFRvZG8gPSAoKCkgPT4ge1xuICBjb25zdCBfcHJvamVjdHMgPSB7XG4gICAgZGVmYXVsdDogW1xuICAgICAge1xuICAgICAgICBuYW1lOiAnZGVmYXVsdCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIsIGFkaXBpc2ljaW5nIGVsaXQuIFVuZGUgZWl1cyB0b3RhbSBhcmNoaXRlY3RvIGV4IHF1YXMgdml0YWUgYW5pbWkgbmFtLCBvbW5pcyBldW0gdmVybyBjdW0gbGliZXJvIGVhcnVtIGxhdWRhbnRpdW0gZXhlcmNpdGF0aW9uZW0gdGVtcG9yaWJ1cyBjb25zZWN0ZXR1ciBub2Jpcy4gTGF1ZGFudGl1bSwgdG90YW0uJyxcbiAgICAgICAgZHVlRGF0ZTogJzIwMjMtMDYtMDQnLFxuICAgICAgICBwcmlvcml0eTogJ2xvdycsXG4gICAgICAgIG5vdGVzOiAnTG9yZW0gaXBzdW0sIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIE51bXF1YW0gYWxpYXMgdGVtcG9yYSBtb2RpIScsXG4gICAgICB9LFxuICAgIF0sXG4gIH07XG5cbiAgZnVuY3Rpb24gY3JlYXRlUHJvamVjdChuYW1lKSB7XG4gICAgX3Byb2plY3RzW25hbWVdID0gW107XG4gIH1cblxuICBmdW5jdGlvbiBnZXRQcm9qZWN0TmFtZXMoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKF9wcm9qZWN0cyk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWxldGVQcm9qZWN0KHByb2plY3QpIHtcbiAgICBkZWxldGUgX3Byb2plY3RzW3Byb2plY3RdO1xuICB9XG5cbiAgZnVuY3Rpb24gX2NyZWF0ZVRvZG8obmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3Rlcykge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICBkdWVEYXRlLFxuICAgICAgcHJpb3JpdHksXG4gICAgICBub3RlcyxcbiAgICAgIGNoZWNrOiBmYWxzZSxcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkVG9kbyhwcm9qZWN0LCBuYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzKSB7XG4gICAgY29uc3QgdG9kbyA9IF9jcmVhdGVUb2RvKG5hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMpO1xuICAgIF9wcm9qZWN0c1twcm9qZWN0XS5wdXNoKHRvZG8pO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0VG9kb3MocHJvamVjdCkge1xuICAgIHJldHVybiBfcHJvamVjdHNbcHJvamVjdF07XG4gIH1cblxuICBmdW5jdGlvbiBjaGVja1RvZG8ocHJvamVjdCwgaW5kZXgpIHtcbiAgICBjb25zdCB0b2RvID0gX3Byb2plY3RzW3Byb2plY3RdW2luZGV4XTtcbiAgICB0b2RvLmNoZWNrID0gIXRvZG8uY2hlY2s7XG4gIH1cblxuICBmdW5jdGlvbiBkZWxldGVUb2RvKHByb2plY3QsIGluZGV4KSB7XG4gICAgX3Byb2plY3RzW3Byb2plY3RdLnNwbGljZShpbmRleCwgMSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGNyZWF0ZVByb2plY3QsXG4gICAgZ2V0UHJvamVjdE5hbWVzLFxuICAgIGRlbGV0ZVByb2plY3QsXG4gICAgYWRkVG9kbyxcbiAgICBnZXRUb2RvcyxcbiAgICBjaGVja1RvZG8sXG4gICAgZGVsZXRlVG9kbyxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG87XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IFRvZG8gZnJvbSAnLi90b2RvJztcblxuY29uc3QgRG9tID0gKCgpID0+IHtcbiAgY29uc3QgX3Byb2plY3RTZWxlY3RBcnJheSA9IFRvZG8uZ2V0UHJvamVjdE5hbWVzKCkubWFwKChlLCBpKSA9PiBpID09PSAwKTtcblxuICBmdW5jdGlvbiBfY3JlYXRlUHJvamVjdExpKG5hbWUsIGluZGV4KSB7XG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxpLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcbiAgICBsaS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0JykuZm9yRWFjaCgoZSkgPT4geyBlLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7IH0pO1xuICAgICAgbGkuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgIF9wcm9qZWN0U2VsZWN0QXJyYXkuZm9yRWFjaCgoZSwgaSwgYSkgPT4geyBhW2ldID0gaSA9PT0gaW5kZXg7IH0pO1xuICAgICAgRG9tLnJlbG9hZFRvZG9MaXN0KG5hbWUpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICBsaS5hcHBlbmRDaGlsZChwKTtcblxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWRlbGV0ZScpO1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdYJztcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXYpID0+IHtcbiAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgaWYgKGxpLmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0ZWQnKSAmJiBfcHJvamVjdFNlbGVjdEFycmF5Lmxlbmd0aCA+IDEpIHtcbiAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgX3Byb2plY3RTZWxlY3RBcnJheVtpbmRleCArIDFdID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfcHJvamVjdFNlbGVjdEFycmF5W2luZGV4IC0gMV0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBfcHJvamVjdFNlbGVjdEFycmF5LnNwbGljZShpbmRleCwgMSk7XG4gICAgICBUb2RvLmRlbGV0ZVByb2plY3QobmFtZSk7XG4gICAgICBEb20ucmVsb2FkUHJvamVjdExpc3QoKTtcbiAgICAgIERvbS5yZWxvYWRUb2RvTGlzdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0ZWQgcCcpLnRleHRDb250ZW50KTtcbiAgICB9KTtcbiAgICBsaS5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gICAgcmV0dXJuIGxpO1xuICB9XG5cbiAgZnVuY3Rpb24gX2NyZWF0ZVRvZG9MaSh0b2RvLCBwcm9qZWN0LCBpbmRleCkge1xuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsaS5jbGFzc0xpc3QuYWRkKCd0b2RvJyk7XG5cbiAgICBjb25zdCBjaGVja0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNoZWNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NoZWNrJyk7XG4gICAgY2hlY2tCdXR0b24uY2xhc3NMaXN0LmFkZCh0b2RvLmNoZWNrID8gJ2NoZWNrZWQnIDogJ3VuY2hlY2tlZCcpO1xuICAgIGlmICh0b2RvLmNoZWNrKSBjaGVja0J1dHRvbi50ZXh0Q29udGVudCA9ICdcXHVEODNEJztcbiAgICBjaGVja0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgVG9kby5jaGVja1RvZG8ocHJvamVjdCwgaW5kZXgpO1xuICAgICAgY2hlY2tCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnY2hlY2tlZCcpO1xuICAgICAgY2hlY2tCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgndW5jaGVja2VkJyk7XG4gICAgICBjaGVja0J1dHRvbi50ZXh0Q29udGVudCA9IGNoZWNrQnV0dG9uLnRleHRDb250ZW50ID09PSAnJyA/ICdcXHUyNzEzJyA6ICcnO1xuICAgIH0pO1xuICAgIGxpLmFwcGVuZENoaWxkKGNoZWNrQnV0dG9uKTtcblxuICAgIGNvbnN0IHRvZG9OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRvZG9OYW1lLmNsYXNzTGlzdC5hZGQoJ3RvZG8tbmFtZScpO1xuICAgIHRvZG9OYW1lLnRleHRDb250ZW50ID0gdG9kby5uYW1lO1xuICAgIGxpLmFwcGVuZENoaWxkKHRvZG9OYW1lKTtcblxuICAgIGNvbnN0IHByaW9yaXR5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJpb3JpdHlDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktY29udGFpbmVyJyk7XG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwLnRleHRDb250ZW50ID0gJ1ByaW9yaXR5OiAnO1xuICAgIHByaW9yaXR5Q29udGFpbmVyLmFwcGVuZENoaWxkKHApO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHknKTtcbiAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKHRvZG8ucHJpb3JpdHkpO1xuICAgIHByaW9yaXR5Q29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcbiAgICBsaS5hcHBlbmRDaGlsZChwcmlvcml0eUNvbnRhaW5lcik7XG5cbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkdWVEYXRlLmNsYXNzTGlzdC5hZGQoJ2RhdGUnKTtcbiAgICBkdWVEYXRlLnR5cGUgPSAnZGF0ZSc7XG4gICAgZHVlRGF0ZS5yZWFkT25seSA9IHRydWU7XG4gICAgZHVlRGF0ZS52YWx1ZSA9IHRvZG8uZHVlRGF0ZTtcbiAgICBsaS5hcHBlbmRDaGlsZChkdWVEYXRlKTtcblxuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd0b2RvLWRlbGV0ZScpO1xuICAgIGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdYJztcbiAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIFRvZG8uZGVsZXRlVG9kbyhwcm9qZWN0LCBpbmRleCk7XG4gICAgICBEb20ucmVsb2FkVG9kb0xpc3QoKTtcbiAgICB9KTtcbiAgICBsaS5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbicpO1xuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGRlc2NyaXB0aW9uVGl0bGUudGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb246JztcbiAgICBkZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvblRpdGxlKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZGVzY3JpcHRpb25UZXh0LnRleHRDb250ZW50ID0gdG9kby5kZXNjcmlwdGlvbjtcbiAgICBkZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvblRleHQpO1xuICAgIGxpLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICAgIGNvbnN0IG5vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbm90ZXMuY2xhc3NMaXN0LmFkZCgnbm90ZXMnKTtcbiAgICBub3Rlcy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgY29uc3Qgbm90ZXNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBub3Rlc1RpdGxlLnRleHRDb250ZW50ID0gJ05vdGVzOic7XG4gICAgbm90ZXMuYXBwZW5kQ2hpbGQobm90ZXNUaXRsZSk7XG4gICAgY29uc3Qgbm90ZXNUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIG5vdGVzVGV4dC50ZXh0Q29udGVudCA9IHRvZG8ubm90ZXM7XG4gICAgbm90ZXMuYXBwZW5kQ2hpbGQobm90ZXNUZXh0KTtcbiAgICBsaS5hcHBlbmRDaGlsZChub3Rlcyk7XG5cbiAgICBsaS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcbiAgICAgIG5vdGVzLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBsaTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbG9hZFByb2plY3RMaXN0KCkge1xuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtbGlzdCcpO1xuICAgIHByb2plY3RMaXN0LnRleHRDb250ZW50ID0gJyc7XG4gICAgY29uc3QgcHJvamVjdE5hbWVzID0gVG9kby5nZXRQcm9qZWN0TmFtZXMoKTtcbiAgICBpZiAocHJvamVjdE5hbWVzLmxlbmd0aCA+IF9wcm9qZWN0U2VsZWN0QXJyYXkubGVuZ3RoKSB7XG4gICAgICBfcHJvamVjdFNlbGVjdEFycmF5LnB1c2godHJ1ZSk7XG4gICAgICBfcHJvamVjdFNlbGVjdEFycmF5LmZvckVhY2goKGUsIGksIGEpID0+IHsgYVtpXSA9IGkgPT09IHByb2plY3ROYW1lcy5sZW5ndGggLSAxOyB9KTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGxpID0gX2NyZWF0ZVByb2plY3RMaShwcm9qZWN0TmFtZXNbaV0sIGkpO1xuICAgICAgaWYgKF9wcm9qZWN0U2VsZWN0QXJyYXlbaV0pIHtcbiAgICAgICAgbGkuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgIH1cbiAgICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKGxpKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjbG9zZU1vZGFsKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1jb250YWluZXInKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbCcpLmZvckVhY2goKG4pID0+IHsgbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbG9hZFRvZG9MaXN0KHByb2plY3QpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC1wcm9qZWN0LW5hbWUnKS50ZXh0Q29udGVudCA9IHByb2plY3QgIT09IHVuZGVmaW5lZCA/IHByb2plY3QgOiAnJztcbiAgICBjb25zdCB0b2RvTGlzdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1saXN0Jyk7XG4gICAgdG9kb0xpc3RFbGVtZW50LnRleHRDb250ZW50ID0gJyc7XG4gICAgY29uc3QgdG9kb0xpc3QgPSBUb2RvLmdldFByb2plY3ROYW1lcygpLmluY2x1ZGVzKHByb2plY3QpID8gVG9kby5nZXRUb2Rvcyhwcm9qZWN0KSA6IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGxpID0gX2NyZWF0ZVRvZG9MaSh0b2RvTGlzdFtpXSwgcHJvamVjdCwgaSk7XG4gICAgICB0b2RvTGlzdEVsZW1lbnQuYXBwZW5kQ2hpbGQobGkpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7IHJlbG9hZFByb2plY3RMaXN0LCByZWxvYWRUb2RvTGlzdCwgY2xvc2VNb2RhbCB9O1xufSkoKTtcblxuRG9tLnJlbG9hZFByb2plY3RMaXN0KCk7XG5Eb20ucmVsb2FkVG9kb0xpc3QoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdGVkIHAnKS50ZXh0Q29udGVudCk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctcHJvamVjdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY29udGFpbmVyJykuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tcHJvamVjdCcpLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LW5hbWUnKS5mb2N1cygpO1xufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdG9kbycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY29udGFpbmVyJykuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tdG9kbycpLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLW5hbWUnKS5mb2N1cygpO1xufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYW5jZWwnKS5mb3JFYWNoKChlKSA9PiBlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgRG9tLmNsb3NlTW9kYWwpKTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tcHJvamVjdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbmFtZScpO1xuICBjb25zdCBuZXdOYW1lID0gbmFtZUlucHV0LnZhbHVlO1xuICBpZiAoVG9kby5nZXRQcm9qZWN0TmFtZXMoKS5pbmNsdWRlcyhuZXdOYW1lKSkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLXByb2plY3QgLmVycm9yJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIH0gZWxzZSB7XG4gICAgbmFtZUlucHV0LnZhbHVlID0gJyc7XG4gICAgVG9kby5jcmVhdGVQcm9qZWN0KG5ld05hbWUpO1xuICAgIERvbS5yZWxvYWRQcm9qZWN0TGlzdCgpO1xuICAgIERvbS5yZWxvYWRUb2RvTGlzdChuZXdOYW1lKTtcbiAgICBEb20uY2xvc2VNb2RhbCgpO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==