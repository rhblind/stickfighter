/**
 * View for rendering the index page.
 * */

define([
    "jquery",
    "underscore",
    "backbone",
    "templates/compiled"
], function($, _, Backbone, Templates) {

    return Backbone.View.extend({
        el: $("#content"),
        template: Templates["dashboard/page"],

        render: function() {
            this.$el.html(this.template());
        }
    });
});

