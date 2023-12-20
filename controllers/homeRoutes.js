const router = require('express').Router();
// const { Project, User } = require('../models');
// const withAuth = require('../utils/auth');
require('dotenv').config();


const test = require('../public/js/test');

const npsUrl = `https://developer.nps.gov/api/v1/`;

router.get('/', async (req, res) => {
    try {

        res.render('homepage');
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;
