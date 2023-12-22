const router = require('express').Router();
const { Park, User } = require('../models');
const withAuth = require('../utils/auth');
require('dotenv').config();
const { get_by_ParkCode } = require('../utils/helpers');


//homepage render 
router.get('/', async (req, res) => {
  try {
    res.render('homepage', {
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//profile page render with Auth based of session's user_id
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: { model: Park }
    });

    //user data remapped to get array of park codes and retrieve data.json with helper function by park code
    const user = userData.get({ plain: true });
    const parkCodes = user.parks.map((obj) => obj.park_code);
    const data = await get_by_ParkCode(parkCodes);

    res.render('profile', {
      ...user,
      data,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//login render to profile page
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }
  res.render('login');
});

module.exports = router;
