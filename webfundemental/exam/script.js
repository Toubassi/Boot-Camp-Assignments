let showMore = document.getElementById("showMore");
let mainCar = document.getElementById("mainCar");

function remove(showMore) {
  showMore.remove();
}

function change() {
  document.getElementById("mainCar").src = "./pics/WebFund/blue-super-car.png";
}

var bookingBtn1 = document.getElementById("bookingBtn1");
var available1 = document.querySelector(".booking1");

var bookingBtn2 = document.getElementById("bookingBtn2");
var available2 = document.querySelector(".booking2");

var bookingBtn3 = document.getElementById("bookingBtn3");
var available3 = document.querySelector(".booking3");

var bookingBtn4 = document.getElementById("bookingBtn4");
var available4 = document.querySelector(".booking4");

var bookingBtn5 = document.getElementById("bookingBtn5");
var available5 = document.querySelector(".booking5");

var bookingBtn6 = document.getElementById("bookingBtn6");
var available6 = document.querySelector(".booking6");

// bookingNum(bookingBtn1, available1);
// bookingNum(bookingBtn2, available2);
// bookingNum(bookingBtn3, available3);
// bookingNum(bookingBtn4, available4);
// bookingNum(bookingBtn5, available5);
// bookingNum(bookingBtn6, available6);

// function bookingNum(btn, content) {
//   btn.addEventListener("click", function () {
//     if (content.textContent > 0)
//       content.textContent = Number(content.textContent) - 1;
//   });
// }

bookingBtn1.addEventListener("click", function () {
  if (available1.textContent > 0)
    available1.textContent = Number(available1.textContent) - 1;
});

bookingBtn2.addEventListener("click", function () {
  if (available2.textContent > 0)
    available2.textContent = Number(available2.textContent) - 1;
});

bookingBtn3.addEventListener("click", function () {
  if (available3.textContent > 0)
    available3.textContent = Number(available3.textContent) - 1;
});

bookingBtn4.addEventListener("click", function () {
  if (available4.textContent > 0)
    available4.textContent = Number(available4.textContent) - 1;
});

bookingBtn5.addEventListener("click", function () {
  if (available5.textContent > 0)
    available5.textContent = Number(available5.textContent) - 1;
  console.log(Number(available5.textContent));
});

bookingBtn6.addEventListener("click", function () {
  if (available6.textContent > 0)
    available6.textContent = Number(available6.textContent) - 1;
});

var review = document.getElementById("para");
var revBtn = document.getElementById("revBtn");

revBtn.addEventListener("click", function changePara() {
  if (
    (review.innerText =
      "My experience at the car wash was disappointing. The cleaning was superficial, and some spots remained on the car even after th wash. The staff were not friendly and seemed uninterested in providing good services. Additionally the prices were high compared to the quality of service I received. I don't think I'll be coming back or recommending this car wash to others.")
  )
    review.innerText =
      "I had a great experience at the car wash. The service was quick and efficient, and my car was cleaned thoroughly with attention to detail. the staff were professional and committed to providing the best service possible. Additionally, the prices were reasonable considering the quality of the work. I will definitly be coming back and would recommend this car wash to anyone looking for excellent service.";
});

function colorChange(btns) {
  btns.style.backgroundColor = "red";
}
