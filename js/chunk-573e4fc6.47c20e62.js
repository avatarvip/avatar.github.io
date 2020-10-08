(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-573e4fc6"],{"0a1d":function(t,e,i){"use strict";var n=i("f9bc"),a=i.n(n);a.a},2381:function(t,e,i){},"2efe":function(t,e,i){"use strict";var n=i("6e27"),a=i.n(n);a.a},"38fc":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("overlay",{attrs:{show:t.show}},[n("div",{staticClass:"authorize"},[n("div",{staticClass:"header"},[n("icon",{attrs:{name:"cross"},on:{click:t.toggle}}),n("img",{attrs:{src:i("e10a")}}),"zh-CN"===t.$i18n.locale?n("span",[t._v("合约授权")]):n("span",[t._v("Contract authorization")])],1),n("div",{staticClass:"content"},[n("div",{staticClass:"title"},[n("i"),"zh-CN"===t.$i18n.locale?n("span",[t._v("授权指合约对资产的操作额度进行授信，与真实可用额度无关。")]):n("span",[t._v("Authorization refers to that the contract grants credit to the asset's operating quota, and has nothing to do with the real available quota.")])])]),n("Button",{attrs:{color:"linear-gradient(45deg, #21C181, #21C1A4)"},on:{click:t.authorize}},[t._v(t._s(t.$t("message.define")))])],1)])},a=[],o=(i("66b9"),i("b650")),s=(i("c3a6"),i("ad06")),c=(i("f1dc"),i("6e47")),r={components:{Overlay:c["a"],Icon:s["a"],Button:o["a"]},props:{contract:String},data:function(){return{show:!1}},methods:{toggle:function(){this.show=!this.show},authorize:function(){var t=this;this.$contract.get("erc20token","approve",[this.$contract.get(this.contract)._address,this.$toWei("100000")]).send({from:this.$address}).on("receipt",(function(e){t.$emit("send"),t.toggle()})).on("error",console.error)}}},l=r,h=(i("0a1d"),i("2877")),u=Object(h["a"])(l,n,a,!1,null,"037b4fe1",null);e["a"]=u.exports},"6e27":function(t,e,i){},"7bf9":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box"},[n("div",{staticClass:"header"},[n("div",[n("span",[t._v(t._s(t.$t("message.canJoin")))]),n("span",[t._v(t._s(t.canJoin)+"ETH")])]),n("div",[n("span",[t._v(t._s(t.$t("message.currentJoin")))]),n("span",[t._v(t._s(t.currentJoin)+"ETH")])]),n("div",[n("span",[t._v(t._s(t.$t("message.totalJoin")))]),n("span",[t._v(t._s(t.totalJoin)+"ETH")])])]),n("div",{staticClass:"content"},[n("div",{staticClass:"title"},[n("i"),n("span",[t._v(t._s(t.$t("message.joinQuota")))])]),n("div",{staticClass:"input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.amount,expression:"amount"}],attrs:{type:"number",placeholder:"0"},domProps:{value:t.amount},on:{input:function(e){e.target.composing||(t.amount=e.target.value)}}}),n("span",[t._v("ETH")])]),n("div",{staticClass:"amount"},[n("div",[n("img",{attrs:{src:i("24f4")}}),n("span",[t._v(t._s(t.ethBalance)+" ETH")])]),n("div",[n("img",{attrs:{src:i("4013")}}),n("span",[t._v(t._s(t.upcBalance)+" UPC")])])]),n("div",{staticClass:"select-join"},[n("Button",{attrs:{disabled:t.oneETH,color:"linear-gradient(45deg, #228C78, #1D4351)"},on:{click:function(e){t.amount=1}}},[t._v("1ETH")]),n("Button",{attrs:{disabled:t.fiveETH,color:"linear-gradient(45deg, #228C78, #1D4351)"},on:{click:function(e){t.amount=5}}},[t._v("5ETH")]),n("Button",{attrs:{disabled:t.tenETH,color:"linear-gradient(45deg, #228C78, #1D4351)"},on:{click:function(e){t.amount=10}}},[t._v("10ETH")]),n("Button",{attrs:{disabled:t.twentyETH,color:"linear-gradient(45deg, #228C78, #1D4351)"},on:{click:function(e){t.amount=20}}},[t._v("20ETH")])],1),n("div",{staticClass:"consume"},[n("div",[n("i"),n("span",[t._v(t._s(t.$t("message.gasPrice")))]),n("span",[t._v(t._s(Number(t.amount)*t.changeProp*t.gasProp)+" UPC")])]),n("div",[n("i"),n("span",[t._v(t._s(t.$t("message.outQuota")))]),n("span",[t._v(t._s(t.outAmount)+" ETH")])])])]),n("div",{staticClass:"footer"},[n("Button",{attrs:{disabled:!t.checked,color:"linear-gradient(45deg, #21C181, #21C1A4)"},on:{click:t.authorize}},[t._v(t._s(t.$t("message.define")))]),n("checkbox",{staticClass:"checkbox",model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}},[t._v(" "+t._s(t.$t("message.joinRule1"))),n("span",{on:{click:function(e){t.rule=!0}}},[t._v(t._s(t.$t("message.joinRule2")))]),t._v(t._s(t.$t("message.joinRule3"))+" ")])],1),n("overlay",{staticClass:"limit",attrs:{show:t.show},on:{click:function(e){t.show=!1}}},[n("div",{on:{click:function(t){t.stopPropagation()}}},[n("img",{attrs:{src:i("5b2b")}}),n("span",[t._v(t._s(t.$t("message.limit")))])]),n("Button",{on:{click:function(e){t.show=!1}}},[t._v(t._s(t.$t("message.define")))])],1),n("overlay",{staticClass:"rule",attrs:{show:t.rule},on:{click:function(e){t.rule=!1}}},["zh-CN"===t.$i18n.locale?n("div",{on:{click:function(t){t.stopPropagation()}}},[n("span",[t._v("参与规则")]),n("div",[t._v(" Avatar（阿凡达）是一个去中心化的理财项目，存在不确定的风险因素，请您熟知以下规则后理性参与："),n("br"),t._v(" 一、Avatar风险准则： "),n("p",[t._v("1.不准向他人做任何形式的承诺和保障；")]),n("p",[t._v("2.不准夸大事实向他人宣传；")]),n("p",[t._v("3.不准收取任何会员的资金；")]),n("p",[t._v("4.不准用任何特殊协议吸引他人；")]),n("p",[t._v("5.充分了解Avatar所有制度模式以后方可与他人分享。")]),t._v(" 二、Avatar收益规则： "),n("p",[t._v("1.静态收益比例每日变动，由内置算法全智能决定；")]),n("p",[t._v("2.参与方式：100% ETH+1/20ETH的 UPC；")]),n("p",[t._v("3.静态收益+管理收益达到出局额度后，需再次参与才能继续享受相关收益；")]),n("p",[t._v("4.小奖每日上午8点开奖，随机抽取当天参与30 ETH及以上的5名玩家平均分配；")]),n("p",[t._v("5.大奖池倒计时36小时结束后开奖，倒计时结束，开奖一次；每多参加1ETH，增加1小时，倒计时结束 ，从后往前分配大奖。奖励给最后的300名玩家，倒数第1名：100倍，倒数第2-6名：5倍，倒数第7-300名：3倍。")])]),n("div",[n("span",[t._v(t._s(t.$t("message.redyRule")))]),n("Button",{attrs:{color:"linear-gradient(45deg, #21C181, #21C1A4)"},on:{click:function(e){t.rule=!1}}},[t._v(t._s(t.$t("message.agree")))])],1)]):n("div",{staticClass:"rule",on:{click:function(t){t.stopPropagation()}}},[n("span",[t._v("Participation rules")]),n("div",[t._v(" Avatar is a decentralized financial management project, there are uncertain risk factors, please be familiar with the following rules and participate rationally:"),n("br"),t._v(" 1. Avatar Risk Criteria: "),n("p",[t._v("①It is not allowed to make any form of promise and guarantee to others;")]),n("p",[t._v("②Do not exaggerate the facts to promote to others;")]),n("p",[t._v("③Not allowed to collect funds from any member;")]),n("p",[t._v("④No special agreement is allowed to attract others;")]),n("p",[t._v("⑤Only fully understand all Avatar system models before sharing with others.")]),t._v(" 2. Avatar income rules: "),n("p",[t._v("①The static return ratio changes daily and is determined by the built-in algorithm fully intelligent;")]),n("p",[t._v("②Participation method: 100% ETH+1/20ETH UPC;")]),n("p",[t._v("③After the static income + management income reaches the outgoing quota, you need to participate again to continue to enjoy the relevant income;")]),n("p",[t._v("④The small prize is drawn every day at 8 a.m., and randomly selected 5 players who participate in 30 ETH and above on the same day are evenly distributed;")]),n("p",[t._v("⑤The prize pool will be drawn after the 36-hour countdown, and the countdown will be completed once. For each additional 1ETH, 1 hour will be added, and the countdown will end, and the prize will be distributed from back to front. Rewarded to the last 300 players, the penultimate 1: 100 times, the penultimate 2-6: 5 times, the penultimate 7-300: 3 times.")])]),n("div",[n("span",[t._v(t._s(t.$t("message.redyRule")))]),n("Button",{attrs:{color:"linear-gradient(45deg, #21C181, #21C1A4)"},on:{click:function(e){t.rule=!1}}},[t._v(t._s(t.$t("message.agree")))])],1)])]),n("self-authorize",{ref:"authorize",attrs:{contract:"round"},on:{send:t.join}})],1)},a=[],o=(i("99af"),i("a15b"),i("a9e3"),i("b680"),i("d3b7"),i("3ca3"),i("ddb0"),i("e7e5"),i("d399")),s=(i("f1dc"),i("6e47")),c=(i("68ef"),i("9d70"),i("09fe"),i("3743"),i("2381"),i("d282")),r=i("ad06"),l=i("9884"),h=i("ea8e"),u=function(t){var e=t.parent,i=t.bem,n=t.role;return{mixins:[Object(l["a"])(e)],props:{name:null,value:null,disabled:Boolean,iconSize:[Number,String],checkedColor:String,labelPosition:String,labelDisabled:Boolean,shape:{type:String,default:"round"},bindGroup:{type:Boolean,default:!0}},computed:{disableBindRelation:function(){return!this.bindGroup},isDisabled:function(){return this.parent&&this.parent.disabled||this.disabled},iconStyle:function(){var t=this.checkedColor||this.parent&&this.parent.checkedColor;if(t&&this.checked&&!this.isDisabled)return{borderColor:t,backgroundColor:t}},tabindex:function(){return this.isDisabled||"radio"===n&&!this.checked?-1:0}},methods:{onClick:function(t){var e=this.$refs.label,i=t.target,n=e&&(e===i||e.contains(i));this.isDisabled||n&&this.labelDisabled||this.toggle(),this.$emit("click",t)}},render:function(){var t=arguments[0],e=this.slots,a=this.checked,o=e("icon",{checked:a})||t(r["a"],{attrs:{name:"success"},style:this.iconStyle}),s=e()&&t("span",{ref:"label",class:i("label",[this.labelPosition,{disabled:this.isDisabled}])},[e()]),c=this.iconSize||this.parent&&this.parent.iconSize,l=[t("div",{class:i("icon",[this.shape,{disabled:this.isDisabled,checked:a}]),style:{fontSize:Object(h["a"])(c)}},[o])];return"left"===this.labelPosition?l.unshift(s):l.push(s),t("div",{attrs:{role:n,tabindex:this.tabindex,"aria-checked":String(this.checked)},class:i(),on:{click:this.onClick}},[l])}}},d=Object(c["a"])("checkbox"),m=d[0],p=d[1],f=m({mixins:[u({bem:p,role:"checkbox",parent:"vanCheckbox"})],computed:{checked:{get:function(){return this.parent?-1!==this.parent.value.indexOf(this.name):this.value},set:function(t){this.parent?this.setParentValue(t):this.$emit("input",t)}}},watch:{value:function(t){this.$emit("change",t)}},methods:{toggle:function(t){var e=this;void 0===t&&(t=!this.checked),clearTimeout(this.toggleTask),this.toggleTask=setTimeout((function(){e.checked=t}))},setParentValue:function(t){var e=this.parent,i=e.value.slice();if(t){if(e.max&&i.length>=e.max)return;-1===i.indexOf(this.name)&&(i.push(this.name),e.$emit("input",i))}else{var n=i.indexOf(this.name);-1!==n&&(i.splice(n,1),e.$emit("input",i))}}}}),v=(i("66b9"),i("b650")),g=i("38fc"),$={components:{Button:v["a"],Checkbox:f,Overlay:s["a"],selfAuthorize:g["a"]},data:function(){return{canJoin:0,currentJoin:0,totalJoin:0,ethBalance:"0.00",upcBalance:"0.00",amount:"",oneETH:!0,fiveETH:!0,tenETH:!0,twentyETH:!0,changeProp:1,gasProp:1,outAmount:"0.00",minJoin:0,maxJoin:0,allCanJoin:0,show:!1,checked:!1,rule:!1}},methods:{init:function(){this.$cache.join?(this.canJoin=this.$cache.join.canJoin,this.currentJoin=this.$cache.join.currentJoin,this.totalJoin=this.$cache.join.totalJoin,this.oneETH=this.$cache.join.oneETH,this.fiveETH=this.$cache.join.fiveETH,this.tenETH=this.$cache.join.tenETH,this.twentyETH=this.$cache.join.twentyETH,this.changeProp=this.$cache.join.changeProp,this.gasProp=this.$cache.join.gasProp,this.outAmount=this.$cache.join.outAmount,this.minJoin=this.$cache.join.minJoin,this.maxJoin=this.$cache.join.maxJoin,this.allCanJoin=this.$cache.join.allCanJoin):this.$cache.join={},this.getData()},getData:function(){var t=this;Promise.all([this.$contract.get("round","GetCurrentGameStatus").call({from:this.$address}),this.$contract.get("round","TotalInOutAmount").call({from:this.$address}),this.$web3.eth.getBalance(this.$address),this.$contract.get("erc20token","balanceOf",this.$address).call({from:this.$address}),this.$contract.get("cost","CurrentCostProp").call({from:this.$address}),this.$contract.get("cost","_costPercentage").call({from:this.$address}),this.$contract.get("round","_depositMinLimit").call({from:this.$address}),this.$contract.get("round","_depositMaxLimit").call({from:this.$address}),this.$contract.get("turing","GetDepositedLimitCurrentDelta").call({from:this.$address})]).then((function(e){t.currentJoin=t.$fromWei(e[0].currentEther),t.canJoin=t.currentJoin>0?t.$fromWei(e[0].depositMaxLimit)-t.currentJoin:50,t.outAmount=(t.currentJoin*Number(e[0].profixMultiplier)-t.$fromWei(e[0].withdrawableTotal)).toFixed(2),t.totalJoin=t.$fromWei(e[1].inEther),t.ethBalance=t.$fromWei(e[2],2),t.upcBalance=t.$fromWei(e[3],2),t.changeProp=t.$fromWei(e[4]),t.gasProp=Number(e[5])/100,t.minJoin=t.$fromWei(e[6]),t.maxJoin=t.$fromWei(e[7]),t.allCanJoin=t.$fromWei(e[8]),t.$cache.join.canJoin=t.canJoin,t.$cache.join.currentJoin=t.currentJoin,t.$cache.join.outAmount=t.outAmount,t.$cache.join.totalJoin=t.totalJoin,t.$cache.join.ethBalance=t.ethBalance,t.$cache.join.upcBalance=t.upcBalance,t.$cache.join.changeProp=t.changeProp,t.$cache.join.gasProp=t.gasProp,t.$cache.join.minJoin=t.minJoin,t.$cache.join.maxJoin=t.maxJoin,t.$cache.join.allCanJoin=t.allCanJoin,t.isShowETH()})).catch((function(e){delete t.$cache.join}))},authorize:function(){var t=this,e=Number(this.amount),i=e*this.changeProp*this.gasProp;return e<this.minJoin||e>this.maxJoin?o["a"].fail("".concat(this.$t("message.minJoin")).concat(this.minJoin,"ETH，").concat(this.$t("message.maxJoin")).concat(this.maxJoin,"ETH")):e>this.canJoin&&this.currentJoin>0?o["a"].fail(this.$t("message.notJoinRange")):e>this.allCanJoin?this.show=!0:i>this.upcBalance?o["a"].fail(this.$t("message.notUPC")):void this.$contract.get("erc20token","allowance",[this.$address,this.$contract.get("round")._address]).call({from:this.$address},(function(e,n){e||(t.$fromWei(n)>=i?t.join():t.$refs.authorize.toggle())}))},join:function(){var t=this,e=o["a"].loading({duration:0,forbidClick:!0,message:this.$t("message.loading")});this.$contract.get("round","Join").send({from:this.$address,value:this.$toWei("".concat(this.amount))}).on("receipt",(function(i){e.clear(),t.getData(),t.$router.push({path:"/"})})).on("error",console.error)},isShowETH:function(){this.canJoin>=20||0==this.currentJoin?(this.oneETH=!1,this.fiveETH=!1,this.tenETH=!1,this.twentyETH=!1):this.canJoin>=10?(this.oneETH=!1,this.fiveETH=!1,this.tenETH=!1):this.canJoin>=5?(this.oneETH=!1,this.fiveETH=!1):this.canJoin>=1&&(this.oneETH=!1)}},mounted:function(){this.init()}},_=$,b=(i("2efe"),i("943c"),i("2877")),J=Object(b["a"])(_,n,a,!1,null,"f12fc3ca",null);e["default"]=J.exports},"943c":function(t,e,i){"use strict";var n=i("baff"),a=i.n(n);a.a},baff:function(t,e,i){},f9bc:function(t,e,i){}}]);