const router = require('express').Router();
const { Project, User } = require('../models');
const withAuth = require('../utils/auth');
require('dotenv').config();


const test = require('../public/js/test');

const npsUrl = `https://developer.nps.gov/api/v1/`;

router.get('/', async (req, res) => {
    try {
        const getString = 'multimedia/galleries/';
        let url = `https://developer.nps.gov/api/v1/${getString}?limit=1&q=astronomy&api_key=${process.env.API_KEY}`;
        const test = async (event) => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                console.log(data.data[0].images[0]);

            } catch (error) {
                console.log(error);
                console.log('this isnt it');
            }
        }
        test();

        res.render('homepage');
    } catch (err) {
        res.status(500).json(err);
    }
});
router.get('/:string', async (req, res) => {
    try {
        // const getString = 'multimedia/galleries/';
        // let url = `https://developer.nps.gov/api/v1/${getString}?limit=1&q=astronomy&api_key=${process.env.API_KEY}`;
        let url = `${npsUrl}parks?stateCode=${req.params.string}&limit=2&api_key=${process.env.API_KEY}`;
        // const test = async (event) => {
        // try {
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data.data[0].fullName);

        // console.log(data.data[0].images);
        // const datum = data.map((arr)=>arr.get({plain:true}));
        // console.log(datum);
        // const res = data.data[0].fullName;

        // } catch (error) {
        // console.log(error);
        // console.log('this isnt it');
        // }
        // }
        // test();

        res.render('homepage', data);
    } catch (err) {
        res.status(500).json(err);
    }
});
// router.get('/project/:id', async (req, res) => {
//   try {
//     const projectData = await Project.findByPk(req.params.id, {
//       include: [
//         {
//           model: User,
//           attributes: ['name'],
//         },
//       ],
//     });

//     const project = projectData.get({ plain: true });

//     res.render('project', {
//       ...project,
//       logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // Use withAuth middleware to prevent access to route
// router.get('/profile', withAuth, async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//       include: [{ model: Project }],
//     });

//     const user = userData.get({ plain: true });

//     res.render('profile', {
//       ...user,
//       logged_in: true
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/login', (req, res) => {
//   // If the user is already logged in, redirect the request to another route
//   if (req.session.logged_in) {
//     res.redirect('/profile');
//     return;
//   }

//   res.render('login');
// });

module.exports = router;
