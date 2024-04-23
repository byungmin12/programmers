var fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const splitStr = process.platform === "linux" ? "\n" : "\r";

var inputs = fs.readFileSync(filepath, "utf8").toString().trim().split(splitStr);

function f(commands) {
    const left = []
    const right = []
    const operators = ["<", ">", "-"]

    for(let i=0; i<commands.length; i++){
        const cur = commands[i]
        if(cur===operators[0] && left.length)right.push(left.pop())
        if(cur===operators[1] && right.length)left.push(right.pop())
        if(cur === operators[2] && left.length)left.pop()

        if(!operators.includes(cur))left.push(cur)
    }
    return [...left,...right.reverse()].join("")
}

for(let i=1; i<inputs.length; i++){
    console.log(f(inputs[i].split("")))
}