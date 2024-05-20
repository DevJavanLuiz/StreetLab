function expandModalShirtBlack() {
  const modal = document.querySelector(".shirt-black");

  modal.classList.toggle("open");
}
function expandModalShirtGreen() {
  const modal = document.querySelector(".shirt-green");

  modal.classList.toggle("open");
}

let count = 1;
document.querySelector("#radio1").checked = true;

setInterval(() => {
  nextImg();
}, 3500);

function nextImg() {
  count++;
  if (count > 4) {
    count = 1;
  }
  document.querySelector("#radio" + count).checked = true;
}
