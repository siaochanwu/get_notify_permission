(this.webpackJsonpnotify=this.webpackJsonpnotify||[]).push([[0],{22:function(e,n,t){},23:function(e,n,t){},27:function(e,n,t){"use strict";t.r(n);var r=t(8),c=t.n(r),o=t(16),a=t.n(o),i=(t(22),t(23),t(10)),s=t.n(i),u=t(11),p=t(12);t(28),t(29);p.a.initializeApp({apiKey:"AIzaSyA0rmWTnaljWb-mnrN8gtwsIAEXoI_I0No",authDomain:"fcm-app-5d920.firebaseapp.com",projectId:"fcm-app-5d920",storageBucket:"fcm-app-5d920.appspot.com",messagingSenderId:"111323814801",appId:"1:111323814801:web:ba28c6d8e63b3f7a795830",measurementId:"G-QPLF5GJ8VX"});var f=p.a.messaging(),l=p.a.firestore(),d=l.collection("fcm"),b=function(){var e=Object(u.a)(s.a.mark((function e(n){var t,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="",e.prev=1,e.next=4,f.getToken({vapidKey:"BGe1Smk60RTmUk5Oy_2L0ppwvVmoHeHKMStyHXjC1Sxkb6yaz4b-_hFI1w5Afq7ArHKRwfvmJBn44d8IB-16_tw"});case 4:(t=e.sent)?(console.log(t),r=t.split("-")[0],d.doc(r).set({token:t}).then((function(e){console.log("Document written with ID: ",e)})).catch((function(e){console.error("Error adding document: ",e)})),n(!0)):(console.log("error in getToken"),n(!1)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log("An error occurred while retrieving token.",e.t0);case 11:return e.abrupt("return",t);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(n){return e.apply(this,arguments)}}(),m=t(17),h=t(5),j=function(e){var n=Object(r.useState)(!1),t=Object(m.a)(n,2),c=t[0],o=t[1];return console.log("token found:",c),Object(r.useEffect)((function(){var e;function n(){return(n=Object(u.a)(s.a.mark((function n(){return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,b(o);case 2:(e=n.sent)&&console.log("token is: ",e);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[o]),c?Object(h.jsx)("p",{children:"Get Token Done!"}):Object(h.jsx)("p",{children:"Fail to Get Permission"})};var g=function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{children:"HOLA!"}),Object(h.jsx)("p",{children:"YOU WILL GET THE SPECIAL MESSAGE!"}),Object(h.jsx)(j,{})]})},v=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,30)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,o=n.getLCP,a=n.getTTFB;t(e),r(e),c(e),o(e),a(e)}))};a.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(g,{})}),document.getElementById("root")),v()}},[[27,1,2]]]);
//# sourceMappingURL=main.90248237.chunk.js.map