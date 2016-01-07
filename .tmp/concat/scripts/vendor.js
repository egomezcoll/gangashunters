/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b="length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){
return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var aa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ba=/<([\w:]+)/,ca=/<|&#?\w+;/,da=/<(?:script|style|link)/i,ea=/checked\s*(?:[^=]|=\s*.checked.)/i,fa=/^$|\/(?:java|ecma)script/i,ga=/^true\/(.*)/,ha=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ia={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option,ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead,ia.th=ia.td;function ja(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function ka(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function la(a){var b=ga.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function ma(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function na(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function oa(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pa(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=oa(h),f=oa(a),d=0,e=f.length;e>d;d++)pa(f[d],g[d]);if(b)if(c)for(f=f||oa(a),g=g||oa(h),d=0,e=f.length;e>d;d++)na(f[d],g[d]);else na(a,h);return g=oa(h,"script"),g.length>0&&ma(g,!i&&oa(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(ca.test(e)){f=f||k.appendChild(b.createElement("div")),g=(ba.exec(e)||["",""])[1].toLowerCase(),h=ia[g]||ia._default,f.innerHTML=h[1]+e.replace(aa,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=oa(k.appendChild(e),"script"),i&&ma(f),c)){j=0;while(e=f[j++])fa.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(oa(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&ma(oa(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(oa(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!da.test(a)&&!ia[(ba.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(aa,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(oa(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(oa(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&ea.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(oa(c,"script"),ka),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,oa(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,la),j=0;g>j;j++)h=f[j],fa.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(ha,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qa,ra={};function sa(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function ta(a){var b=l,c=ra[a];return c||(c=sa(a,b),"none"!==c&&c||(qa=(qa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qa[0].contentDocument,b.write(),b.close(),c=sa(a,b),qa.detach()),ra[a]=c),c}var ua=/^margin/,va=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wa=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xa(a,b,c){var d,e,f,g,h=a.style;return c=c||wa(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),va.test(g)&&ua.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function ya(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var za=/^(none|table(?!-c[ea]).+)/,Aa=new RegExp("^("+Q+")(.*)$","i"),Ba=new RegExp("^([+-])=("+Q+")","i"),Ca={position:"absolute",visibility:"hidden",display:"block"},Da={letterSpacing:"0",fontWeight:"400"},Ea=["Webkit","O","Moz","ms"];function Fa(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Ea.length;while(e--)if(b=Ea[e]+c,b in a)return b;return d}function Ga(a,b,c){var d=Aa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Ha(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ia(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wa(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xa(a,b,f),(0>e||null==e)&&(e=a.style[b]),va.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Ha(a,b,c||(g?"border":"content"),d,f)+"px"}function Ja(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",ta(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xa(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fa(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ba.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fa(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xa(a,b,d)),"normal"===e&&b in Da&&(e=Da[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?za.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Ca,function(){return Ia(a,b,d)}):Ia(a,b,d):void 0},set:function(a,c,d){var e=d&&wa(a);return Ga(a,c,d?Ha(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=ya(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ua.test(a)||(n.cssHooks[a+b].set=Ga)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wa(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Ja(this,!0)},hide:function(){return Ja(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Ka(a,b,c,d,e){return new Ka.prototype.init(a,b,c,d,e)}n.Tween=Ka,Ka.prototype={constructor:Ka,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ka.propHooks[this.prop];return a&&a.get?a.get(this):Ka.propHooks._default.get(this)},run:function(a){var b,c=Ka.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ka.propHooks._default.set(this),this}},Ka.prototype.init.prototype=Ka.prototype,Ka.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Ka.propHooks.scrollTop=Ka.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Ka.prototype.init,n.fx.step={};var La,Ma,Na=/^(?:toggle|show|hide)$/,Oa=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pa=/queueHooks$/,Qa=[Va],Ra={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Oa.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Oa.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sa(){return setTimeout(function(){La=void 0}),La=n.now()}function Ta(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ua(a,b,c){for(var d,e=(Ra[b]||[]).concat(Ra["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Va(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||ta(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Na.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?ta(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ua(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wa(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xa(a,b,c){var d,e,f=0,g=Qa.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=La||Sa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:La||Sa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wa(k,j.opts.specialEasing);g>f;f++)if(d=Qa[f].call(j,a,k,j.opts))return d;return n.map(k,Ua,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xa,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Ra[c]=Ra[c]||[],Ra[c].unshift(b)},prefilter:function(a,b){b?Qa.unshift(a):Qa.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xa(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pa.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Ta(b,!0),a,d,e)}}),n.each({slideDown:Ta("show"),slideUp:Ta("hide"),slideToggle:Ta("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(La=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),La=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ma||(Ma=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Ma),Ma=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Ya,Za,$a=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Za:Ya)),
void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Za={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$a[b]||n.find.attr;$a[b]=function(a,b,d){var e,f;return d||(f=$a[b],$a[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$a[b]=f),e}});var _a=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_a.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ab=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ab," ").indexOf(b)>=0)return!0;return!1}});var bb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cb=n.now(),db=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var eb=/#.*$/,fb=/([?&])_=[^&]*/,gb=/^(.*?):[ \t]*([^\r\n]*)$/gm,hb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ib=/^(?:GET|HEAD)$/,jb=/^\/\//,kb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lb={},mb={},nb="*/".concat("*"),ob=a.location.href,pb=kb.exec(ob.toLowerCase())||[];function qb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rb(a,b,c,d){var e={},f=a===mb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function ub(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ob,type:"GET",isLocal:hb.test(pb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sb(sb(a,n.ajaxSettings),b):sb(n.ajaxSettings,a)},ajaxPrefilter:qb(lb),ajaxTransport:qb(mb),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gb.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||ob)+"").replace(eb,"").replace(jb,pb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kb.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pb[1]&&h[2]===pb[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pb[3]||("http:"===pb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rb(lb,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ib.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(db.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fb.test(d)?d.replace(fb,"$1_="+cb++):d+(db.test(d)?"&":"?")+"_="+cb++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nb+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rb(mb,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tb(k,v,f)),u=ub(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vb=/%20/g,wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&").replace(vb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bb=0,Cb={},Db={0:200,1223:204},Eb=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cb)Cb[a]()}),k.cors=!!Eb&&"withCredentials"in Eb,k.ajax=Eb=!!Eb,n.ajaxTransport(function(a){var b;return k.cors||Eb&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cb[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Db[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cb[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fb=[],Gb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fb.pop()||n.expando+"_"+cb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gb.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gb,"$1"+e):b.jsonp!==!1&&(b.url+=(db.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hb)return Hb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ib=a.document.documentElement;function Jb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ib;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ib})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jb(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=ya(k.pixelPosition,function(a,c){return c?(c=xa(a,b),va.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kb=a.jQuery,Lb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lb),b&&a.jQuery===n&&(a.jQuery=Kb),n},typeof b===U&&(a.jQuery=a.$=n),n});
//# sourceMappingURL=jquery.min.map
/*
 AngularJS v1.3.20
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(R,W,u){'use strict';function S(b){return function(){var a=arguments[0],c;c="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.3.20/"+(b?b+"/":"")+a;for(a=1;a<arguments.length;a++){c=c+(1==a?"?":"&")+"p"+(a-1)+"=";var d=encodeURIComponent,e;e=arguments[a];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;c+=d(e)}return Error(c)}}function Ta(b){if(null==b||Ua(b))return!1;var a="length"in Object(b)&&b.length;
return b.nodeType===qa&&a?!0:x(b)||H(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function r(b,a,c){var d,e;if(b)if(z(b))for(d in b)"prototype"==d||"length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d)||a.call(c,b[d],d,b);else if(H(b)||Ta(b)){var f="object"!==typeof b;d=0;for(e=b.length;d<e;d++)(f||d in b)&&a.call(c,b[d],d,b)}else if(b.forEach&&b.forEach!==r)b.forEach(a,c,b);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d,b);return b}function Ed(b,a,c){for(var d=Object.keys(b).sort(),
e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}function lc(b){return function(a,c){b(c,a)}}function Fd(){return++rb}function mc(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function w(b){for(var a=b.$$hashKey,c=1,d=arguments.length;c<d;c++){var e=arguments[c];if(e)for(var f=Object.keys(e),g=0,h=f.length;g<h;g++){var l=f[g];b[l]=e[l]}}mc(b,a);return b}function aa(b){return parseInt(b,10)}function Ob(b,a){return w(Object.create(b),a)}function A(){}function ra(b){return b}function ea(b){return function(){return b}}
function D(b){return"undefined"===typeof b}function y(b){return"undefined"!==typeof b}function L(b){return null!==b&&"object"===typeof b}function x(b){return"string"===typeof b}function Y(b){return"number"===typeof b}function ha(b){return"[object Date]"===Ca.call(b)}function z(b){return"function"===typeof b}function Va(b){return"[object RegExp]"===Ca.call(b)}function Ua(b){return b&&b.window===b}function Wa(b){return b&&b.$evalAsync&&b.$watch}function Xa(b){return"boolean"===typeof b}function nc(b){return!(!b||
!(b.nodeName||b.prop&&b.attr&&b.find))}function Gd(b){var a={};b=b.split(",");var c;for(c=0;c<b.length;c++)a[b[c]]=!0;return a}function wa(b){return K(b.nodeName||b[0]&&b[0].nodeName)}function Ya(b,a){var c=b.indexOf(a);0<=c&&b.splice(c,1);return a}function Da(b,a,c,d){if(Ua(b)||Wa(b))throw Ja("cpws");if(a){if(b===a)throw Ja("cpi");c=c||[];d=d||[];if(L(b)){var e=c.indexOf(b);if(-1!==e)return d[e];c.push(b);d.push(a)}if(H(b))for(var f=a.length=0;f<b.length;f++)e=Da(b[f],null,c,d),L(b[f])&&(c.push(b[f]),
d.push(e)),a.push(e);else{var g=a.$$hashKey;H(a)?a.length=0:r(a,function(b,c){delete a[c]});for(f in b)b.hasOwnProperty(f)&&(e=Da(b[f],null,c,d),L(b[f])&&(c.push(b[f]),d.push(e)),a[f]=e);mc(a,g)}}else if(a=b)H(b)?a=Da(b,[],c,d):ha(b)?a=new Date(b.getTime()):Va(b)?(a=new RegExp(b.source,b.toString().match(/[^\/]*$/)[0]),a.lastIndex=b.lastIndex):L(b)&&(e=Object.create(Object.getPrototypeOf(b)),a=Da(b,e,c,d));return a}function sa(b,a){if(H(b)){a=a||[];for(var c=0,d=b.length;c<d;c++)a[c]=b[c]}else if(L(b))for(c in a=
a||{},b)if("$"!==c.charAt(0)||"$"!==c.charAt(1))a[c]=b[c];return a||b}function ia(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&"object"==c)if(H(b)){if(!H(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!ia(b[d],a[d]))return!1;return!0}}else{if(ha(b))return ha(a)?ia(b.getTime(),a.getTime()):!1;if(Va(b))return Va(a)?b.toString()==a.toString():!1;if(Wa(b)||Wa(a)||Ua(b)||Ua(a)||H(a)||ha(a)||Va(a))return!1;c={};for(d in b)if("$"!==
d.charAt(0)&&!z(b[d])){if(!ia(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&"$"!==d.charAt(0)&&a[d]!==u&&!z(a[d]))return!1;return!0}return!1}function Za(b,a,c){return b.concat($a.call(a,c))}function oc(b,a){var c=2<arguments.length?$a.call(arguments,2):[];return!z(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,Za(c,arguments,0)):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function Hd(b,a){var c=a;"string"===typeof b&&
"$"===b.charAt(0)&&"$"===b.charAt(1)?c=u:Ua(a)?c="$WINDOW":a&&W===a?c="$DOCUMENT":Wa(a)&&(c="$SCOPE");return c}function ab(b,a){if("undefined"===typeof b)return u;Y(a)||(a=a?2:null);return JSON.stringify(b,Hd,a)}function pc(b){return x(b)?JSON.parse(b):b}function xa(b){b=B(b).clone();try{b.empty()}catch(a){}var c=B("<div>").append(b).html();try{return b[0].nodeType===bb?K(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+K(b)})}catch(d){return K(c)}}function qc(b){try{return decodeURIComponent(b)}catch(a){}}
function rc(b){var a={},c,d;r((b||"").split("&"),function(b){b&&(c=b.replace(/\+/g,"%20").split("="),d=qc(c[0]),y(d)&&(b=y(c[1])?qc(c[1]):!0,sc.call(a,d)?H(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Pb(b){var a=[];r(b,function(b,d){H(b)?r(b,function(b){a.push(Ea(d,!0)+(!0===b?"":"="+Ea(b,!0)))}):a.push(Ea(d,!0)+(!0===b?"":"="+Ea(b,!0)))});return a.length?a.join("&"):""}function sb(b){return Ea(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function Ea(b,a){return encodeURIComponent(b).replace(/%40/gi,
"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,a?"%20":"+")}function Id(b,a){var c,d,e=tb.length;b=B(b);for(d=0;d<e;++d)if(c=tb[d]+a,x(c=b.attr(c)))return c;return null}function Jd(b,a){var c,d,e={};r(tb,function(a){a+="app";!c&&b.hasAttribute&&b.hasAttribute(a)&&(c=b,d=b.getAttribute(a))});r(tb,function(a){a+="app";var e;!c&&(e=b.querySelector("["+a.replace(":","\\:")+"]"))&&(c=e,d=e.getAttribute(a))});c&&(e.strictDi=null!==Id(c,"strict-di"),
a(c,d?[d]:[],e))}function tc(b,a,c){L(c)||(c={});c=w({strictDi:!1},c);var d=function(){b=B(b);if(b.injector()){var d=b[0]===W?"document":xa(b);throw Ja("btstrpd",d.replace(/</,"&lt;").replace(/>/,"&gt;"));}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);c.debugInfoEnabled&&a.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);a.unshift("ng");d=cb(a,c.strictDi);d.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",
d);c(b)(a)})}]);return d},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;R&&e.test(R.name)&&(c.debugInfoEnabled=!0,R.name=R.name.replace(e,""));if(R&&!f.test(R.name))return d();R.name=R.name.replace(f,"");ca.resumeBootstrap=function(b){r(b,function(b){a.push(b)});return d()};z(ca.resumeDeferredBootstrap)&&ca.resumeDeferredBootstrap()}function Kd(){R.name="NG_ENABLE_DEBUG_INFO!"+R.name;R.location.reload()}function Ld(b){b=ca.element(b).injector();if(!b)throw Ja("test");return b.get("$$testability")}
function uc(b,a){a=a||"_";return b.replace(Md,function(b,d){return(d?a:"")+b.toLowerCase()})}function Nd(){var b;vc||((ta=R.jQuery)&&ta.fn.on?(B=ta,w(ta.fn,{scope:Ka.scope,isolateScope:Ka.isolateScope,controller:Ka.controller,injector:Ka.injector,inheritedData:Ka.inheritedData}),b=ta.cleanData,ta.cleanData=function(a){var c;if(Qb)Qb=!1;else for(var d=0,e;null!=(e=a[d]);d++)(c=ta._data(e,"events"))&&c.$destroy&&ta(e).triggerHandler("$destroy");b(a)}):B=T,ca.element=B,vc=!0)}function Rb(b,a,c){if(!b)throw Ja("areq",
a||"?",c||"required");return b}function La(b,a,c){c&&H(b)&&(b=b[b.length-1]);Rb(z(b),a,"not a function, got "+(b&&"object"===typeof b?b.constructor.name||"Object":typeof b));return b}function Ma(b,a){if("hasOwnProperty"===b)throw Ja("badname",a);}function wc(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,f=a.length,g=0;g<f;g++)d=a[g],b&&(b=(e=b)[d]);return!c&&z(b)?oc(e,b):b}function ub(b){var a=b[0];b=b[b.length-1];var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==b);return B(c)}function ja(){return Object.create(null)}
function Od(b){function a(a,b,c){return a[b]||(a[b]=c())}var c=S("$injector"),d=S("ng");b=a(b,"angular",Object);b.$$minErr=b.$$minErr||S;return a(b,"module",function(){var b={};return function(f,g,h){if("hasOwnProperty"===f)throw d("badname","module");g&&b.hasOwnProperty(f)&&(b[f]=null);return a(b,f,function(){function a(c,d,e,f){f||(f=b);return function(){f[e||"push"]([c,d,arguments]);return t}}if(!g)throw c("nomod",f);var b=[],d=[],e=[],q=a("$injector","invoke","push",d),t={_invokeQueue:b,_configBlocks:d,
_runBlocks:e,requires:g,name:f,provider:a("$provide","provider"),factory:a("$provide","factory"),service:a("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),animation:a("$animateProvider","register"),filter:a("$filterProvider","register"),controller:a("$controllerProvider","register"),directive:a("$compileProvider","directive"),config:q,run:function(a){e.push(a);return this}};h&&q(h);return t})}})}function Pd(b){w(b,{bootstrap:tc,copy:Da,extend:w,equals:ia,
element:B,forEach:r,injector:cb,noop:A,bind:oc,toJson:ab,fromJson:pc,identity:ra,isUndefined:D,isDefined:y,isString:x,isFunction:z,isObject:L,isNumber:Y,isElement:nc,isArray:H,version:Qd,isDate:ha,lowercase:K,uppercase:vb,callbacks:{counter:0},getTestability:Ld,$$minErr:S,$$csp:db,reloadWithDebugInfo:Kd});eb=Od(R);try{eb("ngLocale")}catch(a){eb("ngLocale",[]).provider("$locale",Rd)}eb("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:Sd});a.provider("$compile",xc).directive({a:Td,
input:yc,textarea:yc,form:Ud,script:Vd,select:Wd,style:Xd,option:Yd,ngBind:Zd,ngBindHtml:$d,ngBindTemplate:ae,ngClass:be,ngClassEven:ce,ngClassOdd:de,ngCloak:ee,ngController:fe,ngForm:ge,ngHide:he,ngIf:ie,ngInclude:je,ngInit:ke,ngNonBindable:le,ngPluralize:me,ngRepeat:ne,ngShow:oe,ngStyle:pe,ngSwitch:qe,ngSwitchWhen:re,ngSwitchDefault:se,ngOptions:te,ngTransclude:ue,ngModel:ve,ngList:we,ngChange:xe,pattern:zc,ngPattern:zc,required:Ac,ngRequired:Ac,minlength:Bc,ngMinlength:Bc,maxlength:Cc,ngMaxlength:Cc,
ngValue:ye,ngModelOptions:ze}).directive({ngInclude:Ae}).directive(wb).directive(Dc);a.provider({$anchorScroll:Be,$animate:Ce,$browser:De,$cacheFactory:Ee,$controller:Fe,$document:Ge,$exceptionHandler:He,$filter:Ec,$interpolate:Ie,$interval:Je,$http:Ke,$httpBackend:Le,$location:Me,$log:Ne,$parse:Oe,$rootScope:Pe,$q:Qe,$$q:Re,$sce:Se,$sceDelegate:Te,$sniffer:Ue,$templateCache:Ve,$templateRequest:We,$$testability:Xe,$timeout:Ye,$window:Ze,$$rAF:$e,$$asyncCallback:af,$$jqLite:bf})}])}function fb(b){return b.replace(cf,
function(a,b,d,e){return e?d.toUpperCase():d}).replace(df,"Moz$1")}function Fc(b){b=b.nodeType;return b===qa||!b||9===b}function Gc(b,a){var c,d,e=a.createDocumentFragment(),f=[];if(Sb.test(b)){c=c||e.appendChild(a.createElement("div"));d=(ef.exec(b)||["",""])[1].toLowerCase();d=ka[d]||ka._default;c.innerHTML=d[1]+b.replace(ff,"<$1></$2>")+d[2];for(d=d[0];d--;)c=c.lastChild;f=Za(f,c.childNodes);c=e.firstChild;c.textContent=""}else f.push(a.createTextNode(b));e.textContent="";e.innerHTML="";r(f,function(a){e.appendChild(a)});
return e}function T(b){if(b instanceof T)return b;var a;x(b)&&(b=N(b),a=!0);if(!(this instanceof T)){if(a&&"<"!=b.charAt(0))throw Tb("nosel");return new T(b)}if(a){a=W;var c;b=(c=gf.exec(b))?[a.createElement(c[1])]:(c=Gc(b,a))?c.childNodes:[]}Hc(this,b)}function Ub(b){return b.cloneNode(!0)}function xb(b,a){a||yb(b);if(b.querySelectorAll)for(var c=b.querySelectorAll("*"),d=0,e=c.length;d<e;d++)yb(c[d])}function Ic(b,a,c,d){if(y(d))throw Tb("offargs");var e=(d=zb(b))&&d.events,f=d&&d.handle;if(f)if(a)r(a.split(" "),
function(a){if(y(c)){var d=e[a];Ya(d||[],c);if(d&&0<d.length)return}b.removeEventListener(a,f,!1);delete e[a]});else for(a in e)"$destroy"!==a&&b.removeEventListener(a,f,!1),delete e[a]}function yb(b,a){var c=b.ng339,d=c&&Ab[c];d&&(a?delete d.data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),Ic(b)),delete Ab[c],b.ng339=u))}function zb(b,a){var c=b.ng339,c=c&&Ab[c];a&&!c&&(b.ng339=c=++hf,c=Ab[c]={events:{},data:{},handle:u});return c}function Vb(b,a,c){if(Fc(b)){var d=y(c),e=!d&&a&&!L(a),
f=!a;b=(b=zb(b,!e))&&b.data;if(d)b[a]=c;else{if(f)return b;if(e)return b&&b[a];w(b,a)}}}function Bb(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function Cb(b,a){a&&b.setAttribute&&r(a.split(" "),function(a){b.setAttribute("class",N((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+N(a)+" "," ")))})}function Db(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");
r(a.split(" "),function(a){a=N(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});b.setAttribute("class",N(c))}}function Hc(b,a){if(a)if(a.nodeType)b[b.length++]=a;else{var c=a.length;if("number"===typeof c&&a.window!==a){if(c)for(var d=0;d<c;d++)b[b.length++]=a[d]}else b[b.length++]=a}}function Jc(b,a){return Eb(b,"$"+(a||"ngController")+"Controller")}function Eb(b,a,c){9==b.nodeType&&(b=b.documentElement);for(a=H(a)?a:[a];b;){for(var d=0,e=a.length;d<e;d++)if((c=B.data(b,a[d]))!==u)return c;b=b.parentNode||
11===b.nodeType&&b.host}}function Kc(b){for(xb(b,!0);b.firstChild;)b.removeChild(b.firstChild)}function Lc(b,a){a||xb(b);var c=b.parentNode;c&&c.removeChild(b)}function jf(b,a){a=a||R;if("complete"===a.document.readyState)a.setTimeout(b);else B(a).on("load",b)}function Mc(b,a){var c=Fb[a.toLowerCase()];return c&&Nc[wa(b)]&&c}function kf(b,a){var c=b.nodeName;return("INPUT"===c||"TEXTAREA"===c)&&Oc[a]}function lf(b,a){var c=function(c,e){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=
a[e||c.type],g=f?f.length:0;if(g){if(D(c.immediatePropagationStopped)){var h=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();h&&h.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};1<g&&(f=sa(f));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||f[l].call(b,c)}};c.elem=b;return c}function bf(){this.$get=function(){return w(T,{hasClass:function(b,a){b.attr&&(b=b[0]);
return Bb(b,a)},addClass:function(b,a){b.attr&&(b=b[0]);return Db(b,a)},removeClass:function(b,a){b.attr&&(b=b[0]);return Cb(b,a)}})}}function Na(b,a){var c=b&&b.$$hashKey;if(c)return"function"===typeof c&&(c=b.$$hashKey()),c;c=typeof b;return c="function"==c||"object"==c&&null!==b?b.$$hashKey=c+":"+(a||Fd)():c+":"+b}function gb(b,a){if(a){var c=0;this.nextUid=function(){return++c}}r(b,this.put,this)}function mf(b){return(b=b.toString().replace(Pc,"").match(Qc))?"function("+(b[1]||"").replace(/[\s\r\n]+/,
" ")+")":"fn"}function cb(b,a){function c(a){return function(b,c){if(L(b))r(b,lc(a));else return a(b,c)}}function d(a,b){Ma(a,"service");if(z(b)||H(b))b=q.instantiate(b);if(!b.$get)throw Fa("pget",a);return p[a+"Provider"]=b}function e(a,b){return function(){var c=s.invoke(b,this);if(D(c))throw Fa("undef",a);return c}}function f(a,b,c){return d(a,{$get:!1!==c?e(a,b):b})}function g(a){var b=[],c;r(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=q.get(e[0]);f[e[1]].apply(f,
e[2])}}if(!n.get(a)){n.put(a,!0);try{x(a)?(c=eb(a),b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):z(a)?b.push(q.invoke(a)):H(a)?b.push(q.invoke(a)):La(a,"module")}catch(e){throw H(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1==e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Fa("modulerr",a,e.stack||e.message||e);}}});return b}function h(b,c){function d(a,e){if(b.hasOwnProperty(a)){if(b[a]===l)throw Fa("cdep",a+" <- "+k.join(" <- "));return b[a]}try{return k.unshift(a),
b[a]=l,b[a]=c(a,e)}catch(f){throw b[a]===l&&delete b[a],f;}finally{k.shift()}}function e(b,c,f,g){"string"===typeof f&&(g=f,f=null);var k=[],l=cb.$$annotate(b,a,g),h,q,p;q=0;for(h=l.length;q<h;q++){p=l[q];if("string"!==typeof p)throw Fa("itkn",p);k.push(f&&f.hasOwnProperty(p)?f[p]:d(p,g))}H(b)&&(b=b[h]);return b.apply(c,k)}return{invoke:e,instantiate:function(a,b,c){var d=Object.create((H(a)?a[a.length-1]:a).prototype||null);a=e(a,d,b,c);return L(a)||z(a)?a:d},get:d,annotate:cb.$$annotate,has:function(a){return p.hasOwnProperty(a+
"Provider")||b.hasOwnProperty(a)}}}a=!0===a;var l={},k=[],n=new gb([],!0),p={$provide:{provider:c(d),factory:c(f),service:c(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),value:c(function(a,b){return f(a,ea(b),!1)}),constant:c(function(a,b){Ma(a,"constant");p[a]=b;t[a]=b}),decorator:function(a,b){var c=q.get(a+"Provider"),d=c.$get;c.$get=function(){var a=s.invoke(d,c);return s.invoke(b,null,{$delegate:a})}}}},q=p.$injector=h(p,function(a,b){ca.isString(b)&&k.push(b);
throw Fa("unpr",k.join(" <- "));}),t={},s=t.$injector=h(t,function(a,b){var c=q.get(a+"Provider",b);return s.invoke(c.$get,c,u,a)});r(g(b),function(a){s.invoke(a||A)});return s}function Be(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===wa(a))return b=a,!0});return b}function f(b){if(b){b.scrollIntoView();var c;c=g.yOffset;z(c)?c=c():nc(c)?(c=c[0],c="fixed"!==
a.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):Y(c)||(c=0);c&&(b=b.getBoundingClientRect().top,a.scrollBy(0,b-c))}else a.scrollTo(0,0)}function g(){var a=c.hash(),b;a?(b=h.getElementById(a))?f(b):(b=e(h.getElementsByName(a)))?f(b):"top"===a&&f(null):f(null)}var h=a.document;b&&d.$watch(function(){return c.hash()},function(a,b){a===b&&""===a||jf(function(){d.$evalAsync(g)})});return g}]}function af(){this.$get=["$$rAF","$timeout",function(b,a){return b.supported?function(a){return b(a)}:
function(b){return a(b,0,!1)}}]}function nf(b,a,c,d){function e(a){try{a.apply(null,$a.call(arguments,1))}finally{if(m--,0===m)for(;C.length;)try{C.pop()()}catch(b){c.error(b)}}}function f(a,b){(function da(){r($,function(a){a()});I=b(da,a)})()}function g(){h();l()}function h(){a:{try{M=t.state;break a}catch(a){}M=void 0}M=D(M)?null:M;ia(M,P)&&(M=P);P=M}function l(){if(G!==n.url()||E!==M)G=n.url(),E=M,r(X,function(a){a(n.url(),M)})}function k(a){try{return decodeURIComponent(a)}catch(b){return a}}
var n=this,p=a[0],q=b.location,t=b.history,s=b.setTimeout,F=b.clearTimeout,v={};n.isMock=!1;var m=0,C=[];n.$$completeOutstandingRequest=e;n.$$incOutstandingRequestCount=function(){m++};n.notifyWhenNoOutstandingRequests=function(a){r($,function(a){a()});0===m?a():C.push(a)};var $=[],I;n.addPollFn=function(a){D(I)&&f(100,s);$.push(a);return a};var M,E,G=q.href,O=a.find("base"),Q=null;h();E=M;n.url=function(a,c,e){D(e)&&(e=null);q!==b.location&&(q=b.location);t!==b.history&&(t=b.history);if(a){var f=
E===e;if(G===a&&(!d.history||f))return n;var g=G&&Ga(G)===Ga(a);G=a;E=e;if(!d.history||g&&f){if(!g||Q)Q=a;c?q.replace(a):g?(c=q,e=a.indexOf("#"),a=-1===e?"":a.substr(e),c.hash=a):q.href=a}else t[c?"replaceState":"pushState"](e,"",a),h(),E=M;return n}return Q||q.href.replace(/%27/g,"'")};n.state=function(){return M};var X=[],ba=!1,P=null;n.onUrlChange=function(a){if(!ba){if(d.history)B(b).on("popstate",g);B(b).on("hashchange",g);ba=!0}X.push(a);return a};n.$$checkUrlChange=l;n.baseHref=function(){var a=
O.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};var fa={},y="",la=n.baseHref();n.cookies=function(a,b){var d,e,f,g;if(a)b===u?p.cookie=encodeURIComponent(a)+"=;path="+la+";expires=Thu, 01 Jan 1970 00:00:00 GMT":x(b)&&(d=(p.cookie=encodeURIComponent(a)+"="+encodeURIComponent(b)+";path="+la).length+1,4096<d&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"));else{if(p.cookie!==y)for(y=p.cookie,d=y.split("; "),fa={},f=0;f<d.length;f++)e=
d[f],g=e.indexOf("="),0<g&&(a=k(e.substring(0,g)),fa[a]===u&&(fa[a]=k(e.substring(g+1))));return fa}};n.defer=function(a,b){var c;m++;c=s(function(){delete v[c];e(a)},b||0);v[c]=!0;return c};n.defer.cancel=function(a){return v[a]?(delete v[a],F(a),e(A),!0):!1}}function De(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new nf(b,d,a,c)}]}function Ee(){this.$get=function(){function b(b,d){function e(a){a!=p&&(q?q==a&&(q=a.n):q=a,f(a.n,a.p),f(a,p),p=a,p.n=null)}function f(a,
b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw S("$cacheFactory")("iid",b);var g=0,h=w({},d,{id:b}),l={},k=d&&d.capacity||Number.MAX_VALUE,n={},p=null,q=null;return a[b]={put:function(a,b){if(k<Number.MAX_VALUE){var c=n[a]||(n[a]={key:a});e(c)}if(!D(b))return a in l||g++,l[a]=b,g>k&&this.remove(q.key),b},get:function(a){if(k<Number.MAX_VALUE){var b=n[a];if(!b)return;e(b)}return l[a]},remove:function(a){if(k<Number.MAX_VALUE){var b=n[a];if(!b)return;b==p&&(p=b.p);b==q&&(q=b.n);f(b.n,b.p);delete n[a]}delete l[a];
g--},removeAll:function(){l={};g=0;n={};p=q=null},destroy:function(){n=h=l=null;delete a[b]},info:function(){return w({},h,{size:g})}}}var a={};b.info=function(){var b={};r(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function Ve(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function xc(b,a){function c(a,b){var c=/^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,d={};r(a,function(a,e){var f=a.match(c);if(!f)throw ma("iscp",b,e,a);d[e]={mode:f[1][0],collection:"*"===
f[2],optional:"?"===f[3],attrName:f[4]||e}});return d}var d={},e=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,f=/(([\w\-]+)(?:\:([^;]+))?;?)/,g=Gd("ngSrc,ngSrcset,src,srcset"),h=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,l=/^(on[a-z]+|formaction)$/;this.directive=function p(a,e){Ma(a,"directive");x(a)?(Rb(e,"directiveFactory"),d.hasOwnProperty(a)||(d[a]=[],b.factory(a+"Directive",["$injector","$exceptionHandler",function(b,e){var f=[];r(d[a],function(d,g){try{var h=b.invoke(d);z(h)?h={compile:ea(h)}:!h.compile&&h.link&&
(h.compile=ea(h.link));h.priority=h.priority||0;h.index=g;h.name=h.name||a;h.require=h.require||h.controller&&h.name;h.restrict=h.restrict||"EA";L(h.scope)&&(h.$$isolateBindings=c(h.scope,h.name));f.push(h)}catch(l){e(l)}});return f}])),d[a].push(e)):r(a,lc(p));return this};this.aHrefSanitizationWhitelist=function(b){return y(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(b){return y(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};
var k=!0;this.debugInfoEnabled=function(a){return y(a)?(k=a,this):k};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,c,s,F,v,m,C,$,I,M){function E(a,b){try{a.addClass(b)}catch(c){}}function G(a,b,c,d,e){a instanceof B||(a=B(a));r(a,function(b,c){b.nodeType==bb&&b.nodeValue.match(/\S+/)&&(a[c]=B(b).wrap("<span></span>").parent()[0])});var f=O(a,b,a,c,d,e);G.$$addScopeClass(a);
var g=null;return function(b,c,d){Rb(b,"scope");d=d||{};var e=d.parentBoundTranscludeFn,h=d.transcludeControllers;d=d.futureParentElement;e&&e.$$boundTransclude&&(e=e.$$boundTransclude);g||(g=(d=d&&d[0])?"foreignobject"!==wa(d)&&d.toString().match(/SVG/)?"svg":"html":"html");d="html"!==g?B(Xb(g,B("<div>").append(a).html())):c?Ka.clone.call(a):a;if(h)for(var l in h)d.data("$"+l+"Controller",h[l].instance);G.$$addScopeInfo(d,b);c&&c(d,b);f&&f(b,d,d,e);return d}}function O(a,b,c,d,e,f){function g(a,
c,d,e){var f,l,k,q,p,s,t;if(m)for(t=Array(c.length),q=0;q<h.length;q+=3)f=h[q],t[f]=c[f];else t=c;q=0;for(p=h.length;q<p;)l=t[h[q++]],c=h[q++],f=h[q++],c?(c.scope?(k=a.$new(),G.$$addScopeInfo(B(l),k)):k=a,s=c.transcludeOnThisElement?Q(a,c.transclude,e,c.elementTranscludeOnThisElement):!c.templateOnThisElement&&e?e:!e&&b?Q(a,b):null,c(f,k,l,d,s)):f&&f(a,l.childNodes,u,e)}for(var h=[],l,k,q,p,m,s=0;s<a.length;s++){l=new Yb;k=X(a[s],[],l,0===s?d:u,e);(f=k.length?fa(k,a[s],l,b,c,null,[],[],f):null)&&
f.scope&&G.$$addScopeClass(l.$$element);l=f&&f.terminal||!(q=a[s].childNodes)||!q.length?null:O(q,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||l)h.push(s,f,l),p=!0,m=m||f;f=null}return p?g:null}function Q(a,b,c,d){return function(d,e,f,g,h){d||(d=a.$new(!1,h),d.$$transcluded=!0);return b(d,e,{parentBoundTranscludeFn:c,transcludeControllers:f,futureParentElement:g})}}function X(a,b,c,d,g){var h=c.$attr,l;switch(a.nodeType){case qa:la(b,ya(wa(a)),"E",d,g);for(var k,
q,p,m=a.attributes,s=0,t=m&&m.length;s<t;s++){var M=!1,I=!1;k=m[s];l=k.name;q=N(k.value);k=ya(l);if(p=U.test(k))l=l.replace(Rc,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase()});var F=k.replace(/(Start|End)$/,"");D(F)&&k===F+"Start"&&(M=l,I=l.substr(0,l.length-5)+"end",l=l.substr(0,l.length-6));k=ya(l.toLowerCase());h[k]=l;if(p||!c.hasOwnProperty(k))c[k]=q,Mc(a,k)&&(c[k]=!0);Pa(a,b,q,k,p);la(b,k,"A",d,g,M,I)}a=a.className;L(a)&&(a=a.animVal);if(x(a)&&""!==a)for(;l=f.exec(a);)k=ya(l[2]),
la(b,k,"C",d,g)&&(c[k]=N(l[3])),a=a.substr(l.index+l[0].length);break;case bb:za(b,a.nodeValue);break;case 8:try{if(l=e.exec(a.nodeValue))k=ya(l[1]),la(b,k,"M",d,g)&&(c[k]=N(l[2]))}catch(v){}}b.sort(da);return b}function ba(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ma("uterdir",b,c);a.nodeType==qa&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return B(d)}function P(a,b,c){return function(d,e,f,g,h){e=ba(e[0],
b,c);return a(d,e,f,g,h)}}function fa(a,d,e,f,g,l,k,p,m){function s(a,b,c,d){if(a){c&&(a=P(a,c,d));a.require=J.require;a.directiveName=da;if(Q===J||J.$$isolateScope)a=Y(a,{isolateScope:!0});k.push(a)}if(b){c&&(b=P(b,c,d));b.require=J.require;b.directiveName=da;if(Q===J||J.$$isolateScope)b=Y(b,{isolateScope:!0});p.push(b)}}function M(a,b,c,d){var e,f="data",g=!1,l=c,k;if(x(b)){k=b.match(h);b=b.substring(k[0].length);k[3]&&(k[1]?k[3]=null:k[1]=k[3]);"^"===k[1]?f="inheritedData":"^^"===k[1]&&(f="inheritedData",
l=c.parent());"?"===k[2]&&(g=!0);e=null;d&&"data"===f&&(e=d[b])&&(e=e.instance);e=e||l[f]("$"+b+"Controller");if(!e&&!g)throw ma("ctreq",b,a);return e||null}H(b)&&(e=[],r(b,function(b){e.push(M(a,b,c,d))}));return e}function I(a,c,f,g,l){function h(a,b,c){var d;Wa(a)||(c=b,b=a,a=u);A&&(d=C);c||(c=A?X.parent():X);return l(a,b,d,c,Wb)}var m,s,t,E,C,ib,X,P;d===f?(P=e,X=e.$$element):(X=B(f),P=new Yb(X,e));Q&&(E=c.$new(!0));l&&(ib=h,ib.$$boundTransclude=l);O&&($={},C={},r(O,function(a){var b={$scope:a===
Q||a.$$isolateScope?E:c,$element:X,$attrs:P,$transclude:ib};t=a.controller;"@"==t&&(t=P[a.name]);b=v(t,b,!0,a.controllerAs);C[a.name]=b;A||X.data("$"+a.name+"Controller",b.instance);$[a.name]=b}));if(Q){G.$$addScopeInfo(X,E,!0,!(na&&(na===Q||na===Q.$$originalDirective)));G.$$addScopeClass(X,!0);g=$&&$[Q.name];var ba=E;g&&g.identifier&&!0===Q.bindToController&&(ba=g.instance);r(E.$$isolateBindings=Q.$$isolateBindings,function(a,d){var e=a.attrName,f=a.optional,g,l,h,k;switch(a.mode){case "@":P.$observe(e,
function(a){ba[d]=a});P.$$observers[e].$$scope=c;P[e]&&(ba[d]=b(P[e])(c));break;case "=":if(f&&!P[e])break;l=F(P[e]);k=l.literal?ia:function(a,b){return a===b||a!==a&&b!==b};h=l.assign||function(){g=ba[d]=l(c);throw ma("nonassign",P[e],Q.name);};g=ba[d]=l(c);f=function(a){k(a,ba[d])||(k(a,g)?h(c,a=ba[d]):ba[d]=a);return g=a};f.$stateful=!0;f=a.collection?c.$watchCollection(P[e],f):c.$watch(F(P[e],f),null,l.literal);E.$on("$destroy",f);break;case "&":l=F(P[e]),ba[d]=function(a){return l(c,a)}}})}$&&
(r($,function(a){a()}),$=null);g=0;for(m=k.length;g<m;g++)s=k[g],Z(s,s.isolateScope?E:c,X,P,s.require&&M(s.directiveName,s.require,X,C),ib);var Wb=c;Q&&(Q.template||null===Q.templateUrl)&&(Wb=E);a&&a(Wb,f.childNodes,u,l);for(g=p.length-1;0<=g;g--)s=p[g],Z(s,s.isolateScope?E:c,X,P,s.require&&M(s.directiveName,s.require,X,C),ib)}m=m||{};for(var E=-Number.MAX_VALUE,C,O=m.controllerDirectives,$,Q=m.newIsolateScopeDirective,na=m.templateDirective,fa=m.nonTlbTranscludeDirective,la=!1,D=!1,A=m.hasElementTranscludeDirective,
w=e.$$element=B(d),J,da,V,hb=f,za,K=0,R=a.length;K<R;K++){J=a[K];var Pa=J.$$start,U=J.$$end;Pa&&(w=ba(d,Pa,U));V=u;if(E>J.priority)break;if(V=J.scope)J.templateUrl||(L(V)?(Oa("new/isolated scope",Q||C,J,w),Q=J):Oa("new/isolated scope",Q,J,w)),C=C||J;da=J.name;!J.templateUrl&&J.controller&&(V=J.controller,O=O||{},Oa("'"+da+"' controller",O[da],J,w),O[da]=J);if(V=J.transclude)la=!0,J.$$tlb||(Oa("transclusion",fa,J,w),fa=J),"element"==V?(A=!0,E=J.priority,V=w,w=e.$$element=B(W.createComment(" "+da+": "+
e[da]+" ")),d=w[0],T(g,$a.call(V,0),d),hb=G(V,f,E,l&&l.name,{nonTlbTranscludeDirective:fa})):(V=B(Ub(d)).contents(),w.empty(),hb=G(V,f));if(J.template)if(D=!0,Oa("template",na,J,w),na=J,V=z(J.template)?J.template(w,e):J.template,V=Sc(V),J.replace){l=J;V=Sb.test(V)?Tc(Xb(J.templateNamespace,N(V))):[];d=V[0];if(1!=V.length||d.nodeType!==qa)throw ma("tplrt",da,"");T(g,w,d);R={$attr:{}};V=X(d,[],R);var aa=a.splice(K+1,a.length-(K+1));Q&&y(V);a=a.concat(V).concat(aa);S(e,R);R=a.length}else w.html(V);if(J.templateUrl)D=
!0,Oa("template",na,J,w),na=J,J.replace&&(l=J),I=of(a.splice(K,a.length-K),w,e,g,la&&hb,k,p,{controllerDirectives:O,newIsolateScopeDirective:Q,templateDirective:na,nonTlbTranscludeDirective:fa}),R=a.length;else if(J.compile)try{za=J.compile(w,e,hb),z(za)?s(null,za,Pa,U):za&&s(za.pre,za.post,Pa,U)}catch(pf){c(pf,xa(w))}J.terminal&&(I.terminal=!0,E=Math.max(E,J.priority))}I.scope=C&&!0===C.scope;I.transcludeOnThisElement=la;I.elementTranscludeOnThisElement=A;I.templateOnThisElement=D;I.transclude=hb;
m.hasElementTranscludeDirective=A;return I}function y(a){for(var b=0,c=a.length;b<c;b++)a[b]=Ob(a[b],{$$isolateScope:!0})}function la(b,e,f,g,l,h,k){if(e===l)return null;l=null;if(d.hasOwnProperty(e)){var q;e=a.get(e+"Directive");for(var m=0,s=e.length;m<s;m++)try{q=e[m],(g===u||g>q.priority)&&-1!=q.restrict.indexOf(f)&&(h&&(q=Ob(q,{$$start:h,$$end:k})),b.push(q),l=q)}catch(I){c(I)}}return l}function D(b){if(d.hasOwnProperty(b))for(var c=a.get(b+"Directive"),e=0,f=c.length;e<f;e++)if(b=c[e],b.multiElement)return!0;
return!1}function S(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;r(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});r(b,function(b,f){"class"==f?(E(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function of(a,b,c,d,e,f,g,l){var h=[],k,q,p=b[0],m=a.shift(),t=Ob(m,{templateUrl:null,transclude:null,
replace:null,$$originalDirective:m}),I=z(m.templateUrl)?m.templateUrl(b,c):m.templateUrl,M=m.templateNamespace;b.empty();s(I).then(function(s){var F,v;s=Sc(s);if(m.replace){s=Sb.test(s)?Tc(Xb(M,N(s))):[];F=s[0];if(1!=s.length||F.nodeType!==qa)throw ma("tplrt",m.name,I);s={$attr:{}};T(d,b,F);var C=X(F,[],s);L(m.scope)&&y(C);a=C.concat(a);S(c,s)}else F=p,b.html(s);a.unshift(t);k=fa(a,F,c,e,b,m,f,g,l);r(d,function(a,c){a==F&&(d[c]=b[0])});for(q=O(b[0].childNodes,e);h.length;){s=h.shift();v=h.shift();
var G=h.shift(),P=h.shift(),C=b[0];if(!s.$$destroyed){if(v!==p){var $=v.className;l.hasElementTranscludeDirective&&m.replace||(C=Ub(F));T(G,B(v),C);E(B(C),$)}v=k.transcludeOnThisElement?Q(s,k.transclude,P):P;k(q,s,C,d,v)}}h=null});return function(a,b,c,d,e){a=e;b.$$destroyed||(h?h.push(b,c,d,a):(k.transcludeOnThisElement&&(a=Q(b,k.transclude,e)),k(q,b,c,d,a)))}}function da(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function Oa(a,b,c,d){if(b)throw ma("multidir",
b.name,c.name,a,xa(d));}function za(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&G.$$addBindingClass(a);return function(a,c){var e=c.parent();b||G.$$addBindingClass(e);G.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function Xb(a,b){a=K(a||"html");switch(a){case "svg":case "math":var c=W.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function R(a,b){if("srcdoc"==
b)return $.HTML;var c=wa(a);if("xlinkHref"==b||"form"==c&&"action"==b||"img"!=c&&("src"==b||"ngSrc"==b))return $.RESOURCE_URL}function Pa(a,c,d,e,f){var h=R(a,e);f=g[e]||f;var k=b(d,!0,h,f);if(k){if("multiple"===e&&"select"===wa(a))throw ma("selmulti",xa(a));c.push({priority:100,compile:function(){return{pre:function(a,c,g){c=g.$$observers||(g.$$observers={});if(l.test(e))throw ma("nodomevents");var p=g[e];p!==d&&(k=p&&b(p,!0,h,f),d=p);k&&(g[e]=k(a),(c[e]||(c[e]=[])).$$inter=!0,(g.$$observers&&g.$$observers[e].$$scope||
a).$watch(k,function(a,b){"class"===e&&a!=b?g.$updateClass(a,b):g.$set(e,a)}))}}}})}}function T(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,l;if(a)for(g=0,l=a.length;g<l;g++)if(a[g]==d){a[g++]=c;l=g+e-1;for(var h=a.length;g<h;g++,l++)l<h?a[g]=a[l]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=W.createDocumentFragment();a.appendChild(d);B(c).data(B(d).data());ta?(Qb=!0,ta.cleanData([d])):delete B.cache[d[B.expando]];d=1;for(e=b.length;d<e;d++)f=b[d],B(f).remove(),
a.appendChild(f),delete b[d];b[0]=c;b.length=1}function Y(a,b){return w(function(){return a.apply(null,arguments)},a,b)}function Z(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(l){c(l,xa(d))}}var Yb=function(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a};Yb.prototype={$normalize:ya,$addClass:function(a){a&&0<a.length&&I.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&I.removeClass(this.$$element,a)},$updateClass:function(a,
b){var c=Uc(a,b);c&&c.length&&I.addClass(this.$$element,c);(c=Uc(b,a))&&c.length&&I.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=this.$$element[0],g=Mc(f,a),l=kf(f,a),f=a;g?(this.$$element.prop(a,b),e=g):l&&(this[l]=b,f=l);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=uc(a,"-"));g=wa(this.$$element);if("a"===g&&"href"===a||"img"===g&&"src"===a)this[a]=b=M(b,"src"===a);else if("img"===g&&"srcset"===a){for(var g="",l=N(b),h=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,h=/\s/.test(l)?
h:/(,)/,l=l.split(h),h=Math.floor(l.length/2),k=0;k<h;k++)var q=2*k,g=g+M(N(l[q]),!0),g=g+(" "+N(l[q+1]));l=N(l[2*k]).split(/\s/);g+=M(N(l[0]),!0);2===l.length&&(g+=" "+N(l[1]));this[a]=b=g}!1!==d&&(null===b||b===u?this.$$element.removeAttr(e):this.$$element.attr(e,b));(a=this.$$observers)&&r(a[f],function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=ja()),e=d[a]||(d[a]=[]);e.push(b);m.$evalAsync(function(){!e.$$inter&&c.hasOwnProperty(a)&&b(c[a])});
return function(){Ya(e,b)}}};var V=b.startSymbol(),na=b.endSymbol(),Sc="{{"==V||"}}"==na?ra:function(a){return a.replace(/\{\{/g,V).replace(/}}/g,na)},U=/^ngAttr[A-Z]/;G.$$addBindingInfo=k?function(a,b){var c=a.data("$binding")||[];H(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:A;G.$$addBindingClass=k?function(a){E(a,"ng-binding")}:A;G.$$addScopeInfo=k?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:A;G.$$addScopeClass=k?function(a,b){E(a,b?"ng-isolate-scope":
"ng-scope")}:A;return G}]}function ya(b){return fb(b.replace(Rc,""))}function Uc(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),f=0;a:for(;f<d.length;f++){for(var g=d[f],h=0;h<e.length;h++)if(g==e[h])continue a;c+=(0<c.length?" ":"")+g}return c}function Tc(b){b=B(b);var a=b.length;if(1>=a)return b;for(;a--;)8===b[a].nodeType&&qf.call(b,a,1);return b}function Fe(){var b={},a=!1,c=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(a,c){Ma(a,"controller");L(a)?w(b,a):b[a]=c};this.allowGlobals=function(){a=
!0};this.$get=["$injector","$window",function(d,e){function f(a,b,c,d){if(!a||!L(a.$scope))throw S("$controller")("noscp",d,b);a.$scope[b]=c}return function(g,h,l,k){var n,p,q;l=!0===l;k&&x(k)&&(q=k);if(x(g)){k=g.match(c);if(!k)throw rf("ctrlfmt",g);p=k[1];q=q||k[3];g=b.hasOwnProperty(p)?b[p]:wc(h.$scope,p,!0)||(a?wc(e,p,!0):u);La(g,p,!0)}if(l)return l=(H(g)?g[g.length-1]:g).prototype,n=Object.create(l||null),q&&f(h,q,n,p||g.name),w(function(){d.invoke(g,n,h,p);return n},{instance:n,identifier:q});
n=d.instantiate(g,h,p);q&&f(h,q,n,p||g.name);return n}}]}function Ge(){this.$get=["$window",function(b){return B(b.document)}]}function He(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function Zb(b,a){if(x(b)){var c=b.replace(sf,"").trim();if(c){var d=a("Content-Type");(d=d&&0===d.indexOf(Vc))||(d=(d=c.match(tf))&&uf[d[0]].test(c));d&&(b=pc(c))}}return b}function Wc(b){var a=ja(),c,d,e;if(!b)return a;r(b.split("\n"),function(b){e=b.indexOf(":");c=K(N(b.substr(0,
e)));d=N(b.substr(e+1));c&&(a[c]=a[c]?a[c]+", "+d:d)});return a}function Xc(b){var a=L(b)?b:u;return function(c){a||(a=Wc(b));return c?(c=a[K(c)],void 0===c&&(c=null),c):a}}function Yc(b,a,c,d){if(z(d))return d(b,a,c);r(d,function(d){b=d(b,a,c)});return b}function Ke(){var b=this.defaults={transformResponse:[Zb],transformRequest:[function(a){return L(a)&&"[object File]"!==Ca.call(a)&&"[object Blob]"!==Ca.call(a)&&"[object FormData]"!==Ca.call(a)?ab(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},
post:sa($b),put:sa($b),patch:sa($b)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},a=!1;this.useApplyAsync=function(b){return y(b)?(a=!!b,this):a};var c=this.interceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(d,e,f,g,h,l){function k(a){function c(a){var b=w({},a);b.data=a.data?Yc(a.data,a.headers,a.status,e.transformResponse):a.data;a=a.status;return 200<=a&&300>a?b:h.reject(b)}function d(a){var b,c={};r(a,function(a,d){z(a)?(b=
a(),null!=b&&(c[d]=b)):c[d]=a});return c}if(!ca.isObject(a))throw S("$http")("badreq",a);var e=w({method:"get",transformRequest:b.transformRequest,transformResponse:b.transformResponse},a);e.headers=function(a){var c=b.headers,e=w({},a.headers),f,g,c=w({},c.common,c[K(a.method)]);a:for(f in c){a=K(f);for(g in e)if(K(g)===a)continue a;e[f]=c[f]}return d(e)}(a);e.method=vb(e.method);var f=[function(a){var d=a.headers,e=Yc(a.data,Xc(d),u,a.transformRequest);D(e)&&r(d,function(a,b){"content-type"===K(b)&&
delete d[b]});D(a.withCredentials)&&!D(b.withCredentials)&&(a.withCredentials=b.withCredentials);return n(a,e).then(c,c)},u],g=h.when(e);for(r(t,function(a){(a.request||a.requestError)&&f.unshift(a.request,a.requestError);(a.response||a.responseError)&&f.push(a.response,a.responseError)});f.length;){a=f.shift();var l=f.shift(),g=g.then(a,l)}g.success=function(a){La(a,"fn");g.then(function(b){a(b.data,b.status,b.headers,e)});return g};g.error=function(a){La(a,"fn");g.then(null,function(b){a(b.data,
b.status,b.headers,e)});return g};return g}function n(c,f){function l(b,c,d,e){function f(){m(c,b,d,e)}E&&(200<=b&&300>b?E.put(Q,[b,c,Wc(d),e]):E.remove(Q));a?g.$applyAsync(f):(f(),g.$$phase||g.$apply())}function m(a,b,d,e){b=-1<=b?b:0;(200<=b&&300>b?I.resolve:I.reject)({data:a,status:b,headers:Xc(d),config:c,statusText:e})}function n(a){m(a.data,a.status,sa(a.headers()),a.statusText)}function t(){var a=k.pendingRequests.indexOf(c);-1!==a&&k.pendingRequests.splice(a,1)}var I=h.defer(),M=I.promise,
E,G,O=c.headers,Q=p(c.url,c.params);k.pendingRequests.push(c);M.then(t,t);!c.cache&&!b.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(E=L(c.cache)?c.cache:L(b.cache)?b.cache:q);E&&(G=E.get(Q),y(G)?G&&z(G.then)?G.then(n,n):H(G)?m(G[1],G[0],sa(G[2]),G[3]):m(G,200,{},"OK"):E.put(Q,M));D(G)&&((G=Zc(c.url)?e.cookies()[c.xsrfCookieName||b.xsrfCookieName]:u)&&(O[c.xsrfHeaderName||b.xsrfHeaderName]=G),d(c.method,Q,f,l,O,c.timeout,c.withCredentials,c.responseType));return M}function p(a,b){if(!b)return a;
var c=[];Ed(b,function(a,b){null===a||D(a)||(H(a)||(a=[a]),r(a,function(a){L(a)&&(a=ha(a)?a.toISOString():ab(a));c.push(Ea(b)+"="+Ea(a))}))});0<c.length&&(a+=(-1==a.indexOf("?")?"?":"&")+c.join("&"));return a}var q=f("$http"),t=[];r(c,function(a){t.unshift(x(a)?l.get(a):l.invoke(a))});k.pendingRequests=[];(function(a){r(arguments,function(a){k[a]=function(b,c){return k(w(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){r(arguments,function(a){k[a]=function(b,c,d){return k(w(d||
{},{method:a,url:b,data:c}))}})})("post","put","patch");k.defaults=b;return k}]}function vf(){return new R.XMLHttpRequest}function Le(){this.$get=["$browser","$window","$document",function(b,a,c){return wf(b,vf,b.defer,a.angular.callbacks,c[0])}]}function wf(b,a,c,d,e){function f(a,b,c){var f=e.createElement("script"),n=null;f.type="text/javascript";f.src=a;f.async=!0;n=function(a){f.removeEventListener("load",n,!1);f.removeEventListener("error",n,!1);e.body.removeChild(f);f=null;var g=-1,t="unknown";
a&&("load"!==a.type||d[b].called||(a={type:"error"}),t=a.type,g="error"===a.type?404:200);c&&c(g,t)};f.addEventListener("load",n,!1);f.addEventListener("error",n,!1);e.body.appendChild(f);return n}return function(e,h,l,k,n,p,q,t){function s(){m&&m();C&&C.abort()}function F(a,d,e,f,g){I!==u&&c.cancel(I);m=C=null;a(d,e,f,g);b.$$completeOutstandingRequest(A)}b.$$incOutstandingRequestCount();h=h||b.url();if("jsonp"==K(e)){var v="_"+(d.counter++).toString(36);d[v]=function(a){d[v].data=a;d[v].called=!0};
var m=f(h.replace("JSON_CALLBACK","angular.callbacks."+v),v,function(a,b){F(k,a,d[v].data,"",b);d[v]=A})}else{var C=a();C.open(e,h,!0);r(n,function(a,b){y(a)&&C.setRequestHeader(b,a)});C.onload=function(){var a=C.statusText||"",b="response"in C?C.response:C.responseText,c=1223===C.status?204:C.status;0===c&&(c=b?200:"file"==Aa(h).protocol?404:0);F(k,c,b,C.getAllResponseHeaders(),a)};e=function(){F(k,-1,null,null,"")};C.onerror=e;C.onabort=e;q&&(C.withCredentials=!0);if(t)try{C.responseType=t}catch($){if("json"!==
t)throw $;}C.send(l||null)}if(0<p)var I=c(s,p);else p&&z(p.then)&&p.then(s)}}function Ie(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function f(a){return"\\\\\\"+a}function g(f,g,t,s){function F(c){return c.replace(k,b).replace(n,a)}function v(a){try{var b=a;a=t?e.getTrusted(t,b):e.valueOf(b);var c;if(s&&!y(a))c=a;else if(null==a)c="";else{switch(typeof a){case "string":break;
case "number":a=""+a;break;default:a=ab(a)}c=a}return c}catch(g){c=ac("interr",f,g.toString()),d(c)}}s=!!s;for(var m,C,r=0,I=[],M=[],E=f.length,G=[],O=[];r<E;)if(-1!=(m=f.indexOf(b,r))&&-1!=(C=f.indexOf(a,m+h)))r!==m&&G.push(F(f.substring(r,m))),r=f.substring(m+h,C),I.push(r),M.push(c(r,v)),r=C+l,O.push(G.length),G.push("");else{r!==E&&G.push(F(f.substring(r)));break}if(t&&1<G.length)throw ac("noconcat",f);if(!g||I.length){var Q=function(a){for(var b=0,c=I.length;b<c;b++){if(s&&D(a[b]))return;G[O[b]]=
a[b]}return G.join("")};return w(function(a){var b=0,c=I.length,e=Array(c);try{for(;b<c;b++)e[b]=M[b](a);return Q(e)}catch(g){a=ac("interr",f,g.toString()),d(a)}},{exp:f,expressions:I,$$watchDelegate:function(a,b,c){var d;return a.$watchGroup(M,function(c,e){var f=Q(c);z(b)&&b.call(this,f,c!==e?d:f,a);d=f},c)}})}}var h=b.length,l=a.length,k=new RegExp(b.replace(/./g,f),"g"),n=new RegExp(a.replace(/./g,f),"g");g.startSymbol=function(){return b};g.endSymbol=function(){return a};return g}]}function Je(){this.$get=
["$rootScope","$window","$q","$$q",function(b,a,c,d){function e(e,h,l,k){var n=a.setInterval,p=a.clearInterval,q=0,t=y(k)&&!k,s=(t?d:c).defer(),F=s.promise;l=y(l)?l:0;F.then(null,null,e);F.$$intervalId=n(function(){s.notify(q++);0<l&&q>=l&&(s.resolve(q),p(F.$$intervalId),delete f[F.$$intervalId]);t||b.$apply()},h);f[F.$$intervalId]=s;return F}var f={};e.cancel=function(b){return b&&b.$$intervalId in f?(f[b.$$intervalId].reject("canceled"),a.clearInterval(b.$$intervalId),delete f[b.$$intervalId],!0):
!1};return e}]}function Rd(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a",ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"]},pluralCat:function(b){return 1===b?"one":"other"}}}}function bc(b){b=b.split("/");for(var a=b.length;a--;)b[a]=sb(b[a]);
return b.join("/")}function $c(b,a){var c=Aa(b);a.$$protocol=c.protocol;a.$$host=c.hostname;a.$$port=aa(c.port)||xf[c.protocol]||null}function ad(b,a){var c="/"!==b.charAt(0);c&&(b="/"+b);var d=Aa(b);a.$$path=decodeURIComponent(c&&"/"===d.pathname.charAt(0)?d.pathname.substring(1):d.pathname);a.$$search=rc(d.search);a.$$hash=decodeURIComponent(d.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function ua(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function Ga(b){var a=b.indexOf("#");
return-1==a?b:b.substr(0,a)}function Gb(b){return b.replace(/(#.+)|#$/,"$1")}function cc(b,a,c){this.$$html5=!0;c=c||"";$c(b,this);this.$$parse=function(b){var c=ua(a,b);if(!x(c))throw Hb("ipthprfx",b,a);ad(c,this);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var b=Pb(this.$$search),c=this.$$hash?"#"+sb(this.$$hash):"";this.$$url=bc(this.$$path)+(b?"?"+b:"")+c;this.$$absUrl=a+this.$$url.substr(1)};this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),
!0;var f,g;(f=ua(b,d))!==u?(g=f,g=(f=ua(c,f))!==u?a+(ua("/",f)||f):b+g):(f=ua(a,d))!==u?g=a+f:a==d+"/"&&(g=a);g&&this.$$parse(g);return!!g}}function dc(b,a,c){$c(b,this);this.$$parse=function(d){var e=ua(b,d)||ua(a,d),f;D(e)||"#"!==e.charAt(0)?this.$$html5?f=e:(f="",D(e)&&(b=d,this.replace())):(f=ua(c,e),D(f)&&(f=e));ad(f,this);d=this.$$path;var e=b,g=/^\/[A-Z]:(\/.*)/;0===f.indexOf(e)&&(f=f.replace(e,""));g.exec(f)||(d=(f=g.exec(d))?f[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var a=
Pb(this.$$search),e=this.$$hash?"#"+sb(this.$$hash):"";this.$$url=bc(this.$$path)+(a?"?"+a:"")+e;this.$$absUrl=b+(this.$$url?c+this.$$url:"")};this.$$parseLinkUrl=function(a,c){return Ga(b)==Ga(a)?(this.$$parse(a),!0):!1}}function bd(b,a,c){this.$$html5=!0;dc.apply(this,arguments);this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;b==Ga(d)?f=d:(g=ua(a,d))?f=b+c+g:a===d+"/"&&(f=a);f&&this.$$parse(f);return!!f};this.$$compose=function(){var a=Pb(this.$$search),
e=this.$$hash?"#"+sb(this.$$hash):"";this.$$url=bc(this.$$path)+(a?"?"+a:"")+e;this.$$absUrl=b+c+this.$$url}}function Ib(b){return function(){return this[b]}}function cd(b,a){return function(c){if(D(c))return this[b];this[b]=a(c);this.$$compose();return this}}function Me(){var b="",a={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(a){return y(a)?(b=a,this):b};this.html5Mode=function(b){return Xa(b)?(a.enabled=b,this):L(b)?(Xa(b.enabled)&&(a.enabled=b.enabled),Xa(b.requireBase)&&
(a.requireBase=b.requireBase),Xa(b.rewriteLinks)&&(a.rewriteLinks=b.rewriteLinks),this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(c,d,e,f,g){function h(a,b,c){var e=k.url(),f=k.$$state;try{d.url(a,b,c),k.$$state=d.state()}catch(g){throw k.url(e),k.$$state=f,g;}}function l(a,b){c.$broadcast("$locationChangeSuccess",k.absUrl(),a,k.$$state,b)}var k,n;n=d.baseHref();var p=d.url(),q;if(a.enabled){if(!n&&a.requireBase)throw Hb("nobase");q=p.substring(0,p.indexOf("/",
p.indexOf("//")+2))+(n||"/");n=e.history?cc:bd}else q=Ga(p),n=dc;var t=q.substr(0,Ga(q).lastIndexOf("/")+1);k=new n(q,t,"#"+b);k.$$parseLinkUrl(p,p);k.$$state=d.state();var s=/^\s*(javascript|mailto):/i;f.on("click",function(b){if(a.rewriteLinks&&!b.ctrlKey&&!b.metaKey&&!b.shiftKey&&2!=b.which&&2!=b.button){for(var e=B(b.target);"a"!==wa(e[0]);)if(e[0]===f[0]||!(e=e.parent())[0])return;var l=e.prop("href"),h=e.attr("href")||e.attr("xlink:href");L(l)&&"[object SVGAnimatedString]"===l.toString()&&(l=
Aa(l.animVal).href);s.test(l)||!l||e.attr("target")||b.isDefaultPrevented()||!k.$$parseLinkUrl(l,h)||(b.preventDefault(),k.absUrl()!=d.url()&&(c.$apply(),g.angular["ff-684208-preventDefault"]=!0))}});Gb(k.absUrl())!=Gb(p)&&d.url(k.absUrl(),!0);var F=!0;d.onUrlChange(function(a,b){D(ua(t,a))?g.location.href=a:(c.$evalAsync(function(){var d=k.absUrl(),e=k.$$state,f;k.$$parse(a);k.$$state=b;f=c.$broadcast("$locationChangeStart",a,d,b,e).defaultPrevented;k.absUrl()===a&&(f?(k.$$parse(d),k.$$state=e,h(d,
!1,e)):(F=!1,l(d,e)))}),c.$$phase||c.$digest())});c.$watch(function(){var a=Gb(d.url()),b=Gb(k.absUrl()),f=d.state(),g=k.$$replace,q=a!==b||k.$$html5&&e.history&&f!==k.$$state;if(F||q)F=!1,c.$evalAsync(function(){var b=k.absUrl(),d=c.$broadcast("$locationChangeStart",b,a,k.$$state,f).defaultPrevented;k.absUrl()===b&&(d?(k.$$parse(a),k.$$state=f):(q&&h(b,g,f===k.$$state?null:k.$$state),l(a,f)))});k.$$replace=!1});return k}]}function Ne(){var b=!0,a=this;this.debugEnabled=function(a){return y(a)?(b=
a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||A;a=!1;try{a=!!e.apply}catch(l){}return a?function(){var a=[];r(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),
debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function va(b,a){if("__defineGetter__"===b||"__defineSetter__"===b||"__lookupGetter__"===b||"__lookupSetter__"===b||"__proto__"===b)throw ga("isecfld",a);return b}function dd(b,a){b+="";if(!x(b))throw ga("iseccst",a);return b}function oa(b,a){if(b){if(b.constructor===b)throw ga("isecfn",a);if(b.window===b)throw ga("isecwindow",a);if(b.children&&(b.nodeName||b.prop&&b.attr&&b.find))throw ga("isecdom",a);if(b===Object)throw ga("isecobj",
a);}return b}function ec(b){return b.constant}function jb(b,a,c,d,e){oa(b,e);oa(a,e);c=c.split(".");for(var f,g=0;1<c.length;g++){f=va(c.shift(),e);var h=0===g&&a&&a[f]||b[f];h||(h={},b[f]=h);b=oa(h,e)}f=va(c.shift(),e);oa(b[f],e);return b[f]=d}function Qa(b){return"constructor"==b}function ed(b,a,c,d,e,f,g){va(b,f);va(a,f);va(c,f);va(d,f);va(e,f);var h=function(a){return oa(a,f)},l=g||Qa(b)?h:ra,k=g||Qa(a)?h:ra,n=g||Qa(c)?h:ra,p=g||Qa(d)?h:ra,q=g||Qa(e)?h:ra;return function(f,g){var h=g&&g.hasOwnProperty(b)?
g:f;if(null==h)return h;h=l(h[b]);if(!a)return h;if(null==h)return u;h=k(h[a]);if(!c)return h;if(null==h)return u;h=n(h[c]);if(!d)return h;if(null==h)return u;h=p(h[d]);return e?null==h?u:h=q(h[e]):h}}function yf(b,a){return function(c,d){return b(c,d,oa,a)}}function zf(b,a,c){var d=a.expensiveChecks,e=d?Af:Bf,f=e[b];if(f)return f;var g=b.split("."),h=g.length;if(a.csp)f=6>h?ed(g[0],g[1],g[2],g[3],g[4],c,d):function(a,b){var e=0,f;do f=ed(g[e++],g[e++],g[e++],g[e++],g[e++],c,d)(a,b),b=u,a=f;while(e<
h);return f};else{var l="";d&&(l+="s = eso(s, fe);\nl = eso(l, fe);\n");var k=d;r(g,function(a,b){va(a,c);var e=(b?"s":'((l&&l.hasOwnProperty("'+a+'"))?l:s)')+"."+a;if(d||Qa(a))e="eso("+e+", fe)",k=!0;l+="if(s == null) return undefined;\ns="+e+";\n"});l+="return s;";a=new Function("s","l","eso","fe",l);a.toString=ea(l);k&&(a=yf(a,c));f=a}f.sharedGetter=!0;f.assign=function(a,c,d){return jb(a,d,b,c,b)};return e[b]=f}function fc(b){return z(b.valueOf)?b.valueOf():Cf.call(b)}function Oe(){var b=ja(),
a=ja();this.$get=["$filter","$sniffer",function(c,d){function e(a){var b=a;a.sharedGetter&&(b=function(b,c){return a(b,c)},b.literal=a.literal,b.constant=a.constant,b.assign=a.assign);return b}function f(a,b){for(var c=0,d=a.length;c<d;c++){var e=a[c];e.constant||(e.inputs?f(e.inputs,b):-1===b.indexOf(e)&&b.push(e))}return b}function g(a,b){return null==a||null==b?a===b:"object"===typeof a&&(a=fc(a),"object"===typeof a)?!1:a===b||a!==a&&b!==b}function h(a,b,c,d){var e=d.$$inputs||(d.$$inputs=f(d.inputs,
[])),l;if(1===e.length){var h=g,e=e[0];return a.$watch(function(a){var b=e(a);g(b,h)||(l=d(a),h=b&&fc(b));return l},b,c)}for(var k=[],q=0,p=e.length;q<p;q++)k[q]=g;return a.$watch(function(a){for(var b=!1,c=0,f=e.length;c<f;c++){var h=e[c](a);if(b||(b=!g(h,k[c])))k[c]=h&&fc(h)}b&&(l=d(a));return l},b,c)}function l(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},function(a,c,d){f=a;z(b)&&b.apply(this,arguments);y(a)&&d.$$postDigest(function(){y(f)&&e()})},c)}function k(a,b,c,d){function e(a){var b=
!0;r(a,function(a){y(a)||(b=!1)});return b}var f,g;return f=a.$watch(function(a){return d(a)},function(a,c,d){g=a;z(b)&&b.call(this,a,c,d);e(a)&&d.$$postDigest(function(){e(g)&&f()})},c)}function n(a,b,c,d){var e;return e=a.$watch(function(a){return d(a)},function(a,c,d){z(b)&&b.apply(this,arguments);e()},c)}function p(a,b){if(!b)return a;var c=a.$$watchDelegate,c=c!==k&&c!==l?function(c,d){var e=a(c,d);return b(e,c,d)}:function(c,d){var e=a(c,d),f=b(e,c,d);return y(e)?f:e};a.$$watchDelegate&&a.$$watchDelegate!==
h?c.$$watchDelegate=a.$$watchDelegate:b.$stateful||(c.$$watchDelegate=h,c.inputs=[a]);return c}var q={csp:d.csp,expensiveChecks:!1},t={csp:d.csp,expensiveChecks:!0};return function(d,f,g){var m,r,u;switch(typeof d){case "string":u=d=d.trim();var I=g?a:b;m=I[u];m||(":"===d.charAt(0)&&":"===d.charAt(1)&&(r=!0,d=d.substring(2)),g=g?t:q,m=new gc(g),m=(new kb(m,c,g)).parse(d),m.constant?m.$$watchDelegate=n:r?(m=e(m),m.$$watchDelegate=m.literal?k:l):m.inputs&&(m.$$watchDelegate=h),I[u]=m);return p(m,f);
case "function":return p(d,f);default:return p(A,f)}}}]}function Qe(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return fd(function(a){b.$evalAsync(a)},a)}]}function Re(){this.$get=["$browser","$exceptionHandler",function(b,a){return fd(function(a){b.defer(a)},a)}]}function fd(b,a){function c(a,b,c){function d(b){return function(c){e||(e=!0,b.call(a,c))}}var e=!1;return[d(b),d(c)]}function d(){this.$$state={status:0}}function e(a,b){return function(c){b.call(a,c)}}function f(c){!c.processScheduled&&
c.pending&&(c.processScheduled=!0,b(function(){var b,d,e;e=c.pending;c.processScheduled=!1;c.pending=u;for(var f=0,g=e.length;f<g;++f){d=e[f][0];b=e[f][c.status];try{z(b)?d.resolve(b(c.value)):1===c.status?d.resolve(c.value):d.reject(c.value)}catch(l){d.reject(l),a(l)}}}))}function g(){this.promise=new d;this.resolve=e(this,this.resolve);this.reject=e(this,this.reject);this.notify=e(this,this.notify)}var h=S("$q",TypeError);d.prototype={then:function(a,b,c){var d=new g;this.$$state.pending=this.$$state.pending||
[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&f(this.$$state);return d.promise},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return k(b,!0,a)},function(b){return k(b,!1,a)},b)}};g.prototype={resolve:function(a){this.promise.$$state.status||(a===this.promise?this.$$reject(h("qcycle",a)):this.$$resolve(a))},$$resolve:function(b){var d,e;e=c(this,this.$$resolve,this.$$reject);try{if(L(b)||z(b))d=b&&b.then;z(d)?(this.promise.$$state.status=
-1,d.call(b,e[0],e[1],this.notify)):(this.promise.$$state.value=b,this.promise.$$state.status=1,f(this.promise.$$state))}catch(g){e[1](g),a(g)}},reject:function(a){this.promise.$$state.status||this.$$reject(a)},$$reject:function(a){this.promise.$$state.value=a;this.promise.$$state.status=2;f(this.promise.$$state)},notify:function(c){var d=this.promise.$$state.pending;0>=this.promise.$$state.status&&d&&d.length&&b(function(){for(var b,e,f=0,g=d.length;f<g;f++){e=d[f][0];b=d[f][3];try{e.notify(z(b)?
b(c):c)}catch(l){a(l)}}})}};var l=function(a,b){var c=new g;b?c.resolve(a):c.reject(a);return c.promise},k=function(a,b,c){var d=null;try{z(c)&&(d=c())}catch(e){return l(e,!1)}return d&&z(d.then)?d.then(function(){return l(a,b)},function(a){return l(a,!1)}):l(a,b)},n=function(a,b,c,d){var e=new g;e.resolve(a);return e.promise.then(b,c,d)},p=function t(a){if(!z(a))throw h("norslvr",a);if(!(this instanceof t))return new t(a);var b=new g;a(function(a){b.resolve(a)},function(a){b.reject(a)});return b.promise};
p.defer=function(){return new g};p.reject=function(a){var b=new g;b.reject(a);return b.promise};p.when=n;p.all=function(a){var b=new g,c=0,d=H(a)?[]:{};r(a,function(a,e){c++;n(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise};return p}function $e(){this.$get=["$window","$timeout",function(b,a){function c(){for(var a=0;a<n.length;a++){var b=n[a];b&&(n[a]=null,b())}k=n.length=0}function d(a){var b=
n.length;k++;n.push(a);0===b&&(l=h(c));return function(){0<=b&&(b=n[b]=null,0===--k&&l&&(l(),l=null,n.length=0))}}var e=b.requestAnimationFrame||b.webkitRequestAnimationFrame,f=b.cancelAnimationFrame||b.webkitCancelAnimationFrame||b.webkitCancelRequestAnimationFrame,g=!!e,h=g?function(a){var b=e(a);return function(){f(b)}}:function(b){var c=a(b,16.66,!1);return function(){a.cancel(c)}};d.supported=g;var l,k=0,n=[];return d}]}function Pe(){function b(a){function b(){this.$$watchers=this.$$nextSibling=
this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$id=++rb;this.$$ChildScope=null}b.prototype=a;return b}var a=10,c=S("$rootScope"),d=null,e=null;this.digestTtl=function(b){arguments.length&&(a=b);return a};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(f,g,h,l){function k(a){a.currentScope.$$destroyed=!0}function n(){this.$id=++rb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=
null;this.$root=this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$isolateBindings=null}function p(a){if(v.$$phase)throw c("inprog",v.$$phase);v.$$phase=a}function q(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function t(){}function s(){for(;u.length;)try{u.shift()()}catch(a){g(a)}e=null}function F(){null===e&&(e=l.defer(function(){v.$apply(s)}))}n.prototype={constructor:n,$new:function(a,c){var d;c=c||this;a?
(d=new n,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=b(this)),d=new this.$$ChildScope);d.$parent=c;d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=d,c.$$childTail=d):c.$$childHead=c.$$childTail=d;(a||c!=this)&&d.$on("$destroy",k);return d},$watch:function(a,b,c){var e=h(a);if(e.$$watchDelegate)return e.$$watchDelegate(this,b,c,e);var f=this.$$watchers,g={fn:b,last:t,get:e,exp:a,eq:!!c};d=null;z(b)||(g.fn=A);f||(f=this.$$watchers=[]);f.unshift(g);return function(){Ya(f,
g);d=null}},$watchGroup:function(a,b){function c(){l=!1;h?(h=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,l=!1,h=!0;if(!a.length){var k=!0;g.$evalAsync(function(){k&&b(e,e,g)});return function(){k=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});r(a,function(a,b){var h=g.$watch(a,function(a,f){e[b]=a;d[b]=f;l||(l=!0,g.$evalAsync(c))});f.push(h)});return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,b){function c(a){e=
a;var b,d,g,l;if(!D(e)){if(L(e))if(Ta(e))for(f!==p&&(f=p,t=f.length=0,k++),a=e.length,t!==a&&(k++,f.length=t=a),b=0;b<a;b++)l=f[b],g=e[b],d=l!==l&&g!==g,d||l===g||(k++,f[b]=g);else{f!==n&&(f=n={},t=0,k++);a=0;for(b in e)e.hasOwnProperty(b)&&(a++,g=e[b],l=f[b],b in f?(d=l!==l&&g!==g,d||l===g||(k++,f[b]=g)):(t++,f[b]=g,k++));if(t>a)for(b in k++,f)e.hasOwnProperty(b)||(t--,delete f[b])}else f!==e&&(f=e,k++);return k}}c.$stateful=!0;var d=this,e,f,g,l=1<b.length,k=0,q=h(a,c),p=[],n={},m=!0,t=0;return this.$watch(q,
function(){m?(m=!1,b(e,e,d)):b(e,g,d);if(l)if(L(e))if(Ta(e)){g=Array(e.length);for(var a=0;a<e.length;a++)g[a]=e[a]}else for(a in g={},e)sc.call(e,a)&&(g[a]=e[a]);else g=e})},$digest:function(){var b,f,h,k,q,n,r=a,F,P=[],u,y;p("$digest");l.$$checkUrlChange();this===v&&null!==e&&(l.defer.cancel(e),s());d=null;do{n=!1;for(F=this;m.length;){try{y=m.shift(),y.scope.$eval(y.expression,y.locals)}catch(w){g(w)}d=null}a:do{if(k=F.$$watchers)for(q=k.length;q--;)try{if(b=k[q])if((f=b.get(F))!==(h=b.last)&&
!(b.eq?ia(f,h):"number"===typeof f&&"number"===typeof h&&isNaN(f)&&isNaN(h)))n=!0,d=b,b.last=b.eq?Da(f,null):f,b.fn(f,h===t?f:h,F),5>r&&(u=4-r,P[u]||(P[u]=[]),P[u].push({msg:z(b.exp)?"fn: "+(b.exp.name||b.exp.toString()):b.exp,newVal:f,oldVal:h}));else if(b===d){n=!1;break a}}catch(D){g(D)}if(!(k=F.$$childHead||F!==this&&F.$$nextSibling))for(;F!==this&&!(k=F.$$nextSibling);)F=F.$parent}while(F=k);if((n||m.length)&&!r--)throw v.$$phase=null,c("infdig",a,P);}while(n||m.length);for(v.$$phase=null;C.length;)try{C.shift()()}catch(B){g(B)}},
$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;if(this!==v){for(var b in this.$$listenerCount)q(this,this.$$listenerCount[b],b);a.$$childHead==this&&(a.$$childHead=this.$$nextSibling);a.$$childTail==this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=
this.$applyAsync=A;this.$on=this.$watch=this.$watchGroup=function(){return A};this.$$listeners={};this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=this.$$watchers=null}}},$eval:function(a,b){return h(a)(this,b)},$evalAsync:function(a,b){v.$$phase||m.length||l.defer(function(){m.length&&v.$digest()});m.push({scope:this,expression:a,locals:b})},$$postDigest:function(a){C.push(a)},$apply:function(a){try{return p("$apply"),this.$eval(a)}catch(b){g(b)}finally{v.$$phase=
null;try{v.$digest()}catch(c){throw g(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&u.push(b);F()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,q(e,1,a))}},$emit:function(a,b){var c=[],d,e=this,f=!1,l={name:a,targetScope:e,stopPropagation:function(){f=!0},preventDefault:function(){l.defaultPrevented=
!0},defaultPrevented:!1},h=Za([l],arguments,1),k,q;do{d=e.$$listeners[a]||c;l.currentScope=e;k=0;for(q=d.length;k<q;k++)if(d[k])try{d[k].apply(null,h)}catch(p){g(p)}else d.splice(k,1),k--,q--;if(f)return l.currentScope=null,l;e=e.$parent}while(e);l.currentScope=null;return l},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var f=Za([e],arguments,1),l,h;c=d;){e.currentScope=
c;d=c.$$listeners[a]||[];l=0;for(h=d.length;l<h;l++)if(d[l])try{d[l].apply(null,f)}catch(k){g(k)}else d.splice(l,1),l--,h--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var v=new n,m=v.$$asyncQueue=[],C=v.$$postDigestQueue=[],u=v.$$applyAsyncQueue=[];return v}]}function Sd(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=
function(a){return y(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return y(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,f;f=Aa(c).href;return""===f||f.match(e)?c:"unsafe:"+f}}}function Df(b){if("self"===b)return b;if(x(b)){if(-1<b.indexOf("***"))throw Ba("iwcard",b);b=gd(b).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return new RegExp("^"+b+"$")}if(Va(b))return new RegExp("^"+b.source+"$");throw Ba("imatcher");}function hd(b){var a=[];y(b)&&r(b,function(b){a.push(Df(b))});
return a}function Te(){this.SCE_CONTEXTS=pa;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=hd(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&(a=hd(b));return a};this.$get=["$injector",function(c){function d(a,b){return"self"===a?Zc(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};
return b}var f=function(a){throw Ba("unsafe");};c.has("$sanitize")&&(f=c.get("$sanitize"));var g=e(),h={};h[pa.HTML]=e(g);h[pa.CSS]=e(g);h[pa.URL]=e(g);h[pa.JS]=e(g);h[pa.RESOURCE_URL]=e(h[pa.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw Ba("icontext",a,b);if(null===b||b===u||""===b)return b;if("string"!==typeof b)throw Ba("itype",a);return new c(b)},getTrusted:function(c,e){if(null===e||e===u||""===e)return e;var g=h.hasOwnProperty(c)?h[c]:null;if(g&&e instanceof
g)return e.$$unwrapTrustedValue();if(c===pa.RESOURCE_URL){var g=Aa(e.toString()),p,q,t=!1;p=0;for(q=b.length;p<q;p++)if(d(b[p],g)){t=!0;break}if(t)for(p=0,q=a.length;p<q;p++)if(d(a[p],g)){t=!1;break}if(t)return e;throw Ba("insecurl",e.toString());}if(c===pa.HTML)return f(e);throw Ba("unsafe");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}function Se(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$parse","$sceDelegate",function(a,c){if(b&&
8>Ra)throw Ba("iequirks");var d=sa(pa);d.isEnabled=function(){return b};d.trustAs=c.trustAs;d.getTrusted=c.getTrusted;d.valueOf=c.valueOf;b||(d.trustAs=d.getTrusted=function(a,b){return b},d.valueOf=ra);d.parseAs=function(b,c){var e=a(c);return e.literal&&e.constant?e:a(c,function(a){return d.getTrusted(b,a)})};var e=d.parseAs,f=d.getTrusted,g=d.trustAs;r(pa,function(a,b){var c=K(b);d[fb("parse_as_"+c)]=function(b){return e(a,b)};d[fb("get_trusted_"+c)]=function(b){return f(a,b)};d[fb("trust_as_"+
c)]=function(b){return g(a,b)}});return d}]}function Ue(){this.$get=["$window","$document",function(b,a){var c={},d=aa((/android (\d+)/.exec(K((b.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||{}).userAgent),f=a[0]||{},g,h=/^(Moz|webkit|ms)(?=[A-Z])/,l=f.body&&f.body.style,k=!1,n=!1;if(l){for(var p in l)if(k=h.exec(p)){g=k[0];g=g.substr(0,1).toUpperCase()+g.substr(1);break}g||(g="WebkitOpacity"in l&&"webkit");k=!!("transition"in l||g+"Transition"in l);n=!!("animation"in l||g+"Animation"in
l);!d||k&&n||(k=x(f.body.style.webkitTransition),n=x(f.body.style.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hasEvent:function(a){if("input"===a&&11>=Ra)return!1;if(D(c[a])){var b=f.createElement("div");c[a]="on"+a in b}return c[a]},csp:db(),vendorPrefix:g,transitions:k,animations:n,android:d}}]}function We(){this.$get=["$templateCache","$http","$q","$sce",function(b,a,c,d){function e(f,g){e.totalPendingRequests++;x(f)&&b.get(f)||(f=d.getTrustedResourceUrl(f));var h=
a.defaults&&a.defaults.transformResponse;H(h)?h=h.filter(function(a){return a!==Zb}):h===Zb&&(h=null);return a.get(f,{cache:b,transformResponse:h})["finally"](function(){e.totalPendingRequests--}).then(function(a){return a.data},function(a){if(!g)throw ma("tpload",f);return c.reject(a)})}e.totalPendingRequests=0;return e}]}function Xe(){this.$get=["$rootScope","$browser","$location",function(b,a,c){return{findBindings:function(a,b,c){a=a.getElementsByClassName("ng-binding");var g=[];r(a,function(a){var d=
ca.element(a).data("$binding");d&&r(d,function(d){c?(new RegExp("(^|\\s)"+gd(b)+"(\\s|\\||$)")).test(d)&&g.push(a):-1!=d.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,c){for(var g=["ng-","data-ng-","ng\\:"],h=0;h<g.length;++h){var l=a.querySelectorAll("["+g[h]+"model"+(c?"=":"*=")+'"'+b+'"]');if(l.length)return l}},getLocation:function(){return c.url()},setLocation:function(a){a!==c.url()&&(c.url(a),b.$digest())},whenStable:function(b){a.notifyWhenNoOutstandingRequests(b)}}}]}function Ye(){this.$get=
["$rootScope","$browser","$q","$$q","$exceptionHandler",function(b,a,c,d,e){function f(f,l,k){var n=y(k)&&!k,p=(n?d:c).defer(),q=p.promise;l=a.defer(function(){try{p.resolve(f())}catch(a){p.reject(a),e(a)}finally{delete g[q.$$timeoutId]}n||b.$apply()},l);q.$$timeoutId=l;g[l]=p;return q}var g={};f.cancel=function(b){return b&&b.$$timeoutId in g?(g[b.$$timeoutId].reject("canceled"),delete g[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return f}]}function Aa(b){Ra&&(Z.setAttribute("href",b),b=Z.href);
Z.setAttribute("href",b);return{href:Z.href,protocol:Z.protocol?Z.protocol.replace(/:$/,""):"",host:Z.host,search:Z.search?Z.search.replace(/^\?/,""):"",hash:Z.hash?Z.hash.replace(/^#/,""):"",hostname:Z.hostname,port:Z.port,pathname:"/"===Z.pathname.charAt(0)?Z.pathname:"/"+Z.pathname}}function Zc(b){b=x(b)?Aa(b):b;return b.protocol===id.protocol&&b.host===id.host}function Ze(){this.$get=ea(R)}function Ec(b){function a(c,d){if(L(c)){var e={};r(c,function(b,c){e[c]=a(c,b)});return e}return b.factory(c+
"Filter",d)}this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];a("currency",jd);a("date",kd);a("filter",Ef);a("json",Ff);a("limitTo",Gf);a("lowercase",Hf);a("number",ld);a("orderBy",md);a("uppercase",If)}function Ef(){return function(b,a,c){if(!H(b))return b;var d;switch(null!==a?typeof a:"null"){case "function":break;case "boolean":case "null":case "number":case "string":d=!0;case "object":a=Jf(a,c,d);break;default:return b}return b.filter(a)}}function Jf(b,
a,c){var d=L(b)&&"$"in b;!0===a?a=ia:z(a)||(a=function(a,b){if(D(a))return!1;if(null===a||null===b)return a===b;if(L(a)||L(b))return!1;a=K(""+a);b=K(""+b);return-1!==a.indexOf(b)});return function(e){return d&&!L(e)?Ha(e,b.$,a,!1):Ha(e,b,a,c)}}function Ha(b,a,c,d,e){var f=null!==b?typeof b:"null",g=null!==a?typeof a:"null";if("string"===g&&"!"===a.charAt(0))return!Ha(b,a.substring(1),c,d);if(H(b))return b.some(function(b){return Ha(b,a,c,d)});switch(f){case "object":var h;if(d){for(h in b)if("$"!==
h.charAt(0)&&Ha(b[h],a,c,!0))return!0;return e?!1:Ha(b,a,c,!1)}if("object"===g){for(h in a)if(e=a[h],!z(e)&&!D(e)&&(f="$"===h,!Ha(f?b:b[h],e,c,f,f)))return!1;return!0}return c(b,a);case "function":return!1;default:return c(b,a)}}function jd(b){var a=b.NUMBER_FORMATS;return function(b,d,e){D(d)&&(d=a.CURRENCY_SYM);D(e)&&(e=a.PATTERNS[1].maxFrac);return null==b?b:nd(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,e).replace(/\u00A4/g,d)}}function ld(b){var a=b.NUMBER_FORMATS;return function(b,d){return null==
b?b:nd(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function nd(b,a,c,d,e){if(!isFinite(b)||L(b))return"";var f=0>b;b=Math.abs(b);var g=b+"",h="",l=[],k=!1;if(-1!==g.indexOf("e")){var n=g.match(/([\d\.]+)e(-?)(\d+)/);n&&"-"==n[2]&&n[3]>e+1?b=0:(h=g,k=!0)}if(k)0<e&&1>b&&(h=b.toFixed(e),b=parseFloat(h));else{g=(g.split(od)[1]||"").length;D(e)&&(e=Math.min(Math.max(a.minFrac,g),a.maxFrac));b=+(Math.round(+(b.toString()+"e"+e)).toString()+"e"+-e);var g=(""+b).split(od),k=g[0],g=g[1]||"",p=0,q=a.lgSize,
t=a.gSize;if(k.length>=q+t)for(p=k.length-q,n=0;n<p;n++)0===(p-n)%t&&0!==n&&(h+=c),h+=k.charAt(n);for(n=p;n<k.length;n++)0===(k.length-n)%q&&0!==n&&(h+=c),h+=k.charAt(n);for(;g.length<e;)g+="0";e&&"0"!==e&&(h+=d+g.substr(0,e))}0===b&&(f=!1);l.push(f?a.negPre:a.posPre,h,f?a.negSuf:a.posSuf);return l.join("")}function Jb(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function U(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<c||e>-c)e+=
c;0===e&&-12==c&&(e=12);return Jb(e,a,d)}}function Kb(b,a){return function(c,d){var e=c["get"+b](),f=vb(a?"SHORT"+b:b);return d[f][e]}}function pd(b){var a=(new Date(b,0,1)).getDay();return new Date(b,0,(4>=a?5:12)-a)}function qd(b){return function(a){var c=pd(a.getFullYear());a=+new Date(a.getFullYear(),a.getMonth(),a.getDate()+(4-a.getDay()))-+c;a=1+Math.round(a/6048E5);return Jb(a,b)}}function hc(b,a){return 0>=b.getFullYear()?a.ERAS[0]:a.ERAS[1]}function kd(b){function a(a){var b;if(b=a.match(c)){a=
new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,l=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=aa(b[9]+b[10]),g=aa(b[9]+b[11]));h.call(a,aa(b[1]),aa(b[2])-1,aa(b[3]));f=aa(b[4]||0)-f;g=aa(b[5]||0)-g;h=aa(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));l.call(a,f,g,h,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e,f){var g="",h=[],l,k;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;x(c)&&(c=Kf.test(c)?
aa(c):a(c));Y(c)&&(c=new Date(c));if(!ha(c))return c;for(;e;)(k=Lf.exec(e))?(h=Za(h,k,1),e=h.pop()):(h.push(e),e=null);f&&"UTC"===f&&(c=new Date(c.getTime()),c.setMinutes(c.getMinutes()+c.getTimezoneOffset()));r(h,function(a){l=Mf[a];g+=l?l(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function Ff(){return function(b,a){D(a)&&(a=2);return ab(b,a)}}function Gf(){return function(b,a){Y(b)&&(b=b.toString());return H(b)||x(b)?(a=Infinity===Math.abs(Number(a))?Number(a):
aa(a))?0<a?b.slice(0,a):b.slice(a):x(b)?"":[]:b}}function md(b){return function(a,c,d){function e(a,b){return b?function(b,c){return a(c,b)}:a}function f(a){switch(typeof a){case "number":case "boolean":case "string":return!0;default:return!1}}function g(a){return null===a?"null":"function"===typeof a.valueOf&&(a=a.valueOf(),f(a))||"function"===typeof a.toString&&(a=a.toString(),f(a))?a:""}function h(a,b){var c=typeof a,d=typeof b;c===d&&"object"===c&&(a=g(a),b=g(b));return c===d?("string"===c&&(a=
a.toLowerCase(),b=b.toLowerCase()),a===b?0:a<b?-1:1):c<d?-1:1}if(!Ta(a))return a;c=H(c)?c:[c];0===c.length&&(c=["+"]);c=c.map(function(a){var c=!1,d=a||ra;if(x(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))c="-"==a.charAt(0),a=a.substring(1);if(""===a)return e(h,c);d=b(a);if(d.constant){var f=d();return e(function(a,b){return h(a[f],b[f])},c)}}return e(function(a,b){return h(d(a),d(b))},c)});return $a.call(a).sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return 0},
d))}}function Ia(b){z(b)&&(b={link:b});b.restrict=b.restrict||"AC";return ea(b)}function rd(b,a,c,d,e){var f=this,g=[],h=f.$$parentForm=b.parent().controller("form")||Lb;f.$error={};f.$$success={};f.$pending=u;f.$name=e(a.name||a.ngForm||"")(c);f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;f.$submitted=!1;h.$addControl(f);f.$rollbackViewValue=function(){r(g,function(a){a.$rollbackViewValue()})};f.$commitViewValue=function(){r(g,function(a){a.$commitViewValue()})};f.$addControl=function(a){Ma(a.$name,
"input");g.push(a);a.$name&&(f[a.$name]=a)};f.$$renameControl=function(a,b){var c=a.$name;f[c]===a&&delete f[c];f[b]=a;a.$name=b};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];r(f.$pending,function(b,c){f.$setValidity(c,null,a)});r(f.$error,function(b,c){f.$setValidity(c,null,a)});r(f.$$success,function(b,c){f.$setValidity(c,null,a)});Ya(g,a)};sd({ctrl:this,$element:b,set:function(a,b,c){var d=a[b];d?-1===d.indexOf(c)&&d.push(c):a[b]=[c]},unset:function(a,b,c){var d=a[b];
d&&(Ya(d,c),0===d.length&&delete a[b])},parentForm:h,$animate:d});f.$setDirty=function(){d.removeClass(b,Sa);d.addClass(b,Mb);f.$dirty=!0;f.$pristine=!1;h.$setDirty()};f.$setPristine=function(){d.setClass(b,Sa,Mb+" ng-submitted");f.$dirty=!1;f.$pristine=!0;f.$submitted=!1;r(g,function(a){a.$setPristine()})};f.$setUntouched=function(){r(g,function(a){a.$setUntouched()})};f.$setSubmitted=function(){d.addClass(b,"ng-submitted");f.$submitted=!0;h.$setSubmitted()}}function ic(b){b.$formatters.push(function(a){return b.$isEmpty(a)?
a:a.toString()})}function lb(b,a,c,d,e,f){var g=K(a[0].type);if(!e.android){var h=!1;a.on("compositionstart",function(a){h=!0});a.on("compositionend",function(){h=!1;l()})}var l=function(b){k&&(f.defer.cancel(k),k=null);if(!h){var e=a.val();b=b&&b.type;"password"===g||c.ngTrim&&"false"===c.ngTrim||(e=N(e));(d.$viewValue!==e||""===e&&d.$$hasNativeValidators)&&d.$setViewValue(e,b)}};if(e.hasEvent("input"))a.on("input",l);else{var k,n=function(a,b,c){k||(k=f.defer(function(){k=null;b&&b.value===c||l(a)}))};
a.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||n(a,this,this.value)});if(e.hasEvent("paste"))a.on("paste cut",n)}a.on("change",l);d.$render=function(){a.val(d.$isEmpty(d.$viewValue)?"":d.$viewValue)}}function Nb(b,a){return function(c,d){var e,f;if(ha(c))return c;if(x(c)){'"'==c.charAt(0)&&'"'==c.charAt(c.length-1)&&(c=c.substring(1,c.length-1));if(Nf.test(c))return new Date(c);b.lastIndex=0;if(e=b.exec(c))return e.shift(),f=d?{yyyy:d.getFullYear(),MM:d.getMonth()+1,
dd:d.getDate(),HH:d.getHours(),mm:d.getMinutes(),ss:d.getSeconds(),sss:d.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},r(e,function(b,c){c<a.length&&(f[a[c]]=+b)}),new Date(f.yyyy,f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0)}return NaN}}function mb(b,a,c,d){return function(e,f,g,h,l,k,n){function p(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}function q(a){return y(a)?ha(a)?a:c(a):u}td(e,f,g,h);lb(e,f,g,h,l,k);var t=h&&h.$options&&h.$options.timezone,s;h.$$parserName=b;
h.$parsers.push(function(b){return h.$isEmpty(b)?null:a.test(b)?(b=c(b,s),"UTC"===t&&b.setMinutes(b.getMinutes()-b.getTimezoneOffset()),b):u});h.$formatters.push(function(a){if(a&&!ha(a))throw nb("datefmt",a);if(p(a)){if((s=a)&&"UTC"===t){var b=6E4*s.getTimezoneOffset();s=new Date(s.getTime()+b)}return n("date")(a,d,t)}s=null;return""});if(y(g.min)||g.ngMin){var r;h.$validators.min=function(a){return!p(a)||D(r)||c(a)>=r};g.$observe("min",function(a){r=q(a);h.$validate()})}if(y(g.max)||g.ngMax){var v;
h.$validators.max=function(a){return!p(a)||D(v)||c(a)<=v};g.$observe("max",function(a){v=q(a);h.$validate()})}}}function td(b,a,c,d){(d.$$hasNativeValidators=L(a[0].validity))&&d.$parsers.push(function(b){var c=a.prop("validity")||{};return c.badInput&&!c.typeMismatch?u:b})}function ud(b,a,c,d,e){if(y(d)){b=b(d);if(!b.constant)throw nb("constexpr",c,d);return b(a)}return e}function jc(b,a){b="ngClass"+b;return["$animate",function(c){function d(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],
n=0;n<b.length;n++)if(e==b[n])continue a;c.push(e)}return c}function e(a){if(!H(a)){if(x(a))return a.split(" ");if(L(a)){var b=[];r(a,function(a,c){a&&(b=b.concat(c.split(" ")))});return b}}return a}return{restrict:"AC",link:function(f,g,h){function l(a,b){var c=g.data("$classCounts")||{},d=[];r(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}function k(b){if(!0===a||f.$index%2===a){var k=e(b||[]);if(!n){var t=l(k,1);h.$addClass(t)}else if(!ia(b,
n)){var s=e(n),t=d(k,s),k=d(s,k),t=l(t,1),k=l(k,-1);t&&t.length&&c.addClass(g,t);k&&k.length&&c.removeClass(g,k)}}n=sa(b)}var n;f.$watch(h[b],k,!0);h.$observe("class",function(a){k(f.$eval(h[b]))});"ngClass"!==b&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var k=e(f.$eval(h[b]));g===a?(g=l(k,1),h.$addClass(g)):(g=l(k,-1),h.$removeClass(g))}})}}}]}function sd(b){function a(a,b){b&&!f[a]?(k.addClass(e,a),f[a]=!0):!b&&f[a]&&(k.removeClass(e,a),f[a]=!1)}function c(b,c){b=b?"-"+uc(b,"-"):"";
a(ob+b,!0===c);a(vd+b,!1===c)}var d=b.ctrl,e=b.$element,f={},g=b.set,h=b.unset,l=b.parentForm,k=b.$animate;f[vd]=!(f[ob]=e.hasClass(ob));d.$setValidity=function(b,e,f){e===u?(d.$pending||(d.$pending={}),g(d.$pending,b,f)):(d.$pending&&h(d.$pending,b,f),wd(d.$pending)&&(d.$pending=u));Xa(e)?e?(h(d.$error,b,f),g(d.$$success,b,f)):(g(d.$error,b,f),h(d.$$success,b,f)):(h(d.$error,b,f),h(d.$$success,b,f));d.$pending?(a(xd,!0),d.$valid=d.$invalid=u,c("",null)):(a(xd,!1),d.$valid=wd(d.$error),d.$invalid=
!d.$valid,c("",d.$valid));e=d.$pending&&d.$pending[b]?u:d.$error[b]?!1:d.$$success[b]?!0:null;c(b,e);l.$setValidity(b,e,d)}}function wd(b){if(b)for(var a in b)return!1;return!0}var Of=/^\/(.+)\/([a-z]*)$/,K=function(b){return x(b)?b.toLowerCase():b},sc=Object.prototype.hasOwnProperty,vb=function(b){return x(b)?b.toUpperCase():b},Ra,B,ta,$a=[].slice,qf=[].splice,Pf=[].push,Ca=Object.prototype.toString,Ja=S("ng"),ca=R.angular||(R.angular={}),eb,rb=0;Ra=W.documentMode;A.$inject=[];ra.$inject=[];var H=
Array.isArray,N=function(b){return x(b)?b.trim():b},gd=function(b){return b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},db=function(){if(y(db.isActive_))return db.isActive_;var b=!(!W.querySelector("[ng-csp]")&&!W.querySelector("[data-ng-csp]"));if(!b)try{new Function("")}catch(a){b=!0}return db.isActive_=b},tb=["ng-","data-ng-","ng:","x-ng-"],Md=/[A-Z]/g,vc=!1,Qb,qa=1,bb=3,Qd={full:"1.3.20",major:1,minor:3,dot:20,codeName:"shallow-translucence"};T.expando="ng339";var Ab=
T.cache={},hf=1;T._data=function(b){return this.cache[b[this.expando]]||{}};var cf=/([\:\-\_]+(.))/g,df=/^moz([A-Z])/,Qf={mouseleave:"mouseout",mouseenter:"mouseover"},Tb=S("jqLite"),gf=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,Sb=/<|&#?\w+;/,ef=/<([\w:]+)/,ff=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ka={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],
td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ka.optgroup=ka.option;ka.tbody=ka.tfoot=ka.colgroup=ka.caption=ka.thead;ka.th=ka.td;var Ka=T.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;"complete"===W.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),T(R).on("load",a))},toString:function(){var b=[];r(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?B(this[b]):B(this[this.length+b])},length:0,push:Pf,sort:[].sort,
splice:[].splice},Fb={};r("multiple selected checked disabled readOnly required open".split(" "),function(b){Fb[K(b)]=b});var Nc={};r("input select option textarea button form details".split(" "),function(b){Nc[b]=!0});var Oc={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};r({data:Vb,removeData:yb},function(b,a){T[a]=b});r({data:Vb,inheritedData:Eb,scope:function(b){return B.data(b,"$scope")||Eb(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return B.data(b,
"$isolateScope")||B.data(b,"$isolateScopeNoTemplate")},controller:Jc,injector:function(b){return Eb(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:Bb,css:function(b,a,c){a=fb(a);if(y(c))b.style[a]=c;else return b.style[a]},attr:function(b,a,c){var d=b.nodeType;if(d!==bb&&2!==d&&8!==d)if(d=K(a),Fb[d])if(y(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||A).specified?d:u;else if(y(c))b.setAttribute(a,c);else if(b.getAttribute)return b=
b.getAttribute(a,2),null===b?u:b},prop:function(b,a,c){if(y(c))b[a]=c;else return b[a]},text:function(){function b(a,b){if(D(b)){var d=a.nodeType;return d===qa||d===bb?a.textContent:""}a.textContent=b}b.$dv="";return b}(),val:function(b,a){if(D(a)){if(b.multiple&&"select"===wa(b)){var c=[];r(b.options,function(a){a.selected&&c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(D(a))return b.innerHTML;xb(b,!0);b.innerHTML=a},empty:Kc},function(b,a){T.prototype[a]=
function(a,d){var e,f,g=this.length;if(b!==Kc&&(2==b.length&&b!==Bb&&b!==Jc?a:d)===u){if(L(a)){for(e=0;e<g;e++)if(b===Vb)b(this[e],a);else for(f in a)b(this[e],f,a[f]);return this}e=b.$dv;g=e===u?Math.min(g,1):g;for(f=0;f<g;f++){var h=b(this[f],a,d);e=e?e+h:h}return e}for(e=0;e<g;e++)b(this[e],a,d);return this}});r({removeData:yb,on:function a(c,d,e,f){if(y(f))throw Tb("onargs");if(Fc(c)){var g=zb(c,!0);f=g.events;var h=g.handle;h||(h=g.handle=lf(c,f));for(var g=0<=d.indexOf(" ")?d.split(" "):[d],
l=g.length;l--;){d=g[l];var k=f[d];k||(f[d]=[],"mouseenter"===d||"mouseleave"===d?a(c,Qf[d],function(a){var c=a.relatedTarget;c&&(c===this||this.contains(c))||h(a,d)}):"$destroy"!==d&&c.addEventListener(d,h,!1),k=f[d]);k.push(e)}}},off:Ic,one:function(a,c,d){a=B(a);a.on(c,function f(){a.off(c,d);a.off(c,f)});a.on(c,d)},replaceWith:function(a,c){var d,e=a.parentNode;xb(a);r(new T(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];r(a.childNodes,
function(a){a.nodeType===qa&&c.push(a)});return c},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,c){var d=a.nodeType;if(d===qa||11===d){c=new T(c);for(var d=0,e=c.length;d<e;d++)a.appendChild(c[d])}},prepend:function(a,c){if(a.nodeType===qa){var d=a.firstChild;r(new T(c),function(c){a.insertBefore(c,d)})}},wrap:function(a,c){c=B(c).eq(0).clone()[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:Lc,detach:function(a){Lc(a,!0)},after:function(a,
c){var d=a,e=a.parentNode;c=new T(c);for(var f=0,g=c.length;f<g;f++){var h=c[f];e.insertBefore(h,d.nextSibling);d=h}},addClass:Db,removeClass:Cb,toggleClass:function(a,c,d){c&&r(c.split(" "),function(c){var f=d;D(f)&&(f=!Bb(a,c));(f?Db:Cb)(a,c)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,c){return a.getElementsByTagName?a.getElementsByTagName(c):[]},clone:Ub,triggerHandler:function(a,c,d){var e,f,g=c.type||c,h=
zb(a);if(h=(h=h&&h.events)&&h[g])e={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:A,type:g,target:a},c.type&&(e=w(e,c)),c=sa(h),f=d?[e].concat(d):[e],r(c,function(c){e.isImmediatePropagationStopped()||c.apply(a,f)})}},function(a,c){T.prototype[c]=function(c,
e,f){for(var g,h=0,l=this.length;h<l;h++)D(g)?(g=a(this[h],c,e,f),y(g)&&(g=B(g))):Hc(g,a(this[h],c,e,f));return y(g)?g:this};T.prototype.bind=T.prototype.on;T.prototype.unbind=T.prototype.off});gb.prototype={put:function(a,c){this[Na(a,this.nextUid)]=c},get:function(a){return this[Na(a,this.nextUid)]},remove:function(a){var c=this[a=Na(a,this.nextUid)];delete this[a];return c}};var Qc=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,Rf=/,/,Sf=/^\s*(_?)(\S+?)\1\s*$/,Pc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Fa=S("$injector");
cb.$$annotate=function(a,c,d){var e;if("function"===typeof a){if(!(e=a.$inject)){e=[];if(a.length){if(c)throw x(d)&&d||(d=a.name||mf(a)),Fa("strictdi",d);c=a.toString().replace(Pc,"");c=c.match(Qc);r(c[1].split(Rf),function(a){a.replace(Sf,function(a,c,d){e.push(d)})})}a.$inject=e}}else H(a)?(c=a.length-1,La(a[c],"fn"),e=a.slice(0,c)):La(a,"fn",!0);return e};var Tf=S("$animate"),Ce=["$provide",function(a){this.$$selectors={};this.register=function(c,d){var e=c+"-animation";if(c&&"."!=c.charAt(0))throw Tf("notcsel",
c);this.$$selectors[c.substr(1)]=e;a.factory(e,d)};this.classNameFilter=function(a){1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null);return this.$$classNameFilter};this.$get=["$$q","$$asyncCallback","$rootScope",function(a,d,e){function f(d){var f,g=a.defer();g.promise.$$cancelFn=function(){f&&f()};e.$$postDigest(function(){f=d(function(){g.resolve()})});return g.promise}function g(a,c){var d=[],e=[],f=ja();r((a.attr("class")||"").split(/\s+/),function(a){f[a]=!0});r(c,function(a,
c){var g=f[c];!1===a&&g?e.push(c):!0!==a||g||d.push(c)});return 0<d.length+e.length&&[d.length?d:null,e.length?e:null]}function h(a,c,d){for(var e=0,f=c.length;e<f;++e)a[c[e]]=d}function l(){n||(n=a.defer(),d(function(){n.resolve();n=null}));return n.promise}function k(a,c){if(ca.isObject(c)){var d=w(c.from||{},c.to||{});a.css(d)}}var n;return{animate:function(a,c,d){k(a,{from:c,to:d});return l()},enter:function(a,c,d,e){k(a,e);d?d.after(a):c.prepend(a);return l()},leave:function(a,c){k(a,c);a.remove();
return l()},move:function(a,c,d,e){return this.enter(a,c,d,e)},addClass:function(a,c,d){return this.setClass(a,c,[],d)},$$addClassImmediately:function(a,c,d){a=B(a);c=x(c)?c:H(c)?c.join(" "):"";r(a,function(a){Db(a,c)});k(a,d);return l()},removeClass:function(a,c,d){return this.setClass(a,[],c,d)},$$removeClassImmediately:function(a,c,d){a=B(a);c=x(c)?c:H(c)?c.join(" "):"";r(a,function(a){Cb(a,c)});k(a,d);return l()},setClass:function(a,c,d,e){var k=this,l=!1;a=B(a);var m=a.data("$$animateClasses");
m?e&&m.options&&(m.options=ca.extend(m.options||{},e)):(m={classes:{},options:e},l=!0);e=m.classes;c=H(c)?c:c.split(" ");d=H(d)?d:d.split(" ");h(e,c,!0);h(e,d,!1);l&&(m.promise=f(function(c){var d=a.data("$$animateClasses");a.removeData("$$animateClasses");if(d){var e=g(a,d.classes);e&&k.$$setClassImmediately(a,e[0],e[1],d.options)}c()}),a.data("$$animateClasses",m));return m.promise},$$setClassImmediately:function(a,c,d,e){c&&this.$$addClassImmediately(a,c);d&&this.$$removeClassImmediately(a,d);
k(a,e);return l()},enabled:A,cancel:A}}]}],ma=S("$compile");xc.$inject=["$provide","$$sanitizeUriProvider"];var Rc=/^((?:x|data)[\:\-_])/i,rf=S("$controller"),Vc="application/json",$b={"Content-Type":Vc+";charset=utf-8"},tf=/^\[|^\{(?!\{)/,uf={"[":/]$/,"{":/}$/},sf=/^\)\]\}',?\n/,ac=S("$interpolate"),Uf=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,xf={http:80,https:443,ftp:21},Hb=S("$location"),Vf={$$html5:!1,$$replace:!1,absUrl:Ib("$$absUrl"),url:function(a){if(D(a))return this.$$url;var c=Uf.exec(a);(c[1]||
""===a)&&this.path(decodeURIComponent(c[1]));(c[2]||c[1]||""===a)&&this.search(c[3]||"");this.hash(c[5]||"");return this},protocol:Ib("$$protocol"),host:Ib("$$host"),port:Ib("$$port"),path:cd("$$path",function(a){a=null!==a?a.toString():"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;case 1:if(x(a)||Y(a))a=a.toString(),this.$$search=rc(a);else if(L(a))a=Da(a,{}),r(a,function(c,e){null==c&&delete a[e]}),this.$$search=a;else throw Hb("isrcharg");
break;default:D(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:cd("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};r([bd,dc,cc],function(a){a.prototype=Object.create(Vf);a.prototype.state=function(c){if(!arguments.length)return this.$$state;if(a!==cc||!this.$$html5)throw Hb("nostate");this.$$state=D(c)?null:c;return this}});var ga=S("$parse"),Wf=Function.prototype.call,Xf=Function.prototype.apply,
Yf=Function.prototype.bind,pb=ja();r({"null":function(){return null},"true":function(){return!0},"false":function(){return!1},undefined:function(){}},function(a,c){a.constant=a.literal=a.sharedGetter=!0;pb[c]=a});pb["this"]=function(a){return a};pb["this"].sharedGetter=!0;var qb=w(ja(),{"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return y(d)?y(e)?d+e:d:y(e)?e:u},"-":function(a,c,d,e){d=d(a,c);e=e(a,c);return(y(d)?d:0)-(y(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},"/":function(a,c,d,e){return d(a,
c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"===":function(a,c,d,e){return d(a,c)===e(a,c)},"!==":function(a,c,d,e){return d(a,c)!==e(a,c)},"==":function(a,c,d,e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,
c)||e(a,c)},"!":function(a,c,d){return!d(a,c)},"=":!0,"|":!0}),Zf={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},gc=function(a){this.options=a};gc.prototype={constructor:gc,lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(a))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,
text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else{var c=a+this.peek(),d=c+this.peek(2),e=qb[c],f=qb[d];qb[a]||e||f?(a=f?d:e?c:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,c){return-1!==c.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===
typeof a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=y(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,d)+"]":" "+d;throw ga("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=K(this.text.charAt(this.index));
if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:c,text:a,constant:!0,value:Number(a)})},readIdent:function(){for(var a=this.index;this.index<this.text.length;){var c=this.text.charAt(this.index);if(!this.isIdent(c)&&
!this.isNumber(c))break;this.index++}this.tokens.push({index:a,text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,f=!1;this.index<this.text.length;){var g=this.text.charAt(this.index),e=e+g;if(f)"u"===g?(f=this.text.substring(this.index+1,this.index+5),f.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):d+=Zf[g]||g,f=!1;else if("\\"===g)f=!0;else{if(g===
a){this.index++;this.tokens.push({index:c,text:e,constant:!0,value:d});return}d+=g}this.index++}this.throwError("Unterminated quote",c)}};var kb=function(a,c,d){this.lexer=a;this.$filter=c;this.options=d};kb.ZERO=w(function(){return 0},{sharedGetter:!0,constant:!0});kb.prototype={constructor:kb,parse:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.statements();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);a.literal=!!a.literal;a.constant=!!a.constant;
return a},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.peek().identifier&&this.peek().text in pb?a=pb[this.consume().text]:this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",this.peek());for(var c,d;c=this.expect("(","[",".");)"("===c.text?(a=this.functionCall(a,d),d=null):"["===c.text?(d=a,a=this.objectIndex(a)):
"."===c.text?(d=a,a=this.fieldAccess(a)):this.throwError("IMPOSSIBLE");return a},throwError:function(a,c){throw ga("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},peekToken:function(){if(0===this.tokens.length)throw ga("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,e){return this.peekAhead(0,a,c,d,e)},peekAhead:function(a,c,d,e,f){if(this.tokens.length>a){a=this.tokens[a];var g=a.text;if(g===c||g===d||g===e||g===f||!(c||d||e||f))return a}return!1},expect:function(a,
c,d,e){return(a=this.peek(a,c,d,e))?(this.tokens.shift(),a):!1},consume:function(a){if(0===this.tokens.length)throw ga("ueoe",this.text);var c=this.expect(a);c||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return c},unaryFn:function(a,c){var d=qb[a];return w(function(a,f){return d(a,f,c)},{constant:c.constant,inputs:[c]})},binaryFn:function(a,c,d,e){var f=qb[c];return w(function(c,e){return f(c,e,a,d)},{constant:a.constant&&d.constant,inputs:!e&&[a,d]})},identifier:function(){for(var a=
this.consume().text;this.peek(".")&&this.peekAhead(1).identifier&&!this.peekAhead(2,"(");)a+=this.consume().text+this.consume().text;return zf(a,this.options,this.text)},constant:function(){var a=this.consume().value;return w(function(){return a},{constant:!0,literal:!0})},statements:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.filterChain()),!this.expect(";"))return 1===a.length?a[0]:function(c,d){for(var e,f=0,g=a.length;f<g;f++)e=a[f](c,d);return e}},
filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},filter:function(a){var c=this.$filter(this.consume().text),d,e;if(this.peek(":"))for(d=[],e=[];this.expect(":");)d.push(this.expression());var f=[a].concat(d||[]);return w(function(f,h){var l=a(f,h);if(e){e[0]=l;for(l=d.length;l--;)e[l+1]=d[l](f,h);return c.apply(u,e)}return c(l)},{constant:!c.$stateful&&f.every(ec),inputs:!c.$stateful&&f})},expression:function(){return this.assignment()},assignment:function(){var a=
this.ternary(),c,d;return(d=this.expect("="))?(a.assign||this.throwError("implies assignment but ["+this.text.substring(0,d.index)+"] can not be assigned to",d),c=this.ternary(),w(function(d,f){return a.assign(d,c(d,f),f)},{inputs:[a,c]})):a},ternary:function(){var a=this.logicalOR(),c;if(this.expect("?")&&(c=this.assignment(),this.consume(":"))){var d=this.assignment();return w(function(e,f){return a(e,f)?c(e,f):d(e,f)},{constant:a.constant&&c.constant&&d.constant})}return a},logicalOR:function(){for(var a=
this.logicalAND(),c;c=this.expect("||");)a=this.binaryFn(a,c.text,this.logicalAND(),!0);return a},logicalAND:function(){for(var a=this.equality(),c;c=this.expect("&&");)a=this.binaryFn(a,c.text,this.equality(),!0);return a},equality:function(){for(var a=this.relational(),c;c=this.expect("==","!=","===","!==");)a=this.binaryFn(a,c.text,this.relational());return a},relational:function(){for(var a=this.additive(),c;c=this.expect("<",">","<=",">=");)a=this.binaryFn(a,c.text,this.additive());return a},
additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+","-");)a=this.binaryFn(a,c.text,this.multiplicative());return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*","/","%");)a=this.binaryFn(a,c.text,this.unary());return a},unary:function(){var a;return this.expect("+")?this.primary():(a=this.expect("-"))?this.binaryFn(kb.ZERO,a.text,this.unary()):(a=this.expect("!"))?this.unaryFn(a.text,this.unary()):this.primary()},fieldAccess:function(a){var c=this.identifier();
return w(function(d,e,f){d=f||a(d,e);return null==d?u:c(d)},{assign:function(d,e,f){var g=a(d,f);g||a.assign(d,g={},f);return c.assign(g,e)}})},objectIndex:function(a){var c=this.text,d=this.expression();this.consume("]");return w(function(e,f){var g=a(e,f),h=dd(d(e,f),c);va(h,c);return g?oa(g[h],c):u},{assign:function(e,f,g){var h=va(dd(d(e,g),c),c),l=oa(a(e,g),c);l||a.assign(e,l={},g);return l[h]=f}})},functionCall:function(a,c){var d=[];if(")"!==this.peekToken().text){do d.push(this.expression());
while(this.expect(","))}this.consume(")");var e=this.text,f=d.length?[]:null;return function(g,h){var l=c?c(g,h):y(c)?u:g,k=a(g,h,l)||A;if(f)for(var n=d.length;n--;)f[n]=oa(d[n](g,h),e);oa(l,e);if(k){if(k.constructor===k)throw ga("isecfn",e);if(k===Wf||k===Xf||k===Yf)throw ga("isecff",e);}l=k.apply?k.apply(l,f):k(f[0],f[1],f[2],f[3],f[4]);f&&(f.length=0);return oa(l,e)}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))
}this.consume("]");return w(function(c,d){for(var e=[],f=0,g=a.length;f<g;f++)e.push(a[f](c,d));return e},{literal:!0,constant:a.every(ec),inputs:a})},object:function(){var a=[],c=[];if("}"!==this.peekToken().text){do{if(this.peek("}"))break;var d=this.consume();d.constant?a.push(d.value):d.identifier?a.push(d.text):this.throwError("invalid key",d);this.consume(":");c.push(this.expression())}while(this.expect(","))}this.consume("}");return w(function(d,f){for(var g={},h=0,l=c.length;h<l;h++)g[a[h]]=
c[h](d,f);return g},{literal:!0,constant:c.every(ec),inputs:c})}};var Bf=ja(),Af=ja(),Cf=Object.prototype.valueOf,Ba=S("$sce"),pa={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},ma=S("$compile"),Z=W.createElement("a"),id=Aa(R.location.href);Ec.$inject=["$provide"];jd.$inject=["$locale"];ld.$inject=["$locale"];var od=".",Mf={yyyy:U("FullYear",4),yy:U("FullYear",2,0,!0),y:U("FullYear",1),MMMM:Kb("Month"),MMM:Kb("Month",!0),MM:U("Month",2,1),M:U("Month",1,1),dd:U("Date",2),d:U("Date",
1),HH:U("Hours",2),H:U("Hours",1),hh:U("Hours",2,-12),h:U("Hours",1,-12),mm:U("Minutes",2),m:U("Minutes",1),ss:U("Seconds",2),s:U("Seconds",1),sss:U("Milliseconds",3),EEEE:Kb("Day"),EEE:Kb("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=-1*a.getTimezoneOffset();return a=(0<=a?"+":"")+(Jb(Math[0<a?"floor":"ceil"](a/60),2)+Jb(Math.abs(a%60),2))},ww:qd(2),w:qd(1),G:hc,GG:hc,GGG:hc,GGGG:function(a,c){return 0>=a.getFullYear()?c.ERANAMES[0]:c.ERANAMES[1]}},Lf=/((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,
Kf=/^\-?\d+$/;kd.$inject=["$locale"];var Hf=ea(K),If=ea(vb);md.$inject=["$parse"];var Td=ea({restrict:"E",compile:function(a,c){if(!c.href&&!c.xlinkHref&&!c.name)return function(a,c){if("a"===c[0].nodeName.toLowerCase()){var f="[object SVGAnimatedString]"===Ca.call(c.prop("href"))?"xlink:href":"href";c.on("click",function(a){c.attr(f)||a.preventDefault()})}}}}),wb={};r(Fb,function(a,c){if("multiple"!=a){var d=ya("ng-"+c);wb[d]=function(){return{restrict:"A",priority:100,link:function(a,f,g){a.$watch(g[d],
function(a){g.$set(c,!!a)})}}}}});r(Oc,function(a,c){wb[c]=function(){return{priority:100,link:function(a,e,f){if("ngPattern"===c&&"/"==f.ngPattern.charAt(0)&&(e=f.ngPattern.match(Of))){f.$set("ngPattern",new RegExp(e[1],e[2]));return}a.$watch(f[c],function(a){f.$set(c,a)})}}}});r(["src","srcset","href"],function(a){var c=ya("ng-"+a);wb[c]=function(){return{priority:99,link:function(d,e,f){var g=a,h=a;"href"===a&&"[object SVGAnimatedString]"===Ca.call(e.prop("href"))&&(h="xlinkHref",f.$attr[h]="xlink:href",
g=null);f.$observe(c,function(c){c?(f.$set(h,c),Ra&&g&&e.prop(g,f[h])):"href"===a&&f.$set(h,null)})}}}});var Lb={$addControl:A,$$renameControl:function(a,c){a.$name=c},$removeControl:A,$setValidity:A,$setDirty:A,$setPristine:A,$setSubmitted:A};rd.$inject=["$element","$attrs","$scope","$animate","$interpolate"];var yd=function(a){return["$timeout",function(c){return{name:"form",restrict:a?"EAC":"E",controller:rd,compile:function(d,e){d.addClass(Sa).addClass(ob);var f=e.name?"name":a&&e.ngForm?"ngForm":
!1;return{pre:function(a,d,e,k){if(!("action"in e)){var n=function(c){a.$apply(function(){k.$commitViewValue();k.$setSubmitted()});c.preventDefault()};d[0].addEventListener("submit",n,!1);d.on("$destroy",function(){c(function(){d[0].removeEventListener("submit",n,!1)},0,!1)})}var p=k.$$parentForm;f&&(jb(a,null,k.$name,k,k.$name),e.$observe(f,function(c){k.$name!==c&&(jb(a,null,k.$name,u,k.$name),p.$$renameControl(k,c),jb(a,null,k.$name,k,k.$name))}));d.on("$destroy",function(){p.$removeControl(k);
f&&jb(a,null,e[f],u,k.$name);w(k,Lb)})}}}}}]},Ud=yd(),ge=yd(!0),Nf=/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,$f=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,ag=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,bg=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,zd=/^(\d{4})-(\d{2})-(\d{2})$/,Ad=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,kc=/^(\d{4})-W(\d\d)$/,Bd=/^(\d{4})-(\d\d)$/,
Cd=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Dd={text:function(a,c,d,e,f,g){lb(a,c,d,e,f,g);ic(e)},date:mb("date",zd,Nb(zd,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":mb("datetimelocal",Ad,Nb(Ad,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:mb("time",Cd,Nb(Cd,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:mb("week",kc,function(a,c){if(ha(a))return a;if(x(a)){kc.lastIndex=0;var d=kc.exec(a);if(d){var e=+d[1],f=+d[2],g=d=0,h=0,l=0,k=pd(e),f=7*(f-1);c&&(d=c.getHours(),g=
c.getMinutes(),h=c.getSeconds(),l=c.getMilliseconds());return new Date(e,0,k.getDate()+f,d,g,h,l)}}return NaN},"yyyy-Www"),month:mb("month",Bd,Nb(Bd,["yyyy","MM"]),"yyyy-MM"),number:function(a,c,d,e,f,g){td(a,c,d,e);lb(a,c,d,e,f,g);e.$$parserName="number";e.$parsers.push(function(a){return e.$isEmpty(a)?null:bg.test(a)?parseFloat(a):u});e.$formatters.push(function(a){if(!e.$isEmpty(a)){if(!Y(a))throw nb("numfmt",a);a=a.toString()}return a});if(y(d.min)||d.ngMin){var h;e.$validators.min=function(a){return e.$isEmpty(a)||
D(h)||a>=h};d.$observe("min",function(a){y(a)&&!Y(a)&&(a=parseFloat(a,10));h=Y(a)&&!isNaN(a)?a:u;e.$validate()})}if(y(d.max)||d.ngMax){var l;e.$validators.max=function(a){return e.$isEmpty(a)||D(l)||a<=l};d.$observe("max",function(a){y(a)&&!Y(a)&&(a=parseFloat(a,10));l=Y(a)&&!isNaN(a)?a:u;e.$validate()})}},url:function(a,c,d,e,f,g){lb(a,c,d,e,f,g);ic(e);e.$$parserName="url";e.$validators.url=function(a,c){var d=a||c;return e.$isEmpty(d)||$f.test(d)}},email:function(a,c,d,e,f,g){lb(a,c,d,e,f,g);ic(e);
e.$$parserName="email";e.$validators.email=function(a,c){var d=a||c;return e.$isEmpty(d)||ag.test(d)}},radio:function(a,c,d,e){D(d.name)&&c.attr("name",++rb);c.on("click",function(a){c[0].checked&&e.$setViewValue(d.value,a&&a.type)});e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e,f,g,h,l){var k=ud(l,a,"ngTrueValue",d.ngTrueValue,!0),n=ud(l,a,"ngFalseValue",d.ngFalseValue,!1);c.on("click",function(a){e.$setViewValue(c[0].checked,a&&
a.type)});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return!1===a};e.$formatters.push(function(a){return ia(a,k)});e.$parsers.push(function(a){return a?k:n})},hidden:A,button:A,submit:A,reset:A,file:A},yc=["$browser","$sniffer","$filter","$parse",function(a,c,d,e){return{restrict:"E",require:["?ngModel"],link:{pre:function(f,g,h,l){l[0]&&(Dd[K(h.type)]||Dd.text)(f,g,h,l[0],c,a,d,e)}}}}],cg=/^(true|false|\d+)$/,ye=function(){return{restrict:"A",priority:100,compile:function(a,
c){return cg.test(c.ngValue)?function(a,c,f){f.$set("value",a.$eval(f.ngValue))}:function(a,c,f){a.$watch(f.ngValue,function(a){f.$set("value",a)})}}}},Zd=["$compile",function(a){return{restrict:"AC",compile:function(c){a.$$addBindingClass(c);return function(c,e,f){a.$$addBindingInfo(e,f.ngBind);e=e[0];c.$watch(f.ngBind,function(a){e.textContent=a===u?"":a})}}}}],ae=["$interpolate","$compile",function(a,c){return{compile:function(d){c.$$addBindingClass(d);return function(d,f,g){d=a(f.attr(g.$attr.ngBindTemplate));
c.$$addBindingInfo(f,d.expressions);f=f[0];g.$observe("ngBindTemplate",function(a){f.textContent=a===u?"":a})}}}}],$d=["$sce","$parse","$compile",function(a,c,d){return{restrict:"A",compile:function(e,f){var g=c(f.ngBindHtml),h=c(f.ngBindHtml,function(a){return(a||"").toString()});d.$$addBindingClass(e);return function(c,e,f){d.$$addBindingInfo(e,f.ngBindHtml);c.$watch(h,function(){e.html(a.getTrustedHtml(g(c))||"")})}}}}],xe=ea({restrict:"A",require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),
be=jc("",!0),de=jc("Odd",0),ce=jc("Even",1),ee=Ia({compile:function(a,c){c.$set("ngCloak",u);a.removeClass("ng-cloak")}}),fe=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],Dc={},dg={blur:!0,focus:!0};r("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var c=ya("ng-"+a);Dc[c]=["$parse","$rootScope",function(d,e){return{restrict:"A",compile:function(f,g){var h=
d(g[c],null,!0);return function(c,d){d.on(a,function(d){var f=function(){h(c,{$event:d})};dg[a]&&e.$$phase?c.$evalAsync(f):c.$apply(f)})}}}}]});var ie=["$animate",function(a){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,f,g){var h,l,k;c.$watch(e.ngIf,function(c){c?l||g(function(c,f){l=f;c[c.length++]=W.createComment(" end ngIf: "+e.ngIf+" ");h={clone:c};a.enter(c,d.parent(),d)}):(k&&(k.remove(),k=null),l&&(l.$destroy(),l=null),h&&(k=
ub(h.clone),a.leave(k).then(function(){k=null}),h=null))})}}}],je=["$templateRequest","$anchorScroll","$animate",function(a,c,d){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:ca.noop,compile:function(e,f){var g=f.ngInclude||f.src,h=f.onload||"",l=f.autoscroll;return function(e,f,p,q,r){var s=0,u,v,m,C=function(){v&&(v.remove(),v=null);u&&(u.$destroy(),u=null);m&&(d.leave(m).then(function(){v=null}),v=m,m=null)};e.$watch(g,function(g){var p=function(){!y(l)||l&&!e.$eval(l)||
c()},M=++s;g?(a(g,!0).then(function(a){if(M===s){var c=e.$new();q.template=a;a=r(c,function(a){C();d.enter(a,null,f).then(p)});u=c;m=a;u.$emit("$includeContentLoaded",g);e.$eval(h)}},function(){M===s&&(C(),e.$emit("$includeContentError",g))}),e.$emit("$includeContentRequested",g)):(C(),q.template=null)})}}}}],Ae=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(c,d,e,f){/SVG/.test(d[0].toString())?(d.empty(),a(Gc(f.template,W).childNodes)(c,function(a){d.append(a)},
{futureParentElement:d})):(d.html(f.template),a(d.contents())(c))}}}],ke=Ia({priority:450,compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),we=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,c,d,e){var f=c.attr(d.$attr.ngList)||", ",g="false"!==d.ngTrim,h=g?N(f):f;e.$parsers.push(function(a){if(!D(a)){var c=[];a&&r(a.split(h),function(a){a&&c.push(g?N(a):a)});return c}});e.$formatters.push(function(a){return H(a)?a.join(f):u});e.$isEmpty=function(a){return!a||
!a.length}}}},ob="ng-valid",vd="ng-invalid",Sa="ng-pristine",Mb="ng-dirty",xd="ng-pending",nb=S("ngModel"),eg=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(a,c,d,e,f,g,h,l,k,n){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=u;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;
this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=u;this.$name=n(d.name||"",!1)(a);var p=f(d.ngModel),q=p.assign,t=p,s=q,F=null,v,m=this;this.$$setOptions=function(a){if((m.$options=a)&&a.getterSetter){var c=f(d.ngModel+"()"),g=f(d.ngModel+"($$$p)");t=function(a){var d=p(a);z(d)&&(d=c(a));return d};s=function(a,c){z(p(a))?g(a,{$$$p:m.$modelValue}):q(a,m.$modelValue)}}else if(!p.assign)throw nb("nonassign",d.ngModel,xa(e));};this.$render=A;this.$isEmpty=function(a){return D(a)||
""===a||null===a||a!==a};var C=e.inheritedData("$formController")||Lb,w=0;sd({ctrl:this,$element:e,set:function(a,c){a[c]=!0},unset:function(a,c){delete a[c]},parentForm:C,$animate:g});this.$setPristine=function(){m.$dirty=!1;m.$pristine=!0;g.removeClass(e,Mb);g.addClass(e,Sa)};this.$setDirty=function(){m.$dirty=!0;m.$pristine=!1;g.removeClass(e,Sa);g.addClass(e,Mb);C.$setDirty()};this.$setUntouched=function(){m.$touched=!1;m.$untouched=!0;g.setClass(e,"ng-untouched","ng-touched")};this.$setTouched=
function(){m.$touched=!0;m.$untouched=!1;g.setClass(e,"ng-touched","ng-untouched")};this.$rollbackViewValue=function(){h.cancel(F);m.$viewValue=m.$$lastCommittedViewValue;m.$render()};this.$validate=function(){if(!Y(m.$modelValue)||!isNaN(m.$modelValue)){var a=m.$$rawModelValue,c=m.$valid,d=m.$modelValue,e=m.$options&&m.$options.allowInvalid;m.$$runValidators(a,m.$$lastCommittedViewValue,function(f){e||c===f||(m.$modelValue=f?a:u,m.$modelValue!==d&&m.$$writeModelToScope())})}};this.$$runValidators=
function(a,c,d){function e(){var d=!0;r(m.$validators,function(e,f){var h=e(a,c);d=d&&h;g(f,h)});return d?!0:(r(m.$asyncValidators,function(a,c){g(c,null)}),!1)}function f(){var d=[],e=!0;r(m.$asyncValidators,function(f,h){var l=f(a,c);if(!l||!z(l.then))throw nb("$asyncValidators",l);g(h,u);d.push(l.then(function(){g(h,!0)},function(a){e=!1;g(h,!1)}))});d.length?k.all(d).then(function(){h(e)},A):h(!0)}function g(a,c){l===w&&m.$setValidity(a,c)}function h(a){l===w&&d(a)}w++;var l=w;(function(){var a=
m.$$parserName||"parse";if(v===u)g(a,null);else return v||(r(m.$validators,function(a,c){g(c,null)}),r(m.$asyncValidators,function(a,c){g(c,null)})),g(a,v),v;return!0})()?e()?f():h(!1):h(!1)};this.$commitViewValue=function(){var a=m.$viewValue;h.cancel(F);if(m.$$lastCommittedViewValue!==a||""===a&&m.$$hasNativeValidators)m.$$lastCommittedViewValue=a,m.$pristine&&this.$setDirty(),this.$$parseAndValidate()};this.$$parseAndValidate=function(){var c=m.$$lastCommittedViewValue;if(v=D(c)?u:!0)for(var d=
0;d<m.$parsers.length;d++)if(c=m.$parsers[d](c),D(c)){v=!1;break}Y(m.$modelValue)&&isNaN(m.$modelValue)&&(m.$modelValue=t(a));var e=m.$modelValue,f=m.$options&&m.$options.allowInvalid;m.$$rawModelValue=c;f&&(m.$modelValue=c,m.$modelValue!==e&&m.$$writeModelToScope());m.$$runValidators(c,m.$$lastCommittedViewValue,function(a){f||(m.$modelValue=a?c:u,m.$modelValue!==e&&m.$$writeModelToScope())})};this.$$writeModelToScope=function(){s(a,m.$modelValue);r(m.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}})};
this.$setViewValue=function(a,c){m.$viewValue=a;m.$options&&!m.$options.updateOnDefault||m.$$debounceViewValueCommit(c)};this.$$debounceViewValueCommit=function(c){var d=0,e=m.$options;e&&y(e.debounce)&&(e=e.debounce,Y(e)?d=e:Y(e[c])?d=e[c]:Y(e["default"])&&(d=e["default"]));h.cancel(F);d?F=h(function(){m.$commitViewValue()},d):l.$$phase?m.$commitViewValue():a.$apply(function(){m.$commitViewValue()})};a.$watch(function(){var c=t(a);if(c!==m.$modelValue&&(m.$modelValue===m.$modelValue||c===c)){m.$modelValue=
m.$$rawModelValue=c;v=u;for(var d=m.$formatters,e=d.length,f=c;e--;)f=d[e](f);m.$viewValue!==f&&(m.$viewValue=m.$$lastCommittedViewValue=f,m.$render(),m.$$runValidators(c,f,A))}return c})}],ve=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:eg,priority:1,compile:function(c){c.addClass(Sa).addClass("ng-untouched").addClass(ob);return{pre:function(a,c,f,g){var h=g[0],l=g[1]||Lb;h.$$setOptions(g[2]&&g[2].$options);l.$addControl(h);f.$observe("name",
function(a){h.$name!==a&&l.$$renameControl(h,a)});a.$on("$destroy",function(){l.$removeControl(h)})},post:function(c,e,f,g){var h=g[0];if(h.$options&&h.$options.updateOn)e.on(h.$options.updateOn,function(a){h.$$debounceViewValueCommit(a&&a.type)});e.on("blur",function(e){h.$touched||(a.$$phase?c.$evalAsync(h.$setTouched):c.$apply(h.$setTouched))})}}}}}],fg=/(\s+|^)default(\s+|$)/,ze=function(){return{restrict:"A",controller:["$scope","$attrs",function(a,c){var d=this;this.$options=a.$eval(c.ngModelOptions);
this.$options.updateOn!==u?(this.$options.updateOnDefault=!1,this.$options.updateOn=N(this.$options.updateOn.replace(fg,function(){d.$options.updateOnDefault=!0;return" "}))):this.$options.updateOnDefault=!0}]}},le=Ia({terminal:!0,priority:1E3}),me=["$locale","$interpolate",function(a,c){var d=/{}/g,e=/^when(Minus)?(.+)$/;return{restrict:"EA",link:function(f,g,h){function l(a){g.text(a||"")}var k=h.count,n=h.$attr.when&&g.attr(h.$attr.when),p=h.offset||0,q=f.$eval(n)||{},t={},n=c.startSymbol(),s=
c.endSymbol(),u=n+k+"-"+p+s,v=ca.noop,m;r(h,function(a,c){var d=e.exec(c);d&&(d=(d[1]?"-":"")+K(d[2]),q[d]=g.attr(h.$attr[c]))});r(q,function(a,e){t[e]=c(a.replace(d,u))});f.$watch(k,function(c){c=parseFloat(c);var d=isNaN(c);d||c in q||(c=a.pluralCat(c-p));c===m||d&&isNaN(m)||(v(),v=f.$watch(t[c],l),m=c)})}}}],ne=["$parse","$animate",function(a,c){var d=S("ngRepeat"),e=function(a,c,d,e,k,n,p){a[d]=e;k&&(a[k]=n);a.$index=c;a.$first=0===c;a.$last=c===p-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=
0===(c&1))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(f,g){var h=g.ngRepeat,l=W.createComment(" end ngRepeat: "+h+" "),k=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!k)throw d("iexp",h);var n=k[1],p=k[2],q=k[3],t=k[4],k=n.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);if(!k)throw d("iidexp",n);var s=k[3]||k[1],F=k[2];if(q&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(q)||
/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(q)))throw d("badident",q);var v,m,C,y,w={$id:Na};t?v=a(t):(C=function(a,c){return Na(c)},y=function(a){return a});return function(a,f,g,k,n){v&&(m=function(c,d,e){F&&(w[F]=c);w[s]=d;w.$index=e;return v(a,w)});var t=ja();a.$watchCollection(p,function(g){var k,p,v=f[0],G,w=ja(),D,I,A,z,H,O,x;q&&(a[q]=g);if(Ta(g))H=g,p=m||C;else{p=m||y;H=[];for(x in g)g.hasOwnProperty(x)&&"$"!=x.charAt(0)&&H.push(x);H.sort()}D=
H.length;x=Array(D);for(k=0;k<D;k++)if(I=g===H?k:H[k],A=g[I],z=p(I,A,k),t[z])O=t[z],delete t[z],w[z]=O,x[k]=O;else{if(w[z])throw r(x,function(a){a&&a.scope&&(t[a.id]=a)}),d("dupes",h,z,A);x[k]={id:z,scope:u,clone:u};w[z]=!0}for(G in t){O=t[G];z=ub(O.clone);c.leave(z);if(z[0].parentNode)for(k=0,p=z.length;k<p;k++)z[k].$$NG_REMOVED=!0;O.scope.$destroy()}for(k=0;k<D;k++)if(I=g===H?k:H[k],A=g[I],O=x[k],O.scope){G=v;do G=G.nextSibling;while(G&&G.$$NG_REMOVED);O.clone[0]!=G&&c.move(ub(O.clone),null,B(v));
v=O.clone[O.clone.length-1];e(O.scope,k,s,A,F,I,D)}else n(function(a,d){O.scope=d;var f=l.cloneNode(!1);a[a.length++]=f;c.enter(a,null,B(v));v=f;O.clone=a;w[O.id]=O;e(O.scope,k,s,A,F,I,D)});t=w})}}}}],oe=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngShow,function(c){a[c?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],he=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngHide,function(c){a[c?
"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],pe=Ia(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&r(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),qe=["$animate",function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,f){var g=[],h=[],l=[],k=[],n=function(a,c){return function(){a.splice(c,1)}};c.$watch(e.ngSwitch||e.on,function(c){var d,e;d=0;for(e=l.length;d<e;++d)a.cancel(l[d]);d=l.length=
0;for(e=k.length;d<e;++d){var s=ub(h[d].clone);k[d].$destroy();(l[d]=a.leave(s)).then(n(l,d))}h.length=0;k.length=0;(g=f.cases["!"+c]||f.cases["?"])&&r(g,function(c){c.transclude(function(d,e){k.push(e);var f=c.element;d[d.length++]=W.createComment(" end ngSwitchWhen: ");h.push({clone:d});a.enter(d,f.parent(),f)})})})}}}],re=Ia({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,f){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:f,
element:c})}}),se=Ia({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,f){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:f,element:c})}}),ue=Ia({restrict:"EAC",link:function(a,c,d,e,f){if(!f)throw S("ngTransclude")("orphan",xa(c));f(function(a){c.empty();c.append(a)})}}),Vd=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],gg=S("ngOptions"),te=ea({restrict:"A",
terminal:!0}),Wd=["$compile","$parse",function(a,c){var d=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,e={$setViewValue:A};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,c,d){var l=this,k={},n=e,p;l.databound=d.ngModel;l.init=function(a,c,d){n=a;p=d};l.addOption=function(c,d){Ma(c,'"option value"');
k[c]=!0;n.$viewValue==c&&(a.val(c),p.parent()&&p.remove());d&&d[0].hasAttribute("selected")&&(d[0].selected=!0)};l.removeOption=function(a){this.hasOption(a)&&(delete k[a],n.$viewValue===a&&this.renderUnknownOption(a))};l.renderUnknownOption=function(c){c="? "+Na(c)+" ?";p.val(c);a.prepend(p);a.val(c);p.prop("selected",!0)};l.hasOption=function(a){return k.hasOwnProperty(a)};c.$on("$destroy",function(){l.renderUnknownOption=A})}],link:function(e,g,h,l){function k(a,c,d,e){d.$render=function(){var a=
d.$viewValue;e.hasOption(a)?(z.parent()&&z.remove(),c.val(a),""===a&&v.prop("selected",!0)):null==a&&v?c.val(""):e.renderUnknownOption(a)};c.on("change",function(){a.$apply(function(){z.parent()&&z.remove();d.$setViewValue(c.val())})})}function n(a,c,d){var e;d.$render=function(){var a=new gb(d.$viewValue);r(c.find("option"),function(c){c.selected=y(a.get(c.value))})};a.$watch(function(){ia(e,d.$viewValue)||(e=sa(d.$viewValue),d.$render())});c.on("change",function(){a.$apply(function(){var a=[];r(c.find("option"),
function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function p(e,f,g){function h(a,c,d){T[A]=d;I&&(T[I]=c);return a(e,T)}function l(a){var c;if(t)if(K&&H(a)){c=new gb([]);for(var d=0;d<a.length;d++)c.put(h(K,null,a[d]),!0)}else c=new gb(a);else K&&(a=h(K,null,a));return function(d,e){var f;f=K?K:x?x:E;return t?y(c.remove(h(f,d,e))):a===h(f,d,e)}}function k(){m||(e.$$postDigest(p),m=!0)}function n(a,c,d){a[c]=a[c]||0;a[c]+=d?1:-1}function p(){m=!1;var a={"":[]},c=[""],d,k,s,u,v;s=g.$viewValue;
u=L(e)||[];var A=I?Object.keys(u).sort():u,x,B,H,E,P={};v=l(s);var N=!1,U,W;R={};for(E=0;H=A.length,E<H;E++){x=E;if(I&&(x=A[E],"$"===x.charAt(0)))continue;B=u[x];d=h(M,x,B)||"";(k=a[d])||(k=a[d]=[],c.push(d));d=v(x,B);N=N||d;B=h(z,x,B);B=y(B)?B:"";W=K?K(e,T):I?A[E]:E;K&&(R[W]=x);k.push({id:W,label:B,selected:d})}t||(w||null===s?a[""].unshift({id:"",label:"",selected:!N}):N||a[""].unshift({id:"?",label:"",selected:!0}));x=0;for(A=c.length;x<A;x++){d=c[x];k=a[d];S.length<=x?(s={element:D.clone().attr("label",
d),label:k.label},u=[s],S.push(u),f.append(s.element)):(u=S[x],s=u[0],s.label!=d&&s.element.attr("label",s.label=d));N=null;E=0;for(H=k.length;E<H;E++)d=k[E],(v=u[E+1])?(N=v.element,v.label!==d.label&&(n(P,v.label,!1),n(P,d.label,!0),N.text(v.label=d.label),N.prop("label",v.label)),v.id!==d.id&&N.val(v.id=d.id),N[0].selected!==d.selected&&(N.prop("selected",v.selected=d.selected),Ra&&N.prop("selected",v.selected))):(""===d.id&&w?U=w:(U=C.clone()).val(d.id).prop("selected",d.selected).attr("selected",
d.selected).prop("label",d.label).text(d.label),u.push(v={element:U,label:d.label,id:d.id,selected:d.selected}),n(P,d.label,!0),N?N.after(U):s.element.append(U),N=U);for(E++;u.length>E;)d=u.pop(),n(P,d.label,!1),d.element.remove()}for(;S.length>x;){k=S.pop();for(E=1;E<k.length;++E)n(P,k[E].label,!1);k[0].element.remove()}r(P,function(a,c){0<a?q.addOption(c):0>a&&q.removeOption(c)})}var v;if(!(v=s.match(d)))throw gg("iexp",s,xa(f));var z=c(v[2]||v[1]),A=v[4]||v[6],B=/ as /.test(v[0])&&v[1],x=B?c(B):
null,I=v[5],M=c(v[3]||""),E=c(v[2]?v[1]:A),L=c(v[7]),K=v[8]?c(v[8]):null,R={},S=[[{element:f,label:""}]],T={};w&&(a(w)(e),w.removeClass("ng-scope"),w.remove());f.empty();f.on("change",function(){e.$apply(function(){var a=L(e)||[],c;if(t)c=[],r(f.val(),function(d){d=K?R[d]:d;c.push("?"===d?u:""===d?null:h(x?x:E,d,a[d]))});else{var d=K?R[f.val()]:f.val();c="?"===d?u:""===d?null:h(x?x:E,d,a[d])}g.$setViewValue(c);p()})});g.$render=p;e.$watchCollection(L,k);e.$watchCollection(function(){var a=L(e),c;
if(a&&H(a)){c=Array(a.length);for(var d=0,f=a.length;d<f;d++)c[d]=h(z,d,a[d])}else if(a)for(d in c={},a)a.hasOwnProperty(d)&&(c[d]=h(z,d,a[d]));return c},k);t&&e.$watchCollection(function(){return g.$modelValue},k)}if(l[1]){var q=l[0];l=l[1];var t=h.multiple,s=h.ngOptions,w=!1,v,m=!1,C=B(W.createElement("option")),D=B(W.createElement("optgroup")),z=C.clone();h=0;for(var A=g.children(),x=A.length;h<x;h++)if(""===A[h].value){v=w=A.eq(h);break}q.init(l,w,z);t&&(l.$isEmpty=function(a){return!a||0===a.length});
s?p(e,g,l):t?n(e,g,l):k(e,g,l,q)}}}}],Yd=["$interpolate",function(a){var c={addOption:A,removeOption:A};return{restrict:"E",priority:100,compile:function(d,e){if(D(e.value)){var f=a(d.text(),!0);f||e.$set("value",d.text())}return function(a,d,e){var k=d.parent(),n=k.data("$selectController")||k.parent().data("$selectController");n&&n.databound||(n=c);f?a.$watch(f,function(a,c){e.$set("value",a);c!==a&&n.removeOption(c);n.addOption(a,d)}):n.addOption(e.value,d);d.on("$destroy",function(){n.removeOption(e.value)})}}}}],
Xd=ea({restrict:"E",terminal:!1}),Ac=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){e&&(d.required=!0,e.$validators.required=function(a,c){return!d.required||!e.$isEmpty(c)},d.$observe("required",function(){e.$validate()}))}}},zc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f,g=d.ngPattern||d.pattern;d.$observe("pattern",function(a){x(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&!a.test)throw S("ngPattern")("noregexp",g,a,xa(c));f=
a||u;e.$validate()});e.$validators.pattern=function(a,c){return e.$isEmpty(c)||D(f)||f.test(c)}}}}},Cc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=-1;d.$observe("maxlength",function(a){a=aa(a);f=isNaN(a)?-1:a;e.$validate()});e.$validators.maxlength=function(a,c){return 0>f||e.$isEmpty(c)||c.length<=f}}}}},Bc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=0;d.$observe("minlength",function(a){f=aa(a)||0;e.$validate()});e.$validators.minlength=
function(a,c){return e.$isEmpty(c)||c.length>=f}}}}};R.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):(Nd(),Pd(ca),B(W).ready(function(){Jd(W,tc)}))})(window,document);!window.angular.$$csp()&&window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}</style>');
//# sourceMappingURL=angular.min.js.map

/*
 AngularJS v1.3.20
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(y,s,z){'use strict';function t(f,k,p){n.directive(f,["$parse","$swipe",function(d,e){return function(l,m,g){function h(a){if(!b)return!1;var c=Math.abs(a.y-b.y);a=(a.x-b.x)*k;return q&&75>c&&0<a&&30<a&&.3>c/a}var c=d(g[f]),b,q,a=["touch"];s.isDefined(g.ngSwipeDisableMouse)||a.push("mouse");e.bind(m,{start:function(a,c){b=a;q=!0},cancel:function(a){q=!1},end:function(a,b){h(a)&&l.$apply(function(){m.triggerHandler(p);c(l,{$event:b})})}},a)}}])}var n=s.module("ngTouch",[]);n.factory("$swipe",
[function(){function f(d){d=d.originalEvent||d;var e=d.touches&&d.touches.length?d.touches:[d];d=d.changedTouches&&d.changedTouches[0]||e[0];return{x:d.clientX,y:d.clientY}}function k(d,e){var l=[];s.forEach(d,function(d){(d=p[d][e])&&l.push(d)});return l.join(" ")}var p={mouse:{start:"mousedown",move:"mousemove",end:"mouseup"},touch:{start:"touchstart",move:"touchmove",end:"touchend",cancel:"touchcancel"}};return{bind:function(d,e,l){var m,g,h,c,b=!1;l=l||["mouse","touch"];d.on(k(l,"start"),function(a){h=
f(a);b=!0;g=m=0;c=h;e.start&&e.start(h,a)});var q=k(l,"cancel");if(q)d.on(q,function(a){b=!1;e.cancel&&e.cancel(a)});d.on(k(l,"move"),function(a){if(b&&h){var d=f(a);m+=Math.abs(d.x-c.x);g+=Math.abs(d.y-c.y);c=d;10>m&&10>g||(g>m?(b=!1,e.cancel&&e.cancel(a)):(a.preventDefault(),e.move&&e.move(d,a)))}});d.on(k(l,"end"),function(a){b&&(b=!1,e.end&&e.end(f(a),a))})}}}]);n.config(["$provide",function(f){f.decorator("ngClickDirective",["$delegate",function(k){k.shift();return k}])}]);n.directive("ngClick",
["$parse","$timeout","$rootElement",function(f,k,p){function d(c,b,d){for(var a=0;a<c.length;a+=2){var e=c[a+1],g=d;if(25>Math.abs(c[a]-b)&&25>Math.abs(e-g))return c.splice(a,a+2),!0}return!1}function e(c){if(!(2500<Date.now()-m)){var b=c.touches&&c.touches.length?c.touches:[c],e=b[0].clientX,b=b[0].clientY;if(!(1>e&&1>b||h&&h[0]===e&&h[1]===b)){h&&(h=null);var a=c.target;"label"===s.lowercase(a.nodeName||a[0]&&a[0].nodeName)&&(h=[e,b]);d(g,e,b)||(c.stopPropagation(),c.preventDefault(),c.target&&
c.target.blur&&c.target.blur())}}}function l(c){c=c.touches&&c.touches.length?c.touches:[c];var b=c[0].clientX,d=c[0].clientY;g.push(b,d);k(function(){for(var a=0;a<g.length;a+=2)if(g[a]==b&&g[a+1]==d){g.splice(a,a+2);break}},2500,!1)}var m,g,h;return function(c,b,h){function a(){n=!1;b.removeClass("ng-click-active")}var k=f(h.ngClick),n=!1,r,t,v,w;b.on("touchstart",function(a){n=!0;r=a.target?a.target:a.srcElement;3==r.nodeType&&(r=r.parentNode);b.addClass("ng-click-active");t=Date.now();a=a.originalEvent||
a;a=(a.touches&&a.touches.length?a.touches:[a])[0];v=a.clientX;w=a.clientY});b.on("touchmove",function(b){a()});b.on("touchcancel",function(b){a()});b.on("touchend",function(c){var k=Date.now()-t,f=c.originalEvent||c,u=(f.changedTouches&&f.changedTouches.length?f.changedTouches:f.touches&&f.touches.length?f.touches:[f])[0],f=u.clientX,u=u.clientY,x=Math.sqrt(Math.pow(f-v,2)+Math.pow(u-w,2));n&&750>k&&12>x&&(g||(p[0].addEventListener("click",e,!0),p[0].addEventListener("touchstart",l,!0),g=[]),m=Date.now(),
d(g,f,u),r&&r.blur(),s.isDefined(h.disabled)&&!1!==h.disabled||b.triggerHandler("click",[c]));a()});b.onclick=function(a){};b.on("click",function(a,b){c.$apply(function(){k(c,{$event:b||a})})});b.on("mousedown",function(a){b.addClass("ng-click-active")});b.on("mousemove mouseup",function(a){b.removeClass("ng-click-active")})}}]);t("ngSwipeLeft",-1,"swipeleft");t("ngSwipeRight",1,"swiperight")})(window,window.angular);
//# sourceMappingURL=angular-touch.min.js.map

/*!
 * Modernizr v2.6.3
 * www.modernizr.com
 *
 * Copyright (c) Faruk Ates, Paul Irish, Alex Sexton
 * Available under the BSD and MIT licenses: www.modernizr.com/license/
 */

/*
 * Modernizr tests which native CSS3 and HTML5 features are available in
 * the current UA and makes the results available to you in two ways:
 * as properties on a global Modernizr object, and as classes on the
 * <html> element. This information allows you to progressively enhance
 * your pages with a granular level of control over the experience.
 *
 * Modernizr has an optional (not included) conditional resource loader
 * called Modernizr.load(), based on Yepnope.js (yepnopejs.com).
 * To get a build that includes Modernizr.load(), as well as choosing
 * which tests to include, go to www.modernizr.com/download/
 *
 * Authors        Faruk Ates, Paul Irish, Alex Sexton
 * Contributors   Ryan Seddon, Ben Alman
 */

window.Modernizr = (function( window, document, undefined ) {

    var version = '2.6.3',

    Modernizr = {},

    /*>>cssclasses*/
    // option for enabling the HTML classes to be added
    enableClasses = true,
    /*>>cssclasses*/

    docElement = document.documentElement,

    /**
     * Create our "modernizr" element that we do most feature tests on.
     */
    mod = 'modernizr',
    modElem = document.createElement(mod),
    mStyle = modElem.style,

    /**
     * Create the input element for various Web Forms feature tests.
     */
    inputElem /*>>inputelem*/ = document.createElement('input') /*>>inputelem*/ ,

    /*>>smile*/
    smile = ':)',
    /*>>smile*/

    toString = {}.toString,

    // TODO :: make the prefixes more granular
    /*>>prefixes*/
    // List of property values to set for css tests. See ticket #21
    prefixes = ' -webkit- -moz- -o- -ms- '.split(' '),
    /*>>prefixes*/

    /*>>domprefixes*/
    // Following spec is to expose vendor-specific style properties as:
    //   elem.style.WebkitBorderRadius
    // and the following would be incorrect:
    //   elem.style.webkitBorderRadius

    // Webkit ghosts their properties in lowercase but Opera & Moz do not.
    // Microsoft uses a lowercase `ms` instead of the correct `Ms` in IE8+
    //   erik.eae.net/archives/2008/03/10/21.48.10/

    // More here: github.com/Modernizr/Modernizr/issues/issue/21
    omPrefixes = 'Webkit Moz O ms',

    cssomPrefixes = omPrefixes.split(' '),

    domPrefixes = omPrefixes.toLowerCase().split(' '),
    /*>>domprefixes*/

    /*>>ns*/
    ns = {'svg': 'http://www.w3.org/2000/svg'},
    /*>>ns*/

    tests = {},
    inputs = {},
    attrs = {},

    classes = [],

    slice = classes.slice,

    featureName, // used in testing loop


    /*>>teststyles*/
    // Inject element with style element and some CSS rules
    injectElementWithStyles = function( rule, callback, nodes, testnames ) {

      var style, ret, node, docOverflow,
          div = document.createElement('div'),
          // After page load injecting a fake body doesn't work so check if body exists
          body = document.body,
          // IE6 and 7 won't return offsetWidth or offsetHeight unless it's in the body element, so we fake it.
          fakeBody = body || document.createElement('body');

      if ( parseInt(nodes, 10) ) {
          // In order not to give false positives we create a node for each test
          // This also allows the method to scale for unspecified uses
          while ( nodes-- ) {
              node = document.createElement('div');
              node.id = testnames ? testnames[nodes] : mod + (nodes + 1);
              div.appendChild(node);
          }
      }

      // <style> elements in IE6-9 are considered 'NoScope' elements and therefore will be removed
      // when injected with innerHTML. To get around this you need to prepend the 'NoScope' element
      // with a 'scoped' element, in our case the soft-hyphen entity as it won't mess with our measurements.
      // msdn.microsoft.com/en-us/library/ms533897%28VS.85%29.aspx
      // Documents served as xml will throw if using &shy; so use xml friendly encoded version. See issue #277
      style = ['&#173;','<style id="s', mod, '">', rule, '</style>'].join('');
      div.id = mod;
      // IE6 will false positive on some tests due to the style element inside the test div somehow interfering offsetHeight, so insert it into body or fakebody.
      // Opera will act all quirky when injecting elements in documentElement when page is served as xml, needs fakebody too. #270
      (body ? div : fakeBody).innerHTML += style;
      fakeBody.appendChild(div);
      if ( !body ) {
          //avoid crashing IE8, if background image is used
          fakeBody.style.background = '';
          //Safari 5.13/5.1.4 OSX stops loading if ::-webkit-scrollbar is used and scrollbars are visible
          fakeBody.style.overflow = 'hidden';
          docOverflow = docElement.style.overflow;
          docElement.style.overflow = 'hidden';
          docElement.appendChild(fakeBody);
      }

      ret = callback(div, rule);
      // If this is done after page load we don't want to remove the body so check if body exists
      if ( !body ) {
          fakeBody.parentNode.removeChild(fakeBody);
          docElement.style.overflow = docOverflow;
      } else {
          div.parentNode.removeChild(div);
      }

      return !!ret;

    },
    /*>>teststyles*/

    /*>>mq*/
    // adapted from matchMedia polyfill
    // by Scott Jehl and Paul Irish
    // gist.github.com/786768
    testMediaQuery = function( mq ) {

      var matchMedia = window.matchMedia || window.msMatchMedia;
      if ( matchMedia ) {
        return matchMedia(mq).matches;
      }

      var bool;

      injectElementWithStyles('@media ' + mq + ' { #' + mod + ' { position: absolute; } }', function( node ) {
        bool = (window.getComputedStyle ?
                  getComputedStyle(node, null) :
                  node.currentStyle)['position'] == 'absolute';
      });

      return bool;

     },
     /*>>mq*/


    /*>>hasevent*/
    //
    // isEventSupported determines if a given element supports the given event
    // kangax.github.com/iseventsupported/
    //
    // The following results are known incorrects:
    //   Modernizr.hasEvent("webkitTransitionEnd", elem) // false negative
    //   Modernizr.hasEvent("textInput") // in Webkit. github.com/Modernizr/Modernizr/issues/333
    //   ...
    isEventSupported = (function() {

      var TAGNAMES = {
        'select': 'input', 'change': 'input',
        'submit': 'form', 'reset': 'form',
        'error': 'img', 'load': 'img', 'abort': 'img'
      };

      function isEventSupported( eventName, element ) {

        element = element || document.createElement(TAGNAMES[eventName] || 'div');
        eventName = 'on' + eventName;

        // When using `setAttribute`, IE skips "unload", WebKit skips "unload" and "resize", whereas `in` "catches" those
        var isSupported = eventName in element;

        if ( !isSupported ) {
          // If it has no `setAttribute` (i.e. doesn't implement Node interface), try generic element
          if ( !element.setAttribute ) {
            element = document.createElement('div');
          }
          if ( element.setAttribute && element.removeAttribute ) {
            element.setAttribute(eventName, '');
            isSupported = is(element[eventName], 'function');

            // If property was created, "remove it" (by setting value to `undefined`)
            if ( !is(element[eventName], 'undefined') ) {
              element[eventName] = undefined;
            }
            element.removeAttribute(eventName);
          }
        }

        element = null;
        return isSupported;
      }
      return isEventSupported;
    })(),
    /*>>hasevent*/

    // TODO :: Add flag for hasownprop ? didn't last time

    // hasOwnProperty shim by kangax needed for Safari 2.0 support
    _hasOwnProperty = ({}).hasOwnProperty, hasOwnProp;

    if ( !is(_hasOwnProperty, 'undefined') && !is(_hasOwnProperty.call, 'undefined') ) {
      hasOwnProp = function (object, property) {
        return _hasOwnProperty.call(object, property);
      };
    }
    else {
      hasOwnProp = function (object, property) { /* yes, this can give false positives/negatives, but most of the time we don't care about those */
        return ((property in object) && is(object.constructor.prototype[property], 'undefined'));
      };
    }

    // Adapted from ES5-shim https://github.com/kriskowal/es5-shim/blob/master/es5-shim.js
    // es5.github.com/#x15.3.4.5

    if (!Function.prototype.bind) {
      Function.prototype.bind = function bind(that) {

        var target = this;

        if (typeof target != "function") {
            throw new TypeError();
        }

        var args = slice.call(arguments, 1),
            bound = function () {

            if (this instanceof bound) {

              var F = function(){};
              F.prototype = target.prototype;
              var self = new F();

              var result = target.apply(
                  self,
                  args.concat(slice.call(arguments))
              );
              if (Object(result) === result) {
                  return result;
              }
              return self;

            } else {

              return target.apply(
                  that,
                  args.concat(slice.call(arguments))
              );

            }

        };

        return bound;
      };
    }

    /**
     * setCss applies given styles to the Modernizr DOM node.
     */
    function setCss( str ) {
        mStyle.cssText = str;
    }

    /**
     * setCssAll extrapolates all vendor-specific css strings.
     */
    function setCssAll( str1, str2 ) {
        return setCss(prefixes.join(str1 + ';') + ( str2 || '' ));
    }

    /**
     * is returns a boolean for if typeof obj is exactly type.
     */
    function is( obj, type ) {
        return typeof obj === type;
    }

    /**
     * contains returns a boolean for if substr is found within str.
     */
    function contains( str, substr ) {
        return !!~('' + str).indexOf(substr);
    }

    /*>>testprop*/

    // testProps is a generic CSS / DOM property test.

    // In testing support for a given CSS property, it's legit to test:
    //    `elem.style[styleName] !== undefined`
    // If the property is supported it will return an empty string,
    // if unsupported it will return undefined.

    // We'll take advantage of this quick test and skip setting a style
    // on our modernizr element, but instead just testing undefined vs
    // empty string.

    // Because the testing of the CSS property names (with "-", as
    // opposed to the camelCase DOM properties) is non-portable and
    // non-standard but works in WebKit and IE (but not Gecko or Opera),
    // we explicitly reject properties with dashes so that authors
    // developing in WebKit or IE first don't end up with
    // browser-specific content by accident.

    function testProps( props, prefixed ) {
        for ( var i in props ) {
            var prop = props[i];
            if ( !contains(prop, "-") && mStyle[prop] !== undefined ) {
                return prefixed == 'pfx' ? prop : true;
            }
        }
        return false;
    }
    /*>>testprop*/

    // TODO :: add testDOMProps
    /**
     * testDOMProps is a generic DOM property test; if a browser supports
     *   a certain property, it won't return undefined for it.
     */
    function testDOMProps( props, obj, elem ) {
        for ( var i in props ) {
            var item = obj[props[i]];
            if ( item !== undefined) {

                // return the property name as a string
                if (elem === false) return props[i];

                // let's bind a function
                if (is(item, 'function')){
                  // default to autobind unless override
                  return item.bind(elem || obj);
                }

                // return the unbound function or obj or value
                return item;
            }
        }
        return false;
    }

    /*>>testallprops*/
    /**
     * testPropsAll tests a list of DOM properties we want to check against.
     *   We specify literally ALL possible (known and/or likely) properties on
     *   the element including the non-vendor prefixed one, for forward-
     *   compatibility.
     */
    function testPropsAll( prop, prefixed, elem ) {

        var ucProp  = prop.charAt(0).toUpperCase() + prop.slice(1),
            props   = (prop + ' ' + cssomPrefixes.join(ucProp + ' ') + ucProp).split(' ');

        // did they call .prefixed('boxSizing') or are we just testing a prop?
        if(is(prefixed, "string") || is(prefixed, "undefined")) {
          return testProps(props, prefixed);

        // otherwise, they called .prefixed('requestAnimationFrame', window[, elem])
        } else {
          props = (prop + ' ' + (domPrefixes).join(ucProp + ' ') + ucProp).split(' ');
          return testDOMProps(props, prefixed, elem);
        }
    }
    /*>>testallprops*/


    /**
     * Tests
     * -----
     */

    // The *new* flexbox
    // dev.w3.org/csswg/css3-flexbox

    tests['flexbox'] = function() {
      return testPropsAll('flexWrap');
    };

    // The *old* flexbox
    // www.w3.org/TR/2009/WD-css3-flexbox-20090723/

    tests['flexboxlegacy'] = function() {
        return testPropsAll('boxDirection');
    };

    // On the S60 and BB Storm, getContext exists, but always returns undefined
    // so we actually have to call getContext() to verify
    // github.com/Modernizr/Modernizr/issues/issue/97/

    tests['canvas'] = function() {
        var elem = document.createElement('canvas');
        return !!(elem.getContext && elem.getContext('2d'));
    };

    tests['canvastext'] = function() {
        return !!(Modernizr['canvas'] && is(document.createElement('canvas').getContext('2d').fillText, 'function'));
    };

    // webk.it/70117 is tracking a legit WebGL feature detect proposal

    // We do a soft detect which may false positive in order to avoid
    // an expensive context creation: bugzil.la/732441

    tests['webgl'] = function() {
        return !!window.WebGLRenderingContext;
    };

    /*
     * The Modernizr.touch test only indicates if the browser supports
     *    touch events, which does not necessarily reflect a touchscreen
     *    device, as evidenced by tablets running Windows 7 or, alas,
     *    the Palm Pre / WebOS (touch) phones.
     *
     * Additionally, Chrome (desktop) used to lie about its support on this,
     *    but that has since been rectified: crbug.com/36415
     *
     * We also test for Firefox 4 Multitouch Support.
     *
     * For more info, see: modernizr.github.com/Modernizr/touch.html
     */

    tests['touch'] = function() {
        var bool;

        if(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
          bool = true;
        } else {
          injectElementWithStyles(['@media (',prefixes.join('touch-enabled),('),mod,')','{#modernizr{top:9px;position:absolute}}'].join(''), function( node ) {
            bool = node.offsetTop === 9;
          });
        }

        return bool;
    };


    // geolocation is often considered a trivial feature detect...
    // Turns out, it's quite tricky to get right:
    //
    // Using !!navigator.geolocation does two things we don't want. It:
    //   1. Leaks memory in IE9: github.com/Modernizr/Modernizr/issues/513
    //   2. Disables page caching in WebKit: webk.it/43956
    //
    // Meanwhile, in Firefox < 8, an about:config setting could expose
    // a false positive that would throw an exception: bugzil.la/688158

    tests['geolocation'] = function() {
        return 'geolocation' in navigator;
    };


    tests['postmessage'] = function() {
      return !!window.postMessage;
    };


    // Chrome incognito mode used to throw an exception when using openDatabase
    // It doesn't anymore.
    tests['websqldatabase'] = function() {
      return !!window.openDatabase;
    };

    // Vendors had inconsistent prefixing with the experimental Indexed DB:
    // - Webkit's implementation is accessible through webkitIndexedDB
    // - Firefox shipped moz_indexedDB before FF4b9, but since then has been mozIndexedDB
    // For speed, we don't test the legacy (and beta-only) indexedDB
    tests['indexedDB'] = function() {
      return !!testPropsAll("indexedDB", window);
    };

    // documentMode logic from YUI to filter out IE8 Compat Mode
    //   which false positives.
    tests['hashchange'] = function() {
      return isEventSupported('hashchange', window) && (document.documentMode === undefined || document.documentMode > 7);
    };

    // Per 1.6:
    // This used to be Modernizr.historymanagement but the longer
    // name has been deprecated in favor of a shorter and property-matching one.
    // The old API is still available in 1.6, but as of 2.0 will throw a warning,
    // and in the first release thereafter disappear entirely.
    tests['history'] = function() {
      return !!(window.history && history.pushState);
    };

    tests['draganddrop'] = function() {
        var div = document.createElement('div');
        return ('draggable' in div) || ('ondragstart' in div && 'ondrop' in div);
    };

    // FF3.6 was EOL'ed on 4/24/12, but the ESR version of FF10
    // will be supported until FF19 (2/12/13), at which time, ESR becomes FF17.
    // FF10 still uses prefixes, so check for it until then.
    // for more ESR info, see: mozilla.org/en-US/firefox/organizations/faq/
    tests['websockets'] = function() {
        return 'WebSocket' in window || 'MozWebSocket' in window;
    };


    // css-tricks.com/rgba-browser-support/
    tests['rgba'] = function() {
        // Set an rgba() color and check the returned value

        setCss('background-color:rgba(150,255,150,.5)');

        return contains(mStyle.backgroundColor, 'rgba');
    };

    tests['hsla'] = function() {
        // Same as rgba(), in fact, browsers re-map hsla() to rgba() internally,
        //   except IE9 who retains it as hsla

        setCss('background-color:hsla(120,40%,100%,.5)');

        return contains(mStyle.backgroundColor, 'rgba') || contains(mStyle.backgroundColor, 'hsla');
    };

    tests['multiplebgs'] = function() {
        // Setting multiple images AND a color on the background shorthand property
        //  and then querying the style.background property value for the number of
        //  occurrences of "url(" is a reliable method for detecting ACTUAL support for this!

        setCss('background:url(https://),url(https://),red url(https://)');

        // If the UA supports multiple backgrounds, there should be three occurrences
        //   of the string "url(" in the return value for elemStyle.background

        return (/(url\s*\(.*?){3}/).test(mStyle.background);
    };



    // this will false positive in Opera Mini
    //   github.com/Modernizr/Modernizr/issues/396

    tests['backgroundsize'] = function() {
        return testPropsAll('backgroundSize');
    };

    tests['borderimage'] = function() {
        return testPropsAll('borderImage');
    };


    // Super comprehensive table about all the unique implementations of
    // border-radius: muddledramblings.com/table-of-css3-border-radius-compliance

    tests['borderradius'] = function() {
        return testPropsAll('borderRadius');
    };

    // WebOS unfortunately false positives on this test.
    tests['boxshadow'] = function() {
        return testPropsAll('boxShadow');
    };

    // FF3.0 will false positive on this test
    tests['textshadow'] = function() {
        return document.createElement('div').style.textShadow === '';
    };


    tests['opacity'] = function() {
        // Browsers that actually have CSS Opacity implemented have done so
        //  according to spec, which means their return values are within the
        //  range of [0.0,1.0] - including the leading zero.

        setCssAll('opacity:.55');

        // The non-literal . in this regex is intentional:
        //   German Chrome returns this value as 0,55
        // github.com/Modernizr/Modernizr/issues/#issue/59/comment/516632
        return (/^0.55$/).test(mStyle.opacity);
    };


    // Note, Android < 4 will pass this test, but can only animate
    //   a single property at a time
    //   daneden.me/2011/12/putting-up-with-androids-bullshit/
    tests['cssanimations'] = function() {
        return testPropsAll('animationName');
    };


    tests['csscolumns'] = function() {
        return testPropsAll('columnCount');
    };


    tests['cssgradients'] = function() {
        /**
         * For CSS Gradients syntax, please see:
         * webkit.org/blog/175/introducing-css-gradients/
         * developer.mozilla.org/en/CSS/-moz-linear-gradient
         * developer.mozilla.org/en/CSS/-moz-radial-gradient
         * dev.w3.org/csswg/css3-images/#gradients-
         */

        var str1 = 'background-image:',
            str2 = 'gradient(linear,left top,right bottom,from(#9f9),to(white));',
            str3 = 'linear-gradient(left top,#9f9, white);';

        setCss(
             // legacy webkit syntax (FIXME: remove when syntax not in use anymore)
              (str1 + '-webkit- '.split(' ').join(str2 + str1) +
             // standard syntax             // trailing 'background-image:'
              prefixes.join(str3 + str1)).slice(0, -str1.length)
        );

        return contains(mStyle.backgroundImage, 'gradient');
    };


    tests['cssreflections'] = function() {
        return testPropsAll('boxReflect');
    };


    tests['csstransforms'] = function() {
        return !!testPropsAll('transform');
    };


    tests['csstransforms3d'] = function() {

        var ret = !!testPropsAll('perspective');

        // Webkit's 3D transforms are passed off to the browser's own graphics renderer.
        //   It works fine in Safari on Leopard and Snow Leopard, but not in Chrome in
        //   some conditions. As a result, Webkit typically recognizes the syntax but
        //   will sometimes throw a false positive, thus we must do a more thorough check:
        if ( ret && 'webkitPerspective' in docElement.style ) {

          // Webkit allows this media query to succeed only if the feature is enabled.
          // `@media (transform-3d),(-webkit-transform-3d){ ... }`
          injectElementWithStyles('@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}', function( node, rule ) {
            ret = node.offsetLeft === 9 && node.offsetHeight === 3;
          });
        }
        return ret;
    };


    tests['csstransitions'] = function() {
        return testPropsAll('transition');
    };


    /*>>fontface*/
    // @font-face detection routine by Diego Perini
    // javascript.nwbox.com/CSSSupport/

    // false positives:
    //   WebOS github.com/Modernizr/Modernizr/issues/342
    //   WP7   github.com/Modernizr/Modernizr/issues/538
    tests['fontface'] = function() {
        var bool;

        injectElementWithStyles('@font-face {font-family:"font";src:url("https://")}', function( node, rule ) {
          var style = document.getElementById('smodernizr'),
              sheet = style.sheet || style.styleSheet,
              cssText = sheet ? (sheet.cssRules && sheet.cssRules[0] ? sheet.cssRules[0].cssText : sheet.cssText || '') : '';

          bool = /src/i.test(cssText) && cssText.indexOf(rule.split(' ')[0]) === 0;
        });

        return bool;
    };
    /*>>fontface*/

    // CSS generated content detection
    tests['generatedcontent'] = function() {
        var bool;

        injectElementWithStyles(['#',mod,'{font:0/0 a}#',mod,':after{content:"',smile,'";visibility:hidden;font:3px/1 a}'].join(''), function( node ) {
          bool = node.offsetHeight >= 3;
        });

        return bool;
    };



    // These tests evaluate support of the video/audio elements, as well as
    // testing what types of content they support.
    //
    // We're using the Boolean constructor here, so that we can extend the value
    // e.g.  Modernizr.video     // true
    //       Modernizr.video.ogg // 'probably'
    //
    // Codec values from : github.com/NielsLeenheer/html5test/blob/9106a8/index.html#L845
    //                     thx to NielsLeenheer and zcorpan

    // Note: in some older browsers, "no" was a return value instead of empty string.
    //   It was live in FF3.5.0 and 3.5.1, but fixed in 3.5.2
    //   It was also live in Safari 4.0.0 - 4.0.4, but fixed in 4.0.5

    tests['video'] = function() {
        var elem = document.createElement('video'),
            bool = false;

        // IE9 Running on Windows Server SKU can cause an exception to be thrown, bug #224
        try {
            if ( bool = !!elem.canPlayType ) {
                bool      = new Boolean(bool);
                bool.ogg  = elem.canPlayType('video/ogg; codecs="theora"')      .replace(/^no$/,'');

                // Without QuickTime, this value will be `undefined`. github.com/Modernizr/Modernizr/issues/546
                bool.h264 = elem.canPlayType('video/mp4; codecs="avc1.42E01E"') .replace(/^no$/,'');

                bool.webm = elem.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,'');
            }

        } catch(e) { }

        return bool;
    };

    tests['audio'] = function() {
        var elem = document.createElement('audio'),
            bool = false;

        try {
            if ( bool = !!elem.canPlayType ) {
                bool      = new Boolean(bool);
                bool.ogg  = elem.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,'');
                bool.mp3  = elem.canPlayType('audio/mpeg;')               .replace(/^no$/,'');

                // Mimetypes accepted:
                //   developer.mozilla.org/En/Media_formats_supported_by_the_audio_and_video_elements
                //   bit.ly/iphoneoscodecs
                bool.wav  = elem.canPlayType('audio/wav; codecs="1"')     .replace(/^no$/,'');
                bool.m4a  = ( elem.canPlayType('audio/x-m4a;')            ||
                              elem.canPlayType('audio/aac;'))             .replace(/^no$/,'');
            }
        } catch(e) { }

        return bool;
    };


    // In FF4, if disabled, window.localStorage should === null.

    // Normally, we could not test that directly and need to do a
    //   `('localStorage' in window) && ` test first because otherwise Firefox will
    //   throw bugzil.la/365772 if cookies are disabled

    // Also in iOS5 Private Browsing mode, attempting to use localStorage.setItem
    // will throw the exception:
    //   QUOTA_EXCEEDED_ERRROR DOM Exception 22.
    // Peculiarly, getItem and removeItem calls do not throw.

    // Because we are forced to try/catch this, we'll go aggressive.

    // Just FWIW: IE8 Compat mode supports these features completely:
    //   www.quirksmode.org/dom/html5.html
    // But IE8 doesn't support either with local files

    tests['localstorage'] = function() {
        try {
            localStorage.setItem(mod, mod);
            localStorage.removeItem(mod);
            return true;
        } catch(e) {
            return false;
        }
    };

    tests['sessionstorage'] = function() {
        try {
            sessionStorage.setItem(mod, mod);
            sessionStorage.removeItem(mod);
            return true;
        } catch(e) {
            return false;
        }
    };


    tests['webworkers'] = function() {
        return !!window.Worker;
    };


    tests['applicationcache'] = function() {
        return !!window.applicationCache;
    };


    // Thanks to Erik Dahlstrom
    tests['svg'] = function() {
        return !!document.createElementNS && !!document.createElementNS(ns.svg, 'svg').createSVGRect;
    };

    // specifically for SVG inline in HTML, not within XHTML
    // test page: paulirish.com/demo/inline-svg
    tests['inlinesvg'] = function() {
      var div = document.createElement('div');
      div.innerHTML = '<svg/>';
      return (div.firstChild && div.firstChild.namespaceURI) == ns.svg;
    };

    // SVG SMIL animation
    tests['smil'] = function() {
        return !!document.createElementNS && /SVGAnimate/.test(toString.call(document.createElementNS(ns.svg, 'animate')));
    };

    // This test is only for clip paths in SVG proper, not clip paths on HTML content
    // demo: srufaculty.sru.edu/david.dailey/svg/newstuff/clipPath4.svg

    // However read the comments to dig into applying SVG clippaths to HTML content here:
    //   github.com/Modernizr/Modernizr/issues/213#issuecomment-1149491
    tests['svgclippaths'] = function() {
        return !!document.createElementNS && /SVGClipPath/.test(toString.call(document.createElementNS(ns.svg, 'clipPath')));
    };

    /*>>webforms*/
    // input features and input types go directly onto the ret object, bypassing the tests loop.
    // Hold this guy to execute in a moment.
    function webforms() {
        /*>>input*/
        // Run through HTML5's new input attributes to see if the UA understands any.
        // We're using f which is the <input> element created early on
        // Mike Taylr has created a comprehensive resource for testing these attributes
        //   when applied to all input types:
        //   miketaylr.com/code/input-type-attr.html
        // spec: www.whatwg.org/specs/web-apps/current-work/multipage/the-input-element.html#input-type-attr-summary

        // Only input placeholder is tested while textarea's placeholder is not.
        // Currently Safari 4 and Opera 11 have support only for the input placeholder
        // Both tests are available in feature-detects/forms-placeholder.js
        Modernizr['input'] = (function( props ) {
            for ( var i = 0, len = props.length; i < len; i++ ) {
                attrs[ props[i] ] = !!(props[i] in inputElem);
            }
            if (attrs.list){
              // safari false positive's on datalist: webk.it/74252
              // see also github.com/Modernizr/Modernizr/issues/146
              attrs.list = !!(document.createElement('datalist') && window.HTMLDataListElement);
            }
            return attrs;
        })('autocomplete autofocus list placeholder max min multiple pattern required step'.split(' '));
        /*>>input*/

        /*>>inputtypes*/
        // Run through HTML5's new input types to see if the UA understands any.
        //   This is put behind the tests runloop because it doesn't return a
        //   true/false like all the other tests; instead, it returns an object
        //   containing each input type with its corresponding true/false value

        // Big thanks to @miketaylr for the html5 forms expertise. miketaylr.com/
        Modernizr['inputtypes'] = (function(props) {

            for ( var i = 0, bool, inputElemType, defaultView, len = props.length; i < len; i++ ) {

                inputElem.setAttribute('type', inputElemType = props[i]);
                bool = inputElem.type !== 'text';

                // We first check to see if the type we give it sticks..
                // If the type does, we feed it a textual value, which shouldn't be valid.
                // If the value doesn't stick, we know there's input sanitization which infers a custom UI
                if ( bool ) {

                    inputElem.value         = smile;
                    inputElem.style.cssText = 'position:absolute;visibility:hidden;';

                    if ( /^range$/.test(inputElemType) && inputElem.style.WebkitAppearance !== undefined ) {

                      docElement.appendChild(inputElem);
                      defaultView = document.defaultView;

                      // Safari 2-4 allows the smiley as a value, despite making a slider
                      bool =  defaultView.getComputedStyle &&
                              defaultView.getComputedStyle(inputElem, null).WebkitAppearance !== 'textfield' &&
                              // Mobile android web browser has false positive, so must
                              // check the height to see if the widget is actually there.
                              (inputElem.offsetHeight !== 0);

                      docElement.removeChild(inputElem);

                    } else if ( /^(search|tel)$/.test(inputElemType) ){
                      // Spec doesn't define any special parsing or detectable UI
                      //   behaviors so we pass these through as true

                      // Interestingly, opera fails the earlier test, so it doesn't
                      //  even make it here.

                    } else if ( /^(url|email)$/.test(inputElemType) ) {
                      // Real url and email support comes with prebaked validation.
                      bool = inputElem.checkValidity && inputElem.checkValidity() === false;

                    } else {
                      // If the upgraded input compontent rejects the :) text, we got a winner
                      bool = inputElem.value != smile;
                    }
                }

                inputs[ props[i] ] = !!bool;
            }
            return inputs;
        })('search tel url email datetime date month week time datetime-local number range color'.split(' '));
        /*>>inputtypes*/
    }
    /*>>webforms*/


    // End of test definitions
    // -----------------------



    // Run through all tests and detect their support in the current UA.
    // todo: hypothetically we could be doing an array of tests and use a basic loop here.
    for ( var feature in tests ) {
        if ( hasOwnProp(tests, feature) ) {
            // run the test, throw the return value into the Modernizr,
            //   then based on that boolean, define an appropriate className
            //   and push it into an array of classes we'll join later.
            featureName  = feature.toLowerCase();
            Modernizr[featureName] = tests[feature]();

            classes.push((Modernizr[featureName] ? '' : 'no-') + featureName);
        }
    }

    /*>>webforms*/
    // input tests need to run.
    Modernizr.input || webforms();
    /*>>webforms*/


    /**
     * addTest allows the user to define their own feature tests
     * the result will be added onto the Modernizr object,
     * as well as an appropriate className set on the html element
     *
     * @param feature - String naming the feature
     * @param test - Function returning true if feature is supported, false if not
     */
     Modernizr.addTest = function ( feature, test ) {
       if ( typeof feature == 'object' ) {
         for ( var key in feature ) {
           if ( hasOwnProp( feature, key ) ) {
             Modernizr.addTest( key, feature[ key ] );
           }
         }
       } else {

         feature = feature.toLowerCase();

         if ( Modernizr[feature] !== undefined ) {
           // we're going to quit if you're trying to overwrite an existing test
           // if we were to allow it, we'd do this:
           //   var re = new RegExp("\\b(no-)?" + feature + "\\b");
           //   docElement.className = docElement.className.replace( re, '' );
           // but, no rly, stuff 'em.
           return Modernizr;
         }

         test = typeof test == 'function' ? test() : test;

         if (typeof enableClasses !== "undefined" && enableClasses) {
           docElement.className += ' ' + (test ? '' : 'no-') + feature;
         }
         Modernizr[feature] = test;

       }

       return Modernizr; // allow chaining.
     };


    // Reset modElem.cssText to nothing to reduce memory footprint.
    setCss('');
    modElem = inputElem = null;

    /*>>shiv*/
    /*! HTML5 Shiv v3.6.1 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed */
    ;(function(window, document) {
    /*jshint evil:true */
      /** Preset options */
      var options = window.html5 || {};

      /** Used to skip problem elements */
      var reSkip = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;

      /** Not all elements can be cloned in IE **/
      var saveClones = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;

      /** Detect whether the browser supports default html5 styles */
      var supportsHtml5Styles;

      /** Name of the expando, to work with multiple documents or to re-shiv one document */
      var expando = '_html5shiv';

      /** The id for the the documents expando */
      var expanID = 0;

      /** Cached data for each document */
      var expandoData = {};

      /** Detect whether the browser supports unknown elements */
      var supportsUnknownElements;

      (function() {
        try {
            var a = document.createElement('a');
            a.innerHTML = '<xyz></xyz>';
            //if the hidden property is implemented we can assume, that the browser supports basic HTML5 Styles
            supportsHtml5Styles = ('hidden' in a);

            supportsUnknownElements = a.childNodes.length == 1 || (function() {
              // assign a false positive if unable to shiv
              (document.createElement)('a');
              var frag = document.createDocumentFragment();
              return (
                typeof frag.cloneNode == 'undefined' ||
                typeof frag.createDocumentFragment == 'undefined' ||
                typeof frag.createElement == 'undefined'
              );
            }());
        } catch(e) {
          supportsHtml5Styles = true;
          supportsUnknownElements = true;
        }

      }());

      /*--------------------------------------------------------------------------*/

      /**
       * Creates a style sheet with the given CSS text and adds it to the document.
       * @private
       * @param {Document} ownerDocument The document.
       * @param {String} cssText The CSS text.
       * @returns {StyleSheet} The style element.
       */
      function addStyleSheet(ownerDocument, cssText) {
        var p = ownerDocument.createElement('p'),
            parent = ownerDocument.getElementsByTagName('head')[0] || ownerDocument.documentElement;

        p.innerHTML = 'x<style>' + cssText + '</style>';
        return parent.insertBefore(p.lastChild, parent.firstChild);
      }

      /**
       * Returns the value of `html5.elements` as an array.
       * @private
       * @returns {Array} An array of shived element node names.
       */
      function getElements() {
        var elements = html5.elements;
        return typeof elements == 'string' ? elements.split(' ') : elements;
      }

        /**
       * Returns the data associated to the given document
       * @private
       * @param {Document} ownerDocument The document.
       * @returns {Object} An object of data.
       */
      function getExpandoData(ownerDocument) {
        var data = expandoData[ownerDocument[expando]];
        if (!data) {
            data = {};
            expanID++;
            ownerDocument[expando] = expanID;
            expandoData[expanID] = data;
        }
        return data;
      }

      /**
       * returns a shived element for the given nodeName and document
       * @memberOf html5
       * @param {String} nodeName name of the element
       * @param {Document} ownerDocument The context document.
       * @returns {Object} The shived element.
       */
      function createElement(nodeName, ownerDocument, data){
        if (!ownerDocument) {
            ownerDocument = document;
        }
        if(supportsUnknownElements){
            return ownerDocument.createElement(nodeName);
        }
        if (!data) {
            data = getExpandoData(ownerDocument);
        }
        var node;

        if (data.cache[nodeName]) {
            node = data.cache[nodeName].cloneNode();
        } else if (saveClones.test(nodeName)) {
            node = (data.cache[nodeName] = data.createElem(nodeName)).cloneNode();
        } else {
            node = data.createElem(nodeName);
        }

        // Avoid adding some elements to fragments in IE < 9 because
        // * Attributes like `name` or `type` cannot be set/changed once an element
        //   is inserted into a document/fragment
        // * Link elements with `src` attributes that are inaccessible, as with
        //   a 403 response, will cause the tab/window to crash
        // * Script elements appended to fragments will execute when their `src`
        //   or `text` property is set
        return node.canHaveChildren && !reSkip.test(nodeName) ? data.frag.appendChild(node) : node;
      }

      /**
       * returns a shived DocumentFragment for the given document
       * @memberOf html5
       * @param {Document} ownerDocument The context document.
       * @returns {Object} The shived DocumentFragment.
       */
      function createDocumentFragment(ownerDocument, data){
        if (!ownerDocument) {
            ownerDocument = document;
        }
        if(supportsUnknownElements){
            return ownerDocument.createDocumentFragment();
        }
        data = data || getExpandoData(ownerDocument);
        var clone = data.frag.cloneNode(),
            i = 0,
            elems = getElements(),
            l = elems.length;
        for(;i<l;i++){
            clone.createElement(elems[i]);
        }
        return clone;
      }

      /**
       * Shivs the `createElement` and `createDocumentFragment` methods of the document.
       * @private
       * @param {Document|DocumentFragment} ownerDocument The document.
       * @param {Object} data of the document.
       */
      function shivMethods(ownerDocument, data) {
        if (!data.cache) {
            data.cache = {};
            data.createElem = ownerDocument.createElement;
            data.createFrag = ownerDocument.createDocumentFragment;
            data.frag = data.createFrag();
        }


        ownerDocument.createElement = function(nodeName) {
          //abort shiv
          if (!html5.shivMethods) {
              return data.createElem(nodeName);
          }
          return createElement(nodeName, ownerDocument, data);
        };

        ownerDocument.createDocumentFragment = Function('h,f', 'return function(){' +
          'var n=f.cloneNode(),c=n.createElement;' +
          'h.shivMethods&&(' +
            // unroll the `createElement` calls
            getElements().join().replace(/\w+/g, function(nodeName) {
              data.createElem(nodeName);
              data.frag.createElement(nodeName);
              return 'c("' + nodeName + '")';
            }) +
          ');return n}'
        )(html5, data.frag);
      }

      /*--------------------------------------------------------------------------*/

      /**
       * Shivs the given document.
       * @memberOf html5
       * @param {Document} ownerDocument The document to shiv.
       * @returns {Document} The shived document.
       */
      function shivDocument(ownerDocument) {
        if (!ownerDocument) {
            ownerDocument = document;
        }
        var data = getExpandoData(ownerDocument);

        if (html5.shivCSS && !supportsHtml5Styles && !data.hasCSS) {
          data.hasCSS = !!addStyleSheet(ownerDocument,
            // corrects block display not defined in IE6/7/8/9
            'article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}' +
            // adds styling not present in IE6/7/8/9
            'mark{background:#FF0;color:#000}'
          );
        }
        if (!supportsUnknownElements) {
          shivMethods(ownerDocument, data);
        }
        return ownerDocument;
      }

      /*--------------------------------------------------------------------------*/

      /**
       * The `html5` object is exposed so that more elements can be shived and
       * existing shiving can be detected on iframes.
       * @type Object
       * @example
       *
       * // options can be changed before the script is included
       * html5 = { 'elements': 'mark section', 'shivCSS': false, 'shivMethods': false };
       */
      var html5 = {

        /**
         * An array or space separated string of node names of the elements to shiv.
         * @memberOf html5
         * @type Array|String
         */
        'elements': options.elements || 'abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video',

        /**
         * A flag to indicate that the HTML5 style sheet should be inserted.
         * @memberOf html5
         * @type Boolean
         */
        'shivCSS': (options.shivCSS !== false),

        /**
         * Is equal to true if a browser supports creating unknown/HTML5 elements
         * @memberOf html5
         * @type boolean
         */
        'supportsUnknownElements': supportsUnknownElements,

        /**
         * A flag to indicate that the document's `createElement` and `createDocumentFragment`
         * methods should be overwritten.
         * @memberOf html5
         * @type Boolean
         */
        'shivMethods': (options.shivMethods !== false),

        /**
         * A string to describe the type of `html5` object ("default" or "default print").
         * @memberOf html5
         * @type String
         */
        'type': 'default',

        // shivs the document according to the specified `html5` object options
        'shivDocument': shivDocument,

        //creates a shived element
        createElement: createElement,

        //creates a shived documentFragment
        createDocumentFragment: createDocumentFragment
      };

      /*--------------------------------------------------------------------------*/

      // expose html5
      window.html5 = html5;

      // shiv the document
      shivDocument(document);

    }(this, document));
    /*>>shiv*/

    // Assign private properties to the return object with prefix
    Modernizr._version      = version;

    // expose these for the plugin API. Look in the source for how to join() them against your input
    /*>>prefixes*/
    Modernizr._prefixes     = prefixes;
    /*>>prefixes*/
    /*>>domprefixes*/
    Modernizr._domPrefixes  = domPrefixes;
    Modernizr._cssomPrefixes  = cssomPrefixes;
    /*>>domprefixes*/

    /*>>mq*/
    // Modernizr.mq tests a given media query, live against the current state of the window
    // A few important notes:
    //   * If a browser does not support media queries at all (eg. oldIE) the mq() will always return false
    //   * A max-width or orientation query will be evaluated against the current state, which may change later.
    //   * You must specify values. Eg. If you are testing support for the min-width media query use:
    //       Modernizr.mq('(min-width:0)')
    // usage:
    // Modernizr.mq('only screen and (max-width:768)')
    Modernizr.mq            = testMediaQuery;
    /*>>mq*/

    /*>>hasevent*/
    // Modernizr.hasEvent() detects support for a given event, with an optional element to test on
    // Modernizr.hasEvent('gesturestart', elem)
    Modernizr.hasEvent      = isEventSupported;
    /*>>hasevent*/

    /*>>testprop*/
    // Modernizr.testProp() investigates whether a given style property is recognized
    // Note that the property names must be provided in the camelCase variant.
    // Modernizr.testProp('pointerEvents')
    Modernizr.testProp      = function(prop){
        return testProps([prop]);
    };
    /*>>testprop*/

    /*>>testallprops*/
    // Modernizr.testAllProps() investigates whether a given style property,
    //   or any of its vendor-prefixed variants, is recognized
    // Note that the property names must be provided in the camelCase variant.
    // Modernizr.testAllProps('boxSizing')
    Modernizr.testAllProps  = testPropsAll;
    /*>>testallprops*/


    /*>>teststyles*/
    // Modernizr.testStyles() allows you to add custom styles to the document and test an element afterwards
    // Modernizr.testStyles('#modernizr { position:absolute }', function(elem, rule){ ... })
    Modernizr.testStyles    = injectElementWithStyles;
    /*>>teststyles*/


    /*>>prefixed*/
    // Modernizr.prefixed() returns the prefixed or nonprefixed property name variant of your input
    // Modernizr.prefixed('boxSizing') // 'MozBoxSizing'

    // Properties must be passed as dom-style camelcase, rather than `box-sizing` hypentated style.
    // Return values will also be the camelCase variant, if you need to translate that to hypenated style use:
    //
    //     str.replace(/([A-Z])/g, function(str,m1){ return '-' + m1.toLowerCase(); }).replace(/^ms-/,'-ms-');

    // If you're trying to ascertain which transition end event to bind to, you might do something like...
    //
    //     var transEndEventNames = {
    //       'WebkitTransition' : 'webkitTransitionEnd',
    //       'MozTransition'    : 'transitionend',
    //       'OTransition'      : 'oTransitionEnd',
    //       'msTransition'     : 'MSTransitionEnd',
    //       'transition'       : 'transitionend'
    //     },
    //     transEndEventName = transEndEventNames[ Modernizr.prefixed('transition') ];

    Modernizr.prefixed      = function(prop, obj, elem){
      if(!obj) {
        return testPropsAll(prop, 'pfx');
      } else {
        // Testing DOM property e.g. Modernizr.prefixed('requestAnimationFrame', window) // 'mozRequestAnimationFrame'
        return testPropsAll(prop, obj, elem);
      }
    };
    /*>>prefixed*/


    /*>>cssclasses*/
    // Remove "no-js" class from <html> element, if it exists:
    docElement.className = docElement.className.replace(/(^|\s)no-js(\s|$)/, '$1$2') +

                            // Add the new classes to the <html> element.
                            (enableClasses ? ' js ' + classes.join(' ') : '');
    /*>>cssclasses*/

    return Modernizr;

})(this, this.document);

/*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.5",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.5",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),a(c.target).is('input[type="radio"]')||a(c.target).is('input[type="checkbox"]')||c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.5",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.5",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger("hidden.bs.dropdown",f))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.5",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger("shown.bs.dropdown",h)}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.5",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.5",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),c.isInStateTrue()?void 0:(clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide())},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.5",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.5",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),
d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.5",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.5",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=e?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
/*
 * angular-ui-bootstrap
 * http://angular-ui.github.io/bootstrap/

 * Version: 0.11.2 - 2014-09-26
 * License: MIT
 */
angular.module("ui.bootstrap",["ui.bootstrap.tpls","ui.bootstrap.transition","ui.bootstrap.collapse","ui.bootstrap.accordion","ui.bootstrap.alert","ui.bootstrap.bindHtml","ui.bootstrap.buttons","ui.bootstrap.carousel","ui.bootstrap.dateparser","ui.bootstrap.position","ui.bootstrap.datepicker","ui.bootstrap.dropdown","ui.bootstrap.modal","ui.bootstrap.pagination","ui.bootstrap.tooltip","ui.bootstrap.popover","ui.bootstrap.progressbar","ui.bootstrap.rating","ui.bootstrap.tabs","ui.bootstrap.timepicker","ui.bootstrap.typeahead"]),angular.module("ui.bootstrap.tpls",["template/accordion/accordion-group.html","template/accordion/accordion.html","template/alert/alert.html","template/carousel/carousel.html","template/carousel/slide.html","template/datepicker/datepicker.html","template/datepicker/day.html","template/datepicker/month.html","template/datepicker/popup.html","template/datepicker/year.html","template/modal/backdrop.html","template/modal/window.html","template/pagination/pager.html","template/pagination/pagination.html","template/tooltip/tooltip-html-unsafe-popup.html","template/tooltip/tooltip-popup.html","template/popover/popover.html","template/progressbar/bar.html","template/progressbar/progress.html","template/progressbar/progressbar.html","template/rating/rating.html","template/tabs/tab.html","template/tabs/tabset.html","template/timepicker/timepicker.html","template/typeahead/typeahead-match.html","template/typeahead/typeahead-popup.html"]),angular.module("ui.bootstrap.transition",[]).factory("$transition",["$q","$timeout","$rootScope",function(a,b,c){function d(a){for(var b in a)if(void 0!==f.style[b])return a[b]}var e=function(d,f,g){g=g||{};var h=a.defer(),i=e[g.animation?"animationEndEventName":"transitionEndEventName"],j=function(){c.$apply(function(){d.unbind(i,j),h.resolve(d)})};return i&&d.bind(i,j),b(function(){angular.isString(f)?d.addClass(f):angular.isFunction(f)?f(d):angular.isObject(f)&&d.css(f),i||h.resolve(d)}),h.promise.cancel=function(){i&&d.unbind(i,j),h.reject("Transition cancelled")},h.promise},f=document.createElement("trans"),g={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"},h={WebkitTransition:"webkitAnimationEnd",MozTransition:"animationend",OTransition:"oAnimationEnd",transition:"animationend"};return e.transitionEndEventName=d(g),e.animationEndEventName=d(h),e}]),angular.module("ui.bootstrap.collapse",["ui.bootstrap.transition"]).directive("collapse",["$transition",function(a){return{link:function(b,c,d){function e(b){function d(){j===e&&(j=void 0)}var e=a(c,b);return j&&j.cancel(),j=e,e.then(d,d),e}function f(){k?(k=!1,g()):(c.removeClass("collapse").addClass("collapsing"),e({height:c[0].scrollHeight+"px"}).then(g))}function g(){c.removeClass("collapsing"),c.addClass("collapse in"),c.css({height:"auto"})}function h(){if(k)k=!1,i(),c.css({height:0});else{c.css({height:c[0].scrollHeight+"px"});{c[0].offsetWidth}c.removeClass("collapse in").addClass("collapsing"),e({height:0}).then(i)}}function i(){c.removeClass("collapsing"),c.addClass("collapse")}var j,k=!0;b.$watch(d.collapse,function(a){a?h():f()})}}}]),angular.module("ui.bootstrap.accordion",["ui.bootstrap.collapse"]).constant("accordionConfig",{closeOthers:!0}).controller("AccordionController",["$scope","$attrs","accordionConfig",function(a,b,c){this.groups=[],this.closeOthers=function(d){var e=angular.isDefined(b.closeOthers)?a.$eval(b.closeOthers):c.closeOthers;e&&angular.forEach(this.groups,function(a){a!==d&&(a.isOpen=!1)})},this.addGroup=function(a){var b=this;this.groups.push(a),a.$on("$destroy",function(){b.removeGroup(a)})},this.removeGroup=function(a){var b=this.groups.indexOf(a);-1!==b&&this.groups.splice(b,1)}}]).directive("accordion",function(){return{restrict:"EA",controller:"AccordionController",transclude:!0,replace:!1,templateUrl:"template/accordion/accordion.html"}}).directive("accordionGroup",function(){return{require:"^accordion",restrict:"EA",transclude:!0,replace:!0,templateUrl:"template/accordion/accordion-group.html",scope:{heading:"@",isOpen:"=?",isDisabled:"=?"},controller:function(){this.setHeading=function(a){this.heading=a}},link:function(a,b,c,d){d.addGroup(a),a.$watch("isOpen",function(b){b&&d.closeOthers(a)}),a.toggleOpen=function(){a.isDisabled||(a.isOpen=!a.isOpen)}}}}).directive("accordionHeading",function(){return{restrict:"EA",transclude:!0,template:"",replace:!0,require:"^accordionGroup",link:function(a,b,c,d,e){d.setHeading(e(a,function(){}))}}}).directive("accordionTransclude",function(){return{require:"^accordionGroup",link:function(a,b,c,d){a.$watch(function(){return d[c.accordionTransclude]},function(a){a&&(b.html(""),b.append(a))})}}}),angular.module("ui.bootstrap.alert",[]).controller("AlertController",["$scope","$attrs",function(a,b){a.closeable="close"in b}]).directive("alert",function(){return{restrict:"EA",controller:"AlertController",templateUrl:"template/alert/alert.html",transclude:!0,replace:!0,scope:{type:"@",close:"&"}}}),angular.module("ui.bootstrap.bindHtml",[]).directive("bindHtmlUnsafe",function(){return function(a,b,c){b.addClass("ng-binding").data("$binding",c.bindHtmlUnsafe),a.$watch(c.bindHtmlUnsafe,function(a){b.html(a||"")})}}),angular.module("ui.bootstrap.buttons",[]).constant("buttonConfig",{activeClass:"active",toggleEvent:"click"}).controller("ButtonsController",["buttonConfig",function(a){this.activeClass=a.activeClass||"active",this.toggleEvent=a.toggleEvent||"click"}]).directive("btnRadio",function(){return{require:["btnRadio","ngModel"],controller:"ButtonsController",link:function(a,b,c,d){var e=d[0],f=d[1];f.$render=function(){b.toggleClass(e.activeClass,angular.equals(f.$modelValue,a.$eval(c.btnRadio)))},b.bind(e.toggleEvent,function(){var d=b.hasClass(e.activeClass);(!d||angular.isDefined(c.uncheckable))&&a.$apply(function(){f.$setViewValue(d?null:a.$eval(c.btnRadio)),f.$render()})})}}}).directive("btnCheckbox",function(){return{require:["btnCheckbox","ngModel"],controller:"ButtonsController",link:function(a,b,c,d){function e(){return g(c.btnCheckboxTrue,!0)}function f(){return g(c.btnCheckboxFalse,!1)}function g(b,c){var d=a.$eval(b);return angular.isDefined(d)?d:c}var h=d[0],i=d[1];i.$render=function(){b.toggleClass(h.activeClass,angular.equals(i.$modelValue,e()))},b.bind(h.toggleEvent,function(){a.$apply(function(){i.$setViewValue(b.hasClass(h.activeClass)?f():e()),i.$render()})})}}}),angular.module("ui.bootstrap.carousel",["ui.bootstrap.transition"]).controller("CarouselController",["$scope","$timeout","$transition",function(a,b,c){function d(){e();var c=+a.interval;!isNaN(c)&&c>=0&&(g=b(f,c))}function e(){g&&(b.cancel(g),g=null)}function f(){h?(a.next(),d()):a.pause()}var g,h,i=this,j=i.slides=a.slides=[],k=-1;i.currentSlide=null;var l=!1;i.select=a.select=function(e,f){function g(){if(!l){if(i.currentSlide&&angular.isString(f)&&!a.noTransition&&e.$element){e.$element.addClass(f);{e.$element[0].offsetWidth}angular.forEach(j,function(a){angular.extend(a,{direction:"",entering:!1,leaving:!1,active:!1})}),angular.extend(e,{direction:f,active:!0,entering:!0}),angular.extend(i.currentSlide||{},{direction:f,leaving:!0}),a.$currentTransition=c(e.$element,{}),function(b,c){a.$currentTransition.then(function(){h(b,c)},function(){h(b,c)})}(e,i.currentSlide)}else h(e,i.currentSlide);i.currentSlide=e,k=m,d()}}function h(b,c){angular.extend(b,{direction:"",active:!0,leaving:!1,entering:!1}),angular.extend(c||{},{direction:"",active:!1,leaving:!1,entering:!1}),a.$currentTransition=null}var m=j.indexOf(e);void 0===f&&(f=m>k?"next":"prev"),e&&e!==i.currentSlide&&(a.$currentTransition?(a.$currentTransition.cancel(),b(g)):g())},a.$on("$destroy",function(){l=!0}),i.indexOfSlide=function(a){return j.indexOf(a)},a.next=function(){var b=(k+1)%j.length;return a.$currentTransition?void 0:i.select(j[b],"next")},a.prev=function(){var b=0>k-1?j.length-1:k-1;return a.$currentTransition?void 0:i.select(j[b],"prev")},a.isActive=function(a){return i.currentSlide===a},a.$watch("interval",d),a.$on("$destroy",e),a.play=function(){h||(h=!0,d())},a.pause=function(){a.noPause||(h=!1,e())},i.addSlide=function(b,c){b.$element=c,j.push(b),1===j.length||b.active?(i.select(j[j.length-1]),1==j.length&&a.play()):b.active=!1},i.removeSlide=function(a){var b=j.indexOf(a);j.splice(b,1),j.length>0&&a.active?i.select(b>=j.length?j[b-1]:j[b]):k>b&&k--}}]).directive("carousel",[function(){return{restrict:"EA",transclude:!0,replace:!0,controller:"CarouselController",require:"carousel",templateUrl:"template/carousel/carousel.html",scope:{interval:"=",noTransition:"=",noPause:"="}}}]).directive("slide",function(){return{require:"^carousel",restrict:"EA",transclude:!0,replace:!0,templateUrl:"template/carousel/slide.html",scope:{active:"=?"},link:function(a,b,c,d){d.addSlide(a,b),a.$on("$destroy",function(){d.removeSlide(a)}),a.$watch("active",function(b){b&&d.select(a)})}}}),angular.module("ui.bootstrap.dateparser",[]).service("dateParser",["$locale","orderByFilter",function(a,b){function c(a){var c=[],d=a.split("");return angular.forEach(e,function(b,e){var f=a.indexOf(e);if(f>-1){a=a.split(""),d[f]="("+b.regex+")",a[f]="$";for(var g=f+1,h=f+e.length;h>g;g++)d[g]="",a[g]="$";a=a.join(""),c.push({index:f,apply:b.apply})}}),{regex:new RegExp("^"+d.join("")+"$"),map:b(c,"index")}}function d(a,b,c){return 1===b&&c>28?29===c&&(a%4===0&&a%100!==0||a%400===0):3===b||5===b||8===b||10===b?31>c:!0}this.parsers={};var e={yyyy:{regex:"\\d{4}",apply:function(a){this.year=+a}},yy:{regex:"\\d{2}",apply:function(a){this.year=+a+2e3}},y:{regex:"\\d{1,4}",apply:function(a){this.year=+a}},MMMM:{regex:a.DATETIME_FORMATS.MONTH.join("|"),apply:function(b){this.month=a.DATETIME_FORMATS.MONTH.indexOf(b)}},MMM:{regex:a.DATETIME_FORMATS.SHORTMONTH.join("|"),apply:function(b){this.month=a.DATETIME_FORMATS.SHORTMONTH.indexOf(b)}},MM:{regex:"0[1-9]|1[0-2]",apply:function(a){this.month=a-1}},M:{regex:"[1-9]|1[0-2]",apply:function(a){this.month=a-1}},dd:{regex:"[0-2][0-9]{1}|3[0-1]{1}",apply:function(a){this.date=+a}},d:{regex:"[1-2]?[0-9]{1}|3[0-1]{1}",apply:function(a){this.date=+a}},EEEE:{regex:a.DATETIME_FORMATS.DAY.join("|")},EEE:{regex:a.DATETIME_FORMATS.SHORTDAY.join("|")}};this.parse=function(b,e){if(!angular.isString(b)||!e)return b;e=a.DATETIME_FORMATS[e]||e,this.parsers[e]||(this.parsers[e]=c(e));var f=this.parsers[e],g=f.regex,h=f.map,i=b.match(g);if(i&&i.length){for(var j,k={year:1900,month:0,date:1,hours:0},l=1,m=i.length;m>l;l++){var n=h[l-1];n.apply&&n.apply.call(k,i[l])}return d(k.year,k.month,k.date)&&(j=new Date(k.year,k.month,k.date,k.hours)),j}}}]),angular.module("ui.bootstrap.position",[]).factory("$position",["$document","$window",function(a,b){function c(a,c){return a.currentStyle?a.currentStyle[c]:b.getComputedStyle?b.getComputedStyle(a)[c]:a.style[c]}function d(a){return"static"===(c(a,"position")||"static")}var e=function(b){for(var c=a[0],e=b.offsetParent||c;e&&e!==c&&d(e);)e=e.offsetParent;return e||c};return{position:function(b){var c=this.offset(b),d={top:0,left:0},f=e(b[0]);f!=a[0]&&(d=this.offset(angular.element(f)),d.top+=f.clientTop-f.scrollTop,d.left+=f.clientLeft-f.scrollLeft);var g=b[0].getBoundingClientRect();return{width:g.width||b.prop("offsetWidth"),height:g.height||b.prop("offsetHeight"),top:c.top-d.top,left:c.left-d.left}},offset:function(c){var d=c[0].getBoundingClientRect();return{width:d.width||c.prop("offsetWidth"),height:d.height||c.prop("offsetHeight"),top:d.top+(b.pageYOffset||a[0].documentElement.scrollTop),left:d.left+(b.pageXOffset||a[0].documentElement.scrollLeft)}},positionElements:function(a,b,c,d){var e,f,g,h,i=c.split("-"),j=i[0],k=i[1]||"center";e=d?this.offset(a):this.position(a),f=b.prop("offsetWidth"),g=b.prop("offsetHeight");var l={center:function(){return e.left+e.width/2-f/2},left:function(){return e.left},right:function(){return e.left+e.width}},m={center:function(){return e.top+e.height/2-g/2},top:function(){return e.top},bottom:function(){return e.top+e.height}};switch(j){case"right":h={top:m[k](),left:l[j]()};break;case"left":h={top:m[k](),left:e.left-f};break;case"bottom":h={top:m[j](),left:l[k]()};break;default:h={top:e.top-g,left:l[k]()}}return h}}}]),angular.module("ui.bootstrap.datepicker",["ui.bootstrap.dateparser","ui.bootstrap.position"]).constant("datepickerConfig",{formatDay:"dd",formatMonth:"MMMM",formatYear:"yyyy",formatDayHeader:"EEE",formatDayTitle:"MMMM yyyy",formatMonthTitle:"yyyy",datepickerMode:"day",minMode:"day",maxMode:"year",showWeeks:!0,startingDay:0,yearRange:20,minDate:null,maxDate:null}).controller("DatepickerController",["$scope","$attrs","$parse","$interpolate","$timeout","$log","dateFilter","datepickerConfig",function(a,b,c,d,e,f,g,h){var i=this,j={$setViewValue:angular.noop};this.modes=["day","month","year"],angular.forEach(["formatDay","formatMonth","formatYear","formatDayHeader","formatDayTitle","formatMonthTitle","minMode","maxMode","showWeeks","startingDay","yearRange"],function(c,e){i[c]=angular.isDefined(b[c])?8>e?d(b[c])(a.$parent):a.$parent.$eval(b[c]):h[c]}),angular.forEach(["minDate","maxDate"],function(d){b[d]?a.$parent.$watch(c(b[d]),function(a){i[d]=a?new Date(a):null,i.refreshView()}):i[d]=h[d]?new Date(h[d]):null}),a.datepickerMode=a.datepickerMode||h.datepickerMode,a.uniqueId="datepicker-"+a.$id+"-"+Math.floor(1e4*Math.random()),this.activeDate=angular.isDefined(b.initDate)?a.$parent.$eval(b.initDate):new Date,a.isActive=function(b){return 0===i.compare(b.date,i.activeDate)?(a.activeDateId=b.uid,!0):!1},this.init=function(a){j=a,j.$render=function(){i.render()}},this.render=function(){if(j.$modelValue){var a=new Date(j.$modelValue),b=!isNaN(a);b?this.activeDate=a:f.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.'),j.$setValidity("date",b)}this.refreshView()},this.refreshView=function(){if(this.element){this._refreshView();var a=j.$modelValue?new Date(j.$modelValue):null;j.$setValidity("date-disabled",!a||this.element&&!this.isDisabled(a))}},this.createDateObject=function(a,b){var c=j.$modelValue?new Date(j.$modelValue):null;return{date:a,label:g(a,b),selected:c&&0===this.compare(a,c),disabled:this.isDisabled(a),current:0===this.compare(a,new Date)}},this.isDisabled=function(c){return this.minDate&&this.compare(c,this.minDate)<0||this.maxDate&&this.compare(c,this.maxDate)>0||b.dateDisabled&&a.dateDisabled({date:c,mode:a.datepickerMode})},this.split=function(a,b){for(var c=[];a.length>0;)c.push(a.splice(0,b));return c},a.select=function(b){if(a.datepickerMode===i.minMode){var c=j.$modelValue?new Date(j.$modelValue):new Date(0,0,0,0,0,0,0);c.setFullYear(b.getFullYear(),b.getMonth(),b.getDate()),j.$setViewValue(c),j.$render()}else i.activeDate=b,a.datepickerMode=i.modes[i.modes.indexOf(a.datepickerMode)-1]},a.move=function(a){var b=i.activeDate.getFullYear()+a*(i.step.years||0),c=i.activeDate.getMonth()+a*(i.step.months||0);i.activeDate.setFullYear(b,c,1),i.refreshView()},a.toggleMode=function(b){b=b||1,a.datepickerMode===i.maxMode&&1===b||a.datepickerMode===i.minMode&&-1===b||(a.datepickerMode=i.modes[i.modes.indexOf(a.datepickerMode)+b])},a.keys={13:"enter",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down"};var k=function(){e(function(){i.element[0].focus()},0,!1)};a.$on("datepicker.focus",k),a.keydown=function(b){var c=a.keys[b.which];if(c&&!b.shiftKey&&!b.altKey)if(b.preventDefault(),b.stopPropagation(),"enter"===c||"space"===c){if(i.isDisabled(i.activeDate))return;a.select(i.activeDate),k()}else!b.ctrlKey||"up"!==c&&"down"!==c?(i.handleKeyDown(c,b),i.refreshView()):(a.toggleMode("up"===c?1:-1),k())}}]).directive("datepicker",function(){return{restrict:"EA",replace:!0,templateUrl:"template/datepicker/datepicker.html",scope:{datepickerMode:"=?",dateDisabled:"&"},require:["datepicker","?^ngModel"],controller:"DatepickerController",link:function(a,b,c,d){var e=d[0],f=d[1];f&&e.init(f)}}}).directive("daypicker",["dateFilter",function(a){return{restrict:"EA",replace:!0,templateUrl:"template/datepicker/day.html",require:"^datepicker",link:function(b,c,d,e){function f(a,b){return 1!==b||a%4!==0||a%100===0&&a%400!==0?i[b]:29}function g(a,b){var c=new Array(b),d=new Date(a),e=0;for(d.setHours(12);b>e;)c[e++]=new Date(d),d.setDate(d.getDate()+1);return c}function h(a){var b=new Date(a);b.setDate(b.getDate()+4-(b.getDay()||7));var c=b.getTime();return b.setMonth(0),b.setDate(1),Math.floor(Math.round((c-b)/864e5)/7)+1}b.showWeeks=e.showWeeks,e.step={months:1},e.element=c;var i=[31,28,31,30,31,30,31,31,30,31,30,31];e._refreshView=function(){var c=e.activeDate.getFullYear(),d=e.activeDate.getMonth(),f=new Date(c,d,1),i=e.startingDay-f.getDay(),j=i>0?7-i:-i,k=new Date(f);j>0&&k.setDate(-j+1);for(var l=g(k,42),m=0;42>m;m++)l[m]=angular.extend(e.createDateObject(l[m],e.formatDay),{secondary:l[m].getMonth()!==d,uid:b.uniqueId+"-"+m});b.labels=new Array(7);for(var n=0;7>n;n++)b.labels[n]={abbr:a(l[n].date,e.formatDayHeader),full:a(l[n].date,"EEEE")};if(b.title=a(e.activeDate,e.formatDayTitle),b.rows=e.split(l,7),b.showWeeks){b.weekNumbers=[];for(var o=h(b.rows[0][0].date),p=b.rows.length;b.weekNumbers.push(o++)<p;);}},e.compare=function(a,b){return new Date(a.getFullYear(),a.getMonth(),a.getDate())-new Date(b.getFullYear(),b.getMonth(),b.getDate())},e.handleKeyDown=function(a){var b=e.activeDate.getDate();if("left"===a)b-=1;else if("up"===a)b-=7;else if("right"===a)b+=1;else if("down"===a)b+=7;else if("pageup"===a||"pagedown"===a){var c=e.activeDate.getMonth()+("pageup"===a?-1:1);e.activeDate.setMonth(c,1),b=Math.min(f(e.activeDate.getFullYear(),e.activeDate.getMonth()),b)}else"home"===a?b=1:"end"===a&&(b=f(e.activeDate.getFullYear(),e.activeDate.getMonth()));e.activeDate.setDate(b)},e.refreshView()}}}]).directive("monthpicker",["dateFilter",function(a){return{restrict:"EA",replace:!0,templateUrl:"template/datepicker/month.html",require:"^datepicker",link:function(b,c,d,e){e.step={years:1},e.element=c,e._refreshView=function(){for(var c=new Array(12),d=e.activeDate.getFullYear(),f=0;12>f;f++)c[f]=angular.extend(e.createDateObject(new Date(d,f,1),e.formatMonth),{uid:b.uniqueId+"-"+f});b.title=a(e.activeDate,e.formatMonthTitle),b.rows=e.split(c,3)},e.compare=function(a,b){return new Date(a.getFullYear(),a.getMonth())-new Date(b.getFullYear(),b.getMonth())},e.handleKeyDown=function(a){var b=e.activeDate.getMonth();if("left"===a)b-=1;else if("up"===a)b-=3;else if("right"===a)b+=1;else if("down"===a)b+=3;else if("pageup"===a||"pagedown"===a){var c=e.activeDate.getFullYear()+("pageup"===a?-1:1);e.activeDate.setFullYear(c)}else"home"===a?b=0:"end"===a&&(b=11);e.activeDate.setMonth(b)},e.refreshView()}}}]).directive("yearpicker",["dateFilter",function(){return{restrict:"EA",replace:!0,templateUrl:"template/datepicker/year.html",require:"^datepicker",link:function(a,b,c,d){function e(a){return parseInt((a-1)/f,10)*f+1}var f=d.yearRange;d.step={years:f},d.element=b,d._refreshView=function(){for(var b=new Array(f),c=0,g=e(d.activeDate.getFullYear());f>c;c++)b[c]=angular.extend(d.createDateObject(new Date(g+c,0,1),d.formatYear),{uid:a.uniqueId+"-"+c});a.title=[b[0].label,b[f-1].label].join(" - "),a.rows=d.split(b,5)},d.compare=function(a,b){return a.getFullYear()-b.getFullYear()},d.handleKeyDown=function(a){var b=d.activeDate.getFullYear();"left"===a?b-=1:"up"===a?b-=5:"right"===a?b+=1:"down"===a?b+=5:"pageup"===a||"pagedown"===a?b+=("pageup"===a?-1:1)*d.step.years:"home"===a?b=e(d.activeDate.getFullYear()):"end"===a&&(b=e(d.activeDate.getFullYear())+f-1),d.activeDate.setFullYear(b)},d.refreshView()}}}]).constant("datepickerPopupConfig",{datepickerPopup:"yyyy-MM-dd",currentText:"Today",clearText:"Clear",closeText:"Done",closeOnDateSelection:!0,appendToBody:!1,showButtonBar:!0}).directive("datepickerPopup",["$compile","$parse","$document","$position","dateFilter","dateParser","datepickerPopupConfig",function(a,b,c,d,e,f,g){return{restrict:"EA",require:"ngModel",scope:{isOpen:"=?",currentText:"@",clearText:"@",closeText:"@",dateDisabled:"&"},link:function(h,i,j,k){function l(a){return a.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()})}function m(a){if(a){if(angular.isDate(a)&&!isNaN(a))return k.$setValidity("date",!0),a;if(angular.isString(a)){var b=f.parse(a,n)||new Date(a);return isNaN(b)?void k.$setValidity("date",!1):(k.$setValidity("date",!0),b)}return void k.$setValidity("date",!1)}return k.$setValidity("date",!0),null}var n,o=angular.isDefined(j.closeOnDateSelection)?h.$parent.$eval(j.closeOnDateSelection):g.closeOnDateSelection,p=angular.isDefined(j.datepickerAppendToBody)?h.$parent.$eval(j.datepickerAppendToBody):g.appendToBody;h.showButtonBar=angular.isDefined(j.showButtonBar)?h.$parent.$eval(j.showButtonBar):g.showButtonBar,h.getText=function(a){return h[a+"Text"]||g[a+"Text"]},j.$observe("datepickerPopup",function(a){n=a||g.datepickerPopup,k.$render()});var q=angular.element("<div datepicker-popup-wrap><div datepicker></div></div>");q.attr({"ng-model":"date","ng-change":"dateSelection()"});var r=angular.element(q.children()[0]);j.datepickerOptions&&angular.forEach(h.$parent.$eval(j.datepickerOptions),function(a,b){r.attr(l(b),a)}),h.watchData={},angular.forEach(["minDate","maxDate","datepickerMode"],function(a){if(j[a]){var c=b(j[a]);if(h.$parent.$watch(c,function(b){h.watchData[a]=b}),r.attr(l(a),"watchData."+a),"datepickerMode"===a){var d=c.assign;h.$watch("watchData."+a,function(a,b){a!==b&&d(h.$parent,a)})}}}),j.dateDisabled&&r.attr("date-disabled","dateDisabled({ date: date, mode: mode })"),k.$parsers.unshift(m),h.dateSelection=function(a){angular.isDefined(a)&&(h.date=a),k.$setViewValue(h.date),k.$render(),o&&(h.isOpen=!1,i[0].focus())},i.bind("input change keyup",function(){h.$apply(function(){h.date=k.$modelValue})}),k.$render=function(){var a=k.$viewValue?e(k.$viewValue,n):"";i.val(a),h.date=m(k.$modelValue)};var s=function(a){h.isOpen&&a.target!==i[0]&&h.$apply(function(){h.isOpen=!1})},t=function(a){h.keydown(a)};i.bind("keydown",t),h.keydown=function(a){27===a.which?(a.preventDefault(),a.stopPropagation(),h.close()):40!==a.which||h.isOpen||(h.isOpen=!0)},h.$watch("isOpen",function(a){a?(h.$broadcast("datepicker.focus"),h.position=p?d.offset(i):d.position(i),h.position.top=h.position.top+i.prop("offsetHeight"),c.bind("click",s)):c.unbind("click",s)}),h.select=function(a){if("today"===a){var b=new Date;angular.isDate(k.$modelValue)?(a=new Date(k.$modelValue),a.setFullYear(b.getFullYear(),b.getMonth(),b.getDate())):a=new Date(b.setHours(0,0,0,0))}h.dateSelection(a)},h.close=function(){h.isOpen=!1,i[0].focus()};var u=a(q)(h);q.remove(),p?c.find("body").append(u):i.after(u),h.$on("$destroy",function(){u.remove(),i.unbind("keydown",t),c.unbind("click",s)})}}}]).directive("datepickerPopupWrap",function(){return{restrict:"EA",replace:!0,transclude:!0,templateUrl:"template/datepicker/popup.html",link:function(a,b){b.bind("click",function(a){a.preventDefault(),a.stopPropagation()})}}}),angular.module("ui.bootstrap.dropdown",[]).constant("dropdownConfig",{openClass:"open"}).service("dropdownService",["$document",function(a){var b=null;this.open=function(e){b||(a.bind("click",c),a.bind("keydown",d)),b&&b!==e&&(b.isOpen=!1),b=e},this.close=function(e){b===e&&(b=null,a.unbind("click",c),a.unbind("keydown",d))};var c=function(a){var c=b.getToggleElement();a&&c&&c[0].contains(a.target)||b.$apply(function(){b.isOpen=!1})},d=function(a){27===a.which&&(b.focusToggleElement(),c())}}]).controller("DropdownController",["$scope","$attrs","$parse","dropdownConfig","dropdownService","$animate",function(a,b,c,d,e,f){var g,h=this,i=a.$new(),j=d.openClass,k=angular.noop,l=b.onToggle?c(b.onToggle):angular.noop;this.init=function(d){h.$element=d,b.isOpen&&(g=c(b.isOpen),k=g.assign,a.$watch(g,function(a){i.isOpen=!!a}))},this.toggle=function(a){return i.isOpen=arguments.length?!!a:!i.isOpen},this.isOpen=function(){return i.isOpen},i.getToggleElement=function(){return h.toggleElement},i.focusToggleElement=function(){h.toggleElement&&h.toggleElement[0].focus()},i.$watch("isOpen",function(b,c){f[b?"addClass":"removeClass"](h.$element,j),b?(i.focusToggleElement(),e.open(i)):e.close(i),k(a,b),angular.isDefined(b)&&b!==c&&l(a,{open:!!b})}),a.$on("$locationChangeSuccess",function(){i.isOpen=!1}),a.$on("$destroy",function(){i.$destroy()})}]).directive("dropdown",function(){return{restrict:"CA",controller:"DropdownController",link:function(a,b,c,d){d.init(b)}}}).directive("dropdownToggle",function(){return{restrict:"CA",require:"?^dropdown",link:function(a,b,c,d){if(d){d.toggleElement=b;var e=function(e){e.preventDefault(),b.hasClass("disabled")||c.disabled||a.$apply(function(){d.toggle()})};b.bind("click",e),b.attr({"aria-haspopup":!0,"aria-expanded":!1}),a.$watch(d.isOpen,function(a){b.attr("aria-expanded",!!a)}),a.$on("$destroy",function(){b.unbind("click",e)})}}}}),angular.module("ui.bootstrap.modal",["ui.bootstrap.transition"]).factory("$$stackedMap",function(){return{createNew:function(){var a=[];return{add:function(b,c){a.push({key:b,value:c})},get:function(b){for(var c=0;c<a.length;c++)if(b==a[c].key)return a[c]},keys:function(){for(var b=[],c=0;c<a.length;c++)b.push(a[c].key);return b},top:function(){return a[a.length-1]},remove:function(b){for(var c=-1,d=0;d<a.length;d++)if(b==a[d].key){c=d;break}return a.splice(c,1)[0]},removeTop:function(){return a.splice(a.length-1,1)[0]},length:function(){return a.length}}}}}).directive("modalBackdrop",["$timeout",function(a){return{restrict:"EA",replace:!0,templateUrl:"template/modal/backdrop.html",link:function(b,c,d){b.backdropClass=d.backdropClass||"",b.animate=!1,a(function(){b.animate=!0})}}}]).directive("modalWindow",["$modalStack","$timeout",function(a,b){return{restrict:"EA",scope:{index:"@",animate:"="},replace:!0,transclude:!0,templateUrl:function(a,b){return b.templateUrl||"template/modal/window.html"},link:function(c,d,e){d.addClass(e.windowClass||""),c.size=e.size,b(function(){c.animate=!0,d[0].querySelectorAll("[autofocus]").length||d[0].focus()}),c.close=function(b){var c=a.getTop();c&&c.value.backdrop&&"static"!=c.value.backdrop&&b.target===b.currentTarget&&(b.preventDefault(),b.stopPropagation(),a.dismiss(c.key,"backdrop click"))}}}}]).directive("modalTransclude",function(){return{link:function(a,b,c,d,e){e(a.$parent,function(a){b.empty(),b.append(a)})}}}).factory("$modalStack",["$transition","$timeout","$document","$compile","$rootScope","$$stackedMap",function(a,b,c,d,e,f){function g(){for(var a=-1,b=n.keys(),c=0;c<b.length;c++)n.get(b[c]).value.backdrop&&(a=c);return a}function h(a){var b=c.find("body").eq(0),d=n.get(a).value;n.remove(a),j(d.modalDomEl,d.modalScope,300,function(){d.modalScope.$destroy(),b.toggleClass(m,n.length()>0),i()})}function i(){if(k&&-1==g()){var a=l;j(k,l,150,function(){a.$destroy(),a=null}),k=void 0,l=void 0}}function j(c,d,e,f){function g(){g.done||(g.done=!0,c.remove(),f&&f())}d.animate=!1;var h=a.transitionEndEventName;if(h){var i=b(g,e);c.bind(h,function(){b.cancel(i),g(),d.$apply()})}else b(g)}var k,l,m="modal-open",n=f.createNew(),o={};return e.$watch(g,function(a){l&&(l.index=a)}),c.bind("keydown",function(a){var b;27===a.which&&(b=n.top(),b&&b.value.keyboard&&(a.preventDefault(),e.$apply(function(){o.dismiss(b.key,"escape key press")})))}),o.open=function(a,b){n.add(a,{deferred:b.deferred,modalScope:b.scope,backdrop:b.backdrop,keyboard:b.keyboard});var f=c.find("body").eq(0),h=g();if(h>=0&&!k){l=e.$new(!0),l.index=h;var i=angular.element("<div modal-backdrop></div>");i.attr("backdrop-class",b.backdropClass),k=d(i)(l),f.append(k)}var j=angular.element("<div modal-window></div>");j.attr({"template-url":b.windowTemplateUrl,"window-class":b.windowClass,size:b.size,index:n.length()-1,animate:"animate"}).html(b.content);var o=d(j)(b.scope);n.top().value.modalDomEl=o,f.append(o),f.addClass(m)},o.close=function(a,b){var c=n.get(a);c&&(c.value.deferred.resolve(b),h(a))},o.dismiss=function(a,b){var c=n.get(a);c&&(c.value.deferred.reject(b),h(a))},o.dismissAll=function(a){for(var b=this.getTop();b;)this.dismiss(b.key,a),b=this.getTop()},o.getTop=function(){return n.top()},o}]).provider("$modal",function(){var a={options:{backdrop:!0,keyboard:!0},$get:["$injector","$rootScope","$q","$http","$templateCache","$controller","$modalStack",function(b,c,d,e,f,g,h){function i(a){return a.template?d.when(a.template):e.get(angular.isFunction(a.templateUrl)?a.templateUrl():a.templateUrl,{cache:f}).then(function(a){return a.data})}function j(a){var c=[];return angular.forEach(a,function(a){(angular.isFunction(a)||angular.isArray(a))&&c.push(d.when(b.invoke(a)))}),c}var k={};return k.open=function(b){var e=d.defer(),f=d.defer(),k={result:e.promise,opened:f.promise,close:function(a){h.close(k,a)},dismiss:function(a){h.dismiss(k,a)}};if(b=angular.extend({},a.options,b),b.resolve=b.resolve||{},!b.template&&!b.templateUrl)throw new Error("One of template or templateUrl options is required.");var l=d.all([i(b)].concat(j(b.resolve)));return l.then(function(a){var d=(b.scope||c).$new();d.$close=k.close,d.$dismiss=k.dismiss;var f,i={},j=1;b.controller&&(i.$scope=d,i.$modalInstance=k,angular.forEach(b.resolve,function(b,c){i[c]=a[j++]}),f=g(b.controller,i),b.controllerAs&&(d[b.controllerAs]=f)),h.open(k,{scope:d,deferred:e,content:a[0],backdrop:b.backdrop,keyboard:b.keyboard,backdropClass:b.backdropClass,windowClass:b.windowClass,windowTemplateUrl:b.windowTemplateUrl,size:b.size})},function(a){e.reject(a)}),l.then(function(){f.resolve(!0)},function(){f.reject(!1)}),k},k}]};return a}),angular.module("ui.bootstrap.pagination",[]).controller("PaginationController",["$scope","$attrs","$parse",function(a,b,c){var d=this,e={$setViewValue:angular.noop},f=b.numPages?c(b.numPages).assign:angular.noop;this.init=function(f,g){e=f,this.config=g,e.$render=function(){d.render()},b.itemsPerPage?a.$parent.$watch(c(b.itemsPerPage),function(b){d.itemsPerPage=parseInt(b,10),a.totalPages=d.calculateTotalPages()}):this.itemsPerPage=g.itemsPerPage},this.calculateTotalPages=function(){var b=this.itemsPerPage<1?1:Math.ceil(a.totalItems/this.itemsPerPage);return Math.max(b||0,1)},this.render=function(){a.page=parseInt(e.$viewValue,10)||1},a.selectPage=function(b){a.page!==b&&b>0&&b<=a.totalPages&&(e.$setViewValue(b),e.$render())},a.getText=function(b){return a[b+"Text"]||d.config[b+"Text"]},a.noPrevious=function(){return 1===a.page},a.noNext=function(){return a.page===a.totalPages},a.$watch("totalItems",function(){a.totalPages=d.calculateTotalPages()}),a.$watch("totalPages",function(b){f(a.$parent,b),a.page>b?a.selectPage(b):e.$render()})}]).constant("paginationConfig",{itemsPerPage:10,boundaryLinks:!1,directionLinks:!0,firstText:"First",previousText:"Previous",nextText:"Next",lastText:"Last",rotate:!0}).directive("pagination",["$parse","paginationConfig",function(a,b){return{restrict:"EA",scope:{totalItems:"=",firstText:"@",previousText:"@",nextText:"@",lastText:"@"},require:["pagination","?ngModel"],controller:"PaginationController",templateUrl:"template/pagination/pagination.html",replace:!0,link:function(c,d,e,f){function g(a,b,c){return{number:a,text:b,active:c}}function h(a,b){var c=[],d=1,e=b,f=angular.isDefined(k)&&b>k;f&&(l?(d=Math.max(a-Math.floor(k/2),1),e=d+k-1,e>b&&(e=b,d=e-k+1)):(d=(Math.ceil(a/k)-1)*k+1,e=Math.min(d+k-1,b)));for(var h=d;e>=h;h++){var i=g(h,h,h===a);c.push(i)}if(f&&!l){if(d>1){var j=g(d-1,"...",!1);c.unshift(j)}if(b>e){var m=g(e+1,"...",!1);c.push(m)}}return c}var i=f[0],j=f[1];if(j){var k=angular.isDefined(e.maxSize)?c.$parent.$eval(e.maxSize):b.maxSize,l=angular.isDefined(e.rotate)?c.$parent.$eval(e.rotate):b.rotate;c.boundaryLinks=angular.isDefined(e.boundaryLinks)?c.$parent.$eval(e.boundaryLinks):b.boundaryLinks,c.directionLinks=angular.isDefined(e.directionLinks)?c.$parent.$eval(e.directionLinks):b.directionLinks,i.init(j,b),e.maxSize&&c.$parent.$watch(a(e.maxSize),function(a){k=parseInt(a,10),i.render()
});var m=i.render;i.render=function(){m(),c.page>0&&c.page<=c.totalPages&&(c.pages=h(c.page,c.totalPages))}}}}}]).constant("pagerConfig",{itemsPerPage:10,previousText:"« Previous",nextText:"Next »",align:!0}).directive("pager",["pagerConfig",function(a){return{restrict:"EA",scope:{totalItems:"=",previousText:"@",nextText:"@"},require:["pager","?ngModel"],controller:"PaginationController",templateUrl:"template/pagination/pager.html",replace:!0,link:function(b,c,d,e){var f=e[0],g=e[1];g&&(b.align=angular.isDefined(d.align)?b.$parent.$eval(d.align):a.align,f.init(g,a))}}}]),angular.module("ui.bootstrap.tooltip",["ui.bootstrap.position","ui.bootstrap.bindHtml"]).provider("$tooltip",function(){function a(a){var b=/[A-Z]/g,c="-";return a.replace(b,function(a,b){return(b?c:"")+a.toLowerCase()})}var b={placement:"top",animation:!0,popupDelay:0},c={mouseenter:"mouseleave",click:"click",focus:"blur"},d={};this.options=function(a){angular.extend(d,a)},this.setTriggers=function(a){angular.extend(c,a)},this.$get=["$window","$compile","$timeout","$parse","$document","$position","$interpolate",function(e,f,g,h,i,j,k){return function(e,l,m){function n(a){var b=a||o.trigger||m,d=c[b]||b;return{show:b,hide:d}}var o=angular.extend({},b,d),p=a(e),q=k.startSymbol(),r=k.endSymbol(),s="<div "+p+'-popup title="'+q+"tt_title"+r+'" content="'+q+"tt_content"+r+'" placement="'+q+"tt_placement"+r+'" animation="tt_animation" is-open="tt_isOpen"></div>';return{restrict:"EA",scope:!0,compile:function(){var a=f(s);return function(b,c,d){function f(){b.tt_isOpen?m():k()}function k(){(!y||b.$eval(d[l+"Enable"]))&&(b.tt_popupDelay?v||(v=g(p,b.tt_popupDelay,!1),v.then(function(a){a()})):p()())}function m(){b.$apply(function(){q()})}function p(){return v=null,u&&(g.cancel(u),u=null),b.tt_content?(r(),t.css({top:0,left:0,display:"block"}),w?i.find("body").append(t):c.after(t),z(),b.tt_isOpen=!0,b.$digest(),z):angular.noop}function q(){b.tt_isOpen=!1,g.cancel(v),v=null,b.tt_animation?u||(u=g(s,500)):s()}function r(){t&&s(),t=a(b,function(){}),b.$digest()}function s(){u=null,t&&(t.remove(),t=null)}var t,u,v,w=angular.isDefined(o.appendToBody)?o.appendToBody:!1,x=n(void 0),y=angular.isDefined(d[l+"Enable"]),z=function(){var a=j.positionElements(c,t,b.tt_placement,w);a.top+="px",a.left+="px",t.css(a)};b.tt_isOpen=!1,d.$observe(e,function(a){b.tt_content=a,!a&&b.tt_isOpen&&q()}),d.$observe(l+"Title",function(a){b.tt_title=a}),d.$observe(l+"Placement",function(a){b.tt_placement=angular.isDefined(a)?a:o.placement}),d.$observe(l+"PopupDelay",function(a){var c=parseInt(a,10);b.tt_popupDelay=isNaN(c)?o.popupDelay:c});var A=function(){c.unbind(x.show,k),c.unbind(x.hide,m)};d.$observe(l+"Trigger",function(a){A(),x=n(a),x.show===x.hide?c.bind(x.show,f):(c.bind(x.show,k),c.bind(x.hide,m))});var B=b.$eval(d[l+"Animation"]);b.tt_animation=angular.isDefined(B)?!!B:o.animation,d.$observe(l+"AppendToBody",function(a){w=angular.isDefined(a)?h(a)(b):w}),w&&b.$on("$locationChangeSuccess",function(){b.tt_isOpen&&q()}),b.$on("$destroy",function(){g.cancel(u),g.cancel(v),A(),s()})}}}}}]}).directive("tooltipPopup",function(){return{restrict:"EA",replace:!0,scope:{content:"@",placement:"@",animation:"&",isOpen:"&"},templateUrl:"template/tooltip/tooltip-popup.html"}}).directive("tooltip",["$tooltip",function(a){return a("tooltip","tooltip","mouseenter")}]).directive("tooltipHtmlUnsafePopup",function(){return{restrict:"EA",replace:!0,scope:{content:"@",placement:"@",animation:"&",isOpen:"&"},templateUrl:"template/tooltip/tooltip-html-unsafe-popup.html"}}).directive("tooltipHtmlUnsafe",["$tooltip",function(a){return a("tooltipHtmlUnsafe","tooltip","mouseenter")}]),angular.module("ui.bootstrap.popover",["ui.bootstrap.tooltip"]).directive("popoverPopup",function(){return{restrict:"EA",replace:!0,scope:{title:"@",content:"@",placement:"@",animation:"&",isOpen:"&"},templateUrl:"template/popover/popover.html"}}).directive("popover",["$tooltip",function(a){return a("popover","popover","click")}]),angular.module("ui.bootstrap.progressbar",[]).constant("progressConfig",{animate:!0,max:100}).controller("ProgressController",["$scope","$attrs","progressConfig",function(a,b,c){var d=this,e=angular.isDefined(b.animate)?a.$parent.$eval(b.animate):c.animate;this.bars=[],a.max=angular.isDefined(b.max)?a.$parent.$eval(b.max):c.max,this.addBar=function(b,c){e||c.css({transition:"none"}),this.bars.push(b),b.$watch("value",function(c){b.percent=+(100*c/a.max).toFixed(2)}),b.$on("$destroy",function(){c=null,d.removeBar(b)})},this.removeBar=function(a){this.bars.splice(this.bars.indexOf(a),1)}}]).directive("progress",function(){return{restrict:"EA",replace:!0,transclude:!0,controller:"ProgressController",require:"progress",scope:{},templateUrl:"template/progressbar/progress.html"}}).directive("bar",function(){return{restrict:"EA",replace:!0,transclude:!0,require:"^progress",scope:{value:"=",type:"@"},templateUrl:"template/progressbar/bar.html",link:function(a,b,c,d){d.addBar(a,b)}}}).directive("progressbar",function(){return{restrict:"EA",replace:!0,transclude:!0,controller:"ProgressController",scope:{value:"=",type:"@"},templateUrl:"template/progressbar/progressbar.html",link:function(a,b,c,d){d.addBar(a,angular.element(b.children()[0]))}}}),angular.module("ui.bootstrap.rating",[]).constant("ratingConfig",{max:5,stateOn:null,stateOff:null}).controller("RatingController",["$scope","$attrs","ratingConfig",function(a,b,c){var d={$setViewValue:angular.noop};this.init=function(e){d=e,d.$render=this.render,this.stateOn=angular.isDefined(b.stateOn)?a.$parent.$eval(b.stateOn):c.stateOn,this.stateOff=angular.isDefined(b.stateOff)?a.$parent.$eval(b.stateOff):c.stateOff;var f=angular.isDefined(b.ratingStates)?a.$parent.$eval(b.ratingStates):new Array(angular.isDefined(b.max)?a.$parent.$eval(b.max):c.max);a.range=this.buildTemplateObjects(f)},this.buildTemplateObjects=function(a){for(var b=0,c=a.length;c>b;b++)a[b]=angular.extend({index:b},{stateOn:this.stateOn,stateOff:this.stateOff},a[b]);return a},a.rate=function(b){!a.readonly&&b>=0&&b<=a.range.length&&(d.$setViewValue(b),d.$render())},a.enter=function(b){a.readonly||(a.value=b),a.onHover({value:b})},a.reset=function(){a.value=d.$viewValue,a.onLeave()},a.onKeydown=function(b){/(37|38|39|40)/.test(b.which)&&(b.preventDefault(),b.stopPropagation(),a.rate(a.value+(38===b.which||39===b.which?1:-1)))},this.render=function(){a.value=d.$viewValue}}]).directive("rating",function(){return{restrict:"EA",require:["rating","ngModel"],scope:{readonly:"=?",onHover:"&",onLeave:"&"},controller:"RatingController",templateUrl:"template/rating/rating.html",replace:!0,link:function(a,b,c,d){var e=d[0],f=d[1];f&&e.init(f)}}}),angular.module("ui.bootstrap.tabs",[]).controller("TabsetController",["$scope",function(a){var b=this,c=b.tabs=a.tabs=[];b.select=function(a){angular.forEach(c,function(b){b.active&&b!==a&&(b.active=!1,b.onDeselect())}),a.active=!0,a.onSelect()},b.addTab=function(a){c.push(a),1===c.length?a.active=!0:a.active&&b.select(a)},b.removeTab=function(a){var d=c.indexOf(a);if(a.active&&c.length>1){var e=d==c.length-1?d-1:d+1;b.select(c[e])}c.splice(d,1)}}]).directive("tabset",function(){return{restrict:"EA",transclude:!0,replace:!0,scope:{type:"@"},controller:"TabsetController",templateUrl:"template/tabs/tabset.html",link:function(a,b,c){a.vertical=angular.isDefined(c.vertical)?a.$parent.$eval(c.vertical):!1,a.justified=angular.isDefined(c.justified)?a.$parent.$eval(c.justified):!1}}}).directive("tab",["$parse",function(a){return{require:"^tabset",restrict:"EA",replace:!0,templateUrl:"template/tabs/tab.html",transclude:!0,scope:{active:"=?",heading:"@",onSelect:"&select",onDeselect:"&deselect"},controller:function(){},compile:function(b,c,d){return function(b,c,e,f){b.$watch("active",function(a){a&&f.select(b)}),b.disabled=!1,e.disabled&&b.$parent.$watch(a(e.disabled),function(a){b.disabled=!!a}),b.select=function(){b.disabled||(b.active=!0)},f.addTab(b),b.$on("$destroy",function(){f.removeTab(b)}),b.$transcludeFn=d}}}}]).directive("tabHeadingTransclude",[function(){return{restrict:"A",require:"^tab",link:function(a,b){a.$watch("headingElement",function(a){a&&(b.html(""),b.append(a))})}}}]).directive("tabContentTransclude",function(){function a(a){return a.tagName&&(a.hasAttribute("tab-heading")||a.hasAttribute("data-tab-heading")||"tab-heading"===a.tagName.toLowerCase()||"data-tab-heading"===a.tagName.toLowerCase())}return{restrict:"A",require:"^tabset",link:function(b,c,d){var e=b.$eval(d.tabContentTransclude);e.$transcludeFn(e.$parent,function(b){angular.forEach(b,function(b){a(b)?e.headingElement=b:c.append(b)})})}}}),angular.module("ui.bootstrap.timepicker",[]).constant("timepickerConfig",{hourStep:1,minuteStep:1,showMeridian:!0,meridians:null,readonlyInput:!1,mousewheel:!0}).controller("TimepickerController",["$scope","$attrs","$parse","$log","$locale","timepickerConfig",function(a,b,c,d,e,f){function g(){var b=parseInt(a.hours,10),c=a.showMeridian?b>0&&13>b:b>=0&&24>b;return c?(a.showMeridian&&(12===b&&(b=0),a.meridian===p[1]&&(b+=12)),b):void 0}function h(){var b=parseInt(a.minutes,10);return b>=0&&60>b?b:void 0}function i(a){return angular.isDefined(a)&&a.toString().length<2?"0"+a:a}function j(a){k(),o.$setViewValue(new Date(n)),l(a)}function k(){o.$setValidity("time",!0),a.invalidHours=!1,a.invalidMinutes=!1}function l(b){var c=n.getHours(),d=n.getMinutes();a.showMeridian&&(c=0===c||12===c?12:c%12),a.hours="h"===b?c:i(c),a.minutes="m"===b?d:i(d),a.meridian=n.getHours()<12?p[0]:p[1]}function m(a){var b=new Date(n.getTime()+6e4*a);n.setHours(b.getHours(),b.getMinutes()),j()}var n=new Date,o={$setViewValue:angular.noop},p=angular.isDefined(b.meridians)?a.$parent.$eval(b.meridians):f.meridians||e.DATETIME_FORMATS.AMPMS;this.init=function(c,d){o=c,o.$render=this.render;var e=d.eq(0),g=d.eq(1),h=angular.isDefined(b.mousewheel)?a.$parent.$eval(b.mousewheel):f.mousewheel;h&&this.setupMousewheelEvents(e,g),a.readonlyInput=angular.isDefined(b.readonlyInput)?a.$parent.$eval(b.readonlyInput):f.readonlyInput,this.setupInputEvents(e,g)};var q=f.hourStep;b.hourStep&&a.$parent.$watch(c(b.hourStep),function(a){q=parseInt(a,10)});var r=f.minuteStep;b.minuteStep&&a.$parent.$watch(c(b.minuteStep),function(a){r=parseInt(a,10)}),a.showMeridian=f.showMeridian,b.showMeridian&&a.$parent.$watch(c(b.showMeridian),function(b){if(a.showMeridian=!!b,o.$error.time){var c=g(),d=h();angular.isDefined(c)&&angular.isDefined(d)&&(n.setHours(c),j())}else l()}),this.setupMousewheelEvents=function(b,c){var d=function(a){a.originalEvent&&(a=a.originalEvent);var b=a.wheelDelta?a.wheelDelta:-a.deltaY;return a.detail||b>0};b.bind("mousewheel wheel",function(b){a.$apply(d(b)?a.incrementHours():a.decrementHours()),b.preventDefault()}),c.bind("mousewheel wheel",function(b){a.$apply(d(b)?a.incrementMinutes():a.decrementMinutes()),b.preventDefault()})},this.setupInputEvents=function(b,c){if(a.readonlyInput)return a.updateHours=angular.noop,void(a.updateMinutes=angular.noop);var d=function(b,c){o.$setViewValue(null),o.$setValidity("time",!1),angular.isDefined(b)&&(a.invalidHours=b),angular.isDefined(c)&&(a.invalidMinutes=c)};a.updateHours=function(){var a=g();angular.isDefined(a)?(n.setHours(a),j("h")):d(!0)},b.bind("blur",function(){!a.invalidHours&&a.hours<10&&a.$apply(function(){a.hours=i(a.hours)})}),a.updateMinutes=function(){var a=h();angular.isDefined(a)?(n.setMinutes(a),j("m")):d(void 0,!0)},c.bind("blur",function(){!a.invalidMinutes&&a.minutes<10&&a.$apply(function(){a.minutes=i(a.minutes)})})},this.render=function(){var a=o.$modelValue?new Date(o.$modelValue):null;isNaN(a)?(o.$setValidity("time",!1),d.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')):(a&&(n=a),k(),l())},a.incrementHours=function(){m(60*q)},a.decrementHours=function(){m(60*-q)},a.incrementMinutes=function(){m(r)},a.decrementMinutes=function(){m(-r)},a.toggleMeridian=function(){m(720*(n.getHours()<12?1:-1))}}]).directive("timepicker",function(){return{restrict:"EA",require:["timepicker","?^ngModel"],controller:"TimepickerController",replace:!0,scope:{},templateUrl:"template/timepicker/timepicker.html",link:function(a,b,c,d){var e=d[0],f=d[1];f&&e.init(f,b.find("input"))}}}),angular.module("ui.bootstrap.typeahead",["ui.bootstrap.position","ui.bootstrap.bindHtml"]).factory("typeaheadParser",["$parse",function(a){var b=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/;return{parse:function(c){var d=c.match(b);if(!d)throw new Error('Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_" but got "'+c+'".');return{itemName:d[3],source:a(d[4]),viewMapper:a(d[2]||d[1]),modelMapper:a(d[1])}}}}]).directive("typeahead",["$compile","$parse","$q","$timeout","$document","$position","typeaheadParser",function(a,b,c,d,e,f,g){var h=[9,13,27,38,40];return{require:"ngModel",link:function(i,j,k,l){var m,n=i.$eval(k.typeaheadMinLength)||1,o=i.$eval(k.typeaheadWaitMs)||0,p=i.$eval(k.typeaheadEditable)!==!1,q=b(k.typeaheadLoading).assign||angular.noop,r=b(k.typeaheadOnSelect),s=k.typeaheadInputFormatter?b(k.typeaheadInputFormatter):void 0,t=k.typeaheadAppendToBody?i.$eval(k.typeaheadAppendToBody):!1,u=b(k.ngModel).assign,v=g.parse(k.typeahead),w=i.$new();i.$on("$destroy",function(){w.$destroy()});var x="typeahead-"+w.$id+"-"+Math.floor(1e4*Math.random());j.attr({"aria-autocomplete":"list","aria-expanded":!1,"aria-owns":x});var y=angular.element("<div typeahead-popup></div>");y.attr({id:x,matches:"matches",active:"activeIdx",select:"select(activeIdx)",query:"query",position:"position"}),angular.isDefined(k.typeaheadTemplateUrl)&&y.attr("template-url",k.typeaheadTemplateUrl);var z=function(){w.matches=[],w.activeIdx=-1,j.attr("aria-expanded",!1)},A=function(a){return x+"-option-"+a};w.$watch("activeIdx",function(a){0>a?j.removeAttr("aria-activedescendant"):j.attr("aria-activedescendant",A(a))});var B=function(a){var b={$viewValue:a};q(i,!0),c.when(v.source(i,b)).then(function(c){var d=a===l.$viewValue;if(d&&m)if(c.length>0){w.activeIdx=0,w.matches.length=0;for(var e=0;e<c.length;e++)b[v.itemName]=c[e],w.matches.push({id:A(e),label:v.viewMapper(w,b),model:c[e]});w.query=a,w.position=t?f.offset(j):f.position(j),w.position.top=w.position.top+j.prop("offsetHeight"),j.attr("aria-expanded",!0)}else z();d&&q(i,!1)},function(){z(),q(i,!1)})};z(),w.query=void 0;var C,D=function(a){C=d(function(){B(a)},o)},E=function(){C&&d.cancel(C)};l.$parsers.unshift(function(a){return m=!0,a&&a.length>=n?o>0?(E(),D(a)):B(a):(q(i,!1),E(),z()),p?a:a?void l.$setValidity("editable",!1):(l.$setValidity("editable",!0),a)}),l.$formatters.push(function(a){var b,c,d={};return s?(d.$model=a,s(i,d)):(d[v.itemName]=a,b=v.viewMapper(i,d),d[v.itemName]=void 0,c=v.viewMapper(i,d),b!==c?b:a)}),w.select=function(a){var b,c,e={};e[v.itemName]=c=w.matches[a].model,b=v.modelMapper(i,e),u(i,b),l.$setValidity("editable",!0),r(i,{$item:c,$model:b,$label:v.viewMapper(i,e)}),z(),d(function(){j[0].focus()},0,!1)},j.bind("keydown",function(a){0!==w.matches.length&&-1!==h.indexOf(a.which)&&(a.preventDefault(),40===a.which?(w.activeIdx=(w.activeIdx+1)%w.matches.length,w.$digest()):38===a.which?(w.activeIdx=(w.activeIdx?w.activeIdx:w.matches.length)-1,w.$digest()):13===a.which||9===a.which?w.$apply(function(){w.select(w.activeIdx)}):27===a.which&&(a.stopPropagation(),z(),w.$digest()))}),j.bind("blur",function(){m=!1});var F=function(a){j[0]!==a.target&&(z(),w.$digest())};e.bind("click",F),i.$on("$destroy",function(){e.unbind("click",F)});var G=a(y)(w);t?e.find("body").append(G):j.after(G)}}}]).directive("typeaheadPopup",function(){return{restrict:"EA",scope:{matches:"=",query:"=",active:"=",position:"=",select:"&"},replace:!0,templateUrl:"template/typeahead/typeahead-popup.html",link:function(a,b,c){a.templateUrl=c.templateUrl,a.isOpen=function(){return a.matches.length>0},a.isActive=function(b){return a.active==b},a.selectActive=function(b){a.active=b},a.selectMatch=function(b){a.select({activeIdx:b})}}}}).directive("typeaheadMatch",["$http","$templateCache","$compile","$parse",function(a,b,c,d){return{restrict:"EA",scope:{index:"=",match:"=",query:"="},link:function(e,f,g){var h=d(g.templateUrl)(e.$parent)||"template/typeahead/typeahead-match.html";a.get(h,{cache:b}).success(function(a){f.replaceWith(c(a.trim())(e))})}}}]).filter("typeaheadHighlight",function(){function a(a){return a.replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")}return function(b,c){return c?(""+b).replace(new RegExp(a(c),"gi"),"<strong>$&</strong>"):b}}),angular.module("template/accordion/accordion-group.html",[]).run(["$templateCache",function(a){a.put("template/accordion/accordion-group.html",'<div class="panel panel-default">\n  <div class="panel-heading">\n    <h4 class="panel-title">\n      <a class="accordion-toggle" ng-click="toggleOpen()" accordion-transclude="heading"><span ng-class="{\'text-muted\': isDisabled}">{{heading}}</span></a>\n    </h4>\n  </div>\n  <div class="panel-collapse" collapse="!isOpen">\n	  <div class="panel-body" ng-transclude></div>\n  </div>\n</div>')}]),angular.module("template/accordion/accordion.html",[]).run(["$templateCache",function(a){a.put("template/accordion/accordion.html",'<div class="panel-group" ng-transclude></div>')}]),angular.module("template/alert/alert.html",[]).run(["$templateCache",function(a){a.put("template/alert/alert.html",'<div class="alert" ng-class="[\'alert-\' + (type || \'warning\'), closeable ? \'alert-dismissable\' : null]" role="alert">\n    <button ng-show="closeable" type="button" class="close" ng-click="close()">\n        <span aria-hidden="true">&times;</span>\n        <span class="sr-only">Close</span>\n    </button>\n    <div ng-transclude></div>\n</div>\n')}]),angular.module("template/carousel/carousel.html",[]).run(["$templateCache",function(a){a.put("template/carousel/carousel.html",'<div ng-mouseenter="pause()" ng-mouseleave="play()" class="carousel" ng-swipe-right="prev()" ng-swipe-left="next()">\n    <ol class="carousel-indicators" ng-show="slides.length > 1">\n        <li ng-repeat="slide in slides track by $index" ng-class="{active: isActive(slide)}" ng-click="select(slide)"></li>\n    </ol>\n    <div class="carousel-inner" ng-transclude></div>\n    <a class="left carousel-control" ng-click="prev()" ng-show="slides.length > 1"><span class="glyphicon glyphicon-chevron-left"></span></a>\n    <a class="right carousel-control" ng-click="next()" ng-show="slides.length > 1"><span class="glyphicon glyphicon-chevron-right"></span></a>\n</div>\n')}]),angular.module("template/carousel/slide.html",[]).run(["$templateCache",function(a){a.put("template/carousel/slide.html","<div ng-class=\"{\n    'active': leaving || (active && !entering),\n    'prev': (next || active) && direction=='prev',\n    'next': (next || active) && direction=='next',\n    'right': direction=='prev',\n    'left': direction=='next'\n  }\" class=\"item text-center\" ng-transclude></div>\n")}]),angular.module("template/datepicker/datepicker.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/datepicker.html",'<div ng-switch="datepickerMode" role="application" ng-keydown="keydown($event)">\n  <daypicker ng-switch-when="day" tabindex="0"></daypicker>\n  <monthpicker ng-switch-when="month" tabindex="0"></monthpicker>\n  <yearpicker ng-switch-when="year" tabindex="0"></yearpicker>\n</div>')}]),angular.module("template/datepicker/day.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/day.html",'<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="{{5 + showWeeks}}"><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n    <tr>\n      <th ng-show="showWeeks" class="text-center"></th>\n      <th ng-repeat="label in labels track by $index" class="text-center"><small aria-label="{{label.full}}">{{label.abbr}}</small></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-show="showWeeks" class="text-center h6"><em>{{ weekNumbers[$index] }}</em></td>\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default btn-sm" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-muted\': dt.secondary, \'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("template/datepicker/month.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/month.html",'<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("template/datepicker/popup.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/popup.html",'<ul class="dropdown-menu" ng-style="{display: (isOpen && \'block\') || \'none\', top: position.top+\'px\', left: position.left+\'px\'}" ng-keydown="keydown($event)">\n	<li ng-transclude></li>\n	<li ng-if="showButtonBar" style="padding:10px 9px 2px">\n		<span class="btn-group">\n			<button type="button" class="btn btn-sm btn-info" ng-click="select(\'today\')">{{ getText(\'current\') }}</button>\n			<button type="button" class="btn btn-sm btn-danger" ng-click="select(null)">{{ getText(\'clear\') }}</button>\n		</span>\n		<button type="button" class="btn btn-sm btn-success pull-right" ng-click="close()">{{ getText(\'close\') }}</button>\n	</li>\n</ul>\n')}]),angular.module("template/datepicker/year.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/year.html",'<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="3"><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("template/modal/backdrop.html",[]).run(["$templateCache",function(a){a.put("template/modal/backdrop.html",'<div class="modal-backdrop fade {{ backdropClass }}"\n     ng-class="{in: animate}"\n     ng-style="{\'z-index\': 1040 + (index && 1 || 0) + index*10}"\n></div>\n')}]),angular.module("template/modal/window.html",[]).run(["$templateCache",function(a){a.put("template/modal/window.html",'<div tabindex="-1" role="dialog" class="modal fade" ng-class="{in: animate}" ng-style="{\'z-index\': 1050 + index*10, display: \'block\'}" ng-click="close($event)">\n    <div class="modal-dialog" ng-class="{\'modal-sm\': size == \'sm\', \'modal-lg\': size == \'lg\'}"><div class="modal-content" modal-transclude></div></div>\n</div>')}]),angular.module("template/pagination/pager.html",[]).run(["$templateCache",function(a){a.put("template/pagination/pager.html",'<ul class="pager">\n  <li ng-class="{disabled: noPrevious(), previous: align}"><a href ng-click="selectPage(page - 1)">{{getText(\'previous\')}}</a></li>\n  <li ng-class="{disabled: noNext(), next: align}"><a href ng-click="selectPage(page + 1)">{{getText(\'next\')}}</a></li>\n</ul>')}]),angular.module("template/pagination/pagination.html",[]).run(["$templateCache",function(a){a.put("template/pagination/pagination.html",'<ul class="pagination">\n  <li ng-if="boundaryLinks" ng-class="{disabled: noPrevious()}"><a href ng-click="selectPage(1)">{{getText(\'first\')}}</a></li>\n  <li ng-if="directionLinks" ng-class="{disabled: noPrevious()}"><a href ng-click="selectPage(page - 1)">{{getText(\'previous\')}}</a></li>\n  <li ng-repeat="page in pages track by $index" ng-class="{active: page.active}"><a href ng-click="selectPage(page.number)">{{page.text}}</a></li>\n  <li ng-if="directionLinks" ng-class="{disabled: noNext()}"><a href ng-click="selectPage(page + 1)">{{getText(\'next\')}}</a></li>\n  <li ng-if="boundaryLinks" ng-class="{disabled: noNext()}"><a href ng-click="selectPage(totalPages)">{{getText(\'last\')}}</a></li>\n</ul>')}]),angular.module("template/tooltip/tooltip-html-unsafe-popup.html",[]).run(["$templateCache",function(a){a.put("template/tooltip/tooltip-html-unsafe-popup.html",'<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" bind-html-unsafe="content"></div>\n</div>\n')}]),angular.module("template/tooltip/tooltip-popup.html",[]).run(["$templateCache",function(a){a.put("template/tooltip/tooltip-popup.html",'<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind="content"></div>\n</div>\n')}]),angular.module("template/popover/popover.html",[]).run(["$templateCache",function(a){a.put("template/popover/popover.html",'<div class="popover {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-show="title"></h3>\n      <div class="popover-content" ng-bind="content"></div>\n  </div>\n</div>\n')}]),angular.module("template/progressbar/bar.html",[]).run(["$templateCache",function(a){a.put("template/progressbar/bar.html",'<div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: percent + \'%\'}" aria-valuetext="{{percent | number:0}}%" ng-transclude></div>')}]),angular.module("template/progressbar/progress.html",[]).run(["$templateCache",function(a){a.put("template/progressbar/progress.html",'<div class="progress" ng-transclude></div>')}]),angular.module("template/progressbar/progressbar.html",[]).run(["$templateCache",function(a){a.put("template/progressbar/progressbar.html",'<div class="progress">\n  <div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: percent + \'%\'}" aria-valuetext="{{percent | number:0}}%" ng-transclude></div>\n</div>')}]),angular.module("template/rating/rating.html",[]).run(["$templateCache",function(a){a.put("template/rating/rating.html",'<span ng-mouseleave="reset()" ng-keydown="onKeydown($event)" tabindex="0" role="slider" aria-valuemin="0" aria-valuemax="{{range.length}}" aria-valuenow="{{value}}">\n    <i ng-repeat="r in range track by $index" ng-mouseenter="enter($index + 1)" ng-click="rate($index + 1)" class="glyphicon" ng-class="$index < value && (r.stateOn || \'glyphicon-star\') || (r.stateOff || \'glyphicon-star-empty\')">\n        <span class="sr-only">({{ $index < value ? \'*\' : \' \' }})</span>\n    </i>\n</span>')}]),angular.module("template/tabs/tab.html",[]).run(["$templateCache",function(a){a.put("template/tabs/tab.html",'<li ng-class="{active: active, disabled: disabled}">\n  <a ng-click="select()" tab-heading-transclude>{{heading}}</a>\n</li>\n')}]),angular.module("template/tabs/tabset.html",[]).run(["$templateCache",function(a){a.put("template/tabs/tabset.html",'<div>\n  <ul class="nav nav-{{type || \'tabs\'}}" ng-class="{\'nav-stacked\': vertical, \'nav-justified\': justified}" ng-transclude></ul>\n  <div class="tab-content">\n    <div class="tab-pane" \n         ng-repeat="tab in tabs" \n         ng-class="{active: tab.active}"\n         tab-content-transclude="tab">\n    </div>\n  </div>\n</div>\n')}]),angular.module("template/timepicker/timepicker.html",[]).run(["$templateCache",function(a){a.put("template/timepicker/timepicker.html",'<table>\n	<tbody>\n		<tr class="text-center">\n			<td><a ng-click="incrementHours()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n			<td>&nbsp;</td>\n			<td><a ng-click="incrementMinutes()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n			<td ng-show="showMeridian"></td>\n		</tr>\n		<tr>\n			<td style="width:50px;" class="form-group" ng-class="{\'has-error\': invalidHours}">\n				<input type="text" ng-model="hours" ng-change="updateHours()" class="form-control text-center" ng-mousewheel="incrementHours()" ng-readonly="readonlyInput" maxlength="2">\n			</td>\n			<td>:</td>\n			<td style="width:50px;" class="form-group" ng-class="{\'has-error\': invalidMinutes}">\n				<input type="text" ng-model="minutes" ng-change="updateMinutes()" class="form-control text-center" ng-readonly="readonlyInput" maxlength="2">\n			</td>\n			<td ng-show="showMeridian"><button type="button" class="btn btn-default text-center" ng-click="toggleMeridian()">{{meridian}}</button></td>\n		</tr>\n		<tr class="text-center">\n			<td><a ng-click="decrementHours()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n			<td>&nbsp;</td>\n			<td><a ng-click="decrementMinutes()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n			<td ng-show="showMeridian"></td>\n		</tr>\n	</tbody>\n</table>\n')}]),angular.module("template/typeahead/typeahead-match.html",[]).run(["$templateCache",function(a){a.put("template/typeahead/typeahead-match.html",'<a tabindex="-1" bind-html-unsafe="match.label | typeaheadHighlight:query"></a>')
}]),angular.module("template/typeahead/typeahead-popup.html",[]).run(["$templateCache",function(a){a.put("template/typeahead/typeahead-popup.html",'<ul class="dropdown-menu" ng-show="isOpen()" ng-style="{top: position.top+\'px\', left: position.left+\'px\'}" style="display: block;" role="listbox" aria-hidden="{{!isOpen()}}">\n    <li ng-repeat="match in matches track by $index" ng-class="{active: isActive($index) }" ng-mouseenter="selectActive($index)" ng-click="selectMatch($index)" role="option" id="{{match.id}}">\n        <div typeahead-match index="$index" match="match" query="query" template-url="templateUrl"></div>\n    </li>\n</ul>\n')}]);
(function(e,n){"use strict";var t=6,o=4,i="asc",r="desc",l="_ng_field_",a="_ng_depth_",s="_ng_hidden_",c="_ng_column_",g=/CUSTOM_FILTERS/g,d=/COL_FIELD/g,u=/DISPLAY_CELL_TEMPLATE/g,f=/EDITABLE_CELL_TEMPLATE/g,h=/CELL_EDITABLE_CONDITION/g,p=/<.+>/,m=/(\([^)]*\))?$/,v=/\./g,w=/'/g,C=/^(.*)((?:\s*\[\s*\d+\s*\]\s*)|(?:\s*\[\s*"(?:[^"\\]|\\.)*"\s*\]\s*)|(?:\s*\[\s*'(?:[^'\\]|\\.)*'\s*\]\s*))(.*)$/;e.ngGrid={},e.ngGrid.i18n={},angular.module("ngGrid.services",[]);var b=angular.module("ngGrid.directives",[]),y=angular.module("ngGrid.filters",[]);angular.module("ngGrid",["ngGrid.services","ngGrid.directives","ngGrid.filters"]);var S=function(e,n,o,i){if(void 0===e.selectionProvider.selectedItems||i.config.noKeyboardNavigation)return!0;if("INPUT"===document.activeElement.tagName)return!0;var r,l=o.which||o.keyCode,a=!1,s=!1,c=void 0===e.selectionProvider.lastClickedRow?1:e.selectionProvider.lastClickedRow.rowIndex,g=e.columns.filter(function(e){return e.visible&&e.width>0}),d=e.columns.filter(function(e){return e.pinned});if(e.col&&(r=g.indexOf(e.col)),37!==l&&38!==l&&39!==l&&40!==l&&(i.config.noTabInterference||9!==l)&&13!==l)return!0;if(e.enableCellSelection){9===l&&o.preventDefault();var u=e.showSelectionCheckbox?1===r:0===r,f=1===r||0===r,h=r===g.length-1||r===g.length-2,p=g.indexOf(e.col)===g.length-1,m=d.indexOf(e.col)===d.length-1;if(37===l||9===l&&o.shiftKey){var v=0;u||(r-=1),f?u&&9===l&&o.shiftKey?(v=i.$canvas.width(),r=g.length-1,s=!0):v=i.$viewport.scrollLeft()-e.col.width:d.length>0&&(v=i.$viewport.scrollLeft()-g[r].width),i.$viewport.scrollLeft(v)}else(39===l||9===l&&!o.shiftKey)&&(h?p&&9===l&&!o.shiftKey?(i.$viewport.scrollLeft(0),r=e.showSelectionCheckbox?1:0,a=!0):i.$viewport.scrollLeft(i.$viewport.scrollLeft()+e.col.width):m&&i.$viewport.scrollLeft(0),p||(r+=1))}var w;w=e.configGroups.length>0?i.rowFactory.parsedData.filter(function(e){return!e.isAggRow}):i.filteredRows;var C=0;if(0!==c&&(38===l||13===l&&o.shiftKey||9===l&&o.shiftKey&&s)?C=-1:c!==w.length-1&&(40===l||13===l&&!o.shiftKey||9===l&&a)&&(C=1),C){var b=w[c+C];b.beforeSelectionChange(b,o)&&(b.continueSelection(o),e.$emit("ngGridEventDigestGridParent"),e.selectionProvider.lastClickedRow.renderedRowIndex>=e.renderedRows.length-t-2?i.$viewport.scrollTop(i.$viewport.scrollTop()+e.rowHeight):t+2>=e.selectionProvider.lastClickedRow.renderedRowIndex&&i.$viewport.scrollTop(i.$viewport.scrollTop()-e.rowHeight))}return e.enableCellSelection&&setTimeout(function(){e.domAccessProvider.focusCellElement(e,e.renderedColumns.indexOf(g[r]))},3),!1};String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}),Array.prototype.indexOf||(Array.prototype.indexOf=function(e){var n=this.length>>>0,t=Number(arguments[1])||0;for(t=0>t?Math.ceil(t):Math.floor(t),0>t&&(t+=n);n>t;t++)if(t in this&&this[t]===e)return t;return-1}),Array.prototype.filter||(Array.prototype.filter=function(e){var n=Object(this),t=n.length>>>0;if("function"!=typeof e)throw new TypeError;for(var o=[],i=arguments[1],r=0;t>r;r++)if(r in n){var l=n[r];e.call(i,l,r,n)&&o.push(l)}return o}),y.filter("checkmark",function(){return function(e){return e?"✔":"✘"}}),y.filter("ngColumns",function(){return function(e){return e.filter(function(e){return!e.isAggCol})}}),angular.module("ngGrid.services").factory("$domUtilityService",["$utilityService","$window",function(e,t){var o={},i={},r=function(){var e=n("<div></div>");e.appendTo("body"),e.height(100).width(100).css("position","absolute").css("overflow","scroll"),e.append('<div style="height: 400px; width: 400px;"></div>'),o.ScrollH=e.height()-e[0].clientHeight,o.ScrollW=e.width()-e[0].clientWidth,e.empty(),e.attr("style",""),e.append('<span style="font-family: Verdana, Helvetica, Sans-Serif; font-size: 14px;"><strong>M</strong></span>'),o.LetterW=e.children().first().width(),e.remove()};return o.eventStorage={},o.AssignGridContainers=function(e,t,i){i.$root=n(t),i.$topPanel=i.$root.find(".ngTopPanel"),i.$groupPanel=i.$root.find(".ngGroupPanel"),i.$headerContainer=i.$topPanel.find(".ngHeaderContainer"),e.$headerContainer=i.$headerContainer,i.$headerScroller=i.$topPanel.find(".ngHeaderScroller"),i.$headers=i.$headerScroller.children(),i.$viewport=i.$root.find(".ngViewport"),i.$canvas=i.$viewport.find(".ngCanvas"),i.$footerPanel=i.$root.find(".ngFooterPanel");var r=e.$watch(function(){return i.$viewport.scrollLeft()},function(e){return i.$headerContainer.scrollLeft(e)});e.$on("$destroy",function(){i.$root&&(n(i.$root.parent()).off("resize.nggrid"),i.$root=null,i.$topPanel=null,i.$headerContainer=null,i.$headers=null,i.$canvas=null,i.$footerPanel=null),r()}),o.UpdateGridLayout(e,i)},o.getRealWidth=function(e){var t=0,o={visibility:"hidden",display:"block"},i=e.parents().andSelf().not(":visible");return n.swap(i[0],o,function(){t=e.outerWidth()}),t},o.UpdateGridLayout=function(e,n){if(n.$root){var t=n.$viewport.scrollTop();n.elementDims.rootMaxW=n.$root.width(),n.$root.is(":hidden")&&(n.elementDims.rootMaxW=o.getRealWidth(n.$root)),n.elementDims.rootMaxH=n.$root.height(),n.refreshDomSizes(),e.adjustScrollTop(t,!0)}},o.numberOfGrids=0,o.setStyleText=function(e,n){var o=e.styleSheet,i=e.gridId,r=t.document;o||(o=r.getElementById(i)),o||(o=r.createElement("style"),o.type="text/css",o.id=i,(r.head||r.getElementsByTagName("head")[0]).appendChild(o)),o.styleSheet&&!o.sheet?o.styleSheet.cssText=n:o.innerHTML=n,e.styleSheet=o,e.styleText=n},o.BuildStyles=function(e,n,t){var i,r=n.config.rowHeight,l=n.gridId,a=e.columns,s=0,c=e.totalRowWidth();i="."+l+" .ngCanvas { width: "+c+"px; }"+"."+l+" .ngRow { width: "+c+"px; }"+"."+l+" .ngCanvas { width: "+c+"px; }"+"."+l+" .ngHeaderScroller { width: "+(c+o.ScrollH)+"px}";for(var g=0;a.length>g;g++){var d=a[g];if(d.visible!==!1){var u=0;g===a.length-1&&s+d.width<n.elementDims.rootMaxW&&(u=n.elementDims.rootMaxW-s-d.width),i+="."+l+" .col"+g+" { width: "+(d.width+u)+"px; left: "+s+"px; height: "+r+"px }"+"."+l+" .colt"+g+" { width: "+(d.width+u)+"px; }",s+=d.width}}o.setStyleText(n,i),e.adjustScrollLeft(n.$viewport.scrollLeft()),t&&o.digest(e)},o.setColLeft=function(e,n,t){if(t.styleText){var r=i[e.index];r||(r=i[e.index]=RegExp(".col"+e.index+" { width: [0-9]+px; left: [0-9]+px"));var l=t.styleText.replace(r,".col"+e.index+" { width: "+e.width+"px; left: "+n+"px");o.setStyleText(t,l)}},o.setColLeft.immediate=1,o.RebuildGrid=function(e,n){o.UpdateGridLayout(e,n),(null==n.config.maintainColumnRatios||n.config.maintainColumnRatios)&&n.configureColumnWidths(),e.adjustScrollLeft(n.$viewport.scrollLeft()),o.BuildStyles(e,n,!0)},o.digest=function(e){e.$root.$$phase||e.$digest()},o.ScrollH=17,o.ScrollW=17,o.LetterW=10,r(),o}]),angular.module("ngGrid.services").factory("$sortService",["$parse","$utilityService",function(e,n){var t={};return t.colSortFnCache={},t.isCustomSort=!1,t.guessSortFn=function(e){var n=typeof e;switch(n){case"number":return t.sortNumber;case"boolean":return t.sortBool;case"string":return e.match(/^[-+]?[£$¤]?[\d,.]+%?$/)?t.sortNumberStr:t.sortAlpha;default:return"[object Date]"===Object.prototype.toString.call(e)?t.sortDate:t.basicSort}},t.basicSort=function(e,n){return e===n?0:n>e?-1:1},t.sortNumber=function(e,n){return e-n},t.sortNumberStr=function(e,n){var t,o,i=!1,r=!1;return t=parseFloat(e.replace(/[^0-9.-]/g,"")),isNaN(t)&&(i=!0),o=parseFloat(n.replace(/[^0-9.-]/g,"")),isNaN(o)&&(r=!0),i&&r?0:i?1:r?-1:t-o},t.sortAlpha=function(e,n){var t=e.toLowerCase(),o=n.toLowerCase();return t===o?0:o>t?-1:1},t.sortDate=function(e,n){var t=e.getTime(),o=n.getTime();return t===o?0:o>t?-1:1},t.sortBool=function(e,n){return e&&n?0:e||n?e?1:-1:0},t.sortData=function(e,o){if(o&&e){var r,l,a=e.fields.length,s=e.fields,c=o.slice(0);o.sort(function(o,g){for(var d,u,f=0,h=0;0===f&&a>h;){r=e.columns[h],l=e.directions[h],u=t.getSortFn(r,c);var p=n.evalProperty(o,s[h]),m=n.evalProperty(g,s[h]);t.isCustomSort?(d=u(p,m),f=l===i?d:0-d):null==p||null==m?null==m&&null==p?f=0:null==p?f=1:null==m&&(f=-1):(d=u(p,m),f=l===i?d:0-d),h++}return f})}},t.Sort=function(e,n){t.isSorting||(t.isSorting=!0,t.sortData(e,n),t.isSorting=!1)},t.getSortFn=function(n,o){var i,r;if(t.colSortFnCache[n.field])i=t.colSortFnCache[n.field];else if(void 0!==n.sortingAlgorithm)i=n.sortingAlgorithm,t.colSortFnCache[n.field]=n.sortingAlgorithm,t.isCustomSort=!0;else{if(r=o[0],!r)return i;i=t.guessSortFn(e("entity['"+n.field.replace(v,"']['")+"']")({entity:r})),i?t.colSortFnCache[n.field]=i:i=t.sortAlpha}return i},t}]),angular.module("ngGrid.services").factory("$utilityService",["$parse",function(t){var o=/function (.{1,})\(/,i={visualLength:function(e){var t=document.getElementById("testDataLength");t||(t=document.createElement("SPAN"),t.id="testDataLength",t.style.visibility="hidden",document.body.appendChild(t));var o=n(e);n(t).css({font:o.css("font"),"font-size":o.css("font-size"),"font-family":o.css("font-family")}),t.innerHTML=o.text();var i=t.offsetWidth;return document.body.removeChild(t),i},forIn:function(e,n){for(var t in e)e.hasOwnProperty(t)&&n(e[t],t)},endsWith:function(e,n){return e&&n&&"string"==typeof e?-1!==e.indexOf(n,e.length-n.length):!1},isNullOrUndefined:function(e){return void 0===e||null===e?!0:!1},getElementsByClassName:function(e){if(document.getElementsByClassName)return document.getElementsByClassName(e);for(var n=[],t=RegExp("\\b"+e+"\\b"),o=document.getElementsByTagName("*"),i=0;o.length>i;i++){var r=o[i].className;t.test(r)&&n.push(o[i])}return n},newId:function(){var e=(new Date).getTime();return function(){return e+=1}}(),seti18n:function(n,t){var o=e.ngGrid.i18n[t];for(var i in o)n.i18n[i]=o[i]},getInstanceType:function(e){var n=o.exec(""+e.constructor);if(n&&n.length>1){var t=n[1].replace(/^\s+|\s+$/g,"");return t}return""},init:function(){function e(n){var t=C.exec(n);if(t)return(t[1]?e(t[1]):t[1])+t[2]+(t[3]?e(t[3]):t[3]);n=n.replace(w,"\\'");var o=n.split(v),i=[o.shift()];return angular.forEach(o,function(e){i.push(e.replace(m,"']$1"))}),i.join("['")}return this.preEval=e,this.evalProperty=function(n,o){return t(e("entity."+o))({entity:n})},delete this.init,this}}.init();return i}]);var x=function(e,n,t,o){this.rowIndex=0,this.offsetTop=this.rowIndex*t,this.entity=e,this.label=e.gLabel,this.field=e.gField,this.depth=e.gDepth,this.parent=e.parent,this.children=e.children,this.aggChildren=e.aggChildren,this.aggIndex=e.aggIndex,this.collapsed=o,this.groupInitState=o,this.rowFactory=n,this.rowHeight=t,this.isAggRow=!0,this.offsetLeft=25*e.gDepth,this.aggLabelFilter=e.aggLabelFilter};x.prototype.toggleExpand=function(){this.collapsed=this.collapsed?!1:!0,this.orig&&(this.orig.collapsed=this.collapsed),this.notifyChildren()},x.prototype.setExpand=function(e){this.collapsed=e,this.orig&&(this.orig.collapsed=e),this.notifyChildren()},x.prototype.notifyChildren=function(){for(var e=Math.max(this.rowFactory.aggCache.length,this.children.length),n=0;e>n;n++)if(this.aggChildren[n]&&(this.aggChildren[n].entity[s]=this.collapsed,this.collapsed&&this.aggChildren[n].setExpand(this.collapsed)),this.children[n]&&(this.children[n][s]=this.collapsed),n>this.aggIndex&&this.rowFactory.aggCache[n]){var t=this.rowFactory.aggCache[n],o=30*this.children.length;t.offsetTop=this.collapsed?t.offsetTop-o:t.offsetTop+o}this.rowFactory.renderedChange()},x.prototype.aggClass=function(){return this.collapsed?"ngAggArrowCollapsed":"ngAggArrowExpanded"},x.prototype.totalChildren=function(){if(this.aggChildren.length>0){var e=0,n=function(t){t.aggChildren.length>0?angular.forEach(t.aggChildren,function(e){n(e)}):e+=t.children.length};return n(this),e}return this.children.length},x.prototype.copy=function(){var e=new x(this.entity,this.rowFactory,this.rowHeight,this.groupInitState);return e.orig=this,e};var T=function(e,t,o,l,a,s){var c=this,d=e.colDef,u=500,f=0,h=null;c.colDef=e.colDef,c.width=d.width,c.groupIndex=0,c.isGroupedBy=!1,c.minWidth=d.minWidth?d.minWidth:50,c.maxWidth=d.maxWidth?d.maxWidth:9e3,c.enableCellEdit=void 0!==d.enableCellEdit?d.enableCellEdit:e.enableCellEdit||e.enableCellEditOnFocus,c.cellEditableCondition=d.cellEditableCondition||e.cellEditableCondition||"true",c.headerRowHeight=e.headerRowHeight,c.displayName=void 0===d.displayName?d.field:d.displayName,c.index=e.index,c.isAggCol=e.isAggCol,c.cellClass=d.cellClass,c.sortPriority=void 0,c.cellFilter=d.cellFilter?d.cellFilter:"",c.field=d.field,c.aggLabelFilter=d.aggLabelFilter||d.cellFilter,c.visible=s.isNullOrUndefined(d.visible)||d.visible,c.sortable=!1,c.resizable=!1,c.pinnable=!1,c.pinned=e.enablePinning&&d.pinned,c.originalIndex=null==e.originalIndex?c.index:e.originalIndex,c.groupable=s.isNullOrUndefined(d.groupable)||d.groupable,e.enableSort&&(c.sortable=s.isNullOrUndefined(d.sortable)||d.sortable),e.enableResize&&(c.resizable=s.isNullOrUndefined(d.resizable)||d.resizable),e.enablePinning&&(c.pinnable=s.isNullOrUndefined(d.pinnable)||d.pinnable),c.sortDirection=void 0,c.sortingAlgorithm=d.sortFn,c.headerClass=d.headerClass,c.cursor=c.sortable?"pointer":"default",c.headerCellTemplate=d.headerCellTemplate||a.get("headerCellTemplate.html"),c.cellTemplate=d.cellTemplate||a.get("cellTemplate.html").replace(g,c.cellFilter?"|"+c.cellFilter:""),c.enableCellEdit&&(c.cellEditTemplate=d.cellEditTemplate||a.get("cellEditTemplate.html"),c.editableCellTemplate=d.editableCellTemplate||a.get("editableCellTemplate.html")),d.cellTemplate&&!p.test(d.cellTemplate)&&(c.cellTemplate=a.get(d.cellTemplate)||n.ajax({type:"GET",url:d.cellTemplate,async:!1}).responseText),c.enableCellEdit&&d.editableCellTemplate&&!p.test(d.editableCellTemplate)&&(c.editableCellTemplate=a.get(d.editableCellTemplate)||n.ajax({type:"GET",url:d.editableCellTemplate,async:!1}).responseText),d.headerCellTemplate&&!p.test(d.headerCellTemplate)&&(c.headerCellTemplate=a.get(d.headerCellTemplate)||n.ajax({type:"GET",url:d.headerCellTemplate,async:!1}).responseText),c.colIndex=function(){var e=c.pinned?"pinned ":"";return e+="col"+c.index+" colt"+c.index,c.cellClass&&(e+=" "+c.cellClass),e},c.groupedByClass=function(){return c.isGroupedBy?"ngGroupedByIcon":"ngGroupIcon"},c.toggleVisible=function(){c.visible=!c.visible},c.showSortButtonUp=function(){return c.sortable?c.sortDirection===r:c.sortable},c.showSortButtonDown=function(){return c.sortable?c.sortDirection===i:c.sortable},c.noSortVisible=function(){return!c.sortDirection},c.sort=function(n){if(!c.sortable)return!0;var t=c.sortDirection===i?r:i;return c.sortDirection=t,e.sortCallback(c,n),!1},c.gripClick=function(){f++,1===f?h=setTimeout(function(){f=0},u):(clearTimeout(h),e.resizeOnDataCallback(c),f=0)},c.gripOnMouseDown=function(e){return t.isColumnResizing=!0,e.ctrlKey&&!c.pinned?(c.toggleVisible(),l.BuildStyles(t,o),!0):(e.target.parentElement.style.cursor="col-resize",c.startMousePosition=e.clientX,c.origWidth=c.width,n(document).mousemove(c.onMouseMove),n(document).mouseup(c.gripOnMouseUp),!1)},c.onMouseMove=function(e){var n=e.clientX-c.startMousePosition,i=n+c.origWidth;return c.width=c.minWidth>i?c.minWidth:i>c.maxWidth?c.maxWidth:i,t.hasUserChangedGridColumnWidths=!0,l.BuildStyles(t,o),!1},c.gripOnMouseUp=function(e){return n(document).off("mousemove",c.onMouseMove),n(document).off("mouseup",c.gripOnMouseUp),e.target.parentElement.style.cursor="default",l.digest(t),t.isColumnResizing=!1,!1},c.copy=function(){var n=new T(e,t,o,l,a,s);return n.isClone=!0,n.orig=c,n},c.setVars=function(e){c.orig=e,c.width=e.width,c.groupIndex=e.groupIndex,c.isGroupedBy=e.isGroupedBy,c.displayName=e.displayName,c.index=e.index,c.isAggCol=e.isAggCol,c.cellClass=e.cellClass,c.cellFilter=e.cellFilter,c.field=e.field,c.aggLabelFilter=e.aggLabelFilter,c.visible=e.visible,c.sortable=e.sortable,c.resizable=e.resizable,c.pinnable=e.pinnable,c.pinned=e.pinned,c.originalIndex=e.originalIndex,c.sortDirection=e.sortDirection,c.sortingAlgorithm=e.sortingAlgorithm,c.headerClass=e.headerClass,c.headerCellTemplate=e.headerCellTemplate,c.cellTemplate=e.cellTemplate,c.cellEditTemplate=e.cellEditTemplate}},P=function(e){this.outerHeight=null,this.outerWidth=null,n.extend(this,e)},I=function(e){this.previousColumn=null,this.grid=e};I.prototype.changeUserSelect=function(e,n){e.css({"-webkit-touch-callout":n,"-webkit-user-select":n,"-khtml-user-select":n,"-moz-user-select":"none"===n?"-moz-none":n,"-ms-user-select":n,"user-select":n})},I.prototype.focusCellElement=function(e,n){if(e.selectionProvider.lastClickedRow){var t=void 0!==n?n:this.previousColumn,o=e.selectionProvider.lastClickedRow.clone?e.selectionProvider.lastClickedRow.clone.elm:e.selectionProvider.lastClickedRow.elm;if(void 0!==t&&o){var i=angular.element(o[0].children).filter(function(){return 8!==this.nodeType}),r=Math.max(Math.min(e.renderedColumns.length-1,t),0);this.grid.config.showSelectionCheckbox&&angular.element(i[r]).scope()&&0===angular.element(i[r]).scope().col.index&&(r=1),i[r]&&i[r].children[1].children[0].focus(),this.previousColumn=t}}},I.prototype.selectionHandlers=function(e,n){function t(t){if(16===t.keyCode)return r.changeUserSelect(n,"none",t),!0;if(!i){i=!0;var o=S(e,n,t,r.grid);return i=!1,o}return!0}function o(e){return 16===e.keyCode&&r.changeUserSelect(n,"text",e),!0}var i=!1,r=this;n.bind("keydown",t),n.bind("keyup",o),n.on("$destroy",function(){n.off("keydown",t),n.off("keyup",o)})};var $=function(t,o,i,r){var l=this;l.colToMove=void 0,l.groupToMove=void 0,l.assignEvents=function(){t.config.jqueryUIDraggable&&!t.config.enablePinning?(t.$groupPanel.droppable({addClasses:!1,drop:function(e){l.onGroupDrop(e)}}),t.$groupPanel.on("$destroy",function(){t.$groupPanel=null})):(t.$groupPanel.on("mousedown",l.onGroupMouseDown).on("dragover",l.dragOver).on("drop",l.onGroupDrop),t.$topPanel.on("mousedown",".ngHeaderScroller",l.onHeaderMouseDown).on("dragover",".ngHeaderScroller",l.dragOver),t.$groupPanel.on("$destroy",function(){t.$groupPanel&&t.$groupPanel.off("mousedown"),t.$groupPanel=null}),t.config.enableColumnReordering&&t.$topPanel.on("drop",".ngHeaderScroller",l.onHeaderDrop),t.$topPanel.on("$destroy",function(){t.$topPanel&&t.$topPanel.off("mousedown"),t.config.enableColumnReordering&&t.$topPanel&&t.$topPanel.off("drop"),t.$topPanel=null})),o.$on("$destroy",o.$watch("renderedColumns",function(){r(l.setDraggables)}))},l.dragStart=function(e){e.dataTransfer.setData("text","")},l.dragOver=function(e){e.preventDefault()},l.setDraggables=function(){if(t.config.jqueryUIDraggable)t.$root&&t.$root.find(".ngHeaderSortColumn").draggable({helper:"clone",appendTo:"body",stack:"div",addClasses:!1,start:function(e){l.onHeaderMouseDown(e)}}).droppable({drop:function(e){l.onHeaderDrop(e)}});else if(t.$root){var e=t.$root.find(".ngHeaderSortColumn");if(angular.forEach(e,function(e){e.className&&-1!==e.className.indexOf("ngHeaderSortColumn")&&(e.setAttribute("draggable","true"),e.addEventListener&&(e.addEventListener("dragstart",l.dragStart),angular.element(e).on("$destroy",function(){angular.element(e).off("dragstart",l.dragStart),e.removeEventListener("dragstart",l.dragStart)})))}),-1!==navigator.userAgent.indexOf("MSIE")){var n=t.$root.find(".ngHeaderSortColumn");n.bind("selectstart",function(){return this.dragDrop(),!1}),angular.element(n).on("$destroy",function(){n.off("selectstart")})}}},l.onGroupMouseDown=function(e){var o=n(e.target);if("ngRemoveGroup"!==o[0].className){var i=angular.element(o).scope();i&&(t.config.jqueryUIDraggable||(o.attr("draggable","true"),this.addEventListener&&(this.addEventListener("dragstart",l.dragStart),angular.element(this).on("$destroy",function(){this.removeEventListener("dragstart",l.dragStart)})),-1!==navigator.userAgent.indexOf("MSIE")&&(o.bind("selectstart",function(){return this.dragDrop(),!1}),o.on("$destroy",function(){o.off("selectstart")}))),l.groupToMove={header:o,groupName:i.group,index:i.$index})}else l.groupToMove=void 0},l.onGroupDrop=function(e){e.stopPropagation();var i,r;l.groupToMove?(i=n(e.target).closest(".ngGroupElement"),"ngGroupPanel"===i.context.className?(o.configGroups.splice(l.groupToMove.index,1),o.configGroups.push(l.groupToMove.groupName)):(r=angular.element(i).scope(),r&&l.groupToMove.index!==r.$index&&(o.configGroups.splice(l.groupToMove.index,1),o.configGroups.splice(r.$index,0,l.groupToMove.groupName))),l.groupToMove=void 0,t.fixGroupIndexes()):l.colToMove&&(-1===o.configGroups.indexOf(l.colToMove.col)&&(i=n(e.target).closest(".ngGroupElement"),"ngGroupPanel"===i.context.className||"ngGroupPanelDescription ng-binding"===i.context.className?o.groupBy(l.colToMove.col):(r=angular.element(i).scope(),r&&o.removeGroup(r.$index))),l.colToMove=void 0),o.$$phase||o.$apply()},l.onHeaderMouseDown=function(e){var t=n(e.target).closest(".ngHeaderSortColumn"),o=angular.element(t).scope();o&&(l.colToMove={header:t,col:o.col})},l.onHeaderDrop=function(e){if(l.colToMove&&!l.colToMove.col.pinned){var r=n(e.target).closest(".ngHeaderSortColumn"),a=angular.element(r).scope();if(a){if(l.colToMove.col===a.col||a.col.pinned)return;o.columns.splice(l.colToMove.col.index,1),o.columns.splice(a.col.index,0,l.colToMove.col),t.fixColumnIndexes(),l.colToMove=void 0,i.digest(o)}}},l.assignGridEventHandlers=function(){-1===t.config.tabIndex?(t.$viewport.attr("tabIndex",i.numberOfGrids),i.numberOfGrids++):t.$viewport.attr("tabIndex",t.config.tabIndex);var r,l=function(){clearTimeout(r),r=setTimeout(function(){i.RebuildGrid(o,t)},100)};n(e).on("resize.nggrid",l);var a,s=function(){clearTimeout(a),a=setTimeout(function(){i.RebuildGrid(o,t)},100)};n(t.$root.parent()).on("resize.nggrid",s),o.$on("$destroy",function(){n(e).off("resize.nggrid",l)})},l.assignGridEventHandlers(),l.assignEvents()},D=function(e,n){e.maxRows=function(){var t=Math.max(e.totalServerItems,n.data.length);return t},e.$on("$destroy",e.$watch("totalServerItems",function(){e.currentMaxPages=e.maxPages()})),e.multiSelect=n.config.enableRowSelection&&n.config.multiSelect,e.selectedItemCount=n.selectedItemCount,e.maxPages=function(){return 0===e.maxRows()?1:Math.ceil(e.maxRows()/e.pagingOptions.pageSize)},e.pageForward=function(){var n=e.pagingOptions.currentPage;e.totalServerItems>0?e.pagingOptions.currentPage=Math.min(n+1,e.maxPages()):e.pagingOptions.currentPage++},e.pageBackward=function(){var n=e.pagingOptions.currentPage;e.pagingOptions.currentPage=Math.max(n-1,1)},e.pageToFirst=function(){e.pagingOptions.currentPage=1},e.pageToLast=function(){var n=e.maxPages();e.pagingOptions.currentPage=n},e.cantPageForward=function(){var t=e.pagingOptions.currentPage,o=e.maxPages();return e.totalServerItems>0?t>=o:1>n.data.length},e.cantPageToLast=function(){return e.totalServerItems>0?e.cantPageForward():!0},e.cantPageBackward=function(){var n=e.pagingOptions.currentPage;return 1>=n}},L=function(i,r,l,a,c,g,d,u,f,h,m){var v={aggregateTemplate:void 0,afterSelectionChange:function(){},beforeSelectionChange:function(){return!0},checkboxCellTemplate:void 0,checkboxHeaderTemplate:void 0,columnDefs:void 0,data:[],dataUpdated:function(){},enableCellEdit:!1,enableCellEditOnFocus:!1,enableCellSelection:!1,enableColumnResize:!1,enableColumnReordering:!1,enableColumnHeavyVirt:!1,enablePaging:!1,enablePinning:!1,enableRowSelection:!0,enableSorting:!0,enableHighlighting:!1,excludeProperties:[],filterOptions:{filterText:"",useExternalFilter:!1},footerRowHeight:55,footerTemplate:void 0,forceSyncScrolling:!0,groups:[],groupsCollapsedByDefault:!0,headerRowHeight:30,headerRowTemplate:void 0,jqueryUIDraggable:!1,jqueryUITheme:!1,keepLastSelected:!0,maintainColumnRatios:void 0,menuTemplate:void 0,multiSelect:!0,pagingOptions:{pageSizes:[250,500,1e3],pageSize:250,currentPage:1},pinSelectionCheckbox:!1,plugins:[],primaryKey:void 0,rowHeight:30,rowTemplate:void 0,selectedItems:[],selectionCheckboxColumnWidth:25,selectWithCheckboxOnly:!1,showColumnMenu:!1,showFilter:!1,showFooter:!1,showGroupPanel:!1,showSelectionCheckbox:!1,sortInfo:{fields:[],columns:[],directions:[]},tabIndex:-1,totalServerItems:0,useExternalSorting:!1,i18n:"en",virtualizationThreshold:50,noTabInterference:!1},w=this;w.maxCanvasHt=0,w.config=n.extend(v,e.ngGrid.config,r),w.config.showSelectionCheckbox=w.config.showSelectionCheckbox&&w.config.enableColumnHeavyVirt===!1,w.config.enablePinning=w.config.enablePinning&&w.config.enableColumnHeavyVirt===!1,w.config.selectWithCheckboxOnly=w.config.selectWithCheckboxOnly&&w.config.showSelectionCheckbox!==!1,w.config.pinSelectionCheckbox=w.config.enablePinning,"string"==typeof r.columnDefs&&(w.config.columnDefs=i.$eval(r.columnDefs)),w.rowCache=[],w.rowMap=[],w.gridId="ng"+d.newId(),w.$root=null,w.$groupPanel=null,w.$topPanel=null,w.$headerContainer=null,w.$headerScroller=null,w.$headers=null,w.$viewport=null,w.$canvas=null,w.rootDim=w.config.gridDim,w.data=[],w.lateBindColumns=!1,w.filteredRows=[],w.initTemplates=function(){var e=["rowTemplate","aggregateTemplate","headerRowTemplate","checkboxCellTemplate","checkboxHeaderTemplate","menuTemplate","footerTemplate"],n=[];return angular.forEach(e,function(e){n.push(w.getTemplate(e))}),m.all(n)},w.getTemplate=function(e){var n=w.config[e],t=w.gridId+e+".html",o=m.defer();if(n&&!p.test(n))h.get(n,{cache:g}).success(function(e){g.put(t,e),o.resolve()}).error(function(){o.reject("Could not load template: "+n)});else if(n)g.put(t,n),o.resolve();else{var i=e+".html";g.put(t,g.get(i)),o.resolve()}return o.promise},"object"==typeof w.config.data&&(w.data=w.config.data),w.calcMaxCanvasHeight=function(){var e;return e=w.config.groups.length>0?w.rowFactory.parsedData.filter(function(e){return!e[s]}).length*w.config.rowHeight:w.filteredRows.length*w.config.rowHeight},w.elementDims={scrollW:0,scrollH:0,rowIndexCellW:w.config.selectionCheckboxColumnWidth,rowSelectedCellW:w.config.selectionCheckboxColumnWidth,rootMaxW:0,rootMaxH:0},w.setRenderedRows=function(e){i.renderedRows.length=e.length;for(var n=0;e.length>n;n++)!i.renderedRows[n]||e[n].isAggRow||i.renderedRows[n].isAggRow?(i.renderedRows[n]=e[n].copy(),i.renderedRows[n].collapsed=e[n].collapsed,e[n].isAggRow||i.renderedRows[n].setVars(e[n])):i.renderedRows[n].setVars(e[n]),i.renderedRows[n].rowIndex=e[n].rowIndex,i.renderedRows[n].offsetTop=e[n].offsetTop,i.renderedRows[n].selected=e[n].selected,e[n].renderedRowIndex=n;w.refreshDomSizes(),i.$emit("ngGridEventRows",e)},w.minRowsToRender=function(){var e=i.viewportDimHeight()||1;return Math.floor(e/w.config.rowHeight)},w.refreshDomSizes=function(){var e=new P;e.outerWidth=w.elementDims.rootMaxW,e.outerHeight=w.elementDims.rootMaxH,w.rootDim=e,w.maxCanvasHt=w.calcMaxCanvasHeight()},w.buildColumnDefsFromData=function(){w.config.columnDefs=[];var e=w.data[0];return e?(d.forIn(e,function(e,n){-1===w.config.excludeProperties.indexOf(n)&&w.config.columnDefs.push({field:n})}),void 0):(w.lateBoundColumns=!0,void 0)},w.buildColumns=function(){var e=w.config.columnDefs,n=[];if(e||(w.buildColumnDefsFromData(),e=w.config.columnDefs),w.config.showSelectionCheckbox&&n.push(new T({colDef:{field:"✔",width:w.elementDims.rowSelectedCellW,sortable:!1,resizable:!1,groupable:!1,headerCellTemplate:g.get(i.gridId+"checkboxHeaderTemplate.html"),cellTemplate:g.get(i.gridId+"checkboxCellTemplate.html"),pinned:w.config.pinSelectionCheckbox},index:0,headerRowHeight:w.config.headerRowHeight,sortCallback:w.sortData,resizeOnDataCallback:w.resizeOnData,enableResize:w.config.enableColumnResize,enableSort:w.config.enableSorting,enablePinning:w.config.enablePinning},i,w,a,g,d)),e.length>0){var t=w.config.showSelectionCheckbox?1:0,o=i.configGroups.length;i.configGroups.length=0,angular.forEach(e,function(e,r){r+=t;var l=new T({colDef:e,index:r+o,originalIndex:r,headerRowHeight:w.config.headerRowHeight,sortCallback:w.sortData,resizeOnDataCallback:w.resizeOnData,enableResize:w.config.enableColumnResize,enableSort:w.config.enableSorting,enablePinning:w.config.enablePinning,enableCellEdit:w.config.enableCellEdit||w.config.enableCellEditOnFocus,cellEditableCondition:w.config.cellEditableCondition},i,w,a,g,d),s=w.config.groups.indexOf(e.field);-1!==s&&(l.isGroupedBy=!0,i.configGroups.splice(s,0,l),l.groupIndex=i.configGroups.length),n.push(l)}),i.columns=n,w.config.groups.length>0&&w.rowFactory.getGrouping(w.config.groups)}},w.configureColumnWidths=function(){var e=[],n=[],t=0,o=0,r={};if(angular.forEach(i.columns,function(e,n){if(d.isNullOrUndefined(e.originalIndex))e.isAggCol&&e.visible&&(o+=25);else{var t=e.originalIndex;w.config.showSelectionCheckbox&&(0===e.originalIndex&&e.visible&&(o+=w.config.selectionCheckboxColumnWidth),t--),r[t]=n}}),angular.forEach(w.config.columnDefs,function(l,a){var s=i.columns[r[a]];l.index=a;var c,g=!1;if(d.isNullOrUndefined(l.width)?l.width="*":(g=isNaN(l.width)?d.endsWith(l.width,"%"):!1,c=g?l.width:parseInt(l.width,10)),isNaN(c)){if(c=l.width,"auto"===c){s.width=s.minWidth,o+=s.width;var u=s;return i.$on("$destroy",i.$on("ngGridEventData",function(){w.resizeOnData(u)})),void 0}if(-1!==c.indexOf("*"))return s.visible!==!1&&(t+=c.length),e.push(l),void 0;if(g)return n.push(l),void 0;throw'unable to parse column width, use percentage ("10%","20%", etc...) or "*" to use remaining width of grid'}s.visible!==!1&&(o+=s.width=parseInt(s.width,10))}),n.length>0){w.config.maintainColumnRatios=w.config.maintainColumnRatios!==!1;var l=0,s=0;angular.forEach(n,function(e){var n=i.columns[r[e.index]],t=parseFloat(e.width)/100;l+=t,n.visible||(s+=t)});var c=l-s;angular.forEach(n,function(e){var n=i.columns[r[e.index]],t=parseFloat(e.width)/100;t/=s>0?c:l;var a=w.rootDim.outerWidth*l;n.width=a*t,o+=n.width})}if(e.length>0){w.config.maintainColumnRatios=w.config.maintainColumnRatios!==!1;var g=w.rootDim.outerWidth-o;w.maxCanvasHt>i.viewportDimHeight()&&(g-=a.ScrollW);var u=Math.floor(g/t);angular.forEach(e,function(n,t){var l=i.columns[r[n.index]];l.width=u*n.width.length,l.width<l.minWidth&&(l.width=l.minWidth),l.visible!==!1&&(o+=l.width);var s=t===e.length-1;if(s&&w.rootDim.outerWidth>o){var c=w.rootDim.outerWidth-o;w.maxCanvasHt>i.viewportDimHeight()&&(c-=a.ScrollW),l.width+=c}})}},w.init=function(){return w.initTemplates().then(function(){i.selectionProvider=new H(w,i,f,d),i.domAccessProvider=new I(w),w.rowFactory=new G(w,i,a,g,d),w.searchProvider=new k(i,w,c,d),w.styleProvider=new F(i,w),i.$on("$destroy",i.$watch("configGroups",function(e){var n=[];angular.forEach(e,function(e){n.push(e.field||e)}),w.config.groups=n,w.rowFactory.filteredRowsChanged(),i.$emit("ngGridEventGroups",e)},!0)),i.$on("$destroy",i.$watch("columns",function(e){i.isColumnResizing||a.RebuildGrid(i,w),i.$emit("ngGridEventColumns",e)},!0)),i.$on("$destroy",i.$watch(function(){return r.i18n},function(e){d.seti18n(i,e)})),w.maxCanvasHt=w.calcMaxCanvasHeight(),w.config.sortInfo.fields&&w.config.sortInfo.fields.length>0&&i.$on("$destroy",i.$watch(function(){return w.config.sortInfo},function(){l.isSorting||(w.sortColumnsInit(),i.$emit("ngGridEventSorted",w.config.sortInfo))},!0))})},w.resizeOnData=function(e){var t=e.minWidth,o=d.getElementsByClassName("col"+e.index);angular.forEach(o,function(e,o){var i;if(0===o){var r=n(e).find(".ngHeaderText");i=d.visualLength(r)+10}else{var l=n(e).find(".ngCellText");i=d.visualLength(l)+10}i>t&&(t=i)}),e.width=e.longest=Math.min(e.maxWidth,t+7),a.BuildStyles(i,w,!0)},w.lastSortedColumns=[],w.sortData=function(e,t){if(t&&t.shiftKey&&w.config.sortInfo){var o=w.config.sortInfo.columns.indexOf(e);-1===o?(1===w.config.sortInfo.columns.length&&(w.config.sortInfo.columns[0].sortPriority=1),w.config.sortInfo.columns.push(e),e.sortPriority=w.config.sortInfo.columns.length,w.config.sortInfo.fields.push(e.field),w.config.sortInfo.directions.push(e.sortDirection),w.lastSortedColumns.push(e)):w.config.sortInfo.directions[o]=e.sortDirection,i.$emit("ngGridEventSorted",w.config.sortInfo)}else if(!w.config.useExternalSorting||w.config.useExternalSorting&&w.config.sortInfo){var r=n.isArray(e);w.config.sortInfo.columns.length=0,w.config.sortInfo.fields.length=0,w.config.sortInfo.directions.length=0;var l=function(e){w.config.sortInfo.columns.push(e),w.config.sortInfo.fields.push(e.field),w.config.sortInfo.directions.push(e.sortDirection),w.lastSortedColumns.push(e)};r?angular.forEach(e,function(e,n){e.sortPriority=n+1,l(e)
}):(w.clearSortingData(e),e.sortPriority=void 0,l(e)),w.sortActual(),w.searchProvider.evalFilter(),i.$emit("ngGridEventSorted",w.config.sortInfo)}},w.sortColumnsInit=function(){w.config.sortInfo.columns?w.config.sortInfo.columns.length=0:w.config.sortInfo.columns=[];var e=[];angular.forEach(i.columns,function(n){var t=w.config.sortInfo.fields.indexOf(n.field);-1!==t&&(n.sortDirection=w.config.sortInfo.directions[t]||"asc",e[t]=n)}),1===e.length?w.sortData(e[0]):w.sortData(e)},w.sortActual=function(){if(!w.config.useExternalSorting){var e=w.data.slice(0);angular.forEach(e,function(e,n){var t=w.rowMap[n];if(void 0!==t){var o=w.rowCache[t];void 0!==o&&(e.preSortSelected=o.selected,e.preSortIndex=n)}}),l.Sort(w.config.sortInfo,e),angular.forEach(e,function(e,n){w.rowCache[n].entity=e,w.rowCache[n].selected=e.preSortSelected,w.rowMap[e.preSortIndex]=n,delete e.preSortSelected,delete e.preSortIndex})}},w.clearSortingData=function(e){e?(angular.forEach(w.lastSortedColumns,function(n){e.index!==n.index&&(n.sortDirection="",n.sortPriority=null)}),w.lastSortedColumns[0]=e,w.lastSortedColumns.length=1):(angular.forEach(w.lastSortedColumns,function(e){e.sortDirection="",e.sortPriority=null}),w.lastSortedColumns=[])},w.fixColumnIndexes=function(){for(var e=0;i.columns.length>e;e++)i.columns[e].index=e},w.fixGroupIndexes=function(){angular.forEach(i.configGroups,function(e,n){e.groupIndex=n+1})},i.elementsNeedMeasuring=!0,i.columns=[],i.renderedRows=[],i.renderedColumns=[],i.headerRow=null,i.rowHeight=w.config.rowHeight,i.jqueryUITheme=w.config.jqueryUITheme,i.showSelectionCheckbox=w.config.showSelectionCheckbox,i.enableCellSelection=w.config.enableCellSelection,i.enableCellEditOnFocus=w.config.enableCellEditOnFocus,i.footer=null,i.selectedItems=w.config.selectedItems,i.multiSelect=w.config.multiSelect,i.showFooter=w.config.showFooter,i.footerRowHeight=i.showFooter?w.config.footerRowHeight:0,i.showColumnMenu=w.config.showColumnMenu,i.forceSyncScrolling=w.config.forceSyncScrolling,i.showMenu=!1,i.configGroups=[],i.gridId=w.gridId,i.enablePaging=w.config.enablePaging,i.pagingOptions=w.config.pagingOptions,i.i18n={},d.seti18n(i,w.config.i18n),i.adjustScrollLeft=function(e){for(var n=0,t=0,o=i.columns.length,r=[],l=!w.config.enableColumnHeavyVirt,s=0,c=function(e){l?r.push(e):i.renderedColumns[s]?i.renderedColumns[s].setVars(e):i.renderedColumns[s]=e.copy(),s++},g=0;o>g;g++){var d=i.columns[g];if(d.visible!==!1){var u=d.width+n;if(d.pinned){c(d);var f=g>0?e+t:e;a.setColLeft(d,f,w),t+=d.width}else u>=e&&e+w.rootDim.outerWidth>=n&&c(d);n+=d.width}}l&&(i.renderedColumns=r)},w.prevScrollTop=0,w.prevScrollIndex=0,i.adjustScrollTop=function(e,n){if(w.prevScrollTop!==e||n){e>0&&w.$viewport[0].scrollHeight-e<=w.$viewport.outerHeight()&&i.$emit("ngGridEventScroll");var r,l=Math.floor(e/w.config.rowHeight);if(w.filteredRows.length>w.config.virtualizationThreshold){if(e>w.prevScrollTop&&w.prevScrollIndex+o>l)return;if(w.prevScrollTop>e&&l>w.prevScrollIndex-o)return;r=new R(Math.max(0,l-t),l+w.minRowsToRender()+t)}else{var a=i.configGroups.length>0?w.rowFactory.parsedData.length:w.filteredRows.length;r=new R(0,Math.max(a,w.minRowsToRender()+t))}w.prevScrollTop=e,w.rowFactory.UpdateViewableRange(r),w.prevScrollIndex=l}},i.toggleShowMenu=function(){i.showMenu=!i.showMenu},i.toggleSelectAll=function(e,n){i.selectionProvider.toggleSelectAll(e,!1,n)},i.totalFilteredItemsLength=function(){return w.filteredRows.length},i.showGroupPanel=function(){return w.config.showGroupPanel},i.topPanelHeight=function(){return w.config.showGroupPanel===!0?w.config.headerRowHeight+32:w.config.headerRowHeight},i.viewportDimHeight=function(){return Math.max(0,w.rootDim.outerHeight-i.topPanelHeight()-i.footerRowHeight-2)},i.groupBy=function(e){if(!(1>w.data.length)&&e.groupable&&e.field){e.sortDirection||e.sort({shiftKey:i.configGroups.length>0?!0:!1});var n=i.configGroups.indexOf(e);-1===n?(e.isGroupedBy=!0,i.configGroups.push(e),e.groupIndex=i.configGroups.length):i.removeGroup(n),w.$viewport.scrollTop(0),a.digest(i)}},i.removeGroup=function(e){var n=i.columns.filter(function(n){return n.groupIndex===e+1})[0];n.isGroupedBy=!1,n.groupIndex=0,i.columns[e].isAggCol&&(i.columns.splice(e,1),i.configGroups.splice(e,1),w.fixGroupIndexes()),0===i.configGroups.length&&(w.fixColumnIndexes(),a.digest(i)),i.adjustScrollLeft(0)},i.togglePin=function(e){for(var n=e.index,t=0,o=0;i.columns.length>o&&i.columns[o].pinned;o++)t++;e.pinned&&(t=Math.max(e.originalIndex,t-1)),e.pinned=!e.pinned,i.columns.splice(n,1),i.columns.splice(t,0,e),w.fixColumnIndexes(),a.BuildStyles(i,w,!0),w.$viewport.scrollLeft(w.$viewport.scrollLeft()-e.width)},i.totalRowWidth=function(){for(var e=0,n=i.columns,t=0;n.length>t;t++)n[t].visible!==!1&&(e+=n[t].width);return e},i.headerScrollerDim=function(){var e=i.viewportDimHeight(),n=w.maxCanvasHt,t=n>e,o=new P;return o.autoFitHeight=!0,o.outerWidth=i.totalRowWidth(),t?o.outerWidth+=w.elementDims.scrollW:w.elementDims.scrollH>=n-e&&(o.outerWidth+=w.elementDims.scrollW),o}},R=function(e,n){this.topRow=e,this.bottomRow=n},E=function(e,n,t,o,i){this.entity=e,this.config=n,this.selectionProvider=t,this.rowIndex=o,this.utils=i,this.selected=t.getSelection(e),this.cursor=this.config.enableRowSelection&&!this.config.selectWithCheckboxOnly?"pointer":"default",this.beforeSelectionChange=n.beforeSelectionChangeCallback,this.afterSelectionChange=n.afterSelectionChangeCallback,this.offsetTop=this.rowIndex*n.rowHeight,this.rowDisplayIndex=0};E.prototype.setSelection=function(e){this.selectionProvider.setSelection(this,e),this.selectionProvider.lastClickedRow=this},E.prototype.continueSelection=function(e){this.selectionProvider.ChangeSelection(this,e)},E.prototype.ensureEntity=function(e){this.entity!==e&&(this.entity=e,this.selected=this.selectionProvider.getSelection(this.entity))},E.prototype.toggleSelected=function(e){if(!this.config.enableRowSelection&&!this.config.enableCellSelection)return!0;var n=e.target||e;return"checkbox"===n.type&&"ngSelectionCell ng-scope"!==n.parentElement.className?!0:this.config.selectWithCheckboxOnly&&"checkbox"!==n.type?(this.selectionProvider.lastClickedRow=this,!0):(this.beforeSelectionChange(this,e)&&this.continueSelection(e),!1)},E.prototype.alternatingRowClass=function(){var e=0===this.rowIndex%2,n={ngRow:!0,selected:this.selected,even:e,odd:!e,"ui-state-default":this.config.jqueryUITheme&&e,"ui-state-active":this.config.jqueryUITheme&&!e};return n},E.prototype.getProperty=function(e){return this.utils.evalProperty(this.entity,e)},E.prototype.copy=function(){return this.clone=new E(this.entity,this.config,this.selectionProvider,this.rowIndex,this.utils),this.clone.isClone=!0,this.clone.elm=this.elm,this.clone.orig=this,this.clone},E.prototype.setVars=function(e){e.clone=this,this.entity=e.entity,this.selected=e.selected,this.orig=e};var G=function(e,n,o,i,r){var g=this;g.aggCache={},g.parentCache=[],g.dataChanged=!0,g.parsedData=[],g.rowConfig={},g.selectionProvider=n.selectionProvider,g.rowHeight=30,g.numberOfAggregates=0,g.groupedData=void 0,g.rowHeight=e.config.rowHeight,g.rowConfig={enableRowSelection:e.config.enableRowSelection,rowClasses:e.config.rowClasses,selectedItems:n.selectedItems,selectWithCheckboxOnly:e.config.selectWithCheckboxOnly,beforeSelectionChangeCallback:e.config.beforeSelectionChange,afterSelectionChangeCallback:e.config.afterSelectionChange,jqueryUITheme:e.config.jqueryUITheme,enableCellSelection:e.config.enableCellSelection,rowHeight:e.config.rowHeight},g.renderedRange=new R(0,e.minRowsToRender()+t),g.buildEntityRow=function(e,n){return new E(e,g.rowConfig,g.selectionProvider,n,r)},g.buildAggregateRow=function(n,t){var o=g.aggCache[n.aggIndex];return o||(o=new x(n,g,g.rowConfig.rowHeight,e.config.groupsCollapsedByDefault),g.aggCache[n.aggIndex]=o),o.rowIndex=t,o.offsetTop=t*g.rowConfig.rowHeight,o},g.UpdateViewableRange=function(e){g.renderedRange=e,g.renderedChange()},g.filteredRowsChanged=function(){e.lateBoundColumns&&e.filteredRows.length>0&&(e.config.columnDefs=void 0,e.buildColumns(),e.lateBoundColumns=!1,n.$evalAsync(function(){n.adjustScrollLeft(0)})),g.dataChanged=!0,e.config.groups.length>0&&g.getGrouping(e.config.groups),g.UpdateViewableRange(g.renderedRange)},g.renderedChange=function(){if(!g.groupedData||1>e.config.groups.length)return g.renderedChangeNoGroups(),e.refreshDomSizes(),void 0;g.wasGrouped=!0,g.parentCache=[];var n=0,t=g.parsedData.filter(function(e){return e.isAggRow?e.parent&&e.parent.collapsed?!1:!0:(e[s]||(e.rowIndex=n++),!e[s])});g.totalRows=t.length;for(var o=[],i=g.renderedRange.topRow;g.renderedRange.bottomRow>i;i++)t[i]&&(t[i].offsetTop=i*e.config.rowHeight,o.push(t[i]));e.setRenderedRows(o)},g.renderedChangeNoGroups=function(){for(var n=[],t=g.renderedRange.topRow;g.renderedRange.bottomRow>t;t++)e.filteredRows[t]&&(e.filteredRows[t].rowIndex=t,e.filteredRows[t].offsetTop=t*e.config.rowHeight,n.push(e.filteredRows[t]));e.setRenderedRows(n)},g.fixRowCache=function(){var n=e.data.length,t=n-e.rowCache.length;if(0>t)e.rowCache.length=e.rowMap.length=n;else for(var o=e.rowCache.length;n>o;o++)e.rowCache[o]=e.rowFactory.buildEntityRow(e.data[o],o)},g.parseGroupData=function(e){if(e.values)for(var n=0;e.values.length>n;n++)g.parentCache[g.parentCache.length-1].children.push(e.values[n]),g.parsedData.push(e.values[n]);else for(var t in e)if(t!==l&&t!==a&&t!==c&&e.hasOwnProperty(t)){var o=g.buildAggregateRow({gField:e[l],gLabel:t,gDepth:e[a],isAggRow:!0,_ng_hidden_:!1,children:[],aggChildren:[],aggIndex:g.numberOfAggregates,aggLabelFilter:e[c].aggLabelFilter},0);g.numberOfAggregates++,o.parent=g.parentCache[o.depth-1],o.parent&&(o.parent.collapsed=!1,o.parent.aggChildren.push(o)),g.parsedData.push(o),g.parentCache[o.depth]=o,g.parseGroupData(e[t])}},g.getGrouping=function(t){function d(e,n){return e.filter(function(e){return e.field===n})}g.aggCache=[],g.numberOfAggregates=0,g.groupedData={};for(var u=e.filteredRows,f=t.length,h=n.columns,p=0;u.length>p;p++){var m=u[p].entity;if(!m)return;u[p][s]=e.config.groupsCollapsedByDefault;for(var v=g.groupedData,w=0;t.length>w;w++){var C=t[w],b=d(h,C)[0],y=r.evalProperty(m,C);y=""===y||null===y?"null":""+y,v[y]||(v[y]={}),v[l]||(v[l]=C),v[a]||(v[a]=w),v[c]||(v[c]=b),v=v[y]}v.values||(v.values=[]),v.values.push(u[p])}if(h.length>0)for(var S=0;t.length>S;S++)!h[S].isAggCol&&f>=S&&h.splice(0,0,new T({colDef:{field:"",width:25,sortable:!1,resizable:!1,headerCellTemplate:'<div class="ngAggHeader"></div>',pinned:e.config.pinSelectionCheckbox},enablePinning:e.config.enablePinning,isAggCol:!0,headerRowHeight:e.config.headerRowHeight},n,e,o,i,r));e.fixColumnIndexes(),n.adjustScrollLeft(0),g.parsedData.length=0,g.parseGroupData(g.groupedData),g.fixRowCache()},e.config.groups.length>0&&e.filteredRows.length>0&&g.getGrouping(e.config.groups)},k=function(e,t,o,i){var r=this,l=[];r.extFilter=t.config.filterOptions.useExternalFilter,e.showFilter=t.config.showFilter,e.filterText="",r.fieldMap={};var a=function(e){var n={};for(var t in e)e.hasOwnProperty(t)&&(n[t.toLowerCase()]=e[t]);return n},s=function(e){if("object"==typeof e){var n=[];for(var t in e)n=n.concat(s(e[t]));return n}return[e]},c=function(e,n,t){var i;for(var r in n)if(n.hasOwnProperty(r)){var l=t[r.toLowerCase()],s=n[r];if("object"!=typeof s||s instanceof Date){var g=null,d=null;if(l&&l.cellFilter&&(d=l.cellFilter.split(":"),g=o(d[0])),null!==s&&void 0!==s){if("function"==typeof g){var u=""+g(s,d[1]?d[1].slice(1,-1):"");i=e.regex.test(u)}else i=e.regex.test(""+s);if(i)return!0}}else{var f=a(l);if(i=c(e,s,f))return!0}}return!1},g=function(e,n){var t,l=r.fieldMap[e.columnDisplay];if(!l)return!1;var a=l.cellFilter.split(":"),c=l.cellFilter?o(a[0]):null,g=n[e.column]||n[l.field.split(".")[0]]||i.evalProperty(n,l.field);if(null===g||void 0===g)return!1;if("function"==typeof c){var d=""+c("object"==typeof g?u(g,l.field):g,a[1]);t=e.regex.test(d)}else{var f=s(u(g,l.field));for(var h in f)t|=e.regex.test(f[h])}return t?!0:!1},d=function(e){for(var n=0,t=l.length;t>n;n++){var o,i=l[n];if(o=i.column?g(i,e):c(i,e,r.fieldMap),!o)return!1}return!0};r.evalFilter=function(){t.filteredRows=0===l.length?t.rowCache:t.rowCache.filter(function(e){return d(e.entity)});for(var e=0;t.filteredRows.length>e;e++)t.filteredRows[e].rowIndex=e;t.rowFactory.filteredRowsChanged()};var u=function(e,n){if("object"!=typeof e||"string"!=typeof n)return e;var t=n.split("."),o=e;if(t.length>1){for(var i=1,r=t.length;r>i;i++)if(o=o[t[i]],!o)return e;return o}return e},f=function(e,n){try{return RegExp(e,n)}catch(t){return RegExp(e.replace(/(\^|\$|\(|\)|<|>|\[|\]|\{|\}|\\|\||\.|\*|\+|\?)/g,"\\$1"))}},h=function(e){l=[];var t;if(t=n.trim(e))for(var o=t.split(";"),i=0;o.length>i;i++){var r=o[i].split(":");if(r.length>1){var a=n.trim(r[0]),s=n.trim(r[1]);a&&s&&l.push({column:a,columnDisplay:a.replace(/\s+/g,"").toLowerCase(),regex:f(s,"i")})}else{var c=n.trim(r[0]);c&&l.push({column:"",regex:f(c,"i")})}}};r.extFilter||e.$on("$destroy",e.$watch("columns",function(e){for(var n=0;e.length>n;n++){var t=e[n];if(t.field)if(t.field.match(/\./g)){for(var o=t.field.split("."),i=r.fieldMap,l=0;o.length-1>l;l++)i[o[l]]=i[o[l]]||{},i=i[o[l]];i[o[o.length-1]]=t}else r.fieldMap[t.field.toLowerCase()]=t;t.displayName&&(r.fieldMap[t.displayName.toLowerCase().replace(/\s+/g,"")]=t)}})),e.$on("$destroy",e.$watch(function(){return t.config.filterOptions.filterText},function(n){e.filterText=n})),e.$on("$destroy",e.$watch("filterText",function(n){r.extFilter||(e.$emit("ngGridEventFilter",n),h(n),r.evalFilter())}))},H=function(e,n,t,o){var i=this;i.multi=e.config.multiSelect,i.selectedItems=e.config.selectedItems,i.selectedIndex=e.config.selectedIndex,i.lastClickedRow=void 0,i.ignoreSelectedItemChanges=!1;var r=e.config.primaryKey;r&&(r=o.preEval("entity."+e.config.primaryKey)),i.pKeyParser=t(r),i.ChangeSelection=function(t,o){var r=o.which||o.keyCode,l=40===r||38===r;if(o&&o.shiftKey&&!o.keyCode&&i.multi&&e.config.enableRowSelection){if(i.lastClickedRow){var a;a=n.configGroups.length>0?e.rowFactory.parsedData.filter(function(e){return!e.isAggRow}):e.filteredRows;var s=t.rowIndex,c=i.lastClickedRowIndex;if(s===c)return!1;c>s?(s^=c,c=s^c,s^=c,s--):c++;for(var g=[];s>=c;c++)g.push(a[c]);if(g[g.length-1].beforeSelectionChange(g,o)){for(var d=0;g.length>d;d++){var u=g[d],f=u.selected;u.selected=!f,u.clone&&(u.clone.selected=u.selected);var h=i.selectedItems.indexOf(u.entity);-1===h?i.selectedItems.push(u.entity):i.selectedItems.splice(h,1)}g[g.length-1].afterSelectionChange(g,o)}return i.lastClickedRow=t,i.lastClickedRowIndex=t.rowIndex,!0}}else i.multi?(!o.keyCode||l&&!e.config.selectWithCheckboxOnly)&&i.setSelection(t,!t.selected):i.lastClickedRow===t?i.setSelection(i.lastClickedRow,e.config.keepLastSelected?!0:!t.selected):(i.lastClickedRow&&i.setSelection(i.lastClickedRow,!1),i.setSelection(t,!t.selected));return i.lastClickedRow=t,i.lastClickedRowIndex=t.rowIndex,!0},i.getSelection=function(e){return-1!==i.getSelectionIndex(e)},i.getSelectionIndex=function(n){var t=-1;if(e.config.primaryKey){var o=i.pKeyParser({entity:n});angular.forEach(i.selectedItems,function(e,n){o===i.pKeyParser({entity:e})&&(t=n)})}else t=i.selectedItems.indexOf(n);return t},i.setSelection=function(n,t){if(e.config.enableRowSelection){if(t)-1===i.getSelectionIndex(n.entity)&&(!i.multi&&i.selectedItems.length>0&&i.toggleSelectAll(!1,!0),i.selectedItems.push(n.entity));else{var o=i.getSelectionIndex(n.entity);-1!==o&&i.selectedItems.splice(o,1)}n.selected=t,n.orig&&(n.orig.selected=t),n.clone&&(n.clone.selected=t),n.afterSelectionChange(n)}},i.toggleSelectAll=function(n,t,o){var r,l,a=o?e.filteredRows:e.rowCache;if(t||e.config.beforeSelectionChange(a,n)){!o&&i.selectedItems.length>0&&(i.selectedItems.length=0);for(var s=0;a.length>s;s++)r=a[s].selected,a[s].selected=n,a[s].clone&&(a[s].clone.selected=n),!r&&n?i.selectedItems.push(a[s].entity):r&&!n&&(l=i.getSelectionIndex(a[s].entity),l>-1&&i.selectedItems.splice(l,1));t||e.config.afterSelectionChange(a,n)}}},F=function(e,n){e.headerCellStyle=function(e){return{height:e.headerRowHeight+"px"}},e.rowStyle=function(n){var t={top:n.offsetTop+"px",height:e.rowHeight+"px"};return n.isAggRow&&(t.left=n.offsetLeft),t},e.canvasStyle=function(){return{height:n.maxCanvasHt+"px"}},e.headerScrollerStyle=function(){return{height:n.config.headerRowHeight+"px"}},e.topPanelStyle=function(){return{width:n.rootDim.outerWidth+"px",height:e.topPanelHeight()+"px"}},e.headerStyle=function(){return{width:n.rootDim.outerWidth+"px",height:n.config.headerRowHeight+"px"}},e.groupPanelStyle=function(){return{width:n.rootDim.outerWidth+"px",height:"32px"}},e.viewportStyle=function(){return{width:n.rootDim.outerWidth+"px",height:e.viewportDimHeight()+"px"}},e.footerStyle=function(){return{width:n.rootDim.outerWidth+"px",height:e.footerRowHeight+"px"}}};b.directive("ngCellHasFocus",["$domUtilityService",function(e){var n=function(n){n.isFocused=!0,e.digest(n),n.$broadcast("ngGridEventStartCellEdit"),n.$emit("ngGridEventStartCellEdit"),n.$on("$destroy",n.$on("ngGridEventEndCellEdit",function(){n.isFocused=!1,e.digest(n)}))};return function(e,t){function o(){return e.enableCellEditOnFocus?c=!0:t.focus(),!0}function i(o){e.enableCellEditOnFocus&&(o.preventDefault(),c=!1,n(e,t))}function r(){return s=!0,e.enableCellEditOnFocus&&!c&&n(e,t),!0}function l(){return s=!1,!0}function a(o){return e.enableCellEditOnFocus||(s&&37!==o.keyCode&&38!==o.keyCode&&39!==o.keyCode&&40!==o.keyCode&&9!==o.keyCode&&!o.shiftKey&&13!==o.keyCode&&n(e,t),s&&o.shiftKey&&o.keyCode>=65&&90>=o.keyCode&&n(e,t),27===o.keyCode&&t.focus()),!0}var s=!1,c=!1;e.editCell=function(){e.enableCellEditOnFocus||setTimeout(function(){n(e,t)},0)},t.bind("mousedown",o),t.bind("click",i),t.bind("focus",r),t.bind("blur",l),t.bind("keydown",a),t.on("$destroy",function(){t.off("mousedown",o),t.off("click",i),t.off("focus",r),t.off("blur",l),t.off("keydown",a)})}}]),b.directive("ngCellText",function(){return function(e,n){function t(e){e.preventDefault()}function o(e){e.preventDefault()}n.bind("mouseover",t),n.bind("mouseleave",o),n.on("$destroy",function(){n.off("mouseover",t),n.off("mouseleave",o)})}}),b.directive("ngCell",["$compile","$domUtilityService","$utilityService",function(e,t,o){var i={scope:!1,compile:function(){return{pre:function(t,i){var r,l=t.col.cellTemplate.replace(d,o.preEval("row.entity."+t.col.field));t.col.enableCellEdit?(r=t.col.cellEditTemplate,r=r.replace(h,t.col.cellEditableCondition),r=r.replace(u,l),r=r.replace(f,t.col.editableCellTemplate.replace(d,o.preEval("row.entity."+t.col.field)))):r=l;var a=n(r);i.append(a),e(a)(t),t.enableCellSelection&&-1===a[0].className.indexOf("ngSelectionCell")&&(a[0].setAttribute("tabindex",0),a.addClass("ngCellElement"))},post:function(e,n){e.enableCellSelection&&e.domAccessProvider.selectionHandlers(e,n),e.$on("$destroy",e.$on("ngGridEventDigestCell",function(){t.digest(e)}))}}}};return i}]),b.directive("ngEditCellIf",[function(){return{transclude:"element",priority:1e3,terminal:!0,restrict:"A",compile:function(e,n,t){return function(e,n,o){var i,r;e.$on("$destroy",e.$watch(o.ngEditCellIf,function(o){i&&(i.remove(),i=void 0),r&&(r.$destroy(),r=void 0),o&&(r=e.$new(),t(r,function(e){i=e,n.after(e)}))}))}}}}]),b.directive("ngGridFooter",["$compile","$templateCache",function(e,n){var t={scope:!1,compile:function(){return{pre:function(t,o){0===o.children().length&&o.append(e(n.get(t.gridId+"footerTemplate.html"))(t))}}}};return t}]),b.directive("ngGridMenu",["$compile","$templateCache",function(e,n){var t={scope:!1,compile:function(){return{pre:function(t,o){0===o.children().length&&o.append(e(n.get(t.gridId+"menuTemplate.html"))(t))}}}};return t}]),b.directive("ngGrid",["$compile","$filter","$templateCache","$sortService","$domUtilityService","$utilityService","$timeout","$parse","$http","$q",function(e,t,o,i,r,l,a,s,c,g){var d={scope:!0,compile:function(){return{pre:function(d,u,f){var h=n(u),p=d.$eval(f.ngGrid);p.gridDim=new P({outerHeight:n(h).height(),outerWidth:n(h).width()});var m=new L(d,p,i,r,t,o,l,a,s,c,g);return d.$on("$destroy",function(){p.gridDim=null,p.selectRow=null,p.selectItem=null,p.selectAll=null,p.selectVisible=null,p.groupBy=null,p.sortBy=null,p.gridId=null,p.ngGrid=null,p.$gridScope=null,p.$gridServices=null,d.domAccessProvider.grid=null,angular.element(m.styleSheet).remove(),m.styleSheet=null}),m.init().then(function(){if("string"==typeof p.columnDefs?d.$on("$destroy",d.$parent.$watch(p.columnDefs,function(e){return e?(m.lateBoundColumns=!1,d.columns=[],m.config.columnDefs=e,m.buildColumns(),m.eventProvider.assignEvents(),r.RebuildGrid(d,m),void 0):(m.refreshDomSizes(),m.buildColumns(),void 0)},!0)):m.buildColumns(),"string"==typeof p.totalServerItems?d.$on("$destroy",d.$parent.$watch(p.totalServerItems,function(e){d.totalServerItems=angular.isDefined(e)?e:0})):d.totalServerItems=0,"string"==typeof p.data){var t=function(e){m.data=n.extend([],e),m.rowFactory.fixRowCache(),angular.forEach(m.data,function(e,n){var t=m.rowMap[n]||n;m.rowCache[t]&&m.rowCache[t].ensureEntity(e),m.rowMap[t]=n}),m.searchProvider.evalFilter(),m.configureColumnWidths(),m.refreshDomSizes(),m.config.sortInfo.fields.length>0&&(m.sortColumnsInit(),d.$emit("ngGridEventSorted",m.config.sortInfo)),d.$emit("ngGridEventData",m.gridId)};d.$on("$destroy",d.$parent.$watch(p.data,t)),d.$on("$destroy",d.$parent.$watch(p.data+".length",function(){t(d.$eval(p.data)),d.adjustScrollTop(m.$viewport.scrollTop(),!0)}))}return m.footerController=new D(d,m),u.addClass("ngGrid").addClass(""+m.gridId),p.enableHighlighting||u.addClass("unselectable"),p.jqueryUITheme&&u.addClass("ui-widget"),u.append(e(o.get("gridTemplate.html"))(d)),r.AssignGridContainers(d,u,m),m.eventProvider=new $(m,d,r,a),p.selectRow=function(e,n){m.rowCache[e]&&(m.rowCache[e].clone&&m.rowCache[e].clone.setSelection(n?!0:!1),m.rowCache[e].setSelection(n?!0:!1))},p.selectItem=function(e,n){p.selectRow(m.rowMap[e],n)},p.selectAll=function(e){d.toggleSelectAll(e)},p.selectVisible=function(e){d.toggleSelectAll(e,!0)},p.groupBy=function(e){if(e)d.groupBy(d.columns.filter(function(n){return n.field===e})[0]);else{var t=n.extend(!0,[],d.configGroups);angular.forEach(t,d.groupBy)}},p.sortBy=function(e){var n=d.columns.filter(function(n){return n.field===e})[0];n&&n.sort()},p.gridId=m.gridId,p.ngGrid=m,p.$gridScope=d,p.$gridServices={SortService:i,DomUtilityService:r,UtilityService:l},d.$on("$destroy",d.$on("ngGridEventDigestGrid",function(){r.digest(d.$parent)})),d.$on("$destroy",d.$on("ngGridEventDigestGridParent",function(){r.digest(d.$parent)})),d.$evalAsync(function(){d.adjustScrollLeft(0)}),angular.forEach(p.plugins,function(e){"function"==typeof e&&(e=new e);var n=d.$new();e.init(n,m,p.$gridServices),p.plugins[l.getInstanceType(e)]=e,d.$on("$destroy",function(){n.$destroy()})}),"function"==typeof p.init&&p.init(m,d),null})}}}};return d}]),b.directive("ngHeaderCell",["$compile",function(e){var n={scope:!1,compile:function(){return{pre:function(n,t){t.append(e(n.col.headerCellTemplate)(n))}}}};return n}]),b.directive("ngHeaderRow",["$compile","$templateCache",function(e,n){var t={scope:!1,compile:function(){return{pre:function(t,o){0===o.children().length&&o.append(e(n.get(t.gridId+"headerRowTemplate.html"))(t))}}}};return t}]),b.directive("ngInput",[function(){return{require:"ngModel",link:function(e,n,t,o){function i(t){switch(t.keyCode){case 37:case 38:case 39:case 40:t.stopPropagation();break;case 27:e.$$phase||e.$apply(function(){o.$setViewValue(a),n.blur()});break;case 13:(e.enableCellEditOnFocus&&e.totalFilteredItemsLength()-1>e.row.rowIndex&&e.row.rowIndex>0||e.col.enableCellEdit)&&n.blur()}return!0}function r(e){e.stopPropagation()}function l(e){e.stopPropagation()}var a,s=e.$watch("ngModel",function(){a=o.$modelValue,s()});n.bind("keydown",i),n.bind("click",r),n.bind("mousedown",l),n.on("$destroy",function(){n.off("keydown",i),n.off("click",r),n.off("mousedown",l)}),e.$on("$destroy",e.$on("ngGridEventStartCellEdit",function(){n.focus(),n.select()})),angular.element(n).bind("blur",function(){e.$emit("ngGridEventEndCellEdit")})}}}]),b.directive("ngRow",["$compile","$domUtilityService","$templateCache",function(e,n,t){var o={scope:!1,compile:function(){return{pre:function(o,i){if(o.row.elm=i,o.row.clone&&(o.row.clone.elm=i),o.row.isAggRow){var r=t.get(o.gridId+"aggregateTemplate.html");r=o.row.aggLabelFilter?r.replace(g,"| "+o.row.aggLabelFilter):r.replace(g,""),i.append(e(r)(o))}else i.append(e(t.get(o.gridId+"rowTemplate.html"))(o));o.$on("$destroy",o.$on("ngGridEventDigestRow",function(){n.digest(o)}))}}}};return o}]),b.directive("ngViewport",[function(){return function(e,n){function t(n){var t=n.target.scrollLeft,o=n.target.scrollTop;return e.$headerContainer&&e.$headerContainer.scrollLeft(t),e.adjustScrollLeft(t),e.adjustScrollTop(o),e.forceSyncScrolling?s():(clearTimeout(l),l=setTimeout(s,150)),r=t,a=o,i=!1,!0}function o(){return i=!0,n.focus&&n.focus(),!0}var i,r,l,a=0,s=function(){e.$root.$$phase||e.$digest()};n.bind("scroll",t),n.bind("mousewheel DOMMouseScroll",o),n.on("$destroy",function(){n.off("scroll",t),n.off("mousewheel DOMMouseScroll",o)}),e.enableCellSelection||e.domAccessProvider.selectionHandlers(e,n)}}]),e.ngGrid.i18n.da={ngAggregateLabel:"artikler",ngGroupPanelDescription:"Grupér rækker udfra en kolonne ved at trække dens overskift hertil.",ngSearchPlaceHolder:"Søg...",ngMenuText:"Vælg kolonner:",ngShowingItemsLabel:"Viste rækker:",ngTotalItemsLabel:"Rækker totalt:",ngSelectedItemsLabel:"Valgte rækker:",ngPageSizeLabel:"Side størrelse:",ngPagerFirstTitle:"Første side",ngPagerNextTitle:"Næste side",ngPagerPrevTitle:"Forrige side",ngPagerLastTitle:"Sidste side"},e.ngGrid.i18n.de={ngAggregateLabel:"eintrag",ngGroupPanelDescription:"Ziehen Sie eine Spaltenüberschrift hierhin um nach dieser Spalte zu gruppieren.",ngSearchPlaceHolder:"Suche...",ngMenuText:"Spalten auswählen:",ngShowingItemsLabel:"Zeige Einträge:",ngTotalItemsLabel:"Einträge gesamt:",ngSelectedItemsLabel:"Ausgewählte Einträge:",ngPageSizeLabel:"Einträge pro Seite:",ngPagerFirstTitle:"Erste Seite",ngPagerNextTitle:"Nächste Seite",ngPagerPrevTitle:"Vorherige Seite",ngPagerLastTitle:"Letzte Seite"},e.ngGrid.i18n.en={ngAggregateLabel:"items",ngGroupPanelDescription:"Drag a column header here and drop it to group by that column.",ngSearchPlaceHolder:"Search...",ngMenuText:"Choose Columns:",ngShowingItemsLabel:"Showing Items:",ngTotalItemsLabel:"Total Items:",ngSelectedItemsLabel:"Selected Items:",ngPageSizeLabel:"Page Size:",ngPagerFirstTitle:"First Page",ngPagerNextTitle:"Next Page",ngPagerPrevTitle:"Previous Page",ngPagerLastTitle:"Last Page"},e.ngGrid.i18n.es={ngAggregateLabel:"Artículos",ngGroupPanelDescription:"Arrastre un encabezado de columna aquí y soltarlo para agrupar por esa columna.",ngSearchPlaceHolder:"Buscar...",ngMenuText:"Elegir columnas:",ngShowingItemsLabel:"Artículos Mostrando:",ngTotalItemsLabel:"Artículos Totales:",ngSelectedItemsLabel:"Artículos Seleccionados:",ngPageSizeLabel:"Tamaño de Página:",ngPagerFirstTitle:"Primera Página",ngPagerNextTitle:"Página Siguiente",ngPagerPrevTitle:"Página Anterior",ngPagerLastTitle:"Última Página"},e.ngGrid.i18n.fa={ngAggregateLabel:"موردها",ngGroupPanelDescription:"یک عنوان ستون اینجا را بردار و به گروهی از آن ستون بیانداز.",ngSearchPlaceHolder:"جستجو...",ngMenuText:"انتخاب ستون‌ها:",ngShowingItemsLabel:"نمایش موردها:",ngTotalItemsLabel:"همهٔ موردها:",ngSelectedItemsLabel:"موردهای انتخاب‌شده:",ngPageSizeLabel:"اندازهٔ صفحه:",ngPagerFirstTitle:"صفحهٔ اول",ngPagerNextTitle:"صفحهٔ بعد",ngPagerPrevTitle:"صفحهٔ قبل",ngPagerLastTitle:"آخرین صفحه"},e.ngGrid.i18n.fr={ngAggregateLabel:"articles",ngGroupPanelDescription:"Faites glisser un en-tête de colonne ici et déposez-le vers un groupe par cette colonne.",ngSearchPlaceHolder:"Recherche...",ngMenuText:"Choisir des colonnes:",ngShowingItemsLabel:"Articles Affichage des:",ngTotalItemsLabel:"Nombre total d'articles:",ngSelectedItemsLabel:"Éléments Articles:",ngPageSizeLabel:"Taille de page:",ngPagerFirstTitle:"Première page",ngPagerNextTitle:"Page Suivante",ngPagerPrevTitle:"Page précédente",ngPagerLastTitle:"Dernière page"},e.ngGrid.i18n.nl={ngAggregateLabel:"items",ngGroupPanelDescription:"Sleep hier een kolomkop om op te groeperen.",ngSearchPlaceHolder:"Zoeken...",ngMenuText:"Kies kolommen:",ngShowingItemsLabel:"Toon items:",ngTotalItemsLabel:"Totaal items:",ngSelectedItemsLabel:"Geselecteerde items:",ngPageSizeLabel:"Pagina grootte:, ",ngPagerFirstTitle:"Eerste pagina",ngPagerNextTitle:"Volgende pagina",ngPagerPrevTitle:"Vorige pagina",ngPagerLastTitle:"Laatste pagina"},e.ngGrid.i18n["pt-br"]={ngAggregateLabel:"itens",ngGroupPanelDescription:"Arraste e solte uma coluna aqui para agrupar por essa coluna",ngSearchPlaceHolder:"Procurar...",ngMenuText:"Selecione as colunas:",ngShowingItemsLabel:"Mostrando os Itens:",ngTotalItemsLabel:"Total de Itens:",ngSelectedItemsLabel:"Items Selecionados:",ngPageSizeLabel:"Tamanho da Página:",ngPagerFirstTitle:"Primeira Página",ngPagerNextTitle:"Próxima Página",ngPagerPrevTitle:"Página Anterior",ngPagerLastTitle:"Última Página"},e.ngGrid.i18n.ru={ngAggregateLabel:"записи",ngGroupPanelDescription:"Перетащите сюда заголовок колонки для группировки по этой колонке.",ngSearchPlaceHolder:"Искать...",ngMenuText:"Выберите столбцы:",ngShowingItemsLabel:"Показаны записи:",ngTotalItemsLabel:"Всего записей:",ngSelectedItemsLabel:"Выбранные записи:",ngPageSizeLabel:"Строк на странице:",ngPagerFirstTitle:"Первая страница",ngPagerNextTitle:"Следующая страница",ngPagerPrevTitle:"Предыдущая страница",ngPagerLastTitle:"Последняя страница"},e.ngGrid.i18n["zh-cn"]={ngAggregateLabel:"条目",ngGroupPanelDescription:"拖曳表头到此处以进行分组",ngSearchPlaceHolder:"搜索...",ngMenuText:"数据分组与选择列：",ngShowingItemsLabel:"当前显示条目：",ngTotalItemsLabel:"条目总数：",ngSelectedItemsLabel:"选中条目：",ngPageSizeLabel:"每页显示数：",ngPagerFirstTitle:"回到首页",ngPagerNextTitle:"下一页",ngPagerPrevTitle:"上一页",ngPagerLastTitle:"前往尾页"},e.ngGrid.i18n["zh-tw"]={ngAggregateLabel:"筆",ngGroupPanelDescription:"拖拉表頭到此處以進行分組",ngSearchPlaceHolder:"搜尋...",ngMenuText:"選擇欄位：",ngShowingItemsLabel:"目前顯示筆數：",ngTotalItemsLabel:"總筆數：",ngSelectedItemsLabel:"選取筆數：",ngPageSizeLabel:"每頁顯示：",ngPagerFirstTitle:"第一頁",ngPagerNextTitle:"下一頁",ngPagerPrevTitle:"上一頁",ngPagerLastTitle:"最後頁"},angular.module("ngGrid").run(["$templateCache",function(e){e.put("aggregateTemplate.html",'<div ng-click="row.toggleExpand()" ng-style="rowStyle(row)" class="ngAggregate">\r\n    <span class="ngAggregateText">{{row.label CUSTOM_FILTERS}} ({{row.totalChildren()}} {{AggItemsLabel}})</span>\r\n    <div class="{{row.aggClass()}}"></div>\r\n</div>\r\n'),e.put("cellEditTemplate.html",'<div ng-cell-has-focus ng-dblclick="CELL_EDITABLE_CONDITION && editCell()">\r\n	<div ng-edit-cell-if="!(isFocused && CELL_EDITABLE_CONDITION)">	\r\n		DISPLAY_CELL_TEMPLATE\r\n	</div>\r\n	<div ng-edit-cell-if="isFocused && CELL_EDITABLE_CONDITION">\r\n		EDITABLE_CELL_TEMPLATE\r\n	</div>\r\n</div>\r\n'),e.put("cellTemplate.html",'<div class="ngCellText" ng-class="col.colIndex()"><span ng-cell-text>{{COL_FIELD CUSTOM_FILTERS}}</span></div>'),e.put("checkboxCellTemplate.html",'<div class="ngSelectionCell"><input tabindex="-1" class="ngSelectionCheckbox" type="checkbox" ng-checked="row.selected" /></div>'),e.put("checkboxHeaderTemplate.html",'<input class="ngSelectionHeader" type="checkbox" ng-show="multiSelect" ng-model="allSelected" ng-change="toggleSelectAll(allSelected, true)"/>'),e.put("editableCellTemplate.html",'<input ng-class="\'colt\' + col.index" ng-input="COL_FIELD" ng-model="COL_FIELD" />'),e.put("footerTemplate.html",'<div ng-show="showFooter" class="ngFooterPanel" ng-class="{\'ui-widget-content\': jqueryUITheme, \'ui-corner-bottom\': jqueryUITheme}" ng-style="footerStyle()">\r\n    <div class="ngTotalSelectContainer" >\r\n        <div class="ngFooterTotalItems" ng-class="{\'ngNoMultiSelect\': !multiSelect}" >\r\n            <span class="ngLabel">{{i18n.ngTotalItemsLabel}} {{maxRows()}}</span><span ng-show="filterText.length > 0" class="ngLabel">({{i18n.ngShowingItemsLabel}} {{totalFilteredItemsLength()}})</span>\r\n        </div>\r\n        <div class="ngFooterSelectedItems" ng-show="multiSelect">\r\n            <span class="ngLabel">{{i18n.ngSelectedItemsLabel}} {{selectedItems.length}}</span>\r\n        </div>\r\n    </div>\r\n    <div class="ngPagerContainer" style="float: right; margin-top: 10px;" ng-show="enablePaging" ng-class="{\'ngNoMultiSelect\': !multiSelect}">\r\n        <div style="float:left; margin-right: 10px;" class="ngRowCountPicker">\r\n            <span style="float: left; margin-top: 3px;" class="ngLabel">{{i18n.ngPageSizeLabel}}</span>\r\n            <select style="float: left;height: 27px; width: 100px" ng-model="pagingOptions.pageSize" >\r\n                <option ng-repeat="size in pagingOptions.pageSizes">{{size}}</option>\r\n            </select>\r\n        </div>\r\n        <div style="float:left; margin-right: 10px; line-height:25px;" class="ngPagerControl" style="float: left; min-width: 135px;">\r\n            <button type="button" class="ngPagerButton" ng-click="pageToFirst()" ng-disabled="cantPageBackward()" title="{{i18n.ngPagerFirstTitle}}"><div class="ngPagerFirstTriangle"><div class="ngPagerFirstBar"></div></div></button>\r\n            <button type="button" class="ngPagerButton" ng-click="pageBackward()" ng-disabled="cantPageBackward()" title="{{i18n.ngPagerPrevTitle}}"><div class="ngPagerFirstTriangle ngPagerPrevTriangle"></div></button>\r\n            <input class="ngPagerCurrent" min="1" max="{{currentMaxPages}}" type="number" style="width:50px; height: 24px; margin-top: 1px; padding: 0 4px;" ng-model="pagingOptions.currentPage"/>\r\n            <span class="ngGridMaxPagesNumber" ng-show="maxPages() > 0">/ {{maxPages()}}</span>\r\n            <button type="button" class="ngPagerButton" ng-click="pageForward()" ng-disabled="cantPageForward()" title="{{i18n.ngPagerNextTitle}}"><div class="ngPagerLastTriangle ngPagerNextTriangle"></div></button>\r\n            <button type="button" class="ngPagerButton" ng-click="pageToLast()" ng-disabled="cantPageToLast()" title="{{i18n.ngPagerLastTitle}}"><div class="ngPagerLastTriangle"><div class="ngPagerLastBar"></div></div></button>\r\n        </div>\r\n    </div>\r\n</div>\r\n'),e.put("gridTemplate.html",'<div class="ngTopPanel" ng-class="{\'ui-widget-header\':jqueryUITheme, \'ui-corner-top\': jqueryUITheme}" ng-style="topPanelStyle()">\r\n    <div class="ngGroupPanel" ng-show="showGroupPanel()" ng-style="groupPanelStyle()">\r\n        <div class="ngGroupPanelDescription" ng-show="configGroups.length == 0">{{i18n.ngGroupPanelDescription}}</div>\r\n        <ul ng-show="configGroups.length > 0" class="ngGroupList">\r\n            <li class="ngGroupItem" ng-repeat="group in configGroups">\r\n                <span class="ngGroupElement">\r\n                    <span class="ngGroupName">{{group.displayName}}\r\n                        <span ng-click="removeGroup($index)" class="ngRemoveGroup">x</span>\r\n                    </span>\r\n                    <span ng-hide="$last" class="ngGroupArrow"></span>\r\n                </span>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n    <div class="ngHeaderContainer" ng-style="headerStyle()">\r\n        <div ng-header-row class="ngHeaderScroller" ng-style="headerScrollerStyle()"></div>\r\n    </div>\r\n    <div ng-grid-menu></div>\r\n</div>\r\n<div class="ngViewport" unselectable="on" ng-viewport ng-class="{\'ui-widget-content\': jqueryUITheme}" ng-style="viewportStyle()">\r\n    <div class="ngCanvas" ng-style="canvasStyle()">\r\n        <div ng-style="rowStyle(row)" ng-repeat="row in renderedRows" ng-click="row.toggleSelected($event)" ng-class="row.alternatingRowClass()" ng-row></div>\r\n    </div>\r\n</div>\r\n<div ng-grid-footer></div>\r\n'),e.put("headerCellTemplate.html",'<div class="ngHeaderSortColumn {{col.headerClass}}" ng-style="{\'cursor\': col.cursor}" ng-class="{ \'ngSorted\': !col.noSortVisible() }">\r\n    <div ng-click="col.sort($event)" ng-class="\'colt\' + col.index" class="ngHeaderText">{{col.displayName}}</div>\r\n    <div class="ngSortButtonDown" ng-click="col.sort($event)" ng-show="col.showSortButtonDown()"></div>\r\n    <div class="ngSortButtonUp" ng-click="col.sort($event)" ng-show="col.showSortButtonUp()"></div>\r\n    <div class="ngSortPriority">{{col.sortPriority}}</div>\r\n    <div ng-class="{ ngPinnedIcon: col.pinned, ngUnPinnedIcon: !col.pinned }" ng-click="togglePin(col)" ng-show="col.pinnable"></div>\r\n</div>\r\n<div ng-show="col.resizable" class="ngHeaderGrip" ng-click="col.gripClick($event)" ng-mousedown="col.gripOnMouseDown($event)"></div>\r\n'),e.put("headerRowTemplate.html",'<div ng-style="{ height: col.headerRowHeight }" ng-repeat="col in renderedColumns" ng-class="col.colIndex()" class="ngHeaderCell">\r\n	<div class="ngVerticalBar" ng-style="{height: col.headerRowHeight}" ng-class="{ ngVerticalBarVisible: !$last }">&nbsp;</div>\r\n	<div ng-header-cell></div>\r\n</div>'),e.put("menuTemplate.html",'<div ng-show="showColumnMenu || showFilter"  class="ngHeaderButton" ng-click="toggleShowMenu()">\r\n    <div class="ngHeaderButtonArrow"></div>\r\n</div>\r\n<div ng-show="showMenu" class="ngColMenu">\r\n    <div ng-show="showFilter">\r\n        <input placeholder="{{i18n.ngSearchPlaceHolder}}" type="text" ng-model="filterText"/>\r\n    </div>\r\n    <div ng-show="showColumnMenu">\r\n        <span class="ngMenuText">{{i18n.ngMenuText}}</span>\r\n        <ul class="ngColList">\r\n            <li class="ngColListItem" ng-repeat="col in columns | ngColumns">\r\n                <label><input ng-disabled="col.pinned" type="checkbox" class="ngColListCheckbox" ng-model="col.visible"/>{{col.displayName}}</label>\r\n				<a title="Group By" ng-class="col.groupedByClass()" ng-show="col.groupable && col.visible" ng-click="groupBy(col)"></a>\r\n				<span class="ngGroupingNumber" ng-show="col.groupIndex > 0">{{col.groupIndex}}</span>          \r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>'),e.put("rowTemplate.html",'<div ng-style="{ \'cursor\': row.cursor }" ng-repeat="col in renderedColumns" ng-class="col.colIndex()" class="ngCell {{col.cellClass}}">\r\n	<div class="ngVerticalBar" ng-style="{height: rowHeight}" ng-class="{ ngVerticalBarVisible: !$last }">&nbsp;</div>\r\n	<div ng-cell></div>\r\n</div>')
}])})(window,jQuery);
/*
 angular-slider v0.3.2 
 (c) 2013-2014 Venturocket, Inc. http://github.com/Venturocket 
 License: MIT 
*/
window.AngularSlider=function(a,b,c){function d(a){n.cssText=a}function e(a,b){return typeof a===b}function f(){j.inputtypes=function(a){for(var d,e,f,g=0,h=a.length;h>g;g++)o.setAttribute("type",e=a[g]),d="text"!==o.type,d&&(o.value=p,o.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(e)&&o.style.WebkitAppearance!==c?(k.appendChild(o),f=b.defaultView,d=f.getComputedStyle&&"textfield"!==f.getComputedStyle(o,null).WebkitAppearance&&0!==o.offsetHeight,k.removeChild(o)):/^(search|tel)$/.test(e)||(d=/^(url|email)$/.test(e)?o.checkValidity&&o.checkValidity()===!1:o.value!=p)),r[a[g]]=!!d;return r}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var g,h,i="2.7.1",j={},k=b.documentElement,l="modernizr",m=b.createElement(l),n=m.style,o=b.createElement("input"),p=":)",q=({}.toString,{}),r={},s=[],t=s.slice,u={}.hasOwnProperty;h=e(u,"undefined")||e(u.call,"undefined")?function(a,b){return b in a&&e(a.constructor.prototype[b],"undefined")}:function(a,b){return u.call(a,b)},Function.prototype.bind||(Function.prototype.bind=function(a){var b=this;if("function"!=typeof b)throw new TypeError;var c=t.call(arguments,1),d=function(){if(this instanceof d){var e=function(){};e.prototype=b.prototype;var f=new e,g=b.apply(f,c.concat(t.call(arguments)));return Object(g)===g?g:f}return b.apply(a,c.concat(t.call(arguments)))};return d});for(var v in q)h(q,v)&&(g=v.toLowerCase(),j[g]=q[v](),s.push((j[g]?"":"no-")+g));return j.input||f(),j.addTest=function(a,b){if("object"==typeof a)for(var d in a)h(a,d)&&j.addTest(d,a[d]);else{if(a=a.toLowerCase(),j[a]!==c)return j;b="function"==typeof b?b():b,"undefined"!=typeof enableClasses&&enableClasses&&(k.className+=" "+(b?"":"no-")+a),j[a]=b}return j},d(""),m=o=null,j._version=i,j}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==q.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=r.shift();s=1,a?a.t?o(function(){("c"==a.t?m.injectCss:m.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):s=0}function i(a,c,d,e,f,i,j){function k(b){if(!n&&g(l.readyState)&&(t.r=n=1,!s&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&o(function(){v.removeChild(l)},50);for(var d in A[c])A[c].hasOwnProperty(d)&&A[c][d].onload()}}var j=j||m.errorTimeout,l=b.createElement(a),n=0,q=0,t={t:d,s:c,e:f,a:i,x:j};1===A[c]&&(q=1,A[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,q)},r.splice(e,0,t),"img"!=a&&(q||2===A[c]?(v.insertBefore(l,u?null:p),o(k,j)):A[c].push(l))}function j(a,b,c,d,f){return s=0,b=b||"j",e(a)?i("c"==b?x:w,a,b,this.i++,c,d,f):(r.splice(this.i++,0,a),1==r.length&&h()),this}function k(){var a=m;return a.loader={load:j,i:0},a}var l,m,n=b.documentElement,o=a.setTimeout,p=b.getElementsByTagName("script")[0],q={}.toString,r=[],s=0,t="MozAppearance"in n.style,u=t&&!!b.createRange().compareNode,v=u?n:p.parentNode,n=a.opera&&"[object Opera]"==q.call(a.opera),n=!!b.attachEvent&&!n,w=t?"object":n?"script":"img",x=n?"script":w,y=Array.isArray||function(a){return"[object Array]"==q.call(a)},z=[],A={},B={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}};m=function(a){function b(a){var b,c,d,a=a.split("!"),e=z.length,f=a.pop(),g=a.length,f={url:f,origUrl:f,prefixes:a};for(c=0;g>c;c++)d=a[c].split("="),(b=B[d.shift()])&&(f=b(f,d));for(c=0;e>c;c++)f=z[c](f);return f}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(A[i.url]?i.noexec=!0:A[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),A[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(l=function(){var a=[].slice.call(arguments);m.apply(this,a),n()}),g(a,l,b,0,j);else if(Object(a)===a)for(i in h=function(){var b,c=0;for(b in a)a.hasOwnProperty(b)&&c++;return c}(),a)a.hasOwnProperty(i)&&(!c&&!--h&&(d(l)?l=function(){var a=[].slice.call(arguments);m.apply(this,a),n()}:l[i]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),n()}}(m[i])),g(a[i],l,b,i,j))}else!c&&n()}var h,i,j=!!a.test,k=a.load||a.both,l=a.callback||f,m=l,n=a.complete||f;c(j?a.yep:a.nope,!!k),k&&c(k)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(y(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):y(j)?m(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},m.addPrefix=function(a,b){B[a]=b},m.addFilter=function(a){z.push(a)},m.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",l=function(){b.removeEventListener("DOMContentLoaded",l,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k,l,n=b.createElement("script"),e=e||m.errorTimeout;n.src=a;for(l in d)n.setAttribute(l,d[l]);c=j?h:c||f,n.onreadystatechange=n.onload=function(){!k&&g(n.readyState)&&(k=1,c(),n.onload=n.onreadystatechange=null)},o(function(){k||(k=1,c(1))},e),i?n.onload():p.parentNode.insertBefore(n,p)},a.yepnope.injectCss=function(a,c,d,e,g,i){var j,e=b.createElement("link"),c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(p.parentNode.insertBefore(e,p),o(c,0))}}(this,document),AngularSlider.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},angular.module("vr.directives.slider",["ngTouch"]).directive("slider",["$timeout","$document","$interpolate","$swipe",function(a,b,c,d){function e(a){return angular.element(a)}function f(a){return""+a+"px"}function g(a,b){return a.css({opacity:b})}function h(a){return g(a,0)}function i(a){return g(a,1)}function j(a,b){return a.css({left:b})}function k(a){var b=parseFloat(a.css("width"));return isNaN(b)?a[0].offsetWidth:b}function l(a){return k(a)/2}function m(a){try{return a.offset().left}catch(b){}return a[0].getBoundingClientRect().left}function n(a,b){return m(a)>m(b)?m(a)-m(b)-k(b):m(b)-m(a)-k(a)}function o(a,b){return a.attr("ng-bind-template",b)}function p(a,b,c,d,e){(angular.isUndefined(b)||!b)&&(b=0),(angular.isUndefined(c)||!c||0==c)&&(c=1/Math.pow(10,b)),(angular.isUndefined(d)||!d)&&(d=0),(angular.isUndefined(a)||!a)&&(a=0);var f=(a-d)%c,g=f>c/2?a+c-f:a-f;return(angular.isUndefined(e)||!e)&&(e=g),g=Math.min(Math.max(g,d),e),parseFloat(g.toFixed(b))}function q(a,b){return Math.floor(a/b+.5)*b}function r(a,b){return a>0&&!isNaN(b)?Math.ceil(b/a)*a:b}function s(a){return u+" "+a+" "+v}var t=3,u=c.startSymbol(),v=c.endSymbol();return{restrict:"EA",require:"ngModel",scope:{floor:"@",ceiling:"@",step:"@",stepWidth:"@",precision:"@",buffer:"@",stickiness:"@",showSteps:"@",ngModel:"=",ngModelRange:"=",ngDisabled:"=",ngChange:"&",translateFn:"&",translateRangeFn:"&",translateCombinedFn:"&",scaleFn:"&",inverseScaleFn:"&"},template:"<span class='bar full'></span><span class='bar steps'><span class='bubble step' ng-repeat='step in stepBubbles()'></span></span><span class='bar selection'></span><span class='bar unselected low'></span><span class='bar unselected high'></span><span class='pointer low'></span><span class='pointer high'></span><span class='bubble low'></span><span class='bubble high'></span><span class='bubble middle'></span><span class='bubble selection'></span><span class='bubble limit floor'></span><span class='bubble limit ceiling'></span><input type='range' class='input low' /><input type='range' class='input high' /><input type='range' class='input selection' />",compile:function(c,g){function u(a){a||(a=c);var b=[];return angular.forEach(a.children(),function(a){b.push(e(a))}),b}function v(a,b,c){return{fullBar:a[0],stepBubs:a[1],selBar:b?a[2]:null,unSelBarLow:b?a[3]:null,unSelBarHigh:b?a[4]:null,minPtr:b?a[5]:a[2],maxPtr:b?a[6]:null,lowBub:b?a[7]:a[3],highBub:b?a[8]:null,cmbBub:b?a[9]:null,selBub:b?a[10]:null,flrBub:b?a[11]:a[4],ceilBub:b?a[12]:a[5],minInput:c?b?a[13]:a[6]:null,maxInput:c?b?a[14]:null:null,selInput:c?b?a[15]:null:null}}var w=g.showSteps,x=g.stepWidth?"stepWidth":"step",y=null!=g.ngModelRange,z={},A="ngModel",B="ngModelRange",C="selectBar",D=["floor","ceiling","stickiness",A];if(z=function(){for(var a=u(),b=[],c=0,d=a.length;d>c;c++){var f=a[c];f=e(f),f.css({"white-space":"nowrap",position:"absolute",display:"block","z-index":1}),b.push(f)}return b}(),z=v(z,!0,!0),g.translateFn&&g.$set("translateFn",""+g.translateFn+"(value)"),g.translateRangeFn&&g.$set("translateRangeFnFn",""+g.translateRangeFn+"(low,high)"),g.translateCombinedFn&&g.$set("translateCombinedFnFn",""+g.translateCombinedFn+"(low,high)"),g.scaleFn&&g.$set("scaleFn",""+g.scaleFn+"(value)"),g.inverseScaleFn&&g.$set("inverseScaleFn",""+g.inverseScaleFn+"(value)"),z.fullBar.css({left:0,right:0}),AngularSlider.inputtypes.range){var E={position:"absolute",margin:0,padding:0,opacity:0,height:"100%"};z.minInput.attr("step",s("inputSteps()")),z.minInput.attr("min",s("floor")),z.minInput.css(E),z.minInput.css("left",0),y?(z.minInput.attr("max",s("ngModelRange - (buffer / 2)")),z.maxInput.attr("step",s("inputSteps()")),z.maxInput.attr("min",s("ngModel + (buffer / 2)")),z.maxInput.attr("max",s("ceiling")),z.maxInput.css(E),z.selInput.attr("step",s("inputSteps()")),z.selInput.attr("min",s("ngModel")),z.selInput.attr("max",s("ngModelRange")),z.selInput.css(E)):(z.minInput.attr("max",s("ceiling")),z.minInput.css({width:"100%"}),z.maxInput.remove(),z.selInput.remove())}else z.minInput.remove(),z.maxInput.remove(),z.selInput.remove();if(o(z.stepBubs.children().eq(0),s("translation(step)")),o(z.ceilBub,s("translation(ceiling)")),o(z.flrBub,s("translation(floor)")),o(z.selBub,s("rangeTranslation("+A+","+B+")")),o(z.lowBub,s("translation("+A+")")),o(z.highBub,s("translation("+B+")")),o(z.cmbBub,s("combinedTranslation("+A+","+B+")")),y)D.push(B),D.unshift("buffer");else for(var F=[z.selBar,z.unSelBarLow,z.unSelBarHigh,z.maxPtr,z.selBub,z.highBub,z.cmbBub],G=0,H=F.length;H>G;G++)c=F[G],c.remove();return D.unshift("precision",x),w||z.stepBubs.children().remove(),{post:function(c,g,o,s){function w(){if(angular.forEach(D,function(a){c[a]=parseFloat(c[a]),a==A||a==B?c[a]=p(c[a],c.precision,c[x],c.floor,c.ceiling):"buffer"==a?c.buffer=!c.buffer||isNaN(c.buffer)||c.buffer<0?0:r(c[x],c.buffer):"precision"==a?c.precision=!c.precision||isNaN(c.precision)?0:parseInt(c.precision):a==x?c[x]=!c[x]||isNaN(c[x])?1/Math.pow(10,c.precision):parseFloat(c[x].toFixed(c.precision)):"stickiness"==a&&(isNaN(c.stickiness)?c.stickiness=t:c.stickiness<1&&(c.stickiness=1)),c.decodedValues[a]=c.decodeRef(a)}),y){if(c[B]<c[A]){var a=c[B];c[B]=c[A],c[A]=a}var b=p(c[B]-c[A],c.precision,c[x]);if(c.buffer>0&&b<c.buffer){var d=c.encode((c.decodedValues[A]+c.decodedValues[B])/2);c[A]=p(d-c.buffer/2,c.precision,c[x],c.floor,c.ceiling),c[B]=c[A]+c.buffer,c[B]>c.ceiling&&(c[B]=c.ceiling,c[A]=c.ceiling-c.buffer)}}F=k(E.fullBar),G=l(E.minPtr),H=m(E.fullBar),I=H+F-k(E.minPtr),J=I-H,K=c.floor,L=c.decodedValues.floor,M=c.ceiling,N=c.decodedValues.ceiling,O=M-K,P=N-L,Q=q(P,c.decodedValues[x])}function z(){function a(a){return 100*((a-H)/J)}function o(b){return a(b)/100*P+L}function r(a){return c.encode(o(a))}function t(a){var b=a-L;return O==P?b=q(b,c.decodedValues[x])/Q:b/=P,100*b}function u(a){return t(c.decode(a))}function v(a){return f(a*J/100)}function z(a){return Math.min(Math.max(a,H),I)}function D(b){return j(b,v(a(z(m(b)))))}function N(a,b,d){var e=a>0?1:-1;return b=b?b:100,d?(Math.sin(Math.min(Math.abs(a/b),1)*Math.PI-Math.PI/2)+1)*e*b/6:e*Math.pow(Math.min(Math.abs(2*(a/b)),1),c.stickiness)*b/2}function U(){var b=t(c.decodedValues[A]),d=u(c[A]+c[x])-b,e=b-u(c[A]-c[x]),f=u(c[A]+c.buffer)-b,g=a(G+H),h=b+N(R,R>0?d:e);if(j(E.minPtr,v(h)),j(E.lowBub,v(a(m(E.minPtr)-l(E.lowBub)+G))),y){var i=t(c.decodedValues[B]),k=u(c[B]+c[x])-i,n=i-u(c[B]-c[x]),o=i-u(c[B]-c.buffer),p=i+N(S,S>0?k:n);if(h>i-o&&(h=b+N(R,f,!0),j(E.minPtr,v(h)),j(E.lowBub,v(a(m(E.minPtr)-l(E.lowBub)+G)))),b+f>p&&(p=i+N(S,o,!0)),j(E.maxPtr,v(p)),j(E.highBub,v(a(m(E.maxPtr)-l(E.highBub)+G))),j(E.selBar,v(h+g)),E.selBar.css({width:v(p-h)}),j(E.selBub,v((h+p)/2-a(l(E.selBub)+H)+g)),j(E.cmbBub,v((h+p)/2-a(l(E.cmbBub)+H)+g)),E.unSelBarLow.css({left:0,width:v(h+g)}),j(E.unSelBarHigh,v(p+g)),E.unSelBarHigh.css({right:0}),AngularSlider.inputtypes.range){var q=2*g,r=h+f/2,s=100-r;r+=q;var w=p-o/2,z=h+q,C=p-h-q;h+q>=p&&(z=h,C=p+q-h),E.minInput.css({width:v(w)}),E.maxInput.css({left:v(r),width:v(s)}),E.selInput.css({left:v(z),width:v(C)})}}}function V(){var a=E.lowBub;D(E.lowBub),y&&(D(E.highBub),D(E.selBub),n(E.lowBub,E.highBub)<10?(h(E.lowBub),h(E.highBub),i(E.cmbBub),D(E.cmbBub),a=E.cmbBub):(i(E.lowBub),i(E.highBub),h(E.cmbBub),a=E.highBub)),n(E.flrBub,E.lowBub)<5?h(E.flrBub):y?n(E.flrBub,a)<5?h(E.flrBub):i(E.flrBub):i(E.flrBub),n(E.lowBub,E.ceilBub)<5?h(E.ceilBub):y?n(a,E.ceilBub)<5?h(E.ceilBub):i(E.ceilBub):i(E.ceilBub)}function W(){R=0,S=0,bb&&(U(),V(),bb.removeClass("active")),bb=null,cb=null,$=!1}function X(b){bb&&c.$apply(function(){var d=b.clientX||b.x;if($){var e=r(d)-_,f=r(d)+ab;K>e?(f+=K-e,e=K):f>M&&(e-=f-M,f=M);var h=u(e),i=u(f);R=h,S=i,c[A]=e=p(e,c.precision,c[x],c.floor,c.ceiling),c[B]=f=p(f,c.precision,c[x],c.floor,c.ceiling),R-=u(e),S-=u(f)}else{var j=z(d+H-m(g)-l(bb)),k=a(j),n=c.encode(L+P*k/100);if(R=k,y)if(c.buffer>0)cb===A?n>c[B]-c.buffer&&(n=c[B]-c.buffer):n<c[A]+c.buffer&&(n=c[A]+c.buffer);else if(cb===A){if(n>c[B]){c[A]=c[B],c.decodedValues[A]=c.decodeRef(A),cb=B;var o=E.minPtr;E.minPtr=E.maxPtr,E.maxPtr=o,E.maxPtr.removeClass("active").removeClass("high").addClass("low"),E.minPtr.addClass("active").removeClass("low").addClass("high")}}else if(n<c[A]){c[B]=c[A],c.decodedValues[B]=c.decodeRef(B),cb=A;var o=E.minPtr;E.minPtr=E.maxPtr,E.maxPtr=o,E.minPtr.removeClass("active").removeClass("low").addClass("high"),E.maxPtr.addClass("active").removeClass("high").addClass("low")}c[cb]=n=p(n,c.precision,c[x],c.floor,c.ceiling),c.decodedValues[cb]=c.decodeRef(cb),cb===A?(R-=u(n),S=0):(S=R-u(n),R=0)}c.ngChange&&c.ngChange(),s.$setViewValue(c[A]),U(),V()})}function Y(a,b,d){if(!c.ngDisabled||1!=c.ngDisabled){var e=a.clientX||a.x;if(bb=b,cb=d,bb.addClass("active"),cb==C){$=!0;var f=r(e);_=f-c[A],ab=c[B]-f}X(a)}}function Z(){function a(a,b,c){function f(a){Y(a,b,c)}function g(a){X(a),W()}a=e(a),d.bind(a,{start:f,move:X,end:g,cancel:W})}function c(a,b,c){a=e(a),c=angular.isUndefined(c)?a:e(c),d.bind(a,{start:function(a){Y(a,c,b)}})}function f(a){a=e(a),d.bind(a,{move:X,end:function(a){X(a),W()},cancel:W})}AngularSlider.inputtypes.range?(a(E.minInput,E.minPtr,A),y&&(a(E.maxInput,E.maxPtr,B),a(E.selInput,E.selBar,C))):(f(b),c(E.minPtr,A),c(E.lowBub,A),c(E.flrBub,A,E.minPtr),y?(c(E.maxPtr,B),c(E.highBub,B),c(E.ceilBub,B,E.maxPtr),c(E.selBar,C),c(E.selBub,C,E.selBar),c(E.unSelBarLow,A,E.minPtr),c(E.unSelBarHigh,B,E.maxPtr)):(c(E.ceilBub,A,E.minPtr),c(E.fullBar,A,E.minPtr)))}var $,_,ab,bb,cb;w(),j(E.flrBub,0),j(E.ceilBub,f(F-k(E.ceilBub))),U(),V(),T||(Z(),T=!0)}var E=v(u(g),y,AngularSlider.inputtypes.range);c.decodedValues={floor:0,ceiling:0,step:0,stepWidth:0,precision:0,buffer:0,stickiness:0,ngModel:0,ngModelRange:0},c.translation=function(a){return a=parseFloat(a).toFixed(c.precision),angular.isUndefined(o.translateFn)?""+a:c.translateFn({value:a})},c.rangeTranslation=function(a,b){return angular.isUndefined(o.translateRangeFn)?"Range: "+c.translation((b-a).toFixed(c.precision)):c.translateRangeFn({low:a,high:b})},c.combinedTranslation=function(a,b){return angular.isUndefined(o.translateCombinedFn)?c.translation(a)+" - "+c.translation(b):c.translateCombinedFn({low:a,high:b})},c.encode=function(a){return angular.isUndefined(o.scaleFn)||""==o.scaleFn?a:c.scaleFn({value:a})},c.decode=function(a){return angular.isUndefined(o.inverseScaleFn)||""==o.inverseScaleFn?a:c.inverseScaleFn({value:a})},(1!=Math.round(c.encode(c.decode(1)))||100!=Math.round(c.encode(c.decode(100))))&&console.warn("The scale and inverseScale functions are not perfect inverses: 1 = "+c.encode(c.decode(1))+"  100 = "+c.encode(c.decode(100))),c.decodeRef=function(a){return c.decode(c[a])},c.inputSteps=function(){return Math.pow(10,-1*c.precision)};for(var F=0,G=0,H=0,I=0,J=0,K=0,L=0,M=0,N=0,O=0,P=0,Q=1,R=0,S=0,T=!1,U=0;U<D.length;U++)c.$watch(D[U],function(){z()});e(window).bind("resize",function(){z()}),c.$on("refreshSlider",function(){a(function(){z()})}),a(function(){z()})}}}}}]);
/*
 AngularJS v1.3.20
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(N,f,W){'use strict';f.module("ngAnimate",["ng"]).directive("ngAnimateChildren",function(){return function(X,r,g){g=g.ngAnimateChildren;f.isString(g)&&0===g.length?r.data("$$ngAnimateChildren",!0):X.$watch(g,function(f){r.data("$$ngAnimateChildren",!!f)})}}).factory("$$animateReflow",["$$rAF","$document",function(f,r){var g=r[0].body;return function(r){return f(function(){r(g.offsetWidth)})}}]).config(["$provide","$animateProvider",function(X,r){function g(f){for(var n=0;n<f.length;n++){var g=
f[n];if(1==g.nodeType)return g}}function ba(f,n){return g(f)==g(n)}var t=f.noop,n=f.forEach,ca=r.$$selectors,aa=f.isArray,da=f.isString,ga=f.isObject,w={running:!0},u;X.decorator("$animate",["$delegate","$$q","$injector","$sniffer","$rootElement","$$asyncCallback","$rootScope","$document","$templateRequest","$$jqLite",function(O,N,M,Y,y,I,P,W,Z,Q){function R(a,c){var b=a.data("$$ngAnimateState")||{};c&&(b.running=!0,b.structural=!0,a.data("$$ngAnimateState",b));return b.disabled||b.running&&b.structural}
function D(a){var c,b=N.defer();b.promise.$$cancelFn=function(){c&&c()};P.$$postDigest(function(){c=a(function(){b.resolve()})});return b.promise}function J(a){if(ga(a))return a.tempClasses&&da(a.tempClasses)&&(a.tempClasses=a.tempClasses.split(/\s+/)),a}function S(a,c,b){b=b||{};var d={};n(b,function(e,a){n(a.split(" "),function(a){d[a]=e})});var h=Object.create(null);n((a.attr("class")||"").split(/\s+/),function(e){h[e]=!0});var f=[],k=[];n(c&&c.classes||[],function(e,a){var b=h[a],c=d[a]||{};!1===
e?(b||"addClass"==c.event)&&k.push(a):!0===e&&(b&&"removeClass"!=c.event||f.push(a))});return 0<f.length+k.length&&[f.join(" "),k.join(" ")]}function T(a){if(a){var c=[],b={};a=a.substr(1).split(".");(Y.transitions||Y.animations)&&c.push(M.get(ca[""]));for(var d=0;d<a.length;d++){var f=a[d],l=ca[f];l&&!b[f]&&(c.push(M.get(l)),b[f]=!0)}return c}}function U(a,c,b,d){function h(e,a){var b=e[a],c=e["before"+a.charAt(0).toUpperCase()+a.substr(1)];if(b||c)return"leave"==a&&(c=b,b=null),u.push({event:a,
fn:b}),fa.push({event:a,fn:c}),!0}function l(c,k,x){var E=[];n(c,function(a){a.fn&&E.push(a)});var m=0;n(E,function(c,f){var p=function(){a:{if(k){(k[f]||t)();if(++m<E.length)break a;k=null}x()}};switch(c.event){case "setClass":k.push(c.fn(a,e,A,p,d));break;case "animate":k.push(c.fn(a,b,d.from,d.to,p));break;case "addClass":k.push(c.fn(a,e||b,p,d));break;case "removeClass":k.push(c.fn(a,A||b,p,d));break;default:k.push(c.fn(a,p,d))}});k&&0===k.length&&x()}var k=a[0];if(k){d&&(d.to=d.to||{},d.from=
d.from||{});var e,A;aa(b)&&(e=b[0],A=b[1],e?A?b=e+" "+A:(b=e,c="addClass"):(b=A,c="removeClass"));var x="setClass"==c,E=x||"addClass"==c||"removeClass"==c||"animate"==c,p=a.attr("class")+" "+b;if(B(p)){var G=t,m=[],fa=[],g=t,s=[],u=[],p=(" "+p).replace(/\s+/g,".");n(T(p),function(a){!h(a,c)&&x&&(h(a,"addClass"),h(a,"removeClass"))});return{node:k,event:c,className:b,isClassBased:E,isSetClassOperation:x,applyStyles:function(){d&&a.css(f.extend(d.from||{},d.to||{}))},before:function(a){G=a;l(fa,m,function(){G=
t;a()})},after:function(a){g=a;l(u,s,function(){g=t;a()})},cancel:function(){m&&(n(m,function(a){(a||t)(!0)}),G(!0));s&&(n(s,function(a){(a||t)(!0)}),g(!0))}}}}}function H(a,c,b,d,h,l,k,e){function A(e){var k="$animate:"+e;g&&g[k]&&0<g[k].length&&I(function(){b.triggerHandler(k,{event:a,className:c})})}function x(){A("before")}function E(){A("after")}function p(){p.hasBeenRun||(p.hasBeenRun=!0,l())}function G(){if(!G.hasBeenRun){m&&m.applyStyles();G.hasBeenRun=!0;k&&k.tempClasses&&n(k.tempClasses,
function(a){u.removeClass(b,a)});var x=b.data("$$ngAnimateState");x&&(m&&m.isClassBased?C(b,c):(I(function(){var e=b.data("$$ngAnimateState")||{};ea==e.index&&C(b,c,a)}),b.data("$$ngAnimateState",x)));A("close");e()}}var m=U(b,a,c,k);if(!m)return p(),x(),E(),G(),t;a=m.event;c=m.className;var g=f.element._data(m.node),g=g&&g.events;d||(d=h?h.parent():b.parent());if(z(b,d))return p(),x(),E(),G(),t;d=b.data("$$ngAnimateState")||{};var L=d.active||{},s=d.totalActive||0,q=d.last;h=!1;if(0<s){s=[];if(m.isClassBased)"setClass"==
q.event?(s.push(q),C(b,c)):L[c]&&(v=L[c],v.event==a?h=!0:(s.push(v),C(b,c)));else if("leave"==a&&L["ng-leave"])h=!0;else{for(var v in L)s.push(L[v]);d={};C(b,!0)}0<s.length&&n(s,function(a){a.cancel()})}!m.isClassBased||m.isSetClassOperation||"animate"==a||h||(h="addClass"==a==b.hasClass(c));if(h)return p(),x(),E(),A("close"),e(),t;L=d.active||{};s=d.totalActive||0;if("leave"==a)b.one("$destroy",function(a){a=f.element(this);var e=a.data("$$ngAnimateState");e&&(e=e.active["ng-leave"])&&(e.cancel(),
C(a,"ng-leave"))});u.addClass(b,"ng-animate");k&&k.tempClasses&&n(k.tempClasses,function(a){u.addClass(b,a)});var ea=K++;s++;L[c]=m;b.data("$$ngAnimateState",{last:m,active:L,index:ea,totalActive:s});x();m.before(function(e){var k=b.data("$$ngAnimateState");e=e||!k||!k.active[c]||m.isClassBased&&k.active[c].event!=a;p();!0===e?G():(E(),m.after(G))});return m.cancel}function q(a){if(a=g(a))a=f.isFunction(a.getElementsByClassName)?a.getElementsByClassName("ng-animate"):a.querySelectorAll(".ng-animate"),
n(a,function(a){a=f.element(a);(a=a.data("$$ngAnimateState"))&&a.active&&n(a.active,function(a){a.cancel()})})}function C(a,c){if(ba(a,y))w.disabled||(w.running=!1,w.structural=!1);else if(c){var b=a.data("$$ngAnimateState")||{},d=!0===c;!d&&b.active&&b.active[c]&&(b.totalActive--,delete b.active[c]);if(d||!b.totalActive)u.removeClass(a,"ng-animate"),a.removeData("$$ngAnimateState")}}function z(a,c){if(w.disabled)return!0;if(ba(a,y))return w.running;var b,d,g;do{if(0===c.length)break;var l=ba(c,y),
k=l?w:c.data("$$ngAnimateState")||{};if(k.disabled)return!0;l&&(g=!0);!1!==b&&(l=c.data("$$ngAnimateChildren"),f.isDefined(l)&&(b=l));d=d||k.running||k.last&&!k.last.isClassBased}while(c=c.parent());return!g||!b&&d}u=Q;y.data("$$ngAnimateState",w);var $=P.$watch(function(){return Z.totalPendingRequests},function(a,c){0===a&&($(),P.$$postDigest(function(){P.$$postDigest(function(){w.running=!1})}))}),K=0,V=r.classNameFilter(),B=V?function(a){return V.test(a)}:function(){return!0};return{animate:function(a,
c,b,d,h){d=d||"ng-inline-animate";h=J(h)||{};h.from=b?c:null;h.to=b?b:c;return D(function(b){return H("animate",d,f.element(g(a)),null,null,t,h,b)})},enter:function(a,c,b,d){d=J(d);a=f.element(a);c=c&&f.element(c);b=b&&f.element(b);R(a,!0);O.enter(a,c,b);return D(function(h){return H("enter","ng-enter",f.element(g(a)),c,b,t,d,h)})},leave:function(a,c){c=J(c);a=f.element(a);q(a);R(a,!0);return D(function(b){return H("leave","ng-leave",f.element(g(a)),null,null,function(){O.leave(a)},c,b)})},move:function(a,
c,b,d){d=J(d);a=f.element(a);c=c&&f.element(c);b=b&&f.element(b);q(a);R(a,!0);O.move(a,c,b);return D(function(h){return H("move","ng-move",f.element(g(a)),c,b,t,d,h)})},addClass:function(a,c,b){return this.setClass(a,c,[],b)},removeClass:function(a,c,b){return this.setClass(a,[],c,b)},setClass:function(a,c,b,d){d=J(d);a=f.element(a);a=f.element(g(a));if(R(a))return O.$$setClassImmediately(a,c,b,d);var h,l=a.data("$$animateClasses"),k=!!l;l||(l={classes:{}});h=l.classes;c=aa(c)?c:c.split(" ");n(c,
function(a){a&&a.length&&(h[a]=!0)});b=aa(b)?b:b.split(" ");n(b,function(a){a&&a.length&&(h[a]=!1)});if(k)return d&&l.options&&(l.options=f.extend(l.options||{},d)),l.promise;a.data("$$animateClasses",l={classes:h,options:d});return l.promise=D(function(e){var k,b,c,d=g(a);d&&(k=a.data("$$animateClasses"),a.removeData("$$animateClasses"),c=a.parent(),b=d.parentNode);if(!b||b.$$NG_REMOVED||d.$$NG_REMOVED)e();else{b=a.data("$$ngAnimateState")||{};var f=S(a,k,b.active);return f?H("setClass",f,a,c,null,
function(){f[0]&&O.$$addClassImmediately(a,f[0]);f[1]&&O.$$removeClassImmediately(a,f[1])},k.options,e):e()}})},cancel:function(a){a.$$cancelFn()},enabled:function(a,c){switch(arguments.length){case 2:if(a)C(c);else{var b=c.data("$$ngAnimateState")||{};b.disabled=!0;c.data("$$ngAnimateState",b)}break;case 1:w.disabled=!a;break;default:a=!w.disabled}return!!a}}}]);r.register("",["$window","$sniffer","$timeout","$$animateReflow",function(r,w,M,Y){function y(){b||(b=Y(function(){c=[];b=null;B={}}))}
function I(a,e){b&&b();c.push(e);b=Y(function(){n(c,function(a){a()});c=[];b=null;B={}})}function P(a,e){var b=g(a);a=f.element(b);l.push(a);b=Date.now()+e;b<=h||(M.cancel(d),h=b,d=M(function(){X(l);l=[]},e,!1))}function X(a){n(a,function(a){(a=a.data("$$ngAnimateCSS3Data"))&&n(a.closeAnimationFns,function(a){a()})})}function Z(a,e){var b=e?B[e]:null;if(!b){var c=0,d=0,f=0,g=0;n(a,function(a){if(1==a.nodeType){a=r.getComputedStyle(a)||{};c=Math.max(Q(a[z+"Duration"]),c);d=Math.max(Q(a[z+"Delay"]),
d);g=Math.max(Q(a[K+"Delay"]),g);var e=Q(a[K+"Duration"]);0<e&&(e*=parseInt(a[K+"IterationCount"],10)||1);f=Math.max(e,f)}});b={total:0,transitionDelay:d,transitionDuration:c,animationDelay:g,animationDuration:f};e&&(B[e]=b)}return b}function Q(a){var e=0;a=da(a)?a.split(/\s*,\s*/):[];n(a,function(a){e=Math.max(parseFloat(a)||0,e)});return e}function R(b,e,c,d){b=0<=["ng-enter","ng-leave","ng-move"].indexOf(c);var f,p=e.parent(),h=p.data("$$ngAnimateKey");h||(p.data("$$ngAnimateKey",++a),h=a);f=h+
"-"+g(e).getAttribute("class");var p=f+" "+c,h=B[p]?++B[p].total:0,m={};if(0<h){var n=c+"-stagger",m=f+" "+n;(f=!B[m])&&u.addClass(e,n);m=Z(e,m);f&&u.removeClass(e,n)}u.addClass(e,c);var n=e.data("$$ngAnimateCSS3Data")||{},l=Z(e,p);f=l.transitionDuration;l=l.animationDuration;if(b&&0===f&&0===l)return u.removeClass(e,c),!1;c=d||b&&0<f;b=0<l&&0<m.animationDelay&&0===m.animationDuration;e.data("$$ngAnimateCSS3Data",{stagger:m,cacheKey:p,running:n.running||0,itemIndex:h,blockTransition:c,closeAnimationFns:n.closeAnimationFns||
[]});p=g(e);c&&(J(p,!0),d&&e.css(d));b&&(p.style[K+"PlayState"]="paused");return!0}function D(a,e,b,c,d){function f(){e.off(D,h);u.removeClass(e,l);u.removeClass(e,t);z&&M.cancel(z);H(e,b);var a=g(e),c;for(c in s)a.style.removeProperty(s[c])}function h(a){a.stopPropagation();var b=a.originalEvent||a;a=b.$manualTimeStamp||b.timeStamp||Date.now();b=parseFloat(b.elapsedTime.toFixed(3));Math.max(a-I,0)>=B&&b>=y&&c()}var m=g(e);a=e.data("$$ngAnimateCSS3Data");if(-1!=m.getAttribute("class").indexOf(b)&&
a){var l="",t="";n(b.split(" "),function(a,b){var e=(0<b?" ":"")+a;l+=e+"-active";t+=e+"-pending"});var s=[],q=a.itemIndex,v=a.stagger,r=0;if(0<q){r=0;0<v.transitionDelay&&0===v.transitionDuration&&(r=v.transitionDelay*q);var w=0;0<v.animationDelay&&0===v.animationDuration&&(w=v.animationDelay*q,s.push(C+"animation-play-state"));r=Math.round(100*Math.max(r,w))/100}r||(u.addClass(e,l),a.blockTransition&&J(m,!1));var F=Z(e,a.cacheKey+" "+l),y=Math.max(F.transitionDuration,F.animationDuration);if(0===
y)u.removeClass(e,l),H(e,b),c();else{!r&&d&&0<Object.keys(d).length&&(F.transitionDuration||(e.css("transition",F.animationDuration+"s linear all"),s.push("transition")),e.css(d));var q=Math.max(F.transitionDelay,F.animationDelay),B=1E3*q;0<s.length&&(v=m.getAttribute("style")||"",";"!==v.charAt(v.length-1)&&(v+=";"),m.setAttribute("style",v+" "));var I=Date.now(),D=V+" "+$,q=1E3*(r+1.5*(q+y)),z;0<r&&(u.addClass(e,t),z=M(function(){z=null;0<F.transitionDuration&&J(m,!1);0<F.animationDuration&&(m.style[K+
"PlayState"]="");u.addClass(e,l);u.removeClass(e,t);d&&(0===F.transitionDuration&&e.css("transition",F.animationDuration+"s linear all"),e.css(d),s.push("transition"))},1E3*r,!1));e.on(D,h);a.closeAnimationFns.push(function(){f();c()});a.running++;P(e,q);return f}}else c()}function J(a,b){a.style[z+"Property"]=b?"none":""}function S(a,b,c,d){if(R(a,b,c,d))return function(a){a&&H(b,c)}}function T(a,b,c,d,f){if(b.data("$$ngAnimateCSS3Data"))return D(a,b,c,d,f);H(b,c);d()}function U(a,b,c,d,f){var g=
S(a,b,c,f.from);if(g){var h=g;I(b,function(){h=T(a,b,c,d,f.to)});return function(a){(h||t)(a)}}y();d()}function H(a,b){u.removeClass(a,b);var c=a.data("$$ngAnimateCSS3Data");c&&(c.running&&c.running--,c.running&&0!==c.running||a.removeData("$$ngAnimateCSS3Data"))}function q(a,b){var c="";a=aa(a)?a:a.split(/\s+/);n(a,function(a,d){a&&0<a.length&&(c+=(0<d?" ":"")+a+b)});return c}var C="",z,$,K,V;N.ontransitionend===W&&N.onwebkittransitionend!==W?(C="-webkit-",z="WebkitTransition",$="webkitTransitionEnd transitionend"):
(z="transition",$="transitionend");N.onanimationend===W&&N.onwebkitanimationend!==W?(C="-webkit-",K="WebkitAnimation",V="webkitAnimationEnd animationend"):(K="animation",V="animationend");var B={},a=0,c=[],b,d=null,h=0,l=[];return{animate:function(a,b,c,d,f,g){g=g||{};g.from=c;g.to=d;return U("animate",a,b,f,g)},enter:function(a,b,c){c=c||{};return U("enter",a,"ng-enter",b,c)},leave:function(a,b,c){c=c||{};return U("leave",a,"ng-leave",b,c)},move:function(a,b,c){c=c||{};return U("move",a,"ng-move",
b,c)},beforeSetClass:function(a,b,c,d,f){f=f||{};b=q(c,"-remove")+" "+q(b,"-add");if(f=S("setClass",a,b,f.from))return I(a,d),f;y();d()},beforeAddClass:function(a,b,c,d){d=d||{};if(b=S("addClass",a,q(b,"-add"),d.from))return I(a,c),b;y();c()},beforeRemoveClass:function(a,b,c,d){d=d||{};if(b=S("removeClass",a,q(b,"-remove"),d.from))return I(a,c),b;y();c()},setClass:function(a,b,c,d,f){f=f||{};c=q(c,"-remove");b=q(b,"-add");return T("setClass",a,c+" "+b,d,f.to)},addClass:function(a,b,c,d){d=d||{};return T("addClass",
a,q(b,"-add"),c,d.to)},removeClass:function(a,b,c,d){d=d||{};return T("removeClass",a,q(b,"-remove"),c,d.to)}}}])}])})(window,window.angular);
//# sourceMappingURL=angular-animate.min.js.map

/*!
angular-xeditable - 0.1.9
Edit-in-place for angular.js
Build date: 2015-03-26 
*/
/**
 * Angular-xeditable module 
 *
 */
angular.module('xeditable', [])


/**
 * Default options. 
 *
 * @namespace editable-options
 */
//todo: maybe better have editableDefaults, not options...
.value('editableOptions', {
  /**
   * Theme. Possible values `bs3`, `bs2`, `default`.
   * 
   * @var {string} theme
   * @memberOf editable-options
   */  
  theme: 'default',
  /**
   * Icon Set. Possible values `font-awesome`, `default`.
   * 
   * @var {string} icon set
   * @memberOf editable-options
   */  
  icon_set: 'default',
  /**
   * Whether to show buttons for single editalbe element.  
   * Possible values `right` (default), `no`.
   * 
   * @var {string} buttons
   * @memberOf editable-options
   */    
  buttons: 'right',
  /**
   * Default value for `blur` attribute of single editable element.  
   * Can be `cancel|submit|ignore`.
   * 
   * @var {string} blurElem
   * @memberOf editable-options
   */
  blurElem: 'cancel',
  /**
   * Default value for `blur` attribute of editable form.  
   * Can be `cancel|submit|ignore`.
   * 
   * @var {string} blurForm
   * @memberOf editable-options
   */
  blurForm: 'ignore',
  /**
   * How input elements get activated. Possible values: `focus|select|none`.
   *
   * @var {string} activate
   * @memberOf editable-options
   */
  activate: 'focus',
  /**
   * Whether to disable x-editable. Can be overloaded on each element.
   *
   * @var {boolean} isDisabled
   * @memberOf editable-options
   */
   isDisabled: false,
  
  /**
   * Event, on which the edit mode gets activated. 
   * Can be any event.
   *
   * @var {string} activationEvent
   * @memberOf editable-options
   */
  activationEvent: 'click'

});

/*
Angular-ui bootstrap datepicker
http://angular-ui.github.io/bootstrap/#/datepicker
*/
angular.module('xeditable').directive('editableBsdate', ['editableDirectiveFactory',
	function(editableDirectiveFactory) {
		return editableDirectiveFactory({
			directiveName: 'editableBsdate',
			inputTpl: '<div></div>',
			render: function() {
				/** This basically renders a datepicker as in the example shown in 
				**  http://angular-ui.github.io/bootstrap/#/datepicker
				**  The attributes are all the same as in the bootstrap-ui datepicker with e- as prefix
				**/
				this.parent.render.call(this);

				var inputDatePicker = angular.element('<input type="text" class="form-control" ng-model="$data"/>');
				var buttonDatePicker = angular.element('<button type="button" class="btn btn-default"><i class="glyphicon glyphicon-calendar"></i></button>');
				var buttonWrapper = angular.element('<span class="input-group-btn"></span>');

				inputDatePicker.attr('datepicker-popup', this.attrs.eDatepickerPopupXEditable || 'yyyy/MM/dd' );
				inputDatePicker.attr('is-open', this.attrs.eIsOpen);
				inputDatePicker.attr('date-disabled', this.attrs.eDateDisabled);
				inputDatePicker.attr('datepicker-popup', this.attrs.eDatepickerPopup);
				inputDatePicker.attr('datepicker-mode', this.attrs.eDatepickerMode || 'day');
				inputDatePicker.attr('min-date', this.attrs.eMinDate);
				inputDatePicker.attr('max-date', this.attrs.eMaxDate);
				inputDatePicker.attr('show-weeks', this.attrs.eShowWeeks || true);
				inputDatePicker.attr('starting-day', this.attrs.eStartingDay || 0);
				inputDatePicker.attr('init-date', this.attrs.eInitDate || new Date());
				inputDatePicker.attr('min-mode', this.attrs.eMinMode || 'day');
				inputDatePicker.attr('max-mode', this.attrs.eMaxMode || 'year');
				inputDatePicker.attr('format-day', this.attrs.eFormatDay || 'dd');
				inputDatePicker.attr('format-month', this.attrs.eFormatMonth || 'MMMM');
				inputDatePicker.attr('format-year', this.attrs.eFormatYear || 'yyyy');
				inputDatePicker.attr('format-day-header', this.attrs.eFormatDayHeader || 'EEE');
				inputDatePicker.attr('format-day-title', this.attrs.eFormatDayTitle || 'MMMM yyyy');
				inputDatePicker.attr('format-month-title', this.attrs.eFormatMonthTitle || 'yyyy');
				inputDatePicker.attr('year-range', this.attrs.eYearRange || 20);
				inputDatePicker.attr('show-button-bar', this.attrs.eShowButtonBar || true);
				inputDatePicker.attr('current-text', this.attrs.eCurrentText || 'Today');
				inputDatePicker.attr('clear-text', this.attrs.eClearText || 'Clear');
				inputDatePicker.attr('close-text', this.attrs.eCloseText || 'Done');
				inputDatePicker.attr('close-on-date-selection', this.attrs.eCloseOnDateSelection || true);
				inputDatePicker.attr('date-picker-append-to-body', this.attrs.eDatePickerAppendToBody || false);
				inputDatePicker.attr('date-disabled', this.attrs.eDateDisabled);

				buttonDatePicker.attr('ng-click',this.attrs.eNgClick);

				buttonWrapper.append(buttonDatePicker);
				this.inputEl.prepend(inputDatePicker);
				this.inputEl.append(buttonWrapper);

				this.inputEl.removeAttr('class');
				this.inputEl.attr('class','input-group');

			}
    });
}]);
/*
Angular-ui bootstrap editable timepicker
http://angular-ui.github.io/bootstrap/#/timepicker
*/
angular.module('xeditable').directive('editableBstime', ['editableDirectiveFactory',
  function(editableDirectiveFactory) {
    return editableDirectiveFactory({
      directiveName: 'editableBstime',
      inputTpl: '<timepicker></timepicker>',
      render: function() {
        this.parent.render.call(this);

        // timepicker can't update model when ng-model set directly to it
        // see: https://github.com/angular-ui/bootstrap/issues/1141
        // so we wrap it into DIV
        var div = angular.element('<div class="well well-small" style="display:inline-block;"></div>');

        // move ng-model to wrapping div
        div.attr('ng-model', this.inputEl.attr('ng-model'));
        this.inputEl.removeAttr('ng-model');

        // move ng-change to wrapping div
        if(this.attrs.eNgChange) {
          div.attr('ng-change', this.inputEl.attr('ng-change'));
          this.inputEl.removeAttr('ng-change');
        }

        // wrap
        this.inputEl.wrap(div);
      }
    });
}]);
//checkbox
angular.module('xeditable').directive('editableCheckbox', ['editableDirectiveFactory',
  function(editableDirectiveFactory) {
    return editableDirectiveFactory({
      directiveName: 'editableCheckbox',
      inputTpl: '<input type="checkbox">',
      render: function() {
        this.parent.render.call(this);
        if(this.attrs.eTitle) {
          this.inputEl.wrap('<label></label>');
          this.inputEl.parent().append(this.attrs.eTitle);
        }
      },
      autosubmit: function() {
        var self = this;
        self.inputEl.bind('change', function() {
          setTimeout(function() {
            self.scope.$apply(function() {
              self.scope.$form.$submit();
            });
          }, 500);
        });
      }
    });
}]);

// checklist
angular.module('xeditable').directive('editableChecklist', [
  'editableDirectiveFactory',
  'editableNgOptionsParser',
  function(editableDirectiveFactory, editableNgOptionsParser) {
    return editableDirectiveFactory({
      directiveName: 'editableChecklist',
      inputTpl: '<span></span>',
      useCopy: true,
      render: function() {
        this.parent.render.call(this);
        var parsed = editableNgOptionsParser(this.attrs.eNgOptions);
        var html = '<label ng-repeat="'+parsed.ngRepeat+'">'+
          '<input type="checkbox" checklist-model="$parent.$data" checklist-value="'+parsed.locals.valueFn+'">'+
          '<span ng-bind="'+parsed.locals.displayFn+'"></span></label>';

        this.inputEl.removeAttr('ng-model');
        this.inputEl.removeAttr('ng-options');
        this.inputEl.html(html);
      }
    });
}]);

angular.module('xeditable').directive('editableCombodate', ['editableDirectiveFactory', 'editableCombodate',
  function(editableDirectiveFactory, editableCombodate) {
    return editableDirectiveFactory({
      directiveName: 'editableCombodate',
      inputTpl: '<input type="text">',
      render: function() {
        this.parent.render.call(this);
        var combodate = editableCombodate.getInstance(this.inputEl, {value: new Date(this.scope.$data)});

        var self = this;
        combodate.$widget.find('select').bind('change', function(e) {
          self.scope.$data = (new Date(combodate.getValue())).toISOString();
        });
      }
    });
  }
]);
/*
Input types: text|email|tel|number|url|search|color|date|datetime|time|month|week
*/

(function() {

  var types = 'text|password|email|tel|number|url|search|color|date|datetime|time|month|week|file'.split('|');

  //todo: datalist
  
  // generate directives
  angular.forEach(types, function(type) {
    var directiveName = 'editable'+type.charAt(0).toUpperCase() + type.slice(1);
    angular.module('xeditable').directive(directiveName, ['editableDirectiveFactory',
      function(editableDirectiveFactory) {
        return editableDirectiveFactory({
          directiveName: directiveName,
          inputTpl: '<input type="'+type+'">'
        });
    }]);
  });

  //`range` is bit specific
  angular.module('xeditable').directive('editableRange', ['editableDirectiveFactory',
    function(editableDirectiveFactory) {
      return editableDirectiveFactory({
        directiveName: 'editableRange',
        inputTpl: '<input type="range" id="range" name="range">',
        render: function() {
          this.parent.render.call(this);
          this.inputEl.after('<output>{{$data}}</output>');
        }        
      });
  }]);

}());


// radiolist
angular.module('xeditable').directive('editableRadiolist', [
  'editableDirectiveFactory',
  'editableNgOptionsParser',
  function(editableDirectiveFactory, editableNgOptionsParser) {
    return editableDirectiveFactory({
      directiveName: 'editableRadiolist',
      inputTpl: '<span></span>',
      render: function() {
        this.parent.render.call(this);
        var parsed = editableNgOptionsParser(this.attrs.eNgOptions);
        var html = '<label ng-repeat="'+parsed.ngRepeat+'">'+
          '<input type="radio" ng-disabled="' + this.attrs.eNgDisabled + '" ng-model="$parent.$data" value="{{'+parsed.locals.valueFn+'}}">'+
          '<span ng-bind="'+parsed.locals.displayFn+'"></span></label>';

        this.inputEl.removeAttr('ng-model');
        this.inputEl.removeAttr('ng-options');
        this.inputEl.html(html);
      },
      autosubmit: function() {
        var self = this;
        self.inputEl.bind('change', function() {
          setTimeout(function() {
            self.scope.$apply(function() {
              self.scope.$form.$submit();
            });
          }, 500);
        });
      }
    });
}]);

//select
angular.module('xeditable').directive('editableSelect', ['editableDirectiveFactory',
  function(editableDirectiveFactory) {
    return editableDirectiveFactory({
      directiveName: 'editableSelect',
      inputTpl: '<select></select>',
      autosubmit: function() {
        var self = this;
        self.inputEl.bind('change', function() {
          self.scope.$apply(function() {
            self.scope.$form.$submit();
          });
        });
      }
    });
}]);
//textarea
angular.module('xeditable').directive('editableTextarea', ['editableDirectiveFactory',
  function(editableDirectiveFactory) {
    return editableDirectiveFactory({
      directiveName: 'editableTextarea',
      inputTpl: '<textarea></textarea>',
      addListeners: function() {
        var self = this;
        self.parent.addListeners.call(self);
        // submit textarea by ctrl+enter even with buttons
        if (self.single && self.buttons !== 'no') {
          self.autosubmit();
        }
      },
      autosubmit: function() {
        var self = this;
        self.inputEl.bind('keydown', function(e) {
          if ((e.ctrlKey || e.metaKey) && (e.keyCode === 13)) {
            self.scope.$apply(function() {
              self.scope.$form.$submit();
            });
          }
        });
      }
    });
}]);

/**
 * EditableController class. 
 * Attached to element with `editable-xxx` directive.
 *
 * @namespace editable-element
 */
/*
TODO: this file should be refactored to work more clear without closures!
*/
angular.module('xeditable').factory('editableController', 
  ['$q', 'editableUtils',
  function($q, editableUtils) {

  //EditableController function
  EditableController.$inject = ['$scope', '$attrs', '$element', '$parse', 'editableThemes', 'editableIcons', 'editableOptions', '$rootScope', '$compile', '$q'];
  function EditableController($scope, $attrs, $element, $parse, editableThemes, editableIcons, editableOptions, $rootScope, $compile, $q) {
    var valueGetter;

    //if control is disabled - it does not participate in waiting process
    var inWaiting;

    var self = this;

    self.scope = $scope;
    self.elem = $element;
    self.attrs = $attrs;
    self.inputEl = null;
    self.editorEl = null;
    self.single = true;
    self.error = '';
    self.theme =  editableThemes[editableOptions.theme] || editableThemes['default'];
    self.parent = {};

    //will be undefined if icon_set is default and theme is default
    self.icon_set = editableOptions.icon_set === 'default' ? editableIcons.default[editableOptions.theme] : editableIcons.external[editableOptions.icon_set];

    //to be overwritten by directive
    self.inputTpl = '';
    self.directiveName = '';

    // with majority of controls copy is not needed, but..
    // copy MUST NOT be used for `select-multiple` with objects as items
    // copy MUST be used for `checklist`
    self.useCopy = false;

    //runtime (defaults)
    self.single = null;

    /**
     * Attributes defined with `e-*` prefix automatically transfered from original element to
     * control.  
     * For example, if you set `<span editable-text="user.name" e-style="width: 100px"`>
     * then input will appear as `<input style="width: 100px">`.  
     * See [demo](#text-customize).
     * 
     * @var {any|attribute} e-*
     * @memberOf editable-element
     */ 

    /**
     * Whether to show ok/cancel buttons. Values: `right|no`.
     * If set to `no` control automatically submitted when value changed.  
     * If control is part of form buttons will never be shown. 
     * 
     * @var {string|attribute} buttons
     * @memberOf editable-element
     */    
    self.buttons = 'right'; 
    /**
     * Action when control losses focus. Values: `cancel|submit|ignore`.
     * Has sense only for single editable element.
     * Otherwise, if control is part of form - you should set `blur` of form, not of individual element.
     * 
     * @var {string|attribute} blur
     * @memberOf editable-element
     */     
    // no real `blur` property as it is transfered to editable form

    //init
    self.init = function(single) {
      self.single = single;

      self.name = $attrs.eName || $attrs[self.directiveName];
      /*
      if(!$attrs[directiveName] && !$attrs.eNgModel && ($attrs.eValue === undefined)) {
        throw 'You should provide value for `'+directiveName+'` or `e-value` in editable element!';
      }
      */
      if($attrs[self.directiveName]) {
        valueGetter = $parse($attrs[self.directiveName]);
      } else {
        throw 'You should provide value for `'+self.directiveName+'` in editable element!';
      }

      // settings for single and non-single
      if (!self.single) {
        // hide buttons for non-single
        self.buttons = 'no';
      } else {
        self.buttons = self.attrs.buttons || editableOptions.buttons;
      }

      //if name defined --> watch changes and update $data in form
      if($attrs.eName) {
        self.scope.$watch('$data', function(newVal){
          self.scope.$form.$data[$attrs.eName] = newVal;
        });
      }

      /**
       * Called when control is shown.  
       * See [demo](#select-remote).
       * 
       * @var {method|attribute} onshow
       * @memberOf editable-element
       */
      if($attrs.onshow) {
        self.onshow = function() {
          return self.catchError($parse($attrs.onshow)($scope));
        };
      }

      /**
       * Called when control is hidden after both save or cancel.  
       * 
       * @var {method|attribute} onhide
       * @memberOf editable-element
       */
      if($attrs.onhide) {
        self.onhide = function() {
          return $parse($attrs.onhide)($scope);
        };
      }

      /**
       * Called when control is cancelled.  
       * 
       * @var {method|attribute} oncancel
       * @memberOf editable-element
       */
      if($attrs.oncancel) {
        self.oncancel = function() {
          return $parse($attrs.oncancel)($scope);
        };
      }          

      /**
       * Called during submit before value is saved to model.  
       * See [demo](#onbeforesave).
       * 
       * @var {method|attribute} onbeforesave
       * @memberOf editable-element
       */
      if ($attrs.onbeforesave) {
        self.onbeforesave = function() {
          return self.catchError($parse($attrs.onbeforesave)($scope));
        };
      }

      /**
       * Called during submit after value is saved to model.  
       * See [demo](#onaftersave).
       * 
       * @var {method|attribute} onaftersave
       * @memberOf editable-element
       */
      if ($attrs.onaftersave) {
        self.onaftersave = function() {
          return self.catchError($parse($attrs.onaftersave)($scope));
        };
      }

      // watch change of model to update editable element
      // now only add/remove `editable-empty` class.
      // Initially this method called with newVal = undefined, oldVal = undefined
      // so no need initially call handleEmpty() explicitly
      $scope.$parent.$watch($attrs[self.directiveName], function(newVal, oldVal) {
        self.setLocalValue();
        self.handleEmpty();
      });
    };

    self.render = function() {
      var theme = self.theme;

      //build input
      self.inputEl = angular.element(self.inputTpl);

      //build controls
      self.controlsEl = angular.element(theme.controlsTpl);
      self.controlsEl.append(self.inputEl);

      //build buttons
      if(self.buttons !== 'no') {
        self.buttonsEl = angular.element(theme.buttonsTpl);
        self.submitEl = angular.element(theme.submitTpl);
        self.cancelEl = angular.element(theme.cancelTpl);
        if(self.icon_set) {
          self.submitEl.find('span').addClass(self.icon_set.ok);
          self.cancelEl.find('span').addClass(self.icon_set.cancel);
        }
        self.buttonsEl.append(self.submitEl).append(self.cancelEl);
        self.controlsEl.append(self.buttonsEl);
        
        self.inputEl.addClass('editable-has-buttons');
      }

      //build error
      self.errorEl = angular.element(theme.errorTpl);
      self.controlsEl.append(self.errorEl);

      //build editor
      self.editorEl = angular.element(self.single ? theme.formTpl : theme.noformTpl);
      self.editorEl.append(self.controlsEl);

      // transfer `e-*|data-e-*|x-e-*` attributes
      for(var k in $attrs.$attr) {
        if(k.length <= 1) {
          continue;
        }
        var transferAttr = false;
        var nextLetter = k.substring(1, 2);

        // if starts with `e` + uppercase letter
        if(k.substring(0, 1) === 'e' && nextLetter === nextLetter.toUpperCase()) {
          transferAttr = k.substring(1); // cut `e`
        } else {
          continue;
        }
        
        // exclude `form` and `ng-submit`, 
        if(transferAttr === 'Form' || transferAttr === 'NgSubmit') {
          continue;
        }

        // convert back to lowercase style
        transferAttr = transferAttr.substring(0, 1).toLowerCase() + editableUtils.camelToDash(transferAttr.substring(1));  

        // workaround for attributes without value (e.g. `multiple = "multiple"`)
        // except for 'e-value'
        var attrValue = (transferAttr !== 'value' && $attrs[k] === '') ? transferAttr : $attrs[k];

        // set attributes to input
        self.inputEl.attr(transferAttr, attrValue);
      }

      self.inputEl.addClass('editable-input');
      self.inputEl.attr('ng-model', '$data');

      // add directiveName class to editor, e.g. `editable-text`
      self.editorEl.addClass(editableUtils.camelToDash(self.directiveName));

      if(self.single) {
        self.editorEl.attr('editable-form', '$form');
        // transfer `blur` to form
        self.editorEl.attr('blur', self.attrs.blur || (self.buttons === 'no' ? 'cancel' : editableOptions.blurElem));
      }

      //apply `postrender` method of theme
      if(angular.isFunction(theme.postrender)) {
        theme.postrender.call(self);
      }

    };

    // with majority of controls copy is not needed, but..
    // copy MUST NOT be used for `select-multiple` with objects as items
    // copy MUST be used for `checklist`
    self.setLocalValue = function() {
      self.scope.$data = self.useCopy ? 
        angular.copy(valueGetter($scope.$parent)) : 
        valueGetter($scope.$parent);
    };

    //show
    self.show = function() {
      // set value of scope.$data
      self.setLocalValue();

      /*
      Originally render() was inside init() method, but some directives polluting editorEl,
      so it is broken on second openning.
      Cloning is not a solution as jqLite can not clone with event handler's.
      */
      self.render();

      // insert into DOM
      $element.after(self.editorEl);

      // compile (needed to attach ng-* events from markup)
      $compile(self.editorEl)($scope);

      // attach listeners (`escape`, autosubmit, etc)
      self.addListeners();

      // hide element
      $element.addClass('editable-hide');

      // onshow
      return self.onshow();
    };

    //hide
    self.hide = function() {
      
      self.editorEl.remove();
      $element.removeClass('editable-hide');

      // onhide
      return self.onhide();
    };

    // cancel
    self.cancel = function() {
      // oncancel
      self.oncancel();
      // don't call hide() here as it called in form's code
    };

    /*
    Called after show to attach listeners
    */
    self.addListeners = function() {
      // bind keyup for `escape`
      self.inputEl.bind('keyup', function(e) {
          if(!self.single) {
            return;
          }

          // todo: move this to editable-form!
          switch(e.keyCode) {
            // hide on `escape` press
            case 27:
              self.scope.$apply(function() {
                self.scope.$form.$cancel();
              });
            break;
          }
      });

      // autosubmit when `no buttons`
      if (self.single && self.buttons === 'no') {
        self.autosubmit();
      }

      // click - mark element as clicked to exclude in document click handler
      self.editorEl.bind('click', function(e) {
        // ignore right/middle button click
        if (e.which && e.which !== 1) {
          return;
        }

        if (self.scope.$form.$visible) {
          self.scope.$form._clicked = true;
        }
      });
    };

    // setWaiting
    self.setWaiting = function(value) {
      if (value) {
        // participate in waiting only if not disabled
        inWaiting = !self.inputEl.attr('disabled') &&
                    !self.inputEl.attr('ng-disabled') &&
                    !self.inputEl.attr('ng-enabled');
        if (inWaiting) {
          self.inputEl.attr('disabled', 'disabled');
          if(self.buttonsEl) {
            self.buttonsEl.find('button').attr('disabled', 'disabled');
          }
        }
      } else {
        if (inWaiting) {
          self.inputEl.removeAttr('disabled');
          if (self.buttonsEl) {
            self.buttonsEl.find('button').removeAttr('disabled');
          }
        }
      }
    };

    self.activate = function(start, end) {
      setTimeout(function() {
        var el = self.inputEl[0];
        if (editableOptions.activate === 'focus' && el.focus) {
          if(start){
            end = end || start;
            el.onfocus = function(){
              var that = this;
              setTimeout(function(){
                that.setSelectionRange(start,end);
              });
            };
          }
          el.focus();
        }
        if (editableOptions.activate === 'select' && el.select) {
          el.select();
        }
      }, 0);
    };

    self.setError = function(msg) {
      if(!angular.isObject(msg)) {
        $scope.$error = msg;
        self.error = msg;
      }
    };

    /*
    Checks that result is string or promise returned string and shows it as error message
    Applied to onshow, onbeforesave, onaftersave
    */
    self.catchError = function(result, noPromise) {
      if (angular.isObject(result) && noPromise !== true) {
        $q.when(result).then(
          //success and fail handlers are equal
          angular.bind(this, function(r) {
            this.catchError(r, true);
          }),
          angular.bind(this, function(r) {
            this.catchError(r, true);
          })
        );
      //check $http error
      } else if (noPromise && angular.isObject(result) && result.status &&
        (result.status !== 200) && result.data && angular.isString(result.data)) {
        this.setError(result.data);
        //set result to string: to let form know that there was error
        result = result.data;
      } else if (angular.isString(result)) {
        this.setError(result);
      }
      return result;
    };

    self.save = function() {
      valueGetter.assign($scope.$parent,
          self.useCopy ? angular.copy(self.scope.$data) : self.scope.$data);

      // no need to call handleEmpty here as we are watching change of model value
      // self.handleEmpty();
    };

    /*
    attach/detach `editable-empty` class to element
    */
    self.handleEmpty = function() {
      var val = valueGetter($scope.$parent);
      var isEmpty = val === null || val === undefined || val === "" || (angular.isArray(val) && val.length === 0); 
      $element.toggleClass('editable-empty', isEmpty);
    };

    /*
    Called when `buttons = "no"` to submit automatically
    */
    self.autosubmit = angular.noop;

    self.onshow = angular.noop;
    self.onhide = angular.noop;
    self.oncancel = angular.noop;
    self.onbeforesave = angular.noop;
    self.onaftersave = angular.noop;
  }

  return EditableController;
}]);

/*
editableFactory is used to generate editable directives (see `/directives` folder)
Inside it does several things:
- detect form for editable element. Form may be one of three types:
  1. autogenerated form (for single editable elements)
  2. wrapper form (element wrapped by <form> tag)
  3. linked form (element has `e-form` attribute pointing to existing form)

- attach editableController to element

Depends on: editableController, editableFormFactory
*/
angular.module('xeditable').factory('editableDirectiveFactory',
['$parse', '$compile', 'editableThemes', '$rootScope', '$document', 'editableController', 'editableFormController', 'editableOptions',
function($parse, $compile, editableThemes, $rootScope, $document, editableController, editableFormController, editableOptions) {

  //directive object
  return function(overwrites) {
    return {
      restrict: 'A',
      scope: true,
      require: [overwrites.directiveName, '?^form'],
      controller: editableController,
      link: function(scope, elem, attrs, ctrl) {
        // editable controller
        var eCtrl = ctrl[0];

        // form controller
        var eFormCtrl;

        // this variable indicates is element is bound to some existing form, 
        // or it's single element who's form will be generated automatically
        // By default consider single element without any linked form.ß
        var hasForm = false;
     
        // element wrapped by form
        if(ctrl[1]) {
          eFormCtrl = ctrl[1];
          hasForm = true;
        } else if(attrs.eForm) { // element not wrapped by <form>, but we hane `e-form` attr
          var getter = $parse(attrs.eForm)(scope);
          if(getter) { // form exists in scope (above), e.g. editable column
            eFormCtrl = getter;
            hasForm = true;
          } else { // form exists below or not exist at all: check document.forms
            for(var i=0; i<$document[0].forms.length;i++){
              if($document[0].forms[i].name === attrs.eForm) {
                // form is below and not processed yet
                eFormCtrl = null;
                hasForm = true;
                break;
              }
            }
          }
        }

        /*
        if(hasForm && !attrs.eName) {
          throw 'You should provide `e-name` for editable element inside form!';
        }
        */

        //check for `editable-form` attr in form
        /*
        if(eFormCtrl && ) {
          throw 'You should provide `e-name` for editable element inside form!';
        }
        */

        // store original props to `parent` before merge
        angular.forEach(overwrites, function(v, k) {
          if(eCtrl[k] !== undefined) {
            eCtrl.parent[k] = eCtrl[k];
          }
        });

        // merge overwrites to base editable controller
        angular.extend(eCtrl, overwrites);

        // x-editable can be disabled using editableOption or edit-disabled attribute
        var disabled = angular.isDefined(attrs.editDisabled) ?
          scope.$eval(attrs.editDisabled) :
          editableOptions.isDisabled;

        if (disabled) {
          return;
        }
        
        // init editable ctrl
        eCtrl.init(!hasForm);

        // publich editable controller as `$editable` to be referenced in html
        scope.$editable = eCtrl;

        // add `editable` class to element
        elem.addClass('editable');

        // hasForm
        if(hasForm) {
          if(eFormCtrl) {
            scope.$form = eFormCtrl;
            if(!scope.$form.$addEditable) {
              throw 'Form with editable elements should have `editable-form` attribute.';
            }
            scope.$form.$addEditable(eCtrl);
          } else {
            // future form (below): add editable controller to buffer and add to form later
            $rootScope.$$editableBuffer = $rootScope.$$editableBuffer || {};
            $rootScope.$$editableBuffer[attrs.eForm] = $rootScope.$$editableBuffer[attrs.eForm] || [];
            $rootScope.$$editableBuffer[attrs.eForm].push(eCtrl);
            scope.$form = null; //will be re-assigned later
          }
        // !hasForm
        } else {
          // create editableform controller
          scope.$form = editableFormController();
          // add self to editable controller
          scope.$form.$addEditable(eCtrl);

          // if `e-form` provided, publish local $form in scope
          if(attrs.eForm) {
            scope.$parent[attrs.eForm] = scope.$form;
          }

          // bind click - if no external form defined
          if(!attrs.eForm || attrs.eClickable) {
            elem.addClass('editable-click');
            elem.bind(editableOptions.activationEvent, function(e) {
              e.preventDefault();
              e.editable = eCtrl;
              scope.$apply(function(){
                scope.$form.$show();
              });
            });
          }
        }

      }
    };
  };
}]);

/*
Returns editableForm controller
*/
angular.module('xeditable').factory('editableFormController', 
  ['$parse', '$document', '$rootScope', 'editablePromiseCollection', 'editableUtils',
  function($parse, $document, $rootScope, editablePromiseCollection, editableUtils) {

  // array of opened editable forms
  var shown = [];

  //Check if the child element correspond or is a descendant of the parent element
  var isSelfOrDescendant = function (parent, child) {
    if (child == parent) {
      return true;
    }

    var node = child.parentNode;
    while (node !== null) {
      if (node == parent) {
        return true;
      }
      node = node.parentNode;
    }
    return false;
  };
  
  //Check if it is a real blur : if the click event appear on a shown editable elem, this is not a blur.
  var isBlur = function(shown, event) {
    var isBlur = true;

    var editables = shown.$editables;
    angular.forEach(editables, function(v){
      var element = v.editorEl[0];
      if (isSelfOrDescendant(element, event.target))
        isBlur = false;
      
    });
    return isBlur;
  };
  
  // bind click to body: cancel|submit|ignore forms
  $document.bind('click', function(e) {
    // ignore right/middle button click
    if ((e.which && e.which !== 1) || e.isDefaultPrevented()) {
      return;
    }

    var toCancel = [];
    var toSubmit = [];
    for (var i=0; i<shown.length; i++) {

      // exclude clicked
      if (shown[i]._clicked) {
        shown[i]._clicked = false;
        continue;
      }

      // exclude waiting
      if (shown[i].$waiting) {
        continue;
      }

      if (shown[i]._blur === 'cancel' && isBlur(shown[i], e)) {
        toCancel.push(shown[i]);
      }

      if (shown[i]._blur === 'submit' && isBlur(shown[i], e)) {
        toSubmit.push(shown[i]);
      }
    }

    if (toCancel.length || toSubmit.length) {
      $rootScope.$apply(function() {
        angular.forEach(toCancel, function(v){ v.$cancel(); });
        angular.forEach(toSubmit, function(v){ v.$submit(); });
      });
    }
  });
 

  var base = {
    $addEditable: function(editable) {
      //console.log('add editable', editable.elem, editable.elem.bind);
      this.$editables.push(editable);

      //'on' is not supported in angular 1.0.8
      editable.elem.bind('$destroy', angular.bind(this, this.$removeEditable, editable));

      //bind editable's local $form to self (if not bound yet, below form) 
      if (!editable.scope.$form) {
        editable.scope.$form = this;
      }

      //if form already shown - call show() of new editable
      if (this.$visible) {
        editable.catchError(editable.show());
      }
    },

    $removeEditable: function(editable) {
      //arrayRemove
      for(var i=0; i < this.$editables.length; i++) {
        if(this.$editables[i] === editable) {
          this.$editables.splice(i, 1);
          return;
        }
      }
    },

    /**
     * Shows form with editable controls.
     * 
     * @method $show()
     * @memberOf editable-form
     */
    $show: function() {
      if (this.$visible) {
        return;
      }

      this.$visible = true;

      var pc = editablePromiseCollection();

      //own show
      pc.when(this.$onshow());

      //clear errors
      this.$setError(null, '');

      //children show
      angular.forEach(this.$editables, function(editable) {
        pc.when(editable.show());
      });

      //wait promises and activate
      pc.then({
        onWait: angular.bind(this, this.$setWaiting), 
        onTrue: angular.bind(this, this.$activate), 
        onFalse: angular.bind(this, this.$activate), 
        onString: angular.bind(this, this.$activate)
      });

      // add to internal list of shown forms
      // setTimeout needed to prevent closing right after opening (e.g. when trigger by button)
      setTimeout(angular.bind(this, function() {
        // clear `clicked` to get ready for clicks on visible form
        this._clicked = false;
        if(editableUtils.indexOf(shown, this) === -1) {
          shown.push(this);
        }
      }), 0);      
    },

    /**
     * Sets focus on form field specified by `name`.
     * 
     * @method $activate(name)
     * @param {string} name name of field
     * @memberOf editable-form
     */
    $activate: function(name) {
      var i;
      if (this.$editables.length) {
        //activate by name
        if (angular.isString(name)) {
          for(i=0; i<this.$editables.length; i++) {
            if (this.$editables[i].name === name) {
              this.$editables[i].activate();
              return;
            }
          }
        }

        //try activate error field
        for(i=0; i<this.$editables.length; i++) {
          if (this.$editables[i].error) {
            this.$editables[i].activate();
            return;
          }
        }

        //by default activate first field
        this.$editables[0].activate(this.$editables[0].elem[0].selectionStart, this.$editables[0].elem[0].selectionEnd);
      }
    },

    /**
     * Hides form with editable controls without saving.
     * 
     * @method $hide()
     * @memberOf editable-form
     */
    $hide: function() {
      if (!this.$visible) {
        return;
      }      
      this.$visible = false;
      // self hide
      this.$onhide();
      // children's hide
      angular.forEach(this.$editables, function(editable) {
        editable.hide();
      });

      // remove from internal list of shown forms
      editableUtils.arrayRemove(shown, this);
    },

    /**
     * Triggers `oncancel` event and calls `$hide()`.
     * 
     * @method $cancel()
     * @memberOf editable-form
     */
    $cancel: function() {
      if (!this.$visible) {
        return;
      }      
      // self cancel
      this.$oncancel();
      // children's cancel      
      angular.forEach(this.$editables, function(editable) {
        editable.cancel();
      });
      // self hide
      this.$hide();
    },    

    $setWaiting: function(value) {
      this.$waiting = !!value;
      // we can't just set $waiting variable and use it via ng-disabled in children
      // because in editable-row form is not accessible
      angular.forEach(this.$editables, function(editable) {
        editable.setWaiting(!!value);
      });
    },

    /**
     * Shows error message for particular field.
     * 
     * @method $setError(name, msg)
     * @param {string} name name of field
     * @param {string} msg error message
     * @memberOf editable-form
     */
    $setError: function(name, msg) {
      angular.forEach(this.$editables, function(editable) {
        if(!name || editable.name === name) {
          editable.setError(msg);
        }
      });
    },

    $submit: function() {
      if (this.$waiting) {
        return;
      } 

      //clear errors
      this.$setError(null, '');

      //children onbeforesave
      var pc = editablePromiseCollection();
      angular.forEach(this.$editables, function(editable) {
        pc.when(editable.onbeforesave());
      });

      /*
      onbeforesave result:
      - true/undefined: save data and close form
      - false: close form without saving
      - string: keep form open and show error
      */
      pc.then({
        onWait: angular.bind(this, this.$setWaiting), 
        onTrue: angular.bind(this, checkSelf, true), 
        onFalse: angular.bind(this, checkSelf, false), 
        onString: angular.bind(this, this.$activate)
      });

      //save
      function checkSelf(childrenTrue){
        var pc = editablePromiseCollection();
        pc.when(this.$onbeforesave());
        pc.then({
          onWait: angular.bind(this, this.$setWaiting), 
          onTrue: childrenTrue ? angular.bind(this, this.$save) : angular.bind(this, this.$hide), 
          onFalse: angular.bind(this, this.$hide), 
          onString: angular.bind(this, this.$activate)
        });
      }
    },

    $save: function() {
      // write model for each editable
      angular.forEach(this.$editables, function(editable) {
        editable.save();
      });

      //call onaftersave of self and children
      var pc = editablePromiseCollection();
      pc.when(this.$onaftersave());
      angular.forEach(this.$editables, function(editable) {
        pc.when(editable.onaftersave());
      });

      /*
      onaftersave result:
      - true/undefined/false: just close form
      - string: keep form open and show error
      */
      pc.then({
        onWait: angular.bind(this, this.$setWaiting), 
        onTrue: angular.bind(this, this.$hide), 
        onFalse: angular.bind(this, this.$hide), 
        onString: angular.bind(this, this.$activate)
      });
    },

    $onshow: angular.noop,
    $oncancel: angular.noop,
    $onhide: angular.noop,
    $onbeforesave: angular.noop,
    $onaftersave: angular.noop
  };

  return function() {
    return angular.extend({
      $editables: [],
      /**
       * Form visibility flag.
       * 
       * @var {bool} $visible
       * @memberOf editable-form
       */
      $visible: false,
      /**
       * Form waiting flag. It becomes `true` when form is loading or saving data.
       * 
       * @var {bool} $waiting
       * @memberOf editable-form
       */
      $waiting: false,
      $data: {},
      _clicked: false,
      _blur: null
    }, base);
  };
}]);

/**
 * EditableForm directive. Should be defined in <form> containing editable controls.  
 * It add some usefull methods to form variable exposed to scope by `name="myform"` attribute.
 *
 * @namespace editable-form
 */
angular.module('xeditable').directive('editableForm',
  ['$rootScope', '$parse', 'editableFormController', 'editableOptions',
  function($rootScope, $parse, editableFormController, editableOptions) {
    return {
      restrict: 'A',
      require: ['form'],
      //require: ['form', 'editableForm'],
      //controller: EditableFormController,
      compile: function() {
        return {
          pre: function(scope, elem, attrs, ctrl) {
            var form = ctrl[0];
            var eForm;

            //if `editableForm` has value - publish smartly under this value
            //this is required only for single editor form that is created and removed
            if(attrs.editableForm) {
              if(scope[attrs.editableForm] && scope[attrs.editableForm].$show) {
                eForm = scope[attrs.editableForm];
                angular.extend(form, eForm);
              } else {
                eForm = editableFormController();
                scope[attrs.editableForm] = eForm;
                angular.extend(eForm, form);
              }
            } else { //just merge to form and publish if form has name
              eForm = editableFormController();
              angular.extend(form, eForm);
            }

            //read editables from buffer (that appeared before FORM tag)
            var buf = $rootScope.$$editableBuffer;
            var name = form.$name;
            if(name && buf && buf[name]) {
              angular.forEach(buf[name], function(editable) {
                eForm.$addEditable(editable);
              });
              delete buf[name];
            }
          },
          post: function(scope, elem, attrs, ctrl) {
            var eForm;

            if(attrs.editableForm && scope[attrs.editableForm] && scope[attrs.editableForm].$show) {
              eForm = scope[attrs.editableForm];
            } else {
              eForm = ctrl[0];
            }

            /**
             * Called when form is shown.
             * 
             * @var {method|attribute} onshow 
             * @memberOf editable-form
             */
            if(attrs.onshow) {
              eForm.$onshow = angular.bind(eForm, $parse(attrs.onshow), scope);
            }

            /**
             * Called when form hides after both save or cancel.
             * 
             * @var {method|attribute} onhide 
             * @memberOf editable-form
             */
            if(attrs.onhide) {
              eForm.$onhide = angular.bind(eForm, $parse(attrs.onhide), scope);
            }

            /**
             * Called when form is cancelled.
             * 
             * @var {method|attribute} oncancel
             * @memberOf editable-form
             */
            if(attrs.oncancel) {
              eForm.$oncancel = angular.bind(eForm, $parse(attrs.oncancel), scope);
            }

            /**
             * Whether form initially rendered in shown state.
             *
             * @var {bool|attribute} shown
             * @memberOf editable-form
             */
            if(attrs.shown && $parse(attrs.shown)(scope)) {
              eForm.$show();
            }

            /**
             * Action when form losses focus. Values: `cancel|submit|ignore`.
             * Default is `ignore`.
             * 
             * @var {string|attribute} blur
             * @memberOf editable-form
             */
            eForm._blur = attrs.blur || editableOptions.blurForm;

            // onbeforesave, onaftersave
            if(!attrs.ngSubmit && !attrs.submit) {
              /**
               * Called after all children `onbeforesave` callbacks but before saving form values
               * to model.  
               * If at least one children callback returns `non-string` - it will not not be called.  
               * See [editable-form demo](#editable-form) for details.
               * 
               * @var {method|attribute} onbeforesave
               * @memberOf editable-form
               * 
               */
              if(attrs.onbeforesave) {
                eForm.$onbeforesave = function() {
                  return $parse(attrs.onbeforesave)(scope, {$data: eForm.$data});
                };
              }

              /**
               * Called when form values are saved to model.  
               * See [editable-form demo](#editable-form) for details.
               * 
               * @var {method|attribute} onaftersave 
               * @memberOf editable-form
               * 
               */
              if(attrs.onaftersave) {
                eForm.$onaftersave = function() {
                  return $parse(attrs.onaftersave)(scope, {$data: eForm.$data});
                };
              }

              elem.bind('submit', function(event) {
                event.preventDefault();
                scope.$apply(function() {
                  eForm.$submit();
                });
              });
            }


            // click - mark form as clicked to exclude in document click handler
            elem.bind('click', function(e) {
              // ignore right/middle button click
              if (e.which && e.which !== 1) {
                return;
              }

              if (eForm.$visible) {
                eForm._clicked = true;
              }
            });   

          }
        };
      }
    };
}]);
/**
 * editablePromiseCollection
 *  
 * Collect results of function calls. Shows waiting if there are promises. 
 * Finally, applies callbacks if:
 * - onTrue(): all results are true and all promises resolved to true
 * - onFalse(): at least one result is false or promise resolved to false
 * - onString(): at least one result is string or promise rejected or promise resolved to string
 */

angular.module('xeditable').factory('editablePromiseCollection', ['$q', function($q) { 

  function promiseCollection() {
    return {
      promises: [],
      hasFalse: false,
      hasString: false,
      when: function(result, noPromise) {
        if (result === false) {
          this.hasFalse = true;
        } else if (!noPromise && angular.isObject(result)) {
          this.promises.push($q.when(result));
        } else if (angular.isString(result)){
          this.hasString = true;
        } else { //result === true || result === undefined || result === null
          return;
        }
      },
      //callbacks: onTrue, onFalse, onString
      then: function(callbacks) {
        callbacks = callbacks || {};
        var onTrue = callbacks.onTrue || angular.noop;
        var onFalse = callbacks.onFalse || angular.noop;
        var onString = callbacks.onString || angular.noop;
        var onWait = callbacks.onWait || angular.noop;

        var self = this;

        if (this.promises.length) {
          onWait(true);
          $q.all(this.promises).then(
            //all resolved       
            function(results) {
              onWait(false);
              //check all results via same `when` method (without checking promises)
              angular.forEach(results, function(result) {
                self.when(result, true);  
              });
              applyCallback();
            },
            //some rejected
            function(error) { 
              onWait(false);
              onString();
            }
            );
        } else {
          applyCallback();
        }

        function applyCallback() {
          if (!self.hasString && !self.hasFalse) {
            onTrue();
          } else if (!self.hasString && self.hasFalse) {
            onFalse();
          } else {
            onString();
          }
        }

      }
    };
  }

  return promiseCollection;

}]);

/**
 * editableUtils
 */
 angular.module('xeditable').factory('editableUtils', [function() {
  return {
    indexOf: function (array, obj) {
      if (array.indexOf) return array.indexOf(obj);

      for ( var i = 0; i < array.length; i++) {
        if (obj === array[i]) return i;
      }
      return -1;
    },

    arrayRemove: function (array, value) {
      var index = this.indexOf(array, value);
      if (index >= 0) {
        array.splice(index, 1);
      }
      return value;
    },

    // copy from https://github.com/angular/angular.js/blob/master/src/Angular.js
    camelToDash: function(str) {
      var SNAKE_CASE_REGEXP = /[A-Z]/g;
      return str.replace(SNAKE_CASE_REGEXP, function(letter, pos) {
        return (pos ? '-' : '') + letter.toLowerCase();
      });
    },

    dashToCamel: function(str) {
      var SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
      var MOZ_HACK_REGEXP = /^moz([A-Z])/;
      return str.
      replace(SPECIAL_CHARS_REGEXP, function(_, separator, letter, offset) {
        return offset ? letter.toUpperCase() : letter;
      }).
      replace(MOZ_HACK_REGEXP, 'Moz$1');
    }
  };
}]);

/**
 * editableNgOptionsParser
 *
 * see: https://github.com/angular/angular.js/blob/master/src/ng/directive/select.js#L131
 */
 angular.module('xeditable').factory('editableNgOptionsParser', [function() {
  //0000111110000000000022220000000000000000000000333300000000000000444444444444444000000000555555555555555000000066666666666666600000000000000007777000000000000000000088888
  var NG_OPTIONS_REGEXP = /^\s*(.*?)(?:\s+as\s+(.*?))?(?:\s+group\s+by\s+(.*))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+(.*?)(?:\s+track\s+by\s+(.*?))?$/;

  function parser(optionsExp) {
    var match;

    if (! (match = optionsExp.match(NG_OPTIONS_REGEXP))) {
      throw 'ng-options parse error';
    }

    var 
    displayFn = match[2] || match[1],
    valueName = match[4] || match[6],
    keyName = match[5],
    groupByFn = match[3] || '',
    valueFn = match[2] ? match[1] : valueName,
    valuesFn = match[7],
    track = match[8],
    trackFn = track ? match[8] : null;

    var ngRepeat;
    if (keyName === undefined) { // array
      ngRepeat = valueName + ' in ' + valuesFn;
      if (track !== undefined) {
        ngRepeat += ' track by '+trackFn;
      }
    } else { // object
      ngRepeat = '('+keyName+', '+valueName+') in '+valuesFn;
    }
    
    // group not supported yet
    return {
      ngRepeat: ngRepeat,
      locals: {
        valueName: valueName,
        keyName: keyName,
        valueFn: valueFn,
        displayFn: displayFn
      }
    };
  }

  return parser;
}]);

/**
 * editableCombodate
 *
 * angular version of https://github.com/vitalets/combodate
 */
angular.module('xeditable').factory('editableCombodate', [function() {
  function Combodate(element, options) {
    this.$element = angular.element(element);

    if(this.$element[0].nodeName != 'INPUT') {
      throw 'Combodate should be applied to INPUT element';
    }

    this.defaults = {
      //in this format value stored in original input
      format: 'YYYY-MM-DD HH:mm',
      //in this format items in dropdowns are displayed
      template: 'D / MMM / YYYY   H : mm',
      //initial value, can be `new Date()`
      value: null,
      minYear: 1970,
      maxYear: 2015,
      yearDescending: true,
      minuteStep: 5,
      secondStep: 1,
      firstItem: 'empty', //'name', 'empty', 'none'
      errorClass: null,
      customClass: '',
      roundTime: true, // whether to round minutes and seconds if step > 1
      smartDays: true // whether days in combo depend on selected month: 31, 30, 28
    };

    this.options = angular.extend({}, this.defaults, options);
    this.init();
  }

  Combodate.prototype = {
    constructor: Combodate,
    init: function () {
      this.map = {
        //key   regexp    moment.method
        day:    ['D',    'date'], 
        month:  ['M',    'month'], 
        year:   ['Y',    'year'], 
        hour:   ['[Hh]', 'hours'],
        minute: ['m',    'minutes'], 
        second: ['s',    'seconds'],
        ampm:   ['[Aa]', ''] 
      };
      
      this.$widget = angular.element('<span class="combodate"></span>').html(this.getTemplate());
      
      this.initCombos();
      
      if (this.options.smartDays) {
        var combo = this;
        this.$widget.find('select').bind('change', function(e) {
          // update days count if month or year changes
          if (angular.element(e.target).hasClass('month') || angular.element(e.target).hasClass('year')) {
            combo.fillCombo('day');
          }
        });        
      }

      this.$widget.find('select').css('width', 'auto');

      // hide original input and insert widget                                       
      this.$element.css('display', 'none').after(this.$widget);
      
      // set initial value
      this.setValue(this.$element.val() || this.options.value);
    },
    
    /*
     Replace tokens in template with <select> elements 
     */         
     getTemplate: function() {
      var tpl = this.options.template;
      var customClass = this.options.customClass;

      //first pass
      angular.forEach(this.map, function(v, k) {
        v = v[0]; 
        var r = new RegExp(v+'+');
        var token = v.length > 1 ? v.substring(1, 2) : v;
        
        tpl = tpl.replace(r, '{'+token+'}');
      });

      //replace spaces with &nbsp;
      tpl = tpl.replace(/ /g, '&nbsp;');

      //second pass
      angular.forEach(this.map, function(v, k) {
        v = v[0];
        var token = v.length > 1 ? v.substring(1, 2) : v;

        tpl = tpl.replace('{'+token+'}', '<select class="'+k+' '+customClass+'"></select>');
      });   

      return tpl;
    },
    
    /*
     Initialize combos that presents in template 
     */        
     initCombos: function() {
      for (var k in this.map) {
        var c = this.$widget[0].querySelectorAll('.'+k);
        // set properties like this.$day, this.$month etc.
        this['$'+k] = c.length ? angular.element(c) : null;
        // fill with items
        this.fillCombo(k);
      }
    },

    /*
     Fill combo with items 
     */        
     fillCombo: function(k) {
      var $combo = this['$'+k];
      if (!$combo) {
        return;
      }

      // define method name to fill items, e.g `fillDays`
      var f = 'fill' + k.charAt(0).toUpperCase() + k.slice(1); 
      var items = this[f]();
      var value = $combo.val();

      $combo.html('');
      for(var i=0; i<items.length; i++) {
        $combo.append('<option value="'+items[i][0]+'">'+items[i][1]+'</option>');
      }

      $combo.val(value);
    },

    /*
     Initialize items of combos. Handles `firstItem` option 
     */
     fillCommon: function(key) {
      var values = [], relTime;

      if(this.options.firstItem === 'name') {
        //need both to support moment ver < 2 and  >= 2
        relTime = moment.relativeTime || moment.langData()._relativeTime; 
        var header = typeof relTime[key] === 'function' ? relTime[key](1, true, key, false) : relTime[key];
        //take last entry (see momentjs lang files structure) 
        header = header.split(' ').reverse()[0];                
        values.push(['', header]);
      } else if(this.options.firstItem === 'empty') {
        values.push(['', '']);
      }
      return values;
    },  


    /*
    fill day
    */
    fillDay: function() {
      var items = this.fillCommon('d'), name, i,
      twoDigit = this.options.template.indexOf('DD') !== -1,
      daysCount = 31;

      // detect days count (depends on month and year)
      // originally https://github.com/vitalets/combodate/pull/7
      if (this.options.smartDays && this.$month && this.$year) {
        var month = parseInt(this.$month.val(), 10);
        var year = parseInt(this.$year.val(), 10);

        if (!isNaN(month) && !isNaN(year)) {
          daysCount = moment([year, month]).daysInMonth();
        }
      }

      for (i = 1; i <= daysCount; i++) {
        name = twoDigit ? this.leadZero(i) : i;
        items.push([i, name]);
      }
      return items;
    },
    
    /*
    fill month
    */
    fillMonth: function() {
      var items = this.fillCommon('M'), name, i, 
      longNames = this.options.template.indexOf('MMMM') !== -1,
      shortNames = this.options.template.indexOf('MMM') !== -1,
      twoDigit = this.options.template.indexOf('MM') !== -1;

      for(i=0; i<=11; i++) {
        if(longNames) {
          //see https://github.com/timrwood/momentjs.com/pull/36
          name = moment().date(1).month(i).format('MMMM');
        } else if(shortNames) {
          name = moment().date(1).month(i).format('MMM');
        } else if(twoDigit) {
          name = this.leadZero(i+1);
        } else {
          name = i+1;
        }
        items.push([i, name]);
      } 
      return items;
    },
    
    /*
    fill year
    */
    fillYear: function() {
      var items = [], name, i, 
      longNames = this.options.template.indexOf('YYYY') !== -1;

      for(i=this.options.maxYear; i>=this.options.minYear; i--) {
        name = longNames ? i : (i+'').substring(2);
        items[this.options.yearDescending ? 'push' : 'unshift']([i, name]);
      }
      
      items = this.fillCommon('y').concat(items);
      
      return items;
    },
    
    /*
    fill hour
    */
    fillHour: function() {
      var items = this.fillCommon('h'), name, i,
      h12 = this.options.template.indexOf('h') !== -1,
      h24 = this.options.template.indexOf('H') !== -1,
      twoDigit = this.options.template.toLowerCase().indexOf('hh') !== -1,
      min = h12 ? 1 : 0, 
      max = h12 ? 12 : 23;

      for(i=min; i<=max; i++) {
        name = twoDigit ? this.leadZero(i) : i;
        items.push([i, name]);
      } 
      return items;
    },

    /*
    fill minute
    */
    fillMinute: function() {
      var items = this.fillCommon('m'), name, i,
      twoDigit = this.options.template.indexOf('mm') !== -1;

      for(i=0; i<=59; i+= this.options.minuteStep) {
        name = twoDigit ? this.leadZero(i) : i;
        items.push([i, name]);
      }
      return items;
    },
    
    /*
    fill second
    */
    fillSecond: function() {
      var items = this.fillCommon('s'), name, i,
      twoDigit = this.options.template.indexOf('ss') !== -1;

      for(i=0; i<=59; i+= this.options.secondStep) {
        name = twoDigit ? this.leadZero(i) : i;
        items.push([i, name]);
      }    
      return items;
    },
    
    /*
    fill ampm
    */
    fillAmpm: function() {
      var ampmL = this.options.template.indexOf('a') !== -1,
      ampmU = this.options.template.indexOf('A') !== -1,            
      items = [
      ['am', ampmL ? 'am' : 'AM'],
      ['pm', ampmL ? 'pm' : 'PM']
      ];
      return items;
    },

    /*
     Returns current date value from combos. 
     If format not specified - `options.format` used.
     If format = `null` - Moment object returned.
     */
     getValue: function(format) {
      var dt, values = {}, 
      that = this,
      notSelected = false;

      //getting selected values    
      angular.forEach(this.map, function(v, k) {
        if(k === 'ampm') {
          return;
        }
        var def = k === 'day' ? 1 : 0;

        values[k] = that['$'+k] ? parseInt(that['$'+k].val(), 10) : def; 
        
        if(isNaN(values[k])) {
         notSelected = true;
         return false; 
       }
     });
      
      //if at least one visible combo not selected - return empty string
      if(notSelected) {
       return '';
     }

      //convert hours 12h --> 24h 
      if(this.$ampm) {
        //12:00 pm --> 12:00 (24-h format, midday), 12:00 am --> 00:00 (24-h format, midnight, start of day)
        if(values.hour === 12) {
          values.hour = this.$ampm.val() === 'am' ? 0 : 12;                    
        } else {
          values.hour = this.$ampm.val() === 'am' ? values.hour : values.hour+12;
        }
      }
      
      dt = moment([values.year, values.month, values.day, values.hour, values.minute, values.second]);
      
      //highlight invalid date
      this.highlight(dt);

      format = format === undefined ? this.options.format : format;
      if(format === null) {
       return dt.isValid() ? dt : null; 
     } else {
       return dt.isValid() ? dt.format(format) : ''; 
     }
   },

   setValue: function(value) {
    if(!value) {
      return;
    }

      // parse in strict mode (third param `true`)
      var dt = typeof value === 'string' ? moment(value, this.options.format, true) : moment(value),
      that = this,
      values = {};
      
      //function to find nearest value in select options
      function getNearest($select, value) {
        var delta = {};
        angular.forEach($select.children('option'), function(opt, i){
          var optValue = angular.element(opt).attr('value');

          if(optValue === '') return;
          var distance = Math.abs(optValue - value); 
          if(typeof delta.distance === 'undefined' || distance < delta.distance) {
            delta = {value: optValue, distance: distance};
          } 
        }); 
        return delta.value;
      }
      
      if(dt.isValid()) {
        //read values from date object
        angular.forEach(this.map, function(v, k) {
          if(k === 'ampm') {
            return; 
          }
          values[k] = dt[v[1]]();
        });

        if(this.$ampm) {
          //12:00 pm --> 12:00 (24-h format, midday), 12:00 am --> 00:00 (24-h format, midnight, start of day)
          if(values.hour >= 12) {
            values.ampm = 'pm';
            if(values.hour > 12) {
              values.hour -= 12;
            }
          } else {
            values.ampm = 'am';
            if(values.hour === 0) {
              values.hour = 12;
            }
          }
        }

        angular.forEach(values, function(v, k) {
          //call val() for each existing combo, e.g. this.$hour.val()
          if(that['$'+k]) {

            if(k === 'minute' && that.options.minuteStep > 1 && that.options.roundTime) {
             v = getNearest(that['$'+k], v);
           }
           
           if(k === 'second' && that.options.secondStep > 1 && that.options.roundTime) {
             v = getNearest(that['$'+k], v);
           }                       
           
           that['$'+k].val(v);
         }
       });

        // update days count
        if (this.options.smartDays) {
          this.fillCombo('day');
        }

        this.$element.val(dt.format(this.options.format)).triggerHandler('change');
      }
    },
    
    /*
     highlight combos if date is invalid
     */
     highlight: function(dt) {
      if(!dt.isValid()) {
        if(this.options.errorClass) {
          this.$widget.addClass(this.options.errorClass);
        } else {
          //store original border color
          if(!this.borderColor) {
            this.borderColor = this.$widget.find('select').css('border-color'); 
          }
          this.$widget.find('select').css('border-color', 'red');
        }
      } else {
        if(this.options.errorClass) {
          this.$widget.removeClass(this.options.errorClass);
        } else {
          this.$widget.find('select').css('border-color', this.borderColor);
        }  
      }
    },
    
    leadZero: function(v) {
      return v <= 9 ? '0' + v : v; 
    },
    
    destroy: function() {
      this.$widget.remove();
      this.$element.removeData('combodate').show();
    }

  };

  return {
    getInstance: function(element, options) {
      return new Combodate(element, options);
    }
  };
}]);

/*
Editable icons:
- default
- font-awesome

*/
angular.module('xeditable').factory('editableIcons', function() {

  var icons = {
    //Icon-set to use, defaults to bootstrap icons
    default: {
      'bs2': {
        ok: 'icon-ok icon-white',
        cancel: 'icon-remove'
      },
      'bs3': {
        ok: 'glyphicon glyphicon-ok',
        cancel: 'glyphicon glyphicon-remove'
      }
    },
    external: {
      'font-awesome': {
        ok: 'fa fa-check',
        cancel: 'fa fa-times'
      }
    }
  };

  return icons;
});

/*
Editable themes:
- default
- bootstrap 2
- bootstrap 3

Note: in postrender() `this` is instance of editableController
*/
angular.module('xeditable').factory('editableThemes', function() {
  var themes = {
    //default
    'default': {
      formTpl:      '<form class="editable-wrap"></form>',
      noformTpl:    '<span class="editable-wrap"></span>',
      controlsTpl:  '<span class="editable-controls"></span>',
      inputTpl:     '',
      errorTpl:     '<div class="editable-error" ng-show="$error" ng-bind="$error"></div>',
      buttonsTpl:   '<span class="editable-buttons"></span>',
      submitTpl:    '<button type="submit">save</button>',
      cancelTpl:    '<button type="button" ng-click="$form.$cancel()">cancel</button>'
    },

    //bs2
    'bs2': {
      formTpl:     '<form class="form-inline editable-wrap" role="form"></form>',
      noformTpl:   '<span class="editable-wrap"></span>',
      controlsTpl: '<div class="editable-controls controls control-group" ng-class="{\'error\': $error}"></div>',
      inputTpl:    '',
      errorTpl:    '<div class="editable-error help-block" ng-show="$error" ng-bind="$error"></div>',
      buttonsTpl:  '<span class="editable-buttons"></span>',
      submitTpl:   '<button type="submit" class="btn btn-primary"><span></span></button>',
      cancelTpl:   '<button type="button" class="btn" ng-click="$form.$cancel()">'+
                      '<span></span>'+
                   '</button>'

    },

    //bs3
    'bs3': {
      formTpl:     '<form class="form-inline editable-wrap" role="form"></form>',
      noformTpl:   '<span class="editable-wrap"></span>',
      controlsTpl: '<div class="editable-controls form-group" ng-class="{\'has-error\': $error}"></div>',
      inputTpl:    '',
      errorTpl:    '<div class="editable-error help-block" ng-show="$error" ng-bind="$error"></div>',
      buttonsTpl:  '<span class="editable-buttons"></span>',
      submitTpl:   '<button type="submit" class="btn btn-primary"><span></span></button>',
      cancelTpl:   '<button type="button" class="btn btn-default" ng-click="$form.$cancel()">'+
                     '<span></span>'+
                   '</button>',

      //bs3 specific prop to change buttons class: btn-sm, btn-lg
      buttonsClass: '',
      //bs3 specific prop to change standard inputs class: input-sm, input-lg
      inputClass: '',
      postrender: function() {
        //apply `form-control` class to std inputs
        switch(this.directiveName) {
          case 'editableText':
          case 'editableSelect':
          case 'editableTextarea':
          case 'editableEmail':
          case 'editableTel':
          case 'editableNumber':
          case 'editableUrl':
          case 'editableSearch':
          case 'editableDate':
          case 'editableDatetime':
          case 'editableBsdate':
          case 'editableTime':
          case 'editableMonth':
          case 'editableWeek':
            this.inputEl.addClass('form-control');
            if(this.theme.inputClass) {
              // don`t apply `input-sm` and `input-lg` to select multiple
              // should be fixed in bs itself!
              if(this.inputEl.attr('multiple') &&
                (this.theme.inputClass === 'input-sm' || this.theme.inputClass === 'input-lg')) {
                  break;
              }
              this.inputEl.addClass(this.theme.inputClass);
            }
          break;
          case 'editableCheckbox':
              this.editorEl.addClass('checkbox');
        }

        //apply buttonsClass (bs3 specific!)
        if(this.buttonsEl && this.theme.buttonsClass) {
          this.buttonsEl.find('button').addClass(this.theme.buttonsClass);
        }
      }
    }
  };

  return themes;
});

/*! appverse-web-html5-core - v0.5.0 - */
!function(){"use strict";angular.module("appverse.configuration.default",["$browser"])}(),function(){"use strict";angular.module("appverse.configuration.loader",["appverse.utils"])}(),function(){"use strict";function a(a){a.info("appverse.configuration run")}
a.$inject = ["a"];angular.module("appverse.configuration",["appverse.configuration.loader"]).run(a),a.$inject=["$log"]}(),function(){"use strict";function a(a,b,c,d,e){if(e.MockBackend&&c.decorator("$httpBackend",angular.mock.e2e.$httpBackendDecorator),a.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|itms-services):/),d.exists("appverse.detection")){var f=b.get("DetectionProvider"),g=b.get("ConfigLoaderProvider");if(g.setDetection(f),d.exists("appverse.logging")){var h=b.get("FormattedLoggerProvider");h.setDetection(f)}}}
a.$inject = ["a", "b", "c", "d", "e"];function b(a,b){b.MockBackend&&a.debug("REST: You are using a MOCKED backend!")}
b.$inject = ["a", "b"];angular.module("appverse",["appverse.utils","appverse.configuration"]).config(a).run(b),a.$inject=["$compileProvider","$injector","$provide","ModuleSeekerProvider","REST_CONFIG"],b.$inject=["$log","REST_CONFIG"]}(),function(){"use strict";function a(){var a=new b,c={};this.$get=function(){return this},this.load=function(a){this.loadDefaultConfig().loadCustomConfig(a).overrideDefaultConfig()},this.setDetection=function(b){a=b},this.loadDefaultConfig=function(){return angular.forEach(angular.module("appverse.configuration.default")._invokeQueue,function(a){c[a[2][0]]=a[2][1]}),this},this.loadCustomConfig=function(a){return a&&(this.settings=a),this.loadMobileConfigIfRequired(),this.loadEnvironmentConfig(),this},this.overrideDefaultConfig=function(){angular.forEach(c,function(a,b){angular.module("appverse.configuration").constant(b,a)})},this.loadMobileConfigIfRequired=function(){a.hasAppverseMobile()?this.loadAppverseMobileConfig():a.isMobileBrowser()&&this.loadMobileBrowserConfig()},this.loadEnvironmentConfig=function(){return this.settings&&this.settings.environment?this.addConfig(this.settings.environment):this.addConfigFromJSON("resources/configuration/environment-conf.json"),this},this.loadAppverseMobileConfig=function(){return this.settings&&this.settings.appverseMobile?this.addConfig(this.settings.appverseMobile):this.addConfigFromJSON("resources/configuration/appversemobile-conf.json"),this},this.loadMobileBrowserConfig=function(){return this.settings&&this.settings.mobileBrowser?this.addConfig(this.settings.mobileBrowser):this.addConfigFromJSON("resources/configuration/mobilebrowser-conf.json"),this},this.addConfig=function(a){angular.forEach(a,function(a,b){var d=c[b];d?(angular.forEach(a,function(a,b){d[b]=a}),c[b]=d):c[b]=a})},this.addConfigFromJSON=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1),b.send(null);var c=JSON.parse(b.responseText);this.addConfig(c)}}function b(){this.hasAppverseMobile=function(){return!1},this.isMobileBrowser=function(){return!1}}function c(a){a.load({environment:{},appverseMobile:{},mobileBrowser:{}})}
c.$inject = ["a"];angular.module("appverse.configuration.loader").provider("ConfigLoader",a).config(c),c.$inject=["ConfigLoaderProvider"]}(),function(){"use strict";angular.module("appverse.configuration.default").constant("PROJECT_DATA",{ApplicationName:"Appverse Web HTML5 Incubator Demo",Version:"0.1",Company:"GFT",Year:"2013",Team:"GFT Appverse Web",URL:"",LoginViewPath:"/login",myUrl:"",VendorLibrariesBaseUrl:"bower_components"}).constant("LOGGING_CONFIG",{ServerEnabled:!1,LogServerEndpoint:"http://localhost:9000/log",CustomLogPreffix:"APPLOG",EnabledLogLevel:!0,EnabledErrorLevel:!0,EnabledDebugLevel:!0,EnabledWarnLevel:!0,EnabledInfoLevel:!0,LogDateTimeFormat:"%Y-%M-%d %h:%m:%s:%z",LogTextFormat:""}).constant("CACHE_CONFIG",{ScopeCache_Enabled:!0,DefaultScopeCacheName:"appverseScopeDataCache",ScopeCache_duration:1e4,ScopeCache_capacity:10,BrowserStorageCache_Enabled:!0,BrowserStorage_type:"2",DefaultBrowserCacheName:"appverseBrowserCache",MaxAge:9e5,CacheFlushInterval:36e5,DeleteOnExpire:"aggressive",SessionBrowserStorage:"sessionStorage",LocalBrowserStorage:"localStorage",NoBrowserStorage:"none",browserDirectCacheType:"1",VerifyIntegrity:!0,HttpCache_Enabled:!0,HttpCache_duration:2e4,HttpCache_capacity:10,IndexedDBCache_Enabled:!1,IndexedDB_name:"DefaultIDBCache",IndexedDB_version:1,IndexedDB_options:[{storeName:"structure-of-items",keyPath:"id",indexes:[{name:"name",unique:!1}]}]}).constant("SERVERPUSH_CONFIG",{BaseUrl:"http://localhost:3000",ListenedPort:"3000",Resource:"socket.io",ConnectTimeout:"10000",TryMultipleTransports:!0,Reconnect:!0,ReconnectionDelay:1e3,ReconnectionLimit:"Infinity",MaxReconnectionAttempts:5,SyncDisconnectOnUnload:!1,AutoConnect:!0,FlashPolicyPort:"",ForceNewConnection:!1}).constant("REST_CONFIG",{BaseUrl:"/api/v1",ExtraFields:[],ParentLess:!1,NoCacheHttpMethods:{get:!1,post:!0,put:!1,"delete":!0,option:!1},ElementTransformer:[],OnElemRestangularized:function(a){return a},RequestInterceptor:null,FullRequestInterceptor:null,ErrorInterceptor:function(a){console.log("ErrorInterceptor, server response:",a)},RestangularFields:{id:"id",route:"route"},MethodOverriders:[],DefaultRequestParams:{},FullResponse:!1,DefaultHeaders:{"Content-Type":"application/json","X-XSRF-TOKEN":"juan"},RequestSuffix:".json",UseCannonicalId:!1,EncodeIds:!0,DefaultContentType:"application/json",MockBackend:!1}).constant("AD_CONFIG",{ConsumerKey:"",ConsumerSecret:""}).constant("I18N_CONFIG",{PreferredLocale:"en-US",LocaleFilePattern:"angular-i18n/angular-locale_{{locale}}.js",DetectLocale:!0}).constant("SECURITY_GENERAL",{securityEnabled:!1,XSRFCSRFRequestHeaderName:"X-XSRF-TOKEN",XSRFCSRFResponseCookieName:"XSRF-TOKEN",BearerTokenResponseHeader:"access_token",BearerTokenRequestHeader:"Authorization",RefreshTokenResponseHeader:"refresh_token",BearerTokenExpiringResponseHeader:"expires_in",TokenTypeResponseHeader:"token_type",XSRFPolicyType:1,XSRFSecret:"",Headers_ContentType:"application/json",loginHTTPMethod:"POST",loginURL:"http://localhost:8080/html5-incubator-server/rest/sec/login",username:"admin",password:"admin",connected:"connected",disconnected:"disconnected",notEnabled:"Security not enabled"}).constant("SECURITY_OAUTH",{oauth2_endpoint:"appverse",clientID:"",profile:"http://localhost:8080/html5-incubator-server",scope:"resources",scopeURL:"http://localhost:8080/html5-incubator-server",scope_authorizePath:"/oauth/authorize",scope_tokenPath:"/oauth/token",scope_flow:"implicit",scope_view:"standard",scope_storage:"none",scope_template:"views/demo/security/oauth_default.html",redirectURL:"http://localhost:9000",storage:"cookies",storage_cookies:"cookies",storage_header:"header",tokenResponseHeaderName:"Authorization"}).constant("GOOGLE_AUTH",{clientID:"75169325484-8cn28d7o3dre61052o8jajfsjlnrh53i.apps.googleusercontent.com",scopeURL:"https://www.googleapis.com/auth/plus.login",requestvisibleactionsURL:"http://schemas.google.com/AddActivity",theme:"dark",cookiepolicy:"single_host_origin",revocationURL:"https://accounts.google.com/o/oauth2/revoke?token=",revocation:"revocation",manual_renovation:"manual_renovation",automatic_renovation:"automatic_renovation",tokenRenewalPolicy:"automatic_renovation"}).constant("AUTHORIZATION_DATA",{roles:["user","admin","editor"],adminRoles:["ROLE_EXAMPLE","ROLE_EXAMPLE_2","ROLE_REMOTE_LOGGING_WRITER","ROLE_USER"],users:["Jesus de Diego"],userRoleMatrix:[{user:"Jesus de Diego",roles:["ROLE_EXAMPLE","ROLE_EXAMPLE_2","ROLE_REMOTE_LOGGING_WRITER","ROLE_USER"]},{user:"Antoine Charnoz",roles:["ROLE_EXAMPLE","ROLE_EXAMPLE_2","ROLE_REMOTE_LOGGING_WRITER","ROLE_USER"]}],routesThatDontRequireAuth:["/home"],routesThatRequireAdmin:["/about"]}).constant("WEBSOCKETS_CONFIG",{WS_ECHO_URL:"ws://echo.websocket.org",WS_TYPE:"native",WS_PROTOCOL_TYPE:"none",WS_INTERVAL:30,WS_CONNECTED:"Websocket connected",WS_DISCONNECTED:"Websocket disconnected",WS_CONNECTING:"Connecting Websocket...",WS_CLOSED:"Websocket connection closed",WS_CLOSING:"Websocket connection closing...",WS_OPEN:"Websocket connection is open",WS_UNKNOWN:"Websocket status is unknown",WS_PROTOCOL_CONNECTED:"Websocket protocol connected",WS_PROTOCOL_DISCONNECTED:"Websocket protocol disconnected",WS_FAILED_CONNECTION:"Failed to open a Websocket connection",WS_NOT_SUPPORTED:"HTML5 Websockets specification is not supported in this browser.",WS_SUPPORTED:"HTML5 Websockets specification is supported in this browser."}).constant("PERFORMANCE_CONFIG",{webworker_pooled_threads:4,webworker_authorized_workers_only:!0,webworker_directory:"resources/webworkers/",webworker_authorized_workers:[{id:"w1",type:"dedicated",poolSize:4,file:"RenderImage.js"},{id:"w2",type:"dedicated",poolSize:4,file:"RestMultiRequest.js"}],webworker_dedicated_literal:"dedicated",webworker_shared_literal:"shared",webworker_Message_template:"scripts/api/directives/webworkerMessage.html"})}();var AppInit=AppInit||function(a){"use strict";function b(b){g=b;var c=a.module("appverse.configuration.loader");return c._invokeQueue.some(function(a,b){return"$injector"===a[0]&&"invoke"===a[1]?(c._invokeQueue.splice(b),!0):void 0}),c.config(f),AppInit}function c(b){var c=b||h;a.element(document).ready(function(){a.bootstrap(document,[c])})}function d(a){h=a}function e(){return a.module(h)}function f(a){a.load(g)}
f.$inject = ["a"];var g,h;return f.$inject=["ConfigLoaderProvider"],{setMainModuleName:d,setConfig:b,bootstrap:c,getMainModule:e}}(angular);
//# sourceMappingURL=appverse.min.js.map
/*! appverse-web-html5-core - v0.5.0 - */
!function(){"use strict";angular.module("appverse.router",["ui.router"]).run(["$rootScope","$state","$stateParams",function(a,b,c){a.$state=b,a.$stateParams=c}])}();
//# sourceMappingURL=appverse-router.min.js.map
/**
 * State-based routing for AngularJS
 * @version v0.2.8
 * @link http://angular-ui.github.com/
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
"undefined"!=typeof module&&"undefined"!=typeof exports&&module.exports===exports&&(module.exports="ui.router"),function(a,b,c){"use strict";function d(a,b){return H(new(H(function(){},{prototype:a})),b)}function e(a){return G(arguments,function(b){b!==a&&G(b,function(b,c){a.hasOwnProperty(c)||(a[c]=b)})}),a}function f(a,b){var c=[];for(var d in a.path){if(a.path[d]!==b.path[d])break;c.push(a.path[d])}return c}function g(a,b){if(Array.prototype.indexOf)return a.indexOf(b,Number(arguments[2])||0);var c=a.length>>>0,d=Number(arguments[2])||0;for(d=0>d?Math.ceil(d):Math.floor(d),0>d&&(d+=c);c>d;d++)if(d in a&&a[d]===b)return d;return-1}function h(a,b,c,d){var e,h=f(c,d),i={},j=[];for(var k in h)if(h[k].params&&h[k].params.length){e=h[k].params;for(var l in e)g(j,e[l])>=0||(j.push(e[l]),i[e[l]]=a[e[l]])}return H({},i,b)}function i(a,b){var c={};return G(a,function(a){var d=b[a];c[a]=null!=d?String(d):null}),c}function j(a,b,c){if(!c){c=[];for(var d in a)c.push(d)}for(var e=0;e<c.length;e++){var f=c[e];if(a[f]!=b[f])return!1}return!0}function k(a,b){var c={};return G(a,function(a){c[a]=b[a]}),c}function l(a,b){var d=1,f=2,g={},h=[],i=g,j=H(a.when(g),{$$promises:g,$$values:g});this.study=function(g){function k(a,c){if(o[c]!==f){if(n.push(c),o[c]===d)throw n.splice(0,n.indexOf(c)),new Error("Cyclic dependency: "+n.join(" -> "));if(o[c]=d,D(a))m.push(c,[function(){return b.get(a)}],h);else{var e=b.annotate(a);G(e,function(a){a!==c&&g.hasOwnProperty(a)&&k(g[a],a)}),m.push(c,a,e)}n.pop(),o[c]=f}}function l(a){return E(a)&&a.then&&a.$$promises}if(!E(g))throw new Error("'invocables' must be an object");var m=[],n=[],o={};return G(g,k),g=n=o=null,function(d,f,g){function h(){--s||(t||e(r,f.$$values),p.$$values=r,p.$$promises=!0,o.resolve(r))}function k(a){p.$$failure=a,o.reject(a)}function n(c,e,f){function i(a){l.reject(a),k(a)}function j(){if(!B(p.$$failure))try{l.resolve(b.invoke(e,g,r)),l.promise.then(function(a){r[c]=a,h()},i)}catch(a){i(a)}}var l=a.defer(),m=0;G(f,function(a){q.hasOwnProperty(a)&&!d.hasOwnProperty(a)&&(m++,q[a].then(function(b){r[a]=b,--m||j()},i))}),m||j(),q[c]=l.promise}if(l(d)&&g===c&&(g=f,f=d,d=null),d){if(!E(d))throw new Error("'locals' must be an object")}else d=i;if(f){if(!l(f))throw new Error("'parent' must be a promise returned by $resolve.resolve()")}else f=j;var o=a.defer(),p=o.promise,q=p.$$promises={},r=H({},d),s=1+m.length/3,t=!1;if(B(f.$$failure))return k(f.$$failure),p;f.$$values?(t=e(r,f.$$values),h()):(H(q,f.$$promises),f.then(h,k));for(var u=0,v=m.length;v>u;u+=3)d.hasOwnProperty(m[u])?h():n(m[u],m[u+1],m[u+2]);return p}},this.resolve=function(a,b,c,d){return this.study(a)(b,c,d)}}function m(a,b,c){this.fromConfig=function(a,b,c){return B(a.template)?this.fromString(a.template,b):B(a.templateUrl)?this.fromUrl(a.templateUrl,b):B(a.templateProvider)?this.fromProvider(a.templateProvider,b,c):null},this.fromString=function(a,b){return C(a)?a(b):a},this.fromUrl=function(c,d){return C(c)&&(c=c(d)),null==c?null:a.get(c,{cache:b}).then(function(a){return a.data})},this.fromProvider=function(a,b,d){return c.invoke(a,null,d||{params:b})}}function n(a){function b(b){if(!/^\w+(-+\w+)*$/.test(b))throw new Error("Invalid parameter name '"+b+"' in pattern '"+a+"'");if(f[b])throw new Error("Duplicate parameter name '"+b+"' in pattern '"+a+"'");f[b]=!0,j.push(b)}function c(a){return a.replace(/[\\\[\]\^$*+?.()|{}]/g,"\\$&")}var d,e=/([:*])(\w+)|\{(\w+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,f={},g="^",h=0,i=this.segments=[],j=this.params=[];this.source=a;for(var k,l,m;(d=e.exec(a))&&(k=d[2]||d[3],l=d[4]||("*"==d[1]?".*":"[^/]*"),m=a.substring(h,d.index),!(m.indexOf("?")>=0));)g+=c(m)+"("+l+")",b(k),i.push(m),h=e.lastIndex;m=a.substring(h);var n=m.indexOf("?");if(n>=0){var o=this.sourceSearch=m.substring(n);m=m.substring(0,n),this.sourcePath=a.substring(0,h+n),G(o.substring(1).split(/[&?]/),b)}else this.sourcePath=a,this.sourceSearch="";g+=c(m)+"$",i.push(m),this.regexp=new RegExp(g),this.prefix=i[0]}function o(){this.compile=function(a){return new n(a)},this.isMatcher=function(a){return E(a)&&C(a.exec)&&C(a.format)&&C(a.concat)},this.$get=function(){return this}}function p(a){function b(a){var b=/^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(a.source);return null!=b?b[1].replace(/\\(.)/g,"$1"):""}function c(a,b){return a.replace(/\$(\$|\d{1,2})/,function(a,c){return b["$"===c?0:Number(c)]})}function d(a,b,c){if(!c)return!1;var d=a.invoke(b,b,{$match:c});return B(d)?d:!0}var e=[],f=null;this.rule=function(a){if(!C(a))throw new Error("'rule' must be a function");return e.push(a),this},this.otherwise=function(a){if(D(a)){var b=a;a=function(){return b}}else if(!C(a))throw new Error("'rule' must be a function");return f=a,this},this.when=function(e,f){var g,h=D(f);if(D(e)&&(e=a.compile(e)),!h&&!C(f)&&!F(f))throw new Error("invalid 'handler' in when()");var i={matcher:function(b,c){return h&&(g=a.compile(c),c=["$match",function(a){return g.format(a)}]),H(function(a,e){return d(a,c,b.exec(e.path(),e.search()))},{prefix:D(b.prefix)?b.prefix:""})},regex:function(a,e){if(a.global||a.sticky)throw new Error("when() RegExp must not be global or sticky");return h&&(g=e,e=["$match",function(a){return c(g,a)}]),H(function(b,c){return d(b,e,a.exec(c.path()))},{prefix:b(a)})}},j={matcher:a.isMatcher(e),regex:e instanceof RegExp};for(var k in j)if(j[k])return this.rule(i[k](e,f));throw new Error("invalid 'what' in when()")},this.$get=["$location","$rootScope","$injector",function(a,b,c){function d(b){function d(b){var d=b(c,a);return d?(D(d)&&a.replace().url(d),!0):!1}if(!b||!b.defaultPrevented){var g,h=e.length;for(g=0;h>g;g++)if(d(e[g]))return;f&&d(f)}}return b.$on("$locationChangeSuccess",d),{sync:function(){d()}}}]}function q(a,e,f){function g(a){return 0===a.indexOf(".")||0===a.indexOf("^")}function l(a,b){var d=D(a),e=d?a:a.name,f=g(e);if(f){if(!b)throw new Error("No reference point given for path '"+e+"'");for(var h=e.split("."),i=0,j=h.length,k=b;j>i;i++)if(""!==h[i]||0!==i){if("^"!==h[i])break;if(!k.parent)throw new Error("Path '"+e+"' not valid for state '"+b.name+"'");k=k.parent}else k=b;h=h.slice(i).join("."),e=k.name+(k.name&&h?".":"")+h}var l=u[e];return!l||!d&&(d||l!==a&&l.self!==a)?c:l}function m(a,b){v[a]||(v[a]=[]),v[a].push(b)}function n(b){b=d(b,{self:b,resolve:b.resolve||{},toString:function(){return this.name}});var c=b.name;if(!D(c)||c.indexOf("@")>=0)throw new Error("State must have a valid name");if(u.hasOwnProperty(c))throw new Error("State '"+c+"'' is already defined");var e=-1!==c.indexOf(".")?c.substring(0,c.lastIndexOf(".")):D(b.parent)?b.parent:"";if(e&&!u[e])return m(e,b.self);for(var f in x)C(x[f])&&(b[f]=x[f](b,x.$delegates[f]));if(u[c]=b,!b[w]&&b.url&&a.when(b.url,["$match","$stateParams",function(a,c){t.$current.navigable==b&&j(a,c)||t.transitionTo(b,a,{location:!1})}]),v[c])for(var g=0;g<v[c].length;g++)n(v[c][g]);return b}function o(a,b){return D(a)&&!B(b)?x[a]:C(b)&&D(a)?(x[a]&&!x.$delegates[a]&&(x.$delegates[a]=x[a]),x[a]=b,this):this}function p(a,b){return E(a)?b=a:b.name=a,n(b),this}function q(a,e,g,m,n,o,p){function q(){p.url()!==D&&(p.url(D),p.replace())}function v(a,c,d,f,h){var i=d?c:k(a.params,c),j={$stateParams:i};h.resolve=n.resolve(a.resolve,j,h.resolve,a);var l=[h.resolve.then(function(a){h.globals=a})];return f&&l.push(f),G(a.views,function(c,d){var e=c.resolve&&c.resolve!==a.resolve?c.resolve:{};e.$template=[function(){return g.load(d,{view:c,locals:j,params:i,notify:!1})||""}],l.push(n.resolve(e,j,h.resolve,a).then(function(f){if(C(c.controllerProvider)||F(c.controllerProvider)){var g=b.extend({},e,j);f.$$controller=m.invoke(c.controllerProvider,null,g)}else f.$$controller=c.controller;f.$$state=a,h[d]=f}))}),e.all(l).then(function(){return h})}var x=e.reject(new Error("transition superseded")),y=e.reject(new Error("transition prevented")),z=e.reject(new Error("transition aborted")),A=e.reject(new Error("transition failed")),D=p.url();return s.locals={resolve:null,globals:{$stateParams:{}}},t={params:{},current:s.self,$current:s,transition:null},t.reload=function(){t.transitionTo(t.current,o,{reload:!0,inherit:!1,notify:!1})},t.go=function(a,b,c){return this.transitionTo(a,b,H({inherit:!0,relative:t.$current},c))},t.transitionTo=function(b,c,f){c=c||{},f=H({location:!0,inherit:!1,relative:null,notify:!0,reload:!1,$retry:!1},f||{});var g,k=t.$current,n=t.params,u=k.path,C=l(b,f.relative);if(!B(C)){var E={to:b,toParams:c,options:f};if(g=a.$broadcast("$stateNotFound",E,k.self,n),g.defaultPrevented)return q(),z;if(g.retry){if(f.$retry)return q(),A;var F=t.transition=e.when(g.retry);return F.then(function(){return F!==t.transition?x:(E.options.$retry=!0,t.transitionTo(E.to,E.toParams,E.options))},function(){return z}),q(),F}if(b=E.to,c=E.toParams,f=E.options,C=l(b,f.relative),!B(C)){if(f.relative)throw new Error("Could not resolve '"+b+"' from state '"+f.relative+"'");throw new Error("No such state '"+b+"'")}}if(C[w])throw new Error("Cannot transition to abstract state '"+b+"'");f.inherit&&(c=h(o,c||{},t.$current,C)),b=C;var G,J,K=b.path,L=s.locals,M=[];for(G=0,J=K[G];J&&J===u[G]&&j(c,n,J.ownParams)&&!f.reload;G++,J=K[G])L=M[G]=J.locals;if(r(b,k,L,f))return b.self.reloadOnSearch!==!1&&q(),t.transition=null,e.when(t.current);if(c=i(b.params,c||{}),f.notify&&(g=a.$broadcast("$stateChangeStart",b.self,c,k.self,n),g.defaultPrevented))return q(),y;for(var N=e.when(L),O=G;O<K.length;O++,J=K[O])L=M[O]=d(L),N=v(J,c,J===b,N,L);var P=t.transition=N.then(function(){var d,e,g;if(t.transition!==P)return x;for(d=u.length-1;d>=G;d--)g=u[d],g.self.onExit&&m.invoke(g.self.onExit,g.self,g.locals.globals),g.locals=null;for(d=G;d<K.length;d++)e=K[d],e.locals=M[d],e.self.onEnter&&m.invoke(e.self.onEnter,e.self,e.locals.globals);if(t.transition!==P)return x;t.$current=b,t.current=b.self,t.params=c,I(t.params,o),t.transition=null;var h=b.navigable;return f.location&&h&&(p.url(h.url.format(h.locals.globals.$stateParams)),"replace"===f.location&&p.replace()),f.notify&&a.$broadcast("$stateChangeSuccess",b.self,c,k.self,n),D=p.url(),t.current},function(d){return t.transition!==P?x:(t.transition=null,a.$broadcast("$stateChangeError",b.self,c,k.self,n,d),q(),e.reject(d))});return P},t.is=function(a,d){var e=l(a);return B(e)?t.$current!==e?!1:B(d)&&null!==d?b.equals(o,d):!0:c},t.includes=function(a,d){var e=l(a);if(!B(e))return c;if(!B(t.$current.includes[e.name]))return!1;var f=!0;return b.forEach(d,function(a,b){B(o[b])&&o[b]===a||(f=!1)}),f},t.href=function(a,b,c){c=H({lossy:!0,inherit:!1,absolute:!1,relative:t.$current},c||{});var d=l(a,c.relative);if(!B(d))return null;b=h(o,b||{},t.$current,d);var e=d&&c.lossy?d.navigable:d,g=e&&e.url?e.url.format(i(d.params,b||{})):null;return!f.html5Mode()&&g&&(g="#"+f.hashPrefix()+g),c.absolute&&g&&(g=p.protocol()+"://"+p.host()+(80==p.port()||443==p.port()?"":":"+p.port())+(!f.html5Mode()&&g?"/":"")+g),g},t.get=function(a,b){if(!B(a)){var c=[];return G(u,function(a){c.push(a.self)}),c}var d=l(a,b);return d&&d.self?d.self:null},t}function r(a,b,c,d){return a!==b||(c!==b.locals||d.reload)&&a.self.reloadOnSearch!==!1?void 0:!0}var s,t,u={},v={},w="abstract",x={parent:function(a){if(B(a.parent)&&a.parent)return l(a.parent);var b=/^(.+)\.[^.]+$/.exec(a.name);return b?l(b[1]):s},data:function(a){return a.parent&&a.parent.data&&(a.data=a.self.data=H({},a.parent.data,a.data)),a.data},url:function(a){var b=a.url;if(D(b))return"^"==b.charAt(0)?e.compile(b.substring(1)):(a.parent.navigable||s).url.concat(b);if(e.isMatcher(b)||null==b)return b;throw new Error("Invalid url '"+b+"' in state '"+a+"'")},navigable:function(a){return a.url?a:a.parent?a.parent.navigable:null},params:function(a){if(!a.params)return a.url?a.url.parameters():a.parent.params;if(!F(a.params))throw new Error("Invalid params in state '"+a+"'");if(a.url)throw new Error("Both params and url specicified in state '"+a+"'");return a.params},views:function(a){var b={};return G(B(a.views)?a.views:{"":a},function(c,d){d.indexOf("@")<0&&(d+="@"+a.parent.name),b[d]=c}),b},ownParams:function(a){if(!a.parent)return a.params;var b={};G(a.params,function(a){b[a]=!0}),G(a.parent.params,function(c){if(!b[c])throw new Error("Missing required parameter '"+c+"' in state '"+a.name+"'");b[c]=!1});var c=[];return G(b,function(a,b){a&&c.push(b)}),c},path:function(a){return a.parent?a.parent.path.concat(a):[]},includes:function(a){var b=a.parent?H({},a.parent.includes):{};return b[a.name]=!0,b},$delegates:{}};s=n({name:"",url:"^",views:null,"abstract":!0}),s.navigable=null,this.decorator=o,this.state=p,this.$get=q,q.$inject=["$rootScope","$q","$view","$injector","$resolve","$stateParams","$location","$urlRouter"]}function r(){function a(a,b){return{load:function(c,d){var e,f={template:null,controller:null,view:null,locals:null,notify:!0,async:!0,params:{}};return d=H(f,d),d.view&&(e=b.fromConfig(d.view,d.params,d.locals)),e&&d.notify&&a.$broadcast("$viewContentLoading",d),e}}}this.$get=a,a.$inject=["$rootScope","$templateFactory"]}function s(){var a=!1;this.useAnchorScroll=function(){a=!0},this.$get=["$anchorScroll","$timeout",function(b,c){return a?b:function(a){c(function(){a[0].scrollIntoView()},0,!1)}}]}function t(a,c,d,e,f,g){function h(){return e.has?function(a){return e.has(a)?e.get(a):null}:function(a){try{return e.get(a)}catch(b){return null}}}function i(a,b,c){var d=function(){return{leave:function(a){a.remove()},enter:function(a,b,c){c.after(a)}}};if(m)return function(a){return a?{enter:function(a,b,c){m.enter(a,null,c)},leave:function(a){m.leave(a,function(){a.remove()})}}:d()};if(l){var e=l&&l(c,b);return function(a){return a?{enter:function(a,b){e.enter(a,b)},leave:function(a){e.leave(a.contents(),a)}}:d()}}return d}var j=!1,k=h(),l=k("$animator"),m=k("$animate"),n={restrict:"ECA",compile:function(e,h){var k=e.html(),l=!0,m=b.element(g[0].createComment(" ui-view-anchor ")),o=e.parent();return e.prepend(m),function(g){function p(){s&&(y(!0).leave(s),s=null),r&&(r.$destroy(),r=null)}function q(h){var i=a.$current&&a.$current.locals[v];if(l&&(l=!1,e.replaceWith(m)),!i)return p(),s=e.clone(),s.html(k),y(h).enter(s,o,m),r=g.$new(),c(s.contents())(r),void 0;if(i!==t){p(),s=e.clone(),s.html(i.$template?i.$template:k),y(!0).enter(s,o,m),s.data("$uiView",z),t=i,z.state=i.$$state;var j=c(s.contents());if(r=g.$new(),i.$$controller){i.$scope=r;var n=d(i.$$controller,i);s.children().data("$ngControllerController",n)}j(r),r.$emit("$viewContentLoaded"),w&&r.$eval(w),b.isDefined(x)&&x&&!g.$eval(x)||f(s)}}var r,s,t,u=o.inheritedData("$uiView"),v=h[n.name]||h.name||"",w=h.onload||"",x=h.autoscroll,y=i(e,h,g);v.indexOf("@")<0&&(v=v+"@"+(u?u.state.name:""));var z={name:v,state:null},A=function(){if(!j){j=!0;try{q(!0)}catch(a){throw j=!1,a}j=!1}};g.$on("$stateChangeSuccess",A),g.$on("$viewContentLoading",A),q(!1)}}};return n}function u(a){var b=a.replace(/\n/g," ").match(/^([^(]+?)\s*(\((.*)\))?$/);if(!b||4!==b.length)throw new Error("Invalid state ref '"+a+"'");return{state:b[1],paramExpr:b[3]||null}}function v(a){var b=a.parent().inheritedData("$uiView");return b&&b.state&&b.state.name?b.state:void 0}function w(a,b){return{restrict:"A",require:"?^uiSrefActive",link:function(c,d,e,f){var g=u(e.uiSref),h=null,i=v(d)||a.$current,j="FORM"===d[0].nodeName,k=j?"action":"href",l=!0,m=function(b){if(b&&(h=b),l){var c=a.href(g.state,h,{relative:i});return f&&f.$$setStateInfo(g.state,h),c?(d[0][k]=c,void 0):(l=!1,!1)}};g.paramExpr&&(c.$watch(g.paramExpr,function(a){a!==h&&m(a)},!0),h=c.$eval(g.paramExpr)),m(),j||d.bind("click",function(c){var e=c.which||c.button;0!==e&&1!=e||c.ctrlKey||c.metaKey||c.shiftKey||d.attr("target")||(b(function(){a.go(g.state,h,{relative:i})}),c.preventDefault())})}}}function x(a,b,c){return{restrict:"A",controller:["$scope","$element","$attrs",function(d,e,f){function g(){a.$current.self===i&&h()?e.addClass(l):e.removeClass(l)}function h(){return!k||j(k,b)}var i,k,l;l=c(f.uiSrefActive||"",!1)(d),this.$$setStateInfo=function(b,c){i=a.get(b,v(e)),k=c,g()},d.$on("$stateChangeSuccess",g)}]}}function y(a){return function(b){return a.is(b)}}function z(a){return function(b){return a.includes(b)}}function A(a,b){function e(a){this.locals=a.locals.globals,this.params=this.locals.$stateParams}function f(){this.locals=null,this.params=null}function g(c,g){if(null!=g.redirectTo){var h,j=g.redirectTo;if(D(j))h=j;else{if(!C(j))throw new Error("Invalid 'redirectTo' in when()");h=function(a,b){return j(a,b.path(),b.search())}}b.when(c,h)}else a.state(d(g,{parent:null,name:"route:"+encodeURIComponent(c),url:c,onEnter:e,onExit:f}));return i.push(g),this}function h(a,b,d){function e(a){return""!==a.name?a:c}var f={routes:i,params:d,current:c};return b.$on("$stateChangeStart",function(a,c,d,f){b.$broadcast("$routeChangeStart",e(c),e(f))}),b.$on("$stateChangeSuccess",function(a,c,d,g){f.current=e(c),b.$broadcast("$routeChangeSuccess",e(c),e(g)),I(d,f.params)}),b.$on("$stateChangeError",function(a,c,d,f,g,h){b.$broadcast("$routeChangeError",e(c),e(f),h)}),f}var i=[];e.$inject=["$$state"],this.when=g,this.$get=h,h.$inject=["$state","$rootScope","$routeParams"]}var B=b.isDefined,C=b.isFunction,D=b.isString,E=b.isObject,F=b.isArray,G=b.forEach,H=b.extend,I=b.copy;b.module("ui.router.util",["ng"]),b.module("ui.router.router",["ui.router.util"]),b.module("ui.router.state",["ui.router.router","ui.router.util"]),b.module("ui.router",["ui.router.state"]),b.module("ui.router.compat",["ui.router"]),l.$inject=["$q","$injector"],b.module("ui.router.util").service("$resolve",l),m.$inject=["$http","$templateCache","$injector"],b.module("ui.router.util").service("$templateFactory",m),n.prototype.concat=function(a){return new n(this.sourcePath+a+this.sourceSearch)},n.prototype.toString=function(){return this.source},n.prototype.exec=function(a,b){var c=this.regexp.exec(a);if(!c)return null;var d,e=this.params,f=e.length,g=this.segments.length-1,h={};if(g!==c.length-1)throw new Error("Unbalanced capture group in route '"+this.source+"'");for(d=0;g>d;d++)h[e[d]]=c[d+1];for(;f>d;d++)h[e[d]]=b[e[d]];return h},n.prototype.parameters=function(){return this.params},n.prototype.format=function(a){var b=this.segments,c=this.params;if(!a)return b.join("");var d,e,f,g=b.length-1,h=c.length,i=b[0];for(d=0;g>d;d++)f=a[c[d]],null!=f&&(i+=encodeURIComponent(f)),i+=b[d+1];for(;h>d;d++)f=a[c[d]],null!=f&&(i+=(e?"&":"?")+c[d]+"="+encodeURIComponent(f),e=!0);return i},b.module("ui.router.util").provider("$urlMatcherFactory",o),p.$inject=["$urlMatcherFactoryProvider"],b.module("ui.router.router").provider("$urlRouter",p),q.$inject=["$urlRouterProvider","$urlMatcherFactoryProvider","$locationProvider"],b.module("ui.router.state").value("$stateParams",{}).provider("$state",q),r.$inject=[],b.module("ui.router.state").provider("$view",r),b.module("ui.router.state").provider("$uiViewScroll",s),t.$inject=["$state","$compile","$controller","$injector","$uiViewScroll","$document"],b.module("ui.router.state").directive("uiView",t),w.$inject=["$state","$timeout"],x.$inject=["$state","$stateParams","$interpolate"],b.module("ui.router.state").directive("uiSref",w).directive("uiSrefActive",x),y.$inject=["$state"],z.$inject=["$state"],b.module("ui.router.state").filter("isState",y).filter("includedByState",z),A.$inject=["$stateProvider","$urlRouterProvider"],b.module("ui.router.compat").provider("$route",A).directive("ngView",t)}(window,window.angular);
/*! appverse-web-html5-core - v0.5.0 - */
!function(){"use strict";angular.module("appverse.utils",["appverse.configuration"])}(),function(a){"use strict";function b(){this.$get=function(){return this},this.setBasePath=function(a){return new c(a)}}function c(a){function b(a){return"/"===a.slice(-1)}function c(a){return"/"===a.slice(0,1)}function d(a){return a.slice(0,-1)}function e(a){return a.slice(1)}a=a||"",a=a.trim(a),this.$get=function(){return this},this.inUrl=function(f){return f=f.trim(f),b(a)&&(a=d(a)),c(f)&&(f=e(f)),a+"/"+f}}a.module("appverse.utils").provider("BaseUrlSetter",b)}(angular),function(a){"use strict";function b(){this.$get=function(){return this}}a.module("appverse.utils").provider("ModuleSeeker",b),b.prototype.exists=function(b){try{return a.module(b),!0}catch(c){return!1}}}(angular),function(){"use strict";angular.module("appverse.utils").factory("Base64",function(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";return{encode:function(b){var c,d,e,f,g,h="",i="",j="",k=0;do c=b.charCodeAt(k++),d=b.charCodeAt(k++),i=b.charCodeAt(k++),e=c>>2,f=(3&c)<<4|d>>4,g=(15&d)<<2|i>>6,j=63&i,isNaN(d)?g=j=64:isNaN(i)&&(j=64),h=h+a.charAt(e)+a.charAt(f)+a.charAt(g)+a.charAt(j),c=d=i="",e=f=g=j="";while(k<b.length);return h},decode:function(b){var c,d,e,f,g,h="",i="",j="",k=0,l=/[^A-Za-z0-9\+\/\=]/g;l.exec(b)&&alert("There were invalid base64 characters in the input text.\nValid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\nExpect errors in decoding."),b=b.replace(/[^A-Za-z0-9\+\/\=]/g,"");do e=a.indexOf(b.charAt(k++)),f=a.indexOf(b.charAt(k++)),g=a.indexOf(b.charAt(k++)),j=a.indexOf(b.charAt(k++)),c=e<<2|f>>4,d=(15&f)<<4|g>>2,i=(3&g)<<6|j,h+=String.fromCharCode(c),64!=g&&(h+=String.fromCharCode(d)),64!=j&&(h+=String.fromCharCode(i)),c=d=i="",e=f=g=j="";while(k<b.length);return h}}})}(),function(){"use strict";angular.module("appverse.utils").factory("UtilFactory",function(){var a={};return a.findPropertyValueByName=function(a,b,c){for(var d=0;d<a.length;d++)if(a[d].area==b)for(var e=0;e<a[d].properties.length;e++)if(a[d].properties[e].property==c)return a[d].properties[e].value;return null},a.newRandomKey=function(a,b,c){var d;do d=a[Math.floor(a.length*Math.random())][b];while(d===c);return d},a})}();
//# sourceMappingURL=appverse-utils.min.js.map
/*!
 * angular-ripple.js v0.0.5 - A standalone AngularJS implementation of the Google Material Design ripple effect.
 * Copyright (c) 2014 Nelson Cash - http://github.com/nelsoncash/angular-ripple
 * http://codepen.io/MikeMcChillin/pen/XJrLwg
 * License: MIT
 */

(function(window, angular, undefined) {
  'use strict';

  if(!angular) {
    return;
  }

  var rip = angular.module('angularRipple', []);

  rip.directive('angularRipple', function() {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        var x, y, size, offsets,
          func = function(e){
            var ripple = this.querySelector('.angular-ripple');
            var eventType = e.type;
            // Ripple
            if (ripple === null) {
              // Create ripple
              ripple = document.createElement('span');
              ripple.className += ' angular-ripple';

              // Prepend ripple to element
              this.insertBefore(ripple, this.firstChild);

              // Set ripple size
              if (!ripple.offsetHeight && !ripple.offsetWidth) {
                size = Math.max(element[0].offsetWidth, element[0].offsetHeight);
                ripple.style.width = size + 'px';
                ripple.style.height = size + 'px';
              }
            }

            // Remove animation effect
            ripple.className = ripple.className.replace(/ ?(animate)/g, '');

            // get click coordinates by event type
            if (eventType === 'mouseup') {
              x = e.pageX;
              y = e.pageY;
            } else if (eventType === 'touchend') {
              try {
                var origEvent;

                if (typeof e.changedTouches !== 'undefined') {
                  origEvent = e.changedTouches[0];
                } else {
                  origEvent = e.originalEvent;
                }

                x = origEvent.pageX;
                y = origEvent.pageY;
              } catch (e) {
                // fall back to center of el
                x = ripple.offsetWidth / 2;
                y = ripple.offsetHeight / 2;
              }
            }

            // set new ripple position by click or touch position
            function getPos(element) {
              var de = document.documentElement;
              var box = element.getBoundingClientRect();
              var top = box.top + window.pageYOffset - de.clientTop;
              var left = box.left + window.pageXOffset - de.clientLeft;
              return { top: top, left: left };
            }

            offsets = getPos(element[0]);
            ripple.style.left = (x - offsets.left - size / 2) + 'px';
            ripple.style.top = (y - offsets.top - size / 2) + 'px';

            // Add animation effect
            ripple.className += ' animate';
          }

        element.on('touchend mouseup', func);

        //remove the event listener on scope destroy
        scope.$on('$destroy',function() {
          element.off('touchend mouseup', func);
        });
      }
    };
  });
})(window, window.angular);
/*!
 * ui-select
 * http://github.com/angular-ui/ui-select
 * Version: 0.12.1 - 2015-07-28T03:50:59.076Z
 * License: MIT
 */
!function(){"use strict";var e={TAB:9,ENTER:13,ESC:27,SPACE:32,LEFT:37,UP:38,RIGHT:39,DOWN:40,SHIFT:16,CTRL:17,ALT:18,PAGE_UP:33,PAGE_DOWN:34,HOME:36,END:35,BACKSPACE:8,DELETE:46,COMMAND:91,MAP:{91:"COMMAND",8:"BACKSPACE",9:"TAB",13:"ENTER",16:"SHIFT",17:"CTRL",18:"ALT",19:"PAUSEBREAK",20:"CAPSLOCK",27:"ESC",32:"SPACE",33:"PAGE_UP",34:"PAGE_DOWN",35:"END",36:"HOME",37:"LEFT",38:"UP",39:"RIGHT",40:"DOWN",43:"+",44:"PRINTSCREEN",45:"INSERT",46:"DELETE",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",59:";",61:"=",65:"A",66:"B",67:"C",68:"D",69:"E",70:"F",71:"G",72:"H",73:"I",74:"J",75:"K",76:"L",77:"M",78:"N",79:"O",80:"P",81:"Q",82:"R",83:"S",84:"T",85:"U",86:"V",87:"W",88:"X",89:"Y",90:"Z",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9",106:"*",107:"+",109:"-",110:".",111:"/",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NUMLOCK",145:"SCROLLLOCK",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},isControl:function(t){var c=t.which;switch(c){case e.COMMAND:case e.SHIFT:case e.CTRL:case e.ALT:return!0}return t.metaKey?!0:!1},isFunctionKey:function(e){return e=e.which?e.which:e,e>=112&&123>=e},isVerticalMovement:function(t){return~[e.UP,e.DOWN].indexOf(t)},isHorizontalMovement:function(t){return~[e.LEFT,e.RIGHT,e.BACKSPACE,e.DELETE].indexOf(t)}};void 0===angular.element.prototype.querySelectorAll&&(angular.element.prototype.querySelectorAll=function(e){return angular.element(this[0].querySelectorAll(e))}),void 0===angular.element.prototype.closest&&(angular.element.prototype.closest=function(e){for(var t=this[0],c=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.msMatchesSelector;t;){if(c.bind(t)(e))return t;t=t.parentElement}return!1});var t=0,c=angular.module("ui.select",[]).constant("uiSelectConfig",{theme:"bootstrap",searchEnabled:!0,sortable:!1,placeholder:"",refreshDelay:1e3,closeOnSelect:!0,generateId:function(){return t++},appendToBody:!1}).service("uiSelectMinErr",function(){var e=angular.$$minErr("ui.select");return function(){var t=e.apply(this,arguments),c=t.message.replace(new RegExp("\nhttp://errors.angularjs.org/.*"),"");return new Error(c)}}).directive("uisTranscludeAppend",function(){return{link:function(e,t,c,i,l){l(e,function(e){t.append(e)})}}}).filter("highlight",function(){function e(e){return e.replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")}return function(t,c){return c&&t?t.replace(new RegExp(e(c),"gi"),'<span class="ui-select-highlight">$&</span>'):t}}).factory("uisOffset",["$document","$window",function(e,t){return function(c){var i=c[0].getBoundingClientRect();return{width:i.width||c.prop("offsetWidth"),height:i.height||c.prop("offsetHeight"),top:i.top+(t.pageYOffset||e[0].documentElement.scrollTop),left:i.left+(t.pageXOffset||e[0].documentElement.scrollLeft)}}}]);c.directive("uiSelectChoices",["uiSelectConfig","uisRepeatParser","uiSelectMinErr","$compile",function(e,t,c,i){return{restrict:"EA",require:"^uiSelect",replace:!0,transclude:!0,templateUrl:function(t){var c=t.parent().attr("theme")||e.theme;return c+"/choices.tpl.html"},compile:function(l,s){if(!s.repeat)throw c("repeat","Expected 'repeat' expression.");return function(l,s,n,a,r){var o=n.groupBy,u=n.groupFilter;if(a.parseRepeatAttr(n.repeat,o,u),a.disableChoiceExpression=n.uiDisableChoice,a.onHighlightCallback=n.onHighlight,o){var d=s.querySelectorAll(".ui-select-choices-group");if(1!==d.length)throw c("rows","Expected 1 .ui-select-choices-group but got '{0}'.",d.length);d.attr("ng-repeat",t.getGroupNgRepeatExpression())}var p=s.querySelectorAll(".ui-select-choices-row");if(1!==p.length)throw c("rows","Expected 1 .ui-select-choices-row but got '{0}'.",p.length);p.attr("ng-repeat",t.getNgRepeatExpression(a.parserResult.itemName,"$select.items",a.parserResult.trackByExp,o)).attr("ng-if","$select.open").attr("ng-mouseenter","$select.setActiveItem("+a.parserResult.itemName+")").attr("ng-click","$select.select("+a.parserResult.itemName+",false,$event)");var g=s.querySelectorAll(".ui-select-choices-row-inner");if(1!==g.length)throw c("rows","Expected 1 .ui-select-choices-row-inner but got '{0}'.",g.length);g.attr("uis-transclude-append",""),i(s,r)(l),l.$watch("$select.search",function(e){e&&!a.open&&a.multiple&&a.activate(!1,!0),a.activeIndex=a.tagging.isActivated?-1:0,a.refresh(n.refresh)}),n.$observe("refreshDelay",function(){var t=l.$eval(n.refreshDelay);a.refreshDelay=void 0!==t?t:e.refreshDelay})}}}}]),c.controller("uiSelectCtrl",["$scope","$element","$timeout","$filter","uisRepeatParser","uiSelectMinErr","uiSelectConfig",function(t,c,i,l,s,n,a){function r(){(p.resetSearchInput||void 0===p.resetSearchInput&&a.resetSearchInput)&&(p.search=g,p.selected&&p.items.length&&!p.multiple&&(p.activeIndex=p.items.indexOf(p.selected)))}function o(e,t){var c,i,l=[];for(c=0;c<t.length;c++)for(i=0;i<e.length;i++)e[i].name==[t[c]]&&l.push(e[i]);return l}function u(t){var c=!0;switch(t){case e.DOWN:!p.open&&p.multiple?p.activate(!1,!0):p.activeIndex<p.items.length-1&&p.activeIndex++;break;case e.UP:!p.open&&p.multiple?p.activate(!1,!0):(p.activeIndex>0||0===p.search.length&&p.tagging.isActivated&&p.activeIndex>-1)&&p.activeIndex--;break;case e.TAB:(!p.multiple||p.open)&&p.select(p.items[p.activeIndex],!0);break;case e.ENTER:p.open&&(p.tagging.isActivated||p.activeIndex>=0)?p.select(p.items[p.activeIndex]):p.activate(!1,!0);break;case e.ESC:p.close();break;default:c=!1}return c}function d(){var e=c.querySelectorAll(".ui-select-choices-content"),t=e.querySelectorAll(".ui-select-choices-row");if(t.length<1)throw n("choices","Expected multiple .ui-select-choices-row but got '{0}'.",t.length);if(!(p.activeIndex<0)){var i=t[p.activeIndex],l=i.offsetTop+i.clientHeight-e[0].scrollTop,s=e[0].offsetHeight;l>s?e[0].scrollTop+=l-s:l<i.clientHeight&&(p.isGrouped&&0===p.activeIndex?e[0].scrollTop=0:e[0].scrollTop-=i.clientHeight-l)}}var p=this,g="";if(p.placeholder=a.placeholder,p.searchEnabled=a.searchEnabled,p.sortable=a.sortable,p.refreshDelay=a.refreshDelay,p.removeSelected=!1,p.closeOnSelect=!0,p.search=g,p.activeIndex=0,p.items=[],p.open=!1,p.focus=!1,p.disabled=!1,p.selected=void 0,p.focusser=void 0,p.resetSearchInput=!0,p.multiple=void 0,p.disableChoiceExpression=void 0,p.tagging={isActivated:!1,fct:void 0},p.taggingTokens={isActivated:!1,tokens:void 0},p.lockChoiceExpression=void 0,p.clickTriggeredSelect=!1,p.$filter=l,p.searchInput=c.querySelectorAll("input.ui-select-search"),1!==p.searchInput.length)throw n("searchInput","Expected 1 input.ui-select-search but got '{0}'.",p.searchInput.length);p.isEmpty=function(){return angular.isUndefined(p.selected)||null===p.selected||""===p.selected},p.activate=function(e,c){p.disabled||p.open||(c||r(),t.$broadcast("uis:activate"),p.open=!0,p.activeIndex=p.activeIndex>=p.items.length?0:p.activeIndex,-1===p.activeIndex&&p.taggingLabel!==!1&&(p.activeIndex=0),i(function(){p.search=e||p.search,p.searchInput[0].focus()}))},p.findGroupByName=function(e){return p.groups&&p.groups.filter(function(t){return t.name===e})[0]},p.parseRepeatAttr=function(e,c,i){function l(e){var l=t.$eval(c);if(p.groups=[],angular.forEach(e,function(e){var t=angular.isFunction(l)?l(e):e[l],c=p.findGroupByName(t);c?c.items.push(e):p.groups.push({name:t,items:[e]})}),i){var s=t.$eval(i);angular.isFunction(s)?p.groups=s(p.groups):angular.isArray(s)&&(p.groups=o(p.groups,s))}p.items=[],p.groups.forEach(function(e){p.items=p.items.concat(e.items)})}function a(e){p.items=e}p.setItemsFn=c?l:a,p.parserResult=s.parse(e),p.isGrouped=!!c,p.itemProperty=p.parserResult.itemName,p.refreshItems=function(e){e=e||p.parserResult.source(t);var c=p.selected;if(angular.isArray(c)&&!c.length||!p.removeSelected)p.setItemsFn(e);else if(void 0!==e){var i=e.filter(function(e){return c.indexOf(e)<0});p.setItemsFn(i)}},t.$watchCollection(p.parserResult.source,function(e){if(void 0===e||null===e)p.items=[];else{if(!angular.isArray(e))throw n("items","Expected an array but got '{0}'.",e);p.refreshItems(e),p.ngModel.$modelValue=null}})};var h;p.refresh=function(e){void 0!==e&&(h&&i.cancel(h),h=i(function(){t.$eval(e)},p.refreshDelay))},p.setActiveItem=function(e){p.activeIndex=p.items.indexOf(e)},p.isActive=function(e){if(!p.open)return!1;var t=p.items.indexOf(e[p.itemProperty]),c=t===p.activeIndex;return!c||0>t&&p.taggingLabel!==!1||0>t&&p.taggingLabel===!1?!1:(c&&!angular.isUndefined(p.onHighlightCallback)&&e.$eval(p.onHighlightCallback),c)},p.isDisabled=function(e){if(p.open){var t,c=p.items.indexOf(e[p.itemProperty]),i=!1;return c>=0&&!angular.isUndefined(p.disableChoiceExpression)&&(t=p.items[c],i=!!e.$eval(p.disableChoiceExpression),t._uiSelectChoiceDisabled=i),i}},p.select=function(e,c,l){if(void 0===e||!e._uiSelectChoiceDisabled){if(!p.items&&!p.search)return;if(!e||!e._uiSelectChoiceDisabled){if(p.tagging.isActivated){if(p.taggingLabel===!1)if(p.activeIndex<0){if(e=void 0!==p.tagging.fct?p.tagging.fct(p.search):p.search,!e||angular.equals(p.items[0],e))return}else e=p.items[p.activeIndex];else if(0===p.activeIndex){if(void 0===e)return;if(void 0!==p.tagging.fct&&"string"==typeof e){if(e=p.tagging.fct(p.search),!e)return}else"string"==typeof e&&(e=e.replace(p.taggingLabel,"").trim())}if(p.selected&&angular.isArray(p.selected)&&p.selected.filter(function(t){return angular.equals(t,e)}).length>0)return p.close(c),void 0}t.$broadcast("uis:select",e);var s={};s[p.parserResult.itemName]=e,i(function(){p.onSelectCallback(t,{$item:e,$model:p.parserResult.modelMapper(t,s)})}),p.closeOnSelect&&p.close(c),l&&"click"===l.type&&(p.clickTriggeredSelect=!0)}}},p.close=function(e){p.open&&(p.ngModel&&p.ngModel.$setTouched&&p.ngModel.$setTouched(),r(),p.open=!1,t.$broadcast("uis:close",e))},p.setFocus=function(){p.focus||p.focusInput[0].focus()},p.clear=function(e){p.select(void 0),e.stopPropagation(),i(function(){p.focusser[0].focus()},0,!1)},p.toggle=function(e){p.open?(p.close(),e.preventDefault(),e.stopPropagation()):p.activate()},p.isLocked=function(e,t){var c,i=p.selected[t];return i&&!angular.isUndefined(p.lockChoiceExpression)&&(c=!!e.$eval(p.lockChoiceExpression),i._uiSelectChoiceLocked=c),c};var f=null;p.sizeSearchInput=function(){var e=p.searchInput[0],c=p.searchInput.parent().parent()[0],l=function(){return c.clientWidth*!!e.offsetParent},s=function(t){if(0===t)return!1;var c=t-e.offsetLeft-10;return 50>c&&(c=t),p.searchInput.css("width",c+"px"),!0};p.searchInput.css("width","10px"),i(function(){null!==f||s(l())||(f=t.$watch(l,function(e){s(e)&&(f(),f=null)}))})},p.searchInput.on("keydown",function(c){var l=c.which;t.$apply(function(){var t=!1;if((p.items.length>0||p.tagging.isActivated)&&(u(l),p.taggingTokens.isActivated)){for(var s=0;s<p.taggingTokens.tokens.length;s++)p.taggingTokens.tokens[s]===e.MAP[c.keyCode]&&p.search.length>0&&(t=!0);t&&i(function(){p.searchInput.triggerHandler("tagged");var t=p.search.replace(e.MAP[c.keyCode],"").trim();p.tagging.fct&&(t=p.tagging.fct(t)),t&&p.select(t,!0)})}}),e.isVerticalMovement(l)&&p.items.length>0&&d(),(l===e.ENTER||l===e.ESC)&&(c.preventDefault(),c.stopPropagation())}),p.searchInput.on("paste",function(e){var t=e.originalEvent.clipboardData.getData("text/plain");if(t&&t.length>0&&p.taggingTokens.isActivated&&p.tagging.fct){var c=t.split(p.taggingTokens.tokens[0]);c&&c.length>0&&(angular.forEach(c,function(e){var t=p.tagging.fct(e);t&&p.select(t,!0)}),e.preventDefault(),e.stopPropagation())}}),p.searchInput.on("tagged",function(){i(function(){r()})}),t.$on("$destroy",function(){p.searchInput.off("keyup keydown tagged blur paste")})}]),c.directive("uiSelect",["$document","uiSelectConfig","uiSelectMinErr","uisOffset","$compile","$parse","$timeout",function(e,t,c,i,l,s,n){return{restrict:"EA",templateUrl:function(e,c){var i=c.theme||t.theme;return i+(angular.isDefined(c.multiple)?"/select-multiple.tpl.html":"/select.tpl.html")},replace:!0,transclude:!0,require:["uiSelect","^ngModel"],scope:!0,controller:"uiSelectCtrl",controllerAs:"$select",compile:function(l,a){return angular.isDefined(a.multiple)?l.append("<ui-select-multiple/>").removeAttr("multiple"):l.append("<ui-select-single/>"),function(l,a,r,o,u){function d(e){if(h.open){var t=!1;if(t=window.jQuery?window.jQuery.contains(a[0],e.target):a[0].contains(e.target),!t&&!h.clickTriggeredSelect){var c=["input","button","textarea"],i=angular.element(e.target).scope(),s=i&&i.$select&&i.$select!==h;s||(s=~c.indexOf(e.target.tagName.toLowerCase())),h.close(s),l.$digest()}h.clickTriggeredSelect=!1}}function p(){var t=i(a);m=angular.element('<div class="ui-select-placeholder"></div>'),m[0].style.width=t.width+"px",m[0].style.height=t.height+"px",a.after(m),$=a[0].style.width,e.find("body").append(a),a[0].style.position="absolute",a[0].style.left=t.left+"px",a[0].style.top=t.top+"px",a[0].style.width=t.width+"px"}function g(){null!==m&&(m.replaceWith(a),m=null,a[0].style.position="",a[0].style.left="",a[0].style.top="",a[0].style.width=$)}var h=o[0],f=o[1];h.generatedId=t.generateId(),h.baseTitle=r.title||"Select box",h.focusserTitle=h.baseTitle+" focus",h.focusserId="focusser-"+h.generatedId,h.closeOnSelect=function(){return angular.isDefined(r.closeOnSelect)?s(r.closeOnSelect)():t.closeOnSelect}(),h.onSelectCallback=s(r.onSelect),h.onRemoveCallback=s(r.onRemove),h.ngModel=f,h.choiceGrouped=function(e){return h.isGrouped&&e&&e.name},r.tabindex&&r.$observe("tabindex",function(e){h.focusInput.attr("tabindex",e),a.removeAttr("tabindex")}),l.$watch("searchEnabled",function(){var e=l.$eval(r.searchEnabled);h.searchEnabled=void 0!==e?e:t.searchEnabled}),l.$watch("sortable",function(){var e=l.$eval(r.sortable);h.sortable=void 0!==e?e:t.sortable}),r.$observe("disabled",function(){h.disabled=void 0!==r.disabled?r.disabled:!1}),r.$observe("resetSearchInput",function(){var e=l.$eval(r.resetSearchInput);h.resetSearchInput=void 0!==e?e:!0}),r.$observe("tagging",function(){if(void 0!==r.tagging){var e=l.$eval(r.tagging);h.tagging={isActivated:!0,fct:e!==!0?e:void 0}}else h.tagging={isActivated:!1,fct:void 0}}),r.$observe("taggingLabel",function(){void 0!==r.tagging&&(h.taggingLabel="false"===r.taggingLabel?!1:void 0!==r.taggingLabel?r.taggingLabel:"(new)")}),r.$observe("taggingTokens",function(){if(void 0!==r.tagging){var e=void 0!==r.taggingTokens?r.taggingTokens.split("|"):[",","ENTER"];h.taggingTokens={isActivated:!0,tokens:e}}}),angular.isDefined(r.autofocus)&&n(function(){h.setFocus()}),angular.isDefined(r.focusOn)&&l.$on(r.focusOn,function(){n(function(){h.setFocus()})}),e.on("click",d),l.$on("$destroy",function(){e.off("click",d)}),u(l,function(e){var t=angular.element("<div>").append(e),i=t.querySelectorAll(".ui-select-match");if(i.removeAttr("ui-select-match"),i.removeAttr("data-ui-select-match"),1!==i.length)throw c("transcluded","Expected 1 .ui-select-match but got '{0}'.",i.length);a.querySelectorAll(".ui-select-match").replaceWith(i);var l=t.querySelectorAll(".ui-select-choices");if(l.removeAttr("ui-select-choices"),l.removeAttr("data-ui-select-choices"),1!==l.length)throw c("transcluded","Expected 1 .ui-select-choices but got '{0}'.",l.length);a.querySelectorAll(".ui-select-choices").replaceWith(l)});var v=l.$eval(r.appendToBody);(void 0!==v?v:t.appendToBody)&&(l.$watch("$select.open",function(e){e?p():g()}),l.$on("$destroy",function(){g()}));var m=null,$="",b=null,x="direction-up";l.$watch("$select.open",function(t){if(t){if(b=angular.element(a).querySelectorAll(".ui-select-dropdown"),null===b)return;b[0].style.opacity=0,n(function(){var t=i(a),c=i(b);t.top+t.height+c.height>e[0].documentElement.scrollTop+e[0].documentElement.clientHeight&&(b[0].style.position="absolute",b[0].style.top=-1*c.height+"px",a.addClass(x)),b[0].style.opacity=1})}else{if(null===b)return;b[0].style.position="",b[0].style.top="",a.removeClass(x)}})}}}}]),c.directive("uiSelectMatch",["uiSelectConfig",function(e){return{restrict:"EA",require:"^uiSelect",replace:!0,transclude:!0,templateUrl:function(t){var c=t.parent().attr("theme")||e.theme,i=t.parent().attr("multiple");return c+(i?"/match-multiple.tpl.html":"/match.tpl.html")},link:function(t,c,i,l){function s(e){l.allowClear=angular.isDefined(e)?""===e?!0:"true"===e.toLowerCase():!1}l.lockChoiceExpression=i.uiLockChoice,i.$observe("placeholder",function(t){l.placeholder=void 0!==t?t:e.placeholder}),i.$observe("allowClear",s),s(i.allowClear),l.multiple&&l.sizeSearchInput()}}}]),c.directive("uiSelectMultiple",["uiSelectMinErr","$timeout",function(t,c){return{restrict:"EA",require:["^uiSelect","^ngModel"],controller:["$scope","$timeout",function(e,t){var c,i=this,l=e.$select;e.$evalAsync(function(){c=e.ngModel}),i.activeMatchIndex=-1,i.updateModel=function(){c.$setViewValue(Date.now()),i.refreshComponent()},i.refreshComponent=function(){l.refreshItems(),l.sizeSearchInput()},i.removeChoice=function(c){var s=l.selected[c];if(!s._uiSelectChoiceLocked){var n={};n[l.parserResult.itemName]=s,l.selected.splice(c,1),i.activeMatchIndex=-1,l.sizeSearchInput(),t(function(){l.onRemoveCallback(e,{$item:s,$model:l.parserResult.modelMapper(e,n)})}),i.updateModel()}},i.getPlaceholder=function(){return l.selected.length?void 0:l.placeholder}}],controllerAs:"$selectMultiple",link:function(i,l,s,n){function a(e){return angular.isNumber(e.selectionStart)?e.selectionStart:e.value.length}function r(t){function c(){switch(t){case e.LEFT:return~g.activeMatchIndex?u:n;case e.RIGHT:return~g.activeMatchIndex&&r!==n?o:(d.activate(),!1);case e.BACKSPACE:return~g.activeMatchIndex?(g.removeChoice(r),u):n;case e.DELETE:return~g.activeMatchIndex?(g.removeChoice(g.activeMatchIndex),r):!1}}var i=a(d.searchInput[0]),l=d.selected.length,s=0,n=l-1,r=g.activeMatchIndex,o=g.activeMatchIndex+1,u=g.activeMatchIndex-1,p=r;return i>0||d.search.length&&t==e.RIGHT?!1:(d.close(),p=c(),g.activeMatchIndex=d.selected.length&&p!==!1?Math.min(n,Math.max(s,p)):-1,!0)}function o(e){if(void 0===e||void 0===d.search)return!1;var t=e.filter(function(e){return void 0===d.search.toUpperCase()||void 0===e?!1:e.toUpperCase()===d.search.toUpperCase()}).length>0;return t}function u(e,t){var c=-1;if(angular.isArray(e))for(var i=angular.copy(e),l=0;l<i.length;l++)if(void 0===d.tagging.fct)i[l]+" "+d.taggingLabel===t&&(c=l);else{var s=i[l];s.isTag=!0,angular.equals(s,t)&&(c=l)}return c}var d=n[0],p=i.ngModel=n[1],g=i.$selectMultiple;d.multiple=!0,d.removeSelected=!0,d.focusInput=d.searchInput,p.$parsers.unshift(function(){for(var e,t={},c=[],l=d.selected.length-1;l>=0;l--)t={},t[d.parserResult.itemName]=d.selected[l],e=d.parserResult.modelMapper(i,t),c.unshift(e);return c}),p.$formatters.unshift(function(e){var t,c=d.parserResult.source(i,{$select:{search:""}}),l={};if(!c)return e;var s=[],n=function(e,c){if(e&&e.length){for(var n=e.length-1;n>=0;n--){if(l[d.parserResult.itemName]=e[n],t=d.parserResult.modelMapper(i,l),d.parserResult.trackByExp){var a=/\.(.+)/.exec(d.parserResult.trackByExp);if(a.length>0&&t[a[1]]==c[a[1]])return s.unshift(e[n]),!0}if(angular.equals(t,c))return s.unshift(e[n]),!0}return!1}};if(!e)return s;for(var a=e.length-1;a>=0;a--)n(d.selected,e[a])||n(c,e[a])||s.unshift(e[a]);return s}),i.$watchCollection(function(){return p.$modelValue},function(e,t){t!=e&&(p.$modelValue=null,g.refreshComponent())}),p.$render=function(){if(!angular.isArray(p.$viewValue)){if(!angular.isUndefined(p.$viewValue)&&null!==p.$viewValue)throw t("multiarr","Expected model value to be array but got '{0}'",p.$viewValue);d.selected=[]}d.selected=p.$viewValue,i.$evalAsync()},i.$on("uis:select",function(e,t){d.selected.push(t),g.updateModel()}),i.$on("uis:activate",function(){g.activeMatchIndex=-1}),i.$watch("$select.disabled",function(e,t){t&&!e&&d.sizeSearchInput()}),d.searchInput.on("keydown",function(t){var c=t.which;i.$apply(function(){var i=!1;e.isHorizontalMovement(c)&&(i=r(c)),i&&c!=e.TAB&&(t.preventDefault(),t.stopPropagation())})}),d.searchInput.on("keyup",function(t){if(e.isVerticalMovement(t.which)||i.$evalAsync(function(){d.activeIndex=d.taggingLabel===!1?-1:0}),d.tagging.isActivated&&d.search.length>0){if(t.which===e.TAB||e.isControl(t)||e.isFunctionKey(t)||t.which===e.ESC||e.isVerticalMovement(t.which))return;if(d.activeIndex=d.taggingLabel===!1?-1:0,d.taggingLabel===!1)return;var c,l,s,n,a=angular.copy(d.items),r=angular.copy(d.items),p=!1,g=-1;if(void 0!==d.tagging.fct){if(s=d.$filter("filter")(a,{isTag:!0}),s.length>0&&(n=s[0]),a.length>0&&n&&(p=!0,a=a.slice(1,a.length),r=r.slice(1,r.length)),c=d.tagging.fct(d.search),c.isTag=!0,r.filter(function(e){return angular.equals(e,d.tagging.fct(d.search))}).length>0)return;c.isTag=!0}else{if(s=d.$filter("filter")(a,function(e){return e.match(d.taggingLabel)}),s.length>0&&(n=s[0]),l=a[0],void 0!==l&&a.length>0&&n&&(p=!0,a=a.slice(1,a.length),r=r.slice(1,r.length)),c=d.search+" "+d.taggingLabel,u(d.selected,d.search)>-1)return;if(o(r.concat(d.selected)))return p&&(a=r,i.$evalAsync(function(){d.activeIndex=0,d.items=a})),void 0;if(o(r))return p&&(d.items=r.slice(1,r.length)),void 0}p&&(g=u(d.selected,c)),g>-1?a=a.slice(g+1,a.length-1):(a=[],a.push(c),a=a.concat(r)),i.$evalAsync(function(){d.activeIndex=0,d.items=a})}}),d.searchInput.on("blur",function(){c(function(){g.activeMatchIndex=-1})})}}}]),c.directive("uiSelectSingle",["$timeout","$compile",function(t,c){return{restrict:"EA",require:["^uiSelect","^ngModel"],link:function(i,l,s,n){var a=n[0],r=n[1];r.$parsers.unshift(function(e){var t,c={};return c[a.parserResult.itemName]=e,t=a.parserResult.modelMapper(i,c)}),r.$formatters.unshift(function(e){var t,c=a.parserResult.source(i,{$select:{search:""}}),l={};if(c){var s=function(c){return l[a.parserResult.itemName]=c,t=a.parserResult.modelMapper(i,l),t==e};if(a.selected&&s(a.selected))return a.selected;for(var n=c.length-1;n>=0;n--)if(s(c[n]))return c[n]}return e}),i.$watch("$select.selected",function(e){r.$viewValue!==e&&r.$setViewValue(e)}),r.$render=function(){a.selected=r.$viewValue},i.$on("uis:select",function(e,t){a.selected=t}),i.$on("uis:close",function(e,c){t(function(){a.focusser.prop("disabled",!1),c||a.focusser[0].focus()},0,!1)}),i.$on("uis:activate",function(){o.prop("disabled",!0)});var o=angular.element("<input ng-disabled='$select.disabled' class='ui-select-focusser ui-select-offscreen' type='text' id='{{ $select.focusserId }}' aria-label='{{ $select.focusserTitle }}' aria-haspopup='true' role='button' />");c(o)(i),a.focusser=o,a.focusInput=o,l.parent().append(o),o.bind("focus",function(){i.$evalAsync(function(){a.focus=!0})}),o.bind("blur",function(){i.$evalAsync(function(){a.focus=!1})}),o.bind("keydown",function(t){return t.which===e.BACKSPACE?(t.preventDefault(),t.stopPropagation(),a.select(void 0),i.$apply(),void 0):(t.which===e.TAB||e.isControl(t)||e.isFunctionKey(t)||t.which===e.ESC||((t.which==e.DOWN||t.which==e.UP||t.which==e.ENTER||t.which==e.SPACE)&&(t.preventDefault(),t.stopPropagation(),a.activate()),i.$digest()),void 0)}),o.bind("keyup input",function(t){t.which===e.TAB||e.isControl(t)||e.isFunctionKey(t)||t.which===e.ESC||t.which==e.ENTER||t.which===e.BACKSPACE||(a.activate(o.val()),o.val(""),i.$digest())})}}}]),c.directive("uiSelectSort",["$timeout","uiSelectConfig","uiSelectMinErr",function(e,t,c){return{require:"^uiSelect",link:function(t,i,l,s){if(null===t[l.uiSelectSort])throw c("sort","Expected a list to sort");var n=angular.extend({axis:"horizontal"},t.$eval(l.uiSelectSortOptions)),a=n.axis,r="dragging",o="dropping",u="dropping-before",d="dropping-after";t.$watch(function(){return s.sortable},function(e){e?i.attr("draggable",!0):i.removeAttr("draggable")}),i.on("dragstart",function(e){i.addClass(r),(e.dataTransfer||e.originalEvent.dataTransfer).setData("text/plain",t.$index)}),i.on("dragend",function(){i.removeClass(r)});var p,g=function(e,t){this.splice(t,0,this.splice(e,1)[0])},h=function(e){e.preventDefault();var t="vertical"===a?e.offsetY||e.layerY||(e.originalEvent?e.originalEvent.offsetY:0):e.offsetX||e.layerX||(e.originalEvent?e.originalEvent.offsetX:0);t<this["vertical"===a?"offsetHeight":"offsetWidth"]/2?(i.removeClass(d),i.addClass(u)):(i.removeClass(u),i.addClass(d))},f=function(t){t.preventDefault();var c=parseInt((t.dataTransfer||t.originalEvent.dataTransfer).getData("text/plain"),10);e.cancel(p),p=e(function(){v(c)},20)},v=function(e){var c=t.$eval(l.uiSelectSort),s=c[e],n=null;n=i.hasClass(u)?e<t.$index?t.$index-1:t.$index:e<t.$index?t.$index:t.$index+1,g.apply(c,[e,n]),t.$apply(function(){t.$emit("uiSelectSort:change",{array:c,item:s,from:e,to:n})}),i.removeClass(o),i.removeClass(u),i.removeClass(d),i.off("drop",f)};i.on("dragenter",function(){i.hasClass(r)||(i.addClass(o),i.on("dragover",h),i.on("drop",f))}),i.on("dragleave",function(e){e.target==i&&(i.removeClass(o),i.removeClass(u),i.removeClass(d),i.off("dragover",h),i.off("drop",f))})}}}]),c.service("uisRepeatParser",["uiSelectMinErr","$parse",function(e,t){var c=this;c.parse=function(c){var i=c.match(/^\s*(?:([\s\S]+?)\s+as\s+)?([\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!i)throw e("iexp","Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.",c);return{itemName:i[2],source:t(i[3]),trackByExp:i[4],modelMapper:t(i[1]||i[2])}},c.getGroupNgRepeatExpression=function(){return"$group in $select.groups"},c.getNgRepeatExpression=function(e,t,c,i){var l=e+" in "+(i?"$group.items":t);return c&&(l+=" track by "+c),l}}])}(),angular.module("ui.select").run(["$templateCache",function(e){e.put("bootstrap/choices.tpl.html",'<ul class="ui-select-choices ui-select-choices-content ui-select-dropdown dropdown-menu" role="listbox" ng-show="$select.items.length > 0"><li class="ui-select-choices-group" id="ui-select-choices-{{ $select.generatedId }}"><div class="divider" ng-show="$select.isGrouped && $index > 0"></div><div ng-show="$select.isGrouped" class="ui-select-choices-group-label dropdown-header" ng-bind="$group.name"></div><div id="ui-select-choices-row-{{ $select.generatedId }}-{{$index}}" class="ui-select-choices-row" ng-class="{active: $select.isActive(this), disabled: $select.isDisabled(this)}" role="option"><a href="javascript:void(0)" class="ui-select-choices-row-inner"></a></div></li></ul>'),e.put("bootstrap/match-multiple.tpl.html",'<span class="ui-select-match"><span ng-repeat="$item in $select.selected"><span class="ui-select-match-item btn btn-default btn-xs" tabindex="-1" type="button" ng-disabled="$select.disabled" ng-click="$selectMultiple.activeMatchIndex = $index;" ng-class="{\'btn-primary\':$selectMultiple.activeMatchIndex === $index, \'select-locked\':$select.isLocked(this, $index)}" ui-select-sort="$select.selected"><span class="close ui-select-match-close" ng-hide="$select.disabled" ng-click="$selectMultiple.removeChoice($index)">&nbsp;&times;</span> <span uis-transclude-append=""></span></span></span></span>'),e.put("bootstrap/match.tpl.html",'<div class="ui-select-match" ng-hide="$select.open" ng-disabled="$select.disabled" ng-class="{\'btn-default-focus\':$select.focus}"><span tabindex="-1" class="btn btn-default form-control ui-select-toggle" aria-label="{{ $select.baseTitle }} activate" ng-disabled="$select.disabled" ng-click="$select.activate()" style="outline: 0;"><span ng-show="$select.isEmpty()" class="ui-select-placeholder text-muted">{{$select.placeholder}}</span> <span ng-hide="$select.isEmpty()" class="ui-select-match-text pull-left" ng-class="{\'ui-select-allow-clear\': $select.allowClear && !$select.isEmpty()}" ng-transclude=""></span> <i class="caret pull-right" ng-click="$select.toggle($event)"></i> <a ng-show="$select.allowClear && !$select.isEmpty()" aria-label="{{ $select.baseTitle }} clear" style="margin-right: 10px" ng-click="$select.clear($event)" class="btn btn-xs btn-link pull-right"><i class="glyphicon glyphicon-remove" aria-hidden="true"></i></a></span></div>'),e.put("bootstrap/select-multiple.tpl.html",'<div class="ui-select-container ui-select-multiple ui-select-bootstrap dropdown form-control" ng-class="{open: $select.open}"><div><div class="ui-select-match"></div><input type="text" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" class="ui-select-search input-xs" placeholder="{{$selectMultiple.getPlaceholder()}}" ng-disabled="$select.disabled" ng-hide="$select.disabled" ng-click="$select.activate()" ng-model="$select.search" role="combobox" aria-label="{{ $select.baseTitle }}" ondrop="return false;"></div><div class="ui-select-choices"></div></div>'),e.put("bootstrap/select.tpl.html",'<div class="ui-select-container ui-select-bootstrap dropdown" ng-class="{open: $select.open}"><div class="ui-select-match"></div><input type="text" autocomplete="off" tabindex="-1" aria-expanded="true" aria-label="{{ $select.baseTitle }}" aria-owns="ui-select-choices-{{ $select.generatedId }}" aria-activedescendant="ui-select-choices-row-{{ $select.generatedId }}-{{ $select.activeIndex }}" class="form-control ui-select-search" placeholder="{{$select.placeholder}}" ng-model="$select.search" ng-show="$select.searchEnabled && $select.open"><div class="ui-select-choices"></div></div>'),e.put("select2/choices.tpl.html",'<ul class="ui-select-choices ui-select-choices-content select2-results"><li class="ui-select-choices-group" ng-class="{\'select2-result-with-children\': $select.choiceGrouped($group) }"><div ng-show="$select.choiceGrouped($group)" class="ui-select-choices-group-label select2-result-label" ng-bind="$group.name"></div><ul role="listbox" id="ui-select-choices-{{ $select.generatedId }}" ng-class="{\'select2-result-sub\': $select.choiceGrouped($group), \'select2-result-single\': !$select.choiceGrouped($group) }"><li role="option" id="ui-select-choices-row-{{ $select.generatedId }}-{{$index}}" class="ui-select-choices-row" ng-class="{\'select2-highlighted\': $select.isActive(this), \'select2-disabled\': $select.isDisabled(this)}"><div class="select2-result-label ui-select-choices-row-inner"></div></li></ul></li></ul>'),e.put("select2/match-multiple.tpl.html",'<span class="ui-select-match"><li class="ui-select-match-item select2-search-choice" ng-repeat="$item in $select.selected" ng-class="{\'select2-search-choice-focus\':$selectMultiple.activeMatchIndex === $index, \'select2-locked\':$select.isLocked(this, $index)}" ui-select-sort="$select.selected"><span uis-transclude-append=""></span> <a href="javascript:;" class="ui-select-match-close select2-search-choice-close" ng-click="$selectMultiple.removeChoice($index)" tabindex="-1"></a></li></span>'),e.put("select2/match.tpl.html",'<a class="select2-choice ui-select-match" ng-class="{\'select2-default\': $select.isEmpty()}" ng-click="$select.toggle($event)" aria-label="{{ $select.baseTitle }} select"><span ng-show="$select.isEmpty()" class="select2-chosen">{{$select.placeholder}}</span> <span ng-hide="$select.isEmpty()" class="select2-chosen" ng-transclude=""></span> <abbr ng-if="$select.allowClear && !$select.isEmpty()" class="select2-search-choice-close" ng-click="$select.clear($event)"></abbr> <span class="select2-arrow ui-select-toggle"><b></b></span></a>'),e.put("select2/select-multiple.tpl.html",'<div class="ui-select-container ui-select-multiple select2 select2-container select2-container-multi" ng-class="{\'select2-container-active select2-dropdown-open open\': $select.open, \'select2-container-disabled\': $select.disabled}"><ul class="select2-choices"><span class="ui-select-match"></span><li class="select2-search-field"><input type="text" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="combobox" aria-expanded="true" aria-owns="ui-select-choices-{{ $select.generatedId }}" aria-label="{{ $select.baseTitle }}" aria-activedescendant="ui-select-choices-row-{{ $select.generatedId }}-{{ $select.activeIndex }}" class="select2-input ui-select-search" placeholder="{{$selectMultiple.getPlaceholder()}}" ng-disabled="$select.disabled" ng-hide="$select.disabled" ng-model="$select.search" ng-click="$select.activate()" style="width: 34px;" ondrop="return false;"></li></ul><div class="ui-select-dropdown select2-drop select2-with-searchbox select2-drop-active" ng-class="{\'select2-display-none\': !$select.open}"><div class="ui-select-choices"></div></div></div>'),e.put("select2/select.tpl.html",'<div class="ui-select-container select2 select2-container" ng-class="{\'select2-container-active select2-dropdown-open open\': $select.open, \'select2-container-disabled\': $select.disabled, \'select2-container-active\': $select.focus, \'select2-allowclear\': $select.allowClear && !$select.isEmpty()}"><div class="ui-select-match"></div><div class="ui-select-dropdown select2-drop select2-with-searchbox select2-drop-active" ng-class="{\'select2-display-none\': !$select.open}"><div class="select2-search" ng-show="$select.searchEnabled"><input type="text" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="combobox" aria-expanded="true" aria-owns="ui-select-choices-{{ $select.generatedId }}" aria-label="{{ $select.baseTitle }}" aria-activedescendant="ui-select-choices-row-{{ $select.generatedId }}-{{ $select.activeIndex }}" class="ui-select-search select2-input" ng-model="$select.search"></div><div class="ui-select-choices"></div></div></div>'),e.put("selectize/choices.tpl.html",'<div ng-show="$select.open" class="ui-select-choices ui-select-dropdown selectize-dropdown single"><div class="ui-select-choices-content selectize-dropdown-content"><div class="ui-select-choices-group optgroup" role="listbox"><div ng-show="$select.isGrouped" class="ui-select-choices-group-label optgroup-header" ng-bind="$group.name"></div><div role="option" class="ui-select-choices-row" ng-class="{active: $select.isActive(this), disabled: $select.isDisabled(this)}"><div class="option ui-select-choices-row-inner" data-selectable=""></div></div></div></div></div>'),e.put("selectize/match.tpl.html",'<div ng-hide="($select.open || $select.isEmpty())" class="ui-select-match" ng-transclude=""></div>'),e.put("selectize/select.tpl.html",'<div class="ui-select-container selectize-control single" ng-class="{\'open\': $select.open}"><div class="selectize-input" ng-class="{\'focus\': $select.open, \'disabled\': $select.disabled, \'selectize-focus\' : $select.focus}" ng-click="$select.activate()"><div class="ui-select-match"></div><input type="text" autocomplete="off" tabindex="-1" class="ui-select-search ui-select-toggle" ng-click="$select.toggle($event)" placeholder="{{$select.placeholder}}" ng-model="$select.search" ng-hide="!$select.searchEnabled || ($select.selected && !$select.open)" ng-disabled="$select.disabled" aria-label="{{ $select.baseTitle }}"></div><div class="ui-select-choices"></div></div>')
}]);
/*! jusas-angularjs-slider - v0.1.36 - (c) Rafal Zajac <rzajac@gmail.com>, Valentin Hervieu <valentin@hervieu.me>, Jussi Saarivirta <jusasi@gmail.com>, Angelin Sirbu <angelin.sirbu@gmail.com>, https://github.com/rzajac/angularjs-slider.git - 2015-10-12 */
!function(a,b){"use strict";"function"==typeof define&&define.amd?define(["angular"],b):"object"==typeof module&&module.exports?module.exports=b(require("angular")):b(a.angular)}(this,function(a){"use strict";var b=a.module("rzModule",[]).value("throttle",function(a,b,c){var d,e,f,g=Date.now||function(){return(new Date).getTime()},h=null,i=0;c=c||{};var j=function(){i=c.leading===!1?0:g(),h=null,f=a.apply(d,e),d=e=null};return function(){var k=g();i||c.leading!==!1||(i=k);var l=b-(k-i);return d=this,e=arguments,0>=l?(clearTimeout(h),h=null,i=k,f=a.apply(d,e),d=e=null):h||c.trailing===!1||(h=setTimeout(j,l)),f}}).factory("RzSlider",["$timeout","$document","$window","throttle",function(b,c,d,e){var f=function(a,b,c){this.scope=a,this.attributes=c,this.sliderElem=b,this.range=void 0!==c.rzSliderHigh&&void 0!==c.rzSliderModel,this.dragRange=this.range&&"true"===c.rzSliderDraggableRange,this.dragging={active:!1,value:0,difference:0,offset:0,lowDist:0,highDist:0},this.handleHalfWidth=0,this.alwaysShowBar=!!c.rzSliderAlwaysShowBar,this.maxLeft=0,this.precision=0,this.step=0,this.tracking="",this.minValue=0,this.maxValue=0,this.hideLimitLabels=!!c.rzSliderHideLimitLabels,this.presentOnly="true"===c.rzSliderPresentOnly,this.showTicks=c.rzSliderShowTicks||c.rzSliderShowTicksValue,this.showTicksValue=c.rzSliderShowTicksValue,this.disabled=this.scope.rzSliderDisabled,this.valueRange=0,this.initHasRun=!1,this.customTrFn=this.scope.rzSliderTranslate()||function(a){return String(a)},this.deRegFuncs=[],this.fullBar=null,this.selBar=null,this.minH=null,this.maxH=null,this.flrLab=null,this.ceilLab=null,this.minLab=null,this.maxLab=null,this.cmbLab=null,this.ticks=null,this.init()};return f.prototype={init:function(){var c,f,g,h=a.bind(this,this.calcViewDimensions),i=this;this.initElemHandles(),this.addAccessibility(),this.setDisabledState(),this.calcViewDimensions(),this.setMinAndMax(),this.precision=void 0===this.scope.rzSliderPrecision?0:+this.scope.rzSliderPrecision,this.step=void 0===this.scope.rzSliderStep?1:+this.scope.rzSliderStep,b(function(){i.updateCeilLab(),i.updateFloorLab(),i.initHandles(),i.bindEvents()}),g=this.scope.$on("reCalcViewDimensions",h),this.deRegFuncs.push(g),a.element(d).on("resize",h),this.initHasRun=!0,c=e(function(){i.setMinAndMax(),i.updateLowHandle(i.valueToOffset(i.scope.rzSliderModel)),i.updateSelectionBar(),i.updateTicksScale(),i.range&&i.updateCmbLabel()},350,{leading:!1}),f=e(function(){i.setMinAndMax(),i.updateHighHandle(i.valueToOffset(i.scope.rzSliderHigh)),i.updateSelectionBar(),i.updateTicksScale(),i.updateCmbLabel()},350,{leading:!1}),this.scope.$on("rzSliderForceRender",function(){i.resetLabelsValue(),c(),i.range&&f(),i.resetSlider()}),g=this.scope.$watch("rzSliderModel",function(a,b){a!==b&&c()}),this.deRegFuncs.push(g),g=this.scope.$watch("rzSliderHigh",function(a,b){a!==b&&f()}),this.deRegFuncs.push(g),this.scope.$watch("rzSliderFloor",function(a,b){a!==b&&i.resetSlider()}),this.deRegFuncs.push(g),g=this.scope.$watch("rzSliderCeil",function(a,b){a!==b&&i.resetSlider()}),this.deRegFuncs.push(g),g=this.scope.$watch("rzSliderShowTicks",function(a,b){a!==b&&i.resetSlider()}),this.deRegFuncs.push(g),g=this.scope.$watch("rzSliderShowTicksValue",function(a,b){a!==b&&i.resetSlider()}),this.deRegFuncs.push(g),g=this.scope.$watch("rzSliderDisabled",function(a,b){a!==b&&(i.resetSlider(),i.disabled?i.unbindEvents():i.bindEvents())}),this.deRegFuncs.push(g),this.scope.$on("$destroy",function(){i.unbindEvents(),a.element(d).off("resize",h),i.deRegFuncs.map(function(a){a()})})},resetSlider:function(){this.setMinAndMax(),this.updateCeilLab(),this.updateFloorLab(),this.setDisabledState(),this.calcViewDimensions()},setDisabledState:function(){this.disabled=this.scope.rzSliderDisabled,this.disabled?this.sliderElem.attr("disabled","disabled"):this.sliderElem.attr("disabled",null)},resetLabelsValue:function(){this.minLab.rzsv=void 0,this.maxLab.rzsv=void 0},initHandles:function(){this.updateLowHandle(this.valueToOffset(this.scope.rzSliderModel)),this.range&&(this.updateHighHandle(this.valueToOffset(this.scope.rzSliderHigh)),this.updateCmbLabel()),this.updateSelectionBar(),this.updateTicksScale()},translateFn:function(a,b,c){c=void 0===c?!0:c;var d=(c?this.customTrFn(a):a).toString(),e=!1;(void 0===b.rzsv||b.rzsv.length!==d.length||b.rzsv.length>0&&0===b.rzsw)&&(e=!0,b.rzsv=d),b.text(d),e&&this.getWidth(b)},setMinAndMax:function(){this.scope.rzSliderFloor?this.minValue=+this.scope.rzSliderFloor:this.minValue=this.scope.rzSliderFloor=0,this.scope.rzSliderCeil?this.maxValue=+this.scope.rzSliderCeil:this.maxValue=this.scope.rzSliderCeil=this.range?this.scope.rzSliderHigh:this.scope.rzSliderModel,this.scope.rzSliderStep&&(this.step=+this.scope.rzSliderStep),this.valueRange=this.maxValue-this.minValue},initElemHandles:function(){a.forEach(this.sliderElem.children(),function(b,c){var d=a.element(b);switch(c){case 0:this.fullBar=d;break;case 1:this.selBar=d;break;case 2:this.minH=d;break;case 3:this.maxH=d;break;case 4:this.flrLab=d;break;case 5:this.ceilLab=d;break;case 6:this.minLab=d;break;case 7:this.maxLab=d;break;case 8:this.cmbLab=d;break;case 9:this.ticks=d}},this),this.selBar.rzsl=0,this.minH.rzsl=0,this.maxH.rzsl=0,this.flrLab.rzsl=0,this.ceilLab.rzsl=0,this.minLab.rzsl=0,this.maxLab.rzsl=0,this.cmbLab.rzsl=0,this.hideLimitLabels&&(this.flrLab.rzAlwaysHide=!0,this.ceilLab.rzAlwaysHide=!0,this.hideEl(this.flrLab),this.hideEl(this.ceilLab)),this.showTicksValue&&(this.flrLab.rzAlwaysHide=!0,this.ceilLab.rzAlwaysHide=!0,this.minLab.rzAlwaysHide=!0,this.maxLab.rzAlwaysHide=!0,this.hideEl(this.flrLab),this.hideEl(this.ceilLab),this.hideEl(this.minLab),this.hideEl(this.maxLab)),this.range===!1&&(this.cmbLab.remove(),this.maxLab.remove(),this.maxH.rzAlwaysHide=!0,this.maxH[0].style.zIndex="-1000",this.hideEl(this.maxH)),this.range===!1&&this.alwaysShowBar===!1&&(this.maxH.remove(),this.selBar.remove()),this.dragRange&&(this.selBar.css("cursor","move"),this.selBar.addClass("rz-draggable"))},addAccessibility:function(){this.sliderElem.attr("role","slider")},calcViewDimensions:function(){var a=this.getWidth(this.minH);this.handleHalfWidth=a/2,this.barWidth=this.getWidth(this.fullBar),this.maxLeft=this.barWidth-a,this.getWidth(this.sliderElem),this.sliderElem.rzsl=this.sliderElem[0].getBoundingClientRect().left,this.initHasRun&&(this.updateCeilLab(),this.initHandles())},updateTicksScale:function(){if(this.showTicks&&this.step){for(var a="",b=this.minValue;b<=this.maxValue;b+=this.step){var c=this.isTickSelected(b)?"selected":!1;a+='<li class="tick '+c+'">',this.showTicksValue&&(a+='<span class="tick-value">'+this.getDisplayValue(b)+"</span>"),a+="</li>"}this.ticks.html(a)}},isTickSelected:function(a){this.valueToOffset(a);return!this.range&&this.alwaysShowBar&&a<=this.scope.rzSliderModel?!0:this.range&&a>=this.scope.rzSliderModel&&a<=this.scope.rzSliderHigh?!0:!1},updateCeilLab:function(){this.translateFn(this.scope.rzSliderCeil,this.ceilLab),this.setLeft(this.ceilLab,this.barWidth-this.ceilLab.rzsw),this.getWidth(this.ceilLab)},updateFloorLab:function(){this.translateFn(this.scope.rzSliderFloor,this.flrLab),this.getWidth(this.flrLab)},callOnStart:function(){if(this.scope.rzSliderOnStart){var a=this;b(function(){a.scope.rzSliderOnStart()})}},callOnChange:function(){if(this.scope.rzSliderOnChange){var a=this;b(function(){a.scope.rzSliderOnChange()})}},callOnEnd:function(){if(this.scope.rzSliderOnEnd){var a=this;b(function(){a.scope.rzSliderOnEnd()})}},updateHandles:function(a,b){return"rzSliderModel"===a?(this.updateLowHandle(b),this.updateSelectionBar(),this.updateTicksScale(),void(this.range&&this.updateCmbLabel())):"rzSliderHigh"===a?(this.updateHighHandle(b),this.updateSelectionBar(),this.updateTicksScale(),void(this.range&&this.updateCmbLabel())):(this.updateLowHandle(b),this.updateHighHandle(b),this.updateSelectionBar(),this.updateTicksScale(),void this.updateCmbLabel())},updateLowHandle:function(a){var b=Math.abs(this.minH.rzsl-a);this.minLab.rzsv&&1>b||(this.setLeft(this.minH,a),this.translateFn(this.scope.rzSliderModel,this.minLab),this.setLeft(this.minLab,a-this.minLab.rzsw/2+this.handleHalfWidth),this.shFloorCeil())},updateHighHandle:function(a){this.setLeft(this.maxH,a),this.translateFn(this.scope.rzSliderHigh,this.maxLab),this.setLeft(this.maxLab,a-this.maxLab.rzsw/2+this.handleHalfWidth),this.shFloorCeil()},shFloorCeil:function(){var a=!1,b=!1;this.minLab.rzsl<=this.flrLab.rzsl+this.flrLab.rzsw+5?(a=!0,this.hideEl(this.flrLab)):(a=!1,this.showEl(this.flrLab)),this.minLab.rzsl+this.minLab.rzsw>=this.ceilLab.rzsl-this.handleHalfWidth-10?(b=!0,this.hideEl(this.ceilLab)):(b=!1,this.showEl(this.ceilLab)),this.range&&(this.maxLab.rzsl+this.maxLab.rzsw>=this.ceilLab.rzsl-10?this.hideEl(this.ceilLab):b||this.showEl(this.ceilLab),this.maxLab.rzsl<=this.flrLab.rzsl+this.flrLab.rzsw+this.handleHalfWidth?this.hideEl(this.flrLab):a||this.showEl(this.flrLab))},updateSelectionBar:function(){this.setWidth(this.selBar,Math.abs(this.maxH.rzsl-this.minH.rzsl)),this.setLeft(this.selBar,this.range?this.minH.rzsl+this.handleHalfWidth:0)},updateCmbLabel:function(){var a,b;this.minLab.rzsl+this.minLab.rzsw+10>=this.maxLab.rzsl?(a=this.getDisplayValue(this.scope.rzSliderModel),b=this.getDisplayValue(this.scope.rzSliderHigh),this.translateFn(a+" - "+b,this.cmbLab,!1),this.setLeft(this.cmbLab,this.selBar.rzsl+this.selBar.rzsw/2-this.cmbLab.rzsw/2),this.hideEl(this.minLab),this.hideEl(this.maxLab),this.showEl(this.cmbLab)):(this.showEl(this.maxLab),this.showEl(this.minLab),this.hideEl(this.cmbLab))},getDisplayValue:function(a){return this.customTrFn?this.customTrFn(a):a},roundStep:function(a){var b=this.step,c=+((a-this.minValue)%b).toFixed(3),d=c>b/2?a+b-c:a-c;return d=d.toFixed(this.precision),+d},hideEl:function(a){return a.css({opacity:0})},showEl:function(a){return a.rzAlwaysHide?a:a.css({opacity:1})},setLeft:function(a,b){return a.rzsl=b,a.css({left:b+"px"}),b},getWidth:function(a){var b=a[0].getBoundingClientRect();return a.rzsw=b.right-b.left,a.rzsw},setWidth:function(a,b){return a.rzsw=b,a.css({width:b+"px"}),b},valueToOffset:function(a){return(a-this.minValue)*this.maxLeft/this.valueRange||0},offsetToValue:function(a){return a/this.maxLeft*this.valueRange+this.minValue},getEventX:function(a){return"clientX"in a?a.clientX:void 0===a.originalEvent?a.touches[0].clientX:a.originalEvent.touches[0].clientX},getNearestHandle:function(a){if(!this.range)return this.minH;var b=this.getEventX(a)-this.sliderElem.rzsl-this.handleHalfWidth;return Math.abs(b-this.minH.rzsl)<Math.abs(b-this.maxH.rzsl)?this.minH:this.maxH},bindEvents:function(){if(!this.presentOnly&&!this.disabled){var b,c,d;this.dragRange?(b="rzSliderDrag",c=this.onDragStart,d=this.onDragMove):(b="rzSliderModel",c=this.onStart,d=this.onMove),this.minH.on("mousedown",a.bind(this,this.onStart,this.minH,"rzSliderModel")),this.range&&this.maxH.on("mousedown",a.bind(this,this.onStart,this.maxH,"rzSliderHigh")),this.fullBar.on("mousedown",a.bind(this,this.onStart,null,null)),this.fullBar.on("mousedown",a.bind(this,this.onMove,this.fullBar)),this.selBar.on("mousedown",a.bind(this,c,null,b)),this.selBar.on("mousedown",a.bind(this,d,this.selBar)),this.ticks.on("mousedown",a.bind(this,this.onStart,null,null)),this.ticks.on("mousedown",a.bind(this,this.onMove,this.ticks)),this.minH.on("touchstart",a.bind(this,this.onStart,this.minH,"rzSliderModel")),this.range&&this.maxH.on("touchstart",a.bind(this,this.onStart,this.maxH,"rzSliderHigh")),this.fullBar.on("touchstart",a.bind(this,this.onStart,null,null)),this.fullBar.on("touchstart",a.bind(this,this.onMove,this.fullBar)),this.selBar.on("touchstart",a.bind(this,c,null,b)),this.selBar.on("touchstart",a.bind(this,d,this.selBar)),this.ticks.on("touchstart",a.bind(this,this.onStart,null,null)),this.ticks.on("touchstart",a.bind(this,this.onMove,this.ticks))}},unbindEvents:function(){this.minH.off(),this.maxH.off(),this.fullBar.off(),this.selBar.off(),this.ticks.off()},onStart:function(b,d,e){var f,g,h=this.getEventNames(e);e.stopPropagation(),e.preventDefault(),""===this.tracking&&(this.calcViewDimensions(),b?this.tracking=d:(b=this.getNearestHandle(e),this.tracking=b===this.minH?"rzSliderModel":"rzSliderHigh"),b.addClass("rz-active"),f=a.bind(this,this.dragging.active?this.onDragMove:this.onMove,b),g=a.bind(this,this.onEnd,f),c.on(h.moveEvent,f),c.one(h.endEvent,g),this.callOnStart())},onMove:function(a,b){var c,d,e,f=this.getEventX(b);if(c=this.sliderElem.rzsl,d=f-c-this.handleHalfWidth,0>=d){if(0===a.rzsl)return;e=this.minValue,d=0}else if(d>=this.maxLeft){if(a.rzsl===this.maxLeft)return;e=this.maxValue,d=this.maxLeft}else e=this.offsetToValue(d),e=this.roundStep(e),d=this.valueToOffset(e);this.positionTrackingHandle(e,d)},onDragStart:function(a,b,c){var d=this.getEventX(c)-this.sliderElem.rzsl-this.handleHalfWidth;this.dragging={active:!0,value:this.offsetToValue(d),difference:this.scope.rzSliderHigh-this.scope.rzSliderModel,offset:d,lowDist:d-this.minH.rzsl,highDist:this.maxH.rzsl-d},this.minH.addClass("rz-active"),this.maxH.addClass("rz-active"),this.onStart(a,b,c)},onDragMove:function(a,b){var c,d,e,f,g=this.getEventX(b)-this.sliderElem.rzsl-this.handleHalfWidth;if(g<=this.dragging.lowDist){if(a.rzsl===this.dragging.lowDist)return;e=this.minValue,c=0,f=this.dragging.difference,d=this.valueToOffset(f)}else if(g>=this.maxLeft-this.dragging.highDist){if(a.rzsl===this.dragging.highDist)return;f=this.maxValue,d=this.maxLeft,e=this.maxValue-this.dragging.difference,c=this.valueToOffset(e)}else e=this.offsetToValue(g-this.dragging.lowDist),e=this.roundStep(e),c=this.valueToOffset(e),f=e+this.dragging.difference,d=this.valueToOffset(f);this.positionTrackingBar(e,f,c,d)},positionTrackingBar:function(a,b,c,d){this.scope.rzSliderModel=a,this.scope.rzSliderHigh=b,this.updateHandles("rzSliderModel",c),this.updateHandles("rzSliderHigh",d),this.scope.$apply(),this.callOnChange()},positionTrackingHandle:function(a,b){this.range&&("rzSliderModel"===this.tracking&&a>=this.scope.rzSliderHigh?(this.scope[this.tracking]=this.scope.rzSliderHigh,this.updateHandles(this.tracking,this.maxH.rzsl),this.tracking="rzSliderHigh",this.minH.removeClass("rz-active"),this.maxH.addClass("rz-active"),this.scope.$apply(),this.callOnChange()):"rzSliderHigh"===this.tracking&&a<=this.scope.rzSliderModel&&(this.scope[this.tracking]=this.scope.rzSliderModel,this.updateHandles(this.tracking,this.minH.rzsl),this.tracking="rzSliderModel",this.maxH.removeClass("rz-active"),this.minH.addClass("rz-active"),this.scope.$apply(),this.callOnChange())),this.scope[this.tracking]!==a&&(this.scope[this.tracking]=a,this.updateHandles(this.tracking,b),this.scope.$apply(),this.callOnChange())},onEnd:function(a,b){var d=this.getEventNames(b).moveEvent;this.minH.removeClass("rz-active"),this.maxH.removeClass("rz-active"),c.off(d,a),this.scope.$emit("slideEnded"),this.tracking="",this.dragging.active=!1,this.callOnEnd()},getEventNames:function(a){var b={moveEvent:"",endEvent:""};return a.touches||void 0!==a.originalEvent&&a.originalEvent.touches?(b.moveEvent="touchmove",b.endEvent="touchend"):(b.moveEvent="mousemove",b.endEvent="mouseup"),b}},f}]).directive("rzslider",["RzSlider",function(a){return{restrict:"E",scope:{rzSliderFloor:"=?",rzSliderCeil:"=?",rzSliderStep:"@",rzSliderPrecision:"@",rzSliderModel:"=?",rzSliderHigh:"=?",rzSliderDraggable:"@",rzSliderTranslate:"&",rzSliderHideLimitLabels:"=?",rzSliderAlwaysShowBar:"=?",rzSliderPresentOnly:"@",rzSliderOnStart:"&",rzSliderOnChange:"&",rzSliderOnEnd:"&",rzSliderShowTicks:"=?",rzSliderShowTicksValue:"=?",rzSliderDisabled:"=?"},templateUrl:function(a,b){return b.rzSliderTplUrl||"rzSliderTpl.html"},link:function(b,c,d){return new a(b,c,d)}}}]);return b.run(["$templateCache",function(a){a.put("rzSliderTpl.html",'<span class=rz-bar-wrapper><span class=rz-bar></span></span> <span class=rz-bar-wrapper><span class="rz-bar rz-selection"></span></span> <span class=rz-pointer></span> <span class=rz-pointer></span> <span class="rz-bubble rz-limit"></span> <span class="rz-bubble rz-limit"></span> <span class=rz-bubble></span> <span class=rz-bubble></span> <span class=rz-bubble></span><ul class=rz-ticks></ul>')}]),b});
angular.module("rt.resize",[]).factory("resize",["$window","$timeout",function(a,b){return function(c){function d(){for(var a=0;a<e.length;a++)e[a]()}var e=[],f=angular.element(a);return f.bind("resize",d),c.$on("$destroy",function(){f.unbind("resize",d)}),{call:function(a){return e.push(a),b(a),this}}}}]);
/*
 AngularJS v1.3.20
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(n,h,p){'use strict';function E(a){var e=[];r(e,h.noop).chars(a);return e.join("")}function g(a){var e={};a=a.split(",");var d;for(d=0;d<a.length;d++)e[a[d]]=!0;return e}function F(a,e){function d(a,b,d,l){b=h.lowercase(b);if(s[b])for(;f.last()&&t[f.last()];)c("",f.last());u[b]&&f.last()==b&&c("",b);(l=v[b]||!!l)||f.push(b);var m={};d.replace(G,function(a,b,e,c,d){m[b]=q(e||c||d||"")});e.start&&e.start(b,m,l)}function c(a,b){var c=0,d;if(b=h.lowercase(b))for(c=f.length-1;0<=c&&f[c]!=b;c--);
if(0<=c){for(d=f.length-1;d>=c;d--)e.end&&e.end(f[d]);f.length=c}}"string"!==typeof a&&(a=null===a||"undefined"===typeof a?"":""+a);var b,k,f=[],m=a,l;for(f.last=function(){return f[f.length-1]};a;){l="";k=!0;if(f.last()&&w[f.last()])a=a.replace(new RegExp("([\\W\\w]*)<\\s*\\/\\s*"+f.last()+"[^>]*>","i"),function(a,b){b=b.replace(H,"$1").replace(I,"$1");e.chars&&e.chars(q(b));return""}),c("",f.last());else{if(0===a.indexOf("\x3c!--"))b=a.indexOf("--",4),0<=b&&a.lastIndexOf("--\x3e",b)===b&&(e.comment&&
e.comment(a.substring(4,b)),a=a.substring(b+3),k=!1);else if(x.test(a)){if(b=a.match(x))a=a.replace(b[0],""),k=!1}else if(J.test(a)){if(b=a.match(y))a=a.substring(b[0].length),b[0].replace(y,c),k=!1}else K.test(a)&&((b=a.match(z))?(b[4]&&(a=a.substring(b[0].length),b[0].replace(z,d)),k=!1):(l+="<",a=a.substring(1)));k&&(b=a.indexOf("<"),l+=0>b?a:a.substring(0,b),a=0>b?"":a.substring(b),e.chars&&e.chars(q(l)))}if(a==m)throw L("badparse",a);m=a}c()}function q(a){if(!a)return"";A.innerHTML=a.replace(/</g,
"&lt;");return A.textContent}function B(a){return a.replace(/&/g,"&amp;").replace(M,function(a){var d=a.charCodeAt(0);a=a.charCodeAt(1);return"&#"+(1024*(d-55296)+(a-56320)+65536)+";"}).replace(N,function(a){return"&#"+a.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function r(a,e){var d=!1,c=h.bind(a,a.push);return{start:function(a,k,f){a=h.lowercase(a);!d&&w[a]&&(d=a);d||!0!==C[a]||(c("<"),c(a),h.forEach(k,function(d,f){var k=h.lowercase(f),g="img"===a&&"src"===k||"background"===
k;!0!==O[k]||!0===D[k]&&!e(d,g)||(c(" "),c(f),c('="'),c(B(d)),c('"'))}),c(f?"/>":">"))},end:function(a){a=h.lowercase(a);d||!0!==C[a]||(c("</"),c(a),c(">"));a==d&&(d=!1)},chars:function(a){d||c(B(a))}}}var L=h.$$minErr("$sanitize"),z=/^<((?:[a-zA-Z])[\w:-]*)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*(>?)/,y=/^<\/\s*([\w:-]+)[^>]*>/,G=/([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,K=/^</,J=/^<\//,H=/\x3c!--(.*?)--\x3e/g,x=/<!DOCTYPE([^>]*?)>/i,
I=/<!\[CDATA\[(.*?)]]\x3e/g,M=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,N=/([^\#-~| |!])/g,v=g("area,br,col,hr,img,wbr");n=g("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr");p=g("rp,rt");var u=h.extend({},p,n),s=h.extend({},n,g("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),t=h.extend({},p,g("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var"));
n=g("animate,animateColor,animateMotion,animateTransform,circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,set,stop,svg,switch,text,title,tspan,use");var w=g("script,style"),C=h.extend({},v,s,t,u,n),D=g("background,cite,href,longdesc,src,usemap,xlink:href");n=g("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,target,title,type,valign,value,vspace,width");
p=g("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,attributeName,attributeType,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan");
var O=h.extend({},D,p,n),A=document.createElement("pre");h.module("ngSanitize",[]).provider("$sanitize",function(){this.$get=["$$sanitizeUri",function(a){return function(e){var d=[];F(e,r(d,function(c,b){return!/^unsafe/.test(a(c,b))}));return d.join("")}}]});h.module("ngSanitize").filter("linky",["$sanitize",function(a){var e=/((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i,d=/^mailto:/i;return function(c,b){function k(a){a&&g.push(E(a))}function f(a,c){g.push("<a ");
h.isDefined(b)&&g.push('target="',b,'" ');g.push('href="',a.replace(/"/g,"&quot;"),'">');k(c);g.push("</a>")}if(!c)return c;for(var m,l=c,g=[],n,p;m=l.match(e);)n=m[0],m[2]||m[4]||(n=(m[3]?"http://":"mailto:")+n),p=m.index,k(l.substr(0,p)),f(n,m[0].replace(d,"")),l=l.substring(p+m[0].length);k(l);return a(g.join(""))}}])})(window,window.angular);
//# sourceMappingURL=angular-sanitize.min.js.map

/*
    angularGrid.js v 0.3.3
    Author: Sudhanshu Yadav
    Copyright (c) 2015 Sudhanshu Yadav - ignitersworld.com , released under the MIT license.
    Demo on: http://ignitersworld.com/lab/angulargrid/demo1.html
    Documentation and download on https://github.com/s-yadav/angulargrid
*/

/* module to create pinterest like responsive masonry grid system for angular */
;(function(angular, window, undefined) {
    "use strict";
    //defaults for plugin
    var defaults = {
        gridWidth: 300, //minumum width of a grid, this may increase to take whole space of container
        gutterSize: 10, //spacing between two grid,
        refreshOnImgLoad: true // to make a refresh on image load inside container
    };

    var single = (function() {
        var $elm = angular.element(window);
        return function(elm) {
            $elm[0] = elm;
            return $elm;
        };
    }());

    //function to check if image is loaded
    function imageLoaded(img) {
        return img.complete && (typeof img.naturalWidth === 'undefined' || img.naturalWidth !== 0);
    }

    //function to covert domlist to array
    function domToAry(list) {
        return Array.prototype.slice.call(list);
    }

    //add required css
    angular.element(document.head).append('<style>' +
        '.ag-no-transition{' +
        '-webkit-transition: none !important;' +
        'transition: none !important;' +
        '}' + '</style>');

    angular.module('angularGrid', []).directive('angularGrid', ['$timeout', '$window', '$q', 'angularGridInstance',
        function($timeout, $window, $q, angularGridInstance) {
            return {
                restrict: 'A',
                link: function(scope, element, attrs) {
                    var initiallyLoaded,
                        domElm = element[0],
                        win = angular.element($window),
                        agId = attrs.angularGridId,
                        modalKey = attrs.angularGrid,
                        listElms,
                        timeoutPromise;

                    //get the user input options
                    var options = {
                        gridWidth: attrs.gridWidth ? parseInt(attrs.gridWidth) : defaults.gridWidth,
                        gutterSize: attrs.gutterSize ? parseInt(attrs.gutterSize) : defaults.gutterSize,
                        refreshOnImgLoad: attrs.refreshOnImgLoad == 'false' ? false : true
                    };


                    //function to get column width and number of columns
                    function getColWidth() {
                        var contWidth = domElm.offsetWidth;

                        var cols = Math.floor(contWidth / (options.gridWidth + options.gutterSize));

                        var remainingSpace = (contWidth % (options.gridWidth + options.gutterSize)) + options.gutterSize;

                        var colWidth = options.gridWidth + Math.floor(remainingSpace / cols);

                        return {
                            no: cols,
                            width: colWidth
                        };
                    }

                    //method check for image loaded inside a container and trigger callback
                    function afterImageLoad(container, options) {
                        var beforeLoad = options.beforeLoad || angular.noop,
                            onLoad = options.onLoad || angular.noop,
                            isLoaded = options.isLoaded || angular.noop,
                            onFullLoad = options.onFullLoad || angular.noop,
                            ignoreCheck = options.ignoreCheck || angular.noop,
                            allImg = container.find('img'),
                            loadedImgPromises = [];

                        domToAry(allImg).forEach(function(img) {
                            beforeLoad(img);
                            if (!imageLoaded(img) && !ignoreCheck(img)) {
                                loadedImgPromises.push($q(function(resolve, reject) {
                                    img.onload = function() {
                                        onLoad(img);
                                        resolve();
                                    };
                                    img.onerror = reject;
                                }));
                            } else {
                                isLoaded(img);
                            }
                        });

                        if (loadedImgPromises.length) {
                            $q.all(loadedImgPromises).then(onFullLoad, onFullLoad);
                        } else {
                            setTimeout(function() {
                                onFullLoad();
                            }, 0);
                        }
                    }


                    //function to reflow grids
                    function reflowGrids() {
                        //claclulate width of all element
                        var colInfo = getColWidth(),
                            colWidth = colInfo.width,
                            cols = colInfo.no,
                            i, ln;

                        //initialize listRowBottom
                        var lastRowBottom = [];
                        for (var i = 0; i < cols; i++) {
                            lastRowBottom.push(0);
                        }

                        //if image actual width and actual height is defined update image size so that it dosent cause reflow on image load
                        domToAry(listElms).forEach(function(item) {
                            var $item = single(item);

                            domToAry($item.find('img')).forEach(function(img) {
                                var $img = angular.element(img);
                                //if image is already loaded don't do anything
                                if ($img.hasClass('img-loaded')) {
                                    $img.css('height', '');
                                    return;
                                }

                                //set the item width and no transition state so image width can be calculated properly
                                $item.addClass('ag-no-transition');
                                $item.css('width', colWidth + 'px');

                                var actualWidth = $img.attr('actual-width') || $img.attr('data-actual-width'),
                                    actualHeight = $img.attr('actual-height') || $img.attr('data-actual-height');

                                if (actualWidth && actualHeight) {
                                    $img.css('height', (actualHeight * img.width / actualWidth) + 'px');
                                }

                            });
                            $item.removeClass('ag-no-transition');
                        });

                        //get all list items new height
                        var clones = listElms.clone();

                        clones.addClass('ag-no-transition');
                        clones.css({
                            visibility: 'hidden',
                            opacity: 0,
                            width: colWidth + 'px',
                            top: 0,
                            left: 0
                        });
                        element.append(clones);

                        //For cloned element again we have to check if image loaded (IOS only)

                        afterImageLoad(clones, {
                            ignoreCheck: function(img) {
                                return !single(img).hasClass('img-loaded');
                            },
                            onFullLoad: function() {
                                var listElmHeights = [],
                                    item, i, ln;
                                //find height with clones
                                for (i = 0, ln = clones.length; i < ln; i++) {
                                    listElmHeights.push(clones[i].offsetHeight);
                                }

                                //set new positions
                                for (i = 0, ln = listElms.length; i < ln; i++) {
                                    item = single(listElms[i]);
                                    var height = listElmHeights[i],
                                        top = Math.min.apply(Math, lastRowBottom),
                                        col = lastRowBottom.indexOf(top);

                                    //update lastRowBottom value
                                    lastRowBottom[col] = top + height + options.gutterSize;

                                    //set top and left of list items
                                    var left = col * (colWidth + options.gutterSize);


                                    item.css({
                                        top: top + 'px',
                                        left: left + 'px',
                                        width: colWidth + 'px'
                                    });
                                }

                                //set the height of container
                                element.css('height', Math.max.apply(Math, lastRowBottom) + 'px');

                                clones.remove();
                            }
                        });
                    }


                    //function to handle asynchronous image loading
                    function handleImage() {
                        var reflowPending = false;
                        domToAry(listElms).forEach(function(listItem) {
                            var $listItem = angular.element(listItem),
                                allImg = $listItem.find('img'),
                                loadedImgPromises = [];

                            if (!allImg.length) {
                                return;
                            }

                            //add image loading class on list item
                            $listItem.addClass('img-loading');

                            afterImageLoad($listItem, {
                                beforeLoad: function(img) {
                                    single(img).addClass('img-loading');
                                },
                                isLoaded: function(img) {
                                    single(img).removeClass('img-loading').addClass('img-loaded');
                                },
                                onLoad: function(img) {
                                    if (!reflowPending && options.refreshOnImgLoad) {
                                        reflowPending = true;
                                        $timeout(function() {
                                            reflowGrids();
                                            reflowPending = false;
                                        }, 100);
                                    }
                                    single(img).removeClass('img-loading').addClass('img-loaded');
                                },
                                onFullLoad: function() {
                                    $listItem.removeClass('img-loading').addClass('img-loaded');
                                }
                            });
                        });

                    }

                    //function to check for ng animation
                    function ngCheckAnim() {
                        var leavingElm = domToAry(listElms).filter(function(elm) {
                            return single(elm).hasClass('ng-leave');
                        });
                        return $q(function(resolve) {
                            if (!leavingElm.length) {
                                resolve();
                            } else {
                                single(leavingElm[0]).one('webkitTransitionEnd transitionend msTransitionEnd oTransitionEnd', function() {
                                    $timeout(function() {
                                        listElms = element.children();
                                        resolve();
                                    });
                                });
                            }
                        });
                    }

                    //watch on modal key
                    scope.$watch(modalKey, function() {
                        $timeout(function() {
                            listElms = element.children();
                            ngCheckAnim().then(function() {
                                //handle images
                                handleImage();

                                $timeout(function() {
                                    //add class to element
                                    element.addClass('angular-grid');

                                    //to handle scroll appearance
                                    reflowGrids();

                                    //element.addClass('angular-grid-initilized');
                                });
                            });
                        },200);
                    }, true);

                    //listen window resize event and reflow grids after a timeout
                    var lastDomWidth = domElm.offsetWidth;
                    win.on('resize', function() {
                        var contWidth = domElm.offsetWidth;
                        if (lastDomWidth == contWidth) return;
                        lastDomWidth = contWidth;


                        if (timeoutPromise) {
                            $timeout.cancel(timeoutPromise);
                        }

                        timeoutPromise = $timeout(function() {
                            reflowGrids();
                        }, 100);
                    });

                    //add instance to factory if id is assigned
                    if (agId) {
                        angularGridInstance[agId] = {
                            refresh: reflowGrids
                        };
                    }
                }
            };
        }
    ])
    //a factory to store angulargrid instances which can be injected to controllers or directive
    .factory('angularGridInstance', function() {

        var angularGridInstance = {};

        return angularGridInstance;

    });

}(angular, window));

/* ng-infinite-scroll - v1.2.0 - 2015-02-14 */
var mod;mod=angular.module("infinite-scroll",[]),mod.value("THROTTLE_MILLISECONDS",null),mod.directive("infiniteScroll",["$rootScope","$window","$interval","THROTTLE_MILLISECONDS",function(a,b,c,d){return{scope:{infiniteScroll:"&",infiniteScrollContainer:"=",infiniteScrollDistance:"=",infiniteScrollDisabled:"=",infiniteScrollUseDocumentBottom:"=",infiniteScrollListenForEvent:"@"},link:function(e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;return y=angular.element(b),t=null,u=null,i=null,j=null,q=!0,x=!1,w=null,p=function(a){return a=a[0]||a,isNaN(a.offsetHeight)?a.document.documentElement.clientHeight:a.offsetHeight},r=function(a){return a[0].getBoundingClientRect&&!a.css("none")?a[0].getBoundingClientRect().top+s(a):void 0},s=function(a){return a=a[0]||a,isNaN(window.pageYOffset)?a.document.documentElement.scrollTop:a.ownerDocument.defaultView.pageYOffset},o=function(){var b,c,d,g,h;return j===y?(b=p(j)+s(j[0].document.documentElement),d=r(f)+p(f)):(b=p(j),c=0,void 0!==r(j)&&(c=r(j)),d=r(f)-c+p(f)),x&&(d=p((f[0].ownerDocument||f[0].document).documentElement)),g=d-b,h=g<=p(j)*t+1,h?(i=!0,u?e.$$phase||a.$$phase?e.infiniteScroll():e.$apply(e.infiniteScroll):void 0):i=!1},v=function(a,b){var d,e,f;return f=null,e=0,d=function(){var b;return e=(new Date).getTime(),c.cancel(f),f=null,a.call(),b=null},function(){var g,h;return g=(new Date).getTime(),h=b-(g-e),0>=h?(clearTimeout(f),c.cancel(f),f=null,e=g,a.call()):f?void 0:f=c(d,h,1)}},null!=d&&(o=v(o,d)),e.$on("$destroy",function(){return j.unbind("scroll",o),null!=w?(w(),w=null):void 0}),m=function(a){return t=parseFloat(a)||0},e.$watch("infiniteScrollDistance",m),m(e.infiniteScrollDistance),l=function(a){return u=!a,u&&i?(i=!1,o()):void 0},e.$watch("infiniteScrollDisabled",l),l(e.infiniteScrollDisabled),n=function(a){return x=a},e.$watch("infiniteScrollUseDocumentBottom",n),n(e.infiniteScrollUseDocumentBottom),h=function(a){return null!=j&&j.unbind("scroll",o),j=a,null!=a?j.bind("scroll",o):void 0},h(y),e.infiniteScrollListenForEvent&&(w=a.$on(e.infiniteScrollListenForEvent,o)),k=function(a){if(null!=a&&0!==a.length){if(a instanceof HTMLElement?a=angular.element(a):"function"==typeof a.append?a=angular.element(a[a.length-1]):"string"==typeof a&&(a=angular.element(document.querySelector(a))),null!=a)return h(a);throw new Exception("invalid infinite-scroll-container attribute.")}},e.$watch("infiniteScrollContainer",k),k(e.infiniteScrollContainer||[]),null!=g.infiniteScrollParent&&h(angular.element(f.parent())),null!=g.infiniteScrollImmediateCheck&&(q=e.$eval(g.infiniteScrollImmediateCheck)),c(function(){return q?o():void 0},0,1)}}}]);
(function(){
  'use strict';

  angular
  .module('mdr.file', [])
  .controller('FileCtrl', ['$scope', '$element', '$attrs', function($scope, $element, $attrs) {

    // OPTIONS
    $scope.text = 'Drag or click here';
    $scope.count = {
      send: 0,
      complete: 0,
      invalid: 0
    };



    /**  Drag and Drop
    |- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    */
    $element.bind('dragenter', function (e){
      e.stopPropagation();
      e.preventDefault();
      var parent = $(e.target).parent();
      parent.addClass('mdr-file-dad-text-hover');
    });

    $element.bind('dragleave', function (e){
      e.stopPropagation();
      e.preventDefault();
      var parent = $(e.target).parent();
      parent.removeClass('mdr-file-dad-text-hover');
    });

    $element.bind('dragover', function (e){
      e.stopPropagation();
      e.preventDefault();
    });

    $element.bind('drop', function (e){
      e.stopPropagation();
      e.preventDefault();

      var parent = $(e.target).parent();
      parent.removeClass('mdr-file-dad-text-hover');
      // Se obtienen los archivos
      var files = e.originalEvent.dataTransfer.files;
      // Se envian los archivos
      uploadFiles(files);
    });

    $scope.clearContent = function()
    {
      $('#fileId_'+ $scope.$id +' .mdr-file-dad-content div').fadeOut('slow', function() { $(this).remove(); });
      $("#fileId_"+ $scope.$id +' .mdr-file-dad-content button').fadeOut('slow');
    };


    /** Upload
    * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    */
    $scope.upload = function(element)
    {
      // Se obtienen los archivos
      var files = element.files;
      // Se envian los archivos
      uploadFiles(files);
    };


    function uploadFiles(files)
    {
      $scope.count = {
        send: 0,
        complete: 0,
        invalid: 0
      };
      // Si es multiple
      if( validMultiple(files) ) {
        // Si no exede el limite de archivos
        if ( validLimit(files) ) {
          // Se envian los archivos
          $.each(files, function(k, v){
            // Se envia el archivo
            uploadFile(k,v);
          });
        }
      }
      $('#fileId_'+ $scope.$id +' input').replaceWith($('#fileId_'+ $scope.$id +' input').val('').clone(true));
    }


    // Se sube file por file
    function uploadFile(k,v)
    {
      // SE INSTANCIA EL XHR
      var xhr = new XMLHttpRequest();
      // Se abre el xhr
      xhr.open('POST', $scope.url, true);
      // Se agregan los headers al xhr
      if ($scope.headers !== undefined) {
        var headers = $scope.headers;
        for (var header in headers) {
          xhr.setRequestHeader(header, headers[header]);
        }
      }
      xhr.addEventListener("loadstart", loadStart, false);
      xhr.addEventListener("progress", updateProgress, false);
      xhr.addEventListener("load", transferComplete, false);
      xhr.addEventListener("error", transferFailed, false);
      xhr.addEventListener("abort", transferCanceled, false);

      // SE INSTANCIA EL FORM DATA
      var formData = new FormData();
      // Se agrega el file en el formData
      formData.append('file', v);

      // SE INSTANCIA EL FILEREAD
      // Lee los atributos del file
      var reader = new FileReader();
      // Lee la url temporal del file
      reader.readAsDataURL(v);
      // Cuando se carga el file
      reader.onload = function (e) {

        // Se valida que el archivo sea valido
        var validFile = isValid(v);

        // Se crea el preview
        createPreview(v, k, e.target.result, validFile.icon, validFile.messages);

        // Se valida el tipo y el tamaño
        if (validFile.resp) {
          // Se envia el formData al server
          $scope.$apply(function () {
            $scope.count.send++;
          });
          xhr.send(formData);
        } else {
          $scope.$apply(function () {
            $scope.count.invalid++;
          });
          // Se aborta el envio de formData al server
          xhr.abort();
        }

      };

      // Caundo inicia la carga del archivo
      function loadStart(){
        //console.log('Load start');
      }
      function updateProgress (e) {
        if (e.lengthComputable) {
          var percentage = (e.loaded / e.total) * 100;
          $('#fileId_'+ $scope.$id + ' .mdr-file-dad-content .preview-'+ k +' .progress .progress-bar').css('width', percentage + '%');
        }
      }
      function transferComplete (e) {
        $scope.$apply(function () {
          $scope.count.complete++;
          $scope.model = xhr.response;
        });
        $('#fileId_'+ $scope.$id +' .mdr-file-dad-content .preview-'+ k).fadeOut('slow', function() { $(this).remove(); });
        $('#fileId-'+im).css("visibility","visible");
          im++;
      }
      function transferFailed (e) {
        console.log("An error occurred while transferring the file.");
      }
      function transferCanceled (e) {
        console.log("The transfer has been canceled by the user.");
      }
    }
var im = 0;

    // SE CREA EL PREVIEW
    function createPreview(v,k,url,icon,messages)
    {
      // Se obtiene el tamaño del archivo
      var humanSize = bytesToSize(v.size);

      var img = null;
      if (icon) {
        img = '<span class="glyphicon glyphicon-file"></span>';
      } else {
        img = '<img src="'+ url +'">';
      }

      var preview =
      '<div class="col-xs-12 col-sm-6 col-md-4 col-lg-2 preview-'+ k +'">' +
        '<div class="thumbnail">' +
          img +
          '<div class="progress">' +
            '<div class="progress-bar" role="progressbar" aria-valuenow="" aria-valuemin="0" aria-valuemax="100" style="width:0%"></div>' +
          '</div>' +
          '<div class="caption">' +
            '<p>'+ v.name +'<span class="text-muted"> / '+ humanSize +'</span></p>' +
          '</div>' +
        '</div>' +
      '</div>';

      $("#fileId_"+ $scope.$id +' .mdr-file-dad-content').append($(preview).fadeIn('slow'));
      $("#complete").append("<img id='fileId-"+im+"' src='"+url+"' width='75px' style='display:inline-block; margin-left:10px; margin-right:10px; visibility:hidden'>");

      if (messages !== undefined) {
        messages.forEach(function(msg){
          $("#fileId_"+ $scope.$id +' .mdr-file-dad-content .preview-'+ k +' .thumbnail .caption').append('<p class="text-danger">'+ msg +'</p>');
        });
      }

    }


    // VALID FUNCTIONS
    function isValid(file)
    {
      var messages = [];
      var icon = false;

      var ext = validExt(file);
      var size = validSize(file);

      if (ext.icon || size.icon) {
        icon = true;
      }

      if (!ext.resp) {
        messages.push(ext.msg);
      }
      if (!size.resp) {
        messages.push(size.msg);
      }

      if ( ext.resp && size.resp ) {
        return { resp: true,  icon: icon };
      }

      return { resp: false, icon: icon, messages: messages};
    }


    function validExt(file)
    {
      // Img previe or icon
      var icon = false;

      // Se decide si se va mostrar el preview o un icono
      if (file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/svg+xml' && file.type !== 'image/gif') {
        icon = true;
      }

      if ($scope.formats === undefined) {
        return { resp: true, icon: icon, msg: '' };
      }

      // Extencion del archivo
      var fileExtension = file.name.substring(file.name.lastIndexOf('.') + 1).toLowerCase();
      // extensiones aceptadas
      var formats = $scope.formats;

      // Si los formatos son de tipo string se convierte en array (stringToArray)
      if (typeof formats == 'string') {
        formats = formats.split(',');
      }

      // Si existe la extencion entre las extenciones validas
      for (var i = 0; i < formats.length; i++) {
        if (fileExtension == formats[i].trim()) {
          return { resp: true, icon: icon, msg: ''};
        }
      }

      return { resp: false, icon: icon, msg: 'File type '+ fileExtension +' not allowed' };
    }


    function validSize(file)
    {
      // Img previe or icon
      var icon = false;
      // Tamaño del archivo
      var size = file.size;

      // Se decide si se va mostrar el preview o un icono
      if (size > (5 * 1000) * 1024) {
        icon = true;
      }

      if ($scope.size === undefined) {
        return { resp: true, icon: icon };
      }

      // Tamaño maximo
      var maxSize = ($scope.size * 1000) * 1024;


      if (size < maxSize) {
        return { resp: true, icon: icon};
      }

      return { resp: false, icon: icon, msg: 'File exceeds size '+ $scope.size +'MB'};
    }

    function validLimit(files)
    {
      if ($scope.limit === undefined) {
        return true;
      }
      if ($scope.limit < files.length) {
        alert('Max files upload is '+ $scope.limit);
        return false;
      }
      return true;
    }

    // Se valida si el imput es multiple
    function validMultiple(files)
    {
      if($attrs.multiple && (files.length > 1)){
        alert('One file for time');
        return false;
      }
      return true;
    }

    // Convierte los bits en 'Bytes', 'KB', 'MB', 'GB', 'TB'
    function bytesToSize(bytes)
    {
      var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
      if (bytes === 0) return 'n/a';
      var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
      if (i === 0) return bytes + ' ' + sizes[i];
      return (bytes / Math.pow(1024, i)).toFixed(1) + ' ' + sizes[i];
    }

    /*
    |- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    |   watch
    |- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    */
    $scope.$watchCollection('count', function(newValue, oldValue)
    {
      if (newValue.send == newValue.complete && newValue.invalid > 0) {
        $("#fileId_"+ $scope.$id +' .mdr-file-dad-content button').fadeIn('slow');
      }
    });


  }])

  .directive('mdrFile', ['$compile', function($compile){
    /**
    * use
    * @param url {string}
    * @param model {object}
    * @param headers {object}
    * @param size {number} Max size in MB to file.
    * @param limit {number} Max number files to upload.
    * @param formats {array, string} Extensions permitted to the file.
    * @param text {string} Text into area drag and drop.
    * @param multiple {boolean}
    * @param disabled {boolean}
    * <mdr-file url="file/photo" mode="modelo" headers="[token,'shhh']" size="5" limit="10" formats="'jpg,png,gif'" disabled="true" multiple="false" text="Arrastra o haz clic aquí"></mdr-file>
    */

    var linker = function(scope, element, attrs)
    {
      // Se remueve el attr multiple
      if (attrs.multiple !== undefined || attrs.multiple) {
        element.find('input').removeAttr('multiple');
      }

      if (attrs.disabled) {
       element.find('.mdr-file-dad').addClass('disabled');
      }

      $compile(element.contents())(scope);
    };

    return {
      restrict: 'E',
      controller: 'FileCtrl',
      link: linker,
      scope: {
        url: '@',
        headers: '=',
        model: '=',
        size: '=',
        limit: '=',
        formats: '=',
        disabled: '=',
        text: '@'
      },
      template:
      '<div class="mdr-file-dad" id="fileId_{{$id}}">' +
        '<div class="mdr-file-dad-text">' +
          '<h3><span class="glyphicon glyphicon-cloud-upload"></span>{{text}}</h3>' +
        '</div>' +
        '<input type="file" name="file" onchange="angular.element(this).scope().upload(this)" ng-model="model" ng-disabled="disabled" multiple>' +
        '<div class="row mdr-file-dad-content">'+
          '<button type="button" class="close" aria-label="Close" ng-click="clearContent()"><span aria-hidden="true">&times;</span></button>' +
        '</div>' +
      '</div>'
    };


  }]);

})();

/*! angularjs-geolocation 11-09-2013 */
"use strict";angular.module("geolocation",[]).constant("geolocation_msgs",{"errors.location.unsupportedBrowser":"Browser does not support location services","errors.location.notFound":"Unable to determine your location"}),angular.module("geolocation").factory("geolocation",["$q","$rootScope","$window","geolocation_msgs",function(a,b,c,d){return{getLocation:function(){var e=a.defer();return c.navigator&&c.navigator.geolocation?c.navigator.geolocation.getCurrentPosition(function(a){b.$apply(function(){e.resolve(a)})},function(){b.$broadcast("error",d["errors.location.notFound"]),b.$apply(function(){e.reject(d["errors.location.notFound"])})}):(b.$broadcast("error",d["errors.location.unsupportedBrowser"]),b.$apply(function(){e.reject(d["errors.location.unsupportedBrowser"])})),e.promise}}}]);
!function(e,t,n){"use strict";!function o(e,t,n){function a(s,l){if(!t[s]){if(!e[s]){var i="function"==typeof require&&require;if(!l&&i)return i(s,!0);if(r)return r(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var c=t[s]={exports:{}};e[s][0].call(c.exports,function(t){var n=e[s][1][t];return a(n?n:t)},c,c.exports,o,e,t,n)}return t[s].exports}for(var r="function"==typeof require&&require,s=0;s<n.length;s++)a(n[s]);return a}({1:[function(o,a,r){var s=function(e){return e&&e.__esModule?e:{"default":e}};Object.defineProperty(r,"__esModule",{value:!0});var l,i,u,c,d=o("./modules/handle-dom"),f=o("./modules/utils"),p=o("./modules/handle-swal-dom"),m=o("./modules/handle-click"),v=o("./modules/handle-key"),y=s(v),h=o("./modules/default-params"),b=s(h),g=o("./modules/set-params"),w=s(g);r["default"]=u=c=function(){function o(e){var t=a;return t[e]===n?b["default"][e]:t[e]}var a=arguments[0];if(d.addClass(t.body,"stop-scrolling"),p.resetInput(),a===n)return f.logStr("SweetAlert expects at least 1 attribute!"),!1;var r=f.extend({},b["default"]);switch(typeof a){case"string":r.title=a,r.text=arguments[1]||"",r.type=arguments[2]||"";break;case"object":if(a.title===n)return f.logStr('Missing "title" argument!'),!1;r.title=a.title;for(var s in b["default"])r[s]=o(s);r.confirmButtonText=r.showCancelButton?"Confirm":b["default"].confirmButtonText,r.confirmButtonText=o("confirmButtonText"),r.doneFunction=arguments[1]||null;break;default:return f.logStr('Unexpected type of argument! Expected "string" or "object", got '+typeof a),!1}w["default"](r),p.fixVerticalPosition(),p.openModal(arguments[1]);for(var u=p.getModal(),v=u.querySelectorAll("button"),h=["onclick","onmouseover","onmouseout","onmousedown","onmouseup","onfocus"],g=function(e){return m.handleButton(e,r,u)},C=0;C<v.length;C++)for(var S=0;S<h.length;S++){var x=h[S];v[C][x]=g}p.getOverlay().onclick=g,l=e.onkeydown;var k=function(e){return y["default"](e,r,u)};e.onkeydown=k,e.onfocus=function(){setTimeout(function(){i!==n&&(i.focus(),i=n)},0)},c.enableButtons()},u.setDefaults=c.setDefaults=function(e){if(!e)throw new Error("userParams is required");if("object"!=typeof e)throw new Error("userParams has to be a object");f.extend(b["default"],e)},u.close=c.close=function(){var o=p.getModal();d.fadeOut(p.getOverlay(),5),d.fadeOut(o,5),d.removeClass(o,"showSweetAlert"),d.addClass(o,"hideSweetAlert"),d.removeClass(o,"visible");var a=o.querySelector(".sa-icon.sa-success");d.removeClass(a,"animate"),d.removeClass(a.querySelector(".sa-tip"),"animateSuccessTip"),d.removeClass(a.querySelector(".sa-long"),"animateSuccessLong");var r=o.querySelector(".sa-icon.sa-error");d.removeClass(r,"animateErrorIcon"),d.removeClass(r.querySelector(".sa-x-mark"),"animateXMark");var s=o.querySelector(".sa-icon.sa-warning");return d.removeClass(s,"pulseWarning"),d.removeClass(s.querySelector(".sa-body"),"pulseWarningIns"),d.removeClass(s.querySelector(".sa-dot"),"pulseWarningIns"),setTimeout(function(){var e=o.getAttribute("data-custom-class");d.removeClass(o,e)},300),d.removeClass(t.body,"stop-scrolling"),e.onkeydown=l,e.previousActiveElement&&e.previousActiveElement.focus(),i=n,clearTimeout(o.timeout),!0},u.showInputError=c.showInputError=function(e){var t=p.getModal(),n=t.querySelector(".sa-input-error");d.addClass(n,"show");var o=t.querySelector(".sa-error-container");d.addClass(o,"show"),o.querySelector("p").innerHTML=e,setTimeout(function(){u.enableButtons()},1),t.querySelector("input").focus()},u.resetInputError=c.resetInputError=function(e){if(e&&13===e.keyCode)return!1;var t=p.getModal(),n=t.querySelector(".sa-input-error");d.removeClass(n,"show");var o=t.querySelector(".sa-error-container");d.removeClass(o,"show")},u.disableButtons=c.disableButtons=function(){var e=p.getModal(),t=e.querySelector("button.confirm"),n=e.querySelector("button.cancel");t.disabled=!0,n.disabled=!0},u.enableButtons=c.enableButtons=function(){var e=p.getModal(),t=e.querySelector("button.confirm"),n=e.querySelector("button.cancel");t.disabled=!1,n.disabled=!1},"undefined"!=typeof e?e.sweetAlert=e.swal=u:f.logStr("SweetAlert is a frontend module!"),a.exports=r["default"]},{"./modules/default-params":2,"./modules/handle-click":3,"./modules/handle-dom":4,"./modules/handle-key":5,"./modules/handle-swal-dom":6,"./modules/set-params":8,"./modules/utils":9}],2:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0});var o={title:"",text:"",type:null,allowOutsideClick:!1,showConfirmButton:!0,showCancelButton:!1,closeOnConfirm:!0,closeOnCancel:!0,confirmButtonText:"OK",confirmButtonColor:"#8CD4F5",cancelButtonText:"Cancel",imageUrl:null,imageSize:null,timer:null,customClass:"",html:!1,animation:!0,allowEscapeKey:!0,inputType:"text",inputPlaceholder:"",inputValue:"",showLoaderOnConfirm:!1};n["default"]=o,t.exports=n["default"]},{}],3:[function(t,n,o){Object.defineProperty(o,"__esModule",{value:!0});var a=t("./utils"),r=(t("./handle-swal-dom"),t("./handle-dom")),s=function(t,n,o){function s(e){m&&n.confirmButtonColor&&(p.style.backgroundColor=e)}var u,c,d,f=t||e.event,p=f.target||f.srcElement,m=-1!==p.className.indexOf("confirm"),v=-1!==p.className.indexOf("sweet-overlay"),y=r.hasClass(o,"visible"),h=n.doneFunction&&"true"===o.getAttribute("data-has-done-function");switch(m&&n.confirmButtonColor&&(u=n.confirmButtonColor,c=a.colorLuminance(u,-.04),d=a.colorLuminance(u,-.14)),f.type){case"mouseover":s(c);break;case"mouseout":s(u);break;case"mousedown":s(d);break;case"mouseup":s(c);break;case"focus":var b=o.querySelector("button.confirm"),g=o.querySelector("button.cancel");m?g.style.boxShadow="none":b.style.boxShadow="none";break;case"click":var w=o===p,C=r.isDescendant(o,p);if(!w&&!C&&y&&!n.allowOutsideClick)break;m&&h&&y?l(o,n):h&&y||v?i(o,n):r.isDescendant(o,p)&&"BUTTON"===p.tagName&&sweetAlert.close()}},l=function(e,t){var n=!0;r.hasClass(e,"show-input")&&(n=e.querySelector("input").value,n||(n="")),t.doneFunction(n),t.closeOnConfirm&&sweetAlert.close(),t.showLoaderOnConfirm&&sweetAlert.disableButtons()},i=function(e,t){var n=String(t.doneFunction).replace(/\s/g,""),o="function("===n.substring(0,9)&&")"!==n.substring(9,10);o&&t.doneFunction(!1),t.closeOnCancel&&sweetAlert.close()};o["default"]={handleButton:s,handleConfirm:l,handleCancel:i},n.exports=o["default"]},{"./handle-dom":4,"./handle-swal-dom":6,"./utils":9}],4:[function(n,o,a){Object.defineProperty(a,"__esModule",{value:!0});var r=function(e,t){return new RegExp(" "+t+" ").test(" "+e.className+" ")},s=function(e,t){r(e,t)||(e.className+=" "+t)},l=function(e,t){var n=" "+e.className.replace(/[\t\r\n]/g," ")+" ";if(r(e,t)){for(;n.indexOf(" "+t+" ")>=0;)n=n.replace(" "+t+" "," ");e.className=n.replace(/^\s+|\s+$/g,"")}},i=function(e){var n=t.createElement("div");return n.appendChild(t.createTextNode(e)),n.innerHTML},u=function(e){e.style.opacity="",e.style.display="block"},c=function(e){if(e&&!e.length)return u(e);for(var t=0;t<e.length;++t)u(e[t])},d=function(e){e.style.opacity="",e.style.display="none"},f=function(e){if(e&&!e.length)return d(e);for(var t=0;t<e.length;++t)d(e[t])},p=function(e,t){for(var n=t.parentNode;null!==n;){if(n===e)return!0;n=n.parentNode}return!1},m=function(e){e.style.left="-9999px",e.style.display="block";var t,n=e.clientHeight;return t="undefined"!=typeof getComputedStyle?parseInt(getComputedStyle(e).getPropertyValue("padding-top"),10):parseInt(e.currentStyle.padding),e.style.left="",e.style.display="none","-"+parseInt((n+t)/2)+"px"},v=function(e,t){if(+e.style.opacity<1){t=t||16,e.style.opacity=0,e.style.display="block";var n=+new Date,o=function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){e.style.opacity=+e.style.opacity+(new Date-n)/100,n=+new Date,+e.style.opacity<1&&setTimeout(o,t)});o()}e.style.display="block"},y=function(e,t){t=t||16,e.style.opacity=1;var n=+new Date,o=function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){e.style.opacity=+e.style.opacity-(new Date-n)/100,n=+new Date,+e.style.opacity>0?setTimeout(o,t):e.style.display="none"});o()},h=function(n){if("function"==typeof MouseEvent){var o=new MouseEvent("click",{view:e,bubbles:!1,cancelable:!0});n.dispatchEvent(o)}else if(t.createEvent){var a=t.createEvent("MouseEvents");a.initEvent("click",!1,!1),n.dispatchEvent(a)}else t.createEventObject?n.fireEvent("onclick"):"function"==typeof n.onclick&&n.onclick()},b=function(t){"function"==typeof t.stopPropagation?(t.stopPropagation(),t.preventDefault()):e.event&&e.event.hasOwnProperty("cancelBubble")&&(e.event.cancelBubble=!0)};a.hasClass=r,a.addClass=s,a.removeClass=l,a.escapeHtml=i,a._show=u,a.show=c,a._hide=d,a.hide=f,a.isDescendant=p,a.getTopMargin=m,a.fadeIn=v,a.fadeOut=y,a.fireClick=h,a.stopEventPropagation=b},{}],5:[function(t,o,a){Object.defineProperty(a,"__esModule",{value:!0});var r=t("./handle-dom"),s=t("./handle-swal-dom"),l=function(t,o,a){var l=t||e.event,i=l.keyCode||l.which,u=a.querySelector("button.confirm"),c=a.querySelector("button.cancel"),d=a.querySelectorAll("button[tabindex]");if(-1!==[9,13,32,27].indexOf(i)){for(var f=l.target||l.srcElement,p=-1,m=0;m<d.length;m++)if(f===d[m]){p=m;break}9===i?(f=-1===p?u:p===d.length-1?d[0]:d[p+1],r.stopEventPropagation(l),f.focus(),o.confirmButtonColor&&s.setFocusStyle(f,o.confirmButtonColor)):13===i?("INPUT"===f.tagName&&(f=u,u.focus()),f=-1===p?u:n):27===i&&o.allowEscapeKey===!0?(f=c,r.fireClick(f,l)):f=n}};a["default"]=l,o.exports=a["default"]},{"./handle-dom":4,"./handle-swal-dom":6}],6:[function(n,o,a){var r=function(e){return e&&e.__esModule?e:{"default":e}};Object.defineProperty(a,"__esModule",{value:!0});var s=n("./utils"),l=n("./handle-dom"),i=n("./default-params"),u=r(i),c=n("./injected-html"),d=r(c),f=".sweet-alert",p=".sweet-overlay",m=function(){var e=t.createElement("div");for(e.innerHTML=d["default"];e.firstChild;)t.body.appendChild(e.firstChild)},v=function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){var e=t.querySelector(f);return e||(m(),e=v()),e}),y=function(){var e=v();return e?e.querySelector("input"):void 0},h=function(){return t.querySelector(p)},b=function(e,t){var n=s.hexToRgb(t);e.style.boxShadow="0 0 2px rgba("+n+", 0.8), inset 0 0 0 1px rgba(0, 0, 0, 0.05)"},g=function(n){var o=v();l.fadeIn(h(),10),l.show(o),l.addClass(o,"showSweetAlert"),l.removeClass(o,"hideSweetAlert"),e.previousActiveElement=t.activeElement;var a=o.querySelector("button.confirm");a.focus(),setTimeout(function(){l.addClass(o,"visible")},500);var r=o.getAttribute("data-timer");if("null"!==r&&""!==r){var s=n;o.timeout=setTimeout(function(){var e=(s||null)&&"true"===o.getAttribute("data-has-done-function");e?s(null):sweetAlert.close()},r)}},w=function(){var e=v(),t=y();l.removeClass(e,"show-input"),t.value=u["default"].inputValue,t.setAttribute("type",u["default"].inputType),t.setAttribute("placeholder",u["default"].inputPlaceholder),C()},C=function(e){if(e&&13===e.keyCode)return!1;var t=v(),n=t.querySelector(".sa-input-error");l.removeClass(n,"show");var o=t.querySelector(".sa-error-container");l.removeClass(o,"show")},S=function(){var e=v();e.style.marginTop=l.getTopMargin(v())};a.sweetAlertInitialize=m,a.getModal=v,a.getOverlay=h,a.getInput=y,a.setFocusStyle=b,a.openModal=g,a.resetInput=w,a.resetInputError=C,a.fixVerticalPosition=S},{"./default-params":2,"./handle-dom":4,"./injected-html":7,"./utils":9}],7:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0});var o='<div class="sweet-overlay" tabIndex="-1"></div><div class="sweet-alert"><div class="sa-icon sa-error">\n      <span class="sa-x-mark">\n        <span class="sa-line sa-left"></span>\n        <span class="sa-line sa-right"></span>\n      </span>\n    </div><div class="sa-icon sa-warning">\n      <span class="sa-body"></span>\n      <span class="sa-dot"></span>\n    </div><div class="sa-icon sa-info"></div><div class="sa-icon sa-success">\n      <span class="sa-line sa-tip"></span>\n      <span class="sa-line sa-long"></span>\n\n      <div class="sa-placeholder"></div>\n      <div class="sa-fix"></div>\n    </div><div class="sa-icon sa-custom"></div><h2>Title</h2>\n    <p>Text</p>\n    <fieldset>\n      <input type="text" tabIndex="3" />\n      <div class="sa-input-error"></div>\n    </fieldset><div class="sa-error-container">\n      <div class="icon">!</div>\n      <p>Not valid!</p>\n    </div><div class="sa-button-container">\n      <button class="cancel" tabIndex="2">Cancel</button>\n      <div class="sa-confirm-button-container">\n        <button class="confirm" tabIndex="1">OK</button><div class="la-ball-fall">\n          <div></div>\n          <div></div>\n          <div></div>\n        </div>\n      </div>\n    </div></div>';n["default"]=o,t.exports=n["default"]},{}],8:[function(e,t,o){Object.defineProperty(o,"__esModule",{value:!0});var a=e("./utils"),r=e("./handle-swal-dom"),s=e("./handle-dom"),l=["error","warning","info","success","input","prompt"],i=function(e){var t=r.getModal(),o=t.querySelector("h2"),i=t.querySelector("p"),u=t.querySelector("button.cancel"),c=t.querySelector("button.confirm");if(o.innerHTML=e.html?e.title:s.escapeHtml(e.title).split("\n").join("<br>"),i.innerHTML=e.html?e.text:s.escapeHtml(e.text||"").split("\n").join("<br>"),e.text&&s.show(i),e.customClass)s.addClass(t,e.customClass),t.setAttribute("data-custom-class",e.customClass);else{var d=t.getAttribute("data-custom-class");s.removeClass(t,d),t.setAttribute("data-custom-class","")}if(s.hide(t.querySelectorAll(".sa-icon")),e.type&&!a.isIE8()){var f=function(){for(var o=!1,a=0;a<l.length;a++)if(e.type===l[a]){o=!0;break}if(!o)return logStr("Unknown alert type: "+e.type),{v:!1};var i=["success","error","warning","info"],u=n;-1!==i.indexOf(e.type)&&(u=t.querySelector(".sa-icon.sa-"+e.type),s.show(u));var c=r.getInput();switch(e.type){case"success":s.addClass(u,"animate"),s.addClass(u.querySelector(".sa-tip"),"animateSuccessTip"),s.addClass(u.querySelector(".sa-long"),"animateSuccessLong");break;case"error":s.addClass(u,"animateErrorIcon"),s.addClass(u.querySelector(".sa-x-mark"),"animateXMark");break;case"warning":s.addClass(u,"pulseWarning"),s.addClass(u.querySelector(".sa-body"),"pulseWarningIns"),s.addClass(u.querySelector(".sa-dot"),"pulseWarningIns");break;case"input":case"prompt":c.setAttribute("type",e.inputType),c.value=e.inputValue,c.setAttribute("placeholder",e.inputPlaceholder),s.addClass(t,"show-input"),setTimeout(function(){c.focus(),c.addEventListener("keyup",swal.resetInputError)},400)}}();if("object"==typeof f)return f.v}if(e.imageUrl){var p=t.querySelector(".sa-icon.sa-custom");p.style.backgroundImage="url("+e.imageUrl+")",s.show(p);var m=80,v=80;if(e.imageSize){var y=e.imageSize.toString().split("x"),h=y[0],b=y[1];h&&b?(m=h,v=b):logStr("Parameter imageSize expects value with format WIDTHxHEIGHT, got "+e.imageSize)}p.setAttribute("style",p.getAttribute("style")+"width:"+m+"px; height:"+v+"px")}t.setAttribute("data-has-cancel-button",e.showCancelButton),e.showCancelButton?u.style.display="inline-block":s.hide(u),t.setAttribute("data-has-confirm-button",e.showConfirmButton),e.showConfirmButton?c.style.display="inline-block":s.hide(c),e.cancelButtonText&&(u.innerHTML=s.escapeHtml(e.cancelButtonText)),e.confirmButtonText&&(c.innerHTML=s.escapeHtml(e.confirmButtonText)),e.confirmButtonColor&&(c.style.backgroundColor=e.confirmButtonColor,c.style.borderLeftColor=e.confirmLoadingButtonColor,c.style.borderRightColor=e.confirmLoadingButtonColor,r.setFocusStyle(c,e.confirmButtonColor)),t.setAttribute("data-allow-outside-click",e.allowOutsideClick);var g=e.doneFunction?!0:!1;t.setAttribute("data-has-done-function",g),e.animation?"string"==typeof e.animation?t.setAttribute("data-animation",e.animation):t.setAttribute("data-animation","pop"):t.setAttribute("data-animation","none"),t.setAttribute("data-timer",e.timer)};o["default"]=i,t.exports=o["default"]},{"./handle-dom":4,"./handle-swal-dom":6,"./utils":9}],9:[function(t,n,o){Object.defineProperty(o,"__esModule",{value:!0});var a=function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e},r=function(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?parseInt(t[1],16)+", "+parseInt(t[2],16)+", "+parseInt(t[3],16):null},s=function(){return e.attachEvent&&!e.addEventListener},l=function(t){e.console&&e.console.log("SweetAlert: "+t)},i=function(e,t){e=String(e).replace(/[^0-9a-f]/gi,""),e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),t=t||0;var n,o,a="#";for(o=0;3>o;o++)n=parseInt(e.substr(2*o,2),16),n=Math.round(Math.min(Math.max(0,n+n*t),255)).toString(16),a+=("00"+n).substr(n.length);return a};o.extend=a,o.hexToRgb=r,o.isIE8=s,o.logStr=l,o.colorLuminance=i},{}]},{},[1]),"function"==typeof define&&define.amd?define(function(){return sweetAlert}):"undefined"!=typeof module&&module.exports&&(module.exports=sweetAlert)}(window,document);
/*! appverse-web-html5-core - v0.5.0 - */
!function(){"use strict";angular.module("appverse.detection",["appverse.utils"])}(),function(){"use strict";function a(){function a(a){return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))}this.$get=function(){return this},this.hasAppverseMobile=function(){return"undefined"!=typeof Appverse&&Appverse.System&&null!==Appverse.System.GetOSInfo()?!0:!1},this.isMobileBrowser=function(b){var c=b||navigator.userAgent||navigator.vendor||window.opera;return a(c)}}angular.module("appverse.detection").provider("MobileDetector",a)}(),function(){"use strict";function a(a){this.mobileDetector=a,this.bandwidth=0,this.isPollingBandwidth=!1,this.$http=void 0,this.$get=["$http",function(a){return this.$http=a,this}],this.hasAppverseMobile=function(){return this.mobileDetector.hasAppverseMobile()},this.isMobileBrowser=function(){return this.mobileDetector.isMobileBrowser()},this.hasAppverseMobile()||this.isMobileBrowser();var b=function(a,b){var c=document.createEvent("Event");c.initEvent(a,!0,!0),c.data=b,window.dispatchEvent(c)},c=function(a,c){var d=new XMLHttpRequest,e=setTimeout(function(){d.abort(),b("connectiontimeout",{})},5e3);d.onreadystatechange=function(){4===d.readyState&&(200===d.status?(b("goodconnection",{}),clearTimeout(e),c&&c(d.responseText)):b("connectionerror",{}))},d.open("GET",a),d.send()};this.isOnline=window.navigator.onLine,this.isPollingOnlineStatus=!1,this.testOnlineStatus=function(){c("resources/detection/ping.json")},this.startPollingOnlineStatus=function(a){this.isPollingOnlineStatus=setInterval(this.testOnlineStatus,a)},this.stopPollingOnlineStatus=function(){clearInterval(this.isPollingOnlineStatus),this.isPollingOnlineStatus=!1},this.testBandwidth=function(){var a="resources/detection/bandwidth.json?bust="+(new Date).getTime();b("onBandwidthStart"),this.$http.get(a).success(function(a,c,d){b("onBandwidthEnd",{status:c,data:a,getResponseHeader:d})})},this.startPollingBandwidth=function(a){this.testBandwidth(),this.isPollingBandwidth=setInterval(this.testBandwidth.bind(this),a)},this.stopPollingBandwidth=function(){clearInterval(this.isPollingBandwidth),this.isPollingBandwidth=!1}}
a.$inject = ["a"];angular.module("appverse.detection").provider("Detection",a),a.$inject=["MobileDetectorProvider"]}(),function(){"use strict";function a(a,b,c,d){a.info("appverse.detection run"),d.addEventListener?(d.addEventListener("online",function(){a.debug("detectionController online"),b.isOnline=!0,c.$digest()},!0),d.addEventListener("offline",function(){a.debug("detectionController offline"),b.isOnline=!1,c.$digest()},!0)):a.warn("Detection module: $window.addEventListener not supported."),d.applicationCache?d.applicationCache.addEventListener("error",function(){a.debug("Error fetching manifest: a good chance we are offline")}):a.warn("Detection module: $window.applicationCache not supported."),window.addEventListener?(window.addEventListener("goodconnection",function(){a.debug("detectionController goodconnection"),b.isOnline=!0,c.$digest()}),window.addEventListener("connectiontimeout",function(){a.debug("detectionController connectiontimeout"),b.isOnline=!1,c.$digest()}),window.addEventListener("connectionerror",function(){a.debug("detectionController connectionerror"),b.isOnline=!1,c.$digest()}),window.addEventListener("onBandwidthStart",function(){a.debug("detectionController onBandwidthStart"),b.bandwidthStartTime=new Date}),window.addEventListener("onBandwidthEnd",function(d){a.debug("detectionController onBandwidthEnd");var e=parseInt(d.data.getResponseHeader("Content-Length"),10),f=new Date-b.bandwidthStartTime;b.bandwidth=parseInt(e/1024/(f/1e3)),setTimeout(function(){c.$digest()})})):a.warn("Detection module: window.addEventListener not supported.")}
a.$inject = ["a", "b", "c", "d"];angular.module("appverse.detection").run(a),a.$inject=["$log","Detection","$rootScope","$window"]}();
//# sourceMappingURL=appverse-detection.min.js.map
/**
 * @license
 * lodash 3.10.1 (Custom Build) lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 * Build: `lodash modern -o ./lodash.js`
 */
;(function(){function n(n,t){if(n!==t){var r=null===n,e=n===w,u=n===n,o=null===t,i=t===w,f=t===t;if(n>t&&!o||!u||r&&!i&&f||e&&f)return 1;if(n<t&&!r||!f||o&&!e&&u||i&&u)return-1}return 0}function t(n,t,r){for(var e=n.length,u=r?e:-1;r?u--:++u<e;)if(t(n[u],u,n))return u;return-1}function r(n,t,r){if(t!==t)return p(n,r);r-=1;for(var e=n.length;++r<e;)if(n[r]===t)return r;return-1}function e(n){return typeof n=="function"||false}function u(n){return null==n?"":n+""}function o(n,t){for(var r=-1,e=n.length;++r<e&&-1<t.indexOf(n.charAt(r)););
return r}function i(n,t){for(var r=n.length;r--&&-1<t.indexOf(n.charAt(r)););return r}function f(t,r){return n(t.a,r.a)||t.b-r.b}function a(n){return Nn[n]}function c(n){return Tn[n]}function l(n,t,r){return t?n=Bn[n]:r&&(n=Dn[n]),"\\"+n}function s(n){return"\\"+Dn[n]}function p(n,t,r){var e=n.length;for(t+=r?0:-1;r?t--:++t<e;){var u=n[t];if(u!==u)return t}return-1}function h(n){return!!n&&typeof n=="object"}function _(n){return 160>=n&&9<=n&&13>=n||32==n||160==n||5760==n||6158==n||8192<=n&&(8202>=n||8232==n||8233==n||8239==n||8287==n||12288==n||65279==n);
}function v(n,t){for(var r=-1,e=n.length,u=-1,o=[];++r<e;)n[r]===t&&(n[r]=z,o[++u]=r);return o}function g(n){for(var t=-1,r=n.length;++t<r&&_(n.charCodeAt(t)););return t}function y(n){for(var t=n.length;t--&&_(n.charCodeAt(t)););return t}function d(n){return Ln[n]}function m(_){function Nn(n){if(h(n)&&!(Oo(n)||n instanceof zn)){if(n instanceof Ln)return n;if(nu.call(n,"__chain__")&&nu.call(n,"__wrapped__"))return Mr(n)}return new Ln(n)}function Tn(){}function Ln(n,t,r){this.__wrapped__=n,this.__actions__=r||[],
this.__chain__=!!t}function zn(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=false,this.__iteratees__=[],this.__takeCount__=Ru,this.__views__=[]}function Bn(){this.__data__={}}function Dn(n){var t=n?n.length:0;for(this.data={hash:gu(null),set:new lu};t--;)this.push(n[t])}function Mn(n,t){var r=n.data;return(typeof t=="string"||ge(t)?r.set.has(t):r.hash[t])?0:-1}function qn(n,t){var r=-1,e=n.length;for(t||(t=Be(e));++r<e;)t[r]=n[r];return t}function Pn(n,t){for(var r=-1,e=n.length;++r<e&&false!==t(n[r],r,n););
return n}function Kn(n,t){for(var r=-1,e=n.length;++r<e;)if(!t(n[r],r,n))return false;return true}function Vn(n,t){for(var r=-1,e=n.length,u=-1,o=[];++r<e;){var i=n[r];t(i,r,n)&&(o[++u]=i)}return o}function Gn(n,t){for(var r=-1,e=n.length,u=Be(e);++r<e;)u[r]=t(n[r],r,n);return u}function Jn(n,t){for(var r=-1,e=t.length,u=n.length;++r<e;)n[u+r]=t[r];return n}function Xn(n,t,r,e){var u=-1,o=n.length;for(e&&o&&(r=n[++u]);++u<o;)r=t(r,n[u],u,n);return r}function Hn(n,t){for(var r=-1,e=n.length;++r<e;)if(t(n[r],r,n))return true;
return false}function Qn(n,t,r,e){return n!==w&&nu.call(e,r)?n:t}function nt(n,t,r){for(var e=-1,u=zo(t),o=u.length;++e<o;){var i=u[e],f=n[i],a=r(f,t[i],i,n,t);(a===a?a===f:f!==f)&&(f!==w||i in n)||(n[i]=a)}return n}function tt(n,t){return null==t?n:et(t,zo(t),n)}function rt(n,t){for(var r=-1,e=null==n,u=!e&&Er(n),o=u?n.length:0,i=t.length,f=Be(i);++r<i;){var a=t[r];f[r]=u?Cr(a,o)?n[a]:w:e?w:n[a]}return f}function et(n,t,r){r||(r={});for(var e=-1,u=t.length;++e<u;){var o=t[e];r[o]=n[o]}return r}function ut(n,t,r){
var e=typeof n;return"function"==e?t===w?n:Bt(n,t,r):null==n?Fe:"object"==e?bt(n):t===w?ze(n):xt(n,t)}function ot(n,t,r,e,u,o,i){var f;if(r&&(f=u?r(n,e,u):r(n)),f!==w)return f;if(!ge(n))return n;if(e=Oo(n)){if(f=kr(n),!t)return qn(n,f)}else{var a=ru.call(n),c=a==K;if(a!=Z&&a!=B&&(!c||u))return Fn[a]?Rr(n,a,t):u?n:{};if(f=Ir(c?{}:n),!t)return tt(f,n)}for(o||(o=[]),i||(i=[]),u=o.length;u--;)if(o[u]==n)return i[u];return o.push(n),i.push(f),(e?Pn:_t)(n,function(e,u){f[u]=ot(e,t,r,u,n,o,i)}),f}function it(n,t,r){
if(typeof n!="function")throw new Ge(L);return su(function(){n.apply(w,r)},t)}function ft(n,t){var e=n?n.length:0,u=[];if(!e)return u;var o=-1,i=xr(),f=i===r,a=f&&t.length>=F&&gu&&lu?new Dn(t):null,c=t.length;a&&(i=Mn,f=false,t=a);n:for(;++o<e;)if(a=n[o],f&&a===a){for(var l=c;l--;)if(t[l]===a)continue n;u.push(a)}else 0>i(t,a,0)&&u.push(a);return u}function at(n,t){var r=true;return Su(n,function(n,e,u){return r=!!t(n,e,u)}),r}function ct(n,t,r,e){var u=e,o=u;return Su(n,function(n,i,f){i=+t(n,i,f),(r(i,u)||i===e&&i===o)&&(u=i,
o=n)}),o}function lt(n,t){var r=[];return Su(n,function(n,e,u){t(n,e,u)&&r.push(n)}),r}function st(n,t,r,e){var u;return r(n,function(n,r,o){return t(n,r,o)?(u=e?r:n,false):void 0}),u}function pt(n,t,r,e){e||(e=[]);for(var u=-1,o=n.length;++u<o;){var i=n[u];h(i)&&Er(i)&&(r||Oo(i)||pe(i))?t?pt(i,t,r,e):Jn(e,i):r||(e[e.length]=i)}return e}function ht(n,t){Nu(n,t,Re)}function _t(n,t){return Nu(n,t,zo)}function vt(n,t){return Tu(n,t,zo)}function gt(n,t){for(var r=-1,e=t.length,u=-1,o=[];++r<e;){var i=t[r];
ve(n[i])&&(o[++u]=i)}return o}function yt(n,t,r){if(null!=n){r!==w&&r in Br(n)&&(t=[r]),r=0;for(var e=t.length;null!=n&&r<e;)n=n[t[r++]];return r&&r==e?n:w}}function dt(n,t,r,e,u,o){if(n===t)n=true;else if(null==n||null==t||!ge(n)&&!h(t))n=n!==n&&t!==t;else n:{var i=dt,f=Oo(n),a=Oo(t),c=D,l=D;f||(c=ru.call(n),c==B?c=Z:c!=Z&&(f=xe(n))),a||(l=ru.call(t),l==B?l=Z:l!=Z&&xe(t));var s=c==Z,a=l==Z,l=c==l;if(!l||f||s){if(!e&&(c=s&&nu.call(n,"__wrapped__"),a=a&&nu.call(t,"__wrapped__"),c||a)){n=i(c?n.value():n,a?t.value():t,r,e,u,o);
break n}if(l){for(u||(u=[]),o||(o=[]),c=u.length;c--;)if(u[c]==n){n=o[c]==t;break n}u.push(n),o.push(t),n=(f?yr:mr)(n,t,i,r,e,u,o),u.pop(),o.pop()}else n=false}else n=dr(n,t,c)}return n}function mt(n,t,r){var e=t.length,u=e,o=!r;if(null==n)return!u;for(n=Br(n);e--;){var i=t[e];if(o&&i[2]?i[1]!==n[i[0]]:!(i[0]in n))return false}for(;++e<u;){var i=t[e],f=i[0],a=n[f],c=i[1];if(o&&i[2]){if(a===w&&!(f in n))return false}else if(i=r?r(a,c,f):w,i===w?!dt(c,a,r,true):!i)return false}return true}function wt(n,t){var r=-1,e=Er(n)?Be(n.length):[];
return Su(n,function(n,u,o){e[++r]=t(n,u,o)}),e}function bt(n){var t=Ar(n);if(1==t.length&&t[0][2]){var r=t[0][0],e=t[0][1];return function(n){return null==n?false:n[r]===e&&(e!==w||r in Br(n))}}return function(n){return mt(n,t)}}function xt(n,t){var r=Oo(n),e=Wr(n)&&t===t&&!ge(t),u=n+"";return n=Dr(n),function(o){if(null==o)return false;var i=u;if(o=Br(o),!(!r&&e||i in o)){if(o=1==n.length?o:yt(o,Et(n,0,-1)),null==o)return false;i=Zr(n),o=Br(o)}return o[i]===t?t!==w||i in o:dt(t,o[i],w,true)}}function At(n,t,r,e,u){
if(!ge(n))return n;var o=Er(t)&&(Oo(t)||xe(t)),i=o?w:zo(t);return Pn(i||t,function(f,a){if(i&&(a=f,f=t[a]),h(f)){e||(e=[]),u||(u=[]);n:{for(var c=a,l=e,s=u,p=l.length,_=t[c];p--;)if(l[p]==_){n[c]=s[p];break n}var p=n[c],v=r?r(p,_,c,n,t):w,g=v===w;g&&(v=_,Er(_)&&(Oo(_)||xe(_))?v=Oo(p)?p:Er(p)?qn(p):[]:me(_)||pe(_)?v=pe(p)?ke(p):me(p)?p:{}:g=false),l.push(_),s.push(v),g?n[c]=At(v,_,r,l,s):(v===v?v!==p:p===p)&&(n[c]=v)}}else c=n[a],l=r?r(c,f,a,n,t):w,(s=l===w)&&(l=f),l===w&&(!o||a in n)||!s&&(l===l?l===c:c!==c)||(n[a]=l);
}),n}function jt(n){return function(t){return null==t?w:t[n]}}function kt(n){var t=n+"";return n=Dr(n),function(r){return yt(r,n,t)}}function It(n,t){for(var r=n?t.length:0;r--;){var e=t[r];if(e!=u&&Cr(e)){var u=e;pu.call(n,e,1)}}}function Rt(n,t){return n+yu(ku()*(t-n+1))}function Ot(n,t,r,e,u){return u(n,function(n,u,o){r=e?(e=false,n):t(r,n,u,o)}),r}function Et(n,t,r){var e=-1,u=n.length;for(t=null==t?0:+t||0,0>t&&(t=-t>u?0:u+t),r=r===w||r>u?u:+r||0,0>r&&(r+=u),u=t>r?0:r-t>>>0,t>>>=0,r=Be(u);++e<u;)r[e]=n[e+t];
return r}function Ct(n,t){var r;return Su(n,function(n,e,u){return r=t(n,e,u),!r}),!!r}function Ut(n,t){var r=n.length;for(n.sort(t);r--;)n[r]=n[r].c;return n}function Wt(t,r,e){var u=wr(),o=-1;return r=Gn(r,function(n){return u(n)}),t=wt(t,function(n){return{a:Gn(r,function(t){return t(n)}),b:++o,c:n}}),Ut(t,function(t,r){var u;n:{for(var o=-1,i=t.a,f=r.a,a=i.length,c=e.length;++o<a;)if(u=n(i[o],f[o])){if(o>=c)break n;o=e[o],u*="asc"===o||true===o?1:-1;break n}u=t.b-r.b}return u})}function $t(n,t){
var r=0;return Su(n,function(n,e,u){r+=+t(n,e,u)||0}),r}function St(n,t){var e=-1,u=xr(),o=n.length,i=u===r,f=i&&o>=F,a=f&&gu&&lu?new Dn(void 0):null,c=[];a?(u=Mn,i=false):(f=false,a=t?[]:c);n:for(;++e<o;){var l=n[e],s=t?t(l,e,n):l;if(i&&l===l){for(var p=a.length;p--;)if(a[p]===s)continue n;t&&a.push(s),c.push(l)}else 0>u(a,s,0)&&((t||f)&&a.push(s),c.push(l))}return c}function Ft(n,t){for(var r=-1,e=t.length,u=Be(e);++r<e;)u[r]=n[t[r]];return u}function Nt(n,t,r,e){for(var u=n.length,o=e?u:-1;(e?o--:++o<u)&&t(n[o],o,n););
return r?Et(n,e?0:o,e?o+1:u):Et(n,e?o+1:0,e?u:o)}function Tt(n,t){var r=n;r instanceof zn&&(r=r.value());for(var e=-1,u=t.length;++e<u;)var o=t[e],r=o.func.apply(o.thisArg,Jn([r],o.args));return r}function Lt(n,t,r){var e=0,u=n?n.length:e;if(typeof t=="number"&&t===t&&u<=Eu){for(;e<u;){var o=e+u>>>1,i=n[o];(r?i<=t:i<t)&&null!==i?e=o+1:u=o}return u}return zt(n,t,Fe,r)}function zt(n,t,r,e){t=r(t);for(var u=0,o=n?n.length:0,i=t!==t,f=null===t,a=t===w;u<o;){var c=yu((u+o)/2),l=r(n[c]),s=l!==w,p=l===l;
(i?p||e:f?p&&s&&(e||null!=l):a?p&&(e||s):null==l?0:e?l<=t:l<t)?u=c+1:o=c}return xu(o,Ou)}function Bt(n,t,r){if(typeof n!="function")return Fe;if(t===w)return n;switch(r){case 1:return function(r){return n.call(t,r)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,o){return n.call(t,r,e,u,o)};case 5:return function(r,e,u,o,i){return n.call(t,r,e,u,o,i)}}return function(){return n.apply(t,arguments)}}function Dt(n){var t=new ou(n.byteLength);return new hu(t).set(new hu(n)),
t}function Mt(n,t,r){for(var e=r.length,u=-1,o=bu(n.length-e,0),i=-1,f=t.length,a=Be(f+o);++i<f;)a[i]=t[i];for(;++u<e;)a[r[u]]=n[u];for(;o--;)a[i++]=n[u++];return a}function qt(n,t,r){for(var e=-1,u=r.length,o=-1,i=bu(n.length-u,0),f=-1,a=t.length,c=Be(i+a);++o<i;)c[o]=n[o];for(i=o;++f<a;)c[i+f]=t[f];for(;++e<u;)c[i+r[e]]=n[o++];return c}function Pt(n,t){return function(r,e,u){var o=t?t():{};if(e=wr(e,u,3),Oo(r)){u=-1;for(var i=r.length;++u<i;){var f=r[u];n(o,f,e(f,u,r),r)}}else Su(r,function(t,r,u){
n(o,t,e(t,r,u),u)});return o}}function Kt(n){return le(function(t,r){var e=-1,u=null==t?0:r.length,o=2<u?r[u-2]:w,i=2<u?r[2]:w,f=1<u?r[u-1]:w;for(typeof o=="function"?(o=Bt(o,f,5),u-=2):(o=typeof f=="function"?f:w,u-=o?1:0),i&&Ur(r[0],r[1],i)&&(o=3>u?w:o,u=1);++e<u;)(i=r[e])&&n(t,i,o);return t})}function Vt(n,t){return function(r,e){var u=r?Bu(r):0;if(!Sr(u))return n(r,e);for(var o=t?u:-1,i=Br(r);(t?o--:++o<u)&&false!==e(i[o],o,i););return r}}function Zt(n){return function(t,r,e){var u=Br(t);e=e(t);for(var o=e.length,i=n?o:-1;n?i--:++i<o;){
var f=e[i];if(false===r(u[f],f,u))break}return t}}function Yt(n,t){function r(){return(this&&this!==Zn&&this instanceof r?e:n).apply(t,arguments)}var e=Jt(n);return r}function Gt(n){return function(t){var r=-1;t=$e(Ce(t));for(var e=t.length,u="";++r<e;)u=n(u,t[r],r);return u}}function Jt(n){return function(){var t=arguments;switch(t.length){case 0:return new n;case 1:return new n(t[0]);case 2:return new n(t[0],t[1]);case 3:return new n(t[0],t[1],t[2]);case 4:return new n(t[0],t[1],t[2],t[3]);case 5:
return new n(t[0],t[1],t[2],t[3],t[4]);case 6:return new n(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new n(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=$u(n.prototype),t=n.apply(r,t);return ge(t)?t:r}}function Xt(n){function t(r,e,u){return u&&Ur(r,e,u)&&(e=w),r=gr(r,n,w,w,w,w,w,e),r.placeholder=t.placeholder,r}return t}function Ht(n,t){return le(function(r){var e=r[0];return null==e?e:(r.push(t),n.apply(w,r))})}function Qt(n,t){return function(r,e,u){if(u&&Ur(r,e,u)&&(e=w),e=wr(e,u,3),1==e.length){
u=r=Oo(r)?r:zr(r);for(var o=e,i=-1,f=u.length,a=t,c=a;++i<f;){var l=u[i],s=+o(l);n(s,a)&&(a=s,c=l)}if(u=c,!r.length||u!==t)return u}return ct(r,e,n,t)}}function nr(n,r){return function(e,u,o){return u=wr(u,o,3),Oo(e)?(u=t(e,u,r),-1<u?e[u]:w):st(e,u,n)}}function tr(n){return function(r,e,u){return r&&r.length?(e=wr(e,u,3),t(r,e,n)):-1}}function rr(n){return function(t,r,e){return r=wr(r,e,3),st(t,r,n,true)}}function er(n){return function(){for(var t,r=arguments.length,e=n?r:-1,u=0,o=Be(r);n?e--:++e<r;){
var i=o[u++]=arguments[e];if(typeof i!="function")throw new Ge(L);!t&&Ln.prototype.thru&&"wrapper"==br(i)&&(t=new Ln([],true))}for(e=t?-1:r;++e<r;){var i=o[e],u=br(i),f="wrapper"==u?zu(i):w;t=f&&$r(f[0])&&f[1]==(E|k|R|C)&&!f[4].length&&1==f[9]?t[br(f[0])].apply(t,f[3]):1==i.length&&$r(i)?t[u]():t.thru(i)}return function(){var n=arguments,e=n[0];if(t&&1==n.length&&Oo(e)&&e.length>=F)return t.plant(e).value();for(var u=0,n=r?o[u].apply(this,n):e;++u<r;)n=o[u].call(this,n);return n}}}function ur(n,t){
return function(r,e,u){return typeof e=="function"&&u===w&&Oo(r)?n(r,e):t(r,Bt(e,u,3))}}function or(n){return function(t,r,e){return(typeof r!="function"||e!==w)&&(r=Bt(r,e,3)),n(t,r,Re)}}function ir(n){return function(t,r,e){return(typeof r!="function"||e!==w)&&(r=Bt(r,e,3)),n(t,r)}}function fr(n){return function(t,r,e){var u={};return r=wr(r,e,3),_t(t,function(t,e,o){o=r(t,e,o),e=n?o:e,t=n?t:o,u[e]=t}),u}}function ar(n){return function(t,r,e){return t=u(t),(n?t:"")+pr(t,r,e)+(n?"":t)}}function cr(n){
var t=le(function(r,e){var u=v(e,t.placeholder);return gr(r,n,w,e,u)});return t}function lr(n,t){return function(r,e,u,o){var i=3>arguments.length;return typeof e=="function"&&o===w&&Oo(r)?n(r,e,u,i):Ot(r,wr(e,o,4),u,i,t)}}function sr(n,t,r,e,u,o,i,f,a,c){function l(){for(var m=arguments.length,b=m,j=Be(m);b--;)j[b]=arguments[b];if(e&&(j=Mt(j,e,u)),o&&(j=qt(j,o,i)),_||y){var b=l.placeholder,k=v(j,b),m=m-k.length;if(m<c){var I=f?qn(f):w,m=bu(c-m,0),E=_?k:w,k=_?w:k,C=_?j:w,j=_?w:j;return t|=_?R:O,t&=~(_?O:R),
g||(t&=~(x|A)),j=[n,t,r,C,E,j,k,I,a,m],I=sr.apply(w,j),$r(n)&&Du(I,j),I.placeholder=b,I}}if(b=p?r:this,I=h?b[n]:n,f)for(m=j.length,E=xu(f.length,m),k=qn(j);E--;)C=f[E],j[E]=Cr(C,m)?k[C]:w;return s&&a<j.length&&(j.length=a),this&&this!==Zn&&this instanceof l&&(I=d||Jt(n)),I.apply(b,j)}var s=t&E,p=t&x,h=t&A,_=t&k,g=t&j,y=t&I,d=h?w:Jt(n);return l}function pr(n,t,r){return n=n.length,t=+t,n<t&&mu(t)?(t-=n,r=null==r?" ":r+"",Ue(r,vu(t/r.length)).slice(0,t)):""}function hr(n,t,r,e){function u(){for(var t=-1,f=arguments.length,a=-1,c=e.length,l=Be(c+f);++a<c;)l[a]=e[a];
for(;f--;)l[a++]=arguments[++t];return(this&&this!==Zn&&this instanceof u?i:n).apply(o?r:this,l)}var o=t&x,i=Jt(n);return u}function _r(n){var t=Pe[n];return function(n,r){return(r=r===w?0:+r||0)?(r=au(10,r),t(n*r)/r):t(n)}}function vr(n){return function(t,r,e,u){var o=wr(e);return null==e&&o===ut?Lt(t,r,n):zt(t,r,o(e,u,1),n)}}function gr(n,t,r,e,u,o,i,f){var a=t&A;if(!a&&typeof n!="function")throw new Ge(L);var c=e?e.length:0;if(c||(t&=~(R|O),e=u=w),c-=u?u.length:0,t&O){var l=e,s=u;e=u=w}var p=a?w:zu(n);
return r=[n,t,r,e,u,l,s,o,i,f],p&&(e=r[1],t=p[1],f=e|t,u=t==E&&e==k||t==E&&e==C&&r[7].length<=p[8]||t==(E|C)&&e==k,(f<E||u)&&(t&x&&(r[2]=p[2],f|=e&x?0:j),(e=p[3])&&(u=r[3],r[3]=u?Mt(u,e,p[4]):qn(e),r[4]=u?v(r[3],z):qn(p[4])),(e=p[5])&&(u=r[5],r[5]=u?qt(u,e,p[6]):qn(e),r[6]=u?v(r[5],z):qn(p[6])),(e=p[7])&&(r[7]=qn(e)),t&E&&(r[8]=null==r[8]?p[8]:xu(r[8],p[8])),null==r[9]&&(r[9]=p[9]),r[0]=p[0],r[1]=f),t=r[1],f=r[9]),r[9]=null==f?a?0:n.length:bu(f-c,0)||0,(p?Lu:Du)(t==x?Yt(r[0],r[2]):t!=R&&t!=(x|R)||r[4].length?sr.apply(w,r):hr.apply(w,r),r);
}function yr(n,t,r,e,u,o,i){var f=-1,a=n.length,c=t.length;if(a!=c&&(!u||c<=a))return false;for(;++f<a;){var l=n[f],c=t[f],s=e?e(u?c:l,u?l:c,f):w;if(s!==w){if(s)continue;return false}if(u){if(!Hn(t,function(n){return l===n||r(l,n,e,u,o,i)}))return false}else if(l!==c&&!r(l,c,e,u,o,i))return false}return true}function dr(n,t,r){switch(r){case M:case q:return+n==+t;case P:return n.name==t.name&&n.message==t.message;case V:return n!=+n?t!=+t:n==+t;case Y:case G:return n==t+""}return false}function mr(n,t,r,e,u,o,i){var f=zo(n),a=f.length,c=zo(t).length;
if(a!=c&&!u)return false;for(c=a;c--;){var l=f[c];if(!(u?l in t:nu.call(t,l)))return false}for(var s=u;++c<a;){var l=f[c],p=n[l],h=t[l],_=e?e(u?h:p,u?p:h,l):w;if(_===w?!r(p,h,e,u,o,i):!_)return false;s||(s="constructor"==l)}return s||(r=n.constructor,e=t.constructor,!(r!=e&&"constructor"in n&&"constructor"in t)||typeof r=="function"&&r instanceof r&&typeof e=="function"&&e instanceof e)?true:false}function wr(n,t,r){var e=Nn.callback||Se,e=e===Se?ut:e;return r?e(n,t,r):e}function br(n){for(var t=n.name+"",r=Wu[t],e=r?r.length:0;e--;){
var u=r[e],o=u.func;if(null==o||o==n)return u.name}return t}function xr(n,t,e){var u=Nn.indexOf||Vr,u=u===Vr?r:u;return n?u(n,t,e):u}function Ar(n){n=Oe(n);for(var t=n.length;t--;){var r=n[t][1];n[t][2]=r===r&&!ge(r)}return n}function jr(n,t){var r=null==n?w:n[t];return ye(r)?r:w}function kr(n){var t=n.length,r=new n.constructor(t);return t&&"string"==typeof n[0]&&nu.call(n,"index")&&(r.index=n.index,r.input=n.input),r}function Ir(n){return n=n.constructor,typeof n=="function"&&n instanceof n||(n=Ve),
new n}function Rr(n,t,r){var e=n.constructor;switch(t){case J:return Dt(n);case M:case q:return new e(+n);case X:case H:case Q:case nn:case tn:case rn:case en:case un:case on:return t=n.buffer,new e(r?Dt(t):t,n.byteOffset,n.length);case V:case G:return new e(n);case Y:var u=new e(n.source,kn.exec(n));u.lastIndex=n.lastIndex}return u}function Or(n,t,r){return null==n||Wr(t,n)||(t=Dr(t),n=1==t.length?n:yt(n,Et(t,0,-1)),t=Zr(t)),t=null==n?n:n[t],null==t?w:t.apply(n,r)}function Er(n){return null!=n&&Sr(Bu(n));
}function Cr(n,t){return n=typeof n=="number"||On.test(n)?+n:-1,t=null==t?Cu:t,-1<n&&0==n%1&&n<t}function Ur(n,t,r){if(!ge(r))return false;var e=typeof t;return("number"==e?Er(r)&&Cr(t,r.length):"string"==e&&t in r)?(t=r[t],n===n?n===t:t!==t):false}function Wr(n,t){var r=typeof n;return"string"==r&&dn.test(n)||"number"==r?true:Oo(n)?false:!yn.test(n)||null!=t&&n in Br(t)}function $r(n){var t=br(n),r=Nn[t];return typeof r=="function"&&t in zn.prototype?n===r?true:(t=zu(r),!!t&&n===t[0]):false}function Sr(n){return typeof n=="number"&&-1<n&&0==n%1&&n<=Cu;
}function Fr(n,t){return n===w?t:Eo(n,t,Fr)}function Nr(n,t){n=Br(n);for(var r=-1,e=t.length,u={};++r<e;){var o=t[r];o in n&&(u[o]=n[o])}return u}function Tr(n,t){var r={};return ht(n,function(n,e,u){t(n,e,u)&&(r[e]=n)}),r}function Lr(n){for(var t=Re(n),r=t.length,e=r&&n.length,u=!!e&&Sr(e)&&(Oo(n)||pe(n)),o=-1,i=[];++o<r;){var f=t[o];(u&&Cr(f,e)||nu.call(n,f))&&i.push(f)}return i}function zr(n){return null==n?[]:Er(n)?ge(n)?n:Ve(n):Ee(n)}function Br(n){return ge(n)?n:Ve(n)}function Dr(n){if(Oo(n))return n;
var t=[];return u(n).replace(mn,function(n,r,e,u){t.push(e?u.replace(An,"$1"):r||n)}),t}function Mr(n){return n instanceof zn?n.clone():new Ln(n.__wrapped__,n.__chain__,qn(n.__actions__))}function qr(n,t,r){return n&&n.length?((r?Ur(n,t,r):null==t)&&(t=1),Et(n,0>t?0:t)):[]}function Pr(n,t,r){var e=n?n.length:0;return e?((r?Ur(n,t,r):null==t)&&(t=1),t=e-(+t||0),Et(n,0,0>t?0:t)):[]}function Kr(n){return n?n[0]:w}function Vr(n,t,e){var u=n?n.length:0;if(!u)return-1;if(typeof e=="number")e=0>e?bu(u+e,0):e;else if(e)return e=Lt(n,t),
e<u&&(t===t?t===n[e]:n[e]!==n[e])?e:-1;return r(n,t,e||0)}function Zr(n){var t=n?n.length:0;return t?n[t-1]:w}function Yr(n){return qr(n,1)}function Gr(n,t,e,u){if(!n||!n.length)return[];null!=t&&typeof t!="boolean"&&(u=e,e=Ur(n,t,u)?w:t,t=false);var o=wr();if((null!=e||o!==ut)&&(e=o(e,u,3)),t&&xr()===r){t=e;var i;e=-1,u=n.length;for(var o=-1,f=[];++e<u;){var a=n[e],c=t?t(a,e,n):a;e&&i===c||(i=c,f[++o]=a)}n=f}else n=St(n,e);return n}function Jr(n){if(!n||!n.length)return[];var t=-1,r=0;n=Vn(n,function(n){
return Er(n)?(r=bu(n.length,r),true):void 0});for(var e=Be(r);++t<r;)e[t]=Gn(n,jt(t));return e}function Xr(n,t,r){return n&&n.length?(n=Jr(n),null==t?n:(t=Bt(t,r,4),Gn(n,function(n){return Xn(n,t,w,true)}))):[]}function Hr(n,t){var r=-1,e=n?n.length:0,u={};for(!e||t||Oo(n[0])||(t=[]);++r<e;){var o=n[r];t?u[o]=t[r]:o&&(u[o[0]]=o[1])}return u}function Qr(n){return n=Nn(n),n.__chain__=true,n}function ne(n,t,r){return t.call(r,n)}function te(n,t,r){var e=Oo(n)?Kn:at;return r&&Ur(n,t,r)&&(t=w),(typeof t!="function"||r!==w)&&(t=wr(t,r,3)),
e(n,t)}function re(n,t,r){var e=Oo(n)?Vn:lt;return t=wr(t,r,3),e(n,t)}function ee(n,t,r,e){var u=n?Bu(n):0;return Sr(u)||(n=Ee(n),u=n.length),r=typeof r!="number"||e&&Ur(t,r,e)?0:0>r?bu(u+r,0):r||0,typeof n=="string"||!Oo(n)&&be(n)?r<=u&&-1<n.indexOf(t,r):!!u&&-1<xr(n,t,r)}function ue(n,t,r){var e=Oo(n)?Gn:wt;return t=wr(t,r,3),e(n,t)}function oe(n,t,r){if(r?Ur(n,t,r):null==t){n=zr(n);var e=n.length;return 0<e?n[Rt(0,e-1)]:w}r=-1,n=je(n);var e=n.length,u=e-1;for(t=xu(0>t?0:+t||0,e);++r<t;){var e=Rt(r,u),o=n[e];
n[e]=n[r],n[r]=o}return n.length=t,n}function ie(n,t,r){var e=Oo(n)?Hn:Ct;return r&&Ur(n,t,r)&&(t=w),(typeof t!="function"||r!==w)&&(t=wr(t,r,3)),e(n,t)}function fe(n,t){var r;if(typeof t!="function"){if(typeof n!="function")throw new Ge(L);var e=n;n=t,t=e}return function(){return 0<--n&&(r=t.apply(this,arguments)),1>=n&&(t=w),r}}function ae(n,t,r){function e(t,r){r&&iu(r),a=p=h=w,t&&(_=ho(),c=n.apply(s,f),p||a||(f=s=w))}function u(){var n=t-(ho()-l);0>=n||n>t?e(h,a):p=su(u,n)}function o(){e(g,p);
}function i(){if(f=arguments,l=ho(),s=this,h=g&&(p||!y),false===v)var r=y&&!p;else{a||y||(_=l);var e=v-(l-_),i=0>=e||e>v;i?(a&&(a=iu(a)),_=l,c=n.apply(s,f)):a||(a=su(o,e))}return i&&p?p=iu(p):p||t===v||(p=su(u,t)),r&&(i=true,c=n.apply(s,f)),!i||p||a||(f=s=w),c}var f,a,c,l,s,p,h,_=0,v=false,g=true;if(typeof n!="function")throw new Ge(L);if(t=0>t?0:+t||0,true===r)var y=true,g=false;else ge(r)&&(y=!!r.leading,v="maxWait"in r&&bu(+r.maxWait||0,t),g="trailing"in r?!!r.trailing:g);return i.cancel=function(){p&&iu(p),a&&iu(a),
_=0,a=p=h=w},i}function ce(n,t){function r(){var e=arguments,u=t?t.apply(this,e):e[0],o=r.cache;return o.has(u)?o.get(u):(e=n.apply(this,e),r.cache=o.set(u,e),e)}if(typeof n!="function"||t&&typeof t!="function")throw new Ge(L);return r.cache=new ce.Cache,r}function le(n,t){if(typeof n!="function")throw new Ge(L);return t=bu(t===w?n.length-1:+t||0,0),function(){for(var r=arguments,e=-1,u=bu(r.length-t,0),o=Be(u);++e<u;)o[e]=r[t+e];switch(t){case 0:return n.call(this,o);case 1:return n.call(this,r[0],o);
case 2:return n.call(this,r[0],r[1],o)}for(u=Be(t+1),e=-1;++e<t;)u[e]=r[e];return u[t]=o,n.apply(this,u)}}function se(n,t){return n>t}function pe(n){return h(n)&&Er(n)&&nu.call(n,"callee")&&!cu.call(n,"callee")}function he(n,t,r,e){return e=(r=typeof r=="function"?Bt(r,e,3):w)?r(n,t):w,e===w?dt(n,t,r):!!e}function _e(n){return h(n)&&typeof n.message=="string"&&ru.call(n)==P}function ve(n){return ge(n)&&ru.call(n)==K}function ge(n){var t=typeof n;return!!n&&("object"==t||"function"==t)}function ye(n){
return null==n?false:ve(n)?uu.test(Qe.call(n)):h(n)&&Rn.test(n)}function de(n){return typeof n=="number"||h(n)&&ru.call(n)==V}function me(n){var t;if(!h(n)||ru.call(n)!=Z||pe(n)||!(nu.call(n,"constructor")||(t=n.constructor,typeof t!="function"||t instanceof t)))return false;var r;return ht(n,function(n,t){r=t}),r===w||nu.call(n,r)}function we(n){return ge(n)&&ru.call(n)==Y}function be(n){return typeof n=="string"||h(n)&&ru.call(n)==G}function xe(n){return h(n)&&Sr(n.length)&&!!Sn[ru.call(n)]}function Ae(n,t){
return n<t}function je(n){var t=n?Bu(n):0;return Sr(t)?t?qn(n):[]:Ee(n)}function ke(n){return et(n,Re(n))}function Ie(n){return gt(n,Re(n))}function Re(n){if(null==n)return[];ge(n)||(n=Ve(n));for(var t=n.length,t=t&&Sr(t)&&(Oo(n)||pe(n))&&t||0,r=n.constructor,e=-1,r=typeof r=="function"&&r.prototype===n,u=Be(t),o=0<t;++e<t;)u[e]=e+"";for(var i in n)o&&Cr(i,t)||"constructor"==i&&(r||!nu.call(n,i))||u.push(i);return u}function Oe(n){n=Br(n);for(var t=-1,r=zo(n),e=r.length,u=Be(e);++t<e;){var o=r[t];
u[t]=[o,n[o]]}return u}function Ee(n){return Ft(n,zo(n))}function Ce(n){return(n=u(n))&&n.replace(En,a).replace(xn,"")}function Ue(n,t){var r="";if(n=u(n),t=+t,1>t||!n||!mu(t))return r;do t%2&&(r+=n),t=yu(t/2),n+=n;while(t);return r}function We(n,t,r){var e=n;return(n=u(n))?(r?Ur(e,t,r):null==t)?n.slice(g(n),y(n)+1):(t+="",n.slice(o(n,t),i(n,t)+1)):n}function $e(n,t,r){return r&&Ur(n,t,r)&&(t=w),n=u(n),n.match(t||Wn)||[]}function Se(n,t,r){return r&&Ur(n,t,r)&&(t=w),h(n)?Ne(n):ut(n,t)}function Fe(n){
return n}function Ne(n){return bt(ot(n,true))}function Te(n,t,r){if(null==r){var e=ge(t),u=e?zo(t):w;((u=u&&u.length?gt(t,u):w)?u.length:e)||(u=false,r=t,t=n,n=this)}u||(u=gt(t,zo(t)));var o=true,e=-1,i=ve(n),f=u.length;false===r?o=false:ge(r)&&"chain"in r&&(o=r.chain);for(;++e<f;){r=u[e];var a=t[r];n[r]=a,i&&(n.prototype[r]=function(t){return function(){var r=this.__chain__;if(o||r){var e=n(this.__wrapped__);return(e.__actions__=qn(this.__actions__)).push({func:t,args:arguments,thisArg:n}),e.__chain__=r,e}return t.apply(n,Jn([this.value()],arguments));
}}(a))}return n}function Le(){}function ze(n){return Wr(n)?jt(n):kt(n)}_=_?Yn.defaults(Zn.Object(),_,Yn.pick(Zn,$n)):Zn;var Be=_.Array,De=_.Date,Me=_.Error,qe=_.Function,Pe=_.Math,Ke=_.Number,Ve=_.Object,Ze=_.RegExp,Ye=_.String,Ge=_.TypeError,Je=Be.prototype,Xe=Ve.prototype,He=Ye.prototype,Qe=qe.prototype.toString,nu=Xe.hasOwnProperty,tu=0,ru=Xe.toString,eu=Zn._,uu=Ze("^"+Qe.call(nu).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ou=_.ArrayBuffer,iu=_.clearTimeout,fu=_.parseFloat,au=Pe.pow,cu=Xe.propertyIsEnumerable,lu=jr(_,"Set"),su=_.setTimeout,pu=Je.splice,hu=_.Uint8Array,_u=jr(_,"WeakMap"),vu=Pe.ceil,gu=jr(Ve,"create"),yu=Pe.floor,du=jr(Be,"isArray"),mu=_.isFinite,wu=jr(Ve,"keys"),bu=Pe.max,xu=Pe.min,Au=jr(De,"now"),ju=_.parseInt,ku=Pe.random,Iu=Ke.NEGATIVE_INFINITY,Ru=Ke.POSITIVE_INFINITY,Ou=4294967294,Eu=2147483647,Cu=9007199254740991,Uu=_u&&new _u,Wu={};
Nn.support={},Nn.templateSettings={escape:_n,evaluate:vn,interpolate:gn,variable:"",imports:{_:Nn}};var $u=function(){function n(){}return function(t){if(ge(t)){n.prototype=t;var r=new n;n.prototype=w}return r||{}}}(),Su=Vt(_t),Fu=Vt(vt,true),Nu=Zt(),Tu=Zt(true),Lu=Uu?function(n,t){return Uu.set(n,t),n}:Fe,zu=Uu?function(n){return Uu.get(n)}:Le,Bu=jt("length"),Du=function(){var n=0,t=0;return function(r,e){var u=ho(),o=S-(u-t);if(t=u,0<o){if(++n>=$)return r}else n=0;return Lu(r,e)}}(),Mu=le(function(n,t){
return h(n)&&Er(n)?ft(n,pt(t,false,true)):[]}),qu=tr(),Pu=tr(true),Ku=le(function(n){for(var t=n.length,e=t,u=Be(l),o=xr(),i=o===r,f=[];e--;){var a=n[e]=Er(a=n[e])?a:[];u[e]=i&&120<=a.length&&gu&&lu?new Dn(e&&a):null}var i=n[0],c=-1,l=i?i.length:0,s=u[0];n:for(;++c<l;)if(a=i[c],0>(s?Mn(s,a):o(f,a,0))){for(e=t;--e;){var p=u[e];if(0>(p?Mn(p,a):o(n[e],a,0)))continue n}s&&s.push(a),f.push(a)}return f}),Vu=le(function(t,r){r=pt(r);var e=rt(t,r);return It(t,r.sort(n)),e}),Zu=vr(),Yu=vr(true),Gu=le(function(n){return St(pt(n,false,true));
}),Ju=le(function(n,t){return Er(n)?ft(n,t):[]}),Xu=le(Jr),Hu=le(function(n){var t=n.length,r=2<t?n[t-2]:w,e=1<t?n[t-1]:w;return 2<t&&typeof r=="function"?t-=2:(r=1<t&&typeof e=="function"?(--t,e):w,e=w),n.length=t,Xr(n,r,e)}),Qu=le(function(n){return n=pt(n),this.thru(function(t){t=Oo(t)?t:[Br(t)];for(var r=n,e=-1,u=t.length,o=-1,i=r.length,f=Be(u+i);++e<u;)f[e]=t[e];for(;++o<i;)f[e++]=r[o];return f})}),no=le(function(n,t){return rt(n,pt(t))}),to=Pt(function(n,t,r){nu.call(n,r)?++n[r]:n[r]=1}),ro=nr(Su),eo=nr(Fu,true),uo=ur(Pn,Su),oo=ur(function(n,t){
for(var r=n.length;r--&&false!==t(n[r],r,n););return n},Fu),io=Pt(function(n,t,r){nu.call(n,r)?n[r].push(t):n[r]=[t]}),fo=Pt(function(n,t,r){n[r]=t}),ao=le(function(n,t,r){var e=-1,u=typeof t=="function",o=Wr(t),i=Er(n)?Be(n.length):[];return Su(n,function(n){var f=u?t:o&&null!=n?n[t]:w;i[++e]=f?f.apply(n,r):Or(n,t,r)}),i}),co=Pt(function(n,t,r){n[r?0:1].push(t)},function(){return[[],[]]}),lo=lr(Xn,Su),so=lr(function(n,t,r,e){var u=n.length;for(e&&u&&(r=n[--u]);u--;)r=t(r,n[u],u,n);return r},Fu),po=le(function(n,t){
if(null==n)return[];var r=t[2];return r&&Ur(t[0],t[1],r)&&(t.length=1),Wt(n,pt(t),[])}),ho=Au||function(){return(new De).getTime()},_o=le(function(n,t,r){var e=x;if(r.length)var u=v(r,_o.placeholder),e=e|R;return gr(n,e,t,r,u)}),vo=le(function(n,t){t=t.length?pt(t):Ie(n);for(var r=-1,e=t.length;++r<e;){var u=t[r];n[u]=gr(n[u],x,n)}return n}),go=le(function(n,t,r){var e=x|A;if(r.length)var u=v(r,go.placeholder),e=e|R;return gr(t,e,n,r,u)}),yo=Xt(k),mo=Xt(I),wo=le(function(n,t){return it(n,1,t)}),bo=le(function(n,t,r){
return it(n,t,r)}),xo=er(),Ao=er(true),jo=le(function(n,t){if(t=pt(t),typeof n!="function"||!Kn(t,e))throw new Ge(L);var r=t.length;return le(function(e){for(var u=xu(e.length,r);u--;)e[u]=t[u](e[u]);return n.apply(this,e)})}),ko=cr(R),Io=cr(O),Ro=le(function(n,t){return gr(n,C,w,w,w,pt(t))}),Oo=du||function(n){return h(n)&&Sr(n.length)&&ru.call(n)==D},Eo=Kt(At),Co=Kt(function(n,t,r){return r?nt(n,t,r):tt(n,t)}),Uo=Ht(Co,function(n,t){return n===w?t:n}),Wo=Ht(Eo,Fr),$o=rr(_t),So=rr(vt),Fo=or(Nu),No=or(Tu),To=ir(_t),Lo=ir(vt),zo=wu?function(n){
var t=null==n?w:n.constructor;return typeof t=="function"&&t.prototype===n||typeof n!="function"&&Er(n)?Lr(n):ge(n)?wu(n):[]}:Lr,Bo=fr(true),Do=fr(),Mo=le(function(n,t){if(null==n)return{};if("function"!=typeof t[0])return t=Gn(pt(t),Ye),Nr(n,ft(Re(n),t));var r=Bt(t[0],t[1],3);return Tr(n,function(n,t,e){return!r(n,t,e)})}),qo=le(function(n,t){return null==n?{}:"function"==typeof t[0]?Tr(n,Bt(t[0],t[1],3)):Nr(n,pt(t))}),Po=Gt(function(n,t,r){return t=t.toLowerCase(),n+(r?t.charAt(0).toUpperCase()+t.slice(1):t);
}),Ko=Gt(function(n,t,r){return n+(r?"-":"")+t.toLowerCase()}),Vo=ar(),Zo=ar(true),Yo=Gt(function(n,t,r){return n+(r?"_":"")+t.toLowerCase()}),Go=Gt(function(n,t,r){return n+(r?" ":"")+(t.charAt(0).toUpperCase()+t.slice(1))}),Jo=le(function(n,t){try{return n.apply(w,t)}catch(r){return _e(r)?r:new Me(r)}}),Xo=le(function(n,t){return function(r){return Or(r,n,t)}}),Ho=le(function(n,t){return function(r){return Or(n,r,t)}}),Qo=_r("ceil"),ni=_r("floor"),ti=Qt(se,Iu),ri=Qt(Ae,Ru),ei=_r("round");return Nn.prototype=Tn.prototype,
Ln.prototype=$u(Tn.prototype),Ln.prototype.constructor=Ln,zn.prototype=$u(Tn.prototype),zn.prototype.constructor=zn,Bn.prototype["delete"]=function(n){return this.has(n)&&delete this.__data__[n]},Bn.prototype.get=function(n){return"__proto__"==n?w:this.__data__[n]},Bn.prototype.has=function(n){return"__proto__"!=n&&nu.call(this.__data__,n)},Bn.prototype.set=function(n,t){return"__proto__"!=n&&(this.__data__[n]=t),this},Dn.prototype.push=function(n){var t=this.data;typeof n=="string"||ge(n)?t.set.add(n):t.hash[n]=true;
},ce.Cache=Bn,Nn.after=function(n,t){if(typeof t!="function"){if(typeof n!="function")throw new Ge(L);var r=n;n=t,t=r}return n=mu(n=+n)?n:0,function(){return 1>--n?t.apply(this,arguments):void 0}},Nn.ary=function(n,t,r){return r&&Ur(n,t,r)&&(t=w),t=n&&null==t?n.length:bu(+t||0,0),gr(n,E,w,w,w,w,t)},Nn.assign=Co,Nn.at=no,Nn.before=fe,Nn.bind=_o,Nn.bindAll=vo,Nn.bindKey=go,Nn.callback=Se,Nn.chain=Qr,Nn.chunk=function(n,t,r){t=(r?Ur(n,t,r):null==t)?1:bu(yu(t)||1,1),r=0;for(var e=n?n.length:0,u=-1,o=Be(vu(e/t));r<e;)o[++u]=Et(n,r,r+=t);
return o},Nn.compact=function(n){for(var t=-1,r=n?n.length:0,e=-1,u=[];++t<r;){var o=n[t];o&&(u[++e]=o)}return u},Nn.constant=function(n){return function(){return n}},Nn.countBy=to,Nn.create=function(n,t,r){var e=$u(n);return r&&Ur(n,t,r)&&(t=w),t?tt(e,t):e},Nn.curry=yo,Nn.curryRight=mo,Nn.debounce=ae,Nn.defaults=Uo,Nn.defaultsDeep=Wo,Nn.defer=wo,Nn.delay=bo,Nn.difference=Mu,Nn.drop=qr,Nn.dropRight=Pr,Nn.dropRightWhile=function(n,t,r){return n&&n.length?Nt(n,wr(t,r,3),true,true):[]},Nn.dropWhile=function(n,t,r){
return n&&n.length?Nt(n,wr(t,r,3),true):[]},Nn.fill=function(n,t,r,e){var u=n?n.length:0;if(!u)return[];for(r&&typeof r!="number"&&Ur(n,t,r)&&(r=0,e=u),u=n.length,r=null==r?0:+r||0,0>r&&(r=-r>u?0:u+r),e=e===w||e>u?u:+e||0,0>e&&(e+=u),u=r>e?0:e>>>0,r>>>=0;r<u;)n[r++]=t;return n},Nn.filter=re,Nn.flatten=function(n,t,r){var e=n?n.length:0;return r&&Ur(n,t,r)&&(t=false),e?pt(n,t):[]},Nn.flattenDeep=function(n){return n&&n.length?pt(n,true):[]},Nn.flow=xo,Nn.flowRight=Ao,Nn.forEach=uo,Nn.forEachRight=oo,Nn.forIn=Fo,
Nn.forInRight=No,Nn.forOwn=To,Nn.forOwnRight=Lo,Nn.functions=Ie,Nn.groupBy=io,Nn.indexBy=fo,Nn.initial=function(n){return Pr(n,1)},Nn.intersection=Ku,Nn.invert=function(n,t,r){r&&Ur(n,t,r)&&(t=w),r=-1;for(var e=zo(n),u=e.length,o={};++r<u;){var i=e[r],f=n[i];t?nu.call(o,f)?o[f].push(i):o[f]=[i]:o[f]=i}return o},Nn.invoke=ao,Nn.keys=zo,Nn.keysIn=Re,Nn.map=ue,Nn.mapKeys=Bo,Nn.mapValues=Do,Nn.matches=Ne,Nn.matchesProperty=function(n,t){return xt(n,ot(t,true))},Nn.memoize=ce,Nn.merge=Eo,Nn.method=Xo,Nn.methodOf=Ho,
Nn.mixin=Te,Nn.modArgs=jo,Nn.negate=function(n){if(typeof n!="function")throw new Ge(L);return function(){return!n.apply(this,arguments)}},Nn.omit=Mo,Nn.once=function(n){return fe(2,n)},Nn.pairs=Oe,Nn.partial=ko,Nn.partialRight=Io,Nn.partition=co,Nn.pick=qo,Nn.pluck=function(n,t){return ue(n,ze(t))},Nn.property=ze,Nn.propertyOf=function(n){return function(t){return yt(n,Dr(t),t+"")}},Nn.pull=function(){var n=arguments,t=n[0];if(!t||!t.length)return t;for(var r=0,e=xr(),u=n.length;++r<u;)for(var o=0,i=n[r];-1<(o=e(t,i,o));)pu.call(t,o,1);
return t},Nn.pullAt=Vu,Nn.range=function(n,t,r){r&&Ur(n,t,r)&&(t=r=w),n=+n||0,r=null==r?1:+r||0,null==t?(t=n,n=0):t=+t||0;var e=-1;t=bu(vu((t-n)/(r||1)),0);for(var u=Be(t);++e<t;)u[e]=n,n+=r;return u},Nn.rearg=Ro,Nn.reject=function(n,t,r){var e=Oo(n)?Vn:lt;return t=wr(t,r,3),e(n,function(n,r,e){return!t(n,r,e)})},Nn.remove=function(n,t,r){var e=[];if(!n||!n.length)return e;var u=-1,o=[],i=n.length;for(t=wr(t,r,3);++u<i;)r=n[u],t(r,u,n)&&(e.push(r),o.push(u));return It(n,o),e},Nn.rest=Yr,Nn.restParam=le,
Nn.set=function(n,t,r){if(null==n)return n;var e=t+"";t=null!=n[e]||Wr(t,n)?[e]:Dr(t);for(var e=-1,u=t.length,o=u-1,i=n;null!=i&&++e<u;){var f=t[e];ge(i)&&(e==o?i[f]=r:null==i[f]&&(i[f]=Cr(t[e+1])?[]:{})),i=i[f]}return n},Nn.shuffle=function(n){return oe(n,Ru)},Nn.slice=function(n,t,r){var e=n?n.length:0;return e?(r&&typeof r!="number"&&Ur(n,t,r)&&(t=0,r=e),Et(n,t,r)):[]},Nn.sortBy=function(n,t,r){if(null==n)return[];r&&Ur(n,t,r)&&(t=w);var e=-1;return t=wr(t,r,3),n=wt(n,function(n,r,u){return{a:t(n,r,u),
b:++e,c:n}}),Ut(n,f)},Nn.sortByAll=po,Nn.sortByOrder=function(n,t,r,e){return null==n?[]:(e&&Ur(t,r,e)&&(r=w),Oo(t)||(t=null==t?[]:[t]),Oo(r)||(r=null==r?[]:[r]),Wt(n,t,r))},Nn.spread=function(n){if(typeof n!="function")throw new Ge(L);return function(t){return n.apply(this,t)}},Nn.take=function(n,t,r){return n&&n.length?((r?Ur(n,t,r):null==t)&&(t=1),Et(n,0,0>t?0:t)):[]},Nn.takeRight=function(n,t,r){var e=n?n.length:0;return e?((r?Ur(n,t,r):null==t)&&(t=1),t=e-(+t||0),Et(n,0>t?0:t)):[]},Nn.takeRightWhile=function(n,t,r){
return n&&n.length?Nt(n,wr(t,r,3),false,true):[]},Nn.takeWhile=function(n,t,r){return n&&n.length?Nt(n,wr(t,r,3)):[]},Nn.tap=function(n,t,r){return t.call(r,n),n},Nn.throttle=function(n,t,r){var e=true,u=true;if(typeof n!="function")throw new Ge(L);return false===r?e=false:ge(r)&&(e="leading"in r?!!r.leading:e,u="trailing"in r?!!r.trailing:u),ae(n,t,{leading:e,maxWait:+t,trailing:u})},Nn.thru=ne,Nn.times=function(n,t,r){if(n=yu(n),1>n||!mu(n))return[];var e=-1,u=Be(xu(n,4294967295));for(t=Bt(t,r,1);++e<n;)4294967295>e?u[e]=t(e):t(e);
return u},Nn.toArray=je,Nn.toPlainObject=ke,Nn.transform=function(n,t,r,e){var u=Oo(n)||xe(n);return t=wr(t,e,4),null==r&&(u||ge(n)?(e=n.constructor,r=u?Oo(n)?new e:[]:$u(ve(e)?e.prototype:w)):r={}),(u?Pn:_t)(n,function(n,e,u){return t(r,n,e,u)}),r},Nn.union=Gu,Nn.uniq=Gr,Nn.unzip=Jr,Nn.unzipWith=Xr,Nn.values=Ee,Nn.valuesIn=function(n){return Ft(n,Re(n))},Nn.where=function(n,t){return re(n,bt(t))},Nn.without=Ju,Nn.wrap=function(n,t){return t=null==t?Fe:t,gr(t,R,w,[n],[])},Nn.xor=function(){for(var n=-1,t=arguments.length;++n<t;){
var r=arguments[n];if(Er(r))var e=e?Jn(ft(e,r),ft(r,e)):r}return e?St(e):[]},Nn.zip=Xu,Nn.zipObject=Hr,Nn.zipWith=Hu,Nn.backflow=Ao,Nn.collect=ue,Nn.compose=Ao,Nn.each=uo,Nn.eachRight=oo,Nn.extend=Co,Nn.iteratee=Se,Nn.methods=Ie,Nn.object=Hr,Nn.select=re,Nn.tail=Yr,Nn.unique=Gr,Te(Nn,Nn),Nn.add=function(n,t){return(+n||0)+(+t||0)},Nn.attempt=Jo,Nn.camelCase=Po,Nn.capitalize=function(n){return(n=u(n))&&n.charAt(0).toUpperCase()+n.slice(1)},Nn.ceil=Qo,Nn.clone=function(n,t,r,e){return t&&typeof t!="boolean"&&Ur(n,t,r)?t=false:typeof t=="function"&&(e=r,
r=t,t=false),typeof r=="function"?ot(n,t,Bt(r,e,3)):ot(n,t)},Nn.cloneDeep=function(n,t,r){return typeof t=="function"?ot(n,true,Bt(t,r,3)):ot(n,true)},Nn.deburr=Ce,Nn.endsWith=function(n,t,r){n=u(n),t+="";var e=n.length;return r=r===w?e:xu(0>r?0:+r||0,e),r-=t.length,0<=r&&n.indexOf(t,r)==r},Nn.escape=function(n){return(n=u(n))&&hn.test(n)?n.replace(sn,c):n},Nn.escapeRegExp=function(n){return(n=u(n))&&bn.test(n)?n.replace(wn,l):n||"(?:)"},Nn.every=te,Nn.find=ro,Nn.findIndex=qu,Nn.findKey=$o,Nn.findLast=eo,
Nn.findLastIndex=Pu,Nn.findLastKey=So,Nn.findWhere=function(n,t){return ro(n,bt(t))},Nn.first=Kr,Nn.floor=ni,Nn.get=function(n,t,r){return n=null==n?w:yt(n,Dr(t),t+""),n===w?r:n},Nn.gt=se,Nn.gte=function(n,t){return n>=t},Nn.has=function(n,t){if(null==n)return false;var r=nu.call(n,t);if(!r&&!Wr(t)){if(t=Dr(t),n=1==t.length?n:yt(n,Et(t,0,-1)),null==n)return false;t=Zr(t),r=nu.call(n,t)}return r||Sr(n.length)&&Cr(t,n.length)&&(Oo(n)||pe(n))},Nn.identity=Fe,Nn.includes=ee,Nn.indexOf=Vr,Nn.inRange=function(n,t,r){
return t=+t||0,r===w?(r=t,t=0):r=+r||0,n>=xu(t,r)&&n<bu(t,r)},Nn.isArguments=pe,Nn.isArray=Oo,Nn.isBoolean=function(n){return true===n||false===n||h(n)&&ru.call(n)==M},Nn.isDate=function(n){return h(n)&&ru.call(n)==q},Nn.isElement=function(n){return!!n&&1===n.nodeType&&h(n)&&!me(n)},Nn.isEmpty=function(n){return null==n?true:Er(n)&&(Oo(n)||be(n)||pe(n)||h(n)&&ve(n.splice))?!n.length:!zo(n).length},Nn.isEqual=he,Nn.isError=_e,Nn.isFinite=function(n){return typeof n=="number"&&mu(n)},Nn.isFunction=ve,Nn.isMatch=function(n,t,r,e){
return r=typeof r=="function"?Bt(r,e,3):w,mt(n,Ar(t),r)},Nn.isNaN=function(n){return de(n)&&n!=+n},Nn.isNative=ye,Nn.isNull=function(n){return null===n},Nn.isNumber=de,Nn.isObject=ge,Nn.isPlainObject=me,Nn.isRegExp=we,Nn.isString=be,Nn.isTypedArray=xe,Nn.isUndefined=function(n){return n===w},Nn.kebabCase=Ko,Nn.last=Zr,Nn.lastIndexOf=function(n,t,r){var e=n?n.length:0;if(!e)return-1;var u=e;if(typeof r=="number")u=(0>r?bu(e+r,0):xu(r||0,e-1))+1;else if(r)return u=Lt(n,t,true)-1,n=n[u],(t===t?t===n:n!==n)?u:-1;
if(t!==t)return p(n,u,true);for(;u--;)if(n[u]===t)return u;return-1},Nn.lt=Ae,Nn.lte=function(n,t){return n<=t},Nn.max=ti,Nn.min=ri,Nn.noConflict=function(){return Zn._=eu,this},Nn.noop=Le,Nn.now=ho,Nn.pad=function(n,t,r){n=u(n),t=+t;var e=n.length;return e<t&&mu(t)?(e=(t-e)/2,t=yu(e),e=vu(e),r=pr("",e,r),r.slice(0,t)+n+r):n},Nn.padLeft=Vo,Nn.padRight=Zo,Nn.parseInt=function(n,t,r){return(r?Ur(n,t,r):null==t)?t=0:t&&(t=+t),n=We(n),ju(n,t||(In.test(n)?16:10))},Nn.random=function(n,t,r){r&&Ur(n,t,r)&&(t=r=w);
var e=null==n,u=null==t;return null==r&&(u&&typeof n=="boolean"?(r=n,n=1):typeof t=="boolean"&&(r=t,u=true)),e&&u&&(t=1,u=false),n=+n||0,u?(t=n,n=0):t=+t||0,r||n%1||t%1?(r=ku(),xu(n+r*(t-n+fu("1e-"+((r+"").length-1))),t)):Rt(n,t)},Nn.reduce=lo,Nn.reduceRight=so,Nn.repeat=Ue,Nn.result=function(n,t,r){var e=null==n?w:n[t];return e===w&&(null==n||Wr(t,n)||(t=Dr(t),n=1==t.length?n:yt(n,Et(t,0,-1)),e=null==n?w:n[Zr(t)]),e=e===w?r:e),ve(e)?e.call(n):e},Nn.round=ei,Nn.runInContext=m,Nn.size=function(n){var t=n?Bu(n):0;
return Sr(t)?t:zo(n).length},Nn.snakeCase=Yo,Nn.some=ie,Nn.sortedIndex=Zu,Nn.sortedLastIndex=Yu,Nn.startCase=Go,Nn.startsWith=function(n,t,r){return n=u(n),r=null==r?0:xu(0>r?0:+r||0,n.length),n.lastIndexOf(t,r)==r},Nn.sum=function(n,t,r){if(r&&Ur(n,t,r)&&(t=w),t=wr(t,r,3),1==t.length){n=Oo(n)?n:zr(n),r=n.length;for(var e=0;r--;)e+=+t(n[r])||0;n=e}else n=$t(n,t);return n},Nn.template=function(n,t,r){var e=Nn.templateSettings;r&&Ur(n,t,r)&&(t=r=w),n=u(n),t=nt(tt({},r||t),e,Qn),r=nt(tt({},t.imports),e.imports,Qn);
var o,i,f=zo(r),a=Ft(r,f),c=0;r=t.interpolate||Cn;var l="__p+='";r=Ze((t.escape||Cn).source+"|"+r.source+"|"+(r===gn?jn:Cn).source+"|"+(t.evaluate||Cn).source+"|$","g");var p="sourceURL"in t?"//# sourceURL="+t.sourceURL+"\n":"";if(n.replace(r,function(t,r,e,u,f,a){return e||(e=u),l+=n.slice(c,a).replace(Un,s),r&&(o=true,l+="'+__e("+r+")+'"),f&&(i=true,l+="';"+f+";\n__p+='"),e&&(l+="'+((__t=("+e+"))==null?'':__t)+'"),c=a+t.length,t}),l+="';",(t=t.variable)||(l="with(obj){"+l+"}"),l=(i?l.replace(fn,""):l).replace(an,"$1").replace(cn,"$1;"),
l="function("+(t||"obj")+"){"+(t?"":"obj||(obj={});")+"var __t,__p=''"+(o?",__e=_.escape":"")+(i?",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}":";")+l+"return __p}",t=Jo(function(){return qe(f,p+"return "+l).apply(w,a)}),t.source=l,_e(t))throw t;return t},Nn.trim=We,Nn.trimLeft=function(n,t,r){var e=n;return(n=u(n))?n.slice((r?Ur(e,t,r):null==t)?g(n):o(n,t+"")):n},Nn.trimRight=function(n,t,r){var e=n;return(n=u(n))?(r?Ur(e,t,r):null==t)?n.slice(0,y(n)+1):n.slice(0,i(n,t+"")+1):n;
},Nn.trunc=function(n,t,r){r&&Ur(n,t,r)&&(t=w);var e=U;if(r=W,null!=t)if(ge(t)){var o="separator"in t?t.separator:o,e="length"in t?+t.length||0:e;r="omission"in t?u(t.omission):r}else e=+t||0;if(n=u(n),e>=n.length)return n;if(e-=r.length,1>e)return r;if(t=n.slice(0,e),null==o)return t+r;if(we(o)){if(n.slice(e).search(o)){var i,f=n.slice(0,e);for(o.global||(o=Ze(o.source,(kn.exec(o)||"")+"g")),o.lastIndex=0;n=o.exec(f);)i=n.index;t=t.slice(0,null==i?e:i)}}else n.indexOf(o,e)!=e&&(o=t.lastIndexOf(o),
-1<o&&(t=t.slice(0,o)));return t+r},Nn.unescape=function(n){return(n=u(n))&&pn.test(n)?n.replace(ln,d):n},Nn.uniqueId=function(n){var t=++tu;return u(n)+t},Nn.words=$e,Nn.all=te,Nn.any=ie,Nn.contains=ee,Nn.eq=he,Nn.detect=ro,Nn.foldl=lo,Nn.foldr=so,Nn.head=Kr,Nn.include=ee,Nn.inject=lo,Te(Nn,function(){var n={};return _t(Nn,function(t,r){Nn.prototype[r]||(n[r]=t)}),n}(),false),Nn.sample=oe,Nn.prototype.sample=function(n){return this.__chain__||null!=n?this.thru(function(t){return oe(t,n)}):oe(this.value());
},Nn.VERSION=b,Pn("bind bindKey curry curryRight partial partialRight".split(" "),function(n){Nn[n].placeholder=Nn}),Pn(["drop","take"],function(n,t){zn.prototype[n]=function(r){var e=this.__filtered__;if(e&&!t)return new zn(this);r=null==r?1:bu(yu(r)||0,0);var u=this.clone();return e?u.__takeCount__=xu(u.__takeCount__,r):u.__views__.push({size:r,type:n+(0>u.__dir__?"Right":"")}),u},zn.prototype[n+"Right"]=function(t){return this.reverse()[n](t).reverse()}}),Pn(["filter","map","takeWhile"],function(n,t){
var r=t+1,e=r!=T;zn.prototype[n]=function(n,t){var u=this.clone();return u.__iteratees__.push({iteratee:wr(n,t,1),type:r}),u.__filtered__=u.__filtered__||e,u}}),Pn(["first","last"],function(n,t){var r="take"+(t?"Right":"");zn.prototype[n]=function(){return this[r](1).value()[0]}}),Pn(["initial","rest"],function(n,t){var r="drop"+(t?"":"Right");zn.prototype[n]=function(){return this.__filtered__?new zn(this):this[r](1)}}),Pn(["pluck","where"],function(n,t){var r=t?"filter":"map",e=t?bt:ze;zn.prototype[n]=function(n){
return this[r](e(n))}}),zn.prototype.compact=function(){return this.filter(Fe)},zn.prototype.reject=function(n,t){return n=wr(n,t,1),this.filter(function(t){return!n(t)})},zn.prototype.slice=function(n,t){n=null==n?0:+n||0;var r=this;return r.__filtered__&&(0<n||0>t)?new zn(r):(0>n?r=r.takeRight(-n):n&&(r=r.drop(n)),t!==w&&(t=+t||0,r=0>t?r.dropRight(-t):r.take(t-n)),r)},zn.prototype.takeRightWhile=function(n,t){return this.reverse().takeWhile(n,t).reverse()},zn.prototype.toArray=function(){return this.take(Ru);
},_t(zn.prototype,function(n,t){var r=/^(?:filter|map|reject)|While$/.test(t),e=/^(?:first|last)$/.test(t),u=Nn[e?"take"+("last"==t?"Right":""):t];u&&(Nn.prototype[t]=function(){function t(n){return e&&i?u(n,1)[0]:u.apply(w,Jn([n],o))}var o=e?[1]:arguments,i=this.__chain__,f=this.__wrapped__,a=!!this.__actions__.length,c=f instanceof zn,l=o[0],s=c||Oo(f);return s&&r&&typeof l=="function"&&1!=l.length&&(c=s=false),l={func:ne,args:[t],thisArg:w},a=c&&!a,e&&!i?a?(f=f.clone(),f.__actions__.push(l),n.call(f)):u.call(w,this.value())[0]:!e&&s?(f=a?f:new zn(this),
f=n.apply(f,o),f.__actions__.push(l),new Ln(f,i)):this.thru(t)})}),Pn("join pop push replace shift sort splice split unshift".split(" "),function(n){var t=(/^(?:replace|split)$/.test(n)?He:Je)[n],r=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",e=/^(?:join|pop|replace|shift)$/.test(n);Nn.prototype[n]=function(){var n=arguments;return e&&!this.__chain__?t.apply(this.value(),n):this[r](function(r){return t.apply(r,n)})}}),_t(zn.prototype,function(n,t){var r=Nn[t];if(r){var e=r.name+"";(Wu[e]||(Wu[e]=[])).push({
name:t,func:r})}}),Wu[sr(w,A).name]=[{name:"wrapper",func:w}],zn.prototype.clone=function(){var n=new zn(this.__wrapped__);return n.__actions__=qn(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=qn(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=qn(this.__views__),n},zn.prototype.reverse=function(){if(this.__filtered__){var n=new zn(this);n.__dir__=-1,n.__filtered__=true}else n=this.clone(),n.__dir__*=-1;return n},zn.prototype.value=function(){
var n,t=this.__wrapped__.value(),r=this.__dir__,e=Oo(t),u=0>r,o=e?t.length:0;n=o;for(var i=this.__views__,f=0,a=-1,c=i.length;++a<c;){var l=i[a],s=l.size;switch(l.type){case"drop":f+=s;break;case"dropRight":n-=s;break;case"take":n=xu(n,f+s);break;case"takeRight":f=bu(f,n-s)}}if(n={start:f,end:n},i=n.start,f=n.end,n=f-i,u=u?f:i-1,i=this.__iteratees__,f=i.length,a=0,c=xu(n,this.__takeCount__),!e||o<F||o==n&&c==n)return Tt(t,this.__actions__);e=[];n:for(;n--&&a<c;){for(u+=r,o=-1,l=t[u];++o<f;){var p=i[o],s=p.type,p=p.iteratee(l);
if(s==T)l=p;else if(!p){if(s==N)continue n;break n}}e[a++]=l}return e},Nn.prototype.chain=function(){return Qr(this)},Nn.prototype.commit=function(){return new Ln(this.value(),this.__chain__)},Nn.prototype.concat=Qu,Nn.prototype.plant=function(n){for(var t,r=this;r instanceof Tn;){var e=Mr(r);t?u.__wrapped__=e:t=e;var u=e,r=r.__wrapped__}return u.__wrapped__=n,t},Nn.prototype.reverse=function(){function n(n){return n.reverse()}var t=this.__wrapped__;return t instanceof zn?(this.__actions__.length&&(t=new zn(this)),
t=t.reverse(),t.__actions__.push({func:ne,args:[n],thisArg:w}),new Ln(t,this.__chain__)):this.thru(n)},Nn.prototype.toString=function(){return this.value()+""},Nn.prototype.run=Nn.prototype.toJSON=Nn.prototype.valueOf=Nn.prototype.value=function(){return Tt(this.__wrapped__,this.__actions__)},Nn.prototype.collect=Nn.prototype.map,Nn.prototype.head=Nn.prototype.first,Nn.prototype.select=Nn.prototype.filter,Nn.prototype.tail=Nn.prototype.rest,Nn}var w,b="3.10.1",x=1,A=2,j=4,k=8,I=16,R=32,O=64,E=128,C=256,U=30,W="...",$=150,S=16,F=200,N=1,T=2,L="Expected a function",z="__lodash_placeholder__",B="[object Arguments]",D="[object Array]",M="[object Boolean]",q="[object Date]",P="[object Error]",K="[object Function]",V="[object Number]",Z="[object Object]",Y="[object RegExp]",G="[object String]",J="[object ArrayBuffer]",X="[object Float32Array]",H="[object Float64Array]",Q="[object Int8Array]",nn="[object Int16Array]",tn="[object Int32Array]",rn="[object Uint8Array]",en="[object Uint8ClampedArray]",un="[object Uint16Array]",on="[object Uint32Array]",fn=/\b__p\+='';/g,an=/\b(__p\+=)''\+/g,cn=/(__e\(.*?\)|\b__t\))\+'';/g,ln=/&(?:amp|lt|gt|quot|#39|#96);/g,sn=/[&<>"'`]/g,pn=RegExp(ln.source),hn=RegExp(sn.source),_n=/<%-([\s\S]+?)%>/g,vn=/<%([\s\S]+?)%>/g,gn=/<%=([\s\S]+?)%>/g,yn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,dn=/^\w*$/,mn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g,wn=/^[:!,]|[\\^$.*+?()[\]{}|\/]|(^[0-9a-fA-Fnrtuvx])|([\n\r\u2028\u2029])/g,bn=RegExp(wn.source),xn=/[\u0300-\u036f\ufe20-\ufe23]/g,An=/\\(\\)?/g,jn=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,kn=/\w*$/,In=/^0[xX]/,Rn=/^\[object .+?Constructor\]$/,On=/^\d+$/,En=/[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g,Cn=/($^)/,Un=/['\n\r\u2028\u2029\\]/g,Wn=RegExp("[A-Z\\xc0-\\xd6\\xd8-\\xde]+(?=[A-Z\\xc0-\\xd6\\xd8-\\xde][a-z\\xdf-\\xf6\\xf8-\\xff]+)|[A-Z\\xc0-\\xd6\\xd8-\\xde]?[a-z\\xdf-\\xf6\\xf8-\\xff]+|[A-Z\\xc0-\\xd6\\xd8-\\xde]+|[0-9]+","g"),$n="Array ArrayBuffer Date Error Float32Array Float64Array Function Int8Array Int16Array Int32Array Math Number Object RegExp Set String _ clearTimeout isFinite parseFloat parseInt setTimeout TypeError Uint8Array Uint8ClampedArray Uint16Array Uint32Array WeakMap".split(" "),Sn={};
Sn[X]=Sn[H]=Sn[Q]=Sn[nn]=Sn[tn]=Sn[rn]=Sn[en]=Sn[un]=Sn[on]=true,Sn[B]=Sn[D]=Sn[J]=Sn[M]=Sn[q]=Sn[P]=Sn[K]=Sn["[object Map]"]=Sn[V]=Sn[Z]=Sn[Y]=Sn["[object Set]"]=Sn[G]=Sn["[object WeakMap]"]=false;var Fn={};Fn[B]=Fn[D]=Fn[J]=Fn[M]=Fn[q]=Fn[X]=Fn[H]=Fn[Q]=Fn[nn]=Fn[tn]=Fn[V]=Fn[Z]=Fn[Y]=Fn[G]=Fn[rn]=Fn[en]=Fn[un]=Fn[on]=true,Fn[P]=Fn[K]=Fn["[object Map]"]=Fn["[object Set]"]=Fn["[object WeakMap]"]=false;var Nn={"\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\xe0":"a","\xe1":"a","\xe2":"a",
"\xe3":"a","\xe4":"a","\xe5":"a","\xc7":"C","\xe7":"c","\xd0":"D","\xf0":"d","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\xcc":"I","\xcd":"I","\xce":"I","\xcf":"I","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xd1":"N","\xf1":"n","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xdd":"Y",
"\xfd":"y","\xff":"y","\xc6":"Ae","\xe6":"ae","\xde":"Th","\xfe":"th","\xdf":"ss"},Tn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#96;"},Ln={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'","&#96;":"`"},zn={"function":true,object:true},Bn={0:"x30",1:"x31",2:"x32",3:"x33",4:"x34",5:"x35",6:"x36",7:"x37",8:"x38",9:"x39",A:"x41",B:"x42",C:"x43",D:"x44",E:"x45",F:"x46",a:"x61",b:"x62",c:"x63",d:"x64",e:"x65",f:"x66",n:"x6e",r:"x72",t:"x74",u:"x75",v:"x76",x:"x78"},Dn={"\\":"\\",
"'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Mn=zn[typeof exports]&&exports&&!exports.nodeType&&exports,qn=zn[typeof module]&&module&&!module.nodeType&&module,Pn=zn[typeof self]&&self&&self.Object&&self,Kn=zn[typeof window]&&window&&window.Object&&window,Vn=qn&&qn.exports===Mn&&Mn,Zn=Mn&&qn&&typeof global=="object"&&global&&global.Object&&global||Kn!==(this&&this.window)&&Kn||Pn||this,Yn=m();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(Zn._=Yn, define(function(){
return Yn})):Mn&&qn?Vn?(qn.exports=Yn)._=Yn:Mn._=Yn:Zn._=Yn}).call(this);
/**
 * Restful Resources service for AngularJS apps
 * @version v1.4.0 - 2015-04-03 * @link https://github.com/mgonto/restangular
 * @author Martin Gontovnikas <martin@gon.to>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */!function(){var a=angular.module("restangular",[]);a.provider("Restangular",function(){var a={};a.init=function(a,b){function c(a,b,c,d){var e={};return _.each(_.keys(d),function(f){var g=d[f];g.params=_.extend({},g.params,a.defaultRequestParams[g.method.toLowerCase()]),_.isEmpty(g.params)&&delete g.params,e[f]=a.isSafe(g.method)?function(){return b(_.extend(g,{url:c}))}:function(a){return b(_.extend(g,{url:c,data:a}))}}),e}a.configuration=b;var d=["get","head","options","trace","getlist"];b.isSafe=function(a){return _.contains(d,a.toLowerCase())};var e=/^https?:\/\//i;b.isAbsoluteUrl=function(a){return _.isUndefined(b.absoluteUrl)||_.isNull(b.absoluteUrl)?a&&e.test(a):b.absoluteUrl},b.absoluteUrl=_.isUndefined(b.absoluteUrl)?!0:b.absoluteUrl,a.setSelfLinkAbsoluteUrl=function(a){b.absoluteUrl=a},b.baseUrl=_.isUndefined(b.baseUrl)?"":b.baseUrl,a.setBaseUrl=function(a){return b.baseUrl=/\/$/.test(a)?a.substring(0,a.length-1):a,this},b.extraFields=b.extraFields||[],a.setExtraFields=function(a){return b.extraFields=a,this},b.defaultHttpFields=b.defaultHttpFields||{},a.setDefaultHttpFields=function(a){return b.defaultHttpFields=a,this},b.withHttpValues=function(a,c){return _.defaults(c,a,b.defaultHttpFields)},b.encodeIds=_.isUndefined(b.encodeIds)?!0:b.encodeIds,a.setEncodeIds=function(a){b.encodeIds=a},b.defaultRequestParams=b.defaultRequestParams||{get:{},post:{},put:{},remove:{},common:{}},a.setDefaultRequestParams=function(a,c){var d=[],e=c||a;return _.isUndefined(c)?d.push("common"):_.isArray(a)?d=a:d.push(a),_.each(d,function(a){b.defaultRequestParams[a]=e}),this},a.requestParams=b.defaultRequestParams,b.defaultHeaders=b.defaultHeaders||{},a.setDefaultHeaders=function(c){return b.defaultHeaders=c,a.defaultHeaders=b.defaultHeaders,this},a.defaultHeaders=b.defaultHeaders,b.methodOverriders=b.methodOverriders||[],a.setMethodOverriders=function(a){var c=_.extend([],a);return b.isOverridenMethod("delete",c)&&c.push("remove"),b.methodOverriders=c,this},b.jsonp=_.isUndefined(b.jsonp)?!1:b.jsonp,a.setJsonp=function(a){b.jsonp=a},b.isOverridenMethod=function(a,c){var d=c||b.methodOverriders;return!_.isUndefined(_.find(d,function(b){return b.toLowerCase()===a.toLowerCase()}))},b.urlCreator=b.urlCreator||"path",a.setUrlCreator=function(a){if(!_.has(b.urlCreatorFactory,a))throw new Error("URL Path selected isn't valid");return b.urlCreator=a,this},b.restangularFields=b.restangularFields||{id:"id",route:"route",parentResource:"parentResource",restangularCollection:"restangularCollection",cannonicalId:"__cannonicalId",etag:"restangularEtag",selfLink:"href",get:"get",getList:"getList",put:"put",post:"post",remove:"remove",head:"head",trace:"trace",options:"options",patch:"patch",getRestangularUrl:"getRestangularUrl",getRequestedUrl:"getRequestedUrl",putElement:"putElement",addRestangularMethod:"addRestangularMethod",getParentList:"getParentList",clone:"clone",ids:"ids",httpConfig:"_$httpConfig",reqParams:"reqParams",one:"one",all:"all",several:"several",oneUrl:"oneUrl",allUrl:"allUrl",customPUT:"customPUT",customPOST:"customPOST",customDELETE:"customDELETE",customGET:"customGET",customGETLIST:"customGETLIST",customOperation:"customOperation",doPUT:"doPUT",doPOST:"doPOST",doDELETE:"doDELETE",doGET:"doGET",doGETLIST:"doGETLIST",fromServer:"fromServer",withConfig:"withConfig",withHttpConfig:"withHttpConfig",singleOne:"singleOne",plain:"plain",save:"save",restangularized:"restangularized"},a.setRestangularFields=function(a){return b.restangularFields=_.extend(b.restangularFields,a),this},b.isRestangularized=function(a){return!!a[b.restangularFields.restangularized]},b.setFieldToElem=function(a,b,c){var d=a.split("."),e=b;return _.each(_.initial(d),function(a){e[a]={},e=e[a]}),e[_.last(d)]=c,this},b.getFieldFromElem=function(a,b){var c=a.split("."),d=b;return _.each(c,function(a){d&&(d=d[a])}),angular.copy(d)},b.setIdToElem=function(a,c){return b.setFieldToElem(b.restangularFields.id,a,c),this},b.getIdFromElem=function(a){return b.getFieldFromElem(b.restangularFields.id,a)},b.isValidId=function(a){return""!==a&&!_.isUndefined(a)&&!_.isNull(a)},b.setUrlToElem=function(a,c){return b.setFieldToElem(b.restangularFields.selfLink,a,c),this},b.getUrlFromElem=function(a){return b.getFieldFromElem(b.restangularFields.selfLink,a)},b.useCannonicalId=_.isUndefined(b.useCannonicalId)?!1:b.useCannonicalId,a.setUseCannonicalId=function(a){return b.useCannonicalId=a,this},b.getCannonicalIdFromElem=function(a){var c=a[b.restangularFields.cannonicalId],d=b.isValidId(c)?c:b.getIdFromElem(a);return d},b.responseInterceptors=b.responseInterceptors||[],b.defaultResponseInterceptor=function(a){return a},b.responseExtractor=function(a,c,d,e,f,g){var h=angular.copy(b.responseInterceptors);h.push(b.defaultResponseInterceptor);var i=a;return _.each(h,function(a){i=a(i,c,d,e,f,g)}),i},a.addResponseInterceptor=function(a){return b.responseInterceptors.push(a),this},b.errorInterceptors=b.errorInterceptors||[],a.addErrorInterceptor=function(a){return b.errorInterceptors.push(a),this},a.setResponseInterceptor=a.addResponseInterceptor,a.setResponseExtractor=a.addResponseInterceptor,a.setErrorInterceptor=a.addErrorInterceptor,b.requestInterceptors=b.requestInterceptors||[],b.defaultInterceptor=function(a,b,c,d,e,f,g){return{element:a,headers:e,params:f,httpConfig:g}},b.fullRequestInterceptor=function(a,c,d,e,f,g,h){var i=angular.copy(b.requestInterceptors),j=b.defaultInterceptor(a,c,d,e,f,g,h);return _.reduce(i,function(a,b){return _.extend(a,b(a.element,c,d,e,a.headers,a.params,a.httpConfig))},j)},a.addRequestInterceptor=function(a){return b.requestInterceptors.push(function(b,c,d,e,f,g,h){return{headers:f,params:g,element:a(b,c,d,e),httpConfig:h}}),this},a.setRequestInterceptor=a.addRequestInterceptor,a.addFullRequestInterceptor=function(a){return b.requestInterceptors.push(a),this},a.setFullRequestInterceptor=a.addFullRequestInterceptor,b.onBeforeElemRestangularized=b.onBeforeElemRestangularized||function(a){return a},a.setOnBeforeElemRestangularized=function(a){return b.onBeforeElemRestangularized=a,this},a.setRestangularizePromiseInterceptor=function(a){return b.restangularizePromiseInterceptor=a,this},b.onElemRestangularized=b.onElemRestangularized||function(a){return a},a.setOnElemRestangularized=function(a){return b.onElemRestangularized=a,this},b.shouldSaveParent=b.shouldSaveParent||function(){return!0},a.setParentless=function(a){return _.isArray(a)?b.shouldSaveParent=function(b){return!_.contains(a,b)}:_.isBoolean(a)&&(b.shouldSaveParent=function(){return!a}),this},b.suffix=_.isUndefined(b.suffix)?null:b.suffix,a.setRequestSuffix=function(a){return b.suffix=a,this},b.transformers=b.transformers||{},a.addElementTransformer=function(c,d,e){var f=null,g=null;2===arguments.length?g=d:(g=e,f=d);var h=b.transformers[c];return h||(h=b.transformers[c]=[]),h.push(function(a,b){return _.isNull(f)||a===f?g(b):b}),a},a.extendCollection=function(b,c){return a.addElementTransformer(b,!0,c)},a.extendModel=function(b,c){return a.addElementTransformer(b,!1,c)},b.transformElem=function(a,c,d,e,f){if(!f&&!b.transformLocalElements&&!a[b.restangularFields.fromServer])return a;var g=b.transformers[d],h=a;return g&&_.each(g,function(a){h=a(c,h)}),b.onElemRestangularized(h,c,d,e)},b.transformLocalElements=_.isUndefined(b.transformLocalElements)?!1:b.transformLocalElements,a.setTransformOnlyServerElements=function(a){b.transformLocalElements=!a},b.fullResponse=_.isUndefined(b.fullResponse)?!1:b.fullResponse,a.setFullResponse=function(a){return b.fullResponse=a,this},b.urlCreatorFactory={};var f=function(){};f.prototype.setConfig=function(a){return this.config=a,this},f.prototype.parentsArray=function(a){for(var b=[];a;)b.push(a),a=a[this.config.restangularFields.parentResource];return b.reverse()},f.prototype.resource=function(a,d,e,f,g,h,i,j){var k=_.defaults(g||{},this.config.defaultRequestParams.common),l=_.defaults(f||{},this.config.defaultHeaders);i&&(b.isSafe(j)?l["If-None-Match"]=i:l["If-Match"]=i);var m=this.base(a);if(h){var n="";/\/$/.test(m)||(n+="/"),n+=h,m+=n}return this.config.suffix&&-1===m.indexOf(this.config.suffix,m.length-this.config.suffix.length)&&!this.config.getUrlFromElem(a)&&(m+=this.config.suffix),a[this.config.restangularFields.httpConfig]=void 0,c(this.config,d,m,{getList:this.config.withHttpValues(e,{method:"GET",params:k,headers:l}),get:this.config.withHttpValues(e,{method:"GET",params:k,headers:l}),jsonp:this.config.withHttpValues(e,{method:"jsonp",params:k,headers:l}),put:this.config.withHttpValues(e,{method:"PUT",params:k,headers:l}),post:this.config.withHttpValues(e,{method:"POST",params:k,headers:l}),remove:this.config.withHttpValues(e,{method:"DELETE",params:k,headers:l}),head:this.config.withHttpValues(e,{method:"HEAD",params:k,headers:l}),trace:this.config.withHttpValues(e,{method:"TRACE",params:k,headers:l}),options:this.config.withHttpValues(e,{method:"OPTIONS",params:k,headers:l}),patch:this.config.withHttpValues(e,{method:"PATCH",params:k,headers:l})})};var g=function(){};g.prototype=new f,g.prototype.normalizeUrl=function(a){var b=/(http[s]?:\/\/)?(.*)?/.exec(a);return b[2]=b[2].replace(/[\\\/]+/g,"/"),"undefined"!=typeof b[1]?b[1]+b[2]:b[2]},g.prototype.base=function(a){var c=this;return _.reduce(this.parentsArray(a),function(a,d){var e,f=c.config.getUrlFromElem(d);if(f){if(c.config.isAbsoluteUrl(f))return f;e=f}else if(e=d[c.config.restangularFields.route],d[c.config.restangularFields.restangularCollection]){var g=d[c.config.restangularFields.ids];g&&(e+="/"+g.join(","))}else{var h;h=c.config.useCannonicalId?c.config.getCannonicalIdFromElem(d):c.config.getIdFromElem(d),b.isValidId(h)&&!d.singleOne&&(e+="/"+(c.config.encodeIds?encodeURIComponent(h):h))}return a=a.replace(/\/$/,"")+"/"+e,c.normalizeUrl(a)},this.config.baseUrl)},g.prototype.fetchUrl=function(a,b){var c=this.base(a);return b&&(c+="/"+b),c},g.prototype.fetchRequestedUrl=function(a,c){function d(a){var b=[];for(var c in a)a.hasOwnProperty(c)&&b.push(c);return b.sort()}function e(a,b,c){for(var e=d(a),f=0;f<e.length;f++)b.call(c,a[e[f]],e[f]);return e}function f(a,b){return encodeURIComponent(a).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,b?"%20":"+")}var g=this.fetchUrl(a,c),h=a[b.restangularFields.reqParams];if(!h)return g+(this.config.suffix||"");var i=[];return e(h,function(a,b){null!==a&&void 0!==a&&(angular.isArray(a)||(a=[a]),angular.forEach(a,function(a){angular.isObject(a)&&(a=angular.toJson(a)),i.push(f(b)+"="+f(a))}))}),g+(this.config.suffix||"")+(-1===g.indexOf("?")?"?":"&")+i.join("&")},b.urlCreatorFactory.path=g};var b={};a.init(this,b),this.$get=["$http","$q",function(c,d){function e(b){function f(a,c,d,e,f){if(c[b.restangularFields.route]=d,c[b.restangularFields.getRestangularUrl]=_.bind(P.fetchUrl,P,c),c[b.restangularFields.getRequestedUrl]=_.bind(P.fetchRequestedUrl,P,c),c[b.restangularFields.addRestangularMethod]=_.bind(L,c),c[b.restangularFields.clone]=_.bind(r,c,c),c[b.restangularFields.reqParams]=_.isEmpty(e)?null:e,c[b.restangularFields.withHttpConfig]=_.bind(z,c),c[b.restangularFields.plain]=_.bind(p,c,c),c[b.restangularFields.restangularized]=!0,c[b.restangularFields.one]=_.bind(g,c,c),c[b.restangularFields.all]=_.bind(h,c,c),c[b.restangularFields.several]=_.bind(i,c,c),c[b.restangularFields.oneUrl]=_.bind(j,c,c),c[b.restangularFields.allUrl]=_.bind(k,c,c),c[b.restangularFields.fromServer]=!!f,a&&b.shouldSaveParent(d)){var l=b.getIdFromElem(a),m=b.getUrlFromElem(a),n=_.union(_.values(_.pick(b.restangularFields,["route","singleOne","parentResource"])),b.extraFields),o=_.pick(a,n);b.isValidId(l)&&b.setIdToElem(o,l,d),b.isValidId(m)&&b.setUrlToElem(o,m,d),c[b.restangularFields.parentResource]=o}else c[b.restangularFields.parentResource]=null;return c}function g(a,c,d,e){var f;if(_.isNumber(c)||_.isNumber(a))throw f="You're creating a Restangular entity with the number ",f+="instead of the route or the parent. For example, you can't call .one(12).",new Error(f);if(_.isUndefined(c))throw f="You're creating a Restangular entity either without the path. ",f+="For example you can't call .one(). Please check if your arguments are valid.",new Error(f);var g={};return b.setIdToElem(g,d,c),b.setFieldToElem(b.restangularFields.singleOne,g,e),s(a,g,c,!1)}function h(a,b){return t(a,[],b,!1)}function i(a,c){var d=[];return d[b.restangularFields.ids]=Array.prototype.splice.call(arguments,2),t(a,d,c,!1)}function j(a,c,d){if(!c)throw new Error("Route is mandatory when creating new Restangular objects.");var e={};return b.setUrlToElem(e,d,c),s(a,e,c,!1)}function k(a,c,d){if(!c)throw new Error("Route is mandatory when creating new Restangular objects.");var e={};return b.setUrlToElem(e,d,c),t(a,e,c,!1)}function l(a,c,d){return a.call=_.bind(m,a),a.get=_.bind(n,a),a[b.restangularFields.restangularCollection]=c,c&&(a.push=_.bind(m,a,"push")),a.$object=d,b.restangularizePromiseInterceptor&&b.restangularizePromiseInterceptor(a),a}function m(a){var c=d.defer(),e=arguments,f={};return this.then(function(b){var d=Array.prototype.slice.call(e,1),g=b[a];g.apply(b,d),f=b,c.resolve(b)}),l(c.promise,this[b.restangularFields.restangularCollection],f)}function n(a){var c=d.defer(),e={};return this.then(function(b){e=b[a],c.resolve(e)}),l(c.promise,this[b.restangularFields.restangularCollection],e)}function o(a,c,d,e){return _.extend(e,d),b.fullResponse?a.resolve(_.extend(c,{data:d})):(a.resolve(d),void 0)}function p(a){if(_.isArray(a)){var c=[];return _.each(a,function(a){c.push(b.isRestangularized(a)?p(a):a)}),c}return _.omit(a,_.values(_.omit(b.restangularFields,"id")))}function q(a){a[b.restangularFields.customOperation]=_.bind(K,a),_.each(["put","post","get","delete"],function(b){_.each(["do","custom"],function(c){var d,e="delete"===b?"remove":b,f=c+b.toUpperCase();d="put"!==e&&"post"!==e?K:function(a,b,c,d,e){return _.bind(K,this)(a,c,d,e,b)},a[f]=_.bind(d,a,e)})}),a[b.restangularFields.customGETLIST]=_.bind(y,a),a[b.restangularFields.doGETLIST]=a[b.restangularFields.customGETLIST]}function r(a,c){var d=angular.copy(a,c);return s(d[b.restangularFields.parentResource],d,d[b.restangularFields.route],!0)}function s(a,c,d,e,g,h){var i=b.onBeforeElemRestangularized(c,!1,d),j=f(a,i,d,h,e);return b.useCannonicalId&&(j[b.restangularFields.cannonicalId]=b.getIdFromElem(j)),g&&(j[b.restangularFields.getParentList]=function(){return g}),j[b.restangularFields.restangularCollection]=!1,j[b.restangularFields.get]=_.bind(C,j),j[b.restangularFields.getList]=_.bind(y,j),j[b.restangularFields.put]=_.bind(E,j),j[b.restangularFields.post]=_.bind(F,j),j[b.restangularFields.remove]=_.bind(D,j),j[b.restangularFields.head]=_.bind(G,j),j[b.restangularFields.trace]=_.bind(H,j),j[b.restangularFields.options]=_.bind(I,j),j[b.restangularFields.patch]=_.bind(J,j),j[b.restangularFields.save]=_.bind(A,j),q(j),b.transformElem(j,!1,d,O,!0)}function t(a,c,d,e,g){var h=b.onBeforeElemRestangularized(c,!0,d),i=f(a,h,d,g,e);return i[b.restangularFields.restangularCollection]=!0,i[b.restangularFields.post]=_.bind(F,i,null),i[b.restangularFields.remove]=_.bind(D,i),i[b.restangularFields.head]=_.bind(G,i),i[b.restangularFields.trace]=_.bind(H,i),i[b.restangularFields.putElement]=_.bind(w,i),i[b.restangularFields.options]=_.bind(I,i),i[b.restangularFields.patch]=_.bind(J,i),i[b.restangularFields.get]=_.bind(v,i),i[b.restangularFields.getList]=_.bind(y,i,null),q(i),b.transformElem(i,!0,d,O,!0)}function u(a,b,c){var d=t(a,b,c,!1);return _.each(d,function(b){s(a,b,c,!1)}),d}function v(a,b,c){return this.customGET(a.toString(),b,c)}function w(a,c,e){var f=this,g=this[a],h=d.defer(),i=[];return i=b.transformElem(i,!0,g[b.restangularFields.route],O),g.put(c,e).then(function(b){var c=r(f);c[a]=b,i=c,h.resolve(c)},function(a){h.reject(a)}),l(h.promise,!0,i)}function x(a,c,d,e,f,g){var h=b.responseExtractor(a,c,d,e,f,g),i=f.headers("ETag");return h&&i&&(h[b.restangularFields.etag]=i),h}function y(a,e,f){var g=this,h=d.defer(),i="getList",j=P.fetchUrl(this,a),k=a||g[b.restangularFields.route],m=b.fullRequestInterceptor(null,i,k,j,f||{},e||{},this[b.restangularFields.httpConfig]||{}),n=[];n=b.transformElem(n,!0,k,O);var p="getList";b.jsonp&&(p="jsonp");var q=function(c){var d=c.data,e=c.config.params,f=x(d,i,k,j,c,h);if((_.isUndefined(f)||""===f)&&(f=[]),!_.isArray(f))throw new Error("Response for getList SHOULD be an array and not an object or something else");var l=_.map(f,function(c){return g[b.restangularFields.restangularCollection]?s(g[b.restangularFields.parentResource],c,g[b.restangularFields.route],!0,f):s(g,c,a,!0,f)});l=_.extend(f,l),g[b.restangularFields.restangularCollection]?o(h,c,t(g[b.restangularFields.parentResource],l,g[b.restangularFields.route],!0,e),n):o(h,c,t(g,l,a,!0,e),n)};return P.resource(this,c,m.httpConfig,m.headers,m.params,a,this[b.restangularFields.etag],i)[p]().then(q,function(a){304===a.status&&g[b.restangularFields.restangularCollection]?o(h,a,g,n):_.every(b.errorInterceptors,function(b){return b(a,h,q)!==!1})&&h.reject(a)}),l(h.promise,!0,n)}function z(a){return this[b.restangularFields.httpConfig]=a,this}function A(a,c){return this[b.restangularFields.fromServer]?this[b.restangularFields.put](a,c):_.bind(B,this)("post",void 0,a,void 0,c)}function B(a,e,f,g,h){var i=this,j=d.defer(),k=f||{},m=e||this[b.restangularFields.route],n=P.fetchUrl(this,e),q=g||this,r=q[b.restangularFields.etag]||("post"!==a?this[b.restangularFields.etag]:null);_.isObject(q)&&b.isRestangularized(q)&&(q=p(q));var t=b.fullRequestInterceptor(q,a,m,n,h||{},k||{},this[b.restangularFields.httpConfig]||{}),u={};u=b.transformElem(u,!1,m,O);var v=function(c){var d=c.data,e=c.config.params,f=x(d,a,m,n,c,j);if(f)if("post"!==a||i[b.restangularFields.restangularCollection]){var g=s(i[b.restangularFields.parentResource],f,i[b.restangularFields.route],!0,null,e);g[b.restangularFields.singleOne]=i[b.restangularFields.singleOne],o(j,c,g,u)}else{var g=s(i[b.restangularFields.parentResource],f,m,!0,null,e);o(j,c,g,u)}else o(j,c,void 0,u)},w=function(c){304===c.status&&b.isSafe(a)?o(j,c,i,u):_.every(b.errorInterceptors,function(a){return a(c,j,v)!==!1})&&j.reject(c)},y=a,z=_.extend({},t.headers),A=b.isOverridenMethod(a);return A?(y="post",z=_.extend(z,{"X-HTTP-Method-Override":"remove"===a?"DELETE":a.toUpperCase()})):b.jsonp&&"get"===y&&(y="jsonp"),b.isSafe(a)?A?P.resource(this,c,t.httpConfig,z,t.params,e,r,y)[y]({}).then(v,w):P.resource(this,c,t.httpConfig,z,t.params,e,r,y)[y]().then(v,w):P.resource(this,c,t.httpConfig,z,t.params,e,r,y)[y](t.element).then(v,w),l(j.promise,!1,u)}function C(a,b){return _.bind(B,this)("get",void 0,a,void 0,b)}function D(a,b){return _.bind(B,this)("remove",void 0,a,void 0,b)}function E(a,b){return _.bind(B,this)("put",void 0,a,void 0,b)}function F(a,b,c,d){return _.bind(B,this)("post",a,c,b,d)}function G(a,b){return _.bind(B,this)("head",void 0,a,void 0,b)}function H(a,b){return _.bind(B,this)("trace",void 0,a,void 0,b)}function I(a,b){return _.bind(B,this)("options",void 0,a,void 0,b)}function J(a,b,c){return _.bind(B,this)("patch",void 0,b,a,c)}function K(a,b,c,d,e){return _.bind(B,this)(a,b,c,e,d)}function L(a,c,d,e,f,g){var h;h="getList"===c?_.bind(y,this,d):_.bind(K,this,c,d);var i=function(a,b,c){var d=_.defaults({params:a,headers:b,elem:c},{params:e,headers:f,elem:g});return h(d.params,d.headers,d.elem)};this[a]=b.isSafe(c)?i:function(a,b,c){return i(b,c,a)}}function M(c){var d=angular.copy(_.omit(b,"configuration"));return a.init(d,d),c(d),e(d)}function N(a,c){var d=_.values(b.restangularFields),e={},f=(c||O).all(a);e.one=_.bind(g,c||O,c,a),e.post=_.bind(f.post,f),e.getList=_.bind(f.getList,f);for(var h in f)f.hasOwnProperty(h)&&_.isFunction(f[h])&&!_.contains(d,h)&&(e[h]=_.bind(f[h],f));return e}var O={},P=new b.urlCreatorFactory[b.urlCreator];return P.setConfig(b),a.init(O,b),O.copy=_.bind(r,O),O.service=_.bind(N,O),O.withConfig=_.bind(M,O),O.one=_.bind(g,O,null),O.all=_.bind(h,O,null),O.several=_.bind(i,O,null),O.oneUrl=_.bind(j,O,null),O.allUrl=_.bind(k,O,null),O.stripRestangular=_.bind(p,O),O.restangularizeElement=_.bind(s,O),O.restangularizeCollection=_.bind(u,O),O}return e(b)}]})}();
/*! appverse-web-html5-core - v0.5.0 - */
!function(){"use strict";function a(a,b,c,d,e){function f(){var b=a.get("RESTFactory"),c=a.get("$log"),e=a.get("SECURITY_GENERAL");if(d.exists("appverse.security")){var f=a.get("Oauth_RequestWrapper");if(e.securityEnabled)return b.wrapRequestsWith(f),void c.debug("REST communication is secure. Security is enabled. REST requests will be wrapped with authorization headers.")}b.enableDefaultContentType(),c.debug("REST communication is not secure. Security is not enabled.")}function g(){if(d.exists("appverse.cache")){var b=a.get("RESTFactory"),c=a.get("CacheFactory"),e=c.getHttpCache();b.setCache(e)}}f(),g(),c.setBaseUrl(e.BaseUrl),c.setExtraFields(e.ExtraFields),c.setParentless(e.Parentless);for(var h,i=0;i<e.ElementTransformer.length;i++)b.debug("Adding transformer"),h=e.ElementTransformer[i],c.addElementTransformer(h.route,h.transformer);c.setOnElemRestangularized(e.OnElemRestangularized),"function"==typeof e.RequestInterceptor&&(b.debug("Setting RequestInterceptor"),c.setRequestInterceptor(e.RequestInterceptor)),"function"==typeof e.FullRequestInterceptor&&(b.debug("Setting FullRequestInterceptor"),c.setFullRequestInterceptor(e.FullRequestInterceptor)),c.setErrorInterceptor(e.ErrorInterceptor),c.setRestangularFields(e.RestangularFields),c.setMethodOverriders(e.MethodOverriders),c.setFullResponse(e.FullResponse),c.setRequestSuffix(e.RequestSuffix),c.setUseCannonicalId(e.UseCannonicalId),c.setEncodeIds(e.EncodeIds),b.info("appverse.rest run")}
a.$inject = ["a", "b", "c", "d", "e"];var b=["restangular","appverse.configuration","appverse.utils"];angular.module("appverse.rest",b).run(a),a.$inject=["$injector","$log","Restangular","ModuleSeeker","REST_CONFIG"]}(),function(){"use strict";angular.module("appverse.rest").factory("MulticastRESTFactory",["$log","Restangular","REST_CONFIG",function(a,b,c){var d={},e=c.Multicast_enabled;return a.debug("Multicast Enabled : "+e),d.readObject=function(a,c){return c&&c.length>0?void 0:b.one(a).get().$object},d}])}(),function(){"use strict";function a(a,b){return{link:function(c,d,e){var f="restData",g="Loading",h="Error",i=e.restName||f,j=e.rest||e.restPath;a.debug("rest directive"),c[i+g]=!0,d.html(e.restLoadingText||""),c.$watchCollection(function(){return[j,i,e.restErrorText,e.restLoadingText]},function(c,f,k){function l(b){a.debug("get data",b),d.html(""),k[i]=b,k[i+g]=!1}function m(){d.html(e.restErrorText||""),k[i+g]=!1,k[i+h]=!0}a.debug("REST watch "+i+":",c),k[i+h]=!1;var n;n=e.restId?b.readListItem(j,e.restId,l,m):b.readObject(j,l,m)})}}}
a.$inject = ["a", "b"];angular.module("appverse.rest").directive("rest",a),a.$inject=["$log","RESTFactory"]}(),function(){"use strict";function a(a,b,c,d,e){function f(b){a.error("Error with status code",b.status)}var g={};return g.wrapRequestsWith=function(a){d=a.wrapRequest(d)},g.enableDefaultContentType=function(){d.setDefaultHeaders({"Content-Type":e.DefaultContentType})},g.setCache=function(a){d.setResponseInterceptor(function(b,c,d,f,g){return a&&(e.NoCacheHttpMethods[c]===!0?a.removeAll():"put"===c&&a.put(g.config.url,g.config.data)),b})},g.readObject=function(a,b,c){b=b||function(){},c=c||function(){};var e=d.one(a).get();return e.then(b,c),e.$object},g.readList=function(a){return d.all(a).getList().$object},g.readListNoEmpty=function(a){return d.all(a).getList()},g.readBatch=function(a){var e=b.defer();return c.get(d.configuration.baseUrl+"/"+a+d.configuration.suffix).success(function(a){e.resolve(a)}),e.promise},g.readParallelMultipleBatch=function(a){var c=[];return angular.forEach(a,function(a){var d=b.defer();g.readBatch(a).then(function(a){d.resolve(a)},function(){d.reject()}),c.push(d.promise)}),b.all(c)},g.readListItem=function(a,b,c,e){c=c||function(){},e=e||function(){};var f=d.one(a,b).get();return f.then(c,e),f.$object},g.readListItems=function(a,b){return d.several(a,b).getList().$object},g.createListItem=function(a,b,c){d.all(a).post(b).then(c,f)},g.updateObject=function(a,b,c){d.one(a).put(b).then(c,f)},g.deleteListItem=function(a,b,c){d.one(a,b).get().then(function(a){a.remove().then(c,f)})},g.deleteObject=function(a,b){d.one(a)["delete"]().then(b,f)},g}
a.$inject = ["a", "b", "c", "d", "e"];angular.module("appverse.rest").factory("RESTFactory",a),a.$inject=["$log","$q","$http","Restangular","REST_CONFIG"]}();
//# sourceMappingURL=appverse-rest.min.js.map
(function () {
    'use strict';
    angular.module('App.Controllers', []);
    angular.module('test87App', [
            'angularGrid',
            'infinite-scroll',
            'mdr.file',
            'geolocation',
            'appverse.rest',
            'appverse.detection',
            'ngAnimate',
            'ui.bootstrap',
            'angularRipple',
            'ui.select',
            'ngSanitize',
            'rzModule',
            'rt.resize',
            'xeditable',
            'appverse.router',
            'App.Controllers',
            'appverse'
        ])
        .run(["$log", "editableOptions", "Restangular", function ($log, editableOptions, Restangular) {
            $log.debug('testAlphaApp run');
            editableOptions.theme = 'bs3';
            Restangular.configuration.baseUrl = 'http://www.eduardgomez.me/gangashunter_backend';
            Restangular.configuration.suffix = '.php';
        }]);

    AppInit.setConfig({
        environment: {
            'REST_CONFIG': {
                'BaseUrl': '/api',
                'RequestSuffix': ''
            }
        },
        appverseMobile: {},
        mobileBrowser: {}
    });
    angular.module('test87App')
        .animation('.fade-in', function () {
            return {
                enter: function (element, done) {
                    element.css({
                            opacity: 0
                        })
                        .animate({
                            opacity: 1
                        }, 1000, done);
                }
            };
        });
}());

//////////////////////////////////////////////////
// The main module configuration section shows  //
// how to define when (redirects) and otherwise //
// (invalid urls) to arrangesite navigation     //
// using ui-router.                             //
//////////////////////////////////////////////////

'use strict';

angular.module('test87App')
    .config(
    ['$stateProvider', '$urlRouterProvider',
      function ($stateProvider, $urlRouterProvider) {

                ///////////////////////////////
                // 1-Redirects and Otherwise //
                ///////////////////////////////

                // Use $urlRouterProvider to configure any redirects (when) and invalid urls (otherwise).
                $urlRouterProvider

                // The `when` method says if the url is ever the 1st param, then redirect to the 2nd param
                // Here we are just setting up some convenience urls.
                //                .when('/t?id', '/topics/:id')
                //                    .when('/t/:id', '/topics/:id')


                // If the url is ever invalid, e.g. '/asdf', then redirect to '/' aka the home state
                    .otherwise('/home');


                //////////////////////////
                // 2-State Configurations
                // Several states hav been configured:
                // home
                // tasks
                //
                //////////////////////////

                // We must configure states using $stateProvider.
                $stateProvider

                //////////
                // Home //
                //////////

                  .state('home', {
                    // Use a url of '/' to set a states as the 'index'.
                    url: '/home',
                    templateUrl: 'components/home/home.html',
                    controller: 'homeController'

                })
                .state('nuevo', {
                  // Use a url of '/' to set a states as the 'index'.
                  url: '/nuevo',
                  templateUrl: 'components/nuevo/nuevo.html',
                  controller: 'nuevoController'

              })  .state('busco', {
                  // Use a url of '/' to set a states as the 'index'.
                  url: '/busco',
                  templateUrl: 'components/busco/busco.html',
                  controller: 'buscoController'

              });
            }]);
