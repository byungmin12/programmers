// 54. Spiral Matrix
// Medium

// 8451

// 893

// Add to List

// Share
// Given an m x n matrix, return all elements of the matrix in spiral order.

// Example 1:

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]
// Example 2:

// Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]

// Constraints:

// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 10
// -100 <= matrix[i][j] <= 100
// Accepted
// 820,880
// Submissions
// 1,916,525
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let result = [];
  let direction = ["right", "bottom", "left", "top"];
  let startXPoint = 0;
  let startYPoint = 0;
  let endXPoint = matrix[0].length - 1;
  let endYPoint = matrix.length - 1;

  while (
    matrix[startYPoint] !== undefined &&
    matrix[startYPoint][startXPoint] !== undefined &&
    matrix[startYPoint][startXPoint] !== "done"
  ) {
    for (let i = startXPoint; i < matrix[startYPoint].length; i++) {
      if (matrix[startYPoint][i] === "done") {
        continue;
      } else {
        result.push(matrix[startYPoint][i]);
        matrix[startYPoint][i] = "done";
      }
    }
    for (let i = 0; i < matrix.length; i++) {
      if (matrix[i][endXPoint] === "done") {
        continue;
      } else {
        result.push(matrix[i][endXPoint]);
        matrix[i][endXPoint] = "done";
      }
    }
    for (let i = matrix[endYPoint].length - 1; i >= 0; i--) {
      if (matrix[endYPoint][i] === "done") {
        continue;
      } else {
        result.push(matrix[endYPoint][i]);
        matrix[endYPoint][i] = "done";
      }
    }
    for (let i = endYPoint; i >= 0; i--) {
      if (matrix[i][startXPoint] === "done") {
        continue;
      } else {
        result.push(matrix[i][startXPoint]);
        matrix[i][startXPoint] = "done";
      }
    }

    startXPoint = startXPoint + 1;
    startYPoint = startYPoint + 1;
    endXPoint = endXPoint - 1;
    endYPoint = endYPoint - 1;
  }
  return result;
};

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  const res = []
  while(matrix.length){
    const first = matrix.shift()
    res.push(...first)
    for(const m of matrix){
      let val = m.pop()
      console.log(val)
      if(val)
        res.push(val)
      m.reverse()
    }
    matrix.reverse()
  }
  return res
};

const solution = function (matrix){
  // [[1,2,3],[4,5,6],[7,8,9]]
  const res = []
  while(matrix.length){
    const first = matrix.shift() //[1,2,3] // [8,7]

    //첫번째 배열 그대로 넣음
    res.push(...first)

    for(const m of matrix){ //[4,5,6],[7,8,9] // [5,4]
      // m = [4,5,6] // m =[7,8,9]
      const value = m.pop() //6 // 9 // 4

      if(value)res.push(value)

      m.reverse() // [5,4] // [8,7]
    }
    matrix.reverse() // [[8,7],[5,4]]
  }
  return res
}