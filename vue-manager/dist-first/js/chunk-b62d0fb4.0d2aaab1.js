(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b62d0fb4"],{"1cbe":function(e,t,o){"use strict";o("b6ef")},4274:function(e,t,o){var r=o("a7c6"),n=o("3050"),a=o("78e0"),l=o("b722"),i=r("".replace),s="["+l+"]",c=RegExp("^"+s+s+"*"),u=RegExp(s+s+"*$"),f=function(e){return function(t){var o=a(n(t));return 1&e&&(o=i(o,c,"")),2&e&&(o=i(o,u,"")),o}};e.exports={start:f(1),end:f(2),trim:f(3)}},5467:function(e,t,o){"use strict";var r=o("9b41"),n=o("6904"),a=o("a7c6"),l=o("0994"),i=o("e93c"),s=o("5ad9"),c=o("42df"),u=o("aac7"),f=o("317a"),p=o("a22f"),m=o("a534"),d=o("6555").f,b=o("c672").f,h=o("ba02").f,g=o("91c0"),y=o("4274").trim,v="Number",w=n[v],x=w.prototype,_=n.TypeError,k=a("".slice),N=a("".charCodeAt),F=function(e){var t=p(e,"number");return"bigint"==typeof t?t:L(t)},L=function(e){var t,o,r,n,a,l,i,s,c=p(e,"number");if(f(c))throw _("Cannot convert a Symbol value to a number");if("string"==typeof c&&c.length>2)if(c=y(c),t=N(c,0),43===t||45===t){if(o=N(c,2),88===o||120===o)return NaN}else if(48===t){switch(N(c,1)){case 66:case 98:r=2,n=49;break;case 79:case 111:r=8,n=55;break;default:return+c}for(a=k(c,2),l=a.length,i=0;i<l;i++)if(s=N(a,i),s<48||s>n)return NaN;return parseInt(a,r)}return+c};if(l(v,!w(" 0o1")||!w("0b1")||w("+0x1"))){for(var S,E=function(e){var t=arguments.length<1?0:w(F(e)),o=this;return u(x,o)&&m((function(){g(o)}))?c(Object(t),o,E):t},I=r?d(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),T=0;I.length>T;T++)s(w,S=I[T])&&!s(E,S)&&h(E,S,b(w,S));E.prototype=x,x.constructor=E,i(n,v,E)}},"6fc2":function(e,t,o){"use strict";o.r(t);var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("el-dialog",{attrs:{title:"add"===e.operateType?"新增":"更新",visible:e.isShow,"append-to-body":""},on:{"update:visible":function(t){e.isShow=t}}},[o("common-form",{ref:"form",attrs:{"form-label":e.operateFormLabel,form:e.operateForm,inline:!0}}),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(t){e.isShow=!1}}},[e._v("取 消")]),o("el-button",{attrs:{type:"primary"},on:{click:e.confirm}},[e._v("确 定")])],1)],1),o("div",{staticClass:"manage-header"},[o("el-button",{attrs:{type:"primary"},on:{click:e.addUser}},[e._v("新增")]),o("common-form",{ref:"form2",attrs:{"form-label":e.formLabel,form:e.searchForm,inline:!0}},[o("el-button",{attrs:{type:"primary"},on:{click:e.getList}},[e._v("搜索")])],1)],1),o("common-table",{attrs:{propspage:2},on:{edit:e.editUser}})],1)},n=[],a=o("291b"),l=(o("e186"),function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px",inline:e.inline}},[e._l(e.formLabel,(function(t){return o("el-form-item",{key:t.label,attrs:{label:t.label}},["input"===t.type?o("el-input",{attrs:{placeholder:"请输入"+t.label},model:{value:e.form[t.model],callback:function(o){e.$set(e.form,t.model,o)},expression:"form[item.model]"}}):e._e(),"switch"===t.type?o("el-switch",{model:{value:e.form[t.model],callback:function(o){e.$set(e.form,t.model,o)},expression:"form[item.model]"}}):e._e(),"date"===t.type?o("el-date-picker",{staticStyle:{width:"100%"},attrs:{"value-format":"yyyy-MM-dd",type:"date",placeholder:"选择日期"},model:{value:e.form[t.model],callback:function(o){e.$set(e.form,t.model,o)},expression:"form[item.model]"}}):e._e(),"select"===t.type?o("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form[t.model],callback:function(o){e.$set(e.form,t.model,o)},expression:"form[item.model]"}},e._l(t.opts,(function(e){return o("el-option",{key:e.label,attrs:{label:e.label,value:e.value}})})),1):e._e()],1)})),o("el-form-item",[e._t("default")],2)],2)}),i=[],s={props:{formLabel:Array,form:Object,inline:Boolean},data:function(){return{}},methods:{onSubmit:function(){console.log("form",this.form)}}},c=s,u=o("cba8"),f=Object(u["a"])(c,l,i,!1,null,"2cb9c0f2",null),p=f.exports,m=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"common-table"},[o("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData}},[o("el-table-column",{attrs:{prop:"name",label:"姓名",width:"180"}}),o("el-table-column",{attrs:{prop:"age",label:"年龄",width:"180"}}),o("el-table-column",{attrs:{prop:"sexLabel",label:"性别",width:"180"}}),o("el-table-column",{attrs:{prop:"birth",label:"出生日期",width:"180"}}),o("el-table-column",{attrs:{prop:"addr",label:"地址"}}),o("el-table-column",{attrs:{prop:"operate",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-button",{on:{click:function(o){return e.editor(t.row)}}},[e._v("编辑")]),o("el-button",{attrs:{type:"danger"},on:{click:function(o){return e.del(t.row)}}},[e._v("删除")])]}}])})],1),o("el-pagination",{staticClass:"pager",attrs:{layout:"prev, pager, next",total:e.config.total,"current-page":e.config.page,"page-size":20},on:{"update:currentPage":function(t){return e.$set(e.config,"page",t)},"update:current-page":function(t){return e.$set(e.config,"page",t)},"current-change":e.handleCurrentChange}})],1)},d=[],b=(o("5467"),o("1019"),o("4734")),h={props:{propspage:{type:Number,required:!0}},data:function(){return{tableData:[],config:{page:1,total:200},isOpen:!0}},methods:{getList:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.next=2,Object(b["c"])({page:e}).then((function(e){var o=e.data;console.log("getList",o),t.tableData=o.list,t.tableData=o.list.map((function(e){return e.sexLabel=0===e.sex?"女":"男",e})),t.config.total=o.count}));case 2:case"end":return o.stop()}}),o)})))()},handleCurrentChange:function(e){return this.getList(e),this.config.page=e,e},del:function(e){var t=this;this.$confirm("此操作将永久删除此组件，是否继续？","提示",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}).then((function(){var o=e.id;console.log("--id--",o),console.log("--row--",e),Object(b["a"])({id:o}).then((function(e){console.log("res",e),t.$message({type:"success",message:"删除成功"}),t.getList(t.config.page)}))}))},editor:function(e){this.$emit("edit",e)}},created:function(){this.getList(this.config.page),console.log("--props--",this.$options.propsData)}},g=h,y=(o("1cbe"),Object(u["a"])(g,m,d,!1,null,"c71b9392",null)),v=y.exports;function w(e,t){t=t||200;var o=null;return function(){for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];var l=this;o&&clearTimeout(o),o=setTimeout((function(){console.log("time---"),o=null,e.apply(l,n)}),t)}}var x={data:function(){return{operateType:"add",isShow:!1,operateFormLabel:[{model:"name",label:"姓名",type:"input"},{model:"age",label:"年龄",type:"input"},{model:"sex",label:"性别",type:"select",opts:[{label:"男",value:1},{label:"女",value:0}]},{model:"birth",label:"出生日期",type:"date"},{model:"addr",label:"地址",type:"input"}],operateForm:{name:"",addr:"",age:"",birth:"",sex:""},formLabel:[{model:"keyword",label:"",type:"input"}],searchForm:{keyword:""}}},methods:{confirm:w(Object(a["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(console.log("弹框确认"),console.log("operateForm",this.operateForm),"edit"!==this.operateType){e.next=6;break}this.$http.post("/user/edit",this.operateForm).then((function(e){console.log(e),t.isShow=!1})),e.next=9;break;case 6:if("add"!==this.operateType){e.next=9;break}return e.next=9,this.$http.post("/user/add",this.operateForm).then((function(e){console.log(e),t.isShow=!1}));case 9:return e.next=11,this.$children[3].getList(1);case 11:case"end":return e.stop()}}),e,this)}))),500),editUser:function(e){this.isShow=!0,this.operateType="edit",this.operateForm=e},addUser:function(){this.isShow=!0,this.operateType="add",this.operateForm={}},getList:function(){console.log("搜索")}},mounted:function(){},components:{CommonForm:p,CommonTable:v}},_=x,k=(o("9b6c"),Object(u["a"])(_,r,n,!1,null,"424f0058",null));t["default"]=k.exports},"7f23":function(e,t,o){},"91c0":function(e,t,o){var r=o("a7c6");e.exports=r(1..valueOf)},"9b6c":function(e,t,o){"use strict";o("7f23")},b6ef:function(e,t,o){},b722:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-b62d0fb4.0d2aaab1.js.map