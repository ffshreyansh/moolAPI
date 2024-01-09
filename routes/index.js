var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.json({
    title: "Mool assignment server",
    text: "hit the /assignment routes for assigment payload",
  });
});

module.exports = router;
