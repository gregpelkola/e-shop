const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // Defines the id column
    id: {
      // Set data type to integer
      type: DataTypes.INTEGER,
      // Bans NULL values
      allowNull: false,
      // Set as primary key
      primaryKey: true,
      // Increments the value for each new record
      autoIncrement: true,
    },
    // Defines category_name column
    category_name: {
      // Set data type as string
      type: DataTypes.STRING,
    },
  },
  
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;