(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d5e78cf4"],{1292:function(t,e,a){"use strict";var o=a("6361"),i=a.n(o);i.a},"38fc":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("overlay",{attrs:{show:t.show}},[o("div",{staticClass:"authorize"},[o("div",{staticClass:"header"},[o("icon",{attrs:{name:"cross"},on:{click:t.toggle}}),o("img",{attrs:{src:a("e10a")}}),"zh-CN"===t.$i18n.locale?o("span",[t._v("合约授权")]):o("span",[t._v("Contract authorization")])],1),o("div",{staticClass:"content"},[o("div",{staticClass:"title"},[o("i"),"zh-CN"===t.$i18n.locale?o("span",[t._v("授权指合约对资产的操作额度进行授信，与真实可用额度无关。")]):o("span",[t._v("Authorization refers to that the contract grants credit to the asset's operating quota, and has nothing to do with the real available quota.")])])]),o("Button",{attrs:{color:"linear-gradient(45deg, #21C181, #21C1A4)"},on:{click:t.authorize}},[t._v(t._s(t.$t("message.define")))])],1)])},i=[],s=(a("66b9"),a("b650")),n=(a("c3a6"),a("ad06")),c=(a("f1dc"),a("6e47")),r={components:{Overlay:c["a"],Icon:n["a"],Button:s["a"]},props:{contract:String},data:function(){return{show:!1}},methods:{toggle:function(){this.show=!this.show},authorize:function(){var t=this;this.$contract.get("erc20token","approve",[this.$contract.get(this.contract)._address,this.$toWei("100000")]).send({from:this.$address}).on("receipt",(function(e){t.$emit("send"),t.toggle()})).on("error",console.error)}}},h=r,d=(a("a1c7"),a("2877")),l=Object(d["a"])(h,o,i,!1,null,"8c759b26",null);e["a"]=l.exports},5940:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"box"},[o("img",{attrs:{src:a("5857")}}),o("pre",[t._v(t._s(t.$t("message.exitTitle1"))+"\n"+t._s(t.$t("message.exitTitle2"))+"\n\t")]),o("div",{staticClass:"content"},[o("div",[o("div",[o("img",{attrs:{src:a("265a")}}),o("span",[t._v(t._s(t.$t("message.totalJoin")))])]),o("span",[t._v(t._s(t.totalJoin)+" ETH")])]),o("div",[o("div",[o("img",{attrs:{src:a("87fb")}}),o("span",[t._v(t._s(t.$t("message.totalIncome")))])]),o("span",[t._v(t._s(t.totalIncome)+" ETH")])]),o("div",[o("div",[o("img",{attrs:{src:a("7dab")}}),o("span",[t._v(t._s(t.$t("message.canExit")))])]),o("span",[t._v(t._s(t.exitAmount)+" ETH")])])]),o("Button",{attrs:{disabled:t.disabled,color:"linear-gradient(45deg, #228C78, #1D4351)"},on:{click:t.exit}},[t._v(t._s(t.$t("message.define")))]),o("self-authorize",{ref:"authorize",attrs:{contract:"round"},on:{send:t.exit}})],1)},i=[],s=(a("a15b"),a("a9e3"),a("b680"),a("d3b7"),a("3ca3"),a("ddb0"),a("e7e5"),a("d399")),n=(a("66b9"),a("b650")),c=a("38fc"),r={components:{Button:n["a"],selfAuthorize:c["a"]},data:function(){return{disabled:!0,totalJoin:"0.00",exitAmount:"0.00",totalIncome:"0.00",changeProp:1,gasProp:1}},methods:{init:function(){this.$cache.exit?(this.disabled=this.$cache.exit.disabled,this.totalJoin=this.$cache.exit.totalJoin,this.exitAmount=this.$cache.exit.exitAmount,this.totalIncome=this.$cache.exit.totalIncome,this.changeProp=this.$cache.join.changeProp,this.gasProp=this.$cache.join.gasProp):this.$cache.exit={},this.getData()},getData:function(){var t=this;Promise.all([this.$contract.get("round","GetCurrentGameStatus").call({from:this.$address}),this.$contract.get("round","TotalInOutAmount").call({from:this.$address}),this.$contract.get("cost","CurrentCostProp").call({from:this.$address}),this.$contract.get("cost","_costPercentage").call({from:this.$address}),this.$web3.eth.getBlock("latest")]).then((function(e){var a=new Date(1e3*Number(e[0].latestDepositInTime)+72e5).getTime(),o=t.$fromWei(e[1].inEther),i=t.$fromWei(e[1].outEther);t.totalJoin="".concat(o.toFixed(2)),t.totalIncome="".concat(i.toFixed(2)),t.exitAmount="".concat((o-i).toFixed(2)),t.disabled=!(o>i&&(new Date).getTime()>a),t.changeProp=t.$fromWei(e[2]),t.gasProp=Number(e[3])/100,t.$cache.exit.disabled=t.disabled,t.$cache.exit.totalJoin=t.totalJoin,t.$cache.exit.exitAmount=t.exitAmount,t.$cache.exit.totalIncome=t.totalIncome,t.$cache.join.changeProp=t.changeProp,t.$cache.join.gasProp=t.gasProp})).catch((function(e){delete t.$cache.exit}))},authorize:function(){var t=this;this.$contract.get("erc20token","allowance",[this.$address,this.$contract.get("round")._address]).call({from:this.$address},(function(e,a){e||(t.$fromWei(a)>=Number(t.exitAmount)*t.changeProp*t.gasProp?t.exit():t.$refs.authorize.toggle())}))},exit:function(){var t=this;this.$contract.get("round","Redeem").send({from:this.$address}).on("transactionHash",(function(e){s["a"].loading({duration:0,forbidClick:!0,message:t.$t("message.loading")})})).on("receipt",(function(e){s["a"].clear(),t.$router.back()})).on("error",console.error)}},mounted:function(){this.init()}},h=r,d=(a("1292"),a("2877")),l=Object(d["a"])(h,o,i,!1,null,"62c6bad9",null);e["default"]=l.exports},6361:function(t,e,a){},a1c7:function(t,e,a){"use strict";var o=a("e96c"),i=a.n(o);i.a},e96c:function(t,e,a){}}]);