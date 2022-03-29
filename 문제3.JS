// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
// https://www.lintcode.com/problem/1604/
function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  // 두수의 최대 값 어떤 두수냐 자리수를 더했을 때 같은 값
  // 위의 값이 없으면 -1 리턴해라
  //[51,71,17,42]면 두수를 더할 수 있음 여기서 두수는 첫번째 배열 요소의 두수
  // 5와 1임
  // 200,000 // 1,000,000,000
  //자리수 더하기
  // let sumArr = []
  // A.forEach((el)=>{
  //     let sum = Math.floor(el/10) + (el % 10)
  //     sumArr = [...sumArr,sum]
  // })
  // console.log(sumArr)
  // 숫자의 범위가 있음 ...
  let map = new Map();
  let reuslt = Number.MIN_SAFE_INTEGER;
  A.forEach((el) => {
    let sumDigit = sumOfDigit(el);
    if (map.has(sumDigit)) {
      //막 더하면 안됨 더했을때를 알아야함
      let max = Math.max(...map.get(sumDigit));
      let min =
        Math.min(...map.get(sumDigit)) === max
          ? 0
          : Math.min(...map.get(sumDigit));
      let sum = max + el;
      if (sum >= max + min) {
        map.set(sumDigit, [max, el]);
      }
    } else {
      map.set(sumDigit, [el]);
    }
  });
  // 가장 큰 수 두개를 더해야함
  let maxSum = -1;
  map.forEach((el) => {
    if (el.length >= 2) {
      let temp = el[0] + el[1];
      if (temp >= maxSum) {
        maxSum = temp;
      }
    }
  });
  return maxSum;
}

function sumOfDigit(num) {
  let sum = 0;
  while (num) {
    sum = sum + (num % 10); //마지막 자리
    num = Math.floor(num / 10); // 나머지
  }
  return sum;
}
