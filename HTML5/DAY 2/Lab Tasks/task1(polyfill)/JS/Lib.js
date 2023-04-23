function getCookie(name) {
  if (name == undefined) {
    throw new Error("Soory you must pass the name of cookie thats you want");
  } else {
    let cookie = document.cookie;
    let cookieArr = cookie.split("; ");
    for (let i of cookieArr) {
      if (i.split("=")[0] == name) {
        return i.split("=")[1];
      }
    }
    throw new Error("Sorry this cookie does not exist");
  }
}
function hasCookie(name) {
  if (name == undefined) {
    throw new Error(
      "Soory you must pass the name of cookie that you want to check"
    );
  } else {
    let cookie = document.cookie;
    let cookieArr = cookie.split("; ");
    for (let i of cookieArr) {
      if (i.split("=")[0] == name) {
        return true;
      }
    }
    return false;
  }
}
function createCookie(name, value) {
  if (name == undefined || value == undefined) {
    throw new Error("sorry you must pass both name & value parameters");
  }
  if (hasCookie(name)) {
    throw new Error("sorry this cookie exist");
  }
  document.cookie = `${name}=${value};`;
  console.log("cookie has been created");
}

function deleteCookie(name) {
  if (name == undefined) {
    throw new Error(
      "Soory you must pass the name of cookie that you want to delete"
    );
  } else {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
    console.log(`cookie ${name} has been deleted `);
  }
}

function setCookie(name, value) {
  if (name == undefined || value == undefined) {
    throw new Error("Soory you must pass the name and value");
  }
  if (!hasCookie(name)) {
    throw new Error("this cookie does not exist");
  } else {
    document.cookie = `${name}=${value};`;
    console.log(`cookie ${name} has been changed `);
  }
}
