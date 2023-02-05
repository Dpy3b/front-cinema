exports.id = 354;
exports.ids = [354];
exports.modules = {

/***/ 9207:
/***/ ((module) => {

// Exports
module.exports = {
	"search": "SearchField_search__gtY76"
};


/***/ }),

/***/ 6980:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

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


/***/ }),

/***/ 3631:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons_MaterialIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6980);
/* harmony import */ var _SearchField_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9207);
/* harmony import */ var _SearchField_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_SearchField_module_scss__WEBPACK_IMPORTED_MODULE_2__);



const SearchField = ({ handleSearch , searchTerm  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_SearchField_module_scss__WEBPACK_IMPORTED_MODULE_2___default().search),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_MaterialIcon__WEBPACK_IMPORTED_MODULE_1__/* .MaterialIcon */ .O, {
                name: "MdSearch"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                placeholder: "Search",
                value: searchTerm,
                onChange: handleSearch
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchField);


/***/ }),

/***/ 3489:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ useDebounce)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useDebounce = (value, delay)=>{
    const { 0: debouncedValue , 1: setDebouncedValue  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const handler = setTimeout(()=>{
            setDebouncedValue(value);
        }, delay);
        return ()=>{
            clearTimeout(handler);
        };
    }, [
        value,
        delay
    ]);
    return debouncedValue;
};


/***/ })

};
;