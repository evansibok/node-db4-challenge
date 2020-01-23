exports.up = function (knex) {
  return knex.schema
    .createTable("recipes", table => {
      table.increments('id');
      table
        .string("recipe_name", 128)
        .unique()
        .notNullable();
    })
    .createTable("ingredients", table => {
      table.increments('id');
      table
        .string("ingredient_name", 128)
        .unique()
        .notNullable();
    })
    .createTable("recipe_details", table => {
      table.increments('id');
      table
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredients")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.integer("quantity").notNullable();
      table.string("measurement").notNullable();
    })
    .createTable("steps", table => {
      table.increments('id');
      table
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.integer("order_number").notNullable();
      table.text("step_details").notNullable();
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("steps")
    .dropTableIfExists("recipe_details")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};