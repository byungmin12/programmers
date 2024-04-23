var fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const splitStr = process.platform === "linux" ? "\n" : "\r\n";
var tempInput = fs.readFileSync(filepath).toString().split(splitStr);
var [length, ...b] = tempInput;
// var list = b.split("");
var input = b.map((el) => el.split(""));
// // console.log(length, area, input);

function solution(length, list) {
  let matrix = Array.from({ length }, () => Array.from({ length }).fill(false));
  let queue = [];
  function bfs(x, y, check, arr) {
    let dx = [1, 0, -1, 0];
    let dy = [0, -1, 0, 1];
    queue.push([x, y]);

    while (queue.length) {
      let [xx, yy] = queue.shift();

      for (let i = 0; i < dx.length; i++) {
        let nextX = xx + dx[i];
        let nextY = yy + dy[i];
        if (
          nextX < 0 ||
          nextX >= arr[xx].length ||
          nextY < 0 ||
          nextY >= arr[yy].length
        ) {
          continue;
        }
        if (arr[nextX][nextY] === check && !matrix[nextX][nextY]) {
          matrix[nextX][nextY] = true;
          queue.push([nextX, nextY]);
          if (arr[nextX][nextY] === "R") {
            arr[nextX][nextY] = "G";
          }
        }
      }
    }
  }
  let count = 0;
  let checkList = ["R", "G", "B"];
  for (let i = 0; i < length; i++) {
    for (let n = 0; n < length; n++) {
      if (checkList.includes(list[i][n]) && !matrix[i][n]) {
        let check = list[i][n];
        matrix[i][n] = true;
        if (list[i][n] === "R") {
          list[i][n] = "G";
        }
        bfs(i, n, check, list);
        count++;
      }
    }
  }
  matrix = Array.from({ length }, () => Array.from({ length }).fill(false));
  let blindCnt = 0;
  for (let i = 0; i < length; i++) {
    for (let n = 0; n < length; n++) {
      if (checkList.includes(list[i][n]) && !matrix[i][n]) {
        let check = list[i][n];
        matrix[i][n] = true;

        bfs(i, n, check, list);
        blindCnt++;
      }
    }
  }
  return [count, blindCnt];
}

let result = solution(length, input);
console.log(`${result[0]} ${result[1]}`);
