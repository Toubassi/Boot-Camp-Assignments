var btn1 = document.querySelector(".btn1");
var likeCount1 = document.querySelector(".likeCount1");

var btn2 = document.querySelector(".btn2");
var likeCount2 = document.querySelector(".likeCount2");

var btn3 = document.querySelector(".btn3");
var likeCount3 = document.querySelector(".likeCount3");

applyLike(btn1, likeCount1);
applyLike(btn2, likeCount2);
applyLike(btn3, likeCount3);

function applyLike(btn, content) {
  btn.addEventListener("click", function () {
    content.textContent = Number(content.textContent) + 1;
  });
}
