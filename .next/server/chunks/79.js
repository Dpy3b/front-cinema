exports.id = 79;
exports.ids = [79];
exports.modules = {

/***/ 2774:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "AdminHeader_header__nQp9V"
};


/***/ }),

/***/ 172:
/***/ ((module) => {

// Exports
module.exports = {
	"actions": "AdminActions_actions__luRzF"
};


/***/ }),

/***/ 5687:
/***/ ((module) => {

// Exports
module.exports = {
	"item": "AdminTable_item__2GK1y",
	"itemHeader": "AdminTable_itemHeader__pYYir",
	"notFound": "AdminTable_notFound__UWbaX"
};


/***/ }),

/***/ 1919:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ AdminHeader_AdminHeader)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./app/components/ui/search-field/SearchField.tsx
var SearchField = __webpack_require__(3631);
// EXTERNAL MODULE: ./app/components/ui/form-elements/Button.tsx
var Button = __webpack_require__(73);
;// CONCATENATED MODULE: ./app/components/ui/admin-table/AdminCreateButton/AdminCreateButton.tsx


const AdminCreateButton = ({ onClick  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
        onClick: onClick,
        children: "Create new"
    }));
};
/* harmony default export */ const AdminCreateButton_AdminCreateButton = (AdminCreateButton);

// EXTERNAL MODULE: ./app/components/ui/admin-table/AdminHeader/AdminHeader.module.scss
var AdminHeader_module = __webpack_require__(2774);
var AdminHeader_module_default = /*#__PURE__*/__webpack_require__.n(AdminHeader_module);
;// CONCATENATED MODULE: ./app/components/ui/admin-table/AdminHeader/AdminHeader.tsx




const AdminHeader = ({ onClick , handleSearch , searchTerm ,  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (AdminHeader_module_default()).header,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(SearchField/* default */.Z, {
                handleSearch: handleSearch,
                searchTerm: searchTerm
            }),
            onClick && /*#__PURE__*/ jsx_runtime_.jsx(AdminCreateButton_AdminCreateButton, {
                onClick: onClick
            })
        ]
    }));
};
/* harmony default export */ const AdminHeader_AdminHeader = (AdminHeader);


/***/ }),

/***/ 8168:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ AdminTable_AdminTable)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./app/components/ui/skeleton-loader/SkeletonLoader.tsx
var SkeletonLoader = __webpack_require__(453);
// EXTERNAL MODULE: ./app/components/ui/admin-table/AdminTable/AdminTable.module.scss
var AdminTable_module = __webpack_require__(5687);
var AdminTable_module_default = /*#__PURE__*/__webpack_require__.n(AdminTable_module);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: ./app/components/ui/admin-table/AdminTable/AdminTableHeader.tsx



const AdminTableHeader = ({ headerItems  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: external_classnames_default()((AdminTable_module_default()).item, (AdminTable_module_default()).itemHeader),
        children: [
            headerItems.map((value)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: value
                }, value)
            ),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: "Actions"
            })
        ]
    }));
};
/* harmony default export */ const AdminTable_AdminTableHeader = (AdminTableHeader);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./app/components/ui/icons/MaterialIcon.tsx + 1 modules
var MaterialIcon = __webpack_require__(6980);
// EXTERNAL MODULE: ./app/components/ui/admin-table/AdminTable/AdminActions/AdminActions.module.scss
var AdminActions_module = __webpack_require__(172);
var AdminActions_module_default = /*#__PURE__*/__webpack_require__.n(AdminActions_module);
;// CONCATENATED MODULE: ./app/components/ui/admin-table/AdminTable/AdminActions/AdminActions.tsx




const AdminActions = ({ editUrl , removeHandler  })=>{
    const { push  } = (0,router_.useRouter)();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (AdminActions_module_default()).actions,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                onClick: ()=>push(editUrl)
                ,
                children: /*#__PURE__*/ jsx_runtime_.jsx(MaterialIcon/* MaterialIcon */.O, {
                    name: "MdEdit"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                onClick: removeHandler,
                children: /*#__PURE__*/ jsx_runtime_.jsx(MaterialIcon/* MaterialIcon */.O, {
                    name: "MdClose"
                })
            })
        ]
    }));
};
/* harmony default export */ const AdminActions_AdminActions = (AdminActions);

;// CONCATENATED MODULE: ./app/components/ui/admin-table/AdminTable/AdminTableItem.tsx



const AdminTableItem = ({ tableItem , removeHandler  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (AdminTable_module_default()).item,
        children: [
            tableItem.items.map((value)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: value
                }, value)
            ),
            /*#__PURE__*/ jsx_runtime_.jsx(AdminActions_AdminActions, {
                editUrl: tableItem.editUrl,
                removeHandler: ()=>removeHandler(tableItem._id)
            })
        ]
    }));
};
/* harmony default export */ const AdminTable_AdminTableItem = (AdminTableItem);

;// CONCATENATED MODULE: ./app/components/ui/admin-table/AdminTable/AdminTable.tsx





const AdminTable = ({ tableItems , headerItems , isLoading , removeHandler ,  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(AdminTable_AdminTableHeader, {
                headerItems: headerItems
            }),
            isLoading ? /*#__PURE__*/ jsx_runtime_.jsx(SkeletonLoader/* default */.Z, {
                count: 1,
                height: 48,
                className: "mt-4"
            }) : tableItems.length ? tableItems.map((tableItem)=>/*#__PURE__*/ jsx_runtime_.jsx(AdminTable_AdminTableItem, {
                    tableItem: tableItem,
                    removeHandler: removeHandler
                }, tableItem._id)
            ) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (AdminTable_module_default()).notFound,
                children: "Elements not found"
            })
        ]
    }));
};
/* harmony default export */ const AdminTable_AdminTable = (AdminTable);


/***/ })

};
;