/**
 * Backbone URL route dispatcher
 * */

define([
    "jquery",
    "underscore",
    "backbone"
], function($, _, Backbone) {
    var AppRouter = Backbone.Router.extend({
        routes: {
            "*actions": "defaultRoute"
        }
    });
    var initialize = function() {
        var app_router = new AppRouter;

        // Default fallback route
        app_router.on("route:defaultRoute", function(actions) {
            // No action!
            console.log("Hit default route. No action here!");
        });

        Backbone.history.start({pushState: true});
    };

    return {
        initialize: initialize
    }
});
