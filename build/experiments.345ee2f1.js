!function(t,e){for(var n in e)t[n]=e[n]}(this,function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p=window.Altis.Analytics.Experiments.BuildURL,n(n.s=185)}({10:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},11:function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},12:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},13:function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},14:function(t,e,n){var r=n(25),i=n(10);t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?i(t):e}},15:function(t,e,n){var r=n(33);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},17:function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},18:function(t,e){t.exports=function(t,e){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}return n}}},185:function(t,e,n){"use strict";n.r(e);var r=n(6),i=n.n(r),o=n(12),a=n.n(o),s=n(13),c=n.n(s),u=n(14),l=n.n(u),f=n(11),d=n.n(f),p=n(10),h=n.n(p),y=n(15),v=n.n(y),g=n(57),b=n.n(g),w=n(4),m=n.n(w);function A(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function x(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?A(Object(n),!0).forEach((function(e){m()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function I(t){var e=t.getBoundingClientRect();return e.top>=0&&e.left>=0&&e.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&e.right<=(window.innerWidth||document.documentElement.clientWidth)}window.Altis.Analytics.Experiments=window.Altis.Analytics.Experiments||{};var k=function(t){function e(){var t,n;a()(this,e);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return n=l()(this,(t=d()(e)).call.apply(t,[this].concat(i))),m()(h()(n),"storageKey","_altis_ab_tests"),n}return v()(e,t),c()(e,[{key:"connectedCallback",value:function(){var t=new RegExp("(utm_campaign|set_test)=test_".concat(this.testIdWithPost,":(\\d+)"),"i"),e=unescape(window.location.search).match(t);e&&this.addTestForUser(m()({},this.testIdWithPost,parseInt(e[2],10))),this.init()}},{key:"init",value:function(){window.console&&window.console.error("Children of Class Test must implement an init() method.")}},{key:"getTestsForUser",value:function(){return JSON.parse(window.localStorage.getItem(this.storageKey))||{}}},{key:"addTestForUser",value:function(t){window.localStorage.setItem(this.storageKey,JSON.stringify(x({},this.getTestsForUser(),{},t)))}},{key:"getVariantId",value:function(){var t=this.testIdWithPost,e=this.trafficPercentage,n=this.getTestsForUser(),r=!1;if(void 0!==n[t]&&!1!==n[t]&&n[t]<this.variants.length)r=n[t];else{if(!1===n[t])return r;if(100*Math.random()>e)return this.addTestForUser(m()({},t,!1)),r;var i=100*Math.random();r=0;for(var o=0,a=0;a<this.variants.length;a++)if(i<(o+=parseFloat(this.variantWeights[a]||100/this.variants.length))){r=a;break}this.addTestForUser(m()({},t,r))}return window.Altis&&window.Altis.Analytics&&window.Altis.Analytics.registerAttribute("test_".concat(t),r),r}},{key:"testId",get:function(){return this.getAttribute("test-id")}},{key:"postId",get:function(){return this.getAttribute("post-id")}},{key:"testIdWithPost",get:function(){return"".concat(this.testId,"_").concat(this.postId)}},{key:"trafficPercentage",get:function(){return parseFloat(this.getAttribute("traffic-percentage"))}},{key:"variants",get:function(){return JSON.parse(this.getAttribute("variants"))||[]}},{key:"variantWeights",get:function(){return(JSON.parse(this.getAttribute("variant-weights"))||[]).map(parseFloat)}},{key:"fallback",get:function(){return this.getAttribute("fallback")}},{key:"goal",get:function(){return this.getAttribute("goal")}},{key:"selector",get:function(){return this.getAttribute("selector")}},{key:"closest",get:function(){return this.getAttribute("closest")}}]),e}(b()(HTMLElement)),O=function(t){function e(){return a()(this,e),l()(this,d()(e).apply(this,arguments))}return v()(e,t),c()(e,[{key:"init",value:function(){var t=this.getVariantId();if(!1!==t){var e=this.testId,n=this.postId,r=this.parentNode,o=this.goal.split(":"),a=this.closest,s=i()(o,2),c=s[0],u=s[1],l=void 0===u?this.selector:u,f=this.variants[t||0];this.outerHTML=f;var d=P(c,{selector:l,closest:a});c&&d&&d(r,(function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};window.Altis.Analytics.record(c,{attributes:x({},r,{eventTestId:e,eventPostId:n,eventVariantId:t}),metrics:x({},i)})}))}else this.outerHTML=this.fallback}}]),e}(k),S=function(t){function e(){return a()(this,e),l()(this,d()(e).apply(this,arguments))}return v()(e,t),c()(e,[{key:"init",value:function(){this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML="\n\t\t\t<style>\n\t\t\t\t:host {\n\t\t\t\t\tdisplay: block;\n\t\t\t\t}\n\t\t\t</style>\n\t\t\t<slot></slot>\n\t\t",this.setContent()}},{key:"setContent",value:function(){var t=this;if(!1!==this.winner)return this.innerHTML="",void this.appendChild(this.winner.content.cloneNode(!0));if(this.paused)return this.innerHTML="",void this.appendChild(this.variants[0].content.cloneNode(!0));var e=this.getVariantId(),n=this.variants[e||0];if(n){var r=n.content.cloneNode(!0);if(this.innerHTML="",this.appendChild(r),!1!==e){var i=n.dataset.goal||this.goal||!1,o={eventTestId:this.testId,eventPostId:this.postId,eventVariantId:e};window.Altis.Analytics.record("experienceLoad",{attributes:x({clientId:this.clientId,type:"ab-test"},o)});var a=!1,s=window.addEventListener("scroll",(function(){I(t)&&!a&&(a=!0,window.removeEventListener("scroll",s),window.Altis.Analytics.record("experienceView",{attributes:x({clientId:t.clientId,type:"ab-test"},o)}))}));window.scroll();var c=P(i);if(c){var u=!1;c(this,(function(e){u||(u=!0,window.Altis.Analytics.record("conversion",{attributes:x({clientId:t.clientId,goal:i,type:e.type},o)}))}))}}}}},{key:"clientId",get:function(){return this.getAttribute("client-id")}},{key:"paused",get:function(){return this.hasAttribute("paused")}},{key:"testId",get:function(){return"xb"}},{key:"variants",get:function(){return document.querySelectorAll('template[data-parent-id="'.concat(this.clientId,'"]'))}},{key:"variantWeights",get:function(){var t=this;return Array.from(this.variants).map((function(e){return parseFloat(e.dataset.weight||100/t.variants.length)}))}},{key:"winner",get:function(){return this.hasAttribute("winner")&&this.variants[parseInt(this.getAttribute("winner"),10)]||!1}}]),e}(k),j={},T=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];j[t]={callback:e,closest:Array.isArray(n)?n:[n]}},E=function(t,e,n){return t&&t.addEventListener(n,(function(n){"function"==typeof e?e(n):console.error("Altis Analytics goal handler is not a function",t,n)}))},P=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=x({name:t,event:t,callback:E},window.Altis.Analytics.Experiments.Goals[t]||{},{},j[t]||{},{},e);return function(t,e){n.closest&&(t=t.closest(n.closest)),n.selector?t.querySelectorAll(n.selector).forEach((function(t){return n.callback(t,e,n.event)})):n.callback(t,e,n.event)}};T("click",(function(t,e){if(t){var n={elementNode:t.nodeName||"",elementText:t.innerText||"",elementClassName:t.className||"",elementId:t.id||"",elementHref:t.href||""};t.addEventListener("click",(function(t){e(Object.assign({},n,{targetNode:t.target.nodeName||"",targetText:t.target.innerText||"",targetClassName:t.target.className||"",targetId:t.target.id||"",targetSrc:"IMG"===t.target.nodeName?t.target.src:""}))}))}}),["a"]);var _=function(t){function e(){var t,n;a()(this,e);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return n=l()(this,(t=d()(e)).call.apply(t,[this].concat(i))),m()(h()(n),"setContent",(function(){for(var t,e=window.Altis.Analytics.getAudiences()||[],r=0,i=!1,o=0;o<e.length;o++)if(t=document.querySelector('template[data-audience="'.concat(e[o],'"][data-parent-id="').concat(n.clientId,'"]'))){r=e[o],i=t.dataset.goal;break}if(!r){if(!(t=document.querySelector('template[data-fallback][data-parent-id="'.concat(n.clientId,'"]'))))return;i=t.dataset.goal}if(n.audience!==r){n.audience=r;var a=t.content.cloneNode(!0);n.innerHTML="",n.appendChild(a),window.Altis.Analytics.record("experienceLoad",{attributes:{audience:r,clientId:n.clientId,type:"personalization"}});var s=!1,c=window.addEventListener("scroll",(function(){I(h()(n))&&!s&&(s=!0,window.removeEventListener("scroll",c),window.Altis.Analytics.record("experienceView",{attributes:{audience:r,clientId:n.clientId,type:"personalization"}}))}));window.scroll();var u=P(i);if(u){var l=!1;u(h()(n),(function(t){l||(l=!0,window.Altis.Analytics.record("conversion",{attributes:{audience:r,clientId:n.clientId,goal:i,type:t.type}}))}))}}})),n}return v()(e,t),c()(e,[{key:"connectedCallback",value:function(){this.audience=!1,this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML="\n\t\t\t<style>\n\t\t\t\t:host {\n\t\t\t\t\tdisplay: block;\n\t\t\t\t}\n\t\t\t</style>\n\t\t\t<slot></slot>\n\t\t",this.setContent(),window.Altis.Analytics.on("updateAudiences",this.setContent)}},{key:"clientId",get:function(){return this.getAttribute("client-id")}}]),e}(b()(HTMLElement));window.Altis.Analytics.Experiments.registerGoal=T,window.Altis.Analytics.Experiments.registerGoalHandler=T,window.Altis.Analytics.onReady((function(){window.customElements.define("ab-test",O),window.customElements.define("ab-test-block",S),window.customElements.define("personalization-block",_)}));var M=new CustomEvent("altis.experiments.ready");window.dispatchEvent(M)},186:function(t,e){t.exports=function(t){return-1!==Function.toString.call(t).indexOf("[native code]")}},187:function(t,e,n){var r=n(33);function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function o(e,n,a){return i()?t.exports=o=Reflect.construct:t.exports=o=function(t,e,n){var i=[null];i.push.apply(i,e);var o=new(Function.bind.apply(t,i));return n&&r(o,n.prototype),o},o.apply(null,arguments)}t.exports=o},19:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},25:function(t,e){function n(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},33:function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},4:function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},57:function(t,e,n){var r=n(11),i=n(33),o=n(186),a=n(187);function s(e){var n="function"==typeof Map?new Map:void 0;return t.exports=s=function(t){if(null===t||!o(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,e)}function e(){return a(t,arguments,r(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),i(e,t)},s(e)}t.exports=s},6:function(t,e,n){var r=n(17),i=n(18),o=n(19);t.exports=function(t,e){return r(t)||i(t,e)||o()}}}));