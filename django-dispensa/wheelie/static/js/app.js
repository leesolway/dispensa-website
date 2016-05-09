!function(t,e){"use strict";function r(t){t=t.split(" ");for(var e={},r=t.length,n=[];r--;)e.hasOwnProperty(t[r])||(e[t[r]]=1,n.unshift(t[r]));return n.join(" ")}var n="file:"===t.location.protocol,i=e.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1"),o=Array.prototype.forEach||function(t,e){if(void 0===this||null===this||"function"!=typeof t)throw new TypeError;var r,n=this.length>>>0;for(r=0;n>r;++r)r in this&&t.call(e,this[r],r,this)},a={},l=0,s=[],u=[],c={},f=function(t){return t.cloneNode(!0)},p=function(t,e){u[t]=u[t]||[],u[t].push(e)},d=function(t){for(var e=0,r=u[t].length;r>e;e++)!function(e){setTimeout(function(){u[t][e](f(a[t]))},0)}(e)},v=function(e,r){if(void 0!==a[e])a[e]instanceof SVGSVGElement?r(f(a[e])):p(e,r);else{if(!t.XMLHttpRequest)return r("Browser does not support XMLHttpRequest"),!1;a[e]={},p(e,r);var i=new XMLHttpRequest;i.onreadystatechange=function(){if(4===i.readyState){if(404===i.status||null===i.responseXML)return r("Unable to load SVG file: "+e),n&&r("Note: SVG injection ajax calls do not work locally without adjusting security setting in your browser. Or consider using a local webserver."),r(),!1;if(!(200===i.status||n&&0===i.status))return r("There was a problem injecting the SVG: "+i.status+" "+i.statusText),!1;if(i.responseXML instanceof Document)a[e]=i.responseXML.documentElement;else if(DOMParser&&DOMParser instanceof Function){var t;try{var o=new DOMParser;t=o.parseFromString(i.responseText,"text/xml")}catch(l){t=void 0}if(!t||t.getElementsByTagName("parsererror").length)return r("Unable to parse SVG file: "+e),!1;a[e]=t.documentElement}d(e)}},i.open("GET",e),i.overrideMimeType&&i.overrideMimeType("text/xml"),i.send()}},h=function(e,n,a,u){var f=e.getAttribute("data-src")||e.getAttribute("src");if(!/\.svg/i.test(f))return void u("Attempted to inject a file with a non-svg extension: "+f);if(!i){var p=e.getAttribute("data-fallback")||e.getAttribute("data-png");return void(p?(e.setAttribute("src",p),u(null)):a?(e.setAttribute("src",a+"/"+f.split("/").pop().replace(".svg",".png")),u(null)):u("This browser does not support SVG and no PNG fallback was defined."))}-1===s.indexOf(e)&&(s.push(e),e.setAttribute("src",""),v(f,function(i){if("undefined"==typeof i||"string"==typeof i)return u(i),!1;var a=e.getAttribute("id");a&&i.setAttribute("id",a);var p=e.getAttribute("title");p&&i.setAttribute("title",p);var d=[].concat(i.getAttribute("class")||[],"injected-svg",e.getAttribute("class")||[]).join(" ");i.setAttribute("class",r(d));var v=e.getAttribute("style");v&&i.setAttribute("style",v);var h=[].filter.call(e.attributes,function(t){return/^data-\w[\w\-]*$/.test(t.name)});o.call(h,function(t){t.name&&t.value&&i.setAttribute(t.name,t.value)});var g,m,b,y,A,w={clipPath:["clip-path"],"color-profile":["color-profile"],cursor:["cursor"],filter:["filter"],linearGradient:["fill","stroke"],marker:["marker","marker-start","marker-mid","marker-end"],mask:["mask"],pattern:["fill","stroke"],radialGradient:["fill","stroke"]};Object.keys(w).forEach(function(t){g=t,b=w[t],m=i.querySelectorAll("defs "+g+"[id]");for(var e=0,r=m.length;r>e;e++){y=m[e].id,A=y+"-"+l;var n;o.call(b,function(t){n=i.querySelectorAll("["+t+'*="'+y+'"]');for(var e=0,r=n.length;r>e;e++)n[e].setAttribute(t,"url(#"+A+")")}),m[e].id=A}}),i.removeAttribute("xmlns:a");for(var x,S,k=i.querySelectorAll("script"),j=[],G=0,T=k.length;T>G;G++)S=k[G].getAttribute("type"),S&&"application/ecmascript"!==S&&"application/javascript"!==S||(x=k[G].innerText||k[G].textContent,j.push(x),i.removeChild(k[G]));if(j.length>0&&("always"===n||"once"===n&&!c[f])){for(var M=0,V=j.length;V>M;M++)new Function(j[M])(t);c[f]=!0}var E=i.querySelectorAll("style");o.call(E,function(t){t.textContent+=""}),e.parentNode.replaceChild(i,e),delete s[s.indexOf(e)],e=null,l++,u(i)}))},g=function(t,e,r){e=e||{};var n=e.evalScripts||"always",i=e.pngFallback||!1,a=e.each;if(void 0!==t.length){var l=0;o.call(t,function(e){h(e,n,i,function(e){a&&"function"==typeof a&&a(e),r&&t.length===++l&&r(l)})})}else t?h(t,n,i,function(e){a&&"function"==typeof a&&a(e),r&&r(1),t=null}):r&&r(0)};"object"==typeof module&&"object"==typeof module.exports?module.exports=exports=g:"function"==typeof define&&define.amd?define(function(){return g}):"object"==typeof t&&(t.SVGInjector=g)}(window,document);
!function(e,n,A){function o(e,n){return typeof e===n}function a(){var e,n,A,a,t,i,l;for(var u in r)if(r.hasOwnProperty(u)){if(e=[],n=r[u],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(A=0;A<n.options.aliases.length;A++)e.push(n.options.aliases[A].toLowerCase());for(a=o(n.fn,"function")?n.fn():n.fn,t=0;t<e.length;t++)i=e[t],l=i.split("."),1===l.length?f[l[0]]=a:(!f[l[0]]||f[l[0]]instanceof Boolean||(f[l[0]]=new Boolean(f[l[0]])),f[l[0]][l[1]]=a),s.push((a?"":"no-")+l.join("-"))}}function t(e){var n=c.className,A=f._config.classPrefix||"";if(p&&(n=n.baseVal),f._config.enableJSClass){var o=new RegExp("(^|\\s)"+A+"no-js(\\s|$)");n=n.replace(o,"$1"+A+"js$2")}f._config.enableClasses&&(n+=" "+A+e.join(" "+A),p?c.className.baseVal=n:c.className=n)}function i(e,n){if("object"==typeof e)for(var A in e)u(e,A)&&i(A,e[A]);else{e=e.toLowerCase();var o=e.split("."),a=f[o[0]];if(2==o.length&&(a=a[o[1]]),"undefined"!=typeof a)return f;n="function"==typeof n?n():n,1==o.length?f[o[0]]=n:(!f[o[0]]||f[o[0]]instanceof Boolean||(f[o[0]]=new Boolean(f[o[0]])),f[o[0]][o[1]]=n),t([(n&&0!=n?"":"no-")+o.join("-")]),f._trigger(e,n)}return f}var s=[],r=[],l={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var A=this;setTimeout(function(){n(A[e])},0)},addTest:function(e,n,A){r.push({name:e,fn:n,options:A})},addAsyncTest:function(e){r.push({name:null,fn:e})}},f=function(){};f.prototype=l,f=new f;var u,c=n.documentElement,p="svg"===c.nodeName.toLowerCase();!function(){var e={}.hasOwnProperty;u=o(e,"undefined")||o(e.call,"undefined")?function(e,n){return n in e&&o(e.constructor.prototype[n],"undefined")}:function(n,A){return e.call(n,A)}}(),l._l={},l.on=function(e,n){this._l[e]||(this._l[e]=[]),this._l[e].push(n),f.hasOwnProperty(e)&&setTimeout(function(){f._trigger(e,f[e])},0)},l._trigger=function(e,n){if(this._l[e]){var A=this._l[e];setTimeout(function(){var e,o;for(e=0;e<A.length;e++)(o=A[e])(n)},0),delete this._l[e]}},f._q.push(function(){l.addTest=i}),f.addAsyncTest(function(){function e(e,n,A){function o(n){var o=n&&"load"===n.type?1==a.width:!1,t="webp"===e;i(e,t?new Boolean(o):o),A&&A(n)}var a=new Image;a.onerror=o,a.onload=o,a.src=n}var n=[{uri:"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",name:"webp"},{uri:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",name:"webp.alpha"},{uri:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",name:"webp.animation"},{uri:"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",name:"webp.lossless"}],A=n.shift();e(A.name,A.uri,function(A){if(A&&"load"===A.type)for(var o=0;o<n.length;o++)e(n[o].name,n[o].uri)})}),a(),t(s),delete l.addTest,delete l.addAsyncTest;for(var d=0;d<f._q.length;d++)f._q[d]();e.Modernizr=f}(window,document);
!function(){var e=document.querySelectorAll("img.js-inject-svg");SVGInjector(e)}();
!function(){function e(){i.classList.toggle("mobile-header-navigation-open"),o.classList.toggle("mobile-header-navigation-nav-open")}function n(){r.classList.toggle("sticky-header-navigation-open"),c.classList.toggle("sticky-header-navigation-nav-open")}for(var a=document.querySelectorAll("#mobile-header-navigation-icon"),i=document.querySelector("#mobile-header-navigation"),o=document.querySelector("#mobile-header-navigation-nav"),t=document.querySelectorAll(".header-navigation-icon.mobile-header-navigation-icon.sticky-header-navigation-icon"),r=document.querySelector(".header-navigation.mobile-header-navigation.sticky-header-navigation"),c=document.querySelector(".header-navigation-nav.mobile-header-navigation-nav.sticky-header-navigation-nav"),l=0;l<a.length;l++)a[l].addEventListener("click",e);for(var l=0;l<t.length;l++)t[l].addEventListener("click",n)}();
function initMap(){var e=document.getElementById("map"),t={lat:43.115767,lng:12.388208},l=new google.maps.Map(e,{center:t,zoom:17,scrollwheel:!1,mapTypeControl:!1,draggable:!1,styles:[{featureType:"water",elementType:"geometry",stylers:[{color:"#e9e9e9"},{lightness:17}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#f5f5f5"},{lightness:20}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#ffffff"},{lightness:17}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#ffffff"},{lightness:29},{weight:.2}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#ffffff"},{lightness:18}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#ffffff"},{lightness:16}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#f5f5f5"},{lightness:21}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#dedede"},{lightness:21}]},{elementType:"labels.text.stroke",stylers:[{visibility:"on"},{color:"#ffffff"},{lightness:16}]},{elementType:"labels.text.fill",stylers:[{saturation:36},{color:"#333333"},{lightness:40}]},{elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#f2f2f2"},{lightness:19}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#fefefe"},{lightness:20}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#fefefe"},{lightness:17},{weight:1.2}]}]}),s="/static/images/marker.png",r=new google.maps.Marker({position:t,map:l,icon:s,url:"http://maps.google.com/maps?&z=10&q=43.115767+12.388208&ll=43.115767+12.388208"});google.maps.event.addListener(r,"click",function(){window.open(r.url,"_blank")})}
!function(){var e=document.querySelector("#menu-path-line"),t=document.querySelector(".menu");if(e&&t){var o=e.getTotalLength(),n=t.offsetHeight,r=t.offsetTop;e.style.strokeDashoffset=o;var s=window.devicePixelRatio>1?-400:450;window.addEventListener("scroll",function(){var t=(window.pageYOffset-r)/(n-window.innerHeight+s),a=o*t;e.style.strokeDashoffset=o-a,t>=.99?e.style.strokeDasharray="none":e.style.strokeDasharray=o+" "+o})}}();
!function(){"use strict";var e=document.querySelector(".js-facebook-share");e&&e.addEventListener("click",function(e){e.preventDefault(),FB.ui({method:"share",href:window.location.href},function(e){})})}();
!function(){function t(){var t=window.scrollY;Math.abs(n-t)<=c||(n>t&&t>o?i.classList.add("sticky-show"):i.classList.remove("sticky-show"),n=t)}var e,n=0,c=5,i=document.querySelector(".sticky-header"),o=document.documentElement.clientHeight;window.addEventListener("scroll",function(t){requestAnimationFrame(function(){e=!0})}),setInterval(function(){e&&(t(),e=!1)},200)}();
!function(){function t(){s.classList.toggle("open"),e.classList.toggle("viewport-block"),n.classList.toggle("switch"),o.classList.toggle("open")}var e=document.querySelector("body"),o=document.querySelector(".blog-tags-search-button"),c=document.querySelector(".blog-tags-search-button-container"),s=document.querySelector(".blog-tags-search"),l=document.querySelector(".blog-tags-search-button-tags_selected"),n=document.querySelector(".blog-tags-search-button-container-icon");if(c){var r=c.offsetWidth+"px";l&&(l.style.width=r),c.addEventListener("click",t)}}();