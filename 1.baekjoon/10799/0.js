var fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const splitStr = process.platform === "linux" ? "\n" : "\r";

var inputs = fs.readFileSync(filepath, "utf8").toString().trim().split(splitStr)[0].split("")


function f(inputs) {
    let sticks = 0

    const stack = []

    for(let i =0; i<inputs.length ; i++){
        const cur = inputs[i]

        if(stack[stack.length -1] === "(" && cur === ")"){
            stack.pop()

            if(inputs[i-1]==="("){
                sticks = sticks + stack.length
            }else{
                sticks++
            }
        }else{
            stack.push(cur)
        }
    }

    return sticks
}

console.log(f(inputs))

