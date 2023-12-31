const router = require('express').Router();
const { Park, UserPark, User } = require('../../models');
const withAuth = require('../../utils/auth');

//API post request Park 
router.post('/', withAuth, async (req, res) => {
  try {
    await Park.findOrCreate({
      where: { park_code: req.body.park_code },
      defaults: req.body
    });
    res.status(200).json("favorited");
  } catch (err) {
    res.status(400).json(err);
  }
});


//API get request park data used for dev troubleshooting
router.get('/', async (req, res) => {
  try {
    const data = await Park.findAll({
      include: [{ model: User }]
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);

  }
})

module.exports = router;