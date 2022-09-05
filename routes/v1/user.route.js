const express = require('express');
const userControllers = require('../../controllers/user.controllers');

const router = express.Router();

router
    .route('/all')
    .get(userControllers.getAllUsers)

router
    .route('/random')
    .get(userControllers.getArandomUser)


router
    .route('/save')
    .post(userControllers.saveAuser)

router
    .route('/update/:id')
    .patch(userControllers.updateAuser)

router
    .route('/bulk-update')
    .patch(userControllers.bulkUserUpdate)

router
    .route('/delete/:id')
    .delete(userControllers.deleteAuser)

module.exports = router;
