var fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const splitStr = process.platform === "linux" ? "\n" : "\r";

var inputs = fs.readFileSync(filepath, "utf8").toString().trim().split(splitStr)
const [row , col] = inputs.shift().split(" ").map(Number)
const icebergs = inputs.map(input=> input.split(" ").map(Number))


const map = {}

for(let i =1; i<row-1; i++){
    for(let n =1; n<col-1; n++){
        if(icebergs[i][n] !== 0)map[`${n} ${i}`] = [n,i]
    }
}

const dx = [1,-1,0,0]
const dy = [0,0,1,-1]
let visited = Array.from(Array(row), () =>
    Array.from(Array(col)).fill(false)
);
let result = 0
for(let key in map){
    const [x,y] = map[key]
    let isConnected = false
    for(let i =0; i<dx.length;i++){
        if(visited[y+dy[i]][x+dx[i]])continue
        if(icebergs[y+dy[i]][x+dx[i]] === 0 && icebergs[y][x] > 0){
            icebergs[y][x]--
            visited[y][x] = true
            isConnected = true
        }
    }

    if(icebergs[y][x] === 0 ){
        delete map[key]
    }
    if(isConnected)result++
}

visited = Array.from(Array(row), () =>
    Array.from(Array(col)).fill(false)
);
result = 0

for(let key in map){
    const [x,y] = map[key]
    let isConnected = false
    for(let i =0; i<dx.length;i++){
        if(visited[y+dy[i]][x+dx[i]])continue
        if(icebergs[y+dy[i]][x+dx[i]] === 0 && icebergs[y][x] > 0){
            icebergs[y][x]--
            visited[y][x] = true
            isConnected = true
        }
    }

    if(icebergs[y][x] === 0 ){
        delete map[key]
    }
    if(isConnected)result++
}

console.log(map,result)
