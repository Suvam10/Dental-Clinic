let caretBtn = document.querySelector("#caret-btn");
let infoText = document.querySelector(".com-info-text");
caretBtn.addEventListener("click", () => {
  if (infoText.style.display == "none") {
    infoText.style.display = "block";
    caretBtn.style.transform = "rotate(90deg)";
  } else {
    infoText.style.display = "none";
    caretBtn.style.transform = "rotate(0deg)";
  }
});
let caretBtn2 = document.querySelector("#caret-btn-2");
let infoText2 = document.querySelector(".com-info-text-2");
caretBtn2.addEventListener("click", () => {
  if (infoText2.style.display == "none") {
    infoText2.style.display = "block";
    caretBtn2.style.transform = "rotate(90deg)";
  } else {
    infoText2.style.display = "none";
    caretBtn2.style.transform = "rotate(0deg)";
  }
});