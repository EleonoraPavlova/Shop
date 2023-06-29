(function(){"use strict";var t={9923:function(t,e,o){var n=o(9242),s=o(3396);const a={class:"app"},c={class:"content"};function i(t,e,o,n,i,r){const d=(0,s.up)("NavigationBar"),u=(0,s.up)("router-view"),l=(0,s.up)("AppFooter");return(0,s.wg)(),(0,s.iD)("div",a,[(0,s.Wm)(d),(0,s._)("div",c,[(0,s.Wm)(u)]),(0,s.Wm)(l)])}const r={class:"header"},d=(0,s._)("div",{class:"header__logo"},[(0,s._)("img",{src:"icon.png",class:"header__icon",alt:"icon"})],-1),u={class:"header__center"},l={class:"header__nav-center"},p={class:"header__right"},_={class:"header__nav-right"};function g(t,e,o,n,a,c){const i=(0,s.up)("router-link"),g=(0,s.up)("MdIcon"),v=(0,s.up)("AppButtons");return(0,s.wg)(),(0,s.iD)("header",r,[d,(0,s._)("div",u,[(0,s._)("nav",l,[(0,s.Wm)(i,{to:"/",class:"header__navigation-link"},{default:(0,s.w5)((()=>[(0,s.Uk)("Main")])),_:1}),(0,s.Wm)(i,{to:"/about",class:"header__navigation-link"},{default:(0,s.w5)((()=>[(0,s.Uk)("About ")])),_:1}),(0,s.Wm)(i,{to:"/contact",class:"header__navigation-link"},{default:(0,s.w5)((()=>[(0,s.Uk)("Contact ")])),_:1})])]),(0,s._)("div",p,[(0,s._)("nav",_,[(0,s.Wm)(v,{class:"header__search"},{default:(0,s.w5)((()=>[(0,s.Wm)(g,{name:"magnify",size:"md",color:"gray"})])),_:1}),(0,s.Wm)(v,{class:"header__search header__search-sign_in"},{default:(0,s.w5)((()=>[(0,s.Uk)("Sign In")])),_:1}),(0,s.Wm)(v,{class:"header__search header__search-sign_up header__search-sign_up-link"},{default:(0,s.w5)((()=>[(0,s.Uk)("Sign Up")])),_:1})])])])}var v=o(7139);function h(t,e,o,n,a,c){return(0,s.wg)(),(0,s.iD)("i",{class:(0,v.C_)([o.color,o.size,...c.mdi])},null,2)}o(7658);var f={props:{name:{type:String,default:null,validator(t){return t&&t.length}},color:{type:String,default:"",validator(t){return["","success","error","gray"].includes(t)}},size:{type:String,default:"md",validator(t){return["xs","sm","md","mdx","lg","xlg","xxlg","xxxlg"].includes(t)}},spin:{type:Boolean,default:!1}},computed:{mdi(){const t=["mdi","mdi-"+this.name];return this.spin&&t.push("mdi-spin"),t}}},m=o(89);const w=(0,m.Z)(f,[["render",h],["__scopeId","data-v-6e1be750"]]);var y=w;function C(t,e,o,n,a,c){return(0,s.wg)(),(0,s.iD)("button",{class:(0,v.C_)(["btn m-1",[`btn-${o.color}`,`btn-${o.size}`]]),onClick:e[0]||(e[0]=e=>t.$emit("click"))},[(0,s.WI)(t.$slots,"default")],2)}var k={props:{color:{type:String,default:"primary"},size:{type:String,default:"lg"},type:{type:String,default:"button"}},emits:["click"]};const D=(0,m.Z)(k,[["render",C]]);var P=D,E={components:{MdIcon:y,AppButtons:P}};const R=(0,m.Z)(E,[["render",g]]);var b=R;const T={class:"footer__box-nav"},q=(0,s.uE)('<ul class="footer__nav"><li class="footer__nav footer__nav-item"><a href="#">About Us</a></li><li class="footer__nav footer__nav-item"><a href="#">How it Works</a></li><li class="footer__nav footer__nav-item"><a href="#">FAQ</a></li><li class="footer__nav footer__nav-item"><a href="#">Contact Us</a></li><li class="footer__nav footer__nav-item"><a href="#">Privacy Policy</a></li></ul><div class="footer__logo"><img src="icon.png" class="footer__icon" alt="icon"></div>',2),I=[q];function L(t,e,o,n,a,c){return(0,s.wg)(),(0,s.iD)("section",T,I)}var O={};const x=(0,m.Z)(O,[["render",L]]);var F=x,S={components:{NavigationBar:b,AppFooter:F}};const U=(0,m.Z)(S,[["render",i]]);var j=U,A=o(2483);const W=t=>((0,s.dD)("data-v-16026993"),t=t(),(0,s.Cn)(),t),$={class:"products-view"},z={class:"products-view__title"},Z=W((()=>(0,s._)("h1",{class:"products-view__h1"},[(0,s._)("span",null," Most "),(0,s._)("span",{class:"products-view__h1-color"}," Popular "),(0,s._)("span",{class:"products-view__span"}," Items")],-1))),G={class:"products-view__filters"},M=W((()=>(0,s._)("h4",{class:"products-view__h4"},"Categories:",-1))),N=["onClick"];function B(t,e,o,n,a,c){const i=(0,s.up)("Loading"),r=(0,s.up)("ProductsList");return(0,s.wg)(),(0,s.iD)("div",$,[(0,s._)("div",z,[Z,(0,s._)("div",G,[t.isLoadingCategories?((0,s.wg)(),(0,s.j4)(i,{key:0})):((0,s.wg)(),(0,s.iD)(s.HY,{key:1},[M,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.categories,(t=>((0,s.wg)(),(0,s.iD)("div",{key:t,class:(0,v.C_)([{active:a.activeCategory===t},"category"]),onClick:e=>c.toggleCategory(t)},(0,v.zw)(t),11,N)))),128))],64))])]),t.isLoadingProducts?((0,s.wg)(),(0,s.j4)(i,{key:1})):((0,s.wg)(),(0,s.j4)(r,{key:0,list:t.collection},null,8,["list"]))])}var H=o(65);const Y={class:"product-list"};function K(t,e,o,n,a,c){const i=(0,s.up)("ProductCard");return(0,s.wg)(),(0,s.iD)("div",Y,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.list,(t=>((0,s.wg)(),(0,s.j4)(i,{key:t.id,product:t},null,8,["product"])))),128))])}const V=t=>((0,s.dD)("data-v-86c268f8"),t=t(),(0,s.Cn)(),t),Q={class:"product-card__content"},J={class:"product-card__title"},X=V((()=>(0,s._)("span",null,"Description",-1))),tt={key:0,class:"product-card__description-content"};function et(t,e,o,n,a,c){const i=(0,s.up)("Icon");return(0,s.wg)(),(0,s.iD)("div",{class:"product-card",onClick:e[1]||(e[1]=e=>t.$router.push(`/products/${o.product.id}`))},[(0,s._)("div",{class:"product-card__image",style:(0,v.j5)({backgroundImage:`url(${o.product.image})`})},null,4),(0,s._)("div",Q,[(0,s._)("div",J,(0,v.zw)(o.product.title),1),(0,s._)("div",{class:"product-card__description",onClick:e[0]||(e[0]=(...t)=>c.toggleExpanded&&c.toggleExpanded(...t))},[X,(0,s.Wm)(i,{name:a.isExpanded?"chevron-up":"chevron-down"},null,8,["name"])]),a.isExpanded?((0,s.wg)(),(0,s.iD)("div",tt,(0,v.zw)(o.product.description),1)):(0,s.kq)("",!0)])])}var ot={components:{Icon:y},props:{product:{type:Object,default:()=>({})}},data(){return{isExpanded:!1}},methods:{toggleExpanded(t){t.stopPropagation(),this.isExpanded=!this.isExpanded}}};const nt=(0,m.Z)(ot,[["render",et],["__scopeId","data-v-86c268f8"]]);var st=nt,at={components:{ProductCard:st},props:{list:{type:Array,default:()=>[]}}};const ct=(0,m.Z)(at,[["render",K],["__scopeId","data-v-75c640da"]]);var it=ct;const rt={class:"loading"};function dt(t,e,o,n,a,c){const i=(0,s.up)("MdIcon");return(0,s.wg)(),(0,s.iD)("div",rt,[(0,s.Wm)(i,{name:"loading",spin:!0,size:"xxlg"})])}var ut={components:{MdIcon:y}};const lt=(0,m.Z)(ut,[["render",dt]]);var pt=lt,_t={name:"ProductsView",components:{ProductsList:it,Loading:pt},data(){return{activeCategory:null}},async created(){await this.fetchData(),await this.$store.dispatch("categories/getCollection")},computed:{...(0,H.rn)({collection:t=>t.products.collection,isLoadingProducts:t=>t.products.isRequestPending,categories:t=>t.categories.collection,isLoadingCategories:t=>t.categories.isRequestPending})},methods:{async fetchData(t){await this.$store.dispatch("products/getCollection",t)},toggleCategory(t){this.activeCategory===t?(this.activeCategory=null,this.fetchData()):(this.activeCategory=t,this.fetchData({category:t}))}}};const gt=(0,m.Z)(_t,[["render",B],["__scopeId","data-v-16026993"]]);var vt=gt;const ht=t=>((0,s.dD)("data-v-3c21ef0a"),t=t(),(0,s.Cn)(),t),ft={class:"about"},mt=ht((()=>(0,s._)("h3",{class:"about__h3"},"This is an about page",-1))),wt=[mt];function yt(t,e){return(0,s.wg)(),(0,s.iD)("div",ft,wt)}const Ct={},kt=(0,m.Z)(Ct,[["render",yt],["__scopeId","data-v-3c21ef0a"]]);var Dt=kt;const Pt=t=>((0,s.dD)("data-v-26631eae"),t=t(),(0,s.Cn)(),t),Et={class:"contact"},Rt=Pt((()=>(0,s._)("h3",{class:"contact__h3"},"This is a contact page",-1))),bt=[Rt];function Tt(t,e){return(0,s.wg)(),(0,s.iD)("div",Et,bt)}const qt={},It=(0,m.Z)(qt,[["render",Tt],["__scopeId","data-v-26631eae"]]);var Lt=It;const Ot=t=>((0,s.dD)("data-v-58497e5e"),t=t(),(0,s.Cn)(),t),xt={class:"notFound"},Ft=Ot((()=>(0,s._)("h6",{class:"notFound__h6"},"Not found, oops..",-1))),St=[Ft];function Ut(t,e){return(0,s.wg)(),(0,s.iD)("div",xt,St)}const jt={},At=(0,m.Z)(jt,[["render",Ut],["__scopeId","data-v-58497e5e"]]);var Wt=At;const $t=t=>((0,s.dD)("data-v-13df44c4"),t=t(),(0,s.Cn)(),t),zt={class:"product"},Zt={class:"product__title"},Gt={class:"product__box"},Mt={class:"product__wrapImg"},Nt=["src"],Bt={class:"product__item"},Ht=$t((()=>(0,s._)("strong",null,"Price: ",-1))),Yt={class:"product__item"},Kt=$t((()=>(0,s._)("strong",null,"Description: ",-1))),Vt=$t((()=>(0,s._)("strong",{class:"product__item"},"Rating: ",-1))),Qt={class:"product__button"};function Jt(t,e,o,n,a,c){const i=(0,s.up)("AppButtons"),r=(0,s.up)("Loading");return(0,s.wg)(),(0,s.iD)("div",zt,[t.isLoadingProduct?((0,s.wg)(),(0,s.j4)(r,{key:1})):((0,s.wg)(),(0,s.iD)(s.HY,{key:0},[(0,s._)("div",Zt,(0,v.zw)(t.product.title),1),(0,s._)("div",Gt,[(0,s._)("div",Mt,[(0,s._)("img",{src:t.product.image,class:"product__img"},null,8,Nt)]),(0,s._)("div",null,[(0,s._)("div",Bt,[Ht,(0,s.Uk)(" "+(0,v.zw)(t.product.price)+" EUR ",1)]),(0,s._)("div",Yt,[Kt,(0,s.Uk)(" "+(0,v.zw)(t.product.description),1)]),(0,s._)("div",null,[Vt,(0,s.Uk)(" "+(0,v.zw)(t.product.rating.rate)+" ("+(0,v.zw)(t.product.rating.count)+" votes) ",1)])])]),(0,s._)("div",Qt,[(0,s.Wm)(i,{class:"header__search header__search-sign_up header__search-sign_up-link",onClick:e[0]||(e[0]=e=>t.$router.push("/"))},{default:(0,s.w5)((()=>[(0,s.Uk)("Back")])),_:1})])],64))])}var Xt={components:{Loading:pt,AppButtons:P},computed:{...(0,H.rn)({product:t=>t.product.product,isLoadingProduct:t=>t.product.isRequestPending})},async created(){try{await this.$store.dispatch("product/getProduct",this.$route.params.id)}catch(t){this.$router.push("/not-found")}}};const te=(0,m.Z)(Xt,[["render",Jt],["__scopeId","data-v-13df44c4"]]);var ee=te;const oe=[{path:"/",alias:"/products",name:"ProductsView",component:vt},{path:"/about",name:"about",component:Dt},{path:"/contact",name:"contact",component:Lt},{path:"/products/:id",name:"product",component:ee},{path:"/:pathMatch(.*)*",name:"not-found",component:Wt}],ne=(0,A.p7)({history:(0,A.r5)("/Shop/"),routes:oe});var se=ne;const ae="GET_COLLECTION_STARTED",ce="GET_COLLECTION_SUCCESS",ie="GET_COLLECTION_FAILED";var re={namespaced:!0,state:{isRequestPending:!1,isRequestFailed:!1,collection:[]},getters:{},mutations:{[ae](t){t.isRequestPending=!0,t.collection=[],t.isRequestFailed=!1},[ce](t,e){t.isRequestPending=!1,t.collection=e,t.isRequestFailed=!1},[ie](t){t.isRequestPending=!1,t.collection=[],t.isRequestFailed=!0}},actions:{async getCollection({commit:t},e={}){t(ae);try{console.log(e);let o="https://fakestoreapi.com/products";e.category&&(o+=`/category/${e.category}`);const n=await fetch(o).then((t=>t.json()));t(ce,n)}catch(o){throw t(ie),o}}}};const de="GET_PRODUCT_STARTED",ue="GET_PRODUCT_SUCCESS",le="GET_PRODUCT_FAILED";var pe={namespaced:!0,state:{isRequestPending:!1,isRequestFailed:!1,product:null},getters:{},mutations:{[de](t){t.isRequestPending=!0,t.product=null,t.isRequestFailed=!1},[ue](t,e){t.isRequestPending=!1,t.product=e,t.isRequestFailed=!1},[le](t){t.isRequestPending=!1,t.product=null,t.isRequestFailed=!0}},actions:{async getProduct({commit:t},e){t(de);try{const o=await fetch(`https://fakestoreapi.com/products/${e}`).then((t=>t.json()));t(ue,o)}catch(o){throw t(le),o}}}};const _e="GET_COLLECTION_STARTED",ge="GET_COLLECTION_SUCCESS",ve="GET_COLLECTION_FAILED";var he={namespaced:!0,state:{isRequestPending:!1,isRequestFailed:!1,collection:[]},getters:{},mutations:{[_e](t){t.isRequestPending=!0,t.collection=[],t.isRequestFailed=!1},[ge](t,e){t.isRequestPending=!1,t.collection=e,t.isRequestFailed=!1},[ve](t){t.isRequestPending=!1,t.collection=[],t.isRequestFailed=!0}},actions:{async getCollection({commit:t}){t(_e);try{const e=await fetch("https://fakestoreapi.com/products/categories").then((t=>t.json()));t(ge,e)}catch(e){throw t(ve),e}}}},fe=(0,H.MT)({state:{},getters:{},mutations:{},actions:{},modules:{product:pe,products:re,categories:he}});(0,n.ri)(j).use(fe).use(se).mount("#app")}},e={};function o(n){var s=e[n];if(void 0!==s)return s.exports;var a=e[n]={exports:{}};return t[n](a,a.exports,o),a.exports}o.m=t,function(){var t=[];o.O=function(e,n,s,a){if(!n){var c=1/0;for(u=0;u<t.length;u++){n=t[u][0],s=t[u][1],a=t[u][2];for(var i=!0,r=0;r<n.length;r++)(!1&a||c>=a)&&Object.keys(o.O).every((function(t){return o.O[t](n[r])}))?n.splice(r--,1):(i=!1,a<c&&(c=a));if(i){t.splice(u--,1);var d=s();void 0!==d&&(e=d)}}return e}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[n,s,a]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};o.O.j=function(e){return 0===t[e]};var e=function(e,n){var s,a,c=n[0],i=n[1],r=n[2],d=0;if(c.some((function(e){return 0!==t[e]}))){for(s in i)o.o(i,s)&&(o.m[s]=i[s]);if(r)var u=r(o)}for(e&&e(n);d<c.length;d++)a=c[d],o.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return o.O(u)},n=self["webpackChunktest_task"]=self["webpackChunktest_task"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(9923)}));n=o.O(n)})();
//# sourceMappingURL=app.ea33bab1.js.map