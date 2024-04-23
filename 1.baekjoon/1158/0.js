var fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const splitStr = process.platform === "linux" ? "\n" : "\n";

var inputs = fs.readFileSync(filepath, "utf8").toString().trim().split(splitStr)[0].split(" ")
let left = Array.from({length: Number(inputs[0])}).map((_,index)=>index+1)
const k = inputs[1]
let pointer = 0;
const result = []

while (left.length ){
    const cur = left.shift()
    if(pointer === k-1){
        result.push(cur)
        pointer = 0
    }
    else {
        pointer++
        left.push(cur)
    }
}

console.log(`<${result.join(", ")}>`)

/**
 * 1234567
 * k번째 사람을 제거
 *
 * L : 456712
 * Result : 3
 *
 * L : 7 1 2 4 5
 * Result : 3 6
 *
 * L : 4 5 7 1
 * Result : 3 6 2
 *
 * L : 1 4 5
 * Result : 3 6 2 7
 *
 * L : 4 1
 * Result : 3 6 2 7 5
 *
 * L : 4
 * Result : 3 6 2 7 5 1
 *
 * */

