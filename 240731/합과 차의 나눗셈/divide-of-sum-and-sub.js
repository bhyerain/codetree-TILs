const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);

let x = a+b;
let y = a-b;

let result1 = parseInt(x/y);
let result2 = x%y;
result2 = result2.toFixed(2);
let final = result1+result2;
console.log(final);