let obj = new Object();
obj.height = 2;
obj.width = 3;
obj.area = function () {
  return this.height * this.width;
};
obj.perimeter = function () {
  return 2 * (this.height + this.width);
};
obj.displayInfo = function () {
  return `The rectangle height & width = (${this.height},${
    this.width
  }) respectively , The rectagle area is ${obj.area()} , the rectangle perimeter is ${obj.perimeter()} `;
};
console.log(obj.displayInfo());
