/*!
 * jquery.ausente 1.0
 *
 * Released under the MIT license
 * http://www.opensource.org/licenses/mit-license.php
 */
;
(function($) {


    var ausente = "";


    var callback = {};


    var seconds = 1;


    setInterval(function() {
        if (callback[seconds]) {
            // we have (at least one) callback
            for (var i = 0; i < callback[seconds].length; ++i) {
                callback[seconds][i]();
            }
        }
        // increment espera time
        ++seconds;
    }, 1000);

    // Reinicia el tiempo con los siguiente eventos
    $(document).on('DOMMouseScroll keydown mousedown mousemove mousewheel touchstart', function() {
        seconds = 0;
    });

    // retorna el tiempo de espera
    $.espera = function(n, fn) {
        if (arguments.length === 2) {
            // two arguments, add callback
            if (!callback[n]) {
                callback[n] = [];
            }
            return callback[n].push(fn);
        } else if (arguments.length == 1) {
            return callback[n] || [];
        } else {
            return seconds;
        }
    };


    $.ausente = function(message) {
        if (message) {
            ausente = message;
            return message;
        } else {
            ausente = false;
            return ausente;
        }
    };


    $.lejos = function() {

        return ausente;
    };

})(jQuery);