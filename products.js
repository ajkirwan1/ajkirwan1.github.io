/** @format */

const upArrows = document.getElementsByClassName("up-arrow");
const downArrows = document.getElementsByClassName("down-arrow");
const productLinks = document.getElementsByClassName("product-item-links");
const toggleButtons = document.getElementsByClassName("hide-show-button");

// const numberOfProducts = upArrows.length;
// let position = 0;

const displayChangeButton = document.getElementById("hide-show-button");
const hideShow = document.querySelector(".product-item-links");

// const downArrow = document.querySelector(".down-arrow");
// const upArrow = document.querySelector(".up-arrow");

function toggleItem() {
  var hideandShowDiv = this.previousElementSibling.querySelector(
    ".product-item-links"
  );
  var classList = hideandShowDiv.className.split(" ");
  var info = this.parentElement.querySelector(".p-info");

  if (classList.includes("hide")) {
    var arrowElement = this.parentElement.querySelector(".down-arrow");
    info.innerHTML = "Less information";
    arrowElement.classList.remove("down-arrow");
    arrowElement.classList.add("up-arrow");
    hideandShowDiv.classList.remove("hide");
  } else {
    var arrowElement = this.parentElement.querySelector(".up-arrow");
    info.innerHTML = "More information";
    arrowElement.classList.remove("up-arrow");
    arrowElement.classList.add("down-arrow");
    hideandShowDiv.classList.add("hide");
  }
}
for (i = 0; i < toggleButtons.length; i++) {
  toggleButtons[i].addEventListener("click", toggleItem);
}
