(window.webpackJsonp=window.webpackJsonp||[]).push([[80,4,6,9,11,17,35,44],{404:function(t,e,n){var l=n(18),r="["+n(405)+"]",o=RegExp("^"+r+r+"*"),c=RegExp(r+r+"*$"),d=function(t){return function(e){var n=String(l(e));return 1&t&&(n=n.replace(o,"")),2&t&&(n=n.replace(c,"")),n}};t.exports={start:d(1),end:d(2),trim:d(3)}},405:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},406:function(t,e,n){"use strict";n.r(e);var l={props:{classes:String}},r=n(6),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"btn",class:t.classes},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:n(406).default})},407:function(t,e,n){"use strict";var l=n(10),r=n(4),o=n(82),c=n(14),d=n(12),f=n(36),h=n(163),v=n(60),m=n(5),C=n(62),_=n(61).f,x=n(26).f,y=n(13).f,w=n(404).trim,k="Number",I=r.Number,S=I.prototype,T=f(C(S))==k,E=function(t){var e,n,l,r,o,c,d,code,f=v(t,!1);if("string"==typeof f&&f.length>2)if(43===(e=(f=w(f)).charCodeAt(0))||45===e){if(88===(n=f.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(f.charCodeAt(1)){case 66:case 98:l=2,r=49;break;case 79:case 111:l=8,r=55;break;default:return+f}for(c=(o=f.slice(2)).length,d=0;d<c;d++)if((code=o.charCodeAt(d))<48||code>r)return NaN;return parseInt(o,l)}return+f};if(o(k,!I(" 0o1")||!I("0b1")||I("+0x1"))){for(var N,O=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof O&&(T?m((function(){S.valueOf.call(n)})):f(n)!=k)?h(new I(E(e)),n,O):E(e)},A=l?_(I):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),D=0;A.length>D;D++)d(I,N=A[D])&&!d(O,N)&&y(O,N,x(I,N));O.prototype=S,S.constructor=O,c(r,k,O)}},408:function(t,e,n){"use strict";n.r(e);n(40),n(407),n(22),n(39),n(63),n(114),n(37),n(38),n(164),n(47),n(162),n(83),n(48);var l={name:"CollapseTransition",props:{name:{type:String,required:!1,default:"collapse"},dimension:{type:String,required:!1,default:"height",validator:function(t){return["height","width"].includes(t)}},duration:{type:Number,required:!1,default:300},easing:{type:String,required:!1,default:"ease-in-out"}},watch:{dimension:function(){this.clearCachedDimensions()}},data:function(){return{cachedStyles:null}},computed:{transition:function(){var t=this,e=[];return Object.keys(this.cachedStyles).forEach((function(n){e.push("".concat(t.convertToCssProperty(n)," ").concat(t.duration,"ms ").concat(t.easing))})),e.join(", ")}},methods:{enter:function(t,e){this.detectAndCacheDimensions(t),this.setClosedDimensions(t),this.hideOverflow(t),this.forceRepaint(t),this.setTransition(t),this.setOpenedDimensions(t),setTimeout(e,this.duration)},afterEnter:function(t){this.unsetOverflow(t),this.unsetTransition(t),this.unsetDimensions(t),this.clearCachedDimensions()},leave:function(t,e){this.detectAndCacheDimensions(t),this.setOpenedDimensions(t),this.hideOverflow(t),this.forceRepaint(t),this.setTransition(t),this.setClosedDimensions(t),setTimeout(e,this.duration)},afterLeave:function(t){this.unsetOverflow(t),this.unsetTransition(t),this.unsetDimensions(t),this.clearCachedDimensions()},detectAndCacheDimensions:function(t){if(!this.cachedStyles){var e=t.style.visibility,n=t.style.display;t.style.visibility="hidden",t.style.display="",this.cachedStyles=this.detectRelevantDimensions(t),t.style.visibility=e,t.style.display=n}},clearCachedDimensions:function(){this.cachedStyles=null},detectRelevantDimensions:function(t){return"height"===this.dimension?{height:t.offsetHeight+"px",paddingTop:t.style.paddingTop||this.getCssValue(t,"padding-top"),paddingBottom:t.style.paddingBottom||this.getCssValue(t,"padding-bottom")}:"width"===this.dimension?{width:t.offsetWidth+"px",paddingLeft:t.style.paddingLeft||this.getCssValue(t,"padding-left"),paddingRight:t.style.paddingRight||this.getCssValue(t,"padding-right")}:{}},setTransition:function(t){t.style.transition=this.transition},unsetTransition:function(t){t.style.transition=""},hideOverflow:function(t){t.style.overflow="hidden"},unsetOverflow:function(t){t.style.overflow=""},setClosedDimensions:function(t){Object.keys(this.cachedStyles).forEach((function(e){t.style[e]="0"}))},setOpenedDimensions:function(t){var e=this;Object.keys(this.cachedStyles).forEach((function(n){t.style[n]=e.cachedStyles[n]}))},unsetDimensions:function(t){Object.keys(this.cachedStyles).forEach((function(e){t.style[e]=""}))},forceRepaint:function(t){getComputedStyle(t)[this.dimension]},getCssValue:function(t,style){return getComputedStyle(t,null).getPropertyValue(style)},convertToCssProperty:function(style){var t=style.match(/([A-Z])/g);if(!t)return style;for(var i=0,e=t.length;i<e;i++)style=style.replace(new RegExp(t[i]),"-"+t[i].toLowerCase());return"-"===style.slice(0,1)&&(style=style.slice(1)),style}}},r=n(6),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("transition",{attrs:{name:t.name},on:{enter:t.enter,"after-enter":t.afterEnter,leave:t.leave,"after-leave":t.afterLeave}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},409:function(t,e,n){n(410)},410:function(t,e,n){"use strict";var l=n(2),r=n(18),o=n(84),c=n(85),d=n(165),f=n(3),h=n(23),v=f("replace"),m=RegExp.prototype,C=Math.max,_=function(t,e,n){return n>t.length?-1:""===e?n:t.indexOf(e,n)};l({target:"String",proto:!0},{replaceAll:function(t,e){var n,l,f,x,y,w,k,I,S=r(this),T=0,E=0,N="";if(null!=t){if((n=o(t))&&!~String(r("flags"in m?t.flags:c.call(t))).indexOf("g"))throw TypeError("`.replaceAll` does not allow non-global regexes");if(void 0!==(l=t[v]))return l.call(t,S,e);if(h&&n)return String(S).replace(t,e)}for(f=String(S),x=String(t),(y="function"==typeof e)||(e=String(e)),w=x.length,k=C(1,w),T=_(f,x,0);-1!==T;)I=y?String(e(x,T,f)):d(x,f,T,[],void 0,e),N+=f.slice(E,T)+I,E=T+w,T=_(f,x,T+k);return E<f.length&&(N+=f.slice(E)),N}})},411:function(t,e,n){"use strict";var l=n(2),r=n(404).trim;l({target:"String",proto:!0,forced:n(412)("trim")},{trim:function(){return r(this)}})},412:function(t,e,n){var l=n(5),r=n(405);t.exports=function(t){return l((function(){return!!r[t]()||"​᠎"!="​᠎"[t]()||r[t].name!==t}))}},413:function(t,e,n){"use strict";n.r(e);n(409),n(411),n(114);var l={props:{title:String,classes:String,nocode:Boolean},data:function(){return{sourcecode:"",showcode:!1}},methods:{setSrc:function(){function t(e,n){for(var l,r=new Array(1+n++).join("  "),o=new Array(n-1).join("  "),i=0;i<e.children.length;i++)l=document.createTextNode("\n"+r),e.insertBefore(l,e.children[i]),t(e.children[i],n),e.lastElementChild==e.children[i]&&(l=document.createTextNode("\n"+o),e.appendChild(l));return e}var e,div;void 0!==this.$refs.component&&(this.sourcecode=(e=this.$refs.component.innerHTML,(div=document.createElement("div")).innerHTML=e.trim().replaceAll("\x3c!--","").replaceAll("--\x3e","")+"\n",t(div,0).innerHTML))}},mounted:function(){this.setSrc()}},r=n(6),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"py-2"},[n("div",{staticClass:"pt-4 text-xs opacity-60"},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),t.nocode?t._e():n("div",{staticClass:"mt-2 text-xs tabs"},[n("div",{staticClass:"tab tab-lifted",class:{"tab-active":!t.showcode},on:{click:function(e){t.showcode=!1}}},[t._v("Preview")]),t._v(" "),n("div",{staticClass:"tab tab-lifted",class:{"tab-active":t.showcode},on:{click:function(e){t.showcode=!0}}},[t._v("HTML")]),t._v(" "),n("div",{staticClass:"flex-1 cursor-default tab tab-lifted"})]),t._v(" "),n("div",[n("collapse-transition",[!t.nocode&&t.showcode?n("div",{staticClass:"pt-2"},[n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.sourcecode,expression:"sourcecode"}]},[n("code",{staticClass:"h-64 p-4 font-mono text-xs rounded-box html"})])]):t._e()]),t._v(" "),n("collapse-transition",[t.showcode?t._e():n("div",{staticClass:"pt-2"},[n("div",{ref:"component",class:t.classes},[t._t("default")],2)])])],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CollapseTransition:n(408).default})},414:function(t,e,n){"use strict";n.r(e);var l={props:["data"]},r=n(6),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"overflow-x-auto mt-6"},[n("table",{staticClass:"table table-compact w-full"},[n("thead",[n("tr",[n("th",[t._v("Class name")]),t._v(" "),!1!==t.data.showType?n("th",[t._v("Type")]):t._e(),t._v(" "),!0===t.data.showColors?n("th"):t._e(),t._v(" "),n("th")])]),t._v(" "),n("tbody",[t._l(t.data.components,(function(e,l){return n("tr",[n("th",{staticClass:"font-normal"},[n("span",{staticClass:"lowercase font-mono"},[t._v(t._s(e.class))])]),t._v(" "),!1!==t.data.showType?n("td",[n("span",{staticClass:"badge badge-sm badge-success w-20"},[t._v("Component")])]):t._e(),t._v(" "),!0===t.data.showColors?n("td",[n("span",{staticClass:"inline-block w-6 h-6 border border-opacity-10 rounded",class:e.color})]):t._e(),t._v(" "),n("td",[t._v(t._s(e.desc))])])})),t._v(" "),t._l(t.data.utilities,(function(e,l){return n("tr",[n("th",{staticClass:"font-normal"},[n("span",{staticClass:"lowercase font-mono"},[t._v(t._s(e.class))])]),t._v(" "),!1!==t.data.showType?n("td",[n("span",{staticClass:"badge badge-sm badge-info w-20"},[t._v("Utility")])]):t._e(),t._v(" "),!0===t.data.showColors?n("td",[n("span",{staticClass:"inline-block w-6 h-6 border border-opacity-10 rounded",class:e.color})]):t._e(),t._v(" "),n("td",[t._v(t._s(e.desc))])])}))],2)])]),t._v(" "),!1!==t.data.showTitle?n("div",{staticClass:"divider"}):t._e(),t._v(" "),!1!==t.data.showTitle?n("div",{staticClass:"text-xl font-bold mt-6"},[t._v("Examples")]):t._e()])}),[],!1,null,null,null);e.default=component.exports},417:function(t,e,n){"use strict";n.r(e);var l=n(6),component=Object(l.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"form-control"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},418:function(t,e,n){"use strict";n.r(e);var l={props:{classes:String}},r=n(6),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"navbar",class:t.classes},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},425:function(t,e,n){"use strict";n.r(e);var l={props:{classes:String}},r=n(6),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"avatar"},[n("div",{class:t.classes},[t._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports},484:function(t,e,n){"use strict";n.r(e);var l={head:function(){return{title:"daisyUI — Tailwind CSS navbar component",meta:[{hid:"description",name:"description",content:"Tailwind CSS navbar component - Tailwind CSS navbar examples"}]}}},r=n(6),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ClassTable",{attrs:{data:{components:[{class:"navbar",desc:"Container element"},{class:"navbar-start",desc:"Child element, fills 50% of width to be on start"},{class:"navbar-center",desc:"Child element, fills remaining space to be on center"},{class:"navbar-end",desc:"Child element, fills 50% of width to be on end"}]}}}),t._v(" "),n("Wrapper",{attrs:{title:"navbar",classes:"flex flex-col space-y-2"}},[n("Navbar",{staticClass:"mb-2 shadow-lg bg-neutral text-neutral-content rounded-box"},[n("div",{staticClass:"flex-none"},[n("Button",{attrs:{classes:"btn-square btn-ghost"}},[n("Icon",{staticClass:"inline-block w-6 h-6 stroke-current",attrs:{glyph:"menu"}})],1)],1),t._v(" "),n("div",{staticClass:"flex-1 px-2 mx-2"},[n("span",{staticClass:"text-lg font-bold"},[t._v("\n            With two icons\n          ")])]),t._v(" "),n("div",{staticClass:"flex-none"},[n("Button",{attrs:{classes:"btn-square btn-ghost"}},[n("Icon",{staticClass:"inline-block w-6 h-6 stroke-current",attrs:{glyph:"dots"}})],1)],1)])],1),t._v(" "),n("Wrapper",{attrs:{title:"navbar",classes:"flex flex-col space-y-2"}},[n("Navbar",{staticClass:"mb-2 shadow-lg bg-neutral text-neutral-content rounded-box"},[n("div",{staticClass:"flex-none"},[n("Button",{attrs:{classes:"btn-square btn-ghost"}},[n("Icon",{staticClass:"inline-block w-6 h-6 stroke-current text-success",attrs:{glyph:"back"}})],1)],1),t._v(" "),n("div",{staticClass:"flex-1 px-2 mx-2"},[n("span",{staticClass:"text-lg font-bold"},[t._v("\n            With one icon\n          ")])])])],1),t._v(" "),n("Wrapper",{attrs:{title:"navbar",classes:"flex flex-col space-y-2"}},[n("Navbar",{staticClass:"mb-2 shadow-lg bg-neutral text-neutral-content rounded-box"},[n("div",{staticClass:"flex-1 px-2 mx-2"},[n("span",{staticClass:"text-lg font-bold"},[t._v("\n            DaisyUI\n          ")])]),t._v(" "),n("div",{staticClass:"flex-none"},[n("Button",{attrs:{classes:"btn-square btn-ghost"}},[n("Icon",{staticClass:"inline-block w-6 h-6 stroke-current text-error",attrs:{glyph:"close"}})],1)],1)])],1),t._v(" "),n("Wrapper",{attrs:{title:"navbar",classes:"flex flex-col space-y-2"}},[n("Navbar",{staticClass:"mb-2 shadow-lg bg-neutral text-neutral-content rounded-box"},[n("div",{staticClass:"flex-none hidden lg:flex"},[n("Button",{attrs:{classes:"btn-square btn-ghost"}},[n("Icon",{staticClass:"inline-block w-6 h-6 stroke-current",attrs:{glyph:"menu"}})],1)],1),t._v(" "),n("div",{staticClass:"flex-1 hidden px-2 mx-2 lg:flex"},[n("span",{staticClass:"text-lg font-bold"},[t._v("\n            DaisyUI\n          ")])]),t._v(" "),n("div",{staticClass:"flex-1 lg:flex-none"},[n("FormControl",[n("Input",{staticClass:"input input-ghost",attrs:{type:"text",placeholder:"Search"}})],1)],1),t._v(" "),n("div",{staticClass:"flex-none"},[n("Button",{attrs:{classes:"btn-square btn-ghost"}},[n("Icon",{staticClass:"inline-block w-6 h-6 stroke-current",attrs:{glyph:"search"}})],1)],1),t._v(" "),n("div",{staticClass:"flex-none"},[n("Button",{attrs:{classes:"btn-square btn-ghost"}},[n("Icon",{staticClass:"inline-block w-6 h-6 stroke-current",attrs:{glyph:"bell"}})],1)],1),t._v(" "),n("div",{staticClass:"flex-none"},[n("Avatar",{attrs:{classes:"rounded-full w-10 h-10 m-1"}},[n("img",{attrs:{src:"https://i.pravatar.cc/500?img=32"}})])],1)])],1),t._v(" "),n("Wrapper",{attrs:{title:"navbar",classes:"flex flex-col space-y-2"}},[n("Navbar",{staticClass:"mb-2 shadow-lg bg-neutral text-neutral-content rounded-box"},[n("div",{staticClass:"flex-none px-2 mx-2"},[n("span",{staticClass:"text-lg font-bold"},[t._v("\n            DaisyUI\n          ")])]),t._v(" "),n("div",{staticClass:"flex-1 px-2 mx-2"},[n("div",{staticClass:"items-stretch hidden lg:flex"},[n("a",{staticClass:"btn btn-ghost btn-sm rounded-btn"},[t._v("\n              Home\n            ")]),t._v(" "),n("a",{staticClass:"btn btn-ghost btn-sm rounded-btn"},[t._v("\n              Portfolio\n            ")]),t._v(" "),n("a",{staticClass:"btn btn-ghost btn-sm rounded-btn"},[t._v("\n              About\n            ")]),t._v(" "),n("a",{staticClass:"btn btn-ghost btn-sm rounded-btn"},[t._v("\n              Contact\n            ")])])]),t._v(" "),n("div",{staticClass:"flex-none"},[n("Button",{attrs:{classes:"btn-square btn-ghost"}},[n("Icon",{staticClass:"inline-block w-6 h-6 stroke-current",attrs:{glyph:"heart"}})],1)],1),t._v(" "),n("div",{staticClass:"flex-none"},[n("Button",{attrs:{classes:"btn-square btn-ghost"}},[n("Icon",{staticClass:"inline-block w-6 h-6 stroke-current",attrs:{glyph:"search"}})],1)],1)])],1),t._v(" "),n("Wrapper",{attrs:{title:"navbar",classes:"flex flex-col space-y-2"}},[n("Navbar",{staticClass:"mb-2 shadow-lg bg-neutral text-neutral-content rounded-box"},[n("div",{staticClass:"flex-1 px-2 mx-2"},[n("span",{staticClass:"text-lg font-bold"},[t._v("\n            DaisyUI\n          ")])]),t._v(" "),n("div",{staticClass:"flex-none hidden px-2 mx-2 lg:flex"},[n("div",{staticClass:"flex items-stretch"},[n("a",{staticClass:"btn btn-ghost btn-sm rounded-btn"},[n("Icon",{staticClass:"inline-block w-5 mr-2 stroke-current",attrs:{glyph:"heart"}}),t._v("\n              Likes\n            ")],1),t._v(" "),n("a",{staticClass:"btn btn-ghost btn-sm rounded-btn"},[n("Icon",{staticClass:"inline-block w-5 mr-2 stroke-current",attrs:{glyph:"bell"}}),t._v("\n              Notifications\n            ")],1),t._v(" "),n("a",{staticClass:"btn btn-ghost btn-sm rounded-btn"},[n("Icon",{staticClass:"inline-block w-5 mr-2 stroke-current",attrs:{glyph:"folder"}}),t._v("\n              Files\n            ")],1),t._v(" "),n("a",{staticClass:"btn btn-ghost btn-sm rounded-btn"},[n("Icon",{staticClass:"inline-block w-5 mr-2 stroke-current",attrs:{glyph:"code"}}),t._v("\n              Config\n            ")],1)])]),t._v(" "),n("div",{staticClass:"flex-none"},[n("Button",{attrs:{classes:"btn-square btn-ghost"}},[n("Icon",{staticClass:"inline-block w-6 h-6 stroke-current",attrs:{glyph:"menu"}})],1)],1)])],1),t._v(" "),n("Wrapper",{attrs:{title:"start/center/end",classes:"flex flex-col space-y-2"}},[n("Navbar",{staticClass:"mb-2 shadow-lg bg-neutral text-neutral-content rounded-box"},[n("div",{staticClass:"px-2 mx-2 navbar-start"},[n("span",{staticClass:"text-lg font-bold"},[t._v("\n            DaisyUI\n          ")])]),t._v(" "),n("div",{staticClass:"hidden px-2 mx-2 navbar-center lg:flex"},[n("div",{staticClass:"flex items-stretch"},[n("a",{staticClass:"btn btn-ghost btn-sm rounded-btn"},[t._v("\n              Home\n            ")]),t._v(" "),n("a",{staticClass:"btn btn-ghost btn-sm rounded-btn"},[t._v("\n              Portfolio\n            ")]),t._v(" "),n("a",{staticClass:"btn btn-ghost btn-sm rounded-btn"},[t._v("\n              About\n            ")]),t._v(" "),n("a",{staticClass:"btn btn-ghost btn-sm rounded-btn"},[t._v("\n              Contact\n            ")])])]),t._v(" "),n("div",{staticClass:"navbar-end"},[n("Button",{attrs:{classes:"btn-square btn-ghost"}},[n("Icon",{staticClass:"inline-block w-6 h-6 stroke-current",attrs:{glyph:"bell"}})],1),t._v(" "),n("Button",{attrs:{classes:"btn-square btn-ghost"}},[n("Icon",{staticClass:"inline-block w-6 h-6 stroke-current",attrs:{glyph:"search"}})],1)],1)])],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ClassTable:n(414).default,Icon:n(115).default,Button:n(406).default,Navbar:n(418).default,Wrapper:n(413).default,Input:n(86).default,FormControl:n(417).default,Avatar:n(425).default})}}]);