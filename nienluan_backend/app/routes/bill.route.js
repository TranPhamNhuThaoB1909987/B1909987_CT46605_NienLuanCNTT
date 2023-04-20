const express = require('express');
const billController = require('../controllers/bill.controller');
const router = express.Router();

router.route("/:id")
    .get(billController.getAllBillByUser)
    .post(billController.createBill)
    .delete(billController.deleteBill)
    

module.exports = router;