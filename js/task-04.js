// Obțin elementele relevante
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const counterValueSpan = document.getElementById("value");

// Declar variabila counterValue și atribui valoarea 0
let counterValue = 0;

// Adaug event listener pentru butonul de decrementare
decrementButton.addEventListener("click", () => {
  counterValue--; // Scad 1 din valoarea contorului
  counterValueSpan.textContent = counterValue; // Actualizez valoarea afisata
});

// Adaug event listener pentru butonul de incrementare
incrementButton.addEventListener("click", () => {
  counterValue++; // Adaug 1 la valoarea contorului
  counterValueSpan.textContent = counterValue; // Actualizez valoarea afisata
});
