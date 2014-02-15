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

    var AppController = Backbone.Marionette.Controller.extend({
        // We're currently not using the controller functionality
        // because of the homebrewed solution below, which in my
        // head is a bit cleaner.
        showView: function(name) {
            console.log(name);
        }
    });

    var AppRouter = Backbone.Marionette.AppRouter.extend({

        controller: new AppController,

        appRoutes: {

        },

        initialize: function(options) {
            this.application = options.application;
            this.staticRoutes();

        },
        staticRoutes: function() {
            this.register("*actions", "DashboardPageView", "views/dashboard/page");
            this.register("account/login", "AccountLoginPageView", "views/account/login");
            this.register("sketchy", "SketchyDemoPageView", "views/sketchy/page");
            this.register("card-api", "ApiCardExamplePageView", "views/cards/page");

            this.register("staff-stuff/card-database", "CardDatabasePageView", "views/staff-stuff/card-database");
        },
        // Use this to register static routes in a sensible way.
        // TODO: We don't need the name, we're using precompiled templates!
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
                    self.application.contentRegion.show(view);

                });
            });
        }
    });
    var initialize = function(options) {
        new AppRouter(options);

        // Start the Backbone history after all routes
        // has been set up.
        Backbone.history.start();
    };

    return {
        initialize: initialize
    }
});
