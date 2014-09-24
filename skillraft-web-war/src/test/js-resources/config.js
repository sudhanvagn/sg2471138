'use strict';

require.config({
    baseUrl: '../../main/webapp/app/scripts/',
    deps: ['runner'],
    paths: {
    	javascript: '../../../../test/javascript/',
        runner: '../../../../test/js-resources/runner',
        appConfig: '../../app/scripts/config'
    },
    shim: {
        runner: ['appConfig'] 
    }
});