function parameters(x, y) {
  if (arguments.length == 2) {
    return "ok...";
  } else {
    throw Error("not allowed to receive more than or less than 2 parameter");
  }
}

console.log(parameters(2, 3, 5));
