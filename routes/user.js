//Require
const express = require('express');
const router = express.Router();

const {arp} = require('../controllers/user');

router.get('/', arp);

module.exports = router;