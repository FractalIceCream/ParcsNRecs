const router = require('express').Router();
const { Parks, UserParks } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    // console.log(req.body);
    // console.log(req.session.user_id);

    const parkData = await Parks.findOrCreate({
      where: { park_code: req.body.park_code },
      defaults: req.body
    });
    // console.log(parkData);
    // console.log(created);
    // if (!created) {
    //   res.status(400).json("Park is already in the database");
    // }

    // try {
    //   console.log(parkData.id);
    //   // console.log(res);
    // const parks_id = await Parks.findByPk({
    //   where: { park_code: parkData.park_code }
    // });
    // console.log(parks_id);
    // try {
    //   console.log(parkData.park_id);
    //   const user_parks = await UserParks.create({
    //     parks_id: parkData.park_id,
    //     user_id: req.session.user_id,
    //   })
    //   // const user_parks = await UserParks.findOfCreate({
    //   //   where: { parks_id: parkData.park_id, user_id: req.session.user_id },
    //   //   default: { parks_id: parkData.park_id, user_id: req.session.user_id }
    //   // });

    // } catch (err) {
    //   res.status(401).json(err);
    // }
    req.session.save(async () => {
      // req.session.user_id = userData.id;
      req.session.logged_in = true;


      // try {
      //     await UserParks.findOrCreate({
      //         where: { user_id: req.session.user_id,
      //                 parks_id: req.body}
      //     })
      // } catch (error) {

      // }
      res.status(200).json(parkData);
    });
    // console.log(req.session.user_id);
    // console.log(user_parks);

  } catch (err) {
    res.status(400).json(err);
  }
});


router.get('/', async (req, res) => {
  try {
    const data = await Parks.findAll({
      include: [{ model: User }]
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);

  }
})

module.exports = router;