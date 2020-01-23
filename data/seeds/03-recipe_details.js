exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("recipe_details")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("recipe_details").insert([
        {
          recipe_id: "1",
          ingredient_id: "1",
          quantity: "200",
          measurement: "grams"
        },
        {
          recipe_id: "1",
          ingredient_id: "2",
          quantity: "800",
          measurement: "gram can"
        },
        {
          recipe_id: "1",
          ingredient_id: "3",
          quantity: "800",
          measurement: "gram can"
        },
        {
          recipe_id: "1",
          ingredient_id: "4",
          quantity: "1",
          measurement: "tub"
        },
        {
          recipe_id: "2",
          ingredient_id: "5",
          quantity: "1",
          measurement: "item"
        },
        {
          recipe_id: "2",
          ingredient_id: "6",
          quantity: "30",
          measurement: "ml"
        },
        {
          recipe_id: "2",
          ingredient_id: "7",
          quantity: "50",
          measurement: "grams"
        },
        {
          recipe_id: "2",
          ingredient_id: "8",
          quantity: "1",
          measurement: "small clove"
        },
        {
          recipe_id: "2",
          ingredient_id: "9",
          quantity: "100",
          measurement: "grams"
        },
        {
          recipe_id: "3",
          ingredient_id: "11",
          quantity: "1",
          measurement: "item"
        },
        {
          recipe_id: "3",
          ingredient_id: "12",
          quantity: "2",
          measurement: "tsp"
        },
        {
          recipe_id: "3",
          ingredient_id: "13",
          quantity: "150",
          measurement: "grams"
        },
        {
          recipe_id: "3",
          ingredient_id: "14",
          quantity: "3",
          measurement: "tbsp"
        },
        {
          recipe_id: "3",
          ingredient_id: "6",
          quantity: "1.5",
          measurement: "tbsp"
        }
      ]);
    });
};