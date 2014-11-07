/*
 * Bootstrap Device Detector - jQuery plugin for responsive device detection
 *
 * Copyright (c) 20013 A. K. M. Rezaul Karim<titosust@gmail.com>
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   https://github.com/titosust/Bootstrap-device-detector
 *
 * Version:  1.0.0
 *
 */

(function($) {
	$.fn.deviceNow = function(onResize) {
		var env = ["xs", "sm", "md", "lg"],
			device=env[3],
			callBacks=[],
			timer=null;

		var detect=function(){
			var $el = $('<div>');
		    $el.appendTo($('body'));
		    for (var i = env.length - 1; i >= 0; i--) {
		        $el.addClass('hidden-'+env[i]);
		        if ($el.is(':hidden')) {
		        	device=env[i];
		            break;
		        }
		    }
		    $el.remove();
		    return device;
		};
		
		var resizeComplete=function(){
			var prev=device,
				dev=detect();
			if(dev!=prev && callBacks.length){
				$.each(callBacks,function(i){
					callBacks[i](dev);
				});	
			}
		};
		if (onResize && "function" == typeof(onResize)) {
			callBacks.push(onResize);
			$(window).resize(function(event) {
				clearTimeout(timer); //use timer to track resize complete
	    		timer = setTimeout(resizeComplete, 300);
			});
		}
		return detect();
	};
})(jQuery);