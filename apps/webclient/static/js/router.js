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
            "posts/:id": "getPost",
            "*actions": "defaultRoute"
        }
    });
    var initialize = function() {
        var app_router = new AppRouter;

        app_router.on("route:getPost", function(id) {
            console.log(id);
        });

        // Default fallback route
        app_router.on("route:defaultRoute", function(actions) {
            // No action!
            console.log("Hit default route. No action here!");
            console.log("Action defined as: " + actions);
        });

        Backbone.history.start();
    };

    return {
        initialize: initialize
    }
});
