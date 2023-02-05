(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 375:
/***/ ((module) => {

// Exports
module.exports = {
	"arrow": "SlideArrow_arrow__PZuCx",
	"fade": "SlideArrow_fade__4R2el",
	"left": "SlideArrow_left__XwRq_",
	"right": "SlideArrow_right__4GglY"
};


/***/ }),

/***/ 5393:
/***/ ((module) => {

// Exports
module.exports = {
	"slider": "Slider_slider__9NmJs",
	"slide": "Slider_slide__WR81a",
	"image": "Slider_image__gbodJ",
	"content": "Slider_content__kBQCa",
	"heading": "Slider_heading__7yKJh",
	"subHeading": "Slider_subHeading__vGPGL",
	"button": "Slider_button__Ymiay"
};


/***/ }),

/***/ 9660:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ home_Home)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./app/components/ui/gallery/Gallery.tsx
var Gallery = __webpack_require__(9226);
// EXTERNAL MODULE: ./app/components/ui/heading/Heading.tsx
var Heading = __webpack_require__(2289);
// EXTERNAL MODULE: ./app/components/ui/heading/SubHeading.tsx
var SubHeading = __webpack_require__(1365);
;// CONCATENATED MODULE: external "react-transition-group"
const external_react_transition_group_namespaceObject = require("react-transition-group");
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./app/components/ui/icons/MaterialIcon.tsx + 1 modules
var MaterialIcon = __webpack_require__(6980);
// EXTERNAL MODULE: ./app/components/ui/slider/SlideArrow/SlideArrow.module.scss
var SlideArrow_module = __webpack_require__(375);
var SlideArrow_module_default = /*#__PURE__*/__webpack_require__.n(SlideArrow_module);
;// CONCATENATED MODULE: ./app/components/ui/slider/SlideArrow/SlideArrow.tsx




const SlideArrow = ({ variant , clickHandler  })=>{
    const isLeft = variant === 'left';
    return(/*#__PURE__*/ jsx_runtime_.jsx("button", {
        onClick: clickHandler,
        className: external_classnames_default()((SlideArrow_module_default()).arrow, {
            [(SlideArrow_module_default()).left]: isLeft,
            [(SlideArrow_module_default()).right]: !isLeft
        }),
        children: /*#__PURE__*/ jsx_runtime_.jsx(MaterialIcon/* MaterialIcon */.O, {
            name: isLeft ? 'MdChevronLeft' : 'MdChevronRight'
        })
    }));
};
/* harmony default export */ const SlideArrow_SlideArrow = (SlideArrow);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./app/components/ui/slider/Slider.module.scss
var Slider_module = __webpack_require__(5393);
var Slider_module_default = /*#__PURE__*/__webpack_require__.n(Slider_module);
;// CONCATENATED MODULE: ./app/components/ui/slider/SlideItem.tsx




const SlideItem = ({ slide , buttonTitle ='Watch'  })=>{
    const { push  } = (0,router_.useRouter)();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Slider_module_default()).slide,
        children: [
            slide.bigPoster && /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                layout: "fill",
                className: (Slider_module_default()).image,
                src: slide.bigPoster,
                alt: slide.title,
                draggable: false,
                unoptimized: true,
                priority: true
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Slider_module_default()).content,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Slider_module_default()).heading,
                        children: slide.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Slider_module_default()).subHeading,
                        children: slide.subTitle
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: (Slider_module_default()).button,
                        onClick: ()=>push(slide.link)
                        ,
                        children: buttonTitle
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const slider_SlideItem = (SlideItem);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./app/components/ui/slider/useSlider.ts

