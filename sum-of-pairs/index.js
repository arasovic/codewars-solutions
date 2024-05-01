function sumPairs(ints, s) {
  const map = {};
  for (let i = 0; i < ints.length; i++) {
    if (map[s - ints[i]]) {
      return [s - ints[i], ints[i]];
    }
    map[ints[i]] = true;
  }
  return undefined;
}
