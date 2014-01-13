/**
 * Card collection
 * */

define([
    "underscore",
    "backbone"
], function(_, Backbone) {

    return Backbone.Collection.extend({

        Model: Backbone.Model.extend({}),
        url: "/server/api/v1/card"

    });
});


