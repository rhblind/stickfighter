/**
 * Card collection
 * */

define([
    "underscore",
    "backbone"
], function(_, Backbone) {

    return Backbone.Collection.extend({

        model: Backbone.Model.extend({}),
        url: "/server/api/v1/card"

    });
});


