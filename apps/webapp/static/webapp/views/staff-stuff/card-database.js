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

    var compositeView = Backbone.Marionette.CompositeView.extend({
        className: "large-4 columns",
        template: Templates["staff-stuff/card-database-compositeview"],
        collection: new CardListCollection(),
        itemView: Backbone.Marionette.ItemView.extend({
            tagName: "li",
            template: Templates["staff-stuff/card-database-itemview"],

            events: {
                "click span": function(e) {
                    console.log($(e.currentTarget));
                }
            }
        }),
        itemViewContainer: "ul",

        initialize: function() {
            this.collection.fetch();
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

