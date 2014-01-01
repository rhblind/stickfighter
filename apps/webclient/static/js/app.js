/**
 * App file for the docs application
 * */

define([
    "libs/jquery",
    "underscore",
    "backbone",
    "router"
], function($, _, Backbone, Router) {

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
        Router.initialize();

        // Initialize foundation
        // Documentation can be found at: http://foundation.zurb.com/docs
        $(document).foundation();

    };
    return {
        initialize: initialize
    }
});
