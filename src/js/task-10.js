function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsDiv = document.getElementById("controls");
const boxesDiv = document.getElementById("boxes");

// Funcția pentru crearea de box-uri
function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10;
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.marginBottom = "10px";
    boxesDiv.appendChild(box);
  }
}

// Funcția pentru ștergerea de box-uri
function destroyBoxes() {
  boxesDiv.innerHTML = "";
}

// Adaug event listener pentru butonul Create
controlsDiv
  .querySelector("[data-create]")
  .addEventListener("click", function () {
    const inputAmount = controlsDiv.querySelector("input").value;
    createBoxes(inputAmount);
  });

// Adaug event listener pentru butonul Destroy
controlsDiv
  .querySelector("[data-destroy]")
  .addEventListener("click", destroyBoxes);
