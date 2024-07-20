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
  console.log("ADA");
  console.log(this);
  console.log(this.previousElementSibling);
  console.log(this.previousElementSibling.querySelector(".product-item-links"));
  var hideandShowDiv = this.previousElementSibling.querySelector(
    ".product-item-links"
  );
  var classList = hideandShowDiv.className.split(" ");
  console.log(classList);

  if (classList.includes("hide")) {
    console.log("true");
    hideandShowDiv.classList.remove("hide");
  }
}
for (i = 0; i < toggleButtons.length; i++) {
  toggleButtons[i].addEventListener("click", toggleItem);
}
