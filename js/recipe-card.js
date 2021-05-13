//Create an object to hold information on your favorite recipe. It should have properties for title (a string), 
//servings (a number), and ingredients (an array of strings). Your object should have a publicly available 
//method that when called, will log out the recipe within the console.

const Recipe = {
    displayRecipe: function(name, serves, ingredients) {

    let ingredientsR = ingredients.join('\n');

        return `Name of the recipe: ${name}\nServes: ${serves} persons\nIngredients:\n${ingredientsR}.`;
    }
}

console.log(Recipe.displayRecipe('Guacamole', 4, 
[
    '3 Avocados',
     '1 Lime',
     'Teaspoon Salt',
     '1/2 Cup Onion',
     '3 Tablespoons Cilantro',
     '2 Diced Tomatoes',
     '1 Teaspoon Garlic',
     '1 Pinch Ground Pepper'
]

));