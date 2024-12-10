
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express();

import mysql from 'mysql'

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "diabetreatment", 
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

// Read
app.get("/api/get", (req, res) => {
    const sqlSelect = "SELECT * FROM doctors";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
})

// Create
app.post("/api/insert", (req, res) => {

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const address = req.body.address;
    const city = req.body.city;
    const gender = req.body.gender;
    const position = req.body.position;
    const dateHired = req.body.dateHired;
    const payRate = req.body.payRate;
    const email = req.body.email;
    const password = req.body.password;

    const sqlInsert = "INSERT INTO doctors (fname, lname, address, city, gender, position,date_hired, pay_rate, email, password) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
    db.query(sqlInsert, [firstName, lastName, address, city, gender, position, dateHired, payRate, email, password], (err, result) => {
        console.log(result);
        if (err) console.log(err);
    });
})


// Delete
app.delete('/api/delete/:movieName', (req, res) => {
    const name = req.params.movieName;
    const sqlDelete = "DELETE FROM movie_reviews WHERE movieName = ?";
    db.query(sqlDelete, name, (err, result) => {
        if (err) console.log(err);
    })
})

// Update
app.put('/api/update', (req, res) => {

    const id = req.body.id;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const address = req.body.address;
    const city = req.body.city;
    const gender = req.body.gender;
    const position = req.body.position;
    const dateHired = req.body.dateHired;
    const payRate = req.body.payRate;
    const email = req.body.email;
    const password = req.body.password;

    const sqlUpdate = "UPDATE doctors SET fname = ?, lname= ?, address = ?, city = ?,gender = ?, position = ? , date_hired = ?, pay_rate = ?, email = ? , password = ? WHERE id = ?";
    db.query(sqlUpdate, [firstName,lastName,address,city,gender,position,dateHired,payRate,email,password,id], (err, result) => {
    if(err) console.log(err);
    res.send(result);
    })
})

app.listen(5000, () => {
    console.log('running on port 5000');
})