(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[473],{28597:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth",function(){return t(8082)}])},85033:function(e,r,t){"use strict";t.d(r,{Z:function(){return c}});var n=t(85893),o=t(73789),i=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;function u(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){u(e,r,t[r])}))}return e}var c=function(e){var r=e.register,t=e.formState.errors,u=e.isPasswordRequired,c=void 0!==u&&u;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.Z,a({},r("email",{required:"Email is required!",pattern:{value:i,message:"Please enter a valid email"}}),{placeholder:"E-mail",error:t.email})),(0,n.jsx)(o.Z,a({},r("password",c?{required:"Password is required!",minLength:{value:6,message:"Min length should more 6 symbols!"}}:{}),{placeholder:"Password",type:"password",error:t.password}))]})}},10073:function(e,r,t){"use strict";var n=t(85893),o=t(94184),i=t.n(o),u=t(15262),a=t.n(u);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}r.Z=function(e){var r=e.children,t=e.className,o=l(e,["children","className"]);return(0,n.jsx)("button",function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){c(e,r,t[r])}))}return e}({className:i()(a().button,t)},o,{children:r}))}},73789:function(e,r,t){"use strict";var n=t(85893),o=t(94184),i=t.n(o),u=t(67294),a=t(15262),c=t.n(a);function l(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){l(e,r,t[r])}))}return e}function f(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=(0,u.forwardRef)((function(e,r){var t=e.placeholder,o=e.error,u=e.type,a=void 0===u?"text":u,l=e.style,d=f(e,["placeholder","error","type","style"]);return(0,n.jsxs)("div",{className:i()(c().common,c().field),style:l,children:[(0,n.jsxs)("label",{children:[(0,n.jsx)("span",{children:t}),(0,n.jsx)("input",s({ref:r,type:a},d))]}),o&&(0,n.jsx)("div",{className:c().error,children:o.message})]})}));d.displayName="Field",r.Z=d},62289:function(e,r,t){"use strict";var n=t(85893);r.Z=function(e){var r=e.title,t=e.className,o=void 0===t?"":t;return(0,n.jsx)("h1",{className:"text-white text-opacity-80 font-semibold ".concat(o.includes("xl")?"":"text-3xl"," ").concat(o),children:r})}},71499:function(e,r,t){"use strict";t.d(r,{h:function(){return s},$:function(){return f}});var n=t(85893),o=t(9008),i=t(11163),u="Movie app",a=function(e){return"".concat(e," | ").concat(u)},c=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=e.replace(/<[^>]+>/g,"").replace(/&[^;]+./g," ").replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,"");return r&&(t=t.slice(0,r)+"..."),t},l=t(79247),s=function(e){var r=e.title,t=e.description,s=e.image,d=void 0===s?null:s,p=e.children,m=(0,i.useRouter)().asPath,b="".concat("http://localhost:3000").concat(m);return(0,n.jsxs)(n.Fragment,{children:[t?(0,n.jsxs)(o.default,{children:[(0,n.jsx)("title",{itemProp:"headline",children:a(r)}),(0,n.jsx)("meta",{itemProp:"description",name:"description",content:c(t,152)}),(0,n.jsx)("link",{rel:"canonical",href:b}),(0,n.jsx)("meta",{property:"og:locale",content:"en"}),(0,n.jsx)("meta",{property:"og:title",content:a(r)}),(0,n.jsx)("meta",{property:"og:url",content:b}),(0,n.jsx)("meta",{property:"og:image",content:d||l.Z}),(0,n.jsx)("meta",{property:"og:site_name",content:u}),(0,n.jsx)("meta",{property:"og:description",content:c(t,197)})]}):(0,n.jsx)(f,{title:r}),p]})},f=function(e){var r=e.title,t=void 0===r?"Error":r;return(0,n.jsxs)(o.default,{children:[(0,n.jsx)("title",{children:a(t)}),(0,n.jsx)("meta",{name:"robots",content:"noindex, nofollow"})]})}},8082:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return h}});var n=t(85893),o=t(96925),i=t.n(o),u=t(67294),a=t(87536),c=t(85033),l=t(10073),s=t(62289),f=t(44318),d=t(51163),p=t(71499),m=t(11163),b=function(){!function(){var e=(0,d.a)().user,r=(0,m.useRouter)(),t=r.query,n=r.push,o=t.redirect?String(t.redirect):"/";(0,u.useEffect)((function(){e&&n(o)}),[e,o,n])}();var e=(0,d.a)().isLoading,r=(0,u.useState)("login"),t=r[0],o=r[1],b=(0,a.cI)({mode:"onChange"}),h=b.register,y=b.handleSubmit,g=b.formState,j=b.reset,_=(0,f.o)(),x=_.login,v=_.register;return(0,n.jsx)(p.h,{title:"Auth",children:(0,n.jsx)("section",{className:i().wrapper,children:(0,n.jsxs)("form",{onSubmit:y((function(e){"login"===t?x(e):"register"===t&&v(e),j()})),children:[(0,n.jsx)(s.Z,{title:"Auth",className:"mb-6"}),(0,n.jsx)(c.Z,{register:h,formState:g}),(0,n.jsxs)("div",{className:i().buttons,children:[(0,n.jsx)(l.Z,{type:"submit",onClick:function(){return o("login")},disabled:e,children:"Login"}),(0,n.jsx)(l.Z,{type:"submit",onClick:function(){return o("register")},disabled:e,children:"Register"})]})]})})})},h=function(){return(0,n.jsx)(b,{})}},96925:function(e){e.exports={wrapper:"Auth_wrapper__q3sYo",buttons:"Auth_buttons__PYWyy"}},15262:function(e){e.exports={button:"form_button__zzx8l",common:"form_common__5EpHn",field:"form_field__KLTjc",uploadField:"form_uploadField__mJYFJ",uploadFlex:"form_uploadFlex__qWZSd",uploadImageContainer:"form_uploadImageContainer__yrxr7",fade:"form_fade__r_rtw",error:"form_error__hunHi",editorWrapper:"form_editorWrapper__lvmGd",wrapper:"form_wrapper__in9Fw",toolbar:"form_toolbar__xTi0C",editor:"form_editor__dPpWP"}}},function(e){e.O(0,[536,774,888,179],(function(){return r=28597,e(e.s=r);var r}));var r=e.O();_N_E=r}]);