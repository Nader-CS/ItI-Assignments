class Shape {
  constructor(width, height) {
    if (new.target == Shape) {
      throw new Error("Sorry this class is abstract");
    }
    this.height = height;
    this.width = width;
  }

  getArea() {
    return "not implmented";
  }
  getPermiter() {
    return "not implemented";
  }
  toString() {
    return `your shape has width : ${this.width} , height : ${
      this.height
    } , area : ${this.getArea()} , permiter : ${this.getPermiter()}`;
  }
  valueOf() {
    return this.getArea();
  }
}
class Rectangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }
  getArea() {
    return this.width * this.height;
  }
  getPermiter() {
    return 2 * (this.width + this.height);
  }
}
class Square extends Shape {
  constructor(width, height) {
    // yeah , they are equal :)
    super(width, height);
  }
  getArea() {
    return this.width * this.height;
  }
  getPermiter() {
    return 2 * (this.width + this.height);
  }
}
class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  getPermiter() {
    return 2 * Math.PI * this.radius;
  }
  getArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }
  toString() {
    return `your Circle info :- raduis: ${
      this.radius
    } , area : ${this.getArea()} , permiter : ${this.getPermiter()}`;
  }
}
class Triangle extends Shape {
  constructor(a, b, c) {
    super();
    this.a = a;
    this.b = b;
    this.c = c;
  }
  getPermiter() {
    return this.a + this.b + this.c;
  }
  getArea() {
    let semi_permiter = this.getPermiter() / 2;
    return Math.sqrt(
      semi_permiter *
        (semi_permiter - this.a) *
        (semi_permiter - this.b) *
        (semi_permiter - this.c)
    );
  }
  toString() {
    return `triangle info is :- a: ${this.a}  , b: ${this.b} , c:${
      this.c
    } ,  area : ${this.getArea()} , permiter : ${this.getPermiter()} `;
  }
}

/**********************************************************/
let rectangle = new Rectangle(4, 5);
console.log(rectangle.toString());

let square = new Square(4, 4);
console.log(square.toString());

let circle = new Circle(5);
console.log(circle.toString());

let triangle = new Triangle(5, 6, 7);
console.log(triangle.toString());
