var fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const splitStr = process.platform === "linux" ? "\n" : "\r";

var inputs = fs.readFileSync(filepath, "utf8").toString().trim().split(splitStr)

const length = Number(inputs.shift())

for(let i =0; i<inputs.length; i = i +3){
    const size = Number(inputs[i])
    const position = inputs[i+1].split(" ").map(Number)
    const goal = inputs[i+2].split(" ").map(Number)

    console.log(f(size,position,goal))

}


function f(size,position,goal) {
    let idx = 0
    const queue = [[...position,0]]
    const matrix = Array.from(Array(size), ()=>Array(size).fill(true))
    // console.log(size,position,goal,matrix)
    const dx = [-1,1,-2,-2,2,2,-1,1]
    const dy = [2,2,1,-1,1,-1,-2,-2]

    matrix[position[1]][position[0]] = false
    if(position[0]=== goal[0] && position[1] === goal[1])return 0

    while (queue.length > idx){
        const [x,y,value] = queue[idx]

        for(let i =0; i<dx.length; i++){
            const nx = x+ dx[i]
            const ny = y+ dy[i]

            if(!matrix[ny] || !matrix[ny][nx]) continue
            if(nx=== goal[0] && ny === goal[1])return value + 1

            matrix[ny][nx] = false
            queue.push([nx,ny,value+1])
        }

        idx++
    }
    return 0
}