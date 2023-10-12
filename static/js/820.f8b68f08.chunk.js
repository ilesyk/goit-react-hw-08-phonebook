"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[820],{1820:function(e,n,t){t.r(n),t.d(n,{default:function(){return L}});var r,a,c,i,o=t(5705),s=t(9434),d=t(3634),l=t(6727),u=t(168),m=t(5867),h=(0,m.ZP)(o.l0)(r||(r=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 350px;\n  gap: 15px;\n"]))),p=(0,m.ZP)(o.Bc)(a||(a=(0,u.Z)(["\n  color: red;\n  border: 1px solid black;\n  padding: 5px;\n"]))),x=t(6916),f=function(e){return e.contacts.isLoading},j=function(e){return e.contacts.error},b=function(e){return e.contacts.contacts},v=(0,x.P1)([b,function(e){return e.filter}],(function(e,n){return e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))})),y=t(184),Z=l.Ry().shape({name:l.Z_().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore Artagnan").required("Required"),number:l.Z_().matches(/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +").required("Required")}),g=function(){var e=(0,s.I0)(),n=(0,s.v9)(b);return(0,y.jsx)(o.J9,{initialValues:{name:"",number:""},validationSchema:Z,onSubmit:function(t,r){!function(t){n.find((function(e){return e.name.toLowerCase()===t.name.toLowerCase()}))?alert("".concat(t.name," is already in contacts.")):e((0,d.uK)(t))}(t),r.resetForm()},children:(0,y.jsxs)(h,{children:[(0,y.jsx)("label",{htmlFor:"Name",children:"Name"}),(0,y.jsx)(o.gN,{id:"name",name:"name",type:"text",placeholder:"Add contact name"}),(0,y.jsx)(p,{name:"name",component:"div"}),(0,y.jsx)("label",{htmlFor:"number",children:"Number"}),(0,y.jsx)(o.gN,{id:"number",name:"number",type:"text",placeholder:"Example: 123-45-67"}),(0,y.jsx)(p,{name:"number",component:"div"}),(0,y.jsx)("button",{type:"submit",children:"Add contact"})]})})},w=m.ZP.ul(c||(c=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 350px;\n  gap: 15px;\n"]))),C=m.ZP.li(i||(i=(0,u.Z)(["\n  display: flex;\n  gap: 10px;\n  justify-content: space-between;\n"]))),k=function(){var e=(0,s.I0)(),n=(0,s.v9)(b),t=(0,s.v9)(v);return n.length&&n?(0,y.jsx)(w,{children:t.map((function(n){return(0,y.jsxs)(C,{children:[(0,y.jsxs)("p",{children:[n.name,": ",n.number]}),(0,y.jsx)("button",{type:"button",onClick:function(){return e((0,d.GK)(n.id))},children:"Delete"})]},n.id)}))}):(0,y.jsx)("div",{children:"PhoneBook is empty"})},A=t(4808),N=function(){var e=(0,s.I0)();return(0,y.jsxs)("div",{children:[(0,y.jsx)("p",{children:"Find contacts by name"}),(0,y.jsx)("input",{type:"text",onChange:function(n){return e((0,A.k)(n.target.value))},placeholder:"Topic filter"})]})},P=t(2791),F=t(4270);function L(){var e=(0,s.v9)(f),n=(0,s.v9)(j),t=(0,s.I0)();return(0,P.useEffect)((function(){t((0,d.yF)())}),[t]),(0,y.jsxs)("div",{children:[(0,y.jsx)(F.q,{children:(0,y.jsx)("title",{children:"Your contacts"})}),(0,y.jsx)(g,{}),(0,y.jsx)("h2",{children:"Contacts"}),(0,y.jsx)(N,{}),e&!n?(0,y.jsx)("b",{children:"LOADING..."}):(0,y.jsx)(k,{})]})}}}]);
//# sourceMappingURL=820.f8b68f08.chunk.js.map