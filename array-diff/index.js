// solution 1
function arrayDiff(a, b) {
  return a.filter((el) => !b.includes(el));
}

// solution 2
function arrayDiff1(a, b) {
  return a.filter((el) => b.indexOf(el) === -1);
}

console.log(arrayDiff([1, 2], [1])); // [1,3]
console.log(arrayDiff([1, 2, 2, 2, 3], [2])); // [1,3]
