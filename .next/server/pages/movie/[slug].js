(() => {
var exports = {};
exports.id = 226;
exports.ids = [226,197];
exports.modules = {

/***/ 4375:
/***/ ((module) => {

// Exports
module.exports = {
	"content": "Content_content__qxXfW",
	"rating": "Content_rating__zKZon",
	"details": "Content_details__0w6RG"
};


/***/ }),

/***/ 8994:
/***/ ((module) => {

// Exports
module.exports = {
	"list": "ContentList_list__txfiV",
	"name": "ContentList_name__klRS3",
	"links": "ContentList_links__cd0qI"
};


/***/ }),

/***/ 9070:
/***/ ((module) => {

// Exports
module.exports = {
	"banner": "Banner_banner__Xpiqz"
};


/***/ }),

/***/ 3972:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_icons_MaterialIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6980);
/* harmony import */ var _configs_url_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(590);
/* harmony import */ var _FavoriteButton_FavoriteButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(606);
/* harmony import */ var _Content_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4375);
/* harmony import */ var _Content_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Content_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ContentList_ContentList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5214);
/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1163);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_FavoriteButton_FavoriteButton__WEBPACK_IMPORTED_MODULE_2__]);
_FavoriteButton_FavoriteButton__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];







const Content = ({ movie  })=>{
    const { user  } = (0,_hooks_useAuth__WEBPACK_IMPORTED_MODULE_4__/* .useAuth */ .a)();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_Content_module_scss__WEBPACK_IMPORTED_MODULE_5___default().content),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                children: movie.title
            }),
            user && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FavoriteButton_FavoriteButton__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                movieId: movie._id
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_Content_module_scss__WEBPACK_IMPORTED_MODULE_5___default().rating),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_icons_MaterialIcon__WEBPACK_IMPORTED_MODULE_1__/* .MaterialIcon */ .O, {
                        name: "MdStarRate"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: movie.rating.toFixed(1)
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_Content_module_scss__WEBPACK_IMPORTED_MODULE_5___default().details),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        children: [
                            movie.parameters.year,
                            " \xb7 "
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        children: [
                            movie.parameters.country,
                            " \xb7 "
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        children: [
                            movie.parameters.duration,
                            " min."
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ContentList_ContentList__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                name: "Genres",
                links: movie.genres.map((g)=>({
                        link: (0,_configs_url_config__WEBPACK_IMPORTED_MODULE_6__/* .getGenreUrl */ .i8)(g.slug),
                        title: g.name,
                        _id: g._id
                    })
                )
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ContentList_ContentList__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                name: "Actors",
                links: movie.actors.map((a)=>({
                        link: (0,_configs_url_config__WEBPACK_IMPORTED_MODULE_6__/* .getActorUrl */ .F_)(a.slug),
                        title: a.name,
                        _id: a._id
                    })
                )
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Content);

});

/***/ }),

/***/ 5214:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var _ContentList_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8994);
/* harmony import */ var _ContentList_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ContentList_module_scss__WEBPACK_IMPORTED_MODULE_3__);




const ContentList = ({ name , links  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_ContentList_module_scss__WEBPACK_IMPORTED_MODULE_3___default().list),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_ContentList_module_scss__WEBPACK_IMPORTED_MODULE_3___default().name),
                children: [
                    name,
                    ":"
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_ContentList_module_scss__WEBPACK_IMPORTED_MODULE_3___default().links),
                children: links.slice(0, 3).map(({ link , title , _id  }, idx)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                href: link,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    children: title
                                })
                            }),
                            idx + 1 !== links.length ? ', ' : ''
                        ]
                    }, _id)
                )
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContentList);


/***/ }),

