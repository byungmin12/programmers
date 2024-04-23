var fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const splitStr = process.platform === "linux" ? "\n" : "\r";

var inputs = fs.readFileSync(filepath, "utf8").toString().trim().split(splitStr)

const length = inputs[0]
const nums = [...inputs.slice(1)]

function f(nums) {
    const stack = []

    nums.forEach((strNum)=>{
        const num = Number(strNum)
        if(num === 0)stack.pop()
        else stack.push(num)
    })
    return stack.length ? stack.reduce((acc,cur)=>acc+cur) : 0
}

console.log(f(nums))
