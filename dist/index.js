define(["alpaca","ui","jquery","oneteam","ratchet/dynamic/empty","content-helpers","ratchet/ratchet","app/gadgets/project/document/view/document-view-properties"],(function(e,t,n,o,i,r,a,s){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t,n){var o;void 0===(o=function(e,t,n){var o=window.CKEDITOR;return{registerPlugin:function(e,t){var n="../../../"+t+"/sample/plugins/ckeditor/wordcount/";o.plugins.addExternal(e,n,"plugin.js"),o.config.extraPlugins.length>0&&(o.config.extraPlugins+=","),o.config.extraPlugins+=e},registerPlugin1:function(e,t){var n="../../../"+t+"/sample/plugins/ckeditor/a11ychecker/";o.plugins.addExternal(e,n,"plugin.js"),o.config.extraPlugins.length>0&&(o.config.extraPlugins+=","),o.config.extraPlugins+=e},registerPlugin2:function(e,t){var n="../../../"+t+"/sample/plugins/ckeditor/balloonpanel/";o.plugins.addExternal(e,n,"plugin.js"),o.config.extraPlugins.length>0&&(o.config.extraPlugins+=","),o.config.extraPlugins+=e},registerPlugin3:function(e,t){var n="../../../"+t+"/sample/plugins/ckeditor/orcidIcon/";o.plugins.addExternal(e,n,"plugin.js"),o.config.extraPlugins.length>0&&(o.config.extraPlugins+=","),o.config.extraPlugins+=e},registerPlugin4:function(e,t){var n="../../../"+t+"/sample/plugins/ckeditor/expandablelist/";o.plugins.addExternal(e,n,"plugin.js"),o.config.extraPlugins.length>0&&(o.config.extraPlugins+=","),o.config.extraPlugins+=e}}}.call(t,n,t,e))||(e.exports=o)},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var i=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(o),r=o.sources.map((function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"}));return[n].concat(r).concat([i]).join("\n")}return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(o[r]=!0)}for(i=0;i<e.length;i++){var a=e[i];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t){e.exports=n},function(e,t){e.exports=o},function(e,t,n){e.exports=n(8)},function(e,t,n){var o;void 0===(o=function(e){n(9),n(13),n(16),n(18),n(19),n(20),n(21),n(22),n(23),n(24),n(26),n(27),n(28),n(29),n(30),n(31),n(32),n(34)}.call(t,n,t,e))||(e.exports=o)},function(e,t,n){var o;void 0===(o=function(e,t,o){n(10);var i=n(11),r=n(12),a=n(1);return a.registerGadget("sample-products-list",r.extend({TEMPLATE:i,setup:function(){this.get("/projects/{projectId}/products",this.index)},prepareModel:function(e,t,n){var o=this.observable("project").get(),i=this.observable("branch").get();this.base(e,t,(function(){i.queryNodes({_type:"catalog:product"}).then((function(){t.products=this.asArray();for(var e=0;e<t.products.length;e++){var i=t.products[e];i.imageUrl256="/preview/repository/"+i.getRepositoryId()+"/branch/"+i.getBranchId()+"/node/"+i.getId()+"/default?size=256&name=preview256&force=true",i.imageUrl128="/preview/repository/"+i.getRepositoryId()+"/branch/"+i.getBranchId()+"/node/"+i.getId()+"/default?size=128&name=preview128&force=true",i.browseUrl="/#/projects/"+o._doc+"/documents/"+i._doc}n()}))}))},afterSwap:function(e,t,n,o){this.base(e,t,n,(function(){$(e).find(".media-popup").click((function(e){e.preventDefault();var n=$(this).attr("data-media-index"),o=t.products[n];a.showPopupModal({title:"Viewing: "+o.title,body:"<div style='text-align:center'><img src='"+o.imageUrl256+"'></div>"})})),o()}))}}))}.call(t,n,t,e))||(e.exports=o)},function(e,t,n){(e.exports=n(4)(!1)).push([e.i,"",""])},function(e,t){e.exports='<div>\r\n    {{#each products}}\r\n    <div class="media">\r\n        <div class="media-left">\r\n            <a href="#" class="media-popup" data-media-index="{{@index}}">\r\n                <img class="media-object" src="{{imageUrl128}}" alt="{{title}}">\r\n            </a>\r\n        </div>\r\n        <div class="media-body">\r\n            <h4 class="media-heading">\r\n                <a href="{{browseUrl}}">{{title}}</a>\r\n            </h4>\r\n            {{description}}\r\n        </div>\r\n    </div>\r\n    {{/each}}\r\n</div>\r\n'},function(e,t){e.exports=i},function(e,t,n){var o;void 0===(o=function(e,t,o){var i=n(14);n(15);var r=n(1);return r.registerDashlet("sample-random-product-dashlet",r.AbstractDashlet.extend({TEMPLATE:i,configureDefault:function(){this.base(),this.config({message:"And your product is..."})},prepareModel:function(e,t,n){var o=this,i=this.observable("branch").get();this.base(e,t,(function(){t.message=o.config().message,i.queryNodes({_type:"catalog:product"}).then((function(){var e=this.asArray(),o=t.product=e[Math.floor(Math.random()*e.length)];o.imageUrl="/preview/repository/"+o.getRepositoryId()+"/branch/"+o.getBranchId()+"/node/"+o.getId()+"/default?size=256&name=preview256",n()}))}))},afterSwap:function(e,t,n,o){this.base(e,t,n,(function(){o()}))},isConfigurable:function(){return!0},handleConfiguration:function(e,t,n){var o={};o.data=t,o.schema={type:"object",properties:{title:{type:"string",title:"Title"},config:{type:"object",title:"Configuration",properties:{message:{type:"string",title:"Message"}}}}},o.options={},o.observableHolder=Ratchet,r.configureDashlet(o,(function(e,t){n(e,t)}))}}))}.call(t,n,t,e))||(e.exports=o)},function(e,t){e.exports='<div>\r\n\r\n    <div style="text-align:center">\r\n        <p>{{message}}</p>\r\n        <p>{{product.title}}</p>\r\n\r\n        <a href="/#/projects/{{project._doc}}/documents/{{product._doc}}">\r\n            <img src="{{product.imageUrl}}" alt="{{product.title}}">\r\n        </a>\r\n\r\n    </div>\r\n\r\n</div>\r\n'},function(e,t,n){(e.exports=n(4)(!1)).push([e.i,".dashlet.sample-dashlet .dashlet-body>div{padding:10px}",""])},function(e,t,n){var o;void 0===(o=function(e,t,o){var i=n(1),r=n(17);return i.registerAction("create-sample-space",i.AbstractUIAction.extend({defaultConfiguration:function(){var e=this.base();return e.title="Create Sample Space",e.iconClass="fa fa-plus",e},prepareAction:function(e,t,n){e.currentPath=e.observable("path").get(),n()},executeAction:function(e,t,n){var o=this;i.renderForm(e,{data:{title:"My Sample Space",description:"Description of my sample space"},schema:{type:"object",properties:{title:{type:"string",required:!0},description:{type:"string"}}},options:{fields:{title:{type:"text",label:"Title"},description:{type:"textarea",label:"Description"}},focus:"title"}},(function(n){i.showModal({title:t.title,form:n,buttons:[{id:"create",title:"Create",handler:function(t){i.showWaitModal("Creating the sample space...",(function(){o.createHandler(e,n.getValue(),(function(){i.hideWaitModal()}))}))}}],bindFormEnterKeyToButton:"create",cancel:!0},(function(e){}))}))},createHandler:function(e,t,n){r.addContent(e,[{type:"folder",properties:t,parentFolderPath:e.currentPath},{type:"folder",properties:{title:"Files"},parentFolderPath:e.currentPath+"/"+t.title},{type:"file",properties:{title:"helloworld.txt"},parentFolderPath:e.currentPath+"/"+t.title+"/Files",text:"Hello World!"}],(function(e){n()}))}}))}.call(t,n,t,e))||(e.exports=o)},function(e,t){e.exports=r},function(e,t,n){var o;void 0===(o=function(e,t,o){var i=n(1),r=n(0),a=n(5);return i.registerField("sample-city-picker",r.Fields.SelectField.extend({setup:function(){this.base(),this.options.dataSource=function(e){a.ajax({method:"GET",url:"https://raw.githubusercontent.com/gitana/cloudcms-ui-sample-addon/master/data/cities.json",dataType:"json"}).done((function(t){e(t.cities)}))}}}))}.call(t,n,t,e))||(e.exports=o)},function(e,t,n){var o;void 0===(o=function(e,t,o){var i=n(1),r=n(0);return i.registerField("sample-content-picker",r.Fields.SelectField.extend({setup:function(){this.base(),this.options.contentType||(this.options.contentType="catalog:product"),this.options.dataSource={connector:!0,config:{query:{_type:this.options.contentType},mappings:{value:"_doc",text:"title"}}}}}))}.call(t,n,t,e))||(e.exports=o)},function(e,t,n){var o;void 0===(o=function(e,t,o){var i=n(0);i.Fields.Custom1Field=i.Fields.SelectField.extend({getFieldType:function(){return"custom-oup-sp-select"},setValue:function(e){this.base(e),$("#warning-message").length||$(this.getFieldEl()).append("<span id='warning-message' style='color:red'></span>"),this.getValue()||this.setDefault(),"Yes"==this.getValue()?($("#warning-message").empty(),$("#warning-message").html("Warning: Please consult with your key user. Pages set to Yes will not be indexed and will not appear in Google or other search engines.")):$("#warning-message").empty()},afterRenderControl:function(e,t){var n=this;this.base(e,(function(){n.getValue()&&"Yes"==n.getValue()?($(n.getFieldEl()).remove("#warning-message"),$(n.getFieldEl()).append("<span id='warning-message' style='color:red'>Warning: Please consult with your key user. Pages set to Yes will not be indexed and will not appear in Google or other search engines.</span>")):$(n.getFieldEl()).append("<span id='warning-message' style='color:red'></span>"),t()}))}}),i.registerFieldClass("custom-oup-sp-select",i.Fields.Custom1Field)}.call(t,n,t,e))||(e.exports=o)},function(e,t,n){var o;void 0===(o=function(e,t,o){var i=n(5),r=n(0);n(6),i.alpaca.Fields.CustomField=r.Fields.CheckBoxField.extend({getFieldType:function(){return"custom-check-box"},onChange:function(e){this.base(e),this.getFieldEl()||i(this.getFieldEl()).append("<span id='warning-message-checkbox' style='color:red'></span>"),this.getValue()||this.setDefault(),!0===this.getValue()?(i("#warning-message-checkbox").empty(),i("#warning-message-checkbox").html("Note, this option is not permitted for standard Journals secondary pages.")):i("#warning-message-checkbox").empty()},afterRenderControl:function(e,t){var n=this;this.base(e,(function(){n.getValue()&&1==n.getValue()?(i(n.getFieldEl()).remove("#warning-message-checkbox"),i(n.getFieldEl()).append("<span id='warning-message-checkbox' style='color:red'>Note, this option is not permitted for standard Journals secondary pages.</span>")):i(n.getFieldEl()).append("<span id='warning-message-checkbox' style='color:red'></span>"),t()}))}}),r.registerFieldClass("custom-check-box",r.Fields.CustomField)}.call(t,n,t,e))||(e.exports=o)},function(e,t,n){(function(e){var o;void 0===(o=function(e,t,n){var o=n.uri.match(/^.+(_modules[^\/]+)\/.*/)[1],i="../../../"+o+"/sample/resources/contents.css",r="../../../"+o+"/sample/resources/ckeditorCstm.css";window.CKEDITOR.config.contentsCss=["https://fonts.googleapis.com/css?family=Merriweather:300,400,400italic,700,700italic|Source+Sans+Pro:400,400italic,700,700italic",i,r]}.call(t,n,t,e))||(e.exports=o)}).call(this,n(2)(e))},function(e,t,n){var o;void 0===(o=function(e,t,o){var i=n(0);i.Fields.Custom1Field=i.Fields.SelectField.extend({getFieldType:function(){return"custom-oup-type-select"},setValue:function(e){this.base(e),$("#media-kit-div").length||$(this.getFieldEl()).append("<div id='media-kit-div'><br/><legend>Media Kit Top Region</legend></div>"),this.getValue()||this.setDefault(),console.log("show -value is working"),"Media Kit"==this.getValue()?$("#media-kit-div").show():$("#media-kit-div").hide()},afterRenderControl:function(e,t){var n=this;this.base(e,(function(){console.log(" after render controll call *********** >>>",n.getValue()),n.getValue()&&"Media Kit"==n.getValue()?$(n.getFieldEl()).append("<div id='media-kit-div'><br/><legend>Media Kit Top Region</legend></div>"):$("#media-kit-div").hide(),t()}))}}),i.registerFieldClass("custom-oup-type-select",i.Fields.Custom1Field)}.call(t,n,t,e))||(e.exports=o)},function(e,t,n){var o;void 0===(o=function(e,t,o){var i=n(25),r=n(0),a=r.Fields.FilePickerField;r.registerFieldClass("oup-file-picker",a.extend({setup:function(){this.base(),this.options.picker&&this.options.picker.upload&&(this.options.picker.upload=!1)},initHandlebars:function(e,t,n){var o=this;this.base(e,t,(function(){var r=o.observable("document").get(),a=r.getRepositoryId(),s=r.getBranchId(),l=r.getId();$.ajax({type:"POST",url:"/proxy/repositories/"+a+"/branches/"+s+"/nodes/"+l+"/ancestorbytype?type=type:journalsitefolder0&paths=true",headers:{"X-CSRF-TOKEN":i.getCsrfToken()}}).always((function(o){o&&o._paths&&(t.nearestJournalFolderPath=o._paths["821c40ab613d9b5bcbbc656b62229301"]),n(e,t)}))}))}}))}.call(t,n,t,e))||(e.exports=o)},function(e,t){e.exports=a},function(e,t,n){(function(e){var o;void 0===(o=function(e,t,o){var i=n(3),r=o.uri.match(/^.+(_modules[^\/]+)\/.*/)[1];i.registerPlugin("wordcount",r),window.CKEDITOR.config.wordcount={showParagraphs:!1,showWordCount:!1,showCharCount:!1,countSpacesAsChars:!1,countHTML:!1}}.call(t,n,t,e))||(e.exports=o)}).call(this,n(2)(e))},function(e,t,n){(function(e){var o;void 0===(o=function(e,t,o){var i=n(3),r=o.uri.match(/^.+(_modules[^\/]+)\/.*/)[1];i.registerPlugin1("a11ychecker",r)}.call(t,n,t,e))||(e.exports=o)}).call(this,n(2)(e))},function(e,t,n){(function(e){var o;void 0===(o=function(e,t,o){var i=n(3),r=o.uri.match(/^.+(_modules[^\/]+)\/.*/)[1];i.registerPlugin2("balloonpanel",r)}.call(t,n,t,e))||(e.exports=o)}).call(this,n(2)(e))},function(e,t,n){(function(e){var o;void 0===(o=function(e,t,o){var i=n(3),r=o.uri.match(/^.+(_modules[^\/]+)\/.*/)[1];i.registerPlugin3("orcidIcon",r)}.call(t,n,t,e))||(e.exports=o)}).call(this,n(2)(e))},function(e,t,n){(function(e){var o;void 0===(o=function(e,t,o){var i=n(3),r=o.uri.match(/^.+(_modules[^\/]+)\/.*/)[1];i.registerPlugin4("expandablelist",r)}.call(t,n,t,e))||(e.exports=o)}).call(this,n(2)(e))},function(e,t,n){var o;void 0===(o=function(e,t,o){n(5);var i=n(0);n(6),window.CKEDITOR.config.disableNativeSpellChecker=!1,window.CKEDITOR.config.forcePasteAsPlainText=!0;let r={height:50,toolbar:[]},a={height:50,toolbar:[["SpecialChar","Italic","Subscript","Superscript","-","RemoveFormat"]]},s={height:100,toolbar:[["Cut","Copy","Paste","-","Undo","Redo"],["Link","Unlink"],["Italic","BulletedList","Strike","Subscript","Superscript","SpecialChar","-","RemoveFormat","-","ShowBlocks"],["Format","Styles"],["cloudcms-image"]],removeButtons:null,stylesSet:[{name:"Paragraph",element:"p"},{name:"OUP unbulleted list",element:"ul",attributes:{class:"unbulleted"}},{name:"OUP horizontal list",element:"ul",attributes:{class:"inline"}},{name:"OUP floatLeft Image",element:"img",attributes:{class:"floatLeft"}},{name:"OUP floatRight Image",element:"img",attributes:{class:"floatRight"}}],"cloudcms-image":{enableSize:!1,enableAltText:!1,imagePickerType:"oup-file-picker",hideUploadButton:!0,imagePickerConfig:{rootContainerPath:"../../..",initialContainerPath:"{{nearestJournalFolderPath}}/Image Library"}}},l={height:100,toolbar:[["Format","-","Italic","SpecialChar","Subscript","Superscript","-","RemoveFormat","-","Link","Unlink","-","ShowBlocks"]],removeButtons:null},c={height:100,toolbar:[["Cut","Copy","Paste","-","Undo","Redo"],["Link","Unlink"],["Italic","BulletedList","Strike","Subscript","Superscript","SpecialChar","-","RemoveFormat","-","ShowBlocks"],["Format","Styles"]],removeButtons:null,stylesSet:[{name:"Paragraph",element:"p"},{name:"OUP unbulleted list",element:"ul",attributes:{class:"unbulleted"}},{name:"OUP horizontal list",element:"ul",attributes:{class:"inline"}},{name:"OUP floatLeft Image",element:"img",attributes:{class:"floatLeft"}},{name:"OUP floatRight Image",element:"img",attributes:{class:"floatRight"}}]};i.Fields.OUPCKEditorField=i.Fields.CKEditorField.extend({toolbarOptions:{config1:Object.create({toolbar:[["Cut","Copy","PasteText","-","Undo","Redo"],["Link","Unlink","Anchor","cloudcms-link"],["Table","SpecialChar","expandablelist"],["Maximize","ShowBlocks","Source","A11ychecker","Preview"],["Italic","Strike","Subscript","Superscript","-","RemoveFormat"],["NumberedList","BulletedList","-","Outdent","Indent","Blockquote"],["Format","Styles"],["cloudcms-image"],["cloudcms-iframe"],["orcidIcon"]],removeButtons:null,stylesSet:[{name:"Paragraph",element:"p"},{name:"OUP Notice",element:"div",attributes:{class:"notice"}},{name:"OUP unbulleted list",element:"ul",attributes:{class:"unbulleted"}},{name:"OUP horizontal list",element:"ul",attributes:{class:"inline"}},{name:"OUP floatLeft Image",element:"img",attributes:{class:"floatLeft"}},{name:"OUP floatRight Image",element:"img",attributes:{class:"floatRight"}}],"cloudcms-image":{enableSize:!1,enableAltText:!1,imagePickerType:"oup-file-picker",hideUploadButton:!0,imagePickerConfig:{rootContainerPath:"../../..",initialContainerPath:"{{nearestJournalFolderPath}}/Image Library"}},"cloudcms-link":{linkPickerType:"oup-file-picker",hideUploadButton:!0,linkPickerConfig:{rootContainerPath:"../../..",initialContainerPath:"{{nearestJournalFolderPath}}/Row Containers, Content Blocks, and Widgets"}}}),config2:Object.create(a),configAbtPnlHead:Object.create(a),configAbtPnlLinkText:Object.create(a),configMainTitleHP:Object.create(a),configHeadCB:Object.create(a),configSecTitleHP:Object.create(a),configSnippet:Object.create(a),configSnippetPodHP:Object.create(r),configSnippetBR:Object.create(r),configSnippetPodHP2:Object.create(a),configSnippetPodHP3:Object.create({height:50,toolbar:[["SpecialChar","Italic","Subscript","Superscript","-","RemoveFormat"],["Link","Unlink"]]}),config3:Object.create(s),configSecDescHP:Object.create(s),configMainDescHP:Object.create(s),config4:Object.create({toolbar:[["Link","Unlink"]]}),config5:Object.create(l),configSpnsrSP:Object.create(l),config6:Object.create({toolbar:[["Cut","Copy","Paste","-","Undo","Redo"],["Link","Unlink","Anchor"],["Table","HorizontalRule","SpecialChar"],["Maximize","ShowBlocks","Source","Preview"],["Italic","Strike","Subscript","Superscript","-","RemoveFormat"],["NumberedList","BulletedList","-","Outdent","Indent","Blockquote","-","JustifyLeft","JustifyCenter","JustifyRight","JustifyBlock"],["Format","Styles"],["cloudcms-image"],["cloudcms-iframe"]],removeButtons:null,stylesSet:[{name:"Paragraph",element:"p"},{name:"OUP unbulleted list",element:"ul",attributes:{class:"unbulleted"}},{name:"OUP horizontal list",element:"ul",attributes:{class:"inline"}},{name:"OUP floatLeft Image",element:"img",attributes:{class:"floatLeft"}},{name:"OUP floatRight Image",element:"img",attributes:{class:"floatRight"}}],"cloudcms-image":{enableSize:!1,enableAltText:!1,imagePickerType:"oup-file-picker",hideUploadButton:!0,imagePickerConfig:{rootContainerPath:"../../..",initialContainerPath:"{{nearestJournalFolderPath}}/Image Library"}}}),config7:Object.create(c),configAbtPnlTxtHP:Object.create(c),configTextCB:Object.create({height:100,toolbar:[["Cut","Copy","Paste","-","Undo","Redo"],["Link","Unlink"],["Italic","NumberedList","BulletedList","Strike","Subscript","Superscript","SpecialChar","-","RemoveFormat","-","ShowBlocks"],["Format","Styles"]],removeButtons:null,stylesSet:[{name:"Paragraph",element:"p"},{name:"OUP unbulleted list",element:"ul",attributes:{class:"unbulleted"}},{name:"OUP horizontal list",element:"ul",attributes:{class:"inline"}},{name:"OUP floatLeft Image",element:"img",attributes:{class:"floatLeft"}},{name:"OUP floatRight Image",element:"img",attributes:{class:"floatRight"}}]}),config8:Object.create({toolbar:[["Format"],["SpecialChar","Subscript","Superscript","-","RemoveFormat"],["Link","Unlink"],["cloudcms-image"]],removeButtons:null,"cloudcms-image":{enableSize:!1,enableAltText:!1,imagePickerType:"oup-file-picker",hideUploadButton:!0,imagePickerConfig:{rootContainerPath:"../../..",initialContainerPath:"{{nearestJournalFolderPath}}/Image Library"}}}),config11:Object.create({height:50,toolbar:[["Bold","Italic"]]})},getFieldType:function(){return"oup-ckeditor-field"},setup:function(){if(this.options.ckeditor&&this.toolbarOptions[this.options.ckeditor]){var e=this.options.ckeditor;this.options.ckeditor=this.toolbarOptions[this.options.ckeditor],e&&"config5"==e?(this.options.ckeditor.format_tags="p;h4;pre;links",this.options.ckeditor.format_links={name:"callToAction",element:"p",attributes:{class:"callToAction"}},this.options.ckeditor.format_h4={name:"Normal",element:"p",attributes:{class:""}},this.options.ckeditor.format_h4={name:"Heading 4",element:"h4",attributes:{class:""}},this.options.ckeditor.format_pre={name:"Formatted",element:"pre",attributes:{class:""}}):this.options.ckeditor.format_tags=!e||"config1"!=e&&"config6"!=e&&"config8"!=e?"p;h2;h3;pre":"p;h2;h3;h4;pre",e&&"configMainTitleHP"==e&&(this.options.ckeditor.wordcount={showParagraphs:!1,showWordCount:!0,showCharCount:!0,countSpacesAsChars:!0,countHTML:!1,warnOnLimitOnly:!0,maxCharCount:32}),e&&"configAbtPnlHead"==e&&(this.options.ckeditor.wordcount={showParagraphs:!1,showWordCount:!0,showCharCount:!0,countSpacesAsChars:!0,countHTML:!1,warnOnLimitOnly:!0,maxCharCount:35},this.options.ckeditor.autoParagraph=!1,this.options.ckeditor.enterMode=window.CKEDITOR.ENTER_BR),e&&"configAbtPnlLinkText"==e&&(this.options.ckeditor.wordcount={showParagraphs:!1,showWordCount:!0,showCharCount:!0,countSpacesAsChars:!0,countHTML:!1,warnOnLimitOnly:!0,maxCharCount:35},this.options.ckeditor.autoParagraph=!1,this.options.ckeditor.enterMode=window.CKEDITOR.ENTER_BR),e&&"configHeadCB"==e&&(this.options.ckeditor.wordcount={showParagraphs:!1,showWordCount:!0,showCharCount:!0,countSpacesAsChars:!0,countHTML:!1,warnOnLimitOnly:!0,maxCharCount:150}),e&&"configSecTitleHP"==e&&(this.options.ckeditor.wordcount={showParagraphs:!1,showWordCount:!0,showCharCount:!0,countSpacesAsChars:!0,countHTML:!1,warnOnLimitOnly:!0,maxCharCount:36}),e&&"configSecDescHP"==e&&(this.options.ckeditor.wordcount={showParagraphs:!1,showWordCount:!0,showCharCount:!0,countSpacesAsChars:!0,countHTML:!1,warnOnLimitOnly:!0,maxCharCount:100}),e&&"configMainDescHP"==e&&(this.options.ckeditor.wordcount={showParagraphs:!1,showWordCount:!0,showCharCount:!0,countSpacesAsChars:!0,countHTML:!1,warnOnLimitOnly:!0,maxCharCount:150}),e&&"configSnippet"==e&&(this.options.ckeditor.wordcount={showParagraphs:!1,showWordCount:!0,showCharCount:!0,countSpacesAsChars:!0,countHTML:!1,warnOnLimitOnly:!0,maxCharCount:400},this.options.ckeditor.height="100"),e&&"configSnippetPodHP3"==e&&(this.options.ckeditor.wordcount={showParagraphs:!1,showWordCount:!0,showCharCount:!0,countSpacesAsChars:!0,countHTML:!1,warnOnLimitOnly:!0,maxCharCount:325},this.options.ckeditor.height="100"),e&&"configSnippetBR"==e&&(this.options.ckeditor.height="100",this.options.ckeditor.autoParagraph=!1,this.options.ckeditor.enterMode=window.CKEDITOR.ENTER_BR),e&&"configSnippetPodHP"==e&&(this.options.ckeditor.wordcount={showParagraphs:!1,showWordCount:!0,showCharCount:!0,countSpacesAsChars:!0,countHTML:!1,warnOnLimitOnly:!0,maxCharCount:325},this.options.ckeditor.height="100",this.options.ckeditor.autoParagraph=!1,this.options.ckeditor.enterMode=window.CKEDITOR.ENTER_BR),e&&"configSnippetPodHP2"==e&&(this.options.ckeditor.wordcount={showParagraphs:!1,showWordCount:!0,showCharCount:!0,countSpacesAsChars:!0,countHTML:!1,warnOnLimitOnly:!0,maxCharCount:325},this.options.ckeditor.height="100",this.options.ckeditor.autoParagraph=!1,this.options.ckeditor.enterMode=window.CKEDITOR.ENTER_BR),e&&"configSpnsrSP"==e&&(this.options.ckeditor.wordcount={showParagraphs:!1,showWordCount:!0,showCharCount:!0,countSpacesAsChars:!0,countHTML:!1,warnOnLimitOnly:!0,maxCharCount:400}),e&&"configAbtPnlTxtHP"==e&&(this.options.ckeditor.wordcount={showParagraphs:!1,showWordCount:!0,showCharCount:!0,countSpacesAsChars:!0,countHTML:!1,warnOnLimitOnly:!0,maxCharCount:210}),e&&"configTextCB"==e&&(this.options.ckeditor.wordcount={showParagraphs:!1,showWordCount:!0,showCharCount:!0,countSpacesAsChars:!0,countHTML:!1,warnOnLimitOnly:!0,maxCharCount:450})}this.isUserInTeam("academic-editors")&&(this.options.ckeditor.removeButtons="Source"),this.base()},isUserInTeam:function(e){var t=this.top().options.observableHolder,n=[];return!!(n=t.observable("project").get()?t.observable("projectUserTeamKeys").get():t.observable("oneteamUserTeamKeys").get())&&n.indexOf(e)>-1},afterRenderControl:function(e,t){this.base(e,(function(){t()}))},handleValidate:function(){return this.base()},getTitle:function(){return"OUP ckeditor Field"},getDescription:function(){return"Allow output markup rule overrides to ckeditor"}}),i.registerMessages({noDependentField:"No local config found"}),window.CKEDITOR.on("instanceReady",(function(e){e.editor.removeMenuItem("image")})),window.CKEDITOR.on("instanceReady",(function(e){e.editor.removeMenuItem("tablecell")})),window.CKEDITOR.on("dialogDefinition",(function(e){var t=e.data.name,n=e.data.definition;if(e.editor.getCommand("table").allowedContent="table{width,height}[align,border,cellpadding,cellspacing,summary];caption tbody thead tfoot;th td tr;table[id,dir](*){*}",console.log(" dialog defination",t),"table"==t||"tableProperties"==t){var o=n.getContents("info");n.getContents("info").elements.pop(),n.getContents("info").elements.pop(),n.contents[1].elements[0].children.shift(),n.contents[1].elements[0].children[0].children.shift(),o.elements[0].children[0].children.pop(),o.elements[0].children[0].children.pop(),o.elements[0].children.pop(),o.get("selHeaders").items.pop(),o.get("selHeaders").items.pop()}"bulletedListStyle"==t&&(n.getContents("info").get("type").items.pop(),n.getContents("info").get("type").items.pop()),"image"==t&&(n.getContents("info").elements.pop(),n.getContents("info").elements.pop(),n.contents.pop()),"ul"==t&&console.log("test")})),i.registerFieldClass("oup-ckeditor",i.Fields.OUPCKEditorField)}.call(t,n,t,e))||(e.exports=o)},function(e,t,n){var o;void 0===(o=function(e,t,o){var i=n(33);return n(1).registerGadget("sample-product-document-properties",i.extend({prepareModel:function(e,t,n){var o=this.observable("document").get();this.base(e,t,(function(){"catalog:product"===o.getTypeQName()&&"sku"===propertyName&&t.properties.push({key:"wickedgoodcupcakes",title:"Wicked Good Cupcakes",value:"https://www.wickedgoodcupcakes.com",link:"https://www.wickedgoodcupcakes.com"}),n()}))}}))}.call(t,n,t,e))||(e.exports=o)},function(e,t){e.exports=s},function(e,t,n){(e.exports=n(4)(!1)).push([e.i,"",""])}])}));