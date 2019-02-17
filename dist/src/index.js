import { range } from 'rxjs';
let switchOn = false;
let countClicks = 0;
const bulbs = range(1, 100);
const bulbsResults = bulbs.subscribe(bulb => {
    for (let i = 1; i <= bulb; i++) {
        if (bulb % i === 0) {
            countClicks++;
        }
    }
    switchOn = (countClicks % 2 === 0) ? switchOn = false : switchOn = true;
    countClicks = 0;
    console.log(`Is the Bulb n° ${bulb} on? ${switchOn}`);
});
bulbsResults.unsubscribe();
//# sourceMappingURL=index.js.map