const router = require('express').Router();
// const userRoutes = require('./userRoutes');
// const projectRoutes = require('./projectRoutes');

// router.use('/users', userRoutes);
// router.use('/projects', projectRoutes);

const searchRoutes = require('./searchRoutes');
router.use('/search', searchRoutes);


module.exports = router;