!function(t){var r={};function e(o){if(r[o])return r[o].exports;var n=r[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,e),n.l=!0,n.exports}e.m=t,e.c=r,e.d=function(t,r,o){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,r){if(1&r&&(t=e(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var n in t)e.d(o,n,function(r){return t[r]}.bind(null,n));return o},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},e.p="",e(e.s=0)}([function(t,r,e){"use strict";e.r(r);class o{constructor(t,r,e){this.id=t,this.name=r,this.city=e}}window.profileComponent=new class{constructor(t,r){this.profileService=t,this.errorHandler=r}addProfile(t,r){this.profileService.add(t,r).then(t=>console.log(t)).catch(t=>this.errorHandler.showError(t))}findAllProfiles(){this.profileService.findAll().then(t=>console.log(t)).catch(t=>this.errorHandler.showError(t))}findProfileById(t){this.profileService.findById(t).then(t=>console.log(t)).catch(t=>this.errorHandler.showError(t))}updateProfile(t,r,e){this.profileService.update(t,r,e).then(t=>console.log(t)).catch(t=>this.errorHandler.showError(t))}removeProfile(t){this.profileService.remove(t).then(t=>console.log(t)).catch(t=>this.errorHandler.showError(t))}}(new class{constructor(t){this.serviceUrl="http://localhost:3000/profiles",this.ajaxService=t}add(t,r){try{const e=Math.floor(1e3*Math.random()),n=new o(e,t,r);return this.ajaxService.post(`${this.serviceUrl}`,n)}catch(t){throw t}}findAll(){try{return this.ajaxService.get(this.serviceUrl)}catch(t){throw t}}findById(t){try{return this.ajaxService.get(`${this.serviceUrl}?id=${t}`)}catch(t){throw t}}update(t,r,e){try{const n=new o(t,r,e);return this.ajaxService.put(`${this.serviceUrl}/${t}`,n)}catch(t){throw t}}remove(t){try{return this.ajaxService.delete(`${this.serviceUrl}/${t}`)}catch(t){throw t}}}(new class{constructor(){}async get(t){try{const r=await fetch(t);if(200!==r.status&&201!==r.status)throw new Error(r.statusText);return await r.json()}catch(t){throw t}}async post(t,r){try{const e=await fetch(t,{method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json"}});if(200!==e.status&&201!==e.status)throw new Error(e.statusText);return await e.json()}catch(t){throw t}}async put(t,r){try{const e=await fetch(t,{method:"PUT",body:JSON.stringify(r),headers:{"Content-Type":"application/json"}});if(200!==e.status&&201!==e.status)throw new Error(e.statusText);return await e.json()}catch(t){throw t}}async delete(t){try{const r=await fetch(t,{method:"DELETE"});if(200!==r.status&&201!==r.status)throw new Error(r.statusText);return await r.json()}catch(t){throw t}}}),new class{showError(t){console.log(t.message)}})}]);