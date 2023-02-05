"use strict";
exports.id = 514;
exports.ids = [514];
exports.modules = {

/***/ 6945:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useUpload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8510);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var _skeleton_loader_SkeletonLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(453);
/* harmony import */ var _form_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9202);
/* harmony import */ var _form_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_form_module_scss__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useUpload__WEBPACK_IMPORTED_MODULE_1__]);
_useUpload__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];






const UploadField = ({ placeholder , error , style , image , folder , onChange , isNoImage =false ,  })=>{
    const { uploadImage , isLoading  } = (0,_useUpload__WEBPACK_IMPORTED_MODULE_1__/* .useUpload */ .V)(onChange, folder);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().field), (_form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().uploadField)),
        style: style,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().uploadFlex),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: placeholder
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "file",
                            onChange: uploadImage
                        }),
                        error && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().error),
                            children: error.message
                        })
                    ]
                }),
                !isNoImage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_form_module_scss__WEBPACK_IMPORTED_MODULE_5___default().uploadImageContainer),
                    children: isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_skeleton_loader_SkeletonLoader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        count: 1,
                        className: "w-full h-full"
                    }) : image && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
                        src: image,
                        alt: "",
                        layout: "fill",
                        unoptimized: true
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UploadField);

});

/***/ }),

/***/ 8510:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ useUpload)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_file_file_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7707);
/* harmony import */ var _utils_api_withToastrErrorRedux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5777);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_file_file_service__WEBPACK_IMPORTED_MODULE_2__]);
_services_file_file_service__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];




const useUpload = (onChange, folder)=>{
    const { 0: isLoading , 1: setIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const { mutateAsync  } = (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useMutation)('upload file', (data)=>_services_file_file_service__WEBPACK_IMPORTED_MODULE_2__/* .FileService.upload */ .I.upload(data, folder)
    , {
        onSuccess ({ data  }) {
            onChange(data[0].url);
        },
        onError (error) {
            (0,_utils_api_withToastrErrorRedux__WEBPACK_IMPORTED_MODULE_3__/* .toastError */ ._)(error, 'Upload image');
        }
    });
    const uploadImage = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (e)=>{
        setIsLoading(true);
        const files = e.target.files;
        if (files?.length) {
            const formData = new FormData();
            formData.append('image', files[0]);
            await mutateAsync(formData);
            setTimeout(()=>{
                setIsLoading(false);
            }, 1000);
        }
    }, [
        mutateAsync
    ]);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({
            uploadImage,
            isLoading
        })
    , [
        uploadImage,
        isLoading
    ]);
};

});

/***/ }),

/***/ 1854:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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

/***/ 7707:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ FileService)
/* harmony export */ });
/* harmony import */ var api_interceptors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4714);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([api_interceptors__WEBPACK_IMPORTED_MODULE_0__]);
api_interceptors__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];

const FileService = {
    async upload (file, folder) {
        return api_interceptors__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post('/files', file, {
            params: {
                folder
            },
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }
};

});

/***/ })

};
;