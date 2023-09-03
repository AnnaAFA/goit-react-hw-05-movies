"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{3817:function(n,t,e){e.r(t),e.d(t,{default:function(){return Z}});var r,a,c=e(5861),o=e(9439),u=e(4687),i=e.n(u),s=e(9245),p=e(1686),l=e.n(p),f=e(4642),d=e(2791),x=e(7689),h=e(4390),v=e(168),g=e(5706),m=(g.Z.ul(r||(r=(0,v.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 15px;\n  list-style: none;\n"]))),g.Z.li(a||(a=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  width: 250px;\n  list-style: none;\n"])))),b=e(184),Z=function(){var n=(0,d.useState)([]),t=(0,o.Z)(n,2),e=t[0],r=t[1],a=(0,d.useState)(!1),u=(0,o.Z)(a,2),p=u[0],v=u[1],g=(0,d.useState)(null),Z=(0,o.Z)(g,2),k=Z[0],w=Z[1],y=(0,x.UO)().movieId;return(0,d.useEffect)((function(){var n=function(){var n=(0,c.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,v(!0),n.next=4,(0,h.M1)(y);case 4:if(0!==(t=n.sent).cast){n.next=7;break}return n.abrupt("return",l().Notify.failure("Cast not found!"));case 7:r(t.cast),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),w(n.t0);case 13:return n.prev=13,v(!1),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[0,10,13,16]])})));return function(){return n.apply(this,arguments)}}();n()}),[y]),(0,b.jsxs)(b.Fragment,{children:[p&&(0,b.jsx)(s.a,{}),k&&(0,b.jsx)("p",{children:"Opps...Sorry, something went wrong"}),e.length>0?(0,b.jsx)(f.Eq,{children:e.map((function(n){return(0,b.jsxs)(m,{children:[(0,b.jsx)("img",{src:null!==n&&void 0!==n&&n.profile_path?"https://image.tmdb.org/t/p/w200".concat(n.profile_path):"https://via.placeholder.com/200x300",alt:n.name}),(0,b.jsx)("p",{children:n.name}),(0,b.jsxs)("p",{children:["Character : ",n.character]})]},n.id)}))}):(0,b.jsx)("p",{children:"Sorry! We don't have any casts for this movie."})]})}},4642:function(n,t,e){e.d(t,{CJ:function(){return f},DI:function(){return d},Eq:function(){return l},dI:function(){return p}});var r,a,c,o,u=e(168),i=e(5706),s=e(1087),p=(0,i.Z)(s.rU)(r||(r=(0,u.Z)(["\n  padding: 3px 5px;\n  border-radius: 5px;\n  text-decoration: none;\n  color: black;\n  border: 1px solid black;\n  //   margin-left: 50px;\n\n  &:hover {\n    background-color: #483d8b;\n    color: white;\n  }\n"]))),l=i.Z.div(a||(a=(0,u.Z)(["\n  margin-top: 20px;\n  margin-left: 50px;\n  //   display: flex;\n"]))),f=i.Z.div(c||(c=(0,u.Z)(["\n  margin-top: 20px;\n  display: flex;\n  gap: 10px;\n  //   flex-direction: column;\n"]))),d=(0,i.Z)(s.rU)(o||(o=(0,u.Z)(["\n  padding: 3px 5px;\n  border-radius: 5px;\n  text-decoration: none;\n  color: black;\n  border: 1px solid black;\n  //   margin-left: 50px;\n  margin-left: 5px;\n\n  &:hover {\n    background-color: #483d8b;\n    color: white;\n  }\n"])))},4390:function(n,t,e){e.d(t,{Hg:function(){return s},M1:function(){return f},TP:function(){return l},V0:function(){return p},tx:function(){return d}});var r=e(5861),a=e(4687),c=e.n(a),o=e(1243),u="https://api.themoviedb.org/3/",i="f9adb863f28a1c6f9debce9b06843390",s=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u,"trending/all/day?api_key=").concat(i));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u,"search/movie?api_key=").concat(i,"&query=").concat(t,"&include_adult=false&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u,"movie/").concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u,"movie/").concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u,"movie/").concat(t,"/reviews?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=387.5a09b3ea.chunk.js.map