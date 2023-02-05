"use strict";
exports.id = 125;
exports.ids = [125];
exports.modules = {

/***/ 590:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Xl": () => (/* binding */ getMovieUrl),
/* harmony export */   "i8": () => (/* binding */ getGenreUrl),
/* harmony export */   "F_": () => (/* binding */ getActorUrl),
/* harmony export */   "A7": () => (/* binding */ getAdminUrl),
/* harmony export */   "wk": () => (/* binding */ getAdminHomeUrl)
/* harmony export */ });
const getMovieUrl = (slug)=>`/movie/${slug}`
;
const getGenreUrl = (slug)=>`/genre/${slug}`
;
const getActorUrl = (slug)=>`/actor/${slug}`
;
const getAdminUrl = (url)=>`/manage/${url}`
;
const getAdminHomeUrl = ()=>getAdminUrl('').slice(0, -1)
;


/***/ }),

/***/ 3618:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ MovieService)
/* harmony export */ });
/* harmony import */ var api_interceptors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4714);
/* harmony import */ var _configs_api_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3739);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([api_interceptors__WEBPACK_IMPORTED_MODULE_0__]);
api_interceptors__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];


const MovieService = {
    async getBySlug (slug) {
        return api_interceptors__WEBPACK_IMPORTED_MODULE_0__/* .axiosClassic.get */ .v.get((0,_configs_api_config__WEBPACK_IMPORTED_MODULE_1__/* .getMoviesUrl */ .IA)(`/by-slug/${slug}`));
    },
    async getByActor (actorId) {
        return api_interceptors__WEBPACK_IMPORTED_MODULE_0__/* .axiosClassic.get */ .v.get((0,_configs_api_config__WEBPACK_IMPORTED_MODULE_1__/* .getMoviesUrl */ .IA)(`/by-actor/${actorId}`));
    },
    async getByGenres (genreIds) {
        return api_interceptors__WEBPACK_IMPORTED_MODULE_0__/* .axiosClassic.post */ .v.post((0,_configs_api_config__WEBPACK_IMPORTED_MODULE_1__/* .getMoviesUrl */ .IA)(`/by-genres`), {
            genreIds
        });
    },
    async create () {
        return api_interceptors__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post((0,_configs_api_config__WEBPACK_IMPORTED_MODULE_1__/* .getMoviesUrl */ .IA)(''));
    },
    async updateCountOpened (slug) {
        return api_interceptors__WEBPACK_IMPORTED_MODULE_0__/* .axiosClassic.post */ .v.post((0,_configs_api_config__WEBPACK_IMPORTED_MODULE_1__/* .getMoviesUrl */ .IA)('/update-count-opened'), {
            slug
        });
    },
    async update (_id, data) {
        return api_interceptors__WEBPACK_IMPORTED_MODULE_0__/* ["default"].put */ .Z.put((0,_configs_api_config__WEBPACK_IMPORTED_MODULE_1__/* .getMoviesUrl */ .IA)(`/${_id}`), data);
    },
    async delete (_id) {
        return api_interceptors__WEBPACK_IMPORTED_MODULE_0__/* ["default"]["delete"] */ .Z["delete"]((0,_configs_api_config__WEBPACK_IMPORTED_MODULE_1__/* .getMoviesUrl */ .IA)(`/${_id}`));
    },
    async getMovies (searchTerm) {
        return api_interceptors__WEBPACK_IMPORTED_MODULE_0__/* .axiosClassic.get */ .v.get((0,_configs_api_config__WEBPACK_IMPORTED_MODULE_1__/* .getMoviesUrl */ .IA)(``), {
            params: searchTerm ? {
                searchTerm
            } : {}
        });
    },
    async getById (_id) {
        return api_interceptors__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get((0,_configs_api_config__WEBPACK_IMPORTED_MODULE_1__/* .getMoviesUrl */ .IA)(`/${_id}`));
    },
    async getMostPopularMovies () {
        const { data: movies  } = await api_interceptors__WEBPACK_IMPORTED_MODULE_0__/* .axiosClassic.get */ .v.get((0,_configs_api_config__WEBPACK_IMPORTED_MODULE_1__/* .getMoviesUrl */ .IA)('/most-popular'));
        return movies;
    }
};

});

/***/ })

};
;