function adding() {
  let sum = 0;
  if (arguments.length == 0 || arguments.length == 1) {
    throw new Error("you should pass at least 2 parameters");
  }
  for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] != "number") {
      throw new Error("you should pass numbers only");
    }
    sum += arguments[i];
  }
  return sum;
}

console.log(adding("2", "3"));
