"use strict";
exports.id = 714;
exports.ids = [714];
exports.modules = {

/***/ 4714:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ axiosClassic),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9915);
/* harmony import */ var _services_auth_auth_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8230);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2771);
/* harmony import */ var _configs_api_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3739);
/* harmony import */ var _configs_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4507);
/* harmony import */ var _api_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4264);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_auth_auth_helper__WEBPACK_IMPORTED_MODULE_2__, _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__, js_cookie__WEBPACK_IMPORTED_MODULE_1__]);
([_services_auth_auth_helper__WEBPACK_IMPORTED_MODULE_2__, _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__, js_cookie__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);







const axiosClassic = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
    baseURL: _configs_constants__WEBPACK_IMPORTED_MODULE_5__/* .IS_PRODUCTION */ .Mw ? _configs_api_config__WEBPACK_IMPORTED_MODULE_4__/* .API_SERVER_URL */ .oE : _configs_api_config__WEBPACK_IMPORTED_MODULE_4__/* .API_URL */ .T5,
    headers: {
        'Content-Type': 'application/json'
    }
});
const instance = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
    baseURL: _configs_api_config__WEBPACK_IMPORTED_MODULE_4__/* .API_URL */ .T5,
    headers: {
        'Content-Type': 'application/json'
    }
});
instance.interceptors.request.use((config)=>{
    const accessToken = js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get('accessToken');
    if (config.headers && accessToken) config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
});
instance.interceptors.response.use((config)=>config
, async (error)=>{
    const originalRequest = error.config;
    if ((error.response.status === 401 || (0,_api_helpers__WEBPACK_IMPORTED_MODULE_6__/* .errorCatch */ .l)(error) === 'jwt expired' || (0,_api_helpers__WEBPACK_IMPORTED_MODULE_6__/* .errorCatch */ .l)(error) === 'jwt must be provided') && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;
        try {
            await _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__/* .AuthService.getNewTokens */ .e.getNewTokens();
            return instance.request(originalRequest);
        } catch (error) {
            if ((0,_api_helpers__WEBPACK_IMPORTED_MODULE_6__/* .errorCatch */ .l)(error) === 'jwt expired') (0,_services_auth_auth_helper__WEBPACK_IMPORTED_MODULE_2__/* .removeTokensStorage */ .Pf)();
        }
    }
    throw error;
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instance);

});

/***/ }),

/***/ 4507:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ accentColor),
/* harmony export */   "Mw": () => (/* binding */ IS_PRODUCTION)
/* harmony export */ });
/* unused harmony exports bgColor, IS_SERVER, IS_CLIENT */
const accentColor = '#E30B13';
const bgColor = '#191B1F';
const IS_SERVER = (/* unused pure expression or super */ null && ("undefined" === 'undefined'));
const IS_CLIENT = (/* unused pure expression or super */ null && ("undefined" !== 'undefined'));
const IS_PRODUCTION = "production" === 'production';


/***/ })

};
;