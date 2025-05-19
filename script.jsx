import { useState, useRef } from "react";

export default function Home() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const detailsRef = useRef(null);

  function getRecipeDetails(recipeName) {
    if (recipeName === 'Fried Chicken') {
      return {
        title: "Fried Chicken Recipe",
        description: "This is a crispy, golden, and flavorful fried chicken recipe. Ingredients include chicken, flour, spices, and oil. Fry the chicken until golden brown and enjoy!",
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
      };
    } else if (recipeName === 'Banana Bread') {
      return {
        title: "Banana Bread Recipe",
        description: "Banana bread is made with ripe bananas, flour, sugar, and eggs. Bake until golden and enjoy a moist, sweet loaf for breakfast or as a snack.",
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
      };
    } else if (recipeName === 'Pizza') {
      return {
        title: "Pizza Recipe",
        description: "Make a perfect pizza dough, top with tomato sauce, cheese, and your favorite toppings, then bake to perfection for a crispy crust and gooey cheese.",
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
      };
    }
    return null;
  }

  function viewRecipe(recipeName) {
    setSelectedRecipe(getRecipeDetails(recipeName));
    setTimeout(() => {
      detailsRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }

  return (
    <div style={{ minHeight: "100vh", background: "#FFF7ED", fontFamily: "sans-serif", padding: "2rem" }}>
      <div style={{ background: "#fff", borderRadius: "1rem", boxShadow: "0 4px 24px rgba(0,0,0,0.07)", maxWidth: 600, margin: "0 auto", padding: "2rem" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: "bold", textAlign: "center", marginBottom: "2rem" }}>
          Final Exam 343 ✨
        </h1>
        <div>
          <h2 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "1rem" }}>Featured Recipes</h2>
          <div style={{ marginBottom: "2rem" }}>
            <button
              style={{ marginRight: 8, padding: "0.5rem 1rem", borderRadius: 8, background: "#fed7aa", border: "none", cursor: "pointer" }}
              onClick={() => viewRecipe('Fried Chicken')}
            >
              View Fried Chicken Recipe
            </button>
            <button
              style={{ marginRight: 8, padding: "0.5rem 1rem", borderRadius: 8, background: "#fed7aa", border: "none", cursor: "pointer" }}
              onClick={() => viewRecipe('Banana Bread')}
            >
              View Banana Bread Recipe
            </button>
            <button
              style={{ padding: "0.5rem 1rem", borderRadius: 8, background: "#fed7aa", border: "none", cursor: "pointer" }}
              onClick={() => viewRecipe('Pizza')}
            >
              View Pizza Recipe
            </button>
          </div>
        </div>
        {/* Recipe Details Section */}
        <div ref={detailsRef}>
          {selectedRecipe ? (
            <div>
              <h2 style={{ fontSize: "1.25rem", fontWeight: "bold", marginBottom: "0.5rem" }}>{selectedRecipe.title}</h2>
              <p style={{ color: "#444", marginBottom: "1rem" }}>{selectedRecipe.description}</p>
              <div style={{ marginBottom: "1rem" }}>
                <h3 style={{ fontWeight: "600", marginBottom: "0.5rem" }}>Ingredients</h3>
                <ul>
                  {selectedRecipe.ingredients.map((item, idx) => (
                    <li key={idx}>- {item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 style={{ fontWeight: "600", marginBottom: "0.5rem" }}>Steps</h3>
                <ol>
                  {selectedRecipe.steps.map((step, idx) => (
                    <li key={idx}>{idx + 1}. {step}</li>
                  ))}
                </ol>
              </div>
            </div>
          ) : (
            <div style={{ color: "#aaa", textAlign: "center", marginTop: "1rem" }}>
              Select a recipe above to view details.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}