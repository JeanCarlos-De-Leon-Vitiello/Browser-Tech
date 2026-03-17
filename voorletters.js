 // Bron: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
// Bron regex character classes: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes
// Bron split/map: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// Bron map: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
//  bron value: https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/value

const voorLetterInputs = document.querySelectorAll(".voor-letters");

voorLetterInputs.forEach(function(input) {
  input.addEventListener("blur", function () {
    let value = input.value.toUpperCase();

    // verwijder alles wat geen hoofdletter is naar niks ""
    value = value.replace(/[^A-Z]/g, "");

    value = value
      .split("")
      .map((letter) => `${letter}.`)
      .join("");

    input.value = value;
  });
});
