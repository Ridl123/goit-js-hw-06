const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Obțin lista ul#ingredients
const ingredientsList = document.getElementById("ingredients");

// Creare elemente <li> pentru fiecare ingredient
const listItems = ingredients.map((ingredient) => {
  const listItem = document.createElement("li"); // Creare element <li>
  listItem.textContent = ingredient; // Adaug numele ingredientului ca text al elementului
  listItem.classList.add("item"); // Adaug clasa "item" la element
  return listItem;
});

// Adaug toate elementele <li> în lista ul#ingredients
listItems.forEach((item) => {
  ingredientsList.appendChild(item); // Adaug elementul în lista de ingrediente
});
