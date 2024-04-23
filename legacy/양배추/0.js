var fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const splitStr = process.platform === "linux" ? "\n" : "\r\n";
var tempInput = fs.readFileSync(filepath).toString().split(splitStr);
var [length, ...b] = tempInput;
// var list = b.split("");
var c = b.map((el) => el.split(" "));
var input = c.map((el) => el.map((num) => Number(num)));

function solution(lengthArr, list, floor) {
  let containers = [];
  for (let i = 1; i <= lengthArr[2]; i++) {
    let temp = [...list.slice((i - 1) * lengthArr[1], i * lengthArr[1])];
    containers.push(temp);
  }
  let queue = [];
  let count = 0;

  function bfs(x, y, z) {
    let dx = [1, 0, -1, 0];
    let dy = [0, -1, 0, 1];
    let dz = [-1, 1];

    queue.push([x, y, z]);

    while (queue.length) {
      let [xx, yy, zz] = queue.shift();

      let check = { a: false, b: false };
      let nextX = 0;
      let nextY = 0;
      for (let i = 0; i < dx.length; i++) {
        nextX = xx + dx[i];
        nextY = yy + dy[i];
        if (
          nextX < 0 ||
          nextX >= lengthArr[1] ||
          nextY < 0 ||
          nextY >= lengthArr[0]
        ) {
          check.a = false;
          continue;
        }
        if (containers[zz][nextX][nextY] === 0) {
          console.log("ergergerg1", [nextX, nextY, zz]);
          containers[zz][nextX][nextY] = 1;
          queue.push([nextX, nextY, zz]);
          check.a = true;
        }
      }

      for (let n = 0; n < dz.length; n++) {
        let nextZ = zz + dz[n];
        if (nextZ < 0 || nextZ >= containers.length) {
          check.b = false;
          continue;
        }

        if (containers[nextZ][xx][yy] === 0) {
          containers[nextZ][xx][yy] = 1;
          queue.push([xx, yy, nextZ]);
          check.b = true;
        }
      }

      if (check.b || check.a) {
        count++;
      }
    }
  }
  for (let i = 0; i < lengthArr[2]; i++) {
    for (let n = 0; n < lengthArr[1]; n++) {
      for (let j = 0; j < lengthArr[0]; j++) {
        if (!containers[i][n].includes(0)) {
          continue;
        }
        if (containers[i][n][j] === 1) {
          console.log(n, j, i);
          bfs(n, j, i);
          count++;
        }
      }
    }
  }
  return count;
}

console.log(
  solution(
    length.split(" ").map((el) => Number(el)),
    input
  )
);
