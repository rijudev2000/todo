(this.webpackJsonptodoslist=this.webpackJsonptodoslist||[]).push([[0],{20:function(t,e,n){},35:function(t,e,n){"use strict";n.r(e);var c=n(21),o=n.n(c),a=n(12),s=n(3),i=n(1),r=n(18),d=n(9),l=n(2);var j=function(t){var e=Object(i.useState)(t.edit?t.edit.value:""),n=Object(d.a)(e,2),c=n[0],o=n[1],a=Object(i.useRef)(null);Object(i.useEffect)((function(){a.current.focus()}));var s=function(t){o(t.target.value)};return Object(l.jsx)("div",{children:Object(l.jsx)("form",{className:"todo-form",onSubmit:function(e){e.preventDefault(),t.onSubmit({id:Math.floor(1e4*Math.random()),text:c}),o("")},children:t.edit?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("input",{type:"text",placeholder:"Update your todo",value:c,name:"text",className:"todo-input edit",onChange:s,ref:a}),Object(l.jsx)("button",{className:"todo-button edit",children:"Update"})]}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("input",{type:"text",placeholder:"Add a todo",value:c,name:"text",className:"todo-input",onChange:s,ref:a}),Object(l.jsx)("button",{className:"todo-button",children:"Add todo"})]})})})},u=n(22),b=n(23);var x=function(t){var e=t.todos,n=t.completeTodo,c=t.removeTodo,o=t.updateTodo,a=Object(i.useState)({id:null,value:""}),s=Object(d.a)(a,2),r=s[0],x=s[1];return r.id?Object(l.jsx)(j,{edit:r,onSubmit:function(t){o(r.id,t),x({id:null,value:""})}}):e.map((function(t,e){return Object(l.jsxs)("div",{className:t.isComplete?"todo-row complete":"todo-row",children:[Object(l.jsx)("div",{onClick:function(){return n(t.id)},children:t.text},t.id),Object(l.jsxs)("div",{className:"icons",children:[Object(l.jsx)(u.a,{onClick:function(){return c(t.id)},className:"delete-icon"}),Object(l.jsx)(b.a,{onClick:function(){return x({id:t.id,values:t.text})},className:"edit-icon"})]})]},e)}))};var m=function(){var t;t=null===localStorage.getItem("todos")?"":JSON.parse(localStorage.getItem("todos"));var e=Object(i.useState)(t),n=Object(d.a)(e,2),c=n[0],o=n[1];return Object(i.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(c))}),[c]),Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"What's the Plan for Today?"}),Object(l.jsx)(j,{onSubmit:function(t){if(t.text&&!/^\s*$/.test(t.text)){var e=[t].concat(Object(r.a)(c));o(e)}}}),Object(l.jsx)(x,{todos:c,completeTodo:function(t){var e=c.map((function(e){return e.id===t&&(e.isComplete=!e.isComplete),e}));o(e)},removeTodo:function(t){var e=Object(r.a)(c).filter((function(e){return e.id!==t}));o(e)},updateTodo:function(t,e){e.text&&!/^\s*$/.test(e.text)&&o((function(n){return n.map((function(n){return n.id===t?e:n}))}))}})]})};var O=function(){return Object(l.jsx)("div",{className:"main",children:Object(l.jsx)(m,{})})},h=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("h1",{children:"This is my first react app. And I enjoyed building This!!!!!!!!"})})},f=function(){return Object(l.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light",children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)("p",{className:"navbarbrand",children:"My ToDoList"}),Object(l.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(l.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(a.b,{className:"navlink","aria-current":"page",to:"/",children:"Home"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(a.b,{className:"navlink",to:"/About",children:"About"})})]})})]})})},p=(n(20),function(){return Object(l.jsx)("footer",{children:Object(l.jsx)("p",{className:"text-center flex-end",style:{position:"fixed",top:"450px",width:"100%",backgroundColor:"darkgray",height:"30px"},children:"Copyright \xa9 MyTodosList.com"})})});var v=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(a.a,{children:[Object(l.jsx)(f,{}),Object(l.jsxs)(s.c,{children:[Object(l.jsx)(s.a,{exact:!0,path:"/",component:O}),Object(l.jsx)(s.a,{exact:!0,path:"/About",component:h})]}),Object(l.jsx)(p,{})]})})},g=Object(l.jsx)(v,{});o.a.render(g,document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.ee1492c4.chunk.js.map