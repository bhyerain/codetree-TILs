const fs = require("fs")

let input = fs.readFileSync(0).toString();
input.split(" ", "\n");



let a = Number(input[0]);
let b = input.split(" ");
b = Number(input[2]);
let c = input.split("\n");
c = Number(input[4]);


console.log(a, b, c);