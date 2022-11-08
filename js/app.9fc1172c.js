(function(){"use strict";var t={83:function(t,e,r){var a=r(144),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("HeaderComponent",{on:{ricercaInserita:t.chiamataApi}}),r("MainComponent",{attrs:{serieTv:t.arraySerieTv,film:t.arrayFilm}})],1)},i=[],o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",[r("div",{staticClass:"container-header"},[t._m(0),r("div",{staticClass:"container-input"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.ricercaUtente,expression:"ricercaUtente"}],attrs:{type:"text",placeholder:"Ricerca Film-Serie Tv"},domProps:{value:t.ricercaUtente},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.emitInput.apply(null,arguments)},input:function(e){e.target.composing||(t.ricercaUtente=e.target.value)}}}),r("button",{on:{click:t.emitInput}},[t._v("Cerca")])])])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-img"},[a("img",{attrs:{src:r(460),alt:"Logo"}})])}],c={name:"HeaderComponent",data(){return{ricercaUtente:""}},methods:{emitInput(){this.$emit("ricercaInserita",this.ricercaUtente),this.ricercaUtente=""}}},l=c,u=r(1),p=(0,u.Z)(l,o,s,!1,null,"e5791576",null),m=p.exports,v=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",[r("div",{staticClass:"container-main"},[t.film.length>0?r("h1",[t._v("FILM")]):t._e(),r("FilmComponent",{attrs:{film:t.film}}),t.serieTv.length>0?r("h1",[t._v("SERIE TV")]):t._e(),r("SerieTvComponent",{attrs:{serieTv:t.serieTv}})],1)])},f=[],g=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container-components"},t._l(t.film,(function(t){return r("div",{key:t.id,staticClass:"card slit-in-vertical"},[r("CardGeneral",{attrs:{titolo:t.title,titoloOriginale:t.original_title,lingua:t.original_language,voto:t.vote_average,poster:t.poster_path,info:t.overview,id:t.id,tipo:"movie"}})],1)})),0)},d=[],h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content-card",on:{mouseover:t.cambioValoreOver,mouseleave:t.cambioValoreLeave}},[t.active?r("div",{staticClass:"container-info"},[r("h2",[t._v(t._s(t.titolo))]),r("p",[t._v(" Titolo originale: "),r("span",{staticClass:"block"},[t._v(t._s(t.titoloOriginale))])]),r("p",[t._v(" Lingua: "),r("img",{attrs:{src:t.ricercaBandiera(t.lingua),alt:t.lingua},on:{error:t.bandieraNonTrovata}})]),r("p",[t._v(" Voto: "),r("span",[t._v(t._s(t.votoIntero))]),t._l(5,(function(e,a){return r("font-awesome-icon",{key:a,attrs:{icon:[t.inserisciStella(a),"fa-star"]}})}))],2),r("p",{staticClass:"actors"},[t._v(" Cast: "),t._l(t.arrayAttori,(function(e,a){return r("span",{key:a,staticClass:"block"},[t._v(" "+t._s(e.name)+" ")])}))],2),r("p",[t._v(" Trama: "),r("span",{staticClass:"block"},[t._v(t._s(t.info))])])]):r("div",{staticClass:"container-img"},[r("img",{staticClass:"poster",attrs:{src:t.ricercaPoster(t.poster),alt:t.titolo},on:{error:t.imgNonTrovata}})])])},b=[],_=r(669),C=r.n(_);const y="b3065838a5263bd39277864b389c35d9";var T={name:"CardGeneral",data(){return{active:!1,arrayAttori:[]}},props:{titolo:String,titoloOriginale:String,lingua:String,voto:Number,poster:String,info:String,tipo:String,id:Number},computed:{votoIntero(){return Math.ceil(this.voto/2)}},created(){const t={api_key:y,language:"it-IT"};C().get(`https://api.themoviedb.org/3/${this.tipo}/${this.id}/credits`,{params:t}).then((t=>{this.arrayAttori=t.data.cast.slice(0,5),console.log(this.arrayAttori)})).catch((t=>{console.log(t)}))},methods:{cambioValoreOver(){this.active=!0},cambioValoreLeave(){this.active=!1},ricercaPoster(t){return`https://image.tmdb.org/t/p/original/${t}`},imgNonTrovata(t){t.target.src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png"},ricercaBandiera(t){return"en"===t?"https://raw.githubusercontent.com/emcrisostomo/flags/91286fe015b4957b51bc470eca4b5fd6f5ac90da/svg/GB.svg":"ja"===t?"https://raw.githubusercontent.com/emcrisostomo/flags/91286fe015b4957b51bc470eca4b5fd6f5ac90da/svg/JP.svg":"ko"===t?"https://raw.githubusercontent.com/emcrisostomo/flags/91286fe015b4957b51bc470eca4b5fd6f5ac90da/svg/KR.svg":"da"===t?"https://raw.githubusercontent.com/emcrisostomo/flags/91286fe015b4957b51bc470eca4b5fd6f5ac90da/svg/DK.svg":"te"===t?"https://raw.githubusercontent.com/emcrisostomo/flags/91286fe015b4957b51bc470eca4b5fd6f5ac90da/svg/IN.svg":`https://raw.githubusercontent.com/emcrisostomo/flags/91286fe015b4957b51bc470eca4b5fd6f5ac90da/svg/${t.toUpperCase()}.svg`},bandieraNonTrovata(t){t.target.src="https://aeroclub-issoire.fr/wp-content/uploads/2020/05/image-not-found-300x225.jpg"},inserisciStella(t){return this.votoIntero<=t?"fa-regular":"fa-solid"}}},k=T,w=(0,u.Z)(k,h,b,!1,null,"fde9660e",null),x=w.exports,O={name:"FilmComponent",components:{CardGeneral:x},props:{film:Array}},I=O,S=(0,u.Z)(I,g,d,!1,null,"0511c3bb",null),$=S.exports,A=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container-components"},t._l(t.serieTv,(function(t){return r("div",{key:t.id,staticClass:"card"},[r("CardGeneral",{attrs:{titolo:t.name,titoloOriginale:t.original_name,lingua:t.original_language,voto:t.vote_average,poster:t.poster_path,info:t.overview,id:t.id,tipo:"tv"}})],1)})),0)},E=[],N={name:"SerieTvComponent",components:{CardGeneral:x},props:{serieTv:Array}},U=N,F=(0,u.Z)(U,A,E,!1,null,"45841e92",null),Z=F.exports,j={name:"MainComponent",props:{serieTv:Array,film:Array},components:{FilmComponent:$,SerieTvComponent:Z}},P=j,G=(0,u.Z)(P,v,f,!1,null,"79e7c2f4",null),L=G.exports,M={name:"App",components:{HeaderComponent:m,MainComponent:L},data(){return{apiUrl:"https://api.themoviedb.org/3/search/",apiKey:y,arraySerieTv:[],arrayFilm:[]}},methods:{chiamataApi(t){if(""!==t){const e={query:t,api_key:this.apiKey,language:"it-IT"};C().get(this.apiUrl+"tv",{params:e}).then((t=>{this.arraySerieTv=t.data.results})).catch((t=>{console.log(t)})),C().get(this.apiUrl+"movie",{params:e}).then((t=>{this.arrayFilm=t.data.results})).catch((t=>{console.log(t)}))}}}},V=M,K=(0,u.Z)(V,n,i,!1,null,null,null),B=K.exports,H=r(947),R=r(810),q=r(436),D=r(24);a.Z.component("font-awesome-icon",R.GN),H.vI.add(q.Tab,D.Tab),a.Z.config.productionTip=!1,new a.Z({render:t=>t(B)}).$mount("#app")},460:function(t,e,r){t.exports=r.p+"img/Logonetflix.90923731.png"}},e={};function r(a){var n=e[a];if(void 0!==n)return n.exports;var i=e[a]={exports:{}};return t[a](i,i.exports,r),i.exports}r.m=t,function(){var t=[];r.O=function(e,a,n,i){if(!a){var o=1/0;for(u=0;u<t.length;u++){a=t[u][0],n=t[u][1],i=t[u][2];for(var s=!0,c=0;c<a.length;c++)(!1&i||o>=i)&&Object.keys(r.O).every((function(t){return r.O[t](a[c])}))?a.splice(c--,1):(s=!1,i<o&&(o=i));if(s){t.splice(u--,1);var l=n();void 0!==l&&(e=l)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[a,n,i]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var a in e)r.o(e,a)&&!r.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){r.p="/vue-boolflix/"}(),function(){var t={143:0};r.O.j=function(e){return 0===t[e]};var e=function(e,a){var n,i,o=a[0],s=a[1],c=a[2],l=0;if(o.some((function(e){return 0!==t[e]}))){for(n in s)r.o(s,n)&&(r.m[n]=s[n]);if(c)var u=c(r)}for(e&&e(a);l<o.length;l++)i=o[l],r.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return r.O(u)},a=self["webpackChunkvue_boolflix"]=self["webpackChunkvue_boolflix"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=r.O(void 0,[998],(function(){return r(83)}));a=r.O(a)})();
//# sourceMappingURL=app.9fc1172c.js.map