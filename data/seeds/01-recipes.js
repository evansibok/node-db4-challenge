
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("recipes")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("recipes").insert([
        { recipe_name: "Butter bean & chorizo stew" },
        { recipe_name: "Red pepper linguine" },
        { recipe_name: "Curried cauliflower & lentil soup" }
      ]);
    });
};
