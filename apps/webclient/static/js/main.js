/**
 * Main file for bootstrapping the backbone application.
 * */

require.config({
    paths: {
        "jquery": "libs/jquery/jquery",
        "jquery.cookie": "libs/foundation/js/vendor/jquery.cookie",
        "underscore": "libs/underscore/underscore",
        "backbone": "libs/backbone/backbone",
        "backbone.iosync": "libs/backbone.iobind/dist/backbone.iosync",
        "backbone.iobind": "libs/backbone.iobind/dist/backbone.iobind",
        "backbone.tastypie": "libs/backbone.tastypie",
        "socket.io": "libs/socket.io/lib/socket.io"
    },
    shim: {
        "jquery.cookie": {
            deps: ["jquery"]
        },
        "backbone": {
            deps: ["underscore", "jquery"],
            exports: "Backbone"
        },
        "backbone.tastypie": {
            deps: ["backbone"],
            exports: "Backbone.Tastypie"
        },
        "backbone.iosync": {
            deps: ["backbone", "socket.io"]
        },
        "backbone.iobind": {
            deps: ["backbone", "socket.io"]
        },
        "underscore": {
            exports: "_"
        },
        "socket.io": {
            exports: "socket"
        }
    }
});
require([
    // Load our app module and pass it to our definition function.
    // Also pass additional libraries which should be exposed here.
    // Note that libraries passed here will *not* be loaded async!
    "app"
], function(application) {

    application.initialize();

});
