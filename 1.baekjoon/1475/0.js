var fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const splitStr = process.platform === "linux" ? "\n" : "";

var input = fs.readFileSync(filepath).toString().trim().split('').map((strNum)=>Number(strNum))

// (6은 9를 뒤집어서 이용할 수 있고, 9는 6을 뒤집어서 이용할 수 있다.)
const stickers = Array.from({length:10}).fill(0)
let sixNine = 0
input.forEach((sticker)=>{
    sticker === 6 || sticker ===9 ? sixNine++ : stickers[sticker]++
})

console.log(Math.max(...stickers,Math.ceil(sixNine/2)))