Inspect the data object in utils/data.js  to get an idea of what data you will work with.

The data object is a converted JSON string that was retrieved from a recipe API called Edamam(opens in a new tab). It contains 20 recipes in the ‘hit’ key that you can use for the app.


To access data, such as recipe labels, you need to look into the recipe key, e.g. data.hits[0].recipe.label has the following value "Paleo Chocolate Covered Caramels". Use console.log() in RecipeListPage.jsx to play around with the data and see what you can retrieve.


In App.jsx, you want to keep track of a selected recipe item in a state and show a <RecipePage /> component (you can use a placeholder for now, or create a new component) if the user has selected one. Else show the <RecipeListPage /> that will contain an overview of all recipes.

In RecipeListPage.jsx, you can use the imported recipe data and display a list of all recipes. Show the following details for each recipe: 

Recipe name

A picture of the recipe/meal

Diet label (if present)

Cautions (if present)

Meal type

Dish type

Each item shows the following health labels (if present):

Vegan 

Vegetarian

NOTE: As the API does not provide ID’s for the recipes, you can use names/labels as keys in the list items.


Built a search function that filters based on the name and/or health labels (vegan/vegetarian/pescetarian/gluten-free/sesame-free/etc.).

Create the <RecipePage /> component and make it display more detailed information about a selected recipe: 

Recipe name

A picture of the recipe/meal

Meal type

Dish type

Total cooking time

Diet label

All health labels

Cautions

Ingredients

Servings

Total nutrients (Energy in kcal, protein, fat, carbs, cholesterol, sodium)


The items in the list (<RecipeListPage />) should be clickable and, once selected show a more detailed <RecipePage /> component. The user can also click on a back button in <RecipePage /> to return to the recipes overview.


Style and make your app responsive using ChakraUI, which is already installed.


Check the requirements below to make sure you have implemented everything.

REQUIRMENTS 

The app is responsive and is accessible on both mobile and desktop.


The app contains two different pages that can be viewed by the user:

A screen where the user can see an overview of available recipes.

A screen where the user can view the details of a single, specific recipe.

On the recipe overview page, there is a list of all recipes.

Each item on the list contains the following details about the recipe:

Recipe name

A picture of the recipe/meal

Diet label (if present)

Cautions (if present)

Meal type

Dish type

Each item on the list also shows the following health labels (change these if you want), if these are applicable: 

Vegetarian

Vegan

Users can search recipes based on recipe name.

Users can click on a recipe and go to a different screen that shows all the details of the recipe.

bullet
On the page of each single recipe, the following details are displayed:

Recipe name

A picture of the recipe/meal

Meal type

Dish type

Total cooking time

Diet label

All health labels

Cautions

Ingredients

Servings

Total nutrients (Energy in kcal, protein, fat, carbs, cholesterol, sodium)


Users can go back to the recipe overview page from the single recipe pages.
