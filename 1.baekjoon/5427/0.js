var fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const splitStr = process.platform === "linux" ? "\n" : "\r";

var inputs = fs.readFileSync(filepath, "utf8").toString().trim().split(splitStr)

const length = inputs.shift()
const arguments = []

while(inputs.length){
    const temp = []
    const [x,y] = inputs.shift().split(" ").map(Number)
    for(let i =0; i<y;i++)temp.push(inputs.shift().split(""))

    arguments.push([[x,y],[...temp]])
}


arguments.forEach((arg)=>{
    console.log(f(arg[0],arg[1]))
})



function f(size,map) {
    const [col,row] = size
    const fires = []
    const dx = [0,1,0,-1]
    const dy = [1,0,-1,0]
    const failText = "IMPOSSIBLE"
    const queue = []

    for(let i=0; i<row;i++){
        for(let n=0; n<col; n++){
            if(map[i][n]=== "*")fires.push([i,n,0])
            if(map[i][n]=== "@")queue.push([i,n,0])
        }
    }

    queue.push(...fires)

    let idx = 0
    while(queue.length > idx){
        const [x,y,move] = queue[idx]
        const cur = map[x][y]

        if(cur === "@")map[x][y] = true

        for(let i=0; i<dx.length; i++){
            const nx = x + dx[i]
            const ny = y + dy[i]
            if(!map[nx] || !map[nx][ny]){
                if(cur === "*")continue
                if(cur === "@")return move +1
                continue
            }
            const next = map[nx][ny]
            if(map[nx][ny]=== true)continue
            if(next === "#")continue
            if(next === "*")continue
            if(next === cur)continue

            map[nx][ny] = cur
            queue.push([nx,ny,move+1])
        }
        idx++
    }
    return failText
}