/**
 * Main file for bootstrapping the backbone application.
 * */

require.config({
    paths: {
        "backbone": "static/js/backbone/backbone",
        "backbone.marionette": "static/js/backbone/backbone.marionette",
        "backbone.tastypie": "static/js/backbone/backbone-tastypie",
        //"backbone.iobind": "static/js/backbone/backbone.iobind",
        //"backbone.iosync": "static/js/backbone/backbone.iosync",
        "foundation": "static/js/foundation",
        "handlebars": "static/js/handlebars/handlebars",
        "hbs": "static/js/hbs",
        "jquery": "static/js/jquery/jquery",
        "jquery.cookie": "static/js/jquery/jquery.cookie",
        //"socket.io": "static/js/socket.io",
        "text": "static/js/text",
        "underscore": "static/js/underscore",
        "events": "static/js/events",
        "vm": "static/js/vm"
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
        "backbone.marionette": {
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
        templateExtension: "hbs", // default: "hbs"
        partialsUrl: ""           // default: ""
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
