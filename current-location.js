/************************
Name: current-location.js
Author: Bret Morris
Version: 1.0
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
            _log(position);
        },
        //-- err (object) - optional - error data
        "error": function(err) {
            err = err || false;
            _log("Error getting current location...");
            if (err) {
                _log("Error code: " + err.code);
                _log("Error message: " + err.message);
            }
        }
    };

    //-- args (object) autocomplete settings
    function _init(args) {
        var options = _extend(_default, args);
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
                    options.error(err);
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

    function _extend() {
        var i;
        var key;
        for( i = 1; i < arguments.length; i++ ) {
            for ( key in arguments[i] ) {
                if( arguments[i].hasOwnProperty(key) ) {
                    arguments[0][key] = arguments[i][key];
                }
            }
        }
        return arguments[0];
    }

    function _log(val) {
        if ( window.console && window.console.log ) {
            window.console.log(val);
        }
    }

    window.currentLocation = {
        "init": _init
    };

})();
