var fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const splitStr = process.platform === "linux" ? "\n" : "\r";

var inputs = fs.readFileSync(filepath, "utf8").toString().trim().split(splitStr)


const n = inputs.shift()
const matrix = inputs.map(input => input.split(""))
const colorBlindness = [...matrix].map((m)=>m.map(value=>value === "G" ? "R" : value ))

const queue = []

function bfs(x,y,color,arr, isBlind = false) {

    const dx = [0,1,0,-1]
    const dy = [1,0,-1,0]

    queue.push([x , y])

    while(queue.length){
        const [x,y] = queue.shift()

        for(let i=0; i<dx.length; i++){
            const nx = x+ dx[i]
            const ny = y+ dy[i]

            if(!arr[ny] || !arr[ny][nx]  )continue
            if(arr[ny][nx] !== color) continue

            arr[ny][nx] = false

            queue.push([nx,ny])
        }
    }
}
let result = 0
let b = 0

for(let i=0; i<matrix.length; i++){
    for(let n=0;n<matrix[i].length; n++){
        if(matrix[i][n]){
            const check = matrix[i][n]
            matrix[i][n] = false
            bfs(n,i,check,matrix)
            result++
        }

        if(colorBlindness[i][n]){
            const check = colorBlindness[i][n]
            colorBlindness[i][n] = false
            bfs(n,i,check,colorBlindness,true)
            b++
        }
    }
}

console.log(result,b)