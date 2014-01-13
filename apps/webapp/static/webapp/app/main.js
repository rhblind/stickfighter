/**
 * Main file for bootstrapping the backbone application.
 * */

require.config({
    paths: {
        "jquery": "../components/foundation/js/vendor/jquery",
        "jquery.cookie": "../components/foundation/js/vendor/jquery.cookie",
        "underscore": "../components/underscore/underscore",
        "backbone": "../components/backbone/backbone",
        //"backbone.iosync": "../components/backbone.iobind/dist/backbone.iosync",
        //"backbone.iobind": "../components/backbone.iobind/dist/backbone.iobind",
        "backbone.tastypie": "../components/backbone.tastypie",
        "marionette": "../components/backbone.marionette/lib/backbone.marionette",
        "handlebars": "../components/handlebars/handlebars",
        //"socket.io": "../components/socket.io/lib/socket.io",
        "foundation": "../components/foundation/js/foundation.min",
        "text": "../components/text/text",
        "hbs": "../components/require-handlebars-plugin/hbs",
        "vm": "../components/vm",
        "events": "../components/events"
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
