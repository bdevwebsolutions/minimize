(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{122:function(t,e,n){t.exports=n(241)},127:function(t,e,n){},129:function(t,e,n){},150:function(t,e){},152:function(t,e){},162:function(t,e){},164:function(t,e){},191:function(t,e){},193:function(t,e){},194:function(t,e){},200:function(t,e){},202:function(t,e){},220:function(t,e){},222:function(t,e){},234:function(t,e){},237:function(t,e){},241:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),u=n(115),c=n.n(u),l=(n(127),n(18)),o=n.n(l),i=n(31),p=n(54),s=n(118),f=(n(129),n(116)),d=n.n(f),g=n(117),m=n.n(g),h=function(){var t=Object(i.a)(o.a.mark((function t(e){var n,a,r,u=arguments;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:"",a=""===n?m()():n,t.prev=2,t.next=5,d.a.post("http://localhost:3000/urls",{url:e,slug:a});case 5:return r=t.sent,t.abrupt("return",r.data);case 9:return t.prev=9,t.t0=t.catch(2),t.abrupt("return",t.t0);case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}();var x=function(t){var e=t.warning;return r.a.createElement("p",null,e)},b=s.a.div.withConfig({displayName:"App__Container",componentId:"sc-6iwd8b-0"})(["width:20%;height:auto;margin:30vh auto;padding:15px;background-color:white;border-radius:40px;box-shadow:50px -50px lightblue,-50px 50px lightgreen,-50px -50px lightpink,50px 50px lightgoldenrodyellow;color:black;h1{text-align:center;}h2{text-align:center;}form{padding:5px;label{display:block;text-align:center;padding:10px;}input{display:block;padding:5px;margin:0 auto;}button{margin-top:10px;}}"]),w=function(){var t=Object(a.useState)(!1),e=Object(p.a)(t,2),n=e[0],u=e[1],c=Object(a.useState)(""),l=Object(p.a)(c,2),s=l[0],f=l[1],d=function(){var t=Object(i.a)(o.a.mark((function t(e,n){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h(e,n);case 2:1===(a=t.sent).code?(u(!0),f(a.text)):(u(!0),f(a.url));case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}();return r.a.createElement(b,{className:"App"},r.a.createElement("h1",null,"MINIMIZE"),r.a.createElement("h2",null,"Easy url Shortner"),r.a.createElement("form",{onSubmit:function(t){return function(t){t.preventDefault();var e=t.target.url.value,n=t.target.slug.value;/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/.test(e)?(u(!1),d(e,n)):(u(!0),f("Invalid URL"))}(t)}},r.a.createElement("label",null,"Url"),r.a.createElement("input",{name:"url",type:"text"}),r.a.createElement("label",null,"Slug (leave empty for auto generated slug)"),r.a.createElement("input",{name:"slug",type:"text"}),r.a.createElement("button",{type:"submit"},"SUBMIT")),n?r.a.createElement(x,{warning:s}):null)};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root"))}},[[122,1,2]]]);
//# sourceMappingURL=main.2594924a.chunk.js.map