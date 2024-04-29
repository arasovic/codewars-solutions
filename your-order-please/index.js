const string1 = "is2 Thi1s T4est 3a";
const string2 = "4of Fo1r pe6ople g3ood th5e the2";
const string3 = "";

function order(words) {
  return words
    .split(" ")
    .sort((a, b) => a.match(/\d/) - b.match(/\d/))
    .join(" ");
}

console.log(order(string1)); // 'Thi1s is2 3a T4est'
console.log(order(string2)); // 'Fo1r the2 g3ood 4of th5e pe6ople'
console.log(order(string3)); // ''
