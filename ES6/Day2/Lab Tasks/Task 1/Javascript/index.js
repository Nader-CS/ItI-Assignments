function courseGenerator(obj = {}) {
  let objDefaults = {
    courseName: "ES6",
    courseDuration: "3 Days",
    courseOwner: "javascript",
  };
  let unknownProps = Object.keys(obj).filter((key) => {
    return !Object.keys(objDefaults).includes(key); //to fill the array with keys that is not exist in defObj
  });
  if (unknownProps.length > 0) {
    throw new Error("passed invaild props");
  }
  let props = Object.assign(objDefaults, obj); // objDefaults(target)  , obj(source)

  return console.log(
    `your courseName : ${props.courseName} , your courseDuration : ${props.courseDuration} , your courseOwner : ${props.courseOwner}`
  );
}

courseGenerator({
  courseName: "ES7",
  courseDuration: "3 Days",
  courseOwner: "javascript",
});

courseGenerator({});

courseGenerator({
  courseName: "ES7",
  courseDuration: "3 Days",
  courseOwner: "javascript",
  extra: "extra",
});

courseGenerator({
  courseName: "ES7",
  courseDuration: "3 Days",
});
