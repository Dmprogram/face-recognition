/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 252:
/***/ (function(module) {



// do not edit .js files directly - edit src/index.jst



module.exports = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }



    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      var key = keys[i];

      if (key === '_owner' && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner.
        //  _owner contains circular references
        // and is not needed when comparing the actual elements (and not their owners)
        continue;
      }

      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  // true if both NaN, false otherwise
  return a!==a && b!==b;
};


/***/ }),

/***/ 448:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
var aa=__webpack_require__(294),ca=__webpack_require__(840);function p(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var da=new Set,ea={};function fa(a,b){ha(a,b);ha(a+"Capture",b)}
function ha(a,b){ea[a]=b;for(a=0;a<b.length;a++)da.add(b[a])}
var ia=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),ja=Object.prototype.hasOwnProperty,ka=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,la=
{},ma={};function oa(a){if(ja.call(ma,a))return!0;if(ja.call(la,a))return!1;if(ka.test(a))return ma[a]=!0;la[a]=!0;return!1}function pa(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function qa(a,b,c,d){if(null===b||"undefined"===typeof b||pa(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function v(a,b,c,d,e,f,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f;this.removeEmptyString=g}var z={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){z[a]=new v(a,0,!1,a,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];z[b]=new v(b,1,!1,a[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){z[a]=new v(a,2,!1,a.toLowerCase(),null,!1,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){z[a]=new v(a,2,!1,a,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){z[a]=new v(a,3,!1,a.toLowerCase(),null,!1,!1)});
["checked","multiple","muted","selected"].forEach(function(a){z[a]=new v(a,3,!0,a,null,!1,!1)});["capture","download"].forEach(function(a){z[a]=new v(a,4,!1,a,null,!1,!1)});["cols","rows","size","span"].forEach(function(a){z[a]=new v(a,6,!1,a,null,!1,!1)});["rowSpan","start"].forEach(function(a){z[a]=new v(a,5,!1,a.toLowerCase(),null,!1,!1)});var ra=/[\-:]([a-z])/g;function sa(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(ra,
sa);z[b]=new v(b,1,!1,a,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(ra,sa);z[b]=new v(b,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(ra,sa);z[b]=new v(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(a){z[a]=new v(a,1,!1,a.toLowerCase(),null,!1,!1)});
z.xlinkHref=new v("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(a){z[a]=new v(a,1,!1,a.toLowerCase(),null,!0,!0)});
function ta(a,b,c,d){var e=z.hasOwnProperty(b)?z[b]:null;if(null!==e?0!==e.type:d||!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1])qa(b,c,e,d)&&(c=null),d||null===e?oa(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c)))}
var ua=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,va=Symbol.for("react.element"),wa=Symbol.for("react.portal"),ya=Symbol.for("react.fragment"),za=Symbol.for("react.strict_mode"),Aa=Symbol.for("react.profiler"),Ba=Symbol.for("react.provider"),Ca=Symbol.for("react.context"),Da=Symbol.for("react.forward_ref"),Ea=Symbol.for("react.suspense"),Fa=Symbol.for("react.suspense_list"),Ga=Symbol.for("react.memo"),Ha=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");
var Ia=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var Ja=Symbol.iterator;function Ka(a){if(null===a||"object"!==typeof a)return null;a=Ja&&a[Ja]||a["@@iterator"];return"function"===typeof a?a:null}var A=Object.assign,La;function Ma(a){if(void 0===La)try{throw Error();}catch(c){var b=c.stack.trim().match(/\n( *(at )?)/);La=b&&b[1]||""}return"\n"+La+a}var Na=!1;
function Oa(a,b){if(!a||Na)return"";Na=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(b)if(b=function(){throw Error();},Object.defineProperty(b.prototype,"props",{set:function(){throw Error();}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(b,[])}catch(l){var d=l}Reflect.construct(a,[],b)}else{try{b.call()}catch(l){d=l}a.call(b.prototype)}else{try{throw Error();}catch(l){d=l}a()}}catch(l){if(l&&d&&"string"===typeof l.stack){for(var e=l.stack.split("\n"),
f=d.stack.split("\n"),g=e.length-1,h=f.length-1;1<=g&&0<=h&&e[g]!==f[h];)h--;for(;1<=g&&0<=h;g--,h--)if(e[g]!==f[h]){if(1!==g||1!==h){do if(g--,h--,0>h||e[g]!==f[h]){var k="\n"+e[g].replace(" at new "," at ");a.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",a.displayName));return k}while(1<=g&&0<=h)}break}}}finally{Na=!1,Error.prepareStackTrace=c}return(a=a?a.displayName||a.name:"")?Ma(a):""}
function Pa(a){switch(a.tag){case 5:return Ma(a.type);case 16:return Ma("Lazy");case 13:return Ma("Suspense");case 19:return Ma("SuspenseList");case 0:case 2:case 15:return a=Oa(a.type,!1),a;case 11:return a=Oa(a.type.render,!1),a;case 1:return a=Oa(a.type,!0),a;default:return""}}
function Qa(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ya:return"Fragment";case wa:return"Portal";case Aa:return"Profiler";case za:return"StrictMode";case Ea:return"Suspense";case Fa:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case Ca:return(a.displayName||"Context")+".Consumer";case Ba:return(a._context.displayName||"Context")+".Provider";case Da:var b=a.render;a=a.displayName;a||(a=b.displayName||
b.name||"",a=""!==a?"ForwardRef("+a+")":"ForwardRef");return a;case Ga:return b=a.displayName||null,null!==b?b:Qa(a.type)||"Memo";case Ha:b=a._payload;a=a._init;try{return Qa(a(b))}catch(c){}}return null}
function Ra(a){var b=a.type;switch(a.tag){case 24:return"Cache";case 9:return(b.displayName||"Context")+".Consumer";case 10:return(b._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return a=b.render,a=a.displayName||a.name||"",b.displayName||(""!==a?"ForwardRef("+a+")":"ForwardRef");case 7:return"Fragment";case 5:return b;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qa(b);case 8:return b===za?"StrictMode":"Mode";case 22:return"Offscreen";
case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof b)return b.displayName||b.name||null;if("string"===typeof b)return b}return null}function Sa(a){switch(typeof a){case "boolean":case "number":case "string":case "undefined":return a;case "object":return a;default:return""}}
function Ta(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function Ua(a){var b=Ta(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function Va(a){a._valueTracker||(a._valueTracker=Ua(a))}function Wa(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=Ta(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function Xa(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}
function Ya(a,b){var c=b.checked;return A({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}function Za(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Sa(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function ab(a,b){b=b.checked;null!=b&&ta(a,"checked",b,!1)}
function bb(a,b){ab(a,b);var c=Sa(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?cb(a,b.type,c):b.hasOwnProperty("defaultValue")&&cb(a,b.type,Sa(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function db(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
function cb(a,b,c){if("number"!==b||Xa(a.ownerDocument)!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}var eb=Array.isArray;
function fb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+Sa(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function gb(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(p(91));return A({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function hb(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(p(92));if(eb(c)){if(1<c.length)throw Error(p(93));c=c[0]}b=c}null==b&&(b="");c=b}a._wrapperState={initialValue:Sa(c)}}
function ib(a,b){var c=Sa(b.value),d=Sa(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function jb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b)}function kb(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}
function lb(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?kb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var mb,nb=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if("http://www.w3.org/2000/svg"!==a.namespaceURI||"innerHTML"in a)a.innerHTML=b;else{mb=mb||document.createElement("div");mb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=mb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function ob(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}
var pb={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,
zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qb=["Webkit","ms","Moz","O"];Object.keys(pb).forEach(function(a){qb.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);pb[b]=pb[a]})});function rb(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||pb.hasOwnProperty(a)&&pb[a]?(""+b).trim():b+"px"}
function sb(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=rb(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var tb=A({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function ub(a,b){if(b){if(tb[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(p(137,a));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(p(60));if("object"!==typeof b.dangerouslySetInnerHTML||!("__html"in b.dangerouslySetInnerHTML))throw Error(p(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(p(62));}}
function vb(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}var wb=null;function xb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}var yb=null,zb=null,Ab=null;
function Bb(a){if(a=Cb(a)){if("function"!==typeof yb)throw Error(p(280));var b=a.stateNode;b&&(b=Db(b),yb(a.stateNode,a.type,b))}}function Eb(a){zb?Ab?Ab.push(a):Ab=[a]:zb=a}function Fb(){if(zb){var a=zb,b=Ab;Ab=zb=null;Bb(a);if(b)for(a=0;a<b.length;a++)Bb(b[a])}}function Gb(a,b){return a(b)}function Hb(){}var Ib=!1;function Jb(a,b,c){if(Ib)return a(b,c);Ib=!0;try{return Gb(a,b,c)}finally{if(Ib=!1,null!==zb||null!==Ab)Hb(),Fb()}}
function Kb(a,b){var c=a.stateNode;if(null===c)return null;var d=Db(c);if(null===d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;if(c&&"function"!==
typeof c)throw Error(p(231,b,typeof c));return c}var Lb=!1;if(ia)try{var Mb={};Object.defineProperty(Mb,"passive",{get:function(){Lb=!0}});window.addEventListener("test",Mb,Mb);window.removeEventListener("test",Mb,Mb)}catch(a){Lb=!1}function Nb(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l)}catch(m){this.onError(m)}}var Ob=!1,Pb=null,Qb=!1,Rb=null,Sb={onError:function(a){Ob=!0;Pb=a}};function Tb(a,b,c,d,e,f,g,h,k){Ob=!1;Pb=null;Nb.apply(Sb,arguments)}
function Ub(a,b,c,d,e,f,g,h,k){Tb.apply(this,arguments);if(Ob){if(Ob){var l=Pb;Ob=!1;Pb=null}else throw Error(p(198));Qb||(Qb=!0,Rb=l)}}function Vb(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else{a=b;do b=a,0!==(b.flags&4098)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function Wb(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function Xb(a){if(Vb(a)!==a)throw Error(p(188));}
function Yb(a){var b=a.alternate;if(!b){b=Vb(a);if(null===b)throw Error(p(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return Xb(e),a;if(f===d)return Xb(e),b;f=f.sibling}throw Error(p(188));}if(c.return!==d.return)c=e,d=f;else{for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===
c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}if(!g)throw Error(p(189));}}if(c.alternate!==d)throw Error(p(190));}if(3!==c.tag)throw Error(p(188));return c.stateNode.current===c?a:b}function Zb(a){a=Yb(a);return null!==a?$b(a):null}function $b(a){if(5===a.tag||6===a.tag)return a;for(a=a.child;null!==a;){var b=$b(a);if(null!==b)return b;a=a.sibling}return null}
var ac=ca.unstable_scheduleCallback,bc=ca.unstable_cancelCallback,cc=ca.unstable_shouldYield,dc=ca.unstable_requestPaint,B=ca.unstable_now,ec=ca.unstable_getCurrentPriorityLevel,fc=ca.unstable_ImmediatePriority,gc=ca.unstable_UserBlockingPriority,hc=ca.unstable_NormalPriority,ic=ca.unstable_LowPriority,jc=ca.unstable_IdlePriority,kc=null,lc=null;function mc(a){if(lc&&"function"===typeof lc.onCommitFiberRoot)try{lc.onCommitFiberRoot(kc,a,void 0,128===(a.current.flags&128))}catch(b){}}
var oc=Math.clz32?Math.clz32:nc,pc=Math.log,qc=Math.LN2;function nc(a){a>>>=0;return 0===a?32:31-(pc(a)/qc|0)|0}var rc=64,sc=4194304;
function tc(a){switch(a&-a){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return a&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;
default:return a}}function uc(a,b){var c=a.pendingLanes;if(0===c)return 0;var d=0,e=a.suspendedLanes,f=a.pingedLanes,g=c&268435455;if(0!==g){var h=g&~e;0!==h?d=tc(h):(f&=g,0!==f&&(d=tc(f)))}else g=c&~e,0!==g?d=tc(g):0!==f&&(d=tc(f));if(0===d)return 0;if(0!==b&&b!==d&&0===(b&e)&&(e=d&-d,f=b&-b,e>=f||16===e&&0!==(f&4194240)))return b;0!==(d&4)&&(d|=c&16);b=a.entangledLanes;if(0!==b)for(a=a.entanglements,b&=d;0<b;)c=31-oc(b),e=1<<c,d|=a[c],b&=~e;return d}
function vc(a,b){switch(a){case 1:case 2:case 4:return b+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return b+5E3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}
function wc(a,b){for(var c=a.suspendedLanes,d=a.pingedLanes,e=a.expirationTimes,f=a.pendingLanes;0<f;){var g=31-oc(f),h=1<<g,k=e[g];if(-1===k){if(0===(h&c)||0!==(h&d))e[g]=vc(h,b)}else k<=b&&(a.expiredLanes|=h);f&=~h}}function xc(a){a=a.pendingLanes&-1073741825;return 0!==a?a:a&1073741824?1073741824:0}function yc(){var a=rc;rc<<=1;0===(rc&4194240)&&(rc=64);return a}function zc(a){for(var b=[],c=0;31>c;c++)b.push(a);return b}
function Ac(a,b,c){a.pendingLanes|=b;536870912!==b&&(a.suspendedLanes=0,a.pingedLanes=0);a=a.eventTimes;b=31-oc(b);a[b]=c}function Bc(a,b){var c=a.pendingLanes&~b;a.pendingLanes=b;a.suspendedLanes=0;a.pingedLanes=0;a.expiredLanes&=b;a.mutableReadLanes&=b;a.entangledLanes&=b;b=a.entanglements;var d=a.eventTimes;for(a=a.expirationTimes;0<c;){var e=31-oc(c),f=1<<e;b[e]=0;d[e]=-1;a[e]=-1;c&=~f}}
function Cc(a,b){var c=a.entangledLanes|=b;for(a=a.entanglements;c;){var d=31-oc(c),e=1<<d;e&b|a[d]&b&&(a[d]|=b);c&=~e}}var C=0;function Dc(a){a&=-a;return 1<a?4<a?0!==(a&268435455)?16:536870912:4:1}var Ec,Fc,Gc,Hc,Ic,Jc=!1,Kc=[],Lc=null,Mc=null,Nc=null,Oc=new Map,Pc=new Map,Qc=[],Rc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Sc(a,b){switch(a){case "focusin":case "focusout":Lc=null;break;case "dragenter":case "dragleave":Mc=null;break;case "mouseover":case "mouseout":Nc=null;break;case "pointerover":case "pointerout":Oc.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":Pc.delete(b.pointerId)}}
function Tc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a={blockedOn:b,domEventName:c,eventSystemFlags:d,nativeEvent:f,targetContainers:[e]},null!==b&&(b=Cb(b),null!==b&&Fc(b)),a;a.eventSystemFlags|=d;b=a.targetContainers;null!==e&&-1===b.indexOf(e)&&b.push(e);return a}
function Uc(a,b,c,d,e){switch(b){case "focusin":return Lc=Tc(Lc,a,b,c,d,e),!0;case "dragenter":return Mc=Tc(Mc,a,b,c,d,e),!0;case "mouseover":return Nc=Tc(Nc,a,b,c,d,e),!0;case "pointerover":var f=e.pointerId;Oc.set(f,Tc(Oc.get(f)||null,a,b,c,d,e));return!0;case "gotpointercapture":return f=e.pointerId,Pc.set(f,Tc(Pc.get(f)||null,a,b,c,d,e)),!0}return!1}
function Vc(a){var b=Wc(a.target);if(null!==b){var c=Vb(b);if(null!==c)if(b=c.tag,13===b){if(b=Wb(c),null!==b){a.blockedOn=b;Ic(a.priority,function(){Gc(c)});return}}else if(3===b&&c.stateNode.current.memoizedState.isDehydrated){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null}
function Xc(a){if(null!==a.blockedOn)return!1;for(var b=a.targetContainers;0<b.length;){var c=Yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null===c){c=a.nativeEvent;var d=new c.constructor(c.type,c);wb=d;c.target.dispatchEvent(d);wb=null}else return b=Cb(c),null!==b&&Fc(b),a.blockedOn=c,!1;b.shift()}return!0}function Zc(a,b,c){Xc(a)&&c.delete(b)}function $c(){Jc=!1;null!==Lc&&Xc(Lc)&&(Lc=null);null!==Mc&&Xc(Mc)&&(Mc=null);null!==Nc&&Xc(Nc)&&(Nc=null);Oc.forEach(Zc);Pc.forEach(Zc)}
function ad(a,b){a.blockedOn===b&&(a.blockedOn=null,Jc||(Jc=!0,ca.unstable_scheduleCallback(ca.unstable_NormalPriority,$c)))}
function bd(a){function b(b){return ad(b,a)}if(0<Kc.length){ad(Kc[0],a);for(var c=1;c<Kc.length;c++){var d=Kc[c];d.blockedOn===a&&(d.blockedOn=null)}}null!==Lc&&ad(Lc,a);null!==Mc&&ad(Mc,a);null!==Nc&&ad(Nc,a);Oc.forEach(b);Pc.forEach(b);for(c=0;c<Qc.length;c++)d=Qc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<Qc.length&&(c=Qc[0],null===c.blockedOn);)Vc(c),null===c.blockedOn&&Qc.shift()}var cd=ua.ReactCurrentBatchConfig,dd=!0;
function ed(a,b,c,d){var e=C,f=cd.transition;cd.transition=null;try{C=1,fd(a,b,c,d)}finally{C=e,cd.transition=f}}function gd(a,b,c,d){var e=C,f=cd.transition;cd.transition=null;try{C=4,fd(a,b,c,d)}finally{C=e,cd.transition=f}}
function fd(a,b,c,d){if(dd){var e=Yc(a,b,c,d);if(null===e)hd(a,b,d,id,c),Sc(a,d);else if(Uc(e,a,b,c,d))d.stopPropagation();else if(Sc(a,d),b&4&&-1<Rc.indexOf(a)){for(;null!==e;){var f=Cb(e);null!==f&&Ec(f);f=Yc(a,b,c,d);null===f&&hd(a,b,d,id,c);if(f===e)break;e=f}null!==e&&d.stopPropagation()}else hd(a,b,d,null,c)}}var id=null;
function Yc(a,b,c,d){id=null;a=xb(d);a=Wc(a);if(null!==a)if(b=Vb(a),null===b)a=null;else if(c=b.tag,13===c){a=Wb(b);if(null!==a)return a;a=null}else if(3===c){if(b.stateNode.current.memoizedState.isDehydrated)return 3===b.tag?b.stateNode.containerInfo:null;a=null}else b!==a&&(a=null);id=a;return null}
function jd(a){switch(a){case "cancel":case "click":case "close":case "contextmenu":case "copy":case "cut":case "auxclick":case "dblclick":case "dragend":case "dragstart":case "drop":case "focusin":case "focusout":case "input":case "invalid":case "keydown":case "keypress":case "keyup":case "mousedown":case "mouseup":case "paste":case "pause":case "play":case "pointercancel":case "pointerdown":case "pointerup":case "ratechange":case "reset":case "resize":case "seeked":case "submit":case "touchcancel":case "touchend":case "touchstart":case "volumechange":case "change":case "selectionchange":case "textInput":case "compositionstart":case "compositionend":case "compositionupdate":case "beforeblur":case "afterblur":case "beforeinput":case "blur":case "fullscreenchange":case "focus":case "hashchange":case "popstate":case "select":case "selectstart":return 1;case "drag":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "mousemove":case "mouseout":case "mouseover":case "pointermove":case "pointerout":case "pointerover":case "scroll":case "toggle":case "touchmove":case "wheel":case "mouseenter":case "mouseleave":case "pointerenter":case "pointerleave":return 4;
case "message":switch(ec()){case fc:return 1;case gc:return 4;case hc:case ic:return 16;case jc:return 536870912;default:return 16}default:return 16}}var kd=null,ld=null,md=null;function nd(){if(md)return md;var a,b=ld,c=b.length,d,e="value"in kd?kd.value:kd.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return md=e.slice(a,1<d?1-d:void 0)}
function od(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}function pd(){return!0}function qd(){return!1}
function rd(a){function b(b,d,e,f,g){this._reactName=b;this._targetInst=e;this.type=d;this.nativeEvent=f;this.target=g;this.currentTarget=null;for(var c in a)a.hasOwnProperty(c)&&(b=a[c],this[c]=b?b(f):f[c]);this.isDefaultPrevented=(null!=f.defaultPrevented?f.defaultPrevented:!1===f.returnValue)?pd:qd;this.isPropagationStopped=qd;return this}A(b.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&
(a.returnValue=!1),this.isDefaultPrevented=pd)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=pd)},persist:function(){},isPersistent:pd});return b}
var sd={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},td=rd(sd),ud=A({},sd,{view:0,detail:0}),vd=rd(ud),wd,xd,yd,Ad=A({},ud,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zd,button:0,buttons:0,relatedTarget:function(a){return void 0===a.relatedTarget?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){if("movementX"in
a)return a.movementX;a!==yd&&(yd&&"mousemove"===a.type?(wd=a.screenX-yd.screenX,xd=a.screenY-yd.screenY):xd=wd=0,yd=a);return wd},movementY:function(a){return"movementY"in a?a.movementY:xd}}),Bd=rd(Ad),Cd=A({},Ad,{dataTransfer:0}),Dd=rd(Cd),Ed=A({},ud,{relatedTarget:0}),Fd=rd(Ed),Gd=A({},sd,{animationName:0,elapsedTime:0,pseudoElement:0}),Hd=rd(Gd),Id=A({},sd,{clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),Jd=rd(Id),Kd=A({},sd,{data:0}),Ld=rd(Kd),Md={Esc:"Escape",
Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",
119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Od={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pd(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Od[a])?!!b[a]:!1}function zd(){return Pd}
var Qd=A({},ud,{key:function(a){if(a.key){var b=Md[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=od(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?Nd[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zd,charCode:function(a){return"keypress"===a.type?od(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===
a.type?od(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),Rd=rd(Qd),Sd=A({},Ad,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=rd(Sd),Ud=A({},ud,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zd}),Vd=rd(Ud),Wd=A({},sd,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xd=rd(Wd),Yd=A({},Ad,{deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},
deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),Zd=rd(Yd),$d=[9,13,27,32],ae=ia&&"CompositionEvent"in window,be=null;ia&&"documentMode"in document&&(be=document.documentMode);var ce=ia&&"TextEvent"in window&&!be,de=ia&&(!ae||be&&8<be&&11>=be),ee=String.fromCharCode(32),fe=!1;
function ge(a,b){switch(a){case "keyup":return-1!==$d.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "focusout":return!0;default:return!1}}function he(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var ie=!1;function je(a,b){switch(a){case "compositionend":return he(b);case "keypress":if(32!==b.which)return null;fe=!0;return ee;case "textInput":return a=b.data,a===ee&&fe?null:a;default:return null}}
function ke(a,b){if(ie)return"compositionend"===a||!ae&&ge(a,b)?(a=nd(),md=ld=kd=null,ie=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return de&&"ko"!==b.locale?null:b.data;default:return null}}
var le={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function me(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!le[a.type]:"textarea"===b?!0:!1}function ne(a,b,c,d){Eb(d);b=oe(b,"onChange");0<b.length&&(c=new td("onChange","change",null,c,d),a.push({event:c,listeners:b}))}var pe=null,qe=null;function re(a){se(a,0)}function te(a){var b=ue(a);if(Wa(b))return a}
function ve(a,b){if("change"===a)return b}var we=!1;if(ia){var xe;if(ia){var ye="oninput"in document;if(!ye){var ze=document.createElement("div");ze.setAttribute("oninput","return;");ye="function"===typeof ze.oninput}xe=ye}else xe=!1;we=xe&&(!document.documentMode||9<document.documentMode)}function Ae(){pe&&(pe.detachEvent("onpropertychange",Be),qe=pe=null)}function Be(a){if("value"===a.propertyName&&te(qe)){var b=[];ne(b,qe,a,xb(a));Jb(re,b)}}
function Ce(a,b,c){"focusin"===a?(Ae(),pe=b,qe=c,pe.attachEvent("onpropertychange",Be)):"focusout"===a&&Ae()}function De(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return te(qe)}function Ee(a,b){if("click"===a)return te(b)}function Fe(a,b){if("input"===a||"change"===a)return te(b)}function Ge(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var He="function"===typeof Object.is?Object.is:Ge;
function Ie(a,b){if(He(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++){var e=c[d];if(!ja.call(b,e)||!He(a[e],b[e]))return!1}return!0}function Je(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
function Ke(a,b){var c=Je(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=Je(c)}}function Le(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Le(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
function Me(){for(var a=window,b=Xa();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href}catch(d){c=!1}if(c)a=b.contentWindow;else break;b=Xa(a.document)}return b}function Ne(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
function Oe(a){var b=Me(),c=a.focusedElem,d=a.selectionRange;if(b!==c&&c&&c.ownerDocument&&Le(c.ownerDocument.documentElement,c)){if(null!==d&&Ne(c))if(b=d.start,a=d.end,void 0===a&&(a=b),"selectionStart"in c)c.selectionStart=b,c.selectionEnd=Math.min(a,c.value.length);else if(a=(b=c.ownerDocument||document)&&b.defaultView||window,a.getSelection){a=a.getSelection();var e=c.textContent.length,f=Math.min(d.start,e);d=void 0===d.end?f:Math.min(d.end,e);!a.extend&&f>d&&(e=d,d=f,f=e);e=Ke(c,f);var g=Ke(c,
d);e&&g&&(1!==a.rangeCount||a.anchorNode!==e.node||a.anchorOffset!==e.offset||a.focusNode!==g.node||a.focusOffset!==g.offset)&&(b=b.createRange(),b.setStart(e.node,e.offset),a.removeAllRanges(),f>d?(a.addRange(b),a.extend(g.node,g.offset)):(b.setEnd(g.node,g.offset),a.addRange(b)))}b=[];for(a=c;a=a.parentNode;)1===a.nodeType&&b.push({element:a,left:a.scrollLeft,top:a.scrollTop});"function"===typeof c.focus&&c.focus();for(c=0;c<b.length;c++)a=b[c],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}
var Pe=ia&&"documentMode"in document&&11>=document.documentMode,Qe=null,Re=null,Se=null,Te=!1;
function Ue(a,b,c){var d=c.window===c?c.document:9===c.nodeType?c:c.ownerDocument;Te||null==Qe||Qe!==Xa(d)||(d=Qe,"selectionStart"in d&&Ne(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Se&&Ie(Se,d)||(Se=d,d=oe(Re,"onSelect"),0<d.length&&(b=new td("onSelect","select",null,b,c),a.push({event:b,listeners:d}),b.target=Qe)))}
function Ve(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var We={animationend:Ve("Animation","AnimationEnd"),animationiteration:Ve("Animation","AnimationIteration"),animationstart:Ve("Animation","AnimationStart"),transitionend:Ve("Transition","TransitionEnd")},Xe={},Ye={};
ia&&(Ye=document.createElement("div").style,"AnimationEvent"in window||(delete We.animationend.animation,delete We.animationiteration.animation,delete We.animationstart.animation),"TransitionEvent"in window||delete We.transitionend.transition);function Ze(a){if(Xe[a])return Xe[a];if(!We[a])return a;var b=We[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Ye)return Xe[a]=b[c];return a}var $e=Ze("animationend"),af=Ze("animationiteration"),bf=Ze("animationstart"),cf=Ze("transitionend"),df=new Map,ef="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ff(a,b){df.set(a,b);fa(b,[a])}for(var gf=0;gf<ef.length;gf++){var hf=ef[gf],jf=hf.toLowerCase(),kf=hf[0].toUpperCase()+hf.slice(1);ff(jf,"on"+kf)}ff($e,"onAnimationEnd");ff(af,"onAnimationIteration");ff(bf,"onAnimationStart");ff("dblclick","onDoubleClick");ff("focusin","onFocus");ff("focusout","onBlur");ff(cf,"onTransitionEnd");ha("onMouseEnter",["mouseout","mouseover"]);ha("onMouseLeave",["mouseout","mouseover"]);ha("onPointerEnter",["pointerout","pointerover"]);
ha("onPointerLeave",["pointerout","pointerover"]);fa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fa("onBeforeInput",["compositionend","keypress","textInput","paste"]);fa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lf="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mf=new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
function nf(a,b,c){var d=a.type||"unknown-event";a.currentTarget=c;Ub(d,b,void 0,a);a.currentTarget=null}
function se(a,b){b=0!==(b&4);for(var c=0;c<a.length;c++){var d=a[c],e=d.event;d=d.listeners;a:{var f=void 0;if(b)for(var g=d.length-1;0<=g;g--){var h=d[g],k=h.instance,l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;nf(e,h,l);f=k}else for(g=0;g<d.length;g++){h=d[g];k=h.instance;l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;nf(e,h,l);f=k}}}if(Qb)throw a=Rb,Qb=!1,Rb=null,a;}
function D(a,b){var c=b[of];void 0===c&&(c=b[of]=new Set);var d=a+"__bubble";c.has(d)||(pf(b,a,2,!1),c.add(d))}function qf(a,b,c){var d=0;b&&(d|=4);pf(c,a,d,b)}var rf="_reactListening"+Math.random().toString(36).slice(2);function sf(a){if(!a[rf]){a[rf]=!0;da.forEach(function(b){"selectionchange"!==b&&(mf.has(b)||qf(b,!1,a),qf(b,!0,a))});var b=9===a.nodeType?a:a.ownerDocument;null===b||b[rf]||(b[rf]=!0,qf("selectionchange",!1,b))}}
function pf(a,b,c,d){switch(jd(b)){case 1:var e=ed;break;case 4:e=gd;break;default:e=fd}c=e.bind(null,b,c,a);e=void 0;!Lb||"touchstart"!==b&&"touchmove"!==b&&"wheel"!==b||(e=!0);d?void 0!==e?a.addEventListener(b,c,{capture:!0,passive:e}):a.addEventListener(b,c,!0):void 0!==e?a.addEventListener(b,c,{passive:e}):a.addEventListener(b,c,!1)}
function hd(a,b,c,d,e){var f=d;if(0===(b&1)&&0===(b&2)&&null!==d)a:for(;;){if(null===d)return;var g=d.tag;if(3===g||4===g){var h=d.stateNode.containerInfo;if(h===e||8===h.nodeType&&h.parentNode===e)break;if(4===g)for(g=d.return;null!==g;){var k=g.tag;if(3===k||4===k)if(k=g.stateNode.containerInfo,k===e||8===k.nodeType&&k.parentNode===e)return;g=g.return}for(;null!==h;){g=Wc(h);if(null===g)return;k=g.tag;if(5===k||6===k){d=f=g;continue a}h=h.parentNode}}d=d.return}Jb(function(){var d=f,e=xb(c),g=[];
a:{var h=df.get(a);if(void 0!==h){var k=td,n=a;switch(a){case "keypress":if(0===od(c))break a;case "keydown":case "keyup":k=Rd;break;case "focusin":n="focus";k=Fd;break;case "focusout":n="blur";k=Fd;break;case "beforeblur":case "afterblur":k=Fd;break;case "click":if(2===c.button)break a;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":k=Bd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":k=
Dd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":k=Vd;break;case $e:case af:case bf:k=Hd;break;case cf:k=Xd;break;case "scroll":k=vd;break;case "wheel":k=Zd;break;case "copy":case "cut":case "paste":k=Jd;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":k=Td}var t=0!==(b&4),J=!t&&"scroll"===a,x=t?null!==h?h+"Capture":null:h;t=[];for(var w=d,u;null!==
w;){u=w;var F=u.stateNode;5===u.tag&&null!==F&&(u=F,null!==x&&(F=Kb(w,x),null!=F&&t.push(tf(w,F,u))));if(J)break;w=w.return}0<t.length&&(h=new k(h,n,null,c,e),g.push({event:h,listeners:t}))}}if(0===(b&7)){a:{h="mouseover"===a||"pointerover"===a;k="mouseout"===a||"pointerout"===a;if(h&&c!==wb&&(n=c.relatedTarget||c.fromElement)&&(Wc(n)||n[uf]))break a;if(k||h){h=e.window===e?e:(h=e.ownerDocument)?h.defaultView||h.parentWindow:window;if(k){if(n=c.relatedTarget||c.toElement,k=d,n=n?Wc(n):null,null!==
n&&(J=Vb(n),n!==J||5!==n.tag&&6!==n.tag))n=null}else k=null,n=d;if(k!==n){t=Bd;F="onMouseLeave";x="onMouseEnter";w="mouse";if("pointerout"===a||"pointerover"===a)t=Td,F="onPointerLeave",x="onPointerEnter",w="pointer";J=null==k?h:ue(k);u=null==n?h:ue(n);h=new t(F,w+"leave",k,c,e);h.target=J;h.relatedTarget=u;F=null;Wc(e)===d&&(t=new t(x,w+"enter",n,c,e),t.target=u,t.relatedTarget=J,F=t);J=F;if(k&&n)b:{t=k;x=n;w=0;for(u=t;u;u=vf(u))w++;u=0;for(F=x;F;F=vf(F))u++;for(;0<w-u;)t=vf(t),w--;for(;0<u-w;)x=
vf(x),u--;for(;w--;){if(t===x||null!==x&&t===x.alternate)break b;t=vf(t);x=vf(x)}t=null}else t=null;null!==k&&wf(g,h,k,t,!1);null!==n&&null!==J&&wf(g,J,n,t,!0)}}}a:{h=d?ue(d):window;k=h.nodeName&&h.nodeName.toLowerCase();if("select"===k||"input"===k&&"file"===h.type)var na=ve;else if(me(h))if(we)na=Fe;else{na=De;var xa=Ce}else(k=h.nodeName)&&"input"===k.toLowerCase()&&("checkbox"===h.type||"radio"===h.type)&&(na=Ee);if(na&&(na=na(a,d))){ne(g,na,c,e);break a}xa&&xa(a,h,d);"focusout"===a&&(xa=h._wrapperState)&&
xa.controlled&&"number"===h.type&&cb(h,"number",h.value)}xa=d?ue(d):window;switch(a){case "focusin":if(me(xa)||"true"===xa.contentEditable)Qe=xa,Re=d,Se=null;break;case "focusout":Se=Re=Qe=null;break;case "mousedown":Te=!0;break;case "contextmenu":case "mouseup":case "dragend":Te=!1;Ue(g,c,e);break;case "selectionchange":if(Pe)break;case "keydown":case "keyup":Ue(g,c,e)}var $a;if(ae)b:{switch(a){case "compositionstart":var ba="onCompositionStart";break b;case "compositionend":ba="onCompositionEnd";
break b;case "compositionupdate":ba="onCompositionUpdate";break b}ba=void 0}else ie?ge(a,c)&&(ba="onCompositionEnd"):"keydown"===a&&229===c.keyCode&&(ba="onCompositionStart");ba&&(de&&"ko"!==c.locale&&(ie||"onCompositionStart"!==ba?"onCompositionEnd"===ba&&ie&&($a=nd()):(kd=e,ld="value"in kd?kd.value:kd.textContent,ie=!0)),xa=oe(d,ba),0<xa.length&&(ba=new Ld(ba,a,null,c,e),g.push({event:ba,listeners:xa}),$a?ba.data=$a:($a=he(c),null!==$a&&(ba.data=$a))));if($a=ce?je(a,c):ke(a,c))d=oe(d,"onBeforeInput"),
0<d.length&&(e=new Ld("onBeforeInput","beforeinput",null,c,e),g.push({event:e,listeners:d}),e.data=$a)}se(g,b)})}function tf(a,b,c){return{instance:a,listener:b,currentTarget:c}}function oe(a,b){for(var c=b+"Capture",d=[];null!==a;){var e=a,f=e.stateNode;5===e.tag&&null!==f&&(e=f,f=Kb(a,c),null!=f&&d.unshift(tf(a,f,e)),f=Kb(a,b),null!=f&&d.push(tf(a,f,e)));a=a.return}return d}function vf(a){if(null===a)return null;do a=a.return;while(a&&5!==a.tag);return a?a:null}
function wf(a,b,c,d,e){for(var f=b._reactName,g=[];null!==c&&c!==d;){var h=c,k=h.alternate,l=h.stateNode;if(null!==k&&k===d)break;5===h.tag&&null!==l&&(h=l,e?(k=Kb(c,f),null!=k&&g.unshift(tf(c,k,h))):e||(k=Kb(c,f),null!=k&&g.push(tf(c,k,h))));c=c.return}0!==g.length&&a.push({event:b,listeners:g})}var xf=/\r\n?/g,yf=/\u0000|\uFFFD/g;function zf(a){return("string"===typeof a?a:""+a).replace(xf,"\n").replace(yf,"")}function Af(a,b,c){b=zf(b);if(zf(a)!==b&&c)throw Error(p(425));}function Bf(){}
var Cf=null,Df=null;function Ef(a,b){return"textarea"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}
var Ff="function"===typeof setTimeout?setTimeout:void 0,Gf="function"===typeof clearTimeout?clearTimeout:void 0,Hf="function"===typeof Promise?Promise:void 0,Jf="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof Hf?function(a){return Hf.resolve(null).then(a).catch(If)}:Ff;function If(a){setTimeout(function(){throw a;})}
function Kf(a,b){var c=b,d=0;do{var e=c.nextSibling;a.removeChild(c);if(e&&8===e.nodeType)if(c=e.data,"/$"===c){if(0===d){a.removeChild(e);bd(b);return}d--}else"$"!==c&&"$?"!==c&&"$!"!==c||d++;c=e}while(c);bd(b)}function Lf(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break;if(8===b){b=a.data;if("$"===b||"$!"===b||"$?"===b)break;if("/$"===b)return null}}return a}
function Mf(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if("$"===c||"$!"===c||"$?"===c){if(0===b)return a;b--}else"/$"===c&&b++}a=a.previousSibling}return null}var Nf=Math.random().toString(36).slice(2),Of="__reactFiber$"+Nf,Pf="__reactProps$"+Nf,uf="__reactContainer$"+Nf,of="__reactEvents$"+Nf,Qf="__reactListeners$"+Nf,Rf="__reactHandles$"+Nf;
function Wc(a){var b=a[Of];if(b)return b;for(var c=a.parentNode;c;){if(b=c[uf]||c[Of]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=Mf(a);null!==a;){if(c=a[Of])return c;a=Mf(a)}return b}a=c;c=a.parentNode}return null}function Cb(a){a=a[Of]||a[uf];return!a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function ue(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(p(33));}function Db(a){return a[Pf]||null}var Sf=[],Tf=-1;function Uf(a){return{current:a}}
function E(a){0>Tf||(a.current=Sf[Tf],Sf[Tf]=null,Tf--)}function G(a,b){Tf++;Sf[Tf]=a.current;a.current=b}var Vf={},H=Uf(Vf),Wf=Uf(!1),Xf=Vf;function Yf(a,b){var c=a.type.contextTypes;if(!c)return Vf;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}
function Zf(a){a=a.childContextTypes;return null!==a&&void 0!==a}function $f(){E(Wf);E(H)}function ag(a,b,c){if(H.current!==Vf)throw Error(p(168));G(H,b);G(Wf,c)}function bg(a,b,c){var d=a.stateNode;b=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in b))throw Error(p(108,Ra(a)||"Unknown",e));return A({},c,d)}
function cg(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Vf;Xf=H.current;G(H,a);G(Wf,Wf.current);return!0}function dg(a,b,c){var d=a.stateNode;if(!d)throw Error(p(169));c?(a=bg(a,b,Xf),d.__reactInternalMemoizedMergedChildContext=a,E(Wf),E(H),G(H,a)):E(Wf);G(Wf,c)}var eg=null,fg=!1,gg=!1;function hg(a){null===eg?eg=[a]:eg.push(a)}function ig(a){fg=!0;hg(a)}
function jg(){if(!gg&&null!==eg){gg=!0;var a=0,b=C;try{var c=eg;for(C=1;a<c.length;a++){var d=c[a];do d=d(!0);while(null!==d)}eg=null;fg=!1}catch(e){throw null!==eg&&(eg=eg.slice(a+1)),ac(fc,jg),e;}finally{C=b,gg=!1}}return null}var kg=[],lg=0,mg=null,ng=0,og=[],pg=0,qg=null,rg=1,sg="";function tg(a,b){kg[lg++]=ng;kg[lg++]=mg;mg=a;ng=b}
function ug(a,b,c){og[pg++]=rg;og[pg++]=sg;og[pg++]=qg;qg=a;var d=rg;a=sg;var e=32-oc(d)-1;d&=~(1<<e);c+=1;var f=32-oc(b)+e;if(30<f){var g=e-e%5;f=(d&(1<<g)-1).toString(32);d>>=g;e-=g;rg=1<<32-oc(b)+e|c<<e|d;sg=f+a}else rg=1<<f|c<<e|d,sg=a}function vg(a){null!==a.return&&(tg(a,1),ug(a,1,0))}function wg(a){for(;a===mg;)mg=kg[--lg],kg[lg]=null,ng=kg[--lg],kg[lg]=null;for(;a===qg;)qg=og[--pg],og[pg]=null,sg=og[--pg],og[pg]=null,rg=og[--pg],og[pg]=null}var xg=null,yg=null,I=!1,zg=null;
function Ag(a,b){var c=Bg(5,null,null,0);c.elementType="DELETED";c.stateNode=b;c.return=a;b=a.deletions;null===b?(a.deletions=[c],a.flags|=16):b.push(c)}
function Cg(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,xg=a,yg=Lf(b.firstChild),!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,xg=a,yg=null,!0):!1;case 13:return b=8!==b.nodeType?null:b,null!==b?(c=null!==qg?{id:rg,overflow:sg}:null,a.memoizedState={dehydrated:b,treeContext:c,retryLane:1073741824},c=Bg(18,null,null,0),c.stateNode=b,c.return=a,a.child=c,xg=a,yg=
null,!0):!1;default:return!1}}function Dg(a){return 0!==(a.mode&1)&&0===(a.flags&128)}function Eg(a){if(I){var b=yg;if(b){var c=b;if(!Cg(a,b)){if(Dg(a))throw Error(p(418));b=Lf(c.nextSibling);var d=xg;b&&Cg(a,b)?Ag(d,c):(a.flags=a.flags&-4097|2,I=!1,xg=a)}}else{if(Dg(a))throw Error(p(418));a.flags=a.flags&-4097|2;I=!1;xg=a}}}function Fg(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;xg=a}
function Gg(a){if(a!==xg)return!1;if(!I)return Fg(a),I=!0,!1;var b;(b=3!==a.tag)&&!(b=5!==a.tag)&&(b=a.type,b="head"!==b&&"body"!==b&&!Ef(a.type,a.memoizedProps));if(b&&(b=yg)){if(Dg(a))throw Hg(),Error(p(418));for(;b;)Ag(a,b),b=Lf(b.nextSibling)}Fg(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(p(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if("/$"===c){if(0===b){yg=Lf(a.nextSibling);break a}b--}else"$"!==c&&"$!"!==c&&"$?"!==c||b++}a=a.nextSibling}yg=
null}}else yg=xg?Lf(a.stateNode.nextSibling):null;return!0}function Hg(){for(var a=yg;a;)a=Lf(a.nextSibling)}function Ig(){yg=xg=null;I=!1}function Jg(a){null===zg?zg=[a]:zg.push(a)}var Kg=ua.ReactCurrentBatchConfig;function Lg(a,b){if(a&&a.defaultProps){b=A({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);return b}return b}var Mg=Uf(null),Ng=null,Og=null,Pg=null;function Qg(){Pg=Og=Ng=null}function Rg(a){var b=Mg.current;E(Mg);a._currentValue=b}
function Sg(a,b,c){for(;null!==a;){var d=a.alternate;(a.childLanes&b)!==b?(a.childLanes|=b,null!==d&&(d.childLanes|=b)):null!==d&&(d.childLanes&b)!==b&&(d.childLanes|=b);if(a===c)break;a=a.return}}function Tg(a,b){Ng=a;Pg=Og=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(0!==(a.lanes&b)&&(Ug=!0),a.firstContext=null)}
function Vg(a){var b=a._currentValue;if(Pg!==a)if(a={context:a,memoizedValue:b,next:null},null===Og){if(null===Ng)throw Error(p(308));Og=a;Ng.dependencies={lanes:0,firstContext:a}}else Og=Og.next=a;return b}var Wg=null;function Xg(a){null===Wg?Wg=[a]:Wg.push(a)}function Yg(a,b,c,d){var e=b.interleaved;null===e?(c.next=c,Xg(b)):(c.next=e.next,e.next=c);b.interleaved=c;return Zg(a,d)}
function Zg(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);c=a;for(a=a.return;null!==a;)a.childLanes|=b,c=a.alternate,null!==c&&(c.childLanes|=b),c=a,a=a.return;return 3===c.tag?c.stateNode:null}var $g=!1;function ah(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}
function bh(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects})}function ch(a,b){return{eventTime:a,lane:b,tag:0,payload:null,callback:null,next:null}}
function dh(a,b,c){var d=a.updateQueue;if(null===d)return null;d=d.shared;if(0!==(K&2)){var e=d.pending;null===e?b.next=b:(b.next=e.next,e.next=b);d.pending=b;return Zg(a,c)}e=d.interleaved;null===e?(b.next=b,Xg(d)):(b.next=e.next,e.next=b);d.interleaved=b;return Zg(a,c)}function eh(a,b,c){b=b.updateQueue;if(null!==b&&(b=b.shared,0!==(c&4194240))){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;Cc(a,c)}}
function fh(a,b){var c=a.updateQueue,d=a.alternate;if(null!==d&&(d=d.updateQueue,c===d)){var e=null,f=null;c=c.firstBaseUpdate;if(null!==c){do{var g={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};null===f?e=f=g:f=f.next=g;c=c.next}while(null!==c);null===f?e=f=b:f=f.next=b}else e=f=b;c={baseState:d.baseState,firstBaseUpdate:e,lastBaseUpdate:f,shared:d.shared,effects:d.effects};a.updateQueue=c;return}a=c.lastBaseUpdate;null===a?c.firstBaseUpdate=b:a.next=
b;c.lastBaseUpdate=b}
function gh(a,b,c,d){var e=a.updateQueue;$g=!1;var f=e.firstBaseUpdate,g=e.lastBaseUpdate,h=e.shared.pending;if(null!==h){e.shared.pending=null;var k=h,l=k.next;k.next=null;null===g?f=l:g.next=l;g=k;var m=a.alternate;null!==m&&(m=m.updateQueue,h=m.lastBaseUpdate,h!==g&&(null===h?m.firstBaseUpdate=l:h.next=l,m.lastBaseUpdate=k))}if(null!==f){var q=e.baseState;g=0;m=l=k=null;h=f;do{var r=h.lane,y=h.eventTime;if((d&r)===r){null!==m&&(m=m.next={eventTime:y,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,
next:null});a:{var n=a,t=h;r=b;y=c;switch(t.tag){case 1:n=t.payload;if("function"===typeof n){q=n.call(y,q,r);break a}q=n;break a;case 3:n.flags=n.flags&-65537|128;case 0:n=t.payload;r="function"===typeof n?n.call(y,q,r):n;if(null===r||void 0===r)break a;q=A({},q,r);break a;case 2:$g=!0}}null!==h.callback&&0!==h.lane&&(a.flags|=64,r=e.effects,null===r?e.effects=[h]:r.push(h))}else y={eventTime:y,lane:r,tag:h.tag,payload:h.payload,callback:h.callback,next:null},null===m?(l=m=y,k=q):m=m.next=y,g|=r;
h=h.next;if(null===h)if(h=e.shared.pending,null===h)break;else r=h,h=r.next,r.next=null,e.lastBaseUpdate=r,e.shared.pending=null}while(1);null===m&&(k=q);e.baseState=k;e.firstBaseUpdate=l;e.lastBaseUpdate=m;b=e.shared.interleaved;if(null!==b){e=b;do g|=e.lane,e=e.next;while(e!==b)}else null===f&&(e.shared.lanes=0);hh|=g;a.lanes=g;a.memoizedState=q}}
function ih(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=c;if("function"!==typeof e)throw Error(p(191,e));e.call(d)}}}var jh=(new aa.Component).refs;function kh(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:A({},b,c);a.memoizedState=c;0===a.lanes&&(a.updateQueue.baseState=c)}
var nh={isMounted:function(a){return(a=a._reactInternals)?Vb(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternals;var d=L(),e=lh(a),f=ch(d,e);f.payload=b;void 0!==c&&null!==c&&(f.callback=c);b=dh(a,f,e);null!==b&&(mh(b,a,e,d),eh(b,a,e))},enqueueReplaceState:function(a,b,c){a=a._reactInternals;var d=L(),e=lh(a),f=ch(d,e);f.tag=1;f.payload=b;void 0!==c&&null!==c&&(f.callback=c);b=dh(a,f,e);null!==b&&(mh(b,a,e,d),eh(b,a,e))},enqueueForceUpdate:function(a,b){a=a._reactInternals;var c=L(),d=
lh(a),e=ch(c,d);e.tag=2;void 0!==b&&null!==b&&(e.callback=b);b=dh(a,e,d);null!==b&&(mh(b,a,d,c),eh(b,a,d))}};function oh(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!Ie(c,d)||!Ie(e,f):!0}
function ph(a,b,c){var d=!1,e=Vf;var f=b.contextType;"object"===typeof f&&null!==f?f=Vg(f):(e=Zf(b)?Xf:H.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Yf(a,e):Vf);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=nh;a.stateNode=b;b._reactInternals=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function qh(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&nh.enqueueReplaceState(b,b.state,null)}
function rh(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=jh;ah(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=Vg(f):(f=Zf(b)?Xf:H.current,e.context=Yf(a,f));e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(kh(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||(b=e.state,
"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&nh.enqueueReplaceState(e,e.state,null),gh(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.flags|=4194308)}
function sh(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(p(309));var d=c.stateNode}if(!d)throw Error(p(147,a));var e=d,f=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===f)return b.ref;b=function(a){var b=e.refs;b===jh&&(b=e.refs={});null===a?delete b[f]:b[f]=a};b._stringRef=f;return b}if("string"!==typeof a)throw Error(p(284));if(!c._owner)throw Error(p(290,a));}return a}
function th(a,b){a=Object.prototype.toString.call(b);throw Error(p(31,"[object Object]"===a?"object with keys {"+Object.keys(b).join(", ")+"}":a));}function uh(a){var b=a._init;return b(a._payload)}
function vh(a){function b(b,c){if(a){var d=b.deletions;null===d?(b.deletions=[c],b.flags|=16):d.push(c)}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=wh(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return b.flags|=1048576,c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.flags|=2,c):d;b.flags|=2;return c}function g(b){a&&
null===b.alternate&&(b.flags|=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=xh(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){var f=c.type;if(f===ya)return m(a,b,c.props.children,d,c.key);if(null!==b&&(b.elementType===f||"object"===typeof f&&null!==f&&f.$$typeof===Ha&&uh(f)===b.type))return d=e(b,c.props),d.ref=sh(a,b,c),d.return=a,d;d=yh(c.type,c.key,c.props,null,a.mode,d);d.ref=sh(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||
b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=zh(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=Ah(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function q(a,b,c){if("string"===typeof b&&""!==b||"number"===typeof b)return b=xh(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case va:return c=yh(b.type,b.key,b.props,null,a.mode,c),
c.ref=sh(a,null,b),c.return=a,c;case wa:return b=zh(b,a.mode,c),b.return=a,b;case Ha:var d=b._init;return q(a,d(b._payload),c)}if(eb(b)||Ka(b))return b=Ah(b,a.mode,c,null),b.return=a,b;th(a,b)}return null}function r(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c&&""!==c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case va:return c.key===e?k(a,b,c,d):null;case wa:return c.key===e?l(a,b,c,d):null;case Ha:return e=c._init,r(a,
b,e(c._payload),d)}if(eb(c)||Ka(c))return null!==e?null:m(a,b,c,d,null);th(a,c)}return null}function y(a,b,c,d,e){if("string"===typeof d&&""!==d||"number"===typeof d)return a=a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case va:return a=a.get(null===d.key?c:d.key)||null,k(b,a,d,e);case wa:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e);case Ha:var f=d._init;return y(a,b,c,f(d._payload),e)}if(eb(d)||Ka(d))return a=a.get(c)||null,m(b,a,d,e,null);th(b,d)}return null}
function n(e,g,h,k){for(var l=null,m=null,u=g,w=g=0,x=null;null!==u&&w<h.length;w++){u.index>w?(x=u,u=null):x=u.sibling;var n=r(e,u,h[w],k);if(null===n){null===u&&(u=x);break}a&&u&&null===n.alternate&&b(e,u);g=f(n,g,w);null===m?l=n:m.sibling=n;m=n;u=x}if(w===h.length)return c(e,u),I&&tg(e,w),l;if(null===u){for(;w<h.length;w++)u=q(e,h[w],k),null!==u&&(g=f(u,g,w),null===m?l=u:m.sibling=u,m=u);I&&tg(e,w);return l}for(u=d(e,u);w<h.length;w++)x=y(u,e,w,h[w],k),null!==x&&(a&&null!==x.alternate&&u.delete(null===
x.key?w:x.key),g=f(x,g,w),null===m?l=x:m.sibling=x,m=x);a&&u.forEach(function(a){return b(e,a)});I&&tg(e,w);return l}function t(e,g,h,k){var l=Ka(h);if("function"!==typeof l)throw Error(p(150));h=l.call(h);if(null==h)throw Error(p(151));for(var u=l=null,m=g,w=g=0,x=null,n=h.next();null!==m&&!n.done;w++,n=h.next()){m.index>w?(x=m,m=null):x=m.sibling;var t=r(e,m,n.value,k);if(null===t){null===m&&(m=x);break}a&&m&&null===t.alternate&&b(e,m);g=f(t,g,w);null===u?l=t:u.sibling=t;u=t;m=x}if(n.done)return c(e,
m),I&&tg(e,w),l;if(null===m){for(;!n.done;w++,n=h.next())n=q(e,n.value,k),null!==n&&(g=f(n,g,w),null===u?l=n:u.sibling=n,u=n);I&&tg(e,w);return l}for(m=d(e,m);!n.done;w++,n=h.next())n=y(m,e,w,n.value,k),null!==n&&(a&&null!==n.alternate&&m.delete(null===n.key?w:n.key),g=f(n,g,w),null===u?l=n:u.sibling=n,u=n);a&&m.forEach(function(a){return b(e,a)});I&&tg(e,w);return l}function J(a,d,f,h){"object"===typeof f&&null!==f&&f.type===ya&&null===f.key&&(f=f.props.children);if("object"===typeof f&&null!==f){switch(f.$$typeof){case va:a:{for(var k=
f.key,l=d;null!==l;){if(l.key===k){k=f.type;if(k===ya){if(7===l.tag){c(a,l.sibling);d=e(l,f.props.children);d.return=a;a=d;break a}}else if(l.elementType===k||"object"===typeof k&&null!==k&&k.$$typeof===Ha&&uh(k)===l.type){c(a,l.sibling);d=e(l,f.props);d.ref=sh(a,l,f);d.return=a;a=d;break a}c(a,l);break}else b(a,l);l=l.sibling}f.type===ya?(d=Ah(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=yh(f.type,f.key,f.props,null,a.mode,h),h.ref=sh(a,d,f),h.return=a,a=h)}return g(a);case wa:a:{for(l=f.key;null!==
d;){if(d.key===l)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=zh(f,a.mode,h);d.return=a;a=d}return g(a);case Ha:return l=f._init,J(a,d,l(f._payload),h)}if(eb(f))return n(a,d,f,h);if(Ka(f))return t(a,d,f,h);th(a,f)}return"string"===typeof f&&""!==f||"number"===typeof f?(f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):
(c(a,d),d=xh(f,a.mode,h),d.return=a,a=d),g(a)):c(a,d)}return J}var Bh=vh(!0),Ch=vh(!1),Dh={},Eh=Uf(Dh),Fh=Uf(Dh),Gh=Uf(Dh);function Hh(a){if(a===Dh)throw Error(p(174));return a}function Ih(a,b){G(Gh,b);G(Fh,a);G(Eh,Dh);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:lb(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=lb(b,a)}E(Eh);G(Eh,b)}function Jh(){E(Eh);E(Fh);E(Gh)}
function Kh(a){Hh(Gh.current);var b=Hh(Eh.current);var c=lb(b,a.type);b!==c&&(G(Fh,a),G(Eh,c))}function Lh(a){Fh.current===a&&(E(Eh),E(Fh))}var M=Uf(0);
function Mh(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||"$?"===c.data||"$!"===c.data))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.flags&128))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}return null}var Nh=[];
function Oh(){for(var a=0;a<Nh.length;a++)Nh[a]._workInProgressVersionPrimary=null;Nh.length=0}var Ph=ua.ReactCurrentDispatcher,Qh=ua.ReactCurrentBatchConfig,Rh=0,N=null,O=null,P=null,Sh=!1,Th=!1,Uh=0,Vh=0;function Q(){throw Error(p(321));}function Wh(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!He(a[c],b[c]))return!1;return!0}
function Xh(a,b,c,d,e,f){Rh=f;N=b;b.memoizedState=null;b.updateQueue=null;b.lanes=0;Ph.current=null===a||null===a.memoizedState?Yh:Zh;a=c(d,e);if(Th){f=0;do{Th=!1;Uh=0;if(25<=f)throw Error(p(301));f+=1;P=O=null;b.updateQueue=null;Ph.current=$h;a=c(d,e)}while(Th)}Ph.current=ai;b=null!==O&&null!==O.next;Rh=0;P=O=N=null;Sh=!1;if(b)throw Error(p(300));return a}function bi(){var a=0!==Uh;Uh=0;return a}
function ci(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===P?N.memoizedState=P=a:P=P.next=a;return P}function di(){if(null===O){var a=N.alternate;a=null!==a?a.memoizedState:null}else a=O.next;var b=null===P?N.memoizedState:P.next;if(null!==b)P=b,O=a;else{if(null===a)throw Error(p(310));O=a;a={memoizedState:O.memoizedState,baseState:O.baseState,baseQueue:O.baseQueue,queue:O.queue,next:null};null===P?N.memoizedState=P=a:P=P.next=a}return P}
function ei(a,b){return"function"===typeof b?b(a):b}
function fi(a){var b=di(),c=b.queue;if(null===c)throw Error(p(311));c.lastRenderedReducer=a;var d=O,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g}d.baseQueue=e=f;c.pending=null}if(null!==e){f=e.next;d=d.baseState;var h=g=null,k=null,l=f;do{var m=l.lane;if((Rh&m)===m)null!==k&&(k=k.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),d=l.hasEagerState?l.eagerState:a(d,l.action);else{var q={lane:m,action:l.action,hasEagerState:l.hasEagerState,
eagerState:l.eagerState,next:null};null===k?(h=k=q,g=d):k=k.next=q;N.lanes|=m;hh|=m}l=l.next}while(null!==l&&l!==f);null===k?g=d:k.next=h;He(d,b.memoizedState)||(Ug=!0);b.memoizedState=d;b.baseState=g;b.baseQueue=k;c.lastRenderedState=d}a=c.interleaved;if(null!==a){e=a;do f=e.lane,N.lanes|=f,hh|=f,e=e.next;while(e!==a)}else null===e&&(c.lanes=0);return[b.memoizedState,c.dispatch]}
function gi(a){var b=di(),c=b.queue;if(null===c)throw Error(p(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);He(f,b.memoizedState)||(Ug=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f}return[f,d]}function hi(){}
function ii(a,b){var c=N,d=di(),e=b(),f=!He(d.memoizedState,e);f&&(d.memoizedState=e,Ug=!0);d=d.queue;ji(ki.bind(null,c,d,a),[a]);if(d.getSnapshot!==b||f||null!==P&&P.memoizedState.tag&1){c.flags|=2048;li(9,mi.bind(null,c,d,e,b),void 0,null);if(null===R)throw Error(p(349));0!==(Rh&30)||ni(c,b,e)}return e}function ni(a,b,c){a.flags|=16384;a={getSnapshot:b,value:c};b=N.updateQueue;null===b?(b={lastEffect:null,stores:null},N.updateQueue=b,b.stores=[a]):(c=b.stores,null===c?b.stores=[a]:c.push(a))}
function mi(a,b,c,d){b.value=c;b.getSnapshot=d;oi(b)&&pi(a)}function ki(a,b,c){return c(function(){oi(b)&&pi(a)})}function oi(a){var b=a.getSnapshot;a=a.value;try{var c=b();return!He(a,c)}catch(d){return!0}}function pi(a){var b=Zg(a,1);null!==b&&mh(b,a,1,-1)}
function qi(a){var b=ci();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ei,lastRenderedState:a};b.queue=a;a=a.dispatch=ri.bind(null,N,a);return[b.memoizedState,a]}
function li(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=N.updateQueue;null===b?(b={lastEffect:null,stores:null},N.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}function si(){return di().memoizedState}function ti(a,b,c,d){var e=ci();N.flags|=a;e.memoizedState=li(1|b,c,void 0,void 0===d?null:d)}
function ui(a,b,c,d){var e=di();d=void 0===d?null:d;var f=void 0;if(null!==O){var g=O.memoizedState;f=g.destroy;if(null!==d&&Wh(d,g.deps)){e.memoizedState=li(b,c,f,d);return}}N.flags|=a;e.memoizedState=li(1|b,c,f,d)}function vi(a,b){return ti(8390656,8,a,b)}function ji(a,b){return ui(2048,8,a,b)}function wi(a,b){return ui(4,2,a,b)}function xi(a,b){return ui(4,4,a,b)}
function yi(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}function zi(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return ui(4,4,yi.bind(null,b,a),c)}function Ai(){}function Bi(a,b){var c=di();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Wh(b,d[1]))return d[0];c.memoizedState=[a,b];return a}
function Ci(a,b){var c=di();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Wh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}function Di(a,b,c){if(0===(Rh&21))return a.baseState&&(a.baseState=!1,Ug=!0),a.memoizedState=c;He(c,b)||(c=yc(),N.lanes|=c,hh|=c,a.baseState=!0);return b}function Ei(a,b){var c=C;C=0!==c&&4>c?c:4;a(!0);var d=Qh.transition;Qh.transition={};try{a(!1),b()}finally{C=c,Qh.transition=d}}function Fi(){return di().memoizedState}
function Gi(a,b,c){var d=lh(a);c={lane:d,action:c,hasEagerState:!1,eagerState:null,next:null};if(Hi(a))Ii(b,c);else if(c=Yg(a,b,c,d),null!==c){var e=L();mh(c,a,d,e);Ji(c,b,d)}}
function ri(a,b,c){var d=lh(a),e={lane:d,action:c,hasEagerState:!1,eagerState:null,next:null};if(Hi(a))Ii(b,e);else{var f=a.alternate;if(0===a.lanes&&(null===f||0===f.lanes)&&(f=b.lastRenderedReducer,null!==f))try{var g=b.lastRenderedState,h=f(g,c);e.hasEagerState=!0;e.eagerState=h;if(He(h,g)){var k=b.interleaved;null===k?(e.next=e,Xg(b)):(e.next=k.next,k.next=e);b.interleaved=e;return}}catch(l){}finally{}c=Yg(a,b,e,d);null!==c&&(e=L(),mh(c,a,d,e),Ji(c,b,d))}}
function Hi(a){var b=a.alternate;return a===N||null!==b&&b===N}function Ii(a,b){Th=Sh=!0;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b}function Ji(a,b,c){if(0!==(c&4194240)){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;Cc(a,c)}}
var ai={readContext:Vg,useCallback:Q,useContext:Q,useEffect:Q,useImperativeHandle:Q,useInsertionEffect:Q,useLayoutEffect:Q,useMemo:Q,useReducer:Q,useRef:Q,useState:Q,useDebugValue:Q,useDeferredValue:Q,useTransition:Q,useMutableSource:Q,useSyncExternalStore:Q,useId:Q,unstable_isNewReconciler:!1},Yh={readContext:Vg,useCallback:function(a,b){ci().memoizedState=[a,void 0===b?null:b];return a},useContext:Vg,useEffect:vi,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return ti(4194308,
4,yi.bind(null,b,a),c)},useLayoutEffect:function(a,b){return ti(4194308,4,a,b)},useInsertionEffect:function(a,b){return ti(4,2,a,b)},useMemo:function(a,b){var c=ci();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=ci();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};d.queue=a;a=a.dispatch=Gi.bind(null,N,a);return[d.memoizedState,a]},useRef:function(a){var b=
ci();a={current:a};return b.memoizedState=a},useState:qi,useDebugValue:Ai,useDeferredValue:function(a){return ci().memoizedState=a},useTransition:function(){var a=qi(!1),b=a[0];a=Ei.bind(null,a[1]);ci().memoizedState=a;return[b,a]},useMutableSource:function(){},useSyncExternalStore:function(a,b,c){var d=N,e=ci();if(I){if(void 0===c)throw Error(p(407));c=c()}else{c=b();if(null===R)throw Error(p(349));0!==(Rh&30)||ni(d,b,c)}e.memoizedState=c;var f={value:c,getSnapshot:b};e.queue=f;vi(ki.bind(null,d,
f,a),[a]);d.flags|=2048;li(9,mi.bind(null,d,f,c,b),void 0,null);return c},useId:function(){var a=ci(),b=R.identifierPrefix;if(I){var c=sg;var d=rg;c=(d&~(1<<32-oc(d)-1)).toString(32)+c;b=":"+b+"R"+c;c=Uh++;0<c&&(b+="H"+c.toString(32));b+=":"}else c=Vh++,b=":"+b+"r"+c.toString(32)+":";return a.memoizedState=b},unstable_isNewReconciler:!1},Zh={readContext:Vg,useCallback:Bi,useContext:Vg,useEffect:ji,useImperativeHandle:zi,useInsertionEffect:wi,useLayoutEffect:xi,useMemo:Ci,useReducer:fi,useRef:si,useState:function(){return fi(ei)},
useDebugValue:Ai,useDeferredValue:function(a){var b=di();return Di(b,O.memoizedState,a)},useTransition:function(){var a=fi(ei)[0],b=di().memoizedState;return[a,b]},useMutableSource:hi,useSyncExternalStore:ii,useId:Fi,unstable_isNewReconciler:!1},$h={readContext:Vg,useCallback:Bi,useContext:Vg,useEffect:ji,useImperativeHandle:zi,useInsertionEffect:wi,useLayoutEffect:xi,useMemo:Ci,useReducer:gi,useRef:si,useState:function(){return gi(ei)},useDebugValue:Ai,useDeferredValue:function(a){var b=di();return null===
O?b.memoizedState=a:Di(b,O.memoizedState,a)},useTransition:function(){var a=gi(ei)[0],b=di().memoizedState;return[a,b]},useMutableSource:hi,useSyncExternalStore:ii,useId:Fi,unstable_isNewReconciler:!1};function Ki(a,b){try{var c="",d=b;do c+=Pa(d),d=d.return;while(d);var e=c}catch(f){e="\nError generating stack: "+f.message+"\n"+f.stack}return{value:a,source:b,stack:e,digest:null}}function Li(a,b,c){return{value:a,source:null,stack:null!=c?c:null,digest:null!=b?b:null}}
function Mi(a,b){try{console.error(b.value)}catch(c){setTimeout(function(){throw c;})}}var Ni="function"===typeof WeakMap?WeakMap:Map;function Oi(a,b,c){c=ch(-1,c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Pi||(Pi=!0,Qi=d);Mi(a,b)};return c}
function Ri(a,b,c){c=ch(-1,c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){return d(e)};c.callback=function(){Mi(a,b)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){Mi(a,b);"function"!==typeof d&&(null===Si?Si=new Set([this]):Si.add(this));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""})});return c}
function Ti(a,b,c){var d=a.pingCache;if(null===d){d=a.pingCache=new Ni;var e=new Set;d.set(b,e)}else e=d.get(b),void 0===e&&(e=new Set,d.set(b,e));e.has(c)||(e.add(c),a=Ui.bind(null,a,b,c),b.then(a,a))}function Vi(a){do{var b;if(b=13===a.tag)b=a.memoizedState,b=null!==b?null!==b.dehydrated?!0:!1:!0;if(b)return a;a=a.return}while(null!==a);return null}
function Wi(a,b,c,d,e){if(0===(a.mode&1))return a===b?a.flags|=65536:(a.flags|=128,c.flags|=131072,c.flags&=-52805,1===c.tag&&(null===c.alternate?c.tag=17:(b=ch(-1,1),b.tag=2,dh(c,b,1))),c.lanes|=1),a;a.flags|=65536;a.lanes=e;return a}var Xi=ua.ReactCurrentOwner,Ug=!1;function Yi(a,b,c,d){b.child=null===a?Ch(b,null,c,d):Bh(b,a.child,c,d)}
function Zi(a,b,c,d,e){c=c.render;var f=b.ref;Tg(b,e);d=Xh(a,b,c,d,f,e);c=bi();if(null!==a&&!Ug)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,$i(a,b,e);I&&c&&vg(b);b.flags|=1;Yi(a,b,d,e);return b.child}
function aj(a,b,c,d,e){if(null===a){var f=c.type;if("function"===typeof f&&!bj(f)&&void 0===f.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=f,cj(a,b,f,d,e);a=yh(c.type,null,d,b,b.mode,e);a.ref=b.ref;a.return=b;return b.child=a}f=a.child;if(0===(a.lanes&e)){var g=f.memoizedProps;c=c.compare;c=null!==c?c:Ie;if(c(g,d)&&a.ref===b.ref)return $i(a,b,e)}b.flags|=1;a=wh(f,d);a.ref=b.ref;a.return=b;return b.child=a}
function cj(a,b,c,d,e){if(null!==a){var f=a.memoizedProps;if(Ie(f,d)&&a.ref===b.ref)if(Ug=!1,b.pendingProps=d=f,0!==(a.lanes&e))0!==(a.flags&131072)&&(Ug=!0);else return b.lanes=a.lanes,$i(a,b,e)}return dj(a,b,c,d,e)}
function ej(a,b,c){var d=b.pendingProps,e=d.children,f=null!==a?a.memoizedState:null;if("hidden"===d.mode)if(0===(b.mode&1))b.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(fj,gj),gj|=c;else{if(0===(c&1073741824))return a=null!==f?f.baseLanes|c:c,b.lanes=b.childLanes=1073741824,b.memoizedState={baseLanes:a,cachePool:null,transitions:null},b.updateQueue=null,G(fj,gj),gj|=a,null;b.memoizedState={baseLanes:0,cachePool:null,transitions:null};d=null!==f?f.baseLanes:c;G(fj,gj);gj|=d}else null!==
f?(d=f.baseLanes|c,b.memoizedState=null):d=c,G(fj,gj),gj|=d;Yi(a,b,e,c);return b.child}function hj(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.flags|=512,b.flags|=2097152}function dj(a,b,c,d,e){var f=Zf(c)?Xf:H.current;f=Yf(b,f);Tg(b,e);c=Xh(a,b,c,d,f,e);d=bi();if(null!==a&&!Ug)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,$i(a,b,e);I&&d&&vg(b);b.flags|=1;Yi(a,b,c,e);return b.child}
function ij(a,b,c,d,e){if(Zf(c)){var f=!0;cg(b)}else f=!1;Tg(b,e);if(null===b.stateNode)jj(a,b),ph(b,c,d),rh(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=Vg(l):(l=Zf(c)?Xf:H.current,l=Yf(b,l));var m=c.getDerivedStateFromProps,q="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;q||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||
(h!==d||k!==l)&&qh(b,g,d,l);$g=!1;var r=b.memoizedState;g.state=r;gh(b,d,g,e);k=b.memoizedState;h!==d||r!==k||Wf.current||$g?("function"===typeof m&&(kh(b,c,m,d),k=b.memoizedState),(h=$g||oh(b,c,h,d,r,k,l))?(q||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&(b.flags|=4194308)):
("function"===typeof g.componentDidMount&&(b.flags|=4194308),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.flags|=4194308),d=!1)}else{g=b.stateNode;bh(a,b);h=b.memoizedProps;l=b.type===b.elementType?h:Lg(b.type,h);g.props=l;q=b.pendingProps;r=g.context;k=c.contextType;"object"===typeof k&&null!==k?k=Vg(k):(k=Zf(c)?Xf:H.current,k=Yf(b,k));var y=c.getDerivedStateFromProps;(m="function"===typeof y||"function"===typeof g.getSnapshotBeforeUpdate)||
"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==q||r!==k)&&qh(b,g,d,k);$g=!1;r=b.memoizedState;g.state=r;gh(b,d,g,e);var n=b.memoizedState;h!==q||r!==n||Wf.current||$g?("function"===typeof y&&(kh(b,c,y,d),n=b.memoizedState),(l=$g||oh(b,c,l,d,r,n,k)||!1)?(m||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,n,k),"function"===typeof g.UNSAFE_componentWillUpdate&&
g.UNSAFE_componentWillUpdate(d,n,k)),"function"===typeof g.componentDidUpdate&&(b.flags|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.flags|=1024)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),b.memoizedProps=d,b.memoizedState=n),g.props=d,g.state=n,g.context=k,d=l):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===
a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),d=!1)}return kj(a,b,c,d,f,e)}
function kj(a,b,c,d,e,f){hj(a,b);var g=0!==(b.flags&128);if(!d&&!g)return e&&dg(b,c,!1),$i(a,b,f);d=b.stateNode;Xi.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.flags|=1;null!==a&&g?(b.child=Bh(b,a.child,null,f),b.child=Bh(b,null,h,f)):Yi(a,b,h,f);b.memoizedState=d.state;e&&dg(b,c,!0);return b.child}function lj(a){var b=a.stateNode;b.pendingContext?ag(a,b.pendingContext,b.pendingContext!==b.context):b.context&&ag(a,b.context,!1);Ih(a,b.containerInfo)}
function mj(a,b,c,d,e){Ig();Jg(e);b.flags|=256;Yi(a,b,c,d);return b.child}var nj={dehydrated:null,treeContext:null,retryLane:0};function oj(a){return{baseLanes:a,cachePool:null,transitions:null}}
function pj(a,b,c){var d=b.pendingProps,e=M.current,f=!1,g=0!==(b.flags&128),h;(h=g)||(h=null!==a&&null===a.memoizedState?!1:0!==(e&2));if(h)f=!0,b.flags&=-129;else if(null===a||null!==a.memoizedState)e|=1;G(M,e&1);if(null===a){Eg(b);a=b.memoizedState;if(null!==a&&(a=a.dehydrated,null!==a))return 0===(b.mode&1)?b.lanes=1:"$!"===a.data?b.lanes=8:b.lanes=1073741824,null;g=d.children;a=d.fallback;return f?(d=b.mode,f=b.child,g={mode:"hidden",children:g},0===(d&1)&&null!==f?(f.childLanes=0,f.pendingProps=
g):f=qj(g,d,0,null),a=Ah(a,d,c,null),f.return=b,a.return=b,f.sibling=a,b.child=f,b.child.memoizedState=oj(c),b.memoizedState=nj,a):rj(b,g)}e=a.memoizedState;if(null!==e&&(h=e.dehydrated,null!==h))return sj(a,b,g,d,h,e,c);if(f){f=d.fallback;g=b.mode;e=a.child;h=e.sibling;var k={mode:"hidden",children:d.children};0===(g&1)&&b.child!==e?(d=b.child,d.childLanes=0,d.pendingProps=k,b.deletions=null):(d=wh(e,k),d.subtreeFlags=e.subtreeFlags&14680064);null!==h?f=wh(h,f):(f=Ah(f,g,c,null),f.flags|=2);f.return=
b;d.return=b;d.sibling=f;b.child=d;d=f;f=b.child;g=a.child.memoizedState;g=null===g?oj(c):{baseLanes:g.baseLanes|c,cachePool:null,transitions:g.transitions};f.memoizedState=g;f.childLanes=a.childLanes&~c;b.memoizedState=nj;return d}f=a.child;a=f.sibling;d=wh(f,{mode:"visible",children:d.children});0===(b.mode&1)&&(d.lanes=c);d.return=b;d.sibling=null;null!==a&&(c=b.deletions,null===c?(b.deletions=[a],b.flags|=16):c.push(a));b.child=d;b.memoizedState=null;return d}
function rj(a,b){b=qj({mode:"visible",children:b},a.mode,0,null);b.return=a;return a.child=b}function tj(a,b,c,d){null!==d&&Jg(d);Bh(b,a.child,null,c);a=rj(b,b.pendingProps.children);a.flags|=2;b.memoizedState=null;return a}
function sj(a,b,c,d,e,f,g){if(c){if(b.flags&256)return b.flags&=-257,d=Li(Error(p(422))),tj(a,b,g,d);if(null!==b.memoizedState)return b.child=a.child,b.flags|=128,null;f=d.fallback;e=b.mode;d=qj({mode:"visible",children:d.children},e,0,null);f=Ah(f,e,g,null);f.flags|=2;d.return=b;f.return=b;d.sibling=f;b.child=d;0!==(b.mode&1)&&Bh(b,a.child,null,g);b.child.memoizedState=oj(g);b.memoizedState=nj;return f}if(0===(b.mode&1))return tj(a,b,g,null);if("$!"===e.data){d=e.nextSibling&&e.nextSibling.dataset;
if(d)var h=d.dgst;d=h;f=Error(p(419));d=Li(f,d,void 0);return tj(a,b,g,d)}h=0!==(g&a.childLanes);if(Ug||h){d=R;if(null!==d){switch(g&-g){case 4:e=2;break;case 16:e=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:e=32;break;case 536870912:e=268435456;break;default:e=0}e=0!==(e&(d.suspendedLanes|g))?0:e;
0!==e&&e!==f.retryLane&&(f.retryLane=e,Zg(a,e),mh(d,a,e,-1))}uj();d=Li(Error(p(421)));return tj(a,b,g,d)}if("$?"===e.data)return b.flags|=128,b.child=a.child,b=vj.bind(null,a),e._reactRetry=b,null;a=f.treeContext;yg=Lf(e.nextSibling);xg=b;I=!0;zg=null;null!==a&&(og[pg++]=rg,og[pg++]=sg,og[pg++]=qg,rg=a.id,sg=a.overflow,qg=b);b=rj(b,d.children);b.flags|=4096;return b}function wj(a,b,c){a.lanes|=b;var d=a.alternate;null!==d&&(d.lanes|=b);Sg(a.return,b,c)}
function xj(a,b,c,d,e){var f=a.memoizedState;null===f?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailMode:e}:(f.isBackwards=b,f.rendering=null,f.renderingStartTime=0,f.last=d,f.tail=c,f.tailMode=e)}
function yj(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;Yi(a,b,d.children,c);d=M.current;if(0!==(d&2))d=d&1|2,b.flags|=128;else{if(null!==a&&0!==(a.flags&128))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&wj(a,c,b);else if(19===a.tag)wj(a,c,b);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}d&=1}G(M,d);if(0===(b.mode&1))b.memoizedState=
null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===Mh(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);xj(b,!1,e,c,f);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===Mh(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a}xj(b,!0,c,null,f);break;case "together":xj(b,!1,null,null,void 0);break;default:b.memoizedState=null}return b.child}
function jj(a,b){0===(b.mode&1)&&null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2)}function $i(a,b,c){null!==a&&(b.dependencies=a.dependencies);hh|=b.lanes;if(0===(c&b.childLanes))return null;if(null!==a&&b.child!==a.child)throw Error(p(153));if(null!==b.child){a=b.child;c=wh(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=wh(a,a.pendingProps),c.return=b;c.sibling=null}return b.child}
function zj(a,b,c){switch(b.tag){case 3:lj(b);Ig();break;case 5:Kh(b);break;case 1:Zf(b.type)&&cg(b);break;case 4:Ih(b,b.stateNode.containerInfo);break;case 10:var d=b.type._context,e=b.memoizedProps.value;G(Mg,d._currentValue);d._currentValue=e;break;case 13:d=b.memoizedState;if(null!==d){if(null!==d.dehydrated)return G(M,M.current&1),b.flags|=128,null;if(0!==(c&b.child.childLanes))return pj(a,b,c);G(M,M.current&1);a=$i(a,b,c);return null!==a?a.sibling:null}G(M,M.current&1);break;case 19:d=0!==(c&
b.childLanes);if(0!==(a.flags&128)){if(d)return yj(a,b,c);b.flags|=128}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null,e.lastEffect=null);G(M,M.current);if(d)break;else return null;case 22:case 23:return b.lanes=0,ej(a,b,c)}return $i(a,b,c)}var Aj,Bj,Cj,Dj;
Aj=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};Bj=function(){};
Cj=function(a,b,c,d){var e=a.memoizedProps;if(e!==d){a=b.stateNode;Hh(Eh.current);var f=null;switch(c){case "input":e=Ya(a,e);d=Ya(a,d);f=[];break;case "select":e=A({},e,{value:void 0});d=A({},d,{value:void 0});f=[];break;case "textarea":e=gb(a,e);d=gb(a,d);f=[];break;default:"function"!==typeof e.onClick&&"function"===typeof d.onClick&&(a.onclick=Bf)}ub(c,d);var g;c=null;for(l in e)if(!d.hasOwnProperty(l)&&e.hasOwnProperty(l)&&null!=e[l])if("style"===l){var h=e[l];for(g in h)h.hasOwnProperty(g)&&
(c||(c={}),c[g]="")}else"dangerouslySetInnerHTML"!==l&&"children"!==l&&"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(ea.hasOwnProperty(l)?f||(f=[]):(f=f||[]).push(l,null));for(l in d){var k=d[l];h=null!=e?e[l]:void 0;if(d.hasOwnProperty(l)&&k!==h&&(null!=k||null!=h))if("style"===l)if(h){for(g in h)!h.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(c||(c={}),c[g]="");for(g in k)k.hasOwnProperty(g)&&h[g]!==k[g]&&(c||(c={}),c[g]=k[g])}else c||(f||(f=[]),f.push(l,
c)),c=k;else"dangerouslySetInnerHTML"===l?(k=k?k.__html:void 0,h=h?h.__html:void 0,null!=k&&h!==k&&(f=f||[]).push(l,k)):"children"===l?"string"!==typeof k&&"number"!==typeof k||(f=f||[]).push(l,""+k):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&(ea.hasOwnProperty(l)?(null!=k&&"onScroll"===l&&D("scroll",a),f||h===k||(f=[])):(f=f||[]).push(l,k))}c&&(f=f||[]).push("style",c);var l=f;if(b.updateQueue=l)b.flags|=4}};Dj=function(a,b,c,d){c!==d&&(b.flags|=4)};
function Ej(a,b){if(!I)switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null}}
function S(a){var b=null!==a.alternate&&a.alternate.child===a.child,c=0,d=0;if(b)for(var e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags&14680064,d|=e.flags&14680064,e.return=a,e=e.sibling;else for(e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags,d|=e.flags,e.return=a,e=e.sibling;a.subtreeFlags|=d;a.childLanes=c;return b}
function Fj(a,b,c){var d=b.pendingProps;wg(b);switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return S(b),null;case 1:return Zf(b.type)&&$f(),S(b),null;case 3:d=b.stateNode;Jh();E(Wf);E(H);Oh();d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===a||null===a.child)Gg(b)?b.flags|=4:null===a||a.memoizedState.isDehydrated&&0===(b.flags&256)||(b.flags|=1024,null!==zg&&(Gj(zg),zg=null));Bj(a,b);S(b);return null;case 5:Lh(b);var e=Hh(Gh.current);
c=b.type;if(null!==a&&null!=b.stateNode)Cj(a,b,c,d,e),a.ref!==b.ref&&(b.flags|=512,b.flags|=2097152);else{if(!d){if(null===b.stateNode)throw Error(p(166));S(b);return null}a=Hh(Eh.current);if(Gg(b)){d=b.stateNode;c=b.type;var f=b.memoizedProps;d[Of]=b;d[Pf]=f;a=0!==(b.mode&1);switch(c){case "dialog":D("cancel",d);D("close",d);break;case "iframe":case "object":case "embed":D("load",d);break;case "video":case "audio":for(e=0;e<lf.length;e++)D(lf[e],d);break;case "source":D("error",d);break;case "img":case "image":case "link":D("error",
d);D("load",d);break;case "details":D("toggle",d);break;case "input":Za(d,f);D("invalid",d);break;case "select":d._wrapperState={wasMultiple:!!f.multiple};D("invalid",d);break;case "textarea":hb(d,f),D("invalid",d)}ub(c,f);e=null;for(var g in f)if(f.hasOwnProperty(g)){var h=f[g];"children"===g?"string"===typeof h?d.textContent!==h&&(!0!==f.suppressHydrationWarning&&Af(d.textContent,h,a),e=["children",h]):"number"===typeof h&&d.textContent!==""+h&&(!0!==f.suppressHydrationWarning&&Af(d.textContent,
h,a),e=["children",""+h]):ea.hasOwnProperty(g)&&null!=h&&"onScroll"===g&&D("scroll",d)}switch(c){case "input":Va(d);db(d,f,!0);break;case "textarea":Va(d);jb(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&(d.onclick=Bf)}d=e;b.updateQueue=d;null!==d&&(b.flags|=4)}else{g=9===e.nodeType?e:e.ownerDocument;"http://www.w3.org/1999/xhtml"===a&&(a=kb(c));"http://www.w3.org/1999/xhtml"===a?"script"===c?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):
"string"===typeof d.is?a=g.createElement(c,{is:d.is}):(a=g.createElement(c),"select"===c&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,c);a[Of]=b;a[Pf]=d;Aj(a,b,!1,!1);b.stateNode=a;a:{g=vb(c,d);switch(c){case "dialog":D("cancel",a);D("close",a);e=d;break;case "iframe":case "object":case "embed":D("load",a);e=d;break;case "video":case "audio":for(e=0;e<lf.length;e++)D(lf[e],a);e=d;break;case "source":D("error",a);e=d;break;case "img":case "image":case "link":D("error",
a);D("load",a);e=d;break;case "details":D("toggle",a);e=d;break;case "input":Za(a,d);e=Ya(a,d);D("invalid",a);break;case "option":e=d;break;case "select":a._wrapperState={wasMultiple:!!d.multiple};e=A({},d,{value:void 0});D("invalid",a);break;case "textarea":hb(a,d);e=gb(a,d);D("invalid",a);break;default:e=d}ub(c,e);h=e;for(f in h)if(h.hasOwnProperty(f)){var k=h[f];"style"===f?sb(a,k):"dangerouslySetInnerHTML"===f?(k=k?k.__html:void 0,null!=k&&nb(a,k)):"children"===f?"string"===typeof k?("textarea"!==
c||""!==k)&&ob(a,k):"number"===typeof k&&ob(a,""+k):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(ea.hasOwnProperty(f)?null!=k&&"onScroll"===f&&D("scroll",a):null!=k&&ta(a,f,k,g))}switch(c){case "input":Va(a);db(a,d,!1);break;case "textarea":Va(a);jb(a);break;case "option":null!=d.value&&a.setAttribute("value",""+Sa(d.value));break;case "select":a.multiple=!!d.multiple;f=d.value;null!=f?fb(a,!!d.multiple,f,!1):null!=d.defaultValue&&fb(a,!!d.multiple,d.defaultValue,
!0);break;default:"function"===typeof e.onClick&&(a.onclick=Bf)}switch(c){case "button":case "input":case "select":case "textarea":d=!!d.autoFocus;break a;case "img":d=!0;break a;default:d=!1}}d&&(b.flags|=4)}null!==b.ref&&(b.flags|=512,b.flags|=2097152)}S(b);return null;case 6:if(a&&null!=b.stateNode)Dj(a,b,a.memoizedProps,d);else{if("string"!==typeof d&&null===b.stateNode)throw Error(p(166));c=Hh(Gh.current);Hh(Eh.current);if(Gg(b)){d=b.stateNode;c=b.memoizedProps;d[Of]=b;if(f=d.nodeValue!==c)if(a=
xg,null!==a)switch(a.tag){case 3:Af(d.nodeValue,c,0!==(a.mode&1));break;case 5:!0!==a.memoizedProps.suppressHydrationWarning&&Af(d.nodeValue,c,0!==(a.mode&1))}f&&(b.flags|=4)}else d=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),d[Of]=b,b.stateNode=d}S(b);return null;case 13:E(M);d=b.memoizedState;if(null===a||null!==a.memoizedState&&null!==a.memoizedState.dehydrated){if(I&&null!==yg&&0!==(b.mode&1)&&0===(b.flags&128))Hg(),Ig(),b.flags|=98560,f=!1;else if(f=Gg(b),null!==d&&null!==d.dehydrated){if(null===
a){if(!f)throw Error(p(318));f=b.memoizedState;f=null!==f?f.dehydrated:null;if(!f)throw Error(p(317));f[Of]=b}else Ig(),0===(b.flags&128)&&(b.memoizedState=null),b.flags|=4;S(b);f=!1}else null!==zg&&(Gj(zg),zg=null),f=!0;if(!f)return b.flags&65536?b:null}if(0!==(b.flags&128))return b.lanes=c,b;d=null!==d;d!==(null!==a&&null!==a.memoizedState)&&d&&(b.child.flags|=8192,0!==(b.mode&1)&&(null===a||0!==(M.current&1)?0===T&&(T=3):uj()));null!==b.updateQueue&&(b.flags|=4);S(b);return null;case 4:return Jh(),
Bj(a,b),null===a&&sf(b.stateNode.containerInfo),S(b),null;case 10:return Rg(b.type._context),S(b),null;case 17:return Zf(b.type)&&$f(),S(b),null;case 19:E(M);f=b.memoizedState;if(null===f)return S(b),null;d=0!==(b.flags&128);g=f.rendering;if(null===g)if(d)Ej(f,!1);else{if(0!==T||null!==a&&0!==(a.flags&128))for(a=b.child;null!==a;){g=Mh(a);if(null!==g){b.flags|=128;Ej(f,!1);d=g.updateQueue;null!==d&&(b.updateQueue=d,b.flags|=4);b.subtreeFlags=0;d=c;for(c=b.child;null!==c;)f=c,a=d,f.flags&=14680066,
g=f.alternate,null===g?(f.childLanes=0,f.lanes=a,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=g.childLanes,f.lanes=g.lanes,f.child=g.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,f.updateQueue=g.updateQueue,f.type=g.type,a=g.dependencies,f.dependencies=null===a?null:{lanes:a.lanes,firstContext:a.firstContext}),c=c.sibling;G(M,M.current&1|2);return b.child}a=
a.sibling}null!==f.tail&&B()>Hj&&(b.flags|=128,d=!0,Ej(f,!1),b.lanes=4194304)}else{if(!d)if(a=Mh(g),null!==a){if(b.flags|=128,d=!0,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.flags|=4),Ej(f,!0),null===f.tail&&"hidden"===f.tailMode&&!g.alternate&&!I)return S(b),null}else 2*B()-f.renderingStartTime>Hj&&1073741824!==c&&(b.flags|=128,d=!0,Ej(f,!1),b.lanes=4194304);f.isBackwards?(g.sibling=b.child,b.child=g):(c=f.last,null!==c?c.sibling=g:b.child=g,f.last=g)}if(null!==f.tail)return b=f.tail,f.rendering=
b,f.tail=b.sibling,f.renderingStartTime=B(),b.sibling=null,c=M.current,G(M,d?c&1|2:c&1),b;S(b);return null;case 22:case 23:return Ij(),d=null!==b.memoizedState,null!==a&&null!==a.memoizedState!==d&&(b.flags|=8192),d&&0!==(b.mode&1)?0!==(gj&1073741824)&&(S(b),b.subtreeFlags&6&&(b.flags|=8192)):S(b),null;case 24:return null;case 25:return null}throw Error(p(156,b.tag));}
function Jj(a,b){wg(b);switch(b.tag){case 1:return Zf(b.type)&&$f(),a=b.flags,a&65536?(b.flags=a&-65537|128,b):null;case 3:return Jh(),E(Wf),E(H),Oh(),a=b.flags,0!==(a&65536)&&0===(a&128)?(b.flags=a&-65537|128,b):null;case 5:return Lh(b),null;case 13:E(M);a=b.memoizedState;if(null!==a&&null!==a.dehydrated){if(null===b.alternate)throw Error(p(340));Ig()}a=b.flags;return a&65536?(b.flags=a&-65537|128,b):null;case 19:return E(M),null;case 4:return Jh(),null;case 10:return Rg(b.type._context),null;case 22:case 23:return Ij(),
null;case 24:return null;default:return null}}var Kj=!1,U=!1,Lj="function"===typeof WeakSet?WeakSet:Set,V=null;function Mj(a,b){var c=a.ref;if(null!==c)if("function"===typeof c)try{c(null)}catch(d){W(a,b,d)}else c.current=null}function Nj(a,b,c){try{c()}catch(d){W(a,b,d)}}var Oj=!1;
function Pj(a,b){Cf=dd;a=Me();if(Ne(a)){if("selectionStart"in a)var c={start:a.selectionStart,end:a.selectionEnd};else a:{c=(c=a.ownerDocument)&&c.defaultView||window;var d=c.getSelection&&c.getSelection();if(d&&0!==d.rangeCount){c=d.anchorNode;var e=d.anchorOffset,f=d.focusNode;d=d.focusOffset;try{c.nodeType,f.nodeType}catch(F){c=null;break a}var g=0,h=-1,k=-1,l=0,m=0,q=a,r=null;b:for(;;){for(var y;;){q!==c||0!==e&&3!==q.nodeType||(h=g+e);q!==f||0!==d&&3!==q.nodeType||(k=g+d);3===q.nodeType&&(g+=
q.nodeValue.length);if(null===(y=q.firstChild))break;r=q;q=y}for(;;){if(q===a)break b;r===c&&++l===e&&(h=g);r===f&&++m===d&&(k=g);if(null!==(y=q.nextSibling))break;q=r;r=q.parentNode}q=y}c=-1===h||-1===k?null:{start:h,end:k}}else c=null}c=c||{start:0,end:0}}else c=null;Df={focusedElem:a,selectionRange:c};dd=!1;for(V=b;null!==V;)if(b=V,a=b.child,0!==(b.subtreeFlags&1028)&&null!==a)a.return=b,V=a;else for(;null!==V;){b=V;try{var n=b.alternate;if(0!==(b.flags&1024))switch(b.tag){case 0:case 11:case 15:break;
case 1:if(null!==n){var t=n.memoizedProps,J=n.memoizedState,x=b.stateNode,w=x.getSnapshotBeforeUpdate(b.elementType===b.type?t:Lg(b.type,t),J);x.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var u=b.stateNode.containerInfo;1===u.nodeType?u.textContent="":9===u.nodeType&&u.documentElement&&u.removeChild(u.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(p(163));}}catch(F){W(b,b.return,F)}a=b.sibling;if(null!==a){a.return=b.return;V=a;break}V=b.return}n=Oj;Oj=!1;return n}
function Qj(a,b,c){var d=b.updateQueue;d=null!==d?d.lastEffect:null;if(null!==d){var e=d=d.next;do{if((e.tag&a)===a){var f=e.destroy;e.destroy=void 0;void 0!==f&&Nj(b,c,f)}e=e.next}while(e!==d)}}function Rj(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.create;c.destroy=d()}c=c.next}while(c!==b)}}function Sj(a){var b=a.ref;if(null!==b){var c=a.stateNode;switch(a.tag){case 5:a=c;break;default:a=c}"function"===typeof b?b(a):b.current=a}}
function Tj(a){var b=a.alternate;null!==b&&(a.alternate=null,Tj(b));a.child=null;a.deletions=null;a.sibling=null;5===a.tag&&(b=a.stateNode,null!==b&&(delete b[Of],delete b[Pf],delete b[of],delete b[Qf],delete b[Rf]));a.stateNode=null;a.return=null;a.dependencies=null;a.memoizedProps=null;a.memoizedState=null;a.pendingProps=null;a.stateNode=null;a.updateQueue=null}function Uj(a){return 5===a.tag||3===a.tag||4===a.tag}
function Vj(a){a:for(;;){for(;null===a.sibling;){if(null===a.return||Uj(a.return))return null;a=a.return}a.sibling.return=a.return;for(a=a.sibling;5!==a.tag&&6!==a.tag&&18!==a.tag;){if(a.flags&2)continue a;if(null===a.child||4===a.tag)continue a;else a.child.return=a,a=a.child}if(!(a.flags&2))return a.stateNode}}
function Wj(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=Bf));else if(4!==d&&(a=a.child,null!==a))for(Wj(a,b,c),a=a.sibling;null!==a;)Wj(a,b,c),a=a.sibling}
function Xj(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(Xj(a,b,c),a=a.sibling;null!==a;)Xj(a,b,c),a=a.sibling}var X=null,Yj=!1;function Zj(a,b,c){for(c=c.child;null!==c;)ak(a,b,c),c=c.sibling}
function ak(a,b,c){if(lc&&"function"===typeof lc.onCommitFiberUnmount)try{lc.onCommitFiberUnmount(kc,c)}catch(h){}switch(c.tag){case 5:U||Mj(c,b);case 6:var d=X,e=Yj;X=null;Zj(a,b,c);X=d;Yj=e;null!==X&&(Yj?(a=X,c=c.stateNode,8===a.nodeType?a.parentNode.removeChild(c):a.removeChild(c)):X.removeChild(c.stateNode));break;case 18:null!==X&&(Yj?(a=X,c=c.stateNode,8===a.nodeType?Kf(a.parentNode,c):1===a.nodeType&&Kf(a,c),bd(a)):Kf(X,c.stateNode));break;case 4:d=X;e=Yj;X=c.stateNode.containerInfo;Yj=!0;
Zj(a,b,c);X=d;Yj=e;break;case 0:case 11:case 14:case 15:if(!U&&(d=c.updateQueue,null!==d&&(d=d.lastEffect,null!==d))){e=d=d.next;do{var f=e,g=f.destroy;f=f.tag;void 0!==g&&(0!==(f&2)?Nj(c,b,g):0!==(f&4)&&Nj(c,b,g));e=e.next}while(e!==d)}Zj(a,b,c);break;case 1:if(!U&&(Mj(c,b),d=c.stateNode,"function"===typeof d.componentWillUnmount))try{d.props=c.memoizedProps,d.state=c.memoizedState,d.componentWillUnmount()}catch(h){W(c,b,h)}Zj(a,b,c);break;case 21:Zj(a,b,c);break;case 22:c.mode&1?(U=(d=U)||null!==
c.memoizedState,Zj(a,b,c),U=d):Zj(a,b,c);break;default:Zj(a,b,c)}}function bk(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Lj);b.forEach(function(b){var d=ck.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d))})}}
function dk(a,b){var c=b.deletions;if(null!==c)for(var d=0;d<c.length;d++){var e=c[d];try{var f=a,g=b,h=g;a:for(;null!==h;){switch(h.tag){case 5:X=h.stateNode;Yj=!1;break a;case 3:X=h.stateNode.containerInfo;Yj=!0;break a;case 4:X=h.stateNode.containerInfo;Yj=!0;break a}h=h.return}if(null===X)throw Error(p(160));ak(f,g,e);X=null;Yj=!1;var k=e.alternate;null!==k&&(k.return=null);e.return=null}catch(l){W(e,b,l)}}if(b.subtreeFlags&12854)for(b=b.child;null!==b;)ek(b,a),b=b.sibling}
function ek(a,b){var c=a.alternate,d=a.flags;switch(a.tag){case 0:case 11:case 14:case 15:dk(b,a);fk(a);if(d&4){try{Qj(3,a,a.return),Rj(3,a)}catch(t){W(a,a.return,t)}try{Qj(5,a,a.return)}catch(t){W(a,a.return,t)}}break;case 1:dk(b,a);fk(a);d&512&&null!==c&&Mj(c,c.return);break;case 5:dk(b,a);fk(a);d&512&&null!==c&&Mj(c,c.return);if(a.flags&32){var e=a.stateNode;try{ob(e,"")}catch(t){W(a,a.return,t)}}if(d&4&&(e=a.stateNode,null!=e)){var f=a.memoizedProps,g=null!==c?c.memoizedProps:f,h=a.type,k=a.updateQueue;
a.updateQueue=null;if(null!==k)try{"input"===h&&"radio"===f.type&&null!=f.name&&ab(e,f);vb(h,g);var l=vb(h,f);for(g=0;g<k.length;g+=2){var m=k[g],q=k[g+1];"style"===m?sb(e,q):"dangerouslySetInnerHTML"===m?nb(e,q):"children"===m?ob(e,q):ta(e,m,q,l)}switch(h){case "input":bb(e,f);break;case "textarea":ib(e,f);break;case "select":var r=e._wrapperState.wasMultiple;e._wrapperState.wasMultiple=!!f.multiple;var y=f.value;null!=y?fb(e,!!f.multiple,y,!1):r!==!!f.multiple&&(null!=f.defaultValue?fb(e,!!f.multiple,
f.defaultValue,!0):fb(e,!!f.multiple,f.multiple?[]:"",!1))}e[Pf]=f}catch(t){W(a,a.return,t)}}break;case 6:dk(b,a);fk(a);if(d&4){if(null===a.stateNode)throw Error(p(162));e=a.stateNode;f=a.memoizedProps;try{e.nodeValue=f}catch(t){W(a,a.return,t)}}break;case 3:dk(b,a);fk(a);if(d&4&&null!==c&&c.memoizedState.isDehydrated)try{bd(b.containerInfo)}catch(t){W(a,a.return,t)}break;case 4:dk(b,a);fk(a);break;case 13:dk(b,a);fk(a);e=a.child;e.flags&8192&&(f=null!==e.memoizedState,e.stateNode.isHidden=f,!f||
null!==e.alternate&&null!==e.alternate.memoizedState||(gk=B()));d&4&&bk(a);break;case 22:m=null!==c&&null!==c.memoizedState;a.mode&1?(U=(l=U)||m,dk(b,a),U=l):dk(b,a);fk(a);if(d&8192){l=null!==a.memoizedState;if((a.stateNode.isHidden=l)&&!m&&0!==(a.mode&1))for(V=a,m=a.child;null!==m;){for(q=V=m;null!==V;){r=V;y=r.child;switch(r.tag){case 0:case 11:case 14:case 15:Qj(4,r,r.return);break;case 1:Mj(r,r.return);var n=r.stateNode;if("function"===typeof n.componentWillUnmount){d=r;c=r.return;try{b=d,n.props=
b.memoizedProps,n.state=b.memoizedState,n.componentWillUnmount()}catch(t){W(d,c,t)}}break;case 5:Mj(r,r.return);break;case 22:if(null!==r.memoizedState){hk(q);continue}}null!==y?(y.return=r,V=y):hk(q)}m=m.sibling}a:for(m=null,q=a;;){if(5===q.tag){if(null===m){m=q;try{e=q.stateNode,l?(f=e.style,"function"===typeof f.setProperty?f.setProperty("display","none","important"):f.display="none"):(h=q.stateNode,k=q.memoizedProps.style,g=void 0!==k&&null!==k&&k.hasOwnProperty("display")?k.display:null,h.style.display=
rb("display",g))}catch(t){W(a,a.return,t)}}}else if(6===q.tag){if(null===m)try{q.stateNode.nodeValue=l?"":q.memoizedProps}catch(t){W(a,a.return,t)}}else if((22!==q.tag&&23!==q.tag||null===q.memoizedState||q===a)&&null!==q.child){q.child.return=q;q=q.child;continue}if(q===a)break a;for(;null===q.sibling;){if(null===q.return||q.return===a)break a;m===q&&(m=null);q=q.return}m===q&&(m=null);q.sibling.return=q.return;q=q.sibling}}break;case 19:dk(b,a);fk(a);d&4&&bk(a);break;case 21:break;default:dk(b,
a),fk(a)}}function fk(a){var b=a.flags;if(b&2){try{a:{for(var c=a.return;null!==c;){if(Uj(c)){var d=c;break a}c=c.return}throw Error(p(160));}switch(d.tag){case 5:var e=d.stateNode;d.flags&32&&(ob(e,""),d.flags&=-33);var f=Vj(a);Xj(a,f,e);break;case 3:case 4:var g=d.stateNode.containerInfo,h=Vj(a);Wj(a,h,g);break;default:throw Error(p(161));}}catch(k){W(a,a.return,k)}a.flags&=-3}b&4096&&(a.flags&=-4097)}function ik(a,b,c){V=a;jk(a,b,c)}
function jk(a,b,c){for(var d=0!==(a.mode&1);null!==V;){var e=V,f=e.child;if(22===e.tag&&d){var g=null!==e.memoizedState||Kj;if(!g){var h=e.alternate,k=null!==h&&null!==h.memoizedState||U;h=Kj;var l=U;Kj=g;if((U=k)&&!l)for(V=e;null!==V;)g=V,k=g.child,22===g.tag&&null!==g.memoizedState?kk(e):null!==k?(k.return=g,V=k):kk(e);for(;null!==f;)V=f,jk(f,b,c),f=f.sibling;V=e;Kj=h;U=l}lk(a,b,c)}else 0!==(e.subtreeFlags&8772)&&null!==f?(f.return=e,V=f):lk(a,b,c)}}
function lk(a){for(;null!==V;){var b=V;if(0!==(b.flags&8772)){var c=b.alternate;try{if(0!==(b.flags&8772))switch(b.tag){case 0:case 11:case 15:U||Rj(5,b);break;case 1:var d=b.stateNode;if(b.flags&4&&!U)if(null===c)d.componentDidMount();else{var e=b.elementType===b.type?c.memoizedProps:Lg(b.type,c.memoizedProps);d.componentDidUpdate(e,c.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var f=b.updateQueue;null!==f&&ih(b,f,d);break;case 3:var g=b.updateQueue;if(null!==g){c=null;if(null!==b.child)switch(b.child.tag){case 5:c=
b.child.stateNode;break;case 1:c=b.child.stateNode}ih(b,g,c)}break;case 5:var h=b.stateNode;if(null===c&&b.flags&4){c=h;var k=b.memoizedProps;switch(b.type){case "button":case "input":case "select":case "textarea":k.autoFocus&&c.focus();break;case "img":k.src&&(c.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(null===b.memoizedState){var l=b.alternate;if(null!==l){var m=l.memoizedState;if(null!==m){var q=m.dehydrated;null!==q&&bd(q)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;
default:throw Error(p(163));}U||b.flags&512&&Sj(b)}catch(r){W(b,b.return,r)}}if(b===a){V=null;break}c=b.sibling;if(null!==c){c.return=b.return;V=c;break}V=b.return}}function hk(a){for(;null!==V;){var b=V;if(b===a){V=null;break}var c=b.sibling;if(null!==c){c.return=b.return;V=c;break}V=b.return}}
function kk(a){for(;null!==V;){var b=V;try{switch(b.tag){case 0:case 11:case 15:var c=b.return;try{Rj(4,b)}catch(k){W(b,c,k)}break;case 1:var d=b.stateNode;if("function"===typeof d.componentDidMount){var e=b.return;try{d.componentDidMount()}catch(k){W(b,e,k)}}var f=b.return;try{Sj(b)}catch(k){W(b,f,k)}break;case 5:var g=b.return;try{Sj(b)}catch(k){W(b,g,k)}}}catch(k){W(b,b.return,k)}if(b===a){V=null;break}var h=b.sibling;if(null!==h){h.return=b.return;V=h;break}V=b.return}}
var mk=Math.ceil,nk=ua.ReactCurrentDispatcher,ok=ua.ReactCurrentOwner,pk=ua.ReactCurrentBatchConfig,K=0,R=null,Y=null,Z=0,gj=0,fj=Uf(0),T=0,qk=null,hh=0,rk=0,sk=0,tk=null,uk=null,gk=0,Hj=Infinity,vk=null,Pi=!1,Qi=null,Si=null,wk=!1,xk=null,yk=0,zk=0,Ak=null,Bk=-1,Ck=0;function L(){return 0!==(K&6)?B():-1!==Bk?Bk:Bk=B()}
function lh(a){if(0===(a.mode&1))return 1;if(0!==(K&2)&&0!==Z)return Z&-Z;if(null!==Kg.transition)return 0===Ck&&(Ck=yc()),Ck;a=C;if(0!==a)return a;a=window.event;a=void 0===a?16:jd(a.type);return a}function mh(a,b,c,d){if(50<zk)throw zk=0,Ak=null,Error(p(185));Ac(a,c,d);if(0===(K&2)||a!==R)a===R&&(0===(K&2)&&(rk|=c),4===T&&Dk(a,Z)),Ek(a,d),1===c&&0===K&&0===(b.mode&1)&&(Hj=B()+500,fg&&jg())}
function Ek(a,b){var c=a.callbackNode;wc(a,b);var d=uc(a,a===R?Z:0);if(0===d)null!==c&&bc(c),a.callbackNode=null,a.callbackPriority=0;else if(b=d&-d,a.callbackPriority!==b){null!=c&&bc(c);if(1===b)0===a.tag?ig(Fk.bind(null,a)):hg(Fk.bind(null,a)),Jf(function(){0===(K&6)&&jg()}),c=null;else{switch(Dc(d)){case 1:c=fc;break;case 4:c=gc;break;case 16:c=hc;break;case 536870912:c=jc;break;default:c=hc}c=Gk(c,Hk.bind(null,a))}a.callbackPriority=b;a.callbackNode=c}}
function Hk(a,b){Bk=-1;Ck=0;if(0!==(K&6))throw Error(p(327));var c=a.callbackNode;if(Ik()&&a.callbackNode!==c)return null;var d=uc(a,a===R?Z:0);if(0===d)return null;if(0!==(d&30)||0!==(d&a.expiredLanes)||b)b=Jk(a,d);else{b=d;var e=K;K|=2;var f=Kk();if(R!==a||Z!==b)vk=null,Hj=B()+500,Lk(a,b);do try{Mk();break}catch(h){Nk(a,h)}while(1);Qg();nk.current=f;K=e;null!==Y?b=0:(R=null,Z=0,b=T)}if(0!==b){2===b&&(e=xc(a),0!==e&&(d=e,b=Ok(a,e)));if(1===b)throw c=qk,Lk(a,0),Dk(a,d),Ek(a,B()),c;if(6===b)Dk(a,d);
else{e=a.current.alternate;if(0===(d&30)&&!Pk(e)&&(b=Jk(a,d),2===b&&(f=xc(a),0!==f&&(d=f,b=Ok(a,f))),1===b))throw c=qk,Lk(a,0),Dk(a,d),Ek(a,B()),c;a.finishedWork=e;a.finishedLanes=d;switch(b){case 0:case 1:throw Error(p(345));case 2:Qk(a,uk,vk);break;case 3:Dk(a,d);if((d&130023424)===d&&(b=gk+500-B(),10<b)){if(0!==uc(a,0))break;e=a.suspendedLanes;if((e&d)!==d){L();a.pingedLanes|=a.suspendedLanes&e;break}a.timeoutHandle=Ff(Qk.bind(null,a,uk,vk),b);break}Qk(a,uk,vk);break;case 4:Dk(a,d);if((d&4194240)===
d)break;b=a.eventTimes;for(e=-1;0<d;){var g=31-oc(d);f=1<<g;g=b[g];g>e&&(e=g);d&=~f}d=e;d=B()-d;d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3E3>d?3E3:4320>d?4320:1960*mk(d/1960))-d;if(10<d){a.timeoutHandle=Ff(Qk.bind(null,a,uk,vk),d);break}Qk(a,uk,vk);break;case 5:Qk(a,uk,vk);break;default:throw Error(p(329));}}}Ek(a,B());return a.callbackNode===c?Hk.bind(null,a):null}
function Ok(a,b){var c=tk;a.current.memoizedState.isDehydrated&&(Lk(a,b).flags|=256);a=Jk(a,b);2!==a&&(b=uk,uk=c,null!==b&&Gj(b));return a}function Gj(a){null===uk?uk=a:uk.push.apply(uk,a)}
function Pk(a){for(var b=a;;){if(b.flags&16384){var c=b.updateQueue;if(null!==c&&(c=c.stores,null!==c))for(var d=0;d<c.length;d++){var e=c[d],f=e.getSnapshot;e=e.value;try{if(!He(f(),e))return!1}catch(g){return!1}}}c=b.child;if(b.subtreeFlags&16384&&null!==c)c.return=b,b=c;else{if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return!0;b=b.return}b.sibling.return=b.return;b=b.sibling}}return!0}
function Dk(a,b){b&=~sk;b&=~rk;a.suspendedLanes|=b;a.pingedLanes&=~b;for(a=a.expirationTimes;0<b;){var c=31-oc(b),d=1<<c;a[c]=-1;b&=~d}}function Fk(a){if(0!==(K&6))throw Error(p(327));Ik();var b=uc(a,0);if(0===(b&1))return Ek(a,B()),null;var c=Jk(a,b);if(0!==a.tag&&2===c){var d=xc(a);0!==d&&(b=d,c=Ok(a,d))}if(1===c)throw c=qk,Lk(a,0),Dk(a,b),Ek(a,B()),c;if(6===c)throw Error(p(345));a.finishedWork=a.current.alternate;a.finishedLanes=b;Qk(a,uk,vk);Ek(a,B());return null}
function Rk(a,b){var c=K;K|=1;try{return a(b)}finally{K=c,0===K&&(Hj=B()+500,fg&&jg())}}function Sk(a){null!==xk&&0===xk.tag&&0===(K&6)&&Ik();var b=K;K|=1;var c=pk.transition,d=C;try{if(pk.transition=null,C=1,a)return a()}finally{C=d,pk.transition=c,K=b,0===(K&6)&&jg()}}function Ij(){gj=fj.current;E(fj)}
function Lk(a,b){a.finishedWork=null;a.finishedLanes=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,Gf(c));if(null!==Y)for(c=Y.return;null!==c;){var d=c;wg(d);switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&$f();break;case 3:Jh();E(Wf);E(H);Oh();break;case 5:Lh(d);break;case 4:Jh();break;case 13:E(M);break;case 19:E(M);break;case 10:Rg(d.type._context);break;case 22:case 23:Ij()}c=c.return}R=a;Y=a=wh(a.current,null);Z=gj=b;T=0;qk=null;sk=rk=hh=0;uk=tk=null;if(null!==Wg){for(b=
0;b<Wg.length;b++)if(c=Wg[b],d=c.interleaved,null!==d){c.interleaved=null;var e=d.next,f=c.pending;if(null!==f){var g=f.next;f.next=e;d.next=g}c.pending=d}Wg=null}return a}
function Nk(a,b){do{var c=Y;try{Qg();Ph.current=ai;if(Sh){for(var d=N.memoizedState;null!==d;){var e=d.queue;null!==e&&(e.pending=null);d=d.next}Sh=!1}Rh=0;P=O=N=null;Th=!1;Uh=0;ok.current=null;if(null===c||null===c.return){T=1;qk=b;Y=null;break}a:{var f=a,g=c.return,h=c,k=b;b=Z;h.flags|=32768;if(null!==k&&"object"===typeof k&&"function"===typeof k.then){var l=k,m=h,q=m.tag;if(0===(m.mode&1)&&(0===q||11===q||15===q)){var r=m.alternate;r?(m.updateQueue=r.updateQueue,m.memoizedState=r.memoizedState,
m.lanes=r.lanes):(m.updateQueue=null,m.memoizedState=null)}var y=Vi(g);if(null!==y){y.flags&=-257;Wi(y,g,h,f,b);y.mode&1&&Ti(f,l,b);b=y;k=l;var n=b.updateQueue;if(null===n){var t=new Set;t.add(k);b.updateQueue=t}else n.add(k);break a}else{if(0===(b&1)){Ti(f,l,b);uj();break a}k=Error(p(426))}}else if(I&&h.mode&1){var J=Vi(g);if(null!==J){0===(J.flags&65536)&&(J.flags|=256);Wi(J,g,h,f,b);Jg(Ki(k,h));break a}}f=k=Ki(k,h);4!==T&&(T=2);null===tk?tk=[f]:tk.push(f);f=g;do{switch(f.tag){case 3:f.flags|=65536;
b&=-b;f.lanes|=b;var x=Oi(f,k,b);fh(f,x);break a;case 1:h=k;var w=f.type,u=f.stateNode;if(0===(f.flags&128)&&("function"===typeof w.getDerivedStateFromError||null!==u&&"function"===typeof u.componentDidCatch&&(null===Si||!Si.has(u)))){f.flags|=65536;b&=-b;f.lanes|=b;var F=Ri(f,h,b);fh(f,F);break a}}f=f.return}while(null!==f)}Tk(c)}catch(na){b=na;Y===c&&null!==c&&(Y=c=c.return);continue}break}while(1)}function Kk(){var a=nk.current;nk.current=ai;return null===a?ai:a}
function uj(){if(0===T||3===T||2===T)T=4;null===R||0===(hh&268435455)&&0===(rk&268435455)||Dk(R,Z)}function Jk(a,b){var c=K;K|=2;var d=Kk();if(R!==a||Z!==b)vk=null,Lk(a,b);do try{Uk();break}catch(e){Nk(a,e)}while(1);Qg();K=c;nk.current=d;if(null!==Y)throw Error(p(261));R=null;Z=0;return T}function Uk(){for(;null!==Y;)Vk(Y)}function Mk(){for(;null!==Y&&!cc();)Vk(Y)}function Vk(a){var b=Wk(a.alternate,a,gj);a.memoizedProps=a.pendingProps;null===b?Tk(a):Y=b;ok.current=null}
function Tk(a){var b=a;do{var c=b.alternate;a=b.return;if(0===(b.flags&32768)){if(c=Fj(c,b,gj),null!==c){Y=c;return}}else{c=Jj(c,b);if(null!==c){c.flags&=32767;Y=c;return}if(null!==a)a.flags|=32768,a.subtreeFlags=0,a.deletions=null;else{T=6;Y=null;return}}b=b.sibling;if(null!==b){Y=b;return}Y=b=a}while(null!==b);0===T&&(T=5)}function Qk(a,b,c){var d=C,e=pk.transition;try{pk.transition=null,C=1,Xk(a,b,c,d)}finally{pk.transition=e,C=d}return null}
function Xk(a,b,c,d){do Ik();while(null!==xk);if(0!==(K&6))throw Error(p(327));c=a.finishedWork;var e=a.finishedLanes;if(null===c)return null;a.finishedWork=null;a.finishedLanes=0;if(c===a.current)throw Error(p(177));a.callbackNode=null;a.callbackPriority=0;var f=c.lanes|c.childLanes;Bc(a,f);a===R&&(Y=R=null,Z=0);0===(c.subtreeFlags&2064)&&0===(c.flags&2064)||wk||(wk=!0,Gk(hc,function(){Ik();return null}));f=0!==(c.flags&15990);if(0!==(c.subtreeFlags&15990)||f){f=pk.transition;pk.transition=null;
var g=C;C=1;var h=K;K|=4;ok.current=null;Pj(a,c);ek(c,a);Oe(Df);dd=!!Cf;Df=Cf=null;a.current=c;ik(c,a,e);dc();K=h;C=g;pk.transition=f}else a.current=c;wk&&(wk=!1,xk=a,yk=e);f=a.pendingLanes;0===f&&(Si=null);mc(c.stateNode,d);Ek(a,B());if(null!==b)for(d=a.onRecoverableError,c=0;c<b.length;c++)e=b[c],d(e.value,{componentStack:e.stack,digest:e.digest});if(Pi)throw Pi=!1,a=Qi,Qi=null,a;0!==(yk&1)&&0!==a.tag&&Ik();f=a.pendingLanes;0!==(f&1)?a===Ak?zk++:(zk=0,Ak=a):zk=0;jg();return null}
function Ik(){if(null!==xk){var a=Dc(yk),b=pk.transition,c=C;try{pk.transition=null;C=16>a?16:a;if(null===xk)var d=!1;else{a=xk;xk=null;yk=0;if(0!==(K&6))throw Error(p(331));var e=K;K|=4;for(V=a.current;null!==V;){var f=V,g=f.child;if(0!==(V.flags&16)){var h=f.deletions;if(null!==h){for(var k=0;k<h.length;k++){var l=h[k];for(V=l;null!==V;){var m=V;switch(m.tag){case 0:case 11:case 15:Qj(8,m,f)}var q=m.child;if(null!==q)q.return=m,V=q;else for(;null!==V;){m=V;var r=m.sibling,y=m.return;Tj(m);if(m===
l){V=null;break}if(null!==r){r.return=y;V=r;break}V=y}}}var n=f.alternate;if(null!==n){var t=n.child;if(null!==t){n.child=null;do{var J=t.sibling;t.sibling=null;t=J}while(null!==t)}}V=f}}if(0!==(f.subtreeFlags&2064)&&null!==g)g.return=f,V=g;else b:for(;null!==V;){f=V;if(0!==(f.flags&2048))switch(f.tag){case 0:case 11:case 15:Qj(9,f,f.return)}var x=f.sibling;if(null!==x){x.return=f.return;V=x;break b}V=f.return}}var w=a.current;for(V=w;null!==V;){g=V;var u=g.child;if(0!==(g.subtreeFlags&2064)&&null!==
u)u.return=g,V=u;else b:for(g=w;null!==V;){h=V;if(0!==(h.flags&2048))try{switch(h.tag){case 0:case 11:case 15:Rj(9,h)}}catch(na){W(h,h.return,na)}if(h===g){V=null;break b}var F=h.sibling;if(null!==F){F.return=h.return;V=F;break b}V=h.return}}K=e;jg();if(lc&&"function"===typeof lc.onPostCommitFiberRoot)try{lc.onPostCommitFiberRoot(kc,a)}catch(na){}d=!0}return d}finally{C=c,pk.transition=b}}return!1}function Yk(a,b,c){b=Ki(c,b);b=Oi(a,b,1);a=dh(a,b,1);b=L();null!==a&&(Ac(a,1,b),Ek(a,b))}
function W(a,b,c){if(3===a.tag)Yk(a,a,c);else for(;null!==b;){if(3===b.tag){Yk(b,a,c);break}else if(1===b.tag){var d=b.stateNode;if("function"===typeof b.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Si||!Si.has(d))){a=Ki(c,a);a=Ri(b,a,1);b=dh(b,a,1);a=L();null!==b&&(Ac(b,1,a),Ek(b,a));break}}b=b.return}}
function Ui(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);b=L();a.pingedLanes|=a.suspendedLanes&c;R===a&&(Z&c)===c&&(4===T||3===T&&(Z&130023424)===Z&&500>B()-gk?Lk(a,0):sk|=c);Ek(a,b)}function Zk(a,b){0===b&&(0===(a.mode&1)?b=1:(b=sc,sc<<=1,0===(sc&130023424)&&(sc=4194304)));var c=L();a=Zg(a,b);null!==a&&(Ac(a,b,c),Ek(a,c))}function vj(a){var b=a.memoizedState,c=0;null!==b&&(c=b.retryLane);Zk(a,c)}
function ck(a,b){var c=0;switch(a.tag){case 13:var d=a.stateNode;var e=a.memoizedState;null!==e&&(c=e.retryLane);break;case 19:d=a.stateNode;break;default:throw Error(p(314));}null!==d&&d.delete(b);Zk(a,c)}var Wk;
Wk=function(a,b,c){if(null!==a)if(a.memoizedProps!==b.pendingProps||Wf.current)Ug=!0;else{if(0===(a.lanes&c)&&0===(b.flags&128))return Ug=!1,zj(a,b,c);Ug=0!==(a.flags&131072)?!0:!1}else Ug=!1,I&&0!==(b.flags&1048576)&&ug(b,ng,b.index);b.lanes=0;switch(b.tag){case 2:var d=b.type;jj(a,b);a=b.pendingProps;var e=Yf(b,H.current);Tg(b,c);e=Xh(null,b,d,a,e,c);var f=bi();b.flags|=1;"object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof?(b.tag=1,b.memoizedState=null,b.updateQueue=
null,Zf(d)?(f=!0,cg(b)):f=!1,b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null,ah(b),e.updater=nh,b.stateNode=e,e._reactInternals=b,rh(b,d,a,c),b=kj(null,b,d,!0,f,c)):(b.tag=0,I&&f&&vg(b),Yi(null,b,e,c),b=b.child);return b;case 16:d=b.elementType;a:{jj(a,b);a=b.pendingProps;e=d._init;d=e(d._payload);b.type=d;e=b.tag=$k(d);a=Lg(d,a);switch(e){case 0:b=dj(null,b,d,a,c);break a;case 1:b=ij(null,b,d,a,c);break a;case 11:b=Zi(null,b,d,a,c);break a;case 14:b=aj(null,b,d,Lg(d.type,a),c);break a}throw Error(p(306,
d,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Lg(d,e),dj(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Lg(d,e),ij(a,b,d,e,c);case 3:a:{lj(b);if(null===a)throw Error(p(387));d=b.pendingProps;f=b.memoizedState;e=f.element;bh(a,b);gh(b,d,null,c);var g=b.memoizedState;d=g.element;if(f.isDehydrated)if(f={element:d,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},b.updateQueue.baseState=
f,b.memoizedState=f,b.flags&256){e=Ki(Error(p(423)),b);b=mj(a,b,d,c,e);break a}else if(d!==e){e=Ki(Error(p(424)),b);b=mj(a,b,d,c,e);break a}else for(yg=Lf(b.stateNode.containerInfo.firstChild),xg=b,I=!0,zg=null,c=Ch(b,null,d,c),b.child=c;c;)c.flags=c.flags&-3|4096,c=c.sibling;else{Ig();if(d===e){b=$i(a,b,c);break a}Yi(a,b,d,c)}b=b.child}return b;case 5:return Kh(b),null===a&&Eg(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,Ef(d,e)?g=null:null!==f&&Ef(d,f)&&(b.flags|=32),
hj(a,b),Yi(a,b,g,c),b.child;case 6:return null===a&&Eg(b),null;case 13:return pj(a,b,c);case 4:return Ih(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Bh(b,null,d,c):Yi(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Lg(d,e),Zi(a,b,d,e,c);case 7:return Yi(a,b,b.pendingProps,c),b.child;case 8:return Yi(a,b,b.pendingProps.children,c),b.child;case 12:return Yi(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;f=b.memoizedProps;
g=e.value;G(Mg,d._currentValue);d._currentValue=g;if(null!==f)if(He(f.value,g)){if(f.children===e.children&&!Wf.current){b=$i(a,b,c);break a}}else for(f=b.child,null!==f&&(f.return=b);null!==f;){var h=f.dependencies;if(null!==h){g=f.child;for(var k=h.firstContext;null!==k;){if(k.context===d){if(1===f.tag){k=ch(-1,c&-c);k.tag=2;var l=f.updateQueue;if(null!==l){l=l.shared;var m=l.pending;null===m?k.next=k:(k.next=m.next,m.next=k);l.pending=k}}f.lanes|=c;k=f.alternate;null!==k&&(k.lanes|=c);Sg(f.return,
c,b);h.lanes|=c;break}k=k.next}}else if(10===f.tag)g=f.type===b.type?null:f.child;else if(18===f.tag){g=f.return;if(null===g)throw Error(p(341));g.lanes|=c;h=g.alternate;null!==h&&(h.lanes|=c);Sg(g,c,b);g=f.sibling}else g=f.child;if(null!==g)g.return=f;else for(g=f;null!==g;){if(g===b){g=null;break}f=g.sibling;if(null!==f){f.return=g.return;g=f;break}g=g.return}f=g}Yi(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,d=b.pendingProps.children,Tg(b,c),e=Vg(e),d=d(e),b.flags|=1,Yi(a,b,d,c),
b.child;case 14:return d=b.type,e=Lg(d,b.pendingProps),e=Lg(d.type,e),aj(a,b,d,e,c);case 15:return cj(a,b,b.type,b.pendingProps,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Lg(d,e),jj(a,b),b.tag=1,Zf(d)?(a=!0,cg(b)):a=!1,Tg(b,c),ph(b,d,e),rh(b,d,e,c),kj(null,b,d,!0,a,c);case 19:return yj(a,b,c);case 22:return ej(a,b,c)}throw Error(p(156,b.tag));};function Gk(a,b){return ac(a,b)}
function al(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.subtreeFlags=this.flags=0;this.deletions=null;this.childLanes=this.lanes=0;this.alternate=null}function Bg(a,b,c,d){return new al(a,b,c,d)}function bj(a){a=a.prototype;return!(!a||!a.isReactComponent)}
function $k(a){if("function"===typeof a)return bj(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===Da)return 11;if(a===Ga)return 14}return 2}
function wh(a,b){var c=a.alternate;null===c?(c=Bg(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.type=a.type,c.flags=0,c.subtreeFlags=0,c.deletions=null);c.flags=a.flags&14680064;c.childLanes=a.childLanes;c.lanes=a.lanes;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{lanes:b.lanes,firstContext:b.firstContext};
c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
function yh(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)bj(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ya:return Ah(c.children,e,f,b);case za:g=8;e|=8;break;case Aa:return a=Bg(12,c,b,e|2),a.elementType=Aa,a.lanes=f,a;case Ea:return a=Bg(13,c,b,e),a.elementType=Ea,a.lanes=f,a;case Fa:return a=Bg(19,c,b,e),a.elementType=Fa,a.lanes=f,a;case Ia:return qj(c,e,f,b);default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case Ba:g=10;break a;case Ca:g=9;break a;case Da:g=11;
break a;case Ga:g=14;break a;case Ha:g=16;d=null;break a}throw Error(p(130,null==a?a:typeof a,""));}b=Bg(g,c,b,e);b.elementType=a;b.type=d;b.lanes=f;return b}function Ah(a,b,c,d){a=Bg(7,a,d,b);a.lanes=c;return a}function qj(a,b,c,d){a=Bg(22,a,d,b);a.elementType=Ia;a.lanes=c;a.stateNode={isHidden:!1};return a}function xh(a,b,c){a=Bg(6,a,null,b);a.lanes=c;return a}
function zh(a,b,c){b=Bg(4,null!==a.children?a.children:[],a.key,b);b.lanes=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function bl(a,b,c,d,e){this.tag=b;this.containerInfo=a;this.finishedWork=this.pingCache=this.current=this.pendingChildren=null;this.timeoutHandle=-1;this.callbackNode=this.pendingContext=this.context=null;this.callbackPriority=0;this.eventTimes=zc(0);this.expirationTimes=zc(-1);this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0;this.entanglements=zc(0);this.identifierPrefix=d;this.onRecoverableError=e;this.mutableSourceEagerHydrationData=
null}function cl(a,b,c,d,e,f,g,h,k){a=new bl(a,b,c,h,k);1===b?(b=1,!0===f&&(b|=8)):b=0;f=Bg(3,null,null,b);a.current=f;f.stateNode=a;f.memoizedState={element:d,isDehydrated:c,cache:null,transitions:null,pendingSuspenseBoundaries:null};ah(f);return a}function dl(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:wa,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
function el(a){if(!a)return Vf;a=a._reactInternals;a:{if(Vb(a)!==a||1!==a.tag)throw Error(p(170));var b=a;do{switch(b.tag){case 3:b=b.stateNode.context;break a;case 1:if(Zf(b.type)){b=b.stateNode.__reactInternalMemoizedMergedChildContext;break a}}b=b.return}while(null!==b);throw Error(p(171));}if(1===a.tag){var c=a.type;if(Zf(c))return bg(a,c,b)}return b}
function fl(a,b,c,d,e,f,g,h,k){a=cl(c,d,!0,a,e,f,g,h,k);a.context=el(null);c=a.current;d=L();e=lh(c);f=ch(d,e);f.callback=void 0!==b&&null!==b?b:null;dh(c,f,e);a.current.lanes=e;Ac(a,e,d);Ek(a,d);return a}function gl(a,b,c,d){var e=b.current,f=L(),g=lh(e);c=el(c);null===b.context?b.context=c:b.pendingContext=c;b=ch(f,g);b.payload={element:a};d=void 0===d?null:d;null!==d&&(b.callback=d);a=dh(e,b,g);null!==a&&(mh(a,e,g,f),eh(a,e,g));return g}
function hl(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function il(a,b){a=a.memoizedState;if(null!==a&&null!==a.dehydrated){var c=a.retryLane;a.retryLane=0!==c&&c<b?c:b}}function jl(a,b){il(a,b);(a=a.alternate)&&il(a,b)}function kl(){return null}var ll="function"===typeof reportError?reportError:function(a){console.error(a)};function ml(a){this._internalRoot=a}
nl.prototype.render=ml.prototype.render=function(a){var b=this._internalRoot;if(null===b)throw Error(p(409));gl(a,b,null,null)};nl.prototype.unmount=ml.prototype.unmount=function(){var a=this._internalRoot;if(null!==a){this._internalRoot=null;var b=a.containerInfo;Sk(function(){gl(null,a,null,null)});b[uf]=null}};function nl(a){this._internalRoot=a}
nl.prototype.unstable_scheduleHydration=function(a){if(a){var b=Hc();a={blockedOn:null,target:a,priority:b};for(var c=0;c<Qc.length&&0!==b&&b<Qc[c].priority;c++);Qc.splice(c,0,a);0===c&&Vc(a)}};function ol(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType)}function pl(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}function ql(){}
function rl(a,b,c,d,e){if(e){if("function"===typeof d){var f=d;d=function(){var a=hl(g);f.call(a)}}var g=fl(b,d,a,0,null,!1,!1,"",ql);a._reactRootContainer=g;a[uf]=g.current;sf(8===a.nodeType?a.parentNode:a);Sk();return g}for(;e=a.lastChild;)a.removeChild(e);if("function"===typeof d){var h=d;d=function(){var a=hl(k);h.call(a)}}var k=cl(a,0,!1,null,null,!1,!1,"",ql);a._reactRootContainer=k;a[uf]=k.current;sf(8===a.nodeType?a.parentNode:a);Sk(function(){gl(b,k,c,d)});return k}
function sl(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f;if("function"===typeof e){var h=e;e=function(){var a=hl(g);h.call(a)}}gl(b,g,a,e)}else g=rl(c,b,a,e,d);return hl(g)}Ec=function(a){switch(a.tag){case 3:var b=a.stateNode;if(b.current.memoizedState.isDehydrated){var c=tc(b.pendingLanes);0!==c&&(Cc(b,c|1),Ek(b,B()),0===(K&6)&&(Hj=B()+500,jg()))}break;case 13:Sk(function(){var b=Zg(a,1);if(null!==b){var c=L();mh(b,a,1,c)}}),jl(a,1)}};
Fc=function(a){if(13===a.tag){var b=Zg(a,134217728);if(null!==b){var c=L();mh(b,a,134217728,c)}jl(a,134217728)}};Gc=function(a){if(13===a.tag){var b=lh(a),c=Zg(a,b);if(null!==c){var d=L();mh(c,a,b,d)}jl(a,b)}};Hc=function(){return C};Ic=function(a,b){var c=C;try{return C=a,b()}finally{C=c}};
yb=function(a,b,c){switch(b){case "input":bb(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Db(d);if(!e)throw Error(p(90));Wa(d);bb(d,e)}}}break;case "textarea":ib(a,c);break;case "select":b=c.value,null!=b&&fb(a,!!c.multiple,b,!1)}};Gb=Rk;Hb=Sk;
var tl={usingClientEntryPoint:!1,Events:[Cb,ue,Db,Eb,Fb,Rk]},ul={findFiberByHostInstance:Wc,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"};
var vl={bundleType:ul.bundleType,version:ul.version,rendererPackageName:ul.rendererPackageName,rendererConfig:ul.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ua.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=Zb(a);return null===a?null:a.stateNode},findFiberByHostInstance:ul.findFiberByHostInstance||
kl,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var wl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wl.isDisabled&&wl.supportsFiber)try{kc=wl.inject(vl),lc=wl}catch(a){}}exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tl;
exports.createPortal=function(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!ol(b))throw Error(p(200));return dl(a,b,null,c)};exports.createRoot=function(a,b){if(!ol(a))throw Error(p(299));var c=!1,d="",e=ll;null!==b&&void 0!==b&&(!0===b.unstable_strictMode&&(c=!0),void 0!==b.identifierPrefix&&(d=b.identifierPrefix),void 0!==b.onRecoverableError&&(e=b.onRecoverableError));b=cl(a,1,!1,null,null,c,!1,d,e);a[uf]=b.current;sf(8===a.nodeType?a.parentNode:a);return new ml(b)};
exports.findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternals;if(void 0===b){if("function"===typeof a.render)throw Error(p(188));a=Object.keys(a).join(",");throw Error(p(268,a));}a=Zb(b);a=null===a?null:a.stateNode;return a};exports.flushSync=function(a){return Sk(a)};exports.hydrate=function(a,b,c){if(!pl(b))throw Error(p(200));return sl(null,a,b,!0,c)};
exports.hydrateRoot=function(a,b,c){if(!ol(a))throw Error(p(405));var d=null!=c&&c.hydratedSources||null,e=!1,f="",g=ll;null!==c&&void 0!==c&&(!0===c.unstable_strictMode&&(e=!0),void 0!==c.identifierPrefix&&(f=c.identifierPrefix),void 0!==c.onRecoverableError&&(g=c.onRecoverableError));b=fl(b,null,a,1,null!=c?c:null,e,!1,f,g);a[uf]=b.current;sf(a);if(d)for(a=0;a<d.length;a++)c=d[a],e=c._getVersion,e=e(c._source),null==b.mutableSourceEagerHydrationData?b.mutableSourceEagerHydrationData=[c,e]:b.mutableSourceEagerHydrationData.push(c,
e);return new nl(b)};exports.render=function(a,b,c){if(!pl(b))throw Error(p(200));return sl(null,a,b,!1,c)};exports.unmountComponentAtNode=function(a){if(!pl(a))throw Error(p(40));return a._reactRootContainer?(Sk(function(){sl(null,null,a,!1,function(){a._reactRootContainer=null;a[uf]=null})}),!0):!1};exports.unstable_batchedUpdates=Rk;
exports.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!pl(c))throw Error(p(200));if(null==a||void 0===a._reactInternals)throw Error(p(38));return sl(a,b,c,!1,d)};exports.version="18.2.0-next-9e3b772b8-20220608";


/***/ }),

/***/ 745:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;


var m = __webpack_require__(935);
if (true) {
  exports.s = m.createRoot;
  __webpack_unused_export__ = m.hydrateRoot;
} else { var i; }


/***/ }),

/***/ 935:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) {}
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(448);
} else {}


/***/ }),

/***/ 408:
/***/ (function(__unused_webpack_module, exports) {

/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l=Symbol.for("react.element"),n=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),t=Symbol.for("react.provider"),u=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),z=Symbol.iterator;function A(a){if(null===a||"object"!==typeof a)return null;a=z&&a[z]||a["@@iterator"];return"function"===typeof a?a:null}
var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,D={};function E(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B}E.prototype.isReactComponent={};
E.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState")};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function F(){}F.prototype=E.prototype;function G(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B}var H=G.prototype=new F;
H.constructor=G;C(H,E.prototype);H.isPureReactComponent=!0;var I=Array.isArray,J=Object.prototype.hasOwnProperty,K={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,e){var d,c={},k=null,h=null;if(null!=b)for(d in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)J.call(b,d)&&!L.hasOwnProperty(d)&&(c[d]=b[d]);var g=arguments.length-2;if(1===g)c.children=e;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];c.children=f}if(a&&a.defaultProps)for(d in g=a.defaultProps,g)void 0===c[d]&&(c[d]=g[d]);return{$$typeof:l,type:a,key:k,ref:h,props:c,_owner:K.current}}
function N(a,b){return{$$typeof:l,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return"object"===typeof a&&null!==a&&a.$$typeof===l}function escape(a){var b={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g;function Q(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
function R(a,b,e,d,c){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case l:case n:h=!0}}if(h)return h=a,c=c(h),a=""===d?"."+Q(h,0):d,I(c)?(e="",null!=a&&(e=a.replace(P,"$&/")+"/"),R(c,b,e,"",function(a){return a})):null!=c&&(O(c)&&(c=N(c,e+(!c.key||h&&h.key===c.key?"":(""+c.key).replace(P,"$&/")+"/")+a)),b.push(c)),1;h=0;d=""===d?".":d+":";if(I(a))for(var g=0;g<a.length;g++){k=
a[g];var f=d+Q(k,g);h+=R(k,b,e,f,c)}else if(f=A(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=d+Q(k,g++),h+=R(k,b,e,f,c);else if("object"===k)throw b=String(a),Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return h}
function S(a,b,e){if(null==a)return a;var d=[],c=0;R(a,d,"","",function(a){return b.call(e,a,c++)});return d}function T(a){if(-1===a._status){var b=a._result;b=b();b.then(function(b){if(0===a._status||-1===a._status)a._status=1,a._result=b},function(b){if(0===a._status||-1===a._status)a._status=2,a._result=b});-1===a._status&&(a._status=0,a._result=b)}if(1===a._status)return a._result.default;throw a._result;}
var U={current:null},V={transition:null},W={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:V,ReactCurrentOwner:K};exports.Children={map:S,forEach:function(a,b,e){S(a,function(){b.apply(this,arguments)},e)},count:function(a){var b=0;S(a,function(){b++});return b},toArray:function(a){return S(a,function(a){return a})||[]},only:function(a){if(!O(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};exports.Component=E;exports.Fragment=p;
exports.Profiler=r;exports.PureComponent=G;exports.StrictMode=q;exports.Suspense=w;exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W;
exports.cloneElement=function(a,b,e){if(null===a||void 0===a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var d=C({},a.props),c=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=K.current);void 0!==b.key&&(c=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)J.call(b,f)&&!L.hasOwnProperty(f)&&(d[f]=void 0===b[f]&&void 0!==g?g[f]:b[f])}var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){g=Array(f);
for(var m=0;m<f;m++)g[m]=arguments[m+2];d.children=g}return{$$typeof:l,type:a.type,key:c,ref:k,props:d,_owner:h}};exports.createContext=function(a){a={$$typeof:u,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};a.Provider={$$typeof:t,_context:a};return a.Consumer=a};exports.createElement=M;exports.createFactory=function(a){var b=M.bind(null,a);b.type=a;return b};exports.createRef=function(){return{current:null}};
exports.forwardRef=function(a){return{$$typeof:v,render:a}};exports.isValidElement=O;exports.lazy=function(a){return{$$typeof:y,_payload:{_status:-1,_result:a},_init:T}};exports.memo=function(a,b){return{$$typeof:x,type:a,compare:void 0===b?null:b}};exports.startTransition=function(a){var b=V.transition;V.transition={};try{a()}finally{V.transition=b}};exports.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.");};
exports.useCallback=function(a,b){return U.current.useCallback(a,b)};exports.useContext=function(a){return U.current.useContext(a)};exports.useDebugValue=function(){};exports.useDeferredValue=function(a){return U.current.useDeferredValue(a)};exports.useEffect=function(a,b){return U.current.useEffect(a,b)};exports.useId=function(){return U.current.useId()};exports.useImperativeHandle=function(a,b,e){return U.current.useImperativeHandle(a,b,e)};
exports.useInsertionEffect=function(a,b){return U.current.useInsertionEffect(a,b)};exports.useLayoutEffect=function(a,b){return U.current.useLayoutEffect(a,b)};exports.useMemo=function(a,b){return U.current.useMemo(a,b)};exports.useReducer=function(a,b,e){return U.current.useReducer(a,b,e)};exports.useRef=function(a){return U.current.useRef(a)};exports.useState=function(a){return U.current.useState(a)};exports.useSyncExternalStore=function(a,b,e){return U.current.useSyncExternalStore(a,b,e)};
exports.useTransition=function(){return U.current.useTransition()};exports.version="18.2.0";


/***/ }),

/***/ 294:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



if (true) {
  module.exports = __webpack_require__(408);
} else {}


/***/ }),

/***/ 53:
/***/ (function(__unused_webpack_module, exports) {

/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function f(a,b){var c=a.length;a.push(b);a:for(;0<c;){var d=c-1>>>1,e=a[d];if(0<g(e,b))a[d]=b,a[c]=e,c=d;else break a}}function h(a){return 0===a.length?null:a[0]}function k(a){if(0===a.length)return null;var b=a[0],c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length,w=e>>>1;d<w;){var m=2*(d+1)-1,C=a[m],n=m+1,x=a[n];if(0>g(C,c))n<e&&0>g(x,C)?(a[d]=x,a[n]=c,d=n):(a[d]=C,a[m]=c,d=m);else if(n<e&&0>g(x,c))a[d]=x,a[n]=c,d=n;else break a}}return b}
function g(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}if("object"===typeof performance&&"function"===typeof performance.now){var l=performance;exports.unstable_now=function(){return l.now()}}else{var p=Date,q=p.now();exports.unstable_now=function(){return p.now()-q}}var r=[],t=[],u=1,v=null,y=3,z=!1,A=!1,B=!1,D="function"===typeof setTimeout?setTimeout:null,E="function"===typeof clearTimeout?clearTimeout:null,F="undefined"!==typeof setImmediate?setImmediate:null;
"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function G(a){for(var b=h(t);null!==b;){if(null===b.callback)k(t);else if(b.startTime<=a)k(t),b.sortIndex=b.expirationTime,f(r,b);else break;b=h(t)}}function H(a){B=!1;G(a);if(!A)if(null!==h(r))A=!0,I(J);else{var b=h(t);null!==b&&K(H,b.startTime-a)}}
function J(a,b){A=!1;B&&(B=!1,E(L),L=-1);z=!0;var c=y;try{G(b);for(v=h(r);null!==v&&(!(v.expirationTime>b)||a&&!M());){var d=v.callback;if("function"===typeof d){v.callback=null;y=v.priorityLevel;var e=d(v.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?v.callback=e:v===h(r)&&k(r);G(b)}else k(r);v=h(r)}if(null!==v)var w=!0;else{var m=h(t);null!==m&&K(H,m.startTime-b);w=!1}return w}finally{v=null,y=c,z=!1}}var N=!1,O=null,L=-1,P=5,Q=-1;
function M(){return exports.unstable_now()-Q<P?!1:!0}function R(){if(null!==O){var a=exports.unstable_now();Q=a;var b=!0;try{b=O(!0,a)}finally{b?S():(N=!1,O=null)}}else N=!1}var S;if("function"===typeof F)S=function(){F(R)};else if("undefined"!==typeof MessageChannel){var T=new MessageChannel,U=T.port2;T.port1.onmessage=R;S=function(){U.postMessage(null)}}else S=function(){D(R,0)};function I(a){O=a;N||(N=!0,S())}function K(a,b){L=D(function(){a(exports.unstable_now())},b)}
exports.unstable_IdlePriority=5;exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null};exports.unstable_continueExecution=function(){A||z||(A=!0,I(J))};
exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<a?Math.floor(1E3/a):5};exports.unstable_getCurrentPriorityLevel=function(){return y};exports.unstable_getFirstCallbackNode=function(){return h(r)};exports.unstable_next=function(a){switch(y){case 1:case 2:case 3:var b=3;break;default:b=y}var c=y;y=b;try{return a()}finally{y=c}};exports.unstable_pauseExecution=function(){};
exports.unstable_requestPaint=function(){};exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=y;y=a;try{return b()}finally{y=c}};
exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();"object"===typeof c&&null!==c?(c=c.delay,c="number"===typeof c&&0<c?d+c:d):c=d;switch(a){case 1:var e=-1;break;case 2:e=250;break;case 5:e=1073741823;break;case 4:e=1E4;break;default:e=5E3}e=c+e;a={id:u++,callback:b,priorityLevel:a,startTime:c,expirationTime:e,sortIndex:-1};c>d?(a.sortIndex=c,f(t,a),null===h(r)&&a===h(t)&&(B?(E(L),L=-1):B=!0,K(H,c-d))):(a.sortIndex=e,f(r,a),A||z||(A=!0,I(J)));return a};
exports.unstable_shouldYield=M;exports.unstable_wrapCallback=function(a){var b=y;return function(){var c=y;y=b;try{return a.apply(this,arguments)}finally{y=c}}};


/***/ }),

/***/ 840:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



if (true) {
  module.exports = __webpack_require__(53);
} else {}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	!function() {
/******/ 		var getProto = Object.getPrototypeOf ? function(obj) { return Object.getPrototypeOf(obj); } : function(obj) { return obj.__proto__; };
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach(function(key) { def[key] = function() { return value[key]; }; });
/******/ 			}
/******/ 			def['default'] = function() { return value; };
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(294);
var react_namespaceObject = /*#__PURE__*/__webpack_require__.t(react, 2);
// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(745);
;// CONCATENATED MODULE: ./node_modules/@remix-run/router/dist/router.js
/**
 * @remix-run/router v1.3.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

////////////////////////////////////////////////////////////////////////////////
//#region Types and Constants
////////////////////////////////////////////////////////////////////////////////

/**
 * Actions represent the type of change to a location value.
 */
var Action;

(function (Action) {
  /**
   * A POP indicates a change to an arbitrary index in the history stack, such
   * as a back or forward navigation. It does not describe the direction of the
   * navigation, only that the current index changed.
   *
   * Note: This is the default action for newly created history objects.
   */
  Action["Pop"] = "POP";
  /**
   * A PUSH indicates a new entry being added to the history stack, such as when
   * a link is clicked and a new page loads. When this happens, all subsequent
   * entries in the stack are lost.
   */

  Action["Push"] = "PUSH";
  /**
   * A REPLACE indicates the entry at the current index in the history stack
   * being replaced by a new one.
   */

  Action["Replace"] = "REPLACE";
})(Action || (Action = {}));

const PopStateEventType = "popstate";
/**
 * Memory history stores the current location in memory. It is designed for use
 * in stateful non-browser environments like tests and React Native.
 */

function router_createMemoryHistory(options) {
  if (options === void 0) {
    options = {};
  }

  let {
    initialEntries = ["/"],
    initialIndex,
    v5Compat = false
  } = options;
  let entries; // Declare so we can access from createMemoryLocation

  entries = initialEntries.map((entry, index) => createMemoryLocation(entry, typeof entry === "string" ? null : entry.state, index === 0 ? "default" : undefined));
  let index = clampIndex(initialIndex == null ? entries.length - 1 : initialIndex);
  let action = Action.Pop;
  let listener = null;

  function clampIndex(n) {
    return Math.min(Math.max(n, 0), entries.length - 1);
  }

  function getCurrentLocation() {
    return entries[index];
  }

  function createMemoryLocation(to, state, key) {
    if (state === void 0) {
      state = null;
    }

    let location = createLocation(entries ? getCurrentLocation().pathname : "/", to, state, key);
    warning$1(location.pathname.charAt(0) === "/", "relative pathnames are not supported in memory history: " + JSON.stringify(to));
    return location;
  }

  function createHref(to) {
    return typeof to === "string" ? to : router_createPath(to);
  }

  let history = {
    get index() {
      return index;
    },

    get action() {
      return action;
    },

    get location() {
      return getCurrentLocation();
    },

    createHref,

    createURL(to) {
      return new URL(createHref(to), "http://localhost");
    },

    encodeLocation(to) {
      let path = typeof to === "string" ? parsePath(to) : to;
      return {
        pathname: path.pathname || "",
        search: path.search || "",
        hash: path.hash || ""
      };
    },

    push(to, state) {
      action = Action.Push;
      let nextLocation = createMemoryLocation(to, state);
      index += 1;
      entries.splice(index, entries.length, nextLocation);

      if (v5Compat && listener) {
        listener({
          action,
          location: nextLocation,
          delta: 1
        });
      }
    },

    replace(to, state) {
      action = Action.Replace;
      let nextLocation = createMemoryLocation(to, state);
      entries[index] = nextLocation;

      if (v5Compat && listener) {
        listener({
          action,
          location: nextLocation,
          delta: 0
        });
      }
    },

    go(delta) {
      action = Action.Pop;
      let nextIndex = clampIndex(index + delta);
      let nextLocation = entries[nextIndex];
      index = nextIndex;

      if (listener) {
        listener({
          action,
          location: nextLocation,
          delta
        });
      }
    },

    listen(fn) {
      listener = fn;
      return () => {
        listener = null;
      };
    }

  };
  return history;
}
/**
 * Browser history stores the location in regular URLs. This is the standard for
 * most web apps, but it requires some configuration on the server to ensure you
 * serve the same app at multiple URLs.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createbrowserhistory
 */

function router_createBrowserHistory(options) {
  if (options === void 0) {
    options = {};
  }

  function createBrowserLocation(window, globalHistory) {
    let {
      pathname,
      search,
      hash
    } = window.location;
    return createLocation("", {
      pathname,
      search,
      hash
    }, // state defaults to `null` because `window.history.state` does
    globalHistory.state && globalHistory.state.usr || null, globalHistory.state && globalHistory.state.key || "default");
  }

  function createBrowserHref(window, to) {
    return typeof to === "string" ? to : router_createPath(to);
  }

  return getUrlBasedHistory(createBrowserLocation, createBrowserHref, null, options);
}
/**
 * Hash history stores the location in window.location.hash. This makes it ideal
 * for situations where you don't want to send the location to the server for
 * some reason, either because you do cannot configure it or the URL space is
 * reserved for something else.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createhashhistory
 */

function router_createHashHistory(options) {
  if (options === void 0) {
    options = {};
  }

  function createHashLocation(window, globalHistory) {
    let {
      pathname = "/",
      search = "",
      hash = ""
    } = parsePath(window.location.hash.substr(1));
    return createLocation("", {
      pathname,
      search,
      hash
    }, // state defaults to `null` because `window.history.state` does
    globalHistory.state && globalHistory.state.usr || null, globalHistory.state && globalHistory.state.key || "default");
  }

  function createHashHref(window, to) {
    let base = window.document.querySelector("base");
    let href = "";

    if (base && base.getAttribute("href")) {
      let url = window.location.href;
      let hashIndex = url.indexOf("#");
      href = hashIndex === -1 ? url : url.slice(0, hashIndex);
    }

    return href + "#" + (typeof to === "string" ? to : router_createPath(to));
  }

  function validateHashLocation(location, to) {
    warning$1(location.pathname.charAt(0) === "/", "relative pathnames are not supported in hash history.push(" + JSON.stringify(to) + ")");
  }

  return getUrlBasedHistory(createHashLocation, createHashHref, validateHashLocation, options);
}
function router_invariant(value, message) {
  if (value === false || value === null || typeof value === "undefined") {
    throw new Error(message);
  }
}

function warning$1(cond, message) {
  if (!cond) {
    // eslint-disable-next-line no-console
    if (typeof console !== "undefined") console.warn(message);

    try {
      // Welcome to debugging history!
      //
      // This error is thrown as a convenience so you can more easily
      // find the source for a warning that appears in the console by
      // enabling "pause on exceptions" in your JavaScript debugger.
      throw new Error(message); // eslint-disable-next-line no-empty
    } catch (e) {}
  }
}

function createKey() {
  return Math.random().toString(36).substr(2, 8);
}
/**
 * For browser-based histories, we combine the state and key into an object
 */


function getHistoryState(location, index) {
  return {
    usr: location.state,
    key: location.key,
    idx: index
  };
}
/**
 * Creates a Location object with a unique key from the given Path
 */


function createLocation(current, to, state, key) {
  if (state === void 0) {
    state = null;
  }

  let location = _extends({
    pathname: typeof current === "string" ? current : current.pathname,
    search: "",
    hash: ""
  }, typeof to === "string" ? parsePath(to) : to, {
    state,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: to && to.key || key || createKey()
  });

  return location;
}
/**
 * Creates a string URL path from the given pathname, search, and hash components.
 */

function router_createPath(_ref) {
  let {
    pathname = "/",
    search = "",
    hash = ""
  } = _ref;
  if (search && search !== "?") pathname += search.charAt(0) === "?" ? search : "?" + search;
  if (hash && hash !== "#") pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
  return pathname;
}
/**
 * Parses a string URL path into its separate pathname, search, and hash components.
 */

function parsePath(path) {
  let parsedPath = {};

  if (path) {
    let hashIndex = path.indexOf("#");

    if (hashIndex >= 0) {
      parsedPath.hash = path.substr(hashIndex);
      path = path.substr(0, hashIndex);
    }

    let searchIndex = path.indexOf("?");

    if (searchIndex >= 0) {
      parsedPath.search = path.substr(searchIndex);
      path = path.substr(0, searchIndex);
    }

    if (path) {
      parsedPath.pathname = path;
    }
  }

  return parsedPath;
}

function getUrlBasedHistory(getLocation, createHref, validateLocation, options) {
  if (options === void 0) {
    options = {};
  }

  let {
    window = document.defaultView,
    v5Compat = false
  } = options;
  let globalHistory = window.history;
  let action = Action.Pop;
  let listener = null;
  let index = getIndex(); // Index should only be null when we initialize. If not, it's because the
  // user called history.pushState or history.replaceState directly, in which
  // case we should log a warning as it will result in bugs.

  if (index == null) {
    index = 0;
    globalHistory.replaceState(_extends({}, globalHistory.state, {
      idx: index
    }), "");
  }

  function getIndex() {
    let state = globalHistory.state || {
      idx: null
    };
    return state.idx;
  }

  function handlePop() {
    action = Action.Pop;
    let nextIndex = getIndex();
    let delta = nextIndex == null ? null : nextIndex - index;
    index = nextIndex;

    if (listener) {
      listener({
        action,
        location: history.location,
        delta
      });
    }
  }

  function push(to, state) {
    action = Action.Push;
    let location = createLocation(history.location, to, state);
    if (validateLocation) validateLocation(location, to);
    index = getIndex() + 1;
    let historyState = getHistoryState(location, index);
    let url = history.createHref(location); // try...catch because iOS limits us to 100 pushState calls :/

    try {
      globalHistory.pushState(historyState, "", url);
    } catch (error) {
      // They are going to lose state here, but there is no real
      // way to warn them about it since the page will refresh...
      window.location.assign(url);
    }

    if (v5Compat && listener) {
      listener({
        action,
        location: history.location,
        delta: 1
      });
    }
  }

  function replace(to, state) {
    action = Action.Replace;
    let location = createLocation(history.location, to, state);
    if (validateLocation) validateLocation(location, to);
    index = getIndex();
    let historyState = getHistoryState(location, index);
    let url = history.createHref(location);
    globalHistory.replaceState(historyState, "", url);

    if (v5Compat && listener) {
      listener({
        action,
        location: history.location,
        delta: 0
      });
    }
  }

  function createURL(to) {
    // window.location.origin is "null" (the literal string value) in Firefox
    // under certain conditions, notably when serving from a local HTML file
    // See https://bugzilla.mozilla.org/show_bug.cgi?id=878297
    let base = window.location.origin !== "null" ? window.location.origin : window.location.href;
    let href = typeof to === "string" ? to : router_createPath(to);
    router_invariant(base, "No window.location.(origin|href) available to create URL for href: " + href);
    return new URL(href, base);
  }

  let history = {
    get action() {
      return action;
    },

    get location() {
      return getLocation(window, globalHistory);
    },

    listen(fn) {
      if (listener) {
        throw new Error("A history only accepts one active listener");
      }

      window.addEventListener(PopStateEventType, handlePop);
      listener = fn;
      return () => {
        window.removeEventListener(PopStateEventType, handlePop);
        listener = null;
      };
    },

    createHref(to) {
      return createHref(window, to);
    },

    createURL,

    encodeLocation(to) {
      // Encode a Location the same way window.location would
      let url = createURL(to);
      return {
        pathname: url.pathname,
        search: url.search,
        hash: url.hash
      };
    },

    push,
    replace,

    go(n) {
      return globalHistory.go(n);
    }

  };
  return history;
} //#endregion

var ResultType;

(function (ResultType) {
  ResultType["data"] = "data";
  ResultType["deferred"] = "deferred";
  ResultType["redirect"] = "redirect";
  ResultType["error"] = "error";
})(ResultType || (ResultType = {}));

function isIndexRoute(route) {
  return route.index === true;
} // Walk the route tree generating unique IDs where necessary so we are working
// solely with AgnosticDataRouteObject's within the Router


function convertRoutesToDataRoutes(routes, parentPath, allIds) {
  if (parentPath === void 0) {
    parentPath = [];
  }

  if (allIds === void 0) {
    allIds = new Set();
  }

  return routes.map((route, index) => {
    let treePath = [...parentPath, index];
    let id = typeof route.id === "string" ? route.id : treePath.join("-");
    router_invariant(route.index !== true || !route.children, "Cannot specify children on an index route");
    router_invariant(!allIds.has(id), "Found a route id collision on id \"" + id + "\".  Route " + "id's must be globally unique within Data Router usages");
    allIds.add(id);

    if (isIndexRoute(route)) {
      let indexRoute = _extends({}, route, {
        id
      });

      return indexRoute;
    } else {
      let pathOrLayoutRoute = _extends({}, route, {
        id,
        children: route.children ? convertRoutesToDataRoutes(route.children, treePath, allIds) : undefined
      });

      return pathOrLayoutRoute;
    }
  });
}
/**
 * Matches the given routes to a location and returns the match data.
 *
 * @see https://reactrouter.com/utils/match-routes
 */

function matchRoutes(routes, locationArg, basename) {
  if (basename === void 0) {
    basename = "/";
  }

  let location = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
  let pathname = stripBasename(location.pathname || "/", basename);

  if (pathname == null) {
    return null;
  }

  let branches = flattenRoutes(routes);
  rankRouteBranches(branches);
  let matches = null;

  for (let i = 0; matches == null && i < branches.length; ++i) {
    matches = matchRouteBranch(branches[i], // Incoming pathnames are generally encoded from either window.location
    // or from router.navigate, but we want to match against the unencoded
    // paths in the route definitions.  Memory router locations won't be
    // encoded here but there also shouldn't be anything to decode so this
    // should be a safe operation.  This avoids needing matchRoutes to be
    // history-aware.
    safelyDecodeURI(pathname));
  }

  return matches;
}

function flattenRoutes(routes, branches, parentsMeta, parentPath) {
  if (branches === void 0) {
    branches = [];
  }

  if (parentsMeta === void 0) {
    parentsMeta = [];
  }

  if (parentPath === void 0) {
    parentPath = "";
  }

  let flattenRoute = (route, index, relativePath) => {
    let meta = {
      relativePath: relativePath === undefined ? route.path || "" : relativePath,
      caseSensitive: route.caseSensitive === true,
      childrenIndex: index,
      route
    };

    if (meta.relativePath.startsWith("/")) {
      router_invariant(meta.relativePath.startsWith(parentPath), "Absolute route path \"" + meta.relativePath + "\" nested under path " + ("\"" + parentPath + "\" is not valid. An absolute child route path ") + "must start with the combined path of all its parent routes.");
      meta.relativePath = meta.relativePath.slice(parentPath.length);
    }

    let path = router_joinPaths([parentPath, meta.relativePath]);
    let routesMeta = parentsMeta.concat(meta); // Add the children before adding this route to the array so we traverse the
    // route tree depth-first and child routes appear before their parents in
    // the "flattened" version.

    if (route.children && route.children.length > 0) {
      router_invariant( // Our types know better, but runtime JS may not!
      // @ts-expect-error
      route.index !== true, "Index routes must not have child routes. Please remove " + ("all child routes from route path \"" + path + "\"."));
      flattenRoutes(route.children, branches, routesMeta, path);
    } // Routes without a path shouldn't ever match by themselves unless they are
    // index routes, so don't add them to the list of possible branches.


    if (route.path == null && !route.index) {
      return;
    }

    branches.push({
      path,
      score: computeScore(path, route.index),
      routesMeta
    });
  };

  routes.forEach((route, index) => {
    var _route$path;

    // coarse-grain check for optional params
    if (route.path === "" || !((_route$path = route.path) != null && _route$path.includes("?"))) {
      flattenRoute(route, index);
    } else {
      for (let exploded of explodeOptionalSegments(route.path)) {
        flattenRoute(route, index, exploded);
      }
    }
  });
  return branches;
}
/**
 * Computes all combinations of optional path segments for a given path,
 * excluding combinations that are ambiguous and of lower priority.
 *
 * For example, `/one/:two?/three/:four?/:five?` explodes to:
 * - `/one/three`
 * - `/one/:two/three`
 * - `/one/three/:four`
 * - `/one/three/:five`
 * - `/one/:two/three/:four`
 * - `/one/:two/three/:five`
 * - `/one/three/:four/:five`
 * - `/one/:two/three/:four/:five`
 */


function explodeOptionalSegments(path) {
  let segments = path.split("/");
  if (segments.length === 0) return [];
  let [first, ...rest] = segments; // Optional path segments are denoted by a trailing `?`

  let isOptional = first.endsWith("?"); // Compute the corresponding required segment: `foo?` -> `foo`

  let required = first.replace(/\?$/, "");

  if (rest.length === 0) {
    // Intepret empty string as omitting an optional segment
    // `["one", "", "three"]` corresponds to omitting `:two` from `/one/:two?/three` -> `/one/three`
    return isOptional ? [required, ""] : [required];
  }

  let restExploded = explodeOptionalSegments(rest.join("/"));
  let result = []; // All child paths with the prefix.  Do this for all children before the
  // optional version for all children so we get consistent ordering where the
  // parent optional aspect is preferred as required.  Otherwise, we can get
  // child sections interspersed where deeper optional segments are higher than
  // parent optional segments, where for example, /:two would explodes _earlier_
  // then /:one.  By always including the parent as required _for all children_
  // first, we avoid this issue

  result.push(...restExploded.map(subpath => subpath === "" ? required : [required, subpath].join("/"))); // Then if this is an optional value, add all child versions without

  if (isOptional) {
    result.push(...restExploded);
  } // for absolute paths, ensure `/` instead of empty segment


  return result.map(exploded => path.startsWith("/") && exploded === "" ? "/" : exploded);
}

function rankRouteBranches(branches) {
  branches.sort((a, b) => a.score !== b.score ? b.score - a.score // Higher score first
  : compareIndexes(a.routesMeta.map(meta => meta.childrenIndex), b.routesMeta.map(meta => meta.childrenIndex)));
}

const paramRe = /^:\w+$/;
const dynamicSegmentValue = 3;
const indexRouteValue = 2;
const emptySegmentValue = 1;
const staticSegmentValue = 10;
const splatPenalty = -2;

const isSplat = s => s === "*";

function computeScore(path, index) {
  let segments = path.split("/");
  let initialScore = segments.length;

  if (segments.some(isSplat)) {
    initialScore += splatPenalty;
  }

  if (index) {
    initialScore += indexRouteValue;
  }

  return segments.filter(s => !isSplat(s)).reduce((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
}

function compareIndexes(a, b) {
  let siblings = a.length === b.length && a.slice(0, -1).every((n, i) => n === b[i]);
  return siblings ? // If two routes are siblings, we should try to match the earlier sibling
  // first. This allows people to have fine-grained control over the matching
  // behavior by simply putting routes with identical paths in the order they
  // want them tried.
  a[a.length - 1] - b[b.length - 1] : // Otherwise, it doesn't really make sense to rank non-siblings by index,
  // so they sort equally.
  0;
}

function matchRouteBranch(branch, pathname) {
  let {
    routesMeta
  } = branch;
  let matchedParams = {};
  let matchedPathname = "/";
  let matches = [];

  for (let i = 0; i < routesMeta.length; ++i) {
    let meta = routesMeta[i];
    let end = i === routesMeta.length - 1;
    let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
    let match = router_matchPath({
      path: meta.relativePath,
      caseSensitive: meta.caseSensitive,
      end
    }, remainingPathname);
    if (!match) return null;
    Object.assign(matchedParams, match.params);
    let route = meta.route;
    matches.push({
      // TODO: Can this as be avoided?
      params: matchedParams,
      pathname: router_joinPaths([matchedPathname, match.pathname]),
      pathnameBase: normalizePathname(router_joinPaths([matchedPathname, match.pathnameBase])),
      route
    });

    if (match.pathnameBase !== "/") {
      matchedPathname = router_joinPaths([matchedPathname, match.pathnameBase]);
    }
  }

  return matches;
}
/**
 * Returns a path with params interpolated.
 *
 * @see https://reactrouter.com/utils/generate-path
 */


function generatePath(originalPath, params) {
  if (params === void 0) {
    params = {};
  }

  let path = originalPath;

  if (path.endsWith("*") && path !== "*" && !path.endsWith("/*")) {
    warning(false, "Route path \"" + path + "\" will be treated as if it were " + ("\"" + path.replace(/\*$/, "/*") + "\" because the `*` character must ") + "always follow a `/` in the pattern. To get rid of this warning, " + ("please change the route path to \"" + path.replace(/\*$/, "/*") + "\"."));
    path = path.replace(/\*$/, "/*");
  }

  return path.replace(/^:(\w+)(\??)/g, (_, key, optional) => {
    let param = params[key];

    if (optional === "?") {
      return param == null ? "" : param;
    }

    if (param == null) {
      router_invariant(false, "Missing \":" + key + "\" param");
    }

    return param;
  }).replace(/\/:(\w+)(\??)/g, (_, key, optional) => {
    let param = params[key];

    if (optional === "?") {
      return param == null ? "" : "/" + param;
    }

    if (param == null) {
      router_invariant(false, "Missing \":" + key + "\" param");
    }

    return "/" + param;
  }) // Remove any optional markers from optional static segments
  .replace(/\?/g, "").replace(/(\/?)\*/, (_, prefix, __, str) => {
    const star = "*";

    if (params[star] == null) {
      // If no splat was provided, trim the trailing slash _unless_ it's
      // the entire path
      return str === "/*" ? "/" : "";
    } // Apply the splat


    return "" + prefix + params[star];
  });
}
/**
 * Performs pattern matching on a URL pathname and returns information about
 * the match.
 *
 * @see https://reactrouter.com/utils/match-path
 */

function router_matchPath(pattern, pathname) {
  if (typeof pattern === "string") {
    pattern = {
      path: pattern,
      caseSensitive: false,
      end: true
    };
  }

  let [matcher, paramNames] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
  let match = pathname.match(matcher);
  if (!match) return null;
  let matchedPathname = match[0];
  let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
  let captureGroups = match.slice(1);
  let params = paramNames.reduce((memo, paramName, index) => {
    // We need to compute the pathnameBase here using the raw splat value
    // instead of using params["*"] later because it will be decoded then
    if (paramName === "*") {
      let splatValue = captureGroups[index] || "";
      pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
    }

    memo[paramName] = safelyDecodeURIComponent(captureGroups[index] || "", paramName);
    return memo;
  }, {});
  return {
    params,
    pathname: matchedPathname,
    pathnameBase,
    pattern
  };
}

function compilePath(path, caseSensitive, end) {
  if (caseSensitive === void 0) {
    caseSensitive = false;
  }

  if (end === void 0) {
    end = true;
  }

  warning(path === "*" || !path.endsWith("*") || path.endsWith("/*"), "Route path \"" + path + "\" will be treated as if it were " + ("\"" + path.replace(/\*$/, "/*") + "\" because the `*` character must ") + "always follow a `/` in the pattern. To get rid of this warning, " + ("please change the route path to \"" + path.replace(/\*$/, "/*") + "\"."));
  let paramNames = [];
  let regexpSource = "^" + path.replace(/\/*\*?$/, "") // Ignore trailing / and /*, we'll handle it below
  .replace(/^\/*/, "/") // Make sure it has a leading /
  .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&") // Escape special regex chars
  .replace(/\/:(\w+)/g, (_, paramName) => {
    paramNames.push(paramName);
    return "/([^\\/]+)";
  });

  if (path.endsWith("*")) {
    paramNames.push("*");
    regexpSource += path === "*" || path === "/*" ? "(.*)$" // Already matched the initial /, just match the rest
    : "(?:\\/(.+)|\\/*)$"; // Don't include the / in params["*"]
  } else if (end) {
    // When matching to the end, ignore trailing slashes
    regexpSource += "\\/*$";
  } else if (path !== "" && path !== "/") {
    // If our path is non-empty and contains anything beyond an initial slash,
    // then we have _some_ form of path in our regex so we should expect to
    // match only if we find the end of this path segment.  Look for an optional
    // non-captured trailing slash (to match a portion of the URL) or the end
    // of the path (if we've matched to the end).  We used to do this with a
    // word boundary but that gives false positives on routes like
    // /user-preferences since `-` counts as a word boundary.
    regexpSource += "(?:(?=\\/|$))";
  } else ;

  let matcher = new RegExp(regexpSource, caseSensitive ? undefined : "i");
  return [matcher, paramNames];
}

function safelyDecodeURI(value) {
  try {
    return decodeURI(value);
  } catch (error) {
    warning(false, "The URL path \"" + value + "\" could not be decoded because it is is a " + "malformed URL segment. This is probably due to a bad percent " + ("encoding (" + error + ")."));
    return value;
  }
}

function safelyDecodeURIComponent(value, paramName) {
  try {
    return decodeURIComponent(value);
  } catch (error) {
    warning(false, "The value for the URL param \"" + paramName + "\" will not be decoded because" + (" the string \"" + value + "\" is a malformed URL segment. This is probably") + (" due to a bad percent encoding (" + error + ")."));
    return value;
  }
}
/**
 * @private
 */


function stripBasename(pathname, basename) {
  if (basename === "/") return pathname;

  if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
    return null;
  } // We want to leave trailing slash behavior in the user's control, so if they
  // specify a basename with a trailing slash, we should support it


  let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
  let nextChar = pathname.charAt(startIndex);

  if (nextChar && nextChar !== "/") {
    // pathname does not start with basename/
    return null;
  }

  return pathname.slice(startIndex) || "/";
}
/**
 * @private
 */

function warning(cond, message) {
  if (!cond) {
    // eslint-disable-next-line no-console
    if (typeof console !== "undefined") console.warn(message);

    try {
      // Welcome to debugging @remix-run/router!
      //
      // This error is thrown as a convenience so you can more easily
      // find the source for a warning that appears in the console by
      // enabling "pause on exceptions" in your JavaScript debugger.
      throw new Error(message); // eslint-disable-next-line no-empty
    } catch (e) {}
  }
}
/**
 * Returns a resolved path object relative to the given pathname.
 *
 * @see https://reactrouter.com/utils/resolve-path
 */

function resolvePath(to, fromPathname) {
  if (fromPathname === void 0) {
    fromPathname = "/";
  }

  let {
    pathname: toPathname,
    search = "",
    hash = ""
  } = typeof to === "string" ? parsePath(to) : to;
  let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
  return {
    pathname,
    search: normalizeSearch(search),
    hash: normalizeHash(hash)
  };
}

function resolvePathname(relativePath, fromPathname) {
  let segments = fromPathname.replace(/\/+$/, "").split("/");
  let relativeSegments = relativePath.split("/");
  relativeSegments.forEach(segment => {
    if (segment === "..") {
      // Keep the root "" segment so the pathname starts at /
      if (segments.length > 1) segments.pop();
    } else if (segment !== ".") {
      segments.push(segment);
    }
  });
  return segments.length > 1 ? segments.join("/") : "/";
}

function getInvalidPathError(char, field, dest, path) {
  return "Cannot include a '" + char + "' character in a manually specified " + ("`to." + field + "` field [" + JSON.stringify(path) + "].  Please separate it out to the ") + ("`to." + dest + "` field. Alternatively you may provide the full path as ") + "a string in <Link to=\"...\"> and the router will parse it for you.";
}
/**
 * @private
 *
 * When processing relative navigation we want to ignore ancestor routes that
 * do not contribute to the path, such that index/pathless layout routes don't
 * interfere.
 *
 * For example, when moving a route element into an index route and/or a
 * pathless layout route, relative link behavior contained within should stay
 * the same.  Both of the following examples should link back to the root:
 *
 *   <Route path="/">
 *     <Route path="accounts" element={<Link to=".."}>
 *   </Route>
 *
 *   <Route path="/">
 *     <Route path="accounts">
 *       <Route element={<AccountsLayout />}>       // <-- Does not contribute
 *         <Route index element={<Link to=".."} />  // <-- Does not contribute
 *       </Route
 *     </Route>
 *   </Route>
 */


function getPathContributingMatches(matches) {
  return matches.filter((match, index) => index === 0 || match.route.path && match.route.path.length > 0);
}
/**
 * @private
 */

function resolveTo(toArg, routePathnames, locationPathname, isPathRelative) {
  if (isPathRelative === void 0) {
    isPathRelative = false;
  }

  let to;

  if (typeof toArg === "string") {
    to = parsePath(toArg);
  } else {
    to = _extends({}, toArg);
    router_invariant(!to.pathname || !to.pathname.includes("?"), getInvalidPathError("?", "pathname", "search", to));
    router_invariant(!to.pathname || !to.pathname.includes("#"), getInvalidPathError("#", "pathname", "hash", to));
    router_invariant(!to.search || !to.search.includes("#"), getInvalidPathError("#", "search", "hash", to));
  }

  let isEmptyPath = toArg === "" || to.pathname === "";
  let toPathname = isEmptyPath ? "/" : to.pathname;
  let from; // Routing is relative to the current pathname if explicitly requested.
  //
  // If a pathname is explicitly provided in `to`, it should be relative to the
  // route context. This is explained in `Note on `<Link to>` values` in our
  // migration guide from v5 as a means of disambiguation between `to` values
  // that begin with `/` and those that do not. However, this is problematic for
  // `to` values that do not provide a pathname. `to` can simply be a search or
  // hash string, in which case we should assume that the navigation is relative
  // to the current location's pathname and *not* the route pathname.

  if (isPathRelative || toPathname == null) {
    from = locationPathname;
  } else {
    let routePathnameIndex = routePathnames.length - 1;

    if (toPathname.startsWith("..")) {
      let toSegments = toPathname.split("/"); // Each leading .. segment means "go up one route" instead of "go up one
      // URL segment".  This is a key difference from how <a href> works and a
      // major reason we call this a "to" value instead of a "href".

      while (toSegments[0] === "..") {
        toSegments.shift();
        routePathnameIndex -= 1;
      }

      to.pathname = toSegments.join("/");
    } // If there are more ".." segments than parent routes, resolve relative to
    // the root / URL.


    from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
  }

  let path = resolvePath(to, from); // Ensure the pathname has a trailing slash if the original "to" had one

  let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/"); // Or if this was a link to the current path which has a trailing slash

  let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");

  if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) {
    path.pathname += "/";
  }

  return path;
}
/**
 * @private
 */

function getToPathname(to) {
  // Empty strings should be treated the same as / paths
  return to === "" || to.pathname === "" ? "/" : typeof to === "string" ? parsePath(to).pathname : to.pathname;
}
/**
 * @private
 */

const router_joinPaths = paths => paths.join("/").replace(/\/\/+/g, "/");
/**
 * @private
 */

const normalizePathname = pathname => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
/**
 * @private
 */

const normalizeSearch = search => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
/**
 * @private
 */

const normalizeHash = hash => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
/**
 * This is a shortcut for creating `application/json` responses. Converts `data`
 * to JSON and sets the `Content-Type` header.
 */

const json = function json(data, init) {
  if (init === void 0) {
    init = {};
  }

  let responseInit = typeof init === "number" ? {
    status: init
  } : init;
  let headers = new Headers(responseInit.headers);

  if (!headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json; charset=utf-8");
  }

  return new Response(JSON.stringify(data), _extends({}, responseInit, {
    headers
  }));
};
class router_AbortedDeferredError extends Error {}
class DeferredData {
  constructor(data, responseInit) {
    this.pendingKeysSet = new Set();
    this.subscribers = new Set();
    this.deferredKeys = [];
    router_invariant(data && typeof data === "object" && !Array.isArray(data), "defer() only accepts plain objects"); // Set up an AbortController + Promise we can race against to exit early
    // cancellation

    let reject;
    this.abortPromise = new Promise((_, r) => reject = r);
    this.controller = new AbortController();

    let onAbort = () => reject(new router_AbortedDeferredError("Deferred data aborted"));

    this.unlistenAbortSignal = () => this.controller.signal.removeEventListener("abort", onAbort);

    this.controller.signal.addEventListener("abort", onAbort);
    this.data = Object.entries(data).reduce((acc, _ref) => {
      let [key, value] = _ref;
      return Object.assign(acc, {
        [key]: this.trackPromise(key, value)
      });
    }, {});

    if (this.done) {
      // All incoming values were resolved
      this.unlistenAbortSignal();
    }

    this.init = responseInit;
  }

  trackPromise(key, value) {
    if (!(value instanceof Promise)) {
      return value;
    }

    this.deferredKeys.push(key);
    this.pendingKeysSet.add(key); // We store a little wrapper promise that will be extended with
    // _data/_error props upon resolve/reject

    let promise = Promise.race([value, this.abortPromise]).then(data => this.onSettle(promise, key, null, data), error => this.onSettle(promise, key, error)); // Register rejection listeners to avoid uncaught promise rejections on
    // errors or aborted deferred values

    promise.catch(() => {});
    Object.defineProperty(promise, "_tracked", {
      get: () => true
    });
    return promise;
  }

  onSettle(promise, key, error, data) {
    if (this.controller.signal.aborted && error instanceof router_AbortedDeferredError) {
      this.unlistenAbortSignal();
      Object.defineProperty(promise, "_error", {
        get: () => error
      });
      return Promise.reject(error);
    }

    this.pendingKeysSet.delete(key);

    if (this.done) {
      // Nothing left to abort!
      this.unlistenAbortSignal();
    }

    if (error) {
      Object.defineProperty(promise, "_error", {
        get: () => error
      });
      this.emit(false, key);
      return Promise.reject(error);
    }

    Object.defineProperty(promise, "_data", {
      get: () => data
    });
    this.emit(false, key);
    return data;
  }

  emit(aborted, settledKey) {
    this.subscribers.forEach(subscriber => subscriber(aborted, settledKey));
  }

  subscribe(fn) {
    this.subscribers.add(fn);
    return () => this.subscribers.delete(fn);
  }

  cancel() {
    this.controller.abort();
    this.pendingKeysSet.forEach((v, k) => this.pendingKeysSet.delete(k));
    this.emit(true);
  }

  async resolveData(signal) {
    let aborted = false;

    if (!this.done) {
      let onAbort = () => this.cancel();

      signal.addEventListener("abort", onAbort);
      aborted = await new Promise(resolve => {
        this.subscribe(aborted => {
          signal.removeEventListener("abort", onAbort);

          if (aborted || this.done) {
            resolve(aborted);
          }
        });
      });
    }

    return aborted;
  }

  get done() {
    return this.pendingKeysSet.size === 0;
  }

  get unwrappedData() {
    router_invariant(this.data !== null && this.done, "Can only unwrap data on initialized and settled deferreds");
    return Object.entries(this.data).reduce((acc, _ref2) => {
      let [key, value] = _ref2;
      return Object.assign(acc, {
        [key]: unwrapTrackedPromise(value)
      });
    }, {});
  }

  get pendingKeys() {
    return Array.from(this.pendingKeysSet);
  }

}

function isTrackedPromise(value) {
  return value instanceof Promise && value._tracked === true;
}

function unwrapTrackedPromise(value) {
  if (!isTrackedPromise(value)) {
    return value;
  }

  if (value._error) {
    throw value._error;
  }

  return value._data;
}

const defer = function defer(data, init) {
  if (init === void 0) {
    init = {};
  }

  let responseInit = typeof init === "number" ? {
    status: init
  } : init;
  return new DeferredData(data, responseInit);
};
/**
 * A redirect response. Sets the status code and the `Location` header.
 * Defaults to "302 Found".
 */

const redirect = function redirect(url, init) {
  if (init === void 0) {
    init = 302;
  }

  let responseInit = init;

  if (typeof responseInit === "number") {
    responseInit = {
      status: responseInit
    };
  } else if (typeof responseInit.status === "undefined") {
    responseInit.status = 302;
  }

  let headers = new Headers(responseInit.headers);
  headers.set("Location", url);
  return new Response(null, _extends({}, responseInit, {
    headers
  }));
};
/**
 * @private
 * Utility class we use to hold auto-unwrapped 4xx/5xx Response bodies
 */

class router_ErrorResponse {
  constructor(status, statusText, data, internal) {
    if (internal === void 0) {
      internal = false;
    }

    this.status = status;
    this.statusText = statusText || "";
    this.internal = internal;

    if (data instanceof Error) {
      this.data = data.toString();
      this.error = data;
    } else {
      this.data = data;
    }
  }

}
/**
 * Check if the given error is an ErrorResponse generated from a 4xx/5xx
 * Response thrown from an action/loader
 */

function isRouteErrorResponse(error) {
  return error != null && typeof error.status === "number" && typeof error.statusText === "string" && typeof error.internal === "boolean" && "data" in error;
}

const validMutationMethodsArr = ["post", "put", "patch", "delete"];
const validMutationMethods = new Set(validMutationMethodsArr);
const validRequestMethodsArr = ["get", ...validMutationMethodsArr];
const validRequestMethods = new Set(validRequestMethodsArr);
const redirectStatusCodes = new Set([301, 302, 303, 307, 308]);
const redirectPreserveMethodStatusCodes = new Set([307, 308]);
const IDLE_NAVIGATION = {
  state: "idle",
  location: undefined,
  formMethod: undefined,
  formAction: undefined,
  formEncType: undefined,
  formData: undefined
};
const IDLE_FETCHER = {
  state: "idle",
  data: undefined,
  formMethod: undefined,
  formAction: undefined,
  formEncType: undefined,
  formData: undefined
};
const IDLE_BLOCKER = {
  state: "unblocked",
  proceed: undefined,
  reset: undefined,
  location: undefined
};
const ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
const isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
const isServer = !isBrowser; //#endregion
////////////////////////////////////////////////////////////////////////////////
//#region createRouter
////////////////////////////////////////////////////////////////////////////////

/**
 * Create a router and listen to history POP navigations
 */

function router_createRouter(init) {
  router_invariant(init.routes.length > 0, "You must provide a non-empty routes array to createRouter");
  let dataRoutes = convertRoutesToDataRoutes(init.routes); // Cleanup function for history

  let unlistenHistory = null; // Externally-provided functions to call on all state changes

  let subscribers = new Set(); // Externally-provided object to hold scroll restoration locations during routing

  let savedScrollPositions = null; // Externally-provided function to get scroll restoration keys

  let getScrollRestorationKey = null; // Externally-provided function to get current scroll position

  let getScrollPosition = null; // One-time flag to control the initial hydration scroll restoration.  Because
  // we don't get the saved positions from <ScrollRestoration /> until _after_
  // the initial render, we need to manually trigger a separate updateState to
  // send along the restoreScrollPosition
  // Set to true if we have `hydrationData` since we assume we were SSR'd and that
  // SSR did the initial scroll restoration.

  let initialScrollRestored = init.hydrationData != null;
  let initialMatches = matchRoutes(dataRoutes, init.history.location, init.basename);
  let initialErrors = null;

  if (initialMatches == null) {
    // If we do not match a user-provided-route, fall back to the root
    // to allow the error boundary to take over
    let error = getInternalRouterError(404, {
      pathname: init.history.location.pathname
    });
    let {
      matches,
      route
    } = getShortCircuitMatches(dataRoutes);
    initialMatches = matches;
    initialErrors = {
      [route.id]: error
    };
  }

  let initialized = !initialMatches.some(m => m.route.loader) || init.hydrationData != null;
  let router;
  let state = {
    historyAction: init.history.action,
    location: init.history.location,
    matches: initialMatches,
    initialized,
    navigation: IDLE_NAVIGATION,
    // Don't restore on initial updateState() if we were SSR'd
    restoreScrollPosition: init.hydrationData != null ? false : null,
    preventScrollReset: false,
    revalidation: "idle",
    loaderData: init.hydrationData && init.hydrationData.loaderData || {},
    actionData: init.hydrationData && init.hydrationData.actionData || null,
    errors: init.hydrationData && init.hydrationData.errors || initialErrors,
    fetchers: new Map(),
    blockers: new Map()
  }; // -- Stateful internal variables to manage navigations --
  // Current navigation in progress (to be committed in completeNavigation)

  let pendingAction = Action.Pop; // Should the current navigation prevent the scroll reset if scroll cannot
  // be restored?

  let pendingPreventScrollReset = false; // AbortController for the active navigation

  let pendingNavigationController; // We use this to avoid touching history in completeNavigation if a
  // revalidation is entirely uninterrupted

  let isUninterruptedRevalidation = false; // Use this internal flag to force revalidation of all loaders:
  //  - submissions (completed or interrupted)
  //  - useRevalidate()
  //  - X-Remix-Revalidate (from redirect)

  let isRevalidationRequired = false; // Use this internal array to capture routes that require revalidation due
  // to a cancelled deferred on action submission

  let cancelledDeferredRoutes = []; // Use this internal array to capture fetcher loads that were cancelled by an
  // action navigation and require revalidation

  let cancelledFetcherLoads = []; // AbortControllers for any in-flight fetchers

  let fetchControllers = new Map(); // Track loads based on the order in which they started

  let incrementingLoadId = 0; // Track the outstanding pending navigation data load to be compared against
  // the globally incrementing load when a fetcher load lands after a completed
  // navigation

  let pendingNavigationLoadId = -1; // Fetchers that triggered data reloads as a result of their actions

  let fetchReloadIds = new Map(); // Fetchers that triggered redirect navigations from their actions

  let fetchRedirectIds = new Set(); // Most recent href/match for fetcher.load calls for fetchers

  let fetchLoadMatches = new Map(); // Store DeferredData instances for active route matches.  When a
  // route loader returns defer() we stick one in here.  Then, when a nested
  // promise resolves we update loaderData.  If a new navigation starts we
  // cancel active deferreds for eliminated routes.

  let activeDeferreds = new Map(); // Store blocker functions in a separate Map outside of router state since
  // we don't need to update UI state if they change

  let blockerFunctions = new Map(); // Flag to ignore the next history update, so we can revert the URL change on
  // a POP navigation that was blocked by the user without touching router state

  let ignoreNextHistoryUpdate = false; // Initialize the router, all side effects should be kicked off from here.
  // Implemented as a Fluent API for ease of:
  //   let router = createRouter(init).initialize();

  function initialize() {
    // If history informs us of a POP navigation, start the navigation but do not update
    // state.  We'll update our own state once the navigation completes
    unlistenHistory = init.history.listen(_ref => {
      let {
        action: historyAction,
        location,
        delta
      } = _ref;

      // Ignore this event if it was just us resetting the URL from a
      // blocked POP navigation
      if (ignoreNextHistoryUpdate) {
        ignoreNextHistoryUpdate = false;
        return;
      }

      warning(blockerFunctions.size === 0 || delta != null, "You are trying to use a blocker on a POP navigation to a location " + "that was not created by @remix-run/router. This will fail silently in " + "production. This can happen if you are navigating outside the router " + "via `window.history.pushState`/`window.location.hash` instead of using " + "router navigation APIs.  This can also happen if you are using " + "createHashRouter and the user manually changes the URL.");
      let blockerKey = shouldBlockNavigation({
        currentLocation: state.location,
        nextLocation: location,
        historyAction
      });

      if (blockerKey && delta != null) {
        // Restore the URL to match the current UI, but don't update router state
        ignoreNextHistoryUpdate = true;
        init.history.go(delta * -1); // Put the blocker into a blocked state

        updateBlocker(blockerKey, {
          state: "blocked",
          location,

          proceed() {
            updateBlocker(blockerKey, {
              state: "proceeding",
              proceed: undefined,
              reset: undefined,
              location
            }); // Re-do the same POP navigation we just blocked

            init.history.go(delta);
          },

          reset() {
            deleteBlocker(blockerKey);
            updateState({
              blockers: new Map(router.state.blockers)
            });
          }

        });
        return;
      }

      return startNavigation(historyAction, location);
    }); // Kick off initial data load if needed.  Use Pop to avoid modifying history

    if (!state.initialized) {
      startNavigation(Action.Pop, state.location);
    }

    return router;
  } // Clean up a router and it's side effects


  function dispose() {
    if (unlistenHistory) {
      unlistenHistory();
    }

    subscribers.clear();
    pendingNavigationController && pendingNavigationController.abort();
    state.fetchers.forEach((_, key) => deleteFetcher(key));
    state.blockers.forEach((_, key) => deleteBlocker(key));
  } // Subscribe to state updates for the router


  function subscribe(fn) {
    subscribers.add(fn);
    return () => subscribers.delete(fn);
  } // Update our state and notify the calling context of the change


  function updateState(newState) {
    state = _extends({}, state, newState);
    subscribers.forEach(subscriber => subscriber(state));
  } // Complete a navigation returning the state.navigation back to the IDLE_NAVIGATION
  // and setting state.[historyAction/location/matches] to the new route.
  // - Location is a required param
  // - Navigation will always be set to IDLE_NAVIGATION
  // - Can pass any other state in newState


  function completeNavigation(location, newState) {
    var _location$state, _location$state2;

    // Deduce if we're in a loading/actionReload state:
    // - We have committed actionData in the store
    // - The current navigation was a mutation submission
    // - We're past the submitting state and into the loading state
    // - The location being loaded is not the result of a redirect
    let isActionReload = state.actionData != null && state.navigation.formMethod != null && isMutationMethod(state.navigation.formMethod) && state.navigation.state === "loading" && ((_location$state = location.state) == null ? void 0 : _location$state._isRedirect) !== true;
    let actionData;

    if (newState.actionData) {
      if (Object.keys(newState.actionData).length > 0) {
        actionData = newState.actionData;
      } else {
        // Empty actionData -> clear prior actionData due to an action error
        actionData = null;
      }
    } else if (isActionReload) {
      // Keep the current data if we're wrapping up the action reload
      actionData = state.actionData;
    } else {
      // Clear actionData on any other completed navigations
      actionData = null;
    } // Always preserve any existing loaderData from re-used routes


    let loaderData = newState.loaderData ? mergeLoaderData(state.loaderData, newState.loaderData, newState.matches || [], newState.errors) : state.loaderData; // On a successful navigation we can assume we got through all blockers
    // so we can start fresh

    for (let [key] of blockerFunctions) {
      deleteBlocker(key);
    } // Always respect the user flag.  Otherwise don't reset on mutation
    // submission navigations unless they redirect


    let preventScrollReset = pendingPreventScrollReset === true || state.navigation.formMethod != null && isMutationMethod(state.navigation.formMethod) && ((_location$state2 = location.state) == null ? void 0 : _location$state2._isRedirect) !== true;
    updateState(_extends({}, newState, {
      actionData,
      loaderData,
      historyAction: pendingAction,
      location,
      initialized: true,
      navigation: IDLE_NAVIGATION,
      revalidation: "idle",
      restoreScrollPosition: getSavedScrollPosition(location, newState.matches || state.matches),
      preventScrollReset,
      blockers: new Map(state.blockers)
    }));

    if (isUninterruptedRevalidation) ; else if (pendingAction === Action.Pop) ; else if (pendingAction === Action.Push) {
      init.history.push(location, location.state);
    } else if (pendingAction === Action.Replace) {
      init.history.replace(location, location.state);
    } // Reset stateful navigation vars


    pendingAction = Action.Pop;
    pendingPreventScrollReset = false;
    isUninterruptedRevalidation = false;
    isRevalidationRequired = false;
    cancelledDeferredRoutes = [];
    cancelledFetcherLoads = [];
  } // Trigger a navigation event, which can either be a numerical POP or a PUSH
  // replace with an optional submission


  async function navigate(to, opts) {
    if (typeof to === "number") {
      init.history.go(to);
      return;
    }

    let {
      path,
      submission,
      error
    } = normalizeNavigateOptions(to, opts);
    let currentLocation = state.location;
    let nextLocation = createLocation(state.location, path, opts && opts.state); // When using navigate as a PUSH/REPLACE we aren't reading an already-encoded
    // URL from window.location, so we need to encode it here so the behavior
    // remains the same as POP and non-data-router usages.  new URL() does all
    // the same encoding we'd get from a history.pushState/window.location read
    // without having to touch history

    nextLocation = _extends({}, nextLocation, init.history.encodeLocation(nextLocation));
    let userReplace = opts && opts.replace != null ? opts.replace : undefined;
    let historyAction = Action.Push;

    if (userReplace === true) {
      historyAction = Action.Replace;
    } else if (userReplace === false) ; else if (submission != null && isMutationMethod(submission.formMethod) && submission.formAction === state.location.pathname + state.location.search) {
      // By default on submissions to the current location we REPLACE so that
      // users don't have to double-click the back button to get to the prior
      // location.  If the user redirects to a different location from the
      // action/loader this will be ignored and the redirect will be a PUSH
      historyAction = Action.Replace;
    }

    let preventScrollReset = opts && "preventScrollReset" in opts ? opts.preventScrollReset === true : undefined;
    let blockerKey = shouldBlockNavigation({
      currentLocation,
      nextLocation,
      historyAction
    });

    if (blockerKey) {
      // Put the blocker into a blocked state
      updateBlocker(blockerKey, {
        state: "blocked",
        location: nextLocation,

        proceed() {
          updateBlocker(blockerKey, {
            state: "proceeding",
            proceed: undefined,
            reset: undefined,
            location: nextLocation
          }); // Send the same navigation through

          navigate(to, opts);
        },

        reset() {
          deleteBlocker(blockerKey);
          updateState({
            blockers: new Map(state.blockers)
          });
        }

      });
      return;
    }

    return await startNavigation(historyAction, nextLocation, {
      submission,
      // Send through the formData serialization error if we have one so we can
      // render at the right error boundary after we match routes
      pendingError: error,
      preventScrollReset,
      replace: opts && opts.replace
    });
  } // Revalidate all current loaders.  If a navigation is in progress or if this
  // is interrupted by a navigation, allow this to "succeed" by calling all
  // loaders during the next loader round


  function revalidate() {
    interruptActiveLoads();
    updateState({
      revalidation: "loading"
    }); // If we're currently submitting an action, we don't need to start a new
    // navigation, we'll just let the follow up loader execution call all loaders

    if (state.navigation.state === "submitting") {
      return;
    } // If we're currently in an idle state, start a new navigation for the current
    // action/location and mark it as uninterrupted, which will skip the history
    // update in completeNavigation


    if (state.navigation.state === "idle") {
      startNavigation(state.historyAction, state.location, {
        startUninterruptedRevalidation: true
      });
      return;
    } // Otherwise, if we're currently in a loading state, just start a new
    // navigation to the navigation.location but do not trigger an uninterrupted
    // revalidation so that history correctly updates once the navigation completes


    startNavigation(pendingAction || state.historyAction, state.navigation.location, {
      overrideNavigation: state.navigation
    });
  } // Start a navigation to the given action/location.  Can optionally provide a
  // overrideNavigation which will override the normalLoad in the case of a redirect
  // navigation


  async function startNavigation(historyAction, location, opts) {
    // Abort any in-progress navigations and start a new one. Unset any ongoing
    // uninterrupted revalidations unless told otherwise, since we want this
    // new navigation to update history normally
    pendingNavigationController && pendingNavigationController.abort();
    pendingNavigationController = null;
    pendingAction = historyAction;
    isUninterruptedRevalidation = (opts && opts.startUninterruptedRevalidation) === true; // Save the current scroll position every time we start a new navigation,
    // and track whether we should reset scroll on completion

    saveScrollPosition(state.location, state.matches);
    pendingPreventScrollReset = (opts && opts.preventScrollReset) === true;
    let loadingNavigation = opts && opts.overrideNavigation;
    let matches = matchRoutes(dataRoutes, location, init.basename); // Short circuit with a 404 on the root error boundary if we match nothing

    if (!matches) {
      let error = getInternalRouterError(404, {
        pathname: location.pathname
      });
      let {
        matches: notFoundMatches,
        route
      } = getShortCircuitMatches(dataRoutes); // Cancel all pending deferred on 404s since we don't keep any routes

      cancelActiveDeferreds();
      completeNavigation(location, {
        matches: notFoundMatches,
        loaderData: {},
        errors: {
          [route.id]: error
        }
      });
      return;
    } // Short circuit if it's only a hash change and not a mutation submission
    // For example, on /page#hash and submit a <Form method="post"> which will
    // default to a navigation to /page


    if (isHashChangeOnly(state.location, location) && !(opts && opts.submission && isMutationMethod(opts.submission.formMethod))) {
      completeNavigation(location, {
        matches
      });
      return;
    } // Create a controller/Request for this navigation


    pendingNavigationController = new AbortController();
    let request = createClientSideRequest(init.history, location, pendingNavigationController.signal, opts && opts.submission);
    let pendingActionData;
    let pendingError;

    if (opts && opts.pendingError) {
      // If we have a pendingError, it means the user attempted a GET submission
      // with binary FormData so assign here and skip to handleLoaders.  That
      // way we handle calling loaders above the boundary etc.  It's not really
      // different from an actionError in that sense.
      pendingError = {
        [findNearestBoundary(matches).route.id]: opts.pendingError
      };
    } else if (opts && opts.submission && isMutationMethod(opts.submission.formMethod)) {
      // Call action if we received an action submission
      let actionOutput = await handleAction(request, location, opts.submission, matches, {
        replace: opts.replace
      });

      if (actionOutput.shortCircuited) {
        return;
      }

      pendingActionData = actionOutput.pendingActionData;
      pendingError = actionOutput.pendingActionError;

      let navigation = _extends({
        state: "loading",
        location
      }, opts.submission);

      loadingNavigation = navigation; // Create a GET request for the loaders

      request = new Request(request.url, {
        signal: request.signal
      });
    } // Call loaders


    let {
      shortCircuited,
      loaderData,
      errors
    } = await handleLoaders(request, location, matches, loadingNavigation, opts && opts.submission, opts && opts.replace, pendingActionData, pendingError);

    if (shortCircuited) {
      return;
    } // Clean up now that the action/loaders have completed.  Don't clean up if
    // we short circuited because pendingNavigationController will have already
    // been assigned to a new controller for the next navigation


    pendingNavigationController = null;
    completeNavigation(location, _extends({
      matches
    }, pendingActionData ? {
      actionData: pendingActionData
    } : {}, {
      loaderData,
      errors
    }));
  } // Call the action matched by the leaf route for this navigation and handle
  // redirects/errors


  async function handleAction(request, location, submission, matches, opts) {
    interruptActiveLoads(); // Put us in a submitting state

    let navigation = _extends({
      state: "submitting",
      location
    }, submission);

    updateState({
      navigation
    }); // Call our action and get the result

    let result;
    let actionMatch = getTargetMatch(matches, location);

    if (!actionMatch.route.action) {
      result = {
        type: ResultType.error,
        error: getInternalRouterError(405, {
          method: request.method,
          pathname: location.pathname,
          routeId: actionMatch.route.id
        })
      };
    } else {
      result = await callLoaderOrAction("action", request, actionMatch, matches, router.basename);

      if (request.signal.aborted) {
        return {
          shortCircuited: true
        };
      }
    }

    if (isRedirectResult(result)) {
      let replace;

      if (opts && opts.replace != null) {
        replace = opts.replace;
      } else {
        // If the user didn't explicity indicate replace behavior, replace if
        // we redirected to the exact same location we're currently at to avoid
        // double back-buttons
        replace = result.location === state.location.pathname + state.location.search;
      }

      await startRedirectNavigation(state, result, {
        submission,
        replace
      });
      return {
        shortCircuited: true
      };
    }

    if (isErrorResult(result)) {
      // Store off the pending error - we use it to determine which loaders
      // to call and will commit it when we complete the navigation
      let boundaryMatch = findNearestBoundary(matches, actionMatch.route.id); // By default, all submissions are REPLACE navigations, but if the
      // action threw an error that'll be rendered in an errorElement, we fall
      // back to PUSH so that the user can use the back button to get back to
      // the pre-submission form location to try again

      if ((opts && opts.replace) !== true) {
        pendingAction = Action.Push;
      }

      return {
        // Send back an empty object we can use to clear out any prior actionData
        pendingActionData: {},
        pendingActionError: {
          [boundaryMatch.route.id]: result.error
        }
      };
    }

    if (isDeferredResult(result)) {
      throw getInternalRouterError(400, {
        type: "defer-action"
      });
    }

    return {
      pendingActionData: {
        [actionMatch.route.id]: result.data
      }
    };
  } // Call all applicable loaders for the given matches, handling redirects,
  // errors, etc.


  async function handleLoaders(request, location, matches, overrideNavigation, submission, replace, pendingActionData, pendingError) {
    // Figure out the right navigation we want to use for data loading
    let loadingNavigation = overrideNavigation;

    if (!loadingNavigation) {
      let navigation = _extends({
        state: "loading",
        location,
        formMethod: undefined,
        formAction: undefined,
        formEncType: undefined,
        formData: undefined
      }, submission);

      loadingNavigation = navigation;
    } // If this was a redirect from an action we don't have a "submission" but
    // we have it on the loading navigation so use that if available


    let activeSubmission = submission ? submission : loadingNavigation.formMethod && loadingNavigation.formAction && loadingNavigation.formData && loadingNavigation.formEncType ? {
      formMethod: loadingNavigation.formMethod,
      formAction: loadingNavigation.formAction,
      formData: loadingNavigation.formData,
      formEncType: loadingNavigation.formEncType
    } : undefined;
    let [matchesToLoad, revalidatingFetchers] = getMatchesToLoad(init.history, state, matches, activeSubmission, location, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, pendingActionData, pendingError, fetchLoadMatches); // Cancel pending deferreds for no-longer-matched routes or routes we're
    // about to reload.  Note that if this is an action reload we would have
    // already cancelled all pending deferreds so this would be a no-op

    cancelActiveDeferreds(routeId => !(matches && matches.some(m => m.route.id === routeId)) || matchesToLoad && matchesToLoad.some(m => m.route.id === routeId)); // Short circuit if we have no loaders to run

    if (matchesToLoad.length === 0 && revalidatingFetchers.length === 0) {
      completeNavigation(location, _extends({
        matches,
        loaderData: {},
        // Commit pending error if we're short circuiting
        errors: pendingError || null
      }, pendingActionData ? {
        actionData: pendingActionData
      } : {}));
      return {
        shortCircuited: true
      };
    } // If this is an uninterrupted revalidation, we remain in our current idle
    // state.  If not, we need to switch to our loading state and load data,
    // preserving any new action data or existing action data (in the case of
    // a revalidation interrupting an actionReload)


    if (!isUninterruptedRevalidation) {
      revalidatingFetchers.forEach(rf => {
        let fetcher = state.fetchers.get(rf.key);
        let revalidatingFetcher = {
          state: "loading",
          data: fetcher && fetcher.data,
          formMethod: undefined,
          formAction: undefined,
          formEncType: undefined,
          formData: undefined,
          " _hasFetcherDoneAnything ": true
        };
        state.fetchers.set(rf.key, revalidatingFetcher);
      });
      let actionData = pendingActionData || state.actionData;
      updateState(_extends({
        navigation: loadingNavigation
      }, actionData ? Object.keys(actionData).length === 0 ? {
        actionData: null
      } : {
        actionData
      } : {}, revalidatingFetchers.length > 0 ? {
        fetchers: new Map(state.fetchers)
      } : {}));
    }

    pendingNavigationLoadId = ++incrementingLoadId;
    revalidatingFetchers.forEach(rf => fetchControllers.set(rf.key, pendingNavigationController));
    let {
      results,
      loaderResults,
      fetcherResults
    } = await callLoadersAndMaybeResolveData(state.matches, matches, matchesToLoad, revalidatingFetchers, request);

    if (request.signal.aborted) {
      return {
        shortCircuited: true
      };
    } // Clean up _after_ loaders have completed.  Don't clean up if we short
    // circuited because fetchControllers would have been aborted and
    // reassigned to new controllers for the next navigation


    revalidatingFetchers.forEach(rf => fetchControllers.delete(rf.key)); // If any loaders returned a redirect Response, start a new REPLACE navigation

    let redirect = findRedirect(results);

    if (redirect) {
      await startRedirectNavigation(state, redirect, {
        replace
      });
      return {
        shortCircuited: true
      };
    } // Process and commit output from loaders


    let {
      loaderData,
      errors
    } = processLoaderData(state, matches, matchesToLoad, loaderResults, pendingError, revalidatingFetchers, fetcherResults, activeDeferreds); // Wire up subscribers to update loaderData as promises settle

    activeDeferreds.forEach((deferredData, routeId) => {
      deferredData.subscribe(aborted => {
        // Note: No need to updateState here since the TrackedPromise on
        // loaderData is stable across resolve/reject
        // Remove this instance if we were aborted or if promises have settled
        if (aborted || deferredData.done) {
          activeDeferreds.delete(routeId);
        }
      });
    });
    markFetchRedirectsDone();
    let didAbortFetchLoads = abortStaleFetchLoads(pendingNavigationLoadId);
    return _extends({
      loaderData,
      errors
    }, didAbortFetchLoads || revalidatingFetchers.length > 0 ? {
      fetchers: new Map(state.fetchers)
    } : {});
  }

  function getFetcher(key) {
    return state.fetchers.get(key) || IDLE_FETCHER;
  } // Trigger a fetcher load/submit for the given fetcher key


  function fetch(key, routeId, href, opts) {
    if (isServer) {
      throw new Error("router.fetch() was called during the server render, but it shouldn't be. " + "You are likely calling a useFetcher() method in the body of your component. " + "Try moving it to a useEffect or a callback.");
    }

    if (fetchControllers.has(key)) abortFetcher(key);
    let matches = matchRoutes(dataRoutes, href, init.basename);

    if (!matches) {
      setFetcherError(key, routeId, getInternalRouterError(404, {
        pathname: href
      }));
      return;
    }

    let {
      path,
      submission
    } = normalizeNavigateOptions(href, opts, true);
    let match = getTargetMatch(matches, path);
    pendingPreventScrollReset = (opts && opts.preventScrollReset) === true;

    if (submission && isMutationMethod(submission.formMethod)) {
      handleFetcherAction(key, routeId, path, match, matches, submission);
      return;
    } // Store off the match so we can call it's shouldRevalidate on subsequent
    // revalidations


    fetchLoadMatches.set(key, {
      routeId,
      path,
      match,
      matches
    });
    handleFetcherLoader(key, routeId, path, match, matches, submission);
  } // Call the action for the matched fetcher.submit(), and then handle redirects,
  // errors, and revalidation


  async function handleFetcherAction(key, routeId, path, match, requestMatches, submission) {
    interruptActiveLoads();
    fetchLoadMatches.delete(key);

    if (!match.route.action) {
      let error = getInternalRouterError(405, {
        method: submission.formMethod,
        pathname: path,
        routeId: routeId
      });
      setFetcherError(key, routeId, error);
      return;
    } // Put this fetcher into it's submitting state


    let existingFetcher = state.fetchers.get(key);

    let fetcher = _extends({
      state: "submitting"
    }, submission, {
      data: existingFetcher && existingFetcher.data,
      " _hasFetcherDoneAnything ": true
    });

    state.fetchers.set(key, fetcher);
    updateState({
      fetchers: new Map(state.fetchers)
    }); // Call the action for the fetcher

    let abortController = new AbortController();
    let fetchRequest = createClientSideRequest(init.history, path, abortController.signal, submission);
    fetchControllers.set(key, abortController);
    let actionResult = await callLoaderOrAction("action", fetchRequest, match, requestMatches, router.basename);

    if (fetchRequest.signal.aborted) {
      // We can delete this so long as we weren't aborted by ou our own fetcher
      // re-submit which would have put _new_ controller is in fetchControllers
      if (fetchControllers.get(key) === abortController) {
        fetchControllers.delete(key);
      }

      return;
    }

    if (isRedirectResult(actionResult)) {
      fetchControllers.delete(key);
      fetchRedirectIds.add(key);

      let loadingFetcher = _extends({
        state: "loading"
      }, submission, {
        data: undefined,
        " _hasFetcherDoneAnything ": true
      });

      state.fetchers.set(key, loadingFetcher);
      updateState({
        fetchers: new Map(state.fetchers)
      });
      return startRedirectNavigation(state, actionResult, {
        isFetchActionRedirect: true
      });
    } // Process any non-redirect errors thrown


    if (isErrorResult(actionResult)) {
      setFetcherError(key, routeId, actionResult.error);
      return;
    }

    if (isDeferredResult(actionResult)) {
      throw getInternalRouterError(400, {
        type: "defer-action"
      });
    } // Start the data load for current matches, or the next location if we're
    // in the middle of a navigation


    let nextLocation = state.navigation.location || state.location;
    let revalidationRequest = createClientSideRequest(init.history, nextLocation, abortController.signal);
    let matches = state.navigation.state !== "idle" ? matchRoutes(dataRoutes, state.navigation.location, init.basename) : state.matches;
    router_invariant(matches, "Didn't find any matches after fetcher action");
    let loadId = ++incrementingLoadId;
    fetchReloadIds.set(key, loadId);

    let loadFetcher = _extends({
      state: "loading",
      data: actionResult.data
    }, submission, {
      " _hasFetcherDoneAnything ": true
    });

    state.fetchers.set(key, loadFetcher);
    let [matchesToLoad, revalidatingFetchers] = getMatchesToLoad(init.history, state, matches, submission, nextLocation, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, {
      [match.route.id]: actionResult.data
    }, undefined, // No need to send through errors since we short circuit above
    fetchLoadMatches); // Put all revalidating fetchers into the loading state, except for the
    // current fetcher which we want to keep in it's current loading state which
    // contains it's action submission info + action data

    revalidatingFetchers.filter(rf => rf.key !== key).forEach(rf => {
      let staleKey = rf.key;
      let existingFetcher = state.fetchers.get(staleKey);
      let revalidatingFetcher = {
        state: "loading",
        data: existingFetcher && existingFetcher.data,
        formMethod: undefined,
        formAction: undefined,
        formEncType: undefined,
        formData: undefined,
        " _hasFetcherDoneAnything ": true
      };
      state.fetchers.set(staleKey, revalidatingFetcher);
      fetchControllers.set(staleKey, abortController);
    });
    updateState({
      fetchers: new Map(state.fetchers)
    });
    let {
      results,
      loaderResults,
      fetcherResults
    } = await callLoadersAndMaybeResolveData(state.matches, matches, matchesToLoad, revalidatingFetchers, revalidationRequest);

    if (abortController.signal.aborted) {
      return;
    }

    fetchReloadIds.delete(key);
    fetchControllers.delete(key);
    revalidatingFetchers.forEach(r => fetchControllers.delete(r.key));
    let redirect = findRedirect(results);

    if (redirect) {
      return startRedirectNavigation(state, redirect);
    } // Process and commit output from loaders


    let {
      loaderData,
      errors
    } = processLoaderData(state, state.matches, matchesToLoad, loaderResults, undefined, revalidatingFetchers, fetcherResults, activeDeferreds);
    let doneFetcher = {
      state: "idle",
      data: actionResult.data,
      formMethod: undefined,
      formAction: undefined,
      formEncType: undefined,
      formData: undefined,
      " _hasFetcherDoneAnything ": true
    };
    state.fetchers.set(key, doneFetcher);
    let didAbortFetchLoads = abortStaleFetchLoads(loadId); // If we are currently in a navigation loading state and this fetcher is
    // more recent than the navigation, we want the newer data so abort the
    // navigation and complete it with the fetcher data

    if (state.navigation.state === "loading" && loadId > pendingNavigationLoadId) {
      router_invariant(pendingAction, "Expected pending action");
      pendingNavigationController && pendingNavigationController.abort();
      completeNavigation(state.navigation.location, {
        matches,
        loaderData,
        errors,
        fetchers: new Map(state.fetchers)
      });
    } else {
      // otherwise just update with the fetcher data, preserving any existing
      // loaderData for loaders that did not need to reload.  We have to
      // manually merge here since we aren't going through completeNavigation
      updateState(_extends({
        errors,
        loaderData: mergeLoaderData(state.loaderData, loaderData, matches, errors)
      }, didAbortFetchLoads ? {
        fetchers: new Map(state.fetchers)
      } : {}));
      isRevalidationRequired = false;
    }
  } // Call the matched loader for fetcher.load(), handling redirects, errors, etc.


  async function handleFetcherLoader(key, routeId, path, match, matches, submission) {
    let existingFetcher = state.fetchers.get(key); // Put this fetcher into it's loading state

    let loadingFetcher = _extends({
      state: "loading",
      formMethod: undefined,
      formAction: undefined,
      formEncType: undefined,
      formData: undefined
    }, submission, {
      data: existingFetcher && existingFetcher.data,
      " _hasFetcherDoneAnything ": true
    });

    state.fetchers.set(key, loadingFetcher);
    updateState({
      fetchers: new Map(state.fetchers)
    }); // Call the loader for this fetcher route match

    let abortController = new AbortController();
    let fetchRequest = createClientSideRequest(init.history, path, abortController.signal);
    fetchControllers.set(key, abortController);
    let result = await callLoaderOrAction("loader", fetchRequest, match, matches, router.basename); // Deferred isn't supported for fetcher loads, await everything and treat it
    // as a normal load.  resolveDeferredData will return undefined if this
    // fetcher gets aborted, so we just leave result untouched and short circuit
    // below if that happens

    if (isDeferredResult(result)) {
      result = (await resolveDeferredData(result, fetchRequest.signal, true)) || result;
    } // We can delete this so long as we weren't aborted by ou our own fetcher
    // re-load which would have put _new_ controller is in fetchControllers


    if (fetchControllers.get(key) === abortController) {
      fetchControllers.delete(key);
    }

    if (fetchRequest.signal.aborted) {
      return;
    } // If the loader threw a redirect Response, start a new REPLACE navigation


    if (isRedirectResult(result)) {
      await startRedirectNavigation(state, result);
      return;
    } // Process any non-redirect errors thrown


    if (isErrorResult(result)) {
      let boundaryMatch = findNearestBoundary(state.matches, routeId);
      state.fetchers.delete(key); // TODO: In remix, this would reset to IDLE_NAVIGATION if it was a catch -
      // do we need to behave any differently with our non-redirect errors?
      // What if it was a non-redirect Response?

      updateState({
        fetchers: new Map(state.fetchers),
        errors: {
          [boundaryMatch.route.id]: result.error
        }
      });
      return;
    }

    router_invariant(!isDeferredResult(result), "Unhandled fetcher deferred data"); // Put the fetcher back into an idle state

    let doneFetcher = {
      state: "idle",
      data: result.data,
      formMethod: undefined,
      formAction: undefined,
      formEncType: undefined,
      formData: undefined,
      " _hasFetcherDoneAnything ": true
    };
    state.fetchers.set(key, doneFetcher);
    updateState({
      fetchers: new Map(state.fetchers)
    });
  }
  /**
   * Utility function to handle redirects returned from an action or loader.
   * Normally, a redirect "replaces" the navigation that triggered it.  So, for
   * example:
   *
   *  - user is on /a
   *  - user clicks a link to /b
   *  - loader for /b redirects to /c
   *
   * In a non-JS app the browser would track the in-flight navigation to /b and
   * then replace it with /c when it encountered the redirect response.  In
   * the end it would only ever update the URL bar with /c.
   *
   * In client-side routing using pushState/replaceState, we aim to emulate
   * this behavior and we also do not update history until the end of the
   * navigation (including processed redirects).  This means that we never
   * actually touch history until we've processed redirects, so we just use
   * the history action from the original navigation (PUSH or REPLACE).
   */


  async function startRedirectNavigation(state, redirect, _temp) {
    var _window;

    let {
      submission,
      replace,
      isFetchActionRedirect
    } = _temp === void 0 ? {} : _temp;

    if (redirect.revalidate) {
      isRevalidationRequired = true;
    }

    let redirectLocation = createLocation(state.location, redirect.location, // TODO: This can be removed once we get rid of useTransition in Remix v2
    _extends({
      _isRedirect: true
    }, isFetchActionRedirect ? {
      _isFetchActionRedirect: true
    } : {}));
    router_invariant(redirectLocation, "Expected a location on the redirect navigation"); // Check if this an absolute external redirect that goes to a new origin

    if (ABSOLUTE_URL_REGEX.test(redirect.location) && isBrowser && typeof ((_window = window) == null ? void 0 : _window.location) !== "undefined") {
      let newOrigin = init.history.createURL(redirect.location).origin;

      if (window.location.origin !== newOrigin) {
        if (replace) {
          window.location.replace(redirect.location);
        } else {
          window.location.assign(redirect.location);
        }

        return;
      }
    } // There's no need to abort on redirects, since we don't detect the
    // redirect until the action/loaders have settled


    pendingNavigationController = null;
    let redirectHistoryAction = replace === true ? Action.Replace : Action.Push; // Use the incoming submission if provided, fallback on the active one in
    // state.navigation

    let {
      formMethod,
      formAction,
      formEncType,
      formData
    } = state.navigation;

    if (!submission && formMethod && formAction && formData && formEncType) {
      submission = {
        formMethod,
        formAction,
        formEncType,
        formData
      };
    } // If this was a 307/308 submission we want to preserve the HTTP method and
    // re-submit the GET/POST/PUT/PATCH/DELETE as a submission navigation to the
    // redirected location


    if (redirectPreserveMethodStatusCodes.has(redirect.status) && submission && isMutationMethod(submission.formMethod)) {
      await startNavigation(redirectHistoryAction, redirectLocation, {
        submission: _extends({}, submission, {
          formAction: redirect.location
        }),
        // Preserve this flag across redirects
        preventScrollReset: pendingPreventScrollReset
      });
    } else {
      // Otherwise, we kick off a new loading navigation, preserving the
      // submission info for the duration of this navigation
      await startNavigation(redirectHistoryAction, redirectLocation, {
        overrideNavigation: {
          state: "loading",
          location: redirectLocation,
          formMethod: submission ? submission.formMethod : undefined,
          formAction: submission ? submission.formAction : undefined,
          formEncType: submission ? submission.formEncType : undefined,
          formData: submission ? submission.formData : undefined
        },
        // Preserve this flag across redirects
        preventScrollReset: pendingPreventScrollReset
      });
    }
  }

  async function callLoadersAndMaybeResolveData(currentMatches, matches, matchesToLoad, fetchersToLoad, request) {
    // Call all navigation loaders and revalidating fetcher loaders in parallel,
    // then slice off the results into separate arrays so we can handle them
    // accordingly
    let results = await Promise.all([...matchesToLoad.map(match => callLoaderOrAction("loader", request, match, matches, router.basename)), ...fetchersToLoad.map(f => callLoaderOrAction("loader", createClientSideRequest(init.history, f.path, request.signal), f.match, f.matches, router.basename))]);
    let loaderResults = results.slice(0, matchesToLoad.length);
    let fetcherResults = results.slice(matchesToLoad.length);
    await Promise.all([resolveDeferredResults(currentMatches, matchesToLoad, loaderResults, request.signal, false, state.loaderData), resolveDeferredResults(currentMatches, fetchersToLoad.map(f => f.match), fetcherResults, request.signal, true)]);
    return {
      results,
      loaderResults,
      fetcherResults
    };
  }

  function interruptActiveLoads() {
    // Every interruption triggers a revalidation
    isRevalidationRequired = true; // Cancel pending route-level deferreds and mark cancelled routes for
    // revalidation

    cancelledDeferredRoutes.push(...cancelActiveDeferreds()); // Abort in-flight fetcher loads

    fetchLoadMatches.forEach((_, key) => {
      if (fetchControllers.has(key)) {
        cancelledFetcherLoads.push(key);
        abortFetcher(key);
      }
    });
  }

  function setFetcherError(key, routeId, error) {
    let boundaryMatch = findNearestBoundary(state.matches, routeId);
    deleteFetcher(key);
    updateState({
      errors: {
        [boundaryMatch.route.id]: error
      },
      fetchers: new Map(state.fetchers)
    });
  }

  function deleteFetcher(key) {
    if (fetchControllers.has(key)) abortFetcher(key);
    fetchLoadMatches.delete(key);
    fetchReloadIds.delete(key);
    fetchRedirectIds.delete(key);
    state.fetchers.delete(key);
  }

  function abortFetcher(key) {
    let controller = fetchControllers.get(key);
    router_invariant(controller, "Expected fetch controller: " + key);
    controller.abort();
    fetchControllers.delete(key);
  }

  function markFetchersDone(keys) {
    for (let key of keys) {
      let fetcher = getFetcher(key);
      let doneFetcher = {
        state: "idle",
        data: fetcher.data,
        formMethod: undefined,
        formAction: undefined,
        formEncType: undefined,
        formData: undefined,
        " _hasFetcherDoneAnything ": true
      };
      state.fetchers.set(key, doneFetcher);
    }
  }

  function markFetchRedirectsDone() {
    let doneKeys = [];

    for (let key of fetchRedirectIds) {
      let fetcher = state.fetchers.get(key);
      router_invariant(fetcher, "Expected fetcher: " + key);

      if (fetcher.state === "loading") {
        fetchRedirectIds.delete(key);
        doneKeys.push(key);
      }
    }

    markFetchersDone(doneKeys);
  }

  function abortStaleFetchLoads(landedId) {
    let yeetedKeys = [];

    for (let [key, id] of fetchReloadIds) {
      if (id < landedId) {
        let fetcher = state.fetchers.get(key);
        router_invariant(fetcher, "Expected fetcher: " + key);

        if (fetcher.state === "loading") {
          abortFetcher(key);
          fetchReloadIds.delete(key);
          yeetedKeys.push(key);
        }
      }
    }

    markFetchersDone(yeetedKeys);
    return yeetedKeys.length > 0;
  }

  function getBlocker(key, fn) {
    let blocker = state.blockers.get(key) || IDLE_BLOCKER;

    if (blockerFunctions.get(key) !== fn) {
      blockerFunctions.set(key, fn);
    }

    return blocker;
  }

  function deleteBlocker(key) {
    state.blockers.delete(key);
    blockerFunctions.delete(key);
  } // Utility function to update blockers, ensuring valid state transitions


  function updateBlocker(key, newBlocker) {
    let blocker = state.blockers.get(key) || IDLE_BLOCKER; // Poor mans state machine :)
    // https://mermaid.live/edit#pako:eNqVkc9OwzAMxl8l8nnjAYrEtDIOHEBIgwvKJTReGy3_lDpIqO27k6awMG0XcrLlnz87nwdonESogKXXBuE79rq75XZO3-yHds0RJVuv70YrPlUrCEe2HfrORS3rubqZfuhtpg5C9wk5tZ4VKcRUq88q9Z8RS0-48cE1iHJkL0ugbHuFLus9L6spZy8nX9MP2CNdomVaposqu3fGayT8T8-jJQwhepo_UtpgBQaDEUom04dZhAN1aJBDlUKJBxE1ceB2Smj0Mln-IBW5AFU2dwUiktt_2Qaq2dBfaKdEup85UV7Yd-dKjlnkabl2Pvr0DTkTreM

    router_invariant(blocker.state === "unblocked" && newBlocker.state === "blocked" || blocker.state === "blocked" && newBlocker.state === "blocked" || blocker.state === "blocked" && newBlocker.state === "proceeding" || blocker.state === "blocked" && newBlocker.state === "unblocked" || blocker.state === "proceeding" && newBlocker.state === "unblocked", "Invalid blocker state transition: " + blocker.state + " -> " + newBlocker.state);
    state.blockers.set(key, newBlocker);
    updateState({
      blockers: new Map(state.blockers)
    });
  }

  function shouldBlockNavigation(_ref2) {
    let {
      currentLocation,
      nextLocation,
      historyAction
    } = _ref2;

    if (blockerFunctions.size === 0) {
      return;
    } // We ony support a single active blocker at the moment since we don't have
    // any compelling use cases for multi-blocker yet


    if (blockerFunctions.size > 1) {
      warning(false, "A router only supports one blocker at a time");
    }

    let entries = Array.from(blockerFunctions.entries());
    let [blockerKey, blockerFunction] = entries[entries.length - 1];
    let blocker = state.blockers.get(blockerKey);

    if (blocker && blocker.state === "proceeding") {
      // If the blocker is currently proceeding, we don't need to re-check
      // it and can let this navigation continue
      return;
    } // At this point, we know we're unblocked/blocked so we need to check the
    // user-provided blocker function


    if (blockerFunction({
      currentLocation,
      nextLocation,
      historyAction
    })) {
      return blockerKey;
    }
  }

  function cancelActiveDeferreds(predicate) {
    let cancelledRouteIds = [];
    activeDeferreds.forEach((dfd, routeId) => {
      if (!predicate || predicate(routeId)) {
        // Cancel the deferred - but do not remove from activeDeferreds here -
        // we rely on the subscribers to do that so our tests can assert proper
        // cleanup via _internalActiveDeferreds
        dfd.cancel();
        cancelledRouteIds.push(routeId);
        activeDeferreds.delete(routeId);
      }
    });
    return cancelledRouteIds;
  } // Opt in to capturing and reporting scroll positions during navigations,
  // used by the <ScrollRestoration> component


  function enableScrollRestoration(positions, getPosition, getKey) {
    savedScrollPositions = positions;
    getScrollPosition = getPosition;

    getScrollRestorationKey = getKey || (location => location.key); // Perform initial hydration scroll restoration, since we miss the boat on
    // the initial updateState() because we've not yet rendered <ScrollRestoration/>
    // and therefore have no savedScrollPositions available


    if (!initialScrollRestored && state.navigation === IDLE_NAVIGATION) {
      initialScrollRestored = true;
      let y = getSavedScrollPosition(state.location, state.matches);

      if (y != null) {
        updateState({
          restoreScrollPosition: y
        });
      }
    }

    return () => {
      savedScrollPositions = null;
      getScrollPosition = null;
      getScrollRestorationKey = null;
    };
  }

  function saveScrollPosition(location, matches) {
    if (savedScrollPositions && getScrollRestorationKey && getScrollPosition) {
      let userMatches = matches.map(m => createUseMatchesMatch(m, state.loaderData));
      let key = getScrollRestorationKey(location, userMatches) || location.key;
      savedScrollPositions[key] = getScrollPosition();
    }
  }

  function getSavedScrollPosition(location, matches) {
    if (savedScrollPositions && getScrollRestorationKey && getScrollPosition) {
      let userMatches = matches.map(m => createUseMatchesMatch(m, state.loaderData));
      let key = getScrollRestorationKey(location, userMatches) || location.key;
      let y = savedScrollPositions[key];

      if (typeof y === "number") {
        return y;
      }
    }

    return null;
  }

  router = {
    get basename() {
      return init.basename;
    },

    get state() {
      return state;
    },

    get routes() {
      return dataRoutes;
    },

    initialize,
    subscribe,
    enableScrollRestoration,
    navigate,
    fetch,
    revalidate,
    // Passthrough to history-aware createHref used by useHref so we get proper
    // hash-aware URLs in DOM paths
    createHref: to => init.history.createHref(to),
    encodeLocation: to => init.history.encodeLocation(to),
    getFetcher,
    deleteFetcher,
    dispose,
    getBlocker,
    deleteBlocker,
    _internalFetchControllers: fetchControllers,
    _internalActiveDeferreds: activeDeferreds
  };
  return router;
} //#endregion
////////////////////////////////////////////////////////////////////////////////
//#region createStaticHandler
////////////////////////////////////////////////////////////////////////////////

const UNSAFE_DEFERRED_SYMBOL = Symbol("deferred");
function createStaticHandler(routes, opts) {
  router_invariant(routes.length > 0, "You must provide a non-empty routes array to createStaticHandler");
  let dataRoutes = convertRoutesToDataRoutes(routes);
  let basename = (opts ? opts.basename : null) || "/";
  /**
   * The query() method is intended for document requests, in which we want to
   * call an optional action and potentially multiple loaders for all nested
   * routes.  It returns a StaticHandlerContext object, which is very similar
   * to the router state (location, loaderData, actionData, errors, etc.) and
   * also adds SSR-specific information such as the statusCode and headers
   * from action/loaders Responses.
   *
   * It _should_ never throw and should report all errors through the
   * returned context.errors object, properly associating errors to their error
   * boundary.  Additionally, it tracks _deepestRenderedBoundaryId which can be
   * used to emulate React error boundaries during SSr by performing a second
   * pass only down to the boundaryId.
   *
   * The one exception where we do not return a StaticHandlerContext is when a
   * redirect response is returned or thrown from any action/loader.  We
   * propagate that out and return the raw Response so the HTTP server can
   * return it directly.
   */

  async function query(request, _temp2) {
    let {
      requestContext
    } = _temp2 === void 0 ? {} : _temp2;
    let url = new URL(request.url);
    let method = request.method.toLowerCase();
    let location = createLocation("", router_createPath(url), null, "default");
    let matches = matchRoutes(dataRoutes, location, basename); // SSR supports HEAD requests while SPA doesn't

    if (!isValidMethod(method) && method !== "head") {
      let error = getInternalRouterError(405, {
        method
      });
      let {
        matches: methodNotAllowedMatches,
        route
      } = getShortCircuitMatches(dataRoutes);
      return {
        basename,
        location,
        matches: methodNotAllowedMatches,
        loaderData: {},
        actionData: null,
        errors: {
          [route.id]: error
        },
        statusCode: error.status,
        loaderHeaders: {},
        actionHeaders: {},
        activeDeferreds: null
      };
    } else if (!matches) {
      let error = getInternalRouterError(404, {
        pathname: location.pathname
      });
      let {
        matches: notFoundMatches,
        route
      } = getShortCircuitMatches(dataRoutes);
      return {
        basename,
        location,
        matches: notFoundMatches,
        loaderData: {},
        actionData: null,
        errors: {
          [route.id]: error
        },
        statusCode: error.status,
        loaderHeaders: {},
        actionHeaders: {},
        activeDeferreds: null
      };
    }

    let result = await queryImpl(request, location, matches, requestContext);

    if (isResponse(result)) {
      return result;
    } // When returning StaticHandlerContext, we patch back in the location here
    // since we need it for React Context.  But this helps keep our submit and
    // loadRouteData operating on a Request instead of a Location


    return _extends({
      location,
      basename
    }, result);
  }
  /**
   * The queryRoute() method is intended for targeted route requests, either
   * for fetch ?_data requests or resource route requests.  In this case, we
   * are only ever calling a single action or loader, and we are returning the
   * returned value directly.  In most cases, this will be a Response returned
   * from the action/loader, but it may be a primitive or other value as well -
   * and in such cases the calling context should handle that accordingly.
   *
   * We do respect the throw/return differentiation, so if an action/loader
   * throws, then this method will throw the value.  This is important so we
   * can do proper boundary identification in Remix where a thrown Response
   * must go to the Catch Boundary but a returned Response is happy-path.
   *
   * One thing to note is that any Router-initiated Errors that make sense
   * to associate with a status code will be thrown as an ErrorResponse
   * instance which include the raw Error, such that the calling context can
   * serialize the error as they see fit while including the proper response
   * code.  Examples here are 404 and 405 errors that occur prior to reaching
   * any user-defined loaders.
   */


  async function queryRoute(request, _temp3) {
    let {
      routeId,
      requestContext
    } = _temp3 === void 0 ? {} : _temp3;
    let url = new URL(request.url);
    let method = request.method.toLowerCase();
    let location = createLocation("", router_createPath(url), null, "default");
    let matches = matchRoutes(dataRoutes, location, basename); // SSR supports HEAD requests while SPA doesn't

    if (!isValidMethod(method) && method !== "head" && method !== "options") {
      throw getInternalRouterError(405, {
        method
      });
    } else if (!matches) {
      throw getInternalRouterError(404, {
        pathname: location.pathname
      });
    }

    let match = routeId ? matches.find(m => m.route.id === routeId) : getTargetMatch(matches, location);

    if (routeId && !match) {
      throw getInternalRouterError(403, {
        pathname: location.pathname,
        routeId
      });
    } else if (!match) {
      // This should never hit I don't think?
      throw getInternalRouterError(404, {
        pathname: location.pathname
      });
    }

    let result = await queryImpl(request, location, matches, requestContext, match);

    if (isResponse(result)) {
      return result;
    }

    let error = result.errors ? Object.values(result.errors)[0] : undefined;

    if (error !== undefined) {
      // If we got back result.errors, that means the loader/action threw
      // _something_ that wasn't a Response, but it's not guaranteed/required
      // to be an `instanceof Error` either, so we have to use throw here to
      // preserve the "error" state outside of queryImpl.
      throw error;
    } // Pick off the right state value to return


    if (result.actionData) {
      return Object.values(result.actionData)[0];
    }

    if (result.loaderData) {
      var _result$activeDeferre;

      let data = Object.values(result.loaderData)[0];

      if ((_result$activeDeferre = result.activeDeferreds) != null && _result$activeDeferre[match.route.id]) {
        data[UNSAFE_DEFERRED_SYMBOL] = result.activeDeferreds[match.route.id];
      }

      return data;
    }

    return undefined;
  }

  async function queryImpl(request, location, matches, requestContext, routeMatch) {
    router_invariant(request.signal, "query()/queryRoute() requests must contain an AbortController signal");

    try {
      if (isMutationMethod(request.method.toLowerCase())) {
        let result = await submit(request, matches, routeMatch || getTargetMatch(matches, location), requestContext, routeMatch != null);
        return result;
      }

      let result = await loadRouteData(request, matches, requestContext, routeMatch);
      return isResponse(result) ? result : _extends({}, result, {
        actionData: null,
        actionHeaders: {}
      });
    } catch (e) {
      // If the user threw/returned a Response in callLoaderOrAction, we throw
      // it to bail out and then return or throw here based on whether the user
      // returned or threw
      if (isQueryRouteResponse(e)) {
        if (e.type === ResultType.error && !isRedirectResponse(e.response)) {
          throw e.response;
        }

        return e.response;
      } // Redirects are always returned since they don't propagate to catch
      // boundaries


      if (isRedirectResponse(e)) {
        return e;
      }

      throw e;
    }
  }

  async function submit(request, matches, actionMatch, requestContext, isRouteRequest) {
    let result;

    if (!actionMatch.route.action) {
      let error = getInternalRouterError(405, {
        method: request.method,
        pathname: new URL(request.url).pathname,
        routeId: actionMatch.route.id
      });

      if (isRouteRequest) {
        throw error;
      }

      result = {
        type: ResultType.error,
        error
      };
    } else {
      result = await callLoaderOrAction("action", request, actionMatch, matches, basename, true, isRouteRequest, requestContext);

      if (request.signal.aborted) {
        let method = isRouteRequest ? "queryRoute" : "query";
        throw new Error(method + "() call aborted");
      }
    }

    if (isRedirectResult(result)) {
      // Uhhhh - this should never happen, we should always throw these from
      // callLoaderOrAction, but the type narrowing here keeps TS happy and we
      // can get back on the "throw all redirect responses" train here should
      // this ever happen :/
      throw new Response(null, {
        status: result.status,
        headers: {
          Location: result.location
        }
      });
    }

    if (isDeferredResult(result)) {
      let error = getInternalRouterError(400, {
        type: "defer-action"
      });

      if (isRouteRequest) {
        throw error;
      }

      result = {
        type: ResultType.error,
        error
      };
    }

    if (isRouteRequest) {
      // Note: This should only be non-Response values if we get here, since
      // isRouteRequest should throw any Response received in callLoaderOrAction
      if (isErrorResult(result)) {
        throw result.error;
      }

      return {
        matches: [actionMatch],
        loaderData: {},
        actionData: {
          [actionMatch.route.id]: result.data
        },
        errors: null,
        // Note: statusCode + headers are unused here since queryRoute will
        // return the raw Response or value
        statusCode: 200,
        loaderHeaders: {},
        actionHeaders: {},
        activeDeferreds: null
      };
    }

    if (isErrorResult(result)) {
      // Store off the pending error - we use it to determine which loaders
      // to call and will commit it when we complete the navigation
      let boundaryMatch = findNearestBoundary(matches, actionMatch.route.id);
      let context = await loadRouteData(request, matches, requestContext, undefined, {
        [boundaryMatch.route.id]: result.error
      }); // action status codes take precedence over loader status codes

      return _extends({}, context, {
        statusCode: isRouteErrorResponse(result.error) ? result.error.status : 500,
        actionData: null,
        actionHeaders: _extends({}, result.headers ? {
          [actionMatch.route.id]: result.headers
        } : {})
      });
    } // Create a GET request for the loaders


    let loaderRequest = new Request(request.url, {
      headers: request.headers,
      redirect: request.redirect,
      signal: request.signal
    });
    let context = await loadRouteData(loaderRequest, matches, requestContext);
    return _extends({}, context, result.statusCode ? {
      statusCode: result.statusCode
    } : {}, {
      actionData: {
        [actionMatch.route.id]: result.data
      },
      actionHeaders: _extends({}, result.headers ? {
        [actionMatch.route.id]: result.headers
      } : {})
    });
  }

  async function loadRouteData(request, matches, requestContext, routeMatch, pendingActionError) {
    let isRouteRequest = routeMatch != null; // Short circuit if we have no loaders to run (queryRoute())

    if (isRouteRequest && !(routeMatch != null && routeMatch.route.loader)) {
      throw getInternalRouterError(400, {
        method: request.method,
        pathname: new URL(request.url).pathname,
        routeId: routeMatch == null ? void 0 : routeMatch.route.id
      });
    }

    let requestMatches = routeMatch ? [routeMatch] : getLoaderMatchesUntilBoundary(matches, Object.keys(pendingActionError || {})[0]);
    let matchesToLoad = requestMatches.filter(m => m.route.loader); // Short circuit if we have no loaders to run (query())

    if (matchesToLoad.length === 0) {
      return {
        matches,
        // Add a null for all matched routes for proper revalidation on the client
        loaderData: matches.reduce((acc, m) => Object.assign(acc, {
          [m.route.id]: null
        }), {}),
        errors: pendingActionError || null,
        statusCode: 200,
        loaderHeaders: {},
        activeDeferreds: null
      };
    }

    let results = await Promise.all([...matchesToLoad.map(match => callLoaderOrAction("loader", request, match, matches, basename, true, isRouteRequest, requestContext))]);

    if (request.signal.aborted) {
      let method = isRouteRequest ? "queryRoute" : "query";
      throw new Error(method + "() call aborted");
    } // Process and commit output from loaders


    let activeDeferreds = new Map();
    let context = processRouteLoaderData(matches, matchesToLoad, results, pendingActionError, activeDeferreds); // Add a null for any non-loader matches for proper revalidation on the client

    let executedLoaders = new Set(matchesToLoad.map(match => match.route.id));
    matches.forEach(match => {
      if (!executedLoaders.has(match.route.id)) {
        context.loaderData[match.route.id] = null;
      }
    });
    return _extends({}, context, {
      matches,
      activeDeferreds: activeDeferreds.size > 0 ? Object.fromEntries(activeDeferreds.entries()) : null
    });
  }

  return {
    dataRoutes,
    query,
    queryRoute
  };
} //#endregion
////////////////////////////////////////////////////////////////////////////////
//#region Helpers
////////////////////////////////////////////////////////////////////////////////

/**
 * Given an existing StaticHandlerContext and an error thrown at render time,
 * provide an updated StaticHandlerContext suitable for a second SSR render
 */

function getStaticContextFromError(routes, context, error) {
  let newContext = _extends({}, context, {
    statusCode: 500,
    errors: {
      [context._deepestRenderedBoundaryId || routes[0].id]: error
    }
  });

  return newContext;
}

function isSubmissionNavigation(opts) {
  return opts != null && "formData" in opts;
} // Normalize navigation options by converting formMethod=GET formData objects to
// URLSearchParams so they behave identically to links with query params


function normalizeNavigateOptions(to, opts, isFetcher) {
  if (isFetcher === void 0) {
    isFetcher = false;
  }

  let path = typeof to === "string" ? to : router_createPath(to); // Return location verbatim on non-submission navigations

  if (!opts || !isSubmissionNavigation(opts)) {
    return {
      path
    };
  }

  if (opts.formMethod && !isValidMethod(opts.formMethod)) {
    return {
      path,
      error: getInternalRouterError(405, {
        method: opts.formMethod
      })
    };
  } // Create a Submission on non-GET navigations


  let submission;

  if (opts.formData) {
    submission = {
      formMethod: opts.formMethod || "get",
      formAction: stripHashFromPath(path),
      formEncType: opts && opts.formEncType || "application/x-www-form-urlencoded",
      formData: opts.formData
    };

    if (isMutationMethod(submission.formMethod)) {
      return {
        path,
        submission
      };
    }
  } // Flatten submission onto URLSearchParams for GET submissions


  let parsedPath = parsePath(path);
  let searchParams = convertFormDataToSearchParams(opts.formData); // Since fetcher GET submissions only run a single loader (as opposed to
  // navigation GET submissions which run all loaders), we need to preserve
  // any incoming ?index params

  if (isFetcher && parsedPath.search && hasNakedIndexQuery(parsedPath.search)) {
    searchParams.append("index", "");
  }

  parsedPath.search = "?" + searchParams;
  return {
    path: router_createPath(parsedPath),
    submission
  };
} // Filter out all routes below any caught error as they aren't going to
// render so we don't need to load them


function getLoaderMatchesUntilBoundary(matches, boundaryId) {
  let boundaryMatches = matches;

  if (boundaryId) {
    let index = matches.findIndex(m => m.route.id === boundaryId);

    if (index >= 0) {
      boundaryMatches = matches.slice(0, index);
    }
  }

  return boundaryMatches;
}

function getMatchesToLoad(history, state, matches, submission, location, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, pendingActionData, pendingError, fetchLoadMatches) {
  let actionResult = pendingError ? Object.values(pendingError)[0] : pendingActionData ? Object.values(pendingActionData)[0] : undefined;
  let currentUrl = history.createURL(state.location);
  let nextUrl = history.createURL(location);
  let defaultShouldRevalidate = // Forced revalidation due to submission, useRevalidate, or X-Remix-Revalidate
  isRevalidationRequired || // Clicked the same link, resubmitted a GET form
  currentUrl.toString() === nextUrl.toString() || // Search params affect all loaders
  currentUrl.search !== nextUrl.search; // Pick navigation matches that are net-new or qualify for revalidation

  let boundaryId = pendingError ? Object.keys(pendingError)[0] : undefined;
  let boundaryMatches = getLoaderMatchesUntilBoundary(matches, boundaryId);
  let navigationMatches = boundaryMatches.filter((match, index) => {
    if (match.route.loader == null) {
      return false;
    } // Always call the loader on new route instances and pending defer cancellations


    if (isNewLoader(state.loaderData, state.matches[index], match) || cancelledDeferredRoutes.some(id => id === match.route.id)) {
      return true;
    } // This is the default implementation for when we revalidate.  If the route
    // provides it's own implementation, then we give them full control but
    // provide this value so they can leverage it if needed after they check
    // their own specific use cases


    let currentRouteMatch = state.matches[index];
    let nextRouteMatch = match;
    return shouldRevalidateLoader(match, _extends({
      currentUrl,
      currentParams: currentRouteMatch.params,
      nextUrl,
      nextParams: nextRouteMatch.params
    }, submission, {
      actionResult,
      defaultShouldRevalidate: defaultShouldRevalidate || isNewRouteInstance(currentRouteMatch, nextRouteMatch)
    }));
  }); // Pick fetcher.loads that need to be revalidated

  let revalidatingFetchers = [];
  fetchLoadMatches && fetchLoadMatches.forEach((f, key) => {
    if (!matches.some(m => m.route.id === f.routeId)) {
      // This fetcher is not going to be present in the subsequent render so
      // there's no need to revalidate it
      return;
    } else if (cancelledFetcherLoads.includes(key)) {
      // This fetcher was cancelled from a prior action submission - force reload
      revalidatingFetchers.push(_extends({
        key
      }, f));
    } else {
      // Revalidating fetchers are decoupled from the route matches since they
      // hit a static href, so they _always_ check shouldRevalidate and the
      // default is strictly if a revalidation is explicitly required (action
      // submissions, useRevalidator, X-Remix-Revalidate).
      let shouldRevalidate = shouldRevalidateLoader(f.match, _extends({
        currentUrl,
        currentParams: state.matches[state.matches.length - 1].params,
        nextUrl,
        nextParams: matches[matches.length - 1].params
      }, submission, {
        actionResult,
        defaultShouldRevalidate
      }));

      if (shouldRevalidate) {
        revalidatingFetchers.push(_extends({
          key
        }, f));
      }
    }
  });
  return [navigationMatches, revalidatingFetchers];
}

function isNewLoader(currentLoaderData, currentMatch, match) {
  let isNew = // [a] -> [a, b]
  !currentMatch || // [a, b] -> [a, c]
  match.route.id !== currentMatch.route.id; // Handle the case that we don't have data for a re-used route, potentially
  // from a prior error or from a cancelled pending deferred

  let isMissingData = currentLoaderData[match.route.id] === undefined; // Always load if this is a net-new route or we don't yet have data

  return isNew || isMissingData;
}

function isNewRouteInstance(currentMatch, match) {
  let currentPath = currentMatch.route.path;
  return (// param change for this match, /users/123 -> /users/456
    currentMatch.pathname !== match.pathname || // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    currentPath != null && currentPath.endsWith("*") && currentMatch.params["*"] !== match.params["*"]
  );
}

function shouldRevalidateLoader(loaderMatch, arg) {
  if (loaderMatch.route.shouldRevalidate) {
    let routeChoice = loaderMatch.route.shouldRevalidate(arg);

    if (typeof routeChoice === "boolean") {
      return routeChoice;
    }
  }

  return arg.defaultShouldRevalidate;
}

async function callLoaderOrAction(type, request, match, matches, basename, isStaticRequest, isRouteRequest, requestContext) {
  if (basename === void 0) {
    basename = "/";
  }

  if (isStaticRequest === void 0) {
    isStaticRequest = false;
  }

  if (isRouteRequest === void 0) {
    isRouteRequest = false;
  }

  let resultType;
  let result; // Setup a promise we can race against so that abort signals short circuit

  let reject;
  let abortPromise = new Promise((_, r) => reject = r);

  let onReject = () => reject();

  request.signal.addEventListener("abort", onReject);

  try {
    let handler = match.route[type];
    router_invariant(handler, "Could not find the " + type + " to run on the \"" + match.route.id + "\" route");
    result = await Promise.race([handler({
      request,
      params: match.params,
      context: requestContext
    }), abortPromise]);
    router_invariant(result !== undefined, "You defined " + (type === "action" ? "an action" : "a loader") + " for route " + ("\"" + match.route.id + "\" but didn't return anything from your `" + type + "` ") + "function. Please return a value or `null`.");
  } catch (e) {
    resultType = ResultType.error;
    result = e;
  } finally {
    request.signal.removeEventListener("abort", onReject);
  }

  if (isResponse(result)) {
    let status = result.status; // Process redirects

    if (redirectStatusCodes.has(status)) {
      let location = result.headers.get("Location");
      router_invariant(location, "Redirects returned/thrown from loaders/actions must have a Location header"); // Support relative routing in internal redirects

      if (!ABSOLUTE_URL_REGEX.test(location)) {
        let activeMatches = matches.slice(0, matches.indexOf(match) + 1);
        let routePathnames = getPathContributingMatches(activeMatches).map(match => match.pathnameBase);
        let resolvedLocation = resolveTo(location, routePathnames, new URL(request.url).pathname);
        router_invariant(router_createPath(resolvedLocation), "Unable to resolve redirect location: " + location); // Prepend the basename to the redirect location if we have one

        if (basename) {
          let path = resolvedLocation.pathname;
          resolvedLocation.pathname = path === "/" ? basename : router_joinPaths([basename, path]);
        }

        location = router_createPath(resolvedLocation);
      } else if (!isStaticRequest) {
        // Strip off the protocol+origin for same-origin absolute redirects.
        // If this is a static reques, we can let it go back to the browser
        // as-is
        let currentUrl = new URL(request.url);
        let url = location.startsWith("//") ? new URL(currentUrl.protocol + location) : new URL(location);

        if (url.origin === currentUrl.origin) {
          location = url.pathname + url.search + url.hash;
        }
      } // Don't process redirects in the router during static requests requests.
      // Instead, throw the Response and let the server handle it with an HTTP
      // redirect.  We also update the Location header in place in this flow so
      // basename and relative routing is taken into account


      if (isStaticRequest) {
        result.headers.set("Location", location);
        throw result;
      }

      return {
        type: ResultType.redirect,
        status,
        location,
        revalidate: result.headers.get("X-Remix-Revalidate") !== null
      };
    } // For SSR single-route requests, we want to hand Responses back directly
    // without unwrapping.  We do this with the QueryRouteResponse wrapper
    // interface so we can know whether it was returned or thrown


    if (isRouteRequest) {
      // eslint-disable-next-line no-throw-literal
      throw {
        type: resultType || ResultType.data,
        response: result
      };
    }

    let data;
    let contentType = result.headers.get("Content-Type"); // Check between word boundaries instead of startsWith() due to the last
    // paragraph of https://httpwg.org/specs/rfc9110.html#field.content-type

    if (contentType && /\bapplication\/json\b/.test(contentType)) {
      data = await result.json();
    } else {
      data = await result.text();
    }

    if (resultType === ResultType.error) {
      return {
        type: resultType,
        error: new router_ErrorResponse(status, result.statusText, data),
        headers: result.headers
      };
    }

    return {
      type: ResultType.data,
      data,
      statusCode: result.status,
      headers: result.headers
    };
  }

  if (resultType === ResultType.error) {
    return {
      type: resultType,
      error: result
    };
  }

  if (result instanceof DeferredData) {
    return {
      type: ResultType.deferred,
      deferredData: result
    };
  }

  return {
    type: ResultType.data,
    data: result
  };
} // Utility method for creating the Request instances for loaders/actions during
// client-side navigations and fetches.  During SSR we will always have a
// Request instance from the static handler (query/queryRoute)


function createClientSideRequest(history, location, signal, submission) {
  let url = history.createURL(stripHashFromPath(location)).toString();
  let init = {
    signal
  };

  if (submission && isMutationMethod(submission.formMethod)) {
    let {
      formMethod,
      formEncType,
      formData
    } = submission;
    init.method = formMethod.toUpperCase();
    init.body = formEncType === "application/x-www-form-urlencoded" ? convertFormDataToSearchParams(formData) : formData;
  } // Content-Type is inferred (https://fetch.spec.whatwg.org/#dom-request)


  return new Request(url, init);
}

function convertFormDataToSearchParams(formData) {
  let searchParams = new URLSearchParams();

  for (let [key, value] of formData.entries()) {
    // https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#converting-an-entry-list-to-a-list-of-name-value-pairs
    searchParams.append(key, value instanceof File ? value.name : value);
  }

  return searchParams;
}

function processRouteLoaderData(matches, matchesToLoad, results, pendingError, activeDeferreds) {
  // Fill in loaderData/errors from our loaders
  let loaderData = {};
  let errors = null;
  let statusCode;
  let foundError = false;
  let loaderHeaders = {}; // Process loader results into state.loaderData/state.errors

  results.forEach((result, index) => {
    let id = matchesToLoad[index].route.id;
    router_invariant(!isRedirectResult(result), "Cannot handle redirect results in processLoaderData");

    if (isErrorResult(result)) {
      // Look upwards from the matched route for the closest ancestor
      // error boundary, defaulting to the root match
      let boundaryMatch = findNearestBoundary(matches, id);
      let error = result.error; // If we have a pending action error, we report it at the highest-route
      // that throws a loader error, and then clear it out to indicate that
      // it was consumed

      if (pendingError) {
        error = Object.values(pendingError)[0];
        pendingError = undefined;
      }

      errors = errors || {}; // Prefer higher error values if lower errors bubble to the same boundary

      if (errors[boundaryMatch.route.id] == null) {
        errors[boundaryMatch.route.id] = error;
      } // Clear our any prior loaderData for the throwing route


      loaderData[id] = undefined; // Once we find our first (highest) error, we set the status code and
      // prevent deeper status codes from overriding

      if (!foundError) {
        foundError = true;
        statusCode = isRouteErrorResponse(result.error) ? result.error.status : 500;
      }

      if (result.headers) {
        loaderHeaders[id] = result.headers;
      }
    } else {
      if (isDeferredResult(result)) {
        activeDeferreds.set(id, result.deferredData);
        loaderData[id] = result.deferredData.data;
      } else {
        loaderData[id] = result.data;
      } // Error status codes always override success status codes, but if all
      // loaders are successful we take the deepest status code.


      if (result.statusCode != null && result.statusCode !== 200 && !foundError) {
        statusCode = result.statusCode;
      }

      if (result.headers) {
        loaderHeaders[id] = result.headers;
      }
    }
  }); // If we didn't consume the pending action error (i.e., all loaders
  // resolved), then consume it here.  Also clear out any loaderData for the
  // throwing route

  if (pendingError) {
    errors = pendingError;
    loaderData[Object.keys(pendingError)[0]] = undefined;
  }

  return {
    loaderData,
    errors,
    statusCode: statusCode || 200,
    loaderHeaders
  };
}

function processLoaderData(state, matches, matchesToLoad, results, pendingError, revalidatingFetchers, fetcherResults, activeDeferreds) {
  let {
    loaderData,
    errors
  } = processRouteLoaderData(matches, matchesToLoad, results, pendingError, activeDeferreds); // Process results from our revalidating fetchers

  for (let index = 0; index < revalidatingFetchers.length; index++) {
    let {
      key,
      match
    } = revalidatingFetchers[index];
    router_invariant(fetcherResults !== undefined && fetcherResults[index] !== undefined, "Did not find corresponding fetcher result");
    let result = fetcherResults[index]; // Process fetcher non-redirect errors

    if (isErrorResult(result)) {
      let boundaryMatch = findNearestBoundary(state.matches, match.route.id);

      if (!(errors && errors[boundaryMatch.route.id])) {
        errors = _extends({}, errors, {
          [boundaryMatch.route.id]: result.error
        });
      }

      state.fetchers.delete(key);
    } else if (isRedirectResult(result)) {
      // Should never get here, redirects should get processed above, but we
      // keep this to type narrow to a success result in the else
      router_invariant(false, "Unhandled fetcher revalidation redirect");
    } else if (isDeferredResult(result)) {
      // Should never get here, deferred data should be awaited for fetchers
      // in resolveDeferredResults
      router_invariant(false, "Unhandled fetcher deferred data");
    } else {
      let doneFetcher = {
        state: "idle",
        data: result.data,
        formMethod: undefined,
        formAction: undefined,
        formEncType: undefined,
        formData: undefined,
        " _hasFetcherDoneAnything ": true
      };
      state.fetchers.set(key, doneFetcher);
    }
  }

  return {
    loaderData,
    errors
  };
}

function mergeLoaderData(loaderData, newLoaderData, matches, errors) {
  let mergedLoaderData = _extends({}, newLoaderData);

  for (let match of matches) {
    let id = match.route.id;

    if (newLoaderData.hasOwnProperty(id)) {
      if (newLoaderData[id] !== undefined) {
        mergedLoaderData[id] = newLoaderData[id];
      }
    } else if (loaderData[id] !== undefined) {
      mergedLoaderData[id] = loaderData[id];
    }

    if (errors && errors.hasOwnProperty(id)) {
      // Don't keep any loader data below the boundary
      break;
    }
  }

  return mergedLoaderData;
} // Find the nearest error boundary, looking upwards from the leaf route (or the
// route specified by routeId) for the closest ancestor error boundary,
// defaulting to the root match


function findNearestBoundary(matches, routeId) {
  let eligibleMatches = routeId ? matches.slice(0, matches.findIndex(m => m.route.id === routeId) + 1) : [...matches];
  return eligibleMatches.reverse().find(m => m.route.hasErrorBoundary === true) || matches[0];
}

function getShortCircuitMatches(routes) {
  // Prefer a root layout route if present, otherwise shim in a route object
  let route = routes.find(r => r.index || !r.path || r.path === "/") || {
    id: "__shim-error-route__"
  };
  return {
    matches: [{
      params: {},
      pathname: "",
      pathnameBase: "",
      route
    }],
    route
  };
}

function getInternalRouterError(status, _temp4) {
  let {
    pathname,
    routeId,
    method,
    type
  } = _temp4 === void 0 ? {} : _temp4;
  let statusText = "Unknown Server Error";
  let errorMessage = "Unknown @remix-run/router error";

  if (status === 400) {
    statusText = "Bad Request";

    if (method && pathname && routeId) {
      errorMessage = "You made a " + method + " request to \"" + pathname + "\" but " + ("did not provide a `loader` for route \"" + routeId + "\", ") + "so there is no way to handle the request.";
    } else if (type === "defer-action") {
      errorMessage = "defer() is not supported in actions";
    }
  } else if (status === 403) {
    statusText = "Forbidden";
    errorMessage = "Route \"" + routeId + "\" does not match URL \"" + pathname + "\"";
  } else if (status === 404) {
    statusText = "Not Found";
    errorMessage = "No route matches URL \"" + pathname + "\"";
  } else if (status === 405) {
    statusText = "Method Not Allowed";

    if (method && pathname && routeId) {
      errorMessage = "You made a " + method.toUpperCase() + " request to \"" + pathname + "\" but " + ("did not provide an `action` for route \"" + routeId + "\", ") + "so there is no way to handle the request.";
    } else if (method) {
      errorMessage = "Invalid request method \"" + method.toUpperCase() + "\"";
    }
  }

  return new router_ErrorResponse(status || 500, statusText, new Error(errorMessage), true);
} // Find any returned redirect errors, starting from the lowest match


function findRedirect(results) {
  for (let i = results.length - 1; i >= 0; i--) {
    let result = results[i];

    if (isRedirectResult(result)) {
      return result;
    }
  }
}

function stripHashFromPath(path) {
  let parsedPath = typeof path === "string" ? parsePath(path) : path;
  return router_createPath(_extends({}, parsedPath, {
    hash: ""
  }));
}

function isHashChangeOnly(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash !== b.hash;
}

function isDeferredResult(result) {
  return result.type === ResultType.deferred;
}

function isErrorResult(result) {
  return result.type === ResultType.error;
}

function isRedirectResult(result) {
  return (result && result.type) === ResultType.redirect;
}

function isResponse(value) {
  return value != null && typeof value.status === "number" && typeof value.statusText === "string" && typeof value.headers === "object" && typeof value.body !== "undefined";
}

function isRedirectResponse(result) {
  if (!isResponse(result)) {
    return false;
  }

  let status = result.status;
  let location = result.headers.get("Location");
  return status >= 300 && status <= 399 && location != null;
}

function isQueryRouteResponse(obj) {
  return obj && isResponse(obj.response) && (obj.type === ResultType.data || ResultType.error);
}

function isValidMethod(method) {
  return validRequestMethods.has(method);
}

function isMutationMethod(method) {
  return validMutationMethods.has(method);
}

async function resolveDeferredResults(currentMatches, matchesToLoad, results, signal, isFetcher, currentLoaderData) {
  for (let index = 0; index < results.length; index++) {
    let result = results[index];
    let match = matchesToLoad[index];
    let currentMatch = currentMatches.find(m => m.route.id === match.route.id);
    let isRevalidatingLoader = currentMatch != null && !isNewRouteInstance(currentMatch, match) && (currentLoaderData && currentLoaderData[match.route.id]) !== undefined;

    if (isDeferredResult(result) && (isFetcher || isRevalidatingLoader)) {
      // Note: we do not have to touch activeDeferreds here since we race them
      // against the signal in resolveDeferredData and they'll get aborted
      // there if needed
      await resolveDeferredData(result, signal, isFetcher).then(result => {
        if (result) {
          results[index] = result || results[index];
        }
      });
    }
  }
}

async function resolveDeferredData(result, signal, unwrap) {
  if (unwrap === void 0) {
    unwrap = false;
  }

  let aborted = await result.deferredData.resolveData(signal);

  if (aborted) {
    return;
  }

  if (unwrap) {
    try {
      return {
        type: ResultType.data,
        data: result.deferredData.unwrappedData
      };
    } catch (e) {
      // Handle any TrackedPromise._error values encountered while unwrapping
      return {
        type: ResultType.error,
        error: e
      };
    }
  }

  return {
    type: ResultType.data,
    data: result.deferredData.data
  };
}

function hasNakedIndexQuery(search) {
  return new URLSearchParams(search).getAll("index").some(v => v === "");
} // Note: This should match the format exported by useMatches, so if you change
// this please also change that :)  Eventually we'll DRY this up


function createUseMatchesMatch(match, loaderData) {
  let {
    route,
    pathname,
    params
  } = match;
  return {
    id: route.id,
    pathname,
    params,
    data: loaderData[route.id],
    handle: route.handle
  };
}

function getTargetMatch(matches, location) {
  let search = typeof location === "string" ? parsePath(location).search : location.search;

  if (matches[matches.length - 1].route.index && hasNakedIndexQuery(search || "")) {
    // Return the leaf index route when index is present
    return matches[matches.length - 1];
  } // Otherwise grab the deepest "path contributing" match (ignoring index and
  // pathless layout routes)


  let pathMatches = getPathContributingMatches(matches);
  return pathMatches[pathMatches.length - 1];
} //#endregion


//# sourceMappingURL=router.js.map

;// CONCATENATED MODULE: ./node_modules/react-router/dist/index.js
/**
 * React Router v6.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */




function dist_extends() {
  dist_extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return dist_extends.apply(this, arguments);
}

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */

function isPolyfill(x, y) {
  return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y // eslint-disable-line no-self-compare
  ;
}

const is = typeof Object.is === "function" ? Object.is : isPolyfill; // Intentionally not using named imports because Rollup uses dynamic
// dispatch for CommonJS interop named imports.

const {
  useState,
  useEffect,
  useLayoutEffect,
  useDebugValue
} = react_namespaceObject;
let didWarnOld18Alpha = false;
let didWarnUncachedGetSnapshot = false; // Disclaimer: This shim breaks many of the rules of React, and only works
// because of a very particular set of implementation details and assumptions
// -- change any one of them and it will break. The most important assumption
// is that updates are always synchronous, because concurrent rendering is
// only available in versions of React that also have a built-in
// useSyncExternalStore API. And we only use this shim when the built-in API
// does not exist.
//
// Do not assume that the clever hacks used by this hook also work in general.
// The point of this shim is to replace the need for hacks by other libraries.

function useSyncExternalStore$2(subscribe, getSnapshot, // Note: The shim does not use getServerSnapshot, because pre-18 versions of
// React do not expose a way to check if we're hydrating. So users of the shim
// will need to track that themselves and return the correct value
// from `getSnapshot`.
getServerSnapshot) {
  if (false) {} // Read the current snapshot from the store on every render. Again, this
  // breaks the rules of React, and only works here because of specific
  // implementation details, most importantly that updates are
  // always synchronous.


  const value = getSnapshot();

  if (false) {} // Because updates are synchronous, we don't queue them. Instead we force a
  // re-render whenever the subscribed state changes by updating an some
  // arbitrary useState hook. Then, during render, we call getSnapshot to read
  // the current value.
  //
  // Because we don't actually use the state returned by the useState hook, we
  // can save a bit of memory by storing other stuff in that slot.
  //
  // To implement the early bailout, we need to track some things on a mutable
  // object. Usually, we would put that in a useRef hook, but we can stash it in
  // our useState hook instead.
  //
  // To force a re-render, we call forceUpdate({inst}). That works because the
  // new object always fails an equality check.


  const [{
    inst
  }, forceUpdate] = useState({
    inst: {
      value,
      getSnapshot
    }
  }); // Track the latest getSnapshot function with a ref. This needs to be updated
  // in the layout phase so we can access it during the tearing check that
  // happens on subscribe.

  useLayoutEffect(() => {
    inst.value = value;
    inst.getSnapshot = getSnapshot; // Whenever getSnapshot or subscribe changes, we need to check in the
    // commit phase if there was an interleaved mutation. In concurrent mode
    // this can happen all the time, but even in synchronous mode, an earlier
    // effect may have mutated the store.

    if (checkIfSnapshotChanged(inst)) {
      // Force a re-render.
      forceUpdate({
        inst
      });
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [subscribe, value, getSnapshot]);
  useEffect(() => {
    // Check for changes right before subscribing. Subsequent changes will be
    // detected in the subscription handler.
    if (checkIfSnapshotChanged(inst)) {
      // Force a re-render.
      forceUpdate({
        inst
      });
    }

    const handleStoreChange = () => {
      // TODO: Because there is no cross-renderer API for batching updates, it's
      // up to the consumer of this library to wrap their subscription event
      // with unstable_batchedUpdates. Should we try to detect when this isn't
      // the case and print a warning in development?
      // The store changed. Check if the snapshot changed since the last time we
      // read from the store.
      if (checkIfSnapshotChanged(inst)) {
        // Force a re-render.
        forceUpdate({
          inst
        });
      }
    }; // Subscribe to the store and return a clean-up function.


    return subscribe(handleStoreChange); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subscribe]);
  useDebugValue(value);
  return value;
}

function checkIfSnapshotChanged(inst) {
  const latestGetSnapshot = inst.getSnapshot;
  const prevValue = inst.value;

  try {
    const nextValue = latestGetSnapshot();
    return !is(prevValue, nextValue);
  } catch (error) {
    return true;
  }
}

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */
function useSyncExternalStore$1(subscribe, getSnapshot, getServerSnapshot) {
  // Note: The shim does not use getServerSnapshot, because pre-18 versions of
  // React do not expose a way to check if we're hydrating. So users of the shim
  // will need to track that themselves and return the correct value
  // from `getSnapshot`.
  return getSnapshot();
}

/**
 * Inlined into the react-router repo since use-sync-external-store does not
 * provide a UMD-compatible package, so we need this to be able to distribute
 * UMD react-router bundles
 */
const canUseDOM = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
const isServerEnvironment = !canUseDOM;
const shim = isServerEnvironment ? useSyncExternalStore$1 : useSyncExternalStore$2;
const useSyncExternalStore =  true ? (module => module.useSyncExternalStore)(react_namespaceObject) : shim;

const DataRouterContext = /*#__PURE__*/react.createContext(null);

if (false) {}

const DataRouterStateContext = /*#__PURE__*/react.createContext(null);

if (false) {}

const AwaitContext = /*#__PURE__*/(/* unused pure expression or super */ null && (React.createContext(null)));

if (false) {}

const NavigationContext = /*#__PURE__*/react.createContext(null);

if (false) {}

const LocationContext = /*#__PURE__*/react.createContext(null);

if (false) {}

const RouteContext = /*#__PURE__*/react.createContext({
  outlet: null,
  matches: []
});

if (false) {}

const RouteErrorContext = /*#__PURE__*/react.createContext(null);

if (false) {}

/**
 * Returns the full href for the given "to" value. This is useful for building
 * custom links that are also accessible and preserve right-click behavior.
 *
 * @see https://reactrouter.com/hooks/use-href
 */

function useHref(to, _temp) {
  let {
    relative
  } = _temp === void 0 ? {} : _temp;
  !useInRouterContext() ?  false ? 0 : router_invariant(false) : void 0;
  let {
    basename,
    navigator
  } = react.useContext(NavigationContext);
  let {
    hash,
    pathname,
    search
  } = dist_useResolvedPath(to, {
    relative
  });
  let joinedPathname = pathname; // If we're operating within a basename, prepend it to the pathname prior
  // to creating the href.  If this is a root navigation, then just use the raw
  // basename which allows the basename to have full control over the presence
  // of a trailing slash on root links

  if (basename !== "/") {
    joinedPathname = pathname === "/" ? basename : router_joinPaths([basename, pathname]);
  }

  return navigator.createHref({
    pathname: joinedPathname,
    search,
    hash
  });
}
/**
 * Returns true if this component is a descendant of a <Router>.
 *
 * @see https://reactrouter.com/hooks/use-in-router-context
 */

function useInRouterContext() {
  return react.useContext(LocationContext) != null;
}
/**
 * Returns the current location object, which represents the current URL in web
 * browsers.
 *
 * Note: If you're using this it may mean you're doing some of your own
 * "routing" in your app, and we'd like to know what your use case is. We may
 * be able to provide something higher-level to better suit your needs.
 *
 * @see https://reactrouter.com/hooks/use-location
 */

function dist_useLocation() {
  !useInRouterContext() ?  false ? 0 : router_invariant(false) : void 0;
  return react.useContext(LocationContext).location;
}
/**
 * Returns the current navigation action which describes how the router came to
 * the current location, either by a pop, push, or replace on the history stack.
 *
 * @see https://reactrouter.com/hooks/use-navigation-type
 */

function useNavigationType() {
  return React.useContext(LocationContext).navigationType;
}
/**
 * Returns a PathMatch object if the given pattern matches the current URL.
 * This is useful for components that need to know "active" state, e.g.
 * <NavLink>.
 *
 * @see https://reactrouter.com/hooks/use-match
 */

function useMatch(pattern) {
  !useInRouterContext() ?  false ? 0 : invariant(false) : void 0;
  let {
    pathname
  } = dist_useLocation();
  return React.useMemo(() => matchPath(pattern, pathname), [pathname, pattern]);
}
/**
 * The interface for the navigate() function returned from useNavigate().
 */

/**
 * Returns an imperative method for changing the location. Used by <Link>s, but
 * may also be used by other elements to change the location.
 *
 * @see https://reactrouter.com/hooks/use-navigate
 */
function dist_useNavigate() {
  !useInRouterContext() ?  false ? 0 : router_invariant(false) : void 0;
  let {
    basename,
    navigator
  } = react.useContext(NavigationContext);
  let {
    matches
  } = react.useContext(RouteContext);
  let {
    pathname: locationPathname
  } = dist_useLocation();
  let routePathnamesJson = JSON.stringify(getPathContributingMatches(matches).map(match => match.pathnameBase));
  let activeRef = react.useRef(false);
  react.useEffect(() => {
    activeRef.current = true;
  });
  let navigate = react.useCallback(function (to, options) {
    if (options === void 0) {
      options = {};
    }

     false ? 0 : void 0;
    if (!activeRef.current) return;

    if (typeof to === "number") {
      navigator.go(to);
      return;
    }

    let path = resolveTo(to, JSON.parse(routePathnamesJson), locationPathname, options.relative === "path"); // If we're operating within a basename, prepend it to the pathname prior
    // to handing off to history.  If this is a root navigation, then we
    // navigate to the raw basename which allows the basename to have full
    // control over the presence of a trailing slash on root links

    if (basename !== "/") {
      path.pathname = path.pathname === "/" ? basename : router_joinPaths([basename, path.pathname]);
    }

    (!!options.replace ? navigator.replace : navigator.push)(path, options.state, options);
  }, [basename, navigator, routePathnamesJson, locationPathname]);
  return navigate;
}
const OutletContext = /*#__PURE__*/(/* unused pure expression or super */ null && (React.createContext(null)));
/**
 * Returns the context (if provided) for the child route at this level of the route
 * hierarchy.
 * @see https://reactrouter.com/hooks/use-outlet-context
 */

function useOutletContext() {
  return React.useContext(OutletContext);
}
/**
 * Returns the element for the child route at this level of the route
 * hierarchy. Used internally by <Outlet> to render child routes.
 *
 * @see https://reactrouter.com/hooks/use-outlet
 */

function useOutlet(context) {
  let outlet = React.useContext(RouteContext).outlet;

  if (outlet) {
    return /*#__PURE__*/React.createElement(OutletContext.Provider, {
      value: context
    }, outlet);
  }

  return outlet;
}
/**
 * Returns an object of key/value pairs of the dynamic params from the current
 * URL that were matched by the route path.
 *
 * @see https://reactrouter.com/hooks/use-params
 */

function useParams() {
  let {
    matches
  } = React.useContext(RouteContext);
  let routeMatch = matches[matches.length - 1];
  return routeMatch ? routeMatch.params : {};
}
/**
 * Resolves the pathname of the given `to` value against the current location.
 *
 * @see https://reactrouter.com/hooks/use-resolved-path
 */

function dist_useResolvedPath(to, _temp2) {
  let {
    relative
  } = _temp2 === void 0 ? {} : _temp2;
  let {
    matches
  } = react.useContext(RouteContext);
  let {
    pathname: locationPathname
  } = dist_useLocation();
  let routePathnamesJson = JSON.stringify(getPathContributingMatches(matches).map(match => match.pathnameBase));
  return react.useMemo(() => resolveTo(to, JSON.parse(routePathnamesJson), locationPathname, relative === "path"), [to, routePathnamesJson, locationPathname, relative]);
}
/**
 * Returns the element of the route that matched the current location, prepared
 * with the correct context to render the remainder of the route tree. Route
 * elements in the tree must render an <Outlet> to render their child route's
 * element.
 *
 * @see https://reactrouter.com/hooks/use-routes
 */

function useRoutes(routes, locationArg) {
  !useInRouterContext() ?  false ? 0 : router_invariant(false) : void 0;
  let {
    navigator
  } = react.useContext(NavigationContext);
  let dataRouterStateContext = react.useContext(DataRouterStateContext);
  let {
    matches: parentMatches
  } = react.useContext(RouteContext);
  let routeMatch = parentMatches[parentMatches.length - 1];
  let parentParams = routeMatch ? routeMatch.params : {};
  let parentPathname = routeMatch ? routeMatch.pathname : "/";
  let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
  let parentRoute = routeMatch && routeMatch.route;

  if (false) {}

  let locationFromContext = dist_useLocation();
  let location;

  if (locationArg) {
    var _parsedLocationArg$pa;

    let parsedLocationArg = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
    !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) ?  false ? 0 : router_invariant(false) : void 0;
    location = parsedLocationArg;
  } else {
    location = locationFromContext;
  }

  let pathname = location.pathname || "/";
  let remainingPathname = parentPathnameBase === "/" ? pathname : pathname.slice(parentPathnameBase.length) || "/";
  let matches = matchRoutes(routes, {
    pathname: remainingPathname
  });

  if (false) {}

  let renderedMatches = _renderMatches(matches && matches.map(match => Object.assign({}, match, {
    params: Object.assign({}, parentParams, match.params),
    pathname: router_joinPaths([parentPathnameBase, // Re-encode pathnames that were decoded inside matchRoutes
    navigator.encodeLocation ? navigator.encodeLocation(match.pathname).pathname : match.pathname]),
    pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : router_joinPaths([parentPathnameBase, // Re-encode pathnames that were decoded inside matchRoutes
    navigator.encodeLocation ? navigator.encodeLocation(match.pathnameBase).pathname : match.pathnameBase])
  })), parentMatches, dataRouterStateContext || undefined); // When a user passes in a `locationArg`, the associated routes need to
  // be wrapped in a new `LocationContext.Provider` in order for `useLocation`
  // to use the scoped location instead of the global location.


  if (locationArg && renderedMatches) {
    return /*#__PURE__*/react.createElement(LocationContext.Provider, {
      value: {
        location: dist_extends({
          pathname: "/",
          search: "",
          hash: "",
          state: null,
          key: "default"
        }, location),
        navigationType: Action.Pop
      }
    }, renderedMatches);
  }

  return renderedMatches;
}

function DefaultErrorElement() {
  let error = useRouteError();
  let message = isRouteErrorResponse(error) ? error.status + " " + error.statusText : error instanceof Error ? error.message : JSON.stringify(error);
  let stack = error instanceof Error ? error.stack : null;
  let lightgrey = "rgba(200,200,200, 0.5)";
  let preStyles = {
    padding: "0.5rem",
    backgroundColor: lightgrey
  };
  let codeStyles = {
    padding: "2px 4px",
    backgroundColor: lightgrey
  };
  let devInfo = null;

  if (false) {}

  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("h2", null, "Unexpected Application Error!"), /*#__PURE__*/react.createElement("h3", {
    style: {
      fontStyle: "italic"
    }
  }, message), stack ? /*#__PURE__*/react.createElement("pre", {
    style: preStyles
  }, stack) : null, devInfo);
}

class RenderErrorBoundary extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      error: props.error
    };
  }

  static getDerivedStateFromError(error) {
    return {
      error: error
    };
  }

  static getDerivedStateFromProps(props, state) {
    // When we get into an error state, the user will likely click "back" to the
    // previous page that didn't have an error. Because this wraps the entire
    // application, that will have no effect--the error page continues to display.
    // This gives us a mechanism to recover from the error when the location changes.
    //
    // Whether we're in an error state or not, we update the location in state
    // so that when we are in an error state, it gets reset when a new location
    // comes in and the user recovers from the error.
    if (state.location !== props.location) {
      return {
        error: props.error,
        location: props.location
      };
    } // If we're not changing locations, preserve the location but still surface
    // any new errors that may come through. We retain the existing error, we do
    // this because the error provided from the app state may be cleared without
    // the location changing.


    return {
      error: props.error || state.error,
      location: state.location
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error("React Router caught the following error during render", error, errorInfo);
  }

  render() {
    return this.state.error ? /*#__PURE__*/react.createElement(RouteContext.Provider, {
      value: this.props.routeContext
    }, /*#__PURE__*/react.createElement(RouteErrorContext.Provider, {
      value: this.state.error,
      children: this.props.component
    })) : this.props.children;
  }

}

function RenderedRoute(_ref) {
  let {
    routeContext,
    match,
    children
  } = _ref;
  let dataRouterContext = react.useContext(DataRouterContext); // Track how deep we got in our render pass to emulate SSR componentDidCatch
  // in a DataStaticRouter

  if (dataRouterContext && dataRouterContext.static && dataRouterContext.staticContext && match.route.errorElement) {
    dataRouterContext.staticContext._deepestRenderedBoundaryId = match.route.id;
  }

  return /*#__PURE__*/react.createElement(RouteContext.Provider, {
    value: routeContext
  }, children);
}

function _renderMatches(matches, parentMatches, dataRouterState) {
  if (parentMatches === void 0) {
    parentMatches = [];
  }

  if (matches == null) {
    if (dataRouterState != null && dataRouterState.errors) {
      // Don't bail if we have data router errors so we can render them in the
      // boundary.  Use the pre-matched (or shimmed) matches
      matches = dataRouterState.matches;
    } else {
      return null;
    }
  }

  let renderedMatches = matches; // If we have data errors, trim matches to the highest error boundary

  let errors = dataRouterState == null ? void 0 : dataRouterState.errors;

  if (errors != null) {
    let errorIndex = renderedMatches.findIndex(m => m.route.id && (errors == null ? void 0 : errors[m.route.id]));
    !(errorIndex >= 0) ?  false ? 0 : router_invariant(false) : void 0;
    renderedMatches = renderedMatches.slice(0, Math.min(renderedMatches.length, errorIndex + 1));
  }

  return renderedMatches.reduceRight((outlet, match, index) => {
    let error = match.route.id ? errors == null ? void 0 : errors[match.route.id] : null; // Only data routers handle errors

    let errorElement = dataRouterState ? match.route.errorElement || /*#__PURE__*/react.createElement(DefaultErrorElement, null) : null;
    let matches = parentMatches.concat(renderedMatches.slice(0, index + 1));

    let getChildren = () => /*#__PURE__*/react.createElement(RenderedRoute, {
      match: match,
      routeContext: {
        outlet,
        matches
      }
    }, error ? errorElement : match.route.element !== undefined ? match.route.element : outlet); // Only wrap in an error boundary within data router usages when we have an
    // errorElement on this route.  Otherwise let it bubble up to an ancestor
    // errorElement


    return dataRouterState && (match.route.errorElement || index === 0) ? /*#__PURE__*/react.createElement(RenderErrorBoundary, {
      location: dataRouterState.location,
      component: errorElement,
      error: error,
      children: getChildren(),
      routeContext: {
        outlet: null,
        matches
      }
    }) : getChildren();
  }, null);
}
var DataRouterHook;

(function (DataRouterHook) {
  DataRouterHook["UseBlocker"] = "useBlocker";
  DataRouterHook["UseRevalidator"] = "useRevalidator";
})(DataRouterHook || (DataRouterHook = {}));

var DataRouterStateHook;

(function (DataRouterStateHook) {
  DataRouterStateHook["UseLoaderData"] = "useLoaderData";
  DataRouterStateHook["UseActionData"] = "useActionData";
  DataRouterStateHook["UseRouteError"] = "useRouteError";
  DataRouterStateHook["UseNavigation"] = "useNavigation";
  DataRouterStateHook["UseRouteLoaderData"] = "useRouteLoaderData";
  DataRouterStateHook["UseMatches"] = "useMatches";
  DataRouterStateHook["UseRevalidator"] = "useRevalidator";
})(DataRouterStateHook || (DataRouterStateHook = {}));

function getDataRouterConsoleError(hookName) {
  return hookName + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}

function useDataRouterContext(hookName) {
  let ctx = React.useContext(DataRouterContext);
  !ctx ?  false ? 0 : invariant(false) : void 0;
  return ctx;
}

function useDataRouterState(hookName) {
  let state = react.useContext(DataRouterStateContext);
  !state ?  false ? 0 : router_invariant(false) : void 0;
  return state;
}

function useRouteContext(hookName) {
  let route = react.useContext(RouteContext);
  !route ?  false ? 0 : router_invariant(false) : void 0;
  return route;
}

function useCurrentRouteId(hookName) {
  let route = useRouteContext(hookName);
  let thisRoute = route.matches[route.matches.length - 1];
  !thisRoute.route.id ?  false ? 0 : router_invariant(false) : void 0;
  return thisRoute.route.id;
}
/**
 * Returns the current navigation, defaulting to an "idle" navigation when
 * no navigation is in progress
 */


function dist_useNavigation() {
  let state = useDataRouterState(DataRouterStateHook.UseNavigation);
  return state.navigation;
}
/**
 * Returns a revalidate function for manually triggering revalidation, as well
 * as the current state of any manual revalidations
 */

function useRevalidator() {
  let dataRouterContext = useDataRouterContext(DataRouterHook.UseRevalidator);
  let state = useDataRouterState(DataRouterStateHook.UseRevalidator);
  return {
    revalidate: dataRouterContext.router.revalidate,
    state: state.revalidation
  };
}
/**
 * Returns the active route matches, useful for accessing loaderData for
 * parent/child routes or the route "handle" property
 */

function dist_useMatches() {
  let {
    matches,
    loaderData
  } = useDataRouterState(DataRouterStateHook.UseMatches);
  return React.useMemo(() => matches.map(match => {
    let {
      pathname,
      params
    } = match; // Note: This structure matches that created by createUseMatchesMatch
    // in the @remix-run/router , so if you change this please also change
    // that :)  Eventually we'll DRY this up

    return {
      id: match.route.id,
      pathname,
      params,
      data: loaderData[match.route.id],
      handle: match.route.handle
    };
  }), [matches, loaderData]);
}
/**
 * Returns the loader data for the nearest ancestor Route loader
 */

function useLoaderData() {
  let state = useDataRouterState(DataRouterStateHook.UseLoaderData);
  let routeId = useCurrentRouteId(DataRouterStateHook.UseLoaderData);

  if (state.errors && state.errors[routeId] != null) {
    console.error("You cannot `useLoaderData` in an errorElement (routeId: " + routeId + ")");
    return undefined;
  }

  return state.loaderData[routeId];
}
/**
 * Returns the loaderData for the given routeId
 */

function useRouteLoaderData(routeId) {
  let state = useDataRouterState(DataRouterStateHook.UseRouteLoaderData);
  return state.loaderData[routeId];
}
/**
 * Returns the action data for the nearest ancestor Route action
 */

function useActionData() {
  let state = useDataRouterState(DataRouterStateHook.UseActionData);
  let route = React.useContext(RouteContext);
  !route ?  false ? 0 : invariant(false) : void 0;
  return Object.values((state == null ? void 0 : state.actionData) || {})[0];
}
/**
 * Returns the nearest ancestor Route error, which could be a loader/action
 * error or a render error.  This is intended to be called from your
 * errorElement to display a proper error message.
 */

function useRouteError() {
  var _state$errors;

  let error = react.useContext(RouteErrorContext);
  let state = useDataRouterState(DataRouterStateHook.UseRouteError);
  let routeId = useCurrentRouteId(DataRouterStateHook.UseRouteError); // If this was a render error, we put it in a RouteError context inside
  // of RenderErrorBoundary

  if (error) {
    return error;
  } // Otherwise look for errors from our data router state


  return (_state$errors = state.errors) == null ? void 0 : _state$errors[routeId];
}
/**
 * Returns the happy-path data from the nearest ancestor <Await /> value
 */

function useAsyncValue() {
  let value = React.useContext(AwaitContext);
  return value == null ? void 0 : value._data;
}
/**
 * Returns the error from the nearest ancestor <Await /> value
 */

function useAsyncError() {
  let value = React.useContext(AwaitContext);
  return value == null ? void 0 : value._error;
}
let blockerId = 0;
/**
 * Allow the application to block navigations within the SPA and present the
 * user a confirmation dialog to confirm the navigation.  Mostly used to avoid
 * using half-filled form data.  This does not handle hard-reloads or
 * cross-origin navigations.
 */

function useBlocker(shouldBlock) {
  let {
    router
  } = useDataRouterContext(DataRouterHook.UseBlocker);
  let [blockerKey] = React.useState(() => String(++blockerId));
  let blockerFunction = React.useCallback(args => {
    return typeof shouldBlock === "function" ? !!shouldBlock(args) : !!shouldBlock;
  }, [shouldBlock]);
  let blocker = router.getBlocker(blockerKey, blockerFunction); // Cleanup on unmount

  React.useEffect(() => () => router.deleteBlocker(blockerKey), [router, blockerKey]);
  return blocker;
}
const alreadyWarned = {};

function warningOnce(key, cond, message) {
  if (!cond && !alreadyWarned[key]) {
    alreadyWarned[key] = true;
     false ? 0 : void 0;
  }
}

/**
 * Given a Remix Router instance, render the appropriate UI
 */
function RouterProvider(_ref) {
  let {
    fallbackElement,
    router
  } = _ref;
  // Sync router state to our component state to force re-renders
  let state = useSyncExternalStore(router.subscribe, () => router.state, // We have to provide this so React@18 doesn't complain during hydration,
  // but we pass our serialized hydration data into the router so state here
  // is already synced with what the server saw
  () => router.state);
  let navigator = React.useMemo(() => {
    return {
      createHref: router.createHref,
      encodeLocation: router.encodeLocation,
      go: n => router.navigate(n),
      push: (to, state, opts) => router.navigate(to, {
        state,
        preventScrollReset: opts == null ? void 0 : opts.preventScrollReset
      }),
      replace: (to, state, opts) => router.navigate(to, {
        replace: true,
        state,
        preventScrollReset: opts == null ? void 0 : opts.preventScrollReset
      })
    };
  }, [router]);
  let basename = router.basename || "/"; // The fragment and {null} here are important!  We need them to keep React 18's
  // useId happy when we are server-rendering since we may have a <script> here
  // containing the hydrated server-side staticContext (from StaticRouterProvider).
  // useId relies on the component tree structure to generate deterministic id's
  // so we need to ensure it remains the same on the client even though
  // we don't need the <script> tag

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DataRouterContext.Provider, {
    value: {
      router,
      navigator,
      static: false,
      // Do we need this?
      basename
    }
  }, /*#__PURE__*/React.createElement(DataRouterStateContext.Provider, {
    value: state
  }, /*#__PURE__*/React.createElement(dist_Router, {
    basename: router.basename,
    location: router.state.location,
    navigationType: router.state.historyAction,
    navigator: navigator
  }, router.state.initialized ? /*#__PURE__*/React.createElement(Routes, null) : fallbackElement))), null);
}

/**
 * A <Router> that stores all entries in memory.
 *
 * @see https://reactrouter.com/router-components/memory-router
 */
function MemoryRouter(_ref2) {
  let {
    basename,
    children,
    initialEntries,
    initialIndex
  } = _ref2;
  let historyRef = React.useRef();

  if (historyRef.current == null) {
    historyRef.current = createMemoryHistory({
      initialEntries,
      initialIndex,
      v5Compat: true
    });
  }

  let history = historyRef.current;
  let [state, setState] = React.useState({
    action: history.action,
    location: history.location
  });
  React.useLayoutEffect(() => history.listen(setState), [history]);
  return /*#__PURE__*/React.createElement(dist_Router, {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}

/**
 * Changes the current location.
 *
 * Note: This API is mostly useful in React.Component subclasses that are not
 * able to use hooks. In functional components, we recommend you use the
 * `useNavigate` hook instead.
 *
 * @see https://reactrouter.com/components/navigate
 */
function Navigate(_ref3) {
  let {
    to,
    replace,
    state,
    relative
  } = _ref3;
  !useInRouterContext() ?  false ? 0 : invariant(false) : void 0;
   false ? 0 : void 0;
  let dataRouterState = React.useContext(DataRouterStateContext);
  let navigate = dist_useNavigate();
  React.useEffect(() => {
    // Avoid kicking off multiple navigations if we're in the middle of a
    // data-router navigation, since components get re-rendered when we enter
    // a submitting/loading state
    if (dataRouterState && dataRouterState.navigation.state !== "idle") {
      return;
    }

    navigate(to, {
      replace,
      state,
      relative
    });
  });
  return null;
}

/**
 * Renders the child route's element, if there is one.
 *
 * @see https://reactrouter.com/components/outlet
 */
function Outlet(props) {
  return useOutlet(props.context);
}

/**
 * Declares an element that should be rendered at a certain URL path.
 *
 * @see https://reactrouter.com/components/route
 */
function Route(_props) {
   false ? 0 : router_invariant(false) ;
}

/**
 * Provides location context for the rest of the app.
 *
 * Note: You usually won't render a <Router> directly. Instead, you'll render a
 * router that is more specific to your environment such as a <BrowserRouter>
 * in web browsers or a <StaticRouter> for server rendering.
 *
 * @see https://reactrouter.com/router-components/router
 */
function dist_Router(_ref4) {
  let {
    basename: basenameProp = "/",
    children = null,
    location: locationProp,
    navigationType = Action.Pop,
    navigator,
    static: staticProp = false
  } = _ref4;
  !!useInRouterContext() ?  false ? 0 : router_invariant(false) : void 0; // Preserve trailing slashes on basename, so we can let the user control
  // the enforcement of trailing slashes throughout the app

  let basename = basenameProp.replace(/^\/*/, "/");
  let navigationContext = react.useMemo(() => ({
    basename,
    navigator,
    static: staticProp
  }), [basename, navigator, staticProp]);

  if (typeof locationProp === "string") {
    locationProp = parsePath(locationProp);
  }

  let {
    pathname = "/",
    search = "",
    hash = "",
    state = null,
    key = "default"
  } = locationProp;
  let location = react.useMemo(() => {
    let trailingPathname = stripBasename(pathname, basename);

    if (trailingPathname == null) {
      return null;
    }

    return {
      pathname: trailingPathname,
      search,
      hash,
      state,
      key
    };
  }, [basename, pathname, search, hash, state, key]);
   false ? 0 : void 0;

  if (location == null) {
    return null;
  }

  return /*#__PURE__*/react.createElement(NavigationContext.Provider, {
    value: navigationContext
  }, /*#__PURE__*/react.createElement(LocationContext.Provider, {
    children: children,
    value: {
      location,
      navigationType
    }
  }));
}

/**
 * A container for a nested tree of <Route> elements that renders the branch
 * that best matches the current location.
 *
 * @see https://reactrouter.com/components/routes
 */
function Routes(_ref5) {
  let {
    children,
    location
  } = _ref5;
  let dataRouterContext = react.useContext(DataRouterContext); // When in a DataRouterContext _without_ children, we use the router routes
  // directly.  If we have children, then we're in a descendant tree and we
  // need to use child routes.

  let routes = dataRouterContext && !children ? dataRouterContext.router.routes : createRoutesFromChildren(children);
  return useRoutes(routes, location);
}

/**
 * Component to use for rendering lazily loaded data from returning defer()
 * in a loader function
 */
function Await(_ref6) {
  let {
    children,
    errorElement,
    resolve
  } = _ref6;
  return /*#__PURE__*/React.createElement(AwaitErrorBoundary, {
    resolve: resolve,
    errorElement: errorElement
  }, /*#__PURE__*/React.createElement(ResolveAwait, null, children));
}
var AwaitRenderStatus;

(function (AwaitRenderStatus) {
  AwaitRenderStatus[AwaitRenderStatus["pending"] = 0] = "pending";
  AwaitRenderStatus[AwaitRenderStatus["success"] = 1] = "success";
  AwaitRenderStatus[AwaitRenderStatus["error"] = 2] = "error";
})(AwaitRenderStatus || (AwaitRenderStatus = {}));

const neverSettledPromise = new Promise(() => {});

class AwaitErrorBoundary extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
  }

  static getDerivedStateFromError(error) {
    return {
      error
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error("<Await> caught the following error during render", error, errorInfo);
  }

  render() {
    let {
      children,
      errorElement,
      resolve
    } = this.props;
    let promise = null;
    let status = AwaitRenderStatus.pending;

    if (!(resolve instanceof Promise)) {
      // Didn't get a promise - provide as a resolved promise
      status = AwaitRenderStatus.success;
      promise = Promise.resolve();
      Object.defineProperty(promise, "_tracked", {
        get: () => true
      });
      Object.defineProperty(promise, "_data", {
        get: () => resolve
      });
    } else if (this.state.error) {
      // Caught a render error, provide it as a rejected promise
      status = AwaitRenderStatus.error;
      let renderError = this.state.error;
      promise = Promise.reject().catch(() => {}); // Avoid unhandled rejection warnings

      Object.defineProperty(promise, "_tracked", {
        get: () => true
      });
      Object.defineProperty(promise, "_error", {
        get: () => renderError
      });
    } else if (resolve._tracked) {
      // Already tracked promise - check contents
      promise = resolve;
      status = promise._error !== undefined ? AwaitRenderStatus.error : promise._data !== undefined ? AwaitRenderStatus.success : AwaitRenderStatus.pending;
    } else {
      // Raw (untracked) promise - track it
      status = AwaitRenderStatus.pending;
      Object.defineProperty(resolve, "_tracked", {
        get: () => true
      });
      promise = resolve.then(data => Object.defineProperty(resolve, "_data", {
        get: () => data
      }), error => Object.defineProperty(resolve, "_error", {
        get: () => error
      }));
    }

    if (status === AwaitRenderStatus.error && promise._error instanceof AbortedDeferredError) {
      // Freeze the UI by throwing a never resolved promise
      throw neverSettledPromise;
    }

    if (status === AwaitRenderStatus.error && !errorElement) {
      // No errorElement, throw to the nearest route-level error boundary
      throw promise._error;
    }

    if (status === AwaitRenderStatus.error) {
      // Render via our errorElement
      return /*#__PURE__*/React.createElement(AwaitContext.Provider, {
        value: promise,
        children: errorElement
      });
    }

    if (status === AwaitRenderStatus.success) {
      // Render children with resolved value
      return /*#__PURE__*/React.createElement(AwaitContext.Provider, {
        value: promise,
        children: children
      });
    } // Throw to the suspense boundary


    throw promise;
  }

}
/**
 * @private
 * Indirection to leverage useAsyncValue for a render-prop API on <Await>
 */


function ResolveAwait(_ref7) {
  let {
    children
  } = _ref7;
  let data = useAsyncValue();
  let toRender = typeof children === "function" ? children(data) : children;
  return /*#__PURE__*/React.createElement(React.Fragment, null, toRender);
} ///////////////////////////////////////////////////////////////////////////////
// UTILS
///////////////////////////////////////////////////////////////////////////////

/**
 * Creates a route config from a React "children" object, which is usually
 * either a `<Route>` element or an array of them. Used internally by
 * `<Routes>` to create a route config from its children.
 *
 * @see https://reactrouter.com/utils/create-routes-from-children
 */


function createRoutesFromChildren(children, parentPath) {
  if (parentPath === void 0) {
    parentPath = [];
  }

  let routes = [];
  react.Children.forEach(children, (element, index) => {
    if (! /*#__PURE__*/react.isValidElement(element)) {
      // Ignore non-elements. This allows people to more easily inline
      // conditionals in their route config.
      return;
    }

    if (element.type === react.Fragment) {
      // Transparently support React.Fragment and its children.
      routes.push.apply(routes, createRoutesFromChildren(element.props.children, parentPath));
      return;
    }

    !(element.type === Route) ?  false ? 0 : router_invariant(false) : void 0;
    !(!element.props.index || !element.props.children) ?  false ? 0 : router_invariant(false) : void 0;
    let treePath = [...parentPath, index];
    let route = {
      id: element.props.id || treePath.join("-"),
      caseSensitive: element.props.caseSensitive,
      element: element.props.element,
      index: element.props.index,
      path: element.props.path,
      loader: element.props.loader,
      action: element.props.action,
      errorElement: element.props.errorElement,
      hasErrorBoundary: element.props.errorElement != null,
      shouldRevalidate: element.props.shouldRevalidate,
      handle: element.props.handle
    };

    if (element.props.children) {
      route.children = createRoutesFromChildren(element.props.children, treePath);
    }

    routes.push(route);
  });
  return routes;
}
/**
 * Renders the result of `matchRoutes()` into a React element.
 */

function renderMatches(matches) {
  return _renderMatches(matches);
}
/**
 * @private
 * Walk the route tree and add hasErrorBoundary if it's not provided, so that
 * users providing manual route arrays can just specify errorElement
 */

function enhanceManualRouteObjects(routes) {
  return routes.map(route => {
    let routeClone = dist_extends({}, route);

    if (routeClone.hasErrorBoundary == null) {
      routeClone.hasErrorBoundary = routeClone.errorElement != null;
    }

    if (routeClone.children) {
      routeClone.children = enhanceManualRouteObjects(routeClone.children);
    }

    return routeClone;
  });
}

function createMemoryRouter(routes, opts) {
  return createRouter({
    basename: opts == null ? void 0 : opts.basename,
    history: createMemoryHistory({
      initialEntries: opts == null ? void 0 : opts.initialEntries,
      initialIndex: opts == null ? void 0 : opts.initialIndex
    }),
    hydrationData: opts == null ? void 0 : opts.hydrationData,
    routes: enhanceManualRouteObjects(routes)
  }).initialize();
} ///////////////////////////////////////////////////////////////////////////////


//# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ./node_modules/react-router-dom/dist/index.js
/**
 * React Router DOM v6.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */





function react_router_dom_dist_extends() {
  react_router_dom_dist_extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return react_router_dom_dist_extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

const defaultMethod = "get";
const defaultEncType = "application/x-www-form-urlencoded";
function isHtmlElement(object) {
  return object != null && typeof object.tagName === "string";
}
function isButtonElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "button";
}
function isFormElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "form";
}
function isInputElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "input";
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

function shouldProcessLinkClick(event, target) {
  return event.button === 0 && ( // Ignore everything but left clicks
  !target || target === "_self") && // Let browser handle "target=_blank" etc.
  !isModifiedEvent(event) // Ignore clicks with modifier keys
  ;
}
/**
 * Creates a URLSearchParams object using the given initializer.
 *
 * This is identical to `new URLSearchParams(init)` except it also
 * supports arrays as values in the object form of the initializer
 * instead of just strings. This is convenient when you need multiple
 * values for a given key, but don't want to use an array initializer.
 *
 * For example, instead of:
 *
 *   let searchParams = new URLSearchParams([
 *     ['sort', 'name'],
 *     ['sort', 'price']
 *   ]);
 *
 * you can do:
 *
 *   let searchParams = createSearchParams({
 *     sort: ['name', 'price']
 *   });
 */

function createSearchParams(init) {
  if (init === void 0) {
    init = "";
  }

  return new URLSearchParams(typeof init === "string" || Array.isArray(init) || init instanceof URLSearchParams ? init : Object.keys(init).reduce((memo, key) => {
    let value = init[key];
    return memo.concat(Array.isArray(value) ? value.map(v => [key, v]) : [[key, value]]);
  }, []));
}
function getSearchParamsForLocation(locationSearch, defaultSearchParams) {
  let searchParams = createSearchParams(locationSearch);

  if (defaultSearchParams) {
    for (let key of defaultSearchParams.keys()) {
      if (!searchParams.has(key)) {
        defaultSearchParams.getAll(key).forEach(value => {
          searchParams.append(key, value);
        });
      }
    }
  }

  return searchParams;
}
function getFormSubmissionInfo(target, defaultAction, options) {
  let method;
  let action;
  let encType;
  let formData;

  if (isFormElement(target)) {
    let submissionTrigger = options.submissionTrigger;
    method = options.method || target.getAttribute("method") || defaultMethod;
    action = options.action || target.getAttribute("action") || defaultAction;
    encType = options.encType || target.getAttribute("enctype") || defaultEncType;
    formData = new FormData(target);

    if (submissionTrigger && submissionTrigger.name) {
      formData.append(submissionTrigger.name, submissionTrigger.value);
    }
  } else if (isButtonElement(target) || isInputElement(target) && (target.type === "submit" || target.type === "image")) {
    let form = target.form;

    if (form == null) {
      throw new Error("Cannot submit a <button> or <input type=\"submit\"> without a <form>");
    } // <button>/<input type="submit"> may override attributes of <form>


    method = options.method || target.getAttribute("formmethod") || form.getAttribute("method") || defaultMethod;
    action = options.action || target.getAttribute("formaction") || form.getAttribute("action") || defaultAction;
    encType = options.encType || target.getAttribute("formenctype") || form.getAttribute("enctype") || defaultEncType;
    formData = new FormData(form); // Include name + value from a <button>, appending in case the button name
    // matches an existing input name

    if (target.name) {
      formData.append(target.name, target.value);
    }
  } else if (isHtmlElement(target)) {
    throw new Error("Cannot submit element that is not <form>, <button>, or " + "<input type=\"submit|image\">");
  } else {
    method = options.method || defaultMethod;
    action = options.action || defaultAction;
    encType = options.encType || defaultEncType;

    if (target instanceof FormData) {
      formData = target;
    } else {
      formData = new FormData();

      if (target instanceof URLSearchParams) {
        for (let [name, value] of target) {
          formData.append(name, value);
        }
      } else if (target != null) {
        for (let name of Object.keys(target)) {
          formData.append(name, target[name]);
        }
      }
    }
  }

  let {
    protocol,
    host
  } = window.location;
  let url = new URL(action, protocol + "//" + host);
  return {
    url,
    method: method.toLowerCase(),
    encType,
    formData
  };
}

const _excluded = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset"],
      _excluded2 = (/* unused pure expression or super */ null && (["aria-current", "caseSensitive", "className", "end", "style", "to", "children"])),
      _excluded3 = (/* unused pure expression or super */ null && (["reloadDocument", "replace", "method", "action", "onSubmit", "fetcherKey", "routeId", "relative", "preventScrollReset"]));
//#region Routers
////////////////////////////////////////////////////////////////////////////////

function createBrowserRouter(routes, opts) {
  return createRouter({
    basename: opts == null ? void 0 : opts.basename,
    history: createBrowserHistory({
      window: opts == null ? void 0 : opts.window
    }),
    hydrationData: (opts == null ? void 0 : opts.hydrationData) || parseHydrationData(),
    routes: UNSAFE_enhanceManualRouteObjects(routes)
  }).initialize();
}
function createHashRouter(routes, opts) {
  return createRouter({
    basename: opts == null ? void 0 : opts.basename,
    history: createHashHistory({
      window: opts == null ? void 0 : opts.window
    }),
    hydrationData: (opts == null ? void 0 : opts.hydrationData) || parseHydrationData(),
    routes: UNSAFE_enhanceManualRouteObjects(routes)
  }).initialize();
}

function parseHydrationData() {
  var _window;

  let state = (_window = window) == null ? void 0 : _window.__staticRouterHydrationData;

  if (state && state.errors) {
    state = react_router_dom_dist_extends({}, state, {
      errors: deserializeErrors(state.errors)
    });
  }

  return state;
}

function deserializeErrors(errors) {
  if (!errors) return null;
  let entries = Object.entries(errors);
  let serialized = {};

  for (let [key, val] of entries) {
    // Hey you!  If you change this, please change the corresponding logic in
    // serializeErrors in react-router-dom/server.tsx :)
    if (val && val.__type === "RouteErrorResponse") {
      serialized[key] = new ErrorResponse(val.status, val.statusText, val.data, val.internal === true);
    } else if (val && val.__type === "Error") {
      let error = new Error(val.message); // Wipe away the client-side stack trace.  Nothing to fill it in with
      // because we don't serialize SSR stack traces for security reasons

      error.stack = "";
      serialized[key] = error;
    } else {
      serialized[key] = val;
    }
  }

  return serialized;
}
/**
 * A `<Router>` for use in web browsers. Provides the cleanest URLs.
 */


function BrowserRouter(_ref) {
  let {
    basename,
    children,
    window
  } = _ref;
  let historyRef = react.useRef();

  if (historyRef.current == null) {
    historyRef.current = router_createBrowserHistory({
      window,
      v5Compat: true
    });
  }

  let history = historyRef.current;
  let [state, setState] = react.useState({
    action: history.action,
    location: history.location
  });
  react.useLayoutEffect(() => history.listen(setState), [history]);
  return /*#__PURE__*/react.createElement(dist_Router, {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}
/**
 * A `<Router>` for use in web browsers. Stores the location in the hash
 * portion of the URL so it is not sent to the server.
 */

function HashRouter(_ref2) {
  let {
    basename,
    children,
    window
  } = _ref2;
  let historyRef = React.useRef();

  if (historyRef.current == null) {
    historyRef.current = createHashHistory({
      window,
      v5Compat: true
    });
  }

  let history = historyRef.current;
  let [state, setState] = React.useState({
    action: history.action,
    location: history.location
  });
  React.useLayoutEffect(() => history.listen(setState), [history]);
  return /*#__PURE__*/React.createElement(Router, {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}
/**
 * A `<Router>` that accepts a pre-instantiated history object. It's important
 * to note that using your own history object is highly discouraged and may add
 * two versions of the history library to your bundles unless you use the same
 * version of the history library that React Router uses internally.
 */

function HistoryRouter(_ref3) {
  let {
    basename,
    children,
    history
  } = _ref3;
  const [state, setState] = React.useState({
    action: history.action,
    location: history.location
  });
  React.useLayoutEffect(() => history.listen(setState), [history]);
  return /*#__PURE__*/React.createElement(Router, {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}

if (false) {}
const dist_isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
/**
 * The public API for rendering a history-aware <a>.
 */

const Link = /*#__PURE__*/react.forwardRef(function LinkWithRef(_ref4, ref) {
  let {
    onClick,
    relative,
    reloadDocument,
    replace,
    state,
    target,
    to,
    preventScrollReset
  } = _ref4,
      rest = _objectWithoutPropertiesLoose(_ref4, _excluded);

  // Rendered into <a href> for absolute URLs
  let absoluteHref;
  let isExternal = false;

  if (dist_isBrowser && typeof to === "string" && /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(to)) {
    absoluteHref = to;
    let currentUrl = new URL(window.location.href);
    let targetUrl = to.startsWith("//") ? new URL(currentUrl.protocol + to) : new URL(to);

    if (targetUrl.origin === currentUrl.origin) {
      // Strip the protocol/origin for same-origin absolute URLs
      to = targetUrl.pathname + targetUrl.search + targetUrl.hash;
    } else {
      isExternal = true;
    }
  } // Rendered into <a href> for relative URLs


  let href = useHref(to, {
    relative
  });
  let internalOnClick = useLinkClickHandler(to, {
    replace,
    state,
    target,
    preventScrollReset,
    relative
  });

  function handleClick(event) {
    if (onClick) onClick(event);

    if (!event.defaultPrevented) {
      internalOnClick(event);
    }
  }

  return (
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    react.createElement("a", react_router_dom_dist_extends({}, rest, {
      href: absoluteHref || href,
      onClick: isExternal || reloadDocument ? onClick : handleClick,
      ref: ref,
      target: target
    }))
  );
});

if (false) {}
/**
 * A <Link> wrapper that knows if it's "active" or not.
 */


const NavLink = /*#__PURE__*/(/* unused pure expression or super */ null && (React.forwardRef(function NavLinkWithRef(_ref5, ref) {
  let {
    "aria-current": ariaCurrentProp = "page",
    caseSensitive = false,
    className: classNameProp = "",
    end = false,
    style: styleProp,
    to,
    children
  } = _ref5,
      rest = _objectWithoutPropertiesLoose(_ref5, _excluded2);

  let path = useResolvedPath(to, {
    relative: rest.relative
  });
  let location = useLocation();
  let routerState = React.useContext(UNSAFE_DataRouterStateContext);
  let {
    navigator
  } = React.useContext(UNSAFE_NavigationContext);
  let toPathname = navigator.encodeLocation ? navigator.encodeLocation(path).pathname : path.pathname;
  let locationPathname = location.pathname;
  let nextLocationPathname = routerState && routerState.navigation && routerState.navigation.location ? routerState.navigation.location.pathname : null;

  if (!caseSensitive) {
    locationPathname = locationPathname.toLowerCase();
    nextLocationPathname = nextLocationPathname ? nextLocationPathname.toLowerCase() : null;
    toPathname = toPathname.toLowerCase();
  }

  let isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(toPathname.length) === "/";
  let isPending = nextLocationPathname != null && (nextLocationPathname === toPathname || !end && nextLocationPathname.startsWith(toPathname) && nextLocationPathname.charAt(toPathname.length) === "/");
  let ariaCurrent = isActive ? ariaCurrentProp : undefined;
  let className;

  if (typeof classNameProp === "function") {
    className = classNameProp({
      isActive,
      isPending
    });
  } else {
    // If the className prop is not a function, we use a default `active`
    // class for <NavLink />s that are active. In v5 `active` was the default
    // value for `activeClassName`, but we are removing that API and can still
    // use the old default behavior for a cleaner upgrade path and keep the
    // simple styling rules working as they currently do.
    className = [classNameProp, isActive ? "active" : null, isPending ? "pending" : null].filter(Boolean).join(" ");
  }

  let style = typeof styleProp === "function" ? styleProp({
    isActive,
    isPending
  }) : styleProp;
  return /*#__PURE__*/React.createElement(Link, react_router_dom_dist_extends({}, rest, {
    "aria-current": ariaCurrent,
    className: className,
    ref: ref,
    style: style,
    to: to
  }), typeof children === "function" ? children({
    isActive,
    isPending
  }) : children);
})));

if (false) {}
/**
 * A `@remix-run/router`-aware `<form>`. It behaves like a normal form except
 * that the interaction with the server is with `fetch` instead of new document
 * requests, allowing components to add nicer UX to the page as the form is
 * submitted and returns with data.
 */


const Form = /*#__PURE__*/(/* unused pure expression or super */ null && (React.forwardRef((props, ref) => {
  return /*#__PURE__*/React.createElement(FormImpl, react_router_dom_dist_extends({}, props, {
    ref: ref
  }));
})));

if (false) {}

const FormImpl = /*#__PURE__*/(/* unused pure expression or super */ null && (React.forwardRef((_ref6, forwardedRef) => {
  let {
    reloadDocument,
    replace,
    method = defaultMethod,
    action,
    onSubmit,
    fetcherKey,
    routeId,
    relative,
    preventScrollReset
  } = _ref6,
      props = _objectWithoutPropertiesLoose(_ref6, _excluded3);

  let submit = useSubmitImpl(fetcherKey, routeId);
  let formMethod = method.toLowerCase() === "get" ? "get" : "post";
  let formAction = useFormAction(action, {
    relative
  });

  let submitHandler = event => {
    onSubmit && onSubmit(event);
    if (event.defaultPrevented) return;
    event.preventDefault();
    let submitter = event.nativeEvent.submitter;
    let submitMethod = (submitter == null ? void 0 : submitter.getAttribute("formmethod")) || method;
    submit(submitter || event.currentTarget, {
      method: submitMethod,
      replace,
      relative,
      preventScrollReset
    });
  };

  return /*#__PURE__*/React.createElement("form", react_router_dom_dist_extends({
    ref: forwardedRef,
    method: formMethod,
    action: formAction,
    onSubmit: reloadDocument ? onSubmit : submitHandler
  }, props));
})));

if (false) {}
/**
 * This component will emulate the browser's scroll restoration on location
 * changes.
 */


function ScrollRestoration(_ref7) {
  let {
    getKey,
    storageKey
  } = _ref7;
  useScrollRestoration({
    getKey,
    storageKey
  });
  return null;
}

if (false) {} //#endregion
////////////////////////////////////////////////////////////////////////////////
//#region Hooks
////////////////////////////////////////////////////////////////////////////////


var dist_DataRouterHook;

(function (DataRouterHook) {
  DataRouterHook["UseScrollRestoration"] = "useScrollRestoration";
  DataRouterHook["UseSubmitImpl"] = "useSubmitImpl";
  DataRouterHook["UseFetcher"] = "useFetcher";
})(dist_DataRouterHook || (dist_DataRouterHook = {}));

var dist_DataRouterStateHook;

(function (DataRouterStateHook) {
  DataRouterStateHook["UseFetchers"] = "useFetchers";
  DataRouterStateHook["UseScrollRestoration"] = "useScrollRestoration";
})(dist_DataRouterStateHook || (dist_DataRouterStateHook = {}));

function dist_getDataRouterConsoleError(hookName) {
  return hookName + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}

function dist_useDataRouterContext(hookName) {
  let ctx = React.useContext(UNSAFE_DataRouterContext);
  !ctx ?  false ? 0 : invariant(false) : void 0;
  return ctx;
}

function dist_useDataRouterState(hookName) {
  let state = React.useContext(UNSAFE_DataRouterStateContext);
  !state ?  false ? 0 : invariant(false) : void 0;
  return state;
}
/**
 * Handles the click behavior for router `<Link>` components. This is useful if
 * you need to create custom `<Link>` components with the same click behavior we
 * use in our exported `<Link>`.
 */


function useLinkClickHandler(to, _temp) {
  let {
    target,
    replace: replaceProp,
    state,
    preventScrollReset,
    relative
  } = _temp === void 0 ? {} : _temp;
  let navigate = dist_useNavigate();
  let location = dist_useLocation();
  let path = dist_useResolvedPath(to, {
    relative
  });
  return react.useCallback(event => {
    if (shouldProcessLinkClick(event, target)) {
      event.preventDefault(); // If the URL hasn't changed, a regular <a> will do a replace instead of
      // a push, so do the same here unless the replace prop is explicitly set

      let replace = replaceProp !== undefined ? replaceProp : router_createPath(location) === router_createPath(path);
      navigate(to, {
        replace,
        state,
        preventScrollReset,
        relative
      });
    }
  }, [location, navigate, path, replaceProp, state, target, to, preventScrollReset, relative]);
}
/**
 * A convenient wrapper for reading and writing search parameters via the
 * URLSearchParams interface.
 */

function useSearchParams(defaultInit) {
   false ? 0 : void 0;
  let defaultSearchParamsRef = React.useRef(createSearchParams(defaultInit));
  let hasSetSearchParamsRef = React.useRef(false);
  let location = useLocation();
  let searchParams = React.useMemo(() => // Only merge in the defaults if we haven't yet called setSearchParams.
  // Once we call that we want those to take precedence, otherwise you can't
  // remove a param with setSearchParams({}) if it has an initial value
  getSearchParamsForLocation(location.search, hasSetSearchParamsRef.current ? null : defaultSearchParamsRef.current), [location.search]);
  let navigate = useNavigate();
  let setSearchParams = React.useCallback((nextInit, navigateOptions) => {
    const newSearchParams = createSearchParams(typeof nextInit === "function" ? nextInit(searchParams) : nextInit);
    hasSetSearchParamsRef.current = true;
    navigate("?" + newSearchParams, navigateOptions);
  }, [navigate, searchParams]);
  return [searchParams, setSearchParams];
}
/**
 * Returns a function that may be used to programmatically submit a form (or
 * some arbitrary data) to the server.
 */

function useSubmit() {
  return useSubmitImpl();
}

function useSubmitImpl(fetcherKey, routeId) {
  let {
    router
  } = dist_useDataRouterContext(dist_DataRouterHook.UseSubmitImpl);
  let defaultAction = useFormAction();
  return React.useCallback(function (target, options) {
    if (options === void 0) {
      options = {};
    }

    if (typeof document === "undefined") {
      throw new Error("You are calling submit during the server render. " + "Try calling submit within a `useEffect` or callback instead.");
    }

    let {
      method,
      encType,
      formData,
      url
    } = getFormSubmissionInfo(target, defaultAction, options);
    let href = url.pathname + url.search;
    let opts = {
      replace: options.replace,
      preventScrollReset: options.preventScrollReset,
      formData,
      formMethod: method,
      formEncType: encType
    };

    if (fetcherKey) {
      !(routeId != null) ?  false ? 0 : invariant(false) : void 0;
      router.fetch(fetcherKey, routeId, href, opts);
    } else {
      router.navigate(href, opts);
    }
  }, [defaultAction, router, fetcherKey, routeId]);
}

function useFormAction(action, _temp2) {
  let {
    relative
  } = _temp2 === void 0 ? {} : _temp2;
  let {
    basename
  } = React.useContext(UNSAFE_NavigationContext);
  let routeContext = React.useContext(UNSAFE_RouteContext);
  !routeContext ?  false ? 0 : invariant(false) : void 0;
  let [match] = routeContext.matches.slice(-1); // Shallow clone path so we can modify it below, otherwise we modify the
  // object referenced by useMemo inside useResolvedPath

  let path = react_router_dom_dist_extends({}, useResolvedPath(action ? action : ".", {
    relative
  })); // Previously we set the default action to ".". The problem with this is that
  // `useResolvedPath(".")` excludes search params and the hash of the resolved
  // URL. This is the intended behavior of when "." is specifically provided as
  // the form action, but inconsistent w/ browsers when the action is omitted.
  // https://github.com/remix-run/remix/issues/927


  let location = useLocation();

  if (action == null) {
    // Safe to write to these directly here since if action was undefined, we
    // would have called useResolvedPath(".") which will never include a search
    // or hash
    path.search = location.search;
    path.hash = location.hash; // When grabbing search params from the URL, remove the automatically
    // inserted ?index param so we match the useResolvedPath search behavior
    // which would not include ?index

    if (match.route.index) {
      let params = new URLSearchParams(path.search);
      params.delete("index");
      path.search = params.toString() ? "?" + params.toString() : "";
    }
  }

  if ((!action || action === ".") && match.route.index) {
    path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
  } // If we're operating within a basename, prepend it to the pathname prior
  // to creating the form action.  If this is a root navigation, then just use
  // the raw basename which allows the basename to have full control over the
  // presence of a trailing slash on root actions


  if (basename !== "/") {
    path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
  }

  return createPath(path);
}

function createFetcherForm(fetcherKey, routeId) {
  let FetcherForm = /*#__PURE__*/React.forwardRef((props, ref) => {
    return /*#__PURE__*/React.createElement(FormImpl, react_router_dom_dist_extends({}, props, {
      ref: ref,
      fetcherKey: fetcherKey,
      routeId: routeId
    }));
  });

  if (false) {}

  return FetcherForm;
}

let fetcherId = 0;
/**
 * Interacts with route loaders and actions without causing a navigation. Great
 * for any interaction that stays on the same page.
 */

function useFetcher() {
  var _route$matches;

  let {
    router
  } = dist_useDataRouterContext(dist_DataRouterHook.UseFetcher);
  let route = React.useContext(UNSAFE_RouteContext);
  !route ?  false ? 0 : invariant(false) : void 0;
  let routeId = (_route$matches = route.matches[route.matches.length - 1]) == null ? void 0 : _route$matches.route.id;
  !(routeId != null) ?  false ? 0 : invariant(false) : void 0;
  let [fetcherKey] = React.useState(() => String(++fetcherId));
  let [Form] = React.useState(() => {
    !routeId ?  false ? 0 : invariant(false) : void 0;
    return createFetcherForm(fetcherKey, routeId);
  });
  let [load] = React.useState(() => href => {
    !router ?  false ? 0 : invariant(false) : void 0;
    !routeId ?  false ? 0 : invariant(false) : void 0;
    router.fetch(fetcherKey, routeId, href);
  });
  let submit = useSubmitImpl(fetcherKey, routeId);
  let fetcher = router.getFetcher(fetcherKey);
  let fetcherWithComponents = React.useMemo(() => react_router_dom_dist_extends({
    Form,
    submit,
    load
  }, fetcher), [fetcher, Form, submit, load]);
  React.useEffect(() => {
    // Is this busted when the React team gets real weird and calls effects
    // twice on mount?  We really just need to garbage collect here when this
    // fetcher is no longer around.
    return () => {
      if (!router) {
        console.warn("No fetcher available to clean up from useFetcher()");
        return;
      }

      router.deleteFetcher(fetcherKey);
    };
  }, [router, fetcherKey]);
  return fetcherWithComponents;
}
/**
 * Provides all fetchers currently on the page. Useful for layouts and parent
 * routes that need to provide pending/optimistic UI regarding the fetch.
 */

function useFetchers() {
  let state = dist_useDataRouterState(dist_DataRouterStateHook.UseFetchers);
  return [...state.fetchers.values()];
}
const SCROLL_RESTORATION_STORAGE_KEY = "react-router-scroll-positions";
let savedScrollPositions = {};
/**
 * When rendered inside a RouterProvider, will restore scroll positions on navigations
 */

function useScrollRestoration(_temp3) {
  let {
    getKey,
    storageKey
  } = _temp3 === void 0 ? {} : _temp3;
  let {
    router
  } = dist_useDataRouterContext(dist_DataRouterHook.UseScrollRestoration);
  let {
    restoreScrollPosition,
    preventScrollReset
  } = dist_useDataRouterState(dist_DataRouterStateHook.UseScrollRestoration);
  let location = useLocation();
  let matches = useMatches();
  let navigation = useNavigation(); // Trigger manual scroll restoration while we're active

  React.useEffect(() => {
    window.history.scrollRestoration = "manual";
    return () => {
      window.history.scrollRestoration = "auto";
    };
  }, []); // Save positions on pagehide

  usePageHide(React.useCallback(() => {
    if (navigation.state === "idle") {
      let key = (getKey ? getKey(location, matches) : null) || location.key;
      savedScrollPositions[key] = window.scrollY;
    }

    sessionStorage.setItem(storageKey || SCROLL_RESTORATION_STORAGE_KEY, JSON.stringify(savedScrollPositions));
    window.history.scrollRestoration = "auto";
  }, [storageKey, getKey, navigation.state, location, matches])); // Read in any saved scroll locations

  if (typeof document !== "undefined") {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useLayoutEffect(() => {
      try {
        let sessionPositions = sessionStorage.getItem(storageKey || SCROLL_RESTORATION_STORAGE_KEY);

        if (sessionPositions) {
          savedScrollPositions = JSON.parse(sessionPositions);
        }
      } catch (e) {// no-op, use default empty object
      }
    }, [storageKey]); // Enable scroll restoration in the router
    // eslint-disable-next-line react-hooks/rules-of-hooks

    React.useLayoutEffect(() => {
      let disableScrollRestoration = router == null ? void 0 : router.enableScrollRestoration(savedScrollPositions, () => window.scrollY, getKey);
      return () => disableScrollRestoration && disableScrollRestoration();
    }, [router, getKey]); // Restore scrolling when state.restoreScrollPosition changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    React.useLayoutEffect(() => {
      // Explicit false means don't do anything (used for submissions)
      if (restoreScrollPosition === false) {
        return;
      } // been here before, scroll to it


      if (typeof restoreScrollPosition === "number") {
        window.scrollTo(0, restoreScrollPosition);
        return;
      } // try to scroll to the hash


      if (location.hash) {
        let el = document.getElementById(location.hash.slice(1));

        if (el) {
          el.scrollIntoView();
          return;
        }
      } // Don't reset if this navigation opted out


      if (preventScrollReset === true) {
        return;
      } // otherwise go to the top on new locations


      window.scrollTo(0, 0);
    }, [location, restoreScrollPosition, preventScrollReset]);
  }
}
/**
 * Setup a callback to be fired on the window's `beforeunload` event. This is
 * useful for saving some data to `window.localStorage` just before the page
 * refreshes.
 *
 * Note: The `callback` argument should be a function created with
 * `React.useCallback()`.
 */


function useBeforeUnload(callback, options) {
  let {
    capture
  } = options || {};
  React.useEffect(() => {
    let opts = capture != null ? {
      capture
    } : undefined;
    window.addEventListener("beforeunload", callback, opts);
    return () => {
      window.removeEventListener("beforeunload", callback, opts);
    };
  }, [callback, capture]);
}
/**
 * Setup a callback to be fired on the window's `pagehide` event. This is
 * useful for saving some data to `window.localStorage` just before the page
 * refreshes.  This event is better supported than beforeunload across browsers.
 *
 * Note: The `callback` argument should be a function created with
 * `React.useCallback()`.
 */

function usePageHide(callback, options) {
  let {
    capture
  } = options || {};
  React.useEffect(() => {
    let opts = capture != null ? {
      capture
    } : undefined;
    window.addEventListener("pagehide", callback, opts);
    return () => {
      window.removeEventListener("pagehide", callback, opts);
    };
  }, [callback, capture]);
}
/**
 * Wrapper around useBlocker to show a window.confirm prompt to users instead
 * of building a custom UI with useBlocker.
 *
 * Warning: This has *a lot of rough edges* and behaves very differently (and
 * very incorrectly in some cases) across browsers if user click addition
 * back/forward navigations while the confirm is open.  Use at your own risk.
 */


function usePrompt(_ref8) {
  let {
    when,
    message
  } = _ref8;
  let blocker = unstable_useBlocker(when);
  React.useEffect(() => {
    if (blocker.state === "blocked" && !when) {
      blocker.reset();
    }
  }, [blocker, when]);
  React.useEffect(() => {
    if (blocker.state === "blocked") {
      let proceed = window.confirm(message);

      if (proceed) {
        setTimeout(blocker.proceed, 0);
      } else {
        blocker.reset();
      }
    }
  }, [blocker, message]);
}
////////////////////////////////////////////////////////////////////////////////
//#region Utils
////////////////////////////////////////////////////////////////////////////////

function dist_warning(cond, message) {
  if (!cond) {
    // eslint-disable-next-line no-console
    if (typeof console !== "undefined") console.warn(message);

    try {
      // Welcome to debugging React Router!
      //
      // This error is thrown as a convenience so you can more easily
      // find the source for a warning that appears in the console by
      // enabling "pause on exceptions" in your JavaScript debugger.
      throw new Error(message); // eslint-disable-next-line no-empty
    } catch (e) {}
  }
} //#endregion


//# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ./node_modules/tsparticles-engine/esm/Utils/EventDispatcher.js
class EventDispatcher {
    constructor() {
        this._listeners = new Map();
    }
    addEventListener(type, listener) {
        var _a;
        this.removeEventListener(type, listener);
        if (!this._listeners.get(type)) {
            this._listeners.set(type, []);
        }
        (_a = this._listeners.get(type)) === null || _a === void 0 ? void 0 : _a.push(listener);
    }
    dispatchEvent(type, args) {
        var _a;
        (_a = this._listeners.get(type)) === null || _a === void 0 ? void 0 : _a.forEach((handler) => handler(args));
    }
    hasEventListener(type) {
        return !!this._listeners.get(type);
    }
    removeAllEventListeners(type) {
        if (!type) {
            this._listeners = new Map();
        }
        else {
            this._listeners.delete(type);
        }
    }
    removeEventListener(type, listener) {
        const arr = this._listeners.get(type);
        if (!arr) {
            return;
        }
        const length = arr.length, idx = arr.indexOf(listener);
        if (idx < 0) {
            return;
        }
        if (length === 1) {
            this._listeners.delete(type);
        }
        else {
            arr.splice(idx, 1);
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-engine/esm/Core/Utils/Vector3d.js
class Vector3d {
    constructor(xOrCoords, y, z) {
        if (typeof xOrCoords !== "number" && xOrCoords) {
            this.x = xOrCoords.x;
            this.y = xOrCoords.y;
            const coords3d = xOrCoords;
            this.z = coords3d.z ? coords3d.z : 0;
        }
        else if (xOrCoords !== undefined && y !== undefined) {
            this.x = xOrCoords;
            this.y = y;
            this.z = z !== null && z !== void 0 ? z : 0;
        }
        else {
            throw new Error("tsParticles - Vector3d not initialized correctly");
        }
    }
    static get origin() {
        return Vector3d.create(0, 0, 0);
    }
    get angle() {
        return Math.atan2(this.y, this.x);
    }
    set angle(angle) {
        this.updateFromAngle(angle, this.length);
    }
    get length() {
        return Math.sqrt(this.getLengthSq());
    }
    set length(length) {
        this.updateFromAngle(this.angle, length);
    }
    static clone(source) {
        return Vector3d.create(source.x, source.y, source.z);
    }
    static create(x, y, z) {
        return new Vector3d(x, y, z);
    }
    add(v) {
        return Vector3d.create(this.x + v.x, this.y + v.y, this.z + v.z);
    }
    addTo(v) {
        this.x += v.x;
        this.y += v.y;
        this.z += v.z;
    }
    copy() {
        return Vector3d.clone(this);
    }
    distanceTo(v) {
        return this.sub(v).length;
    }
    distanceToSq(v) {
        return this.sub(v).getLengthSq();
    }
    div(n) {
        return Vector3d.create(this.x / n, this.y / n, this.z / n);
    }
    divTo(n) {
        this.x /= n;
        this.y /= n;
        this.z /= n;
    }
    getLengthSq() {
        return this.x ** 2 + this.y ** 2;
    }
    mult(n) {
        return Vector3d.create(this.x * n, this.y * n, this.z * n);
    }
    multTo(n) {
        this.x *= n;
        this.y *= n;
        this.z *= n;
    }
    rotate(angle) {
        return Vector3d.create(this.x * Math.cos(angle) - this.y * Math.sin(angle), this.x * Math.sin(angle) + this.y * Math.cos(angle), 0);
    }
    setTo(c) {
        this.x = c.x;
        this.y = c.y;
        const v3d = c;
        this.z = v3d.z ? v3d.z : 0;
    }
    sub(v) {
        return Vector3d.create(this.x - v.x, this.y - v.y, this.z - v.z);
    }
    subFrom(v) {
        this.x -= v.x;
        this.y -= v.y;
        this.z -= v.z;
    }
    updateFromAngle(angle, length) {
        this.x = Math.cos(angle) * length;
        this.y = Math.sin(angle) * length;
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-engine/esm/Core/Utils/Vector.js

class Vector extends Vector3d {
    constructor(xOrCoords, y) {
        super(xOrCoords, y, 0);
    }
    static get origin() {
        return Vector.create(0, 0);
    }
    static clone(source) {
        return Vector.create(source.x, source.y);
    }
    static create(x, y) {
        return new Vector(x, y);
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-engine/esm/Utils/NumberUtils.js

let _random = Math.random;
const easings = new Map();
function addEasing(name, easing) {
    if (!easings.get(name)) {
        easings.set(name, easing);
    }
}
function getEasing(name) {
    return easings.get(name) || ((value) => value);
}
function setRandom(rnd = Math.random) {
    _random = rnd;
}
function getRandom() {
    return clamp(_random(), 0, 1 - 1e-16);
}
function clamp(num, min, max) {
    return Math.min(Math.max(num, min), max);
}
function mix(comp1, comp2, weight1, weight2) {
    return Math.floor((comp1 * weight1 + comp2 * weight2) / (weight1 + weight2));
}
function randomInRange(r) {
    const max = getRangeMax(r);
    let min = getRangeMin(r);
    if (max === min) {
        min = 0;
    }
    return getRandom() * (max - min) + min;
}
function getRangeValue(value) {
    return typeof value === "number" ? value : randomInRange(value);
}
function getRangeMin(value) {
    return typeof value === "number" ? value : value.min;
}
function getRangeMax(value) {
    return typeof value === "number" ? value : value.max;
}
function setRangeValue(source, value) {
    if (source === value || (value === undefined && typeof source === "number")) {
        return source;
    }
    const min = getRangeMin(source), max = getRangeMax(source);
    return value !== undefined
        ? {
            min: Math.min(min, value),
            max: Math.max(max, value),
        }
        : setRangeValue(min, max);
}
function getValue(options) {
    const random = options.random, { enable, minimumValue } = typeof random === "boolean"
        ? {
            enable: random,
            minimumValue: 0,
        }
        : random;
    return enable ? getRangeValue(setRangeValue(options.value, minimumValue)) : getRangeValue(options.value);
}
function getDistances(pointA, pointB) {
    const dx = pointA.x - pointB.x, dy = pointA.y - pointB.y;
    return { dx: dx, dy: dy, distance: Math.sqrt(dx ** 2 + dy ** 2) };
}
function getDistance(pointA, pointB) {
    return getDistances(pointA, pointB).distance;
}
function getParticleDirectionAngle(direction, position, center) {
    if (typeof direction === "number") {
        return (direction * Math.PI) / 180;
    }
    else {
        switch (direction) {
            case "top":
                return -Math.PI / 2;
            case "top-right":
                return -Math.PI / 4;
            case "right":
                return 0;
            case "bottom-right":
                return Math.PI / 4;
            case "bottom":
                return Math.PI / 2;
            case "bottom-left":
                return (3 * Math.PI) / 4;
            case "left":
                return Math.PI;
            case "top-left":
                return (-3 * Math.PI) / 4;
            case "inside":
                return Math.atan2(center.y - position.y, center.x - position.x);
            case "outside":
                return Math.atan2(position.y - center.y, position.x - center.x);
            default:
                return getRandom() * Math.PI * 2;
        }
    }
}
function getParticleBaseVelocity(direction) {
    const baseVelocity = Vector.origin;
    baseVelocity.length = 1;
    baseVelocity.angle = direction;
    return baseVelocity;
}
function collisionVelocity(v1, v2, m1, m2) {
    return Vector.create((v1.x * (m1 - m2)) / (m1 + m2) + (v2.x * 2 * m2) / (m1 + m2), v1.y);
}
function calcPositionFromSize(data) {
    return data.position && data.position.x !== undefined && data.position.y !== undefined
        ? {
            x: (data.position.x * data.size.width) / 100,
            y: (data.position.y * data.size.height) / 100,
        }
        : undefined;
}
function calcPositionOrRandomFromSize(data) {
    var _a, _b, _c, _d;
    return {
        x: (((_b = (_a = data.position) === null || _a === void 0 ? void 0 : _a.x) !== null && _b !== void 0 ? _b : getRandom() * 100) * data.size.width) / 100,
        y: (((_d = (_c = data.position) === null || _c === void 0 ? void 0 : _c.y) !== null && _d !== void 0 ? _d : getRandom() * 100) * data.size.height) / 100,
    };
}
function calcPositionOrRandomFromSizeRanged(data) {
    var _a, _b;
    const position = {
        x: ((_a = data.position) === null || _a === void 0 ? void 0 : _a.x) !== undefined ? getRangeValue(data.position.x) : undefined,
        y: ((_b = data.position) === null || _b === void 0 ? void 0 : _b.y) !== undefined ? getRangeValue(data.position.y) : undefined,
    };
    return calcPositionOrRandomFromSize({ size: data.size, position });
}
function calcExactPositionOrRandomFromSize(data) {
    var _a, _b, _c, _d;
    return {
        x: (_b = (_a = data.position) === null || _a === void 0 ? void 0 : _a.x) !== null && _b !== void 0 ? _b : getRandom() * data.size.width,
        y: (_d = (_c = data.position) === null || _c === void 0 ? void 0 : _c.y) !== null && _d !== void 0 ? _d : getRandom() * data.size.height,
    };
}
function calcExactPositionOrRandomFromSizeRanged(data) {
    var _a, _b;
    const position = {
        x: ((_a = data.position) === null || _a === void 0 ? void 0 : _a.x) !== undefined ? getRangeValue(data.position.x) : undefined,
        y: ((_b = data.position) === null || _b === void 0 ? void 0 : _b.y) !== undefined ? getRangeValue(data.position.y) : undefined,
    };
    return calcExactPositionOrRandomFromSize({ size: data.size, position });
}
function parseAlpha(input) {
    return input ? (input.endsWith("%") ? parseFloat(input) / 100 : parseFloat(input)) : 1;
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-engine/esm/Utils/Utils.js


function rectSideBounce(pSide, pOtherSide, rectSide, rectOtherSide, velocity, factor) {
    const res = { bounced: false };
    if (pOtherSide.min < rectOtherSide.min ||
        pOtherSide.min > rectOtherSide.max ||
        pOtherSide.max < rectOtherSide.min ||
        pOtherSide.max > rectOtherSide.max) {
        return res;
    }
    if ((pSide.max >= rectSide.min && pSide.max <= (rectSide.max + rectSide.min) / 2 && velocity > 0) ||
        (pSide.min <= rectSide.max && pSide.min > (rectSide.max + rectSide.min) / 2 && velocity < 0)) {
        res.velocity = velocity * -factor;
        res.bounced = true;
    }
    return res;
}
function checkSelector(element, selectors) {
    const res = executeOnSingleOrMultiple(selectors, (selector) => {
        return element.matches(selector);
    });
    return res instanceof Array ? res.some((t) => t) : res;
}
function isSsr() {
    return typeof window === "undefined" || !window || typeof window.document === "undefined" || !window.document;
}
function hasMatchMedia() {
    return !isSsr() && typeof matchMedia !== "undefined";
}
function safeMatchMedia(query) {
    if (!hasMatchMedia()) {
        return;
    }
    return matchMedia(query);
}
function animate() {
    return isSsr()
        ? (callback) => setTimeout(callback)
        : (callback) => (requestAnimationFrame || setTimeout)(callback);
}
function cancelAnimation() {
    return isSsr()
        ? (handle) => clearTimeout(handle)
        : (handle) => (cancelAnimationFrame || clearTimeout)(handle);
}
function isInArray(value, array) {
    return value === array || (array instanceof Array && array.indexOf(value) > -1);
}
async function loadFont(font, weight) {
    try {
        await document.fonts.load(`${weight !== null && weight !== void 0 ? weight : "400"} 36px '${font !== null && font !== void 0 ? font : "Verdana"}'`);
    }
    catch (_a) {
    }
}
function arrayRandomIndex(array) {
    return Math.floor(getRandom() * array.length);
}
function itemFromArray(array, index, useIndex = true) {
    return array[index !== undefined && useIndex ? index % array.length : arrayRandomIndex(array)];
}
function isPointInside(point, size, offset, radius, direction) {
    return areBoundsInside(calculateBounds(point, radius !== null && radius !== void 0 ? radius : 0), size, offset, direction);
}
function areBoundsInside(bounds, size, offset, direction) {
    let inside = true;
    if (!direction || direction === "bottom") {
        inside = bounds.top < size.height + offset.x;
    }
    if (inside && (!direction || direction === "left")) {
        inside = bounds.right > offset.x;
    }
    if (inside && (!direction || direction === "right")) {
        inside = bounds.left < size.width + offset.y;
    }
    if (inside && (!direction || direction === "top")) {
        inside = bounds.bottom > offset.y;
    }
    return inside;
}
function calculateBounds(point, radius) {
    return {
        bottom: point.y + radius,
        left: point.x - radius,
        right: point.x + radius,
        top: point.y - radius,
    };
}
function deepExtend(destination, ...sources) {
    for (const source of sources) {
        if (source === undefined || source === null) {
            continue;
        }
        if (typeof source !== "object") {
            destination = source;
            continue;
        }
        const sourceIsArray = Array.isArray(source);
        if (sourceIsArray && (typeof destination !== "object" || !destination || !Array.isArray(destination))) {
            destination = [];
        }
        else if (!sourceIsArray && (typeof destination !== "object" || !destination || Array.isArray(destination))) {
            destination = {};
        }
        for (const key in source) {
            if (key === "__proto__") {
                continue;
            }
            const sourceDict = source, value = sourceDict[key], isObject = typeof value === "object", destDict = destination;
            destDict[key] =
                isObject && Array.isArray(value)
                    ? value.map((v) => deepExtend(destDict[key], v))
                    : deepExtend(destDict[key], value);
        }
    }
    return destination;
}
function isDivModeEnabled(mode, divs) {
    return !!findItemFromSingleOrMultiple(divs, (t) => t.enable && isInArray(mode, t.mode));
}
function divModeExecute(mode, divs, callback) {
    executeOnSingleOrMultiple(divs, (div) => {
        const divMode = div.mode, divEnabled = div.enable;
        if (divEnabled && isInArray(mode, divMode)) {
            singleDivModeExecute(div, callback);
        }
    });
}
function singleDivModeExecute(div, callback) {
    const selectors = div.selectors;
    executeOnSingleOrMultiple(selectors, (selector) => {
        callback(selector, div);
    });
}
function divMode(divs, element) {
    if (!element || !divs) {
        return;
    }
    return findItemFromSingleOrMultiple(divs, (div) => {
        return checkSelector(element, div.selectors);
    });
}
function circleBounceDataFromParticle(p) {
    return {
        position: p.getPosition(),
        radius: p.getRadius(),
        mass: p.getMass(),
        velocity: p.velocity,
        factor: Vector.create(getValue(p.options.bounce.horizontal), getValue(p.options.bounce.vertical)),
    };
}
function circleBounce(p1, p2) {
    const { x: xVelocityDiff, y: yVelocityDiff } = p1.velocity.sub(p2.velocity), [pos1, pos2] = [p1.position, p2.position], { dx: xDist, dy: yDist } = getDistances(pos2, pos1);
    if (xVelocityDiff * xDist + yVelocityDiff * yDist < 0) {
        return;
    }
    const angle = -Math.atan2(yDist, xDist), m1 = p1.mass, m2 = p2.mass, u1 = p1.velocity.rotate(angle), u2 = p2.velocity.rotate(angle), v1 = collisionVelocity(u1, u2, m1, m2), v2 = collisionVelocity(u2, u1, m1, m2), vFinal1 = v1.rotate(-angle), vFinal2 = v2.rotate(-angle);
    p1.velocity.x = vFinal1.x * p1.factor.x;
    p1.velocity.y = vFinal1.y * p1.factor.y;
    p2.velocity.x = vFinal2.x * p2.factor.x;
    p2.velocity.y = vFinal2.y * p2.factor.y;
}
function rectBounce(particle, divBounds) {
    const pPos = particle.getPosition(), size = particle.getRadius(), bounds = calculateBounds(pPos, size), resH = rectSideBounce({
        min: bounds.left,
        max: bounds.right,
    }, {
        min: bounds.top,
        max: bounds.bottom,
    }, {
        min: divBounds.left,
        max: divBounds.right,
    }, {
        min: divBounds.top,
        max: divBounds.bottom,
    }, particle.velocity.x, getValue(particle.options.bounce.horizontal));
    if (resH.bounced) {
        if (resH.velocity !== undefined) {
            particle.velocity.x = resH.velocity;
        }
        if (resH.position !== undefined) {
            particle.position.x = resH.position;
        }
    }
    const resV = rectSideBounce({
        min: bounds.top,
        max: bounds.bottom,
    }, {
        min: bounds.left,
        max: bounds.right,
    }, {
        min: divBounds.top,
        max: divBounds.bottom,
    }, {
        min: divBounds.left,
        max: divBounds.right,
    }, particle.velocity.y, getValue(particle.options.bounce.vertical));
    if (resV.bounced) {
        if (resV.velocity !== undefined) {
            particle.velocity.y = resV.velocity;
        }
        if (resV.position !== undefined) {
            particle.position.y = resV.position;
        }
    }
}
function executeOnSingleOrMultiple(obj, callback) {
    return obj instanceof Array ? obj.map((item, index) => callback(item, index)) : callback(obj, 0);
}
function itemFromSingleOrMultiple(obj, index, useIndex) {
    return obj instanceof Array ? itemFromArray(obj, index, useIndex) : obj;
}
function findItemFromSingleOrMultiple(obj, callback) {
    return obj instanceof Array ? obj.find((t, index) => callback(t, index)) : callback(obj, 0) ? obj : undefined;
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-engine/esm/Utils/ColorUtils.js


const randomColorValue = "random", midColorValue = "mid", colorManagers = new Map();
function addColorManager(manager) {
    colorManagers.set(manager.key, manager);
}
function hue2rgb(p, q, t) {
    if (t < 0) {
        t += 1;
    }
    if (t > 1) {
        t -= 1;
    }
    if (t < 1 / 6) {
        return p + (q - p) * 6 * t;
    }
    if (t < 1 / 2) {
        return q;
    }
    if (t < 2 / 3) {
        return p + (q - p) * (2 / 3 - t) * 6;
    }
    return p;
}
function stringToRgba(input) {
    for (const [, manager] of colorManagers) {
        if (input.startsWith(manager.stringPrefix)) {
            return manager.parseString(input);
        }
    }
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i, hexFixed = input.replace(shorthandRegex, (_, r, g, b, a) => {
        return r + r + g + g + b + b + (a !== undefined ? a + a : "");
    }), regex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i, result = regex.exec(hexFixed);
    return result
        ? {
            a: result[4] !== undefined ? parseInt(result[4], 16) / 0xff : 1,
            b: parseInt(result[3], 16),
            g: parseInt(result[2], 16),
            r: parseInt(result[1], 16),
        }
        : undefined;
}
function rangeColorToRgb(input, index, useIndex = true) {
    if (!input) {
        return;
    }
    const color = typeof input === "string" ? { value: input } : input;
    if (typeof color.value === "string") {
        return colorToRgb(color.value, index, useIndex);
    }
    if (color.value instanceof Array) {
        return rangeColorToRgb({
            value: itemFromArray(color.value, index, useIndex),
        });
    }
    for (const [, manager] of colorManagers) {
        const res = manager.handleRangeColor(color);
        if (res) {
            return res;
        }
    }
}
function colorToRgb(input, index, useIndex = true) {
    if (!input) {
        return;
    }
    const color = typeof input === "string" ? { value: input } : input;
    if (typeof color.value === "string") {
        return color.value === randomColorValue ? getRandomRgbColor() : stringToRgb(color.value);
    }
    if (color.value instanceof Array) {
        return colorToRgb({
            value: itemFromArray(color.value, index, useIndex),
        });
    }
    for (const [, manager] of colorManagers) {
        const res = manager.handleColor(color);
        if (res) {
            return res;
        }
    }
}
function colorToHsl(color, index, useIndex = true) {
    const rgb = colorToRgb(color, index, useIndex);
    return rgb ? rgbToHsl(rgb) : undefined;
}
function rangeColorToHsl(color, index, useIndex = true) {
    const rgb = rangeColorToRgb(color, index, useIndex);
    return rgb ? rgbToHsl(rgb) : undefined;
}
function rgbToHsl(color) {
    const r1 = color.r / 255, g1 = color.g / 255, b1 = color.b / 255, max = Math.max(r1, g1, b1), min = Math.min(r1, g1, b1), res = {
        h: 0,
        l: (max + min) / 2,
        s: 0,
    };
    if (max !== min) {
        res.s = res.l < 0.5 ? (max - min) / (max + min) : (max - min) / (2.0 - max - min);
        res.h =
            r1 === max
                ? (g1 - b1) / (max - min)
                : (res.h = g1 === max ? 2.0 + (b1 - r1) / (max - min) : 4.0 + (r1 - g1) / (max - min));
    }
    res.l *= 100;
    res.s *= 100;
    res.h *= 60;
    if (res.h < 0) {
        res.h += 360;
    }
    if (res.h >= 360) {
        res.h -= 360;
    }
    return res;
}
function stringToAlpha(input) {
    var _a;
    return (_a = stringToRgba(input)) === null || _a === void 0 ? void 0 : _a.a;
}
function stringToRgb(input) {
    return stringToRgba(input);
}
function hslToRgb(hsl) {
    const result = { b: 0, g: 0, r: 0 }, hslPercent = {
        h: hsl.h / 360,
        l: hsl.l / 100,
        s: hsl.s / 100,
    };
    if (!hslPercent.s) {
        result.b = hslPercent.l;
        result.g = hslPercent.l;
        result.r = hslPercent.l;
    }
    else {
        const q = hslPercent.l < 0.5
            ? hslPercent.l * (1 + hslPercent.s)
            : hslPercent.l + hslPercent.s - hslPercent.l * hslPercent.s, p = 2 * hslPercent.l - q;
        result.r = hue2rgb(p, q, hslPercent.h + 1 / 3);
        result.g = hue2rgb(p, q, hslPercent.h);
        result.b = hue2rgb(p, q, hslPercent.h - 1 / 3);
    }
    result.r = Math.floor(result.r * 255);
    result.g = Math.floor(result.g * 255);
    result.b = Math.floor(result.b * 255);
    return result;
}
function hslaToRgba(hsla) {
    const rgbResult = hslToRgb(hsla);
    return {
        a: hsla.a,
        b: rgbResult.b,
        g: rgbResult.g,
        r: rgbResult.r,
    };
}
function getRandomRgbColor(min) {
    const fixedMin = min !== null && min !== void 0 ? min : 0;
    return {
        b: Math.floor(randomInRange(setRangeValue(fixedMin, 256))),
        g: Math.floor(randomInRange(setRangeValue(fixedMin, 256))),
        r: Math.floor(randomInRange(setRangeValue(fixedMin, 256))),
    };
}
function getStyleFromRgb(color, opacity) {
    return `rgba(${color.r}, ${color.g}, ${color.b}, ${opacity !== null && opacity !== void 0 ? opacity : 1})`;
}
function getStyleFromHsl(color, opacity) {
    return `hsla(${color.h}, ${color.s}%, ${color.l}%, ${opacity !== null && opacity !== void 0 ? opacity : 1})`;
}
function colorMix(color1, color2, size1, size2) {
    let rgb1 = color1, rgb2 = color2;
    if (rgb1.r === undefined) {
        rgb1 = hslToRgb(color1);
    }
    if (rgb2.r === undefined) {
        rgb2 = hslToRgb(color2);
    }
    return {
        b: mix(rgb1.b, rgb2.b, size1, size2),
        g: mix(rgb1.g, rgb2.g, size1, size2),
        r: mix(rgb1.r, rgb2.r, size1, size2),
    };
}
function getLinkColor(p1, p2, linkColor) {
    var _a, _b;
    if (linkColor === randomColorValue) {
        return getRandomRgbColor();
    }
    else if (linkColor === midColorValue) {
        const sourceColor = (_a = p1.getFillColor()) !== null && _a !== void 0 ? _a : p1.getStrokeColor(), destColor = (_b = p2 === null || p2 === void 0 ? void 0 : p2.getFillColor()) !== null && _b !== void 0 ? _b : p2 === null || p2 === void 0 ? void 0 : p2.getStrokeColor();
        if (sourceColor && destColor && p2) {
            return colorMix(sourceColor, destColor, p1.getRadius(), p2.getRadius());
        }
        else {
            const hslColor = sourceColor !== null && sourceColor !== void 0 ? sourceColor : destColor;
            if (hslColor) {
                return hslToRgb(hslColor);
            }
        }
    }
    else {
        return linkColor;
    }
}
function getLinkRandomColor(optColor, blink, consent) {
    const color = typeof optColor === "string" ? optColor : optColor.value;
    if (color === randomColorValue) {
        if (consent) {
            return rangeColorToRgb({
                value: color,
            });
        }
        if (blink) {
            return randomColorValue;
        }
        return midColorValue;
    }
    else if (color === midColorValue) {
        return midColorValue;
    }
    else {
        return rangeColorToRgb({
            value: color,
        });
    }
}
function getHslFromAnimation(animation) {
    return animation !== undefined
        ? {
            h: animation.h.value,
            s: animation.s.value,
            l: animation.l.value,
        }
        : undefined;
}
function getHslAnimationFromHsl(hsl, animationOptions, reduceFactor) {
    const resColor = {
        h: {
            enable: false,
            value: hsl.h,
        },
        s: {
            enable: false,
            value: hsl.s,
        },
        l: {
            enable: false,
            value: hsl.l,
        },
    };
    if (animationOptions) {
        setColorAnimation(resColor.h, animationOptions.h, reduceFactor);
        setColorAnimation(resColor.s, animationOptions.s, reduceFactor);
        setColorAnimation(resColor.l, animationOptions.l, reduceFactor);
    }
    return resColor;
}
function setColorAnimation(colorValue, colorAnimation, reduceFactor) {
    colorValue.enable = colorAnimation.enable;
    if (colorValue.enable) {
        colorValue.velocity = (getRangeValue(colorAnimation.speed) / 100) * reduceFactor;
        colorValue.decay = 1 - getRangeValue(colorAnimation.decay);
        colorValue.status = "increasing";
        colorValue.loops = 0;
        colorValue.maxLoops = getRangeValue(colorAnimation.count);
        if (!colorAnimation.sync) {
            colorValue.velocity *= getRandom();
            colorValue.value *= getRandom();
        }
        colorValue.initialValue = colorValue.value;
    }
    else {
        colorValue.velocity = 0;
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-engine/esm/Utils/CanvasUtils.js

function drawLine(context, begin, end) {
    context.beginPath();
    context.moveTo(begin.x, begin.y);
    context.lineTo(end.x, end.y);
    context.closePath();
}
function drawTriangle(context, p1, p2, p3) {
    context.beginPath();
    context.moveTo(p1.x, p1.y);
    context.lineTo(p2.x, p2.y);
    context.lineTo(p3.x, p3.y);
    context.closePath();
}
function paintBase(context, dimension, baseColor) {
    context.fillStyle = baseColor !== null && baseColor !== void 0 ? baseColor : "rgba(0,0,0,0)";
    context.fillRect(0, 0, dimension.width, dimension.height);
}
function paintImage(context, dimension, image, opacity) {
    if (!image) {
        return;
    }
    context.globalAlpha = opacity;
    context.drawImage(image, 0, 0, dimension.width, dimension.height);
    context.globalAlpha = 1;
}
function clear(context, dimension) {
    context.clearRect(0, 0, dimension.width, dimension.height);
}
function drawParticle(data) {
    var _a, _b, _c, _d, _e;
    const { container, context, particle, delta, colorStyles, backgroundMask, composite, radius, opacity, shadow, transform, } = data;
    const pos = particle.getPosition(), angle = particle.rotation + (particle.pathRotation ? particle.velocity.angle : 0), rotateData = {
        sin: Math.sin(angle),
        cos: Math.cos(angle),
    }, transformData = {
        a: rotateData.cos * ((_a = transform.a) !== null && _a !== void 0 ? _a : 1),
        b: rotateData.sin * ((_b = transform.b) !== null && _b !== void 0 ? _b : 1),
        c: -rotateData.sin * ((_c = transform.c) !== null && _c !== void 0 ? _c : 1),
        d: rotateData.cos * ((_d = transform.d) !== null && _d !== void 0 ? _d : 1),
    };
    context.setTransform(transformData.a, transformData.b, transformData.c, transformData.d, pos.x, pos.y);
    context.beginPath();
    if (backgroundMask) {
        context.globalCompositeOperation = composite;
    }
    const shadowColor = particle.shadowColor;
    if (shadow.enable && shadowColor) {
        context.shadowBlur = shadow.blur;
        context.shadowColor = getStyleFromRgb(shadowColor);
        context.shadowOffsetX = shadow.offset.x;
        context.shadowOffsetY = shadow.offset.y;
    }
    if (colorStyles.fill) {
        context.fillStyle = colorStyles.fill;
    }
    const strokeWidth = (_e = particle.strokeWidth) !== null && _e !== void 0 ? _e : 0;
    context.lineWidth = strokeWidth;
    if (colorStyles.stroke) {
        context.strokeStyle = colorStyles.stroke;
    }
    drawShape(container, context, particle, radius, opacity, delta);
    if (strokeWidth > 0) {
        context.stroke();
    }
    if (particle.close) {
        context.closePath();
    }
    if (particle.fill) {
        context.fill();
    }
    drawShapeAfterEffect(container, context, particle, radius, opacity, delta);
    context.globalCompositeOperation = "source-over";
    context.setTransform(1, 0, 0, 1, 0, 0);
}
function drawShape(container, context, particle, radius, opacity, delta) {
    if (!particle.shape) {
        return;
    }
    const drawer = container.drawers.get(particle.shape);
    if (!drawer) {
        return;
    }
    drawer.draw(context, particle, radius, opacity, delta, container.retina.pixelRatio);
}
function drawShapeAfterEffect(container, context, particle, radius, opacity, delta) {
    if (!particle.shape) {
        return;
    }
    const drawer = container.drawers.get(particle.shape);
    if (!(drawer === null || drawer === void 0 ? void 0 : drawer.afterEffect)) {
        return;
    }
    drawer.afterEffect(context, particle, radius, opacity, delta, container.retina.pixelRatio);
}
function drawPlugin(context, plugin, delta) {
    if (!plugin.draw) {
        return;
    }
    plugin.draw(context, delta);
}
function drawParticlePlugin(context, plugin, particle, delta) {
    if (!plugin.drawParticle) {
        return;
    }
    plugin.drawParticle(context, particle, delta);
}
function alterHsl(color, type, value) {
    return {
        h: color.h,
        s: color.s,
        l: color.l + (type === "darken" ? -1 : 1) * value,
    };
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-engine/esm/Core/Utils/Constants.js
const generatedAttribute = "generated";
const touchEndEvent = "touchend";
const mouseDownEvent = "pointerdown";
const mouseUpEvent = "pointerup";
const mouseMoveEvent = "pointermove";
const touchStartEvent = "touchstart";
const touchMoveEvent = "touchmove";
const mouseLeaveEvent = "pointerleave";
const mouseOutEvent = "pointerout";
const touchCancelEvent = "touchcancel";
const resizeEvent = "resize";
const visibilityChangeEvent = "visibilitychange";

;// CONCATENATED MODULE: ./node_modules/tsparticles-engine/esm/Core/Canvas.js




function setTransformValue(factor, newFactor, key) {
    var _a;
    const newValue = newFactor[key];
    if (newValue !== undefined) {
        factor[key] = ((_a = factor[key]) !== null && _a !== void 0 ? _a : 1) * newValue;
    }
}
class Canvas {
    constructor(container) {
        this.container = container;
        this.size = {
            height: 0,
            width: 0,
        };
        this._context = null;
        this._generated = false;
        this._preDrawUpdaters = [];
        this._postDrawUpdaters = [];
        this._resizePlugins = [];
        this._colorPlugins = [];
        this._mutationObserver =
            !isSsr() && typeof MutationObserver !== "undefined"
                ? new MutationObserver((records) => {
                    for (const record of records) {
                        if (record.type === "attributes" && record.attributeName === "style") {
                            this._repairStyle();
                        }
                    }
                })
                : undefined;
    }
    get _fullScreen() {
        return this.container.actualOptions.fullScreen.enable;
    }
    clear() {
        const options = this.container.actualOptions, trail = options.particles.move.trail, trailFill = this._trailFill;
        if (options.backgroundMask.enable) {
            this.paint();
        }
        else if (trail.enable && trail.length > 0 && trailFill) {
            if (trailFill.color) {
                this._paintBase(getStyleFromRgb(trailFill.color, trailFill.opacity));
            }
            else if (trailFill.image) {
                this._paintImage(trailFill.image, trailFill.opacity);
            }
        }
        else {
            this.draw((ctx) => {
                clear(ctx, this.size);
            });
        }
    }
    destroy() {
        var _a, _b;
        (_a = this._mutationObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
        if (this._generated) {
            (_b = this.element) === null || _b === void 0 ? void 0 : _b.remove();
        }
        else {
            this._resetOriginalStyle();
        }
        this.draw((ctx) => {
            clear(ctx, this.size);
        });
        this._preDrawUpdaters = [];
        this._postDrawUpdaters = [];
        this._resizePlugins = [];
        this._colorPlugins = [];
    }
    draw(cb) {
        if (!this._context) {
            return;
        }
        return cb(this._context);
    }
    drawParticle(particle, delta) {
        var _a;
        if (particle.spawning || particle.destroyed) {
            return;
        }
        const radius = particle.getRadius();
        if (radius <= 0) {
            return;
        }
        const pfColor = particle.getFillColor(), psColor = (_a = particle.getStrokeColor()) !== null && _a !== void 0 ? _a : pfColor;
        let [fColor, sColor] = this._getPluginParticleColors(particle);
        if (!fColor) {
            fColor = pfColor;
        }
        if (!sColor) {
            sColor = psColor;
        }
        if (!fColor && !sColor) {
            return;
        }
        this.draw((ctx) => {
            var _a, _b, _c, _d;
            const options = this.container.actualOptions, zIndexOptions = particle.options.zIndex, zOpacityFactor = (1 - particle.zIndexFactor) ** zIndexOptions.opacityRate, opacity = (_c = (_a = particle.bubble.opacity) !== null && _a !== void 0 ? _a : (_b = particle.opacity) === null || _b === void 0 ? void 0 : _b.value) !== null && _c !== void 0 ? _c : 1, strokeOpacity = (_d = particle.strokeOpacity) !== null && _d !== void 0 ? _d : opacity, zOpacity = opacity * zOpacityFactor, zStrokeOpacity = strokeOpacity * zOpacityFactor, transform = {}, colorStyles = {
                fill: fColor ? getStyleFromHsl(fColor, zOpacity) : undefined,
            };
            colorStyles.stroke = sColor ? getStyleFromHsl(sColor, zStrokeOpacity) : colorStyles.fill;
            this._applyPreDrawUpdaters(ctx, particle, radius, zOpacity, colorStyles, transform);
            drawParticle({
                container: this.container,
                context: ctx,
                particle,
                delta,
                colorStyles,
                backgroundMask: options.backgroundMask.enable,
                composite: options.backgroundMask.composite,
                radius: radius * (1 - particle.zIndexFactor) ** zIndexOptions.sizeRate,
                opacity: zOpacity,
                shadow: particle.options.shadow,
                transform,
            });
            this._applyPostDrawUpdaters(particle);
        });
    }
    drawParticlePlugin(plugin, particle, delta) {
        this.draw((ctx) => {
            drawParticlePlugin(ctx, plugin, particle, delta);
        });
    }
    drawPlugin(plugin, delta) {
        this.draw((ctx) => {
            drawPlugin(ctx, plugin, delta);
        });
    }
    async init() {
        var _a;
        this.resize();
        this._initStyle();
        this._initCover();
        try {
            await this._initTrail();
        }
        catch (e) {
            console.error(e);
        }
        this.initBackground();
        if (this.element) {
            (_a = this._mutationObserver) === null || _a === void 0 ? void 0 : _a.observe(this.element, { attributes: true });
        }
        this.initUpdaters();
        this.initPlugins();
        this.paint();
    }
    initBackground() {
        const options = this.container.actualOptions, background = options.background, element = this.element, elementStyle = element === null || element === void 0 ? void 0 : element.style;
        if (!elementStyle) {
            return;
        }
        if (background.color) {
            const color = rangeColorToRgb(background.color);
            elementStyle.backgroundColor = color ? getStyleFromRgb(color, background.opacity) : "";
        }
        else {
            elementStyle.backgroundColor = "";
        }
        elementStyle.backgroundImage = background.image || "";
        elementStyle.backgroundPosition = background.position || "";
        elementStyle.backgroundRepeat = background.repeat || "";
        elementStyle.backgroundSize = background.size || "";
    }
    initPlugins() {
        this._resizePlugins = [];
        for (const [, plugin] of this.container.plugins) {
            if (plugin.resize) {
                this._resizePlugins.push(plugin);
            }
            if (plugin.particleFillColor || plugin.particleStrokeColor) {
                this._colorPlugins.push(plugin);
            }
        }
    }
    initUpdaters() {
        this._preDrawUpdaters = [];
        this._postDrawUpdaters = [];
        for (const updater of this.container.particles.updaters) {
            if (updater.afterDraw) {
                this._postDrawUpdaters.push(updater);
            }
            if (updater.getColorStyles || updater.getTransformValues || updater.beforeDraw) {
                this._preDrawUpdaters.push(updater);
            }
        }
    }
    loadCanvas(canvas) {
        var _a, _b;
        if (this._generated) {
            (_a = this.element) === null || _a === void 0 ? void 0 : _a.remove();
        }
        this._generated =
            canvas.dataset && generatedAttribute in canvas.dataset
                ? canvas.dataset[generatedAttribute] === "true"
                : this._generated;
        this.element = canvas;
        this.element.ariaHidden = "true";
        this._originalStyle = deepExtend({}, this.element.style);
        this.size.height = canvas.offsetHeight;
        this.size.width = canvas.offsetWidth;
        this._context = this.element.getContext("2d");
        (_b = this._mutationObserver) === null || _b === void 0 ? void 0 : _b.observe(this.element, { attributes: true });
        this.container.retina.init();
        this.initBackground();
    }
    paint() {
        const options = this.container.actualOptions;
        this.draw((ctx) => {
            if (options.backgroundMask.enable && options.backgroundMask.cover) {
                clear(ctx, this.size);
                this._paintBase(this._coverColorStyle);
            }
            else {
                this._paintBase();
            }
        });
    }
    resize() {
        if (!this.element) {
            return;
        }
        const container = this.container, pxRatio = container.retina.pixelRatio, size = container.canvas.size, newSize = {
            width: this.element.offsetWidth * pxRatio,
            height: this.element.offsetHeight * pxRatio,
        };
        if (newSize.height === size.height &&
            newSize.width === size.width &&
            newSize.height === this.element.height &&
            newSize.width === this.element.width) {
            return;
        }
        const oldSize = Object.assign({}, size);
        this.element.width = size.width = this.element.offsetWidth * pxRatio;
        this.element.height = size.height = this.element.offsetHeight * pxRatio;
        if (this.container.started) {
            this.resizeFactor = {
                width: size.width / oldSize.width,
                height: size.height / oldSize.height,
            };
        }
    }
    async windowResize() {
        if (!this.element) {
            return;
        }
        this.resize();
        const container = this.container, needsRefresh = container.updateActualOptions();
        container.particles.setDensity();
        this._applyResizePlugins();
        if (needsRefresh) {
            await container.refresh();
        }
    }
    _applyPostDrawUpdaters(particle) {
        var _a;
        for (const updater of this._postDrawUpdaters) {
            (_a = updater.afterDraw) === null || _a === void 0 ? void 0 : _a.call(updater, particle);
        }
    }
    _applyPreDrawUpdaters(ctx, particle, radius, zOpacity, colorStyles, transform) {
        var _a;
        for (const updater of this._preDrawUpdaters) {
            if (updater.getColorStyles) {
                const { fill, stroke } = updater.getColorStyles(particle, ctx, radius, zOpacity);
                if (fill) {
                    colorStyles.fill = fill;
                }
                if (stroke) {
                    colorStyles.stroke = stroke;
                }
            }
            if (updater.getTransformValues) {
                const updaterTransform = updater.getTransformValues(particle);
                for (const key in updaterTransform) {
                    setTransformValue(transform, updaterTransform, key);
                }
            }
            (_a = updater.beforeDraw) === null || _a === void 0 ? void 0 : _a.call(updater, particle);
        }
    }
    _applyResizePlugins() {
        for (const plugin of this._resizePlugins) {
            if (plugin.resize) {
                plugin.resize();
            }
        }
    }
    _getPluginParticleColors(particle) {
        let fColor, sColor;
        for (const plugin of this._colorPlugins) {
            if (!fColor && plugin.particleFillColor) {
                fColor = rangeColorToHsl(plugin.particleFillColor(particle));
            }
            if (!sColor && plugin.particleStrokeColor) {
                sColor = rangeColorToHsl(plugin.particleStrokeColor(particle));
            }
            if (fColor && sColor) {
                break;
            }
        }
        return [fColor, sColor];
    }
    _initCover() {
        const options = this.container.actualOptions, cover = options.backgroundMask.cover, color = cover.color, coverRgb = rangeColorToRgb(color);
        if (coverRgb) {
            const coverColor = {
                r: coverRgb.r,
                g: coverRgb.g,
                b: coverRgb.b,
                a: cover.opacity,
            };
            this._coverColorStyle = getStyleFromRgb(coverColor, coverColor.a);
        }
    }
    _initStyle() {
        const element = this.element, options = this.container.actualOptions;
        if (!element) {
            return;
        }
        if (this._fullScreen) {
            this._originalStyle = deepExtend({}, element.style);
            this._setFullScreenStyle();
        }
        else {
            this._resetOriginalStyle();
        }
        for (const key in options.style) {
            if (!key || !options.style) {
                continue;
            }
            const value = options.style[key];
            if (!value) {
                continue;
            }
            element.style.setProperty(key, value, "important");
        }
    }
    async _initTrail() {
        const options = this.container.actualOptions, trail = options.particles.move.trail, trailFill = trail.fill;
        if (!trail.enable) {
            return;
        }
        if (trailFill.color) {
            const fillColor = rangeColorToRgb(trailFill.color);
            if (!fillColor) {
                return;
            }
            const trail = options.particles.move.trail;
            this._trailFill = {
                color: Object.assign({}, fillColor),
                opacity: 1 / trail.length,
            };
        }
        else {
            await new Promise((resolve, reject) => {
                if (!trailFill.image) {
                    return;
                }
                const img = document.createElement("img");
                img.addEventListener("load", () => {
                    this._trailFill = {
                        image: img,
                        opacity: 1 / trail.length,
                    };
                    resolve();
                });
                img.addEventListener("error", (evt) => {
                    reject(evt.error);
                });
                img.src = trailFill.image;
            });
        }
    }
    _paintBase(baseColor) {
        this.draw((ctx) => {
            paintBase(ctx, this.size, baseColor);
        });
    }
    _paintImage(image, opacity) {
        this.draw((ctx) => {
            paintImage(ctx, this.size, image, opacity);
        });
    }
    _repairStyle() {
        var _a, _b;
        const element = this.element;
        if (!element) {
            return;
        }
        (_a = this._mutationObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
        this._initStyle();
        this.initBackground();
        (_b = this._mutationObserver) === null || _b === void 0 ? void 0 : _b.observe(element, { attributes: true });
    }
    _resetOriginalStyle() {
        const element = this.element, originalStyle = this._originalStyle;
        if (!(element && originalStyle)) {
            return;
        }
        element.style.position = originalStyle.position;
        element.style.zIndex = originalStyle.zIndex;
        element.style.top = originalStyle.top;
        element.style.left = originalStyle.left;
        element.style.width = originalStyle.width;
        element.style.height = originalStyle.height;
    }
    _setFullScreenStyle() {
        const element = this.element;
        if (!element) {
            return;
        }
        const priority = "important";
        element.style.setProperty("position", "fixed", priority);
        element.style.setProperty("z-index", this.container.actualOptions.fullScreen.zIndex.toString(10), priority);
        element.style.setProperty("top", "0", priority);
        element.style.setProperty("left", "0", priority);
        element.style.setProperty("width", "100%", priority);
        element.style.setProperty("height", "100%", priority);
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-engine/esm/Core/Utils/EventListeners.js


function manageListener(element, event, handler, add, options) {
    if (add) {
        let addOptions = { passive: true };
        if (typeof options === "boolean") {
            addOptions.capture = options;
        }
        else if (options !== undefined) {
            addOptions = options;
        }
        element.addEventListener(event, handler, addOptions);
    }
    else {
        const removeOptions = options;
        element.removeEventListener(event, handler, removeOptions);
    }
}
class EventListeners {
    constructor(container) {
        this.container = container;
        this.canPush = true;
        this.handlers = {
            mouseMove: (e) => this.mouseTouchMove(e),
            touchStart: (e) => this.mouseTouchMove(e),
            touchMove: (e) => this.mouseTouchMove(e),
            touchEnd: () => this.mouseTouchFinish(),
            mouseLeave: () => this.mouseTouchFinish(),
            touchCancel: () => this.mouseTouchFinish(),
            touchEndClick: (e) => this.mouseTouchClick(e),
            mouseUp: (e) => this.mouseTouchClick(e),
            mouseDown: () => this.mouseDown(),
            visibilityChange: () => this.handleVisibilityChange(),
            themeChange: (e) => this.handleThemeChange(e),
            oldThemeChange: (e) => this.handleThemeChange(e),
            resize: () => this.handleWindowResize(),
        };
    }
    addListeners() {
        this.manageListeners(true);
    }
    removeListeners() {
        this.manageListeners(false);
    }
    doMouseTouchClick(e) {
        const container = this.container, options = container.actualOptions;
        if (this.canPush) {
            const mouseInteractivity = container.interactivity.mouse, mousePos = mouseInteractivity.position;
            if (!mousePos) {
                return;
            }
            mouseInteractivity.clickPosition = Object.assign({}, mousePos);
            mouseInteractivity.clickTime = new Date().getTime();
            const onClick = options.interactivity.events.onClick;
            executeOnSingleOrMultiple(onClick.mode, (mode) => this.handleClickMode(mode));
        }
        if (e.type === "touchend") {
            setTimeout(() => this.mouseTouchFinish(), 500);
        }
    }
    handleClickMode(mode) {
        this.container.handleClickMode(mode);
    }
    handleThemeChange(e) {
        const mediaEvent = e, container = this.container, options = container.options, defaultThemes = options.defaultThemes, themeName = mediaEvent.matches ? defaultThemes.dark : defaultThemes.light, theme = options.themes.find((theme) => theme.name === themeName);
        if (theme && theme.default.auto) {
            container.loadTheme(themeName);
        }
    }
    handleVisibilityChange() {
        const container = this.container, options = container.actualOptions;
        this.mouseTouchFinish();
        if (!options.pauseOnBlur) {
            return;
        }
        if (document === null || document === void 0 ? void 0 : document.hidden) {
            container.pageHidden = true;
            container.pause();
        }
        else {
            container.pageHidden = false;
            if (container.getAnimationStatus()) {
                container.play(true);
            }
            else {
                container.draw(true);
            }
        }
    }
    handleWindowResize() {
        if (this.resizeTimeout) {
            clearTimeout(this.resizeTimeout);
            delete this.resizeTimeout;
        }
        this.resizeTimeout = setTimeout(async () => { var _a; return (_a = this.container.canvas) === null || _a === void 0 ? void 0 : _a.windowResize(); }, this.container.actualOptions.interactivity.events.resize.delay * 1000);
    }
    manageListeners(add) {
        var _a;
        const handlers = this.handlers, container = this.container, options = container.actualOptions, detectType = options.interactivity.detectsOn;
        let mouseLeaveTmpEvent = mouseLeaveEvent;
        if (detectType === "window") {
            container.interactivity.element = window;
            mouseLeaveTmpEvent = mouseOutEvent;
        }
        else if (detectType === "parent" && container.canvas.element) {
            const canvasEl = container.canvas.element;
            container.interactivity.element = (_a = canvasEl.parentElement) !== null && _a !== void 0 ? _a : canvasEl.parentNode;
        }
        else {
            container.interactivity.element = container.canvas.element;
        }
        const mediaMatch = safeMatchMedia("(prefers-color-scheme: dark)");
        if (mediaMatch) {
            if (mediaMatch.addEventListener !== undefined) {
                manageListener(mediaMatch, "change", handlers.themeChange, add);
            }
            else if (mediaMatch.addListener !== undefined) {
                if (add) {
                    mediaMatch.addListener(handlers.oldThemeChange);
                }
                else {
                    mediaMatch.removeListener(handlers.oldThemeChange);
                }
            }
        }
        const interactivityEl = container.interactivity.element;
        if (!interactivityEl) {
            return;
        }
        const html = interactivityEl;
        if (options.interactivity.events.onHover.enable || options.interactivity.events.onClick.enable) {
            manageListener(interactivityEl, mouseMoveEvent, handlers.mouseMove, add);
            manageListener(interactivityEl, touchStartEvent, handlers.touchStart, add);
            manageListener(interactivityEl, touchMoveEvent, handlers.touchMove, add);
            if (!options.interactivity.events.onClick.enable) {
                manageListener(interactivityEl, touchEndEvent, handlers.touchEnd, add);
            }
            else {
                manageListener(interactivityEl, touchEndEvent, handlers.touchEndClick, add);
                manageListener(interactivityEl, mouseUpEvent, handlers.mouseUp, add);
                manageListener(interactivityEl, mouseDownEvent, handlers.mouseDown, add);
            }
            manageListener(interactivityEl, mouseLeaveTmpEvent, handlers.mouseLeave, add);
            manageListener(interactivityEl, touchCancelEvent, handlers.touchCancel, add);
        }
        if (container.canvas.element) {
            container.canvas.element.style.pointerEvents = html === container.canvas.element ? "initial" : "none";
        }
        if (options.interactivity.events.resize) {
            if (typeof ResizeObserver !== "undefined") {
                if (this.resizeObserver && !add) {
                    if (container.canvas.element) {
                        this.resizeObserver.unobserve(container.canvas.element);
                    }
                    this.resizeObserver.disconnect();
                    delete this.resizeObserver;
                }
                else if (!this.resizeObserver && add && container.canvas.element) {
                    this.resizeObserver = new ResizeObserver((entries) => {
                        const entry = entries.find((e) => e.target === container.canvas.element);
                        if (!entry) {
                            return;
                        }
                        this.handleWindowResize();
                    });
                    this.resizeObserver.observe(container.canvas.element);
                }
            }
            else {
                manageListener(window, resizeEvent, handlers.resize, add);
            }
        }
        if (document) {
            manageListener(document, visibilityChangeEvent, handlers.visibilityChange, add, false);
        }
    }
    mouseDown() {
        const interactivity = this.container.interactivity;
        if (interactivity) {
            const mouse = interactivity.mouse;
            mouse.clicking = true;
            mouse.downPosition = mouse.position;
        }
    }
    mouseTouchClick(e) {
        const container = this.container, options = container.actualOptions, mouse = container.interactivity.mouse;
        mouse.inside = true;
        let handled = false;
        const mousePosition = mouse.position;
        if (!mousePosition || !options.interactivity.events.onClick.enable) {
            return;
        }
        for (const [, plugin] of container.plugins) {
            if (!plugin.clickPositionValid) {
                continue;
            }
            handled = plugin.clickPositionValid(mousePosition);
            if (handled) {
                break;
            }
        }
        if (!handled) {
            this.doMouseTouchClick(e);
        }
        mouse.clicking = false;
    }
    mouseTouchFinish() {
        const interactivity = this.container.interactivity;
        if (!interactivity) {
            return;
        }
        const mouse = interactivity.mouse;
        delete mouse.position;
        delete mouse.clickPosition;
        delete mouse.downPosition;
        interactivity.status = mouseLeaveEvent;
        mouse.inside = false;
        mouse.clicking = false;
    }
    mouseTouchMove(e) {
        var _a, _b, _c, _d, _e, _f, _g;
        const container = this.container, options = container.actualOptions;
        if (!((_a = container.interactivity) === null || _a === void 0 ? void 0 : _a.element)) {
            return;
        }
        container.interactivity.mouse.inside = true;
        let pos;
        const canvas = container.canvas.element;
        if (e.type.startsWith("pointer")) {
            this.canPush = true;
            const mouseEvent = e;
            if (container.interactivity.element === window) {
                if (canvas) {
                    const clientRect = canvas.getBoundingClientRect();
                    pos = {
                        x: mouseEvent.clientX - clientRect.left,
                        y: mouseEvent.clientY - clientRect.top,
                    };
                }
            }
            else if (options.interactivity.detectsOn === "parent") {
                const source = mouseEvent.target, target = mouseEvent.currentTarget, canvasEl = container.canvas.element;
                if (source && target && canvasEl) {
                    const sourceRect = source.getBoundingClientRect(), targetRect = target.getBoundingClientRect(), canvasRect = canvasEl.getBoundingClientRect();
                    pos = {
                        x: mouseEvent.offsetX + 2 * sourceRect.left - (targetRect.left + canvasRect.left),
                        y: mouseEvent.offsetY + 2 * sourceRect.top - (targetRect.top + canvasRect.top),
                    };
                }
                else {
                    pos = {
                        x: (_b = mouseEvent.offsetX) !== null && _b !== void 0 ? _b : mouseEvent.clientX,
                        y: (_c = mouseEvent.offsetY) !== null && _c !== void 0 ? _c : mouseEvent.clientY,
                    };
                }
            }
            else if (mouseEvent.target === container.canvas.element) {
                pos = {
                    x: (_d = mouseEvent.offsetX) !== null && _d !== void 0 ? _d : mouseEvent.clientX,
                    y: (_e = mouseEvent.offsetY) !== null && _e !== void 0 ? _e : mouseEvent.clientY,
                };
            }
        }
        else {
            this.canPush = e.type !== "touchmove";
            const touchEvent = e, lastTouch = touchEvent.touches[touchEvent.touches.length - 1], canvasRect = canvas === null || canvas === void 0 ? void 0 : canvas.getBoundingClientRect();
            pos = {
                x: lastTouch.clientX - ((_f = canvasRect === null || canvasRect === void 0 ? void 0 : canvasRect.left) !== null && _f !== void 0 ? _f : 0),
                y: lastTouch.clientY - ((_g = canvasRect === null || canvasRect === void 0 ? void 0 : canvasRect.top) !== null && _g !== void 0 ? _g : 0),
            };
        }
        const pxRatio = container.retina.pixelRatio;
        if (pos) {
            pos.x *= pxRatio;
            pos.y *= pxRatio;
        }
        container.interactivity.mouse.position = pos;
        container.interactivity.status = mouseMoveEvent;
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-engine/esm/Core/Utils/FrameManager.js
function initDelta(value, fpsLimit = 60, smooth = false) {
    return {
        value,
        factor: smooth ? 60 / fpsLimit : (60 * value) / 1000,
    };
}
class FrameManager {
    constructor(container) {
        this.container = container;
    }
    async nextFrame(timestamp) {
        var _a;
        try {
            const container = this.container;
            if (!container.smooth &&
                container.lastFrameTime !== undefined &&
                timestamp < container.lastFrameTime + 1000 / container.fpsLimit) {
                container.draw(false);
                return;
            }
            (_a = container.lastFrameTime) !== null && _a !== void 0 ? _a : (container.lastFrameTime = timestamp);
            const delta = initDelta(timestamp - container.lastFrameTime, container.fpsLimit, container.smooth);
            container.lifeTime += delta.value;
            container.lastFrameTime = timestamp;
            if (delta.value > 1000) {
                container.draw(false);
                return;
            }
            await container.particles.draw(delta);
            if (container.duration > 0 && container.lifeTime > container.duration) {
                container.destroy();
                return;
            }
            if (container.getAnimationStatus()) {
                container.draw(false);
            }
        }
        catch (e) {
            console.error("tsParticles error in animation loop", e);
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-engine/esm/Options/Classes/OptionsColor.js
class OptionsColor {
    constructor() {
        this.value = "";
    }
    static create(source, data) {
        const color = new OptionsColor();
        color.load(source);
        if (data !== undefined) {
            if (typeof data === "string" || data instanceof Array) {
                color.load({ value: data });
            }
            else {
                color.load(data);
            }
        }
        return color;
    }
    load(data) {
        if ((data === null || data === void 0 ? void 0 : data.value) === undefined) {
            return;
        }
        this.value = data.value;
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-engine/esm/Options/Classes/Background/Background.js

class Background {
    constructor() {
        this.color = new OptionsColor();
        this.color.value = "";
        this.image = "";
        this.position = "";
        this.repeat = "";
        this.size = "";
        this.opacity = 1;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.color !== undefined) {
            this.color = OptionsColor.create(this.color, data.color);
        }
        if (data.image !== undefined) {
            this.image = data.image;
        }
        if (data.position !== undefined) {
            this.position = data.position;
        }
        if (data.repeat !== undefined) {
            this.repeat = data.repeat;
        }
        if (data.size !== undefined) {
            this.size = data.size;
        }
        if (data.opacity !== undefined) {
            this.opacity = data.opacity;
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-engine/esm/Options/Classes/BackgroundMask/BackgroundMaskCover.js

class BackgroundMaskCover {
    constructor() {
        this.color = new OptionsColor();
        this.color.value = "#fff";
        this.opacity = 1;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.color !== undefined) {
            this.color = OptionsColor.create(this.color, data.color);
        }
        if (data.opacity !== undefined) {
            this.opacity = data.opacity;
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-engine/esm/Options/Classes/BackgroundMask/BackgroundMask.js

class BackgroundMask {
    constructor() {
        this.composite = "destination-out";
        this.cover = new BackgroundMaskCover();
        this.enable = false;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.composite !== undefined) {
            this.composite = data.composite;
        }
        if (data.cover !== undefined) {
            const cover = data.cover;
            const color = (typeof data.cover === "string" ? { color: data.cover } : data.cover);
            this.cover.load(cover.color !== undefined ? cover : { color: color });
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-engine/esm/Options/Classes/FullScreen/FullScreen.js
class FullScreen {
    constructor() {
        this.enable = true;
        this.zIndex = 0;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.zIndex !== undefined) {
            this.zIndex = data.zIndex;
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-engine/esm/Options/Classes/Interactivity/Events/ClickEvent.js
class ClickEvent {
    constructor() {
        this.enable = false;
        this.mode = [];
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.mode !== undefined) {
            this.mode = data.mode;
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-engine/esm/Options/Classes/Interactivity/Events/DivEvent.js

class DivEvent {
    constructor() {
        this.selectors = [];
        this.enable = false;
        this.mode = [];
        this.type = "circle";
    }
    get el() {
        return this.elementId;
    }
    set el(value) {
        this.elementId = value;
    }
    get elementId() {
        return this.ids;
    }
    set elementId(value) {
        this.ids = value;
    }
    get ids() {
        return executeOnSingleOrMultiple(this.selectors, (t) => t.replace("#", ""));
    }
    set ids(value) {
        this.selectors = executeOnSingleOrMultiple(value, (t) => `#${t}`);
    }
    load(data) {
        var _a, _b;
        if (!data) {
            return;
        }
        const ids = (_b = (_a = data.ids) !== null && _a !== void 0 ? _a : data.elementId) !== null && _b !== void 0 ? _b : data.el;
        if (ids !== undefined) {
            this.ids = ids;
        }
        if (data.selectors !== undefined) {
            this.selectors = data.selectors;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.mode !== undefined) {
            this.mode = data.mode;
        }
        if (data.type !== undefined) {
            this.type = data.type;
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-engine/esm/Options/Classes/Interactivity/Events/Parallax.js
class Parallax {
    constructor() {
        this.enable = false;
        this.force = 2;
        this.smooth = 10;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.force !== undefined) {
            this.force = data.force;
        }
        if (data.smooth !== undefined) {
            this.smooth = data.smooth;
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-engine/esm/Options/Classes/Interactivity/Events/HoverEvent.js

class HoverEvent {
    constructor() {
        this.enable = false;
        this.mode = [];
        this.parallax = new Parallax();
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.mode !== undefined) {
            this.mode = data.mode;
        }
        this.parallax.load(data.parallax);
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-engine/esm/Options/Classes/Interactivity/Events/ResizeEvent.js
class ResizeEvent {
    constructor() {
        this.delay = 0.5;
        this.enable = true;
    }
    load(data) {
        if (data === undefined) {
            return;
        }
        if (data.delay !== undefined) {
            this.delay = data.delay;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-engine/esm/Options/Classes/Interactivity/Events/Events.js





class Events {
    constructor() {
        this.onClick = new ClickEvent();
        this.onDiv = new DivEvent();
        this.onHover = new HoverEvent();
        this.resize = new ResizeEvent();
    }
    get onclick() {
        return this.onClick;
    }
    set onclick(value) {
        this.onClick = value;
    }
    get ondiv() {
        return this.onDiv;
    }
    set ondiv(value) {
        this.onDiv = value;
    }
    get onhover() {
        return this.onHover;
    }
    set onhover(value) {
        this.onHover = value;
    }
    load(data) {
        var _a, _b, _c;
        if (!data) {
            return;
        }
        this.onClick.load((_a = data.onClick) !== null && _a !== void 0 ? _a : data.onclick);
        const onDiv = (_b = data.onDiv) !== null && _b !== void 0 ? _b : data.ondiv;
        if (onDiv !== undefined) {
            this.onDiv = executeOnSingleOrMultiple(onDiv, (t) => {
                const tmp = new DivEvent();
                tmp.load(t);
                return tmp;
            });
        }
        this.onHover.load((_c = data.onHover) !== null && _c !== void 0 ? _c : data.onhover);
        if (typeof data.resize === "boolean") {
            this.resize.enable = data.resize;
        }
        else {
            this.resize.load(data.resize);
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-engine/esm/Options/Classes/Interactivity/Modes/Modes.js
class Modes {
    constructor(engine, container) {
        this._engine = engine;
        this._container = container;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (this._container) {
            const interactors = this._engine.plugins.interactors.get(this._container);
            if (interactors) {
                for (const interactor of interactors) {
                    if (interactor.loadModeOptions) {
                        interactor.loadModeOptions(this, data);
                    }
                }
            }
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-engine/esm/Options/Classes/Interactivity/Interactivity.js


class Interactivity {
    constructor(engine, container) {
        this.detectsOn = "window";
        this.events = new Events();
        this.modes = new Modes(engine, container);
    }
    get detect_on() {
        return this.detectsOn;
    }
    set detect_on(value) {
        this.detectsOn = value;
    }
    load(data) {
        var _a;
        if (!data) {
            return;
        }
        const detectsOn = (_a = data.detectsOn) !== null && _a !== void 0 ? _a : data.detect_on;
        if (detectsOn !== undefined) {
            this.detectsOn = detectsOn;
        }
        this.events.load(data.events);
        this.modes.load(data.modes);
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-engine/esm/Options/Classes/ManualParticle.js

class ManualParticle {
    load(data) {
        var _a, _b;
        if (!data) {
            return;
        }
        if (data.position !== undefined) {
            this.position = {
                x: (_a = data.position.x) !== null && _a !== void 0 ? _a : 50,
                y: (_b = data.position.y) !== null && _b !== void 0 ? _b : 50,
            };
        }
        if (data.options !== undefined) {
            this.options = deepExtend({}, data.options);
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-engine/esm/Options/Classes/Responsive.js

class Responsive {
    constructor() {
        this.maxWidth = Infinity;
        this.options = {};
        this.mode = "canvas";
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.maxWidth !== undefined) {
            this.maxWidth = data.maxWidth;
        }
        if (data.mode !== undefined) {
            if (data.mode === "screen") {
                this.mode = "screen";
            }
            else {
                this.mode = "canvas";
            }
        }
        if (data.options !== undefined) {
            this.options = deepExtend({}, data.options);
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-engine/esm/Options/Classes/Theme/ThemeDefault.js
class ThemeDefault {
    constructor() {
        this.auto = false;
        this.mode = "any";
        this.value = false;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.auto !== undefined) {
            this.auto = data.auto;
        }
        if (data.mode !== undefined) {
            this.mode = data.mode;
        }
        if (data.value !== undefined) {
            this.value = data.value;
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-engine/esm/Options/Classes/Theme/Theme.js


class Theme {
    constructor() {
        this.name = "";
        this.default = new ThemeDefault();
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.name !== undefined) {
            this.name = data.name;
        }
        this.default.load(data.default);
        if (data.options !== undefined) {
            this.options = deepExtend({}, data.options);
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-engine/esm/Options/Classes/ColorAnimation.js

class ColorAnimation {
    constructor() {
        this.count = 0;
        this.enable = false;
        this.offset = 0;
        this.speed = 1;
        this.decay = 0;
        this.sync = true;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.count !== undefined) {
            this.count = setRangeValue(data.count);
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.offset !== undefined) {
            this.offset = setRangeValue(data.offset);
        }
        if (data.speed !== undefined) {
            this.speed = setRangeValue(data.speed);
        }
        if (data.decay !== undefined) {
            this.decay = setRangeValue(data.decay);
        }
        if (data.sync !== undefined) {
            this.sync = data.sync;
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-engine/esm/Options/Classes/HslAnimation.js

class HslAnimation {
    constructor() {
        this.h = new ColorAnimation();
        this.s = new ColorAnimation();
        this.l = new ColorAnimation();
    }
    load(data) {
        if (!data) {
            return;
        }
        this.h.load(data.h);
        this.s.load(data.s);
        this.l.load(data.l);
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-engine/esm/Options/Classes/AnimatableColor.js


class AnimatableColor extends OptionsColor {
    constructor() {
        super();
        this.animation = new HslAnimation();
    }
    static create(source, data) {
        const color = new AnimatableColor();
        color.load(source);
        if (data !== undefined) {
            if (typeof data === "string" || data instanceof Array) {
                color.load({ value: data });
            }
            else {
                color.load(data);
            }
        }
        return color;
    }
    load(data) {
        super.load(data);
        if (!data) {
            return;
        }
        const colorAnimation = data.animation;
        if (colorAnimation !== undefined) {
            if (colorAnimation.enable !== undefined) {
                this.animation.h.load(colorAnimation);
            }
            else {
                this.animation.load(data.animation);
            }
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-engine/esm/Options/Classes/Particles/Collisions/CollisionsAbsorb.js
class CollisionsAbsorb {
    constructor() {
        this.speed = 2;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.speed !== undefined) {
            this.speed = data.speed;
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-engine/esm/Options/Classes/Particles/Collisions/CollisionsOverlap.js
class CollisionsOverlap {
    constructor() {
        this.enable = true;
        this.retries = 0;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.retries !== undefined) {
            this.retries = data.retries;
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-engine/esm/Options/Classes/Random.js
class Random {
    constructor() {
        this.enable = false;
        this.minimumValue = 0;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.minimumValue !== undefined) {
            this.minimumValue = data.minimumValue;
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-engine/esm/Options/Classes/ValueWithRandom.js


class ValueWithRandom {
    constructor() {
        this.random = new Random();
        this.value = 0;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (typeof data.random === "boolean") {
            this.random.enable = data.random;
        }
        else {
            this.random.load(data.random);
        }
        if (data.value !== undefined) {
            this.value = setRangeValue(data.value, this.random.enable ? this.random.minimumValue : undefined);
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-engine/esm/Options/Classes/Particles/Bounce/ParticlesBounceFactor.js

class ParticlesBounceFactor extends ValueWithRandom {
    constructor() {
        super();
        this.random.minimumValue = 0.1;
        this.value = 1;
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-engine/esm/Options/Classes/Particles/Bounce/ParticlesBounce.js

class ParticlesBounce {
    constructor() {
        this.horizontal = new ParticlesBounceFactor();
        this.vertical = new ParticlesBounceFactor();
    }
    load(data) {
        if (!data) {
            return;
        }
        this.horizontal.load(data.horizontal);
        this.vertical.load(data.vertical);
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-engine/esm/Options/Classes/Particles/Collisions/Collisions.js



class Collisions {
    constructor() {
        this.absorb = new CollisionsAbsorb();
        this.bounce = new ParticlesBounce();
        this.enable = false;
        this.mode = "bounce";
        this.overlap = new CollisionsOverlap();
    }
    load(data) {
        if (!data) {
            return;
        }
        this.absorb.load(data.absorb);
        this.bounce.load(data.bounce);
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.mode !== undefined) {
            this.mode = data.mode;
        }
        this.overlap.load(data.overlap);
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-engine/esm/Options/Classes/Particles/Move/MoveAngle.js

class MoveAngle {
    constructor() {
        this.offset = 0;
        this.value = 90;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.offset !== undefined) {
            this.offset = setRangeValue(data.offset);
        }
        if (data.value !== undefined) {
            this.value = setRangeValue(data.value);
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-engine/esm/Options/Classes/Particles/Move/MoveAttract.js

class MoveAttract {
    constructor() {
        this.distance = 200;
        this.enable = false;
        this.rotate = {
            x: 3000,
            y: 3000,
        };
    }
    get rotateX() {
        return this.rotate.x;
    }
    set rotateX(value) {
        this.rotate.x = value;
    }
    get rotateY() {
        return this.rotate.y;
    }
    set rotateY(value) {
        this.rotate.y = value;
    }
    load(data) {
        var _a, _b, _c, _d;
        if (!data) {
            return;
        }
        if (data.distance !== undefined) {
            this.distance = setRangeValue(data.distance);
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        const rotateX = (_b = (_a = data.rotate) === null || _a === void 0 ? void 0 : _a.x) !== null && _b !== void 0 ? _b : data.rotateX;
        if (rotateX !== undefined) {
            this.rotate.x = rotateX;
        }
        const rotateY = (_d = (_c = data.rotate) === null || _c === void 0 ? void 0 : _c.y) !== null && _d !== void 0 ? _d : data.rotateY;
        if (rotateY !== undefined) {
            this.rotate.y = rotateY;
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-engine/esm/Options/Classes/Particles/Move/MoveCenter.js
class MoveCenter {
    constructor() {
        this.x = 50;
        this.y = 50;
        this.mode = "percent";
        this.radius = 0;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.x !== undefined) {
            this.x = data.x;
        }
        if (data.y !== undefined) {
            this.y = data.y;
        }
        if (data.mode !== undefined) {
            this.mode = data.mode;
        }
        if (data.radius !== undefined) {
            this.radius = data.radius;
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-engine/esm/Options/Classes/Particles/Move/MoveGravity.js

class MoveGravity {
    constructor() {
        this.acceleration = 9.81;
        this.enable = false;
        this.inverse = false;
        this.maxSpeed = 50;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.acceleration !== undefined) {
            this.acceleration = setRangeValue(data.acceleration);
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.inverse !== undefined) {
            this.inverse = data.inverse;
        }
        if (data.maxSpeed !== undefined) {
            this.maxSpeed = setRangeValue(data.maxSpeed);
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-engine/esm/Options/Classes/Particles/Move/Path/MovePath.js


class MovePath {
    constructor() {
        this.clamp = true;
        this.delay = new ValueWithRandom();
        this.enable = false;
        this.options = {};
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.clamp !== undefined) {
            this.clamp = data.clamp;
        }
        this.delay.load(data.delay);
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        this.generator = data.generator;
        if (data.options) {
            this.options = deepExtend(this.options, data.options);
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-engine/esm/Options/Classes/Particles/Move/MoveTrailFill.js

class MoveTrailFill {
    load(data) {
        if (!data) {
            return;
        }
        if (data.color !== undefined) {
            this.color = OptionsColor.create(this.color, data.color);
        }
        if (data.image !== undefined) {
            this.image = data.image;
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-engine/esm/Options/Classes/Particles/Move/MoveTrail.js

class MoveTrail {
    constructor() {
        this.enable = false;
        this.length = 10;
        this.fill = new MoveTrailFill();
    }
    get fillColor() {
        return this.fill.color;
    }
    set fillColor(value) {
        this.fill.load({ color: value });
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.fill !== undefined || data.fillColor !== undefined) {
            this.fill.load(data.fill || { color: data.fillColor });
        }
        if (data.length !== undefined) {
            this.length = data.length;
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-engine/esm/Options/Classes/Particles/Move/OutModes.js
class OutModes {
    constructor() {
        this.default = "out";
    }
    load(data) {
        var _a, _b, _c, _d;
        if (!data) {
            return;
        }
        if (data.default !== undefined) {
            this.default = data.default;
        }
        this.bottom = (_a = data.bottom) !== null && _a !== void 0 ? _a : data.default;
        this.left = (_b = data.left) !== null && _b !== void 0 ? _b : data.default;
        this.right = (_c = data.right) !== null && _c !== void 0 ? _c : data.default;
        this.top = (_d = data.top) !== null && _d !== void 0 ? _d : data.default;
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-engine/esm/Options/Classes/Particles/Move/Spin.js


class Spin {
    constructor() {
        this.acceleration = 0;
        this.enable = false;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.acceleration !== undefined) {
            this.acceleration = setRangeValue(data.acceleration);
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        this.position = data.position ? deepExtend({}, data.position) : undefined;
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-engine/esm/Options/Classes/Particles/Move/Move.js









class Move {
    constructor() {
        this.angle = new MoveAngle();
        this.attract = new MoveAttract();
        this.center = new MoveCenter();
        this.decay = 0;
        this.distance = {};
        this.direction = "none";
        this.drift = 0;
        this.enable = false;
        this.gravity = new MoveGravity();
        this.path = new MovePath();
        this.outModes = new OutModes();
        this.random = false;
        this.size = false;
        this.speed = 2;
        this.spin = new Spin();
        this.straight = false;
        this.trail = new MoveTrail();
        this.vibrate = false;
        this.warp = false;
    }
    get bounce() {
        return this.collisions;
    }
    set bounce(value) {
        this.collisions = value;
    }
    get collisions() {
        return false;
    }
    set collisions(_) {
    }
    get noise() {
        return this.path;
    }
    set noise(value) {
        this.path = value;
    }
    get outMode() {
        return this.outModes.default;
    }
    set outMode(value) {
        this.outModes.default = value;
    }
    get out_mode() {
        return this.outMode;
    }
    set out_mode(value) {
        this.outMode = value;
    }
    load(data) {
        var _a, _b, _c;
        if (!data) {
            return;
        }
        this.angle.load(typeof data.angle === "number" ? { value: data.angle } : data.angle);
        this.attract.load(data.attract);
        this.center.load(data.center);
        if (data.decay !== undefined) {
            this.decay = setRangeValue(data.decay);
        }
        if (data.direction !== undefined) {
            this.direction = data.direction;
        }
        if (data.distance !== undefined) {
            this.distance =
                typeof data.distance === "number"
                    ? {
                        horizontal: data.distance,
                        vertical: data.distance,
                    }
                    : Object.assign({}, data.distance);
        }
        if (data.drift !== undefined) {
            this.drift = setRangeValue(data.drift);
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        this.gravity.load(data.gravity);
        const outModes = (_b = (_a = data.outModes) !== null && _a !== void 0 ? _a : data.outMode) !== null && _b !== void 0 ? _b : data.out_mode;
        if (outModes !== undefined) {
            if (typeof outModes === "object") {
                this.outModes.load(outModes);
            }
            else {
                this.outModes.load({
                    default: outModes,
                });
            }
        }
        this.path.load((_c = data.path) !== null && _c !== void 0 ? _c : data.noise);
        if (data.random !== undefined) {
            this.random = data.random;
        }
        if (data.size !== undefined) {
            this.size = data.size;
        }
        if (data.speed !== undefined) {
            this.speed = setRangeValue(data.speed);
        }
        this.spin.load(data.spin);
        if (data.straight !== undefined) {
            this.straight = data.straight;
        }
        this.trail.load(data.trail);
        if (data.vibrate !== undefined) {
            this.vibrate = data.vibrate;
        }
        if (data.warp !== undefined) {
            this.warp = data.warp;
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-engine/esm/Options/Classes/AnimationOptions.js

class AnimationOptions {
    constructor() {
        this.count = 0;
        this.enable = false;
        this.speed = 1;
        this.decay = 0;
        this.sync = false;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.count !== undefined) {
            this.count = setRangeValue(data.count);
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.speed !== undefined) {
            this.speed = setRangeValue(data.speed);
        }
        if (data.decay !== undefined) {
            this.decay = setRangeValue(data.decay);
        }
        if (data.sync !== undefined) {
            this.sync = data.sync;
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-engine/esm/Options/Classes/Particles/Opacity/OpacityAnimation.js

class OpacityAnimation extends AnimationOptions {
    constructor() {
        super();
        this.destroy = "none";
        this.enable = false;
        this.speed = 2;
        this.startValue = "random";
        this.sync = false;
    }
    get opacity_min() {
        return this.minimumValue;
    }
    set opacity_min(value) {
        this.minimumValue = value;
    }
    load(data) {
        var _a;
        if (!data) {
            return;
        }
        super.load(data);
        if (data.destroy !== undefined) {
            this.destroy = data.destroy;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        this.minimumValue = (_a = data.minimumValue) !== null && _a !== void 0 ? _a : data.opacity_min;
        if (data.speed !== undefined) {
            this.speed = data.speed;
        }
        if (data.startValue !== undefined) {
            this.startValue = data.startValue;
        }
        if (data.sync !== undefined) {
            this.sync = data.sync;
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-engine/esm/Options/Classes/Particles/Opacity/Opacity.js



class Opacity extends ValueWithRandom {
    constructor() {
        super();
        this.animation = new OpacityAnimation();
        this.random.minimumValue = 0.1;
        this.value = 1;
    }
    get anim() {
        return this.animation;
    }
    set anim(value) {
        this.animation = value;
    }
    load(data) {
        var _a;
        if (!data) {
            return;
        }
        super.load(data);
        const animation = (_a = data.animation) !== null && _a !== void 0 ? _a : data.anim;
        if (animation !== undefined) {
            this.animation.load(animation);
            this.value = setRangeValue(this.value, this.animation.enable ? this.animation.minimumValue : undefined);
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-engine/esm/Options/Classes/Particles/Number/ParticlesDensity.js
class ParticlesDensity {
    constructor() {
        this.enable = false;
        this.width = 1920;
        this.height = 1080;
    }
    get area() {
        return this.width;
    }
    set area(value) {
        this.width = value;
    }
    get factor() {
        return this.height;
    }
    set factor(value) {
        this.height = value;
    }
    get value_area() {
        return this.area;
    }
    set value_area(value) {
        this.area = value;
    }
    load(data) {
        var _a, _b, _c;
        if (!data) {
            return;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        const width = (_b = (_a = data.width) !== null && _a !== void 0 ? _a : data.area) !== null && _b !== void 0 ? _b : data.value_area;
        if (width !== undefined) {
            this.width = width;
        }
        const height = (_c = data.height) !== null && _c !== void 0 ? _c : data.factor;
        if (height !== undefined) {
            this.height = height;
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-engine/esm/Options/Classes/Particles/Number/ParticlesNumber.js

class ParticlesNumber {
    constructor() {
        this.density = new ParticlesDensity();
        this.limit = 0;
        this.value = 100;
    }
    get max() {
        return this.limit;
    }
    set max(value) {
        this.limit = value;
    }
    load(data) {
        var _a;
        if (!data) {
            return;
        }
        this.density.load(data.density);
        const limit = (_a = data.limit) !== null && _a !== void 0 ? _a : data.max;
        if (limit !== undefined) {
            this.limit = limit;
        }
        if (data.value !== undefined) {
            this.value = data.value;
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-engine/esm/Options/Classes/Particles/Shadow.js

class Shadow {
    constructor() {
        this.blur = 0;
        this.color = new OptionsColor();
        this.enable = false;
        this.offset = {
            x: 0,
            y: 0,
        };
        this.color.value = "#000";
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.blur !== undefined) {
            this.blur = data.blur;
        }
        this.color = OptionsColor.create(this.color, data.color);
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.offset === undefined) {
            return;
        }
        if (data.offset.x !== undefined) {
            this.offset.x = data.offset.x;
        }
        if (data.offset.y !== undefined) {
            this.offset.y = data.offset.y;
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-engine/esm/Options/Classes/Particles/Shape/Shape.js

const charKey = "character", charAltKey = "char", imageKey = "image", imageAltKey = "images", polygonKey = "polygon", polygonAltKey = "star";
class Shape {
    constructor() {
        this.options = {};
        this.type = "circle";
    }
    get character() {
        var _a;
        return ((_a = this.options[charKey]) !== null && _a !== void 0 ? _a : this.options[charAltKey]);
    }
    set character(value) {
        this.options[charAltKey] = this.options[charKey] = value;
    }
    get custom() {
        return this.options;
    }
    set custom(value) {
        this.options = value;
    }
    get image() {
        var _a;
        return ((_a = this.options[imageKey]) !== null && _a !== void 0 ? _a : this.options[imageAltKey]);
    }
    set image(value) {
        this.options[imageAltKey] = this.options[imageKey] = value;
    }
    get images() {
        return this.image;
    }
    set images(value) {
        this.image = value;
    }
    get polygon() {
        var _a;
        return ((_a = this.options[polygonKey]) !== null && _a !== void 0 ? _a : this.options[polygonAltKey]);
    }
    set polygon(value) {
        this.options[polygonAltKey] = this.options[polygonKey] = value;
    }
    get stroke() {
        return [];
    }
    set stroke(_value) {
    }
    load(data) {
        var _a, _b, _c;
        if (!data) {
            return;
        }
        const options = (_a = data.options) !== null && _a !== void 0 ? _a : data.custom;
        if (options !== undefined) {
            for (const shape in options) {
                const item = options[shape];
                if (item) {
                    this.options[shape] = deepExtend((_b = this.options[shape]) !== null && _b !== void 0 ? _b : {}, item);
                }
            }
        }
        this.loadShape(data.character, charKey, charAltKey, true);
        this.loadShape(data.polygon, polygonKey, polygonAltKey, false);
        this.loadShape((_c = data.image) !== null && _c !== void 0 ? _c : data.images, imageKey, imageAltKey, true);
        if (data.type !== undefined) {
            this.type = data.type;
        }
    }
    loadShape(item, mainKey, altKey, altOverride) {
        var _a, _b;
        if (!item) {
            return;
        }
        const isArray = item instanceof Array;
        const emptyValue = isArray ? [] : {}, mainDifferentValues = isArray !== this.options[mainKey] instanceof Array, altDifferentValues = isArray !== this.options[altKey] instanceof Array;
        if (mainDifferentValues) {
            this.options[mainKey] = emptyValue;
        }
        if (altDifferentValues && altOverride) {
            this.options[altKey] = emptyValue;
        }
        this.options[mainKey] = deepExtend((_a = this.options[mainKey]) !== null && _a !== void 0 ? _a : emptyValue, item);
        if (!this.options[altKey] || altOverride) {
            this.options[altKey] = deepExtend((_b = this.options[altKey]) !== null && _b !== void 0 ? _b : emptyValue, item);
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-engine/esm/Options/Classes/Particles/Size/SizeAnimation.js

class SizeAnimation extends AnimationOptions {
    constructor() {
        super();
        this.destroy = "none";
        this.enable = false;
        this.speed = 5;
        this.startValue = "random";
        this.sync = false;
    }
    get size_min() {
        return this.minimumValue;
    }
    set size_min(value) {
        this.minimumValue = value;
    }
    load(data) {
        var _a;
        super.load(data);
        if (!data) {
            return;
        }
        if (data.destroy !== undefined) {
            this.destroy = data.destroy;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        this.minimumValue = (_a = data.minimumValue) !== null && _a !== void 0 ? _a : data.size_min;
        if (data.speed !== undefined) {
            this.speed = data.speed;
        }
        if (data.startValue !== undefined) {
            this.startValue = data.startValue;
        }
        if (data.sync !== undefined) {
            this.sync = data.sync;
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-engine/esm/Options/Classes/Particles/Size/Size.js



class Size extends ValueWithRandom {
    constructor() {
        super();
        this.animation = new SizeAnimation();
        this.random.minimumValue = 1;
        this.value = 3;
    }
    get anim() {
        return this.animation;
    }
    set anim(value) {
        this.animation = value;
    }
    load(data) {
        var _a;
        super.load(data);
        if (!data) {
            return;
        }
        const animation = (_a = data.animation) !== null && _a !== void 0 ? _a : data.anim;
        if (animation !== undefined) {
            this.animation.load(animation);
            this.value = setRangeValue(this.value, this.animation.enable ? this.animation.minimumValue : undefined);
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-engine/esm/Options/Classes/Particles/Stroke.js


class Stroke {
    constructor() {
        this.width = 0;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.color !== undefined) {
            this.color = AnimatableColor.create(this.color, data.color);
        }
        if (data.width !== undefined) {
            this.width = setRangeValue(data.width);
        }
        if (data.opacity !== undefined) {
            this.opacity = setRangeValue(data.opacity);
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-engine/esm/Options/Classes/Particles/ZIndex/ZIndex.js

class ZIndex extends ValueWithRandom {
    constructor() {
        super();
        this.opacityRate = 1;
        this.sizeRate = 1;
        this.velocityRate = 1;
    }
    load(data) {
        super.load(data);
        if (!data) {
            return;
        }
        if (data.opacityRate !== undefined) {
            this.opacityRate = data.opacityRate;
        }
        if (data.sizeRate !== undefined) {
            this.sizeRate = data.sizeRate;
        }
        if (data.velocityRate !== undefined) {
            this.velocityRate = data.velocityRate;
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-engine/esm/Options/Classes/Particles/ParticlesOptions.js












class ParticlesOptions {
    constructor(engine, container) {
        this._engine = engine;
        this._container = container;
        this.bounce = new ParticlesBounce();
        this.collisions = new Collisions();
        this.color = new AnimatableColor();
        this.color.value = "#fff";
        this.groups = {};
        this.move = new Move();
        this.number = new ParticlesNumber();
        this.opacity = new Opacity();
        this.reduceDuplicates = false;
        this.shadow = new Shadow();
        this.shape = new Shape();
        this.size = new Size();
        this.stroke = new Stroke();
        this.zIndex = new ZIndex();
    }
    load(data) {
        var _a, _b, _c, _d, _e, _f;
        if (!data) {
            return;
        }
        this.bounce.load(data.bounce);
        this.color.load(AnimatableColor.create(this.color, data.color));
        if (data.groups !== undefined) {
            for (const group in data.groups) {
                const item = data.groups[group];
                if (item !== undefined) {
                    this.groups[group] = deepExtend((_a = this.groups[group]) !== null && _a !== void 0 ? _a : {}, item);
                }
            }
        }
        this.move.load(data.move);
        this.number.load(data.number);
        this.opacity.load(data.opacity);
        if (data.reduceDuplicates !== undefined) {
            this.reduceDuplicates = data.reduceDuplicates;
        }
        this.shape.load(data.shape);
        this.size.load(data.size);
        this.shadow.load(data.shadow);
        this.zIndex.load(data.zIndex);
        const collisions = (_c = (_b = data.move) === null || _b === void 0 ? void 0 : _b.collisions) !== null && _c !== void 0 ? _c : (_d = data.move) === null || _d === void 0 ? void 0 : _d.bounce;
        if (collisions !== undefined) {
            this.collisions.enable = collisions;
        }
        this.collisions.load(data.collisions);
        if (data.interactivity !== undefined) {
            this.interactivity = deepExtend({}, data.interactivity);
        }
        const strokeToLoad = (_e = data.stroke) !== null && _e !== void 0 ? _e : (_f = data.shape) === null || _f === void 0 ? void 0 : _f.stroke;
        if (strokeToLoad) {
            this.stroke = executeOnSingleOrMultiple(strokeToLoad, (t) => {
                const tmp = new Stroke();
                tmp.load(t);
                return tmp;
            });
        }
        if (this._container) {
            const updaters = this._engine.plugins.updaters.get(this._container);
            if (updaters) {
                for (const updater of updaters) {
                    if (updater.loadOptions) {
                        updater.loadOptions(this, data);
                    }
                }
            }
            const interactors = this._engine.plugins.interactors.get(this._container);
            if (interactors) {
                for (const interactor of interactors) {
                    if (interactor.loadParticlesOptions) {
                        interactor.loadParticlesOptions(this, data);
                    }
                }
            }
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-engine/esm/Utils/OptionsUtils.js

function loadOptions(options, ...sourceOptionsArr) {
    for (const sourceOptions of sourceOptionsArr) {
        options.load(sourceOptions);
    }
}
function loadParticlesOptions(engine, container, ...sourceOptionsArr) {
    const options = new ParticlesOptions(engine, container);
    loadOptions(options, ...sourceOptionsArr);
    return options;
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-engine/esm/Options/Classes/Options.js










class Options {
    constructor(engine, container) {
        this._engine = engine;
        this._container = container;
        this.autoPlay = true;
        this.background = new Background();
        this.backgroundMask = new BackgroundMask();
        this.defaultThemes = {};
        this.delay = 0;
        this.fullScreen = new FullScreen();
        this.detectRetina = true;
        this.duration = 0;
        this.fpsLimit = 120;
        this.interactivity = new Interactivity(engine, container);
        this.manualParticles = [];
        this.particles = loadParticlesOptions(this._engine, this._container);
        this.pauseOnBlur = true;
        this.pauseOnOutsideViewport = true;
        this.responsive = [];
        this.smooth = false;
        this.style = {};
        this.themes = [];
        this.zLayers = 100;
    }
    get backgroundMode() {
        return this.fullScreen;
    }
    set backgroundMode(value) {
        this.fullScreen.load(value);
    }
    get fps_limit() {
        return this.fpsLimit;
    }
    set fps_limit(value) {
        this.fpsLimit = value;
    }
    get retina_detect() {
        return this.detectRetina;
    }
    set retina_detect(value) {
        this.detectRetina = value;
    }
    load(data) {
        var _a, _b, _c, _d, _e;
        if (!data) {
            return;
        }
        if (data.preset !== undefined) {
            executeOnSingleOrMultiple(data.preset, (preset) => this._importPreset(preset));
        }
        if (data.autoPlay !== undefined) {
            this.autoPlay = data.autoPlay;
        }
        if (data.delay !== undefined) {
            this.delay = setRangeValue(data.delay);
        }
        const detectRetina = (_a = data.detectRetina) !== null && _a !== void 0 ? _a : data.retina_detect;
        if (detectRetina !== undefined) {
            this.detectRetina = detectRetina;
        }
        if (data.duration !== undefined) {
            this.duration = setRangeValue(data.duration);
        }
        const fpsLimit = (_b = data.fpsLimit) !== null && _b !== void 0 ? _b : data.fps_limit;
        if (fpsLimit !== undefined) {
            this.fpsLimit = fpsLimit;
        }
        if (data.pauseOnBlur !== undefined) {
            this.pauseOnBlur = data.pauseOnBlur;
        }
        if (data.pauseOnOutsideViewport !== undefined) {
            this.pauseOnOutsideViewport = data.pauseOnOutsideViewport;
        }
        if (data.zLayers !== undefined) {
            this.zLayers = data.zLayers;
        }
        this.background.load(data.background);
        const fullScreen = (_c = data.fullScreen) !== null && _c !== void 0 ? _c : data.backgroundMode;
        if (typeof fullScreen === "boolean") {
            this.fullScreen.enable = fullScreen;
        }
        else {
            this.fullScreen.load(fullScreen);
        }
        this.backgroundMask.load(data.backgroundMask);
        this.interactivity.load(data.interactivity);
        if (data.manualParticles !== undefined) {
            this.manualParticles = data.manualParticles.map((t) => {
                const tmp = new ManualParticle();
                tmp.load(t);
                return tmp;
            });
        }
        this.particles.load(data.particles);
        this.style = deepExtend(this.style, data.style);
        this._engine.plugins.loadOptions(this, data);
        if (data.smooth !== undefined) {
            this.smooth = data.smooth;
        }
        const interactors = this._engine.plugins.interactors.get(this._container);
        if (interactors) {
            for (const interactor of interactors) {
                if (interactor.loadOptions) {
                    interactor.loadOptions(this, data);
                }
            }
        }
        if (data.responsive !== undefined) {
            for (const responsive of data.responsive) {
                const optResponsive = new Responsive();
                optResponsive.load(responsive);
                this.responsive.push(optResponsive);
            }
        }
        this.responsive.sort((a, b) => a.maxWidth - b.maxWidth);
        if (data.themes !== undefined) {
            for (const theme of data.themes) {
                const existingTheme = this.themes.find((t) => t.name === theme.name);
                if (!existingTheme) {
                    const optTheme = new Theme();
                    optTheme.load(theme);
                    this.themes.push(optTheme);
                }
                else {
                    existingTheme.load(theme);
                }
            }
        }
        this.defaultThemes.dark = (_d = this._findDefaultTheme("dark")) === null || _d === void 0 ? void 0 : _d.name;
        this.defaultThemes.light = (_e = this._findDefaultTheme("light")) === null || _e === void 0 ? void 0 : _e.name;
    }
    setResponsive(width, pxRatio, defaultOptions) {
        this.load(defaultOptions);
        const responsiveOptions = this.responsive.find((t) => t.mode === "screen" && screen ? t.maxWidth > screen.availWidth : t.maxWidth * pxRatio > width);
        this.load(responsiveOptions === null || responsiveOptions === void 0 ? void 0 : responsiveOptions.options);
        return responsiveOptions === null || responsiveOptions === void 0 ? void 0 : responsiveOptions.maxWidth;
    }
    setTheme(name) {
        if (name) {
            const chosenTheme = this.themes.find((theme) => theme.name === name);
            if (chosenTheme) {
                this.load(chosenTheme.options);
            }
        }
        else {
            const mediaMatch = safeMatchMedia("(prefers-color-scheme: dark)"), clientDarkMode = mediaMatch && mediaMatch.matches, defaultTheme = this._findDefaultTheme(clientDarkMode ? "dark" : "light");
            if (defaultTheme) {
                this.load(defaultTheme.options);
            }
        }
    }
    _findDefaultTheme(mode) {
        var _a;
        return ((_a = this.themes.find((theme) => theme.default.value && theme.default.mode === mode)) !== null && _a !== void 0 ? _a : this.themes.find((theme) => theme.default.value && theme.default.mode === "any"));
    }
    _importPreset(preset) {
        this.load(this._engine.plugins.getPreset(preset));
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-engine/esm/Core/Utils/InteractionManager.js
class InteractionManager {
    constructor(engine, container) {
        this.container = container;
        this._engine = engine;
        this._interactors = this._engine.plugins.getInteractors(this.container, true);
        this._externalInteractors = [];
        this._particleInteractors = [];
    }
    async externalInteract(delta) {
        for (const interactor of this._externalInteractors) {
            if (interactor.isEnabled()) {
                await interactor.interact(delta);
            }
        }
    }
    handleClickMode(mode) {
        for (const interactor of this._externalInteractors) {
            if (interactor.handleClickMode) {
                interactor.handleClickMode(mode);
            }
        }
    }
    init() {
        this._externalInteractors = [];
        this._particleInteractors = [];
        for (const interactor of this._interactors) {
            switch (interactor.type) {
                case "external":
                    this._externalInteractors.push(interactor);
                    break;
                case "particles":
                    this._particleInteractors.push(interactor);
                    break;
            }
            interactor.init();
        }
    }
    async particlesInteract(particle, delta) {
        for (const interactor of this._externalInteractors) {
            interactor.clear(particle, delta);
        }
        for (const interactor of this._particleInteractors) {
            if (interactor.isEnabled(particle)) {
                await interactor.interact(particle, delta);
            }
        }
    }
    async reset(particle) {
        for (const interactor of this._externalInteractors) {
            if (interactor.isEnabled()) {
                await interactor.reset(particle);
            }
        }
        for (const interactor of this._particleInteractors) {
            if (interactor.isEnabled(particle)) {
                await interactor.reset(particle);
            }
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-engine/esm/Core/Particle.js








const fixOutMode = (data) => {
    if (!isInArray(data.outMode, data.checkModes)) {
        return;
    }
    if (data.coord > data.maxCoord - data.radius * 2) {
        data.setCb(-data.radius);
    }
    else if (data.coord < data.radius * 2) {
        data.setCb(data.radius);
    }
};
class Particle {
    constructor(engine, id, container, position, overrideOptions, group) {
        this.container = container;
        this._engine = engine;
        this.init(id, position, overrideOptions, group);
    }
    destroy(override) {
        var _a;
        if (this.unbreakable || this.destroyed) {
            return;
        }
        this.destroyed = true;
        this.bubble.inRange = false;
        this.slow.inRange = false;
        for (const [, plugin] of this.container.plugins) {
            if (plugin.particleDestroyed) {
                plugin.particleDestroyed(this, override);
            }
        }
        for (const updater of this.container.particles.updaters) {
            if (updater.particleDestroyed) {
                updater.particleDestroyed(this, override);
            }
        }
        (_a = this.pathGenerator) === null || _a === void 0 ? void 0 : _a.reset(this);
    }
    draw(delta) {
        const container = this.container;
        for (const [, plugin] of container.plugins) {
            container.canvas.drawParticlePlugin(plugin, this, delta);
        }
        container.canvas.drawParticle(this, delta);
    }
    getFillColor() {
        var _a;
        return this._getRollColor((_a = this.bubble.color) !== null && _a !== void 0 ? _a : getHslFromAnimation(this.color));
    }
    getMass() {
        return (this.getRadius() ** 2 * Math.PI) / 2;
    }
    getPosition() {
        return {
            x: this.position.x + this.offset.x,
            y: this.position.y + this.offset.y,
            z: this.position.z,
        };
    }
    getRadius() {
        var _a;
        return (_a = this.bubble.radius) !== null && _a !== void 0 ? _a : this.size.value;
    }
    getStrokeColor() {
        var _a;
        return this._getRollColor((_a = this.bubble.color) !== null && _a !== void 0 ? _a : getHslFromAnimation(this.strokeColor));
    }
    init(id, position, overrideOptions, group) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const container = this.container, engine = this._engine;
        this.id = id;
        this.group = group;
        this.fill = true;
        this.pathRotation = false;
        this.close = true;
        this.lastPathTime = 0;
        this.destroyed = false;
        this.unbreakable = false;
        this.rotation = 0;
        this.misplaced = false;
        this.retina = {
            maxDistance: {},
        };
        this.outType = "normal";
        this.ignoresResizeRatio = true;
        const pxRatio = container.retina.pixelRatio, mainOptions = container.actualOptions, particlesOptions = loadParticlesOptions(this._engine, container, mainOptions.particles), shapeType = particlesOptions.shape.type, { reduceDuplicates } = particlesOptions;
        this.shape = itemFromSingleOrMultiple(shapeType, this.id, reduceDuplicates);
        const shapeOptions = particlesOptions.shape;
        if (overrideOptions && overrideOptions.shape && overrideOptions.shape.type) {
            const overrideShapeType = overrideOptions.shape.type, shape = itemFromSingleOrMultiple(overrideShapeType, this.id, reduceDuplicates);
            if (shape) {
                this.shape = shape;
                shapeOptions.load(overrideOptions.shape);
            }
        }
        this.shapeData = this._loadShapeData(shapeOptions, reduceDuplicates);
        particlesOptions.load(overrideOptions);
        particlesOptions.load((_a = this.shapeData) === null || _a === void 0 ? void 0 : _a.particles);
        this.interactivity = new Interactivity(engine, container);
        this.interactivity.load(container.actualOptions.interactivity);
        this.interactivity.load(particlesOptions.interactivity);
        this.fill = (_c = (_b = this.shapeData) === null || _b === void 0 ? void 0 : _b.fill) !== null && _c !== void 0 ? _c : this.fill;
        this.close = (_e = (_d = this.shapeData) === null || _d === void 0 ? void 0 : _d.close) !== null && _e !== void 0 ? _e : this.close;
        this.options = particlesOptions;
        const pathOptions = this.options.move.path;
        this.pathDelay = getValue(pathOptions.delay) * 1000;
        if (pathOptions.generator) {
            this.pathGenerator = this._engine.plugins.getPathGenerator(pathOptions.generator);
            if (this.pathGenerator && container.addPath(pathOptions.generator, this.pathGenerator)) {
                this.pathGenerator.init(container);
            }
        }
        const zIndexValue = getRangeValue(this.options.zIndex.value);
        container.retina.initParticle(this);
        const sizeOptions = this.options.size, sizeRange = sizeOptions.value, sizeAnimation = sizeOptions.animation;
        this.size = {
            enable: sizeOptions.animation.enable,
            value: getRangeValue(sizeOptions.value) * container.retina.pixelRatio,
            max: getRangeMax(sizeRange) * pxRatio,
            min: getRangeMin(sizeRange) * pxRatio,
            loops: 0,
            maxLoops: getRangeValue(sizeOptions.animation.count),
        };
        if (sizeAnimation.enable) {
            this.size.status = "increasing";
            this.size.decay = 1 - getRangeValue(sizeAnimation.decay);
            switch (sizeAnimation.startValue) {
                case "min":
                    this.size.value = this.size.min;
                    this.size.status = "increasing";
                    break;
                case "random":
                    this.size.value = randomInRange(this.size);
                    this.size.status = getRandom() >= 0.5 ? "increasing" : "decreasing";
                    break;
                case "max":
                default:
                    this.size.value = this.size.max;
                    this.size.status = "decreasing";
                    break;
            }
        }
        this.size.initialValue = this.size.value;
        this.bubble = {
            inRange: false,
        };
        this.slow = {
            inRange: false,
            factor: 1,
        };
        this.position = this._calcPosition(container, position, clamp(zIndexValue, 0, container.zLayers));
        this.initialPosition = this.position.copy();
        const canvasSize = container.canvas.size, moveCenter = Object.assign({}, this.options.move.center), isCenterPercent = moveCenter.mode === "percent";
        this.moveCenter = {
            x: moveCenter.x * (isCenterPercent ? canvasSize.width / 100 : 1),
            y: moveCenter.y * (isCenterPercent ? canvasSize.height / 100 : 1),
            radius: (_f = this.options.move.center.radius) !== null && _f !== void 0 ? _f : 0,
            mode: (_g = this.options.move.center.mode) !== null && _g !== void 0 ? _g : "percent",
        };
        this.direction = getParticleDirectionAngle(this.options.move.direction, this.position, this.moveCenter);
        switch (this.options.move.direction) {
            case "inside":
                this.outType = "inside";
                break;
            case "outside":
                this.outType = "outside";
                break;
        }
        this.initialVelocity = this._calculateVelocity();
        this.velocity = this.initialVelocity.copy();
        this.moveDecay = 1 - getRangeValue(this.options.move.decay);
        this.offset = Vector.origin;
        const particles = container.particles;
        particles.needsSort = particles.needsSort || particles.lastZIndex < this.position.z;
        particles.lastZIndex = this.position.z;
        this.zIndexFactor = this.position.z / container.zLayers;
        this.sides = 24;
        let drawer = container.drawers.get(this.shape);
        if (!drawer) {
            drawer = this._engine.plugins.getShapeDrawer(this.shape);
            if (drawer) {
                container.drawers.set(this.shape, drawer);
            }
        }
        if (drawer === null || drawer === void 0 ? void 0 : drawer.loadShape) {
            drawer === null || drawer === void 0 ? void 0 : drawer.loadShape(this);
        }
        const sideCountFunc = drawer === null || drawer === void 0 ? void 0 : drawer.getSidesCount;
        if (sideCountFunc) {
            this.sides = sideCountFunc(this);
        }
        this.spawning = false;
        this.shadowColor = rangeColorToRgb(this.options.shadow.color);
        for (const updater of container.particles.updaters) {
            updater.init(this);
        }
        for (const mover of container.particles.movers) {
            (_h = mover.init) === null || _h === void 0 ? void 0 : _h.call(mover, this);
        }
        if (drawer === null || drawer === void 0 ? void 0 : drawer.particleInit) {
            drawer.particleInit(container, this);
        }
        for (const [, plugin] of container.plugins) {
            (_j = plugin.particleCreated) === null || _j === void 0 ? void 0 : _j.call(plugin, this);
        }
    }
    isInsideCanvas() {
        const radius = this.getRadius(), canvasSize = this.container.canvas.size;
        return (this.position.x >= -radius &&
            this.position.y >= -radius &&
            this.position.y <= canvasSize.height + radius &&
            this.position.x <= canvasSize.width + radius);
    }
    isVisible() {
        return !this.destroyed && !this.spawning && this.isInsideCanvas();
    }
    reset() {
        var _a;
        for (const updater of this.container.particles.updaters) {
            (_a = updater.reset) === null || _a === void 0 ? void 0 : _a.call(updater, this);
        }
    }
    _calcPosition(container, position, zIndex, tryCount = 0) {
        var _a, _b, _c, _d;
        for (const [, plugin] of container.plugins) {
            const pluginPos = plugin.particlePosition !== undefined ? plugin.particlePosition(position, this) : undefined;
            if (pluginPos !== undefined) {
                return Vector3d.create(pluginPos.x, pluginPos.y, zIndex);
            }
        }
        const canvasSize = container.canvas.size, exactPosition = calcExactPositionOrRandomFromSize({
            size: canvasSize,
            position: position,
        }), pos = Vector3d.create(exactPosition.x, exactPosition.y, zIndex), radius = this.getRadius(), outModes = this.options.move.outModes, fixHorizontal = (outMode) => {
            fixOutMode({
                outMode,
                checkModes: ["bounce", "bounce-horizontal"],
                coord: pos.x,
                maxCoord: container.canvas.size.width,
                setCb: (value) => (pos.x += value),
                radius,
            });
        }, fixVertical = (outMode) => {
            fixOutMode({
                outMode,
                checkModes: ["bounce", "bounce-vertical"],
                coord: pos.y,
                maxCoord: container.canvas.size.height,
                setCb: (value) => (pos.y += value),
                radius,
            });
        };
        fixHorizontal((_a = outModes.left) !== null && _a !== void 0 ? _a : outModes.default);
        fixHorizontal((_b = outModes.right) !== null && _b !== void 0 ? _b : outModes.default);
        fixVertical((_c = outModes.top) !== null && _c !== void 0 ? _c : outModes.default);
        fixVertical((_d = outModes.bottom) !== null && _d !== void 0 ? _d : outModes.default);
        if (this._checkOverlap(pos, tryCount)) {
            return this._calcPosition(container, undefined, zIndex, tryCount + 1);
        }
        return pos;
    }
    _calculateVelocity() {
        const baseVelocity = getParticleBaseVelocity(this.direction), res = baseVelocity.copy(), moveOptions = this.options.move;
        if (moveOptions.direction === "inside" || moveOptions.direction === "outside") {
            return res;
        }
        const rad = (Math.PI / 180) * getRangeValue(moveOptions.angle.value), radOffset = (Math.PI / 180) * getRangeValue(moveOptions.angle.offset), range = {
            left: radOffset - rad / 2,
            right: radOffset + rad / 2,
        };
        if (!moveOptions.straight) {
            res.angle += randomInRange(setRangeValue(range.left, range.right));
        }
        if (moveOptions.random && typeof moveOptions.speed === "number") {
            res.length *= getRandom();
        }
        return res;
    }
    _checkOverlap(pos, tryCount = 0) {
        const collisionsOptions = this.options.collisions, radius = this.getRadius();
        if (!collisionsOptions.enable) {
            return false;
        }
        const overlapOptions = collisionsOptions.overlap;
        if (overlapOptions.enable) {
            return false;
        }
        const retries = overlapOptions.retries;
        if (retries >= 0 && tryCount > retries) {
            throw new Error("Particle is overlapping and can't be placed");
        }
        let overlaps = false;
        for (const particle of this.container.particles.array) {
            if (getDistance(pos, particle.position) < radius + particle.getRadius()) {
                overlaps = true;
                break;
            }
        }
        return overlaps;
    }
    _getRollColor(color) {
        var _a;
        if (!color || !this.roll || (!this.backColor && !this.roll.alter)) {
            return color;
        }
        const backFactor = this.roll.horizontal && this.roll.vertical ? 2 : 1, backSum = this.roll.horizontal ? Math.PI / 2 : 0, rolled = Math.floor((((_a = this.roll.angle) !== null && _a !== void 0 ? _a : 0) + backSum) / (Math.PI / backFactor)) % 2;
        if (!rolled) {
            return color;
        }
        if (this.backColor) {
            return this.backColor;
        }
        if (this.roll.alter) {
            return alterHsl(color, this.roll.alter.type, this.roll.alter.value);
        }
        return color;
    }
    _loadShapeData(shapeOptions, reduceDuplicates) {
        const shapeData = shapeOptions.options[this.shape];
        if (shapeData) {
            return deepExtend({}, itemFromSingleOrMultiple(shapeData, this.id, reduceDuplicates));
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-engine/esm/Core/Utils/Point.js
class Point {
    constructor(position, particle) {
        this.position = position;
        this.particle = particle;
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-engine/esm/Core/Utils/Range.js
class Range {
    constructor(x, y) {
        this.position = {
            x: x,
            y: y,
        };
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-engine/esm/Core/Utils/Circle.js


class Circle extends Range {
    constructor(x, y, radius) {
        super(x, y);
        this.radius = radius;
    }
    contains(point) {
        return getDistance(point, this.position) <= this.radius;
    }
    intersects(range) {
        const rect = range, circle = range, pos1 = this.position, pos2 = range.position, distPos = { x: Math.abs(pos2.x - pos1.x), y: Math.abs(pos2.y - pos1.y) }, r = this.radius;
        if (circle.radius !== undefined) {
            const rSum = r + circle.radius, dist = Math.sqrt(distPos.x ** 2 + distPos.y ** 2);
            return rSum > dist;
        }
        else if (rect.size !== undefined) {
            const w = rect.size.width, h = rect.size.height, edges = Math.pow(distPos.x - w, 2) + Math.pow(distPos.y - h, 2);
            return edges <= r ** 2 || (distPos.x <= r + w && distPos.y <= r + h) || distPos.x <= w || distPos.y <= h;
        }
        return false;
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-engine/esm/Core/Utils/Rectangle.js


class Rectangle extends Range {
    constructor(x, y, width, height) {
        super(x, y);
        this.size = {
            height: height,
            width: width,
        };
    }
    contains(point) {
        const w = this.size.width, h = this.size.height, pos = this.position;
        return point.x >= pos.x && point.x <= pos.x + w && point.y >= pos.y && point.y <= pos.y + h;
    }
    intersects(range) {
        if (range instanceof Circle) {
            range.intersects(this);
        }
        const w = this.size.width, h = this.size.height, pos1 = this.position, pos2 = range.position, size2 = range instanceof Rectangle ? range.size : { width: 0, height: 0 }, w2 = size2.width, h2 = size2.height;
        return pos2.x < pos1.x + w && pos2.x + w2 > pos1.x && pos2.y < pos1.y + h && pos2.y + h2 > pos1.y;
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-engine/esm/Core/Utils/QuadTree.js



class QuadTree {
    constructor(rectangle, capacity) {
        this.rectangle = rectangle;
        this.capacity = capacity;
        this._points = [];
        this._divided = false;
    }
    insert(point) {
        var _a, _b, _c, _d, _e;
        if (!this.rectangle.contains(point.position)) {
            return false;
        }
        if (this._points.length < this.capacity) {
            this._points.push(point);
            return true;
        }
        if (!this._divided) {
            this.subdivide();
        }
        return ((_e = (((_a = this._NE) === null || _a === void 0 ? void 0 : _a.insert(point)) ||
            ((_b = this._NW) === null || _b === void 0 ? void 0 : _b.insert(point)) ||
            ((_c = this._SE) === null || _c === void 0 ? void 0 : _c.insert(point)) ||
            ((_d = this._SW) === null || _d === void 0 ? void 0 : _d.insert(point)))) !== null && _e !== void 0 ? _e : false);
    }
    query(range, check, found) {
        var _a, _b, _c, _d;
        const res = found !== null && found !== void 0 ? found : [];
        if (!range.intersects(this.rectangle)) {
            return [];
        }
        for (const p of this._points) {
            if (!range.contains(p.position) &&
                getDistance(range.position, p.position) > p.particle.getRadius() &&
                (!check || check(p.particle))) {
                continue;
            }
            res.push(p.particle);
        }
        if (this._divided) {
            (_a = this._NE) === null || _a === void 0 ? void 0 : _a.query(range, check, res);
            (_b = this._NW) === null || _b === void 0 ? void 0 : _b.query(range, check, res);
            (_c = this._SE) === null || _c === void 0 ? void 0 : _c.query(range, check, res);
            (_d = this._SW) === null || _d === void 0 ? void 0 : _d.query(range, check, res);
        }
        return res;
    }
    queryCircle(position, radius, check) {
        return this.query(new Circle(position.x, position.y, radius), check);
    }
    queryRectangle(position, size, check) {
        return this.query(new Rectangle(position.x, position.y, size.width, size.height), check);
    }
    subdivide() {
        const x = this.rectangle.position.x, y = this.rectangle.position.y, w = this.rectangle.size.width, h = this.rectangle.size.height, capacity = this.capacity;
        this._NE = new QuadTree(new Rectangle(x, y, w / 2, h / 2), capacity);
        this._NW = new QuadTree(new Rectangle(x + w / 2, y, w / 2, h / 2), capacity);
        this._SE = new QuadTree(new Rectangle(x, y + h / 2, w / 2, h / 2), capacity);
        this._SW = new QuadTree(new Rectangle(x + w / 2, y + h / 2, w / 2, h / 2), capacity);
        this._divided = true;
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-engine/esm/Core/Particles.js






class Particles {
    constructor(engine, container) {
        this.container = container;
        this._engine = engine;
        this.nextId = 0;
        this.array = [];
        this.zArray = [];
        this.pool = [];
        this.limit = 0;
        this.needsSort = false;
        this.lastZIndex = 0;
        this.interactionManager = new InteractionManager(this._engine, container);
        const canvasSize = this.container.canvas.size;
        this.quadTree = new QuadTree(new Rectangle(-canvasSize.width / 4, -canvasSize.height / 4, (canvasSize.width * 3) / 2, (canvasSize.height * 3) / 2), 4);
        this.movers = this._engine.plugins.getMovers(container, true);
        this.updaters = this._engine.plugins.getUpdaters(container, true);
    }
    get count() {
        return this.array.length;
    }
    addManualParticles() {
        const container = this.container, options = container.actualOptions;
        for (const particle of options.manualParticles) {
            this.addParticle(calcPositionFromSize({
                size: container.canvas.size,
                position: particle.position,
            }), particle.options);
        }
    }
    addParticle(position, overrideOptions, group, initializer) {
        const container = this.container, options = container.actualOptions, limit = options.particles.number.limit;
        if (limit > 0) {
            const countToRemove = this.count + 1 - limit;
            if (countToRemove > 0) {
                this.removeQuantity(countToRemove);
            }
        }
        return this._pushParticle(position, overrideOptions, group, initializer);
    }
    clear() {
        this.array = [];
        this.zArray = [];
    }
    destroy() {
        this.array = [];
        this.zArray = [];
        this.movers = [];
        this.updaters = [];
    }
    async draw(delta) {
        const container = this.container, canvasSize = this.container.canvas.size;
        this.quadTree = new QuadTree(new Rectangle(-canvasSize.width / 4, -canvasSize.height / 4, (canvasSize.width * 3) / 2, (canvasSize.height * 3) / 2), 4);
        container.canvas.clear();
        await this.update(delta);
        if (this.needsSort) {
            this.zArray.sort((a, b) => b.position.z - a.position.z || a.id - b.id);
            this.lastZIndex = this.zArray[this.zArray.length - 1].position.z;
            this.needsSort = false;
        }
        for (const [, plugin] of container.plugins) {
            container.canvas.drawPlugin(plugin, delta);
        }
        for (const p of this.zArray) {
            p.draw(delta);
        }
    }
    handleClickMode(mode) {
        this.interactionManager.handleClickMode(mode);
    }
    init() {
        var _a;
        const container = this.container, options = container.actualOptions;
        this.lastZIndex = 0;
        this.needsSort = false;
        let handled = false;
        this.updaters = this._engine.plugins.getUpdaters(container, true);
        this.interactionManager.init();
        for (const [, plugin] of container.plugins) {
            if (plugin.particlesInitialization !== undefined) {
                handled = plugin.particlesInitialization();
            }
            if (handled) {
                break;
            }
        }
        this.interactionManager.init();
        for (const [, pathGenerator] of container.pathGenerators) {
            pathGenerator.init(container);
        }
        this.addManualParticles();
        if (!handled) {
            for (const group in options.particles.groups) {
                const groupOptions = options.particles.groups[group];
                for (let i = this.count, j = 0; j < ((_a = groupOptions.number) === null || _a === void 0 ? void 0 : _a.value) && i < options.particles.number.value; i++, j++) {
                    this.addParticle(undefined, groupOptions, group);
                }
            }
            for (let i = this.count; i < options.particles.number.value; i++) {
                this.addParticle();
            }
        }
    }
    push(nb, mouse, overrideOptions, group) {
        this.pushing = true;
        for (let i = 0; i < nb; i++) {
            this.addParticle(mouse === null || mouse === void 0 ? void 0 : mouse.position, overrideOptions, group);
        }
        this.pushing = false;
    }
    async redraw() {
        this.clear();
        this.init();
        await this.draw({ value: 0, factor: 0 });
    }
    remove(particle, group, override) {
        this.removeAt(this.array.indexOf(particle), undefined, group, override);
    }
    removeAt(index, quantity = 1, group, override) {
        if (index < 0 || index > this.count) {
            return;
        }
        let deleted = 0;
        for (let i = index; deleted < quantity && i < this.count; i++) {
            const particle = this.array[i];
            if (!particle || particle.group !== group) {
                continue;
            }
            particle.destroy(override);
            this.array.splice(i--, 1);
            const zIdx = this.zArray.indexOf(particle);
            this.zArray.splice(zIdx, 1);
            this.pool.push(particle);
            deleted++;
            this._engine.dispatchEvent("particleRemoved", {
                container: this.container,
                data: {
                    particle,
                },
            });
        }
    }
    removeQuantity(quantity, group) {
        this.removeAt(0, quantity, group);
    }
    setDensity() {
        const options = this.container.actualOptions;
        for (const group in options.particles.groups) {
            this._applyDensity(options.particles.groups[group], 0, group);
        }
        this._applyDensity(options.particles, options.manualParticles.length);
    }
    async update(delta) {
        var _a, _b;
        const container = this.container, particlesToDelete = [];
        for (const [, pathGenerator] of container.pathGenerators) {
            pathGenerator.update();
        }
        for (const [, plugin] of container.plugins) {
            (_a = plugin.update) === null || _a === void 0 ? void 0 : _a.call(plugin, delta);
        }
        for (const particle of this.array) {
            const resizeFactor = container.canvas.resizeFactor;
            if (resizeFactor && !particle.ignoresResizeRatio) {
                particle.position.x *= resizeFactor.width;
                particle.position.y *= resizeFactor.height;
                particle.initialPosition.x *= resizeFactor.width;
                particle.initialPosition.y *= resizeFactor.height;
            }
            particle.ignoresResizeRatio = false;
            await this.interactionManager.reset(particle);
            for (const [, plugin] of this.container.plugins) {
                if (particle.destroyed) {
                    break;
                }
                (_b = plugin.particleUpdate) === null || _b === void 0 ? void 0 : _b.call(plugin, particle, delta);
            }
            for (const mover of this.movers) {
                if (mover.isEnabled(particle)) {
                    mover.move(particle, delta);
                }
            }
            if (particle.destroyed) {
                particlesToDelete.push(particle);
                continue;
            }
            this.quadTree.insert(new Point(particle.getPosition(), particle));
        }
        for (const particle of particlesToDelete) {
            this.remove(particle);
        }
        await this.interactionManager.externalInteract(delta);
        for (const particle of this.array) {
            for (const updater of this.updaters) {
                updater.update(particle, delta);
            }
            if (!particle.destroyed && !particle.spawning) {
                await this.interactionManager.particlesInteract(particle, delta);
            }
        }
        delete container.canvas.resizeFactor;
    }
    _applyDensity(options, manualCount, group) {
        var _a;
        if (!((_a = options.number.density) === null || _a === void 0 ? void 0 : _a.enable)) {
            return;
        }
        const numberOptions = options.number, densityFactor = this._initDensityFactor(numberOptions.density), optParticlesNumber = numberOptions.value, optParticlesLimit = numberOptions.limit > 0 ? numberOptions.limit : optParticlesNumber, particlesNumber = Math.min(optParticlesNumber, optParticlesLimit) * densityFactor + manualCount, particlesCount = Math.min(this.count, this.array.filter((t) => t.group === group).length);
        this.limit = numberOptions.limit * densityFactor;
        if (particlesCount < particlesNumber) {
            this.push(Math.abs(particlesNumber - particlesCount), undefined, options, group);
        }
        else if (particlesCount > particlesNumber) {
            this.removeQuantity(particlesCount - particlesNumber, group);
        }
    }
    _initDensityFactor(densityOptions) {
        const container = this.container;
        if (!container.canvas.element || !densityOptions.enable) {
            return 1;
        }
        const canvas = container.canvas.element, pxRatio = container.retina.pixelRatio;
        return (canvas.width * canvas.height) / (densityOptions.factor * pxRatio ** 2 * densityOptions.area);
    }
    _pushParticle(position, overrideOptions, group, initializer) {
        try {
            let particle = this.pool.pop();
            if (particle) {
                particle.init(this.nextId, position, overrideOptions, group);
            }
            else {
                particle = new Particle(this._engine, this.nextId, this.container, position, overrideOptions, group);
            }
            let canAdd = true;
            if (initializer) {
                canAdd = initializer(particle);
            }
            if (!canAdd) {
                return;
            }
            this.array.push(particle);
            this.zArray.push(particle);
            this.nextId++;
            this._engine.dispatchEvent("particleAdded", {
                container: this.container,
                data: {
                    particle,
                },
            });
            return particle;
        }
        catch (e) {
            console.warn(`error adding particle: ${e}`);
            return;
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-engine/esm/Core/Retina.js


class Retina {
    constructor(container) {
        this.container = container;
    }
    init() {
        const container = this.container, options = container.actualOptions;
        this.pixelRatio = !options.detectRetina || isSsr() ? 1 : window.devicePixelRatio;
        this.reduceFactor = 1;
        const ratio = this.pixelRatio;
        if (container.canvas.element) {
            const element = container.canvas.element;
            container.canvas.size.width = element.offsetWidth * ratio;
            container.canvas.size.height = element.offsetHeight * ratio;
        }
        const particles = options.particles;
        this.attractDistance = getRangeValue(particles.move.attract.distance) * ratio;
        this.sizeAnimationSpeed = getRangeValue(particles.size.animation.speed) * ratio;
        this.maxSpeed = getRangeValue(particles.move.gravity.maxSpeed) * ratio;
    }
    initParticle(particle) {
        const options = particle.options, ratio = this.pixelRatio, moveDistance = options.move.distance, props = particle.retina;
        props.attractDistance = getRangeValue(options.move.attract.distance) * ratio;
        props.moveDrift = getRangeValue(options.move.drift) * ratio;
        props.moveSpeed = getRangeValue(options.move.speed) * ratio;
        props.sizeAnimationSpeed = getRangeValue(options.size.animation.speed) * ratio;
        const maxDistance = props.maxDistance;
        maxDistance.horizontal = moveDistance.horizontal !== undefined ? moveDistance.horizontal * ratio : undefined;
        maxDistance.vertical = moveDistance.vertical !== undefined ? moveDistance.vertical * ratio : undefined;
        props.maxSpeed = getRangeValue(options.move.gravity.maxSpeed) * ratio;
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-engine/esm/Core/Container.js









function guardCheck(container) {
    return container && !container.destroyed;
}
function loadContainerOptions(engine, container, ...sourceOptionsArr) {
    const options = new Options(engine, container);
    loadOptions(options, ...sourceOptionsArr);
    return options;
}
const defaultPathGeneratorKey = "default", defaultPathGenerator = {
    generate: (p) => {
        const v = p.velocity.copy();
        v.angle += (v.length * Math.PI) / 180;
        return v;
    },
    init: () => {
    },
    update: () => {
    },
    reset: () => {
    },
};
class Container {
    constructor(engine, id, sourceOptions) {
        this.id = id;
        this._engine = engine;
        this.fpsLimit = 120;
        this.smooth = false;
        this._delay = 0;
        this.duration = 0;
        this.lifeTime = 0;
        this._firstStart = true;
        this.started = false;
        this.destroyed = false;
        this._paused = true;
        this.lastFrameTime = 0;
        this.zLayers = 100;
        this.pageHidden = false;
        this._sourceOptions = sourceOptions;
        this._initialSourceOptions = sourceOptions;
        this.retina = new Retina(this);
        this.canvas = new Canvas(this);
        this.particles = new Particles(this._engine, this);
        this.frameManager = new FrameManager(this);
        this.pathGenerators = new Map();
        this.interactivity = {
            mouse: {
                clicking: false,
                inside: false,
            },
        };
        this.plugins = new Map();
        this.drawers = new Map();
        this._options = loadContainerOptions(this._engine, this);
        this.actualOptions = loadContainerOptions(this._engine, this);
        this._eventListeners = new EventListeners(this);
        if (typeof IntersectionObserver !== "undefined" && IntersectionObserver) {
            this._intersectionObserver = new IntersectionObserver((entries) => this._intersectionManager(entries));
        }
        this._engine.dispatchEvent("containerBuilt", { container: this });
    }
    get options() {
        return this._options;
    }
    get sourceOptions() {
        return this._sourceOptions;
    }
    addClickHandler(callback) {
        if (!guardCheck(this)) {
            return;
        }
        const el = this.interactivity.element;
        if (!el) {
            return;
        }
        const clickOrTouchHandler = (e, pos, radius) => {
            if (!guardCheck(this)) {
                return;
            }
            const pxRatio = this.retina.pixelRatio, posRetina = {
                x: pos.x * pxRatio,
                y: pos.y * pxRatio,
            }, particles = this.particles.quadTree.queryCircle(posRetina, radius * pxRatio);
            callback(e, particles);
        };
        const clickHandler = (e) => {
            if (!guardCheck(this)) {
                return;
            }
            const mouseEvent = e, pos = {
                x: mouseEvent.offsetX || mouseEvent.clientX,
                y: mouseEvent.offsetY || mouseEvent.clientY,
            };
            clickOrTouchHandler(e, pos, 1);
        };
        const touchStartHandler = () => {
            if (!guardCheck(this)) {
                return;
            }
            touched = true;
            touchMoved = false;
        };
        const touchMoveHandler = () => {
            if (!guardCheck(this)) {
                return;
            }
            touchMoved = true;
        };
        const touchEndHandler = (e) => {
            if (!guardCheck(this)) {
                return;
            }
            if (touched && !touchMoved) {
                const touchEvent = e;
                let lastTouch = touchEvent.touches[touchEvent.touches.length - 1];
                if (!lastTouch) {
                    lastTouch = touchEvent.changedTouches[touchEvent.changedTouches.length - 1];
                    if (!lastTouch) {
                        return;
                    }
                }
                const element = this.canvas.element, canvasRect = element ? element.getBoundingClientRect() : undefined, pos = {
                    x: lastTouch.clientX - (canvasRect ? canvasRect.left : 0),
                    y: lastTouch.clientY - (canvasRect ? canvasRect.top : 0),
                };
                clickOrTouchHandler(e, pos, Math.max(lastTouch.radiusX, lastTouch.radiusY));
            }
            touched = false;
            touchMoved = false;
        };
        const touchCancelHandler = () => {
            if (!guardCheck(this)) {
                return;
            }
            touched = false;
            touchMoved = false;
        };
        let touched = false, touchMoved = false;
        el.addEventListener("click", clickHandler);
        el.addEventListener("touchstart", touchStartHandler);
        el.addEventListener("touchmove", touchMoveHandler);
        el.addEventListener("touchend", touchEndHandler);
        el.addEventListener("touchcancel", touchCancelHandler);
    }
    addPath(key, generator, override = false) {
        if (!guardCheck(this) || (!override && this.pathGenerators.has(key))) {
            return false;
        }
        this.pathGenerators.set(key, generator !== null && generator !== void 0 ? generator : defaultPathGenerator);
        return true;
    }
    destroy() {
        if (!guardCheck(this)) {
            return;
        }
        this.stop();
        this.particles.destroy();
        this.canvas.destroy();
        for (const [, drawer] of this.drawers) {
            if (drawer.destroy) {
                drawer.destroy(this);
            }
        }
        for (const key of this.drawers.keys()) {
            this.drawers.delete(key);
        }
        this._engine.plugins.destroy(this);
        this.destroyed = true;
        const mainArr = this._engine.dom(), idx = mainArr.findIndex((t) => t === this);
        if (idx >= 0) {
            mainArr.splice(idx, 1);
        }
        this._engine.dispatchEvent("containerDestroyed", { container: this });
    }
    draw(force) {
        if (!guardCheck(this)) {
            return;
        }
        let refreshTime = force;
        this._drawAnimationFrame = animate()(async (timestamp) => {
            if (refreshTime) {
                this.lastFrameTime = undefined;
                refreshTime = false;
            }
            await this.frameManager.nextFrame(timestamp);
        });
    }
    exportConfiguration() {
        return JSON.stringify(this.actualOptions, (key, value) => {
            if (key === "_engine" || key === "_container") {
                return;
            }
            return value;
        }, 2);
    }
    exportImage(callback, type, quality) {
        const element = this.canvas.element;
        if (element) {
            element.toBlob(callback, type !== null && type !== void 0 ? type : "image/png", quality);
        }
    }
    exportImg(callback) {
        this.exportImage(callback);
    }
    getAnimationStatus() {
        return !this._paused && !this.pageHidden && guardCheck(this);
    }
    handleClickMode(mode) {
        if (!guardCheck(this)) {
            return;
        }
        this.particles.handleClickMode(mode);
        for (const [, plugin] of this.plugins) {
            if (plugin.handleClickMode) {
                plugin.handleClickMode(mode);
            }
        }
    }
    async init() {
        if (!guardCheck(this)) {
            return;
        }
        const shapes = this._engine.plugins.getSupportedShapes();
        for (const type of shapes) {
            const drawer = this._engine.plugins.getShapeDrawer(type);
            if (drawer) {
                this.drawers.set(type, drawer);
            }
        }
        this._options = loadContainerOptions(this._engine, this, this._initialSourceOptions, this.sourceOptions);
        this.actualOptions = loadContainerOptions(this._engine, this, this._options);
        const availablePlugins = this._engine.plugins.getAvailablePlugins(this);
        for (const [id, plugin] of availablePlugins) {
            this.plugins.set(id, plugin);
        }
        this.retina.init();
        await this.canvas.init();
        this.updateActualOptions();
        this.canvas.initBackground();
        this.canvas.resize();
        this.zLayers = this.actualOptions.zLayers;
        this.duration = getRangeValue(this.actualOptions.duration) * 1000;
        this._delay = getRangeValue(this.actualOptions.delay) * 1000;
        this.lifeTime = 0;
        this.fpsLimit = this.actualOptions.fpsLimit > 0 ? this.actualOptions.fpsLimit : 120;
        this.smooth = this.actualOptions.smooth;
        for (const [, drawer] of this.drawers) {
            if (drawer.init) {
                await drawer.init(this);
            }
        }
        for (const [, plugin] of this.plugins) {
            if (plugin.init) {
                await plugin.init();
            }
        }
        this._engine.dispatchEvent("containerInit", { container: this });
        this.particles.init();
        this.particles.setDensity();
        for (const [, plugin] of this.plugins) {
            if (plugin.particlesSetup) {
                plugin.particlesSetup();
            }
        }
        this._engine.dispatchEvent("particlesSetup", { container: this });
    }
    async loadTheme(name) {
        if (!guardCheck(this)) {
            return;
        }
        this._currentTheme = name;
        await this.refresh();
    }
    pause() {
        if (!guardCheck(this)) {
            return;
        }
        if (this._drawAnimationFrame !== undefined) {
            cancelAnimation()(this._drawAnimationFrame);
            delete this._drawAnimationFrame;
        }
        if (this._paused) {
            return;
        }
        for (const [, plugin] of this.plugins) {
            if (plugin.pause) {
                plugin.pause();
            }
        }
        if (!this.pageHidden) {
            this._paused = true;
        }
        this._engine.dispatchEvent("containerPaused", { container: this });
    }
    play(force) {
        if (!guardCheck(this)) {
            return;
        }
        const needsUpdate = this._paused || force;
        if (this._firstStart && !this.actualOptions.autoPlay) {
            this._firstStart = false;
            return;
        }
        if (this._paused) {
            this._paused = false;
        }
        if (needsUpdate) {
            for (const [, plugin] of this.plugins) {
                if (plugin.play) {
                    plugin.play();
                }
            }
        }
        this._engine.dispatchEvent("containerPlay", { container: this });
        this.draw(needsUpdate || false);
    }
    async refresh() {
        if (!guardCheck(this)) {
            return;
        }
        this.stop();
        return this.start();
    }
    async reset() {
        if (!guardCheck(this)) {
            return;
        }
        this._options = loadContainerOptions(this._engine, this);
        return this.refresh();
    }
    setNoise(noiseOrGenerator, init, update) {
        if (!guardCheck(this)) {
            return;
        }
        this.setPath(noiseOrGenerator, init, update);
    }
    setPath(pathOrGenerator, init, update) {
        if (!pathOrGenerator || !guardCheck(this)) {
            return;
        }
        const pathGenerator = Object.assign({}, defaultPathGenerator);
        if (typeof pathOrGenerator === "function") {
            pathGenerator.generate = pathOrGenerator;
            if (init) {
                pathGenerator.init = init;
            }
            if (update) {
                pathGenerator.update = update;
            }
        }
        else {
            const oldGenerator = pathGenerator;
            pathGenerator.generate = pathOrGenerator.generate || oldGenerator.generate;
            pathGenerator.init = pathOrGenerator.init || oldGenerator.init;
            pathGenerator.update = pathOrGenerator.update || oldGenerator.update;
        }
        this.addPath(defaultPathGeneratorKey, pathGenerator, true);
    }
    async start() {
        if (!guardCheck(this) || this.started) {
            return;
        }
        await this.init();
        this.started = true;
        await new Promise((resolve) => {
            this._delayTimeout = setTimeout(async () => {
                this._eventListeners.addListeners();
                if (this.interactivity.element instanceof HTMLElement && this._intersectionObserver) {
                    this._intersectionObserver.observe(this.interactivity.element);
                }
                for (const [, plugin] of this.plugins) {
                    if (plugin.start) {
                        await plugin.start();
                    }
                }
                this._engine.dispatchEvent("containerStarted", { container: this });
                this.play();
                resolve();
            }, this._delay);
        });
    }
    stop() {
        if (!guardCheck(this) || !this.started) {
            return;
        }
        if (this._delayTimeout) {
            clearTimeout(this._delayTimeout);
            delete this._delayTimeout;
        }
        this._firstStart = true;
        this.started = false;
        this._eventListeners.removeListeners();
        this.pause();
        this.particles.clear();
        this.canvas.clear();
        if (this.interactivity.element instanceof HTMLElement && this._intersectionObserver) {
            this._intersectionObserver.unobserve(this.interactivity.element);
        }
        for (const [, plugin] of this.plugins) {
            if (plugin.stop) {
                plugin.stop();
            }
        }
        for (const key of this.plugins.keys()) {
            this.plugins.delete(key);
        }
        this._sourceOptions = this._options;
        this._engine.dispatchEvent("containerStopped", { container: this });
    }
    updateActualOptions() {
        this.actualOptions.responsive = [];
        const newMaxWidth = this.actualOptions.setResponsive(this.canvas.size.width, this.retina.pixelRatio, this._options);
        this.actualOptions.setTheme(this._currentTheme);
        if (this.responsiveMaxWidth === newMaxWidth) {
            return false;
        }
        this.responsiveMaxWidth = newMaxWidth;
        return true;
    }
    _intersectionManager(entries) {
        if (!guardCheck(this) || !this.actualOptions.pauseOnOutsideViewport) {
            return;
        }
        for (const entry of entries) {
            if (entry.target !== this.interactivity.element) {
                continue;
            }
            (entry.isIntersecting ? this.play : this.pause)();
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-engine/esm/Core/Loader.js




async function getDataFromUrl(jsonUrl, index) {
    const url = itemFromSingleOrMultiple(jsonUrl, index);
    if (!url) {
        return;
    }
    const response = await fetch(url);
    if (response.ok) {
        return response.json();
    }
    console.error(`tsParticles - Error ${response.status} while retrieving config file`);
}
class Loader {
    constructor(engine) {
        this._engine = engine;
    }
    load(tagId, options, index) {
        const params = { index, remote: false };
        if (typeof tagId === "string") {
            params.tagId = tagId;
        }
        else {
            params.options = tagId;
        }
        if (typeof options === "number") {
            params.index = options;
        }
        else {
            params.options = options !== null && options !== void 0 ? options : params.options;
        }
        return this.loadOptions(params);
    }
    async loadJSON(tagId, jsonUrl, index) {
        let url, id;
        if (typeof jsonUrl === "number" || jsonUrl === undefined) {
            url = tagId;
        }
        else {
            id = tagId;
            url = jsonUrl;
        }
        return this.loadRemoteOptions({ tagId: id, url, index, remote: true });
    }
    async loadOptions(params) {
        var _a, _b, _c;
        const tagId = (_a = params.tagId) !== null && _a !== void 0 ? _a : `tsparticles${Math.floor(getRandom() * 10000)}`, { index, url: jsonUrl, remote } = params, options = remote ? await getDataFromUrl(jsonUrl, index) : params.options;
        let domContainer = (_b = params.element) !== null && _b !== void 0 ? _b : document.getElementById(tagId);
        if (!domContainer) {
            domContainer = document.createElement("div");
            domContainer.id = tagId;
            (_c = document.querySelector("body")) === null || _c === void 0 ? void 0 : _c.append(domContainer);
        }
        const currentOptions = itemFromSingleOrMultiple(options, index), dom = this._engine.dom(), oldIndex = dom.findIndex((v) => v.id === tagId);
        if (oldIndex >= 0) {
            const old = this._engine.domItem(oldIndex);
            if (old && !old.destroyed) {
                old.destroy();
                dom.splice(oldIndex, 1);
            }
        }
        let canvasEl;
        if (domContainer.tagName.toLowerCase() === "canvas") {
            canvasEl = domContainer;
            canvasEl.dataset[generatedAttribute] = "false";
        }
        else {
            const existingCanvases = domContainer.getElementsByTagName("canvas");
            if (existingCanvases.length) {
                canvasEl = existingCanvases[0];
                canvasEl.dataset[generatedAttribute] = "false";
            }
            else {
                canvasEl = document.createElement("canvas");
                canvasEl.dataset[generatedAttribute] = "true";
                domContainer.appendChild(canvasEl);
            }
        }
        if (!canvasEl.style.width) {
            canvasEl.style.width = "100%";
        }
        if (!canvasEl.style.height) {
            canvasEl.style.height = "100%";
        }
        const newItem = new Container(this._engine, tagId, currentOptions);
        if (oldIndex >= 0) {
            dom.splice(oldIndex, 0, newItem);
        }
        else {
            dom.push(newItem);
        }
        newItem.canvas.loadCanvas(canvasEl);
        await newItem.start();
        return newItem;
    }
    async loadRemoteOptions(params) {
        return this.loadOptions(params);
    }
    async set(id, domContainer, options, index) {
        const params = { index, remote: false };
        if (typeof id === "string") {
            params.tagId = id;
        }
        else {
            params.element = id;
        }
        if (domContainer instanceof HTMLElement) {
            params.element = domContainer;
        }
        else {
            params.options = domContainer;
        }
        if (typeof options === "number") {
            params.index = options;
        }
        else {
            params.options = options !== null && options !== void 0 ? options : params.options;
        }
        return this.loadOptions(params);
    }
    async setJSON(id, domContainer, jsonUrl, index) {
        let url, newId, newIndex, element;
        if (id instanceof HTMLElement) {
            element = id;
            url = domContainer;
            newIndex = jsonUrl;
        }
        else {
            newId = id;
            element = domContainer;
            url = jsonUrl;
            newIndex = index;
        }
        return this.loadRemoteOptions({ tagId: newId, url, index: newIndex, element, remote: true });
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-engine/esm/Core/Utils/Plugins.js

function getItemsFromInitializer(container, map, initializers, force = false) {
    let res = map.get(container);
    if (!res || force) {
        res = [...initializers.values()].map((t) => t(container));
        map.set(container, res);
    }
    return res;
}
class Plugins {
    constructor(engine) {
        this._engine = engine;
        this.plugins = [];
        this._initializers = {
            interactors: new Map(),
            movers: new Map(),
            updaters: new Map(),
        };
        this.interactors = new Map();
        this.movers = new Map();
        this.updaters = new Map();
        this.presets = new Map();
        this.drawers = new Map();
        this.pathGenerators = new Map();
    }
    addInteractor(name, initInteractor) {
        this._initializers.interactors.set(name, initInteractor);
    }
    addParticleMover(name, initMover) {
        this._initializers.movers.set(name, initMover);
    }
    addParticleUpdater(name, initUpdater) {
        this._initializers.updaters.set(name, initUpdater);
    }
    addPathGenerator(type, pathGenerator) {
        if (!this.getPathGenerator(type)) {
            this.pathGenerators.set(type, pathGenerator);
        }
    }
    addPlugin(plugin) {
        if (!this.getPlugin(plugin.id)) {
            this.plugins.push(plugin);
        }
    }
    addPreset(presetKey, options, override = false) {
        if (override || !this.getPreset(presetKey)) {
            this.presets.set(presetKey, options);
        }
    }
    addShapeDrawer(types, drawer) {
        executeOnSingleOrMultiple(types, (type) => {
            if (!this.getShapeDrawer(type)) {
                this.drawers.set(type, drawer);
            }
        });
    }
    destroy(container) {
        this.updaters.delete(container);
        this.movers.delete(container);
        this.interactors.delete(container);
    }
    getAvailablePlugins(container) {
        const res = new Map();
        for (const plugin of this.plugins) {
            if (!plugin.needsPlugin(container.actualOptions)) {
                continue;
            }
            res.set(plugin.id, plugin.getPlugin(container));
        }
        return res;
    }
    getInteractors(container, force = false) {
        return getItemsFromInitializer(container, this.interactors, this._initializers.interactors, force);
    }
    getMovers(container, force = false) {
        return getItemsFromInitializer(container, this.movers, this._initializers.movers, force);
    }
    getPathGenerator(type) {
        return this.pathGenerators.get(type);
    }
    getPlugin(plugin) {
        return this.plugins.find((t) => t.id === plugin);
    }
    getPreset(preset) {
        return this.presets.get(preset);
    }
    getShapeDrawer(type) {
        return this.drawers.get(type);
    }
    getSupportedShapes() {
        return this.drawers.keys();
    }
    getUpdaters(container, force = false) {
        return getItemsFromInitializer(container, this.updaters, this._initializers.updaters, force);
    }
    loadOptions(options, sourceOptions) {
        for (const plugin of this.plugins) {
            plugin.loadOptions(options, sourceOptions);
        }
    }
    loadParticlesOptions(container, options, ...sourceOptions) {
        const updaters = this.updaters.get(container);
        if (!updaters) {
            return;
        }
        for (const updater of updaters) {
            if (updater.loadOptions) {
                updater.loadOptions(options, ...sourceOptions);
            }
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-engine/esm/engine.js



class Engine {
    constructor() {
        this._domArray = [];
        this._eventDispatcher = new EventDispatcher();
        this._initialized = false;
        this._loader = new Loader(this);
        this.plugins = new Plugins(this);
    }
    addEventListener(type, listener) {
        this._eventDispatcher.addEventListener(type, listener);
    }
    async addInteractor(name, interactorInitializer) {
        this.plugins.addInteractor(name, interactorInitializer);
        await this.refresh();
    }
    async addMover(name, moverInitializer) {
        this.plugins.addParticleMover(name, moverInitializer);
        await this.refresh();
    }
    async addParticleUpdater(name, updaterInitializer) {
        this.plugins.addParticleUpdater(name, updaterInitializer);
        await this.refresh();
    }
    async addPathGenerator(name, generator) {
        this.plugins.addPathGenerator(name, generator);
        await this.refresh();
    }
    async addPlugin(plugin) {
        this.plugins.addPlugin(plugin);
        await this.refresh();
    }
    async addPreset(preset, options, override = false) {
        this.plugins.addPreset(preset, options, override);
        await this.refresh();
    }
    async addShape(shape, drawer, init, afterEffect, destroy) {
        let customDrawer;
        if (typeof drawer === "function") {
            customDrawer = {
                afterEffect: afterEffect,
                destroy: destroy,
                draw: drawer,
                init: init,
            };
        }
        else {
            customDrawer = drawer;
        }
        this.plugins.addShapeDrawer(shape, customDrawer);
        await this.refresh();
    }
    dispatchEvent(type, args) {
        this._eventDispatcher.dispatchEvent(type, args);
    }
    dom() {
        return this._domArray;
    }
    domItem(index) {
        const dom = this.dom(), item = dom[index];
        if (item && !item.destroyed) {
            return item;
        }
        dom.splice(index, 1);
    }
    init() {
        if (!this._initialized) {
            this._initialized = true;
        }
    }
    async load(tagId, options) {
        return this._loader.load(tagId, options);
    }
    async loadFromArray(tagId, options, index) {
        return this._loader.load(tagId, options, index);
    }
    async loadJSON(tagId, pathConfigJson, index) {
        return this._loader.loadJSON(tagId, pathConfigJson, index);
    }
    async refresh() {
        for (const instance of this.dom()) {
            await instance.refresh();
        }
    }
    removeEventListener(type, listener) {
        this._eventDispatcher.removeEventListener(type, listener);
    }
    async set(id, element, options) {
        return this._loader.set(id, element, options);
    }
    async setJSON(id, element, pathConfigJson, index) {
        return this._loader.setJSON(id, element, pathConfigJson, index);
    }
    setOnClickHandler(callback) {
        const dom = this.dom();
        if (!dom.length) {
            throw new Error("Can only set click handlers after calling tsParticles.load() or tsParticles.loadJSON()");
        }
        for (const domItem of dom) {
            domItem.addClickHandler(callback);
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-engine/esm/Utils/HslColorManager.js


class HslColorManager {
    constructor() {
        this.key = "hsl";
        this.stringPrefix = "hsl";
    }
    handleColor(color) {
        var _a;
        const colorValue = color.value, hslColor = (_a = colorValue.hsl) !== null && _a !== void 0 ? _a : color.value;
        if (hslColor.h !== undefined && hslColor.s !== undefined && hslColor.l !== undefined) {
            return hslToRgb(hslColor);
        }
    }
    handleRangeColor(color) {
        var _a;
        const colorValue = color.value, hslColor = (_a = colorValue.hsl) !== null && _a !== void 0 ? _a : color.value;
        if (hslColor.h !== undefined && hslColor.l !== undefined) {
            return hslToRgb({
                h: getRangeValue(hslColor.h),
                l: getRangeValue(hslColor.l),
                s: getRangeValue(hslColor.s),
            });
        }
    }
    parseString(input) {
        if (!input.startsWith("hsl")) {
            return;
        }
        const regex = /hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.%]+)\s*)?\)/i, result = regex.exec(input);
        return result
            ? hslaToRgba({
                a: result.length > 4 ? parseAlpha(result[5]) : 1,
                h: parseInt(result[1], 10),
                l: parseInt(result[3], 10),
                s: parseInt(result[2], 10),
            })
            : undefined;
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-engine/esm/Utils/RgbColorManager.js

class RgbColorManager {
    constructor() {
        this.key = "rgb";
        this.stringPrefix = "rgb";
    }
    handleColor(color) {
        var _a;
        const colorValue = color.value, rgbColor = (_a = colorValue.rgb) !== null && _a !== void 0 ? _a : color.value;
        if (rgbColor.r !== undefined) {
            return rgbColor;
        }
    }
    handleRangeColor(color) {
        var _a;
        const colorValue = color.value, rgbColor = (_a = colorValue.rgb) !== null && _a !== void 0 ? _a : color.value;
        if (rgbColor.r !== undefined) {
            return {
                r: getRangeValue(rgbColor.r),
                g: getRangeValue(rgbColor.g),
                b: getRangeValue(rgbColor.b),
            };
        }
    }
    parseString(input) {
        if (!input.startsWith(this.stringPrefix)) {
            return;
        }
        const regex = /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([\d.%]+)\s*)?\)/i, result = regex.exec(input);
        return result
            ? {
                a: result.length > 4 ? parseAlpha(result[5]) : 1,
                b: parseInt(result[3], 10),
                g: parseInt(result[2], 10),
                r: parseInt(result[1], 10),
            }
            : undefined;
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-engine/esm/Core/Utils/ExternalInteractorBase.js
class ExternalInteractorBase {
    constructor(container) {
        this.container = container;
        this.type = "external";
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-engine/esm/Core/Utils/ParticlesInteractorBase.js
class ParticlesInteractorBase {
    constructor(container) {
        this.container = container;
        this.type = "particles";
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-engine/esm/index.js




const rgbColorManager = new RgbColorManager(), hslColorManager = new HslColorManager();
addColorManager(rgbColorManager);
addColorManager(hslColorManager);
const tsParticles = new Engine();
tsParticles.init();
























































































































































































// EXTERNAL MODULE: ./node_modules/fast-deep-equal/react.js
var fast_deep_equal_react = __webpack_require__(252);
var fast_deep_equal_react_default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal_react);
;// CONCATENATED MODULE: ./node_modules/react-tsparticles/esm/Particles.js



const defaultId = "tsparticles";
class Particles_Particles extends react.Component {
    constructor(props) {
        super(props);
        this.state = {
            init: false,
            library: undefined,
        };
    }
    destroy() {
        if (!this.state.library) {
            return;
        }
        this.state.library.destroy();
        this.setState({
            library: undefined,
        });
    }
    shouldComponentUpdate(nextProps) {
        return !fast_deep_equal_react_default()(nextProps, this.props);
    }
    componentDidUpdate() {
        this.refresh();
    }
    forceUpdate() {
        this.refresh().then(() => {
            super.forceUpdate();
        });
    }
    componentDidMount() {
        (async () => {
            if (this.props.init) {
                await this.props.init(tsParticles);
            }
            this.setState({
                init: true,
            }, async () => {
                await this.loadParticles();
            });
        })();
    }
    componentWillUnmount() {
        this.destroy();
    }
    render() {
        const { width, height, className, canvasClassName, id } = this.props;
        return (react.createElement("div", { className: className, id: id },
            react.createElement("canvas", { className: canvasClassName, style: Object.assign(Object.assign({}, this.props.style), { width,
                    height }) })));
    }
    async refresh() {
        this.destroy();
        await this.loadParticles();
    }
    async loadParticles() {
        var _a, _b, _c;
        if (!this.state.init) {
            return;
        }
        const cb = async (container) => {
            if (this.props.container) {
                this.props.container.current = container;
            }
            this.setState({
                library: container,
            });
            if (this.props.loaded) {
                await this.props.loaded(container);
            }
        };
        const id = (_b = (_a = this.props.id) !== null && _a !== void 0 ? _a : Particles_Particles.defaultProps.id) !== null && _b !== void 0 ? _b : defaultId, container = this.props.url
            ? await tsParticles.loadJSON(id, this.props.url)
            : await tsParticles.load(id, (_c = this.props.params) !== null && _c !== void 0 ? _c : this.props.options);
        await cb(container);
    }
}
Particles_Particles.defaultProps = {
    width: "100%",
    height: "100%",
    options: {},
    style: {},
    url: undefined,
    id: defaultId,
};

;// CONCATENATED MODULE: ./node_modules/react-tsparticles/esm/index.js

/* harmony default export */ var esm = (Particles_Particles);


;// CONCATENATED MODULE: ./node_modules/tsparticles-plugin-absorbers/esm/Options/Classes/AbsorberSizeLimit.js
class AbsorberSizeLimit {
    constructor() {
        this.radius = 0;
        this.mass = 0;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.mass !== undefined) {
            this.mass = data.mass;
        }
        if (data.radius !== undefined) {
            this.radius = data.radius;
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-plugin-absorbers/esm/Options/Classes/AbsorberSize.js


class AbsorberSize extends ValueWithRandom {
    constructor() {
        super();
        this.density = 5;
        this.value = 50;
        this.limit = new AbsorberSizeLimit();
    }
    load(data) {
        if (!data) {
            return;
        }
        super.load(data);
        if (data.density !== undefined) {
            this.density = data.density;
        }
        if (typeof data.limit === "number") {
            this.limit.radius = data.limit;
        }
        else {
            this.limit.load(data.limit);
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-plugin-absorbers/esm/Options/Classes/Absorber.js


class Absorber {
    constructor() {
        this.color = new OptionsColor();
        this.color.value = "#000000";
        this.draggable = false;
        this.opacity = 1;
        this.destroy = true;
        this.orbits = false;
        this.size = new AbsorberSize();
    }
    load(data) {
        if (data === undefined) {
            return;
        }
        if (data.color !== undefined) {
            this.color = OptionsColor.create(this.color, data.color);
        }
        if (data.draggable !== undefined) {
            this.draggable = data.draggable;
        }
        this.name = data.name;
        if (data.opacity !== undefined) {
            this.opacity = data.opacity;
        }
        if (data.position !== undefined) {
            this.position = {};
            if (data.position.x !== undefined) {
                this.position.x = setRangeValue(data.position.x);
            }
            if (data.position.y !== undefined) {
                this.position.y = setRangeValue(data.position.y);
            }
        }
        if (data.size !== undefined) {
            this.size.load(data.size);
        }
        if (data.destroy !== undefined) {
            this.destroy = data.destroy;
        }
        if (data.orbits !== undefined) {
            this.orbits = data.orbits;
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-plugin-absorbers/esm/AbsorberInstance.js


class AbsorberInstance {
    constructor(absorbers, container, options, position) {
        var _a, _b, _c;
        this.absorbers = absorbers;
        this.container = container;
        this.initialPosition = position ? Vector.create(position.x, position.y) : undefined;
        if (options instanceof Absorber) {
            this.options = options;
        }
        else {
            this.options = new Absorber();
            this.options.load(options);
        }
        this.dragging = false;
        this.name = this.options.name;
        this.opacity = this.options.opacity;
        this.size = getRangeValue(this.options.size.value) * container.retina.pixelRatio;
        this.mass = this.size * this.options.size.density * container.retina.reduceFactor;
        const limit = this.options.size.limit;
        this.limit = {
            radius: limit.radius * container.retina.pixelRatio * container.retina.reduceFactor,
            mass: limit.mass,
        };
        this.color = (_a = rangeColorToRgb(this.options.color)) !== null && _a !== void 0 ? _a : {
            b: 0,
            g: 0,
            r: 0,
        };
        this.position = (_c = (_b = this.initialPosition) === null || _b === void 0 ? void 0 : _b.copy()) !== null && _c !== void 0 ? _c : this.calcPosition();
    }
    attract(particle) {
        const container = this.container, options = this.options;
        if (options.draggable) {
            const mouse = container.interactivity.mouse;
            if (mouse.clicking && mouse.downPosition) {
                const mouseDist = getDistance(this.position, mouse.downPosition);
                if (mouseDist <= this.size) {
                    this.dragging = true;
                }
            }
            else {
                this.dragging = false;
            }
            if (this.dragging && mouse.position) {
                this.position.x = mouse.position.x;
                this.position.y = mouse.position.y;
            }
        }
        const pos = particle.getPosition(), { dx, dy, distance } = getDistances(this.position, pos), v = Vector.create(dx, dy);
        v.length = (this.mass / Math.pow(distance, 2)) * container.retina.reduceFactor;
        if (distance < this.size + particle.getRadius()) {
            const sizeFactor = particle.getRadius() * 0.033 * container.retina.pixelRatio;
            if ((this.size > particle.getRadius() && distance < this.size - particle.getRadius()) ||
                (particle.absorberOrbit !== undefined && particle.absorberOrbit.length < 0)) {
                if (options.destroy) {
                    particle.destroy();
                }
                else {
                    particle.needsNewPosition = true;
                    this.updateParticlePosition(particle, v);
                }
            }
            else {
                if (options.destroy) {
                    particle.size.value -= sizeFactor;
                }
                this.updateParticlePosition(particle, v);
            }
            if (this.limit.radius <= 0 || this.size < this.limit.radius) {
                this.size += sizeFactor;
            }
            if (this.limit.mass <= 0 || this.mass < this.limit.mass) {
                this.mass += sizeFactor * this.options.size.density * container.retina.reduceFactor;
            }
        }
        else {
            this.updateParticlePosition(particle, v);
        }
    }
    draw(context) {
        context.translate(this.position.x, this.position.y);
        context.beginPath();
        context.arc(0, 0, this.size, 0, Math.PI * 2, false);
        context.closePath();
        context.fillStyle = getStyleFromRgb(this.color, this.opacity);
        context.fill();
    }
    resize() {
        const initialPosition = this.initialPosition;
        this.position =
            initialPosition && isPointInside(initialPosition, this.container.canvas.size, Vector.origin)
                ? initialPosition
                : this.calcPosition();
    }
    calcPosition() {
        const exactPosition = calcPositionOrRandomFromSizeRanged({
            size: this.container.canvas.size,
            position: this.options.position,
        });
        return Vector.create(exactPosition.x, exactPosition.y);
    }
    updateParticlePosition(particle, v) {
        var _a;
        if (particle.destroyed) {
            return;
        }
        const container = this.container, canvasSize = container.canvas.size;
        if (particle.needsNewPosition) {
            const newPosition = calcPositionOrRandomFromSize({ size: canvasSize });
            particle.position.setTo(newPosition);
            particle.velocity.setTo(particle.initialVelocity);
            particle.absorberOrbit = undefined;
            particle.needsNewPosition = false;
        }
        if (this.options.orbits) {
            if (particle.absorberOrbit === undefined) {
                particle.absorberOrbit = Vector.create(0, 0);
                particle.absorberOrbit.length = getDistance(particle.getPosition(), this.position);
                particle.absorberOrbit.angle = getRandom() * Math.PI * 2;
            }
            if (particle.absorberOrbit.length <= this.size && !this.options.destroy) {
                const minSize = Math.min(canvasSize.width, canvasSize.height);
                particle.absorberOrbit.length = minSize * (1 + (getRandom() * 0.2 - 0.1));
            }
            if (particle.absorberOrbitDirection === undefined) {
                particle.absorberOrbitDirection =
                    particle.velocity.x >= 0 ? "clockwise" : "counter-clockwise";
            }
            const orbitRadius = particle.absorberOrbit.length, orbitAngle = particle.absorberOrbit.angle, orbitDirection = particle.absorberOrbitDirection;
            particle.velocity.setTo(Vector.origin);
            const updateFunc = {
                x: orbitDirection === "clockwise" ? Math.cos : Math.sin,
                y: orbitDirection === "clockwise" ? Math.sin : Math.cos,
            };
            particle.position.x = this.position.x + orbitRadius * updateFunc.x(orbitAngle);
            particle.position.y = this.position.y + orbitRadius * updateFunc.y(orbitAngle);
            particle.absorberOrbit.length -= v.length;
            particle.absorberOrbit.angle +=
                ((((_a = particle.retina.moveSpeed) !== null && _a !== void 0 ? _a : 0) * container.retina.pixelRatio) / 100) *
                    container.retina.reduceFactor;
        }
        else {
            const addV = Vector.origin;
            addV.length = v.length;
            addV.angle = v.angle;
            particle.velocity.addTo(addV);
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-plugin-absorbers/esm/Absorbers.js


class Absorbers {
    constructor(container) {
        this.container = container;
        this.array = [];
        this.absorbers = [];
        this.interactivityAbsorbers = [];
        container.getAbsorber = (idxOrName) => idxOrName === undefined || typeof idxOrName === "number"
            ? this.array[idxOrName || 0]
            : this.array.find((t) => t.name === idxOrName);
        container.addAbsorber = (options, position) => this.addAbsorber(options, position);
    }
    addAbsorber(options, position) {
        const absorber = new AbsorberInstance(this, this.container, options, position);
        this.array.push(absorber);
        return absorber;
    }
    draw(context) {
        for (const absorber of this.array) {
            absorber.draw(context);
        }
    }
    handleClickMode(mode) {
        const absorberOptions = this.absorbers, modeAbsorbers = this.interactivityAbsorbers;
        if (mode === "absorber") {
            const absorbersModeOptions = itemFromSingleOrMultiple(modeAbsorbers), absorbersOptions = absorbersModeOptions !== null && absorbersModeOptions !== void 0 ? absorbersModeOptions : itemFromSingleOrMultiple(absorberOptions), aPosition = this.container.interactivity.mouse.clickPosition;
            this.addAbsorber(absorbersOptions, aPosition);
        }
    }
    async init() {
        this.absorbers = this.container.actualOptions.absorbers;
        this.interactivityAbsorbers = this.container.actualOptions.interactivity.modes.absorbers;
        executeOnSingleOrMultiple(this.absorbers, (absorber) => {
            this.addAbsorber(absorber);
        });
    }
    particleUpdate(particle) {
        for (const absorber of this.array) {
            absorber.attract(particle);
            if (particle.destroyed) {
                break;
            }
        }
    }
    removeAbsorber(absorber) {
        const index = this.array.indexOf(absorber);
        if (index >= 0) {
            this.array.splice(index, 1);
        }
    }
    resize() {
        for (const absorber of this.array) {
            absorber.resize();
        }
    }
    stop() {
        this.array = [];
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-plugin-absorbers/esm/index.js



class AbsorbersPlugin {
    constructor() {
        this.id = "absorbers";
    }
    getPlugin(container) {
        return new Absorbers(container);
    }
    loadOptions(options, source) {
        var _a, _b;
        if (!this.needsPlugin(options) && !this.needsPlugin(source)) {
            return;
        }
        if (source === null || source === void 0 ? void 0 : source.absorbers) {
            options.absorbers = executeOnSingleOrMultiple(source.absorbers, (absorber) => {
                const tmp = new Absorber();
                tmp.load(absorber);
                return tmp;
            });
        }
        options.interactivity.modes.absorbers = executeOnSingleOrMultiple((_b = (_a = source === null || source === void 0 ? void 0 : source.interactivity) === null || _a === void 0 ? void 0 : _a.modes) === null || _b === void 0 ? void 0 : _b.absorbers, (absorber) => {
            const tmp = new Absorber();
            tmp.load(absorber);
            return tmp;
        });
    }
    needsPlugin(options) {
        var _a, _b, _c;
        if (!options) {
            return false;
        }
        const absorbers = options.absorbers;
        if (absorbers instanceof Array) {
            return !!absorbers.length;
        }
        else if (absorbers) {
            return true;
        }
        else if (((_c = (_b = (_a = options.interactivity) === null || _a === void 0 ? void 0 : _a.events) === null || _b === void 0 ? void 0 : _b.onClick) === null || _c === void 0 ? void 0 : _c.mode) &&
            isInArray("absorber", options.interactivity.events.onClick.mode)) {
            return true;
        }
        return false;
    }
}
async function loadAbsorbersPlugin(engine) {
    const plugin = new AbsorbersPlugin();
    await engine.addPlugin(plugin);
}



;// CONCATENATED MODULE: ./node_modules/tsparticles-updater-destroy/esm/Options/Classes/DestroyBounds.js

class DestroyBounds {
    load(data) {
        if (!data) {
            return;
        }
        if (data.bottom !== undefined) {
            this.bottom = setRangeValue(data.bottom);
        }
        if (data.left !== undefined) {
            this.left = setRangeValue(data.left);
        }
        if (data.right !== undefined) {
            this.right = setRangeValue(data.right);
        }
        if (data.top !== undefined) {
            this.top = setRangeValue(data.top);
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-updater-destroy/esm/Options/Classes/SplitFactor.js

class SplitFactor extends ValueWithRandom {
    constructor() {
        super();
        this.value = 3;
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-updater-destroy/esm/Options/Classes/SplitRate.js

class SplitRate extends ValueWithRandom {
    constructor() {
        super();
        this.value = { min: 4, max: 9 };
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-updater-destroy/esm/Options/Classes/Split.js



class Split {
    constructor() {
        this.count = 1;
        this.factor = new SplitFactor();
        this.rate = new SplitRate();
        this.sizeOffset = true;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.count !== undefined) {
            this.count = data.count;
        }
        this.factor.load(data.factor);
        this.rate.load(data.rate);
        this.particles = executeOnSingleOrMultiple(data.particles, (particles) => {
            return deepExtend({}, particles);
        });
        if (data.sizeOffset !== undefined) {
            this.sizeOffset = data.sizeOffset;
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-updater-destroy/esm/Options/Classes/Destroy.js


class Destroy {
    constructor() {
        this.bounds = new DestroyBounds();
        this.mode = "none";
        this.split = new Split();
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.mode) {
            this.mode = data.mode;
        }
        if (data.bounds) {
            this.bounds.load(data.bounds);
        }
        this.split.load(data.split);
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-updater-destroy/esm/DestroyUpdater.js


class DestroyUpdater {
    constructor(engine, container) {
        this.engine = engine;
        this.container = container;
    }
    init(particle) {
        const container = this.container, particlesOptions = particle.options, destroyOptions = particlesOptions.destroy;
        if (!destroyOptions) {
            return;
        }
        particle.splitCount = 0;
        const destroyBounds = destroyOptions.bounds;
        if (!particle.destroyBounds) {
            particle.destroyBounds = {};
        }
        if (destroyBounds.bottom) {
            particle.destroyBounds.bottom = (getRangeValue(destroyBounds.bottom) * container.canvas.size.height) / 100;
        }
        if (destroyBounds.left) {
            particle.destroyBounds.left = (getRangeValue(destroyBounds.left) * container.canvas.size.width) / 100;
        }
        if (destroyBounds.right) {
            particle.destroyBounds.right = (getRangeValue(destroyBounds.right) * container.canvas.size.width) / 100;
        }
        if (destroyBounds.top) {
            particle.destroyBounds.top = (getRangeValue(destroyBounds.top) * container.canvas.size.height) / 100;
        }
    }
    isEnabled(particle) {
        return !particle.destroyed;
    }
    loadOptions(options, ...sources) {
        if (!options.destroy) {
            options.destroy = new Destroy();
        }
        for (const source of sources) {
            options.destroy.load(source === null || source === void 0 ? void 0 : source.destroy);
        }
    }
    particleDestroyed(particle, override) {
        if (override) {
            return;
        }
        const destroyOptions = particle.options.destroy;
        if (destroyOptions && destroyOptions.mode === "split") {
            this.split(particle);
        }
    }
    update(particle) {
        if (!this.isEnabled(particle)) {
            return;
        }
        const position = particle.getPosition(), bounds = particle.destroyBounds;
        if (!bounds) {
            return;
        }
        if ((bounds.bottom !== undefined && position.y >= bounds.bottom) ||
            (bounds.left !== undefined && position.x <= bounds.left) ||
            (bounds.right !== undefined && position.x >= bounds.right) ||
            (bounds.top !== undefined && position.y <= bounds.top)) {
            particle.destroy();
        }
    }
    addSplitParticle(parent, splitParticlesOptions) {
        const destroyOptions = parent.options.destroy;
        if (!destroyOptions) {
            return;
        }
        const splitOptions = destroyOptions.split, options = loadParticlesOptions(this.engine, this.container, parent.options), factor = getValue(splitOptions.factor);
        options.color.load({
            value: {
                hsl: parent.getFillColor(),
            },
        });
        options.move.load({
            center: {
                x: parent.position.x,
                y: parent.position.y,
                mode: "precise",
            },
        });
        if (typeof options.size.value === "number") {
            options.size.value /= factor;
        }
        else {
            options.size.value.min /= factor;
            options.size.value.max /= factor;
        }
        options.load(splitParticlesOptions);
        const offset = splitOptions.sizeOffset ? setRangeValue(-parent.size.value, parent.size.value) : 0, position = {
            x: parent.position.x + randomInRange(offset),
            y: parent.position.y + randomInRange(offset),
        };
        return this.container.particles.addParticle(position, options, parent.group, (particle) => {
            var _a;
            if (particle.size.value < 0.5) {
                return false;
            }
            particle.velocity.length = randomInRange(setRangeValue(parent.velocity.length, particle.velocity.length));
            particle.splitCount = ((_a = parent.splitCount) !== null && _a !== void 0 ? _a : 0) + 1;
            particle.unbreakable = true;
            setTimeout(() => {
                particle.unbreakable = false;
            }, 500);
            return true;
        });
    }
    split(particle) {
        const destroyOptions = particle.options.destroy;
        if (!destroyOptions) {
            return;
        }
        const splitOptions = destroyOptions.split;
        if (splitOptions.count >= 0 &&
            (particle.splitCount === undefined || particle.splitCount++ > splitOptions.count)) {
            return;
        }
        const rate = getValue(splitOptions.rate), particlesSplitOptions = itemFromSingleOrMultiple(splitOptions.particles);
        for (let i = 0; i < rate; i++) {
            this.addSplitParticle(particle, particlesSplitOptions);
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-updater-destroy/esm/index.js

async function loadDestroyUpdater(engine) {
    await engine.addParticleUpdater("destroy", (container) => new DestroyUpdater(engine, container));
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-plugin-emitters/esm/Shapes/Circle/CircleShape.js

class CircleShape {
    randomPosition(position, size, fill) {
        const generateTheta = (x, y) => {
            const u = getRandom() / 4.0, theta = Math.atan((y / x) * Math.tan(2 * Math.PI * u)), v = getRandom();
            if (v < 0.25) {
                return theta;
            }
            else if (v < 0.5) {
                return Math.PI - theta;
            }
            else if (v < 0.75) {
                return Math.PI + theta;
            }
            else {
                return -theta;
            }
        }, radius = (x, y, theta) => (x * y) / Math.sqrt((y * Math.cos(theta)) ** 2 + (x * Math.sin(theta)) ** 2), [a, b] = [size.width / 2, size.height / 2], randomTheta = generateTheta(a, b), maxRadius = radius(a, b, randomTheta), randomRadius = fill ? maxRadius * Math.sqrt(getRandom()) : maxRadius;
        return {
            x: position.x + randomRadius * Math.cos(randomTheta),
            y: position.y + randomRadius * Math.sin(randomTheta),
        };
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-plugin-emitters/esm/Options/Classes/EmitterLife.js
class EmitterLife {
    constructor() {
        this.wait = false;
    }
    load(data) {
        if (data === undefined) {
            return;
        }
        if (data.count !== undefined) {
            this.count = data.count;
        }
        if (data.delay !== undefined) {
            this.delay = data.delay;
        }
        if (data.duration !== undefined) {
            this.duration = data.duration;
        }
        if (data.wait !== undefined) {
            this.wait = data.wait;
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-plugin-emitters/esm/Options/Classes/EmitterRate.js

class EmitterRate {
    constructor() {
        this.quantity = 1;
        this.delay = 0.1;
    }
    load(data) {
        if (data === undefined) {
            return;
        }
        if (data.quantity !== undefined) {
            this.quantity = setRangeValue(data.quantity);
        }
        if (data.delay !== undefined) {
            this.delay = setRangeValue(data.delay);
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-plugin-emitters/esm/Options/Classes/EmitterSize.js
class EmitterSize {
    constructor() {
        this.mode = "percent";
        this.height = 0;
        this.width = 0;
    }
    load(data) {
        if (data === undefined) {
            return;
        }
        if (data.mode !== undefined) {
            this.mode = data.mode;
        }
        if (data.height !== undefined) {
            this.height = data.height;
        }
        if (data.width !== undefined) {
            this.width = data.width;
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-plugin-emitters/esm/Options/Classes/Emitter.js




class Emitter {
    constructor() {
        this.autoPlay = true;
        this.fill = true;
        this.life = new EmitterLife();
        this.rate = new EmitterRate();
        this.shape = "square";
        this.startCount = 0;
    }
    load(data) {
        if (data === undefined) {
            return;
        }
        if (data.autoPlay !== undefined) {
            this.autoPlay = data.autoPlay;
        }
        if (data.size !== undefined) {
            if (this.size === undefined) {
                this.size = new EmitterSize();
            }
            this.size.load(data.size);
        }
        if (data.direction !== undefined) {
            this.direction = data.direction;
        }
        this.domId = data.domId;
        if (data.fill !== undefined) {
            this.fill = data.fill;
        }
        this.life.load(data.life);
        this.name = data.name;
        this.particles = executeOnSingleOrMultiple(data.particles, (particles) => {
            return deepExtend({}, particles);
        });
        this.rate.load(data.rate);
        if (data.shape !== undefined) {
            this.shape = data.shape;
        }
        if (data.position !== undefined) {
            this.position = {};
            if (data.position.x !== undefined) {
                this.position.x = setRangeValue(data.position.x);
            }
            if (data.position.y !== undefined) {
                this.position.y = setRangeValue(data.position.y);
            }
        }
        if (data.spawnColor !== undefined) {
            if (this.spawnColor === undefined) {
                this.spawnColor = new AnimatableColor();
            }
            this.spawnColor.load(data.spawnColor);
        }
        if (data.startCount !== undefined) {
            this.startCount = data.startCount;
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-plugin-emitters/esm/EmitterInstance.js



class EmitterInstance {
    constructor(engine, emitters, container, options, position) {
        var _a, _b, _c, _d, _e, _f, _g;
        var _h;
        this.emitters = emitters;
        this.container = container;
        this._engine = engine;
        this._currentDuration = 0;
        this._currentEmitDelay = 0;
        this._currentSpawnDelay = 0;
        this._initialPosition = position;
        if (options instanceof Emitter) {
            this.options = options;
        }
        else {
            this.options = new Emitter();
            this.options.load(options);
        }
        this._spawnDelay = (((_a = this.options.life.delay) !== null && _a !== void 0 ? _a : 0) * 1000) / this.container.retina.reduceFactor;
        this.position = (_b = this._initialPosition) !== null && _b !== void 0 ? _b : this.calcPosition();
        this.name = this.options.name;
        this._shape = (_c = this._engine.emitterShapeManager) === null || _c === void 0 ? void 0 : _c.getShape(this.options.shape);
        this.fill = this.options.fill;
        this._firstSpawn = !this.options.life.wait;
        this._startParticlesAdded = false;
        let particlesOptions = deepExtend({}, this.options.particles);
        particlesOptions !== null && particlesOptions !== void 0 ? particlesOptions : (particlesOptions = {});
        (_d = particlesOptions.move) !== null && _d !== void 0 ? _d : (particlesOptions.move = {});
        (_e = (_h = particlesOptions.move).direction) !== null && _e !== void 0 ? _e : (_h.direction = this.options.direction);
        if (this.options.spawnColor) {
            this.spawnColor = rangeColorToHsl(this.options.spawnColor);
        }
        this._paused = !this.options.autoPlay;
        this._particlesOptions = particlesOptions;
        this.size =
            (_f = this.options.size) !== null && _f !== void 0 ? _f : (() => {
                const size = new EmitterSize();
                size.load({
                    height: 0,
                    mode: "percent",
                    width: 0,
                });
                return size;
            })();
        this._lifeCount = (_g = this.options.life.count) !== null && _g !== void 0 ? _g : -1;
        this._immortal = this._lifeCount <= 0;
        this._engine.dispatchEvent("emitterCreated", {
            container,
            data: {
                emitter: this,
            },
        });
        this.play();
    }
    externalPause() {
        this._paused = true;
        this.pause();
    }
    externalPlay() {
        this._paused = false;
        this.play();
    }
    getPosition() {
        if (this.options.domId) {
            const container = this.container, element = document.getElementById(this.options.domId);
            if (element) {
                const elRect = element.getBoundingClientRect();
                return {
                    x: (elRect.x + elRect.width / 2) * container.retina.pixelRatio,
                    y: (elRect.y + elRect.height / 2) * container.retina.pixelRatio,
                };
            }
        }
        return this.position;
    }
    getSize() {
        const container = this.container;
        if (this.options.domId) {
            const element = document.getElementById(this.options.domId);
            if (element) {
                const elRect = element.getBoundingClientRect();
                return {
                    width: elRect.width * container.retina.pixelRatio,
                    height: elRect.height * container.retina.pixelRatio,
                };
            }
        }
        return {
            width: this.size.mode === "percent"
                ? (container.canvas.size.width * this.size.width) / 100
                : this.size.width,
            height: this.size.mode === "percent"
                ? (container.canvas.size.height * this.size.height) / 100
                : this.size.height,
        };
    }
    pause() {
        if (this._paused) {
            return;
        }
        delete this._emitDelay;
    }
    play() {
        var _a;
        if (this._paused) {
            return;
        }
        if (!(this.container.retina.reduceFactor &&
            (this._lifeCount > 0 || this._immortal || !this.options.life.count) &&
            (this._firstSpawn || this._currentSpawnDelay >= ((_a = this._spawnDelay) !== null && _a !== void 0 ? _a : 0)))) {
            return;
        }
        if (this._emitDelay === undefined) {
            const delay = getRangeValue(this.options.rate.delay);
            this._emitDelay = (1000 * delay) / this.container.retina.reduceFactor;
        }
        if (this._lifeCount > 0 || this._immortal) {
            this.prepareToDie();
        }
    }
    resize() {
        const initialPosition = this._initialPosition;
        this.position =
            initialPosition && isPointInside(initialPosition, this.container.canvas.size, Vector.origin)
                ? initialPosition
                : this.calcPosition();
    }
    update(delta) {
        var _a, _b, _c;
        if (this._paused) {
            return;
        }
        if (this._firstSpawn) {
            this._firstSpawn = false;
            this._currentSpawnDelay = (_a = this._spawnDelay) !== null && _a !== void 0 ? _a : 0;
            this._currentEmitDelay = (_b = this._emitDelay) !== null && _b !== void 0 ? _b : 0;
        }
        if (!this._startParticlesAdded) {
            this._startParticlesAdded = true;
            this.emitParticles(this.options.startCount);
        }
        if (this._duration !== undefined) {
            this._currentDuration += delta.value;
            if (this._currentDuration >= this._duration) {
                this.pause();
                if (this._spawnDelay !== undefined) {
                    delete this._spawnDelay;
                }
                if (!this._immortal) {
                    this._lifeCount--;
                }
                if (this._lifeCount > 0 || this._immortal) {
                    this.position = this.calcPosition();
                    this._spawnDelay = (((_c = this.options.life.delay) !== null && _c !== void 0 ? _c : 0) * 1000) / this.container.retina.reduceFactor;
                }
                else {
                    this.destroy();
                }
                this._currentDuration -= this._duration;
                delete this._duration;
            }
        }
        if (this._spawnDelay !== undefined) {
            this._currentSpawnDelay += delta.value;
            if (this._currentSpawnDelay >= this._spawnDelay) {
                this._engine.dispatchEvent("emitterPlay", {
                    container: this.container,
                });
                this.play();
                this._currentSpawnDelay -= this._currentSpawnDelay;
                delete this._spawnDelay;
            }
        }
        if (this._emitDelay !== undefined) {
            this._currentEmitDelay += delta.value;
            if (this._currentEmitDelay >= this._emitDelay) {
                this.emit();
                this._currentEmitDelay -= this._emitDelay;
            }
        }
    }
    calcPosition() {
        return calcPositionOrRandomFromSizeRanged({
            size: this.container.canvas.size,
            position: this.options.position,
        });
    }
    destroy() {
        this.emitters.removeEmitter(this);
        this._engine.dispatchEvent("emitterDestroyed", {
            container: this.container,
            data: {
                emitter: this,
            },
        });
    }
    emit() {
        if (this._paused) {
            return;
        }
        const quantity = getRangeValue(this.options.rate.quantity);
        this.emitParticles(quantity);
    }
    emitParticles(quantity) {
        var _a, _b, _c;
        const position = this.getPosition(), size = this.getSize(), singleParticlesOptions = itemFromSingleOrMultiple(this._particlesOptions);
        for (let i = 0; i < quantity; i++) {
            const particlesOptions = deepExtend({}, singleParticlesOptions);
            if (this.spawnColor) {
                const hslAnimation = (_a = this.options.spawnColor) === null || _a === void 0 ? void 0 : _a.animation;
                if (hslAnimation) {
                    this.spawnColor.h = this.setColorAnimation(hslAnimation.h, this.spawnColor.h, 360);
                    this.spawnColor.s = this.setColorAnimation(hslAnimation.s, this.spawnColor.s, 100);
                    this.spawnColor.l = this.setColorAnimation(hslAnimation.l, this.spawnColor.l, 100);
                }
                if (!particlesOptions.color) {
                    particlesOptions.color = {
                        value: this.spawnColor,
                    };
                }
                else {
                    particlesOptions.color.value = this.spawnColor;
                }
            }
            if (!position) {
                return;
            }
            const pPosition = (_c = (_b = this._shape) === null || _b === void 0 ? void 0 : _b.randomPosition(position, size, this.fill)) !== null && _c !== void 0 ? _c : position;
            this.container.particles.addParticle(pPosition, particlesOptions);
        }
    }
    prepareToDie() {
        var _a;
        if (this._paused) {
            return;
        }
        const duration = (_a = this.options.life) === null || _a === void 0 ? void 0 : _a.duration;
        if (this.container.retina.reduceFactor &&
            (this._lifeCount > 0 || this._immortal) &&
            duration !== undefined &&
            duration > 0) {
            this._duration = duration * 1000;
        }
    }
    setColorAnimation(animation, initValue, maxValue) {
        var _a;
        const container = this.container;
        if (!animation.enable) {
            return initValue;
        }
        const colorOffset = randomInRange(animation.offset), delay = getRangeValue(this.options.rate.delay), emitFactor = (1000 * delay) / container.retina.reduceFactor, colorSpeed = getRangeValue((_a = animation.speed) !== null && _a !== void 0 ? _a : 0);
        return (initValue + (colorSpeed * container.fpsLimit) / emitFactor + colorOffset * 3.6) % maxValue;
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-plugin-emitters/esm/Emitters.js



class Emitters {
    constructor(engine, container) {
        this.container = container;
        this._engine = engine;
        this.array = [];
        this.emitters = [];
        this.interactivityEmitters = {
            random: {
                count: 1,
                enable: false,
            },
            value: [],
        };
        container.getEmitter = (idxOrName) => idxOrName === undefined || typeof idxOrName === "number"
            ? this.array[idxOrName || 0]
            : this.array.find((t) => t.name === idxOrName);
        container.addEmitter = (options, position) => this.addEmitter(options, position);
        container.removeEmitter = (idxOrName) => {
            const emitter = container.getEmitter(idxOrName);
            if (emitter) {
                this.removeEmitter(emitter);
            }
        };
        container.playEmitter = (idxOrName) => {
            const emitter = container.getEmitter(idxOrName);
            if (emitter) {
                emitter.externalPlay();
            }
        };
        container.pauseEmitter = (idxOrName) => {
            const emitter = container.getEmitter(idxOrName);
            if (emitter) {
                emitter.externalPause();
            }
        };
    }
    addEmitter(options, position) {
        const emitterOptions = new Emitter();
        emitterOptions.load(options);
        const emitter = new EmitterInstance(this._engine, this, this.container, emitterOptions, position);
        this.array.push(emitter);
        return emitter;
    }
    handleClickMode(mode) {
        const emitterOptions = this.emitters, modeEmitters = this.interactivityEmitters;
        if (mode === "emitter") {
            let emittersModeOptions;
            if (modeEmitters && modeEmitters.value instanceof Array) {
                if (modeEmitters.value.length > 0 && modeEmitters.random.enable) {
                    emittersModeOptions = [];
                    const usedIndexes = [];
                    for (let i = 0; i < modeEmitters.random.count; i++) {
                        const idx = arrayRandomIndex(modeEmitters.value);
                        if (usedIndexes.includes(idx) && usedIndexes.length < modeEmitters.value.length) {
                            i--;
                            continue;
                        }
                        usedIndexes.push(idx);
                        emittersModeOptions.push(itemFromArray(modeEmitters.value, idx));
                    }
                }
                else {
                    emittersModeOptions = modeEmitters.value;
                }
            }
            else {
                emittersModeOptions = modeEmitters === null || modeEmitters === void 0 ? void 0 : modeEmitters.value;
            }
            const emittersOptions = emittersModeOptions !== null && emittersModeOptions !== void 0 ? emittersModeOptions : emitterOptions, ePosition = this.container.interactivity.mouse.clickPosition;
            executeOnSingleOrMultiple(emittersOptions, (emitter) => {
                this.addEmitter(emitter, ePosition);
            });
        }
    }
    async init() {
        this.emitters = this.container.actualOptions.emitters;
        this.interactivityEmitters = this.container.actualOptions.interactivity.modes.emitters;
        if (this.emitters instanceof Array) {
            for (const emitterOptions of this.emitters) {
                this.addEmitter(emitterOptions);
            }
        }
        else {
            this.addEmitter(this.emitters);
        }
    }
    pause() {
        for (const emitter of this.array) {
            emitter.pause();
        }
    }
    play() {
        for (const emitter of this.array) {
            emitter.play();
        }
    }
    removeEmitter(emitter) {
        const index = this.array.indexOf(emitter);
        if (index >= 0) {
            this.array.splice(index, 1);
        }
    }
    resize() {
        for (const emitter of this.array) {
            emitter.resize();
        }
    }
    stop() {
        this.array = [];
    }
    update(delta) {
        for (const emitter of this.array) {
            emitter.update(delta);
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-plugin-emitters/esm/ShapeManager.js
const shapes = new Map();
class ShapeManager {
    constructor(engine) {
        this._engine = engine;
    }
    addShape(name, drawer) {
        if (!this.getShape(name)) {
            shapes.set(name, drawer);
        }
    }
    getShape(name) {
        return shapes.get(name);
    }
    getSupportedShapes() {
        return shapes.keys();
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-plugin-emitters/esm/Shapes/Square/SquareShape.js

function randomSquareCoordinate(position, offset) {
    return position + offset * (getRandom() - 0.5);
}
class SquareShape {
    randomPosition(position, size, fill) {
        if (fill) {
            return {
                x: randomSquareCoordinate(position.x, size.width),
                y: randomSquareCoordinate(position.y, size.height),
            };
        }
        else {
            const halfW = size.width / 2, halfH = size.height / 2, side = Math.floor(getRandom() * 4), v = (getRandom() - 0.5) * 2;
            switch (side) {
                case 0:
                    return {
                        x: position.x + v * halfW,
                        y: position.y - halfH,
                    };
                case 1:
                    return {
                        x: position.x - halfW,
                        y: position.y + v * halfH,
                    };
                case 2:
                    return {
                        x: position.x + v * halfW,
                        y: position.y + halfH,
                    };
                case 3:
                default:
                    return {
                        x: position.x + halfW,
                        y: position.y + v * halfH,
                    };
            }
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-plugin-emitters/esm/index.js






class EmittersPlugin {
    constructor(engine) {
        this._engine = engine;
        this.id = "emitters";
    }
    getPlugin(container) {
        return new Emitters(this._engine, container);
    }
    loadOptions(options, source) {
        var _a, _b, _c, _d, _e, _f;
        if (!this.needsPlugin(options) && !this.needsPlugin(source)) {
            return;
        }
        if (source === null || source === void 0 ? void 0 : source.emitters) {
            options.emitters = executeOnSingleOrMultiple(source.emitters, (emitter) => {
                const tmp = new Emitter();
                tmp.load(emitter);
                return tmp;
            });
        }
        const interactivityEmitters = (_b = (_a = source === null || source === void 0 ? void 0 : source.interactivity) === null || _a === void 0 ? void 0 : _a.modes) === null || _b === void 0 ? void 0 : _b.emitters;
        if (interactivityEmitters) {
            if (interactivityEmitters instanceof Array) {
                options.interactivity.modes.emitters = {
                    random: {
                        count: 1,
                        enable: true,
                    },
                    value: interactivityEmitters.map((s) => {
                        const tmp = new Emitter();
                        tmp.load(s);
                        return tmp;
                    }),
                };
            }
            else {
                const emitterMode = interactivityEmitters;
                if (emitterMode.value !== undefined) {
                    if (emitterMode.value instanceof Array) {
                        options.interactivity.modes.emitters = {
                            random: {
                                count: (_c = emitterMode.random.count) !== null && _c !== void 0 ? _c : 1,
                                enable: (_d = emitterMode.random.enable) !== null && _d !== void 0 ? _d : false,
                            },
                            value: emitterMode.value.map((s) => {
                                const tmp = new Emitter();
                                tmp.load(s);
                                return tmp;
                            }),
                        };
                    }
                    else {
                        const tmp = new Emitter();
                        tmp.load(emitterMode.value);
                        options.interactivity.modes.emitters = {
                            random: {
                                count: (_e = emitterMode.random.count) !== null && _e !== void 0 ? _e : 1,
                                enable: (_f = emitterMode.random.enable) !== null && _f !== void 0 ? _f : false,
                            },
                            value: tmp,
                        };
                    }
                }
                else {
                    const emitterOptions = (options.interactivity.modes.emitters = {
                        random: {
                            count: 1,
                            enable: false,
                        },
                        value: new Emitter(),
                    });
                    emitterOptions.value.load(interactivityEmitters);
                }
            }
        }
    }
    needsPlugin(options) {
        var _a, _b, _c;
        if (!options) {
            return false;
        }
        const emitters = options.emitters;
        return ((emitters instanceof Array && !!emitters.length) ||
            emitters !== undefined ||
            (!!((_c = (_b = (_a = options.interactivity) === null || _a === void 0 ? void 0 : _a.events) === null || _b === void 0 ? void 0 : _b.onClick) === null || _c === void 0 ? void 0 : _c.mode) &&
                isInArray("emitter", options.interactivity.events.onClick.mode)));
    }
}
async function loadEmittersPlugin(engine) {
    if (!engine.emitterShapeManager) {
        engine.emitterShapeManager = new ShapeManager(engine);
    }
    if (!engine.addEmitterShape) {
        engine.addEmitterShape = (name, shape) => {
            var _a;
            (_a = engine.emitterShapeManager) === null || _a === void 0 ? void 0 : _a.addShape(name, shape);
        };
    }
    const plugin = new EmittersPlugin(engine);
    await engine.addPlugin(plugin);
    engine.addEmitterShape("circle", new CircleShape());
    engine.addEmitterShape("square", new SquareShape());
}





;// CONCATENATED MODULE: ./node_modules/tsparticles-interaction-external-trail/esm/Options/Classes/Trail.js

class Trail {
    constructor() {
        this.delay = 1;
        this.pauseOnStop = false;
        this.quantity = 1;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.delay !== undefined) {
            this.delay = data.delay;
        }
        if (data.quantity !== undefined) {
            this.quantity = data.quantity;
        }
        if (data.particles !== undefined) {
            this.particles = deepExtend({}, data.particles);
        }
        if (data.pauseOnStop !== undefined) {
            this.pauseOnStop = data.pauseOnStop;
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-interaction-external-trail/esm/TrailMaker.js


class TrailMaker extends ExternalInteractorBase {
    constructor(container) {
        super(container);
        this._delay = 0;
    }
    clear() {
    }
    init() {
    }
    async interact(delta) {
        var _a, _b, _c, _d;
        if (!this.container.retina.reduceFactor) {
            return;
        }
        const container = this.container, options = container.actualOptions, trailOptions = options.interactivity.modes.trail;
        if (!trailOptions) {
            return;
        }
        const optDelay = (trailOptions.delay * 1000) / this.container.retina.reduceFactor;
        if (this._delay < optDelay) {
            this._delay += delta.value;
        }
        if (this._delay < optDelay) {
            return;
        }
        let canEmit = true;
        if (trailOptions.pauseOnStop) {
            if (container.interactivity.mouse.position === this._lastPosition ||
                (((_a = container.interactivity.mouse.position) === null || _a === void 0 ? void 0 : _a.x) === ((_b = this._lastPosition) === null || _b === void 0 ? void 0 : _b.x) &&
                    ((_c = container.interactivity.mouse.position) === null || _c === void 0 ? void 0 : _c.y) === ((_d = this._lastPosition) === null || _d === void 0 ? void 0 : _d.y))) {
                canEmit = false;
            }
        }
        if (container.interactivity.mouse.position) {
            this._lastPosition = {
                x: container.interactivity.mouse.position.x,
                y: container.interactivity.mouse.position.y,
            };
        }
        else {
            delete this._lastPosition;
        }
        if (canEmit) {
            container.particles.push(trailOptions.quantity, container.interactivity.mouse, trailOptions.particles);
        }
        this._delay -= optDelay;
    }
    isEnabled(particle) {
        var _a;
        const container = this.container, options = container.actualOptions, mouse = container.interactivity.mouse, events = ((_a = particle === null || particle === void 0 ? void 0 : particle.interactivity) !== null && _a !== void 0 ? _a : options.interactivity).events;
        return ((mouse.clicking && mouse.inside && !!mouse.position && isInArray("trail", events.onClick.mode)) ||
            (mouse.inside && !!mouse.position && isInArray("trail", events.onHover.mode)));
    }
    loadModeOptions(options, ...sources) {
        if (!options.trail) {
            options.trail = new Trail();
        }
        for (const source of sources) {
            options.trail.load(source === null || source === void 0 ? void 0 : source.trail);
        }
    }
    reset() {
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-interaction-external-trail/esm/index.js

async function loadExternalTrailInteraction(engine) {
    await engine.addInteractor("externalTrail", (container) => new TrailMaker(container));
}



;// CONCATENATED MODULE: ./node_modules/tsparticles-updater-roll/esm/Options/Classes/RollLight.js

class RollLight {
    constructor() {
        this.enable = false;
        this.value = 0;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.value !== undefined) {
            this.value = setRangeValue(data.value);
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-updater-roll/esm/Options/Classes/Roll.js


class Roll {
    constructor() {
        this.darken = new RollLight();
        this.enable = false;
        this.enlighten = new RollLight();
        this.mode = "vertical";
        this.speed = 25;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.backColor !== undefined) {
            this.backColor = OptionsColor.create(this.backColor, data.backColor);
        }
        this.darken.load(data.darken);
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        this.enlighten.load(data.enlighten);
        if (data.mode !== undefined) {
            this.mode = data.mode;
        }
        if (data.speed !== undefined) {
            this.speed = setRangeValue(data.speed);
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-updater-roll/esm/RollUpdater.js


function updateRoll(particle, delta) {
    const roll = particle.options.roll;
    if (!particle.roll || !(roll === null || roll === void 0 ? void 0 : roll.enable)) {
        return;
    }
    const speed = particle.roll.speed * delta.factor, max = 2 * Math.PI;
    particle.roll.angle += speed;
    if (particle.roll.angle > max) {
        particle.roll.angle -= max;
    }
}
class RollUpdater {
    getTransformValues(particle) {
        var _a;
        const roll = ((_a = particle.roll) === null || _a === void 0 ? void 0 : _a.enable) && particle.roll, rollHorizontal = roll && roll.horizontal, rollVertical = roll && roll.vertical;
        return {
            a: rollHorizontal ? Math.cos(roll.angle) : undefined,
            d: rollVertical ? Math.sin(roll.angle) : undefined,
        };
    }
    init(particle) {
        const rollOpt = particle.options.roll;
        if (rollOpt === null || rollOpt === void 0 ? void 0 : rollOpt.enable) {
            particle.roll = {
                enable: rollOpt.enable,
                horizontal: rollOpt.mode === "horizontal" || rollOpt.mode === "both",
                vertical: rollOpt.mode === "vertical" || rollOpt.mode === "both",
                angle: getRandom() * Math.PI * 2,
                speed: getRangeValue(rollOpt.speed) / 360,
            };
            if (rollOpt.backColor) {
                particle.backColor = rangeColorToHsl(rollOpt.backColor);
            }
            else if (rollOpt.darken.enable && rollOpt.enlighten.enable) {
                const alterType = getRandom() >= 0.5 ? "darken" : "enlighten";
                particle.roll.alter = {
                    type: alterType,
                    value: getRangeValue(alterType === "darken" ? rollOpt.darken.value : rollOpt.enlighten.value),
                };
            }
            else if (rollOpt.darken.enable) {
                particle.roll.alter = {
                    type: "darken",
                    value: getRangeValue(rollOpt.darken.value),
                };
            }
            else if (rollOpt.enlighten.enable) {
                particle.roll.alter = {
                    type: "enlighten",
                    value: getRangeValue(rollOpt.enlighten.value),
                };
            }
        }
        else {
            particle.roll = {
                enable: false,
                horizontal: false,
                vertical: false,
                angle: 0,
                speed: 0,
            };
        }
    }
    isEnabled(particle) {
        const roll = particle.options.roll;
        return !particle.destroyed && !particle.spawning && !!(roll === null || roll === void 0 ? void 0 : roll.enable);
    }
    loadOptions(options, ...sources) {
        if (!options.roll) {
            options.roll = new Roll();
        }
        for (const source of sources) {
            options.roll.load(source === null || source === void 0 ? void 0 : source.roll);
        }
    }
    update(particle, delta) {
        if (!this.isEnabled(particle)) {
            return;
        }
        updateRoll(particle, delta);
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-updater-roll/esm/index.js

async function loadRollUpdater(engine) {
    await engine.addParticleUpdater("roll", () => new RollUpdater());
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-particles.js/esm/index.js
const initPjs = (engine) => {
    const particlesJS = (tagId, options) => {
        return engine.load(tagId, options);
    };
    particlesJS.load = (tagId, pathConfigJson, callback) => {
        engine
            .loadJSON(tagId, pathConfigJson)
            .then((container) => {
            if (container) {
                callback(container);
            }
        })
            .catch(() => {
            callback(undefined);
        });
    };
    particlesJS.setOnClickHandler = (callback) => {
        engine.setOnClickHandler(callback);
    };
    const pJSDom = engine.dom();
    return { particlesJS, pJSDom };
};


;// CONCATENATED MODULE: ./node_modules/tsparticles-updater-angle/esm/Options/Classes/RotateAnimation.js

class RotateAnimation {
    constructor() {
        this.enable = false;
        this.speed = 0;
        this.decay = 0;
        this.sync = false;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.speed !== undefined) {
            this.speed = setRangeValue(data.speed);
        }
        if (data.decay !== undefined) {
            this.decay = setRangeValue(data.decay);
        }
        if (data.sync !== undefined) {
            this.sync = data.sync;
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-updater-angle/esm/Options/Classes/Rotate.js


class Rotate extends ValueWithRandom {
    constructor() {
        super();
        this.animation = new RotateAnimation();
        this.direction = "clockwise";
        this.path = false;
        this.value = 0;
    }
    load(data) {
        if (!data) {
            return;
        }
        super.load(data);
        if (data.direction !== undefined) {
            this.direction = data.direction;
        }
        this.animation.load(data.animation);
        if (data.path !== undefined) {
            this.path = data.path;
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-updater-angle/esm/RotateUpdater.js


function updateAngle(particle, delta) {
    var _a, _b;
    const rotate = particle.rotate, rotateOptions = particle.options.rotate;
    if (!rotate || !rotateOptions) {
        return;
    }
    const rotateAnimation = rotateOptions.animation, speed = ((_a = rotate.velocity) !== null && _a !== void 0 ? _a : 0) * delta.factor, max = 2 * Math.PI, decay = (_b = rotate.decay) !== null && _b !== void 0 ? _b : 1;
    if (!rotateAnimation.enable) {
        return;
    }
    switch (rotate.status) {
        case "increasing":
            rotate.value += speed;
            if (rotate.value > max) {
                rotate.value -= max;
            }
            break;
        case "decreasing":
        default:
            rotate.value -= speed;
            if (rotate.value < 0) {
                rotate.value += max;
            }
            break;
    }
    if (rotate.velocity && decay !== 1) {
        rotate.velocity *= decay;
    }
}
class RotateUpdater {
    constructor(container) {
        this.container = container;
    }
    init(particle) {
        const rotateOptions = particle.options.rotate;
        if (!rotateOptions) {
            return;
        }
        particle.rotate = {
            enable: rotateOptions.animation.enable,
            value: (getRangeValue(rotateOptions.value) * Math.PI) / 180,
        };
        particle.pathRotation = rotateOptions.path;
        let rotateDirection = rotateOptions.direction;
        if (rotateDirection === "random") {
            const index = Math.floor(getRandom() * 2);
            rotateDirection = index > 0 ? "counter-clockwise" : "clockwise";
        }
        switch (rotateDirection) {
            case "counter-clockwise":
            case "counterClockwise":
                particle.rotate.status = "decreasing";
                break;
            case "clockwise":
                particle.rotate.status = "increasing";
                break;
        }
        const rotateAnimation = rotateOptions.animation;
        if (rotateAnimation.enable) {
            particle.rotate.decay = 1 - getRangeValue(rotateAnimation.decay);
            particle.rotate.velocity =
                (getRangeValue(rotateAnimation.speed) / 360) * this.container.retina.reduceFactor;
            if (!rotateAnimation.sync) {
                particle.rotate.velocity *= getRandom();
            }
        }
        particle.rotation = particle.rotate.value;
    }
    isEnabled(particle) {
        const rotate = particle.options.rotate;
        if (!rotate) {
            return false;
        }
        return !particle.destroyed && !particle.spawning && rotate.animation.enable && !rotate.path;
    }
    loadOptions(options, ...sources) {
        if (!options.rotate) {
            options.rotate = new Rotate();
        }
        for (const source of sources) {
            options.rotate.load(source === null || source === void 0 ? void 0 : source.rotate);
        }
    }
    update(particle, delta) {
        var _a, _b;
        if (!this.isEnabled(particle)) {
            return;
        }
        updateAngle(particle, delta);
        particle.rotation = (_b = (_a = particle.rotate) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : 0;
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-updater-angle/esm/index.js

async function loadAngleUpdater(engine) {
    await engine.addParticleUpdater("rotate", (container) => new RotateUpdater(container));
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-move-base/esm/Utils.js

function applyDistance(particle) {
    const initialPosition = particle.initialPosition, { dx, dy } = getDistances(initialPosition, particle.position), dxFixed = Math.abs(dx), dyFixed = Math.abs(dy), hDistance = particle.retina.maxDistance.horizontal, vDistance = particle.retina.maxDistance.vertical;
    if (!hDistance && !vDistance) {
        return;
    }
    if (((hDistance && dxFixed >= hDistance) || (vDistance && dyFixed >= vDistance)) && !particle.misplaced) {
        particle.misplaced = (!!hDistance && dxFixed > hDistance) || (!!vDistance && dyFixed > vDistance);
        if (hDistance) {
            particle.velocity.x = particle.velocity.y / 2 - particle.velocity.x;
        }
        if (vDistance) {
            particle.velocity.y = particle.velocity.x / 2 - particle.velocity.y;
        }
    }
    else if ((!hDistance || dxFixed < hDistance) && (!vDistance || dyFixed < vDistance) && particle.misplaced) {
        particle.misplaced = false;
    }
    else if (particle.misplaced) {
        const pos = particle.position, vel = particle.velocity;
        if (hDistance && ((pos.x < initialPosition.x && vel.x < 0) || (pos.x > initialPosition.x && vel.x > 0))) {
            vel.x *= -getRandom();
        }
        if (vDistance && ((pos.y < initialPosition.y && vel.y < 0) || (pos.y > initialPosition.y && vel.y > 0))) {
            vel.y *= -getRandom();
        }
    }
}
function spin(particle, moveSpeed) {
    const container = particle.container;
    if (!particle.spin) {
        return;
    }
    const updateFunc = {
        x: particle.spin.direction === "clockwise" ? Math.cos : Math.sin,
        y: particle.spin.direction === "clockwise" ? Math.sin : Math.cos,
    };
    particle.position.x = particle.spin.center.x + particle.spin.radius * updateFunc.x(particle.spin.angle);
    particle.position.y = particle.spin.center.y + particle.spin.radius * updateFunc.y(particle.spin.angle);
    particle.spin.radius += particle.spin.acceleration;
    const maxCanvasSize = Math.max(container.canvas.size.width, container.canvas.size.height);
    if (particle.spin.radius > maxCanvasSize / 2) {
        particle.spin.radius = maxCanvasSize / 2;
        particle.spin.acceleration *= -1;
    }
    else if (particle.spin.radius < 0) {
        particle.spin.radius = 0;
        particle.spin.acceleration *= -1;
    }
    particle.spin.angle += (moveSpeed / 100) * (1 - particle.spin.radius / maxCanvasSize);
}
function applyPath(particle, delta) {
    var _a;
    const particlesOptions = particle.options, pathOptions = particlesOptions.move.path, pathEnabled = pathOptions.enable;
    if (!pathEnabled) {
        return;
    }
    if (particle.lastPathTime <= particle.pathDelay) {
        particle.lastPathTime += delta.value;
        return;
    }
    const path = (_a = particle.pathGenerator) === null || _a === void 0 ? void 0 : _a.generate(particle);
    if (path) {
        particle.velocity.addTo(path);
    }
    if (pathOptions.clamp) {
        particle.velocity.x = clamp(particle.velocity.x, -1, 1);
        particle.velocity.y = clamp(particle.velocity.y, -1, 1);
    }
    particle.lastPathTime -= particle.pathDelay;
}
function getProximitySpeedFactor(particle) {
    return particle.slow.inRange ? particle.slow.factor : 1;
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-move-base/esm/BaseMover.js


class BaseMover {
    init(particle) {
        var _a;
        const container = particle.container, options = particle.options, gravityOptions = options.move.gravity, spinOptions = options.move.spin;
        particle.gravity = {
            enable: gravityOptions.enable,
            acceleration: getRangeValue(gravityOptions.acceleration),
            inverse: gravityOptions.inverse,
        };
        if (spinOptions.enable) {
            const spinPos = (_a = spinOptions.position) !== null && _a !== void 0 ? _a : { x: 50, y: 50 }, spinCenter = {
                x: (spinPos.x / 100) * container.canvas.size.width,
                y: (spinPos.y / 100) * container.canvas.size.height,
            }, pos = particle.getPosition(), distance = getDistance(pos, spinCenter), spinAcceleration = getRangeValue(spinOptions.acceleration);
            particle.retina.spinAcceleration = spinAcceleration * container.retina.pixelRatio;
            particle.spin = {
                center: spinCenter,
                direction: particle.velocity.x >= 0 ? "clockwise" : "counter-clockwise",
                angle: particle.velocity.angle,
                radius: distance,
                acceleration: particle.retina.spinAcceleration,
            };
        }
    }
    isEnabled(particle) {
        return !particle.destroyed && particle.options.move.enable;
    }
    move(particle, delta) {
        var _a, _b, _c;
        var _d, _e;
        const particleOptions = particle.options, moveOptions = particleOptions.move;
        if (!moveOptions.enable) {
            return;
        }
        const container = particle.container, slowFactor = getProximitySpeedFactor(particle), baseSpeed = ((_a = (_d = particle.retina).moveSpeed) !== null && _a !== void 0 ? _a : (_d.moveSpeed = getRangeValue(moveOptions.speed) * container.retina.pixelRatio)) *
            container.retina.reduceFactor, moveDrift = ((_b = (_e = particle.retina).moveDrift) !== null && _b !== void 0 ? _b : (_e.moveDrift = getRangeValue(particle.options.move.drift) * container.retina.pixelRatio)), maxSize = getRangeMax(particleOptions.size.value) * container.retina.pixelRatio, sizeFactor = moveOptions.size ? particle.getRadius() / maxSize : 1, speedFactor = sizeFactor * slowFactor * (delta.factor || 1), diffFactor = 2, moveSpeed = (baseSpeed * speedFactor) / diffFactor;
        if (moveOptions.spin.enable) {
            spin(particle, moveSpeed);
        }
        else {
            applyPath(particle, delta);
            const gravityOptions = particle.gravity, gravityFactor = (gravityOptions === null || gravityOptions === void 0 ? void 0 : gravityOptions.enable) && gravityOptions.inverse ? -1 : 1;
            if ((gravityOptions === null || gravityOptions === void 0 ? void 0 : gravityOptions.enable) && moveSpeed) {
                particle.velocity.y +=
                    (gravityFactor * (gravityOptions.acceleration * delta.factor)) / (60 * moveSpeed);
            }
            if (moveDrift && moveSpeed) {
                particle.velocity.x += (moveDrift * delta.factor) / (60 * moveSpeed);
            }
            const decay = particle.moveDecay;
            if (decay != 1) {
                particle.velocity.multTo(decay);
            }
            const velocity = particle.velocity.mult(moveSpeed), maxSpeed = (_c = particle.retina.maxSpeed) !== null && _c !== void 0 ? _c : container.retina.maxSpeed;
            if ((gravityOptions === null || gravityOptions === void 0 ? void 0 : gravityOptions.enable) &&
                maxSpeed > 0 &&
                ((!gravityOptions.inverse && velocity.y >= 0 && velocity.y >= maxSpeed) ||
                    (gravityOptions.inverse && velocity.y <= 0 && velocity.y <= -maxSpeed))) {
                velocity.y = gravityFactor * maxSpeed;
                if (moveSpeed) {
                    particle.velocity.y = velocity.y / moveSpeed;
                }
            }
            const zIndexOptions = particle.options.zIndex, zVelocityFactor = (1 - particle.zIndexFactor) ** zIndexOptions.velocityRate;
            if (zVelocityFactor != 1) {
                velocity.multTo(zVelocityFactor);
            }
            particle.position.addTo(velocity);
            if (moveOptions.vibrate) {
                particle.position.x += Math.sin(particle.position.x * Math.cos(particle.position.y));
                particle.position.y += Math.cos(particle.position.y * Math.sin(particle.position.x));
            }
        }
        applyDistance(particle);
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-move-base/esm/index.js

async function loadBaseMover(engine) {
    engine.addMover("base", () => new BaseMover());
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-shape-circle/esm/CircleDrawer.js
class CircleDrawer {
    draw(context, particle, radius) {
        if (!particle.circleRange) {
            particle.circleRange = { min: 0, max: Math.PI * 2 };
        }
        const circleRange = particle.circleRange;
        context.arc(0, 0, radius, circleRange.min, circleRange.max, false);
    }
    getSidesCount() {
        return 12;
    }
    particleInit(container, particle) {
        var _a;
        const shapeData = particle.shapeData, angle = (_a = shapeData === null || shapeData === void 0 ? void 0 : shapeData.angle) !== null && _a !== void 0 ? _a : {
            max: 360,
            min: 0,
        };
        particle.circleRange =
            typeof angle !== "object"
                ? {
                    min: 0,
                    max: (angle * Math.PI) / 180,
                }
                : { min: (angle.min * Math.PI) / 180, max: (angle.max * Math.PI) / 180 };
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-shape-circle/esm/index.js

async function loadCircleShape(engine) {
    await engine.addShape("circle", new CircleDrawer());
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-updater-color/esm/ColorUpdater.js

function updateColorValue(delta, value, valueAnimation, max, decrease) {
    var _a, _b;
    const colorValue = value;
    if (!colorValue ||
        !valueAnimation.enable ||
        (colorValue.loops !== undefined &&
            colorValue.maxLoops !== undefined &&
            colorValue.maxLoops > 0 &&
            colorValue.loops >= colorValue.maxLoops)) {
        return;
    }
    const offset = randomInRange(valueAnimation.offset), velocity = ((_a = value.velocity) !== null && _a !== void 0 ? _a : 0) * delta.factor + offset * 3.6, decay = (_b = value.decay) !== null && _b !== void 0 ? _b : 1;
    if (!decrease || colorValue.status === "increasing") {
        colorValue.value += velocity;
        if (colorValue.value > max) {
            if (!colorValue.loops) {
                colorValue.loops = 0;
            }
            colorValue.loops++;
            if (decrease) {
                colorValue.status = "decreasing";
                colorValue.value -= colorValue.value % max;
            }
        }
    }
    else {
        colorValue.value -= velocity;
        if (colorValue.value < 0) {
            if (!colorValue.loops) {
                colorValue.loops = 0;
            }
            colorValue.loops++;
            colorValue.status = "increasing";
            colorValue.value += colorValue.value;
        }
    }
    if (colorValue.velocity && decay !== 1) {
        colorValue.velocity *= decay;
    }
    if (colorValue.value > max) {
        colorValue.value %= max;
    }
}
function updateColor(particle, delta) {
    var _a, _b, _c;
    const animationOptions = particle.options.color.animation;
    const h = (_a = particle.color) === null || _a === void 0 ? void 0 : _a.h, s = (_b = particle.color) === null || _b === void 0 ? void 0 : _b.s, l = (_c = particle.color) === null || _c === void 0 ? void 0 : _c.l;
    if (h) {
        updateColorValue(delta, h, animationOptions.h, 360, false);
    }
    if (s) {
        updateColorValue(delta, s, animationOptions.s, 100, true);
    }
    if (l) {
        updateColorValue(delta, l, animationOptions.l, 100, true);
    }
}
class ColorUpdater {
    constructor(container) {
        this.container = container;
    }
    init(particle) {
        const hslColor = rangeColorToHsl(particle.options.color, particle.id, particle.options.reduceDuplicates);
        if (hslColor) {
            particle.color = getHslAnimationFromHsl(hslColor, particle.options.color.animation, this.container.retina.reduceFactor);
        }
    }
    isEnabled(particle) {
        var _a, _b, _c;
        const animationOptions = particle.options.color.animation;
        return (!particle.destroyed &&
            !particle.spawning &&
            ((((_a = particle.color) === null || _a === void 0 ? void 0 : _a.h.value) !== undefined && animationOptions.h.enable) ||
                (((_b = particle.color) === null || _b === void 0 ? void 0 : _b.s.value) !== undefined && animationOptions.s.enable) ||
                (((_c = particle.color) === null || _c === void 0 ? void 0 : _c.l.value) !== undefined && animationOptions.l.enable)));
    }
    update(particle, delta) {
        updateColor(particle, delta);
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-updater-color/esm/index.js

async function loadColorUpdater(engine) {
    await engine.addParticleUpdater("color", (container) => new ColorUpdater(container));
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-interaction-external-attract/esm/Options/Classes/Attract.js
class Attract {
    constructor() {
        this.distance = 200;
        this.duration = 0.4;
        this.easing = "ease-out-quad";
        this.factor = 1;
        this.maxSpeed = 50;
        this.speed = 1;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.distance !== undefined) {
            this.distance = data.distance;
        }
        if (data.duration !== undefined) {
            this.duration = data.duration;
        }
        if (data.easing !== undefined) {
            this.easing = data.easing;
        }
        if (data.factor !== undefined) {
            this.factor = data.factor;
        }
        if (data.maxSpeed !== undefined) {
            this.maxSpeed = data.maxSpeed;
        }
        if (data.speed !== undefined) {
            this.speed = data.speed;
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-interaction-external-attract/esm/Attractor.js


class Attractor extends ExternalInteractorBase {
    constructor(engine, container) {
        super(container);
        this._engine = engine;
        if (!container.attract) {
            container.attract = { particles: [] };
        }
        this.handleClickMode = (mode) => {
            const options = this.container.actualOptions, attract = options.interactivity.modes.attract;
            if (!attract || mode !== "attract") {
                return;
            }
            if (!container.attract) {
                container.attract = { particles: [] };
            }
            container.attract.clicking = true;
            container.attract.count = 0;
            for (const particle of container.attract.particles) {
                if (!this.isEnabled(particle)) {
                    continue;
                }
                particle.velocity.setTo(particle.initialVelocity);
            }
            container.attract.particles = [];
            container.attract.finish = false;
            setTimeout(() => {
                if (!container.destroyed) {
                    if (!container.attract) {
                        container.attract = { particles: [] };
                    }
                    container.attract.clicking = false;
                }
            }, attract.duration * 1000);
        };
    }
    clear() {
    }
    init() {
        const container = this.container, attract = container.actualOptions.interactivity.modes.attract;
        if (!attract) {
            return;
        }
        container.retina.attractModeDistance = attract.distance * container.retina.pixelRatio;
    }
    async interact() {
        const container = this.container, options = container.actualOptions, mouseMoveStatus = container.interactivity.status === mouseMoveEvent, events = options.interactivity.events, hoverEnabled = events.onHover.enable, hoverMode = events.onHover.mode, clickEnabled = events.onClick.enable, clickMode = events.onClick.mode;
        if (mouseMoveStatus && hoverEnabled && isInArray("attract", hoverMode)) {
            this.hoverAttract();
        }
        else if (clickEnabled && isInArray("attract", clickMode)) {
            this.clickAttract();
        }
    }
    isEnabled(particle) {
        var _a;
        const container = this.container, options = container.actualOptions, mouse = container.interactivity.mouse, events = ((_a = particle === null || particle === void 0 ? void 0 : particle.interactivity) !== null && _a !== void 0 ? _a : options.interactivity).events;
        if ((!mouse.position || !events.onHover.enable) && (!mouse.clickPosition || !events.onClick.enable)) {
            return false;
        }
        const hoverMode = events.onHover.mode, clickMode = events.onClick.mode;
        return isInArray("attract", hoverMode) || isInArray("attract", clickMode);
    }
    loadModeOptions(options, ...sources) {
        if (!options.attract) {
            options.attract = new Attract();
        }
        for (const source of sources) {
            options.attract.load(source === null || source === void 0 ? void 0 : source.attract);
        }
    }
    reset() {
    }
    clickAttract() {
        const container = this.container;
        if (!container.attract) {
            container.attract = { particles: [] };
        }
        if (!container.attract.finish) {
            if (!container.attract.count) {
                container.attract.count = 0;
            }
            container.attract.count++;
            if (container.attract.count === container.particles.count) {
                container.attract.finish = true;
            }
        }
        if (container.attract.clicking) {
            const mousePos = container.interactivity.mouse.clickPosition, attractRadius = container.retina.attractModeDistance;
            if (!attractRadius || attractRadius < 0 || !mousePos) {
                return;
            }
            this.processAttract(mousePos, attractRadius, new Circle(mousePos.x, mousePos.y, attractRadius));
        }
        else if (container.attract.clicking === false) {
            container.attract.particles = [];
        }
        return;
    }
    hoverAttract() {
        const container = this.container, mousePos = container.interactivity.mouse.position, attractRadius = container.retina.attractModeDistance;
        if (!attractRadius || attractRadius < 0 || !mousePos) {
            return;
        }
        this.processAttract(mousePos, attractRadius, new Circle(mousePos.x, mousePos.y, attractRadius));
    }
    processAttract(position, attractRadius, area) {
        const container = this.container, attractOptions = container.actualOptions.interactivity.modes.attract;
        if (!attractOptions) {
            return;
        }
        const query = container.particles.quadTree.query(area, (p) => this.isEnabled(p));
        for (const particle of query) {
            const { dx, dy, distance } = getDistances(particle.position, position);
            const velocity = attractOptions.speed * attractOptions.factor;
            const attractFactor = clamp(getEasing(attractOptions.easing)(1 - distance / attractRadius) * velocity, 0, attractOptions.maxSpeed);
            const normVec = Vector.create(distance === 0 ? velocity : (dx / distance) * attractFactor, distance === 0 ? velocity : (dy / distance) * attractFactor);
            particle.position.subFrom(normVec);
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-interaction-external-attract/esm/index.js

async function loadExternalAttractInteraction(engine) {
    await engine.addInteractor("externalAttract", (container) => new Attractor(engine, container));
}



;// CONCATENATED MODULE: ./node_modules/tsparticles-interaction-external-bounce/esm/Options/Classes/Bounce.js
class Bounce {
    constructor() {
        this.distance = 200;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.distance !== undefined) {
            this.distance = data.distance;
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-interaction-external-bounce/esm/Bouncer.js


class Bouncer extends ExternalInteractorBase {
    constructor(container) {
        super(container);
    }
    clear() {
    }
    init() {
        const container = this.container, bounce = container.actualOptions.interactivity.modes.bounce;
        if (!bounce) {
            return;
        }
        container.retina.bounceModeDistance = bounce.distance * container.retina.pixelRatio;
    }
    async interact() {
        const container = this.container, options = container.actualOptions, events = options.interactivity.events, mouseMoveStatus = container.interactivity.status === mouseMoveEvent, hoverEnabled = events.onHover.enable, hoverMode = events.onHover.mode, divs = events.onDiv;
        if (mouseMoveStatus && hoverEnabled && isInArray("bounce", hoverMode)) {
            this.processMouseBounce();
        }
        else {
            divModeExecute("bounce", divs, (selector, div) => this.singleSelectorBounce(selector, div));
        }
    }
    isEnabled(particle) {
        var _a;
        const container = this.container, options = container.actualOptions, mouse = container.interactivity.mouse, events = ((_a = particle === null || particle === void 0 ? void 0 : particle.interactivity) !== null && _a !== void 0 ? _a : options.interactivity).events, divs = events.onDiv;
        return ((mouse.position && events.onHover.enable && isInArray("bounce", events.onHover.mode)) ||
            isDivModeEnabled("bounce", divs));
    }
    loadModeOptions(options, ...sources) {
        if (!options.bounce) {
            options.bounce = new Bounce();
        }
        for (const source of sources) {
            options.bounce.load(source === null || source === void 0 ? void 0 : source.bounce);
        }
    }
    reset() {
    }
    processBounce(position, radius, area) {
        const query = this.container.particles.quadTree.query(area, (p) => this.isEnabled(p));
        for (const particle of query) {
            if (area instanceof Circle) {
                circleBounce(circleBounceDataFromParticle(particle), {
                    position,
                    radius,
                    mass: (radius ** 2 * Math.PI) / 2,
                    velocity: Vector.origin,
                    factor: Vector.origin,
                });
            }
            else if (area instanceof Rectangle) {
                rectBounce(particle, calculateBounds(position, radius));
            }
        }
    }
    processMouseBounce() {
        const container = this.container, pxRatio = container.retina.pixelRatio, tolerance = 10 * pxRatio, mousePos = container.interactivity.mouse.position, radius = container.retina.bounceModeDistance;
        if (!radius || radius < 0 || !mousePos) {
            return;
        }
        this.processBounce(mousePos, radius, new Circle(mousePos.x, mousePos.y, radius + tolerance));
    }
    singleSelectorBounce(selector, div) {
        const container = this.container, query = document.querySelectorAll(selector);
        if (!query.length) {
            return;
        }
        query.forEach((item) => {
            const elem = item, pxRatio = container.retina.pixelRatio, pos = {
                x: (elem.offsetLeft + elem.offsetWidth / 2) * pxRatio,
                y: (elem.offsetTop + elem.offsetHeight / 2) * pxRatio,
            }, radius = (elem.offsetWidth / 2) * pxRatio, tolerance = 10 * pxRatio, area = div.type === "circle"
                ? new Circle(pos.x, pos.y, radius + tolerance)
                : new Rectangle(elem.offsetLeft * pxRatio - tolerance, elem.offsetTop * pxRatio - tolerance, elem.offsetWidth * pxRatio + tolerance * 2, elem.offsetHeight * pxRatio + tolerance * 2);
            this.processBounce(pos, radius, area);
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-interaction-external-bounce/esm/index.js

async function loadExternalBounceInteraction(engine) {
    await engine.addInteractor("externalBounce", (container) => new Bouncer(container));
}



;// CONCATENATED MODULE: ./node_modules/tsparticles-interaction-external-bubble/esm/Options/Classes/BubbleBase.js

class BubbleBase {
    constructor() {
        this.distance = 200;
        this.duration = 0.4;
        this.mix = false;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.distance !== undefined) {
            this.distance = data.distance;
        }
        if (data.duration !== undefined) {
            this.duration = data.duration;
        }
        if (data.mix !== undefined) {
            this.mix = data.mix;
        }
        if (data.opacity !== undefined) {
            this.opacity = data.opacity;
        }
        if (data.color !== undefined) {
            const sourceColor = this.color instanceof Array ? undefined : this.color;
            this.color = executeOnSingleOrMultiple(data.color, (color) => {
                return OptionsColor.create(sourceColor, color);
            });
        }
        if (data.size !== undefined) {
            this.size = data.size;
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-interaction-external-bubble/esm/Options/Classes/BubbleDiv.js


class BubbleDiv extends BubbleBase {
    constructor() {
        super();
        this.selectors = [];
    }
    get ids() {
        return executeOnSingleOrMultiple(this.selectors, (t) => t.replace("#", ""));
    }
    set ids(value) {
        this.selectors = executeOnSingleOrMultiple(value, (t) => `#${t}`);
    }
    load(data) {
        super.load(data);
        if (!data) {
            return;
        }
        if (data.ids !== undefined) {
            this.ids = data.ids;
        }
        if (data.selectors !== undefined) {
            this.selectors = data.selectors;
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-interaction-external-bubble/esm/Options/Classes/Bubble.js



class Bubble extends BubbleBase {
    load(data) {
        super.load(data);
        if (!data) {
            return;
        }
        this.divs = executeOnSingleOrMultiple(data.divs, (div) => {
            const tmp = new BubbleDiv();
            tmp.load(div);
            return tmp;
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-interaction-external-bubble/esm/Bubbler.js


function calculateBubbleValue(particleValue, modeValue, optionsValue, ratio) {
    if (modeValue >= optionsValue) {
        const value = particleValue + (modeValue - optionsValue) * ratio;
        return clamp(value, particleValue, modeValue);
    }
    else if (modeValue < optionsValue) {
        const value = particleValue - (optionsValue - modeValue) * ratio;
        return clamp(value, modeValue, particleValue);
    }
}
class Bubbler extends ExternalInteractorBase {
    constructor(container) {
        super(container);
        if (!container.bubble) {
            container.bubble = {};
        }
        this.handleClickMode = (mode) => {
            if (mode !== "bubble") {
                return;
            }
            if (!container.bubble) {
                container.bubble = {};
            }
            container.bubble.clicking = true;
        };
    }
    clear(particle, delta, force) {
        if (particle.bubble.inRange && !force) {
            return;
        }
        delete particle.bubble.div;
        delete particle.bubble.opacity;
        delete particle.bubble.radius;
        delete particle.bubble.color;
    }
    init() {
        const container = this.container, bubble = container.actualOptions.interactivity.modes.bubble;
        if (!bubble) {
            return;
        }
        container.retina.bubbleModeDistance = bubble.distance * container.retina.pixelRatio;
        if (bubble.size !== undefined) {
            container.retina.bubbleModeSize = bubble.size * container.retina.pixelRatio;
        }
    }
    async interact(delta) {
        const options = this.container.actualOptions, events = options.interactivity.events, onHover = events.onHover, onClick = events.onClick, hoverEnabled = onHover.enable, hoverMode = onHover.mode, clickEnabled = onClick.enable, clickMode = onClick.mode, divs = events.onDiv;
        if (hoverEnabled && isInArray("bubble", hoverMode)) {
            this.hoverBubble(delta);
        }
        else if (clickEnabled && isInArray("bubble", clickMode)) {
            this.clickBubble(delta);
        }
        else {
            divModeExecute("bubble", divs, (selector, div) => this.singleSelectorHover(delta, selector, div));
        }
    }
    isEnabled(particle) {
        var _a;
        const container = this.container, options = container.actualOptions, mouse = container.interactivity.mouse, events = ((_a = particle === null || particle === void 0 ? void 0 : particle.interactivity) !== null && _a !== void 0 ? _a : options.interactivity).events, divs = events.onDiv, divBubble = isDivModeEnabled("bubble", divs);
        if (!(divBubble || (events.onHover.enable && mouse.position) || (events.onClick.enable && mouse.clickPosition))) {
            return false;
        }
        const hoverMode = events.onHover.mode;
        const clickMode = events.onClick.mode;
        return isInArray("bubble", hoverMode) || isInArray("bubble", clickMode) || divBubble;
    }
    loadModeOptions(options, ...sources) {
        if (!options.bubble) {
            options.bubble = new Bubble();
        }
        for (const source of sources) {
            options.bubble.load(source === null || source === void 0 ? void 0 : source.bubble);
        }
    }
    reset(particle) {
        particle.bubble.inRange = false;
    }
    clickBubble(delta) {
        var _a, _b;
        const container = this.container, options = container.actualOptions, mouseClickPos = container.interactivity.mouse.clickPosition, bubble = options.interactivity.modes.bubble;
        if (!bubble || !mouseClickPos) {
            return;
        }
        if (!container.bubble) {
            container.bubble = {};
        }
        const distance = container.retina.bubbleModeDistance;
        if (!distance || distance < 0) {
            return;
        }
        const query = container.particles.quadTree.queryCircle(mouseClickPos, distance, (p) => this.isEnabled(p));
        for (const particle of query) {
            if (!container.bubble.clicking) {
                continue;
            }
            particle.bubble.inRange = !container.bubble.durationEnd;
            const pos = particle.getPosition(), distMouse = getDistance(pos, mouseClickPos), timeSpent = (new Date().getTime() - (container.interactivity.mouse.clickTime || 0)) / 1000;
            if (timeSpent > bubble.duration) {
                container.bubble.durationEnd = true;
            }
            if (timeSpent > bubble.duration * 2) {
                container.bubble.clicking = false;
                container.bubble.durationEnd = false;
            }
            const sizeData = {
                bubbleObj: {
                    optValue: container.retina.bubbleModeSize,
                    value: particle.bubble.radius,
                },
                particlesObj: {
                    optValue: getRangeMax(particle.options.size.value) * container.retina.pixelRatio,
                    value: particle.size.value,
                },
                type: "size",
            };
            this.process(particle, distMouse, timeSpent, sizeData);
            const opacityData = {
                bubbleObj: {
                    optValue: bubble.opacity,
                    value: particle.bubble.opacity,
                },
                particlesObj: {
                    optValue: getRangeMax(particle.options.opacity.value),
                    value: (_b = (_a = particle.opacity) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : 1,
                },
                type: "opacity",
            };
            this.process(particle, distMouse, timeSpent, opacityData);
            if (!container.bubble.durationEnd) {
                if (distMouse <= distance) {
                    this.hoverBubbleColor(particle, distMouse);
                }
                else {
                    delete particle.bubble.color;
                }
            }
            else {
                delete particle.bubble.color;
            }
        }
    }
    hoverBubble(delta) {
        const container = this.container, mousePos = container.interactivity.mouse.position, distance = container.retina.bubbleModeDistance;
        if (!distance || distance < 0 || mousePos === undefined) {
            return;
        }
        const query = container.particles.quadTree.queryCircle(mousePos, distance, (p) => this.isEnabled(p));
        for (const particle of query) {
            particle.bubble.inRange = true;
            const pos = particle.getPosition(), pointDistance = getDistance(pos, mousePos), ratio = 1 - pointDistance / distance;
            if (pointDistance <= distance) {
                if (ratio >= 0 && container.interactivity.status === mouseMoveEvent) {
                    this.hoverBubbleSize(particle, ratio);
                    this.hoverBubbleOpacity(particle, ratio);
                    this.hoverBubbleColor(particle, ratio);
                }
            }
            else {
                this.reset(particle);
            }
            if (container.interactivity.status === mouseLeaveEvent) {
                this.reset(particle);
            }
        }
    }
    hoverBubbleColor(particle, ratio, divBubble) {
        const options = this.container.actualOptions;
        const bubbleOptions = divBubble !== null && divBubble !== void 0 ? divBubble : options.interactivity.modes.bubble;
        if (!bubbleOptions) {
            return;
        }
        if (!particle.bubble.finalColor) {
            const modeColor = bubbleOptions.color;
            if (!modeColor) {
                return;
            }
            const bubbleColor = itemFromSingleOrMultiple(modeColor);
            particle.bubble.finalColor = rangeColorToHsl(bubbleColor);
        }
        if (!particle.bubble.finalColor) {
            return;
        }
        if (bubbleOptions.mix) {
            particle.bubble.color = undefined;
            const pColor = particle.getFillColor();
            particle.bubble.color = pColor
                ? rgbToHsl(colorMix(pColor, particle.bubble.finalColor, 1 - ratio, ratio))
                : particle.bubble.finalColor;
        }
        else {
            particle.bubble.color = particle.bubble.finalColor;
        }
    }
    hoverBubbleOpacity(particle, ratio, divBubble) {
        var _a, _b, _c, _d;
        const container = this.container, options = container.actualOptions, modeOpacity = (_a = divBubble === null || divBubble === void 0 ? void 0 : divBubble.opacity) !== null && _a !== void 0 ? _a : (_b = options.interactivity.modes.bubble) === null || _b === void 0 ? void 0 : _b.opacity;
        if (!modeOpacity) {
            return;
        }
        const optOpacity = particle.options.opacity.value;
        const pOpacity = (_d = (_c = particle.opacity) === null || _c === void 0 ? void 0 : _c.value) !== null && _d !== void 0 ? _d : 1;
        const opacity = calculateBubbleValue(pOpacity, modeOpacity, getRangeMax(optOpacity), ratio);
        if (opacity !== undefined) {
            particle.bubble.opacity = opacity;
        }
    }
    hoverBubbleSize(particle, ratio, divBubble) {
        const container = this.container, modeSize = (divBubble === null || divBubble === void 0 ? void 0 : divBubble.size) ? divBubble.size * container.retina.pixelRatio : container.retina.bubbleModeSize;
        if (modeSize === undefined) {
            return;
        }
        const optSize = getRangeMax(particle.options.size.value) * container.retina.pixelRatio;
        const pSize = particle.size.value;
        const size = calculateBubbleValue(pSize, modeSize, optSize, ratio);
        if (size !== undefined) {
            particle.bubble.radius = size;
        }
    }
    process(particle, distMouse, timeSpent, data) {
        const container = this.container, bubbleParam = data.bubbleObj.optValue, options = container.actualOptions, bubble = options.interactivity.modes.bubble;
        if (!bubble || bubbleParam === undefined) {
            return;
        }
        const bubbleDuration = bubble.duration, bubbleDistance = container.retina.bubbleModeDistance, particlesParam = data.particlesObj.optValue, pObjBubble = data.bubbleObj.value, pObj = data.particlesObj.value || 0, type = data.type;
        if (!bubbleDistance || bubbleDistance < 0 || bubbleParam === particlesParam) {
            return;
        }
        if (!container.bubble) {
            container.bubble = {};
        }
        if (!container.bubble.durationEnd) {
            if (distMouse <= bubbleDistance) {
                const obj = pObjBubble !== null && pObjBubble !== void 0 ? pObjBubble : pObj;
                if (obj !== bubbleParam) {
                    const value = pObj - (timeSpent * (pObj - bubbleParam)) / bubbleDuration;
                    if (type === "size") {
                        particle.bubble.radius = value;
                    }
                    if (type === "opacity") {
                        particle.bubble.opacity = value;
                    }
                }
            }
            else {
                if (type === "size") {
                    delete particle.bubble.radius;
                }
                if (type === "opacity") {
                    delete particle.bubble.opacity;
                }
            }
        }
        else if (pObjBubble) {
            if (type === "size") {
                delete particle.bubble.radius;
            }
            if (type === "opacity") {
                delete particle.bubble.opacity;
            }
        }
    }
    singleSelectorHover(delta, selector, div) {
        const container = this.container, selectors = document.querySelectorAll(selector), bubble = container.actualOptions.interactivity.modes.bubble;
        if (!bubble || !selectors.length) {
            return;
        }
        selectors.forEach((item) => {
            const elem = item, pxRatio = container.retina.pixelRatio, pos = {
                x: (elem.offsetLeft + elem.offsetWidth / 2) * pxRatio,
                y: (elem.offsetTop + elem.offsetHeight / 2) * pxRatio,
            }, repulseRadius = (elem.offsetWidth / 2) * pxRatio, area = div.type === "circle"
                ? new Circle(pos.x, pos.y, repulseRadius)
                : new Rectangle(elem.offsetLeft * pxRatio, elem.offsetTop * pxRatio, elem.offsetWidth * pxRatio, elem.offsetHeight * pxRatio), query = container.particles.quadTree.query(area, (p) => this.isEnabled(p));
            for (const particle of query) {
                if (!area.contains(particle.getPosition())) {
                    continue;
                }
                particle.bubble.inRange = true;
                const divs = bubble.divs;
                const divBubble = divMode(divs, elem);
                if (!particle.bubble.div || particle.bubble.div !== elem) {
                    this.clear(particle, delta, true);
                    particle.bubble.div = elem;
                }
                this.hoverBubbleSize(particle, 1, divBubble);
                this.hoverBubbleOpacity(particle, 1, divBubble);
                this.hoverBubbleColor(particle, 1, divBubble);
            }
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-interaction-external-bubble/esm/index.js

async function loadExternalBubbleInteraction(engine) {
    await engine.addInteractor("externalBubble", (container) => new Bubbler(container));
}







;// CONCATENATED MODULE: ./node_modules/tsparticles-interaction-external-connect/esm/Options/Classes/ConnectLinks.js
class ConnectLinks {
    constructor() {
        this.opacity = 0.5;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.opacity !== undefined) {
            this.opacity = data.opacity;
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-interaction-external-connect/esm/Options/Classes/Connect.js

class Connect {
    constructor() {
        this.distance = 80;
        this.links = new ConnectLinks();
        this.radius = 60;
    }
    get lineLinked() {
        return this.links;
    }
    set lineLinked(value) {
        this.links = value;
    }
    get line_linked() {
        return this.links;
    }
    set line_linked(value) {
        this.links = value;
    }
    load(data) {
        var _a, _b;
        if (!data) {
            return;
        }
        if (data.distance !== undefined) {
            this.distance = data.distance;
        }
        this.links.load((_b = (_a = data.links) !== null && _a !== void 0 ? _a : data.lineLinked) !== null && _b !== void 0 ? _b : data.line_linked);
        if (data.radius !== undefined) {
            this.radius = data.radius;
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-interaction-external-connect/esm/Connector.js


function gradient(context, p1, p2, opacity) {
    const gradStop = Math.floor(p2.getRadius() / p1.getRadius()), color1 = p1.getFillColor(), color2 = p2.getFillColor();
    if (!color1 || !color2) {
        return;
    }
    const sourcePos = p1.getPosition(), destPos = p2.getPosition(), midRgb = colorMix(color1, color2, p1.getRadius(), p2.getRadius()), grad = context.createLinearGradient(sourcePos.x, sourcePos.y, destPos.x, destPos.y);
    grad.addColorStop(0, getStyleFromHsl(color1, opacity));
    grad.addColorStop(gradStop > 1 ? 1 : gradStop, getStyleFromRgb(midRgb, opacity));
    grad.addColorStop(1, getStyleFromHsl(color2, opacity));
    return grad;
}
function drawConnectLine(context, width, lineStyle, begin, end) {
    drawLine(context, begin, end);
    context.lineWidth = width;
    context.strokeStyle = lineStyle;
    context.stroke();
}
function lineStyle(container, ctx, p1, p2) {
    const options = container.actualOptions, connectOptions = options.interactivity.modes.connect;
    if (!connectOptions) {
        return;
    }
    return gradient(ctx, p1, p2, connectOptions.links.opacity);
}
function drawConnection(container, p1, p2) {
    container.canvas.draw((ctx) => {
        var _a;
        const ls = lineStyle(container, ctx, p1, p2);
        if (!ls) {
            return;
        }
        const pos1 = p1.getPosition(), pos2 = p2.getPosition();
        drawConnectLine(ctx, (_a = p1.retina.linksWidth) !== null && _a !== void 0 ? _a : 0, ls, pos1, pos2);
    });
}
class Connector extends ExternalInteractorBase {
    constructor(container) {
        super(container);
    }
    clear() {
    }
    init() {
        const container = this.container, connect = container.actualOptions.interactivity.modes.connect;
        if (!connect) {
            return;
        }
        container.retina.connectModeDistance = connect.distance * container.retina.pixelRatio;
        container.retina.connectModeRadius = connect.radius * container.retina.pixelRatio;
    }
    async interact() {
        const container = this.container, options = container.actualOptions;
        if (options.interactivity.events.onHover.enable && container.interactivity.status === "pointermove") {
            const mousePos = container.interactivity.mouse.position;
            if (!container.retina.connectModeDistance ||
                container.retina.connectModeDistance < 0 ||
                !container.retina.connectModeRadius ||
                container.retina.connectModeRadius < 0 ||
                !mousePos) {
                return;
            }
            const distance = Math.abs(container.retina.connectModeRadius), query = container.particles.quadTree.queryCircle(mousePos, distance, (p) => this.isEnabled(p));
            let i = 0;
            for (const p1 of query) {
                const pos1 = p1.getPosition();
                for (const p2 of query.slice(i + 1)) {
                    const pos2 = p2.getPosition(), distMax = Math.abs(container.retina.connectModeDistance), xDiff = Math.abs(pos1.x - pos2.x), yDiff = Math.abs(pos1.y - pos2.y);
                    if (xDiff < distMax && yDiff < distMax) {
                        drawConnection(container, p1, p2);
                    }
                }
                ++i;
            }
        }
    }
    isEnabled(particle) {
        var _a;
        const container = this.container, mouse = container.interactivity.mouse, events = ((_a = particle === null || particle === void 0 ? void 0 : particle.interactivity) !== null && _a !== void 0 ? _a : container.actualOptions.interactivity).events;
        if (!(events.onHover.enable && mouse.position)) {
            return false;
        }
        return isInArray("connect", events.onHover.mode);
    }
    loadModeOptions(options, ...sources) {
        if (!options.connect) {
            options.connect = new Connect();
        }
        for (const source of sources) {
            options.connect.load(source === null || source === void 0 ? void 0 : source.connect);
        }
    }
    reset() {
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-interaction-external-connect/esm/index.js

async function loadExternalConnectInteraction(engine) {
    await engine.addInteractor("externalConnect", (container) => new Connector(container));
}





;// CONCATENATED MODULE: ./node_modules/tsparticles-interaction-external-grab/esm/Options/Classes/GrabLinks.js

class GrabLinks {
    constructor() {
        this.blink = false;
        this.consent = false;
        this.opacity = 1;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.blink !== undefined) {
            this.blink = data.blink;
        }
        if (data.color !== undefined) {
            this.color = OptionsColor.create(this.color, data.color);
        }
        if (data.consent !== undefined) {
            this.consent = data.consent;
        }
        if (data.opacity !== undefined) {
            this.opacity = data.opacity;
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-interaction-external-grab/esm/Options/Classes/Grab.js

class Grab {
    constructor() {
        this.distance = 100;
        this.links = new GrabLinks();
    }
    get lineLinked() {
        return this.links;
    }
    set lineLinked(value) {
        this.links = value;
    }
    get line_linked() {
        return this.links;
    }
    set line_linked(value) {
        this.links = value;
    }
    load(data) {
        var _a, _b;
        if (!data) {
            return;
        }
        if (data.distance !== undefined) {
            this.distance = data.distance;
        }
        this.links.load((_b = (_a = data.links) !== null && _a !== void 0 ? _a : data.lineLinked) !== null && _b !== void 0 ? _b : data.line_linked);
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-interaction-external-grab/esm/Grabber.js


function drawGrabLine(context, width, begin, end, colorLine, opacity) {
    drawLine(context, begin, end);
    context.strokeStyle = getStyleFromRgb(colorLine, opacity);
    context.lineWidth = width;
    context.stroke();
}
function drawGrab(container, particle, lineColor, opacity, mousePos) {
    container.canvas.draw((ctx) => {
        var _a;
        const beginPos = particle.getPosition();
        drawGrabLine(ctx, (_a = particle.retina.linksWidth) !== null && _a !== void 0 ? _a : 0, beginPos, mousePos, lineColor, opacity);
    });
}
class Grabber extends ExternalInteractorBase {
    constructor(container) {
        super(container);
    }
    clear() {
    }
    init() {
        const container = this.container, grab = container.actualOptions.interactivity.modes.grab;
        if (!grab) {
            return;
        }
        container.retina.grabModeDistance = grab.distance * container.retina.pixelRatio;
    }
    async interact() {
        var _a, _b;
        const container = this.container, options = container.actualOptions, interactivity = options.interactivity;
        if (!interactivity.modes.grab ||
            !interactivity.events.onHover.enable ||
            container.interactivity.status !== mouseMoveEvent) {
            return;
        }
        const mousePos = container.interactivity.mouse.position;
        if (!mousePos) {
            return;
        }
        const distance = container.retina.grabModeDistance;
        if (!distance || distance < 0) {
            return;
        }
        const query = container.particles.quadTree.queryCircle(mousePos, distance, (p) => this.isEnabled(p));
        for (const particle of query) {
            const pos = particle.getPosition(), pointDistance = getDistance(pos, mousePos);
            if (pointDistance > distance) {
                continue;
            }
            const grabLineOptions = interactivity.modes.grab.links, lineOpacity = grabLineOptions.opacity, opacityLine = lineOpacity - (pointDistance * lineOpacity) / distance;
            if (opacityLine <= 0) {
                continue;
            }
            const optColor = (_a = grabLineOptions.color) !== null && _a !== void 0 ? _a : (_b = particle.options.links) === null || _b === void 0 ? void 0 : _b.color;
            if (!container.particles.grabLineColor && optColor) {
                const linksOptions = interactivity.modes.grab.links;
                container.particles.grabLineColor = getLinkRandomColor(optColor, linksOptions.blink, linksOptions.consent);
            }
            const colorLine = getLinkColor(particle, undefined, container.particles.grabLineColor);
            if (!colorLine) {
                return;
            }
            drawGrab(container, particle, colorLine, opacityLine, mousePos);
        }
    }
    isEnabled(particle) {
        var _a;
        const container = this.container, mouse = container.interactivity.mouse, events = ((_a = particle === null || particle === void 0 ? void 0 : particle.interactivity) !== null && _a !== void 0 ? _a : container.actualOptions.interactivity).events;
        return events.onHover.enable && !!mouse.position && isInArray("grab", events.onHover.mode);
    }
    loadModeOptions(options, ...sources) {
        if (!options.grab) {
            options.grab = new Grab();
        }
        for (const source of sources) {
            options.grab.load(source === null || source === void 0 ? void 0 : source.grab);
        }
    }
    reset() {
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-interaction-external-grab/esm/index.js

async function loadExternalGrabInteraction(engine) {
    await engine.addInteractor("externalGrab", (container) => new Grabber(container));
}





;// CONCATENATED MODULE: ./node_modules/tsparticles-interaction-external-pause/esm/Pauser.js

class Pauser extends ExternalInteractorBase {
    constructor(container) {
        super(container);
        this.handleClickMode = (mode) => {
            if (mode !== "pause") {
                return;
            }
            const container = this.container;
            if (container.getAnimationStatus()) {
                container.pause();
            }
            else {
                container.play();
            }
        };
    }
    clear() {
    }
    init() {
    }
    async interact() {
    }
    isEnabled() {
        return true;
    }
    reset() {
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-interaction-external-pause/esm/index.js

function loadExternalPauseInteraction(engine) {
    engine.addInteractor("externalPause", (container) => new Pauser(container));
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-interaction-external-push/esm/Options/Classes/Push.js
class Push {
    constructor() {
        this.default = true;
        this.groups = [];
        this.quantity = 4;
    }
    get particles_nb() {
        return this.quantity;
    }
    set particles_nb(value) {
        this.quantity = value;
    }
    load(data) {
        var _a;
        if (!data) {
            return;
        }
        if (data.default !== undefined) {
            this.default = data.default;
        }
        if (data.groups !== undefined) {
            this.groups = data.groups.map((t) => t);
        }
        if (!this.groups.length) {
            this.default = true;
        }
        const quantity = (_a = data.quantity) !== null && _a !== void 0 ? _a : data.particles_nb;
        if (quantity !== undefined) {
            this.quantity = quantity;
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-interaction-external-push/esm/Pusher.js



class Pusher extends ExternalInteractorBase {
    constructor(container) {
        super(container);
        this.handleClickMode = (mode) => {
            if (mode !== "push") {
                return;
            }
            const container = this.container, options = container.actualOptions, pushOptions = options.interactivity.modes.push;
            if (!pushOptions) {
                return;
            }
            const pushNb = pushOptions.quantity;
            if (pushNb <= 0) {
                return;
            }
            const group = itemFromArray([undefined, ...pushOptions.groups]), groupOptions = group !== undefined ? container.actualOptions.particles.groups[group] : undefined;
            container.particles.push(pushNb, container.interactivity.mouse, groupOptions, group);
        };
    }
    clear() {
    }
    init() {
    }
    async interact() {
    }
    isEnabled() {
        return true;
    }
    loadModeOptions(options, ...sources) {
        if (!options.push) {
            options.push = new Push();
        }
        for (const source of sources) {
            options.push.load(source === null || source === void 0 ? void 0 : source.push);
        }
    }
    reset() {
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-interaction-external-push/esm/index.js

async function loadExternalPushInteraction(engine) {
    await engine.addInteractor("externalPush", (container) => new Pusher(container));
}



;// CONCATENATED MODULE: ./node_modules/tsparticles-interaction-external-remove/esm/Options/Classes/Remove.js
class Remove {
    constructor() {
        this.quantity = 2;
    }
    get particles_nb() {
        return this.quantity;
    }
    set particles_nb(value) {
        this.quantity = value;
    }
    load(data) {
        var _a;
        if (!data) {
            return;
        }
        const quantity = (_a = data.quantity) !== null && _a !== void 0 ? _a : data.particles_nb;
        if (quantity !== undefined) {
            this.quantity = quantity;
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-interaction-external-remove/esm/Remover.js


class Remover extends ExternalInteractorBase {
    constructor(container) {
        super(container);
        this.handleClickMode = (mode) => {
            const container = this.container, options = container.actualOptions;
            if (!options.interactivity.modes.remove || mode !== "remove") {
                return;
            }
            const removeNb = options.interactivity.modes.remove.quantity;
            container.particles.removeQuantity(removeNb);
        };
    }
    clear() {
    }
    init() {
    }
    async interact() {
    }
    isEnabled() {
        return true;
    }
    loadModeOptions(options, ...sources) {
        if (!options.remove) {
            options.remove = new Remove();
        }
        for (const source of sources) {
            options.remove.load(source === null || source === void 0 ? void 0 : source.remove);
        }
    }
    reset() {
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-interaction-external-remove/esm/index.js

function loadExternalRemoveInteraction(engine) {
    engine.addInteractor("externalRemove", (container) => new Remover(container));
}



;// CONCATENATED MODULE: ./node_modules/tsparticles-interaction-external-repulse/esm/Options/Classes/RepulseBase.js
class RepulseBase {
    constructor() {
        this.distance = 200;
        this.duration = 0.4;
        this.factor = 100;
        this.speed = 1;
        this.maxSpeed = 50;
        this.easing = "ease-out-quad";
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.distance !== undefined) {
            this.distance = data.distance;
        }
        if (data.duration !== undefined) {
            this.duration = data.duration;
        }
        if (data.easing !== undefined) {
            this.easing = data.easing;
        }
        if (data.factor !== undefined) {
            this.factor = data.factor;
        }
        if (data.speed !== undefined) {
            this.speed = data.speed;
        }
        if (data.maxSpeed !== undefined) {
            this.maxSpeed = data.maxSpeed;
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-interaction-external-repulse/esm/Options/Classes/RepulseDiv.js


class RepulseDiv extends RepulseBase {
    constructor() {
        super();
        this.selectors = [];
    }
    get ids() {
        return executeOnSingleOrMultiple(this.selectors, (t) => t.replace("#", ""));
    }
    set ids(value) {
        this.selectors = executeOnSingleOrMultiple(value, (t) => `#${t}`);
    }
    load(data) {
        super.load(data);
        if (!data) {
            return;
        }
        if (data.ids !== undefined) {
            this.ids = data.ids;
        }
        if (data.selectors !== undefined) {
            this.selectors = data.selectors;
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-interaction-external-repulse/esm/Options/Classes/Repulse.js



class Repulse extends RepulseBase {
    load(data) {
        super.load(data);
        if (!data) {
            return;
        }
        this.divs = executeOnSingleOrMultiple(data.divs, (div) => {
            const tmp = new RepulseDiv();
            tmp.load(div);
            return tmp;
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-interaction-external-repulse/esm/Repulser.js


class Repulser extends ExternalInteractorBase {
    constructor(engine, container) {
        super(container);
        this._engine = engine;
        if (!container.repulse) {
            container.repulse = { particles: [] };
        }
        this.handleClickMode = (mode) => {
            const options = this.container.actualOptions, repulse = options.interactivity.modes.repulse;
            if (!repulse || mode !== "repulse") {
                return;
            }
            if (!container.repulse) {
                container.repulse = { particles: [] };
            }
            container.repulse.clicking = true;
            container.repulse.count = 0;
            for (const particle of container.repulse.particles) {
                if (!this.isEnabled(particle)) {
                    continue;
                }
                particle.velocity.setTo(particle.initialVelocity);
            }
            container.repulse.particles = [];
            container.repulse.finish = false;
            setTimeout(() => {
                if (!container.destroyed) {
                    if (!container.repulse) {
                        container.repulse = { particles: [] };
                    }
                    container.repulse.clicking = false;
                }
            }, repulse.duration * 1000);
        };
    }
    clear() {
    }
    init() {
        const container = this.container, repulse = container.actualOptions.interactivity.modes.repulse;
        if (!repulse) {
            return;
        }
        container.retina.repulseModeDistance = repulse.distance * container.retina.pixelRatio;
    }
    async interact() {
        const container = this.container, options = container.actualOptions, mouseMoveStatus = container.interactivity.status === mouseMoveEvent, events = options.interactivity.events, hoverEnabled = events.onHover.enable, hoverMode = events.onHover.mode, clickEnabled = events.onClick.enable, clickMode = events.onClick.mode, divs = events.onDiv;
        if (mouseMoveStatus && hoverEnabled && isInArray("repulse", hoverMode)) {
            this.hoverRepulse();
        }
        else if (clickEnabled && isInArray("repulse", clickMode)) {
            this.clickRepulse();
        }
        else {
            divModeExecute("repulse", divs, (selector, div) => this.singleSelectorRepulse(selector, div));
        }
    }
    isEnabled(particle) {
        var _a;
        const container = this.container, options = container.actualOptions, mouse = container.interactivity.mouse, events = ((_a = particle === null || particle === void 0 ? void 0 : particle.interactivity) !== null && _a !== void 0 ? _a : options.interactivity).events, divs = events.onDiv, divRepulse = isDivModeEnabled("repulse", divs);
        if (!(divRepulse || (events.onHover.enable && mouse.position) || (events.onClick.enable && mouse.clickPosition))) {
            return false;
        }
        const hoverMode = events.onHover.mode, clickMode = events.onClick.mode;
        return isInArray("repulse", hoverMode) || isInArray("repulse", clickMode) || divRepulse;
    }
    loadModeOptions(options, ...sources) {
        if (!options.repulse) {
            options.repulse = new Repulse();
        }
        for (const source of sources) {
            options.repulse.load(source === null || source === void 0 ? void 0 : source.repulse);
        }
    }
    reset() {
    }
    clickRepulse() {
        const container = this.container, repulse = container.actualOptions.interactivity.modes.repulse;
        if (!repulse) {
            return;
        }
        if (!container.repulse) {
            container.repulse = { particles: [] };
        }
        if (!container.repulse.finish) {
            if (!container.repulse.count) {
                container.repulse.count = 0;
            }
            container.repulse.count++;
            if (container.repulse.count === container.particles.count) {
                container.repulse.finish = true;
            }
        }
        if (container.repulse.clicking) {
            const repulseDistance = container.retina.repulseModeDistance;
            if (!repulseDistance || repulseDistance < 0) {
                return;
            }
            const repulseRadius = Math.pow(repulseDistance / 6, 3), mouseClickPos = container.interactivity.mouse.clickPosition;
            if (mouseClickPos === undefined) {
                return;
            }
            const range = new Circle(mouseClickPos.x, mouseClickPos.y, repulseRadius), query = container.particles.quadTree.query(range, (p) => this.isEnabled(p));
            for (const particle of query) {
                const { dx, dy, distance } = getDistances(mouseClickPos, particle.position), d = distance ** 2, velocity = repulse.speed, force = (-repulseRadius * velocity) / d;
                if (d <= repulseRadius) {
                    container.repulse.particles.push(particle);
                    const vect = Vector.create(dx, dy);
                    vect.length = force;
                    particle.velocity.setTo(vect);
                }
            }
        }
        else if (container.repulse.clicking === false) {
            for (const particle of container.repulse.particles) {
                particle.velocity.setTo(particle.initialVelocity);
            }
            container.repulse.particles = [];
        }
    }
    hoverRepulse() {
        const container = this.container, mousePos = container.interactivity.mouse.position, repulseRadius = container.retina.repulseModeDistance;
        if (!repulseRadius || repulseRadius < 0 || !mousePos) {
            return;
        }
        this.processRepulse(mousePos, repulseRadius, new Circle(mousePos.x, mousePos.y, repulseRadius));
    }
    processRepulse(position, repulseRadius, area, divRepulse) {
        var _a;
        const container = this.container, query = container.particles.quadTree.query(area, (p) => this.isEnabled(p)), repulseOptions = container.actualOptions.interactivity.modes.repulse;
        if (!repulseOptions) {
            return;
        }
        for (const particle of query) {
            const { dx, dy, distance } = getDistances(particle.position, position), velocity = ((_a = divRepulse === null || divRepulse === void 0 ? void 0 : divRepulse.speed) !== null && _a !== void 0 ? _a : repulseOptions.speed) * repulseOptions.factor, repulseFactor = clamp(getEasing(repulseOptions.easing)(1 - distance / repulseRadius) * velocity, 0, repulseOptions.maxSpeed), normVec = Vector.create(distance === 0 ? velocity : (dx / distance) * repulseFactor, distance === 0 ? velocity : (dy / distance) * repulseFactor);
            particle.position.addTo(normVec);
        }
    }
    singleSelectorRepulse(selector, div) {
        const container = this.container, repulse = container.actualOptions.interactivity.modes.repulse;
        if (!repulse) {
            return;
        }
        const query = document.querySelectorAll(selector);
        if (!query.length) {
            return;
        }
        query.forEach((item) => {
            const elem = item, pxRatio = container.retina.pixelRatio, pos = {
                x: (elem.offsetLeft + elem.offsetWidth / 2) * pxRatio,
                y: (elem.offsetTop + elem.offsetHeight / 2) * pxRatio,
            }, repulseRadius = (elem.offsetWidth / 2) * pxRatio, area = div.type === "circle"
                ? new Circle(pos.x, pos.y, repulseRadius)
                : new Rectangle(elem.offsetLeft * pxRatio, elem.offsetTop * pxRatio, elem.offsetWidth * pxRatio, elem.offsetHeight * pxRatio), divs = repulse.divs, divRepulse = divMode(divs, elem);
            this.processRepulse(pos, repulseRadius, area, divRepulse);
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-interaction-external-repulse/esm/index.js

async function loadExternalRepulseInteraction(engine) {
    await engine.addInteractor("externalRepulse", (container) => new Repulser(engine, container));
}







;// CONCATENATED MODULE: ./node_modules/tsparticles-interaction-external-slow/esm/Options/Classes/Slow.js
class Slow {
    constructor() {
        this.factor = 3;
        this.radius = 200;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.factor !== undefined) {
            this.factor = data.factor;
        }
        if (data.radius !== undefined) {
            this.radius = data.radius;
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-interaction-external-slow/esm/Slower.js


class Slower extends ExternalInteractorBase {
    constructor(container) {
        super(container);
    }
    clear(particle, delta, force) {
        if (particle.slow.inRange && !force) {
            return;
        }
        particle.slow.factor = 1;
    }
    init() {
        const container = this.container, slow = container.actualOptions.interactivity.modes.slow;
        if (!slow) {
            return;
        }
        container.retina.slowModeRadius = slow.radius * container.retina.pixelRatio;
    }
    async interact() {
    }
    isEnabled(particle) {
        var _a;
        const container = this.container, mouse = container.interactivity.mouse, events = ((_a = particle === null || particle === void 0 ? void 0 : particle.interactivity) !== null && _a !== void 0 ? _a : container.actualOptions.interactivity).events;
        return events.onHover.enable && !!mouse.position && isInArray("slow", events.onHover.mode);
    }
    loadModeOptions(options, ...sources) {
        if (!options.slow) {
            options.slow = new Slow();
        }
        for (const source of sources) {
            options.slow.load(source === null || source === void 0 ? void 0 : source.slow);
        }
    }
    reset(particle) {
        particle.slow.inRange = false;
        const container = this.container, options = container.actualOptions, mousePos = container.interactivity.mouse.position, radius = container.retina.slowModeRadius, slow = options.interactivity.modes.slow;
        if (!slow || !radius || radius < 0 || !mousePos) {
            return;
        }
        const particlePos = particle.getPosition(), dist = getDistance(mousePos, particlePos), proximityFactor = dist / radius, slowFactor = slow.factor;
        if (dist <= radius) {
            particle.slow.inRange = true;
            particle.slow.factor = proximityFactor / slowFactor;
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-interaction-external-slow/esm/index.js

async function loadExternalSlowInteraction(engine) {
    await engine.addInteractor("externalSlow", (container) => new Slower(container));
}



;// CONCATENATED MODULE: ./node_modules/tsparticles-shape-image/esm/Utils.js

const currentColorRegex = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d.]+%?\))|currentcolor/gi;
function replaceColorSvg(imageShape, color, opacity) {
    const { svgData } = imageShape;
    if (!svgData) {
        return "";
    }
    const colorStyle = getStyleFromHsl(color, opacity);
    if (svgData.includes("fill")) {
        return svgData.replace(currentColorRegex, () => colorStyle);
    }
    const preFillIndex = svgData.indexOf(">");
    return `${svgData.substring(0, preFillIndex)} fill="${colorStyle}"${svgData.substring(preFillIndex)}`;
}
async function loadImage(image) {
    return new Promise((resolve) => {
        image.loading = true;
        const img = new Image();
        image.element = img;
        img.addEventListener("load", () => {
            image.loading = false;
            resolve();
        });
        img.addEventListener("error", () => {
            image.element = undefined;
            image.error = true;
            image.loading = false;
            console.error(`Error tsParticles - loading image: ${image.source}`);
            resolve();
        });
        img.src = image.source;
    });
}
async function downloadSvgImage(image) {
    if (image.type !== "svg") {
        await loadImage(image);
        return;
    }
    image.loading = true;
    const response = await fetch(image.source);
    if (!response.ok) {
        console.error("Error tsParticles - Image not found");
        image.error = true;
    }
    if (!image.error) {
        image.svgData = await response.text();
    }
    image.loading = false;
}
function replaceImageColor(image, imageData, color, particle) {
    var _a, _b, _c;
    const svgColoredData = replaceColorSvg(image, color, (_b = (_a = particle.opacity) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : 1), imageRes = {
        color,
        data: Object.assign(Object.assign({}, image), { svgData: svgColoredData }),
        loaded: false,
        ratio: imageData.width / imageData.height,
        replaceColor: (_c = imageData.replaceColor) !== null && _c !== void 0 ? _c : imageData.replace_color,
        source: imageData.src,
    };
    return new Promise((resolve) => {
        const svg = new Blob([svgColoredData], { type: "image/svg+xml" }), domUrl = URL || window.URL || window.webkitURL || window, url = domUrl.createObjectURL(svg), img = new Image();
        img.addEventListener("load", () => {
            imageRes.loaded = true;
            imageRes.element = img;
            resolve(imageRes);
            domUrl.revokeObjectURL(url);
        });
        img.addEventListener("error", async () => {
            domUrl.revokeObjectURL(url);
            const img2 = Object.assign(Object.assign({}, image), { error: false, loading: true });
            await loadImage(img2);
            imageRes.loaded = true;
            imageRes.element = img2.element;
            resolve(imageRes);
        });
        img.src = url;
    });
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-shape-image/esm/ImageDrawer.js

class ImageDrawer {
    constructor() {
        this._images = [];
    }
    addImage(container, image) {
        const containerImages = this.getImages(container);
        containerImages === null || containerImages === void 0 ? void 0 : containerImages.images.push(image);
    }
    destroy() {
        this._images = [];
    }
    draw(context, particle, radius, opacity) {
        var _a;
        const image = particle.image, element = image === null || image === void 0 ? void 0 : image.element;
        if (!element) {
            return;
        }
        const ratio = (_a = image === null || image === void 0 ? void 0 : image.ratio) !== null && _a !== void 0 ? _a : 1, pos = {
            x: -radius,
            y: -radius,
        };
        context.globalAlpha = opacity;
        context.drawImage(element, pos.x, pos.y, radius * 2, (radius * 2) / ratio);
        context.globalAlpha = 1;
    }
    getImages(container) {
        const containerImages = this._images.find((t) => t.id === container.id);
        if (!containerImages) {
            this._images.push({
                id: container.id,
                images: [],
            });
            return this.getImages(container);
        }
        else {
            return containerImages;
        }
    }
    getSidesCount() {
        return 12;
    }
    loadShape(particle) {
        if (particle.shape !== "image" && particle.shape !== "images") {
            return;
        }
        const container = particle.container, images = this.getImages(container).images, imageData = particle.shapeData, image = images.find((t) => t.source === imageData.src);
        if (!image) {
            this.loadImageShape(container, imageData).then(() => {
                this.loadShape(particle);
            });
        }
    }
    particleInit(container, particle) {
        var _a;
        if (particle.shape !== "image" && particle.shape !== "images") {
            return;
        }
        const images = this.getImages(container).images, imageData = particle.shapeData, color = particle.getFillColor(), replaceColor = (_a = imageData.replaceColor) !== null && _a !== void 0 ? _a : imageData.replace_color, image = images.find((t) => t.source === imageData.src);
        if (!image) {
            return;
        }
        if (image.loading) {
            setTimeout(() => {
                this.particleInit(container, particle);
            });
            return;
        }
        (async () => {
            var _a, _b;
            let imageRes;
            if (image.svgData && color) {
                imageRes = await replaceImageColor(image, imageData, color, particle);
            }
            else {
                imageRes = {
                    color,
                    data: image,
                    element: image.element,
                    loaded: true,
                    ratio: imageData.width / imageData.height,
                    replaceColor: replaceColor,
                    source: imageData.src,
                };
            }
            if (!imageRes.ratio) {
                imageRes.ratio = 1;
            }
            const fill = (_a = imageData.fill) !== null && _a !== void 0 ? _a : particle.fill, close = (_b = imageData.close) !== null && _b !== void 0 ? _b : particle.close, imageShape = {
                image: imageRes,
                fill,
                close,
            };
            particle.image = imageShape.image;
            particle.fill = imageShape.fill;
            particle.close = imageShape.close;
        })();
    }
    async loadImageShape(container, imageShape) {
        var _a;
        const source = imageShape.src;
        if (!source) {
            throw new Error("Error tsParticles - No image.src");
        }
        try {
            const image = {
                source: source,
                type: source.substring(source.length - 3),
                error: false,
                loading: true,
            };
            this.addImage(container, image);
            const imageFunc = ((_a = imageShape.replaceColor) !== null && _a !== void 0 ? _a : imageShape.replace_color) ? downloadSvgImage : loadImage;
            await imageFunc(image);
        }
        catch (_b) {
            throw new Error(`tsParticles error - ${imageShape.src} not found`);
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-shape-image/esm/index.js

async function loadImageShape(engine) {
    await engine.addShape(["image", "images"], new ImageDrawer());
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-updater-life/esm/Options/Classes/LifeDelay.js

class LifeDelay extends ValueWithRandom {
    constructor() {
        super();
        this.sync = false;
    }
    load(data) {
        if (!data) {
            return;
        }
        super.load(data);
        if (data.sync !== undefined) {
            this.sync = data.sync;
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-updater-life/esm/Options/Classes/LifeDuration.js

class LifeDuration extends ValueWithRandom {
    constructor() {
        super();
        this.random.minimumValue = 0.0001;
        this.sync = false;
    }
    load(data) {
        if (!data) {
            return;
        }
        super.load(data);
        if (data.sync !== undefined) {
            this.sync = data.sync;
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-updater-life/esm/Options/Classes/Life.js


class Life {
    constructor() {
        this.count = 0;
        this.delay = new LifeDelay();
        this.duration = new LifeDuration();
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.count !== undefined) {
            this.count = data.count;
        }
        this.delay.load(data.delay);
        this.duration.load(data.duration);
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-updater-life/esm/LifeUpdater.js


class LifeUpdater {
    constructor(container) {
        this.container = container;
    }
    init(particle) {
        const container = this.container, particlesOptions = particle.options, lifeOptions = particlesOptions.life;
        if (!lifeOptions) {
            return;
        }
        particle.life = {
            delay: container.retina.reduceFactor
                ? ((getRangeValue(lifeOptions.delay.value) * (lifeOptions.delay.sync ? 1 : getRandom())) /
                    container.retina.reduceFactor) *
                    1000
                : 0,
            delayTime: 0,
            duration: container.retina.reduceFactor
                ? ((getRangeValue(lifeOptions.duration.value) * (lifeOptions.duration.sync ? 1 : getRandom())) /
                    container.retina.reduceFactor) *
                    1000
                : 0,
            time: 0,
            count: lifeOptions.count,
        };
        if (particle.life.duration <= 0) {
            particle.life.duration = -1;
        }
        if (particle.life.count <= 0) {
            particle.life.count = -1;
        }
        if (particle.life) {
            particle.spawning = particle.life.delay > 0;
        }
    }
    isEnabled(particle) {
        return !particle.destroyed;
    }
    loadOptions(options, ...sources) {
        if (!options.life) {
            options.life = new Life();
        }
        for (const source of sources) {
            options.life.load(source === null || source === void 0 ? void 0 : source.life);
        }
    }
    update(particle, delta) {
        if (!this.isEnabled(particle) || !particle.life) {
            return;
        }
        const life = particle.life;
        let justSpawned = false;
        if (particle.spawning) {
            life.delayTime += delta.value;
            if (life.delayTime >= particle.life.delay) {
                justSpawned = true;
                particle.spawning = false;
                life.delayTime = 0;
                life.time = 0;
            }
            else {
                return;
            }
        }
        if (life.duration === -1) {
            return;
        }
        if (particle.spawning) {
            return;
        }
        if (justSpawned) {
            life.time = 0;
        }
        else {
            life.time += delta.value;
        }
        if (life.time < life.duration) {
            return;
        }
        life.time = 0;
        if (particle.life.count > 0) {
            particle.life.count--;
        }
        if (particle.life.count === 0) {
            particle.destroy();
            return;
        }
        const canvasSize = this.container.canvas.size, widthRange = setRangeValue(0, canvasSize.width), heightRange = setRangeValue(0, canvasSize.width);
        particle.position.x = randomInRange(widthRange);
        particle.position.y = randomInRange(heightRange);
        particle.spawning = true;
        life.delayTime = 0;
        life.time = 0;
        particle.reset();
        const lifeOptions = particle.options.life;
        if (lifeOptions) {
            life.delay = getRangeValue(lifeOptions.delay.value) * 1000;
            life.duration = getRangeValue(lifeOptions.duration.value) * 1000;
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-updater-life/esm/index.js

async function loadLifeUpdater(engine) {
    await engine.addParticleUpdater("life", (container) => new LifeUpdater(container));
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-shape-line/esm/LineDrawer.js
class LineDrawer {
    draw(context, particle, radius) {
        context.moveTo(-radius / 2, 0);
        context.lineTo(radius / 2, 0);
    }
    getSidesCount() {
        return 1;
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-shape-line/esm/index.js

async function loadLineShape(engine) {
    await engine.addShape("line", new LineDrawer());
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-updater-opacity/esm/OpacityUpdater.js

function checkDestroy(particle, value, minValue, maxValue) {
    switch (particle.options.opacity.animation.destroy) {
        case "max":
            if (value >= maxValue) {
                particle.destroy();
            }
            break;
        case "min":
            if (value <= minValue) {
                particle.destroy();
            }
            break;
    }
}
function updateOpacity(particle, delta) {
    var _a, _b, _c, _d, _e, _f;
    if (!particle.opacity) {
        return;
    }
    const minValue = particle.opacity.min, maxValue = particle.opacity.max, decay = (_a = particle.opacity.decay) !== null && _a !== void 0 ? _a : 1;
    if (particle.destroyed ||
        !particle.opacity.enable ||
        (((_b = particle.opacity.maxLoops) !== null && _b !== void 0 ? _b : 0) > 0 && ((_c = particle.opacity.loops) !== null && _c !== void 0 ? _c : 0) > ((_d = particle.opacity.maxLoops) !== null && _d !== void 0 ? _d : 0))) {
        return;
    }
    switch (particle.opacity.status) {
        case "increasing":
            if (particle.opacity.value >= maxValue) {
                particle.opacity.status = "decreasing";
                if (!particle.opacity.loops) {
                    particle.opacity.loops = 0;
                }
                particle.opacity.loops++;
            }
            else {
                particle.opacity.value += ((_e = particle.opacity.velocity) !== null && _e !== void 0 ? _e : 0) * delta.factor;
            }
            break;
        case "decreasing":
            if (particle.opacity.value <= minValue) {
                particle.opacity.status = "increasing";
                if (!particle.opacity.loops) {
                    particle.opacity.loops = 0;
                }
                particle.opacity.loops++;
            }
            else {
                particle.opacity.value -= ((_f = particle.opacity.velocity) !== null && _f !== void 0 ? _f : 0) * delta.factor;
            }
            break;
    }
    if (particle.opacity.velocity && particle.opacity.decay !== 1) {
        particle.opacity.velocity *= decay;
    }
    checkDestroy(particle, particle.opacity.value, minValue, maxValue);
    if (!particle.destroyed) {
        particle.opacity.value = clamp(particle.opacity.value, minValue, maxValue);
    }
}
class OpacityUpdater {
    constructor(container) {
        this.container = container;
    }
    init(particle) {
        const opacityOptions = particle.options.opacity;
        particle.opacity = {
            enable: opacityOptions.animation.enable,
            max: getRangeMax(opacityOptions.value),
            min: getRangeMin(opacityOptions.value),
            value: getRangeValue(opacityOptions.value),
            loops: 0,
            maxLoops: getRangeValue(opacityOptions.animation.count),
        };
        const opacityAnimation = opacityOptions.animation;
        if (opacityAnimation.enable) {
            particle.opacity.decay = 1 - getRangeValue(opacityAnimation.decay);
            particle.opacity.status = "increasing";
            const opacityRange = opacityOptions.value;
            particle.opacity.min = getRangeMin(opacityRange);
            particle.opacity.max = getRangeMax(opacityRange);
            switch (opacityAnimation.startValue) {
                case "min":
                    particle.opacity.value = particle.opacity.min;
                    particle.opacity.status = "increasing";
                    break;
                case "random":
                    particle.opacity.value = randomInRange(particle.opacity);
                    particle.opacity.status =
                        getRandom() >= 0.5 ? "increasing" : "decreasing";
                    break;
                case "max":
                default:
                    particle.opacity.value = particle.opacity.max;
                    particle.opacity.status = "decreasing";
                    break;
            }
            particle.opacity.velocity =
                (getRangeValue(opacityAnimation.speed) / 100) * this.container.retina.reduceFactor;
            if (!opacityAnimation.sync) {
                particle.opacity.velocity *= getRandom();
            }
        }
        particle.opacity.initialValue = particle.opacity.value;
    }
    isEnabled(particle) {
        var _a, _b, _c, _d;
        return (!particle.destroyed &&
            !particle.spawning &&
            !!particle.opacity &&
            particle.opacity.enable &&
            (((_a = particle.opacity.maxLoops) !== null && _a !== void 0 ? _a : 0) <= 0 ||
                (((_b = particle.opacity.maxLoops) !== null && _b !== void 0 ? _b : 0) > 0 &&
                    ((_c = particle.opacity.loops) !== null && _c !== void 0 ? _c : 0) < ((_d = particle.opacity.maxLoops) !== null && _d !== void 0 ? _d : 0))));
    }
    reset(particle) {
        if (particle.opacity) {
            particle.opacity.loops = 0;
        }
    }
    update(particle, delta) {
        if (!this.isEnabled(particle)) {
            return;
        }
        updateOpacity(particle, delta);
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-updater-opacity/esm/index.js

async function loadOpacityUpdater(engine) {
    await engine.addParticleUpdater("opacity", (container) => new OpacityUpdater(container));
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-updater-out-modes/esm/Utils.js

function bounceHorizontal(data) {
    if (data.outMode !== "bounce" &&
        data.outMode !== "bounce-horizontal" &&
        data.outMode !== "bounceHorizontal" &&
        data.outMode !== "split") {
        return;
    }
    if (data.bounds.right < 0) {
        data.particle.position.x = data.size + data.offset.x;
    }
    else if (data.bounds.left > data.canvasSize.width) {
        data.particle.position.x = data.canvasSize.width - data.size - data.offset.x;
    }
    const velocity = data.particle.velocity.x;
    let bounced = false;
    if ((data.direction === "right" && data.bounds.right >= data.canvasSize.width && velocity > 0) ||
        (data.direction === "left" && data.bounds.left <= 0 && velocity < 0)) {
        const newVelocity = getValue(data.particle.options.bounce.horizontal);
        data.particle.velocity.x *= -newVelocity;
        bounced = true;
    }
    if (!bounced) {
        return;
    }
    const minPos = data.offset.x + data.size;
    if (data.bounds.right >= data.canvasSize.width) {
        data.particle.position.x = data.canvasSize.width - minPos;
    }
    else if (data.bounds.left <= 0) {
        data.particle.position.x = minPos;
    }
    if (data.outMode === "split") {
        data.particle.destroy();
    }
}
function bounceVertical(data) {
    if (data.outMode !== "bounce" &&
        data.outMode !== "bounce-vertical" &&
        data.outMode !== "bounceVertical" &&
        data.outMode !== "split") {
        return;
    }
    if (data.bounds.bottom < 0) {
        data.particle.position.y = data.size + data.offset.y;
    }
    else if (data.bounds.top > data.canvasSize.height) {
        data.particle.position.y = data.canvasSize.height - data.size - data.offset.y;
    }
    const velocity = data.particle.velocity.y;
    let bounced = false;
    if ((data.direction === "bottom" && data.bounds.bottom >= data.canvasSize.height && velocity > 0) ||
        (data.direction === "top" && data.bounds.top <= 0 && velocity < 0)) {
        const newVelocity = getValue(data.particle.options.bounce.vertical);
        data.particle.velocity.y *= -newVelocity;
        bounced = true;
    }
    if (!bounced) {
        return;
    }
    const minPos = data.offset.y + data.size;
    if (data.bounds.bottom >= data.canvasSize.height) {
        data.particle.position.y = data.canvasSize.height - minPos;
    }
    else if (data.bounds.top <= 0) {
        data.particle.position.y = minPos;
    }
    if (data.outMode === "split") {
        data.particle.destroy();
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-updater-out-modes/esm/BounceOutMode.js


class BounceOutMode {
    constructor(container) {
        this.container = container;
        this.modes = [
            "bounce",
            "bounce-vertical",
            "bounce-horizontal",
            "bounceVertical",
            "bounceHorizontal",
            "split",
        ];
    }
    update(particle, direction, delta, outMode) {
        if (!this.modes.includes(outMode)) {
            return;
        }
        const container = this.container;
        let handled = false;
        for (const [, plugin] of container.plugins) {
            if (plugin.particleBounce !== undefined) {
                handled = plugin.particleBounce(particle, delta, direction);
            }
            if (handled) {
                break;
            }
        }
        if (handled) {
            return;
        }
        const pos = particle.getPosition(), offset = particle.offset, size = particle.getRadius(), bounds = calculateBounds(pos, size), canvasSize = container.canvas.size;
        bounceHorizontal({ particle, outMode, direction, bounds, canvasSize, offset, size });
        bounceVertical({ particle, outMode, direction, bounds, canvasSize, offset, size });
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-updater-out-modes/esm/DestroyOutMode.js

class DestroyOutMode {
    constructor(container) {
        this.container = container;
        this.modes = ["destroy"];
    }
    update(particle, direction, delta, outMode) {
        if (!this.modes.includes(outMode)) {
            return;
        }
        const container = this.container;
        switch (particle.outType) {
            case "normal":
            case "outside":
                if (isPointInside(particle.position, container.canvas.size, Vector.origin, particle.getRadius(), direction)) {
                    return;
                }
                break;
            case "inside": {
                const { dx, dy } = getDistances(particle.position, particle.moveCenter);
                const { x: vx, y: vy } = particle.velocity;
                if ((vx < 0 && dx > particle.moveCenter.radius) ||
                    (vy < 0 && dy > particle.moveCenter.radius) ||
                    (vx >= 0 && dx < -particle.moveCenter.radius) ||
                    (vy >= 0 && dy < -particle.moveCenter.radius)) {
                    return;
                }
                break;
            }
        }
        container.particles.remove(particle, undefined, true);
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-updater-out-modes/esm/NoneOutMode.js

class NoneOutMode {
    constructor(container) {
        this.container = container;
        this.modes = ["none"];
    }
    update(particle, direction, delta, outMode) {
        if (!this.modes.includes(outMode)) {
            return;
        }
        if ((particle.options.move.distance.horizontal &&
            (direction === "left" || direction === "right")) ||
            (particle.options.move.distance.vertical &&
                (direction === "top" || direction === "bottom"))) {
            return;
        }
        const gravityOptions = particle.options.move.gravity, container = this.container;
        const canvasSize = container.canvas.size;
        const pRadius = particle.getRadius();
        if (!gravityOptions.enable) {
            if ((particle.velocity.y > 0 && particle.position.y <= canvasSize.height + pRadius) ||
                (particle.velocity.y < 0 && particle.position.y >= -pRadius) ||
                (particle.velocity.x > 0 && particle.position.x <= canvasSize.width + pRadius) ||
                (particle.velocity.x < 0 && particle.position.x >= -pRadius)) {
                return;
            }
            if (!isPointInside(particle.position, container.canvas.size, Vector.origin, pRadius, direction)) {
                container.particles.remove(particle);
            }
        }
        else {
            const position = particle.position;
            if ((!gravityOptions.inverse &&
                position.y > canvasSize.height + pRadius &&
                direction === "bottom") ||
                (gravityOptions.inverse && position.y < -pRadius && direction === "top")) {
                container.particles.remove(particle);
            }
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-updater-out-modes/esm/OutOutMode.js

class OutOutMode {
    constructor(container) {
        this.container = container;
        this.modes = ["out"];
    }
    update(particle, direction, delta, outMode) {
        if (!this.modes.includes(outMode)) {
            return;
        }
        const container = this.container;
        switch (particle.outType) {
            case "inside": {
                const { x: vx, y: vy } = particle.velocity;
                const circVec = Vector.origin;
                circVec.length = particle.moveCenter.radius;
                circVec.angle = particle.velocity.angle + Math.PI;
                circVec.addTo(Vector.create(particle.moveCenter));
                const { dx, dy } = getDistances(particle.position, circVec);
                if ((vx <= 0 && dx >= 0) || (vy <= 0 && dy >= 0) || (vx >= 0 && dx <= 0) || (vy >= 0 && dy <= 0)) {
                    return;
                }
                particle.position.x = Math.floor(randomInRange({
                    min: 0,
                    max: container.canvas.size.width,
                }));
                particle.position.y = Math.floor(randomInRange({
                    min: 0,
                    max: container.canvas.size.height,
                }));
                const { dx: newDx, dy: newDy } = getDistances(particle.position, particle.moveCenter);
                particle.direction = Math.atan2(-newDy, -newDx);
                particle.velocity.angle = particle.direction;
                break;
            }
            default: {
                if (isPointInside(particle.position, container.canvas.size, Vector.origin, particle.getRadius(), direction)) {
                    return;
                }
                switch (particle.outType) {
                    case "outside": {
                        particle.position.x =
                            Math.floor(randomInRange({
                                min: -particle.moveCenter.radius,
                                max: particle.moveCenter.radius,
                            })) + particle.moveCenter.x;
                        particle.position.y =
                            Math.floor(randomInRange({
                                min: -particle.moveCenter.radius,
                                max: particle.moveCenter.radius,
                            })) + particle.moveCenter.y;
                        const { dx, dy } = getDistances(particle.position, particle.moveCenter);
                        if (particle.moveCenter.radius) {
                            particle.direction = Math.atan2(dy, dx);
                            particle.velocity.angle = particle.direction;
                        }
                        break;
                    }
                    case "normal": {
                        const wrap = particle.options.move.warp, canvasSize = container.canvas.size, newPos = {
                            bottom: canvasSize.height + particle.getRadius() + particle.offset.y,
                            left: -particle.getRadius() - particle.offset.x,
                            right: canvasSize.width + particle.getRadius() + particle.offset.x,
                            top: -particle.getRadius() - particle.offset.y,
                        }, sizeValue = particle.getRadius(), nextBounds = calculateBounds(particle.position, sizeValue);
                        if (direction === "right" &&
                            nextBounds.left > canvasSize.width + particle.offset.x) {
                            particle.position.x = newPos.left;
                            particle.initialPosition.x = particle.position.x;
                            if (!wrap) {
                                particle.position.y = getRandom() * canvasSize.height;
                                particle.initialPosition.y = particle.position.y;
                            }
                        }
                        else if (direction === "left" && nextBounds.right < -particle.offset.x) {
                            particle.position.x = newPos.right;
                            particle.initialPosition.x = particle.position.x;
                            if (!wrap) {
                                particle.position.y = getRandom() * canvasSize.height;
                                particle.initialPosition.y = particle.position.y;
                            }
                        }
                        if (direction === "bottom" &&
                            nextBounds.top > canvasSize.height + particle.offset.y) {
                            if (!wrap) {
                                particle.position.x = getRandom() * canvasSize.width;
                                particle.initialPosition.x = particle.position.x;
                            }
                            particle.position.y = newPos.top;
                            particle.initialPosition.y = particle.position.y;
                        }
                        else if (direction === "top" && nextBounds.bottom < -particle.offset.y) {
                            if (!wrap) {
                                particle.position.x = getRandom() * canvasSize.width;
                                particle.initialPosition.x = particle.position.x;
                            }
                            particle.position.y = newPos.bottom;
                            particle.initialPosition.y = particle.position.y;
                        }
                        break;
                    }
                }
                break;
            }
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-updater-out-modes/esm/OutOfCanvasUpdater.js




class OutOfCanvasUpdater {
    constructor(container) {
        this.container = container;
        this.updaters = [
            new BounceOutMode(container),
            new DestroyOutMode(container),
            new OutOutMode(container),
            new NoneOutMode(container),
        ];
    }
    init() {
    }
    isEnabled(particle) {
        return !particle.destroyed && !particle.spawning;
    }
    update(particle, delta) {
        var _a, _b, _c, _d;
        const outModes = particle.options.move.outModes;
        this.updateOutMode(particle, delta, (_a = outModes.bottom) !== null && _a !== void 0 ? _a : outModes.default, "bottom");
        this.updateOutMode(particle, delta, (_b = outModes.left) !== null && _b !== void 0 ? _b : outModes.default, "left");
        this.updateOutMode(particle, delta, (_c = outModes.right) !== null && _c !== void 0 ? _c : outModes.default, "right");
        this.updateOutMode(particle, delta, (_d = outModes.top) !== null && _d !== void 0 ? _d : outModes.default, "top");
    }
    updateOutMode(particle, delta, outMode, direction) {
        for (const updater of this.updaters) {
            updater.update(particle, direction, delta, outMode);
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-updater-out-modes/esm/index.js

async function loadOutModesUpdater(engine) {
    await engine.addParticleUpdater("outModes", (container) => new OutOfCanvasUpdater(container));
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-move-parallax/esm/ParallaxMover.js

class ParallaxMover {
    init() {
    }
    isEnabled(particle) {
        return (!isSsr() &&
            !particle.destroyed &&
            particle.container.actualOptions.interactivity.events.onHover.parallax.enable);
    }
    move(particle) {
        const container = particle.container, options = container.actualOptions;
        if (isSsr() || !options.interactivity.events.onHover.parallax.enable) {
            return;
        }
        const parallaxForce = options.interactivity.events.onHover.parallax.force, mousePos = container.interactivity.mouse.position;
        if (!mousePos) {
            return;
        }
        const canvasCenter = {
            x: container.canvas.size.width / 2,
            y: container.canvas.size.height / 2,
        }, parallaxSmooth = options.interactivity.events.onHover.parallax.smooth, factor = particle.getRadius() / parallaxForce, centerDistance = {
            x: (mousePos.x - canvasCenter.x) * factor,
            y: (mousePos.y - canvasCenter.y) * factor,
        };
        particle.offset.x += (centerDistance.x - particle.offset.x) / parallaxSmooth;
        particle.offset.y += (centerDistance.y - particle.offset.y) / parallaxSmooth;
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-move-parallax/esm/index.js

async function loadParallaxMover(engine) {
    engine.addMover("parallax", () => new ParallaxMover());
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-interaction-particles-attract/esm/Attractor.js

class Attractor_Attractor extends ParticlesInteractorBase {
    constructor(container) {
        super(container);
    }
    clear() {
    }
    init() {
    }
    async interact(p1) {
        var _a;
        const container = this.container, distance = (_a = p1.retina.attractDistance) !== null && _a !== void 0 ? _a : container.retina.attractDistance, pos1 = p1.getPosition(), query = container.particles.quadTree.queryCircle(pos1, distance);
        for (const p2 of query) {
            if (p1 === p2 || !p2.options.move.attract.enable || p2.destroyed || p2.spawning) {
                continue;
            }
            const pos2 = p2.getPosition(), { dx, dy } = getDistances(pos1, pos2), rotate = p1.options.move.attract.rotate, ax = dx / (rotate.x * 1000), ay = dy / (rotate.y * 1000), p1Factor = p2.size.value / p1.size.value, p2Factor = 1 / p1Factor;
            p1.velocity.x -= ax * p1Factor;
            p1.velocity.y -= ay * p1Factor;
            p2.velocity.x += ax * p2Factor;
            p2.velocity.y += ay * p2Factor;
        }
    }
    isEnabled(particle) {
        return particle.options.move.attract.enable;
    }
    reset() {
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-interaction-particles-attract/esm/index.js

async function loadParticlesAttractInteraction(engine) {
    await engine.addInteractor("particlesAttract", (container) => new Attractor_Attractor(container));
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-interaction-particles-collisions/esm/Absorb.js

function updateAbsorb(p1, r1, p2, r2, delta, pixelRatio) {
    const factor = clamp((p1.options.collisions.absorb.speed * delta.factor) / 10, 0, r2);
    p1.size.value += factor / 2;
    p2.size.value -= factor;
    if (r2 <= pixelRatio) {
        p2.size.value = 0;
        p2.destroy();
    }
}
function absorb(p1, p2, delta, pixelRatio) {
    const r1 = p1.getRadius(), r2 = p2.getRadius();
    if (r1 === undefined && r2 !== undefined) {
        p1.destroy();
    }
    else if (r1 !== undefined && r2 === undefined) {
        p2.destroy();
    }
    else if (r1 !== undefined && r2 !== undefined) {
        if (r1 >= r2) {
            updateAbsorb(p1, r1, p2, r2, delta, pixelRatio);
        }
        else {
            updateAbsorb(p2, r2, p1, r1, delta, pixelRatio);
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-interaction-particles-collisions/esm/Bounce.js

function bounce(p1, p2) {
    circleBounce(circleBounceDataFromParticle(p1), circleBounceDataFromParticle(p2));
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-interaction-particles-collisions/esm/Destroy.js

function destroy(p1, p2) {
    if (!p1.unbreakable && !p2.unbreakable) {
        bounce(p1, p2);
    }
    if (p1.getRadius() === undefined && p2.getRadius() !== undefined) {
        p1.destroy();
    }
    else if (p1.getRadius() !== undefined && p2.getRadius() === undefined) {
        p2.destroy();
    }
    else if (p1.getRadius() !== undefined && p2.getRadius() !== undefined) {
        const deleteP = p1.getRadius() >= p2.getRadius() ? p1 : p2;
        deleteP.destroy();
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-interaction-particles-collisions/esm/ResolveCollision.js



function resolveCollision(p1, p2, delta, pixelRatio) {
    switch (p1.options.collisions.mode) {
        case "absorb": {
            absorb(p1, p2, delta, pixelRatio);
            break;
        }
        case "bounce": {
            bounce(p1, p2);
            break;
        }
        case "destroy": {
            destroy(p1, p2);
            break;
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-interaction-particles-collisions/esm/Collider.js


class Collider extends ParticlesInteractorBase {
    constructor(container) {
        super(container);
    }
    clear() {
    }
    init() {
    }
    async interact(p1, delta) {
        const container = this.container, pos1 = p1.getPosition(), radius1 = p1.getRadius(), query = container.particles.quadTree.queryCircle(pos1, radius1 * 2);
        for (const p2 of query) {
            if (p1 === p2 ||
                !p2.options.collisions.enable ||
                p1.options.collisions.mode !== p2.options.collisions.mode ||
                p2.destroyed ||
                p2.spawning) {
                continue;
            }
            const pos2 = p2.getPosition(), radius2 = p2.getRadius();
            if (Math.abs(Math.round(pos1.z) - Math.round(pos2.z)) > radius1 + radius2) {
                continue;
            }
            const dist = getDistance(pos1, pos2), distP = radius1 + radius2;
            if (dist > distP) {
                continue;
            }
            resolveCollision(p1, p2, delta, container.retina.pixelRatio);
        }
    }
    isEnabled(particle) {
        return particle.options.collisions.enable;
    }
    reset() {
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-interaction-particles-collisions/esm/index.js

async function loadParticlesCollisionsInteraction(engine) {
    await engine.addInteractor("particlesCollisions", (container) => new Collider(container));
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-interaction-particles-links/esm/CircleWarp.js

class CircleWarp extends Circle {
    constructor(x, y, radius, canvasSize) {
        super(x, y, radius);
        this.canvasSize = canvasSize;
        this.canvasSize = Object.assign({}, canvasSize);
    }
    contains(point) {
        if (super.contains(point)) {
            return true;
        }
        const posNE = {
            x: point.x - this.canvasSize.width,
            y: point.y,
        };
        if (super.contains(posNE)) {
            return true;
        }
        const posSE = {
            x: point.x - this.canvasSize.width,
            y: point.y - this.canvasSize.height,
        };
        if (super.contains(posSE)) {
            return true;
        }
        const posSW = {
            x: point.x,
            y: point.y - this.canvasSize.height,
        };
        return super.contains(posSW);
    }
    intersects(range) {
        if (super.intersects(range)) {
            return true;
        }
        const rect = range, circle = range, newPos = {
            x: range.position.x - this.canvasSize.width,
            y: range.position.y - this.canvasSize.height,
        };
        if (circle.radius !== undefined) {
            const biggerCircle = new Circle(newPos.x, newPos.y, circle.radius * 2);
            return super.intersects(biggerCircle);
        }
        else if (rect.size !== undefined) {
            const rectSW = new Rectangle(newPos.x, newPos.y, rect.size.width * 2, rect.size.height * 2);
            return super.intersects(rectSW);
        }
        return false;
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-interaction-particles-links/esm/Options/Classes/LinksShadow.js

class LinksShadow {
    constructor() {
        this.blur = 5;
        this.color = new OptionsColor();
        this.color.value = "#000";
        this.enable = false;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.blur !== undefined) {
            this.blur = data.blur;
        }
        this.color = OptionsColor.create(this.color, data.color);
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-interaction-particles-links/esm/Options/Classes/LinksTriangle.js

class LinksTriangle {
    constructor() {
        this.enable = false;
        this.frequency = 1;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.color !== undefined) {
            this.color = OptionsColor.create(this.color, data.color);
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.frequency !== undefined) {
            this.frequency = data.frequency;
        }
        if (data.opacity !== undefined) {
            this.opacity = data.opacity;
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-interaction-particles-links/esm/Options/Classes/Links.js



class Links {
    constructor() {
        this.blink = false;
        this.color = new OptionsColor();
        this.color.value = "#fff";
        this.consent = false;
        this.distance = 100;
        this.enable = false;
        this.frequency = 1;
        this.opacity = 1;
        this.shadow = new LinksShadow();
        this.triangles = new LinksTriangle();
        this.width = 1;
        this.warp = false;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.id !== undefined) {
            this.id = data.id;
        }
        if (data.blink !== undefined) {
            this.blink = data.blink;
        }
        this.color = OptionsColor.create(this.color, data.color);
        if (data.consent !== undefined) {
            this.consent = data.consent;
        }
        if (data.distance !== undefined) {
            this.distance = data.distance;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.frequency !== undefined) {
            this.frequency = data.frequency;
        }
        if (data.opacity !== undefined) {
            this.opacity = data.opacity;
        }
        this.shadow.load(data.shadow);
        this.triangles.load(data.triangles);
        if (data.width !== undefined) {
            this.width = data.width;
        }
        if (data.warp !== undefined) {
            this.warp = data.warp;
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-interaction-particles-links/esm/Linker.js



function getLinkDistance(pos1, pos2, optDistance, canvasSize, warp) {
    let distance = getDistance(pos1, pos2);
    if (!warp || distance <= optDistance) {
        return distance;
    }
    const pos2NE = {
        x: pos2.x - canvasSize.width,
        y: pos2.y,
    };
    distance = getDistance(pos1, pos2NE);
    if (distance <= optDistance) {
        return distance;
    }
    const pos2SE = {
        x: pos2.x - canvasSize.width,
        y: pos2.y - canvasSize.height,
    };
    distance = getDistance(pos1, pos2SE);
    if (distance <= optDistance) {
        return distance;
    }
    const pos2SW = {
        x: pos2.x,
        y: pos2.y - canvasSize.height,
    };
    distance = getDistance(pos1, pos2SW);
    return distance;
}
class Linker extends ParticlesInteractorBase {
    constructor(container) {
        super(container);
        this.linkContainer = container;
    }
    clear() {
    }
    init() {
        this.linkContainer.particles.linksColor = undefined;
        this.linkContainer.particles.linksColors = new Map();
    }
    async interact(p1) {
        var _a;
        if (!p1.options.links) {
            return;
        }
        p1.links = [];
        const pos1 = p1.getPosition(), container = this.container, canvasSize = container.canvas.size;
        if (pos1.x < 0 || pos1.y < 0 || pos1.x > canvasSize.width || pos1.y > canvasSize.height) {
            return;
        }
        const linkOpt1 = p1.options.links, optOpacity = linkOpt1.opacity, optDistance = (_a = p1.retina.linksDistance) !== null && _a !== void 0 ? _a : 0, warp = linkOpt1.warp, range = warp
            ? new CircleWarp(pos1.x, pos1.y, optDistance, canvasSize)
            : new Circle(pos1.x, pos1.y, optDistance), query = container.particles.quadTree.query(range);
        for (const p2 of query) {
            const linkOpt2 = p2.options.links;
            if (p1 === p2 ||
                !(linkOpt2 === null || linkOpt2 === void 0 ? void 0 : linkOpt2.enable) ||
                linkOpt1.id !== linkOpt2.id ||
                p2.spawning ||
                p2.destroyed ||
                !p2.links ||
                p1.links.map((t) => t.destination).indexOf(p2) !== -1 ||
                p2.links.map((t) => t.destination).indexOf(p1) !== -1) {
                continue;
            }
            const pos2 = p2.getPosition();
            if (pos2.x < 0 || pos2.y < 0 || pos2.x > canvasSize.width || pos2.y > canvasSize.height) {
                continue;
            }
            const distance = getLinkDistance(pos1, pos2, optDistance, canvasSize, warp && linkOpt2.warp);
            if (distance > optDistance) {
                return;
            }
            const opacityLine = (1 - distance / optDistance) * optOpacity;
            this.setColor(p1);
            p1.links.push({
                destination: p2,
                opacity: opacityLine,
            });
        }
    }
    isEnabled(particle) {
        var _a;
        return !!((_a = particle.options.links) === null || _a === void 0 ? void 0 : _a.enable);
    }
    loadParticlesOptions(options, ...sources) {
        var _a, _b;
        if (!options.links) {
            options.links = new Links();
        }
        for (const source of sources) {
            options.links.load((_b = (_a = source === null || source === void 0 ? void 0 : source.links) !== null && _a !== void 0 ? _a : source === null || source === void 0 ? void 0 : source.lineLinked) !== null && _b !== void 0 ? _b : source === null || source === void 0 ? void 0 : source.line_linked);
        }
    }
    reset() {
    }
    setColor(p1) {
        if (!p1.options.links) {
            return;
        }
        const container = this.linkContainer, linksOptions = p1.options.links;
        let linkColor = linksOptions.id === undefined
            ? container.particles.linksColor
            : container.particles.linksColors.get(linksOptions.id);
        if (linkColor) {
            return;
        }
        const optColor = linksOptions.color;
        linkColor = getLinkRandomColor(optColor, linksOptions.blink, linksOptions.consent);
        if (linksOptions.id === undefined) {
            container.particles.linksColor = linkColor;
        }
        else {
            container.particles.linksColors.set(linksOptions.id, linkColor);
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-interaction-particles-links/esm/interaction.js

async function loadInteraction(engine) {
    await engine.addInteractor("particlesLinks", (container) => new Linker(container));
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-interaction-particles-links/esm/Utils.js

function drawLinkLine(context, width, begin, end, maxDistance, canvasSize, warp, backgroundMask, composite, colorLine, opacity, shadow) {
    let drawn = false;
    if (getDistance(begin, end) <= maxDistance) {
        drawLine(context, begin, end);
        drawn = true;
    }
    else if (warp) {
        let pi1;
        let pi2;
        const endNE = {
            x: end.x - canvasSize.width,
            y: end.y,
        };
        const d1 = getDistances(begin, endNE);
        if (d1.distance <= maxDistance) {
            const yi = begin.y - (d1.dy / d1.dx) * begin.x;
            pi1 = { x: 0, y: yi };
            pi2 = { x: canvasSize.width, y: yi };
        }
        else {
            const endSW = {
                x: end.x,
                y: end.y - canvasSize.height,
            };
            const d2 = getDistances(begin, endSW);
            if (d2.distance <= maxDistance) {
                const yi = begin.y - (d2.dy / d2.dx) * begin.x;
                const xi = -yi / (d2.dy / d2.dx);
                pi1 = { x: xi, y: 0 };
                pi2 = { x: xi, y: canvasSize.height };
            }
            else {
                const endSE = {
                    x: end.x - canvasSize.width,
                    y: end.y - canvasSize.height,
                };
                const d3 = getDistances(begin, endSE);
                if (d3.distance <= maxDistance) {
                    const yi = begin.y - (d3.dy / d3.dx) * begin.x;
                    const xi = -yi / (d3.dy / d3.dx);
                    pi1 = { x: xi, y: yi };
                    pi2 = { x: pi1.x + canvasSize.width, y: pi1.y + canvasSize.height };
                }
            }
        }
        if (pi1 && pi2) {
            drawLine(context, begin, pi1);
            drawLine(context, end, pi2);
            drawn = true;
        }
    }
    if (!drawn) {
        return;
    }
    context.lineWidth = width;
    if (backgroundMask) {
        context.globalCompositeOperation = composite;
    }
    context.strokeStyle = getStyleFromRgb(colorLine, opacity);
    if (shadow.enable) {
        const shadowColor = rangeColorToRgb(shadow.color);
        if (shadowColor) {
            context.shadowBlur = shadow.blur;
            context.shadowColor = getStyleFromRgb(shadowColor);
        }
    }
    context.stroke();
}
function drawLinkTriangle(context, pos1, pos2, pos3, backgroundMask, composite, colorTriangle, opacityTriangle) {
    drawTriangle(context, pos1, pos2, pos3);
    if (backgroundMask) {
        context.globalCompositeOperation = composite;
    }
    context.fillStyle = getStyleFromRgb(colorTriangle, opacityTriangle);
    context.fill();
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-interaction-particles-links/esm/LinkInstance.js


function getLinkKey(ids) {
    ids.sort((a, b) => a - b);
    return ids.join("_");
}
function setLinkFrequency(particles, dictionary) {
    const key = getLinkKey(particles.map((t) => t.id));
    let res = dictionary.get(key);
    if (res === undefined) {
        res = getRandom();
        dictionary.set(key, res);
    }
    return res;
}
class LinkInstance {
    constructor(container) {
        this.container = container;
        this._freqs = {
            links: new Map(),
            triangles: new Map(),
        };
    }
    drawParticle(context, particle) {
        var _a;
        const pOptions = particle.options;
        if (!particle.links || particle.links.length <= 0) {
            return;
        }
        const p1Links = particle.links.filter((l) => pOptions.links && this.getLinkFrequency(particle, l.destination) <= pOptions.links.frequency);
        for (const link of p1Links) {
            this.drawTriangles(pOptions, particle, link, p1Links);
            if (link.opacity > 0 && ((_a = particle.retina.linksWidth) !== null && _a !== void 0 ? _a : 0) > 0) {
                this.drawLinkLine(particle, link);
            }
        }
    }
    async init() {
        this._freqs.links = new Map();
        this._freqs.triangles = new Map();
    }
    particleCreated(particle) {
        particle.links = [];
        if (!particle.options.links) {
            return;
        }
        const ratio = this.container.retina.pixelRatio;
        particle.retina.linksDistance = particle.options.links.distance * ratio;
        particle.retina.linksWidth = particle.options.links.width * ratio;
    }
    particleDestroyed(particle) {
        particle.links = [];
    }
    drawLinkLine(p1, link) {
        const container = this.container, options = container.actualOptions, p2 = link.destination, pos1 = p1.getPosition(), pos2 = p2.getPosition();
        let opacity = link.opacity;
        container.canvas.draw((ctx) => {
            var _a, _b, _c;
            if (!p1.options.links) {
                return;
            }
            let colorLine;
            const twinkle = (_a = p1.options.twinkle) === null || _a === void 0 ? void 0 : _a.lines;
            if (twinkle === null || twinkle === void 0 ? void 0 : twinkle.enable) {
                const twinkleFreq = twinkle.frequency, twinkleRgb = rangeColorToRgb(twinkle.color), twinkling = getRandom() < twinkleFreq;
                if (twinkling && twinkleRgb) {
                    colorLine = twinkleRgb;
                    opacity = getRangeValue(twinkle.opacity);
                }
            }
            if (!colorLine) {
                const linksOptions = p1.options.links, linkColor = (linksOptions === null || linksOptions === void 0 ? void 0 : linksOptions.id) !== undefined
                    ? container.particles.linksColors.get(linksOptions.id)
                    : container.particles.linksColor;
                colorLine = getLinkColor(p1, p2, linkColor);
            }
            if (!colorLine) {
                return;
            }
            const width = (_b = p1.retina.linksWidth) !== null && _b !== void 0 ? _b : 0, maxDistance = (_c = p1.retina.linksDistance) !== null && _c !== void 0 ? _c : 0;
            drawLinkLine(ctx, width, pos1, pos2, maxDistance, container.canvas.size, p1.options.links.warp, options.backgroundMask.enable, options.backgroundMask.composite, colorLine, opacity, p1.options.links.shadow);
        });
    }
    drawLinkTriangle(p1, link1, link2) {
        var _a;
        if (!p1.options.links) {
            return;
        }
        const container = this.container, options = container.actualOptions, p2 = link1.destination, p3 = link2.destination, triangleOptions = p1.options.links.triangles, opacityTriangle = (_a = triangleOptions.opacity) !== null && _a !== void 0 ? _a : (link1.opacity + link2.opacity) / 2;
        if (opacityTriangle <= 0) {
            return;
        }
        container.canvas.draw((ctx) => {
            var _a;
            const pos1 = p1.getPosition(), pos2 = p2.getPosition(), pos3 = p3.getPosition(), linksDistance = (_a = p1.retina.linksDistance) !== null && _a !== void 0 ? _a : 0;
            if (getDistance(pos1, pos2) > linksDistance ||
                getDistance(pos3, pos2) > linksDistance ||
                getDistance(pos3, pos1) > linksDistance) {
                return;
            }
            let colorTriangle = rangeColorToRgb(triangleOptions.color);
            if (!colorTriangle) {
                const linksOptions = p1.options.links, linkColor = (linksOptions === null || linksOptions === void 0 ? void 0 : linksOptions.id) !== undefined
                    ? container.particles.linksColors.get(linksOptions.id)
                    : container.particles.linksColor;
                colorTriangle = getLinkColor(p1, p2, linkColor);
            }
            if (!colorTriangle) {
                return;
            }
            drawLinkTriangle(ctx, pos1, pos2, pos3, options.backgroundMask.enable, options.backgroundMask.composite, colorTriangle, opacityTriangle);
        });
    }
    drawTriangles(options, p1, link, p1Links) {
        var _a, _b, _c;
        const p2 = link.destination;
        if (!(((_a = options.links) === null || _a === void 0 ? void 0 : _a.triangles.enable) && ((_b = p2.options.links) === null || _b === void 0 ? void 0 : _b.triangles.enable))) {
            return;
        }
        const vertices = (_c = p2.links) === null || _c === void 0 ? void 0 : _c.filter((t) => {
            const linkFreq = this.getLinkFrequency(p2, t.destination);
            return (p2.options.links &&
                linkFreq <= p2.options.links.frequency &&
                p1Links.findIndex((l) => l.destination === t.destination) >= 0);
        });
        if (!(vertices === null || vertices === void 0 ? void 0 : vertices.length)) {
            return;
        }
        for (const vertex of vertices) {
            const p3 = vertex.destination, triangleFreq = this.getTriangleFrequency(p1, p2, p3);
            if (triangleFreq > options.links.triangles.frequency) {
                continue;
            }
            this.drawLinkTriangle(p1, link, vertex);
        }
    }
    getLinkFrequency(p1, p2) {
        return setLinkFrequency([p1, p2], this._freqs.links);
    }
    getTriangleFrequency(p1, p2, p3) {
        return setLinkFrequency([p1, p2, p3], this._freqs.triangles);
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-interaction-particles-links/esm/plugin.js

class LinksPlugin {
    constructor() {
        this.id = "links";
    }
    getPlugin(container) {
        return new LinkInstance(container);
    }
    loadOptions() {
    }
    needsPlugin() {
        return true;
    }
}
async function loadPlugin(engine) {
    const plugin = new LinksPlugin();
    await engine.addPlugin(plugin);
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-interaction-particles-links/esm/index.js


async function loadParticlesLinksInteraction(engine) {
    await loadInteraction(engine);
    await loadPlugin(engine);
}







;// CONCATENATED MODULE: ./node_modules/tsparticles-shape-polygon/esm/PolygonDrawerBase.js

class PolygonDrawerBase {
    draw(context, particle, radius) {
        const start = this.getCenter(particle, radius), side = this.getSidesData(particle, radius), sideCount = side.count.numerator * side.count.denominator, decimalSides = side.count.numerator / side.count.denominator, interiorAngleDegrees = (180 * (decimalSides - 2)) / decimalSides, interiorAngle = Math.PI - (Math.PI * interiorAngleDegrees) / 180;
        if (!context) {
            return;
        }
        context.beginPath();
        context.translate(start.x, start.y);
        context.moveTo(0, 0);
        for (let i = 0; i < sideCount; i++) {
            context.lineTo(side.length, 0);
            context.translate(side.length, 0);
            context.rotate(interiorAngle);
        }
    }
    getSidesCount(particle) {
        var _a, _b;
        const polygon = particle.shapeData, sides = Math.round(getRangeValue((_b = (_a = polygon === null || polygon === void 0 ? void 0 : polygon.sides) !== null && _a !== void 0 ? _a : polygon === null || polygon === void 0 ? void 0 : polygon.nb_sides) !== null && _b !== void 0 ? _b : 5));
        return sides;
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-shape-polygon/esm/PolygonDrawer.js

class PolygonDrawer extends PolygonDrawerBase {
    getCenter(particle, radius) {
        return {
            x: -radius / (particle.sides / 3.5),
            y: -radius / (2.66 / 3.5),
        };
    }
    getSidesData(particle, radius) {
        const sides = particle.sides;
        return {
            count: {
                denominator: 1,
                numerator: sides,
            },
            length: (radius * 2.66) / (sides / 3),
        };
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-shape-polygon/esm/TriangleDrawer.js

class TriangleDrawer extends PolygonDrawerBase {
    getCenter(particle, radius) {
        return {
            x: -radius,
            y: radius / 1.66,
        };
    }
    getSidesCount() {
        return 3;
    }
    getSidesData(particle, radius) {
        return {
            count: {
                denominator: 2,
                numerator: 3,
            },
            length: radius * 2,
        };
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-shape-polygon/esm/index.js


async function loadGenericPolygonShape(engine) {
    await engine.addShape("polygon", new PolygonDrawer());
}
async function loadTriangleShape(engine) {
    await engine.addShape("triangle", new TriangleDrawer());
}
async function loadPolygonShape(engine) {
    await loadGenericPolygonShape(engine);
    await loadTriangleShape(engine);
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-updater-size/esm/SizeUpdater.js

function SizeUpdater_checkDestroy(particle, value, minValue, maxValue) {
    switch (particle.options.size.animation.destroy) {
        case "max":
            if (value >= maxValue) {
                particle.destroy();
            }
            break;
        case "min":
            if (value <= minValue) {
                particle.destroy();
            }
            break;
    }
}
function updateSize(particle, delta) {
    var _a, _b, _c, _d, _e;
    const sizeVelocity = ((_a = particle.size.velocity) !== null && _a !== void 0 ? _a : 0) * delta.factor, minValue = particle.size.min, maxValue = particle.size.max, decay = (_b = particle.size.decay) !== null && _b !== void 0 ? _b : 1;
    if (particle.destroyed ||
        !particle.size.enable ||
        (((_c = particle.size.maxLoops) !== null && _c !== void 0 ? _c : 0) > 0 && ((_d = particle.size.loops) !== null && _d !== void 0 ? _d : 0) > ((_e = particle.size.maxLoops) !== null && _e !== void 0 ? _e : 0))) {
        return;
    }
    switch (particle.size.status) {
        case "increasing":
            if (particle.size.value >= maxValue) {
                particle.size.status = "decreasing";
                if (!particle.size.loops) {
                    particle.size.loops = 0;
                }
                particle.size.loops++;
            }
            else {
                particle.size.value += sizeVelocity;
            }
            break;
        case "decreasing":
            if (particle.size.value <= minValue) {
                particle.size.status = "increasing";
                if (!particle.size.loops) {
                    particle.size.loops = 0;
                }
                particle.size.loops++;
            }
            else {
                particle.size.value -= sizeVelocity;
            }
    }
    if (particle.size.velocity && decay !== 1) {
        particle.size.velocity *= decay;
    }
    SizeUpdater_checkDestroy(particle, particle.size.value, minValue, maxValue);
    if (!particle.destroyed) {
        particle.size.value = clamp(particle.size.value, minValue, maxValue);
    }
}
class SizeUpdater {
    init(particle) {
        var _a;
        const container = particle.container, sizeOptions = particle.options.size, sizeAnimation = sizeOptions.animation;
        if (sizeAnimation.enable) {
            particle.size.velocity =
                (((_a = particle.retina.sizeAnimationSpeed) !== null && _a !== void 0 ? _a : container.retina.sizeAnimationSpeed) / 100) *
                    container.retina.reduceFactor;
            if (!sizeAnimation.sync) {
                particle.size.velocity *= getRandom();
            }
        }
    }
    isEnabled(particle) {
        var _a, _b, _c, _d;
        return (!particle.destroyed &&
            !particle.spawning &&
            particle.size.enable &&
            (((_a = particle.size.maxLoops) !== null && _a !== void 0 ? _a : 0) <= 0 ||
                (((_b = particle.size.maxLoops) !== null && _b !== void 0 ? _b : 0) > 0 && ((_c = particle.size.loops) !== null && _c !== void 0 ? _c : 0) < ((_d = particle.size.maxLoops) !== null && _d !== void 0 ? _d : 0))));
    }
    reset(particle) {
        particle.size.loops = 0;
    }
    update(particle, delta) {
        if (!this.isEnabled(particle)) {
            return;
        }
        updateSize(particle, delta);
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-updater-size/esm/index.js

async function loadSizeUpdater(engine) {
    await engine.addParticleUpdater("size", () => new SizeUpdater());
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-shape-square/esm/SquareDrawer.js
const fixFactor = Math.sqrt(2);
class SquareDrawer {
    draw(context, particle, radius) {
        context.rect(-radius / fixFactor, -radius / fixFactor, (radius * 2) / fixFactor, (radius * 2) / fixFactor);
    }
    getSidesCount() {
        return 4;
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-shape-square/esm/index.js

async function loadSquareShape(engine) {
    const drawer = new SquareDrawer();
    await engine.addShape(["edge", "square"], drawer);
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-shape-star/esm/StarDrawer.js

class StarDrawer {
    draw(context, particle, radius) {
        var _a;
        const sides = particle.sides, inset = (_a = particle.starInset) !== null && _a !== void 0 ? _a : 2;
        context.moveTo(0, 0 - radius);
        for (let i = 0; i < sides; i++) {
            context.rotate(Math.PI / sides);
            context.lineTo(0, 0 - radius * inset);
            context.rotate(Math.PI / sides);
            context.lineTo(0, 0 - radius);
        }
    }
    getSidesCount(particle) {
        var _a, _b;
        const star = particle.shapeData;
        return Math.round(getRangeValue((_b = (_a = star === null || star === void 0 ? void 0 : star.sides) !== null && _a !== void 0 ? _a : star === null || star === void 0 ? void 0 : star.nb_sides) !== null && _b !== void 0 ? _b : 5));
    }
    particleInit(container, particle) {
        var _a;
        const star = particle.shapeData, inset = getRangeValue((_a = star === null || star === void 0 ? void 0 : star.inset) !== null && _a !== void 0 ? _a : 2);
        particle.starInset = inset;
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-shape-star/esm/index.js

async function loadStarShape(engine) {
    await engine.addShape("star", new StarDrawer());
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-updater-stroke-color/esm/StrokeColorUpdater.js

function StrokeColorUpdater_updateColorValue(delta, value, valueAnimation, max, decrease) {
    var _a, _b;
    const colorValue = value;
    if (!colorValue ||
        !colorValue.enable ||
        (colorValue.loops !== undefined &&
            colorValue.maxLoops !== undefined &&
            colorValue.maxLoops > 0 &&
            colorValue.loops >= colorValue.maxLoops)) {
        return;
    }
    const offset = randomInRange(valueAnimation.offset), velocity = ((_a = value.velocity) !== null && _a !== void 0 ? _a : 0) * delta.factor + offset * 3.6, decay = (_b = value.decay) !== null && _b !== void 0 ? _b : 1;
    if (!decrease || colorValue.status === "increasing") {
        colorValue.value += velocity;
        if (colorValue.value > max) {
            if (!colorValue.loops) {
                colorValue.loops = 0;
            }
            colorValue.loops++;
            if (decrease) {
                colorValue.status = "decreasing";
                colorValue.value -= colorValue.value % max;
            }
        }
    }
    else {
        colorValue.value -= velocity;
        if (colorValue.value < 0) {
            if (!colorValue.loops) {
                colorValue.loops = 0;
            }
            colorValue.loops++;
            colorValue.status = "increasing";
            colorValue.value += colorValue.value;
        }
    }
    if (colorValue.velocity && decay !== 1) {
        colorValue.velocity *= decay;
    }
    if (colorValue.value > max) {
        colorValue.value %= max;
    }
}
function updateStrokeColor(particle, delta) {
    if (!particle.strokeColor || !particle.strokeAnimation) {
        return;
    }
    const h = particle.strokeColor.h;
    if (h) {
        StrokeColorUpdater_updateColorValue(delta, h, particle.strokeAnimation.h, 360, false);
    }
    const s = particle.strokeColor.s;
    if (s) {
        StrokeColorUpdater_updateColorValue(delta, s, particle.strokeAnimation.s, 100, true);
    }
    const l = particle.strokeColor.l;
    if (l) {
        StrokeColorUpdater_updateColorValue(delta, l, particle.strokeAnimation.l, 100, true);
    }
}
class StrokeColorUpdater {
    constructor(container) {
        this.container = container;
    }
    init(particle) {
        var _a, _b, _c;
        const container = this.container;
        const stroke = itemFromSingleOrMultiple(particle.options.stroke, particle.id, particle.options.reduceDuplicates);
        particle.strokeWidth = getRangeValue(stroke.width) * container.retina.pixelRatio;
        particle.strokeOpacity = getRangeValue((_a = stroke.opacity) !== null && _a !== void 0 ? _a : 1);
        particle.strokeAnimation = (_b = stroke.color) === null || _b === void 0 ? void 0 : _b.animation;
        const strokeHslColor = (_c = rangeColorToHsl(stroke.color)) !== null && _c !== void 0 ? _c : particle.getFillColor();
        if (strokeHslColor) {
            particle.strokeColor = getHslAnimationFromHsl(strokeHslColor, particle.strokeAnimation, container.retina.reduceFactor);
        }
    }
    isEnabled(particle) {
        var _a, _b, _c;
        const color = particle.strokeAnimation;
        return (!particle.destroyed &&
            !particle.spawning &&
            !!color &&
            ((((_a = particle.strokeColor) === null || _a === void 0 ? void 0 : _a.h.value) !== undefined && particle.strokeColor.h.enable) ||
                (((_b = particle.strokeColor) === null || _b === void 0 ? void 0 : _b.s.value) !== undefined && particle.strokeColor.s.enable) ||
                (((_c = particle.strokeColor) === null || _c === void 0 ? void 0 : _c.l.value) !== undefined && particle.strokeColor.l.enable)));
    }
    update(particle, delta) {
        if (!this.isEnabled(particle)) {
            return;
        }
        updateStrokeColor(particle, delta);
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-updater-stroke-color/esm/index.js

async function loadStrokeColorUpdater(engine) {
    await engine.addParticleUpdater("strokeColor", (container) => new StrokeColorUpdater(container));
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-shape-text/esm/TextDrawer.js

const validTypes = ["text", "character", "char"];
class TextDrawer {
    draw(context, particle, radius, opacity) {
        var _a, _b, _c;
        const character = particle.shapeData;
        if (character === undefined) {
            return;
        }
        const textData = character.value;
        if (textData === undefined) {
            return;
        }
        const textParticle = particle;
        if (textParticle.text === undefined) {
            textParticle.text = itemFromSingleOrMultiple(textData, particle.randomIndexData);
        }
        const text = textParticle.text, style = (_a = character.style) !== null && _a !== void 0 ? _a : "", weight = (_b = character.weight) !== null && _b !== void 0 ? _b : "400", size = Math.round(radius) * 2, font = (_c = character.font) !== null && _c !== void 0 ? _c : "Verdana", fill = particle.fill, offsetX = (text.length * radius) / 2;
        context.font = `${style} ${weight} ${size}px "${font}"`;
        const pos = {
            x: -offsetX,
            y: radius / 2,
        };
        context.globalAlpha = opacity;
        if (fill) {
            context.fillText(text, pos.x, pos.y);
        }
        else {
            context.strokeText(text, pos.x, pos.y);
        }
        context.globalAlpha = 1;
    }
    getSidesCount() {
        return 12;
    }
    async init(container) {
        const options = container.actualOptions;
        if (validTypes.find((t) => isInArray(t, options.particles.shape.type))) {
            const shapeOptions = validTypes
                .map((t) => options.particles.shape.options[t])
                .find((t) => !!t), promises = [];
            executeOnSingleOrMultiple(shapeOptions, (shape) => {
                promises.push(loadFont(shape.font, shape.weight));
            });
            await Promise.all(promises);
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-shape-text/esm/index.js

async function loadTextShape(engine) {
    await engine.addShape(validTypes, new TextDrawer());
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-slim/esm/index.js






























async function loadSlim(engine) {
    await loadBaseMover(engine);
    await loadParallaxMover(engine);
    await loadExternalAttractInteraction(engine);
    await loadExternalBounceInteraction(engine);
    await loadExternalBubbleInteraction(engine);
    await loadExternalConnectInteraction(engine);
    await loadExternalGrabInteraction(engine);
    await loadExternalPauseInteraction(engine);
    await loadExternalPushInteraction(engine);
    await loadExternalRemoveInteraction(engine);
    await loadExternalRepulseInteraction(engine);
    await loadExternalSlowInteraction(engine);
    await loadParticlesAttractInteraction(engine);
    await loadParticlesCollisionsInteraction(engine);
    await loadParticlesLinksInteraction(engine);
    await loadCircleShape(engine);
    await loadImageShape(engine);
    await loadLineShape(engine);
    await loadPolygonShape(engine);
    await loadSquareShape(engine);
    await loadStarShape(engine);
    await loadTextShape(engine);
    await loadLifeUpdater(engine);
    await loadOpacityUpdater(engine);
    await loadSizeUpdater(engine);
    await loadAngleUpdater(engine);
    await loadColorUpdater(engine);
    await loadStrokeColorUpdater(engine);
    await loadOutModesUpdater(engine);
    await initPjs(engine);
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-updater-tilt/esm/Options/Classes/TiltAnimation.js

class TiltAnimation {
    constructor() {
        this.enable = false;
        this.speed = 0;
        this.decay = 0;
        this.sync = false;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.speed !== undefined) {
            this.speed = setRangeValue(data.speed);
        }
        if (data.decay !== undefined) {
            this.decay = setRangeValue(data.decay);
        }
        if (data.sync !== undefined) {
            this.sync = data.sync;
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-updater-tilt/esm/Options/Classes/Tilt.js


class Tilt extends ValueWithRandom {
    constructor() {
        super();
        this.animation = new TiltAnimation();
        this.direction = "clockwise";
        this.enable = false;
        this.value = 0;
    }
    load(data) {
        super.load(data);
        if (!data) {
            return;
        }
        this.animation.load(data.animation);
        if (data.direction !== undefined) {
            this.direction = data.direction;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-updater-tilt/esm/TiltUpdater.js


function updateTilt(particle, delta) {
    var _a, _b;
    if (!particle.tilt || !particle.options.tilt) {
        return;
    }
    const tilt = particle.options.tilt, tiltAnimation = tilt.animation, speed = ((_a = particle.tilt.velocity) !== null && _a !== void 0 ? _a : 0) * delta.factor, max = 2 * Math.PI, decay = (_b = particle.tilt.decay) !== null && _b !== void 0 ? _b : 1;
    if (!tiltAnimation.enable) {
        return;
    }
    switch (particle.tilt.status) {
        case "increasing":
            particle.tilt.value += speed;
            if (particle.tilt.value > max) {
                particle.tilt.value -= max;
            }
            break;
        case "decreasing":
        default:
            particle.tilt.value -= speed;
            if (particle.tilt.value < 0) {
                particle.tilt.value += max;
            }
            break;
    }
    if (particle.tilt.velocity && decay !== 1) {
        particle.tilt.velocity *= decay;
    }
}
class TiltUpdater {
    constructor(container) {
        this.container = container;
    }
    getTransformValues(particle) {
        var _a;
        const tilt = ((_a = particle.tilt) === null || _a === void 0 ? void 0 : _a.enable) && particle.tilt;
        return {
            b: tilt ? Math.cos(tilt.value) * tilt.cosDirection : undefined,
            c: tilt ? Math.sin(tilt.value) * tilt.sinDirection : undefined,
        };
    }
    init(particle) {
        var _a;
        const tiltOptions = particle.options.tilt;
        if (!tiltOptions) {
            return;
        }
        particle.tilt = {
            enable: tiltOptions.enable,
            value: (getRangeValue(tiltOptions.value) * Math.PI) / 180,
            sinDirection: getRandom() >= 0.5 ? 1 : -1,
            cosDirection: getRandom() >= 0.5 ? 1 : -1,
        };
        let tiltDirection = tiltOptions.direction;
        if (tiltDirection === "random") {
            const index = Math.floor(getRandom() * 2);
            tiltDirection = index > 0 ? "counter-clockwise" : "clockwise";
        }
        switch (tiltDirection) {
            case "counter-clockwise":
            case "counterClockwise":
                particle.tilt.status = "decreasing";
                break;
            case "clockwise":
                particle.tilt.status = "increasing";
                break;
        }
        const tiltAnimation = (_a = particle.options.tilt) === null || _a === void 0 ? void 0 : _a.animation;
        if (tiltAnimation === null || tiltAnimation === void 0 ? void 0 : tiltAnimation.enable) {
            particle.tilt.decay = 1 - getRangeValue(tiltAnimation.decay);
            particle.tilt.velocity = (getRangeValue(tiltAnimation.speed) / 360) * this.container.retina.reduceFactor;
            if (!tiltAnimation.sync) {
                particle.tilt.velocity *= getRandom();
            }
        }
    }
    isEnabled(particle) {
        var _a;
        const tiltAnimation = (_a = particle.options.tilt) === null || _a === void 0 ? void 0 : _a.animation;
        return !particle.destroyed && !particle.spawning && !!(tiltAnimation === null || tiltAnimation === void 0 ? void 0 : tiltAnimation.enable);
    }
    loadOptions(options, ...sources) {
        if (!options.tilt) {
            options.tilt = new Tilt();
        }
        for (const source of sources) {
            options.tilt.load(source === null || source === void 0 ? void 0 : source.tilt);
        }
    }
    update(particle, delta) {
        if (!this.isEnabled(particle)) {
            return;
        }
        updateTilt(particle, delta);
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-updater-tilt/esm/index.js

async function loadTiltUpdater(engine) {
    await engine.addParticleUpdater("tilt", (container) => new TiltUpdater(container));
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-updater-twinkle/esm/Options/Classes/TwinkleValues.js

class TwinkleValues {
    constructor() {
        this.enable = false;
        this.frequency = 0.05;
        this.opacity = 1;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.color !== undefined) {
            this.color = OptionsColor.create(this.color, data.color);
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.frequency !== undefined) {
            this.frequency = data.frequency;
        }
        if (data.opacity !== undefined) {
            this.opacity = setRangeValue(data.opacity);
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-updater-twinkle/esm/Options/Classes/Twinkle.js

class Twinkle {
    constructor() {
        this.lines = new TwinkleValues();
        this.particles = new TwinkleValues();
    }
    load(data) {
        if (!data) {
            return;
        }
        this.lines.load(data.lines);
        this.particles.load(data.particles);
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-updater-twinkle/esm/TwinkleUpdater.js


class TwinkleUpdater {
    getColorStyles(particle, context, radius, opacity) {
        const pOptions = particle.options, twinkleOptions = pOptions.twinkle;
        if (!twinkleOptions) {
            return {};
        }
        const twinkle = twinkleOptions.particles, twinkling = twinkle.enable && getRandom() < twinkle.frequency, zIndexOptions = particle.options.zIndex, zOpacityFactor = (1 - particle.zIndexFactor) ** zIndexOptions.opacityRate, twinklingOpacity = twinkling ? getRangeValue(twinkle.opacity) * zOpacityFactor : opacity, twinkleRgb = rangeColorToHsl(twinkle.color), twinkleStyle = twinkleRgb ? getStyleFromHsl(twinkleRgb, twinklingOpacity) : undefined, res = {}, needsTwinkle = twinkling && twinkleStyle;
        res.fill = needsTwinkle ? twinkleStyle : undefined;
        res.stroke = needsTwinkle ? twinkleStyle : undefined;
        return res;
    }
    init() {
    }
    isEnabled(particle) {
        const pOptions = particle.options, twinkleOptions = pOptions.twinkle;
        if (!twinkleOptions) {
            return false;
        }
        return twinkleOptions.particles.enable;
    }
    loadOptions(options, ...sources) {
        if (!options.twinkle) {
            options.twinkle = new Twinkle();
        }
        for (const source of sources) {
            options.twinkle.load(source === null || source === void 0 ? void 0 : source.twinkle);
        }
    }
    update() {
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-updater-twinkle/esm/index.js

async function loadTwinkleUpdater(engine) {
    await engine.addParticleUpdater("twinkle", () => new TwinkleUpdater());
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-updater-wobble/esm/Options/Classes/WobbleSpeed.js

class WobbleSpeed {
    constructor() {
        this.angle = 50;
        this.move = 10;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.angle !== undefined) {
            this.angle = setRangeValue(data.angle);
        }
        if (data.move !== undefined) {
            this.move = setRangeValue(data.move);
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-updater-wobble/esm/Options/Classes/Wobble.js


class Wobble {
    constructor() {
        this.distance = 5;
        this.enable = false;
        this.speed = new WobbleSpeed();
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.distance !== undefined) {
            this.distance = setRangeValue(data.distance);
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.speed !== undefined) {
            if (typeof data.speed === "number") {
                this.speed.load({ angle: data.speed });
            }
            else {
                const rangeSpeed = data.speed;
                if (rangeSpeed.min !== undefined) {
                    this.speed.load({ angle: rangeSpeed });
                }
                else {
                    this.speed.load(data.speed);
                }
            }
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-updater-wobble/esm/WobbleUpdater.js


function updateWobble(particle, delta) {
    var _a;
    const wobble = particle.options.wobble;
    if (!(wobble === null || wobble === void 0 ? void 0 : wobble.enable) || !particle.wobble) {
        return;
    }
    const angleSpeed = particle.wobble.angleSpeed * delta.factor, moveSpeed = particle.wobble.moveSpeed * delta.factor, distance = (moveSpeed * (((_a = particle.retina.wobbleDistance) !== null && _a !== void 0 ? _a : 0) * delta.factor)) / (1000 / 60), max = 2 * Math.PI;
    particle.wobble.angle += angleSpeed;
    if (particle.wobble.angle > max) {
        particle.wobble.angle -= max;
    }
    particle.position.x += distance * Math.cos(particle.wobble.angle);
    particle.position.y += distance * Math.abs(Math.sin(particle.wobble.angle));
}
class WobbleUpdater {
    constructor(container) {
        this.container = container;
    }
    init(particle) {
        var _a;
        const wobbleOpt = particle.options.wobble;
        if (wobbleOpt === null || wobbleOpt === void 0 ? void 0 : wobbleOpt.enable) {
            particle.wobble = {
                angle: getRandom() * Math.PI * 2,
                angleSpeed: getRangeValue(wobbleOpt.speed.angle) / 360,
                moveSpeed: getRangeValue(wobbleOpt.speed.move) / 10,
            };
        }
        else {
            particle.wobble = {
                angle: 0,
                angleSpeed: 0,
                moveSpeed: 0,
            };
        }
        particle.retina.wobbleDistance = getRangeValue((_a = wobbleOpt === null || wobbleOpt === void 0 ? void 0 : wobbleOpt.distance) !== null && _a !== void 0 ? _a : 0) * this.container.retina.pixelRatio;
    }
    isEnabled(particle) {
        var _a;
        return !particle.destroyed && !particle.spawning && !!((_a = particle.options.wobble) === null || _a === void 0 ? void 0 : _a.enable);
    }
    loadOptions(options, ...sources) {
        if (!options.wobble) {
            options.wobble = new Wobble();
        }
        for (const source of sources) {
            options.wobble.load(source === null || source === void 0 ? void 0 : source.wobble);
        }
    }
    update(particle, delta) {
        if (!this.isEnabled(particle)) {
            return;
        }
        updateWobble(particle, delta);
    }
}

;// CONCATENATED MODULE: ./node_modules/tsparticles-updater-wobble/esm/index.js

async function loadWobbleUpdater(engine) {
    await engine.addParticleUpdater("wobble", (container) => new WobbleUpdater(container));
}

;// CONCATENATED MODULE: ./node_modules/tsparticles/esm/index.js









async function loadFull(engine) {
    await loadSlim(engine);
    await loadDestroyUpdater(engine);
    await loadRollUpdater(engine);
    await loadTiltUpdater(engine);
    await loadTwinkleUpdater(engine);
    await loadWobbleUpdater(engine);
    await loadExternalTrailInteraction(engine);
    await loadAbsorbersPlugin(engine);
    await loadEmittersPlugin(engine);
}

;// CONCATENATED MODULE: ./src/components/particles/particle.tsx
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





var particle_Particle = function Particle() {
  var particlesInit = (0,react.useCallback)( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(engine) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return loadFull(engine);
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }(), []);
  return /*#__PURE__*/react.createElement(esm, {
    className: "particles",
    id: "tsparticles",
    init: particlesInit,
    options: {
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: "push"
          },
          onHover: {
            enable: true,
            mode: "repulse"
          },
          resize: true
        },
        modes: {
          push: {
            quantity: 4
          },
          repulse: {
            distance: 200,
            duration: 0.4
          }
        }
      },
      particles: {
        color: {
          value: "#ffffff"
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1
        },
        collisions: {
          enable: true
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce"
          },
          random: false,
          speed: 3,
          straight: false
        },
        number: {
          density: {
            enable: true,
            area: 500
          },
          value: 40
        },
        opacity: {
          value: 0.5
        },
        shape: {
          type: "circle"
        },
        size: {
          value: {
            min: 1,
            max: 5
          }
        }
      },
      detectRetina: true
    }
  });
};
/* harmony default export */ var particle = (particle_Particle);
;// CONCATENATED MODULE: ./src/components/signin/signin.tsx


var Signin = function Signin(props) {
  return /*#__PURE__*/react.createElement("article", {
    className: "br3 ba b--black-10 mv6 shadow-5 w-100 w-50-m w-25-l mw10  center"
  }, /*#__PURE__*/react.createElement("main", {
    className: "pa4 black-80"
  }, /*#__PURE__*/react.createElement("form", {
    className: "measure"
  }, /*#__PURE__*/react.createElement("fieldset", {
    id: "sign_up",
    className: "ba b--transparent ph0 mh0"
  }, /*#__PURE__*/react.createElement("legend", {
    className: "f2 fw6 ph0 mh0"
  }, "Sign In"), /*#__PURE__*/react.createElement("div", {
    className: "mt3"
  }, /*#__PURE__*/react.createElement("label", {
    className: "db fw6 lh-copy f6",
    htmlFor: "email-address"
  }, "Email"), /*#__PURE__*/react.createElement("input", {
    className: "pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",
    type: "email",
    name: "email-address",
    id: "email-address"
  })), /*#__PURE__*/react.createElement("div", {
    className: "mv3"
  }, /*#__PURE__*/react.createElement("label", {
    className: "db fw6 lh-copy f6",
    htmlFor: "password"
  }, "Password"), /*#__PURE__*/react.createElement("input", {
    className: "b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",
    type: "password",
    name: "password",
    id: "password"
  }))), /*#__PURE__*/react.createElement("div", {
    className: ""
  }, /*#__PURE__*/react.createElement(Link, {
    to: "/login"
  }, /*#__PURE__*/react.createElement("input", {
    className: "b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",
    type: "submit",
    value: "Sign in"
  }))), /*#__PURE__*/react.createElement("div", {
    className: "lh-copy mt3"
  }, /*#__PURE__*/react.createElement(Link, {
    to: "/register"
  }, /*#__PURE__*/react.createElement("p", {
    className: "f4 link dim black db pointer"
  }, "Register"))))));
};
/* harmony default export */ var signin = (Signin);
;// CONCATENATED MODULE: ./src/components/register/register.tsx


var Register = function Register() {
  return /*#__PURE__*/react.createElement("article", {
    className: "br3 ba b--black-10 mv6 shadow-5 w-100 w-50-m w-25-l mw10  center"
  }, /*#__PURE__*/react.createElement("main", {
    className: "pa4 black-80"
  }, /*#__PURE__*/react.createElement("form", {
    className: "measure"
  }, /*#__PURE__*/react.createElement("fieldset", {
    id: "sign_up",
    className: "ba b--transparent ph0 mh0"
  }, /*#__PURE__*/react.createElement("legend", {
    className: "f2 fw6 ph0 mh0"
  }, "Registration"), /*#__PURE__*/react.createElement("div", {
    className: "mt3"
  }, /*#__PURE__*/react.createElement("label", {
    className: "db fw6 lh-copy f6",
    htmlFor: "name"
  }, "Name"), /*#__PURE__*/react.createElement("input", {
    className: "pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",
    type: "text",
    name: "name",
    id: "name"
  })), /*#__PURE__*/react.createElement("div", {
    className: "mt3"
  }, /*#__PURE__*/react.createElement("label", {
    className: "db fw6 lh-copy f6",
    htmlFor: "email-address"
  }, "Email"), /*#__PURE__*/react.createElement("input", {
    className: "pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",
    type: "email",
    name: "email-address",
    id: "email-address"
  })), /*#__PURE__*/react.createElement("div", {
    className: "mv3"
  }, /*#__PURE__*/react.createElement("label", {
    className: "db fw6 lh-copy f6",
    htmlFor: "password"
  }, "Password"), /*#__PURE__*/react.createElement("input", {
    className: "b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",
    type: "password",
    name: "password",
    id: "password"
  }))), /*#__PURE__*/react.createElement("div", {
    className: ""
  }, /*#__PURE__*/react.createElement(Link, {
    to: "/login"
  }, /*#__PURE__*/react.createElement("input", {
    className: "b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",
    type: "submit",
    value: "Register"
  }))))));
};
/* harmony default export */ var register = (Register);
;// CONCATENATED MODULE: ./src/components/navigation/navigation.tsx


var Navigation = function Navigation() {
  return /*#__PURE__*/react.createElement("nav", {
    style: {
      display: "flex",
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/react.createElement(Link, {
    to: "/"
  }, /*#__PURE__*/react.createElement("p", {
    className: "f3 link dim black underline pa3 pointer"
  }, "Sign Out")));
};
/* harmony default export */ var navigation = (Navigation);
;// CONCATENATED MODULE: ./src/components/faceRecognition/faceRecognition.tsx



var FaceRecognition = function FaceRecognition(_ref) {
  var imageUrl = _ref.imageUrl,
    box = _ref.box;
  return /*#__PURE__*/react.createElement("div", {
    className: "center ma2"
  }, /*#__PURE__*/react.createElement("div", {
    className: "absolute mt2"
  }, /*#__PURE__*/react.createElement("img", {
    className: "imageInput",
    src: imageUrl,
    alt: ""
  }), /*#__PURE__*/react.createElement("div", {
    className: "bounding-box",
    style: {
      top: box === null || box === void 0 ? void 0 : box.topRow,
      right: box === null || box === void 0 ? void 0 : box.rightCol,
      bottom: box === null || box === void 0 ? void 0 : box.bottomRow,
      left: box === null || box === void 0 ? void 0 : box.leftCol
    }
  })));
};
/* harmony default export */ var faceRecognition = (FaceRecognition);
;// CONCATENATED MODULE: ./node_modules/react-parallax-tilt/dist/index.esm.js
function i(t,e,i,n){return new(i||(i=Promise))((function(s,r){function l(t){try{o(n.next(t))}catch(t){r(t)}}function a(t){try{o(n.throw(t))}catch(t){r(t)}}function o(t){var e;t.done?s(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(l,a)}o((n=n.apply(t,e||[])).next())}))}const n=(t,e,i,n)=>{t.style.transition=`${e} ${i}ms ${n}`},s=(t,e,i)=>Math.min(Math.max(t,e),i);class r{constructor(t,e){this.glareAngle=0,this.glareOpacity=0,this.calculateGlareSize=t=>{const{width:e,height:i}=t,n=Math.sqrt(Math.pow(e,2)+Math.pow(i,2));return{width:n,height:n}},this.setSize=t=>{const e=this.calculateGlareSize(t);this.glareEl.style.width=`${e.width}px`,this.glareEl.style.height=`${e.height}px`},this.update=(t,e,i,n)=>{this.updateAngle(t,e.glareReverse),this.updateOpacity(t,e,i,n)},this.updateAngle=(t,e)=>{const{xPercentage:i,yPercentage:n}=t,s=180/Math.PI,r=i?Math.atan2(n,-i)*s:0;this.glareAngle=r-(e?180:0)},this.updateOpacity=(t,e,i,n)=>{const{xPercentage:r,yPercentage:l}=t,{glarePosition:a,glareReverse:o,glareMaxOpacity:h}=e,p=i?-1:1,c=n?-1:1,g=o?-1:1;let d=0;switch(a){case"top":d=-r*p*g;break;case"right":d=l*c*g;break;case"bottom":case void 0:d=r*p*g;break;case"left":d=-l*c*g;break;case"all":d=Math.hypot(r,l)}const u=s(d,0,100);this.glareOpacity=u*h/100},this.render=t=>{const{glareColor:e}=t;this.glareEl.style.transform=`rotate(${this.glareAngle}deg) translate(-50%, -50%)`,this.glareEl.style.opacity=this.glareOpacity.toString(),this.glareEl.style.background=`linear-gradient(0deg, rgba(255,255,255,0) 0%, ${e} 100%)`},this.glareWrapperEl=document.createElement("div"),this.glareEl=document.createElement("div"),this.glareWrapperEl.appendChild(this.glareEl),this.glareWrapperEl.className="glare-wrapper",this.glareEl.className="glare";const i={position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflow:"hidden",borderRadius:e,WebkitMaskImage:"-webkit-radial-gradient(white, black)",pointerEvents:"none"},n=this.calculateGlareSize(t),r={position:"absolute",top:"50%",left:"50%",transformOrigin:"0% 0%",pointerEvents:"none",width:`${n.width}px`,height:`${n.height}px`};Object.assign(this.glareWrapperEl.style,i),Object.assign(this.glareEl.style,r)}}class l{constructor(){this.glareAngle=0,this.glareOpacity=0,this.tiltAngleX=0,this.tiltAngleY=0,this.tiltAngleXPercentage=0,this.tiltAngleYPercentage=0,this.update=(t,e)=>{this.updateTilt(t,e),this.updateTiltManualInput(t,e),this.updateTiltReverse(e),this.updateTiltLimits(e)},this.updateTilt=(t,e)=>{const{xPercentage:i,yPercentage:n}=t,{tiltMaxAngleX:s,tiltMaxAngleY:r}=e;this.tiltAngleX=i*s/100,this.tiltAngleY=n*r/100*-1},this.updateTiltManualInput=(t,e)=>{const{tiltAngleXManual:i,tiltAngleYManual:n,tiltMaxAngleX:s,tiltMaxAngleY:r}=e;(null!==i||null!==n)&&(this.tiltAngleX=null!==i?i:0,this.tiltAngleY=null!==n?n:0,t.xPercentage=100*this.tiltAngleX/s,t.yPercentage=100*this.tiltAngleY/r)},this.updateTiltReverse=t=>{const e=t.tiltReverse?-1:1;this.tiltAngleX=e*this.tiltAngleX,this.tiltAngleY=e*this.tiltAngleY},this.updateTiltLimits=t=>{const{tiltAxis:e}=t;this.tiltAngleX=s(this.tiltAngleX,-90,90),this.tiltAngleY=s(this.tiltAngleY,-90,90);e&&(this.tiltAngleX="x"===e?this.tiltAngleX:0,this.tiltAngleY="y"===e?this.tiltAngleY:0)},this.updateTiltAnglesPercentage=t=>{const{tiltMaxAngleX:e,tiltMaxAngleY:i}=t;this.tiltAngleXPercentage=this.tiltAngleX/e*100,this.tiltAngleYPercentage=this.tiltAngleY/i*100},this.render=t=>{t.style.transform+=`rotateX(${this.tiltAngleX}deg) rotateY(${this.tiltAngleY}deg) `}}}const a=Object.assign(Object.assign({scale:1,perspective:1e3,flipVertically:!1,flipHorizontally:!1,reset:!0,transitionEasing:"cubic-bezier(.03,.98,.52,.99)",transitionSpeed:400,trackOnWindow:!1,gyroscope:!1},{tiltEnable:!0,tiltReverse:!1,tiltAngleXInitial:0,tiltAngleYInitial:0,tiltMaxAngleX:20,tiltMaxAngleY:20,tiltAxis:void 0,tiltAngleXManual:null,tiltAngleYManual:null}),{glareEnable:!1,glareMaxOpacity:.7,glareColor:"#ffffff",glarePosition:"bottom",glareReverse:!1,glareBorderRadius:"0"});class o extends react.PureComponent{constructor(){super(...arguments),this.wrapperEl={node:null,size:{width:0,height:0,left:0,top:0},clientPosition:{x:null,y:null,xPercentage:0,yPercentage:0},updateAnimationId:null,scale:1},this.tilt=null,this.glare=null,this.addDeviceOrientationEventListener=()=>i(this,void 0,void 0,(function*(){if(!window.DeviceOrientationEvent&&"development"==="production"){}const t=DeviceOrientationEvent.requestPermission;if("function"==typeof t){"granted"===(yield t())&&window.addEventListener("deviceorientation",this.onMove)}else window.addEventListener("deviceorientation",this.onMove)})),this.setSize=()=>{this.setWrapperElSize(),this.glare&&this.glare.setSize(this.wrapperEl.size)},this.mainLoop=t=>{null!==this.wrapperEl.updateAnimationId&&cancelAnimationFrame(this.wrapperEl.updateAnimationId),this.processInput(t),this.update(t.type),this.wrapperEl.updateAnimationId=requestAnimationFrame(this.renderFrame)},this.onEnter=t=>{const{onEnter:e}=this.props;this.setSize(),this.wrapperEl.node.style.willChange="transform",this.setTransitions(),e&&e(t.type)},this.onMove=t=>{this.mainLoop(t),this.emitOnMove(t)},this.onLeave=t=>{const{onLeave:e}=this.props;if(this.setTransitions(),e&&e(t.type),this.props.reset){const t=new CustomEvent("autoreset");this.onMove(t)}},this.processInput=t=>{const{scale:e}=this.props;switch(t.type){case"mousemove":this.wrapperEl.clientPosition.x=t.pageX,this.wrapperEl.clientPosition.y=t.pageY,this.wrapperEl.scale=e;break;case"touchmove":this.wrapperEl.clientPosition.x=t.touches[0].pageX,this.wrapperEl.clientPosition.y=t.touches[0].pageY,this.wrapperEl.scale=e;break;case"deviceorientation":this.processInputDeviceOrientation(t),this.wrapperEl.scale=e;break;case"autoreset":const{tiltAngleXInitial:i,tiltAngleYInitial:n,tiltMaxAngleX:r,tiltMaxAngleY:l}=this.props,a=n/l*100;this.wrapperEl.clientPosition.xPercentage=s(i/r*100,-100,100),this.wrapperEl.clientPosition.yPercentage=s(a,-100,100),this.wrapperEl.scale=1}},this.processInputDeviceOrientation=t=>{if(!t.gamma||!t.beta||!this.props.gyroscope)return;const{tiltMaxAngleX:e,tiltMaxAngleY:i}=this.props,n=t.gamma;this.wrapperEl.clientPosition.xPercentage=t.beta/e*100,this.wrapperEl.clientPosition.yPercentage=n/i*100,this.wrapperEl.clientPosition.xPercentage=s(this.wrapperEl.clientPosition.xPercentage,-100,100),this.wrapperEl.clientPosition.yPercentage=s(this.wrapperEl.clientPosition.yPercentage,-100,100)},this.update=t=>{const{tiltEnable:e,flipVertically:i,flipHorizontally:n}=this.props;"autoreset"!==t&&"deviceorientation"!==t&&"propChange"!==t&&this.updateClientInput(),e&&this.tilt.update(this.wrapperEl.clientPosition,this.props),this.updateFlip(),this.tilt.updateTiltAnglesPercentage(this.props),this.glare&&this.glare.update(this.wrapperEl.clientPosition,this.props,i,n)},this.updateClientInput=()=>{const{trackOnWindow:t}=this.props;let e,i;if(t){const{x:t,y:n}=this.wrapperEl.clientPosition;e=n/window.innerHeight*200-100,i=t/window.innerWidth*200-100}else{const{size:{width:t,height:n,left:s,top:r},clientPosition:{x:l,y:a}}=this.wrapperEl;e=(a-r)/n*200-100,i=(l-s)/t*200-100}this.wrapperEl.clientPosition.xPercentage=s(e,-100,100),this.wrapperEl.clientPosition.yPercentage=s(i,-100,100)},this.updateFlip=()=>{const{flipVertically:t,flipHorizontally:e}=this.props;t&&(this.tilt.tiltAngleX+=180,this.tilt.tiltAngleY*=-1),e&&(this.tilt.tiltAngleY+=180)},this.renderFrame=()=>{this.resetWrapperElTransform(),this.renderPerspective(),this.tilt.render(this.wrapperEl.node),this.renderScale(),this.glare&&this.glare.render(this.props)}}componentDidMount(){if(this.tilt=new l,this.initGlare(),this.addEventListeners(),"undefined"==typeof CustomEvent)return;const t=new CustomEvent("autoreset");this.mainLoop(t);const e=new CustomEvent("initial");this.emitOnMove(e)}componentWillUnmount(){null!==this.wrapperEl.updateAnimationId&&cancelAnimationFrame(this.wrapperEl.updateAnimationId),this.removeEventListeners()}componentDidUpdate(){const t=new CustomEvent("propChange");this.mainLoop(t),this.emitOnMove(t)}addEventListeners(){const{trackOnWindow:t,gyroscope:e}=this.props;window.addEventListener("resize",this.setSize),t&&(window.addEventListener("mouseenter",this.onEnter),window.addEventListener("mousemove",this.onMove),window.addEventListener("mouseout",this.onLeave),window.addEventListener("touchstart",this.onEnter),window.addEventListener("touchmove",this.onMove),window.addEventListener("touchend",this.onLeave)),e&&this.addDeviceOrientationEventListener()}removeEventListeners(){const{trackOnWindow:t,gyroscope:e}=this.props;window.removeEventListener("resize",this.setSize),t&&(window.removeEventListener("mouseenter",this.onEnter),window.removeEventListener("mousemove",this.onMove),window.removeEventListener("mouseout",this.onLeave),window.removeEventListener("touchstart",this.onEnter),window.removeEventListener("touchmove",this.onMove),window.removeEventListener("touchend",this.onLeave)),e&&window.DeviceOrientationEvent&&window.removeEventListener("deviceorientation",this.onMove)}setWrapperElSize(){const t=this.wrapperEl.node.getBoundingClientRect();this.wrapperEl.size.width=this.wrapperEl.node.offsetWidth,this.wrapperEl.size.height=this.wrapperEl.node.offsetHeight,this.wrapperEl.size.left=t.left+window.scrollX,this.wrapperEl.size.top=t.top+window.scrollY}initGlare(){const{glareEnable:t,glareBorderRadius:e}=this.props;t&&(this.glare=new r(this.wrapperEl.size,e),this.wrapperEl.node.appendChild(this.glare.glareWrapperEl))}emitOnMove(t){const{onMove:e}=this.props;if(!e)return;let i=0,n=0;this.glare&&(i=this.glare.glareAngle,n=this.glare.glareOpacity),e({tiltAngleX:this.tilt.tiltAngleX,tiltAngleY:this.tilt.tiltAngleY,tiltAngleXPercentage:this.tilt.tiltAngleXPercentage,tiltAngleYPercentage:this.tilt.tiltAngleYPercentage,glareAngle:i,glareOpacity:n,eventType:t.type})}resetWrapperElTransform(){this.wrapperEl.node.style.transform=""}renderPerspective(){const{perspective:t}=this.props;this.wrapperEl.node.style.transform+=`perspective(${t}px) `}renderScale(){const{scale:t}=this.wrapperEl;this.wrapperEl.node.style.transform+=`scale3d(${t},${t},${t})`}setTransitions(){const{transitionSpeed:t,transitionEasing:e}=this.props;n(this.wrapperEl.node,"all",t,e),this.glare&&n(this.glare.glareEl,"opacity",t,e)}render(){const{children:e,className:i,style:n}=this.props;return react.createElement("div",{ref:t=>this.wrapperEl.node=t,onMouseEnter:this.onEnter,onMouseMove:this.onMove,onMouseLeave:this.onLeave,onTouchStart:this.onEnter,onTouchMove:this.onMove,onTouchEnd:this.onLeave,className:i,style:n},e)}}o.defaultProps=a;

;// CONCATENATED MODULE: ./src/components/logo/brain.png
var brain_namespaceObject = __webpack_require__.p + "images\\brain.932a27d836dd952d92b1.png";
;// CONCATENATED MODULE: ./src/components/logo/logo.tsx




var Logo = function Logo() {
  return /*#__PURE__*/react.createElement("div", {
    className: "content"
  }, /*#__PURE__*/react.createElement(o, {
    className: "Tilt br2 shadow-2",
    style: {
      height: "150px",
      width: "150px"
    }
  }, /*#__PURE__*/react.createElement("div", {
    className: "Tilt-inner pa3"
  }, /*#__PURE__*/react.createElement("img", {
    style: {
      paddingTop: "8px"
    },
    src: brain_namespaceObject,
    alt: "logo"
  }))));
};
/* harmony default export */ var logo = (Logo);
;// CONCATENATED MODULE: ./src/components/imageLinkForm/imageLinkForm.tsx


var ImageLinkForm = function ImageLinkForm(_ref) {
  var onInputChange = _ref.onInputChange,
    onButtonSubmit = _ref.onButtonSubmit;
  return /*#__PURE__*/react.createElement("div", {
    className: "content"
  }, /*#__PURE__*/react.createElement("p", {
    className: "f3"
  }, "Please insert a link and press detect"), /*#__PURE__*/react.createElement("p", {
    className: "f4"
  }, "This Brains will recognize face in the pictures"), /*#__PURE__*/react.createElement("div", {
    className: "center"
  }, /*#__PURE__*/react.createElement("div", {
    className: "form center pa4 br3 shadow-5"
  }, /*#__PURE__*/react.createElement("input", {
    className: "f4 pa2 w-70 center",
    type: "text",
    onChange: onInputChange
  }), /*#__PURE__*/react.createElement("button", {
    className: "w-30 grow f4 link ph3 pv2 dib white bg-light-green",
    onClick: onButtonSubmit
  }, "Detect"))));
};
/* harmony default export */ var imageLinkForm = (ImageLinkForm);
;// CONCATENATED MODULE: ./src/components/clarifai/faceLocation.tsx

var calculateFaceLocation = function calculateFaceLocation(data) {
  var clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
  var image = document.querySelector(".imageInput");
  var width = image.width;
  var height = image.height;
  return {
    leftCol: clarifaiFace.left_col * width,
    topRow: clarifaiFace.top_row * height,
    rightCol: width - clarifaiFace.right_col * width,
    bottomRow: height - clarifaiFace.bottom_row * height
  };
};
/* harmony default export */ var faceLocation = (calculateFaceLocation);
;// CONCATENATED MODULE: ./src/components/clarifai/clarifai.tsx
function clarifai_typeof(obj) { "@babel/helpers - typeof"; return clarifai_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, clarifai_typeof(obj); }
function clarifai_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ clarifai_regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == clarifai_typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function clarifai_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function clarifai_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { clarifai_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { clarifai_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var Clarifai = /*#__PURE__*/function () {
  var _ref = clarifai_asyncToGenerator( /*#__PURE__*/clarifai_regeneratorRuntime().mark(function _callee(imageUrl) {
    var USER_ID, PAT, APP_ID, MODEL_ID, MODEL_VERSION_ID, raw, requestOptions, res, result;
    return clarifai_regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          USER_ID = "lkxbxjg5gug3";
          PAT = "ed7eaddf601d41bd86b51e68bfd5a9cf";
          APP_ID = "my-first-application";
          MODEL_ID = "face-detection";
          MODEL_VERSION_ID = "6dc7e46bc9124c5c8824be4822abe105";
          raw = JSON.stringify({
            user_app_id: {
              user_id: USER_ID,
              app_id: APP_ID
            },
            inputs: [{
              data: {
                image: {
                  url: imageUrl
                }
              }
            }]
          });
          requestOptions = {
            method: "POST",
            headers: {
              Accept: "application/json",
              Authorization: "Key " + PAT
            },
            body: raw
          };
          _context.next = 9;
          return fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/versions/" + MODEL_VERSION_ID + "/outputs", requestOptions);
        case 9:
          res = _context.sent;
          if (res.ok) {
            _context.next = 12;
            break;
          }
          return _context.abrupt("return", null);
        case 12:
          _context.next = 14;
          return res.json();
        case 14:
          result = _context.sent;
          return _context.abrupt("return", faceLocation(result));
        case 16:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function Clarifai(_x) {
    return _ref.apply(this, arguments);
  };
}();
/* harmony default export */ var clarifai = (Clarifai);
;// CONCATENATED MODULE: ./src/components/ErrorBoundry/ErrorBoundry.tsx


var ErrorBoundry = function ErrorBoundry(_ref) {
  var status = _ref.status;
  if (status === true) {
    return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("h2", {
      className: "error"
    }, "Couldn't recognize face in the picture or invalid URL"));
  }
  return /*#__PURE__*/react.createElement("div", null);
};
/* harmony default export */ var ErrorBoundry_ErrorBoundry = (ErrorBoundry);
;// CONCATENATED MODULE: ./src/components/mainPage/mainPage.tsx
function mainPage_typeof(obj) { "@babel/helpers - typeof"; return mainPage_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, mainPage_typeof(obj); }
function mainPage_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ mainPage_regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == mainPage_typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function mainPage_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function mainPage_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { mainPage_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { mainPage_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var MainPage = function MainPage() {
  var _useState = (0,react.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    imageUrl = _useState2[0],
    setImageUrl = _useState2[1];
  var _useState3 = (0,react.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    input = _useState4[0],
    setInput = _useState4[1];
  var _useState5 = (0,react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    error = _useState6[0],
    setError = _useState6[1];
  var _useState7 = (0,react.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    box = _useState8[0],
    setBox = _useState8[1];
  var onInputChange = function onInputChange(ev) {
    setInput(ev.target.value);
  };
  var onButtonSubmit = /*#__PURE__*/function () {
    var _ref = mainPage_asyncToGenerator( /*#__PURE__*/mainPage_regeneratorRuntime().mark(function _callee() {
      var faceLocation;
      return mainPage_regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!(input === "")) {
              _context.next = 2;
              break;
            }
            return _context.abrupt("return");
          case 2:
            setImageUrl(input);
            setBox(null);
            setError(false);
            _context.next = 7;
            return clarifai(input);
          case 7:
            faceLocation = _context.sent;
            if (faceLocation === null) {
              setError(true);
            } else {
              setError(false);
            }
            setBox(faceLocation);
          case 10:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function onButtonSubmit() {
      return _ref.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(navigation, null), /*#__PURE__*/react.createElement(logo, null), /*#__PURE__*/react.createElement(imageLinkForm, {
    onInputChange: onInputChange,
    onButtonSubmit: onButtonSubmit
  }), /*#__PURE__*/react.createElement(ErrorBoundry_ErrorBoundry, {
    status: error
  }), /*#__PURE__*/react.createElement(faceRecognition, {
    box: box,
    imageUrl: imageUrl
  }));
};
/* harmony default export */ var mainPage = (MainPage);
;// CONCATENATED MODULE: ./src/app.tsx







var App = function App() {
  return /*#__PURE__*/react.createElement("div", {
    className: "App"
  }, /*#__PURE__*/react.createElement(particle, null), /*#__PURE__*/react.createElement(BrowserRouter, null, /*#__PURE__*/react.createElement(Routes, null, /*#__PURE__*/react.createElement(Route, {
    path: "/",
    element: /*#__PURE__*/react.createElement(signin, null)
  }), /*#__PURE__*/react.createElement(Route, {
    path: "/login",
    element: /*#__PURE__*/react.createElement(mainPage, null)
  }), /*#__PURE__*/react.createElement(Route, {
    path: "/register",
    element: /*#__PURE__*/react.createElement(register, null)
  }))));
};
/* harmony default export */ var app = (App);
;// CONCATENATED MODULE: ./src/index.tsx





var container = document.getElementById("root");
var root = (0,client/* createRoot */.s)(container);
root.render( /*#__PURE__*/react.createElement(app, null));
}();
/******/ })()
;
//# sourceMappingURL=index.abb99919.js.map