(this.webpackJsonpquiz5=this.webpackJsonpquiz5||[]).push([[0],{14:function(t,e,o){},16:function(t,e,o){"use strict";o.r(e);var n=o(1),a=o.n(n),r=o(9),c=o.n(r),s=(o(14),o(2)),d=o(3),i=o(4),u=o(6),p=o(5),j=o(0),l=function(t){Object(u.a)(o,t);var e=Object(p.a)(o);function o(){return Object(d.a)(this,o),e.apply(this,arguments)}return Object(i.a)(o,[{key:"render",value:function(){return Object(j.jsx)("h1",{children:"CGU Todo list"})}}]),o}(a.a.Component),b=o(7),m=function(t){Object(u.a)(o,t);var e=Object(p.a)(o);function o(){var t;Object(d.a)(this,o);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).handleChange=function(e){var o=Object(s.a)(Object(s.a)({},t.props.todoItems),{},Object(b.a)({},e.currentTarget.name,e.currentTarget.value));console.log(e.currentTarget.value),t.props.updateTodos(t.props.index,o)},t.toggleCheckbox=function(e){var o=Object(s.a)(Object(s.a)({},t.props.todoItems),{},Object(b.a)({},e.currentTarget.name,e.currentTarget.checked));t.props.updateTodos(t.props.index,o)},t}return Object(i.a)(o,[{key:"render",value:function(){var t=this;return Object(j.jsxs)("li",{className:this.props.todoItems.isCompleted?"done":null,children:[Object(j.jsx)("input",{type:"checkbox",name:"isCompleted",checked:this.props.todoItems.isCompleted,onChange:this.toggleCheckbox}),Object(j.jsx)("input",{type:"text",name:"todo",value:this.props.todoItems.todo,onChange:this.handleChange}),Object(j.jsx)("button",{className:"del-btn",onClick:function(){return t.props.removeToDoItem(t.props.index)},children:" X"})]})}}]),o}(a.a.Component),h=function(t){Object(u.a)(o,t);var e=Object(p.a)(o);function o(){var t;Object(d.a)(this,o);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).todoRef=a.a.createRef(),t.addItemOnList=function(e){e.preventDefault();var o={todo:t.todoRef.current.value,isCompleted:!1};t.props.addToDoItems(o),e.currentTarget.reset()},t}return Object(i.a)(o,[{key:"render",value:function(){return Object(j.jsxs)("form",{id:"todoList-form",onSubmit:this.addItemOnList,children:[Object(j.jsx)("input",{type:"text",name:"todosTxtbx",ref:this.todoRef,required:!0}),Object(j.jsx)("button",{children:"Add"})]})}}]),o}(a.a.Component),O=function(t){Object(u.a)(o,t);var e=Object(p.a)(o);function o(){var t;Object(d.a)(this,o);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={todoItems:{}},t.addToDoItems=function(e){var o=Object(s.a)({},t.state.todoItems);console.log(o),o["item".concat(Date.now())]=e,t.setState({todoItems:o})},t.removeToDoItem=function(e){var o=Object(s.a)({},t.state.todoItems);delete o[e],t.setState({todoItems:o})},t.updateTodos=function(e,o){var n=Object(s.a)({},t.state.todoItems);n[e]=o,t.setState({todoItems:n})},t}return Object(i.a)(o,[{key:"render",value:function(){var t=this;return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(l,{}),Object(j.jsx)(h,{addToDoItems:this.addToDoItems}),Object(j.jsx)("ul",{children:Object.keys(this.state.todoItems).map((function(e){return Object(j.jsx)(m,{index:e,todoItems:t.state.todoItems[e],removeToDoItem:t.removeToDoItem,updateTodos:t.updateTodos},e)}))})]})}}]),o}(n.Component),f=function(t){t&&t instanceof Function&&o.e(3).then(o.bind(null,17)).then((function(e){var o=e.getCLS,n=e.getFID,a=e.getFCP,r=e.getLCP,c=e.getTTFB;o(t),n(t),a(t),r(t),c(t)}))};c.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root")),f()}},[[16,1,2]]]);
//# sourceMappingURL=main.79696b38.chunk.js.map