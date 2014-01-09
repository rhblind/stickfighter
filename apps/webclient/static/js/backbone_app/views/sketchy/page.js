/**
 * View for rendering the sketchy demo page,
 * which shows off our increadible UI suite =)
 * */

define([
    "jquery",
    "underscore",
    "backbone",
    "text!backbone_app/templates/sketchy/page.html"
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