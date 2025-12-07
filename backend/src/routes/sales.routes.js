const router = require("express").Router();
const { getSales } = require("../controllers/sales.controller");

router.get("/", getSales);

module.exports = router;
