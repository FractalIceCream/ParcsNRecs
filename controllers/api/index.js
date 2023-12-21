const router = require('express').Router();

const userRoutes = require('./userRoutes');
router.use('/users', userRoutes);

const parksRoutes = require('./parksRoutes');
router.use('/parks', parksRoutes);

module.exports = router;