var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.json({
    title: "Mool assignment server",
    text: "Check the available routes and hit the appropiate once",
    routes: {
      "Declaration screen assignment":
        "http://localhost:10203/assignment/declarations",
    },
  });
});

module.exports = router;
