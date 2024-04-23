var fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const splitStr = process.platform === "linux" ? "\n" : "\r\n";

var input = fs.readFileSync(filepath).toString().split(" ").map((value)=>Number(value)); // 개행문자로 입력을 구분한다.
const calculates = [(a,b,c)=>(a+b) % c , (a,b,c)=>((a%c) + (b%c))%c,(a,b,c) =>(a * b) % c , (a,b,c)=>((a%c) * (b%c))%c ]
// 첫째 줄에 (A+B)%C, 둘째 줄에 ((A%C) + (B%C))%C, 셋째 줄에 (A×B)%C, 넷째 줄에 ((A%C) × (B%C))%C를 출력한다.
for(let i =0; i<calculates.length; i++ ){
  console.log(calculates[i](input[0],input[1],input[2]))
}

