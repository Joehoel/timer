parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"ffN9":[function(require,module,exports) {
function e(e,t,n,r,o,a,c){try{var i=e[a](c),u=i.value}catch(s){return void n(s)}i.done?t(u):Promise.resolve(u).then(r,o)}function t(t){return function(){var n=this,r=arguments;return new Promise(function(o,a){var c=t.apply(n,r);function i(t){e(c,o,a,i,u,"next",t)}function u(t){e(c,o,a,i,u,"throw",t)}i(void 0)})}}var n,r=document.getElementById("timer"),o=document.querySelectorAll("[data-time]"),a=document.querySelector("#alarm"),c=.05;function i(e){clearInterval(n),a.pause(),u(e);var t=Date.now()+1e3*e;n=setInterval(function(){var e=Math.round((t-Date.now())/1e3);if(u(e),e<=0)return clearInterval(n),r.textContent="Reset",a.volume=c,a.loop=!0,a.play(),!1},1e3)}function u(e){var t=Math.floor(e/60),n=e%60,o="".concat(t,":").concat(n>9?n:"0".concat(n));document.title=o,r.textContent=o}function s(){return l.apply(this,arguments)}function l(){return(l=t(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!("serviceWorker"in navigator)){e.next=10;break}return e.prev=1,e.next=4,navigator.serviceWorker.register("__\src\sw.js");case 4:e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.error("Failed to register service worker: ".concat(e.t0));case 10:case"end":return e.stop()}},e,null,[[1,7]])}))).apply(this,arguments)}o.forEach(function(e){return e.addEventListener("click",function(){i(60*e.dataset.time)})}),window.addEventListener("load",function(){u(60*r.dataset.time),s()});
},{"./sw.js":[["__\\src\\sw.js","kAD8"],"__\\src\\sw.js.map","kAD8"]}]},{},["ffN9"], null)
//# sourceMappingURL=app.1f152269.js.map