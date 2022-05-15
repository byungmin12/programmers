const { BADFLAGS } = require("dns");
var fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const splitStr = process.platform === "linux" ? "\n" : "\r\n";
var input = fs.readFileSync(filepath).toString().split(splitStr); // 개행문자로 입력을 구분한다.

let [M, N, H] = input[0].split(" ").map(Number);

let matrix = [];

for (let i = 1; i < N * H + 1; i = i + N) {
  matrix.push(input.slice(i, i + N).map((el) => el.split(" ").map(Number)));
}

function solution(M, N, H, matrix) {
  let queue = [];
  let head = 0;
  for (let i = 0; i < H; i++) {
    for (let j = 0; j < N; j++) {
      for (let k = 0; k < M; k++) {
        if (matrix[i][j][k] === 1) {
          queue.push([i, j, k, 1]);
        }
      }
    }
  }

  while (queue.length !== head) {
    bfs(...queue[head]);
    head++;
  }

  function bfs(h, y, x, time) {
    let dx = [1, -1, 0, 0, 0, 0];
    let dy = [0, 0, 1, -1, 0, 0];
    let dh = [0, 0, 0, 0, 1, -1];

    for (let i = 0; i < dx.length; i++) {
      let nextX = x + dx[i];
      let nextY = y + dy[i];
      let nextH = h + dh[i];

      if (
        nextX < 0 ||
        nextX >= M ||
        nextY < 0 ||
        nextY >= N ||
        nextH < 0 ||
        nextH >= H
      ) {
        continue;
      }

      if (matrix[nextH][nextY][nextX] === 0) {
        matrix[nextH][nextY][nextX] = time + 1;
        queue.push([nextH, nextY, nextX, time + 1]);
      }
    }
  }

  let result = 1;
  for (let i = 0; i < H; i++) {
    for (let j = 0; j < N; j++) {
      for (let k = 0; k < M; k++) {
        if (matrix[i][j][k] === 0) {
          return -1;
        }
        result = Math.max(result, matrix[i][j][k]);
      }
    }
  }

  return result - 1;
}

console.log(solution(M, N, H, matrix));
