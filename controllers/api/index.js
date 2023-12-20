const router = require('express').Router();

// const projectRoutes = require('./projectRoutes');
// router.use('/projects', projectRoutes);


// const searchRoutes = require('../searchRoutes');
// router.use('/search', searchRoutes);

const userRoutes = require('./userRoutes');
router.use('/users', userRoutes);

const parksRoutes = require('./parksRoutes');
router.use('/parks', parksRoutes);

module.exports = router;