(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1f1b604c"],{"6bd5":function(e,t,a){"use strict";var n=a("79e6"),r=a.n(n);r.a},"79e6":function(e,t,a){},b60a:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"box"},[n("img",{attrs:{src:a("139c")("./V"+e.grade+".png")}}),n("span",[e._v(e._s(e.$t("message.myID"))+"（V"+e._s(e.grade)+"）")]),n("p",[e._v(e._s(e.$t("message.gradeTitle")))]),n("pre",[e._v(e._s(e.$t("message.gradeContent"))+"\n\t")]),n("Button",{attrs:{disabled:e.grade>0,color:"linear-gradient(45deg, #21C181, #21C1A4)"},on:{click:e.upgrade}},[e._v(e._s(e.$t("message.upgrade")))])],1)},r=[],s=(a("e7e5"),a("d399")),o=(a("66b9"),a("b650")),c={components:{Button:o["a"]},data:function(){return{grade:0}},methods:{upgrade:function(){var e=this;this.$contract.get("levelSub","_paymentLv1Prices").call((function(t,a){if(!t){var n=s["a"].loading({duration:0,forbidClick:!0,message:e.$t("message.loading")});e.$contract.get("levelSub","PaymentToUpgradeNoder").send({from:e.$address,value:a}).on("receipt",(function(t){n.clear(),e.$router.back()})).on("error",console.error)}}))}},mounted:function(){var e=this;this.$contract.get("levelSub","LevelOf",this.$address).call({from:this.$address},(function(t,a){e.grade=a}))}},d=c,i=(a("6bd5"),a("2877")),u=Object(i["a"])(d,n,r,!1,null,"e86c3418",null);t["default"]=u.exports}}]);