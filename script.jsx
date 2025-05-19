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

export default function Home() {
  function viewRecipe(recipeName) {
    let recipeDetails = "";

    if (recipeName === 'Fried Chicken') {
      recipeDetails =
        "Fried Chicken Recipe\n\n" +
        "Ingredients:\n" +
        "- Chicken pieces\n" +
        "- 2 cups buttermilk\n" +
        "- 2 cups flour\n" +
        "- 1 tbsp paprika\n" +
        "- 1 tsp garlic powder\n" +
        "- Salt & pepper\n" +
        "- Oil for frying\n\n" +
        "Steps:\n" +
        "1. Marinate chicken in buttermilk for 2 hours.\n" +
        "2. Mix flour, paprika, garlic powder, salt, and pepper.\n" +
        "3. Coat chicken in flour mixture.\n" +
        "4. Fry in hot oil until golden and cooked through.\n" +
        "5. Drain on paper towels and serve.";
    } else if (recipeName === 'Banana Bread') {
      recipeDetails =
        "Banana Bread Recipe\n\n" +
        "Ingredients:\n" +
        "- 3 ripe bananas\n" +
        "- 1/2 cup melted butter\n" +
        "- 1 cup sugar\n" +
        "- 2 eggs\n" +
        "- 1.5 cups flour\n" +
        "- 1 tsp baking soda\n" +
        "- Pinch of salt\n\n" +
        "Steps:\n" +
        "1. Preheat oven to 350°F (175°C).\n" +
        "2. Mash bananas and mix with melted butter.\n" +
        "3. Add sugar and eggs, mix well.\n" +
        "4. Stir in flour, baking soda, and salt.\n" +
        "5. Pour into loaf pan and bake for 50-60 minutes.";
    } else if (recipeName === 'Pizza') {
      recipeDetails =
        "Pizza Recipe\n\n" +
        "Ingredients:\n" +
        "- Pizza dough\n" +
        "- 1/2 cup tomato sauce\n" +
        "- 1 cup mozzarella cheese\n" +
        "- Toppings of choice (pepperoni, veggies, etc.)\n\n" +
        "Steps:\n" +
        "1. Preheat oven to 475°F (245°C).\n" +
        "2. Roll out dough and place on baking sheet.\n" +
        "3. Spread sauce, add cheese and toppings.\n" +
        "4. Bake for 12-15 minutes until crust is golden.";
    }

    alert(recipeDetails);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-50 font-sans">
      <main className="bg-white rounded-xl shadow-lg p-8 max-w-xl w-full">
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
            {/* Fried Chicken */}
            <div className="border-b pb-4">
              <h3 className="text-xl font-bold mb-1 flex items-center justify-between">
                Fried Chicken
                <button
                  className="ml-4 px-3 py-1 text-sm bg-orange-100 rounded hover:bg-orange-200 transition"
                  onClick={() => viewRecipe('Fried Chicken')}
                >
                  View Recipe
                </button>
              </h3>
              <p className="text-gray-700 mb-2">
                Enjoy crispy, golden, and flavorful fried chicken made with a blend of spices.
              </p>
            </div>
            {/* Banana Bread */}
            <div className="border-b pb-4">
              <h3 className="text-xl font-bold mb-1 flex items-center justify-between">
                Banana Bread
                <button
                  className="ml-4 px-3 py-1 text-sm bg-orange-100 rounded hover:bg-orange-200 transition"
                  onClick={() => viewRecipe('Banana Bread')}
                >
                  View Recipe
                </button>
              </h3>
              <p className="text-gray-700 mb-2">
                A moist and sweet banana bread, perfect for breakfast or a snack.
              </p>
            </div>
            {/* Pizza */}
            <div>
              <h3 className="text-xl font-bold mb-1 flex items-center justify-between">
                Pizza
                <button
                  className="ml-4 px-3 py-1 text-sm bg-orange-100 rounded hover:bg-orange-200 transition"
                  onClick={() => viewRecipe('Pizza')}
                >
                  View Recipe
                </button>
              </h3>
              <p className="text-gray-700 mb-2">
                A delicious homemade pizza with a crispy crust, topped with fresh ingredients.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}