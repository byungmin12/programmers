var fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const splitStr = process.platform === "linux" ? "\n" : "\r";

var inputs = fs.readFileSync(filepath, "utf8").toString().trim().split(splitStr)
const [row , col] = inputs.shift().split(" ").map(Number)
const icebergs = inputs.map(input=> input.split(" ").map(Number))
let icebergsVisited

const dx = [1,-1,0,0]
const dy = [0,0,1,-1]
function f(row,col,icebergs) {
    const map = {}
    let year = 0
    for(let i =1; i<row-1; i++){
        for(let n =1; n<col-1; n++){
            if(icebergs[i][n] !== 0)map[`${n} ${i}`] = [n,i]
        }
    }
    let visited

    while(Object.keys(map).length > 0){
        year++
        visited = Array.from(Array(row), () =>
            Array.from(Array(col)).fill(false)
        );

        for(let key in map){
            const [x,y] = map[key]
            for(let i =0; i<dx.length;i++){
                if(visited[y+dy[i]][x+dx[i]]){
                    continue
                }
                if(icebergs[y+dy[i]][x+dx[i]] === 0 && icebergs[y][x] > 0){
                    icebergs[y][x]--
                    visited[y][x] = true
                }
            }

            if(icebergs[y][x] === 0 ){
                delete map[key]
            }
        }

        let result = 0

        icebergsVisited =   Array.from(Array(row), () => new Array(col).fill(false))
        for(let key in map){
            const [x,y] = map[key]

            if(icebergsVisited[y][x] === false ){
                bfs(x,y)
                result++
            }
        }

        if(result >1 ){
            return year
        }
    }

    return 0
}

console.log(f(row,col,icebergs))
function bfs(x,y) {
    icebergsVisited[y][x] = true

    for(let i=0; i<dx.length; i++){
        const nx = x + dx[i]
        const ny = y + dy[i]

        if(!icebergsVisited[ny] || icebergsVisited[ny][nx] === undefined || icebergsVisited[ny][nx] === true || icebergs[ny][nx] ===0 )continue
        bfs(nx,ny,icebergsVisited)
    }
}
