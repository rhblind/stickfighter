/**
 * View for rendering the card example page.
 * */

define([
    "jquery",
    "underscore",
    "backbone",
    "backbone.marionette",
    "templates/compiled",
    "collections/cards/card-list"
], function($, _, Backbone, Marionette, Templates, CardListCollection) {

//    return Backbone.Marionette.ItemView.extend({
//        className: "row",
//        template: Templates["cards/page"]
//    });

    var cardItemView = Backbone.Marionette.ItemView.extend({
        className: "row",
        template: Templates["cards/cardItemView"],
        collection: new CardListCollection(),

        onBeforeRender: function() {
            // Display the loading spinner
            console.log("before:render catched!");
        },
        onRender: function() {
            // Hide the loading spinner
            console.log("on:render catched!");
        }
    });

    return Backbone.Marionette.CollectionView.extend({

        itemView: cardItemView

    });
});

