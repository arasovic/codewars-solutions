function deleteNth(arr, n) {
  let [result, count] = [[], {}];
  for (const element of arr) {
    count[element] = count[element] === undefined ? 1 : count[element] + 1;
    if (count[element] <= n) {
      result.push(element);
    }
  }
  return result;
}

console.log(deleteNth([20, 37, 20, 21], 1)); // [20,37,21]
console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3)); // [1, 1, 3, 3, 7, 2, 2, 2]
console.log(deleteNth([12, 39, 19, 39, 39, 19, 12], 1)); // [12, 39, 19, 39, 19, 12]
