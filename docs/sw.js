if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return c[e]||(a=new Promise((async a=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=a}else importScripts(e),a()}))),a.then((()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]}))},a=(a,c)=>{Promise.all(a.map(e)).then((e=>c(1===e.length?e[0]:e)))},c={require:Promise.resolve(a)};self.define=(a,s,f)=>{c[a]||(c[a]=Promise.resolve().then((()=>{let c={};const d={uri:location.origin+a.slice(1)};return Promise.all(s.map((a=>{switch(a){case"exports":return c;case"module":return d;default:return e(a)}}))).then((e=>{const a=f(...e);return c.default||(c.default=a),c}))})))}}define("./sw.js",["./workbox-7c877640"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"__/manifest.webmanifest",revision:"8aacc5c31f7d68e2cb0b6933e817f080"},{url:"__/src/sw.js",revision:"acd8d0cb63724f80f52229e52a8eaea7"},{url:"__/src/sw.js.map",revision:"4ec445f3bcfacd0e95c79e270ba96465"},{url:"app.1f152269.js",revision:"78bcbdc634dcbde27cf74adb74626e99"},{url:"app.1f152269.js.map",revision:"6e4da9abd2a0aa2e496ab863816902ac"},{url:"app.3ffde765.js",revision:"14d061425e72f0fbe55d0dd9a54f9a8e"},{url:"app.3ffde765.js.map",revision:"91ec479a0537266c5fc3621176b25a19"},{url:"app.483319d1.js",revision:"29298748f78027189ff8de65b3d155c1"},{url:"app.483319d1.js.map",revision:"e63a58239e57ed3648da57c348aa1846"},{url:"app.588b559e.js",revision:"85c415f9abc4fa7428219707e4e987dd"},{url:"app.588b559e.js.map",revision:"e7eba036b25e71fe49de624a903cfed0"},{url:"app.6df874d7.js",revision:"c8ed33897c581bc2d6cb3533efff027a"},{url:"app.6df874d7.js.map",revision:"670d22d3cb9d2fca70422a50f0a892ea"},{url:"app.7ee29cdd.js",revision:"470e37081c297769da3af09bd386340b"},{url:"app.7ee29cdd.js.map",revision:"9b99cba15b113f0302fd90a1481ead68"},{url:"app.909387f2.js",revision:"15ec1207d8e9f0b6c4a68edd1e29d150"},{url:"app.909387f2.js.map",revision:"5e68c1bbbca4c6ce6226a8d111f6fd30"},{url:"app.992f38f2.js",revision:"4b9f08de7028636b5779bfe097936de6"},{url:"app.992f38f2.js.map",revision:"97485a2d8ab774316e5359a505197169"},{url:"app.9a4de128.js",revision:"720792cc0a78c5c1257678a41c106f98"},{url:"app.9a4de128.js.map",revision:"19708170483e4595037eaebba6a63c75"},{url:"app.ac2aec56.js",revision:"a2db5b5837fd27c6debcdb047809fdc1"},{url:"app.ac2aec56.js.map",revision:"d5e223014f8e28d39d585a7fe7995a45"},{url:"app.faaae4c3.js",revision:"8318bb8287ff2776600e7164117db751"},{url:"app.faaae4c3.js.map",revision:"b7abf95f7747bdade677dec4d3f8f07d"},{url:"apple-icon-180.bc4fb030.png",revision:"1afec7cc98cf35df9ec7069ba3d2d35b"},{url:"apple-splash-1125-2436.378471f4.jpg",revision:"f6ff4083647c819d71de50aeb20f3c46"},{url:"apple-splash-1136-640.6356c57a.jpg",revision:"6388aebdd1b429fc661468b16fd3b932"},{url:"apple-splash-1170-2532.94b9c25b.jpg",revision:"7d600eedbb82eccde3c8b987cf060fc8"},{url:"apple-splash-1242-2208.540813ec.jpg",revision:"adad0a4ebb9ad72ad5321bf60e0dd813"},{url:"apple-splash-1242-2688.1ca40247.jpg",revision:"dbecd0d000f2a8f56662dc2d08ffebbc"},{url:"apple-splash-1284-2778.21cc47dd.jpg",revision:"f25d4989e2d2ef74044bd8ad15ae98c2"},{url:"apple-splash-1334-750.b81cfc91.jpg",revision:"489da022bed2983616c333f35e8167ff"},{url:"apple-splash-1536-2048.62f875cd.jpg",revision:"3a973a54b490cd891a89151551940c71"},{url:"apple-splash-1620-2160.acb02f79.jpg",revision:"22f9673251907b74c8caa5157f69950b"},{url:"apple-splash-1668-2224.c3693062.jpg",revision:"c4a9fe3e5feb01262ff2de2f53f24249"},{url:"apple-splash-1668-2388.d7d5e013.jpg",revision:"98fe6a240092fa7df622e93b35d5fc80"},{url:"apple-splash-1792-828.ad6e44cc.jpg",revision:"220270ebd2c08c95ba2547485e26ac7d"},{url:"apple-splash-2048-1536.cf208c0a.jpg",revision:"783ef2e497d9a6eb5853eabadaf419f7"},{url:"apple-splash-2048-2732.ca2d3cce.jpg",revision:"2facf1fc77001930a9f8f27e833b0f0e"},{url:"apple-splash-2160-1620.1f3312c9.jpg",revision:"0c66b97cef0441974ff52037d7e118d0"},{url:"apple-splash-2208-1242.3a685fe7.jpg",revision:"e2df57a8a11e45620a59bf99d0802d4f"},{url:"apple-splash-2224-1668.1261331d.jpg",revision:"ac65520d02f693a4b8d30c40e04fac05"},{url:"apple-splash-2388-1668.ce19e607.jpg",revision:"c61760c752362942874775ffacdaf7f0"},{url:"apple-splash-2436-1125.ef54d04b.jpg",revision:"fb5c2736c30aa0c6c7191071bfb6d742"},{url:"apple-splash-2532-1170.d4a3704f.jpg",revision:"bb254065ee8fe2f7daefc6f590918281"},{url:"apple-splash-2688-1242.2f2d512b.jpg",revision:"31b0fe3b0a41d306d4ad3c10b23f806f"},{url:"apple-splash-2732-2048.6ac29783.jpg",revision:"971a77e7ba126506eb266bdccb88a9e7"},{url:"apple-splash-2778-1284.760d4844.jpg",revision:"6ad0681ebf7fd7d94c6a25aaf44fb601"},{url:"apple-splash-640-1136.c7b73bd3.jpg",revision:"493204e3e29091cd2006e0f7a0986fa6"},{url:"apple-splash-750-1334.4ca155e1.jpg",revision:"4514ffb042af3a5fccae6ae7c1551b26"},{url:"apple-splash-828-1792.a6387e56.jpg",revision:"11f9ebe90e7678b56e90ca9360603c0a"},{url:"icon-128x128.72c51d9a.png",revision:"d80c65a5791342ebd7ee50b2c9a397dd"},{url:"icon-144x144.35a4a36c.png",revision:"6f2688976c0f3ead2c266c13cc7727d3"},{url:"icon-152x152.2e747a11.png",revision:"7b13b54fa443730a7f6990c6c59f0bf6"},{url:"icon-192x192.b855fd38.png",revision:"99e2a3e159e1b9a7e4c6cf660eaeb380"},{url:"icon-256x256.88e90dac.png",revision:"86778c2c76fe8667ff785adc4f4f21c8"},{url:"icon-384x384.3fc56338.png",revision:"6c455d36af4c842d8be9a34d515a78e0"},{url:"icon-512x512.a75ce1eb.png",revision:"d593c4dd8bff590322e4ebf2a5572ac4"},{url:"icon-72x72.c946a731.png",revision:"331d2e1d0890147899d01faee0e6df6f"},{url:"icon-96x96.6b2cfb7f.png",revision:"175b253ebfb03910a173607bc0135df7"},{url:"index.html",revision:"a59ae07927d6c495ad60d5bee81f88bf"},{url:"manifest-icon-192.989f37fa.png",revision:"577615bb584163683b07eb31e9fe8b1a"},{url:"manifest-icon-512.76f05e97.png",revision:"95a98925acae2a306014ad69f9f3bf38"},{url:"manifest.webmanifest",revision:"8aacc5c31f7d68e2cb0b6933e817f080"},{url:"site.webmanifest",revision:"5d47c65de688ff463e3ee43928cab519"},{url:"src/sw.js",revision:"f2f84dbb1d80e9c9f703292c6b99c135"},{url:"src/sw.js.map",revision:"09c0db62707ef9d9d84873d778ed51b8"},{url:"styles.1a07eb77.css",revision:"8dc64e63e9000712ae5bf745e75f9dc3"},{url:"styles.1a07eb77.css.map",revision:"5e3dc15ba8d2817f54cc98df1970fb17"},{url:"styles.2c9ebfbf.css",revision:"ec2331e1ea8eb4c65efb7d36b3f3a01a"},{url:"styles.2c9ebfbf.css.map",revision:"bc83a926b5db5be16c35c2cfc0393b16"},{url:"styles.896c8697.css",revision:"5a4cba07564c02f490a7a614e467024d"},{url:"styles.896c8697.css.map",revision:"935e677664b11ec178b7b27dcda19692"},{url:"styles.8e781296.css",revision:"733eaa9c8a418f279f5ca499ed04bfa8"},{url:"styles.8e781296.css.map",revision:"72d2f41a9c9741ac97445d776aebf1ab"},{url:"styles.a46fedaa.css",revision:"c35da0e0be90ee02ae0c02bb219c4af9"},{url:"styles.a46fedaa.css.map",revision:"d9cedbacad5bb4c47d4f2e63d5c076b1"},{url:"sw.js.map",revision:"3d3cae13687cb9a9a52c607a7c870995"},{url:"workbox-88e3eac9.js.map",revision:"7c9e1f720e4091ddfabc3969c9741945"}],{})}));
//# sourceMappingURL=sw.js.map
