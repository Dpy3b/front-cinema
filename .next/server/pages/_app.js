(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5241:
/***/ ((module) => {

// Exports
module.exports = {
	"layout": "Layout_layout__hHX_D",
	"center": "Layout_center__Xhzph"
};


/***/ }),

/***/ 7420:
/***/ ((module) => {

// Exports
module.exports = {
	"menu": "Menu_menu__6lLhZ",
	"fade": "Menu_fade__CUH2o",
	"heading": "Menu_heading__5EaaR",
	"ul": "Menu_ul___LYqm",
	"active": "Menu_active__lX9Yt"
};


/***/ }),

/***/ 4749:
/***/ ((module) => {

// Exports
module.exports = {
	"navigation": "Navigation_navigation__ownVh"
};


/***/ }),

/***/ 3761:
/***/ ((module) => {

// Exports
module.exports = {
	"list": "MovieList_list__LLlwF",
	"fade": "MovieList_fade__sa_QE",
	"heading": "MovieList_heading__Cz6l4",
	"button": "MovieList_button__DjatO",
	"item": "MovieList_item__LHQh6",
	"info": "MovieList_info__dCK_1",
	"title": "MovieList_title__3VX0i",
	"genres": "MovieList_genres__7twDO",
	"rating": "MovieList_rating__Ypg0S"
};


/***/ }),

/***/ 9073:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "Search_wrapper__r62gd"
};


/***/ }),

/***/ 518:
/***/ ((module) => {

// Exports
module.exports = {
	"list": "SearchList_list__lUVKL",
	"fade": "SearchList_fade__Myzif"
};


/***/ }),

/***/ 5325:
/***/ ((module) => {

// Exports
module.exports = {
	"sidebar": "Sidebar_sidebar__Fgjbw"
};


/***/ }),

/***/ 9247:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/logo.8f008d99.svg","height":34,"width":247});

/***/ }),

/***/ 6845:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6798);
/* harmony import */ var _Navigation_Navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8161);
/* harmony import */ var _Layout_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5241);
/* harmony import */ var _Layout_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Layout_module_scss__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_1__]);
_Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];




const Layout = ({ children  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_3___default().layout),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_3___default().center),
                children: children
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

});

/***/ }),

/***/ 8161:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Navigation_Navigation)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./app/assets/images/logo.svg
var logo = __webpack_require__(9247);
;// CONCATENATED MODULE: ./app/components/layout/Navigation/Logo.tsx




const Logo = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
        href: "/",
        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
            className: "px-layout mb-10 block",
            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                src: logo/* default */.Z,
                width: 247,
                height: 34,
                alt: "Movie app",
                draggable: false
            })
        })
    }));
};
/* harmony default export */ const Navigation_Logo = (Logo);

// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
// EXTERNAL MODULE: ./app/components/layout/Navigation/MenuContainer/Menu.module.scss
var Menu_module = __webpack_require__(7420);
var Menu_module_default = /*#__PURE__*/__webpack_require__.n(Menu_module);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./app/components/ui/icons/MaterialIcon.tsx + 1 modules
var MaterialIcon = __webpack_require__(6980);
;// CONCATENATED MODULE: ./app/components/layout/Navigation/MenuContainer/MenuItem.tsx






const MenuItem = ({ item  })=>{
    const { asPath  } = (0,router_.useRouter)();
    return(/*#__PURE__*/ jsx_runtime_.jsx("li", {
        className: external_classnames_default()({
            [(Menu_module_default()).active]: asPath === item.link
        }),
        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
            href: item.link,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(MaterialIcon/* MaterialIcon */.O, {
                        name: item.icon
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: item.title
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const MenuContainer_MenuItem = (MenuItem);

;// CONCATENATED MODULE: ./app/components/layout/Navigation/MenuContainer/Menu.tsx




const DynamicAuthItems = (0,dynamic["default"])(null, {
    loadableGenerated: {
        modules: [
            "..\\app\\components\\layout\\Navigation\\MenuContainer\\Menu.tsx -> " + "./auth/AuthItems"
        ]
    },
    ssr: false
});
const Menu = ({ menu: { items , title  }  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Menu_module_default()).menu,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Menu_module_default()).heading,
                children: title
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                className: (Menu_module_default()).ul,
                children: [
                    items.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(MenuContainer_MenuItem, {
                            item: item
                        }, item.link)
                    ),
                    title === 'General' ? /*#__PURE__*/ jsx_runtime_.jsx(DynamicAuthItems, {}) : null
                ]
            })
        ]
    }));
};
/* harmony default export */ const MenuContainer_Menu = (Menu);

