"use strict";
exports.id = 771;
exports.ids = [771];
exports.modules = {

/***/ 4264:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ errorCatch),
/* harmony export */   "w": () => (/* binding */ getContentType)
/* harmony export */ });
const errorCatch = (error)=>error.response && error.response.data ? typeof error.response.data.message === 'object' ? error.response.data.message[0] : error.response.data.message : error.message
;
const getContentType = ()=>({
        'Content-Type': 'application/json'
    })
;


/***/ }),

/***/ 3739:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T5": () => (/* binding */ API_URL),
/* harmony export */   "oE": () => (/* binding */ API_SERVER_URL),
/* harmony export */   "N6": () => (/* binding */ getAuthUrl),
/* harmony export */   "Il": () => (/* binding */ getUsersUrl),
/* harmony export */   "IA": () => (/* binding */ getMoviesUrl),
/* harmony export */   "V8": () => (/* binding */ getGenresUrl),
/* harmony export */   "q2": () => (/* binding */ getActorsUrl)
/* harmony export */ });
/* unused harmony export getRatingsUrl */
const API_URL = `${"http://localhost:3000"}/api`;
const API_SERVER_URL = `${"http://localhost:4200"}/api`;
const getAuthUrl = (string)=>`/auth${string}`
;
const getUsersUrl = (string)=>`/users${string}`
;
const getMoviesUrl = (string)=>`/movies${string}`
;
const getGenresUrl = (string)=>`/genres${string}`
;
const getActorsUrl = (string)=>`/actors${string}`
;
const getRatingsUrl = (string)=>`/ratings${string}`
;


/***/ }),

/***/ 8230:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RY": () => (/* binding */ saveToStorage),
/* harmony export */   "Pf": () => (/* binding */ removeTokensStorage)
/* harmony export */ });
/* unused harmony export saveTokensStorage */
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9915);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_0__]);
js_cookie__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];

const saveTokensStorage = (data)=>{
    js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].set('accessToken', data.accessToken);
    js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].set('refreshToken', data.refreshToken);
};
const saveToStorage = (data)=>{
    saveTokensStorage(data);
    localStorage.setItem('user', JSON.stringify(data.user));
};
const removeTokensStorage = ()=>{
    js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].remove('accessToken');
    js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].remove('refreshToken');
};

});

/***/ }),

/***/ 2771:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var api_api_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4264);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9915);
/* harmony import */ var _configs_api_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3739);
/* harmony import */ var _auth_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8230);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_auth_helper__WEBPACK_IMPORTED_MODULE_3__, js_cookie__WEBPACK_IMPORTED_MODULE_1__]);
([_auth_helper__WEBPACK_IMPORTED_MODULE_3__, js_cookie__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);





const AuthService = {
    async register (email, password) {
        const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${_configs_api_config__WEBPACK_IMPORTED_MODULE_2__/* .API_URL */ .T5}${(0,_configs_api_config__WEBPACK_IMPORTED_MODULE_2__/* .getAuthUrl */ .N6)('/register')}`, {
            email,
            password
        });
        if (response.data.accessToken) {
            (0,_auth_helper__WEBPACK_IMPORTED_MODULE_3__/* .saveToStorage */ .RY)(response.data);
        }
        return response;
    },
    async login (email, password) {
        const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${_configs_api_config__WEBPACK_IMPORTED_MODULE_2__/* .API_URL */ .T5}${(0,_configs_api_config__WEBPACK_IMPORTED_MODULE_2__/* .getAuthUrl */ .N6)('/login')}`, {
            email,
            password
        });
        if (response.data.accessToken) {
            (0,_auth_helper__WEBPACK_IMPORTED_MODULE_3__/* .saveToStorage */ .RY)(response.data);
        }
        return response;
    },
    logout () {
        (0,_auth_helper__WEBPACK_IMPORTED_MODULE_3__/* .removeTokensStorage */ .Pf)();
        localStorage.removeItem('user');
    },
    async getNewTokens () {
        const refreshToken = js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get('refreshToken');
        const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${_configs_api_config__WEBPACK_IMPORTED_MODULE_2__/* .API_URL */ .T5}${(0,_configs_api_config__WEBPACK_IMPORTED_MODULE_2__/* .getAuthUrl */ .N6)('/login/access-token')}`, {
            refreshToken
        }, {
            headers: (0,api_api_helpers__WEBPACK_IMPORTED_MODULE_4__/* .getContentType */ .w)()
        });
        if (response.data.accessToken) {
            (0,_auth_helper__WEBPACK_IMPORTED_MODULE_3__/* .saveToStorage */ .RY)(response.data);
        }
        return response;
    }
};

});

/***/ })

};
;