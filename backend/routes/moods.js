const express = require('express');
const router = express.Router();
const moodsController = require('../controllers/moodsController');


router.route('/')
    .get(moodsController.getAllMoods)
    .post(moodsController.createNewMood)

module.exports = router;