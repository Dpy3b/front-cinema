exports.id = 606;
exports.ids = [606];
exports.modules = {

/***/ 7264:
/***/ ((module) => {

// Exports
module.exports = {
	"button": "FavoriteButton_button__4HnpL",
	"animate": "FavoriteButton_animate__4b8kX",
	"heart-burst": "FavoriteButton_heart-burst__jgos5"
};


/***/ }),

/***/ 9385:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/heart-animation.45ff2efe.png","height":100,"width":2900,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAMAAADU3h9xAAAABlBMVEXcNVjPes/jG+oAAAAAAnRSTlMPIb1iwakAAAAJcEhZcwAACxMAAAsTAQCanBgAAAANSURBVHicY2BkZAADAAAYAAOLgnXyAAAAAElFTkSuQmCC"});

/***/ }),

/***/ 528:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ useFavorites)
/* harmony export */ });
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5163);
/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1163);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__]);
_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];



const useFavorites = ()=>{
    const { user  } = (0,_hooks_useAuth__WEBPACK_IMPORTED_MODULE_2__/* .useAuth */ .a)();
    const { isLoading , data: favoritesMovies , refetch ,  } = (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)('Favorite movies', ()=>_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__/* .UserService.getFavorites */ .K.getFavorites()
    , {
        select: ({ data  })=>data
        ,
        enabled: !!user
    });
    return {
        isLoading,
        favoritesMovies,
        refetch
    };
};

});

/***/ }),

/***/ 606:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5163);
/* harmony import */ var _utils_api_withToastrErrorRedux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5777);
/* harmony import */ var _public_heart_animation_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9385);
/* harmony import */ var _favorites_useFavorites__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(528);
/* harmony import */ var _FavoriteButton_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7264);
/* harmony import */ var _FavoriteButton_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_FavoriteButton_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1163);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_user_user_service__WEBPACK_IMPORTED_MODULE_4__, _favorites_useFavorites__WEBPACK_IMPORTED_MODULE_7__]);
([_services_user_user_service__WEBPACK_IMPORTED_MODULE_4__, _favorites_useFavorites__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);










const FavoriteButton = ({ movieId  })=>{
    const { user  } = (0,_hooks_useAuth__WEBPACK_IMPORTED_MODULE_8__/* .useAuth */ .a)();
    if (!user) return null;
    const { 0: isSmashed , 1: setIsSmashed  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { favoritesMovies , refetch  } = (0,_favorites_useFavorites__WEBPACK_IMPORTED_MODULE_7__/* .useFavorites */ .r)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (favoritesMovies) {
            const isHasMovie = favoritesMovies.some((f)=>f._id === movieId
            ) // типа мы проверяем фильм на существование или что...?
            ;
            if (isSmashed !== isHasMovie) setIsSmashed(isHasMovie);
        }
    }, [
        favoritesMovies,
        isSmashed,
        movieId
    ]);
    const { mutateAsync  } = (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useMutation)('update actor', ()=>_services_user_user_service__WEBPACK_IMPORTED_MODULE_4__/* .UserService.toggleFavorite */ .K.toggleFavorite(movieId)
    , {
        onError (error) {
            (0,_utils_api_withToastrErrorRedux__WEBPACK_IMPORTED_MODULE_5__/* .toastError */ ._)(error, 'Update favorite list');
        },
        onSuccess () {
            setIsSmashed(!isSmashed);
            refetch();
        }
    });
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        onClick: ()=>mutateAsync()
        ,
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_FavoriteButton_module_scss__WEBPACK_IMPORTED_MODULE_9___default().button), {
            [(_FavoriteButton_module_scss__WEBPACK_IMPORTED_MODULE_9___default().animate)]: isSmashed
        }),
        style: {
            backgroundImage: `url(${_public_heart_animation_png__WEBPACK_IMPORTED_MODULE_6__/* ["default"].src */ .Z.src})`
        }
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FavoriteButton);

});

/***/ }),

/***/ 1163:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "a": () => (/* binding */ useAuth)
});

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
;// CONCATENATED MODULE: ./app/hooks/useTypedSelector.ts

const useTypedSelector = external_react_redux_.useSelector;

;// CONCATENATED MODULE: ./app/hooks/useAuth.ts

const useAuth = ()=>useTypedSelector((state)=>state.user
    )
;


/***/ }),

/***/ 5163:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var api_interceptors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4714);
/* harmony import */ var _configs_api_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3739);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([api_interceptors__WEBPACK_IMPORTED_MODULE_0__]);
api_interceptors__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];


const UserService = {
    async getProfile () {
        return api_interceptors__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get((0,_configs_api_config__WEBPACK_IMPORTED_MODULE_1__/* .getUsersUrl */ .Il)('/profile'));
    },
    async updateProfile (data) {
        return api_interceptors__WEBPACK_IMPORTED_MODULE_0__/* ["default"].put */ .Z.put((0,_configs_api_config__WEBPACK_IMPORTED_MODULE_1__/* .getUsersUrl */ .Il)('/profile'), data);
    },
    async getUsers (searchTerm) {
        return api_interceptors__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get((0,_configs_api_config__WEBPACK_IMPORTED_MODULE_1__/* .getUsersUrl */ .Il)(``), {
            params: searchTerm ? {
                searchTerm
            } : {}
        });
    },
    async getUser (_id) {
        return api_interceptors__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get((0,_configs_api_config__WEBPACK_IMPORTED_MODULE_1__/* .getUsersUrl */ .Il)(`/${_id}`));
    },
    async updateUser (_id, data) {
        return api_interceptors__WEBPACK_IMPORTED_MODULE_0__/* ["default"].put */ .Z.put((0,_configs_api_config__WEBPACK_IMPORTED_MODULE_1__/* .getUsersUrl */ .Il)(`/${_id}`), data);
    },
    async deleteUser (_id) {
        return api_interceptors__WEBPACK_IMPORTED_MODULE_0__/* ["default"]["delete"] */ .Z["delete"]((0,_configs_api_config__WEBPACK_IMPORTED_MODULE_1__/* .getUsersUrl */ .Il)(`/${_id}`));
    },
    async getFavorites () {
        return api_interceptors__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get((0,_configs_api_config__WEBPACK_IMPORTED_MODULE_1__/* .getUsersUrl */ .Il)('/profile/favorites'));
    },
    async toggleFavorite (movieId) {
        return api_interceptors__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post((0,_configs_api_config__WEBPACK_IMPORTED_MODULE_1__/* .getUsersUrl */ .Il)('/profile/favorites'), {
            movieId
        });
    }
};

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


/***/ })

};
;