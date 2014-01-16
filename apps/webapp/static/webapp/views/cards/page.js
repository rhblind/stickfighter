/**
 * View for rendering the card example page.
 * */

define([
    "jquery",
    "underscore",
    "backbone",
    "backbone.marionette",
    "templates/compiled"
], function($, _, Backbone, Marionette, Templates) {

    return Backbone.Marionette.ItemView.extend({
        className: "row",
        template: Templates["cards/page"]
    });
});

