function countBits(n) {
  return n
    .toString(2) // convert to binary
    .split("")
    .filter((el) => el === "1").length;
}

console.log(countBits(0)); // 0
console.log(countBits(4)); // 1
console.log(countBits(7)); // 3
console.log(countBits(9)); // 2
