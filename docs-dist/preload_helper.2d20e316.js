!function(){"use strict";var t="/".replace(/([^/])$/,"$1/"),e=location.pathname,n=e.startsWith(t)&&decodeURI("/".concat(e.slice(t.length)));if(n){var a=document,c=a.head,r=a.createElement.bind(a),i=function(t,e,n){var a,c=e.r[t]||(null===(a=Object.entries(e.r).find((function(e){var n=e[0];return new RegExp("^".concat(n.replace(/\/:[^/]+/g,"/[^/]+").replace("/*","/.+"),"$")).test(t)})))||void 0===a?void 0:a[1]);return null==c?void 0:c.map((function(t){var a=e.f[t][1],c=e.f[t][0];return{type:c.split(".").pop(),url:"".concat(n.publicPath).concat(c),attrs:[["data-".concat(e.b),"".concat(e.p,":").concat(a)]]}}))}(n,{"p":"hro-ui","b":"webpack","f":[["nm__dumi__dist__client__pages__Demo__index.578aa5c0.chunk.css",9],["nm__dumi__dist__client__pages__Demo__index.f5c34d72.async.js",9],["nm__dumi__dist__client__pages__404.8b85f2d9.chunk.css",65],["nm__dumi__dist__client__pages__404.33fc9c46.async.js",65],["Foo__index.md.dced7882.async.js",81],["Test__index.md.4de8f11d.async.js",191],["469.616fa408.async.js",469],["nm__dumi__theme-default__layouts__DocLayout__index.c831496e.async.js",519],["Button__index.md.2302d8a3.async.js",544],["574.e8c51481.chunk.css",574],["574.e107c42c.async.js",574],["dumi__tmp-production__dumi__theme__ContextWrapper.3028572c.async.js",923],["docs__index.md.ec46d5cf.async.js",935]],"r":{"/*":[2,3,7,9,10,6,11],"/":[12,7,9,10,6,11],"/~demos/:id":[0,1,6,11],"/components/button":[8,7,9,10,6,11],"/components/foo":[4,7,9,10,6,11],"/components/test":[5,7,9,10,6,11]}},{publicPath:"/"});null==i||i.forEach((function(t){var e,n=t.type,a=t.url;if("js"===n)(e=r("script")).src=a,e.async=!0;else{if("css"!==n)return;(e=r("link")).href=a,e.rel="preload",e.as="style"}t.attrs.forEach((function(t){e.setAttribute(t[0],t[1]||"")})),c.appendChild(e)}))}}();