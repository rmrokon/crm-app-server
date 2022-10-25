const express = require('express');
const dealControllers = require('../../controllers/deal.controllers');

const router = express.Router();

router.route('/')
    .get(dealControllers.getDeals)
    .post(dealControllers.addDeal)
    .put(dealControllers.updateDeal)

router.route('/:id')
    .get(dealControllers.getDealById)
module.exports = router;
