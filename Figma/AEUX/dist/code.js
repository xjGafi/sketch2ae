!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=20)}({20:function(e,t){var n=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))(function(r,a){function o(e){try{f(i.next(e))}catch(e){a(e)}}function s(e){try{f(i.throw(e))}catch(e){a(e)}}function f(e){e.done?r(e.value):new n(function(t){t(e.value)}).then(o,s)}f((i=i.apply(e,t||[])).next())})};let i;figma.showUI(__html__,{width:166,height:180});let r=[],a=[],o=[],s=[],f={exportRefImage:!1,imgSaveDialog:!1};function l(e,t,i){return n(this,void 0,void 0,function*(){console.log("layers",t);for(const t in e){const n=e[t].hash,i=e[t].id.replace(/:/g,"-").replace(/\s*(\/|\\)\s*/g,"-");try{let e=figma.getImageByHash(n),t=yield e.getBytesAsync();o.push({name:i,bytes:t})}catch(e){}}o.length>0?figma.ui.postMessage({type:"fetchImagesAndAEUX",images:o,data:t,refImg:i}):figma.ui.postMessage({type:"fetchAEUX",data:t})})}function c(e){try{return"FRAME"!==e.type&&("COMPONENT"!==e.type||"PAGE"!==e.parent.type)||"FRAME"===e.type&&"FRAME"===e.parent.type?c(e.parent):(i=!0,e)}catch(e){figma.ui.postMessage({type:"footerMsg",action:"Error in findFrame() 😖",layerCount:null})}}figma.ui.onmessage=e=>{if("getPrefs"===e.type&&figma.clientStorage.getAsync("aeux.prefs").then(t=>t?(figma.ui.postMessage({type:"retPrefs",prefs:t}),t):(figma.clientStorage.setAsync("aeux.prefs",e.defaultPrefs).then(()=>{figma.ui.postMessage({type:"retPrefs",prefs:e.defaultPrefs})}),e.defaultPrefs)).then(e=>{f=e}),"setPrefs"===e.type&&figma.clientStorage.setAsync("aeux.prefs",e.prefs).then(t=>{figma.ui.postMessage(e.prefs),f=e.prefs}),e.type,"exportSelection"===e.type){i=!1,r=[],a=[],o=[],s=[];let n=!1;if(e.exportJSON&&(n=!0),figma.currentPage.selection.length<1)return void figma.ui.postMessage({type:"fetchAEUX",data:null});try{let e=function e(t){if(t.length<1)return[];let n=[];t[0]&&("FRAME"===t[0].type&&"PAGE"===t[0].parent.type||"COMPONENT"===t[0].type&&"PAGE"===t[0].parent.type)&&(console.log("GOT A FRAME"),i=!0,r.push(a(t[0],!1)),t=t[0].children);if(t.length<1)return[];t.forEach(e=>{if(!i){if("PAGE"===e.parent.type)return;let t=c(e),n=a(t,!0);n.children=[],r.push(n)}let t=a(e,!1);n.push(t)});return n;function a(t,n){let i=!1,r={children:[],type:null};t.name&&"*"==t.name.charAt(0)&&(console.log("rasterize",t),s.push(t.id),i=!0);for(const a in t)try{let o=t[a];if("children"!==a||n||i||(o=e(o)),"backgrounds"===a&&(o=e(o)),"fills"===a&&o.length>0){let e=!1;for(const t in o){const n=o[t];"IMAGE"==n.type&&(e=!0,r.rasterize=!0)}e&&s.push(t.id)}if(o==figma.mixed&&"cornerRadius"===a&&(o=Math.min(t.topLeftRadius,t.topRightRadius,t.bottomLeftRadius,t.bottomRightRadius)),o==figma.mixed){let e="getRange"+a.replace(/^\w/,e=>e.toUpperCase());try{o=t[e](0,1)}catch(e){continue}}r[a]=o}catch(e){console.log("ERROR",e)}return"FRAME"===t.type&&"NONE"!==t.layoutMode&&(r.type="AUTOLAYOUT"),r}}(figma.currentPage.selection);r[0].children.length<1&&(r[0].children=e)}catch(e){console.log(e),console.log("selected layers need to be inside of a frame"),figma.ui.postMessage({type:"footerMsg",action:"Layers must be inside of a frame",layerCount:null})}let u,g,p=null;if(f.exportRefImage){let e=(g=c(figma.currentPage.selection[0])).name.replace(/\s*(\/|\\)\s*/g,"-"),t=figma.createRectangle();t.x=g.x,t.y=g.y,t.resize(g.width,g.height),(u=figma.group([t],t.parent)).appendChild(g),t.isMask=!0,s.push(g.id),p={type:"Image",name:e,id:g.id.replace(/:/g,"-"),frame:{x:g.width/2,y:g.height/2,width:g.width,height:g.height},isVisible:!0,opacity:50,blendMode:"BlendingMode.NORMAL",isMask:!1,rotation:0,guide:!0}}if(s.length>0){function t(e,t){setTimeout(()=>{let n,i=figma.getNodeById(e),r=[];i.effects&&((n=function(e){return JSON.parse(JSON.stringify(e))}(i.effects)).forEach(e=>{r.push(e.visible),"DROP_SHADOW"!=e.type&&"LAYER_BLUR"!=e.type||(e.visible=!1)}),i.effects=n);let o=Math.min(3500/Math.max(i.width,i.height),3);i.exportAsync({format:"PNG",useAbsoluteBounds:!0,constraint:{type:"SCALE",value:o}}).then(t=>{a.push({hash:figma.createImage(t).hash,id:`${i.name.replace(/^\*\s/,"").replace(/^\*/,"")}_${e}`})});for(let e=0;e<r.length;e++)n[e].visible=r[e];i.effects=n,t()},100)}let e=(s=[...new Set(s)]).map(e=>new Promise(n=>{t(e,n)}));Promise.all(e).then(()=>l(a,r,p)).then(()=>{u.parent.appendChild(g),u.remove()})}else n?figma.ui.postMessage({type:"exportAEUX",data:r}):a.length<1?figma.ui.postMessage({type:"fetchAEUX",data:r}):l(a,r,null)}if("addRasterizeFlag"===e.type){if(figma.currentPage.selection.length<1)return;let e=function(e,t){return e.forEach(e=>{"*"!==e.name.charAt(0)&&(e.name=`* ${e.name}`,t++)}),t}(figma.currentPage.selection,0)||0;figma.currentPage.selection=figma.currentPage.selection,figma.ui.postMessage({type:"footerMsg",action:"marked as PNG",layerCount:e})}}}});