;// CONCATENATED MODULE: ./app/components/layout/Navigation/MenuContainer/menu.data.ts
const firstMenu = {
    title: 'Menu',
    items: [
        {
            icon: 'MdHome',
            link: '/',
            title: 'Home'
        },
        {
            icon: 'MdExplore',
            link: '/genres',
            title: 'Discovery'
        },
        {
            icon: 'MdRefresh',
            link: '/fresh',
            title: 'Fresh movies'
        },
        {
            icon: 'MdLocalFireDepartment',
            link: '/trending',
            title: 'Trending now'
        }, 
    ]
};
const userMenu = {
    title: 'General',
    items: []
};
const menus = [
    firstMenu,
    userMenu
];

;// CONCATENATED MODULE: ./app/components/layout/Navigation/MenuContainer/MenuContainer.tsx




const DynamicGenreMenu = (0,dynamic["default"])(null, {
    loadableGenerated: {
        modules: [
            "..\\app\\components\\layout\\Navigation\\MenuContainer\\MenuContainer.tsx -> " + "./genres/GenreMenu"
        ]
    },
    ssr: false
});
const MenuContainer = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(MenuContainer_Menu, {
                menu: menus[0]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(DynamicGenreMenu, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(MenuContainer_Menu, {
                menu: {
                    title: 'General',
                    items: []
                }
            })
        ]
    }));
};
/* harmony default export */ const MenuContainer_MenuContainer = (MenuContainer);

// EXTERNAL MODULE: ./app/components/layout/Navigation/Navigation.module.scss
var Navigation_module = __webpack_require__(4749);
var Navigation_module_default = /*#__PURE__*/__webpack_require__.n(Navigation_module);
;// CONCATENATED MODULE: ./app/components/layout/Navigation/Navigation.tsx




const Navigation = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Navigation_module_default()).navigation,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Navigation_Logo, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(MenuContainer_MenuContainer, {})
        ]
    }));
};
/* harmony default export */ const Navigation_Navigation = (Navigation);


/***/ }),

/***/ 1711:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ MoviesContainer_MovieList)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./app/components/ui/icons/MaterialIcon.tsx + 1 modules
var MaterialIcon = __webpack_require__(6980);
// EXTERNAL MODULE: ./app/utils/movie/getGenresList.ts
var getGenresList = __webpack_require__(9037);
// EXTERNAL MODULE: ./app/configs/url.config.ts
var url_config = __webpack_require__(590);
// EXTERNAL MODULE: ./app/components/layout/Sidebar/MoviesContainer/MovieList.module.scss
var MovieList_module = __webpack_require__(3761);
var MovieList_module_default = /*#__PURE__*/__webpack_require__.n(MovieList_module);
;// CONCATENATED MODULE: ./app/components/layout/Sidebar/MoviesContainer/MovieItem.tsx







