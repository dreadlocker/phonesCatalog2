(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-616c9644"],{"78ba":function(e,i,s){"use strict";var n=s("ce00"),t=s.n(n);t.a},"8e44":function(e,i,s){e.exports=s.p+"img/like.3c977f55.png"},ca00:function(e,i,s){"use strict";s.r(i);var n=function(){var e=this,i=e.$createElement,s=e._self._c||i;return s("SinglePhone")},t=[],r=function(){var e=this,i=e.$createElement,n=e._self._c||i;return e.id<e.phonesArr.length?n("div",{staticClass:"singlePhone"},[n("img",{attrs:{src:e.phonesArr[e.id].image,id:"phoneImg"}}),n("h1",[e._v(e._s(e.phonesArr[e.id].model))]),n("div",{attrs:{id:"wrapper"}},e._l(Object.keys(e.phonesArr[e.id].description),function(i,s){return n("div",{key:s,staticClass:"flex"},[n("div",{staticClass:"specs"},[e._v(e._s(i)+" ")]),n("div",[e._v(e._s(e.phonesArr[e.id]["description"][i]))])])}),0),n("div",{staticClass:"likes"},[n("div",{staticClass:"likeDislike",on:{click:e.decrementLikes}},[n("img",{attrs:{src:s("fcd3")}})]),n("div",{attrs:{id:"count"}},[e._v(e._s(e.phonesArr[e.id].timesLiked))]),n("div",{staticClass:"likeDislike",on:{click:e.incrementLikes}},[n("img",{attrs:{src:s("8e44")}})])])]):e._e()},c=[],o=s("7ece"),a={name:"singlePhone",mixins:[o["a"]],data:function(){return{phonesArr:o["a"].phonesArr,id:this.$route.params.id-1}},methods:{decrementLikes:function(){o["a"].phonesArr[this.id].timesLiked--},incrementLikes:function(){o["a"].phonesArr[this.id].timesLiked++}},beforeMount:function(){this.id>this.phonesArr.length&&this.$router.push("/404")}},l=a,d=(s("78ba"),s("2877")),p=Object(d["a"])(l,r,c,!1,null,"1619218f",null),h=p.exports,u={name:"singlePhone",components:{SinglePhone:h}},m=u,f=Object(d["a"])(m,n,t,!1,null,null,null);i["default"]=f.exports},ce00:function(e,i,s){},fcd3:function(e,i,s){e.exports=s.p+"img/dislike.66f13b77.png"}}]);
//# sourceMappingURL=chunk-616c9644.4409184f.js.map