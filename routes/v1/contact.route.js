const express = require('express');
const contactControllers = require('../../controllers/contact.controllers');

const router = express.Router();

router.route('/')
    .get(contactControllers.getContacts)
    .post(contactControllers.addContact)
    .put(contactControllers.updateContact)

router.route('/:id')
    .get(contactControllers.getContactById)

module.exports = router;
