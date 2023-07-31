const sequelize = require('../config/connection');
const { Category, Product, ProductTag, Tag } = require('../models');

const categorySeedData = require('./categorySeed.json');
const productSeedData = require('./productSeed.json');
const tagSeedData = require('./tagSeed.json');
const productTagSeedData = require('./productTagSeed.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const seedCategories = () => Category.bulkCreate(categorySeedData);
    seedCategories();

    const seedProducts = () => Product.bulkCreate(productSeedData);
    seedProducts()

    const seedTags = () => Tag.bulkCreate(tagSeedData);
    seedTags();

    const seedProductTags = () => ProductTag.bulkCreate(productTagSeedData);
    seedProductTags()

    process.exit(0);
};

seedDatabase();