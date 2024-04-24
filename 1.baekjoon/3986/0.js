var fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const splitStr = process.platform === "linux" ? "\n" : "\r";

var inputs = fs.readFileSync(filepath, "utf8").toString().trim().split(splitStr)


function f(input) {
    const words = input.split("")
    const stack = [words[0],words[1]]

    if(stack[0] === stack[1]){
        stack.pop()
        stack.pop()
    }

    for(let i =2; i<words.length; i++){
        const word = input[i]

        if(stack[stack.length -1] === word){
            stack.pop()
        }
        else stack.push(word)

    }
    return stack.length === 0 ? 1 : 0
}

console.log(inputs.reduce((acc,cur)=>{
    return acc + f(cur)
},0))
