/**
* anix.umd - VERSION(0.2.1) - https://github.com/a-jie/AniX
*/
!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var s=n[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,t),s.l=!0,s.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=7)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){this.pfObj={},this.div=document.createElement("div")}return e.prototype.hasTransition=function(){var e=document.body||document.documentElement,t=e.style,n="transition";if("string"==typeof t[n])return!0;var r=["Moz","webkit","Webkit","Khtml","O","ms"];n=n.charAt(0).toUpperCase()+n.substr(1);for(var s=0;s<r.length;s++)if("string"==typeof t[r[s]+n])return!0;return!1},e.prototype.has3d=function(){var e,t={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"},n=document.createElement("p");document.body.insertBefore(n,null);for(var r in t)void 0!==n.style[r]&&(n.style[r]="translate3d(1px, 1px, 1px)",e=window.getComputedStyle(n).getPropertyValue(t[r]));return document.body.removeChild(n),void 0!==e&&e.length>0&&"none"!==e},e.prototype.getTranstionEndEvent=function(){var e="";switch(this.getPrefix(1)){case"Webkit":e="webkitTransitionEnd";break;case"ms":e="MSTransitionEnd";break;case"O":e="oTransitionEnd";break;case"Moz":e="transitionend";break;default:e="transitionend"}return e},e.prototype.getPrefix=function(e){if(void 0===e&&(e=1),this.pfObj[e])return this.pfObj[e];for(var t=["Moz","Webkit","ms","O","o",""],n=["-moz-","-webkit-","-ms-","-o-","-o-",""],r=1==e?t:n,s=0,i=r.length;s<i;s++)if(t[s]+"Transition"in this.div.style){this.pfObj[e]=r[s];break}return this.pfObj[e]},e.prototype.css=function(e,t,n){for(var r in t)3==n?this.css3(e,r,t[r]):this.css2(e,r,t[r])},e.prototype.css2=function(e,t,n){t.indexOf("-")>-1&&(t=this.convertStyleMode(t,"js")),e.style[t]=n},e.prototype.css3=function(e,t,n){t=t.charAt(0).toUpperCase()+t.substr(1),e.style["Webkit"+t]=n,e.style["Moz"+t]=n,e.style["ms"+t]=n,e.style["O"+t]=n,e.style["o"+t]=n,e.style[""+t]=n},e.prototype.setOriginCenter=function(e){this.css3(e,"transformOrigin","center center")},e.prototype.convertStyleMode=function(e,t){return"js"==t?e.replace(/\-[a-zA-Z0-9]/g,function(e){return"-m"==e?e.substr(1,1).toLowerCase():e.substr(1,1).toUpperCase()}):e.replace(/[A-Z]/g,function(e,t){return 0==t?e.toLowerCase():"-"+e.toLowerCase()})},e.prototype.addClass=function(e,t){var n=e.className,r=""!=n?" ":"";this.hasClass(e,t)||(e.className=n+r+t)},e.prototype.removeClass=function(e,t){if(this.hasClass(e,t)){var n=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(n,"")}},e.prototype.hasClass=function(e,t){return e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)"))},e.prototype.addEventListener=function(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent?e.attachEvent("on"+t.toLowerCase(),n):e["on"+t]=n},e.prototype.removeEventListener=function(e,t,n){e.removeEventListener?e.removeEventListener(t,n,!1):e.attachEvent?e.detachEvent("on"+t.toLowerCase(),n):delete e["on"+t]},e}();t.CssXClass=r;var s=new r;t.CssX=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){if(!e)throw"AniX Error :: element is null!";return e.nodeName?e:e.jquery?e[0]:e.nativeElement};t.getHTMLElement=r},function(e,t,n){"use strict";function r(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}Object.defineProperty(t,"__esModule",{value:!0}),r(n(3)),r(n(0))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4),s=n(5),i=n(0),o=n(1),a=n(6),c=function(){function e(){this.keyword=["nokill","ease","delay","all","class","onStart","onUpdate","onComplete"],this.anis={},this.useTranstionEvent=!1,this.debug=!1,this.compatible=!0,this.ease=s.EASE}return Object.defineProperty(e.prototype,"support",{get:function(){return i.CssX.hasTransition()},enumerable:!0,configurable:!0}),e.prototype.to=function(e,t,n){for(var r="",s=this.getPureStyleKeys(n),o=0;o<s.length;o++){o>0&&(r+=", ");if(/transform/gi.test(s[o])){if(!/transform/gi.test(r)){var a=i.CssX.getPrefix(2);r+=a+"transform"}}else r+=i.CssX.convertStyleMode(s[o],"css");r+=" "+t+"s",n.ease&&(r+=" "+n.ease),n.delay&&(r+=" "+n.delay+"s")}return this.compatible&&!this.support?this.noAniStart(e,r,t,n):this.start(e,r,t,n)},e.prototype.fromTo=function(e,t,n,r){var s=this;this.kill(e),this.setStyle(e,n),setTimeout(function(){s.to(e,t,r)},22.2)},e.prototype.kill=function(e,t){e=o.getHTMLElement(e),i.CssX.css3(e,"transition","none !important"),i.CssX.css3(e,"transition","none"),r.Dic.get(e).id&&clearTimeout(r.Dic.get(e).id),r.Dic.get(e).event&&i.CssX.removeEventListener(e,r.Dic.get(e).event,r.Dic.get(e).handler)},e.prototype.getTransform=function(e){return a.getTransform(e)},e.prototype.get=function(e){return a.getTransform(e)},e.prototype.start=function(e,t,n,s){e=o.getHTMLElement(e);var a=r.Dic.setId(e);return!s.nokill&&this.kill(e),i.CssX.css3(e,"transition",t),this.setStyle(e,s),this.addCallback(e,n,s),this.debug&&console.trace(e,e.__nxid,t),a},e.prototype.noAniStart=function(e,t,n,s){var i=this;e=o.getHTMLElement(e);var a=r.Dic.setId(e);return!s.nokill&&this.kill(e),this.useTranstionEvent=!1,setTimeout(function(){s.delay=0,i.setStyle(e,s),i.addCallback(e,0,s)},50),this.debug&&console.trace(e,e.__nxid,t),a},e.prototype.setStyle=function(e,t){e=o.getHTMLElement(e),i.CssX.css(e,this.getPureStyle(t)),t.className&&i.CssX.addClass(e,t.className)},e.prototype.addCallback=function(e,t,n){var s=n.delay||0,o=1e3*(t+s);n.onStart&&setTimeout(n.onStart,1e3*s),n.onComplete&&(this.useTranstionEvent?(r.Dic.get(e).event=i.CssX.getTranstionEndEvent(),r.Dic.get(e).fun=n.onComplete,r.Dic.get(e).handler=function(e){r.Dic.get(e).fun(),i.CssX.removeEventListener(e,r.Dic.get(e).event,r.Dic.get(e).handler)}.bind(null,e),i.CssX.addEventListener(e,r.Dic.get(e).event,r.Dic.get(e).handler)):r.Dic.get(e).id=setTimeout(n.onComplete,o))},e.prototype.getPureStyleKeys=function(e){if(e.all||e.css||e.className)return["all"];var t=[];for(var n in e)this.keyword.indexOf(n)<0&&t.push(n);return t},e.prototype.getPureStyle=function(e){var t={};for(var n in e)this.keyword.indexOf(n)<0&&(t[n]=e[n]);return t},e}();t.AniXClass=c;var u=new c;t.AniX=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),s=function(){function e(){}return e.setId=function(e){var t=this.id();return e=r.getHTMLElement(e),e.__nxid=e.__nxid||t,this.map[t]=this.map[t]||{},t},e.get=function(e){e=r.getHTMLElement(e);var t=e.__nxid;return t&&this.map[t]||this.setId(e),this.map[e.__nxid]},e.delete=function(e){if("string"==typeof e)delete this.map[e];else{var t=r.getHTMLElement(e);delete this.map[t.__nxid],delete t.__nxid}},e.id=function(){return"xxxx-xxx-xxxx-yxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})},e}();s.map={},t.Dic=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={linear:"linear",easeBasic:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",easeOutCubic:"cubic-bezier(.215,.61,.355,1)",easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)",easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInBack:"cubic-bezier(.6,-.28,.735,.045)",easeOutBack:"cubic-bezier(.175, .885,.32,1.275)",easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"};t.EASE=r},function(e,t,n){"use strict";function r(e){var t="";if(void 0===e.z){if(void 0!==e.x||void 0!==e.y){var n=s(e,"x"),r=s(e,"y");t+=" translate("+n+", "+r+")"}}else void 0!==e.x&&(t+=" translateX("+s(e,"x")+")"),void 0!==e.y&&(t+=" translateY("+s(e,"y")+")"),void 0!==e.z&&(t+=" translateZ("+s(e,"z")+")");void 0!==e.scale?t+=" scale("+e.scale+", "+e.scale+")":(void 0!==e.scaleX&&(t+=" scaleX("+e.scaleX+")"),void 0!==e.scaleY&&(t+=" scaleY("+e.scaleY+")"),void 0!==e.scaleZ&&(t+=" scaleZ("+e.scaleZ+")")),void 0!==e.rotate?t+=" rotate("+e.rotate+"deg)":(void 0!==e.rotateX&&(t+=" rotateX("+e.rotateX+"deg)"),void 0!==e.rotateY&&(t+=" rotateY("+e.rotateY+"deg)"),void 0!==e.rotateZ&&(t+=" rotateZ("+e.rotateZ+"deg)")),void 0!==e.skewX&&(t+=" skewX("+e.skewX+"deg)"),void 0!==e.skewY&&(t+=" skewY("+e.skewY+"deg)"),void 0!==e.perspective&&(t+=" perspective("+e.perspective+")"),e.pre&&(t=e.pre+" "+t);var i={transform:t,"-webkit-transform":t,"-ms-transform":t,"-o-transform":t,"-moz-transform":t};if(e.normal)for(var o in e.normal)i[o]=e.normal[o];return i}function s(e,t){return"string"==typeof e[t]?e[t]:(e[t]||0)+"px"}Object.defineProperty(t,"__esModule",{value:!0}),t.getTransform=r},function(e,t,n){e.exports=n(2)}])});