var fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const splitStr = process.platform === "linux" ? "\n" : "\r";
var inputs = fs.readFileSync(filepath).toString().split(splitStr);
let length = inputs.shift()


const array = []

while(length){
    length--
    let temp = []
    const [x,y,l] = inputs.shift().split(" ").map(num=>Number(num))
    temp.push([x,y,l])
    for(let i =0; i<l; i++){
        temp.push(inputs.shift().split(" ").map(num=>Number(num)))
    }

    array.push(temp)
}

array.forEach(([arr,...cabbages])=>{
    console.log(f(arr,cabbages))

})

function f(arr, cabbages) {
    const originX = Math.max(...cabbages.map(cabbage=>cabbage[0])) + 1
    const originY = Math.max(...cabbages.map(cabbage=>cabbage[1])) +1
    let farm =  Array.from(Array(originY), ()=> Array(originX).fill(0))
    let result = 0

    for(let i=0; i<cabbages.length; i++){
        const [x,y] = cabbages[i]
        farm[y][x] = 1
    }

    for(let i =0; i<originY; i++){
        for(let n=0; n<originX; n++){
            if(farm[i][n] ===1){
                bfs(n,i)
                result++
            }
        }
    }

    function bfs(x,y) {
        const direction = [[1,0],[0,1],[-1,0],[0,-1]]

        farm[y][x] = 0

        for(let i =0; i<direction.length; i++){
            const dx = x + direction[i][1]
            const dy = y + direction[i][0]

            if(!farm[dy] || !farm[dy][dx] ||farm[dy][dx] === 0 )continue;
            bfs(dx,dy)
        }

    }

    return result
}
