(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{51:function(e,t,i){},97:function(e,t,i){},98:function(e,t,i){},99:function(e,t,i){"use strict";i.r(t);var n=i(0),a=i(41),c=i.n(a),s=(i(51),i(33)),r=i(15),o=i.n(r),j=i(16),u=i(12),l=i(100),b=i(105),p=i(106),d=i(101),O=i(104),h=i(9),x="Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjIwMTgtMDYtMDdUMjE6MjY6MTIrMDA6MDAifQ.eyJ1c2VyX2lkIjoiNDA2MjI1Iiwic2NvcGUiOiJhZG1pbjphbGwiLCJ1dWlkIjoiM2RjZjNiMDItZDQ0NC00ZjJiLWJhOGMtOWYxMmRiNjRiZTJmIiwib3JnYW5pemF0aW9uX2lkIjoiNjYyNTQiLCJleHBpcmVzX2F0IjoiMjAyMS0xMC0xOFQxMDoyNTozMVoiLCJleHAiOjE2MzQ1NTI3MzEsInN1YiI6ImFzcGVyYWRlbW9AbWFpbGluYXRvci5jb20iLCJuYW1lIjoiYWlzaHdhcnlhIHAiLCJnaXZlbl9uYW1lIjoiYWlzaHdhcnlhIiwiZmFtaWx5X25hbWUiOiJwIiwiYXVkIjoiSjYybzlsM1hQQSIsImlhdCI6MTYzNDU0OTEzMSwiaXNzIjoiaHR0cHM6Ly9hcGkuaWJtYXNwZXJhLmNvbS9hcGkvdjEvb2F1dGgyL3Rva2VuIiwiaWJtaWRfaWQiOiJJQk1pZC02NjEwMDJBQjdJIiwiaWQiOiJhb2MtNDA2MjI1IiwicmVhbG1pZCI6ImFvYy1pYm1pZCIsImlkZW50aWZpZXIiOiI0MDYyMjUiLCJzcnNfZW5hYmxlZCI6ZmFsc2UsIm9yZ19hcHBzIjpbImZpbGVzIiwicGFja2FnZXMiLCJhY3Rpdml0eSIsImF1dG9tYXRpb24iXX0.m3vG1ISRB-J9MlgZ0A46g-vYy4GdedN_6zDzmV9lXLifMkB-UxqXO0TyTQzR3jm9EpEOB9qnqq4jSkEa87KzhWpgiYkeGbvKv7oZmeybvPsVxeMKv_GjUBKzbNbZJ39E7hdm9mlYPwpl5ZcC05fj4ib1saPuK5dNtVsp3VS-OArNVtSZm5jpN-Fq843EDolnyVEIy3UvZxi4jmYNpALc3rfhMsKGRT3dHjgg_DjW3x_Zah2ke6BC_zOAtzSrBk7ZzmsulObNnPPnrqWRRhKKajK3DIrYUdzn4yKq0KoyKeJbx5eCgLmfxGKJDpyM3nR7Y6N74oXkHtmAnqbCF-Z8Zw";var m=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),i=t[0],a=t[1],c=Object(n.useState)(""),s=Object(u.a)(c,2),r=s[0],m=s[1],f=Object(n.useState)(!1),v=Object(u.a)(f,2),S=v[0],I=v[1],C=Object(n.useState)(!1),N=Object(u.a)(C,2),T=N[0],E=N[1],_=Object(n.useState)(!1),k=Object(u.a)(_,2),y=k[0],W=k[1],M=Object(n.useState)(!1),D=Object(u.a)(M,2),A=D[0],J=D[1],R=Object(n.useState)(!1),Y=Object(u.a)(R,2),Z=Y[0],g=Y[1],z=Object(n.useState)(!1),w=Object(u.a)(z,2),L=w[0],P=w[1];return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(l.a,{onSubmit:function(e){(e.preventDefault(),I(!0),i&&""!==i.trim())?(function(){var e=Object(j.a)(o.a.mark((function e(){var t,n,a,c,s,j,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"dev"!==Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_mode){e.next=24;break}return t={accept:"application/json",Authorization:x},e.next=5,fetch("https://api.ibmaspera.com/api/v1/admin/nodes",{headers:t});case 5:return n=e.sent,e.next=8,n.json();case 8:return a=e.sent,c=a[0].id,s={name:i,description:r,node_id:c},t={accept:"application/json","content-type":"application/json",Authorization:x},e.next=14,fetch("https://api.ibmaspera.com/api/v1/admin/workspaces",{method:"POST",body:JSON.stringify(s),json:!0,headers:t});case 14:return n=e.sent,e.next=17,n.json();case 17:return a=e.sent,e.next=20,n;case 20:204===(j=e.sent).status||202===j.status?(E(!0),I(!1)):401===j.status?(W(!0),I(!1)):(g(!0),I(!1)),e.next=31;break;case 24:return e.next=26,fetch("/addworkspace?wname="+i+"&wdesc="+r);case 26:return u=e.sent,e.next=29,u.json();case 29:"success"===e.sent.result?(E(!0),I(!1)):(g(!0),I(!1));case 31:e.next=37;break;case 33:e.prev=33,e.t0=e.catch(0),J(!0),I(!1);case 37:case"end":return e.stop()}}),e,null,[[0,33]])})));return function(){return e.apply(this,arguments)}}()(),a(""),m("")):(P(!0),I(!1))},children:[Object(h.jsx)(b.a,{type:"text",id:"wname",labelText:"Workspace Name*",placeholder:"Workspace Name",size:"lg",value:i,onChange:function(e){return a(e.target.value)}}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)(b.a,{type:"text",id:"wdesc",labelText:"Workspace Description",placeholder:"Workspace Description",size:"lg",value:r,onChange:function(e){return m(e.target.value)}}),Object(h.jsx)("div",{className:"ButtonArea",children:Object(h.jsx)(p.a,{type:"submit",children:" Create Workspace "})})]}),Object(h.jsx)(d.a,{active:S,description:"Active loading indicator",withOverlay:!0}),T&&Object(h.jsx)(O.a,{iconDescription:"Close notification",subtitle:Object(h.jsx)("span",{children:"Workspace created successfully"}),timeout:4e3,onClose:function(){E(!1)},kind:"success",title:"Success Notification"}),y&&Object(h.jsx)(O.a,{iconDescription:"Close notification",subtitle:Object(h.jsx)("span",{children:"Unauthorised credentials. Restart to refresh your tokens"}),timeout:3e3,onClose:function(){W(!1)},title:"Error Notification"}),A&&Object(h.jsx)(O.a,{iconDescription:"Close notification",subtitle:Object(h.jsx)("span",{children:"Server cannot be reached"}),timeout:3e3,onClose:function(){J(!1)},title:"Error Notification"}),Z&&Object(h.jsx)(O.a,{iconDescription:"Close notification",subtitle:Object(h.jsx)("span",{children:"Workspace creation failed"}),timeout:3e3,onClose:function(){g(!1)},title:"Error Notification"}),L&&Object(h.jsx)(O.a,{iconDescription:"Close notification",subtitle:Object(h.jsx)("span",{children:"Invalid input. Specify workspace name"}),timeout:3e3,onClose:function(){P(!1)},title:"Error Notification"}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{})]})},f=i(102),v=i(103),S="Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjIwMTgtMDYtMDdUMjE6MjY6MTIrMDA6MDAifQ.eyJ1c2VyX2lkIjoiNDA2MjI1Iiwic2NvcGUiOiJhZG1pbjphbGwiLCJ1dWlkIjoiM2RjZjNiMDItZDQ0NC00ZjJiLWJhOGMtOWYxMmRiNjRiZTJmIiwib3JnYW5pemF0aW9uX2lkIjoiNjYyNTQiLCJleHBpcmVzX2F0IjoiMjAyMS0xMC0xOFQxMDoyNTozMVoiLCJleHAiOjE2MzQ1NTI3MzEsInN1YiI6ImFzcGVyYWRlbW9AbWFpbGluYXRvci5jb20iLCJuYW1lIjoiYWlzaHdhcnlhIHAiLCJnaXZlbl9uYW1lIjoiYWlzaHdhcnlhIiwiZmFtaWx5X25hbWUiOiJwIiwiYXVkIjoiSjYybzlsM1hQQSIsImlhdCI6MTYzNDU0OTEzMSwiaXNzIjoiaHR0cHM6Ly9hcGkuaWJtYXNwZXJhLmNvbS9hcGkvdjEvb2F1dGgyL3Rva2VuIiwiaWJtaWRfaWQiOiJJQk1pZC02NjEwMDJBQjdJIiwiaWQiOiJhb2MtNDA2MjI1IiwicmVhbG1pZCI6ImFvYy1pYm1pZCIsImlkZW50aWZpZXIiOiI0MDYyMjUiLCJzcnNfZW5hYmxlZCI6ZmFsc2UsIm9yZ19hcHBzIjpbImZpbGVzIiwicGFja2FnZXMiLCJhY3Rpdml0eSIsImF1dG9tYXRpb24iXX0.m3vG1ISRB-J9MlgZ0A46g-vYy4GdedN_6zDzmV9lXLifMkB-UxqXO0TyTQzR3jm9EpEOB9qnqq4jSkEa87KzhWpgiYkeGbvKv7oZmeybvPsVxeMKv_GjUBKzbNbZJ39E7hdm9mlYPwpl5ZcC05fj4ib1saPuK5dNtVsp3VS-OArNVtSZm5jpN-Fq843EDolnyVEIy3UvZxi4jmYNpALc3rfhMsKGRT3dHjgg_DjW3x_Zah2ke6BC_zOAtzSrBk7ZzmsulObNnPPnrqWRRhKKajK3DIrYUdzn4yKq0KoyKeJbx5eCgLmfxGKJDpyM3nR7Y6N74oXkHtmAnqbCF-Z8Zw";var I=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),i=t[0],a=t[1],c=Object(n.useState)(""),s=Object(u.a)(c,2),r=s[0],x=s[1],m=Object(n.useState)(""),I=Object(u.a)(m,2),C=I[0],N=I[1],T=Object(n.useState)(!1),E=Object(u.a)(T,2),_=E[0],k=E[1],y=Object(n.useState)("A valid email is required"),W=Object(u.a)(y,2),M=W[0],D=W[1],A=Object(n.useState)(!1),J=Object(u.a)(A,2),R=J[0],Y=J[1],Z=Object(n.useState)([]),g=Object(u.a)(Z,2),z=g[0],w=g[1],L=Object(n.useState)([]),P=Object(u.a)(L,2),F=P[0],U=P[1],K=Object(n.useState)(!1),X=Object(u.a)(K,2),G=X[0],V=X[1],H=Object(n.useState)(!1),Q=Object(u.a)(H,2),B=Q[0],q=Q[1],$=Object(n.useState)(!1),ee=Object(u.a)($,2),te=ee[0],ie=ee[1],ne=Object(n.useState)(!1),ae=Object(u.a)(ne,2),ce=ae[0],se=ae[1],re=Object(n.useState)(!1),oe=Object(u.a)(re,2),je=oe[0],ue=oe[1],le=Object(n.useState)(!1),be=Object(u.a)(le,2),pe=be[0],de=be[1],Oe=Object(n.useState)(!1),he=Object(u.a)(Oe,2),xe=he[0],me=he[1],fe=Object(n.useState)(!1),ve=Object(u.a)(fe,2),Se=ve[0],Ie=ve[1],Ce=Object(n.useState)(!1),Ne=Object(u.a)(Ce,2),Te=Ne[0],Ee=Ne[1],_e=Object(n.useState)(!1),ke=Object(u.a)(_e,2),ye=ke[0],We=ke[1],Me=Object(n.useState)(!1),De=Object(u.a)(Me,2),Ae=De[0],Je=De[1],Re=Object(n.useState)(!1),Ye=Object(u.a)(Re,2),Ze=Ye[0],ge=Ye[1],ze=[{id:!0,value:"Member"},{id:!1,value:"Workspace Manager"}],we=Object(n.useState)(ze[0].id),Le=Object(u.a)(we,2),Pe=Le[0],Fe=Le[1];return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(l.a,{onSubmit:function(e){(e.preventDefault(),V(!0),i)?(function(){var e=Object(j.a)(o.a.mark((function e(){var t,n,a,c,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"dev"!==Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_mode){e.next=13;break}return t={"content-type":"application/json",accept:"application/json",Authorization:S},n={email:i,auth_provider_id:null},e.next=6,fetch("https://api.ibmaspera.com/api/v1/admin/users",{method:"POST",body:JSON.stringify(n),json:!0,headers:t});case 6:return a=e.sent,e.next=9,a;case 9:201===(c=e.sent).status?(q(!0),V(!1)):401===c.status?(ue(!0),V(!1)):(Ie(!0),V(!1)),e.next=20;break;case 13:return e.next=15,fetch("/adduser?useremail="+i);case 15:return s=e.sent,e.next=18,s.json();case 18:"success"===e.sent.result?(q(!0),V(!1)):(Ie(!0),V(!1));case 20:e.next=26;break;case 22:e.prev=22,e.t0=e.catch(0),de(!0),V(!1);case 26:case"end":return e.stop()}}),e,null,[[0,22]])})));return function(){return e.apply(this,arguments)}}()(),a("")):(me(!0),V(!1))},children:[Object(h.jsx)(b.a,{type:"text",id:"email",invalid:_,invalidText:M,labelText:"Email*",placeholder:"Email",size:"lg",value:i,onChange:function(e){e.target.value.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/)?(k(!1),Y(!1)):(k(!0),D("Valid Email format required"),Y(!0)),a(e.target.value)}}),Object(h.jsx)("div",{className:"TButtonArea",children:Object(h.jsx)(p.a,{kind:"tertiary",type:"submit",disabled:R,children:" Add User "})})]}),Object(h.jsx)(f.a,{labelText:"Workspace*",size:"lg",value:C,onChange:function(e){N(e.target.value)},children:z.map((function(e,t){return Object(h.jsx)(v.a,{value:e.id,text:e.value},t)}))}),Object(h.jsx)("div",{className:"TButtonArea",children:Object(h.jsx)(p.a,{kind:"tertiary",type:"submit",onClick:function(){V(!0),function(){var e=Object(j.a)(o.a.mark((function e(){var t,i,n,a,c,s,r,j,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"dev"!==Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_mode){e.next=15;break}return t={accept:"application/json",Authorization:S},e.next=5,fetch("https://api.ibmaspera.com/api/v1/admin/workspaces",{headers:t});case 5:return i=e.sent,e.next=8,i.json();case 8:return n=e.sent,e.next=11,i;case 11:if(200===(a=e.sent).status){for(c=[{id:"",value:"Choose Workspace"}],s=0;s<n.length;s++)(r={}).id=n[s].id,r.value=n[s].name,c.push(r);w(c),V(!1)}else 401===a.status?(ue(!0),V(!1)):(Ee(!0),V(!1));e.next=22;break;case 15:return e.next=17,fetch("/getworkspace");case 17:return j=e.sent,e.next=20,j.json();case 20:"failure"===(u=e.sent).result?(Ee(!0),V(!1)):(w(u.result),V(!1));case 22:e.next=28;break;case 24:e.prev=24,e.t0=e.catch(0),de(!0),V(!1);case 28:case"end":return e.stop()}}),e,null,[[0,24]])})));return function(){return e.apply(this,arguments)}}()()},children:" List Workspaces "})}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("h2",{children:" User Permissions "}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)(f.a,{labelText:"Permission Type*",size:"lg",value:Pe,onChange:function(e){return Fe(e.target.value)},children:ze.map((function(e,t){return Object(h.jsx)(v.a,{value:e.id,text:e.value},t)}))}),Object(h.jsx)("br",{}),Object(h.jsx)(f.a,{labelText:"User*",size:"lg",value:r,onChange:function(e){x(e.target.value)},children:F.map((function(e,t){return Object(h.jsx)(v.a,{value:e.id,text:e.value},t)}))}),Object(h.jsx)("div",{className:"TButtonArea",children:Object(h.jsx)(p.a,{kind:"tertiary",type:"submit",onClick:function(){V(!0),function(){var e=Object(j.a)(o.a.mark((function e(){var t,i,n,a,c,s,r,j,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"dev"!==Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_mode){e.next=15;break}return t={accept:"application/json",Authorization:S},e.next=5,fetch("https://api.ibmaspera.com/api/v1/admin/users",{headers:t});case 5:return i=e.sent,e.next=8,i.json();case 8:return n=e.sent,e.next=11,i;case 11:if(200===(a=e.sent).status){for(c=[{id:"",value:"Choose User"}],s=0;s<n.length;s++)(r={}).id=n[s].id,r.value=n[s].email,c.push(r);U(c),V(!1)}else 401===a.status?(ue(!0),V(!1)):(Ee(!0),V(!1));e.next=22;break;case 15:return e.next=17,fetch("/getusers");case 17:return j=e.sent,e.next=20,j.json();case 20:"failure"===(u=e.sent).result?(Ee(!0),V(!1)):(U(u.result),V(!1));case 22:e.next=28;break;case 24:e.prev=24,e.t0=e.catch(0),V(!1),de(!0);case 28:case"end":return e.stop()}}),e,null,[[0,24]])})));return function(){return e.apply(this,arguments)}}()()},children:" List Users "})}),Object(h.jsx)(d.a,{active:G,description:"Active loading indicator",withOverlay:!0}),Object(h.jsxs)("div",{className:"ButtonArea",children:[Object(h.jsx)(p.a,{kind:"secondary",type:"submit",onClick:function(){(V(!0),r)?function(){var e=Object(j.a)(o.a.mark((function e(){var t,i,n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"dev"!==Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_mode){e.next=14;break}return t={accept:"application/json",Authorization:S},e.next=5,fetch("https://api.ibmaspera.com/api/v1/admin/users/".concat(r),{method:"DELETE",headers:t});case 5:return i=e.sent,e.next=8,i;case 8:204===(n=e.sent).status?ie(!0):401===n.status?(ue(!0),V(!1)):We(!0),U([]),V(!1),e.next=23;break;case 14:return e.next=16,fetch("/deluser?userid="+r);case 16:return a=e.sent,e.next=19,a.json();case 19:"success"===e.sent.result?ie(!0):We(!0),U([]),V(!1);case 23:e.next=29;break;case 25:e.prev=25,e.t0=e.catch(0),de(!0),V(!1);case 29:case"end":return e.stop()}}),e,null,[[0,25]])})));return function(){return e.apply(this,arguments)}}()():(me(!0),V(!1))},children:" Delete Existing User "}),Object(h.jsx)(p.a,{type:"submit",onClick:function(){(V(!0),r&&C)?function(){var e=Object(j.a)(o.a.mark((function e(){var t,i,n,a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"dev"!==Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_mode){e.next=13;break}return t={can_invite_by_email:!1,manager:Pe,member_id:r,member_type:"user",storage_allowed:!1,workspace_id:C},i={"content-type":"application/json",accept:"application/json",Authorization:S},e.next=6,fetch("https://api.ibmaspera.com/api/v1/admin/workspace_memberships",{method:"POST",body:JSON.stringify(t),json:!0,headers:i});case 6:return n=e.sent,e.next=9,n;case 9:202===(a=e.sent).status||204===a.status?(se(!0),x(""),N(""),U([]),w([]),V(!1)):401===a.status?(ue(!0),V(!1)):(Je(!0),x(""),N(""),U([]),w([]),V(!1)),e.next=20;break;case 13:return e.next=15,fetch("/addmember?wid="+C+"&userperms="+Pe+"&userid="+r);case 15:return c=e.sent,e.next=18,c.json();case 18:"success"===e.sent.result?(se(!0),x(""),N(""),U([]),w([]),V(!1)):(Je(!0),x(""),N(""),U([]),w([]),V(!1));case 20:e.next=26;break;case 22:e.prev=22,e.t0=e.catch(0),de(!0),V(!1);case 26:case"end":return e.stop()}}),e,null,[[0,22]])})));return function(){return e.apply(this,arguments)}}()():(ge(!0),V(!1))},children:" Create Membership "})]}),B&&Object(h.jsx)(O.a,{iconDescription:"Close notification",subtitle:Object(h.jsx)("span",{children:"User added successfully"}),timeout:4e3,onClose:function(){q(!1)},kind:"success",title:"Success Notification"}),te&&Object(h.jsx)(O.a,{iconDescription:"Close notification",subtitle:Object(h.jsx)("span",{children:"User deleted successfully"}),timeout:4e3,onClose:function(){ie(!1)},kind:"success",title:"Success Notification"}),ce&&Object(h.jsx)(O.a,{iconDescription:"Close notification",subtitle:Object(h.jsx)("span",{children:"Membership created successfully"}),timeout:4e3,onClose:function(){se(!1)},kind:"success",title:"Success Notification"}),je&&Object(h.jsx)(O.a,{iconDescription:"Close notification",subtitle:Object(h.jsx)("span",{children:"Unauthorised credentials. Restart to refresh your tokens"}),timeout:3e3,onClose:function(){ue(!1)},title:"Error Notification"}),pe&&Object(h.jsx)(O.a,{iconDescription:"Close notification",subtitle:Object(h.jsx)("span",{children:"Server cannot be reached"}),timeout:3e3,onClose:function(){de(!1)},title:"Error Notification"}),xe&&Object(h.jsx)(O.a,{iconDescription:"Close notification",subtitle:Object(h.jsx)("span",{children:"Invalid input provided. Specify user to be added"}),timeout:3e3,onClose:function(){me(!1)},title:"Error Notification"}),Se&&Object(h.jsx)(O.a,{iconDescription:"Close notification",subtitle:Object(h.jsx)("span",{children:"User could not be added"}),timeout:3e3,onClose:function(){Ie(!1)},title:"Error Notification"}),Te&&Object(h.jsx)(O.a,{iconDescription:"Close notification",subtitle:Object(h.jsx)("span",{children:"Operation cannot be done"}),timeout:3e3,onClose:function(){Ee(!1)},title:"Error Notification"}),ye&&Object(h.jsx)(O.a,{iconDescription:"Close notification",subtitle:Object(h.jsx)("span",{children:"User could not be deleted"}),timeout:3e3,onClose:function(){We(!1)},title:"Error Notification"}),Ae&&Object(h.jsx)(O.a,{iconDescription:"Close notification",subtitle:Object(h.jsx)("span",{children:"Membership could not be created"}),timeout:3e3,onClose:function(){Je(!1)},title:"Error Notification"}),Ze&&Object(h.jsx)(O.a,{iconDescription:"Close notification",subtitle:Object(h.jsx)("span",{children:"Invalid inputs provided. Specify user, workspace and permission type"}),timeout:3e3,onClose:function(){ge(!1)},title:"Error Notification"}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{})]})},C="Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjIwMTgtMDYtMDdUMjE6MjY6MTIrMDA6MDAifQ.eyJ1c2VyX2lkIjoiNDA2MjI1Iiwic2NvcGUiOiJhZG1pbjphbGwiLCJ1dWlkIjoiM2RjZjNiMDItZDQ0NC00ZjJiLWJhOGMtOWYxMmRiNjRiZTJmIiwib3JnYW5pemF0aW9uX2lkIjoiNjYyNTQiLCJleHBpcmVzX2F0IjoiMjAyMS0xMC0xOFQxMDoyNTozMVoiLCJleHAiOjE2MzQ1NTI3MzEsInN1YiI6ImFzcGVyYWRlbW9AbWFpbGluYXRvci5jb20iLCJuYW1lIjoiYWlzaHdhcnlhIHAiLCJnaXZlbl9uYW1lIjoiYWlzaHdhcnlhIiwiZmFtaWx5X25hbWUiOiJwIiwiYXVkIjoiSjYybzlsM1hQQSIsImlhdCI6MTYzNDU0OTEzMSwiaXNzIjoiaHR0cHM6Ly9hcGkuaWJtYXNwZXJhLmNvbS9hcGkvdjEvb2F1dGgyL3Rva2VuIiwiaWJtaWRfaWQiOiJJQk1pZC02NjEwMDJBQjdJIiwiaWQiOiJhb2MtNDA2MjI1IiwicmVhbG1pZCI6ImFvYy1pYm1pZCIsImlkZW50aWZpZXIiOiI0MDYyMjUiLCJzcnNfZW5hYmxlZCI6ZmFsc2UsIm9yZ19hcHBzIjpbImZpbGVzIiwicGFja2FnZXMiLCJhY3Rpdml0eSIsImF1dG9tYXRpb24iXX0.m3vG1ISRB-J9MlgZ0A46g-vYy4GdedN_6zDzmV9lXLifMkB-UxqXO0TyTQzR3jm9EpEOB9qnqq4jSkEa87KzhWpgiYkeGbvKv7oZmeybvPsVxeMKv_GjUBKzbNbZJ39E7hdm9mlYPwpl5ZcC05fj4ib1saPuK5dNtVsp3VS-OArNVtSZm5jpN-Fq843EDolnyVEIy3UvZxi4jmYNpALc3rfhMsKGRT3dHjgg_DjW3x_Zah2ke6BC_zOAtzSrBk7ZzmsulObNnPPnrqWRRhKKajK3DIrYUdzn4yKq0KoyKeJbx5eCgLmfxGKJDpyM3nR7Y6N74oXkHtmAnqbCF-Z8Zw",N="Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjIwMTgtMDYtMDdUMjE6MjY6MTIrMDA6MDAifQ.eyJ1c2VyX2lkIjoiNDA2MjI1Iiwic2NvcGUiOiJ1c2VyOmFsbCIsInV1aWQiOiI0MDY2YTQwMS1kMTZjLTRmOTUtOTE4NS03NmM4NWUyMTRmNDMiLCJvcmdhbml6YXRpb25faWQiOiI2NjI1NCIsImV4cGlyZXNfYXQiOiIyMDIxLTEwLTE4VDEwOjI1OjMxWiIsImV4cCI6MTYzNDU1MjczMSwic3ViIjoiYXNwZXJhZGVtb0BtYWlsaW5hdG9yLmNvbSIsIm5hbWUiOiJhaXNod2FyeWEgcCIsImdpdmVuX25hbWUiOiJhaXNod2FyeWEiLCJmYW1pbHlfbmFtZSI6InAiLCJhdWQiOiJKNjJvOWwzWFBBIiwiaWF0IjoxNjM0NTQ5MTMxLCJpc3MiOiJodHRwczovL2FwaS5pYm1hc3BlcmEuY29tL2FwaS92MS9vYXV0aDIvdG9rZW4iLCJpYm1pZF9pZCI6IklCTWlkLTY2MTAwMkFCN0kiLCJpZCI6ImFvYy00MDYyMjUiLCJyZWFsbWlkIjoiYW9jLWlibWlkIiwiaWRlbnRpZmllciI6IjQwNjIyNSIsInNyc19lbmFibGVkIjpmYWxzZSwiZ3JvdXBfaWRzIjpbIjIxNzAxOCJdLCJvcmdfYXBwcyI6WyJmaWxlcyIsInBhY2thZ2VzIiwiYWN0aXZpdHkiLCJhdXRvbWF0aW9uIl19.uGQHRxEGGYNEEr2G5y-pUlnn59kN_msOF79lrG0aX_f631ctJdSZPg40XrCOYQVnCBxAZFpHcy4A1vq0gfTgdJ8_2g8Wi2c8K9i3lKyZD99r_E1YkfN6PzqvpZsQLLCeuNkhgvn6LPXViAJqyG3_yZN6JQWQKc-J8MV5aWUwJDkuSRvmwi5a8KcuJbfqcQIMrJazfzilsWsuMzL8isZuGX_QTq6rtQA9n_isY5rBrGKwSWZTFQ2r3yXpgkY_4nuETWcX1T3axY69T81YMpETt-Y90oTaMrhfCYFUMZxjmXjs_zrJLy4U4VeVSMLV9fif108HkZ_UX9ijSSr87bWTeg";var T=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),i=t[0],a=t[1],c=Object(n.useState)(""),s=Object(u.a)(c,2),r=s[0],l=s[1],x=Object(n.useState)(""),m=Object(u.a)(x,2),S=m[0],I=m[1],T=Object(n.useState)(""),E=Object(u.a)(T,2),_=E[0],k=E[1],y=Object(n.useState)([]),W=Object(u.a)(y,2),M=W[0],D=W[1],A=Object(n.useState)([]),J=Object(u.a)(A,2),R=J[0],Y=J[1],Z=Object(n.useState)([]),g=Object(u.a)(Z,2),z=g[0],w=g[1],L=Object(n.useState)(!1),P=Object(u.a)(L,2),F=P[0],U=P[1],K=Object(n.useState)(!1),X=Object(u.a)(K,2),G=X[0],V=X[1],H=Object(n.useState)(!1),Q=Object(u.a)(H,2),B=Q[0],q=Q[1],$=Object(n.useState)(!1),ee=Object(u.a)($,2),te=ee[0],ie=ee[1],ne=Object(n.useState)(!1),ae=Object(u.a)(ne,2),ce=ae[0],se=ae[1],re=Object(n.useState)(!1),oe=Object(u.a)(re,2),je=oe[0],ue=oe[1],le=Object(n.useState)(!1),be=Object(u.a)(le,2),pe=be[0],de=be[1];return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(b.a,{type:"text",id:"pkgname",labelText:"Package Name*",placeholder:"Package Name",size:"lg",value:i,onChange:function(e){return a(e.target.value)}}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)(f.a,{labelText:"Choose File*",size:"lg",value:_,onChange:function(e){k(e.target.value)},children:M.map((function(e,t){return Object(h.jsx)(v.a,{value:e.id,text:e.name},t)}))}),Object(h.jsx)("div",{className:"TButtonArea",children:Object(h.jsx)(p.a,{kind:"tertiary",type:"submit",onClick:function(){U(!0),function(){var e=Object(j.a)(o.a.mark((function e(){var t,i,n,a,c,s,r,j,u,l,b,p;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"dev"!==Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_mode){e.next=42;break}return t={"content-type":"application/json",accept:"application/json",Authorization:C},e.next=5,fetch("https://api.ibmaspera.com/api/v1/admin/nodes",{headers:t});case 5:return i=e.sent,e.next=8,i.json();case 8:return n=e.sent,e.next=11,i;case 11:if(401!==e.sent.status){e.next=17;break}q(!0),U(!1),e.next=40;break;case 17:return a=n[0].url.toString(),c=a.lastIndexOf(":"),a=a.substring(0,c),t={accept:"application/json",Authorization:C},e.next=23,fetch("https://api.ibmaspera.com/api/v1/admin/workspaces",{headers:t});case 23:return i=e.sent,e.next=26,i.json();case 26:return n=e.sent,s=n[0].home_file_id.toString(),r=a.concat("/files/").concat(s).concat("/files"),t={"X-Aspera-AccessKey":Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_ASPERA_ACCESS_KEY,Authorization:"Bearer eJwlkNuumlAYhO95DG5b6uIHBEy8QFEEBUQUD02zs4QFG+R8UKHpu5fd3s7MN5PMb7prSP0RB/SM5tEUQKC/041flGQU8iIgP3qPZYtLEZLd4LRKqULTJ0lYHWdf4Ayn6Qh03b8CH7FygERghDsChkcgMxLH+QwmQsDLWAiDOz+mizrCeTzgNi7y/8vTKQhfDnmXcU2aD9yOIiBgGRYxrHQEdgbCjGNvYyaqi64csYae/aSBFREr0b/+UPO5q2uWcjwdVvM59YjEi6v3XOn2yd7KqkG5ClyZxWZ0Xel7qQk/3dLjJotv0qfMO2L7bIooVQ/12nc9ChuuK6HT6m3LbrpaW6SMst4shttJWhzIbr1MeSGDR1XprbRPVM3pl4FgcZNtv4ypV+5tnyFRp2ZmHxuc+vJ6A4HmosuALK22JskiXgzB52S/jI1Kl8/QXdeaYGotGJQB6i3dYPFi3vfX2M51dbKPF+jGT+XW4BSrMcLOCQPVLrYSnz7eReNlQan6vYNVCj0njQaQdYfIJvyLPze7SonAY80ja76vaCoa4dN+qZ7+Fh4XfRt27UZR8tct6dZU7nLB4WIAJOpApLu4BSjkXXT2b4qhDZjUIgb9LmTYGd/9CwccsG0="},e.next=32,fetch("".concat(r),{headers:t});case 32:return i=e.sent,e.next=35,i.json();case 35:return n=e.sent,e.next=38,i;case 38:if(200===e.sent.status){for(j=[{id:"",name:"Choose File"}],u=0;u<n.length;u++)(l={}).id=n[u].name,l.name=n[u].name,j.push(l);D(j),U(!1)}else de(!0),U(!1);case 40:e.next=49;break;case 42:return e.next=44,fetch("/getfiles");case 44:return b=e.sent,e.next=47,b.json();case 47:"failure"===(p=e.sent).result?(de(!0),U(!1)):(D(p.result),U(!1));case 49:e.next=55;break;case 51:e.prev=51,e.t0=e.catch(0),U(!1),ie(!0);case 55:case"end":return e.stop()}}),e,null,[[0,51]])})));return function(){return e.apply(this,arguments)}}()()},children:" List Files "})}),Object(h.jsx)("br",{}),Object(h.jsx)(f.a,{labelText:"Choose Recipient*",size:"lg",value:r,onChange:function(e){l(e.target.value)},children:R.map((function(e,t){return Object(h.jsx)(v.a,{value:e.id,text:e.value},t)}))}),Object(h.jsx)("div",{className:"TButtonArea",children:Object(h.jsx)(p.a,{kind:"tertiary",type:"submit",onClick:function(){U(!0),function(){var e=Object(j.a)(o.a.mark((function e(){var t,i,n,a,c,s,r,j,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"dev"!==Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_mode){e.next=15;break}return t={accept:"application/json",Authorization:C},e.next=5,fetch("https://api.ibmaspera.com/api/v1/admin/users",{headers:t});case 5:return i=e.sent,e.next=8,i.json();case 8:return n=e.sent,e.next=11,i;case 11:if(200===(a=e.sent).status){for(c=[{id:"",value:"Choose User"}],s=0;s<n.length;s++)(r={}).id=n[s].id,r.value=n[s].email,c.push(r);Y(c),U(!1)}else 401===a.status?(q(!0),U(!1)):(de(!0),U(!1));e.next=22;break;case 15:return e.next=17,fetch("/getusers");case 17:return j=e.sent,e.next=20,j.json();case 20:"failure"===(u=e.sent).result?(de(!0),U(!1)):(Y(u.result),U(!1));case 22:e.next=28;break;case 24:e.prev=24,e.t0=e.catch(0),U(!1),ie(!0);case 28:case"end":return e.stop()}}),e,null,[[0,24]])})));return function(){return e.apply(this,arguments)}}()()},children:" List Users "})}),Object(h.jsx)("div",{className:"PButtonArea",Style:"padding-top: 16px;",children:Object(h.jsx)(p.a,{type:"submit",onClick:function(){(U(!0),i&&r&&_&&""!==i.trim())?function(){var e=Object(j.a)(o.a.mark((function e(){var t,n,c,s,j,u,b,p;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"dev"!==Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_mode){e.next=30;break}return t={Authorization:C},e.next=5,fetch("https://api.ibmaspera.com/api/v1/admin/workspaces",{headers:t});case 5:return n=e.sent,e.next=8,n.json();case 8:return c=e.sent,s=c[0].id,t={"content-type":"application/json",accept:"application/json",Authorization:N},j={recipients:[{id:r,type:"user"}],upload_notification_recipients:[],download_notification_recipients:[],bcc_recipients:[],file_names:[_],name:i,workspace_id:s,encryption_at_rest:!1,single_source:!0,read:!0,transfers_expected:1},e.next=14,fetch("https://api.ibmaspera.com/api/v1/packages",{method:"POST",body:JSON.stringify(j),json:!0,headers:t});case 14:return n=e.sent,e.next=17,n.json();case 17:return c=e.sent,u=c.id,b={sent:!0,transfers_expected:1},t={"content-type":"application/json",accept:"application/json",Authorization:N},e.next=23,fetch("https://api.ibmaspera.com/api/v1/packages/".concat(u),{method:"PUT",body:JSON.stringify(b),json:!0,headers:t});case 23:return n=e.sent,e.next=26,n;case 26:204===(c=e.sent).status?(V(!0),a(""),l(""),k(""),Y([]),D([]),U(!1)):401===c.status?(q(!0),U(!1)):(se(!0),a(""),l(""),k(""),Y([]),D([]),U(!1)),e.next=37;break;case 30:return e.next=32,fetch("/sendpackages?pkgname="+i+"&filepkg="+_+"&userid="+r);case 32:return p=e.sent,e.next=35,p.json();case 35:"success"===e.sent.result?(V(!0),a(""),l(""),k(""),Y([]),D([]),U(!1)):(se(!0),a(""),l(""),k(""),Y([]),D([]),U(!1));case 37:e.next=43;break;case 39:e.prev=39,e.t0=e.catch(0),ie(!0),U(!1);case 43:case"end":return e.stop()}}),e,null,[[0,39]])})));return function(){return e.apply(this,arguments)}}()():(ue(!0),U(!1))},children:" Send Package "})}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("h2",{children:"Existing Packages"}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)(f.a,{labelText:"View Packages",size:"lg",value:S,onChange:function(e){I(e.target.value)},children:z.map((function(e,t){return Object(h.jsx)(v.a,{value:e.id,text:e.value},t)}))}),Object(h.jsx)("div",{className:"TButtonArea",children:Object(h.jsx)(p.a,{kind:"tertiary",type:"submit",onClick:function(){U(!0),function(){var e=Object(j.a)(o.a.mark((function e(){var t,i,n,a,c,s,r,j,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"dev"!==Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_mode){e.next=15;break}return t={accept:"application/json",Authorization:C},e.next=5,fetch("https://api.ibmaspera.com/api/v1/admin/packages?package_sent=true&deleted=false&include_draft=false&received=true",{headers:t});case 5:return i=e.sent,e.next=8,i.json();case 8:return n=e.sent,e.next=11,i;case 11:if(200===(a=e.sent).status){for(c=[],s=0;s<n.length;s++)(r={}).id=n[s].id,r.value=n[s].name,c.push(r);w(c),U(!1)}else 401===a.status?(q(!0),U(!1)):(de(!0),U(!1));e.next=22;break;case 15:return e.next=17,fetch("/getpackages");case 17:return j=e.sent,e.next=20,j.json();case 20:"failure"===(u=e.sent).result?(de(!0),U(!1)):(w(u.result),U(!1));case 22:e.next=28;break;case 24:e.prev=24,e.t0=e.catch(0),U(!1),ie(!0);case 28:case"end":return e.stop()}}),e,null,[[0,24]])})));return function(){return e.apply(this,arguments)}}()()},children:" List Packages "})}),Object(h.jsx)(d.a,{active:F,description:"Active loading indicator",withOverlay:!0}),G&&Object(h.jsx)(O.a,{iconDescription:"Close notification",subtitle:Object(h.jsx)("span",{children:"Package sent successfully"}),timeout:4e3,onClose:function(){V(!1)},kind:"success",title:"Success Notification"}),B&&Object(h.jsx)(O.a,{iconDescription:"Close notification",subtitle:Object(h.jsx)("span",{children:"Unauthorised credentials. Restart to refresh your tokens"}),timeout:3e3,onClose:function(){q(!1)},title:"Error Notification"}),te&&Object(h.jsx)(O.a,{iconDescription:"Close notification",subtitle:Object(h.jsx)("span",{children:"Server cannot be reached"}),timeout:3e3,onClose:function(){ie(!1)},title:"Error Notification"}),ce&&Object(h.jsx)(O.a,{iconDescription:"Close notification",subtitle:Object(h.jsx)("span",{children:"Package could not be sent"}),timeout:3e3,onClose:function(){se(!1)},title:"Error Notification"}),je&&Object(h.jsx)(O.a,{iconDescription:"Close notification",subtitle:Object(h.jsx)("span",{children:"Invalid inputs provided. Specify package name, file and recipient"}),timeout:3e3,onClose:function(){ue(!1)},title:"Error Notification"}),pe&&Object(h.jsx)(O.a,{iconDescription:"Close notification",subtitle:Object(h.jsx)("span",{children:"Operation cannot be done"}),timeout:3e3,onClose:function(){de(!1)},title:"Error Notification"})]})};var E=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(s.Header,{"aria-label":"IBM",children:Object(h.jsx)(s.HeaderName,{prefix:"",href:"#",children:Object(h.jsx)("div",{Style:"white-space: nowrap;",children:"Aspera on Cloud Sample Application"})})}),Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)("div",{className:"AppContent",children:[Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("h2",{children:"Workspace Details"}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)(m,{}),Object(h.jsx)("h2",{children:"Membership Details"}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)(I,{}),Object(h.jsx)("h2",{children:"Workspace Packages"}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)(T,{})]})})]})};i(97),i(98);c.a.render(Object(h.jsx)(E,{}),document.getElementById("root"))}},[[99,1,2]]]);
//# sourceMappingURL=main.7adc4638.chunk.js.map