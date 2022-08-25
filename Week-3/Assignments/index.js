// import express module
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

// parse application
app.use(cookieParser());

// using pug
app.set("view engine", "pug");

// create an api to caclulate
app.get("/data", (req, res) => {
  // check if query exit
  if (req.query.number) {
    const queryNumber = Number(req.query.number); // transfer query to number by Number(); if the query is not a number it return NaN

    // query number must be integer number
    if (Number.isInteger(queryNumber)) {
      let total = ((1 + queryNumber) * queryNumber) / 2; //  If N is very large, it's better than using for-loop (1+2+....+N).

      res.send(total.toString());
    } else {
      res.send("Wrong Parameter");
    }
  } else {
    res.send("Lack of Parameter");
  }
});

// Serving static files by express.static()
app.use(express.static("public"));

// get request from /myName, if no cookies then render myName.pug
app.get("/myName", (req, res) => {
  const name = req.cookies.name;
  if (name) {
    res.send(`Your name is : ${name}`);
  } else {
    res.render("myName");
  }
});

// get request from /trackName, can get query string
app.get("/trackName", (req, res) => {
  console.log(req.query.name);
  res.cookie("name", req.query.name);
  res.redirect("/myName");
});

// set port to 3000
app.listen(3000);
