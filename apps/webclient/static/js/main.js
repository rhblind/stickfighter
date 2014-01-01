/**
 * Main file for backbone application.
 * This file bootstraps the entire app.
 * */

require.config({
    paths: {
        jquery: "libs/jquery/jquery",
        underscore: "libs/underscore-amd/underscore",
        backbone: "libs/backbone-amd/backbone",
        backbone_tastypie: "libs/backbone-tastypie",
        jquery_cookie: "libs/foundation/js/vendor/jquery.cookie"

    },
    shim: {
        backbone_tastypie: {
            deps: ["underscore", "backbone"],
            exports: "Backbone.Tastypie"
        },
        jquery_cookie: {
            deps: ["jquery"]
        }
    }
});

require([
    // Load our app module and pass it to our definition function.
    // Also pass additional libraries which should be exposed here.
    // Note that libraries passed here will *not* be loaded async!
    "app",
    "backbone_tastypie",
    "jquery_cookie"
], function(application) {

    application.initialize();

});

