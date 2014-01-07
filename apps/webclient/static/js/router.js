/**
 * Backbone URL route dispatcher
 * */

define([
    "jquery",
    "underscore",
    "backbone",
    "backbone_app/views/sketchy/demo",
    "backbone_app/views/cards/api-example"
], function($, _, Backbone, SketchyDemoView, CardAPIExampleView) {
    var AppRouter = Backbone.Router.extend({
        routes: {
            "posts/:id": "getPost",

            // sketchy demo
            "sketchy": "displaySketchyDemoView",

            // card api example
            "card-api": "displayCardAPIView",

            "*actions": "defaultRoute"
        }
    });
    var initialize = function() {
        var app_router = new AppRouter;

        app_router.on("route:displaySketchyDemoView", function() {
            var view = new SketchyDemoView();
            view.render();
        });

        app_router.on("route:displayCardAPIView", function() {
            var view = new CardAPIExampleView();
            view.render();
        });


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
