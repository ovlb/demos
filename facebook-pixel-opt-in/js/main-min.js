"use strict";!function(){var t=document.querySelector(".js-test-button"),e=document.querySelector(".js-fb-opt-out"),n=document.querySelector(".js-fb-opt-in"),c=document.querySelector(".js-test-output"),i=function t(e){var n=document.createElement("li");n.innerText=e,c.appendChild(n)};t.addEventListener("click",function(t){"opt-in"===localStorage.getItem("fb-pixel-status")?(window.fbq("trackCustom","PixelOptInTest"),i("Event `PixelOptInTest` abgeschickt.")):i("Die Userin hat der Verwendung des Pixels nicht zugestimmt.")}),e.addEventListener("click",function(){i("Opt Out-Button geklickt.")}),n.addEventListener("click",function(){i("Opt In-Button geklickt.")})}();