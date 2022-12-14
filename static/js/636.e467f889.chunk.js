"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[636],{9055:function(n,t,e){e.d(t,{x:function(){return a}});var o=e(6444),r=e(407),a=(0,o.ZP)("div")(r.$_,r.Dh,r.bK,r.GQ,r.Oq,r.Cg,r.AF,r.FK,r.cp)},1636:function(n,t,e){e.r(t),e.d(t,{default:function(){return zn}});var o=e(885),r=e(2791),a=e(9434),i=e(3441),s=e(4942),c=e(1413);function l(n,t){if(null==n)return{};var e,o,r=function(n,t){if(null==n)return{};var e,o,r={},a=Object.keys(n);for(o=0;o<a.length;o++)e=a[o],t.indexOf(e)>=0||(r[e]=n[e]);return r}(n,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(o=0;o<a.length;o++)e=a[o],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(r[e]=n[e])}return r}var u=e(2982);function d(n){var t,e,o="";if("string"==typeof n||"number"==typeof n)o+=n;else if("object"==typeof n)if(Array.isArray(n))for(t=0;t<n.length;t++)n[t]&&(e=d(n[t]))&&(o&&(o+=" "),o+=e);else for(t in n)n[t]&&(o&&(o+=" "),o+=t);return o}var f=function(){for(var n,t,e=0,o="";e<arguments.length;)(n=arguments[e++])&&(t=d(n))&&(o&&(o+=" "),o+=t);return o},p=["theme","type"],h=["delay","staleId"],m=function(n){return"number"==typeof n&&!isNaN(n)},v=function(n){return"string"==typeof n},g=function(n){return"function"==typeof n},y=function(n){return v(n)||g(n)?n:null},x=function(n){return(0,r.isValidElement)(n)||v(n)||g(n)||m(n)};function b(n){var t=n.enter,e=n.exit,o=n.appendPosition,a=void 0!==o&&o,i=n.collapse,s=void 0===i||i,c=n.collapseDuration,l=void 0===c?300:c;return function(n){var o=n.children,i=n.position,c=n.preventExitTransition,d=n.done,f=n.nodeRef,p=n.isIn,h=a?"".concat(t,"--").concat(i):t,m=a?"".concat(e,"--").concat(i):e,v=(0,r.useRef)(0);return(0,r.useLayoutEffect)((function(){var n,t=f.current,e=h.split(" "),o=function n(o){var r;o.target===f.current&&(t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",n),t.removeEventListener("animationcancel",n),0===v.current&&"animationcancel"!==o.type&&(r=t.classList).remove.apply(r,(0,u.Z)(e)))};(n=t.classList).add.apply(n,(0,u.Z)(e)),t.addEventListener("animationend",o),t.addEventListener("animationcancel",o)}),[]),(0,r.useEffect)((function(){var n=f.current,t=function t(){n.removeEventListener("animationend",t),s?function(n,t,e){void 0===e&&(e=300);var o=n.scrollHeight,r=n.style;requestAnimationFrame((function(){r.minHeight="initial",r.height=o+"px",r.transition="all ".concat(e,"ms"),requestAnimationFrame((function(){r.height="0",r.padding="0",r.margin="0",setTimeout(t,e)}))}))}(n,d,l):d()};p||(c?t():(v.current=1,n.className+=" ".concat(m),n.addEventListener("animationend",t)))}),[p]),r.createElement(r.Fragment,null,o)}}function E(n,t){return{content:n.content,containerId:n.props.containerId,id:n.props.toastId,theme:n.props.theme,type:n.props.type,data:n.props.data||{},isLoading:n.props.isLoading,icon:n.props.icon,status:t}}var T={list:new Map,emitQueue:new Map,on:function(n,t){return this.list.has(n)||this.list.set(n,[]),this.list.get(n).push(t),this},off:function(n,t){if(t){var e=this.list.get(n).filter((function(n){return n!==t}));return this.list.set(n,e),this}return this.list.delete(n),this},cancelEmit:function(n){var t=this.emitQueue.get(n);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(n)),this},emit:function(n){var t=arguments,e=this;this.list.has(n)&&this.list.get(n).forEach((function(o){var r=setTimeout((function(){o.apply(void 0,(0,u.Z)([].slice.call(t,1)))}),0);e.emitQueue.has(n)||e.emitQueue.set(n,[]),e.emitQueue.get(n).push(r)}))}},k=function(n){var t=n.theme,e=n.type,o=l(n,p);return r.createElement("svg",(0,c.Z)({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-".concat(e,")")},o))},C={info:function(n){return r.createElement(k,(0,c.Z)({},n),r.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(n){return r.createElement(k,(0,c.Z)({},n),r.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(n){return r.createElement(k,(0,c.Z)({},n),r.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(n){return r.createElement(k,(0,c.Z)({},n),r.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return r.createElement("div",{className:"Toastify__spinner"})}};function w(n){var t=(0,r.useReducer)((function(n){return n+1}),0),e=(0,o.Z)(t,2)[1],a=(0,r.useState)([]),i=(0,o.Z)(a,2),s=i[0],d=i[1],f=(0,r.useRef)(null),p=(0,r.useRef)(new Map).current,b=function(n){return-1!==s.indexOf(n)},k=(0,r.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:n,containerId:null,isToastActive:b,getToast:function(n){return p.get(n)}}).current;function w(n){var t=n.containerId;!k.props.limit||t&&k.containerId!==t||(k.count-=k.queue.length,k.queue=[])}function O(n){d((function(t){return null==n?[]:t.filter((function(t){return t!==n}))}))}function Z(){var n=k.queue.shift();I(n.toastContent,n.toastProps,n.staleId)}function _(n,t){var o=t.delay,a=t.staleId,i=l(t,h);if(x(n)&&!function(n){return!f.current||k.props.enableMultiContainer&&n.containerId!==k.props.containerId||p.has(n.toastId)&&null==n.updateId}(i)){var s=i.toastId,u=i.updateId,d=i.data,b=k.props,w=function(){return O(s)},_=null==u;_&&k.count++;var j,N,P=(0,c.Z)((0,c.Z)((0,c.Z)({},b),{},{style:b.toastStyle,key:k.toastKey++},i),{},{toastId:s,updateId:u,data:d,closeToast:w,isIn:!1,className:y(i.className||b.toastClassName),bodyClassName:y(i.bodyClassName||b.bodyClassName),progressClassName:y(i.progressClassName||b.progressClassName),autoClose:!i.isLoading&&(j=i.autoClose,N=b.autoClose,!1===j||m(j)&&j>0?j:N),deleteToast:function(){var n=E(p.get(s),"removed");p.delete(s),T.emit(4,n);var t=k.queue.length;if(k.count=null==s?k.count-k.displayedToast:k.count-1,k.count<0&&(k.count=0),t>0){var o=null==s?k.props.limit:1;if(1===t||1===o)k.displayedToast++,Z();else{var r=o>t?t:o;k.displayedToast=r;for(var a=0;a<r;a++)Z()}}else e()}});P.iconOut=function(n){var t=n.theme,e=n.type,o=n.isLoading,a=n.icon,i=null,s={theme:t,type:e};return!1===a||(g(a)?i=a(s):(0,r.isValidElement)(a)?i=(0,r.cloneElement)(a,s):v(a)||m(a)?i=a:o?i=C.spinner():function(n){return n in C}(e)&&(i=C[e](s))),i}(P),g(i.onOpen)&&(P.onOpen=i.onOpen),g(i.onClose)&&(P.onClose=i.onClose),P.closeButton=b.closeButton,!1===i.closeButton||x(i.closeButton)?P.closeButton=i.closeButton:!0===i.closeButton&&(P.closeButton=!x(b.closeButton)||b.closeButton);var L=n;(0,r.isValidElement)(n)&&!v(n.type)?L=(0,r.cloneElement)(n,{closeToast:w,toastProps:P,data:d}):g(n)&&(L=n({closeToast:w,toastProps:P,data:d})),b.limit&&b.limit>0&&k.count>b.limit&&_?k.queue.push({toastContent:L,toastProps:P,staleId:a}):m(o)?setTimeout((function(){I(L,P,a)}),o):I(L,P,a)}}function I(n,t,e){var o=t.toastId;e&&p.delete(e);var r={content:n,props:t};p.set(o,r),d((function(n){return[].concat((0,u.Z)(n),[o]).filter((function(n){return n!==e}))})),T.emit(4,E(r,null==r.props.updateId?"added":"updated"))}return(0,r.useEffect)((function(){return k.containerId=n.containerId,T.cancelEmit(3).on(0,_).on(1,(function(n){return f.current&&O(n)})).on(5,w).emit(2,k),function(){p.clear(),T.emit(3,k)}}),[]),(0,r.useEffect)((function(){k.props=n,k.isToastActive=b,k.displayedToast=s.length})),{getToastToRender:function(t){var e=new Map,o=Array.from(p.values());return n.newestOnTop&&o.reverse(),o.forEach((function(n){var t=n.props.position;e.has(t)||e.set(t,[]),e.get(t).push(n)})),Array.from(e,(function(n){return t(n[0],n[1])}))},containerRef:f,isToastActive:b}}function O(n){return n.targetTouches&&n.targetTouches.length>=1?n.targetTouches[0].clientX:n.clientX}function Z(n){return n.targetTouches&&n.targetTouches.length>=1?n.targetTouches[0].clientY:n.clientY}function _(n){var t=(0,r.useState)(!1),e=(0,o.Z)(t,2),a=e[0],i=e[1],s=(0,r.useState)(!1),c=(0,o.Z)(s,2),l=c[0],u=c[1],d=(0,r.useRef)(null),f=(0,r.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=(0,r.useRef)(n),h=n.autoClose,m=n.pauseOnHover,v=n.closeToast,y=n.onClick,x=n.closeOnClick;function b(t){if(n.draggable){"touchstart"===t.nativeEvent.type&&t.nativeEvent.preventDefault(),f.didMove=!1,document.addEventListener("mousemove",C),document.addEventListener("mouseup",w),document.addEventListener("touchmove",C),document.addEventListener("touchend",w);var e=d.current;f.canCloseOnClick=!0,f.canDrag=!0,f.boundingRect=e.getBoundingClientRect(),e.style.transition="",f.x=O(t.nativeEvent),f.y=Z(t.nativeEvent),"x"===n.draggableDirection?(f.start=f.x,f.removalDistance=e.offsetWidth*(n.draggablePercent/100)):(f.start=f.y,f.removalDistance=e.offsetHeight*(80===n.draggablePercent?1.5*n.draggablePercent:n.draggablePercent/100))}}function E(t){if(f.boundingRect){var e=f.boundingRect,o=e.top,r=e.bottom,a=e.left,i=e.right;"touchend"!==t.nativeEvent.type&&n.pauseOnHover&&f.x>=a&&f.x<=i&&f.y>=o&&f.y<=r?k():T()}}function T(){i(!0)}function k(){i(!1)}function C(t){var e=d.current;f.canDrag&&e&&(f.didMove=!0,a&&k(),f.x=O(t),f.y=Z(t),f.delta="x"===n.draggableDirection?f.x-f.start:f.y-f.start,f.start!==f.x&&(f.canCloseOnClick=!1),e.style.transform="translate".concat(n.draggableDirection,"(").concat(f.delta,"px)"),e.style.opacity=""+(1-Math.abs(f.delta/f.removalDistance)))}function w(){document.removeEventListener("mousemove",C),document.removeEventListener("mouseup",w),document.removeEventListener("touchmove",C),document.removeEventListener("touchend",w);var t=d.current;if(f.canDrag&&f.didMove&&t){if(f.canDrag=!1,Math.abs(f.delta)>f.removalDistance)return u(!0),void n.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate".concat(n.draggableDirection,"(0)"),t.style.opacity="1"}}(0,r.useEffect)((function(){p.current=n})),(0,r.useEffect)((function(){return d.current&&d.current.addEventListener("d",T,{once:!0}),g(n.onOpen)&&n.onOpen((0,r.isValidElement)(n.children)&&n.children.props),function(){var n=p.current;g(n.onClose)&&n.onClose((0,r.isValidElement)(n.children)&&n.children.props)}}),[]),(0,r.useEffect)((function(){return n.pauseOnFocusLoss&&(document.hasFocus()||k(),window.addEventListener("focus",T),window.addEventListener("blur",k)),function(){n.pauseOnFocusLoss&&(window.removeEventListener("focus",T),window.removeEventListener("blur",k))}}),[n.pauseOnFocusLoss]);var _={onMouseDown:b,onTouchStart:b,onMouseUp:E,onTouchEnd:E};return h&&m&&(_.onMouseEnter=k,_.onMouseLeave=T),x&&(_.onClick=function(n){y&&y(n),f.canCloseOnClick&&v()}),{playToast:T,pauseToast:k,isRunning:a,preventExitTransition:l,toastRef:d,eventHandlers:_}}function I(n){var t=n.closeToast,e=n.theme,o=n.ariaLabel,a=void 0===o?"close":o;return r.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(e),type:"button",onClick:function(n){n.stopPropagation(),t(n)},"aria-label":a},r.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function j(n){var t=n.delay,e=n.isRunning,o=n.closeToast,a=n.type,i=void 0===a?"default":a,l=n.hide,u=n.className,d=n.style,p=n.controlledProgress,h=n.progress,m=n.rtl,v=n.isIn,y=n.theme,x=l||p&&0===h,b=(0,c.Z)((0,c.Z)({},d),{},{animationDuration:"".concat(t,"ms"),animationPlayState:e?"running":"paused",opacity:x?0:1});p&&(b.transform="scaleX(".concat(h,")"));var E=f("Toastify__progress-bar",p?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(y),"Toastify__progress-bar--".concat(i),{"Toastify__progress-bar--rtl":m}),T=g(u)?u({rtl:m,type:i,defaultClassName:E}):f(E,u);return r.createElement("div",(0,s.Z)({role:"progressbar","aria-hidden":x?"true":"false","aria-label":"notification timer",className:T,style:b},p&&h>=1?"onTransitionEnd":"onAnimationEnd",p&&h<1?null:function(){v&&o()}))}var N=function(n){var t=_(n),e=t.isRunning,o=t.preventExitTransition,a=t.toastRef,i=t.eventHandlers,s=n.closeButton,l=n.children,u=n.autoClose,d=n.onClick,p=n.type,h=n.hideProgressBar,m=n.closeToast,v=n.transition,y=n.position,x=n.className,b=n.style,E=n.bodyClassName,T=n.bodyStyle,k=n.progressClassName,C=n.progressStyle,w=n.updateId,O=n.role,Z=n.progress,N=n.rtl,P=n.toastId,L=n.deleteToast,R=n.isIn,z=n.isLoading,M=n.iconOut,A=n.closeOnClick,B=n.theme,D=f("Toastify__toast","Toastify__toast-theme--".concat(B),"Toastify__toast--".concat(p),{"Toastify__toast--rtl":N},{"Toastify__toast--close-on-click":A}),S=g(x)?x({rtl:N,position:y,type:p,defaultClassName:D}):f(D,x),F=!!Z||!u,H={closeToast:m,type:p,theme:B},V=null;return!1===s||(V=g(s)?s(H):(0,r.isValidElement)(s)?(0,r.cloneElement)(s,H):I(H)),r.createElement(v,{isIn:R,done:L,position:y,preventExitTransition:o,nodeRef:a},r.createElement("div",(0,c.Z)((0,c.Z)({id:P,onClick:d,className:S},i),{},{style:b,ref:a}),r.createElement("div",(0,c.Z)((0,c.Z)({},R&&{role:O}),{},{className:g(E)?E({type:p}):f("Toastify__toast-body",E),style:T}),null!=M&&r.createElement("div",{className:f("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!z})},M),r.createElement("div",null,l)),V,r.createElement(j,(0,c.Z)((0,c.Z)({},w&&!F?{key:"pb-".concat(w)}:{}),{},{rtl:N,theme:B,delay:u,isRunning:e,isIn:R,closeToast:m,hide:h,type:p,style:C,className:k,controlledProgress:F,progress:Z||0}))))},P=function(n,t){return void 0===t&&(t=!1),{enter:"Toastify--animate Toastify__".concat(n,"-enter"),exit:"Toastify--animate Toastify__".concat(n,"-exit"),appendPosition:t}},L=b(P("bounce",!0)),R=(b(P("slide",!0)),b(P("zoom")),b(P("flip")),(0,r.forwardRef)((function(n,t){var e=w(n),o=e.getToastToRender,a=e.containerRef,i=e.isToastActive,s=n.className,l=n.style,u=n.rtl,d=n.containerId;function p(n){var t=f("Toastify__toast-container","Toastify__toast-container--".concat(n),{"Toastify__toast-container--rtl":u});return g(s)?s({position:n,rtl:u,defaultClassName:t}):f(t,y(s))}return(0,r.useEffect)((function(){t&&(t.current=a.current)}),[]),r.createElement("div",{ref:a,className:"Toastify",id:d},o((function(n,t){var e=t.length?(0,c.Z)({},l):(0,c.Z)((0,c.Z)({},l),{},{pointerEvents:"none"});return r.createElement("div",{className:p(n),style:e,key:"container-".concat(n)},t.map((function(n,e){var o=n.content,a=n.props;return r.createElement(N,(0,c.Z)((0,c.Z)({},a),{},{isIn:i(a.toastId),style:(0,c.Z)((0,c.Z)({},a.style),{},{"--nth":e+1,"--len":t.length}),key:"toast-".concat(a.key)}),o)})))})))})));R.displayName="ToastContainer",R.defaultProps={position:"top-right",transition:L,autoClose:5e3,closeButton:I,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var z,M=new Map,A=[],B=1;function D(){return""+B++}function S(n){return n&&(v(n.toastId)||m(n.toastId))?n.toastId:D()}function F(n,t){return M.size>0?T.emit(0,n,t):A.push({content:n,options:t}),t.toastId}function H(n,t){return(0,c.Z)((0,c.Z)({},t),{},{type:t&&t.type||n,toastId:S(t)})}function V(n){return function(t,e){return F(t,H(n,e))}}function q(n,t){return F(n,H("default",t))}q.loading=function(n,t){return F(n,H("default",(0,c.Z)({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},q.promise=function(n,t,e){var o,r=t.pending,a=t.error,i=t.success;r&&(o=v(r)?q.loading(r,e):q.loading(r.render,(0,c.Z)((0,c.Z)({},e),r)));var s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},l=function(n,t,r){if(null!=t){var a=(0,c.Z)((0,c.Z)((0,c.Z)({type:n},s),e),{},{data:r}),i=v(t)?{render:t}:t;return o?q.update(o,(0,c.Z)((0,c.Z)({},a),i)):q(i.render,(0,c.Z)((0,c.Z)({},a),i)),r}q.dismiss(o)},u=g(n)?n():n;return u.then((function(n){return l("success",i,n)})).catch((function(n){return l("error",a,n)})),u},q.success=V("success"),q.info=V("info"),q.error=V("error"),q.warning=V("warning"),q.warn=q.warning,q.dark=function(n,t){return F(n,H("default",(0,c.Z)({theme:"dark"},t)))},q.dismiss=function(n){M.size>0?T.emit(1,n):A=A.filter((function(t){return null!=n&&t.options.toastId!==n}))},q.clearWaitingQueue=function(n){return void 0===n&&(n={}),T.emit(5,n)},q.isActive=function(n){var t=!1;return M.forEach((function(e){e.isToastActive&&e.isToastActive(n)&&(t=!0)})),t},q.update=function(n,t){void 0===t&&(t={}),setTimeout((function(){var e=function(n,t){var e=t.containerId,o=M.get(e||z);return o&&o.getToast(n)}(n,t);if(e){var o=e.props,r=e.content,a=(0,c.Z)((0,c.Z)((0,c.Z)({},o),t),{},{toastId:t.toastId||n,updateId:D()});a.toastId!==n&&(a.staleId=n);var i=a.render||r;delete a.render,F(i,a)}}),0)},q.done=function(n){q.update(n,{progress:1})},q.onChange=function(n){return T.on(4,n),function(){T.off(4,n)}},q.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},q.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},T.on(2,(function(n){z=n.containerId||n,M.set(z,n),A.forEach((function(n){T.emit(0,n.content,n.options)})),A=[]})).on(3,(function(n){M.delete(n.containerId||n),0===M.size&&T.off(0).off(1).off(5)}));var Q,W,U,G,K=e(168),Y=e(6444),X=Y.ZP.form(Q||(Q=(0,K.Z)(["\n  width: 300px;\n  display: flex;\n  flex-direction: column;\n  label {\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 10px;\n  }\n  span {\n    margin-bottom: 5px;\n    font-weight: 500;\n  }\n  input {\n    padding: 5px;\n    border: 1px solid rgba(33, 33, 33, 0.2);\n    border-radius: ",";\n    height: 20px;\n    &:focus {\n      outline: 2px solid #6e65c0;\n    }\n  }\n  button {\n    margin: 0 auto;\n    width: 100px;\n    height: 30px;\n    left: 449px;\n    top: 3766px;\n    border: none;\n    background: #0e663d;\n    border-radius: 5px;\n    color: white;\n    &:hover {\n      background: #137e4c;\n    }\n  }\n"])),(function(n){return n.theme.radii.normal})),$=e(184),J=function(){var n=(0,r.useState)(""),t=(0,o.Z)(n,2),e=t[0],s=t[1],c=(0,r.useState)(""),l=(0,o.Z)(c,2),u=l[0],d=l[1],f=(0,a.v9)((function(n){return n.contacts.contacts.items})),p=(0,a.I0)(),h=function(n){var t=n.target,e=t.name,o=t.value;switch(e){case"name":s(o);break;case"number":d(o);break;default:console.log("Not this field")}},m=function(){s(""),d("")};return(0,$.jsxs)(X,{onSubmit:function(n){n.preventDefault();var t={name:e,number:u};f.find((function(n){return n.number===u}))?q("This phone number is already in the contact list, please write another phone number",{type:"warning",autoClose:1e3}):(p((0,i.el)(t)),m(),q("Contact is added to list",{type:"success",autoClose:1e3}))},children:[(0,$.jsx)(R,{}),(0,$.jsxs)("label",{children:[(0,$.jsx)("span",{children:"Name"}),(0,$.jsx)("input",{onChange:h,value:e,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,$.jsxs)("label",{children:[(0,$.jsx)("span",{children:"Number"}),(0,$.jsx)("input",{onChange:h,value:u,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,$.jsx)("button",{type:"submit",children:"Add contact"})]})},nn=Y.ZP.label(W||(W=(0,K.Z)(["\n  margin: 10px 0;\n  display: flex;\n  flex-direction: column;\n  span {\n    color: rgba(0, 0, 0, 0.5);\n    margin-bottom: 5px;\n    font-weight: 500;\n  }\n  input {\n    padding: 5px;\n    border: 1px solid rgba(33, 33, 33, 0.2);\n    border-radius: ",";\n    height: 10px;\n    &:focus {\n      outline: 2px solid #6e65c0;\n    }\n  }\n"])),(function(n){return n.theme.radii.normal})),tn=e(6895),en=function(){var n=(0,a.v9)((function(n){return n.filter})),t=(0,a.I0)();return(0,$.jsxs)(nn,{children:[(0,$.jsx)("span",{children:"Find contacts by name"}),(0,$.jsx)("input",{onChange:function(n){t((0,tn.b)(n.target.value))},value:n,type:"text",name:"filter"})]})},on=e(9983);function rn(n){return(0,on.w_)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M17 4h5v2h-2v15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6H2V4h5V2h10v2zM9 9v8h2V9H9zm4 0v8h2V9h-2z"}}]}]})(n)}var an,sn,cn,ln=Y.ZP.span(U||(U=(0,K.Z)(["\n  font-weight: 700;\n  margin-right: 10px;\n"]))),un=Y.ZP.p(G||(G=(0,K.Z)(["\n  margin-bottom: 1px;\n"]))),dn=function(n){var t=n.name,e=n.number,o=n.id,r=(0,a.I0)(),s=(0,a.v9)((function(n){return n.contacts.contacts.isLoading}));return(0,$.jsxs)("li",{children:[(0,$.jsxs)("div",{children:[(0,$.jsxs)(un,{children:[(0,$.jsx)(ln,{children:"Name:"}),(0,$.jsx)("span",{children:t})]}),(0,$.jsxs)("p",{children:[(0,$.jsx)(ln,{children:"Phone:"}),(0,$.jsx)("span",{children:e})]})]}),(0,$.jsx)("button",{disabled:s,type:"button",onClick:function(){var n;n=o,r((0,i._f)(n)),q("The contact was successfully deleted",{type:"success",autoClose:1e3})},children:(0,$.jsx)(rn,{})})]})},fn=Y.ZP.ul(an||(an=(0,K.Z)(["\n  min-width: 300px;\n  display: flex;\n  flex-direction: column;\n\n  li {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 5px;\n    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),\n      1px 4px 6px rgba(0, 0, 0, 0.16);\n    &:not(:last-child) {\n      margin-bottom: 10px;\n    }\n    border-radius: ",";\n  }\n  button {\n    display: flex;\n    margin-left: 10px;\n    font-size: 20px;\n    padding: 5px;\n    background-color: #fff;\n    border: none;\n    border-radius: ",";\n    &:hover {\n      background: #433a94;\n      color: #fff;\n    }\n  }\n"])),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.radii.normal})),pn=function(n){var t=n.filterContacts;return(0,$.jsx)("div",{children:(0,$.jsx)(fn,{children:t.map((function(n){var t=n.name,e=n.number,o=n.id;return(0,$.jsx)(dn,{name:t,number:e,id:o},function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,t){return n+((t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_")}),"")}())}))})})},hn=e(9055),mn="#4fa94d",vn={"aria-busy":!0,role:"status"},gn=function(n,t){return Object.defineProperty?Object.defineProperty(n,"raw",{value:t}):n.raw=t,n},yn=242.776657104492,xn=(0,Y.F4)(sn||(sn=gn(["\n  12.5% {\n    stroke-dasharray: ","px, ","px;\n    stroke-dashoffset: -","px;\n  }\n  43.75% {\n    stroke-dasharray: ","px, ","px;\n    stroke-dashoffset: -","px;\n  }\n  100% {\n    stroke-dasharray: ","px, ","px;\n    stroke-dashoffset: -","px;\n  }\n"],["\n  12.5% {\n    stroke-dasharray: ","px, ","px;\n    stroke-dashoffset: -","px;\n  }\n  43.75% {\n    stroke-dasharray: ","px, ","px;\n    stroke-dashoffset: -","px;\n  }\n  100% {\n    stroke-dasharray: ","px, ","px;\n    stroke-dashoffset: -","px;\n  }\n"])),.14*yn,yn,.11*yn,.35*yn,yn,.35*yn,.01*yn,yn,.99*yn),bn=(Y.ZP.path(cn||(cn=gn(["\n  stroke-dasharray: ","px, ",";\n  stroke-dashoffset: 0;\n  animation: "," ","s linear infinite;\n"],["\n  stroke-dasharray: ","px, ",";\n  stroke-dashoffset: 0;\n  animation: "," ","s linear infinite;\n"])),.01*yn,yn,xn,1.6),function(n){return{display:n?"flex":"none"}}),En=function(){return En=Object.assign||function(n){for(var t,e=1,o=arguments.length;e<o;e++)for(var r in t=arguments[e])Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},En.apply(this,arguments)},Tn=function(n,t,e){var o=Math.max(n,t),r=-e-o/2+1,a=2*e+o;return[r,r,a,a].join(" ")},kn=function(n){var t,e=n.height,o=void 0===e?80:e,a=n.width,i=void 0===a?80:a,s=n.color,c=void 0===s?mn:s,l=n.secondaryColor,u=void 0===l?mn:l,d=n.ariaLabel,f=void 0===d?"oval-loading":d,p=n.wrapperStyle,h=n.wrapperClass,m=n.visible,v=void 0===m||m,g=n.strokeWidth,y=void 0===g?2:g,x=n.strokeWidthSecondary;return r.createElement("div",En({style:En(En(En({},bn(v)),p),{padding:3}),className:h,"data-testid":"oval-loading","aria-label":f},vn),r.createElement("svg",{width:i,height:o,viewBox:Tn(Number(y),Number(x||y),20),xmlns:"http://www.w3.org/2000/svg",stroke:c,"data-testid":"oval-svg"},r.createElement("g",{fill:"none",fillRule:"evenodd"},r.createElement("g",{transform:"translate(1 1)",strokeWidth:Number(x||y),"data-testid":"oval-secondary-group"},r.createElement("circle",{strokeOpacity:".5",cx:"0",cy:"0",r:20,stroke:u,strokeWidth:y}),r.createElement("path",{d:(t=20,["M"+t+" 0c0-9.94-8.06",t,t,t].join("-"))},r.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 0 0",to:"360 0 0",dur:"1s",repeatCount:"indefinite"}))))))},Cn=function(n,t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if("undefined"!==typeof e[n])return e[n];if(n&&n.indexOf(".")>0){for(var o=n.split("."),r=o.length,a=e[o[0]],i=1;null!=a&&i<r;)a=a[o[i]],i+=1;if("undefined"!==typeof a)return a}return t}};var wn,On,Zn,_n=function(n,t){return Object.defineProperty?Object.defineProperty(n,"raw",{value:t}):n.raw=t,n},In=(0,Y.F4)(wn||(wn=_n(["\n to {\n    transform: rotate(360deg);\n  }\n"],["\n to {\n    transform: rotate(360deg);\n  }\n"])));Y.ZP.svg(On||(On=_n(["\n  animation: "," 0.75s steps(12, end) infinite;\n  animation-duration: ","s;\n"],["\n  animation: "," 0.75s steps(12, end) infinite;\n  animation-duration: ","s;\n"])),In,Cn("speed","0.75")),Y.ZP.polyline(Zn||(Zn=_n(["\n  stroke-width: ","px;\n  stroke-linecap: round;\n\n  &:nth-child(12n + 0) {\n    stroke-opacity: 0.08;\n  }\n\n  &:nth-child(12n + 1) {\n    stroke-opacity: 0.17;\n  }\n\n  &:nth-child(12n + 2) {\n    stroke-opacity: 0.25;\n  }\n\n  &:nth-child(12n + 3) {\n    stroke-opacity: 0.33;\n  }\n\n  &:nth-child(12n + 4) {\n    stroke-opacity: 0.42;\n  }\n\n  &:nth-child(12n + 5) {\n    stroke-opacity: 0.5;\n  }\n\n  &:nth-child(12n + 6) {\n    stroke-opacity: 0.58;\n  }\n\n  &:nth-child(12n + 7) {\n    stroke-opacity: 0.66;\n  }\n\n  &:nth-child(12n + 8) {\n    stroke-opacity: 0.75;\n  }\n\n  &:nth-child(12n + 9) {\n    stroke-opacity: 0.83;\n  }\n\n  &:nth-child(12n + 11) {\n    stroke-opacity: 0.92;\n  }\n"],["\n  stroke-width: ","px;\n  stroke-linecap: round;\n\n  &:nth-child(12n + 0) {\n    stroke-opacity: 0.08;\n  }\n\n  &:nth-child(12n + 1) {\n    stroke-opacity: 0.17;\n  }\n\n  &:nth-child(12n + 2) {\n    stroke-opacity: 0.25;\n  }\n\n  &:nth-child(12n + 3) {\n    stroke-opacity: 0.33;\n  }\n\n  &:nth-child(12n + 4) {\n    stroke-opacity: 0.42;\n  }\n\n  &:nth-child(12n + 5) {\n    stroke-opacity: 0.5;\n  }\n\n  &:nth-child(12n + 6) {\n    stroke-opacity: 0.58;\n  }\n\n  &:nth-child(12n + 7) {\n    stroke-opacity: 0.66;\n  }\n\n  &:nth-child(12n + 8) {\n    stroke-opacity: 0.75;\n  }\n\n  &:nth-child(12n + 9) {\n    stroke-opacity: 0.83;\n  }\n\n  &:nth-child(12n + 11) {\n    stroke-opacity: 0.92;\n  }\n"])),(function(n){return n.width}));var jn,Nn,Pn,Ln=function(n,t){return Object.defineProperty?Object.defineProperty(n,"raw",{value:t}):n.raw=t,n},Rn=(0,Y.F4)(jn||(jn=Ln(["\n to {\n    stroke-dashoffset: 136;\n  }\n"],["\n to {\n    stroke-dashoffset: 136;\n  }\n"])));Y.ZP.polygon(Nn||(Nn=Ln(["\n  stroke-dasharray: 17;\n  animation: "," 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;\n"],["\n  stroke-dasharray: 17;\n  animation: "," 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;\n"])),Rn),Y.ZP.svg(Pn||(Pn=Ln(["\n  transform-origin: 50% 65%;\n"],["\n  transform-origin: 50% 65%;\n"])));var zn=function(){var n=(0,a.v9)((function(n){return n.contacts.contacts.items})),t=(0,a.v9)((function(n){return n.contacts.contacts.isLoading})),e=(0,a.v9)((function(n){return n.filter})),o=(0,a.I0)();(0,r.useEffect)((function(){o((0,i.yF)())}),[o]);return(0,$.jsxs)(hn.x,{p:"20px",ml:"auto",mr:"auto",display:"flex",flexDirection:"column",alignItems:"center",children:[(0,$.jsxs)(hn.x,{children:[(0,$.jsx)(hn.x,{as:"h2",textAlign:"center",children:"Phonebook"}),(0,$.jsx)(J,{})]}),(0,$.jsxs)(hn.x,{mt:"20px",children:[(0,$.jsxs)(hn.x,{display:"flex",alignItems:"center",children:[0!==n.length?(0,$.jsx)("h2",{children:"Your contacts:"}):(0,$.jsx)("h2",{children:"Please add contact:"}),t&&(0,$.jsx)(kn,{wrapperClass:"loader",height:20,width:20})]}),n.length>1&&(0,$.jsx)(en,{}),(0,$.jsx)(pn,{filterContacts:n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})]}),(0,$.jsx)(hn.x,{mt:"20px"})]})}},9983:function(n,t,e){e.d(t,{w_:function(){return l}});var o=e(2791),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=o.createContext&&o.createContext(r),i=function(){return i=Object.assign||function(n){for(var t,e=1,o=arguments.length;e<o;e++)for(var r in t=arguments[e])Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},i.apply(this,arguments)},s=function(n,t){var e={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&t.indexOf(o)<0&&(e[o]=n[o]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(n);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(n,o[r])&&(e[o[r]]=n[o[r]])}return e};function c(n){return n&&n.map((function(n,t){return o.createElement(n.tag,i({key:t},n.attr),c(n.child))}))}function l(n){return function(t){return o.createElement(u,i({attr:i({},n.attr)},t),c(n.child))}}function u(n){var t=function(t){var e,r=n.attr,a=n.size,c=n.title,l=s(n,["attr","size","title"]),u=a||t.size||"1em";return t.className&&(e=t.className),n.className&&(e=(e?e+" ":"")+n.className),o.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,l,{className:e,style:i(i({color:n.color||t.color},t.style),n.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),c&&o.createElement("title",null,c),n.children)};return void 0!==a?o.createElement(a.Consumer,null,(function(n){return t(n)})):t(r)}}}]);
//# sourceMappingURL=636.e467f889.chunk.js.map