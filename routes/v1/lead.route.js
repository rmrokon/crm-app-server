const express = require('express');
const leadControllers = require('../../controllers/lead.controller');

const router = express.Router();

router.route('/')
    .get(leadControllers.getLeads)
    .post(leadControllers.addLead)
    .put(leadControllers.updateLead)

router.route('/:id')
    .get(leadControllers.getLeadById)

module.exports = router;
