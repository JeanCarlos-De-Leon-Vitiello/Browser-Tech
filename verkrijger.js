// Bronnen om deze code beter te begrijpen:
// template element: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/template
// cloneNode(): https://developer.mozilla.org/en-US/docs/Web/API/Node/cloneNode, https://www.w3schools.com/tags/tag_template.asp (Matthew)
// closest(): https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
// remove(): https://developer.mozilla.org/en-US/docs/Web/API/Element/remove

// clone 
let verkrijger = document.querySelector("template");
let verkrijgerToevoegen = document.querySelector(".verkrijger-toevoegen");
let verkrijgerFieldset = document.querySelector(".verkrijger-fieldset");

// update verkrijger nummers
function updateVerkrijgerNummers() {
  let legends = verkrijgerFieldset.querySelectorAll("#legend-verkrijger1, .legend-verkrijger2");

  legends.forEach(function(legend, index) {
  legend.textContent = `Verkrijger ${index + 1}`;
});
}

// voeg verkrijger toe
function verkrijgerErbij() {
  let kopie = verkrijger.content.cloneNode(true);

  let inputsMetId = kopie.querySelectorAll("input[id]"); // zoekt alle inputs met dat id

  let aantalVerkrijgers =
    verkrijgerFieldset.querySelectorAll("#legend-verkrijger1, .legend-verkrijger2").length + 1;

  kopie.querySelector(".legend-verkrijger2").textContent = `Verkrijger ${aantalVerkrijgers}`;

  let verkrijgerVerwijder = kopie.querySelector(".verkrijger-verwijderen");
  verkrijgerVerwijder.addEventListener("click", verwijderVerkrijger);

  verkrijgerFieldset.insertBefore(kopie, verkrijgerToevoegen);
  updateVerkrijgerNummers();
}

verkrijgerToevoegen.addEventListener("click", verkrijgerErbij);

// clone verwijderen
function verwijderVerkrijger(event) {
  let knop = event.currentTarget;
  let verkrijgerBlok = knop.closest(".verkrijger-blok");

  verkrijgerBlok.remove();
  updateVerkrijgerNummers();
}
