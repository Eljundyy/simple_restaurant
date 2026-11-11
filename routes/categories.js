const express = require('express');
const router = express.Router();


// routes
router.get("/", (req, res) => {
    res.send("Get route for categories");
});

// export function router
module.exports = router;