var fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const splitStr = process.platform === "linux" ? "\n" : "\r";

var inputs = fs.readFileSync(filepath, "utf8").toString().trim().split(splitStr)

const [row,col] = inputs.shift().split(" ").map(Number)

let visited = Array.from(Array(row), () =>
    Array.from(Array(col), () => Array(2).fill(0))
);
function f(row,col,map) {
    const goalX= col -1
    const goalY = row -1
    const dx = [1,-1,0,0]
    const dy = [0,0,1,-1]
    const queue = [[0,0,0]]
    visited[0][0][0] = 1
    let idx =0


    while(queue.length > idx){
        const [x,y,isBreak] = queue[idx]

        if(x === goalX && y === goalY){
            return visited[y][x][isBreak]
        }

        for(let i=0; i<dx.length; i++){
            const [nx,ny] = [x+dx[i] , y+ dy[i]]

            if(!map[ny] || map[ny][nx] === undefined)continue

            if(map[ny][nx] ===0 && visited[ny][nx][isBreak] === 0){
                visited[ny][nx][isBreak] = visited[y][x][isBreak] + 1
                queue.push([nx,ny,isBreak])
            }else if(map[ny][nx] ===1 && isBreak === 0){
                visited[ny][nx][isBreak + 1] = visited[y][x][isBreak] + 1
                queue.push([nx,ny,isBreak + 1])
            }
        }
        idx++
    }
    return -1

}

console.log(f(row,col,inputs.map(input=>input.split("").map(Number))))