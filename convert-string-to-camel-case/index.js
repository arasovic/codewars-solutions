const phrase = "";
const phrase1 = "the-stealth-warrior";
const phrase2 = "The_Stealth_Warrior";
const phrase3 = "A-B-C";

// with regex
function toCamelCase(str) {
  return str.replace(/[-_](.)/g, (match, group) => group.toUpperCase());
}

// without regex
function toCamelCase2(str) {
  let result = "";

  let word = "";
  for (const element of str) {
    const char = element;
    if (char === "_" || char === "-") {
      if (word.length > 0) {
        result += word.charAt(0).toUpperCase() + word.slice(1);
        word = "";
      }
    } else {
      word += char;
    }
  }

  if (word.length > 0) {
    result += word.charAt(0).toUpperCase() + word.slice(1);
  }

  return result;
}

console.log(toCamelCase(phrase)); // ""
console.log(toCamelCase(phrase1)); // "theStealthWarrior"
console.log(toCamelCase(phrase2)); // "TheStealthWarrior"
console.log(toCamelCase(phrase3)); // "ABC"
