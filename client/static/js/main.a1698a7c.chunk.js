(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{122:function(t,e,n){t.exports=n(240)},127:function(t,e,n){},149:function(t,e){},151:function(t,e){},161:function(t,e){},163:function(t,e){},190:function(t,e){},192:function(t,e){},193:function(t,e){},199:function(t,e){},201:function(t,e){},219:function(t,e){},221:function(t,e){},233:function(t,e){},236:function(t,e){},240:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),u=n(115),c=n.n(u),o=(n(127),n(18)),l=n.n(o),i=n(31),p=n(33),s=n(118),f=n(116),m=n.n(f),d=n(117),b=n.n(d),g=function(){var t=Object(i.a)(l.a.mark((function t(e){var n,a,r,u=arguments;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:"",a=""===n?b()():n,t.prev=2,t.next=5,m.a.post("/urls",{url:e,slug:a});case 5:return r=t.sent,t.abrupt("return",r.data);case 9:return t.prev=9,t.t0=t.catch(2),t.abrupt("return",t.t0);case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}();var h=function(t){var e=t.warning;return r.a.createElement("p",null,e)},x=s.a.div.withConfig({displayName:"App__Container",componentId:"sc-6iwd8b-0"})(["min-width:80%;width:300px;height:auto;margin:30vh auto;color:white;text-align:center;h1{text-align:center;}h2{text-align:center;}button{margin:15px auto 0px auto;display:block;width:auto;padding:10px 70px;height:40px;border:none;}form{padding:5px;label{display:block;text-align:center;padding:10px 0px;}input{padding:5px;width:200px;}}"]),w=function(){var t=Object(a.useState)(!1),e=Object(p.a)(t,2),n=e[0],u=e[1],c=Object(a.useState)(!1),o=Object(p.a)(c,2),s=o[0],f=o[1],m=Object(a.useState)(""),d=Object(p.a)(m,2),b=d[0],w=d[1],v=function(){var t=Object(i.a)(l.a.mark((function t(e,n){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g(e,n);case 2:1===(a=t.sent).code?(u(!0),f(!1),w(a.text)):(u(!0),f(!0),w(a.url));case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}();return r.a.createElement(x,{className:"App"},r.a.createElement("h1",null,"MINIMIZE"),r.a.createElement("h2",null,"Url Shortener"),r.a.createElement("form",{onSubmit:function(t){return function(t){t.preventDefault();var e=t.target.url.value,n=t.target.slug.value;/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/.test(e)?(u(!1),v(e,n)):(u(!0),w("Invalid URL"))}(t)}},r.a.createElement("label",null,"Url"),r.a.createElement("input",{name:"url",type:"text"}),r.a.createElement("label",null,"Slug (leave empty for auto generated slug)"),r.a.createElement("input",{name:"slug",type:"text"}),r.a.createElement("button",{type:"submit"},"GENERATE")),n?r.a.createElement(h,{warning:b}):null,s?r.a.createElement("button",{type:"button",onClick:function(t){return function(t){t.preventDefault(),b.select(),document.execCommand("copy")}(t)}},"Copy to clipboard"):null)};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root"))}},[[122,1,2]]]);
//# sourceMappingURL=main.a1698a7c.chunk.js.map