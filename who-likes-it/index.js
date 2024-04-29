const anybody = [];
const one = ["Peter"];
const two = ["Jacob", "Alex"];
const three = ["Max", "John", "Mark"];
const four = ["Alex", "Jacob", "Mark", "Max"];

function likes(names) {
  const parts = names;
  const length = parts.length;

  const cases = [
    "no one likes this",
    `${parts[0]} likes this`,
    `${parts[0]} and ${parts[1]} like this`,
    `${parts[0]}, ${parts[1]} and ${parts[2]} like this`,
    `${parts[0]}, ${parts[1]} and ${length - 2} others like this`,
  ];

  return cases[Math.min(length, 4)];
}

console.log(likes(anybody)); // must be "no one likes this"
console.log(likes(one)); // must be "Peter likes this"
console.log(likes(two)); // must be "Jacob and Alex like this"
console.log(likes(three)); // must be "Max, John and Mark like this"
console.log(likes(four)); // must be "Alex, Jacob and 2 others like this"
