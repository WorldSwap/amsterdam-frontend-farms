(this["webpackJsonpworldswap-frontend"]=this["webpackJsonpworldswap-frontend"]||[]).push([[8],{678:function(e,n,t){"use strict";t.d(n,"a",(function(){return a})),t.d(n,"b",(function(){return o}));var r=t(16),c=t.n(r),a=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:18,t=new c.a(e).dividedBy(new c.a(10).pow(n));return t.toNumber()},o=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:18;return e.dividedBy(new c.a(10).pow(n)).toFixed()}},679:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"i",(function(){return l})),t.d(n,"d",(function(){return d})),t.d(n,"e",(function(){return b})),t.d(n,"j",(function(){return j})),t.d(n,"f",(function(){return p})),t.d(n,"c",(function(){return m})),t.d(n,"b",(function(){return f})),t.d(n,"g",(function(){return x})),t.d(n,"h",(function(){return O}));var r=t(5),c=t.n(r),a=t(19),o=t(16),i=t.n(o),s=t(683),u=function(){var e=Object(a.a)(c.a.mark((function e(n,t,r){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.methods.approve(t.options.address,s.ethers.constants.MaxUint256).send({from:r}));case 1:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),l=function(){var e=Object(a.a)(c.a.mark((function e(n,t,r,a){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("PARAMS =>",t,new i.a(r).times(new i.a(10).pow(18)).toString(),h()),e.abrupt("return",n.methods.deposit(t,new i.a(r).times(new i.a(10).pow(18)).toString(),h()).send({from:a}).on("transactionHash",(function(e){return e.transactionHash})));case 2:case"end":return e.stop()}}),e)})));return function(n,t,r,c){return e.apply(this,arguments)}}(),d=function(){var e=Object(a.a)(c.a.mark((function e(n,t,r){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.methods.deposit(new i.a(t).times(new i.a(10).pow(18)).toString(),h()).send({from:r}).on("transactionHash",(function(e){return e.transactionHash})));case 1:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),b=function(){var e=Object(a.a)(c.a.mark((function e(n,t,r){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.methods.deposit().send({from:r,value:new i.a(t).times(new i.a(10).pow(18)).toString()}).on("transactionHash",(function(e){return e.transactionHash})));case 1:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),j=function(){var e=Object(a.a)(c.a.mark((function e(n,t,r,a){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.methods.withdraw(t,new i.a(r).times(new i.a(10).pow(18)).toString()).send({from:a}).on("transactionHash",(function(e){return e.transactionHash})));case 1:case"end":return e.stop()}}),e)})));return function(n,t,r,c){return e.apply(this,arguments)}}(),p=function(){var e=Object(a.a)(c.a.mark((function e(n,t,r){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("0x3B9B74f48E89Ebd8b45a53444327013a2308A9BC"!==n.options.address){e.next=2;break}return e.abrupt("return",n.methods.emergencyWithdraw().send({from:r}).on("transactionHash",(function(e){return e.transactionHash})));case 2:if("0xBb2B66a2c7C2fFFB06EA60BeaD69741b3f5BF831"!==n.options.address){e.next=4;break}return e.abrupt("return",n.methods.emergencyWithdraw().send({from:r}).on("transactionHash",(function(e){return e.transactionHash})));case 4:return e.abrupt("return",n.methods.withdraw(new i.a(t).times(new i.a(10).pow(18)).toString()).send({from:r}).on("transactionHash",(function(e){return e.transactionHash})));case 5:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),m=function(){var e=Object(a.a)(c.a.mark((function e(n,t,r){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.methods.emergencyWithdraw().send({from:r}).on("transactionHash",(function(e){return e.transactionHash})));case 1:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),f=function(){var e=Object(a.a)(c.a.mark((function e(n,t,r){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.methods.deposit(t,"0",h()).send({from:r}).on("transactionHash",(function(e){return e.transactionHash})));case 1:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),x=function(){var e=Object(a.a)(c.a.mark((function e(n,t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.methods.deposit("0").send({from:t}).on("transactionHash",(function(e){return e.transactionHash})));case 1:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),O=function(){var e=Object(a.a)(c.a.mark((function e(n,t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.methods.deposit().send({from:t,value:new i.a(0)}).on("transactionHash",(function(e){return e.transactionHash})));case 1:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),h=function(){var e=localStorage.getItem("ref");return e&&42===e.length?e:"0x294E0DF4787A4c69608B66528b4f00fec3Fb454C"}},684:function(e,n,t){"use strict";t.d(n,"a",(function(){return h}));var r,c,a,o=t(18),i=t(46),s=(t(0),t(25)),u=t(689),l=t(3),d=t(27),b=t(7),j=l.e.a(r||(r=Object(i.a)(["\n  display: flex;\n  justify-content: space-around;\n  font-family: sans-serif;\n  text-align: center;\n  padding-top: 40px;\n  width: 100%;\n  margin: 0 auto 32px;\n"]))),p=l.e.div(c||(c=Object(i.a)(["\n  text-align: center;\n"]))),m=l.e.p(a||(a=Object(i.a)(["\n  color: ",";\n"])),(function(e){return e.theme.colors.primary})),f=3600,x=86400,O=function(e,n){return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{style:{fontSize:32},children:n}),Object(b.jsx)("div",{children:e})]})};function h(){var e=Date.now(),n=(d.a.startTime.getTime()-e)/1e3,t=Math.ceil(n/x)*x,r=Object(s.G)().isXl,c="https://bscscan.com/block/countdown/".concat(d.a.startBlock);if(e>d.a.startTime.getTime())return Object(b.jsx)(b.Fragment,{});var a={isPlaying:!0,size:r?120:80,strokeWidth:r?6:2};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)(j,{href:c,target:"_blank",rel:"noopener noreferrer",children:[Object(b.jsx)(u.CountdownCircleTimer,Object(o.a)(Object(o.a)({},a),{},{colors:"#7E2E84",duration:t,initialRemainingTime:n,children:function(e){var n=e.elapsedTime;return O("days",(t-n)/x|0)}})),Object(b.jsx)(u.CountdownCircleTimer,Object(o.a)(Object(o.a)({},a),{},{colors:"#D14081",duration:x,initialRemainingTime:n%x,onComplete:function(e){return[n-e>f,0]},children:function(e){var n=e.elapsedTime;return O("hours",(x-n)%x/f|0)}})),Object(b.jsx)(u.CountdownCircleTimer,Object(o.a)(Object(o.a)({},a),{},{colors:"#EF798A",duration:f,initialRemainingTime:n%f,onComplete:function(e){return[n-e>60,0]},children:function(e){var n=e.elapsedTime;return O("minutes",(f-n)%f/60|0)}})),Object(b.jsx)(u.CountdownCircleTimer,Object(o.a)(Object(o.a)({},a),{},{colors:"#218380",duration:60,initialRemainingTime:n%60,onComplete:function(e){return[n-e>0,0]},children:function(e){var n=e.elapsedTime;return O("seconds",60-n|0)}}))]}),Object(b.jsxs)(p,{children:[Object(b.jsx)("p",{style:{color:"white",marginBottom:16},children:Object(b.jsx)("strong",{children:d.a.startTime.toString()})}),Object(b.jsx)(m,{children:Object(b.jsxs)("a",{href:c,target:"_blank",rel:"noopener noreferrer",children:["Farming starts in Block #",d.a.startBlock]})})]})]})}},685:function(e,n,t){"use strict";t.d(n,"b",(function(){return j})),t.d(n,"a",(function(){return p}));var r=t(55),c=t(5),a=t.n(c),o=t(19),i=t(0),s=t(65),u=t(58),l=t(134),d=t(679),b=t(176),j=function(e){var n=Object(u.b)(),t=Object(s.m)().account,r=Object(b.c)();return{onReward:Object(i.useCallback)(Object(o.a)(a.a.mark((function c(){var o;return a.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(d.b)(r,e,t);case 2:return o=c.sent,n(Object(l.a)(t)),c.abrupt("return",o);case 5:case"end":return c.stop()}}),c)}))),[t,n,e,r])}},p=function(e){var n=Object(s.m)().account,t=Object(b.c)();return{onReward:Object(i.useCallback)(Object(o.a)(a.a.mark((function c(){var o;return a.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return o=e.reduce((function(e,c){return[].concat(Object(r.a)(e),[Object(d.b)(t,c,n)])}),[]),c.abrupt("return",Promise.all(o));case 2:case"end":return c.stop()}}),c)}))),[n,e,t])}}},686:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return l}));var r=t(5),c=t.n(r),a=t(19),o=t(79),i=t.n(o),s=t(59),u=function(e,n){return new(new i.a(e).eth.Contract)(s,n)},l=function(){var e=Object(a.a)(c.a.mark((function e(n,t,r){var a,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=u(n,t),e.prev=1,e.next=4,a.methods.balanceOf(r).call();case 4:return o=e.sent,e.abrupt("return",o);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return","0");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(n,t,r){return e.apply(this,arguments)}}()},701:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return jn}));var r=t(18),c=t(21),a=t(0),o=t.n(a),i=t(32),s=t(58),u=t(16),l=t.n(u),d=t(65),b=t(25),j=t(27),p=t(684),m=t(687);m.a.config({EXPONENTIAL_AT:1e3,DECIMAL_PLACES:80});new m.a(1);var f,x,O=new m.a(10512e3),h=(j.a.tokenBnbPid,t(46)),k=t(3),g=k.e.div(f||(f=Object(h.a)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  & > * {\n    min-width: 280px;\n    max-width: 31.5%;\n    width: 100%;\n    margin: 0 8px;\n    margin-bottom: 32px;\n  }\n"]))),v=t(113),y=t(112),w=t(135),S=t(134),C=t(10),T=t(109),B=t(7),A=k.e.div(x||(x=Object(h.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n\n  svg {\n    fill: ",";\n  }\n"])),(function(e){return e.theme.colors.primary})),P=function(e){var n=e.onClick,t=e.expanded;return Object(B.jsxs)(A,{"aria-label":"Hide or show expandable content",role:"button",onClick:function(){return n()},children:[Object(B.jsx)(b.B,{color:"primary",bold:!0,children:t?"Hide":"Details"}),t?Object(B.jsx)(b.k,{}):Object(B.jsx)(b.j,{})]})};P.defaultProps={expanded:!1};var D,F,H,q,I,z,E,L,N,M,R,W,U,G,Q,X,_,V,J,K,$,Y,Z,ee,ne,te,re,ce,ae,oe=P,ie=function(e){var n=e.quoteTokenAdresses,t=e.quoteTokenSymbol,r=e.tokenAddresses,c="BNB"===t?"ETH":n[56],a=r[56];return"".concat(c,"/").concat(a)},se=k.e.div(D||(D=Object(h.a)(["\n  margin-top: 24px;\n"]))),ue=Object(k.e)(b.r)(F||(F=Object(h.a)(["\n  text-decoration: none;\n  font-weight: normal;\n  color: ",";\n  display: flex;\n  align-items: center;\n\n  svg {\n    padding-left: 4px;\n    height: 18px;\n    width: auto;\n    fill: ",";\n  }\n"])),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.primary})),le=function(e){var n=e.isTokenOnly,t=e.bscScanAddress,r=e.removed,c=e.totalValueFormated,a=e.lpLabel,o=e.quoteTokenAdresses,i=e.quoteTokenSymbol,s=e.tokenAddresses,u=Object(T.a)(),l=ie({quoteTokenAdresses:o,quoteTokenSymbol:i,tokenAddresses:s});return Object(B.jsxs)(se,{children:[Object(B.jsxs)(b.m,{justifyContent:"space-between",children:[Object(B.jsxs)(b.B,{children:[u(316,"Stake"),":"]}),Object(B.jsx)(ue,{href:n?"https://exchange.worldswap.finance/#/swap/".concat(s[56]):"https://exchange.worldswap.finance/#/add/".concat(l),children:a})]}),!r&&Object(B.jsxs)(b.m,{justifyContent:"space-between",children:[Object(B.jsxs)(b.B,{children:[u(23,"Total Liquidity"),":"]}),Object(B.jsx)(b.B,{children:c})]}),Object(B.jsx)(b.m,{justifyContent:"flex-start",children:Object(B.jsx)(b.q,{external:!0,href:t,bold:!1,children:u(356,"View on BscScan")})})]})},de=function(){return Object(B.jsx)(b.A,{variant:"success",outline:!0,startIcon:Object(B.jsx)(b.D,{}),children:"No Fees"})},be=Object(k.e)(b.m)(H||(H=Object(h.a)(["\n  svg {\n    margin-right: 0.25rem;\n  }\n"]))),je=Object(k.e)(b.A)(q||(q=Object(h.a)(["\n  margin-left: 4px;\n"]))),pe=function(e){var n=e.lpLabel,t=e.multiplier,r=(e.risk,e.farmImage),c=(e.tokenSymbol,e.depositFee);return Object(B.jsxs)(be,{justifyContent:"space-between",alignItems:"center",mb:"12px",children:[r,Object(B.jsxs)(b.m,{flexDirection:"column",alignItems:"flex-end",children:[Object(B.jsx)(b.n,{mb:"4px",children:n}),Object(B.jsxs)(b.m,{justifyContent:"center",children:[0===c?Object(B.jsx)(de,{}):null,Object(B.jsx)(je,{variant:"secondary",children:t})]})]})]})},me=t(5),fe=t.n(me),xe=t(19),Oe=t(686),he=t(182),ke=(t(683),t(679)),ge=t(176),ve=function(e){var n=Object(s.b)(),t=Object(d.m)().account,r=Object(ge.c)();return{onStake:Object(a.useCallback)(function(){var c=Object(xe.a)(fe.a.mark((function c(a){var o;return fe.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(ke.i)(r,e,a,t);case 2:o=c.sent,n(Object(S.a)(t)),console.info(o);case 5:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}(),[t,n,r,e])}},ye=function(e){var n=Object(s.b)(),t=Object(d.m)().account,r=Object(ge.c)();return{onUnstake:Object(a.useCallback)(function(){var c=Object(xe.a)(fe.a.mark((function c(a){var o;return fe.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(ke.j)(r,e,a,t);case 2:o=c.sent,n(Object(S.a)(t)),console.info(o);case 5:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}(),[t,n,r,e])}},we=t(678),Se=k.e.div(I||(I=Object(h.a)(["\n  height: ","px;\n  width: ","px;\n"])),(function(e){return e.size}),(function(e){return e.size})),Ce=function(e){var n,t=e.size,r=void 0===t?"md":t,c=Object(a.useContext)(k.a).spacing;switch(r){case"lg":n=c[6];break;case"sm":n=c[2];break;case"md":default:n=c[4]}return Object(B.jsx)(Se,{size:n})},Te=k.e.div(z||(z=Object(h.a)(["\n  align-items: center;\n  background-color: ","00;\n  display: flex;\n  margin: 0;\n  padding: ","px;\n"])),(function(e){return e.theme.colors.primaryDark}),(function(e){return e.theme.spacing[4]})),Be=k.e.div(E||(E=Object(h.a)(["\n  flex: 1;\n  text-align: center;\n"]))),Ae=function(e){var n=e.children,t=o.a.Children.toArray(n).length;return Object(B.jsx)(Te,{children:o.a.Children.map(n,(function(e,n){return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(Be,{children:e}),n<t-1&&Object(B.jsx)(Ce,{})]})}))})},Pe=k.e.div(L||(L=Object(h.a)(["\n  align-items: center;\n  background-color: ",";\n  border-radius: ",";\n  display: flex;\n  height: 72px;\n  padding: 0 ","px;\n"])),(function(e){return e.theme.colors.input}),(function(e){return e.theme.radii.default}),(function(e){return e.theme.spacing[3]})),De=k.e.input(N||(N=Object(h.a)(["\n  width: 100%;\n  background: none;\n  border: 0;\n  color: ",";\n  font-size: 18px;\n  flex: 1;\n  height: 56px;\n  margin: 0;\n  padding: 0;\n  outline: none;\n"])),(function(e){return e.theme.colors.primary})),Fe=function(e){var n=e.endAdornment,t=e.onChange,r=e.placeholder,c=e.startAdornment,a=e.value;return Object(B.jsxs)(Pe,{children:[!!c&&c,Object(B.jsx)(De,{placeholder:r,value:a,onChange:t}),!!n&&n]})},He=k.e.div(M||(M=Object(h.a)([""]))),qe=k.e.div(R||(R=Object(h.a)(["\n  width: ","px;\n"])),(function(e){return e.theme.spacing[3]})),Ie=k.e.div(W||(W=Object(h.a)(["\n  align-items: center;\n  display: flex;\n"]))),ze=k.e.div(U||(U=Object(h.a)(["\n  align-items: center;\n  color: ",";\n  display: flex;\n  font-size: 14px;\n  font-weight: 700;\n  height: 44px;\n  justify-content: flex-end;\n"])),(function(e){return e.theme.colors.primary})),Ee=k.e.span(G||(G=Object(h.a)(["\n  color: ",";\n  font-weight: 700;\n"])),(function(e){return e.theme.colors.primary})),Le=function(e){var n=e.max,t=e.symbol,r=e.onChange,c=e.onSelectMax,a=e.value,o=e.depositFeeBP,i=void 0===o?0:o,s=Object(T.a)();return Object(B.jsxs)(He,{children:[Object(B.jsxs)(ze,{children:[n.toLocaleString()," ",t," ",s(526,"Available")]}),Object(B.jsx)(Fe,{endAdornment:Object(B.jsxs)(Ie,{children:[Object(B.jsx)(Ee,{children:t}),Object(B.jsx)(qe,{}),Object(B.jsx)("div",{children:Object(B.jsx)(b.d,{size:"sm",onClick:c,children:s(452,"Max")})})]}),onChange:r,placeholder:"0",value:a}),i>0?Object(B.jsxs)(ze,{children:[s(10001,"Deposit Fee"),": ",new m.a(a||0).times(i/1e4).toString()," ",t]}):null]})},Ne=function(e){var n=e.max,t=e.onConfirm,r=e.onDismiss,o=e.tokenName,i=void 0===o?"":o,s=e.depositFeeBP,u=void 0===s?0:s,l=Object(a.useState)(""),d=Object(c.a)(l,2),j=d[0],p=d[1],m=Object(a.useState)(!1),f=Object(c.a)(m,2),x=f[0],O=f[1],h=Object(T.a)(),k=Object(a.useMemo)((function(){return Object(we.b)(n)}),[n]),g=Object(a.useCallback)((function(e){p(e.currentTarget.value)}),[p]),v=Object(a.useCallback)((function(){p(k)}),[k,p]);return Object(B.jsxs)(b.v,{title:"".concat(h(316,"Deposit")," ").concat(i," Tokens"),onDismiss:r,children:[Object(B.jsx)(Le,{value:j,onSelectMax:v,onChange:g,max:k,symbol:i,depositFeeBP:u}),Object(B.jsxs)(Ae,{children:[Object(B.jsx)(b.d,{variant:"secondary",onClick:r,children:h(462,"Cancel")}),Object(B.jsx)(b.d,{disabled:x,onClick:Object(xe.a)(fe.a.mark((function e(){return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),e.next=3,t(j);case 3:O(!1),r();case 5:case"end":return e.stop()}}),e)}))),children:x?h(488,"Pending Confirmation"):h(464,"Confirm")})]})]})},Me=function(e){var n=e.onConfirm,t=e.onDismiss,r=e.max,o=e.tokenName,i=void 0===o?"":o,s=Object(a.useState)(""),u=Object(c.a)(s,2),l=u[0],d=u[1],j=Object(a.useState)(!1),p=Object(c.a)(j,2),m=p[0],f=p[1],x=Object(T.a)(),O=Object(a.useMemo)((function(){return Object(we.b)(r)}),[r]),h=Object(a.useCallback)((function(e){d(e.currentTarget.value)}),[d]),k=Object(a.useCallback)((function(){d(O)}),[O,d]);return Object(B.jsxs)(b.v,{title:"Withdraw ".concat(i),onDismiss:t,children:[Object(B.jsx)(Le,{onSelectMax:k,onChange:h,value:l,max:O,symbol:i}),Object(B.jsxs)(Ae,{children:[Object(B.jsx)(b.d,{variant:"secondary",onClick:t,children:x(462,"Cancel")}),Object(B.jsx)(b.d,{disabled:m,onClick:Object(xe.a)(fe.a.mark((function e(){return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),e.next=3,n(l);case 3:f(!1),t();case 5:case"end":return e.stop()}}),e)}))),children:m?x(488,"Pending Confirmation"):x(464,"Confirm")})]})]})},Re=k.e.div(Q||(Q=Object(h.a)(["\n  display: flex;\n  svg {\n    width: 20px;\n  }\n"]))),We=function(e){var n=e.stakedBalance,t=e.tokenBalance,r=e.tokenName,a=e.pid,o=e.depositFeeBP,i=Object(T.a)(),s=ve(a).onStake,u=ye(a).onUnstake,l=Object(we.a)(n),d=l.toLocaleString(),j=Object(b.H)(Object(B.jsx)(Ne,{max:t,onConfirm:s,tokenName:r,depositFeeBP:o})),p=Object(c.a)(j,1)[0],m=Object(b.H)(Object(B.jsx)(Me,{max:n,onConfirm:u,tokenName:r})),f=Object(c.a)(m,1)[0];return Object(B.jsxs)(b.m,{justifyContent:"space-between",alignItems:"center",children:[Object(B.jsx)(b.n,{color:0===l?"textDisabled":"text",children:d}),0===l?Object(B.jsx)(b.d,{onClick:p,children:i(999,"Stake")}):Object(B.jsxs)(Re,{children:[Object(B.jsx)(b.o,{variant:"tertiary",onClick:f,mr:"6px",children:Object(B.jsx)(b.u,{color:"primary"})}),Object(B.jsx)(b.o,{variant:"tertiary",onClick:p,children:Object(B.jsx)(b.a,{color:"primary"})})]})]})},Ue=t(685),Ge=k.e.div(X||(X=Object(h.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: column;\n"]))),Qe=function(e){var n=e.earnings,t=e.pid,r=Object(T.a)(),o=Object(a.useState)(!1),i=Object(c.a)(o,2),s=i[0],u=i[1],l=Object(Ue.b)(t).onReward,d=ve(t).onStake,p=Object(we.a)(n),m=p.toLocaleString();return Object(B.jsxs)(b.m,{mb:"8px",justifyContent:"space-between",alignItems:"center",children:[Object(B.jsx)(b.n,{color:0===p?"textDisabled":"text",children:m}),Object(B.jsxs)(Ge,{children:[t===j.a.tokenPoolPid?Object(B.jsx)(b.d,{disabled:0===p||s,size:"sm",variant:"secondary",marginBottom:"15px",onClick:Object(xe.a)(fe.a.mark((function e(){return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.next=3,d(p.toString());case 3:u(!1);case 4:case"end":return e.stop()}}),e)}))),children:r(999,"Compound")}):null,Object(B.jsx)(b.d,{disabled:0===p||s,onClick:Object(xe.a)(fe.a.mark((function e(){return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.next=3,l();case 3:u(!1);case 4:case"end":return e.stop()}}),e)}))),children:r(999,"Harvest")})]})]})},Xe=k.e.div(_||(_=Object(h.a)(["\n  padding-top: 16px;\n"]))),_e=function(e){var n=e.farm,t=e.ethereum,r=e.account,o=Object(T.a)(),i=Object(a.useState)(!1),u=Object(c.a)(i,2),l=u[0],p=u[1],m=Object(y.a)(n.pid),f=m.pid,x=m.lpAddresses,O=m.tokenAddresses,h=m.isTokenOnly,k=m.depositFeeBP,g=Object(y.b)(f),v=g.allowance,w=g.tokenBalance,C=g.stakedBalance,A=g.earnings,P=x[56],D=O[56],F=n.lpSymbol.toUpperCase(),H=r&&v&&v.isGreaterThan(0),q=function(e){var n=Object(s.b)(),t=Object(d.m)().account,r=Object(ge.c)();return{onApprove:Object(a.useCallback)(Object(xe.a)(fe.a.mark((function c(){var a;return fe.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,Object(ke.a)(e,r,t);case 3:return a=c.sent,n(Object(S.a)(t)),c.abrupt("return",a);case 8:return c.prev=8,c.t0=c.catch(0),c.abrupt("return",!1);case 11:case"end":return c.stop()}}),c,null,[[0,8]])}))),[t,n,e,r])}}(Object(a.useMemo)((function(){return h?Object(Oe.a)(t,D):Object(Oe.a)(t,P)}),[t,P,D,h])).onApprove,I=Object(a.useCallback)(Object(xe.a)(fe.a.mark((function e(){return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,p(!0),e.next=4,q();case 4:p(!1),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[q]);return Object(B.jsxs)(Xe,{children:[Object(B.jsxs)(b.m,{children:[Object(B.jsx)(b.B,{bold:!0,textTransform:"uppercase",color:"secondary",fontSize:"12px",pr:"3px",children:j.a.tokenSymbol}),Object(B.jsx)(b.B,{bold:!0,textTransform:"uppercase",color:"textSubtle",fontSize:"12px",children:o(999,"Earned")})]}),Object(B.jsx)(Qe,{earnings:A,pid:f}),Object(B.jsxs)(b.m,{children:[Object(B.jsx)(b.B,{bold:!0,textTransform:"uppercase",color:"secondary",fontSize:"12px",pr:"3px",children:F}),Object(B.jsx)(b.B,{bold:!0,textTransform:"uppercase",color:"textSubtle",fontSize:"12px",children:o(999,"Staked")})]}),r?H?Object(B.jsx)(We,{stakedBalance:C,tokenBalance:w,tokenName:F,pid:f,depositFeeBP:k}):Object(B.jsx)(b.d,{mt:"8px",fullWidth:!0,disabled:l,onClick:I,children:o(999,"Approve Contract")}):Object(B.jsx)(he.a,{mt:"8px",fullWidth:!0})]})},Ve=function(e){var n,t=e.numberOfDays,r=e.farmApy/100,c=t/365,a=1e3/e.cakePrice,o=a*Math.pow(1+r/365,365*c);return n=o-a,Math.round(100*n)/100},Je=function(e){return(e.amountEarned/e.amountInvested*100).toFixed(2)},Ke=k.e.div(V||(V=Object(h.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(4, auto);\n  margin-bottom: 24px;\n"]))),$e=k.e.div(J||(J=Object(h.a)(["\n  margin-bottom: '10px';\n"]))),Ye=Object(k.e)(b.B)(K||(K=Object(h.a)(["\n  max-width: 320px;\n  margin-bottom: 28px;\n"]))),Ze=function(e){var n=e.onDismiss,t=e.lpLabel,r=e.quoteTokenAdresses,c=e.quoteTokenSymbol,a=e.tokenAddresses,o=e.cakePrice,i=e.apy,s=Object(T.a)(),u=ie({quoteTokenAdresses:r,quoteTokenSymbol:c,tokenAddresses:a}),d=i.times(new l.a(100)).toNumber(),p=1e3/o.toNumber(),m=Ve({numberOfDays:1,farmApy:d,cakePrice:o}),f=Ve({numberOfDays:7,farmApy:d,cakePrice:o}),x=Ve({numberOfDays:30,farmApy:d,cakePrice:o}),O=Ve({numberOfDays:365,farmApy:d,cakePrice:o});return Object(B.jsxs)(b.v,{title:"ROI",onDismiss:n,children:[Object(B.jsxs)(Ke,{children:[Object(B.jsx)($e,{children:Object(B.jsx)(b.B,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:s(999,"Timeframe")})}),Object(B.jsx)($e,{children:Object(B.jsx)(b.B,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:s(999,"ROI")})}),Object(B.jsx)($e,{children:Object(B.jsxs)(b.B,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:[j.a.tokenSymbol," per $1000"]})}),Object(B.jsx)($e,{children:Object(B.jsx)(b.B,{children:"1d"})}),Object(B.jsx)($e,{children:Object(B.jsxs)(b.B,{children:[Je({amountEarned:m,amountInvested:p}),"%"]})}),Object(B.jsx)($e,{children:Object(B.jsx)(b.B,{children:m})}),Object(B.jsx)($e,{children:Object(B.jsx)(b.B,{children:"7d"})}),Object(B.jsx)($e,{children:Object(B.jsxs)(b.B,{children:[Je({amountEarned:f,amountInvested:p}),"%"]})}),Object(B.jsx)($e,{children:Object(B.jsx)(b.B,{children:f})}),Object(B.jsx)($e,{children:Object(B.jsx)(b.B,{children:"30d"})}),Object(B.jsx)($e,{children:Object(B.jsxs)(b.B,{children:[Je({amountEarned:x,amountInvested:p}),"%"]})}),Object(B.jsx)($e,{children:Object(B.jsx)(b.B,{children:x})}),Object(B.jsx)($e,{children:Object(B.jsx)(b.B,{children:"365d(APY)"})}),Object(B.jsx)($e,{children:Object(B.jsxs)(b.B,{children:[Je({amountEarned:O,amountInvested:p}),"%"]})}),Object(B.jsx)($e,{children:Object(B.jsx)(b.B,{children:O})})]}),Object(B.jsx)(Ye,{fontSize:"12px",color:"textSubtle",children:s(999,"Calculated based on current rates. Compounding once daily. Rates are estimates provided for your convenience only, and by no means represent guaranteed returns.")}),Object(B.jsx)(b.m,{justifyContent:"center",children:Object(B.jsxs)(b.r,{href:"https://exchange.pancakeswap.finance/#/add/".concat(u),children:[s(999,"Get")," ",t]})})]})},en=function(e){var n=e.lpLabel,t=e.quoteTokenAdresses,r=e.quoteTokenSymbol,a=e.tokenAddresses,o=e.cakePrice,i=e.apy,s=Object(b.H)(Object(B.jsx)(Ze,{lpLabel:n,quoteTokenAdresses:t,quoteTokenSymbol:r,tokenAddresses:a,cakePrice:o,apy:i})),u=Object(c.a)(s,1)[0];return Object(B.jsx)(b.o,{onClick:u,variant:"text",size:"sm",ml:"4px",children:Object(B.jsx)(b.g,{})})},nn=Object(k.f)($||($=Object(h.a)(["\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n"]))),tn=k.e.div(Y||(Y=Object(h.a)(["\n  background: linear-gradient(\n    45deg,\n    rgba(255, 0, 0, 1) 0%,\n    rgba(255, 154, 0, 1) 10%,\n    rgba(208, 222, 33, 1) 20%,\n    rgba(79, 220, 74, 1) 30%,\n    rgba(63, 218, 216, 1) 40%,\n    rgba(47, 201, 226, 1) 50%,\n    rgba(28, 127, 238, 1) 60%,\n    rgba(95, 21, 242, 1) 70%,\n    rgba(186, 12, 248, 1) 80%,\n    rgba(251, 7, 217, 1) 90%,\n    rgba(255, 0, 0, 1) 100%\n  );\n  background-size: 300% 300%;\n  animation: "," 2s linear infinite;\n  border-radius: 16px;\n  filter: blur(6px);\n  position: absolute;\n  top: -2px;\n  right: -2px;\n  bottom: -2px;\n  left: -2px;\n  z-index: -1;\n"])),nn),rn=k.e.div(Z||(Z=Object(h.a)(["\n  align-self: baseline;\n  background: ",";\n  border-radius: 32px;\n  box-shadow: 0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  padding: 24px;\n  position: relative;\n  text-align: center;\n"])),(function(e){return e.theme.card.background})),cn=k.e.div(ee||(ee=Object(h.a)(["\n  background-color: ",";\n  height: 1px;\n  margin: 28px auto;\n  width: 100%;\n"])),(function(e){return e.theme.colors.borderColor})),an=k.e.div(ne||(ne=Object(h.a)(["\n  height: ",";\n  overflow: hidden;\n"])),(function(e){return e.expanded?"100%":"0px"})),on=(k.e.div(te||(te=Object(h.a)(["\n  display: flex;\n"]))),function(e){var n=e.farm,t=e.removed,r=e.cakePrice,o=e.bnbPrice,i=e.ethereum,s=e.account,u=Object(T.a)(),d=Object(a.useState)(!1),p=Object(c.a)(d,2),m=p[0],f=p[1],x=n.tokenSymbol.toLocaleLowerCase(),O=n.quoteTokenSymbol.toLowerCase(),h=n.isTokenOnly?Object(B.jsx)("img",{src:"/images/farms/".concat(x,".png"),alt:x,width:64,height:64,style:{height:64}}):Object(B.jsxs)(b.m,{className:"flex space-x-1",children:[Object(B.jsx)("img",{src:"/images/farms/".concat(x,".png"),alt:x,width:48,height:48,style:{height:48}}),Object(B.jsx)("img",{src:"/images/farms/".concat(O,".png"),alt:O,width:48,height:48,style:{marginLeft:"-18px",height:48}})]}),k=Object(a.useMemo)((function(){if(!n.lpTotalInQuoteToken)return null;var e=n.lpTotalInQuoteToken;return n.tokenDecimals&&n.tokenDecimals<18&&(e instanceof l.a||(e=new l.a(e)),e=e.dividedBy(Math.pow(10,18-n.tokenDecimals))),n.quoteTokenSymbol===C.b.BNB?o.times(e):n.quoteTokenSymbol===C.b.CAKE?r.times(e):e}),[o,r,n.lpTotalInQuoteToken,n.quoteTokenSymbol,n.tokenDecimals]),g=k?"$".concat(Number(k).toLocaleString(void 0,{maximumFractionDigits:0})):"-",v=n.lpSymbol,y=n.apy&&n.apy.times(new l.a(100)).toNumber().toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),w=n.quoteTokenAdresses,S=n.quoteTokenSymbol,A=n.tokenAddresses,P=n.risk;return Object(B.jsxs)(rn,{children:[n.tokenSymbol===j.a.tokenSymbol&&Object(B.jsx)(tn,{}),Object(B.jsx)(pe,{lpLabel:v,multiplier:n.multiplier,risk:P,depositFee:n.depositFeeBP,farmImage:h,tokenSymbol:n.tokenSymbol}),!t&&Object(B.jsxs)(b.m,{justifyContent:"space-between",alignItems:"center",children:[Object(B.jsxs)(b.B,{children:[u(352,"APR"),":"]}),Object(B.jsx)(b.B,{bold:!0,style:{display:"flex",alignItems:"center"},children:n.apy?Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(en,{lpLabel:v,quoteTokenAdresses:w,quoteTokenSymbol:S,tokenAddresses:A,cakePrice:r,apy:n.apy}),"1INCH"===n.lpSymbol?"Unknown":"".concat(y,"%")]}):Object(B.jsx)(b.y,{height:24,width:80})})]}),Object(B.jsxs)(b.m,{justifyContent:"space-between",children:[Object(B.jsxs)(b.B,{children:[u(318,"Earn"),":"]}),Object(B.jsx)(b.B,{bold:!0,children:j.a.tokenSymbol})]}),Object(B.jsxs)(b.m,{justifyContent:"space-between",children:[Object(B.jsxs)(b.B,{style:{fontSize:"24px"},children:[u(10001,"Deposit Fee"),":"]}),Object(B.jsxs)(b.B,{bold:!0,style:{fontSize:"24px"},children:[n.depositFeeBP/100,"%"]})]}),Object(B.jsx)(_e,{farm:n,ethereum:i,account:s}),Object(B.jsx)(cn,{}),Object(B.jsx)(oe,{onClick:function(){return f(!m)},expanded:m}),Object(B.jsx)(an,{expanded:m,children:Object(B.jsx)(le,{removed:t,isTokenOnly:n.isTokenOnly,bscScanAddress:n.isTokenOnly?"https://bscscan.com/token/".concat(n.tokenAddresses[56]):"https://bscscan.com/token/".concat(n.lpAddresses[56]),totalValueFormated:g,lpLabel:v,quoteTokenAdresses:w,quoteTokenSymbol:S,tokenAddresses:A})})]})}),sn=t(78),un=function(e){var n=e.stakedOnly,t=e.setStakedOnly,r=Object(i.g)(),c=r.url,a=r.isExact,o=Object(T.a)();return Object(B.jsxs)(ln,{children:[Object(B.jsxs)(dn,{children:[Object(B.jsx)(b.C,{checked:n,onChange:function(){return t(!n)}}),Object(B.jsxs)(b.B,{children:[" ",o(699,"Staked only")]})]}),Object(B.jsxs)(b.e,{activeIndex:a?0:1,size:"sm",variant:"subtle",children:[Object(B.jsx)(b.f,{as:sn.b,to:"".concat(c),children:o(698,"Active")}),Object(B.jsx)(b.f,{as:sn.b,to:"".concat(c,"/history"),children:o(700,"Inactive")})]})]})},ln=k.e.div(re||(re=Object(h.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 32px;\n"]))),dn=k.e.div(ce||(ce=Object(h.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 32px;\n\n  "," {\n    margin-left: 8px;\n  }\n"])),b.B),bn=k.e.div(ae||(ae=Object(h.a)(["\n  background-color: ",";\n  height: 1px;\n  margin: 0 auto 32px;\n  width: 100%;\n"])),(function(e){return e.theme.colors.textSubtle})),jn=function(e){var n=Object(i.g)().path,t=Object(y.c)(),o=Object(y.f)(),u=Object(y.e)(),m=Object(d.m)(),f=m.account,x=m.ethereum,h=e.tokenMode,k=Object(s.b)(),T=Object(w.a)().fastRefresh;Object(a.useEffect)((function(){f&&k(Object(S.a)(f))}),[f,k,T]);var A=Object(a.useState)(!1),P=Object(c.a)(A,2),D=P[0],F=P[1],H=t.filter((function(e){return!!e.isTokenOnly===!!h&&"0X"!==e.multiplier})),q=t.filter((function(e){return!!e.isTokenOnly===!!h&&"0X"===e.multiplier})),I=H.filter((function(e){return e.userData&&new l.a(e.userData.stakedBalance).isGreaterThan(0)})),z=Object(a.useCallback)((function(e,n){return e.map((function(e){var n="".concat(j.a.tokenKeyMasterChef,"PerBlock"),t=new l.a(e[n]||1).times(new l.a(e.poolWeight)).div(new l.a(10).pow(18)).times(O),c=o.times(t),a=new l.a(e.lpTotalInQuoteToken||0);return e.quoteTokenSymbol===C.b.BNB&&(a=a.times(u)),e.tokenDecimals&&e.tokenDecimals<18&&(a=a.div(Math.pow(10,18-e.tokenDecimals))),a.comparedTo(0)>0&&(c=c.div(a)),Object(r.a)(Object(r.a)({},e),{},{apy:c})})).map((function(e){return Object(B.jsx)(on,{farm:e,removed:n,bnbPrice:u,cakePrice:o,ethereum:x,account:f},e.pid)}))}),[u,f,o,x]);return Object(B.jsxs)(v.a,{children:[Object(B.jsxs)("div",{style:{marginBottom:64},children:[Object(B.jsx)(b.n,{as:"h1",size:"lg",color:"primary",mb:"50px",style:{textAlign:"center"},children:h?j.a.poolPrimaryTitle:j.a.farmPrimaryTitle}),Object(B.jsx)(b.n,{as:"h2",color:"secondary",style:{textAlign:"center"},children:h?j.a.poolSecondaryTitle:j.a.farmSecondaryTitle}),Object(B.jsx)(p.a,{})]}),Object(B.jsx)(un,{stakedOnly:D,setStakedOnly:F}),Object(B.jsxs)("div",{children:[Object(B.jsx)(bn,{}),Object(B.jsxs)(g,{children:[Object(B.jsx)(i.a,{exact:!0,path:"".concat(n),children:z(D?I:H,!1)}),Object(B.jsx)(i.a,{exact:!0,path:"".concat(n,"/history"),children:z(q,!0)})]})]}),j.a.bottomIllustration]})}}}]);
//# sourceMappingURL=8.6d0bd96d.chunk.js.map