"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[385],{385:function(e,n,r){r.r(n),r.d(n,{default:function(){return q}});var t,a,i=r(890),o=r(5705),s=r(9434),c=r(3634),l=r(6727),u=r(168),d=r(6487),m=(0,d.ZP)(o.l0)(t||(t=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 350px;\n  gap: 15px;\n"]))),h=((0,d.ZP)(o.Bc)(a||(a=(0,u.Z)(["\n  color: red;\n  border: 1px solid black;\n  padding: 5px;\n"]))),r(6916)),x=function(e){return e.contacts.isLoading},p=function(e){return e.contacts.error},f=function(e){return e.contacts.contacts},b=(0,h.P1)([f,function(e){return e.filter}],(function(e,n){return e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))})),j=r(8771),v=r(8571),Z=r(184),g=l.Ry().shape({name:l.Z_().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore Artagnan").required("Required"),number:l.Z_().matches(/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +").required("Required")}),C=function(){var e=(0,s.I0)(),n=(0,s.v9)(f);return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(i.Z,{sx:{marginBottom:"15px"},variant:"h4",children:"Add Contact"}),(0,Z.jsx)(o.J9,{initialValues:{name:"",number:""},validationSchema:g,onSubmit:function(r,t){!function(r){n.find((function(e){return e.name.toLowerCase()===r.name.toLowerCase()}))?alert("".concat(r.name," is already in contacts.")):e((0,c.uK)(r))}(r),t.resetForm()},children:function(e){return(0,Z.jsxs)(m,{children:[(0,Z.jsx)(j.Z,{id:"name",name:"name",label:"Name",size:"small",type:"text",placeholder:"Add contact name",value:e.values.name,onChange:e.handleChange,onBlur:e.handleBlur,error:e.touched.name&&Boolean(e.errors.name),helperText:e.touched.name&&e.errors.name}),(0,Z.jsx)(j.Z,{id:"number",name:"number",label:"Number",size:"small",type:"text",placeholder:"Example: 123-45-67",value:e.values.number,onChange:e.handleChange,onBlur:e.handleBlur,error:e.touched.number&&Boolean(e.errors.number),helperText:e.touched.number&&e.errors.number}),(0,Z.jsx)(v.Z,{size:"medium",variant:"contained",type:"submit",children:"Add contact"})]})}})]})},y=r(4554),B=r(7621),k=r(9504),w=r(2363),z=function(){var e=(0,s.I0)(),n=(0,s.v9)(f),r=(0,s.v9)(b);return n.length&&n?(0,Z.jsx)(y.Z,{sx:{marginTop:"15px",display:"flex",flexDirection:"column",gap:"10px"},children:r.map((function(n){return(0,Z.jsxs)(B.Z,{sx:{minWidth:275,backgroundColor:"#e6ecff"},children:[(0,Z.jsxs)(k.Z,{children:[(0,Z.jsxs)(i.Z,{variant:"h5",sx:{marginBottom:"10px"},children:["Name: ",n.name]}),(0,Z.jsxs)(i.Z,{variant:"body2",children:["Number: ",n.number]})]}),(0,Z.jsx)(w.Z,{children:(0,Z.jsx)(v.Z,{size:"small",type:"button",sx:{marginLeft:"auto"},onClick:function(){return e((0,c.GK)(n.id))},children:"Delete"})})]},n.id)}))}):(0,Z.jsx)("div",{children:"PhoneBook is empty"})},A=r(4808),L=function(){var e=(0,s.I0)();return(0,Z.jsxs)("div",{children:[(0,Z.jsx)(i.Z,{sx:{marginBottom:"10px"},children:"Find contacts by name"}),(0,Z.jsx)(j.Z,{id:"outlined-basic",label:"Enter name",variant:"outlined",size:"small",type:"text",name:"name",sx:{width:"350px"},onChange:function(n){return e((0,A.k)(n.target.value))}})]})},N=r(2791),_=r(4270);function q(){var e=(0,s.v9)(x),n=(0,s.v9)(p),r=(0,s.I0)();return(0,N.useEffect)((function(){r((0,c.yF)())}),[r]),(0,Z.jsxs)("div",{children:[(0,Z.jsx)(_.q,{children:(0,Z.jsx)("title",{children:"Your contacts"})}),(0,Z.jsx)(C,{}),(0,Z.jsx)(i.Z,{sx:{marginTop:"25px",marginBottom:"15px"},variant:"h4",children:"Your Contacts"}),(0,Z.jsx)(L,{}),e&!n?(0,Z.jsx)("b",{children:"LOADING..."}):(0,Z.jsx)(z,{})]})}}}]);
//# sourceMappingURL=385.7ad1d904.chunk.js.map