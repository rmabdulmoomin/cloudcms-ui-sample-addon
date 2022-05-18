define(function (require, exports, module) {

    var CKEDITOR = window.CKEDITOR;

    return {
        registerPlugin: function (pluginId, moduleId) {
            var pluginPath = "../../../" + moduleId + "/sample/plugins/ckeditor/wordcount/";

            CKEDITOR.plugins.addExternal(pluginId, pluginPath, 'plugin.js');

            if (CKEDITOR.config.extraPlugins.length > 0) {
                CKEDITOR.config.extraPlugins += ",";
            }
            CKEDITOR.config.extraPlugins += pluginId;
        },
        registerPlugin1: function (pluginId, moduleId) {
            var pluginPath = "../../../" + moduleId + "/sample/plugins/ckeditor/a11ychecker/";

            CKEDITOR.plugins.addExternal(pluginId, pluginPath, 'plugin.js');

            if (CKEDITOR.config.extraPlugins.length > 0) {
                CKEDITOR.config.extraPlugins += ",";
            }
            CKEDITOR.config.extraPlugins += pluginId;
        },
        registerPlugin2: function (pluginId, moduleId) {
            var pluginPath = "../../../" + moduleId + "/sample/plugins/ckeditor/balloonpanel/";

            CKEDITOR.plugins.addExternal(pluginId, pluginPath, 'plugin.js');

            if (CKEDITOR.config.extraPlugins.length > 0) {
                CKEDITOR.config.extraPlugins += ",";
            }
            CKEDITOR.config.extraPlugins += pluginId;
        },
        registerPlugin3: function (pluginId, moduleId) {
            var pluginPath = "../../../" + moduleId + "/sample/plugins/ckeditor/orcidIcon/";
            
            CKEDITOR.plugins.addExternal(pluginId, pluginPath, 'plugin.js');
            
            if (CKEDITOR.config.extraPlugins.length > 0) {
                CKEDITOR.config.extraPlugins += ",";
            }
            CKEDITOR.config.extraPlugins += pluginId;
        },
        registerPlugin4: function (pluginId, moduleId) {
            var pluginPath = "../../../" + moduleId + "/sample/plugins/ckeditor/expandablelist/";
            
            CKEDITOR.plugins.addExternal(pluginId, pluginPath, 'plugin.js');
            
            if (CKEDITOR.config.extraPlugins.length > 0) {
                CKEDITOR.config.extraPlugins += ",";
            }
            CKEDITOR.config.extraPlugins += pluginId;
        }
    };
});