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

    var cardCompositeView = Backbone.Marionette.CompositeView.extend({
        template: Templates["staff-stuff/card-database-collection"],
        tagName: "li",
        collection: new CardListCollection(),

        initialize: function() {
            this.collection.fetch();
        }
    });

    var cardCollectionView = Backbone.Marionette.CollectionView.extend({
        className: "sketchy square",
        tagName: "ul",
        itemView: new cardCompositeView(),

        initialize: function() {
            this.on("collection:before:render", function() {
                this.collection = this.itemView.collection;
                //alert("collection about to be rendered!");
            }, this);

            this.on("collection:rendered", function() {
                //alert("collection was rendered!");
            }, this);
        },
        onAfterItemAdded: function(itemView){
            console.log("item added!");
        }
    });

    return Backbone.Marionette.Layout.extend({
        // see http://stackoverflow.com/questions/18071745/using-marionette-compositeview-within-a-layout-region
        template: Templates["staff-stuff/card-database-layout"],
        className: "row",
        regions: {
            menu: "#menu",
            preview: "#preview"
        },

        initialize: function() {
            this.on("render", function() {
                this.menu.show(new cardCollectionView());
                //this.preview.show();
            }, this);
        }

    });
});

