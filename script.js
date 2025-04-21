function viewRecipe(recipeName) {
    let recipeDetails = "";

    if (recipeName === 'Fried Chicken') {
        recipeDetails = `
            <h3>Fried Chicken Recipe</h3>
            <p>This is a crispy, golden, and flavorful fried chicken recipe. Ingredients include chicken, flour, spices, and oil. Fry the chicken until golden brown and enjoy!</p>
        `;
    } else if (recipeName === 'Banana Bread') {
        recipeDetails = `
            <h3>Banana Bread Recipe</h3>
            <p>Banana bread is made with ripe bananas, flour, sugar, and eggs. Bake until golden and enjoy a moist, sweet loaf for breakfast or as a snack.</p>
        `;
    } else if (recipeName === 'Pizza') {
        recipeDetails = `
            <h3>Pizza Recipe</h3>
            <p>Make a perfect pizza dough, top with tomato sauce, cheese, and your favorite toppings, then bake to perfection for a crispy crust and gooey cheese.</p>
        `;
    }

    alert(recipeDetails);
}