import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal;
let gemiddelde = 0
let teller = 0
do{

   getal = parseFloat(await userInput.question("Geef een getal: "))
   gemiddelde += getal
   teller++

}while((gemiddelde/teller) <= 25)


   console.log("het gemiddelde is " + (gemiddelde/teller))
   process.exit()