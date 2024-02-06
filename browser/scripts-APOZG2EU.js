(function(A,I){typeof exports=="object"&&typeof module<"u"?module.exports=I():typeof define=="function"&&define.amd?define("underscore",I):(A=typeof globalThis<"u"?globalThis:A||self,function(){var T=A._,k=A._=I();k.noConflict=function(){return A._=T,k}}())})(this,function(){var A="1.13.6",I=typeof self=="object"&&self.self===self&&self||typeof global=="object"&&global.global===global&&global||Function("return this")()||{},T=Array.prototype,k=Object.prototype,wt=typeof Symbol<"u"?Symbol.prototype:null,En=T.push,V=T.slice,P=k.toString,Bn=k.hasOwnProperty,At=typeof ArrayBuffer<"u",Nn=typeof DataView<"u",In=Array.isArray,xt=Object.keys,St=Object.create,Ot=At&&ArrayBuffer.isView,Tn=isNaN,kn=isFinite,Mt=!{toString:null}.propertyIsEnumerable("toString"),Et=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],Dn=Math.pow(2,53)-1;function y(t,n){return n=n==null?t.length-1:+n,function(){for(var r=Math.max(arguments.length-n,0),e=Array(r),i=0;i<r;i++)e[i]=arguments[i+n];switch(n){case 0:return t.call(this,e);case 1:return t.call(this,arguments[0],e);case 2:return t.call(this,arguments[0],arguments[1],e)}var u=Array(n+1);for(i=0;i<n;i++)u[i]=arguments[i];return u[n]=e,t.apply(this,u)}}function S(t){var n=typeof t;return n==="function"||n==="object"&&!!t}function Bt(t){return t===void 0}function Nt(t){return t===!0||t===!1||P.call(t)==="[object Boolean]"}function v(t){var n="[object "+t+"]";return function(r){return P.call(r)===n}}var Q=v("String"),It=v("Number"),Rn=v("Date"),Fn=v("RegExp"),Vn=v("Error"),Tt=v("Symbol"),kt=v("ArrayBuffer"),Dt=v("Function"),Pn=I.document&&I.document.childNodes;typeof/./!="function"&&typeof Int8Array!="object"&&typeof Pn!="function"&&(Dt=function(t){return typeof t=="function"||!1});var h=Dt,Rt=v("Object"),Ft=Nn&&Rt(new DataView(new ArrayBuffer(8))),X=typeof Map<"u"&&Rt(new Map),qn=v("DataView"),$=Ft?function(t){return t!=null&&h(t.getInt8)&&kt(t.buffer)}:qn,O=In||v("Array");function x(t,n){return t!=null&&Bn.call(t,n)}var Y=v("Arguments");(function(){Y(arguments)||(Y=function(t){return x(t,"callee")})})();var Z=Y;function Vt(t){return It(t)&&Tn(t)}function Pt(t){return function(){return t}}function qt(t){return function(n){var r=t(n);return typeof r=="number"&&r>=0&&r<=Dn}}function Ut(t){return function(n){return n?.[t]}}var C=Ut("byteLength"),Un=qt(C),Wn=/\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/,Wt=At?function(t){return Ot?Ot(t)&&!$(t):Un(t)&&Wn.test(P.call(t))}:Pt(!1),d=Ut("length");function zt(t,n){n=function(o){for(var a={},f=o.length,c=0;c<f;++c)a[o[c]]=!0;return{contains:function(s){return a[s]===!0},push:function(s){return a[s]=!0,o.push(s)}}}(n);var r=Et.length,e=t.constructor,i=h(e)&&e.prototype||k,u="constructor";for(x(t,u)&&!n.contains(u)&&n.push(u);r--;)(u=Et[r])in t&&t[u]!==i[u]&&!n.contains(u)&&n.push(u)}function p(t){if(!S(t))return[];if(xt)return xt(t);var n=[];for(var r in t)x(t,r)&&n.push(r);return Mt&&zt(t,n),n}function Lt(t,n){var r=p(n),e=r.length;if(t==null)return!e;for(var i=Object(t),u=0;u<e;u++){var o=r[u];if(n[o]!==i[o]||!(o in i))return!1}return!0}function l(t){return t instanceof l?t:this instanceof l?void(this._wrapped=t):new l(t)}function $t(t){return new Uint8Array(t.buffer||t,t.byteOffset||0,C(t))}l.VERSION=A,l.prototype.value=function(){return this._wrapped},l.prototype.valueOf=l.prototype.toJSON=l.prototype.value,l.prototype.toString=function(){return String(this._wrapped)};var Ct="[object DataView]";function tt(t,n,r,e){if(t===n)return t!==0||1/t==1/n;if(t==null||n==null)return!1;if(t!=t)return n!=n;var i=typeof t;return(i==="function"||i==="object"||typeof n=="object")&&function u(o,a,f,c){o instanceof l&&(o=o._wrapped),a instanceof l&&(a=a._wrapped);var s=P.call(o);if(s!==P.call(a))return!1;if(Ft&&s=="[object Object]"&&$(o)){if(!$(a))return!1;s=Ct}switch(s){case"[object RegExp]":case"[object String]":return""+o==""+a;case"[object Number]":return+o!=+o?+a!=+a:+o==0?1/+o==1/a:+o==+a;case"[object Date]":case"[object Boolean]":return+o==+a;case"[object Symbol]":return wt.valueOf.call(o)===wt.valueOf.call(a);case"[object ArrayBuffer]":case Ct:return u($t(o),$t(a),f,c)}var g=s==="[object Array]";if(!g&&Wt(o)){if(C(o)!==C(a))return!1;if(o.buffer===a.buffer&&o.byteOffset===a.byteOffset)return!0;g=!0}if(!g){if(typeof o!="object"||typeof a!="object")return!1;var B=o.constructor,N=a.constructor;if(B!==N&&!(h(B)&&B instanceof B&&h(N)&&N instanceof N)&&"constructor"in o&&"constructor"in a)return!1}c=c||[];for(var j=(f=f||[]).length;j--;)if(f[j]===o)return c[j]===a;if(f.push(o),c.push(a),g){if((j=o.length)!==a.length)return!1;for(;j--;)if(!tt(o[j],a[j],f,c))return!1}else{var H,Mn=p(o);if(j=Mn.length,p(a).length!==j)return!1;for(;j--;)if(H=Mn[j],!x(a,H)||!tt(o[H],a[H],f,c))return!1}return f.pop(),c.pop(),!0}(t,n,r,e)}function q(t){if(!S(t))return[];var n=[];for(var r in t)n.push(r);return Mt&&zt(t,n),n}function nt(t){var n=d(t);return function(r){if(r==null)return!1;var e=q(r);if(d(e))return!1;for(var i=0;i<n;i++)if(!h(r[t[i]]))return!1;return t!==Gt||!h(r[rt])}}var rt="forEach",Kt="has",et=["clear","delete"],Jt=["get",Kt,"set"],zn=et.concat(rt,Jt),Gt=et.concat(Jt),Ln=["add"].concat(et,rt,Kt),$n=X?nt(zn):v("Map"),Cn=X?nt(Gt):v("WeakMap"),Kn=X?nt(Ln):v("Set"),Jn=v("WeakSet");function D(t){for(var n=p(t),r=n.length,e=Array(r),i=0;i<r;i++)e[i]=t[n[i]];return e}function Ht(t){for(var n={},r=p(t),e=0,i=r.length;e<i;e++)n[t[r[e]]]=r[e];return n}function ut(t){var n=[];for(var r in t)h(t[r])&&n.push(r);return n.sort()}function it(t,n){return function(r){var e=arguments.length;if(n&&(r=Object(r)),e<2||r==null)return r;for(var i=1;i<e;i++)for(var u=arguments[i],o=t(u),a=o.length,f=0;f<a;f++){var c=o[f];n&&r[c]!==void 0||(r[c]=u[c])}return r}}var Qt=it(q),K=it(p),Xt=it(q,!0);function Yt(t){if(!S(t))return{};if(St)return St(t);var n=function(){};n.prototype=t;var r=new n;return n.prototype=null,r}function Zt(t){return O(t)?t:[t]}function U(t){return l.toPath(t)}function ot(t,n){for(var r=n.length,e=0;e<r;e++){if(t==null)return;t=t[n[e]]}return r?t:void 0}function tn(t,n,r){var e=ot(t,U(n));return Bt(e)?r:e}function at(t){return t}function W(t){return t=K({},t),function(n){return Lt(n,t)}}function ft(t){return t=U(t),function(n){return ot(n,t)}}function z(t,n,r){if(n===void 0)return t;switch(r??3){case 1:return function(e){return t.call(n,e)};case 3:return function(e,i,u){return t.call(n,e,i,u)};case 4:return function(e,i,u,o){return t.call(n,e,i,u,o)}}return function(){return t.apply(n,arguments)}}function nn(t,n,r){return t==null?at:h(t)?z(t,n,r):S(t)&&!O(t)?W(t):ft(t)}function ct(t,n){return nn(t,n,1/0)}function m(t,n,r){return l.iteratee!==ct?l.iteratee(t,n):nn(t,n,r)}function rn(){}function lt(t,n){return n==null&&(n=t,t=0),t+Math.floor(Math.random()*(n-t+1))}l.toPath=Zt,l.iteratee=ct;var L=Date.now||function(){return new Date().getTime()};function en(t){var n=function(u){return t[u]},r="(?:"+p(t).join("|")+")",e=RegExp(r),i=RegExp(r,"g");return function(u){return u=u==null?"":""+u,e.test(u)?u.replace(i,n):u}}var un={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},Gn=en(un),Hn=en(Ht(un)),Qn=l.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g},st=/(.)^/,Xn={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},Yn=/\\|'|\r|\n|\u2028|\u2029/g;function Zn(t){return"\\"+Xn[t]}var tr=/^\s*(\w|\$)+\s*$/,nr=0;function on(t,n,r,e,i){if(!(e instanceof n))return t.apply(r,i);var u=Yt(t.prototype),o=t.apply(u,i);return S(o)?o:u}var R=y(function(t,n){var r=R.placeholder,e=function(){for(var i=0,u=n.length,o=Array(u),a=0;a<u;a++)o[a]=n[a]===r?arguments[i++]:n[a];for(;i<arguments.length;)o.push(arguments[i++]);return on(t,e,this,this,o)};return e});R.placeholder=l;var an=y(function(t,n,r){if(!h(t))throw new TypeError("Bind must be called on a function");var e=y(function(i){return on(t,e,n,this,r.concat(i))});return e}),b=qt(d);function M(t,n,r,e){if(e=e||[],n||n===0){if(n<=0)return e.concat(t)}else n=1/0;for(var i=e.length,u=0,o=d(t);u<o;u++){var a=t[u];if(b(a)&&(O(a)||Z(a)))if(n>1)M(a,n-1,r,e),i=e.length;else for(var f=0,c=a.length;f<c;)e[i++]=a[f++];else r||(e[i++]=a)}return e}var rr=y(function(t,n){var r=(n=M(n,!1,!1)).length;if(r<1)throw new Error("bindAll must be passed function names");for(;r--;){var e=n[r];t[e]=an(t[e],t)}return t}),fn=y(function(t,n,r){return setTimeout(function(){return t.apply(null,r)},n)}),er=R(fn,l,1);function pt(t){return function(){return!t.apply(this,arguments)}}function cn(t,n){var r;return function(){return--t>0&&(r=n.apply(this,arguments)),t<=1&&(n=null),r}}var ur=R(cn,2);function ln(t,n,r){n=m(n,r);for(var e,i=p(t),u=0,o=i.length;u<o;u++)if(n(t[e=i[u]],e,t))return e}function sn(t){return function(n,r,e){r=m(r,e);for(var i=d(n),u=t>0?0:i-1;u>=0&&u<i;u+=t)if(r(n[u],u,n))return u;return-1}}var vt=sn(1),pn=sn(-1);function vn(t,n,r,e){for(var i=(r=m(r,e,1))(n),u=0,o=d(t);u<o;){var a=Math.floor((u+o)/2);r(t[a])<i?u=a+1:o=a}return u}function hn(t,n,r){return function(e,i,u){var o=0,a=d(e);if(typeof u=="number")t>0?o=u>=0?u:Math.max(u+a,o):a=u>=0?Math.min(u+1,a):u+a+1;else if(r&&u&&a)return e[u=r(e,i)]===i?u:-1;if(i!=i)return(u=n(V.call(e,o,a),Vt))>=0?u+o:-1;for(u=t>0?o:a-1;u>=0&&u<a;u+=t)if(e[u]===i)return u;return-1}}var gn=hn(1,vt,vn),ir=hn(-1,pn);function ht(t,n,r){var e=(b(t)?vt:ln)(t,n,r);if(e!==void 0&&e!==-1)return t[e]}function _(t,n,r){var e,i;if(n=z(n,r),b(t))for(e=0,i=t.length;e<i;e++)n(t[e],e,t);else{var u=p(t);for(e=0,i=u.length;e<i;e++)n(t[u[e]],u[e],t)}return t}function E(t,n,r){n=m(n,r);for(var e=!b(t)&&p(t),i=(e||t).length,u=Array(i),o=0;o<i;o++){var a=e?e[o]:o;u[o]=n(t[a],a,t)}return u}function yn(t){var n=function(r,e,i,u){var o=!b(r)&&p(r),a=(o||r).length,f=t>0?0:a-1;for(u||(i=r[o?o[f]:f],f+=t);f>=0&&f<a;f+=t){var c=o?o[f]:f;i=e(i,r[c],c,r)}return i};return function(r,e,i,u){var o=arguments.length>=3;return n(r,z(e,u,4),i,o)}}var gt=yn(1),dn=yn(-1);function F(t,n,r){var e=[];return n=m(n,r),_(t,function(i,u,o){n(i,u,o)&&e.push(i)}),e}function mn(t,n,r){n=m(n,r);for(var e=!b(t)&&p(t),i=(e||t).length,u=0;u<i;u++){var o=e?e[u]:u;if(!n(t[o],o,t))return!1}return!0}function bn(t,n,r){n=m(n,r);for(var e=!b(t)&&p(t),i=(e||t).length,u=0;u<i;u++){var o=e?e[u]:u;if(n(t[o],o,t))return!0}return!1}function w(t,n,r,e){return b(t)||(t=D(t)),(typeof r!="number"||e)&&(r=0),gn(t,n,r)>=0}var or=y(function(t,n,r){var e,i;return h(n)?i=n:(n=U(n),e=n.slice(0,-1),n=n[n.length-1]),E(t,function(u){var o=i;if(!o){if(e&&e.length&&(u=ot(u,e)),u==null)return;o=u[n]}return o==null?o:o.apply(u,r)})});function yt(t,n){return E(t,ft(n))}function jn(t,n,r){var e,i,u=-1/0,o=-1/0;if(n==null||typeof n=="number"&&typeof t[0]!="object"&&t!=null)for(var a=0,f=(t=b(t)?t:D(t)).length;a<f;a++)(e=t[a])!=null&&e>u&&(u=e);else n=m(n,r),_(t,function(c,s,g){((i=n(c,s,g))>o||i===-1/0&&u===-1/0)&&(u=c,o=i)});return u}var ar=/[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;function _n(t){return t?O(t)?V.call(t):Q(t)?t.match(ar):b(t)?E(t,at):D(t):[]}function wn(t,n,r){if(n==null||r)return b(t)||(t=D(t)),t[lt(t.length-1)];var e=_n(t),i=d(e);n=Math.max(Math.min(n,i),0);for(var u=i-1,o=0;o<n;o++){var a=lt(o,u),f=e[o];e[o]=e[a],e[a]=f}return e.slice(0,n)}function J(t,n){return function(r,e,i){var u=n?[[],[]]:{};return e=m(e,i),_(r,function(o,a){var f=e(o,a,r);t(u,o,f)}),u}}var fr=J(function(t,n,r){x(t,r)?t[r].push(n):t[r]=[n]}),cr=J(function(t,n,r){t[r]=n}),lr=J(function(t,n,r){x(t,r)?t[r]++:t[r]=1}),sr=J(function(t,n,r){t[r?0:1].push(n)},!0);function pr(t,n,r){return n in r}var An=y(function(t,n){var r={},e=n[0];if(t==null)return r;h(e)?(n.length>1&&(e=z(e,n[1])),n=q(t)):(e=pr,n=M(n,!1,!1),t=Object(t));for(var i=0,u=n.length;i<u;i++){var o=n[i],a=t[o];e(a,o,t)&&(r[o]=a)}return r}),vr=y(function(t,n){var r,e=n[0];return h(e)?(e=pt(e),n.length>1&&(r=n[1])):(n=E(M(n,!1,!1),String),e=function(i,u){return!w(n,u)}),An(t,e,r)});function xn(t,n,r){return V.call(t,0,Math.max(0,t.length-(n==null||r?1:n)))}function dt(t,n,r){return t==null||t.length<1?n==null||r?void 0:[]:n==null||r?t[0]:xn(t,t.length-n)}function G(t,n,r){return V.call(t,n==null||r?1:n)}var Sn=y(function(t,n){return n=M(n,!0,!0),F(t,function(r){return!w(n,r)})}),hr=y(function(t,n){return Sn(t,n)});function mt(t,n,r,e){Nt(n)||(e=r,r=n,n=!1),r!=null&&(r=m(r,e));for(var i=[],u=[],o=0,a=d(t);o<a;o++){var f=t[o],c=r?r(f,o,t):f;n&&!r?(o&&u===c||i.push(f),u=c):r?w(u,c)||(u.push(c),i.push(f)):w(i,f)||i.push(f)}return i}var gr=y(function(t){return mt(M(t,!0,!0))});function bt(t){for(var n=t&&jn(t,d).length||0,r=Array(n),e=0;e<n;e++)r[e]=yt(t,e);return r}var yr=y(bt);function jt(t,n){return t._chain?l(n).chain():n}function On(t){return _(ut(t),function(n){var r=l[n]=t[n];l.prototype[n]=function(){var e=[this._wrapped];return En.apply(e,arguments),jt(this,r.apply(l,e))}}),l}_(["pop","push","reverse","shift","sort","splice","unshift"],function(t){var n=T[t];l.prototype[t]=function(){var r=this._wrapped;return r!=null&&(n.apply(r,arguments),t!=="shift"&&t!=="splice"||r.length!==0||delete r[0]),jt(this,r)}}),_(["concat","join","slice"],function(t){var n=T[t];l.prototype[t]=function(){var r=this._wrapped;return r!=null&&(r=n.apply(r,arguments)),jt(this,r)}});var _t=On({__proto__:null,VERSION:A,restArguments:y,isObject:S,isNull:function(t){return t===null},isUndefined:Bt,isBoolean:Nt,isElement:function(t){return!(!t||t.nodeType!==1)},isString:Q,isNumber:It,isDate:Rn,isRegExp:Fn,isError:Vn,isSymbol:Tt,isArrayBuffer:kt,isDataView:$,isArray:O,isFunction:h,isArguments:Z,isFinite:function(t){return!Tt(t)&&kn(t)&&!isNaN(parseFloat(t))},isNaN:Vt,isTypedArray:Wt,isEmpty:function(t){if(t==null)return!0;var n=d(t);return typeof n=="number"&&(O(t)||Q(t)||Z(t))?n===0:d(p(t))===0},isMatch:Lt,isEqual:function(t,n){return tt(t,n)},isMap:$n,isWeakMap:Cn,isSet:Kn,isWeakSet:Jn,keys:p,allKeys:q,values:D,pairs:function(t){for(var n=p(t),r=n.length,e=Array(r),i=0;i<r;i++)e[i]=[n[i],t[n[i]]];return e},invert:Ht,functions:ut,methods:ut,extend:Qt,extendOwn:K,assign:K,defaults:Xt,create:function(t,n){var r=Yt(t);return n&&K(r,n),r},clone:function(t){return S(t)?O(t)?t.slice():Qt({},t):t},tap:function(t,n){return n(t),t},get:tn,has:function(t,n){for(var r=(n=U(n)).length,e=0;e<r;e++){var i=n[e];if(!x(t,i))return!1;t=t[i]}return!!r},mapObject:function(t,n,r){n=m(n,r);for(var e=p(t),i=e.length,u={},o=0;o<i;o++){var a=e[o];u[a]=n(t[a],a,t)}return u},identity:at,constant:Pt,noop:rn,toPath:Zt,property:ft,propertyOf:function(t){return t==null?rn:function(n){return tn(t,n)}},matcher:W,matches:W,times:function(t,n,r){var e=Array(Math.max(0,t));n=z(n,r,1);for(var i=0;i<t;i++)e[i]=n(i);return e},random:lt,now:L,escape:Gn,unescape:Hn,templateSettings:Qn,template:function(t,n,r){!n&&r&&(n=r),n=Xt({},n,l.templateSettings);var e=RegExp([(n.escape||st).source,(n.interpolate||st).source,(n.evaluate||st).source].join("|")+"|$","g"),i=0,u="__p+='";t.replace(e,function(c,s,g,B,N){return u+=t.slice(i,N).replace(Yn,Zn),i=N+c.length,s?u+=`'+
((__t=(`+s+`))==null?'':_.escape(__t))+
'`:g?u+=`'+
((__t=(`+g+`))==null?'':__t)+
'`:B&&(u+=`';
`+B+`
__p+='`),c}),u+=`';
`;var o,a=n.variable;if(a){if(!tr.test(a))throw new Error("variable is not a bare identifier: "+a)}else u=`with(obj||{}){
`+u+`}
`,a="obj";u=`var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
`+u+`return __p;
`;try{o=new Function(a,"_",u)}catch(c){throw c.source=u,c}var f=function(c){return o.call(this,c,l)};return f.source="function("+a+`){
`+u+"}",f},result:function(t,n,r){var e=(n=U(n)).length;if(!e)return h(r)?r.call(t):r;for(var i=0;i<e;i++){var u=t?.[n[i]];u===void 0&&(u=r,i=e),t=h(u)?u.call(t):u}return t},uniqueId:function(t){var n=++nr+"";return t?t+n:n},chain:function(t){var n=l(t);return n._chain=!0,n},iteratee:ct,partial:R,bind:an,bindAll:rr,memoize:function(t,n){var r=function(e){var i=r.cache,u=""+(n?n.apply(this,arguments):e);return x(i,u)||(i[u]=t.apply(this,arguments)),i[u]};return r.cache={},r},delay:fn,defer:er,throttle:function(t,n,r){var e,i,u,o,a=0;r||(r={});var f=function(){a=r.leading===!1?0:L(),e=null,o=t.apply(i,u),e||(i=u=null)},c=function(){var s=L();a||r.leading!==!1||(a=s);var g=n-(s-a);return i=this,u=arguments,g<=0||g>n?(e&&(clearTimeout(e),e=null),a=s,o=t.apply(i,u),e||(i=u=null)):e||r.trailing===!1||(e=setTimeout(f,g)),o};return c.cancel=function(){clearTimeout(e),a=0,e=i=u=null},c},debounce:function(t,n,r){var e,i,u,o,a,f=function(){var s=L()-i;n>s?e=setTimeout(f,n-s):(e=null,r||(o=t.apply(a,u)),e||(u=a=null))},c=y(function(s){return a=this,u=s,i=L(),e||(e=setTimeout(f,n),r&&(o=t.apply(a,u))),o});return c.cancel=function(){clearTimeout(e),e=u=a=null},c},wrap:function(t,n){return R(n,t)},negate:pt,compose:function(){var t=arguments,n=t.length-1;return function(){for(var r=n,e=t[n].apply(this,arguments);r--;)e=t[r].call(this,e);return e}},after:function(t,n){return function(){if(--t<1)return n.apply(this,arguments)}},before:cn,once:ur,findKey:ln,findIndex:vt,findLastIndex:pn,sortedIndex:vn,indexOf:gn,lastIndexOf:ir,find:ht,detect:ht,findWhere:function(t,n){return ht(t,W(n))},each:_,forEach:_,map:E,collect:E,reduce:gt,foldl:gt,inject:gt,reduceRight:dn,foldr:dn,filter:F,select:F,reject:function(t,n,r){return F(t,pt(m(n)),r)},every:mn,all:mn,some:bn,any:bn,contains:w,includes:w,include:w,invoke:or,pluck:yt,where:function(t,n){return F(t,W(n))},max:jn,min:function(t,n,r){var e,i,u=1/0,o=1/0;if(n==null||typeof n=="number"&&typeof t[0]!="object"&&t!=null)for(var a=0,f=(t=b(t)?t:D(t)).length;a<f;a++)(e=t[a])!=null&&e<u&&(u=e);else n=m(n,r),_(t,function(c,s,g){((i=n(c,s,g))<o||i===1/0&&u===1/0)&&(u=c,o=i)});return u},shuffle:function(t){return wn(t,1/0)},sample:wn,sortBy:function(t,n,r){var e=0;return n=m(n,r),yt(E(t,function(i,u,o){return{value:i,index:e++,criteria:n(i,u,o)}}).sort(function(i,u){var o=i.criteria,a=u.criteria;if(o!==a){if(o>a||o===void 0)return 1;if(o<a||a===void 0)return-1}return i.index-u.index}),"value")},groupBy:fr,indexBy:cr,countBy:lr,partition:sr,toArray:_n,size:function(t){return t==null?0:b(t)?t.length:p(t).length},pick:An,omit:vr,first:dt,head:dt,take:dt,initial:xn,last:function(t,n,r){return t==null||t.length<1?n==null||r?void 0:[]:n==null||r?t[t.length-1]:G(t,Math.max(0,t.length-n))},rest:G,tail:G,drop:G,compact:function(t){return F(t,Boolean)},flatten:function(t,n){return M(t,n,!1)},without:hr,uniq:mt,unique:mt,union:gr,intersection:function(t){for(var n=[],r=arguments.length,e=0,i=d(t);e<i;e++){var u=t[e];if(!w(n,u)){var o;for(o=1;o<r&&w(arguments[o],u);o++);o===r&&n.push(u)}}return n},difference:Sn,unzip:bt,transpose:bt,zip:yr,object:function(t,n){for(var r={},e=0,i=d(t);e<i;e++)n?r[t[e]]=n[e]:r[t[e][0]]=t[e][1];return r},range:function(t,n,r){n==null&&(n=t||0,t=0),r||(r=n<t?-1:1);for(var e=Math.max(Math.ceil((n-t)/r),0),i=Array(e),u=0;u<e;u++,t+=r)i[u]=t;return i},chunk:function(t,n){if(n==null||n<1)return[];for(var r=[],e=0,i=t.length;e<i;)r.push(V.call(t,e,e+=n));return r},mixin:On,default:l});return _t._=_t,_t});
