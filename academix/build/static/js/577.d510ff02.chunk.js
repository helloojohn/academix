"use strict";(self.webpackChunkacademix=self.webpackChunkacademix||[]).push([[577],{133:function(t,e,a){a.d(e,{V:function(){return i}});var n=a(5878),o=a(1217);function i(t){return(0,o.Z)("MuiDivider",t)}var r=(0,n.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);e.Z=r},6014:function(t,e,a){a.d(e,{f:function(){return i}});var n=a(5878),o=a(1217);function i(t){return(0,o.Z)("MuiListItemIcon",t)}var r=(0,n.Z)("MuiListItemIcon",["root","alignItemsFlexStart"]);e.Z=r},9849:function(t,e,a){a.d(e,{L:function(){return i}});var n=a(5878),o=a(1217);function i(t){return(0,o.Z)("MuiListItemText",t)}var r=(0,n.Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]);e.Z=r},3786:function(t,e,a){a.d(e,{Z:function(){return S}});var n=a(4942),o=a(3366),i=a(7462),r=a(2791),s=a(8182),c=a(4419),l=a(2065),d=a(7630),u=a(1046),p=a(9480),v=a(3701),m=a(162),h=a(2071),g=a(133),b=a(6014),f=a(9849),Z=a(5878),y=a(1217);function x(t){return(0,y.Z)("MuiMenuItem",t)}var C=(0,Z.Z)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),w=a(184),k=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],M=(0,d.ZP)(v.Z,{shouldForwardProp:function(t){return(0,d.FO)(t)||"classes"===t},name:"MuiMenuItem",slot:"Root",overridesResolver:function(t,e){var a=t.ownerState;return[e.root,a.dense&&e.dense,a.divider&&e.divider,!a.disableGutters&&e.gutters]}})((function(t){var e,a=t.theme,o=t.ownerState;return(0,i.Z)({},a.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!o.disableGutters&&{paddingLeft:16,paddingRight:16},o.divider&&{borderBottom:"1px solid ".concat((a.vars||a).palette.divider),backgroundClip:"padding-box"},(e={"&:hover":{textDecoration:"none",backgroundColor:(a.vars||a).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},(0,n.Z)(e,"&.".concat(C.selected),(0,n.Z)({backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / ").concat(a.vars.palette.action.selectedOpacity,")"):(0,l.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity)},"&.".concat(C.focusVisible),{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.focusOpacity,"))"):(0,l.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)})),(0,n.Z)(e,"&.".concat(C.selected,":hover"),{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.hoverOpacity,"))"):(0,l.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / ").concat(a.vars.palette.action.selectedOpacity,")"):(0,l.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity)}}),(0,n.Z)(e,"&.".concat(C.focusVisible),{backgroundColor:(a.vars||a).palette.action.focus}),(0,n.Z)(e,"&.".concat(C.disabled),{opacity:(a.vars||a).palette.action.disabledOpacity}),(0,n.Z)(e,"& + .".concat(g.Z.root),{marginTop:a.spacing(1),marginBottom:a.spacing(1)}),(0,n.Z)(e,"& + .".concat(g.Z.inset),{marginLeft:52}),(0,n.Z)(e,"& .".concat(f.Z.root),{marginTop:0,marginBottom:0}),(0,n.Z)(e,"& .".concat(f.Z.inset),{paddingLeft:36}),(0,n.Z)(e,"& .".concat(b.Z.root),{minWidth:36}),e),!o.dense&&(0,n.Z)({},a.breakpoints.up("sm"),{minHeight:"auto"}),o.dense&&(0,i.Z)({minHeight:32,paddingTop:4,paddingBottom:4},a.typography.body2,(0,n.Z)({},"& .".concat(b.Z.root," svg"),{fontSize:"1.25rem"})))})),S=r.forwardRef((function(t,e){var a=(0,u.Z)({props:t,name:"MuiMenuItem"}),n=a.autoFocus,l=void 0!==n&&n,d=a.component,v=void 0===d?"li":d,g=a.dense,b=void 0!==g&&g,f=a.divider,Z=void 0!==f&&f,y=a.disableGutters,C=void 0!==y&&y,S=a.focusVisibleClassName,R=a.role,O=void 0===R?"menuitem":R,P=a.tabIndex,z=a.className,N=(0,o.Z)(a,k),L=r.useContext(p.Z),B=r.useMemo((function(){return{dense:b||L.dense||!1,disableGutters:C}}),[L.dense,b,C]),I=r.useRef(null);(0,m.Z)((function(){l&&I.current&&I.current.focus()}),[l]);var F,j=(0,i.Z)({},a,{dense:B.dense,divider:Z,disableGutters:C}),V=function(t){var e=t.disabled,a=t.dense,n=t.divider,o=t.disableGutters,r=t.selected,s=t.classes,l={root:["root",a&&"dense",e&&"disabled",!o&&"gutters",n&&"divider",r&&"selected"]},d=(0,c.Z)(l,x,s);return(0,i.Z)({},s,d)}(a),T=(0,h.Z)(I,e);return a.disabled||(F=void 0!==P?P:-1),(0,w.jsx)(p.Z.Provider,{value:B,children:(0,w.jsx)(M,(0,i.Z)({ref:T,role:O,tabIndex:F,component:v,focusVisibleClassName:(0,s.Z)(V.focusVisible,S),className:(0,s.Z)(V.root,z)},N,{ownerState:j,classes:V}))})}))},7246:function(t,e,a){a.d(e,{Z:function(){return W}});var n=a(7462),o=a(3366),i=a(2791),r=a(8182),s=a(4419),c=a(1046),l=a(5878),d=a(1217);function u(t){return(0,d.Z)("MuiPagination",t)}(0,l.Z)("MuiPagination",["root","ul","outlined","text"]);var p=a(3433),v=a(9439),m=a(8959),h=["boundaryCount","componentName","count","defaultPage","disabled","hideNextButton","hidePrevButton","onChange","page","showFirstButton","showLastButton","siblingCount"];var g=a(4942),b=a(2065);function f(t){return(0,d.Z)("MuiPaginationItem",t)}var Z=(0,l.Z)("MuiPaginationItem",["root","page","sizeSmall","sizeLarge","text","textPrimary","textSecondary","outlined","outlinedPrimary","outlinedSecondary","rounded","ellipsis","firstLast","previousNext","focusVisible","disabled","selected","icon"]),y=a(3967),x=a(3701),C=a(4036),w=a(9201),k=a(184),M=(0,w.Z)((0,k.jsx)("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),S=(0,w.Z)((0,k.jsx)("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage"),R=(0,w.Z)((0,k.jsx)("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore"),O=(0,w.Z)((0,k.jsx)("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext"),P=a(7630),z=["className","color","component","components","disabled","page","selected","shape","size","slots","type","variant"],N=function(t,e){var a=t.ownerState;return[e.root,e[a.variant],e["size".concat((0,C.Z)(a.size))],"text"===a.variant&&e["text".concat((0,C.Z)(a.color))],"outlined"===a.variant&&e["outlined".concat((0,C.Z)(a.color))],"rounded"===a.shape&&e.rounded,"page"===a.type&&e.page,("start-ellipsis"===a.type||"end-ellipsis"===a.type)&&e.ellipsis,("previous"===a.type||"next"===a.type)&&e.previousNext,("first"===a.type||"last"===a.type)&&e.firstLast]},L=(0,P.ZP)("div",{name:"MuiPaginationItem",slot:"Root",overridesResolver:N})((function(t){var e=t.theme,a=t.ownerState;return(0,n.Z)({},e.typography.body2,(0,g.Z)({borderRadius:16,textAlign:"center",boxSizing:"border-box",minWidth:32,padding:"0 6px",margin:"0 3px",color:(e.vars||e).palette.text.primary,height:"auto"},"&.".concat(Z.disabled),{opacity:(e.vars||e).palette.action.disabledOpacity}),"small"===a.size&&{minWidth:26,borderRadius:13,margin:"0 1px",padding:"0 4px"},"large"===a.size&&{minWidth:40,borderRadius:20,padding:"0 10px",fontSize:e.typography.pxToRem(15)})})),B=(0,P.ZP)(x.Z,{name:"MuiPaginationItem",slot:"Root",overridesResolver:N})((function(t){var e,a,o=t.theme,i=t.ownerState;return(0,n.Z)({},o.typography.body2,(a={borderRadius:16,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:(o.vars||o).palette.text.primary},(0,g.Z)(a,"&.".concat(Z.focusVisible),{backgroundColor:(o.vars||o).palette.action.focus}),(0,g.Z)(a,"&.".concat(Z.disabled),{opacity:(o.vars||o).palette.action.disabledOpacity}),(0,g.Z)(a,"transition",o.transitions.create(["color","background-color"],{duration:o.transitions.duration.short})),(0,g.Z)(a,"&:hover",{backgroundColor:(o.vars||o).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}),(0,g.Z)(a,"&.".concat(Z.selected),(e={backgroundColor:(o.vars||o).palette.action.selected,"&:hover":{backgroundColor:o.vars?"rgba(".concat(o.vars.palette.action.selected," / calc(").concat(o.vars.palette.action.selectedOpacity," + ").concat(o.vars.palette.action.hoverOpacity,"))"):(0,b.Fq)(o.palette.action.selected,o.palette.action.selectedOpacity+o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(o.vars||o).palette.action.selected}}},(0,g.Z)(e,"&.".concat(Z.focusVisible),{backgroundColor:o.vars?"rgba(".concat(o.vars.palette.action.selected," / calc(").concat(o.vars.palette.action.selectedOpacity," + ").concat(o.vars.palette.action.focusOpacity,"))"):(0,b.Fq)(o.palette.action.selected,o.palette.action.selectedOpacity+o.palette.action.focusOpacity)}),(0,g.Z)(e,"&.".concat(Z.disabled),{opacity:1,color:(o.vars||o).palette.action.disabled,backgroundColor:(o.vars||o).palette.action.selected}),e)),a),"small"===i.size&&{minWidth:26,height:26,borderRadius:13,margin:"0 1px",padding:"0 4px"},"large"===i.size&&{minWidth:40,height:40,borderRadius:20,padding:"0 10px",fontSize:o.typography.pxToRem(15)},"rounded"===i.shape&&{borderRadius:(o.vars||o).shape.borderRadius})}),(function(t){var e=t.theme,a=t.ownerState;return(0,n.Z)({},"text"===a.variant&&(0,g.Z)({},"&.".concat(Z.selected),(0,n.Z)({},"standard"!==a.color&&(0,g.Z)({color:(e.vars||e).palette[a.color].contrastText,backgroundColor:(e.vars||e).palette[a.color].main,"&:hover":{backgroundColor:(e.vars||e).palette[a.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[a.color].main}}},"&.".concat(Z.focusVisible),{backgroundColor:(e.vars||e).palette[a.color].dark}),(0,g.Z)({},"&.".concat(Z.disabled),{color:(e.vars||e).palette.action.disabled}))),"outlined"===a.variant&&(0,g.Z)({border:e.vars?"1px solid rgba(".concat(e.vars.palette.common.onBackgroundChannel," / 0.23)"):"1px solid ".concat("light"===e.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")},"&.".concat(Z.selected),(0,n.Z)({},"standard"!==a.color&&(0,g.Z)({color:(e.vars||e).palette[a.color].main,border:"1px solid ".concat(e.vars?"rgba(".concat(e.vars.palette[a.color].mainChannel," / 0.5)"):(0,b.Fq)(e.palette[a.color].main,.5)),backgroundColor:e.vars?"rgba(".concat(e.vars.palette[a.color].mainChannel," / ").concat(e.vars.palette.action.activatedOpacity,")"):(0,b.Fq)(e.palette[a.color].main,e.palette.action.activatedOpacity),"&:hover":{backgroundColor:e.vars?"rgba(".concat(e.vars.palette[a.color].mainChannel," / calc(").concat(e.vars.palette.action.activatedOpacity," + ").concat(e.vars.palette.action.focusOpacity,"))"):(0,b.Fq)(e.palette[a.color].main,e.palette.action.activatedOpacity+e.palette.action.focusOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(Z.focusVisible),{backgroundColor:e.vars?"rgba(".concat(e.vars.palette[a.color].mainChannel," / calc(").concat(e.vars.palette.action.activatedOpacity," + ").concat(e.vars.palette.action.focusOpacity,"))"):(0,b.Fq)(e.palette[a.color].main,e.palette.action.activatedOpacity+e.palette.action.focusOpacity)}),(0,g.Z)({},"&.".concat(Z.disabled),{borderColor:(e.vars||e).palette.action.disabledBackground,color:(e.vars||e).palette.action.disabled}))))})),I=(0,P.ZP)("div",{name:"MuiPaginationItem",slot:"Icon",overridesResolver:function(t,e){return e.icon}})((function(t){var e=t.theme,a=t.ownerState;return(0,n.Z)({fontSize:e.typography.pxToRem(20),margin:"0 -8px"},"small"===a.size&&{fontSize:e.typography.pxToRem(18)},"large"===a.size&&{fontSize:e.typography.pxToRem(22)})})),F=i.forwardRef((function(t,e){var a=(0,c.Z)({props:t,name:"MuiPaginationItem"}),i=a.className,l=a.color,d=void 0===l?"standard":l,u=a.component,p=a.components,v=void 0===p?{}:p,m=a.disabled,h=void 0!==m&&m,g=a.page,b=a.selected,Z=void 0!==b&&b,x=a.shape,w=void 0===x?"circular":x,P=a.size,N=void 0===P?"medium":P,F=a.slots,j=void 0===F?{}:F,V=a.type,T=void 0===V?"page":V,A=a.variant,q=void 0===A?"text":A,W=(0,o.Z)(a,z),G=(0,n.Z)({},a,{color:d,disabled:h,selected:Z,shape:w,size:N,type:T,variant:q}),D=(0,y.Z)(),H=function(t){var e=t.classes,a=t.color,n=t.disabled,o=t.selected,i=t.size,r=t.shape,c=t.type,l=t.variant,d={root:["root","size".concat((0,C.Z)(i)),l,r,"standard"!==a&&"".concat(l).concat((0,C.Z)(a)),n&&"disabled",o&&"selected",{page:"page",first:"firstLast",last:"firstLast","start-ellipsis":"ellipsis","end-ellipsis":"ellipsis",previous:"previousNext",next:"previousNext"}[c]],icon:["icon"]};return(0,s.Z)(d,f,e)}(G),X=("rtl"===D.direction?{previous:j.next||v.next||O,next:j.previous||v.previous||R,last:j.first||v.first||M,first:j.last||v.last||S}:{previous:j.previous||v.previous||R,next:j.next||v.next||O,first:j.first||v.first||M,last:j.last||v.last||S})[T];return"start-ellipsis"===T||"end-ellipsis"===T?(0,k.jsx)(L,{ref:e,ownerState:G,className:(0,r.Z)(H.root,i),children:"\u2026"}):(0,k.jsxs)(B,(0,n.Z)({ref:e,ownerState:G,component:u,disabled:h,className:(0,r.Z)(H.root,i)},W,{children:["page"===T&&g,X?(0,k.jsx)(I,{as:X,ownerState:G,className:H.icon}):null]}))})),j=["boundaryCount","className","color","count","defaultPage","disabled","getItemAriaLabel","hideNextButton","hidePrevButton","onChange","page","renderItem","shape","showFirstButton","showLastButton","siblingCount","size","variant"],V=(0,P.ZP)("nav",{name:"MuiPagination",slot:"Root",overridesResolver:function(t,e){var a=t.ownerState;return[e.root,e[a.variant]]}})({}),T=(0,P.ZP)("ul",{name:"MuiPagination",slot:"Ul",overridesResolver:function(t,e){return e.ul}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"});function A(t,e,a){return"page"===t?"".concat(a?"":"Go to ","page ").concat(e):"Go to ".concat(t," page")}var q=i.forwardRef((function(t,e){var a=(0,c.Z)({props:t,name:"MuiPagination"}),i=a.boundaryCount,l=void 0===i?1:i,d=a.className,g=a.color,b=void 0===g?"standard":g,f=a.count,Z=void 0===f?1:f,y=a.defaultPage,x=void 0===y?1:y,C=a.disabled,w=void 0!==C&&C,M=a.getItemAriaLabel,S=void 0===M?A:M,R=a.hideNextButton,O=void 0!==R&&R,P=a.hidePrevButton,z=void 0!==P&&P,N=a.renderItem,L=void 0===N?function(t){return(0,k.jsx)(F,(0,n.Z)({},t))}:N,B=a.shape,I=void 0===B?"circular":B,q=a.showFirstButton,W=void 0!==q&&q,G=a.showLastButton,D=void 0!==G&&G,H=a.siblingCount,X=void 0===H?1:H,U=a.size,_=void 0===U?"medium":U,E=a.variant,J=void 0===E?"text":E,K=(0,o.Z)(a,j),Q=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.boundaryCount,a=void 0===e?1:e,i=t.componentName,r=void 0===i?"usePagination":i,s=t.count,c=void 0===s?1:s,l=t.defaultPage,d=void 0===l?1:l,u=t.disabled,g=void 0!==u&&u,b=t.hideNextButton,f=void 0!==b&&b,Z=t.hidePrevButton,y=void 0!==Z&&Z,x=t.onChange,C=t.page,w=t.showFirstButton,k=void 0!==w&&w,M=t.showLastButton,S=void 0!==M&&M,R=t.siblingCount,O=void 0===R?1:R,P=(0,o.Z)(t,h),z=(0,m.Z)({controlled:C,default:d,name:r,state:"page"}),N=(0,v.Z)(z,2),L=N[0],B=N[1],I=function(t,e){C||B(e),x&&x(t,e)},F=function(t,e){var a=e-t+1;return Array.from({length:a},(function(e,a){return t+a}))},j=F(1,Math.min(a,c)),V=F(Math.max(c-a+1,a+1),c),T=Math.max(Math.min(L-O,c-a-2*O-1),a+2),A=Math.min(Math.max(L+O,a+2*O+2),V.length>0?V[0]-2:c-1),q=[].concat((0,p.Z)(k?["first"]:[]),(0,p.Z)(y?[]:["previous"]),(0,p.Z)(j),(0,p.Z)(T>a+2?["start-ellipsis"]:a+1<c-a?[a+1]:[]),(0,p.Z)(F(T,A)),(0,p.Z)(A<c-a-1?["end-ellipsis"]:c-a>a?[c-a]:[]),(0,p.Z)(V),(0,p.Z)(f?[]:["next"]),(0,p.Z)(S?["last"]:[])),W=function(t){switch(t){case"first":return 1;case"previous":return L-1;case"next":return L+1;case"last":return c;default:return null}},G=q.map((function(t){return"number"===typeof t?{onClick:function(e){I(e,t)},type:"page",page:t,selected:t===L,disabled:g,"aria-current":t===L?"true":void 0}:{onClick:function(e){I(e,W(t))},type:t,page:W(t),selected:!1,disabled:g||-1===t.indexOf("ellipsis")&&("next"===t||"last"===t?L>=c:L<=1)}}));return(0,n.Z)({items:G},P)}((0,n.Z)({},a,{componentName:"Pagination"})),Y=Q.items,$=(0,n.Z)({},a,{boundaryCount:l,color:b,count:Z,defaultPage:x,disabled:w,getItemAriaLabel:S,hideNextButton:O,hidePrevButton:z,renderItem:L,shape:I,showFirstButton:W,showLastButton:D,siblingCount:X,size:_,variant:J}),tt=function(t){var e=t.classes,a={root:["root",t.variant],ul:["ul"]};return(0,s.Z)(a,u,e)}($);return(0,k.jsx)(V,(0,n.Z)({"aria-label":"pagination navigation",className:(0,r.Z)(tt.root,d),ownerState:$,ref:e},K,{children:(0,k.jsx)(T,{className:tt.ul,ownerState:$,children:Y.map((function(t,e){return(0,k.jsx)("li",{children:L((0,n.Z)({},t,{color:b,"aria-label":S(t.type,t.page,t.selected),shape:I,size:_,variant:J}))},e)}))})}))})),W=q},7047:function(t,e,a){a.d(e,{Z:function(){return N}});var n=a(168),o=a(3366),i=a(7462),r=a(2791),s=a(8182),c=a(2554),l=a(4419);function d(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function u(t){return parseFloat(t)}var p=a(2065),v=a(7630),m=a(1046),h=a(5878),g=a(1217);function b(t){return(0,g.Z)("MuiSkeleton",t)}(0,h.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var f,Z,y,x,C,w,k,M,S=a(184),R=["animation","className","component","height","style","variant","width"],O=(0,c.F4)(C||(C=f||(f=(0,n.Z)(["\n  0% {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0.4;\n  }\n\n  100% {\n    opacity: 1;\n  }\n"])))),P=(0,c.F4)(w||(w=Z||(Z=(0,n.Z)(["\n  0% {\n    transform: translateX(-100%);\n  }\n\n  50% {\n    /* +0.5s of delay between each loop */\n    transform: translateX(100%);\n  }\n\n  100% {\n    transform: translateX(100%);\n  }\n"])))),z=(0,v.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:function(t,e){var a=t.ownerState;return[e.root,e[a.variant],!1!==a.animation&&e[a.animation],a.hasChildren&&e.withChildren,a.hasChildren&&!a.width&&e.fitContent,a.hasChildren&&!a.height&&e.heightAuto]}})((function(t){var e=t.theme,a=t.ownerState,n=d(e.shape.borderRadius)||"px",o=u(e.shape.borderRadius);return(0,i.Z)({display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:(0,p.Fq)(e.palette.text.primary,"light"===e.palette.mode?.11:.13),height:"1.2em"},"text"===a.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:"".concat(o).concat(n,"/").concat(Math.round(o/.6*10)/10).concat(n),"&:empty:before":{content:'"\\00a0"'}},"circular"===a.variant&&{borderRadius:"50%"},"rounded"===a.variant&&{borderRadius:(e.vars||e).shape.borderRadius},a.hasChildren&&{"& > *":{visibility:"hidden"}},a.hasChildren&&!a.width&&{maxWidth:"fit-content"},a.hasChildren&&!a.height&&{height:"auto"})}),(function(t){return"pulse"===t.ownerState.animation&&(0,c.iv)(k||(k=y||(y=(0,n.Z)(["\n      animation: "," 1.5s ease-in-out 0.5s infinite;\n    "]))),O)}),(function(t){var e=t.ownerState,a=t.theme;return"wave"===e.animation&&(0,c.iv)(M||(M=x||(x=(0,n.Z)(["\n      position: relative;\n      overflow: hidden;\n\n      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */\n      -webkit-mask-image: -webkit-radial-gradient(white, black);\n\n      &::after {\n        animation: "," 1.6s linear 0.5s infinite;\n        background: linear-gradient(\n          90deg,\n          transparent,\n          ",",\n          transparent\n        );\n        content: '';\n        position: absolute;\n        transform: translateX(-100%); /* Avoid flash during server-side hydration */\n        bottom: 0;\n        left: 0;\n        right: 0;\n        top: 0;\n      }\n    "]))),P,(a.vars||a).palette.action.hover)})),N=r.forwardRef((function(t,e){var a=(0,m.Z)({props:t,name:"MuiSkeleton"}),n=a.animation,r=void 0===n?"pulse":n,c=a.className,d=a.component,u=void 0===d?"span":d,p=a.height,v=a.style,h=a.variant,g=void 0===h?"text":h,f=a.width,Z=(0,o.Z)(a,R),y=(0,i.Z)({},a,{animation:r,component:u,variant:g,hasChildren:Boolean(Z.children)}),x=function(t){var e=t.classes,a=t.variant,n=t.animation,o=t.hasChildren,i=t.width,r=t.height,s={root:["root",a,n,o&&"withChildren",o&&!i&&"fitContent",o&&!r&&"heightAuto"]};return(0,l.Z)(s,b,e)}(y);return(0,S.jsx)(z,(0,i.Z)({as:u,ref:e,className:(0,s.Z)(x.root,c),ownerState:y},Z,{style:(0,i.Z)({width:f,height:p},v)}))}))}}]);
//# sourceMappingURL=577.d510ff02.chunk.js.map