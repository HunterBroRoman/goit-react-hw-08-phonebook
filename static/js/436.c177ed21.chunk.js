"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[436],{9658:function(n,e,t){t.d(e,{Z:function(){return z}});var o=t(4942),r=t(3366),i=t(7462),a=t(2791),c=t(8182),l=t(4419),s=t(2065),u=t(6934),d=t(1402),v=t(4036),f=t(5527),p=t(5878),m=t(1217);function h(n){return(0,m.Z)("MuiAlert",n)}var g=(0,p.Z)("MuiAlert",["root","action","icon","message","filled","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),Z=t(3400),x=t(9201),C=t(184),w=(0,x.Z)((0,C.jsx)("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),b=(0,x.Z)((0,C.jsx)("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),k=(0,x.Z)((0,C.jsx)("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),S=(0,x.Z)((0,C.jsx)("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),E=(0,x.Z)((0,C.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),L=["action","children","className","closeText","color","components","componentsProps","icon","iconMapping","onClose","role","severity","slotProps","slots","variant"],M=(0,u.ZP)(f.Z,{name:"MuiAlert",slot:"Root",overridesResolver:function(n,e){var t=n.ownerState;return[e.root,e[t.variant],e["".concat(t.variant).concat((0,v.Z)(t.color||t.severity))]]}})((function(n){var e=n.theme,t=n.ownerState,r="light"===e.palette.mode?s._j:s.$n,a="light"===e.palette.mode?s.$n:s._j,c=t.color||t.severity;return(0,i.Z)({},e.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px"},c&&"standard"===t.variant&&(0,o.Z)({color:e.vars?e.vars.palette.Alert["".concat(c,"Color")]:r(e.palette[c].light,.6),backgroundColor:e.vars?e.vars.palette.Alert["".concat(c,"StandardBg")]:a(e.palette[c].light,.9)},"& .".concat(g.icon),e.vars?{color:e.vars.palette.Alert["".concat(c,"IconColor")]}:{color:e.palette[c].main}),c&&"outlined"===t.variant&&(0,o.Z)({color:e.vars?e.vars.palette.Alert["".concat(c,"Color")]:r(e.palette[c].light,.6),border:"1px solid ".concat((e.vars||e).palette[c].light)},"& .".concat(g.icon),e.vars?{color:e.vars.palette.Alert["".concat(c,"IconColor")]}:{color:e.palette[c].main}),c&&"filled"===t.variant&&(0,i.Z)({fontWeight:e.typography.fontWeightMedium},e.vars?{color:e.vars.palette.Alert["".concat(c,"FilledColor")],backgroundColor:e.vars.palette.Alert["".concat(c,"FilledBg")]}:{backgroundColor:"dark"===e.palette.mode?e.palette[c].dark:e.palette[c].main,color:e.palette.getContrastText(e.palette[c].main)}))})),y=(0,u.ZP)("div",{name:"MuiAlert",slot:"Icon",overridesResolver:function(n,e){return e.icon}})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),A=(0,u.ZP)("div",{name:"MuiAlert",slot:"Message",overridesResolver:function(n,e){return e.message}})({padding:"8px 0",minWidth:0,overflow:"auto"}),R=(0,u.ZP)("div",{name:"MuiAlert",slot:"Action",overridesResolver:function(n,e){return e.action}})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),j={success:(0,C.jsx)(w,{fontSize:"inherit"}),warning:(0,C.jsx)(b,{fontSize:"inherit"}),error:(0,C.jsx)(k,{fontSize:"inherit"}),info:(0,C.jsx)(S,{fontSize:"inherit"})},z=a.forwardRef((function(n,e){var t,o,a,s,u,f,p=(0,d.Z)({props:n,name:"MuiAlert"}),m=p.action,g=p.children,x=p.className,w=p.closeText,b=void 0===w?"Close":w,k=p.color,S=p.components,z=void 0===S?{}:S,P=p.componentsProps,O=void 0===P?{}:P,T=p.icon,I=p.iconMapping,B=void 0===I?j:I,N=p.onClose,W=p.role,H=void 0===W?"alert":W,D=p.severity,F=void 0===D?"success":D,_=p.slotProps,V=void 0===_?{}:_,X=p.slots,G=void 0===X?{}:X,$=p.variant,q=void 0===$?"standard":$,K=(0,r.Z)(p,L),Y=(0,i.Z)({},p,{color:k,severity:F,variant:q}),J=function(n){var e=n.variant,t=n.color,o=n.severity,r=n.classes,i={root:["root","".concat(e).concat((0,v.Z)(t||o)),"".concat(e)],icon:["icon"],message:["message"],action:["action"]};return(0,l.Z)(i,h,r)}(Y),Q=null!=(t=null!=(o=G.closeButton)?o:z.CloseButton)?t:Z.Z,U=null!=(a=null!=(s=G.closeIcon)?s:z.CloseIcon)?a:E,nn=null!=(u=V.closeButton)?u:O.closeButton,en=null!=(f=V.closeIcon)?f:O.closeIcon;return(0,C.jsxs)(M,(0,i.Z)({role:H,elevation:0,ownerState:Y,className:(0,c.Z)(J.root,x),ref:e},K,{children:[!1!==T?(0,C.jsx)(y,{ownerState:Y,className:J.icon,children:T||B[F]||j[F]}):null,(0,C.jsx)(A,{ownerState:Y,className:J.message,children:g}),null!=m?(0,C.jsx)(R,{ownerState:Y,className:J.action,children:m}):null,null==m&&N?(0,C.jsx)(R,{ownerState:Y,className:J.action,children:(0,C.jsx)(Q,(0,i.Z)({size:"small","aria-label":b,title:b,color:"inherit",onClick:N},nn,{children:(0,C.jsx)(U,(0,i.Z)({fontSize:"small"},en))}))}):null]}))}))},3543:function(n,e,t){t.d(e,{Z:function(){return N}});var o=t(9439),r=t(4942),i=t(3366),a=t(7462),c=t(2791),l=t(4419),s=t(536),u=t(7563),d=t(8956),v=t(9723),f=t(184);function p(n){return n.substring(2).toLowerCase()}var m=function(n){var e=n.children,t=n.disableReactTree,o=void 0!==t&&t,r=n.mouseEvent,i=void 0===r?"onClick":r,a=n.onClickAway,l=n.touchEvent,s=void 0===l?"onTouchEnd":l,m=c.useRef(!1),h=c.useRef(null),g=c.useRef(!1),Z=c.useRef(!1);c.useEffect((function(){return setTimeout((function(){g.current=!0}),0),function(){g.current=!1}}),[]);var x=(0,u.Z)(e.ref,h),C=(0,d.Z)((function(n){var e=Z.current;Z.current=!1;var t=(0,v.Z)(h.current);!g.current||!h.current||"clientX"in n&&function(n,e){return e.documentElement.clientWidth<n.clientX||e.documentElement.clientHeight<n.clientY}(n,t)||(m.current?m.current=!1:(n.composedPath?n.composedPath().indexOf(h.current)>-1:!t.documentElement.contains(n.target)||h.current.contains(n.target))||!o&&e||a(n))})),w=function(n){return function(t){Z.current=!0;var o=e.props[n];o&&o(t)}},b={ref:x};return!1!==s&&(b[s]=w(s)),c.useEffect((function(){if(!1!==s){var n=p(s),e=(0,v.Z)(h.current),t=function(){m.current=!0};return e.addEventListener(n,C),e.addEventListener("touchmove",t),function(){e.removeEventListener(n,C),e.removeEventListener("touchmove",t)}}}),[C,s]),!1!==i&&(b[i]=w(i)),c.useEffect((function(){if(!1!==i){var n=p(i),e=(0,v.Z)(h.current);return e.addEventListener(n,C),function(){e.removeEventListener(n,C)}}}),[C,i]),(0,f.jsx)(c.Fragment,{children:c.cloneElement(e,b)})},h=t(2086);var g=t(6934),Z=t(3967),x=t(1402),C=t(4036),w=t(3208),b=t(8182),k=t(2065),S=t(5527),E=t(5878),L=t(1217);function M(n){return(0,L.Z)("MuiSnackbarContent",n)}(0,E.Z)("MuiSnackbarContent",["root","message","action"]);var y=["action","className","message","role"],A=(0,g.ZP)(S.Z,{name:"MuiSnackbarContent",slot:"Root",overridesResolver:function(n,e){return e.root}})((function(n){var e=n.theme,t="light"===e.palette.mode?.8:.98,o=(0,k._4)(e.palette.background.default,t);return(0,a.Z)({},e.typography.body2,(0,r.Z)({color:e.vars?e.vars.palette.SnackbarContent.color:e.palette.getContrastText(o),backgroundColor:e.vars?e.vars.palette.SnackbarContent.bg:o,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,flexGrow:1},e.breakpoints.up("sm"),{flexGrow:"initial",minWidth:288}))})),R=(0,g.ZP)("div",{name:"MuiSnackbarContent",slot:"Message",overridesResolver:function(n,e){return e.message}})({padding:"8px 0"}),j=(0,g.ZP)("div",{name:"MuiSnackbarContent",slot:"Action",overridesResolver:function(n,e){return e.action}})({display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}),z=c.forwardRef((function(n,e){var t=(0,x.Z)({props:n,name:"MuiSnackbarContent"}),o=t.action,r=t.className,c=t.message,s=t.role,u=void 0===s?"alert":s,d=(0,i.Z)(t,y),v=t,p=function(n){var e=n.classes;return(0,l.Z)({root:["root"],action:["action"],message:["message"]},M,e)}(v);return(0,f.jsxs)(A,(0,a.Z)({role:u,square:!0,elevation:6,className:(0,b.Z)(p.root,r),ownerState:v,ref:e},d,{children:[(0,f.jsx)(R,{className:p.message,ownerState:v,children:c}),o?(0,f.jsx)(j,{className:p.action,ownerState:v,children:o}):null]}))}));function P(n){return(0,L.Z)("MuiSnackbar",n)}(0,E.Z)("MuiSnackbar",["root","anchorOriginTopCenter","anchorOriginBottomCenter","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft"]);var O=["onEnter","onExited"],T=["action","anchorOrigin","autoHideDuration","children","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onBlur","onClose","onFocus","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"],I=(0,g.ZP)("div",{name:"MuiSnackbar",slot:"Root",overridesResolver:function(n,e){var t=n.ownerState;return[e.root,e["anchorOrigin".concat((0,C.Z)(t.anchorOrigin.vertical)).concat((0,C.Z)(t.anchorOrigin.horizontal))]]}})((function(n){var e=n.theme,t=n.ownerState;return(0,a.Z)({zIndex:(e.vars||e).zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},"top"===t.anchorOrigin.vertical?{top:8}:{bottom:8},"left"===t.anchorOrigin.horizontal&&{justifyContent:"flex-start"},"right"===t.anchorOrigin.horizontal&&{justifyContent:"flex-end"},(0,r.Z)({},e.breakpoints.up("sm"),(0,a.Z)({},"top"===t.anchorOrigin.vertical?{top:24}:{bottom:24},"center"===t.anchorOrigin.horizontal&&{left:"50%",right:"auto",transform:"translateX(-50%)"},"left"===t.anchorOrigin.horizontal&&{left:24,right:"auto"},"right"===t.anchorOrigin.horizontal&&{right:24,left:"auto"})))})),B=c.forwardRef((function(n,e){var t=(0,x.Z)({props:n,name:"MuiSnackbar"}),r=(0,Z.Z)(),u={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},v=t.action,p=t.anchorOrigin,g=(p=void 0===p?{vertical:"bottom",horizontal:"left"}:p).vertical,b=p.horizontal,k=t.autoHideDuration,S=void 0===k?null:k,E=t.children,L=t.className,M=t.ClickAwayListenerProps,y=t.ContentProps,A=t.disableWindowBlurListener,R=void 0!==A&&A,j=t.message,B=t.open,N=t.TransitionComponent,W=void 0===N?w.Z:N,H=t.transitionDuration,D=void 0===H?u:H,F=t.TransitionProps,_=(F=void 0===F?{}:F).onEnter,V=F.onExited,X=(0,i.Z)(t.TransitionProps,O),G=(0,i.Z)(t,T),$=(0,a.Z)({},t,{anchorOrigin:{vertical:g,horizontal:b},autoHideDuration:S,disableWindowBlurListener:R,TransitionComponent:W,transitionDuration:D}),q=function(n){var e=n.classes,t=n.anchorOrigin,o={root:["root","anchorOrigin".concat((0,C.Z)(t.vertical)).concat((0,C.Z)(t.horizontal))]};return(0,l.Z)(o,P,e)}($),K=function(n){var e=n.autoHideDuration,t=void 0===e?null:e,o=n.disableWindowBlurListener,r=void 0!==o&&o,i=n.onClose,l=n.open,s=n.ref,u=n.resumeHideDuration,v=c.useRef();c.useEffect((function(){if(l)return document.addEventListener("keydown",n),function(){document.removeEventListener("keydown",n)};function n(n){n.defaultPrevented||"Escape"!==n.key&&"Esc"!==n.key||null==i||i(n,"escapeKeyDown")}}),[l,i]);var f=(0,d.Z)((function(n,e){null==i||i(n,e)})),p=(0,d.Z)((function(n){i&&null!=n&&(clearTimeout(v.current),v.current=setTimeout((function(){f(null,"timeout")}),n))}));c.useEffect((function(){return l&&p(t),function(){clearTimeout(v.current)}}),[l,t,p]);var m=function(){clearTimeout(v.current)},g=c.useCallback((function(){null!=t&&p(null!=u?u:.5*t)}),[t,u,p]),Z=function(n){return function(e){var t=n.onBlur;null==t||t(e),g()}},x=function(n){return function(e){var t=n.onFocus;null==t||t(e),m()}},C=function(n){return function(e){var t=n.onMouseEnter;null==t||t(e),m()}},w=function(n){return function(e){var t=n.onMouseLeave;null==t||t(e),g()}};return c.useEffect((function(){if(!r&&l)return window.addEventListener("focus",g),window.addEventListener("blur",m),function(){window.removeEventListener("focus",g),window.removeEventListener("blur",m)}}),[r,g,l]),{getRootProps:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,h.Z)(n),o=(0,a.Z)({},t,e);return(0,a.Z)({ref:s,role:"presentation"},o,{onBlur:Z(o),onFocus:x(o),onMouseEnter:C(o),onMouseLeave:w(o)})},onClickAway:function(n){null==i||i(n,"clickaway")}}}((0,a.Z)({},$,{ref:e})),Y=K.getRootProps,J=K.onClickAway,Q=c.useState(!0),U=(0,o.Z)(Q,2),nn=U[0],en=U[1],tn=(0,s.Z)({elementType:I,getSlotProps:Y,externalForwardedProps:G,ownerState:$,className:[q.root,L]});return!B&&nn?null:(0,f.jsx)(m,(0,a.Z)({onClickAway:J},M,{children:(0,f.jsx)(I,(0,a.Z)({},tn,{children:(0,f.jsx)(W,(0,a.Z)({appear:!0,in:B,timeout:D,direction:"top"===g?"down":"up",onEnter:function(n,e){en(!1),_&&_(n,e)},onExited:function(n){en(!0),V&&V(n)}},X,{children:E||(0,f.jsx)(z,(0,a.Z)({message:j,action:v},y))}))}))}))})),N=B}}]);
//# sourceMappingURL=436.c177ed21.chunk.js.map