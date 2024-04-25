var fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const splitStr = process.platform === "linux" ? "\n" : "\r";

var inputs = fs.readFileSync(filepath, "utf8").toString().trim().split(splitStr)[0].split("")


function f(inputs) {

    const stack = []

    for(let i=0; i<inputs.length; i++){
        const cur = inputs[i]
        if(cur === "(" || cur === "["){
            stack.push(cur)
        }else{
            const top = stack[stack.length -1]
            const reverse = cur ===")" ? "(" : "["
            const point = cur ===")" ? 2 : 3

            if(top === reverse){
                stack.pop()
                stack.push(point)
            }else{
                let sum = 0
                while(1){
                    const pop = stack.pop()
                    if(typeof  pop === "number"){
                        sum += pop
                    }else if(pop === reverse){
                        stack.push(sum * point)
                        break
                    }else{
                        return 0
                    }
                }
            }
        }
    }
    const result = stack.reduce((acc,cur)=>acc+cur)
    return typeof  result === "number" ? result : 0
}

console.log(f(inputs))
