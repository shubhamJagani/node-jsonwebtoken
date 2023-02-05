const express = require("express");
const router = express.Router();
const user = require("./user");
const auth = require("./auth");
const { authorize } = require("../middleware/authorization");

router.use("/", auth);
router.use("/users", authorize, user);

module.exports = router;
