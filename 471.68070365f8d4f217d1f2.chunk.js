(self.webpackChunkau_slickgrid_demo=self.webpackChunkau_slickgrid_demo||[]).push([[471],{2426:function(e,t){var s,r;s=function(e,t){"use strict";var s=5e3,r="callback";function i(e){try{delete window[e]}catch(t){window[e]=void 0}}function n(e){var t=document.getElementById(e);t&&document.getElementsByTagName("head")[0].removeChild(t)}t.exports=function(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],h=e,a=t.timeout||s,c=t.jsonpCallback||r,o=void 0;return new Promise((function(s,r){var u=t.jsonpCallbackFunction||"jsonp_"+Date.now()+"_"+Math.ceil(1e5*Math.random()),l=c+"_"+u;window[u]=function(e){s({ok:!0,json:function(){return Promise.resolve(e)}}),o&&clearTimeout(o),n(l),i(u)},h+=-1===h.indexOf("?")?"?":"&";var f=document.createElement("script");f.setAttribute("src",""+h+c+"="+u),t.charset&&f.setAttribute("charset",t.charset),t.nonce&&f.setAttribute("nonce",t.nonce),t.referrerPolicy&&f.setAttribute("referrerPolicy",t.referrerPolicy),t.crossorigin&&f.setAttribute("crossorigin","true"),f.id=l,document.getElementsByTagName("head")[0].appendChild(f),o=setTimeout((function(){r(new Error("JSONP request to "+e+" timed out")),i(u),n(l),window[u]=function(){i(u)}}),a),f.onerror=function(){r(new Error("JSONP request to "+e+" failed")),i(u),n(l),o&&clearTimeout(o)}}))}},void 0===(r=s.apply(t,[t,e]))||(e.exports=r)},9740:(e,t,s)=>{"use strict";s.d(t,{Pq:()=>i,xl:()=>f});var r=s(1934);function i(e,t){return JSON.stringify(void 0!==e?e:{},t)}class n{constructor(){this.cache=new Map,this.delete=e=>this.cache.delete(e),this.has=e=>this.cache.has(e),this.set=(e,t)=>this.cache.set(e,t),this.get=e=>this.cache.get(e),this.clear=()=>this.cache.clear()}}const h=r.DI.createInterface((e=>e.singleton(n)));class a{constructor(){this.baseUrl="",this.defaults={},this.interceptors=[],this.dispatcher=null,this.c=(0,r.hd)(r.p7)}withBaseUrl(e){return this.baseUrl=e,this}withDefaults(e){return this.defaults=e,this}withInterceptor(e){return this.interceptors.push(e),this}useStandardConfiguration(){return Object.assign(this.defaults,{credentials:"same-origin"},this.defaults),this.rejectErrorResponses()}rejectErrorResponses(){return this.withInterceptor({response:c})}withRetry(e){const t=this.c.invoke(S,[e]);return this.withInterceptor(t)}withDispatcher(e){return this.dispatcher=e,this}}function c(e){if(!e.ok)throw e;return e}const o=(e,...t)=>new Error(`AUR${String(e).padStart(4,"0")}:${t.map(String)}`),u=/^([a-z][a-z0-9+\-.]*:)?\/\//i,l=r.DI.createInterface("fetch",(e=>{if("function"!=typeof fetch)throw o(5e3);return e.instance(fetch)})),f=r.DI.createInterface("IHttpClient",(e=>e.aliasTo(d)));class d{constructor(){this.activeRequestCount=0,this.isRequesting=!1,this.isConfigured=!1,this.baseUrl="",this.defaults=null,this.t=[],this.i=null,this.h=(0,r.hd)((0,r.P9)(a)),this.u=(0,r.hd)(l)}get interceptors(){return this.t.slice(0)}configure(e){let t;if("object"==typeof e)t={defaults:e};else{if("function"!=typeof e)throw o(5002,typeof e);{t=this.h(),t.baseUrl=this.baseUrl,t.defaults={...this.defaults},t.interceptors=this.t,t.dispatcher=this.i;const s=e(t);if(null!=s){if("object"!=typeof s)throw o(5001,typeof s);t=s}}}const s=t.defaults;if(s?.headers instanceof Headers)throw o(5003);const r=t.interceptors;if(r?.length>0){if(r.filter((e=>e instanceof S)).length>1)throw o(5004);const e=r.findIndex((e=>e instanceof S));if(e>=0&&e!==r.length-1)throw o(5005)}return this.baseUrl=t.baseUrl,this.defaults=s,this.t=t.interceptors??[],this.i=t.dispatcher,this.isConfigured=!0,this}fetch(e,t){this.C();let s=this.buildRequest(e,t);return this.processRequest(s,this.t).then((e=>{let t;if(e instanceof Response)t=Promise.resolve(e);else{if(!(e instanceof Request))throw o(5006,e);s=e,t=this.u.call(void 0,s)}return this.processResponse(t,this.t,s)})).then((e=>e instanceof Request?this.fetch(e):e)).then((e=>(this.R(),e)),(e=>{throw this.R(),e}))}buildRequest(e,t){const s=this.defaults??{};let r,i,n;const h=function(e){const t={},s=e??{};for(const e of Object.keys(s))t[e]="function"==typeof s[e]?s[e]():s[e];return t}(s.headers);if(e instanceof Request)r=e,n=new Headers(r.headers).get("Content-Type");else{t||(t={}),i=t.body;const h=void 0!==i?{body:i}:null,a={...s,headers:{},...t,...h};n=new Headers(a.headers).get("Content-Type"),r=new Request(p(this.baseUrl,e),a)}return n||(new Headers(h).has("content-type")?r.headers.set("Content-Type",new Headers(h).get("content-type")):void 0!==i&&function(e){try{JSON.parse(e)}catch(e){return!1}return!0}(i)&&r.headers.set("Content-Type","application/json")),function(e,t){const s=t??{};for(const t of Object.keys(s))e.has(t)||e.set(t,s[t])}(r.headers,h),i instanceof Blob&&i.type&&r.headers.set("Content-Type",i.type),r}get(e,t){return this.fetch(e,t)}post(e,t,s){return this.I(e,t,s,"POST")}put(e,t,s){return this.I(e,t,s,"PUT")}patch(e,t,s){return this.I(e,t,s,"PATCH")}delete(e,t,s){return this.I(e,t,s,"DELETE")}dispose(){this.t.forEach((e=>e.dispose?.())),this.t.length=0,this.i=null}C(){this.isRequesting=!!++this.activeRequestCount,this.isRequesting&&null!=this.i&&y(this.i,b.started)}R(){this.isRequesting=!! --this.activeRequestCount,this.isRequesting||null==this.i||y(this.i,b.drained)}processRequest(e,t){return this.B(e,t,"request","requestError",Request,this)}processResponse(e,t,s){return this.B(e,t,"response","responseError",Response,s,this)}B(e,t,s,r,i,...n){return(t??[]).reduce(((e,t)=>{const h=t[s],a=t[r];return e.then(h?e=>e instanceof i?h.call(t,e,...n):e:g,a?e=>a.call(t,e,...n):m)}),Promise.resolve(e))}I(e,t,s,r){return s||(s={}),s.method=r,null!=t&&(s.body=t),this.fetch(e,s)}}function p(e,t){return u.test(t)?t:(e??"")+t}function g(e){return e}function m(e){throw e}function y(e,t){const s=new e.ownerDocument.defaultView.CustomEvent(t,{bubbles:!0,cancelable:!0});setTimeout((()=>{e.dispatchEvent(s)}),1)}const b=Object.freeze({started:"aurelia-fetch-client-request-started",drained:"aurelia-fetch-client-requests-drained"}),C=r.DI.createInterface((e=>e.singleton(R))),w=Object.freeze({Set:"au:fetch:cache:set",Get:"au:fetch:cache:get",Clear:"au:fetch:cache:clear",Reset:"au:fetch:cache:reset",Dispose:"au:fetch:cache:dispose",CacheHit:"au:fetch:cache:hit",CacheMiss:"au:fetch:cache:miss",CacheStale:"au:fetch:cache:stale",CacheStaleRefreshed:"au:fetch:cache:stale:refreshed",CacheExpired:"au:fetch:cache:expired",CacheBackgroundRefreshed:"au:fetch:cache:background:refreshed",CacheBackgroundRefreshing:"au:fetch:cache:background:refreshing",CacheBackgroundStopped:"au:fetch:cache:background:stopped"});class R{constructor(){this.storage=(0,r.hd)(h),this.p=(0,r.hd)(r.r_),this.ea=(0,r.hd)(r.xe),this.q=(0,r.hd)(f),this.H=[],this.O=-1,this.j=[],this.T=new Map}subscribe(e,t){const s=this.ea.subscribe(e,t);return this.H.push(s),s}subscribeOnce(e,t){const s=this.ea.subscribeOnce(e,t);return this.H.push(s),s}setStaleTimer(e,t,s){const r=this.p.setTimeout((async()=>{this.delete(e),await this.q.get(s);const t=this.getItem(e);this.ea.publish(w.CacheStaleRefreshed,{key:e,value:t}),this.N(r)}),t);this.j.push(r)}startBackgroundRefresh(e){!e||this.O>-1||(this.O=this.p.setInterval((()=>{this.ea.publish(w.CacheBackgroundRefreshing),this.T.forEach(((e,t)=>{this.delete(t),this.q.get(e).then((()=>{const e=this.getItem(t);this.ea.publish(w.CacheBackgroundRefreshed,{key:t,value:e})}))}))}),e))}stopBackgroundRefresh(){this.p.clearInterval(this.O),this.O=-1,this.ea.publish(w.CacheBackgroundStopped)}set(e,t,s,r){const i={data:t,...s};this.setItem(e,i,r)}get(e){return this.getItem(e)?.data}setItem(e,t,s){t.lastCached=Date.now(),this.storage.set(e,t),this.T.set(e,s),this.ea.publish(w.Set,{key:e,value:t})}getItem(e){if(!this.storage.has(e))return void this.ea.publish(w.CacheMiss,{key:e});const t=this.storage.get(e);if(!t?.staleTime||!t?.lastCached)return this.ea.publish(w.CacheHit,{key:e,value:t}),t;const s=Date.now();if(s>t.lastCached+(t.staleTime??0))this.ea.publish(w.CacheStale,{key:e,value:t});else{if(!(s>t.lastCached+(t.cacheTime??0)))return this.ea.publish(w.CacheHit,{key:e,value:t}),t;this.ea.publish(w.CacheExpired,{key:e,value:t})}}delete(e){this.storage.delete(e),this.ea.publish(w.Clear,{key:e})}clear(){this.storage.clear(),this.T.clear(),this.ea.publish(w.Reset),this.stopBackgroundRefresh(),this.j.forEach((e=>{this.p.clearTimeout(e)})),this.j.length=0}dispose(){this.clear(),this.H.forEach((e=>e.dispose())),this.ea.publish(w.Dispose)}N(e){this.p.clearTimeout(e);const t=this.j.indexOf(e);t>-1&&this.j.splice(t,1)}}const v={cacheTime:3e5,staleTime:0,refreshStaleImmediate:!1,refreshInterval:0};class k{constructor(e){this.P=(0,r.hd)(C),this.cf={...v,...e??{}}}request(e){if(this.P.startBackgroundRefresh(this.cf.refreshInterval),"GET"!==e.method)return e;const t=this.P.get(this.key(e));return this.mark(t)??e}response(e,t){if(!t)return e;if(e.headers.has(k.cacheHeader))return e;const s=this.key(t);return this.P.setItem(s,{data:e,...this.cf},t),this.cf?.refreshStaleImmediate&&this.cf.staleTime>0&&this.P.setStaleTimer(s,this.cf.staleTime,t),e}dispose(){this.P.stopBackgroundRefresh()}key(e){return`${k.prefix}${e.url}`}mark(e){return e?.headers.set(k.cacheHeader,"hit"),e}}k.prefix="au:interceptor:",k.cacheHeader="x-au-fetch-cache";class T{constructor(){this.cache=(0,r.hd)(r.r_).globalThis.indexedDB,this.getStore=()=>this.database.transaction(T.cacheName,"readwrite").objectStore(T.cacheName),this.delete=e=>{this.getStore().delete(e)},this.has=e=>this.getStore().count(e).result>0,this.set=(e,t)=>this.getStore().put(t,e),this.get=e=>this.getStore().get(e).result,this.clear=()=>{const e=this.getStore();e.getAllKeys().result.forEach((t=>{e.delete(t)}))},this.database=this.cache.open(T.cacheName).result}}T.cacheName="au-cache";const I=Object.freeze({fixed:0,incremental:1,exponential:2,random:3}),q={maxRetries:3,interval:1e3,strategy:I.fixed};class S{constructor(e){if(this.p=(0,r.hd)(r.r_),this.retryConfig={...q,...e??{}},this.retryConfig.strategy===I.exponential&&this.retryConfig.interval<=1e3)throw o(5007,this.retryConfig.interval)}request(e){return e.retryConfig||(e.retryConfig={...this.retryConfig},e.retryConfig.counter=0),e.retryConfig.requestClone=e.clone(),e}response(e,t){return delete t.retryConfig,e}responseError(e,t,s){const{retryConfig:r}=t,{requestClone:i}=r;return Promise.resolve().then((()=>{if(r.counter<r.maxRetries){const n=null==r.doRetry||r.doRetry(e,t);return Promise.resolve(n).then((n=>{if(n){r.counter++;const e=function(e){const{interval:t,strategy:s,minRandomInterval:r,maxRandomInterval:i,counter:n}=e;if("function"==typeof s)return e.strategy(n);switch(s){case I.fixed:return x[I.fixed](t);case I.incremental:return x[I.incremental](n,t);case I.exponential:return x[I.exponential](n,t);case I.random:return x[I.random](n,t,r,i);default:throw o(5008,s)}}(r);return new Promise((t=>this.p.setTimeout(t,isNaN(e)?0:e))).then((()=>{const e=i.clone();return"function"==typeof r.beforeRetry?r.beforeRetry(e,s):e})).then((e=>{const t={...e,retryConfig:r};return s.fetch(t)}))}throw delete t.retryConfig,e}))}throw delete t.retryConfig,e}))}}const x=[e=>e,(e,t)=>t*e,(e,t)=>1===e?t:t**e/1e3,(e,t,s=0,r=6e4)=>Math.random()*(r-s)+s]}}]);