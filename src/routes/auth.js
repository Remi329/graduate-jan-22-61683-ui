const e = require("express");
const express = require("express");
const db = require("../db/connection");
const body_parser = require("body-parser");
const router = express.Router();

// endpoint - http://localhost:3000/api/v1/auth
router.get("", (req, res) => {
  res.send("Welcome to GEt method from router");
});//is outputted in postman when doing a GET

// endpoint - http://localhost:3000/api/v1/auth/login- POST-issue2 hadd wrong endpoint
//checks if the user exists in the db
router.post("/login", (req, res) => {
  const { email, password } = req.body;//issue1 request instead of req
  const connection = db;
  const statement = `select * from users where email='${email}' and password = '${password}'`;

  connection.query(statement, (error, data) => {
    const result = {};
    console.log("result:"+ result);
    if (data.rows.length != 0 ) {
      result["status"] = "success";
      result["data"] = data.rows;
      console.log(data.rows)//empty here
      
    } else {
      result["status"] = "error"; 
      console.log(error);
      result["error"] = error;
      console.log(error);
    }

    res.send(result);


  });
});

module.exports = router;
