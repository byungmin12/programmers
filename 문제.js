// 인풋으로 A , B 가 주어진다.
// A는 'SUN","MON","WEN",'WED','THU,,"FRI",'SAT' 중 하나가 들어오며
// 각각 요일을 나타낸다 .
// B는 1~10000000 까지의 자연수가 들어온다.

// 오늘이 A요일일때 B일 후의 요일을 A형식의 문자로 리턴해라.

function solution(A, B) {
  let engine = true;
  let date = ["SUN", "MON", "WEN", "THU", "FRI", "SAT"];
  let rest = B;
  while (engine) {
    rest = rest % 7;
    if (rest < 7) {
      engine = false;
    }
  }
  return date[date.indexOf(A) + rest];
}

console.log(solution("THU", 23)); // "SAT"
