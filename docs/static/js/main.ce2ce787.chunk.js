(this["webpackJsonpdraxo-test"]=this["webpackJsonpdraxo-test"]||[]).push([[0],{48:function(e,t,n){},49:function(e,t,n){},54:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(7),r=n.n(c),o=(n(48),n(39)),i=n(27),s=(n(49),n(3)),u=function(e){var t=e.name,n=e.url;return Object(s.jsxs)("div",{className:"card",children:[Object(s.jsx)("h2",{className:"card__title",children:t}),""===n||null===n?Object(s.jsx)("img",{src:"https://www.property24.co.mu/Content/Images/South%20Africa/ImageNotFound/NoPropertyPhoto.png",alt:t,width:"100%",height:"80%"}):Object(s.jsx)("img",{src:n,alt:t,width:"100%",height:"80%"})]})},d=n(30),l=n.n(d),j=n(33),h=function(){var e=Object(j.a)(l.a.mark((function e(){var t,n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://modern-houses-api-production.herokuapp.com/api/v1/houses/California",e.next=3,fetch("https://modern-houses-api-production.herokuapp.com/api/v1/houses/California");case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,a=Object.keys(n).filter((function(e){return/^[A-Z]*$/.test(e)})).reduce((function(e,t){return e[t]=n[t].slice(0,3),e}),{}),e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=n(80),m=n(84),b=n(85),x=n(83),O=n(82),f=n(86),g=n(38),y=n(35),N=n(36),v=n.n(N),w=(n(54),function(e){var t=e.text;return Object(s.jsxs)("div",{className:"pin",children:[Object(s.jsx)(y.Icon,{icon:v.a,className:"pin__icon"}),Object(s.jsx)("p",{className:"pin__text",children:t})]})}),k=function(e){var t=e.locations,n={address:t[0].address,lat:Number(t[0].location.latitude),lng:Number(t[0].location.longitude)};return Object(s.jsxs)("div",{className:"map",children:[Object(s.jsx)("h2",{className:"map__title",children:"Zoom in and enjoy"}),Object(s.jsx)("div",{className:"map__container",children:Object(s.jsx)(g.a,{bootstrapURLKeys:{key:"AIzaSyCmSnqHEhM6XqlBNoc28pkl8JhyEiyGFNA"},center:n,defaultZoom:9,yesIWantToUseGoogleMapApiInternals:!0,onGoogleApiLoaded:function(e){e.map,e.maps},children:t.map((function(e,t){return Object(s.jsx)(w,{lat:Number(e.location.latitude),lng:Number(e.location.longitude),text:String(e.name)},t)}))})})]})},_=Object(p.a)((function(e){return{root:{"max-width":"1366px",width:"100%",margin:"0 auto"},heading:{fontSize:e.typography.pxToRem(15),fontWeight:e.typography.fontWeightRegular},MuiAccordionSummary:{padding:"1em",background:"#2c3e50","font-weight":"bold",cursor:"pointer",color:"white"}}})),A=function(){var e=_(),t=Object(a.useState)(0),n=Object(i.a)(t,2),c=n[0],r=n[1],d=function(){var e=Object(a.useState)({data:{},loading:!0}),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){h().then((function(e){c({data:e,loading:!1})}))}),[]),n}(),l=d.data,j=d.loading;return Object(s.jsxs)(s.Fragment,{children:[j&&Object(s.jsx)("p",{children:"Loading..."}),Object(s.jsx)("hr",{}),Object(s.jsx)("div",{className:e.root,children:Object.keys(l).sort().map((function(t,n){return Object(s.jsxs)(m.a,{expanded:n===c,onChange:function(){r(n===c?-1:n)},children:[Object(s.jsx)(b.a,{className:e.MuiAccordionSummary,"aria-controls":"panel1a-content",id:"panel1a-header",expandIcon:Object(s.jsx)(f.a,{}),children:Object(s.jsx)(O.a,{className:e.heading,children:t})}),Object(s.jsx)(x.a,{children:l[t].map((function(e,t){return Object(s.jsx)(u,Object(o.a)({},e),"element-".concat(t))}))}),Object(s.jsx)("div",{children:Object(s.jsx)(k,{locations:l[t]})})]},n)}))})]})},S=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("h1",{children:[Object(s.jsx)("span",{children:"Draxo"})," Houses APP"]}),Object(s.jsx)(A,{})]})};r.a.render(Object(s.jsx)(S,{}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.ce2ce787.chunk.js.map