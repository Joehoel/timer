parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"ffN9":[function(require,module,exports) {
const e=document.getElementById("timer"),t=document.querySelectorAll(".btn.time"),n=document.querySelector("#alarm"),o=document.querySelector(".start"),r=document.querySelector(".pause");let a,c=1500;const l=.05;function s(){clearInterval(a),n.pause(),i(c);const e=Date.now()+1e3*c;a=setInterval(()=>{const t=Math.round((e-Date.now())/1e3);if(i(t),c=t,t<=0)return clearInterval(a),n.volume=l,n.loop=!0,n.play(),!1},1e3)}function i(t){const n=Math.floor(t/60),o=t%60,r="".concat(n,":").concat(o>9?o:"0".concat(o));document.title=r,e.textContent=r}t.forEach(e=>e.addEventListener("click",()=>{clearInterval(a),i(c=parseInt(e.dataset.time))})),o.addEventListener("click",s),r.addEventListener("click",()=>{n.pause(),clearInterval(a)}),window.addEventListener("DOMContentLoaded",()=>{i(c)});const d="sw.js";navigator.serviceWorker.register(d).then(e=>{e.onupdatefound=(()=>{const t=e.installing;null!=t&&(t.onstatechange=(()=>{"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."):console.log("Content is cached for offline use."))}))})}).catch(e=>{console.error("Error during service worker registration:",e)});
},{}]},{},["ffN9"], null)
//# sourceMappingURL=app.9a4de128.js.map