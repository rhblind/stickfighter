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

    var itemView = Backbone.Marionette.ItemView.extend({
        tagName: "li",
        template: Templates["staff-stuff/card-database-itemview"]
    });

    var compositeView = Backbone.Marionette.CompositeView.extend({
        template: Templates["staff-stuff/card-database-compositeview"],
        collection: new CardListCollection(),
        className: "large-4 columns",
        itemView: itemView,
        itemViewContainer: "ul",

        initialize: function() {
            this.collection.fetch();
        },
        onRender: function() {
            console.log(this.collection);
        }
    });

    return Backbone.Marionette.Layout.extend({
        template: Templates["staff-stuff/card-database-layout"],
        className: "row",
        regions: {
            menu: "#menu",
            preview: "#preview"
        },

        onRender: function() {
            this.menu.show(new compositeView());
        }

    });
});