const MovieItem = ({ movie  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (MovieList_module_default()).item,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: (0,url_config/* getMovieUrl */.Xl)(movie.slug),
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                        alt: movie.title,
                        width: 65,
                        height: 97,
                        src: movie.poster,
                        draggable: false,
                        priority: true
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (MovieList_module_default()).info,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (MovieList_module_default()).title,
                                children: movie.title
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (MovieList_module_default()).genres,
                                children: movie.genres.map(({ slug , name , _id  }, idx)=>/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: (0,url_config/* getGenreUrl */.i8)(slug),
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            children: (0,getGenresList/* getGenresListEach */.R)(idx, movie.genres.length, name)
                                        })
                                    }, _id)
                                )
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (MovieList_module_default()).rating,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(MaterialIcon/* MaterialIcon */.O, {
                                name: "MdStarRate"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: movie.rating.toFixed(1)
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const MoviesContainer_MovieItem = (MovieItem);

;// CONCATENATED MODULE: ./app/components/layout/Sidebar/MoviesContainer/MovieList.tsx




const MovieList = ({ list: { link , movies , title  } ,  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (MovieList_module_default()).list,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (MovieList_module_default()).heading,
                children: title
            }),
            movies.map((movie)=>/*#__PURE__*/ jsx_runtime_.jsx(MoviesContainer_MovieItem, {
                    movie: movie
                }, movie._id)
            ),
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: link,
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: (MovieList_module_default()).button,
                    children: "See more"
                })
            })
        ]
    }));
};
/* harmony default export */ const MoviesContainer_MovieList = (MovieList);


/***/ }),

/***/ 9820:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5152);
/* harmony import */ var _PopularMovieList_PopularMovieList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5618);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_PopularMovieList_PopularMovieList__WEBPACK_IMPORTED_MODULE_2__]);
_PopularMovieList_PopularMovieList__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];



const DynamicFavoritesMovies = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(null, {
    loadableGenerated: {
        modules: [
            "..\\app\\components\\layout\\Sidebar\\MoviesContainer\\MoviesContainer.tsx -> " + "./FavoriteMovieList/FavoriteMovieList"
        ]
    },
    ssr: false
});
const MoviesContainer = ()=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PopularMovieList_PopularMovieList__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            " ",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DynamicFavoritesMovies, {})
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MoviesContainer);

});

/***/ }),

/***/ 5618:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_skeleton_loader_SkeletonLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(453);
/* harmony import */ var _MovieList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1711);
/* harmony import */ var _usePopular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4450);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_usePopular__WEBPACK_IMPORTED_MODULE_3__]);
_usePopular__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];




const PopularMovieList = ()=>{
    const { isLoading , popularMovies  } = (0,_usePopular__WEBPACK_IMPORTED_MODULE_3__/* .usePopular */ .U)();
    return isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "mt-11",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_skeleton_loader_SkeletonLoader__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
            count: 3,
            className: "h-28 mb-4"
        })
    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MovieList__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        list: {
            link: '/trending',
            movies: popularMovies || [],
            title: 'Popular movies'
        }
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopularMovieList);

});

/***/ }),

/***/ 4450:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ usePopular)
/* harmony export */ });
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_movie_movie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3618);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_movie_movie_service__WEBPACK_IMPORTED_MODULE_1__]);
_services_movie_movie_service__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];


const usePopular = ()=>{
    const { isLoading , data: popularMovies , refetch ,  } = (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)('Most popular movie in sidebar', ()=>_services_movie_movie_service__WEBPACK_IMPORTED_MODULE_1__/* .MovieService.getMostPopularMovies */ .u.getMostPopularMovies()
    , {
        select: (data)=>data.slice(0, 3)
    });
    return {
        isLoading,
        popularMovies,
        refetch
    };
};

});

/***/ }),

/***/ 4471:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ui_search_field_SearchField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3631);
/* harmony import */ var _hooks_useDebounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3489);
/* harmony import */ var _services_movie_movie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3618);
/* harmony import */ var _Search_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9073);
/* harmony import */ var _Search_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Search_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _SearchList_SearchList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7337);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_movie_movie_service__WEBPACK_IMPORTED_MODULE_5__]);
_services_movie_movie_service__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];








const Search = ()=>{
    const { 0: searchTerm , 1: setSearchTerm  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const debouncedSearch = (0,_hooks_useDebounce__WEBPACK_IMPORTED_MODULE_4__/* .useDebounce */ .N)(searchTerm, 500);
    const { isSuccess , data: popularMovies  } = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)([
        'search movie list',
        debouncedSearch
    ], ()=>_services_movie_movie_service__WEBPACK_IMPORTED_MODULE_5__/* .MovieService.getMovies */ .u.getMovies(debouncedSearch)
    , {
        select: ({ data  })=>data
        ,
        enabled: !!debouncedSearch
    });
    const handleSearch = (e)=>{
        setSearchTerm(e.target.value);
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_Search_module_scss__WEBPACK_IMPORTED_MODULE_7___default().wrapper),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_search_field_SearchField__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                searchTerm: searchTerm,
                handleSearch: handleSearch
            }),
            isSuccess && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SearchList_SearchList__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                movies: popularMovies || []
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Search);

});

