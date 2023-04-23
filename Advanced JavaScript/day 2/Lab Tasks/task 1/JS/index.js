function List(start, end, step) {
  var list = [];
  if (start > end) {
    throw new Error("Start is greater than end");
  }
  function fill() {
    for (var i = start; i <= end; i += step) {
      list.push(i);
    }
  }
  fill();
  this.getList = function () {
    return list;
  };
  this.listPop = function () {
    if (list.length > 0) {
      list.pop();
    } else {
      throw Error("sorry the length is empty");
    }
  };
  this.listAppend = function (value) {
    if (!isFinite(value)) {
      throw new Error("not valid value");
    }
    if (value == list[list.length - 1] + step) {
      list.push(Number(value));
      console.log(`${value} is added`);
    } else {
      throw new Error("this value violate the sequence constraints");
    }
  };
}
let test = new List(0, 6, 2);
console.log(test.getList());
test.listAppend("8");
console.log(test.getList());
test.listPop();
console.log(test.getList());
