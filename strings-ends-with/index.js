const [string1, endsWith1] = ["abcde", "cde"];
const [string2, endsWith2] = ["abcde", "abc"];

function solution(str, ending) {
  return str.endsWith(ending);
}

console.log(solution(string1, endsWith1)); // true
console.log(solution(string2, endsWith2)); // false