/***/ }),

/***/ 7337:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var _SearchList_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(518);
/* harmony import */ var _SearchList_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_SearchList_module_scss__WEBPACK_IMPORTED_MODULE_3__);




const SearchList = ({ movies  })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_SearchList_module_scss__WEBPACK_IMPORTED_MODULE_3___default().list),
        children: movies.length ? movies.map((movie)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                href: `/movie/${movie.slug}`,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
                            src: movie.poster || '',
                            width: 50,
                            height: 50,
                            objectFit: "cover",
                            objectPosition: "top",
                            alt: movie.title,
                            draggable: false
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: movie.title
                        })
                    ]
                })
            }, movie._id)
        ) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "text-white text-center my-4",
            children: "Movies not found!"
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchList);


/***/ }),

/***/ 6798:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MoviesContainer_MoviesContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9820);
/* harmony import */ var _Search_Search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4471);
/* harmony import */ var _Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5325);
/* harmony import */ var _Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MoviesContainer_MoviesContainer__WEBPACK_IMPORTED_MODULE_1__, _Search_Search__WEBPACK_IMPORTED_MODULE_2__]);
([_MoviesContainer_MoviesContainer__WEBPACK_IMPORTED_MODULE_1__, _Search_Search__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);




const Sidebar = ()=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_3___default().sidebar),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Search_Search__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MoviesContainer_MoviesContainer__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);

});

/***/ }),

/***/ 1981:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1424);
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux_toastr__WEBPACK_IMPORTED_MODULE_1__);


const ReduxToastr = ()=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_redux_toastr__WEBPACK_IMPORTED_MODULE_1___default()), {
        newestOnTop: false,
        preventDuplicates: true,
        progressBar: true,
        closeOnToastrClick: true,
        timeOut: 4000,
        transitionIn: "fadeIn",
        transitionOut: "fadeOut"
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReduxToastr);


/***/ }),

/***/ 453:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9012);
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_loading_skeleton_dist_skeleton_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6593);
/* harmony import */ var react_loading_skeleton_dist_skeleton_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton_dist_skeleton_css__WEBPACK_IMPORTED_MODULE_3__);




const SkeletonLoader = ({ className , ...rest })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2___default()), {
        ...rest,
        baseColor: "#1F2125",
        highlightColor: "#292A2E",
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('rounded-lg', className)
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SkeletonLoader);


/***/ }),

/***/ 277:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9915);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5152);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks_useActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3710);
/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1163);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_1__, _hooks_useActions__WEBPACK_IMPORTED_MODULE_5__]);
([js_cookie__WEBPACK_IMPORTED_MODULE_1__, _hooks_useActions__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);







const DynamicCheckRole = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(null, {
    loadableGenerated: {
        modules: [
            "..\\app\\providers\\AuthProvider\\AuthProvider.tsx -> " + "./CheckRole"
        ]
    },
    ssr: false
});
const AuthProvider = ({ children , Component: { isOnlyAdmin , isOnlyUser  } ,  })=>{
    const { user  } = (0,_hooks_useAuth__WEBPACK_IMPORTED_MODULE_6__/* .useAuth */ .a)();
    const { checkAuth , logout  } = (0,_hooks_useActions__WEBPACK_IMPORTED_MODULE_5__/* .useActions */ .o)();
    const { pathname  } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        const accessToken = js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get('accessToken');
        if (accessToken) checkAuth();
    }, []) // eslint-disable-line react-hooks/exhaustive-deps
    ;
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        const refreshToken = js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get('refreshToken');
        if (!refreshToken && user) logout();
    }, [
        pathname
    ]) // eslint-disable-line react-hooks/exhaustive-deps
    ;
    return !isOnlyAdmin && !isOnlyUser ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: children
    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DynamicCheckRole, {
        Component: {
            isOnlyAdmin,
            isOnlyUser
        },
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthProvider);

});

