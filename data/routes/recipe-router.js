const express = require('express');

const Recipe = require('../helpers/recipe-db')

const router = express.Router();

router.get('/', (req, res) => {
  Recipe.getAllRecipes()
    .then(recipes => {
      res.status(200).json(recipes)
    })
    .catch(err => {
      res.status().json({
        error: err.message,
        stack: err.stack
      })
    })
});

router.get('/:id', (req, res) => {

  Recipe.getAllRecipesById(req.params.id)
    .then(recipe => {
      res.status(200).json(recipe)
    })
    .catch(err => {
      res.status().json({
        error: err.message,
        stack: err.stack
      })
    })
});

router.get('/:id/shopping-list', (req, res) => {
  const { id } = req.params;

  Recipe.getShoppingList(id)
    .then(shoppingList => {
      res.status(200).json(shoppingList)
    })
    .catch(err => {
      res.status(500).json({
        error: err.message,
        stack: err.stack
      })
    })
})

router.post('/', (req, res) => {
  const recipeData = req.body;

  Recipe.insertRecipe(recipeData)
    .then(recipe => {
      res.status(200).json(recipe)
    })
    .catch(err => {
      res.status().json({
        error: err.message,
        stack: err.stack
      })
    })
});

module.exports = router;