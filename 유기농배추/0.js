var fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const splitStr = process.platform === "linux" ? "\n" : "\r\n";
var tempInput = fs.readFileSync(filepath).toString().split(splitStr);
// var [length, b, ...c] = tempInput;
// var area = b.split(" ");
// var input = c.map((el) => el.split(" "));
// // console.log(length, area, input);

function solution(length, area, input) {
  let matrix = Array.from({ length: Number(area[0]) }, () =>
    new Array(Number(area[1])).fill(0)
  );

  for (let i = 0; i < area[2]; i++) {
    matrix[Number(input[i][0])][Number(input[i][1])] = 1;
  }

  let queue = [];
  function bfs(x, y) {
    let dx = [1, 0, -1, 0];
    let dy = [0, -1, 0, 1];
    queue.push([x, y]);

    while (queue.length) {
      let [xx, yy] = queue.shift();

      for (let i = 0; i < dx.length; i++) {
        let nextX = xx + dx[i];
        let nextY = yy + dy[i];
        // if (
        //   nextX <= 0 ||
        //   nextX > Number(area[0]) ||
        //   nextY < 0 ||
        //   nextY > Number(area[1])
        // )
        //   continue;
        if (
          matrix[xx + dx[i]] !== undefined &&
          matrix[xx + dx[i]][yy + dy[i]] !== undefined &&
          matrix[xx + dx[i]][yy + dy[i]] === 1
        ) {
          matrix[nextX][nextY] = 0;
          queue.push([nextX, nextY]);
        }
      }
    }
  }
  let count = 0;
  for (let i = 0; i < area[2]; i++) {
    if (matrix[Number(input[i][0])][Number(input[i][1])] === 1) {
      matrix[Number(input[i][0])][Number(input[i][1])] = 0;
      bfs(Number(input[i][0]), Number(input[i][1]));
      count++;
    }
  }
  return count;
}

// console.log(solution(length, area, input));

let [length, ...c] = tempInput;
let temp = c.map((el) => el.split(" "));

if (length === 1) {
  let [area, input] = temp;
  console.log(solution(length, area, input));
} else {
  let idx = [];
  for (let i = 0; i < temp.length; i++) {
    if (temp[i].length === 3) idx.push(i);
  }
  for (let i = 0; i < idx.length; i++) {
    console.log(
      solution(length, temp[idx[i]], temp.slice(idx[i] + 1, idx[i + 1]))
    );
  }
}
