(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{364:function(t,e,a){"use strict";a.r(e);var n=a(44),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),a("h4",{attrs:{id:"typo3-module-for-nuxt-js-and-typo3-headless-provides-api-handling-and-frontend-rendering"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#typo3-module-for-nuxt-js-and-typo3-headless-provides-api-handling-and-frontend-rendering"}},[t._v("#")]),t._v(" TYPO3 module for "),a("a",{attrs:{href:"https://nuxtjs.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("Nuxt.js"),a("OutboundLink")],1),t._v(" and "),a("a",{attrs:{href:"https://github.com/TYPO3-Initiatives/headless",target:"_blank",rel:"noopener noreferrer"}},[t._v("TYPO3 headless"),a("OutboundLink")],1),t._v(" provides API handling and frontend rendering.")]),t._v(" "),a("p",{attrs:{align:"center"}},[a("img",{attrs:{align:"center",width:"500",src:t.$withBase("/images/nuxt_typo3.svg"),alt:"nuxt-typo3"}})]),t._v(" "),a("p",{attrs:{align:"center"}},[a("a",{attrs:{href:"https://npmjs.com/package/nuxt-typo3"}},[a("img",{attrs:{src:"https://img.shields.io/npm/v/nuxt-typo3/latest.svg?style=flat-square",alt:"npm downloads"}})]),t._v(" "),a("a",{attrs:{href:"https://npmjs.com/package/nuxt-typo3"}},[a("img",{attrs:{src:"https://img.shields.io/npm/dt/nuxt-typo3.svg?style=flat-square",alt:"npm version"}})]),t._v(" "),a("a",{attrs:{href:"https://standardjs.com"}},[a("img",{attrs:{src:"https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square",alt:"standard js"}})]),t._v(" "),a("a",{attrs:{href:"https://www.npmjs.com/package/nuxt-typo3"}},[a("img",{attrs:{src:"https://img.shields.io/npm/l/nuxt-typo3.svg?style=flat-square",alt:"License"}})])]),t._v(" "),a("h2",{attrs:{id:"features"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#features"}},[t._v("#")]),t._v(" Features")]),t._v(" "),a("p",[t._v("✅ Handle dynamic API routes")]),t._v(" "),a("p",[t._v("✅ Frontend layouts")]),t._v(" "),a("p",[t._v("✅ Backend layouts")]),t._v(" "),a("p",[t._v("✅ Multilanguage")]),t._v(" "),a("p",[t._v("✅ Meta tags provided by API")]),t._v(" "),a("p",[t._v("✅ Most of the standard TYPO3 Content Elements (in progress)")]),t._v(" "),a("p",[t._v("✅ SSR Ready")]),t._v(" "),a("h2",{attrs:{id:"how-it-works"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-it-works"}},[t._v("#")]),t._v(" How it works")]),t._v(" "),a("p",[t._v("To handle dynamic routes provided by an API we use "),a("a",{attrs:{href:"https://nuxtjs.org/guide/routing#unknown-dynamic-nested-routes",target:"_blank",rel:"noopener noreferrer"}},[t._v("Unknown Dynamic Nested Routes Pattern"),a("OutboundLink")],1),t._v(". (We don't know exactly what pages are defined in the backend).\nWhat this plugin is doing to resolve TYPO3 data is just hook into the Nuxt.js navigation cycle to provide page data for the frontend and the SSR context.")]),t._v(" "),a("ol",[a("li",[t._v("The first call to the API is executed during "),a("a",{attrs:{href:"https://nuxtjs.org/guide/vuex-store#the-nuxtserverinit-action",target:"_blank",rel:"noopener noreferrer"}},[t._v("nuxtServerInit Action"),a("OutboundLink")],1),t._v(" and is responsible for getting initial data for your application like languages, main navigations etc. This call is executed in SSR context (first hit) and also when the language on the website has been changed - then we want to get the initial data again for the correct language.")]),t._v(" "),a("li",[t._v("The second call to the API gets the current page data information. It is executed on first hit and also on each route change.")])]),t._v(" "),a("p",[t._v("On the frontend we have implemeneted some helper components to handle main features of TYPO3 frontend. Read more in "),a("a",{attrs:{href:"https://typo3-initiatives.github.io/nuxt-typo3/frontend/",target:"_blank",rel:"noopener noreferrer"}},[t._v("frontend section"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"schema"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#schema"}},[t._v("#")]),t._v(" Schema")]),t._v(" "),a("p",[t._v("This schema shows how the Nuxt.js navigation cycle was changed.")]),t._v(" "),a("p",[a("img",{attrs:{src:"/nuxt-typo3/images/schema.svg",alt:"Schema"}})])])}),[],!1,null,null,null);e.default=s.exports}}]);