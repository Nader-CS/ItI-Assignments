let fruits = ["apple", "strawberry", "banana", "orange", "mango"];
/* a */
let result = fruits.every((element) => typeof element == "string");
console.log(result);
/* a */
/* b */
let result2 = fruits.some((element) => element.startsWith("a"));
console.log(result2);
/* b */
/* c */
let result3 = fruits.filter(
  (element) => element.startsWith("b") || element.startsWith("s")
);
console.log(result3);
/* c */
/* d */
let result4 = fruits.map((element) => {
  return `i love ${element}`;
});
console.log(result4);
/* d */
/* e */
result4.forEach((element) => {
  console.log(element);
});
/* e */
