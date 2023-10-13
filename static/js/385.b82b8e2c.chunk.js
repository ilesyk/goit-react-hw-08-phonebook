"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[385],{385:function(e,n,t){t.r(n),t.d(n,{default:function(){return F}});var a,r,i=t(890),s=t(5705),o=t(9434),c=t(3634),d=t(6727),l=t(168),m=t(6487),u=(0,m.ZP)(s.l0)(a||(a=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 350px;\n  gap: 15px;\n"]))),x=(0,m.ZP)(s.Bc)(r||(r=(0,l.Z)(["\n  color: red;\n  border: 1px solid black;\n  padding: 5px;\n"]))),h=t(6916),p=function(e){return e.contacts.isLoading},f=function(e){return e.contacts.error},j=function(e){return e.contacts.contacts},b=(0,h.P1)([j,function(e){return e.filter}],(function(e,n){return e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))})),v=t(8771),Z=t(8571),g=t(184),y=d.Ry().shape({name:d.Z_().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore Artagnan").required("Required"),number:d.Z_().matches(/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +").required("Required")}),C=function(){var e=(0,o.I0)(),n=(0,o.v9)(j);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(i.Z,{sx:{marginBottom:"15px"},variant:"h4",children:"Add Contact"}),(0,g.jsx)(s.J9,{initialValues:{name:"",number:""},validationSchema:y,onSubmit:function(t,a){!function(t){n.find((function(e){return e.name.toLowerCase()===t.name.toLowerCase()}))?alert("".concat(t.name," is already in contacts.")):e((0,c.uK)(t))}(t),a.resetForm()},children:(0,g.jsxs)(u,{children:[(0,g.jsx)(v.Z,{id:"outlined-basic",label:"Name",variant:"outlined",size:"small",type:"text",name:"name",children:(0,g.jsx)(s.gN,{id:"name",name:"name",type:"text",placeholder:"Add contact name"})}),(0,g.jsx)(x,{name:"name",component:"div"}),(0,g.jsx)(v.Z,{id:"outlined-basic",label:"Number",variant:"outlined",size:"small",type:"text",name:"name",children:(0,g.jsx)(s.gN,{id:"number",name:"number",type:"text",placeholder:"Example: 123-45-67"})}),(0,g.jsx)(x,{name:"number",component:"div"}),(0,g.jsx)(Z.Z,{size:"medium",variant:"contained",type:"submit",children:"Add contact"})]})})]})},k=t(4554),w=t(7621),z=t(9504),A=t(2363),N=function(){var e=(0,o.I0)(),n=(0,o.v9)(j),t=(0,o.v9)(b);return n.length&&n?(0,g.jsx)(k.Z,{sx:{marginTop:"15px",display:"flex",flexDirection:"column",gap:"10px"},children:t.map((function(n){return(0,g.jsxs)(w.Z,{sx:{minWidth:275,backgroundColor:"#e6ecff"},children:[(0,g.jsxs)(z.Z,{children:[(0,g.jsxs)(i.Z,{variant:"h5",sx:{marginBottom:"10px"},children:["Name: ",n.name]}),(0,g.jsxs)(i.Z,{variant:"body2",children:["Number: ",n.number]})]}),(0,g.jsx)(A.Z,{children:(0,g.jsx)(Z.Z,{size:"small",type:"button",sx:{marginLeft:"auto"},onClick:function(){return e((0,c.GK)(n.id))},children:"Delete"})})]},n.id)}))}):(0,g.jsx)("div",{children:"PhoneBook is empty"})},B=t(4808),L=function(){var e=(0,o.I0)();return(0,g.jsxs)("div",{children:[(0,g.jsx)(i.Z,{sx:{marginBottom:"10px"},children:"Find contacts by name"}),(0,g.jsx)(v.Z,{id:"outlined-basic",label:"Enter name",variant:"outlined",size:"small",type:"text",name:"name",sx:{width:"350px"},onChange:function(n){return e((0,B.k)(n.target.value))}})]})},_=t(2791),q=t(4270);function F(){var e=(0,o.v9)(p),n=(0,o.v9)(f),t=(0,o.I0)();return(0,_.useEffect)((function(){t((0,c.yF)())}),[t]),(0,g.jsxs)("div",{children:[(0,g.jsx)(q.q,{children:(0,g.jsx)("title",{children:"Your contacts"})}),(0,g.jsx)(C,{}),(0,g.jsx)(i.Z,{sx:{marginTop:"25px",marginBottom:"15px"},variant:"h4",children:"Your Contacts"}),(0,g.jsx)(L,{}),e&!n?(0,g.jsx)("b",{children:"LOADING..."}):(0,g.jsx)(N,{})]})}}}]);
//# sourceMappingURL=385.b82b8e2c.chunk.js.map