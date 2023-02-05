exports.id = 752;
exports.ids = [752];
exports.modules = {

/***/ 6783:
/***/ ((module) => {

// Exports
module.exports = {
	"form": "adminForm_form__hORMU",
	"fields": "adminForm_fields__dznEQ"
};


/***/ }),

/***/ 7562:
/***/ ((module) => {

// Exports
module.exports = {
	"badge": "SlugField_badge__pd3af"
};


/***/ }),

/***/ 344:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3789);
/* harmony import */ var _SlugField_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7562);
/* harmony import */ var _SlugField_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_SlugField_module_scss__WEBPACK_IMPORTED_MODULE_3__);




const SlugField = ({ generate , register , error  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Field__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                ...register('slug', {
                    required: 'Slug is required!'
                }),
                placeholder: "Slug",
                error: error
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_SlugField_module_scss__WEBPACK_IMPORTED_MODULE_3___default().badge),
                onClick: generate,
                children: "generate"
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SlugField);


/***/ }),

/***/ 6228:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ getKeys)
/* harmony export */ });
const getKeys = (obj)=>Object.keys(obj)
;


/***/ }),

/***/ 5219:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const translit = (str)=>{
    const ru = 'А-а-Б-б-В-в-Ґ-ґ-Г-г-Д-д-Е-е-Ё-ё-Є-є-Ж-ж-З-з-И-и-І-і-Ї-ї-Й-й-К-к-Л-л-М-м-Н-н-О-о-П-п-Р-р-С-с-Т-т-У-у-Ф-ф-Х-х-Ц-ц-Ч-ч-Ш-ш-Щ-щ-Ъ-ъ-Ы-ы-Ь-ь-Э-э-Ю-ю-Я-я'.split('-');
    const en = "A-a-B-b-V-v-G-g-G-g-D-d-E-e-E-e-E-e-ZH-zh-Z-z-I-i-I-i-I-i-J-j-K-k-L-l-M-m-N-n-O-o-P-p-R-r-S-s-T-t-U-u-F-f-H-h-TS-ts-CH-ch-SH-sh-SCH-sch-'-'-Y-y-'-'-E-e-YU-yu-YA-ya".split('-');
    let res = '';
    for(let i = 0, l = str.length; i < l; i++){
        let s = str.charAt(i), n = ru.indexOf(s);
        if (n >= 0) {
            res += en[n];
        } else {
            res += s;
        }
    }
    return res;
};
const generateSlug = (str)=>{
    let url = str.replace(/[\s]+/gi, '-');
    url = translit(url);
    // eslint-disable-next-line
    url = url.replace(/[^0-9a-z_\-]+/gi, '').replace('---', '-').replace('--', '-').toLowerCase();
    return url;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateSlug);


/***/ })

};
;