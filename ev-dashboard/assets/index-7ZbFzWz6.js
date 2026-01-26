(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Zf={exports:{}},Po={};var xg;function uS(){if(xg)return Po;xg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:u}}return Po.Fragment=e,Po.jsx=i,Po.jsxs=i,Po}var Sg;function fS(){return Sg||(Sg=1,Zf.exports=uS()),Zf.exports}var An=fS(),jf={exports:{}},de={};var Mg;function hS(){if(Mg)return de;Mg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),S=Symbol.iterator;function E(U){return U===null||typeof U!="object"?null:(U=S&&U[S]||U["@@iterator"],typeof U=="function"?U:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,M={};function x(U,st,St){this.props=U,this.context=st,this.refs=M,this.updater=St||R}x.prototype.isReactComponent={},x.prototype.setState=function(U,st){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,st,"setState")},x.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function z(){}z.prototype=x.prototype;function P(U,st,St){this.props=U,this.context=st,this.refs=M,this.updater=St||R}var L=P.prototype=new z;L.constructor=P,w(L,x.prototype),L.isPureReactComponent=!0;var F=Array.isArray;function I(){}var N={H:null,A:null,T:null,S:null},Z=Object.prototype.hasOwnProperty;function A(U,st,St){var Ut=St.ref;return{$$typeof:o,type:U,key:st,ref:Ut!==void 0?Ut:null,props:St}}function C(U,st){return A(U.type,st,U.props)}function G(U){return typeof U=="object"&&U!==null&&U.$$typeof===o}function K(U){var st={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(St){return st[St]})}var it=/\/+/g;function pt(U,st){return typeof U=="object"&&U!==null&&U.key!=null?K(""+U.key):st.toString(36)}function ht(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(I,I):(U.status="pending",U.then(function(st){U.status==="pending"&&(U.status="fulfilled",U.value=st)},function(st){U.status==="pending"&&(U.status="rejected",U.reason=st)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function O(U,st,St,Ut,kt){var J=typeof U;(J==="undefined"||J==="boolean")&&(U=null);var ft=!1;if(U===null)ft=!0;else switch(J){case"bigint":case"string":case"number":ft=!0;break;case"object":switch(U.$$typeof){case o:case e:ft=!0;break;case g:return ft=U._init,O(ft(U._payload),st,St,Ut,kt)}}if(ft)return kt=kt(U),ft=Ut===""?"."+pt(U,0):Ut,F(kt)?(St="",ft!=null&&(St=ft.replace(it,"$&/")+"/"),O(kt,st,St,"",function(qt){return qt})):kt!=null&&(G(kt)&&(kt=C(kt,St+(kt.key==null||U&&U.key===kt.key?"":(""+kt.key).replace(it,"$&/")+"/")+ft)),st.push(kt)),1;ft=0;var Pt=Ut===""?".":Ut+":";if(F(U))for(var te=0;te<U.length;te++)Ut=U[te],J=Pt+pt(Ut,te),ft+=O(Ut,st,St,J,kt);else if(te=E(U),typeof te=="function")for(U=te.call(U),te=0;!(Ut=U.next()).done;)Ut=Ut.value,J=Pt+pt(Ut,te++),ft+=O(Ut,st,St,J,kt);else if(J==="object"){if(typeof U.then=="function")return O(ht(U),st,St,Ut,kt);throw st=String(U),Error("Objects are not valid as a React child (found: "+(st==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":st)+"). If you meant to render a collection of children, use an array instead.")}return ft}function H(U,st,St){if(U==null)return U;var Ut=[],kt=0;return O(U,Ut,"","",function(J){return st.call(St,J,kt++)}),Ut}function rt(U){if(U._status===-1){var st=U._result;st=st(),st.then(function(St){(U._status===0||U._status===-1)&&(U._status=1,U._result=St)},function(St){(U._status===0||U._status===-1)&&(U._status=2,U._result=St)}),U._status===-1&&(U._status=0,U._result=st)}if(U._status===1)return U._result.default;throw U._result}var ct=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var st=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(st))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)},Tt={map:H,forEach:function(U,st,St){H(U,function(){st.apply(this,arguments)},St)},count:function(U){var st=0;return H(U,function(){st++}),st},toArray:function(U){return H(U,function(st){return st})||[]},only:function(U){if(!G(U))throw Error("React.Children.only expected to receive a single React element child.");return U}};return de.Activity=_,de.Children=Tt,de.Component=x,de.Fragment=i,de.Profiler=l,de.PureComponent=P,de.StrictMode=s,de.Suspense=m,de.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=N,de.__COMPILER_RUNTIME={__proto__:null,c:function(U){return N.H.useMemoCache(U)}},de.cache=function(U){return function(){return U.apply(null,arguments)}},de.cacheSignal=function(){return null},de.cloneElement=function(U,st,St){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var Ut=w({},U.props),kt=U.key;if(st!=null)for(J in st.key!==void 0&&(kt=""+st.key),st)!Z.call(st,J)||J==="key"||J==="__self"||J==="__source"||J==="ref"&&st.ref===void 0||(Ut[J]=st[J]);var J=arguments.length-2;if(J===1)Ut.children=St;else if(1<J){for(var ft=Array(J),Pt=0;Pt<J;Pt++)ft[Pt]=arguments[Pt+2];Ut.children=ft}return A(U.type,kt,Ut)},de.createContext=function(U){return U={$$typeof:h,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:u,_context:U},U},de.createElement=function(U,st,St){var Ut,kt={},J=null;if(st!=null)for(Ut in st.key!==void 0&&(J=""+st.key),st)Z.call(st,Ut)&&Ut!=="key"&&Ut!=="__self"&&Ut!=="__source"&&(kt[Ut]=st[Ut]);var ft=arguments.length-2;if(ft===1)kt.children=St;else if(1<ft){for(var Pt=Array(ft),te=0;te<ft;te++)Pt[te]=arguments[te+2];kt.children=Pt}if(U&&U.defaultProps)for(Ut in ft=U.defaultProps,ft)kt[Ut]===void 0&&(kt[Ut]=ft[Ut]);return A(U,J,kt)},de.createRef=function(){return{current:null}},de.forwardRef=function(U){return{$$typeof:d,render:U}},de.isValidElement=G,de.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:rt}},de.memo=function(U,st){return{$$typeof:p,type:U,compare:st===void 0?null:st}},de.startTransition=function(U){var st=N.T,St={};N.T=St;try{var Ut=U(),kt=N.S;kt!==null&&kt(St,Ut),typeof Ut=="object"&&Ut!==null&&typeof Ut.then=="function"&&Ut.then(I,ct)}catch(J){ct(J)}finally{st!==null&&St.types!==null&&(st.types=St.types),N.T=st}},de.unstable_useCacheRefresh=function(){return N.H.useCacheRefresh()},de.use=function(U){return N.H.use(U)},de.useActionState=function(U,st,St){return N.H.useActionState(U,st,St)},de.useCallback=function(U,st){return N.H.useCallback(U,st)},de.useContext=function(U){return N.H.useContext(U)},de.useDebugValue=function(){},de.useDeferredValue=function(U,st){return N.H.useDeferredValue(U,st)},de.useEffect=function(U,st){return N.H.useEffect(U,st)},de.useEffectEvent=function(U){return N.H.useEffectEvent(U)},de.useId=function(){return N.H.useId()},de.useImperativeHandle=function(U,st,St){return N.H.useImperativeHandle(U,st,St)},de.useInsertionEffect=function(U,st){return N.H.useInsertionEffect(U,st)},de.useLayoutEffect=function(U,st){return N.H.useLayoutEffect(U,st)},de.useMemo=function(U,st){return N.H.useMemo(U,st)},de.useOptimistic=function(U,st){return N.H.useOptimistic(U,st)},de.useReducer=function(U,st,St){return N.H.useReducer(U,st,St)},de.useRef=function(U){return N.H.useRef(U)},de.useState=function(U){return N.H.useState(U)},de.useSyncExternalStore=function(U,st,St){return N.H.useSyncExternalStore(U,st,St)},de.useTransition=function(){return N.H.useTransition()},de.version="19.2.3",de}var yg;function Ad(){return yg||(yg=1,jf.exports=hS()),jf.exports}var ko=Ad(),Kf={exports:{}},zo={},Qf={exports:{}},Jf={};var Eg;function dS(){return Eg||(Eg=1,(function(o){function e(O,H){var rt=O.length;O.push(H);t:for(;0<rt;){var ct=rt-1>>>1,Tt=O[ct];if(0<l(Tt,H))O[ct]=H,O[rt]=Tt,rt=ct;else break t}}function i(O){return O.length===0?null:O[0]}function s(O){if(O.length===0)return null;var H=O[0],rt=O.pop();if(rt!==H){O[0]=rt;t:for(var ct=0,Tt=O.length,U=Tt>>>1;ct<U;){var st=2*(ct+1)-1,St=O[st],Ut=st+1,kt=O[Ut];if(0>l(St,rt))Ut<Tt&&0>l(kt,St)?(O[ct]=kt,O[Ut]=rt,ct=Ut):(O[ct]=St,O[st]=rt,ct=st);else if(Ut<Tt&&0>l(kt,rt))O[ct]=kt,O[Ut]=rt,ct=Ut;else break t}}return H}function l(O,H){var rt=O.sortIndex-H.sortIndex;return rt!==0?rt:O.id-H.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],g=1,_=null,S=3,E=!1,R=!1,w=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function L(O){for(var H=i(p);H!==null;){if(H.callback===null)s(p);else if(H.startTime<=O)s(p),H.sortIndex=H.expirationTime,e(m,H);else break;H=i(p)}}function F(O){if(w=!1,L(O),!R)if(i(m)!==null)R=!0,I||(I=!0,K());else{var H=i(p);H!==null&&ht(F,H.startTime-O)}}var I=!1,N=-1,Z=5,A=-1;function C(){return M?!0:!(o.unstable_now()-A<Z)}function G(){if(M=!1,I){var O=o.unstable_now();A=O;var H=!0;try{t:{R=!1,w&&(w=!1,z(N),N=-1),E=!0;var rt=S;try{e:{for(L(O),_=i(m);_!==null&&!(_.expirationTime>O&&C());){var ct=_.callback;if(typeof ct=="function"){_.callback=null,S=_.priorityLevel;var Tt=ct(_.expirationTime<=O);if(O=o.unstable_now(),typeof Tt=="function"){_.callback=Tt,L(O),H=!0;break e}_===i(m)&&s(m),L(O)}else s(m);_=i(m)}if(_!==null)H=!0;else{var U=i(p);U!==null&&ht(F,U.startTime-O),H=!1}}break t}finally{_=null,S=rt,E=!1}H=void 0}}finally{H?K():I=!1}}}var K;if(typeof P=="function")K=function(){P(G)};else if(typeof MessageChannel<"u"){var it=new MessageChannel,pt=it.port2;it.port1.onmessage=G,K=function(){pt.postMessage(null)}}else K=function(){x(G,0)};function ht(O,H){N=x(function(){O(o.unstable_now())},H)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(O){O.callback=null},o.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<O?Math.floor(1e3/O):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(O){switch(S){case 1:case 2:case 3:var H=3;break;default:H=S}var rt=S;S=H;try{return O()}finally{S=rt}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(O,H){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var rt=S;S=O;try{return H()}finally{S=rt}},o.unstable_scheduleCallback=function(O,H,rt){var ct=o.unstable_now();switch(typeof rt=="object"&&rt!==null?(rt=rt.delay,rt=typeof rt=="number"&&0<rt?ct+rt:ct):rt=ct,O){case 1:var Tt=-1;break;case 2:Tt=250;break;case 5:Tt=1073741823;break;case 4:Tt=1e4;break;default:Tt=5e3}return Tt=rt+Tt,O={id:g++,callback:H,priorityLevel:O,startTime:rt,expirationTime:Tt,sortIndex:-1},rt>ct?(O.sortIndex=rt,e(p,O),i(m)===null&&O===i(p)&&(w?(z(N),N=-1):w=!0,ht(F,rt-ct))):(O.sortIndex=Tt,e(m,O),R||E||(R=!0,I||(I=!0,K()))),O},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(O){var H=S;return function(){var rt=S;S=H;try{return O.apply(this,arguments)}finally{S=rt}}}})(Jf)),Jf}var Tg;function pS(){return Tg||(Tg=1,Qf.exports=dS()),Qf.exports}var $f={exports:{}},zn={};var bg;function mS(){if(bg)return zn;bg=1;var o=Ad();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:g}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return zn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,zn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,g)},zn.flushSync=function(m){var p=h.T,g=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=g,s.d.f()}},zn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},zn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},zn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,E=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:S,fetchPriority:E}):g==="script"&&s.d.X(m,{crossOrigin:_,integrity:S,fetchPriority:E,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},zn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},zn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin);s.d.L(m,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},zn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},zn.requestFormReset=function(m){s.d.r(m)},zn.unstable_batchedUpdates=function(m,p){return m(p)},zn.useFormState=function(m,p,g){return h.H.useFormState(m,p,g)},zn.useFormStatus=function(){return h.H.useHostTransitionStatus()},zn.version="19.2.3",zn}var Ag;function gS(){if(Ag)return $f.exports;Ag=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),$f.exports=mS(),$f.exports}var Rg;function _S(){if(Rg)return zo;Rg=1;var o=pS(),e=Ad(),i=gS();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,r=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(r=c.return,r!==null){a=r;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),t;if(f===r)return m(c),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=c,r=f;else{for(var v=!1,b=c.child;b;){if(b===a){v=!0,a=c,r=f;break}if(b===r){v=!0,r=c,a=f;break}b=b.sibling}if(!v){for(b=f.child;b;){if(b===a){v=!0,a=f,r=c;break}if(b===r){v=!0,r=f,a=c;break}b=b.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function g(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=g(t),n!==null)return n;t=t.sibling}return null}var _=Object.assign,S=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),z=Symbol.for("react.consumer"),P=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),N=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),A=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function K(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var it=Symbol.for("react.client.reference");function pt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===it?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case w:return"Fragment";case x:return"Profiler";case M:return"StrictMode";case F:return"Suspense";case I:return"SuspenseList";case A:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case R:return"Portal";case P:return t.displayName||"Context";case z:return(t._context.displayName||"Context")+".Consumer";case L:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case N:return n=t.displayName||null,n!==null?n:pt(t.type)||"Memo";case Z:n=t._payload,t=t._init;try{return pt(t(n))}catch{}}return null}var ht=Array.isArray,O=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,rt={pending:!1,data:null,method:null,action:null},ct=[],Tt=-1;function U(t){return{current:t}}function st(t){0>Tt||(t.current=ct[Tt],ct[Tt]=null,Tt--)}function St(t,n){Tt++,ct[Tt]=t.current,t.current=n}var Ut=U(null),kt=U(null),J=U(null),ft=U(null);function Pt(t,n){switch(St(J,n),St(kt,t),St(Ut,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?V0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=V0(n),t=X0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}st(Ut),St(Ut,t)}function te(){st(Ut),st(kt),st(J)}function qt(t){t.memoizedState!==null&&St(ft,t);var n=Ut.current,a=X0(n,t.type);n!==a&&(St(kt,t),St(Ut,a))}function Se(t){kt.current===t&&(st(Ut),st(kt)),ft.current===t&&(st(ft),Uo._currentValue=rt)}var Qe,Me;function me(t){if(Qe===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Qe=n&&n[1]||"",Me=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qe+t+Me}var Pe=!1;function he(t,n){if(!t||Pe)return"";Pe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var yt=function(){throw Error()};if(Object.defineProperty(yt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(yt,[])}catch(ut){var ot=ut}Reflect.construct(t,[],yt)}else{try{yt.call()}catch(ut){ot=ut}t.call(yt.prototype)}}else{try{throw Error()}catch(ut){ot=ut}(yt=t())&&typeof yt.catch=="function"&&yt.catch(function(){})}}catch(ut){if(ut&&ot&&typeof ut.stack=="string")return[ut.stack,ot.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),v=f[0],b=f[1];if(v&&b){var B=v.split(`
`),nt=b.split(`
`);for(c=r=0;r<B.length&&!B[r].includes("DetermineComponentFrameRoot");)r++;for(;c<nt.length&&!nt[c].includes("DetermineComponentFrameRoot");)c++;if(r===B.length||c===nt.length)for(r=B.length-1,c=nt.length-1;1<=r&&0<=c&&B[r]!==nt[c];)c--;for(;1<=r&&0<=c;r--,c--)if(B[r]!==nt[c]){if(r!==1||c!==1)do if(r--,c--,0>c||B[r]!==nt[c]){var gt=`
`+B[r].replace(" at new "," at ");return t.displayName&&gt.includes("<anonymous>")&&(gt=gt.replace("<anonymous>",t.displayName)),gt}while(1<=r&&0<=c);break}}}finally{Pe=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?me(a):""}function sn(t,n){switch(t.tag){case 26:case 27:case 5:return me(t.type);case 16:return me("Lazy");case 13:return t.child!==n&&n!==null?me("Suspense Fallback"):me("Suspense");case 19:return me("SuspenseList");case 0:case 15:return he(t.type,!1);case 11:return he(t.type.render,!1);case 1:return he(t.type,!0);case 31:return me("Activity");default:return""}}function V(t){try{var n="",a=null;do n+=sn(t,a),a=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Ye=Object.prototype.hasOwnProperty,ye=o.unstable_scheduleCallback,Oe=o.unstable_cancelCallback,Yt=o.unstable_shouldYield,D=o.unstable_requestPaint,y=o.unstable_now,W=o.unstable_getCurrentPriorityLevel,_t=o.unstable_ImmediatePriority,Et=o.unstable_UserBlockingPriority,at=o.unstable_NormalPriority,jt=o.unstable_LowPriority,Ot=o.unstable_IdlePriority,$t=o.log,le=o.unstable_setDisableYieldValue,At=null,Ct=null;function Gt(t){if(typeof $t=="function"&&le(t),Ct&&typeof Ct.setStrictMode=="function")try{Ct.setStrictMode(At,t)}catch{}}var zt=Math.clz32?Math.clz32:k,Ft=Math.log,fe=Math.LN2;function k(t){return t>>>=0,t===0?32:31-(Ft(t)/fe|0)|0}var It=256,Dt=262144,Ht=4194304;function bt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function xt(t,n,a){var r=t.pendingLanes;if(r===0)return 0;var c=0,f=t.suspendedLanes,v=t.pingedLanes;t=t.warmLanes;var b=r&134217727;return b!==0?(r=b&~f,r!==0?c=bt(r):(v&=b,v!==0?c=bt(v):a||(a=b&~t,a!==0&&(c=bt(a))))):(b=r&~f,b!==0?c=bt(b):v!==0?c=bt(v):a||(a=r&~t,a!==0&&(c=bt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Lt(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ue(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ie(){var t=Ht;return Ht<<=1,(Ht&62914560)===0&&(Ht=4194304),t}function De(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Ue(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Yn(t,n,a,r,c,f){var v=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var b=t.entanglements,B=t.expirationTimes,nt=t.hiddenUpdates;for(a=v&~a;0<a;){var gt=31-zt(a),yt=1<<gt;b[gt]=0,B[gt]=-1;var ot=nt[gt];if(ot!==null)for(nt[gt]=null,gt=0;gt<ot.length;gt++){var ut=ot[gt];ut!==null&&(ut.lane&=-536870913)}a&=~yt}r!==0&&na(t,r,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(v&~n))}function na(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-zt(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|a&261930}function ms(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var r=31-zt(a),c=1<<r;c&n|t[r]&n&&(t[r]|=n),a&=~c}}function Na(t,n){var a=n&-n;return a=(a&42)!==0?1:Gi(a),(a&(t.suspendedLanes|n))!==0?0:a}function Gi(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function ia(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function ei(){var t=H.p;return t!==0?t:(t=window.event,t===void 0?32:hg(t.type))}function wi(t,n){var a=H.p;try{return H.p=t,n()}finally{H.p=a}}var ni=Math.random().toString(36).slice(2),se="__reactFiber$"+ni,mn="__reactProps$"+ni,Vn="__reactContainer$"+ni,Oa="__reactEvents$"+ni,Pa="__reactListeners$"+ni,qr="__reactHandles$"+ni,En="__reactResources$"+ni,Ci="__reactMarker$"+ni;function aa(t){delete t[se],delete t[mn],delete t[Oa],delete t[Pa],delete t[qr]}function pi(t){var n=t[se];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Vn]||a[se]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=K0(t);t!==null;){if(a=t[se])return a;t=K0(t)}return n}t=a,a=t.parentNode}return null}function mi(t){if(t=t[se]||t[Vn]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Di(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function gi(t){var n=t[En];return n||(n=t[En]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function T(t){t[Ci]=!0}var Y=new Set,q={};function $(t,n){Q(t,n),Q(t+"Capture",n)}function Q(t,n){for(q[t]=n,t=0;t<n.length;t++)Y.add(n[t])}var Rt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Wt={},Bt={};function Kt(t){return Ye.call(Bt,t)?!0:Ye.call(Wt,t)?!1:Rt.test(t)?Bt[t]=!0:(Wt[t]=!0,!1)}function lt(t,n,a){if(Kt(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function mt(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Mt(t,n,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+r)}}function dt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function wt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Zt(t,n,a){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,f=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(v){a=""+v,f.call(this,v)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Qt(t){if(!t._valueTracker){var n=wt(t)?"checked":"value";t._valueTracker=Zt(t,n,""+t[n])}}function Xt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return t&&(r=wt(t)?t.checked?"true":"false":t.value),t=r,t!==a?(n.setValue(t),!0):!1}function Nt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var ae=/[\n"\\]/g;function ne(t){return t.replace(ae,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Re(t,n,a,r,c,f,v,b){t.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.type=v:t.removeAttribute("type"),n!=null?v==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+dt(n)):t.value!==""+dt(n)&&(t.value=""+dt(n)):v!=="submit"&&v!=="reset"||t.removeAttribute("value"),n!=null?ln(t,v,dt(n)):a!=null?ln(t,v,dt(a)):r!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.name=""+dt(b):t.removeAttribute("name")}function Je(t,n,a,r,c,f,v,b){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Qt(t);return}a=a!=null?""+dt(a):"",n=n!=null?""+dt(n):a,b||n===t.value||(t.value=n),t.defaultValue=n}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=b?t.checked:!!r,t.defaultChecked=!!r,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(t.name=v),Qt(t)}function ln(t,n,a){n==="number"&&Nt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Tn(t,n,a,r){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&r&&(t[a].defaultSelected=!0)}else{for(a=""+dt(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,r&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function Te(t,n,a){if(n!=null&&(n=""+dt(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+dt(a):""}function en(t,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(ht(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=dt(n),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r),Qt(t)}function tn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var un=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function cn(t,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,a):typeof a!="number"||a===0||un.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function ii(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="");for(var c in n)r=n[c],n.hasOwnProperty(c)&&a[c]!==r&&cn(t,c,r)}else for(var f in n)n.hasOwnProperty(f)&&cn(t,f,n[f])}function rn(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sa=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),gs=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function nl(t){return gs.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ra(){}var kc=null;function Wc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ws=null,qs=null;function Gd(t){var n=mi(t);if(n&&(t=n.stateNode)){var a=t[mn]||null;t:switch(t=n.stateNode,n.type){case"input":if(Re(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ne(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==t&&r.form===t.form){var c=r[mn]||null;if(!c)throw Error(s(90));Re(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===t.form&&Xt(r)}break t;case"textarea":Te(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Tn(t,!!a.multiple,n,!1)}}}var qc=!1;function Vd(t,n,a){if(qc)return t(n,a);qc=!0;try{var r=t(n);return r}finally{if(qc=!1,(Ws!==null||qs!==null)&&(Xl(),Ws&&(n=Ws,t=qs,qs=Ws=null,Gd(n),t)))for(n=0;n<t.length;n++)Gd(t[n])}}function Yr(t,n){var a=t.stateNode;if(a===null)return null;var r=a[mn]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var oa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yc=!1;if(oa)try{var Zr={};Object.defineProperty(Zr,"passive",{get:function(){Yc=!0}}),window.addEventListener("test",Zr,Zr),window.removeEventListener("test",Zr,Zr)}catch{Yc=!1}var za=null,Zc=null,il=null;function Xd(){if(il)return il;var t,n=Zc,a=n.length,r,c="value"in za?za.value:za.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var v=a-t;for(r=1;r<=v&&n[a-r]===c[f-r];r++);return il=c.slice(t,1<r?1-r:void 0)}function al(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function sl(){return!0}function kd(){return!1}function Zn(t){function n(a,r,c,f,v){this._reactName=a,this._targetInst=c,this.type=r,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var b in t)t.hasOwnProperty(b)&&(a=t[b],this[b]=a?a(f):f[b]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?sl:kd,this.isPropagationStopped=kd,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=sl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=sl)},persist:function(){},isPersistent:sl}),n}var _s={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rl=Zn(_s),jr=_({},_s,{view:0,detail:0}),lv=Zn(jr),jc,Kc,Kr,ol=_({},jr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Kr&&(Kr&&t.type==="mousemove"?(jc=t.screenX-Kr.screenX,Kc=t.screenY-Kr.screenY):Kc=jc=0,Kr=t),jc)},movementY:function(t){return"movementY"in t?t.movementY:Kc}}),Wd=Zn(ol),cv=_({},ol,{dataTransfer:0}),uv=Zn(cv),fv=_({},jr,{relatedTarget:0}),Qc=Zn(fv),hv=_({},_s,{animationName:0,elapsedTime:0,pseudoElement:0}),dv=Zn(hv),pv=_({},_s,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),mv=Zn(pv),gv=_({},_s,{data:0}),qd=Zn(gv),_v={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=xv[t])?!!n[t]:!1}function Jc(){return Sv}var Mv=_({},jr,{key:function(t){if(t.key){var n=_v[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=al(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?vv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jc,charCode:function(t){return t.type==="keypress"?al(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?al(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),yv=Zn(Mv),Ev=_({},ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yd=Zn(Ev),Tv=_({},jr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jc}),bv=Zn(Tv),Av=_({},_s,{propertyName:0,elapsedTime:0,pseudoElement:0}),Rv=Zn(Av),wv=_({},ol,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Cv=Zn(wv),Dv=_({},_s,{newState:0,oldState:0}),Uv=Zn(Dv),Lv=[9,13,27,32],$c=oa&&"CompositionEvent"in window,Qr=null;oa&&"documentMode"in document&&(Qr=document.documentMode);var Nv=oa&&"TextEvent"in window&&!Qr,Zd=oa&&(!$c||Qr&&8<Qr&&11>=Qr),jd=" ",Kd=!1;function Qd(t,n){switch(t){case"keyup":return Lv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ys=!1;function Ov(t,n){switch(t){case"compositionend":return Jd(n);case"keypress":return n.which!==32?null:(Kd=!0,jd);case"textInput":return t=n.data,t===jd&&Kd?null:t;default:return null}}function Pv(t,n){if(Ys)return t==="compositionend"||!$c&&Qd(t,n)?(t=Xd(),il=Zc=za=null,Ys=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Zd&&n.locale!=="ko"?null:n.data;default:return null}}var zv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $d(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!zv[t.type]:n==="textarea"}function tp(t,n,a,r){Ws?qs?qs.push(r):qs=[r]:Ws=r,n=Kl(n,"onChange"),0<n.length&&(a=new rl("onChange","change",null,a,r),t.push({event:a,listeners:n}))}var Jr=null,$r=null;function Fv(t){z0(t,0)}function ll(t){var n=Di(t);if(Xt(n))return t}function ep(t,n){if(t==="change")return n}var np=!1;if(oa){var tu;if(oa){var eu="oninput"in document;if(!eu){var ip=document.createElement("div");ip.setAttribute("oninput","return;"),eu=typeof ip.oninput=="function"}tu=eu}else tu=!1;np=tu&&(!document.documentMode||9<document.documentMode)}function ap(){Jr&&(Jr.detachEvent("onpropertychange",sp),$r=Jr=null)}function sp(t){if(t.propertyName==="value"&&ll($r)){var n=[];tp(n,$r,t,Wc(t)),Vd(Fv,n)}}function Iv(t,n,a){t==="focusin"?(ap(),Jr=n,$r=a,Jr.attachEvent("onpropertychange",sp)):t==="focusout"&&ap()}function Bv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ll($r)}function Hv(t,n){if(t==="click")return ll(n)}function Gv(t,n){if(t==="input"||t==="change")return ll(n)}function Vv(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ai=typeof Object.is=="function"?Object.is:Vv;function to(t,n){if(ai(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var c=a[r];if(!Ye.call(n,c)||!ai(t[c],n[c]))return!1}return!0}function rp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function op(t,n){var a=rp(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=n&&r>=n)return{node:a,offset:n-t};t=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=rp(a)}}function lp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?lp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function cp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Nt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Nt(t.document)}return n}function nu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Xv=oa&&"documentMode"in document&&11>=document.documentMode,Zs=null,iu=null,eo=null,au=!1;function up(t,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;au||Zs==null||Zs!==Nt(r)||(r=Zs,"selectionStart"in r&&nu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),eo&&to(eo,r)||(eo=r,r=Kl(iu,"onSelect"),0<r.length&&(n=new rl("onSelect","select",null,n,a),t.push({event:n,listeners:r}),n.target=Zs)))}function vs(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var js={animationend:vs("Animation","AnimationEnd"),animationiteration:vs("Animation","AnimationIteration"),animationstart:vs("Animation","AnimationStart"),transitionrun:vs("Transition","TransitionRun"),transitionstart:vs("Transition","TransitionStart"),transitioncancel:vs("Transition","TransitionCancel"),transitionend:vs("Transition","TransitionEnd")},su={},fp={};oa&&(fp=document.createElement("div").style,"AnimationEvent"in window||(delete js.animationend.animation,delete js.animationiteration.animation,delete js.animationstart.animation),"TransitionEvent"in window||delete js.transitionend.transition);function xs(t){if(su[t])return su[t];if(!js[t])return t;var n=js[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in fp)return su[t]=n[a];return t}var hp=xs("animationend"),dp=xs("animationiteration"),pp=xs("animationstart"),kv=xs("transitionrun"),Wv=xs("transitionstart"),qv=xs("transitioncancel"),mp=xs("transitionend"),gp=new Map,ru="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ru.push("scrollEnd");function Ui(t,n){gp.set(t,n),$(n,[t])}var cl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},_i=[],Ks=0,ou=0;function ul(){for(var t=Ks,n=ou=Ks=0;n<t;){var a=_i[n];_i[n++]=null;var r=_i[n];_i[n++]=null;var c=_i[n];_i[n++]=null;var f=_i[n];if(_i[n++]=null,r!==null&&c!==null){var v=r.pending;v===null?c.next=c:(c.next=v.next,v.next=c),r.pending=c}f!==0&&_p(a,c,f)}}function fl(t,n,a,r){_i[Ks++]=t,_i[Ks++]=n,_i[Ks++]=a,_i[Ks++]=r,ou|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function lu(t,n,a,r){return fl(t,n,a,r),hl(t)}function Ss(t,n){return fl(t,null,null,n),hl(t)}function _p(t,n,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-zt(a),t=f.hiddenUpdates,r=t[c],r===null?t[c]=[n]:r.push(n),n.lane=a|536870912),f):null}function hl(t){if(50<To)throw To=0,vf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Qs={};function Yv(t,n,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function si(t,n,a,r){return new Yv(t,n,a,r)}function cu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function la(t,n){var a=t.alternate;return a===null?(a=si(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function vp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function dl(t,n,a,r,c,f){var v=0;if(r=t,typeof t=="function")cu(t)&&(v=1);else if(typeof t=="string")v=Jx(t,a,Ut.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case A:return t=si(31,a,n,c),t.elementType=A,t.lanes=f,t;case w:return Ms(a.children,c,f,n);case M:v=8,c|=24;break;case x:return t=si(12,a,n,c|2),t.elementType=x,t.lanes=f,t;case F:return t=si(13,a,n,c),t.elementType=F,t.lanes=f,t;case I:return t=si(19,a,n,c),t.elementType=I,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case P:v=10;break t;case z:v=9;break t;case L:v=11;break t;case N:v=14;break t;case Z:v=16,r=null;break t}v=29,a=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=si(v,a,n,c),n.elementType=t,n.type=r,n.lanes=f,n}function Ms(t,n,a,r){return t=si(7,t,r,n),t.lanes=a,t}function uu(t,n,a){return t=si(6,t,null,n),t.lanes=a,t}function xp(t){var n=si(18,null,null,0);return n.stateNode=t,n}function fu(t,n,a){return n=si(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Sp=new WeakMap;function vi(t,n){if(typeof t=="object"&&t!==null){var a=Sp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:V(n)},Sp.set(t,n),n)}return{value:t,source:n,stack:V(n)}}var Js=[],$s=0,pl=null,no=0,xi=[],Si=0,Fa=null,Vi=1,Xi="";function ca(t,n){Js[$s++]=no,Js[$s++]=pl,pl=t,no=n}function Mp(t,n,a){xi[Si++]=Vi,xi[Si++]=Xi,xi[Si++]=Fa,Fa=t;var r=Vi;t=Xi;var c=32-zt(r)-1;r&=~(1<<c),a+=1;var f=32-zt(n)+c;if(30<f){var v=c-c%5;f=(r&(1<<v)-1).toString(32),r>>=v,c-=v,Vi=1<<32-zt(n)+c|a<<c|r,Xi=f+t}else Vi=1<<f|a<<c|r,Xi=t}function hu(t){t.return!==null&&(ca(t,1),Mp(t,1,0))}function du(t){for(;t===pl;)pl=Js[--$s],Js[$s]=null,no=Js[--$s],Js[$s]=null;for(;t===Fa;)Fa=xi[--Si],xi[Si]=null,Xi=xi[--Si],xi[Si]=null,Vi=xi[--Si],xi[Si]=null}function yp(t,n){xi[Si++]=Vi,xi[Si++]=Xi,xi[Si++]=Fa,Vi=n.id,Xi=n.overflow,Fa=t}var Un=null,nn=null,Le=!1,Ia=null,Mi=!1,pu=Error(s(519));function Ba(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw io(vi(n,t)),pu}function Ep(t){var n=t.stateNode,a=t.type,r=t.memoizedProps;switch(n[se]=t,n[mn]=r,a){case"dialog":Ae("cancel",n),Ae("close",n);break;case"iframe":case"object":case"embed":Ae("load",n);break;case"video":case"audio":for(a=0;a<Ao.length;a++)Ae(Ao[a],n);break;case"source":Ae("error",n);break;case"img":case"image":case"link":Ae("error",n),Ae("load",n);break;case"details":Ae("toggle",n);break;case"input":Ae("invalid",n),Je(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Ae("invalid",n);break;case"textarea":Ae("invalid",n),en(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||H0(n.textContent,a)?(r.popover!=null&&(Ae("beforetoggle",n),Ae("toggle",n)),r.onScroll!=null&&Ae("scroll",n),r.onScrollEnd!=null&&Ae("scrollend",n),r.onClick!=null&&(n.onclick=ra),n=!0):n=!1,n||Ba(t,!0)}function Tp(t){for(Un=t.return;Un;)switch(Un.tag){case 5:case 31:case 13:Mi=!1;return;case 27:case 3:Mi=!0;return;default:Un=Un.return}}function tr(t){if(t!==Un)return!1;if(!Le)return Tp(t),Le=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Nf(t.type,t.memoizedProps)),a=!a),a&&nn&&Ba(t),Tp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));nn=j0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));nn=j0(t)}else n===27?(n=nn,$a(t.type)?(t=If,If=null,nn=t):nn=n):nn=Un?Ei(t.stateNode.nextSibling):null;return!0}function ys(){nn=Un=null,Le=!1}function mu(){var t=Ia;return t!==null&&(Jn===null?Jn=t:Jn.push.apply(Jn,t),Ia=null),t}function io(t){Ia===null?Ia=[t]:Ia.push(t)}var gu=U(null),Es=null,ua=null;function Ha(t,n,a){St(gu,n._currentValue),n._currentValue=a}function fa(t){t._currentValue=gu.current,st(gu)}function _u(t,n,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===a)break;t=t.return}}function vu(t,n,a,r){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var v=c.child;f=f.firstContext;t:for(;f!==null;){var b=f;f=c;for(var B=0;B<n.length;B++)if(b.context===n[B]){f.lanes|=a,b=f.alternate,b!==null&&(b.lanes|=a),_u(f.return,a,t),r||(v=null);break t}f=b.next}}else if(c.tag===18){if(v=c.return,v===null)throw Error(s(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),_u(v,a,t),v=null}else v=c.child;if(v!==null)v.return=c;else for(v=c;v!==null;){if(v===t){v=null;break}if(c=v.sibling,c!==null){c.return=v.return,v=c;break}v=v.return}c=v}}function er(t,n,a,r){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var v=c.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var b=c.type;ai(c.pendingProps.value,v.value)||(t!==null?t.push(b):t=[b])}}else if(c===ft.current){if(v=c.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(Uo):t=[Uo])}c=c.return}t!==null&&vu(n,t,a,r),n.flags|=262144}function ml(t){for(t=t.firstContext;t!==null;){if(!ai(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ts(t){Es=t,ua=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Ln(t){return bp(Es,t)}function gl(t,n){return Es===null&&Ts(t),bp(t,n)}function bp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ua===null){if(t===null)throw Error(s(308));ua=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ua=ua.next=n;return a}var Zv=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},jv=o.unstable_scheduleCallback,Kv=o.unstable_NormalPriority,vn={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function xu(){return{controller:new Zv,data:new Map,refCount:0}}function ao(t){t.refCount--,t.refCount===0&&jv(Kv,function(){t.controller.abort()})}var so=null,Su=0,nr=0,ir=null;function Qv(t,n){if(so===null){var a=so=[];Su=0,nr=Tf(),ir={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Su++,n.then(Ap,Ap),n}function Ap(){if(--Su===0&&so!==null){ir!==null&&(ir.status="fulfilled");var t=so;so=null,nr=0,ir=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Jv(t,n){var a=[],r={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(r.status="rejected",r.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),r}var Rp=O.S;O.S=function(t,n){u0=y(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Qv(t,n),Rp!==null&&Rp(t,n)};var bs=U(null);function Mu(){var t=bs.current;return t!==null?t:$e.pooledCache}function _l(t,n){n===null?St(bs,bs.current):St(bs,n.pool)}function wp(){var t=Mu();return t===null?null:{parent:vn._currentValue,pool:t}}var ar=Error(s(460)),yu=Error(s(474)),vl=Error(s(542)),xl={then:function(){}};function Cp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Dp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(ra,ra),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Lp(t),t;default:if(typeof n.status=="string")n.then(ra,ra);else{if(t=$e,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=r}},function(r){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Lp(t),t}throw Rs=n,ar}}function As(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Rs=a,ar):a}}var Rs=null;function Up(){if(Rs===null)throw Error(s(459));var t=Rs;return Rs=null,t}function Lp(t){if(t===ar||t===vl)throw Error(s(483))}var sr=null,ro=0;function Sl(t){var n=ro;return ro+=1,sr===null&&(sr=[]),Dp(sr,t,n)}function oo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Ml(t,n){throw n.$$typeof===S?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Np(t){function n(j,X){if(t){var tt=j.deletions;tt===null?(j.deletions=[X],j.flags|=16):tt.push(X)}}function a(j,X){if(!t)return null;for(;X!==null;)n(j,X),X=X.sibling;return null}function r(j){for(var X=new Map;j!==null;)j.key!==null?X.set(j.key,j):X.set(j.index,j),j=j.sibling;return X}function c(j,X){return j=la(j,X),j.index=0,j.sibling=null,j}function f(j,X,tt){return j.index=tt,t?(tt=j.alternate,tt!==null?(tt=tt.index,tt<X?(j.flags|=67108866,X):tt):(j.flags|=67108866,X)):(j.flags|=1048576,X)}function v(j){return t&&j.alternate===null&&(j.flags|=67108866),j}function b(j,X,tt,vt){return X===null||X.tag!==6?(X=uu(tt,j.mode,vt),X.return=j,X):(X=c(X,tt),X.return=j,X)}function B(j,X,tt,vt){var oe=tt.type;return oe===w?gt(j,X,tt.props.children,vt,tt.key):X!==null&&(X.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===Z&&As(oe)===X.type)?(X=c(X,tt.props),oo(X,tt),X.return=j,X):(X=dl(tt.type,tt.key,tt.props,null,j.mode,vt),oo(X,tt),X.return=j,X)}function nt(j,X,tt,vt){return X===null||X.tag!==4||X.stateNode.containerInfo!==tt.containerInfo||X.stateNode.implementation!==tt.implementation?(X=fu(tt,j.mode,vt),X.return=j,X):(X=c(X,tt.children||[]),X.return=j,X)}function gt(j,X,tt,vt,oe){return X===null||X.tag!==7?(X=Ms(tt,j.mode,vt,oe),X.return=j,X):(X=c(X,tt),X.return=j,X)}function yt(j,X,tt){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=uu(""+X,j.mode,tt),X.return=j,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case E:return tt=dl(X.type,X.key,X.props,null,j.mode,tt),oo(tt,X),tt.return=j,tt;case R:return X=fu(X,j.mode,tt),X.return=j,X;case Z:return X=As(X),yt(j,X,tt)}if(ht(X)||K(X))return X=Ms(X,j.mode,tt,null),X.return=j,X;if(typeof X.then=="function")return yt(j,Sl(X),tt);if(X.$$typeof===P)return yt(j,gl(j,X),tt);Ml(j,X)}return null}function ot(j,X,tt,vt){var oe=X!==null?X.key:null;if(typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint")return oe!==null?null:b(j,X,""+tt,vt);if(typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case E:return tt.key===oe?B(j,X,tt,vt):null;case R:return tt.key===oe?nt(j,X,tt,vt):null;case Z:return tt=As(tt),ot(j,X,tt,vt)}if(ht(tt)||K(tt))return oe!==null?null:gt(j,X,tt,vt,null);if(typeof tt.then=="function")return ot(j,X,Sl(tt),vt);if(tt.$$typeof===P)return ot(j,X,gl(j,tt),vt);Ml(j,tt)}return null}function ut(j,X,tt,vt,oe){if(typeof vt=="string"&&vt!==""||typeof vt=="number"||typeof vt=="bigint")return j=j.get(tt)||null,b(X,j,""+vt,oe);if(typeof vt=="object"&&vt!==null){switch(vt.$$typeof){case E:return j=j.get(vt.key===null?tt:vt.key)||null,B(X,j,vt,oe);case R:return j=j.get(vt.key===null?tt:vt.key)||null,nt(X,j,vt,oe);case Z:return vt=As(vt),ut(j,X,tt,vt,oe)}if(ht(vt)||K(vt))return j=j.get(tt)||null,gt(X,j,vt,oe,null);if(typeof vt.then=="function")return ut(j,X,tt,Sl(vt),oe);if(vt.$$typeof===P)return ut(j,X,tt,gl(X,vt),oe);Ml(X,vt)}return null}function ee(j,X,tt,vt){for(var oe=null,Be=null,ie=X,_e=X=0,Ce=null;ie!==null&&_e<tt.length;_e++){ie.index>_e?(Ce=ie,ie=null):Ce=ie.sibling;var He=ot(j,ie,tt[_e],vt);if(He===null){ie===null&&(ie=Ce);break}t&&ie&&He.alternate===null&&n(j,ie),X=f(He,X,_e),Be===null?oe=He:Be.sibling=He,Be=He,ie=Ce}if(_e===tt.length)return a(j,ie),Le&&ca(j,_e),oe;if(ie===null){for(;_e<tt.length;_e++)ie=yt(j,tt[_e],vt),ie!==null&&(X=f(ie,X,_e),Be===null?oe=ie:Be.sibling=ie,Be=ie);return Le&&ca(j,_e),oe}for(ie=r(ie);_e<tt.length;_e++)Ce=ut(ie,j,_e,tt[_e],vt),Ce!==null&&(t&&Ce.alternate!==null&&ie.delete(Ce.key===null?_e:Ce.key),X=f(Ce,X,_e),Be===null?oe=Ce:Be.sibling=Ce,Be=Ce);return t&&ie.forEach(function(as){return n(j,as)}),Le&&ca(j,_e),oe}function ce(j,X,tt,vt){if(tt==null)throw Error(s(151));for(var oe=null,Be=null,ie=X,_e=X=0,Ce=null,He=tt.next();ie!==null&&!He.done;_e++,He=tt.next()){ie.index>_e?(Ce=ie,ie=null):Ce=ie.sibling;var as=ot(j,ie,He.value,vt);if(as===null){ie===null&&(ie=Ce);break}t&&ie&&as.alternate===null&&n(j,ie),X=f(as,X,_e),Be===null?oe=as:Be.sibling=as,Be=as,ie=Ce}if(He.done)return a(j,ie),Le&&ca(j,_e),oe;if(ie===null){for(;!He.done;_e++,He=tt.next())He=yt(j,He.value,vt),He!==null&&(X=f(He,X,_e),Be===null?oe=He:Be.sibling=He,Be=He);return Le&&ca(j,_e),oe}for(ie=r(ie);!He.done;_e++,He=tt.next())He=ut(ie,j,_e,He.value,vt),He!==null&&(t&&He.alternate!==null&&ie.delete(He.key===null?_e:He.key),X=f(He,X,_e),Be===null?oe=He:Be.sibling=He,Be=He);return t&&ie.forEach(function(cS){return n(j,cS)}),Le&&ca(j,_e),oe}function Ke(j,X,tt,vt){if(typeof tt=="object"&&tt!==null&&tt.type===w&&tt.key===null&&(tt=tt.props.children),typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case E:t:{for(var oe=tt.key;X!==null;){if(X.key===oe){if(oe=tt.type,oe===w){if(X.tag===7){a(j,X.sibling),vt=c(X,tt.props.children),vt.return=j,j=vt;break t}}else if(X.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===Z&&As(oe)===X.type){a(j,X.sibling),vt=c(X,tt.props),oo(vt,tt),vt.return=j,j=vt;break t}a(j,X);break}else n(j,X);X=X.sibling}tt.type===w?(vt=Ms(tt.props.children,j.mode,vt,tt.key),vt.return=j,j=vt):(vt=dl(tt.type,tt.key,tt.props,null,j.mode,vt),oo(vt,tt),vt.return=j,j=vt)}return v(j);case R:t:{for(oe=tt.key;X!==null;){if(X.key===oe)if(X.tag===4&&X.stateNode.containerInfo===tt.containerInfo&&X.stateNode.implementation===tt.implementation){a(j,X.sibling),vt=c(X,tt.children||[]),vt.return=j,j=vt;break t}else{a(j,X);break}else n(j,X);X=X.sibling}vt=fu(tt,j.mode,vt),vt.return=j,j=vt}return v(j);case Z:return tt=As(tt),Ke(j,X,tt,vt)}if(ht(tt))return ee(j,X,tt,vt);if(K(tt)){if(oe=K(tt),typeof oe!="function")throw Error(s(150));return tt=oe.call(tt),ce(j,X,tt,vt)}if(typeof tt.then=="function")return Ke(j,X,Sl(tt),vt);if(tt.$$typeof===P)return Ke(j,X,gl(j,tt),vt);Ml(j,tt)}return typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint"?(tt=""+tt,X!==null&&X.tag===6?(a(j,X.sibling),vt=c(X,tt),vt.return=j,j=vt):(a(j,X),vt=uu(tt,j.mode,vt),vt.return=j,j=vt),v(j)):a(j,X)}return function(j,X,tt,vt){try{ro=0;var oe=Ke(j,X,tt,vt);return sr=null,oe}catch(ie){if(ie===ar||ie===vl)throw ie;var Be=si(29,ie,null,j.mode);return Be.lanes=vt,Be.return=j,Be}}}var ws=Np(!0),Op=Np(!1),Ga=!1;function Eu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Tu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Va(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Xa(t,n,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Xe&2)!==0){var c=r.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),r.pending=n,n=hl(t),_p(t,null,a),n}return fl(t,r,n,a),hl(t)}function lo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,ms(t,a)}}function bu(t,n){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Au=!1;function co(){if(Au){var t=ir;if(t!==null)throw t}}function uo(t,n,a,r){Au=!1;var c=t.updateQueue;Ga=!1;var f=c.firstBaseUpdate,v=c.lastBaseUpdate,b=c.shared.pending;if(b!==null){c.shared.pending=null;var B=b,nt=B.next;B.next=null,v===null?f=nt:v.next=nt,v=B;var gt=t.alternate;gt!==null&&(gt=gt.updateQueue,b=gt.lastBaseUpdate,b!==v&&(b===null?gt.firstBaseUpdate=nt:b.next=nt,gt.lastBaseUpdate=B))}if(f!==null){var yt=c.baseState;v=0,gt=nt=B=null,b=f;do{var ot=b.lane&-536870913,ut=ot!==b.lane;if(ut?(we&ot)===ot:(r&ot)===ot){ot!==0&&ot===nr&&(Au=!0),gt!==null&&(gt=gt.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var ee=t,ce=b;ot=n;var Ke=a;switch(ce.tag){case 1:if(ee=ce.payload,typeof ee=="function"){yt=ee.call(Ke,yt,ot);break t}yt=ee;break t;case 3:ee.flags=ee.flags&-65537|128;case 0:if(ee=ce.payload,ot=typeof ee=="function"?ee.call(Ke,yt,ot):ee,ot==null)break t;yt=_({},yt,ot);break t;case 2:Ga=!0}}ot=b.callback,ot!==null&&(t.flags|=64,ut&&(t.flags|=8192),ut=c.callbacks,ut===null?c.callbacks=[ot]:ut.push(ot))}else ut={lane:ot,tag:b.tag,payload:b.payload,callback:b.callback,next:null},gt===null?(nt=gt=ut,B=yt):gt=gt.next=ut,v|=ot;if(b=b.next,b===null){if(b=c.shared.pending,b===null)break;ut=b,b=ut.next,ut.next=null,c.lastBaseUpdate=ut,c.shared.pending=null}}while(!0);gt===null&&(B=yt),c.baseState=B,c.firstBaseUpdate=nt,c.lastBaseUpdate=gt,f===null&&(c.shared.lanes=0),Za|=v,t.lanes=v,t.memoizedState=yt}}function Pp(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function zp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Pp(a[t],n)}var rr=U(null),yl=U(0);function Fp(t,n){t=Sa,St(yl,t),St(rr,n),Sa=t|n.baseLanes}function Ru(){St(yl,Sa),St(rr,rr.current)}function wu(){Sa=yl.current,st(rr),st(yl)}var ri=U(null),yi=null;function ka(t){var n=t.alternate;St(gn,gn.current&1),St(ri,t),yi===null&&(n===null||rr.current!==null||n.memoizedState!==null)&&(yi=t)}function Cu(t){St(gn,gn.current),St(ri,t),yi===null&&(yi=t)}function Ip(t){t.tag===22?(St(gn,gn.current),St(ri,t),yi===null&&(yi=t)):Wa()}function Wa(){St(gn,gn.current),St(ri,ri.current)}function oi(t){st(ri),yi===t&&(yi=null),st(gn)}var gn=U(0);function El(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||zf(a)||Ff(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ha=0,ge=null,Ze=null,xn=null,Tl=!1,or=!1,Cs=!1,bl=0,fo=0,lr=null,$v=0;function fn(){throw Error(s(321))}function Du(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!ai(t[a],n[a]))return!1;return!0}function Uu(t,n,a,r,c,f){return ha=f,ge=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=t===null||t.memoizedState===null?Mm:qu,Cs=!1,f=a(r,c),Cs=!1,or&&(f=Hp(n,a,r,c)),Bp(t),f}function Bp(t){O.H=mo;var n=Ze!==null&&Ze.next!==null;if(ha=0,xn=Ze=ge=null,Tl=!1,fo=0,lr=null,n)throw Error(s(300));t===null||Sn||(t=t.dependencies,t!==null&&ml(t)&&(Sn=!0))}function Hp(t,n,a,r){ge=t;var c=0;do{if(or&&(lr=null),fo=0,or=!1,25<=c)throw Error(s(301));if(c+=1,xn=Ze=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}O.H=ym,f=n(a,r)}while(or);return f}function tx(){var t=O.H,n=t.useState()[0];return n=typeof n.then=="function"?ho(n):n,t=t.useState()[0],(Ze!==null?Ze.memoizedState:null)!==t&&(ge.flags|=1024),n}function Lu(){var t=bl!==0;return bl=0,t}function Nu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Ou(t){if(Tl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Tl=!1}ha=0,xn=Ze=ge=null,or=!1,fo=bl=0,lr=null}function Xn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xn===null?ge.memoizedState=xn=t:xn=xn.next=t,xn}function _n(){if(Ze===null){var t=ge.alternate;t=t!==null?t.memoizedState:null}else t=Ze.next;var n=xn===null?ge.memoizedState:xn.next;if(n!==null)xn=n,Ze=t;else{if(t===null)throw ge.alternate===null?Error(s(467)):Error(s(310));Ze=t,t={memoizedState:Ze.memoizedState,baseState:Ze.baseState,baseQueue:Ze.baseQueue,queue:Ze.queue,next:null},xn===null?ge.memoizedState=xn=t:xn=xn.next=t}return xn}function Al(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ho(t){var n=fo;return fo+=1,lr===null&&(lr=[]),t=Dp(lr,t,n),n=ge,(xn===null?n.memoizedState:xn.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?Mm:qu),t}function Rl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ho(t);if(t.$$typeof===P)return Ln(t)}throw Error(s(438,String(t)))}function Pu(t){var n=null,a=ge.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=ge.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Al(),ge.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),r=0;r<t;r++)a[r]=C;return n.index++,a}function da(t,n){return typeof n=="function"?n(t):n}function wl(t){var n=_n();return zu(n,Ze,t)}function zu(t,n,a){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var c=t.baseQueue,f=r.pending;if(f!==null){if(c!==null){var v=c.next;c.next=f.next,f.next=v}n.baseQueue=c=f,r.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var b=v=null,B=null,nt=n,gt=!1;do{var yt=nt.lane&-536870913;if(yt!==nt.lane?(we&yt)===yt:(ha&yt)===yt){var ot=nt.revertLane;if(ot===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null}),yt===nr&&(gt=!0);else if((ha&ot)===ot){nt=nt.next,ot===nr&&(gt=!0);continue}else yt={lane:0,revertLane:nt.revertLane,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},B===null?(b=B=yt,v=f):B=B.next=yt,ge.lanes|=ot,Za|=ot;yt=nt.action,Cs&&a(f,yt),f=nt.hasEagerState?nt.eagerState:a(f,yt)}else ot={lane:yt,revertLane:nt.revertLane,gesture:nt.gesture,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},B===null?(b=B=ot,v=f):B=B.next=ot,ge.lanes|=yt,Za|=yt;nt=nt.next}while(nt!==null&&nt!==n);if(B===null?v=f:B.next=b,!ai(f,t.memoizedState)&&(Sn=!0,gt&&(a=ir,a!==null)))throw a;t.memoizedState=f,t.baseState=v,t.baseQueue=B,r.lastRenderedState=f}return c===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Fu(t){var n=_n(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var r=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var v=c=c.next;do f=t(f,v.action),v=v.next;while(v!==c);ai(f,n.memoizedState)||(Sn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function Gp(t,n,a){var r=ge,c=_n(),f=Le;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var v=!ai((Ze||c).memoizedState,a);if(v&&(c.memoizedState=a,Sn=!0),c=c.queue,Hu(kp.bind(null,r,c,t),[t]),c.getSnapshot!==n||v||xn!==null&&xn.memoizedState.tag&1){if(r.flags|=2048,cr(9,{destroy:void 0},Xp.bind(null,r,c,a,n),null),$e===null)throw Error(s(349));f||(ha&127)!==0||Vp(r,n,a)}return a}function Vp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ge.updateQueue,n===null?(n=Al(),ge.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Xp(t,n,a,r){n.value=a,n.getSnapshot=r,Wp(n)&&qp(t)}function kp(t,n,a){return a(function(){Wp(n)&&qp(t)})}function Wp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!ai(t,a)}catch{return!0}}function qp(t){var n=Ss(t,2);n!==null&&$n(n,t,2)}function Iu(t){var n=Xn();if(typeof t=="function"){var a=t;if(t=a(),Cs){Gt(!0);try{a()}finally{Gt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:t},n}function Yp(t,n,a,r){return t.baseState=a,zu(t,Ze,typeof r=="function"?r:da)}function ex(t,n,a,r,c){if(Ul(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};O.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,Zp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Zp(t,n){var a=n.action,r=n.payload,c=t.state;if(n.isTransition){var f=O.T,v={};O.T=v;try{var b=a(c,r),B=O.S;B!==null&&B(v,b),jp(t,n,b)}catch(nt){Bu(t,n,nt)}finally{f!==null&&v.types!==null&&(f.types=v.types),O.T=f}}else try{f=a(c,r),jp(t,n,f)}catch(nt){Bu(t,n,nt)}}function jp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){Kp(t,n,r)},function(r){return Bu(t,n,r)}):Kp(t,n,a)}function Kp(t,n,a){n.status="fulfilled",n.value=a,Qp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Zp(t,a)))}function Bu(t,n,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,Qp(n),n=n.next;while(n!==r)}t.action=null}function Qp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Jp(t,n){return n}function $p(t,n){if(Le){var a=$e.formState;if(a!==null){t:{var r=ge;if(Le){if(nn){e:{for(var c=nn,f=Mi;c.nodeType!==8;){if(!f){c=null;break e}if(c=Ei(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){nn=Ei(c.nextSibling),r=c.data==="F!";break t}}Ba(r)}r=!1}r&&(n=a[0])}}return a=Xn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jp,lastRenderedState:n},a.queue=r,a=vm.bind(null,ge,r),r.dispatch=a,r=Iu(!1),f=Wu.bind(null,ge,!1,r.queue),r=Xn(),c={state:n,dispatch:null,action:t,pending:null},r.queue=c,a=ex.bind(null,ge,c,f,a),c.dispatch=a,r.memoizedState=t,[n,a,!1]}function tm(t){var n=_n();return em(n,Ze,t)}function em(t,n,a){if(n=zu(t,n,Jp)[0],t=wl(da)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=ho(n)}catch(v){throw v===ar?vl:v}else r=n;n=_n();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(ge.flags|=2048,cr(9,{destroy:void 0},nx.bind(null,c,a),null)),[r,f,t]}function nx(t,n){t.action=n}function nm(t){var n=_n(),a=Ze;if(a!==null)return em(n,a,t);_n(),n=n.memoizedState,a=_n();var r=a.queue.dispatch;return a.memoizedState=t,[n,r,!1]}function cr(t,n,a,r){return t={tag:t,create:a,deps:r,inst:n,next:null},n=ge.updateQueue,n===null&&(n=Al(),ge.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,n.lastEffect=t),t}function im(){return _n().memoizedState}function Cl(t,n,a,r){var c=Xn();ge.flags|=t,c.memoizedState=cr(1|n,{destroy:void 0},a,r===void 0?null:r)}function Dl(t,n,a,r){var c=_n();r=r===void 0?null:r;var f=c.memoizedState.inst;Ze!==null&&r!==null&&Du(r,Ze.memoizedState.deps)?c.memoizedState=cr(n,f,a,r):(ge.flags|=t,c.memoizedState=cr(1|n,f,a,r))}function am(t,n){Cl(8390656,8,t,n)}function Hu(t,n){Dl(2048,8,t,n)}function ix(t){ge.flags|=4;var n=ge.updateQueue;if(n===null)n=Al(),ge.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function sm(t){var n=_n().memoizedState;return ix({ref:n,nextImpl:t}),function(){if((Xe&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function rm(t,n){return Dl(4,2,t,n)}function om(t,n){return Dl(4,4,t,n)}function lm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function cm(t,n,a){a=a!=null?a.concat([t]):null,Dl(4,4,lm.bind(null,n,t),a)}function Gu(){}function um(t,n){var a=_n();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Du(n,r[1])?r[0]:(a.memoizedState=[t,n],t)}function fm(t,n){var a=_n();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Du(n,r[1]))return r[0];if(r=t(),Cs){Gt(!0);try{t()}finally{Gt(!1)}}return a.memoizedState=[r,n],r}function Vu(t,n,a){return a===void 0||(ha&1073741824)!==0&&(we&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=h0(),ge.lanes|=t,Za|=t,a)}function hm(t,n,a,r){return ai(a,n)?a:rr.current!==null?(t=Vu(t,a,r),ai(t,n)||(Sn=!0),t):(ha&42)===0||(ha&1073741824)!==0&&(we&261930)===0?(Sn=!0,t.memoizedState=a):(t=h0(),ge.lanes|=t,Za|=t,n)}function dm(t,n,a,r,c){var f=H.p;H.p=f!==0&&8>f?f:8;var v=O.T,b={};O.T=b,Wu(t,!1,n,a);try{var B=c(),nt=O.S;if(nt!==null&&nt(b,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var gt=Jv(B,r);po(t,n,gt,ui(t))}else po(t,n,r,ui(t))}catch(yt){po(t,n,{then:function(){},status:"rejected",reason:yt},ui())}finally{H.p=f,v!==null&&b.types!==null&&(v.types=b.types),O.T=v}}function ax(){}function Xu(t,n,a,r){if(t.tag!==5)throw Error(s(476));var c=pm(t).queue;dm(t,c,n,rt,a===null?ax:function(){return mm(t),a(r)})}function pm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:rt,baseState:rt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:rt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function mm(t){var n=pm(t);n.next===null&&(n=t.alternate.memoizedState),po(t,n.next.queue,{},ui())}function ku(){return Ln(Uo)}function gm(){return _n().memoizedState}function _m(){return _n().memoizedState}function sx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ui();t=Va(a);var r=Xa(n,t,a);r!==null&&($n(r,n,a),lo(r,n,a)),n={cache:xu()},t.payload=n;return}n=n.return}}function rx(t,n,a){var r=ui();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ul(t)?xm(n,a):(a=lu(t,n,a,r),a!==null&&($n(a,t,r),Sm(a,n,r)))}function vm(t,n,a){var r=ui();po(t,n,a,r)}function po(t,n,a,r){var c={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ul(t))xm(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,b=f(v,a);if(c.hasEagerState=!0,c.eagerState=b,ai(b,v))return fl(t,n,c,0),$e===null&&ul(),!1}catch{}if(a=lu(t,n,c,r),a!==null)return $n(a,t,r),Sm(a,n,r),!0}return!1}function Wu(t,n,a,r){if(r={lane:2,revertLane:Tf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Ul(t)){if(n)throw Error(s(479))}else n=lu(t,a,r,2),n!==null&&$n(n,t,2)}function Ul(t){var n=t.alternate;return t===ge||n!==null&&n===ge}function xm(t,n){or=Tl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Sm(t,n,a){if((a&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,ms(t,a)}}var mo={readContext:Ln,use:Rl,useCallback:fn,useContext:fn,useEffect:fn,useImperativeHandle:fn,useLayoutEffect:fn,useInsertionEffect:fn,useMemo:fn,useReducer:fn,useRef:fn,useState:fn,useDebugValue:fn,useDeferredValue:fn,useTransition:fn,useSyncExternalStore:fn,useId:fn,useHostTransitionStatus:fn,useFormState:fn,useActionState:fn,useOptimistic:fn,useMemoCache:fn,useCacheRefresh:fn};mo.useEffectEvent=fn;var Mm={readContext:Ln,use:Rl,useCallback:function(t,n){return Xn().memoizedState=[t,n===void 0?null:n],t},useContext:Ln,useEffect:am,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Cl(4194308,4,lm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Cl(4194308,4,t,n)},useInsertionEffect:function(t,n){Cl(4,2,t,n)},useMemo:function(t,n){var a=Xn();n=n===void 0?null:n;var r=t();if(Cs){Gt(!0);try{t()}finally{Gt(!1)}}return a.memoizedState=[r,n],r},useReducer:function(t,n,a){var r=Xn();if(a!==void 0){var c=a(n);if(Cs){Gt(!0);try{a(n)}finally{Gt(!1)}}}else c=n;return r.memoizedState=r.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},r.queue=t,t=t.dispatch=rx.bind(null,ge,t),[r.memoizedState,t]},useRef:function(t){var n=Xn();return t={current:t},n.memoizedState=t},useState:function(t){t=Iu(t);var n=t.queue,a=vm.bind(null,ge,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Gu,useDeferredValue:function(t,n){var a=Xn();return Vu(a,t,n)},useTransition:function(){var t=Iu(!1);return t=dm.bind(null,ge,t.queue,!0,!1),Xn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var r=ge,c=Xn();if(Le){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),$e===null)throw Error(s(349));(we&127)!==0||Vp(r,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,am(kp.bind(null,r,f,t),[t]),r.flags|=2048,cr(9,{destroy:void 0},Xp.bind(null,r,f,a,n),null),a},useId:function(){var t=Xn(),n=$e.identifierPrefix;if(Le){var a=Xi,r=Vi;a=(r&~(1<<32-zt(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=bl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=$v++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:ku,useFormState:$p,useActionState:$p,useOptimistic:function(t){var n=Xn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Wu.bind(null,ge,!0,a),a.dispatch=n,[t,n]},useMemoCache:Pu,useCacheRefresh:function(){return Xn().memoizedState=sx.bind(null,ge)},useEffectEvent:function(t){var n=Xn(),a={impl:t};return n.memoizedState=a,function(){if((Xe&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},qu={readContext:Ln,use:Rl,useCallback:um,useContext:Ln,useEffect:Hu,useImperativeHandle:cm,useInsertionEffect:rm,useLayoutEffect:om,useMemo:fm,useReducer:wl,useRef:im,useState:function(){return wl(da)},useDebugValue:Gu,useDeferredValue:function(t,n){var a=_n();return hm(a,Ze.memoizedState,t,n)},useTransition:function(){var t=wl(da)[0],n=_n().memoizedState;return[typeof t=="boolean"?t:ho(t),n]},useSyncExternalStore:Gp,useId:gm,useHostTransitionStatus:ku,useFormState:tm,useActionState:tm,useOptimistic:function(t,n){var a=_n();return Yp(a,Ze,t,n)},useMemoCache:Pu,useCacheRefresh:_m};qu.useEffectEvent=sm;var ym={readContext:Ln,use:Rl,useCallback:um,useContext:Ln,useEffect:Hu,useImperativeHandle:cm,useInsertionEffect:rm,useLayoutEffect:om,useMemo:fm,useReducer:Fu,useRef:im,useState:function(){return Fu(da)},useDebugValue:Gu,useDeferredValue:function(t,n){var a=_n();return Ze===null?Vu(a,t,n):hm(a,Ze.memoizedState,t,n)},useTransition:function(){var t=Fu(da)[0],n=_n().memoizedState;return[typeof t=="boolean"?t:ho(t),n]},useSyncExternalStore:Gp,useId:gm,useHostTransitionStatus:ku,useFormState:nm,useActionState:nm,useOptimistic:function(t,n){var a=_n();return Ze!==null?Yp(a,Ze,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Pu,useCacheRefresh:_m};ym.useEffectEvent=sm;function Yu(t,n,a,r){n=t.memoizedState,a=a(r,n),a=a==null?n:_({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Zu={enqueueSetState:function(t,n,a){t=t._reactInternals;var r=ui(),c=Va(r);c.payload=n,a!=null&&(c.callback=a),n=Xa(t,c,r),n!==null&&($n(n,t,r),lo(n,t,r))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var r=ui(),c=Va(r);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Xa(t,c,r),n!==null&&($n(n,t,r),lo(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ui(),r=Va(a);r.tag=2,n!=null&&(r.callback=n),n=Xa(t,r,a),n!==null&&($n(n,t,a),lo(n,t,a))}};function Em(t,n,a,r,c,f,v){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,f,v):n.prototype&&n.prototype.isPureReactComponent?!to(a,r)||!to(c,f):!0}function Tm(t,n,a,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==t&&Zu.enqueueReplaceState(n,n.state,null)}function Ds(t,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(t=t.defaultProps){a===n&&(a=_({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function bm(t){cl(t)}function Am(t){console.error(t)}function Rm(t){cl(t)}function Ll(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function wm(t,n,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function ju(t,n,a){return a=Va(a),a.tag=3,a.payload={element:null},a.callback=function(){Ll(t,n)},a}function Cm(t){return t=Va(t),t.tag=3,t}function Dm(t,n,a,r){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=r.value;t.payload=function(){return c(f)},t.callback=function(){wm(n,a,r)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(t.callback=function(){wm(n,a,r),typeof c!="function"&&(ja===null?ja=new Set([this]):ja.add(this));var b=r.stack;this.componentDidCatch(r.value,{componentStack:b!==null?b:""})})}function ox(t,n,a,r,c){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&er(n,a,c,!0),a=ri.current,a!==null){switch(a.tag){case 31:case 13:return yi===null?kl():a.alternate===null&&hn===0&&(hn=3),a.flags&=-257,a.flags|=65536,a.lanes=c,r===xl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Mf(t,r,c)),!1;case 22:return a.flags|=65536,r===xl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Mf(t,r,c)),!1}throw Error(s(435,a.tag))}return Mf(t,r,c),kl(),!1}if(Le)return n=ri.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,r!==pu&&(t=Error(s(422),{cause:r}),io(vi(t,a)))):(r!==pu&&(n=Error(s(423),{cause:r}),io(vi(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,r=vi(r,a),c=ju(t.stateNode,r,c),bu(t,c),hn!==4&&(hn=2)),!1;var f=Error(s(520),{cause:r});if(f=vi(f,a),Eo===null?Eo=[f]:Eo.push(f),hn!==4&&(hn=2),n===null)return!0;r=vi(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=ju(a.stateNode,r,t),bu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ja===null||!ja.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Cm(c),Dm(c,t,a,r),bu(a,c),!1}a=a.return}while(a!==null);return!1}var Ku=Error(s(461)),Sn=!1;function Nn(t,n,a,r){n.child=t===null?Op(n,null,a,r):ws(n,t.child,a,r)}function Um(t,n,a,r,c){a=a.render;var f=n.ref;if("ref"in r){var v={};for(var b in r)b!=="ref"&&(v[b]=r[b])}else v=r;return Ts(n),r=Uu(t,n,a,v,f,c),b=Lu(),t!==null&&!Sn?(Nu(t,n,c),pa(t,n,c)):(Le&&b&&hu(n),n.flags|=1,Nn(t,n,r,c),n.child)}function Lm(t,n,a,r,c){if(t===null){var f=a.type;return typeof f=="function"&&!cu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Nm(t,n,f,r,c)):(t=dl(a.type,null,r,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!sf(t,c)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:to,a(v,r)&&t.ref===n.ref)return pa(t,n,c)}return n.flags|=1,t=la(f,r),t.ref=n.ref,t.return=n,n.child=t}function Nm(t,n,a,r,c){if(t!==null){var f=t.memoizedProps;if(to(f,r)&&t.ref===n.ref)if(Sn=!1,n.pendingProps=r=f,sf(t,c))(t.flags&131072)!==0&&(Sn=!0);else return n.lanes=t.lanes,pa(t,n,c)}return Qu(t,n,a,r,c)}function Om(t,n,a,r){var c=r.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(r=n.child=t.child,c=0;r!==null;)c=c|r.lanes|r.childLanes,r=r.sibling;r=c&~f}else r=0,n.child=null;return Pm(t,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&_l(n,f!==null?f.cachePool:null),f!==null?Fp(n,f):Ru(),Ip(n);else return r=n.lanes=536870912,Pm(t,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(_l(n,f.cachePool),Fp(n,f),Wa(),n.memoizedState=null):(t!==null&&_l(n,null),Ru(),Wa());return Nn(t,n,c,a),n.child}function go(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Pm(t,n,a,r,c){var f=Mu();return f=f===null?null:{parent:vn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&_l(n,null),Ru(),Ip(n),t!==null&&er(t,n,r,!0),n.childLanes=c,null}function Nl(t,n){return n=Pl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function zm(t,n,a){return ws(n,t.child,null,a),t=Nl(n,n.pendingProps),t.flags|=2,oi(n),n.memoizedState=null,t}function lx(t,n,a){var r=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Le){if(r.mode==="hidden")return t=Nl(n,r),n.lanes=536870912,go(null,t);if(Cu(n),(t=nn)?(t=Z0(t,Mi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Fa!==null?{id:Vi,overflow:Xi}:null,retryLane:536870912,hydrationErrors:null},a=xp(t),a.return=n,n.child=a,Un=n,nn=null)):t=null,t===null)throw Ba(n);return n.lanes=536870912,null}return Nl(n,r)}var f=t.memoizedState;if(f!==null){var v=f.dehydrated;if(Cu(n),c)if(n.flags&256)n.flags&=-257,n=zm(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(Sn||er(t,n,a,!1),c=(a&t.childLanes)!==0,Sn||c){if(r=$e,r!==null&&(v=Na(r,a),v!==0&&v!==f.retryLane))throw f.retryLane=v,Ss(t,v),$n(r,t,v),Ku;kl(),n=zm(t,n,a)}else t=f.treeContext,nn=Ei(v.nextSibling),Un=n,Le=!0,Ia=null,Mi=!1,t!==null&&yp(n,t),n=Nl(n,r),n.flags|=4096;return n}return t=la(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Ol(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Qu(t,n,a,r,c){return Ts(n),a=Uu(t,n,a,r,void 0,c),r=Lu(),t!==null&&!Sn?(Nu(t,n,c),pa(t,n,c)):(Le&&r&&hu(n),n.flags|=1,Nn(t,n,a,c),n.child)}function Fm(t,n,a,r,c,f){return Ts(n),n.updateQueue=null,a=Hp(n,r,a,c),Bp(t),r=Lu(),t!==null&&!Sn?(Nu(t,n,f),pa(t,n,f)):(Le&&r&&hu(n),n.flags|=1,Nn(t,n,a,f),n.child)}function Im(t,n,a,r,c){if(Ts(n),n.stateNode===null){var f=Qs,v=a.contextType;typeof v=="object"&&v!==null&&(f=Ln(v)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Zu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},Eu(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?Ln(v):Qs,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(Yu(n,a,v,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&Zu.enqueueReplaceState(f,f.state,null),uo(n,r,f,c),co(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){f=n.stateNode;var b=n.memoizedProps,B=Ds(a,b);f.props=B;var nt=f.context,gt=a.contextType;v=Qs,typeof gt=="object"&&gt!==null&&(v=Ln(gt));var yt=a.getDerivedStateFromProps;gt=typeof yt=="function"||typeof f.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,gt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b||nt!==v)&&Tm(n,f,r,v),Ga=!1;var ot=n.memoizedState;f.state=ot,uo(n,r,f,c),co(),nt=n.memoizedState,b||ot!==nt||Ga?(typeof yt=="function"&&(Yu(n,a,yt,r),nt=n.memoizedState),(B=Ga||Em(n,a,B,r,ot,nt,v))?(gt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=nt),f.props=r,f.state=nt,f.context=v,r=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Tu(t,n),v=n.memoizedProps,gt=Ds(a,v),f.props=gt,yt=n.pendingProps,ot=f.context,nt=a.contextType,B=Qs,typeof nt=="object"&&nt!==null&&(B=Ln(nt)),b=a.getDerivedStateFromProps,(nt=typeof b=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==yt||ot!==B)&&Tm(n,f,r,B),Ga=!1,ot=n.memoizedState,f.state=ot,uo(n,r,f,c),co();var ut=n.memoizedState;v!==yt||ot!==ut||Ga||t!==null&&t.dependencies!==null&&ml(t.dependencies)?(typeof b=="function"&&(Yu(n,a,b,r),ut=n.memoizedState),(gt=Ga||Em(n,a,gt,r,ot,ut,B)||t!==null&&t.dependencies!==null&&ml(t.dependencies))?(nt||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,ut,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,ut,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===t.memoizedProps&&ot===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&ot===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=ut),f.props=r,f.state=ut,f.context=B,r=gt):(typeof f.componentDidUpdate!="function"||v===t.memoizedProps&&ot===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&ot===t.memoizedState||(n.flags|=1024),r=!1)}return f=r,Ol(t,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&r?(n.child=ws(n,t.child,null,c),n.child=ws(n,null,a,c)):Nn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=pa(t,n,c),t}function Bm(t,n,a,r){return ys(),n.flags|=256,Nn(t,n,a,r),n.child}var Ju={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function $u(t){return{baseLanes:t,cachePool:wp()}}function tf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ci),t}function Hm(t,n,a){var r=n.pendingProps,c=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=t!==null&&t.memoizedState===null?!1:(gn.current&2)!==0),v&&(c=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,t===null){if(Le){if(c?ka(n):Wa(),(t=nn)?(t=Z0(t,Mi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Fa!==null?{id:Vi,overflow:Xi}:null,retryLane:536870912,hydrationErrors:null},a=xp(t),a.return=n,n.child=a,Un=n,nn=null)):t=null,t===null)throw Ba(n);return Ff(t)?n.lanes=32:n.lanes=536870912,null}var b=r.children;return r=r.fallback,c?(Wa(),c=n.mode,b=Pl({mode:"hidden",children:b},c),r=Ms(r,c,a,null),b.return=n,r.return=n,b.sibling=r,n.child=b,r=n.child,r.memoizedState=$u(a),r.childLanes=tf(t,v,a),n.memoizedState=Ju,go(null,r)):(ka(n),ef(n,b))}var B=t.memoizedState;if(B!==null&&(b=B.dehydrated,b!==null)){if(f)n.flags&256?(ka(n),n.flags&=-257,n=nf(t,n,a)):n.memoizedState!==null?(Wa(),n.child=t.child,n.flags|=128,n=null):(Wa(),b=r.fallback,c=n.mode,r=Pl({mode:"visible",children:r.children},c),b=Ms(b,c,a,null),b.flags|=2,r.return=n,b.return=n,r.sibling=b,n.child=r,ws(n,t.child,null,a),r=n.child,r.memoizedState=$u(a),r.childLanes=tf(t,v,a),n.memoizedState=Ju,n=go(null,r));else if(ka(n),Ff(b)){if(v=b.nextSibling&&b.nextSibling.dataset,v)var nt=v.dgst;v=nt,r=Error(s(419)),r.stack="",r.digest=v,io({value:r,source:null,stack:null}),n=nf(t,n,a)}else if(Sn||er(t,n,a,!1),v=(a&t.childLanes)!==0,Sn||v){if(v=$e,v!==null&&(r=Na(v,a),r!==0&&r!==B.retryLane))throw B.retryLane=r,Ss(t,r),$n(v,t,r),Ku;zf(b)||kl(),n=nf(t,n,a)}else zf(b)?(n.flags|=192,n.child=t.child,n=null):(t=B.treeContext,nn=Ei(b.nextSibling),Un=n,Le=!0,Ia=null,Mi=!1,t!==null&&yp(n,t),n=ef(n,r.children),n.flags|=4096);return n}return c?(Wa(),b=r.fallback,c=n.mode,B=t.child,nt=B.sibling,r=la(B,{mode:"hidden",children:r.children}),r.subtreeFlags=B.subtreeFlags&65011712,nt!==null?b=la(nt,b):(b=Ms(b,c,a,null),b.flags|=2),b.return=n,r.return=n,r.sibling=b,n.child=r,go(null,r),r=n.child,b=t.child.memoizedState,b===null?b=$u(a):(c=b.cachePool,c!==null?(B=vn._currentValue,c=c.parent!==B?{parent:B,pool:B}:c):c=wp(),b={baseLanes:b.baseLanes|a,cachePool:c}),r.memoizedState=b,r.childLanes=tf(t,v,a),n.memoizedState=Ju,go(t.child,r)):(ka(n),a=t.child,t=a.sibling,a=la(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,t!==null&&(v=n.deletions,v===null?(n.deletions=[t],n.flags|=16):v.push(t)),n.child=a,n.memoizedState=null,a)}function ef(t,n){return n=Pl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Pl(t,n){return t=si(22,t,null,n),t.lanes=0,t}function nf(t,n,a){return ws(n,t.child,null,a),t=ef(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Gm(t,n,a){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),_u(t.return,n,a)}function af(t,n,a,r,c,f){var v=t.memoizedState;v===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:c,treeForkCount:f}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=r,v.tail=a,v.tailMode=c,v.treeForkCount=f)}function Vm(t,n,a){var r=n.pendingProps,c=r.revealOrder,f=r.tail;r=r.children;var v=gn.current,b=(v&2)!==0;if(b?(v=v&1|2,n.flags|=128):v&=1,St(gn,v),Nn(t,n,r,a),r=Le?no:0,!b&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Gm(t,a,n);else if(t.tag===19)Gm(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&El(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),af(n,!1,c,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&El(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}af(n,!0,a,null,f,r);break;case"together":af(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function pa(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Za|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(er(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=la(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=la(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function sf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&ml(t)))}function cx(t,n,a){switch(n.tag){case 3:Pt(n,n.stateNode.containerInfo),Ha(n,vn,t.memoizedState.cache),ys();break;case 27:case 5:qt(n);break;case 4:Pt(n,n.stateNode.containerInfo);break;case 10:Ha(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Cu(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(ka(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Hm(t,n,a):(ka(n),t=pa(t,n,a),t!==null?t.sibling:null);ka(n);break;case 19:var c=(t.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(er(t,n,a,!1),r=(a&n.childLanes)!==0),c){if(r)return Vm(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),St(gn,gn.current),r)break;return null;case 22:return n.lanes=0,Om(t,n,a,n.pendingProps);case 24:Ha(n,vn,t.memoizedState.cache)}return pa(t,n,a)}function Xm(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)Sn=!0;else{if(!sf(t,a)&&(n.flags&128)===0)return Sn=!1,cx(t,n,a);Sn=(t.flags&131072)!==0}else Sn=!1,Le&&(n.flags&1048576)!==0&&Mp(n,no,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(t=As(n.elementType),n.type=t,typeof t=="function")cu(t)?(r=Ds(t,r),n.tag=1,n=Im(null,n,t,r,a)):(n.tag=0,n=Qu(null,n,t,r,a));else{if(t!=null){var c=t.$$typeof;if(c===L){n.tag=11,n=Um(null,n,t,r,a);break t}else if(c===N){n.tag=14,n=Lm(null,n,t,r,a);break t}}throw n=pt(t)||t,Error(s(306,n,""))}}return n;case 0:return Qu(t,n,n.type,n.pendingProps,a);case 1:return r=n.type,c=Ds(r,n.pendingProps),Im(t,n,r,c,a);case 3:t:{if(Pt(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;c=f.element,Tu(t,n),uo(n,r,null,a);var v=n.memoizedState;if(r=v.cache,Ha(n,vn,r),r!==f.cache&&vu(n,[vn],a,!0),co(),r=v.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Bm(t,n,r,a);break t}else if(r!==c){c=vi(Error(s(424)),n),io(c),n=Bm(t,n,r,a);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,nn=Ei(t.firstChild),Un=n,Le=!0,Ia=null,Mi=!0,a=Op(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ys(),r===c){n=pa(t,n,a);break t}Nn(t,n,r,a)}n=n.child}return n;case 26:return Ol(t,n),t===null?(a=tg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Le||(a=n.type,t=n.pendingProps,r=Ql(J.current).createElement(a),r[se]=n,r[mn]=t,On(r,a,t),T(r),n.stateNode=r):n.memoizedState=tg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return qt(n),t===null&&Le&&(r=n.stateNode=Q0(n.type,n.pendingProps,J.current),Un=n,Mi=!0,c=nn,$a(n.type)?(If=c,nn=Ei(r.firstChild)):nn=c),Nn(t,n,n.pendingProps.children,a),Ol(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Le&&((c=r=nn)&&(r=Bx(r,n.type,n.pendingProps,Mi),r!==null?(n.stateNode=r,Un=n,nn=Ei(r.firstChild),Mi=!1,c=!0):c=!1),c||Ba(n)),qt(n),c=n.type,f=n.pendingProps,v=t!==null?t.memoizedProps:null,r=f.children,Nf(c,f)?r=null:v!==null&&Nf(c,v)&&(n.flags|=32),n.memoizedState!==null&&(c=Uu(t,n,tx,null,null,a),Uo._currentValue=c),Ol(t,n),Nn(t,n,r,a),n.child;case 6:return t===null&&Le&&((t=a=nn)&&(a=Hx(a,n.pendingProps,Mi),a!==null?(n.stateNode=a,Un=n,nn=null,t=!0):t=!1),t||Ba(n)),null;case 13:return Hm(t,n,a);case 4:return Pt(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=ws(n,null,r,a):Nn(t,n,r,a),n.child;case 11:return Um(t,n,n.type,n.pendingProps,a);case 7:return Nn(t,n,n.pendingProps,a),n.child;case 8:return Nn(t,n,n.pendingProps.children,a),n.child;case 12:return Nn(t,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,Ha(n,n.type,r.value),Nn(t,n,r.children,a),n.child;case 9:return c=n.type._context,r=n.pendingProps.children,Ts(n),c=Ln(c),r=r(c),n.flags|=1,Nn(t,n,r,a),n.child;case 14:return Lm(t,n,n.type,n.pendingProps,a);case 15:return Nm(t,n,n.type,n.pendingProps,a);case 19:return Vm(t,n,a);case 31:return lx(t,n,a);case 22:return Om(t,n,a,n.pendingProps);case 24:return Ts(n),r=Ln(vn),t===null?(c=Mu(),c===null&&(c=$e,f=xu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:r,cache:c},Eu(n),Ha(n,vn,c)):((t.lanes&a)!==0&&(Tu(t,n),uo(n,null,null,a),co()),c=t.memoizedState,f=n.memoizedState,c.parent!==r?(c={parent:r,cache:r},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Ha(n,vn,r)):(r=f.cache,Ha(n,vn,r),r!==c.cache&&vu(n,[vn],a,!0))),Nn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ma(t){t.flags|=4}function rf(t,n,a,r,c){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(g0())t.flags|=8192;else throw Rs=xl,yu}else t.flags&=-16777217}function km(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!sg(n))if(g0())t.flags|=8192;else throw Rs=xl,yu}function zl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ie():536870912,t.lanes|=n,dr|=n)}function _o(t,n){if(!Le)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function an(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags&65011712,r|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=r,t.childLanes=a,n}function ux(t,n,a){var r=n.pendingProps;switch(du(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return an(n),null;case 1:return an(n),null;case 3:return a=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),fa(vn),te(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(tr(n)?ma(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,mu())),an(n),null;case 26:var c=n.type,f=n.memoizedState;return t===null?(ma(n),f!==null?(an(n),km(n,f)):(an(n),rf(n,c,null,r,a))):f?f!==t.memoizedState?(ma(n),an(n),km(n,f)):(an(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&ma(n),an(n),rf(n,c,t,r,a)),null;case 27:if(Se(n),a=J.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&ma(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return an(n),null}t=Ut.current,tr(n)?Ep(n):(t=Q0(c,r,a),n.stateNode=t,ma(n))}return an(n),null;case 5:if(Se(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&ma(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return an(n),null}if(f=Ut.current,tr(n))Ep(n);else{var v=Ql(J.current);switch(f){case 1:f=v.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=v.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=v.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=v.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=v.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?v.createElement("select",{is:r.is}):v.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?v.createElement(c,{is:r.is}):v.createElement(c)}}f[se]=n,f[mn]=r;t:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)f.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break t;for(;v.sibling===null;){if(v.return===null||v.return===n)break t;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=f;t:switch(On(f,c,r),c){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&ma(n)}}return an(n),rf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&ma(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=J.current,tr(n)){if(t=n.stateNode,a=n.memoizedProps,r=null,c=Un,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}t[se]=n,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||H0(t.nodeValue,a)),t||Ba(n,!0)}else t=Ql(t).createTextNode(r),t[se]=n,n.stateNode=t}return an(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(r=tr(n),a!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[se]=n}else ys(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;an(n),t=!1}else a=mu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(oi(n),n):(oi(n),null);if((n.flags&128)!==0)throw Error(s(558))}return an(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=tr(n),r!==null&&r.dehydrated!==null){if(t===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[se]=n}else ys(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;an(n),c=!1}else c=mu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(oi(n),n):(oi(n),null)}return oi(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,t=t!==null&&t.memoizedState!==null,a&&(r=n.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==c&&(r.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),zl(n,n.updateQueue),an(n),null);case 4:return te(),t===null&&wf(n.stateNode.containerInfo),an(n),null;case 10:return fa(n.type),an(n),null;case 19:if(st(gn),r=n.memoizedState,r===null)return an(n),null;if(c=(n.flags&128)!==0,f=r.rendering,f===null)if(c)_o(r,!1);else{if(hn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=El(t),f!==null){for(n.flags|=128,_o(r,!1),t=f.updateQueue,n.updateQueue=t,zl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)vp(a,t),a=a.sibling;return St(gn,gn.current&1|2),Le&&ca(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&y()>Gl&&(n.flags|=128,c=!0,_o(r,!1),n.lanes=4194304)}else{if(!c)if(t=El(f),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,zl(n,t),_o(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!Le)return an(n),null}else 2*y()-r.renderingStartTime>Gl&&a!==536870912&&(n.flags|=128,c=!0,_o(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(t=r.last,t!==null?t.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=y(),t.sibling=null,a=gn.current,St(gn,c?a&1|2:a&1),Le&&ca(n,r.treeForkCount),t):(an(n),null);case 22:case 23:return oi(n),wu(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(an(n),n.subtreeFlags&6&&(n.flags|=8192)):an(n),a=n.updateQueue,a!==null&&zl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),t!==null&&st(bs),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),fa(vn),an(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function fx(t,n){switch(du(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return fa(vn),te(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Se(n),null;case 31:if(n.memoizedState!==null){if(oi(n),n.alternate===null)throw Error(s(340));ys()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(oi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));ys()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return st(gn),null;case 4:return te(),null;case 10:return fa(n.type),null;case 22:case 23:return oi(n),wu(),t!==null&&st(bs),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return fa(vn),null;case 25:return null;default:return null}}function Wm(t,n){switch(du(n),n.tag){case 3:fa(vn),te();break;case 26:case 27:case 5:Se(n);break;case 4:te();break;case 31:n.memoizedState!==null&&oi(n);break;case 13:oi(n);break;case 19:st(gn);break;case 10:fa(n.type);break;case 22:case 23:oi(n),wu(),t!==null&&st(bs);break;case 24:fa(vn)}}function vo(t,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var c=r.next;a=c;do{if((a.tag&t)===t){r=void 0;var f=a.create,v=a.inst;r=f(),v.destroy=r}a=a.next}while(a!==c)}}catch(b){We(n,n.return,b)}}function qa(t,n,a){try{var r=n.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var f=c.next;r=f;do{if((r.tag&t)===t){var v=r.inst,b=v.destroy;if(b!==void 0){v.destroy=void 0,c=n;var B=a,nt=b;try{nt()}catch(gt){We(c,B,gt)}}}r=r.next}while(r!==f)}}catch(gt){We(n,n.return,gt)}}function qm(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{zp(n,a)}catch(r){We(t,t.return,r)}}}function Ym(t,n,a){a.props=Ds(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){We(t,n,r)}}function xo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(c){We(t,n,c)}}function ki(t,n){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(c){We(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){We(t,n,c)}else a.current=null}function Zm(t){var n=t.type,a=t.memoizedProps,r=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(c){We(t,t.return,c)}}function of(t,n,a){try{var r=t.stateNode;Nx(r,t.type,a,n),r[mn]=n}catch(c){We(t,t.return,c)}}function jm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&$a(t.type)||t.tag===4}function lf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||jm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&$a(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function cf(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ra));else if(r!==4&&(r===27&&$a(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(cf(t,n,a),t=t.sibling;t!==null;)cf(t,n,a),t=t.sibling}function Fl(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(r!==4&&(r===27&&$a(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Fl(t,n,a),t=t.sibling;t!==null;)Fl(t,n,a),t=t.sibling}function Km(t){var n=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);On(n,r,a),n[se]=t,n[mn]=a}catch(f){We(t,t.return,f)}}var ga=!1,Mn=!1,uf=!1,Qm=typeof WeakSet=="function"?WeakSet:Set,Cn=null;function hx(t,n){if(t=t.containerInfo,Uf=ac,t=cp(t),nu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var c=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var v=0,b=-1,B=-1,nt=0,gt=0,yt=t,ot=null;e:for(;;){for(var ut;yt!==a||c!==0&&yt.nodeType!==3||(b=v+c),yt!==f||r!==0&&yt.nodeType!==3||(B=v+r),yt.nodeType===3&&(v+=yt.nodeValue.length),(ut=yt.firstChild)!==null;)ot=yt,yt=ut;for(;;){if(yt===t)break e;if(ot===a&&++nt===c&&(b=v),ot===f&&++gt===r&&(B=v),(ut=yt.nextSibling)!==null)break;yt=ot,ot=yt.parentNode}yt=ut}a=b===-1||B===-1?null:{start:b,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(Lf={focusedElem:t,selectionRange:a},ac=!1,Cn=n;Cn!==null;)if(n=Cn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Cn=t;else for(;Cn!==null;){switch(n=Cn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)c=t[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var ee=Ds(a.type,c);t=r.getSnapshotBeforeUpdate(ee,f),r.__reactInternalSnapshotBeforeUpdate=t}catch(ce){We(a,a.return,ce)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Pf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Pf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,Cn=t;break}Cn=n.return}}function Jm(t,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:va(t,a),r&4&&vo(5,a);break;case 1:if(va(t,a),r&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(v){We(a,a.return,v)}else{var c=Ds(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(v){We(a,a.return,v)}}r&64&&qm(a),r&512&&xo(a,a.return);break;case 3:if(va(t,a),r&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{zp(t,n)}catch(v){We(a,a.return,v)}}break;case 27:n===null&&r&4&&Km(a);case 26:case 5:va(t,a),n===null&&r&4&&Zm(a),r&512&&xo(a,a.return);break;case 12:va(t,a);break;case 31:va(t,a),r&4&&e0(t,a);break;case 13:va(t,a),r&4&&n0(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Mx.bind(null,a),Gx(t,a))));break;case 22:if(r=a.memoizedState!==null||ga,!r){n=n!==null&&n.memoizedState!==null||Mn,c=ga;var f=Mn;ga=r,(Mn=n)&&!f?xa(t,a,(a.subtreeFlags&8772)!==0):va(t,a),ga=c,Mn=f}break;case 30:break;default:va(t,a)}}function $m(t){var n=t.alternate;n!==null&&(t.alternate=null,$m(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&aa(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var on=null,jn=!1;function _a(t,n,a){for(a=a.child;a!==null;)t0(t,n,a),a=a.sibling}function t0(t,n,a){if(Ct&&typeof Ct.onCommitFiberUnmount=="function")try{Ct.onCommitFiberUnmount(At,a)}catch{}switch(a.tag){case 26:Mn||ki(a,n),_a(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Mn||ki(a,n);var r=on,c=jn;$a(a.type)&&(on=a.stateNode,jn=!1),_a(t,n,a),wo(a.stateNode),on=r,jn=c;break;case 5:Mn||ki(a,n);case 6:if(r=on,c=jn,on=null,_a(t,n,a),on=r,jn=c,on!==null)if(jn)try{(on.nodeType===9?on.body:on.nodeName==="HTML"?on.ownerDocument.body:on).removeChild(a.stateNode)}catch(f){We(a,n,f)}else try{on.removeChild(a.stateNode)}catch(f){We(a,n,f)}break;case 18:on!==null&&(jn?(t=on,q0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Mr(t)):q0(on,a.stateNode));break;case 4:r=on,c=jn,on=a.stateNode.containerInfo,jn=!0,_a(t,n,a),on=r,jn=c;break;case 0:case 11:case 14:case 15:qa(2,a,n),Mn||qa(4,a,n),_a(t,n,a);break;case 1:Mn||(ki(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&Ym(a,n,r)),_a(t,n,a);break;case 21:_a(t,n,a);break;case 22:Mn=(r=Mn)||a.memoizedState!==null,_a(t,n,a),Mn=r;break;default:_a(t,n,a)}}function e0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Mr(t)}catch(a){We(n,n.return,a)}}}function n0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Mr(t)}catch(a){We(n,n.return,a)}}function dx(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Qm),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Qm),n;default:throw Error(s(435,t.tag))}}function Il(t,n){var a=dx(t);n.forEach(function(r){if(!a.has(r)){a.add(r);var c=yx.bind(null,t,r);r.then(c,c)}})}function Kn(t,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r],f=t,v=n,b=v;t:for(;b!==null;){switch(b.tag){case 27:if($a(b.type)){on=b.stateNode,jn=!1;break t}break;case 5:on=b.stateNode,jn=!1;break t;case 3:case 4:on=b.stateNode.containerInfo,jn=!0;break t}b=b.return}if(on===null)throw Error(s(160));t0(f,v,c),on=null,jn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)i0(n,t),n=n.sibling}var Li=null;function i0(t,n){var a=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Kn(n,t),Qn(t),r&4&&(qa(3,t,t.return),vo(3,t),qa(5,t,t.return));break;case 1:Kn(n,t),Qn(t),r&512&&(Mn||a===null||ki(a,a.return)),r&64&&ga&&(t=t.updateQueue,t!==null&&(r=t.callbacks,r!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var c=Li;if(Kn(n,t),Qn(t),r&512&&(Mn||a===null||ki(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=t.memoizedState,a===null)if(r===null)if(t.stateNode===null){t:{r=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(r){case"title":f=c.getElementsByTagName("title")[0],(!f||f[Ci]||f[se]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(r),c.head.insertBefore(f,c.querySelector("head > title"))),On(f,r,a),f[se]=t,T(f),r=f;break t;case"link":var v=ig("link","href",c).get(r+(a.href||""));if(v){for(var b=0;b<v.length;b++)if(f=v[b],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(b,1);break e}}f=c.createElement(r),On(f,r,a),c.head.appendChild(f);break;case"meta":if(v=ig("meta","content",c).get(r+(a.content||""))){for(b=0;b<v.length;b++)if(f=v[b],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(b,1);break e}}f=c.createElement(r),On(f,r,a),c.head.appendChild(f);break;default:throw Error(s(468,r))}f[se]=t,T(f),r=f}t.stateNode=r}else ag(c,t.type,t.stateNode);else t.stateNode=ng(c,r,t.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?ag(c,t.type,t.stateNode):ng(c,r,t.memoizedProps)):r===null&&t.stateNode!==null&&of(t,t.memoizedProps,a.memoizedProps)}break;case 27:Kn(n,t),Qn(t),r&512&&(Mn||a===null||ki(a,a.return)),a!==null&&r&4&&of(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Kn(n,t),Qn(t),r&512&&(Mn||a===null||ki(a,a.return)),t.flags&32){c=t.stateNode;try{tn(c,"")}catch(ee){We(t,t.return,ee)}}r&4&&t.stateNode!=null&&(c=t.memoizedProps,of(t,c,a!==null?a.memoizedProps:c)),r&1024&&(uf=!0);break;case 6:if(Kn(n,t),Qn(t),r&4){if(t.stateNode===null)throw Error(s(162));r=t.memoizedProps,a=t.stateNode;try{a.nodeValue=r}catch(ee){We(t,t.return,ee)}}break;case 3:if(tc=null,c=Li,Li=Jl(n.containerInfo),Kn(n,t),Li=c,Qn(t),r&4&&a!==null&&a.memoizedState.isDehydrated)try{Mr(n.containerInfo)}catch(ee){We(t,t.return,ee)}uf&&(uf=!1,a0(t));break;case 4:r=Li,Li=Jl(t.stateNode.containerInfo),Kn(n,t),Qn(t),Li=r;break;case 12:Kn(n,t),Qn(t);break;case 31:Kn(n,t),Qn(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Il(t,r)));break;case 13:Kn(n,t),Qn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Hl=y()),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Il(t,r)));break;case 22:c=t.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,nt=ga,gt=Mn;if(ga=nt||c,Mn=gt||B,Kn(n,t),Mn=gt,ga=nt,Qn(t),r&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||B||ga||Mn||Us(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(f=B.stateNode,c)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{b=B.stateNode;var yt=B.memoizedProps.style,ot=yt!=null&&yt.hasOwnProperty("display")?yt.display:null;b.style.display=ot==null||typeof ot=="boolean"?"":(""+ot).trim()}}catch(ee){We(B,B.return,ee)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=c?"":B.memoizedProps}catch(ee){We(B,B.return,ee)}}}else if(n.tag===18){if(a===null){B=n;try{var ut=B.stateNode;c?Y0(ut,!0):Y0(B.stateNode,!1)}catch(ee){We(B,B.return,ee)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=t.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Il(t,a))));break;case 19:Kn(n,t),Qn(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Il(t,r)));break;case 30:break;case 21:break;default:Kn(n,t),Qn(t)}}function Qn(t){var n=t.flags;if(n&2){try{for(var a,r=t.return;r!==null;){if(jm(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var c=a.stateNode,f=lf(t);Fl(t,f,c);break;case 5:var v=a.stateNode;a.flags&32&&(tn(v,""),a.flags&=-33);var b=lf(t);Fl(t,b,v);break;case 3:case 4:var B=a.stateNode.containerInfo,nt=lf(t);cf(t,nt,B);break;default:throw Error(s(161))}}catch(gt){We(t,t.return,gt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function a0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;a0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function va(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Jm(t,n.alternate,n),n=n.sibling}function Us(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:qa(4,n,n.return),Us(n);break;case 1:ki(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Ym(n,n.return,a),Us(n);break;case 27:wo(n.stateNode);case 26:case 5:ki(n,n.return),Us(n);break;case 22:n.memoizedState===null&&Us(n);break;case 30:Us(n);break;default:Us(n)}t=t.sibling}}function xa(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,c=t,f=n,v=f.flags;switch(f.tag){case 0:case 11:case 15:xa(c,f,a),vo(4,f);break;case 1:if(xa(c,f,a),r=f,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(nt){We(r,r.return,nt)}if(r=f,c=r.updateQueue,c!==null){var b=r.stateNode;try{var B=c.shared.hiddenCallbacks;if(B!==null)for(c.shared.hiddenCallbacks=null,c=0;c<B.length;c++)Pp(B[c],b)}catch(nt){We(r,r.return,nt)}}a&&v&64&&qm(f),xo(f,f.return);break;case 27:Km(f);case 26:case 5:xa(c,f,a),a&&r===null&&v&4&&Zm(f),xo(f,f.return);break;case 12:xa(c,f,a);break;case 31:xa(c,f,a),a&&v&4&&e0(c,f);break;case 13:xa(c,f,a),a&&v&4&&n0(c,f);break;case 22:f.memoizedState===null&&xa(c,f,a),xo(f,f.return);break;case 30:break;default:xa(c,f,a)}n=n.sibling}}function ff(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&ao(a))}function hf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&ao(t))}function Ni(t,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)s0(t,n,a,r),n=n.sibling}function s0(t,n,a,r){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Ni(t,n,a,r),c&2048&&vo(9,n);break;case 1:Ni(t,n,a,r);break;case 3:Ni(t,n,a,r),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&ao(t)));break;case 12:if(c&2048){Ni(t,n,a,r),t=n.stateNode;try{var f=n.memoizedProps,v=f.id,b=f.onPostCommit;typeof b=="function"&&b(v,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(B){We(n,n.return,B)}}else Ni(t,n,a,r);break;case 31:Ni(t,n,a,r);break;case 13:Ni(t,n,a,r);break;case 23:break;case 22:f=n.stateNode,v=n.alternate,n.memoizedState!==null?f._visibility&2?Ni(t,n,a,r):So(t,n):f._visibility&2?Ni(t,n,a,r):(f._visibility|=2,ur(t,n,a,r,(n.subtreeFlags&10256)!==0||!1)),c&2048&&ff(v,n);break;case 24:Ni(t,n,a,r),c&2048&&hf(n.alternate,n);break;default:Ni(t,n,a,r)}}function ur(t,n,a,r,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,v=n,b=a,B=r,nt=v.flags;switch(v.tag){case 0:case 11:case 15:ur(f,v,b,B,c),vo(8,v);break;case 23:break;case 22:var gt=v.stateNode;v.memoizedState!==null?gt._visibility&2?ur(f,v,b,B,c):So(f,v):(gt._visibility|=2,ur(f,v,b,B,c)),c&&nt&2048&&ff(v.alternate,v);break;case 24:ur(f,v,b,B,c),c&&nt&2048&&hf(v.alternate,v);break;default:ur(f,v,b,B,c)}n=n.sibling}}function So(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,r=n,c=r.flags;switch(r.tag){case 22:So(a,r),c&2048&&ff(r.alternate,r);break;case 24:So(a,r),c&2048&&hf(r.alternate,r);break;default:So(a,r)}n=n.sibling}}var Mo=8192;function fr(t,n,a){if(t.subtreeFlags&Mo)for(t=t.child;t!==null;)r0(t,n,a),t=t.sibling}function r0(t,n,a){switch(t.tag){case 26:fr(t,n,a),t.flags&Mo&&t.memoizedState!==null&&$x(a,Li,t.memoizedState,t.memoizedProps);break;case 5:fr(t,n,a);break;case 3:case 4:var r=Li;Li=Jl(t.stateNode.containerInfo),fr(t,n,a),Li=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=Mo,Mo=16777216,fr(t,n,a),Mo=r):fr(t,n,a));break;default:fr(t,n,a)}}function o0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function yo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Cn=r,c0(r,t)}o0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)l0(t),t=t.sibling}function l0(t){switch(t.tag){case 0:case 11:case 15:yo(t),t.flags&2048&&qa(9,t,t.return);break;case 3:yo(t);break;case 12:yo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Bl(t)):yo(t);break;default:yo(t)}}function Bl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Cn=r,c0(r,t)}o0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:qa(8,n,n.return),Bl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Bl(n));break;default:Bl(n)}t=t.sibling}}function c0(t,n){for(;Cn!==null;){var a=Cn;switch(a.tag){case 0:case 11:case 15:qa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ao(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,Cn=r;else t:for(a=t;Cn!==null;){r=Cn;var c=r.sibling,f=r.return;if($m(r),r===a){Cn=null;break t}if(c!==null){c.return=f,Cn=c;break t}Cn=f}}}var px={getCacheForType:function(t){var n=Ln(vn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Ln(vn).controller.signal}},mx=typeof WeakMap=="function"?WeakMap:Map,Xe=0,$e=null,be=null,we=0,ke=0,li=null,Ya=!1,hr=!1,df=!1,Sa=0,hn=0,Za=0,Ls=0,pf=0,ci=0,dr=0,Eo=null,Jn=null,mf=!1,Hl=0,u0=0,Gl=1/0,Vl=null,ja=null,bn=0,Ka=null,pr=null,Ma=0,gf=0,_f=null,f0=null,To=0,vf=null;function ui(){return(Xe&2)!==0&&we!==0?we&-we:O.T!==null?Tf():ei()}function h0(){if(ci===0)if((we&536870912)===0||Le){var t=Dt;Dt<<=1,(Dt&3932160)===0&&(Dt=262144),ci=t}else ci=536870912;return t=ri.current,t!==null&&(t.flags|=32),ci}function $n(t,n,a){(t===$e&&(ke===2||ke===9)||t.cancelPendingCommit!==null)&&(mr(t,0),Qa(t,we,ci,!1)),Ue(t,a),((Xe&2)===0||t!==$e)&&(t===$e&&((Xe&2)===0&&(Ls|=a),hn===4&&Qa(t,we,ci,!1)),Wi(t))}function d0(t,n,a){if((Xe&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Lt(t,n),c=r?vx(t,n):Sf(t,n,!0),f=r;do{if(c===0){hr&&!r&&Qa(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!gx(a)){c=Sf(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var v=0;else v=t.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;t:{var b=t;c=Eo;var B=b.current.memoizedState.isDehydrated;if(B&&(mr(b,v).flags|=256),v=Sf(b,v,!1),v!==2){if(df&&!B){b.errorRecoveryDisabledLanes|=f,Ls|=f,c=4;break t}f=Jn,Jn=c,f!==null&&(Jn===null?Jn=f:Jn.push.apply(Jn,f))}c=v}if(f=!1,c!==2)continue}}if(c===1){mr(t,0),Qa(t,n,0,!0);break}t:{switch(r=t,f=c,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Qa(r,n,ci,!Ya);break t;case 2:Jn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=Hl+300-y(),10<c)){if(Qa(r,n,ci,!Ya),xt(r,0,!0)!==0)break t;Ma=n,r.timeoutHandle=k0(p0.bind(null,r,a,Jn,Vl,mf,n,ci,Ls,dr,Ya,f,"Throttled",-0,0),c);break t}p0(r,a,Jn,Vl,mf,n,ci,Ls,dr,Ya,f,null,-0,0)}}break}while(!0);Wi(t)}function p0(t,n,a,r,c,f,v,b,B,nt,gt,yt,ot,ut){if(t.timeoutHandle=-1,yt=n.subtreeFlags,yt&8192||(yt&16785408)===16785408){yt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ra},r0(n,f,yt);var ee=(f&62914560)===f?Hl-y():(f&4194048)===f?u0-y():0;if(ee=tS(yt,ee),ee!==null){Ma=f,t.cancelPendingCommit=ee(y0.bind(null,t,n,f,a,r,c,v,b,B,gt,yt,null,ot,ut)),Qa(t,f,v,!nt);return}}y0(t,n,f,a,r,c,v,b,B)}function gx(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var c=a[r],f=c.getSnapshot;c=c.value;try{if(!ai(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Qa(t,n,a,r){n&=~pf,n&=~Ls,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var c=n;0<c;){var f=31-zt(c),v=1<<f;r[f]=-1,c&=~v}a!==0&&na(t,a,n)}function Xl(){return(Xe&6)===0?(bo(0),!1):!0}function xf(){if(be!==null){if(ke===0)var t=be.return;else t=be,ua=Es=null,Ou(t),sr=null,ro=0,t=be;for(;t!==null;)Wm(t.alternate,t),t=t.return;be=null}}function mr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,zx(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Ma=0,xf(),$e=t,be=a=la(t.current,null),we=n,ke=0,li=null,Ya=!1,hr=Lt(t,n),df=!1,dr=ci=pf=Ls=Za=hn=0,Jn=Eo=null,mf=!1,(n&8)!==0&&(n|=n&32);var r=t.entangledLanes;if(r!==0)for(t=t.entanglements,r&=n;0<r;){var c=31-zt(r),f=1<<c;n|=t[c],r&=~f}return Sa=n,ul(),a}function m0(t,n){ge=null,O.H=mo,n===ar||n===vl?(n=Up(),ke=3):n===yu?(n=Up(),ke=4):ke=n===Ku?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,li=n,be===null&&(hn=1,Ll(t,vi(n,t.current)))}function g0(){var t=ri.current;return t===null?!0:(we&4194048)===we?yi===null:(we&62914560)===we||(we&536870912)!==0?t===yi:!1}function _0(){var t=O.H;return O.H=mo,t===null?mo:t}function v0(){var t=O.A;return O.A=px,t}function kl(){hn=4,Ya||(we&4194048)!==we&&ri.current!==null||(hr=!0),(Za&134217727)===0&&(Ls&134217727)===0||$e===null||Qa($e,we,ci,!1)}function Sf(t,n,a){var r=Xe;Xe|=2;var c=_0(),f=v0();($e!==t||we!==n)&&(Vl=null,mr(t,n)),n=!1;var v=hn;t:do try{if(ke!==0&&be!==null){var b=be,B=li;switch(ke){case 8:xf(),v=6;break t;case 3:case 2:case 9:case 6:ri.current===null&&(n=!0);var nt=ke;if(ke=0,li=null,gr(t,b,B,nt),a&&hr){v=0;break t}break;default:nt=ke,ke=0,li=null,gr(t,b,B,nt)}}_x(),v=hn;break}catch(gt){m0(t,gt)}while(!0);return n&&t.shellSuspendCounter++,ua=Es=null,Xe=r,O.H=c,O.A=f,be===null&&($e=null,we=0,ul()),v}function _x(){for(;be!==null;)x0(be)}function vx(t,n){var a=Xe;Xe|=2;var r=_0(),c=v0();$e!==t||we!==n?(Vl=null,Gl=y()+500,mr(t,n)):hr=Lt(t,n);t:do try{if(ke!==0&&be!==null){n=be;var f=li;e:switch(ke){case 1:ke=0,li=null,gr(t,n,f,1);break;case 2:case 9:if(Cp(f)){ke=0,li=null,S0(n);break}n=function(){ke!==2&&ke!==9||$e!==t||(ke=7),Wi(t)},f.then(n,n);break t;case 3:ke=7;break t;case 4:ke=5;break t;case 7:Cp(f)?(ke=0,li=null,S0(n)):(ke=0,li=null,gr(t,n,f,7));break;case 5:var v=null;switch(be.tag){case 26:v=be.memoizedState;case 5:case 27:var b=be;if(v?sg(v):b.stateNode.complete){ke=0,li=null;var B=b.sibling;if(B!==null)be=B;else{var nt=b.return;nt!==null?(be=nt,Wl(nt)):be=null}break e}}ke=0,li=null,gr(t,n,f,5);break;case 6:ke=0,li=null,gr(t,n,f,6);break;case 8:xf(),hn=6;break t;default:throw Error(s(462))}}xx();break}catch(gt){m0(t,gt)}while(!0);return ua=Es=null,O.H=r,O.A=c,Xe=a,be!==null?0:($e=null,we=0,ul(),hn)}function xx(){for(;be!==null&&!Yt();)x0(be)}function x0(t){var n=Xm(t.alternate,t,Sa);t.memoizedProps=t.pendingProps,n===null?Wl(t):be=n}function S0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Fm(a,n,n.pendingProps,n.type,void 0,we);break;case 11:n=Fm(a,n,n.pendingProps,n.type.render,n.ref,we);break;case 5:Ou(n);default:Wm(a,n),n=be=vp(n,Sa),n=Xm(a,n,Sa)}t.memoizedProps=t.pendingProps,n===null?Wl(t):be=n}function gr(t,n,a,r){ua=Es=null,Ou(n),sr=null,ro=0;var c=n.return;try{if(ox(t,c,n,a,we)){hn=1,Ll(t,vi(a,t.current)),be=null;return}}catch(f){if(c!==null)throw be=c,f;hn=1,Ll(t,vi(a,t.current)),be=null;return}n.flags&32768?(Le||r===1?t=!0:hr||(we&536870912)!==0?t=!1:(Ya=t=!0,(r===2||r===9||r===3||r===6)&&(r=ri.current,r!==null&&r.tag===13&&(r.flags|=16384))),M0(n,t)):Wl(n)}function Wl(t){var n=t;do{if((n.flags&32768)!==0){M0(n,Ya);return}t=n.return;var a=ux(n.alternate,n,Sa);if(a!==null){be=a;return}if(n=n.sibling,n!==null){be=n;return}be=n=t}while(n!==null);hn===0&&(hn=5)}function M0(t,n){do{var a=fx(t.alternate,t);if(a!==null){a.flags&=32767,be=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){be=t;return}be=t=a}while(t!==null);hn=6,be=null}function y0(t,n,a,r,c,f,v,b,B){t.cancelPendingCommit=null;do ql();while(bn!==0);if((Xe&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=ou,Yn(t,a,f,v,b,B),t===$e&&(be=$e=null,we=0),pr=n,Ka=t,Ma=a,gf=f,_f=c,f0=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Ex(at,function(){return R0(),null})):(t.callbackNode=null,t.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=O.T,O.T=null,c=H.p,H.p=2,v=Xe,Xe|=4;try{hx(t,n,a)}finally{Xe=v,H.p=c,O.T=r}}bn=1,E0(),T0(),b0()}}function E0(){if(bn===1){bn=0;var t=Ka,n=pr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var r=H.p;H.p=2;var c=Xe;Xe|=4;try{i0(n,t);var f=Lf,v=cp(t.containerInfo),b=f.focusedElem,B=f.selectionRange;if(v!==b&&b&&b.ownerDocument&&lp(b.ownerDocument.documentElement,b)){if(B!==null&&nu(b)){var nt=B.start,gt=B.end;if(gt===void 0&&(gt=nt),"selectionStart"in b)b.selectionStart=nt,b.selectionEnd=Math.min(gt,b.value.length);else{var yt=b.ownerDocument||document,ot=yt&&yt.defaultView||window;if(ot.getSelection){var ut=ot.getSelection(),ee=b.textContent.length,ce=Math.min(B.start,ee),Ke=B.end===void 0?ce:Math.min(B.end,ee);!ut.extend&&ce>Ke&&(v=Ke,Ke=ce,ce=v);var j=op(b,ce),X=op(b,Ke);if(j&&X&&(ut.rangeCount!==1||ut.anchorNode!==j.node||ut.anchorOffset!==j.offset||ut.focusNode!==X.node||ut.focusOffset!==X.offset)){var tt=yt.createRange();tt.setStart(j.node,j.offset),ut.removeAllRanges(),ce>Ke?(ut.addRange(tt),ut.extend(X.node,X.offset)):(tt.setEnd(X.node,X.offset),ut.addRange(tt))}}}}for(yt=[],ut=b;ut=ut.parentNode;)ut.nodeType===1&&yt.push({element:ut,left:ut.scrollLeft,top:ut.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<yt.length;b++){var vt=yt[b];vt.element.scrollLeft=vt.left,vt.element.scrollTop=vt.top}}ac=!!Uf,Lf=Uf=null}finally{Xe=c,H.p=r,O.T=a}}t.current=n,bn=2}}function T0(){if(bn===2){bn=0;var t=Ka,n=pr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var r=H.p;H.p=2;var c=Xe;Xe|=4;try{Jm(t,n.alternate,n)}finally{Xe=c,H.p=r,O.T=a}}bn=3}}function b0(){if(bn===4||bn===3){bn=0,D();var t=Ka,n=pr,a=Ma,r=f0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?bn=5:(bn=0,pr=Ka=null,A0(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(ja=null),ia(a),n=n.stateNode,Ct&&typeof Ct.onCommitFiberRoot=="function")try{Ct.onCommitFiberRoot(At,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=O.T,c=H.p,H.p=2,O.T=null;try{for(var f=t.onRecoverableError,v=0;v<r.length;v++){var b=r[v];f(b.value,{componentStack:b.stack})}}finally{O.T=n,H.p=c}}(Ma&3)!==0&&ql(),Wi(t),c=t.pendingLanes,(a&261930)!==0&&(c&42)!==0?t===vf?To++:(To=0,vf=t):To=0,bo(0)}}function A0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,ao(n)))}function ql(){return E0(),T0(),b0(),R0()}function R0(){if(bn!==5)return!1;var t=Ka,n=gf;gf=0;var a=ia(Ma),r=O.T,c=H.p;try{H.p=32>a?32:a,O.T=null,a=_f,_f=null;var f=Ka,v=Ma;if(bn=0,pr=Ka=null,Ma=0,(Xe&6)!==0)throw Error(s(331));var b=Xe;if(Xe|=4,l0(f.current),s0(f,f.current,v,a),Xe=b,bo(0,!1),Ct&&typeof Ct.onPostCommitFiberRoot=="function")try{Ct.onPostCommitFiberRoot(At,f)}catch{}return!0}finally{H.p=c,O.T=r,A0(t,n)}}function w0(t,n,a){n=vi(a,n),n=ju(t.stateNode,n,2),t=Xa(t,n,2),t!==null&&(Ue(t,2),Wi(t))}function We(t,n,a){if(t.tag===3)w0(t,t,a);else for(;n!==null;){if(n.tag===3){w0(n,t,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ja===null||!ja.has(r))){t=vi(a,t),a=Cm(2),r=Xa(n,a,2),r!==null&&(Dm(a,r,n,t),Ue(r,2),Wi(r));break}}n=n.return}}function Mf(t,n,a){var r=t.pingCache;if(r===null){r=t.pingCache=new mx;var c=new Set;r.set(n,c)}else c=r.get(n),c===void 0&&(c=new Set,r.set(n,c));c.has(a)||(df=!0,c.add(a),t=Sx.bind(null,t,n,a),n.then(t,t))}function Sx(t,n,a){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,$e===t&&(we&a)===a&&(hn===4||hn===3&&(we&62914560)===we&&300>y()-Hl?(Xe&2)===0&&mr(t,0):pf|=a,dr===we&&(dr=0)),Wi(t)}function C0(t,n){n===0&&(n=Ie()),t=Ss(t,n),t!==null&&(Ue(t,n),Wi(t))}function Mx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),C0(t,a)}function yx(t,n){var a=0;switch(t.tag){case 31:case 13:var r=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),C0(t,a)}function Ex(t,n){return ye(t,n)}var Yl=null,_r=null,yf=!1,Zl=!1,Ef=!1,Ja=0;function Wi(t){t!==_r&&t.next===null&&(_r===null?Yl=_r=t:_r=_r.next=t),Zl=!0,yf||(yf=!0,bx())}function bo(t,n){if(!Ef&&Zl){Ef=!0;do for(var a=!1,r=Yl;r!==null;){if(t!==0){var c=r.pendingLanes;if(c===0)var f=0;else{var v=r.suspendedLanes,b=r.pingedLanes;f=(1<<31-zt(42|t)+1)-1,f&=c&~(v&~b),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,N0(r,f))}else f=we,f=xt(r,r===$e?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||Lt(r,f)||(a=!0,N0(r,f));r=r.next}while(a);Ef=!1}}function Tx(){D0()}function D0(){Zl=yf=!1;var t=0;Ja!==0&&Px()&&(t=Ja);for(var n=y(),a=null,r=Yl;r!==null;){var c=r.next,f=U0(r,n);f===0?(r.next=null,a===null?Yl=c:a.next=c,c===null&&(_r=a)):(a=r,(t!==0||(f&3)!==0)&&(Zl=!0)),r=c}bn!==0&&bn!==5||bo(t),Ja!==0&&(Ja=0)}function U0(t,n){for(var a=t.suspendedLanes,r=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var v=31-zt(f),b=1<<v,B=c[v];B===-1?((b&a)===0||(b&r)!==0)&&(c[v]=ue(b,n)):B<=n&&(t.expiredLanes|=b),f&=~b}if(n=$e,a=we,a=xt(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===n&&(ke===2||ke===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&Oe(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Lt(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(r!==null&&Oe(r),ia(a)){case 2:case 8:a=Et;break;case 32:a=at;break;case 268435456:a=Ot;break;default:a=at}return r=L0.bind(null,t),a=ye(a,r),t.callbackPriority=n,t.callbackNode=a,n}return r!==null&&r!==null&&Oe(r),t.callbackPriority=2,t.callbackNode=null,2}function L0(t,n){if(bn!==0&&bn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(ql()&&t.callbackNode!==a)return null;var r=we;return r=xt(t,t===$e?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(d0(t,r,n),U0(t,y()),t.callbackNode!=null&&t.callbackNode===a?L0.bind(null,t):null)}function N0(t,n){if(ql())return null;d0(t,n,!0)}function bx(){Fx(function(){(Xe&6)!==0?ye(_t,Tx):D0()})}function Tf(){if(Ja===0){var t=nr;t===0&&(t=It,It<<=1,(It&261888)===0&&(It=256)),Ja=t}return Ja}function O0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:nl(""+t)}function P0(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Ax(t,n,a,r,c){if(n==="submit"&&a&&a.stateNode===c){var f=O0((c[mn]||null).action),v=r.submitter;v&&(n=(n=v[mn]||null)?O0(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var b=new rl("action","action",null,r,c);t.push({event:b,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Ja!==0){var B=v?P0(c,v):new FormData(c);Xu(a,{pending:!0,data:B,method:c.method,action:f},null,B)}}else typeof f=="function"&&(b.preventDefault(),B=v?P0(c,v):new FormData(c),Xu(a,{pending:!0,data:B,method:c.method,action:f},f,B))},currentTarget:c}]})}}for(var bf=0;bf<ru.length;bf++){var Af=ru[bf],Rx=Af.toLowerCase(),wx=Af[0].toUpperCase()+Af.slice(1);Ui(Rx,"on"+wx)}Ui(hp,"onAnimationEnd"),Ui(dp,"onAnimationIteration"),Ui(pp,"onAnimationStart"),Ui("dblclick","onDoubleClick"),Ui("focusin","onFocus"),Ui("focusout","onBlur"),Ui(kv,"onTransitionRun"),Ui(Wv,"onTransitionStart"),Ui(qv,"onTransitionCancel"),Ui(mp,"onTransitionEnd"),Q("onMouseEnter",["mouseout","mouseover"]),Q("onMouseLeave",["mouseout","mouseover"]),Q("onPointerEnter",["pointerout","pointerover"]),Q("onPointerLeave",["pointerout","pointerover"]),$("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),$("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),$("onBeforeInput",["compositionend","keypress","textInput","paste"]),$("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Cx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ao));function z0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],c=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var v=r.length-1;0<=v;v--){var b=r[v],B=b.instance,nt=b.currentTarget;if(b=b.listener,B!==f&&c.isPropagationStopped())break t;f=b,c.currentTarget=nt;try{f(c)}catch(gt){cl(gt)}c.currentTarget=null,f=B}else for(v=0;v<r.length;v++){if(b=r[v],B=b.instance,nt=b.currentTarget,b=b.listener,B!==f&&c.isPropagationStopped())break t;f=b,c.currentTarget=nt;try{f(c)}catch(gt){cl(gt)}c.currentTarget=null,f=B}}}}function Ae(t,n){var a=n[Oa];a===void 0&&(a=n[Oa]=new Set);var r=t+"__bubble";a.has(r)||(F0(n,t,2,!1),a.add(r))}function Rf(t,n,a){var r=0;n&&(r|=4),F0(a,t,r,n)}var jl="_reactListening"+Math.random().toString(36).slice(2);function wf(t){if(!t[jl]){t[jl]=!0,Y.forEach(function(a){a!=="selectionchange"&&(Cx.has(a)||Rf(a,!1,t),Rf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[jl]||(n[jl]=!0,Rf("selectionchange",!1,n))}}function F0(t,n,a,r){switch(hg(n)){case 2:var c=iS;break;case 8:c=aS;break;default:c=Xf}a=c.bind(null,n,a,t),c=void 0,!Yc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),r?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function Cf(t,n,a,r,c){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var v=r.tag;if(v===3||v===4){var b=r.stateNode.containerInfo;if(b===c)break;if(v===4)for(v=r.return;v!==null;){var B=v.tag;if((B===3||B===4)&&v.stateNode.containerInfo===c)return;v=v.return}for(;b!==null;){if(v=pi(b),v===null)return;if(B=v.tag,B===5||B===6||B===26||B===27){r=f=v;continue t}b=b.parentNode}}r=r.return}Vd(function(){var nt=f,gt=Wc(a),yt=[];t:{var ot=gp.get(t);if(ot!==void 0){var ut=rl,ee=t;switch(t){case"keypress":if(al(a)===0)break t;case"keydown":case"keyup":ut=yv;break;case"focusin":ee="focus",ut=Qc;break;case"focusout":ee="blur",ut=Qc;break;case"beforeblur":case"afterblur":ut=Qc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ut=Wd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ut=uv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ut=bv;break;case hp:case dp:case pp:ut=dv;break;case mp:ut=Rv;break;case"scroll":case"scrollend":ut=lv;break;case"wheel":ut=Cv;break;case"copy":case"cut":case"paste":ut=mv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ut=Yd;break;case"toggle":case"beforetoggle":ut=Uv}var ce=(n&4)!==0,Ke=!ce&&(t==="scroll"||t==="scrollend"),j=ce?ot!==null?ot+"Capture":null:ot;ce=[];for(var X=nt,tt;X!==null;){var vt=X;if(tt=vt.stateNode,vt=vt.tag,vt!==5&&vt!==26&&vt!==27||tt===null||j===null||(vt=Yr(X,j),vt!=null&&ce.push(Ro(X,vt,tt))),Ke)break;X=X.return}0<ce.length&&(ot=new ut(ot,ee,null,a,gt),yt.push({event:ot,listeners:ce}))}}if((n&7)===0){t:{if(ot=t==="mouseover"||t==="pointerover",ut=t==="mouseout"||t==="pointerout",ot&&a!==kc&&(ee=a.relatedTarget||a.fromElement)&&(pi(ee)||ee[Vn]))break t;if((ut||ot)&&(ot=gt.window===gt?gt:(ot=gt.ownerDocument)?ot.defaultView||ot.parentWindow:window,ut?(ee=a.relatedTarget||a.toElement,ut=nt,ee=ee?pi(ee):null,ee!==null&&(Ke=u(ee),ce=ee.tag,ee!==Ke||ce!==5&&ce!==27&&ce!==6)&&(ee=null)):(ut=null,ee=nt),ut!==ee)){if(ce=Wd,vt="onMouseLeave",j="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(ce=Yd,vt="onPointerLeave",j="onPointerEnter",X="pointer"),Ke=ut==null?ot:Di(ut),tt=ee==null?ot:Di(ee),ot=new ce(vt,X+"leave",ut,a,gt),ot.target=Ke,ot.relatedTarget=tt,vt=null,pi(gt)===nt&&(ce=new ce(j,X+"enter",ee,a,gt),ce.target=tt,ce.relatedTarget=Ke,vt=ce),Ke=vt,ut&&ee)e:{for(ce=Dx,j=ut,X=ee,tt=0,vt=j;vt;vt=ce(vt))tt++;vt=0;for(var oe=X;oe;oe=ce(oe))vt++;for(;0<tt-vt;)j=ce(j),tt--;for(;0<vt-tt;)X=ce(X),vt--;for(;tt--;){if(j===X||X!==null&&j===X.alternate){ce=j;break e}j=ce(j),X=ce(X)}ce=null}else ce=null;ut!==null&&I0(yt,ot,ut,ce,!1),ee!==null&&Ke!==null&&I0(yt,Ke,ee,ce,!0)}}t:{if(ot=nt?Di(nt):window,ut=ot.nodeName&&ot.nodeName.toLowerCase(),ut==="select"||ut==="input"&&ot.type==="file")var Be=ep;else if($d(ot))if(np)Be=Gv;else{Be=Bv;var ie=Iv}else ut=ot.nodeName,!ut||ut.toLowerCase()!=="input"||ot.type!=="checkbox"&&ot.type!=="radio"?nt&&rn(nt.elementType)&&(Be=ep):Be=Hv;if(Be&&(Be=Be(t,nt))){tp(yt,Be,a,gt);break t}ie&&ie(t,ot,nt),t==="focusout"&&nt&&ot.type==="number"&&nt.memoizedProps.value!=null&&ln(ot,"number",ot.value)}switch(ie=nt?Di(nt):window,t){case"focusin":($d(ie)||ie.contentEditable==="true")&&(Zs=ie,iu=nt,eo=null);break;case"focusout":eo=iu=Zs=null;break;case"mousedown":au=!0;break;case"contextmenu":case"mouseup":case"dragend":au=!1,up(yt,a,gt);break;case"selectionchange":if(Xv)break;case"keydown":case"keyup":up(yt,a,gt)}var _e;if($c)t:{switch(t){case"compositionstart":var Ce="onCompositionStart";break t;case"compositionend":Ce="onCompositionEnd";break t;case"compositionupdate":Ce="onCompositionUpdate";break t}Ce=void 0}else Ys?Qd(t,a)&&(Ce="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Ce="onCompositionStart");Ce&&(Zd&&a.locale!=="ko"&&(Ys||Ce!=="onCompositionStart"?Ce==="onCompositionEnd"&&Ys&&(_e=Xd()):(za=gt,Zc="value"in za?za.value:za.textContent,Ys=!0)),ie=Kl(nt,Ce),0<ie.length&&(Ce=new qd(Ce,t,null,a,gt),yt.push({event:Ce,listeners:ie}),_e?Ce.data=_e:(_e=Jd(a),_e!==null&&(Ce.data=_e)))),(_e=Nv?Ov(t,a):Pv(t,a))&&(Ce=Kl(nt,"onBeforeInput"),0<Ce.length&&(ie=new qd("onBeforeInput","beforeinput",null,a,gt),yt.push({event:ie,listeners:Ce}),ie.data=_e)),Ax(yt,t,nt,a,gt)}z0(yt,n)})}function Ro(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Kl(t,n){for(var a=n+"Capture",r=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Yr(t,a),c!=null&&r.unshift(Ro(t,c,f)),c=Yr(t,n),c!=null&&r.push(Ro(t,c,f))),t.tag===3)return r;t=t.return}return[]}function Dx(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function I0(t,n,a,r,c){for(var f=n._reactName,v=[];a!==null&&a!==r;){var b=a,B=b.alternate,nt=b.stateNode;if(b=b.tag,B!==null&&B===r)break;b!==5&&b!==26&&b!==27||nt===null||(B=nt,c?(nt=Yr(a,f),nt!=null&&v.unshift(Ro(a,nt,B))):c||(nt=Yr(a,f),nt!=null&&v.push(Ro(a,nt,B)))),a=a.return}v.length!==0&&t.push({event:n,listeners:v})}var Ux=/\r\n?/g,Lx=/\u0000|\uFFFD/g;function B0(t){return(typeof t=="string"?t:""+t).replace(Ux,`
`).replace(Lx,"")}function H0(t,n){return n=B0(n),B0(t)===n}function je(t,n,a,r,c,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||tn(t,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&tn(t,""+r);break;case"className":mt(t,"class",r);break;case"tabIndex":mt(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":mt(t,a,r);break;case"style":ii(t,r,f);break;case"data":if(n!=="object"){mt(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=nl(""+r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&je(t,n,"name",c.name,c,null),je(t,n,"formEncType",c.formEncType,c,null),je(t,n,"formMethod",c.formMethod,c,null),je(t,n,"formTarget",c.formTarget,c,null)):(je(t,n,"encType",c.encType,c,null),je(t,n,"method",c.method,c,null),je(t,n,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=nl(""+r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=ra);break;case"onScroll":r!=null&&Ae("scroll",t);break;case"onScrollEnd":r!=null&&Ae("scrollend",t);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=nl(""+r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""+r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":Ae("beforetoggle",t),Ae("toggle",t),lt(t,"popover",r);break;case"xlinkActuate":Mt(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Mt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Mt(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Mt(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Mt(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Mt(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Mt(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Mt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Mt(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":lt(t,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=sa.get(a)||a,lt(t,a,r))}}function Df(t,n,a,r,c,f){switch(a){case"style":ii(t,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof r=="string"?tn(t,r):(typeof r=="number"||typeof r=="bigint")&&tn(t,""+r);break;case"onScroll":r!=null&&Ae("scroll",t);break;case"onScrollEnd":r!=null&&Ae("scrollend",t);break;case"onClick":r!=null&&(t.onclick=ra);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!q.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[mn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof r=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,r,c);break t}a in t?t[a]=r:r===!0?t.setAttribute(a,""):lt(t,a,r)}}}function On(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ae("error",t),Ae("load",t);var r=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:je(t,n,f,v,a,null)}}c&&je(t,n,"srcSet",a.srcSet,a,null),r&&je(t,n,"src",a.src,a,null);return;case"input":Ae("invalid",t);var b=f=v=c=null,B=null,nt=null;for(r in a)if(a.hasOwnProperty(r)){var gt=a[r];if(gt!=null)switch(r){case"name":c=gt;break;case"type":v=gt;break;case"checked":B=gt;break;case"defaultChecked":nt=gt;break;case"value":f=gt;break;case"defaultValue":b=gt;break;case"children":case"dangerouslySetInnerHTML":if(gt!=null)throw Error(s(137,n));break;default:je(t,n,r,gt,a,null)}}Je(t,f,b,B,nt,v,c,!1);return;case"select":Ae("invalid",t),r=v=f=null;for(c in a)if(a.hasOwnProperty(c)&&(b=a[c],b!=null))switch(c){case"value":f=b;break;case"defaultValue":v=b;break;case"multiple":r=b;default:je(t,n,c,b,a,null)}n=f,a=v,t.multiple=!!r,n!=null?Tn(t,!!r,n,!1):a!=null&&Tn(t,!!r,a,!0);return;case"textarea":Ae("invalid",t),f=c=r=null;for(v in a)if(a.hasOwnProperty(v)&&(b=a[v],b!=null))switch(v){case"value":r=b;break;case"defaultValue":c=b;break;case"children":f=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(s(91));break;default:je(t,n,v,b,a,null)}en(t,r,c,f);return;case"option":for(B in a)a.hasOwnProperty(B)&&(r=a[B],r!=null)&&(B==="selected"?t.selected=r&&typeof r!="function"&&typeof r!="symbol":je(t,n,B,r,a,null));return;case"dialog":Ae("beforetoggle",t),Ae("toggle",t),Ae("cancel",t),Ae("close",t);break;case"iframe":case"object":Ae("load",t);break;case"video":case"audio":for(r=0;r<Ao.length;r++)Ae(Ao[r],t);break;case"image":Ae("error",t),Ae("load",t);break;case"details":Ae("toggle",t);break;case"embed":case"source":case"link":Ae("error",t),Ae("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(nt in a)if(a.hasOwnProperty(nt)&&(r=a[nt],r!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:je(t,n,nt,r,a,null)}return;default:if(rn(n)){for(gt in a)a.hasOwnProperty(gt)&&(r=a[gt],r!==void 0&&Df(t,n,gt,r,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(r=a[b],r!=null&&je(t,n,b,r,a,null))}function Nx(t,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,v=null,b=null,B=null,nt=null,gt=null;for(ut in a){var yt=a[ut];if(a.hasOwnProperty(ut)&&yt!=null)switch(ut){case"checked":break;case"value":break;case"defaultValue":B=yt;default:r.hasOwnProperty(ut)||je(t,n,ut,null,r,yt)}}for(var ot in r){var ut=r[ot];if(yt=a[ot],r.hasOwnProperty(ot)&&(ut!=null||yt!=null))switch(ot){case"type":f=ut;break;case"name":c=ut;break;case"checked":nt=ut;break;case"defaultChecked":gt=ut;break;case"value":v=ut;break;case"defaultValue":b=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(s(137,n));break;default:ut!==yt&&je(t,n,ot,ut,r,yt)}}Re(t,v,b,B,nt,gt,f,c);return;case"select":ut=v=b=ot=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":ut=B;default:r.hasOwnProperty(f)||je(t,n,f,null,r,B)}for(c in r)if(f=r[c],B=a[c],r.hasOwnProperty(c)&&(f!=null||B!=null))switch(c){case"value":ot=f;break;case"defaultValue":b=f;break;case"multiple":v=f;default:f!==B&&je(t,n,c,f,r,B)}n=b,a=v,r=ut,ot!=null?Tn(t,!!a,ot,!1):!!r!=!!a&&(n!=null?Tn(t,!!a,n,!0):Tn(t,!!a,a?[]:"",!1));return;case"textarea":ut=ot=null;for(b in a)if(c=a[b],a.hasOwnProperty(b)&&c!=null&&!r.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:je(t,n,b,null,r,c)}for(v in r)if(c=r[v],f=a[v],r.hasOwnProperty(v)&&(c!=null||f!=null))switch(v){case"value":ot=c;break;case"defaultValue":ut=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==f&&je(t,n,v,c,r,f)}Te(t,ot,ut);return;case"option":for(var ee in a)ot=a[ee],a.hasOwnProperty(ee)&&ot!=null&&!r.hasOwnProperty(ee)&&(ee==="selected"?t.selected=!1:je(t,n,ee,null,r,ot));for(B in r)ot=r[B],ut=a[B],r.hasOwnProperty(B)&&ot!==ut&&(ot!=null||ut!=null)&&(B==="selected"?t.selected=ot&&typeof ot!="function"&&typeof ot!="symbol":je(t,n,B,ot,r,ut));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ce in a)ot=a[ce],a.hasOwnProperty(ce)&&ot!=null&&!r.hasOwnProperty(ce)&&je(t,n,ce,null,r,ot);for(nt in r)if(ot=r[nt],ut=a[nt],r.hasOwnProperty(nt)&&ot!==ut&&(ot!=null||ut!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(s(137,n));break;default:je(t,n,nt,ot,r,ut)}return;default:if(rn(n)){for(var Ke in a)ot=a[Ke],a.hasOwnProperty(Ke)&&ot!==void 0&&!r.hasOwnProperty(Ke)&&Df(t,n,Ke,void 0,r,ot);for(gt in r)ot=r[gt],ut=a[gt],!r.hasOwnProperty(gt)||ot===ut||ot===void 0&&ut===void 0||Df(t,n,gt,ot,r,ut);return}}for(var j in a)ot=a[j],a.hasOwnProperty(j)&&ot!=null&&!r.hasOwnProperty(j)&&je(t,n,j,null,r,ot);for(yt in r)ot=r[yt],ut=a[yt],!r.hasOwnProperty(yt)||ot===ut||ot==null&&ut==null||je(t,n,yt,ot,r,ut)}function G0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Ox(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var c=a[r],f=c.transferSize,v=c.initiatorType,b=c.duration;if(f&&b&&G0(v)){for(v=0,b=c.responseEnd,r+=1;r<a.length;r++){var B=a[r],nt=B.startTime;if(nt>b)break;var gt=B.transferSize,yt=B.initiatorType;gt&&G0(yt)&&(B=B.responseEnd,v+=gt*(B<b?1:(b-nt)/(B-nt)))}if(--r,n+=8*(f+v)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Uf=null,Lf=null;function Ql(t){return t.nodeType===9?t:t.ownerDocument}function V0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function X0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Nf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Of=null;function Px(){var t=window.event;return t&&t.type==="popstate"?t===Of?!1:(Of=t,!0):(Of=null,!1)}var k0=typeof setTimeout=="function"?setTimeout:void 0,zx=typeof clearTimeout=="function"?clearTimeout:void 0,W0=typeof Promise=="function"?Promise:void 0,Fx=typeof queueMicrotask=="function"?queueMicrotask:typeof W0<"u"?function(t){return W0.resolve(null).then(t).catch(Ix)}:k0;function Ix(t){setTimeout(function(){throw t})}function $a(t){return t==="head"}function q0(t,n){var a=n,r=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(r===0){t.removeChild(c),Mr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")wo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,wo(a);for(var f=a.firstChild;f;){var v=f.nextSibling,b=f.nodeName;f[Ci]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=v}}else a==="body"&&wo(t.ownerDocument.body);a=c}while(a);Mr(n)}function Y0(t,n){var a=t;t=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=r}while(a)}function Pf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Pf(a),aa(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Bx(t,n,a,r){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[Ci])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=Ei(t.nextSibling),t===null)break}return null}function Hx(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Ei(t.nextSibling),t===null))return null;return t}function Z0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Ei(t.nextSibling),t===null))return null;return t}function zf(t){return t.data==="$?"||t.data==="$~"}function Ff(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Gx(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function Ei(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var If=null;function j0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Ei(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function K0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Q0(t,n,a){switch(n=Ql(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function wo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);aa(t)}var Ti=new Map,J0=new Set;function Jl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ya=H.d;H.d={f:Vx,r:Xx,D:kx,C:Wx,L:qx,m:Yx,X:jx,S:Zx,M:Kx};function Vx(){var t=ya.f(),n=Xl();return t||n}function Xx(t){var n=mi(t);n!==null&&n.tag===5&&n.type==="form"?mm(n):ya.r(t)}var vr=typeof document>"u"?null:document;function $0(t,n,a){var r=vr;if(r&&typeof n=="string"&&n){var c=ne(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),J0.has(c)||(J0.add(c),t={rel:t,crossOrigin:a,href:n},r.querySelector(c)===null&&(n=r.createElement("link"),On(n,"link",t),T(n),r.head.appendChild(n)))}}function kx(t){ya.D(t),$0("dns-prefetch",t,null)}function Wx(t,n){ya.C(t,n),$0("preconnect",t,n)}function qx(t,n,a){ya.L(t,n,a);var r=vr;if(r&&t&&n){var c='link[rel="preload"][as="'+ne(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+ne(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+ne(a.imageSizes)+'"]')):c+='[href="'+ne(t)+'"]';var f=c;switch(n){case"style":f=xr(t);break;case"script":f=Sr(t)}Ti.has(f)||(t=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Ti.set(f,t),r.querySelector(c)!==null||n==="style"&&r.querySelector(Co(f))||n==="script"&&r.querySelector(Do(f))||(n=r.createElement("link"),On(n,"link",t),T(n),r.head.appendChild(n)))}}function Yx(t,n){ya.m(t,n);var a=vr;if(a&&t){var r=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+ne(r)+'"][href="'+ne(t)+'"]',f=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Sr(t)}if(!Ti.has(f)&&(t=_({rel:"modulepreload",href:t},n),Ti.set(f,t),a.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Do(f)))return}r=a.createElement("link"),On(r,"link",t),T(r),a.head.appendChild(r)}}}function Zx(t,n,a){ya.S(t,n,a);var r=vr;if(r&&t){var c=gi(r).hoistableStyles,f=xr(t);n=n||"default";var v=c.get(f);if(!v){var b={loading:0,preload:null};if(v=r.querySelector(Co(f)))b.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Ti.get(f))&&Bf(t,a);var B=v=r.createElement("link");T(B),On(B,"link",t),B._p=new Promise(function(nt,gt){B.onload=nt,B.onerror=gt}),B.addEventListener("load",function(){b.loading|=1}),B.addEventListener("error",function(){b.loading|=2}),b.loading|=4,$l(v,n,r)}v={type:"stylesheet",instance:v,count:1,state:b},c.set(f,v)}}}function jx(t,n){ya.X(t,n);var a=vr;if(a&&t){var r=gi(a).hoistableScripts,c=Sr(t),f=r.get(c);f||(f=a.querySelector(Do(c)),f||(t=_({src:t,async:!0},n),(n=Ti.get(c))&&Hf(t,n),f=a.createElement("script"),T(f),On(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function Kx(t,n){ya.M(t,n);var a=vr;if(a&&t){var r=gi(a).hoistableScripts,c=Sr(t),f=r.get(c);f||(f=a.querySelector(Do(c)),f||(t=_({src:t,async:!0,type:"module"},n),(n=Ti.get(c))&&Hf(t,n),f=a.createElement("script"),T(f),On(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function tg(t,n,a,r){var c=(c=J.current)?Jl(c):null;if(!c)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=xr(a.href),a=gi(c).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=xr(a.href);var f=gi(c).hoistableStyles,v=f.get(t);if(v||(c=c.ownerDocument||c,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,v),(f=c.querySelector(Co(t)))&&!f._p&&(v.instance=f,v.state.loading=5),Ti.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ti.set(t,a),f||Qx(c,t,a,v.state))),n&&r===null)throw Error(s(528,""));return v}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Sr(a),a=gi(c).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function xr(t){return'href="'+ne(t)+'"'}function Co(t){return'link[rel="stylesheet"]['+t+"]"}function eg(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function Qx(t,n,a,r){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=t.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),On(n,"link",a),T(n),t.head.appendChild(n))}function Sr(t){return'[src="'+ne(t)+'"]'}function Do(t){return"script[async]"+t}function ng(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+ne(a.href)+'"]');if(r)return n.instance=r,T(r),r;var c=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),T(r),On(r,"style",c),$l(r,a.precedence,t),n.instance=r;case"stylesheet":c=xr(a.href);var f=t.querySelector(Co(c));if(f)return n.state.loading|=4,n.instance=f,T(f),f;r=eg(a),(c=Ti.get(c))&&Bf(r,c),f=(t.ownerDocument||t).createElement("link"),T(f);var v=f;return v._p=new Promise(function(b,B){v.onload=b,v.onerror=B}),On(f,"link",r),n.state.loading|=4,$l(f,a.precedence,t),n.instance=f;case"script":return f=Sr(a.src),(c=t.querySelector(Do(f)))?(n.instance=c,T(c),c):(r=a,(c=Ti.get(f))&&(r=_({},a),Hf(r,c)),t=t.ownerDocument||t,c=t.createElement("script"),T(c),On(c,"link",r),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,$l(r,a.precedence,t));return n.instance}function $l(t,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,f=c,v=0;v<r.length;v++){var b=r[v];if(b.dataset.precedence===n)f=b;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Bf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Hf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var tc=null;function ig(t,n,a){if(tc===null){var r=new Map,c=tc=new Map;c.set(a,r)}else c=tc,r=c.get(a),r||(r=new Map,c.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[Ci]||f[se]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=t+v;var b=r.get(v);b?b.push(f):r.set(v,[f])}}return r}function ag(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function Jx(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function sg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function $x(t,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=xr(r.href),f=n.querySelector(Co(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=ec.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,T(f);return}f=n.ownerDocument||n,r=eg(r),(c=Ti.get(c))&&Bf(r,c),f=f.createElement("link"),T(f);var v=f;v._p=new Promise(function(b,B){v.onload=b,v.onerror=B}),On(f,"link",r),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=ec.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Gf=0;function tS(t,n){return t.stylesheets&&t.count===0&&ic(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var r=setTimeout(function(){if(t.stylesheets&&ic(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Gf===0&&(Gf=62500*Ox());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&ic(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Gf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(c)}}:null}function ec(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ic(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var nc=null;function ic(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,nc=new Map,n.forEach(eS,t),nc=null,ec.call(t))}function eS(t,n){if(!(n.state.loading&4)){var a=nc.get(t);if(a)var r=a.get(null);else{a=new Map,nc.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var v=c[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),r=v)}r&&a.set(null,r)}c=n.instance,v=c.getAttribute("data-precedence"),f=a.get(v)||r,f===r&&a.set(null,c),a.set(v,c),this.count++,r=ec.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var Uo={$$typeof:P,Provider:null,Consumer:null,_currentValue:rt,_currentValue2:rt,_threadCount:0};function nS(t,n,a,r,c,f,v,b,B){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=De(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=De(0),this.hiddenUpdates=De(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function rg(t,n,a,r,c,f,v,b,B,nt,gt,yt){return t=new nS(t,n,a,v,B,nt,gt,yt,b),n=1,f===!0&&(n|=24),f=si(3,null,null,n),t.current=f,f.stateNode=t,n=xu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},Eu(f),t}function og(t){return t?(t=Qs,t):Qs}function lg(t,n,a,r,c,f){c=og(c),r.context===null?r.context=c:r.pendingContext=c,r=Va(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=Xa(t,r,n),a!==null&&($n(a,t,n),lo(a,t,n))}function cg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Vf(t,n){cg(t,n),(t=t.alternate)&&cg(t,n)}function ug(t){if(t.tag===13||t.tag===31){var n=Ss(t,67108864);n!==null&&$n(n,t,67108864),Vf(t,67108864)}}function fg(t){if(t.tag===13||t.tag===31){var n=ui();n=Gi(n);var a=Ss(t,n);a!==null&&$n(a,t,n),Vf(t,n)}}var ac=!0;function iS(t,n,a,r){var c=O.T;O.T=null;var f=H.p;try{H.p=2,Xf(t,n,a,r)}finally{H.p=f,O.T=c}}function aS(t,n,a,r){var c=O.T;O.T=null;var f=H.p;try{H.p=8,Xf(t,n,a,r)}finally{H.p=f,O.T=c}}function Xf(t,n,a,r){if(ac){var c=kf(r);if(c===null)Cf(t,n,r,sc,a),dg(t,r);else if(rS(c,t,n,a,r))r.stopPropagation();else if(dg(t,r),n&4&&-1<sS.indexOf(t)){for(;c!==null;){var f=mi(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=bt(f.pendingLanes);if(v!==0){var b=f;for(b.pendingLanes|=2,b.entangledLanes|=2;v;){var B=1<<31-zt(v);b.entanglements[1]|=B,v&=~B}Wi(f),(Xe&6)===0&&(Gl=y()+500,bo(0))}}break;case 31:case 13:b=Ss(f,2),b!==null&&$n(b,f,2),Xl(),Vf(f,2)}if(f=kf(r),f===null&&Cf(t,n,r,sc,a),f===c)break;c=f}c!==null&&r.stopPropagation()}else Cf(t,n,r,null,a)}}function kf(t){return t=Wc(t),Wf(t)}var sc=null;function Wf(t){if(sc=null,t=pi(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return sc=t,null}function hg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(W()){case _t:return 2;case Et:return 8;case at:case jt:return 32;case Ot:return 268435456;default:return 32}default:return 32}}var qf=!1,ts=null,es=null,ns=null,Lo=new Map,No=new Map,is=[],sS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function dg(t,n){switch(t){case"focusin":case"focusout":ts=null;break;case"dragenter":case"dragleave":es=null;break;case"mouseover":case"mouseout":ns=null;break;case"pointerover":case"pointerout":Lo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":No.delete(n.pointerId)}}function Oo(t,n,a,r,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[c]},n!==null&&(n=mi(n),n!==null&&ug(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function rS(t,n,a,r,c){switch(n){case"focusin":return ts=Oo(ts,t,n,a,r,c),!0;case"dragenter":return es=Oo(es,t,n,a,r,c),!0;case"mouseover":return ns=Oo(ns,t,n,a,r,c),!0;case"pointerover":var f=c.pointerId;return Lo.set(f,Oo(Lo.get(f)||null,t,n,a,r,c)),!0;case"gotpointercapture":return f=c.pointerId,No.set(f,Oo(No.get(f)||null,t,n,a,r,c)),!0}return!1}function pg(t){var n=pi(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,wi(t.priority,function(){fg(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,wi(t.priority,function(){fg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function rc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=kf(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);kc=r,a.target.dispatchEvent(r),kc=null}else return n=mi(a),n!==null&&ug(n),t.blockedOn=a,!1;n.shift()}return!0}function mg(t,n,a){rc(t)&&a.delete(n)}function oS(){qf=!1,ts!==null&&rc(ts)&&(ts=null),es!==null&&rc(es)&&(es=null),ns!==null&&rc(ns)&&(ns=null),Lo.forEach(mg),No.forEach(mg)}function oc(t,n){t.blockedOn===n&&(t.blockedOn=null,qf||(qf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,oS)))}var lc=null;function gg(t){lc!==t&&(lc=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){lc===t&&(lc=null);for(var n=0;n<t.length;n+=3){var a=t[n],r=t[n+1],c=t[n+2];if(typeof r!="function"){if(Wf(r||a)===null)continue;break}var f=mi(a);f!==null&&(t.splice(n,3),n-=3,Xu(f,{pending:!0,data:c,method:a.method,action:r},r,c))}}))}function Mr(t){function n(B){return oc(B,t)}ts!==null&&oc(ts,t),es!==null&&oc(es,t),ns!==null&&oc(ns,t),Lo.forEach(n),No.forEach(n);for(var a=0;a<is.length;a++){var r=is[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<is.length&&(a=is[0],a.blockedOn===null);)pg(a),a.blockedOn===null&&is.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var c=a[r],f=a[r+1],v=c[mn]||null;if(typeof f=="function")v||gg(a);else if(v){var b=null;if(f&&f.hasAttribute("formAction")){if(c=f,v=f[mn]||null)b=v.formAction;else if(Wf(c)!==null)continue}else b=v.action;typeof b=="function"?a[r+1]=b:(a.splice(r,3),r-=3),gg(a)}}}function _g(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(v){return c=v})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Yf(t){this._internalRoot=t}cc.prototype.render=Yf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=ui();lg(a,r,t,n,null,null)},cc.prototype.unmount=Yf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;lg(t.current,2,null,t,null,null),Xl(),n[Vn]=null}};function cc(t){this._internalRoot=t}cc.prototype.unstable_scheduleHydration=function(t){if(t){var n=ei();t={blockedOn:null,target:t,priority:n};for(var a=0;a<is.length&&n!==0&&n<is[a].priority;a++);is.splice(a,0,t),a===0&&pg(t)}};var vg=e.version;if(vg!=="19.2.3")throw Error(s(527,vg,"19.2.3"));H.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var lS={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var uc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!uc.isDisabled&&uc.supportsFiber)try{At=uc.inject(lS),Ct=uc}catch{}}return zo.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,r="",c=bm,f=Am,v=Rm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=rg(t,1,!1,null,null,a,r,null,c,f,v,_g),t[Vn]=n.current,wf(t),new Yf(n)},zo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var r=!1,c="",f=bm,v=Am,b=Rm,B=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=rg(t,1,!0,n,a??null,r,c,B,f,v,b,_g),n.context=og(null),a=n.current,r=ui(),r=Gi(r),c=Va(r),c.callback=null,Xa(a,c,r),a=r,n.current.lanes=a,Ue(n,a),Wi(n),t[Vn]=n.current,wf(t),new cc(n)},zo.version="19.2.3",zo}var wg;function vS(){if(wg)return Kf.exports;wg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Kf.exports=_S(),Kf.exports}var xS=vS();const Rd="182",SS=0,Cg=1,MS=2,Uc=1,A_=2,Wo=3,ps=0,Wn=1,Fi=2,Ca=0,zr=1,Dg=2,Ug=3,Lg=4,yS=5,Hs=100,ES=101,TS=102,bS=103,AS=104,RS=200,wS=201,CS=202,DS=203,Lh=204,Nh=205,US=206,LS=207,NS=208,OS=209,PS=210,zS=211,FS=212,IS=213,BS=214,Oh=0,Ph=1,zh=2,Ir=3,Fh=4,Ih=5,Bh=6,Hh=7,R_=0,HS=1,GS=2,Ki=0,w_=1,C_=2,D_=3,U_=4,L_=5,N_=6,O_=7,P_=300,ks=301,Br=302,Gh=303,Vh=304,Gc=306,Xh=1e3,wa=1001,kh=1002,Pn=1003,VS=1004,fc=1005,Bn=1006,th=1007,Vs=1008,di=1009,z_=1010,F_=1011,Zo=1012,wd=1013,$i=1014,Zi=1015,Ua=1016,Cd=1017,Dd=1018,jo=1020,I_=35902,B_=35899,H_=1021,G_=1022,Bi=1023,La=1026,Xs=1027,V_=1028,Ud=1029,Hr=1030,Ld=1031,Nd=1033,Lc=33776,Nc=33777,Oc=33778,Pc=33779,Wh=35840,qh=35841,Yh=35842,Zh=35843,jh=36196,Kh=37492,Qh=37496,Jh=37488,$h=37489,td=37490,ed=37491,nd=37808,id=37809,ad=37810,sd=37811,rd=37812,od=37813,ld=37814,cd=37815,ud=37816,fd=37817,hd=37818,dd=37819,pd=37820,md=37821,gd=36492,_d=36494,vd=36495,xd=36283,Sd=36284,Md=36285,yd=36286,XS=3200,X_=0,kS=1,fs="",Ai="srgb",Gr="srgb-linear",Fc="linear",qe="srgb",yr=7680,Ng=519,WS=512,qS=513,YS=514,Od=515,ZS=516,jS=517,Pd=518,KS=519,Og=35044,Pg="300 es",ji=2e3,Ic=2001;function k_(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Bc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function QS(){const o=Bc("canvas");return o.style.display="block",o}const zg={};function Fg(...o){const e="THREE."+o.shift();console.log(e,...o)}function pe(...o){const e="THREE."+o.shift();console.warn(e,...o)}function Ge(...o){const e="THREE."+o.shift();console.error(e,...o)}function Ko(...o){const e=o.join(" ");e in zg||(zg[e]=!0,pe(...o))}function JS(o,e,i){return new Promise(function(s,l){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}class kr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,e);e.target=null}}}const Fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],eh=Math.PI/180,Ed=180/Math.PI;function Jo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Fn[o&255]+Fn[o>>8&255]+Fn[o>>16&255]+Fn[o>>24&255]+"-"+Fn[e&255]+Fn[e>>8&255]+"-"+Fn[e>>16&15|64]+Fn[e>>24&255]+"-"+Fn[i&63|128]+Fn[i>>8&255]+"-"+Fn[i>>16&255]+Fn[i>>24&255]+Fn[s&255]+Fn[s>>8&255]+Fn[s>>16&255]+Fn[s>>24&255]).toLowerCase()}function Ne(o,e,i){return Math.max(e,Math.min(i,o))}function $S(o,e){return(o%e+e)%e}function nh(o,e,i){return(1-i)*o+i*e}function Fo(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function ti(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Ve{constructor(e=0,i=0){Ve.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Ne(this.x,e.x,i.x),this.y=Ne(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Ne(this.x,e,i),this.y=Ne(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ne(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Ne(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-e.x,h=this.y-e.y;return this.x=u*s-h*l+e.x,this.y=u*l+h*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $o{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,u,h,d){let m=s[l+0],p=s[l+1],g=s[l+2],_=s[l+3],S=u[h+0],E=u[h+1],R=u[h+2],w=u[h+3];if(d<=0){e[i+0]=m,e[i+1]=p,e[i+2]=g,e[i+3]=_;return}if(d>=1){e[i+0]=S,e[i+1]=E,e[i+2]=R,e[i+3]=w;return}if(_!==w||m!==S||p!==E||g!==R){let M=m*S+p*E+g*R+_*w;M<0&&(S=-S,E=-E,R=-R,w=-w,M=-M);let x=1-d;if(M<.9995){const z=Math.acos(M),P=Math.sin(z);x=Math.sin(x*z)/P,d=Math.sin(d*z)/P,m=m*x+S*d,p=p*x+E*d,g=g*x+R*d,_=_*x+w*d}else{m=m*x+S*d,p=p*x+E*d,g=g*x+R*d,_=_*x+w*d;const z=1/Math.sqrt(m*m+p*p+g*g+_*_);m*=z,p*=z,g*=z,_*=z}}e[i]=m,e[i+1]=p,e[i+2]=g,e[i+3]=_}static multiplyQuaternionsFlat(e,i,s,l,u,h){const d=s[l],m=s[l+1],p=s[l+2],g=s[l+3],_=u[h],S=u[h+1],E=u[h+2],R=u[h+3];return e[i]=d*R+g*_+m*E-p*S,e[i+1]=m*R+g*S+p*_-d*E,e[i+2]=p*R+g*E+d*S-m*_,e[i+3]=g*R-d*_-m*S-p*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,u=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(s/2),g=d(l/2),_=d(u/2),S=m(s/2),E=m(l/2),R=m(u/2);switch(h){case"XYZ":this._x=S*g*_+p*E*R,this._y=p*E*_-S*g*R,this._z=p*g*R+S*E*_,this._w=p*g*_-S*E*R;break;case"YXZ":this._x=S*g*_+p*E*R,this._y=p*E*_-S*g*R,this._z=p*g*R-S*E*_,this._w=p*g*_+S*E*R;break;case"ZXY":this._x=S*g*_-p*E*R,this._y=p*E*_+S*g*R,this._z=p*g*R+S*E*_,this._w=p*g*_-S*E*R;break;case"ZYX":this._x=S*g*_-p*E*R,this._y=p*E*_+S*g*R,this._z=p*g*R-S*E*_,this._w=p*g*_+S*E*R;break;case"YZX":this._x=S*g*_+p*E*R,this._y=p*E*_+S*g*R,this._z=p*g*R-S*E*_,this._w=p*g*_-S*E*R;break;case"XZY":this._x=S*g*_-p*E*R,this._y=p*E*_-S*g*R,this._z=p*g*R+S*E*_,this._w=p*g*_+S*E*R;break;default:pe("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],g=i[6],_=i[10],S=s+d+_;if(S>0){const E=.5/Math.sqrt(S+1);this._w=.25/E,this._x=(g-m)*E,this._y=(u-p)*E,this._z=(h-l)*E}else if(s>d&&s>_){const E=2*Math.sqrt(1+s-d-_);this._w=(g-m)/E,this._x=.25*E,this._y=(l+h)/E,this._z=(u+p)/E}else if(d>_){const E=2*Math.sqrt(1+d-s-_);this._w=(u-p)/E,this._x=(l+h)/E,this._y=.25*E,this._z=(m+g)/E}else{const E=2*Math.sqrt(1+_-s-d);this._w=(h-l)/E,this._x=(u+p)/E,this._y=(m+g)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ne(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,u=e._z,h=e._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=s*g+h*d+l*p-u*m,this._y=l*g+h*m+u*d-s*p,this._z=u*g+h*p+s*m-l*d,this._w=h*g-s*d-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let s=e._x,l=e._y,u=e._z,h=e._w,d=this.dot(e);d<0&&(s=-s,l=-l,u=-u,h=-h,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),g=Math.sin(p);m=Math.sin(m*p)/g,i=Math.sin(i*p)/g,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class et{constructor(e=0,i=0,s=0){et.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Ig.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Ig.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=e.elements,h=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*h,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,u=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*l-d*s),g=2*(d*i-u*l),_=2*(u*s-h*i);return this.x=i+m*p+h*_-d*g,this.y=s+m*g+d*p-u*_,this.z=l+m*_+u*g-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Ne(this.x,e.x,i.x),this.y=Ne(this.y,e.y,i.y),this.z=Ne(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Ne(this.x,e,i),this.y=Ne(this.y,e,i),this.z=Ne(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ne(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,u=e.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-s*m,this.z=s*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return ih.copy(this).projectOnVector(e),this.sub(ih)}reflect(e){return this.sub(ih.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Ne(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ih=new et,Ig=new $o;class ve{constructor(e,i,s,l,u,h,d,m,p){ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,h,d,m,p)}set(e,i,s,l,u,h,d,m,p){const g=this.elements;return g[0]=e,g[1]=l,g[2]=d,g[3]=i,g[4]=u,g[5]=m,g[6]=s,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],g=s[4],_=s[7],S=s[2],E=s[5],R=s[8],w=l[0],M=l[3],x=l[6],z=l[1],P=l[4],L=l[7],F=l[2],I=l[5],N=l[8];return u[0]=h*w+d*z+m*F,u[3]=h*M+d*P+m*I,u[6]=h*x+d*L+m*N,u[1]=p*w+g*z+_*F,u[4]=p*M+g*P+_*I,u[7]=p*x+g*L+_*N,u[2]=S*w+E*z+R*F,u[5]=S*M+E*P+R*I,u[8]=S*x+E*L+R*N,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],g=e[8];return i*h*g-i*d*p-s*u*g+s*d*m+l*u*p-l*h*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],g=e[8],_=g*h-d*p,S=d*m-g*u,E=p*u-h*m,R=i*_+s*S+l*E;if(R===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/R;return e[0]=_*w,e[1]=(l*p-g*s)*w,e[2]=(d*s-l*h)*w,e[3]=S*w,e[4]=(g*i-l*m)*w,e[5]=(l*u-d*i)*w,e[6]=E*w,e[7]=(s*m-p*i)*w,e[8]=(h*i-s*u)*w,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(s*m,s*p,-s*(m*h+p*d)+h+e,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(ah.makeScale(e,i)),this}rotate(e){return this.premultiply(ah.makeRotation(-e)),this}translate(e,i){return this.premultiply(ah.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ah=new ve,Bg=new ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hg=new ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function tM(){const o={enabled:!0,workingColorSpace:Gr,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===qe&&(l.r=Da(l.r),l.g=Da(l.g),l.b=Da(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===qe&&(l.r=Fr(l.r),l.g=Fr(l.g),l.b=Fr(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===fs?Fc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return Ko("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return Ko("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Gr]:{primaries:e,whitePoint:s,transfer:Fc,toXYZ:Bg,fromXYZ:Hg,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Ai},outputColorSpaceConfig:{drawingBufferColorSpace:Ai}},[Ai]:{primaries:e,whitePoint:s,transfer:qe,toXYZ:Bg,fromXYZ:Hg,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Ai}}}),o}const ze=tM();function Da(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Fr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Er;class eM{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Er===void 0&&(Er=Bc("canvas")),Er.width=e.width,Er.height=e.height;const l=Er.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=Er}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Bc("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=Da(u[h]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Da(i[s]/255)*255):i[s]=Da(i[s]);return{data:i,width:e.width,height:e.height}}else return pe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let nM=0;class zd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nM++}),this.uuid=Jo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(sh(l[h].image)):u.push(sh(l[h]))}else u=sh(l);s.url=u}return i||(e.images[this.uuid]=s),s}}function sh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?eM.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(pe("Texture: Unable to serialize Texture."),{})}let iM=0;const rh=new et;class Hn extends kr{constructor(e=Hn.DEFAULT_IMAGE,i=Hn.DEFAULT_MAPPING,s=wa,l=wa,u=Bn,h=Vs,d=Bi,m=di,p=Hn.DEFAULT_ANISOTROPY,g=fs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:iM++}),this.uuid=Jo(),this.name="",this.source=new zd(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(rh).x}get height(){return this.source.getSize(rh).y}get depth(){return this.source.getSize(rh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){pe(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){pe(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==P_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xh:e.x=e.x-Math.floor(e.x);break;case wa:e.x=e.x<0?0:1;break;case kh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xh:e.y=e.y-Math.floor(e.y);break;case wa:e.y=e.y<0?0:1;break;case kh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=P_;Hn.DEFAULT_ANISOTROPY=1;class dn{constructor(e=0,i=0,s=0,l=1){dn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=this.w,h=e.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,u;const m=e.elements,p=m[0],g=m[4],_=m[8],S=m[1],E=m[5],R=m[9],w=m[2],M=m[6],x=m[10];if(Math.abs(g-S)<.01&&Math.abs(_-w)<.01&&Math.abs(R-M)<.01){if(Math.abs(g+S)<.1&&Math.abs(_+w)<.1&&Math.abs(R+M)<.1&&Math.abs(p+E+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const P=(p+1)/2,L=(E+1)/2,F=(x+1)/2,I=(g+S)/4,N=(_+w)/4,Z=(R+M)/4;return P>L&&P>F?P<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(P),l=I/s,u=N/s):L>F?L<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(L),s=I/l,u=Z/l):F<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(F),s=N/u,l=Z/u),this.set(s,l,u,i),this}let z=Math.sqrt((M-R)*(M-R)+(_-w)*(_-w)+(S-g)*(S-g));return Math.abs(z)<.001&&(z=1),this.x=(M-R)/z,this.y=(_-w)/z,this.z=(S-g)/z,this.w=Math.acos((p+E+x-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Ne(this.x,e.x,i.x),this.y=Ne(this.y,e.y,i.y),this.z=Ne(this.z,e.z,i.z),this.w=Ne(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Ne(this.x,e,i),this.y=Ne(this.y,e,i),this.z=Ne(this.z,e,i),this.w=Ne(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ne(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class aM extends kr{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new dn(0,0,e,i),this.scissorTest=!1,this.viewport=new dn(0,0,e,i);const l={width:e,height:i,depth:s.depth},u=new Hn(l);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:Bn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new zd(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qi extends aM{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class W_ extends Hn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=wa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class sM extends Hn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=wa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class tl{constructor(e=new et(1/0,1/0,1/0),i=new et(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Oi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Oi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Oi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,Oi):Oi.fromBufferAttribute(u,h),Oi.applyMatrix4(e.matrixWorld),this.expandByPoint(Oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),hc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),hc.copy(s.boundingBox)),hc.applyMatrix4(e.matrixWorld),this.union(hc)}const l=e.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Oi),Oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Io),dc.subVectors(this.max,Io),Tr.subVectors(e.a,Io),br.subVectors(e.b,Io),Ar.subVectors(e.c,Io),ss.subVectors(br,Tr),rs.subVectors(Ar,br),Ns.subVectors(Tr,Ar);let i=[0,-ss.z,ss.y,0,-rs.z,rs.y,0,-Ns.z,Ns.y,ss.z,0,-ss.x,rs.z,0,-rs.x,Ns.z,0,-Ns.x,-ss.y,ss.x,0,-rs.y,rs.x,0,-Ns.y,Ns.x,0];return!oh(i,Tr,br,Ar,dc)||(i=[1,0,0,0,1,0,0,0,1],!oh(i,Tr,br,Ar,dc))?!1:(pc.crossVectors(ss,rs),i=[pc.x,pc.y,pc.z],oh(i,Tr,br,Ar,dc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ea[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ea[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ea[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ea[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ea[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ea[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ea[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ea[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ea),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ea=[new et,new et,new et,new et,new et,new et,new et,new et],Oi=new et,hc=new tl,Tr=new et,br=new et,Ar=new et,ss=new et,rs=new et,Ns=new et,Io=new et,dc=new et,pc=new et,Os=new et;function oh(o,e,i,s,l){for(let u=0,h=o.length-3;u<=h;u+=3){Os.fromArray(o,u);const d=l.x*Math.abs(Os.x)+l.y*Math.abs(Os.y)+l.z*Math.abs(Os.z),m=e.dot(Os),p=i.dot(Os),g=s.dot(Os);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const rM=new tl,Bo=new et,lh=new et;class Fd{constructor(e=new et,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):rM.setFromPoints(e).getCenter(s);let l=0;for(let u=0,h=e.length;u<h;u++)l=Math.max(l,s.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Bo.subVectors(e,this.center);const i=Bo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Bo,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(lh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Bo.copy(e.center).add(lh)),this.expandByPoint(Bo.copy(e.center).sub(lh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ta=new et,ch=new et,mc=new et,os=new et,uh=new et,gc=new et,fh=new et;class oM{constructor(e=new et,i=new et(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ta)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Ta.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Ta.copy(this.origin).addScaledVector(this.direction,i),Ta.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){ch.copy(e).add(i).multiplyScalar(.5),mc.copy(i).sub(e).normalize(),os.copy(this.origin).sub(ch);const u=e.distanceTo(i)*.5,h=-this.direction.dot(mc),d=os.dot(this.direction),m=-os.dot(mc),p=os.lengthSq(),g=Math.abs(1-h*h);let _,S,E,R;if(g>0)if(_=h*m-d,S=h*d-m,R=u*g,_>=0)if(S>=-R)if(S<=R){const w=1/g;_*=w,S*=w,E=_*(_+h*S+2*d)+S*(h*_+S+2*m)+p}else S=u,_=Math.max(0,-(h*S+d)),E=-_*_+S*(S+2*m)+p;else S=-u,_=Math.max(0,-(h*S+d)),E=-_*_+S*(S+2*m)+p;else S<=-R?(_=Math.max(0,-(-h*u+d)),S=_>0?-u:Math.min(Math.max(-u,-m),u),E=-_*_+S*(S+2*m)+p):S<=R?(_=0,S=Math.min(Math.max(-u,-m),u),E=S*(S+2*m)+p):(_=Math.max(0,-(h*u+d)),S=_>0?u:Math.min(Math.max(-u,-m),u),E=-_*_+S*(S+2*m)+p);else S=h>0?-u:u,_=Math.max(0,-(h*S+d)),E=-_*_+S*(S+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(ch).addScaledVector(mc,S),E}intersectSphere(e,i){Ta.subVectors(e.center,this.origin);const s=Ta.dot(this.direction),l=Ta.dot(Ta)-s*s,u=e.radius*e.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,u,h,d,m;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,S=this.origin;return p>=0?(s=(e.min.x-S.x)*p,l=(e.max.x-S.x)*p):(s=(e.max.x-S.x)*p,l=(e.min.x-S.x)*p),g>=0?(u=(e.min.y-S.y)*g,h=(e.max.y-S.y)*g):(u=(e.max.y-S.y)*g,h=(e.min.y-S.y)*g),s>h||u>l||((u>s||isNaN(s))&&(s=u),(h<l||isNaN(l))&&(l=h),_>=0?(d=(e.min.z-S.z)*_,m=(e.max.z-S.z)*_):(d=(e.max.z-S.z)*_,m=(e.min.z-S.z)*_),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,Ta)!==null}intersectTriangle(e,i,s,l,u){uh.subVectors(i,e),gc.subVectors(s,e),fh.crossVectors(uh,gc);let h=this.direction.dot(fh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;os.subVectors(this.origin,e);const m=d*this.direction.dot(gc.crossVectors(os,gc));if(m<0)return null;const p=d*this.direction.dot(uh.cross(os));if(p<0||m+p>h)return null;const g=-d*os.dot(fh);return g<0?null:this.at(g/h,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pn{constructor(e,i,s,l,u,h,d,m,p,g,_,S,E,R,w,M){pn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,h,d,m,p,g,_,S,E,R,w,M)}set(e,i,s,l,u,h,d,m,p,g,_,S,E,R,w,M){const x=this.elements;return x[0]=e,x[4]=i,x[8]=s,x[12]=l,x[1]=u,x[5]=h,x[9]=d,x[13]=m,x[2]=p,x[6]=g,x[10]=_,x[14]=S,x[3]=E,x[7]=R,x[11]=w,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pn().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,s=e.elements,l=1/Rr.setFromMatrixColumn(e,0).length(),u=1/Rr.setFromMatrixColumn(e,1).length(),h=1/Rr.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,u=e.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),g=Math.cos(u),_=Math.sin(u);if(e.order==="XYZ"){const S=h*g,E=h*_,R=d*g,w=d*_;i[0]=m*g,i[4]=-m*_,i[8]=p,i[1]=E+R*p,i[5]=S-w*p,i[9]=-d*m,i[2]=w-S*p,i[6]=R+E*p,i[10]=h*m}else if(e.order==="YXZ"){const S=m*g,E=m*_,R=p*g,w=p*_;i[0]=S+w*d,i[4]=R*d-E,i[8]=h*p,i[1]=h*_,i[5]=h*g,i[9]=-d,i[2]=E*d-R,i[6]=w+S*d,i[10]=h*m}else if(e.order==="ZXY"){const S=m*g,E=m*_,R=p*g,w=p*_;i[0]=S-w*d,i[4]=-h*_,i[8]=R+E*d,i[1]=E+R*d,i[5]=h*g,i[9]=w-S*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const S=h*g,E=h*_,R=d*g,w=d*_;i[0]=m*g,i[4]=R*p-E,i[8]=S*p+w,i[1]=m*_,i[5]=w*p+S,i[9]=E*p-R,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const S=h*m,E=h*p,R=d*m,w=d*p;i[0]=m*g,i[4]=w-S*_,i[8]=R*_+E,i[1]=_,i[5]=h*g,i[9]=-d*g,i[2]=-p*g,i[6]=E*_+R,i[10]=S-w*_}else if(e.order==="XZY"){const S=h*m,E=h*p,R=d*m,w=d*p;i[0]=m*g,i[4]=-_,i[8]=p*g,i[1]=S*_+w,i[5]=h*g,i[9]=E*_-R,i[2]=R*_-E,i[6]=d*g,i[10]=w*_+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(lM,e,cM)}lookAt(e,i,s){const l=this.elements;return fi.subVectors(e,i),fi.lengthSq()===0&&(fi.z=1),fi.normalize(),ls.crossVectors(s,fi),ls.lengthSq()===0&&(Math.abs(s.z)===1?fi.x+=1e-4:fi.z+=1e-4,fi.normalize(),ls.crossVectors(s,fi)),ls.normalize(),_c.crossVectors(fi,ls),l[0]=ls.x,l[4]=_c.x,l[8]=fi.x,l[1]=ls.y,l[5]=_c.y,l[9]=fi.y,l[2]=ls.z,l[6]=_c.z,l[10]=fi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],g=s[1],_=s[5],S=s[9],E=s[13],R=s[2],w=s[6],M=s[10],x=s[14],z=s[3],P=s[7],L=s[11],F=s[15],I=l[0],N=l[4],Z=l[8],A=l[12],C=l[1],G=l[5],K=l[9],it=l[13],pt=l[2],ht=l[6],O=l[10],H=l[14],rt=l[3],ct=l[7],Tt=l[11],U=l[15];return u[0]=h*I+d*C+m*pt+p*rt,u[4]=h*N+d*G+m*ht+p*ct,u[8]=h*Z+d*K+m*O+p*Tt,u[12]=h*A+d*it+m*H+p*U,u[1]=g*I+_*C+S*pt+E*rt,u[5]=g*N+_*G+S*ht+E*ct,u[9]=g*Z+_*K+S*O+E*Tt,u[13]=g*A+_*it+S*H+E*U,u[2]=R*I+w*C+M*pt+x*rt,u[6]=R*N+w*G+M*ht+x*ct,u[10]=R*Z+w*K+M*O+x*Tt,u[14]=R*A+w*it+M*H+x*U,u[3]=z*I+P*C+L*pt+F*rt,u[7]=z*N+P*G+L*ht+F*ct,u[11]=z*Z+P*K+L*O+F*Tt,u[15]=z*A+P*it+L*H+F*U,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],u=e[12],h=e[1],d=e[5],m=e[9],p=e[13],g=e[2],_=e[6],S=e[10],E=e[14],R=e[3],w=e[7],M=e[11],x=e[15],z=m*E-p*S,P=d*E-p*_,L=d*S-m*_,F=h*E-p*g,I=h*S-m*g,N=h*_-d*g;return i*(w*z-M*P+x*L)-s*(R*z-M*F+x*I)+l*(R*P-w*F+x*N)-u*(R*L-w*I+M*N)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],g=e[8],_=e[9],S=e[10],E=e[11],R=e[12],w=e[13],M=e[14],x=e[15],z=_*M*p-w*S*p+w*m*E-d*M*E-_*m*x+d*S*x,P=R*S*p-g*M*p-R*m*E+h*M*E+g*m*x-h*S*x,L=g*w*p-R*_*p+R*d*E-h*w*E-g*d*x+h*_*x,F=R*_*m-g*w*m-R*d*S+h*w*S+g*d*M-h*_*M,I=i*z+s*P+l*L+u*F;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/I;return e[0]=z*N,e[1]=(w*S*u-_*M*u-w*l*E+s*M*E+_*l*x-s*S*x)*N,e[2]=(d*M*u-w*m*u+w*l*p-s*M*p-d*l*x+s*m*x)*N,e[3]=(_*m*u-d*S*u-_*l*p+s*S*p+d*l*E-s*m*E)*N,e[4]=P*N,e[5]=(g*M*u-R*S*u+R*l*E-i*M*E-g*l*x+i*S*x)*N,e[6]=(R*m*u-h*M*u-R*l*p+i*M*p+h*l*x-i*m*x)*N,e[7]=(h*S*u-g*m*u+g*l*p-i*S*p-h*l*E+i*m*E)*N,e[8]=L*N,e[9]=(R*_*u-g*w*u-R*s*E+i*w*E+g*s*x-i*_*x)*N,e[10]=(h*w*u-R*d*u+R*s*p-i*w*p-h*s*x+i*d*x)*N,e[11]=(g*d*u-h*_*u-g*s*p+i*_*p+h*s*E-i*d*E)*N,e[12]=F*N,e[13]=(g*w*l-R*_*l+R*s*S-i*w*S-g*s*M+i*_*M)*N,e[14]=(R*d*l-h*w*l-R*s*m+i*w*m+h*s*M-i*d*M)*N,e[15]=(h*_*l-g*d*l+g*s*m-i*_*m-h*s*S+i*d*S)*N,this}scale(e){const i=this.elements,s=e.x,l=e.y,u=e.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,h=e.x,d=e.y,m=e.z,p=u*h,g=u*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+s,g*m-l*h,0,p*m-l*d,g*m+l*h,u*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,u,h){return this.set(1,s,u,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,g=h+h,_=d+d,S=u*p,E=u*g,R=u*_,w=h*g,M=h*_,x=d*_,z=m*p,P=m*g,L=m*_,F=s.x,I=s.y,N=s.z;return l[0]=(1-(w+x))*F,l[1]=(E+L)*F,l[2]=(R-P)*F,l[3]=0,l[4]=(E-L)*I,l[5]=(1-(S+x))*I,l[6]=(M+z)*I,l[7]=0,l[8]=(R+P)*N,l[9]=(M-z)*N,l[10]=(1-(S+w))*N,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;if(e.x=l[12],e.y=l[13],e.z=l[14],this.determinant()===0)return s.set(1,1,1),i.identity(),this;let u=Rr.set(l[0],l[1],l[2]).length();const h=Rr.set(l[4],l[5],l[6]).length(),d=Rr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),Pi.copy(this);const p=1/u,g=1/h,_=1/d;return Pi.elements[0]*=p,Pi.elements[1]*=p,Pi.elements[2]*=p,Pi.elements[4]*=g,Pi.elements[5]*=g,Pi.elements[6]*=g,Pi.elements[8]*=_,Pi.elements[9]*=_,Pi.elements[10]*=_,i.setFromRotationMatrix(Pi),s.x=u,s.y=h,s.z=d,this}makePerspective(e,i,s,l,u,h,d=ji,m=!1){const p=this.elements,g=2*u/(i-e),_=2*u/(s-l),S=(i+e)/(i-e),E=(s+l)/(s-l);let R,w;if(m)R=u/(h-u),w=h*u/(h-u);else if(d===ji)R=-(h+u)/(h-u),w=-2*h*u/(h-u);else if(d===Ic)R=-h/(h-u),w=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=_,p[9]=E,p[13]=0,p[2]=0,p[6]=0,p[10]=R,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,s,l,u,h,d=ji,m=!1){const p=this.elements,g=2/(i-e),_=2/(s-l),S=-(i+e)/(i-e),E=-(s+l)/(s-l);let R,w;if(m)R=1/(h-u),w=h/(h-u);else if(d===ji)R=-2/(h-u),w=-(h+u)/(h-u);else if(d===Ic)R=-1/(h-u),w=-u/(h-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=_,p[9]=0,p[13]=E,p[2]=0,p[6]=0,p[10]=R,p[14]=w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const Rr=new et,Pi=new pn,lM=new et(0,0,0),cM=new et(1,1,1),ls=new et,_c=new et,fi=new et,Gg=new pn,Vg=new $o;class ta{constructor(e=0,i=0,s=0,l=ta.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],g=l[9],_=l[2],S=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(Ne(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,E),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ne(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,E),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,u),this._z=0);break;case"ZXY":this._x=Math.asin(Ne(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-_,E),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Ne(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(S,E),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Ne(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,u)):(this._x=0,this._y=Math.atan2(d,E));break;case"XZY":this._z=Math.asin(-Ne(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-g,E),this._y=0);break;default:pe("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return Gg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gg,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Vg.setFromEuler(this),this.setFromQuaternion(Vg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ta.DEFAULT_ORDER="XYZ";class q_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let uM=0;const Xg=new et,wr=new $o,ba=new pn,vc=new et,Ho=new et,fM=new et,hM=new $o,kg=new et(1,0,0),Wg=new et(0,1,0),qg=new et(0,0,1),Yg={type:"added"},dM={type:"removed"},Cr={type:"childadded",child:null},hh={type:"childremoved",child:null};class Gn extends kr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uM++}),this.uuid=Jo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gn.DEFAULT_UP.clone();const e=new et,i=new ta,s=new $o,l=new et(1,1,1);function u(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new pn},normalMatrix:{value:new ve}}),this.matrix=new pn,this.matrixWorld=new pn,this.matrixAutoUpdate=Gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new q_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return wr.setFromAxisAngle(e,i),this.quaternion.multiply(wr),this}rotateOnWorldAxis(e,i){return wr.setFromAxisAngle(e,i),this.quaternion.premultiply(wr),this}rotateX(e){return this.rotateOnAxis(kg,e)}rotateY(e){return this.rotateOnAxis(Wg,e)}rotateZ(e){return this.rotateOnAxis(qg,e)}translateOnAxis(e,i){return Xg.copy(e).applyQuaternion(this.quaternion),this.position.add(Xg.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(kg,e)}translateY(e){return this.translateOnAxis(Wg,e)}translateZ(e){return this.translateOnAxis(qg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ba.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?vc.copy(e):vc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Ho.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ba.lookAt(Ho,vc,this.up):ba.lookAt(vc,Ho,this.up),this.quaternion.setFromRotationMatrix(ba),l&&(ba.extractRotation(l.matrixWorld),wr.setFromRotationMatrix(ba),this.quaternion.premultiply(wr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Ge("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yg),Cr.child=e,this.dispatchEvent(Cr),Cr.child=null):Ge("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(dM),hh.child=e,this.dispatchEvent(hh),hh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ba.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ba.multiply(e.parent.matrixWorld)),e.applyMatrix4(ba),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yg),Cr.child=e,this.dispatchEvent(Cr),Cr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,e,fM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,hM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const _=m[p];u(e.shapes,_)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(e.materials,this.material[m]));l.material=d}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),g=h(e.images),_=h(e.shapes),S=h(e.skeletons),E=h(e.animations),R=h(e.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),_.length>0&&(s.shapes=_),S.length>0&&(s.skeletons=S),E.length>0&&(s.animations=E),R.length>0&&(s.nodes=R)}return s.object=l,s;function h(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}Gn.DEFAULT_UP=new et(0,1,0);Gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const zi=new et,Aa=new et,dh=new et,Ra=new et,Dr=new et,Ur=new et,Zg=new et,ph=new et,mh=new et,gh=new et,_h=new dn,vh=new dn,xh=new dn;class Ii{constructor(e=new et,i=new et,s=new et){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),zi.subVectors(e,i),l.cross(zi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,s,l,u){zi.subVectors(l,i),Aa.subVectors(s,i),dh.subVectors(e,i);const h=zi.dot(zi),d=zi.dot(Aa),m=zi.dot(dh),p=Aa.dot(Aa),g=Aa.dot(dh),_=h*p-d*d;if(_===0)return u.set(0,0,0),null;const S=1/_,E=(p*m-d*g)*S,R=(h*g-d*m)*S;return u.set(1-E-R,R,E)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,Ra)===null?!1:Ra.x>=0&&Ra.y>=0&&Ra.x+Ra.y<=1}static getInterpolation(e,i,s,l,u,h,d,m){return this.getBarycoord(e,i,s,l,Ra)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,Ra.x),m.addScaledVector(h,Ra.y),m.addScaledVector(d,Ra.z),m)}static getInterpolatedAttribute(e,i,s,l,u,h){return _h.setScalar(0),vh.setScalar(0),xh.setScalar(0),_h.fromBufferAttribute(e,i),vh.fromBufferAttribute(e,s),xh.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(_h,u.x),h.addScaledVector(vh,u.y),h.addScaledVector(xh,u.z),h}static isFrontFacing(e,i,s,l){return zi.subVectors(s,i),Aa.subVectors(e,i),zi.cross(Aa).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zi.subVectors(this.c,this.b),Aa.subVectors(this.a,this.b),zi.cross(Aa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ii.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ii.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,u){return Ii.getInterpolation(e,this.a,this.b,this.c,i,s,l,u)}containsPoint(e){return Ii.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ii.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,u=this.c;let h,d;Dr.subVectors(l,s),Ur.subVectors(u,s),ph.subVectors(e,s);const m=Dr.dot(ph),p=Ur.dot(ph);if(m<=0&&p<=0)return i.copy(s);mh.subVectors(e,l);const g=Dr.dot(mh),_=Ur.dot(mh);if(g>=0&&_<=g)return i.copy(l);const S=m*_-g*p;if(S<=0&&m>=0&&g<=0)return h=m/(m-g),i.copy(s).addScaledVector(Dr,h);gh.subVectors(e,u);const E=Dr.dot(gh),R=Ur.dot(gh);if(R>=0&&E<=R)return i.copy(u);const w=E*p-m*R;if(w<=0&&p>=0&&R<=0)return d=p/(p-R),i.copy(s).addScaledVector(Ur,d);const M=g*R-E*_;if(M<=0&&_-g>=0&&E-R>=0)return Zg.subVectors(u,l),d=(_-g)/(_-g+(E-R)),i.copy(l).addScaledVector(Zg,d);const x=1/(M+w+S);return h=w*x,d=S*x,i.copy(s).addScaledVector(Dr,h).addScaledVector(Ur,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Y_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cs={h:0,s:0,l:0},xc={h:0,s:0,l:0};function Sh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Fe{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Ai){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ze.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=ze.workingColorSpace){return this.r=e,this.g=i,this.b=s,ze.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=ze.workingColorSpace){if(e=$S(e,1),i=Ne(i,0,1),s=Ne(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,h=2*s-u;this.r=Sh(h,u,e+1/3),this.g=Sh(h,u,e),this.b=Sh(h,u,e-1/3)}return ze.colorSpaceToWorking(this,l),this}setStyle(e,i=Ai){function s(u){u!==void 0&&parseFloat(u)<1&&pe("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:pe("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);pe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Ai){const s=Y_[e.toLowerCase()];return s!==void 0?this.setHex(s,i):pe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Da(e.r),this.g=Da(e.g),this.b=Da(e.b),this}copyLinearToSRGB(e){return this.r=Fr(e.r),this.g=Fr(e.g),this.b=Fr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ai){return ze.workingToColorSpace(In.copy(this),e),Math.round(Ne(In.r*255,0,255))*65536+Math.round(Ne(In.g*255,0,255))*256+Math.round(Ne(In.b*255,0,255))}getHexString(e=Ai){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=ze.workingColorSpace){ze.workingToColorSpace(In.copy(this),i);const s=In.r,l=In.g,u=In.b,h=Math.max(s,l,u),d=Math.min(s,l,u);let m,p;const g=(d+h)/2;if(d===h)m=0,p=0;else{const _=h-d;switch(p=g<=.5?_/(h+d):_/(2-h-d),h){case s:m=(l-u)/_+(l<u?6:0);break;case l:m=(u-s)/_+2;break;case u:m=(s-l)/_+4;break}m/=6}return e.h=m,e.s=p,e.l=g,e}getRGB(e,i=ze.workingColorSpace){return ze.workingToColorSpace(In.copy(this),i),e.r=In.r,e.g=In.g,e.b=In.b,e}getStyle(e=Ai){ze.workingToColorSpace(In.copy(this),e);const i=In.r,s=In.g,l=In.b;return e!==Ai?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(cs),this.setHSL(cs.h+e,cs.s+i,cs.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(cs),e.getHSL(xc);const s=nh(cs.h,xc.h,i),l=nh(cs.s,xc.s,i),u=nh(cs.l,xc.l,i);return this.setHSL(s,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const In=new Fe;Fe.NAMES=Y_;let pM=0;class el extends kr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pM++}),this.uuid=Jo(),this.name="",this.type="Material",this.blending=zr,this.side=ps,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lh,this.blendDst=Nh,this.blendEquation=Hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=Ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ng,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yr,this.stencilZFail=yr,this.stencilZPass=yr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){pe(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){pe(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==zr&&(s.blending=this.blending),this.side!==ps&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Lh&&(s.blendSrc=this.blendSrc),this.blendDst!==Nh&&(s.blendDst=this.blendDst),this.blendEquation!==Hs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Ir&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ng&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==yr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==yr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==yr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(e.textures),h=l(e.images);u.length>0&&(s.textures=u),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Z_ extends el{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ta,this.combine=R_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yn=new et,Sc=new Ve;let mM=0;class Ji{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:mM++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=Og,this.updateRanges=[],this.gpuType=Zi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Sc.fromBufferAttribute(this,i),Sc.applyMatrix3(e),this.setXY(i,Sc.x,Sc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)yn.fromBufferAttribute(this,i),yn.applyMatrix3(e),this.setXYZ(i,yn.x,yn.y,yn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)yn.fromBufferAttribute(this,i),yn.applyMatrix4(e),this.setXYZ(i,yn.x,yn.y,yn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)yn.fromBufferAttribute(this,i),yn.applyNormalMatrix(e),this.setXYZ(i,yn.x,yn.y,yn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)yn.fromBufferAttribute(this,i),yn.transformDirection(e),this.setXYZ(i,yn.x,yn.y,yn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Fo(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=ti(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Fo(i,this.array)),i}setX(e,i){return this.normalized&&(i=ti(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Fo(i,this.array)),i}setY(e,i){return this.normalized&&(i=ti(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Fo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=ti(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Fo(i,this.array)),i}setW(e,i){return this.normalized&&(i=ti(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=ti(i,this.array),s=ti(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=ti(i,this.array),s=ti(s,this.array),l=ti(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,u){return e*=this.itemSize,this.normalized&&(i=ti(i,this.array),s=ti(s,this.array),l=ti(l,this.array),u=ti(u,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Og&&(e.usage=this.usage),e}}class j_ extends Ji{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class K_ extends Ji{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class qn extends Ji{constructor(e,i,s){super(new Float32Array(e),i,s)}}let gM=0;const bi=new pn,Mh=new Gn,Lr=new et,hi=new tl,Go=new tl,Dn=new et;class Hi extends kr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gM++}),this.uuid=Jo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(k_(e)?K_:j_)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new ve().getNormalMatrix(e);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bi.makeRotationFromQuaternion(e),this.applyMatrix4(bi),this}rotateX(e){return bi.makeRotationX(e),this.applyMatrix4(bi),this}rotateY(e){return bi.makeRotationY(e),this.applyMatrix4(bi),this}rotateZ(e){return bi.makeRotationZ(e),this.applyMatrix4(bi),this}translate(e,i,s){return bi.makeTranslation(e,i,s),this.applyMatrix4(bi),this}scale(e,i,s){return bi.makeScale(e,i,s),this.applyMatrix4(bi),this}lookAt(e){return Mh.lookAt(e),Mh.updateMatrix(),this.applyMatrix4(Mh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Lr).negate(),this.translate(Lr.x,Lr.y,Lr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new qn(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&pe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new et(-1/0,-1/0,-1/0),new et(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];hi.setFromBufferAttribute(u),this.morphTargetsRelative?(Dn.addVectors(this.boundingBox.min,hi.min),this.boundingBox.expandByPoint(Dn),Dn.addVectors(this.boundingBox.max,hi.max),this.boundingBox.expandByPoint(Dn)):(this.boundingBox.expandByPoint(hi.min),this.boundingBox.expandByPoint(hi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ge('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fd);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new et,1/0);return}if(e){const s=this.boundingSphere.center;if(hi.setFromBufferAttribute(e),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];Go.setFromBufferAttribute(d),this.morphTargetsRelative?(Dn.addVectors(hi.min,Go.min),hi.expandByPoint(Dn),Dn.addVectors(hi.max,Go.max),hi.expandByPoint(Dn)):(hi.expandByPoint(Go.min),hi.expandByPoint(Go.max))}hi.getCenter(s);let l=0;for(let u=0,h=e.count;u<h;u++)Dn.fromBufferAttribute(e,u),l=Math.max(l,s.distanceToSquared(Dn));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)Dn.fromBufferAttribute(d,p),m&&(Lr.fromBufferAttribute(e,p),Dn.add(Lr)),l=Math.max(l,s.distanceToSquared(Dn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ge('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ge("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ji(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let Z=0;Z<s.count;Z++)d[Z]=new et,m[Z]=new et;const p=new et,g=new et,_=new et,S=new Ve,E=new Ve,R=new Ve,w=new et,M=new et;function x(Z,A,C){p.fromBufferAttribute(s,Z),g.fromBufferAttribute(s,A),_.fromBufferAttribute(s,C),S.fromBufferAttribute(u,Z),E.fromBufferAttribute(u,A),R.fromBufferAttribute(u,C),g.sub(p),_.sub(p),E.sub(S),R.sub(S);const G=1/(E.x*R.y-R.x*E.y);isFinite(G)&&(w.copy(g).multiplyScalar(R.y).addScaledVector(_,-E.y).multiplyScalar(G),M.copy(_).multiplyScalar(E.x).addScaledVector(g,-R.x).multiplyScalar(G),d[Z].add(w),d[A].add(w),d[C].add(w),m[Z].add(M),m[A].add(M),m[C].add(M))}let z=this.groups;z.length===0&&(z=[{start:0,count:e.count}]);for(let Z=0,A=z.length;Z<A;++Z){const C=z[Z],G=C.start,K=C.count;for(let it=G,pt=G+K;it<pt;it+=3)x(e.getX(it+0),e.getX(it+1),e.getX(it+2))}const P=new et,L=new et,F=new et,I=new et;function N(Z){F.fromBufferAttribute(l,Z),I.copy(F);const A=d[Z];P.copy(A),P.sub(F.multiplyScalar(F.dot(A))).normalize(),L.crossVectors(I,A);const G=L.dot(m[Z])<0?-1:1;h.setXYZW(Z,P.x,P.y,P.z,G)}for(let Z=0,A=z.length;Z<A;++Z){const C=z[Z],G=C.start,K=C.count;for(let it=G,pt=G+K;it<pt;it+=3)N(e.getX(it+0)),N(e.getX(it+1)),N(e.getX(it+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ji(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let S=0,E=s.count;S<E;S++)s.setXYZ(S,0,0,0);const l=new et,u=new et,h=new et,d=new et,m=new et,p=new et,g=new et,_=new et;if(e)for(let S=0,E=e.count;S<E;S+=3){const R=e.getX(S+0),w=e.getX(S+1),M=e.getX(S+2);l.fromBufferAttribute(i,R),u.fromBufferAttribute(i,w),h.fromBufferAttribute(i,M),g.subVectors(h,u),_.subVectors(l,u),g.cross(_),d.fromBufferAttribute(s,R),m.fromBufferAttribute(s,w),p.fromBufferAttribute(s,M),d.add(g),m.add(g),p.add(g),s.setXYZ(R,d.x,d.y,d.z),s.setXYZ(w,m.x,m.y,m.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let S=0,E=i.count;S<E;S+=3)l.fromBufferAttribute(i,S+0),u.fromBufferAttribute(i,S+1),h.fromBufferAttribute(i,S+2),g.subVectors(h,u),_.subVectors(l,u),g.cross(_),s.setXYZ(S+0,g.x,g.y,g.z),s.setXYZ(S+1,g.x,g.y,g.z),s.setXYZ(S+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)Dn.fromBufferAttribute(e,i),Dn.normalize(),e.setXYZ(i,Dn.x,Dn.y,Dn.z)}toNonIndexed(){function e(d,m){const p=d.array,g=d.itemSize,_=d.normalized,S=new p.constructor(m.length*g);let E=0,R=0;for(let w=0,M=m.length;w<M;w++){d.isInterleavedBufferAttribute?E=m[w]*d.data.stride+d.offset:E=m[w]*g;for(let x=0;x<g;x++)S[R++]=p[E++]}return new Ji(S,g,_)}if(this.index===null)return pe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Hi,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,s);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let g=0,_=p.length;g<_;g++){const S=p[g],E=e(S,s);m.push(E)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let _=0,S=p.length;_<S;_++){const E=p[_];g.push(E.toJSON(e.data))}g.length>0&&(l[m]=g,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const u=e.morphAttributes;for(const p in u){const g=[],_=u[p];for(let S=0,E=_.length;S<E;S++)g.push(_[S].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,g=h.length;p<g;p++){const _=h[p];this.addGroup(_.start,_.count,_.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const jg=new pn,Ps=new oM,Mc=new Fd,Kg=new et,yc=new et,Ec=new et,Tc=new et,yh=new et,bc=new et,Qg=new et,Ac=new et;class Jt extends Gn{constructor(e=new Hi,i=new Z_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(u&&d){bc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const g=d[m],_=u[m];g!==0&&(yh.fromBufferAttribute(_,e),h?bc.addScaledVector(yh,g):bc.addScaledVector(yh.sub(i),g))}i.add(bc)}return i}raycast(e,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Mc.copy(s.boundingSphere),Mc.applyMatrix4(u),Ps.copy(e.ray).recast(e.near),!(Mc.containsPoint(Ps.origin)===!1&&(Ps.intersectSphere(Mc,Kg)===null||Ps.origin.distanceToSquared(Kg)>(e.far-e.near)**2))&&(jg.copy(u).invert(),Ps.copy(e.ray).applyMatrix4(jg),!(s.boundingBox!==null&&Ps.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Ps)))}_computeIntersections(e,i,s){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,g=u.attributes.uv1,_=u.attributes.normal,S=u.groups,E=u.drawRange;if(d!==null)if(Array.isArray(h))for(let R=0,w=S.length;R<w;R++){const M=S[R],x=h[M.materialIndex],z=Math.max(M.start,E.start),P=Math.min(d.count,Math.min(M.start+M.count,E.start+E.count));for(let L=z,F=P;L<F;L+=3){const I=d.getX(L),N=d.getX(L+1),Z=d.getX(L+2);l=Rc(this,x,e,s,p,g,_,I,N,Z),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const R=Math.max(0,E.start),w=Math.min(d.count,E.start+E.count);for(let M=R,x=w;M<x;M+=3){const z=d.getX(M),P=d.getX(M+1),L=d.getX(M+2);l=Rc(this,h,e,s,p,g,_,z,P,L),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let R=0,w=S.length;R<w;R++){const M=S[R],x=h[M.materialIndex],z=Math.max(M.start,E.start),P=Math.min(m.count,Math.min(M.start+M.count,E.start+E.count));for(let L=z,F=P;L<F;L+=3){const I=L,N=L+1,Z=L+2;l=Rc(this,x,e,s,p,g,_,I,N,Z),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const R=Math.max(0,E.start),w=Math.min(m.count,E.start+E.count);for(let M=R,x=w;M<x;M+=3){const z=M,P=M+1,L=M+2;l=Rc(this,h,e,s,p,g,_,z,P,L),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function _M(o,e,i,s,l,u,h,d){let m;if(e.side===Wn?m=s.intersectTriangle(h,u,l,!0,d):m=s.intersectTriangle(l,u,h,e.side===ps,d),m===null)return null;Ac.copy(d),Ac.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(Ac);return p<i.near||p>i.far?null:{distance:p,point:Ac.clone(),object:o}}function Rc(o,e,i,s,l,u,h,d,m,p){o.getVertexPosition(d,yc),o.getVertexPosition(m,Ec),o.getVertexPosition(p,Tc);const g=_M(o,e,i,s,yc,Ec,Tc,Qg);if(g){const _=new et;Ii.getBarycoord(Qg,yc,Ec,Tc,_),l&&(g.uv=Ii.getInterpolatedAttribute(l,d,m,p,_,new Ve)),u&&(g.uv1=Ii.getInterpolatedAttribute(u,d,m,p,_,new Ve)),h&&(g.normal=Ii.getInterpolatedAttribute(h,d,m,p,_,new et),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const S={a:d,b:m,c:p,normal:new et,materialIndex:0};Ii.getNormal(yc,Ec,Tc,S.normal),g.face=S,g.barycoord=_}return g}class re extends Hi{constructor(e=1,i=1,s=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],g=[],_=[];let S=0,E=0;R("z","y","x",-1,-1,s,i,e,h,u,0),R("z","y","x",1,-1,s,i,-e,h,u,1),R("x","z","y",1,1,e,s,i,l,h,2),R("x","z","y",1,-1,e,s,-i,l,h,3),R("x","y","z",1,-1,e,i,s,l,u,4),R("x","y","z",-1,-1,e,i,-s,l,u,5),this.setIndex(m),this.setAttribute("position",new qn(p,3)),this.setAttribute("normal",new qn(g,3)),this.setAttribute("uv",new qn(_,2));function R(w,M,x,z,P,L,F,I,N,Z,A){const C=L/N,G=F/Z,K=L/2,it=F/2,pt=I/2,ht=N+1,O=Z+1;let H=0,rt=0;const ct=new et;for(let Tt=0;Tt<O;Tt++){const U=Tt*G-it;for(let st=0;st<ht;st++){const St=st*C-K;ct[w]=St*z,ct[M]=U*P,ct[x]=pt,p.push(ct.x,ct.y,ct.z),ct[w]=0,ct[M]=0,ct[x]=I>0?1:-1,g.push(ct.x,ct.y,ct.z),_.push(st/N),_.push(1-Tt/Z),H+=1}}for(let Tt=0;Tt<Z;Tt++)for(let U=0;U<N;U++){const st=S+U+ht*Tt,St=S+U+ht*(Tt+1),Ut=S+(U+1)+ht*(Tt+1),kt=S+(U+1)+ht*Tt;m.push(st,St,kt),m.push(St,Ut,kt),rt+=6}d.addGroup(E,rt,A),E+=rt,S+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new re(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Vr(o){const e={};for(const i in o){e[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(pe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function kn(o){const e={};for(let i=0;i<o.length;i++){const s=Vr(o[i]);for(const l in s)e[l]=s[l]}return e}function vM(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function Q_(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ze.workingColorSpace}const xM={clone:Vr,merge:kn};var SM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,MM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ea extends el{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=SM,this.fragmentShader=MM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vr(e.uniforms),this.uniformsGroups=vM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class J_ extends Gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pn,this.projectionMatrix=new pn,this.projectionMatrixInverse=new pn,this.coordinateSystem=ji,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const us=new et,Jg=new Ve,$g=new Ve;class Ri extends J_{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Ed*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(eh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ed*2*Math.atan(Math.tan(eh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){us.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(us.x,us.y).multiplyScalar(-e/us.z),us.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(us.x,us.y).multiplyScalar(-e/us.z)}getViewSize(e,i){return this.getViewBounds(e,Jg,$g),i.subVectors($g,Jg)}setViewOffset(e,i,s,l,u,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(eh*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Nr=-90,Or=1;class yM extends Gn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ri(Nr,Or,e,i);l.layers=this.layers,this.add(l);const u=new Ri(Nr,Or,e,i);u.layers=this.layers,this.add(u);const h=new Ri(Nr,Or,e,i);h.layers=this.layers,this.add(h);const d=new Ri(Nr,Or,e,i);d.layers=this.layers,this.add(d);const m=new Ri(Nr,Or,e,i);m.layers=this.layers,this.add(m);const p=new Ri(Nr,Or,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(e===ji)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Ic)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,g]=this.children,_=e.getRenderTarget(),S=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),R=e.xr.enabled;e.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,u),e.setRenderTarget(s,1,l),e.render(i,h),e.setRenderTarget(s,2,l),e.render(i,d),e.setRenderTarget(s,3,l),e.render(i,m),e.setRenderTarget(s,4,l),e.render(i,p),s.texture.generateMipmaps=w,e.setRenderTarget(s,5,l),e.render(i,g),e.setRenderTarget(_,S,E),e.xr.enabled=R,s.texture.needsPMREMUpdate=!0}}class $_ extends Hn{constructor(e=[],i=ks,s,l,u,h,d,m,p,g){super(e,i,s,l,u,h,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class tv extends Qi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new $_(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new re(5,5,5),u=new ea({name:"CubemapFromEquirect",uniforms:Vr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Wn,blending:Ca});u.uniforms.tEquirect.value=i;const h=new Jt(l,u),d=i.minFilter;return i.minFilter===Vs&&(i.minFilter=Bn),new yM(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const u=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,s,l);e.setRenderTarget(u)}}class hs extends Gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const EM={type:"move"};class Eh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new et,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new et),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new et,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new et),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const w of e.hand.values()){const M=i.getJointPose(w,s),x=this._getHandJoint(p,w);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],S=g.position.distanceTo(_.position),E=.02,R=.005;p.inputState.pinching&&S>E+R?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&S<=E-R&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,s),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(EM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new hs;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}class Id{constructor(e,i=1,s=1e3){this.isFog=!0,this.name="",this.color=new Fe(e),this.near=i,this.far=s}clone(){return new Id(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class TM extends Gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ta,this.environmentIntensity=1,this.environmentRotation=new ta,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class bM extends Hn{constructor(e=null,i=1,s=1,l,u,h,d,m,p=Pn,g=Pn,_,S){super(null,h,d,m,p,g,l,u,_,S),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Th=new et,AM=new et,RM=new ve;class Bs{constructor(e=new et(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=Th.subVectors(s,i).cross(AM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(Th),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(s,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||RM.getNormalMatrix(e),l=this.coplanarPoint(Th).applyMatrix4(e),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zs=new Fd,wM=new Ve(.5,.5),wc=new et;class Bd{constructor(e=new Bs,i=new Bs,s=new Bs,l=new Bs,u=new Bs,h=new Bs){this.planes=[e,i,s,l,u,h]}set(e,i,s,l,u,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=ji,s=!1){const l=this.planes,u=e.elements,h=u[0],d=u[1],m=u[2],p=u[3],g=u[4],_=u[5],S=u[6],E=u[7],R=u[8],w=u[9],M=u[10],x=u[11],z=u[12],P=u[13],L=u[14],F=u[15];if(l[0].setComponents(p-h,E-g,x-R,F-z).normalize(),l[1].setComponents(p+h,E+g,x+R,F+z).normalize(),l[2].setComponents(p+d,E+_,x+w,F+P).normalize(),l[3].setComponents(p-d,E-_,x-w,F-P).normalize(),s)l[4].setComponents(m,S,M,L).normalize(),l[5].setComponents(p-m,E-S,x-M,F-L).normalize();else if(l[4].setComponents(p-m,E-S,x-M,F-L).normalize(),i===ji)l[5].setComponents(p+m,E+S,x+M,F+L).normalize();else if(i===Ic)l[5].setComponents(m,S,M,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),zs.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zs)}intersectsSprite(e){zs.center.set(0,0,0);const i=wM.distanceTo(e.center);return zs.radius=.7071067811865476+i,zs.applyMatrix4(e.matrixWorld),this.intersectsSphere(zs)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(wc.x=l.normal.x>0?e.max.x:e.min.x,wc.y=l.normal.y>0?e.max.y:e.min.y,wc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(wc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class CM extends Hn{constructor(e,i,s,l,u,h,d,m,p){super(e,i,s,l,u,h,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Qo extends Hn{constructor(e,i,s=$i,l,u,h,d=Pn,m=Pn,p,g=La,_=1){if(g!==La&&g!==Xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:e,height:i,depth:_};super(S,l,u,h,d,m,g,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new zd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class DM extends Qo{constructor(e,i=$i,s=ks,l,u,h=Pn,d=Pn,m,p=La){const g={width:e,height:e,depth:1},_=[g,g,g,g,g,g];super(e,e,i,s,l,u,h,d,m,p),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ev extends Hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Yo extends Hi{constructor(e=1,i=1,s=1,l=32,u=1,h=!1,d=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:i,height:s,radialSegments:l,heightSegments:u,openEnded:h,thetaStart:d,thetaLength:m};const p=this;l=Math.floor(l),u=Math.floor(u);const g=[],_=[],S=[],E=[];let R=0;const w=[],M=s/2;let x=0;z(),h===!1&&(e>0&&P(!0),i>0&&P(!1)),this.setIndex(g),this.setAttribute("position",new qn(_,3)),this.setAttribute("normal",new qn(S,3)),this.setAttribute("uv",new qn(E,2));function z(){const L=new et,F=new et;let I=0;const N=(i-e)/s;for(let Z=0;Z<=u;Z++){const A=[],C=Z/u,G=C*(i-e)+e;for(let K=0;K<=l;K++){const it=K/l,pt=it*m+d,ht=Math.sin(pt),O=Math.cos(pt);F.x=G*ht,F.y=-C*s+M,F.z=G*O,_.push(F.x,F.y,F.z),L.set(ht,N,O).normalize(),S.push(L.x,L.y,L.z),E.push(it,1-C),A.push(R++)}w.push(A)}for(let Z=0;Z<l;Z++)for(let A=0;A<u;A++){const C=w[A][Z],G=w[A+1][Z],K=w[A+1][Z+1],it=w[A][Z+1];(e>0||A!==0)&&(g.push(C,G,it),I+=3),(i>0||A!==u-1)&&(g.push(G,K,it),I+=3)}p.addGroup(x,I,0),x+=I}function P(L){const F=R,I=new Ve,N=new et;let Z=0;const A=L===!0?e:i,C=L===!0?1:-1;for(let K=1;K<=l;K++)_.push(0,M*C,0),S.push(0,C,0),E.push(.5,.5),R++;const G=R;for(let K=0;K<=l;K++){const pt=K/l*m+d,ht=Math.cos(pt),O=Math.sin(pt);N.x=A*O,N.y=M*C,N.z=A*ht,_.push(N.x,N.y,N.z),S.push(0,C,0),I.x=ht*.5+.5,I.y=O*.5*C+.5,E.push(I.x,I.y),R++}for(let K=0;K<l;K++){const it=F+K,pt=G+K;L===!0?g.push(pt,pt+1,it):g.push(pt+1,pt,it),Z+=3}p.addGroup(x,Z,L===!0?1:2),x+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Xr extends Hi{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const u=e/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,g=m+1,_=e/d,S=i/m,E=[],R=[],w=[],M=[];for(let x=0;x<g;x++){const z=x*S-h;for(let P=0;P<p;P++){const L=P*_-u;R.push(L,-z,0),w.push(0,0,1),M.push(P/d),M.push(1-x/m)}}for(let x=0;x<m;x++)for(let z=0;z<d;z++){const P=z+p*x,L=z+p*(x+1),F=z+1+p*(x+1),I=z+1+p*x;E.push(P,L,I),E.push(L,F,I)}this.setIndex(E),this.setAttribute("position",new qn(R,3)),this.setAttribute("normal",new qn(w,3)),this.setAttribute("uv",new qn(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Hc extends Hi{constructor(e=1,i=32,s=16,l=0,u=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:s,phiStart:l,phiLength:u,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(h+d,Math.PI);let p=0;const g=[],_=new et,S=new et,E=[],R=[],w=[],M=[];for(let x=0;x<=s;x++){const z=[],P=x/s;let L=0;x===0&&h===0?L=.5/i:x===s&&m===Math.PI&&(L=-.5/i);for(let F=0;F<=i;F++){const I=F/i;_.x=-e*Math.cos(l+I*u)*Math.sin(h+P*d),_.y=e*Math.cos(h+P*d),_.z=e*Math.sin(l+I*u)*Math.sin(h+P*d),R.push(_.x,_.y,_.z),S.copy(_).normalize(),w.push(S.x,S.y,S.z),M.push(I+L,1-P),z.push(p++)}g.push(z)}for(let x=0;x<s;x++)for(let z=0;z<i;z++){const P=g[x][z+1],L=g[x][z],F=g[x+1][z],I=g[x+1][z+1];(x!==0||h>0)&&E.push(P,L,I),(x!==s-1||m<Math.PI)&&E.push(L,F,I)}this.setIndex(E),this.setAttribute("position",new qn(R,3)),this.setAttribute("normal",new qn(w,3)),this.setAttribute("uv",new qn(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class UM extends ea{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ee extends el{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=X_,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ta,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class LM extends el{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=XS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class NM extends el{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class nv extends Gn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const bh=new pn,t_=new et,e_=new et;class OM{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.mapType=di,this.map=null,this.mapPass=null,this.matrix=new pn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bd,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new dn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;t_.setFromMatrixPosition(e.matrixWorld),i.position.copy(t_),e_.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(e_),i.updateMatrixWorld(),bh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bh,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(bh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Hd extends J_{constructor(e=-1,i=1,s=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-e,h=s+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class PM extends OM{constructor(){super(new Hd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class zM extends nv{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gn.DEFAULT_UP),this.updateMatrix(),this.target=new Gn,this.shadow=new PM}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class FM extends nv{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class IM extends Ri{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function n_(o,e,i,s){const l=BM(s);switch(i){case H_:return o*e;case V_:return o*e/l.components*l.byteLength;case Ud:return o*e/l.components*l.byteLength;case Hr:return o*e*2/l.components*l.byteLength;case Ld:return o*e*2/l.components*l.byteLength;case G_:return o*e*3/l.components*l.byteLength;case Bi:return o*e*4/l.components*l.byteLength;case Nd:return o*e*4/l.components*l.byteLength;case Lc:case Nc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Oc:case Pc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case qh:case Zh:return Math.max(o,16)*Math.max(e,8)/4;case Wh:case Yh:return Math.max(o,8)*Math.max(e,8)/2;case jh:case Kh:case Jh:case $h:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Qh:case td:case ed:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case nd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case id:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case ad:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case sd:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case rd:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case od:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case ld:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case cd:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case ud:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case fd:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case hd:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case dd:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case pd:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case md:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case gd:case _d:case vd:return Math.ceil(o/4)*Math.ceil(e/4)*16;case xd:case Sd:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Md:case yd:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function BM(o){switch(o){case di:case z_:return{byteLength:1,components:1};case Zo:case F_:case Ua:return{byteLength:2,components:1};case Cd:case Dd:return{byteLength:2,components:4};case $i:case wd:case Zi:return{byteLength:4,components:1};case I_:case B_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rd}}));typeof window<"u"&&(window.__THREE__?pe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rd);function iv(){let o=null,e=!1,i=null,s=null;function l(u,h){i(u,h),s=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function HM(o){const e=new WeakMap;function i(d,m){const p=d.array,g=d.usage,_=p.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,p,g),d.onUploadCallback();let E;if(p instanceof Float32Array)E=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)E=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?E=o.HALF_FLOAT:E=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)E=o.SHORT;else if(p instanceof Uint32Array)E=o.UNSIGNED_INT;else if(p instanceof Int32Array)E=o.INT;else if(p instanceof Int8Array)E=o.BYTE;else if(p instanceof Uint8Array)E=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)E=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:E,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:_}}function s(d,m,p){const g=m.array,_=m.updateRanges;if(o.bindBuffer(p,d),_.length===0)o.bufferSubData(p,0,g);else{_.sort((E,R)=>E.start-R.start);let S=0;for(let E=1;E<_.length;E++){const R=_[S],w=_[E];w.start<=R.start+R.count+1?R.count=Math.max(R.count,w.start+w.count-R.start):(++S,_[S]=w)}_.length=S+1;for(let E=0,R=_.length;E<R;E++){const w=_[E];o.bufferSubData(p,w.start*g.BYTES_PER_ELEMENT,g,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(o.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:h}}var GM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,VM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,XM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,WM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,YM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ZM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,KM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,QM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,JM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$M=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ty=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ey=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ny=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,iy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ay=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ry=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,oy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ly=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,cy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,uy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,fy=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,hy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,dy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,py=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,my=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_y="gl_FragColor = linearToOutputTexel( gl_FragColor );",vy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Sy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,My=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,yy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ey=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ty=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,by=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ay=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ry=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Cy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Uy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ly=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ny=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Oy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Py=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Iy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,By=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Hy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Gy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Vy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ky=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Yy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ky=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$y=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,eE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,iE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,sE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,rE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,uE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,gE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_E=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,SE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ME=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,EE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,TE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,bE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,AE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,RE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,wE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,CE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,DE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,UE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,LE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,NE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,OE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,PE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,zE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,FE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,IE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,BE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const HE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,GE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,YE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ZE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,jE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,KE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,QE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$E=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,eT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,sT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,oT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,lT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,fT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,mT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_T=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,vT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,xe={alphahash_fragment:GM,alphahash_pars_fragment:VM,alphamap_fragment:XM,alphamap_pars_fragment:kM,alphatest_fragment:WM,alphatest_pars_fragment:qM,aomap_fragment:YM,aomap_pars_fragment:ZM,batching_pars_vertex:jM,batching_vertex:KM,begin_vertex:QM,beginnormal_vertex:JM,bsdfs:$M,iridescence_fragment:ty,bumpmap_pars_fragment:ey,clipping_planes_fragment:ny,clipping_planes_pars_fragment:iy,clipping_planes_pars_vertex:ay,clipping_planes_vertex:sy,color_fragment:ry,color_pars_fragment:oy,color_pars_vertex:ly,color_vertex:cy,common:uy,cube_uv_reflection_fragment:fy,defaultnormal_vertex:hy,displacementmap_pars_vertex:dy,displacementmap_vertex:py,emissivemap_fragment:my,emissivemap_pars_fragment:gy,colorspace_fragment:_y,colorspace_pars_fragment:vy,envmap_fragment:xy,envmap_common_pars_fragment:Sy,envmap_pars_fragment:My,envmap_pars_vertex:yy,envmap_physical_pars_fragment:Ny,envmap_vertex:Ey,fog_vertex:Ty,fog_pars_vertex:by,fog_fragment:Ay,fog_pars_fragment:Ry,gradientmap_pars_fragment:wy,lightmap_pars_fragment:Cy,lights_lambert_fragment:Dy,lights_lambert_pars_fragment:Uy,lights_pars_begin:Ly,lights_toon_fragment:Oy,lights_toon_pars_fragment:Py,lights_phong_fragment:zy,lights_phong_pars_fragment:Fy,lights_physical_fragment:Iy,lights_physical_pars_fragment:By,lights_fragment_begin:Hy,lights_fragment_maps:Gy,lights_fragment_end:Vy,logdepthbuf_fragment:Xy,logdepthbuf_pars_fragment:ky,logdepthbuf_pars_vertex:Wy,logdepthbuf_vertex:qy,map_fragment:Yy,map_pars_fragment:Zy,map_particle_fragment:jy,map_particle_pars_fragment:Ky,metalnessmap_fragment:Qy,metalnessmap_pars_fragment:Jy,morphinstance_vertex:$y,morphcolor_vertex:tE,morphnormal_vertex:eE,morphtarget_pars_vertex:nE,morphtarget_vertex:iE,normal_fragment_begin:aE,normal_fragment_maps:sE,normal_pars_fragment:rE,normal_pars_vertex:oE,normal_vertex:lE,normalmap_pars_fragment:cE,clearcoat_normal_fragment_begin:uE,clearcoat_normal_fragment_maps:fE,clearcoat_pars_fragment:hE,iridescence_pars_fragment:dE,opaque_fragment:pE,packing:mE,premultiplied_alpha_fragment:gE,project_vertex:_E,dithering_fragment:vE,dithering_pars_fragment:xE,roughnessmap_fragment:SE,roughnessmap_pars_fragment:ME,shadowmap_pars_fragment:yE,shadowmap_pars_vertex:EE,shadowmap_vertex:TE,shadowmask_pars_fragment:bE,skinbase_vertex:AE,skinning_pars_vertex:RE,skinning_vertex:wE,skinnormal_vertex:CE,specularmap_fragment:DE,specularmap_pars_fragment:UE,tonemapping_fragment:LE,tonemapping_pars_fragment:NE,transmission_fragment:OE,transmission_pars_fragment:PE,uv_pars_fragment:zE,uv_pars_vertex:FE,uv_vertex:IE,worldpos_vertex:BE,background_vert:HE,background_frag:GE,backgroundCube_vert:VE,backgroundCube_frag:XE,cube_vert:kE,cube_frag:WE,depth_vert:qE,depth_frag:YE,distance_vert:ZE,distance_frag:jE,equirect_vert:KE,equirect_frag:QE,linedashed_vert:JE,linedashed_frag:$E,meshbasic_vert:tT,meshbasic_frag:eT,meshlambert_vert:nT,meshlambert_frag:iT,meshmatcap_vert:aT,meshmatcap_frag:sT,meshnormal_vert:rT,meshnormal_frag:oT,meshphong_vert:lT,meshphong_frag:cT,meshphysical_vert:uT,meshphysical_frag:fT,meshtoon_vert:hT,meshtoon_frag:dT,points_vert:pT,points_frag:mT,shadow_vert:gT,shadow_frag:_T,sprite_vert:vT,sprite_frag:xT},Vt={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ve},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ve}},envmap:{envMap:{value:null},envMapRotation:{value:new ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ve},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0},uvTransform:{value:new ve}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ve},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0}}},Yi={basic:{uniforms:kn([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.fog]),vertexShader:xe.meshbasic_vert,fragmentShader:xe.meshbasic_frag},lambert:{uniforms:kn([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,Vt.lights,{emissive:{value:new Fe(0)}}]),vertexShader:xe.meshlambert_vert,fragmentShader:xe.meshlambert_frag},phong:{uniforms:kn([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,Vt.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30}}]),vertexShader:xe.meshphong_vert,fragmentShader:xe.meshphong_frag},standard:{uniforms:kn([Vt.common,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.roughnessmap,Vt.metalnessmap,Vt.fog,Vt.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xe.meshphysical_vert,fragmentShader:xe.meshphysical_frag},toon:{uniforms:kn([Vt.common,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.gradientmap,Vt.fog,Vt.lights,{emissive:{value:new Fe(0)}}]),vertexShader:xe.meshtoon_vert,fragmentShader:xe.meshtoon_frag},matcap:{uniforms:kn([Vt.common,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,{matcap:{value:null}}]),vertexShader:xe.meshmatcap_vert,fragmentShader:xe.meshmatcap_frag},points:{uniforms:kn([Vt.points,Vt.fog]),vertexShader:xe.points_vert,fragmentShader:xe.points_frag},dashed:{uniforms:kn([Vt.common,Vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xe.linedashed_vert,fragmentShader:xe.linedashed_frag},depth:{uniforms:kn([Vt.common,Vt.displacementmap]),vertexShader:xe.depth_vert,fragmentShader:xe.depth_frag},normal:{uniforms:kn([Vt.common,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,{opacity:{value:1}}]),vertexShader:xe.meshnormal_vert,fragmentShader:xe.meshnormal_frag},sprite:{uniforms:kn([Vt.sprite,Vt.fog]),vertexShader:xe.sprite_vert,fragmentShader:xe.sprite_frag},background:{uniforms:{uvTransform:{value:new ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xe.background_vert,fragmentShader:xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ve}},vertexShader:xe.backgroundCube_vert,fragmentShader:xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xe.cube_vert,fragmentShader:xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xe.equirect_vert,fragmentShader:xe.equirect_frag},distance:{uniforms:kn([Vt.common,Vt.displacementmap,{referencePosition:{value:new et},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xe.distance_vert,fragmentShader:xe.distance_frag},shadow:{uniforms:kn([Vt.lights,Vt.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:xe.shadow_vert,fragmentShader:xe.shadow_frag}};Yi.physical={uniforms:kn([Yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ve},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ve},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ve},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ve},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ve},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ve}}]),vertexShader:xe.meshphysical_vert,fragmentShader:xe.meshphysical_frag};const Cc={r:0,b:0,g:0},Fs=new ta,ST=new pn;function MT(o,e,i,s,l,u,h){const d=new Fe(0);let m=u===!0?0:1,p,g,_=null,S=0,E=null;function R(P){let L=P.isScene===!0?P.background:null;return L&&L.isTexture&&(L=(P.backgroundBlurriness>0?i:e).get(L)),L}function w(P){let L=!1;const F=R(P);F===null?x(d,m):F&&F.isColor&&(x(F,1),L=!0);const I=o.xr.getEnvironmentBlendMode();I==="additive"?s.buffers.color.setClear(0,0,0,1,h):I==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(o.autoClear||L)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(P,L){const F=R(L);F&&(F.isCubeTexture||F.mapping===Gc)?(g===void 0&&(g=new Jt(new re(1,1,1),new ea({name:"BackgroundCubeMaterial",uniforms:Vr(Yi.backgroundCube.uniforms),vertexShader:Yi.backgroundCube.vertexShader,fragmentShader:Yi.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(I,N,Z){this.matrixWorld.copyPosition(Z.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),Fs.copy(L.backgroundRotation),Fs.x*=-1,Fs.y*=-1,Fs.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(Fs.y*=-1,Fs.z*=-1),g.material.uniforms.envMap.value=F,g.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(ST.makeRotationFromEuler(Fs)),g.material.toneMapped=ze.getTransfer(F.colorSpace)!==qe,(_!==F||S!==F.version||E!==o.toneMapping)&&(g.material.needsUpdate=!0,_=F,S=F.version,E=o.toneMapping),g.layers.enableAll(),P.unshift(g,g.geometry,g.material,0,0,null)):F&&F.isTexture&&(p===void 0&&(p=new Jt(new Xr(2,2),new ea({name:"BackgroundMaterial",uniforms:Vr(Yi.background.uniforms),vertexShader:Yi.background.vertexShader,fragmentShader:Yi.background.fragmentShader,side:ps,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=F,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.toneMapped=ze.getTransfer(F.colorSpace)!==qe,F.matrixAutoUpdate===!0&&F.updateMatrix(),p.material.uniforms.uvTransform.value.copy(F.matrix),(_!==F||S!==F.version||E!==o.toneMapping)&&(p.material.needsUpdate=!0,_=F,S=F.version,E=o.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null))}function x(P,L){P.getRGB(Cc,Q_(o)),s.buffers.color.setClear(Cc.r,Cc.g,Cc.b,L,h)}function z(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(P,L=1){d.set(P),m=L,x(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(P){m=P,x(d,m)},render:w,addToRenderList:M,dispose:z}}function yT(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=S(null);let u=l,h=!1;function d(C,G,K,it,pt){let ht=!1;const O=_(it,K,G);u!==O&&(u=O,p(u.object)),ht=E(C,it,K,pt),ht&&R(C,it,K,pt),pt!==null&&e.update(pt,o.ELEMENT_ARRAY_BUFFER),(ht||h)&&(h=!1,L(C,G,K,it),pt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(pt).buffer))}function m(){return o.createVertexArray()}function p(C){return o.bindVertexArray(C)}function g(C){return o.deleteVertexArray(C)}function _(C,G,K){const it=K.wireframe===!0;let pt=s[C.id];pt===void 0&&(pt={},s[C.id]=pt);let ht=pt[G.id];ht===void 0&&(ht={},pt[G.id]=ht);let O=ht[it];return O===void 0&&(O=S(m()),ht[it]=O),O}function S(C){const G=[],K=[],it=[];for(let pt=0;pt<i;pt++)G[pt]=0,K[pt]=0,it[pt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:K,attributeDivisors:it,object:C,attributes:{},index:null}}function E(C,G,K,it){const pt=u.attributes,ht=G.attributes;let O=0;const H=K.getAttributes();for(const rt in H)if(H[rt].location>=0){const Tt=pt[rt];let U=ht[rt];if(U===void 0&&(rt==="instanceMatrix"&&C.instanceMatrix&&(U=C.instanceMatrix),rt==="instanceColor"&&C.instanceColor&&(U=C.instanceColor)),Tt===void 0||Tt.attribute!==U||U&&Tt.data!==U.data)return!0;O++}return u.attributesNum!==O||u.index!==it}function R(C,G,K,it){const pt={},ht=G.attributes;let O=0;const H=K.getAttributes();for(const rt in H)if(H[rt].location>=0){let Tt=ht[rt];Tt===void 0&&(rt==="instanceMatrix"&&C.instanceMatrix&&(Tt=C.instanceMatrix),rt==="instanceColor"&&C.instanceColor&&(Tt=C.instanceColor));const U={};U.attribute=Tt,Tt&&Tt.data&&(U.data=Tt.data),pt[rt]=U,O++}u.attributes=pt,u.attributesNum=O,u.index=it}function w(){const C=u.newAttributes;for(let G=0,K=C.length;G<K;G++)C[G]=0}function M(C){x(C,0)}function x(C,G){const K=u.newAttributes,it=u.enabledAttributes,pt=u.attributeDivisors;K[C]=1,it[C]===0&&(o.enableVertexAttribArray(C),it[C]=1),pt[C]!==G&&(o.vertexAttribDivisor(C,G),pt[C]=G)}function z(){const C=u.newAttributes,G=u.enabledAttributes;for(let K=0,it=G.length;K<it;K++)G[K]!==C[K]&&(o.disableVertexAttribArray(K),G[K]=0)}function P(C,G,K,it,pt,ht,O){O===!0?o.vertexAttribIPointer(C,G,K,pt,ht):o.vertexAttribPointer(C,G,K,it,pt,ht)}function L(C,G,K,it){w();const pt=it.attributes,ht=K.getAttributes(),O=G.defaultAttributeValues;for(const H in ht){const rt=ht[H];if(rt.location>=0){let ct=pt[H];if(ct===void 0&&(H==="instanceMatrix"&&C.instanceMatrix&&(ct=C.instanceMatrix),H==="instanceColor"&&C.instanceColor&&(ct=C.instanceColor)),ct!==void 0){const Tt=ct.normalized,U=ct.itemSize,st=e.get(ct);if(st===void 0)continue;const St=st.buffer,Ut=st.type,kt=st.bytesPerElement,J=Ut===o.INT||Ut===o.UNSIGNED_INT||ct.gpuType===wd;if(ct.isInterleavedBufferAttribute){const ft=ct.data,Pt=ft.stride,te=ct.offset;if(ft.isInstancedInterleavedBuffer){for(let qt=0;qt<rt.locationSize;qt++)x(rt.location+qt,ft.meshPerAttribute);C.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let qt=0;qt<rt.locationSize;qt++)M(rt.location+qt);o.bindBuffer(o.ARRAY_BUFFER,St);for(let qt=0;qt<rt.locationSize;qt++)P(rt.location+qt,U/rt.locationSize,Ut,Tt,Pt*kt,(te+U/rt.locationSize*qt)*kt,J)}else{if(ct.isInstancedBufferAttribute){for(let ft=0;ft<rt.locationSize;ft++)x(rt.location+ft,ct.meshPerAttribute);C.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let ft=0;ft<rt.locationSize;ft++)M(rt.location+ft);o.bindBuffer(o.ARRAY_BUFFER,St);for(let ft=0;ft<rt.locationSize;ft++)P(rt.location+ft,U/rt.locationSize,Ut,Tt,U*kt,U/rt.locationSize*ft*kt,J)}}else if(O!==void 0){const Tt=O[H];if(Tt!==void 0)switch(Tt.length){case 2:o.vertexAttrib2fv(rt.location,Tt);break;case 3:o.vertexAttrib3fv(rt.location,Tt);break;case 4:o.vertexAttrib4fv(rt.location,Tt);break;default:o.vertexAttrib1fv(rt.location,Tt)}}}}z()}function F(){Z();for(const C in s){const G=s[C];for(const K in G){const it=G[K];for(const pt in it)g(it[pt].object),delete it[pt];delete G[K]}delete s[C]}}function I(C){if(s[C.id]===void 0)return;const G=s[C.id];for(const K in G){const it=G[K];for(const pt in it)g(it[pt].object),delete it[pt];delete G[K]}delete s[C.id]}function N(C){for(const G in s){const K=s[G];if(K[C.id]===void 0)continue;const it=K[C.id];for(const pt in it)g(it[pt].object),delete it[pt];delete K[C.id]}}function Z(){A(),h=!0,u!==l&&(u=l,p(u.object))}function A(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Z,resetDefaultState:A,dispose:F,releaseStatesOfGeometry:I,releaseStatesOfProgram:N,initAttributes:w,enableAttribute:M,disableUnusedAttributes:z}}function ET(o,e,i){let s;function l(p){s=p}function u(p,g){o.drawArrays(s,p,g),i.update(g,s,1)}function h(p,g,_){_!==0&&(o.drawArraysInstanced(s,p,g,_),i.update(g,s,_))}function d(p,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,g,0,_);let E=0;for(let R=0;R<_;R++)E+=g[R];i.update(E,s,1)}function m(p,g,_,S){if(_===0)return;const E=e.get("WEBGL_multi_draw");if(E===null)for(let R=0;R<p.length;R++)h(p[R],g[R],S[R]);else{E.multiDrawArraysInstancedWEBGL(s,p,0,g,0,S,0,_);let R=0;for(let w=0;w<_;w++)R+=g[w]*S[w];i.update(R,s,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function TT(o,e,i,s){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(N){return!(N!==Bi&&s.convert(N)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(N){const Z=N===Ua&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==di&&s.convert(N)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==Zi&&!Z)}function m(N){if(N==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(pe("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),E=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),z=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),P=o.getParameter(o.MAX_VARYING_VECTORS),L=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),F=o.getParameter(o.MAX_SAMPLES),I=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:S,maxTextures:E,maxVertexTextures:R,maxTextureSize:w,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:z,maxVaryings:P,maxFragmentUniforms:L,maxSamples:F,samples:I}}function bT(o){const e=this;let i=null,s=0,l=!1,u=!1;const h=new Bs,d=new ve,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,S){const E=_.length!==0||S||s!==0||l;return l=S,s=_.length,E},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(_,S){i=g(_,S,0)},this.setState=function(_,S,E){const R=_.clippingPlanes,w=_.clipIntersection,M=_.clipShadows,x=o.get(_);if(!l||R===null||R.length===0||u&&!M)u?g(null):p();else{const z=u?0:s,P=z*4;let L=x.clippingState||null;m.value=L,L=g(R,S,P,E);for(let F=0;F!==P;++F)L[F]=i[F];x.clippingState=L,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=z}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function g(_,S,E,R){const w=_!==null?_.length:0;let M=null;if(w!==0){if(M=m.value,R!==!0||M===null){const x=E+w*4,z=S.matrixWorldInverse;d.getNormalMatrix(z),(M===null||M.length<x)&&(M=new Float32Array(x));for(let P=0,L=E;P!==w;++P,L+=4)h.copy(_[P]).applyMatrix4(z,d),h.normal.toArray(M,L),M[L+3]=h.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,M}}function AT(o){let e=new WeakMap;function i(h,d){return d===Gh?h.mapping=ks:d===Vh&&(h.mapping=Br),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===Gh||d===Vh)if(e.has(h)){const m=e.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new tv(m.height);return p.fromEquirectangularTexture(o,h),e.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(){e=new WeakMap}return{get:s,dispose:u}}const ds=4,i_=[.125,.215,.35,.446,.526,.582],Gs=20,RT=256,Vo=new Hd,a_=new Fe;let Ah=null,Rh=0,wh=0,Ch=!1;const wT=new et;class s_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,u={}){const{size:h=256,position:d=wT}=u;Ah=this._renderer.getRenderTarget(),Rh=this._renderer.getActiveCubeFace(),wh=this._renderer.getActiveMipmapLevel(),Ch=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=l_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=o_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ah,Rh,wh),this._renderer.xr.enabled=Ch,e.scissorTest=!1,Pr(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===ks||e.mapping===Br?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ah=this._renderer.getRenderTarget(),Rh=this._renderer.getActiveCubeFace(),wh=this._renderer.getActiveMipmapLevel(),Ch=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:Ua,format:Bi,colorSpace:Gr,depthBuffer:!1},l=r_(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=r_(e,i,s);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=CT(u)),this._blurMaterial=UT(u,e,i),this._ggxMaterial=DT(u,e,i)}return l}_compileMaterial(e){const i=new Jt(new Hi,e);this._renderer.compile(i,Vo)}_sceneToCubeUV(e,i,s,l,u){const m=new Ri(90,1,i,s),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,S=_.autoClear,E=_.toneMapping;_.getClearColor(a_),_.toneMapping=Ki,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Jt(new re,new Z_({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,M=w.material;let x=!1;const z=e.background;z?z.isColor&&(M.color.copy(z),e.background=null,x=!0):(M.color.copy(a_),x=!0);for(let P=0;P<6;P++){const L=P%3;L===0?(m.up.set(0,p[P],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+g[P],u.y,u.z)):L===1?(m.up.set(0,0,p[P]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+g[P],u.z)):(m.up.set(0,p[P],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+g[P]));const F=this._cubeSize;Pr(l,L*F,P>2?F:0,F,F),_.setRenderTarget(l),x&&_.render(w,m),_.render(e,m)}_.toneMapping=E,_.autoClear=S,e.background=z}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===ks||e.mapping===Br;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=l_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=o_());const u=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=u;const d=u.uniforms;d.envMap.value=e;const m=this._cubeSize;Pr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,Vo)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(e,u-1,u);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,u=this._pingPongRenderTarget,h=this._ggxMaterial,d=this._lodMeshes[s];d.material=h;const m=h.uniforms,p=s/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),_=Math.sqrt(p*p-g*g),S=0+p*1.25,E=_*S,{_lodMax:R}=this,w=this._sizeLods[s],M=3*w*(s>R-ds?s-R+ds:0),x=4*(this._cubeSize-w);m.envMap.value=e.texture,m.roughness.value=E,m.mipInt.value=R-i,Pr(u,M,x,3*w,2*w),l.setRenderTarget(u),l.render(d,Vo),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=R-s,Pr(e,M,x,3*w,2*w),l.setRenderTarget(e),l.render(d,Vo)}_blur(e,i,s,l,u){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,s,l,"latitudinal",u),this._halfBlur(h,e,s,s,l,"longitudinal",u)}_halfBlur(e,i,s,l,u,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&Ge("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[l];_.material=p;const S=p.uniforms,E=this._sizeLods[s]-1,R=isFinite(u)?Math.PI/(2*E):2*Math.PI/(2*Gs-1),w=u/R,M=isFinite(u)?1+Math.floor(g*w):Gs;M>Gs&&pe(`sigmaRadians, ${u}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Gs}`);const x=[];let z=0;for(let N=0;N<Gs;++N){const Z=N/w,A=Math.exp(-Z*Z/2);x.push(A),N===0?z+=A:N<M&&(z+=2*A)}for(let N=0;N<x.length;N++)x[N]=x[N]/z;S.envMap.value=e.texture,S.samples.value=M,S.weights.value=x,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:P}=this;S.dTheta.value=R,S.mipInt.value=P-s;const L=this._sizeLods[l],F=3*L*(l>P-ds?l-P+ds:0),I=4*(this._cubeSize-L);Pr(i,F,I,3*L,2*L),m.setRenderTarget(i),m.render(_,Vo)}}function CT(o){const e=[],i=[],s=[];let l=o;const u=o-ds+1+i_.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);e.push(d);let m=1/d;h>o-ds?m=i_[h-o+ds-1]:h===0&&(m=0),i.push(m);const p=1/(d-2),g=-p,_=1+p,S=[g,g,_,g,_,_,g,g,_,_,g,_],E=6,R=6,w=3,M=2,x=1,z=new Float32Array(w*R*E),P=new Float32Array(M*R*E),L=new Float32Array(x*R*E);for(let I=0;I<E;I++){const N=I%3*2/3-1,Z=I>2?0:-1,A=[N,Z,0,N+2/3,Z,0,N+2/3,Z+1,0,N,Z,0,N+2/3,Z+1,0,N,Z+1,0];z.set(A,w*R*I),P.set(S,M*R*I);const C=[I,I,I,I,I,I];L.set(C,x*R*I)}const F=new Hi;F.setAttribute("position",new Ji(z,w)),F.setAttribute("uv",new Ji(P,M)),F.setAttribute("faceIndex",new Ji(L,x)),s.push(new Jt(F,null)),l>ds&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function r_(o,e,i){const s=new Qi(o,e,i);return s.texture.mapping=Gc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Pr(o,e,i,s,l){o.viewport.set(e,i,s,l),o.scissor.set(e,i,s,l)}function DT(o,e,i){return new ea({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:RT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Vc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ca,depthTest:!1,depthWrite:!1})}function UT(o,e,i){const s=new Float32Array(Gs),l=new et(0,1,0);return new ea({name:"SphericalGaussianBlur",defines:{n:Gs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ca,depthTest:!1,depthWrite:!1})}function o_(){return new ea({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ca,depthTest:!1,depthWrite:!1})}function l_(){return new ea({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ca,depthTest:!1,depthWrite:!1})}function Vc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function LT(o){let e=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===Gh||m===Vh,g=m===ks||m===Br;if(p||g){let _=e.get(d);const S=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return i===null&&(i=new s_(o)),_=p?i.fromEquirectangular(d,_):i.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),_.texture;if(_!==void 0)return _.texture;{const E=d.image;return p&&E&&E.height>0||g&&E&&l(E)?(i===null&&(i=new s_(o)),_=p?i.fromEquirectangular(d):i.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),d.addEventListener("dispose",u),_.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function NT(o){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=o.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Ko("WebGLRenderer: "+s+" extension not supported."),l}}}function OT(o,e,i,s){const l={},u=new WeakMap;function h(_){const S=_.target;S.index!==null&&e.remove(S.index);for(const R in S.attributes)e.remove(S.attributes[R]);S.removeEventListener("dispose",h),delete l[S.id];const E=u.get(S);E&&(e.remove(E),u.delete(S)),s.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(_,S){return l[S.id]===!0||(S.addEventListener("dispose",h),l[S.id]=!0,i.memory.geometries++),S}function m(_){const S=_.attributes;for(const E in S)e.update(S[E],o.ARRAY_BUFFER)}function p(_){const S=[],E=_.index,R=_.attributes.position;let w=0;if(E!==null){const z=E.array;w=E.version;for(let P=0,L=z.length;P<L;P+=3){const F=z[P+0],I=z[P+1],N=z[P+2];S.push(F,I,I,N,N,F)}}else if(R!==void 0){const z=R.array;w=R.version;for(let P=0,L=z.length/3-1;P<L;P+=3){const F=P+0,I=P+1,N=P+2;S.push(F,I,I,N,N,F)}}else return;const M=new(k_(S)?K_:j_)(S,1);M.version=w;const x=u.get(_);x&&e.remove(x),u.set(_,M)}function g(_){const S=u.get(_);if(S){const E=_.index;E!==null&&S.version<E.version&&p(_)}else p(_);return u.get(_)}return{get:d,update:m,getWireframeAttribute:g}}function PT(o,e,i){let s;function l(S){s=S}let u,h;function d(S){u=S.type,h=S.bytesPerElement}function m(S,E){o.drawElements(s,E,u,S*h),i.update(E,s,1)}function p(S,E,R){R!==0&&(o.drawElementsInstanced(s,E,u,S*h,R),i.update(E,s,R))}function g(S,E,R){if(R===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,E,0,u,S,0,R);let M=0;for(let x=0;x<R;x++)M+=E[x];i.update(M,s,1)}function _(S,E,R,w){if(R===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let x=0;x<S.length;x++)p(S[x]/h,E[x],w[x]);else{M.multiDrawElementsInstancedWEBGL(s,E,0,u,S,0,w,0,R);let x=0;for(let z=0;z<R;z++)x+=E[z]*w[z];i.update(x,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function zT(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:Ge("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function FT(o,e,i){const s=new WeakMap,l=new dn;function u(h,d,m){const p=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let S=s.get(d);if(S===void 0||S.count!==_){let C=function(){Z.dispose(),s.delete(d),d.removeEventListener("dispose",C)};var E=C;S!==void 0&&S.texture.dispose();const R=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],z=d.morphAttributes.normal||[],P=d.morphAttributes.color||[];let L=0;R===!0&&(L=1),w===!0&&(L=2),M===!0&&(L=3);let F=d.attributes.position.count*L,I=1;F>e.maxTextureSize&&(I=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const N=new Float32Array(F*I*4*_),Z=new W_(N,F,I,_);Z.type=Zi,Z.needsUpdate=!0;const A=L*4;for(let G=0;G<_;G++){const K=x[G],it=z[G],pt=P[G],ht=F*I*4*G;for(let O=0;O<K.count;O++){const H=O*A;R===!0&&(l.fromBufferAttribute(K,O),N[ht+H+0]=l.x,N[ht+H+1]=l.y,N[ht+H+2]=l.z,N[ht+H+3]=0),w===!0&&(l.fromBufferAttribute(it,O),N[ht+H+4]=l.x,N[ht+H+5]=l.y,N[ht+H+6]=l.z,N[ht+H+7]=0),M===!0&&(l.fromBufferAttribute(pt,O),N[ht+H+8]=l.x,N[ht+H+9]=l.y,N[ht+H+10]=l.z,N[ht+H+11]=pt.itemSize===4?l.w:1)}}S={count:_,texture:Z,size:new Ve(F,I)},s.set(d,S),d.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let R=0;for(let M=0;M<p.length;M++)R+=p[M];const w=d.morphTargetsRelative?1:1-R;m.getUniforms().setValue(o,"morphTargetBaseInfluence",w),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:u}}function IT(o,e,i,s){let l=new WeakMap;function u(m){const p=s.render.frame,g=m.geometry,_=e.get(m,g);if(l.get(_)!==p&&(e.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return _}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:h}}const BT={[w_]:"LINEAR_TONE_MAPPING",[C_]:"REINHARD_TONE_MAPPING",[D_]:"CINEON_TONE_MAPPING",[U_]:"ACES_FILMIC_TONE_MAPPING",[N_]:"AGX_TONE_MAPPING",[O_]:"NEUTRAL_TONE_MAPPING",[L_]:"CUSTOM_TONE_MAPPING"};function HT(o,e,i,s,l){const u=new Qi(e,i,{type:o,depthBuffer:s,stencilBuffer:l}),h=new Qi(e,i,{type:Ua,depthBuffer:!1,stencilBuffer:!1}),d=new Hi;d.setAttribute("position",new qn([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new qn([0,2,0,0,2,0],2));const m=new UM({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new Jt(d,m),g=new Hd(-1,1,1,-1,0,1);let _=null,S=null,E=!1,R,w=null,M=[],x=!1;this.setSize=function(z,P){u.setSize(z,P),h.setSize(z,P);for(let L=0;L<M.length;L++){const F=M[L];F.setSize&&F.setSize(z,P)}},this.setEffects=function(z){M=z,x=M.length>0&&M[0].isRenderPass===!0;const P=u.width,L=u.height;for(let F=0;F<M.length;F++){const I=M[F];I.setSize&&I.setSize(P,L)}},this.begin=function(z,P){if(E||z.toneMapping===Ki&&M.length===0)return!1;if(w=P,P!==null){const L=P.width,F=P.height;(u.width!==L||u.height!==F)&&this.setSize(L,F)}return x===!1&&z.setRenderTarget(u),R=z.toneMapping,z.toneMapping=Ki,!0},this.hasRenderPass=function(){return x},this.end=function(z,P){z.toneMapping=R,E=!0;let L=u,F=h;for(let I=0;I<M.length;I++){const N=M[I];if(N.enabled!==!1&&(N.render(z,F,L,P),N.needsSwap!==!1)){const Z=L;L=F,F=Z}}if(_!==z.outputColorSpace||S!==z.toneMapping){_=z.outputColorSpace,S=z.toneMapping,m.defines={},ze.getTransfer(_)===qe&&(m.defines.SRGB_TRANSFER="");const I=BT[S];I&&(m.defines[I]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=L.texture,z.setRenderTarget(w),z.render(p,g),w=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){u.dispose(),h.dispose(),d.dispose(),m.dispose()}}const av=new Hn,Td=new Qo(1,1),sv=new W_,rv=new sM,ov=new $_,c_=[],u_=[],f_=new Float32Array(16),h_=new Float32Array(9),d_=new Float32Array(4);function Wr(o,e,i){const s=o[0];if(s<=0||s>0)return o;const l=e*i;let u=c_[l];if(u===void 0&&(u=new Float32Array(l),c_[l]=u),e!==0){s.toArray(u,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(u,d)}return u}function Rn(o,e){if(o.length!==e.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==e[i])return!1;return!0}function wn(o,e){for(let i=0,s=e.length;i<s;i++)o[i]=e[i]}function Xc(o,e){let i=u_[e];i===void 0&&(i=new Int32Array(e),u_[e]=i);for(let s=0;s!==e;++s)i[s]=o.allocateTextureUnit();return i}function GT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function VT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Rn(i,e))return;o.uniform2fv(this.addr,e),wn(i,e)}}function XT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Rn(i,e))return;o.uniform3fv(this.addr,e),wn(i,e)}}function kT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Rn(i,e))return;o.uniform4fv(this.addr,e),wn(i,e)}}function WT(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(Rn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),wn(i,e)}else{if(Rn(i,s))return;d_.set(s),o.uniformMatrix2fv(this.addr,!1,d_),wn(i,s)}}function qT(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(Rn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),wn(i,e)}else{if(Rn(i,s))return;h_.set(s),o.uniformMatrix3fv(this.addr,!1,h_),wn(i,s)}}function YT(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(Rn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),wn(i,e)}else{if(Rn(i,s))return;f_.set(s),o.uniformMatrix4fv(this.addr,!1,f_),wn(i,s)}}function ZT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function jT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Rn(i,e))return;o.uniform2iv(this.addr,e),wn(i,e)}}function KT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Rn(i,e))return;o.uniform3iv(this.addr,e),wn(i,e)}}function QT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Rn(i,e))return;o.uniform4iv(this.addr,e),wn(i,e)}}function JT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function $T(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Rn(i,e))return;o.uniform2uiv(this.addr,e),wn(i,e)}}function tb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Rn(i,e))return;o.uniform3uiv(this.addr,e),wn(i,e)}}function eb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Rn(i,e))return;o.uniform4uiv(this.addr,e),wn(i,e)}}function nb(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(Td.compareFunction=i.isReversedDepthBuffer()?Pd:Od,u=Td):u=av,i.setTexture2D(e||u,l)}function ib(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||rv,l)}function ab(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||ov,l)}function sb(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||sv,l)}function rb(o){switch(o){case 5126:return GT;case 35664:return VT;case 35665:return XT;case 35666:return kT;case 35674:return WT;case 35675:return qT;case 35676:return YT;case 5124:case 35670:return ZT;case 35667:case 35671:return jT;case 35668:case 35672:return KT;case 35669:case 35673:return QT;case 5125:return JT;case 36294:return $T;case 36295:return tb;case 36296:return eb;case 35678:case 36198:case 36298:case 36306:case 35682:return nb;case 35679:case 36299:case 36307:return ib;case 35680:case 36300:case 36308:case 36293:return ab;case 36289:case 36303:case 36311:case 36292:return sb}}function ob(o,e){o.uniform1fv(this.addr,e)}function lb(o,e){const i=Wr(e,this.size,2);o.uniform2fv(this.addr,i)}function cb(o,e){const i=Wr(e,this.size,3);o.uniform3fv(this.addr,i)}function ub(o,e){const i=Wr(e,this.size,4);o.uniform4fv(this.addr,i)}function fb(o,e){const i=Wr(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function hb(o,e){const i=Wr(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function db(o,e){const i=Wr(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function pb(o,e){o.uniform1iv(this.addr,e)}function mb(o,e){o.uniform2iv(this.addr,e)}function gb(o,e){o.uniform3iv(this.addr,e)}function _b(o,e){o.uniform4iv(this.addr,e)}function vb(o,e){o.uniform1uiv(this.addr,e)}function xb(o,e){o.uniform2uiv(this.addr,e)}function Sb(o,e){o.uniform3uiv(this.addr,e)}function Mb(o,e){o.uniform4uiv(this.addr,e)}function yb(o,e,i){const s=this.cache,l=e.length,u=Xc(i,l);Rn(s,u)||(o.uniform1iv(this.addr,u),wn(s,u));let h;this.type===o.SAMPLER_2D_SHADOW?h=Td:h=av;for(let d=0;d!==l;++d)i.setTexture2D(e[d]||h,u[d])}function Eb(o,e,i){const s=this.cache,l=e.length,u=Xc(i,l);Rn(s,u)||(o.uniform1iv(this.addr,u),wn(s,u));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||rv,u[h])}function Tb(o,e,i){const s=this.cache,l=e.length,u=Xc(i,l);Rn(s,u)||(o.uniform1iv(this.addr,u),wn(s,u));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||ov,u[h])}function bb(o,e,i){const s=this.cache,l=e.length,u=Xc(i,l);Rn(s,u)||(o.uniform1iv(this.addr,u),wn(s,u));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||sv,u[h])}function Ab(o){switch(o){case 5126:return ob;case 35664:return lb;case 35665:return cb;case 35666:return ub;case 35674:return fb;case 35675:return hb;case 35676:return db;case 5124:case 35670:return pb;case 35667:case 35671:return mb;case 35668:case 35672:return gb;case 35669:case 35673:return _b;case 5125:return vb;case 36294:return xb;case 36295:return Sb;case 36296:return Mb;case 35678:case 36198:case 36298:case 36306:case 35682:return yb;case 35679:case 36299:case 36307:return Eb;case 35680:case 36300:case 36308:case 36293:return Tb;case 36289:case 36303:case 36311:case 36292:return bb}}class Rb{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=rb(i.type)}}class wb{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=Ab(i.type)}}class Cb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(e,i[d.id],s)}}}const Dh=/(\w+)(\])?(\[|\.)?/g;function p_(o,e){o.seq.push(e),o.map[e.id]=e}function Db(o,e,i){const s=o.name,l=s.length;for(Dh.lastIndex=0;;){const u=Dh.exec(s),h=Dh.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){p_(i,p===void 0?new Rb(d,o,e):new wb(d,o,e));break}else{let _=i.map[d];_===void 0&&(_=new Cb(d),p_(i,_)),i=_}}}class zc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let h=0;h<s;++h){const d=e.getActiveUniform(i,h),m=e.getUniformLocation(i,d.name);Db(d,m,this)}const l=[],u=[];for(const h of this.seq)h.type===e.SAMPLER_2D_SHADOW||h.type===e.SAMPLER_CUBE_SHADOW||h.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(h):u.push(h);l.length>0&&(this.seq=l.concat(u))}setValue(e,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=s[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,u=e.length;l!==u;++l){const h=e[l];h.id in i&&s.push(h)}return s}}function m_(o,e,i){const s=o.createShader(e);return o.shaderSource(s,i),o.compileShader(s),s}const Ub=37297;let Lb=0;function Nb(o,e){const i=o.split(`
`),s=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let h=l;h<u;h++){const d=h+1;s.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const g_=new ve;function Ob(o){ze._getMatrix(g_,ze.workingColorSpace,o);const e=`mat3( ${g_.elements.map(i=>i.toFixed(4))} )`;switch(ze.getTransfer(o)){case Fc:return[e,"LinearTransferOETF"];case qe:return[e,"sRGBTransferOETF"];default:return pe("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function __(o,e,i){const s=o.getShaderParameter(e,o.COMPILE_STATUS),u=(o.getShaderInfoLog(e)||"").trim();if(s&&u==="")return"";const h=/ERROR: 0:(\d+)/.exec(u);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+u+`

`+Nb(o.getShaderSource(e),d)}else return u}function Pb(o,e){const i=Ob(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const zb={[w_]:"Linear",[C_]:"Reinhard",[D_]:"Cineon",[U_]:"ACESFilmic",[N_]:"AgX",[O_]:"Neutral",[L_]:"Custom"};function Fb(o,e){const i=zb[e];return i===void 0?(pe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Dc=new et;function Ib(){ze.getLuminanceCoefficients(Dc);const o=Dc.x.toFixed(4),e=Dc.y.toFixed(4),i=Dc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Bb(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qo).join(`
`)}function Hb(o){const e=[];for(const i in o){const s=o[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function Gb(o,e){const i={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=o.getActiveAttrib(e,l),h=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function qo(o){return o!==""}function v_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function x_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Vb=/^[ \t]*#include +<([\w\d./]+)>/gm;function bd(o){return o.replace(Vb,kb)}const Xb=new Map;function kb(o,e){let i=xe[e];if(i===void 0){const s=Xb.get(e);if(s!==void 0)i=xe[s],pe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return bd(i)}const Wb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function S_(o){return o.replace(Wb,qb)}function qb(o,e,i,s){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function M_(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Yb={[Uc]:"SHADOWMAP_TYPE_PCF",[Wo]:"SHADOWMAP_TYPE_VSM"};function Zb(o){return Yb[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const jb={[ks]:"ENVMAP_TYPE_CUBE",[Br]:"ENVMAP_TYPE_CUBE",[Gc]:"ENVMAP_TYPE_CUBE_UV"};function Kb(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":jb[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const Qb={[Br]:"ENVMAP_MODE_REFRACTION"};function Jb(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":Qb[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const $b={[R_]:"ENVMAP_BLENDING_MULTIPLY",[HS]:"ENVMAP_BLENDING_MIX",[GS]:"ENVMAP_BLENDING_ADD"};function t1(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":$b[o.combine]||"ENVMAP_BLENDING_NONE"}function e1(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function n1(o,e,i,s){const l=o.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=Zb(i),p=Kb(i),g=Jb(i),_=t1(i),S=e1(i),E=Bb(i),R=Hb(u),w=l.createProgram();let M,x,z=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(qo).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(qo).join(`
`),x.length>0&&(x+=`
`)):(M=[M_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qo).join(`
`),x=[M_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ki?"#define TONE_MAPPING":"",i.toneMapping!==Ki?xe.tonemapping_pars_fragment:"",i.toneMapping!==Ki?Fb("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",xe.colorspace_pars_fragment,Pb("linearToOutputTexel",i.outputColorSpace),Ib(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(qo).join(`
`)),h=bd(h),h=v_(h,i),h=x_(h,i),d=bd(d),d=v_(d,i),d=x_(d,i),h=S_(h),d=S_(d),i.isRawShaderMaterial!==!0&&(z=`#version 300 es
`,M=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",i.glslVersion===Pg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Pg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const P=z+M+h,L=z+x+d,F=m_(l,l.VERTEX_SHADER,P),I=m_(l,l.FRAGMENT_SHADER,L);l.attachShader(w,F),l.attachShader(w,I),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function N(G){if(o.debug.checkShaderErrors){const K=l.getProgramInfoLog(w)||"",it=l.getShaderInfoLog(F)||"",pt=l.getShaderInfoLog(I)||"",ht=K.trim(),O=it.trim(),H=pt.trim();let rt=!0,ct=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(rt=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,w,F,I);else{const Tt=__(l,F,"vertex"),U=__(l,I,"fragment");Ge("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+ht+`
`+Tt+`
`+U)}else ht!==""?pe("WebGLProgram: Program Info Log:",ht):(O===""||H==="")&&(ct=!1);ct&&(G.diagnostics={runnable:rt,programLog:ht,vertexShader:{log:O,prefix:M},fragmentShader:{log:H,prefix:x}})}l.deleteShader(F),l.deleteShader(I),Z=new zc(l,w),A=Gb(l,w)}let Z;this.getUniforms=function(){return Z===void 0&&N(this),Z};let A;this.getAttributes=function(){return A===void 0&&N(this),A};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(w,Ub)),C},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Lb++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=F,this.fragmentShader=I,this}let i1=0;class a1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new s1(e),i.set(e,s)),s}}class s1{constructor(e){this.id=i1++,this.code=e,this.usedTimes=0}}function r1(o,e,i,s,l,u,h){const d=new q_,m=new a1,p=new Set,g=[],_=new Map,S=l.logarithmicDepthBuffer;let E=l.precision;const R={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(A){return p.add(A),A===0?"uv":`uv${A}`}function M(A,C,G,K,it){const pt=K.fog,ht=it.geometry,O=A.isMeshStandardMaterial?K.environment:null,H=(A.isMeshStandardMaterial?i:e).get(A.envMap||O),rt=H&&H.mapping===Gc?H.image.height:null,ct=R[A.type];A.precision!==null&&(E=l.getMaxPrecision(A.precision),E!==A.precision&&pe("WebGLProgram.getParameters:",A.precision,"not supported, using",E,"instead."));const Tt=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,U=Tt!==void 0?Tt.length:0;let st=0;ht.morphAttributes.position!==void 0&&(st=1),ht.morphAttributes.normal!==void 0&&(st=2),ht.morphAttributes.color!==void 0&&(st=3);let St,Ut,kt,J;if(ct){const De=Yi[ct];St=De.vertexShader,Ut=De.fragmentShader}else St=A.vertexShader,Ut=A.fragmentShader,m.update(A),kt=m.getVertexShaderID(A),J=m.getFragmentShaderID(A);const ft=o.getRenderTarget(),Pt=o.state.buffers.depth.getReversed(),te=it.isInstancedMesh===!0,qt=it.isBatchedMesh===!0,Se=!!A.map,Qe=!!A.matcap,Me=!!H,me=!!A.aoMap,Pe=!!A.lightMap,he=!!A.bumpMap,sn=!!A.normalMap,V=!!A.displacementMap,Ye=!!A.emissiveMap,ye=!!A.metalnessMap,Oe=!!A.roughnessMap,Yt=A.anisotropy>0,D=A.clearcoat>0,y=A.dispersion>0,W=A.iridescence>0,_t=A.sheen>0,Et=A.transmission>0,at=Yt&&!!A.anisotropyMap,jt=D&&!!A.clearcoatMap,Ot=D&&!!A.clearcoatNormalMap,$t=D&&!!A.clearcoatRoughnessMap,le=W&&!!A.iridescenceMap,At=W&&!!A.iridescenceThicknessMap,Ct=_t&&!!A.sheenColorMap,Gt=_t&&!!A.sheenRoughnessMap,zt=!!A.specularMap,Ft=!!A.specularColorMap,fe=!!A.specularIntensityMap,k=Et&&!!A.transmissionMap,It=Et&&!!A.thicknessMap,Dt=!!A.gradientMap,Ht=!!A.alphaMap,bt=A.alphaTest>0,xt=!!A.alphaHash,Lt=!!A.extensions;let ue=Ki;A.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(ue=o.toneMapping);const Ie={shaderID:ct,shaderType:A.type,shaderName:A.name,vertexShader:St,fragmentShader:Ut,defines:A.defines,customVertexShaderID:kt,customFragmentShaderID:J,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:E,batching:qt,batchingColor:qt&&it._colorsTexture!==null,instancing:te,instancingColor:te&&it.instanceColor!==null,instancingMorph:te&&it.morphTexture!==null,outputColorSpace:ft===null?o.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:Gr,alphaToCoverage:!!A.alphaToCoverage,map:Se,matcap:Qe,envMap:Me,envMapMode:Me&&H.mapping,envMapCubeUVHeight:rt,aoMap:me,lightMap:Pe,bumpMap:he,normalMap:sn,displacementMap:V,emissiveMap:Ye,normalMapObjectSpace:sn&&A.normalMapType===kS,normalMapTangentSpace:sn&&A.normalMapType===X_,metalnessMap:ye,roughnessMap:Oe,anisotropy:Yt,anisotropyMap:at,clearcoat:D,clearcoatMap:jt,clearcoatNormalMap:Ot,clearcoatRoughnessMap:$t,dispersion:y,iridescence:W,iridescenceMap:le,iridescenceThicknessMap:At,sheen:_t,sheenColorMap:Ct,sheenRoughnessMap:Gt,specularMap:zt,specularColorMap:Ft,specularIntensityMap:fe,transmission:Et,transmissionMap:k,thicknessMap:It,gradientMap:Dt,opaque:A.transparent===!1&&A.blending===zr&&A.alphaToCoverage===!1,alphaMap:Ht,alphaTest:bt,alphaHash:xt,combine:A.combine,mapUv:Se&&w(A.map.channel),aoMapUv:me&&w(A.aoMap.channel),lightMapUv:Pe&&w(A.lightMap.channel),bumpMapUv:he&&w(A.bumpMap.channel),normalMapUv:sn&&w(A.normalMap.channel),displacementMapUv:V&&w(A.displacementMap.channel),emissiveMapUv:Ye&&w(A.emissiveMap.channel),metalnessMapUv:ye&&w(A.metalnessMap.channel),roughnessMapUv:Oe&&w(A.roughnessMap.channel),anisotropyMapUv:at&&w(A.anisotropyMap.channel),clearcoatMapUv:jt&&w(A.clearcoatMap.channel),clearcoatNormalMapUv:Ot&&w(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$t&&w(A.clearcoatRoughnessMap.channel),iridescenceMapUv:le&&w(A.iridescenceMap.channel),iridescenceThicknessMapUv:At&&w(A.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&w(A.sheenColorMap.channel),sheenRoughnessMapUv:Gt&&w(A.sheenRoughnessMap.channel),specularMapUv:zt&&w(A.specularMap.channel),specularColorMapUv:Ft&&w(A.specularColorMap.channel),specularIntensityMapUv:fe&&w(A.specularIntensityMap.channel),transmissionMapUv:k&&w(A.transmissionMap.channel),thicknessMapUv:It&&w(A.thicknessMap.channel),alphaMapUv:Ht&&w(A.alphaMap.channel),vertexTangents:!!ht.attributes.tangent&&(sn||Yt),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,pointsUvs:it.isPoints===!0&&!!ht.attributes.uv&&(Se||Ht),fog:!!pt,useFog:A.fog===!0,fogExp2:!!pt&&pt.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:Pt,skinning:it.isSkinnedMesh===!0,morphTargets:ht.morphAttributes.position!==void 0,morphNormals:ht.morphAttributes.normal!==void 0,morphColors:ht.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:st,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:A.dithering,shadowMapEnabled:o.shadowMap.enabled&&G.length>0,shadowMapType:o.shadowMap.type,toneMapping:ue,decodeVideoTexture:Se&&A.map.isVideoTexture===!0&&ze.getTransfer(A.map.colorSpace)===qe,decodeVideoTextureEmissive:Ye&&A.emissiveMap.isVideoTexture===!0&&ze.getTransfer(A.emissiveMap.colorSpace)===qe,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Fi,flipSided:A.side===Wn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Lt&&A.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Lt&&A.extensions.multiDraw===!0||qt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Ie.vertexUv1s=p.has(1),Ie.vertexUv2s=p.has(2),Ie.vertexUv3s=p.has(3),p.clear(),Ie}function x(A){const C=[];if(A.shaderID?C.push(A.shaderID):(C.push(A.customVertexShaderID),C.push(A.customFragmentShaderID)),A.defines!==void 0)for(const G in A.defines)C.push(G),C.push(A.defines[G]);return A.isRawShaderMaterial===!1&&(z(C,A),P(C,A),C.push(o.outputColorSpace)),C.push(A.customProgramCacheKey),C.join()}function z(A,C){A.push(C.precision),A.push(C.outputColorSpace),A.push(C.envMapMode),A.push(C.envMapCubeUVHeight),A.push(C.mapUv),A.push(C.alphaMapUv),A.push(C.lightMapUv),A.push(C.aoMapUv),A.push(C.bumpMapUv),A.push(C.normalMapUv),A.push(C.displacementMapUv),A.push(C.emissiveMapUv),A.push(C.metalnessMapUv),A.push(C.roughnessMapUv),A.push(C.anisotropyMapUv),A.push(C.clearcoatMapUv),A.push(C.clearcoatNormalMapUv),A.push(C.clearcoatRoughnessMapUv),A.push(C.iridescenceMapUv),A.push(C.iridescenceThicknessMapUv),A.push(C.sheenColorMapUv),A.push(C.sheenRoughnessMapUv),A.push(C.specularMapUv),A.push(C.specularColorMapUv),A.push(C.specularIntensityMapUv),A.push(C.transmissionMapUv),A.push(C.thicknessMapUv),A.push(C.combine),A.push(C.fogExp2),A.push(C.sizeAttenuation),A.push(C.morphTargetsCount),A.push(C.morphAttributeCount),A.push(C.numDirLights),A.push(C.numPointLights),A.push(C.numSpotLights),A.push(C.numSpotLightMaps),A.push(C.numHemiLights),A.push(C.numRectAreaLights),A.push(C.numDirLightShadows),A.push(C.numPointLightShadows),A.push(C.numSpotLightShadows),A.push(C.numSpotLightShadowsWithMaps),A.push(C.numLightProbes),A.push(C.shadowMapType),A.push(C.toneMapping),A.push(C.numClippingPlanes),A.push(C.numClipIntersection),A.push(C.depthPacking)}function P(A,C){d.disableAll(),C.instancing&&d.enable(0),C.instancingColor&&d.enable(1),C.instancingMorph&&d.enable(2),C.matcap&&d.enable(3),C.envMap&&d.enable(4),C.normalMapObjectSpace&&d.enable(5),C.normalMapTangentSpace&&d.enable(6),C.clearcoat&&d.enable(7),C.iridescence&&d.enable(8),C.alphaTest&&d.enable(9),C.vertexColors&&d.enable(10),C.vertexAlphas&&d.enable(11),C.vertexUv1s&&d.enable(12),C.vertexUv2s&&d.enable(13),C.vertexUv3s&&d.enable(14),C.vertexTangents&&d.enable(15),C.anisotropy&&d.enable(16),C.alphaHash&&d.enable(17),C.batching&&d.enable(18),C.dispersion&&d.enable(19),C.batchingColor&&d.enable(20),C.gradientMap&&d.enable(21),A.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reversedDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),A.push(d.mask)}function L(A){const C=R[A.type];let G;if(C){const K=Yi[C];G=xM.clone(K.uniforms)}else G=A.uniforms;return G}function F(A,C){let G=_.get(C);return G!==void 0?++G.usedTimes:(G=new n1(o,C,A,u),g.push(G),_.set(C,G)),G}function I(A){if(--A.usedTimes===0){const C=g.indexOf(A);g[C]=g[g.length-1],g.pop(),_.delete(A.cacheKey),A.destroy()}}function N(A){m.remove(A)}function Z(){m.dispose()}return{getParameters:M,getProgramCacheKey:x,getUniforms:L,acquireProgram:F,releaseProgram:I,releaseShaderCache:N,programs:g,dispose:Z}}function o1(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function u(){o=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:u}}function l1(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function y_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function E_(){const o=[];let e=0;const i=[],s=[],l=[];function u(){e=0,i.length=0,s.length=0,l.length=0}function h(_,S,E,R,w,M){let x=o[e];return x===void 0?(x={id:_.id,object:_,geometry:S,material:E,groupOrder:R,renderOrder:_.renderOrder,z:w,group:M},o[e]=x):(x.id=_.id,x.object=_,x.geometry=S,x.material=E,x.groupOrder=R,x.renderOrder=_.renderOrder,x.z=w,x.group=M),e++,x}function d(_,S,E,R,w,M){const x=h(_,S,E,R,w,M);E.transmission>0?s.push(x):E.transparent===!0?l.push(x):i.push(x)}function m(_,S,E,R,w,M){const x=h(_,S,E,R,w,M);E.transmission>0?s.unshift(x):E.transparent===!0?l.unshift(x):i.unshift(x)}function p(_,S){i.length>1&&i.sort(_||l1),s.length>1&&s.sort(S||y_),l.length>1&&l.sort(S||y_)}function g(){for(let _=e,S=o.length;_<S;_++){const E=o[_];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:d,unshift:m,finish:g,sort:p}}function c1(){let o=new WeakMap;function e(s,l){const u=o.get(s);let h;return u===void 0?(h=new E_,o.set(s,[h])):l>=u.length?(h=new E_,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function u1(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new et,color:new Fe};break;case"SpotLight":i={position:new et,direction:new et,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new et,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new et,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":i={color:new Fe,position:new et,halfWidth:new et,halfHeight:new et};break}return o[e.id]=i,i}}}function f1(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let h1=0;function d1(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function p1(o){const e=new u1,i=f1(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new et);const l=new et,u=new pn,h=new pn;function d(p){let g=0,_=0,S=0;for(let A=0;A<9;A++)s.probe[A].set(0,0,0);let E=0,R=0,w=0,M=0,x=0,z=0,P=0,L=0,F=0,I=0,N=0;p.sort(d1);for(let A=0,C=p.length;A<C;A++){const G=p[A],K=G.color,it=G.intensity,pt=G.distance;let ht=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===Hr?ht=G.shadow.map.texture:ht=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)g+=K.r*it,_+=K.g*it,S+=K.b*it;else if(G.isLightProbe){for(let O=0;O<9;O++)s.probe[O].addScaledVector(G.sh.coefficients[O],it);N++}else if(G.isDirectionalLight){const O=e.get(G);if(O.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const H=G.shadow,rt=i.get(G);rt.shadowIntensity=H.intensity,rt.shadowBias=H.bias,rt.shadowNormalBias=H.normalBias,rt.shadowRadius=H.radius,rt.shadowMapSize=H.mapSize,s.directionalShadow[E]=rt,s.directionalShadowMap[E]=ht,s.directionalShadowMatrix[E]=G.shadow.matrix,z++}s.directional[E]=O,E++}else if(G.isSpotLight){const O=e.get(G);O.position.setFromMatrixPosition(G.matrixWorld),O.color.copy(K).multiplyScalar(it),O.distance=pt,O.coneCos=Math.cos(G.angle),O.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),O.decay=G.decay,s.spot[w]=O;const H=G.shadow;if(G.map&&(s.spotLightMap[F]=G.map,F++,H.updateMatrices(G),G.castShadow&&I++),s.spotLightMatrix[w]=H.matrix,G.castShadow){const rt=i.get(G);rt.shadowIntensity=H.intensity,rt.shadowBias=H.bias,rt.shadowNormalBias=H.normalBias,rt.shadowRadius=H.radius,rt.shadowMapSize=H.mapSize,s.spotShadow[w]=rt,s.spotShadowMap[w]=ht,L++}w++}else if(G.isRectAreaLight){const O=e.get(G);O.color.copy(K).multiplyScalar(it),O.halfWidth.set(G.width*.5,0,0),O.halfHeight.set(0,G.height*.5,0),s.rectArea[M]=O,M++}else if(G.isPointLight){const O=e.get(G);if(O.color.copy(G.color).multiplyScalar(G.intensity),O.distance=G.distance,O.decay=G.decay,G.castShadow){const H=G.shadow,rt=i.get(G);rt.shadowIntensity=H.intensity,rt.shadowBias=H.bias,rt.shadowNormalBias=H.normalBias,rt.shadowRadius=H.radius,rt.shadowMapSize=H.mapSize,rt.shadowCameraNear=H.camera.near,rt.shadowCameraFar=H.camera.far,s.pointShadow[R]=rt,s.pointShadowMap[R]=ht,s.pointShadowMatrix[R]=G.shadow.matrix,P++}s.point[R]=O,R++}else if(G.isHemisphereLight){const O=e.get(G);O.skyColor.copy(G.color).multiplyScalar(it),O.groundColor.copy(G.groundColor).multiplyScalar(it),s.hemi[x]=O,x++}}M>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Vt.LTC_FLOAT_1,s.rectAreaLTC2=Vt.LTC_FLOAT_2):(s.rectAreaLTC1=Vt.LTC_HALF_1,s.rectAreaLTC2=Vt.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=_,s.ambient[2]=S;const Z=s.hash;(Z.directionalLength!==E||Z.pointLength!==R||Z.spotLength!==w||Z.rectAreaLength!==M||Z.hemiLength!==x||Z.numDirectionalShadows!==z||Z.numPointShadows!==P||Z.numSpotShadows!==L||Z.numSpotMaps!==F||Z.numLightProbes!==N)&&(s.directional.length=E,s.spot.length=w,s.rectArea.length=M,s.point.length=R,s.hemi.length=x,s.directionalShadow.length=z,s.directionalShadowMap.length=z,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=L,s.spotShadowMap.length=L,s.directionalShadowMatrix.length=z,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=L+F-I,s.spotLightMap.length=F,s.numSpotLightShadowsWithMaps=I,s.numLightProbes=N,Z.directionalLength=E,Z.pointLength=R,Z.spotLength=w,Z.rectAreaLength=M,Z.hemiLength=x,Z.numDirectionalShadows=z,Z.numPointShadows=P,Z.numSpotShadows=L,Z.numSpotMaps=F,Z.numLightProbes=N,s.version=h1++)}function m(p,g){let _=0,S=0,E=0,R=0,w=0;const M=g.matrixWorldInverse;for(let x=0,z=p.length;x<z;x++){const P=p[x];if(P.isDirectionalLight){const L=s.directional[_];L.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(M),_++}else if(P.isSpotLight){const L=s.spot[E];L.position.setFromMatrixPosition(P.matrixWorld),L.position.applyMatrix4(M),L.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(M),E++}else if(P.isRectAreaLight){const L=s.rectArea[R];L.position.setFromMatrixPosition(P.matrixWorld),L.position.applyMatrix4(M),h.identity(),u.copy(P.matrixWorld),u.premultiply(M),h.extractRotation(u),L.halfWidth.set(P.width*.5,0,0),L.halfHeight.set(0,P.height*.5,0),L.halfWidth.applyMatrix4(h),L.halfHeight.applyMatrix4(h),R++}else if(P.isPointLight){const L=s.point[S];L.position.setFromMatrixPosition(P.matrixWorld),L.position.applyMatrix4(M),S++}else if(P.isHemisphereLight){const L=s.hemi[w];L.direction.setFromMatrixPosition(P.matrixWorld),L.direction.transformDirection(M),w++}}}return{setup:d,setupView:m,state:s}}function T_(o){const e=new p1(o),i=[],s=[];function l(g){p.camera=g,i.length=0,s.length=0}function u(g){i.push(g)}function h(g){s.push(g)}function d(){e.setup(i)}function m(g){e.setupView(i,g)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:h}}function m1(o){let e=new WeakMap;function i(l,u=0){const h=e.get(l);let d;return h===void 0?(d=new T_(o),e.set(l,[d])):u>=h.length?(d=new T_(o),h.push(d)):d=h[u],d}function s(){e=new WeakMap}return{get:i,dispose:s}}const g1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,v1=[new et(1,0,0),new et(-1,0,0),new et(0,1,0),new et(0,-1,0),new et(0,0,1),new et(0,0,-1)],x1=[new et(0,-1,0),new et(0,-1,0),new et(0,0,1),new et(0,0,-1),new et(0,-1,0),new et(0,-1,0)],b_=new pn,Xo=new et,Uh=new et;function S1(o,e,i){let s=new Bd;const l=new Ve,u=new Ve,h=new dn,d=new LM,m=new NM,p={},g=i.maxTextureSize,_={[ps]:Wn,[Wn]:ps,[Fi]:Fi},S=new ea({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:g1,fragmentShader:_1}),E=S.clone();E.defines.HORIZONTAL_PASS=1;const R=new Hi;R.setAttribute("position",new Ji(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Jt(R,S),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uc;let x=this.type;this.render=function(I,N,Z){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||I.length===0)return;I.type===A_&&(pe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),I.type=Uc);const A=o.getRenderTarget(),C=o.getActiveCubeFace(),G=o.getActiveMipmapLevel(),K=o.state;K.setBlending(Ca),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const it=x!==this.type;it&&N.traverse(function(pt){pt.material&&(Array.isArray(pt.material)?pt.material.forEach(ht=>ht.needsUpdate=!0):pt.material.needsUpdate=!0)});for(let pt=0,ht=I.length;pt<ht;pt++){const O=I[pt],H=O.shadow;if(H===void 0){pe("WebGLShadowMap:",O,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;l.copy(H.mapSize);const rt=H.getFrameExtents();if(l.multiply(rt),u.copy(H.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/rt.x),l.x=u.x*rt.x,H.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/rt.y),l.y=u.y*rt.y,H.mapSize.y=u.y)),H.map===null||it===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Wo){if(O.isPointLight){pe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Qi(l.x,l.y,{format:Hr,type:Ua,minFilter:Bn,magFilter:Bn,generateMipmaps:!1}),H.map.texture.name=O.name+".shadowMap",H.map.depthTexture=new Qo(l.x,l.y,Zi),H.map.depthTexture.name=O.name+".shadowMapDepth",H.map.depthTexture.format=La,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Pn,H.map.depthTexture.magFilter=Pn}else{O.isPointLight?(H.map=new tv(l.x),H.map.depthTexture=new DM(l.x,$i)):(H.map=new Qi(l.x,l.y),H.map.depthTexture=new Qo(l.x,l.y,$i)),H.map.depthTexture.name=O.name+".shadowMap",H.map.depthTexture.format=La;const Tt=o.state.buffers.depth.getReversed();this.type===Uc?(H.map.depthTexture.compareFunction=Tt?Pd:Od,H.map.depthTexture.minFilter=Bn,H.map.depthTexture.magFilter=Bn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Pn,H.map.depthTexture.magFilter=Pn)}H.camera.updateProjectionMatrix()}const ct=H.map.isWebGLCubeRenderTarget?6:1;for(let Tt=0;Tt<ct;Tt++){if(H.map.isWebGLCubeRenderTarget)o.setRenderTarget(H.map,Tt),o.clear();else{Tt===0&&(o.setRenderTarget(H.map),o.clear());const U=H.getViewport(Tt);h.set(u.x*U.x,u.y*U.y,u.x*U.z,u.y*U.w),K.viewport(h)}if(O.isPointLight){const U=H.camera,st=H.matrix,St=O.distance||U.far;St!==U.far&&(U.far=St,U.updateProjectionMatrix()),Xo.setFromMatrixPosition(O.matrixWorld),U.position.copy(Xo),Uh.copy(U.position),Uh.add(v1[Tt]),U.up.copy(x1[Tt]),U.lookAt(Uh),U.updateMatrixWorld(),st.makeTranslation(-Xo.x,-Xo.y,-Xo.z),b_.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),H._frustum.setFromProjectionMatrix(b_,U.coordinateSystem,U.reversedDepth)}else H.updateMatrices(O);s=H.getFrustum(),L(N,Z,H.camera,O,this.type)}H.isPointLightShadow!==!0&&this.type===Wo&&z(H,Z),H.needsUpdate=!1}x=this.type,M.needsUpdate=!1,o.setRenderTarget(A,C,G)};function z(I,N){const Z=e.update(w);S.defines.VSM_SAMPLES!==I.blurSamples&&(S.defines.VSM_SAMPLES=I.blurSamples,E.defines.VSM_SAMPLES=I.blurSamples,S.needsUpdate=!0,E.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Qi(l.x,l.y,{format:Hr,type:Ua})),S.uniforms.shadow_pass.value=I.map.depthTexture,S.uniforms.resolution.value=I.mapSize,S.uniforms.radius.value=I.radius,o.setRenderTarget(I.mapPass),o.clear(),o.renderBufferDirect(N,null,Z,S,w,null),E.uniforms.shadow_pass.value=I.mapPass.texture,E.uniforms.resolution.value=I.mapSize,E.uniforms.radius.value=I.radius,o.setRenderTarget(I.map),o.clear(),o.renderBufferDirect(N,null,Z,E,w,null)}function P(I,N,Z,A){let C=null;const G=Z.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(G!==void 0)C=G;else if(C=Z.isPointLight===!0?m:d,o.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const K=C.uuid,it=N.uuid;let pt=p[K];pt===void 0&&(pt={},p[K]=pt);let ht=pt[it];ht===void 0&&(ht=C.clone(),pt[it]=ht,N.addEventListener("dispose",F)),C=ht}if(C.visible=N.visible,C.wireframe=N.wireframe,A===Wo?C.side=N.shadowSide!==null?N.shadowSide:N.side:C.side=N.shadowSide!==null?N.shadowSide:_[N.side],C.alphaMap=N.alphaMap,C.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,C.map=N.map,C.clipShadows=N.clipShadows,C.clippingPlanes=N.clippingPlanes,C.clipIntersection=N.clipIntersection,C.displacementMap=N.displacementMap,C.displacementScale=N.displacementScale,C.displacementBias=N.displacementBias,C.wireframeLinewidth=N.wireframeLinewidth,C.linewidth=N.linewidth,Z.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const K=o.properties.get(C);K.light=Z}return C}function L(I,N,Z,A,C){if(I.visible===!1)return;if(I.layers.test(N.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&C===Wo)&&(!I.frustumCulled||s.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,I.matrixWorld);const it=e.update(I),pt=I.material;if(Array.isArray(pt)){const ht=it.groups;for(let O=0,H=ht.length;O<H;O++){const rt=ht[O],ct=pt[rt.materialIndex];if(ct&&ct.visible){const Tt=P(I,ct,A,C);I.onBeforeShadow(o,I,N,Z,it,Tt,rt),o.renderBufferDirect(Z,null,it,Tt,I,rt),I.onAfterShadow(o,I,N,Z,it,Tt,rt)}}}else if(pt.visible){const ht=P(I,pt,A,C);I.onBeforeShadow(o,I,N,Z,it,ht,null),o.renderBufferDirect(Z,null,it,ht,I,null),I.onAfterShadow(o,I,N,Z,it,ht,null)}}const K=I.children;for(let it=0,pt=K.length;it<pt;it++)L(K[it],N,Z,A,C)}function F(I){I.target.removeEventListener("dispose",F);for(const Z in p){const A=p[Z],C=I.target.uuid;C in A&&(A[C].dispose(),delete A[C])}}}const M1={[Oh]:Ph,[zh]:Bh,[Fh]:Hh,[Ir]:Ih,[Ph]:Oh,[Bh]:zh,[Hh]:Fh,[Ih]:Ir};function y1(o,e){function i(){let k=!1;const It=new dn;let Dt=null;const Ht=new dn(0,0,0,0);return{setMask:function(bt){Dt!==bt&&!k&&(o.colorMask(bt,bt,bt,bt),Dt=bt)},setLocked:function(bt){k=bt},setClear:function(bt,xt,Lt,ue,Ie){Ie===!0&&(bt*=ue,xt*=ue,Lt*=ue),It.set(bt,xt,Lt,ue),Ht.equals(It)===!1&&(o.clearColor(bt,xt,Lt,ue),Ht.copy(It))},reset:function(){k=!1,Dt=null,Ht.set(-1,0,0,0)}}}function s(){let k=!1,It=!1,Dt=null,Ht=null,bt=null;return{setReversed:function(xt){if(It!==xt){const Lt=e.get("EXT_clip_control");xt?Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.ZERO_TO_ONE_EXT):Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.NEGATIVE_ONE_TO_ONE_EXT),It=xt;const ue=bt;bt=null,this.setClear(ue)}},getReversed:function(){return It},setTest:function(xt){xt?ft(o.DEPTH_TEST):Pt(o.DEPTH_TEST)},setMask:function(xt){Dt!==xt&&!k&&(o.depthMask(xt),Dt=xt)},setFunc:function(xt){if(It&&(xt=M1[xt]),Ht!==xt){switch(xt){case Oh:o.depthFunc(o.NEVER);break;case Ph:o.depthFunc(o.ALWAYS);break;case zh:o.depthFunc(o.LESS);break;case Ir:o.depthFunc(o.LEQUAL);break;case Fh:o.depthFunc(o.EQUAL);break;case Ih:o.depthFunc(o.GEQUAL);break;case Bh:o.depthFunc(o.GREATER);break;case Hh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Ht=xt}},setLocked:function(xt){k=xt},setClear:function(xt){bt!==xt&&(It&&(xt=1-xt),o.clearDepth(xt),bt=xt)},reset:function(){k=!1,Dt=null,Ht=null,bt=null,It=!1}}}function l(){let k=!1,It=null,Dt=null,Ht=null,bt=null,xt=null,Lt=null,ue=null,Ie=null;return{setTest:function(De){k||(De?ft(o.STENCIL_TEST):Pt(o.STENCIL_TEST))},setMask:function(De){It!==De&&!k&&(o.stencilMask(De),It=De)},setFunc:function(De,Ue,Yn){(Dt!==De||Ht!==Ue||bt!==Yn)&&(o.stencilFunc(De,Ue,Yn),Dt=De,Ht=Ue,bt=Yn)},setOp:function(De,Ue,Yn){(xt!==De||Lt!==Ue||ue!==Yn)&&(o.stencilOp(De,Ue,Yn),xt=De,Lt=Ue,ue=Yn)},setLocked:function(De){k=De},setClear:function(De){Ie!==De&&(o.clearStencil(De),Ie=De)},reset:function(){k=!1,It=null,Dt=null,Ht=null,bt=null,xt=null,Lt=null,ue=null,Ie=null}}}const u=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let g={},_={},S=new WeakMap,E=[],R=null,w=!1,M=null,x=null,z=null,P=null,L=null,F=null,I=null,N=new Fe(0,0,0),Z=0,A=!1,C=null,G=null,K=null,it=null,pt=null;const ht=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,H=0;const rt=o.getParameter(o.VERSION);rt.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(rt)[1]),O=H>=1):rt.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(rt)[1]),O=H>=2);let ct=null,Tt={};const U=o.getParameter(o.SCISSOR_BOX),st=o.getParameter(o.VIEWPORT),St=new dn().fromArray(U),Ut=new dn().fromArray(st);function kt(k,It,Dt,Ht){const bt=new Uint8Array(4),xt=o.createTexture();o.bindTexture(k,xt),o.texParameteri(k,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(k,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Lt=0;Lt<Dt;Lt++)k===o.TEXTURE_3D||k===o.TEXTURE_2D_ARRAY?o.texImage3D(It,0,o.RGBA,1,1,Ht,0,o.RGBA,o.UNSIGNED_BYTE,bt):o.texImage2D(It+Lt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,bt);return xt}const J={};J[o.TEXTURE_2D]=kt(o.TEXTURE_2D,o.TEXTURE_2D,1),J[o.TEXTURE_CUBE_MAP]=kt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[o.TEXTURE_2D_ARRAY]=kt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),J[o.TEXTURE_3D]=kt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),ft(o.DEPTH_TEST),h.setFunc(Ir),he(!1),sn(Cg),ft(o.CULL_FACE),me(Ca);function ft(k){g[k]!==!0&&(o.enable(k),g[k]=!0)}function Pt(k){g[k]!==!1&&(o.disable(k),g[k]=!1)}function te(k,It){return _[k]!==It?(o.bindFramebuffer(k,It),_[k]=It,k===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=It),k===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=It),!0):!1}function qt(k,It){let Dt=E,Ht=!1;if(k){Dt=S.get(It),Dt===void 0&&(Dt=[],S.set(It,Dt));const bt=k.textures;if(Dt.length!==bt.length||Dt[0]!==o.COLOR_ATTACHMENT0){for(let xt=0,Lt=bt.length;xt<Lt;xt++)Dt[xt]=o.COLOR_ATTACHMENT0+xt;Dt.length=bt.length,Ht=!0}}else Dt[0]!==o.BACK&&(Dt[0]=o.BACK,Ht=!0);Ht&&o.drawBuffers(Dt)}function Se(k){return R!==k?(o.useProgram(k),R=k,!0):!1}const Qe={[Hs]:o.FUNC_ADD,[ES]:o.FUNC_SUBTRACT,[TS]:o.FUNC_REVERSE_SUBTRACT};Qe[bS]=o.MIN,Qe[AS]=o.MAX;const Me={[RS]:o.ZERO,[wS]:o.ONE,[CS]:o.SRC_COLOR,[Lh]:o.SRC_ALPHA,[PS]:o.SRC_ALPHA_SATURATE,[NS]:o.DST_COLOR,[US]:o.DST_ALPHA,[DS]:o.ONE_MINUS_SRC_COLOR,[Nh]:o.ONE_MINUS_SRC_ALPHA,[OS]:o.ONE_MINUS_DST_COLOR,[LS]:o.ONE_MINUS_DST_ALPHA,[zS]:o.CONSTANT_COLOR,[FS]:o.ONE_MINUS_CONSTANT_COLOR,[IS]:o.CONSTANT_ALPHA,[BS]:o.ONE_MINUS_CONSTANT_ALPHA};function me(k,It,Dt,Ht,bt,xt,Lt,ue,Ie,De){if(k===Ca){w===!0&&(Pt(o.BLEND),w=!1);return}if(w===!1&&(ft(o.BLEND),w=!0),k!==yS){if(k!==M||De!==A){if((x!==Hs||L!==Hs)&&(o.blendEquation(o.FUNC_ADD),x=Hs,L=Hs),De)switch(k){case zr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Dg:o.blendFunc(o.ONE,o.ONE);break;case Ug:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Lg:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Ge("WebGLState: Invalid blending: ",k);break}else switch(k){case zr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Dg:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Ug:Ge("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Lg:Ge("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ge("WebGLState: Invalid blending: ",k);break}z=null,P=null,F=null,I=null,N.set(0,0,0),Z=0,M=k,A=De}return}bt=bt||It,xt=xt||Dt,Lt=Lt||Ht,(It!==x||bt!==L)&&(o.blendEquationSeparate(Qe[It],Qe[bt]),x=It,L=bt),(Dt!==z||Ht!==P||xt!==F||Lt!==I)&&(o.blendFuncSeparate(Me[Dt],Me[Ht],Me[xt],Me[Lt]),z=Dt,P=Ht,F=xt,I=Lt),(ue.equals(N)===!1||Ie!==Z)&&(o.blendColor(ue.r,ue.g,ue.b,Ie),N.copy(ue),Z=Ie),M=k,A=!1}function Pe(k,It){k.side===Fi?Pt(o.CULL_FACE):ft(o.CULL_FACE);let Dt=k.side===Wn;It&&(Dt=!Dt),he(Dt),k.blending===zr&&k.transparent===!1?me(Ca):me(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),h.setFunc(k.depthFunc),h.setTest(k.depthTest),h.setMask(k.depthWrite),u.setMask(k.colorWrite);const Ht=k.stencilWrite;d.setTest(Ht),Ht&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Ye(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ft(o.SAMPLE_ALPHA_TO_COVERAGE):Pt(o.SAMPLE_ALPHA_TO_COVERAGE)}function he(k){C!==k&&(k?o.frontFace(o.CW):o.frontFace(o.CCW),C=k)}function sn(k){k!==SS?(ft(o.CULL_FACE),k!==G&&(k===Cg?o.cullFace(o.BACK):k===MS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Pt(o.CULL_FACE),G=k}function V(k){k!==K&&(O&&o.lineWidth(k),K=k)}function Ye(k,It,Dt){k?(ft(o.POLYGON_OFFSET_FILL),(it!==It||pt!==Dt)&&(o.polygonOffset(It,Dt),it=It,pt=Dt)):Pt(o.POLYGON_OFFSET_FILL)}function ye(k){k?ft(o.SCISSOR_TEST):Pt(o.SCISSOR_TEST)}function Oe(k){k===void 0&&(k=o.TEXTURE0+ht-1),ct!==k&&(o.activeTexture(k),ct=k)}function Yt(k,It,Dt){Dt===void 0&&(ct===null?Dt=o.TEXTURE0+ht-1:Dt=ct);let Ht=Tt[Dt];Ht===void 0&&(Ht={type:void 0,texture:void 0},Tt[Dt]=Ht),(Ht.type!==k||Ht.texture!==It)&&(ct!==Dt&&(o.activeTexture(Dt),ct=Dt),o.bindTexture(k,It||J[k]),Ht.type=k,Ht.texture=It)}function D(){const k=Tt[ct];k!==void 0&&k.type!==void 0&&(o.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function y(){try{o.compressedTexImage2D(...arguments)}catch(k){Ge("WebGLState:",k)}}function W(){try{o.compressedTexImage3D(...arguments)}catch(k){Ge("WebGLState:",k)}}function _t(){try{o.texSubImage2D(...arguments)}catch(k){Ge("WebGLState:",k)}}function Et(){try{o.texSubImage3D(...arguments)}catch(k){Ge("WebGLState:",k)}}function at(){try{o.compressedTexSubImage2D(...arguments)}catch(k){Ge("WebGLState:",k)}}function jt(){try{o.compressedTexSubImage3D(...arguments)}catch(k){Ge("WebGLState:",k)}}function Ot(){try{o.texStorage2D(...arguments)}catch(k){Ge("WebGLState:",k)}}function $t(){try{o.texStorage3D(...arguments)}catch(k){Ge("WebGLState:",k)}}function le(){try{o.texImage2D(...arguments)}catch(k){Ge("WebGLState:",k)}}function At(){try{o.texImage3D(...arguments)}catch(k){Ge("WebGLState:",k)}}function Ct(k){St.equals(k)===!1&&(o.scissor(k.x,k.y,k.z,k.w),St.copy(k))}function Gt(k){Ut.equals(k)===!1&&(o.viewport(k.x,k.y,k.z,k.w),Ut.copy(k))}function zt(k,It){let Dt=p.get(It);Dt===void 0&&(Dt=new WeakMap,p.set(It,Dt));let Ht=Dt.get(k);Ht===void 0&&(Ht=o.getUniformBlockIndex(It,k.name),Dt.set(k,Ht))}function Ft(k,It){const Ht=p.get(It).get(k);m.get(It)!==Ht&&(o.uniformBlockBinding(It,Ht,k.__bindingPointIndex),m.set(It,Ht))}function fe(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),g={},ct=null,Tt={},_={},S=new WeakMap,E=[],R=null,w=!1,M=null,x=null,z=null,P=null,L=null,F=null,I=null,N=new Fe(0,0,0),Z=0,A=!1,C=null,G=null,K=null,it=null,pt=null,St.set(0,0,o.canvas.width,o.canvas.height),Ut.set(0,0,o.canvas.width,o.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:ft,disable:Pt,bindFramebuffer:te,drawBuffers:qt,useProgram:Se,setBlending:me,setMaterial:Pe,setFlipSided:he,setCullFace:sn,setLineWidth:V,setPolygonOffset:Ye,setScissorTest:ye,activeTexture:Oe,bindTexture:Yt,unbindTexture:D,compressedTexImage2D:y,compressedTexImage3D:W,texImage2D:le,texImage3D:At,updateUBOMapping:zt,uniformBlockBinding:Ft,texStorage2D:Ot,texStorage3D:$t,texSubImage2D:_t,texSubImage3D:Et,compressedTexSubImage2D:at,compressedTexSubImage3D:jt,scissor:Ct,viewport:Gt,reset:fe}}function E1(o,e,i,s,l,u,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ve,g=new WeakMap;let _;const S=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(D,y){return E?new OffscreenCanvas(D,y):Bc("canvas")}function w(D,y,W){let _t=1;const Et=Yt(D);if((Et.width>W||Et.height>W)&&(_t=W/Math.max(Et.width,Et.height)),_t<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const at=Math.floor(_t*Et.width),jt=Math.floor(_t*Et.height);_===void 0&&(_=R(at,jt));const Ot=y?R(at,jt):_;return Ot.width=at,Ot.height=jt,Ot.getContext("2d").drawImage(D,0,0,at,jt),pe("WebGLRenderer: Texture has been resized from ("+Et.width+"x"+Et.height+") to ("+at+"x"+jt+")."),Ot}else return"data"in D&&pe("WebGLRenderer: Image in DataTexture is too big ("+Et.width+"x"+Et.height+")."),D;return D}function M(D){return D.generateMipmaps}function x(D){o.generateMipmap(D)}function z(D){return D.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?o.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function P(D,y,W,_t,Et=!1){if(D!==null){if(o[D]!==void 0)return o[D];pe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let at=y;if(y===o.RED&&(W===o.FLOAT&&(at=o.R32F),W===o.HALF_FLOAT&&(at=o.R16F),W===o.UNSIGNED_BYTE&&(at=o.R8)),y===o.RED_INTEGER&&(W===o.UNSIGNED_BYTE&&(at=o.R8UI),W===o.UNSIGNED_SHORT&&(at=o.R16UI),W===o.UNSIGNED_INT&&(at=o.R32UI),W===o.BYTE&&(at=o.R8I),W===o.SHORT&&(at=o.R16I),W===o.INT&&(at=o.R32I)),y===o.RG&&(W===o.FLOAT&&(at=o.RG32F),W===o.HALF_FLOAT&&(at=o.RG16F),W===o.UNSIGNED_BYTE&&(at=o.RG8)),y===o.RG_INTEGER&&(W===o.UNSIGNED_BYTE&&(at=o.RG8UI),W===o.UNSIGNED_SHORT&&(at=o.RG16UI),W===o.UNSIGNED_INT&&(at=o.RG32UI),W===o.BYTE&&(at=o.RG8I),W===o.SHORT&&(at=o.RG16I),W===o.INT&&(at=o.RG32I)),y===o.RGB_INTEGER&&(W===o.UNSIGNED_BYTE&&(at=o.RGB8UI),W===o.UNSIGNED_SHORT&&(at=o.RGB16UI),W===o.UNSIGNED_INT&&(at=o.RGB32UI),W===o.BYTE&&(at=o.RGB8I),W===o.SHORT&&(at=o.RGB16I),W===o.INT&&(at=o.RGB32I)),y===o.RGBA_INTEGER&&(W===o.UNSIGNED_BYTE&&(at=o.RGBA8UI),W===o.UNSIGNED_SHORT&&(at=o.RGBA16UI),W===o.UNSIGNED_INT&&(at=o.RGBA32UI),W===o.BYTE&&(at=o.RGBA8I),W===o.SHORT&&(at=o.RGBA16I),W===o.INT&&(at=o.RGBA32I)),y===o.RGB&&(W===o.UNSIGNED_INT_5_9_9_9_REV&&(at=o.RGB9_E5),W===o.UNSIGNED_INT_10F_11F_11F_REV&&(at=o.R11F_G11F_B10F)),y===o.RGBA){const jt=Et?Fc:ze.getTransfer(_t);W===o.FLOAT&&(at=o.RGBA32F),W===o.HALF_FLOAT&&(at=o.RGBA16F),W===o.UNSIGNED_BYTE&&(at=jt===qe?o.SRGB8_ALPHA8:o.RGBA8),W===o.UNSIGNED_SHORT_4_4_4_4&&(at=o.RGBA4),W===o.UNSIGNED_SHORT_5_5_5_1&&(at=o.RGB5_A1)}return(at===o.R16F||at===o.R32F||at===o.RG16F||at===o.RG32F||at===o.RGBA16F||at===o.RGBA32F)&&e.get("EXT_color_buffer_float"),at}function L(D,y){let W;return D?y===null||y===$i||y===jo?W=o.DEPTH24_STENCIL8:y===Zi?W=o.DEPTH32F_STENCIL8:y===Zo&&(W=o.DEPTH24_STENCIL8,pe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===$i||y===jo?W=o.DEPTH_COMPONENT24:y===Zi?W=o.DEPTH_COMPONENT32F:y===Zo&&(W=o.DEPTH_COMPONENT16),W}function F(D,y){return M(D)===!0||D.isFramebufferTexture&&D.minFilter!==Pn&&D.minFilter!==Bn?Math.log2(Math.max(y.width,y.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?y.mipmaps.length:1}function I(D){const y=D.target;y.removeEventListener("dispose",I),Z(y),y.isVideoTexture&&g.delete(y)}function N(D){const y=D.target;y.removeEventListener("dispose",N),C(y)}function Z(D){const y=s.get(D);if(y.__webglInit===void 0)return;const W=D.source,_t=S.get(W);if(_t){const Et=_t[y.__cacheKey];Et.usedTimes--,Et.usedTimes===0&&A(D),Object.keys(_t).length===0&&S.delete(W)}s.remove(D)}function A(D){const y=s.get(D);o.deleteTexture(y.__webglTexture);const W=D.source,_t=S.get(W);delete _t[y.__cacheKey],h.memory.textures--}function C(D){const y=s.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),s.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let _t=0;_t<6;_t++){if(Array.isArray(y.__webglFramebuffer[_t]))for(let Et=0;Et<y.__webglFramebuffer[_t].length;Et++)o.deleteFramebuffer(y.__webglFramebuffer[_t][Et]);else o.deleteFramebuffer(y.__webglFramebuffer[_t]);y.__webglDepthbuffer&&o.deleteRenderbuffer(y.__webglDepthbuffer[_t])}else{if(Array.isArray(y.__webglFramebuffer))for(let _t=0;_t<y.__webglFramebuffer.length;_t++)o.deleteFramebuffer(y.__webglFramebuffer[_t]);else o.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&o.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&o.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let _t=0;_t<y.__webglColorRenderbuffer.length;_t++)y.__webglColorRenderbuffer[_t]&&o.deleteRenderbuffer(y.__webglColorRenderbuffer[_t]);y.__webglDepthRenderbuffer&&o.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const W=D.textures;for(let _t=0,Et=W.length;_t<Et;_t++){const at=s.get(W[_t]);at.__webglTexture&&(o.deleteTexture(at.__webglTexture),h.memory.textures--),s.remove(W[_t])}s.remove(D)}let G=0;function K(){G=0}function it(){const D=G;return D>=l.maxTextures&&pe("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l.maxTextures),G+=1,D}function pt(D){const y=[];return y.push(D.wrapS),y.push(D.wrapT),y.push(D.wrapR||0),y.push(D.magFilter),y.push(D.minFilter),y.push(D.anisotropy),y.push(D.internalFormat),y.push(D.format),y.push(D.type),y.push(D.generateMipmaps),y.push(D.premultiplyAlpha),y.push(D.flipY),y.push(D.unpackAlignment),y.push(D.colorSpace),y.join()}function ht(D,y){const W=s.get(D);if(D.isVideoTexture&&ye(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&W.__version!==D.version){const _t=D.image;if(_t===null)pe("WebGLRenderer: Texture marked for update but no image data found.");else if(_t.complete===!1)pe("WebGLRenderer: Texture marked for update but image is incomplete");else{J(W,D,y);return}}else D.isExternalTexture&&(W.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,W.__webglTexture,o.TEXTURE0+y)}function O(D,y){const W=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&W.__version!==D.version){J(W,D,y);return}else D.isExternalTexture&&(W.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,W.__webglTexture,o.TEXTURE0+y)}function H(D,y){const W=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&W.__version!==D.version){J(W,D,y);return}i.bindTexture(o.TEXTURE_3D,W.__webglTexture,o.TEXTURE0+y)}function rt(D,y){const W=s.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&W.__version!==D.version){ft(W,D,y);return}i.bindTexture(o.TEXTURE_CUBE_MAP,W.__webglTexture,o.TEXTURE0+y)}const ct={[Xh]:o.REPEAT,[wa]:o.CLAMP_TO_EDGE,[kh]:o.MIRRORED_REPEAT},Tt={[Pn]:o.NEAREST,[VS]:o.NEAREST_MIPMAP_NEAREST,[fc]:o.NEAREST_MIPMAP_LINEAR,[Bn]:o.LINEAR,[th]:o.LINEAR_MIPMAP_NEAREST,[Vs]:o.LINEAR_MIPMAP_LINEAR},U={[WS]:o.NEVER,[KS]:o.ALWAYS,[qS]:o.LESS,[Od]:o.LEQUAL,[YS]:o.EQUAL,[Pd]:o.GEQUAL,[ZS]:o.GREATER,[jS]:o.NOTEQUAL};function st(D,y){if(y.type===Zi&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Bn||y.magFilter===th||y.magFilter===fc||y.magFilter===Vs||y.minFilter===Bn||y.minFilter===th||y.minFilter===fc||y.minFilter===Vs)&&pe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(D,o.TEXTURE_WRAP_S,ct[y.wrapS]),o.texParameteri(D,o.TEXTURE_WRAP_T,ct[y.wrapT]),(D===o.TEXTURE_3D||D===o.TEXTURE_2D_ARRAY)&&o.texParameteri(D,o.TEXTURE_WRAP_R,ct[y.wrapR]),o.texParameteri(D,o.TEXTURE_MAG_FILTER,Tt[y.magFilter]),o.texParameteri(D,o.TEXTURE_MIN_FILTER,Tt[y.minFilter]),y.compareFunction&&(o.texParameteri(D,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(D,o.TEXTURE_COMPARE_FUNC,U[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Pn||y.minFilter!==fc&&y.minFilter!==Vs||y.type===Zi&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||s.get(y).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");o.texParameterf(D,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,l.getMaxAnisotropy())),s.get(y).__currentAnisotropy=y.anisotropy}}}function St(D,y){let W=!1;D.__webglInit===void 0&&(D.__webglInit=!0,y.addEventListener("dispose",I));const _t=y.source;let Et=S.get(_t);Et===void 0&&(Et={},S.set(_t,Et));const at=pt(y);if(at!==D.__cacheKey){Et[at]===void 0&&(Et[at]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,W=!0),Et[at].usedTimes++;const jt=Et[D.__cacheKey];jt!==void 0&&(Et[D.__cacheKey].usedTimes--,jt.usedTimes===0&&A(y)),D.__cacheKey=at,D.__webglTexture=Et[at].texture}return W}function Ut(D,y,W){return Math.floor(Math.floor(D/W)/y)}function kt(D,y,W,_t){const at=D.updateRanges;if(at.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,y.width,y.height,W,_t,y.data);else{at.sort((At,Ct)=>At.start-Ct.start);let jt=0;for(let At=1;At<at.length;At++){const Ct=at[jt],Gt=at[At],zt=Ct.start+Ct.count,Ft=Ut(Gt.start,y.width,4),fe=Ut(Ct.start,y.width,4);Gt.start<=zt+1&&Ft===fe&&Ut(Gt.start+Gt.count-1,y.width,4)===Ft?Ct.count=Math.max(Ct.count,Gt.start+Gt.count-Ct.start):(++jt,at[jt]=Gt)}at.length=jt+1;const Ot=o.getParameter(o.UNPACK_ROW_LENGTH),$t=o.getParameter(o.UNPACK_SKIP_PIXELS),le=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,y.width);for(let At=0,Ct=at.length;At<Ct;At++){const Gt=at[At],zt=Math.floor(Gt.start/4),Ft=Math.ceil(Gt.count/4),fe=zt%y.width,k=Math.floor(zt/y.width),It=Ft,Dt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,fe),o.pixelStorei(o.UNPACK_SKIP_ROWS,k),i.texSubImage2D(o.TEXTURE_2D,0,fe,k,It,Dt,W,_t,y.data)}D.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ot),o.pixelStorei(o.UNPACK_SKIP_PIXELS,$t),o.pixelStorei(o.UNPACK_SKIP_ROWS,le)}}function J(D,y,W){let _t=o.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(_t=o.TEXTURE_2D_ARRAY),y.isData3DTexture&&(_t=o.TEXTURE_3D);const Et=St(D,y),at=y.source;i.bindTexture(_t,D.__webglTexture,o.TEXTURE0+W);const jt=s.get(at);if(at.version!==jt.__version||Et===!0){i.activeTexture(o.TEXTURE0+W);const Ot=ze.getPrimaries(ze.workingColorSpace),$t=y.colorSpace===fs?null:ze.getPrimaries(y.colorSpace),le=y.colorSpace===fs||Ot===$t?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,y.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,y.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);let At=w(y.image,!1,l.maxTextureSize);At=Oe(y,At);const Ct=u.convert(y.format,y.colorSpace),Gt=u.convert(y.type);let zt=P(y.internalFormat,Ct,Gt,y.colorSpace,y.isVideoTexture);st(_t,y);let Ft;const fe=y.mipmaps,k=y.isVideoTexture!==!0,It=jt.__version===void 0||Et===!0,Dt=at.dataReady,Ht=F(y,At);if(y.isDepthTexture)zt=L(y.format===Xs,y.type),It&&(k?i.texStorage2D(o.TEXTURE_2D,1,zt,At.width,At.height):i.texImage2D(o.TEXTURE_2D,0,zt,At.width,At.height,0,Ct,Gt,null));else if(y.isDataTexture)if(fe.length>0){k&&It&&i.texStorage2D(o.TEXTURE_2D,Ht,zt,fe[0].width,fe[0].height);for(let bt=0,xt=fe.length;bt<xt;bt++)Ft=fe[bt],k?Dt&&i.texSubImage2D(o.TEXTURE_2D,bt,0,0,Ft.width,Ft.height,Ct,Gt,Ft.data):i.texImage2D(o.TEXTURE_2D,bt,zt,Ft.width,Ft.height,0,Ct,Gt,Ft.data);y.generateMipmaps=!1}else k?(It&&i.texStorage2D(o.TEXTURE_2D,Ht,zt,At.width,At.height),Dt&&kt(y,At,Ct,Gt)):i.texImage2D(o.TEXTURE_2D,0,zt,At.width,At.height,0,Ct,Gt,At.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){k&&It&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ht,zt,fe[0].width,fe[0].height,At.depth);for(let bt=0,xt=fe.length;bt<xt;bt++)if(Ft=fe[bt],y.format!==Bi)if(Ct!==null)if(k){if(Dt)if(y.layerUpdates.size>0){const Lt=n_(Ft.width,Ft.height,y.format,y.type);for(const ue of y.layerUpdates){const Ie=Ft.data.subarray(ue*Lt/Ft.data.BYTES_PER_ELEMENT,(ue+1)*Lt/Ft.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,bt,0,0,ue,Ft.width,Ft.height,1,Ct,Ie)}y.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,bt,0,0,0,Ft.width,Ft.height,At.depth,Ct,Ft.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,bt,zt,Ft.width,Ft.height,At.depth,0,Ft.data,0,0);else pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?Dt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,bt,0,0,0,Ft.width,Ft.height,At.depth,Ct,Gt,Ft.data):i.texImage3D(o.TEXTURE_2D_ARRAY,bt,zt,Ft.width,Ft.height,At.depth,0,Ct,Gt,Ft.data)}else{k&&It&&i.texStorage2D(o.TEXTURE_2D,Ht,zt,fe[0].width,fe[0].height);for(let bt=0,xt=fe.length;bt<xt;bt++)Ft=fe[bt],y.format!==Bi?Ct!==null?k?Dt&&i.compressedTexSubImage2D(o.TEXTURE_2D,bt,0,0,Ft.width,Ft.height,Ct,Ft.data):i.compressedTexImage2D(o.TEXTURE_2D,bt,zt,Ft.width,Ft.height,0,Ft.data):pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?Dt&&i.texSubImage2D(o.TEXTURE_2D,bt,0,0,Ft.width,Ft.height,Ct,Gt,Ft.data):i.texImage2D(o.TEXTURE_2D,bt,zt,Ft.width,Ft.height,0,Ct,Gt,Ft.data)}else if(y.isDataArrayTexture)if(k){if(It&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ht,zt,At.width,At.height,At.depth),Dt)if(y.layerUpdates.size>0){const bt=n_(At.width,At.height,y.format,y.type);for(const xt of y.layerUpdates){const Lt=At.data.subarray(xt*bt/At.data.BYTES_PER_ELEMENT,(xt+1)*bt/At.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,xt,At.width,At.height,1,Ct,Gt,Lt)}y.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,At.width,At.height,At.depth,Ct,Gt,At.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,zt,At.width,At.height,At.depth,0,Ct,Gt,At.data);else if(y.isData3DTexture)k?(It&&i.texStorage3D(o.TEXTURE_3D,Ht,zt,At.width,At.height,At.depth),Dt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,At.width,At.height,At.depth,Ct,Gt,At.data)):i.texImage3D(o.TEXTURE_3D,0,zt,At.width,At.height,At.depth,0,Ct,Gt,At.data);else if(y.isFramebufferTexture){if(It)if(k)i.texStorage2D(o.TEXTURE_2D,Ht,zt,At.width,At.height);else{let bt=At.width,xt=At.height;for(let Lt=0;Lt<Ht;Lt++)i.texImage2D(o.TEXTURE_2D,Lt,zt,bt,xt,0,Ct,Gt,null),bt>>=1,xt>>=1}}else if(fe.length>0){if(k&&It){const bt=Yt(fe[0]);i.texStorage2D(o.TEXTURE_2D,Ht,zt,bt.width,bt.height)}for(let bt=0,xt=fe.length;bt<xt;bt++)Ft=fe[bt],k?Dt&&i.texSubImage2D(o.TEXTURE_2D,bt,0,0,Ct,Gt,Ft):i.texImage2D(o.TEXTURE_2D,bt,zt,Ct,Gt,Ft);y.generateMipmaps=!1}else if(k){if(It){const bt=Yt(At);i.texStorage2D(o.TEXTURE_2D,Ht,zt,bt.width,bt.height)}Dt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ct,Gt,At)}else i.texImage2D(o.TEXTURE_2D,0,zt,Ct,Gt,At);M(y)&&x(_t),jt.__version=at.version,y.onUpdate&&y.onUpdate(y)}D.__version=y.version}function ft(D,y,W){if(y.image.length!==6)return;const _t=St(D,y),Et=y.source;i.bindTexture(o.TEXTURE_CUBE_MAP,D.__webglTexture,o.TEXTURE0+W);const at=s.get(Et);if(Et.version!==at.__version||_t===!0){i.activeTexture(o.TEXTURE0+W);const jt=ze.getPrimaries(ze.workingColorSpace),Ot=y.colorSpace===fs?null:ze.getPrimaries(y.colorSpace),$t=y.colorSpace===fs||jt===Ot?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,y.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,y.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);const le=y.isCompressedTexture||y.image[0].isCompressedTexture,At=y.image[0]&&y.image[0].isDataTexture,Ct=[];for(let xt=0;xt<6;xt++)!le&&!At?Ct[xt]=w(y.image[xt],!0,l.maxCubemapSize):Ct[xt]=At?y.image[xt].image:y.image[xt],Ct[xt]=Oe(y,Ct[xt]);const Gt=Ct[0],zt=u.convert(y.format,y.colorSpace),Ft=u.convert(y.type),fe=P(y.internalFormat,zt,Ft,y.colorSpace),k=y.isVideoTexture!==!0,It=at.__version===void 0||_t===!0,Dt=Et.dataReady;let Ht=F(y,Gt);st(o.TEXTURE_CUBE_MAP,y);let bt;if(le){k&&It&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Ht,fe,Gt.width,Gt.height);for(let xt=0;xt<6;xt++){bt=Ct[xt].mipmaps;for(let Lt=0;Lt<bt.length;Lt++){const ue=bt[Lt];y.format!==Bi?zt!==null?k?Dt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Lt,0,0,ue.width,ue.height,zt,ue.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Lt,fe,ue.width,ue.height,0,ue.data):pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?Dt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Lt,0,0,ue.width,ue.height,zt,Ft,ue.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Lt,fe,ue.width,ue.height,0,zt,Ft,ue.data)}}}else{if(bt=y.mipmaps,k&&It){bt.length>0&&Ht++;const xt=Yt(Ct[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Ht,fe,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(At){k?Dt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Ct[xt].width,Ct[xt].height,zt,Ft,Ct[xt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,fe,Ct[xt].width,Ct[xt].height,0,zt,Ft,Ct[xt].data);for(let Lt=0;Lt<bt.length;Lt++){const Ie=bt[Lt].image[xt].image;k?Dt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Lt+1,0,0,Ie.width,Ie.height,zt,Ft,Ie.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Lt+1,fe,Ie.width,Ie.height,0,zt,Ft,Ie.data)}}else{k?Dt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,zt,Ft,Ct[xt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,fe,zt,Ft,Ct[xt]);for(let Lt=0;Lt<bt.length;Lt++){const ue=bt[Lt];k?Dt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Lt+1,0,0,zt,Ft,ue.image[xt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Lt+1,fe,zt,Ft,ue.image[xt])}}}M(y)&&x(o.TEXTURE_CUBE_MAP),at.__version=Et.version,y.onUpdate&&y.onUpdate(y)}D.__version=y.version}function Pt(D,y,W,_t,Et,at){const jt=u.convert(W.format,W.colorSpace),Ot=u.convert(W.type),$t=P(W.internalFormat,jt,Ot,W.colorSpace),le=s.get(y),At=s.get(W);if(At.__renderTarget=y,!le.__hasExternalTextures){const Ct=Math.max(1,y.width>>at),Gt=Math.max(1,y.height>>at);Et===o.TEXTURE_3D||Et===o.TEXTURE_2D_ARRAY?i.texImage3D(Et,at,$t,Ct,Gt,y.depth,0,jt,Ot,null):i.texImage2D(Et,at,$t,Ct,Gt,0,jt,Ot,null)}i.bindFramebuffer(o.FRAMEBUFFER,D),Ye(y)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,_t,Et,At.__webglTexture,0,V(y)):(Et===o.TEXTURE_2D||Et>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Et<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,_t,Et,At.__webglTexture,at),i.bindFramebuffer(o.FRAMEBUFFER,null)}function te(D,y,W){if(o.bindRenderbuffer(o.RENDERBUFFER,D),y.depthBuffer){const _t=y.depthTexture,Et=_t&&_t.isDepthTexture?_t.type:null,at=L(y.stencilBuffer,Et),jt=y.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;Ye(y)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,V(y),at,y.width,y.height):W?o.renderbufferStorageMultisample(o.RENDERBUFFER,V(y),at,y.width,y.height):o.renderbufferStorage(o.RENDERBUFFER,at,y.width,y.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,jt,o.RENDERBUFFER,D)}else{const _t=y.textures;for(let Et=0;Et<_t.length;Et++){const at=_t[Et],jt=u.convert(at.format,at.colorSpace),Ot=u.convert(at.type),$t=P(at.internalFormat,jt,Ot,at.colorSpace);Ye(y)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,V(y),$t,y.width,y.height):W?o.renderbufferStorageMultisample(o.RENDERBUFFER,V(y),$t,y.width,y.height):o.renderbufferStorage(o.RENDERBUFFER,$t,y.width,y.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function qt(D,y,W){const _t=y.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,D),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Et=s.get(y.depthTexture);if(Et.__renderTarget=y,(!Et.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),_t){if(Et.__webglInit===void 0&&(Et.__webglInit=!0,y.depthTexture.addEventListener("dispose",I)),Et.__webglTexture===void 0){Et.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,Et.__webglTexture),st(o.TEXTURE_CUBE_MAP,y.depthTexture);const le=u.convert(y.depthTexture.format),At=u.convert(y.depthTexture.type);let Ct;y.depthTexture.format===La?Ct=o.DEPTH_COMPONENT24:y.depthTexture.format===Xs&&(Ct=o.DEPTH24_STENCIL8);for(let Gt=0;Gt<6;Gt++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Gt,0,Ct,y.width,y.height,0,le,At,null)}}else ht(y.depthTexture,0);const at=Et.__webglTexture,jt=V(y),Ot=_t?o.TEXTURE_CUBE_MAP_POSITIVE_X+W:o.TEXTURE_2D,$t=y.depthTexture.format===Xs?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(y.depthTexture.format===La)Ye(y)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,$t,Ot,at,0,jt):o.framebufferTexture2D(o.FRAMEBUFFER,$t,Ot,at,0);else if(y.depthTexture.format===Xs)Ye(y)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,$t,Ot,at,0,jt):o.framebufferTexture2D(o.FRAMEBUFFER,$t,Ot,at,0);else throw new Error("Unknown depthTexture format")}function Se(D){const y=s.get(D),W=D.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==D.depthTexture){const _t=D.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),_t){const Et=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,_t.removeEventListener("dispose",Et)};_t.addEventListener("dispose",Et),y.__depthDisposeCallback=Et}y.__boundDepthTexture=_t}if(D.depthTexture&&!y.__autoAllocateDepthBuffer)if(W)for(let _t=0;_t<6;_t++)qt(y.__webglFramebuffer[_t],D,_t);else{const _t=D.texture.mipmaps;_t&&_t.length>0?qt(y.__webglFramebuffer[0],D,0):qt(y.__webglFramebuffer,D,0)}else if(W){y.__webglDepthbuffer=[];for(let _t=0;_t<6;_t++)if(i.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer[_t]),y.__webglDepthbuffer[_t]===void 0)y.__webglDepthbuffer[_t]=o.createRenderbuffer(),te(y.__webglDepthbuffer[_t],D,!1);else{const Et=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,at=y.__webglDepthbuffer[_t];o.bindRenderbuffer(o.RENDERBUFFER,at),o.framebufferRenderbuffer(o.FRAMEBUFFER,Et,o.RENDERBUFFER,at)}}else{const _t=D.texture.mipmaps;if(_t&&_t.length>0?i.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=o.createRenderbuffer(),te(y.__webglDepthbuffer,D,!1);else{const Et=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,at=y.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,at),o.framebufferRenderbuffer(o.FRAMEBUFFER,Et,o.RENDERBUFFER,at)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Qe(D,y,W){const _t=s.get(D);y!==void 0&&Pt(_t.__webglFramebuffer,D,D.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),W!==void 0&&Se(D)}function Me(D){const y=D.texture,W=s.get(D),_t=s.get(y);D.addEventListener("dispose",N);const Et=D.textures,at=D.isWebGLCubeRenderTarget===!0,jt=Et.length>1;if(jt||(_t.__webglTexture===void 0&&(_t.__webglTexture=o.createTexture()),_t.__version=y.version,h.memory.textures++),at){W.__webglFramebuffer=[];for(let Ot=0;Ot<6;Ot++)if(y.mipmaps&&y.mipmaps.length>0){W.__webglFramebuffer[Ot]=[];for(let $t=0;$t<y.mipmaps.length;$t++)W.__webglFramebuffer[Ot][$t]=o.createFramebuffer()}else W.__webglFramebuffer[Ot]=o.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){W.__webglFramebuffer=[];for(let Ot=0;Ot<y.mipmaps.length;Ot++)W.__webglFramebuffer[Ot]=o.createFramebuffer()}else W.__webglFramebuffer=o.createFramebuffer();if(jt)for(let Ot=0,$t=Et.length;Ot<$t;Ot++){const le=s.get(Et[Ot]);le.__webglTexture===void 0&&(le.__webglTexture=o.createTexture(),h.memory.textures++)}if(D.samples>0&&Ye(D)===!1){W.__webglMultisampledFramebuffer=o.createFramebuffer(),W.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Ot=0;Ot<Et.length;Ot++){const $t=Et[Ot];W.__webglColorRenderbuffer[Ot]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,W.__webglColorRenderbuffer[Ot]);const le=u.convert($t.format,$t.colorSpace),At=u.convert($t.type),Ct=P($t.internalFormat,le,At,$t.colorSpace,D.isXRRenderTarget===!0),Gt=V(D);o.renderbufferStorageMultisample(o.RENDERBUFFER,Gt,Ct,D.width,D.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ot,o.RENDERBUFFER,W.__webglColorRenderbuffer[Ot])}o.bindRenderbuffer(o.RENDERBUFFER,null),D.depthBuffer&&(W.__webglDepthRenderbuffer=o.createRenderbuffer(),te(W.__webglDepthRenderbuffer,D,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(at){i.bindTexture(o.TEXTURE_CUBE_MAP,_t.__webglTexture),st(o.TEXTURE_CUBE_MAP,y);for(let Ot=0;Ot<6;Ot++)if(y.mipmaps&&y.mipmaps.length>0)for(let $t=0;$t<y.mipmaps.length;$t++)Pt(W.__webglFramebuffer[Ot][$t],D,y,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,$t);else Pt(W.__webglFramebuffer[Ot],D,y,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,0);M(y)&&x(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(jt){for(let Ot=0,$t=Et.length;Ot<$t;Ot++){const le=Et[Ot],At=s.get(le);let Ct=o.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ct=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ct,At.__webglTexture),st(Ct,le),Pt(W.__webglFramebuffer,D,le,o.COLOR_ATTACHMENT0+Ot,Ct,0),M(le)&&x(Ct)}i.unbindTexture()}else{let Ot=o.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ot=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ot,_t.__webglTexture),st(Ot,y),y.mipmaps&&y.mipmaps.length>0)for(let $t=0;$t<y.mipmaps.length;$t++)Pt(W.__webglFramebuffer[$t],D,y,o.COLOR_ATTACHMENT0,Ot,$t);else Pt(W.__webglFramebuffer,D,y,o.COLOR_ATTACHMENT0,Ot,0);M(y)&&x(Ot),i.unbindTexture()}D.depthBuffer&&Se(D)}function me(D){const y=D.textures;for(let W=0,_t=y.length;W<_t;W++){const Et=y[W];if(M(Et)){const at=z(D),jt=s.get(Et).__webglTexture;i.bindTexture(at,jt),x(at),i.unbindTexture()}}}const Pe=[],he=[];function sn(D){if(D.samples>0){if(Ye(D)===!1){const y=D.textures,W=D.width,_t=D.height;let Et=o.COLOR_BUFFER_BIT;const at=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,jt=s.get(D),Ot=y.length>1;if(Ot)for(let le=0;le<y.length;le++)i.bindFramebuffer(o.FRAMEBUFFER,jt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+le,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,jt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+le,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,jt.__webglMultisampledFramebuffer);const $t=D.texture.mipmaps;$t&&$t.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,jt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,jt.__webglFramebuffer);for(let le=0;le<y.length;le++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(Et|=o.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(Et|=o.STENCIL_BUFFER_BIT)),Ot){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,jt.__webglColorRenderbuffer[le]);const At=s.get(y[le]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,At,0)}o.blitFramebuffer(0,0,W,_t,0,0,W,_t,Et,o.NEAREST),m===!0&&(Pe.length=0,he.length=0,Pe.push(o.COLOR_ATTACHMENT0+le),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Pe.push(at),he.push(at),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,he)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Pe))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ot)for(let le=0;le<y.length;le++){i.bindFramebuffer(o.FRAMEBUFFER,jt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+le,o.RENDERBUFFER,jt.__webglColorRenderbuffer[le]);const At=s.get(y[le]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,jt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+le,o.TEXTURE_2D,At,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,jt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&m){const y=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[y])}}}function V(D){return Math.min(l.maxSamples,D.samples)}function Ye(D){const y=s.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ye(D){const y=h.render.frame;g.get(D)!==y&&(g.set(D,y),D.update())}function Oe(D,y){const W=D.colorSpace,_t=D.format,Et=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||W!==Gr&&W!==fs&&(ze.getTransfer(W)===qe?(_t!==Bi||Et!==di)&&pe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ge("WebGLTextures: Unsupported texture color space:",W)),y}function Yt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=it,this.resetTextureUnits=K,this.setTexture2D=ht,this.setTexture2DArray=O,this.setTexture3D=H,this.setTextureCube=rt,this.rebindTextures=Qe,this.setupRenderTarget=Me,this.updateRenderTargetMipmap=me,this.updateMultisampleRenderTarget=sn,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=Pt,this.useMultisampledRTT=Ye,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function T1(o,e){function i(s,l=fs){let u;const h=ze.getTransfer(l);if(s===di)return o.UNSIGNED_BYTE;if(s===Cd)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Dd)return o.UNSIGNED_SHORT_5_5_5_1;if(s===I_)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===B_)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===z_)return o.BYTE;if(s===F_)return o.SHORT;if(s===Zo)return o.UNSIGNED_SHORT;if(s===wd)return o.INT;if(s===$i)return o.UNSIGNED_INT;if(s===Zi)return o.FLOAT;if(s===Ua)return o.HALF_FLOAT;if(s===H_)return o.ALPHA;if(s===G_)return o.RGB;if(s===Bi)return o.RGBA;if(s===La)return o.DEPTH_COMPONENT;if(s===Xs)return o.DEPTH_STENCIL;if(s===V_)return o.RED;if(s===Ud)return o.RED_INTEGER;if(s===Hr)return o.RG;if(s===Ld)return o.RG_INTEGER;if(s===Nd)return o.RGBA_INTEGER;if(s===Lc||s===Nc||s===Oc||s===Pc)if(h===qe)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===Lc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Nc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Oc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Pc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===Lc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Nc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Oc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Pc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Wh||s===qh||s===Yh||s===Zh)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===Wh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===qh)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Yh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Zh)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===jh||s===Kh||s===Qh||s===Jh||s===$h||s===td||s===ed)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(s===jh||s===Kh)return h===qe?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===Qh)return h===qe?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(s===Jh)return u.COMPRESSED_R11_EAC;if(s===$h)return u.COMPRESSED_SIGNED_R11_EAC;if(s===td)return u.COMPRESSED_RG11_EAC;if(s===ed)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===nd||s===id||s===ad||s===sd||s===rd||s===od||s===ld||s===cd||s===ud||s===fd||s===hd||s===dd||s===pd||s===md)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(s===nd)return h===qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===id)return h===qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ad)return h===qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===sd)return h===qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===rd)return h===qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===od)return h===qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ld)return h===qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===cd)return h===qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ud)return h===qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===fd)return h===qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===hd)return h===qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===dd)return h===qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===pd)return h===qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===md)return h===qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===gd||s===_d||s===vd)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(s===gd)return h===qe?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===_d)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===vd)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===xd||s===Sd||s===Md||s===yd)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(s===xd)return u.COMPRESSED_RED_RGTC1_EXT;if(s===Sd)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Md)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===yd)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===jo?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const b1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,A1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class R1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new ev(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new ea({vertexShader:b1,fragmentShader:A1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Jt(new Xr(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class w1 extends kr{constructor(e,i){super();const s=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,g=null,_=null,S=null,E=null,R=null;const w=typeof XRWebGLBinding<"u",M=new R1,x={},z=i.getContextAttributes();let P=null,L=null;const F=[],I=[],N=new Ve;let Z=null;const A=new Ri;A.viewport=new dn;const C=new Ri;C.viewport=new dn;const G=[A,C],K=new IM;let it=null,pt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ft=F[J];return ft===void 0&&(ft=new Eh,F[J]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(J){let ft=F[J];return ft===void 0&&(ft=new Eh,F[J]=ft),ft.getGripSpace()},this.getHand=function(J){let ft=F[J];return ft===void 0&&(ft=new Eh,F[J]=ft),ft.getHandSpace()};function ht(J){const ft=I.indexOf(J.inputSource);if(ft===-1)return;const Pt=F[ft];Pt!==void 0&&(Pt.update(J.inputSource,J.frame,p||h),Pt.dispatchEvent({type:J.type,data:J.inputSource}))}function O(){l.removeEventListener("select",ht),l.removeEventListener("selectstart",ht),l.removeEventListener("selectend",ht),l.removeEventListener("squeeze",ht),l.removeEventListener("squeezestart",ht),l.removeEventListener("squeezeend",ht),l.removeEventListener("end",O),l.removeEventListener("inputsourceschange",H);for(let J=0;J<F.length;J++){const ft=I[J];ft!==null&&(I[J]=null,F[J].disconnect(ft))}it=null,pt=null,M.reset();for(const J in x)delete x[J];e.setRenderTarget(P),E=null,S=null,_=null,l=null,L=null,kt.stop(),s.isPresenting=!1,e.setPixelRatio(Z),e.setSize(N.width,N.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){u=J,s.isPresenting===!0&&pe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){d=J,s.isPresenting===!0&&pe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(J){p=J},this.getBaseLayer=function(){return S!==null?S:E},this.getBinding=function(){return _===null&&w&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return R},this.getSession=function(){return l},this.setSession=async function(J){if(l=J,l!==null){if(P=e.getRenderTarget(),l.addEventListener("select",ht),l.addEventListener("selectstart",ht),l.addEventListener("selectend",ht),l.addEventListener("squeeze",ht),l.addEventListener("squeezestart",ht),l.addEventListener("squeezeend",ht),l.addEventListener("end",O),l.addEventListener("inputsourceschange",H),z.xrCompatible!==!0&&await i.makeXRCompatible(),Z=e.getPixelRatio(),e.getSize(N),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Pt=null,te=null,qt=null;z.depth&&(qt=z.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Pt=z.stencil?Xs:La,te=z.stencil?jo:$i);const Se={colorFormat:i.RGBA8,depthFormat:qt,scaleFactor:u};_=this.getBinding(),S=_.createProjectionLayer(Se),l.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),L=new Qi(S.textureWidth,S.textureHeight,{format:Bi,type:di,depthTexture:new Qo(S.textureWidth,S.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,Pt),stencilBuffer:z.stencil,colorSpace:e.outputColorSpace,samples:z.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const Pt={antialias:z.antialias,alpha:!0,depth:z.depth,stencil:z.stencil,framebufferScaleFactor:u};E=new XRWebGLLayer(l,i,Pt),l.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),L=new Qi(E.framebufferWidth,E.framebufferHeight,{format:Bi,type:di,colorSpace:e.outputColorSpace,stencilBuffer:z.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),kt.setContext(l),kt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function H(J){for(let ft=0;ft<J.removed.length;ft++){const Pt=J.removed[ft],te=I.indexOf(Pt);te>=0&&(I[te]=null,F[te].disconnect(Pt))}for(let ft=0;ft<J.added.length;ft++){const Pt=J.added[ft];let te=I.indexOf(Pt);if(te===-1){for(let Se=0;Se<F.length;Se++)if(Se>=I.length){I.push(Pt),te=Se;break}else if(I[Se]===null){I[Se]=Pt,te=Se;break}if(te===-1)break}const qt=F[te];qt&&qt.connect(Pt)}}const rt=new et,ct=new et;function Tt(J,ft,Pt){rt.setFromMatrixPosition(ft.matrixWorld),ct.setFromMatrixPosition(Pt.matrixWorld);const te=rt.distanceTo(ct),qt=ft.projectionMatrix.elements,Se=Pt.projectionMatrix.elements,Qe=qt[14]/(qt[10]-1),Me=qt[14]/(qt[10]+1),me=(qt[9]+1)/qt[5],Pe=(qt[9]-1)/qt[5],he=(qt[8]-1)/qt[0],sn=(Se[8]+1)/Se[0],V=Qe*he,Ye=Qe*sn,ye=te/(-he+sn),Oe=ye*-he;if(ft.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Oe),J.translateZ(ye),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),qt[10]===-1)J.projectionMatrix.copy(ft.projectionMatrix),J.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{const Yt=Qe+ye,D=Me+ye,y=V-Oe,W=Ye+(te-Oe),_t=me*Me/D*Yt,Et=Pe*Me/D*Yt;J.projectionMatrix.makePerspective(y,W,_t,Et,Yt,D),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function U(J,ft){ft===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ft.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(l===null)return;let ft=J.near,Pt=J.far;M.texture!==null&&(M.depthNear>0&&(ft=M.depthNear),M.depthFar>0&&(Pt=M.depthFar)),K.near=C.near=A.near=ft,K.far=C.far=A.far=Pt,(it!==K.near||pt!==K.far)&&(l.updateRenderState({depthNear:K.near,depthFar:K.far}),it=K.near,pt=K.far),K.layers.mask=J.layers.mask|6,A.layers.mask=K.layers.mask&3,C.layers.mask=K.layers.mask&5;const te=J.parent,qt=K.cameras;U(K,te);for(let Se=0;Se<qt.length;Se++)U(qt[Se],te);qt.length===2?Tt(K,A,C):K.projectionMatrix.copy(A.projectionMatrix),st(J,K,te)};function st(J,ft,Pt){Pt===null?J.matrix.copy(ft.matrixWorld):(J.matrix.copy(Pt.matrixWorld),J.matrix.invert(),J.matrix.multiply(ft.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ft.projectionMatrix),J.projectionMatrixInverse.copy(ft.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Ed*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(S===null&&E===null))return m},this.setFoveation=function(J){m=J,S!==null&&(S.fixedFoveation=J),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=J)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(K)},this.getCameraTexture=function(J){return x[J]};let St=null;function Ut(J,ft){if(g=ft.getViewerPose(p||h),R=ft,g!==null){const Pt=g.views;E!==null&&(e.setRenderTargetFramebuffer(L,E.framebuffer),e.setRenderTarget(L));let te=!1;Pt.length!==K.cameras.length&&(K.cameras.length=0,te=!0);for(let Me=0;Me<Pt.length;Me++){const me=Pt[Me];let Pe=null;if(E!==null)Pe=E.getViewport(me);else{const sn=_.getViewSubImage(S,me);Pe=sn.viewport,Me===0&&(e.setRenderTargetTextures(L,sn.colorTexture,sn.depthStencilTexture),e.setRenderTarget(L))}let he=G[Me];he===void 0&&(he=new Ri,he.layers.enable(Me),he.viewport=new dn,G[Me]=he),he.matrix.fromArray(me.transform.matrix),he.matrix.decompose(he.position,he.quaternion,he.scale),he.projectionMatrix.fromArray(me.projectionMatrix),he.projectionMatrixInverse.copy(he.projectionMatrix).invert(),he.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),Me===0&&(K.matrix.copy(he.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),te===!0&&K.cameras.push(he)}const qt=l.enabledFeatures;if(qt&&qt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&w){_=s.getBinding();const Me=_.getDepthInformation(Pt[0]);Me&&Me.isValid&&Me.texture&&M.init(Me,l.renderState)}if(qt&&qt.includes("camera-access")&&w){e.state.unbindTexture(),_=s.getBinding();for(let Me=0;Me<Pt.length;Me++){const me=Pt[Me].camera;if(me){let Pe=x[me];Pe||(Pe=new ev,x[me]=Pe);const he=_.getCameraImage(me);Pe.sourceTexture=he}}}}for(let Pt=0;Pt<F.length;Pt++){const te=I[Pt],qt=F[Pt];te!==null&&qt!==void 0&&qt.update(te,ft,p||h)}St&&St(J,ft),ft.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ft}),R=null}const kt=new iv;kt.setAnimationLoop(Ut),this.setAnimationLoop=function(J){St=J},this.dispose=function(){}}}const Is=new ta,C1=new pn;function D1(o,e){function i(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function s(M,x){x.color.getRGB(M.fogColor.value,Q_(o)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function l(M,x,z,P,L){x.isMeshBasicMaterial||x.isMeshLambertMaterial?u(M,x):x.isMeshToonMaterial?(u(M,x),_(M,x)):x.isMeshPhongMaterial?(u(M,x),g(M,x)):x.isMeshStandardMaterial?(u(M,x),S(M,x),x.isMeshPhysicalMaterial&&E(M,x,L)):x.isMeshMatcapMaterial?(u(M,x),R(M,x)):x.isMeshDepthMaterial?u(M,x):x.isMeshDistanceMaterial?(u(M,x),w(M,x)):x.isMeshNormalMaterial?u(M,x):x.isLineBasicMaterial?(h(M,x),x.isLineDashedMaterial&&d(M,x)):x.isPointsMaterial?m(M,x,z,P):x.isSpriteMaterial?p(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function u(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,i(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===Wn&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,i(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===Wn&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,i(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,i(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const z=e.get(x),P=z.envMap,L=z.envMapRotation;P&&(M.envMap.value=P,Is.copy(L),Is.x*=-1,Is.y*=-1,Is.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Is.y*=-1,Is.z*=-1),M.envMapRotation.value.setFromMatrix4(C1.makeRotationFromEuler(Is)),M.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,M.aoMapTransform))}function h(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform))}function d(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function m(M,x,z,P){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*z,M.scale.value=P*.5,x.map&&(M.map.value=x.map,i(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function p(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function g(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function _(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function S(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function E(M,x,z){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Wn&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=z.texture,M.transmissionSamplerSize.value.set(z.width,z.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,M.specularIntensityMapTransform))}function R(M,x){x.matcap&&(M.matcap.value=x.matcap)}function w(M,x){const z=e.get(x).light;M.referencePosition.value.setFromMatrixPosition(z.matrixWorld),M.nearDistance.value=z.shadow.camera.near,M.farDistance.value=z.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function U1(o,e,i,s){let l={},u={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(z,P){const L=P.program;s.uniformBlockBinding(z,L)}function p(z,P){let L=l[z.id];L===void 0&&(R(z),L=g(z),l[z.id]=L,z.addEventListener("dispose",M));const F=P.program;s.updateUBOMapping(z,F);const I=e.render.frame;u[z.id]!==I&&(S(z),u[z.id]=I)}function g(z){const P=_();z.__bindingPointIndex=P;const L=o.createBuffer(),F=z.__size,I=z.usage;return o.bindBuffer(o.UNIFORM_BUFFER,L),o.bufferData(o.UNIFORM_BUFFER,F,I),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,P,L),L}function _(){for(let z=0;z<d;z++)if(h.indexOf(z)===-1)return h.push(z),z;return Ge("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(z){const P=l[z.id],L=z.uniforms,F=z.__cache;o.bindBuffer(o.UNIFORM_BUFFER,P);for(let I=0,N=L.length;I<N;I++){const Z=Array.isArray(L[I])?L[I]:[L[I]];for(let A=0,C=Z.length;A<C;A++){const G=Z[A];if(E(G,I,A,F)===!0){const K=G.__offset,it=Array.isArray(G.value)?G.value:[G.value];let pt=0;for(let ht=0;ht<it.length;ht++){const O=it[ht],H=w(O);typeof O=="number"||typeof O=="boolean"?(G.__data[0]=O,o.bufferSubData(o.UNIFORM_BUFFER,K+pt,G.__data)):O.isMatrix3?(G.__data[0]=O.elements[0],G.__data[1]=O.elements[1],G.__data[2]=O.elements[2],G.__data[3]=0,G.__data[4]=O.elements[3],G.__data[5]=O.elements[4],G.__data[6]=O.elements[5],G.__data[7]=0,G.__data[8]=O.elements[6],G.__data[9]=O.elements[7],G.__data[10]=O.elements[8],G.__data[11]=0):(O.toArray(G.__data,pt),pt+=H.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,K,G.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function E(z,P,L,F){const I=z.value,N=P+"_"+L;if(F[N]===void 0)return typeof I=="number"||typeof I=="boolean"?F[N]=I:F[N]=I.clone(),!0;{const Z=F[N];if(typeof I=="number"||typeof I=="boolean"){if(Z!==I)return F[N]=I,!0}else if(Z.equals(I)===!1)return Z.copy(I),!0}return!1}function R(z){const P=z.uniforms;let L=0;const F=16;for(let N=0,Z=P.length;N<Z;N++){const A=Array.isArray(P[N])?P[N]:[P[N]];for(let C=0,G=A.length;C<G;C++){const K=A[C],it=Array.isArray(K.value)?K.value:[K.value];for(let pt=0,ht=it.length;pt<ht;pt++){const O=it[pt],H=w(O),rt=L%F,ct=rt%H.boundary,Tt=rt+ct;L+=ct,Tt!==0&&F-Tt<H.storage&&(L+=F-Tt),K.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=L,L+=H.storage}}}const I=L%F;return I>0&&(L+=F-I),z.__size=L,z.__cache={},this}function w(z){const P={boundary:0,storage:0};return typeof z=="number"||typeof z=="boolean"?(P.boundary=4,P.storage=4):z.isVector2?(P.boundary=8,P.storage=8):z.isVector3||z.isColor?(P.boundary=16,P.storage=12):z.isVector4?(P.boundary=16,P.storage=16):z.isMatrix3?(P.boundary=48,P.storage=48):z.isMatrix4?(P.boundary=64,P.storage=64):z.isTexture?pe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):pe("WebGLRenderer: Unsupported uniform value type.",z),P}function M(z){const P=z.target;P.removeEventListener("dispose",M);const L=h.indexOf(P.__bindingPointIndex);h.splice(L,1),o.deleteBuffer(l[P.id]),delete l[P.id],delete u[P.id]}function x(){for(const z in l)o.deleteBuffer(l[z]);h=[],l={},u={}}return{bind:m,update:p,dispose:x}}const L1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let qi=null;function N1(){return qi===null&&(qi=new bM(L1,16,16,Hr,Ua),qi.name="DFG_LUT",qi.minFilter=Bn,qi.magFilter=Bn,qi.wrapS=wa,qi.wrapT=wa,qi.generateMipmaps=!1,qi.needsUpdate=!0),qi}class O1{constructor(e={}){const{canvas:i=QS(),context:s=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:S=!1,outputBufferType:E=di}=e;this.isWebGLRenderer=!0;let R;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");R=s.getContextAttributes().alpha}else R=h;const w=E,M=new Set([Nd,Ld,Ud]),x=new Set([di,$i,Zo,jo,Cd,Dd]),z=new Uint32Array(4),P=new Int32Array(4);let L=null,F=null;const I=[],N=[];let Z=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let C=!1;this._outputColorSpace=Ai;let G=0,K=0,it=null,pt=-1,ht=null;const O=new dn,H=new dn;let rt=null;const ct=new Fe(0);let Tt=0,U=i.width,st=i.height,St=1,Ut=null,kt=null;const J=new dn(0,0,U,st),ft=new dn(0,0,U,st);let Pt=!1;const te=new Bd;let qt=!1,Se=!1;const Qe=new pn,Me=new et,me=new dn,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let he=!1;function sn(){return it===null?St:1}let V=s;function Ye(T,Y){return i.getContext(T,Y)}try{const T={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Rd}`),i.addEventListener("webglcontextlost",ue,!1),i.addEventListener("webglcontextrestored",Ie,!1),i.addEventListener("webglcontextcreationerror",De,!1),V===null){const Y="webgl2";if(V=Ye(Y,T),V===null)throw Ye(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw Ge("WebGLRenderer: "+T.message),T}let ye,Oe,Yt,D,y,W,_t,Et,at,jt,Ot,$t,le,At,Ct,Gt,zt,Ft,fe,k,It,Dt,Ht,bt;function xt(){ye=new NT(V),ye.init(),Dt=new T1(V,ye),Oe=new TT(V,ye,e,Dt),Yt=new y1(V,ye),Oe.reversedDepthBuffer&&S&&Yt.buffers.depth.setReversed(!0),D=new zT(V),y=new o1,W=new E1(V,ye,Yt,y,Oe,Dt,D),_t=new AT(A),Et=new LT(A),at=new HM(V),Ht=new yT(V,at),jt=new OT(V,at,D,Ht),Ot=new IT(V,jt,at,D),fe=new FT(V,Oe,W),Gt=new bT(y),$t=new r1(A,_t,Et,ye,Oe,Ht,Gt),le=new D1(A,y),At=new c1,Ct=new m1(ye),Ft=new MT(A,_t,Et,Yt,Ot,R,m),zt=new S1(A,Ot,Oe),bt=new U1(V,D,Oe,Yt),k=new ET(V,ye,D),It=new PT(V,ye,D),D.programs=$t.programs,A.capabilities=Oe,A.extensions=ye,A.properties=y,A.renderLists=At,A.shadowMap=zt,A.state=Yt,A.info=D}xt(),w!==di&&(Z=new HT(w,i.width,i.height,l,u));const Lt=new w1(A,V);this.xr=Lt,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const T=ye.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ye.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return St},this.setPixelRatio=function(T){T!==void 0&&(St=T,this.setSize(U,st,!1))},this.getSize=function(T){return T.set(U,st)},this.setSize=function(T,Y,q=!0){if(Lt.isPresenting){pe("WebGLRenderer: Can't change size while VR device is presenting.");return}U=T,st=Y,i.width=Math.floor(T*St),i.height=Math.floor(Y*St),q===!0&&(i.style.width=T+"px",i.style.height=Y+"px"),Z!==null&&Z.setSize(i.width,i.height),this.setViewport(0,0,T,Y)},this.getDrawingBufferSize=function(T){return T.set(U*St,st*St).floor()},this.setDrawingBufferSize=function(T,Y,q){U=T,st=Y,St=q,i.width=Math.floor(T*q),i.height=Math.floor(Y*q),this.setViewport(0,0,T,Y)},this.setEffects=function(T){if(w===di){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let Y=0;Y<T.length;Y++)if(T[Y].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}Z.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(O)},this.getViewport=function(T){return T.copy(J)},this.setViewport=function(T,Y,q,$){T.isVector4?J.set(T.x,T.y,T.z,T.w):J.set(T,Y,q,$),Yt.viewport(O.copy(J).multiplyScalar(St).round())},this.getScissor=function(T){return T.copy(ft)},this.setScissor=function(T,Y,q,$){T.isVector4?ft.set(T.x,T.y,T.z,T.w):ft.set(T,Y,q,$),Yt.scissor(H.copy(ft).multiplyScalar(St).round())},this.getScissorTest=function(){return Pt},this.setScissorTest=function(T){Yt.setScissorTest(Pt=T)},this.setOpaqueSort=function(T){Ut=T},this.setTransparentSort=function(T){kt=T},this.getClearColor=function(T){return T.copy(Ft.getClearColor())},this.setClearColor=function(){Ft.setClearColor(...arguments)},this.getClearAlpha=function(){return Ft.getClearAlpha()},this.setClearAlpha=function(){Ft.setClearAlpha(...arguments)},this.clear=function(T=!0,Y=!0,q=!0){let $=0;if(T){let Q=!1;if(it!==null){const Rt=it.texture.format;Q=M.has(Rt)}if(Q){const Rt=it.texture.type,Wt=x.has(Rt),Bt=Ft.getClearColor(),Kt=Ft.getClearAlpha(),lt=Bt.r,mt=Bt.g,Mt=Bt.b;Wt?(z[0]=lt,z[1]=mt,z[2]=Mt,z[3]=Kt,V.clearBufferuiv(V.COLOR,0,z)):(P[0]=lt,P[1]=mt,P[2]=Mt,P[3]=Kt,V.clearBufferiv(V.COLOR,0,P))}else $|=V.COLOR_BUFFER_BIT}Y&&($|=V.DEPTH_BUFFER_BIT),q&&($|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",ue,!1),i.removeEventListener("webglcontextrestored",Ie,!1),i.removeEventListener("webglcontextcreationerror",De,!1),Ft.dispose(),At.dispose(),Ct.dispose(),y.dispose(),_t.dispose(),Et.dispose(),Ot.dispose(),Ht.dispose(),bt.dispose(),$t.dispose(),Lt.dispose(),Lt.removeEventListener("sessionstart",ia),Lt.removeEventListener("sessionend",ei),wi.stop()};function ue(T){T.preventDefault(),Fg("WebGLRenderer: Context Lost."),C=!0}function Ie(){Fg("WebGLRenderer: Context Restored."),C=!1;const T=D.autoReset,Y=zt.enabled,q=zt.autoUpdate,$=zt.needsUpdate,Q=zt.type;xt(),D.autoReset=T,zt.enabled=Y,zt.autoUpdate=q,zt.needsUpdate=$,zt.type=Q}function De(T){Ge("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ue(T){const Y=T.target;Y.removeEventListener("dispose",Ue),Yn(Y)}function Yn(T){na(T),y.remove(T)}function na(T){const Y=y.get(T).programs;Y!==void 0&&(Y.forEach(function(q){$t.releaseProgram(q)}),T.isShaderMaterial&&$t.releaseShaderCache(T))}this.renderBufferDirect=function(T,Y,q,$,Q,Rt){Y===null&&(Y=Pe);const Wt=Q.isMesh&&Q.matrixWorld.determinant()<0,Bt=Ci(T,Y,q,$,Q);Yt.setMaterial($,Wt);let Kt=q.index,lt=1;if($.wireframe===!0){if(Kt=jt.getWireframeAttribute(q),Kt===void 0)return;lt=2}const mt=q.drawRange,Mt=q.attributes.position;let dt=mt.start*lt,wt=(mt.start+mt.count)*lt;Rt!==null&&(dt=Math.max(dt,Rt.start*lt),wt=Math.min(wt,(Rt.start+Rt.count)*lt)),Kt!==null?(dt=Math.max(dt,0),wt=Math.min(wt,Kt.count)):Mt!=null&&(dt=Math.max(dt,0),wt=Math.min(wt,Mt.count));const Zt=wt-dt;if(Zt<0||Zt===1/0)return;Ht.setup(Q,$,Bt,q,Kt);let Qt,Xt=k;if(Kt!==null&&(Qt=at.get(Kt),Xt=It,Xt.setIndex(Qt)),Q.isMesh)$.wireframe===!0?(Yt.setLineWidth($.wireframeLinewidth*sn()),Xt.setMode(V.LINES)):Xt.setMode(V.TRIANGLES);else if(Q.isLine){let Nt=$.linewidth;Nt===void 0&&(Nt=1),Yt.setLineWidth(Nt*sn()),Q.isLineSegments?Xt.setMode(V.LINES):Q.isLineLoop?Xt.setMode(V.LINE_LOOP):Xt.setMode(V.LINE_STRIP)}else Q.isPoints?Xt.setMode(V.POINTS):Q.isSprite&&Xt.setMode(V.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)Ko("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Xt.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(ye.get("WEBGL_multi_draw"))Xt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const Nt=Q._multiDrawStarts,ae=Q._multiDrawCounts,ne=Q._multiDrawCount,Re=Kt?at.get(Kt).bytesPerElement:1,Je=y.get($).currentProgram.getUniforms();for(let ln=0;ln<ne;ln++)Je.setValue(V,"_gl_DrawID",ln),Xt.render(Nt[ln]/Re,ae[ln])}else if(Q.isInstancedMesh)Xt.renderInstances(dt,Zt,Q.count);else if(q.isInstancedBufferGeometry){const Nt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,ae=Math.min(q.instanceCount,Nt);Xt.renderInstances(dt,Zt,ae)}else Xt.render(dt,Zt)};function ms(T,Y,q){T.transparent===!0&&T.side===Fi&&T.forceSinglePass===!1?(T.side=Wn,T.needsUpdate=!0,Pa(T,Y,q),T.side=ps,T.needsUpdate=!0,Pa(T,Y,q),T.side=Fi):Pa(T,Y,q)}this.compile=function(T,Y,q=null){q===null&&(q=T),F=Ct.get(q),F.init(Y),N.push(F),q.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(F.pushLight(Q),Q.castShadow&&F.pushShadow(Q))}),T!==q&&T.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(F.pushLight(Q),Q.castShadow&&F.pushShadow(Q))}),F.setupLights();const $=new Set;return T.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Rt=Q.material;if(Rt)if(Array.isArray(Rt))for(let Wt=0;Wt<Rt.length;Wt++){const Bt=Rt[Wt];ms(Bt,q,Q),$.add(Bt)}else ms(Rt,q,Q),$.add(Rt)}),F=N.pop(),$},this.compileAsync=function(T,Y,q=null){const $=this.compile(T,Y,q);return new Promise(Q=>{function Rt(){if($.forEach(function(Wt){y.get(Wt).currentProgram.isReady()&&$.delete(Wt)}),$.size===0){Q(T);return}setTimeout(Rt,10)}ye.get("KHR_parallel_shader_compile")!==null?Rt():setTimeout(Rt,10)})};let Na=null;function Gi(T){Na&&Na(T)}function ia(){wi.stop()}function ei(){wi.start()}const wi=new iv;wi.setAnimationLoop(Gi),typeof self<"u"&&wi.setContext(self),this.setAnimationLoop=function(T){Na=T,Lt.setAnimationLoop(T),T===null?wi.stop():wi.start()},Lt.addEventListener("sessionstart",ia),Lt.addEventListener("sessionend",ei),this.render=function(T,Y){if(Y!==void 0&&Y.isCamera!==!0){Ge("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;const q=Lt.enabled===!0&&Lt.isPresenting===!0,$=Z!==null&&(it===null||q)&&Z.begin(A,it);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Lt.enabled===!0&&Lt.isPresenting===!0&&(Z===null||Z.isCompositing()===!1)&&(Lt.cameraAutoUpdate===!0&&Lt.updateCamera(Y),Y=Lt.getCamera()),T.isScene===!0&&T.onBeforeRender(A,T,Y,it),F=Ct.get(T,N.length),F.init(Y),N.push(F),Qe.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),te.setFromProjectionMatrix(Qe,ji,Y.reversedDepth),Se=this.localClippingEnabled,qt=Gt.init(this.clippingPlanes,Se),L=At.get(T,I.length),L.init(),I.push(L),Lt.enabled===!0&&Lt.isPresenting===!0){const Wt=A.xr.getDepthSensingMesh();Wt!==null&&ni(Wt,Y,-1/0,A.sortObjects)}ni(T,Y,0,A.sortObjects),L.finish(),A.sortObjects===!0&&L.sort(Ut,kt),he=Lt.enabled===!1||Lt.isPresenting===!1||Lt.hasDepthSensing()===!1,he&&Ft.addToRenderList(L,T),this.info.render.frame++,qt===!0&&Gt.beginShadows();const Q=F.state.shadowsArray;if(zt.render(Q,T,Y),qt===!0&&Gt.endShadows(),this.info.autoReset===!0&&this.info.reset(),($&&Z.hasRenderPass())===!1){const Wt=L.opaque,Bt=L.transmissive;if(F.setupLights(),Y.isArrayCamera){const Kt=Y.cameras;if(Bt.length>0)for(let lt=0,mt=Kt.length;lt<mt;lt++){const Mt=Kt[lt];mn(Wt,Bt,T,Mt)}he&&Ft.render(T);for(let lt=0,mt=Kt.length;lt<mt;lt++){const Mt=Kt[lt];se(L,T,Mt,Mt.viewport)}}else Bt.length>0&&mn(Wt,Bt,T,Y),he&&Ft.render(T),se(L,T,Y)}it!==null&&K===0&&(W.updateMultisampleRenderTarget(it),W.updateRenderTargetMipmap(it)),$&&Z.end(A),T.isScene===!0&&T.onAfterRender(A,T,Y),Ht.resetDefaultState(),pt=-1,ht=null,N.pop(),N.length>0?(F=N[N.length-1],qt===!0&&Gt.setGlobalState(A.clippingPlanes,F.state.camera)):F=null,I.pop(),I.length>0?L=I[I.length-1]:L=null};function ni(T,Y,q,$){if(T.visible===!1)return;if(T.layers.test(Y.layers)){if(T.isGroup)q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(Y);else if(T.isLight)F.pushLight(T),T.castShadow&&F.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||te.intersectsSprite(T)){$&&me.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Qe);const Wt=Ot.update(T),Bt=T.material;Bt.visible&&L.push(T,Wt,Bt,q,me.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||te.intersectsObject(T))){const Wt=Ot.update(T),Bt=T.material;if($&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),me.copy(T.boundingSphere.center)):(Wt.boundingSphere===null&&Wt.computeBoundingSphere(),me.copy(Wt.boundingSphere.center)),me.applyMatrix4(T.matrixWorld).applyMatrix4(Qe)),Array.isArray(Bt)){const Kt=Wt.groups;for(let lt=0,mt=Kt.length;lt<mt;lt++){const Mt=Kt[lt],dt=Bt[Mt.materialIndex];dt&&dt.visible&&L.push(T,Wt,dt,q,me.z,Mt)}}else Bt.visible&&L.push(T,Wt,Bt,q,me.z,null)}}const Rt=T.children;for(let Wt=0,Bt=Rt.length;Wt<Bt;Wt++)ni(Rt[Wt],Y,q,$)}function se(T,Y,q,$){const{opaque:Q,transmissive:Rt,transparent:Wt}=T;F.setupLightsView(q),qt===!0&&Gt.setGlobalState(A.clippingPlanes,q),$&&Yt.viewport(O.copy($)),Q.length>0&&Vn(Q,Y,q),Rt.length>0&&Vn(Rt,Y,q),Wt.length>0&&Vn(Wt,Y,q),Yt.buffers.depth.setTest(!0),Yt.buffers.depth.setMask(!0),Yt.buffers.color.setMask(!0),Yt.setPolygonOffset(!1)}function mn(T,Y,q,$){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(F.state.transmissionRenderTarget[$.id]===void 0){const dt=ye.has("EXT_color_buffer_half_float")||ye.has("EXT_color_buffer_float");F.state.transmissionRenderTarget[$.id]=new Qi(1,1,{generateMipmaps:!0,type:dt?Ua:di,minFilter:Vs,samples:Oe.samples,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ze.workingColorSpace})}const Rt=F.state.transmissionRenderTarget[$.id],Wt=$.viewport||O;Rt.setSize(Wt.z*A.transmissionResolutionScale,Wt.w*A.transmissionResolutionScale);const Bt=A.getRenderTarget(),Kt=A.getActiveCubeFace(),lt=A.getActiveMipmapLevel();A.setRenderTarget(Rt),A.getClearColor(ct),Tt=A.getClearAlpha(),Tt<1&&A.setClearColor(16777215,.5),A.clear(),he&&Ft.render(q);const mt=A.toneMapping;A.toneMapping=Ki;const Mt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),F.setupLightsView($),qt===!0&&Gt.setGlobalState(A.clippingPlanes,$),Vn(T,q,$),W.updateMultisampleRenderTarget(Rt),W.updateRenderTargetMipmap(Rt),ye.has("WEBGL_multisampled_render_to_texture")===!1){let dt=!1;for(let wt=0,Zt=Y.length;wt<Zt;wt++){const Qt=Y[wt],{object:Xt,geometry:Nt,material:ae,group:ne}=Qt;if(ae.side===Fi&&Xt.layers.test($.layers)){const Re=ae.side;ae.side=Wn,ae.needsUpdate=!0,Oa(Xt,q,$,Nt,ae,ne),ae.side=Re,ae.needsUpdate=!0,dt=!0}}dt===!0&&(W.updateMultisampleRenderTarget(Rt),W.updateRenderTargetMipmap(Rt))}A.setRenderTarget(Bt,Kt,lt),A.setClearColor(ct,Tt),Mt!==void 0&&($.viewport=Mt),A.toneMapping=mt}function Vn(T,Y,q){const $=Y.isScene===!0?Y.overrideMaterial:null;for(let Q=0,Rt=T.length;Q<Rt;Q++){const Wt=T[Q],{object:Bt,geometry:Kt,group:lt}=Wt;let mt=Wt.material;mt.allowOverride===!0&&$!==null&&(mt=$),Bt.layers.test(q.layers)&&Oa(Bt,Y,q,Kt,mt,lt)}}function Oa(T,Y,q,$,Q,Rt){T.onBeforeRender(A,Y,q,$,Q,Rt),T.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Q.onBeforeRender(A,Y,q,$,T,Rt),Q.transparent===!0&&Q.side===Fi&&Q.forceSinglePass===!1?(Q.side=Wn,Q.needsUpdate=!0,A.renderBufferDirect(q,Y,$,Q,T,Rt),Q.side=ps,Q.needsUpdate=!0,A.renderBufferDirect(q,Y,$,Q,T,Rt),Q.side=Fi):A.renderBufferDirect(q,Y,$,Q,T,Rt),T.onAfterRender(A,Y,q,$,Q,Rt)}function Pa(T,Y,q){Y.isScene!==!0&&(Y=Pe);const $=y.get(T),Q=F.state.lights,Rt=F.state.shadowsArray,Wt=Q.state.version,Bt=$t.getParameters(T,Q.state,Rt,Y,q),Kt=$t.getProgramCacheKey(Bt);let lt=$.programs;$.environment=T.isMeshStandardMaterial?Y.environment:null,$.fog=Y.fog,$.envMap=(T.isMeshStandardMaterial?Et:_t).get(T.envMap||$.environment),$.envMapRotation=$.environment!==null&&T.envMap===null?Y.environmentRotation:T.envMapRotation,lt===void 0&&(T.addEventListener("dispose",Ue),lt=new Map,$.programs=lt);let mt=lt.get(Kt);if(mt!==void 0){if($.currentProgram===mt&&$.lightsStateVersion===Wt)return En(T,Bt),mt}else Bt.uniforms=$t.getUniforms(T),T.onBeforeCompile(Bt,A),mt=$t.acquireProgram(Bt,Kt),lt.set(Kt,mt),$.uniforms=Bt.uniforms;const Mt=$.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Mt.clippingPlanes=Gt.uniform),En(T,Bt),$.needsLights=pi(T),$.lightsStateVersion=Wt,$.needsLights&&(Mt.ambientLightColor.value=Q.state.ambient,Mt.lightProbe.value=Q.state.probe,Mt.directionalLights.value=Q.state.directional,Mt.directionalLightShadows.value=Q.state.directionalShadow,Mt.spotLights.value=Q.state.spot,Mt.spotLightShadows.value=Q.state.spotShadow,Mt.rectAreaLights.value=Q.state.rectArea,Mt.ltc_1.value=Q.state.rectAreaLTC1,Mt.ltc_2.value=Q.state.rectAreaLTC2,Mt.pointLights.value=Q.state.point,Mt.pointLightShadows.value=Q.state.pointShadow,Mt.hemisphereLights.value=Q.state.hemi,Mt.directionalShadowMap.value=Q.state.directionalShadowMap,Mt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Mt.spotShadowMap.value=Q.state.spotShadowMap,Mt.spotLightMatrix.value=Q.state.spotLightMatrix,Mt.spotLightMap.value=Q.state.spotLightMap,Mt.pointShadowMap.value=Q.state.pointShadowMap,Mt.pointShadowMatrix.value=Q.state.pointShadowMatrix),$.currentProgram=mt,$.uniformsList=null,mt}function qr(T){if(T.uniformsList===null){const Y=T.currentProgram.getUniforms();T.uniformsList=zc.seqWithValue(Y.seq,T.uniforms)}return T.uniformsList}function En(T,Y){const q=y.get(T);q.outputColorSpace=Y.outputColorSpace,q.batching=Y.batching,q.batchingColor=Y.batchingColor,q.instancing=Y.instancing,q.instancingColor=Y.instancingColor,q.instancingMorph=Y.instancingMorph,q.skinning=Y.skinning,q.morphTargets=Y.morphTargets,q.morphNormals=Y.morphNormals,q.morphColors=Y.morphColors,q.morphTargetsCount=Y.morphTargetsCount,q.numClippingPlanes=Y.numClippingPlanes,q.numIntersection=Y.numClipIntersection,q.vertexAlphas=Y.vertexAlphas,q.vertexTangents=Y.vertexTangents,q.toneMapping=Y.toneMapping}function Ci(T,Y,q,$,Q){Y.isScene!==!0&&(Y=Pe),W.resetTextureUnits();const Rt=Y.fog,Wt=$.isMeshStandardMaterial?Y.environment:null,Bt=it===null?A.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:Gr,Kt=($.isMeshStandardMaterial?Et:_t).get($.envMap||Wt),lt=$.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,mt=!!q.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Mt=!!q.morphAttributes.position,dt=!!q.morphAttributes.normal,wt=!!q.morphAttributes.color;let Zt=Ki;$.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(Zt=A.toneMapping);const Qt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Xt=Qt!==void 0?Qt.length:0,Nt=y.get($),ae=F.state.lights;if(qt===!0&&(Se===!0||T!==ht)){const un=T===ht&&$.id===pt;Gt.setState($,T,un)}let ne=!1;$.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==ae.state.version||Nt.outputColorSpace!==Bt||Q.isBatchedMesh&&Nt.batching===!1||!Q.isBatchedMesh&&Nt.batching===!0||Q.isBatchedMesh&&Nt.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Nt.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Nt.instancing===!1||!Q.isInstancedMesh&&Nt.instancing===!0||Q.isSkinnedMesh&&Nt.skinning===!1||!Q.isSkinnedMesh&&Nt.skinning===!0||Q.isInstancedMesh&&Nt.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Nt.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Nt.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Nt.instancingMorph===!1&&Q.morphTexture!==null||Nt.envMap!==Kt||$.fog===!0&&Nt.fog!==Rt||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==Gt.numPlanes||Nt.numIntersection!==Gt.numIntersection)||Nt.vertexAlphas!==lt||Nt.vertexTangents!==mt||Nt.morphTargets!==Mt||Nt.morphNormals!==dt||Nt.morphColors!==wt||Nt.toneMapping!==Zt||Nt.morphTargetsCount!==Xt)&&(ne=!0):(ne=!0,Nt.__version=$.version);let Re=Nt.currentProgram;ne===!0&&(Re=Pa($,Y,Q));let Je=!1,ln=!1,Tn=!1;const Te=Re.getUniforms(),en=Nt.uniforms;if(Yt.useProgram(Re.program)&&(Je=!0,ln=!0,Tn=!0),$.id!==pt&&(pt=$.id,ln=!0),Je||ht!==T){Yt.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Te.setValue(V,"projectionMatrix",T.projectionMatrix),Te.setValue(V,"viewMatrix",T.matrixWorldInverse);const cn=Te.map.cameraPosition;cn!==void 0&&cn.setValue(V,Me.setFromMatrixPosition(T.matrixWorld)),Oe.logarithmicDepthBuffer&&Te.setValue(V,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Te.setValue(V,"isOrthographic",T.isOrthographicCamera===!0),ht!==T&&(ht=T,ln=!0,Tn=!0)}if(Nt.needsLights&&(ae.state.directionalShadowMap.length>0&&Te.setValue(V,"directionalShadowMap",ae.state.directionalShadowMap,W),ae.state.spotShadowMap.length>0&&Te.setValue(V,"spotShadowMap",ae.state.spotShadowMap,W),ae.state.pointShadowMap.length>0&&Te.setValue(V,"pointShadowMap",ae.state.pointShadowMap,W)),Q.isSkinnedMesh){Te.setOptional(V,Q,"bindMatrix"),Te.setOptional(V,Q,"bindMatrixInverse");const un=Q.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),Te.setValue(V,"boneTexture",un.boneTexture,W))}Q.isBatchedMesh&&(Te.setOptional(V,Q,"batchingTexture"),Te.setValue(V,"batchingTexture",Q._matricesTexture,W),Te.setOptional(V,Q,"batchingIdTexture"),Te.setValue(V,"batchingIdTexture",Q._indirectTexture,W),Te.setOptional(V,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Te.setValue(V,"batchingColorTexture",Q._colorsTexture,W));const tn=q.morphAttributes;if((tn.position!==void 0||tn.normal!==void 0||tn.color!==void 0)&&fe.update(Q,q,Re),(ln||Nt.receiveShadow!==Q.receiveShadow)&&(Nt.receiveShadow=Q.receiveShadow,Te.setValue(V,"receiveShadow",Q.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(en.envMap.value=Kt,en.flipEnvMap.value=Kt.isCubeTexture&&Kt.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&Y.environment!==null&&(en.envMapIntensity.value=Y.environmentIntensity),en.dfgLUT!==void 0&&(en.dfgLUT.value=N1()),ln&&(Te.setValue(V,"toneMappingExposure",A.toneMappingExposure),Nt.needsLights&&aa(en,Tn),Rt&&$.fog===!0&&le.refreshFogUniforms(en,Rt),le.refreshMaterialUniforms(en,$,St,st,F.state.transmissionRenderTarget[T.id]),zc.upload(V,qr(Nt),en,W)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(zc.upload(V,qr(Nt),en,W),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Te.setValue(V,"center",Q.center),Te.setValue(V,"modelViewMatrix",Q.modelViewMatrix),Te.setValue(V,"normalMatrix",Q.normalMatrix),Te.setValue(V,"modelMatrix",Q.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const un=$.uniformsGroups;for(let cn=0,ii=un.length;cn<ii;cn++){const rn=un[cn];bt.update(rn,Re),bt.bind(rn,Re)}}return Re}function aa(T,Y){T.ambientLightColor.needsUpdate=Y,T.lightProbe.needsUpdate=Y,T.directionalLights.needsUpdate=Y,T.directionalLightShadows.needsUpdate=Y,T.pointLights.needsUpdate=Y,T.pointLightShadows.needsUpdate=Y,T.spotLights.needsUpdate=Y,T.spotLightShadows.needsUpdate=Y,T.rectAreaLights.needsUpdate=Y,T.hemisphereLights.needsUpdate=Y}function pi(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return it},this.setRenderTargetTextures=function(T,Y,q){const $=y.get(T);$.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),y.get(T.texture).__webglTexture=Y,y.get(T.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:q,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,Y){const q=y.get(T);q.__webglFramebuffer=Y,q.__useDefaultFramebuffer=Y===void 0};const mi=V.createFramebuffer();this.setRenderTarget=function(T,Y=0,q=0){it=T,G=Y,K=q;let $=null,Q=!1,Rt=!1;if(T){const Bt=y.get(T);if(Bt.__useDefaultFramebuffer!==void 0){Yt.bindFramebuffer(V.FRAMEBUFFER,Bt.__webglFramebuffer),O.copy(T.viewport),H.copy(T.scissor),rt=T.scissorTest,Yt.viewport(O),Yt.scissor(H),Yt.setScissorTest(rt),pt=-1;return}else if(Bt.__webglFramebuffer===void 0)W.setupRenderTarget(T);else if(Bt.__hasExternalTextures)W.rebindTextures(T,y.get(T.texture).__webglTexture,y.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const mt=T.depthTexture;if(Bt.__boundDepthTexture!==mt){if(mt!==null&&y.has(mt)&&(T.width!==mt.image.width||T.height!==mt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(T)}}const Kt=T.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(Rt=!0);const lt=y.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(lt[Y])?$=lt[Y][q]:$=lt[Y],Q=!0):T.samples>0&&W.useMultisampledRTT(T)===!1?$=y.get(T).__webglMultisampledFramebuffer:Array.isArray(lt)?$=lt[q]:$=lt,O.copy(T.viewport),H.copy(T.scissor),rt=T.scissorTest}else O.copy(J).multiplyScalar(St).floor(),H.copy(ft).multiplyScalar(St).floor(),rt=Pt;if(q!==0&&($=mi),Yt.bindFramebuffer(V.FRAMEBUFFER,$)&&Yt.drawBuffers(T,$),Yt.viewport(O),Yt.scissor(H),Yt.setScissorTest(rt),Q){const Bt=y.get(T.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Bt.__webglTexture,q)}else if(Rt){const Bt=Y;for(let Kt=0;Kt<T.textures.length;Kt++){const lt=y.get(T.textures[Kt]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Kt,lt.__webglTexture,q,Bt)}}else if(T!==null&&q!==0){const Bt=y.get(T.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Bt.__webglTexture,q)}pt=-1},this.readRenderTargetPixels=function(T,Y,q,$,Q,Rt,Wt,Bt=0){if(!(T&&T.isWebGLRenderTarget)){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Kt=y.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Wt!==void 0&&(Kt=Kt[Wt]),Kt){Yt.bindFramebuffer(V.FRAMEBUFFER,Kt);try{const lt=T.textures[Bt],mt=lt.format,Mt=lt.type;if(!Oe.textureFormatReadable(mt)){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Oe.textureTypeReadable(Mt)){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=T.width-$&&q>=0&&q<=T.height-Q&&(T.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Bt),V.readPixels(Y,q,$,Q,Dt.convert(mt),Dt.convert(Mt),Rt))}finally{const lt=it!==null?y.get(it).__webglFramebuffer:null;Yt.bindFramebuffer(V.FRAMEBUFFER,lt)}}},this.readRenderTargetPixelsAsync=async function(T,Y,q,$,Q,Rt,Wt,Bt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Kt=y.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Wt!==void 0&&(Kt=Kt[Wt]),Kt)if(Y>=0&&Y<=T.width-$&&q>=0&&q<=T.height-Q){Yt.bindFramebuffer(V.FRAMEBUFFER,Kt);const lt=T.textures[Bt],mt=lt.format,Mt=lt.type;if(!Oe.textureFormatReadable(mt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Oe.textureTypeReadable(Mt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const dt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,dt),V.bufferData(V.PIXEL_PACK_BUFFER,Rt.byteLength,V.STREAM_READ),T.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Bt),V.readPixels(Y,q,$,Q,Dt.convert(mt),Dt.convert(Mt),0);const wt=it!==null?y.get(it).__webglFramebuffer:null;Yt.bindFramebuffer(V.FRAMEBUFFER,wt);const Zt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await JS(V,Zt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,dt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Rt),V.deleteBuffer(dt),V.deleteSync(Zt),Rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,Y=null,q=0){const $=Math.pow(2,-q),Q=Math.floor(T.image.width*$),Rt=Math.floor(T.image.height*$),Wt=Y!==null?Y.x:0,Bt=Y!==null?Y.y:0;W.setTexture2D(T,0),V.copyTexSubImage2D(V.TEXTURE_2D,q,0,0,Wt,Bt,Q,Rt),Yt.unbindTexture()};const Di=V.createFramebuffer(),gi=V.createFramebuffer();this.copyTextureToTexture=function(T,Y,q=null,$=null,Q=0,Rt=null){Rt===null&&(Q!==0?(Ko("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Rt=Q,Q=0):Rt=0);let Wt,Bt,Kt,lt,mt,Mt,dt,wt,Zt;const Qt=T.isCompressedTexture?T.mipmaps[Rt]:T.image;if(q!==null)Wt=q.max.x-q.min.x,Bt=q.max.y-q.min.y,Kt=q.isBox3?q.max.z-q.min.z:1,lt=q.min.x,mt=q.min.y,Mt=q.isBox3?q.min.z:0;else{const tn=Math.pow(2,-Q);Wt=Math.floor(Qt.width*tn),Bt=Math.floor(Qt.height*tn),T.isDataArrayTexture?Kt=Qt.depth:T.isData3DTexture?Kt=Math.floor(Qt.depth*tn):Kt=1,lt=0,mt=0,Mt=0}$!==null?(dt=$.x,wt=$.y,Zt=$.z):(dt=0,wt=0,Zt=0);const Xt=Dt.convert(Y.format),Nt=Dt.convert(Y.type);let ae;Y.isData3DTexture?(W.setTexture3D(Y,0),ae=V.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(W.setTexture2DArray(Y,0),ae=V.TEXTURE_2D_ARRAY):(W.setTexture2D(Y,0),ae=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,Y.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,Y.unpackAlignment);const ne=V.getParameter(V.UNPACK_ROW_LENGTH),Re=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Je=V.getParameter(V.UNPACK_SKIP_PIXELS),ln=V.getParameter(V.UNPACK_SKIP_ROWS),Tn=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Qt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Qt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,lt),V.pixelStorei(V.UNPACK_SKIP_ROWS,mt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Mt);const Te=T.isDataArrayTexture||T.isData3DTexture,en=Y.isDataArrayTexture||Y.isData3DTexture;if(T.isDepthTexture){const tn=y.get(T),un=y.get(Y),cn=y.get(tn.__renderTarget),ii=y.get(un.__renderTarget);Yt.bindFramebuffer(V.READ_FRAMEBUFFER,cn.__webglFramebuffer),Yt.bindFramebuffer(V.DRAW_FRAMEBUFFER,ii.__webglFramebuffer);for(let rn=0;rn<Kt;rn++)Te&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,y.get(T).__webglTexture,Q,Mt+rn),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,y.get(Y).__webglTexture,Rt,Zt+rn)),V.blitFramebuffer(lt,mt,Wt,Bt,dt,wt,Wt,Bt,V.DEPTH_BUFFER_BIT,V.NEAREST);Yt.bindFramebuffer(V.READ_FRAMEBUFFER,null),Yt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(Q!==0||T.isRenderTargetTexture||y.has(T)){const tn=y.get(T),un=y.get(Y);Yt.bindFramebuffer(V.READ_FRAMEBUFFER,Di),Yt.bindFramebuffer(V.DRAW_FRAMEBUFFER,gi);for(let cn=0;cn<Kt;cn++)Te?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,tn.__webglTexture,Q,Mt+cn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,tn.__webglTexture,Q),en?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,un.__webglTexture,Rt,Zt+cn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,un.__webglTexture,Rt),Q!==0?V.blitFramebuffer(lt,mt,Wt,Bt,dt,wt,Wt,Bt,V.COLOR_BUFFER_BIT,V.NEAREST):en?V.copyTexSubImage3D(ae,Rt,dt,wt,Zt+cn,lt,mt,Wt,Bt):V.copyTexSubImage2D(ae,Rt,dt,wt,lt,mt,Wt,Bt);Yt.bindFramebuffer(V.READ_FRAMEBUFFER,null),Yt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else en?T.isDataTexture||T.isData3DTexture?V.texSubImage3D(ae,Rt,dt,wt,Zt,Wt,Bt,Kt,Xt,Nt,Qt.data):Y.isCompressedArrayTexture?V.compressedTexSubImage3D(ae,Rt,dt,wt,Zt,Wt,Bt,Kt,Xt,Qt.data):V.texSubImage3D(ae,Rt,dt,wt,Zt,Wt,Bt,Kt,Xt,Nt,Qt):T.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Rt,dt,wt,Wt,Bt,Xt,Nt,Qt.data):T.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Rt,dt,wt,Qt.width,Qt.height,Xt,Qt.data):V.texSubImage2D(V.TEXTURE_2D,Rt,dt,wt,Wt,Bt,Xt,Nt,Qt);V.pixelStorei(V.UNPACK_ROW_LENGTH,ne),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Re),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Je),V.pixelStorei(V.UNPACK_SKIP_ROWS,ln),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Tn),Rt===0&&Y.generateMipmaps&&V.generateMipmap(ae),Yt.unbindTexture()},this.initRenderTarget=function(T){y.get(T).__webglFramebuffer===void 0&&W.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?W.setTextureCube(T,0):T.isData3DTexture?W.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?W.setTexture2DArray(T,0):W.setTexture2D(T,0),Yt.unbindTexture()},this.resetState=function(){G=0,K=0,it=null,Yt.reset(),Ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=ze._getDrawingBufferColorSpace(e),i.unpackColorSpace=ze._getUnpackColorSpace()}}function P1(){const o=ko.useRef(null),[e,i]=ko.useState(!0),[s,l]=ko.useState(!0);return ko.useEffect(()=>{const u=[];async function h(){const mt=await(await fetch("https://okeanids.mbari.org/widget/charge/charge.svg",{cache:"no-store"})).text();return new DOMParser().parseFromString(mt,"image/svg+xml")}function d(lt){return[...lt.querySelectorAll('circle[desc^="circle"]')].map(Mt=>{const dt=Mt.getAttribute("desc"),wt=Mt.getAttribute("class");let Zt="unknown";return wt.includes("greensolid")?Zt="available":wt.includes("orangesolid")?Zt="in_use":wt.includes("graysolid")?Zt="offline":wt.includes("dash")&&(Zt="transition"),{id:dt,status:Zt}})}function m(lt){lt.forEach(({id:mt,status:Mt})=>{const dt=u.find(wt=>wt.id===mt);if(dt)switch(Mt){case"available":dt.material.color.set(4248492);break;case"in_use":dt.material.color.set(16494656);break;case"offline":dt.material.color.set(8947848);break;case"transition":dt.material.color.set(1732521);break;default:dt.material.color.set(5592405)}})}const p=async()=>{try{const lt=await h(),mt=d(lt);m(mt),await ia()}catch(lt){console.error("Failed to update charger status",lt)}},g=new TM;g.background=new Fe(8900331),g.fog=new Id(8900331,100,500);const _=new Ri(75,window.innerWidth/window.innerHeight,.1,1e3),S=new O1({antialias:!0});S.setSize(window.innerWidth,window.innerHeight),S.shadowMap.enabled=!0,S.shadowMap.type=A_,o.current.appendChild(S.domElement);const E=new FM(16777215,.6);g.add(E);const R=new zM(16777215,.8);R.position.set(50,100,50),R.castShadow=!0,R.shadow.camera.left=-200,R.shadow.camera.right=200,R.shadow.camera.top=200,R.shadow.camera.bottom=-200,R.shadow.mapSize.width=2048,R.shadow.mapSize.height=2048,g.add(R);const w=new Xr(800,800,50,50),M=w.attributes.position.array;for(let lt=0;lt<M.length;lt+=3){const mt=M[lt],Mt=M[lt+1],dt=Math.sqrt(mt*mt+Mt*Mt);M[lt+2]=Math.sin(dt*.01)*.5+Math.random()*.3}w.attributes.position.needsUpdate=!0,w.computeVertexNormals();const x=new Ee({color:14596231,roughness:.9}),z=new Jt(w,x);z.rotation.x=-Math.PI/2,z.position.y=-2,z.receiveShadow=!0,g.add(z);const P=(lt,mt,Mt,dt)=>{const wt=new re(lt,.2,mt),Zt=new Ee({color:3355443}),Qt=new Jt(wt,Zt);return Qt.position.set(Mt,1,dt),Qt.receiveShadow=!0,g.add(Qt),Qt},L=275,F=65;P(L,F,0,0);const I=30,N=90,Z=-L/2-12-I/2,A=(N-F)/2;P(I,N,Z,A);const C=(lt,mt,Mt,dt,wt,Zt,Qt={})=>{const Xt=new re(lt,Mt,mt),Nt=new Ee({color:Zt}),ae=new Jt(Xt,Nt);ae.position.set(dt,1+Mt/2,wt),ae.castShadow=!0,ae.receiveShadow=!0,g.add(ae);const ne=new re(lt+1,.5,mt+1),Re=new Ee({color:4473924}),Je=new Jt(ne,Re);if(Je.position.set(dt,1+Mt+.25,wt),Je.castShadow=!0,g.add(Je),Qt.windows){const ln=new Ee({color:4491468,metalness:.5,roughness:.2}),Tn=2,Te=1.5,en=.1,tn=1+Mt*.25,un=1+Mt*.65,cn=[tn,un];for(let ii of cn)for(let rn=0;rn<Qt.windowsPerSide;rn++){const sa=-mt/2+(rn+1)*(mt/(Qt.windowsPerSide+1)),gs=new Jt(new re(en,Tn,Te),ln);gs.position.set(dt-lt/2,ii,wt+sa),g.add(gs)}for(let ii of cn)for(let rn=0;rn<Qt.windowsPerSide;rn++){const sa=-mt/2+(rn+1)*(mt/(Qt.windowsPerSide+1)),gs=new Jt(new re(en,Tn,Te),ln);gs.position.set(dt+lt/2,ii,wt+sa),g.add(gs)}}if(Qt.entrance){for(let rn=0;rn<5;rn++){const sa=new Jt(new re(4,.3,.3),new Ee({color:8947848}));sa.position.set(dt,1-(5-rn-1)*.3/2,wt-mt/2-.15*(5-rn)),sa.castShadow=!0,g.add(sa)}const en=1.5,tn=2.5,un=new Ee({color:6636321}),cn=new Jt(new re(en,tn,.1),un);cn.position.set(dt-en/2-.1,1+tn/2,wt-mt/2),g.add(cn);const ii=new Jt(new re(en,tn,.1),un);ii.position.set(dt+en/2+.1,1+tn/2,wt-mt/2),g.add(ii)}},G=7.5*1.5,K={width:28,depth:65,x:Z-I/2+28/2,z:A+N/2-65/2};C(K.width,K.depth,G,K.x,K.z,14540253,{windows:!0,windowsPerSide:8,entrance:!0});const it=K.width*.8,pt=G*.5,ht=.2,O=new Ee({color:8965375,metalness:.9,roughness:.1,transparent:!0,opacity:.4,envMapIntensity:1}),H=new re(it,pt,ht),rt=new Jt(H,O);rt.position.set(K.x,3+G*.5,K.z-K.depth/2),g.add(rt);const ct={width:100,depth:42,x:L/2-65-50,z:F/2-21},Tt=new re(ct.width,G,ct.depth),U=new Ee({color:13421772}),st=new Jt(Tt,U);st.position.set(ct.x,1+G/2,ct.z),st.castShadow=!0,st.receiveShadow=!0,g.add(st);const St=new re(ct.width+1,.5,ct.depth+1),Ut=new Ee({color:8947848}),kt=new Jt(St,Ut);kt.position.set(ct.x,1+G+.25,ct.z),kt.castShadow=!0,g.add(kt);const J=12,ft=G,Pt=8,te=new re(20,ft,J),qt=new Jt(te,U);qt.position.set(ct.x-40,1+ft/2,ct.z-ct.depth/2-J/2),qt.castShadow=!0,qt.receiveShadow=!0,g.add(qt);const Se=new re(15,ft,Pt),Qe=new Jt(Se,U);Qe.position.set(ct.x,1+ft/2,ct.z-ct.depth/2-Pt/2),Qe.castShadow=!0,Qe.receiveShadow=!0,g.add(Qe);const Me=new re(20,ft,J),me=new Jt(Me,U);me.position.set(ct.x+40,1+ft/2,ct.z-ct.depth/2-J/2),me.castShadow=!0,me.receiveShadow=!0,g.add(me);const Pe=new re(21,.5,J+1),he=new re(16,.5,Pt+1),sn=new re(21,.5,J+1),V=new Ee({color:8947848}),Ye=new Jt(Pe,V);Ye.position.set(ct.x-40,1+ft+.25,ct.z-ct.depth/2-J/2),Ye.castShadow=!0,g.add(Ye);const ye=new Jt(he,V);ye.position.set(ct.x,1+ft+.25,ct.z-ct.depth/2-Pt/2),ye.castShadow=!0,g.add(ye);const Oe=new Jt(sn,V);Oe.position.set(ct.x+40,1+ft+.25,ct.z-ct.depth/2-J/2),Oe.castShadow=!0,g.add(Oe);const Yt=20,D=8,y=ct.width+2,W=new Ee({color:2236962,side:Wn}),_t=new re(y,D,Yt),Et=new Jt(_t,W);Et.position.set(ct.x,1+D/2,ct.z),g.add(Et);const at=.5,jt=new Ee({color:8947848}),Ot=new Jt(new re(at,at,Yt+1),jt);Ot.position.set(ct.x-ct.width/2-at/2,1+D+at/2,ct.z),Ot.castShadow=!0,g.add(Ot);const $t=new Jt(new re(at,D,at),jt);$t.position.set(ct.x-ct.width/2-at/2,1+D/2,ct.z-Yt/2-at/2),$t.castShadow=!0,g.add($t);const le=new Jt(new re(at,D,at),jt);le.position.set(ct.x-ct.width/2-at/2,1+D/2,ct.z+Yt/2+at/2),le.castShadow=!0,g.add(le);const At=new Jt(new re(at,at,Yt+1),jt);At.position.set(ct.x+ct.width/2+at/2,1+D+at/2,ct.z),At.castShadow=!0,g.add(At);const Ct=new Jt(new re(at,D,at),jt);Ct.position.set(ct.x+ct.width/2+at/2,1+D/2,ct.z-Yt/2-at/2),Ct.castShadow=!0,g.add(Ct);const Gt=new Jt(new re(at,D,at),jt);Gt.position.set(ct.x+ct.width/2+at/2,1+D/2,ct.z+Yt/2+at/2),Gt.castShadow=!0,g.add(Gt);const zt={width:60,depth:42,x:L/2-165-50,z:F/2-21},Ft=new re(zt.width,G,zt.depth);new Ee({color:13421772});const fe=new Jt(Ft,U);fe.position.set(zt.x,1+G/2,zt.z),fe.castShadow=!0,fe.receiveShadow=!0,g.add(fe);const k=new re(zt.width+1,.5,zt.depth+1),It=new Ee({color:8947848}),Dt=new Jt(k,It);Dt.position.set(zt.x,1+G+.25,zt.z),Dt.castShadow=!0,g.add(Dt);const Ht=(lt,mt,Mt=!1)=>{const dt=new Ee({color:16777215}),wt=4,Zt=9;if(Mt){const Qt=new Jt(new re(.05,.1,Zt),dt);Qt.position.set(mt+wt/2,1.12,lt-4.5),g.add(Qt);const Xt=new Jt(new re(.05,.1,Zt),dt);Xt.position.set(mt-wt/2,1.12,lt-4.5),g.add(Xt);const Nt=new Jt(new re(1.8,.25,.35),new Ee({color:13421772}));Nt.position.set(mt,1.15,lt-1),Nt.castShadow=!0,g.add(Nt)}else{const Qt=new Jt(new re(.1,.05,Zt),dt);Qt.position.set(lt+4.5,1.12,mt+wt/2),Qt.rotation.y=Math.PI/2,g.add(Qt);const Xt=new Jt(new re(.1,.05,Zt),dt);Xt.position.set(lt+4.5,1.12,mt-wt/2),Xt.rotation.y=Math.PI/2,g.add(Xt);const Nt=new Jt(new re(1.8,.25,.35),new Ee({color:13421772}));Nt.position.set(lt+1,1.15,mt),Nt.rotation.y=Math.PI/2,Nt.castShadow=!0,g.add(Nt)}},bt=(lt,mt,Mt,dt=!1)=>{const wt=new hs,Zt=new Ee({color:16777215}),Qt=new Jt(new re(1.2,.2,1.2),new Ee({color:4473924}));Qt.position.y=1.1,Qt.receiveShadow=!0,wt.add(Qt);const Xt=new Jt(new re(.6,1.6,.4),Zt);Xt.position.y=2,wt.add(Xt);const Nt=new Jt(new re(.3,.4,.05),new Ee({color:2236962})),ae=new Jt(new Hc(.1,8,8),new Ee({emissive:65280}));ae.position.set(0,2.8,.25),wt.add(ae);const ne=Mt.replace("circle",""),Re=document.createElement("canvas");Re.width=128,Re.height=128;const Je=Re.getContext("2d");Je.fillStyle="#ffffff",Je.fillRect(0,0,Re.width,Re.height),Je.fillStyle="#000000",Je.font="bold 80px Arial",Je.textAlign="center",Je.textBaseline="middle",Je.fillText(ne,64,64);const ln=new CM(Re),Tn=new Jt(new Xr(.4,.4),new Ee({map:ln,side:Fi}));Tn.position.set(0,2.5,.23),wt.add(Tn),Nt.position.set(0,2.2,.23),wt.add(Nt),u.push({id:Mt,mesh:Xt,material:Zt});const Te=new Jt(new Yo(.04,.04,1.2,8),new Ee({color:0}));return Te.position.set(.35,1.7,0),Te.rotation.z=Math.PI/2,wt.rotation.y=Math.PI/2,wt.add(Te),dt?(wt.position.set(mt,0,lt),wt.rotation.y=Math.PI):wt.position.set(lt,0,mt),g.add(wt),wt},xt=4.5,Lt=L/2-63,ue=-F/2+16;for(let lt=0;lt<4;lt++){const mt=ue+lt*xt;bt(Lt,mt,`circle${4-lt}`,!1),Ht(Lt,mt,!1)}const Ie=ct.x-2,De=ct.z-Yt/2+2;for(let lt=0;lt<4;lt++){const mt=De+lt*xt,Mt=`circle${8-lt}`;bt(Ie,mt,Mt,!0),Ht(Ie,mt,!0)}const Ue=document.createElement("div");Ue.style.position="absolute",Ue.style.background="rgba(0, 0, 0, 0.8)",Ue.style.color="white",Ue.style.padding="10px 15px",Ue.style.borderRadius="8px",Ue.style.fontFamily="Arial, sans-serif",Ue.style.fontSize="14px",Ue.style.display="none",Ue.style.pointerEvents="none",Ue.style.zIndex="1000",Ue.style.maxWidth="300px",document.body.appendChild(Ue);async function Yn(){try{const mt=await(await fetch("https://okeanids.mbari.org/widget/charge/charge.svg",{cache:"no-store"})).text(),dt=new DOMParser().parseFromString(mt,"image/svg+xml"),wt={};return dt.querySelectorAll("text.carcolor").forEach((Qt,Xt)=>{const Nt=Qt.textContent.trim();Nt&&(wt[`circle${Xt+1}`]=Nt)}),wt}catch(lt){return console.error("Failed to fetch car info",lt),{}}}let na={};Yn().then(lt=>{na=lt}),setInterval(async()=>{na=await Yn()},6e4);function ms(lt){if(!lt)return null;const mt={silver:12632256,white:16777215,black:1710618,gray:8421504,grey:8421504,red:13369344,blue:26316,green:26112,yellow:16768256,orange:16746496,brown:6636321,tan:13808780,beige:16119260,gold:16766720,purple:8388736,maroon:8388608},Mt=lt.toLowerCase();for(const[dt,wt]of Object.entries(mt))if(Mt.includes(dt))return wt;return null}function Na(lt,mt,Mt){const dt=new hs,wt=new Jt(new re(2.4,1.8,4.8),new Ee({color:Mt}));wt.position.y=1.2,wt.castShadow=!0,dt.add(wt);const Zt=new Jt(new re(2.16,1.2,3),new Ee({color:Mt}));Zt.position.set(0,2.4,-.36),Zt.castShadow=!0,dt.add(Zt);const Qt=new Yo(.48,.48,.36,16),Xt=new Ee({color:2236962});return[[1.2,.48,1.56],[-1.2,.48,1.56],[1.2,.48,-1.56],[-1.2,.48,-1.56]].forEach(ae=>{const ne=new Jt(Qt,Xt);ne.rotation.z=Math.PI/2,ne.position.set(...ae),ne.castShadow=!0,dt.add(ne)}),dt.position.set(lt,1.2,mt),dt.rotation.y=Math.PI/2,g.add(dt),dt}const Gi=[];async function ia(){try{const mt=await(await fetch("https://okeanids.mbari.org/widget/charge/charge.svg",{cache:"no-store"})).text(),wt=new DOMParser().parseFromString(mt,"image/svg+xml").querySelectorAll("text.carcolor");Gi.forEach(Zt=>{g.remove(Zt)}),Gi.length=0,wt.forEach((Zt,Qt)=>{const Xt=Zt.textContent.trim(),Nt=`circle${Qt+1}`;if(Xt){const ae=ms(Xt);if(ae!==null){const ne=u.find(Re=>Re.id===Nt);if(ne){const Re=new et;ne.mesh.parent.getWorldPosition(Re);const Je=Na(Re.x+5,Re.z,ae);Gi.push(Je)}}}})}catch(lt){console.error("Failed to update cars at chargers",lt)}}ia();const ei=[];((lt,mt,Mt,dt)=>{const Qt=new Ee({color:0,transparent:!0,opacity:.5,side:Fi}),Xt=6,Nt=new Jt(new re((lt-Xt)/2,2,.1),Qt);Nt.position.set(Mt-Xt/2-(lt-Xt)/4,1+2/2,dt-mt/2),Nt.castShadow=!0,g.add(Nt),ei.push({minX:Mt-Xt/2-(lt-Xt)/2,maxX:Mt-Xt/2,minZ:dt-mt/2-.1/2,maxZ:dt-mt/2+.1/2});const ae=new Jt(new re((lt-Xt)/2,2,.1),Qt);ae.position.set(Mt+Xt/2+(lt-Xt)/4,1+2/2,dt-mt/2),ae.castShadow=!0,g.add(ae),ei.push({minX:Mt+Xt/2,maxX:Mt+Xt/2+(lt-Xt)/2,minZ:dt-mt/2-.1/2,maxZ:dt-mt/2+.1/2});const ne=new Jt(new re(lt,2,.1),Qt);ne.position.set(Mt,1+2/2,dt+mt/2),ne.castShadow=!0,g.add(ne),ei.push({minX:Mt-lt/2,maxX:Mt+lt/2,minZ:dt+mt/2-.1/2,maxZ:dt+mt/2+.1/2});const Re=new Jt(new re(.1,2,mt),Qt);Re.position.set(Mt-lt/2,1+2/2,dt),Re.castShadow=!0,g.add(Re),ei.push({minX:Mt-lt/2-.1/2,maxX:Mt-lt/2+.1/2,minZ:dt-mt/2,maxZ:dt+mt/2});const Je=new Jt(new re(.1,2,mt),Qt);Je.position.set(Mt+lt/2,1+2/2,dt),Je.castShadow=!0,g.add(Je),ei.push({minX:Mt+lt/2-.1/2,maxX:Mt+lt/2+.1/2,minZ:dt-mt/2,maxZ:dt+mt/2})})(I,N,Z,A),(()=>{const lt=new Ee({color:16777215}),mt=.15,Mt=5,dt=6;for(let wt=0;wt<5;wt++){const Zt=new Jt(new re(Mt,.05,mt),lt);Zt.position.set(Z+I/2-2.5,1.15,A-N/2+5+wt*dt),g.add(Zt)}for(let wt=0;wt<4;wt++){const Zt=new Jt(new re(Mt,.05,mt),lt);Zt.position.set(Z-I/2+2.5,1.15,A-N/2+5+wt*dt),g.add(Zt)}})();const se=new hs,mn=new Jt(new re(2.4,1.8,4.8),new Ee({color:26316}));mn.position.y=1.2,mn.castShadow=!0,se.add(mn);const Vn=new Jt(new re(2.16,1.2,3),new Ee({color:26316}));Vn.position.set(0,2.4,-.36),Vn.castShadow=!0,se.add(Vn);const Oa=new Yo(.48,.48,.36,16),Pa=new Ee({color:2236962});[[1.2,.48,1.56],[-1.2,.48,1.56],[1.2,.48,-1.56],[-1.2,.48,-1.56]].forEach(lt=>{const mt=new Jt(Oa,Pa);mt.rotation.z=Math.PI/2,mt.position.set(...lt),mt.castShadow=!0,se.add(mt)}),se.position.set(Z+5,1.2,A-N/2+10),g.add(se);const En=new hs,Ci=new Jt(new re(.6,1,.4),new Ee({color:2201331}));Ci.position.y=.5,Ci.castShadow=!0,En.add(Ci);const aa=new Jt(new Hc(.3,16,16),new Ee({color:16767916}));aa.position.y=1.3,aa.castShadow=!0,En.add(aa);const pi=new Jt(new re(.2,.8,.2),new Ee({color:2201331}));pi.position.set(-.4,.5,0),pi.castShadow=!0,En.add(pi);const mi=new Jt(new re(.2,.8,.2),new Ee({color:2201331}));mi.position.set(.4,.5,0),mi.castShadow=!0,En.add(mi);const Di=new Jt(new re(.25,.6,.25),new Ee({color:1668818}));Di.position.set(-.15,-.3,0),Di.castShadow=!0,En.add(Di);const gi=new Jt(new re(.25,.6,.25),new Ee({color:1668818}));gi.position.set(.15,-.3,0),gi.castShadow=!0,En.add(gi);const T=Z,Y=A;En.position.set(T,2.7,Y),g.add(En);const q={position:new et(T,2.7,Y),rotation:0,pitch:0,velocity:new et,speed:.2,inCar:!1,height:1.7};let $=!1;new et(0,0,0);const Q=new et(0,5,-10),Rt={};window.addEventListener("keydown",lt=>{if(Rt[lt.key.toLowerCase()]=!0,lt.key.toLowerCase()==="v"&&($=!$),lt.key.toLowerCase()==="e"){const mt=q.position.distanceTo(se.position);!q.inCar&&mt<5?(q.inCar=!0,En.visible=!1,i(!1)):q.inCar&&(q.inCar=!1,q.position.copy(se.position),q.position.z+=3,q.position.y=q.height+1,En.visible=!0)}}),window.addEventListener("keyup",lt=>Rt[lt.key.toLowerCase()]=!1);const Wt=()=>{requestAnimationFrame(Wt);const lt=.03;if(Rt.arrowleft&&(q.rotation+=lt),Rt.arrowright&&(q.rotation-=lt),Rt.arrowup&&(q.pitch=Math.min(q.pitch+lt,Math.PI/3)),Rt.arrowdown&&(q.pitch=Math.max(q.pitch-lt,-Math.PI/3)),q.inCar){const Zt=se.position.x,Qt=se.position.z;$?(Rt.w&&(se.position.x+=Math.sin(se.rotation.y)*.3,se.position.z+=Math.cos(se.rotation.y)*.3),Rt.s&&(se.position.x-=Math.sin(se.rotation.y)*.3*.5,se.position.z-=Math.cos(se.rotation.y)*.3*.5)):(Rt.s&&(se.position.x+=Math.sin(se.rotation.y)*.3,se.position.z+=Math.cos(se.rotation.y)*.3),Rt.w&&(se.position.x-=Math.sin(se.rotation.y)*.3*.5,se.position.z-=Math.cos(se.rotation.y)*.3*.5));const Xt=2.4;let Nt=!1;for(const ae of ei)if(se.position.x+Xt>ae.minX&&se.position.x-Xt<ae.maxX&&se.position.z+Xt>ae.minZ&&se.position.z-Xt<ae.maxZ){Nt=!0;break}Nt&&(se.position.x=Zt,se.position.z=Qt),Rt.a&&(se.rotation.y+=.03,q.rotation=se.rotation.y),Rt.d&&(se.rotation.y-=.03,q.rotation=se.rotation.y),q.position.copy(se.position),q.position.y=3.5}else{const dt=new et;if($?(Rt.w&&(dt.z+=1),Rt.s&&(dt.z-=1),Rt.a&&(dt.x+=1),Rt.d&&(dt.x-=1)):(Rt.w&&(dt.z-=1),Rt.s&&(dt.z+=1),Rt.a&&(dt.x-=1),Rt.d&&(dt.x+=1)),dt.length()>0){dt.normalize();const wt=q.rotation+Math.atan2(dt.x,dt.z),Zt=q.position.x,Qt=q.position.z;q.position.x+=Math.sin(wt)*q.speed,q.position.z+=Math.cos(wt)*q.speed;const Xt=.4;let Nt=!1;for(const ae of ei)if(q.position.x+Xt>ae.minX&&q.position.x-Xt<ae.maxX&&q.position.z+Xt>ae.minZ&&q.position.z-Xt<ae.maxZ){Nt=!0;break}Nt&&(q.position.x=Zt,q.position.z=Qt)}En.position.copy(q.position),En.rotation.y=q.rotation,En.visible=$}if($){const dt=Q.clone();dt.applyAxisAngle(new et(0,1,0),q.rotation),_.position.copy(q.position).add(dt),_.lookAt(q.position)}else _.position.copy(q.position),_.rotation.order="YXZ",_.rotation.y=q.rotation,_.rotation.x=q.pitch;let mt=null,Mt=1/0;if(u.forEach(dt=>{const wt=new et;dt.mesh.parent.getWorldPosition(wt);const Zt=q.position.distanceTo(wt);Zt<8&&Zt<Mt&&(mt=dt,Mt=Zt)}),mt&&na[mt.id]){const dt=new et;mt.mesh.parent.getWorldPosition(dt);const wt=dt.clone().project(_),Zt=(wt.x*.5+.5)*window.innerWidth,Qt=(-wt.y*.5+.5)*window.innerHeight-50;Ue.style.left=Zt+"px",Ue.style.top=Qt+"px",Ue.textContent=na[mt.id],Ue.style.display="block"}else Ue.style.display="none";S.render(g,_)};Wt();const Bt=()=>{_.aspect=window.innerWidth/window.innerHeight,_.updateProjectionMatrix(),S.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",Bt),p();const Kt=setInterval(p,6e4);return()=>{window.removeEventListener("resize",Bt),o.current?.removeChild(S.domElement),Gi.forEach(lt=>g.remove(lt)),document.body.removeChild(Ue),clearInterval(Kt)}},[]),An.jsxs("div",{style:{width:"100vw",height:"100vh",overflow:"hidden",position:"relative"},children:[An.jsx("div",{ref:o,style:{width:"100%",height:"100%"}}),e&&An.jsxs("div",{style:{position:"absolute",top:"20px",left:"50%",transform:"translateX(-50%)",background:"rgba(0,0,0,0.7)",color:"white",padding:"15px 25px",borderRadius:"10px",fontFamily:"Arial, sans-serif",fontSize:"14px",textAlign:"center"},children:[An.jsx("div",{style:{marginBottom:"10px",fontWeight:"bold"},children:"Controls:"}),An.jsx("div",{children:"WASD - Move/Drive"}),An.jsx("div",{children:"Arrow Keys - Look Around"}),An.jsx("div",{children:"E - Enter/Exit Car"}),An.jsx("div",{children:"V - Toggle Camera View"})]}),s&&An.jsxs("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",background:"rgba(0,0,0,0.85)",color:"white",padding:"25px 30px",borderRadius:"12px",fontFamily:"Arial, sans-serif",fontSize:"14px",maxWidth:"520px",lineHeight:"1.5",textAlign:"center",zIndex:10},children:[An.jsx("div",{style:{fontSize:"18px",fontWeight:"bold",marginBottom:"15px"},children:"Welcome to Ben's EV Charger Dashboard"}),An.jsx("p",{children:"Everyday I walk or drive to the ChargePoint stations to see if they are in use. Now you can play as me, starting at Building G, and walk or drive my Chevy Volt around the two parking lots of our institution checking charger status."}),An.jsx("p",{children:"If a car is using a station, it will appear in the spot. As you approach a station, a popup will tell you how long it has been fully charged."}),An.jsx("p",{style:{fontWeight:"bold"},children:"Good luck getting a spot!"}),An.jsxs("div",{style:{marginTop:"15px",fontSize:"12px",opacity:.8},children:["Data scraped from:",An.jsx("br",{}),An.jsx("span",{style:{wordBreak:"break-all"},children:"okeanids.mbari.org/widget/charge/charge.svg"})]}),An.jsx("button",{onClick:()=>l(!1),style:{marginTop:"20px",padding:"8px 16px",borderRadius:"6px",border:"none",cursor:"pointer",fontWeight:"bold"},children:"Start"})]})]})}xS.createRoot(document.getElementById("root")).render(An.jsx(ko.StrictMode,{children:An.jsx(P1,{})}));
