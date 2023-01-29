(()=>{"use strict";var n={28:(n,e,t)=>{t.d(e,{Z:()=>g});var o=t(537),r=t.n(o),i=t(645),a=t.n(i),c=t(667),s=t.n(c),A=new URL(t(727),t.b),l=new URL(t(329),t.b),d=a()(r());d.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Montserrat&display=swap);"]);var u=s()(A),p=s()(l);d.push([n.id,'body {\n    background-color: rgba(255, 255, 255, 0.5);\n    height: 100vh;\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    color: white;\n    font-family: "Montserrat", sans-serif;\n}\n\n.background {\n    height: 100%;\n    width: 100%;\n    background-image: url('+u+");\n    background-size: cover;\n    position: absolute;\n    z-index: -1;\n    filter: brightness(60%);\n}\n\nbody img {\n}\n\nsvg {\n    height: 30px;\n    width: 30px;\n}\n\n.top {\n    display: flex;\n    justify-content: space-between;\n}\n\n.overview {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    padding: 40px;\n}\n\n.overview svg {\n    height: 70px;\n    width: 70px;\n}\n\n.title {\n    font-size: 2.25em;\n}\n\n.location {\n    font-size: 1.5em;\n}\n\n.date {\n    font-size: 0.8em;\n}\n\n.temperatureContainer {\n    display: flex;\n    gap: 20px;\n    align-items: center;\n}\n\n.temperature {\n    font-weight: 800;\n    font-size: 2.5em;\n}\n\n.search {\n    display: flex;\n    gap: 8px;\n    align-items: center;\n}\n\n.searchButton {\n    background-image: url("+p+');\n    height: 30px;\n    width: 30px;\n    background-size: cover;\n    cursor: pointer;\n}\n\n.searchbar {\n\n}\n\n/* Search Input */\n\ninput[type="search"] {\n    /* Box-sizing to include padding and border */\n    box-sizing: border-box;\n    /* Remove default styling */\n    border: none;\n    /* Add a slight transparency */\n    background: rgba(255, 255, 255, 0.5);\n    /* Add some padding */\n    padding: 10px;\n    /* Add a border radius for a rounded look */\n    border-radius: 20px;\n    /* Add a font size */\n    font-size: 16px;\n    /* Add a transition for hover effect */\n    transition: background 0.3s ease;\n  }\n  \n  /* Input Focus */\n  input[type="search"]:focus {\n    /* Add a darker background on focus */\n    background: rgba(255, 255, 255, 0.8);\n    /* Add a box-shadow */\n    box-shadow: 0 0 5px #fff;\n  }\n  \n\n.indicators {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    padding: 40px;\n}\n\n.weatherDetails {\n    display: flex;\n    gap: 15px;\n    align-items: center;\n}\n\n.weatherInfoLabel {\n    font-size: 1.25em;\n    font-weight: 800;\n}\n\n.bottom {\n    padding: 40px;\n}\n\n.singleData {\n    margin-top: 20px;\n    display: flex;\n    gap: 20px;\n    justify-content: space-around;\n}\n\n.weekDay {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n\n.weekDayTitle {\n    font-size: 1.25em;\n}\n\n.temperatureHigh {\n    font-size: 1.25em;\n    font-weight: 600;\n}\n\n.buttons {\n    display: flex;\n    gap: 20px;\n    align-items: center;\n}\n\n.buttons button {\n    height: 40px;\n}\n\n.buttons svg {\n    cursor: pointer;\n}\n\n.change-hours {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    height: 20px;\n}\n\n.dot {\n    position: relative;\n    top: -1px;\n    height: 7px;\n    width: 7px;\n    background-color: rgba(0,0,0,0);\n    border: 1px solid #f5f5f5;\n    border-radius: 50%;\n    cursor: pointer;\n}\n\n.dot-selected {\n    background-color: #f5f5f5;\n}\n\n\n/*button {\n    border-radius: 5px;\n    border: 0;\n    background-color: 0 0 0 rgba(0,0,0,0.125);\n    padding: 6px;\n    cursor: pointer;\n}*/\n\nbutton {\n    background-color: rgba(255, 255, 255, 0.1); /* This sets the background color to white with 10% opacity */\n    border: none; \n    color: white; \n    padding: 8px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block; \n    font-size: 14px;\n    cursor: pointer;\n    border-radius: 8px;\n}',"",{version:3,sources:["webpack://./src/styles.css"],names:[],mappings:"AAEA;IACI,0CAA0C;IAC1C,aAAa;IACb,SAAS;IACT,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,YAAY;IACZ,qCAAqC;AACzC;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,yDAAgD;IAChD,sBAAsB;IACtB,kBAAkB;IAClB,WAAW;IACX,uBAAuB;AAC3B;;AAEA;AACA;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,SAAS;IACT,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,QAAQ;IACR,mBAAmB;AACvB;;AAEA;IACI,yDAAgD;IAChD,YAAY;IACZ,WAAW;IACX,sBAAsB;IACtB,eAAe;AACnB;;AAEA;;AAEA;;AAEA,iBAAiB;;AAEjB;IACI,6CAA6C;IAC7C,sBAAsB;IACtB,2BAA2B;IAC3B,YAAY;IACZ,8BAA8B;IAC9B,oCAAoC;IACpC,qBAAqB;IACrB,aAAa;IACb,2CAA2C;IAC3C,mBAAmB;IACnB,oBAAoB;IACpB,eAAe;IACf,sCAAsC;IACtC,gCAAgC;EAClC;;EAEA,gBAAgB;EAChB;IACE,qCAAqC;IACrC,oCAAoC;IACpC,qBAAqB;IACrB,wBAAwB;EAC1B;;;AAGF;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,SAAS;IACT,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,SAAS;IACT,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,SAAS;IACT,mBAAmB;AACvB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,QAAQ;IACR,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,WAAW;IACX,UAAU;IACV,+BAA+B;IAC/B,yBAAyB;IACzB,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,yBAAyB;AAC7B;;;AAGA;;;;;;EAME;;AAEF;IACI,0CAA0C,EAAE,6DAA6D;IACzG,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,qBAAqB;IACrB,qBAAqB;IACrB,eAAe;IACf,eAAe;IACf,kBAAkB;AACtB",sourcesContent:['@import url(\'https://fonts.googleapis.com/css2?family=Montserrat&display=swap\');\n\nbody {\n    background-color: rgba(255, 255, 255, 0.5);\n    height: 100vh;\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    color: white;\n    font-family: "Montserrat", sans-serif;\n}\n\n.background {\n    height: 100%;\n    width: 100%;\n    background-image: url("./static/background.png");\n    background-size: cover;\n    position: absolute;\n    z-index: -1;\n    filter: brightness(60%);\n}\n\nbody img {\n}\n\nsvg {\n    height: 30px;\n    width: 30px;\n}\n\n.top {\n    display: flex;\n    justify-content: space-between;\n}\n\n.overview {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    padding: 40px;\n}\n\n.overview svg {\n    height: 70px;\n    width: 70px;\n}\n\n.title {\n    font-size: 2.25em;\n}\n\n.location {\n    font-size: 1.5em;\n}\n\n.date {\n    font-size: 0.8em;\n}\n\n.temperatureContainer {\n    display: flex;\n    gap: 20px;\n    align-items: center;\n}\n\n.temperature {\n    font-weight: 800;\n    font-size: 2.5em;\n}\n\n.search {\n    display: flex;\n    gap: 8px;\n    align-items: center;\n}\n\n.searchButton {\n    background-image: url("./static/searchIcon.png");\n    height: 30px;\n    width: 30px;\n    background-size: cover;\n    cursor: pointer;\n}\n\n.searchbar {\n\n}\n\n/* Search Input */\n\ninput[type="search"] {\n    /* Box-sizing to include padding and border */\n    box-sizing: border-box;\n    /* Remove default styling */\n    border: none;\n    /* Add a slight transparency */\n    background: rgba(255, 255, 255, 0.5);\n    /* Add some padding */\n    padding: 10px;\n    /* Add a border radius for a rounded look */\n    border-radius: 20px;\n    /* Add a font size */\n    font-size: 16px;\n    /* Add a transition for hover effect */\n    transition: background 0.3s ease;\n  }\n  \n  /* Input Focus */\n  input[type="search"]:focus {\n    /* Add a darker background on focus */\n    background: rgba(255, 255, 255, 0.8);\n    /* Add a box-shadow */\n    box-shadow: 0 0 5px #fff;\n  }\n  \n\n.indicators {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    padding: 40px;\n}\n\n.weatherDetails {\n    display: flex;\n    gap: 15px;\n    align-items: center;\n}\n\n.weatherInfoLabel {\n    font-size: 1.25em;\n    font-weight: 800;\n}\n\n.bottom {\n    padding: 40px;\n}\n\n.singleData {\n    margin-top: 20px;\n    display: flex;\n    gap: 20px;\n    justify-content: space-around;\n}\n\n.weekDay {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n\n.weekDayTitle {\n    font-size: 1.25em;\n}\n\n.temperatureHigh {\n    font-size: 1.25em;\n    font-weight: 600;\n}\n\n.buttons {\n    display: flex;\n    gap: 20px;\n    align-items: center;\n}\n\n.buttons button {\n    height: 40px;\n}\n\n.buttons svg {\n    cursor: pointer;\n}\n\n.change-hours {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    height: 20px;\n}\n\n.dot {\n    position: relative;\n    top: -1px;\n    height: 7px;\n    width: 7px;\n    background-color: rgba(0,0,0,0);\n    border: 1px solid #f5f5f5;\n    border-radius: 50%;\n    cursor: pointer;\n}\n\n.dot-selected {\n    background-color: #f5f5f5;\n}\n\n\n/*button {\n    border-radius: 5px;\n    border: 0;\n    background-color: 0 0 0 rgba(0,0,0,0.125);\n    padding: 6px;\n    cursor: pointer;\n}*/\n\nbutton {\n    background-color: rgba(255, 255, 255, 0.1); /* This sets the background color to white with 10% opacity */\n    border: none; \n    color: white; \n    padding: 8px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block; \n    font-size: 14px;\n    cursor: pointer;\n    border-radius: 8px;\n}'],sourceRoot:""}]);const g=d},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var A=0;A<n.length;A++){var l=[].concat(n[A]);o&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},537:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),i="/*# ".concat(r," */");return[e].concat([i]).join("\n")}return[e].join("\n")}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],A=o.base?s[0]+o.base:s[0],l=i[A]||0,d="".concat(A," ").concat(l);i[A]=l+1;var u=t(d),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(p);else{var g=r(p,o);o.byIndex=c,e.splice(c,0,{identifier:d,updater:g,references:1})}a.push(d)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var s=o(n,r),A=0;A<i.length;A++){var l=t(i[A]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=s}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},727:(n,e,t)=>{n.exports=t.p+"aefc1508ddc3d6dd3d23.png"},329:(n,e,t)=>{n.exports=t.p+"7d7db6af60e36836a473.png"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");o.length&&(n=o[o.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),r=t.n(o),i=t(569),a=t.n(i),c=t(565),s=t.n(c),A=t(216),l=t.n(A),d=t(589),u=t.n(d),p=t(28),g={};function f(n){return"01d"===n?'<svg xmlns="http://www.w3.org/2000/svg" version="1.1" fill="#f5f5f5" viewBox="3 3 26 26">\n        <title>sun</title>\n        <path d="M16 9c-3.859 0-7 3.141-7 7s3.141 7 7 7 7-3.141 7-7c0-3.859-3.141-7-7-7zM16 21c-2.762 0-5-2.238-5-5s2.238-5 5-5 5 2.238 5 5-2.238 5-5 5zM16 7c0.552 0 1-0.448 1-1v-2c0-0.552-0.448-1-1-1s-1 0.448-1 1v2c0 0.552 0.448 1 1 1zM16 25c-0.552 0-1 0.448-1 1v2c0 0.552 0.448 1 1 1s1-0.448 1-1v-2c0-0.552-0.448-1-1-1zM23.777 9.635l1.414-1.414c0.391-0.391 0.391-1.023 0-1.414s-1.023-0.391-1.414 0l-1.414 1.414c-0.391 0.391-0.391 1.023 0 1.414s1.023 0.391 1.414 0zM8.223 22.365l-1.414 1.414c-0.391 0.391-0.391 1.023 0 1.414s1.023 0.391 1.414 0l1.414-1.414c0.391-0.392 0.391-1.023 0-1.414s-1.023-0.392-1.414 0zM7 16c0-0.552-0.448-1-1-1h-2c-0.552 0-1 0.448-1 1s0.448 1 1 1h2c0.552 0 1-0.448 1-1zM28 15h-2c-0.552 0-1 0.448-1 1s0.448 1 1 1h2c0.552 0 1-0.448 1-1s-0.448-1-1-1zM8.221 9.635c0.391 0.391 1.024 0.391 1.414 0s0.391-1.023 0-1.414l-1.414-1.414c-0.391-0.391-1.023-0.391-1.414 0s-0.391 1.023 0 1.414l1.414 1.414zM23.779 22.363c-0.392-0.391-1.023-0.391-1.414 0s-0.392 1.023 0 1.414l1.414 1.414c0.391 0.391 1.023 0.391 1.414 0s0.391-1.023 0-1.414l-1.414-1.414z"/>\n        </svg>':"01n"===n?'<svg xmlns="http://www.w3.org/2000/svg" version="1.1" fill="#f5f5f5" viewBox="8.21 8.21 15.57 15.57">\n        <title>moon</title>\n        <path d="M21.866 21.447c-3.117 3.12-8.193 3.12-11.313 0s-3.12-8.195 0-11.314c0.826-0.824 1.832-1.453 2.989-1.863 0.365-0.128 0.768-0.035 1.039 0.237 0.274 0.273 0.366 0.677 0.237 1.039-0.784 2.211-0.25 4.604 1.391 6.245 1.638 1.639 4.031 2.172 6.245 1.391 0.362-0.129 0.767-0.036 1.039 0.237 0.273 0.271 0.365 0.676 0.236 1.039-0.408 1.157-1.038 2.164-1.863 2.989zM11.967 11.547c-2.34 2.34-2.34 6.147 0 8.486 2.5 2.501 6.758 2.276 8.937-0.51-2.247 0.141-4.461-0.671-6.109-2.318s-2.458-3.861-2.318-6.108c-0.18 0.141-0.35 0.29-0.51 0.451z"/>\n        </svg>':"02d"===n?'<svg xmlns="http://www.w3.org/2000/svg" version="1.1" fill="#f5f5f5" viewBox="0 0 32 32">\n        <title>cloudy-day</title>\n        <path d="M13 4c0.552 0 1-0.448 1-1v-2c0-0.552-0.448-1-1-1s-1 0.448-1 1v2c0 0.552 0.448 1 1 1zM20.777 6.635l1.414-1.414c0.391-0.391 0.391-1.023 0-1.414s-1.023-0.391-1.414 0l-1.414 1.414c-0.391 0.391-0.391 1.023 0 1.414s1.023 0.391 1.414 0zM1 14h2c0.552 0 1-0.448 1-1s-0.448-1-1-1h-2c-0.552 0-1 0.448-1 1s0.448 1 1 1zM22 13c0 0.552 0.448 1 1 1h2c0.552 0 1-0.448 1-1s-0.448-1-1-1h-2c-0.552 0-1 0.448-1 1zM5.221 6.635c0.391 0.391 1.024 0.391 1.414 0s0.391-1.023 0-1.414l-1.414-1.414c-0.391-0.391-1.023-0.391-1.414 0s-0.391 1.023 0 1.414l1.414 1.414zM25 16c-0.332 0-0.66 0.023-0.987 0.070-1.048-1.43-2.445-2.521-4.029-3.219-0.081-3.789-3.176-6.852-6.984-6.852-3.859 0-7 3.141-7 7 0 1.090 0.271 2.109 0.719 3.027-3.727 0.152-6.719 3.211-6.719 6.973 0 3.859 3.141 7 7 7 0.856 0 1.693-0.156 2.482-0.458 1.81 1.578 4.112 2.458 6.518 2.458 2.409 0 4.708-0.88 6.518-2.458 0.789 0.302 1.626 0.458 2.482 0.458 3.859 0 7-3.141 7-7s-3.141-7-7-7zM13 8c2.488 0 4.535 1.823 4.919 4.203-0.626-0.125-1.266-0.203-1.919-0.203-2.871 0-5.531 1.238-7.398 3.328-0.371-0.698-0.602-1.482-0.602-2.328 0-2.762 2.238-5 5-5zM25 28c-1.070 0-2.057-0.344-2.871-0.917-1.467 1.768-3.652 2.917-6.129 2.917s-4.662-1.148-6.129-2.917c-0.813 0.573-1.801 0.917-2.871 0.917-2.762 0-5-2.238-5-5s2.238-5 5-5c0.484 0 0.941 0.091 1.383 0.221 0.176 0.049 0.354 0.089 0.52 0.158 0.273-0.535 0.617-1.025 0.999-1.484 1.461-1.758 3.634-2.895 6.099-2.895 0.633 0 1.24 0.091 1.828 0.232 0.66 0.156 1.284 0.393 1.865 0.706 1.456 0.773 2.651 1.971 3.404 3.441 0.587-0.242 1.229-0.379 1.904-0.379 2.762 0 5 2.238 5 5s-2.238 5-5 5z"/>\n        </svg>':"02n"===n?'<svg xmlns="http://www.w3.org/2000/svg" version="1.1" fill="#f5f5f5" viewBox="0 2.42 32 29.57">\n        <title>cloudy-night</title>\n        <path d="M27.191 16.385c0.305-0.227 0.613-0.449 0.889-0.725 0.826-0.827 1.454-1.833 1.862-2.991 0.13-0.362 0.038-0.768-0.236-1.039-0.272-0.273-0.676-0.366-1.039-0.237-2.212 0.781-4.605 0.25-6.244-1.391-1.641-1.641-2.174-4.033-1.391-6.244 0.128-0.363 0.036-0.767-0.237-1.040-0.271-0.271-0.676-0.365-1.039-0.237-1.159 0.411-2.164 1.039-2.99 1.864-2.096 2.094-2.749 5.063-2.030 7.737-2.703 0.345-5.133 1.781-6.751 3.987-0.327-0.047-0.655-0.070-0.987-0.070-3.859 0-7 3.141-7 7s3.141 7 7 7c0.856 0 1.693-0.156 2.482-0.458 1.81 1.578 4.112 2.458 6.518 2.458 2.409 0 4.708-0.88 6.518-2.458 0.789 0.302 1.626 0.458 2.482 0.458 3.859 0 7-3.141 7-7 0-3.090-2.026-5.689-4.809-6.615zM18.182 5.76c0.159-0.161 0.329-0.311 0.509-0.452-0.141 2.249 0.671 4.461 2.319 6.108 1.648 1.648 3.861 2.458 6.109 2.319-0.862 1.099-2.050 1.783-3.32 2.074-1.711-2.172-4.225-3.539-6.997-3.762-0.767-2.122-0.318-4.59 1.38-6.288zM25 28c-1.070 0-2.057-0.344-2.871-0.917-1.467 1.768-3.652 2.917-6.129 2.917s-4.662-1.148-6.129-2.917c-0.813 0.573-1.801 0.917-2.871 0.917-2.762 0-5-2.238-5-5s2.238-5 5-5c0.676 0 1.316 0.137 1.902 0.379 1.262-2.46 3.734-4.181 6.645-4.346 0.152-0.009 0.301-0.033 0.453-0.033 0.807 0 1.582 0.126 2.313 0.349 0.987 0.302 1.887 0.794 2.668 1.428 0.746 0.605 1.371 1.348 1.863 2.181 0.083 0.141 0.177 0.273 0.253 0.421 0.587-0.242 1.229-0.379 1.904-0.379 2.762 0 5 2.238 5 5s-2.238 5-5 5z"/>\n        </svg>':"03d"===n||"03n"===n?'<svg xmlns="http://www.w3.org/2000/svg" version="1.1" fill="#f5f5f5" viewBox="0 6 32 20">\n        <title>cloud</title>\n        <path d="M25 10c-0.332 0-0.66 0.023-0.987 0.070-1.867-2.544-4.814-4.070-8.013-4.070s-6.145 1.526-8.013 4.070c-0.327-0.047-0.655-0.070-0.987-0.070-3.859 0-7 3.141-7 7s3.141 7 7 7c0.856 0 1.693-0.156 2.482-0.458 1.81 1.578 4.112 2.458 6.518 2.458 2.409 0 4.708-0.88 6.518-2.458 0.789 0.302 1.626 0.458 2.482 0.458 3.859 0 7-3.141 7-7s-3.141-7-7-7zM25 22c-1.070 0-2.057-0.344-2.871-0.917-1.467 1.768-3.652 2.917-6.129 2.917s-4.662-1.148-6.129-2.917c-0.813 0.573-1.801 0.917-2.871 0.917-2.762 0-5-2.238-5-5s2.238-5 5-5c0.676 0 1.316 0.138 1.902 0.38 1.327-2.588 3.991-4.38 7.098-4.38s5.771 1.792 7.096 4.38c0.587-0.242 1.229-0.38 1.904-0.38 2.762 0 5 2.238 5 5s-2.238 5-5 5z"/>\n        </svg>':"04d"===n||"04n"===n?'<svg xmlns="http://www.w3.org/2000/svg" version="1.1" fill="#f5f5f5" viewBox="0 6.57 32 25.43">\n        <title>cloudy</title>\n        <path d="M32 15c0-3.073-2.5-5.572-5.573-5.572-0.15 0-0.298 0.007-0.447 0.018-1.445-1.803-3.624-2.874-5.98-2.874-2.355 0-4.535 1.070-5.98 2.874-0.148-0.012-0.298-0.018-0.449-0.018-3.070-0-5.57 2.499-5.57 5.572 0 0.322 0.043 0.631 0.094 0.94-0.034 0.044-0.074 0.085-0.107 0.13-0.327-0.047-0.655-0.070-0.987-0.070-3.859 0-7 3.141-7 7s3.141 7 7 7c0.856 0 1.693-0.156 2.482-0.458 1.81 1.578 4.112 2.458 6.518 2.458 2.409 0 4.708-0.88 6.518-2.458 0.789 0.302 1.626 0.458 2.482 0.458 3.859 0 7-3.141 7-7 0-1.605-0.565-3.068-1.479-4.25 0.911-0.994 1.479-2.302 1.479-3.75zM25 28c-1.070 0-2.057-0.344-2.871-0.917-1.467 1.768-3.652 2.917-6.129 2.917s-4.662-1.148-6.129-2.917c-0.813 0.573-1.801 0.917-2.871 0.917-2.762 0-5-2.238-5-5s2.238-5 5-5c0.676 0 1.316 0.137 1.902 0.379 0.035-0.066 0.078-0.125 0.113-0.189 0.352-0.642 0.785-1.23 1.292-1.753 1.443-1.495 3.448-2.438 5.693-2.438 3.107 0 5.771 1.792 7.096 4.379 0.353-0.145 0.729-0.238 1.117-0.301l0.787-0.078c0.771 0 1.492 0.19 2.145 0.5 0.707 0.338 1.314 0.836 1.79 1.449 0.656 0.845 1.065 1.897 1.065 3.051 0 2.762-2.238 5-5 5zM29.098 17.352c-1.155-0.841-2.563-1.352-4.098-1.352-0.332 0-0.66 0.023-0.987 0.070-1.867-2.544-4.814-4.070-8.013-4.070-2.133 0-4.145 0.69-5.809 1.896 0.467-1.428 1.796-2.467 3.379-2.467 0.484 0 0.941 0.098 1.359 0.271 0.949-1.848 2.852-3.126 5.070-3.126s4.122 1.279 5.068 3.126c0.421-0.173 0.88-0.271 1.359-0.271 1.974 0 3.573 1.599 3.573 3.572 0 0.905-0.348 1.721-0.902 2.351z"/>\n        </svg>':"09d"===n||"09n"===n||"10d"===n||"10n"===n?'<svg xmlns="http://www.w3.org/2000/svg" version="1.1" fill="#f5f5f5" viewBox="0 0 32 32">\n        <title>rainy</title>\n        <path d="M25 4c-0.332 0-0.66 0.023-0.987 0.070-1.867-2.544-4.814-4.070-8.013-4.070s-6.145 1.526-8.013 4.070c-0.327-0.047-0.655-0.070-0.987-0.070-3.859 0-7 3.141-7 7s3.141 7 7 7c0.856 0 1.693-0.156 2.482-0.458 1.81 1.578 4.112 2.458 6.518 2.458 2.409 0 4.708-0.88 6.518-2.458 0.789 0.302 1.626 0.458 2.482 0.458 3.859 0 7-3.141 7-7s-3.141-7-7-7zM25 16c-1.070 0-2.057-0.344-2.871-0.917-1.467 1.768-3.652 2.917-6.129 2.917s-4.662-1.148-6.129-2.917c-0.813 0.573-1.801 0.917-2.871 0.917-2.762 0-5-2.238-5-5s2.238-5 5-5c0.676 0 1.316 0.138 1.902 0.38 1.327-2.588 3.991-4.38 7.098-4.38s5.771 1.792 7.096 4.38c0.587-0.242 1.229-0.38 1.904-0.38 2.762 0 5 2.238 5 5s-2.238 5-5 5zM14.063 30c0 1.105 0.895 2 2 2s2-0.895 2-2-2-4-2-4-2 2.895-2 4zM22 28c0 1.105 0.895 2 2 2s2-0.895 2-2-2-4-2-4-2 2.895-2 4zM6 24c0 1.105 0.894 2 2 2s2-0.895 2-2-2-4-2-4-2 2.895-2 4z"/>\n        </svg>':"11d"===n||"11n"===n?'<svg xmlns="http://www.w3.org/2000/svg" version="1.1" fill="#f5f5f5" viewBox="0 0 32 32">\n        <title>lightning</title>\n        <path d="M12 24l2 2-2 6 6-6-2-2 2-4-6 4zM32 8.427c0-3.072-2.5-5.57-5.573-5.57-0.15 0-0.298 0.005-0.447 0.017-1.445-1.802-3.624-2.874-5.98-2.874-2.355 0-4.535 1.072-5.98 2.874-0.148-0.012-0.298-0.017-0.449-0.017-3.070 0-5.57 2.499-5.57 5.57 0 0.322 0.043 0.633 0.094 0.94-0.034 0.044-0.074 0.085-0.107 0.13-0.327-0.047-0.655-0.070-0.987-0.070-3.859 0-7 3.141-7 7s3.141 7 7 7c0.856 0 1.693-0.156 2.482-0.458 0.069 0.060 0.151 0.102 0.221 0.16l1.77-1.18c-0.59-0.418-1.141-0.883-1.602-1.438-0.813 0.572-1.801 0.915-2.871 0.915-2.762 0-5-2.237-5-5 0-2.76 2.238-5 5-5 0.676 0 1.316 0.138 1.902 0.38 0.035-0.068 0.078-0.125 0.113-0.19 0.352-0.642 0.785-1.229 1.292-1.753 1.443-1.493 3.448-2.438 5.693-2.438 3.107 0 5.771 1.792 7.096 4.38 0.353-0.146 0.729-0.24 1.117-0.302l0.787-0.078c0.771 0 1.492 0.19 2.145 0.5 0.707 0.339 1.314 0.836 1.79 1.45 0.656 0.845 1.065 1.896 1.065 3.050 0 2.763-2.238 5-5 5-1.070 0-2.057-0.344-2.871-0.915-0.875 1.055-2.027 1.848-3.322 2.348l-0.374 0.746 1.141 1.141c1.066-0.415 2.064-1.012 2.944-1.777 0.789 0.302 1.626 0.458 2.482 0.458 3.859 0 7-3.141 7-7 0-1.604-0.565-3.068-1.479-4.25 0.911-0.992 1.479-2.301 1.479-3.75zM29.098 10.779c-1.155-0.84-2.563-1.352-4.098-1.352-0.332 0-0.66 0.023-0.987 0.070-1.867-2.543-4.814-4.070-8.013-4.070-2.133 0-4.145 0.691-5.809 1.897 0.467-1.428 1.796-2.467 3.379-2.467 0.484 0 0.941 0.098 1.359 0.271 0.949-1.849 2.852-3.128 5.070-3.128s4.122 1.279 5.068 3.128c0.421-0.173 0.88-0.271 1.359-0.271 1.974 0 3.573 1.599 3.573 3.57 0 0.906-0.348 1.723-0.902 2.352z"/>\n        </svg>':"13d"===n||"13n"===n?'<svg xmlns="http://www.w3.org/2000/svg" version="1.1" fill="#f5f5f5" viewBox="0.5 1 47.01 47.01">\n        <title>snow</title>\n        <path d="M14.5 24.502c0 1 0.16 1.97 0.44 2.871l-4.080 2.35-7.26-1.94c-1.31-0.35-2.66 0.43-3.020 1.729-0.35 1.311 0.43 2.65 1.75 3l5.87 1.57-1.58 5.84c-0.35 1.301 0.43 2.65 1.74 3 1.32 0.35 2.67-0.43 3.020-1.738l1.94-7.221 4.27-2.451c1.11 1.010 2.46 1.771 3.95 2.172v5.5l-5.32 4.488c-0.96 0.99-0.96 2.59 0 3.59 0.96 0.99 2.52 0.99 3.48 0l4.3-4.439 4.3 4.439c0.96 0.99 2.52 0.99 3.479 0 0.961-1 0.961-2.6 0-3.59l-5.319-4.488v-5.5c1.49-0.4 2.84-1.162 3.95-2.172l4.27 2.451 1.94 7.221c0.35 1.309 1.699 2.088 3.020 1.738 1.311-0.35 2.091-1.699 1.74-3l-1.58-5.84 5.87-1.57c1.32-0.35 2.1-1.689 1.75-3-0.359-1.299-1.71-2.078-3.020-1.729l-7.261 1.939-4.079-2.35c0.279-0.9 0.439-1.871 0.439-2.871s-0.16-1.97-0.439-2.88l4.079-2.34 7.261 1.94c1.31 0.35 2.66-0.431 3.020-1.73 0.35-1.31-0.43-2.65-1.75-3l-5.87-1.57 1.58-5.84c0.351-1.3-0.43-2.649-1.74-3-1.32-0.35-2.67 0.43-3.020 1.74l-1.94 7.22-4.27 2.45c-1.11-1.010-2.46-1.77-3.95-2.17v-4.5l5.319-5.49c0.961-0.99 0.961-2.59 0-3.59-0.96-0.99-2.52-0.99-3.479 0l-4.3 4.442-4.3-4.44c-0.96-0.99-2.52-0.99-3.48 0-0.96 1-0.96 2.6 0 3.59l5.32 5.49v4.5c-1.49 0.4-2.84 1.16-3.95 2.17l-4.27-2.45-1.94-7.22c-0.35-1.311-1.7-2.090-3.020-1.74-1.31 0.351-2.090 1.7-1.74 3l1.58 5.84-5.87 1.57c-1.32 0.35-2.1 1.69-1.75 3 0.36 1.3 1.71 2.080 3.020 1.73l7.26-1.94 4.080 2.34c-0.28 0.91-0.44 1.879-0.44 2.879zM24 29.002c-2.49 0-4.5-2.010-4.5-4.5s2.010-4.5 4.5-4.5 4.5 2.010 4.5 4.5c0 2.49-2.010 4.5-4.5 4.5z"/>\n        </svg>':"50d"===n||"50n"===n?'<svg xmlns="http://www.w3.org/2000/svg" version="1.1" fill="#f5f5f5" viewBox="1.94 5.94 30 18">\n        <title>mist</title>\n        <path d="M30.938 13.938h-5.102c-0.504-4.487-4.277-8-8.898-8-3.113 0-5.859 1.591-7.477 4h-6.523c-0.552 0-1 0.448-1 1s0.448 1 1 1h5.552c-0.226 0.638-0.374 1.306-0.45 2h-3.102c-0.552 0-1 0.448-1 1s0.448 1 1 1h3.102c0.077 0.693 0.224 1.363 0.45 2h-5.37c-0.654 0-1.182 0.448-1.182 1s0.529 1 1.182 1h6.341c1.617 2.41 4.363 4 7.477 4s5.859-1.59 7.477-4h2.341c0.654 0 1.182-0.448 1.182-1s-0.529-1-1.182-1h-1.37c0.227-0.637 0.372-1.307 0.451-2h5.102c0.552 0 1-0.448 1-1s-0.448-1-1-1zM10.639 11.938h6.298c0.552 0 1-0.448 1-1s-0.448-1-1-1h-4.884c1.263-1.233 2.983-2 4.884-2 3.518 0 6.409 2.617 6.898 6h-13.797c0.102-0.707 0.302-1.378 0.6-2zM16.938 21.938c-1.901 0-3.621-0.768-4.884-2h9.767c-1.262 1.232-2.982 2-4.883 2zM23.234 17.938h-12.595c-0.298-0.622-0.499-1.293-0.6-2h13.797c-0.102 0.707-0.302 1.378-0.602 2z"/>\n        </svg>':""}function h(n){let e=n.split(" ");for(let n=0;n<e.length;n++)e[n]=e[n][0].toUpperCase()+e[n].slice(1);return e.join(" ")}function m(n){return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][new Date(n).getUTCDay()]}async function C(n){const e=await n;return await e.json()}g.styleTagTransform=u(),g.setAttributes=s(),g.insert=a().bind(null,"head"),g.domAPI=r(),g.insertStyleElement=l(),e()(p.Z,g),p.Z&&p.Z.locals&&p.Z.locals;let x="",y="metric",b="day";function B(n,e){const t=function(n,e=y){return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${n}&APPID=c623d6c1dc938ebc64fffc73f94df621&units=${e}`,{mode:"cors"})}(n,e),o=C(t),r=function(n,e){return fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${n}&appid=c623d6c1dc938ebc64fffc73f94df621&units=${e}`)}(n,e),i=C(r);"imperial"===e?x=" °F":"metric"===e&&(x=" °C"),o.then((function(n){const e=document.querySelector(".title"),t=document.querySelector(".location"),o=document.querySelector(".date"),r=document.querySelector(".temperature"),i=document.querySelector(".currentWeather"),a=document.querySelector(".background"),c=document.querySelector("#feelsLike"),s=document.querySelector("#humidity"),A=document.querySelector("#windSpeed");e.innerHTML=h(n.weather[0].description),t.innerHTML=h(n.name),o.innerHTML=function(n){const e=new Date;e.setTime(e.getTime()+1e3*n);const t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getUTCDay()],o=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getUTCMonth()],r=e.getUTCDate();let i="th";1===r||21===r||31===r?i="st":2===r||22===r?i="nd":3!==r&&23!==r||(i="rd");const a=e.getUTCFullYear().toString().slice(-2);let c=e.getUTCHours(),s=e.getUTCMinutes(),A="am";return c>12&&(c-=12,A="pm"),s<10&&(s="0"+s),`${t}, ${r}${i} ${o} '${a} \n    ${c}:${s} ${A}`}(n.timezone),r.innerHTML=Math.round(10*n.main.temp)/10+x,i.innerHTML=f(n.weather[0].icon),c.innerHTML=Math.round(10*n.main.feels_like)/10+x,s.innerHTML=n.main.humidity+" %",A.innerHTML=n.wind.speed+" km/h",function(n){return async function(n){let e=`https://www.googleapis.com/customsearch/v1?key=AIzaSyDQ_Sl9D8Qq73acio8-ynl6JMU-jyPwl2c&cx=a7fbf019348ba4e08&q=${n}&searchType=image&imgSize=huge`;try{let n=await fetch(e,{mode:"cors"});return await n.json()}catch(n){console.log(n)}}(n).then((n=>{if(n.items&&n.items.length){let e=n.items.filter((n=>!n.link.includes("https://lookaside.fbsbx.com")));if(e.length)return e[0].link;console.log("No images found that do not contain m.facebook.com in the URL")}}))}(t.textContent).then((n=>{console.log(n),n||(a.style.backgroundImage='url("./static/background.png")'),a.style.backgroundImage=`url(${n})`}))})),i.then((function(n){const e=document.querySelector("#chanceOfRain"),t=document.querySelectorAll(".weekDay"),o=document.querySelector(".change-hours"),r=document.querySelector(".foreCastLabel");n.list,e.innerHTML=100*n.list[0].pop+" %";let i=n.list[0].dt_txt.substring(0,n.list[0].dt_txt.indexOf(" "));const a=[],c=[];let s=a[0],A=null;console.log(n.list);let l=0;switch(b){case"day":for(let e of n.list)i!==e.dt_txt.substring(0,e.dt_txt.indexOf(" "))&&"12:00:00"===e.dt_txt.split(" ")[1]&&(A=e.weather[0].icon,i=e.dt_txt.substring(0,e.dt_txt.indexOf(" ")),s={date:i,maxTemp:e.main.temp_max,minTemp:e.main.temp_min,icon:A},a.push(s));for(let e of a)for(let t of n.list)t.dt_txt.substring(0,t.dt_txt.indexOf(" "))===e.date&&(t.main.temp_max>e.maxTemp&&(e.maxTemp=t.main.temp_max),t.main.temp_min<e.minTemp&&(e.minTemp=t.main.temp_min));for(let n of t)n.querySelector(".weekDayTitle").textContent=m(a[l].date),n.querySelector(".temperatureHigh").textContent=Math.round(10*a[l].maxTemp)/10+x,n.querySelector(".temperatureLow").textContent=Math.round(10*a[l].minTemp)/10+x,n.querySelector(".weatherIcon").innerHTML=f(a[l].icon),l++;r.textContent="5-Day Forecast",o.style.display="none";break;case"hour":l=5*document.querySelector(".dot-selected").getAttribute("data-dot")-5;for(let e of n.list)c.push(e);for(let n of t)n.querySelector(".weekDayTitle").textContent=c[l].dt_txt.split(" ")[1].substring(0,5),n.querySelector(".temperatureHigh").textContent=Math.round(10*c[l].main.temp_max)/10+x,n.querySelector(".temperatureLow").textContent=Math.round(10*c[l].main.temp_min)/10+x,n.querySelector(".weatherIcon").innerHTML=f(c[l].weather[0].icon),l++;r.textContent="3-Hour-Interval Forecast",o.style.display="flex"}}))}B("New York","metric");const v=document.querySelector(".searchButton"),I=document.querySelector(".searchBar"),w=document.querySelector(".unitSwitch"),M=document.querySelector(".dailyButton"),S=document.querySelector(".hourlyButton"),k=document.querySelector(".change-hours__right"),z=document.querySelector(".change-hours__left");v.addEventListener("click",(()=>{B(I.value,y),I.value=""})),window.addEventListener("keydown",(n=>{"Enter"===n.key&&(B(I.value,y),I.value="")})),w.addEventListener("click",(n=>{const e=document.querySelector(".location").textContent;"Display °F"===w.textContent?(y="imperial",w.textContent="Display °C"):(y="metric",w.textContent="Display °F"),B(e,y)})),M.addEventListener("click",(n=>{const e=document.querySelector(".location").textContent;b="day",B(e,y)})),S.addEventListener("click",(n=>{const e=document.querySelector(".location").textContent;b="hour",B(e,y)})),k.addEventListener("click",(n=>{const e=document.querySelectorAll(".dot");let t=document.querySelector(".dot-selected").getAttribute("data-dot");t<8&&t++,e.forEach((n=>{n.classList.remove("dot-selected"),n.getAttribute("data-dot")==t&&n.classList.add("dot-selected")})),B(document.querySelector(".location").textContent,y)})),z.addEventListener("click",(n=>{const e=document.querySelectorAll(".dot");let t=document.querySelector(".dot-selected").getAttribute("data-dot");t>1&&t--,e.forEach((n=>{n.classList.remove("dot-selected"),n.getAttribute("data-dot")==t&&n.classList.add("dot-selected")})),B(document.querySelector(".location").textContent,y)}))})()})();
//# sourceMappingURL=main.js.map