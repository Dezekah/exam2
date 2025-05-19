// recipe.jsx
const recipes = {
  "Fried Chicken": {
    title: "Fried Chicken",
    description: "This is a crispy, golden, and flavorful fried chicken recipe.",
    ingredients: [
      "Chicken pieces", "2 cups buttermilk", "2 cups flour", "1 tbsp paprika", "1 tsp garlic powder", "Salt & pepper", "Oil for frying"
    ],
    steps: [
      "Marinate chicken in buttermilk for 2 hours.",
      "Mix flour, paprika, garlic powder, salt, and pepper.",
      "Coat chicken in flour mixture.",
      "Fry in hot oil until golden and cooked through.",
      "Drain on paper towels and serve."
    ]
  },
  "Banana Bread": {
    title: "Banana Bread",
    description: "Moist banana bread, perfect for breakfast or a snack.",
    ingredients: [
      "3 ripe bananas", "1/2 cup melted butter", "1 cup sugar", "2 eggs", "1.5 cups flour", "1 tsp baking soda", "Pinch of salt"
    ],
    steps: [
      "Preheat oven to 350°F (175°C).",
      "Mash bananas and mix with melted butter.",
      "Add sugar and eggs, mix well.",
      "Stir in flour, baking soda, and salt.",
      "Pour into loaf pan and bake for 50-60 minutes."
    ]
  },
  "Pizza": {
    title: "Pizza",
    description: "Delicious homemade pizza with a crispy crust.",
    ingredients: [
      "Pizza dough", "1/2 cup tomato sauce", "1 cup mozzarella cheese", "Toppings of choice"
    ],
    steps: [
      "Preheat oven to 475°F (245°C).",
      "Roll out dough and place on baking sheet.",
      "Spread sauce, add cheese and toppings.",
      "Bake for 12-15 minutes until crust is golden."
    ]
  }
};

const params = new URLSearchParams(window.location.search);
const recipeName = params.get("name");
const recipe = recipes[recipeName];

const container = document.getElementById("recipe-container");

if (recipe) {
  container.innerHTML = `
    <h1>${recipe.title}</h1>
    <p>${recipe.description}</p>
    <h2>Ingredients</h2>
    <ul>${recipe.ingredients.map(i => `<li>${i}</li>`).join("")}</ul>
    <h2>Directions</h2>
    <ol>${recipe.steps.map(s => `<li>${s}</li>`).join("")}</ol>
  `;
} else {
  container.innerHTML = `<p>Recipe not found.</p>`;
}
