define(function(require) {

    // page: "sample-products-list"
    require("./gadgets/sample-products-list/sample-products-list.js");

    // dashlet: "sample-random-product-dashlet"
    require("./gadgets/sample-random-product-dashlet/sample-random-product-dashlet.js");

    // action: "create-sample-space"
    require("./actions/sample/create-sample-space.js");

    // sample form fields
    require("./fields/sample-city-picker.js");
    require("./fields/sample-content-picker.js");
    require("./fields/oup-secondarypage-select.js")
    require("./fields/oup-checkbox.js")
    require("./fields/oup-common.js")
    require("./fields/oup-select-mediakit.js");
    require("./fields/oup-file-picker.js");

    // sample override to document-properties
    require("./gadgets/sample-product-document-properties/sample-product-document-properties.js");

    // global CSS overrides
    require("./styles/sample.css");

});
