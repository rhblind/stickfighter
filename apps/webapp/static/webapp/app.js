/**
 * App file for the docs application
 * */

define([
    "jquery",
    "underscore",
    "backbone",
    "backbone.marionette",
    "router"
], function($, _, Backbone, Marionette, Router) {

    var App = new Backbone.Marionette.Application();
    App.addRegions({
        headerRegion: "#site-header",
        contentRegion: "#content",
        footerRegion: "#site-footer"
    });
    App.on("initialize:after", function() {
        /**
         * Initialize application router and foundation
         * after Marionette is ready.
         * */
        Router.initialize({application: this});
        $(document).foundation();
    });
    return App;
});
