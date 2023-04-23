window.onload = function () {
  console.log("i'm here");
  let info = document.getElementById("text");
  info.style.color = getCookie("color");
  console.log(`color:${getCookie("color").toLowerCase()}`);
  info.innerHTML = `
welcome ${getCookie("name")} you have visited {${getCookie("counter")} times}
`;
  document.cookie = `counter=${parseInt(getCookie("counter")) + 1}`;
  let img = document.getElementById("gender");
  if (getCookie("gender") == "male") {
    img.setAttribute("src", "../images/1.jpg");
  } else {
    img.setAttribute("src", "../images/2.jpg");
  }
};

function getCookie(name) {
  let matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
