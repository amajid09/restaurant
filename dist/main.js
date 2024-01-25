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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/image-1.png */ \"./src/assets/image-1.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/image-3.png */ \"./src/assets/image-3.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/image-2.png */ \"./src/assets/image-2.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n    --primary: #F0F8FF;\n    --font-color-primary: black;\n    --secondary: #676986;\n}\n\nbody{\n    margin: 0;\n    padding: 0;\n    background-color: #DFF9E0;\n}\n.content{\n    width: 100%;\n    height: 100vh;\n}\n.navbar ul{\n    display: flex;\n    list-style-type: none;\n    gap: 20px; \n    padding-left: 10px;\n    \n}\n.navbar > ul > li a{\n    text-decoration: none;\n    color: black;\n}\n.header-wrapper{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 50%;\n    background-color:#F0F8FF;\n    padding:0 30px;\n}\n.logo a{\n    color: black;\n    text-decoration: none;\n}\n.header{\n    display: flex;\n    justify-content: center;\n    margin-top: 1rem;\n    width: 100%;\n}\n\n\n.first-circle, .second-circle{\n    width:160px;\n    height: 160px;\n    background-color: #676986;\n    border-radius: 10000px;\n}\n\n.first-container p, .second-container p{\n    font-size: 50px;\n    font-weight: bold;\n}\n.first-container, .second-container{\n    display: flex;\n    gap: 25px;\n}\n.middle-section{\n    height: 100%;\n    display: flex;\n    justify-content: center;\n}\n\n.middle-wrapper{\n    width: 75%;\n    height: 100%;\n    display: grid;\n    grid-template-columns: 1fr repeat(2, 2fr) 2fr;\n}\n\n.first-container{\n    grid-column: 2/4;\n    grid-row: 1/3;\n}\n.second-container{\n    \n    grid-column:3/6;\n    grid-row: 2/3;\n}\n\n.middle-section{\n    margin-top: 80px;\n}\n.first-text, .second-text{\n    visibility: hidden;\n    opacity: 0;\n    transition: visibility 500ms ease-out, opacity 500ms ease-in;\n}\n.first-circle:hover + .first-text, .second-circle:hover + .second-text{\n    visibility: visible;\n    opacity: 1;\n}\n/****Menu page*****/\n.body{\n    width: 100%;\n    position: relative;\n}\n\n.body{\n    display: grid;\n    grid-template-rows: 3fr 2fr 1fr;\n    gap: 50px;\n}\n\n\n.top-container{\n    margin-top: 30px;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n}\n\n.menu-picture, .menu-description{\n    height: 100%; \n    width: 40%;\n}\n.menu-description{\n    background-color: var(--secondary);\n    color: white;\n}\n.text-wrapper{\n    display: flex;\n    width: 100%;\n    justify-content: center;\n}\n.descri{\n    width: 30rem; \n}\n\n.menu-description p{\n    font-size: 25px;\n    text-align: center;\n}\n\n.menu-description h2{\n    text-align: center;\n    font-size:45px;\n}\n.menu-picture{\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n    background-size: cover;\n    background-position: center center;\n    height: 40rem\n}\n.add-menu-wrapper{\n    margin-top: 40px;\n    display: flex;\n    width: 100%;\n    justify-content: center;\n}\n.add-menu{\n    background-color: var(--font-color-primary);\n    padding: 10px 0;\n    width: 50%;\n}\n\n.slider{\n    display: flex;\n    gap: 50px;\n    align-items: center;\n}\n.images{\n    height: 70%;\n    background-color: var(--primary); \n    flex: 1;\n}\n.images:nth-child(1) {\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n    background-size: cover;\n}\n.images{\n    padding: 3rem 0;\n    background-position: center center;\n}\n.images:nth-child(2) {\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n    background-size: cover;\n}\n.images:nth-child(3) {\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});\n    background-size: cover;\n}\n\n.images:nth-child(4) {\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n    background-size: cover;\n}\n\n.footer{\n    display: flex;\n    background-color: var(--secondary);\n    color: white;\n    font-size: 25px;\n    align-items: flex-end;\n}\n.footer p{\n    margin-left: 10rem;\n}\n\n\n/* Contact Page */\n\n\n.contact-wrapper-body{\n    display:flex;\n    flex-direction: column;\n    row-gap: 10vw;;\n}\n\n.contact-body{\n    /* height: 2rem; */\n    background-color: var(--primary);\n}\n\n\n.contact-description p {\n    font-size: 30px;\n    font-weight: bold;\n}\n\n.contact-body {\n    padding: 5rem 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.contact-us, .contact-number{\n    text-align: center;\n}\n\n/*             About Page  */\n.about-body{\n    background-color: var(--primary);\n    display: flex;\n    justify-content: center;\n}\n\n.about-description{\n    padding: 5rem 0;\n    width: 40rem;\n\n}\n\n\n.about-wrapper-body{\n    display:flex;\n    flex-direction: column;\n    row-gap: 12vw;\n}\n\n.quote{\n    display: flex;\n    justify-content: flex-end;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restuarant/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restuarant/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restuarant/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restuarant/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restuarant/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restuarant/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restuarant/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restuarant/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restuarant/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restuarant/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restuarant/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/about/about.js":
/*!****************************!*\
  !*** ./src/about/about.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   about: () => (/* binding */ about)\n/* harmony export */ });\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../footer */ \"./src/footer.js\");\n/* harmony import */ var _head_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../head/header */ \"./src/head/header.js\");\n/* harmony import */ var _body__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./body */ \"./src/about/body.js\");\n\n\n\n\nclass AboutPage{\n    constructor() {\n        this.aboutWrapper = document.createElement('div');\n        this.aboutWrapper.className = 'about-wrapper-body';\n        this.aboutPage = [_head_header__WEBPACK_IMPORTED_MODULE_1__.head, _body__WEBPACK_IMPORTED_MODULE_2__.body, _footer__WEBPACK_IMPORTED_MODULE_0__.footer]\n    }\n\n    addToAboutPage() {\n        for (const about of this.aboutPage) {\n            this.aboutWrapper.appendChild(about);\n        }\n    }\n    getAboutPage() {\n        return this.aboutWrapper;\n    }   \n}\n\nlet about = new AboutPage();\n\n\n\n\n//# sourceURL=webpack://restuarant/./src/about/about.js?");

