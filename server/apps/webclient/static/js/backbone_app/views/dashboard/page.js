/**
 * View for rendering the index page.
 * */

define([
    "jquery",
    "underscore",
    "backbone",
    "handlebars",
    "hbs!backbone_app/templates/dashboard/page"
], function($, _, Backbone, Handlebars, demopageTemplate) {

    return Backbone.View.extend({
        el: $("#bb-content"),
        template: demopageTemplate,

        render: function() {
            var template = this.template();
            this.$el.html(template);
        }
    });
});