/***/ 256:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5152);
/* harmony import */ var _ui_banner_Banner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5217);
/* harmony import */ var _ui_gallery_Gallery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9226);
/* harmony import */ var _ui_heading_SubHeading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1365);
/* harmony import */ var _utils_meta__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1499);
/* harmony import */ var _Content_Content__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3972);
/* harmony import */ var _useUpdateCountOpened__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8916);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Content_Content__WEBPACK_IMPORTED_MODULE_6__, _useUpdateCountOpened__WEBPACK_IMPORTED_MODULE_7__]);
([_Content_Content__WEBPACK_IMPORTED_MODULE_6__, _useUpdateCountOpened__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);








const DynamicPlayer = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(null, {
    loadableGenerated: {
        modules: [
            "..\\app\\components\\screens\\single-movie\\SingleMovie.tsx -> " + "@/ui/video-player/VideoPlayer"
        ]
    },
    ssr: false
});
const DynamicRateMovie = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(null, {
    loadableGenerated: {
        modules: [
            "..\\app\\components\\screens\\single-movie\\SingleMovie.tsx -> " + "./RateMovie/RateMovie"
        ]
    },
    ssr: false
});
const SingleMovie = ({ movie , similarMovies ,  })=>{
    (0,_useUpdateCountOpened__WEBPACK_IMPORTED_MODULE_7__/* .useUpdateCountOpened */ .X)(movie.slug);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_utils_meta__WEBPACK_IMPORTED_MODULE_5__/* .Meta */ .h, {
        title: movie.title,
        description: `Watch ${movie.title}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_banner_Banner__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                imagePath: movie.bigPoster,
                Detail: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Content_Content__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        movie: movie
                    })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DynamicPlayer, {
                videoSource: movie.videoUrl,
                slug: movie.slug
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mt-12",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_heading_SubHeading__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        title: "Similar"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_gallery_Gallery__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        items: similarMovies
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DynamicRateMovie, {
                slug: movie.slug,
                _id: movie._id
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SingleMovie);

});

/***/ }),

/***/ 8916:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ useUpdateCountOpened)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_movie_movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3618);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_movie_movie_service__WEBPACK_IMPORTED_MODULE_2__]);
_services_movie_movie_service__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];



const useUpdateCountOpened = (slug)=>{
    const { mutateAsync  } = (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useMutation)('update actor', ()=>_services_movie_movie_service__WEBPACK_IMPORTED_MODULE_2__/* .MovieService.updateCountOpened */ .u.updateCountOpened(slug)
    );
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        mutateAsync();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};

});

/***/ }),

/***/ 5217:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Banner_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9070);
/* harmony import */ var _Banner_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Banner_module_scss__WEBPACK_IMPORTED_MODULE_3__);




const Banner = ({ imagePath , Detail  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_Banner_module_scss__WEBPACK_IMPORTED_MODULE_3___default().banner),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
                alt: "",
                src: imagePath,
                draggable: false,
                layout: "fill",
                className: "image-like-bg object-top",
                unoptimized: true,
                priority: true
            }),
            Detail && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Detail, {})
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Banner);


/***/ }),

/***/ 5838:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 7080:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var api_api_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4264);
/* harmony import */ var _components_screens_single_movie_SingleMovie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(256);
/* harmony import */ var _services_movie_movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3618);
/* harmony import */ var _configs_url_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(590);
/* harmony import */ var _404__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5838);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_movie_movie_service__WEBPACK_IMPORTED_MODULE_2__, _components_screens_single_movie_SingleMovie__WEBPACK_IMPORTED_MODULE_1__]);
([_services_movie_movie_service__WEBPACK_IMPORTED_MODULE_2__, _components_screens_single_movie_SingleMovie__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);






const SingleMoviePage = ({ movie , similarMovies  })=>{
    return movie ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_screens_single_movie_SingleMovie__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        movie: movie,
        similarMovies: similarMovies
    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_404__WEBPACK_IMPORTED_MODULE_3__["default"], {});
};
const getStaticPaths = async ()=>{
    try {
        const { data: movies  } = await _services_movie_movie_service__WEBPACK_IMPORTED_MODULE_2__/* .MovieService.getMovies */ .u.getMovies();
        const paths = movies.map((movie)=>({
                params: {
                    slug: movie.slug
                }
            })
        );
        return {
            paths,
            fallback: 'blocking'
        };
    } catch  {
        return {
            paths: [],
            fallback: false
        };
    }
};
const getStaticProps = async ({ params  })=>{
    try {
        const { data: movie  } = await _services_movie_movie_service__WEBPACK_IMPORTED_MODULE_2__/* .MovieService.getBySlug */ .u.getBySlug(String(params?.slug));
        const responseSimilarMovies = await _services_movie_movie_service__WEBPACK_IMPORTED_MODULE_2__/* .MovieService.getByGenres */ .u.getByGenres(movie.genres.map((g)=>g._id
        ));
        const similarMovies = responseSimilarMovies.data.filter((m)=>m._id !== movie._id
        ).map((m)=>({
                name: m.title,
                posterPath: m.poster,
                url: (0,_configs_url_config__WEBPACK_IMPORTED_MODULE_4__/* .getMovieUrl */ .Xl)(m.slug)
            })
        );
        return {
            props: {
                movie,
                similarMovies
            },
            revalidate: 60
        };
    } catch (e) {
        console.log((0,api_api_helpers__WEBPACK_IMPORTED_MODULE_5__/* .errorCatch */ .l)(e));
        return {
            notFound: true
        };
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SingleMoviePage);

});

/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 9003:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

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

/***/ 5832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

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

/***/ 4041:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/md");

/***/ }),

/***/ 1175:
/***/ ((module) => {

"use strict";
module.exports = require("react-query");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 1424:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux-toastr");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9915:
/***/ ((module) => {

"use strict";
module.exports = import("js-cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,675,152,133,771,714,125,47,606,650], () => (__webpack_exec__(7080)));
module.exports = __webpack_exports__;

})();