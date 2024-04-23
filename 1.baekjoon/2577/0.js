var fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const splitStr = process.platform === "linux" ? "\n" : "\r";

var input = fs.readFileSync(filepath).toString().split(splitStr).map((strNum)=>Number(strNum))

const array = Array.from({length: 10}).fill(0)
const multiplicationString = (input[0] * input[1] * input[2]).toString().split("") // 17037300

multiplicationString.forEach((num)=>array[Number(num)]++)

array.forEach((cnt)=>console.log(cnt))