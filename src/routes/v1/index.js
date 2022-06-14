const express = require('express');
const router = express.Router();
const helpController = require("../../controller/helpController");
const employeeController = require("../../controller/employeeController");

router.get("/help",helpController.helpDetails);
router.patch("/employee",employeeController.update);

module.exports = router;