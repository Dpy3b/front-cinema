exports.id = 47;
exports.ids = [47];
exports.modules = {

/***/ 6569:
/***/ ((module) => {

// Exports
module.exports = {
	"gallery": "Gallery_gallery__CuT0n",
	"item": "Gallery_item__eQKOi",
	"vertical": "Gallery_vertical__cZ4bD",
	"horizontal": "Gallery_horizontal__bgSxA",
	"withText": "Gallery_withText__gpvco",
	"content": "Gallery_content__EeavS",
	"title": "Gallery_title__8woBC",
	"subTitle": "Gallery_subTitle__y43Ea"
};


/***/ }),

/***/ 7047:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var _Gallery_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6569);
/* harmony import */ var _Gallery_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Gallery_module_scss__WEBPACK_IMPORTED_MODULE_4__);





const GalleryItem = ({ item , variant  })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
        href: item.url,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_Gallery_module_scss__WEBPACK_IMPORTED_MODULE_4___default().item), {
                [(_Gallery_module_scss__WEBPACK_IMPORTED_MODULE_4___default().withText)]: item.content,
                [(_Gallery_module_scss__WEBPACK_IMPORTED_MODULE_4___default().horizontal)]: variant === 'horizontal',
                [(_Gallery_module_scss__WEBPACK_IMPORTED_MODULE_4___default().vertical)]: variant === 'vertical'
            }),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
                    alt: item.name,
                    src: item.posterPath,
                    layout: "fill",
                    draggable: false,
                    priority: true
                }),
                item.content && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_Gallery_module_scss__WEBPACK_IMPORTED_MODULE_4___default().content),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_Gallery_module_scss__WEBPACK_IMPORTED_MODULE_4___default().title),
                            children: item.content.title
                        }),
                        item.content.subTitle && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_Gallery_module_scss__WEBPACK_IMPORTED_MODULE_4___default().subTitle),
                            children: [
                                " ",
                                item.content.subTitle
                            ]
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GalleryItem);


/***/ })

};
;