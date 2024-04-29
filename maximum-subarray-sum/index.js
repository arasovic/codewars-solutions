// (kadane's algorithm)
function maxSequence1(arr) {
  let maxSum = 0;
  let currentSum = 0;
  for (const element of arr) {
    currentSum = Math.max(element, currentSum + element);
    maxSum = Math.max(currentSum, maxSum);
  }
  return maxSum;
}
