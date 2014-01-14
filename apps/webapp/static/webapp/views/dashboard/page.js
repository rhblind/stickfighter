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
        template: Templates["../static/webapp/templates/dashboard/page.hbs"],

        render: function() {
            //var template = this.template["../static/webapp/templates/dashboard/page"];
            var template = this.template();
            this.$el.html(template);
        }
    });
});

