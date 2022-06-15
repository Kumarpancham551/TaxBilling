const express = require('express');
const router = express.Router();
const helpController = require("../../controller/helpController");
const employeeController = require("../../controller/employeeController");

router.get("/help",helpController.helpDetails);
router.patch("/employee",employeeController.update);
router.get("/employee/:id/tax",employeeController.calculateTax)

module.exports = router;