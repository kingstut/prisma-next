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

/***/ "./pages/get-surveys.js":
/*!******************************!*\
  !*** ./pages/get-surveys.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ GetSurveyPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var _helpers_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/api */ \"./helpers/api.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_GetFormList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/GetFormList */ \"./components/GetFormList.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar __N_SSP = true;\nfunction GetSurveyPage(param) {\n    let { surveys  } = param;\n    _s();\n    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)();\n    async function handleOnSubmit(param, e) {\n        let { survey , data  } = param;\n        console.log(\"SENDING DATA SURVEYS\", survey, data);\n        e.preventDefault();\n        //fetch('/api/responses/response-api', {method: 'PUT', query: query}).then(handleResponse)\n        axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post(\"http://localhost:3000/api/responses/response-api\", {\n            session,\n            survey,\n            data\n        }).then(_helpers_api__WEBPACK_IMPORTED_MODULE_2__.handleResponse);\n        showToVerify();\n    }\n    function showToVerify() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \" FORM SUBMITTED \"\n        }, void 0, false, {\n            fileName: \"/Users/stutiraizada/Desktop/git/next_json/pages/get-surveys.js\",\n            lineNumber: 23,\n            columnNumber: 5\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Fill Surveys\"\n            }, void 0, false, {\n                fileName: \"/Users/stutiraizada/Desktop/git/next_json/pages/get-surveys.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"You must be signed in to fill a survey.\"\n            }, void 0, false, {\n                fileName: \"/Users/stutiraizada/Desktop/git/next_json/pages/get-surveys.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            \"if (session.user) \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GetFormList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                surveys: surveys,\n                onSubmit: handleOnSubmit\n            }, void 0, false, {\n                fileName: \"/Users/stutiraizada/Desktop/git/next_json/pages/get-surveys.js\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/stutiraizada/Desktop/git/next_json/pages/get-surveys.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n_s(GetSurveyPage, \"xGqsfA9Yc4bug2CeORcyTsHwvXY=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession\n    ];\n});\n_c = GetSurveyPage;\nvar _c;\n$RefreshReg$(_c, \"GetSurveyPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9nZXQtc3VydmV5cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQXlDO0FBQ0s7QUFDVTtBQUVMO0FBQzFCOztBQUVWLFNBQVNLLGNBQWMsS0FBUyxFQUFFO1FBQVgsRUFBQ0MsUUFBTyxFQUFDLEdBQVQ7O0lBRXBDLE1BQU0sRUFBRUMsTUFBTUMsUUFBTyxFQUFFLEdBQUdOLDJEQUFVQTtJQUVwQyxlQUFlTyxlQUFlLEtBQWMsRUFBRUMsQ0FBQyxFQUFFO1lBQW5CLEVBQUNDLE9BQU0sRUFBRUosS0FBSSxFQUFDLEdBQWQ7UUFDNUJLLFFBQVFDLEdBQUcsQ0FBQyx3QkFBd0JGLFFBQVFKO1FBQzVDRyxFQUFFSSxjQUFjO1FBQ2hCLDBGQUEwRjtRQUMxRlYsa0RBQVUsQ0FBQyxvREFDWDtZQUFFSTtZQUFTRztZQUFRSjtRQUFLLEdBQUlTLElBQUksQ0FBQ2Ysd0RBQWNBO1FBQy9DZ0I7SUFDRjtJQUVBLFNBQVNBLGVBQWM7UUFDckIscUJBQ0EsOERBQUNDO3NCQUFFOzs7Ozs7SUFFTDtJQUdBLHFCQUNFLDhEQUFDbEIsMERBQU1BOzswQkFDTCw4REFBQ21COzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNEOzBCQUFFOzs7Ozs7WUFFQzswQkFHRiw4REFBQ2YsK0RBQVdBO2dCQUFDRyxTQUFTQTtnQkFBU2MsVUFBVVg7Ozs7Ozs7Ozs7OztBQUtqRCxDQUFDO0dBakN1Qko7O1FBRUlILHVEQUFVQTs7O0tBRmRHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2dldC1zdXJ2ZXlzLmpzPzRkNWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXRcIlxuaW1wb3J0IHsgaGFuZGxlUmVzcG9uc2V9IGZyb20gXCIuLi9oZWxwZXJzL2FwaVwiXG5pbXBvcnQgeyB1c2VTZXNzaW9uLCBnZXRTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiXG5cbmltcG9ydCBHZXRGb3JtTGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9HZXRGb3JtTGlzdFwiXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2V0U3VydmV5UGFnZSh7c3VydmV5c30pIHtcbiAgXG4gIGNvbnN0IHsgZGF0YTogc2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbigpXG4gIFxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVPblN1Ym1pdCh7c3VydmV5LCBkYXRhfSwgZSkge1xuICAgIGNvbnNvbGUubG9nKFwiU0VORElORyBEQVRBIFNVUlZFWVNcIiwgc3VydmV5LCBkYXRhKVxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvL2ZldGNoKCcvYXBpL3Jlc3BvbnNlcy9yZXNwb25zZS1hcGknLCB7bWV0aG9kOiAnUFVUJywgcXVlcnk6IHF1ZXJ5fSkudGhlbihoYW5kbGVSZXNwb25zZSlcbiAgICBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3Jlc3BvbnNlcy9yZXNwb25zZS1hcGknLCBcbiAgICB7IHNlc3Npb24sIHN1cnZleSwgZGF0YSB9ICkudGhlbihoYW5kbGVSZXNwb25zZSlcbiAgICBzaG93VG9WZXJpZnkoKVxuICB9XG5cbiAgZnVuY3Rpb24gc2hvd1RvVmVyaWZ5KCl7XG4gICAgcmV0dXJuIChcbiAgICA8cD4gRk9STSBTVUJNSVRURUQgPC9wPlxuICAgIClcbiAgfSBcblxuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxoMT5GaWxsIFN1cnZleXM8L2gxPlxuICAgICAgPHA+XG4gICAgICBZb3UgbXVzdCBiZSBzaWduZWQgaW4gdG8gZmlsbCBhIHN1cnZleS5cbiAgICAgIDwvcD5cblxuICAgICAgaWYgKHNlc3Npb24udXNlcikge1xuICAgICAgICA8R2V0Rm9ybUxpc3Qgc3VydmV5cz17c3VydmV5c30gb25TdWJtaXQ9e2hhbmRsZU9uU3VibWl0fSAvPlxuICAgICAgfVxuXG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG4gIC8vIEZldGNoIGRhdGEgZnJvbSBleHRlcm5hbCBBUElcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oY29udGV4dClcbiAgY29uc3QgZW0gPSBzZXNzaW9uLnVzZXIuZW1haWxcbiAgLy9jb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvc3VydmV5cy8nLCBcbiAgLy8geyBwYXJhbXM6IHtlbTogZW1haWx9IH0gKS50aGVuKGhhbmRsZVJlc3BvbnNlKVxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9zdXJ2ZXlzLyR7ZW19YCkudGhlbihoYW5kbGVSZXNwb25zZSlcbiAgY29uc3Qgc3VydmV5cyA9IGF3YWl0IHJlcy5qc29uKClcblxuICAvLyBQYXNzIGRhdGEgdG8gdGhlIHBhZ2UgdmlhIHByb3BzXG4gIHJldHVybiB7IHByb3BzOiB7IHN1cnZleXMgfSB9XG59Il0sIm5hbWVzIjpbIkxheW91dCIsImhhbmRsZVJlc3BvbnNlIiwidXNlU2Vzc2lvbiIsIkdldEZvcm1MaXN0IiwiYXhpb3MiLCJHZXRTdXJ2ZXlQYWdlIiwic3VydmV5cyIsImRhdGEiLCJzZXNzaW9uIiwiaGFuZGxlT25TdWJtaXQiLCJlIiwic3VydmV5IiwiY29uc29sZSIsImxvZyIsInByZXZlbnREZWZhdWx0IiwicG9zdCIsInRoZW4iLCJzaG93VG9WZXJpZnkiLCJwIiwiaDEiLCJvblN1Ym1pdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/get-surveys.js\n"));

/***/ })

});