/**
 * View for rendering the index page.
 * */

define([
    "jquery",
    "underscore",
    "backbone",
    "handlebars",
    "hbs!templates/dashboard/page"
], function($, _, Backbone, Handlebars, demopageTemplate) {

    return Backbone.View.extend({
        el: $("#content"),
        template: demopageTemplate,

        render: function() {
            var template = this.template();
            this.$el.html(template);
        }
    });
});

