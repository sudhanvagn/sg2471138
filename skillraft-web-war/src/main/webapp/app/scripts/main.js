/*global require*/
//'use strict';
//
//require.config({
//    shim: {
//        bootstrap: {
//            deps: ['jquery'],
//            exports: 'jquery'
//        }
//    },
//    paths: {
//        jquery: '../vendor/jquery/dist/jquery',
//        backbone: '../vendor/backbone/backbone',
//        underscore: '../vendor/lodash/dist/lodash',
//        bootstrap: '../vendor/sass-bootstrap/dist/js/bootstrap'
//    }
//});

require([
    'backbone'
], function (Backbone) {
//    Backbone.history.start();
    console.log('Test');
});
