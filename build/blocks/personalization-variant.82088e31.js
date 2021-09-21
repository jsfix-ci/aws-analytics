!function(e,t){for(var n in t)e[n]=t[n]}(this,function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=185)}({0:function(e,t){!function(){e.exports=this.React}()},185:function(e,t,n){"use strict";n.r(t);var r=n(4),o=n.n(r),i=n(51),a=n(0),l=n.n(a),c=n(7),s=n.n(c),u=wp.serverSideRender,f=wp.blocks.serialize,p=wp.components,d=p.Disabled,b=p.Spinner,v=p.withNotices,y=wp.data.useDispatch,m=wp.i18n,g=m.__,O=m.sprintf,h=new MutationObserver((function(e){var t=!0,n=!1,r=void 0;try{for(var o,i=e[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){var a=o.value,l=new CustomEvent("updated");a.target.dispatchEvent(l)}}catch(e){n=!0,r=e}finally{try{t||null==i.return||i.return()}finally{if(n)throw r}}})),k=l.a.memo((function(e){var t=e.content;return l.a.createElement(u,{attributes:{content:t},block:"altis/shim",httpMethod:"POST",LoadingResponsePlaceholder:function(){return l.a.createElement("div",{className:"altis-variant-validation__loading"},l.a.createElement(b,null)," ",g("Validating...","altis-analytics"))}})})),w=v((function(e){var t=e.blocks,n=e.clientId,r=e.goal,o=e.noticeOperations,i=e.noticeUI,c=Object(a.useState)(null),u=s()(c,2),p=u[0],b=u[1],v=y("core/block-editor").updateBlockAttributes,m=Object(a.useCallback)((function(e){b(e)}),[]);return Object(a.useEffect)((function(){if(p){var e=Altis.Analytics.Experiments.Goals[r]||null;if(!e||!e.selector)return o.removeAllNotices(),void v(n,{isValid:!0});var t=function(){o.removeAllNotices(),p.querySelector(e.selector)?v(n,{isValid:!0}):(o.createErrorNotice(e.args&&e.args.validation_message||O(g('This variant does not meet the requirements for the "%s" conversion goal yet.',"altis-analytics"),e.label)),v(n,{isValid:!1}))};t();var i=p.addEventListener("updated",t);return h.observe(p,{childList:!0}),function(){h.disconnect(),p.removeEventListener("update",i)}}}),[n,p,r,o,v]),r&&""!==r?l.a.createElement("div",{className:"altis-variant-validation"},l.a.createElement(d,null,l.a.createElement("div",{ref:m,style:{display:"none",position:"absolute"}},l.a.createElement(k,{content:f(t)}))),i):null})),j=wp.blockEditor.InnerBlocks,E=wp.compose.compose,S=wp.data,P=S.withSelect,x=S.withDispatch,_=E(P((function(e,t){var n=t.clientId,r=e("core/block-editor"),o=r.getBlockOrder;return{blocks:(0,r.getBlocks)(n),hasChildBlocks:o(n).length>0}})),x((function(e,t,n){var r=t.clientId,o=n.select("core/block-editor").getBlockRootClientId,i=e("core/block-editor").selectBlock,a=o(r);return{onSelect:function(){return i(a)}}})))((function(e){var t=e.attributes,n=e.blocks,r=e.clientId,o=e.hasChildBlocks,i=e.isSelected,c=e.onSelect;Object(a.useEffect)((function(){i&&c()}),[i,c]);var s={};return o||(s.renderAppender=function(){return l.a.createElement(j.DefaultBlockAppender,null)}),l.a.createElement("div",{"data-block":r,"data-type":"altis/personalization-variant"},l.a.createElement(w,{blocks:n,clientId:r,goal:t.goal}),l.a.createElement(j,s))})),B=wp.blockEditor.InnerBlocks,A=function(){return l.a.createElement(B.Content,null)};function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var D=wp.blocks.registerBlockType,C=wp.i18n.__,N=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({title:C("Personalized Content Variant","altis-analytics"),description:C("Personalized content block items","altis-analytics"),edit:_,save:A},i.settings);D(i.name,N)},20:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},21:function(e,t){e.exports=function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,l=e[Symbol.iterator]();!(r=(a=l.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==l.return||l.return()}finally{if(o)throw i}}return n}}},22:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},4:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},51:function(e){e.exports=JSON.parse('{"name":"altis/personalization-variant","settings":{"category":"altis-experience-blocks","icon":"groups","parent":["altis/personalization"],"supports":{"reusable":false,"html":false,"lightBlockWrapper":true,"inserter":false},"attributes":{"audience":{"type":"number"},"fallback":{"type":"boolean"},"goal":{"type":"string","default":""},"isValid":{"type":"boolean","default":true}}}}')},7:function(e,t,n){var r=n(20),o=n(21),i=n(22);e.exports=function(e,t){return r(e)||o(e,t)||i()}}}));