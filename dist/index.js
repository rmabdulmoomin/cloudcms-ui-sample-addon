define(["ui","alpaca","jquery","ratchet/dynamic/empty","content-helpers","oneteam","ratchet/ratchet","app/gadgets/project/document/view/document-view-properties"],(function(e,t,n,i,r,o,a,s){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var r=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(i),o=i.sources.map((function(e){return"/*# sourceURL="+i.sourceRoot+e+" */"}));return[n].concat(o).concat([r]).join("\n")}return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(i[o]=!0)}for(r=0;r<e.length;r++){var a=e[r];"number"==typeof a[0]&&i[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t){e.exports=n},function(e,t,n){e.exports=n(5)},function(e,t,n){var i;void 0===(i=function(e){n(6),n(10),n(13),n(15),n(16),n(17),n(18),n(20),n(22),n(23),n(25),n(27)}.call(t,n,t,e))||(e.exports=i)},function(e,t,n){var i;void 0===(i=function(e,t,i){n(7);var r=n(8),o=n(9),a=n(0);return a.registerGadget("sample-products-list",o.extend({TEMPLATE:r,setup:function(){this.get("/projects/{projectId}/products",this.index)},prepareModel:function(e,t,n){var i=this.observable("project").get(),r=this.observable("branch").get();this.base(e,t,(function(){r.queryNodes({_type:"catalog:product"}).then((function(){t.products=this.asArray();for(var e=0;e<t.products.length;e++){var r=t.products[e];r.imageUrl256="/preview/repository/"+r.getRepositoryId()+"/branch/"+r.getBranchId()+"/node/"+r.getId()+"/default?size=256&name=preview256&force=true",r.imageUrl128="/preview/repository/"+r.getRepositoryId()+"/branch/"+r.getBranchId()+"/node/"+r.getId()+"/default?size=128&name=preview128&force=true",r.browseUrl="/#/projects/"+i._doc+"/documents/"+r._doc}n()}))}))},afterSwap:function(e,t,n,i){this.base(e,t,n,(function(){$(e).find(".media-popup").click((function(e){e.preventDefault();var n=$(this).attr("data-media-index"),i=t.products[n];a.showPopupModal({title:"Viewing: "+i.title,body:"<div style='text-align:center'><img src='"+i.imageUrl256+"'></div>"})})),i()}))}}))}.call(t,n,t,e))||(e.exports=i)},function(e,t,n){(e.exports=n(2)(!1)).push([e.i,"",""])},function(e,t){e.exports='<div>\r\n    {{#each products}}\r\n    <div class="media">\r\n        <div class="media-left">\r\n            <a href="#" class="media-popup" data-media-index="{{@index}}">\r\n                <img class="media-object" src="{{imageUrl128}}" alt="{{title}}">\r\n            </a>\r\n        </div>\r\n        <div class="media-body">\r\n            <h4 class="media-heading">\r\n                <a href="{{browseUrl}}">{{title}}</a>\r\n            </h4>\r\n            {{description}}\r\n        </div>\r\n    </div>\r\n    {{/each}}\r\n</div>\r\n'},function(e,t){e.exports=i},function(e,t,n){var i;void 0===(i=function(e,t,i){var r=n(11);n(12);var o=n(0);return o.registerDashlet("sample-random-product-dashlet",o.AbstractDashlet.extend({TEMPLATE:r,configureDefault:function(){this.base(),this.config({message:"And your product is..."})},prepareModel:function(e,t,n){var i=this,r=this.observable("branch").get();this.base(e,t,(function(){t.message=i.config().message,r.queryNodes({_type:"catalog:product"}).then((function(){var e=this.asArray(),i=t.product=e[Math.floor(Math.random()*e.length)];i.imageUrl="/preview/repository/"+i.getRepositoryId()+"/branch/"+i.getBranchId()+"/node/"+i.getId()+"/default?size=256&name=preview256",n()}))}))},afterSwap:function(e,t,n,i){this.base(e,t,n,(function(){i()}))},isConfigurable:function(){return!0},handleConfiguration:function(e,t,n){var i={};i.data=t,i.schema={type:"object",properties:{title:{type:"string",title:"Title"},config:{type:"object",title:"Configuration",properties:{message:{type:"string",title:"Message"}}}}},i.options={},i.observableHolder=Ratchet,o.configureDashlet(i,(function(e,t){n(e,t)}))}}))}.call(t,n,t,e))||(e.exports=i)},function(e,t){e.exports='<div>\r\n\r\n    <div style="text-align:center">\r\n        <p>{{message}}</p>\r\n        <p>{{product.title}}</p>\r\n\r\n        <a href="/#/projects/{{project._doc}}/documents/{{product._doc}}">\r\n            <img src="{{product.imageUrl}}" alt="{{product.title}}">\r\n        </a>\r\n\r\n    </div>\r\n\r\n</div>\r\n'},function(e,t,n){(e.exports=n(2)(!1)).push([e.i,".dashlet.sample-dashlet .dashlet-body>div{padding:10px}",""])},function(e,t,n){var i;void 0===(i=function(e,t,i){var r=n(0),o=n(14);return r.registerAction("create-sample-space",r.AbstractUIAction.extend({defaultConfiguration:function(){var e=this.base();return e.title="Create Sample Space",e.iconClass="fa fa-plus",e},prepareAction:function(e,t,n){e.currentPath=e.observable("path").get(),n()},executeAction:function(e,t,n){var i=this;r.renderForm(e,{data:{title:"My Sample Space",description:"Description of my sample space"},schema:{type:"object",properties:{title:{type:"string",required:!0},description:{type:"string"}}},options:{fields:{title:{type:"text",label:"Title"},description:{type:"textarea",label:"Description"}},focus:"title"}},(function(n){r.showModal({title:t.title,form:n,buttons:[{id:"create",title:"Create",handler:function(t){r.showWaitModal("Creating the sample space...",(function(){i.createHandler(e,n.getValue(),(function(){r.hideWaitModal()}))}))}}],bindFormEnterKeyToButton:"create",cancel:!0},(function(e){}))}))},createHandler:function(e,t,n){o.addContent(e,[{type:"folder",properties:t,parentFolderPath:e.currentPath},{type:"folder",properties:{title:"Files"},parentFolderPath:e.currentPath+"/"+t.title},{type:"file",properties:{title:"helloworld.txt"},parentFolderPath:e.currentPath+"/"+t.title+"/Files",text:"Hello World!"}],(function(e){n()}))}}))}.call(t,n,t,e))||(e.exports=i)},function(e,t){e.exports=r},function(e,t,n){var i;void 0===(i=function(e,t,i){var r=n(0),o=n(1),a=n(3);return r.registerField("sample-city-picker",o.Fields.SelectField.extend({setup:function(){this.base(),this.options.dataSource=function(e){a.ajax({method:"GET",url:"https://raw.githubusercontent.com/gitana/cloudcms-ui-sample-addon/master/data/cities.json",dataType:"json"}).done((function(t){e(t.cities)}))}}}))}.call(t,n,t,e))||(e.exports=i)},function(e,t,n){var i;void 0===(i=function(e,t,i){var r=n(0),o=n(1);return r.registerField("sample-content-picker",o.Fields.SelectField.extend({setup:function(){this.base(),this.options.contentType||(this.options.contentType="catalog:product"),this.options.dataSource={connector:!0,config:{query:{_type:this.options.contentType},mappings:{value:"_doc",text:"title"}}}}}))}.call(t,n,t,e))||(e.exports=i)},function(e,t,n){var i;void 0===(i=function(e,t,i){var r=n(1);r.Fields.Custom1Field=r.Fields.SelectField.extend({getFieldType:function(){return"custom-oup-sp-select"},setValue:function(e){this.base(e),$("#warning-message").length||$(this.getFieldEl()).append("<span id='warning-message' style='color:red'></span>"),this.getValue()||this.setDefault(),"Yes"==this.getValue()?($("#warning-message").empty(),$("#warning-message").html("Warning: Please consult with your key user. Pages set to Yes will not be indexed and will not appear in Google or other search engines.")):$("#warning-message").empty()},afterRenderControl:function(e,t){var n=this;this.base(e,(function(){n.getValue()&&"Yes"==n.getValue()?($(n.getFieldEl()).remove("#warning-message"),$(n.getFieldEl()).append("<span id='warning-message' style='color:red'>Warning: Please consult with your key user. Pages set to Yes will not be indexed and will not appear in Google or other search engines.</span>")):$(n.getFieldEl()).append("<span id='warning-message' style='color:red'></span>"),t()}))}}),r.registerFieldClass("custom-oup-sp-select",r.Fields.Custom1Field)}.call(t,n,t,e))||(e.exports=i)},function(e,t,n){var i;void 0===(i=function(e,t,i){var r=n(3),o=n(1);n(19),r.alpaca.Fields.CustomField=o.Fields.CheckBoxField.extend({getFieldType:function(){return"custom-check-box"},onChange:function(e){this.base(e),this.getFieldEl()||r(this.getFieldEl()).append("<span id='warning-message-checkbox' style='color:red'></span>"),this.getValue()||this.setDefault(),!0===this.getValue()?(r("#warning-message-checkbox").empty(),r("#warning-message-checkbox").html("Note, this option is not permitted for standard Journals secondary pages.")):r("#warning-message-checkbox").empty()},afterRenderControl:function(e,t){var n=this;this.base(e,(function(){n.getValue()&&1==n.getValue()?(r(n.getFieldEl()).remove("#warning-message-checkbox"),r(n.getFieldEl()).append("<span id='warning-message-checkbox' style='color:red'>Note, this option is not permitted for standard Journals secondary pages.</span>")):r(n.getFieldEl()).append("<span id='warning-message-checkbox' style='color:red'></span>"),t()}))}}),o.registerFieldClass("custom-check-box",o.Fields.CustomField)}.call(t,n,t,e))||(e.exports=i)},function(e,t){e.exports=o},function(e,t,n){(function(e){var i;void 0===(i=function(e,t,n){var i=n.uri.match(/^.+(_modules[^\/]+)\/.*/)[1],r="../../../"+i+"/oup-ui/resources/contents.css",o="../../../"+i+"/oup-ui/resources/ckeditorCstm.css";window.CKEDITOR.config.contentsCss=["https://fonts.googleapis.com/css?family=Merriweather:300,400,400italic,700,700italic|Source+Sans+Pro:400,400italic,700,700italic",r,o]}.call(t,n,t,e))||(e.exports=i)}).call(this,n(21)(e))},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t,n){var i;void 0===(i=function(e,t,i){var r=n(1);r.Fields.Custom1Field=r.Fields.SelectField.extend({getFieldType:function(){return"custom-oup-type-select"},setValue:function(e){this.base(e),$("#media-kit-div").length||$(this.getFieldEl()).append("<div id='media-kit-div'><br/><legend>Media Kit Top Region</legend></div>"),this.getValue()||this.setDefault(),console.log("show -value is working"),"Media Kit"==this.getValue()?$("#media-kit-div").show():$("#media-kit-div").hide()},afterRenderControl:function(e,t){var n=this;this.base(e,(function(){console.log(" after render controll call *********** >>>",n.getValue()),n.getValue()&&"Media Kit"==n.getValue()?$(n.getFieldEl()).append("<div id='media-kit-div'><br/><legend>Media Kit Top Region</legend></div>"):$("#media-kit-div").hide(),t()}))}}),r.registerFieldClass("custom-oup-type-select",r.Fields.Custom1Field)}.call(t,n,t,e))||(e.exports=i)},function(e,t,n){var i;void 0===(i=function(e,t,i){var r=n(24),o=n(1),a=o.Fields.FilePickerField;o.registerFieldClass("oup-file-picker",a.extend({setup:function(){this.base(),this.options.picker&&this.options.picker.upload&&(this.options.picker.upload=!1)},initHandlebars:function(e,t,n){var i=this;this.base(e,t,(function(){var o=i.observable("document").get(),a=o.getRepositoryId(),s=o.getBranchId(),c=o.getId();$.ajax({type:"POST",url:"/proxy/repositories/"+a+"/branches/"+s+"/nodes/"+c+"/ancestorbytype?type=type:journalsitefolder0&paths=true",headers:{"X-CSRF-TOKEN":r.getCsrfToken()}}).always((function(i){i&&i._paths&&(t.nearestJournalFolderPath=i._paths["821c40ab613d9b5bcbbc656b62229301"]),n(e,t)}))}))}}))}.call(t,n,t,e))||(e.exports=i)},function(e,t){e.exports=a},function(e,t,n){var i;void 0===(i=function(e,t,i){var r=n(26);return n(0).registerGadget("sample-product-document-properties",r.extend({prepareModel:function(e,t,n){var i=this.observable("document").get();this.base(e,t,(function(){"catalog:product"===i.getTypeQName()&&"sku"===propertyName&&t.properties.push({key:"wickedgoodcupcakes",title:"Wicked Good Cupcakes",value:"https://www.wickedgoodcupcakes.com",link:"https://www.wickedgoodcupcakes.com"}),n()}))}}))}.call(t,n,t,e))||(e.exports=i)},function(e,t){e.exports=s},function(e,t,n){(e.exports=n(2)(!1)).push([e.i,"",""])}])}));