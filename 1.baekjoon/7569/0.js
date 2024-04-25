var fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const splitStr = process.platform === "linux" ? "\n" : "\r";

var inputs = fs.readFileSync(filepath, "utf8").toString().trim().split(splitStr).map(s => s.split(" "))


const [m,n,h] = inputs.shift().map(Number)

const queue = [];
const boxes = Array.from(Array(h), () => Array.from(Array(n), () => Array.from(Array(m).fill(0))));


for (let i = 0; i < h; i++) {
    for (let j = 0; j < n; j++) {
        boxes[i][j] = inputs.shift().map(Number);
    }
}


let unripeTomato = 0;
for (let i = 0; i < h; i++) {
    for (let j = 0; j < n; j++) {
        for (let k = 0; k < m; k++) {
            if (boxes[i][j][k] === 0) unripeTomato++;
            if (boxes[i][j][k] === 1) queue.push([i, j, k, 0]);
        }
    }
}


const dx = [-1, 1, 0, 0, 0, 0];
const dy = [0, 0, -1, 1, 0, 0];
const dz = [0, 0, 0, 0, -1, 1];

let idx = 0;
let answer = 0;
while (queue.length> idx) {
    const [z, x, y, days] = queue[idx++]
    // 현재 위치 기준 인접한 여섯 곳 탐색할 반복문
    for (let i = 0; i < 6; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        const nz = z + dz[i];

        if(!boxes[nz] || !boxes[nz][nx] || boxes[nz][nx][ny] !== 0 )continue
            boxes[nz][nx][ny] = 1;
            queue.push([nz, nx, ny, days + 1]);
            unripeTomato--;
    }
    answer = days;
}

console.log(unripeTomato ? -1 : answer);