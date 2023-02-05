"use strict";
exports.id = 650;
exports.ids = [650];
exports.modules = {

/***/ 9226:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _GalleryItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7047);
/* harmony import */ var _Gallery_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6569);
/* harmony import */ var _Gallery_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Gallery_module_scss__WEBPACK_IMPORTED_MODULE_2__);



const Gallery = ({ items  })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_Gallery_module_scss__WEBPACK_IMPORTED_MODULE_2___default().gallery),
        children: items.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_GalleryItem__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                item: item,
                variant: "vertical"
            }, item.url)
        )
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gallery);


/***/ }),

/***/ 1365:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const SubHeading = ({ title  })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
        className: "text-white text-xl mb-5 font-semibold",
        children: title
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SubHeading);


/***/ }),

/***/ 6980:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "O": () => (/* binding */ MaterialIcon)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react-icons/md"
var md_ = __webpack_require__(4041);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./app/hooks/useRenderClient.ts

const useRenderClient = ()=>{
    const { 0: isRenderClient , 1: setIsRenderClient  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        !isRenderClient && setIsRenderClient(true);
    }, [
        isRenderClient
    ]);
    return {
        isRenderClient
    };
};

;// CONCATENATED MODULE: ./app/components/ui/icons/MaterialIcon.tsx



const MaterialIcon = ({ name  })=>{
    const { isRenderClient  } = useRenderClient();
    const IconComponent = md_[name];
    if (isRenderClient) return(/*#__PURE__*/ jsx_runtime_.jsx(IconComponent, {}) || /*#__PURE__*/ jsx_runtime_.jsx(md_.MdDragIndicator, {}));
    else return null;
};


/***/ })

};
;