/***/ }),

/***/ "./src/about/body.js":
/*!***************************!*\
  !*** ./src/about/body.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   body: () => (/* binding */ body)\n/* harmony export */ });\nclass Body{\n    constructor() {\n        this.body = document.createElement('div');\n        this.body.className = 'about-body';\n        this.aboutDescription = document.createElement('div');\n        this.aboutDescription.className = 'about-description';\n\n    }\n\n    addDescription() {\n        let details = [\n            { class: '', description: 'Croissant Agency limited pty.' },\n            { class: '', description: \"We love and cherish croissants, like I’m addicted to it. Our goals and mission is to start a movement to help someone one croissant at a time. One croissant can make someone’s day. As the say goes ‘Croissant’.\" },\n            {class: 'quote', description: \"~Me\"},\n        ]\n\n        for (let i = 0; i < details.length; i++){\n            const p = document.createElement('p');\n            p.className = details[i].class;\n            p.textContent = details[i].description;\n            this.aboutDescription.appendChild(p);\n        }\n        this.body.appendChild(this.aboutDescription);\n    }\n    getBody() {\n        return this.body;\n    }\n}\n\n\nlet bodyPage = new Body();\nbodyPage.addDescription();\n\nlet body = bodyPage.getBody();\n\n\n\n\n//# sourceURL=webpack://restuarant/./src/about/body.js?");

/***/ }),

/***/ "./src/contact/body.js":
/*!*****************************!*\
  !*** ./src/contact/body.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   body: () => (/* binding */ body)\n/* harmony export */ });\nclass Body{\n    constructor() {\n        this.body = document.createElement('div');\n        this.body.className = 'contact-body';\n        this.contactDescription = document.createElement('div');\n        this.contactDescription.className = 'contact-description';\n\n    }\n    addContactDescription() {\n        this._addText();\n        this.body.appendChild(this.contactDescription);\n    }\n    _addText() {\n        let contactDetails = [\n            { class: '', details: 'croissant@gmail.com' },\n            { class: 'contact-number', details: '+345 766 croissant' },\n            { class: 'contact-us', details: 'Contact Us'}\n        ]\n        for (let i = 0; i < 3; i++) {\n            const p = document.createElement('p');\n            p.className = contactDetails[i].class;\n            p.textContent = contactDetails[i].details;\n            this.contactDescription.appendChild(p);\n        }\n    }\n\n\n    getBody() {\n        return this.body;\n    }\n}\n\nlet bodyObj = new Body();\n\nbodyObj.addContactDescription();\nlet body = bodyObj.getBody();\n\n\n\n//# sourceURL=webpack://restuarant/./src/contact/body.js?");