/***/ }),

/***/ 487:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ HeadProvider_HeadProvider)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: external "nextjs-progressbar"
const external_nextjs_progressbar_namespaceObject = require("nextjs-progressbar");
var external_nextjs_progressbar_default = /*#__PURE__*/__webpack_require__.n(external_nextjs_progressbar_namespaceObject);
// EXTERNAL MODULE: ./app/configs/constants.ts
var constants = __webpack_require__(4507);
;// CONCATENATED MODULE: ./app/providers/HeadProvider/Favicons.tsx

const Favicons = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "shortcut icon",
                href: "/favicons/favicon.ico",
                type: "image/x-icon"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "apple-touch-icon",
                href: "/favicons/apple-touch-icon.png"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "apple-touch-icon",
                sizes: "57x57",
                href: "/favicons/apple-touch-icon-57x57.png"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "apple-touch-icon",
                sizes: "72x72",
                href: "/favicons/apple-touch-icon-72x72.png"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "apple-touch-icon",
                sizes: "76x76",
                href: "/favicons/apple-touch-icon-76x76.png"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "apple-touch-icon",
                sizes: "114x114",
                href: "/favicons/apple-touch-icon-114x114.png"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "apple-touch-icon",
                sizes: "120x120",
                href: "/favicons/apple-touch-icon-120x120.png"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "apple-touch-icon",
                sizes: "144x144",
                href: "/favicons/apple-touch-icon-144x144.png"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "apple-touch-icon",
                sizes: "152x152",
                href: "/favicons/apple-touch-icon-152x152.png"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "apple-touch-icon",
                sizes: "180x180",
                href: "/favicons/apple-touch-icon-180x180.png"
            })
        ]
    }));
};
/* harmony default export */ const HeadProvider_Favicons = (Favicons);

;// CONCATENATED MODULE: ./app/providers/HeadProvider/HeadProvider.tsx





const HeadProvider = ({ children  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((external_nextjs_progressbar_default()), {
                color: constants/* accentColor */.z,
                startPosition: 0.3,
                stopDelayMs: 200,
                height: 3
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        charSet: "UTF-8"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1, maximum-scale=1.0"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(HeadProvider_Favicons, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "theme-color",
                        content: '#181B1E'
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "msapplication-navbutton-color",
                        content: '#181B1E'
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "apple-mobile-web-app-status-bar-style",
                        content: '#181B1E'
                    })
                ]
            }),
            children
        ]
    }));
};
/* harmony default export */ const HeadProvider_HeadProvider = (HeadProvider);


/***/ }),

/***/ 9583:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AuthProvider_AuthProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(277);
/* harmony import */ var _HeadProvider_HeadProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(487);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var store_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1079);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6845);
/* harmony import */ var _ui_redux_toastr_ReduxToastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1981);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_layout_Layout__WEBPACK_IMPORTED_MODULE_6__, _AuthProvider_AuthProvider__WEBPACK_IMPORTED_MODULE_1__, store_store__WEBPACK_IMPORTED_MODULE_5__]);
([_components_layout_Layout__WEBPACK_IMPORTED_MODULE_6__, _AuthProvider_AuthProvider__WEBPACK_IMPORTED_MODULE_1__, store_store__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);








const queryClient = new react_query__WEBPACK_IMPORTED_MODULE_3__.QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false
        }
    }
});
const MainProvider = ({ children , Component  })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HeadProvider_HeadProvider__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_redux__WEBPACK_IMPORTED_MODULE_4__.Provider, {
            store: store_store__WEBPACK_IMPORTED_MODULE_5__/* .store */ .h,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_query__WEBPACK_IMPORTED_MODULE_3__.QueryClientProvider, {
                client: queryClient,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_redux_toastr_ReduxToastr__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AuthProvider_AuthProvider__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                        Component: Component,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            children: children
                        })
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainProvider);

});

/***/ }),

