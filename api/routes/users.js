var express = require("express");
var router = express.Router();
var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "test",
});
connection.connect();
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/new", function (req, res, next) {
  var post = {
    id: req.body.id,
    prod_name: req.body.prod_name,
    prod_type: req.body.prod_type,
    prod_status: req.body.prod_status,
    prod_desc: req.body.prod_desc,
    prod_quantity: req.body.prod_quantity,
    cust_name: req.body.cust_name,
    cust_number: req.body.cust_number,
    cust_mail: req.body.cust_mail,
  };
  connection.query("insert into posts set?", post, function (
    error,
    results,
    fields
  ) {
    if (error) throw error;
    res.send(JSON.stringify(results));
  });
  console.log("Added");
});

router.get("/list", function (req, res, next) {
  connection.query("select * from posts", function (error, results, fields) {
    if (error) throw error;
    res.send(JSON.stringify(results));
  });
  console.log("Retrieved");
});

router.post("/update", function (req, res, next) {
  var post = {
    id: req.body.id,
    prod_name: req.body.prod_name,
    prod_type: req.body.prod_type,
    prod_status: req.body.prod_status,
    prod_desc: req.body.prod_desc,
    prod_quantity: req.body.prod_quantity,
    cust_name: req.body.cust_name,
    cust_number: req.body.cust_number,
    cust_mail: req.body.cust_mail,
  };
  connection.query(
    "update posts set ? where id =?",
    [post, req.body.id],
    function (error, results, fields) {
      if (error) throw error;
      res.send(JSON.stringify(results));
    }
  );
  console.log("edited");
});

router.delete("/remove", function (req, res) {
  var data=req.body.id;
  console.log(data)
  connection.query("DELETE FROM POSTS WHERE id=  ?", data, function (
    error,
    results,
    field
  ) {
    if (error) throw error;
    res.send(JSON.stringify(results));
  });
 
  console.log(Removed);
});
module.exports = router;
