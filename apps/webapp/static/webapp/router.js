/**
 * Backbone URL route dispatcher.
 * This is a pretty sane way of writing the router in
 * my opinion.
 * From
 *  https://www.captechconsulting.com/blog/philip-kedy/modularizing-your-backbone-router-using-requirejs
 * */

define([
    "jquery",
    "underscore",
    "backbone",
    "backbone.marionette",
    "vm"
], function($, _, Backbone, Marionette, Vm) {

    var AppRouter = Backbone.Marionette.AppRouter.extend({
        initialize: function(options) {
            this.application = options.application;
        },
        register: function(route, name, path) {
            var self = this;

            this.route(route, name, function() {
                var args = arguments;
                require([path], function(module) {
                    var options = null;
                    var parameters = route.match(/[:\*]\w+/g);

                    // Map the router parameters to options for the view.
                    if (parameters) {
                        options = {};
                        _.each(parameters, function(name, index) {
                           options[name.substring(1)] = args[index];
                        });
                    }

                    var view = Vm.create(self.application, name, module, options);
                    //view.render();
                    self.application.contentRegion.show(view);

                });
            });
        }
    });
    var initialize = function(options) {
        var router = new AppRouter(options);

        // Default route goes first
        router.register("*actions", "DashboardPageView", "views/dashboard/page");

        router.register("sketchy", "SketchyDemoPageView", "views/sketchy/page");
        router.register("card-api", "ApiCardExamplePageView", "views/cards/page");

        // Start the Backbone history after all routes
        // has been set up.
        Backbone.history.start();
    };

    return {
        initialize: initialize
    }
});
