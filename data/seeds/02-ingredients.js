
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("ingredients").insert([
        { ingredient_name: "chorizo" },
        { ingredient_name: "chopped tomatoes" },
        { ingredient_name: "butter beans" },
        { ingredient_name: "pesto" },
        { ingredient_name: "roasted red pepper" },
        { ingredient_name: "olive oil" },
        { ingredient_name: "walnuts" },
        { ingredient_name: "garlic clove" },
        { ingredient_name: "spaghetti" },
        { ingredient_name: "parmesan" },
        { ingredient_name: "cauliflower" },
        { ingredient_name: "fennel seeds" },
        { ingredient_name: "red lentils" },
        { ingredient_name: "curry paste" },
        { ingredient_name: "lemon juice" }
      ]);
    });
};
