(function(t){function e(e){for(var i,s,c=e[0],o=e[1],u=e[2],f=0,h=[];f<c.length;f++)s=c[f],a[s]&&h.push(a[s][0]),a[s]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);l&&l(e);while(h.length)h.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,c=1;c<n.length;c++){var o=n[c];0!==a[o]&&(i=!1)}i&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var i={},a={app:0},r=[];function s(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=i,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=o;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1:function(t,e){},4267:function(t,e,n){},5452:function(t,e,n){"use strict";var i=n("9202"),a=n.n(i);a.a},"56d7":function(t,n,i){"use strict";i.r(n);i("cadf"),i("551c"),i("f751"),i("097d");var a=i("28dd"),r=i("ecee"),s=i("f2d1"),c=i("ad3d"),o=i("2b0e"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header",{attrs:{title:"Jaime.JS - Mercado Libre API"},on:{emitEvent:t.loadData}}),n("main",[n("div",{attrs:{id:"overlay-parent"}}),n("ItemsContainer",{ref:"itemsContainer"})],1)],1)},l=[],f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("h1",{staticClass:"header-title"},[t._v(t._s(t.title))]),n("a",{staticClass:"link-github",attrs:{href:"https://github.com/Jaimejs0528/consume-mercadolibre-api",target:"_blank"}},[n("font-awesome-icon",{attrs:{icon:["fab","github"]}})],1),n("a",{staticClass:"link-linkedin",attrs:{href:"https://co.linkedin.com/in/jaime-jimenez-serrano",target:"_blank"}},[n("font-awesome-icon",{attrs:{icon:["fab","linkedin"]}})],1),n("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],attrs:{type:"search",placeholder:"Search...",maxlength:"35"},domProps:{value:t.search},on:{keyup:t.makeSearch,input:function(e){e.target.composing||(t.search=e.target.value)}}}),n("button",{staticClass:"btn-search",attrs:{type:"button"},on:{click:t.emitEvent}},[t._v("Search")])])},h=[],g=(i("386d"),{name:"Header",props:{title:String},data:function(){return{search:""}},methods:{emitEvent:function(){this.$emit("emitEvent",this.search)},makeSearch:function(t){"Enter"===t.key&&this.emitEvent()}}}),d=g,p=(i("5452"),i("0c7c")),m=Object(p["a"])(d,f,h,!1,null,null,null),v=m.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"items-ctn"},[t.isLoading?n("span",{staticClass:"info"},[t._v("Loading...")]):t._e(),t.error?n("span",{staticClass:"alert"},[t._v(t._s(t.error))]):t._e(),t._l(t.results,function(e){return t.isLoading?t._e():[n("Item",{key:e.id+"-item",attrs:{thumbnail:e.thumbnail,price:e.price,title:e.title,sellerID:e.seller.id},on:{hasPressed:t.showDetails}}),n("ItemDetail",{key:e.id+"-detail",ref:"details",refInFor:!0})]}),n("Paging",{ref:"paging",on:{nextPage:t.makeRequestPaging,previousPage:t.makeRequestPaging}})],2)},_=[],P=(i("ac6a"),i("4917"),i("a481"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item-ctn",on:{mousedown:t.hasPressed}},[n("img",{staticClass:"thumbnail",attrs:{alt:t.title,src:t.thumbnail}}),n("h2",[t._v(t._s(t.title))]),n("span",[t._v(t._s(t.seller))]),n("i",[t._v("$ "+t._s(t.int2CurrencyLocal(t.price)))])])}),y=[],k=(i("c5f6"),i("7f7f"),function(t,e){var n=e||t;return Math.floor(100-100*t/n)}),$=function(t){return Intl.NumberFormat().format(t)},w=function(t){var e=t.city.name||"",n=t.country.name||"",i="".concat(e,", ").concat(n);return""===i?"No Location":i},C=function(t){return Math.floor(t.total/t.limit)||1},S={name:"Item",props:{thumbnail:{type:String,default:"https://user-images.githubusercontent.com/101482/29592647-40da86ca-875a-11e7-8bc3-941700b0a323.png"},title:{type:String,required:!0},sellerID:{type:Number,required:!0},price:{type:Number,required:!0}},data:function(){return{seller:""}},mounted:function(){var t=this,e="https://api.mercadolibre.com/users/".concat(this.sellerID),n="?attributes=nickname";this.$http.get("".concat(e).concat(n)).then(function(e){return t.seller=e.body.nickname||"Seller not found"}).catch(function(e){return t.seller="Error getting seller"})},methods:{hasPressed:function(){this.$emit("hasPressed",this.$vnode.key)},int2CurrencyLocal:function(t){return $(t)}}},L=S,x=(i("83d2"),Object(p["a"])(L,P,y,!1,null,null,null)),j=x.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isShowing?n("div",{staticClass:"details-ctn",on:{click:t.toggle}},[n("div",{staticClass:"img-ctn"},[n("img",{attrs:{src:t.picture.url,alt:t.picture.id}})]),n("div",{staticClass:"info-ctn"},[n("h2",[t._v(t._s(t.title))]),n("p",[t._v("Price: \n      "),t.discount>0?n("span",{staticStyle:{"text-decoration":"line-through"}},[t._v("$"+t._s(t.int2CurrencyLocal(t.originalPrice)))]):t._e(),t._v("\n      $"+t._s(t.int2CurrencyLocal(t.actualPrice))+"\n      "),t.discount>0?n("i",[t._v(t._s(t.discount)+" %")]):t._e()]),n("p",[t._v("Available quantity: "+t._s(t.availableQuantity))]),n("p",[t._v("Seller location: "+t._s(t.sellerLocation))]),n("p",[t._v("Accepts MercadoPago: "+t._s(t.acceptsMercadoPago?"yes":"no"))])])]):t._e()},q=[],I={name:"ItemDetail",data:function(){return{isShowing:!1,title:"",actualPrice:0,originalPrice:0,discount:0,sellerLocation:"",availableQuantity:0,acceptsMercadoPago:!1,condition:"",picture:null}},mounted:function(){var t=this,e=this.$vnode.key.replace("-detail",""),n="https://api.mercadolibre.com/items/".concat(e),i="?attributes=title,price,original_price,seller_address,available_quantity,accepts_mercadopago,pictures, condition";this.$http.get("".concat(n).concat(i)).then(function(e){var n=e.body,i=n.title,a=n.price,r=n.original_price,s=n.seller_address,c=n.available_quantity,o=n.accepts_mercadopago,u=n.pictures,l=n.condition;t.title=i,t.picture=u.length>0&&u[0],t.availableQuantity=c,t.acceptsMercadoPago=o,t.condition=l,t.originalPrice=r,t.actualPrice=a,t.discount=k(t.actualPrice,t.originalPrice),t.sellerLocation=w(s)}).catch(function(t){return console.log(t)})},methods:{toggle:function(){this.isShowing=!this.isShowing;var t=document.querySelector("#overlay-parent");this.isShowing&&t.classList.add("opacity-effect"),!this.isShowing&&t.classList.remove("opacity-effect"),t=document.querySelector("main"),this.isShowing&&t.classList.add("opacity-effect"),!this.isShowing&&t.classList.remove("opacity-effect")},int2CurrencyLocal:function(t){return $(t)}}},E=I,M=(i("f014"),Object(p["a"])(E,O,q,!1,null,null,null)),D=M.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"paging-ctn"},[n("button",{staticClass:"left",on:{click:t.previousPage}},[t._v("Previous")]),n("span",[t._v(t._s(t.currentPage)+" of "+t._s(t.totalPages))]),n("button",{staticClass:"right",on:{click:t.nextPage}},[t._v("Next")])])},R=[],J={name:"Paging",data:function(){return{currentPage:1,totalPages:1,active:!1}},methods:{nextPage:function(){this.currentPage<this.totalPages&&!this.active&&this.$emit("nextPage"),this.currentPage=this.currentPage<this.totalPages&&!this.active&&this.currentPage+1||this.currentPage,this.active=this.currentPage<this.totalPages},previousPage:function(){this.currentPage>1&&!this.active&&this.$emit("previousPage"),this.currentPage=this.currentPage>1&&!this.active&&this.currentPage-1||this.currentPage,this.active=this.currentPage>1}}},T=J,A=(i("60f7"),Object(p["a"])(T,N,R,!1,null,null,null)),H=A.exports,Q={name:"ItemsContainer",components:{Item:j,ItemDetail:D,Paging:H},mounted:function(){this.makeRequest("")},data:function(){return{error:null,isLoading:!0,paging:null,results:null,search:"",offset:0}},methods:{makeRequest:function(t){var n=this;this.isLoading=!0,this.error=null,this.search=t;var i="https://api.mercadolibre.com/sites/MCO/search",a="?q=".concat(t,"&category=MCO1055&offset=").concat(this.offset,"&limit=24&attributes=paging,results");this.$http.get("".concat(i).concat(a)).then(function(i){200===i.status?(n.paging=i.body.paging,n.$refs.paging.totalPages=C(n.paging),n.search!==t&&(n.$refs.paging.currentPage=1),n.$refs.paging.currentPage=n.$refs.paging.currentPage<n.$refs.paging.totalPages&&n.$refs.paging.currentPage||1,n.offset=n.$refs.paging.currentPage,n.results=i.body.results,0===n.results.length&&(n.error="Nothing to show =("),n.isLoading=!1):n.error="".concat(e.status,": ").concat(e.body.error)}).catch(function(t){n.isLoading=!1,n.error=t.status&&"".concat(t.status,": ").concat(t.body.error)||t}),setTimeout(function(){return n.$refs.paging.active=!1},200)},showDetails:function(t){var e=t.replace("-item",""),n=this.$refs.details.filter(function(t){return t.$vnode.key.match(e)})[0],i=this.$refs.details.filter(function(t){return!t.$vnode.key.match(e)});i.forEach(function(t){return t.isShowing=!1}),n.toggle()},makeRequestPaging:function(){this.makeRequest(this.search)}}},F=Q,z=(i("f888"),Object(p["a"])(F,b,_,!1,null,null,null)),B=z.exports,G={name:"app",components:{Header:v,ItemsContainer:B},methods:{loadData:function(t){this.$refs.itemsContainer.makeRequest(t)}}},K=G,U=(i("5c0b"),Object(p["a"])(K,u,l,!1,null,null,null)),V=U.exports;r["c"].add(s["a"]),o["a"].component("font-awesome-icon",c["a"]),o["a"].config.productionTip=!1,o["a"].use(a["a"]),new o["a"]({render:function(t){return t(V)}}).$mount("#app")},"5a51":function(t,e,n){},"5c0b":function(t,e,n){"use strict";var i=n("b0d4"),a=n.n(i);a.a},"60f7":function(t,e,n){"use strict";var i=n("4267"),a=n.n(i);a.a},"83d2":function(t,e,n){"use strict";var i=n("867c"),a=n.n(i);a.a},"867c":function(t,e,n){},9202:function(t,e,n){},b0d4:function(t,e,n){},f014:function(t,e,n){"use strict";var i=n("5a51"),a=n.n(i);a.a},f888:function(t,e,n){"use strict";var i=n("fb59"),a=n.n(i);a.a},fb59:function(t,e,n){}});
//# sourceMappingURL=app.ab5b9f17.js.map