const arr = [0, 1, 0, 3, 12];

//solution 1
function moveZeros(arr) {
  let zeros = arr.filter((el) => el === 0);
  let nonZeros = arr.filter((el) => el !== 0);
  return [...nonZeros, ...zeros];
}

//solution 2
function moveZeros2(arr) {
  return arr.filter((el) => el !== 0).concat(arr.filter((el) => el === 0));
}

console.log(moveZeros(arr)); // [1, 3, 12, 0, 0]
