const router = require('express').Router();
const categoryRoutes = require('./categoryRoute');
const productRoutes = require('./productRoute');
const tagRoutes = require('./tagRoute');

router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

module.exports = router;