const useSlider = (length)=>{
    const { 0: currentIndex , 1: setCurrentIndex  } = (0,external_react_.useState)(0);
    const { 0: slideIn , 1: setSlideIn  } = (0,external_react_.useState)(true);
    const isExistsNext = currentIndex + 1 < length;
    const isExistsPrev = currentIndex ? currentIndex - 1 < length : false;
    const handleArrowClick = (direction)=>{
        const newIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
        setSlideIn(false);
        setTimeout(()=>{
            setCurrentIndex(newIndex);
            setSlideIn(true);
        }, 300);
    };
    return {
        slideIn,
        index: currentIndex,
        isNext: isExistsNext,
        isPrev: isExistsPrev,
        handleClick: handleArrowClick
    };
};

;// CONCATENATED MODULE: ./app/components/ui/slider/Slider.tsx






const Slider = ({ buttonTitle , slides  })=>{
    const { handleClick , index , isNext , isPrev , slideIn  } = useSlider(slides.length);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Slider_module_default()).slider,
        children: [
            isPrev && /*#__PURE__*/ jsx_runtime_.jsx(SlideArrow_SlideArrow, {
                variant: "left",
                clickHandler: ()=>handleClick('prev')
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_transition_group_namespaceObject.CSSTransition, {
                in: slideIn,
                timeout: 300,
                classNames: "slide-animation",
                unmountOnExit: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx(slider_SlideItem, {
                    slide: slides[index],
                    buttonTitle: buttonTitle
                })
            }),
            isNext && /*#__PURE__*/ jsx_runtime_.jsx(SlideArrow_SlideArrow, {
                variant: "right",
                clickHandler: ()=>handleClick('next')
            })
        ]
    }));
};
/* harmony default export */ const slider_Slider = (Slider);

// EXTERNAL MODULE: ./app/utils/meta/index.ts + 4 modules
var meta = __webpack_require__(1499);
;// CONCATENATED MODULE: ./app/components/screens/home/Home.tsx






const Home = ({ slides , trendingMovies , actors  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(meta/* Meta */.h, {
        title: "Watch movies online",
        description: "Watch MovieApp movies and TV shows online or stream right to your browser.",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Heading/* default */.Z, {
                title: "Watch movies online",
                className: "text-gray-500 mb-8 text-xl"
            }),
            slides.length && /*#__PURE__*/ jsx_runtime_.jsx(slider_Slider, {
                slides: slides
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "my-10",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(SubHeading/* default */.Z, {
                        title: "Trending now"
                    }),
                    trendingMovies.length && /*#__PURE__*/ jsx_runtime_.jsx(Gallery/* default */.Z, {
                        items: trendingMovies
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(SubHeading/* default */.Z, {
                        title: "Best actors"
                    }),
                    actors.length && /*#__PURE__*/ jsx_runtime_.jsx(Gallery/* default */.Z, {
                        items: actors
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const home_Home = (Home);


/***/ }),

/***/ 1854:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ ActorService)
/* harmony export */ });
/* harmony import */ var api_interceptors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4714);
/* harmony import */ var _configs_api_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3739);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([api_interceptors__WEBPACK_IMPORTED_MODULE_0__]);
api_interceptors__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];


const ActorService = {
    async getBySlug (slug) {
        return api_interceptors__WEBPACK_IMPORTED_MODULE_0__/* .axiosClassic.get */ .v.get((0,_configs_api_config__WEBPACK_IMPORTED_MODULE_1__/* .getActorsUrl */ .q2)(`/by-slug/${slug}`));
    },
    async create () {
        return api_interceptors__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post((0,_configs_api_config__WEBPACK_IMPORTED_MODULE_1__/* .getActorsUrl */ .q2)(''));
    },
    async update (_id, data) {
        return api_interceptors__WEBPACK_IMPORTED_MODULE_0__/* ["default"].put */ .Z.put((0,_configs_api_config__WEBPACK_IMPORTED_MODULE_1__/* .getActorsUrl */ .q2)(`/${_id}`), data);
    },
    async delete (_id) {
        return api_interceptors__WEBPACK_IMPORTED_MODULE_0__/* ["default"]["delete"] */ .Z["delete"]((0,_configs_api_config__WEBPACK_IMPORTED_MODULE_1__/* .getActorsUrl */ .q2)(`/${_id}`));
    },
    async getAll (searchTerm) {
        return api_interceptors__WEBPACK_IMPORTED_MODULE_0__/* .axiosClassic.get */ .v.get((0,_configs_api_config__WEBPACK_IMPORTED_MODULE_1__/* .getActorsUrl */ .q2)(``), {
            params: searchTerm ? {
                searchTerm
            } : {}
        });
    },
    async getById (_id) {
        return api_interceptors__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get((0,_configs_api_config__WEBPACK_IMPORTED_MODULE_1__/* .getActorsUrl */ .q2)(`/${_id}`));
    }
};

});

