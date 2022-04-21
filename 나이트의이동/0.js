var fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const splitStr = process.platform === "linux" ? "\n" : "\r\n";
var tempInput = fs.readFileSync(filepath).toString().split("\n");

var [length, ...b] = tempInput;
let input = b.map((el) => {
  let temp = el.split(" ");
  temp = temp.map((el) => Number(el));
  return temp;
});

let list = [];
for (let i = 1; i <= Number(length); i++) {
  let temp = [...input.slice((i - 1) * Number(3), i * Number(3))];
  list.push(temp);
}
// size
// location
// goal

function solution(length, list) {
  let limit = list[0][0];
  let matrix = Array.from(Array(limit), () => Array(limit).fill(0));
  let count = 0;
  // return matrix;

  function bfs(x, y) {
    let queue = [];
    let dx = [1, -1, 2, 2, 1, -1, -2, -2];
    let dy = [2, 2, 1, -1, -2, -2, -1, 1];
    matrix[x][y] = 1;
    queue.push([x, y]);

    while (queue.length) {
      const [xx, yy] = queue.shift();
      if (xx === list[2][0] && yy === list[2][1]) {
        count = matrix[xx][yy] - 1;
      }
      for (let i = 0; i < dx.length; i++) {
        let nextX = xx + dx[i];
        let nextY = yy + dy[i];
        if (
          nextX < 0 ||
          nextX >= limit ||
          nextY < 0 ||
          nextY >= limit ||
          matrix[nextX][nextY] !== 0
        ) {
          continue;
        }
        matrix[nextX][nextY] += matrix[xx][yy] + 1;
        queue.push([nextX, nextY]);
      }
    }
  }
  bfs(list[1][0], list[1][1]);
  return count;
}

for (let i = 0; i < length; i++) {
  console.log(solution(length, list[i]));
}
