/**
 * View for rendering the login page.
 * */

define([
    "jquery",
    "underscore",
    "backbone",
    "backbone.marionette",
    "backbone.remoteforms",
    "templates/compiled"
], function($, _, Backbone, Marionette, RemoteForms, Templates) {
    "use strict";

    console.log("hurra");
    return Backbone.Marionette.ItemView.extend({
        className: "row",
        template: Templates["account/login"]
    });

});
