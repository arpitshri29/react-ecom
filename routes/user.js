//Require
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello from node, Mr. Arpit!');
});

module.exports = router;