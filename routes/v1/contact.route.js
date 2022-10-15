const express = require('express');
const contactControllers = require('../../controllers/contact.controllers');

const router = express.Router();

router.route('/')
    .get(contactControllers.getAccounts)
    .post(contactControllers.addAccount)
    .put(contactControllers.updateAccount)

module.exports = router;
