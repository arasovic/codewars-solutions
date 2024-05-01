const str = "fo99obar009";

function incrementString(strng) {
  const match = strng.match(/(\d+)$/);
  //find the number at the end of the string
  if (!match) return strng + "1";
  //if no number found, return the string with 1 at the end
  const number = match[0];
  // get the number
  const str = strng.slice(0, match.index);
  // get the string
  const newNumber = (parseInt(number) + 1).toString();
  // increment the number
  const diff = Math.max(number.length - newNumber.length, 0);
  // find the difference between the length of the number and the new number
  return str + "0".repeat(diff) + newNumber;
  // return the string with the new number
}

console.log(incrementString(str)); // fo99obar010
