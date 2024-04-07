// Obțin elementele relevante
const fontSizeControl = document.getElementById("font-size-control");
const textSpan = document.getElementById("text");

// Adaug event listener pentru evenimentul input pe input#font-size-control
fontSizeControl.addEventListener("input", () => {
  // Actualizez stilurile inline ale span-ului cu noua valoare a fontului
  textSpan.style.fontSize = `${fontSizeControl.value}px`;
});
