const router = require('express').Router();
const { Park, UserPark, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
  try {
    const data = await UserPark.findAll();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);

  }
})

module.exports = router;