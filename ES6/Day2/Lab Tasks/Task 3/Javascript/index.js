let test = {
  [Symbol.replace](str) {
    if (str.length > 15) {
      return str.substring(0, 15) + "...";
    }
    return str;
  },
};
let str = "dummydummydummydummydummydummydummydummydummydummy";
console.log(test[Symbol.replace](str));
