"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{186:function(n,e,t){t.r(e);var r=t(5861),a=t(9439),c=t(4687),u=t.n(c),s=t(1913),o=t(1686),i=t.n(o),p=t(2791),f=t(7689),l=t(4390),v=t(184);e.default=function(){var n=(0,p.useState)([]),e=(0,a.Z)(n,2),t=e[0],c=e[1],o=(0,p.useState)(!1),h=(0,a.Z)(o,2),d=h[0],x=h[1],g=(0,p.useState)(null),w=(0,a.Z)(g,2),m=w[0],k=w[1],y=(0,f.UO)().movieId;return(0,p.useEffect)((function(){var n=function(){var n=(0,r.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,x(!0),n.next=4,(0,l.tx)(y);case 4:if(0!==(e=n.sent).results){n.next=7;break}return n.abrupt("return",i().Notify.failure("Reviews not found!"));case 7:c(e.results),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),k(n.t0);case 13:return n.prev=13,x(!1),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[0,10,13,16]])})));return function(){return n.apply(this,arguments)}}();n()}),[y]),(0,v.jsxs)(v.Fragment,{children:[d&&(0,v.jsx)(s.a,{}),m&&(0,v.jsx)("p",{children:"Opps...Sorry, something went wrong"}),t.length>0?(0,v.jsx)("ul",{children:t.map((function(n){return(0,v.jsxs)("li",{children:[(0,v.jsxs)("p",{children:["Author: ",n.author]}),(0,v.jsx)("p",{children:n.content})]},n.id)}))}):(0,v.jsx)("p",{children:"Sorry! We don't have any reviews for this movie."})]})}},4390:function(n,e,t){t.d(e,{Hg:function(){return i},M1:function(){return l},TP:function(){return f},V0:function(){return p},tx:function(){return v}});var r=t(5861),a=t(4687),c=t.n(a),u=t(1243),s="https://api.themoviedb.org/3/",o="f9adb863f28a1c6f9debce9b06843390",i=function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(s,"trending/all/day?api_key=").concat(o));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(s,"search/movie?api_key=").concat(o,"&query=").concat(e,"&include_adult=false&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(s,"movie/").concat(e,"?api_key=").concat(o,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(s,"movie/").concat(e,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(s,"movie/").concat(e,"/reviews?api_key=").concat(o,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=186.01b06f20.chunk.js.map