"use strict";(self.webpackChunk_strapi_admin=self.webpackChunk_strapi_admin||[]).push([[4263],{40874:function(T,l,e){e.r(l),e.d(l,{default:function(){return ne}});var t=e(32735),a=e(43383),s=e(53038),d=e(83983),i=e(20011),u=e(67879),n=e(60216),g=e.n(n),m=e(88423),c=e.n(m),E=e(33795),f=e.n(E),R=e(9086),Z=e.n(R),U=e(20108),A=e(92802),O=e(27649),S=e(82055),x=e(41415),z=e(17e3),W=e(72850),h=e(87933),$=e(49372),b=e(15335),j=e(5803),w=e(66456),N=e(29439),M=e(8997);const J=async y=>{const{get:P}=(0,a.tg)(),{data:o}=await P(`/admin/users/${y}`);return o.data},k=async(y,P)=>{const{put:o}=(0,a.tg)(),{data:v}=await o(`/admin/users/${y}`,P);return v.data};var q=[[{intlLabel:{id:"Auth.form.firstname.label",defaultMessage:"First name"},name:"firstname",placeholder:{id:"Auth.form.firstname.placeholder",defaultMessage:"e.g. Kai"},type:"text",size:{col:6,xs:12},required:!0},{intlLabel:{id:"Auth.form.lastname.label",defaultMessage:"Last name"},name:"lastname",placeholder:{id:"Auth.form.lastname.placeholder",defaultMessage:"e.g. Doe"},type:"text",size:{col:6,xs:12}}],[{intlLabel:{id:"Auth.form.email.label",defaultMessage:"Email"},name:"email",placeholder:{id:"Auth.form.email.placeholder",defaultMessage:"e.g. kai.doe@strapi.io"},type:"email",size:{col:6,xs:12},required:!0},{intlLabel:{id:"Auth.form.username.label",defaultMessage:"Username"},name:"username",placeholder:{id:"Auth.form.username.placeholder",defaultMessage:"e.g. Kai_Doe"},type:"text",size:{col:6,xs:12}}],[{intlLabel:{id:"global.password",defaultMessage:"Password"},name:"password",type:"password",size:{col:6,xs:12},autoComplete:"new-password"},{intlLabel:{id:"Auth.form.confirmPassword.label",defaultMessage:"Password confirmation"},name:"confirmPassword",type:"password",size:{col:6,xs:12},autoComplete:"new-password"}],[{intlLabel:{id:"Auth.form.active.label",defaultMessage:"Active"},name:"isActive",type:"bool",size:{col:6,xs:12}}]],ee=e(1057),te=e(4397);const ae=(()=>window&&window.strapi&&window.strapi.isEE?e(28890).Z:e(16325).Z)(),Q=["email","firstname","lastname","username","isActive","roles"],G=y=>{let{canUpdate:P}=y;const{formatMessage:o}=(0,u.Z)(),{params:{id:v}}=(0,s.$B)("/settings/users/:id"),{push:C}=(0,s.k6)(),{setUserDisplayName:Y}=(0,a.QI)(),_=(0,a.lm)(),{lockApp:oe,unlockApp:re}=(0,a.o1)();(0,a.go)();const{status:le,data:K}=(0,U.useQuery)(["user",v],()=>J(v),{retry:!1,onError(r){r.response.status===403&&(_({type:"info",message:{id:"notification.permission.not-allowed-read",defaultMessage:"You are not allowed to see this document"}}),C("/")),console.log(r.response.status)}}),ie=async(r,p)=>{oe();try{const L=await k(v,Z()(r,"confirmPassword"));_({type:"success",message:o({id:"notification.success.saved",defaultMessage:"Saved"})});const D=a.I8.getUserInfo();if(v.toString()===D.id.toString()){a.I8.setUserInfo(L);const B=f()(r,"username")||(0,M.Pp)(r.firstname,r.lastname);Y(B)}p.setValues(c()(r,Q))}catch(L){const D=(0,M.Iz)(L.response.data),B=Object.keys(D).reduce((H,I)=>(H[I]=D[I].id,H),{});p.setErrors(B),_({type:"warning",message:f()(L,"response.data.error.message","notification.error")})}re()},V=le!=="success",de=V?{id:"app.containers.Users.EditPage.header.label-loading",defaultMessage:"Edit user"}:{id:"app.containers.Users.EditPage.header.label",defaultMessage:"Edit {name}"},F=Object.keys(c()(K,Q)).reduce((r,p)=>p==="roles"?(r[p]=(K?.roles||[]).map(L=>{let{id:D}=L;return D}),r):(r[p]=K?.[p],r),{}),ce=F.username||(0,M.Pp)(F.firstname,F.lastname),X=o(de,{name:ce});return V?t.createElement(O.o,{"aria-busy":"true"},t.createElement(a.SL,{name:"Users"}),t.createElement(S.T,{primaryAction:t.createElement(x.z,{disabled:!0,startIcon:t.createElement(w.Z,null),type:"button",size:"L"},o({id:"global.save",defaultMessage:"Save"})),title:X,navigationAction:t.createElement(a.rU,{startIcon:t.createElement(N.Z,null),to:"/settings/users?pageSize=10&page=1&sort=firstname"},o({id:"global.back",defaultMessage:"Back"}))}),t.createElement(z.D,null,t.createElement(a.dO,null))):t.createElement(O.o,null,t.createElement(a.SL,{name:"Users"}),t.createElement(A.J9,{onSubmit:ie,initialValues:F,validateOnChange:!1,validationSchema:ee.YM},r=>{let{errors:p,values:L,handleChange:D,isSubmitting:B}=r;return t.createElement(a.l0,null,t.createElement(S.T,{primaryAction:t.createElement(x.z,{disabled:B||!P,startIcon:t.createElement(w.Z,null),loading:B,type:"submit",size:"L"},o({id:"global.save",defaultMessage:"Save"})),title:X,navigationAction:t.createElement(a.rU,{startIcon:t.createElement(N.Z,null),to:"/settings/users?pageSize=10&page=1&sort=firstname"},o({id:"global.back",defaultMessage:"Back"}))}),t.createElement(z.D,null,K?.registrationToken&&t.createElement(W.x,{paddingBottom:6},t.createElement(ae,{registrationToken:K.registrationToken})),t.createElement(h.k,{direction:"column",alignItems:"stretch",gap:7},t.createElement(W.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},t.createElement(h.k,{direction:"column",alignItems:"stretch",gap:4},t.createElement($.Z,{variant:"delta",as:"h2"},o({id:"app.components.Users.ModalCreateBody.block-title.details",defaultMessage:"Details"})),t.createElement(b.r,{gap:5},q.map(H=>H.map(I=>t.createElement(j.P,(0,i.Z)({key:I.name},I.size),t.createElement(a.jm,(0,i.Z)({},I,{disabled:!P,error:p[I.name],onChange:D,value:L[I.name]||""})))))))),t.createElement(W.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},t.createElement(h.k,{direction:"column",alignItems:"stretch",gap:4},t.createElement($.Z,{variant:"delta",as:"h2"},o({id:"global.roles",defaultMessage:"User's role"})),t.createElement(b.r,{gap:5},t.createElement(j.P,{col:6,xs:12},t.createElement(te.Z,{disabled:!P,error:p.roles,onChange:D,value:L.roles}))))))))}))};G.propTypes={canUpdate:g().bool.isRequired};var se=G,ne=()=>{const y=(0,a.lm)(),P=(0,t.useMemo)(()=>({read:d.Z.settings.users.read,update:d.Z.settings.users.update}),[]),{isLoading:o,allowedActions:{canRead:v,canUpdate:C}}=(0,a.ss)(P),{state:Y}=(0,s.TH)(),_=Y?.from??"/";return(0,t.useEffect)(()=>{o||!v&&!C&&y({type:"info",message:{id:"notification.permission.not-allowed-read",defaultMessage:"You are not allowed to see this document"}})},[o,v,C,y]),o?t.createElement(a.dO,null):!v&&!C?t.createElement(s.l_,{to:_}):t.createElement(se,{canUpdate:C})}},76779:function(T,l,e){var t=e(32735),a=e(60216),s=e.n(a),d=e(50563),i=e(43383),u=e(47765),n=e(59087),g=e.n(n),m=e(67879);const c=({children:E,target:f})=>{const R=(0,i.lm)(),{formatMessage:Z}=(0,m.Z)(),U=()=>{R({type:"info",message:{id:"notification.link-copied"}})},A=Z({id:"app.component.CopyToClipboard.label",defaultMessage:"Copy to clipboard"});return t.createElement(i.Y_,{endAction:t.createElement(n.CopyToClipboard,{onCopy:U,text:f},t.createElement(d.h,{label:A,noBorder:!0,icon:t.createElement(u.Z,null)})),title:f,titleEllipsis:!0,subtitle:E,icon:t.createElement("span",{style:{fontSize:32}},"\u2709\uFE0F"),iconBackground:"neutral100"})};c.propTypes={children:s().oneOfType([s().element,s().string]).isRequired,target:s().string.isRequired},l.Z=c},16325:function(T,l,e){var t=e(32735),a=e(67879),s=e(60216),d=e.n(s),i=e(78246),u=e(76779);const n=({registrationToken:g})=>{const{formatMessage:m}=(0,a.Z)(),c=`${window.location.origin}${i.Z}auth/register?registrationToken=${g}`;return t.createElement(u.Z,{target:c},m({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"}))};n.defaultProps={registrationToken:""},n.propTypes={registrationToken:d().string},l.Z=n},4397:function(T,l,e){var t=e(32735),a=e(60216),s=e.n(a),d=e(67879),i=e(80084),u=e(84967),n=e(20108),g=e(8471),m=e(27169),c=e(43383);const E=g.F4`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,f=g.ZP.div`
  animation: ${E} 2s infinite linear;
`,R=()=>t.createElement(f,null,t.createElement(m.Z,null)),Z=async()=>{const{get:A}=(0,c.tg)(),{data:O}=await A("/admin/roles");return O.data},U=({disabled:A,error:O,onChange:S,value:x})=>{const{status:z,data:W}=(0,n.useQuery)(["roles"],Z,{staleTime:5e4}),{formatMessage:h}=(0,d.Z)(),$=O?h({id:O,defaultMessage:O}):"",b=h({id:"app.components.Users.ModalCreateBody.block-title.roles",defaultMessage:"User's roles"}),j=h({id:"app.components.Users.ModalCreateBody.block-title.roles.description",defaultMessage:"A user can have one or several roles"}),w=h({id:"app.components.Select.placeholder",defaultMessage:"Select"}),N=z==="loading"?t.createElement(R,null):void 0;return t.createElement(i.P,{id:"roles",disabled:A,error:$,hint:j,label:b,name:"roles",onChange:M=>{S({target:{name:"roles",value:M}})},placeholder:w,multi:!0,startIcon:N,value:x,withTags:!0,required:!0},(W||[]).map(M=>t.createElement(u.W,{key:M.id,value:M.id},h({id:`global.${M.code}`,defaultMessage:M.name}))))};U.defaultProps={disabled:!1,error:void 0},U.propTypes={disabled:s().bool,error:s().string,onChange:s().func.isRequired,value:s().array.isRequired},l.Z=U},1057:function(T,l,e){e.d(l,{YM:function(){return m},Rw:function(){return i}});var t=e(24346),a=e(43383);const s={firstname:t.Z_().trim().required(a.I0.required),lastname:t.Z_(),email:t.Z_().email(a.I0.email).lowercase().required(a.I0.required),username:t.Z_().nullable(),password:t.Z_().min(8,a.I0.minLength).matches(/[a-z]/,"components.Input.error.contain.lowercase").matches(/[A-Z]/,"components.Input.error.contain.uppercase").matches(/\d/,"components.Input.error.contain.number"),confirmPassword:t.Z_().min(8,a.I0.minLength).oneOf([t.iH("password"),null],"components.Input.error.password.noMatch").when("password",(c,E)=>c?E.required(a.I0.required):E)};var i={...s,currentPassword:t.Z_().when(["password","confirmPassword"],(c,E,f)=>c||E?f.required(a.I0.required):f),preferedLanguage:t.Z_().nullable()},n={roles:t.IX().min(1,a.I0.required).required(a.I0.required)},m=t.Ry().shape({...s,isActive:t.Xg(),...n})},28890:function(T,l,e){var t=e(32735),a=e(67879),s=e(60216),d=e.n(s),i=e(78246),u=e(76779);const n=({registrationToken:g})=>{const{formatMessage:m}=(0,a.Z)();return g?t.createElement(u.Z,{target:`${window.location.origin}${i.Z}auth/register?registrationToken=${g}`},m({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"})):t.createElement(u.Z,{target:`${window.location.origin}${i.Z}auth/login`},m({id:"app.components.Users.MagicLink.connect.sso",defaultMessage:"Send this link to the user, the first login can be made via a SSO provider."}))};n.defaultProps={registrationToken:""},n.propTypes={registrationToken:d().string},l.Z=n},29439:function(T,l,e){e.d(l,{Z:function(){return s}});var t=e(74512);const a=d=>(0,t.jsx)("svg",{width:"1rem",height:"1rem",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...d,children:(0,t.jsx)("path",{d:"M24 13.3a.2.2 0 0 1-.2.2H5.74l8.239 8.239a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L.14 12.14a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L13.98 1.98a.2.2 0 0 1 0 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6Z",fill:"#212134"})}),s=a}}]);
