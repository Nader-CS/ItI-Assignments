let name = document.getElementById("name");
let gender = document.querySelectorAll("input[type='radio']");
let select = document.getElementById("select");
let submit = document.getElementById("submit");
let counter = 0;
submit.addEventListener("click", function () {
  location.assign("../HTML/index2.html");
  document.cookie = `name=${name.value};`;
  if (gender[0].checked) {
    document.cookie = `gender=male`;
  } else {
    document.cookie = `gender=female`;
  }
  document.cookie = `color=${select.value}`;
  document.cookie = `counter=${counter}`;
});