/***/ 4070:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ reducers)
/* harmony export */ });
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1424);
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux_toastr__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _user_user_slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8726);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_user_user_slice__WEBPACK_IMPORTED_MODULE_1__]);
_user_user_slice__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];


const reducers = {
    user: _user_user_slice__WEBPACK_IMPORTED_MODULE_1__/* .reducer */ .I,
    toastr: react_redux_toastr__WEBPACK_IMPORTED_MODULE_0__.reducer
};

});

/***/ }),

/***/ 1079:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ store)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _rootReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4070);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rootReducer__WEBPACK_IMPORTED_MODULE_1__]);
_rootReducer__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];


const store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({
    reducer: _rootReducer__WEBPACK_IMPORTED_MODULE_1__/* .reducers */ .l,
    devTools: true
});

});

/***/ }),

/***/ 8726:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ reducer)
/* harmony export */ });
/* unused harmony export userSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_local_storage_localStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6711);
/* harmony import */ var _user_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6444);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_user_actions__WEBPACK_IMPORTED_MODULE_1__]);
_user_actions__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];



const initialState = {
    user: (0,_utils_local_storage_localStorage__WEBPACK_IMPORTED_MODULE_2__/* .getStoreLocal */ .m)('user'),
    isLoading: false
};
const userSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(_user_actions__WEBPACK_IMPORTED_MODULE_1__.register.pending, (state)=>{
            state.isLoading = true;
        }).addCase(_user_actions__WEBPACK_IMPORTED_MODULE_1__.register.fulfilled, (state, { payload  })=>{
            state.isLoading = false;
            state.user = payload.user;
        }).addCase(_user_actions__WEBPACK_IMPORTED_MODULE_1__.register.rejected, (state)=>{
            state.isLoading = false;
            state.user = null;
        }).addCase(_user_actions__WEBPACK_IMPORTED_MODULE_1__.login.pending, (state)=>{
            state.isLoading = true;
        }).addCase(_user_actions__WEBPACK_IMPORTED_MODULE_1__.login.fulfilled, (state, { payload  })=>{
            state.isLoading = false;
            state.user = payload.user;
        }).addCase(_user_actions__WEBPACK_IMPORTED_MODULE_1__.login.rejected, (state)=>{
            state.isLoading = false;
            state.user = null;
        }).addCase(_user_actions__WEBPACK_IMPORTED_MODULE_1__.logout.fulfilled, (state)=>{
            state.isLoading = false;
            state.user = null;
        }).addCase(_user_actions__WEBPACK_IMPORTED_MODULE_1__.checkAuth.fulfilled, (state, { payload  })=>{
            state.user = payload.user;
        });
    }
});
const { reducer  } = userSlice;

});

/***/ }),

/***/ 5777:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ toastError)
/* harmony export */ });
/* harmony import */ var api_api_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4264);
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1424);
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux_toastr__WEBPACK_IMPORTED_MODULE_0__);


const toastError = (error, title)=>{
    const message = (0,api_api_helpers__WEBPACK_IMPORTED_MODULE_1__/* .errorCatch */ .l)(error);
    react_redux_toastr__WEBPACK_IMPORTED_MODULE_0__.toastr.error(title || 'Error request', message);
    throw message;
};


/***/ }),

/***/ 6711:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ getStoreLocal)
/* harmony export */ });
const getStoreLocal = (name)=>{
    if (typeof localStorage !== 'undefined') {
        const ls = localStorage.getItem(name);
        return ls ? JSON.parse(ls) : null;
    }
    return null;
};


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

/***/ 5656:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_providers_MainProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9583);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_app_providers_MainProvider__WEBPACK_IMPORTED_MODULE_1__]);
_app_providers_MainProvider__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];



const MyApp = ({ Component , pageProps  })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_providers_MainProvider__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        Component: Component,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
            ...pageProps
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

});

/***/ }),

/***/ 6593:
/***/ (() => {



/***/ }),

/***/ 5184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

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

/***/ 9012:
/***/ ((module) => {

"use strict";
module.exports = require("react-loading-skeleton");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,675,152,771,714,125,354,59], () => (__webpack_exec__(5656)));
module.exports = __webpack_exports__;

})();