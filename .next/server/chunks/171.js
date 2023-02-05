exports.id = 171;
exports.ids = [171];
exports.modules = {

/***/ 2109:
/***/ ((module) => {

// Exports
module.exports = {
	"nav": "AdminNavigation_nav__jmpMb",
	"active": "AdminNavigation_active__DYQnj"
};


/***/ }),

/***/ 6604:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ admin_navigation_AdminNavigation)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./app/components/ui/admin-navigation/AdminNavigation.module.scss
var AdminNavigation_module = __webpack_require__(2109);
var AdminNavigation_module_default = /*#__PURE__*/__webpack_require__.n(AdminNavigation_module);
;// CONCATENATED MODULE: ./app/components/ui/admin-navigation/AdminNavItem.tsx





const AdminNavItem = ({ navItem  })=>{
    const { asPath  } = (0,router_.useRouter)();
    return(/*#__PURE__*/ jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
            href: navItem.link,
            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                className: external_classnames_default()({
                    [(AdminNavigation_module_default()).active]: asPath === navItem.link
                }),
                children: navItem.title
            })
        })
    }));
};
/* harmony default export */ const admin_navigation_AdminNavItem = (AdminNavItem);

// EXTERNAL MODULE: ./app/configs/url.config.ts
var url_config = __webpack_require__(590);
;// CONCATENATED MODULE: ./app/components/ui/admin-navigation/admin-navigation.data.ts

const navItems = [
    {
        title: 'Statistics',
        link: (0,url_config/* getAdminHomeUrl */.wk)()
    },
    {
        title: 'Users',
        link: (0,url_config/* getAdminUrl */.A7)('users')
    },
    {
        title: 'Movies',
        link: (0,url_config/* getAdminUrl */.A7)('movies')
    },
    {
        title: 'Actors',
        link: (0,url_config/* getAdminUrl */.A7)('actors')
    },
    {
        title: 'Genres',
        link: (0,url_config/* getAdminUrl */.A7)('genres')
    }, 
];

;// CONCATENATED MODULE: ./app/components/ui/admin-navigation/AdminNavigation.tsx




const AdminNavigation = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("nav", {
        className: (AdminNavigation_module_default()).nav,
        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
            children: navItems.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(admin_navigation_AdminNavItem, {
                    navItem: item
                }, item.link)
            )
        })
    }));
};
/* harmony default export */ const admin_navigation_AdminNavigation = (AdminNavigation);


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

/***/ 6593:
/***/ (() => {



/***/ })

};
;