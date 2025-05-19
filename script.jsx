export default function Home() {
  // Your provided function, slightly tweaked for React (no template HTML in alert)
  function viewRecipe(recipeName) {
    let recipeDetails = "";

    if (recipeName === 'Fried Chicken') {
      recipeDetails =
        "Fried Chicken Recipe\n\n" +
        "This is a crispy, golden, and flavorful fried chicken recipe. Ingredients include chicken, flour, spices, and oil. Fry the chicken until golden brown and enjoy!";
    } else if (recipeName === 'Banana Bread') {
      recipeDetails =
        "Banana Bread Recipe\n\n" +
        "Banana bread is made with ripe bananas, flour, sugar, and eggs. Bake until golden and enjoy a moist, sweet loaf for breakfast or as a snack.";
    } else if (recipeName === 'Pizza') {
      recipeDetails =
        "Pizza Recipe\n\n" +
        "Make a perfect pizza dough, top with tomato sauce, cheese, and your favorite toppings, then bake to perfection for a crispy crust and gooey cheese.";
    }

    alert(recipeDetails);
  }}
import { useRef, useState } from "react";

const recipes = [
  {
    name: "Fried Chicken",
    description: "Enjoy crispy, golden, and flavorful fried chicken made with a blend of spices.",
    ingredients: [
      "Chicken pieces",
      "2 cups buttermilk",
      "2 cups flour",
      "1 tbsp paprika",
      "1 tsp garlic powder",
      "Salt & pepper",
      "Oil for frying"
    ],
    steps: [
      "Marinate chicken in buttermilk for 2 hours.",
      "Mix flour, paprika, garlic powder, salt, and pepper.",
      "Coat chicken in flour mixture.",
      "Fry in hot oil until golden and cooked through.",
      "Drain on paper towels and serve."
    ]
  },
  {
    name: "Banana Bread",
    description: "A moist and sweet banana bread, perfect for breakfast or a snack.",
    ingredients: [
      "3 ripe bananas",
      "1/2 cup melted butter",
      "1 cup sugar",
      "2 eggs",
      "1.5 cups flour",
      "1 tsp baking soda",
      "Pinch of salt"
    ],
    steps: [
      "Preheat oven to 350°F (175°C).",
      "Mash bananas and mix with melted butter.",
      "Add sugar and eggs, mix well.",
      "Stir in flour, baking soda, and salt.",
      "Pour into loaf pan and bake for 50-60 minutes."
    ]
  },
  {
    name: "Pizza",
    description: "A delicious homemade pizza with a crispy crust, topped with fresh ingredients.",
    ingredients: [
      "Pizza dough",
      "1/2 cup tomato sauce",
      "1 cup mozzarella cheese",
      "Toppings of choice (pepperoni, veggies, etc.)"
    ],
    steps: [
      "Preheat oven to 475°F (245°C).",
      "Roll out dough and place on baking sheet.",
      "Spread sauce, add cheese and toppings.",
      "Bake for 12-15 minutes until crust is golden."
    ]
  }
];

export default function Home() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const detailsRef = useRef(null);

  function handleViewRecipe(recipeName) {
    setSelectedRecipe(recipeName);
    setTimeout(() => {
      detailsRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100); // slight delay to ensure state updates before scrolling
  }

  const recipe = recipes.find(r => r.name === selectedRecipe);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-orange-50 font-sans">
      <main className="bg-white rounded-xl shadow-lg p-8 max-w-xl w-full mb-8">
        <div className="bg-pink-100 rounded-lg px-6 py-4 mb-6">
          <h1 className="text-3xl font-bold mb-2 text-center">
            Final Exam 343 <span role="img" aria-label="sparkles">✨</span>
          </h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-1 text-center">
            Fuller, Dezekah <span role="img" aria-label="student">🎓</span>
          </h2>
          <h3 className="text-xl text-gray-600 text-center">
            Spring 2025 <span role="img" aria-label="calendar">📅</span>
          </h3>
        </div>
        <section>
          <h2 className="text-2xl font-semibold mb-4">Featured Recipes</h2>
          <div className="space-y-6">
            {recipes.map((r) => (
              <div key={r.name} className="border-b pb-4">
                <h3 className="text-xl font-bold mb-1 flex items-center justify-between">
                  {r.name}
                  <button
                    type="button"
                    className="ml-4 px-3 py-1 text-sm bg-orange-100 rounded hover:bg-orange-200 transition cursor-pointer"
                    onClick={() => handleViewRecipe(r.name)}
                  >
                    View Recipe
                  </button>
                </h3>
                <p className="text-gray-700 mb-2">{r.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Recipe Details Section */}
      <section ref={detailsRef} className="bg-white rounded-xl shadow-lg p-8 max-w-xl w-full">
        {recipe ? (
          <>
            <h2 className="text-2xl font-bold mb-2 text-center">{recipe.name} Recipe</h2>
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Ingredients</h3>
              <ul className="list-disc list-inside ml-4 text-gray-800">
                {recipe.ingredients.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Steps</h3>
              <ol className="list-decimal list-inside ml-4 text-gray-800">
                {recipe.steps.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
            </div>
          </>
        ) : (
          <h2 className="text-xl text-gray-400 text-center">Select a recipe above to view details.</h2>
        )}
      </section>
    </div>
  );
}