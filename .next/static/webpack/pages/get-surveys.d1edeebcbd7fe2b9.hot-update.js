"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/get-surveys",{

/***/ "./components/GetForm.js":
/*!*******************************!*\
  !*** ./components/GetForm.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst GetForm = (param)=>{\n    let { question , onSubmit  } = param;\n    function handleOnSubmit(e) {\n        const { currentTarget  } = e;\n        const fields = Array.from(currentTarget.elements);\n        const data = {};\n        fields.forEach((field)=>{\n            if (!field.name) return;\n            data[field.name] = field.value;\n        });\n        if (typeof onSubmit === \"function\") {\n            onSubmit({\n                question,\n                data\n            }, e);\n        }\n    }\n    //console.log(\"GET FORM SURVEYS\", question)\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleOnSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \" \",\n                    question.question,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/stutiraizada/Desktop/git/next_json/components/GetForm.js\",\n                lineNumber: 20,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                name: \"answer\"\n            }, void 0, false, {\n                fileName: \"/Users/stutiraizada/Desktop/git/next_json/components/GetForm.js\",\n                lineNumber: 21,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                children: \"Submit\"\n            }, void 0, false, {\n                fileName: \"/Users/stutiraizada/Desktop/git/next_json/components/GetForm.js\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/stutiraizada/Desktop/git/next_json/components/GetForm.js\",\n        lineNumber: 19,\n        columnNumber: 6\n    }, undefined);\n};\n_c = GetForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GetForm);\nvar _c;\n$RefreshReg$(_c, \"GetForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0dldEZvcm0uanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFBQSxNQUFNQSxVQUFVLFNBQTJCO1FBQTFCLEVBQUNDLFNBQVEsRUFBRUMsU0FBUSxFQUFDO0lBQ2pDLFNBQVNDLGVBQWVDLENBQUMsRUFBRTtRQUN6QixNQUFNLEVBQUVDLGNBQWEsRUFBRSxHQUFHRDtRQUUxQixNQUFNRSxTQUFTQyxNQUFNQyxJQUFJLENBQUNILGNBQWNJLFFBQVE7UUFDaEQsTUFBTUMsT0FBTyxDQUFDO1FBRWRKLE9BQU9LLE9BQU8sQ0FBQ0MsQ0FBQUEsUUFBUztZQUN0QixJQUFLLENBQUNBLE1BQU1DLElBQUksRUFBRztZQUNuQkgsSUFBSSxDQUFDRSxNQUFNQyxJQUFJLENBQUMsR0FBR0QsTUFBTUUsS0FBSztRQUNoQztRQUVBLElBQUssT0FBT1osYUFBYSxZQUFhO1lBQ3BDQSxTQUFTO2dCQUFDRDtnQkFBVVM7WUFBSSxHQUFHTjtRQUM3QixDQUFDO0lBQ0g7SUFDQSwyQ0FBMkM7SUFDM0MscUJBQ0MsOERBQUNXO1FBQUtiLFVBQVVDOzswQkFDYiw4REFBQ2E7O29CQUFFO29CQUFFZixTQUFTQSxRQUFRO29CQUFDOzs7Ozs7OzBCQUN2Qiw4REFBQ2dCO2dCQUFTSixNQUFLOzs7Ozs7MEJBQ2YsOERBQUNLOzBCQUFPOzs7Ozs7Ozs7Ozs7QUFHZDtLQXhCSWxCO0FBMEJOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvR2V0Rm9ybS5qcz8yMTVlIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEdldEZvcm0gPSAoe3F1ZXN0aW9uLCBvblN1Ym1pdH0gKSA9PiB7XG4gICAgZnVuY3Rpb24gaGFuZGxlT25TdWJtaXQoZSkge1xuICAgICAgY29uc3QgeyBjdXJyZW50VGFyZ2V0IH0gPSBlO1xuICBcbiAgICAgIGNvbnN0IGZpZWxkcyA9IEFycmF5LmZyb20oY3VycmVudFRhcmdldC5lbGVtZW50cyk7XG4gICAgICBjb25zdCBkYXRhID0ge307XG4gIFxuICAgICAgZmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xuICAgICAgICBpZiAoICFmaWVsZC5uYW1lICkgcmV0dXJuO1xuICAgICAgICBkYXRhW2ZpZWxkLm5hbWVdID0gZmllbGQudmFsdWU7XG4gICAgICB9KVxuICBcbiAgICAgIGlmICggdHlwZW9mIG9uU3VibWl0ID09PSAnZnVuY3Rpb24nICkge1xuICAgICAgICBvblN1Ym1pdCh7cXVlc3Rpb24sIGRhdGF9LCBlKVxuICAgICAgfVxuICAgIH1cbiAgICAvL2NvbnNvbGUubG9nKFwiR0VUIEZPUk0gU1VSVkVZU1wiLCBxdWVzdGlvbilcbiAgICByZXR1cm4gKFxuICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlT25TdWJtaXR9PlxuICAgICAgICA8cD4ge3F1ZXN0aW9uLnF1ZXN0aW9ufSA8L3A+XG4gICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwiYW5zd2VyXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgPGJ1dHRvbj5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICApXG4gIH1cbiAgXG5leHBvcnQgZGVmYXVsdCBHZXRGb3JtO1xuXG4iXSwibmFtZXMiOlsiR2V0Rm9ybSIsInF1ZXN0aW9uIiwib25TdWJtaXQiLCJoYW5kbGVPblN1Ym1pdCIsImUiLCJjdXJyZW50VGFyZ2V0IiwiZmllbGRzIiwiQXJyYXkiLCJmcm9tIiwiZWxlbWVudHMiLCJkYXRhIiwiZm9yRWFjaCIsImZpZWxkIiwibmFtZSIsInZhbHVlIiwiZm9ybSIsInAiLCJ0ZXh0YXJlYSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/GetForm.js\n"));

/***/ })

});