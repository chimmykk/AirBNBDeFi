(window.webpackJsonp=window.webpackJsonp||[]).push([[8,7],{704:function(t,e,n){"use strict";var o=n(13),r=n(115).find,c=n(216),l="find",d=!0;l in[]&&Array(1).find((function(){d=!1})),o({target:"Array",proto:!0,forced:d},{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),c(l)},705:function(t,e,n){var content=n(708);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(64).default)("b8ccf028",content,!0,{sourceMap:!1})},706:function(t,e,n){"use strict";n.r(e);var o=n(17),r=(n(66),n(704),n(65),n(24),n(46),n(47),n(217)),c=n(67),l={name:"WalletAccount",components:{IButton:r.default},data:function(){return{showModal:!1,copyed:!1}},computed:Object(c.b)({account:"account",showAccount:function(){if(!this.account)return!1;var t=this.account;return t.substring(0,7)+"..."+t.substring(t.length-4)}}),watch:{account:function(t){console.log("account:",t),t||(this.showModal=!1)}},mounted:function(){},methods:{connectToWallet:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,r,c,l,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(d=function(t){0===t.length?console.log("Please connect to MetaMask."):t[0]!==n.account&&(n.$store.commit({type:"changeAccount",account:t[0]}),n.$Progress.start(),setTimeout((function(){Promise.all([n.$store.dispatch("getBalance"),n.$store.dispatch("getIdoRemainSupply"),n.$store.dispatch("getIdoRemainEth"),n.$store.dispatch("getIdoRemainSCC")]).then((function(){n.$Progress.finish()}))})))},l=function(){ethereum.request({method:"eth_accounts"}).then(d).catch((function(t){console.error(t)}))},n=t,window.ethereum){e.next=6;break}return t.$alert("Notice","Looks like you need a Dapp browser to get started. Consider installing MetaMask!",{type:"warning",confirmText:"OK"}),e.abrupt("return");case 6:return e.next=8,ethereum.request({method:"wallet_getPermissions"});case 8:return o=e.sent,r=o.find((function(t){return"eth_accounts"===t.parentCapability})),e.next=12,ethereum._metamask.isUnlocked();case 12:c=e.sent,r&&c?l():ethereum.request({method:"wallet_requestPermissions",params:[{eth_accounts:{}}]}).then((function(t){t.find((function(t){return"eth_accounts"===t.parentCapability}))&&l()})).catch((function(t){4001===t.code?console.log("Permissions needed to continue."):console.error(t)}));case 14:case"end":return e.stop()}}),e)})))()},handleLogout:function(){this.$store.dispatch({type:"logout"})},closeModal:function(){this.showModal=!1},copyAddress:function(){var t=this;this.copyed||(this.copyed=!0,setTimeout((function(){t.copyed=!1}),2e3))}}},d=(n(707),n(28)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.showAccount?n("div",[n("div",{staticClass:"\n        account-text\n        truncate\n        height-10\n        px-3\n        cursor-pointer\n        rounded-full\n        font-medium\n        tracking-wider\n        ease\n        duration-200\n        flex\n        items-center\n      ",staticStyle:{height:"2.5rem","line-height":"2.5rem"},on:{click:function(e){t.showModal=!0}}},[n("p",[t._v(t._s(t.showAccount))]),t._v(" "),n("div",{staticClass:"w-6 h-6",staticStyle:{padding:"2px"}},[n("svg-icon",{attrs:{icon:"account"}})],1)])]):n("div",[n("i-button",{staticClass:"rounded-full",on:{click:t.connectToWallet}},[t._v("my wallet")])],1),t._v(" "),n("transition",{attrs:{name:"fade"}},[t.showModal?n("div",{staticClass:"account-modal"},[n("div",{staticClass:"modal-mask",on:{click:t.closeModal}}),t._v(" "),n("div",{staticClass:"modal-card relative bg-white rounded-md z-10 shadow-lg"},[n("div",{staticClass:"\n            absolute\n            w-12\n            h-12\n            p-4\n            top-0\n            right-0\n            cursor-pointer\n            text-gray-800\n            hover:text-gray-400\n            ease\n          ",on:{click:t.closeModal}},[n("svg-icon",{attrs:{icon:"close"}})],1),t._v(" "),n("div",{staticClass:"px-4 py-3 text-lg"},[n("h3",[t._v("Account")])]),t._v(" "),n("div",{staticClass:"px-4 pt-2 pb-6"},[n("div",{staticClass:"p-4 border border-gray-400 rounded-md"},[n("div",{staticClass:"flex justify-between"},[n("p",{staticClass:"text-gray-600"},[t._v("Connected to MetaMask")]),t._v(" "),n("div",[n("a",{staticClass:"\n                    text-red-600\n                    hover:text-red-500\n                    ease\n                    cursor-pointer\n                    underline\n                    ml-2\n                  ",on:{click:t.handleLogout}},[t._v("logout")])])]),t._v(" "),n("p",{staticClass:"text-lg my-3 tracking-wider"},[t._v(t._s(t.showAccount))]),t._v(" "),n("div",{staticClass:"flex cursor-pointer"},[n("div",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.account,expression:"account",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.copyAddress,expression:"copyAddress",arg:"success"}],staticClass:"\n                  flex\n                  items-center\n                  text-gray-600\n                  hover:text-gray-800\n                  ease\n                "},[n("div",{staticClass:"w-4 h-4 mr-1"},[n("svg-icon",{attrs:{icon:t.copyed?"success":"copy"}})],1),t._v(" "),n("p",[t._v(t._s(t.copyed?"copyed":"copy address"))])])])])])])]):t._e()])],1)}),[],!1,null,"783693cd",null);e.default=component.exports;installComponents(component,{SvgIcon:n(114).default})},707:function(t,e,n){"use strict";n(705)},708:function(t,e,n){var o=n(63)((function(i){return i[1]}));o.push([t.i,'.account-text[data-v-783693cd]{\n  border:1px solid #e5e7eb;\n  font-family:"Inter var",sans-serif;\n  transform:scale(1)\n}\n.account-text[data-v-783693cd]:hover{\n  border-color:#60a5fa;\n  transform:scale(.99)\n}\n.account-modal[data-v-783693cd]{\n  z-index:999;\n  position:fixed;\n  padding:16px\n}\n.account-modal[data-v-783693cd],.modal-mask[data-v-783693cd]{\n  top:0;\n  left:0;\n  right:0;\n  bottom:0\n}\n.modal-mask[data-v-783693cd]{\n  position:absolute;\n  background-color:rgba(0,0,0,.4)\n}\n.modal-card[data-v-783693cd]{\n  width:100%;\n  max-width:560px;\n  margin:20vh auto 0\n}\n.fade-enter-active[data-v-783693cd],.fade-leave-active[data-v-783693cd]{\n  transition:opacity .3s\n}\n.fade-enter[data-v-783693cd],.fade-leave-to[data-v-783693cd]{\n  opacity:0\n}',""]),o.locals={},t.exports=o},709:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n(90),n(116),n(356),n(117);var o=function(t,e){var n=Math.pow(10,e);return Math.round(t*n)/n}},716:function(t,e,n){t.exports=n.p+"img/logo-full.087e65f.png"},738:function(t,e,n){var content=n(747);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(64).default)("113c9ecb",content,!0,{sourceMap:!1})},746:function(t,e,n){"use strict";n(738)},747:function(t,e,n){var o=n(63)((function(i){return i[1]}));o.push([t.i,'#Receive[data-v-46a24d98]{\n  min-height:100vh;\n  background:#f4f4f6\n}\n#Receive>.header[data-v-46a24d98]{\n  box-shadow:0 2px 20px -3px rgb(0 0 0/16%)\n}\n#IDO_CARD[data-v-46a24d98]{\n  background-image:linear-gradient(180deg,rgba(219,234,254,.4),rgba(192,220,254,.4))\n}\n.grid .card[data-v-46a24d98]{\n  height:100%;\n  max-width:604px;\n  margin:0 auto;\n  background:#fff;\n  border-radius:15px;\n  box-shadow:0 3px 21px 0 rgba(0,0,0,.14);\n  padding:16px\n}\n.card .label-v[data-v-46a24d98]{\n  padding:12px 0\n}\n.card .label-v .label[data-v-46a24d98]{\n  font-family:"SourceHanSansCN-Normal";\n  font-size:.8rem;\n  height:2.2rem;\n  color:#999\n}\n.card .label-v .value[data-v-46a24d98]{\n  font-family:"Arial-BoldMT";\n  font-size:1.1rem;\n  color:#333\n}\n#IDO_Details .content[data-v-46a24d98]{\n  padding:0 16px;\n  margin:0 -16px;\n  max-height:340px;\n  overflow:scroll;\n  -webkit-overflow-scrolling:touch;\n  color:#666\n}\n#IDO_Details .content ul li[data-v-46a24d98]{\n  margin-bottom:8px\n}',""]),o.locals={},t.exports=o},776:function(t,e,n){"use strict";n.r(e);var o=n(17),r=(n(66),n(146),n(65),n(704),n(24),n(90),n(357),n(217)),c=n(706),l=n(67),d=n(37),m=n(709),h=n(50),v=n.n(h),f={components:{IButton:r.default,WalletAccount:c.default},data:function(){return{contract:null,isIdoEnable:!1,isClaimEnable:!1,buyValue:null,timer:0,timer2:0,unLockTime:"2021-06-25 12:00:00",loading:{buy:!1,receive:!1},allowReceive:!1,releaseTime:null}},computed:Object(l.b)({account:"account",accountBalance:"accountBalance",IDOTotalBalance:"IDOTotalBalance",IDOTotalSupply:"IDOTotalSupply",IDORemainEth:"IDORemainEth",IDOTotalEth:"IDOTotalEth",IDORemainSCC:"IDORemainSCC",IDOTotalSCC:"IDOTotalSCC",estimatedTotalBalance:function(){var t=this.IDOTotalBalance,e=this.IDOTotalSupply;return t&&e?100*parseFloat((e-t)/e):0},releaseTimeFormat:function(){return this.releaseTime?new Date(this.releaseTime<1e12?1e3*this.releaseTime:this.releaseTime).toUTCString():"--"},unlockTimeFormat:function(){if(!this.releaseTime)return"--";var t=new Date(this.releaseTime<1e12?1e3*this.releaseTime:this.releaseTime),e=t.getUTCFullYear(),n=t.getUTCMonth(),o=t.getUTCDate(),r=t.getUTCHours(),c=t.getUTCMinutes();r<10&&(r="0"+r),c<10&&(c="0"+c);return"GMT ".concat(r,": ").concat(c," on ").concat(["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"][n]," ").concat(o,"nd, ").concat(e)},remainSCCText:function(){if(!this.IDORemainSCC)return"0 SCC";var t=this.IDORemainSCC+" SCC";return this.IDORemainSCC>99999999999?t=t+"（"+Object(m.a)(this.IDORemainSCC/1e13,2)+"trillion）":this.IDORemainSCC>99999999&&(t=t+"（"+Object(m.a)(this.IDORemainSCC/1e9,2)+"billion）"),t},checkDisabledIDO:function(){return!this.isIdoEnable},checkDisabledClaim:function(){return!this.isClaimEnable&&!this.allowReceive}}),filters:{decimalFormat:function(t,e){var n=Math.pow(10,e);return Math.round(t*n)/n},bigNumberFormat:function(t){return t>999999999?Object(m.a)(t/1e10,2)+"billion":t}},mounted:function(){var t=this;!function e(){if(v.a&&v.a.givenProvider&&window.ethereum){var n=window.IDOContract||d.a.initContract();n&&(t.contract=n,n.methods.isIdoEnable().call().then((function(e){console.log("isIdoEnable:",e),t.isIdoEnable=e})),n.methods.isClaimEnable().call().then((function(e){console.log("isClaimEnable:",e),t.isClaimEnable=e})),t.getIdoReleaseDate(),t.timer=setTimeout((function(){(window.IDOWeb3||d.a.init())&&IDOWeb3.eth.getBlockNumber().then((function(e){n.events.IdoProcessEvent({fromBlock:e},(function(e,n){console.log("IdoProcessEvent Error",e),console.log("IdoProcessEvent",n),n&&n.returnValues&&t.handleIDOProcessChange(n.returnValues)})).on("connected",(function(t){console.log(t)}))}))}),1e3))}else console.log("ido page --\x3e 未获取到provider， 1秒后重试"),setTimeout((function(){e()}),1e3)}()},beforeDestroy:function(){this.timer&&clearTimeout(this.timer),this.timer2&&clearTimeout(this.timer2)},methods:{connectToWallet:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,r,c,l,m,h,v,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(f=function(t){console.log("handleAccountsChanged"),0===t.length?console.log("Please connect to MetaMask."):t[0]!==n.account&&(n.$store.commit({type:"changeAccount",account:t[0]}),setTimeout((function(){n.$store.dispatch("getBalance"),n.$store.dispatch("getIdoRemainSupply"),n.$store.dispatch("getIdoRemainEth"),n.$store.dispatch("getIdoRemainSCC")}),100))},v=function(){ethereum.request({method:"eth_accounts"}).then(f).catch((function(t){console.error(t)}))},h=function(){return(h=Object(o.a)(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=window.IDOWeb3||d.a.init()){t.next=3;break}return t.abrupt("return",!0);case 3:return t.next=5,e.eth.getAccounts();case 5:if(!(n=t.sent)||!n.length){t.next=8;break}return t.abrupt("return",!1);case 8:return t.abrupt("return",!0);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)},m=function(){return h.apply(this,arguments)},n=t,window.ethereum){e.next=8;break}return t.$alert("Notice","Looks like you need a Dapp browser to get started. Consider installing MetaMask!",{type:"warning",confirmText:"OK"}),e.abrupt("return");case 8:return e.next=10,ethereum.request({method:"wallet_getPermissions"});case 10:return r=e.sent,c=r.find((function(t){return"eth_accounts"===t.parentCapability})),e.next=14,m();case 14:l=e.sent,c&&!l?v():ethereum.request({method:"wallet_requestPermissions",params:[{eth_accounts:{}}]}).then((function(t){t.find((function(t){return"eth_accounts"===t.parentCapability}))&&v()})).catch((function(t){4001===t.code?console.log("Permissions needed to continue."):console.error(t)}));case 16:case"end":return e.stop()}}),e)})))()},handleBuy:function(t){var e=this;if(t.preventDefault(),this.contract)if(this.account)if(this.accountBalance<this.buyValue)this.$alert("Notice","Insufficient available balance。<br />BNB balance："+Object(m.a)(this.accountBalance,4),{type:"warning",confirmText:"OK"});else{this.$Progress.start(),this.loading.buy=!0;try{var n=this.contract.methods.sendEthForIdo,data={from:this.account,value:parseInt(parseFloat(this.buyValue)*Math.pow(10,18))};n().estimateGas(data).then((function(){n().send(data).then((function(t){e.$Progress.finish(),console.log("sendEthForIdo Success:",t),e.$alert("Success","Transition Success!",{confirmText:"OK"}),e.$store.dispatch("getBalance"),e.$store.dispatch("getIdoRemainSupply"),e.$store.dispatch("getIdoRemainEth"),e.$store.dispatch("getIdoRemainSCC")})).catch((function(t){e.$Progress.fail();var n=t&&t.message?t.message.split("{")[0]:"Unknown Error";console.log("sendEthForIdo -> send Error:",t.message),e.$alert("IDO Error",n,{type:"warning",confirmText:"OK"})})).finally((function(){e.loading.buy=!1}))})).catch((function(t){e.$Progress.fail(),e.loading.buy=!1;var n=t&&t.message?t.message.split("{")[0]:"Unknown Error";console.log("sendEthForIdo -> estimateGas Error:",t.message),e.$alert("IOD Error",n,{type:"warning",confirmText:"OK"})}))}catch(t){this.$Progress.fail(),console.error(t),this.loading.buy=!1}}else this.$alert("Notice","Please connect to the wallet and try again.",{type:"warning",confirmText:"Connect Wallet",confirm:this.connectToWallet,cancel:function(){}});else alert("contract is null")},claimFromIdo:function(){var t=this;if(this.contract)if(this.account)if(this.IDORemainSCC){this.$Progress.start(),this.loading.receive=!0;try{var e=this.contract.methods.claimFromIdo,data={from:this.account};e().estimateGas(data).then((function(){e().send(data).then((function(e){t.$Progress.finish(),console.log("claimFromIdor:",e),t.$alert("Success","Token received successfully!",{confirmText:"OK"}),t.$store.dispatch("getIdoRemainSCC")})).catch((function(e){t.$Progress.fail(),t.loading.receive=!1;var n=e&&e.message?e.message.split("{")[0]:"Unknown Error";console.log("claimFromIdo -> send Error:",e),t.$alert("Notice",n,{type:"warning",confirmText:"OK"})})).finally((function(){t.loading.receive=!1}))})).catch((function(e){t.$Progress.fail(),t.loading.receive=!1;var n=e&&e.message?e.message.split("{")[0]:"Unknown Error";console.log("claimFromIdo -> estimateGas Error:",e),t.$alert("Receive Error",n,{type:"warning",confirmText:"OK"})}))}catch(t){this.$Progress.fail(),this.loading.receive=!1}}else this.$alert("Notice","No public offering token can receive.",{type:"warning",confirmText:"OK"});else this.$alert("Notice","Please connect to the wallet and try again.",{type:"warning",confirmText:"Connect Wallet",confirm:this.connectToWallet,cancel:function(){}})},getIdoReleaseDate:function(){var t=this;if(this.contract)try{var e=this.contract.methods.getIdoReleaseDate;e().estimateGas().then((function(){e().call().then((function(e){console.log("getIdoReleaseDate:",e),e&&(t.allowReceive=e[0],e[1]&&(t.releaseTime=e[1]))})).catch((function(e){console.log("getIdoReleaseDate -> send Error:",e),t.$alert("Notice",e.message,{type:"warning",confirmText:"OK"})}))})).catch((function(e){var n=e&&e.message?e.message.split("{")[0]:"Unknown Error";console.log("getIdoReleaseDate -> estimateGas Error:",e),t.$alert("Receive Error",n,{type:"warning",confirmText:"OK"})}))}catch(t){console.error(t)}},handleIDOProcessChange:function(data){data&&(this.$store.commit({type:"changeIDOTotalBalance",value:d.a.wei2Eth(data[0]||0)}),this.$store.commit({type:"changeIDOTotalSupply",value:d.a.wei2Eth(data[1]||0)}))}}},C=(n(746),n(28)),component=Object(C.a)(f,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"Receive"}},[o("header",{staticClass:"header bg-white"},[o("div",{staticClass:"container mx-auto"},[o("div",{staticClass:"py-4 flex items-center justify-between flex-wrap gap-4"},[o("div",[o("router-link",{attrs:{to:"/"}},[o("img",{staticClass:"h-8",attrs:{src:n(716),alt:"logo",height:"36"}})])],1),t._v(" "),o("div",{staticClass:"flex gap-4"},[o("div",{staticClass:"h-10 flex items-center"},[o("wallet-account")],1)])])])]),t._v(" "),o("main",{staticClass:"py-4"},[o("div",{staticClass:"container mx-auto mt-8"},[o("div",{staticClass:"grid grid-cols-12 grid-row-9 gap-4"},[o("div",{staticClass:"col-span-12 sm:col-span-7 row-span-3"},[o("div",{staticClass:"card"},[o("div",{staticClass:"grid grid-cols-6 gap-1"},[t._m(0),t._v(" "),t._m(1),t._v(" "),o("div",{staticClass:"col-span-2"},[o("div",{staticClass:"label-v"},[o("div",{staticClass:"label"},[t._v("Reserved Amount")]),t._v(" "),o("div",{staticClass:"value"},[t._v("\n                    "+t._s(t._f("decimalFormat")(t.IDOTotalBalance,4))+"\n                  ")])])]),t._v(" "),t._m(2),t._v(" "),t._m(3)])])]),t._v(" "),o("div",{staticClass:"col-span-12 sm:col-span-5 row-span-6"},[o("div",{staticClass:"card",attrs:{id:"IDO_Details"}},[o("h3",[t._v("IDO Details")]),t._v(" "),o("hr",{staticClass:"mt-3"}),t._v(" "),o("div",{staticClass:"content"},[t._m(4),t._v(" "),o("div",[o("h4",{staticClass:"text-lg font-medium text-black my-1"},[t._v("\n                  Public Offering Rules:\n                ")]),t._v(" "),o("p",[t._v("\n                  When designing the public offering, Santa Claus strictly\n                  follows the three principles of fairness and\n                  user-friendliness, mainly including:\n                ")]),t._v(" "),t._m(5),t._v(" "),o("p",{staticClass:"mt-4"},[t._v("\n                  SCC subscribed during IDO will be temporarily locked.\n                  Unlocking will be performed at "+t._s(t.unlockTimeFormat)+". At\n                  that time, users need to go to DAPP to collect the public\n                  offering amount manually. Accordingly, tokens will be\n                  automatically issued to the wallet address. In the public\n                  offering period, if there is any unfinished public offering\n                  amount, it will be automatically transferred to the black\n                  hole address for destruction, so as to ensure the maximum\n                  fairness.\n                ")])])])])]),t._v(" "),o("div",{staticClass:"col-span-12 sm:col-span-7 row-span-3"},[o("div",{staticClass:"card"},[o("div",{staticClass:"text-gray-600 my-2"},[t._v("Completion")]),t._v(" "),o("div",[o("div",{staticClass:"h-24 py-6"},[o("client-only",[o("vm-progress",{attrs:{striped:"",percentage:t.estimatedTotalBalance,"show-text":!1,"stroke-width":42,"stroke-color":"rgba(48, 95, 243, 1)"}})],1)],1),t._v(" "),o("div",[t._v("\n                Estimated total balance：\n                "+t._s(t._f("decimalFormat")(t.IDOTotalBalance,4))+" BNB（"+t._s(t._f("decimalFormat")(t.estimatedTotalBalance,4))+"%）\n              ")])])])]),t._v(" "),o("div",{staticClass:"col-span-12 sm:col-span-7 row-span-3"},[o("form",{on:{submit:t.handleBuy}},[o("div",{staticClass:"card flex flex-col justify-between"},[o("div",{staticClass:"text-gray-600 my-2"},[t._v("\n                Holding "+t._s(t._f("decimalFormat")(t.accountBalance,4))+" BNB, available\n                limit\n                "+t._s(t._f("decimalFormat")(t.IDOTotalEth-t.IDORemainEth,4))+"\n              ")]),t._v(" "),o("div",{staticClass:"my-6"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.buyValue,expression:"buyValue"}],staticClass:"\n                    outline-none\n                    focus:ring-2\n                    border\n                    h-12\n                    w-full\n                    px-4\n                    rounded-sm\n                  ",attrs:{type:"number",required:"",step:"0.1",min:0,placeholder:"Input"},domProps:{value:t.buyValue},on:{input:function(e){e.target.composing||(t.buyValue=e.target.value)}}})]),t._v(" "),o("div",{staticClass:"text-center"},[o("i-button",{staticClass:"rounded-full",attrs:{type:"submit",disabled:!0,loading:t.loading.buy}},[t._v("BUY NOW")])],1)])])]),t._v(" "),o("div",{staticClass:"col-span-12 sm:col-span-5 row-span-3"},[o("div",{staticClass:"card flex flex-col justify-between"},[o("div",{staticClass:"text-sm text-gray-600 my-2"},[t._v("\n              "+t._s(t.isClaimEnable?"":"Open Time: ")+t._s(t.releaseTimeFormat)+"\n              ")]),t._v(" "),o("div",{staticClass:"my-4"},[o("div",{staticClass:"\n                  border\n                  w-full\n                  px-4\n                  text-lg\n                  py-4\n                  rounded-sm\n                  text-blue-600\n                  leading-relaxed\n                  text-center\n                "},[t._v("\n                "+t._s(t.remainSCCText)+"\n                ")])]),t._v(" "),o("div",{staticClass:"text-center"},[o("i-button",{staticClass:"rounded-full",attrs:{loading:t.loading.receive,disabled:t.checkDisabledClaim},on:{click:t.claimFromIdo}},[t._v("receive")])],1)])])])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-span-2"},[n("div",{staticClass:"label-v"},[n("div",{staticClass:"label"},[n("i",[t._v("Total SCC")])]),t._v(" "),n("div",{staticClass:"flex items-center"},[n("div",{staticClass:"\n                        w-5\n                        h-5\n                        bg-red-500\n                        text-white text-sm text-center\n                        rounded-full\n                        mr-1\n                      "},[t._v("\n                      $\n                    ")]),t._v(" "),n("div",{staticClass:"value"},[t._v("500 trillion")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-span-2"},[n("div",{staticClass:"label-v"},[n("div",{staticClass:"label"},[t._v("Pre Sale Of Public Offering")]),t._v(" "),n("div",{staticClass:"value"},[t._v("5%")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-span-3"},[n("div",{staticClass:"label-v"},[n("div",{staticClass:"label"},[t._v("Pre sale price")]),t._v(" "),n("div",{staticClass:"value"},[t._v("0.1 BNB = 2.5 billion SCC")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-start-5 col-span-2"},[n("div",{staticClass:"label-v"},[n("div",{staticClass:"label"},[t._v("Start Time")]),t._v(" "),n("div",{staticClass:"value"},[t._v("6.24 - 6.25")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pt-3"},[n("h4",{staticClass:"text-lg font-medium text-black my-1"},[t._v("\n                  Public Offering Rules for the Santa Claus\n                ")]),t._v(" "),n("ul",[n("li",[t._v("Start Time: GMT 16: 00, June 24, 2021")]),t._v(" "),n("li",[t._v("End Time: GMT 16: 00, June 25, 2021")]),t._v(" "),n("li",[t._v("Duration: 24 hours")]),t._v(" "),n("li",[t._v("\n                    Token Quantity: 25 trillion (Accounting for 5% of the\n                    total supply)\n                  ")]),t._v(" "),n("li",[t._v("Subscription Currency: BNB")]),t._v(" "),n("li",[t._v("Pre-sale Price: 0.1BNB=2.5 billion SCC")]),t._v(" "),n("li",[t._v("\n                    Public offering Amount: The minimum participation amount\n                    for a single account starts from 0.1BNB, with the maximum\n                    accumulated amount of 4 BNB.\n                  ")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticStyle:{"list-style":"decimal-leading-zero","padding-left":"28px"}},[n("li",[t._v("\n                    The fair participation of ordinary people is allowed. The\n                    whole public offering will be carried out in the block\n                    chain. Therefore, users do not need to compete with robot\n                    scientists;\n                  ")]),t._v(" "),n("li",[t._v("\n                    Prevent the Token price from being manipulated, thus\n                    letting the market determine the fair value of the token;\n                  ")]),t._v(" "),n("li",[t._v("\n                    The process is simplified. Any user can connect wallet on\n                    the web page and subscribe for $SCC.\n                  ")])])}],!1,null,"46a24d98",null);e.default=component.exports;installComponents(component,{WalletAccount:n(706).default})}}]);