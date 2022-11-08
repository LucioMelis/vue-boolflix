(function(){"use strict";var t={6083:function(t,e,n){n(6992),n(8674),n(9601),n(7727);var r=n(144),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("HeaderComponent",{on:{ricercaInserita:t.chiamataApi}}),n("MainComponent",{attrs:{serieTv:t.arraySerieTv,film:t.arrayFilm}})],1)},o=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("div",{staticClass:"container-header"},[t._m(0),n("div",{staticClass:"container-input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.ricercaUtente,expression:"ricercaUtente"}],attrs:{type:"text",placeholder:"Ricerca Film-Serie Tv"},domProps:{value:t.ricercaUtente},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.emitInput.apply(null,arguments)},input:function(e){e.target.composing||(t.ricercaUtente=e.target.value)}}}),n("button",{on:{click:t.emitInput}},[t._v("Cerca")])])])])},c=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container-img"},[r("img",{attrs:{src:n(5460),alt:"Logo"}})])}],s={name:"HeaderComponent",data:function(){return{ricercaUtente:""}},methods:{emitInput:function(){this.$emit("ricercaInserita",this.ricercaUtente),this.ricercaUtente=""}}},l=s,u=n(1001),f=(0,u.Z)(l,i,c,!1,null,"e5791576",null),p=f.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("div",{staticClass:"container-main"},[t.film.length>0?n("h1",[t._v("FILM")]):t._e(),n("FilmComponent",{attrs:{film:t.film}}),t.serieTv.length>0?n("h1",[t._v("SERIE TV")]):t._e(),n("SerieTvComponent",{attrs:{serieTv:t.serieTv}})],1)])},m=[],g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-components"},t._l(t.film,(function(t){return n("div",{key:t.id,staticClass:"card slit-in-vertical"},[n("CardGeneral",{attrs:{titolo:t.title,titoloOriginale:t.original_title,lingua:t.original_language,voto:t.vote_average,poster:t.poster_path,info:t.overview,id:t.id,tipo:"movie"}})],1)})),0)},d=[],h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content-card",on:{mouseover:t.cambioValoreOver,mouseleave:t.cambioValoreLeave}},[t.active?n("div",{staticClass:"container-info"},[n("h2",[t._v(t._s(t.titolo))]),n("p",[t._v(" Titolo originale: "),n("span",{staticClass:"block"},[t._v(t._s(t.titoloOriginale))])]),n("p",[t._v(" Lingua: "),n("img",{attrs:{src:t.ricercaBandiera(t.lingua),alt:t.lingua},on:{error:t.bandieraNonTrovata}})]),n("p",[t._v(" Voto: "),n("span",[t._v(t._s(t.votoIntero))]),t._l(5,(function(e,r){return n("font-awesome-icon",{key:r,attrs:{icon:[t.inserisciStella(r),"fa-star"]}})}))],2),n("p",{staticClass:"actors"},[t._v(" Cast: "),t._l(t.arrayAttori,(function(e,r){return n("span",{key:r,staticClass:"block"},[t._v(" "+t._s(e.name)+" ")])}))],2),n("p",[t._v(" Trama: "),n("span",{staticClass:"block"},[t._v(t._s(t.info))])])]):n("div",{staticClass:"container-img"},[n("img",{staticClass:"poster",attrs:{src:t.ricercaPoster(t.poster),alt:t.titolo},on:{error:t.imgNonTrovata}})])])},b=[],_=(n(9653),n(2222),n(7042),n(9669)),C=n.n(_),y="b3065838a5263bd39277864b389c35d9",T={name:"CardGeneral",data:function(){return{active:!1,arrayAttori:[]}},props:{titolo:String,titoloOriginale:String,lingua:String,voto:Number,poster:String,info:String,tipo:String,id:Number},computed:{votoIntero:function(){return Math.ceil(this.voto/2)}},created:function(){var t=this,e={api_key:y,language:"it-IT"};C().get("https://api.themoviedb.org/3/".concat(this.tipo,"/").concat(this.id,"/credits"),{params:e}).then((function(e){t.arrayAttori=e.data.cast.slice(0,5),console.log(t.arrayAttori)})).catch((function(t){console.log(t)}))},methods:{cambioValoreOver:function(){this.active=!0},cambioValoreLeave:function(){this.active=!1},ricercaPoster:function(t){return"https://image.tmdb.org/t/p/original/".concat(t)},imgNonTrovata:function(t){t.target.src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png"},ricercaBandiera:function(t){return"en"===t?"https://raw.githubusercontent.com/emcrisostomo/flags/91286fe015b4957b51bc470eca4b5fd6f5ac90da/svg/GB.svg":"ja"===t?"https://raw.githubusercontent.com/emcrisostomo/flags/91286fe015b4957b51bc470eca4b5fd6f5ac90da/svg/JP.svg":"ko"===t?"https://raw.githubusercontent.com/emcrisostomo/flags/91286fe015b4957b51bc470eca4b5fd6f5ac90da/svg/KR.svg":"da"===t?"https://raw.githubusercontent.com/emcrisostomo/flags/91286fe015b4957b51bc470eca4b5fd6f5ac90da/svg/DK.svg":"te"===t?"https://raw.githubusercontent.com/emcrisostomo/flags/91286fe015b4957b51bc470eca4b5fd6f5ac90da/svg/IN.svg":"https://raw.githubusercontent.com/emcrisostomo/flags/91286fe015b4957b51bc470eca4b5fd6f5ac90da/svg/".concat(t.toUpperCase(),".svg")},bandieraNonTrovata:function(t){t.target.src="https://aeroclub-issoire.fr/wp-content/uploads/2020/05/image-not-found-300x225.jpg"},inserisciStella:function(t){return this.votoIntero<=t?"fa-regular":"fa-solid"}}},k=T,w=(0,u.Z)(k,h,b,!1,null,"fde9660e",null),x=w.exports,O={name:"FilmComponent",components:{CardGeneral:x},props:{film:Array}},I=O,S=(0,u.Z)(I,g,d,!1,null,"0511c3bb",null),A=S.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-components"},t._l(t.serieTv,(function(t){return n("div",{key:t.id,staticClass:"card"},[n("CardGeneral",{attrs:{titolo:t.name,titoloOriginale:t.original_name,lingua:t.original_language,voto:t.vote_average,poster:t.poster_path,info:t.overview,id:t.id,tipo:"tv"}})],1)})),0)},N=[],U={name:"SerieTvComponent",components:{CardGeneral:x},props:{serieTv:Array}},F=U,Z=(0,u.Z)(F,E,N,!1,null,"45841e92",null),$=Z.exports,j={name:"MainComponent",props:{serieTv:Array,film:Array},components:{FilmComponent:A,SerieTvComponent:$}},P=j,G=(0,u.Z)(P,v,m,!1,null,"79e7c2f4",null),L=G.exports,M={name:"App",components:{HeaderComponent:p,MainComponent:L},data:function(){return{apiUrl:"https://api.themoviedb.org/3/search/",apiKey:y,arraySerieTv:[],arrayFilm:[]}},methods:{chiamataApi:function(t){var e=this;if(""!==t){var n={query:t,api_key:this.apiKey,language:"it-IT"};C().get(this.apiUrl+"tv",{params:n}).then((function(t){e.arraySerieTv=t.data.results})).catch((function(t){console.log(t)})),C().get(this.apiUrl+"movie",{params:n}).then((function(t){e.arrayFilm=t.data.results})).catch((function(t){console.log(t)}))}}}},V=M,K=(0,u.Z)(V,a,o,!1,null,null,null),B=K.exports,H=n(8947),R=n(7810),q=n(1436),D=n(6024);r.Z.component("font-awesome-icon",R.GN),H.vI.add(q.Tab,D.Tab),r.Z.config.productionTip=!1,new r.Z({render:function(t){return t(B)}}).$mount("#app")},5460:function(t,e,n){t.exports=n.p+"img/Logonetflix.90923731.png"}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,r,a,o){if(!r){var i=1/0;for(u=0;u<t.length;u++){r=t[u][0],a=t[u][1],o=t[u][2];for(var c=!0,s=0;s<r.length;s++)(!1&o||i>=o)&&Object.keys(n.O).every((function(t){return n.O[t](r[s])}))?r.splice(s--,1):(c=!1,o<i&&(i=o));if(c){t.splice(u--,1);var l=a();void 0!==l&&(e=l)}}return e}o=o||0;for(var u=t.length;u>0&&t[u-1][2]>o;u--)t[u]=t[u-1];t[u]=[r,a,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.p="/vue-boolflix/"}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,r){var a,o,i=r[0],c=r[1],s=r[2],l=0;if(i.some((function(e){return 0!==t[e]}))){for(a in c)n.o(c,a)&&(n.m[a]=c[a]);if(s)var u=s(n)}for(e&&e(r);l<i.length;l++)o=i[l],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(u)},r=self["webpackChunkvue_boolflix"]=self["webpackChunkvue_boolflix"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(6083)}));r=n.O(r)})();
//# sourceMappingURL=app-legacy.dcfe1b2c.js.map