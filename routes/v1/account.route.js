const express = require('express');
const accountControllers = require('../../controllers/account.controllers');

const router = express.Router();

router.route('/')
    .get(accountControllers.getAccounts)
    .post(accountControllers.addAccount)
    .put(accountControllers.updateAccount)

router.route('/:id')
    .get(accountControllers.getAccountById)

module.exports = router;
