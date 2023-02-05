exports.id = 159;
exports.ids = [159];
exports.modules = {

/***/ 542:
/***/ ((module) => {

// Exports
module.exports = {
	"heading": "Catalog_heading__GrE60",
	"movies": "Catalog_movies__ohT7c",
	"fade": "Catalog_fade__3iSdQ",
	"button": "Catalog_button__neyc4"
};


/***/ }),

/***/ 4159:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_gallery_GalleryItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7047);
/* harmony import */ var _components_ui_heading_Description__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7374);
/* harmony import */ var _components_ui_heading_Heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2289);
/* harmony import */ var _utils_meta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1499);
/* harmony import */ var _configs_url_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(590);
/* harmony import */ var _Catalog_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(542);
/* harmony import */ var _Catalog_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Catalog_module_scss__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_heading_Description__WEBPACK_IMPORTED_MODULE_2__]);
_components_ui_heading_Description__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];







const Catalog = ({ title , description , movies  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_utils_meta__WEBPACK_IMPORTED_MODULE_4__/* .Meta */ .h, {
        title: title,
        description: description,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_heading_Heading__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                title: title,
                className: (_Catalog_module_scss__WEBPACK_IMPORTED_MODULE_5___default().heading)
            }),
            description && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_heading_Description__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                text: description,
                className: (_Catalog_module_scss__WEBPACK_IMPORTED_MODULE_5___default().description)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: (_Catalog_module_scss__WEBPACK_IMPORTED_MODULE_5___default().movies),
                children: movies.map((movie)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_gallery_GalleryItem__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                        variant: "horizontal",
                        item: {
                            name: movie.title,
                            posterPath: movie.bigPoster,
                            url: (0,_configs_url_config__WEBPACK_IMPORTED_MODULE_6__/* .getMovieUrl */ .Xl)(movie.slug),
                            content: {
                                title: movie.title
                            }
                        }
                    }, movie._id)
                )
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Catalog);

});

/***/ }),

/***/ 7374:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2905);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([html_react_parser__WEBPACK_IMPORTED_MODULE_1__]);
html_react_parser__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];


const Description = ({ text , className ='' ,  })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `text-lg font-light text-white text-opacity-60 ${className}`,
        children: (0,html_react_parser__WEBPACK_IMPORTED_MODULE_1__["default"])(text)
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Description);

});

/***/ })

};
;