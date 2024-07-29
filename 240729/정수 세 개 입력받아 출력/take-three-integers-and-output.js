const fs = require("fs")

let input = fs.readFileSync(0).toString();
input = split(" ");
input = input.split("\n");

let a = Number(input[0]);
let b = Number(input[1]);
let c = Number(input[2]);

console.log(a, b, c);