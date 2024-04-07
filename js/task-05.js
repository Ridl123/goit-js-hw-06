// Obțin elementele relevante
const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

// Adaug event listener pentru evenimentul input pe input#name-input
nameInput.addEventListener("input", () => {
  // Verific daca input-ul este gol
  if (nameInput.value.trim() === "") {
    nameOutput.textContent = "Anonymous"; // Daca da, afisez "Anonymous"
  } else {
    nameOutput.textContent = nameInput.value; // Altfel, afisez valoarea din input
  }
});
