(function(){var e={8387:function(e,t,a){"use strict";var r=a(6369),i=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},n=[],s=a(1001),o={},c=(0,s.Z)(o,i,n,!1,null,null,null),m=c.exports,l=a(2631),u=function(){var e=this,t=e._self._c;return t("div",{staticClass:"home-page"},[t("div",{staticClass:"home-page__exposure"},[t("div",{staticClass:"home-page__exposure-header"},[t("span",{staticClass:"home-page__title"},[e._v("Games")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.filter,expression:"filter"}],attrs:{name:"games",id:"games"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.filter=t.target.multiple?a:a[0]}}},[t("option",{attrs:{value:"score"}},[e._v("Mais populares")]),t("option",{attrs:{value:"price"}},[e._v("Preço")]),t("option",{attrs:{value:"name"}},[e._v("Ordem Alfabética")])])]),t("div",{staticClass:"home-page__exposure-games"},e._l(e.sortedArray,(function(a){return t("game-box",{key:a.id,attrs:{"game-information":a},on:{"add-to-cart":e.addGameToCart}})})),1)]),t("cart")],1)},p=[],f=function(){var e=this,t=e._self._c;return t("div",{staticClass:"game-image",class:{"game-image__small":e.small}},[t("img",{class:{small:e.small},attrs:{src:a(990)(`./${e.gameImage}`),alt:`${e.gameName} game image`}})])},d=[],g={name:"GameImage",props:{gameImage:{type:String,required:!0},gameName:{type:String,required:!0},small:{type:Boolean,default:!1}}},C=g,_=(0,s.Z)(C,f,d,!1,null,"68f8c36e",null),v=_.exports,h=function(){var e=this,t=e._self._c;return t("div",{staticClass:"game-box",on:{click:e.emitGameToCart}},[t("game-image",{attrs:{"game-image":e.gameInformation.image,"game-name":e.gameInformation.name}}),t("div",{staticClass:"game-box__name"},[e._v(" "+e._s(e.gameInformation.name)+" ")]),t("div",{staticClass:"game-box__price"},[e._v("R$ "+e._s(e.gameInformation.price))]),t("div",{staticClass:"game-box__cart-add"},[e._v("adicionar ao carrinho")])],1)},y=[],w={name:"GameBox",components:{GameImage:v},props:{gameInformation:{type:Object,required:!0}},methods:{emitGameToCart(){this.$emit("add-to-cart",this.gameInformation)}}},b=w,x=(0,s.Z)(b,h,y,!1,null,"4375fe2e",null),G=x.exports,Z=function(){var e=this,t=e._self._c;return t("div",{staticClass:"cart"},[t("div",[t("span",{staticClass:"cart__title"},[e._v("Carrinho")]),e.inCartGames.length?t("div",{staticClass:"cart__list"},e._l(e.inCartGames,(function(a,r){return t("div",{key:r,staticClass:"cart__container",on:{click:function(t){return e.removeGameFromCart(r)}}},[t("div",[t("game-image",{attrs:{"game-image":a.image,"game-name":a.name,small:""}})],1),t("div",[t("div",{staticClass:"cart__container__title"},[e._v(" "+e._s(a.name)+" ")]),t("div",{staticClass:"cart__container__price"},[e._v(" R$ "+e._s(e.formatValue(a.price))+" ")])]),e._m(0,!0)])})),0):e._e()]),e.inCartGames.length?t("div",[t("div",{staticClass:"cart__payment-container"},[t("div",{staticClass:"cart__payment-information"},[t("span",{staticClass:"cart__payment-information__title"},[e._v("subtotal")]),t("span",{staticClass:"cart__payment-information__price"},[e._v("R$ "+e._s(e.formatValue(e.priceCalculate.subtotal)))])]),t("div",{staticClass:"cart__payment-information"},[t("span",{staticClass:"cart__payment-information__title"},[e._v("frete")]),t("span",{staticClass:"cart__payment-information__price"},[e._v("R$ "+e._s(e.formatValue(e.priceCalculate.shipping)))])]),t("div",{staticClass:"cart__payment-information"},[t("span",{staticClass:"cart__payment-information__title"},[e._v("total")]),t("span",{staticClass:"cart__payment-information__total-price"},[e._v("R$ "+e._s(e.formatValue(e.priceCalculate.total)))])])]),t("button",[e._v("finalizar compra")])]):e._e(),0==e.inCartGames.length?t("div",{staticClass:"cart__empty"},[t("icon-cart-empty"),e._m(1)],1):e._e()])},k=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"cart__remove"},[t("img",{attrs:{src:a(2539),width:"15"}})])},function(){var e=this,t=e._self._c;return t("span",[e._v("Até o momento, "),t("br"),e._v(" o seu carrinho está vazio")])}],I=function(){var e=this,t=e._self._c;return t("svg",{attrs:{width:"90",height:"72",viewBox:"0 0 90 72",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[t("title",[e._v("Group 3")]),t("desc",[e._v("Created with Sketch.")]),t("defs"),t("g",{attrs:{id:"Page-1",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[t("g",{attrs:{id:"Group-3",fill:"#E1E1E1","fill-rule":"nonzero"}},[t("g",{attrs:{id:"mbri-cart-add"}},[t("path",{attrs:{d:"M76.2100333,0 C68.7973992,0 62.7596892,6.06 62.7596892,13.5 C62.7596892,20.94 68.7973992,27 76.2100333,27 C83.6226674,27 89.6603774,20.94 89.6603774,13.5 C89.6603774,6.06 83.6226674,0 76.2100333,0 Z M76.2100333,3 C82.0086261,3 86.671412,7.68 86.671412,13.5 C86.671412,19.32 82.0086261,24 76.2100333,24 C70.4114405,24 65.7486546,19.32 65.7486546,13.5 C65.7486546,7.68 70.4114405,3 76.2100333,3 Z M76.2100333,6 C75.3820899,6 74.7155506,6.669 74.7155506,7.5 L74.7155506,12 L70.2321026,12 C69.4041592,12 68.7376199,12.669 68.7376199,13.5 C68.7376199,14.331 69.4041592,15 70.2321026,15 L74.7155506,15 L74.7155506,19.5 C74.7155506,20.331 75.3820899,21 76.2100333,21 C77.0379767,21 77.704516,20.331 77.704516,19.5 L77.704516,15 L82.187964,15 C83.0159074,15 83.6824467,14.331 83.6824467,13.5 C83.6824467,12.669 83.0159074,12 82.187964,12 L77.704516,12 L77.704516,7.5 C77.704516,6.669 77.0379767,6 76.2100333,6 Z M31.3755531,39 L70.2321026,39 C71.060046,39 71.7265853,39.669 71.7265853,40.5 C71.7265853,41.331 71.060046,42 70.2321026,42 L31.3755531,42 C30.5476097,42 29.8810704,41.331 29.8810704,40.5 C29.8810704,39.669 30.5476097,39 31.3755531,39 Z M28.3865877,27 L64.2541719,27 C65.0821153,27 65.7486546,27.669 65.7486546,28.5 C65.7486546,29.331 65.0821153,30 64.2541719,30 L28.3865877,30 C27.5586443,30 26.8921051,29.331 26.8921051,28.5 C26.8921051,27.669 27.5586443,27 28.3865877,27 Z M64.2541719,57 C60.1443445,57 56.7817585,60.375 56.7817585,64.5 C56.7817585,68.625 60.1443445,72 64.2541719,72 C68.3639993,72 71.7265853,68.625 71.7265853,64.5 C71.7265853,60.375 68.3639993,57 64.2541719,57 Z M64.2541719,60 C66.746969,60 68.7376199,61.998 68.7376199,64.5 C68.7376199,67.002 66.746969,69 64.2541719,69 C61.7613748,69 59.7707239,67.002 59.7707239,64.5 C59.7707239,61.998 61.7613748,60 64.2541719,60 Z M34.3645184,57 C30.2546911,57 26.8921051,60.375 26.8921051,64.5 C26.8921051,68.625 30.2546911,72 34.3645184,72 C38.4743458,72 41.8369318,68.625 41.8369318,64.5 C41.8369318,60.375 38.4743458,57 34.3645184,57 Z M34.3645184,60 C36.8573155,60 38.8479664,61.998 38.8479664,64.5 C38.8479664,67.002 36.8573155,69 34.3645184,69 C31.8717213,69 29.8810704,67.002 29.8810704,64.5 C29.8810704,61.998 31.8717213,60 34.3645184,60 Z M1.50981131,3 C-0.492795468,3 -0.513718226,6 1.50981131,6 L12.2461748,6 C12.4673583,7.065 14.1591127,15.165 16.1736753,24.69 C17.2437249,29.748 18.3376862,34.908 19.216442,38.988 C20.0922089,43.068 20.7258695,45.969 20.9739537,46.887 C21.3684971,48.369 21.7391288,50.052 22.8271122,51.519 C23.9091176,52.983 25.8160775,53.997 28.3865877,53.997 L70.2081909,53.997 C72.7787011,53.997 74.685661,52.983 75.7736444,51.519 C76.8586388,50.049 77.2262815,48.369 77.6268029,46.884 C77.8868429,45.888 78.2963311,43.575 78.8522787,40.674 C79.3992593,37.764 80.0478648,34.395 80.6456579,31.833 C81.1388372,29.994 78.0871035,29.193 77.7403836,31.155 C77.1246567,33.807 76.4640953,37.191 75.9111368,40.107 C75.3581782,43.026 74.8739658,45.603 74.7394623,46.107 C74.3329631,47.625 73.9533645,48.942 73.3735052,49.725 C72.7936459,50.511 72.1181397,50.997 70.2111798,50.997 L28.3865877,50.997 C26.4796278,50.997 25.8041217,50.511 25.2182845,49.725 C24.6414141,48.945 24.2618155,47.625 23.8553163,46.11 C23.705868,45.531 23.018406,42.429 22.1396501,38.355 C21.2638833,34.281 20.166933,29.127 19.0998724,24.063 C16.9597732,13.944 14.9153209,4.191 14.9153209,4.191 C14.7718506,3.501 14.1621016,3.003 13.4507279,3.003 L1.50981131,3 Z M25.4036003,15 C23.4159384,15 23.4398501,18 25.4036003,18 L55.2693421,18 C57.2779268,18 57.2330923,15 55.2693421,15 L25.4036003,15 Z",id:"Shape"}})])])])])},O=[],L={name:"icon-cart-empty"},M=L,$=(0,s.Z)(M,I,O,!1,null,null,null),z=$.exports,P=a(3822),S={name:"Cart",components:{IconCartEmpty:z,GameImage:v},methods:{formatValue(e){return e=e.toFixed(2),e.replace(".",",")},removeGameFromCart(e){this.$store.dispatch("removeGame",e)}},computed:{...(0,P.Se)(["inCartGames"]),priceCalculate:function(){let e={subtotal:0,shipping:0,price:0};return this.inCartGames.forEach((t=>{e.subtotal+=t.price})),e.shipping=10*this.inCartGames.length,e.subtotal>250&&(e.shipping=0),e.total=e.subtotal+e.shipping,e}}},T=S,E=(0,s.Z)(T,Z,k,!1,null,"9b186716",null),j=E.exports,D={name:"HomeView",components:{GameImage:v,GameBox:G,Cart:j,IconCartEmpty:z},data(){return{allGames:[],filter:"score"}},created(){this.getGameData()},methods:{getGameData(){this.allGames=a(9815)},addGameToCart(e){this.$store.dispatch("inCartGames",e)}},computed:{sortedArray:function(){if("name"==this.filter){function e(e,t){return e.name<t.name?-1:e.name>t.name?1:0}return this.allGames.sort(e)}if("price"==this.filter){function t(e,t){return e.price<t.price?-1:e.price>t.price?1:0}return this.allGames.sort(t)}if("score"==this.filter){function a(e,t){return e.score<t.score?-1:e.score>t.score?1:0}return this.allGames.sort(a)}}}},F=D,A=(0,s.Z)(F,u,p,!1,null,"58094a2e",null),N=A.exports;r.ZP.use(l.Z);const V=[{path:"/",name:"home",component:N}],R=new l.Z({mode:"history",base:"/",routes:V});var W=R;r.ZP.use(P.ZP);var B=new P.ZP.Store({state:{inCartGames:[]},getters:{inCartGames:e=>e.inCartGames},mutations:{inCartGames(e,t){e.inCartGames.push(t)},removeGame(e,t){e.inCartGames.splice(t,1)}},actions:{inCartGames(e,t){e.commit("inCartGames",t)},removeGame(e,t){e.commit("removeGame",t)}}});r.ZP.config.productionTip=!1,new r.ZP({router:W,store:B,render:e=>e(m)}).$mount("#app")},990:function(e,t,a){var r={"./call-of-duty-infinite-warfare.png":9552,"./call-of-duty-wwii.png":5891,"./fifa-18.png":9439,"./horizon-zero-dawn.png":1047,"./mortal-kombat-xl.png":2498,"./shards-of-darkness.png":8376,"./super-mario-odyssey.png":108,"./terra-media-sombras-de-mordor.png":8713,"./the-witcher-iii-wild-hunt.png":2730};function i(e){var t=n(e);return a(t)}function n(e){if(!a.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}i.keys=function(){return Object.keys(r)},i.resolve=n,e.exports=i,i.id=990},2539:function(e,t,a){"use strict";e.exports=a.p+"img/delete.a8de3620.svg"},9552:function(e,t,a){"use strict";e.exports=a.p+"img/call-of-duty-infinite-warfare.f09c8199.png"},5891:function(e,t,a){"use strict";e.exports=a.p+"img/call-of-duty-wwii.f756906a.png"},9439:function(e,t,a){"use strict";e.exports=a.p+"img/fifa-18.88045df3.png"},1047:function(e,t,a){"use strict";e.exports=a.p+"img/horizon-zero-dawn.3a604126.png"},2498:function(e,t,a){"use strict";e.exports=a.p+"img/mortal-kombat-xl.c365f3be.png"},8376:function(e,t,a){"use strict";e.exports=a.p+"img/shards-of-darkness.9095d894.png"},108:function(e,t,a){"use strict";e.exports=a.p+"img/super-mario-odyssey.dd165e7c.png"},8713:function(e,t,a){"use strict";e.exports=a.p+"img/terra-media-sombras-de-mordor.43f52be6.png"},2730:function(e,t,a){"use strict";e.exports=a.p+"img/the-witcher-iii-wild-hunt.3a0915fe.png"},9815:function(e){"use strict";e.exports=JSON.parse('[{"id":312,"name":"Super Mario Odyssey","price":197.88,"score":100,"image":"super-mario-odyssey.png"},{"id":201,"name":"Call Of Duty Infinite Warfare","price":49.99,"score":80,"image":"call-of-duty-infinite-warfare.png"},{"id":102,"name":"The Witcher III Wild Hunt","price":119.5,"score":250,"image":"the-witcher-iii-wild-hunt.png"},{"id":99,"name":"Call Of Duty WWII","price":249.99,"score":205,"image":"call-of-duty-wwii.png"},{"id":12,"name":"Mortal Kombat XL","price":69.99,"score":150,"image":"mortal-kombat-xl.png"},{"id":74,"name":"Shards of Darkness","price":71.94,"score":400,"image":"shards-of-darkness.png"},{"id":31,"name":"Terra Média: Sombras de Mordor","price":79.99,"score":50,"image":"terra-media-sombras-de-mordor.png"},{"id":420,"name":"FIFA 18","price":195.39,"score":325,"image":"fifa-18.png"},{"id":501,"name":"Horizon Zero Dawn","price":115.8,"score":290,"image":"horizon-zero-dawn.png"}]')}},t={};function a(r){var i=t[r];if(void 0!==i)return i.exports;var n=t[r]={exports:{}};return e[r](n,n.exports,a),n.exports}a.m=e,function(){var e=[];a.O=function(t,r,i,n){if(!r){var s=1/0;for(l=0;l<e.length;l++){r=e[l][0],i=e[l][1],n=e[l][2];for(var o=!0,c=0;c<r.length;c++)(!1&n||s>=n)&&Object.keys(a.O).every((function(e){return a.O[e](r[c])}))?r.splice(c--,1):(o=!1,n<s&&(s=n));if(o){e.splice(l--,1);var m=i();void 0!==m&&(t=m)}}return t}n=n||0;for(var l=e.length;l>0&&e[l-1][2]>n;l--)e[l]=e[l-1];e[l]=[r,i,n]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.p="/"}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,r){var i,n,s=r[0],o=r[1],c=r[2],m=0;if(s.some((function(t){return 0!==e[t]}))){for(i in o)a.o(o,i)&&(a.m[i]=o[i]);if(c)var l=c(a)}for(t&&t(r);m<s.length;m++)n=s[m],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(l)},r=self["webpackChunkgamecommerce"]=self["webpackChunkgamecommerce"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=a.O(void 0,[998],(function(){return a(8387)}));r=a.O(r)})();
//# sourceMappingURL=app.c1ef4e5f.js.map