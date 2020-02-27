(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{286:function(e,a,t){"use strict";var l=t(21),n=t(1),r=t.n(n),c=(t(39),t(55)),m=t(369),i=t(370),s=t(70),o=t(35),u=t.n(o),E={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6","display-1":"h1","display-2":"h1","display-3":"h1","display-4":"h1",p:"p",lead:"p",blockquote:"blockquote"},p=function(e){var a,t=e.tag,n=e.className,c=e.type,m=Object(l.a)(e,["tag","className","type"]),i=u()(Object(s.a)({},c,!!c),n);return a=t||(!t&&E[c]?E[c]:"p"),r.a.createElement(a,Object.assign({},m,{className:i}))};p.defaultProps={type:"p"};var d=p,h=c.a.create("page"),b=function(e){var a=e.title,t=e.breadcrumbs,n=e.tag,c=e.className,s=e.children,o=Object(l.a)(e,["title","breadcrumbs","tag","className","children"]),u=h.b("px-5","p-5",c);return r.a.createElement(n,Object.assign({className:u},o),r.a.createElement("div",{className:h.e("header")},a&&"string"===typeof a?r.a.createElement(d,{type:"h4",className:h.e("title")},a):a,t&&r.a.createElement(m.a,{className:h.e("breadcrumb")},r.a.createElement(i.a,null,"Home"),t.length&&t.map(function(e,a){var t=e.name,l=e.active;return r.a.createElement(i.a,{key:a,active:l},t)}))),s)};b.defaultProps={tag:"div",title:""};a.a=b},300:function(e,a,t){"use strict";t.d(a,"a",function(){return o});var l=t(288),n=t(1),r=t.n(n),c=t(269),m=t(316),i=t(327),s=t(598);function o(){var e=r.a.useState(new Date("2014-08-18T21:11:54")),a=Object(l.a)(e,2),t=a[0],n=a[1];return r.a.createElement(i.a,{utils:m.a},r.a.createElement(c.a,{container:!0,justify:"space-around"},r.a.createElement(s.a,{margin:"normal",id:"date-picker-dialog",label:"Please Select Date",format:"MM/dd/yyyy",value:t,onChange:function(e){n(e)},KeyboardButtonProps:{"aria-label":"change date"}})))}},315:function(e,a,t){"use strict";var l=t(1),n=t.n(l),r=t(236),c=t(239),m=t(266),i=t(267),s=t(237),o=t(240),u=t(22),E=t(300);a.a=function(){return n.a.createElement(r.a,null,n.a.createElement(m.a,{form:!0},n.a.createElement(i.a,{md:3},n.a.createElement(s.a,null,n.a.createElement(E.a,null))),n.a.createElement(i.a,{md:3},n.a.createElement(s.a,null,n.a.createElement(E.a,null))),n.a.createElement(i.a,{md:4,style:{marginTop:"33px"}},n.a.createElement(c.a,{type:"search",placeholder:"Search by Patient Name, Hospital No. ",className:"cr-search-form__input pull-right"})),n.a.createElement(i.a,{md:2,style:{marginTop:"33px"}},n.a.createElement(s.a,null,n.a.createElement(o.a,{color:"primary",className:" float-right mr-1"},n.a.createElement(u.r,null),"  Filter Result")))))}},589:function(e,a,t){"use strict";t.r(a);var l=t(286),n=t(1),r=t.n(n),c=t(266),m=t(267),i=t(320),s=t(245),o=t(236),u=t(123),E=t(296),p=t(330),d=t(580),h=t(582),b=t(579),g=t(331),f=t(581),y=t(190),N=t(36),v=t(97),w=t(358),P=t(275),S=t(315),j=Object(u.a)(function(e){return{table:{minWidth:650},button:{margin:e.spacing(1),width:200},body1:{fontWeight:500}}});function k(e,a,t,l,n){return{name:e,calories:a,fat:t,carbs:l,protein:n}}var O=[k("1598","Alex Williams",234567677,3),k("1234","Ahmed Musa",23456666443,9),k("5555","Isaac Johnson",2345567765,6)];a.default=function(e){var a=j();return r.a.createElement(l.a,{title:"Collected Sample"},r.a.createElement(c.a,null,r.a.createElement(m.a,{xl:12,lg:12,md:12},r.a.createElement(i.a,{color:"primary"},r.a.createElement(E.c,{size:"30",className:" text-dark"}),"  ","  ","Note : Only  Patients can be search here"))),r.a.createElement(c.a,null,r.a.createElement(m.a,{sm:"12"},r.a.createElement(s.a,{body:!0},r.a.createElement(o.a,null,r.a.createElement(S.a,null)),r.a.createElement("br",null),r.a.createElement(b.a,{component:y.a},r.a.createElement(p.a,{className:a.table,"aria-label":"caption table"},r.a.createElement(g.a,null,r.a.createElement(f.a,null,r.a.createElement(h.a,null,"Lab Number"),r.a.createElement(h.a,{align:"center"},"Patient ID"),r.a.createElement(h.a,{align:"center"},"Phone Name"),r.a.createElement(h.a,{align:"center"},"Date Collected"),r.a.createElement(h.a,{align:"center"},"Sample "),r.a.createElement(h.a,{align:"center"},"Result"),r.a.createElement(h.a,{align:"center"},"Action"))),r.a.createElement(d.a,null,O.map(function(e){return r.a.createElement(f.a,{key:e.name},r.a.createElement(h.a,{component:"th",scope:"row"},e.name),r.a.createElement(h.a,{align:"center"},e.calories),r.a.createElement(h.a,{align:"center"},e.fat),r.a.createElement(h.a,{align:"center"},"12/02/2020"),r.a.createElement(h.a,{align:"center"},e.carbs),r.a.createElement(h.a,{align:"center"},"2"),r.a.createElement(h.a,{align:"center"},r.a.createElement(v.a,{to:"/view-result"},r.a.createElement(w.a,{title:"View Collected Sample"},r.a.createElement(P.a,{"aria-label":"View Collected Sample"},r.a.createElement(N.d,{size:"15"})))),r.a.createElement(v.a,{to:"/collect-sample"},r.a.createElement(w.a,{title:"Print Collected Sample"},r.a.createElement(P.a,{"aria-label":"Print Collected Sample"},r.a.createElement(N.h,{size:"15"}))))))}))))))))}}}]);
//# sourceMappingURL=23.435bdb08.chunk.js.map