function balancedParens(num) {
  let result = [];
  function generateParens(left, right, str) {
    if (left === 0 && right === 0) {
      result.push(str);
      return;
    }
    if (left > 0) {
      generateParens(left - 1, right + 1, str + "(");
    }
    if (right > 0) {
      generateParens(left, right - 1, str + ")");
    }
  }
  generateParens(num, 0, "");
  return result;
}

console.log(balancedParens(2));
