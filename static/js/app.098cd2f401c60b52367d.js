webpackJsonp([0],{"1uuo":function(t,e){},"9s8G":function(t,e){},DHZ3:function(t,e){},MlCW:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"signature__copy"}},[a("table",{staticStyle:{border:"0px",margin:"0px",padding:"0px 10px"},attrs:{cellpadding:"0",cellspacing:"0",width:"300"}},[a("tbody",[a("tr",[a("td",{staticStyle:{"vertical-align":"top"}},[a("center",[a("table",{attrs:{cellpadding:"0",cellspacing:"0",width:"300"}},[a("tbody",[a("tr",[a("td",[a("table",{attrs:{cellpadding:"0",cellspacing:"0",width:"300"}},[a("tbody",[a("tr",[a("td",{staticStyle:{"font-family":"Arial, Helvetica, sans-serif"}},[a("table",{attrs:{width:"300",cellpadding:"0",cellspacing:"0"}},[a("tbody",[a("tr",[a("td",[a("table",{staticStyle:{border:"none"},attrs:{width:"300",cellpadding:"0",cellspacing:"0"}},[a("tbody",[a("tr",[a("td",{staticStyle:{"padding-bottom":"15px"},attrs:{width:"300",height:"20"}},[a("a",{staticStyle:{display:"block"},attrs:{href:"https://theshoppers.com/"}},[a("img",{staticStyle:{"max-width":"100%",width:"208px",height:"auto",display:"block"},attrs:{src:"https://raw.githubusercontent.com/jlozovei/shoppers-signature/vue-webpack/assets/shoppers-logo.png",alt:""}})])])]),t._v(" "),a("tr",[a("td",{staticStyle:{color:"rgb(51, 51, 51)","padding-bottom":"2px"}},[a("span",{staticStyle:{"font-family":'"Roboto", Arial, Helvetica, sans-serif',"font-size":"22px","font-weight":"700","text-transform":"uppercase","letter-spacing":"-0.4px","line-height":"28px"}},[t._v(t._s(t.name))])])]),t._v(" "),a("tr",[a("td",{staticStyle:{color:"rgb(51, 51, 51)","padding-bottom":"5px"}},[a("span",{staticStyle:{"font-family":'"Roboto", Arial, Helvetica, sans-serif',"font-size":"18px","font-weight":"100","letter-spacing":"-0.4px"}},[t._v(t._s(t.position))])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"padding-top":"4px"}},[a("img",{staticStyle:{"max-width":"16px",width:"16px",height:"16px"},attrs:{src:"https://raw.githubusercontent.com/jlozovei/shoppers-signature/vue-webpack/assets/phone.png",alt:""}}),t._v(" "),a("span",{staticClass:"tel",staticStyle:{"padding-left":"8px","font-family":'"Roboto", Arial, Helvetica, sans-serif',"font-size":"14px","font-weight":"300","letter-spacing":"0.4px",color:"rgb(51, 51, 51)","vertical-align":"middle","text-decoration":"none"}},[a("a",{staticStyle:{"font-family":'"Roboto", Arial, Helvetica, sans-serif',"font-size":"16px","font-weight":"100","letter-spacing":"-0.4px",color:"rgb(51, 51, 51)","text-decoration":"none"},attrs:{href:t.linkPhone}},[t._v(t._s(t.phone))])])])])])])])])])])])])])])])])])])])],1)])])])])},staticRenderFns:[]},s={name:"Preview",props:["name","position","phone"],computed:{customName:function(){return this.name},customPosition:function(){return this.position},customPhone:function(){return this.phone},linkPhone:function(){return"tel:"+this.phone.replace(/\./g,"-")}},methods:{copySignature:function(t){var e=document.createRange();e.selectNode(document.getElementById("signature__copy")),window.getSelection().addRange(e),document.execCommand("copy"),document.execCommand("copy")&&(document.getElementById("snackbar").classList.add("snackbar--active"),setTimeout(function(){document.getElementById("snackbar").classList.remove("snackbar--active"),window.getSelection().removeAllRanges()},4200))}},components:{Signature:a("VU/8")({name:"Signature",props:["name","position","phone","linkPhone"]},o,!1,null,null,null).exports}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"preview card"},[a("div",{staticClass:"preview__result"},[a("Signature",{attrs:{name:t.customName,position:t.customPosition,phone:t.customPhone,linkPhone:t.linkPhone}})],1),t._v(" "),a("div",{staticClass:"preview__footer"},[a("button",{staticClass:"button button--blue preview__copy",on:{click:t.copySignature}},[t._v("Copy to clipboard")])])])},staticRenderFns:[]};var r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form card"},[a("div",{staticClass:"form__row"},[a("label",{staticClass:"form__label",attrs:{for:"name"}},[t._v("Name")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.customName,expression:"customName"}],staticClass:"form__input--text",attrs:{type:"text",placeholder:"What is your name?",id:"name",name:"name"},domProps:{value:t.customName},on:{keyup:t.updateName,input:function(e){e.target.composing||(t.customName=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form__row"},[a("label",{staticClass:"form__label",attrs:{for:"position"}},[t._v("Position")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.customPosition,expression:"customPosition"}],staticClass:"form__input--text",attrs:{type:"text",placeholder:"What is your position?",id:"position",name:"position"},domProps:{value:t.customPosition},on:{keyup:t.updatePosition,input:function(e){e.target.composing||(t.customPosition=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form__row"},[a("label",{staticClass:"form__label",attrs:{for:"phone"}},[t._v("Phone number")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.customPhone,expression:"customPhone"}],staticClass:"form__input--text",attrs:{type:"text",placeholder:"Eg. +55 41 3333.3333",id:"phone",name:"phone"},domProps:{value:t.customPhone},on:{keyup:t.updatePhone,input:function(e){e.target.composing||(t.customPhone=e.target.value)}}})])])},staticRenderFns:[]};var c={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"snackbar",attrs:{id:"snackbar"}},[this._v("Great! Now paste it on your email client. 💥")])},staticRenderFns:[]};var l="Mylena Gama",p="Marketing Coordinator",u="+55 41 99672.5527",m={name:"App",data:function(){return{name:l,position:p,phone:u}},methods:{updateData:function(t){this.name=""!=t.name?t.name:l,this.position=""!=t.position?t.position:p,this.phone=""!=t.phone?t.phone:u}},components:{Preview:a("VU/8")(s,i,!1,function(t){a("t2fl")},"data-v-2d2439c8",null).exports,Form:a("VU/8")({name:"Form",props:["name","position","phone"],data:function(){return{customName:this.name,customPosition:this.position,customPhone:this.phone}},methods:{updateName:function(t){this.$emit("updateData",{name:t.target.value,position:this.customPosition,phone:this.customPhone})},updatePosition:function(t){this.$emit("updateData",{name:this.customName,position:t.target.value,phone:this.customPhone})},updatePhone:function(t){this.$emit("updateData",{name:this.customName,position:this.customPosition,phone:t.target.value})}}},r,!1,function(t){a("DHZ3")},"data-v-7a8fa682",null).exports,Snackbar:a("VU/8")({name:"Snackbar"},c,!1,function(t){a("MlCW")},"data-v-0a87288c",null).exports}},d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container",attrs:{id:"app"}},[a("Preview",{attrs:{name:t.name,position:t.position,phone:t.phone}}),t._v(" "),a("Form",{attrs:{name:t.name,position:t.position,phone:t.phone},on:{updateData:t.updateData}}),t._v(" "),a("Snackbar")],1)},staticRenderFns:[]};var h=a("VU/8")(m,d,!1,function(t){a("9s8G")},null,null).exports,v=a("/ocq"),_={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("h1",[t._v(t._s(t.msg))]),t._v(" "),a("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),a("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),a("br"),t._v(" "),a("li",[a("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[t._v("\n        vue-router\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[t._v("\n        vuex\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[t._v("\n        vue-loader\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[t._v("\n        awesome-vue\n      ")])])])}]};var f=a("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},_,!1,function(t){a("1uuo")},"data-v-d8ec41bc",null).exports;n.a.use(v.a);var g=new v.a({routes:[{path:"/",name:"HelloWorld",component:f}]});n.a.config.productionTip=!1,new n.a({el:"#app",router:g,components:{App:h},template:"<App/>"})},t2fl:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.098cd2f401c60b52367d.js.map