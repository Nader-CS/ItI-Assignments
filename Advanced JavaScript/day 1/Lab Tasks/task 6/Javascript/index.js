let obj = {
  id: "SD-10",
  location: "SV",
  addr: "123 st.",
  salary: 123,
  getSetGen: function () {
    for (let key in this) {
      if (typeof this[key] != "function") {
        for (let i = 0; i < 2; i++) {
          if (i == 0) {
            Object.defineProperty(
              this,
              `set${key.substring(0, 1).toUpperCase()}${key.substring(
                1,
                key.length
              )}`,
              {
                value: function (value) {
                  this[key] = value;
                },
              }
            );
          } else {
            Object.defineProperty(
              this,
              `get${key.substring(0, 1).toUpperCase()}${key.substring(
                1,
                key.length
              )}`,
              {
                value: function () {
                  return this[key];
                },
              }
            );
          }
        }
      }
    }
  },
};
obj.getSetGen();
console.log(obj);

let user = { name: "Ali", age: 10 };
obj.getSetGen.apply(user);
console.log(user);
