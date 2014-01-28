/**
 * View for rendering the sketchy demo page,
 * which shows off our increadible UI suite =)
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
        template: Templates["sketchy/page"]
    });

});
