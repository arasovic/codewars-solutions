function ipsBetween(start, end) {
  let startArr = start.split(".").map(Number);
  let endArr = end.split(".").map(Number);
  let result = 0;
  for (let i = 0; i < 4; i++) {
    result += (endArr[i] - startArr[i]) * Math.pow(256, 3 - i);
  }
  return result;
}
