"use strict";
(() => {
var exports = {};
exports.id = 994;
exports.ids = [994,197];
exports.modules = {

/***/ 3407:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _templates_catalog_movies_Catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4159);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_templates_catalog_movies_Catalog__WEBPACK_IMPORTED_MODULE_1__]);
_templates_catalog_movies_Catalog__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];


const Genre = ({ genre , movies  })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_templates_catalog_movies_Catalog__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        movies: movies,
        title: genre.name,
        description: genre.description
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Genre);

});

/***/ }),

/***/ 5838:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Error404)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_heading_Heading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2289);
/* harmony import */ var _utils_meta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1499);



function Error404() {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utils_meta__WEBPACK_IMPORTED_MODULE_2__/* .Meta */ .h, {
        title: "Page not found",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_heading_Heading__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
            title: "404 - Page Not Found"
        })
    }));
};


/***/ }),

/***/ 6364:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _screens_genre_Genre__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3407);
/* harmony import */ var _services_genre_genre_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5479);
/* harmony import */ var _services_movie_movie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3618);
/* harmony import */ var _404__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5838);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_movie_movie_service__WEBPACK_IMPORTED_MODULE_3__, _services_genre_genre_service__WEBPACK_IMPORTED_MODULE_2__, _screens_genre_Genre__WEBPACK_IMPORTED_MODULE_1__]);
([_services_movie_movie_service__WEBPACK_IMPORTED_MODULE_3__, _services_genre_genre_service__WEBPACK_IMPORTED_MODULE_2__, _screens_genre_Genre__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);





const GenrePage = ({ genre , movies  })=>{
    return genre ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_screens_genre_Genre__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        genre: genre,
        movies: movies
    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_404__WEBPACK_IMPORTED_MODULE_4__["default"], {});
};
const getStaticPaths = async ()=>{
    try {
        const { data: genres  } = await _services_genre_genre_service__WEBPACK_IMPORTED_MODULE_2__/* .GenreService.getAll */ .c.getAll();
        const paths = genres.map((g)=>({
                params: {
                    slug: g.slug
                }
            })
        );
        return {
            paths,
            fallback: 'blocking'
        };
    } catch (e) {
        // console.log(errorCatch(e))
        return {
            paths: [],
            fallback: false
        };
    }
};
const getStaticProps = async ({ params  })=>{
    try {
        const { data: genre  } = await _services_genre_genre_service__WEBPACK_IMPORTED_MODULE_2__/* .GenreService.getBySlug */ .c.getBySlug(String(params?.slug));
        const { data: movies  } = await _services_movie_movie_service__WEBPACK_IMPORTED_MODULE_3__/* .MovieService.getByGenres */ .u.getByGenres([
            genre._id
        ]);
        return {
            props: {
                movies,
                genre
            },
            revalidate: 60
        };
    } catch (e) {
        // console.log(errorCatch(e))
        return {
            props: {}
        };
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GenrePage);

});

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 9003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 3018:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 2905:
/***/ ((module) => {

module.exports = import("html-react-parser");;

/***/ }),

/***/ 9915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,675,133,771,714,125,47,479,159], () => (__webpack_exec__(6364)));
module.exports = __webpack_exports__;

})();