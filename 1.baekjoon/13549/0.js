var fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const splitStr = process.platform === "linux" ? "\n" : " ";

var inputs = fs.readFileSync(filepath, "utf8").toString().trim().split(" ")

const soobin = Number(inputs.shift())
const sister = Number(inputs.shift())

const n = Math.max(soobin,sister) + 1

const map =  Array.from(Array(n+1)).fill(0)

const visited = {}
visited[soobin] = true
const queue = [[soobin, 0,visited]]

let result = Infinity
let idx = 0;
const calculates = [ (x)=> 2*x, (x)=> x-1, (x)=> x+1 ,]
while(queue.length > idx){
    const [cur, sec, visited] = queue[idx]
    idx++
    if(sister === cur){
        result = Math.min(result, sec)
        continue
    }

    if(sec > result)continue

    for(let i=0; i<calculates.length; i++){
        let next = calculates[i](cur)

        if( map[next] === undefined  || visited.hasOwnProperty(next))continue

        visited[next] = true
        queue.push([next,i ===0? sec : sec+1 , visited ])
    }
}

console.log(result)