const db = require('../db-config');

function getAllRecipes() {
  return db('recipes');
}

function getAllRecipesById(id) {
  return db('recipes')
    .where({ id })
    .first();
}

function insertRecipe(recipe) {
  return db('recipes')
    .insert(recipe)
}

function getShoppingList(recipe_id) {

  return db.select('i.id',
    'ingredient_name',
    'quantity', 'measurement')
    .from('recipe_details as rd')
    .innerJoin('ingredients as i', 'i.id', 'rd.ingredient_id')
    .where({ recipe_id })
}

function getInstructions(recipe_id) {

  return db.select('recipe_name',
    'recipe_id',
    'order_number',
    'step_details')
    .from('recipes as r')
    .innerJoin('steps as s', 's.recipe_id', 'r.id')
    .where({ recipe_id })
}


module.exports = {
  getAllRecipes,
  getAllRecipesById,
  insertRecipe,
  getShoppingList,
  getInstructions
}