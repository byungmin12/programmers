var fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const splitStr = process.platform === "linux" ? "\n" : "\r";

var inputs = fs.readFileSync(filepath, "utf8").toString().trim().split(splitStr)

const closeBrackets = {
 ")" : "(",
    "]": "["
}

const open = ["[" , "("]

function f(input) {
    const brackets = input.replace(/[^()\[\]]/g, '').split("")

    const stack = []

    for(let n=0; n<brackets.length;n++){
        const cur = brackets[n]
        if(open.includes(cur)){
            stack.push(cur)
        }else{
            if(closeBrackets[cur] === stack[stack.length -1]){
                stack.pop()
            }else{
                return "no"
            }
        }
    }

    return stack.length ===0 ? "yes" : "no"
}

for(let i=0; i<inputs.length-1; i++){
    console.log(f(inputs[i]))
}