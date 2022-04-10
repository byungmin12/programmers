var fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const splitStr = process.platform === "linux" ? "\n" : "\r\n";
var input = fs.readFileSync(filepath).toString();

let isConnected = [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1],
];

let isConnected2 = [
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1],
];

var findCircleNum = function (isConnected) {
  if (isConnected.length === 1) return 1;
  let visited = new Array(isConnected.length).fill(false);
  let province = 0;

  for (let i = 0; i < isConnected.length; i++) {
    if (!visited[i]) {
      dfs(visited, i, isConnected);
      province++;
    }
  }
  return province;
};

function dfs(visited, arrive, isConnected) {
  visited[arrive] = true;
  for (let i = 0; i < isConnected.length; i++) {
    let depart = isConnected[arrive][i];
    if (depart === 1 && visited[i] === false) {
      dfs(visited, i, isConnected);
    }
  }
  return;
}

console.log(findCircleNum(isConnected));
console.log(findCircleNum(isConnected2));
