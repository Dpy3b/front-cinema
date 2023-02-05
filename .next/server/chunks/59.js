"use strict";
exports.id = 59;
exports.ids = [59];
exports.modules = {

/***/ 3710:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ useActions)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_rootActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8975);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_rootActions__WEBPACK_IMPORTED_MODULE_2__]);
_store_rootActions__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];




const useActions = ()=>{
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>(0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__.bindActionCreators)(_store_rootActions__WEBPACK_IMPORTED_MODULE_2__/* .allActions */ .l, dispatch)
    , [
        dispatch
    ]);
};

});

/***/ }),

/***/ 1163:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


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

/***/ 8975:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ allActions)
/* harmony export */ });
/* harmony import */ var _user_user_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6444);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_user_user_actions__WEBPACK_IMPORTED_MODULE_0__]);
_user_user_actions__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];

const allActions = {
    ..._user_user_actions__WEBPACK_IMPORTED_MODULE_0__
};

});

/***/ }),

/***/ 6444:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "register": () => (/* binding */ register),
/* harmony export */   "login": () => (/* binding */ login),
/* harmony export */   "logout": () => (/* binding */ logout),
/* harmony export */   "checkAuth": () => (/* binding */ checkAuth)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var api_api_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4264);
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1424);
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux_toastr__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2771);
/* harmony import */ var _utils_api_withToastrErrorRedux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5777);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__]);
_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];





const register = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('auth/register', async ({ email , password  }, thunkAPI)=>{
    try {
        const response = await _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__/* .AuthService.register */ .e.register(email, password);
        react_redux_toastr__WEBPACK_IMPORTED_MODULE_1__.toastr.success('Registration', 'Completed successfully');
        return response.data;
    } catch (error) {
        (0,_utils_api_withToastrErrorRedux__WEBPACK_IMPORTED_MODULE_3__/* .toastError */ ._)(error);
        return thunkAPI.rejectWithValue(error);
    }
});
const login = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('auth/login', async ({ email , password  }, thunkAPI)=>{
    try {
        const response = await _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__/* .AuthService.login */ .e.login(email, password);
        react_redux_toastr__WEBPACK_IMPORTED_MODULE_1__.toastr.success('Login', 'Completed successfully');
        return response.data;
    } catch (error) {
        (0,_utils_api_withToastrErrorRedux__WEBPACK_IMPORTED_MODULE_3__/* .toastError */ ._)(error);
        return thunkAPI.rejectWithValue(error);
    }
});
const logout = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('auth/logout', async ()=>{
    await _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__/* .AuthService.logout */ .e.logout();
});
const checkAuth = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('auth/check-auth', async (_, thunkAPI)=>{
    try {
        const response = await _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__/* .AuthService.getNewTokens */ .e.getNewTokens();
        return response.data;
    } catch (error) {
        if ((0,api_api_helpers__WEBPACK_IMPORTED_MODULE_4__/* .errorCatch */ .l)(error) === 'jwt expired') {
            react_redux_toastr__WEBPACK_IMPORTED_MODULE_1__.toastr.error('Logout', 'Your authorizaiton is finished, plz sign in again');
            thunkAPI.dispatch(logout());
        }
        return thunkAPI.rejectWithValue(error);
    }
});

});

/***/ })

};
;