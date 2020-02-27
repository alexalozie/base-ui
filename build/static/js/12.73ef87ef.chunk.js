(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{205:function(e,a,t){"use strict";t.r(a);var l=t(100);t.d(a,"default",function(){return l.a})},286:function(e,a,t){"use strict";var l=t(21),n=t(1),r=t.n(n),i=(t(39),t(55)),s=t(369),c=t(370),m=t(70),o=t(35),u=t.n(o),d={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6","display-1":"h1","display-2":"h1","display-3":"h1","display-4":"h1",p:"p",lead:"p",blockquote:"blockquote"},p=function(e){var a,t=e.tag,n=e.className,i=e.type,s=Object(l.a)(e,["tag","className","type"]),c=u()(Object(m.a)({},i,!!i),n);return a=t||(!t&&d[i]?d[i]:"p"),r.a.createElement(a,Object.assign({},s,{className:c}))};p.defaultProps={type:"p"};var f=p,v=i.a.create("page"),E=function(e){var a=e.title,t=e.breadcrumbs,n=e.tag,i=e.className,m=e.children,o=Object(l.a)(e,["title","breadcrumbs","tag","className","children"]),u=v.b("px-5","p-5",i);return r.a.createElement(n,Object.assign({className:u},o),r.a.createElement("div",{className:v.e("header")},a&&"string"===typeof a?r.a.createElement(f,{type:"h4",className:v.e("title")},a):a,t&&r.a.createElement(s.a,{className:v.e("breadcrumb")},r.a.createElement(c.a,null,"Home"),t.length&&t.map(function(e,a){var t=e.name,l=e.active;return r.a.createElement(c.a,{key:a,active:l},t)}))),m)};E.defaultProps={tag:"div",title:""};a.a=E},289:function(e,a){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},290:function(e,a,t){"use strict";var l=t(9),n=t(11),r=t(54),i=t(1),s=t.n(i),c=t(2),m=t.n(c),o=t(8),u=t.n(o),d=t(72),p=t(4),f=Object(r.a)({},d.Transition.propTypes,{children:m.a.oneOfType([m.a.arrayOf(m.a.node),m.a.node]),tag:p.p,baseClass:m.a.string,baseClassActive:m.a.string,className:m.a.string,cssModule:m.a.object,innerRef:m.a.oneOfType([m.a.object,m.a.string,m.a.func])}),v=Object(r.a)({},d.Transition.defaultProps,{tag:"div",baseClass:"fade",baseClassActive:"show",timeout:p.e.Fade,appear:!0,enter:!0,exit:!0,in:!0});function E(e){var a=e.tag,t=e.baseClass,r=e.baseClassActive,i=e.className,c=e.cssModule,m=e.children,o=e.innerRef,f=Object(n.a)(e,["tag","baseClass","baseClassActive","className","cssModule","children","innerRef"]),v=Object(p.n)(f,p.c),E=Object(p.m)(f,p.c);return s.a.createElement(d.Transition,v,function(e){var n="entered"===e,d=Object(p.l)(u()(i,t,n&&r),c);return s.a.createElement(a,Object(l.a)({className:d},E,{ref:o}),m)})}E.propTypes=f,E.defaultProps=v,a.a=E},291:function(e,a,t){"use strict";var l=t(289);Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,a){var t=r.default.memo(r.default.forwardRef(function(a,t){return r.default.createElement(i.default,(0,n.default)({ref:t},a),e)}));0;return t.muiName=i.default.muiName,t};var n=l(t(306)),r=l(t(1)),i=l(t(205))},306:function(e,a){function t(){return e.exports=t=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},t.apply(this,arguments)}e.exports=t},311:function(e,a,t){"use strict";t.d(a,"a",function(){return i});var l=t(1),n=t.n(l),r=t(125);function i(e){return n.a.createElement(r.a,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0},e.children)}},312:function(e,a,t){"use strict";var l=t(3),n=t(5),r=t(1),i=t.n(r),s=(t(7),t(6)),c=t(190),m=t(10),o=i.a.forwardRef(function(e,a){var t=e.classes,r=e.className,m=e.raised,o=void 0!==m&&m,u=Object(n.a)(e,["classes","className","raised"]);return i.a.createElement(c.a,Object(l.a)({className:Object(s.a)(t.root,r),elevation:o?8:1,ref:a},u))});a.a=Object(m.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(o)},313:function(e,a,t){"use strict";var l=t(3),n=t(5),r=t(1),i=t.n(r),s=(t(7),t(6)),c=t(10),m=i.a.forwardRef(function(e,a){var t=e.classes,r=e.className,c=e.component,m=void 0===c?"div":c,o=Object(n.a)(e,["classes","className","component"]);return i.a.createElement(m,Object(l.a)({className:Object(s.a)(t.root,r),ref:a},o))});a.a=Object(c.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(m)},320:function(e,a,t){"use strict";var l=t(9),n=t(11),r=t(54),i=t(1),s=t.n(i),c=t(2),m=t.n(c),o=t(8),u=t.n(o),d=t(4),p=t(290),f={children:m.a.node,className:m.a.string,closeClassName:m.a.string,closeAriaLabel:m.a.string,cssModule:m.a.object,color:m.a.string,fade:m.a.bool,isOpen:m.a.bool,toggle:m.a.func,tag:d.p,transition:m.a.shape(p.a.propTypes),innerRef:m.a.oneOfType([m.a.object,m.a.string,m.a.func])},v={color:"success",isOpen:!0,tag:"div",closeAriaLabel:"Close",fade:!0,transition:Object(r.a)({},p.a.defaultProps,{unmountOnExit:!0})};function E(e){var a=e.className,t=e.closeClassName,i=e.closeAriaLabel,c=e.cssModule,m=e.tag,o=e.color,f=e.isOpen,v=e.toggle,E=e.children,b=e.transition,h=e.fade,g=e.innerRef,N=Object(n.a)(e,["className","closeClassName","closeAriaLabel","cssModule","tag","color","isOpen","toggle","children","transition","fade","innerRef"]),O=Object(d.l)(u()(a,"alert","alert-"+o,{"alert-dismissible":v}),c),C=Object(d.l)(u()("close",t),c),y=Object(r.a)({},p.a.defaultProps,b,{baseClass:h?b.baseClass:"",timeout:h?b.timeout:0});return s.a.createElement(p.a,Object(l.a)({},N,y,{tag:m,className:O,in:f,role:"alert",innerRef:g}),v?s.a.createElement("button",{type:"button",className:C,"aria-label":i,onClick:v},s.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null,E)}E.propTypes=f,E.defaultProps=v,a.a=E},343:function(e,a,t){"use strict";var l=t(289);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=l(t(1)),r=(0,l(t(291)).default)(n.default.createElement("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"}),"Save");a.default=r},369:function(e,a,t){"use strict";var l=t(9),n=t(11),r=t(1),i=t.n(r),s=t(2),c=t.n(s),m=t(8),o=t.n(m),u=t(4),d={tag:u.p,listTag:u.p,className:c.a.string,listClassName:c.a.string,cssModule:c.a.object,children:c.a.node,"aria-label":c.a.string},p=function(e){var a=e.className,t=e.listClassName,r=e.cssModule,s=e.children,c=e.tag,m=e.listTag,d=e["aria-label"],p=Object(n.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),f=Object(u.l)(o()(a),r),v=Object(u.l)(o()("breadcrumb",t),r);return i.a.createElement(c,Object(l.a)({},p,{className:f,"aria-label":d}),i.a.createElement(m,{className:v},s))};p.propTypes=d,p.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},a.a=p},370:function(e,a,t){"use strict";var l=t(9),n=t(11),r=t(1),i=t.n(r),s=t(2),c=t.n(s),m=t(8),o=t.n(m),u=t(4),d={tag:u.p,active:c.a.bool,className:c.a.string,cssModule:c.a.object},p=function(e){var a=e.className,t=e.cssModule,r=e.active,s=e.tag,c=Object(n.a)(e,["className","cssModule","active","tag"]),m=Object(u.l)(o()(a,!!r&&"active","breadcrumb-item"),t);return i.a.createElement(s,Object(l.a)({},c,{className:m,"aria-current":r?"page":void 0}))};p.propTypes=d,p.defaultProps={tag:"li"},a.a=p},563:function(e,a,t){"use strict";var l=t(289);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=l(t(1)),r=(0,l(t(291)).default)(n.default.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank");a.default=r},564:function(e,a,t){"use strict";var l=t(289);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=l(t(1)),r=(0,l(t(291)).default)(n.default.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox");a.default=r},565:function(e,a,t){"use strict";var l=t(289);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=l(t(1)),r=(0,l(t(291)).default)(n.default.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel");a.default=r},577:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return A});var l=t(70),n=t(58),r=t(288),i=t(1),s=t.n(i),c=t(276),m=t(271),o=t(269),u=t(123),d=t(312),p=t(313),f=t(194),v=t(193),E=t(199),b=t(311),h=t(320),g=t(343),N=t.n(g),O=t(565),C=t.n(O),y=t(274),j=t(280),x=t(563),M=t.n(x),T=t(564),P=t.n(T),z=t(316),S=t(327),W=t(598),w=t(286),k=Object(u.a)(function(e){return{card:{margin:e.spacing(20),display:"flex",flexDirection:"column",alignItems:"center"},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},cardBottom:{marginBottom:20},Select:{height:45,width:300},button:{margin:e.spacing(1)}}});function A(){var e=k(),a=s.a.useState({age:"",name:"hai"}),t=Object(r.a)(a,2),i=t[0],u=t[1],g=s.a.useState(new Date("2014-08-18T21:11:54")),O=Object(r.a)(g,2),x=O[0],T=O[1],A=s.a.useRef(null),B=s.a.useState(0),F=Object(r.a)(B,2),L=F[0],R=F[1];s.a.useEffect(function(){R(A.current.offsetWidth)},[]);var q=function(e){return function(a){u(Object(n.a)({},i,Object(l.a)({},e,a.target.value)))}};return s.a.createElement(w.a,{title:"Patient Regsitration"},s.a.createElement(h.a,{color:"primary"},"All Information with Asterisks(*) are compulsory"),s.a.createElement("form",{className:e.form,Validate:!0},s.a.createElement(d.a,{className:e.cardBottom},s.a.createElement(p.a,null,s.a.createElement(b.a,null,"Basic Information"),s.a.createElement(o.a,{container:!0,spacing:2},s.a.createElement(o.a,{item:!0,xs:12,sm:4},s.a.createElement(m.a,{autoComplete:"fname",name:"firstName",variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0,size:"small",helperText:"First Name"})),s.a.createElement(o.a,{item:!0,xs:12,sm:4},s.a.createElement(m.a,{autoComplete:"mname",name:"middleName",variant:"outlined",fullWidth:!0,id:"middleName",label:"Middle Name",size:"small"})),s.a.createElement(o.a,{item:!0,xs:12,sm:4},s.a.createElement(m.a,{autoComplete:"lname",name:"lasttName",variant:"outlined",required:!0,fullWidth:!0,id:"lastName",label:"Last Name",size:"small"})),s.a.createElement(o.a,{item:!0,xs:12,sm:4},s.a.createElement(v.a,{variant:"outlined",className:e.formControl},s.a.createElement(f.a,{ref:A,htmlFor:"outlined-age-native-simple"},"Occupation"),s.a.createElement(E.a,{native:!0,value:i.age,onChange:q("age"),labelWidth:L,inputProps:{name:"occupation"},className:e.Select},s.a.createElement("option",{value:""}),s.a.createElement("option",{value:10},"Ten"),s.a.createElement("option",{value:20},"Twenty"),s.a.createElement("option",{value:30},"Thirty")))),s.a.createElement(o.a,{item:!0,xs:12,sm:4},s.a.createElement(v.a,{variant:"outlined",className:e.formControl},s.a.createElement(f.a,{ref:A,htmlFor:"outlined-age-native-simple"},"Hightest Qualification"),s.a.createElement(E.a,{native:!0,value:i.age,labelWidth:L,inputProps:{name:"qualification"},className:e.Select},s.a.createElement("option",{value:""}),s.a.createElement("option",{value:10},"PHD"),s.a.createElement("option",{value:20},"MSC"),s.a.createElement("option",{value:30},"BSC"),s.a.createElement("option",{value:30},"OTHERS")))),s.a.createElement(o.a,{item:!0,xs:12,sm:4},s.a.createElement(v.a,{variant:"outlined",className:e.formControl},s.a.createElement(f.a,{ref:A,htmlFor:"outlined-age-native-simple"},"Marital Status"),s.a.createElement(E.a,{native:!0,value:i.age,labelWidth:L,inputProps:{name:"maritalStatus"},className:e.Select},s.a.createElement("option",{value:""}),s.a.createElement("option",{value:10},"Signled"),s.a.createElement("option",{value:20},"Married"),s.a.createElement("option",{value:30},"Divoice")))),s.a.createElement(S.a,{utils:z.a},s.a.createElement(o.a,{item:!0,xs:12,sm:4},s.a.createElement(W.a,{margin:"normal",id:"date-picker-dialog",label:"Please Date of Birth",format:"MM/dd/yyyy",value:x,onChange:function(e){T(e)},KeyboardButtonProps:{"aria-label":"change date"},style:{marginTop:-5}}))),s.a.createElement(o.a,{item:!0,xs:12,sm:4},s.a.createElement(y.a,{control:s.a.createElement(j.a,{icon:s.a.createElement(M.a,{fontSize:"small"}),checkedIcon:s.a.createElement(P.a,{fontSize:"small"}),value:"checkedI"}),label:"Custom size"})),s.a.createElement(o.a,{item:!0,xs:12,sm:4},s.a.createElement(o.a,{container:!0,spacing:2},s.a.createElement(o.a,{item:!0,xs:4,sm:4}," ",s.a.createElement(m.a,{id:"outlined-basic",label:"Years",variant:"outlined",size:"small"})),s.a.createElement(o.a,{item:!0,xs:4,sm:4}," ",s.a.createElement(m.a,{id:"outlined-basic",label:"Months",variant:"outlined",size:"small"})),s.a.createElement(o.a,{item:!0,xs:4,sm:4}," ",s.a.createElement(m.a,{id:"outlined-basic",label:"Days",variant:"outlined",size:"small"}))))))),s.a.createElement(d.a,{className:e.cardBottom},s.a.createElement(p.a,null,s.a.createElement(b.a,null,"Contact Detail"),s.a.createElement(o.a,{container:!0,spacing:2},s.a.createElement(o.a,{item:!0,xs:12,sm:4},s.a.createElement(m.a,{autoComplete:"phone",name:"phoneNumber",variant:"outlined",required:!0,fullWidth:!0,id:"phoneNumber",label:"Phone Number",size:"small",helperText:"Phone Number"})),s.a.createElement(o.a,{item:!0,xs:12,sm:4},s.a.createElement(m.a,{autoComplete:"altphone",name:"altPhoneNumber",variant:"outlined",fullWidth:!0,id:"altPhoneNumber",label:"Alternative Phone Number",size:"small"})),s.a.createElement(o.a,{item:!0,xs:12,sm:4},s.a.createElement(m.a,{autoComplete:"email",name:"emaill",variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",size:"small"})),s.a.createElement(o.a,{item:!0,xs:12,sm:6},s.a.createElement(m.a,{autoComplete:"fname",name:"firstName",variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"First Name",size:"small"})),s.a.createElement(o.a,{item:!0,xs:12,sm:6},s.a.createElement(m.a,{variant:"outlined",required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"lname",size:"small"}))),s.a.createElement("br",null),s.a.createElement(d.a,{className:e.cardBottom},s.a.createElement(p.a,null,s.a.createElement(b.a,null,"Address"),s.a.createElement(o.a,{container:!0,spacing:2},s.a.createElement(o.a,{item:!0,xs:12,sm:4},s.a.createElement(v.a,{variant:"outlined",className:e.formControl},s.a.createElement(f.a,{ref:A,htmlFor:"outlined-age-native-simple"},"country"),s.a.createElement(E.a,{native:!0,value:i.age,onChange:q("age"),labelWidth:L,inputProps:{name:"country",id:"outlined-age-native-simple"},className:e.Select},s.a.createElement("option",{value:""}),s.a.createElement("option",{value:10},"Ten"),s.a.createElement("option",{value:20},"Twenty"),s.a.createElement("option",{value:30},"Thirty")))),s.a.createElement(o.a,{item:!0,xs:12,sm:4},s.a.createElement(v.a,{variant:"outlined",className:e.formControl},s.a.createElement(f.a,{ref:A,htmlFor:"outlined-age-native-simple"},"State"),s.a.createElement(E.a,{native:!0,value:i.age,onChange:q("age"),labelWidth:L,inputProps:{name:"state",id:"outlined-age-native-simple"},className:e.Select},s.a.createElement("option",{value:""}),s.a.createElement("option",{value:10},"Ten"),s.a.createElement("option",{value:20},"Twenty"),s.a.createElement("option",{value:30},"Thirty")))),s.a.createElement(o.a,{item:!0,xs:12,sm:4},s.a.createElement(v.a,{variant:"outlined",className:e.formControl},s.a.createElement(f.a,{ref:A,htmlFor:"outlined-age-native-simple"},"Province/District/LGA"),s.a.createElement(E.a,{native:!0,value:i.age,onChange:q("age"),labelWidth:L,inputProps:{name:"Province/District/LGA",id:"outlined-age-native-simple"},className:e.Select},s.a.createElement("option",{value:""}),s.a.createElement("option",{value:10},"Ten"),s.a.createElement("option",{value:20},"Twenty"),s.a.createElement("option",{value:30},"Thirty")))),s.a.createElement(o.a,{item:!0,xs:12,sm:6},s.a.createElement(m.a,{autoComplete:"city",name:"c",variant:"outlined",fullWidth:!0,id:"firstName",label:"City",size:"small"})),s.a.createElement(o.a,{item:!0,xs:12,sm:6},s.a.createElement(m.a,{variant:"outlined",fullWidth:!0,id:"landMark",label:"Land Mark",name:"landMark",autoComplete:"landMark",size:"small"}))))))),s.a.createElement(d.a,{className:e.cardBottom},s.a.createElement(p.a,null,s.a.createElement(b.a,null,"Relative Information"),s.a.createElement(o.a,{container:!0,spacing:2},s.a.createElement(o.a,{item:!0,xs:12,sm:4},s.a.createElement(m.a,{autoComplete:"fname",name:"firstName",variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0,size:"small",helperText:"First Name"})),s.a.createElement(o.a,{item:!0,xs:12,sm:4},s.a.createElement(m.a,{autoComplete:"mname",name:"middleName",variant:"outlined",fullWidth:!0,id:"middleName",label:"Middle Name",size:"small"})),s.a.createElement(o.a,{item:!0,xs:12,sm:4},s.a.createElement(m.a,{autoComplete:"lname",name:"lasttName",variant:"outlined",required:!0,fullWidth:!0,id:"lastName",label:"Last Name",size:"small"})),s.a.createElement(o.a,{item:!0,xs:12,sm:6},s.a.createElement(m.a,{autoComplete:"fname",name:"firstName",variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"First Name",size:"small"})),s.a.createElement(o.a,{item:!0,xs:12,sm:6},s.a.createElement(m.a,{variant:"outlined",required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"lname",size:"small"}))),s.a.createElement("br",null),s.a.createElement(c.a,{variant:"contained",color:"primary",className:e.button,startIcon:s.a.createElement(N.a,null)},"Save"),s.a.createElement(c.a,{variant:"contained",color:"default",className:e.button,startIcon:s.a.createElement(C.a,null)},"Cancel")))))}}}]);
//# sourceMappingURL=12.73ef87ef.chunk.js.map