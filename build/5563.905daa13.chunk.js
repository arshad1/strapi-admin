(self.webpackChunk_strapi_admin=self.webpackChunk_strapi_admin||[]).push([[5563],{30493:function(P,u,e){"use strict";e.d(u,{Z:function(){return s}});var t=e(32735),r=e(67879),n=e(60216),a=e.n(n),g=e(43383),i=e(66456),l=e(29439),h=e(82055),y=e(87933),A=e(41415),m=e(44647),x=e(67927);const p=({onRegenerate:T,idToRegenerate:D,backUrl:K,onError:U})=>{const{formatMessage:b}=(0,r.Z)(),[R,N]=(0,t.useState)(!1),{regenerateData:k,isLoadingConfirmation:H}=(0,x.rW)(K,D,T,U),Z=async()=>{k(),N(!1)};return t.createElement(t.Fragment,null,t.createElement(A.z,{startIcon:t.createElement(m.Z,null),type:"button",size:"S",variant:"tertiary",onClick:()=>N(!0),name:"regenerate"},b({id:"Settings.tokens.regenerate",defaultMessage:"Regenerate"})),t.createElement(g.QH,{bodyText:{id:"Settings.tokens.popUpWarning.message",defaultMessage:"Are you sure you want to regenerate this token?"},iconRightButton:t.createElement(m.Z,null),isConfirmButtonLoading:H,isOpen:R,onToggleDialog:()=>N(!1),onConfirm:Z,leftButtonText:{id:"Settings.tokens.Button.cancel",defaultMessage:"Cancel"},rightButtonText:{id:"Settings.tokens.Button.regenerate",defaultMessage:"Regenerate"},title:{id:"Settings.tokens.RegenerateDialog.title",defaultMessage:"Regenerate token"}}))};p.defaultProps={onRegenerate(){},onError:void 0},p.propTypes={onRegenerate:a().func,idToRegenerate:a().oneOfType([a().number,a().string]).isRequired,backUrl:a().string.isRequired,onError:a().func};var o=p;const d=({title:T,token:D,setToken:K,canEditInputs:U,canRegenerate:b,isSubmitting:R,backUrl:N,regenerateUrl:k,onErrorRegenerate:H})=>{const{formatMessage:Z}=(0,r.Z)(),G=X=>{K({...D,accessKey:X})};return t.createElement(h.T,{title:D?.name||Z(T),primaryAction:U?t.createElement(y.k,{gap:2},b&&D?.id&&t.createElement(o,{backUrl:k,onRegenerate:G,idToRegenerate:D?.id,onError:H}),t.createElement(A.z,{disabled:R,loading:R,startIcon:t.createElement(i.Z,null),type:"submit",size:"S"},Z({id:"global.save",defaultMessage:"Save"}))):b&&D?.id&&t.createElement(o,{onRegenerate:G,idToRegenerate:D?.id,backUrl:k}),navigationAction:t.createElement(g.rU,{startIcon:t.createElement(l.Z,null),to:N},Z({id:"global.back",defaultMessage:"Back"})),ellipsis:!0})};d.propTypes={token:a().shape({id:a().oneOfType([a().number,a().string]),type:a().string,lifespan:a().oneOfType([a().number,a().string]),name:a().string,accessKey:a().string,permissions:a().array,description:a().string,createdAt:a().string}),canEditInputs:a().bool.isRequired,canRegenerate:a().bool.isRequired,setToken:a().func.isRequired,isSubmitting:a().bool.isRequired,backUrl:a().string.isRequired,title:a().shape({id:a().string,label:a().string}).isRequired,regenerateUrl:a().string.isRequired,onErrorRegenerate:a().func},d.defaultProps={token:void 0,onErrorRegenerate:void 0};var s=d},4321:function(P,u,e){"use strict";var t=e(32735),r=e(60216),n=e.n(r),a=e(67879),g=e(80084),i=e(84967),l=e(49372),h=e(37944);const y=({token:A,errors:m,values:x,onChange:p,isCreating:o})=>{const{formatMessage:d}=(0,a.Z)();return t.createElement(t.Fragment,null,t.createElement(g.P,{name:"lifespan",label:d({id:"Settings.tokens.form.duration",defaultMessage:"Token duration"}),value:x.lifespan!==null?x.lifespan:"0",error:m.lifespan?d(m.lifespan?.id?m.lifespan:{id:m.lifespan,defaultMessage:m.lifespan}):null,onChange:s=>{p({target:{name:"lifespan",value:s}})},required:!0,disabled:!o,placeholder:"Select"},t.createElement(i.W,{value:"604800000"},d({id:"Settings.tokens.duration.7-days",defaultMessage:"7 days"})),t.createElement(i.W,{value:"2592000000"},d({id:"Settings.tokens.duration.30-days",defaultMessage:"30 days"})),t.createElement(i.W,{value:"7776000000"},d({id:"Settings.tokens.duration.90-days",defaultMessage:"90 days"})),t.createElement(i.W,{value:"0"},d({id:"Settings.tokens.duration.unlimited",defaultMessage:"Unlimited"}))),t.createElement(l.Z,{variant:"pi",textColor:"neutral600"},!o&&`${d({id:"Settings.tokens.duration.expiration-date",defaultMessage:"Expiration date"})}: ${(0,h.IX)(A?.createdAt,parseInt(x.lifespan,10))}`))};y.propTypes={errors:n().shape({lifespan:n().string}),onChange:n().func.isRequired,values:n().shape({lifespan:n().oneOfType([n().number,n().string])}).isRequired,isCreating:n().bool.isRequired,token:n().shape({id:n().oneOfType([n().number,n().string]),type:n().string,lifespan:n().string,name:n().string,accessKey:n().string,permissions:n().array,description:n().string,createdAt:n().string})},y.defaultProps={errors:{},token:{}},u.Z=y},93682:function(P,u,e){"use strict";var t=e(32735),r=e(67879),n=e(43383),a=e(50563),g=e(47765),i=e(11631),l=e(60216),h=e.n(l),y=e(59087),A=e.n(y);const m=({token:x,tokenType:p})=>{const{formatMessage:o}=(0,r.Z)(),d=(0,n.lm)(),{trackUsage:s}=(0,n.rS)(),T=(0,t.useRef)(s);return t.createElement(n.Y_,{endAction:x&&t.createElement("span",{style:{alignSelf:"start"}},t.createElement(y.CopyToClipboard,{onCopy:()=>{T.current("didCopyTokenKey",{tokenType:p}),d({type:"success",message:{id:"Settings.tokens.notification.copied"}})},text:x},t.createElement(a.h,{label:o({id:"app.component.CopyToClipboard.label",defaultMessage:"Copy to clipboard"}),noBorder:!0,icon:t.createElement(g.Z,null),style:{padding:0,height:"1rem"}}))),title:x||o({id:"Settings.tokens.copy.editTitle",defaultMessage:"This token isn\u2019t accessible anymore."}),subtitle:o(x?{id:"Settings.tokens.copy.lastWarning",defaultMessage:"Make sure to copy this token, you won\u2019t be able to see it again!"}:{id:"Settings.tokens.copy.editMessage",defaultMessage:"For security reasons, you can only see your token once."}),icon:t.createElement(i.Z,null),iconBackground:"neutral100"})};m.defaultProps={token:null},m.propTypes={token:h().string,tokenType:h().string.isRequired},u.Z=m},42789:function(P,u,e){"use strict";var t=e(32735),r=e(60216),n=e.n(r),a=e(67879),g=e(10508);const i=({errors:l,values:h,onChange:y,canEditInputs:A})=>{const{formatMessage:m}=(0,a.Z)();return t.createElement(g.g,{label:m({id:"Settings.tokens.form.description",defaultMessage:"Description"}),name:"description",error:l.description?m(l.description?.id?l.description:{id:l.description,defaultMessage:l.description}):null,onChange:y,disabled:!A},h.description)};i.propTypes={errors:n().shape({description:n().string}),onChange:n().func.isRequired,canEditInputs:n().bool.isRequired,values:n().shape({description:n().string}).isRequired},i.defaultProps={errors:{}},u.Z=i},8377:function(P,u,e){"use strict";var t=e(32735),r=e(60216),n=e.n(r),a=e(67879),g=e(10369);const i=({errors:l,values:h,onChange:y,canEditInputs:A})=>{const{formatMessage:m}=(0,a.Z)();return t.createElement(g.o,{name:"name",error:l.name?m(l.name?.id?l.name:{id:l.name,defaultMessage:l.name}):null,label:m({id:"Settings.tokens.form.name",defaultMessage:"Name"}),onChange:y,value:h.name,disabled:!A,required:!0})};i.propTypes={errors:n().shape({name:n().string}),onChange:n().func.isRequired,canEditInputs:n().bool.isRequired,values:n().shape({name:n().string}).isRequired},i.defaultProps={errors:{}},u.Z=i},49638:function(P,u,e){"use strict";var t=e(32735),r=e(60216),n=e.n(r),a=e(67879),g=e(80084),i=e(84967);const l=({name:h,errors:y,values:A,onChange:m,canEditInputs:x,options:p,label:o})=>{const{formatMessage:d}=(0,a.Z)();return t.createElement(g.P,{name:h,label:d({id:o.id,defaultMessage:o.defaultMessage}),value:A&&A[h],error:y[h]?d(y[h]?.id?y[h]:{id:y[h],defaultMessage:y[h]}):null,onChange:m,placeholder:"Select",required:!0,disabled:!x},p&&p.map(({value:s,label:T})=>t.createElement(i.W,{key:s,value:s},d(T))))};l.propTypes={name:n().string,options:n().arrayOf(n().shape({label:n().shape({id:n().string,defaultMessage:n().string}),value:n().string})),errors:n().shape({type:n().string}),onChange:n().func.isRequired,canEditInputs:n().bool.isRequired,values:n().shape({type:n().string}).isRequired,label:n().shape({id:n().string,defaultMessage:n().string}).isRequired},l.defaultProps={name:"type",errors:{},options:[]},u.Z=l},68774:function(P,u,e){"use strict";e.d(u,{Z:function(){return t},f:function(){return r}});const t="api-token",r="transfer-token"},35563:function(P,u,e){"use strict";e.d(u,{Z:function(){return _e}});var t=e(32735),r=e(67879),n=e(43383),a=e(27649),g=e(17e3),i=e(87933),l=e(92802),h=e(53038),y=e(20108),A=e(8997),m=e(37944),x=e(82055),p=e(41415),o=e(66456),d=e(60216),s=e.n(d);const T=({apiTokenName:c})=>{const{formatMessage:E}=(0,r.Z)();return(0,n.go)(),t.createElement(a.o,{"aria-busy":"true"},t.createElement(n.SL,{name:"API Tokens"}),t.createElement(x.T,{primaryAction:t.createElement(p.z,{disabled:!0,startIcon:t.createElement(o.Z,null),type:"button",size:"L"},E({id:"global.save",defaultMessage:"Save"})),title:c||E({id:"Settings.apiTokens.createPage.title",defaultMessage:"Create API Token"})}),t.createElement(g.D,null,t.createElement(n.dO,null)))};T.defaultProps={apiTokenName:null},T.propTypes={apiTokenName:s().string};var D=T,K=e(83983);const U=(0,t.createContext)({}),b=({children:c,...E})=>t.createElement(U.Provider,{value:E},c),R=()=>(0,t.useContext)(U);b.propTypes={children:s().node.isRequired};var k=(c,E=[])=>({...c,selectedAction:null,routes:[],selectedActions:[],data:(0,m.mk)(E)}),H=e(97889),Z=e(82879),G=e.n(Z);const X={data:{},selectedActions:[]};var J=(c,E)=>(0,H.ZP)(c,f=>{switch(E.type){case"ON_CHANGE":{f.selectedActions.includes(E.value)?G()(f.selectedActions,E.value):f.selectedActions.push(E.value);break}case"SELECT_ALL_IN_PERMISSION":{E.value.every(C=>f.selectedActions.includes(C.actionId))?E.value.forEach(C=>{G()(f.selectedActions,C.actionId)}):E.value.forEach(C=>{f.selectedActions.push(C.actionId)});break}case"SELECT_ALL_ACTIONS":{f.selectedActions=[...f.data.allActionsIds];break}case"ON_CHANGE_READ_ONLY":{const I=f.data.allActionsIds.filter(C=>C.includes("find")||C.includes("findOne"));f.selectedActions=[...I];break}case"UPDATE_PERMISSIONS_LAYOUT":{f.data=(0,m.mk)(E.value);break}case"UPDATE_ROUTES":{f.routes={...E.value};break}case"UPDATE_PERMISSIONS":{f.selectedActions=[...E.value];break}case"SET_SELECTED_ACTION":{f.selectedAction=E.value;break}default:return f}}),w=e(15335),V=e(5803),$=e(49372),z=e(72850),ce=e(73400),se=e.n(ce),ae=e(83828),oe=e(61762),Pe=e(89966),Te=e(8284),Ce=e(45112),re=e(8471);const Me=re.iv`
  background: ${c=>c.theme.colors.primary100};
  svg {
    opacity: 1;
  }
`;var Ae=(0,re.ZP)(z.x)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    opacity: 0;
    path {
      fill: ${c=>c.theme.colors.primary600};
    }
  }

  /* Show active style both on hover and when the action is selected */
  ${c=>c.isActive&&Me}
  &:hover {
    ${Me}
  }
`;const xe=re.ZP.div`
  flex: 1;
  align-self: center;
  border-top: 1px solid ${({theme:c})=>c.colors.neutral150};
`,pe=({controllers:c,label:E,orderNumber:f,disabled:I,onExpanded:C,indexExpandendCollapsedContent:v})=>{const{value:{onChangeSelectAll:j,onChange:Y,selectedActions:W,setSelectedAction:_,selectedAction:ee}}=R(),[F,le]=(0,t.useState)(!1),{formatMessage:te}=(0,r.Z)(),L=()=>{le(B=>!B),C(f)};(0,t.useEffect)(()=>{v!==null&&v!==f&&F&&le(!1)},[v,f,F]);const q=B=>B===ee;return t.createElement(ae.U,{expanded:F,onToggle:L,variant:f%2?"primary":"secondary"},t.createElement(oe.B,{title:se()(E)}),t.createElement(Pe.v,null,c?.map(B=>{const de=B.actions.every(O=>W.includes(O.actionId)),Ee=B.actions.some(O=>W.includes(O.actionId));return t.createElement(z.x,{key:`${E}.${B?.controller}`},t.createElement(i.k,{justifyContent:"space-between",alignItems:"center",padding:4},t.createElement(z.x,{paddingRight:4},t.createElement($.Z,{variant:"sigma",textColor:"neutral600"},B?.controller)),t.createElement(xe,null),t.createElement(z.x,{paddingLeft:4},t.createElement(Te.X,{value:de,indeterminate:!de&&Ee,onValueChange:()=>{j({target:{value:[...B.actions]}})},disabled:I},te({id:"app.utils.select-all",defaultMessage:"Select all"})))),t.createElement(w.r,{gap:4,padding:4},B?.actions&&B?.actions.map(O=>t.createElement(V.P,{col:6,key:O.actionId},t.createElement(Ae,{isActive:q(O.actionId),padding:2,hasRadius:!0},t.createElement(Te.X,{value:W.includes(O.actionId),name:O.actionId,onValueChange:()=>{Y({target:{value:O.actionId}})},disabled:I},O.action),t.createElement("button",{type:"button","data-testid":"action-cog",onClick:()=>_({target:{value:O.actionId}}),style:{display:"inline-flex",alignItems:"center"}},t.createElement(Ce.Z,null)))))))})))};pe.defaultProps={controllers:[],orderNumber:0,disabled:!1,onExpanded:()=>null,indexExpandendCollapsedContent:null},pe.propTypes={controllers:s().array,orderNumber:s().number,label:s().string.isRequired,disabled:s().bool,onExpanded:s().func,indexExpandendCollapsedContent:s().number};var Oe=pe;const ue=({section:c,...E})=>{const[f,I]=(0,t.useState)(null),C=v=>I(v);return t.createElement(z.x,{padding:4,background:"neutral0"},c&&c.map((v,j)=>t.createElement(Oe,{key:v.apiId,label:v.label,controllers:v.controllers,orderNumber:j,indexExpandendCollapsedContent:f,onExpanded:C,name:v.apiId,...E})))};ue.defaultProps={section:null},ue.propTypes={section:s().arrayOf(s().object)};var Re=ue,Ie=e(37213),De=e.n(Ie),ke=e(15738),Se=e.n(ke),Le=c=>{switch(c){case"POST":return{text:"success600",border:"success200",background:"success100"};case"GET":return{text:"secondary600",border:"secondary200",background:"secondary100"};case"PUT":return{text:"warning600",border:"warning200",background:"warning100"};case"DELETE":return{text:"danger600",border:"danger200",background:"danger100"};default:return{text:"neutral600",border:"neutral200",background:"neutral100"}}};const Be=(0,re.ZP)(z.x)`
  margin: -1px;
  border-radius: ${({theme:c})=>c.spaces[1]} 0 0 ${({theme:c})=>c.spaces[1]};
`;function ge({route:c}){const{formatMessage:E}=(0,r.Z)(),{method:f,handler:I,path:C}=c,v=C?Se()(C.split("/")):[],[j="",Y=""]=I?I.split("."):[],W=Le(c.method);return t.createElement(i.k,{direction:"column",alignItems:"stretch",gap:2},t.createElement($.Z,{variant:"delta",as:"h3"},E({id:"Settings.apiTokens.createPage.BoundRoute.title",defaultMessage:"Bound route to"}),"\xA0",t.createElement("span",null,j),t.createElement($.Z,{variant:"delta",textColor:"primary600"},".",Y)),t.createElement(i.k,{hasRadius:!0,background:"neutral0",borderColor:"neutral200",gap:0},t.createElement(Be,{background:W.background,borderColor:W.border,padding:2},t.createElement($.Z,{fontWeight:"bold",textColor:W.text},f)),t.createElement(z.x,{paddingLeft:2,paddingRight:2},De()(v,_=>t.createElement($.Z,{key:_,textColor:_.includes(":")?"neutral600":"neutral900"},"/",_)))))}ge.defaultProps={route:{handler:"Nocontroller.error",method:"GET",path:"/there-is-no-path"}},ge.propTypes={route:s().shape({handler:s().string,method:s().string,path:s().string})};var Ue=ge,be=()=>{const{value:{selectedAction:c,routes:E}}=R(),{formatMessage:f}=(0,r.Z)(),I=c?.split(".")[0];return t.createElement(V.P,{col:5,background:"neutral150",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,style:{minHeight:"100%"}},c?t.createElement(i.k,{direction:"column",alignItems:"stretch",gap:2},E[I]?.map(C=>C.config.auth?.scope?.includes(c)||C.handler===c?t.createElement(Ue,{key:C.handler,route:C}):null)):t.createElement(i.k,{direction:"column",alignItems:"stretch",gap:2},t.createElement($.Z,{variant:"delta",as:"h3"},f({id:"Settings.apiTokens.createPage.permissions.header.title",defaultMessage:"Advanced settings"})),t.createElement($.Z,{as:"p",textColor:"neutral600"},f({id:"Settings.apiTokens.createPage.permissions.header.hint",defaultMessage:"Select the application's actions or the plugin's actions and click on the cog icon to display the bound route"}))))};const Ze=({...c})=>{const{value:{data:E}}=R(),{formatMessage:f}=(0,r.Z)();return t.createElement(w.r,{gap:0,shadow:"filterShadow",hasRadius:!0,background:"neutral0"},t.createElement(V.P,{col:7,paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},t.createElement(i.k,{direction:"column",alignItems:"stretch",gap:2},t.createElement($.Z,{variant:"delta",as:"h2"},f({id:"Settings.apiTokens.createPage.permissions.title",defaultMessage:"Permissions"})),t.createElement($.Z,{as:"p",textColor:"neutral600"},f({id:"Settings.apiTokens.createPage.permissions.description",defaultMessage:"Only actions bound by a route are listed below."}))),E?.permissions&&t.createElement(Re,{section:E?.permissions,...c})),t.createElement(be,null))};var We=(0,t.memo)(Ze),Ke=e(4321),Ne=e(8377),$e=e(42789),je=e(49638);const me=({errors:c,onChange:E,canEditInputs:f,isCreating:I,values:C,apiToken:v,onDispatch:j,setHasChangedPermissions:Y})=>{const{formatMessage:W}=(0,r.Z)(),_=({target:{value:F}})=>{Y(!1),F==="full-access"&&j({type:"SELECT_ALL_ACTIONS"}),F==="read-only"&&j({type:"ON_CHANGE_READ_ONLY"})},ee=[{value:"read-only",label:{id:"Settings.tokens.types.read-only",defaultMessage:"Read-only"}},{value:"full-access",label:{id:"Settings.tokens.types.full-access",defaultMessage:"Full access"}},{value:"custom",label:{id:"Settings.tokens.types.custom",defaultMessage:"Custom"}}];return t.createElement(z.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},t.createElement(i.k,{direction:"column",alignItems:"stretch",gap:4},t.createElement($.Z,{variant:"delta",as:"h2"},W({id:"global.details",defaultMessage:"Details"})),t.createElement(w.r,{gap:5},t.createElement(V.P,{key:"name",col:6,xs:12},t.createElement(Ne.Z,{errors:c,values:C,canEditInputs:f,onChange:E})),t.createElement(V.P,{key:"description",col:6,xs:12},t.createElement($e.Z,{errors:c,values:C,canEditInputs:f,onChange:E})),t.createElement(V.P,{key:"lifespan",col:6,xs:12},t.createElement(Ke.Z,{isCreating:I,errors:c,values:C,onChange:E,token:v})),t.createElement(V.P,{key:"type",col:6,xs:12},t.createElement(je.Z,{values:C,errors:c,label:{id:"Settings.tokens.form.type",defaultMessage:"Token type"},onChange:F=>{_({target:{value:F}}),E({target:{name:"type",value:F}})},options:ee,canEditInputs:f})))))};me.propTypes={errors:s().shape({name:s().string,description:s().string,lifespan:s().string,type:s().string}),onChange:s().func.isRequired,canEditInputs:s().bool.isRequired,values:s().shape({name:s().string,description:s().string,lifespan:s().oneOfType([s().number,s().string]),type:s().string}).isRequired,isCreating:s().bool.isRequired,apiToken:s().shape({id:s().oneOfType([s().number,s().string]),type:s().string,lifespan:s().string,name:s().string,accessKey:s().string,permissions:s().array,description:s().string,createdAt:s().string}),onDispatch:s().func.isRequired,setHasChangedPermissions:s().func.isRequired},me.defaultProps={errors:{},apiToken:{}};var Fe=me,ze=e(93682),He=e(30493),ie=e(68774);const Ve="Name already taken";var _e=()=>{(0,n.go)();const{formatMessage:c}=(0,r.Z)(),{lockApp:E,unlockApp:f}=(0,n.o1)(),I=(0,n.lm)(),C=(0,h.k6)(),[v,j]=(0,t.useState)(C.location.state?.apiToken.accessKey?{...C.location.state.apiToken}:null),{trackUsage:Y}=(0,n.rS)(),W=(0,t.useRef)(Y),{setCurrentStep:_}=(0,n.c1)(),{allowedActions:{canCreate:ee,canUpdate:F,canRegenerate:le}}=(0,n.ss)(K.Z.settings["api-tokens"]),[te,L]=(0,t.useReducer)(J,X,M=>k(M,{})),{params:{id:q}}=(0,h.$B)("/settings/api-tokens/:id"),{get:B,post:de,put:Ee}=(0,n.kY)(),O=q==="create";(0,y.useQuery)("content-api-permissions",async()=>{const[M,Q]=await Promise.all(["/admin/content-api/permissions","/admin/content-api/routes"].map(async ne=>{const{data:S}=await B(ne);return S.data}));L({type:"UPDATE_PERMISSIONS_LAYOUT",value:M}),L({type:"UPDATE_ROUTES",value:Q}),v&&(v?.type==="read-only"&&L({type:"ON_CHANGE_READ_ONLY"}),v?.type==="full-access"&&L({type:"SELECT_ALL_ACTIONS"}),v?.type==="custom"&&L({type:"UPDATE_PERMISSIONS",value:v?.permissions}))},{onError(){I({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),(0,t.useEffect)(()=>{W.current(O?"didAddTokenFromList":"didEditTokenFromList",{tokenType:ie.Z})},[O]);const{status:Ge}=(0,y.useQuery)(["api-token",q],async()=>{const{data:{data:M}}=await B(`/admin/api-tokens/${q}`);return j({...M}),M?.type==="read-only"&&L({type:"ON_CHANGE_READ_ONLY"}),M?.type==="full-access"&&L({type:"SELECT_ALL_ACTIONS"}),M?.type==="custom"&&L({type:"UPDATE_PERMISSIONS",value:M?.permissions}),M},{enabled:!O&&!v,onError(){I({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),Ye=async(M,Q)=>{W.current(O?"willCreateToken":"willEditToken",{tokenType:ie.Z}),E();const ne=M.lifespan&&parseInt(M.lifespan,10)&&M.lifespan!=="0"?parseInt(M.lifespan,10):null;try{const{data:{data:S}}=O?await de("/admin/api-tokens",{...M,lifespan:ne,permissions:M.type==="custom"?te.selectedActions:null}):await Ee(`/admin/api-tokens/${q}`,{name:M.name,description:M.description,type:M.type,permissions:M.type==="custom"?te.selectedActions:null});O&&(C.replace(`/settings/api-tokens/${S.id}`,{apiToken:S}),_("apiTokens.success")),f(),j({...S}),I({type:"success",message:c(O?{id:"notification.success.apitokencreated",defaultMessage:"API Token successfully created"}:{id:"notification.success.apitokenedited",defaultMessage:"API Token successfully edited"})}),W.current(O?"didCreateToken":"didEditToken",{type:v.type,tokenType:ie.Z})}catch(S){const he=(0,A.Iz)(S.response.data);Q.setErrors(he),S?.response?.data?.error?.message===Ve?I({type:"warning",message:S.response.data.message||"notification.error.tokennamenotunique"}):I({type:"warning",message:S?.response?.data?.message||"notification.error"}),f()}},[Qe,fe]=(0,t.useState)(!1),Xe={...te,onChange:({target:{value:M}})=>{fe(!0),L({type:"ON_CHANGE",value:M})},onChangeSelectAll:({target:{value:M}})=>{fe(!0),L({type:"SELECT_ALL_IN_PERMISSION",value:M})},setSelectedAction:({target:{value:M}})=>{L({type:"SET_SELECTED_ACTION",value:M})}},ye=F&&!O||ee&&O;return!O&&!v&&Ge!=="success"?t.createElement(D,{apiTokenName:v?.name}):t.createElement(b,{value:Xe},t.createElement(a.o,null,t.createElement(n.SL,{name:"API Tokens"}),t.createElement(l.J9,{validationSchema:m.fK,validateOnChange:!1,initialValues:{name:v?.name||"",description:v?.description||"",type:v?.type,lifespan:v?.lifespan?v.lifespan.toString():v?.lifespan},enableReinitialize:!0,onSubmit:(M,Q)=>Ye(M,Q)},({errors:M,handleChange:Q,isSubmitting:ne,values:S,setFieldValue:he})=>(Qe&&S?.type!=="custom"&&he("type","custom"),t.createElement(n.l0,null,t.createElement(He.Z,{backUrl:"/settings/api-tokens",title:{id:"Settings.apiTokens.createPage.title",defaultMessage:"Create API Token"},token:v,setToken:j,canEditInputs:ye,canRegenerate:le,isSubmitting:ne,regenerateUrl:"/admin/api-tokens/"}),t.createElement(g.D,null,t.createElement(i.k,{direction:"column",alignItems:"stretch",gap:6},Boolean(v?.name)&&t.createElement(ze.Z,{token:v?.accessKey,tokenType:ie.Z}),t.createElement(Fe,{errors:M,onChange:Q,canEditInputs:ye,isCreating:O,values:S,apiToken:v,onDispatch:L,setHasChangedPermissions:fe}),t.createElement(We,{disabled:!ye||S?.type==="read-only"||S?.type==="full-access"}))))))))}},37944:function(P,u,e){"use strict";e.d(u,{IX:function(){return g},fK:function(){return y},mk:function(){return m}});var t=e(14723),r=e(85544),n=e(76698),g=(x,p,o="en")=>{if(p&&typeof p=="number"){const d=p/24/60/60/1e3;return(0,t.Z)((0,r.Z)(new Date(x),d),"PPP",{locale:n[o]})}return"Unlimited"},i=e(24346),l=e(43383),y=i.Ry().shape({name:i.Z_(l.I0.string).max(100).required(l.I0.required),type:i.Z_(l.I0.string).oneOf(["read-only","full-access","custom"]).required(l.I0.required),description:i.Z_().nullable(),lifespan:i.Rx().integer().min(0).nullable().defined(l.I0.required)}),m=x=>{const p={allActionsIds:[],permissions:[]};return p.permissions=Object.keys(x).map(o=>({apiId:o,label:o.split("::")[1],controllers:Object.keys(x[o].controllers).map(d=>({controller:d,actions:x[o].controllers[d].map(s=>{const T=`${o}.${d}.${s}`;return o.includes("api::")&&p.allActionsIds.push(T),{action:s,actionId:T}}).flat()})).flat()})),p}},60528:function(P){function u(e,t,r,n){for(var a=e.length,g=r+(n?1:-1);n?g--:++g<a;)if(t(e[g],g,e))return g;return-1}P.exports=u},87650:function(P,u,e){var t=e(60528),r=e(25556),n=e(54256);function a(g,i,l){return i===i?n(g,i,l):t(g,r,l)}P.exports=a},15880:function(P){function u(e,t,r,n){for(var a=r-1,g=e.length;++a<g;)if(n(e[a],t))return a;return-1}P.exports=u},25556:function(P){function u(e){return e!==e}P.exports=u},11224:function(P,u,e){var t=e(26460),r=e(87650),n=e(15880),a=e(76535),g=e(66438),i=Array.prototype,l=i.splice;function h(y,A,m,x){var p=x?n:r,o=-1,d=A.length,s=y;for(y===A&&(A=g(A)),m&&(s=t(y,a(m)));++o<d;)for(var T=0,D=A[o],K=m?m(D):D;(T=p(s,K,T,x))>-1;)s!==y&&l.call(s,T,1),l.call(y,T,1);return y}P.exports=h},54256:function(P){function u(e,t,r){for(var n=r-1,a=e.length;++n<a;)if(e[n]===t)return n;return-1}P.exports=u},82879:function(P,u,e){var t=e(94569),r=e(83147),n=t(r);P.exports=n},83147:function(P,u,e){var t=e(11224);function r(n,a){return n&&n.length&&a&&a.length?t(n,a):n}P.exports=r},15738:function(P,u,e){var t=e(4293);function r(n){var a=n==null?0:n.length;return a?t(n,1,a):[]}P.exports=r},83828:function(P,u,e){"use strict";e.d(u,{U:function(){return x},y:function(){return A}});var t=e(74512),r=e(32735),n=e(8471),a=e(91045),g=e(72850),i=e(87933),l=e(74971),h=e(49372);const y=({theme:p,expanded:o,variant:d,disabled:s,error:T})=>T?`1px solid ${p.colors.danger600} !important`:s?`1px solid ${p.colors.neutral150}`:o?`1px solid ${p.colors.primary600}`:d==="primary"?`1px solid ${p.colors.neutral0}`:`1px solid ${p.colors.neutral100}`,A=(0,n.ZP)(h.Z)``,m=(0,n.ZP)(g.x)`
  border: ${y};

  &:hover:not([aria-disabled='true']) {
    border: 1px solid ${({theme:p})=>p.colors.primary600};

    ${A} {
      color: ${({theme:p,expanded:o})=>o?void 0:p.colors.primary700};
    }

    ${h.Z} {
      color: ${({theme:p,expanded:o})=>o?void 0:p.colors.primary600};
    }

    & > ${i.k} {
      background: ${({theme:p})=>p.colors.primary100};
    }

    [data-strapi-dropdown='true'] {
      background: ${({theme:p})=>p.colors.primary200};
    }
  }
`,x=({children:p,disabled:o=!1,error:d,expanded:s=!1,hasErrorMessage:T=!0,id:D,onToggle:K,toggle:U,size:b="M",variant:R="primary",shadow:N})=>{const k=(0,l.M)(D),H=r.useMemo(()=>({expanded:s,onToggle:K,toggle:U,id:k,size:b,variant:R,disabled:o}),[o,s,k,K,b,U,R]);return(0,t.jsxs)(a.S.Provider,{value:H,children:[(0,t.jsx)(m,{"data-strapi-expanded":s,disabled:o,"aria-disabled":o,expanded:s,hasRadius:!0,variant:R,error:d,shadow:N,children:p}),d&&T&&(0,t.jsx)(g.x,{paddingTop:1,children:(0,t.jsx)(h.Z,{variant:"pi",textColor:"danger600",children:d})})]})}},89966:function(P,u,e){"use strict";e.d(u,{v:function(){return a}});var t=e(74512),r=e(91045),n=e(72850);const a=({children:g,...i})=>{const{expanded:l,id:h}=(0,r.A)();if(!l)return null;const y=`accordion-content-${h}`,A=`accordion-label-${h}`,m=`accordion-desc-${h}`;return(0,t.jsx)(n.x,{role:"region",id:y,"aria-labelledby":A,"aria-describedby":m,...i,children:g})}},91045:function(P,u,e){"use strict";e.d(u,{A:function(){return n},S:function(){return r}});var t=e(32735);const r=(0,t.createContext)({disabled:!1,expanded:!1,id:"",size:"M",variant:"primary"}),n=()=>(0,t.useContext)(r)},61762:function(P,u,e){"use strict";e.d(u,{B:function(){return p}});var t=e(74512),r=e(16899),n=e(8471),a=e(83828),g=e(91045);const i=({expanded:o,disabled:d,variant:s})=>{let T="neutral100";return o?T="primary100":d?T="neutral150":s==="primary"&&(T="neutral0"),T};var l=e(87933),h=e(99140),y=e(7563),A=e(49372);const m=(0,n.ZP)(y.A)`
  text-align: left;

  // necessary to make the ellipsis prop work on the title
  > span {
    max-width: 100%;
  }

  svg {
    width: ${14/16}rem;
    height: ${14/16}rem;

    path {
      fill: ${({theme:o,expanded:d})=>d?o.colors.primary600:o.colors.neutral500};
    }
  }
`,x=(0,n.ZP)(l.k)`
  min-height: ${({theme:o,size:d})=>o.sizes.accordions[d]};
  border-radius: ${({theme:o,expanded:d})=>d?`${o.borderRadius} ${o.borderRadius} 0 0`:o.borderRadius};

  &:hover {
    svg {
      path {
        fill: ${({theme:o})=>o.colors.primary600};
      }
    }
  }
`,p=({title:o,description:d,as:s="span",togglePosition:T="right",action:D,...K})=>{const{onToggle:U,toggle:b,expanded:R,id:N,size:k,variant:H,disabled:Z}=(0,g.A)(),G=`accordion-content-${N}`,X=`accordion-label-${N}`,ve=`accordion-desc-${N}`,J=k==="M"?6:4,w=k==="M"?J:J-2,V=i({expanded:R,disabled:Z,variant:H}),$={as:s,fontWeight:k==="S"?"bold":void 0,id:X,textColor:R?"primary600":"neutral700",ellipsis:!0,variant:k==="M"?"delta":void 0},z=R?"primary600":"neutral600",ce=R?"primary200":"neutral200",se=k==="M"?`${32/16}rem`:`${24/16}rem`,ae=()=>{Z||(b&&!U?(console.warn('Deprecation warning: Usage of "toggle" prop in Accordion component is deprecated. This is discouraged and will be removed in the next major release. Please use "onToggle" instead'),b()):U&&U())},oe=(0,t.jsx)(l.k,{justifyContent:"center",borderRadius:"50%",height:se,width:se,transform:R?"rotate(180deg)":void 0,"data-strapi-dropdown":!0,"aria-hidden":!0,as:"span",background:ce,cursor:Z?"not-allowed":"pointer",onClick:ae,shrink:0,children:(0,t.jsx)(h.J,{as:r.Z,width:k==="M"?`${11/16}rem`:`${8/16}rem`,color:R?"primary600":"neutral600"})});return(0,t.jsx)(x,{paddingBottom:w,paddingLeft:J,paddingRight:J,paddingTop:w,background:V,expanded:R,size:k,justifyContent:"space-between",cursor:Z?"not-allowed":"",children:(0,t.jsxs)(l.k,{gap:3,flex:1,maxWidth:"100%",children:[T==="left"&&oe,(0,t.jsx)(m,{onClick:ae,"aria-disabled":Z,"aria-expanded":R,"aria-controls":G,"aria-labelledby":X,"data-strapi-accordion-toggle":!0,expanded:R,type:"button",flex:1,minWidth:0,...K,children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.y,{...$,children:o}),d&&(0,t.jsx)(A.Z,{as:"p",id:ve,textColor:z,children:d})]})}),T==="right"&&(0,t.jsxs)(l.k,{gap:3,children:[oe,D]}),T==="left"&&D]})})}}}]);
