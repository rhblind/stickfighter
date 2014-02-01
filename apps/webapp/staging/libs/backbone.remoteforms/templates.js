//define(function (require){
define([
    'templates/forms'
], function(Templates) {
    'use strict';

    return {
        /*
        Login: require('hbs!./templates/login'),
        AppModels: require('hbs!./templates/app_models'),
        ModelInstance: require('hbs!./templates/model_instance'),
        ModelInstances: require('hbs!./templates/model_instances'),
        */

        Form: {
            Errors: Templates['forms/errors'],
            Base: Templates['forms/base'],
            Messages: Templates['forms/messages'],

            // Fields
            Fields: {
                Button: Templates['fields/button'],
                CheckboxInput: Templates['forms/fields/checkbox_input'],
                DateInput: Templates['forms/fields/date_input'],
                DateTimeInput: Templates['forms/fields/date_time_input'],
                FileInput: Templates['forms/fields/file_input'],
                HiddenInput: Templates['forms/fields/hidden_input'],
                ImageInput: Templates['forms/fields/image_input'],
                PasswordInput: Templates['forms/fields/password_input'],
                RadioSelect: Templates['forms/fields/radio_select'],
                Select: Templates['forms/fields/select'],
                SelectMultiple: Templates['forms/fields/select_multiple'],
                TextInput: Templates['forms/fields/text_input'],
                Textarea: Templates['forms/fields/textarea']
            }
        }
    };
});
