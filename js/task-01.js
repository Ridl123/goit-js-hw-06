//Comentariile adăugate sunt pentru mine, pentru momentul când voi reveni pentru a vedea un exemplu de cum am folosit anumite metode/funcții.

// Selectez elementul ul#categories
const categoriesList = document.getElementById("categories");

// Obțin toate elementele li cu clasa "item" din interiorul ul#categories
const categoryItems = categoriesList.querySelectorAll("li.item");

console.log("Number of categories:", categoryItems.length);

// Iterare prin fiecare element li.item
categoryItems.forEach((item) => {
  // Obțin titlul categoriei (tag-ul h2)
  const categoryTitle = item.querySelector("h2").textContent;

  // Obțin numărul de elemente din categoria curentă
  const categoryElements = item.querySelectorAll("ul li").length;

  console.log("Category:", categoryTitle);
  console.log("Elements:", categoryElements);
});
