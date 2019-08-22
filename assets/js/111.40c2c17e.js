(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{553:function(e,t,i){"use strict";i.r(t);var a=i(1),r=Object(a.a)({},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"content"},[i("p",[e._v("This article will cover uri (url) usage in Weex. Including using image/typeface resources, deal with relative uri and how to access local and packaged asset files.")]),e._m(0),e._m(1),e._m(2),e._m(3),e._m(4),e._m(5),e._m(6),i("p",[i("a",{attrs:{href:"https://www.w3.org/TR/html4/types.html#type-uri",target:"_blank",rel:"noopener noreferrer"}},[e._v("Like we do in HTML"),i("OutboundLink")],1),e._v(", weex process 'relative URI' in the same way. The relative URI, which start with "),i("code",[e._v("/")]),e._v(","),i("code",[e._v(".")]),e._v(","),i("code",[e._v("..")]),e._v(","),i("code",[e._v("//")]),e._v(", will resolve by the bundle url.\nMeans URL start with "),i("code",[e._v("/")]),e._v(" will resolve to the root folder as bundle js file, "),i("code",[e._v(".")]),e._v(" and "),i("code",[e._v("..")]),e._v(" will resolve to current and parent folder, and "),i("code",[e._v("//")]),e._v(" will resolve to same scheme bundle js have.")]),e._m(7),i("p",[e._v("All the above is the default implementation, developers can extend or override these their own by providing a 'URI Adapter'. Same as the other adapters, Custom adapter should be set before Weex SDK is initializing.")])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"schemes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#schemes","aria-hidden":"true"}},[this._v("#")]),this._v(" Schemes")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"local"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#local","aria-hidden":"true"}},[this._v("#")]),this._v(" Local")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Weex SDK provide "),t("code",[this._v("local")]),this._v(" scheme to access resources packaged with application, and of cource, it's not working in the HTML5 runtime.\nCurrently, developers can use this scheme with "),t("code",[this._v("image")]),this._v(" and text's font file location.")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",[i("li",[e._v("In iOS, it's always locate file in 'bundle resources'. For example, a "),i("code",[e._v("image")]),e._v(" component with "),i("code",[e._v("local:///app_icon")]),e._v(" will load image file named 'app_icon' in bundle resouce, and font file work in the same way.")]),i("li",[e._v("In Android, image component will load from 'drawable' resource folder like 'res/drawable-xxx'. But load font file is different, android framework can not load font file from 'res', so SDK will load it from "),i("code",[e._v("assets")]),e._v(" folder.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"remote"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#remote","aria-hidden":"true"}},[this._v("#")]),this._v(" remote")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",[i("li",[i("p",[i("code",[e._v("HTTP/HTTPS")]),e._v(" It's working in the same way as in web, Weex support these at very beginning.")])]),i("li",[i("p",[i("code",[e._v("File")]),e._v(" Use "),i("code",[e._v("file")]),e._v(" scheme to access local disk file. This scheme has its limitations:")]),i("ul",[i("li",[e._v("You would not hard coded a file url in source page. Because not matter it's running in different platform(iOS, Android) or not, the content will be totally different in another device, which is depend to the specific device.")]),i("li",[e._v("So one possible case is getting the file url in runtime dynamically, which you can use it to display a local disk image, or maybe upload it later.")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"relative-uri"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#relative-uri","aria-hidden":"true"}},[this._v("#")]),this._v(" Relative URI")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"uri-adapter"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#uri-adapter","aria-hidden":"true"}},[this._v("#")]),this._v(" URI Adapter")])}],!1,null,null,null);t.default=r.exports}}]);