// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
   // define columns
  {
   id: {
    // Sets data type to integer
    type: DataTypes.INTEGER,
    // Bans NULL values
    allowNull: false,
    // Set as primary key
    primaryKey: true,
    // Increments the value for each new record
    autoIncrement: true,
   },
   product_name: {
    // Sets data type to STRING
    type: DataTypes.STRING,
    //Bans NULL values
    allowNull: false,
   },
   price: {
    // Sets data type to decimal number
    type: DataTypes.DECIMAL,
    // Bans NULL values
    allowNull: false,
    validate: {
      // Validate the value is decimal
      isDecimal: true,
    },
   },
   stock: {
    // Sets data type to integer
    type: DataTypes.INTEGER,
    // Bans NULL values
    allowNull: false,
    // Sets default value to 10
    defaultValue: 10,
    validate: {
      // Validate the value is numeric
      isNumeric: true,
    },
   },
   category_id: {
    // Sets data type to integer
    type: DataTypes.INTEGER,
    references: {
      // Reference category table
      model: "category",
    },
   },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;