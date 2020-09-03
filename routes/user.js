//Require
const express = require('express');
const router = express.Router();

const { requireSignin } = require('../controllers/auth');

const { userById } = require('../controllers/user');

router.param('userId', userById);

router.get('/secret/:userId', requireSignin, (req, res) => {
    res.json({
        user: req.profile
    })
});

module.exports = router;