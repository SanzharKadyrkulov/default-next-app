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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./app/store/slices/product.slice.ts":
/*!*******************************************!*\
  !*** ./app/store/slices/product.slice.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"productReducer\": () => (/* binding */ productReducer),\n/* harmony export */   \"getProductsSuccess\": () => (/* binding */ getProductsSuccess)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n    products: [],\n    loading: false,\n    error: null\n};\nconst productSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: 'product',\n    initialState,\n    reducers: {\n        getProductsSuccess: (state, action)=>{\n            state.products = action.payload;\n        }\n    }\n});\nconst productReducer = productSlice.reducer;\nconst { getProductsSuccess  } = productSlice.actions;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvc3RvcmUvc2xpY2VzL3Byb2R1Y3Quc2xpY2UudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE2RDtBQUc3RCxLQUFLLENBQUNDLFlBQVksR0FBa0IsQ0FBQztJQUNwQ0MsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNaQyxPQUFPLEVBQUUsS0FBSztJQUNkQyxLQUFLLEVBQUUsSUFBSTtBQUNaLENBQUM7QUFFRCxLQUFLLENBQUNDLFlBQVksR0FBR0wsNkRBQVcsQ0FBQyxDQUFDO0lBQ2pDTSxJQUFJLEVBQUUsQ0FBUztJQUNmTCxZQUFZO0lBQ1pNLFFBQVEsRUFBRSxDQUFDO1FBQ1ZDLGtCQUFrQixHQUFHQyxLQUFLLEVBQUVDLE1BQWlDLEdBQUssQ0FBQztZQUNsRUQsS0FBSyxDQUFDUCxRQUFRLEdBQUdRLE1BQU0sQ0FBQ0MsT0FBTztRQUNoQyxDQUFDO0lBQ0YsQ0FBQztBQUNGLENBQUM7QUFFTSxLQUFLLENBQUNDLGNBQWMsR0FBR1AsWUFBWSxDQUFDUSxPQUFPO0FBQzNDLEtBQUssQ0FBQyxDQUFDLENBQUNMLGtCQUFrQixFQUFDLENBQUMsR0FBR0gsWUFBWSxDQUFDUyxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVkdXgtdG9vbGtpdC1jcmFzaC1jb3Vyc2UvLi9hcHAvc3RvcmUvc2xpY2VzL3Byb2R1Y3Quc2xpY2UudHM/Yzc1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuaW1wb3J0IHsgSVByb2R1Y3QsIElQcm9kdWN0U3RhdGUgfSBmcm9tICcuLi90eXBlcy9wcm9kdWN0LnR5cGVzJztcblxuY29uc3QgaW5pdGlhbFN0YXRlOiBJUHJvZHVjdFN0YXRlID0ge1xuXHRwcm9kdWN0czogW10sXG5cdGxvYWRpbmc6IGZhbHNlLFxuXHRlcnJvcjogbnVsbCxcbn07XG5cbmNvbnN0IHByb2R1Y3RTbGljZSA9IGNyZWF0ZVNsaWNlKHtcblx0bmFtZTogJ3Byb2R1Y3QnLFxuXHRpbml0aWFsU3RhdGUsXG5cdHJlZHVjZXJzOiB7XG5cdFx0Z2V0UHJvZHVjdHNTdWNjZXNzOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxJUHJvZHVjdFtdPikgPT4ge1xuXHRcdFx0c3RhdGUucHJvZHVjdHMgPSBhY3Rpb24ucGF5bG9hZDtcblx0XHR9LFxuXHR9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBwcm9kdWN0UmVkdWNlciA9IHByb2R1Y3RTbGljZS5yZWR1Y2VyO1xuZXhwb3J0IGNvbnN0IHsgZ2V0UHJvZHVjdHNTdWNjZXNzIH0gPSBwcm9kdWN0U2xpY2UuYWN0aW9ucztcbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImluaXRpYWxTdGF0ZSIsInByb2R1Y3RzIiwibG9hZGluZyIsImVycm9yIiwicHJvZHVjdFNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwiZ2V0UHJvZHVjdHNTdWNjZXNzIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwicHJvZHVjdFJlZHVjZXIiLCJyZWR1Y2VyIiwiYWN0aW9ucyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/store/slices/product.slice.ts\n");

/***/ }),

/***/ "./app/store/store.ts":
/*!****************************!*\
  !*** ./app/store/store.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"store\": () => (/* binding */ store)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _slices_product_slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slices/product.slice */ \"./app/store/slices/product.slice.ts\");\n\n\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: {\n        product: _slices_product_slice__WEBPACK_IMPORTED_MODULE_1__.productReducer\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvc3RvcmUvc3RvcmUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFpRDtBQUNNO0FBRWhELEtBQUssQ0FBQ0UsS0FBSyxHQUFHRixnRUFBYyxDQUFDLENBQUM7SUFDcENHLE9BQU8sRUFBRSxDQUFDO1FBQUNDLE9BQU8sRUFBRUgsaUVBQWM7SUFBQyxDQUFDO0FBQ3JDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWR1eC10b29sa2l0LWNyYXNoLWNvdXJzZS8uL2FwcC9zdG9yZS9zdG9yZS50cz82Y2NhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5pbXBvcnQgeyBwcm9kdWN0UmVkdWNlciB9IGZyb20gJy4vc2xpY2VzL3Byb2R1Y3Quc2xpY2UnO1xuXG5leHBvcnQgY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSh7XG5cdHJlZHVjZXI6IHsgcHJvZHVjdDogcHJvZHVjdFJlZHVjZXIgfSxcbn0pO1xuXG5leHBvcnQgdHlwZSBUeXBlUm9vdFN0YXRlID0gUmV0dXJuVHlwZTx0eXBlb2Ygc3RvcmUuZ2V0U3RhdGU+O1xuIl0sIm5hbWVzIjpbImNvbmZpZ3VyZVN0b3JlIiwicHJvZHVjdFJlZHVjZXIiLCJzdG9yZSIsInJlZHVjZXIiLCJwcm9kdWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/store/store.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/store/store */ \"./app/store/store.ts\");\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {\n        store: _app_store_store__WEBPACK_IMPORTED_MODULE_3__.store,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"py-7 px-5\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/home/sanzhar/Desktop/Redux_toolkit/redux-toolkit-crash-course/pages/_app.tsx\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/sanzhar/Desktop/Redux_toolkit/redux-toolkit-crash-course/pages/_app.tsx\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/sanzhar/Desktop/Redux_toolkit/redux-toolkit-crash-course/pages/_app.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBOEI7QUFFUTtBQUNJO1NBRWpDRSxLQUFLLENBQUMsQ0FBQyxDQUFDQyxTQUFTLEdBQUVDLFNBQVMsRUFBVyxDQUFDLEVBQUUsQ0FBQztJQUNsRCxNQUFNLDZFQUNISixpREFBUTtRQUFDQyxLQUFLLEVBQUVBLG1EQUFLOzhGQUNuQkksQ0FBRztZQUFDQyxTQUFTLEVBQUMsQ0FBVztrR0FDdkJILFNBQVM7bUJBQUtDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJaEMsQ0FBQztBQUVELGlFQUFlRixLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWR1eC10b29sa2l0LWNyYXNoLWNvdXJzZS8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgc3RvcmUgfSBmcm9tIFwiLi4vYXBwL3N0b3JlL3N0b3JlXCI7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktNyBweC01XCI+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbIlByb3ZpZGVyIiwic3RvcmUiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();