/***/ }),

/***/ "./src/contact/contact.js":
/*!********************************!*\
  !*** ./src/contact/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   contact: () => (/* binding */ contact)\n/* harmony export */ });\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../footer */ \"./src/footer.js\");\n/* harmony import */ var _head_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../head/header */ \"./src/head/header.js\");\n/* harmony import */ var _body__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./body */ \"./src/contact/body.js\");\n\n\n\n\nclass Contact{\n    constructor(head, body, footer) {\n        this.contactWrapper = document.createElement('div');\n        this.contactWrapper.className = 'contact-wrapper-body';\n        this.contactPage = [head, body, footer]\n    }\n\n    addContacts() {\n        for (let i = 0; i < this.contactPage.length; i++) {\n            let contact = this.contactPage[i];\n            console.log(this.contactWrapper)\n            this.contactWrapper.appendChild(contact);\n        }\n    }\n    getContact() {\n        return this.contactWrapper;\n    }   \n}\n\nlet contact = new Contact(_head_header__WEBPACK_IMPORTED_MODULE_1__.head, _body__WEBPACK_IMPORTED_MODULE_2__.body, _footer__WEBPACK_IMPORTED_MODULE_0__.footer);\n\n\n\n//# sourceURL=webpack://restuarant/./src/contact/contact.js?");

/***/ }),

/***/ "./src/content.js":
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   content: () => (/* binding */ content)\n/* harmony export */ });\nclass Content{\n    constructor() {\n        this.content = document.getElementsByClassName('content')[0]; \n    }\n    addContent(div) {\n        this.content.appendChild(div);\n    }\n    addContentHtml(html) {\n        this.content.innerHTML = html;\n    }\n    getContent() {\n        return this.content;\n    }\n    clearContent() {\n        while(this.content.children.length > 0) {\n            console.log('here')\n            this.content.removeChild(this.content.children[0])\n        }\n        console.log(this.content.children.length)\n    }\n}\nlet content = new Content();\n\n\n//# sourceURL=webpack://restuarant/./src/content.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   footer: () => (/* binding */ footer)\n/* harmony export */ });\nclass Footer {\n    constructor() {\n        this.foooter = document.createElement('div');\n        this.foooter.className = 'footer';\n    }\n    addText() {\n        const p = document.createElement('p');\n        p.textContent = 'Copyright@2024';\n        this.foooter.appendChild(p);\n    }\n    getFooter() {\n        return this.foooter;\n    }\n}\n\n\nlet footerObj = new Footer();\n\nfooterObj.addText();\n\nlet footer = footerObj.getFooter();\n\n\n\n//# sourceURL=webpack://restuarant/./src/footer.js?");

/***/ }),

/***/ "./src/head/header.js":
/*!****************************!*\
  !*** ./src/head/header.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   head: () => (/* binding */ head)\n/* harmony export */ });\n/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logo */ \"./src/head/logo.js\");\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar */ \"./src/head/navbar.js\");\n\n\nclass Header {\n    constructor(className) {\n        this.header = document.createElement('div');\n        this.header.className = className;\n        this.header_wrapper = document.createElement('div');\n        this.header_wrapper.className = 'header-wrapper';\n    }\n\n    addLogoAndNavbar() {\n        this.header_wrapper.appendChild(_logo__WEBPACK_IMPORTED_MODULE_0__.logo);\n        this.header_wrapper.appendChild(_navbar__WEBPACK_IMPORTED_MODULE_1__.nav);\n    }\n    addHeadWrapper() {\n        this.header.appendChild(this.header_wrapper);\n    }\n    getHeader() {\n        return this.header;\n    }\n}\nlet header = new Header('header');\nheader.addLogoAndNavbar();\nheader.addHeadWrapper();\nlet head = header.getHeader();\n\n\n\n//# sourceURL=webpack://restuarant/./src/head/header.js?");

/***/ }),

/***/ "./src/head/logo.js":
/*!**************************!*\
  !*** ./src/head/logo.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   logo: () => (/* binding */ logo)\n/* harmony export */ });\nclass Logo {\n    constructor() {  \n        this.logo = document.createElement('div');\n        this.logo.className = 'logo';\n    }\n    setAnchor() {\n        const a = document.createElement('a');\n        a.href = \"#\"\n        a.className = 'link'\n        a.textContent = 'Croissant';\n        this.logo.appendChild(a);\n        return a;\n    }\n    getLogo() {\n        return this.logo;\n   } \n}\n\n\nlet logoObj = new Logo();\nlogoObj.setAnchor();\nlet logo = logoObj.getLogo();\n\n\n//# sourceURL=webpack://restuarant/./src/head/logo.js?");

/***/ }),

