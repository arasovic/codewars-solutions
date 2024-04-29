function sumStrings(a, b) {
  // Create an empty string to hold the result
  let result = "";
  // Define a variable to represent carry
  let carry = 0;
  // Start adding from the rightmost digit of the two strings
  let i = a.length - 1;
  let j = b.length - 1;

  // Continue the loop until reaching the end of any string or there is a carry
  while (i >= 0 || j >= 0 || carry > 0) {
    // Take the digits at the respective positions or use 0 as default value
    const digitA = i >= 0 ? parseInt(a[i]) : 0;
    const digitB = j >= 0 ? parseInt(b[j]) : 0;
    // Add the two digits and the carry
    const sum = digitA + digitB + carry;
    // Append the units digit of the sum to the beginning of the result
    result = (sum % 10).toString() + result;
    // Calculate the carry
    carry = Math.floor(sum / 10);
    // Decrement the indices of both strings to proceed
    i--;
    j--;
  }

  // Remove leading zeros and return the result
  return result.replace(/^0+/, "");
}

console.log(
  sumStrings(
    "123456789012345678901234567890",
    "987654321098765432109876543210",
  ),
); // :D
console.log(sumStrings("123", "456")); // 579
console.log(sumStrings("123", "4567")); // 4790
console.log(sumStrings("123456789012", "987654321098762109876543210")); // 987654321111219876543222222
