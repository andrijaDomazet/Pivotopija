(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{169:function(e,t,a){},170:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return f});var n=a(1),o=a(5),i=a(3),c=a(2),r=a(4),s=a(0),p=a.n(s),m=(a(169),a(162),a(163)),f=function(e){function t(){var e,a;Object(n.a)(this,t);for(var o=arguments.length,r=new Array(o),s=0;s<o;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(r)))).state={prikazInfoObjekta:!1},a.removeCommentBox=function(){a.setState({prikazInfoObjekta:!1})},a.okidacInfoObjekta=function(){a.setState(function(e){return{prikazInfoObjekta:!e.prikazInfoObjekta}})},a}return Object(r.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props.podaci,a=t.id,n=t.img;return p.a.createElement("div",{className:"img-container"},p.a.createElement("img",{src:n,alt:"",onClick:this.okidacInfoObjekta}),p.a.createElement("span",{className:"close-btn",onClick:function(){e.props.removeObjekat(a)}},p.a.createElement("i",{className:"fa fa-window-close"})),p.a.createElement(m.a,{podaci:this.props.podaci,removeCommentBox:this.removeCommentBox,show:this.state.prikazInfoObjekta}))}}]),t}(s.Component)}}]);
//# sourceMappingURL=4.fa9512aa.chunk.js.map