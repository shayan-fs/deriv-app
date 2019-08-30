(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["work-in-progress"],{

/***/ "./App/Containers/Wip/index.js":
/*!*************************************!*\
  !*** ./App/Containers/Wip/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wip_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wip.jsx */ \"./App/Containers/Wip/wip.jsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _wip_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9BcHAvQ29udGFpbmVycy9XaXAvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9BcHAvQ29udGFpbmVycy9XaXAvaW5kZXguanM/ODU4NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgX2RlZmF1bHQgZnJvbSAnLi93aXAuanN4JztcbmV4cG9ydCB7IF9kZWZhdWx0IGFzIGRlZmF1bHQgfTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./App/Containers/Wip/index.js\n");

/***/ }),

/***/ "./App/Containers/Wip/wip.jsx":
/*!************************************!*\
  !*** ./App/Containers/Wip/wip.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var deriv_components_lib_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! deriv-components/lib/button */ \"../../components/lib/button.js\");\n/* harmony import */ var deriv_components_lib_button__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(deriv_components_lib_button__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var deriv_components_lib_button_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! deriv-components/lib/button.css */ \"../../components/lib/button.css\");\n/* harmony import */ var deriv_components_lib_button_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(deriv_components_lib_button_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _common_base_socket_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! _common/base/socket_base */ \"./_common/base/socket_base.js\");\n/* harmony import */ var _common_base_socket_base__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_common_base_socket_base__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _common_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! _common/url */ \"./_common/url.js\");\n/* harmony import */ var _common_url__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_common_url__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var App_Components_Elements_localize_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! App/Components/Elements/localize.jsx */ \"./App/Components/Elements/localize.jsx\");\n/* harmony import */ var App_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! App/i18n */ \"./App/i18n.js\");\n/* harmony import */ var Assets_icon_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! Assets/icon.jsx */ \"./Assets/icon.jsx\");\n/* harmony import */ var Stores_connect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! Stores/connect */ \"./Stores/connect.js\");\n/* harmony import */ var Sass_app_common_components_wip_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! Sass/app/_common/components/wip.scss */ \"./sass/app/_common/components/wip.scss\");\n/* harmony import */ var Sass_app_common_components_wip_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(Sass_app_common_components_wip_scss__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n        \n\n\n\n\n\n\n\n\n\nvar onClick = function onClick(e) {\n  e.preventDefault();\n  window.open(Object(_common_url__WEBPACK_IMPORTED_MODULE_4__[\"urlFor\"])('trading', undefined, undefined, true), '_blank', 'noopener, noreferrer');\n};\n\nvar Wip = function Wip(_ref) {\n  var is_dark_mode = _ref.is_dark_mode,\n      pushDataLayer = _ref.pushDataLayer;\n  _common_base_socket_base__WEBPACK_IMPORTED_MODULE_3___default.a.wait('website_status').then(function () {\n    pushDataLayer({\n      event: 'page_load'\n    });\n  });\n  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"work-in-progress\"\n  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"work-in-progress__content\"\n  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Assets_icon_jsx__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    icon: \"IconWip\",\n    theme: is_dark_mode ? 'dark' : 'light'\n  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"work-in-progress__header\"\n  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(App_Components_Elements_localize_jsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    i18n_default_text: \"Work in progress!\"\n  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"work-in-progress__text\"\n  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(App_Components_Elements_localize_jsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    i18n_default_text: \"This is currently unavailable for mobile devices.\"\n  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(deriv_components_lib_button__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    className: \"work-in-progress__btn\",\n    classNameSpan: \"work-in-progress__btn--span\",\n    onClick: onClick,\n    text: Object(App_i18n__WEBPACK_IMPORTED_MODULE_6__[\"localize\"])('Take me to SmartTrader')\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(Stores_connect__WEBPACK_IMPORTED_MODULE_8__[\"connect\"])(function (_ref2) {\n  var ui = _ref2.ui,\n      gtm = _ref2.gtm;\n  return {\n    is_dark_mode: ui.is_dark_mode_on,\n    pushDataLayer: gtm.pushDataLayer\n  };\n})(Wip));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9BcHAvQ29udGFpbmVycy9XaXAvd2lwLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL0FwcC9Db250YWluZXJzL1dpcC93aXAuanN4PzExZGEiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgQnV0dG9uIGZyb20gJ2Rlcml2LWNvbXBvbmVudHMvbGliL2J1dHRvbic7XG5pbXBvcnQgJ2Rlcml2LWNvbXBvbmVudHMvbGliL2J1dHRvbi5jc3MnO1xuICAgICAgICBcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQmluYXJ5U29ja2V0IGZyb20gJ19jb21tb24vYmFzZS9zb2NrZXRfYmFzZSc7XG5pbXBvcnQgeyB1cmxGb3IgfSBmcm9tICdfY29tbW9uL3VybCc7XG5pbXBvcnQgTG9jYWxpemUgZnJvbSAnQXBwL0NvbXBvbmVudHMvRWxlbWVudHMvbG9jYWxpemUuanN4JztcbmltcG9ydCB7IGxvY2FsaXplIH0gZnJvbSAnQXBwL2kxOG4nO1xuaW1wb3J0IEljb24gZnJvbSAnQXNzZXRzL2ljb24uanN4JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdTdG9yZXMvY29ubmVjdCc7XG5pbXBvcnQgJ1Nhc3MvYXBwL19jb21tb24vY29tcG9uZW50cy93aXAuc2Nzcyc7XG5cbnZhciBvbkNsaWNrID0gZnVuY3Rpb24gb25DbGljayhlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgd2luZG93Lm9wZW4odXJsRm9yKCd0cmFkaW5nJywgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRydWUpLCAnX2JsYW5rJywgJ25vb3BlbmVyLCBub3JlZmVycmVyJyk7XG59O1xuXG52YXIgV2lwID0gZnVuY3Rpb24gV2lwKF9yZWYpIHtcbiAgdmFyIGlzX2RhcmtfbW9kZSA9IF9yZWYuaXNfZGFya19tb2RlLFxuICAgICAgcHVzaERhdGFMYXllciA9IF9yZWYucHVzaERhdGFMYXllcjtcbiAgQmluYXJ5U29ja2V0LndhaXQoJ3dlYnNpdGVfc3RhdHVzJykudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgcHVzaERhdGFMYXllcih7XG4gICAgICBldmVudDogJ3BhZ2VfbG9hZCdcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IFwid29yay1pbi1wcm9ncmVzc1wiXG4gIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogXCJ3b3JrLWluLXByb2dyZXNzX19jb250ZW50XCJcbiAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChJY29uLCB7XG4gICAgaWNvbjogXCJJY29uV2lwXCIsXG4gICAgdGhlbWU6IGlzX2RhcmtfbW9kZSA/ICdkYXJrJyA6ICdsaWdodCdcbiAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogXCJ3b3JrLWluLXByb2dyZXNzX19oZWFkZXJcIlxuICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KExvY2FsaXplLCB7XG4gICAgaTE4bl9kZWZhdWx0X3RleHQ6IFwiV29yayBpbiBwcm9ncmVzcyFcIlxuICB9KSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogXCJ3b3JrLWluLXByb2dyZXNzX190ZXh0XCJcbiAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChMb2NhbGl6ZSwge1xuICAgIGkxOG5fZGVmYXVsdF90ZXh0OiBcIlRoaXMgaXMgY3VycmVudGx5IHVuYXZhaWxhYmxlIGZvciBtb2JpbGUgZGV2aWNlcy5cIlxuICB9KSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7XG4gICAgY2xhc3NOYW1lOiBcIndvcmstaW4tcHJvZ3Jlc3NfX2J0blwiLFxuICAgIGNsYXNzTmFtZVNwYW46IFwid29yay1pbi1wcm9ncmVzc19fYnRuLS1zcGFuXCIsXG4gICAgb25DbGljazogb25DbGljayxcbiAgICB0ZXh0OiBsb2NhbGl6ZSgnVGFrZSBtZSB0byBTbWFydFRyYWRlcicpXG4gIH0pKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KGZ1bmN0aW9uIChfcmVmMikge1xuICB2YXIgdWkgPSBfcmVmMi51aSxcbiAgICAgIGd0bSA9IF9yZWYyLmd0bTtcbiAgcmV0dXJuIHtcbiAgICBpc19kYXJrX21vZGU6IHVpLmlzX2RhcmtfbW9kZV9vbixcbiAgICBwdXNoRGF0YUxheWVyOiBndG0ucHVzaERhdGFMYXllclxuICB9O1xufSkoV2lwKTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./App/Containers/Wip/wip.jsx\n");

/***/ }),

/***/ "./sass/app/_common/components/wip.scss":
/*!**********************************************!*\
  !*** ./sass/app/_common/components/wip.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zYXNzL2FwcC9fY29tbW9uL2NvbXBvbmVudHMvd2lwLnNjc3MuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zYXNzL2FwcC9fY29tbW9uL2NvbXBvbmVudHMvd2lwLnNjc3M/YzFiMiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./sass/app/_common/components/wip.scss\n");

/***/ })

}]);