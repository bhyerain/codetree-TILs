const fs = require("fs")

let input = fs.readFileSync(0).toString();
let arr = input.split("\n");
let [a, b] = arr[0].split(" ");
let c = Number(arr[1]);
console.log(a, b, c);