(function(t){function e(e){for(var i,r,c=e[0],o=e[1],l=e[2],d=0,m=[];d<c.length;d++)r=c[d],s[r]&&m.push(s[r][0]),s[r]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);u&&u(e);while(m.length)m.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],i=!0,r=1;r<a.length;r++){var o=a[r];0!==s[o]&&(i=!1)}i&&(n.splice(e--,1),t=c(c.s=a[0]))}return t}var i={},s={app:0},n=[];function r(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"330ce9ef"}[t]+".js"}function c(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a=s[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise(function(e,i){a=s[t]=[e,i]});e.push(a[2]=i);var n,o=document.createElement("script");o.charset="utf-8",o.timeout=120,c.nc&&o.setAttribute("nonce",c.nc),o.src=r(t),n=function(e){o.onerror=o.onload=null,clearTimeout(l);var a=s[t];if(0!==a){if(a){var i=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src,r=new Error("Loading chunk "+t+" failed.\n("+i+": "+n+")");r.type=i,r.request=n,a[1](r)}s[t]=void 0}};var l=setTimeout(function(){n({type:"timeout",target:o})},12e4);o.onerror=o.onload=n,document.head.appendChild(o)}return Promise.all(e)},c.m=t,c.c=i,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)c.d(a,i,function(e){return t[e]}.bind(null,i));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var d=0;d<o.length;d++)e(o[d]);var u=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var i=a("64a9"),s=a.n(i);s.a},"085b":function(t,e,a){},"0915":function(t,e,a){"use strict";var i=a("ebb5"),s=a.n(i);s.a},"17db":function(t,e,a){"use strict";var i=a("3d14"),s=a.n(i);s.a},3530:function(t,e,a){"use strict";var i=a("085b"),s=a.n(i);s.a},"3d14":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var i=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},n=[],r={},c=r,o=(a("034f"),a("2877")),l=Object(o["a"])(c,s,n,!1,null,null,null),d=l.exports,u=a("8c4f"),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("navbar"),a("div",{staticClass:"fullpage-container page-container"},[a("div",{directives:[{name:"fullpage",rawName:"v-fullpage",value:t.opts,expression:"opts"}],staticClass:"fullpage-wp"},[a("landing"),a("about"),a("service"),a("client"),a("contact")],1)])],1)},v=[],f=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},g=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar",attrs:{role:"navigation","aria-label":"main navigation"}},[a("div",{staticClass:"navbar-brand"}),a("div",{staticClass:"navbar-menu"},[a("div",{staticClass:"navbar-start"}),a("div",{staticClass:"navbar-end"})])])}],h={name:"Navbar",data:function(){return{}}},p=h,C=(a("17db"),Object(o["a"])(p,f,g,!1,null,"1eac84aa",null)),b=C.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.window.width>800?a("video-bg",{attrs:{sources:["http://pespantelis.github.io/vue-videobg/demo/assets/timelapse.mp4"]}},[a("div",{staticClass:"msg"},[a("h1",{directives:[{name:"animate-css",rawName:"v-animate-css",value:"fadeIn",expression:"'fadeIn'"}],staticClass:"headline"},[t._v("WE ARE LOGISTIC & SHIPPING COMPANY")])])]):t._e()},_=[],y=a("f7ec"),P={name:"landing",components:{VideoBg:y["a"]},data:function(){return{window:{width:0}}},created:function(){this.handleResize()},methods:{handleResize:function(){this.window.width=window.innerWidth}}},x=P,I=(a("62d3"),Object(o["a"])(x,w,_,!1,null,"37f09d5e",null)),O=I.exports,A=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},M=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"landing"},[a("div",{staticClass:"divider"}),a("div",{staticClass:"logo-holder"}),a("div",{staticClass:"about-us"},[a("h2",[t._v("TOGIRI MARITIM WIJAYA")]),a("p",[t._v(" іѕ a Shipping agency, chartering and stevedorong company, Our team leading by professional\n      individual which is knowledge in shipping industry more than 15 years. We handling conventional\n      vessels, dry cargo, bags / bulk cargoes, general cargo vessels for All Indonesian Ports. We have\n      good cooperation with Port Authority / Harbour Master and arranging dispatch vessels when calling\n      toeach Indonesian Ports as well as vessel loading and or unloading cargo. We have relationship with\n      liner owning strenght local agent at each Indonesian Ports. We having relationship directly to\n      Shipowner. Our obligation as ship agent to protect Shipowner/Principal/vessel’s interest.")])])])}],j={name:"about"},E=j,R=(a("6251"),Object(o["a"])(E,A,M,!1,null,"71656c44",null)),k=R.exports,S=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper"},[i("div",{staticClass:"container"},[t.window.width>500?i("div",{staticClass:"columns"},[i("div",{staticClass:"column"},[i("div",{staticClass:"card"},[t._m(0),i("div",{staticClass:"card-content"},[i("div",{staticClass:"media"},[i("div",{staticClass:"media-left"},[i("figure",{staticClass:"image is-48x48"},[i("font-awesome-icon",{staticClass:"fa-3x",attrs:{icon:"globe-asia"}})],1)]),t._m(1)]),i("div",{staticClass:"content"},[t._v("\n              TOGIRI MARITIM WIJAYA offers a hydraulically driven hull and propeller cleaning\n              system\n              throughout the world. Our aim is to maintain direct communication with our equipment\n              users to help them with our techniques, as well as our extensive business knowledge\n              in\n              the field.\n            ")])])])]),i("div",{staticClass:"column"},[i("div",{staticClass:"card"},[t._m(2),i("div",{staticClass:"card-content"},[i("div",{staticClass:"media"},[i("div",{staticClass:"media-left"},[i("figure",{staticClass:"image is-48x48"},[i("font-awesome-icon",{staticClass:"fa-3x",attrs:{icon:"globe-asia"}})],1)]),t._m(3)]),i("div",{staticClass:"content"},[t._v("\n              TOGIRI MARITIM WIJAYA provides stevedoring services which is unload goods from ships\n              to dock, barge or truck and load the goods on the dock, barge or truck to board the\n              ship to be arranged in the hold of the ship using a crane or derrick boat\n              ashore.\n            ")])])])]),i("div",{staticClass:"column"},[i("div",{staticClass:"card"},[t._m(4),i("div",{staticClass:"card-content"},[i("div",{staticClass:"media"},[i("div",{staticClass:"media-left"},[i("figure",{staticClass:"image is-48x48"},[i("font-awesome-icon",{staticClass:"fa-3x",attrs:{icon:"box-open"}})],1)]),t._m(5)]),i("div",{staticClass:"content"},[t._v("\n              TOGIRI MARITIM WIJAYA is committed to operate and maintain all vessels under its\n              management to the highest standard of international practices and meeting the\n              quality requirements.\n            ")])])])])]):i("carousel",{attrs:{autoplay:!0,nav:!1,items:1}},[i("div",{staticClass:"card"},[i("div",{staticClass:"card-image"},[i("figure",{staticClass:"image is-4by3"},[i("img",{attrs:{src:a("f1c8"),alt:"Placeholder image"}})])]),i("div",{staticClass:"card-content"},[i("div",{staticClass:"media"},[i("div",{staticClass:"media-left"},[i("figure",{staticClass:"image is-48x48"},[i("font-awesome-icon",{staticClass:"fa-3x",attrs:{icon:"globe-asia"}})],1)]),i("div",{staticClass:"media-content"},[i("p",{staticClass:"title is-4"},[t._v("Underwater")])])]),i("div",{staticClass:"content"},[t._v("\n            TOGIRI MARITIM WIJAYA offers a hydraulically driven hull and propeller cleaning\n            system\n            throughout the world. Our aim is to maintain direct communication with our equipment\n            users to help them with our techniques, as well as our extensive business knowledge\n            in\n            the field.\n          ")])])]),i("div",{staticClass:"card"},[i("div",{staticClass:"card-image"},[i("figure",{staticClass:"image is-4by3"},[i("img",{attrs:{src:a("f1c8"),alt:"Placeholder image"}})])]),i("div",{staticClass:"card-content"},[i("div",{staticClass:"media"},[i("div",{staticClass:"media-left"},[i("figure",{staticClass:"image is-48x48"},[i("font-awesome-icon",{staticClass:"fa-3x",attrs:{icon:"globe-asia"}})],1)]),i("div",{staticClass:"media-content"},[i("p",{staticClass:"title is-4"},[t._v("Underwater")])])]),i("div",{staticClass:"content"},[t._v("\n            TOGIRI MARITIM WIJAYA offers a hydraulically driven hull and propeller cleaning\n            system\n            throughout the world. Our aim is to maintain direct communication with our equipment\n            users to help them with our techniques, as well as our extensive business knowledge\n            in\n            the field.\n          ")])])]),i("div",{staticClass:"card"},[i("div",{staticClass:"card-image"},[i("figure",{staticClass:"image is-4by3"},[i("img",{attrs:{src:a("f1c8"),alt:"Placeholder image"}})])]),i("div",{staticClass:"card-content"},[i("div",{staticClass:"media"},[i("div",{staticClass:"media-left"},[i("figure",{staticClass:"image is-48x48"},[i("font-awesome-icon",{staticClass:"fa-3x",attrs:{icon:"globe-asia"}})],1)]),i("div",{staticClass:"media-content"},[i("p",{staticClass:"title is-4"},[t._v("Underwater")])])]),i("div",{staticClass:"content"},[t._v("\n            TOGIRI MARITIM WIJAYA offers a hydraulically driven hull and propeller cleaning\n            system\n            throughout the world. Our aim is to maintain direct communication with our equipment\n            users to help them with our techniques, as well as our extensive business knowledge\n            in\n            the field.\n          ")])])])])],1)])},T=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"card-image"},[i("figure",{staticClass:"image is-4by3"},[i("img",{attrs:{src:a("f1c8"),alt:"Placeholder image"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"media-content"},[a("p",{staticClass:"title is-4"},[t._v("Underwater")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"card-image"},[i("figure",{staticClass:"image is-4by3"},[i("img",{attrs:{src:a("cf1d"),alt:"Placeholder image"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"media-content"},[a("p",{staticClass:"title is-4"},[t._v("Stevedoring")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"card-image"},[i("figure",{staticClass:"image is-4by3"},[i("img",{attrs:{src:a("f1c8"),alt:"Placeholder image"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"media-content"},[a("p",{staticClass:"title is-4"},[t._v("Ship management")])])}],J=a("7ec7"),$=a.n(J),W={name:"service",components:{Carousel:$.a},data:function(){return{window:{width:0}}},created:function(){this.handleResize()},methods:{handleResize:function(){this.window.width=window.innerWidth}}},q=W,G=(a("73c7"),Object(o["a"])(q,S,T,!1,null,"0d75a6dc",null)),N=G.exports,L=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper"},[t._m(0),i("div",{staticClass:"container"},[i("carousel",{attrs:{autoplay:!0,nav:!1,items:t.item}},[i("div",{staticClass:"card"},[i("div",{staticClass:"card-image"},[i("figure",{staticClass:"image is-4by3"},[i("img",{attrs:{src:a("8020"),alt:"Placeholder image"}})])]),i("div",{staticClass:"card-content"},[i("div",{staticClass:"media"},[i("div",{staticClass:"media-left"},[i("figure",{staticClass:"image is-48x48"},[i("img",{attrs:{src:"https://versions.bulma.io/0.7.0/images/placeholders/96x96.png",alt:"Placeholder image"}})])]),i("div",{staticClass:"media-content"},[i("p",{staticClass:"title is-4"},[t._v("John Smith")]),i("p",{staticClass:"subtitle is-6"},[t._v("Product Manager")])])]),i("div",{staticClass:"content"},[t._v("\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n            Phasellus nec iaculis mauris.\n            "),i("br"),i("time",{attrs:{datetime:"2016-1-1"}},[t._v("11:09 PM - 1 Jan 2016")])])])]),i("div",{staticClass:"card"},[i("div",{staticClass:"card-image"},[i("figure",{staticClass:"image is-4by3"},[i("img",{attrs:{src:a("8020"),alt:"Placeholder image"}})])]),i("div",{staticClass:"card-content"},[i("div",{staticClass:"media"},[i("div",{staticClass:"media-left"},[i("figure",{staticClass:"image is-48x48"},[i("img",{attrs:{src:"https://versions.bulma.io/0.7.0/images/placeholders/96x96.png",alt:"Placeholder image"}})])]),i("div",{staticClass:"media-content"},[i("p",{staticClass:"title is-4"},[t._v("John Smith")]),i("p",{staticClass:"subtitle is-6"},[t._v("Product Manager")])])]),i("div",{staticClass:"content"},[t._v("\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n            Phasellus nec iaculis mauris.\n            "),i("br"),i("time",{attrs:{datetime:"2016-1-1"}},[t._v("11:09 PM - 1 Jan 2016")])])])]),i("div",{staticClass:"card"},[i("div",{staticClass:"card-image"},[i("figure",{staticClass:"image is-4by3"},[i("img",{attrs:{src:a("8020"),alt:"Placeholder image"}})])]),i("div",{staticClass:"card-content"},[i("div",{staticClass:"media"},[i("div",{staticClass:"media-left"},[i("figure",{staticClass:"image is-48x48"},[i("img",{attrs:{src:"https://versions.bulma.io/0.7.0/images/placeholders/96x96.png",alt:"Placeholder image"}})])]),i("div",{staticClass:"media-content"},[i("p",{staticClass:"title is-4"},[t._v("John Smith")]),i("p",{staticClass:"subtitle is-6"},[t._v("Product Manager")])])]),i("div",{staticClass:"content"},[t._v("\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n            Phasellus nec iaculis mauris.\n            "),i("br"),i("time",{attrs:{datetime:"2016-1-1"}},[t._v("11:09 PM - 1 Jan 2016")])])])]),i("div",{staticClass:"card"},[i("div",{staticClass:"card-image"},[i("figure",{staticClass:"image is-4by3"},[i("img",{attrs:{src:a("8020"),alt:"Placeholder image"}})])]),i("div",{staticClass:"card-content"},[i("div",{staticClass:"media"},[i("div",{staticClass:"media-left"},[i("figure",{staticClass:"image is-48x48"},[i("img",{attrs:{src:"https://versions.bulma.io/0.7.0/images/placeholders/96x96.png",alt:"Placeholder image"}})])]),i("div",{staticClass:"media-content"},[i("p",{staticClass:"title is-4"},[t._v("John Smith")]),i("p",{staticClass:"subtitle is-6"},[t._v("Product Manager")])])]),i("div",{staticClass:"content"},[t._v("\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n            Phasellus nec iaculis mauris.\n            "),i("br"),i("time",{attrs:{datetime:"2016-1-1"}},[t._v("11:09 PM - 1 Jan 2016")])])])]),i("div",{staticClass:"card"},[i("div",{staticClass:"card-image"},[i("figure",{staticClass:"image is-4by3"},[i("img",{attrs:{src:a("8020"),alt:"Placeholder image"}})])]),i("div",{staticClass:"card-content"},[i("div",{staticClass:"media"},[i("div",{staticClass:"media-left"},[i("figure",{staticClass:"image is-48x48"},[i("img",{attrs:{src:"https://versions.bulma.io/0.7.0/images/placeholders/96x96.png",alt:"Placeholder image"}})])]),i("div",{staticClass:"media-content"},[i("p",{staticClass:"title is-4"},[t._v("John Smith")]),i("p",{staticClass:"subtitle is-6"},[t._v("Product Manager")])])]),i("div",{staticClass:"content"},[t._v("\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n            Phasellus nec iaculis mauris.\n            "),i("br"),i("time",{attrs:{datetime:"2016-1-1"}},[t._v("11:09 PM - 1 Jan 2016")])])])])])],1)])},Y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title"},[a("h2",[t._v("Our Client")])])}],z={name:"client",components:{carousel:$.a},data:function(){return{item:3}},created:function(){this.handleResize()},methods:{handleResize:function(){window.innerWidth<501&&(this.item=1)}}},U=z,B=(a("3530"),Object(o["a"])(U,L,Y,!1,null,"192678a8",null)),F=B.exports,H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"})},V=[],D={name:"contact"},K=D,Q=(a("0915"),Object(o["a"])(K,H,V,!1,null,"8943c162",null)),X=Q.exports,Z={name:"home",components:{Client:F,Navbar:b,Landing:O,About:k,Service:N,Contact:X},data:function(){return{opts:{start:0,dir:"v",duration:500,beforeChange:function(t,e,a){},afterChange:function(t,e,a){}}}}},tt=Z,et=(a("cccb"),Object(o["a"])(tt,m,v,!1,null,null,null)),at=et.exports;i["a"].use(u["a"]);var it=new u["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:at},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}}]}),st=a("2f62");i["a"].use(st["a"]);var nt=new st["a"].Store({state:{},mutations:{},actions:{}}),rt=a("9483");Object(rt["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});a("5977");var ct=a("6ac3"),ot=a.n(ct),lt=a("ecee"),dt=a("c074"),ut=a("ad3d"),mt=a("00e4");i["a"].use(mt["a"]),lt["c"].add(dt["b"]),lt["c"].add(dt["a"]),i["a"].component("font-awesome-icon",ut["a"]),i["a"].use(ot.a),i["a"].config.productionTip=!1,a("9299"),new i["a"]({router:it,store:nt,render:function(t){return t(d)}}).$mount("#app")},6251:function(t,e,a){"use strict";var i=a("de79"),s=a.n(i);s.a},"62d3":function(t,e,a){"use strict";var i=a("7a34"),s=a.n(i);s.a},"64a9":function(t,e,a){},"73c7":function(t,e,a){"use strict";var i=a("92f3"),s=a.n(i);s.a},"7a34":function(t,e,a){},8020:function(t,e,a){t.exports=a.p+"img/ba.3971632e.png"},9299:function(t,e,a){},"92f3":function(t,e,a){},cccb:function(t,e,a){"use strict";var i=a("d563"),s=a.n(i);s.a},cf1d:function(t,e,a){t.exports=a.p+"img/stevedoring.fac851b4.jpg"},d563:function(t,e,a){},de79:function(t,e,a){},ebb5:function(t,e,a){},f1c8:function(t,e,a){t.exports=a.p+"img/underwater.00c31d89.jpg"}});
//# sourceMappingURL=app.34fb40f4.js.map