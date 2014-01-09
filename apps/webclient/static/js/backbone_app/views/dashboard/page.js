/**
 * View for rendering the index page.
 * */

define([
    "jquery",
    "underscore",
    "backbone",
    "text!backbone_app/templates/dashboard/page.html"
], function($, _, Backbone, demopageTemplate) {

    return Backbone.View.extend({
        el: $("#bb-content"),
        template: demopageTemplate,

        render: function(){
            var template = _.template(this.template, {});
            this.$el.html(template);
        }
    });
});

