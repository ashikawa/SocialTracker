/*jslint browser: true, plusplus: true, unparam:true*/
/*global ga*/

// var ANALYTICS_OPTIONS =  {'cookieDomain': 'none'};
var ANALYTICS_OPTIONS =  'exmaple.com';

/** @define {string} */
var TRACKING_ID = 'UA-XXXXXXX-1';

/** @define {string} */
var APP_ID = 'XXXXXXXXXXX';

function socialInteractionsTracking(network, action, target) {
    ga('send', 'social', network, action, target);
}