const router = require('express').Router();
const { npsUrl, apiKey } = require('../config/connection');
const { get_by_StateCode } = require('../utils/helpers');
// require('../utils/helpers');


router.get('/:string', async (req, res) => {
    try {
        const data = await get_by_StateCode(req.params.string);
        console.log(npsUrl + apiKey);
        // const url = `${npsUrl}parks?stateCode=${req.params.string}&limit=10&api_key=${apiKey}`;
        // const response = await fetch(url);
        // const data = await response.json();
        res.render('search', data);
        // res.render('search', data);
    } catch (err) {
        res.status(500).json(err);
    }
    // res.render('homepage', data);
});

module.exports = router;