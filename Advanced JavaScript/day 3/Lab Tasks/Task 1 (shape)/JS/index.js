function Shape(height, width) {
  if (this.constructor == Shape) {
    throw new Error("sorry this class is abstract");
  }
  Object.defineProperty(this, "width", {
    value: width,
    writable: false,
    configurable: false,
    enumerable: false,
  });
  Object.defineProperty(this, "height", {
    value: height,
    writable: false,
    configurable: false,
    enumerable: false,
  });
  Object.defineProperty(this, "toString", {
    value: function () {
      if (this.constructor == Rectangle) {
        console.log(
          `your triangle height is : ${this.height} , width:${
            this.width
          } , area : ${this.area()} , permiter :${this.perimeter()}`
        );
      }
      if (this.constructor == Square) {
        console.log(
          `your square height is : ${this.height} , width:${
            this.width
          } , area : ${this.area()} , permiter :${this.perimeter()}`
        );
      }
    },
    writable: false,
    configurable: false,
    enumerable: false,
  });
  Object.defineProperty(this, "valueOf", {
    value: function () {
      return this.area();
    },
  });
}
Rectangle.count = 0; //static member
function Rectangle(height, width) {
  //comment this if you want to test valueOf
  if (this.constructor == Rectangle) {
    Rectangle.count++;
    if (Rectangle.count > 1) {
      throw new Error("Sorry you can't create more than 1");
    }
  }

  Shape.call(this, height, width);
  Object.defineProperty(this, "area", {
    value: function () {
      return this.height * this.width;
    },
    writable: false,
    configurable: false,
    enumerable: false,
  });
  Object.defineProperty(this, "perimeter", {
    value: function () {
      return 2 * (this.width + this.height);
    },
    writable: false,
    configurable: false,
    enumerable: false,
  });
}

Square.count = 0;
function Square(height, width) {
  //   if (this.constructor == Square) {
  //     Square.count++;
  //     if (Square.count > 1) {
  //       throw new Error("Sorry you can't create more than 1");
  //     }
  //   }
  Rectangle.call(this, height, width);
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;
Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

let rect = new Rectangle(100, 200);
rect.toString();
let sqr = new Square(300, 400);
sqr.toString();
//uncomment this if you want to test valueOf
// let rect2 = new Rectangle(300, 400);
// rect2.toString();
// console.log(rect + rect2);
