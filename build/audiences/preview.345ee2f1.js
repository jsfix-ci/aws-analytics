!function(e,t){for(var n in t)e[n]=t[n]}(this,function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=196)}({0:function(e,t){!function(){e.exports=this.React}()},17:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},18:function(e,t){e.exports=function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],r=!0,i=!1,a=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){i=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(i)throw a}}return n}}},19:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},196:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),a=n(24),o=n.n(a),c=n(8),u=n.n(c),l=n(6),s=n.n(l);function f(){var e=Object(r.useState)(Altis.Analytics.getAudiences()),t=s()(e,2),n=t[0],a=t[1],o=window.AltisExperimentsPreview,c=o.audiences,l=o.editLabel,f=o.editUrl,d=o.label;Object(r.useEffect)((function(){a(Altis.Analytics.getAudiences());var e=Altis.Analytics.on("updateAudiences",(function(){a(Altis.Analytics.getAudiences())}));return function(){Altis.Analytics.off(e)}}),[]);return i.a.createElement(i.a.Fragment,null,i.a.createElement("a",{className:"ab-item",href:"#qm-overview"},d),i.a.createElement("div",{className:"ab-sub-wrapper"},i.a.createElement("ul",{className:"ab-submenu"},c.map((function(e){return i.a.createElement("li",{key:e.id,className:"aa-preview-item"},i.a.createElement("a",{className:"ab-item ".concat((t=e.id,n.indexOf(t)>=0?"altis-analytics-preview-selected":"")),href:"#",role:"button",onClick:function(t){return function(e,t){if(e.preventDefault(),n.indexOf(t)>=0){var r=n.filter((function(e){return e!==t}));a(r),Altis.Analytics.overrideAudiences(r)}else{var i=[].concat(u()(n),[t]);a(i),Altis.Analytics.overrideAudiences(i)}}(t,e.id)}},e.title));var t})),0===c.length&&i.a.createElement("li",null,i.a.createElement("a",{className:"ab-item",href:f},l)))))}Altis.Analytics.onReady((function(){var e=document.getElementById("wp-admin-bar-altis-analytics-preview");if(e){for(;e.firstChild;)e.removeChild(e.firstChild);o.a.render(i.a.createElement(f,null),e)}}))},24:function(e,t){!function(){e.exports=this.ReactDOM}()},26:function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},27:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},28:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},6:function(e,t,n){var r=n(17),i=n(18),a=n(19);e.exports=function(e,t){return r(e)||i(e,t)||a()}},8:function(e,t,n){var r=n(26),i=n(27),a=n(28);e.exports=function(e){return r(e)||i(e)||a()}}}));