(this["webpackJsonpcode-id-test"]=this["webpackJsonpcode-id-test"]||[]).push([[0],{103:function(t,e,a){t.exports={ErrorMessage:"AddContactModal_ErrorMessage__3V4E-",CancelButton:"AddContactModal_CancelButton__pRGB9",AddButton:"AddContactModal_AddButton__3dM6D"}},144:function(t,e,a){t.exports={ErrorModal:"ErrorModalContainer_ErrorModal__rKHdl",Header:"ErrorModalContainer_Header__1Ql4m"}},205:function(t,e,a){t.exports=a.p+"static/media/kontak-ku-logo.92c29ec2.webp"},238:function(t,e,a){t.exports=a(393)},243:function(t,e,a){},244:function(t,e,a){},26:function(t,e,a){t.exports={ContactContainer:"ContactDetailPage_ContactContainer__36iJ2",ContactDetail:"ContactDetailPage_ContactDetail__20IHB",Logo:"ContactDetailPage_Logo__2Eyvn",Name:"ContactDetailPage_Name__1LtRP",Age:"ContactDetailPage_Age__3S98p",Buttons:"ContactDetailPage_Buttons__1mFli"}},393:function(t,e,a){"use strict";a.r(e);var n,o,c=a(0),r=a.n(c),l=a(29),i=a.n(l),s=(a(243),a(244),a(44)),u=a(8),d=a(204),C=a(406),m=a(228),h=a(408),g=a(72),p=a.n(g),E=a(205),f=a.n(E),T=a(402),_=function(){return r.a.createElement(T.a,{active:!0,inline:"centered"})},O=function(t){return r.a.createElement("div",{className:p.a.ContactContainer},r.a.createElement(m.a,{src:f.a,className:p.a.Logo}),r.a.createElement(C.a,{selection:!0,divided:!0,verticalAlign:"middle",className:p.a.ContactList,size:"big"},t.isFetchingContact?r.a.createElement(_,null):function(){var e,a=[],n=Object(d.a)(t.contacts);try{var o=function(){var n=e.value;a.push(r.a.createElement(C.a.Item,{onClick:function(){return t.handleContactClick(n.id)}},r.a.createElement(m.a,{avatar:!0,src:n.photo}),r.a.createElement(C.a.Content,null,r.a.createElement(C.a.Header,null,n.firstName," ",n.lastName))))};for(n.s();!(e=n.n()).done;)o()}catch(c){n.e(c)}finally{n.f()}return a}()),r.a.createElement(h.a,{circular:!0,color:"violet",icon:"add user",className:p.a.Float,onClick:t.handleAddButtonClick}))},b=a(407);!function(t){t.POST="POST",t.PUT="PUT",t.GET="GET",t.DELETE="DELETE"}(n||(n={})),function(t){t.SENT="SENT",t.SUCCESSFUL="SUCCESSFUL",t.ERROR="ERROR"}(o||(o={}));var N=function(t,e){return{type:"UPDATE_HTTP_CALL_STATUS",payload:{callId:t,status:e}}},A=function(t){return{type:"ADD_NEW_HTTP_CALL",payload:t}},v=function(t,e,a){S(t).then((function(t){if(!t.ok&&a)throw t;return t})).then(y(e)).catch(j(a))},S=function(t){var e={method:t.method,credentials:t.credentials?t.credentials:void 0};return t.headers&&(e=Object.assign({},e,{headers:t.headers})),t.method!==n.POST&&t.method!==n.PUT||!t.requestBody||(e=Object.assign({},e,{body:t.requestBody})),fetch(t.url,e)},y=function(t){return function(e){t(e)}},j=function(t){return function(e){if(!t)throw e;t(e)}},D=function(t){return{type:"UPDATE_ERROR_MODAL",payload:t}},U=function(t){return{type:"UPDATE_FETCHING_CONTACT_STATUS",payload:t}},P=function(t){return{type:"UPDATE_STORING_CONTACT_STATUS",payload:t}},L=function(t){return{type:"UPDATE_FETCHING_CONTACT_DETAIL_STATUS",payload:t}},R=a(25),F=a(404),k=a(403),B=a(103),M=a.n(B),I=function(t){return r.a.createElement(F.a,{open:t.isAddContactModalOpen,size:"tiny"},r.a.createElement(F.a.Header,null,"Add New Contact"),r.a.createElement(F.a.Content,null,r.a.createElement(k.a,null,r.a.createElement(k.a.Input,{fluid:!0,label:"First Name",placeholder:"First Name",value:t.firstName,onChange:t.handleFirstNameChange}),r.a.createElement(k.a.Input,{fluid:!0,label:"Last Name",placeholder:"Last Name",value:t.lastName,onChange:t.handleLastNameChange}),r.a.createElement(k.a.Input,{fluid:!0,label:"Age",placeholder:"Age",type:"number",min:"0",value:t.age,onChange:t.handleAgeChange}),r.a.createElement(k.a.Input,{fluid:!0,label:"Photo (URL)",placeholder:"Last Name",value:t.photoUrl,onChange:t.handlePhotoUrlChange}),r.a.createElement("span",{className:M.a.ErrorMessage},t.errorMessage))),r.a.createElement(F.a.Actions,null,r.a.createElement(h.a,{color:"red",onClick:t.handleCancelButtonClick,className:M.a.CancelButton},"Cancel"),r.a.createElement(h.a,{color:"violet",onClick:t.handleAddContactButtonClick,className:M.a.AddButton,loading:t.isStoringContact},"Add")))},w=Object(R.b)((function(t){return{contacts:t.data.contacts,isFetchingContact:t.session.isFetchingContact,isStoringContact:t.session.isStoringContact}}))((function(t){var e=Object(R.c)(),a=t.contacts,l=t.isFetchingContact,i=t.isStoringContact,d=Object(c.useState)(!1),C=Object(s.a)(d,2),m=C[0],h=C[1],g=Object(c.useState)(""),p=Object(s.a)(g,2),E=p[0],f=p[1],T=Object(c.useState)(""),_=Object(s.a)(T,2),S=_[0],y=_[1],j=Object(c.useState)(1),L=Object(s.a)(j,2),F=L[0],k=L[1],B=Object(c.useState)(""),M=Object(s.a)(B,2),w=M[0],H=M[1],G=Object(c.useState)(""),x=Object(s.a)(G,2),W=x[0],q=x[1];Object(c.useEffect)((function(){e((function(t){var e=b.a(),a={id:e,method:n.GET,url:"https://simple-contact-crud.herokuapp.com/contact",headers:{"Content-Type":"application/json"}},c={isOpen:!0,title:"Unable to retrieve Contact List."};t(U(!0)),v(a,(function(a){a.body&&a.json().then((function(a){console.log("data: ",a),t(N(e,o.SUCCESSFUL)),t({type:"UPDATE_CONTACT_LIST",payload:a.data}),t(U(!1))}))}),(function(a){console.log("fail"),t(N(e,o.ERROR)),a.body?a.json().then((function(e){c.content=e.message,t(U(!1)),t(D(c))})).catch((function(e){c.content=e.message,t(U(!1)),t(D(c))})):c.content="Unable to retrieve Contact List. Please contact developer.",t(U(!1)),c.content&&t(D(c))}));var r=Object.assign({},a,{status:o.SENT});t(A(r))}))}),[e]);var J=Object(u.f)(),z=Object(c.useCallback)((function(){E.length<3?q("First Name length must be at least 3 characters long."):S.length<3?q("Last Name length must be at least 3 characters long."):F<1?q("Age must be larger than or equal to 1."):0===w.length?q("Photo (URL) is not allowed to be empty."):(e(function(t,e,a,c){return function(r){var l=b.a(),i={id:l,method:n.POST,url:"https://simple-contact-crud.herokuapp.com/contact",headers:{"Content-Type":"application/json"},requestBody:JSON.stringify({firstName:t,lastName:e,age:a,photo:c})},s={isOpen:!0,title:"Unable to store Contact."};r(P(!0)),v(i,(function(n){n.body&&n.json().then((function(){r(N(l,o.SUCCESSFUL)),r({type:"ADD_NEW_CONTACT",payload:{firstName:t,lastName:e,age:a,photo:c}}),r(P(!1))}))}),(function(t){r(N(l,o.ERROR)),t.body?t.json().then((function(t){s.content=t.message,r(P(!1)),r(D(s))})).catch((function(t){s.content=t.message,r(P(!1)),r(D(s))})):s.content="Unable to add Contact List. Please contact developer.",r(P(!1)),s.content&&r(D(s))}));var u=Object.assign({},i,{status:o.SENT});r(A(u))}}(E,S,F,w)),h(!1))}),[e,E,S,F,w]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,{contacts:a,isFetchingContact:l,handleContactClick:function(t){t&&J.push("/code-id-test/".concat(t))},handleAddButtonClick:function(){h(!0)}}),r.a.createElement(I,{isAddContactModalOpen:m,firstName:E,lastName:S,age:F,photoUrl:w,errorMessage:W,isStoringContact:i,handleFirstNameChange:function(t){f(t.currentTarget.value)},handleLastNameChange:function(t){y(t.currentTarget.value)},handleAgeChange:function(t){k(Number(t.currentTarget.value))},handlePhotoUrlChange:function(t){H(t.currentTarget.value)},handleCancelButtonClick:function(){h(!1)},handleAddContactButtonClick:z}))})),H=a(409),G=a(144),x=a.n(G),W=Object(R.b)((function(t){return{isOpen:t.control.errorModal.isOpen,title:t.control.errorModal.title,content:t.control.errorModal.content}}))((function(t){var e=function(){t.dispatch({type:"UPDATE_ERROR_MODAL",payload:{title:"",content:"",isOpen:!1}})};return r.a.createElement(F.a,{open:t.isOpen,onClose:e,size:"small",className:x.a.ErrorModal},r.a.createElement(H.a,{icon:"close",content:t.title?t.title:"Error",className:x.a.Header}),r.a.createElement(F.a.Content,null,t.content?t.content:"There is an error in the current operation. Please refresh your browser and try again."),r.a.createElement(F.a.Actions,null,r.a.createElement(h.a,{negative:!0,onClick:e},"Close")))})),q=a(26),J=a.n(q),z=function(t){return r.a.createElement("div",{className:J.a.ContactContainer},t.isFetchingContactDetail?r.a.createElement(_,null):r.a.createElement("div",{className:J.a.ContactDetail},r.a.createElement(m.a,{src:t.currentContact.photo,className:J.a.Logo}),r.a.createElement("span",{className:J.a.Name},t.currentContact.firstName.concat(" ").concat(t.currentContact.lastName)),r.a.createElement("span",{className:J.a.Age},t.currentContact.age," years old"),r.a.createElement("div",{className:J.a.Buttons},r.a.createElement(h.a,{className:J.a.Button,color:"blue",circular:!0,icon:"chevron left",onClick:t.handleButtonBackClick}),r.a.createElement(h.a,{className:J.a.Button,color:"orange",circular:!0,icon:"edit"}),r.a.createElement(h.a,{className:J.a.Button,color:"red",circular:!0,icon:"trash"}))))},Q=Object(R.b)((function(t){return{currentContact:t.control.currentContact,isFetchingContactDetail:t.session.isFetchingContactDetail}}))((function(t){var e=Object(R.c)(),a=Object(u.f)(),l=t.match.params.contactId,i=t.currentContact,s=t.isFetchingContactDetail;Object(c.useEffect)((function(){var t;e((t=l,function(e){var a="https://simple-contact-crud.herokuapp.com/contact/"+t,c=b.a(),r={id:c,method:n.GET,url:a,headers:{"Content-Type":"application/json"}},l={isOpen:!0,title:"Unable to retrieve Contact Detail."};e(L(!0)),v(r,(function(t){t.body&&t.json().then((function(t){console.log("data: ",t),e(N(c,o.SUCCESSFUL)),e({type:"UPDATE_CURRENT_CONTACT",payload:t.data}),e(L(!1))}))}),(function(t){e(N(c,o.ERROR)),t.body?t.json().then((function(t){l.content=t.message,e(L(!1)),e(D(l))})).catch((function(t){l.content=t.message,e(L(!1)),e(D(l))})):l.content="Unable to retrieve Contact Detail. Please contact developer.",e(L(!1)),l.content&&e(D(l))}));var i=Object.assign({},r,{status:o.SENT});e(A(i))}))}),[e,l]);return r.a.createElement(z,{currentContact:i,isFetchingContactDetail:s,handleButtonBackClick:function(){a.push("/code-id-test")}})}));var K=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/code-id-test/",component:w}),r.a.createElement(u.a,{exact:!0,path:"/code-id-test/:contactId",component:Q})),r.a.createElement(W,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var V=a(35),$=a(225),X=a(73),Y={contacts:[]},Z={httpCalls:[]},tt={currentContact:{id:"",firstName:"",lastName:"",age:0,photo:""},errorModal:{isOpen:!1},successfulModal:{isOpen:!1,title:"",content:""}},et={isFetchingContact:!1,isStoringContact:!1,isUpdatingContact:!1,isDeletingContact:!1,isFetchingContactDetail:!1},at=Object(V.combineReducers)({data:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"UPDATE_CONTACT_LIST":return Object.assign({},t,{contacts:e.payload});case"ADD_NEW_CONTACT":return Object.assign({},t,{contacts:[].concat(Object(X.a)(t.contacts),[e.payload])});default:return t}},control:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:tt,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"UPDATE_ERROR_MODAL":return Object.assign({},t,{errorModal:e.payload});case"UPDATE_CURRENT_CONTACT":return Object.assign({},t,{currentContact:e.payload});default:return t}},session:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:et,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"UPDATE_FETCHING_CONTACT_STATUS":return Object.assign({},t,{isFetchingContact:e.payload});case"UPDATE_STORING_CONTACT_STATUS":return Object.assign({},t,{isStoringContact:e.payload});case"UPDATE_FETCHING_CONTACT_DETAIL_STATUS":return Object.assign({},t,{isFetchingContactDetail:e.payload});default:return t}},communication:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_NEW_HTTP_CALL":return Object.assign({},t,{httpCalls:[].concat(Object(X.a)(t.httpCalls),[e.payload])});case"UPDATE_HTTP_CALL_STATUS":var a=t.httpCalls.findIndex((function(t){return t.id===e.payload.callId})),n=Object.assign({},t.httpCalls[a],{status:e.payload.status});return a>=0?Object.assign({},t,{httpCalls:[].concat(Object(X.a)(t.httpCalls.slice(0,a)),[n],Object(X.a)(t.httpCalls.slice(a+1)))}):t;default:return t}}}),nt=a(226),ot=a(227),ct=a(137),rt=Object($.createLogger)({level:"info",collapsed:!0,diff:!0}),lt=Object(ot.composeWithDevTools)({})(Object(V.applyMiddleware)(nt.a,rt)),it=Object(V.createStore)(at,lt);i.a.render(r.a.createElement(R.a,{store:it},r.a.createElement(ct.a,null,r.a.createElement(K,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},72:function(t,e,a){t.exports={ContactContainer:"HomePage_ContactContainer__3lw62",Float:"HomePage_Float__27EHr",Logo:"HomePage_Logo__1kSQc",ContactList:"HomePage_ContactList__2NkDc"}}},[[238,1,2]]]);
//# sourceMappingURL=main.ee4eaff2.chunk.js.map