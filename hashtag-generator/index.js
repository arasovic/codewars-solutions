function generateHashtag(str) {
  const hashtag =
    "#" +
    str
      .trim()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("");
  return hashtag.length > 140 || hashtag === "#" ? false : hashtag;
}

console.log(generateHashtag("hello world")); // #HelloWorld
console.log(generateHashtag("hello world!")); // #HelloWorld
console.log(generateHashtag("hello world! ")); // #HelloWorld
console.log(generateHashtag("hello world! ".repeat(10))); // false
console.log(generateHashtag("hello world! ".repeat(10) + "a")); // #HelloWorldHelloWorldHelloWorldHelloWorldHelloWorldHelloWorldHelloWorldHelloWorldHelloWorldHelloWorldA
console.log(generateHashtag("hello world! ".repeat(10) + "a".repeat(100))); // false
