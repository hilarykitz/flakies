/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./templates/Page.js":
/*!***************************!*\
  !*** ./templates/Page.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Page\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_hkierans_git_flakies_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_hkierans_git_flakies_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/Home.module.scss */ \"./styles/Home.module.scss\");\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _providers_ThemeContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../providers/ThemeContext */ \"./providers/ThemeContext.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/lib/index.js\");\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @apollo/react-hooks */ \"./node_modules/@apollo/react-hooks/index.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/hkierans/git/flakies/templates/Page.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = (0,_Users_hkierans_git_flakies_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.default)([\"\\n  mutation createQuiz($type: String!) {\\n     createQuiz(data: {\\n        id: \\\"81a0d11d-844b-4bad-ac33-d8c8bf4718fc\\\", \\n        organizationId: \\\"81ce7c9f-e1e9-4ddc-a457-47987d6b3158\\\",\\n        byline: \\\"Adam Wika\\\", \\n        title: \\\"Hello\\\", \\n        pubDate: \\\"2021-08-05\\\",\\n        questions: [{\\n        sequence: 0,\\n        text: \\\"Who am I?\\\"\\n        answers: [{text: \\\"John Waters\\\", allowed: true}], \\n        clues: [{sequence: 1, text: \\\"Director of Cry Baby\\\"}]\\n        }]\\n    }) {\\n        byline\\n            title\\n        pubDate\\n            questions {\\n        answers {\\n            text\\n        }\\n        }\\n    }\\n  }\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\n\nvar ADD_QUIZ = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_8__.default)(_templateObject());\nvar Page = function Page(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"night\"),\n      theme = _useState[0],\n      setTheme = _useState[1];\n\n  var _useQuery = (0,_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_9__.useQuery)(GET_QUIZ),\n      data = _useQuery.data,\n      loading = _useQuery.loading;\n\n  console.log(data, '*^*^*^*', loading);\n\n  function toggleTheme() {\n    setTheme(function (theme) {\n      return theme === \"day\" ? \"night\" : \"day\";\n    });\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_providers_ThemeContext__WEBPACK_IMPORTED_MODULE_6__.ThemeContext.Provider, {\n    value: {\n      theme: theme,\n      toggleTheme: toggleTheme\n    },\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: classnames__WEBPACK_IMPORTED_MODULE_7___default()((_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_10___default().container), (0,_Users_hkierans_git_flakies_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)({}, (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_10___default().day), theme === \"day\")),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n          children: \"Flakies\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n          name: \"description\",\n          content: \"Flake with ease\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n          rel: \"icon\",\n          href: \"/favicon.ico\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_10___default().main),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n          children: \"\\u2746\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n          className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_10___default().title),\n          children: \"Vague Plans\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_10___default().grid),\n          children: children\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 51,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Page, \"U0oSu/ZZuDbCX4zchNPKi8Qs48c=\", false, function () {\n  return [_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_9__.useQuery];\n});\n\n_c = Page;\n\nvar _c;\n\n$RefreshReg$(_c, \"Page\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdGVtcGxhdGVzL1BhZ2UuanM/N2I2ZCJdLCJuYW1lcyI6WyJBRERfUVVJWiIsImdxbCIsIlBhZ2UiLCJjaGlsZHJlbiIsInVzZVN0YXRlIiwidGhlbWUiLCJzZXRUaGVtZSIsInVzZVF1ZXJ5IiwiR0VUX1FVSVoiLCJkYXRhIiwibG9hZGluZyIsImNvbnNvbGUiLCJsb2ciLCJ0b2dnbGVUaGVtZSIsImNsYXNzTmFtZXMiLCJzdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0EsSUFBTUEsUUFBUSxHQUFHQyxvREFBSCxtQkFBZDtBQTJCTyxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFrQjtBQUFBOztBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTs7QUFBQSxrQkFDUkMsK0NBQVEsQ0FBQyxPQUFELENBREE7QUFBQSxNQUMzQkMsS0FEMkI7QUFBQSxNQUNwQkMsUUFEb0I7O0FBQUEsa0JBR1JDLDZEQUFRLENBQUNDLFFBQUQsQ0FIQTtBQUFBLE1BRzFCQyxJQUgwQixhQUcxQkEsSUFIMEI7QUFBQSxNQUdwQkMsT0FIb0IsYUFHcEJBLE9BSG9COztBQUtsQ0MsU0FBTyxDQUFDQyxHQUFSLENBQVlILElBQVosRUFBa0IsU0FBbEIsRUFBNkJDLE9BQTdCOztBQUVBLFdBQVNHLFdBQVQsR0FBdUI7QUFDbkJQLFlBQVEsQ0FBQyxVQUFBRCxLQUFLO0FBQUEsYUFBS0EsS0FBSyxLQUFLLEtBQVYsR0FBa0IsT0FBbEIsR0FBNEIsS0FBakM7QUFBQSxLQUFOLENBQVI7QUFDSDs7QUFFRCxzQkFDSSw4REFBQywwRUFBRDtBQUF1QixTQUFLLEVBQUU7QUFBRUEsV0FBSyxFQUFMQSxLQUFGO0FBQVNRLGlCQUFXLEVBQVhBO0FBQVQsS0FBOUI7QUFBQSwyQkFDSTtBQUFLLGVBQVMsRUFBRUMsaURBQVUsQ0FBQ0MsNEVBQUQsbUpBQXNCQSxzRUFBdEIsRUFBbUNWLEtBQUssS0FBSyxLQUE3QyxFQUExQjtBQUFBLDhCQUNJLDhEQUFDLGtEQUFEO0FBQUEsZ0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFFSTtBQUFNLGNBQUksRUFBQyxhQUFYO0FBQXlCLGlCQUFPLEVBQUM7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSixlQUdJO0FBQU0sYUFBRyxFQUFDLE1BQVY7QUFBaUIsY0FBSSxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFPSTtBQUFNLGlCQUFTLEVBQUVVLHVFQUFqQjtBQUFBLGdDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUk7QUFBSSxtQkFBUyxFQUFFQSx3RUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSixlQU1JO0FBQUssbUJBQVMsRUFBRUEsdUVBQWhCO0FBQUEsb0JBQ0taO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFzQkgsQ0FqQ007O0dBQU1ELEk7VUFHaUJLLHlEOzs7S0FIakJMLEkiLCJmaWxlIjoiLi90ZW1wbGF0ZXMvUGFnZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLnNjc3MnO1xuaW1wb3J0IHsgVGhlbWVDb250ZXh0IH0gZnJvbSAnLi4vcHJvdmlkZXJzL1RoZW1lQ29udGV4dCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIjtcbmltcG9ydCB7IHVzZVF1ZXJ5LCB1c2VNdXRhdGlvbiB9IGZyb20gXCJAYXBvbGxvL3JlYWN0LWhvb2tzXCI7XG5cblxuY29uc3QgQUREX1FVSVogPSBncWxgXG4gIG11dGF0aW9uIGNyZWF0ZVF1aXooJHR5cGU6IFN0cmluZyEpIHtcbiAgICAgY3JlYXRlUXVpeihkYXRhOiB7XG4gICAgICAgIGlkOiBcIjgxYTBkMTFkLTg0NGItNGJhZC1hYzMzLWQ4YzhiZjQ3MThmY1wiLCBcbiAgICAgICAgb3JnYW5pemF0aW9uSWQ6IFwiODFjZTdjOWYtZTFlOS00ZGRjLWE0NTctNDc5ODdkNmIzMTU4XCIsXG4gICAgICAgIGJ5bGluZTogXCJBZGFtIFdpa2FcIiwgXG4gICAgICAgIHRpdGxlOiBcIkhlbGxvXCIsIFxuICAgICAgICBwdWJEYXRlOiBcIjIwMjEtMDgtMDVcIixcbiAgICAgICAgcXVlc3Rpb25zOiBbe1xuICAgICAgICBzZXF1ZW5jZTogMCxcbiAgICAgICAgdGV4dDogXCJXaG8gYW0gST9cIlxuICAgICAgICBhbnN3ZXJzOiBbe3RleHQ6IFwiSm9obiBXYXRlcnNcIiwgYWxsb3dlZDogdHJ1ZX1dLCBcbiAgICAgICAgY2x1ZXM6IFt7c2VxdWVuY2U6IDEsIHRleHQ6IFwiRGlyZWN0b3Igb2YgQ3J5IEJhYnlcIn1dXG4gICAgICAgIH1dXG4gICAgfSkge1xuICAgICAgICBieWxpbmVcbiAgICAgICAgICAgIHRpdGxlXG4gICAgICAgIHB1YkRhdGVcbiAgICAgICAgICAgIHF1ZXN0aW9ucyB7XG4gICAgICAgIGFuc3dlcnMge1xuICAgICAgICAgICAgdGV4dFxuICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gIH1gO1xuXG5cbmV4cG9ydCBjb25zdCBQYWdlID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICAgIGNvbnN0IFt0aGVtZSwgc2V0VGhlbWVdID0gdXNlU3RhdGUoXCJuaWdodFwiKTtcbiAgICBcbiAgICBjb25zdCB7IGRhdGEsIGxvYWRpbmcgfSA9IHVzZVF1ZXJ5KEdFVF9RVUlaKTtcbiAgICBcbiAgICBjb25zb2xlLmxvZyhkYXRhLCAnKl4qXipeKicsIGxvYWRpbmcpXG5cbiAgICBmdW5jdGlvbiB0b2dnbGVUaGVtZSgpIHtcbiAgICAgICAgc2V0VGhlbWUodGhlbWUgPT4gKHRoZW1lID09PSBcImRheVwiID8gXCJuaWdodFwiIDogXCJkYXlcIikpO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgICA8VGhlbWVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHRoZW1lLCB0b2dnbGVUaGVtZSB9fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5jb250YWluZXIsIHsgW3N0eWxlcy5kYXldOiB0aGVtZSA9PT0gXCJkYXlcIiB9KX0+XG4gICAgICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT5GbGFraWVzPC90aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkZsYWtlIHdpdGggZWFzZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgICAgICAgICA8L0hlYWQ+XG4gXG4gICAgICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgICAgICAgICAgICAgIDxoMT7inYY8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgVmFndWUgUGxhbnNcbiAgICAgICAgICAgICAgICAgICAgPC9oMj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L21haW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9UaGVtZUNvbnRleHQuUHJvdmlkZXI+XG4gICAgICAgIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./templates/Page.js\n");

/***/ })

});