/***/ "./src/head/navbar.js":
/*!****************************!*\
  !*** ./src/head/navbar.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   nav: () => (/* binding */ nav)\n/* harmony export */ });\nclass NavBar {\n    constructor(className) {\n        this.nav = document.createElement('nav');\n        this.nav.className = className;\n        this.ul = document.createElement('ul');\n    }\n\n    populateNavBar() {\n        const menuBar = ['Menu', 'Contact Us', 'About Us'];\n        for (let i = 0; i < menuBar.length; i++) {\n            let a = document.createElement('a');\n            a.className = 'link';\n            let li = document.createElement('li');\n            a.textContent = menuBar[i];\n            a.href = '#' + menuBar[i].split(' ')[0];\n            li.appendChild(a);\n            this.ul.appendChild(li);\n        }\n        this.nav.appendChild(this.ul);\n    }\n\n    getNav() {\n        return this.nav;\n    }\n\n}\n\nlet navbar = new NavBar('navbar');\nnavbar.populateNavBar();\nlet nav = navbar.getNav()\n\n\n\n//# sourceURL=webpack://restuarant/./src/head/navbar.js?");

/***/ }),

/***/ "./src/home/body/body.js":
/*!*******************************!*\
  !*** ./src/home/body/body.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   body: () => (/* binding */ body)\n/* harmony export */ });\n/* harmony import */ var _circle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./circle */ \"./src/home/body/circle.js\");\n\nclass Body{\n    constructor() {\n        this.bodyWrapper = document.createElement('div');\n        this.bodyWrapper.className = 'middle-wrapper';\n        this.bodySection = document.createElement('div');\n        this.bodySection.className = 'middle-section';\n    }\n\n    addBodyWrapper() {\n        \n        let first = new _circle__WEBPACK_IMPORTED_MODULE_0__.Circle('first');\n        let second = new _circle__WEBPACK_IMPORTED_MODULE_0__.Circle('second');\n        \n        first.addText('I fell in love');\n        second.addText('with the Croissant');\n        first.addContainer(first.getCircle());\n        first.addContainer(first.getText())\n        \n        second.addContainer(second.getCircle());\n        second.addContainer(second.getText());\n        \n        this.bodyWrapper.appendChild(first.getContainer());\n        this.bodyWrapper.appendChild(second.getContainer());\n    }\n\n    getBodyWrapper() {\n        return this.bodyWrapper;\n    }\n    \n    addBodySection(element) {\n        this.bodySection.appendChild(element);\n    }\n    getBody() {\n        return this.bodySection;\n    }\n\n}\n\nlet bodySection = new Body();\n\nbodySection.addBodyWrapper();\nbodySection.addBodySection(bodySection.getBodyWrapper());\n\nlet body = bodySection.getBody();\n\n\n\n\n//# sourceURL=webpack://restuarant/./src/home/body/body.js?");

/***/ }),

/***/ "./src/home/body/circle.js":
/*!*********************************!*\
  !*** ./src/home/body/circle.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Circle: () => (/* binding */ Circle)\n/* harmony export */ });\nclass Circle{\n    constructor(prefix) {\n        this.container = document.createElement('div');\n        this.container.className = prefix + '-container';\n        this.circle = document.createElement('div');\n        this.circle.className = prefix + '-circle';\n        this.text = document.createElement('p');\n        this.text.className = prefix + '-text';\n    }\n    addText(text) {\n        this.text.textContent = text;\n    }\n    addContainer(element) {\n        this.container.appendChild(element);\n    }\n\n    getContainer() {\n        return this.container;\n    }\n    getCircle() {\n        return this.circle;\n    }\n    getText() {\n        return this.text;\n    }\n}\n\n\n\n//# sourceURL=webpack://restuarant/./src/home/body/circle.js?");

/***/ }),

