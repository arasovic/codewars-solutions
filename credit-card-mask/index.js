const test1 = "4556364607935616";
const test2 = "64607935616";
const test3 = "1";
const test4 = "";
const test5 = "11111";
const test6 = "Skippy";
const test7 = "Nananananananananananananananana Batman!";

function maskify(cc) {
  return cc.slice(0, -4).replace(/./g, "#") + cc.slice(-4);
}

console.log(maskify(test1)); // '############5616'
console.log(maskify(test2)); // '#######5616'
console.log(maskify(test3)); // '1'
console.log(maskify(test4)); // ''
console.log(maskify(test5)); // '11111'
console.log(maskify(test6)); // 'Skippy'
console.log(maskify(test7)); // '####################################man!'
