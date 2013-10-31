/************************
Name: current-location.js
Author: Bret Morris
Version: 1.0
Requires: jQuery 1.10.2
*************************/

(function() {

    "use strict";

    //-- Default settings
    var _default = {
        //-- Set to true to increase location accuracy when possible
        //   could result in slower response times
        "enableHighAccuracy": false,
        //-- Amount of time to wait while getting location
        "timeout": Infinity,
        //-- When set to 0 location data cannot be cached
        "maximumAge": 0,
        //-- position (object) - required - position data
        "success": function(position) {
            console.log(position);
        },
        //-- err (object) - optional - error data
        "error": function(err) {
            err = err || false;
            console.log("Error getting current location...")
            if (err) {
                console.log("Error code: " + err.code);
                console.log("Error message: " + err.message);
            }
        }
    }

    //-- args (object) autocomplete settings
    function _init(args) {
        var options = $.extend(_default, args);
        //-- Detect current location support
        if ( navigator.geolocation ) {
            //-- Get current location
            navigator.geolocation.getCurrentPosition (
                //-- Success
                function(position) {
                    options.success(position);
                },
                //-- Error
                function(err) {
                    options.error(err)
                },
                //-- Options
                {
                    "enableHighAccuracy": options.enableHighAccuracy,
                    "timeout": options.timeout,
                    "maximumAge": options.maximumAge
                }
            );
        }
        //-- geolocation not supported
        else {
            options.error();
        }
    }

    window.currentLocation = {
        "init": _init
    };

})();