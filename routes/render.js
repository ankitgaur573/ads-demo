var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/getJS', async (req, res, next) => {
    res.sendFile(path.resolve('public/render.js'));
});

router.get('/getAds', async (req, res, next) => {
    let response = {"image": "http://localhost:3000/static/demo.jpg"};
    res.send(response);
});

module.exports = router;

