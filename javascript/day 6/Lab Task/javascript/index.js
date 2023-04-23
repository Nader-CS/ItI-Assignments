let band = document.getElementById("band");
let artist = document.getElementById("artist");
let xhr = new XMLHttpRequest();
let interval;
let interval2;
xhr.open("GET", "../rockbands.json");
xhr.send();
xhr.responseType = "json";
xhr.onload = function () {
  let stdoption = document.createElement("option");
  stdoption.value = "default";
  stdoption.innerHTML = "Please select";
  band.appendChild(stdoption);
  if (xhr.readyState == 4 && xhr.status == 200) {
    for (let elment in xhr.response) {
      let option = document.createElement("option");
      option.value = elment;
      option.innerHTML = elment;
      band.appendChild(option);
    }

    interval = setInterval(function () {
      if (band.selectedIndex != 0) {
        //    console.log();
        artist.innerHTML = "";
        let stdoption2 = document.createElement("option");
        stdoption2.value = "default";
        stdoption2.innerHTML = "Please select";
        artist.appendChild(stdoption2);
        for (let elment of xhr.response[band.value]) {
          let option = document.createElement("option");
          option.value = elment.name;
          option.innerHTML = elment.name;
          artist.appendChild(option);
        }

        clearInterval(interval);
      }

      interval2 = setInterval(function () {
        if (artist.selectedIndex != 0 && artist.selectedIndex > 0) {
          location.assign(
            xhr.response[band.value][artist.selectedIndex - 1].value
          );

          clearInterval(interval2);
        }
      }, 500);
    }, 500);
  } else {
    console.log("something went wrong");
  }
};
xhr.onerror = function () {
  alert("Network error");
};
