const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// Use API Routes
router.use("/api", apiRoutes);

// If no routes are hit, send React
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;