function Box(height, width, length, material) {
  let noOfAllCopies = 0;
  this.height = height;
  this.width = width;
  this.length = length;
  this.material = material;
  this.content = [];
  this.add = function (book) {
    this.content.push(book);
  };
  this.delete = function (bookTitle) {
    let element = this.content.find(function (book) {
      return bookTitle == book.title;
    });
    if (element.numOfCopies != 1) {
      element.numOfCopies -= 1;
    } else {
      let index = this.content.indexOf(element);
      this.content.splice(index, 1);
    }
  };
  this.countNoBooks = function () {
    return this.content.length;
  };
  this.noOfAllCompies = function () {
    for (let i = 0; i < this.content.length; i++) {
      noOfAllCopies = noOfAllCopies + parseInt(this.content[i].numOfCopies);
    }
    return noOfAllCopies;
  };
}
function Book(
  title,
  numOfChapters,
  author,
  numOfPages,
  publisher,
  numOfCopies
) {
  this.title = title;
  this.numOfChapters = numOfChapters;
  this.author = author;
  this.numOfPages = numOfPages;
  this.publisher = publisher;
  this.numOfCopies = numOfCopies;
}

let book1 = new Book("math", "20", "nader", "200", "person", "10");
let book2 = new Book("computer", "25", "mohamed", "200", "person", "15");
let box = new Box(100, 200, 300, "palstic");
box.add(book1);
box.add(book2);
console.log(box.countNoBooks); //returns 2
console.log(box.noOfAllCompies); //returns 25
console.log(box.delete("math"));
console.log(box.content); // returns all books & book 1 noOfCopies = 9
