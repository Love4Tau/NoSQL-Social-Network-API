const router = require('express').Router();

//import route files
const thoughtRoutes = require("./thoughtRoutes");
const userRoutes = require("./userRoutes");

router.use("/thoughts", thoughtRoutes);
router.use("/users", userRoutes);

module.exports = router;