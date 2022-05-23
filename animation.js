//Accessibility settings
//Heading ARIA Labels
var headingLabel = document.querySelectorAll(".heading");
for (var j = 0; j < headingLabel.length; j++) {
  headingLabel[j].setAttribute("aria-label", headingLabel[j].textContent);
}

//Hide all characters from screen readers
var characterLabel = document.querySelectorAll(".char");
for (var l = 0; l < characterLabel.length; l++) {
  characterLabel[l].setAttribute("aria-hidden", "true");
}

//Custom heading animations

var headingChar = document.querySelectorAll(".heading .char");
for (var i = 0; i < headingChar.length; i++) {
  headingChar[i].setAttribute("data-aos", "word-enter");
  headingChar[i].outerHTML =
    '<div class="headingWrapper">' + headingChar[i].outerHTML + "</div>";
}
