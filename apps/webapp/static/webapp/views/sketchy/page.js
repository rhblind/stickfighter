/**
 * View for rendering the sketchy demo page,
 * which shows off our increadible UI suite =)
 * */

define([
    "jquery",
    "underscore",
    "backbone",
    "templates/compiled"
], function($, _, Backbone, Templates) {

    return Backbone.View.extend({
        el: $("#content"),
        template: Templates["sketchy/page"],

        render: function(){
            this.$el.html(this.template());
        }
    });
});
