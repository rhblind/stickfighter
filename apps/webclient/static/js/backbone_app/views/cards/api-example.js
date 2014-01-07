/**
 * View for rendering the card api example page
 * */

define([
    "jquery",
    "underscore",
    "backbone",
    "text!backbone_app/templates/cards/api-example.html"
], function($, _, Backbone, apiExampleTemplate) {

    return Backbone.View.extend({
        el: $("#wrapper"),
        template: apiExampleTemplate,

        render: function(){
            var template = _.template(this.template, {});
            this.$el.html(template);
        }
    });
});

