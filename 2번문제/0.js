var fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const splitStr = process.platform === "linux" ? "\n" : "\r\n";
var input = fs.readFileSync(filepath).toString();

console.log(input);




문제 설명
음성 인식 기술을 사용하면 사람이 말하는 음성 데이터를 문자 데이터로 변환할 수 있습니다. 당신은 오늘의집에 전화로 들어온 주문을 자동으로 처리하기 위해, 음성 데이터를 문자 데이터로 변환하려 합니다. 당신은 이 문자 데이터를 쓰기 전에 먼저 반복적으로 사용된 말버릇 패턴을 삭제해야 합니다. 말버릇 패턴이란 문자 데이터에서 가장 많이 등장하는 길이 1 이상의 패턴이며, 문자 데이터에 등장하는 해당 패턴을 모두 삭제하면 됩니다. 단, 이러한 패턴은 대소문자를 구분하지 않으며, 가장 많이 등장한 패턴이 여러 개일 경우 그러한 패턴을 모두 삭제합니다.
다음은 문자 데이터에서 말버릇 패턴을 삭제하는 예시입니다.
삭제 전	삭제 후
"abcabcdefabc"	"def"
"abxdeydeabz"	"xyz"
	•	"abcabcdefabc"에서 "abc"가 3번 등장하며, 가장 많이 등장한 패턴입니다. "abc"를 삭제하면 "def"가 남게 됩니다.
* "abxdeydeabz"에서 "ab"와 "de"가 2번 등장하며, 가장 많이 등장한 패턴입니다. "ab"와 "de"를 삭제하면 "xyz"가 남게 됩니다.
음성 데이터를 문자 데이터로 변환한 문자열 call이 매개변수로 주어집니다. 이때, 가장 많이 등장한 말버릇을 삭제한 결과를 문자열로 return 하도록 solution 함수를 완성해주세요.

제한사항
* 3 ≤ call의 길이 ≤ 1,000
* call은 알파벳 대소문자로만 구성되어 있습니다.
* 가장 많이 등장하는 말버릇 패턴을 삭제했을 때, 남은 문자열의 길이가 1 이상인 경우만 입력으로 주어집니다.

입출력 예
call	result
"abcabcdefabc"	"def"
"abxdeydeabz"	"xyz"
"abcabca"	"bcbc"
"ABCabcA"	"BCbc"
입출력 예 설명
입출력 예 #1
문제 예시와 같습니다.
입출력 예 #2
문제 예시와 같습니다.
입출력 예 #3
"abcabca"에서 가장 많이 등장한 패턴은 "a"입니다. "a"를 삭제하면 "bcbc"가 남게 됩니다.
입출력 예 #4
대소문자가 다른 점을 제외하면 3번 예시와 같습니다. "ABCabcA" 에서 가장 많이 등장한 패턴은 대소문자를 구분하지 않으므로 "A"/"a"입니다. "A"/"a"를 삭제하면 "BCbc"가 남게 됩니다

