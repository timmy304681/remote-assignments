// import express module
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
// parse application

app.use(cookieParser());

// using pug
app.set("view engine", "pug");

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

// Serving static files in Express
app.use(express.static("public"));

// myName
app.get("/myName", (req, res) => {
  const name = req.cookies.name;
  if (name) {
    res.send(`Your name is : ${name}`);
  } else {
    res.render("myName");
  }
});

// get request can get query string
app.get("/trackName", (req, res) => {
  console.log(req.query.name);
  res.cookie("name", req.query.name);
  res.redirect("/myName");
});

// set port 3000
app.listen(3000);
