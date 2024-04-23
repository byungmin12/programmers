var fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const splitStr = process.platform === "linux" ? "\n" : "\r";

var inputs = fs.readFileSync(filepath, "utf8").toString().trim().split(splitStr);

let length = Number(inputs[0])
let x = Number(inputs[2])
let arr = inputs[1].split(` `).map((num)=>Number(num)).filter((num)=> num <= x).sort((a,b)=> a-b)
let result = 0
for(let i=0; i<arr.length; i++){
    for(let n = length -1 ; n> i ; n--){
        let sum = arr[n] + arr[i]
        if(sum < x){
            length = n + 1
            break
        }
        if(sum === x){
            result++
        }
    }
}

console.log(result)

