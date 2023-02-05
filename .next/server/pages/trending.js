"use strict";
(() => {
var exports = {};
exports.id = 827;
exports.ids = [827];
exports.modules = {

/***/ 8026:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_screens_templates_catalog_movies_Catalog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4159);
/* harmony import */ var _services_movie_movie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3618);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_movie_movie_service__WEBPACK_IMPORTED_MODULE_3__, _components_screens_templates_catalog_movies_Catalog__WEBPACK_IMPORTED_MODULE_2__]);
([_services_movie_movie_service__WEBPACK_IMPORTED_MODULE_3__, _components_screens_templates_catalog_movies_Catalog__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);




const TrendingPage = ()=>{
    const { data: popularMovies  } = (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)('Popular movies', ()=>_services_movie_movie_service__WEBPACK_IMPORTED_MODULE_3__/* .MovieService.getMostPopularMovies */ .u.getMostPopularMovies()
    );
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_screens_templates_catalog_movies_Catalog__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        movies: popularMovies || [],
        title: "Trending movies",
        description: "Trending movies in excellent quality: legal, safe, without ads"
    }));
};
const getStaticProps = async ()=>{
    const queryClient = new react_query__WEBPACK_IMPORTED_MODULE_1__.QueryClient();
    await queryClient.prefetchQuery('Popular movies', ()=>_services_movie_movie_service__WEBPACK_IMPORTED_MODULE_3__/* .MovieService.getMostPopularMovies */ .u.getMostPopularMovies()
    );
    return {
        props: {
            dehydratedState: (0,react_query__WEBPACK_IMPORTED_MODULE_1__.dehydrate)(queryClient)
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TrendingPage);

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

/***/ 1175:
/***/ ((module) => {

module.exports = require("react-query");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,675,133,771,714,125,47,159], () => (__webpack_exec__(8026)));
module.exports = __webpack_exports__;

})();