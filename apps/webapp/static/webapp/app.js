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

    /*
    var initialize = function() {


        // Patch Model and Collection to trigger a fetch event.
        // See http://tbranyen.com/post/how-to-indicate-backbone-fetch-progress
        _.each(["Model", "Collection"], function(name) {
            // Cache Backbone constructor.
            var ctor = Backbone[name];
            // Cache original fetch.
            var fetch = ctor.prototype.fetch;

            // Override the fetch method to emit a fetch event.
            ctor.prototype.fetch = function() {
                // Trigger the fetch event on the instance.
                this.trigger("fetch", this);

                // Pass through to original fetch.
                return fetch.apply(this, arguments);
            };
        });


        // Initialize the app router
        Router.initialize({application: this});

        // Initialize foundation
        // Documentation can be found at: http://foundation.zurb.com/docs
        $(document).foundation();

    };
    return {
        initialize: initialize
    }
    */

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
