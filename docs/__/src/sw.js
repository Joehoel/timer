parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"kAD8":[function(require,module,exports) {
function e(e,n,t,r,c,u,o){try{var s=e[u](o),i=s.value}catch(a){return void t(a)}s.done?n(i):Promise.resolve(i).then(r,c)}function n(n){return function(){var t=this,r=arguments;return new Promise(function(c,u){var o=n.apply(t,r);function s(n){e(o,c,u,s,i,"next",n)}function i(n){e(o,c,u,s,i,"throw",n)}s(void 0)})}}var t="V2";self.addEventListener("install",n(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,caches.open(t);case 2:e.sent.addAll(["../public/index.html","../public/styles.css","./app.js"]);case 4:case"end":return e.stop()}},e)}))),self.addEventListener("fetch",function(e){e.respondWith(caches.match(e.request).then(function(n){return n||fetch(e.request).then(function(n){return caches.open(t).then(function(t){return t.put(e.request.url,n.clone()),n})})}).catch(function(n){fetch(e.request).then(function(n){return caches.open(t).then(function(t){return t.put(e.request.url,n.clone()),n})})}))});
},{}]},{},["kAD8"], null)
//# sourceMappingURL=/__/src/sw.js.map