"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/examples/jwt";
exports.ids = ["pages/api/examples/jwt"];
exports.modules = {

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/auth0":
/*!********************************************!*\
  !*** external "next-auth/providers/auth0" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/auth0");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_auth0__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/auth0 */ \"next-auth/providers/auth0\");\n/* harmony import */ var next_auth_providers_auth0__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_auth0__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst authOptions = {\n    providers: [\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GOOGLE_ID,\n            clientSecret: process.env.GOOGLE_SECRET\n        }),\n        next_auth_providers_auth0__WEBPACK_IMPORTED_MODULE_2___default()({\n            clientId: process.env.AUTH0_ID,\n            clientSecret: process.env.AUTH0_SECRET,\n            issuer: process.env.AUTH0_ISSUER\n        })\n    ],\n    theme: {\n        colorScheme: \"light\"\n    },\n    callbacks: {\n        async jwt ({ token  }) {\n            token.userRole = \"admin\";\n            return token;\n        }\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWdDO0FBQ3VCO0FBQ0Y7QUFFOUMsTUFBTUcsY0FBYztJQUN6QkMsV0FBVztRQUNUSCxpRUFBY0EsQ0FBQztZQUNiSSxVQUFVQyxRQUFRQyxHQUFHLENBQUNDLFNBQVM7WUFDL0JDLGNBQWNILFFBQVFDLEdBQUcsQ0FBQ0csYUFBYTtRQUN6QztRQUVBUixnRUFBYUEsQ0FBQztZQUNaRyxVQUFVQyxRQUFRQyxHQUFHLENBQUNJLFFBQVE7WUFDOUJGLGNBQWNILFFBQVFDLEdBQUcsQ0FBQ0ssWUFBWTtZQUN0Q0MsUUFBUVAsUUFBUUMsR0FBRyxDQUFDTyxZQUFZO1FBQ2xDO0tBQ0Q7SUFDREMsT0FBTztRQUNMQyxhQUFhO0lBQ2Y7SUFDQUMsV0FBVztRQUNULE1BQU1DLEtBQUksRUFBRUMsTUFBSyxFQUFFLEVBQUU7WUFDbkJBLE1BQU1DLFFBQVEsR0FBRztZQUNqQixPQUFPRDtRQUNUO0lBQ0Y7QUFDRixFQUFDO0FBRUQsaUVBQWVuQixnREFBUUEsQ0FBQ0csWUFBWUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3ByaXNtYS1uZXh0Ly4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcz81MjdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCJcbmltcG9ydCBHb29nbGVQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9nb29nbGVcIlxuaW1wb3J0IEF1dGgwUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvYXV0aDBcIlxuXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnMgPSB7XG4gIHByb3ZpZGVyczogWyBcbiAgICBHb29nbGVQcm92aWRlcih7XG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0lELFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfU0VDUkVULFxuICAgIH0pLFxuXG4gICAgQXV0aDBQcm92aWRlcih7XG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuQVVUSDBfSUQsXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkFVVEgwX1NFQ1JFVCxcbiAgICAgIGlzc3VlcjogcHJvY2Vzcy5lbnYuQVVUSDBfSVNTVUVSLFxuICAgIH0pLFxuICBdLFxuICB0aGVtZToge1xuICAgIGNvbG9yU2NoZW1lOiBcImxpZ2h0XCIsXG4gIH0sXG4gIGNhbGxiYWNrczoge1xuICAgIGFzeW5jIGp3dCh7IHRva2VuIH0pIHtcbiAgICAgIHRva2VuLnVzZXJSb2xlID0gXCJhZG1pblwiXG4gICAgICByZXR1cm4gdG9rZW5cbiAgICB9LFxuICB9LFxufVxuXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aChhdXRoT3B0aW9ucykiXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJHb29nbGVQcm92aWRlciIsIkF1dGgwUHJvdmlkZXIiLCJhdXRoT3B0aW9ucyIsInByb3ZpZGVycyIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkdPT0dMRV9JRCIsImNsaWVudFNlY3JldCIsIkdPT0dMRV9TRUNSRVQiLCJBVVRIMF9JRCIsIkFVVEgwX1NFQ1JFVCIsImlzc3VlciIsIkFVVEgwX0lTU1VFUiIsInRoZW1lIiwiY29sb3JTY2hlbWUiLCJjYWxsYmFja3MiLCJqd3QiLCJ0b2tlbiIsInVzZXJSb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ }),

/***/ "(api)/./pages/api/examples/jwt.js":
/*!***********************************!*\
  !*** ./pages/api/examples/jwt.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _auth_nextauth___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/[...nextauth] */ \"(api)/./pages/api/auth/[...nextauth].js\");\n// This is an example of how to access a session from an API route\n\n\nasync function handler(req, res) {\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_0__.unstable_getServerSession)(req, res, _auth_nextauth___WEBPACK_IMPORTED_MODULE_1__.authOptions);\n    res.send(JSON.stringify(session, null, 2));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZXhhbXBsZXMvand0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxrRUFBa0U7QUFDYjtBQUNGO0FBR3BDLGVBQWVFLFFBQzVCQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUNWLE1BQU1DLFVBQVUsTUFBTUwsb0VBQXlCQSxDQUFDRyxLQUFLQyxLQUFLSCx3REFBV0E7SUFDckVHLElBQUlFLElBQUksQ0FBQ0MsS0FBS0MsU0FBUyxDQUFDSCxTQUFTLElBQUksRUFBRTtBQUN6QyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJpc21hLW5leHQvLi9wYWdlcy9hcGkvZXhhbXBsZXMvand0LmpzP2I2MTQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBpcyBhbiBleGFtcGxlIG9mIGhvdyB0byBhY2Nlc3MgYSBzZXNzaW9uIGZyb20gYW4gQVBJIHJvdXRlXG5pbXBvcnQgeyB1bnN0YWJsZV9nZXRTZXJ2ZXJTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aFwiXG5pbXBvcnQgeyBhdXRoT3B0aW9ucyB9IGZyb20gXCIuLi9hdXRoL1suLi5uZXh0YXV0aF1cIlxuXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXG4gIHJlcSwgcmVzKSB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCB1bnN0YWJsZV9nZXRTZXJ2ZXJTZXNzaW9uKHJlcSwgcmVzLCBhdXRoT3B0aW9ucylcbiAgcmVzLnNlbmQoSlNPTi5zdHJpbmdpZnkoc2Vzc2lvbiwgbnVsbCwgMikpXG59Il0sIm5hbWVzIjpbInVuc3RhYmxlX2dldFNlcnZlclNlc3Npb24iLCJhdXRoT3B0aW9ucyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJzZXNzaW9uIiwic2VuZCIsIkpTT04iLCJzdHJpbmdpZnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/examples/jwt.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/examples/jwt.js"));
module.exports = __webpack_exports__;

})();