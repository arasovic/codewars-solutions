const arr1 = [20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5];
const arr2 = [1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5];
const arr3 = [20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5];
const arr4 = [10];
const arr5 = [1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1];
const arr6 = [5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10];

//XOR solution
function findOdd1(A) {
  let result = 0;
  A.forEach((num) => {
    result ^= num;
  });
  return result;
}

//Clear solution
function findOdd(A) {
  const obj = {};
  A.forEach((num) => {
    if (obj[num]) {
      delete obj[num];
    } else {
      obj[num] = 1;
    }
  });
  return parseInt(Object.keys(obj)[0]);
}

console.log(findOdd(arr1)); // 5
console.log(findOdd(arr2)); // -1
console.log(findOdd(arr3)); // 5
console.log(findOdd(arr4)); // 10
console.log(findOdd(arr5)); // 10
console.log(findOdd(arr6)); // 1
