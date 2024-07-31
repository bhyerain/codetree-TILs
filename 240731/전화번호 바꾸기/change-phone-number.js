const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split("-");

let x = Number(input[0]);
let y = Number(input[1]);
let z = Number(input[2]);

console.log(`0${x}-${z}-${y}`);