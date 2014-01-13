/**
 * Backbone URL route dispatcher.
 * This is a pretty sane way of writing the router in
 * my opinion.
 * From
 *  https://www.captechconsulting.com/blog/philip-kedy/modularizing-your-backbone-router-using-requirejs
 * */

define([
    "../../../../.",
    "underscore",
    "backbone",
    "vm"
], function($, _, Backbone, Vm) {

    var AppRouter = Backbone.Router.extend({
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

                    var page = Vm.create(self.application, name, module, options);
                    page.render();

                });
            });
        }
    });
    var initialize = function(options) {
        var router = new AppRouter(options);

        // Default route goes first
        router.register("*actions", "DashboardPageView", "backbone_app/views/dashboard/page");

        router.register("sketchy", "SketchyDemoPageView", "backbone_app/views/sketchy/page");
        router.register("card-api", "ApiCardExamplePageView", "backbone_app/views/cards/api-example");

        // Start the Backbone history after all routes
        // has been set up.
        Backbone.history.start();
    };

    return {
        initialize: initialize
    }
});
