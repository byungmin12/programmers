//  게임을 끝내기 위해 플레이어는 N개의 미션을 완료해야 합니다.
//  임무는 0에서 N-1까지 번호가 매겨져 있습니다. K번째 미션에는 난이도를 나타내는 정수 D[K]가 할당되어 있습니다.
//  하루 동안 다음 두 가지 규칙에 따라 임무를 원하는 만큼 수행할 수 있습니다.
// • 임무는 지정된 순서대로 수행해야 합니다. 즉, 선행 임무가 모두 이미 완료된 경우에만 임무를 수행할 수 있습니다.
// • 같은 날에 수행된 두 임무의 난이도 차이는 정수 X보다 커서는 안 됩니다. 다음과 같은 함수를 작성하십시오.
//  function solution(D,X)는 게임의 모든 임무를 완료하는 데 필요한 최소 일수를 반환합니다.

//  예: 1. 주어진 D = [5, 8, 2, 7] 및 X = 3, 함수는 3을 반환해야 합니다.
// 처음 두 개의 임무는 첫째 날, 세 번째 임무는 둘째 날, 마지막 임무는 수행할 수 있습니다.
// 셋째 날. 짧은 시간에 모든 임무를 완료하는 것은 불가능합니다.

// 2. D = [2, 5, 9, 2, 1, 4] 및 X = 4일 때 함수는 3을 반환해야 합니다.
// 처음 두 임무는 첫째 날에, 세 번째 임무는 둘째 날에 수행할 수 있습니다. 3일차에 남은 미션을 모두 수행합니다..

// 이 두 경우 모두에서 모든 임무를 완료하는 데 필요한 최소 일수는 3입니다. N개의 정수 배열 D와 정수 X가 주어지면 모든 임무를 완료하는 데 필요한 최소 일수를 반환합니다.

// 3. D = [1, 12, 10, 4, 5, 2] 및 X = 2일 때 함수는 4를 반환해야 합니다.
// 첫 번째 미션은 첫 번째 날에, 다음 두 개의 미션은 두 번째 날에, 네 번째와 다섯 번째 미션은 세 번째 날에,
// 마지막 남은 미션은 네 번째 날에 수행할 수 있습니다. 이보다 더 짧은 시간에 모든 임무를 완료하는 것은 불가능합니다.
//다음 가정에 대한 효율적인 알고리즘을 작성하십시오.

// 제한사항
// • N은 [1~200,000] 범위 내의 정수입니다.
// • X는 [0 ~1,000,000,000] 범위 내의 정수입니다.
// • 배열 D의 각 요소는 [1 ~ 1,000,000,000] 범위 내의 정수입니다.

function solution(D, X) {
  let count = [];
  let arr = [...D];
  let ch = [];
  while (D.length) {
    let temp = D.shift();
    let temp2 = D[0];
    if (Math.abs(temp - temp2) > X || temp2 === undefined) {
      ch.push(temp);
      count.push(ch);
      ch = [];
    } else {
      ch.push(temp);
    }
  }
  return count;
}

console.log("solution", solution([5, 8, 2, 7], 3));
console.log("solution", solution([1, 12, 10, 4, 5, 2], 2));
console.log("solution", solution([2, 5, 9, 2, 1, 4], 4));

// return 3
function solution2(D, X) {
  let min = D[0];
  let max = D[0];
  let day = 1;

  for (let i = 1; i < D.length; i++) {
    if (Math.abs(D[i] - min) <= X && Math.abs(D[i] - max) <= X) {
      min = Math.min(D[i], min);
      max = Math.max(D[i], max);
    } else {
      min = D[i];
      max = D[i];
      day++;
    }
  }
  return day;
}

console.log(solution2([5, 8, 2, 7], 3)); // return 3
console.log(solution2([2, 5, 9, 2, 1, 4], 4)); // return 3
console.log(solution2([1, 12, 10, 4, 5, 2], 2)); //return 4
