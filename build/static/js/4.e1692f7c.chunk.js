(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{854:function(e,a,t){},855:function(e,a,t){},857:function(e,a,t){"use strict";t.r(a);var n=t(4),s=t(8),c=t(6),r=t(5),l=t(7),o=t(0),i=t.n(o),m=(t(854),t(848),t(215));t(855);function u(e){return i.a.createElement("div",{className:"socialButtons ".concat(e.classes)},i.a.createElement("div",{className:"svidjanja"},i.a.createElement("p",null,"Svi\u0111anja:"),i.a.createElement("button",{className:"like"},i.a.createElement("i",{className:"far fa-thumbs-up"}))),i.a.createElement("div",{className:"komentarisanje"},i.a.createElement("p",null,"Komentara:")))}t.d(a,"default",function(){return f});var f=function(e){function a(){var e,t;Object(n.a)(this,a);for(var s=arguments.length,l=new Array(s),o=0;o<s;o++)l[o]=arguments[o];return(t=Object(c.a)(this,(e=Object(r.a)(a)).call.apply(e,[this].concat(l)))).state={prikazInfoObjekta:!1},t.removeCommentBox=function(){t.setState({prikazInfoObjekta:!1})},t.showInfoObject=function(){t.setState(function(e){return{prikazInfoObjekta:!e.prikazInfoObjekta}})},t}return Object(l.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.podaci,a=e.id,t=e.img;return i.a.createElement("div",{className:"img__container ".concat(this.props.classes)},i.a.createElement("img",{src:t,alt:"",onClick:this.showInfoObject}),i.a.createElement(m.a,{classes:"smaller__btn ".concat(this.props.classes),clicked:this.setSmallObjects(),children:i.a.createElement("i",{className:"fas fa-compress-arrows-alt"})}),i.a.createElement(m.a,{classes:"close__btn",clicked:this.closeObject(a),children:i.a.createElement("i",{className:"fa fa-window-close"})}),i.a.createElement(u,{classes:this.props.classes}))}},{key:"closeObject",value:function(e){var a=this;return function(){a.props.removeObjekat(e)}}},{key:"setSmallObjects",value:function(){var e=this;return function(){e.props.setSmallObjects()}}}]),a}(o.Component)}}]);
//# sourceMappingURL=4.e1692f7c.chunk.js.map