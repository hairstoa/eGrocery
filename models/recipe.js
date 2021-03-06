const db = require('../util/database');

module.exports = class Recipe {
  constructor(recipe_id, recipe_name, instruction, category, satisfaction, user_id) {
    this.recipe_id = recipe_id
    this.recipe_name = recipe_name;
    this.instruction = instruction;
    this.category = category;
    this.satisfaction = satisfaction;
    this.user_id = user_id;
  }

  // Create recipe
  static save(recipe) {
    return db.execute(
      'INSERT INTO Recipes (recipe_name, instruction, category, user_id) VALUES (?, ?, ?, ?)',
      [recipe.recipe_name, recipe.instruction, recipe.category, recipe.user_id]
    );
  }

  // Read all recipes by a user
  static getAll(user) {
    return db.execute(
      'SELECT * FROM Recipes WHERE user_id = ?', [user.user_id]);
  }

  // Read all recipes except from one user
  static getRandom(user) {
    return db.execute(
      `SELECT recipe_id, recipe_name, category, satisfaction, Recipes.user_id,
       Users.name AS user_name
       FROM Recipes 
       LEFT JOIN Users ON Recipes.user_id = Users.user_id
       WHERE Recipes.user_id != ? OR Recipes.user_id IS NULL
       ORDER BY recipe_id 
       DESC LIMIT 4`, [user.user_id]);
  }

  // Read a recipe including its ingredients
  static getOne(recipe) {
    return db.execute(
      `SELECT r.recipe_id, r.recipe_name, r.instruction, r.category AS recipe_category, r.satisfaction, r.user_id, 
            i.ingredient_id, i.ingredient_name, i.quantity, i.unit, i.category FROM Recipes AS r
                        LEFT JOIN Recipe_Ingredients AS r_i
                        ON r.recipe_id = r_i.recipe_id
                        LEFT JOIN Ingredients as i
                        ON i.ingredient_id = r_i.ingredient_id
                        WHERE r.recipe_id = ?`, [recipe.recipe_id]);
  }

  // Update a recipe
  static update(recipe) {
    return db.execute(
      `UPDATE Recipes
            SET recipe_name = ?,
                instruction = ?,
                category = ?,
                satisfaction = ?
            WHERE recipe_id = ?`,
      [recipe.recipe_name, recipe.instruction, recipe.category, recipe.satisfaction, recipe.recipe_id]);
  }

  // Delete a recipe
  static delete(recipe) {
    return db.execute(
      'DELETE FROM Recipes WHERE recipe_id = ?',
      [recipe.recipe_id]
    );
  }
};