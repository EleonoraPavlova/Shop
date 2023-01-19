(function(){"use strict";var t={8736:function(t,e,n){var o=n(9242),a=n(3396);const i={class:"app"},c={class:"content"};function s(t,e,n,o,s,r){const d=(0,a.up)("NavigationBar"),u=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)("div",i,[(0,a.Wm)(d),(0,a._)("div",c,[(0,a.Wm)(u)])])}const r=t=>((0,a.dD)("data-v-712d0498"),t=t(),(0,a.Cn)(),t),d={class:"header"},u=r((()=>(0,a._)("div",{class:"header__logo"},[(0,a._)("img",{src:"/arch.png",alt:"arch"})],-1))),l={class:"header__center"},p={class:"header__nav-center"},g=(0,a.uE)('<div class="header__right" data-v-712d0498><nav class="header__nav-right" data-v-712d0498><button class="sign_in" data-v-712d0498><a href="#" data-v-712d0498>Sign In</a></button><button class="button sign_up" data-v-712d0498><a href="#" data-v-712d0498>Sign Up</a></button></nav></div>',1);function v(t,e){const n=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("header",d,[u,(0,a._)("div",l,[(0,a._)("nav",p,[(0,a.Wm)(n,{to:"/",class:"header__navigation-link"},{default:(0,a.w5)((()=>[(0,a.Uk)("Main")])),_:1}),(0,a.Wm)(n,{to:"/about",class:"header__navigation-link"},{default:(0,a.w5)((()=>[(0,a.Uk)("About ")])),_:1}),(0,a.Wm)(n,{to:"/contact",class:"header__navigation-link"},{default:(0,a.w5)((()=>[(0,a.Uk)("Contact ")])),_:1})])]),g])}var h=n(89);const _={},f=(0,h.Z)(_,[["render",v],["__scopeId","data-v-712d0498"]]);var m=f,w={components:{NavigationBar:m}};const C=(0,h.Z)(w,[["render",s]]);var y=C,D=n(2483),E=n(7139);const P={class:"products-view"},R=["onClick"];function k(t,e,n,o,i,c){const s=(0,a.up)("Loading"),r=(0,a.up)("ProductsList");return(0,a.wg)(),(0,a.iD)("div",P,[(0,a._)("div",null,[t.isLoadingCategories?((0,a.wg)(),(0,a.j4)(s,{key:0})):((0,a.wg)(!0),(0,a.iD)(a.HY,{key:1},(0,a.Ko)(t.categories,(t=>((0,a.wg)(),(0,a.iD)("div",{key:t,class:(0,E.C_)([{active:i.activeCategory===t},"category"]),onClick:e=>c.toggleCategory(t)},(0,E.zw)(t),11,R)))),128))]),t.isLoadingProducts?((0,a.wg)(),(0,a.j4)(s,{key:1})):((0,a.wg)(),(0,a.j4)(r,{key:0,list:t.collection},null,8,["list"]))])}var T=n(65);const b={class:"product-list"};function q(t,e,n,o,i,c){const s=(0,a.up)("ProductCard");return(0,a.wg)(),(0,a.iD)("div",b,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.list,(t=>((0,a.wg)(),(0,a.j4)(s,{key:t.id,product:t},null,8,["product"])))),128))])}n(7658);const O=t=>((0,a.dD)("data-v-21f030fa"),t=t(),(0,a.Cn)(),t),L={class:"product-card-content"},I={class:"product-card-title"},x=O((()=>(0,a._)("span",null,"description",-1))),F={key:0,class:"product-card-description-content"};function S(t,e,n,o,i,c){const s=(0,a.up)("Icon");return(0,a.wg)(),(0,a.iD)("div",{class:"product-card",onClick:e[1]||(e[1]=e=>t.$router.push(`/products/${n.product.id}`))},[(0,a._)("div",{class:"product-card-image",style:(0,E.j5)({backgroundImage:`url(${n.product.image})`})},null,4),(0,a._)("div",L,[(0,a._)("div",I,(0,E.zw)(n.product.title),1),(0,a._)("div",{class:"product-card-description",onClick:e[0]||(e[0]=(...t)=>c.toggleExpanded&&c.toggleExpanded(...t))},[x,(0,a.Wm)(s,{name:i.isExpanded?"chevron-up":"chevron-down"},null,8,["name"])]),i.isExpanded?((0,a.wg)(),(0,a.iD)("div",F,(0,E.zw)(n.product.description),1)):(0,a.kq)("",!0)])])}function j(t,e,n,o,i,c){return(0,a.wg)(),(0,a.iD)("i",{class:(0,E.C_)([n.color,n.size,...c.mdi])},null,2)}var U={props:{name:{type:String,default:null,validator(t){return t&&t.length}},color:{type:String,default:"",validator(t){return["","success","error"].includes(t)}},size:{type:String,default:"md",validator(t){return["xs","sm","md","mdx","lg","xlg","xxlg","xxxlg"].includes(t)}},spin:{type:Boolean,default:!1}},computed:{mdi(){const t=["mdi","mdi-"+this.name];return this.spin&&t.push("mdi-spin"),t}}};const Z=(0,h.Z)(U,[["render",j],["__scopeId","data-v-0cd2956e"]]);var z=Z,$={components:{Icon:z},props:{product:{type:Object,default:()=>({})}},data(){return{isExpanded:!1}},methods:{toggleExpanded(t){t.stopPropagation(),this.isExpanded=!this.isExpanded}}};const A=(0,h.Z)($,[["render",S],["__scopeId","data-v-21f030fa"]]);var G=A,N={components:{ProductCard:G},props:{list:{type:Array,default:()=>[]}}};const W=(0,h.Z)(N,[["render",q],["__scopeId","data-v-cff4187e"]]);var M=W;const H={class:"loading"};function B(t,e,n,o,i,c){const s=(0,a.up)("MdIcon");return(0,a.wg)(),(0,a.iD)("div",H,[(0,a.Wm)(s,{name:"loading",spin:!0})])}var Y={components:{MdIcon:z}};const K=(0,h.Z)(Y,[["render",B]]);var V=K,J={name:"ProductsView",components:{ProductsList:M,Loading:V},data(){return{activeCategory:null}},async created(){await this.fetchData(),await this.$store.dispatch("categories/getCollection")},computed:{...(0,T.rn)({collection:t=>t.products.collection,isLoadingProducts:t=>t.products.isRequestPending,categories:t=>t.categories.collection,isLoadingCategories:t=>t.categories.isRequestPending})},methods:{async fetchData(t){await this.$store.dispatch("products/getCollection",t)},toggleCategory(t){this.activeCategory===t?(this.activeCategory=null,this.fetchData()):(this.activeCategory=t,this.fetchData({category:t}))}}};const Q=(0,h.Z)(J,[["render",k],["__scopeId","data-v-5696ab58"]]);var X=Q;const tt=t=>((0,a.dD)("data-v-529a99a3"),t=t(),(0,a.Cn)(),t),et={class:"about"},nt=tt((()=>(0,a._)("h3",{class:"about__h3"},"This is an about page",-1))),ot=[nt];function at(t,e){return(0,a.wg)(),(0,a.iD)("div",et,ot)}const it={},ct=(0,h.Z)(it,[["render",at],["__scopeId","data-v-529a99a3"]]);var st=ct;const rt=t=>((0,a.dD)("data-v-8241c274"),t=t(),(0,a.Cn)(),t),dt={class:"contact"},ut=rt((()=>(0,a._)("h3",{class:"contact__h3"},"This is a contact page",-1))),lt=[ut];function pt(t,e){return(0,a.wg)(),(0,a.iD)("div",dt,lt)}const gt={},vt=(0,h.Z)(gt,[["render",pt],["__scopeId","data-v-8241c274"]]);var ht=vt;const _t=t=>((0,a.dD)("data-v-551d4002"),t=t(),(0,a.Cn)(),t),ft={class:"notFound"},mt=_t((()=>(0,a._)("h6",{class:"notFound__h6"},"not found",-1))),wt=[mt];function Ct(t,e){return(0,a.wg)(),(0,a.iD)("div",ft,wt)}const yt={},Dt=(0,h.Z)(yt,[["render",Ct],["__scopeId","data-v-551d4002"]]);var Et=Dt;const Pt={class:"product"},Rt=["src"];function kt(t,e,n,o,i,c){const s=(0,a.up)("Loading");return(0,a.wg)(),(0,a.iD)("div",Pt,[t.isLoadingProduct?((0,a.wg)(),(0,a.j4)(s,{key:1})):((0,a.wg)(),(0,a.iD)(a.HY,{key:0},[(0,a._)("div",null,"title: "+(0,E.zw)(t.product.title),1),(0,a._)("div",null,"price "+(0,E.zw)(t.product.price)+" UAH",1),(0,a._)("div",null,"description: "+(0,E.zw)(t.product.description),1),(0,a._)("img",{src:t.product.image},null,8,Rt),(0,a._)("div",null," rating: "+(0,E.zw)(t.product.rating.rate)+"("+(0,E.zw)(t.product.rating.count)+" votes) ",1)],64))])}var Tt={components:{Loading:V},computed:{...(0,T.rn)({product:t=>t.product.product,isLoadingProduct:t=>t.product.isRequestPending})},async created(){try{await this.$store.dispatch("product/getProduct",this.$route.params.id)}catch(t){this.$router.push("/not-found")}}};const bt=(0,h.Z)(Tt,[["render",kt],["__scopeId","data-v-38237d76"]]);var qt=bt;const Ot=[{path:"/",alias:"/products",name:"ProductsView",component:X},{path:"/about",name:"about",component:st},{path:"/contact",name:"contact",component:ht},{path:"/products/:id",name:"product",component:qt},{path:"/:pathMatch(.*)*",name:"not-found",component:Et}],Lt=(0,D.p7)({history:(0,D.PO)("/Shop/"),routes:Ot});var It=Lt;const xt="GET_COLLECTION_STARTED",Ft="GET_COLLECTION_SUCCESS",St="GET_COLLECTION_FAILED";var jt={namespaced:!0,state:{isRequestPending:!1,isRequestFailed:!1,collection:[]},getters:{},mutations:{[xt](t){t.isRequestPending=!0,t.collection=[],t.isRequestFailed=!1},[Ft](t,e){t.isRequestPending=!1,t.collection=e,t.isRequestFailed=!1},[St](t){t.isRequestPending=!1,t.collection=[],t.isRequestFailed=!0}},actions:{async getCollection({commit:t},e={}){t(xt);try{console.log(e);let n="https://fakestoreapi.com/products";e.category&&(n+=`/category/${e.category}`);const o=await fetch(n).then((t=>t.json()));t(Ft,o)}catch(n){throw t(St),n}}}};const Ut="GET_PRODUCT_STARTED",Zt="GET_PRODUCT_SUCCESS",zt="GET_PRODUCT_FAILED";var $t={namespaced:!0,state:{isRequestPending:!1,isRequestFailed:!1,product:null},getters:{},mutations:{[Ut](t){t.isRequestPending=!0,t.product=null,t.isRequestFailed=!1},[Zt](t,e){t.isRequestPending=!1,t.product=e,t.isRequestFailed=!1},[zt](t){t.isRequestPending=!1,t.product=null,t.isRequestFailed=!0}},actions:{async getProduct({commit:t},e){t(Ut);try{const n=await fetch(`https://fakestoreapi.com/products/${e}`).then((t=>t.json()));t(Zt,n)}catch(n){throw t(zt),n}}}};const At="GET_COLLECTION_STARTED",Gt="GET_COLLECTION_SUCCESS",Nt="GET_COLLECTION_FAILED";var Wt={namespaced:!0,state:{isRequestPending:!1,isRequestFailed:!1,collection:[]},getters:{},mutations:{[At](t){t.isRequestPending=!0,t.collection=[],t.isRequestFailed=!1},[Gt](t,e){t.isRequestPending=!1,t.collection=e,t.isRequestFailed=!1},[Nt](t){t.isRequestPending=!1,t.collection=[],t.isRequestFailed=!0}},actions:{async getCollection({commit:t}){t(At);try{const e=await fetch("https://fakestoreapi.com/products/categories").then((t=>t.json()));t(Gt,e)}catch(e){throw t(Nt),e}}}},Mt=(0,T.MT)({state:{},getters:{},mutations:{},actions:{},modules:{product:$t,products:jt,categories:Wt}});(0,o.ri)(y).use(Mt).use(It).mount("#app")}},e={};function n(o){var a=e[o];if(void 0!==a)return a.exports;var i=e[o]={exports:{}};return t[o](i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,o,a,i){if(!o){var c=1/0;for(u=0;u<t.length;u++){o=t[u][0],a=t[u][1],i=t[u][2];for(var s=!0,r=0;r<o.length;r++)(!1&i||c>=i)&&Object.keys(n.O).every((function(t){return n.O[t](o[r])}))?o.splice(r--,1):(s=!1,i<c&&(c=i));if(s){t.splice(u--,1);var d=a();void 0!==d&&(e=d)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[o,a,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var a,i,c=o[0],s=o[1],r=o[2],d=0;if(c.some((function(e){return 0!==t[e]}))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(r)var u=r(n)}for(e&&e(o);d<c.length;d++)i=c[d],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(u)},o=self["webpackChunktest_task"]=self["webpackChunktest_task"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(8736)}));o=n.O(o)})();
//# sourceMappingURL=app.a731c9f0.js.map