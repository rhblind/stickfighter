/**
 * View for rendering the index page.
 * */

define([
    "jquery",
    "underscore",
    "backbone",
    "backbone.marionette",
    "templates/compiled"
], function($, _, Backbone, Marionette, Templates) {

    return Backbone.Marionette.CompositeView.extend({
        className: "row",
        template: Templates["dashboard/page"]
    });
});

