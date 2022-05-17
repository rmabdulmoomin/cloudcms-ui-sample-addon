define(["ui","alpaca","ratchet/dynamic/empty","content-helpers","jquery","app/gadgets/project/document/view/document-view-properties"],(function(e,t,r,n,o,i){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=3)}([function(t,r){t.exports=e},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=function(e,t){var r=e[1]||"",n=e[3];if(!n)return r;if(t&&"function"==typeof btoa){var o=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(n),i=n.sources.map((function(e){return"/*# sourceURL="+n.sourceRoot+e+" */"}));return[r].concat(i).concat([o]).join("\n")}return[r].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r})).join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(n[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&n[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="("+a[2]+") and ("+r+")"),t.push(a))}},t}},function(e,r){e.exports=t},function(e,t,r){e.exports=r(4)},function(e,t,r){var n;void 0===(n=function(e){r(5),r(9),r(12),r(14),r(16),r(17),r(19)}.call(t,r,t,e))||(e.exports=n)},function(e,t,r){var n;void 0===(n=function(e,t,n){r(6);var o=r(7),i=r(8),a=r(0);return a.registerGadget("sample-products-list",i.extend({TEMPLATE:o,setup:function(){this.get("/projects/{projectId}/products",this.index)},prepareModel:function(e,t,r){var n=this.observable("project").get(),o=this.observable("branch").get();this.base(e,t,(function(){o.queryNodes({_type:"catalog:product"}).then((function(){t.products=this.asArray();for(var e=0;e<t.products.length;e++){var o=t.products[e];o.imageUrl256="/preview/repository/"+o.getRepositoryId()+"/branch/"+o.getBranchId()+"/node/"+o.getId()+"/default?size=256&name=preview256&force=true",o.imageUrl128="/preview/repository/"+o.getRepositoryId()+"/branch/"+o.getBranchId()+"/node/"+o.getId()+"/default?size=128&name=preview128&force=true",o.browseUrl="/#/projects/"+n._doc+"/documents/"+o._doc}r()}))}))},afterSwap:function(e,t,r,n){this.base(e,t,r,(function(){$(e).find(".media-popup").click((function(e){e.preventDefault();var r=$(this).attr("data-media-index"),n=t.products[r];a.showPopupModal({title:"Viewing: "+n.title,body:"<div style='text-align:center'><img src='"+n.imageUrl256+"'></div>"})})),n()}))}}))}.call(t,r,t,e))||(e.exports=n)},function(e,t,r){(e.exports=r(1)(!1)).push([e.i,"",""])},function(e,t){e.exports='<div>\r\n    {{#each products}}\r\n    <div class="media">\r\n        <div class="media-left">\r\n            <a href="#" class="media-popup" data-media-index="{{@index}}">\r\n                <img class="media-object" src="{{imageUrl128}}" alt="{{title}}">\r\n            </a>\r\n        </div>\r\n        <div class="media-body">\r\n            <h4 class="media-heading">\r\n                <a href="{{browseUrl}}">{{title}}</a>\r\n            </h4>\r\n            {{description}}\r\n        </div>\r\n    </div>\r\n    {{/each}}\r\n</div>\r\n'},function(e,t){e.exports=r},function(e,t,r){var n;void 0===(n=function(e,t,n){var o=r(10);r(11);var i=r(0);return i.registerDashlet("sample-random-product-dashlet",i.AbstractDashlet.extend({TEMPLATE:o,configureDefault:function(){this.base(),this.config({message:"And your product is..."})},prepareModel:function(e,t,r){var n=this,o=this.observable("branch").get();this.base(e,t,(function(){t.message=n.config().message,o.queryNodes({_type:"catalog:product"}).then((function(){var e=this.asArray(),n=t.product=e[Math.floor(Math.random()*e.length)];n.imageUrl="/preview/repository/"+n.getRepositoryId()+"/branch/"+n.getBranchId()+"/node/"+n.getId()+"/default?size=256&name=preview256",r()}))}))},afterSwap:function(e,t,r,n){this.base(e,t,r,(function(){n()}))},isConfigurable:function(){return!0},handleConfiguration:function(e,t,r){var n={};n.data=t,n.schema={type:"object",properties:{title:{type:"string",title:"Title"},config:{type:"object",title:"Configuration",properties:{message:{type:"string",title:"Message"}}}}},n.options={},n.observableHolder=Ratchet,i.configureDashlet(n,(function(e,t){r(e,t)}))}}))}.call(t,r,t,e))||(e.exports=n)},function(e,t){e.exports='<div>\r\n\r\n    <div style="text-align:center">\r\n        <p>{{message}}</p>\r\n        <p>{{product.title}}</p>\r\n\r\n        <a href="/#/projects/{{project._doc}}/documents/{{product._doc}}">\r\n            <img src="{{product.imageUrl}}" alt="{{product.title}}">\r\n        </a>\r\n\r\n    </div>\r\n\r\n</div>\r\n'},function(e,t,r){(e.exports=r(1)(!1)).push([e.i,".dashlet.sample-dashlet .dashlet-body>div{padding:10px}",""])},function(e,t,r){var n;void 0===(n=function(e,t,n){var o=r(0),i=r(13);return o.registerAction("create-sample-space",o.AbstractUIAction.extend({defaultConfiguration:function(){var e=this.base();return e.title="Create Sample Space",e.iconClass="fa fa-plus",e},prepareAction:function(e,t,r){e.currentPath=e.observable("path").get(),r()},executeAction:function(e,t,r){var n=this;o.renderForm(e,{data:{title:"My Sample Space",description:"Description of my sample space"},schema:{type:"object",properties:{title:{type:"string",required:!0},description:{type:"string"}}},options:{fields:{title:{type:"text",label:"Title"},description:{type:"textarea",label:"Description"}},focus:"title"}},(function(r){o.showModal({title:t.title,form:r,buttons:[{id:"create",title:"Create",handler:function(t){o.showWaitModal("Creating the sample space...",(function(){n.createHandler(e,r.getValue(),(function(){o.hideWaitModal()}))}))}}],bindFormEnterKeyToButton:"create",cancel:!0},(function(e){}))}))},createHandler:function(e,t,r){i.addContent(e,[{type:"folder",properties:t,parentFolderPath:e.currentPath},{type:"folder",properties:{title:"Files"},parentFolderPath:e.currentPath+"/"+t.title},{type:"file",properties:{title:"helloworld.txt"},parentFolderPath:e.currentPath+"/"+t.title+"/Files",text:"Hello World!"}],(function(e){r()}))}}))}.call(t,r,t,e))||(e.exports=n)},function(e,t){e.exports=n},function(e,t,r){var n;void 0===(n=function(e,t,n){var o=r(0),i=r(2),a=r(15);return o.registerField("sample-city-picker",i.Fields.SelectField.extend({setup:function(){this.base(),this.options.dataSource=function(e){a.ajax({method:"GET",url:"https://raw.githubusercontent.com/gitana/cloudcms-ui-sample-addon/master/data/cities.json",dataType:"json"}).done((function(t){e(t.cities)}))}}}))}.call(t,r,t,e))||(e.exports=n)},function(e,t){e.exports=o},function(e,t,r){var n;void 0===(n=function(e,t,n){var o=r(0),i=r(2);return o.registerField("sample-content-picker",i.Fields.SelectField.extend({setup:function(){this.base(),this.options.contentType||(this.options.contentType="catalog:product"),this.options.dataSource={connector:!0,config:{query:{_type:this.options.contentType},mappings:{value:"_doc",text:"title"}}}}}))}.call(t,r,t,e))||(e.exports=n)},function(e,t,r){var n;void 0===(n=function(e,t,n){var o=r(18);return r(0).registerGadget("sample-product-document-properties",o.extend({prepareModel:function(e,t,r){var n=this.observable("document").get();this.base(e,t,(function(){"catalog:product"===n.getTypeQName()&&"sku"===propertyName&&t.properties.push({key:"wickedgoodcupcakes",title:"Wicked Good Cupcakes",value:"https://www.wickedgoodcupcakes.com",link:"https://www.wickedgoodcupcakes.com"}),r()}))}}))}.call(t,r,t,e))||(e.exports=n)},function(e,t){e.exports=i},function(e,t,r){(e.exports=r(1)(!1)).push([e.i,"",""])}])}));