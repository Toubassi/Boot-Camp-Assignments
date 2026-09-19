var popup = document.querySelector("#cookieBar");
var agree = document.querySelector("#btn");

agree.addEventListener("click", function () {
  popup.remove();
});

let unit = document.querySelector("#unit");
let dayTemps = document.querySelectorAll(".tempNumsDay");
let nightTemps = document.querySelectorAll(".tempNumsNight");

unit.addEventListener("change", function () {
  let selectedUnit = unit.value;
  if (selectedUnit === "fah") {
    for (let temp of dayTemps) {
      let cel = Number(temp.innerHTML.replace("°", ""));
      let fah = (cel * 9) / 5 + 32;
      temp.innerHTML = fah + "°";
    }
    for (let temp of nightTemps) {
      let cel = Number(temp.innerHTML.replace("°", ""));
      let fah = (cel * 9) / 5 + 32;
      temp.innerHTML = fah + "°";
    }
  } else {
    for (let temp of dayTemps) {
      let fah = Number(temp.innerHTML.replace("°", ""));
      let cel = ((fah - 32) * 5) / 9;
      temp.innerHTML = cel + "°";
    }
    for (let temp of nightTemps) {
      let fah = Number(temp.innerHTML.replace("°", ""));
      let cel = ((fah - 32) * 5) / 9;
      temp.innerHTML = cel + "°";
    }
  }
});
