"use strict";
exports.id = 479;
exports.ids = [479];
exports.modules = {

/***/ 5479:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ GenreService)
/* harmony export */ });
/* harmony import */ var api_interceptors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4714);
/* harmony import */ var _configs_api_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3739);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([api_interceptors__WEBPACK_IMPORTED_MODULE_0__]);
api_interceptors__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];


const GenreService = {
    async getBySlug (slug) {
        return api_interceptors__WEBPACK_IMPORTED_MODULE_0__/* .axiosClassic.get */ .v.get((0,_configs_api_config__WEBPACK_IMPORTED_MODULE_1__/* .getGenresUrl */ .V8)(`/by-slug/${slug}`));
    },
    async create () {
        return api_interceptors__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post((0,_configs_api_config__WEBPACK_IMPORTED_MODULE_1__/* .getGenresUrl */ .V8)(''));
    },
    async update (_id, data) {
        return api_interceptors__WEBPACK_IMPORTED_MODULE_0__/* ["default"].put */ .Z.put((0,_configs_api_config__WEBPACK_IMPORTED_MODULE_1__/* .getGenresUrl */ .V8)(`/${_id}`), data);
    },
    async delete (_id) {
        return api_interceptors__WEBPACK_IMPORTED_MODULE_0__/* ["default"]["delete"] */ .Z["delete"]((0,_configs_api_config__WEBPACK_IMPORTED_MODULE_1__/* .getGenresUrl */ .V8)(`/${_id}`));
    },
    async getAll (searchTerm) {
        return api_interceptors__WEBPACK_IMPORTED_MODULE_0__/* .axiosClassic.get */ .v.get((0,_configs_api_config__WEBPACK_IMPORTED_MODULE_1__/* .getGenresUrl */ .V8)(``), {
            params: searchTerm ? {
                searchTerm
            } : {}
        });
    },
    async getCollections () {
        return api_interceptors__WEBPACK_IMPORTED_MODULE_0__/* .axiosClassic.get */ .v.get((0,_configs_api_config__WEBPACK_IMPORTED_MODULE_1__/* .getGenresUrl */ .V8)('/collections'));
    },
    async getById (_id) {
        return api_interceptors__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get((0,_configs_api_config__WEBPACK_IMPORTED_MODULE_1__/* .getGenresUrl */ .V8)(`/${_id}`));
    },
    async getPopularGenres (limit = 4) {
        return api_interceptors__WEBPACK_IMPORTED_MODULE_0__/* .axiosClassic.get */ .v.get((0,_configs_api_config__WEBPACK_IMPORTED_MODULE_1__/* .getGenresUrl */ .V8)(`/popular`), {
            params: {
                limit
            }
        });
    }
};

});

/***/ })

};
;