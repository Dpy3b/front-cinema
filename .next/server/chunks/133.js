"use strict";
exports.id = 133;
exports.ids = [133];
exports.modules = {

/***/ 9247:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/logo.8f008d99.svg","height":34,"width":247});

/***/ }),

/***/ 2289:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Heading = ({ title , className =''  })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
        className: `text-white text-opacity-80 font-semibold ${className.includes('xl') ? '' : 'text-3xl'} ${className}`,
        children: title
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Heading);


/***/ }),

/***/ 1499:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "h": () => (/* reexport */ Meta),
  "$": () => (/* reexport */ MetaNoIndex)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./app/configs/seo.config.ts
const siteName = 'Movie app';
const titleMerge = (title)=>`${title} | ${siteName}`
;

;// CONCATENATED MODULE: ./app/utils/string/clearText.ts
const onlyText = (_string, limit = null)=>{
    let result = _string.replace(/<[^>]+>/g, '').replace(/&[^;]+./g, ' ').replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
    if (limit) result = result.slice(0, limit) + '...';
    return result;
};

// EXTERNAL MODULE: ./app/assets/images/logo.svg
var logo = __webpack_require__(9247);
;// CONCATENATED MODULE: ./app/utils/meta/Meta.tsx







const Meta = ({ title , description , image =null , children ,  })=>{
    const { asPath  } = (0,router_.useRouter)();
    const currentUrl = `${"http://localhost:3000"}${asPath}`;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            description ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        itemProp: "headline",
                        children: titleMerge(title)
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        itemProp: "description",
                        name: "description",
                        content: onlyText(description, 152)
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "canonical",
                        href: currentUrl
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:locale",
                        content: "en"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:title",
                        content: titleMerge(title)
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:url",
                        content: currentUrl
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:image",
                        content: image || logo/* default */.Z
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:site_name",
                        content: siteName
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:description",
                        content: onlyText(description, 197)
                    })
                ]
            }) : /*#__PURE__*/ jsx_runtime_.jsx(MetaNoIndex, {
                title: title
            }),
            children
        ]
    }));
};

;// CONCATENATED MODULE: ./app/utils/meta/MetaNoIndex.tsx



const MetaNoIndex = ({ title ='Error'  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                children: titleMerge(title)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "robots",
                content: "noindex, nofollow"
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./app/utils/meta/index.ts




/***/ })

};
;