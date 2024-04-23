var fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const splitStr = process.platform === "linux" ? "\n" : "\r";

var inputs = fs.readFileSync(filepath, "utf8").toString().trim().split(splitStr)

const length = Number(inputs.shift())
const tops = inputs[0].split(" ").map(num=>Number(num))

const result = [0]
const stack = [
    {
        index: 1,
        value: tops[0]
    }
]

for(let i =1; i< length; i++){
    const item = {
        index: i+1,
        value: tops[i]
    }

    while(stack.length >0 && stack[stack.length -1 ].value < tops[i]){
        stack.pop()
    }

    if(stack.length === 0){
        result.push(0)
    } else{
        result.push(stack[stack.length -1].index)
    }

    stack.push(item)
}

console.log(result.join(" "))