/***/ }),

/***/ 9037:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ getGenresListEach),
/* harmony export */   "Q": () => (/* binding */ getGenresList)
/* harmony export */ });
const getGenresListEach = (index, length, name)=>index + 1 === length ? name : name + ', '
;
const getGenresList = (array)=>array.map((i)=>i.name
    ).join(', ')
;


/***/ }),

/***/ 5075:
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
/* harmony import */ var api_api_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4264);
/* harmony import */ var _screens_home_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9660);
/* harmony import */ var _services_actor_actor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1854);
/* harmony import */ var _services_movie_movie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3618);
/* harmony import */ var _utils_movie_getGenresList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9037);
/* harmony import */ var _configs_url_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(590);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_movie_movie_service__WEBPACK_IMPORTED_MODULE_3__, _services_actor_actor_service__WEBPACK_IMPORTED_MODULE_2__]);
([_services_movie_movie_service__WEBPACK_IMPORTED_MODULE_3__, _services_actor_actor_service__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);







const HomePage = (props)=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_screens_home_Home__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        ...props
    }));
};
const getStaticProps = async ()=>{
    try {
        const { data: movies  } = await _services_movie_movie_service__WEBPACK_IMPORTED_MODULE_3__/* .MovieService.getMovies */ .u.getMovies();
        const { data: dataActors  } = await _services_actor_actor_service__WEBPACK_IMPORTED_MODULE_2__/* .ActorService.getAll */ .V.getAll();
        const datatTrendingMovies = await _services_movie_movie_service__WEBPACK_IMPORTED_MODULE_3__/* .MovieService.getMostPopularMovies */ .u.getMostPopularMovies();
        const slides = movies.slice(0, 3).map((m)=>({
                _id: m._id,
                link: (0,_configs_url_config__WEBPACK_IMPORTED_MODULE_4__/* .getMovieUrl */ .Xl)(m.slug),
                subTitle: (0,_utils_movie_getGenresList__WEBPACK_IMPORTED_MODULE_5__/* .getGenresList */ .Q)(m.genres),
                title: m.title,
                bigPoster: m.bigPoster
            })
        );
        const actors = dataActors.slice(0, 7).map((a)=>({
                name: a.name,
                posterPath: a.photo,
                url: (0,_configs_url_config__WEBPACK_IMPORTED_MODULE_4__/* .getActorUrl */ .F_)(a.slug),
                content: {
                    title: a.name,
                    subTitle: `+${a.countMovies} movies`
                }
            })
        );
        const trendingMovies = datatTrendingMovies.slice(0, 7).map((m)=>({
                name: m.title,
                posterPath: m.poster,
                url: (0,_configs_url_config__WEBPACK_IMPORTED_MODULE_4__/* .getMovieUrl */ .Xl)(m.slug)
            })
        );
        return {
            props: {
                actors,
                slides,
                trendingMovies
            },
            revalidate: 60
        };
    } catch (error) {
        console.log((0,api_api_helpers__WEBPACK_IMPORTED_MODULE_6__/* .errorCatch */ .l)(error));
        return {
            props: {
                actors: [],
                slides: [],
                trendingMovies: []
            }
        };
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,675,133,771,714,125,47,650], () => (__webpack_exec__(5075)));
module.exports = __webpack_exports__;

})();