/***/ "./src/home/home.js":
/*!**************************!*\
  !*** ./src/home/home.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   home: () => (/* binding */ home)\n/* harmony export */ });\n/* harmony import */ var _head_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../head/header */ \"./src/head/header.js\");\n/* harmony import */ var _body_body__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./body/body */ \"./src/home/body/body.js\");\n\n\n\n\nclass Home{\n    constructor() {\n        this.home = [_head_header__WEBPACK_IMPORTED_MODULE_0__.head, _body_body__WEBPACK_IMPORTED_MODULE_1__.body];\n    }\n    getHome() {\n        return this.home \n    }\n}\n\nconst home = new Home().getHome();\n\n\n\n\n//# sourceURL=webpack://restuarant/./src/home/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content */ \"./src/content.js\");\n/* harmony import */ var _home_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home */ \"./src/home/home.js\");\n/* harmony import */ var _menu_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu/menu */ \"./src/menu/menu.js\");\n/* harmony import */ var _about_about__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about */ \"./src/about/about.js\");\n/* harmony import */ var _contact_contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact/contact */ \"./src/contact/contact.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst Routes = {\n    '/': () => {\n        _content__WEBPACK_IMPORTED_MODULE_1__.content.clearContent();\n        for (const child of _home_home__WEBPACK_IMPORTED_MODULE_2__.home) {\n            _content__WEBPACK_IMPORTED_MODULE_1__.content.addContent(child);\n        }\n    }, \n    '/about':() =>  {\n        _content__WEBPACK_IMPORTED_MODULE_1__.content.clearContent();\n        _about_about__WEBPACK_IMPORTED_MODULE_4__.about.addToAboutPage();\n        console.log(_content__WEBPACK_IMPORTED_MODULE_1__.content)\n        _content__WEBPACK_IMPORTED_MODULE_1__.content.addContent(_about_about__WEBPACK_IMPORTED_MODULE_4__.about.getAboutPage());\n    }\n     ,\n    '/contact': () =>  {\n        _content__WEBPACK_IMPORTED_MODULE_1__.content.clearContent();\n        _contact_contact__WEBPACK_IMPORTED_MODULE_5__.contact.addContacts(); \n        _content__WEBPACK_IMPORTED_MODULE_1__.content.addContent(_contact_contact__WEBPACK_IMPORTED_MODULE_5__.contact.getContact());\n    },\n    '/menu': () =>  {\n        _content__WEBPACK_IMPORTED_MODULE_1__.content.clearContent();\n        for (const child of _menu_menu__WEBPACK_IMPORTED_MODULE_3__.menu) {\n            _content__WEBPACK_IMPORTED_MODULE_1__.content.addContent(child);\n        }\n    } \n}\nRoutes[location.pathname.replace('dist/index.html', '')]()\nconst links = document.getElementsByClassName('link');\nArray.from(links).forEach(link => {\n    link.addEventListener('click', (event) => {\n        event.preventDefault();\n        console.log('here')\n\n        const hashLink = `/${link.href.split('#')[1]}`.toLowerCase()\n        console.log(hashLink)\n        Routes[hashLink]();\n    }) \n});\nconsole.log(location.hash);\n// displayHomePage();\n// displayMenuPage();\n// displayContactPage();\n// displayAboutPage();\n\n\n//# sourceURL=webpack://restuarant/./src/index.js?");

/***/ }),

/***/ "./src/menu/body.js":
/*!**************************!*\
  !*** ./src/menu/body.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   body: () => (/* binding */ body)\n/* harmony export */ });\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../footer */ \"./src/footer.js\");\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slider */ \"./src/menu/slider.js\");\n/* harmony import */ var _top__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./top */ \"./src/menu/top.js\");\n\n\n\n\nclass Body{\n    constructor(top, slider, footer) {\n        this.body = document.createElement('div');\n        this.body.className = 'body';\n        this.body.appendChild(top);\n        this.body.appendChild(slider); \n    }\n    getBody() {\n        return this.body;\n    }\n}\n\nlet body = new Body(_top__WEBPACK_IMPORTED_MODULE_2__.top, _slider__WEBPACK_IMPORTED_MODULE_1__.slider, _footer__WEBPACK_IMPORTED_MODULE_0__.footer).getBody();\n\n\n\n\n//# sourceURL=webpack://restuarant/./src/menu/body.js?");

/***/ }),

