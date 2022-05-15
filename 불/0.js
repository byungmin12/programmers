var fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const splitStr = process.platform === "linux" ? "\n" : "\r\n";
<<<<<<< HEAD
var tempInput = fs.readFileSync(filepath).toString().split("\n");

console.log(tempInput);
=======

var input = fs.readFileSync(filepath).toString().split(splitStr); // 개행문자로 입력을 구분한다.

let matrix = [];
let [length, ...temp] = input;

while (temp.length) {
  let [m, h] = temp.shift().split(" ");
  let cnt = 0;
  let t = [];
  while (cnt !== Number(h)) {
    t.push(temp.shift().split(""));
    cnt++;
  }
  matrix.push(t);
}

function solution(matrix) {
  let queue = [];
  let head = 0;
  let w = matrix[0].length;
  let h = matrix.length;

  for (let i = 0; i < h; i++) {
    for (let n = 0; n < w; n++) {
      if (matrix[i][n] === "*") queue.push([n, i, matrix[i][n], 1]);
    }
  }
  for (let i = 0; i < h; i++) {
    for (let n = 0; n < w; n++) {
      if (matrix[i][n] === "@") queue.push([n, i, matrix[i][n], 1]);
    }
  }
  let result = "IMPOSSIBLE";
  while (queue.length) {
    let temp = bfs(...queue.shift());
    if (typeof temp === "number") {
      result = temp;
    }
    head++;
  }
  function bfs(x, y, type, time) {
    let dx = [1, -1, 0, 0];
    let dy = [0, 0, 1, -1];

    for (let i = 0; i < dx.length; i++) {
      let nextX = x + dx[i];
      let nextY = y + dy[i];
      console.log(x, y, type, nextX, nextY, dx[i], dy[i]);
      if (nextX < 0 || nextX >= w || nextY < 0 || nextY >= h) {
        if (type === "@") {
          return time;
        } else {
          continue;
        }
      }

      if (matrix[nextY][nextX] === ".") {
        if (type === "*") {
          matrix[nextY][nextX] = "*";
          queue.push([nextY, nextX, type, time + 1]);
        } else if (type === "@") {
          matrix[y][x] = ".";
          matrix[nextY][nextX] = "@";

          queue.push([nextY, nextX, type, time + 1]);
        }
      }
    }
  }
  return result;
}

// for (let i = 0; i < matrix.length; i++) {
//   console.log(solution(matrix[i]));
// }

console.log(solution(matrix[1]));
>>>>>>> ee6beb99512cd55ba03648a4771c2578e16f05f7
