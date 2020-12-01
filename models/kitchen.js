const db = require('../util/database');

module.exports = class Kitchen {
  constructor(user_id) {
    this.user_id = user_id;
  }

  // Read all ingredients in a user's kitchen
  static getAll(user) {
    return db.execute(
      `SELECT i.* FROM Ingredients AS i
			  JOIN Kitchens AS k
        ON i.ingredient_id = k.ingredient_id
        WHERE k.user_id = ?`, [user.user_id]
    );
  }
};