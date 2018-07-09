## About Lazy Load type scripts
Basically this kind of scripts called "Lazy Load" are improving:
* web page load time - by not waiting for the all images to load before displaying the webpage;
* client computer responsiveness - by not occupying client computer resources (cpu, ram) with the elements that are not viewed;
* client-server internet data usage - by not downloading images that are not viewed (usefull for mobile);

The images source (src) attribute is replaced with an 1x1 pixel transparent GIF or PNG file or they BASE64 equivalent. The original image is only loaded when client scroll the web page and the image becomes visible in the screen (is in viewport).
I recommend this type of scripts for web pages that contain more then 10 images with width bigger then 300 pixels.

## About this script: simple-lazyload
They are many Lazy Load javascripts but I just wanted to make one with the minimal code, yet full functionality. Simple lazy load for images is has very simple code, it's using pure vanilla javascript and had no need for any external library (like jQuery). 

This script futures are:
* Internet Explorer 9+ compatible
* image fade effect animation in when loading original image (for CSS3 browsers. IE10+)
* next image will preload for smooth fade effect for the slow internet connections
* scroll overflow event protection (by default using Throttle method, Debounce method is optional)

## Browsers support
Tested with IE9-11; Firefox 47-56; Chrome 51

## How to use
Take a look at "/docs/simple-lazyload-demo.htm" source code

Steps explained:
1. Load the simple-lazyload.css in page head
2. Replace your images "src" with transparent 1x1 pixels GIF or PNG image (or BASE64 equivalent)
3. Add "data-lazy" attribute to images pointing to their source
3. Load the simple-lazyload.js in the head or before body end (preferred)

## Demo
### /docs/simple-lazyload-demo.htm
* Simple Lazyload Demo: https://eliz82.github.io/lib-simple-lazyload/simple-lazyload-demo.htm

Contain a demo with some included code explanations:
* function jsLazyload, is the main function that load the original image. Once original image is loaded, data-src is removed from the image for the image to not be loaded more then one time;
* function jsViewport, is checking if image have reached in the screen (viewport);
* function jsThrottle, is stooping the jsLazyload being executed more then one time in a specified time interval (250 means that the function will be executed maximum 4 times in 1 second);
* function jsDebounce, is executing the jsLazyload only once per event (after the event stop);

### /docs/scroll-events-overflow.htm
* Scroll Overflow Demo: https://eliz82.github.io/lib-simple-lazyload/scroll-events-overflow.htm

This is a script demo to demonstrate the effectiveness of scroll event overflow protection. The demo page is counting and comparing the number of scroll events in a page.
* *debounced events* VS *throttled events* VS *normal events*

Some comparative data after testing:

| Browser       | Scroll events no. |
| ------------- |:-----------------:|
| Chrome 51     | +                 |
| IE 11         | ++                |
| IE 9          | +++               |
| Firefox 47    | ++++              |

It seems that some newer browsers have already implemented protection inside (like Chrome 51), but others (like Firefox 47) generate a huge number of events while scrolling the page (window.scroll event). So for IE9 and Firefox 47 is a good idea to implement some scroll events protection.

<img src="https://raw.githubusercontent.com/eliz82/simple-lazyload/master/docs/scroll-events-compare.png" />

## Bibliography
Some documentation that I have read while making this script

Lazyload: <br>
http://robinosborne.co.uk/2016/05/16/lazy-loading-images-dont-rely-on-javascript/ //very simple vanilla js lazyload script <br>
https://davidwalsh.name/lazyload-image-fade //how to fade the image <br>

Event Throttle or Debounce methods: <br>
http://unscriptable.com/2009/03/20/debouncing-javascript-methods/ //first example of using debounce <br>
http://benalman.com/projects/jquery-throttle-debounce-plugin/ //debounce and throttle functions <br>
https://remysharp.com/2010/07/21/throttling-function-calls //debounce and throttle functions <br>
https://css-tricks.com/debouncing-throttling-explained-examples/ //debounce and throttle functions, and demos <br>
https://davidwalsh.name/javascript-debounce-function //debounce function <br>
http://joshbroton.com/hooking-up-to-the-window-onscroll-event-without-killing-your-performance/ //set Interval method <br>
http://stackoverflow.com/questions/15996941/google-chrome-has-high-cpu-usage-for-my-scripts //set Interval with clear method <br>
https://www.ignoredbydinosaurs.com/posts/244-throttling-window-onscroll/ //set Date method <br>
http://joji.me/en-us/blog/how-to-develop-high-performance-onscroll-event //set Timeout method <br>
