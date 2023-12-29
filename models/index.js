// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  // Foreign key in Product model
  foreignKey: 'category_id',
});

// Categories have many Products
Category.hasMany(Product, {
  // Foreign key in the Product model
  foreignKey: 'category_id',
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  // Intermediate model
  through: ProductTag,
  // Foreign key in the Product model
  foreignKey: 'product_id',
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  // Intermediate model
  through: ProductTag,
  // Foreign key in the Product Model
  foreignKey: 'tag_id',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};