let arrayRange = (...arr) => {
  let array = [...arr];
  if (arr.length == 0) {
    alert("sorry the array is empty");
    return;
  }
  let min = Math.min(...array);
  let max = Math.max(...array);
  return [min, max];
};
let values = [5, 4, 3, 2, 6, 1, 50, 70, 21];
let result = arrayRange(...values);
console.log(`min value : ${result[0]} , max value : ${result[1]}`);
