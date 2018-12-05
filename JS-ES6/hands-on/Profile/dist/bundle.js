!function(t){var e={};function r(o){if(e[o])return e[o].exports;var n=e[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=e,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(o,n,function(e){return t[e]}.bind(null,n));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){"use strict";r.r(e);class o{constructor(t,e){this.profileService=t,this.errorHandler=e,this.findAllProfiles()}addProfile(t,e){this.profileService.add(t,e).then(t=>console.log(t)).catch(t=>this.errorHandler.showError(t))}findAllProfiles(){this.profileService.findAll().then(t=>{const e=document.getElementsByClassName("container")[0];console.log(t);const r=document.createElement("ul");r.className=["m-4","p-0"].join(" ");let o=null;const n=["p-2","profile"];t.forEach((t,e)=>{(o=document.createElement("li")).innerText=e+1+" - "+t.name,o.className=n.join(" "),r.appendChild(o)}),e.appendChild(r)}).catch(t=>this.errorHandler.showError(t))}findProfileById(t){this.profileService.findById(t).then(t=>console.log(t)).catch(t=>this.errorHandler.showError(t))}updateProfile(t,e,r){this.profileService.update(t,e,r).then(t=>console.log(t)).catch(t=>this.errorHandler.showError(t))}removeProfile(t){this.profileService.remove(t).then(t=>console.log(t)).catch(t=>this.errorHandler.showError(t))}}class n{constructor(t,e,r){this.id=t,this.name=e,this.city=r}}class s{constructor(t){this.serviceUrl="http://localhost:3000/profiles",this.ajaxService=t}add(t,e){try{const r=Math.floor(1e3*Math.random()),o=new n(r,t,e);return this.ajaxService.post(`${this.serviceUrl}`,o)}catch(t){throw t}}findAll(){try{return this.ajaxService.get(this.serviceUrl)}catch(t){throw t}}findById(t){try{return this.ajaxService.get(`${this.serviceUrl}?id=${t}`)}catch(t){throw t}}update(t,e,r){try{const o=new n(t,e,r);return this.ajaxService.put(`${this.serviceUrl}/${t}`,o)}catch(t){throw t}}remove(t){try{return this.ajaxService.delete(`${this.serviceUrl}/${t}`)}catch(t){throw t}}}class i{showError(t){console.log(t.message)}}class a{constructor(){}async get(t){try{const e=await fetch(t);if(200!==e.status&&201!==e.status)throw new Error(e.statusText);return await e.json()}catch(t){throw t}}async post(t,e){try{const r=await fetch(t,{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}});if(200!==r.status&&201!==r.status)throw new Error(r.statusText);return await r.json()}catch(t){throw t}}async put(t,e){try{const r=await fetch(t,{method:"PUT",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}});if(200!==r.status&&201!==r.status)throw new Error(r.statusText);return await r.json()}catch(t){throw t}}async delete(t){try{const e=await fetch(t,{method:"DELETE"});if(200!==e.status&&201!==e.status)throw new Error(e.statusText);return await e.json()}catch(t){throw t}}}window.onload=function(){new o(new s(new a),new i)}}]);