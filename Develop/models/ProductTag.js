const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id: {
      // Set the data type to integer
      type: DataTypes.INTEGER,
      // Bans NULL values
      allowNull: false,
      // Sets the primary key
      primaryKey: true,
      // Increments the value for each new record
      autoIncrement: true,
    },
    tag_id: {
      // Set the data type to integer
      type: DataTypes.INTEGER,
      references: {
        // Reference the tag table
        model: "tag",
        //reference the id column in the tag table
        key: "id",
      },
    },
    product_id: {
      // Set data type to integer
      type: DataTypes.INTEGER,
      references: {
        // Reference the product table
        model: "product",
        // Reference the the id column in the product table
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;