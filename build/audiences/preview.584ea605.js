!function(e,t){for(var r in t)e[r]=t[r]}(this,function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=207)}({0:function(e,t){!function(){e.exports=this.React}()},13:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},14:function(e,t,r){var n=r(13);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},207:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),a=r(32),i=r.n(a),l=r(7),u=r.n(l),s=r(8),c=r.n(s);function f(){var e=Object(n.useState)(Altis.Analytics.getAudiences()),t=c()(e,2),r=t[0],a=t[1],i=window.AltisExperimentsPreview,l=i.audiences,s=i.editLabel,f=i.editUrl,p=i.label;Object(n.useEffect)((function(){a(Altis.Analytics.getAudiences());var e=Altis.Analytics.on("updateAudiences",(function(){a(Altis.Analytics.getAudiences())}));return function(){Altis.Analytics.off(e)}}),[]);return o.a.createElement(o.a.Fragment,null,o.a.createElement("a",{className:"ab-item",href:"#qm-overview"},p),o.a.createElement("div",{className:"ab-sub-wrapper"},o.a.createElement("ul",{className:"ab-submenu"},l.map((function(e){return o.a.createElement("li",{key:e.id,className:"aa-preview-item"},o.a.createElement("a",{className:"ab-item ".concat((t=e.id,r.indexOf(t)>=0?"altis-analytics-preview-selected":"")),href:"#",role:"button",onClick:function(t){return function(e,t){if(e.preventDefault(),r.indexOf(t)>=0){var n=r.filter((function(e){return e!==t}));a(n),Altis.Analytics.overrideAudiences(n)}else{var o=[].concat(u()(r),[t]);a(o),Altis.Analytics.overrideAudiences(o)}}(t,e.id)}},e.title));var t})),0===l.length&&o.a.createElement("li",null,o.a.createElement("a",{className:"ab-item",href:f},s)))))}Altis.Analytics.onReady((function(){var e=document.getElementById("wp-admin-bar-altis-analytics-preview");if(e){for(;e.firstChild;)e.removeChild(e.firstChild);i.a.render(o.a.createElement(f,null),e)}}))},22:function(e,t,r){var n=r(13);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},23:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},24:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},25:function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.__esModule=!0,e.exports.default=e.exports},26:function(e,t){e.exports=function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(l)throw o}}return a}},e.exports.__esModule=!0,e.exports.default=e.exports},27:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},32:function(e,t){!function(){e.exports=this.ReactDOM}()},7:function(e,t,r){var n=r(22),o=r(23),a=r(14),i=r(24);e.exports=function(e){return n(e)||o(e)||a(e)||i()},e.exports.__esModule=!0,e.exports.default=e.exports},8:function(e,t,r){var n=r(25),o=r(26),a=r(14),i=r(27);e.exports=function(e,t){return n(e)||o(e,t)||a(e,t)||i()},e.exports.__esModule=!0,e.exports.default=e.exports}}));