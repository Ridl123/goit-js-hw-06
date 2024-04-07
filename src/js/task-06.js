// Obțin elementul input și numărul maxim de caractere admise
const validationInput = document.getElementById("validation-input");
const maxLength = parseInt(validationInput.getAttribute("data-length"));

// Adaug event listener pentru evenimentul blur
validationInput.addEventListener("blur", () => {
  // Verific lungimea valorii introduse în input
  if (validationInput.value.length === maxLength) {
    validationInput.classList.remove("invalid"); // Elimin clasa "invalid" dacă este prezentă
    validationInput.classList.add("valid"); // Adaug clasa "valid"
  } else {
    validationInput.classList.remove("valid"); // Elimin clasa "valid" dacă este prezentă
    validationInput.classList.add("invalid"); // Adaug clasa "invalid"
  }
});
