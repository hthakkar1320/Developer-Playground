(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{127:function(e,t,a){},128:function(e,t,a){},129:function(e,t,a){"use strict";a.r(t);var c=a(0),i=a(37),r=a.n(i),n=(a(81),a(141)),s=a(136),l=a(65),o=a(23),j=a.n(o),d=a(21),b=a(27),O=a(16),h=a(134),u=a(138),x=a(140),p=a(139),v=a(135),m=a(137),S=a(60),f=a(58),Z=a(61),N=a(63),T=a(62),y=a(59),V=a(35),Q=a(3);var M=function(){var e=Object(c.useState)(""),t=Object(O.a)(e,2),a=t[0],i=t[1],r=Object(c.useState)({}),n=Object(O.a)(r,2),s=n[0],l=n[1],o=Object(c.useState)(!1),M=Object(O.a)(o,2),J=M[0],U=M[1],k=Object(c.useState)(!1),w=Object(O.a)(k,2),C=w[0],E=w[1],g=Object(c.useState)("A valid value is required"),A=Object(O.a)(g,2),R=A[0],F=A[1],z=Object(c.useState)(!1),G=Object(O.a)(z,2),I=G[0],L=G[1],W=Object(c.useState)(!1),Y=Object(O.a)(W,2),B=Y[0],D=Y[1],H=Object(c.useState)(!1),q=Object(O.a)(H,2),X=q[0],_=q[1],P=Object(c.useState)(!1),K=Object(O.a)(P,2),$=K[0],ee=K[1];return Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsxs)(h.a,{onSubmit:function(e){(e.preventDefault(),U(!0),a)?(function(){var e=Object(b.a)(j.a.mark((function e(){var t,c,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={Authorization:"Bearer eyJhbGciOiJSUzUxMiIsImN0eSI6IkpXVCIsImlzcyI6IkhFUkUiLCJhaWQiOiJMM0pCbkZ1emEyaURadzZFVUdWTSIsImlhdCI6MTYzMTg3ODM1MSwiZXhwIjoxNjMxOTY0NzUxLCJraWQiOiJqMSJ9.ZXlKaGJHY2lPaUprYVhJaUxDSmxibU1pT2lKQk1qVTJRMEpETFVoVE5URXlJbjAuLnA3S3FCVHZ4cmQ5UDhMNnhpamtOVHcuS055UEhZVWVxenJGRURQZXJhOEVnand6bHhFalBSYjhIQW1JVG9CZjllQWVlN21xZGJkekNORjBzV0M1eEEzMG45b0dBNzZKSGgxbGQxaGl0dWIyVTYxNFRudU5MT1RyZm1GdG9tdE12OFMzN2thY0hkMF9SSExJZENtaHB1cVJERkVFeUV5eTFSQzhmemJVc3A4Y1ZRLjhUd3hYeFNFRUk5Qnh2c1RMZVFfdjJxQ29HQnZaV09JRUo5NTZqekd5c1U.FWlxvjHQNNhuEZWQotdjrTlcndvSw6Gvo80pI2R4wQM8ocG5mEkEA3dP7wTpSDXokM1s32ObvxNumdxymBjqw-c7ShM5HrFmUSackZJwOrGZZOyn7AirTa1bgLrbjpuCQNtRdfW6tym8b4w6xAoutD15awZP9eYwFOP0wzBRuQTcewBfQaZZCArbQrbCW_aDfl18hQdrcpO3B3PE8sddzqVO9Xx3MjTVUFhRM0LmiqY-vaxccfxGnqk2UYeQMOlVm_vnZC_pZQ8QVaph5VWnxCAoT5Z23vkSdiYzsCgBEZLkXJRuXj1vA_54r_0ZavEQQRlmT8Uz3LOv2_xJy-fM_w"},e.next=4,fetch("https://geocode.search.hereapi.com/v1/geocode?q=".concat(a),{headers:t});case 4:return c=e.sent,e.next=7,c.json();case 7:i=e.sent,l(Object(d.a)({},i)),U(!1),"[]"===JSON.stringify(i.items)&&(ee(!0),l({})),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),_(!0),U(!1);case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}()(),i("")):(D(!0),U(!1))},children:[Object(Q.jsx)(u.a,{type:"text",id:"location",labelText:"Location*",invalid:C,invalidText:R,helperText:"Input values only in alphabets - City/Town/Street.",placeholder:"Location",size:"lg",value:a,onChange:function(e){e.target.value.match(/^[a-zA-Z]+$/)?(E(!1),L(!1)):(E(!0),F("Only letters allowed. No special characters or numbers"),L(!0)),i(e.target.value)}}),Object(Q.jsx)("div",{className:"ButtonArea",children:Object(Q.jsx)(x.a,{type:"submit",disabled:I,children:" Get Area Co-ordinates "})})]}),B&&Object(Q.jsx)(p.a,{iconDescription:"Close notification",subtitle:Object(Q.jsx)("span",{children:"Location input is empty. Please fill a valid Location"}),timeout:3e3,onClose:function(){D(!1)},title:"Error Notification"}),X&&Object(Q.jsx)(p.a,{iconDescription:"Close notification",subtitle:Object(Q.jsx)("span",{children:"Server cannot be reached"}),timeout:3e3,onClose:function(){_(!1)},title:"Error Notification"}),$&&Object(Q.jsx)(p.a,{iconDescription:"Close notification",subtitle:Object(Q.jsx)("span",{children:"No results available"}),timeout:3e3,onClose:function(){ee(!1)},title:"Error Notification"}),Object(Q.jsx)(v.a,{active:J,description:"Active loading indicator",withOverlay:!0}),s.items&&Object(Q.jsx)("div",{className:"TableDisplay",children:s.items&&Object(Q.jsx)(m.a,{rows:s.items,headers:[{key:"name",header:"Name"},{key:"address",header:"Address"},{key:"location",header:"Location"}],children:function(e){e.rows;var t=e.headers,a=e.getHeaderProps;return Object(Q.jsx)(S.a,{title:"Location Results",children:Object(Q.jsxs)(f.a,{children:[Object(Q.jsx)(Z.a,{children:Object(Q.jsx)(N.a,{children:t.map((function(e){return Object(Q.jsx)(T.a,Object(d.a)(Object(d.a)({},a({header:e})),{},{children:e.header}))}))})}),Object(Q.jsx)(y.a,{children:s.items&&s.items.map((function(e,t){return Object(Q.jsxs)(N.a,{children:[Object(Q.jsx)(V.a,{children:e.title}),Object(Q.jsx)(V.a,{children:e.address.label}),Object(Q.jsx)(V.a,{children:e.position.lat+","+e.position.lng})]},t)}))})]})})}})})]})};var J=function(){var e=Object(c.useState)(""),t=Object(O.a)(e,2),a=t[0],i=t[1],r=Object(c.useState)(""),n=Object(O.a)(r,2),s=n[0],l=n[1],o=Object(c.useState)({}),M=Object(O.a)(o,2),J=M[0],U=M[1],k=Object(c.useState)(!1),w=Object(O.a)(k,2),C=w[0],E=w[1],g=Object(c.useState)("A valid value is required"),A=Object(O.a)(g,2),R=A[0],F=A[1],z=Object(c.useState)(!1),G=Object(O.a)(z,2),I=G[0],L=G[1],W=Object(c.useState)(!1),Y=Object(O.a)(W,2),B=Y[0],D=Y[1],H=Object(c.useState)(!1),q=Object(O.a)(H,2),X=q[0],_=q[1],P=Object(c.useState)(!1),K=Object(O.a)(P,2),$=K[0],ee=K[1],te=Object(c.useState)(!1),ae=Object(O.a)(te,2),ce=ae[0],ie=ae[1],re=Object(c.useState)(!1),ne=Object(O.a)(re,2),se=ne[0],le=ne[1];return Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsxs)(h.a,{onSubmit:function(e){if(e.preventDefault(),E(!0),a&&s){var t=a.concat(",").concat(s);(function(){var e=Object(b.a)(j.a.mark((function e(){var a,c,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a={Authorization:"Bearer eyJhbGciOiJSUzUxMiIsImN0eSI6IkpXVCIsImlzcyI6IkhFUkUiLCJhaWQiOiJMM0pCbkZ1emEyaURadzZFVUdWTSIsImlhdCI6MTYzMTg3ODM1MSwiZXhwIjoxNjMxOTY0NzUxLCJraWQiOiJqMSJ9.ZXlKaGJHY2lPaUprYVhJaUxDSmxibU1pT2lKQk1qVTJRMEpETFVoVE5URXlJbjAuLnA3S3FCVHZ4cmQ5UDhMNnhpamtOVHcuS055UEhZVWVxenJGRURQZXJhOEVnand6bHhFalBSYjhIQW1JVG9CZjllQWVlN21xZGJkekNORjBzV0M1eEEzMG45b0dBNzZKSGgxbGQxaGl0dWIyVTYxNFRudU5MT1RyZm1GdG9tdE12OFMzN2thY0hkMF9SSExJZENtaHB1cVJERkVFeUV5eTFSQzhmemJVc3A4Y1ZRLjhUd3hYeFNFRUk5Qnh2c1RMZVFfdjJxQ29HQnZaV09JRUo5NTZqekd5c1U.FWlxvjHQNNhuEZWQotdjrTlcndvSw6Gvo80pI2R4wQM8ocG5mEkEA3dP7wTpSDXokM1s32ObvxNumdxymBjqw-c7ShM5HrFmUSackZJwOrGZZOyn7AirTa1bgLrbjpuCQNtRdfW6tym8b4w6xAoutD15awZP9eYwFOP0wzBRuQTcewBfQaZZCArbQrbCW_aDfl18hQdrcpO3B3PE8sddzqVO9Xx3MjTVUFhRM0LmiqY-vaxccfxGnqk2UYeQMOlVm_vnZC_pZQ8QVaph5VWnxCAoT5Z23vkSdiYzsCgBEZLkXJRuXj1vA_54r_0ZavEQQRlmT8Uz3LOv2_xJy-fM_w"},e.next=4,fetch("https://revgeocode.search.hereapi.com/v1/revgeocode?at=".concat(t),{headers:a});case 4:return c=e.sent,e.next=7,c.json();case 7:i=e.sent,U(Object(d.a)({},i)),E(!1),"[]"===JSON.stringify(i.items)&&(le(!0),U({})),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),ie(!0),E(!1);case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}})()(),i(""),l("")}else ee(!0),E(!1)},children:[Object(Q.jsx)("div",{className:"TextArea",children:Object(Q.jsx)(u.a,{id:"latitude",labelText:"Latitude*",invalid:B,invalidText:R,helperText:"Add valid co-ordinates.",placeholder:"Latitude",size:"lg",value:a,onChange:function(e){e.target.value.match(/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?){2}$/)?(D(!1),L(!1)):(D(!0),F("Only valid co-ordinates allowed. No characters"),L(!0)),i(e.target.value)}})}),Object(Q.jsx)("div",{className:"TextArea",children:Object(Q.jsx)(u.a,{id:"longitude",labelText:"Longitude*",invalid:X,invalidText:R,helperText:"Add valid co-ordinates.",placeholder:"Longitude",size:"lg",value:s,onChange:function(e){e.target.value.match(/^\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?){2}$/)?(_(!1),L(!1)):(_(!0),F("Only valid co-ordinates allowed. No characters"),L(!0)),l(e.target.value)}})}),Object(Q.jsx)("div",{className:"CButtonArea",children:Object(Q.jsx)(x.a,{type:"submit",disabled:I,children:" Get Places Near You "})})]}),$&&Object(Q.jsx)(p.a,{iconDescription:"Close notification",subtitle:Object(Q.jsx)("span",{children:"Latitude, Longitude  values cannot be empty"}),timeout:3e3,onClose:function(){ee(!1)},title:"Error Notification"}),ce&&Object(Q.jsx)(p.a,{iconDescription:"Close notification",subtitle:Object(Q.jsx)("span",{children:"Server cannot be reached"}),timeout:3e3,onClose:function(){ie(!1)},title:"Error Notification"}),se&&Object(Q.jsx)(p.a,{iconDescription:"Close notification",subtitle:Object(Q.jsx)("span",{children:"No data results available"}),timeout:3e3,onClose:function(){le(!1)},title:"Error Notification"}),Object(Q.jsx)(v.a,{active:C,description:"Active loading indicator",withOverlay:!0}),J.items&&Object(Q.jsx)("div",{className:"TableDisplay",children:J.items&&Object(Q.jsx)(m.a,{rows:J.items,headers:[{key:"name",header:"Name"},{key:"address",header:"Address"},{key:"location",header:"Location"}],children:function(e){e.rows;var t=e.headers,a=e.getHeaderProps;return Object(Q.jsx)(S.a,{title:"Location Results",children:Object(Q.jsxs)(f.a,{children:[Object(Q.jsx)(Z.a,{children:Object(Q.jsx)(N.a,{children:t.map((function(e){return Object(Q.jsx)(T.a,Object(d.a)(Object(d.a)({},a({header:e})),{},{children:e.header}))}))})}),Object(Q.jsx)(y.a,{children:J.items&&J.items.map((function(e,t){return Object(Q.jsxs)(N.a,{children:[Object(Q.jsx)(V.a,{children:e.title}),Object(Q.jsx)(V.a,{children:e.address.label}),Object(Q.jsx)(V.a,{children:e.position.lat+","+e.position.lng})]},t)}))})]})})}})})]})};var U=function(){var e=Object(c.useState)(""),t=Object(O.a)(e,2),a=t[0],i=t[1],r=Object(c.useState)(""),n=Object(O.a)(r,2),s=n[0],l=n[1],o=Object(c.useState)({}),M=Object(O.a)(o,2),J=M[0],U=M[1],k=Object(c.useState)(!1),w=Object(O.a)(k,2),C=w[0],E=w[1],g=Object(c.useState)(!1),A=Object(O.a)(g,2),R=A[0],F=A[1],z=Object(c.useState)("A valid value is required"),G=Object(O.a)(z,2),I=G[0],L=G[1],W=Object(c.useState)(!1),Y=Object(O.a)(W,2),B=Y[0],D=Y[1],H=Object(c.useState)("A valid value is required"),q=Object(O.a)(H,2),X=q[0],_=q[1],P=Object(c.useState)(!1),K=Object(O.a)(P,2),$=K[0],ee=K[1],te=Object(c.useState)(!1),ae=Object(O.a)(te,2),ce=ae[0],ie=ae[1],re=Object(c.useState)(!1),ne=Object(O.a)(re,2),se=ne[0],le=ne[1],oe=Object(c.useState)(!1),je=Object(O.a)(oe,2),de=je[0],be=je[1];return Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsxs)(h.a,{onSubmit:function(e){if(e.preventDefault(),E(!0),a&&s){var t=a.concat("+").concat(s);(function(){var e=Object(b.a)(j.a.mark((function e(){var a,c,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a={Authorization:"Bearer eyJhbGciOiJSUzUxMiIsImN0eSI6IkpXVCIsImlzcyI6IkhFUkUiLCJhaWQiOiJMM0pCbkZ1emEyaURadzZFVUdWTSIsImlhdCI6MTYzMTg3ODM1MSwiZXhwIjoxNjMxOTY0NzUxLCJraWQiOiJqMSJ9.ZXlKaGJHY2lPaUprYVhJaUxDSmxibU1pT2lKQk1qVTJRMEpETFVoVE5URXlJbjAuLnA3S3FCVHZ4cmQ5UDhMNnhpamtOVHcuS055UEhZVWVxenJGRURQZXJhOEVnand6bHhFalBSYjhIQW1JVG9CZjllQWVlN21xZGJkekNORjBzV0M1eEEzMG45b0dBNzZKSGgxbGQxaGl0dWIyVTYxNFRudU5MT1RyZm1GdG9tdE12OFMzN2thY0hkMF9SSExJZENtaHB1cVJERkVFeUV5eTFSQzhmemJVc3A4Y1ZRLjhUd3hYeFNFRUk5Qnh2c1RMZVFfdjJxQ29HQnZaV09JRUo5NTZqekd5c1U.FWlxvjHQNNhuEZWQotdjrTlcndvSw6Gvo80pI2R4wQM8ocG5mEkEA3dP7wTpSDXokM1s32ObvxNumdxymBjqw-c7ShM5HrFmUSackZJwOrGZZOyn7AirTa1bgLrbjpuCQNtRdfW6tym8b4w6xAoutD15awZP9eYwFOP0wzBRuQTcewBfQaZZCArbQrbCW_aDfl18hQdrcpO3B3PE8sddzqVO9Xx3MjTVUFhRM0LmiqY-vaxccfxGnqk2UYeQMOlVm_vnZC_pZQ8QVaph5VWnxCAoT5Z23vkSdiYzsCgBEZLkXJRuXj1vA_54r_0ZavEQQRlmT8Uz3LOv2_xJy-fM_w"},e.next=4,fetch("https://geocode.search.hereapi.com/v1/geocode?q=".concat(t),{headers:a});case 4:return c=e.sent,e.next=7,c.json();case 7:i=e.sent,U(Object(d.a)({},i)),E(!1),"[]"===JSON.stringify(i.items)&&(be(!0),U({})),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),le(!0),E(!1);case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}})()(),i(""),l("")}else ie(!0),E(!1)},children:[Object(Q.jsxs)("div",{className:"TextArea",children:[Object(Q.jsx)(u.a,{id:"location",labelText:"Location*",size:"lg",invalid:R,invalidText:I,helperText:"Input values only in alphabets - City/Town/Street.",placeholder:"Location",value:a,onChange:function(e){e.target.value.match(/^[a-zA-Z]+$/)?(F(!1),ee(!1)):(F(!0),L("Only letters allowed. No special characters or numbers"),ee(!0)),i(e.target.value)}})," ",Object(Q.jsx)("br",{})]}),Object(Q.jsx)("div",{className:"TextArea",children:Object(Q.jsx)(u.a,{id:"area-query",labelText:"Area*",size:"lg",invalid:B,invalidText:X,helperText:"Input values only in alphabets - Public places/Hotels/Restaurants.",placeholder:"Query: Area/Address",value:s,onChange:function(e){e.target.value.match(/^[a-zA-Z]+$/)?(D(!1),ee(!1)):(D(!0),_("Only letters allowed. No special characters or numbers"),ee(!0)),l(e.target.value)}})}),Object(Q.jsx)("br",{}),Object(Q.jsx)("div",{className:"CButtonArea",children:Object(Q.jsx)(x.a,{type:"submit",disabled:$,children:" Get Places Near You "})})]}),ce&&Object(Q.jsx)(p.a,{iconDescription:"Close notification",subtitle:Object(Q.jsx)("span",{children:"Location and Area input is empty. Please fill a valid Location and area"}),timeout:3e3,onClose:function(){ie(!1)},title:"Error Notification"}),se&&Object(Q.jsx)(p.a,{iconDescription:"Close notification",subtitle:Object(Q.jsx)("span",{children:"Server cannot be reached"}),timeout:3e3,onClose:function(){le(!1)},title:"Error Notification"}),de&&Object(Q.jsx)(p.a,{iconDescription:"Close notification",subtitle:Object(Q.jsx)("span",{children:"No data results available"}),timeout:3e3,onClose:function(){be(!1)},title:"Error Notification"}),Object(Q.jsx)(v.a,{active:C,description:"Active loading indicator",withOverlay:!0}),J.items&&Object(Q.jsx)("div",{className:"TableDisplay",children:J.items&&Object(Q.jsx)(m.a,{rows:J.items,headers:[{key:"name",header:"Name"},{key:"address",header:"Address"},{key:"location",header:"Location"}],children:function(e){e.rows;var t=e.headers,a=e.getHeaderProps;return Object(Q.jsx)(S.a,{title:"Search Results",children:Object(Q.jsxs)(f.a,{children:[Object(Q.jsx)(Z.a,{children:Object(Q.jsx)(N.a,{children:t.map((function(e){return Object(Q.jsx)(T.a,Object(d.a)(Object(d.a)({},a({header:e})),{},{children:e.header}))}))})}),Object(Q.jsx)(y.a,{children:J.items&&J.items.map((function(e,t){return Object(Q.jsxs)(N.a,{children:[Object(Q.jsx)(V.a,{children:e.title}),Object(Q.jsx)(V.a,{children:e.address.label}),Object(Q.jsx)(V.a,{children:e.position.lat+","+e.position.lng})]},t)}))})]})})}})})]})};var k=function(){var e=Object(c.useState)(""),t=Object(O.a)(e,2),a=t[0],i=t[1],r=Object(c.useState)(""),n=Object(O.a)(r,2),s=n[0],l=n[1],o=Object(c.useState)(""),M=Object(O.a)(o,2),J=M[0],U=M[1],k=Object(c.useState)({}),w=Object(O.a)(k,2),C=w[0],E=w[1],g=Object(c.useState)(!1),A=Object(O.a)(g,2),R=A[0],F=A[1],z=Object(c.useState)(!1),G=Object(O.a)(z,2),I=G[0],L=G[1],W=Object(c.useState)(!1),Y=Object(O.a)(W,2),B=Y[0],D=Y[1],H=Object(c.useState)(!1),q=Object(O.a)(H,2),X=q[0],_=q[1],P=Object(c.useState)("A valid value is required"),K=Object(O.a)(P,2),$=K[0],ee=K[1],te=Object(c.useState)("A valid value is required"),ae=Object(O.a)(te,2),ce=ae[0],ie=ae[1],re=Object(c.useState)("A valid value is required"),ne=Object(O.a)(re,2),se=ne[0],le=ne[1],oe=Object(c.useState)(!1),je=Object(O.a)(oe,2),de=je[0],be=je[1],Oe=Object(c.useState)(!1),he=Object(O.a)(Oe,2),ue=he[0],xe=he[1],pe=Object(c.useState)(!1),ve=Object(O.a)(pe,2),me=ve[0],Se=ve[1],fe=Object(c.useState)(!1),Ze=Object(O.a)(fe,2),Ne=Ze[0],Te=Ze[1];return Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsxs)(h.a,{onSubmit:function(e){if(e.preventDefault(),F(!0),a&&s&&J){var t=a.concat(",").concat(s);(function(){var e=Object(b.a)(j.a.mark((function e(){var a,c,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a={Authorization:"Bearer eyJhbGciOiJSUzUxMiIsImN0eSI6IkpXVCIsImlzcyI6IkhFUkUiLCJhaWQiOiJMM0pCbkZ1emEyaURadzZFVUdWTSIsImlhdCI6MTYzMTg3ODM1MSwiZXhwIjoxNjMxOTY0NzUxLCJraWQiOiJqMSJ9.ZXlKaGJHY2lPaUprYVhJaUxDSmxibU1pT2lKQk1qVTJRMEpETFVoVE5URXlJbjAuLnA3S3FCVHZ4cmQ5UDhMNnhpamtOVHcuS055UEhZVWVxenJGRURQZXJhOEVnand6bHhFalBSYjhIQW1JVG9CZjllQWVlN21xZGJkekNORjBzV0M1eEEzMG45b0dBNzZKSGgxbGQxaGl0dWIyVTYxNFRudU5MT1RyZm1GdG9tdE12OFMzN2thY0hkMF9SSExJZENtaHB1cVJERkVFeUV5eTFSQzhmemJVc3A4Y1ZRLjhUd3hYeFNFRUk5Qnh2c1RMZVFfdjJxQ29HQnZaV09JRUo5NTZqekd5c1U.FWlxvjHQNNhuEZWQotdjrTlcndvSw6Gvo80pI2R4wQM8ocG5mEkEA3dP7wTpSDXokM1s32ObvxNumdxymBjqw-c7ShM5HrFmUSackZJwOrGZZOyn7AirTa1bgLrbjpuCQNtRdfW6tym8b4w6xAoutD15awZP9eYwFOP0wzBRuQTcewBfQaZZCArbQrbCW_aDfl18hQdrcpO3B3PE8sddzqVO9Xx3MjTVUFhRM0LmiqY-vaxccfxGnqk2UYeQMOlVm_vnZC_pZQ8QVaph5VWnxCAoT5Z23vkSdiYzsCgBEZLkXJRuXj1vA_54r_0ZavEQQRlmT8Uz3LOv2_xJy-fM_w"},e.next=4,fetch("https://discover.search.hereapi.com/v1/discover?q=".concat(J,"&at=").concat(t),{headers:a});case 4:return c=e.sent,e.next=7,c.json();case 7:i=e.sent,E(Object(d.a)({},i)),F(!1),"[]"===JSON.stringify(i.items)&&(Te(!0),E({})),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),Se(!0),F(!1);case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}})()(),i(""),l(""),U("")}else xe(!0),F(!1)},children:[Object(Q.jsxs)("div",{className:"TextArea",children:[Object(Q.jsx)(u.a,{id:"latitude",labelText:"Latitude*",size:"lg",invalid:I,invalidText:ce,helperText:"Add valid co-ordinates.",placeholder:"Latitude",value:a,onChange:function(e){e.target.value.match(/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?){2}$/)?(L(!1),be(!1)):(L(!0),ie("Only valid co-ordinates allowed. No characters"),be(!0)),i(e.target.value)}}),Object(Q.jsx)("br",{})]}),Object(Q.jsxs)("div",{className:"TextArea",children:[Object(Q.jsx)(u.a,{id:"longitude",labelText:"Longitude*",size:"lg",invalid:B,invalidText:se,helperText:"Add valid co-ordinates.",placeholder:"Longitude",value:s,onChange:function(e){e.target.value.match(/^\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?){2}$/)?(D(!1),be(!1)):(D(!0),le("Only valid co-ordinates allowed. No characters"),be(!0)),l(e.target.value)}}),Object(Q.jsx)("br",{})]}),Object(Q.jsx)("div",{className:"TextArea",children:Object(Q.jsx)(u.a,{id:"area-query",labelText:"Area*",size:"lg",invalid:X,invalidText:$,helperText:"Input values only in alphabets - Public places/Hotels/Restaurants.",placeholder:"Query: Area/Address",value:J,onChange:function(e){e.target.value.match(/^[a-zA-Z]+$/)?(_(!1),be(!1)):(_(!0),ee("Only letters allowed. No special characters or numbers"),be(!0)),U(e.target.value)}})}),Object(Q.jsx)("br",{}),Object(Q.jsx)("div",{className:"CButtonArea",children:Object(Q.jsx)(x.a,{type:"submit",disabled:de,children:" Get Places Near You "})})]}),ue&&Object(Q.jsx)(p.a,{iconDescription:"Close notification",subtitle:Object(Q.jsx)("span",{children:"Latitude, Longitude, Area values cannot be empty"}),timeout:3e3,onClose:function(){xe(!1)},title:"Error Notification"}),me&&Object(Q.jsx)(p.a,{iconDescription:"Close notification",subtitle:Object(Q.jsx)("span",{children:"Server cannot be reached"}),timeout:3e3,onClose:function(){Se(!1)},title:"Error Notification"}),Ne&&Object(Q.jsx)(p.a,{iconDescription:"Close notification",subtitle:Object(Q.jsx)("span",{children:"No data results available"}),timeout:3e3,onClose:function(){Te(!1)},title:"Error Notification"}),Object(Q.jsx)(v.a,{active:R,description:"Active loading indicator",withOverlay:!0}),C.items&&Object(Q.jsx)("div",{className:"TableDisplay",children:C.items&&Object(Q.jsx)(m.a,{rows:C.items,headers:[{key:"name",header:"Name"},{key:"address",header:"Address"},{key:"location",header:"Location"}],children:function(e){e.rows;var t=e.headers,a=e.getHeaderProps;return Object(Q.jsx)(S.a,{title:"Search Results",children:Object(Q.jsxs)(f.a,{children:[Object(Q.jsx)(Z.a,{children:Object(Q.jsx)(N.a,{children:t.map((function(e){return Object(Q.jsx)(T.a,Object(d.a)(Object(d.a)({},a({header:e})),{},{children:e.header}))}))})}),Object(Q.jsx)(y.a,{children:C.items&&C.items.map((function(e,t){return Object(Q.jsxs)(N.a,{children:[Object(Q.jsx)(V.a,{children:e.title}),Object(Q.jsx)(V.a,{children:e.address.label}),Object(Q.jsx)(V.a,{children:e.position.lat+","+e.position.lng})]},t)}))})]})})}})})]})};var w=function(){var e=Object(c.useState)(""),t=Object(O.a)(e,2),a=t[0],i=t[1],r=Object(c.useState)({}),n=Object(O.a)(r,2),s=n[0],l=n[1],o=Object(c.useState)(!1),M=Object(O.a)(o,2),J=M[0],U=M[1],k=Object(c.useState)("A valid value is required"),w=Object(O.a)(k,2),C=w[0],E=w[1],g=Object(c.useState)(!1),A=Object(O.a)(g,2),R=A[0],F=A[1],z=Object(c.useState)(!1),G=Object(O.a)(z,2),I=G[0],L=G[1],W=Object(c.useState)(!1),Y=Object(O.a)(W,2),B=Y[0],D=Y[1],H=Object(c.useState)(!1),q=Object(O.a)(H,2),X=q[0],_=q[1],P=Object(c.useState)(!1),K=Object(O.a)(P,2),$=K[0],ee=K[1];return Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsxs)(h.a,{onSubmit:function(e){(e.preventDefault(),L(!0),a)?(function(){var e=Object(b.a)(j.a.mark((function e(){var t,c,i,r,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={Authorization:"Bearer eyJhbGciOiJSUzUxMiIsImN0eSI6IkpXVCIsImlzcyI6IkhFUkUiLCJhaWQiOiJMM0pCbkZ1emEyaURadzZFVUdWTSIsImlhdCI6MTYzMTg3ODM1MSwiZXhwIjoxNjMxOTY0NzUxLCJraWQiOiJqMSJ9.ZXlKaGJHY2lPaUprYVhJaUxDSmxibU1pT2lKQk1qVTJRMEpETFVoVE5URXlJbjAuLnA3S3FCVHZ4cmQ5UDhMNnhpamtOVHcuS055UEhZVWVxenJGRURQZXJhOEVnand6bHhFalBSYjhIQW1JVG9CZjllQWVlN21xZGJkekNORjBzV0M1eEEzMG45b0dBNzZKSGgxbGQxaGl0dWIyVTYxNFRudU5MT1RyZm1GdG9tdE12OFMzN2thY0hkMF9SSExJZENtaHB1cVJERkVFeUV5eTFSQzhmemJVc3A4Y1ZRLjhUd3hYeFNFRUk5Qnh2c1RMZVFfdjJxQ29HQnZaV09JRUo5NTZqekd5c1U.FWlxvjHQNNhuEZWQotdjrTlcndvSw6Gvo80pI2R4wQM8ocG5mEkEA3dP7wTpSDXokM1s32ObvxNumdxymBjqw-c7ShM5HrFmUSackZJwOrGZZOyn7AirTa1bgLrbjpuCQNtRdfW6tym8b4w6xAoutD15awZP9eYwFOP0wzBRuQTcewBfQaZZCArbQrbCW_aDfl18hQdrcpO3B3PE8sddzqVO9Xx3MjTVUFhRM0LmiqY-vaxccfxGnqk2UYeQMOlVm_vnZC_pZQ8QVaph5VWnxCAoT5Z23vkSdiYzsCgBEZLkXJRuXj1vA_54r_0ZavEQQRlmT8Uz3LOv2_xJy-fM_w"},e.next=4,fetch("https://geocode.search.hereapi.com/v1/geocode?q=".concat(a),{headers:t});case 4:return c=e.sent,e.next=7,c.json();case 7:return i=e.sent,r=i.items[0].position.lat.toString(),n=i.items[0].position.lng.toString(),e.next=12,fetch("https://weather.cc.api.here.com/weather/1.0/report.json?product=forecast_7days_simple&latitude=".concat(r,"&longitude=").concat(n),{headers:t});case 12:return c=e.sent,e.next=15,c.json();case 15:i=e.sent,l(Object(d.a)({},i)),L(!1),"[]"===JSON.stringify(i.dailyForecasts)&&(ee(!0),l({})),e.next=25;break;case 21:e.prev=21,e.t0=e.catch(0),_(!0),L(!1);case 25:case"end":return e.stop()}}),e,null,[[0,21]])})));return function(){return e.apply(this,arguments)}}()(),i("")):(D(!0),L(!1))},children:[Object(Q.jsx)(u.a,{id:"location",labelText:"Location*",size:"lg",invalid:J,invalidText:C,helperText:"Input values only in alphabets - City/Town/Street.",placeholder:"Location",value:a,onChange:function(e){e.target.value.match(/^[a-zA-Z]+$/)?(U(!1),F(!1)):(U(!0),E("Only letters allowed. No special characters or numbers"),F(!0)),i(e.target.value)}}),Object(Q.jsx)("br",{}),Object(Q.jsx)("div",{className:"ButtonArea",children:Object(Q.jsx)(x.a,{type:"submit",disabled:R,children:" Get Weather Forecast "})})]}),B&&Object(Q.jsx)(p.a,{iconDescription:"Close notification",subtitle:Object(Q.jsx)("span",{children:"Location input is empty. Please fill a valid Location"}),timeout:3e3,onClose:function(){D(!1)},title:"Error Notification"}),X&&Object(Q.jsx)(p.a,{iconDescription:"Close notification",subtitle:Object(Q.jsx)("span",{children:"Server cannot be reached"}),timeout:3e3,onClose:function(){_(!1)},title:"Error Notification"}),$&&Object(Q.jsx)(p.a,{iconDescription:"Close notification",subtitle:Object(Q.jsx)("span",{children:"No results available"}),timeout:3e3,onClose:function(){ee(!1)},title:"Error Notification"}),Object(Q.jsx)(v.a,{active:I,description:"Active loading indicator",withOverlay:!0}),s.dailyForecasts&&Object(Q.jsx)("div",{className:"TableDisplay",children:s.dailyForecasts&&Object(Q.jsx)(m.a,{rows:s.dailyForecasts.forecastLocation.forecast,headers:[{key:"day",header:"Day"},{key:"description",header:"Description"},{key:"max temperature",header:"Max Temperature"},{key:"min temperature",header:"Min Temperature"},{key:"weathericon",header:""}],children:function(e){e.rows;var t=e.headers,a=e.getHeaderProps;return Object(Q.jsx)(S.a,{title:"Weather Results",children:Object(Q.jsxs)(f.a,{children:[Object(Q.jsx)(Z.a,{children:Object(Q.jsx)(N.a,{children:t.map((function(e){return Object(Q.jsx)(T.a,Object(d.a)(Object(d.a)({},a({header:e})),{},{children:e.header}))}))})}),Object(Q.jsx)(y.a,{children:s.dailyForecasts&&s.dailyForecasts.forecastLocation.forecast.map((function(e,t){return Object(Q.jsxs)(N.a,{children:[Object(Q.jsx)(V.a,{children:e.weekday}),Object(Q.jsx)(V.a,{children:e.description}),Object(Q.jsx)(V.a,{children:e.highTemperature}),Object(Q.jsx)(V.a,{children:e.lowTemperature}),Object(Q.jsx)(V.a,{children:Object(Q.jsx)("img",{src:e.iconLink,alt:"Logo"})})]},t)}))})]})})}})})]})};var C=function(){var e=Object(c.useState)(""),t=Object(O.a)(e,2),a=t[0],i=t[1],r=Object(c.useState)(""),n=Object(O.a)(r,2),s=n[0],l=n[1],o=Object(c.useState)({}),M=Object(O.a)(o,2),J=M[0],U=M[1],k=Object(c.useState)(!1),w=Object(O.a)(k,2),C=w[0],E=w[1],g=Object(c.useState)(!1),A=Object(O.a)(g,2),R=A[0],F=A[1],z=Object(c.useState)(!1),G=Object(O.a)(z,2),I=G[0],L=G[1],W=Object(c.useState)("A valid value is required"),Y=Object(O.a)(W,2),B=Y[0],D=Y[1],H=Object(c.useState)("A valid value is required"),q=Object(O.a)(H,2),X=q[0],_=q[1],P=Object(c.useState)(!1),K=Object(O.a)(P,2),$=K[0],ee=K[1],te=Object(c.useState)(!1),ae=Object(O.a)(te,2),ce=ae[0],ie=ae[1],re=Object(c.useState)(!1),ne=Object(O.a)(re,2),se=ne[0],le=ne[1],oe=Object(c.useState)(!1),je=Object(O.a)(oe,2),de=je[0],be=je[1];return Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsxs)(h.a,{onSubmit:function(e){(e.preventDefault(),E(!0),a&&s)?(function(){var e=Object(b.a)(j.a.mark((function e(){var t,c,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={Authorization:"Bearer eyJhbGciOiJSUzUxMiIsImN0eSI6IkpXVCIsImlzcyI6IkhFUkUiLCJhaWQiOiJMM0pCbkZ1emEyaURadzZFVUdWTSIsImlhdCI6MTYzMTg3ODM1MSwiZXhwIjoxNjMxOTY0NzUxLCJraWQiOiJqMSJ9.ZXlKaGJHY2lPaUprYVhJaUxDSmxibU1pT2lKQk1qVTJRMEpETFVoVE5URXlJbjAuLnA3S3FCVHZ4cmQ5UDhMNnhpamtOVHcuS055UEhZVWVxenJGRURQZXJhOEVnand6bHhFalBSYjhIQW1JVG9CZjllQWVlN21xZGJkekNORjBzV0M1eEEzMG45b0dBNzZKSGgxbGQxaGl0dWIyVTYxNFRudU5MT1RyZm1GdG9tdE12OFMzN2thY0hkMF9SSExJZENtaHB1cVJERkVFeUV5eTFSQzhmemJVc3A4Y1ZRLjhUd3hYeFNFRUk5Qnh2c1RMZVFfdjJxQ29HQnZaV09JRUo5NTZqekd5c1U.FWlxvjHQNNhuEZWQotdjrTlcndvSw6Gvo80pI2R4wQM8ocG5mEkEA3dP7wTpSDXokM1s32ObvxNumdxymBjqw-c7ShM5HrFmUSackZJwOrGZZOyn7AirTa1bgLrbjpuCQNtRdfW6tym8b4w6xAoutD15awZP9eYwFOP0wzBRuQTcewBfQaZZCArbQrbCW_aDfl18hQdrcpO3B3PE8sddzqVO9Xx3MjTVUFhRM0LmiqY-vaxccfxGnqk2UYeQMOlVm_vnZC_pZQ8QVaph5VWnxCAoT5Z23vkSdiYzsCgBEZLkXJRuXj1vA_54r_0ZavEQQRlmT8Uz3LOv2_xJy-fM_w"},e.next=4,fetch("https://weather.cc.api.here.com/weather/1.0/report.json?product=forecast_7days_simple&latitude=".concat(a,"&longitude=").concat(s),{headers:t});case 4:return c=e.sent,e.next=7,c.json();case 7:i=e.sent,U(Object(d.a)({},i)),E(!1),"[]"===JSON.stringify(i.dailyForecasts)&&(be(!0),U({})),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),le(!0),E(!1);case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}()(),i(""),l("")):(ie(!0),E(!1))},children:[Object(Q.jsxs)("div",{className:"TextArea",children:[Object(Q.jsx)(u.a,{id:"latitude",labelText:"Latitude*",size:"lg",invalid:R,invalidText:B,helperText:"Add valid co-ordinates.",placeholder:"Latitude",value:a,onChange:function(e){e.target.value.match(/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?){2}$/)?(F(!1),ee(!1)):(F(!0),D("Only valid co-ordinates allowed. No characters"),ee(!0)),i(e.target.value)}})," ",Object(Q.jsx)("br",{})]}),Object(Q.jsx)("div",{className:"TextArea",children:Object(Q.jsx)(u.a,{id:"longitude",labelText:"Longitude*",size:"lg",invalid:I,invalidText:X,helperText:"Add valid co-ordinates.",placeholder:"Longitude",value:s,onChange:function(e){e.target.value.match(/^\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?){2}$/)?(L(!1),ee(!1)):(L(!0),_("Only valid co-ordinates allowed. No characters"),ee(!0)),l(e.target.value)}})}),Object(Q.jsx)("br",{}),Object(Q.jsx)("div",{className:"CButtonArea",children:Object(Q.jsx)(x.a,{type:"submit",disabled:$,children:" Get Weather Forecast "})})]}),ce&&Object(Q.jsx)(p.a,{iconDescription:"Close notification",subtitle:Object(Q.jsx)("span",{children:"Latitude, Longitude values cannot be empty"}),timeout:3e3,onClose:function(){ie(!1)},title:"Error Notification"}),se&&Object(Q.jsx)(p.a,{iconDescription:"Close notification",subtitle:Object(Q.jsx)("span",{children:"Server cannot be reached"}),timeout:3e3,onClose:function(){le(!1)},title:"Error Notification"}),de&&Object(Q.jsx)(p.a,{iconDescription:"Close notification",subtitle:Object(Q.jsx)("span",{children:"No data results available"}),timeout:3e3,onClose:function(){be(!1)},title:"Error Notification"}),Object(Q.jsx)(v.a,{active:C,description:"Active loading indicator",withOverlay:!0}),J.dailyForecasts&&Object(Q.jsx)("div",{className:"TableDisplay",children:J.dailyForecasts&&Object(Q.jsx)(m.a,{rows:J.dailyForecasts.forecastLocation.forecast,headers:[{key:"day",header:"Day"},{key:"description",header:"Description"},{key:"max temperature",header:"Max Temperature"},{key:"min temperature",header:"Min Temperature"},{key:"weathericon",header:""}],children:function(e){e.rows;var t=e.headers,a=e.getHeaderProps;return Object(Q.jsx)(S.a,{title:"Weather Results",children:Object(Q.jsxs)(f.a,{children:[Object(Q.jsx)(Z.a,{children:Object(Q.jsx)(N.a,{children:t.map((function(e){return Object(Q.jsx)(T.a,Object(d.a)(Object(d.a)({},a({header:e})),{},{children:e.header}))}))})}),Object(Q.jsx)(y.a,{children:J.dailyForecasts&&J.dailyForecasts.forecastLocation.forecast.map((function(e,t){return Object(Q.jsxs)(N.a,{children:[Object(Q.jsx)(V.a,{children:e.weekday}),Object(Q.jsx)(V.a,{children:e.description}),Object(Q.jsx)(V.a,{children:e.highTemperature}),Object(Q.jsx)(V.a,{children:e.lowTemperature}),Object(Q.jsx)(V.a,{children:Object(Q.jsx)("img",{src:e.iconLink,alt:"Logo"})})]},t)}))})]})})}})})]})};var E=function(){var e=Object(c.useState)(""),t=Object(O.a)(e,2),a=t[0],i=t[1],r=Object(c.useState)(""),n=Object(O.a)(r,2),s=n[0],l=n[1],o=Object(c.useState)({}),M=Object(O.a)(o,2),J=M[0],U=M[1],k=Object(c.useState)(!1),w=Object(O.a)(k,2),C=w[0],E=w[1],g=Object(c.useState)("A valid value is required"),A=Object(O.a)(g,2),R=A[0],F=A[1],z=Object(c.useState)(!1),G=Object(O.a)(z,2),I=G[0],L=G[1],W=Object(c.useState)(!1),Y=Object(O.a)(W,2),B=Y[0],D=Y[1],H=Object(c.useState)(!1),q=Object(O.a)(H,2),X=q[0],_=q[1],P=Object(c.useState)(!1),K=Object(O.a)(P,2),$=K[0],ee=K[1];return Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsxs)(h.a,{onSubmit:function(e){(e.preventDefault(),D(!0),a)?(function(){var e=Object(b.a)(j.a.mark((function e(){var t,c,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={Authorization:"Bearer eyJhbGciOiJSUzUxMiIsImN0eSI6IkpXVCIsImlzcyI6IkhFUkUiLCJhaWQiOiJMM0pCbkZ1emEyaURadzZFVUdWTSIsImlhdCI6MTYzMTg3ODM1MSwiZXhwIjoxNjMxOTY0NzUxLCJraWQiOiJqMSJ9.ZXlKaGJHY2lPaUprYVhJaUxDSmxibU1pT2lKQk1qVTJRMEpETFVoVE5URXlJbjAuLnA3S3FCVHZ4cmQ5UDhMNnhpamtOVHcuS055UEhZVWVxenJGRURQZXJhOEVnand6bHhFalBSYjhIQW1JVG9CZjllQWVlN21xZGJkekNORjBzV0M1eEEzMG45b0dBNzZKSGgxbGQxaGl0dWIyVTYxNFRudU5MT1RyZm1GdG9tdE12OFMzN2thY0hkMF9SSExJZENtaHB1cVJERkVFeUV5eTFSQzhmemJVc3A4Y1ZRLjhUd3hYeFNFRUk5Qnh2c1RMZVFfdjJxQ29HQnZaV09JRUo5NTZqekd5c1U.FWlxvjHQNNhuEZWQotdjrTlcndvSw6Gvo80pI2R4wQM8ocG5mEkEA3dP7wTpSDXokM1s32ObvxNumdxymBjqw-c7ShM5HrFmUSackZJwOrGZZOyn7AirTa1bgLrbjpuCQNtRdfW6tym8b4w6xAoutD15awZP9eYwFOP0wzBRuQTcewBfQaZZCArbQrbCW_aDfl18hQdrcpO3B3PE8sddzqVO9Xx3MjTVUFhRM0LmiqY-vaxccfxGnqk2UYeQMOlVm_vnZC_pZQ8QVaph5VWnxCAoT5Z23vkSdiYzsCgBEZLkXJRuXj1vA_54r_0ZavEQQRlmT8Uz3LOv2_xJy-fM_w"},e.next=4,fetch("https://weather.cc.api.here.com/weather/1.0/report.json?product=alerts&name=".concat(a),{headers:t});case 4:return c=e.sent,e.next=7,c.json();case 7:i=e.sent,"[]"!==JSON.stringify(i.alerts.alerts)?l(i.alerts.alerts[0].description):l("No Severe Weather"),U(Object(d.a)({},i)),D(!1),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),ee(!0),D(!1);case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}()(),i("")):(_(!0),D(!1))},children:[Object(Q.jsx)(u.a,{id:"location",labelText:"Location*",size:"lg",invalid:C,invalidText:R,helperText:"Input values only in alphabets - City/Town/Street.",placeholder:"Location",value:a,onChange:function(e){e.target.value.match(/^[a-zA-Z]+$/)?(E(!1),L(!1)):(E(!0),F("Only letters allowed. No special characters or numbers"),L(!0)),i(e.target.value)}}),Object(Q.jsx)("br",{}),Object(Q.jsx)("div",{className:"ButtonArea",children:Object(Q.jsx)(x.a,{type:"submit",disabled:I,children:" Get Extreme Weather Warning "})})]}),X&&Object(Q.jsx)(p.a,{iconDescription:"Close notification",subtitle:Object(Q.jsx)("span",{children:"Location input is empty. Please fill a valid Location"}),timeout:3e3,onClose:function(){_(!1)},title:"Error Notification"}),$&&Object(Q.jsx)(p.a,{iconDescription:"Close notification",subtitle:Object(Q.jsx)("span",{children:"Server cannot be reached"}),timeout:3e3,onClose:function(){ee(!1)},title:"Error Notification"}),Object(Q.jsx)(v.a,{active:B,description:"Active loading indicator",withOverlay:!0}),J.alerts&&Object(Q.jsx)("div",{className:"TableDisplay",children:J.alerts&&Object(Q.jsx)(m.a,{rows:J.alerts.alerts,headers:[{key:"country",header:"Country"},{key:"state",header:"State"},{key:"latitude",header:"Latitude"},{key:"longitude",header:"Longitude"},{key:"alert",header:"Alert"}],children:function(e){e.rows;var t=e.headers,a=e.getHeaderProps;return Object(Q.jsx)(S.a,{title:"Alerts Result",children:Object(Q.jsxs)(f.a,{children:[Object(Q.jsx)(Z.a,{children:Object(Q.jsx)(N.a,{children:t.map((function(e){return Object(Q.jsx)(T.a,Object(d.a)(Object(d.a)({},a({header:e})),{},{children:e.header}))}))})}),Object(Q.jsx)(y.a,{children:J.alerts&&Object(Q.jsxs)(N.a,{children:[Object(Q.jsx)(V.a,{children:J.alerts.country}),Object(Q.jsx)(V.a,{children:J.alerts.state}),Object(Q.jsx)(V.a,{children:J.alerts.latitude}),Object(Q.jsx)(V.a,{children:J.alerts.longitude}),Object(Q.jsx)(V.a,{children:s})]})})]})})}})})]})};var g=function(){return Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)(l.Header,{"aria-label":"IBM",children:Object(Q.jsx)(l.HeaderName,{href:"#",prefix:"",children:Object(Q.jsx)("div",{Style:"white-space: nowrap;",children:"HERE Geocoding Sample Application"})})}),Object(Q.jsx)("div",{className:"App",children:Object(Q.jsxs)("div",{className:"AppContent",children:[Object(Q.jsx)("br",{}),Object(Q.jsx)("br",{}),Object(Q.jsx)("br",{}),Object(Q.jsx)("br",{}),Object(Q.jsx)("h2",{children:"Location Details"}),Object(Q.jsx)("br",{}),Object(Q.jsx)("br",{}),Object(Q.jsxs)(n.a,{type:"container",children:[Object(Q.jsx)(s.a,{id:"tab-g1",label:"Get Co-ordinates",children:Object(Q.jsx)("div",{className:"TabArea",children:Object(Q.jsx)(M,{})})}),Object(Q.jsx)(s.a,{id:"tab-g2",label:"Get Area",children:Object(Q.jsx)("div",{className:"TabArea",children:Object(Q.jsx)(J,{})})})]}),Object(Q.jsx)("h2",{children:"Search Services"}),Object(Q.jsx)("br",{}),Object(Q.jsx)("br",{}),Object(Q.jsxs)(n.a,{type:"container",children:[Object(Q.jsx)(s.a,{id:"tab-s1",label:"By Area",children:Object(Q.jsx)("div",{className:"TabArea",children:Object(Q.jsx)(U,{})})}),Object(Q.jsx)(s.a,{id:"tab-s2",label:"By Co-ordinates",children:Object(Q.jsx)("div",{className:"TabArea",children:Object(Q.jsx)(k,{})})})]}),Object(Q.jsx)("h2",{children:" Weather Services "}),Object(Q.jsx)("br",{}),Object(Q.jsx)("br",{}),Object(Q.jsxs)(n.a,{type:"container",children:[Object(Q.jsx)(s.a,{id:"tab-w1",label:"By Area",children:Object(Q.jsx)("div",{className:"TabArea",children:Object(Q.jsx)(w,{})})}),Object(Q.jsx)(s.a,{id:"tab-w2",label:"By Co-ordinates",children:Object(Q.jsx)("div",{className:"TabArea",children:Object(Q.jsx)(C,{})})})]}),Object(Q.jsx)("h2",{children:" Extreme Weather Warnings "}),Object(Q.jsx)("br",{}),Object(Q.jsx)("br",{}),Object(Q.jsx)(E,{}),Object(Q.jsx)("br",{})]})})]})};a(127),a(128);r.a.render(Object(Q.jsx)(g,{}),document.getElementById("root"))},81:function(e,t,a){}},[[129,1,2]]]);
//# sourceMappingURL=main.1404d16f.chunk.js.map