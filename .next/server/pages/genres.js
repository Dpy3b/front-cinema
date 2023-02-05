(() => {
var exports = {};
exports.id = 505;
exports.ids = [505];
exports.modules = {

/***/ 5155:
/***/ ((module) => {

// Exports
module.exports = {
	"collections": "Collections_collections__2FQ_p",
	"fade": "Collections_fade__fxizC",
	"collection": "Collections_collection__roKYx",
	"behind": "Collections_behind__bwBmP",
	"second": "Collections_second__gWL6O",
	"third": "Collections_third__Wm6FR",
	"content": "Collections_content__WxU4p",
	"title": "Collections_title__1EVHC"
};


/***/ }),

/***/ 1703:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ collections_CollectionItem)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./app/configs/url.config.ts
var url_config = __webpack_require__(590);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./app/components/screens/collections/CollectionImage.tsx


const CollectionImage = ({ collection: { image , title  } ,  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
        alt: title,
        src: image,
        layout: "fill",
        draggable: false
    }));
};
/* harmony default export */ const collections_CollectionImage = (CollectionImage);

// EXTERNAL MODULE: ./app/components/screens/collections/Collections.module.scss
var Collections_module = __webpack_require__(5155);
var Collections_module_default = /*#__PURE__*/__webpack_require__.n(Collections_module);
;// CONCATENATED MODULE: ./app/components/screens/collections/CollectionItem.tsx





const CollectionItem = ({ collection  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
        href: (0,url_config/* getGenreUrl */.i8)(collection.slug),
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
            className: (Collections_module_default()).collection,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(collections_CollectionImage, {
                    collection: collection
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (Collections_module_default()).content,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Collections_module_default()).title,
                        children: collection.title
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: `${(Collections_module_default()).behind} ${(Collections_module_default()).second}`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(collections_CollectionImage, {
                        collection: collection
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: `${(Collections_module_default()).behind} ${(Collections_module_default()).third}`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(collections_CollectionImage, {
                        collection: collection
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const collections_CollectionItem = (CollectionItem);


/***/ }),

/***/ 3860:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_heading_Description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7374);
/* harmony import */ var _components_ui_heading_Heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2289);
/* harmony import */ var _utils_meta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1499);
/* harmony import */ var _CollectionItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1703);
/* harmony import */ var _Collections_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5155);
/* harmony import */ var _Collections_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Collections_module_scss__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_heading_Description__WEBPACK_IMPORTED_MODULE_1__]);
_components_ui_heading_Description__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];






const title = 'Discovery';
const description = 'In this section you will find all genres on our site';
const Collections = ({ collections  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_utils_meta__WEBPACK_IMPORTED_MODULE_3__/* .Meta */ .h, {
        title: title,
        description: description,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_heading_Heading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                title: title,
                className: (_Collections_module_scss__WEBPACK_IMPORTED_MODULE_5___default().heading)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_heading_Description__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                text: description,
                className: (_Collections_module_scss__WEBPACK_IMPORTED_MODULE_5___default().description)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: (_Collections_module_scss__WEBPACK_IMPORTED_MODULE_5___default().collections),
                children: collections.map((collection)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CollectionItem__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        collection: collection
                    }, collection._id)
                )
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Collections);

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

/***/ }),

/***/ 590:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Xl": () => (/* binding */ getMovieUrl),
/* harmony export */   "i8": () => (/* binding */ getGenreUrl),
/* harmony export */   "F_": () => (/* binding */ getActorUrl),
/* harmony export */   "A7": () => (/* binding */ getAdminUrl),
/* harmony export */   "wk": () => (/* binding */ getAdminHomeUrl)
/* harmony export */ });
const getMovieUrl = (slug)=>`/movie/${slug}`
;
const getGenreUrl = (slug)=>`/genre/${slug}`
;
const getActorUrl = (slug)=>`/actor/${slug}`
;
const getAdminUrl = (url)=>`/manage/${url}`
;
const getAdminHomeUrl = ()=>getAdminUrl('').slice(0, -1)
;


/***/ }),

/***/ 1005:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _screens_collections_Collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3860);
/* harmony import */ var _services_genre_genre_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5479);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_genre_genre_service__WEBPACK_IMPORTED_MODULE_2__, _screens_collections_Collections__WEBPACK_IMPORTED_MODULE_1__]);
([_services_genre_genre_service__WEBPACK_IMPORTED_MODULE_2__, _screens_collections_Collections__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);



const GenresPage = ({ collections ,  })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_screens_collections_Collections__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        collections: collections || []
    }));
};
const getStaticProps = async ()=>{
    try {
        const { data: collections  } = await _services_genre_genre_service__WEBPACK_IMPORTED_MODULE_2__/* .GenreService.getCollections */ .c.getCollections();
        return {
            props: {
                collections
            },
            revalidate: 60
        };
    } catch (e) {
        // console.log(errorCatch(e))
        return {
            notFound: true
        };
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GenresPage);

});

/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 3018:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 2905:
/***/ ((module) => {

"use strict";
module.exports = import("html-react-parser");;

/***/ }),

/***/ 9915:
/***/ ((module) => {

"use strict";
module.exports = import("js-cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,675,133,771,714,479], () => (__webpack_exec__(1005)));
module.exports = __webpack_exports__;

})();