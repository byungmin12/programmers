var fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const splitStr = process.platform === "linux" ? "\n" : "\r";

var inputs = fs.readFileSync(filepath, "utf8").toString().trim().split(splitStr);


const strings = inputs[0].split("")
const commands = inputs.slice(2).map((str)=>str.split(" "))
const left = [...strings]
const right = []
commands.forEach((command)=>{
    const [key, word] = command
    if(key === "L" && left.length )right.push(left.pop())
    if(key === "D" && right.length) left.push(right.pop())
    if(key==="B" && left.length )left.pop()
    if(key === "P")left.push(word)
})

console.log([...left,...right.reverse()].join(""))
