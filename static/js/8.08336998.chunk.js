(this["webpackJsonpworldswap-frontend"]=this["webpackJsonpworldswap-frontend"]||[]).push([[8],{678:function(e,n,t){"use strict";t.d(n,"a",(function(){return c})),t.d(n,"b",(function(){return o}));var r=t(16),a=t.n(r),c=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:18,t=new a.a(e).dividedBy(new a.a(10).pow(n));return t.toNumber()},o=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:18;return e.dividedBy(new a.a(10).pow(n)).toFixed()}},679:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"i",(function(){return d})),t.d(n,"d",(function(){return b})),t.d(n,"e",(function(){return j})),t.d(n,"j",(function(){return p})),t.d(n,"f",(function(){return f})),t.d(n,"c",(function(){return m})),t.d(n,"b",(function(){return x})),t.d(n,"g",(function(){return h})),t.d(n,"h",(function(){return O}));var r=t(5),a=t.n(r),c=t(19),o=t(16),i=t.n(o),s=t(27),u=t(683),l=function(){var e=Object(c.a)(a.a.mark((function e(n,t,r){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.methods.approve(t.options.address,u.ethers.constants.MaxUint256).send({from:r}));case 1:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),d=function(){var e=Object(c.a)(a.a.mark((function e(n,t,r,c,o){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!s.a.referrals.enabled){e.next=2;break}return e.abrupt("return",n.methods.deposit(t,new i.a(r).times(new i.a(10).pow(o)).toString(),k()).send({from:c}).on("transactionHash",(function(e){return e.transactionHash})));case 2:return e.abrupt("return",n.methods.deposit(t,new i.a(r).times(new i.a(10).pow(o)).toString()).send({from:c}).on("transactionHash",(function(e){return e.transactionHash})));case 3:case"end":return e.stop()}}),e)})));return function(n,t,r,a,c){return e.apply(this,arguments)}}(),b=function(){var e=Object(c.a)(a.a.mark((function e(n,t,r){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!s.a.referrals.enabled){e.next=2;break}return e.abrupt("return",n.methods.deposit(new i.a(t).times(new i.a(10).pow(18)).toString(),k()).send({from:r}).on("transactionHash",(function(e){return e.transactionHash})));case 2:return e.abrupt("return",n.methods.deposit(new i.a(t).times(new i.a(10).pow(18)).toString()).send({from:r}).on("transactionHash",(function(e){return e.transactionHash})));case 3:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),j=function(){var e=Object(c.a)(a.a.mark((function e(n,t,r){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.methods.deposit().send({from:r,value:new i.a(t).times(new i.a(10).pow(18)).toString()}).on("transactionHash",(function(e){return e.transactionHash})));case 1:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),p=function(){var e=Object(c.a)(a.a.mark((function e(n,t,r,c,o){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.methods.withdraw(t,new i.a(r).times(new i.a(10).pow(o)).toString()).send({from:c}).on("transactionHash",(function(e){return e.transactionHash})));case 1:case"end":return e.stop()}}),e)})));return function(n,t,r,a,c){return e.apply(this,arguments)}}(),f=function(){var e=Object(c.a)(a.a.mark((function e(n,t,r){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("0x3B9B74f48E89Ebd8b45a53444327013a2308A9BC"!==n.options.address){e.next=2;break}return e.abrupt("return",n.methods.emergencyWithdraw().send({from:r}).on("transactionHash",(function(e){return e.transactionHash})));case 2:if("0xBb2B66a2c7C2fFFB06EA60BeaD69741b3f5BF831"!==n.options.address){e.next=4;break}return e.abrupt("return",n.methods.emergencyWithdraw().send({from:r}).on("transactionHash",(function(e){return e.transactionHash})));case 4:return e.abrupt("return",n.methods.withdraw(new i.a(t).times(new i.a(10).pow(18)).toString()).send({from:r}).on("transactionHash",(function(e){return e.transactionHash})));case 5:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),m=function(){var e=Object(c.a)(a.a.mark((function e(n,t,r){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.methods.emergencyWithdraw().send({from:r}).on("transactionHash",(function(e){return e.transactionHash})));case 1:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),x=function(){var e=Object(c.a)(a.a.mark((function e(n,t,r){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!s.a.referrals.enabled){e.next=2;break}return e.abrupt("return",n.methods.deposit(t,"0",k()).send({from:r}).on("transactionHash",(function(e){return e.transactionHash})));case 2:return e.abrupt("return",n.methods.deposit(t,"0").send({from:r}).on("transactionHash",(function(e){return e.transactionHash})));case 3:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),h=function(){var e=Object(c.a)(a.a.mark((function e(n,t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.methods.deposit("0").send({from:t}).on("transactionHash",(function(e){return e.transactionHash})));case 1:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),O=function(){var e=Object(c.a)(a.a.mark((function e(n,t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.methods.deposit().send({from:t,value:new i.a(0)}).on("transactionHash",(function(e){return e.transactionHash})));case 1:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),k=function(){var e=localStorage.getItem("ref");return e&&42===e.length?e:"0x000000000000000000000000000000000000dEaD"}},684:function(e,n,t){"use strict";t.d(n,"a",(function(){return O}));var r,a,c,o=t(18),i=t(46),s=(t(0),t(25)),u=t(689),l=t(3),d=t(27),b=t(7),j=l.e.a(r||(r=Object(i.a)(["\n  display: flex;\n  justify-content: space-around;\n  font-family: sans-serif;\n  text-align: center;\n  padding-top: 40px;\n  width: 100%;\n  margin: 0 auto 32px;\n"]))),p=l.e.div(a||(a=Object(i.a)(["\n  text-align: center;\n"]))),f=l.e.p(c||(c=Object(i.a)(["\n  color: ",";\n"])),(function(e){return e.theme.colors.primary})),m=3600,x=86400,h=function(e,n){return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{style:{fontSize:32},children:n}),Object(b.jsx)("div",{children:e})]})};function O(){var e=Date.now(),n=(d.a.startTime.getTime()-e)/1e3,t=Math.ceil(n/x)*x,r=Object(s.H)().isXl,a="https://bscscan.com/block/countdown/".concat(d.a.startBlock);if(e>d.a.startTime.getTime())return Object(b.jsx)(b.Fragment,{});var c={isPlaying:!0,size:r?120:80,strokeWidth:r?6:2};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)(j,{href:a,target:"_blank",rel:"noopener noreferrer",children:[Object(b.jsx)(u.CountdownCircleTimer,Object(o.a)(Object(o.a)({},c),{},{colors:"#7E2E84",duration:t,initialRemainingTime:n,children:function(e){var n=e.elapsedTime;return h("days",(t-n)/x|0)}})),Object(b.jsx)(u.CountdownCircleTimer,Object(o.a)(Object(o.a)({},c),{},{colors:"#D14081",duration:x,initialRemainingTime:n%x,onComplete:function(e){return[n-e>m,0]},children:function(e){var n=e.elapsedTime;return h("hours",(x-n)%x/m|0)}})),Object(b.jsx)(u.CountdownCircleTimer,Object(o.a)(Object(o.a)({},c),{},{colors:"#EF798A",duration:m,initialRemainingTime:n%m,onComplete:function(e){return[n-e>60,0]},children:function(e){var n=e.elapsedTime;return h("minutes",(m-n)%m/60|0)}})),Object(b.jsx)(u.CountdownCircleTimer,Object(o.a)(Object(o.a)({},c),{},{colors:"#218380",duration:60,initialRemainingTime:n%60,onComplete:function(e){return[n-e>0,0]},children:function(e){var n=e.elapsedTime;return h("seconds",60-n|0)}}))]}),Object(b.jsxs)(p,{children:[Object(b.jsx)("p",{style:{color:"white",marginBottom:16},children:Object(b.jsx)("strong",{children:d.a.startTime.toString()})}),Object(b.jsx)(f,{children:Object(b.jsxs)("a",{href:a,target:"_blank",rel:"noopener noreferrer",children:["Farming starts in Block #",d.a.startBlock]})})]})]})}},685:function(e,n,t){"use strict";t.d(n,"b",(function(){return j})),t.d(n,"a",(function(){return p}));var r=t(55),a=t(5),c=t.n(a),o=t(19),i=t(0),s=t(65),u=t(58),l=t(134),d=t(679),b=t(176),j=function(e){var n=Object(u.b)(),t=Object(s.m)().account,r=Object(b.c)();return{onReward:Object(i.useCallback)(Object(o.a)(c.a.mark((function a(){var o;return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(d.b)(r,e,t);case 2:return o=a.sent,n(Object(l.a)(t)),a.abrupt("return",o);case 5:case"end":return a.stop()}}),a)}))),[t,n,e,r])}},p=function(e){var n=Object(s.m)().account,t=Object(b.c)();return{onReward:Object(i.useCallback)(Object(o.a)(c.a.mark((function a(){var o;return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return o=e.reduce((function(e,a){return[].concat(Object(r.a)(e),[Object(d.b)(t,a,n)])}),[]),a.abrupt("return",Promise.all(o));case 2:case"end":return a.stop()}}),a)}))),[n,e,t])}}},686:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return l}));var r=t(5),a=t.n(r),c=t(19),o=t(79),i=t.n(o),s=t(59),u=function(e,n){return new(new i.a(e).eth.Contract)(s,n)},l=function(){var e=Object(c.a)(a.a.mark((function e(n,t,r){var c,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=u(n,t),e.prev=1,e.next=4,c.methods.balanceOf(r).call();case 4:return o=e.sent,e.abrupt("return",o);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return","0");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(n,t,r){return e.apply(this,arguments)}}()},701:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return jn}));var r=t(18),a=t(21),c=t(0),o=t.n(c),i=t(32),s=t(58),u=t(16),l=t.n(u),d=t(65),b=t(25),j=t(27),p=t(684),f=t(687);f.a.config({EXPONENTIAL_AT:1e3,DECIMAL_PLACES:80});new f.a(1);var m,x,h=new f.a(10512e3),O=(j.a.tokenBnbPid,t(46)),k=t(3),v=k.e.div(m||(m=Object(O.a)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  & > * {\n    min-width: 280px;\n    max-width: 31.5%;\n    width: 100%;\n    margin: 0 8px;\n    margin-bottom: 32px;\n  }\n"]))),g=t(113),y=t(110),w=t(135),C=t(134),S=t(10),T=t(109),A=t(7),B=k.e.div(x||(x=Object(O.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n\n  svg {\n    fill: ",";\n  }\n"])),(function(e){return e.theme.colors.primary})),D=function(e){var n=e.onClick,t=e.expanded;return Object(A.jsxs)(B,{"aria-label":"Hide or show expandable content",role:"button",onClick:function(){return n()},children:[Object(A.jsx)(b.C,{color:"primary",bold:!0,children:t?"Hide":"Details"}),t?Object(A.jsx)(b.l,{}):Object(A.jsx)(b.k,{})]})};D.defaultProps={expanded:!1};var P,H,F,I,q,z,E,L,N,M,R,W,U,Q,X,_,G,V,J,K,$,Y,Z,ee,ne,te,re,ae,ce,oe=D,ie=function(e){var n=e.quoteTokenAdresses,t=e.quoteTokenSymbol,r=e.tokenAddresses,a="BNB"===t?"ETH":n[56],c=r[56];return"".concat(a,"/").concat(c)},se=k.e.div(P||(P=Object(O.a)(["\n  margin-top: 24px;\n"]))),ue=Object(k.e)(b.s)(H||(H=Object(O.a)(["\n  text-decoration: none;\n  font-weight: normal;\n  color: ",";\n  display: flex;\n  align-items: center;\n\n  svg {\n    padding-left: 4px;\n    height: 18px;\n    width: auto;\n    fill: ",";\n  }\n"])),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.primary})),le=function(e){var n=e.isTokenOnly,t=e.bscScanAddress,r=e.removed,a=e.totalValueFormated,c=e.lpLabel,o=e.quoteTokenAdresses,i=e.quoteTokenSymbol,s=e.tokenAddresses,u=Object(T.a)(),l=ie({quoteTokenAdresses:o,quoteTokenSymbol:i,tokenAddresses:s});return Object(A.jsxs)(se,{children:[Object(A.jsxs)(b.n,{justifyContent:"space-between",children:[Object(A.jsxs)(b.C,{children:[u(316,"Stake"),":"]}),Object(A.jsx)(ue,{href:n?"https://exchange.pancakeswap.finance/#/swap/".concat(s[56]):"https://exchange.pancakeswap.finance/#/add/".concat(l),children:c})]}),!r&&Object(A.jsxs)(b.n,{justifyContent:"space-between",children:[Object(A.jsxs)(b.C,{children:[u(23,"Total Liquidity"),":"]}),Object(A.jsx)(b.C,{children:a})]}),Object(A.jsx)(b.n,{justifyContent:"flex-start",children:Object(A.jsx)(b.r,{external:!0,href:t,bold:!1,children:u(356,"View on BscScan")})})]})},de=function(){return Object(A.jsx)(b.B,{variant:"success",outline:!0,startIcon:Object(A.jsx)(b.E,{}),children:"No Fees"})},be=Object(k.e)(b.n)(F||(F=Object(O.a)(["\n  svg {\n    margin-right: 0.25rem;\n  }\n"]))),je=Object(k.e)(b.B)(I||(I=Object(O.a)(["\n  margin-left: 4px;\n"]))),pe=function(e){var n=e.lpLabel,t=e.multiplier,r=(e.risk,e.farmImage),a=(e.tokenSymbol,e.depositFee);return Object(A.jsxs)(be,{justifyContent:"space-between",alignItems:"center",mb:"12px",children:[r,Object(A.jsxs)(b.n,{flexDirection:"column",alignItems:"flex-end",children:[Object(A.jsx)(b.o,{mb:"4px",children:n}),Object(A.jsxs)(b.n,{justifyContent:"center",children:[0===a?Object(A.jsx)(de,{}):null,Object(A.jsx)(je,{variant:"secondary",children:t})]})]})]})},fe=t(5),me=t.n(fe),xe=t(19),he=t(686),Oe=t(182),ke=(t(683),t(679)),ve=t(176),ge=function(e){var n=Object(s.b)(),t=Object(y.a)(e).tokenDecimals,r=Object(d.m)().account,a=Object(ve.c)();return{onStake:Object(c.useCallback)(function(){var c=Object(xe.a)(me.a.mark((function c(o){var i;return me.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(ke.i)(a,e,o,r,null!==t&&void 0!==t?t:18);case 2:i=c.sent,n(Object(C.a)(r)),console.info(i);case 5:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}(),[r,n,a,e,t])}},ye=function(e){var n=Object(s.b)(),t=Object(y.a)(e).tokenDecimals,r=Object(d.m)().account,a=Object(ve.c)();return{onUnstake:Object(c.useCallback)(function(){var c=Object(xe.a)(me.a.mark((function c(o){var i;return me.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(ke.j)(a,e,o,r,null!==t&&void 0!==t?t:18);case 2:i=c.sent,n(Object(C.a)(r)),console.info(i);case 5:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}(),[r,n,a,e,t])}},we=t(678),Ce=k.e.div(q||(q=Object(O.a)(["\n  height: ","px;\n  width: ","px;\n"])),(function(e){return e.size}),(function(e){return e.size})),Se=function(e){var n,t=e.size,r=void 0===t?"md":t,a=Object(c.useContext)(k.a).spacing;switch(r){case"lg":n=a[6];break;case"sm":n=a[2];break;case"md":default:n=a[4]}return Object(A.jsx)(Ce,{size:n})},Te=k.e.div(z||(z=Object(O.a)(["\n  align-items: center;\n  background-color: ","00;\n  display: flex;\n  margin: 0;\n  padding: ","px;\n"])),(function(e){return e.theme.colors.primaryDark}),(function(e){return e.theme.spacing[4]})),Ae=k.e.div(E||(E=Object(O.a)(["\n  flex: 1;\n  text-align: center;\n"]))),Be=function(e){var n=e.children,t=o.a.Children.toArray(n).length;return Object(A.jsx)(Te,{children:o.a.Children.map(n,(function(e,n){return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(Ae,{children:e}),n<t-1&&Object(A.jsx)(Se,{})]})}))})},De=k.e.div(L||(L=Object(O.a)(["\n  align-items: center;\n  background-color: ",";\n  border-radius: ",";\n  display: flex;\n  height: 72px;\n  padding: 0 ","px;\n"])),(function(e){return e.theme.colors.input}),(function(e){return e.theme.radii.default}),(function(e){return e.theme.spacing[3]})),Pe=k.e.input(N||(N=Object(O.a)(["\n  width: 100%;\n  background: none;\n  border: 0;\n  color: ",";\n  font-size: 18px;\n  flex: 1;\n  height: 56px;\n  margin: 0;\n  padding: 0;\n  outline: none;\n"])),(function(e){return e.theme.colors.primary})),He=function(e){var n=e.endAdornment,t=e.onChange,r=e.placeholder,a=e.startAdornment,c=e.value;return Object(A.jsxs)(De,{children:[!!a&&a,Object(A.jsx)(Pe,{placeholder:r,value:c,onChange:t}),!!n&&n]})},Fe=k.e.div(M||(M=Object(O.a)([""]))),Ie=k.e.div(R||(R=Object(O.a)(["\n  width: ","px;\n"])),(function(e){return e.theme.spacing[3]})),qe=k.e.div(W||(W=Object(O.a)(["\n  align-items: center;\n  display: flex;\n"]))),ze=k.e.div(U||(U=Object(O.a)(["\n  align-items: center;\n  color: ",";\n  display: flex;\n  font-size: 14px;\n  font-weight: 700;\n  height: 44px;\n  justify-content: flex-end;\n"])),(function(e){return e.theme.colors.primary})),Ee=k.e.span(Q||(Q=Object(O.a)(["\n  color: ",";\n  font-weight: 700;\n"])),(function(e){return e.theme.colors.primary})),Le=function(e){var n=e.max,t=e.symbol,r=e.onChange,a=e.onSelectMax,c=e.value,o=e.depositFeeBP,i=void 0===o?0:o,s=Object(T.a)();return Object(A.jsxs)(Fe,{children:[Object(A.jsxs)(ze,{children:[n.toLocaleString()," ",t," ",s(526,"Available")]}),Object(A.jsx)(He,{endAdornment:Object(A.jsxs)(qe,{children:[Object(A.jsx)(Ee,{children:t}),Object(A.jsx)(Ie,{}),Object(A.jsx)("div",{children:Object(A.jsx)(b.e,{size:"sm",onClick:a,children:s(452,"Max")})})]}),onChange:r,placeholder:"0",value:c}),i>0?Object(A.jsxs)(ze,{children:[s(10001,"Deposit Fee"),": ",new f.a(c||0).times(i/1e4).toString()," ",t]}):null]})},Ne=function(e){var n=e.farm,t=e.max,r=e.onConfirm,o=e.onDismiss,i=e.tokenName,s=void 0===i?"":i,u=e.depositFeeBP,l=void 0===u?0:u,d=Object(c.useState)(""),j=Object(a.a)(d,2),p=j[0],f=j[1],m=Object(c.useState)(!1),x=Object(a.a)(m,2),h=x[0],O=x[1],k=Object(c.useState)(""),v=Object(a.a)(k,2),g=v[0],y=v[1],w=Object(T.a)(),C=Object(c.useMemo)((function(){var e;return Object(we.b)(t,null!==(e=n.tokenDecimals)&&void 0!==e?e:18)}),[t,n.tokenDecimals]),S=Object(c.useCallback)((function(e){f(e.currentTarget.value)}),[f]),B=Object(c.useCallback)((function(){f(C)}),[C,f]);return Object(A.jsxs)(b.w,{title:"".concat(w(316,"Deposit")," ").concat(s," Tokens"),onDismiss:o,children:[Object(A.jsx)(Le,{value:p,onSelectMax:B,onChange:S,max:C,symbol:s,depositFeeBP:l}),Object(A.jsxs)(Be,{children:[Object(A.jsx)(b.e,{variant:"secondary",onClick:o,children:w(462,"Cancel")}),Object(A.jsx)(b.e,{disabled:h,onClick:Object(xe.a)(me.a.mark((function e(){return me.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(""),O(!0),e.prev=2,e.next=5,r(p);case 5:o(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),y(null===e.t0||void 0===e.t0?void 0:e.t0.message);case 11:return e.prev=11,O(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[2,8,11,14]])}))),children:h?w(488,"Pending Confirmation"):w(464,"Confirm")})]}),g&&Object(A.jsx)(b.b,{title:"Error",variant:"danger",children:g})]})},Me=function(e){var n=e.farm,t=e.onConfirm,r=e.onDismiss,o=e.max,i=e.tokenName,s=void 0===i?"":i,u=Object(c.useState)(""),l=Object(a.a)(u,2),d=l[0],j=l[1],p=Object(c.useState)(""),f=Object(a.a)(p,2),m=f[0],x=f[1],h=Object(c.useState)(!1),O=Object(a.a)(h,2),k=O[0],v=O[1],g=Object(T.a)(),y=Object(c.useMemo)((function(){var e;return Object(we.b)(o,null!==(e=n.tokenDecimals)&&void 0!==e?e:18)}),[o,n.tokenDecimals]),w=Object(c.useCallback)((function(e){j(e.currentTarget.value)}),[j]),C=Object(c.useCallback)((function(){j(y)}),[y,j]);return Object(A.jsxs)(b.w,{title:"Withdraw ".concat(s),onDismiss:r,children:[Object(A.jsx)(Le,{onSelectMax:C,onChange:w,value:d,max:y,symbol:s}),Object(A.jsxs)(Be,{children:[Object(A.jsx)(b.e,{variant:"secondary",onClick:r,children:g(462,"Cancel")}),Object(A.jsx)(b.e,{disabled:k,onClick:Object(xe.a)(me.a.mark((function e(){return me.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(""),v(!0),e.prev=2,e.next=5,t(d);case 5:r(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),x(null===e.t0||void 0===e.t0?void 0:e.t0.message);case 11:return e.prev=11,v(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[2,8,11,14]])}))),children:k?g(488,"Pending Confirmation"):g(464,"Confirm")})]}),m&&Object(A.jsx)(b.b,{title:"Error",variant:"danger",children:m})]})},Re=k.e.div(X||(X=Object(O.a)(["\n  display: flex;\n  svg {\n    width: 20px;\n  }\n"]))),We=function(e){var n,t=e.stakedBalance,r=e.tokenBalance,c=e.tokenName,o=e.pid,i=e.depositFeeBP,s=Object(T.a)(),u=ge(o).onStake,l=ye(o).onUnstake,d=Object(y.a)(o),j=Object(we.a)(t,null!==(n=d.tokenDecimals)&&void 0!==n?n:18),p=j.toLocaleString(),f=Object(b.I)(Object(A.jsx)(Ne,{farm:d,max:r,onConfirm:u,tokenName:c,depositFeeBP:i})),m=Object(a.a)(f,1)[0],x=Object(b.I)(Object(A.jsx)(Me,{farm:d,max:t,onConfirm:l,tokenName:c})),h=Object(a.a)(x,1)[0];return Object(A.jsxs)(b.n,{justifyContent:"space-between",alignItems:"center",children:[Object(A.jsx)(b.o,{color:0===j?"textDisabled":"text",children:p}),0===j?Object(A.jsx)(b.e,{onClick:m,children:s(999,"Stake")}):Object(A.jsxs)(Re,{children:[Object(A.jsx)(b.p,{variant:"tertiary",onClick:h,mr:"6px",children:Object(A.jsx)(b.v,{color:"primary"})}),Object(A.jsx)(b.p,{variant:"tertiary",onClick:m,children:Object(A.jsx)(b.a,{color:"primary"})})]})]})},Ue=t(685),Qe=k.e.div(_||(_=Object(O.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: column;\n"]))),Xe=function(e){var n=e.earnings,t=e.pid,r=Object(T.a)(),o=Object(c.useState)(!1),i=Object(a.a)(o,2),s=i[0],u=i[1],l=Object(Ue.b)(t).onReward,d=ge(t).onStake,p=Object(we.a)(n),f=p.toLocaleString();return Object(A.jsxs)(b.n,{mb:"8px",justifyContent:"space-between",alignItems:"center",children:[Object(A.jsx)(b.o,{color:0===p?"textDisabled":"text",children:f}),Object(A.jsxs)(Qe,{children:[t===j.a.tokenPoolPid?Object(A.jsx)(b.e,{disabled:0===p||s,size:"sm",variant:"secondary",marginBottom:"15px",onClick:Object(xe.a)(me.a.mark((function e(){return me.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.next=3,d(p.toString());case 3:u(!1);case 4:case"end":return e.stop()}}),e)}))),children:r(999,"Compound")}):null,Object(A.jsx)(b.e,{disabled:0===p||s,onClick:Object(xe.a)(me.a.mark((function e(){return me.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.next=3,l();case 3:u(!1);case 4:case"end":return e.stop()}}),e)}))),children:r(999,"Harvest")})]})]})},_e=k.e.div(G||(G=Object(O.a)(["\n  padding-top: 16px;\n"]))),Ge=function(e){var n=e.farm,t=e.ethereum,r=e.account,o=Object(T.a)(),i=Object(c.useState)(!1),u=Object(a.a)(i,2),l=u[0],p=u[1],f=Object(y.a)(n.pid),m=f.pid,x=f.lpAddresses,h=f.tokenAddresses,O=f.isTokenOnly,k=f.depositFeeBP,v=Object(y.b)(m),g=v.allowance,w=v.tokenBalance,S=v.stakedBalance,B=v.earnings,D=x[56],P=h[56],H=n.lpSymbol.toUpperCase(),F=r&&g&&g.isGreaterThan(0),I=function(e){var n=Object(s.b)(),t=Object(d.m)().account,r=Object(ve.c)();return{onApprove:Object(c.useCallback)(Object(xe.a)(me.a.mark((function a(){var c;return me.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(ke.a)(e,r,t);case 3:return c=a.sent,n(Object(C.a)(t)),a.abrupt("return",c);case 8:return a.prev=8,a.t0=a.catch(0),a.abrupt("return",!1);case 11:case"end":return a.stop()}}),a,null,[[0,8]])}))),[t,n,e,r])}}(Object(c.useMemo)((function(){return O?Object(he.a)(t,P):Object(he.a)(t,D)}),[t,D,P,O])).onApprove,q=Object(c.useCallback)(Object(xe.a)(me.a.mark((function e(){return me.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,p(!0),e.next=4,I();case 4:p(!1),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[I]);return Object(A.jsxs)(_e,{children:[Object(A.jsxs)(b.n,{children:[Object(A.jsx)(b.C,{bold:!0,textTransform:"uppercase",color:"secondary",fontSize:"12px",pr:"3px",children:j.a.tokenSymbol}),Object(A.jsx)(b.C,{bold:!0,textTransform:"uppercase",color:"textSubtle",fontSize:"12px",children:o(999,"Earned")})]}),Object(A.jsx)(Xe,{earnings:B,pid:m}),Object(A.jsxs)(b.n,{children:[Object(A.jsx)(b.C,{bold:!0,textTransform:"uppercase",color:"secondary",fontSize:"12px",pr:"3px",children:H}),Object(A.jsx)(b.C,{bold:!0,textTransform:"uppercase",color:"textSubtle",fontSize:"12px",children:o(999,"Staked")})]}),r?F?Object(A.jsx)(We,{stakedBalance:S,tokenBalance:w,tokenName:H,pid:m,depositFeeBP:k}):Object(A.jsx)(b.e,{mt:"8px",fullWidth:!0,disabled:l,onClick:q,children:o(999,"Approve Contract")}):Object(A.jsx)(Oe.a,{mt:"8px",fullWidth:!0})]})},Ve=function(e){var n,t=e.numberOfDays,r=e.farmApy/100,a=t/365,c=1e3/e.cakePrice,o=c*Math.pow(1+r/365,365*a);return n=o-c,Math.round(100*n)/100},Je=function(e){return(e.amountEarned/e.amountInvested*100).toFixed(2)},Ke=k.e.div(V||(V=Object(O.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(4, auto);\n  margin-bottom: 24px;\n"]))),$e=k.e.div(J||(J=Object(O.a)(["\n  margin-bottom: '10px';\n"]))),Ye=Object(k.e)(b.C)(K||(K=Object(O.a)(["\n  max-width: 320px;\n  margin-bottom: 28px;\n"]))),Ze=function(e){var n=e.onDismiss,t=e.lpLabel,r=e.quoteTokenAdresses,a=e.quoteTokenSymbol,c=e.tokenAddresses,o=e.cakePrice,i=e.apy,s=Object(T.a)(),u=ie({quoteTokenAdresses:r,quoteTokenSymbol:a,tokenAddresses:c}),d=i.times(new l.a(100)).toNumber(),p=1e3/o.toNumber(),f=Ve({numberOfDays:1,farmApy:d,cakePrice:o}),m=Ve({numberOfDays:7,farmApy:d,cakePrice:o}),x=Ve({numberOfDays:30,farmApy:d,cakePrice:o}),h=Ve({numberOfDays:365,farmApy:d,cakePrice:o});return Object(A.jsxs)(b.w,{title:"ROI",onDismiss:n,children:[Object(A.jsxs)(Ke,{children:[Object(A.jsx)($e,{children:Object(A.jsx)(b.C,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:s(999,"Timeframe")})}),Object(A.jsx)($e,{children:Object(A.jsx)(b.C,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:s(999,"ROI")})}),Object(A.jsx)($e,{children:Object(A.jsxs)(b.C,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:[j.a.tokenSymbol," per $1000"]})}),Object(A.jsx)($e,{children:Object(A.jsx)(b.C,{children:"1d"})}),Object(A.jsx)($e,{children:Object(A.jsxs)(b.C,{children:[Je({amountEarned:f,amountInvested:p}),"%"]})}),Object(A.jsx)($e,{children:Object(A.jsx)(b.C,{children:f})}),Object(A.jsx)($e,{children:Object(A.jsx)(b.C,{children:"7d"})}),Object(A.jsx)($e,{children:Object(A.jsxs)(b.C,{children:[Je({amountEarned:m,amountInvested:p}),"%"]})}),Object(A.jsx)($e,{children:Object(A.jsx)(b.C,{children:m})}),Object(A.jsx)($e,{children:Object(A.jsx)(b.C,{children:"30d"})}),Object(A.jsx)($e,{children:Object(A.jsxs)(b.C,{children:[Je({amountEarned:x,amountInvested:p}),"%"]})}),Object(A.jsx)($e,{children:Object(A.jsx)(b.C,{children:x})}),Object(A.jsx)($e,{children:Object(A.jsx)(b.C,{children:"365d(APY)"})}),Object(A.jsx)($e,{children:Object(A.jsxs)(b.C,{children:[Je({amountEarned:h,amountInvested:p}),"%"]})}),Object(A.jsx)($e,{children:Object(A.jsx)(b.C,{children:h})})]}),Object(A.jsx)(Ye,{fontSize:"12px",color:"textSubtle",children:s(999,"Calculated based on current rates. Compounding once daily. Rates are estimates provided for your convenience only, and by no means represent guaranteed returns.")}),Object(A.jsx)(b.n,{justifyContent:"center",children:Object(A.jsxs)(b.s,{href:"https://exchange.pancakeswap.finance/#/add/".concat(u),children:[s(999,"Get")," ",t]})})]})},en=function(e){var n=e.lpLabel,t=e.quoteTokenAdresses,r=e.quoteTokenSymbol,c=e.tokenAddresses,o=e.cakePrice,i=e.apy,s=Object(b.I)(Object(A.jsx)(Ze,{lpLabel:n,quoteTokenAdresses:t,quoteTokenSymbol:r,tokenAddresses:c,cakePrice:o,apy:i})),u=Object(a.a)(s,1)[0];return Object(A.jsx)(b.p,{onClick:u,variant:"text",size:"sm",ml:"4px",children:Object(A.jsx)(b.h,{})})},nn=Object(k.f)($||($=Object(O.a)(["\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n"]))),tn=k.e.div(Y||(Y=Object(O.a)(["\n  background: linear-gradient(\n    45deg,\n    rgba(255, 0, 0, 1) 0%,\n    rgba(255, 154, 0, 1) 10%,\n    rgba(208, 222, 33, 1) 20%,\n    rgba(79, 220, 74, 1) 30%,\n    rgba(63, 218, 216, 1) 40%,\n    rgba(47, 201, 226, 1) 50%,\n    rgba(28, 127, 238, 1) 60%,\n    rgba(95, 21, 242, 1) 70%,\n    rgba(186, 12, 248, 1) 80%,\n    rgba(251, 7, 217, 1) 90%,\n    rgba(255, 0, 0, 1) 100%\n  );\n  background-size: 300% 300%;\n  animation: "," 2s linear infinite;\n  border-radius: 16px;\n  filter: blur(6px);\n  position: absolute;\n  top: -2px;\n  right: -2px;\n  bottom: -2px;\n  left: -2px;\n  z-index: -1;\n"])),nn),rn=k.e.div(Z||(Z=Object(O.a)(["\n  align-self: baseline;\n  background: ",";\n  border-radius: 32px;\n  box-shadow: 0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  padding: 24px;\n  position: relative;\n  text-align: center;\n"])),(function(e){return e.theme.card.background})),an=k.e.div(ee||(ee=Object(O.a)(["\n  background-color: ",";\n  height: 1px;\n  margin: 28px auto;\n  width: 100%;\n"])),(function(e){return e.theme.colors.borderColor})),cn=k.e.div(ne||(ne=Object(O.a)(["\n  height: ",";\n  overflow: hidden;\n"])),(function(e){return e.expanded?"100%":"0px"})),on=(k.e.div(te||(te=Object(O.a)(["\n  display: flex;\n"]))),function(e){var n=e.farm,t=e.removed,r=e.cakePrice,o=e.bnbPrice,i=e.ethereum,s=e.account,u=Object(T.a)(),d=Object(c.useState)(!1),p=Object(a.a)(d,2),f=p[0],m=p[1],x=n.tokenSymbol.toLocaleLowerCase(),h=n.quoteTokenSymbol.toLowerCase(),O=n.isTokenOnly?Object(A.jsx)("img",{src:"/images/farms/".concat(x,".png"),alt:x,width:64,height:64,style:{height:64}}):Object(A.jsxs)(b.n,{className:"flex space-x-1",children:[Object(A.jsx)("img",{src:"/images/farms/".concat(x,".png"),alt:x,width:48,height:48,style:{height:48}}),Object(A.jsx)("img",{src:"/images/farms/".concat(h,".png"),alt:h,width:48,height:48,style:{marginLeft:"-18px",height:48}})]}),k=Object(c.useMemo)((function(){if(!n.lpTotalInQuoteToken)return null;var e=n.lpTotalInQuoteToken;return n.tokenDecimals&&n.tokenDecimals<18&&(e instanceof l.a||(e=new l.a(e)),e=e.dividedBy(Math.pow(10,18-n.tokenDecimals))),n.quoteTokenSymbol===S.b.BNB?o.times(e):n.quoteTokenSymbol===S.b.CAKE?r.times(e):e}),[o,r,n.lpTotalInQuoteToken,n.quoteTokenSymbol,n.tokenDecimals]),v=k?"$".concat(Number(k).toLocaleString(void 0,{maximumFractionDigits:0})):"-",g=n.lpSymbol,y=n.apy&&n.apy.times(new l.a(100)).toNumber().toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),w=n.quoteTokenAdresses,C=n.quoteTokenSymbol,B=n.tokenAddresses,D=n.risk;return Object(A.jsxs)(rn,{children:[n.tokenSymbol===j.a.tokenSymbol&&Object(A.jsx)(tn,{}),Object(A.jsx)(pe,{lpLabel:g,multiplier:n.multiplier,risk:D,depositFee:n.depositFeeBP,farmImage:O,tokenSymbol:n.tokenSymbol}),!t&&Object(A.jsxs)(b.n,{justifyContent:"space-between",alignItems:"center",children:[Object(A.jsxs)(b.C,{children:[u(352,"APR"),":"]}),Object(A.jsx)(b.C,{bold:!0,style:{display:"flex",alignItems:"center"},children:n.apy?Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(en,{lpLabel:g,quoteTokenAdresses:w,quoteTokenSymbol:C,tokenAddresses:B,cakePrice:r,apy:n.apy}),"1INCH"===n.lpSymbol&&"dublin"===j.a.key?"Unknown":"".concat(y,"%")]}):Object(A.jsx)(b.z,{height:24,width:80})})]}),Object(A.jsxs)(b.n,{justifyContent:"space-between",children:[Object(A.jsxs)(b.C,{children:[u(318,"Earn"),":"]}),Object(A.jsx)(b.C,{bold:!0,children:j.a.tokenSymbol})]}),Object(A.jsxs)(b.n,{justifyContent:"space-between",children:[Object(A.jsxs)(b.C,{style:{fontSize:"24px"},children:[u(10001,"Deposit Fee"),":"]}),Object(A.jsxs)(b.C,{bold:!0,style:{fontSize:"24px"},children:[n.depositFeeBP/100,"%"]})]}),Object(A.jsx)(Ge,{farm:n,ethereum:i,account:s}),Object(A.jsx)(an,{}),Object(A.jsx)(oe,{onClick:function(){return m(!f)},expanded:f}),Object(A.jsx)(cn,{expanded:f,children:Object(A.jsx)(le,{removed:t,isTokenOnly:n.isTokenOnly,bscScanAddress:n.isTokenOnly?"https://bscscan.com/token/".concat(n.tokenAddresses[56]):"https://bscscan.com/token/".concat(n.lpAddresses[56]),totalValueFormated:v,lpLabel:g,quoteTokenAdresses:w,quoteTokenSymbol:C,tokenAddresses:B})})]})}),sn=t(78),un=function(e){var n=e.stakedOnly,t=e.setStakedOnly,r=Object(i.g)(),a=r.url,c=r.isExact,o=Object(T.a)();return Object(A.jsxs)(ln,{children:[Object(A.jsxs)(dn,{children:[Object(A.jsx)(b.D,{checked:n,onChange:function(){return t(!n)}}),Object(A.jsxs)(b.C,{children:[" ",o(699,"Staked only")]})]}),Object(A.jsxs)(b.f,{activeIndex:c?0:1,size:"sm",variant:"subtle",children:[Object(A.jsx)(b.g,{as:sn.b,to:"".concat(a),children:o(698,"Active")}),Object(A.jsx)(b.g,{as:sn.b,to:"".concat(a,"/history"),children:o(700,"Inactive")})]})]})},ln=k.e.div(re||(re=Object(O.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 32px;\n"]))),dn=k.e.div(ae||(ae=Object(O.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 32px;\n\n  "," {\n    margin-left: 8px;\n  }\n"])),b.C),bn=k.e.div(ce||(ce=Object(O.a)(["\n  background-color: ",";\n  height: 1px;\n  margin: 0 auto 32px;\n  width: 100%;\n"])),(function(e){return e.theme.colors.textSubtle})),jn=function(e){var n=Object(i.g)().path,t=Object(y.c)(),o=Object(y.f)(),u=Object(y.e)(),f=Object(d.m)(),m=f.account,x=f.ethereum,O=e.tokenMode,k=Object(s.b)(),T=Object(w.a)().fastRefresh;Object(c.useEffect)((function(){m&&k(Object(C.a)(m))}),[m,k,T]);var B=Object(c.useState)(!1),D=Object(a.a)(B,2),P=D[0],H=D[1],F=t.filter((function(e){return!!e.isTokenOnly===!!O&&"0X"!==e.multiplier})),I=t.filter((function(e){return!!e.isTokenOnly===!!O&&"0X"===e.multiplier})),q=F.filter((function(e){return e.userData&&new l.a(e.userData.stakedBalance).isGreaterThan(0)})),z=Object(c.useCallback)((function(e,n){return e.map((function(e){var n="".concat(j.a.tokenKeyMasterChef,"PerBlock"),t=new l.a(e[n]||1).times(new l.a(e.poolWeight)).div(new l.a(10).pow(18)).times(h),a=o.times(t),c=new l.a(e.lpTotalInQuoteToken||0);return e.quoteTokenSymbol===S.b.BNB&&(c=c.times(u)),e.tokenDecimals&&e.tokenDecimals<18&&(c=c.div(Math.pow(10,18-e.tokenDecimals))),c.comparedTo(0)>0&&(a=a.div(c)),Object(r.a)(Object(r.a)({},e),{},{apy:a})})).map((function(e){return Object(A.jsx)(on,{farm:e,removed:n,bnbPrice:u,cakePrice:o,ethereum:x,account:m},e.pid)}))}),[u,m,o,x]);return Object(A.jsxs)(g.a,{children:[Object(A.jsxs)("div",{style:{marginBottom:64},children:[Object(A.jsx)(b.o,{as:"h1",size:"lg",color:"primary",mb:"50px",style:{textAlign:"center"},children:O?j.a.poolPrimaryTitle:j.a.farmPrimaryTitle}),Object(A.jsx)(b.o,{as:"h2",color:"secondary",style:{textAlign:"center"},children:O?j.a.poolSecondaryTitle:j.a.farmSecondaryTitle}),Object(A.jsx)(p.a,{})]}),Object(A.jsx)(un,{stakedOnly:P,setStakedOnly:H}),Object(A.jsxs)("div",{children:[Object(A.jsx)(bn,{}),Object(A.jsxs)(v,{children:[Object(A.jsx)(i.a,{exact:!0,path:"".concat(n),children:z(P?q:F,!1)}),Object(A.jsx)(i.a,{exact:!0,path:"".concat(n,"/history"),children:z(I,!0)})]})]}),j.a.bottomIllustration]})}}}]);
//# sourceMappingURL=8.08336998.chunk.js.map