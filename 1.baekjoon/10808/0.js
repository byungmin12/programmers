var fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const splitStr = process.platform === "linux" ? "\n" : "\r\n";

var input = fs.readFileSync(filepath).toString().split("")

const array = Array.from({length: 26}).fill(0)

const startAlphabetCode = "A".charCodeAt()
input.forEach((alphabet)=> array[alphabet.toUpperCase().charCodeAt() - startAlphabetCode]++)

console.log(array.join(" "))

