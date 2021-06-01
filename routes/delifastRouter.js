const express = require('express');
const router = express.Router();

let controller = require('../controllers/delifastController');

router.post('/checkout', controller.receivePayment);
router.post('/send', controller.sendPayment);
router.post("/refund", controller.refundPayment);
router.get('/createuser', controller.createUser);
router.get('/clienttoken', controller.getClientToken);

module.exports = router;