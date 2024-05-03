var fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const splitStr = process.platform === "linux" ? "\n" : "\r";

var inputs = fs.readFileSync(filepath, "utf8").toString().trim().split(splitStr)

const length = Number(inputs.shift())

const map = inputs.map(input=> input.split(" ").map(Number))
let visited = {}

const dx = [1,-1,0,0]
const dy = [0,0,1,-1]
const queue = []

for(let i=0; i< length; i++){
    for(let n=0; n<length; n++){
        const cur = map[i][n]
        if(cur ===0 || visited.hasOwnProperty(`${n},${i}`))continue

        visited[`${n},${i}`] = true

        const island = bfs(n,i)

        for(let key in island){
            const [x,y] = island[key]

            for(let k =0; k<dx.length; k++){
                const nx = x + dx[k]
                const ny = y + dy[k]

                if(!map[ny] || map[ny][nx] === undefined || map[ny][nx] ===1)continue

                if(map[y][x] ===1 &&  map[ny][nx] === 0)queue.push([nx,ny,1,island])
            }
        }
    }
}


function bfs(startX,startY) {
    const queue = [[startX,startY]]
    let temp = {[`${startX},${startY}`]: [startX,startY]}
    let idx = 0

    while(queue.length > idx){
        const [x,y] = queue[idx]
        for(let i =0; i<dx.length; i++){
            const nx = x + dx[i]
            const ny = y + dy[i]


            if(!map[ny] || !map[ny][nx] ||  visited.hasOwnProperty(`${nx},${ny}`))continue

            visited[`${nx},${ny}`] = true
            temp[`${nx},${ny}`] = [nx,ny]

            queue.push([nx,ny])
        }

        idx++
    }

    return temp
}


let idx = 0
let result = Infinity
while(queue.length){
    const [x,y,dist,visited]= queue.shift()

    if(dist >= result)continue

    for(let i=0; i<dx.length; i++){
        const nx = x + dx[i]
        const ny = y + dy[i]

        if(!map[ny] || map[ny][nx] === undefined || visited.hasOwnProperty(`${nx},${ny}`)  )continue

        if(map[y][x] === 0 && map[ny][nx] === 1){
            result = Math.min(result, dist )
            continue
        }

        if(map[ny][nx] === 0){
            visited[`${nx},${ny}`] = true
            queue.push([nx,ny,dist+1, visited])
        }
    }
}

console.log(result)

