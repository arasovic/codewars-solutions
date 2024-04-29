const dice1 = [2, 3, 4, 6, 2];
const dice2 = [4, 4, 4, 3, 3];
const dice3 = [2, 4, 4, 5, 4];

function score(dice) {
  let score = 0;
  const counts = dice.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});

  for (let key in counts) {
    if (counts[key] >= 3) {
      score += key === "1" ? 1000 : key * 100;
      counts[key] -= 3;
    }
    if (key === "1") {
      score += counts[key] * 100;
    } else if (key === "5") {
      score += counts[key] * 50;
    }
  }

  return score;
}

console.log(score(dice1)); // 0
console.log(score(dice2)); // 400
console.log(score(dice3)); // 450
