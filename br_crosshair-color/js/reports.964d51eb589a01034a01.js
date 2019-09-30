(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reports"],{

/***/ "./Modules/Reports/Containers/reports.jsx":
/*!************************************************!*\
  !*** ./Modules/Reports/Containers/reports.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ \"../node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"../node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var App_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! App/i18n */ \"./App/i18n.js\");\n/* harmony import */ var App_Components_Animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! App/Components/Animations */ \"./App/Components/Animations/index.js\");\n/* harmony import */ var App_Components_Elements_VerticalTabs_vertical_tab_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! App/Components/Elements/VerticalTabs/vertical-tab.jsx */ \"./App/Components/Elements/VerticalTabs/vertical-tab.jsx\");\n/* harmony import */ var Constants_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Constants/routes */ \"./Constants/routes.js\");\n/* harmony import */ var Stores_connect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! Stores/connect */ \"./Stores/connect.js\");\n/* harmony import */ var _wallet_information_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./wallet-information.jsx */ \"./Modules/Reports/Containers/wallet-information.jsx\");\n/* harmony import */ var Sass_app_modules_reports_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! Sass/app/modules/reports.scss */ \"./sass/app/modules/reports.scss\");\n/* harmony import */ var Sass_app_modules_reports_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(Sass_app_modules_reports_scss__WEBPACK_IMPORTED_MODULE_9__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\n\n\n\n\n\nvar Reports =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(Reports, _React$Component);\n\n  function Reports() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _classCallCheck(this, Reports);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Reports)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _this.setWrapperRef = function (node) {\n      _this.wrapper_ref = node;\n    };\n\n    _this.handleClickOutside = function (event) {\n      if (_this.wrapper_ref && !_this.wrapper_ref.contains(event.target)) {\n        _this.props.history.push(Constants_routes__WEBPACK_IMPORTED_MODULE_6__[\"default\"].trade);\n      }\n    };\n\n    return _this;\n  }\n\n  _createClass(Reports, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.props.enableRouteMode();\n      document.addEventListener('mousedown', this.handleClickOutside);\n      this.props.toggleReports(true);\n    }\n  }, {\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      this.props.toggleReports(false);\n      this.props.disableRouteMode();\n      document.removeEventListener('mousedown', this.handleClickOutside);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var menu_options = function menu_options() {\n        var options = [];\n\n        _this2.props.routes.forEach(function (route) {\n          options.push({\n            \"default\": route[\"default\"],\n            icon: route.icon_component,\n            label: route.title,\n            value: route.component,\n            path: route.path\n          });\n        });\n\n        return options;\n      };\n\n      var action_bar_items = [{\n        onClick: function onClick() {\n          _this2.props.history.push(Constants_routes__WEBPACK_IMPORTED_MODULE_6__[\"default\"].trade);\n\n          _this2.props.toggleReports(false);\n        },\n        icon: 'ModalIconClose',\n        title: Object(App_i18n__WEBPACK_IMPORTED_MODULE_3__[\"localize\"])('Close')\n      }, {\n        component: function component() {\n          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wallet_information_jsx__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n            has_description: true,\n            has_loginid: true\n          });\n        },\n        title: ''\n      }];\n      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(App_Components_Animations__WEBPACK_IMPORTED_MODULE_4__[\"FadeWrapper\"], {\n        is_visible: this.props.is_visible,\n        className: \"reports-page-wrapper\",\n        keyname: \"reports-page-wrapper\"\n      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n        className: \"reports\",\n        ref: this.setWrapperRef\n      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(App_Components_Elements_VerticalTabs_vertical_tab_jsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        header_title: Object(App_i18n__WEBPACK_IMPORTED_MODULE_3__[\"localize\"])('Reports'),\n        action_bar: action_bar_items,\n        action_bar_classname: \"reports__inset_header\",\n        alignment: \"center\",\n        id: \"report\",\n        classNameHeader: \"reports__tab-header\",\n        current_path: this.props.location.pathname,\n        is_routed: true,\n        is_full_width: true,\n        list: menu_options()\n      })));\n    }\n  }]);\n\n  return Reports;\n}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);\n\nReports.propTypes = {\n  disableRouteMode: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,\n  enableRouteMode: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,\n  history: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,\n  is_visible: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,\n  location: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,\n  routes: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object),\n  toggleReports: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(Stores_connect__WEBPACK_IMPORTED_MODULE_7__[\"connect\"])(function (_ref) {\n  var ui = _ref.ui;\n  return {\n    disableRouteMode: ui.disableRouteModal,\n    enableRouteMode: ui.setRouteModal,\n    is_visible: ui.is_reports_visible,\n    toggleReports: ui.toggleReports\n  };\n})(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"withRouter\"])(Reports)));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Nb2R1bGVzL1JlcG9ydHMvQ29udGFpbmVycy9yZXBvcnRzLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL01vZHVsZXMvUmVwb3J0cy9Db250YWluZXJzL3JlcG9ydHMuanN4PzhmYjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyAgICAgICAgIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0ICAgICAgICAgICAgIGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSAgICBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IGxvY2FsaXplIH0gICAgICBmcm9tICdBcHAvaTE4bic7XG5pbXBvcnQgeyBGYWRlV3JhcHBlciB9ICAgZnJvbSAnQXBwL0NvbXBvbmVudHMvQW5pbWF0aW9ucyc7XG5pbXBvcnQgVmVydGljYWxUYWIgICAgICAgZnJvbSAnQXBwL0NvbXBvbmVudHMvRWxlbWVudHMvVmVydGljYWxUYWJzL3ZlcnRpY2FsLXRhYi5qc3gnO1xuaW1wb3J0IEFwcFJvdXRlcyAgICAgICAgIGZyb20gJ0NvbnN0YW50cy9yb3V0ZXMnO1xuaW1wb3J0IHsgY29ubmVjdCB9ICAgICAgIGZyb20gJ1N0b3Jlcy9jb25uZWN0JztcbmltcG9ydCBXYWxsZXRJbmZvcm1hdGlvbiBmcm9tICcuL3dhbGxldC1pbmZvcm1hdGlvbi5qc3gnO1xuaW1wb3J0ICdTYXNzL2FwcC9tb2R1bGVzL3JlcG9ydHMuc2Nzcyc7XG5cbmNsYXNzIFJlcG9ydHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHNldFdyYXBwZXJSZWYgPSAobm9kZSkgPT4ge1xuICAgICAgICB0aGlzLndyYXBwZXJfcmVmID0gbm9kZTtcbiAgICB9O1xuXG4gICAgaGFuZGxlQ2xpY2tPdXRzaWRlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmICh0aGlzLndyYXBwZXJfcmVmICYmICF0aGlzLndyYXBwZXJfcmVmLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKEFwcFJvdXRlcy50cmFkZSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMucHJvcHMuZW5hYmxlUm91dGVNb2RlKCk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuaGFuZGxlQ2xpY2tPdXRzaWRlKTtcbiAgICAgICAgdGhpcy5wcm9wcy50b2dnbGVSZXBvcnRzKHRydWUpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB0aGlzLnByb3BzLnRvZ2dsZVJlcG9ydHMoZmFsc2UpO1xuICAgICAgICB0aGlzLnByb3BzLmRpc2FibGVSb3V0ZU1vZGUoKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5oYW5kbGVDbGlja091dHNpZGUpO1xuICAgIH1cblxuICAgIHJlbmRlciAoKSB7XG4gICAgICAgIGNvbnN0IG1lbnVfb3B0aW9ucyA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSBbXTtcblxuICAgICAgICAgICAgdGhpcy5wcm9wcy5yb3V0ZXMuZm9yRWFjaChyb3V0ZSA9PiB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogcm91dGUuZGVmYXVsdCxcbiAgICAgICAgICAgICAgICAgICAgaWNvbiAgIDogcm91dGUuaWNvbl9jb21wb25lbnQsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsICA6IHJvdXRlLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSAgOiByb3V0ZS5jb21wb25lbnQsXG4gICAgICAgICAgICAgICAgICAgIHBhdGggICA6IHJvdXRlLnBhdGgsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgYWN0aW9uX2Jhcl9pdGVtcyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKEFwcFJvdXRlcy50cmFkZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudG9nZ2xlUmVwb3J0cyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBpY29uIDogJ01vZGFsSWNvbkNsb3NlJyxcbiAgICAgICAgICAgICAgICB0aXRsZTogbG9jYWxpemUoJ0Nsb3NlJyksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudDogKCkgPT4gPFdhbGxldEluZm9ybWF0aW9uIGhhc19kZXNjcmlwdGlvbiBoYXNfbG9naW5pZCAvPixcbiAgICAgICAgICAgICAgICB0aXRsZSAgICA6ICcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxGYWRlV3JhcHBlclxuICAgICAgICAgICAgICAgIGlzX3Zpc2libGU9e3RoaXMucHJvcHMuaXNfdmlzaWJsZX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3JlcG9ydHMtcGFnZS13cmFwcGVyJ1xuICAgICAgICAgICAgICAgIGtleW5hbWU9J3JlcG9ydHMtcGFnZS13cmFwcGVyJ1xuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZXBvcnRzJyByZWY9e3RoaXMuc2V0V3JhcHBlclJlZn0+XG4gICAgICAgICAgICAgICAgICAgIDxWZXJ0aWNhbFRhYlxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyX3RpdGxlPXtsb2NhbGl6ZSgnUmVwb3J0cycpfVxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uX2Jhcj17YWN0aW9uX2Jhcl9pdGVtc31cbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbl9iYXJfY2xhc3NuYW1lPSdyZXBvcnRzX19pbnNldF9oZWFkZXInXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbm1lbnQ9J2NlbnRlcidcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdyZXBvcnQnXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWVIZWFkZXI9J3JlcG9ydHNfX3RhYi1oZWFkZXInXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50X3BhdGg9e3RoaXMucHJvcHMubG9jYXRpb24ucGF0aG5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBpc19yb3V0ZWQ9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBpc19mdWxsX3dpZHRoPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdD17bWVudV9vcHRpb25zKCl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0ZhZGVXcmFwcGVyPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuUmVwb3J0cy5wcm9wVHlwZXMgPSB7XG4gICAgZGlzYWJsZVJvdXRlTW9kZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZW5hYmxlUm91dGVNb2RlIDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgaGlzdG9yeSAgICAgICAgIDogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBpc192aXNpYmxlICAgICAgOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBsb2NhdGlvbiAgICAgICAgOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIHJvdXRlcyAgICAgICAgICA6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxuICAgIHRvZ2dsZVJlcG9ydHMgICA6IFByb3BUeXBlcy5mdW5jLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgICAoeyB1aSB9KSA9PiAoe1xuICAgICAgICBkaXNhYmxlUm91dGVNb2RlOiB1aS5kaXNhYmxlUm91dGVNb2RhbCxcbiAgICAgICAgZW5hYmxlUm91dGVNb2RlIDogdWkuc2V0Um91dGVNb2RhbCxcbiAgICAgICAgaXNfdmlzaWJsZSAgICAgIDogdWkuaXNfcmVwb3J0c192aXNpYmxlLFxuICAgICAgICB0b2dnbGVSZXBvcnRzICAgOiB1aS50b2dnbGVSZXBvcnRzLFxuICAgIH0pXG4pKHdpdGhSb3V0ZXIoUmVwb3J0cykpO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFGQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBZUE7Ozs7QUE1RUE7QUFDQTtBQThFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFVQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Modules/Reports/Containers/reports.jsx\n");

/***/ }),

/***/ "./Modules/Reports/index.js":
/*!**********************************!*\
  !*** ./Modules/Reports/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Containers_reports_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Containers/reports.jsx */ \"./Modules/Reports/Containers/reports.jsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _Containers_reports_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Nb2R1bGVzL1JlcG9ydHMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9Nb2R1bGVzL1JlcG9ydHMvaW5kZXguanM/ZTc0NyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmcm9tICcuL0NvbnRhaW5lcnMvcmVwb3J0cy5qc3gnO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Modules/Reports/index.js\n");

/***/ }),

/***/ "./sass/app/modules/reports.scss":
/*!***************************************!*\
  !*** ./sass/app/modules/reports.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zYXNzL2FwcC9tb2R1bGVzL3JlcG9ydHMuc2Nzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Nhc3MvYXBwL21vZHVsZXMvcmVwb3J0cy5zY3NzP2VkMGIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./sass/app/modules/reports.scss\n");

/***/ })

}]);