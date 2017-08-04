if("undefined"==typeof jQuery){var jQuery;jQuery="function"==typeof require?$=require("jquery"):$}jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(t,e,n,a,r){return jQuery.easing[jQuery.easing.def](t,e,n,a,r)},easeInQuad:function(t,e,n,a,r){return a*(e/=r)*e+n},easeOutQuad:function(t,e,n,a,r){return-a*(e/=r)*(e-2)+n},easeInOutQuad:function(t,e,n,a,r){return(e/=r/2)<1?a/2*e*e+n:-a/2*(--e*(e-2)-1)+n},easeInCubic:function(t,e,n,a,r){return a*(e/=r)*e*e+n},easeOutCubic:function(t,e,n,a,r){return a*((e=e/r-1)*e*e+1)+n},easeInOutCubic:function(t,e,n,a,r){return(e/=r/2)<1?a/2*e*e*e+n:a/2*((e-=2)*e*e+2)+n},easeInQuart:function(t,e,n,a,r){return a*(e/=r)*e*e*e+n},easeOutQuart:function(t,e,n,a,r){return-a*((e=e/r-1)*e*e*e-1)+n},easeInOutQuart:function(t,e,n,a,r){return(e/=r/2)<1?a/2*e*e*e*e+n:-a/2*((e-=2)*e*e*e-2)+n},easeInQuint:function(t,e,n,a,r){return a*(e/=r)*e*e*e*e+n},easeOutQuint:function(t,e,n,a,r){return a*((e=e/r-1)*e*e*e*e+1)+n},easeInOutQuint:function(t,e,n,a,r){return(e/=r/2)<1?a/2*e*e*e*e*e+n:a/2*((e-=2)*e*e*e*e+2)+n},easeInSine:function(t,e,n,a,r){return-a*Math.cos(e/r*(Math.PI/2))+a+n},easeOutSine:function(t,e,n,a,r){return a*Math.sin(e/r*(Math.PI/2))+n},easeInOutSine:function(t,e,n,a,r){return-a/2*(Math.cos(Math.PI*e/r)-1)+n},easeInExpo:function(t,e,n,a,r){return 0==e?n:a*Math.pow(2,10*(e/r-1))+n},easeOutExpo:function(t,e,n,a,r){return e==r?n+a:a*(-Math.pow(2,-10*e/r)+1)+n},easeInOutExpo:function(t,e,n,a,r){return 0==e?n:e==r?n+a:(e/=r/2)<1?a/2*Math.pow(2,10*(e-1))+n:a/2*(-Math.pow(2,-10*--e)+2)+n},easeInCirc:function(t,e,n,a,r){return-a*(Math.sqrt(1-(e/=r)*e)-1)+n},easeOutCirc:function(t,e,n,a,r){return a*Math.sqrt(1-(e=e/r-1)*e)+n},easeInOutCirc:function(t,e,n,a,r){return(e/=r/2)<1?-a/2*(Math.sqrt(1-e*e)-1)+n:a/2*(Math.sqrt(1-(e-=2)*e)+1)+n},easeInElastic:function(t,e,n,a,r){var u=1.70158,i=0,o=a;if(0==e)return n;if(1==(e/=r))return n+a;if(i||(i=.3*r),o<Math.abs(a)){o=a;var u=i/4}else var u=i/(2*Math.PI)*Math.asin(a/o);return-(o*Math.pow(2,10*(e-=1))*Math.sin((e*r-u)*(2*Math.PI)/i))+n},easeOutElastic:function(t,e,n,a,r){var u=1.70158,i=0,o=a;if(0==e)return n;if(1==(e/=r))return n+a;if(i||(i=.3*r),o<Math.abs(a)){o=a;var u=i/4}else var u=i/(2*Math.PI)*Math.asin(a/o);return o*Math.pow(2,-10*e)*Math.sin((e*r-u)*(2*Math.PI)/i)+a+n},easeInOutElastic:function(t,e,n,a,r){var u=1.70158,i=0,o=a;if(0==e)return n;if(2==(e/=r/2))return n+a;if(i||(i=r*(.3*1.5)),o<Math.abs(a)){o=a;var u=i/4}else var u=i/(2*Math.PI)*Math.asin(a/o);return 1>e?-.5*(o*Math.pow(2,10*(e-=1))*Math.sin((e*r-u)*(2*Math.PI)/i))+n:o*Math.pow(2,-10*(e-=1))*Math.sin((e*r-u)*(2*Math.PI)/i)*.5+a+n},easeInBack:function(t,e,n,a,r,u){return void 0==u&&(u=1.70158),a*(e/=r)*e*((u+1)*e-u)+n},easeOutBack:function(t,e,n,a,r,u){return void 0==u&&(u=1.70158),a*((e=e/r-1)*e*((u+1)*e+u)+1)+n},easeInOutBack:function(t,e,n,a,r,u){return void 0==u&&(u=1.70158),(e/=r/2)<1?a/2*(e*e*(((u*=1.525)+1)*e-u))+n:a/2*((e-=2)*e*(((u*=1.525)+1)*e+u)+2)+n},easeInBounce:function(t,e,n,a,r){return a-jQuery.easing.easeOutBounce(t,r-e,0,a,r)+n},easeOutBounce:function(t,e,n,a,r){return(e/=r)<1/2.75?a*(7.5625*e*e)+n:2/2.75>e?a*(7.5625*(e-=1.5/2.75)*e+.75)+n:2.5/2.75>e?a*(7.5625*(e-=2.25/2.75)*e+.9375)+n:a*(7.5625*(e-=2.625/2.75)*e+.984375)+n},easeInOutBounce:function(t,e,n,a,r){return r/2>e?.5*jQuery.easing.easeInBounce(t,2*e,0,a,r)+n:.5*jQuery.easing.easeOutBounce(t,2*e-r,0,a,r)+.5*a+n}}),function(t){"use strict";function e(t){return null!==t&&t===t.window}function n(t){return e(t)?t:9===t.nodeType&&t.defaultView}function a(t){var e,a,r={top:0,left:0},u=t&&t.ownerDocument;return e=u.documentElement,"undefined"!=typeof t.getBoundingClientRect&&(r=t.getBoundingClientRect()),a=n(u),{top:r.top+a.pageYOffset-e.clientTop,left:r.left+a.pageXOffset-e.clientLeft}}function r(t){var e="";for(var n in t)t.hasOwnProperty(n)&&(e+=n+":"+t[n]+";");return e}function u(t){if(f.allowEvent(t)===!1)return null;for(var e=null,n=t.target||t.srcElement;null!==n.parentElement;){if(!(n instanceof SVGElement||-1===n.className.indexOf("waves-effect"))){e=n;break}if(n.classList.contains("waves-effect")){e=n;break}n=n.parentElement}return e}function i(e){var n=u(e);null!==n&&(c.show(e,n),"ontouchstart"in t&&(n.addEventListener("touchend",c.hide,!1),n.addEventListener("touchcancel",c.hide,!1)),n.addEventListener("mouseup",c.hide,!1),n.addEventListener("mouseleave",c.hide,!1))}var o=o||{},s=document.querySelectorAll.bind(document),c={duration:750,show:function(t,e){if(2===t.button)return!1;var n=e||this,u=document.createElement("div");u.className="waves-ripple",n.appendChild(u);var i=a(n),o=t.pageY-i.top,s=t.pageX-i.left,f="scale("+n.clientWidth/100*10+")";"touches"in t&&(o=t.touches[0].pageY-i.top,s=t.touches[0].pageX-i.left),u.setAttribute("data-hold",Date.now()),u.setAttribute("data-scale",f),u.setAttribute("data-x",s),u.setAttribute("data-y",o);var d={top:o+"px",left:s+"px"};u.className=u.className+" waves-notransition",u.setAttribute("style",r(d)),u.className=u.className.replace("waves-notransition",""),d["-webkit-transform"]=f,d["-moz-transform"]=f,d["-ms-transform"]=f,d["-o-transform"]=f,d.transform=f,d.opacity="1",d["-webkit-transition-duration"]=c.duration+"ms",d["-moz-transition-duration"]=c.duration+"ms",d["-o-transition-duration"]=c.duration+"ms",d["transition-duration"]=c.duration+"ms",d["-webkit-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",d["-moz-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",d["-o-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",d["transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",u.setAttribute("style",r(d))},hide:function(t){f.touchup(t);var e=this,n=(1.4*e.clientWidth,null),a=e.getElementsByClassName("waves-ripple");if(!(a.length>0))return!1;n=a[a.length-1];var u=n.getAttribute("data-x"),i=n.getAttribute("data-y"),o=n.getAttribute("data-scale"),s=Date.now()-Number(n.getAttribute("data-hold")),d=350-s;0>d&&(d=0),setTimeout(function(){var t={top:i+"px",left:u+"px",opacity:"0","-webkit-transition-duration":c.duration+"ms","-moz-transition-duration":c.duration+"ms","-o-transition-duration":c.duration+"ms","transition-duration":c.duration+"ms","-webkit-transform":o,"-moz-transform":o,"-ms-transform":o,"-o-transform":o,transform:o};n.setAttribute("style",r(t)),setTimeout(function(){try{e.removeChild(n)}catch(t){return!1}},c.duration)},d)},wrapInput:function(t){for(var e=0;e<t.length;e++){var n=t[e];if("input"===n.tagName.toLowerCase()){var a=n.parentNode;if("i"===a.tagName.toLowerCase()&&-1!==a.className.indexOf("waves-effect"))continue;var r=document.createElement("i");r.className=n.className+" waves-input-wrapper";var u=n.getAttribute("style");u||(u=""),r.setAttribute("style",u),n.className="waves-button-input",n.removeAttribute("style"),a.replaceChild(r,n),r.appendChild(n)}}}},f={touches:0,allowEvent:function(t){var e=!0;return"touchstart"===t.type?f.touches+=1:"touchend"===t.type||"touchcancel"===t.type?setTimeout(function(){f.touches>0&&(f.touches-=1)},500):"mousedown"===t.type&&f.touches>0&&(e=!1),e},touchup:function(t){f.allowEvent(t)}};o.displayEffect=function(e){e=e||{},"duration"in e&&(c.duration=e.duration),c.wrapInput(s(".waves-effect")),"ontouchstart"in t&&document.body.addEventListener("touchstart",i,!1),document.body.addEventListener("mousedown",i,!1)},o.attach=function(e){"input"===e.tagName.toLowerCase()&&(c.wrapInput([e]),e=e.parentElement),"ontouchstart"in t&&e.addEventListener("touchstart",i,!1),e.addEventListener("mousedown",i,!1)},t.Waves=o,document.addEventListener("DOMContentLoaded",function(){o.displayEffect()},!1)}(window);