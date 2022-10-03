const prompt = require('prompt-sync')({sigint: true});

/*
we're working with a 6 sided dice

rigged side: 6

1 = 1/7
2 = 1/7
3 = 1/7
4 = 1/7
5 = 1/7
6 = 2/7

roll a 7 sided dice 
1-6 dice w to 6s

*/

let rigged = Number(prompt("Enter a side you would like to rig betweeen 1 - 6 : "))

let roll = Math.ceil(Math.random()*7)

 console.log("Actual roll: " + roll)

if (roll === 7){
    console.log(rigged)
} else {
    console.log(roll)
}