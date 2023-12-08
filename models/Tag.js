const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
    // define columns
    id: {
      // Set the data type to integer
      type: DataTypes.INTEGER,
      // Bans NULL values
      allowNull: false,
      // Set the primary key
      primaryKey: true,
      // Increments the value for each new record
      autoIncrement: true,
    },
    tag_name: {
      // Set the data type to string
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;