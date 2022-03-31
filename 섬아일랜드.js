function solution(board) {
  let countOfIsland = 0;
  let dx = [1, 0, -1, 0, 1, -1, -1, 1];
  let dy = [0, 1, 0, -1, 1, 1, -1, -1];
  let islands = [...board];

  function dfs(x, y) {
    for (let i = 0; i < dx.length; i++) {
      if (
        islands[x + dx[i]] !== undefined &&
        islands[x + dx[i]][y + dy[i]] !== undefined &&
        islands[x + dx[i]][y + dy[i]] !== 0
      ) {
        islands[x + dx[i]][y + dy[i]] = 0;
        dfs(x + dx[i], y + dy[i]);
      }
    }
  }
  for (let i = 0; i < islands.length; i++) {
    for (let n = 0; n < islands.length; n++) {
      if (islands[i][n] === 1) {
        console.log(i, n);
        countOfIsland++;
        dfs(i, n);
        // console.log(i, n);
      }
    }
  }
  return countOfIsland;
}

let arr = [
  [1, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 0, 0],
];

console.log(solution(arr));
