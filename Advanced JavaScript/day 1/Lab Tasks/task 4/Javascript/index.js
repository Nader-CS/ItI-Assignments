function revreseNumbers() {
  return [].reverse.call(arguments);
  /* reverse should be called on array
     so we should call -call- [].reverse
      but we should call arguments to revese it rather than empty array
  */
}
function revreseStrings() {
  return [].reverse.apply(arguments);
  /* reverse should be called on array
     so we should call -apply- [].reverse
    but we should call arguments to revese it rather than empty array
  */
}
console.log(revreseStrings("a", "b", "c"));
console.log(revreseNumbers(1, 2, 3));
