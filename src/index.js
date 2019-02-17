"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var switchOn = false;
var countClicks = 0;
var bulbs = rxjs_1.range(1, 100);
var bulbsResults = bulbs.subscribe(function (bulb) {
    for (var i = 1; i <= bulb; i++) {
        if (bulb % i === 0) {
            countClicks++;
        }
    }
    switchOn = (countClicks % 2 === 0) ? switchOn = false : switchOn = true;
    countClicks = 0;
    console.log("Is the Bulb n\u00B0 " + bulb + " on? " + switchOn);
});
bulbsResults.unsubscribe();
