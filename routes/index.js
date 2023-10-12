const express = require('express');
const router = express.Router();
// const { window, max_limit } = require('../config');
const controller = require('../controllers');

/**
 * REGULAR HANDLER
 */

// eslint-disable-next-line no-unused-vars
const regular_handler = (params, req, res, next) => {
    return res.status(params?.code).send(params);
};

router.post('/sign_up', controller.registerUser, regular_handler);
router.post('/add_state', controller.addState, regular_handler);
router.post('/add_city', controller.addCity, regular_handler);
router.post('/add_company', controller.addCompany, regular_handler);

module.exports = router;
