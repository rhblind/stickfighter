/**
 * Main file for bootstrapping the backbone application.
 * */

require.config({
    paths: {
        "jquery": "libs/foundation/js/vendor/jquery",
        "jquery.cookie": "libs/foundation/js/vendor/jquery.cookie",
        "underscore": "libs/underscore/underscore",
        "backbone": "libs/backbone/backbone",
        //"backbone.iosync": "libs/backbone.iobind/dist/backbone.iosync",
        //"backbone.iobind": "libs/backbone.iobind/dist/backbone.iobind",
        "backbone.tastypie": "libs/backbone.tastypie",
        "marionette": "libs/backbone.marionette/lib/backbone.marionette",
        "handlebars": "libs/handlebars/handlebars",
        //"socket.io": "libs/socket.io/lib/socket.io",
        "foundation": "libs/foundation/js/foundation.min",
        "text": "libs/text/text",
        "hbs": "libs/require-handlebars-plugin/hbs",
        "vm": "libs/vm",
        "events": "libs/events"
    },
    shim: {
        "jquery.cookie": {
            deps: ["jquery"]
        },
        "underscore": {
            exports: "_"
        },
        "backbone": {
            deps: ["underscore", "jquery"],
            exports: "Backbone"
        },
        "backbone.tastypie": {
            deps: ["backbone"],
            exports: "Backbone.Tastypie"
        },
        /*
        "backbone.iosync": {
            deps: ["backbone", "socket.io"]
        },
        "backbone.iobind": {
            deps: ["backbone", "socket.io"]
        },
        */
        "handlebars": {
            exports: "Handlebars"
        },
        "marionette": {
            deps: ["backbone"],
            exports: "Backbone.Marionette"
        },
        /*
        "socket.io": {
            exports: "socket"
        },
        */
        "foundation": {
            deps: ["jquery"]
        },
        "vm": {
            deps: ["events"]
        }
    },
    "hbs": {
        helpers: true,            // default: true
        i18n: false,              // default: false
        templateExtension: 'hbs', // default: 'hbs'
        partialsUrl: ''           // default: ''
    }
});
require([
    // Load our app module and pass it to our definition function.
    // Also pass additional libraries which should be exposed here.
    // Note that libraries passed here will *not* be loaded async!
    "app",
    "foundation"
], function(application) {
    application.initialize();

});
