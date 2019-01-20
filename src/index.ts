import { range } from 'rxjs'

let switchOn: boolean = false
let count: number = 0

const bulbs = range(1,100)

const bulbsResults = bulbs.subscribe(
    bulb => {
        for (let i = 1; i <= bulb; i++) {
            if(bulb%i===0){
                count++
            }   
        }
        switchOn = (count%2 === 0) ? switchOn = false : switchOn = true
        count = 0
        
        console.log(`Bulb n° ${bulb} is ${switchOn}`)
    }
)

bulbsResults.unsubscribe()
