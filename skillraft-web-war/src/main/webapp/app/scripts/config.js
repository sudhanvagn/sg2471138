'use strict';

require.config({
	deps: ['main'],
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    },
    paths: {
        jquery: '../vendor/jquery/dist/jquery',
        backbone: '../vendor/backbone/backbone',
        underscore: '../vendor/lodash/dist/lodash',
        bootstrap: '../vendor/sass-bootstrap/dist/js/bootstrap'
    }
});
