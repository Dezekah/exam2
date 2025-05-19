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
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-50 font-sans">
      <main className="bg-white rounded-xl shadow-lg p-8 max-w-xl w-full">
        {/* Header with baby pink background */}
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