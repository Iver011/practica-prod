if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const r=e=>a(e,i),u={module:{uri:i},exports:t,require:r};s[i]=Promise.all(c.map((e=>u[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"e2b1ea56f86cae2fd915a6d84c3aafd1"},{url:"/_next/static/G9KQBeCsrd8uuF3hTGNKY/_buildManifest.js",revision:"9665497c7f950aebfc9b9e5b46f20ba3"},{url:"/_next/static/G9KQBeCsrd8uuF3hTGNKY/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/173-d880552bd4698b71.js",revision:"G9KQBeCsrd8uuF3hTGNKY"},{url:"/_next/static/chunks/203.2b4c1ee4fbe3a7cf.js",revision:"2b4c1ee4fbe3a7cf"},{url:"/_next/static/chunks/218.57a830a2c55ba802.js",revision:"57a830a2c55ba802"},{url:"/_next/static/chunks/3d47b92a-a3e7b6ce54fc4abc.js",revision:"G9KQBeCsrd8uuF3hTGNKY"},{url:"/_next/static/chunks/4bd1b696-692f10ba759dfb60.js",revision:"G9KQBeCsrd8uuF3hTGNKY"},{url:"/_next/static/chunks/517-c6cb98ea217faacc.js",revision:"G9KQBeCsrd8uuF3hTGNKY"},{url:"/_next/static/chunks/527-08df3d34fdb4abc0.js",revision:"G9KQBeCsrd8uuF3hTGNKY"},{url:"/_next/static/chunks/53c13509-e12ea11d841af8fa.js",revision:"G9KQBeCsrd8uuF3hTGNKY"},{url:"/_next/static/chunks/795d4814-3e69be3f4ec0ab4f.js",revision:"G9KQBeCsrd8uuF3hTGNKY"},{url:"/_next/static/chunks/8e1d74a4-0ab083bf1ab48cf4.js",revision:"G9KQBeCsrd8uuF3hTGNKY"},{url:"/_next/static/chunks/970-55b8cfaf0715cea3.js",revision:"G9KQBeCsrd8uuF3hTGNKY"},{url:"/_next/static/chunks/app/(auth)/login/page-912aa94d298e95cd.js",revision:"G9KQBeCsrd8uuF3hTGNKY"},{url:"/_next/static/chunks/app/(auth)/register/page-fdf95b7e944d28b5.js",revision:"G9KQBeCsrd8uuF3hTGNKY"},{url:"/_next/static/chunks/app/_not-found/page-95ff7c1cdd07f804.js",revision:"G9KQBeCsrd8uuF3hTGNKY"},{url:"/_next/static/chunks/app/dashboard/layout-beb9cf5e6574b68b.js",revision:"G9KQBeCsrd8uuF3hTGNKY"},{url:"/_next/static/chunks/app/dashboard/page-8df535e904ce135d.js",revision:"G9KQBeCsrd8uuF3hTGNKY"},{url:"/_next/static/chunks/app/dashboard/reports/page-70aefd78b1009853.js",revision:"G9KQBeCsrd8uuF3hTGNKY"},{url:"/_next/static/chunks/app/dashboard/users/%5Bid%5D/page-2d93f02d0d089dc4.js",revision:"G9KQBeCsrd8uuF3hTGNKY"},{url:"/_next/static/chunks/app/dashboard/users/add/page-a27a4ead5e3ab710.js",revision:"G9KQBeCsrd8uuF3hTGNKY"},{url:"/_next/static/chunks/app/dashboard/users/page-b08c2393d733fc94.js",revision:"G9KQBeCsrd8uuF3hTGNKY"},{url:"/_next/static/chunks/app/dashboard/vehicles/%5Bid%5D/page-c032cb398ba339f5.js",revision:"G9KQBeCsrd8uuF3hTGNKY"},{url:"/_next/static/chunks/app/dashboard/vehicles/add/page-dc59194283baac6d.js",revision:"G9KQBeCsrd8uuF3hTGNKY"},{url:"/_next/static/chunks/app/dashboard/vehicles/page-d72747aacf64cd0f.js",revision:"G9KQBeCsrd8uuF3hTGNKY"},{url:"/_next/static/chunks/app/layout-df93bf4dcf15d9bf.js",revision:"G9KQBeCsrd8uuF3hTGNKY"},{url:"/_next/static/chunks/app/page-8063c956ad82cd2f.js",revision:"G9KQBeCsrd8uuF3hTGNKY"},{url:"/_next/static/chunks/app/scanner/page-6dc1abb6d6a84666.js",revision:"G9KQBeCsrd8uuF3hTGNKY"},{url:"/_next/static/chunks/e34aaff9-be0e0aad09a09458.js",revision:"G9KQBeCsrd8uuF3hTGNKY"},{url:"/_next/static/chunks/framework-6b27c2b7aa38af2d.js",revision:"G9KQBeCsrd8uuF3hTGNKY"},{url:"/_next/static/chunks/main-3ad239f1623b19f4.js",revision:"G9KQBeCsrd8uuF3hTGNKY"},{url:"/_next/static/chunks/main-app-83877118d70c52d3.js",revision:"G9KQBeCsrd8uuF3hTGNKY"},{url:"/_next/static/chunks/pages/_app-430fec730128923e.js",revision:"G9KQBeCsrd8uuF3hTGNKY"},{url:"/_next/static/chunks/pages/_error-2d7241423c4a35ba.js",revision:"G9KQBeCsrd8uuF3hTGNKY"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-b33c367e7a15ec15.js",revision:"G9KQBeCsrd8uuF3hTGNKY"},{url:"/_next/static/css/220c3169c75cb5ab.css",revision:"220c3169c75cb5ab"},{url:"/_next/static/css/26fe83bd22518019.css",revision:"26fe83bd22518019"},{url:"/_next/static/css/35c24733f52fb82b.css",revision:"35c24733f52fb82b"},{url:"/_next/static/css/490b2cb41684d0fb.css",revision:"490b2cb41684d0fb"},{url:"/_next/static/css/4b8bb06df7aa54e0.css",revision:"4b8bb06df7aa54e0"},{url:"/_next/static/css/7ec993c5c308c63a.css",revision:"7ec993c5c308c63a"},{url:"/_next/static/css/8bfb4c18ac0f46ed.css",revision:"8bfb4c18ac0f46ed"},{url:"/_next/static/css/a8a1594f824bd32d.css",revision:"a8a1594f824bd32d"},{url:"/_next/static/css/d241dfc6eb0ff28a.css",revision:"d241dfc6eb0ff28a"},{url:"/_next/static/css/e9ef44aaaa3cec91.css",revision:"e9ef44aaaa3cec91"},{url:"/_next/static/media/569ce4b8f30dc480-s.p.woff2",revision:"ef6cefb32024deac234e82f932a95cbd"},{url:"/_next/static/media/747892c23ea88013-s.woff2",revision:"a0761690ccf4441ace5cec893b82d4ab"},{url:"/_next/static/media/93f479601ee12b01-s.p.woff2",revision:"da83d5f06d825c5ae65b7cca706cb312"},{url:"/_next/static/media/ba015fad6dcf6784-s.woff2",revision:"8ea4f719af3312a055caf09f34c89a77"},{url:"/file.svg",revision:"d09f95206c3fa0bb9bd9fefabfd0ea71"},{url:"/fondo2.jpg",revision:"333b46ee64390062f783a3886f52f8bd"},{url:"/globe.svg",revision:"2aaafa6a49b6563925fe440891e32717"},{url:"/icons/android-launchericon-192-192.png",revision:"bb48893151f12723066287cb5d49045c"},{url:"/icons/android-launchericon-512-512.png",revision:"b9d1aa32e09c69fc565892c3daffbd34"},{url:"/img1.svg",revision:"29c0c021bd609ae397d2c79b10266911"},{url:"/img2.svg",revision:"b435357da26e259991c2e05cc999f1c2"},{url:"/manifest.json",revision:"44f7b4ac1fc17b4de21b18b84c7812fc"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"c0af2f507b369b085b35ef4bbe3bcf1e"},{url:"/window.svg",revision:"a2760511c65806022ad20adf74370ff3"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
