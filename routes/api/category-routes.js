const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
     // find all categories
    const categories = await Category.findAll({ include: [{ model: Product}] });
    res.status(200).json(categories);
  } catch (err) {
    // If error get message with a 500 status
    res.status(500).json({ message: 'not found' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    // find one category by its `id` value
    const category = await Category.findByPk(req.params.id, { include: [{ model: Product }] });
  
  
  if (!category) {
    // If category is not found get message with a 404 status
    res.status(404).json({ message: 'id not found' });
    return;
  }
  res.status(200).json(category);
} catch (err) {
  // If error get message with a 500 status
  res.status(500).json({ message: 'not found' });
}
});

// create a new category
router.post('/', async (req, res) => {
  try {
    // Create a new category using data in the request body
    const newCategory = await Category.create(req.body);
    res.status(200).json(newCategory);
  } catch (err) {
    // If error get message with a 400 status
    res.status(400).json({ message: 'creation failed' });
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    // Update category with the matching id using data in request body
    const updated = await Category.update(req.body, { where: { id: req.params.id} });
    // If category is not found send a message with a 404 status otherwise return updated data
    !updated[0] ? res.status(404).json({ message: 'id not found' }) : res.status(200).json(updated);
  } catch (err) {
    // If error get message with a 500 status
    res.status(500).json({ message: 'update failed' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    // delete a category by its `id` value
    const deleted = await Category.destroy({ where: { id: req.params.id } });

    // If the category is not found send a message with a 404 status otherwise retrun the deleted data
    !deleted ? res.status(404).json({ message: 'id not found'}) : res.status(200).json(deleted);
  // If error get a 500 status error
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;