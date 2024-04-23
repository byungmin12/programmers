// var fs = require("fs");
// const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const splitStr = process.platform === "linux" ? "\n" : "\r\n";
// var input = fs.readFileSync(filepath).toString();

// console.log(input);

function solution(s) {
  let tempArr = [
    "Time",
    "0:",
    "Go",
    "straight",
    "100m",
    "and",
    "turn",
    "right",
  ];
  let stack = [];
  let answer = [];
  let time = 0;
  for (let i = 0; i < s.length; i++) {
    if (stack.length === 0) {
      stack.push(s[i]);
      continue;
    }

    let top = stack[stack.length - 1];
    if (top === s[i]) {
      stack.push(s[i]);
    } else {
      let copyTemp = tempArr.slice();

      copyTemp[1] = time + ":";
      copyTemp[4] = stack.length + "00m";
      if (stack.length > 5) {
        copyTemp[4] = "500m";
        copyTemp[1] = time + stack.length - 5 + ":";
      }

      if (top === "S") {
        if (s[i] === "E") {
          copyTemp[7] = "left";
        }
      }
      if (top === "N") {
        if (s[i] === "W") {
          copyTemp[7] = "left";
        }
      }
      if (top === "W") {
        if (s[i] === "S") {
          copyTemp[7] = "left";
        }
      }
      if (top === "E") {
        if (s[i] === "N") {
          copyTemp[7] = "left";
        }
      }
      time = i;
      stack = [s[i]];
      answer.push(copyTemp.join(" "));
    }
  }
  console.log(answer);
}

solution("EEESEEEEEENNNN");
solution("SSSSSSWWWNNNNNN");

// 문제 설명
// 오늘의집에서 구매한 물건은 로봇이 자동 배송합니다. 이 로봇은 물건 배달지까지 내비게이션의 안내를 따라 이동합니다. 내비게이션은 다음 방향 변경 지점까지의 거리가 500m 이거나, 출발 혹은 방향 변경 직후 다음 방향 변경 지점까지의 거리가 500m 이하이면 다음 형식으로 메시지를 보냅니다.
// Time x: Go straight ym and turn direction
// * x는 내비게이션이 안내 메시지를 보내는 시간을 의미합니다. 출발 직후 시간은 0입니다. 100m 이동할 때마다 단위 시간 1만큼 소요되며 방향을 변경하는 데는 시간이 소요되지 않습니다.
// * y는 다음 방향 변경 지점까지의 직선거리입니다.
// * direction은 진행 방향 기준으로 바꾸어야 할 방향입니다. left 혹은 right중 하나입니다.
// 로봇은 x축과 y축이 서로 직교하는 2차원 평면상에서 축과 평행하게 이동하며, 로봇이 이동할 경로는 동, 서, 남, 북 (E, W, S, N) 4가지 문자로 구성된 문자열 형식으로 주어집니다. 로봇은 항상 정면을 바라본 상태로 직진합니다. 방향을 바꿀 때는, 고정된 위치에서 왼쪽 또는 오른쪽으로 90도씩 회전합니다.
// 아래 그림의 경로를 예시로 들어보겠습니다.
// ￼
// 위 그림의 경로를 표현하는 문자열은 EEESEEEEEENNNN입니다. 빨간색 화살표로 표시한 지점에서 내비게이션은 안내 메시지를 보내게 됩니다.
// * 출발 직후 300m 앞에서 오른쪽으로 방향을 바꾸어야 하므로 내비게이션은 다음과 같이 안내 메시지를 보냅니다.Time 0: Go straight 300m and turn right
// * 처음 방향 변경 직후, 100m 앞에서 왼쪽으로 방향을 바꾸어야 하므로 내비게이션은 다음과 같이 안내 메시지를 보냅니다.Time 3: Go straight 100m and turn left
// * 이번 방향 변경 뒤에, 100m만큼 직진 후 500m 앞에서 왼쪽으로 방향을 바꾸어야 하므로 내비게이션은 다음과 같이 안내 메시지를 보냅니다.Time 5: Go straight 500m and turn left
// * 남은 경로는 방향 변경 없이 직진하면 배달지에 도착하므로 내비게이션의 안내는 종료됩니다.
// 경로를 담은 문자열 path가 매개변수로 주어졌을 때, 내비게이션의 안내 메시지를 시간 순서대로 배열에 담아서 return 하도록 solution 함수를 완성해주세요.
// 단, 내비게이션의 안내 메시지가 적어도 하나 이상 있는 경우만 주어집니다.

// 제한사항
// * 3 ≤ path의 길이 ≤ 100
//     * path는 E, W, S, N으로만 구성된 문자열입니다.
//     * E와 W가 서로 붙어있는 경우는 없습니다.
//     * S와 N가 서로 붙어있는 경우는 없습니다.
//     * (E,W,S,N) 4가지 문자는 로봇이 해당 방향으로 100m만큼 이동하는 것을 의미합니다.

// 입출력 예
// path	result
// "EEESEEEEEENNNN"	["Time 0: Go straight 300m and turn right","Time 3: Go straight 100m and turn left","Time 5: Go straight 500m and turn left"]
// "SSSSSSWWWNNNNNN"	["Time 1: Go straight 500m and turn right","Time 6: Go straight 300m and turn right"]
// 입출력 예 설명
// 입출력 예 #1
// * 문제 예시와 동일합니다.
// 입출력 예 #2
// ￼
// 경로를 표현한 그림은 위와 같습니다. 빨간색 화살표로 표시한 지점에서 내비게이션은 안내 메시지를 보내게 됩니다.
// * 출발 후 100m만큼 직진 후 500m 앞에서 오른쪽으로 방향을 바꾸어야 하므로 내비게이션은 다음과 같이 안내 메시지를 보냅니다.Time 1: Go straight 500m and turn right
// * 처음 방향 변경 직후, 300m 앞에서 오른쪽으로 방향을 바꾸어야 하므로 내비게이션은 다음과 같이 안내 메시지를 보냅니다.Time 6: Go straight 300m and turn right
// * 남은 경로는 방향 변경 없이 직진하면 배달지에 도착하므로 내비게이션의 안내는 종료됩니다.
