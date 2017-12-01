//IE9+ compatible
;(function(){
	window.addEventListener("load", jsLazyload); //on page load execute lazyLoad function because image can be in the viewport
	window.addEventListener("scroll", jsThrottle(jsLazyload, 250)); //on window.scroll execute lazyLoad function. 250mm = maximum 4 scroll events per 1 second

	function jsLazyload() {
		var lazy_images = document.querySelectorAll("img[data-lazy]"); //get all elements with specified attribute and put them into an array
		for (var i = 0; i < lazy_images.length; i++) { //start looping the array
			if (jsViewport(lazy_images[i])) { //check if current element is in the viewport
				lazy_images[i].src = lazy_images[i].getAttribute("data-lazy"); //set the current element "src" as "data-..."
				lazy_images[i].removeAttribute("data-lazy"); //remove the current element "data-..." attribute (that will execute the css fade)
				if ((lazy_images[(i+1)]) && (lazy_images[(i+1)].getAttribute("data-lazy"))) { //if next element exist AND was not loaded already
					new Image().src = lazy_images[(i+1)].getAttribute("data-lazy"); //try to preload it (fade will go smooth for slow connections)
				}
			}
		}
	}

	function jsViewport(element) {
		var rect = element.getBoundingClientRect();
		return (rect.bottom >= 0 && rect.right >= 0 && rect.top <= (window.innerHeight || document.documentElement.clientHeight) && rect.left <= (window.innerWidth || document.documentElement.clientWidth));
	}

	function jsThrottle(callback, threshhold) {
		var last, timer;
		return function() {
			if (last && +new Date < last + threshhold) {
				clearTimeout(timer);
				timer = setTimeout(function() {
					last = +new Date;
					callback.apply(this, arguments);
				}, threshhold);
			}
			else {
				last = +new Date;
				callback.apply(this, arguments);
			}
		};
	}

	function jsDebounce(callback, delay) {
		var timer;
		return function() {
			clearTimeout(timer);
			timer = setTimeout(function() {
				callback.apply(this, arguments);
			}, delay);
		};
	}
})();