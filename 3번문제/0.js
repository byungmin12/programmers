var fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const splitStr = process.platform === "linux" ? "\n" : "\r\n";
var input = fs.readFileSync(filepath).toString();

console.log(input);




문제 설명
템플릿 문자열이란, 문자열 안에 존재하는 변수를 사용해 문자열을 작성하고, 실제 사용할 때 변수에 값을 대입해 사용하는 문자열을 말합니다.
다음과 같은 문자열이 있다고 가정해 보겠습니다.
this is {template}
{template} is {state}
문자열에 존재하는 {}로 감싼 단어들은 모두 변수입니다. 위 예시에서는 {template}과 {state} 두 변수가 있습니다. 이 문자열을 실제로 사용하기 위해서는 {template}과 {state}에 특정 값을 대입해 사용해야 합니다. 아래 표처럼 변수에 값을 대입하면 다음과 같은 문자열이 됩니다.
변수	값
template	string
state	changed
this is string
string is changed
아래 표의 값을 변수에 대입하면 다음과 같은 문자열이 됩니다.
변수	값
template	string
state	{template}
this is string
string is {template}
모든 변수에 값을 대입한 뒤 새로운 변수가 있다면, 변수가 없어질 때까지 대입해야 합니다. 따라서 결과는 아래와 같습니다.
this is string
string is string
아래 표의 값을 변수에 대입하면, 변수에 값을 대입하는 과정이 무한히 반복됩니다.
변수	값
template	{state}
state	{template}
이와 같이 무한히 반복하며 변수를 대입해야 할 경우 변수에 값을 대입하지 않고 종료합니다. 따라서 결과는 아래와 같습니다.
this is {template}
{template} is {state}
템플릿 문자열 tstring과 변수와 값을 담은 2차원 문자열 배열 variables가 주어졌을 때, 변수에 값을 대입한 결과 문자열을 return 하도록 solution 함수를 완성해주세요.
단, variables에 없는 변수에는 값을 대입하지 않습니다.

제한사항
* 1 ≤ tstring의 길이 ≤ 300,000
    * tstring은 공백(" "), 알파벳 소문자, 변수로 이루어져 있습니다.
* 1 ≤ variables의 길이 ≤ 100,000
    * variables의 원소는 ["A", "B"] 형태입니다.
    * A는 변수명을 나타내며, B는 변수에 대입할 값입니다.
    * A는 단어입니다.
    * B는 단어 혹은 변수입니다.
    * A에 등장하는 단어는 모두 다른 단어입니다.
* 단어는 다음 조건을 만족하는 문자열입니다.
    * 1 ≤ 단어의 길이 ≤ 10
    * 단어는 알파벳 소문자로만 이루어진 문자열입니다.
* 변수는 다음 조건을 만족하는 문자열입니다.
    * 3 ≤ 변수의 길이 ≤ 12
    * 변수는 단어를 {}으로 감싼 문자열입니다.
    * 예시) {a}, {word}

입출력 예
tstring	variables	result
"this is {template} {template} is {state}"	[["template", "string"], ["state", "changed"]]	"this is string string is changed"
"this is {template} {template} is {state}"	[["template", "string"], ["state", "{template}"]]	"this is string string is string"
"this is {template} {template} is {state}"	[["template", "{state}"], ["state", "{template}"]]	"this is {template} {template} is {state}"
"this is {template} {template} is {state}"	[["template", "{state}"], ["state", "{templates}"]]	"this is {templates} {templates} is {templates}"
"{a} {b} {c} {d} {i}"	[["b", "{c}"], ["a", "{b}"], ["e", "{f}"], ["h", "i"], ["d", "{e}"], ["f", "{d}"], ["c", "d"]]	"d d d {d} {i}"
입출력 예 설명
입출력 예 #1
