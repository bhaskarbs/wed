
/*! modernizr 3.3.1 (Custom Build) | MIT *
 * http://modernizr.com/download/?-details-inputtypes-objectfit-svg-touchevents-addtest-prefixes-setclasses-testprop-teststyles !*/
!function(e,t,n){function r(e,t){return typeof e===t}function i(){var e,t,n,i,o,s,a;for(var l in _)if(_.hasOwnProperty(l)){if(e=[],t=_[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(i=r(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)s=e[o],a=s.split("."),1===a.length?Modernizr[a[0]]=i:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=i),g.push((i?"":"no-")+a.join("-"))}}function o(e){var t=x.className,n=Modernizr._config.classPrefix||"";if(S&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),S?x.className.baseVal=t:x.className=t)}function s(e,t){if("object"==typeof e)for(var n in e)b(e,n)&&s(n,e[n]);else{e=e.toLowerCase();var r=e.split("."),i=Modernizr[r[0]];if(2==r.length&&(i=i[r[1]]),"undefined"!=typeof i)return Modernizr;t="function"==typeof t?t():t,1==r.length?Modernizr[r[0]]=t:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=t),o([(t&&0!=t?"":"no-")+r.join("-")]),Modernizr._trigger(e,t)}return Modernizr}function a(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):S?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function l(e,t){return!!~(""+e).indexOf(t)}function f(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function u(){var e=t.body;return e||(e=a(S?"svg":"body"),e.fake=!0),e}function c(e,n,r,i){var o,s,l,f,c="modernizr",d=a("div"),p=u();if(parseInt(r,10))for(;r--;)l=a("div"),l.id=i?i[r]:c+(r+1),d.appendChild(l);return o=a("style"),o.type="text/css",o.id="s"+c,(p.fake?p:d).appendChild(o),p.appendChild(d),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(t.createTextNode(e)),d.id=c,p.fake&&(p.style.background="",p.style.overflow="hidden",f=x.style.overflow,x.style.overflow="hidden",x.appendChild(p)),s=n(d,e),p.fake?(p.parentNode.removeChild(p),x.style.overflow=f,x.offsetHeight):d.parentNode.removeChild(d),!!s}function d(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function p(t,r){var i=t.length;if("CSS"in e&&"supports"in e.CSS){for(;i--;)if(e.CSS.supports(d(t[i]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];i--;)o.push("("+d(t[i])+":"+r+")");return o=o.join(" or "),c("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function h(e,t,i,o){function s(){c&&(delete P.style,delete P.modElem)}if(o=r(o,"undefined")?!1:o,!r(i,"undefined")){var u=p(e,i);if(!r(u,"undefined"))return u}for(var c,d,h,m,v,y=["modernizr","tspan"];!P.style;)c=!0,P.modElem=a(y.shift()),P.style=P.modElem.style;for(h=e.length,d=0;h>d;d++)if(m=e[d],v=P.style[m],l(m,"-")&&(m=f(m)),P.style[m]!==n){if(o||r(i,"undefined"))return s(),"pfx"==t?m:!0;try{P.style[m]=i}catch(g){}if(P.style[m]!=v)return s(),"pfx"==t?m:!0}return s(),!1}function m(e,t){return function(){return e.apply(t,arguments)}}function v(e,t,n){var i;for(var o in e)if(e[o]in t)return n===!1?e[o]:(i=t[e[o]],r(i,"function")?m(i,n||t):i);return!1}function y(e,t,n,i,o){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+L.join(s+" ")+s).split(" ");return r(t,"string")||r(t,"undefined")?h(a,t,i,o):(a=(e+" "+O.join(s+" ")+s).split(" "),v(a,t,n))}var g=[],_=[],C={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){_.push({name:e,fn:t,options:n})},addAsyncTest:function(e){_.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=C,Modernizr=new Modernizr,Modernizr.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect);var w=C._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];C._prefixes=w;var b,x=t.documentElement,S="svg"===x.nodeName.toLowerCase();!function(){var e={}.hasOwnProperty;b=r(e,"undefined")||r(e.call,"undefined")?function(e,t){return t in e&&r(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),C._l={},C.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},C._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e,r;for(e=0;e<n.length;e++)(r=n[e])(t)},0),delete this._l[e]}},Modernizr._q.push(function(){C.addTest=s});var T=a("input"),j="search tel url email datetime date month week time datetime-local number range color".split(" "),k={};Modernizr.inputtypes=function(e){for(var r,i,o,s=e.length,a="1)",l=0;s>l;l++)T.setAttribute("type",r=e[l]),o="text"!==T.type&&"style"in T,o&&(T.value=a,T.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(r)&&T.style.WebkitAppearance!==n?(x.appendChild(T),i=t.defaultView,o=i.getComputedStyle&&"textfield"!==i.getComputedStyle(T,null).WebkitAppearance&&0!==T.offsetHeight,x.removeChild(T)):/^(search|tel)$/.test(r)||(o=/^(url|email)$/.test(r)?T.checkValidity&&T.checkValidity()===!1:T.value!=a)),k[e[l]]=!!o;return k}(j);var z=C.testStyles=c;Modernizr.addTest("details",function(){var e,t=a("details");return"open"in t?(z("#modernizr details{display:block}",function(n){n.appendChild(t),t.innerHTML="<summary>a</summary>b",e=t.offsetHeight,t.open=!0,e=e!=t.offsetHeight}),e):!1}),Modernizr.addTest("touchevents",function(){var n;if("ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch)n=!0;else{var r=["@media (",w.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");z(r,function(e){n=9===e.offsetTop})}return n});var E={elem:a("modernizr")};Modernizr._q.push(function(){delete E.elem});var P={style:E.elem.style};Modernizr._q.unshift(function(){delete P.style});var N=(C.testProp=function(e,t,r){return h([e],n,t,r)},"Moz O ms Webkit"),L=C._config.usePrefixes?N.split(" "):[];C._cssomPrefixes=L;var A=function(t){var r,i=w.length,o=e.CSSRule;if("undefined"==typeof o)return n;if(!t)return!1;if(t=t.replace(/^@/,""),r=t.replace(/-/g,"_").toUpperCase()+"_RULE",r in o)return"@"+t;for(var s=0;i>s;s++){var a=w[s],l=a.toUpperCase()+"_"+r;if(l in o)return"@-"+a.toLowerCase()+"-"+t}return!1};C.atRule=A;var O=C._config.usePrefixes?N.toLowerCase().split(" "):[];C._domPrefixes=O,C.testAllProps=y;var R=C.prefixed=function(e,t,n){return 0===e.indexOf("@")?A(e):(-1!=e.indexOf("-")&&(e=f(e)),t?y(e,t,n):y(e,"pfx"))};Modernizr.addTest("objectfit",!!R("objectFit"),{aliases:["object-fit"]}),i(),o(g),delete C.addTest,delete C.addAsyncTest;for(var V=0;V<Modernizr._q.length;V++)Modernizr._q[V]();e.Modernizr=Modernizr}(window,document);