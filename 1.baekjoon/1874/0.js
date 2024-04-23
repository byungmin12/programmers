var fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const splitStr = process.platform === "linux" ? "\n" : "\r";

var inputs = fs.readFileSync(filepath, "utf8").toString().trim().split(splitStr)
const length = Number(inputs[0])
const nums = inputs.slice(1).map(num=>Number(num))

const stack = []

let result = []
let stackNum  = 1
const temp = []

for(let i =0; i<length; i++){
    const cur = nums[i]

    while(stackNum <= cur){
        stack.push(stackNum)
        stackNum++
        result.push("+")
    }
    const pop = stack.pop()
    result.push("-")

    if(cur !== pop){
        result = ["NO"]
        break
    }
}
console.log(temp)
console.log(result.join("\n"))


/*
1 2 3 4

1 2 / 4 3

1 2 5 6 / 4 3

1 2 5 / 4 3 6

1 2 5 7 8 / 4 3 6

1 2 5 7 8 6 3 4

* */