const express = require('express');
const router = express.Router();


// routes
router.get("/", (req, res) => {
    res.json({
        message: "List of categories",
        data: [
            {id: 1, name: "Appetizers"},
            {id: 2, name: "Main Courses"},
        ]
    });
});

// export function router
module.exports = router;