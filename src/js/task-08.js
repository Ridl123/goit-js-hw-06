const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Previne reîncărcarea paginii la trimiterea formularului

  const email = this.elements.email.value;
  const password = this.elements.password.value;

  if (email.trim() === "" || password.trim() === "") {
    alert("Please fill in all fields"); // Afișare alertă dacă unul dintre câmpuri este gol
  } else {
    const formData = {
      email: email,
      password: password,
    };

    console.log("Form data:", formData); // Afișare obiect cu datele introduse în consolă

    this.reset(); // Șterge valorile câmpurilor din formular
  }
});