/***/ "./src/menu/menu.js":
/*!**************************!*\
  !*** ./src/menu/menu.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menu: () => (/* binding */ menu)\n/* harmony export */ });\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../footer */ \"./src/footer.js\");\n/* harmony import */ var _head_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../head/header */ \"./src/head/header.js\");\n/* harmony import */ var _body__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./body */ \"./src/menu/body.js\");\n\n\n\nclass MenuPage {\n    constructor() {\n        this.menuPage = [_head_header__WEBPACK_IMPORTED_MODULE_1__.head, _body__WEBPACK_IMPORTED_MODULE_2__.body, _footer__WEBPACK_IMPORTED_MODULE_0__.footer]\n    }\n\n    getMenu() {\n        return this.menuPage;\n    }\n}\n\nconst menuPage = new MenuPage();\n\nconst menu = menuPage.getMenu();\n\n\n\n//# sourceURL=webpack://restuarant/./src/menu/menu.js?");

/***/ }),

/***/ "./src/menu/slider.js":
/*!****************************!*\
  !*** ./src/menu/slider.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   slider: () => (/* binding */ slider)\n/* harmony export */ });\nclass Slider{\n    constructor() {\n        this.slider = document.createElement('div');\n        this.slider.className = 'slider';\n    }\n\n    addImage() {\n        const image = document.createElement('div');\n        image.className = 'images';\n        this.slider.appendChild(image);\n    }\n    getSlider() {\n        return this.slider;\n    }\n}\n\nlet sliderObj = new Slider();\nfor (let i = 0; i < 4; i++){\n    sliderObj.addImage();\n}\n\nlet slider = sliderObj.getSlider();\n\n\n\n//# sourceURL=webpack://restuarant/./src/menu/slider.js?");

/***/ }),

/***/ "./src/menu/top.js":
/*!*************************!*\
  !*** ./src/menu/top.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   top: () => (/* binding */ top)\n/* harmony export */ });\nclass Top {\n    constructor() {\n        this.top = document.createElement('div');\n        this.top.className = 'top-container';\n        \n        this.menuDescription = document.createElement('div');\n        this.menuDescription.className = 'menu-description';\n    }\n    addMenuPicture() {\n        const menu_picture = document.createElement('div');\n        menu_picture.className = 'menu-picture';\n        this.top.appendChild(menu_picture);\n     }\n    addMenuDescription() {\n        this.addH2(); \n        this.addTextWrapper();       \n        this.menuCart();\n        this.top.appendChild(this.menuDescription);\n\n    }\n    addH2() {\n        const h2 = document.createElement('h2');\n        h2.textContent = 'Almond Croissant';\n        this.menuDescription.appendChild(h2);\n    }\n    addTextWrapper() {\n        const textWrapper = document.createElement('div');\n        textWrapper.className = 'text-wrapper';\n\n        const p = document.createElement('p');\n        p.className = 'descri';\n        p.textContent = 'Classic croissant dough rolled with housemade almond frangipane then baked, giving it a delicate almond flavour. Topped with flaked almonds and icing sugar.'\n        textWrapper.appendChild(p);\n        this.menuDescription.appendChild(textWrapper);\n    }\n    menuCart() {\n        const addMenuWrapper = document.createElement('div')\n        addMenuWrapper.className = 'add-menu-wrapper';\n\n        const addMenu = document.createElement('div');\n        addMenu.className = 'add-menu';\n\n        const p = document.createElement('p');\n        p.textContent = 'Add to menu';\n        addMenu.appendChild(p);\n        addMenuWrapper.appendChild(addMenu);\n        this.menuDescription.appendChild(addMenuWrapper);\n\n    }\n    getTop() {\n        return this.top;\n    }\n}\n\nlet topContainer = new Top();\ntopContainer.addMenuPicture();\ntopContainer.addMenuDescription();\n\nlet top = topContainer.getTop();\n\n\n\n\n\n//# sourceURL=webpack://restuarant/./src/menu/top.js?");

/***/ }),

/***/ "./src/assets/image-1.png":
/*!********************************!*\
  !*** ./src/assets/image-1.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3a9dffb282ef2f827dfb.png\";\n\n//# sourceURL=webpack://restuarant/./src/assets/image-1.png?");

/***/ }),

/***/ "./src/assets/image-2.png":
/*!********************************!*\
  !*** ./src/assets/image-2.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3d53d3f5fec8ff6b55ae.png\";\n\n//# sourceURL=webpack://restuarant/./src/assets/image-2.png?");

/***/ }),

/***/ "./src/assets/image-3.png":
/*!********************************!*\
  !*** ./src/assets/image-3.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"deadbafee1cc966151a8.png\";\n\n//# sourceURL=webpack://restuarant/./src/assets/image-3.png?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;