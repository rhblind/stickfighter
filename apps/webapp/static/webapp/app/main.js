/**
 * Main file for bootstrapping the backbone application.
 * */

require.config({
    paths: {
        "jquery": "../bower_components/foundation/js/vendor/jquery",
        "jquery.cookie": "../bower_components/foundation/js/vendor/jquery.cookie",
        "underscore": "../bower_components/underscore/underscore",
        "backbone": "../bower_components/backbone/backbone",
        //"backbone.iosync": "../bower_components/backbone.iobind/dist/backbone.iosync",
        //"backbone.iobind": "../bower_components/backbone.iobind/dist/backbone.iobind",
        "backbone.tastypie": "../bower_components/backbone.tastypie",
        "marionette": "../bower_components/backbone.marionette/lib/backbone.marionette",
        "handlebars": "../bower_components/handlebars/handlebars",
        //"socket.io": "../bower_components/socket.io/lib/socket.io",
        "foundation": "../bower_components/foundation/js/foundation.min",
        "text": "../bower_components/text/text",
        "hbs": "../bower_components/require-handlebars-plugin/hbs",
        "vm": "../libs/vm",
        "events": "../libs/events"
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
