const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);

let x = a+b;
let y = a-b;

let result = x/y;

console.log(result.toFixed(2));