const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");

const app = express();

// parse application
app.use(bodyParser.urlencoded({ extended: false }));
// using pug
app.set("view engine", "pug");

// welcome page
app.get("/", async (req, res) => {
  res.render("index");
});

/** Function **/

// check email format
function checkEmail(email) {
  /* Email R egular Expression , reference: https://ithelp.ithome.com.tw/articles/10094951 */
  const emailRule =
    /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
  if (email.search(emailRule) != -1) {
    return true;
  } else {
    return false;
  }
}

function insertSQL(sql, post, res) {
  conn.query(sql, post, (err, results) => {
    if (err) throw err;
    console.log(results);
  });
  res.redirect("/member");
}

/** main **/
//Create db & table
/* Notes
If using XAMPP, set host: "192.168.64.2", can dump SQL by phpMyAdmin
I still couldn't find the script (mysql,mysqldump) PATH about XAMPP in macos, so I couldn't use command line to solve everything I need
Finally, I choose mySQL workbetch, because it's simple to use (already set in PATH)
*/
const conn = mysql.createConnection({
  host: "localhost",
  user: "yangtui",
  password: "",
});
app.get("/createDBTable", async (req, res) => {
  let sql_db = "CREATE DATABASE assignment;";
  conn.query(sql_db, (err, results) => {
    if (err) throw err;
    console.log(results);
  });
  const sql_table =
    "CREATE TABLE assignment.user(id int AUTO_INCREMENT, email VARCHAR(255), password VARCHAR(255) , PRIMARY key(id));";
  // Column id should be a primary key and increase automatically

  conn.query(sql_table, async (err, results) => {
    if (err) throw err;
    console.log(results);
  });

  res.send("Posts DB and table created...");
});

// Sign-up , add account to MySQL
app.post("/sign-up", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const emailValid = await checkEmail(email);

  const sqlFind = `SELECT email FROM assignment.user WHERE email = "${email}"`;

  conn.query(sqlFind, async (err, results) => {
    /* check three conditions
    1. If the email is already in the database.
    2. If the email is valid.
    3. If the password input.
    */
    if (results.length === 0 && emailValid && password) {
      // insert user email and passport to MySQL

      const post = {
        email: `${email}`,
        password: `${password}`,
      };
      const sql = "INSERT INTO assignment.user SET ?";
      await insertSQL(sql, post, res);
    } else {
      const signUpError = true;
      res.render("index", { signUpError });
    }
  });
});

// Sign-in , check if account is in MySQL
app.post("/sign-in", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const sqlFind = `SELECT email FROM assignment.user WHERE email = "${email}" AND password ="${password}"`;

  conn.query(sqlFind, async (err, results) => {
    if (results.length === 1) {
      res.redirect("/member");
    } else {
      let signInError = true;
      res.render("index", { signInError });
    }
  });
});

app.get("/member", async (req, res) => {
  res.render("member");
});

app.listen("3000", async () => {
  console.log("Server started  on port 3000");
});
