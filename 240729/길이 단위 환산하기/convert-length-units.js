const fs = require("fs")
let n = Number(fs.readFileSync(0).toString());
let ft = n*30.48;
console.log(ft.toFixed(1));