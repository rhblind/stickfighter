/**
 * View for rendering the card api example page
 * */

define([
    "jquery",
    "underscore",
    "backbone",
    "collections/cards/card-list",
    "text!templates/cards/api-example.html"
], function($, _, Backbone, CardListCollection, APIExampleTemplate) {

    return Backbone.View.extend({
        el: $("#content"),
        template: APIExampleTemplate,
        collection: new CardListCollection(),

        initialize: function() {

            this.collection.on("fetch", function() {
                this.$el.addClass("spinner64");
            }, this);

            this.collection.on("sync", function() {
                this.$el.removeClass("spinner64");
            }, this);

            this.collection.fetch({
                success: function(collection) {
                    if (collection.length) {
                        collection.each(function(model) {
                            console.log(model);
                        })
                    }
                }
            });
        },
        render: function(){
            var template = _.template(this.template, {});
            this.$el.html(template);
        }
    });
});

