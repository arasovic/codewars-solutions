// (kadane's algorithm)
function maxSequence(arr) {
  let maxSum = 0;
  let currentSum = 0;
  for (const element of arr) {
    currentSum = Math.max(element, currentSum + element);
    maxSum = Math.max(currentSum, maxSum);
  }
  return maxSum;
}

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log(maxSequence([-2, -1, -3, -4, -1, -2, -1, -5, -4])); // 0
console.log(maxSequence([-2, -1, -3, -4, -1, -2, -1, -5, 4])); // 4
