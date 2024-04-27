var fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const splitStr = process.platform === "linux" ? "\n" : "\r";

var inputs = fs.readFileSync(filepath, "utf8").toString().trim().split(splitStr)

const length = Number(inputs.shift())

for(let i=0; i<inputs.length; i = i+ 2){
    const size = Number(inputs[i])

    const choices = inputs[i+1].split(" ").map(Number)
    console.log(f(size,choices))
}

function f(size,choices) {
    let visited = Array(size).fill(false)
    let done = Array(size).fill(false)

    let result = 0

    for(let i=0; i<size; i++){
        if(!visited[i])dfs(choices[i]-1, i)
    }

    function dfs(node) {
        visited[node] = true;
        const next = choices[node] - 1

        if (!visited[next]) dfs(next);
        else if (!done[next]) {
            for (let i = next; i !== node; i = choices[i] -1) {
                result += 1;
            }

            result += 1;
        }
        done[node] = true;
    }
    return size - result
}