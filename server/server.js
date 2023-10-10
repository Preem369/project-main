const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "12345678",
  database: 'webavb',
});

app.get("/user", (req, res) => {
  db.query("SELECT * FROM user", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/create", (req,res) => {
  const fullname = req.body.fullname;
  const email = req.body.email;
  const tel = req.body.tel;
  db.query(
    "INSERT INTO user (fullname, email, tel) VALUES (?,?,?)",
    [fullname, email, tel],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

 



app.listen(5000, () => console.log('Server is running on port 5000'));