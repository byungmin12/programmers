var fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const splitStr = process.platform === "linux" ? "\n" : "\r\n";
var tempInput = fs.readFileSync(filepath).toString().split("\n");

console.log(tempInput);
