const prompt = require('prompt-sync')({sigint: true});

console.log("CUSOMTE DICE")

let rolls = prompt("--->")

 console.log(Math.ceil(Math.random() * rolls))
